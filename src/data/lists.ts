/**
 * Project lists — the named subsets a project keeps over its registries.
 *
 * A project accumulates three registries during setup: actions, obligations and
 * commitments. A LIST is a named, ordered subset of one of them, kept so the
 * project can hand that subset to someone: a contractor at construction kickoff,
 * a biologist on a field form, a reviewer signing off a submittal. Beacon already
 * ships action lists and commitment lists; this module models all three under one
 * index, and models the obligation list in full because it is the one that has to
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
  OBLIGATION_TREE,
  SETUP_STEPS,
  type ObligationClass,
  type ObligationNode,
  type SetupStepToken,
} from './setup-wizard';

/* ── Types ──────────────────────────────────────────────────────────────── */

/** The three registries a list can be drawn from. There is no fourth. */
export type ListType = 'action' | 'obligation' | 'commitment';

/** What the type is called in the index and the create dialog. */
export const LIST_TYPE_LABEL: Record<ListType, string> = {
  action: 'Action list',
  obligation: 'Obligation list',
  commitment: 'Commitment list',
};

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

/** One obligation's membership in one list. */
export interface ObligationListMember {
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
}

/* ── The derived tree the detail page renders ───────────────────────────── */

/** An obligation as it sits in one list: the registry record plus this list's copy. */
export interface ListObligation extends ObligationNode {
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
      out.push({ obligationId: h.node.id });
    }
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
  },
): ObligationList => {
  const { picks, copy = {}, renames = {}, ...rest } = seed;
  const members = describeByTitle(pickMembers(picks), copy);
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
  }),
  obligationList({
    id: 'biological-monitoring-field-form',
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

/**
 * Action and commitment lists carry no member model here: this prototype takes
 * them only as far as the index, where a list is its name, type and count. Their
 * detail pages are prod's, unchanged.
 */
const plainList = (l: Omit<ProjectList, 'description'> & { description?: string }): ProjectList => ({
  description: '',
  ...l,
});

export const ACTION_LISTS: ProjectList[] = [
  { id: 'annual-reporting', name: 'Annual Reporting', memberCount: 5, createdAt: '2026-03-04', updatedAt: '2026-08-28', description: 'Actions that feed the annual compliance report.' },
  { id: 'construction-surveys-and-monitoring', name: 'Construction Surveys and Monitoring', memberCount: 8, createdAt: '2026-03-04', updatedAt: '2026-09-09' },
  { id: 'desktop-actions', name: 'Desktop Actions', memberCount: 102, createdAt: '2026-03-11', updatedAt: '2026-09-14', description: 'Everything completed off site, for the desk-based reviewers.' },
  { id: 'fieldwork-actions', name: 'Fieldwork Actions', memberCount: 115, createdAt: '2026-03-11', updatedAt: '2026-09-14', description: 'Everything completed in the field, by crew.' },
  { id: 'mapping', name: 'Mapping', memberCount: 5, createdAt: '2026-04-02', updatedAt: '2026-07-22' },
  { id: 'monthly-reporting', name: 'Monthly Reporting', memberCount: 2, createdAt: '2026-03-04', updatedAt: '2026-08-28' },
  { id: 'pipap-actions', name: 'PIPAP Actions', memberCount: 8, createdAt: '2026-05-13', updatedAt: '2026-09-03' },
  { id: 'preconstruction-surveys', name: 'Preconstruction Surveys', memberCount: 27, createdAt: '2026-03-18', updatedAt: '2026-09-10' },
  { id: 'qualified-biologist-for-species', name: 'Qualified Biologist for Species', memberCount: 18, createdAt: '2026-04-15', updatedAt: '2026-08-20' },
  { id: 'safety-plan-inclusion', name: 'Safety Plan Inclusion', memberCount: 0, createdAt: '2026-06-24', updatedAt: '2026-06-24' },
  { id: 'survey-protocol-approval', name: 'Survey Protocol Approval', memberCount: 2, createdAt: '2026-04-15', updatedAt: '2026-07-30' },
  { id: 'worker-awareness-training', name: 'Worker Awareness Training', memberCount: 0, createdAt: '2026-06-24', updatedAt: '2026-06-24' },
].map((l) => plainList({ ...l, type: 'action' }));

export const COMMITMENT_LISTS: ProjectList[] = [
  { id: 'itp-2081-conditions', name: 'ITP 2081 Conditions', memberCount: 64, createdAt: '2026-02-19', updatedAt: '2026-09-08', description: 'Every condition of the incidental take permit, as issued.' },
  { id: 'biological-opinion-terms', name: 'Biological Opinion Terms', memberCount: 31, createdAt: '2026-02-19', updatedAt: '2026-08-14' },
  { id: 'section-401-certification', name: 'Section 401 Certification', memberCount: 12, createdAt: '2026-05-06', updatedAt: '2026-09-02' },
  { id: 'quarterly-agency-briefing', name: 'Quarterly Agency Briefing', memberCount: 9, createdAt: '2026-07-15', updatedAt: '2026-09-04', description: 'Read into the quarterly briefing deck for the resource agencies.' },
].map((l) => plainList({ ...l, type: 'commitment' }));

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

/** The group heading: the registry's own plural, spelled the way the wizard spells it. */
export const LIST_GROUP_LABEL: Record<ListType, string> = {
  commitment: stepFor('commitment').label,
  action: stepFor('action').label,
  obligation: stepFor('obligation').label,
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

/** The verb on a group header: "Add commitment list". */
export const addListLabel = (type: ListType): string => `Add ${LIST_TYPE_LABEL[type].toLowerCase()}`;

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
  const copy = new Map(list.members.map((m) => [m.obligationId, m.description]));
  const cats: ListTreeCat[] = [];
  for (const cat of OBLIGATION_TREE) {
    const subs: ListTreeSub[] = [];
    for (const sub of cat.subcategories) {
      const obligations: ListObligation[] = sub.obligations
        .filter((o) => copy.has(o.id))
        .map((o) => {
          const override = copy.get(o.id);
          return {
            ...o,
            listDescription: override || o.description,
            descriptionOverridden: !!override,
          };
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

/* ── Form-field export ──────────────────────────────────────────────────── */

/**
 * Fulcrum's form schema, as much of it as a list determines. A Fulcrum form is a
 * tree of ELEMENTS; a Section holds child elements, and a YesNoField is how a
 * monitor records whether a duty was met on a given day. The list supplies the
 * structure (a section per category, a nested section per subcategory, a field
 * per obligation) and the wording (label from the obligation title, description
 * from the list's description for it). Everything else — logic, layout, the
 * form's own id — is Fulcrum's, set when the form is created.
 */
export interface FormFieldElement {
  type: 'YesNoField';
  key: string;
  label: string;
  description: string;
  required: boolean;
}

export interface FormSectionElement {
  type: 'Section';
  key: string;
  label: string;
  elements: (FormSectionElement | FormFieldElement)[];
}

export interface FormFieldSpec {
  name: string;
  description: string;
  elements: FormSectionElement[];
}

/** Fulcrum keys are short and stable; the obligation's ULID tail serves. */
const fieldKey = (id: string) => id.slice(-8).toLowerCase();

export function formFields(list: ObligationList): FormFieldSpec {
  return {
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
          key: fieldKey(o.id),
          label: o.title,
          description: o.listDescription,
          required: false,
        })),
      })),
    })),
  };
}
