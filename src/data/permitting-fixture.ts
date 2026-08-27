// Beale — Permitting data fixture. Phase 2 of Project Almond's three-phase
// lifecycle (Due Diligence -> Permitting -> Compliance Tracking).
//
// The 11 permits themselves are NOT re-invented here — PERMITS in
// due-diligence-fixture.ts is the single source of truth for identity (agency,
// level, name, requirement, notes). This file only adds the phase-2-ONLY facts —
// active tracking status, target date, and an invented agency reference number —
// as an overlay keyed by permit id, then joins the two into the rows the tracking
// page renders. Two of the four permits that were "Potentially Applicable" during
// due diligence (streambed-alteration, wqc-401) are promoted to active tracking
// here: the jurisdictional delineation that PERMITS' section-404 note describes as
// already confirmed resolves what they were pending on. The remaining two
// (ite-2081, section-7-10) stay pending a determination from protocol survey
// results that haven't run yet.
//
// All content is invented and domain-credible, never derived from a real Beale
// document — see design-principles' mock-data rule.
//
// computeStats() is a PURE function over a rows array rather than a set of
// module-level consts, so both the SSR dashboard (over the baseline TRACKED_PERMITS)
// and the client-side re-render after an in-browser edit (over TRACKED_PERMITS with
// src/lib/permitting-store.ts's overrides applied) share one derivation — see
// permitting-dashboard.astro's client script.
import { PERMITS, type PermitFixture } from './due-diligence-fixture';

export type TrackingStatus = 'pending-determination' | 'not-started' | 'in-preparation' | 'submitted' | 'under-review' | 'approved';

export const STATUS_ORDER: TrackingStatus[] = ['pending-determination', 'not-started', 'in-preparation', 'submitted', 'under-review', 'approved'];

export const STATUS_META: Record<TrackingStatus, { label: string; hex: string }> = {
  'pending-determination': { label: 'Pending Determination', hex: '#8a9099' },
  'not-started': { label: 'Not Started', hex: '#8a9099' },
  'in-preparation': { label: 'In Preparation', hex: '#f9a134' },
  submitted: { label: 'Submitted', hex: '#4a90d9' },
  'under-review': { label: 'Under Agency Review', hex: '#7b5ea7' },
  approved: { label: 'Approved', hex: '#2f9e64' },
};

interface TrackingOverlay {
  status: TrackingStatus;
  /** ISO date (YYYY-MM-DD) — target submittal/decision date. Absent while pending determination. */
  targetDate?: string;
  /** Invented agency application/tracking number. Absent until filed. */
  refNumber?: string;
}

// Fixture clock — every "days until due" / needs-attention derivation is computed
// from this anchor, not the real current date, so the page renders identically on
// every build. A few days after the CIA report's Draft v0.3 (2026-08-22 per the
// Section 404 comment in due-diligence-fixture.ts) — Phase 2 has just opened.
export const TODAY = '2026-08-25';

const TRACKING: Record<string, TrackingOverlay> = {
  'cup-site-plan': { status: 'submitted', targetDate: '2026-10-01', refNumber: 'CUP-2026-0142' },
  'building-electrical': { status: 'in-preparation', targetDate: '2026-11-15', refNumber: 'BLD-2026-0871' },
  'fire-life-safety': { status: 'not-started', targetDate: '2027-02-01' },
  'generator-permit': { status: 'in-preparation', targetDate: '2026-12-10', refNumber: 'KCAPCD-PN-2026-0459' },
  swppp: { status: 'approved', targetDate: '2026-08-05', refNumber: 'WDID 5S12C123456' },
  'section-404': { status: 'submitted', targetDate: '2027-01-15', refNumber: 'SPK-2026-00284' },
  'sce-interconnection': { status: 'under-review', targetDate: '2027-03-01', refNumber: 'SCE-LGIA-2026-0093' },
  'streambed-alteration': { status: 'not-started', targetDate: '2026-11-01' },
  'wqc-401': { status: 'not-started', targetDate: '2026-11-01' },
  'ite-2081': { status: 'pending-determination' },
  'section-7-10': { status: 'pending-determination' },
};

export interface TrackedPermit extends PermitFixture, TrackingOverlay {}

/** The baseline — the fixture's own data, with no in-browser edits applied. */
export const TRACKED_PERMITS: TrackedPermit[] = PERMITS.map((p) => ({ ...p, ...TRACKING[p.id] }));

const daysUntil = (iso: string) => {
  const [ty, tm, td] = TODAY.split('-').map(Number);
  const [y, m, d] = iso.split('-').map(Number);
  return Math.round((Date.UTC(y, m - 1, d) - Date.UTC(ty, tm - 1, td)) / 86_400_000);
};

/** Actively tracked (not applicable) and due, or overdue, within 45 days. */
function needsAttention(p: TrackedPermit): boolean {
  return p.status !== 'approved' && p.status !== 'pending-determination' && !!p.targetDate && daysUntil(p.targetDate) <= 45;
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

export interface PermittingStats {
  totalCount: number;
  approvedCount: number;
  outstandingCount: number;
  pendingDeterminationCount: number;
  attentionCount: number;
  /** Nearest-due first — a count alone doesn't say WHICH permits are at risk. */
  attentionList: TrackedPermit[];
  /** The latest target date among permits that HAVE one — the projected date the
   *  whole set is expected to clear. Excludes pending-determination permits, which
   *  have no date to project from yet. Null when nothing is dated. */
  latestTargetDate: string | null;
  /** Per-status counts, in ladder order. Statuses with zero permits are omitted
   *  rather than shown as an empty row. */
  statusBreakdown: { status: TrackingStatus; label: string; hex: string; count: number }[];
}

export function computeStats(rows: TrackedPermit[]): PermittingStats {
  const totalCount = rows.length;
  const approvedCount = rows.filter((p) => p.status === 'approved').length;
  const pendingDeterminationCount = rows.filter((p) => p.status === 'pending-determination').length;
  const attentionList = rows.filter(needsAttention).sort((a, b) => (a.targetDate ?? '').localeCompare(b.targetDate ?? ''));
  const latestTargetDate =
    rows
      .map((p) => p.targetDate)
      .filter((d): d is string => Boolean(d))
      .sort()
      .at(-1) ?? null;
  const statusBreakdown = STATUS_ORDER.map((status) => ({
    status,
    label: STATUS_META[status].label,
    hex: STATUS_META[status].hex,
    count: rows.filter((p) => p.status === status).length,
  })).filter((s) => s.count > 0);

  return {
    totalCount,
    approvedCount,
    outstandingCount: totalCount - approvedCount,
    pendingDeterminationCount,
    attentionCount: attentionList.length,
    attentionList,
    latestTargetDate,
    statusBreakdown,
  };
}
