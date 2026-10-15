// Step 3's state, in develop's two phases (docs/setup-wizard-3-step-ci-brief.md):
//
//   empty     no index yet: Build index, or + Category by hand
//   built     the index: categories and subcategories, edited by hand, locked, re-run
//   drafting  one Draft run: Read requirements, File into bins, Merge duties, Complete drafts
//   drafted   the drafts, reviewed a subcategory at a time
//
// The plan (both proposals, and what drafting each counts) is inline on the page
// (script[data-sw3-index]). What a Draft run makes of a proposal is public JSON, fetched when
// a run starts or the page opens on a drafted index (loadDrafts). Everything a person does
// is kept in localStorage.
//
// Contract, on `document`:
//   out  sw3i:change   any change to the index, the run or a draft

import type {
  IndexAction,
  IndexAudience,
  IndexBasis,
  IndexEntry,
  IndexLocator,
  IndexObligation,
  IndexUnfiled,
  ProposedCategory,
  Sw3IndexDrafts,
  Sw3IndexPlan,
} from '../../data/sw3-index-types';
import { withBase } from '../../lib/base';

export type Phase = 'empty' | 'building' | 'built' | 'drafting' | 'drafted';
export type EntryStatus = 'draft' | 'approved' | 'discarded';

export interface Sub {
  id: string;
  name: string;
  locked: boolean;
  /** The proposal bin this row came from, and which proposal: whose drafts it holds. */
  origin: string | null;
  basis: IndexBasis | null;
  evidence: IndexLocator[];
}
export interface Cat {
  id: string;
  name: string;
  locked: boolean;
  subs: Sub[];
}

/** One exchange about a subcategory: what the person said or pressed, and Aldo's answer
 *  (step 2's ReviewTalk, keyed by subcategory). */
export interface IndexTalk {
  id: string;
  /** Epoch ms. */
  wall: number;
  sub: string;
  via: 'typed' | 'button';
  text: string;
  context?: { id: string; kind: 'page' | 'entity' | 'file'; label: string }[];
  reply: string;
  proposals?: { id: string; label: string; p: IndexProposal; state?: 'accepted' | 'dismissed' }[];
  event?: boolean;
}

export type IndexProposal =
  | { kind: 'approve'; ids: string[] }
  | { kind: 'discard'; ids: string[] }
  | { kind: 'merge'; ids: string[]; title: string }
  | { kind: 'edit'; id: string; patch: EntryPatch }
  | { kind: 'rerun'; guidance: string };

export type EntryPatch = Partial<Omit<IndexObligation, 'kind' | 'id'>> & Partial<Omit<IndexAction, 'kind' | 'id'>>;

export interface RerunSummary {
  guidance: string;
  added: string[];
  removed: string[];
  keptLocked: string[];
}

/** A Draft run in flight. `again` is the incremental run over what is still outstanding. */
export interface Run {
  started: number;
  again: boolean;
  /** For an incremental run: how many items it takes. */
  items: number;
}

interface State {
  v: 3;
  built: boolean;
  building: number | null;
  cats: Cat[];
  basis: IndexBasis;
  seq: number;
  rerun: RerunSummary | null;
  run: Run | null;
  /** A Draft run has finished: drafts exist. */
  drafted: boolean;
  /** The last run's counts, for the log and the status line. */
  last: RunCounts | null;
  /** Where the drafts are: local subcategory id → home and also-filed draft ids. */
  place: Record<string, { home: string[]; also: string[] }>;
  /** Items the run could not file: the drafts file's unfiled, and drafts whose bin is gone. */
  unfiled: IndexUnfiled[];
  /** Unfiled items filed by Suggest subcategories, drafted on the next run. */
  filed: Record<string, string>;
  /** Drafts whose bin was deleted: filed again on the next run. */
  refile: string[];
  status: Record<string, EntryStatus>;
  edits: Record<string, EntryPatch>;
  /** Drafts folded into a merged draft: source id → merged id. */
  folded: Record<string, string>;
  made: Record<string, IndexEntry>;
  opened: string[];
  talk: IndexTalk[];
}

const KEY = 'sw3:index:v3';
const fresh = (): State => ({
  v: 3,
  built: false,
  building: null,
  cats: [],
  basis: 'base',
  seq: 0,
  rerun: null,
  run: null,
  drafted: false,
  last: null,
  place: {},
  unfiled: [],
  filed: {},
  refile: [],
  status: {},
  edits: {},
  folded: {},
  made: {},
  opened: [],
  talk: [],
});

let P: Sw3IndexPlan;
let S: State;
const drafts: Partial<Record<IndexBasis, Sw3IndexDrafts>> = {};

export const initIndex = (): Sw3IndexPlan => {
  if (P) return P;
  P = JSON.parse(document.querySelector('script[data-sw3-index]')?.textContent ?? '{}') as Sw3IndexPlan;
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) ?? 'null');
    S = saved?.v === 3 ? { ...fresh(), ...saved } : fresh();
  } catch {
    S = fresh();
  }
  return P;
};
export const plan = () => P;

const save = () => {
  try {
    localStorage.setItem(KEY, JSON.stringify(S));
  } catch {
    /* no storage */
  }
};
const emit = () => document.dispatchEvent(new CustomEvent('sw3i:change'));
const commit = (fn: () => void) => {
  fn();
  save();
  emit();
};

// ── The drafts file ─────────────────────────────────────────────────────────

const loading: Partial<Record<IndexBasis, Promise<Sw3IndexDrafts>>> = {};
export const loadDrafts = (basis: IndexBasis = S.basis): Promise<Sw3IndexDrafts> => {
  if (drafts[basis]) return Promise.resolve(drafts[basis]!);
  loading[basis] ??= fetch(withBase(`/data/sw3-index/${basis}.json`))
    .then((r) => r.json() as Promise<Sw3IndexDrafts>)
    .then((d) => {
      drafts[basis] = d;
      // Everything drawn before the drafts arrived draws again.
      emit();
      return d;
    });
  return loading[basis]!;
};
export const draftsReady = () => !!drafts[S.basis];

// ── Phase ───────────────────────────────────────────────────────────────────

/** Build index's two stages, as the console shows them; slow enough to watch in a demo. */
export const BUILD_STAGES = ['Read requirements', 'Propose index'] as const;
const BUILD_STAGE_MS = [4400, 7600];
export const BUILD_MS = BUILD_STAGE_MS.reduce((a, b) => a + b, 0);
/** Where Build index is: its stage (0 or 1), how far through each, and the ms since it began. */
export const buildProgress = (now = Date.now()) => {
  if (!S.building) return null;
  const elapsed = Math.max(0, now - S.building);
  let t = elapsed;
  const frac = BUILD_STAGE_MS.map((ms) => {
    const f = Math.max(0, Math.min(1, t / ms));
    t -= ms;
    return f;
  });
  return { stage: frac[0] < 1 ? 0 : 1, frac, elapsed, left: Math.max(0, BUILD_MS - elapsed) };
};
export const phase = (): Phase => {
  if (S.building) return 'building';
  if (!S.built) return 'empty';
  if (S.run) return 'drafting';
  return S.drafted ? 'drafted' : 'built';
};

// ── The index ───────────────────────────────────────────────────────────────

export const cats = () => S.cats;
export interface SubRef {
  sub: Sub;
  cat: Cat;
  /** Index order across the whole index. */
  i: number;
}
export const subs = (): SubRef[] => {
  let i = 0;
  return S.cats.flatMap((cat) => cat.subs.map((sub) => ({ sub, cat, i: i++ })));
};
export const subOf = (id: string) => subs().find((s) => s.sub.id === id);
export const catOf = (id: string) => S.cats.find((c) => c.id === id);

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const nextId = (p: string) => `${p}-${++S.seq}`;
const fromProposal = (pc: ProposedCategory[], basis: IndexBasis, locked = false): Cat[] =>
  pc.map((c) => ({
    id: nextId('c'),
    name: c.name,
    locked,
    subs: c.subcategories.map((s) => ({ id: nextId('s'), name: s.name, locked, origin: s.id, basis, evidence: s.evidence })),
  }));

/** Build index: the first proposal, after the few seconds prod's call takes. */
export const buildIndex = () =>
  commit(() => {
    S.building = Date.now();
  });
export const finishBuild = () =>
  commit(() => {
    if (!S.building) return;
    S.building = null;
    const hand = S.cats;
    S.cats = [...fromProposal(P.base, 'base'), ...hand];
    S.basis = 'base';
    S.built = true;
  });

/** A unique name among siblings: "New category", "New category 2"… */
const fresher = (base: string, taken: string[]) => {
  const t = new Set(taken.map(norm));
  if (!t.has(norm(base))) return base;
  let n = 2;
  while (t.has(norm(`${base} ${n}`))) n++;
  return `${base} ${n}`;
};

/** + Category. A hand-made bin is locked: a Re-run leaves it alone. */
/** The index came from Build index (not only made by hand), so Build index has a record. */
export const proposed = () => S.cats.some((c) => c.subs.some((sub) => !!sub.origin));
export const addCategory = (): string => {
  const id = nextId('c');
  commit(() => {
    S.cats.push({ id, name: fresher('New category', S.cats.map((c) => c.name)), locked: true, subs: [] });
    S.built = true;
  });
  return id;
};
export const addSubcategory = (catId: string): string | null => {
  const c = catOf(catId);
  if (!c) return null;
  const id = nextId('s');
  commit(() => {
    c.subs.push({ id, name: fresher('New subcategory', c.subs.map((s) => s.name)), locked: true, origin: null, basis: null, evidence: [] });
  });
  return id;
};

/** Rename, as prod's inline rename: names unique among siblings, at most 255, and the row
 *  locks. Returns the reason it was refused, if it was. */
export const rename = (id: string, name: string): string | null => {
  const n = name.trim();
  if (!n) return 'A name is required.';
  if (n.length > 255) return 'Keep it to 255 characters.';
  const cat = catOf(id);
  const ref = cat ? null : subOf(id);
  const siblings = cat ? S.cats.filter((c) => c.id !== id).map((c) => c.name) : (ref?.cat.subs.filter((s) => s.id !== id).map((s) => s.name) ?? []);
  if (siblings.some((s) => norm(s) === norm(n))) return cat ? 'Another category has that name.' : 'Another subcategory in this category has that name.';
  commit(() => {
    const row = cat ?? ref?.sub;
    if (!row) return;
    row.name = n;
    row.locked = true;
  });
  return null;
};

/** Locking a category locks its subcategories; unlocking it does not unlock them. */
export const setLock = (id: string, locked: boolean) =>
  commit(() => {
    const c = catOf(id);
    if (c) {
      c.locked = locked;
      if (locked) c.subs.forEach((s) => (s.locked = true));
      return;
    }
    const s = subOf(id)?.sub;
    if (s) s.locked = locked;
  });
export const lockAll = (locked: boolean) =>
  commit(() => {
    for (const c of S.cats) {
      c.locked = locked;
      c.subs.forEach((s) => (s.locked = locked));
    }
  });

/** Kept on Re-run: it holds actions or obligations. */
export const kept = (subId: string) => homeIn(subId).length + (S.place[subId]?.also.length ?? 0) > 0;
export const catKept = (catId: string) => !!catOf(catId)?.subs.some((s) => kept(s.id));

/** Drag within the parent only. */
export const move = (id: string, before: string | null) =>
  commit(() => {
    const ci = S.cats.findIndex((c) => c.id === id);
    if (ci >= 0) {
      const [c] = S.cats.splice(ci, 1);
      const to = before ? S.cats.findIndex((x) => x.id === before) : S.cats.length;
      S.cats.splice(to < 0 ? S.cats.length : to, 0, c);
      return;
    }
    const ref = subOf(id);
    if (!ref) return;
    const list = ref.cat.subs;
    list.splice(list.indexOf(ref.sub), 1);
    const to = before ? list.findIndex((x) => x.id === before) : list.length;
    list.splice(to < 0 ? list.length : to, 0, ref.sub);
  });

/** What deleting a bin takes with it, for the confirm (prod's wording). */
export interface DeleteCost {
  requirements: number;
  obligations: number;
  actions: number;
  /** Why it cannot be deleted, if it cannot. */
  refused: string | null;
}
export const deleteCost = (id: string): DeleteCost => {
  const ids = catOf(id) ? catOf(id)!.subs.map((s) => s.id) : [id];
  const home = ids.flatMap((s) => homeIn(s));
  const es = home.map((x) => entry(x)).filter((e): e is IndexEntry => !!e);
  const approvedActs = es.filter((e) => e.kind === 'action' && statusOf(e.id) === 'approved').length;
  const reqs = new Set(es.flatMap((e) => e.locators.map((l) => `${l.code}:${l.n}`)));
  return {
    requirements: reqs.size,
    obligations: es.filter((e) => e.kind === 'obligation' && statusOf(e.id) !== 'approved').length,
    actions: es.filter((e) => e.kind === 'action' && statusOf(e.id) === 'draft').length,
    refused: approvedActs ? `It holds ${approvedActs} approved action${approvedActs === 1 ? '' : 's'}.` : null,
  };
};
export const remove = (id: string) =>
  commit(() => {
    const ids = catOf(id) ? catOf(id)!.subs.map((s) => s.id) : [id];
    for (const s of ids) {
      // Items from its drafts go back to be filed on the next Draft run; its drafts go.
      const home = S.place[s]?.home ?? [];
      S.refile.push(...home.filter((x) => statusOf(x) !== 'approved'));
      delete S.place[s];
      S.opened = S.opened.filter((x) => x !== s);
      S.talk = S.talk.filter((t) => t.sub !== s);
    }
    for (const p of Object.values(S.place)) p.also = p.also.filter((x) => !S.refile.includes(x));
    if (catOf(id)) S.cats = S.cats.filter((c) => c.id !== id);
    else {
      const ref = subOf(id);
      if (ref) ref.cat.subs = ref.cat.subs.filter((s) => s.id !== id);
    }
  });

// ── Re-run ──────────────────────────────────────────────────────────────────

/** Re-run, as prod's ComplianceIndexGenerationService applies a proposal: locked bins and
 *  bins that hold drafts stay as they are; an unlocked bin proposed again under the same
 *  names keeps its row and takes the new evidence; new bins append, alphabetically; every
 *  other unlocked bin is removed. Guidance is for this run only. The pre-run proposal with
 *  guidance is the only one the prototype has; without guidance it is the first build's. */
export const rerunIndex = (guidance: string) =>
  commit(() => {
    const basis: IndexBasis = guidance ? 'rerun' : 'base';
    const proposal = basis === 'rerun' ? P.rerun.categories : P.base;
    const key = (c: string, s: string) => `${norm(c)}|${norm(s)}`;
    const wanted = new Map(proposal.flatMap((c) => c.subcategories.map((s) => [key(c.name, s.name), { c, s }] as const)));
    const summary: RerunSummary = { guidance, added: [], removed: [], keptLocked: [] };
    const used = new Set<string>();

    for (const cat of S.cats) {
      cat.subs = cat.subs.filter((sub) => {
        const k = key(cat.name, sub.name);
        const hit = wanted.get(k);
        if (sub.locked || kept(sub.id)) {
          if (hit) used.add(k);
          else if (sub.locked) summary.keptLocked.push(`${cat.name} › ${sub.name}`);
          return true;
        }
        if (hit) {
          used.add(k);
          sub.origin = hit.s.id;
          sub.basis = basis;
          sub.evidence = hit.s.evidence;
          return true;
        }
        summary.removed.push(`${cat.name} › ${sub.name}`);
        return false;
      });
    }
    S.cats = S.cats.filter((c) => c.locked || c.subs.length || proposal.some((p) => norm(p.name) === norm(c.name)));

    const fresh = proposal
      .flatMap((c) => c.subcategories.map((s) => ({ c, s })))
      .filter(({ c, s }) => !used.has(key(c.name, s.name)))
      .sort((a, b) => a.s.name.localeCompare(b.s.name));
    for (const { c, s } of fresh) {
      let cat = S.cats.find((x) => norm(x.name) === norm(c.name));
      if (!cat) S.cats.push((cat = { id: nextId('c'), name: c.name, locked: false, subs: [] }));
      cat.subs.push({ id: nextId('s'), name: s.name, locked: false, origin: s.id, basis, evidence: s.evidence });
      summary.added.push(`${c.name} › ${s.name}`);
    }
    S.basis = basis;
    S.rerun = summary;
  });
export const rerunSummary = () => S.rerun;
export const lockedCount = () => subs().filter(({ sub }) => sub.locked).length;

// ── The Draft run ───────────────────────────────────────────────────────────

/** The four stages, project-wide, as draft-stages.ts names them. */
export const STAGES = ['Read requirements', 'File into bins', 'Merge duties', 'Complete drafts'] as const;
// Twice the pace prod runs at, so the run can be watched in a demo.
const STAGE_MS = [8400, 6800, 6000, 4400];
const AGAIN_MS = [1200, 2800, 2800, 1800];

export interface RunCounts {
  requirements: number;
  read: number;
  items: number;
  filed: number;
  noBin: number;
  toMerge: number;
  merged: number;
  drafts: number;
  toComplete: number;
  completed: number;
  needParty: number;
  neither: number;
}

/** What a run would count when it finishes. */
const target = (again: boolean, items: number): RunCounts => {
  const c = P.counts[S.basis];
  if (again)
    return { requirements: 0, read: 0, items, filed: items, noBin: 0, toMerge: items, merged: items, drafts: items, toComplete: 0, completed: 0, needParty: 0, neither: 0 };
  return {
    requirements: c.requirements,
    read: c.read,
    items: c.items,
    filed: c.filed,
    noBin: c.noBin,
    toMerge: c.filed,
    merged: c.merged,
    drafts: c.obligations + c.actions,
    toComplete: c.actions,
    completed: c.completed,
    needParty: c.needParty,
    neither: c.neither,
  };
};

/** Where a run is: its stage (0–3), how far through it, and its counts so far. */
export interface RunProgress {
  stage: number;
  /** 0–1 across the whole run. */
  done: number;
  counts: RunCounts;
  finished: boolean;
  /** How far through each stage, 0–1: what the console streams. */
  frac: number[];
}
export const runProgress = (now = Date.now()): RunProgress | null => {
  const r = S.run;
  if (!r) return null;
  const ms = r.again ? AGAIN_MS : STAGE_MS;
  const total = ms.reduce((a, b) => a + b, 0);
  let t = Math.max(0, now - r.started);
  const T = target(r.again, r.items);
  const frac = [0, 0, 0, 0];
  for (let i = 0; i < 4; i++) {
    frac[i] = Math.min(1, t / ms[i]);
    t -= ms[i];
    if (t < 0) break;
  }
  const stage = Math.min(3, frac.findIndex((f) => f < 1) < 0 ? 3 : frac.findIndex((f) => f < 1));
  const f = (n: number, i: number) => Math.round(n * frac[i]);
  const counts: RunCounts = {
    requirements: T.requirements,
    read: f(T.read, 0),
    items: f(T.items, 0),
    neither: f(T.neither, 0),
    filed: f(T.filed, 1),
    noBin: f(T.noBin, 1),
    toMerge: T.toMerge,
    merged: f(T.merged, 2),
    drafts: f(T.drafts, 2),
    toComplete: T.toComplete,
    completed: f(T.completed, 3),
    needParty: f(T.needParty, 3),
  };
  const elapsed = Math.max(0, now - r.started);
  return { stage, done: Math.min(1, elapsed / total), counts, finished: elapsed >= total, frac };
};

/** The last finished run's counts, for its log. */
export const lastRun = () => S.last;
/** The run in flight, if any: when it started and whether it is Draft again. */
export const currentRun = () => S.run;
/** How long a run takes, in ms. */
export const runMs = (again: boolean) => (again ? AGAIN_MS : STAGE_MS).reduce((a, b) => a + b, 0);
/** What the Draft run makes of the current proposal, once loaded: the console's per-stage
 *  lines (commitments read, bins filed, duties merged, actions completed). */
export const runDrafts = (): Sw3IndexDrafts | null => drafts[S.basis] ?? null;

/** What is still outstanding for Draft again. */
export const pendingWork = () => ({
  filed: Object.keys(S.filed).length,
  refile: S.refile.length,
});

export const startDraft = async () => {
  if (S.run || !S.built) return;
  await loadDrafts(S.basis);
  const again = S.drafted;
  const items = again ? Object.keys(S.filed).length + S.refile.length : 0;
  commit(() => {
    S.run = { started: Date.now(), again, items };
  });
};

/** File the drafts into the index as it stands, by the bin each came from. */
const placeDrafts = (d: Sw3IndexDrafts) => {
  const proposal = d.basis === 'rerun' ? P.rerun.categories : P.base;
  const byName = new Map<string, string>();
  const bySub = new Map<string, string>();
  for (const c of proposal)
    for (const s of c.subcategories) {
      byName.set(`${norm(c.name)}|${norm(s.name)}`, s.id);
      if (!bySub.has(norm(s.name))) bySub.set(norm(s.name), s.id);
    }
  const claimed = new Map<string, string>(); // proposal sub → local sub
  for (const { sub, cat } of subs()) {
    const src = (sub.basis === d.basis && sub.origin) || byName.get(`${norm(cat.name)}|${norm(sub.name)}`) || bySub.get(norm(sub.name));
    if (src && !claimed.has(src) && d.placement[src]) claimed.set(src, sub.id);
  }
  const place: State['place'] = {};
  for (const [src, local] of claimed) place[local] = { home: [...d.placement[src].home], also: [] };
  const alsoOf = new Map<string, string[]>();
  for (const [src, p] of Object.entries(d.placement)) for (const id of p.also) alsoOf.set(id, [...(alsoOf.get(id) ?? []), src]);
  const unfiled: IndexUnfiled[] = [...d.unfiled];
  for (const [src, p] of Object.entries(d.placement)) {
    if (claimed.has(src)) {
      for (const id of p.also) place[claimed.get(src)!].also.push(id);
      continue;
    }
    // Its bin is not in the index: home it where it is also filed, or it fits no bin.
    for (const id of p.home) {
      const to = (alsoOf.get(id) ?? []).map((x) => claimed.get(x)).find(Boolean);
      if (to) {
        place[to].home.push(id);
        place[to].also = place[to].also.filter((x) => x !== id);
      } else {
        const e = d.entries[id];
        if (e) unfiled.push({ id: `x-${id}`, statement: e.kind === 'action' ? e.name : e.title, reason: 'Its subcategory is not in the index', kind: e.kind, ...(e.kind === 'obligation' ? { class: e.class, audience: e.audience } : {}), locators: e.locators });
      }
    }
  }
  S.place = place;
  S.unfiled = unfiled;
};

/** The run finished: the drafts are filed. */
export const finishDraft = () => {
  const r = S.run;
  const d = drafts[S.basis];
  if (!r || !d) return;
  commit(() => {
    if (!r.again) {
      placeDrafts(d);
      S.status = {};
      S.edits = {};
      S.folded = {};
      S.made = {};
      S.opened = [];
    } else {
      // What Suggest subcategories filed becomes drafts, in its bin.
      for (const [uid, subId] of Object.entries(S.filed)) {
        const u = S.unfiled.find((x) => x.id === uid);
        if (!u || !subOf(subId)) continue;
        const id = `u-${uid}`;
        S.made[id] =
          u.kind === 'action'
            ? { id, kind: 'action', name: u.statement, text: u.statement, type: '', scope: '', responsibleParty: '', expectedEvidence: '', frequency: '', deadline: null, recurrence: null, locators: u.locators }
            : { id, kind: 'obligation', title: u.statement, class: u.class ?? 'Adhere', audience: u.audience ?? 'Crews', trigger: '', monitorSigns: [], locators: u.locators };
        (S.place[subId] ??= { home: [], also: [] }).home.push(id);
      }
      S.unfiled = S.unfiled.filter((u) => !S.filed[u.id]);
      S.filed = {};
      // Drafts whose bin was deleted: where they are also filed, or no bin.
      for (const id of S.refile) {
        const to = Object.entries(S.place).find(([, p]) => p.also.includes(id))?.[0];
        if (to) {
          S.place[to].home.push(id);
          S.place[to].also = S.place[to].also.filter((x) => x !== id);
        } else {
          const e = entry(id);
          if (e) S.unfiled.push({ id: `x-${id}`, statement: titleOf(e), reason: 'Its subcategory was deleted', kind: e.kind, ...(e.kind === 'obligation' ? { class: e.class, audience: e.audience } : {}), locators: e.locators });
        }
      }
      S.refile = [];
    }
    S.last = runProgress(Number.MAX_SAFE_INTEGER)?.counts ?? null;
    S.run = null;
    S.drafted = true;
    S.rerun = null;
  });
};

// ── Drafts ──────────────────────────────────────────────────────────────────

/** A draft as it stands: the run's, or one a merge or Draft again made, with edits. */
export const entry = (id: string): IndexEntry | undefined => {
  const e = S.made[id] ?? drafts[S.basis]?.entries[id];
  return e ? ({ ...e, ...(S.edits[id] ?? {}) } as IndexEntry) : undefined;
};
export const titleOf = (e: IndexEntry) => (e.kind === 'action' ? e.name : e.title);
export const statusOf = (id: string): EntryStatus => (S.folded[id] ? 'discarded' : (S.status[id] ?? 'draft'));
/** Drafts filed in a subcategory as their home: review is by home bin only. */
export const homeIn = (subId: string): string[] => (S.place[subId]?.home ?? []).filter((id) => !S.folded[id]);
export const entriesIn = (subId: string): IndexEntry[] => homeIn(subId).map((id) => entry(id)).filter((e): e is IndexEntry => !!e);
export const homeOf = (id: string) => Object.entries(S.place).find(([, p]) => p.home.includes(id))?.[0] ?? null;
/** Where else a draft is filed: read only, on the obligation. */
export const alsoIn = (id: string): string[] => Object.entries(S.place).filter(([, p]) => p.also.includes(id)).map(([k]) => k);
export const unfiled = () => S.unfiled;
export const filedBySuggest = () => S.filed;

export const pendingIn = (subId: string) => homeIn(subId).filter((id) => statusOf(id) === 'draft').length;
export const approvedIn = (subId: string) => homeIn(subId).filter((id) => statusOf(id) === 'approved').length;
export const discardedIn = (subId: string) => homeIn(subId).filter((id) => statusOf(id) === 'discarded').length;
export const isOpened = (subId: string) => S.opened.includes(subId);
/** FirstOpenedDate: set the first time a bin with drafts is opened. */
export const markOpened = (subId: string) => {
  if (S.opened.includes(subId) || !pendingIn(subId)) return;
  S.opened.push(subId);
  save();
};

/** An action with no scope cannot be approved. */
export const blocked = (id: string) => {
  const e = entry(id);
  return !!e && e.kind === 'action' && !e.scope;
};
export const NO_SCOPE = 'This draft has no scope. Set one before approving it.';

const decide = (ids: string[], status: EntryStatus) =>
  commit(() => {
    for (const id of ids) {
      if (status === 'approved' && blocked(id)) continue;
      if (status === 'draft') delete S.status[id];
      else S.status[id] = status;
    }
  });
export const approve = (ids: string[]) => decide(ids, 'approved');
export const discard = (ids: string[]) => decide(ids, 'discarded');
export const restore = (ids: string[]) => decide(ids, 'draft');
const draftsIn = (subId: string) => homeIn(subId).filter((id) => statusOf(id) === 'draft');
export const approvable = (subId: string) => draftsIn(subId).filter((id) => !blocked(id));
export const approveAll = (subId: string) => approve(draftsIn(subId));
export const discardAll = (subId: string) => discard(draftsIn(subId));
export const restoreAll = (subId: string) => restore(homeIn(subId).filter((id) => statusOf(id) === 'discarded'));
export const approveCategory = (catId: string) => approve(catOf(catId)?.subs.flatMap((s) => draftsIn(s.id)) ?? []);

/** Every pending draft, project-wide, and what stops approving them. */
export const pendingAll = () => subs().flatMap(({ sub }) => draftsIn(sub.id));
export const unopenedWithDrafts = () => subs().filter(({ sub }) => pendingIn(sub.id) && !isOpened(sub.id)).length;
export const approveIndex = () => approve(pendingAll());
export const totals = () => {
  const ids = subs().flatMap(({ sub }) => homeIn(sub.id));
  return {
    drafts: ids.length,
    pending: ids.filter((id) => statusOf(id) === 'draft').length,
    approved: ids.filter((id) => statusOf(id) === 'approved').length,
    blocked: ids.filter((id) => statusOf(id) === 'draft' && blocked(id)).length,
  };
};

export const editEntry = (id: string, patch: EntryPatch) =>
  commit(() => {
    S.edits[id] = { ...(S.edits[id] ?? {}), ...patch };
  });

/** Why these drafts cannot merge, if they cannot: drafts of one kind. Prod's Merge also
 *  takes one audience; here the merge dialog asks which audience the merged draft keeps. */
export const mergeRefusal = (ids: string[]): string | null => {
  const es = ids.map((id) => entry(id)).filter((e): e is IndexEntry => !!e);
  if (es.length < 2) return 'Pick two or more drafts.';
  if (es.some((e) => statusOf(e.id) !== 'draft')) return 'Only drafts merge.';
  if (new Set(es.map((e) => e.kind)).size > 1) return 'An action and an obligation stay separate.';
  return null;
};
/** Merge: one draft that keeps every source behind these. */
export const merge = (ids: string[], title: string, keep: Partial<Pick<IndexObligation, 'audience' | 'class'>> = {}): string | null => {
  if (mergeRefusal(ids)) return null;
  const es = ids.map((id) => entry(id)!);
  const sub = homeOf(ids[0]);
  if (!sub) return null;
  const id = nextId('m');
  commit(() => {
    const locators = es.flatMap((e) => e.locators).filter((l, i, a) => a.findIndex((x) => x.code === l.code && x.n === l.n && x.excerpt === l.excerpt) === i);
    const first = es[0];
    S.made[id] =
      first.kind === 'action'
        ? { ...first, id, name: title, locators }
        : { ...first, ...keep, id, title, locators, monitorSigns: [...new Set(es.flatMap((e) => (e.kind === 'obligation' ? e.monitorSigns : [])))] };
    const home = S.place[sub].home;
    home.splice(home.indexOf(ids[0]), 0, id);
    for (const x of ids) S.folded[x] = id;
  });
  return id;
};

/** Suggest subcategories, applied: new bins made, items filed for the next run. */
export interface SuggestPlan {
  existing: { sub: string; unfiledIds: string[] }[];
  newBins: { catId: string; name: string; unfiledIds: string[] }[];
  left: string[];
}
export const applySuggestions = (p: SuggestPlan) =>
  commit(() => {
    for (const e of p.existing) for (const u of e.unfiledIds) S.filed[u] = e.sub;
    for (const b of p.newBins) {
      const c = catOf(b.catId);
      if (!c) continue;
      const id = nextId('s');
      c.subs.push({ id, name: fresher(b.name, c.subs.map((s) => s.name)), locked: true, origin: null, basis: null, evidence: [] });
      for (const u of b.unfiledIds) S.filed[u] = id;
    }
    if (p.left.length) {
      let c = S.cats.find((x) => norm(x.name) === 'unfiled');
      if (!c) S.cats.push((c = { id: nextId('c'), name: 'Unfiled', locked: true, subs: [] }));
      let s = c.subs.find((x) => norm(x.name) === 'needs a home');
      if (!s) c.subs.push((s = { id: nextId('s'), name: 'Needs a home', locked: true, origin: null, basis: null, evidence: [] }));
      for (const u of p.left) S.filed[u] = s.id;
    }
  });
/** The drafts file's suggestions, re-pointed at the index as it stands. */
export const suggestions = () => {
  const d = drafts[S.basis];
  const open = new Set(S.unfiled.filter((u) => !S.filed[u.id]).map((u) => u.id));
  if (!d) return null;
  const localOf = (src: string) => subs().find(({ sub }) => sub.origin === src && sub.basis === S.basis)?.sub.id;
  const existing = d.suggestions.existing.flatMap((e) => {
    const sub = localOf(e.sub);
    const ids = e.unfiledIds.filter((u) => open.has(u));
    return sub && ids.length ? [{ sub, unfiledIds: ids }] : [];
  });
  const newBins = d.suggestions.newBins.map((b) => ({ ...b, unfiledIds: b.unfiledIds.filter((u) => open.has(u)) })).filter((b) => b.unfiledIds.length);
  const taken = new Set([...existing.flatMap((e) => e.unfiledIds), ...newBins.flatMap((b) => b.unfiledIds)]);
  const left = [...d.suggestions.left.filter((l) => open.has(l.unfiledId)), ...[...open].filter((u) => !taken.has(u) && !d.suggestions.left.some((l) => l.unfiledId === u)).map((u) => ({ unfiledId: u, reason: S.unfiled.find((x) => x.id === u)?.reason ?? '' }))];
  return { existing, newBins, left: left.filter((l) => !taken.has(l.unfiledId)) };
};

// ── Aldo's threads ──────────────────────────────────────────────────────────

export const talkOf = (subId: string) => S.talk.filter((t) => t.sub === subId);
export const pushTalk = (t: Omit<IndexTalk, 'id' | 'wall'>) =>
  commit(() => {
    S.talk.push({ ...t, id: `t${S.talk.length + 1}-${Date.now() % 100000}`, wall: Date.now() });
  });
export const settleProposal = (talkId: string, propId: string, state: 'accepted' | 'dismissed') =>
  commit(() => {
    const p = S.talk.find((x) => x.id === talkId)?.proposals?.find((x) => x.id === propId);
    if (p) p.state = state;
  });
/** Take back the last thing typed, before anything of it was applied. */
export const takeBackTalk = (talkId: string): IndexTalk | null => {
  const t = S.talk.at(-1);
  if (!t || t.id !== talkId || t.via !== 'typed' || t.proposals?.some((p) => p.state)) return null;
  commit(() => {
    S.talk = S.talk.slice(0, -1);
  });
  return t;
};

export const applyProposal = (p: IndexProposal) => {
  if (p.kind === 'approve') approve(p.ids);
  else if (p.kind === 'discard') discard(p.ids);
  else if (p.kind === 'merge') merge(p.ids, p.title);
  else if (p.kind === 'edit') editEntry(p.id, p.patch);
  else if (p.kind === 'rerun') rerunIndex(p.guidance);
};

// ── Start over ──────────────────────────────────────────────────────────────

/** PR #1520's Start over: the index and every draft go, back to no index. */
export const startOver = () => {
  S = fresh();
  save();
  emit();
};

export const AUDIENCES: IndexAudience[] = ['Crews', 'Monitors', 'Compliance staff'];
