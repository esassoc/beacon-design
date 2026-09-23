/**
 * Project lists — the named subsets a project keeps over its registries.
 *
 * A project accumulates three registries during setup: actions, obligations and
 * commitments. A LIST is a named, ordered subset of one of them, kept so the
 * project can hand that subset to someone: a contractor at construction kickoff,
 * a biologist on a field form, a reviewer signing off a submittal. Beacon already
 * ships action lists and commitment lists; this module models all three, and models
 * the obligation list most fully because it is the one that has to
 * produce OUTPUT — a Word document, a CSV, and the field elements of a Fulcrum form.
 *
 * Two things a list owns that its registry does not, and they exist because the
 * output is the point:
 *   - a LIST-SPECIFIC DESCRIPTION per obligation, overriding the registry's for
 *     this list's output only (a contractor summary says it differently than the
 *     compliance registry does);
 *   - NAME OVERRIDES on a category or subcategory, again for this list only, so
 *     "Hazardous materials" can read "Chemicals and fuels on site" on a contractor
 *     document without editing the registry's taxonomy.
 * Neither mutates the registry. Removing an obligation from a list removes the
 * MEMBER row, never the obligation.
 *
 * Everything below the seeds is a pure derivation: `listTree` is what the detail
 * page renders, `formFields` is what the JSON export shows. No screen value is
 * authored anywhere but here.
 */
import {
  COMMITMENT_CHAIN,
  ITP,
  OBLIGATION_CLASS_LABEL,
  OBLIGATION_TREE,
  REQUIREMENT_TYPE_LABEL,
  SETUP_STEPS,
  type ObligationClass,
  type ObligationNode,
  type RequirementType,
  type SetupStepToken,
  type WizardAction,
  type WizardRequirement,
} from './setup-wizard';
import INDEX_MEMBERSHIPS from './compliance-index-memberships.json';
import { implementationsOf, type ListImplementation } from './list-implementations';

/* ── Types ──────────────────────────────────────────────────────────────── */

/** The three registries a list can be drawn from. There is no fourth. */
export type ListType = 'action' | 'obligation' | 'commitment';

/** What the type is called in the index and the create dialog. */
export const LIST_TYPE_LABEL: Record<ListType, string> = {
  action: 'Action list',
  obligation: 'Obligation list',
  commitment: 'Commitment list',
};

/**
 * Title Case, where LIST_TYPE_LABEL is sentence case. Declared here rather than beside
 * its callers because LIST_GROUP_LABEL reads it at module evaluation and a `const` arrow
 * declared below would still be in its temporal dead zone.
 */
const titleCase = (s: string): string => s.replace(/\b[a-z]/g, (c) => c.toUpperCase());

/** What the type holds, one line, shown beside the type in the create dialog. */
export const LIST_TYPE_BASIS: Record<ListType, string> = {
  action: 'Actions tracked together on the Tracker pages.',
  obligation: 'Standing duties exported as a document, a spreadsheet or form fields.',
  commitment: 'Permit commitments grouped for review and reporting.',
};

/** The noun a member count takes: [singular, plural]. */
export const LIST_MEMBER_NOUN: Record<ListType, readonly [string, string]> = {
  action: ['action', 'actions'],
  obligation: ['obligation', 'obligations'],
  commitment: ['commitment', 'commitments'],
};

/** "8 obligations" / "1 action" — the count with the right noun for its type. */
export const memberCountLabel = (type: ListType, n: number): string =>
  `${n} ${LIST_MEMBER_NOUN[type][n === 1 ? 0 : 1]}`;

/** The row the index lists, for a list of any type. */
export interface ProjectList {
  /** URL-safe; the detail route's last segment. */
  id: string;
  type: ListType;
  name: string;
  /** May be empty — prod's Details panel shows an en dash when it is. */
  description: string;
  /** ISO date, YYYY-MM-DD. */
  createdAt: string;
  updatedAt: string;
  /** Rows in the list. On an obligation list this is `members.length`, always. */
  memberCount: number;
}

/**
 * One obligation's membership in one list.
 *
 * A MEMBER IS NOT AN OBLIGATION. A list may hold the same registry obligation more
 * than once, each copy carrying its own wording, so the member's identity is its
 * own and every screen verb, count and export key runs off `memberId`. Keying any
 * of them off `obligationId` is what made duplicates impossible before 2026-09-16:
 * a Map keyed by obligation id silently keeps the last copy and drops the rest.
 */
export interface ObligationListMember {
  /** Unique within the list. `{obligationId}-m{n}`, minted in seed order. */
  memberId: string;
  /** The registry obligation this member points at. NOT unique within the list. */
  obligationId: string;
  /**
   * What this list says about the obligation. Overrides the registry description
   * in this list's output only; unset, the registry description is used.
   */
  description?: string;
}

export interface ObligationList extends ProjectList {
  type: 'obligation';
  members: ObligationListMember[];
  /** Category or subcategory id → the name this list uses instead of the registry's. */
  nameOverrides: Record<string, string>;
  /**
   * The GUID the public API addresses this list by. Separate from `id`, which is the
   * slug the app routes on: prod's public endpoints take a GUID, and a slug that can be
   * changed by a rename is not a stable address for a form a contractor already built.
   */
  publicId: string;
  /**
   * The key that authenticates a read of the endpoint. Rolled and revoked from the rail.
   *
   * SEEDED VALUES ARE FABRICATED ON PURPOSE, and so are every `publicId` below: repeating
   * hex runs, valid v4 shape, 36 characters so the field wraps the way a real one does.
   * Never paste a key or a list GUID off a running environment into this file. A prototype
   * only needs the SHAPE of a credential, and a real one in git is a real one leaked.
   */
  apiKey: string;
  /** When `apiKey` was last issued. ISO datetime — the rail shows date and time. */
  apiKeyGeneratedAt: string;
}

/* ── The derived tree the detail page renders ───────────────────────────── */

/**
 * An obligation as it sits in one list: the registry record plus this list's copy.
 * ONE PER MEMBER, so an obligation this list holds twice renders twice. `id` is the
 * registry obligation's and is shared by the copies; `memberId` is this row's.
 */
export interface ListObligation extends ObligationNode {
  /** This membership's own id. Unique within the list; `id` is not. */
  memberId: string;
  /** 1 for the first copy, 2 for the next, in the order the list holds them. */
  occurrence: number;
  /** How many copies of this obligation the list holds. 1 unless duplicated. */
  copies: number;
  /** The description this list exports: the member's, when it has one. */
  listDescription: string;
  /** True when the member carries its own description rather than the registry's. */
  descriptionOverridden: boolean;
}

export interface ListTreeSub {
  id: string;
  /** The name this list uses. */
  name: string;
  /** The registry's name, always — equal to `name` unless the list renamed it. */
  registryName: string;
  renamed: boolean;
  obligations: ListObligation[];
}

export interface ListTreeCat {
  id: string;
  name: string;
  registryName: string;
  renamed: boolean;
  subcategories: ListTreeSub[];
  /** Members filed under this category, across its subcategories. */
  count: number;
}

/* ── Seeds ──────────────────────────────────────────────────────────────── */

/**
 * A member pick, resolved against OBLIGATION_TREE at module load. The seeds name
 * subcategories rather than obligation ids because the ids are ULIDs the fixture
 * mints; a path is auditable by eye and survives a re-extraction.
 */
interface MemberPick {
  /** "Category › Subcategory", exactly as the registry files it. */
  path: string;
  /** Narrow to these classes. Omitted, every obligation in the subcategory. */
  classes?: ObligationClass[];
  /** Cap, applied after the class filter, in tree order. */
  limit?: number;
}

const PATH_SEP = ' › ';

/** Every registry obligation, with the path it is filed under. */
const FILED: { path: string; catId: string; subId: string; node: ObligationNode }[] = [];
for (const cat of OBLIGATION_TREE)
  for (const sub of cat.subcategories)
    for (const node of sub.obligations)
      FILED.push({ path: `${cat.name}${PATH_SEP}${sub.name}`, catId: cat.id, subId: sub.id, node });

/** A member's id: the obligation it points at, plus which copy of it this is. */
const memberIdFor = (obligationId: string, copy: number) => `${obligationId}-m${copy}`;

/**
 * Resolve the picks to members. The dedupe here is a SEED hygiene check — a pick that
 * overlaps another should not quietly double the list — and is the only dedupe left in
 * this file. A second copy is deliberate, and arrives through `duplicates` below.
 */
const pickMembers = (picks: MemberPick[]): ObligationListMember[] => {
  const out: ObligationListMember[] = [];
  const seen = new Set<string>();
  for (const pick of picks) {
    let hits = FILED.filter((f) => f.path === pick.path);
    if (pick.classes) hits = hits.filter((f) => pick.classes!.includes(f.node.class));
    if (pick.limit !== undefined) hits = hits.slice(0, pick.limit);
    for (const h of hits) {
      if (seen.has(h.node.id)) continue;
      seen.add(h.node.id);
      out.push({ memberId: memberIdFor(h.node.id, 1), obligationId: h.node.id });
    }
  }
  return out;
};

/**
 * A second membership for an obligation the list already holds, with its own wording.
 *
 * What a duplicate is FOR: the same duty asked about twice in one form, because the
 * two askings want different instructions. What it is NOT for is filing the obligation
 * somewhere else — filing belongs to the registry, and both copies sit in the
 * subcategory the registry files the obligation under.
 */
const duplicateByTitle = (
  members: ObligationListMember[],
  copies: Record<string, string>,
): ObligationListMember[] => {
  const out = [...members];
  for (const [title, description] of Object.entries(copies)) {
    const filed = FILED.find((f) => f.node.title === title);
    if (!filed) continue;
    const held = out.filter((m) => m.obligationId === filed.node.id).length;
    if (!held) continue;
    out.push({ memberId: memberIdFor(filed.node.id, held + 1), obligationId: filed.node.id, description });
  }
  return out;
};

/** Resolve a "Category › Subcategory" path (or a bare category name) to its id. */
const idOfPath = (path: string): string => {
  const [catName, subName] = path.split(PATH_SEP);
  const cat = OBLIGATION_TREE.find((c) => c.name === catName);
  if (!cat) return '';
  if (!subName) return cat.id;
  return cat.subcategories.find((s) => s.name === subName)?.id ?? '';
};

/** Apply list-specific descriptions to the members whose obligation has that title. */
const describeByTitle = (members: ObligationListMember[], copy: Record<string, string>): ObligationListMember[] =>
  members.map((m) => {
    const title = FILED.find((f) => f.node.id === m.obligationId)?.node.title ?? '';
    const description = copy[title];
    return description ? { ...m, description } : m;
  });

const obligationList = (
  seed: Omit<ObligationList, 'type' | 'memberCount' | 'members' | 'nameOverrides'> & {
    picks: MemberPick[];
    /** Obligation title → the sentence this list uses instead of the registry's. */
    copy?: Record<string, string>;
    /** "Category › Subcategory" path → the name this list uses. */
    renames?: Record<string, string>;
    /** Obligation title → the wording on a SECOND copy of it this list holds. */
    duplicates?: Record<string, string>;
  },
): ObligationList => {
  const { picks, copy = {}, renames = {}, duplicates = {}, ...rest } = seed;
  const members = duplicateByTitle(describeByTitle(pickMembers(picks), copy), duplicates);
  const nameOverrides: Record<string, string> = {};
  for (const [path, name] of Object.entries(renames)) {
    const id = idOfPath(path);
    if (id) nameOverrides[id] = name;
  }
  return { ...rest, type: 'obligation', members, nameOverrides, memberCount: members.length };
};

export const OBLIGATION_LISTS: ObligationList[] = [
  obligationList({
    id: 'construction-kickoff-summary',
    publicId: '11111111-1111-4111-8111-111111111111',
    apiKey: '0f0f0f0f-0f0f-4f0f-8f0f-0f0f0f0f0f0f',
    apiKeyGeneratedAt: '2026-08-19T16:26:00',
    name: 'Construction Kickoff Summary',
    description: 'Issued to each prime contractor at kickoff, and re-issued when a permit amendment changes a duty.',
    createdAt: '2026-08-19',
    updatedAt: '2026-09-12',
    picks: [
      { path: 'Site conduct › Speed limits' },
      { path: 'Site conduct › Work hours' },
      { path: 'Site conduct › Access routes and parking' },
      { path: 'Site conduct › Trash and food waste' },
      { path: 'Site conduct › Pets, firearms and campfires' },
      { path: 'Hazards › Spill prevention and response' },
      { path: 'Hazards › Refueling and equipment servicing' },
      { path: 'Hazards › Fire prevention' },
      { path: 'Hazards › Hazardous materials' },
      { path: 'Lighting › Lighting near habitat and waters' },
    ],
    renames: {
      'Hazards › Hazardous materials': 'Chemicals and fuels on site',
      'Site conduct › Pets, firearms and campfires': 'Personal items and conduct',
    },
    copy: {
      'Nighttime Speed Limit': 'After dark, 15 mph on every unpaved surface inside the work area, including haul roads.',
      'Unpaved Road Speed Limit': '20 mph on unpaved roads in daylight. Posted at each gate.',
      'Trash Removal Cadence': 'Haul all trash off site at the end of every shift. Nothing stays overnight.',
      'Spill Kits On Site': 'Keep a stocked spill kit within reach of every fuel transfer and every piece of equipment working over water.',
      'Refueling Practices': 'Refuel at least 100 feet from any water body, over secondary containment, with an attendant present.',
      'Fire Suppression Supplies On Site': 'An extinguisher and a shovel ride with every crew working in dry vegetation.',
      'Night Lighting Spill Control': 'Shield and aim every night fixture down and inward. No light crosses the work-area boundary.',
    },
    duplicates: {
      // The same duty asked twice in one form: once as the standing condition above,
      // once as the shift-end check. Two members, two instructions, one obligation.
      'Spill Kits On Site': 'At shift end, confirm every kit drawn from today was restocked before the crew leaves.',
    },
  }),
  obligationList({
    id: 'biological-monitoring-field-form',
    publicId: '22222222-2222-4222-8222-222222222222',
    apiKey: '1a1a1a1a-1a1a-4a1a-8a1a-1a1a1a1a1a1a',
    apiKeyGeneratedAt: '2026-08-26T09:12:00',
    name: 'Biological Monitoring Field Form',
    description: 'The daily monitoring form the designated biologists submit from Fulcrum.',
    createdAt: '2026-08-26',
    updatedAt: '2026-09-15',
    picks: [
      { path: 'Site conduct › Compliance inspections and records', classes: ['monitor'] },
      { path: 'Birds › Nesting birds', classes: ['monitor'] },
      { path: 'Amphibians and reptiles › Amphibians', classes: ['monitor'], limit: 6 },
      { path: 'Fish › Fish rescue and salvage', classes: ['monitor'] },
    ],
    renames: { 'Site conduct › Compliance inspections and records': 'Daily record' },
    copy: {
      'Daily burrow check before work starts': 'Walk the burrow transect before any equipment moves. Record every occupied burrow and its buffer.',
      'Daily monitoring of an active colony near work': 'Observe the colony at the start and end of shift. Note any change in activity.',
    },
  }),
  obligationList({
    id: 'contractor-daily-checklist',
    publicId: '33333333-3333-4333-8333-333333333333',
    apiKey: '2b2b2b2b-2b2b-4b2b-8b2b-2b2b2b2b2b2b',
    apiKeyGeneratedAt: '2026-09-02T11:47:00',
    name: 'Contractor Daily Checklist',
    description: '',
    createdAt: '2026-09-02',
    updatedAt: '2026-09-11',
    picks: [
      { path: 'Site conduct › Compliance inspections and records' },
      { path: 'Site conduct › Speed limits' },
      { path: 'Site conduct › Trash and food waste' },
      { path: 'Hazards › Refueling and equipment servicing' },
      { path: 'Water › Erosion and sediment control', limit: 4 },
    ],
    copy: {
      'Trash Load Covering': 'Tarp every load before it leaves the gate.',
    },
  }),
];

/* ── Action and commitment lists ─────────────────────────────────────────── */

/**
 * Action and commitment lists hold registry records and nothing of their own: no list
 * wording, no renames, no duplicates. Prod's action list is a grouping for the Tracker
 * pages and its commitment list a grouping for review, so a member is a pointer and
 * the list is the set of pointers.
 *
 * Members are resolved from the ITP fixture by a predicate per list, so every row on the
 * detail page is a real action or commitment and `memberCount` is the resolved count —
 * never a seeded number the page could disagree with.
 */
export interface ActionList extends ProjectList {
  type: 'action';
  /** ITP action ids, in the order the list holds them. */
  actionIds: string[];
}

export interface CommitmentList extends ProjectList {
  type: 'commitment';
  /** Commitment codes ("COA 10.18"), in code order. */
  codes: string[];
}

/**
 * One member row as the generic list tree renders it. Actions and commitments both
 * reduce to this; the obligation list keeps its own richer model above.
 */
export interface ListMemberRow {
  /** Unique within the list. Actions and commitments cannot repeat, so it is the id. */
  memberId: string;
  /** The registry record: an action id, or a commitment code. */
  id: string;
  title: string;
  /** The tinted chip before the title (an action's type). Absent on a commitment. */
  chip?: { label: string; tone: string };
  /** A commitment code shown on the row itself (commitment lists). */
  code?: string;
  /** The grouping the list's first view files it under (an action's type). */
  groupId: string;
  groupName: string;
  /** The requirements behind the record, read only. `index` is where each one files in
   *  the compliance index, "Category::Subcategory" (see `indexOf`). */
  reqs: { id: string; code: string; name: string; index?: string[] }[];
  /** An action's implementations, one per component, rendered as the card's children in
   *  place of `reqs` (Andy, 2026-09-23). Absent on a commitment, which keeps its
   *  requirements. `reqs` still rides along: the views file a card by them. */
  impls?: ListImplementation[];
  /** The source document a commitment comes from (commitment lists' Source filter). */
  source?: string;
}

/** A group of candidates in an add drawer. */
export interface MemberGroup {
  id: string;
  name: string;
  items: ListMemberRow[];
}

const REQ_BY_ID = new Map(ITP.requirements.map((r) => [r.id, r]));

/**
 * The compliance index: where a requirement files, as "Category::Subcategory" pairs.
 * Copied from Aldo's dcp-index run (data/runs/dcp-index/opus-memberships.json,
 * 2026-09-21), which placed all 854 ITP requirements in the proposed index. A
 * requirement can file in several places (the index of a book, not a folder), and an
 * action files wherever its requirements do.
 */
export const indexOf = (reqId: string): string[] =>
  (INDEX_MEMBERSHIPS as Record<string, string[]>)[reqId] ?? [];

export const ACTION_BY_ID = new Map(ITP.actions.map((a) => [a.id, a]));

/** Every commitment the fixture knows, code → title, in code order. */
export const COMMITMENT_TITLES: Record<string, string> = Object.fromEntries(
  COMMITMENT_CHAIN.map((c) => [c.code, c.title]),
);

const actionText = (a: WizardAction) => `${a.name} ${a.text} ${a.timing?.stated ?? ''}`;

/** A list's member predicate. Evaluated once, at module load. */
type ActionPick = (a: WizardAction) => boolean;

const DESK_TYPES = new Set<RequirementType>(['Reporting', 'Plan', 'ApprovalAndConsultation', 'Financial', 'Analysis', 'Design', 'Other']);

const actionList = (
  l: Omit<ProjectList, 'type' | 'memberCount' | 'description'> & { description?: string; pick: ActionPick; limit?: number },
): ActionList => {
  const { pick, limit, ...rest } = l;
  const hits = ITP.actions.filter(pick).sort((a, b) => a.name.localeCompare(b.name));
  const actionIds = (limit === undefined ? hits : hits.slice(0, limit)).map((a) => a.id);
  return { description: '', ...rest, type: 'action', actionIds, memberCount: actionIds.length };
};

export const ACTION_LISTS: ActionList[] = [
  actionList({ id: 'annual-reporting', name: 'Annual Reporting', createdAt: '2026-03-04', updatedAt: '2026-08-28', description: 'Actions that feed the annual compliance report.',
    pick: (a) => /annual/i.test(actionText(a)) && (a.type === 'Reporting' || a.type === 'Financial') }),
  actionList({ id: 'construction-surveys-and-monitoring', name: 'Construction Surveys and Monitoring', createdAt: '2026-03-04', updatedAt: '2026-09-09',
    pick: (a) => (a.type === 'Survey' || a.type === 'Monitoring') && /construction/i.test(actionText(a)) && !/pre-?construction/i.test(a.name) }),
  actionList({ id: 'desktop-actions', name: 'Desktop Actions', createdAt: '2026-03-11', updatedAt: '2026-09-14', description: 'Everything completed off site, for the desk-based reviewers.',
    pick: (a) => DESK_TYPES.has(a.type) }),
  actionList({ id: 'fieldwork-actions', name: 'Fieldwork Actions', createdAt: '2026-03-11', updatedAt: '2026-09-14', description: 'Everything completed in the field, by crew.',
    pick: (a) => !DESK_TYPES.has(a.type) }),
  actionList({ id: 'mapping', name: 'Mapping', createdAt: '2026-04-02', updatedAt: '2026-07-22',
    pick: (a) => /\bmap|GIS\b/i.test(a.name) }),
  actionList({ id: 'monthly-reporting', name: 'Monthly Reporting', createdAt: '2026-03-04', updatedAt: '2026-08-28',
    pick: (a) => /monthly/i.test(actionText(a)) }),
  actionList({ id: 'preconstruction-surveys', name: 'Preconstruction Surveys', createdAt: '2026-03-18', updatedAt: '2026-09-10',
    pick: (a) => a.type === 'Survey' && /pre-?construction|precon/i.test(actionText(a)) }),
  actionList({ id: 'qualified-biologist-for-species', name: 'Qualified Biologist for Species', createdAt: '2026-04-15', updatedAt: '2026-08-20',
    pick: (a) => /biologist/i.test(a.name), limit: 18 }),
  actionList({ id: 'safety-plan-inclusion', name: 'Safety Plan Inclusion', createdAt: '2026-06-24', updatedAt: '2026-06-24',
    pick: () => false }),
  actionList({ id: 'survey-protocol-approval', name: 'Survey Protocol Approval', createdAt: '2026-04-15', updatedAt: '2026-07-30',
    pick: (a) => /protocol/i.test(a.name) }),
  actionList({ id: 'worker-awareness-training', name: 'Worker Awareness Training', createdAt: '2026-06-24', updatedAt: '2026-06-24',
    pick: (a) => a.type === 'TrainingAndEducation' }),
];

const commitmentList = (
  l: Omit<ProjectList, 'type' | 'memberCount' | 'description'> & { description?: string; pick: (code: string, title: string) => boolean },
): CommitmentList => {
  const { pick, ...rest } = l;
  const codes = COMMITMENT_CHAIN.filter((c) => pick(c.code, c.title)).map((c) => c.code);
  return { description: '', ...rest, type: 'commitment', codes, memberCount: codes.length };
};

// Drawn from the one permit the fixture holds, the CDFW ITP, so every row is a real
// condition with its real requirements. The two seeds that named other permits (the
// Biological Opinion, the 401) became ITP groupings with the same dates.
export const COMMITMENT_LISTS: CommitmentList[] = [
  commitmentList({ id: 'itp-2081-conditions', name: 'ITP 2081 Conditions', createdAt: '2026-02-19', updatedAt: '2026-09-08', description: 'Every condition of the incidental take permit, as issued.',
    pick: () => true }),
  commitmentList({ id: 'consultation-and-authorization', name: 'Consultation and Authorization', createdAt: '2026-02-19', updatedAt: '2026-08-14',
    pick: (_c, t) => /consult|notif|authoriz|amend/i.test(t) }),
  commitmentList({ id: 'fish-monitoring-studies', name: 'Fish Monitoring Studies', createdAt: '2026-05-06', updatedAt: '2026-09-02',
    pick: (c) => /^COA 10\.(18|19|20|21)\b/.test(c) }),
  commitmentList({ id: 'quarterly-agency-briefing', name: 'Quarterly Agency Briefing', createdAt: '2026-07-15', updatedAt: '2026-09-04', description: 'Read into the quarterly briefing deck for the resource agencies.',
    pick: (_c, t) => /report/i.test(t) }),
];

/** An action as a member row. The group is its type, the chip says the same. */
export const actionRow = (a: WizardAction): ListMemberRow => ({
  memberId: a.id,
  id: a.id,
  title: a.name,
  chip: { label: REQUIREMENT_TYPE_LABEL[a.type] ?? a.type, tone: 'action' },
  groupId: a.type,
  groupName: REQUIREMENT_TYPE_LABEL[a.type] ?? a.type,
  reqs: a.requirementIds
    .map((id) => REQ_BY_ID.get(id))
    .filter((r): r is WizardRequirement => !!r)
    .map((r) => ({ id: r.id, code: r.commitment, name: r.name, index: indexOf(r.id) })),
  impls: implementationsOf(a.id),
});

/** A commitment as a member row: its code on the row, its requirements beneath. */
export const commitmentRow = (code: string): ListMemberRow => {
  const c = COMMITMENT_CHAIN.find((x) => x.code === code)!;
  return {
    memberId: code,
    id: code,
    title: c.title,
    code,
    groupId: sectionOf(code),
    groupName: sectionOf(code),
    reqs: c.requirements.map((r) => ({ id: r.id, code, name: r.name })),
    source: SOURCE_DOCUMENT,
  };
};

/** "COA 10.18.1" → "COA 10": the permit section a commitment sits in. */
export const sectionOf = (code: string): string => code.split('.')[0];

/** A list's members, as the tree renders them. */
export const listMemberRows = (list: ActionList | CommitmentList): ListMemberRow[] =>
  list.type === 'action'
    ? list.actionIds.map((id) => ACTION_BY_ID.get(id)).filter((a): a is WizardAction => !!a).map(actionRow)
    : list.codes.map(commitmentRow);

/** Group rows by their group, groups A-Z (actions) or in code order (commitments). */
export const groupRows = (rows: ListMemberRow[], order: 'name' | 'code' = 'name'): MemberGroup[] => {
  const groups = new Map<string, MemberGroup>();
  for (const r of rows) {
    const g = groups.get(r.groupId) ?? { id: r.groupId, name: r.groupName, items: [] };
    g.items.push(r);
    groups.set(r.groupId, g);
  }
  const out = [...groups.values()];
  return order === 'code' ? out.sort((a, b) => compareCodes(a.id, b.id)) : out.sort((a, b) => a.name.localeCompare(b.name));
};

/** Registry records this list does NOT hold, grouped for the add drawer. */
export const memberCandidates = (list: ActionList | CommitmentList): MemberGroup[] => {
  if (list.type === 'action') {
    const held = new Set(list.actionIds);
    return groupRows(ITP.actions.filter((a) => !held.has(a.id)).sort((a, b) => a.name.localeCompare(b.name)).map(actionRow));
  }
  const held = new Set(list.codes);
  return groupRows(COMMITMENT_CHAIN.filter((c) => !held.has(c.code)).map((c) => commitmentRow(c.code)), 'code');
};

/** "COA 4" before "COA 10.18": compare the numeric runs, not the strings. */
export const compareCodes = (a: string, b: string): number => {
  const ka = (a.match(/\d+/g) ?? []).map(Number);
  const kb = (b.match(/\d+/g) ?? []).map(Number);
  for (let i = 0; i < Math.max(ka.length, kb.length); i++) {
    const d = (ka[i] ?? -1) - (kb[i] ?? -1);
    if (d) return d;
  }
  return a.localeCompare(b);
};

/** Every list on the project, the way the index reads it: newest change first. */
export const PROJECT_LISTS: ProjectList[] = [...ACTION_LISTS, ...OBLIGATION_LISTS, ...COMMITMENT_LISTS].sort(
  (a, b) => b.updatedAt.localeCompare(a.updatedAt) || a.name.localeCompare(b.name),
);

export const LIST_TYPE_COUNTS: Record<ListType, number> = {
  action: ACTION_LISTS.length,
  obligation: OBLIGATION_LISTS.length,
  commitment: COMMITMENT_LISTS.length,
};

export const obligationListById = (id: string): ObligationList | undefined =>
  OBLIGATION_LISTS.find((l) => l.id === id);

/* ── The index's groups ─────────────────────────────────────────── */

/**
 * The order the index stacks its three groups in: the registries in the order the
 * setup wizard fills them, so a reader who came through setup meets them again in
 * the sequence they built them.
 */
export const LIST_GROUP_ORDER: readonly ListType[] = ['commitment', 'action', 'obligation'];

// Every list type IS one of the setup wizard's entities, so its plural name, its glyph
// and its accent are read off the wizard's own step rather than restated here. Change a
// glyph or a colour in SETUP_STEPS and the Lists index moves with it; the two cannot
// drift apart, which is the whole point of reusing the marks.
const STEP_BY_TOKEN = new Map(SETUP_STEPS.map((s) => [s.token, s]));
const stepFor = (type: ListType) => {
  const step = STEP_BY_TOKEN.get(type as SetupStepToken);
  if (!step) throw new Error(`No setup wizard step carries the entity token "${type}".`);
  return step;
};

/**
 * The group heading: "Commitment Lists", not "Commitments".
 *
 * It names LISTS, and it used to name the registry — the wizard's own step label — which
 * put the heading "Commitments" over a stack of commitment LISTS and the button "Add
 * Commitment List" beside it. Singular noun, plural List, is also what Beacon already
 * ships: prod's nav reads "Action Lists" and its release notes read "Commitment Lists".
 * Built from LIST_TYPE_LABEL so the heading and the verb under it cannot drift.
 */
export const LIST_GROUP_LABEL: Record<ListType, string> = {
  commitment: `${titleCase(LIST_TYPE_LABEL.commitment)}s`,
  action: `${titleCase(LIST_TYPE_LABEL.action)}s`,
  obligation: `${titleCase(LIST_TYPE_LABEL.obligation)}s`,
};

/** The entity mark a list row carries. */
export interface ListTypeMark {
  /** `--color-<token>`: Beacon's setup-ramp accent for this entity. */
  token: SetupStepToken;
  /** The glyph's Lucide name. */
  iconName: string;
  /** Inline Lucide path markup for the entity glyph. */
  iconPaths: string;
}

const markFor = (type: ListType): ListTypeMark => {
  const { token, iconName, iconPaths } = stepFor(type);
  return { token, iconName, iconPaths };
};

export const LIST_TYPE_MARK: Record<ListType, ListTypeMark> = {
  commitment: markFor('commitment'),
  action: markFor('action'),
  obligation: markFor('obligation'),
};

/**
 * The verb on a group header, and the create dialog's heading once that verb opened it:
 * "Add Commitment List".
 *
 * Title Cased (see `titleCase`, declared above), where LIST_TYPE_LABEL is sentence case.
 * The label is prose everywhere else — a row in the details rail, a segment in the dialog,
 * the tail of an empty state — and prose is sentence case; a BUTTON is a named command and
 * takes the case Beacon's other verbs take. Casing the label at the call rather than
 * storing a second string keeps one source for what a type is called.
 */
export const addListLabel = (type: ListType): string => `Add ${titleCase(LIST_TYPE_LABEL[type])}`;

/**
 * "4 commitment lists" — a GROUP's count. It names lists, where memberCountLabel names
 * the rows inside one; the two numbers sit near each other on the index and the accessible
 * name is what keeps them apart.
 */
export const listCountLabel = (type: ListType, n: number): string =>
  `${n} ${LIST_TYPE_LABEL[type].toLowerCase()}${n === 1 ? '' : 's'}`;

/** Every list of one type, still in the index's order: newest change first. */
export const listsOfType = (type: ListType): ProjectList[] =>
  PROJECT_LISTS.filter((l) => l.type === type);

/* ── Derivations ────────────────────────────────────────────────────────── */

/**
 * The list's own tree: OBLIGATION_TREE filtered to this list's members, with the
 * list's name overrides applied. A category or subcategory holding no member
 * DROPS OUT — a list shows what it holds, never what it does not.
 */
export function listTree(list: ObligationList): ListTreeCat[] {
  // Members grouped by the obligation they point at — a LIST of members per id, never
  // one member per id. A Map<obligationId, member> is the shape that made a duplicate
  // impossible: it keeps the last copy and drops every earlier one without erroring.
  const held = new Map<string, ObligationListMember[]>();
  for (const m of list.members) {
    const kept = held.get(m.obligationId);
    if (kept) kept.push(m);
    else held.set(m.obligationId, [m]);
  }
  const cats: ListTreeCat[] = [];
  for (const cat of OBLIGATION_TREE) {
    const subs: ListTreeSub[] = [];
    for (const sub of cat.subcategories) {
      // flatMap, so an obligation held twice emits two rows — adjacent, because the
      // registry's own ordering places the obligation once and its copies follow it.
      const obligations: ListObligation[] = sub.obligations.flatMap((o) => {
        const members = held.get(o.id) ?? [];
        return members.map((m, i) => ({
          ...o,
          memberId: m.memberId,
          occurrence: i + 1,
          copies: members.length,
          listDescription: m.description || o.description,
          descriptionOverridden: !!m.description,
        }));
      });
      if (!obligations.length) continue;
      const renamed = list.nameOverrides[sub.id];
      subs.push({ id: sub.id, name: renamed ?? sub.name, registryName: sub.name, renamed: !!renamed, obligations });
    }
    if (!subs.length) continue;
    const renamed = list.nameOverrides[cat.id];
    cats.push({
      id: cat.id,
      name: renamed ?? cat.name,
      registryName: cat.name,
      renamed: !!renamed,
      subcategories: subs,
      count: subs.reduce((n, s) => n + s.obligations.length, 0),
    });
  }
  return cats;
}

/** Registry obligations this list does NOT hold, as the picker's tree. */
export function candidateTree(list: ObligationList): { id: string; name: string; subcategories: { id: string; name: string; obligations: ObligationNode[] }[] }[] {
  const held = new Set(list.members.map((m) => m.obligationId));
  return OBLIGATION_TREE.map((cat) => ({
    id: cat.id,
    name: cat.name,
    subcategories: cat.subcategories
      .map((sub) => ({ id: sub.id, name: sub.name, obligations: sub.obligations.filter((o) => !held.has(o.id)) }))
      .filter((s) => s.obligations.length > 0),
  })).filter((c) => c.subcategories.length > 0);
}

/* ── Add-drawer facets ─────────────────────────────────────────────────── */

/**
 * The values an add drawer can filter its candidates by (Andy, 2026-09-23). Some are
 * read off the requirements behind a record: the permit SECTION it answers to, the
 * PHASES and the SPECIES those requirements name. The rest are the record's own
 * fields. LIST_FACETS picks which a drawer shows. Resource Category and Tags have no
 * data in the fixture.
 */
export type FacetKey = 'source' | 'commitment' | 'phase' | 'species' | 'category' | 'class' | 'type' | 'frequency' | 'deliverable';
export type FacetValues = Partial<Record<FacetKey, string[]>>;
export interface Facet {
  key: FacetKey;
  label: string;
  options: { label: string; value: string }[];
}

export const FREQUENCY_LABEL: Record<string, string> = { Onetime: 'One time', Recurring: 'Recurring', AsNeeded: 'As needed', Ongoing: 'Ongoing' };
export const DELIVERABLE_LABEL: Record<string, string> = {
  plan: 'Plan', report: 'Report', survey: 'Survey', notification: 'Notification', training: 'Training',
  payment: 'Payment', installation: 'Installation', approval: 'Approval', other: 'Other',
};
const PHASE_ORDER = ['Implementation Planning', 'Pre-Construction', 'Construction', 'Operations', 'Maintenance', 'Post-Construction'];
const uniq = (xs: (string | null | undefined)[]) => [...new Set(xs.filter((x): x is string => !!x))];
// The permit spells a species both ways ("California Tiger Salamander", "…tiger
// salamander"); one key per species, lowercased, and the picker capitalizes it.
const speciesKey = (x: string) => x.trim().toLowerCase();

/** Section, phases and species of a set of ITP requirements. */
const reqFacets = (reqIds: string[]): FacetValues => {
  const reqs = reqIds.map((id) => REQ_BY_ID.get(id)).filter((r): r is WizardRequirement => !!r);
  return {
    commitment: uniq(reqs.map((r) => sectionOf(r.commitment))),
    phase: uniq(reqs.flatMap((r) => r.phases)),
    species: uniq(reqs.flatMap((r) => r.species).map(speciesKey)),
  };
};

/** The species an action answers to: the union of its requirements' species. */
export const actionSpecies = (a: WizardAction): string[] => reqFacets(a.requirementIds).species!.sort();

export const actionFacets = (a: WizardAction): FacetValues => ({
  ...reqFacets(a.requirementIds),
  type: [a.type],
  frequency: uniq([a.timing?.frequency]),
  deliverable: uniq([a.deliverableType]),
});

export const commitmentFacets = (code: string): FacetValues => {
  const c = COMMITMENT_CHAIN.find((x) => x.code === code);
  return { ...reqFacets(c?.requirements.map((r) => r.id) ?? []), commitment: [sectionOf(code)], source: [SOURCE_DOCUMENT] };
};

export const obligationFacets = (o: ObligationNode, catId: string): FacetValues => ({
  commitment: uniq(o.requirements.map((r) => sectionOf(r.code))),
  phase: uniq(o.phases),
  species: uniq(o.species.map(speciesKey)),
  category: [catId],
  class: [o.class],
});

/** A record's facets as the data attributes an option row carries. */
export const facetAttrs = (v: FacetValues): Record<string, string> =>
  Object.fromEntries(Object.entries(v).map(([k, xs]) => [`data-f-${k}`, (xs ?? []).join('|')]));

/** Every commitment in the fixture is carved from the one ITP (global-search.ts names it
 *  the same way). A second source document is a second value here. */
export const SOURCE_DOCUMENT = 'Incidental Take Permit (ITP) 2081';

const facetLabel = (key: FacetKey, value: string): string => {
  switch (key) {
    case 'source': return value;
    case 'commitment': return COMMITMENT_TITLES[value] ? `${value} · ${COMMITMENT_TITLES[value]}` : value;
    case 'category': return OBLIGATION_TREE.find((c) => c.id === value)?.name ?? value;
    case 'class': return OBLIGATION_CLASS_LABEL[value as ObligationClass] ?? value;
    case 'type': return REQUIREMENT_TYPE_LABEL[value as RequirementType] ?? value;
    case 'frequency': return FREQUENCY_LABEL[value] ?? value;
    case 'deliverable': return DELIVERABLE_LABEL[value] ?? value;
    // Species arrive as written in the permit ("black bass"); a picker capitalizes.
    default: return value.charAt(0).toUpperCase() + value.slice(1);
  }
};
const facetSort = (key: FacetKey) => (a: string, b: string) =>
  key === 'commitment' ? compareCodes(a, b)
  : key === 'phase' ? PHASE_ORDER.indexOf(a) - PHASE_ORDER.indexOf(b)
  : facetLabel(key, a).localeCompare(facetLabel(key, b));

/** The pickers for a drawer: only values some candidate actually has. */
export const buildFacets = (keys: [FacetKey, string][], values: FacetValues[]): Facet[] =>
  keys
    .map(([key, label]) => ({
      key,
      label,
      options: uniq(values.flatMap((v) => v[key] ?? [])).sort(facetSort(key)).map((value) => ({ value, label: facetLabel(key, value) })),
    }))
    // A one-option picker filters nothing, so it is dropped — except Source Document,
    // which Andy asked for by name (2026-09-23): this project has one permit today, and
    // the picker should already be where a second one will land.
    .filter((f) => f.options.length > 1 || f.key === 'source');

/**
 * Which pickers each drawer shows (Andy, 2026-09-23). No list type filters by
 * commitment: that picker named the same records the checkboxes do. Phase and Species
 * are requirement fields, so a commitment list, whose rows are commitments, filters by
 * the document they come from instead. Deliverable is gone from actions.
 */
export const LIST_FACETS: Record<ListType, [FacetKey, string][]> = {
  commitment: [['source', 'Source Document']],
  action: [['phase', 'Phase'], ['species', 'Species'], ['type', 'Type'], ['frequency', 'Frequency']],
  obligation: [['phase', 'Phase'], ['species', 'Species'], ['category', 'Category'], ['class', 'Class']],
};

/* ── Form-field export ──────────────────────────────────────────────────── */

/**
 * Fulcrum's form schema, as much of it as a list determines. A Fulcrum form is a
 * tree of ELEMENTS; a Section holds child elements, and a YesNoField is how a
 * monitor records whether a duty was met on a given day. The list supplies the
 * structure (a section per category, a nested section per subcategory, a field
 * per obligation) and the wording (label from the obligation title, description
 * from the list's description for it), and the IDENTITY a monitoring observation
 * needs to link back: the list's GUID at the top, and on every field the registry
 * obligation, the list membership, and the requirements behind it. Everything
 * else — logic, layout, the form's own id — is Fulcrum's, set when the form is
 * created.
 */
export interface FormFieldElement {
  type: 'YesNoField';
  key: string;
  label: string;
  description: string;
  required: boolean;
  /**
   * What an observation recorded against this field links back to. `key` is
   * Fulcrum's and only unique within the form; these three are Beacon's, so a
   * monitoring record can be joined to the registry without the form in between.
   * `obligationId` is shared by copies of one obligation; `memberId` is this row's.
   */
  obligationId: string;
  memberId: string;
  requirements: { id: string; code: string }[];
}

export interface FormSectionElement {
  type: 'Section';
  key: string;
  label: string;
  elements: (FormSectionElement | FormFieldElement)[];
}

export interface FormFieldSpec {
  /** The list's public GUID — the same one in the endpoint URL. */
  listId: string;
  name: string;
  description: string;
  elements: FormSectionElement[];
}

/**
 * Fulcrum keys are short, stable, and UNIQUE WITHIN A FORM. The obligation's ULID
 * tail serves for the first copy; a second copy appends its number, because two
 * fields sharing a key is a form that silently overwrites one answer with the other.
 */
const fieldKey = (o: ListObligation) =>
  o.id.slice(-8).toLowerCase() + (o.occurrence > 1 ? `-${o.occurrence}` : '');

/**
 * The host the public read API is served from. One constant, so the three endpoint
 * URLs on this prototype cannot disagree about which environment they address.
 */
export const PUBLIC_API_HOST = 'https://beacon-api-v1.qa.esassoc.dev';

/**
 * Where a contractor's form reads this list from. Derived, never authored: the path
 * mirrors prod's commitment-category endpoint, with the list's own GUID.
 */
export const endpointUrl = (list: ObligationList): string =>
  `${PUBLIC_API_HOST}/api/public/obligation-lists/${list.publicId}.json`;

export function formFields(list: ObligationList): FormFieldSpec {
  return {
    listId: list.publicId,
    name: list.name,
    description: list.description,
    elements: listTree(list).map((cat) => ({
      type: 'Section',
      key: cat.id,
      label: cat.name,
      elements: cat.subcategories.map((sub) => ({
        type: 'Section',
        key: sub.id,
        label: sub.name,
        elements: sub.obligations.map((o) => ({
          type: 'YesNoField',
          key: fieldKey(o),
          label: o.title,
          description: o.listDescription,
          required: false,
          obligationId: o.id,
          memberId: o.memberId,
          requirements: o.requirements.map((r) => ({ id: r.id, code: r.code })),
        })),
      })),
    })),
  };
}
