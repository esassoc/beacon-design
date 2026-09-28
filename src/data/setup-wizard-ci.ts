// SETUP WIZARD — COMPLIANCE INDEX VARIANT.
//
// The wizard as four steps (Andy, 2026-09-28): Source Documents → Commitments →
// Requirements → Compliance Index. Given the approved requirements, one processing run builds the
// index and fills it: first the taxonomy (category › subcategory), then every action
// and obligation extracted requirement by requirement, filed into the bins, and
// merged bin by bin. This mirrors Beacon's CI.5 pipeline (esassoc/Beacon
// feature/BCN-1740-obligations-draft, docs/backlog/compliance-index.md Thread 10):
// Extract → File → Merge as steps of a watched processing run with a live log.
// Review then happens one subcategory at a time (Thread 6).
//
// Nothing below is invented. The fixture is the ITP pass (setup-wizard-itp.json:
// 854 requirements, 267 actions, 333 obligations with every requirement link); the
// taxonomy is compliance-index-memberships.json (each requirement's
// "Category::Subcategory" bins) plus the obligations' own subjects. The run log is a
// REPLAY derived from those records: each Extract line reports the actions and
// obligations a requirement is linked to, each File line the bins an item lands in,
// each Merge line a bin's item and obligation counts. Its simulated clock is sized
// from the measured CI.5 chunk timings, not from a real run of this fixture.

import memberships from './compliance-index-memberships.json';
import itpPages from './itp-pages.json';
import {
  ITP,
  ACTIONS_OF,
  OBLIGATIONS_OF,
  OBLIGATION_NODES,
  STEP_GLYPH,
  OBLIGATION_CLASS_LABEL,
  REQUIREMENT_TYPE_LABEL,
  PHASES,
  type SetupStep,
  type ObligationClass,
} from './setup-wizard';

// ── Steps ─────────────────────────────────────────────────────────────────────

export const CI_BASE = '/prototypes/setup-wizard-ci';

export const CI_STEPS: SetupStep[] = [
  {
    id: 'source-documents',
    n: 1,
    label: 'Source Documents',
    token: 'source',
    line: 'Upload permits, plans and agreements.',
    href: '#setup-source-documents',
    iconPaths: STEP_GLYPH['file-text'],
    iconName: 'file-text',
  },
  {
    id: 'commitments',
    n: 2,
    label: 'Commitments',
    token: 'commitment',
    line: 'Every enforceable commitment, cited to the page it came from.',
    href: '#setup-commitments',
    iconPaths: STEP_GLYPH['clipboard-list'],
    iconName: 'clipboard-list',
  },
  {
    id: 'requirements',
    n: 3,
    label: 'Requirements',
    token: 'requirement',
    line: 'Each commitment split into what, when and who, one requirement per duty.',
    href: '#setup-requirements',
    iconPaths: STEP_GLYPH['clipboard-check'],
    iconName: 'clipboard-check',
  },
  {
    id: 'compliance-index',
    n: 4,
    label: 'Compliance Index',
    token: 'obligation',
    line: 'Every action and obligation, filed by topic and reviewed a subcategory at a time.',
    href: CI_BASE,
    iconPaths: STEP_GLYPH['list-tree'],
    iconName: 'list-tree',
  },
];

// ── Records ───────────────────────────────────────────────────────────────────

const SEP = '::';
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const binKey = (cat: string, sub: string) => `${cat}${SEP}${sub}`;
const binId = (key: string) => {
  const [c, s] = key.split(SEP);
  return `${slug(c)}--${slug(s)}`;
};

const MEMBERSHIPS = memberships as Record<string, string[]>;
const PAGES = itpPages as Record<string, number>;
const reqById = new Map(ITP.requirements.map((r) => [r.id, r]));

/** One source an item rests on: the commitment it cites and the passage it cites. */
export interface CiRequirementRef {
  id: string;
  code: string;
  name: string;
  /** The passage, flattened to one line and cut for the row. */
  excerpt: string;
}

export interface CiObligation {
  id: string;
  title: string;
  class: ObligationClass;
  phases: string[];
  homeBin: string;
  bins: string[];
  requirements: CiRequirementRef[];
}

export interface CiAction {
  id: string;
  title: string;
  deliverableType: string;
  timing: string;
  recipient: string;
  homeBin: string;
  requirements: CiRequirementRef[];
}

export interface CiSubcategory {
  id: string;
  key: string;
  name: string;
  categoryId: string;
  categoryName: string;
  actionIds: string[];
  obligationIds: string[];
  /** Obligations filed here whose home bin is another one. */
  alsoFiledIds: string[];
  /** Requirements whose membership includes this bin: the evidence the taxonomy pass cites. */
  requirementCount: number;
}

export interface CiCategory {
  id: string;
  name: string;
  subcategories: CiSubcategory[];
}

const refOf = (id: string): CiRequirementRef | null => {
  const r = reqById.get(id);
  if (!r) return null;
  const flat = r.text.replace(/\s+/g, ' ').trim();
  return { id: r.id, code: r.commitment, name: r.name, excerpt: flat.length > 160 ? `${flat.slice(0, 157)}…` : flat };
};
const refs = (ids: string[]) => ids.map(refOf).filter((r): r is CiRequirementRef => !!r);

export const CI_OBLIGATIONS: CiObligation[] = ITP.obligations.map((o) => {
  const bins = [...new Set(o.subjects.map((s) => binId(binKey(s.major, s.minor))))];
  return {
    id: o.id,
    title: o.name,
    class: o.class,
    phases: o.phases,
    homeBin: bins[0],
    bins,
    requirements: refs(o.requirementIds),
  };
});

// An action has one bin (Thread 11): the bin its requirements most often sit in.
const homeOfAction = (reqIds: string[]): string => {
  const tally = new Map<string, number>();
  for (const id of reqIds) for (const k of MEMBERSHIPS[id] ?? []) tally.set(k, (tally.get(k) ?? 0) + 1);
  let best = '';
  let n = 0;
  for (const [k, c] of tally) if (c > n) [best, n] = [k, c];
  return best ? binId(best) : '';
};

export const CI_ACTIONS: CiAction[] = ITP.actions.map((a) => ({
  id: a.id,
  title: a.name,
  deliverableType: a.deliverableType ?? '',
  timing: a.timing?.stated ?? '',
  recipient: (a.timing as { recipient?: string } | undefined)?.recipient ?? '',
  homeBin: homeOfAction(a.requirementIds),
  requirements: refs(a.requirementIds),
}));

// ── The index ─────────────────────────────────────────────────────────────────

const allKeys = new Set<string>();
for (const ks of Object.values(MEMBERSHIPS)) ks.forEach((k) => allKeys.add(k));
for (const o of ITP.obligations) o.subjects.forEach((s) => allKeys.add(binKey(s.major, s.minor)));

const reqCountByBin = new Map<string, number>();
for (const ks of Object.values(MEMBERSHIPS)) for (const k of ks) reqCountByBin.set(binId(k), (reqCountByBin.get(binId(k)) ?? 0) + 1);

const byName = (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name);

// A fresh run reads alphabetically (Thread 3), categories and the subcategories within each.
export const CI_INDEX: CiCategory[] = (() => {
  const cats = new Map<string, CiCategory>();
  for (const key of allKeys) {
    const [catName, subName] = key.split(SEP);
    const catId = slug(catName);
    if (!cats.has(catId)) cats.set(catId, { id: catId, name: catName, subcategories: [] });
    const id = binId(key);
    cats.get(catId)!.subcategories.push({
      id,
      key,
      name: subName,
      categoryId: catId,
      categoryName: catName,
      actionIds: CI_ACTIONS.filter((a) => a.homeBin === id).map((a) => a.id),
      obligationIds: CI_OBLIGATIONS.filter((o) => o.homeBin === id).map((o) => o.id),
      alsoFiledIds: CI_OBLIGATIONS.filter((o) => o.homeBin !== id && o.bins.includes(id)).map((o) => o.id),
      requirementCount: reqCountByBin.get(id) ?? 0,
    });
  }
  const out = [...cats.values()].sort(byName);
  out.forEach((c) => c.subcategories.sort(byName));
  return out;
})();

export const CI_BINS: CiSubcategory[] = CI_INDEX.flatMap((c) => c.subcategories);
export const CI_BIN_BY_ID = new Map(CI_BINS.map((b) => [b.id, b]));
export const CI_OBLIGATION_BY_ID = new Map(CI_OBLIGATIONS.map((o) => [o.id, o]));
export const CI_ACTION_BY_ID = new Map(CI_ACTIONS.map((a) => [a.id, a]));

// ── Coverage (Thread 5: the verdict derived from what Extract found) ─────────

export type CiVerdict = 'action' | 'obligation' | 'both' | 'neither';
export const VERDICT_OF = new Map<string, CiVerdict>(
  ITP.requirements.map((r) => {
    const a = (ACTIONS_OF.get(r.id)?.length ?? 0) > 0;
    const o = (OBLIGATIONS_OF.get(r.id)?.length ?? 0) > 0;
    return [r.id, a && o ? 'both' : a ? 'action' : o ? 'obligation' : 'neither'];
  }),
);

export const CI_TOTALS = {
  requirements: ITP.requirements.length,
  commitments: new Set(ITP.requirements.map((r) => r.commitment)).size,
  categories: CI_INDEX.length,
  subcategories: CI_BINS.length,
  actions: CI_ACTIONS.length,
  obligations: CI_OBLIGATIONS.length,
  byVerdict: (['action', 'obligation', 'both', 'neither'] as CiVerdict[]).map((v) => ({
    verdict: v,
    count: [...VERDICT_OF.values()].filter((x) => x === v).length,
  })),
};

export const VERDICT_LABEL: Record<CiVerdict, string> = {
  action: 'Actions only',
  obligation: 'Obligations only',
  both: 'Both',
  neither: 'Bind nothing',
};

// ── Cross-check: the commitment text and the page it sits on ─────────────────

export const ITP_PDF = '/source-docs/itp.pdf';
export const pageOf = (code: string): number | undefined => PAGES[code];

// ── The processing run, as a replayable log ──────────────────────────────────
//
// Log levels are prod's ProcessingRunLogLevel (Heading, Info, Finding, Warning,
// Error). Each line may carry a delta to the live counters and the simulated seconds
// it advances the run's clock. Phases are the run's steps: Index (the taxonomy pass,
// which in prod is its own step before the run), Extract, File, Merge.

export type RunPhase = 'index' | 'extract' | 'file' | 'merge';
export type RunLevel = 'heading' | 'info' | 'finding' | 'warning' | 'error';

export interface RunCounters {
  /** requirements read */ r: number;
  /** actions extracted */ a: number;
  /** obligation items extracted */ o: number;
  /** requirements binding nothing */ n: number;
  /** bins proposed */ b: number;
  /** items filed */ f: number;
  /** bins merged */ m: number;
  /** obligations after merge */ s: number;
}

export interface RunLine {
  p: RunPhase;
  l: RunLevel;
  t: string;
  /** Counter deltas. */
  d?: Partial<RunCounters>;
  /** Simulated seconds this line advances the clock. */
  s?: number;
}

// An extracted item is one deliverable or one duty read from one requirement, so the
// fixture's items are its requirement links: each action and obligation once per
// requirement it rests on. Merge folds the obligation items back into the obligations.
const RUN_ITEMS: { code: string; title: string; bins: string[] }[] = [
  ...CI_ACTIONS.flatMap((a) => a.requirements.map((r) => ({ code: r.code, title: a.title, bins: [a.homeBin] }))),
  ...CI_OBLIGATIONS.flatMap((o) => o.requirements.map((r) => ({ code: r.code, title: o.title, bins: o.bins }))),
];

export const RUN_PHASES: { id: RunPhase; label: string; unit: string; total: number }[] = [
  { id: 'index', label: 'Build the index', unit: 'subcategories', total: CI_BINS.length },
  { id: 'extract', label: 'Extract', unit: 'requirements', total: ITP.requirements.length },
  { id: 'file', label: 'File', unit: 'items', total: RUN_ITEMS.length },
  { id: 'merge', label: 'Merge', unit: 'subcategories', total: CI_BINS.length },
];

const plural = (n: number, one: string, many = `${one}s`) => `${n.toLocaleString('en-US')} ${n === 1 ? one : many}`;
const PARALLEL_SLOTS = 4;

export const RUN_LOG: RunLine[] = (() => {
  const lines: RunLine[] = [];
  const push = (l: RunLine) => lines.push(l);

  // 1 · Index — the taxonomy, proposed from the approved requirements.
  push({ p: 'index', l: 'heading', t: 'Build the index' });
  push({ p: 'index', l: 'info', t: `Reading ${plural(ITP.requirements.length, 'approved requirement')} across ${plural(CI_TOTALS.commitments, 'commitment')}`, s: 40 });
  for (const cat of CI_INDEX) {
    push({ p: 'index', l: 'finding', t: `${cat.name} · ${plural(cat.subcategories.length, 'subcategory', 'subcategories')}`, s: 2 });
    for (const sub of cat.subcategories) {
      push({ p: 'index', l: 'info', t: `${sub.name} · evidenced by ${plural(sub.requirementCount, 'requirement')}`, d: { b: 1 }, s: 1 });
    }
  }
  push({ p: 'index', l: 'finding', t: `${plural(CI_INDEX.length, 'category', 'categories')} · ${plural(CI_BINS.length, 'subcategory', 'subcategories')} proposed`, s: 4 });

  // 2 · Extract — per requirement, small calls, without the index.
  push({ p: 'extract', l: 'heading', t: 'Extract' });
  push({ p: 'extract', l: 'info', t: `${plural(ITP.requirements.length, 'requirement')} not yet read · ${PARALLEL_SLOTS} parallel slots` });
  const queue = [...ITP.requirements];
  // One measured failure mode, kept: a batch that answers only part of its list
  // (12 of 85 on the first parallel run). Its unanswered requirements are re-read later.
  const PARTIAL_BATCH = 23;
  const deferred: typeof queue = [];
  let batch = 0;
  let unread = queue.length;
  while (queue.length || deferred.length) {
    const chunk = queue.length ? queue.splice(0, 10) : deferred.splice(0, 10);
    batch++;
    const slot = ((batch - 1) % PARALLEL_SLOTS) + 1;
    push({ p: 'extract', l: 'heading', t: `Batch ${batch} · slot ${slot} · ${chunk.length} of ${unread.toLocaleString('en-US')} unread` });
    let answered = chunk;
    if (batch === PARTIAL_BATCH) {
      answered = chunk.slice(0, 2);
      deferred.push(...chunk.slice(2));
    }
    let ba = 0;
    let bo = 0;
    for (const r of answered) {
      const a = ACTIONS_OF.get(r.id)?.length ?? 0;
      const o = OBLIGATIONS_OF.get(r.id)?.length ?? 0;
      ba += a;
      bo += o;
      const found = [a ? plural(a, 'action') : '', o ? plural(o, 'obligation') : ''].filter(Boolean).join(', ');
      push({
        p: 'extract',
        l: 'info',
        t: `${r.commitment} · ${r.name} → ${found || 'binds nothing'}`,
        d: { r: 1, a, o, n: a || o ? 0 : 1 },
        s: 60 / PARALLEL_SLOTS / 10,
      });
    }
    if (answered.length < chunk.length) {
      push({ p: 'extract', l: 'warning', t: `The model returned nothing for ${chunk.length - answered.length} of this batch; they stay unread.` });
    }
    push({ p: 'extract', l: 'finding', t: `${answered.length} read · ${plural(ba, 'action')} · ${plural(bo, 'obligation')}` });
    unread -= answered.length;
  }

  // 3 · File — every item against the index, its home bin and wherever else a reader would look.
  push({ p: 'file', l: 'heading', t: 'File' });
  const items = RUN_ITEMS;
  let unfiled = items.length;
  for (let i = 0; i < items.length; i += 90) {
    const chunk = items.slice(i, i + 90);
    push({ p: 'file', l: 'heading', t: `Batch · ${chunk.length} of ${unfiled} unfiled` });
    let elsewhere = 0;
    for (const it of chunk) {
      const names = it.bins.map((b) => CI_BIN_BY_ID.get(b)?.name ?? b);
      if (names.length > 1) elsewhere++;
      push({ p: 'file', l: 'info', t: `${it.code} · ${it.title} → ${names.join(' + ')}`, d: { f: 1 }, s: 24 / PARALLEL_SLOTS / 90 });
    }
    push({ p: 'file', l: 'finding', t: `${chunk.length} filed · ${elsewhere} also filed elsewhere · 0 with no bin that fits` });
    unfiled -= chunk.length;
  }

  // 4 · Merge — per bin, the same duty from different requirements becomes one obligation.
  push({ p: 'merge', l: 'heading', t: 'Merge' });
  let togo = CI_BINS.length;
  for (const bin of CI_BINS) {
    const obs = bin.obligationIds.map((id) => CI_OBLIGATION_BY_ID.get(id)!);
    const itemCount = obs.reduce((n, o) => n + o.requirements.length, 0);
    const merged = obs.filter((o) => o.requirements.length > 1).length;
    togo--;
    push({ p: 'merge', l: 'heading', t: `${bin.name} · ${plural(itemCount, 'item')} · ${plural(togo, 'bin')} to go` });
    push({
      p: 'merge',
      l: 'finding',
      t: itemCount ? `${plural(itemCount, 'item')} → ${plural(obs.length, 'obligation')} (${merged} merged from several sources)` : 'Nothing to merge',
      d: { m: 1, s: obs.length },
      s: itemCount ? 30 / PARALLEL_SLOTS : 1,
    });
  }
  push({ p: 'merge', l: 'finding', t: 'Done.' });
  return lines;
})();

export const RUN_SECONDS = Math.round(RUN_LOG.reduce((n, l) => n + (l.s ?? 0), 0));

export { OBLIGATION_CLASS_LABEL };

// ── Row order shared by the index and the review dialog ──────────────────────

export const CLASS_ORDER: ObligationClass[] = ['adhere', 'monitor', 'notify', 'roster'];

// ── Details: every field an action or obligation carries ─────────────────────
//
// With requirements folded away, an item carries the attributes its requirements
// held (phases, species, activities, responsible party) as the union across its
// sources, beside its own. Obligation description and "applies when" are the seeded
// fields the obligations step already shows (OBLIGATION_NODES); action fields are
// the ITP pass's own.

export interface CiDetail {
  id: string;
  kind: 'action' | 'obligation';
  title: string;
  description: string;
  /** Obligation class. */
  cls?: ObligationClass;
  /** Obligation: when the duty is in force. */
  trigger?: string;
  /** Action fields. */
  type?: string;
  deliverableType?: string;
  frequency?: string;
  timing?: string;
  recipient?: string;
  evidence?: string;
  phases: string[];
  species: string[];
  activities: string[];
  party: string;
  home: string;
  also: string[];
  sources: CiRequirementRef[];
}

const unionOf = (ids: string[], pick: (r: (typeof ITP.requirements)[number]) => string[] | string) =>
  [...new Set(ids.flatMap((id) => {
    const r = reqById.get(id);
    if (!r) return [];
    const v = pick(r);
    return Array.isArray(v) ? v : v ? [v] : [];
  }))];

const nodeById = new Map(OBLIGATION_NODES.map((n) => [n.id, n]));

export const CI_DETAILS: CiDetail[] = [
  ...ITP.actions.map((a): CiDetail => {
    const ci = CI_ACTION_BY_ID.get(a.id)!;
    return {
      id: a.id,
      kind: 'action',
      title: a.name,
      description: a.text,
      type: a.type,
      deliverableType: a.deliverableType ?? '',
      frequency: a.timing?.frequency ?? '',
      timing: a.timing?.stated ?? '',
      recipient: (a.timing as { recipient?: string } | undefined)?.recipient ?? '',
      evidence: a.expectedEvidence ?? '',
      phases: unionOf(a.requirementIds, (r) => r.phases),
      species: unionOf(a.requirementIds, (r) => r.species),
      activities: unionOf(a.requirementIds, (r) => r.activities),
      party: unionOf(a.requirementIds, (r) => r.responsibleParty).join(', '),
      home: ci.homeBin,
      also: [],
      sources: ci.requirements,
    };
  }),
  ...ITP.obligations.map((o): CiDetail => {
    const ci = CI_OBLIGATION_BY_ID.get(o.id)!;
    const node = nodeById.get(o.id);
    return {
      id: o.id,
      kind: 'obligation',
      title: o.name,
      description: node?.description ?? '',
      cls: o.class,
      trigger: node?.trigger ?? '',
      phases: o.phases,
      species: unionOf(o.requirementIds, (r) => r.species),
      activities: unionOf(o.requirementIds, (r) => r.activities),
      party: unionOf(o.requirementIds, (r) => r.responsibleParty).join(', '),
      home: ci.homeBin,
      also: ci.bins.filter((b) => b !== ci.homeBin),
      sources: ci.requirements,
    };
  }),
];

export const DETAIL_OPTIONS = {
  classes: CLASS_ORDER.map((c) => ({ label: OBLIGATION_CLASS_LABEL[c], value: c })),
  types: Object.entries(REQUIREMENT_TYPE_LABEL).map(([value, label]) => ({ label, value })),
  deliverables: ['report', 'plan', 'approval', 'notification', 'payment', 'installation', 'survey', 'training', 'other'].map((v) => ({
    label: v.charAt(0).toUpperCase() + v.slice(1),
    value: v,
  })),
  frequencies: [
    { label: 'One time', value: 'Onetime' },
    { label: 'Recurring', value: 'Recurring' },
    { label: 'As needed', value: 'AsNeeded' },
    { label: 'Ongoing', value: 'Ongoing' },
  ],
  phases: PHASES.map((p) => ({ label: p, value: p })),
  bins: CI_BINS.map((b) => ({ label: `${b.categoryName} › ${b.name}`, value: b.id })),
};
