// Site Clearance — BIO-ONLY view of the rich clearance fixture.
//
// Same prototype as site-clearance.astro (Map / Data / Timeline / Activity, the
// Decision-first review-history model) but narrowed to the BIOLOGICAL gate only.
// The broader DCA team isn't ready to converge on Beacon as the cross-discipline
// (Bio / Cultural / Noise / Geology) clearance surface, so this drops the other
// three gates and gives Leah/DWR's bio team the single gate they own.
//
// This module is a THIN bio-scoping over ./geotech-fixture: it re-exports the
// data + the per-dimension helpers verbatim, and ONLY reimplements the three
// functions that aggregate ACROSS gates (deriveStatus / blockedUntil /
// statusCounts) so they consider biological alone. The non-bio reviews that
// still live in wa.reviews are simply never read here. Everything stays REAL
// (231 KMZ sites, verbatim biologist notes, real SWHA buffer).
import {
  workAreas,
  observations,
  TODAY,
  STATUS_ORDER,
  STATUS_META,
  GATE_DIMENSION_LABEL,
  distanceFt,
  disciplineReviews,
  currentReview,
  disciplineStatus,
  bufferConflicts,
  gateFor,
  formatDate,
  daysUntil,
} from './geotech-fixture';
import type {
  WorkArea,
  Observation,
  ClearanceStatus,
  DisciplineReview,
  GateDimension,
  ReviewKind,
  StatusMeta,
} from './geotech-fixture';

export {
  workAreas,
  observations,
  TODAY,
  STATUS_ORDER,
  STATUS_META,
  GATE_DIMENSION_LABEL,
  distanceFt,
  disciplineReviews,
  currentReview,
  disciplineStatus,
  bufferConflicts,
  gateFor,
  formatDate,
  daysUntil,
};
export type { WorkArea, Observation, ClearanceStatus, DisciplineReview, GateDimension, ReviewKind, StatusMeta };

/** The single gate this view tracks. */
export const BIO: GateDimension = 'biological';

/** Bio-only: the gate list collapses to one. Kept for parity with the rich
    fixture's API (anything iterating gates now iterates just biological). */
export const GATE_DIMENSIONS: GateDimension[] = ['biological'];

/**
 * Derived work-area status = the BIOLOGICAL gate's current status. A live buffer
 * conflict derives 'blocked' only when the bio gate's current outcome is already
 * 'blocked' (a human recorded it); otherwise 'provisional-block' (the system
 * detects, managers decide). 'not-required' is ignored (same as unreviewed).
 * Identical semantics to the rich deriveStatus — just the single gate.
 */
export function deriveStatus(wa: WorkArea, obs: Observation[]): ClearanceStatus {
  const raw = disciplineStatus(wa, BIO);
  const status = raw && raw !== 'not-required' ? raw : null;
  if (bufferConflicts(wa, obs).length > 0) {
    return status === 'blocked' ? 'blocked' : 'provisional-block';
  }
  return status ?? 'not-surveyed';
}

/**
 * Blocked-until = LATEST known date across the bio gate's current blocking
 * review's blockedUntil and any conflicting observation's estEndDate. Null when
 * not blocked, or blocked with no date anywhere (= until further notice).
 */
export function blockedUntil(wa: WorkArea, obs: Observation[]): string | null {
  const cur = currentReview(wa, BIO);
  const blocking = cur && cur.outcome === 'blocked' ? [cur] : [];
  const conflicts = bufferConflicts(wa, obs);
  if (blocking.length === 0 && conflicts.length === 0) return null;
  const dates = [...blocking.map((r) => r.blockedUntil), ...conflicts.map((o) => o.estEndDate)].filter(
    (d): d is string => !!d
  );
  if (dates.length === 0) return null;
  return dates.reduce((a, b) => (a > b ? a : b));
}

/** Work areas counted per derived (bio) status — the legend/rollup metric. */
export function statusCounts(
  obs: Observation[],
  areas: WorkArea[] = workAreas
): { status: ClearanceStatus; count: number }[] {
  const totals = new Map<ClearanceStatus, number>(STATUS_ORDER.map((s) => [s, 0]));
  for (const wa of areas) {
    const s = deriveStatus(wa, obs);
    totals.set(s, (totals.get(s) ?? 0) + 1);
  }
  return STATUS_ORDER.map((status) => ({ status, count: totals.get(status) ?? 0 }));
}
