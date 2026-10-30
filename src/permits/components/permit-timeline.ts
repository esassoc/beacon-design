// The steps of <BcnPermitTimeline>, built from a permit's milestone DATES — which come
// from its status history (datesFromHistory), never typed in. The build renders the
// fixture's history; the browser re-renders from the store's history after every
// status change, so both go through these two functions and the markup is identical.
//
//   Application submitted → each review round → Today (while in review) → Issued → Expires
//
// renderTimeline() emits the <li> steps as an HTML string; the component's styles are
// scoped to its <ol> with :global() on the step classes so runtime markup is styled.

import {
  EXPIRING_WINDOW,
  TODAY,
  addDays,
  daysBetween,
  fmtDate,
  jurisdiction,
  timelineFor,
  type Permit,
  type PermitDates,
} from '../data/permit-tracker';

export type StepState = 'done' | 'today' | 'pending';

export interface TimelineStep {
  label: string;
  state: StepState;
  /** Primary line under the label: a date, or the pending explanation. */
  detail: string;
  /** Second line: how far past the agency's typical time. */
  note?: string;
  /** Days since the previous reached milestone. */
  delta?: number;
  badge?: string;
}

/**
 * How this permit compares with the typical timeline for its type at this agency.
 *   over     the days so far (or to issue) are already past the typical total
 *   at-risk  still inside the typical total, but the review rounds left at the usual
 *            pace would carry it past (e.g. still in the first review with most of
 *            the typical time gone, where two rounds are usual)
 *   on-pace  neither
 */
export interface Pace {
  level: 'over' | 'at-risk' | 'on-pace';
  label: string;
  detail: string;
  /** at-risk only: when it would issue if the remaining rounds run at the usual pace. */
  projected?: string;
}

export interface PermitTimeline {
  steps: TimelineStep[];
  /** The header summary: "N days from application to issue" / "Day N in agency review". */
  summary?: string;
  pace?: Pace;
}

/** Projections this far past the typical total count as "likely to take longer". */
const PACE_TOLERANCE = 1.15;

function paceOf(p: Permit, d: PermitDates): Pace | undefined {
  const row = timelineFor(p);
  if (!row || !d.submitted) return undefined;
  const agency = jurisdiction(p.jurisdictionId).name;
  const typical = row.median;
  const rounds = Math.round(row.avgReviews);
  const roundsText = `${plural(rounds, 'review round')}`;

  if (d.issued) {
    const took = daysBetween(d.submitted, d.issued);
    return took > typical
      ? { level: 'over', label: 'Took longer than typical', detail: `Issued in ${plural(took, 'day')}; ${agency} typically takes ${plural(typical, 'day')}.` }
      : { level: 'on-pace', label: 'Within typical time', detail: `Issued in ${plural(took, 'day')}; ${agency} typically takes ${plural(typical, 'day')}.` };
  }

  const elapsed = daysBetween(d.submitted, TODAY);
  const done = d.reviews.length;
  const sofar = `Day ${elapsed} of a typical ${typical}, with ${done} of a usual ${roundsText} done.`;
  if (elapsed > typical) {
    return { level: 'over', label: 'Taking longer than typical', detail: `Day ${elapsed}; ${agency} typically issues in ${plural(typical, 'day')}.` };
  }
  // The typical total split evenly across the rounds plus the final decision; what's left
  // of the current stretch plus every stretch still to come, at that pace.
  const stretch = typical / (rounds + 1);
  const sinceLast = daysBetween(d.reviews.at(-1) ?? d.submitted, TODAY);
  const left = Math.max(0, stretch - sinceLast) + Math.max(0, rounds - done) * stretch;
  const projected = Math.round(elapsed + left);
  if (projected > typical * PACE_TOLERANCE) {
    return {
      level: 'at-risk',
      label: 'Likely to take longer',
      detail: `${sofar} The rounds still to come would take it about ${plural(projected - typical, 'day')} past typical.`,
      projected: addDays(d.submitted, projected),
    };
  }
  return { level: 'on-pace', label: 'On pace', detail: sofar };
}

const ordinal = (n: number) => `${n}${['th', 'st', 'nd', 'rd'][n] ?? 'th'}`;
const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`;

export function permitTimeline(p: Permit, d: PermitDates): PermitTimeline {
  const pace = paceOf(p, d);
  const agency = jurisdiction(p.jurisdictionId).name;
  const typical = timelineFor(p)?.median;
  const steps: TimelineStep[] = [];
  let prev: string | undefined;
  const reached = (label: string, date: string) => {
    steps.push({ label, state: 'done', detail: fmtDate(date), delta: prev ? daysBetween(prev, date) : undefined });
    prev = date;
  };

  if (d.submitted) reached('Application submitted', d.submitted);
  else steps.push({ label: 'Application submitted', state: 'pending', detail: 'Not yet submitted' });

  d.reviews.forEach((r, i) => reached(`${ordinal(i + 1)} review`, r));

  const inReview = d.submitted && !d.issued ? daysBetween(d.submitted, TODAY) : undefined;
  if (inReview !== undefined) {
    steps.push({ label: `Today, ${fmtDate(TODAY)}`, state: 'today', detail: `Day ${inReview} in agency review` });
  }

  if (d.issued) reached('Issued', d.issued);
  else if (!d.submitted) steps.push({ label: 'Issued', state: 'pending', detail: 'Not yet submitted' });
  else if (typical !== undefined) {
    const expected = addDays(d.submitted, typical);
    const overdueBy = expected < TODAY ? daysBetween(expected, TODAY) : 0;
    steps.push({
      label: 'Issued',
      state: 'pending',
      // At risk: the date the remaining rounds point to, not the typical one.
      detail: pace?.projected ? `Likely around ${fmtDate(pace.projected)}` : `Expected ${fmtDate(expected)}`,
      note: overdueBy
        ? `${plural(overdueBy, 'day')} past the typical time for ${agency} (${plural(typical, 'day')})`
        : pace?.projected
          ? `Typical would be ${fmtDate(expected)}`
          : undefined,
    });
  } else {
    steps.push({ label: 'Issued', state: 'pending', detail: `No past ${agency} permits of this type to estimate from` });
  }

  if (d.expires) {
    const left = daysBetween(TODAY, d.expires);
    const badge = left < 0 ? 'Expired' : left <= EXPIRING_WINDOW ? `Expires in ${plural(left, 'day')}` : undefined;
    // Expiry is a scheduled date, reached or not — past dates read done, future pending.
    steps.push({
      label: 'Expires',
      state: d.expires <= TODAY ? 'done' : 'pending',
      detail: fmtDate(d.expires),
      delta: prev ? daysBetween(prev, d.expires) : undefined,
      badge,
    });
  } else {
    steps.push({ label: 'Expires', state: 'pending', detail: d.issued ? 'Does not expire' : 'Set when issued' });
  }

  const summary =
    d.submitted && d.issued
      ? `${plural(daysBetween(d.submitted, d.issued), 'day')} from application to issue`
      : inReview !== undefined
        ? `Day ${inReview} in agency review`
        : undefined;
  return { steps, summary, pace };
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * The <li> steps. `badgeHtml` is the inner HTML of a pre-rendered esa-badge (warning,
 * sm) with its label replaced, so the runtime badge is the same lego.
 */
export function renderTimeline(steps: TimelineStep[], badgeHtml: (label: string) => string): string {
  return steps
    .map(
      (s) =>
        `<li class="bcn-ptl__step" data-state="${s.state}"${s.state === 'today' ? ' aria-current="step"' : ''}>` +
        `<span class="bcn-ptl__mark" aria-hidden="true"></span>` +
        `<div class="bcn-ptl__body repel" data-gap="sm">` +
        `<div class="stack" data-gap="3xs">` +
        `<span class="bcn-ptl__label typography-label-md-strong">${esc(s.label)}</span>` +
        `<span class="bcn-ptl__detail typography-body-md">${esc(s.detail)}</span>` +
        (s.note ? `<span class="bcn-ptl__note typography-body-sm">${esc(s.note)}</span>` : '') +
        `</div>` +
        `<div class="cluster" data-gap="xs">` +
        (s.badge ? badgeHtml(s.badge) : '') +
        (s.delta !== undefined ? `<span class="bcn-ptl__delta typography-label-sm">+${plural(s.delta, 'day')}</span>` : '') +
        `</div></div></li>`,
    )
    .join('');
}
