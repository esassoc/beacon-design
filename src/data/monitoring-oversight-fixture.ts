// Monitoring Portal — Third-Party Compliance Oversight — fixture data.
//
// Fictional scenario: ESA holds a THIRD-PARTY compliance-inspection role on the
// Cottonwood Solar + Storage Project (a 185 MWac solar + 100 MW/400 MWh battery
// storage project in Kern County, California, developed by Solterra Energy
// Partners). Day-to-day field inspection is performed by a separate first-party
// contractor, Fieldstone Environmental Monitoring — ESA does not resolve issues
// directly; it spot-checks Fieldstone's logged observations and tracks whether
// flagged items get remediated. Every name, date, coordinate, and observation
// below is INVENTED demo data, not real project information.
//
// Observations behave like the existing Monitoring Portal's finds: each starts
// 'active' and becomes 'resolved' once remediated (mirrors the Delta Conveyance
// dashboard's active/inactive lifecycle). Primary charts/map emphasize ACTIVE
// observations; resolved ones still roll into supporting metrics/trend.

export const TENANT_NAME = 'Solterra Energy Partners';
export const PROJECT_NAME = 'Cottonwood Solar + Storage Project';
export const FIRST_PARTY_FIRM = 'Fieldstone Environmental Monitoring';

// Fixture clock — every "days active" / "days to resolve" / trend bucket below
// is computed from this anchor, not the real current date, so the page renders
// identically on every build.
export const TODAY = '2026-08-05';

export type SeverityLevel = 'in-compliance' | 'needs-attention' | 'non-compliance';
export const SEVERITY_ORDER: SeverityLevel[] = ['in-compliance', 'needs-attention', 'non-compliance'];

// Severity is project-configurable in the real product; this fixture uses the
// three-level scheme requested for this prototype. Colors read the semantic
// tokens (never a raw hex) — same idiom as project-dashboard.ts's `critical`.
export const SEVERITY_META: Record<SeverityLevel, { label: string; hex: string }> = {
  'in-compliance': { label: 'In Compliance', hex: 'var(--color-success)' },
  'needs-attention': { label: 'Needs Attention', hex: 'var(--color-warning)' },
  'non-compliance': { label: 'Non-Compliance', hex: 'var(--color-danger)' },
};

export type ObservationStatus = 'active' | 'resolved';

export type ObservationCategory =
  | 'Erosion & Sediment Control'
  | 'Stormwater / BMP Maintenance'
  | 'Vegetation & Habitat Protection'
  | 'Cultural Resources Protection'
  | 'Noise Management'
  | 'Waste Management'
  | 'Spill Prevention & Response'
  | 'Access & Traffic Control';

export interface ObservationArea {
  label: string;
  lat: number;
  lng: number;
}

// Site areas across the fictional Cottonwood site — scattered lat/lng near a
// Kern County, CA center point (35.35, -119.35), close enough to plot as one
// cluster on a project-level map.
export const AREAS: Record<string, ObservationArea> = {
  northArray: { label: 'North Array — Block A', lat: 35.3654, lng: -119.3521 },
  southArray: { label: 'South Array — Block B', lat: 35.3382, lng: -119.3488 },
  substation: { label: 'Substation Yard', lat: 35.3511, lng: -119.3402 },
  bess: { label: 'BESS Pad', lat: 35.3499, lng: -119.3437 },
  omBuilding: { label: 'O&M Building Area', lat: 35.3527, lng: -119.3465 },
  accessRoad: { label: 'Main Access Road (Hwy 58 Spur)', lat: 35.3601, lng: -119.3612 },
  laydownYard: { label: 'Laydown / Staging Yard', lat: 35.3445, lng: -119.3549 },
  washCrossing: { label: 'Cottonwood Wash Crossing', lat: 35.3418, lng: -119.3357 },
  perimeterWest: { label: 'Perimeter Fence Line — West', lat: 35.3572, lng: -119.3678 },
};

export interface Observation {
  id: string;
  category: ObservationCategory;
  severity: SeverityLevel;
  status: ObservationStatus;
  /** ISO date the first-party inspector logged the observation. */
  reportedDate: string;
  /** ISO date the observation was remediated/closed (status === 'resolved' only). */
  resolvedDate?: string;
  area: keyof typeof AREAS;
  /** Fieldstone Environmental Monitoring field inspector who logged it. */
  inspector: string;
  /** Whether ESA's third-party QA spot-check has reviewed this specific entry. */
  esaReviewed: boolean;
  description: string;
}

export const OBSERVATIONS: Observation[] = [
  // ── Active — non-compliance ──
  { id: 'obs-0142', category: 'Stormwater / BMP Maintenance', severity: 'non-compliance', status: 'active', reportedDate: '2026-07-29', area: 'southArray', inspector: 'R. Delgado', esaReviewed: true, description: 'Silt fence down for ~40 ft along the Block B swale after last week\'s wind event; sediment tracking toward the wash crossing.' },
  { id: 'obs-0139', category: 'Spill Prevention & Response', severity: 'non-compliance', status: 'active', reportedDate: '2026-07-24', area: 'laydownYard', inspector: 'K. Osei', esaReviewed: true, description: 'Hydraulic fluid drip pan missing under a staged excavator; secondary containment not in place per SWPPP requirements.' },
  { id: 'obs-0121', category: 'Cultural Resources Protection', severity: 'non-compliance', status: 'active', reportedDate: '2026-07-11', area: 'perimeterWest', inspector: 'T. Whitfield', esaReviewed: false, description: 'Ground disturbance observed outside the approved limits near the west ESA-monitored buffer; work halted pending cultural monitor review.' },

  // ── Active — needs attention ──
  { id: 'obs-0144', category: 'Erosion & Sediment Control', severity: 'needs-attention', status: 'active', reportedDate: '2026-08-01', area: 'northArray', inspector: 'J. Park', esaReviewed: false, description: 'Check dam in the Block A drainage showing early sediment buildup; not yet at capacity but trending toward it.' },
  { id: 'obs-0140', category: 'Access & Traffic Control', severity: 'needs-attention', status: 'active', reportedDate: '2026-07-27', area: 'accessRoad', inspector: 'R. Delgado', esaReviewed: true, description: 'Speed-limit signage missing at the Hwy 58 spur turnoff; construction traffic observed exceeding the 15-mph site limit.' },
  { id: 'obs-0136', category: 'Waste Management', severity: 'needs-attention', status: 'active', reportedDate: '2026-07-20', area: 'omBuilding', inspector: 'K. Osei', esaReviewed: false, description: 'Solid-waste dumpster left uncovered overnight near the O&M building; no spillage observed but a repeat item.' },
  { id: 'obs-0130', category: 'Vegetation & Habitat Protection', severity: 'needs-attention', status: 'active', reportedDate: '2026-07-16', area: 'substation', inspector: 'T. Whitfield', esaReviewed: true, description: 'Exclusion fencing around the burrowing owl buffer near the substation yard sagging in two panels; owls not observed active this visit.' },
  { id: 'obs-0126', category: 'Noise Management', severity: 'needs-attention', status: 'active', reportedDate: '2026-07-14', area: 'bess', inspector: 'J. Park', esaReviewed: false, description: 'BESS commissioning generator running outside the approved 7am–7pm construction noise window by roughly 45 minutes.' },
  { id: 'obs-0118', category: 'Stormwater / BMP Maintenance', severity: 'needs-attention', status: 'active', reportedDate: '2026-07-08', area: 'washCrossing', inspector: 'R. Delgado', esaReviewed: true, description: 'Rock check structure at the wash crossing partially displaced; still functional, recommend re-bedding before the next storm.' },
  { id: 'obs-0113', category: 'Access & Traffic Control', severity: 'needs-attention', status: 'active', reportedDate: '2026-07-03', area: 'accessRoad', inspector: 'K. Osei', esaReviewed: false, description: 'Wildlife crossing signage obscured by roadside dust accumulation along the access road.' },

  // ── Active — in compliance (current confirmed spot-checks) ──
  { id: 'obs-0145', category: 'Vegetation & Habitat Protection', severity: 'in-compliance', status: 'active', reportedDate: '2026-08-03', area: 'northArray', inspector: 'J. Park', esaReviewed: true, description: 'Weekly burrowing owl buffer check — no active burrows within 250 ft of active construction; exclusion fencing intact.' },
  { id: 'obs-0143', category: 'Stormwater / BMP Maintenance', severity: 'in-compliance', status: 'active', reportedDate: '2026-07-30', area: 'northArray', inspector: 'R. Delgado', esaReviewed: false, description: 'Block A BMP inspection — all silt fence and check dams intact and functioning as designed.' },
  { id: 'obs-0137', category: 'Waste Management', severity: 'in-compliance', status: 'active', reportedDate: '2026-07-21', area: 'laydownYard', inspector: 'K. Osei', esaReviewed: true, description: 'Weekly waste-staging audit — all containers covered and labeled correctly; no discharge observed.' },
  { id: 'obs-0132', category: 'Noise Management', severity: 'in-compliance', status: 'active', reportedDate: '2026-07-17', area: 'bess', inspector: 'T. Whitfield', esaReviewed: false, description: 'BESS pad construction noise monitoring — readings within the approved daytime limit at the nearest receptor.' },
  { id: 'obs-0125', category: 'Cultural Resources Protection', severity: 'in-compliance', status: 'active', reportedDate: '2026-07-13', area: 'perimeterWest', inspector: 'T. Whitfield', esaReviewed: true, description: 'Monthly cultural monitor walk of the west buffer — no ground disturbance observed within the exclusion area.' },
  { id: 'obs-0117', category: 'Spill Prevention & Response', severity: 'in-compliance', status: 'active', reportedDate: '2026-07-07', area: 'substation', inspector: 'J. Park', esaReviewed: false, description: 'Substation yard spill-kit inventory check — fully stocked, inspection tags current.' },

  // ── Resolved — non-compliance ──
  { id: 'obs-0108', category: 'Spill Prevention & Response', severity: 'non-compliance', status: 'resolved', reportedDate: '2026-06-18', resolvedDate: '2026-06-25', area: 'omBuilding', inspector: 'K. Osei', esaReviewed: true, description: 'Fuel storage secondary containment cracked at the O&M building; contractor replaced containment and re-inspected.' },
  { id: 'obs-0101', category: 'Erosion & Sediment Control', severity: 'non-compliance', status: 'resolved', reportedDate: '2026-06-05', resolvedDate: '2026-06-16', area: 'washCrossing', inspector: 'R. Delgado', esaReviewed: true, description: 'Sediment discharge into the Cottonwood Wash after a storm event; emergency BMP repair and turbidity monitoring closed the item.' },
  { id: 'obs-0092', category: 'Cultural Resources Protection', severity: 'non-compliance', status: 'resolved', reportedDate: '2026-05-19', resolvedDate: '2026-05-30', area: 'perimeterWest', inspector: 'T. Whitfield', esaReviewed: true, description: 'Unauthorized staging within 50 ft of the west cultural buffer; materials relocated and buffer re-flagged.' },
  { id: 'obs-0084', category: 'Waste Management', severity: 'non-compliance', status: 'resolved', reportedDate: '2026-05-04', resolvedDate: '2026-05-11', area: 'laydownYard', inspector: 'K. Osei', esaReviewed: false, description: 'Improper disposal of solvent-soaked rags in a general waste bin; hazardous-waste protocol re-briefed to crews.' },

  // ── Resolved — needs attention ──
  { id: 'obs-0110', category: 'Access & Traffic Control', severity: 'needs-attention', status: 'resolved', reportedDate: '2026-06-22', resolvedDate: '2026-06-27', area: 'accessRoad', inspector: 'J. Park', esaReviewed: true, description: 'Missing wildlife-crossing signage at the access road bend; signage reinstalled.' },
  { id: 'obs-0103', category: 'Vegetation & Habitat Protection', severity: 'needs-attention', status: 'resolved', reportedDate: '2026-06-09', resolvedDate: '2026-06-19', area: 'substation', inspector: 'T. Whitfield', esaReviewed: false, description: 'Exclusion fencing gap near the substation buffer; repaired and re-tensioned.' },
  { id: 'obs-0096', category: 'Noise Management', severity: 'needs-attention', status: 'resolved', reportedDate: '2026-05-27', resolvedDate: '2026-06-03', area: 'bess', inspector: 'J. Park', esaReviewed: true, description: 'BESS generator running past the approved noise window on two consecutive evenings; schedule corrected.' },
  { id: 'obs-0088', category: 'Stormwater / BMP Maintenance', severity: 'needs-attention', status: 'resolved', reportedDate: '2026-05-08', resolvedDate: '2026-05-15', area: 'southArray', inspector: 'R. Delgado', esaReviewed: false, description: 'Silt fence sagging along the Block B perimeter; re-staked and inspected.' },
  { id: 'obs-0079', category: 'Waste Management', severity: 'needs-attention', status: 'resolved', reportedDate: '2026-04-21', resolvedDate: '2026-04-29', area: 'omBuilding', inspector: 'K. Osei', esaReviewed: true, description: 'Uncovered dumpster near O&M building; covered lid installed and secured.' },

  // ── Resolved — in compliance (superseded by a newer check) ──
  { id: 'obs-0106', category: 'Cultural Resources Protection', severity: 'in-compliance', status: 'resolved', reportedDate: '2026-06-15', resolvedDate: '2026-07-13', area: 'perimeterWest', inspector: 'T. Whitfield', esaReviewed: false, description: 'Monthly cultural monitor walk — clear; superseded by the following month\'s check.' },
  { id: 'obs-0090', category: 'Spill Prevention & Response', severity: 'in-compliance', status: 'resolved', reportedDate: '2026-05-14', resolvedDate: '2026-07-07', area: 'substation', inspector: 'J. Park', esaReviewed: false, description: 'Substation spill-kit check — fully stocked; superseded by the following quarter\'s check.' },
  { id: 'obs-0075', category: 'Waste Management', severity: 'in-compliance', status: 'resolved', reportedDate: '2026-04-16', resolvedDate: '2026-07-21', area: 'laydownYard', inspector: 'K. Osei', esaReviewed: true, description: 'Waste-staging audit — clear; superseded by the following month\'s check.' },
];

// ── Date helpers (fixture-clock based, deterministic) ──────────────────────
const toUTC = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return Date.UTC(y, m - 1, d);
};
const daysBetween = (fromIso: string, toIso: string) => Math.round((toUTC(toIso) - toUTC(fromIso)) / 86_400_000);

/** Active: days open as of the fixture clock. Resolved: days it was open before closing. */
export function daysActive(o: Observation): number {
  return daysBetween(o.reportedDate, o.status === 'active' ? TODAY : o.resolvedDate!);
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

// ── Derived views ────────────────────────────────────────────────────────
export const ACTIVE_OBSERVATIONS = OBSERVATIONS.filter((o) => o.status === 'active');
export const RESOLVED_OBSERVATIONS = OBSERVATIONS.filter((o) => o.status === 'resolved');

export interface SeveritySlice { severity: SeverityLevel; label: string; hex: string; value: number; }

const ATTENTION_ACTIVE = ACTIVE_OBSERVATIONS.filter((o) => o.severity !== 'in-compliance');

/** Outstanding items for the Attention panel — active, not-in-compliance, worst-first. */
export const OUTSTANDING = ATTENTION_ACTIVE
  .slice()
  .sort((a, b) => (a.severity === b.severity ? daysActive(b) - daysActive(a) : a.severity === 'non-compliance' ? -1 : 1));

/** Category breakdown of one severity's active items, worst-category-first. */
function categoryBreakdown(items: Observation[]): { category: ObservationCategory; value: number }[] {
  const counts = new Map<ObservationCategory, number>();
  for (const o of items) counts.set(o.category, (counts.get(o.category) ?? 0) + 1);
  return [...counts.entries()].map(([category, value]) => ({ category, value })).sort((a, b) => b.value - a.value);
}
export const NEEDS_ATTENTION_CATEGORY_BREAKDOWN = categoryBreakdown(ACTIVE_OBSERVATIONS.filter((o) => o.severity === 'needs-attention'));
export const NON_COMPLIANCE_CATEGORY_BREAKDOWN = categoryBreakdown(ACTIVE_OBSERVATIONS.filter((o) => o.severity === 'non-compliance'));

/** Severity breakdown of the current active set — the donut's data. Sourced
 * from the SAME ACTIVE_OBSERVATIONS backlog as OUTSTANDING and the two
 * category breakdowns above, so needs-attention/non-compliance counts match
 * everywhere on the dashboard (a separate day-of-sample would not). */
export const SEVERITY_BREAKDOWN: SeveritySlice[] = SEVERITY_ORDER.map((severity) => ({
  severity,
  label: SEVERITY_META[severity].label,
  hex: SEVERITY_META[severity].hex,
  value: ACTIVE_OBSERVATIONS.filter((o) => o.severity === severity).length,
}));

// ── 90-day weekly category trend: needs-attention/non-compliance items (same
// scope as OUTSTANDING and the category breakdowns — in-compliance isn't a
// tracked "issue"). For each category, how many of its items were OPEN as of
// each week — reported by then and not yet resolved before that week began.
// This is a cohort/aging view, not an opened-vs-closed event flow: a resolved
// item stays counted under every week it was actually open, through its own
// report week — not double-counted as a separate "resolved this week" event.
// Feeds the Timeline Explorer's per-category sparkline tiles.
const TREND_ITEMS = OBSERVATIONS.filter((o) => o.severity !== 'in-compliance');

/** ISO week-start dates, oldest first — the shared x-axis for the trend tiles. */
export const TREND_WEEK_STARTS: string[] = (() => {
  const start = toUTC(TODAY) - 89 * 86_400_000;
  return Array.from({ length: 13 }, (_, w) => new Date(start + w * 7 * 86_400_000).toISOString().slice(0, 10));
})();

// A fixed categorical color per concern category (no design-system token for
// chart-series color exists yet — logged in docs/system-improvement-ledger.md
// — so these are deliberate literal hex, not raw values standing in for a
// missing token). Order/hues follow the validated 8-slot categorical palette;
// "red" is deliberately skipped so no category tile is mistaken for the
// severity donut's non-compliance red elsewhere on this same dashboard.
export const CATEGORY_COLOR: Record<ObservationCategory, string> = {
  'Access & Traffic Control': '#2a78d6',
  'Cultural Resources Protection': '#eb6834',
  'Erosion & Sediment Control': '#1baf7a',
  'Noise Management': '#eda100',
  'Spill Prevention & Response': '#e87ba4',
  'Stormwater / BMP Maintenance': '#008300',
  'Vegetation & Habitat Protection': '#4a3aa7',
  'Waste Management': '#8a5a44',
};

export interface CategoryTrend { category: ObservationCategory; color: string; weeklyOpen: number[]; }

export const CATEGORY_TREND: CategoryTrend[] = (() => {
  const weekBounds = TREND_WEEK_STARTS.map((iso) => {
    const weekStartMs = toUTC(iso);
    return { weekStartMs, weekEndMs: weekStartMs + 7 * 86_400_000 };
  });
  const categories = [...new Set(TREND_ITEMS.map((o) => o.category))].sort();
  return categories.map((category) => {
    const items = TREND_ITEMS.filter((o) => o.category === category);
    const weeklyOpen = weekBounds.map(({ weekStartMs, weekEndMs }) =>
      items.filter((o) => {
        const reported = toUTC(o.reportedDate);
        if (reported >= weekEndMs) return false; // not yet reported as of this week
        if (o.status === 'active') return true;
        return toUTC(o.resolvedDate!) >= weekStartMs; // not resolved before this week began
      }).length,
    );
    return { category, color: CATEGORY_COLOR[category], weeklyOpen };
  });
})();

// ── Site visits / daily reports — Fieldstone's field-inspector patrol log.
// The tracked-issue OBSERVATIONS above only cover the days something was
// actually flagged; a real monitoring program also files a report on ROUTINE
// days with nothing to report. This is that fuller log: every visit either
// cross-references the observation(s) actually logged that day (via
// observationIds) or is a routine patrol with none. Distinct from
// OBSERVATIONS — feeds the Daily Reports page only.
export interface SiteVisit {
  inspector: string;
  /** ISO date. */
  date: string;
  areas: (keyof typeof AREAS)[];
  /** Cross-references OBSERVATIONS ids logged during this visit, if any. */
  observationIds: string[];
}

export const SITE_VISITS: SiteVisit[] = [
  // ── R. Delgado — North/South Array, Access Road, Wash Crossing ──
  { inspector: 'R. Delgado', date: '2026-04-14', areas: ['northArray', 'southArray'], observationIds: [] },
  { inspector: 'R. Delgado', date: '2026-05-08', areas: ['southArray'], observationIds: ['obs-0088'] },
  { inspector: 'R. Delgado', date: '2026-05-22', areas: ['washCrossing'], observationIds: [] },
  { inspector: 'R. Delgado', date: '2026-06-05', areas: ['washCrossing'], observationIds: ['obs-0101'] },
  { inspector: 'R. Delgado', date: '2026-06-11', areas: ['southArray', 'northArray'], observationIds: [] },
  { inspector: 'R. Delgado', date: '2026-07-02', areas: ['accessRoad', 'washCrossing'], observationIds: [] },
  { inspector: 'R. Delgado', date: '2026-07-08', areas: ['washCrossing'], observationIds: ['obs-0118'] },
  { inspector: 'R. Delgado', date: '2026-07-23', areas: ['northArray'], observationIds: [] },
  { inspector: 'R. Delgado', date: '2026-07-27', areas: ['accessRoad'], observationIds: ['obs-0140'] },
  { inspector: 'R. Delgado', date: '2026-07-29', areas: ['southArray'], observationIds: ['obs-0142'] },
  { inspector: 'R. Delgado', date: '2026-07-30', areas: ['northArray'], observationIds: ['obs-0143'] },

  // ── K. Osei — Laydown/Staging Yard, O&M Building, Access Road ──
  { inspector: 'K. Osei', date: '2026-04-09', areas: ['laydownYard'], observationIds: [] },
  { inspector: 'K. Osei', date: '2026-04-21', areas: ['omBuilding'], observationIds: ['obs-0079'] },
  { inspector: 'K. Osei', date: '2026-05-04', areas: ['laydownYard'], observationIds: ['obs-0084'] },
  { inspector: 'K. Osei', date: '2026-05-19', areas: ['omBuilding', 'accessRoad'], observationIds: [] },
  { inspector: 'K. Osei', date: '2026-06-10', areas: ['laydownYard'], observationIds: [] },
  { inspector: 'K. Osei', date: '2026-06-18', areas: ['omBuilding'], observationIds: ['obs-0108'] },
  { inspector: 'K. Osei', date: '2026-07-01', areas: ['omBuilding'], observationIds: [] },
  { inspector: 'K. Osei', date: '2026-07-03', areas: ['accessRoad'], observationIds: ['obs-0113'] },
  { inspector: 'K. Osei', date: '2026-07-15', areas: ['accessRoad', 'laydownYard'], observationIds: [] },
  { inspector: 'K. Osei', date: '2026-07-20', areas: ['omBuilding'], observationIds: ['obs-0136'] },
  { inspector: 'K. Osei', date: '2026-07-21', areas: ['laydownYard'], observationIds: ['obs-0137'] },
  { inspector: 'K. Osei', date: '2026-07-24', areas: ['laydownYard'], observationIds: ['obs-0139'] },

  // ── T. Whitfield — Perimeter Fence West, Substation, BESS Pad ──
  { inspector: 'T. Whitfield', date: '2026-04-17', areas: ['perimeterWest'], observationIds: [] },
  { inspector: 'T. Whitfield', date: '2026-05-08', areas: ['substation', 'bess'], observationIds: [] },
  { inspector: 'T. Whitfield', date: '2026-05-19', areas: ['perimeterWest'], observationIds: ['obs-0092'] },
  { inspector: 'T. Whitfield', date: '2026-06-01', areas: ['perimeterWest'], observationIds: [] },
  { inspector: 'T. Whitfield', date: '2026-06-09', areas: ['substation'], observationIds: ['obs-0103'] },
  { inspector: 'T. Whitfield', date: '2026-06-15', areas: ['perimeterWest'], observationIds: ['obs-0106'] },
  { inspector: 'T. Whitfield', date: '2026-07-11', areas: ['perimeterWest'], observationIds: ['obs-0121'] },
  { inspector: 'T. Whitfield', date: '2026-07-13', areas: ['perimeterWest'], observationIds: ['obs-0125'] },
  { inspector: 'T. Whitfield', date: '2026-07-16', areas: ['substation'], observationIds: ['obs-0130'] },
  { inspector: 'T. Whitfield', date: '2026-07-17', areas: ['bess'], observationIds: ['obs-0132'] },
  { inspector: 'T. Whitfield', date: '2026-07-27', areas: ['substation'], observationIds: [] },
  { inspector: 'T. Whitfield', date: '2026-08-04', areas: ['perimeterWest', 'bess'], observationIds: [] },

  // ── J. Park — North Array, BESS Pad, Substation, Access Road ──
  { inspector: 'J. Park', date: '2026-04-30', areas: ['bess'], observationIds: [] },
  { inspector: 'J. Park', date: '2026-05-14', areas: ['substation'], observationIds: ['obs-0090'] },
  { inspector: 'J. Park', date: '2026-05-21', areas: ['substation', 'northArray'], observationIds: [] },
  { inspector: 'J. Park', date: '2026-05-27', areas: ['bess'], observationIds: ['obs-0096'] },
  { inspector: 'J. Park', date: '2026-06-18', areas: ['accessRoad'], observationIds: [] },
  { inspector: 'J. Park', date: '2026-06-22', areas: ['accessRoad'], observationIds: ['obs-0110'] },
  { inspector: 'J. Park', date: '2026-07-07', areas: ['substation'], observationIds: ['obs-0117'] },
  { inspector: 'J. Park', date: '2026-07-14', areas: ['bess'], observationIds: ['obs-0126'] },
  { inspector: 'J. Park', date: '2026-07-21', areas: ['northArray', 'bess'], observationIds: [] },
  { inspector: 'J. Park', date: '2026-08-01', areas: ['northArray'], observationIds: ['obs-0144'] },
  { inspector: 'J. Park', date: '2026-08-03', areas: ['northArray'], observationIds: ['obs-0145'] },
  { inspector: 'J. Park', date: '2026-08-04', areas: ['substation'], observationIds: [] },
];

// Report-workflow status — separate from compliance severity: this tracks the
// REPORT DOCUMENT's own paperwork lifecycle (has Fieldstone's office finished
// writing it up, has ESA reviewed it, is it finalized), matching the real
// Monitoring Portal's Daily Reports tab. Colors read this app's own existing
// semantic language (info = in-flight, warning = needs attention, success =
// done) rather than copying the reference screenshot's chip colors literally.
export type ReportStatus = 'draft' | 'in-review' | 'in-progress' | 'final';
export const REPORT_STATUS_META: Record<ReportStatus, { label: string; hex: string }> = {
  draft: { label: 'Draft', hex: 'var(--color-text-tertiary)' },
  'in-review': { label: 'In Review', hex: 'var(--color-info)' },
  'in-progress': { label: 'In Progress', hex: 'var(--color-warning)' },
  final: { label: 'Final', hex: 'var(--color-success)' },
};

/** Deterministic pipeline: newer reports haven't finished processing yet; a
 * report that flagged an issue stays "in progress" a little longer than a
 * routine one before it's finalized. */
function reportStatus(date: string, hasFindings: boolean): ReportStatus {
  const age = daysBetween(date, TODAY);
  if (age <= 2) return 'draft';
  if (age <= 6) return 'in-review';
  if (hasFindings && age <= 12) return 'in-progress';
  return 'final';
}

export interface DailyReport {
  id: string;
  inspector: string;
  date: string;
  status: ReportStatus;
  areaLabels: string[];
  summary: string;
  counts: { inCompliance: number; needsAttention: number; nonCompliance: number };
  reportFileName: string;
  observations: { id: string; category: ObservationCategory; severityLabel: string; description: string }[];
}

function summarize(counts: DailyReport['counts'], total: number): string {
  if (total === 0) return 'Routine patrol — no issues observed.';
  const parts = [
    counts.nonCompliance ? `${counts.nonCompliance} non-compliance` : '',
    counts.needsAttention ? `${counts.needsAttention} needs attention` : '',
    counts.inCompliance ? `${counts.inCompliance} in compliance` : '',
  ].filter(Boolean);
  return `${total} observation${total === 1 ? '' : 's'} logged: ${parts.join(', ')}.`;
}

/** One row per site visit, newest first — the Daily Reports grid's data. */
export const DAILY_REPORTS: DailyReport[] = SITE_VISITS.map((visit) => {
  const observations = visit.observationIds
    .map((id) => OBSERVATIONS.find((o) => o.id === id))
    .filter((o): o is Observation => Boolean(o));
  const counts = { inCompliance: 0, needsAttention: 0, nonCompliance: 0 };
  for (const o of observations) {
    if (o.severity === 'in-compliance') counts.inCompliance++;
    else if (o.severity === 'needs-attention') counts.needsAttention++;
    else counts.nonCompliance++;
  }
  const hasFindings = counts.needsAttention > 0 || counts.nonCompliance > 0;
  const inspectorSlug = visit.inspector.replace(/[^a-zA-Z]/g, '').toLowerCase();
  return {
    id: `${inspectorSlug}-${visit.date}`,
    inspector: visit.inspector,
    date: visit.date,
    status: reportStatus(visit.date, hasFindings),
    areaLabels: visit.areas.map((a) => AREAS[a].label),
    summary: summarize(counts, observations.length),
    counts,
    reportFileName: `cottonwood-dmr-${visit.date}-${inspectorSlug}.txt`,
    observations: observations.map((o) => ({
      id: o.id,
      category: o.category,
      severityLabel: SEVERITY_META[o.severity].label,
      description: o.description,
    })),
  };
}).sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.inspector.localeCompare(b.inspector)));
