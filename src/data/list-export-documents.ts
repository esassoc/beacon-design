/**
 * Export documents: the PDFs a project hands out of Beacon.
 *
 * Three documents, one shape. An obligation list and an action list export the list as
 * it stands, whole (like the CSV, not the page's filters). The compliance index export
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
 * compliance index groups category › subcategory over both kinds. Prod's print route
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
  type ActionList,
  type ObligationList,
} from './lists';
import { implementationsOf, type ImplStatus } from './list-implementations';
import { PROJECT } from './project-dashboard';

/* ── Types ──────────────────────────────────────────────────────────────── */

export type DocumentKind = 'obligation-list' | 'action-list' | 'compliance-index';

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

export type DocEntry = DocObligation | DocAction;

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
  counts: { actions: number; obligations: number };
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

export const UNFILED = { category: 'Unfiled', subcategory: 'Needs a home' } as const;

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

/**
 * Where an action files in the index: the subcategory most of its requirements file
 * in. When no subcategory holds more than half of them, the action has no clear home
 * and goes to Unfiled › Needs a home, the bin prod keeps for exactly this.
 */
const homeOf = (a: WizardAction): { category: string; subcategory: string } => {
  const tally = new Map<string, number>();
  for (const id of a.requirementIds) for (const m of indexOf(id)) tally.set(m, (tally.get(m) ?? 0) + 1);
  const [best, n] = [...tally.entries()].sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0]))[0] ?? ['', 0];
  if (!best || n * 2 <= a.requirementIds.length) return { ...UNFILED };
  const [category, subcategory] = best.split('::');
  return { category, subcategory };
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const byName = (x: { name: string }, y: { name: string }) => x.name.localeCompare(y.name);
const countKinds = (groups: DocGroup[]) => {
  const all = groups.flatMap((g) => [...g.entries, ...g.groups.flatMap((s) => s.entries)]);
  return {
    actions: all.filter((e) => e.kind === 'action').length,
    obligations: all.filter((e) => e.kind === 'obligation').length,
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
 * Every action and obligation on the project, category › subcategory, A–Z at both
 * levels, actions before obligations inside a subcategory. Unfiled comes last.
 */
export function complianceIndexDocument(): ExportDocument {
  const cats = new Map<string, Map<string, DocEntry[]>>();
  const put = (category: string, subcategory: string, e: DocEntry) => {
    const subs = cats.get(category) ?? new Map<string, DocEntry[]>();
    cats.set(category, subs);
    subs.set(subcategory, [...(subs.get(subcategory) ?? []), e]);
  };
  for (const cat of OBLIGATION_TREE)
    for (const sub of cat.subcategories) for (const o of sub.obligations) put(cat.name, sub.name, obligationEntry(o, o.id));
  for (const a of ITP.actions) {
    const home = homeOf(a);
    put(home.category, home.subcategory, actionEntry(a));
  }
  const entryName = (e: DocEntry) => (e.kind === 'action' ? e.name : e.title);
  const ordered = (es: DocEntry[]) =>
    [...es].sort((x, y) => (x.kind === y.kind ? entryName(x).localeCompare(entryName(y)) : x.kind === 'action' ? -1 : 1));
  const groups: DocGroup[] = [...cats.entries()]
    .map(([name, subs]) => ({
      id: slug(name),
      name,
      entries: [],
      groups: [...subs.entries()]
        .map(([subName, es]) => ({ id: slug(`${name}-${subName}`), name: subName, groups: [], entries: ordered(es) }))
        .sort(byName),
    }))
    .sort((x, y) => (x.name === UNFILED.category ? 1 : y.name === UNFILED.category ? -1 : byName(x, y)));
  return {
    ...base,
    id: 'compliance-index',
    kind: 'compliance-index',
    title: 'Compliance Index',
    kindLabel: 'Compliance Index',
    description: '',
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
  complianceIndexDocument(),
  ...OBLIGATION_LISTS.map(obligationListDocument),
  ...ACTION_LISTS.filter((l) => l.actionIds.length > 0).map(actionListDocument),
];

export const exportDocumentById = (id: string): ExportDocument | undefined =>
  EXPORT_DOCUMENTS.find((d) => d.id === id);

/** The specimen route for a document. */
export const documentHref = (id: string): string => `/prototypes/list-export-documents/${id}`;
