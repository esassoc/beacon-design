// ─────────────────────────────────────────────────────────────────────────────
// Epic B — Interactive Map Dashboard (BCN-1267) fixture.
//
// The whole concept lives here: three layers (Permits, Segments, derived status)
// for the AWS Raul 2 pre-permit tracking demo. Hand-authored — these are REAL
// permits from the AWS plan-of-work, applied to a linear route traced roughly
// along US-12 through Walla Walla County, WA (centre ~46.06, -118.34).
//
// Nothing here is stored "derived" — segment status and clear-to-build date are
// COMPUTED from the permits covering each segment (see helpers at the bottom).
// ─────────────────────────────────────────────────────────────────────────────

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
  lineId: string;
  jurisdiction: string;
  lengthFt: number;
  /** Ordered [lat, lng] vertices for the Leaflet polyline. */
  geometry: [number, number][];
  /** Permits that gate construction of this segment. */
  permitIds: string[];
}

// ── Permits (real AWS plan-of-work permits) ──────────────────────────────────
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
];

// ── Segments (linear route ~US-12 through Walla Walla County) ─────────────────
// Path-wide permits (USACE NWP, WA DNR, SEPA) appear in MANY segments; ROW and
// shoreline permits are localized. Coordinates trace a rough W→E corridor.
export const segments: Segment[] = [
  {
    id: 'seg-01',
    name: 'Barnes RD to SR-12',
    lineId: 'Raul 2 — West Reach',
    jurisdiction: 'Walla Walla County',
    lengthFt: 4820,
    geometry: [
      [46.0712, -118.4361],
      [46.0689, -118.4218],
      [46.0671, -118.4087],
    ],
    permitIds: ['sepa-walla-walla', 'wa-dnr', 'usace-nwp', 'ww-county-row'],
  },
  {
    id: 'seg-02',
    name: 'SR-12 / Lowden Junction',
    lineId: 'Raul 2 — West Reach',
    jurisdiction: 'WSDOT',
    lengthFt: 3180,
    geometry: [
      [46.0671, -118.4087],
      [46.0648, -118.3962],
      [46.0631, -118.3841],
    ],
    permitIds: ['sepa-walla-walla', 'wa-dnr', 'usace-nwp', 'wsdot-uap'],
  },
  {
    id: 'seg-03',
    name: 'Touchet River Crossing',
    lineId: 'Raul 2 — West Reach',
    jurisdiction: 'WA Ecology / WDFW',
    lengthFt: 2240,
    geometry: [
      [46.0631, -118.3841],
      [46.0617, -118.3729],
      [46.0609, -118.3648],
    ],
    permitIds: ['sepa-walla-walla', 'usace-nwp', 'ecology-401', 'wdfw-hpa', 'wa-dnr'],
  },
  {
    id: 'seg-04',
    name: 'Ash Hollow RD to PDX',
    lineId: 'Raul 2 — Central Reach',
    jurisdiction: 'Walla Walla County',
    lengthFt: 5310,
    geometry: [
      [46.0609, -118.3648],
      [46.0594, -118.3501],
      [46.0581, -118.3372],
    ],
    permitIds: ['sepa-walla-walla', 'wa-dnr', 'usace-nwp', 'ecology-stormwater'],
  },
  {
    id: 'seg-05',
    name: 'US-12 / McNary Refuge',
    lineId: 'Raul 2 — Central Reach',
    jurisdiction: 'USFWS Refuge',
    lengthFt: 3940,
    geometry: [
      [46.0581, -118.3372],
      [46.0568, -118.3241],
      [46.0559, -118.3138],
    ],
    permitIds: ['sepa-walla-walla', 'usace-nwp', 'usfws-sf299', 'wa-dnr'],
  },
  {
    id: 'seg-06',
    name: 'McNary to Frenchtown',
    lineId: 'Raul 2 — Central Reach',
    jurisdiction: 'Walla Walla County',
    lengthFt: 2670,
    geometry: [
      [46.0559, -118.3138],
      [46.055, -118.3019],
      [46.0542, -118.2918],
    ],
    permitIds: ['sepa-walla-walla', 'wa-dnr', 'usace-nwp', 'ww-county-row'],
  },
  {
    id: 'seg-07',
    name: 'Frenchtown Shoreline Reach',
    lineId: 'Raul 2 — East Reach',
    jurisdiction: 'Walla Walla County (Shoreline)',
    lengthFt: 3120,
    geometry: [
      [46.0542, -118.2918],
      [46.0531, -118.2794],
      [46.0524, -118.2691],
    ],
    permitIds: ['sepa-walla-walla', 'usace-nwp', 'shoreline-ssd', 'wa-dnr', 'ecology-401'],
  },
  {
    id: 'seg-08',
    name: 'Frenchtown to Dixie RD',
    lineId: 'Raul 2 — East Reach',
    jurisdiction: 'WSDOT',
    lengthFt: 4480,
    geometry: [
      [46.0524, -118.2691],
      [46.0513, -118.2552],
      [46.0508, -118.2431],
    ],
    permitIds: ['sepa-walla-walla', 'wa-dnr', 'usace-nwp', 'wsdot-uap', 'ecology-stormwater'],
  },
  {
    id: 'seg-09',
    name: 'Dixie RD Tie-In',
    lineId: 'Raul 2 — East Reach',
    jurisdiction: 'Walla Walla County',
    lengthFt: 2050,
    geometry: [
      [46.0508, -118.2431],
      [46.0501, -118.2318],
      [46.0497, -118.2224],
    ],
    permitIds: ['sepa-walla-walla', 'wa-dnr', 'franchise'],
  },
  {
    id: 'seg-10',
    name: 'East Terminus / Mill Creek',
    lineId: 'Raul 2 — East Reach',
    jurisdiction: 'WA Ecology / WDFW',
    lengthFt: 1760,
    geometry: [
      [46.0497, -118.2224],
      [46.0489, -118.2106],
      [46.0484, -118.2008],
    ],
    permitIds: ['sepa-walla-walla', 'usace-nwp', 'ecology-401', 'wdfw-hpa', 'wa-dnr'],
  },
];

// ── Derived status model ─────────────────────────────────────────────────────

/** Status displayed for a segment (least-advanced gating permit). */
export type DerivedStatus =
  | 'not-started'
  | 'in-preparation'
  | 'submitted'
  | 'under-review'
  | 'cleared';

/** Advancement ordinal — higher is more advanced. `not-required` is off-ladder (null). */
const STATUS_ORDINAL: Record<PermitStatus, number | null> = {
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

/** Canonical status → label + color. "Cleared" = all gating permits issued = green. */
export const STATUS_META: Record<DerivedStatus, StatusMeta> = {
  'not-started': { key: 'not-started', label: 'Not Started', colorVar: '--bcn-gray-300', hex: '#bdbdbd' },
  'in-preparation': { key: 'in-preparation', label: 'In Preparation', colorVar: '--color-orange-300', hex: '#fab54f' },
  submitted: { key: 'submitted', label: 'Submitted', colorVar: '--color-blue-500', hex: '#699cc6' },
  'under-review': { key: 'under-review', label: 'Under Review', colorVar: '--color-warning', hex: '#f59e0b' },
  cleared: { key: 'cleared', label: 'Cleared to Construct', colorVar: '--color-success', hex: '#22c55e' },
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

/** Format YYYY-MM-DD → "Aug 15, 2026". */
export function formatDate(iso: string | null): string {
  if (!iso) return '—';
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[m - 1]} ${d}, ${y}`;
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

// ── Shared permit-status color (chips on Epic A's table MUST match the map) ───
// Same family as STATUS_META: not-started gray, in-preparation orange-300,
// submitted blue-500, under-review warning, issued = success/green (the map's
// "cleared" color). not-required is a muted neutral (off-ladder).
export interface PermitStatusMeta {
  label: string;
  colorVar: string;
  hex: string;
}
export const PERMIT_STATUS_META: Record<PermitStatus, PermitStatusMeta> = {
  'not-started': { label: 'Not Started', colorVar: '--bcn-gray-300', hex: '#bdbdbd' },
  'in-preparation': { label: 'In Preparation', colorVar: '--color-orange-300', hex: '#fab54f' },
  submitted: { label: 'Submitted', colorVar: '--color-blue-500', hex: '#699cc6' },
  'under-review': { label: 'Under Review', colorVar: '--color-warning', hex: '#f59e0b' },
  issued: { label: 'Issued', colorVar: '--color-success', hex: '#22c55e' },
  'not-required': { label: 'Not Required', colorVar: '--bcn-gray-400', hex: '#989898' },
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
