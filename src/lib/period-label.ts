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

/* NO WEEKDAY, and it was tried (2026-09-09). "Saturday, June 13, 2026" answers a real
   question on a daily strip — whether a zero column is a quiet day or a day nothing was
   DUE — but it made the panel 214px wide, and esa-popover centres its panel on the mark
   with no collision handling. On the last column of a third-column widget the anchor sits
   ~82px from the shell scroller's edge, so anything over ~164px gets cut: measured, the
   right 25px was clipped, which is where the figure was. The month name and the year are
   what the label was asked for; the weekday was an addition, so the weekday is what goes.
   (A real fix is collision-aware positioning in esa-popover — hub work, not spoke work.) */
const FULL_DAY = new Intl.DateTimeFormat('en-US', {
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
 *   day     → "September 8, 2026"
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
      return `Week of ${FULL_DAY.format(d)}`;
    case 'month':
      return MONTH_YEAR.format(d);
    case 'quarter':
      return `Q${Math.floor(d.getUTCMonth() / 3) + 1} ${d.getUTCFullYear()}`;
    case 'year':
      return String(d.getUTCFullYear());
  }
}
