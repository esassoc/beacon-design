/**
 * Export documents: the PDFs a project hands out of Beacon.
 *
 * Four documents, one shape. An obligation, action or commitment list exports the list
 * as it stands, whole (like the CSV, not the page's filters); every list has a PDF, an
 * empty one included (Andy, 2026-10-19). The compliance index export
 * holds every action and obligation on the project, filed category › subcategory, with
 * the actions that have no home in an Unfiled group last.
 *
 * Every document prints the same way (Andy, round 1, 2026-10-19): on Letter, under the
 * tenant's logo, a one-line-per-item summary table first and the full detail after it
 * from a new page; an action shows one line per component, never one row per occurrence.
 *
 * Every document is a tree of GROUPS holding ENTRIES, which is all a print template
 * needs to know: the obligation list groups category › subcategory (the list's own
 * names and wording), the action list groups by type (its tree's default view), the
 * commitment list groups by permit section in code order, the compliance index groups
 * category › subcategory over both kinds. Prod's print route
 * reads one DTO of this shape per document.
 *
 * What an entry carries is what the CSV export already carries (prod
 * list-export.ts): an obligation's Category, Subcategory, Title, Description, Class,
 * Audience, Applies when and Commitment codes; an action's Action, Type, Frequency and
 * Commitment codes, and per component the occurrence open now: its Status and Due date.
 * Evidence counts stay off obligations (round 1).
 *
 * INVENTED and DETERMINISTIC where the fixture has nothing: an obligation's audience
 * follows its class; an action's occurrences and due dates are hashed from
 * its id and component, so every build prints the same pages.
 */
import {
  COMMITMENT_CHAIN,
  ITP,
  OBLIGATION_CLASS_LABEL,
  OBLIGATION_TREE,
  REQUIREMENT_TYPE_LABEL,
  type ObligationClass,
  type ObligationNode,
  type WizardAction,
  type WizardRequirement,
} from './setup-wizard';
import {
  ACTION_LISTS,
  FREQUENCY_LABEL,
  OBLIGATION_LISTS,
  compareCodes,
  indexOf,
  listTree,
  COMMITMENT_LISTS,
  COMMITMENT_TITLES,
  COMPLIANCE_INDEX_LISTS,
  indexListTree,
  type ComplianceIndexList,
  sectionOf,
  type ActionList,
  type CommitmentList,
  type ObligationList,
} from './lists';
import { implementationsOf, type ImplStatus } from './list-implementations';
import { PROJECT } from './project-dashboard';

/* ── Types ──────────────────────────────────────────────────────────────── */

export type DocumentKind = 'obligation-list' | 'action-list' | 'commitment-list' | 'compliance-index';

/** Prod's ObligationAudience. */
export type DocAudience = 'Crews' | 'Monitors' | 'Compliance staff';

/**
 * The tenant's terms for the entities a document names (EntityLabelService). Headers
 * and labels read these, never a literal, so a tenant that calls a commitment a
 * "Condition" gets "Conditions" in its column header.
 */
export interface DocLabels {
  action: string;
  obligation: string;
  commitment: string;
  component: string;
  project: string;
}

export interface DocObligation {
  kind: 'obligation';
  /** Unique within the document. A list may hold one obligation twice. */
  key: string;
  title: string;
  /** The list's wording on a list document; the registry's on the index. */
  description: string;
  class: ObligationClass;
  classLabel: string;
  audience: DocAudience;
  /** TriggerText. Empty when it always applies. */
  appliesWhen: string;
  codes: string[];
}

export interface DocOccurrence {
  /** The component's name, or the project's when the action is done once for it. */
  scope: string;
  /** 1-based, per scope. */
  n: number;
  status: ImplStatus;
  statusLabel: string;
  /** YYYY-MM-DD. Empty on an action with no deadline. */
  due: string;
}

export interface DocAction {
  kind: 'action';
  key: string;
  name: string;
  description: string;
  typeLabel: string;
  frequencyLabel: string;
  /** The schedule as the source states it ("By 2030", "Annually by March 31"). */
  timing: string;
  codes: string[];
  occurrences: DocOccurrence[];
}

/** A permit commitment and the requirements it holds, in the permit's own words. */
export interface DocCommitment {
  kind: 'commitment';
  key: string;
  code: string;
  title: string;
  /** Always `[code]`, so every entry carries its codes the same way. */
  codes: string[];
  requirements: { id: string; name: string; text: string }[];
}

export type DocEntry = DocObligation | DocAction | DocCommitment;

export interface DocGroup {
  id: string;
  name: string;
  /** Second level (subcategories). A one-level document leaves it empty. */
  groups: DocGroup[];
  entries: DocEntry[];
}

/** A run of one kind inside a section. `label` is empty when the section holds one kind. */
export interface DocRun {
  label: string;
  entries: DocEntry[];
}

/** A subcategory, or the whole group when the document has one level (`name` empty). */
export interface DocSection {
  id: string;
  name: string;
  runs: DocRun[];
}

export interface DocOutlineGroup {
  id: string;
  name: string;
  sections: DocSection[];
}

export interface ExportDocument {
  /** The route segment: a list's id, or 'compliance-index'. */
  id: string;
  kind: DocumentKind;
  title: string;
  /** "Obligation List", "Action List", "Compliance Index". */
  kindLabel: string;
  /** The list's description. Empty on the index. */
  description: string;
  project: string;
  tenant: string;
  tenantLogo: string;
  /** YYYY-MM-DD. The day the file was made. */
  exportedOn: string;
  labels: DocLabels;
  counts: { actions: number; obligations: number; commitments: number };
  groups: DocGroup[];
}

/* ── Constants ──────────────────────────────────────────────────────────── */

/** The prototype's "today", so every build prints the same date. */
export const EXPORTED_ON = '2026-10-19';
export const PROJECT_NAME = 'Delta Conveyance';
export const TENANT_LOGO = '/images/dcp/dwr-logo.png';

/** Beacon's default terms. A tenant's aliases replace these. */
export const DEFAULT_LABELS: DocLabels = {
  action: 'Action',
  obligation: 'Obligation',
  commitment: 'Commitment',
  component: 'Component',
  project: 'Project',
};

/** Who reads an obligation in the field follows from what it asks of them. */
const AUDIENCE_OF: Record<ObligationClass, DocAudience> = {
  adhere: 'Crews',
  monitor: 'Monitors',
  notify: 'Compliance staff',
  roster: 'Compliance staff',
};

/* ── Derivations ────────────────────────────────────────────────────────── */

const REQ_BY_ID = new Map(ITP.requirements.map((r) => [r.id, r]));
const uniq = <T,>(xs: T[]): T[] => [...new Set(xs)];
const codesOf = (reqIds: string[]): string[] =>
  uniq(
    reqIds
      .map((id) => REQ_BY_ID.get(id))
      .filter((r): r is WizardRequirement => !!r)
      .map((r) => r.commitment),
  ).sort(compareCodes);

// FNV-1a, the same scatter list-implementations uses.
const hash = (s: string): number => {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 0x01000193) >>> 0;
  return h;
};

const addDays = (iso: string, days: number): string => {
  const [y, m, d] = iso.split('-').map(Number);
  const t = new Date(Date.UTC(y, m - 1, d + days));
  return t.toISOString().slice(0, 10);
};

const obligationEntry = (o: ObligationNode, key: string, description = o.description): DocObligation => ({
  kind: 'obligation',
  key,
  title: o.title,
  description,
  class: o.class,
  classLabel: OBLIGATION_CLASS_LABEL[o.class],
  audience: AUDIENCE_OF[o.class],
  appliesWhen: o.trigger,
  codes: uniq(o.requirements.map((r) => r.code)).sort(compareCodes),
});

/**
 * An action's occurrences: one per component it is implemented on, three per component
 * when it recurs. Statuses come from the implementation the Lists pages already show; a
 * recurring action's earlier occurrences are done and its later ones not started.
 */
const occurrencesOf = (a: WizardAction): DocOccurrence[] => {
  const recurring = a.timing?.frequency === 'Recurring';
  return implementationsOf(a.id).flatMap((impl) => {
    const k = hash(impl.id);
    const count = recurring ? 3 : 1;
    const first = addDays('2026-03-02', k % 300);
    return Array.from({ length: count }, (_, i): DocOccurrence => {
      const status: ImplStatus = !recurring ? impl.status : i === 0 ? 'completed' : i === 1 ? impl.status : 'not-started';
      const due = a.timing?.frequency === 'AsNeeded' ? '' : addDays(first, i * 91);
      const label = { 'not-started': 'Not Started', 'in-progress': 'In Progress', completed: 'Completed', overdue: 'Overdue', 'on-hold': 'On Hold' }[status];
      return {
        scope: impl.component,
        n: i + 1,
        status,
        statusLabel: label,
        due,
      };
    });
  });
};

const actionEntry = (a: WizardAction): DocAction => ({
  kind: 'action',
  key: a.id,
  name: a.name,
  description: a.text,
  typeLabel: REQUIREMENT_TYPE_LABEL[a.type] ?? a.type,
  frequencyLabel: FREQUENCY_LABEL[a.timing?.frequency ?? ''] ?? '',
  timing: a.timing?.stated ?? '',
  codes: codesOf(a.requirementIds),
  occurrences: occurrencesOf(a),
});

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const byName = (x: { name: string }, y: { name: string }) => x.name.localeCompare(y.name);
const countKinds = (groups: DocGroup[]) => {
  const all = groups.flatMap((g) => [...g.entries, ...g.groups.flatMap((s) => s.entries)]);
  return {
    actions: all.filter((e) => e.kind === 'action').length,
    obligations: all.filter((e) => e.kind === 'obligation').length,
    commitments: all.filter((e) => e.kind === 'commitment').length,
  };
};

const base = {
  project: PROJECT_NAME,
  tenant: PROJECT.tenant,
  tenantLogo: TENANT_LOGO,
  exportedOn: EXPORTED_ON,
  labels: DEFAULT_LABELS,
};

/** An obligation list, in its own names and wording, grouped as its tree files it. */
export function obligationListDocument(list: ObligationList): ExportDocument {
  const groups: DocGroup[] = listTree(list).map((cat) => ({
    id: cat.id,
    name: cat.name,
    entries: [],
    groups: cat.subcategories.map((sub) => ({
      id: sub.id,
      name: sub.name,
      groups: [],
      entries: sub.obligations.map((o) => obligationEntry(o, o.memberId, o.listDescription)),
    })),
  }));
  return {
    ...base,
    id: list.id,
    kind: 'obligation-list',
    title: list.name,
    kindLabel: 'Obligation List',
    description: list.description,
    counts: countKinds(groups),
    groups,
  };
}

/** An action list, grouped by type (its tree's default view), actions A–Z. */
export function actionListDocument(list: ActionList): ExportDocument {
  const actions = list.actionIds
    .map((id) => ITP.actions.find((a) => a.id === id))
    .filter((a): a is WizardAction => !!a)
    .map(actionEntry);
  const byType = new Map<string, DocGroup>();
  for (const a of actions) {
    const g = byType.get(a.typeLabel) ?? { id: slug(a.typeLabel), name: a.typeLabel, groups: [], entries: [] };
    g.entries.push(a);
    byType.set(a.typeLabel, g);
  }
  const groups = [...byType.values()]
    .map((g) => ({ ...g, entries: [...g.entries].sort((x, y) => (x as DocAction).name.localeCompare((y as DocAction).name)) }))
    .sort(byName);
  return {
    ...base,
    id: list.id,
    kind: 'action-list',
    title: list.name,
    kindLabel: 'Action List',
    description: list.description,
    counts: countKinds(groups),
    groups,
  };
}

/**
 * A Compliance Index list. The canonical one holds every action and obligation on the
 * project, category › subcategory, A–Z at both levels, Unfiled last; a custom version
 * prints its own outline in its own order. Either way, actions run before obligations
 * inside a subcategory.
 */
export function complianceIndexDocument(list: ComplianceIndexList): ExportDocument {
  const groups: DocGroup[] = indexListTree(list).map((cat) => ({
    id: cat.id,
    name: cat.name,
    entries: [],
    groups: cat.subcategories.map((sub) => ({
      id: sub.id,
      name: sub.name,
      groups: [],
      entries: [...sub.actions.map(actionEntry), ...sub.obligations.map((o) => obligationEntry(o, o.id))],
    })),
  }));
  return {
    ...base,
    id: list.id,
    kind: 'compliance-index',
    title: list.name,
    kindLabel: list.canonical ? 'Compliance Index' : 'Compliance Index List',
    description: list.canonical ? '' : list.description,
    counts: countKinds(groups),
    groups,
  };
}

const CHAIN_BY_CODE = new Map(COMMITMENT_CHAIN.map((c) => [c.code, c]));

/**
 * A commitment list, grouped by permit section ("COA 10") in code order, the way its
 * tree groups it. Each commitment prints its requirements in the permit's words.
 */
export function commitmentListDocument(list: CommitmentList): ExportDocument {
  const bySection = new Map<string, DocGroup>();
  for (const code of [...list.codes].sort(compareCodes)) {
    const c = CHAIN_BY_CODE.get(code);
    const section = sectionOf(code);
    const g = bySection.get(section) ?? { id: slug(section), name: section, groups: [], entries: [] };
    g.entries.push({
      kind: 'commitment',
      key: code,
      code,
      title: c?.title ?? COMMITMENT_TITLES[code] ?? '',
      codes: [code],
      requirements: (c?.requirements ?? []).map((r) => ({ id: r.id, name: r.name, text: r.text })),
    });
    bySection.set(section, g);
  }
  const groups = [...bySection.values()];
  return {
    ...base,
    id: list.id,
    kind: 'commitment-list',
    title: list.name,
    kindLabel: 'Commitment List',
    description: list.description,
    counts: countKinds(groups),
    groups,
  };
}

/**
 * The document as both of its bodies print it: group › section › run. The summary table
 * and the detail render this one outline, so the two halves of one PDF cannot disagree
 * on order. Inside an index subcategory, actions run before obligations, each under its
 * own label; a list document has one unlabelled run per section.
 */
export function docOutline(doc: ExportDocument): DocOutlineGroup[] {
  const runs = (entries: DocEntry[]): DocRun[] =>
    doc.kind === 'compliance-index'
      ? [
          { label: `${doc.labels.action}s`, entries: entries.filter((e) => e.kind === 'action') },
          { label: `${doc.labels.obligation}s`, entries: entries.filter((e) => e.kind === 'obligation') },
        ].filter((r) => r.entries.length > 0)
      : [{ label: '', entries }];
  return doc.groups.map((g) => ({
    id: g.id,
    name: g.name,
    sections: (g.groups.length ? g.groups : [{ ...g, name: '' }]).map((sub) => ({
      id: sub.id,
      name: sub.name,
      runs: runs(sub.entries),
    })),
  }));
}

/** Every document the prototype prints, by route segment. */
export const EXPORT_DOCUMENTS: ExportDocument[] = [
  ...COMPLIANCE_INDEX_LISTS.map(complianceIndexDocument),
  ...OBLIGATION_LISTS.map(obligationListDocument),
  ...ACTION_LISTS.map(actionListDocument),
  ...COMMITMENT_LISTS.map(commitmentListDocument),
];

export const exportDocumentById = (id: string): ExportDocument | undefined =>
  EXPORT_DOCUMENTS.find((d) => d.id === id);

/** The specimen route for a document. */
export const documentHref = (id: string): string => `/prototypes/list-export-documents/${id}`;
