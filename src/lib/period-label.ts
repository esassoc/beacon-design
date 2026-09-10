// Human-readable labels for a bucketed period, for the micro-viz hover popups.
//
// SEPARATE FROM bucket-series.ts ON PURPOSE. That module's header states its
// boundary — "no locale formatting, no DOM; the caller owns presentation" — and it
// is the right boundary: the arithmetic is testable without Intl and the same
// buckets get labelled differently in an axis (short) and a popup (full). So the
// presentation half lives here and imports the unit type from there.
//
// WHY A PERIOD NEEDS THE UNIT (2026-09-09). A bucketed point carries only its
// FIRST day, so a week bucket and a day bucket are the same string. Labelling both
// "September 8, 2026" makes the popup lie by an order of magnitude — the reader is
// told a day's figure when the bar is a week's total. The unit is therefore
// required to say the period out loud, and each unit says it in the shape that
// reads naturally rather than as a computed range: a month is "September 2026",
// not "September 1 – 30, 2026".
import type { BucketUnit } from './bucket-series';

/** UTC on both sides: a bare YYYY-MM-DD is UTC midnight, so formatting in the
 *  viewer's zone would render the previous day everywhere west of Greenwich. Same
 *  rule the bucketing module parses by. */
const TZ = 'UTC';

/* The weekday is in here on purpose (2026-09-09). It costs one word and it settles the
   question a daily strip otherwise leaves open: whether a zero column is a QUIET DAY or a
   day nothing was DUE. The Daily Monitoring Reports strip is the case that forced it —
   reports are a weekday expectation, so its Sat/Sun columns are zero by design, and
   "Saturday, June 13, 2026" says that where "June 13, 2026" makes the reader count back
   from the axis. It reads the same way on every other chart, so it is not a special case. */
const FULL_DAY = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: TZ,
});
/* The week label drops the weekday — "Week of Monday, June 8" is noise, since an ISO week
   starts on a Monday by definition. */
const WEEK_START = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: TZ,
});
const MONTH_YEAR = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric',
  timeZone: TZ,
});

function utc(isoDate: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate);
  if (!m) return null;
  const d = new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])));
  return Number.isNaN(d.getTime()) ? null : d;
}

/**
 * The period starting at `isoDate`, said in full.
 *
 *   day     → "Tuesday, September 8, 2026"
 *   week    → "Week of September 8, 2026"
 *   month   → "September 2026"
 *   quarter → "Q3 2026"
 *   year    → "2026"
 *
 * An unparseable date returns unchanged rather than throwing — a popup is not the
 * place to take a page down, and the raw ISO string is still a true reading.
 */
export function periodLabel(isoDate: string, unit: BucketUnit = 'day'): string {
  const d = utc(isoDate);
  if (!d) return isoDate;
  switch (unit) {
    case 'day':
      return FULL_DAY.format(d);
    case 'week':
      // "Week of" rather than a computed span: the end day is derivable and saying
      // it doubles the label's width inside a popup that is mostly numbers.
      return `Week of ${WEEK_START.format(d)}`;
    case 'month':
      return MONTH_YEAR.format(d);
    case 'quarter':
      return `Q${Math.floor(d.getUTCMonth() / 3) + 1} ${d.getUTCFullYear()}`;
    case 'year':
      return String(d.getUTCFullYear());
  }
}
