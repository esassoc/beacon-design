// ─────────────────────────────────────────────────────────────────────────────
// Permit Tracking fixture (BCN-1266 map + data, formerly Epics A/B BCN-1266/1267).
//
// Three layers: Permits, Segments, derived status — for the AWS pre-permit
// tracking demo. Permits are REAL (AWS plan-of-work, WA + OR agencies).
// Segments are REAL geometry: the four Phase-1 paths from the client KMZ
// ("Phase-1 05.27 — Paths 1_2_3_4"), extracted by scripts/kmz-to-routes.py
// into ./aws-routes.json (19 deduped segments, ~200 route-miles, Wallula WA →
// Umatilla OR). Which permits gate which segment is hand-curated below — the
// KMZ has no permit data.
//
// Nothing here is stored "derived" — segment status and clear-to-build date are
// COMPUTED from the permits covering each segment (see helpers at the bottom).
// ─────────────────────────────────────────────────────────────────────────────
import routesJson from './aws-routes.json';

/** Permit acquisition lifecycle (ordinal = advancement). `not-required` is off-ladder. */
export type PermitStatus =
  | 'not-started'
  | 'in-preparation'
  | 'submitted'
  | 'under-review'
  | 'issued'
  | 'not-required';

export type AgencyLevel = 'Federal' | 'State' | 'Local';

export interface Permit {
  id: string;
  name: string;
  agency: string;
  agencyLevel: AgencyLevel;
  status: PermitStatus;
  submittedDate?: string;
  estimatedApprovalDate?: string;
  actualApprovalDate?: string;
}

export interface Segment {
  id: string;
  name: string;
  /** The route line — 'Path 1' … 'Path 4' (from the KMZ Routes folders). */
  line: string;
  /** Build phases this segment appears in ('Day 1', 'Day 2', 'Risk Mitigation'). */
  phases: string[];
  /** Proposed build contractor from the KMZ subfolder (Fishel / IIG / Windwave). */
  contractor: string;
  jurisdiction: string;
  lengthFt: number;
  /** Ordered [lat, lng] vertices for the Leaflet polyline. */
  geometry: [number, number][];
  /** Permits that gate construction of this segment. */
  permitIds: string[];
}

// ── Permits (real AWS plan-of-work permits, WA + OR) ─────────────────────────
export const permits: Permit[] = [
  {
    id: 'usace-nwp',
    name: 'Nationwide Permit (Section 404)',
    agency: 'US Army Corps of Engineers',
    agencyLevel: 'Federal',
    status: 'issued',
    submittedDate: '2026-03-10',
    estimatedApprovalDate: '2026-08-15',
    actualApprovalDate: '2026-05-28',
  },
  {
    id: 'usfws-sf299',
    name: 'Refuge Right-of-Way (SF-299)',
    agency: 'US Fish & Wildlife Service',
    agencyLevel: 'Federal',
    status: 'issued',
    submittedDate: '2026-04-02',
    estimatedApprovalDate: '2026-09-30',
    actualApprovalDate: '2026-05-30',
  },
  {
    id: 'wsdot-uap',
    name: 'Utility Accommodation Permit',
    agency: 'WSDOT',
    agencyLevel: 'State',
    status: 'in-preparation',
    estimatedApprovalDate: '2026-07-20',
  },
  {
    id: 'ecology-401',
    name: 'Water Quality Certification (401)',
    agency: 'WA Dept. of Ecology',
    agencyLevel: 'State',
    status: 'under-review',
    submittedDate: '2026-03-28',
    estimatedApprovalDate: '2026-08-30',
  },
  {
    id: 'ecology-stormwater',
    name: 'Construction Stormwater (NPDES)',
    agency: 'WA Dept. of Ecology',
    agencyLevel: 'State',
    status: 'in-preparation',
    estimatedApprovalDate: '2026-07-15',
  },
  {
    id: 'wdfw-hpa',
    name: 'Hydraulic Project Approval (HPA)',
    agency: 'WA Dept. of Fish & Wildlife',
    agencyLevel: 'State',
    status: 'under-review',
    submittedDate: '2026-03-18',
    estimatedApprovalDate: '2026-08-10',
  },
  {
    id: 'wa-dnr',
    name: 'Aquatic Lands Use Authorization',
    agency: 'WA Dept. of Natural Resources',
    agencyLevel: 'State',
    status: 'issued',
    submittedDate: '2026-04-10',
    estimatedApprovalDate: '2026-09-15',
    actualApprovalDate: '2026-06-01',
  },
  {
    id: 'sepa-walla-walla',
    name: 'SEPA Environmental Review',
    agency: 'Walla Walla County (Lead Agency)',
    agencyLevel: 'Local',
    status: 'issued',
    submittedDate: '2026-01-15',
    estimatedApprovalDate: '2026-04-30',
    actualApprovalDate: '2026-04-22',
  },
  {
    id: 'ww-county-row',
    name: 'County Right-of-Way Permit',
    agency: 'Walla Walla County Public Works',
    agencyLevel: 'Local',
    status: 'issued',
    submittedDate: '2026-03-05',
    estimatedApprovalDate: '2026-07-25',
    actualApprovalDate: '2026-06-02',
  },
  {
    id: 'franchise',
    name: 'Franchise Agreement',
    agency: 'Walla Walla County',
    agencyLevel: 'Local',
    status: 'not-started',
    estimatedApprovalDate: '2026-10-15',
  },
  {
    id: 'shoreline-ssd',
    name: 'Shoreline Substantial Development / CUP',
    agency: 'Walla Walla County',
    agencyLevel: 'Local',
    status: 'submitted',
    submittedDate: '2026-04-05',
    estimatedApprovalDate: '2026-09-05',
  },
  // The Phase-1 paths cross into Oregon (Umatilla County) and Benton County, WA —
  // the agencies below gate those reaches.
  {
    id: 'odot-permit',
    name: 'Right-of-Way & Utility Permit',
    agency: 'Oregon DOT',
    agencyLevel: 'State',
    status: 'under-review',
    submittedDate: '2026-04-12',
    estimatedApprovalDate: '2026-08-20',
  },
  {
    id: 'or-dsl',
    name: 'Removal–Fill Permit',
    agency: 'Oregon Dept. of State Lands',
    agencyLevel: 'State',
    status: 'in-preparation',
    estimatedApprovalDate: '2026-09-25',
  },
  {
    id: 'uma-county-row',
    name: 'County Right-of-Way Permit',
    agency: 'Umatilla County Public Works',
    agencyLevel: 'Local',
    status: 'submitted',
    submittedDate: '2026-05-02',
    estimatedApprovalDate: '2026-09-10',
  },
  {
    id: 'benton-row',
    name: 'County Right-of-Way Permit',
    agency: 'Benton County Public Works',
    agencyLevel: 'Local',
    status: 'not-started',
    estimatedApprovalDate: '2026-11-01',
  },
];

// ── Segments (real Phase-1 route geometry ← aws-routes.json) ─────────────────
// Permit gating is curated to tell the demo story: Path 1 is the active build
// (cleared WA reaches, OR reaches in review), Path 2 is mid-flight, Path 3 is
// early (Benton County not started), the Risk Mitigation variant hasn't begun,
// Path 4 is a submitted shoreline spur.
const SEGMENT_PERMITS: Record<string, string[]> = {
  'seg-eas': ['sepa-walla-walla', 'ecology-401', 'wdfw-hpa'],
  'seg-1a': ['usace-nwp', 'odot-permit', 'uma-county-row'],
  'seg-1b': ['usace-nwp', 'odot-permit'],
  'seg-1c': ['or-dsl', 'uma-county-row', 'usace-nwp'],
  'seg-1e': ['sepa-walla-walla', 'wa-dnr', 'usace-nwp', 'ww-county-row'],
  'seg-1f': ['sepa-walla-walla', 'usace-nwp', 'wa-dnr', 'ww-county-row'],
  'seg-2a': ['usace-nwp', 'odot-permit', 'or-dsl', 'uma-county-row'],
  'seg-2b': ['sepa-walla-walla', 'usace-nwp', 'ecology-401', 'wdfw-hpa'],
  'seg-3a': ['or-dsl', 'uma-county-row'],
  'seg-3b': ['uma-county-row', 'usace-nwp'],
  'seg-3c': ['benton-row', 'ecology-stormwater'],
  'seg-3d': ['benton-row'],
  'seg-3e': ['benton-row', 'ecology-stormwater', 'usace-nwp'],
  'seg-3f': ['sepa-walla-walla', 'wsdot-uap'],
  'seg-3g': ['sepa-walla-walla', 'ww-county-row', 'usace-nwp'],
  'seg-3h': ['franchise', 'sepa-walla-walla'],
  'seg-3i': ['franchise'],
  'seg-3j': ['franchise', 'ww-county-row'],
  'seg-4a': ['shoreline-ssd', 'sepa-walla-walla', 'wa-dnr'],
};

export const segments: Segment[] = routesJson.features.map((f) => ({
  id: f.properties.id,
  name: f.properties.name,
  line: f.properties.line,
  phases: f.properties.phases,
  contractor: f.properties.contractor,
  jurisdiction: f.properties.jurisdiction,
  lengthFt: f.properties.lengthFt,
  // GeoJSON is [lng, lat]; Leaflet wants [lat, lng].
  geometry: f.geometry.coordinates.map(([lng, lat]) => [lat, lng] as [number, number]),
  permitIds: SEGMENT_PERMITS[f.properties.id] ?? [],
}));

/** The route lines, in display order, with rollup footage (drives the map's path filter). */
export interface LineSummary {
  id: string;
  segmentCount: number;
  lengthFt: number;
}
export const lines: LineSummary[] = [...new Set(segments.map((s) => s.line))].sort().map((id) => {
  const segs = segments.filter((s) => s.line === id);
  return { id, segmentCount: segs.length, lengthFt: segs.reduce((sum, s) => sum + s.lengthFt, 0) };
});

// ── Derived status model ─────────────────────────────────────────────────────

/** Status displayed for a segment (least-advanced gating permit). */
export type DerivedStatus =
  | 'not-started'
  | 'in-preparation'
  | 'submitted'
  | 'under-review'
  | 'cleared';

/** Advancement ordinal — higher is more advanced. `not-required` is off-ladder (null). */
export const STATUS_ORDINAL: Record<PermitStatus, number | null> = {
  'not-started': 0,
  'in-preparation': 1,
  submitted: 2,
  'under-review': 3,
  issued: 4,
  'not-required': null,
};

export interface StatusMeta {
  key: DerivedStatus;
  label: string;
  /** CSS custom-property name (no var()) so consumers can use it in JS + CSS. */
  colorVar: string;
  hex: string;
}

// ── Status color schemes ──────────────────────────────────────────────────────
// The page exposes these as live options on the map. ONE invariant across all
// schemes: green always means cleared. Every page surface (lines, chips,
// burndown, legend) reads the runtime --st-<status> custom properties, which
// default to the first scheme and are re-pointed by the switcher.
export interface ColorScheme {
  id: string;
  label: string;
  /** One line on what the palette is saying — shown in the switcher. */
  blurb: string;
  colors: Record<DerivedStatus, string>;
}

// All four schemes are READINESS ramps (red = far from buildable → green =
// cleared) — the chosen direction after the June 10 review. They differ on two
// axes: where the red→green pivot lands (balanced vs conservative) and how
// saturated the ink is (vivid vs print-map vs muted).
export const COLOR_SCHEMES: ColorScheme[] = [
  {
    id: 'cartographic',
    label: 'Cartographic',
    blurb: 'Soft print-map ramp (RdYlGn) — gentler ink over the basemap.',
    colors: {
      'not-started': '#d73027',
      'in-preparation': '#fc8d59',
      submitted: '#e3c14d',
      'under-review': '#91cf60',
      cleared: '#1a9850',
    },
  },
  {
    id: 'readiness',
    label: 'Readiness heat',
    blurb: 'Even spectrum — red through amber to green, balanced pivot at Submitted.',
    colors: {
      'not-started': '#dc2626',
      'in-preparation': '#f97316',
      submitted: '#eab308',
      'under-review': '#65a30d',
      cleared: '#16a34a',
    },
  },
  {
    id: 'conservative',
    label: 'Conservative',
    blurb: 'Red until proven green — nothing reads "warm" before agency review.',
    colors: {
      'not-started': '#991b1b',
      'in-preparation': '#dc2626',
      submitted: '#ea580c',
      'under-review': '#f59e0b',
      cleared: '#16a34a',
    },
  },
  {
    id: 'earth',
    label: 'Muted earth',
    blurb: 'Desaturated brick → olive — the quietest option, basemap stays legible.',
    colors: {
      'not-started': '#a13d32',
      'in-preparation': '#c47a3b',
      submitted: '#c9a227',
      'under-review': '#7d9a44',
      cleared: '#2f7d4f',
    },
  },
];

/** Canonical status → label + runtime color var (hex = first scheme, the SSR default). */
export const STATUS_META: Record<DerivedStatus, StatusMeta> = {
  'not-started': { key: 'not-started', label: 'Not Started', colorVar: '--st-not-started', hex: '#d73027' },
  'in-preparation': { key: 'in-preparation', label: 'In Preparation', colorVar: '--st-in-preparation', hex: '#fc8d59' },
  submitted: { key: 'submitted', label: 'Submitted', colorVar: '--st-submitted', hex: '#e3c14d' },
  'under-review': { key: 'under-review', label: 'Under Review', colorVar: '--st-under-review', hex: '#91cf60' },
  cleared: { key: 'cleared', label: 'Cleared to Construct', colorVar: '--st-cleared', hex: '#1a9850' },
};

/** Display order for legends + burndown (least → most advanced). */
export const STATUS_ORDER: DerivedStatus[] = [
  'not-started',
  'in-preparation',
  'submitted',
  'under-review',
  'cleared',
];

const PERMIT_BY_ID = new Map(permits.map((p) => [p.id, p]));

/** Gating permits for a segment (excludes `not-required`). */
export function gatingPermits(segment: Segment): Permit[] {
  return segment.permitIds
    .map((id) => PERMIT_BY_ID.get(id))
    .filter((p): p is Permit => !!p && p.status !== 'not-required');
}

/** Derived segment status = least-advanced gating permit (all issued → cleared). */
export function deriveStatus(segment: Segment): DerivedStatus {
  const gating = gatingPermits(segment);
  if (gating.length === 0) return 'cleared'; // nothing gates it
  let minOrdinal = Infinity;
  for (const p of gating) {
    const ord = STATUS_ORDINAL[p.status];
    if (ord !== null && ord < minOrdinal) minOrdinal = ord;
  }
  switch (minOrdinal) {
    case 0:
      return 'not-started';
    case 1:
      return 'in-preparation';
    case 2:
      return 'submitted';
    case 3:
      return 'under-review';
    default:
      return 'cleared';
  }
}

/** Projected clear-to-build date = latest approval date across gating permits. */
export function clearToBuildDate(segment: Segment): string | null {
  const dates = gatingPermits(segment)
    .map((p) => p.actualApprovalDate ?? p.estimatedApprovalDate)
    .filter((d): d is string => !!d);
  if (dates.length === 0) return null;
  return dates.reduce((a, b) => (a > b ? a : b));
}

/** Footage summed per derived status (the burndown metric). */
export function footageByStatus(): { status: DerivedStatus; feet: number }[] {
  const totals = new Map<DerivedStatus, number>(STATUS_ORDER.map((s) => [s, 0]));
  for (const seg of segments) {
    const s = deriveStatus(seg);
    totals.set(s, (totals.get(s) ?? 0) + seg.lengthFt);
  }
  return STATUS_ORDER.map((status) => ({ status, feet: totals.get(status) ?? 0 }));
}

export const totalFeet = (): number => segments.reduce((sum, s) => sum + s.lengthFt, 0);

// ── Reporting history (point-in-time snapshots) ──────────────────────────────
// Route-miles "Cleared to Construct" as recorded at each biweekly leadership
// review. This is the ONE thing that can't be derived from the current permit
// states — clearance is a running total, and a burn-up needs where it WAS, not
// just where it is. The series is frozen history; the live present value is
// always the derived total (footageByStatus → cleared), so the burn-up's "today"
// point and the "since last report" delta track real edits while the trail
// behind them stays put. Cumulative + monotonic; the last entry is the most
// recent completed review (strictly below today's derived ~10.6 mi, so momentum
// reads as forward motion). Early-phase honest: flat for months, lifting now.
export interface ReportSnapshot {
  /** Review date (YYYY-MM-DD). */
  date: string;
  /** Cumulative route-miles cleared to construct as of that review. */
  clearedMiles: number;
}
export const reportHistory: ReportSnapshot[] = [
  { date: '2026-03-30', clearedMiles: 0 },
  { date: '2026-04-13', clearedMiles: 0 },
  { date: '2026-04-27', clearedMiles: 0 },
  { date: '2026-05-11', clearedMiles: 0 },
  { date: '2026-05-25', clearedMiles: 2.9 },
  { date: '2026-06-08', clearedMiles: 7.4 }, // last completed review
];

/** The report's "as of" date — today, the moment this snapshot was generated. */
export const reportAsOf = '2026-06-23';

/** Latest projected clear-to-build across ALL segments = full-route clear date. */
export function fullRouteClearDate(): string | null {
  const dates = segments.map((s) => clearToBuildDate(s)).filter((d): d is string => !!d);
  return dates.length ? dates.reduce((a, b) => (a > b ? a : b)) : null;
}

/** Format YYYY-MM-DD → "Aug 15, 2026". */
export function formatDate(iso: string | null): string {
  if (!iso) return '—';
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[m - 1]} ${d}, ${y}`;
}

/** Format feet → "18.2 mi" (the corridor is ~200 mi — feet alone stops meaning anything). */
export function formatMiles(feet: number): string {
  return `${(feet / 5280).toFixed(1)} mi`;
}

export const PERMIT_STATUS_LABEL: Record<PermitStatus, string> = {
  'not-started': 'Not Started',
  'in-preparation': 'In Preparation',
  submitted: 'Submitted',
  'under-review': 'Under Review',
  issued: 'Issued',
  'not-required': 'Not Required',
};

/** esa-badge/esa-pill variant for a permit status chip. */
export const PERMIT_STATUS_VARIANT: Record<PermitStatus, 'default' | 'primary' | 'success' | 'warning' | 'info'> = {
  'not-started': 'default',
  'in-preparation': 'warning',
  submitted: 'info',
  'under-review': 'warning',
  issued: 'success',
  'not-required': 'default',
};

// ── Shared permit-status color (chips MUST match the map lines) ───────────────
// Permit ladder maps onto the same runtime --st-* vars: `issued` shares the
// cleared color, `not-required` is a fixed off-ladder neutral the schemes
// never re-point.
export interface PermitStatusMeta {
  label: string;
  colorVar: string;
  hex: string;
}
export const PERMIT_STATUS_META: Record<PermitStatus, PermitStatusMeta> = {
  'not-started': { label: 'Not Started', colorVar: '--st-not-started', hex: '#d73027' },
  'in-preparation': { label: 'In Preparation', colorVar: '--st-in-preparation', hex: '#fc8d59' },
  submitted: { label: 'Submitted', colorVar: '--st-submitted', hex: '#e3c14d' },
  'under-review': { label: 'Under Review', colorVar: '--st-under-review', hex: '#91cf60' },
  issued: { label: 'Issued', colorVar: '--st-cleared', hex: '#1a9850' },
  'not-required': { label: 'Not Required', colorVar: '--st-not-required', hex: '#989898' },
};

/** Display order for status filters/legends (least → most advanced; not-required last). */
export const PERMIT_STATUS_ORDER: PermitStatus[] = [
  'not-started',
  'in-preparation',
  'submitted',
  'under-review',
  'issued',
  'not-required',
];

/** Derive a short "Type" label from a permit (no `type` field in the data). */
export function permitType(permit: Permit): string {
  const n = permit.name.toLowerCase();
  if (n.includes('404') || n.includes('nationwide')) return 'Section 404';
  if (n.includes('401') || n.includes('water quality')) return '401 Certification';
  if (n.includes('stormwater') || n.includes('npdes')) return 'NPDES';
  if (n.includes('right-of-way') || n.includes('sf-299')) return 'Right-of-Way';
  if (n.includes('hydraulic') || n.includes('hpa')) return 'HPA';
  if (n.includes('utility accommodation')) return 'Utility';
  if (n.includes('aquatic lands')) return 'Aquatic Lands';
  if (n.includes('sepa') || n.includes('environmental review')) return 'SEPA';
  if (n.includes('franchise')) return 'Franchise';
  if (n.includes('shoreline')) return 'Shoreline';
  if (n.includes('removal')) return 'Removal–Fill';
  return 'Permit';
}

/** esa-badge variant for an agency level chip. */
export const LEVEL_VARIANT: Record<AgencyLevel, 'primary' | 'secondary' | 'info'> = {
  Federal: 'primary',
  State: 'info',
  Local: 'secondary',
};

const SEGMENTS_BY_PERMIT = new Map<string, number>();
for (const seg of segments) {
  for (const pid of seg.permitIds) {
    SEGMENTS_BY_PERMIT.set(pid, (SEGMENTS_BY_PERMIT.get(pid) ?? 0) + 1);
  }
}
/** How many segments include this permit in their permitIds. */
export const segmentCountForPermit = (permitId: string): number => SEGMENTS_BY_PERMIT.get(permitId) ?? 0;
