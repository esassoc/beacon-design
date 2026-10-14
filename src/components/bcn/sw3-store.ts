// sw3-store — the three-step Setup Wizard's state: the run clock, the scan's events, and
// every call a person makes in steps 1 and 2. One store for both pages, in localStorage,
// so a person can open the review while the scan is on page 30, walk away, and come back
// to wherever the run is.
//
// The clock is virtual: `now()` is seconds into the replayed run, from an anchor in real
// time and a speed. The UI never stores what the scan has done; it derives it from the
// events whose time has come (`scanned`, `finds`, `parsed`). That is the point of the event
// stream: rendering from events makes working ahead and walking away free.
//
// Contract, on `document`:
//   out  sw3:change   any state change (a person's call, or the clock crossing an event)
//   out  sw3:tick     the clock moved (fires while the run is live)
import type {
  Box,
  Entity,
  Find,
  MergeProposal,
  ReviewCommitment,
  ReviewFlag,
  ReviewRequirement,
  ScanEvent,
  ScanPage,
} from '../../data/setup-wizard-3-step';
import { uncoveredRanges, sameWords, boxesFor, type Range } from '../../lib/anchored-text';
import { interpret, type SteerAction } from './sw3-steer';

// ── Payload ───────────────────────────────────────────────────────────────────

type ScanCommitment = Omit<ReviewCommitment, 'text'> & { text?: string };
type ScanRequirement = Pick<ReviewRequirement, 'id' | 'code' | 'anchor'> & Partial<ReviewRequirement>;

export interface Sw3Payload {
  finds: Find[];
  missed: Find;
  events: ScanEvent[];
  seconds: number;
  scope: { first: number; last: number };
  pageSeconds: number;
  merges: MergeProposal[];
  commitments: ScanCommitment[];
  requirements: ScanRequirement[];
  pages?: ScanPage[];
  /** The scope pass's heading index: commitment code to the page it starts on. */
  headings?: Record<string, number>;
  proposal?: { section: string; first: number; last: number };
  entities?: Entity[];
  labels?: { types: Record<string, string>; phases: string[]; frequency: Record<string, string> };
}

let D: Sw3Payload;
let commitmentByCode = new Map<string, ScanCommitment>();
let findById = new Map<string, Find>();

/** Read the page's payload (a JSON script) once. */
export const initSw3 = (): Sw3Payload => {
  if (D) return D;
  const el = document.querySelector<HTMLScriptElement>('script[data-sw3-payload]');
  D = JSON.parse(el?.textContent ?? '{}') as Sw3Payload;
  commitmentByCode = new Map(D.commitments.map((c) => [c.code, c]));
  findById = new Map([...D.finds, D.missed].map((f) => [f.id, f]));
  load();
  startTicking();
  return D;
};

export const payload = () => D;
export const commitmentOf = (code: string) => commitmentByCode.get(code);
export const findOf = (id: string) => findById.get(id);

// ── State ─────────────────────────────────────────────────────────────────────

interface Clock {
  anchorReal: number;
  anchorV: number;
  speed: number;
  paused: boolean;
  /** Pause asked for: the page being read finishes first, then the run holds here. */
  pauseAt?: number | null;
}

/** One steer: what a person said (or pressed) and what Beacon did with it. The record. */
export interface Steer {
  id: string;
  /** Run time it was given (0 before the run). */
  at: number;
  /** The page the scan was on, or null before the run / after it. */
  page: number | null;
  /** Typed in the conversation, or pressed on one of Aldo's questions. */
  via: 'typed' | 'button';
  text: string;
  actions: SteerAction[];
  reply: string;
  /** Pages read before a rule, offered for a re-read. */
  offer?: { first: number; last: number };
}

interface Reread {
  first: number;
  last: number;
  at: number;
}

interface Mark {
  id: string;
  page: number;
  box: Box;
  /** Run time it was marked; the parse lands MARK_PARSE seconds later. */
  at: number;
  /** The commitment the marked region turned out to be, if Beacon knows it. */
  code?: string;
}

export interface Sw3State {
  clock: Clock | null;
  scope: { first: number; last: number; instruction: string };
  dismissed: string[];
  splitMerged: string[];
  marks: Mark[];
  removed: string[];
  /** Requirements a person vouched for despite a flag (kept unanchored, kept both). */
  kept: string[];
  edits: Record<string, Partial<ReviewRequirement>>;
  confirmed: string[];
  created: ReviewRequirement[];
  /** Uncovered ranges a person said do not bind: `${code}@${start}`. */
  notBinding: string[];
  merges: Record<string, 'accepted' | 'dismissed'>;
  commitmentsConfirmed: string[];
  steers: Steer[];
  rereads: Reread[];
}

const KEY = 'sw3:v2';
/** Seconds a re-read takes per page: no extraction to wait on for what did not change. */
export const REREAD_SECONDS = 0.5;
const MARK_PARSE = 2.4;

const fresh = (): Sw3State => ({
  clock: null,
  scope: { first: 131, last: 223, instruction: '' },
  dismissed: [],
  splitMerged: [],
  marks: [],
  removed: [],
  kept: [],
  edits: {},
  confirmed: [],
  created: [],
  notBinding: [],
  merges: {},
  commitmentsConfirmed: [],
  steers: [],
  rereads: [],
});

let S: Sw3State = fresh();
let undoSnapshot: string | null = null;

const load = () => {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) S = { ...fresh(), ...(JSON.parse(raw) as Partial<Sw3State>) };
  } catch {
    S = fresh();
  }
};

const save = () => {
  try {
    localStorage.setItem(KEY, JSON.stringify(S));
  } catch {
    /* private window: state lives for this page only */
  }
};

const emit = (name = 'sw3:change') => document.dispatchEvent(new CustomEvent(name));

const commit = (fn: () => void) => {
  fn();
  save();
  cache.clear();
  emit();
};

export const state = () => S;

/** Start over: a fresh run and no calls made. */
export const resetAll = () => {
  undoSnapshot = null;
  commit(() => {
    S = fresh();
  });
};

// ── The run clock ─────────────────────────────────────────────────────────────

export const SPEEDS = [1, 4, 16];

export const started = () => S.clock !== null;

/** Seconds into the run. */
export const now = (): number => {
  const c = S.clock;
  if (!c) return 0;
  const v = c.paused ? c.anchorV : c.anchorV + ((Date.now() - c.anchorReal) / 1000) * c.speed;
  return Math.min(v, c.pauseAt ?? Infinity, endTime());
};

/** When the run is over: the last event, or the last marked commitment's parse. */
export const endTime = () =>
  Math.max(D?.seconds ?? 0, ...S.marks.map((m) => m.at + MARK_PARSE), ...(S.rereads ?? []).map(rereadEnd));

export const finished = () => started() && now() >= endTime();

const reanchor = (patch: Partial<Clock>) => {
  const v = now();
  S.clock = { ...(S.clock as Clock), anchorReal: Date.now(), anchorV: v, ...patch };
};

export const startRun = (scope: { first: number; last: number; instruction: string }) =>
  commit(() => {
    S.scope = scope;
    S.clock = { anchorReal: Date.now(), anchorV: 0, speed: 1, paused: false };
  });

export const steer = (scope: { first: number; last: number; instruction: string }) =>
  commit(() => {
    S.scope = scope;
  });

/** When the page being read now is done: the next page_scanned event after `t`. */
const pageDoneAfter = (t: number) =>
  (D.events.find((e) => e.type === 'page_scanned' && e.t > t) as { t: number } | undefined)?.t ?? endTime();

/** Pause lets the page in flight finish (its extraction call is already out); resume picks up. */
export const pause = () =>
  commit(() => {
    if (!S.clock || S.clock.paused || S.clock.pauseAt != null) return;
    S.clock.pauseAt = pageDoneAfter(now());
  });
export const resume = () =>
  commit(() => {
    if (!S.clock) return;
    reanchor({ paused: false, pauseAt: null });
  });
export const pausing = () => !!S.clock && S.clock.pauseAt != null && now() < S.clock.pauseAt;
export const paused = () => !!S.clock && (S.clock.paused || (S.clock.pauseAt != null && now() >= S.clock.pauseAt));
// ── Steering ─────────────────────────────────────────────────────────────────

/** The last page read so far, or null. */
const lastRead = () => {
  const s = scanned();
  return s.size ? Math.max(...s) : null;
};

const scanFirst = () => Math.max(S.scope.first, D.scope.first);

const apply = (a: SteerAction) => {
  switch (a.kind) {
    case 'start':
      S.clock = { anchorReal: Date.now(), anchorV: 0, speed: 1, paused: false };
      break;
    case 'scope':
      // The prototype's run covers its own pages whatever range is given.
      S.scope = {
        first: Math.max(D.scope.first, Math.min(D.scope.last, a.first)),
        last: Math.min(D.scope.last, Math.max(D.scope.first, a.last)),
        instruction: S.scope.instruction,
      };
      break;
    case 'rule':
      S.scope.instruction = [S.scope.instruction, a.text].filter(Boolean).join('\n');
      break;
    case 'pause':
      if (S.clock && !S.clock.paused && S.clock.pauseAt == null) S.clock.pauseAt = pageDoneAfter(now());
      break;
    case 'resume':
      if (S.clock) reanchor({ paused: false, pauseAt: null });
      break;
    case 'reread':
      // The clock idles at the run's end; restart it from here so the re-read is watched.
      if (S.clock) reanchor({});
      S.rereads.push({ first: a.first, last: a.last, at: now() });
      break;
    case 'dismiss':
      S.dismissed.push(a.findId);
      S.marks = S.marks.filter((m) => m.id !== a.findId);
      break;
    case 'merge':
      S.splitMerged.push(a.findId);
      break;
  }
};

const record = (text: string, via: Steer['via'], actions: SteerAction[], reply: string, offer?: Steer['offer']) => {
  const live = started() && !finished();
  S.steers.push({ id: `s${S.steers.length + 1}`, at: now(), page: live ? headPage() : null, via, text, actions, reply, offer });
  for (const a of actions) apply(a);
};

/** A person's message in the conversation: interpret it, record it, apply it. */
export const say = (text: string) =>
  commit(() => {
    const r = interpret(text, {
      started: started(),
      finished: finished(),
      paused: paused() || pausing(),
      head: headPage(),
      first: scanFirst(),
      lastRead: lastRead(),
      headings: D.headings ?? {},
    });
    record(text, 'typed', r.actions, r.reply, r.offer);
  });

/** One of Aldo's buttons: a known action, recorded the same way as a typed steer. */
export const act = (label: string, action: SteerAction | SteerAction[], reply: string) =>
  commit(() => record(label, 'button', Array.isArray(action) ? action : [action], reply));

export const steers = () => S.steers;

/** The rules in effect, each with the page it took effect on. */
export const rules = () =>
  S.steers.flatMap((s) => s.actions.filter((a) => a.kind === 'rule').map((a) => ({ text: (a as { text: string }).text, page: s.page, id: s.id })));

export const togglePause = () => (paused() || pausing() ? resume() : pause());
export const cycleSpeed = () =>
  commit(() => reanchor({ speed: SPEEDS[(SPEEDS.indexOf(S.clock?.speed ?? 1) + 1) % SPEEDS.length] }));
export const skipToEnd = () => commit(() => reanchor({ anchorV: endTime() }));

const rereadSig = (t: number) =>
  S.rereads.map((r) => Math.min(r.last - r.first + 1, Math.max(0, Math.floor((t - r.at) / REREAD_SECONDS)))).join(',');

let lastT = -1;
let lastSig = '';
const startTicking = () => {
  const loop = () => {
    if (started()) {
      const t = now();
      if (t !== lastT) {
        lastT = t;
        emit('sw3:tick');
        // A change only when an event crossed: count the events whose time has come.
        const sig = `${D.events.findIndex((e) => e.t > t)}:${S.marks.filter((m) => t >= m.at + MARK_PARSE).length}:${rereadSig(t)}:${paused()}`;
        if (sig !== lastSig) {
          lastSig = sig;
          cache.clear();
          emit();
        }
      }
    }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
};

// ── What the scan has done by now ────────────────────────────────────────────

const cache = new Map<string, unknown>();
const memo = <T>(key: string, fn: () => T): T => {
  if (!cache.has(key)) cache.set(key, fn());
  return cache.get(key) as T;
};

export const inScope = (page: number) => page >= S.scope.first && page <= S.scope.last;

/** Pages the scan has read. Out-of-scope pages are skipped, not read. */
export const scanned = (): Set<number> =>
  memo('scanned', () => {
    const t = now();
    return new Set(D.events.filter((e) => e.type === 'page_scanned' && e.t <= t && inScope(e.page)).map((e) => (e as { page: number }).page));
  });

/** The page the scan is reading now, or null once it is done. */
export const headPage = (): number | null => {
  const s = scanned();
  for (let p = S.scope.first; p <= Math.min(S.scope.last, D.scope.last); p++) if (!s.has(p)) return p;
  return null;
};

const foundTime = (id: string) =>
  (D.events.find((e) => e.type === 'commitment_found' && e.findId === id) as { t: number } | undefined)?.t ?? Infinity;
const parsedTime = (code: string) =>
  (D.events.find((e) => e.type === 'commitment_parsed' && e.code === code) as { t: number } | undefined)?.t ?? Infinity;

export interface LiveFind extends Find {
  parsed: boolean;
  marked: boolean;
}

/** Everything found so far, in page order: the scan's finds and a person's marks. */
export const finds = (): LiveFind[] =>
  memo('finds', () => {
    const t = now();
    const out: LiveFind[] = [];
    for (const f of D.finds) {
      if (foundTime(f.id) > t || S.dismissed.includes(f.id) || !inScope(f.page)) continue;
      if (f.kind === 'false' && crossRefResolved(f, t)) continue;
      if (f.kind === 'split' && S.splitMerged.includes(f.id)) continue;
      let boxes = f.boxes;
      const split = D.finds.find((x) => x.kind === 'split' && x.partOf === f.id);
      if (split && S.splitMerged.includes(split.id)) boxes = [...boxes, ...split.boxes];
      const parsed = f.kind === 'commitment' ? parsedTime(f.code) <= t : f.kind === 'false' ? foundTime(f.id) + 3 <= t : false;
      out.push({ ...f, boxes, parsed, marked: false });
    }
    for (const m of S.marks) {
      if (m.at > t) continue;
      const base = m.code ? D.missed : null;
      out.push({
        ...(base ?? { id: m.id, code: '', title: 'Untitled', page: m.page, boxes: [m.box], kind: 'commitment' as const }),
        id: m.id,
        parsed: !!base && t >= m.at + MARK_PARSE,
        marked: true,
      });
    }
    return out.sort((a, b) => a.page - b.page || (a.boxes[0]?.y ?? 0) - (b.boxes[0]?.y ?? 0));
  });

/** A cross-reference read as a heading goes once the rule covers its page: read after the
 *  rule was given, or re-read (to completion) after it. */
const crossRefResolved = (f: Find, t: number) => {
  const rule = S.steers.find((s) => s.actions.some((a) => a.kind === 'rule' && a.crossRef));
  if (!rule) return false;
  if (foundTime(f.id) >= rule.at) return true;
  return S.rereads.some((r) => r.at >= rule.at && f.page >= r.first && f.page <= r.last && t >= rereadPageDone(r, f.page));
};

/** Re-reads: when each page of one is done. */
const rereadPageDone = (r: Reread, page: number) => r.at + (page - r.first + 1) * REREAD_SECONDS;
export const rereadEnd = (r: Reread) => r.at + (r.last - r.first + 1) * REREAD_SECONDS;

/** Pages being re-read right now. */
export const rereading = (): Set<number> =>
  memo('rereading', () => {
    const t = now();
    const out = new Set<number>();
    for (const r of S.rereads) for (let p = r.first; p <= r.last; p++) if (t >= r.at && t < rereadPageDone(r, p)) out.add(p);
    return out;
  });

export const rereads = () => S.rereads;

/** Scanned pages in scope with no find on them: where a missed commitment hides. */
export const gaps = (): Set<number> =>
  memo('gaps', () => {
    const covered = new Set(finds().flatMap((f) => f.boxes.map((b) => b.page)));
    return new Set([...scanned()].filter((p) => !covered.has(p)));
  });

/** Mark a region the scan missed. If it lands on the missed commitment, Beacon parses it. */
export const markRegion = (page: number, box: Box) =>
  commit(() => {
    const hit = D.missed.boxes.some(
      (b) => b.page === page && box.y < b.y + b.h && box.y + box.h > b.y,
    );
    const already = S.marks.some((m) => m.code === D.missed.code);
    // The clock idles past the run's end; restart it from here so the parse is watched.
    if (S.clock) reanchor({});
    S.marks.push({
      id: hit && !already ? D.missed.code : `mark:${page}:${Math.round(box.y * 1000)}`,
      page,
      box,
      at: now(),
      code: hit && !already ? D.missed.code : undefined,
    });
    const known = hit && !already;
    S.steers.push({
      id: `s${S.steers.length + 1}`,
      at: now(),
      page: started() && !finished() ? headPage() : null,
      via: 'button',
      text: `Marked a missed commitment on p. ${page}`,
      actions: [],
      reply: known ? `Reading it: ${D.missed.code} ${D.missed.title}.` : 'Reading it.',
    });
  });

export const dismissFind = (id: string) =>
  commit(() => {
    S.dismissed.push(id);
    S.marks = S.marks.filter((m) => m.id !== id);
  });

export const mergeSplit = (id: string) =>
  commit(() => {
    S.splitMerged.push(id);
  });

/** The commitment codes found and parsed by now, in document order. */
export const parsedCodes = (): string[] =>
  memo('parsedCodes', () => finds().filter((f) => f.parsed && f.code && commitmentByCode.has(f.code)).map((f) => f.code));

export const foundCodes = (): string[] =>
  memo('foundCodes', () => finds().filter((f) => f.code && commitmentByCode.has(f.code)).map((f) => f.code));

// ── Entities ──────────────────────────────────────────────────────────────────

/** Where an entity points once accepted merges are applied. */
export const resolveEntity = (id: string): string => {
  for (const m of D.merges) if (S.merges[m.id] === 'accepted' && m.fromIds.includes(id)) return m.intoId;
  return id;
};

export const mergeState = (id: string) => S.merges[id];

export const acceptMerge = (id: string) =>
  commit(() => {
    S.merges[id] = 'accepted';
  });
export const dismissMerge = (id: string) =>
  commit(() => {
    S.merges[id] = 'dismissed';
  });

/** Has the merge been proposed by now (its last phrasing parsed)? */
export const mergeProposed = (id: string) =>
  D.events.some((e) => e.type === 'merge_proposed' && e.mergeId === id && e.t <= now());

// ── Requirements, as a person has left them ──────────────────────────────────

const reqBase = () => D.requirements as ReviewRequirement[];

export const requirementsOf = (code: string): ReviewRequirement[] =>
  memo(`reqs:${code}`, () => {
    const c = commitmentByCode.get(code);
    if (!c) return [];
    const base = reqBase().filter((r) => r.code === code && !S.removed.includes(r.id));
    const all = [...base, ...S.created.filter((r) => r.code === code && !S.removed.includes(r.id))];
    const confirmedAll = S.commitmentsConfirmed.includes(code);
    return all
      .map((r) => {
        const e = S.edits[r.id] ?? {};
        const merged: ReviewRequirement = { ...r, ...e, timing: { ...r.timing, ...(e.timing ?? {}) } };
        merged.timing.milestoneId = merged.timing.milestoneId && resolveEntity(merged.timing.milestoneId);
        merged.seasonIds = [...new Set(merged.seasonIds.map(resolveEntity))];
        merged.speciesIds = [...new Set(merged.speciesIds.map(resolveEntity))];
        merged.activityIds = [...new Set(merged.activityIds.map(resolveEntity))];
        merged.filing = confirmedAll || S.confirmed.includes(r.id) || r.id in S.edits ? 'confirmed' : r.filing;
        if (merged.anchor) {
          merged.anchor = { ...merged.anchor, boxes: boxesFor(c.lines, merged.anchor.charStart, merged.anchor.charEnd) };
        }
        return merged;
      })
      .sort((a, b) => (a.anchor?.charStart ?? 1e9) - (b.anchor?.charStart ?? 1e9));
  });

export const requirementOf = (id: string): ReviewRequirement | undefined => {
  const r = [...reqBase(), ...S.created].find((x) => x.id === id);
  return r ? requirementsOf(r.code).find((x) => x.id === id) : undefined;
};

/** Any edit confirms the requirement. */
export const editRequirement = (id: string, patch: Partial<ReviewRequirement>) =>
  commit(() => {
    const prev = S.edits[id] ?? {};
    S.edits[id] = { ...prev, ...patch, timing: { ...(prev.timing ?? {}), ...(patch.timing ?? {}) } as ReviewRequirement['timing'] };
  });

export const removeRequirement = (id: string) =>
  commit(() => {
    S.removed.push(id);
  });

export const keepRequirement = (id: string) =>
  commit(() => {
    S.kept.push(id);
    S.confirmed.push(id);
  });

export const createRequirement = (code: string, range: Range): string => {
  const c = commitmentByCode.get(code)!;
  const id = `req_new_${code.replace(/\W+/g, '')}_${range.start}`;
  const text = c.text ?? '';
  commit(() => {
    S.created.push({
      id,
      code,
      name: 'New requirement',
      type: 'AvoidanceAndBMPs',
      typeConfidence: 1,
      phases: [],
      timing: { frequency: 'Ongoing' },
      speciesIds: [],
      activityIds: [],
      seasonIds: [],
      responsibleParty: /Permittee/.test(text.slice(range.start, range.end)) ? 'Permittee' : '',
      deliverable: '',
      quote: '',
      anchor: { page: 0, charStart: range.start, charEnd: range.end, boxes: [] },
      values: [],
      filing: 'confirmed',
    });
    S.confirmed.push(id);
  });
  return id;
};

export const markNotBinding = (code: string, start: number) =>
  commit(() => {
    S.notBinding.push(`${code}@${start}`);
  });

// ── Flags: what needs a person ───────────────────────────────────────────────

export interface Flag {
  kind: ReviewFlag | 'merge' | 'empty';
  reqId?: string;
  otherId?: string;
  range?: Range;
  mergeId?: string;
}

export const LOW_CONFIDENCE = 0.6;

/** Everything about a commitment that needs a person, checked as code. */
export const flagsOf = (code: string): Flag[] =>
  memo(`flags:${code}`, () => {
    const c = commitmentByCode.get(code);
    if (!c?.text) return [];
    const reqs = requirementsOf(code);
    const flags: Flag[] = [];
    for (const r of reqs) {
      if (!r.anchor && !S.kept.includes(r.id)) flags.push({ kind: 'unanchored', reqId: r.id });
    }
    const anchored = reqs.filter((r) => r.anchor);
    for (let i = 0; i < anchored.length; i++)
      for (let j = i + 1; j < anchored.length; j++) {
        const a = anchored[i];
        const b = anchored[j];
        if (S.kept.includes(b.id) || S.kept.includes(a.id)) continue;
        if (sameWords({ start: a.anchor!.charStart, end: a.anchor!.charEnd }, { start: b.anchor!.charStart, end: b.anchor!.charEnd }))
          flags.push({ kind: 'duplicate', reqId: b.id, otherId: a.id });
      }
    const spans = anchored.map((r) => ({ start: r.anchor!.charStart, end: r.anchor!.charEnd }));
    for (const u of uncoveredRanges(c.text, spans)) {
      if (!S.notBinding.includes(`${code}@${u.start}`)) flags.push({ kind: 'uncovered', range: u });
    }
    for (const r of reqs) {
      if (r.typeConfidence < LOW_CONFIDENCE && r.filing === 'suggested') flags.push({ kind: 'type', reqId: r.id });
    }
    for (const m of D.merges) {
      if (S.merges[m.id] || !mergeProposed(m.id)) continue;
      const uses = reqs.some((r) => [r.timing.milestoneId, ...r.seasonIds].some((e) => e && m.fromIds.includes(e)));
      if (uses) flags.push({ kind: 'merge', mergeId: m.id });
    }
    const split = D.finds.find((f) => f.kind === 'split' && f.partOf === code);
    if (split && foundTime(split.id) <= now() && !S.splitMerged.includes(split.id) && !S.dismissed.includes(split.id))
      flags.push({ kind: 'split' });
    if (S.marks.some((m) => m.code === code) && !S.commitmentsConfirmed.includes(code)) flags.push({ kind: 'missed' });
    return flags;
  });

/** Flags that must be resolved before the commitment can be confirmed. */
export const blocking = (code: string) => flagsOf(code).filter((f) => !['type', 'missed'].includes(f.kind));

export const isConfirmed = (code: string) => S.commitmentsConfirmed.includes(code);

export const confirmCommitment = (code: string) =>
  commit(() => {
    if (!S.commitmentsConfirmed.includes(code)) S.commitmentsConfirmed.push(code);
  });

export const reopenCommitment = (code: string) =>
  commit(() => {
    S.commitmentsConfirmed = S.commitmentsConfirmed.filter((c) => c !== code);
  });

/** Parsed commitments nothing is flagged on and no one has confirmed yet. */
export const cleanUnconfirmed = () => parsedCodes().filter((c) => !isConfirmed(c) && flagsOf(c).length === 0);

/** Confirm every clean commitment at once. One step of undo. */
export const confirmAllClean = (): number => {
  const codes = cleanUnconfirmed();
  if (!codes.length) return 0;
  undoSnapshot = JSON.stringify(S.commitmentsConfirmed);
  commit(() => {
    S.commitmentsConfirmed = [...S.commitmentsConfirmed, ...codes];
  });
  return codes.length;
};

export const undoConfirmAll = () => {
  if (undoSnapshot === null) return;
  const prev = JSON.parse(undoSnapshot) as string[];
  undoSnapshot = null;
  commit(() => {
    S.commitmentsConfirmed = prev;
  });
};

/** Commitments whose requirements use any of these entities. */
export const commitmentsUsing = (ids: string[]): string[] =>
  parsedCodes().filter((code) =>
    (D.requirements as ReviewRequirement[])
      .filter((r) => r.code === code && !S.removed.includes(r.id))
      .some((r) => [r.timing?.milestoneId, ...(r.seasonIds ?? []), ...(r.speciesIds ?? []), ...(r.activityIds ?? [])].some((e) => e && ids.includes(e))),
  );
