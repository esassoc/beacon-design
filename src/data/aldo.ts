// aldo — the record every Aldo surface renders, typed to the shape prod will serve: one
// SSE stream from AIController, one structured-output call per person turn. A
// conversation is an append-only log of turns; a person's turn carries the result that
// answered it; Aldo's own turns arrive as events. Everything a surface shows derives from
// this record, and nothing is stored twice. Spec: docs/aldo-kit-spec.md, section 2.
//
// The kit (src/components/bcn/aldo/) renders these types; each surface writes one adapter
// that maps its store onto them and extends AldoAction with its own kinds.

// ── Who, where, what ────────────────────────────────────────────────────────

export type Speaker =
  | { kind: 'person'; id: string; name: string }
  | { kind: 'aldo' }
  /** Beacon itself: a job finished, a run paused by the server. */
  | { kind: 'system' };

/** How a turn was given. A button press is a turn like a typed one; an event is Aldo or
 *  Beacon speaking first. */
export type Via = 'typed' | 'button' | 'event';

/** What a conversation, turn or item is about. A surface may add its own kinds. */
export type Anchor =
  | { kind: 'page'; documentId: string; page: number }
  | { kind: 'passage'; documentId: string; page: number; charStart: number; charEnd: number }
  /** entity: 'commitment' | 'response' | 'comment' | 'article' | ... */
  | { kind: 'entity'; entity: string; id: string }
  | { kind: 'route'; path: string }
  | { kind: 'selection'; entity: string; id: string; from: number; to: number };

export interface EntityRef {
  entity: string;
  id: string;
  label: string;
}

// ── The record ──────────────────────────────────────────────────────────────

export type AldoSurface = 'scan' | 'guidance' | 'response' | 'note' | 'actions';

export interface Conversation<A extends AldoAction = AldoAction> {
  id: string;
  surface: AldoSurface;
  /** What the whole conversation is about: a source file, a response, a route. */
  subject: EntityRef;
  createdAt: string;
  createdBy: Speaker;
  /** Append-only. */
  turns: Turn<A>[];
}

export interface Turn<A extends AldoAction = AldoAction> {
  /** Stable: the thread is keyed by it. */
  id: string;
  /** ISO. Turns render in this order; a prototype's run clock maps to it (runAt). */
  at: string;
  by: Speaker;
  via: Via;
  /** What was said, or the label of the button pressed. */
  text: string;
  /** Where the person or the run was when it was said. */
  anchor?: Anchor;
  /** What Beacon did with it. Empty for a question, an unclear message, or Aldo's own turn. */
  actions: A[];
  /** Aldo's account, from the same structured-output call. Absent on Aldo's own turns:
   *  there `text` is what Aldo said. */
  reply?: Reply;
  /** On Aldo's own turn: what it offers with what it said, one click each (the opening's
   *  Scan, the run's Review commitments). A reply carries its own in Reply.offers. */
  offers?: ActionButton<A>[];
  /** Rich content Aldo attached to this turn: the check's cards, a draft. */
  cards?: Card<A>[];
  /** A kind with its own layout. 'check' renders as lead + card, with no who line. */
  kind?: 'message' | 'check' | 'notice' | 'opening';
}

export interface Reply<A extends AldoAction = AldoAction> {
  text: string;
  /** An offer Aldo made with the reply: "Re-read pp. 131 to 149". */
  offers?: ActionButton<A>[];
}

// ── The structured-output contract ──────────────────────────────────────────
// One call per person turn returns { actions, reply }. Every surface supports `answer` (a
// question: nothing changes) and `unclear` (too short to act on: the readings, each a
// message the person can send as is).

export type CoreAction =
  | { kind: 'answer' }
  | { kind: 'unclear'; choices: Choice[] }
  /** An instruction for what follows. */
  | { kind: 'rule'; text: string }
  /** Looks right, Confirm, Keep. */
  | { kind: 'accept'; proposalId: string }
  /** Dismiss, Remove. */
  | { kind: 'reject'; proposalId: string }
  | { kind: 'edit'; proposalId: string; patch: Record<string, string> }
  /** Show a record, an article, a page. */
  | { kind: 'open'; target: EntityRef };

export type AldoAction = CoreAction | { kind: string; [k: string]: unknown };

export interface Interpretation<A extends AldoAction = AldoAction> {
  actions: A[];
  reply: Reply<A>;
}

/** A message the person can send as is: a suggestion chip, or a reading of an unclear
 *  message. */
export interface Choice {
  label: string;
  text: string;
}

// ── What Aldo proposes and a person settles ─────────────────────────────────

export type ProposalState = 'suggested' | 'confirmed' | 'rejected';

export interface Proposal<T = unknown> {
  id: string;
  /** 'commitment' | 'topic' | 'assignee' | 'draft' | ... */
  kind: string;
  subject: EntityRef;
  value: T;
  state: ProposalState;
  proposedAt: string;
  /** The turn whose action settled it. Settling by edit confirms. */
  settledBy?: { turnId: string; by: Speaker; at: string };
}

/** What waits on a person: raised by a turn, answered by a turn. The thread keeps the
 *  record; the list is the work left. */
export interface OpenItem<A extends AldoAction = AldoAction> {
  id: string;
  kind: string;
  /** The turn that raised it. */
  raisedBy: string;
  raisedAt: string;
  text: string;
  /** The text opens this when pressed. */
  anchor?: Anchor;
  /** The answers, each a recorded turn when pressed. */
  answers: ActionButton<A>[];
  resolvedBy?: string;
}

/** What governs what Aldo does next, and where it took effect from. */
export interface Instruction {
  id: string;
  kind: 'scope' | 'rule' | 'fix';
  text: string;
  from: Anchor | 'start';
  sourceTurn: string;
}

/** Where the work is. One per conversation at a time. */
export interface Status<A extends AldoAction = AldoAction> {
  tone: 'info' | 'warning' | 'success' | 'neutral';
  text: string;
  action?: ActionButton<A>;
}

// ── Buttons ─────────────────────────────────────────────────────────────────

/** What a button does, in its color. The grammar every surface shares:
 *    primary  the next step               (Scan, Read the rest, Review commitments)
 *    success  accept what Aldo proposed   (Looks right, All look right, Confirm)
 *    danger   remove, soft                (Dismiss, Delete)
 *    info     change the record, soft     (Merge, Re-read, Mark on p. 152)
 *    neutral  everything else             (Keep, Fix, Show all, Cancel)
 *  Never Aldo green: the send button is the only green control. */
export type Tone = 'primary' | 'success' | 'danger' | 'info' | 'neutral';

/** Pressed, a button does one of:
 *    say   send a message as is (a turn via 'button' that the model interprets)
 *    act   record these actions with this reply (a turn via 'button', no model call)
 *    go    open an anchor (records nothing)
 *    run   a view-only effect that records nothing: Fix opens the form, Show all unclamps */
export type Does<A extends AldoAction = AldoAction> =
  | { say: string }
  | { act: A | A[]; reply: string }
  | { go: Anchor }
  | { run: () => void };

export interface ActionButton<A extends AldoAction = AldoAction> {
  label: string;
  /** Default neutral. */
  tone?: Tone;
  does: Does<A>;
}

// ── A card ──────────────────────────────────────────────────────────────────

export interface CardField {
  key: string;
  label: string;
  value: string;
  multiline?: boolean;
}

export interface Card<A extends AldoAction = AldoAction> {
  id: string;
  /** The record the card shows. Pressing the head opens it. */
  subject: EntityRef;
  /** The ID chip: "11.1", "MM AES-1a". */
  badge?: string;
  title: string;
  /** Verbatim text, quoted, clamped to four lines until Show all. */
  quote?: string;
  /** Field pairs under the quote: the MMRP's columns. */
  fields?: { label: string; value: string }[];
  /** Where it is: the label ("p. 131") and what it opens (the record on its page). */
  where?: { label: string; go: Anchor };
  /** Drives dashed (suggested) vs solid (confirmed). */
  proposal?: Pick<Proposal, 'id' | 'state'>;
  /** Shown in place of the actions once confirmed: "Read right", "Fixed". */
  settled?: string;
  actions: ActionButton<A>[];
  /** Editing: the fields a person can change in place. Save receives their values. */
  edit?: {
    fields: CardField[];
    save: { label: string; run: (values: Record<string, string>) => void };
    extra?: ActionButton<A>[];
  };
}

// ── Helpers ─────────────────────────────────────────────────────────────────

export const ALDO: Speaker = { kind: 'aldo' };

/** A prototype's run clock (seconds) as a Turn's `at`, so ordering is one rule. */
export const runAt = (seconds: number): string => {
  // A time not reached yet (Infinity) sorts last; one not known (NaN) sorts first.
  const s = Number.isNaN(seconds) ? -1e9 : Math.max(-1e9, Math.min(1e9, seconds));
  return new Date(Date.UTC(2026, 0, 1) + s * 1000).toISOString();
};
