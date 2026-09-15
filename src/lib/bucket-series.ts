// Dynamic time bucketing for the dashboard's "per day" charts.
//
// THE PROBLEM (2026-09-08): a day-per-column strip is readable at 14 or 30 columns
// and unreadable past that. The date-range control already offers 90 days, and an
// "all time" option is expected — at which point a daily strip is hundreds of
// hair-thin columns, or worse, a strip whose columns are sub-pixel and simply do not
// paint. The fix is not a wider chart; it is a coarser bucket.
//
// So the unit is DERIVED from the span rather than assumed: the series is summed
// into whatever period keeps the column count inside a readable band. The chart's
// title follows the same derivation ("Miles per day" → "per week" → "per month"),
// because a chart labelled "per day" showing weekly totals is worse than either.
//
// Deliberately pure and date-only: no Date.now(), no locale formatting, no DOM. The
// caller owns presentation; this owns the arithmetic.

export interface DayPoint {
  /** ISO date, YYYY-MM-DD. */
  date: string;
  value: number;
}

export type BucketUnit = 'day' | 'week' | 'month' | 'quarter' | 'year';

export interface BucketedSeries {
  /** Summed points, chronological. `date` is each bucket's FIRST day. */
  points: DayPoint[];
  unit: BucketUnit;
  /** Ready for a chart title: "per day", "per week", … */
  perLabel: string;
  /** True when the series was coarsened — useful for a caveat in the label. */
  bucketed: boolean;
}

/**
 * Upper bound on columns. 31 is the natural ceiling: it is a full month of daily
 * columns, which the existing 30-day concerns strip already renders legibly, so it
 * is a width the design is known to tolerate rather than a guess.
 */
const MAX_COLUMNS = 31;

const MS_PER_DAY = 86_400_000;

/** UTC-parsed: a bare YYYY-MM-DD is UTC midnight, and reading it back in a
 *  negative-offset zone otherwise reports the previous day. */
function utc(iso: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return null;
  const d = new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])));
  return Number.isNaN(d.getTime()) ? null : d;
}

const iso = (d: Date): string => d.toISOString().slice(0, 10);

/** The first day of the period `unit` that contains `d`. */
function periodStart(d: Date, unit: BucketUnit): string {
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth();
  switch (unit) {
    case 'day':
      return iso(d);
    case 'week': {
      // ISO weeks start Monday. getUTCDay() is 0=Sunday, so Sunday steps back 6.
      const dow = d.getUTCDay();
      const back = dow === 0 ? 6 : dow - 1;
      return iso(new Date(d.getTime() - back * MS_PER_DAY));
    }
    case 'month':
      return iso(new Date(Date.UTC(y, m, 1)));
    case 'quarter':
      return iso(new Date(Date.UTC(y, Math.floor(m / 3) * 3, 1)));
    case 'year':
      return iso(new Date(Date.UTC(y, 0, 1)));
  }
}

/** Approximate days per unit, for choosing the unit before doing the work. */
const APPROX_DAYS: Record<BucketUnit, number> = {
  day: 1,
  week: 7,
  month: 30,
  quarter: 91,
  year: 365,
};

const PER_LABEL: Record<BucketUnit, string> = {
  day: 'per day',
  week: 'per week',
  month: 'per month',
  quarter: 'per quarter',
  year: 'per year',
};

const UNITS: BucketUnit[] = ['day', 'week', 'month', 'quarter', 'year'];

/** Span in whole days covered by a chronological, date-bearing list. */
function spanDaysOf(firstIso: string, lastIso: string): number {
  const a = utc(firstIso);
  const b = utc(lastIso);
  if (!a || !b) return 1;
  return Math.max(1, Math.round((b.getTime() - a.getTime()) / MS_PER_DAY) + 1);
}

/** Finest unit whose projected column count fits. Shared so a stacked chart and a
 *  single-series chart over the same span never disagree about the unit. */
function chooseUnit(spanDays: number, maxColumns: number): BucketUnit {
  return UNITS.find((u) => Math.ceil(spanDays / APPROX_DAYS[u]) <= maxColumns) ?? 'year';
}

// ── Multi-series (stacked) ───────────────────────────────────────────────────
// A stacked chart cannot bucket each series independently: two series with
// different first/last dates would each pick their own unit from their own span,
// and the columns would stop lining up. So the unit is chosen ONCE from the
// combined span and every series is summed into the same period keys.

export interface StackPoint {
  /** ISO date, YYYY-MM-DD. */
  date: string;
  /** Series key → value for this date. Missing keys count as zero. */
  values: Record<string, number>;
}

export interface BucketedStack {
  points: StackPoint[];
  unit: BucketUnit;
  perLabel: string;
  bucketed: boolean;
}

export function bucketStacked(
  points: StackPoint[],
  opts: { maxColumns?: number } = {},
): BucketedStack {
  const maxColumns = opts.maxColumns ?? MAX_COLUMNS;
  const dated = points.filter((p) => utc(p.date) !== null);
  if (dated.length <= 1) {
    return { points: dated, unit: 'day', perLabel: PER_LABEL.day, bucketed: false };
  }

  const unit = chooseUnit(spanDaysOf(dated[0].date, dated[dated.length - 1].date), maxColumns);
  if (unit === 'day') {
    return { points: dated, unit, perLabel: PER_LABEL.day, bucketed: false };
  }

  const buckets = new Map<string, Record<string, number>>();
  for (const p of dated) {
    const key = periodStart(utc(p.date)!, unit);
    const acc = buckets.get(key) ?? {};
    for (const [k, v] of Object.entries(p.values)) acc[k] = (acc[k] ?? 0) + v;
    buckets.set(key, acc);
  }

  return {
    points: [...buckets].map(([date, values]) => ({ date, values })),
    unit,
    perLabel: PER_LABEL[unit],
    bucketed: true,
  };
}

/**
 * Sums `points` into the FINEST period that keeps the column count at or under
 * `maxColumns`. Finest-that-fits rather than a fixed threshold per span, so the
 * rule degrades smoothly: 30 days stays daily, 90 becomes weekly, a year becomes
 * monthly, a decade becomes yearly — with no span where it picks a unit that
 * produces either 400 columns or 3.
 *
 * Empty or single-point input is returned untouched at 'day': there is nothing to
 * coarsen, and claiming a unit would be an invention.
 */
export function bucketSeries(
  points: DayPoint[],
  opts: { maxColumns?: number } = {},
): BucketedSeries {
  const maxColumns = opts.maxColumns ?? MAX_COLUMNS;
  const dated = points.filter((p) => utc(p.date) !== null);
  if (dated.length <= 1) {
    return { points: dated, unit: 'day', perLabel: PER_LABEL.day, bucketed: false };
  }

  const unit = chooseUnit(spanDaysOf(dated[0].date, dated[dated.length - 1].date), maxColumns);

  if (unit === 'day') {
    return { points: dated, unit, perLabel: PER_LABEL.day, bucketed: false };
  }

  // Sum into period keys. A Map preserves insertion order, and the input is
  // chronological, so the output is too — no re-sort needed.
  const buckets = new Map<string, number>();
  for (const p of dated) {
    const key = periodStart(utc(p.date)!, unit);
    buckets.set(key, (buckets.get(key) ?? 0) + p.value);
  }

  return {
    points: [...buckets].map(([date, value]) => ({ date, value })),
    unit,
    perLabel: PER_LABEL[unit],
    bucketed: true,
  };
}
