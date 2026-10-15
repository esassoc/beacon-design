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
import type { ContextRef } from '../../data/aldo';
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
  /** Which document (the scan page carries several; the review page one). */
  id?: string;
  short?: string;
  name?: string;
  pdf?: string;
  /** Pages in the document. */
  total?: number;
  /** A scanned file: seconds per page to read its page images (OCR) before anything else. */
  prepare?: number;
  sections?: { match: string; label: string; first: number; last: number }[];
  /** Requirement candidates as boxes on the page (the scan page). */
  spans?: { id: string; code: string; name: string; boxes: Box[] }[];
  /** The first commitments, checked with a person before the run goes on. */
  calibrate?: string[];
  finds: Find[];
  missed: Find | null;
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
  proposal?: { text: string; go: { label: string; first: number; last: number; scope: string } | null; suggest: string[] };
  entities?: Entity[];
  labels?: { types: Record<string, string>; phases: string[]; frequency: Record<string, string> };
}

// One slot per document: its payload, its run, and what is derived from them. The
// functions below all read the ACTIVE slot (D, S); use() re-points them, and peek() reads
// another document without moving the person's view.
interface Slot {
  D: Sw3Payload;
  S: Sw3State;
  cache: Map<string, unknown>;
  commitmentByCode: Map<string, ScanCommitment>;
  findById: Map<string, Find>;
  lastSig: string;
}
const slots = new Map<string, Slot>();
let current = '';
let D: Sw3Payload;
let commitmentByCode = new Map<string, ScanCommitment>();
let findById = new Map<string, Find>();

const use = (id: string) => {
  const sl = slots.get(id)!;
  current = id;
  D = sl.D;
  S = sl.S;
  cache = sl.cache;
  commitmentByCode = sl.commitmentByCode;
  findById = sl.findById;
};

/** Read the page's payload (a JSON script) once: { docs: [...] } on the scan page, one document on the review. */
export const initSw3 = (): Sw3Payload => {
  if (D) return D;
  const el = document.querySelector<HTMLScriptElement>('script[data-sw3-payload]');
  const raw = JSON.parse(el?.textContent ?? '{}') as Sw3Payload | { docs: Sw3Payload[] };
  const docs = 'docs' in raw ? raw.docs : [{ ...raw, id: raw.id ?? 'itp' }];
  for (const d of docs) {
    const id = d.id ?? 'itp';
    const sl: Slot = {
      D: d,
      S: fresh(d),
      cache: new Map(),
      commitmentByCode: new Map(d.commitments.map((c) => [c.code, c])),
      findById: new Map([...d.finds, ...(d.missed ? [d.missed] : [])].map((f) => [f.id, f])),
      lastSig: '',
    };
    slots.set(id, sl);
    use(id);
    load();
    sl.S = S;
  }
  let want = docs[0].id ?? 'itp';
  try {
    const saved = localStorage.getItem(`${KEY}:active`);
    if (saved && slots.has(saved)) want = saved;
  } catch {
    /* no storage */
  }
  use(want);
  beginPrepare();
  startTicking();
  return D;
};

/** Add a document at runtime (a person's upload). It gets its own run, conversation and record. */
export const addDoc = (d: Sw3Payload) => {
  const id = d.id!;
  if (slots.has(id)) return;
  const prev = current;
  const sl: Slot = { D: d, S: fresh(d), cache: new Map(), commitmentByCode: new Map(), findById: new Map(), lastSig: '' };
  slots.set(id, sl);
  use(id);
  load();
  sl.S = S;
  if (prev) use(prev);
  emit();
};

/** Remove a document and its record. */
export const removeDoc = (id: string) => {
  if (!slots.has(id)) return;
  slots.delete(id);
  try {
    localStorage.removeItem(`${KEY}:${id}`);
  } catch {
    /* no storage */
  }
  if (current === id) {
    const next = slots.keys().next().value;
    if (next) use(next);
  }
  emit();
};

export const docIds = () => [...slots.keys()];
export const activeDoc = () => current;
/** Bring a document into view: the workspace, the scrubber and Aldo all follow it. */
export const setActiveDoc = (id: string) => {
  if (!slots.has(id) || id === current) return;
  use(id);
  beginPrepare();
  try {
    localStorage.setItem(`${KEY}:active`, id);
  } catch {
    /* no storage */
  }
  emit();
};
/** Read another document's state without moving the person's view. */
export const peek = <T>(id: string, fn: () => T): T => {
  const prev = current;
  use(id);
  try {
    return fn();
  } finally {
    use(prev);
  }
};

// ── A scanned file: its page images are read first ─────────────────────────────
// In prod a file with no text layer goes through OCR at upload, which takes minutes for a
// long permit; nothing else (the scope pass, the run) can start until it is done. Here it
// starts the first time the file is opened.
const beginPrepare = () => {
  if (!D?.prepare || S.prepStart) return;
  S.prepStart = Date.now();
  save();
};
/** Reading a scanned file's page images: the page it is on, or null when done (or none). */
export const preparing = (): { page: number; total: number } | null => {
  if (!D?.prepare || !S.prepStart) return null;
  const total = D.total ?? 1;
  const page = Math.floor((Date.now() - S.prepStart) / 1000 / D.prepare) + 1;
  return page > total ? null : { page, total };
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
  /** Where the run holds next: a pause a person asked for (the page being read finishes
   *  first), or a scheduled hold (the check, or the next commitment at One at a time). */
  pauseAt?: number | null;
  /** The hold at pauseAt is a person's pause, not a scheduled one. */
  asked?: boolean;
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
  /** When it was said, on the wall clock (ms). Older steers have none. */
  wall?: number;
  /** What rode along with it: the page in view, a commitment, a file. */
  context?: ContextRef[];
  /** Deprecated: steers recorded before `unclear` was an action kind carry their readings
   *  here. New ones carry them on the action. */
  choices?: { label: string; text: string }[];
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
  /** The ID and name a person gave it. */
  name?: { code?: string; title?: string };
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
  /** How fast the run goes: one commitment at a time, watched, or full speed. */
  pace: Pace;
  /** The first commitments have been checked with a person, and the run let go. */
  calibrated: boolean;
  /** Calibration commitments a person said were read right. */
  checked: string[];
  /** A person agreed there is nothing to scan (the NOD). */
  skipped: boolean;
  /** A person stopped the run: it ends at the last page read, keeping what it found. */
  stopped?: boolean;
  /** A person's redraw of a find's boxes, replacing Aldo's. */
  boxEdits: Record<string, Box[]>;
  /** A person's correction of how a commitment was identified, at the check. */
  fixes: Record<string, { code?: string; title?: string; text?: string }>;
  /** Finds a person kept against Aldo's flag (a reference, a headless passage). */
  keptFinds?: string[];
  /** Pages with nothing found that a person said hold nothing: `${first}-${last}`. */
  clear?: string[];
  /** The person chose to mark the commitments themselves (no scan run). */
  manual?: boolean;
  /** A scanned file: when reading its page images began (epoch ms). */
  prepStart?: number;
}

export type Pace = 'step' | 'watch' | 'run';
/** Run-clock speed per pace: watch is slow enough to follow the narration. */
const PACE_SPEED: Record<Pace, number> = { step: 0.6, watch: 0.6, run: 8 };

const KEY = 'sw3:v3';
/** Seconds a re-read takes per page: no extraction to wait on for what did not change. */
export const REREAD_SECONDS = 0.5;
const MARK_PARSE = 2.4;

const fresh = (d?: Sw3Payload): Sw3State => ({
  clock: null,
  scope: { first: (d ?? D)?.scope.first ?? 1, last: (d ?? D)?.scope.last ?? 1, instruction: '' },
  pace: 'watch',
  calibrated: false,
  checked: [],
  skipped: false,
  boxEdits: {},
  fixes: {},
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
    const raw = localStorage.getItem(`${KEY}:${current}`);
    S = raw ? { ...fresh(), ...(JSON.parse(raw) as Partial<Sw3State>) } : fresh();
  } catch {
    S = fresh();
  }
};

const save = () => {
  try {
    localStorage.setItem(`${KEY}:${current}`, JSON.stringify(S));
  } catch {
    /* private window: state lives for this page only */
  }
};

const emit = (name = 'sw3:change') => document.dispatchEvent(new CustomEvent(name, { detail: { doc: current } }));

const commit = (fn: () => void) => {
  fn();
  save();
  cache.clear();
  slots.get(current)!.S = S;
  emit();
};

export const state = () => S;

/** Start over: a fresh run and no calls made. */
export const resetAll = () => {
  undoSnapshot = null;
  history.delete(current);
  commit(() => {
    S = fresh();
  });
};

/** Start every document over (the prototype's Restart). */
export const resetEverything = () => {
  const prev = current;
  for (const id of slots.keys()) {
    use(id);
    S = fresh();
    slots.get(id)!.S = S;
    cache.clear();
    save();
  }
  use(prev);
  undoSnapshot = null;
  history.clear();
  emit();
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
    if (!S.clock || S.clock.paused || (S.clock.pauseAt != null && S.clock.asked)) return;
    S.clock.pauseAt = Math.min(S.clock.pauseAt ?? Infinity, pageDoneAfter(now()));
    S.clock.asked = true;
  });
export const resume = () =>
  commit(() => {
    if (!S.clock) return;
    reanchor({ paused: false, pauseAt: null, asked: false });
    S.clock.pauseAt = holdAt();
  });

// ── Calibration and pace ─────────────────────────────────────────────────────

const parseT = (code: string) =>
  (D.events.find((e) => e.type === 'commitment_parsed' && e.code === code) as { t: number } | undefined)?.t ?? null;

/** When the calibration commitments have all parsed: where the run first stops. */
export const calibrationPoint = (): number | null => {
  const ts = (D.calibrate ?? []).map(parseT).filter((t): t is number => t !== null);
  return ts.length ? Math.max(...ts) : null;
};

/** Waiting on a person to check the first commitments. */
export const checking = () => {
  const cp = calibrationPoint();
  return started() && !S.calibrated && cp !== null && now() >= cp;
};
export const calibrated = () => S.calibrated || calibrationPoint() === null;
export const checked = () => S.checked;
export const pace = () => S.pace;
export const skipped = () => S.skipped;
export const stopped = () => !!S.stopped;

/** Where the run should hold next from here: the calibration stop, or (one at a time) the next parse. */
const holdAt = (): number | null => {
  const t = now();
  const cp = calibrationPoint();
  if (!S.calibrated && cp !== null && t < cp) return cp;
  if (S.pace === 'step') {
    const next = D.events.find((e) => e.type === 'commitment_parsed' && e.t > t + 0.01);
    return next ? next.t : null;
  }
  return null;
};

/** What the run is doing now, in a line: the last thing it did. */
export const narration = (): string =>
  memo('narration', () => {
    const t = now();
    let last: ScanEvent | undefined;
    for (const e of D.events) {
      if (e.t > t) break;
      if (e.type === 'page_scanned' || e.type === 'commitment_found' || e.type === 'commitment_parsed') {
        if (e.type === 'page_scanned' && !inScope(e.page)) continue;
        last = e;
      }
    }
    if (!last) return '';
    if (last.type === 'page_scanned') return `Read p. ${last.page}.`;
    if (last.type === 'commitment_found') {
      const f = findById.get(last.findId);
      if (!f || S.dismissed.includes(f.id)) return '';
      return f.code ? `Found ${f.code}, ${f.title}, on p. ${f.page}.` : `Found a passage with no heading on p. ${f.page}.`;
    }
    const cols = (commitmentByCode.get(last.code) as { columns?: Record<string, string> } | undefined)?.columns;
    const fromCols = cols ? ` Timing and party from the table's columns.` : '';
    return `Parsed ${last.code}: ${last.requirements} requirement${last.requirements === 1 ? '' : 's'}.${fromCols}`;
  });
/** A pause a person asked for, not yet reached (the page in flight is finishing). */
export const pausing = () => !!S.clock && !!S.clock.asked && S.clock.pauseAt != null && now() < S.clock.pauseAt;
/** Held at a commitment because the pace is One at a time (not a person's pause). */
export const heldForStep = () => !!S.clock && !S.clock.paused && !S.clock.asked && S.clock.pauseAt != null && now() >= S.clock.pauseAt && !checking();
/** The run is reading toward the check after the first commitments. */
export const headedForCheck = () => {
  const cp = calibrationPoint();
  return started() && !S.calibrated && cp !== null && now() < cp;
};
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
    case 'start': {
      S.clock = { anchorReal: Date.now(), anchorV: 0, speed: PACE_SPEED[S.pace], paused: false };
      // The run stops after the first commitments parse, for a person to check them.
      const cp = calibrationPoint();
      if (!S.calibrated && cp !== null) S.clock.pauseAt = cp;
      break;
    }
    case 'pace':
      S.pace = a.pace;
      if (S.clock && !S.clock.asked) reanchor({ speed: PACE_SPEED[a.pace], pauseAt: holdAt() });
      else if (S.clock) reanchor({ speed: PACE_SPEED[a.pace] });
      break;
    case 'check':
      if (!S.checked.includes(a.code)) S.checked.push(a.code);
      break;
    case 'go':
      S.calibrated = true;
      S.pace = a.pace;
      if (S.clock) {
        reanchor({ speed: PACE_SPEED[a.pace], paused: false, pauseAt: null, asked: false });
        S.clock.pauseAt = holdAt();
      }
      break;
    case 'skip':
      S.skipped = true;
      break;
    case 'stop': {
      // The run ends where it is: the clock stops, and the scope closes at the last page read.
      if (!S.clock) break;
      const last = lastRead();
      reanchor({ paused: true, pauseAt: null });
      S.calibrated = true;
      S.stopped = true;
      S.scope = { ...S.scope, last: Math.max(S.scope.first, last ?? S.scope.first) };
      break;
    }
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
      if (S.clock && !S.clock.paused && !(S.clock.pauseAt != null && S.clock.asked)) {
        S.clock.pauseAt = Math.min(S.clock.pauseAt ?? Infinity, pageDoneAfter(now()));
        S.clock.asked = true;
      }
      break;
    case 'resume':
      if (S.clock) {
        // Resuming at the calibration stop is letting it go on as it is.
        if (checking()) S.calibrated = true;
        reanchor({ paused: false, pauseAt: null, asked: false });
        S.clock.pauseAt = holdAt();
      }
      break;
    case 'keep':
      S.keptFinds = [...(S.keptFinds ?? []), a.findId];
      break;
    case 'clear':
      S.clear = [...(S.clear ?? []), `${a.first}-${a.last}`];
      break;
    case 'manual':
      S.manual = true;
      break;
    case 'answer':
    case 'unclear':
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

const record = (text: string, via: Steer['via'], actions: SteerAction[], reply: string, offer?: Steer['offer'], context?: ContextRef[]) => {
  const live = started() && !finished();
  S.steers.push({ id: `s${S.steers.length + 1}`, at: now(), page: live ? headPage() : null, via, text, actions, reply, offer, wall: Date.now(), ...(context?.length ? { context } : {}) });
  for (const a of actions) apply(a);
};

/** How Aldo read a commitment, in a line, for a question about it. Null if not found yet. */
const describe = (code: string): string | null => {
  const want = code.replace(/^COA\s+/i, '');
  const live = finds().find((f) => f.shown.replace(/^COA\s+/i, '') === want || f.code.replace(/^COA\s+/i, '') === want);
  const f = live ?? D.finds.find((x) => x.code.replace(/^COA\s+/i, '') === want && S.dismissed.includes(x.id));
  if (!f) return null;
  const name = f.shown || f.code;
  if (S.dismissed.includes(f.id)) return `You removed ${name}. It is not in the record.`;
  if (f.kind === 'false')
    return keptFinds().includes(f.id)
      ? `${name} on p. ${f.page} reads like a reference to another condition. You kept it as a commitment.`
      : `${name} on p. ${f.page} has no requirements of its own: it reads like a reference to another condition. I flagged it for you to dismiss or keep.`;
  if (f.kind === 'split') return `The passage on p. ${f.page} has no heading of its own, so I read it as the rest of the commitment before it.`;
  const pages = [...new Set(f.boxes.map((b) => b.page))];
  const span = pages.length > 1 ? `, running onto p. ${pages.at(-1)}` : '';
  return `I read ${name}, ${f.title}, from its heading on p. ${f.page}${span}.${'marked' in f && f.marked ? ' You marked it.' : ''}`;
};

/** The state before the last typed message, so it can be taken back (Edit, Retry). */
let lastSay: { doc: string; id: string; snap: string } | null = null;

/** A person's message in the conversation: interpret it, record it, apply it. `hint` is read
 *  with the text but not shown (what the attached context names); `note` follows the reply
 *  (what Aldo does with an attached file). */
export const say = (text: string, opts: { context?: ContextRef[]; hint?: string; note?: string } = {}) =>
  commit(() => {
    const snap = JSON.stringify(S);
    const r = interpret(opts.hint ? `${text} ${opts.hint}` : text, {
      started: started(),
      finished: finished(),
      paused: paused() || pausing(),
      head: headPage(),
      first: scanFirst(),
      lastRead: lastRead(),
      headings: D.headings ?? {},
      sections: D.sections ?? [],
      checking: checking(),
      calibrate: D.calibrate ?? [],
      hasCommitments: D.finds.length > 0,
      describe,
    });
    record(text, 'typed', r.actions, opts.note ? `${r.reply} ${opts.note}` : r.reply, r.offer, opts.context);
    lastSay = { doc: current, id: S.steers.at(-1)!.id, snap };
  });

/** Take back the last typed message, and what it did, if it is still the last thing said.
 *  Returns what was said, for Edit to put back in the field. */
export const canTakeBack = (id: string) => !!lastSay && lastSay.doc === current && lastSay.id === id && S.steers.at(-1)?.id === id;
export const takeBack = (id: string): Steer | null => {
  if (!canTakeBack(id)) return null;
  const said = S.steers.at(-1)!;
  commit(() => {
    S = { ...fresh(), ...(JSON.parse(lastSay!.snap) as Partial<Sw3State>) };
    lastSay = null;
  });
  return said;
};

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
export const skipToEnd = () =>
  commit(() => {
    S.calibrated = true;
    reanchor({ anchorV: endTime(), pauseAt: null });
  });

const rereadSig = (t: number) =>
  S.rereads.map((r) => Math.min(r.last - r.first + 1, Math.max(0, Math.floor((t - r.at) / REREAD_SECONDS)))).join(',');

const startTicking = () => {
  const loop = () => {
    // Every document's run keeps going, in view or not.
    const prev = current;
    let changed = false;
    for (const [id, sl] of slots) {
      use(id);
      const prep = preparing();
      if (prep || (D.prepare && sl.lastSig.startsWith('prep:'))) {
        const sig = prep ? `prep:${prep.page}` : 'prepared';
        if (sig !== sl.lastSig) (sl.lastSig = sig), cache.clear(), (changed = true);
        continue;
      }
      if (!started()) continue;
      const t = now();
      // A change only when an event crossed: count the events whose time has come.
      const sig = `${D.events.findIndex((e) => e.t > t)}:${S.marks.filter((m) => t >= m.at + MARK_PARSE).length}:${rereadSig(t)}:${paused()}`;
      if (sig !== sl.lastSig) {
        sl.lastSig = sig;
        cache.clear();
        changed = true;
      }
    }
    use(prev);
    emit('sw3:tick');
    if (changed) emit();
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
};

// ── What the scan has done by now ────────────────────────────────────────────

let cache = new Map<string, unknown>();
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
  /** The ID as shown: a person's fix over the one read. */
  shown: string;
  parsed: boolean;
  marked: boolean;
  /** A person moved, resized or redrew its box: solid, theirs. */
  edited: boolean;
}

/** Everything found so far, in page order: the scan's finds and a person's marks. */
export const finds = (): LiveFind[] =>
  memo('finds', () => {
    const t = now();
    const out: LiveFind[] = [];
    const markedCodes = new Set(S.marks.map((m) => m.code).filter(Boolean));
    for (const f of D.finds) {
      if (foundTime(f.id) > t || S.dismissed.includes(f.id) || !inScope(f.page)) continue;
      // A person marked it first: their mark is the find.
      if (f.code && markedCodes.has(f.code)) continue;
      if (f.kind === 'false' && crossRefResolved(f, t)) continue;
      if (f.kind === 'split' && S.splitMerged.includes(f.id)) continue;
      let boxes = f.boxes;
      const split = D.finds.find((x) => x.kind === 'split' && x.partOf === f.id);
      if (split && S.splitMerged.includes(split.id)) boxes = [...boxes, ...split.boxes];
      const parsed = f.kind === 'commitment' ? parsedTime(f.code) <= t : f.kind === 'false' ? foundTime(f.id) + 3 <= t : false;
      const mine = S.boxEdits[f.id];
      const fix = S.fixes[f.code];
      out.push({ ...f, shown: fix?.code ?? f.code, title: fix?.title ?? f.title, boxes: mine ?? boxes, parsed, marked: false, edited: !!mine });
    }
    for (const m of S.marks) {
      if (m.at > t) continue;
      const base = m.code ? (D.missed?.code === m.code ? D.missed : (D.finds.find((x) => x.code === m.code && x.kind === 'commitment') ?? null)) : null;
      out.push({
        ...(base ?? { id: m.id, code: '', title: 'Untitled', page: m.page, boxes: [m.box], kind: 'commitment' as const }),
        id: m.id,
        shown: m.name?.code ?? base?.code ?? '',
        ...(m.name?.title ? { title: m.name.title } : {}),
        // With no run (marking by hand) there is no clock to wait on: it reads at once.
        parsed: !!base && (!S.clock || t >= m.at + MARK_PARSE),
        marked: true,
        edited: false,
      });
      const last = out.at(-1)!;
      if (S.boxEdits[m.id]) (last.boxes = S.boxEdits[m.id]), (last.edited = true);
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
  undoable(() => {
    // What the box covers: the commitment the scan missed, or (before the scan has found
    // it) any commitment whose words sit mostly inside the box. Prod reads the text layer
    // inside the box; the anchored boxes stand in for that here.
    const overlap = (b: Box) => (b.page === page ? Math.max(0, Math.min(box.y + box.h, b.y + b.h) - Math.max(box.y, b.y)) / Math.max(1e-6, Math.min(box.h, b.h)) : 0);
    const live = new Set(finds().map((f) => f.code).filter(Boolean));
    const covered =
      (D.missed && D.missed.boxes.some((b) => overlap(b) > 0.1) ? D.missed : null) ??
      D.finds.find((f) => f.kind === 'commitment' && !live.has(f.code) && !S.marks.some((m) => m.code === f.code) && f.boxes.some((b) => overlap(b) > 0.5)) ??
      null;
    const hit = !!covered;
    const already = !!covered && S.marks.some((m) => m.code === covered.code);
    // The clock idles past the run's end; restart it from here so the parse is watched.
    if (S.clock) reanchor({});
    S.marks.push({
      id: hit && !already ? (covered === D.missed ? covered.code : `mark:${covered!.code}`) : markId(page, box),
      page,
      box,
      at: now(),
      code: hit && !already ? covered!.code : undefined,
    });
    const known = hit && !already;
    S.steers.push({
      id: `s${S.steers.length + 1}`,
      at: now(),
      page: started() && !finished() ? headPage() : null,
      via: 'button',
      text: S.manual && !S.clock ? `Marked a commitment on p. ${page}` : `Marked a missed commitment on p. ${page}`,
      actions: [],
      reply: known ? `Reading it: ${covered!.code} ${covered!.title}.` : 'I found no heading inside it. Give it an ID and a name.',
    });
  });

/** A person's box for a find on one page: moved, resized or redrawn. Recorded as a steer. */
export const setFindBox = (id: string, page: number, box: Box, label: string) =>
  undoable(() => {
    const f = finds().find((x) => x.id === id);
    if (!f) return;
    const others = f.boxes.filter((b) => b.page !== page);
    S.boxEdits[id] = [...others, { ...box, page }].sort((a, b) => a.page - b.page);
    S.steers.push({
      id: `s${S.steers.length + 1}`,
      at: now(),
      page: started() && !finished() ? headPage() : null,
      via: 'button',
      text: label === 'Continued' ? `Continued ${f.shown || 'the marked passage'} onto p. ${page}` : `${label} ${f.shown || 'the marked passage'} on p. ${page}`,
      actions: [],
      reply:
        label === 'Continued'
          ? `${f.shown || 'It'} now runs onto p. ${page}. I re-read its text across both pages.`
          : `Noted. ${f.shown || 'It'} now reads from the box you ${label === 'Redrew' ? 'drew' : 'adjusted'}, and its text is re-read from there.`,
    });
  });

/** How a commitment was identified, with a person's fix over it. */
export const identified = (code: string) => {
  const c = commitmentByCode.get(code) as (ScanCommitment & { text?: string }) | undefined;
  const fix = S.fixes[code] ?? {};
  const columns = (c as { columns?: Record<string, string> } | undefined)?.columns;
  return { code: fix.code ?? code, title: fix.title ?? c?.title ?? code, text: fix.text ?? c?.text ?? '', page: c?.page ?? 0, fixed: !!S.fixes[code], columns };
};

/** A person's fix at the check: the ID, name or text as it should have read. Checks it, and
 *  becomes an instruction for the rest of the file (prod sends it with later calls). */
export const fixCommitment = (code: string, patch: { code?: string; title?: string; text?: string }) =>
  commit(() => {
    const was = identified(code);
    const changed: string[] = [];
    if (patch.code !== undefined && patch.code !== was.code) changed.push(`ID to ${patch.code}`);
    if (patch.title !== undefined && patch.title !== was.title) changed.push(`name to "${patch.title}"`);
    if (patch.text !== undefined && patch.text !== was.text) changed.push('its text');
    S.fixes[code] = { ...S.fixes[code], ...patch };
    if (!S.checked.includes(code)) S.checked.push(code);
    S.steers.push({
      id: `s${S.steers.length + 1}`,
      at: now(),
      page: started() && !finished() ? headPage() : null,
      via: 'button',
      text: changed.length ? `Fixed ${code}: ${changed.join(', ')}` : `Checked ${code}`,
      actions: [],
      reply: changed.length ? `Thanks. I will read the rest of the file the way you fixed ${code}.` : `Noted: ${code} read right.`,
    });
  });

/** Remove a find's box on one page; with no boxes left the find goes. */
export const removeFindBox = (id: string, page: number) =>
  undoable(() => {
    const f = finds().find((x) => x.id === id);
    if (!f) return;
    const left = f.boxes.filter((b) => b.page !== page);
    const name = f.shown || 'the marked passage';
    if (left.length) S.boxEdits[id] = left;
    else {
      S.dismissed.push(id);
      S.marks = S.marks.filter((m) => m.id !== id);
    }
    S.steers.push({
      id: `s${S.steers.length + 1}`,
      at: now(),
      page: started() && !finished() ? headPage() : null,
      via: 'button',
      text: left.length ? `Removed ${name}'s box on p. ${page}` : `Removed ${name}`,
      actions: [],
      reply: left.length ? `${name} no longer includes p. ${page}.` : `Removed ${name}.`,
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

// ── A person's edits on the page: split, merge, rename, undo ──────────────────
// Undo puts the record of finds back; the conversation stays append-only, so an undo is
// itself a steer ("Undid: ...").
type EditFields = Pick<Sw3State, 'boxEdits' | 'marks' | 'dismissed' | 'splitMerged' | 'fixes'>;
const EDIT_KEYS = ['boxEdits', 'marks', 'dismissed', 'splitMerged', 'fixes'] as const;
const snapEdits = (): string => JSON.stringify(Object.fromEntries(EDIT_KEYS.map((k) => [k, S[k]])));
const putEdits = (snap: string) => Object.assign(S, JSON.parse(snap) as EditFields);
const history = new Map<string, { undo: { snap: string; text: string }[]; redo: { snap: string; text: string }[] }>();
const hist = () => {
  let h = history.get(current);
  if (!h) history.set(current, (h = { undo: [], redo: [] }));
  return h;
};
/** Run an edit so it can be undone: the record before it, and the steer it wrote. */
const undoable = (fn: () => void) =>
  commit(() => {
    const snap = snapEdits();
    const n = S.steers.length;
    fn();
    if (S.steers.length === n) return;
    hist().undo.push({ snap, text: S.steers.at(-1)!.text });
    hist().redo = [];
  });
const note = (text: string, reply: string) =>
  S.steers.push({ id: `s${S.steers.length + 1}`, at: now(), page: started() && !finished() ? headPage() : null, via: 'button', text, actions: [], reply });
export const canUndo = () => hist().undo.length > 0;
export const canRedo = () => hist().redo.length > 0;
export const undo = () =>
  commit(() => {
    const step = hist().undo.pop();
    if (!step) return;
    hist().redo.push({ snap: snapEdits(), text: step.text });
    putEdits(step.snap);
    note(`Undid: ${step.text}`, 'Put back as it was.');
  });
export const redo = () =>
  commit(() => {
    const step = hist().redo.pop();
    if (!step) return;
    hist().undo.push({ snap: snapEdits(), text: step.text });
    putEdits(step.snap);
    note(`Redid: ${step.text}`, 'Done again.');
  });

const markId = (page: number, box: Box) => `mark:${page}:${Math.round(box.y * 1000)}:${S.marks.length}`;

/** Cut a find's box on a page at a height: the top keeps the commitment, the bottom becomes
 *  a passage of its own that Beacon reads. */
export const splitFind = (id: string, page: number, y: number) =>
  undoable(() => {
    const f = finds().find((x) => x.id === id);
    const b = f?.boxes.find((x) => x.page === page);
    if (!f || !b || y <= b.y + 0.005 || y >= b.y + b.h - 0.005) return;
    const top = { ...b, h: y - b.y };
    const bottom = { ...b, y, h: b.y + b.h - y };
    S.boxEdits[id] = [...f.boxes.filter((x) => x !== b), top].sort((p, q) => p.page - q.page || p.y - q.y);
    if (S.clock) reanchor({});
    S.marks.push({ id: markId(page, bottom), page, box: bottom, at: now() });
    const name = f.shown || 'the marked passage';
    note(`Split ${name} on p. ${page}`, `${name} ends where you cut it. The part below is its own passage now; I am reading it.`);
  });

/** Join finds into one commitment: the first in reading order keeps its ID, and takes every box. */
export const mergeFinds = (ids: string[]) =>
  undoable(() => {
    const all = finds().filter((f) => ids.includes(f.id));
    if (all.length < 2) return;
    const [keep, ...rest] = all;
    S.boxEdits[keep.id] = all.flatMap((f) => f.boxes).sort((p, q) => p.page - q.page || p.y - q.y);
    for (const f of rest) {
      if (f.kind === 'split') S.splitMerged.push(f.id);
      else S.dismissed.push(f.id);
      S.marks = S.marks.filter((m) => m.id !== f.id);
    }
    const pages = [...new Set(S.boxEdits[keep.id].map((b) => b.page))];
    const name = keep.shown || 'the marked passage';
    const span = pages.length > 1 ? `pp. ${pages[0]}–${pages.at(-1)}` : `p. ${pages[0]}`;
    note(
      `Merged ${rest.map((f) => f.shown || 'a marked passage').join(', ')} into ${name}`,
      `${name} now runs across ${span}. I re-read its text from all of its boxes.`,
    );
  });

/** A person's ID and name for any find on the page (not only at the check). */
export const editFind = (id: string, patch: { code?: string; title?: string; text?: string }) =>
  undoable(() => {
    const f = finds().find((x) => x.id === id);
    if (!f) return;
    const changed: string[] = [];
    if (patch.code !== undefined && patch.code !== f.shown) changed.push(`ID to ${patch.code}`);
    if (patch.title !== undefined && patch.title !== f.title) changed.push(`name to "${patch.title}"`);
    if (f.code && patch.text !== undefined && patch.text !== identified(f.code).text) changed.push('its text');
    if (!changed.length) return;
    const m = S.marks.find((x) => x.id === id);
    if (m && !m.code) m.name = { ...m.name, code: patch.code, title: patch.title };
    else S.fixes[f.code] = { ...S.fixes[f.code], ...patch };
    note(`Edited ${f.shown || 'the marked passage'}: ${changed.join(', ')}`, `Noted. ${patch.code || f.shown || 'It'} carries into step 2 as you wrote it.`);
  });

// ── What needs a person ──────────────────────────────────────────────────────
/** One thing waiting on the person, as data: Aldo gives it words and buttons, the Library
 *  counts it. */
export type OpenItem =
  | { kind: 'check'; t: number; left: string[]; total: number }
  | { kind: 'go'; t: number; total: number }
  | { kind: 'false'; t: number; findId: string; code: string; page: number }
  | { kind: 'split'; t: number; findId: string; code: string; page: number }
  | { kind: 'gap'; t: number; first: number; last: number }
  | { kind: 'mark'; t: number; findId: string; page: number };
export const openItems = (): OpenItem[] =>
  memo('openItems', () => {
    const t = now();
    const out: OpenItem[] = [];
    if (checking()) {
      const codes = D.calibrate ?? [];
      const left = codes.filter((c) => !S.checked.includes(c));
      const cp = calibrationPoint() ?? 0;
      out.push(left.length ? { kind: 'check', t: cp, left, total: codes.length } : { kind: 'go', t: cp, total: codes.length });
    }
    const live = new Set(finds().map((f) => f.id));
    const kept = keptFinds();
    const ruleAt = S.steers.find((x) => x.actions.some((a) => a.kind === 'rule' && a.crossRef))?.at;
    for (const f of D.finds) {
      if (!inScope(f.page) || !live.has(f.id) || kept.includes(f.id)) continue;
      const at = foundTime(f.id);
      if (f.kind === 'false' && at + 3 <= t && !(ruleAt !== undefined && ruleAt <= at)) out.push({ kind: 'false', t: at + 3, findId: f.id, code: f.code, page: f.page });
      if (f.kind === 'split' && at <= t) out.push({ kind: 'split', t: at, findId: f.id, code: (f.partOf ? findById.get(f.partOf)?.code : undefined) ?? 'the commitment before it', page: f.page });
    }
    for (const g of openGaps()) out.push({ kind: 'gap', t: Infinity, ...g });
    for (const f of finds()) if (f.marked && !f.shown) out.push({ kind: 'mark', t: Infinity, findId: f.id, page: f.boxes[0]?.page ?? f.page });
    return out;
  });
/** What is left to settle, not counting the check (which has its own badge). */
export const toSettle = () => openItems().filter((i) => i.kind !== 'check' && i.kind !== 'go').length;
export const keptFinds = () => S.keptFinds ?? [];
export const manual = () => !!S.manual;
/** Commitments found, counting a flagged reference only once a person kept it. */
export const commitmentCount = () =>
  finds().filter((f) => f.shown && (f.kind !== 'false' || keptFinds().includes(f.id))).length;
/** Runs of read pages with nothing found that a person has not answered. */
export const openGaps = (): { first: number; last: number }[] => {
  // Done reading the scope (the clock may idle on past it).
  if (!started() || (!finished() && headPage() !== null) || !D.finds.length) return [];
  const g = [...gaps()].sort((a, b) => a - b);
  const out: { first: number; last: number }[] = [];
  for (let i = 0; i < g.length; ) {
    let j = i;
    while (j + 1 < g.length && g[j + 1] === g[j] + 1) j++;
    out.push({ first: g[i], last: g[j] });
    i = j + 1;
  }
  return out.filter((r) => !(S.clear ?? []).includes(`${r.first}-${r.last}`));
};

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
