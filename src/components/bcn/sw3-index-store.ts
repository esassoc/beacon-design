// Step 3's state: the Compliance Index fixture (sw3-index.json, read from the page's
// script[data-sw3-index]) and what a person has decided on top of it. Decisions live on the
// ENTRY, never on a placement: an entry filed in two subcategories is approved in both.
//
// Contract, on `document`:
//   out  sw3i:change   any decision (approve, discard, restore, edit, merge, file, reviewed)

import type { IndexEntry, IndexObligation, IndexAction, IndexSubcategory, IndexCategory, Sw3Index, IndexUnfiled, IndexMergeProposal, IndexClass, IndexAudience } from '../../data/sw3-index-types';

export type EntryStatus = 'draft' | 'approved' | 'discarded';

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
  /** Proposals Aldo made, applied only when pressed. */
  proposals?: { id: string; label: string; p: IndexProposal; state?: 'accepted' | 'dismissed' }[];
  /** A press recorded as one quiet line. */
  event?: boolean;
}

export type IndexProposal =
  | { kind: 'approve'; ids: string[] }
  | { kind: 'discard'; ids: string[] }
  | { kind: 'merge'; mergeId: string }
  | { kind: 'mergeIds'; ids: string[]; title: string }
  | { kind: 'move'; id: string; from: string; to: string }
  | { kind: 'also'; id: string; to: string }
  | { kind: 'file'; unfiledId: string; to: string }
  | { kind: 'edit'; id: string; patch: Partial<IndexObligation> & Partial<IndexAction> };

interface State {
  status: Record<string, EntryStatus>;
  edits: Record<string, Partial<IndexObligation> & Partial<IndexAction>>;
  /** Entries a person filed somewhere else (entry id → subcategory ids added / removed). */
  added: Record<string, string[]>;
  removed: Record<string, string[]>;
  merges: Record<string, 'accepted' | 'dismissed'>;
  /** Merges a person asked for in words: the surviving entry and those folded into it. */
  folded: Record<string, string>;
  filed: Record<string, string | 'none'>;
  talk: IndexTalk[];
  approvedIndex?: number;
}

const KEY = 'sw3:index:v2';
let D: Sw3Index;
let S: State;
const fresh = (): State => ({ status: {}, edits: {}, added: {}, removed: {}, merges: {}, folded: {}, filed: {}, talk: [] });
const history: string[] = [];

export const initIndex = (): Sw3Index => {
  if (D) return D;
  D = JSON.parse(document.querySelector('script[data-sw3-index]')?.textContent ?? '{}') as Sw3Index;
  try {
    S = { ...fresh(), ...JSON.parse(localStorage.getItem(KEY) ?? '{}') };
  } catch {
    S = fresh();
  }
  return D;
};

const save = () => {
  try {
    localStorage.setItem(KEY, JSON.stringify(S));
  } catch {
    /* no storage */
  }
};
const emit = () => document.dispatchEvent(new CustomEvent('sw3i:change'));
const commit = (fn: () => void) => {
  history.push(JSON.stringify(S));
  if (history.length > 50) history.shift();
  fn();
  save();
  emit();
};
export const canUndo = () => history.length > 0;
export const undo = () => {
  const prev = history.pop();
  if (!prev) return;
  S = JSON.parse(prev);
  save();
  emit();
};

// ── The index ─────────────────────────────────────────────────────────────────

export interface SubRef {
  sub: IndexSubcategory;
  cat: IndexCategory;
  /** Index order across the whole index. */
  i: number;
}

let subsCache: SubRef[] | null = null;
export const subs = (): SubRef[] => {
  if (!subsCache) {
    let i = 0;
    subsCache = D.categories.flatMap((cat) => cat.subcategories.map((sub) => ({ sub, cat, i: i++ })));
  }
  return subsCache;
};
export const subOf = (id: string) => subs().find((s) => s.sub.id === id);

/** An entry as it stands: the fixture's, with a person's edits. */
export const entry = (id: string): IndexEntry | undefined => {
  const e = D.entries[id];
  return e ? ({ ...e, ...(S.edits[id] ?? {}) } as IndexEntry) : undefined;
};
export const titleOf = (e: IndexEntry) => (e.kind === 'action' ? e.name : e.title);

export const statusOf = (id: string): EntryStatus => (S.folded[id] ? 'discarded' : (S.status[id] ?? 'draft'));
export const isFolded = (id: string) => !!S.folded[id];

/** The entries filed in a subcategory: home entries, then those also filed here. */
export const entriesIn = (subId: string): { id: string; home: boolean }[] => {
  const s = subOf(subId)?.sub;
  if (!s) return [];
  const out = [...s.entryIds.map((id) => ({ id, home: true })), ...s.alsoIds.map((id) => ({ id, home: false }))];
  for (const [id, to] of Object.entries(S.added)) if (to.includes(subId) && !out.some((x) => x.id === id)) out.push({ id, home: false });
  for (const [uid, to] of Object.entries(S.filed)) if (to === subId) out.push({ id: `unfiled:${uid}`, home: true });
  return out.filter((x) => !(S.removed[x.id] ?? []).includes(subId) && !S.folded[x.id]);
};

/** Where else an entry is filed: the subcategories that share it. */
export const filedIn = (id: string): string[] =>
  subs()
    .filter(({ sub }) => entriesIn(sub.id).some((x) => x.id === id))
    .map(({ sub }) => sub.id);

/** "See also": other subcategories that share entries with this one, most shared first. */
export const seeAlso = (subId: string): string[] => {
  const n = new Map<string, number>();
  for (const { id } of entriesIn(subId)) for (const other of filedIn(id)) if (other !== subId) n.set(other, (n.get(other) ?? 0) + 1);
  return [...n.entries()].sort((a, b) => b[1] - a[1]).map(([k]) => k);
};

/** An item filed by hand from Not filed, read as a draft obligation. */
const unfiledEntry = (u: IndexUnfiled): IndexObligation => ({
  id: `unfiled:${u.id}`,
  kind: 'obligation',
  title: u.statement,
  class: 'Adhere',
  audience: 'Crews',
  trigger: '',
  monitorSigns: [],
  locators: u.locators,
});
export const entryAny = (id: string): IndexEntry | undefined => {
  if (id.startsWith('unfiled:')) {
    const u = D.unfiled.find((x) => `unfiled:${x.id}` === id);
    return u ? ({ ...unfiledEntry(u), ...(S.edits[id] ?? {}) } as IndexEntry) : undefined;
  }
  return entry(id);
};

// ── What needs a person ──────────────────────────────────────────────────────

export interface IndexFlag {
  kind: 'merge' | 'party' | 'unfiled';
  id: string;
}

export const pendingMerges = (subId: string): IndexMergeProposal[] =>
  D.merges.filter((m) => m.subcategoryId === subId && !S.merges[m.id] && m.entryIds.every((id) => statusOf(id) !== 'discarded'));

/** Open items for a subcategory: merges to decide, actions with nobody to do them, and
 *  (on every subcategory) what File could not place. */
export const flagsOf = (subId: string): IndexFlag[] => [
  ...pendingMerges(subId).map((m) => ({ kind: 'merge' as const, id: m.id })),
  ...entriesIn(subId)
    .map(({ id }) => entryAny(id))
    .filter((e): e is IndexAction => !!e && e.kind === 'action' && !e.responsibleParty && statusOf(e.id) === 'draft')
    .map((e) => ({ kind: 'party' as const, id: e.id })),
];
export const unfiled = (): IndexUnfiled[] => D.unfiled.filter((u) => !S.filed[u.id]);

export type SubState = 'draft' | 'flagged' | 'reviewed';
/** Reviewed when every entry is decided; flagged while it has something to settle. */
export const subState = (subId: string): SubState => {
  const ids = entriesIn(subId).map((x) => x.id);
  if (ids.length && ids.every((id) => statusOf(id) !== 'draft')) return 'reviewed';
  return flagsOf(subId).length ? 'flagged' : 'draft';
};
export const approvedIn = (subId: string) => entriesIn(subId).filter(({ id }) => statusOf(id) === 'approved').length;

// ── Decisions ────────────────────────────────────────────────────────────────

export const setStatus = (ids: string[], status: EntryStatus) =>
  commit(() => {
    for (const id of ids) {
      if (status === 'draft') delete S.status[id];
      else S.status[id] = status;
    }
  });
export const approveAll = (subId: string) => setStatus(entriesIn(subId).filter(({ id }) => statusOf(id) === 'draft').map((x) => x.id), 'approved');
export const restoreAll = (subId: string) => setStatus(entriesIn(subId).filter(({ id }) => statusOf(id) === 'discarded').map((x) => x.id), 'draft');

export const editEntry = (id: string, patch: Partial<IndexObligation> & Partial<IndexAction>) =>
  commit(() => {
    S.edits[id] = { ...(S.edits[id] ?? {}), ...patch };
  });

/** Accept a proposed merge: the first entry survives, under the merged title, with every
 *  locator; the others fold into it. */
export const acceptMerge = (mergeId: string) =>
  commit(() => {
    const m = D.merges.find((x) => x.id === mergeId)!;
    S.merges[mergeId] = 'accepted';
    fold(m.entryIds, m.title);
  });
export const dismissMerge = (mergeId: string) =>
  commit(() => {
    S.merges[mergeId] = 'dismissed';
  });
const fold = (ids: string[], title: string) => {
  const [keep, ...rest] = ids;
  const all = ids.map((id) => entryAny(id)!).filter(Boolean);
  const locators = all.flatMap((e) => e.locators).filter((l, i, a) => a.findIndex((x) => x.code === l.code && x.n === l.n) === i);
  const k = entryAny(keep)!;
  S.edits[keep] = { ...(S.edits[keep] ?? {}), ...(k.kind === 'action' ? { name: title } : { title }), locators };
  for (const id of rest) S.folded[id] = keep;
};
export const mergeIds = (ids: string[], title: string) => commit(() => fold(ids, title));

export const moveEntry = (id: string, from: string, to: string) =>
  commit(() => {
    S.removed[id] = [...new Set([...(S.removed[id] ?? []), from])];
    S.added[id] = [...new Set([...(S.added[id] ?? []), to])].filter((x) => x !== from);
  });
export const alsoFile = (id: string, to: string) =>
  commit(() => {
    S.added[id] = [...new Set([...(S.added[id] ?? []), to])];
    S.removed[id] = (S.removed[id] ?? []).filter((x) => x !== to);
  });
export const fileUnfiled = (unfiledId: string, to: string | 'none') =>
  commit(() => {
    S.filed[unfiledId] = to;
  });

export const applyProposal = (p: IndexProposal) => {
  if (p.kind === 'approve') setStatus(p.ids, 'approved');
  else if (p.kind === 'discard') setStatus(p.ids, 'discarded');
  else if (p.kind === 'merge') acceptMerge(p.mergeId);
  else if (p.kind === 'mergeIds') mergeIds(p.ids, p.title);
  else if (p.kind === 'move') moveEntry(p.id, p.from, p.to);
  else if (p.kind === 'also') alsoFile(p.id, p.to);
  else if (p.kind === 'file') fileUnfiled(p.unfiledId, p.to);
  else if (p.kind === 'edit') editEntry(p.id, p.patch);
};

// ── Aldo's threads ───────────────────────────────────────────────────────────

export const talkOf = (subId: string) => S.talk.filter((t) => t.sub === subId);
export const pushTalk = (t: Omit<IndexTalk, 'id' | 'wall'>) =>
  commit(() => {
    S.talk.push({ ...t, id: `t${S.talk.length + 1}`, wall: Date.now() });
  });
export const settleProposal = (talkId: string, propId: string, state: 'accepted' | 'dismissed') =>
  commit(() => {
    const t = S.talk.find((x) => x.id === talkId);
    const p = t?.proposals?.find((x) => x.id === propId);
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

// ── The whole index ──────────────────────────────────────────────────────────

export const approveIndex = () =>
  commit(() => {
    S.approvedIndex = Date.now();
  });
export const indexApproved = () => !!S.approvedIndex;
export const startOver = () => {
  S = fresh();
  history.length = 0;
  save();
  emit();
};

export const CLASS_LABEL: Record<IndexClass, string> = { Adhere: 'Adhere', Monitor: 'Monitor', Notify: 'Notify', Roster: 'Roster' };
export const AUDIENCES: IndexAudience[] = ['Crews', 'Monitors', 'Compliance staff'];
export const index = () => D;
