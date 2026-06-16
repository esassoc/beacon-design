// ─────────────────────────────────────────────────────────────────────────────
// Fish Studies — the SCHEDULE layer (phases, milestones, water-year + period math).
//
// Three rules from the "Prior to 2030 Timelines Memo" that the gantt MUST honor:
//
//   1. WATER-YEAR semantics. A deadline of "2029" means Oct 1, 2028 — the start of
//      water year 2029 — because everything anchors to the salmon-outmigration
//      freshet. `waterYearStart(2029)` → "2028-10-01".
//
//   2. HALF-YEAR FIELD-SEASON periods, NOT calendar quarters:
//        Q2-Q3 = Apr–Sep (dry: install / plan / analyze / report)
//        Q4-Q1 = Oct–Mar (winter freshet: deploy arrays / tag & track / collect)
//      The "2026/7 Q4-Q1" notation spans a winter (Oct 2026 → Mar 2027).
//
//   3. Studies are BACK-SCHEDULED from milestones (30%/60% design, in-water
//      construction, Phase 1/2 ops), not forward from a start date.
//
// Dates here are provisional: the source memo's 73 tracked comments override
// several body dates (e.g. in-water NTP is now ~May 2035, not 2034). Treat the
// schedule as revisable — the same "system proposes, humans confirm" posture as
// the Site Clearance prototype.
// ─────────────────────────────────────────────────────────────────────────────

export type DcpPhaseId = 'baseline' | 'in-water-construction' | 'phase1-ops' | 'phase2-ops';

export interface DcpPhase {
  id: DcpPhaseId;
  label: string;
  /** Calendar year the phase band starts / ends on the axis. */
  startYear: number;
  endYear: number;
}

export interface Milestone {
  id: string;
  label: string;
  /** The "by YYYY" water year the milestone anchors to. */
  waterYear: number;
  /** Representative ISO date used to place the vertical marker on the axis. */
  date: string;
  /** Short axis tag, e.g. "30%". */
  tag: string;
}

/** Axis span — the gantt renders this window. */
export const SCHEDULE_START_YEAR = 2026;
export const SCHEDULE_END_YEAR = 2045;

/**
 * Phase bands (the macro swimlanes painted behind the bars). Baseline monitoring
 * requires ≥5 years before in-water construction; schedules run to ~2044.
 */
export const DCP_PHASES: DcpPhase[] = [
  { id: 'baseline', label: 'Baseline / preconstruction monitoring', startYear: 2029, endYear: 2034 },
  { id: 'in-water-construction', label: 'In-water construction monitoring', startYear: 2034, endYear: 2043 },
  { id: 'phase1-ops', label: 'Phase 1 operations monitoring', startYear: 2043, endYear: 2044 },
  { id: 'phase2-ops', label: 'Phase 2 operations monitoring', startYear: 2044, endYear: 2045 },
];

export const PHASE_META: Record<DcpPhaseId, { label: string; short: string }> = {
  baseline: { label: 'Baseline / preconstruction monitoring', short: 'Baseline' },
  'in-water-construction': { label: 'In-water construction monitoring', short: 'In-water construction' },
  'phase1-ops': { label: 'Phase 1 operations monitoring', short: 'Phase 1 ops' },
  'phase2-ops': { label: 'Phase 2 operations monitoring', short: 'Phase 2 ops' },
};

/** The engineering/operations milestones studies are back-scheduled from. */
export const MILESTONES: Milestone[] = [
  { id: 'design-30', label: '30% design', waterYear: 2031, date: '2031-01-01', tag: '30%' },
  { id: 'design-60', label: '60% design', waterYear: 2032, date: '2032-01-01', tag: '60%' },
  { id: 'in-water', label: 'In-water construction (cofferdam + intakes)', waterYear: 2034, date: '2034-06-01', tag: 'In-water' },
  { id: 'phase1-ops', label: 'Phase 1 operations', waterYear: 2043, date: '2043-01-01', tag: 'Ph 1 ops' },
  { id: 'phase2-ops', label: 'Phase 2 operations', waterYear: 2044, date: '2044-01-01', tag: 'Ph 2 ops' },
];

/** Oct 1 of (waterYear − 1) — the start of the given water year (ISO date). */
export function waterYearStart(waterYear: number): string {
  return `${waterYear - 1}-10-01`;
}

/**
 * Fractional position (0–1) of an ISO date across the axis window. Used to place
 * bars and markers; clamps to [0,1] so out-of-window dates pin to the edges.
 */
export function axisFraction(iso: string): number {
  const [y, m = '01', d = '01'] = iso.split('-');
  const t = new Date(Number(y), Number(m) - 1, Number(d)).getTime();
  const start = new Date(SCHEDULE_START_YEAR, 0, 1).getTime();
  const end = new Date(SCHEDULE_END_YEAR, 0, 1).getTime();
  return Math.min(1, Math.max(0, (t - start) / (end - start)));
}

/** Field-season half of a date: "Q2-Q3" (Apr–Sep) or "Q4-Q1" (Oct–Mar). */
export function fieldSeasonHalf(iso: string): 'Q2-Q3' | 'Q4-Q1' {
  const month = Number(iso.split('-')[1] ?? '1');
  return month >= 4 && month <= 9 ? 'Q2-Q3' : 'Q4-Q1';
}

/**
 * Period label for a date, matching the memo's notation:
 *   Apr–Sep 2026         → "2026 Q2-Q3"
 *   Oct 2026 – Mar 2027  → "2026/7 Q4-Q1"
 */
export function periodLabel(iso: string): string {
  const [yStr, mStr = '1'] = iso.split('-');
  const year = Number(yStr);
  const month = Number(mStr);
  if (month >= 4 && month <= 9) return `${year} Q2-Q3`;
  // Oct–Mar winter: Oct–Dec belongs to year/(year+1); Jan–Mar to (year-1)/year.
  const startYear = month >= 10 ? year : year - 1;
  return `${startYear}/${String(startYear + 1).slice(2)} Q4-Q1`;
}

/** Whole-year tick labels for the axis header. */
export function axisYears(): number[] {
  const out: number[] = [];
  for (let y = SCHEDULE_START_YEAR; y <= SCHEDULE_END_YEAR; y++) out.push(y);
  return out;
}
