// The obligations inbox — triggers, and the obligations each one raises.
//
// THE MODEL, from the 2026-09-06 review. A dashboard that lists 402 obligations is a
// registry with a different heading. What a person actually gets is an EVENT: an owl was
// seen, a season opened, a window closed. One event raises several duties, so the inbox is
// threaded like mail — the TRIGGER is the conversation, the obligations it raises are the
// messages in it. That makes "why is this in front of me" structural rather than a sentence
// someone wrote: the obligation is here because of this trigger.
//
// Three kinds of trigger, which is what the brief's in-effect conditions reduce to in
// practice:
//   observation — something was seen in the field (the richest kind: it has a reporter,
//                 a place and a clock)
//   season      — a dated window opened or closed
//   milestone   — project state changed: work began, a plan was approved
//
// WHAT IS REAL HERE. Every obligation a trigger raises is matched out of the registry by a
// real predicate — a species name, an activity id, or a phrase in the row's own condition and
// standard. The conditions, classes, notice windows, commitment ids and commitment titles are
// all registry data. So are the counts.
//
// WHAT IS EXAMPLE, and marked as such on the page: which triggers fired, when, where, and who
// reported them. The registry carries no in-effect conditions and no observations, so the
// events themselves have to be authored. Nothing here uses Date.now() or Math.random() — the
// clock is a fixed NOW so every render is identical.
import { BY_ID, OBLIGATIONS, commitmentsFor, type CommitmentRef, type Obligation } from './obligations';

/** Fixed clock. Every relative label on the page derives from this, never from Date.now(). */
export const NOW = new Date('2026-09-08T09:20:00Z');

export type TriggerKind = 'observation' | 'season' | 'milestone';

export interface TriggerSeed {
  id: string;
  kind: TriggerKind;
  /** What happened, in the words a person would use. */
  what: string;
  /** Where, when the trigger has a place. */
  where?: string;
  /** Who reported it — observations only. */
  reportedBy?: string;
  /** ISO timestamp. Compared against NOW, never against the real clock. */
  at: string;
  /** How this trigger selects the obligations it raises, out of the real registry. */
  match: (o: Obligation) => boolean;
}

const speciesIs = (needle: RegExp) => (o: Obligation) =>
  o.species.some((s) => needle.test(s)) || needle.test(`${o.title} ${o.condition} ${o.parameters}`);
const activityIn = (ids: string[]) => (o: Obligation) => o.activities.some((a) => ids.includes(a));
const mentions = (needle: RegExp) => (o: Obligation) =>
  needle.test(`${o.title} ${o.condition} ${o.standard} ${o.parameters}`);

// ── the example event log ────────────────────────────────────────────────────────────
// Ordered newest first only for readability; the queue re-sorts by priority then time.
const SEEDS: TriggerSeed[] = [
  {
    id: 'obs-owl',
    kind: 'observation',
    what: 'Burrowing owl seen on the alignment',
    where: 'Reach 2 — Canal alignment, station 14+200',
    reportedBy: 'M. Okonkwo, Biological Monitor',
    at: '2026-09-08T08:40:00Z',
    match: speciesIs(/burrowing owl|BUOW/i),
  },
  {
    id: 'obs-hawk',
    kind: 'observation',
    what: 'Injured Swainson’s hawk recovered near a haul road',
    where: 'Access Road 14',
    reportedBy: 'D. Alvarez, Designated Biologist',
    at: '2026-09-08T07:05:00Z',
    match: (o) => speciesIs(/swainson/i)(o) || mentions(/injur|take\b|mortalit|carcass/i)(o),
  },
  {
    id: 'obs-barge',
    kind: 'observation',
    what: 'Barge grounding during a cargo transfer',
    where: 'Turner Cut Barge Landing',
    reportedBy: 'Barge crew (6)',
    at: '2026-09-07T16:15:00Z',
    match: activityIn(['barges']),
  },
  {
    id: 'mil-pile',
    kind: 'milestone',
    what: 'Pile driving began',
    where: 'Reach 3 — Intake',
    at: '2026-09-07T06:00:00Z',
    match: activityIn(['pile-driving']),
  },
  {
    id: 'obs-turbid',
    kind: 'observation',
    what: 'Turbidity above the approved threshold downstream of dewatering',
    where: 'Reach 1 — Dewatering',
    reportedBy: 'Field technician',
    at: '2026-09-04T11:30:00Z',
    match: mentions(/turbidit|exceedance|threshold|water quality/i),
  },
  {
    id: 'sea-nesting',
    kind: 'season',
    what: 'Nesting season opened',
    where: 'Project-wide',
    at: '2026-09-01T00:00:00Z',
    match: mentions(/nest|breed|fledg|rookery/i),
  },
  {
    id: 'mil-dewater',
    kind: 'milestone',
    what: 'Dewatering & Fish Salvage Plan approved',
    where: 'Reach 1 — Dewatering',
    at: '2026-08-31T14:00:00Z',
    match: activityIn(['dewatering']),
  },
  {
    id: 'sea-inwater',
    kind: 'season',
    what: 'In-water work window closes in 21 days',
    where: 'Reaches 1 and 3',
    at: '2026-08-28T00:00:00Z',
    match: activityIn(['in-water-work', 'diversions']),
  },
];

// ── priority, derived from the registry ──────────────────────────────────────────────
//
// Two signals, both named by the team and both computable:
//   A STRICT DEADLINE — a Notify obligation owed in a day or less. A clock is running, and
//   being late is a fact rather than a judgement. 26 of the 50 Notify rows qualify.
//   TAKE OR INJURY — the duty concerns take, injury, mortality, a strike or entrapment.
//   20 rows qualify. This is the signal that makes an owl sighting outrank a season opening.
//
// A trigger inherits the strongest signal among the obligations it raises, so priority is a
// property of the registry rather than a number somebody typed.

const STRICT = /immediat|same day|within 24|within one business day|within one working day/i;
const TAKE = /\btake\b|injur|mortalit|\bdead\b|kill|entrap|strike|carcass|distress/i;

export const isStrict = (o: Obligation) => o.cls === 'notify' && STRICT.test(o.window);
export const isTakeRisk = (o: Obligation) => TAKE.test(`${o.title} ${o.condition} ${o.standard}`);

export type Urgency = 'now' | 'soon' | 'aware';

export interface RaisedObligation {
  obligation: Obligation;
  /** Why this obligation is in this thread, in one line. */
  why: string;
  urgency: Urgency;
  /** The deadline text when there is one, e.g. "Immediately". */
  deadline: string | null;
  strict: boolean;
  takeRisk: boolean;
  commitments: CommitmentRef[];
}

export interface Trigger extends Omit<TriggerSeed, 'match'> {
  raised: RaisedObligation[];
  /** Highest urgency among the obligations raised — what the queue sorts on. */
  urgency: Urgency;
  /** Relative bucket label, from NOW. */
  bucket: string;
  /** Relative time, e.g. "1h ago". */
  when: string;
  counts: { now: number; soon: number; aware: number };
}

const hoursSince = (iso: string) => (NOW.getTime() - new Date(iso).getTime()) / 3_600_000;

const relative = (iso: string) => {
  const h = hoursSince(iso);
  if (h < 1) return `${Math.max(1, Math.round(h * 60))}m ago`;
  if (h < 24) return `${Math.round(h)}h ago`;
  const d = Math.round(h / 24);
  return d === 1 ? 'Yesterday' : `${d}d ago`;
};

const bucketOf = (iso: string) => {
  const h = hoursSince(iso);
  if (h < 24) return 'Today';
  if (h < 48) return 'Yesterday';
  if (h < 24 * 7) return 'Earlier this week';
  return 'Older';
};

/**
 * The reason line. Written from the trigger, not from the obligation — and deliberately
 * SHORT: the deadline rides its own chip, so inlining the window text here produced
 * sentences like "A notice is owed within one business day; within 24 hours when an owl
 * moves on site because of this".
 */
function whyFor(seed: TriggerSeed, o: Obligation): string {
  if (isStrict(o)) return 'A notice is owed because of this';
  if (isTakeRisk(o)) return 'Concerns take or injury, so it applies the moment this happened';
  switch (seed.kind) {
    case 'observation':
      return 'Applies to what was seen here';
    case 'season':
      return 'Its season is now in effect';
    default:
      return 'This work is now underway, so the duty applies';
  }
}

const urgencyFor = (o: Obligation): Urgency =>
  isStrict(o) ? 'now' : isTakeRisk(o) || o.cls === 'notify' ? 'soon' : 'aware';

const RANK: Record<Urgency, number> = { now: 0, soon: 1, aware: 2 };

/**
 * A TRIGGER's urgency is not simply its loudest obligation. Nearly every thread contains
 * some Notify row with a strict window, so inheriting that made all eight triggers rank
 * "now" and the signal carried nothing.
 *
 * What matters is whether the clock is STILL RUNNING for this event. A 24-hour notice owed
 * on an owl seen 40 minutes ago is open; the same duty attached to a season that opened a
 * week ago is not — the notice was either sent or missed long since, and the thread is now
 * background. So urgency decays with the age of the trigger:
 *
 *   now   — a strict-deadline notice is owed and the event is inside the day
 *   soon  — take or injury is involved and it is recent, or a clock ran in the past week
 *   aware — a season or milestone with nothing owed on a clock
 */
function triggerUrgency(seed: TriggerSeed, raised: RaisedObligation[]): Urgency {
  const h = hoursSince(seed.at);
  const hasStrict = raised.some((r) => r.strict);
  const hasTake = raised.some((r) => r.takeRisk);
  if (hasStrict && h < 24) return 'now';
  if (hasTake && h < 72) return 'soon';
  if ((hasStrict || hasTake) && h < 24 * 7) return 'soon';
  return 'aware';
}

function build(seed: TriggerSeed): Trigger {
  const raised: RaisedObligation[] = OBLIGATIONS.filter(seed.match)
    .map((o) => ({
      obligation: o,
      why: whyFor(seed, o),
      urgency: urgencyFor(o),
      deadline: o.window || null,
      strict: isStrict(o),
      takeRisk: isTakeRisk(o),
      commitments: commitmentsFor(o).slice(0, 3),
    }))
    .sort(
      (a, b) =>
        RANK[a.urgency] - RANK[b.urgency] || a.obligation.title.localeCompare(b.obligation.title),
    );

  const counts = {
    now: raised.filter((r) => r.urgency === 'now').length,
    soon: raised.filter((r) => r.urgency === 'soon').length,
    aware: raised.filter((r) => r.urgency === 'aware').length,
  };

  const { match: _match, ...rest } = seed;
  return {
    ...rest,
    raised,
    urgency: triggerUrgency(seed, raised),
    bucket: bucketOf(seed.at),
    when: relative(seed.at),
    counts,
  };
}

/** Every trigger, sorted the way the queue shows them: urgency first, then newest. */
export const TRIGGERS: Trigger[] = SEEDS.map(build).sort(
  (a, b) => RANK[a.urgency] - RANK[b.urgency] || new Date(b.at).getTime() - new Date(a.at).getTime(),
);

/** Buckets in reading order, each carrying the triggers that fall in it. */
export const BUCKETS: { label: string; triggers: Trigger[] }[] = [
  'Today',
  'Yesterday',
  'Earlier this week',
  'Older',
]
  .map((label) => ({ label, triggers: TRIGGERS.filter((t) => t.bucket === label) }))
  .filter((b) => b.triggers.length > 0);

export const TOTALS = {
  triggers: TRIGGERS.length,
  /** Distinct obligations raised across every trigger — the inbox's real size. */
  obligations: new Set(TRIGGERS.flatMap((t) => t.raised.map((r) => r.obligation.id))).size,
  needNow: TRIGGERS.reduce((n, t) => n + t.counts.now, 0),
  registry: OBLIGATIONS.length,
};

export const KIND_META: Record<TriggerKind, { label: string; icon: string; paths: string }> = {
  observation: {
    label: 'Observation',
    icon: 'eye',
    paths:
      '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7"/><circle cx="12" cy="12" r="3"/>',
  },
  season: {
    label: 'Season',
    icon: 'calendar',
    paths:
      '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  },
  milestone: {
    label: 'Milestone',
    icon: 'flag',
    paths: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
  },
};

export const triggerById = (id: string) => TRIGGERS.find((t) => t.id === id);
export const obligationById = (id: string) => BY_ID.get(id);
