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
export const ESA_ROLE_LABEL = 'Third-Party Compliance QA';

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

/** Severity breakdown of the emphasized set — ACTIVE observations only. */
export const SEVERITY_BREAKDOWN: SeveritySlice[] = SEVERITY_ORDER.map((severity) => ({
  severity,
  label: SEVERITY_META[severity].label,
  hex: SEVERITY_META[severity].hex,
  value: ACTIVE_OBSERVATIONS.filter((o) => o.severity === severity).length,
}));

const ATTENTION_ACTIVE = ACTIVE_OBSERVATIONS.filter((o) => o.severity !== 'in-compliance');

/** Category breakdown of active needs-attention/non-compliance items — the "top issues" list. */
export const CATEGORY_BREAKDOWN: { category: ObservationCategory; value: number }[] = (() => {
  const counts = new Map<ObservationCategory, number>();
  for (const o of ATTENTION_ACTIVE) counts.set(o.category, (counts.get(o.category) ?? 0) + 1);
  return [...counts.entries()].map(([category, value]) => ({ category, value })).sort((a, b) => b.value - a.value);
})();

const ninetyDaysAgo = new Date(toUTC(TODAY) - 90 * 86_400_000).toISOString().slice(0, 10);

export const KPIS = {
  activeTotal: ACTIVE_OBSERVATIONS.length,
  needsAttentionActive: ACTIVE_OBSERVATIONS.filter((o) => o.severity === 'needs-attention').length,
  nonComplianceActive: ACTIVE_OBSERVATIONS.filter((o) => o.severity === 'non-compliance').length,
  avgDaysActiveOpen: Math.round(
    ATTENTION_ACTIVE.reduce((sum, o) => sum + daysActive(o), 0) / Math.max(1, ATTENTION_ACTIVE.length),
  ),
  resolvedLast90d: RESOLVED_OBSERVATIONS.filter((o) => o.resolvedDate! >= ninetyDaysAgo).length,
  avgDaysToResolve: Math.round(
    RESOLVED_OBSERVATIONS.reduce((sum, o) => sum + daysActive(o), 0) / Math.max(1, RESOLVED_OBSERVATIONS.length),
  ),
  esaReviewCoveragePct: Math.round((OBSERVATIONS.filter((o) => o.esaReviewed).length / OBSERVATIONS.length) * 100),
};

/** Outstanding items for the Attention panel — active, not-in-compliance, worst-first. */
export const OUTSTANDING = ATTENTION_ACTIVE
  .slice()
  .sort((a, b) => (a.severity === b.severity ? daysActive(b) - daysActive(a) : a.severity === 'non-compliance' ? -1 : 1));

// ── 90-day weekly trend: observations opened vs. resolved, most-recent last ──
export interface TrendWeek { weekStart: string; opened: number; resolved: number; }

export const TREND_90D: TrendWeek[] = (() => {
  const weeks: TrendWeek[] = [];
  const start = toUTC(TODAY) - 89 * 86_400_000;
  for (let w = 0; w < 13; w++) {
    const weekStartMs = start + w * 7 * 86_400_000;
    const weekEndMs = weekStartMs + 7 * 86_400_000;
    const weekStart = new Date(weekStartMs).toISOString().slice(0, 10);
    const opened = OBSERVATIONS.filter((o) => {
      const t = toUTC(o.reportedDate);
      return t >= weekStartMs && t < weekEndMs;
    }).length;
    const resolved = OBSERVATIONS.filter((o) => {
      if (!o.resolvedDate) return false;
      const t = toUTC(o.resolvedDate);
      return t >= weekStartMs && t < weekEndMs;
    }).length;
    weeks.push({ weekStart, opened, resolved });
  }
  return weeks;
})();
