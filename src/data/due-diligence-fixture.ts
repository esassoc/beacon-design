// Beale — Due Diligence data fixture. TWO-STEP siting flow:
//   1. Site Screening — five candidate PROPERTIES, code-named after California-grown
//      produce (a real M&A/due-diligence convention — keeps a candidate's identity
//      quiet before it's under contract), screened against five fixed acquisition
//      criteria. Only Project Almond passes all five; the other four each fail
//      exactly one, so the screening table demonstrates every criterion's failure
//      mode at least once.
//   2. Critical Issues Assessment — Project Almond's full single-site desktop
//      review (boundary → constraints → permits → CIA report), reusing the real
//      Kern County geometry and GIS findings originally authored for the
//      Mojave Stockyard BESS prototype, re-scoped to a Beale hyperscale data
//      center campus. The environmental constraints (fire hazard, hazardous
//      waste sites, biological critical habitat, cultural sensitivity, the
//      ephemeral wash) are unchanged BY DESIGN — the same parcel carries the
//      same desktop-review findings regardless of what gets built on it. What
//      changed: the project description, zoning fit, land use analysis, and
//      permit set (backup-generator air permit, NFPA 76, a utility large-load
//      interconnection agreement in place of a CAISO generation cluster).
//
// All content is invented and domain-credible, never derived from a real Beale
// document — see design-principles' mock-data rule. Real place names (Kern
// County, Mojave, the San Joaquin Valley Air Basin) are used for plausibility;
// the project, parcels, findings, and dates are fictional.

export type Region = 'central-valley' | 'socal';
export type Ownership = 'private' | 'public';
export type Risk = 'high' | 'medium' | 'low' | 'none';
export type Applicability = 'applicable' | 'potentially' | 'not-likely' | 'not-applicable';

/** Fixed acquisition criteria, in the order the screening table presents them. */
export const CRITERIA_LABELS: Record<'region' | 'ownership' | 'size' | 'zoning' | 'substation', string> = {
  region: 'Located in CA Central Valley or SoCal',
  ownership: 'Privately owned',
  size: '≥ 300 acres',
  zoning: 'Zoned light industrial or agriculture',
  substation: 'Within 1 mile of a substation',
};
export const CRITERIA_ORDER: (keyof typeof CRITERIA_LABELS)[] = [
  'region',
  'ownership',
  'size',
  'zoning',
  'substation',
];

export interface Candidate {
  id: string;
  codeName: string;
  county: string;
  city: string;
  region: Region;
  regionLabel: string;
  acres: number;
  ownership: Ownership;
  zoning: string;
  substationName: string;
  substationMiles: number;
  /** Assessor's Parcel Number(s) for the parcel(s) evaluated. */
  apns: string[];
  lat: number;
  lon: number;
  criteria: Record<keyof typeof CRITERIA_LABELS, boolean>;
  /** Set on the one criterion that fails, for the row/detail explanation. Undefined when allPass. */
  failReason?: string;
  screenedOn: string; // ISO date
}

export const CANDIDATES: Candidate[] = [
  {
    id: 'almond',
    codeName: 'Project Almond',
    county: 'Kern County',
    city: 'Mojave',
    region: 'socal',
    regionLabel: 'Southern California (high desert)',
    acres: 340,
    ownership: 'private',
    zoning: 'M-1 Light Industrial',
    substationName: 'Mojave Stockyard Substation (230 kV)',
    substationMiles: 0.6,
    apns: ['237-104-007', '237-104-008', '237-104-011', '237-104-014'],
    lat: 35.0517,
    lon: -118.176,
    criteria: { region: true, ownership: true, size: true, zoning: true, substation: true },
    screenedOn: '2026-06-02',
  },
  {
    id: 'grape',
    codeName: 'Project Grape',
    county: 'San Joaquin County',
    city: 'Lodi',
    region: 'central-valley',
    regionLabel: 'Central Valley',
    acres: 260,
    ownership: 'private',
    zoning: 'A-1 Agricultural',
    substationName: 'Lodi East Substation (115 kV)',
    substationMiles: 0.9,
    apns: ['049-260-014', '049-260-015'],
    lat: 38.1341,
    lon: -121.2722,
    criteria: { region: true, ownership: true, size: false, zoning: true, substation: true },
    failReason: 'At 260 acres, the assembled parcel falls short of the 300-acre floor.',
    screenedOn: '2026-06-02',
  },
  {
    id: 'strawberry',
    codeName: 'Project Strawberry',
    county: 'Ventura County',
    city: 'Oxnard',
    region: 'socal',
    regionLabel: 'Southern California (coastal)',
    acres: 315,
    ownership: 'public',
    zoning: 'A-E Exclusive Agricultural',
    substationName: 'Oxnard Substation (66 kV)',
    substationMiles: 0.7,
    apns: ['142-0-070-125'],
    lat: 34.1975,
    lon: -119.1771,
    criteria: { region: true, ownership: false, size: true, zoning: true, substation: true },
    failReason: 'Parcel is surplus land held by the Ventura County Watershed Protection District — a public agency, not a private seller.',
    screenedOn: '2026-06-02',
  },
  {
    id: 'tomato',
    codeName: 'Project Tomato',
    county: 'Fresno County',
    city: 'Firebaugh',
    region: 'central-valley',
    regionLabel: 'Central Valley',
    acres: 410,
    ownership: 'private',
    zoning: 'AE Agricultural',
    substationName: 'Firebaugh Substation (70 kV)',
    substationMiles: 2.3,
    apns: ['016-140-022', '016-140-023'],
    lat: 36.8558,
    lon: -120.4593,
    criteria: { region: true, ownership: true, size: true, zoning: true, substation: false },
    failReason: 'Nearest substation is 2.3 miles out — beyond the 1-mile interconnection-distance floor.',
    screenedOn: '2026-06-02',
  },
  {
    id: 'garlic',
    codeName: 'Project Garlic',
    county: 'San Bernardino County',
    city: 'Hesperia',
    region: 'socal',
    regionLabel: 'Southern California (high desert)',
    acres: 305,
    ownership: 'private',
    zoning: 'RC Rural Conservation (residential estate)',
    substationName: 'Hesperia Substation (115 kV)',
    substationMiles: 0.5,
    apns: ['3055-121-03'],
    lat: 34.4264,
    lon: -117.3009,
    criteria: { region: true, ownership: true, size: true, zoning: false, substation: true },
    failReason: 'Zoned Rural Conservation (residential estate) — neither light industrial nor agricultural; would need a rezone.',
    screenedOn: '2026-06-02',
  },
];

export const ADVANCED_CANDIDATE_ID = 'almond';
export const advancedCandidate = () => CANDIDATES.find((c) => c.id === ADVANCED_CANDIDATE_ID)!;

export function passCount(c: Candidate): number {
  return CRITERIA_ORDER.filter((k) => c.criteria[k]).length;
}
export function allPass(c: Candidate): boolean {
  return passCount(c) === CRITERIA_ORDER.length;
}

// ── Project Almond — the advanced site's project facts ──────────────────────────
export const PROJECT = {
  /** Short display name, once the project is advanced past screening — the AppShell
   *  project-switcher and in-page titles use this, not the screening-era codename. */
  name: 'Almond',
  codeName: 'Project Almond',
  formalName: 'Project Almond — Kern County, CA',
  developer: 'Beale',
  county: 'Kern County',
  city: 'Mojave, CA',
  address: '14250 Stockyard Road, Mojave, CA 93501 (unincorporated Kern County)',
  jurisdiction: 'Kern County (unincorporated)',
  leadAgency: 'Kern County Planning and Natural Resources Department',
  capacityLabel: '180 MW critical IT load (Phase 1)',
  capacityDetail: 'Four hyperscale data halls + a centralized utility yard; site master-planned to 320 MW at full build-out.',
  footprintAcres: 340,
  apns: ['237-104-007', '237-104-008', '237-104-011', '237-104-014'],
  zoning: 'M-1 Light Industrial',
  substationName: 'Mojave Stockyard Substation',
  substationKv: '230 kV',
  substationMiles: 0.6,
  utility: 'Southern California Edison',
  screenedOn: '2026-06-02',
  advancedOn: '2026-06-10',
  boundaryDrawnOn: '2026-06-12',
  createdBy: 'P. Anand',
  lastGisSync: '2026-08-18',
  team: [
    { name: 'Priya Anand', role: 'Project Manager' },
    { name: 'Marcus Reyes, AICP', role: 'Project Director · QA/QC' },
    { name: 'Talia Novak, PMP', role: 'Strategic Advisor' },
  ],
};

export const CRITICAL_ISSUES: string[] = [
  'Biological resources: the site is adjacent to designated Critical Habitat for the Mohave ground squirrel and carries CNDDB occurrences of burrowing owl and western Joshua tree — protocol surveys and possible incidental-take authorization are likely schedule-critical.',
  'Hazardous materials: two closed LUST sites and one open Voluntary Cleanup Program case sit within a mile of the boundary — a Phase I ESA is recommended before grading.',
  'Air quality: emergency standby generators serving the data halls will require a Kern County Air Pollution Control District permit — an early filing is recommended given APCD review timelines in a nonattainment air basin.',
  'Cultural resources: a records search with the South Central Coastal Information Center is pending; AB 52 tribal consultation should open through Kern County at the earliest planning milestone.',
  'Hydrology: an ephemeral wash crosses the southwest portion of the parcel — a delineation and SWPPP/drainage study will be required.',
  'Land use: the M-1 zoning fits the use, but the county is expected to require a Conditional Use Permit given the scale of backup generation and mechanical noise — confirm with a pre-application meeting.',
];

// ── GIS layers (Constraints Cross-Reference) ─────────────────────────────────────
export interface GisLayerIntersect { label: string; value: string }
export interface GisLayerFixture {
  id: string;
  name: string;
  category: string;
  features: number;
  risk: Risk;
  color: string;
  defaultOn: boolean;
  source: string;
  intersects: GisLayerIntersect[];
  nextSteps: string[];
}

export const RISK_HEX: Record<Risk, string> = {
  high: '#e5484d', // --color-danger
  medium: '#f59e0b', // --color-warning
  low: '#228be6', // --color-info
  none: '#8a9099', // neutral fallback (matches the map components' MARK_FALLBACK)
};

export const GIS_LAYERS: GisLayerFixture[] = [
  {
    id: 'jurisdictions',
    name: 'Jurisdictional Boundaries',
    category: 'Land Use',
    features: 1,
    risk: 'none',
    color: '#003f5c',
    defaultOn: true,
    source: 'Kern County GIS — last sync 2026-08-01',
    intersects: [{ label: 'Jurisdiction', value: 'Kern County (unincorporated)' }],
    nextSteps: ['Confirm dataset currency and update the site plan.'],
  },
  {
    id: 'zoning',
    name: 'Zoning',
    category: 'Land Use',
    features: 1,
    risk: 'medium',
    color: '#7a5195',
    defaultOn: true,
    source: 'Kern County Zoning Ordinance — last sync 2026-08-01',
    intersects: [{ label: 'Designation', value: 'M-1 Light Industrial' }],
    nextSteps: [
      'Confirm Conditional Use Permit path with Kern County Planning.',
      'Scope backup-generator noise study for the CUP application.',
    ],
  },
  {
    id: 'parcels',
    name: 'Parcels',
    category: 'Land Use',
    features: 4,
    risk: 'none',
    color: '#955196',
    defaultOn: true,
    source: 'Kern County Assessor — last sync 2026-08-01',
    intersects: [{ label: 'APNs', value: '237-104-007, 237-104-008, 237-104-011, 237-104-014' }],
    nextSteps: ['Carry finding into the CIA memorandum.'],
  },
  {
    id: 'fire-hazard',
    name: 'CAL FIRE Fire Hazard Severity Zone',
    category: 'Hazards',
    features: 1,
    risk: 'medium',
    color: '#d45087',
    defaultOn: true,
    source: 'CAL FIRE FHSZ (LRA + SRA) — 2025 update',
    intersects: [{ label: 'Overlap', value: 'NE corner in Moderate FHSZ (SRA)' }],
    nextSteps: [
      'Initiate SB 283 outreach to Kern County Fire (≥10 mo lead).',
      'Confirm NFPA 76 fire-protection spec for the data halls and generator yard.',
      'Document defensible-space setbacks on the site plan.',
    ],
  },
  {
    id: 'haz-waste',
    name: 'DTSC EnviroStor / SWRCB GeoTracker',
    category: 'Hazards',
    features: 3,
    risk: 'high',
    color: '#ef4444',
    defaultOn: true,
    source: 'DTSC EnviroStor + SWRCB GeoTracker — refreshed nightly',
    intersects: [{ label: 'Sites within 1 mi', value: '2 closed LUST + 1 open VCP' }],
    nextSteps: [
      'Order a Phase I ESA (ASTM E1527-21).',
      'Review EnviroStor + GeoTracker case files for closure conditions.',
      'Confirm no on-site listings before the grading permit.',
    ],
  },
  {
    id: 'biological',
    name: 'CNDDB + USFWS Critical Habitat',
    category: 'Biological',
    features: 3,
    risk: 'high',
    color: '#2e7571',
    defaultOn: true,
    source: 'CNDDB Q2 2026 release + USFWS IPaC',
    intersects: [{ label: 'Occurrences', value: 'Mohave ground squirrel Critical Habitat (adjacent); burrowing owl; western Joshua tree' }],
    nextSteps: [
      'Schedule a pre-construction Mohave ground squirrel survey.',
      'Run the CDFW 2012 burrowing owl protocol survey within 14 days of ground disturbance.',
      'Coordinate with USFWS on critical habitat consultation if take is unavoidable.',
    ],
  },
  {
    id: 'cultural',
    name: 'Cultural Sensitivity Area',
    category: 'Cultural',
    features: 1,
    risk: 'medium',
    color: '#d68910',
    defaultOn: true,
    source: 'SCCIC records search — initiated, results pending',
    intersects: [{ label: 'Sensitivity area', value: 'One area recorded within 1 mile' }],
    nextSteps: [
      'Await the SCCIC records search return.',
      'Open AB 52 consultation through Kern County at the earliest planning milestone.',
      'Plan tribal monitor coordination for ground disturbance.',
    ],
  },
  {
    id: 'water',
    name: 'NHD / NWI Hydrology',
    category: 'Water',
    features: 1,
    risk: 'medium',
    color: '#228be6',
    defaultOn: true,
    source: 'USGS NHD + USFWS NWI',
    intersects: [{ label: 'Feature', value: 'Ephemeral wash — confirmed federal + State jurisdiction' }],
    nextSteps: [
      'Wash delineated; confirmed as a jurisdictional Water of the U.S. (relatively permanent flow to a downstream tributary).',
      'Apply for a USACE Section 404 permit.',
      'Apply for the SWRCB Construction General Permit (SWPPP).',
    ],
  },
  {
    id: 'ag-williamson',
    name: 'FMMP + Williamson Act',
    category: 'Land Use',
    features: 0,
    risk: 'none',
    color: '#9aa373',
    defaultOn: false,
    source: 'CA Dept. of Conservation FMMP, 2024 update',
    intersects: [{ label: 'FMMP designation', value: 'Other Land — no Williamson Act contract' }],
    nextSteps: ['No additional action anticipated.'],
  },
  {
    id: 'transmission',
    name: 'Transmission Infrastructure',
    category: 'Infrastructure',
    features: 2,
    risk: 'none',
    color: '#0a6562',
    defaultOn: true,
    source: 'SCE facilities map — last sync 2026-07-15',
    intersects: [{ label: 'Nearest facility', value: 'Mojave Stockyard Substation, 230 kV — 0.6 mi' }],
    nextSteps: ['Confirm large-load interconnection queue position with SCE.'],
  },
];

// ── Permit matrix ─────────────────────────────────────────────────────────────────
export type PermitReviewStatus = 'preliminary' | 'confirmed';

export interface PermitFixture {
  id: string;
  agency: string;
  level: 'Local' | 'State' | 'Regional' | 'Federal' | 'Utility';
  name: string;
  requirement: string;
  applicability: Applicability;
  notes: string;
  /** Whether a technical expert has reviewed and confirmed this row, vs. the
   *  desktop-review default of preliminary. */
  reviewStatus: PermitReviewStatus;
}

export const PERMITS: PermitFixture[] = [
  {
    id: 'cup-site-plan',
    agency: 'Kern County Planning and Natural Resources Dept.',
    level: 'Local',
    name: 'Conditional Use Permit / Site Plan Review',
    requirement: 'Data center use with backup generation, in M-1 zoning',
    applicability: 'applicable',
    notes: 'Confirm CUP path and conditions at pre-application meeting.',
    reviewStatus: 'confirmed',
  },
  {
    id: 'building-electrical',
    agency: 'Kern County Building & Fire Depts.',
    level: 'Local',
    name: 'Building & Electrical Permit',
    requirement: 'Data hall construction, electrical service, fuel storage',
    applicability: 'applicable',
    notes: 'NFPA 76 fire-protection spec required in plan set.',
    reviewStatus: 'confirmed',
  },
  {
    id: 'fire-life-safety',
    agency: 'Kern County Fire Department',
    level: 'Local',
    name: 'Fire & Life Safety Review',
    requirement: 'Emergency generator fuel storage, fire-suppression design',
    applicability: 'applicable',
    notes: 'SB 283 outreach ≥ 10 months before application submittal.',
    reviewStatus: 'preliminary',
  },
  {
    id: 'generator-permit',
    agency: 'Kern County Air Pollution Control District',
    level: 'Regional',
    name: 'Emergency Standby Generator Permit',
    requirement: 'Diesel backup generation above district thresholds',
    applicability: 'applicable',
    notes: 'File early — San Joaquin Valley Air Basin is nonattainment for ozone/PM2.5.',
    reviewStatus: 'preliminary',
  },
  {
    id: 'swppp',
    agency: 'State Water Resources Control Board',
    level: 'State',
    name: 'Construction General Permit (SWPPP)',
    requirement: 'Stormwater discharge during grading and construction',
    applicability: 'applicable',
    notes: 'Coverage required before soil disturbance.',
    reviewStatus: 'confirmed',
  },
  {
    id: 'streambed-alteration',
    agency: 'California Dept. of Fish and Wildlife',
    level: 'State',
    name: 'Section 1602 Streambed Alteration Agreement',
    requirement: 'Work within the ephemeral wash',
    applicability: 'potentially',
    notes: 'Contingent on delineation results.',
    reviewStatus: 'preliminary',
  },
  {
    id: 'wqc-401',
    agency: 'Lahontan Regional Water Quality Control Board',
    level: 'Regional',
    name: 'Section 401 Water Quality Certification',
    requirement: 'Discharge affecting State waters',
    applicability: 'potentially',
    notes: 'Contingent on USACE/CDFW jurisdictional determination.',
    reviewStatus: 'preliminary',
  },
  {
    id: 'ite-2081',
    agency: 'California Dept. of Fish and Wildlife',
    level: 'State',
    name: 'Section 2081 Incidental Take Permit',
    requirement: 'Take of Mohave ground squirrel or western Joshua tree',
    applicability: 'potentially',
    notes: 'Contingent on protocol survey results.',
    reviewStatus: 'preliminary',
  },
  {
    id: 'section-7-10',
    agency: 'U.S. Fish and Wildlife Service',
    level: 'Federal',
    name: 'Section 7 / Section 10 Consultation',
    requirement: 'Effects to Mohave ground squirrel Critical Habitat',
    applicability: 'potentially',
    notes: 'A Section 10 permit can take 12–24 months — schedule-critical if triggered.',
    reviewStatus: 'preliminary',
  },
  {
    id: 'section-404',
    agency: 'U.S. Army Corps of Engineers',
    level: 'Federal',
    name: 'Section 404 Permit',
    requirement: 'Discharge to Waters of the U.S.',
    applicability: 'applicable',
    notes: 'A jurisdictional delineation confirmed the on-site wash connects to a downstream tributary with an indicator of relatively permanent flow, placing it within federal jurisdiction post-Sackett — a Section 404 permit is required.',
    reviewStatus: 'confirmed',
  },
  {
    id: 'sce-interconnection',
    agency: 'Southern California Edison',
    level: 'Utility',
    name: 'Large-Load Interconnection / Service Agreement',
    requirement: '180 MW critical-load service from the Mojave Stockyard Substation',
    applicability: 'applicable',
    notes: 'Confirm queue position and system-impact study timeline early — the long-lead item for the schedule.',
    reviewStatus: 'preliminary',
  },
];

export interface CeqaResourceFixture {
  name: string;
  construction: 'High' | 'Med' | 'Low' | '—';
  operations: 'High' | 'Med' | 'Low' | '—';
  notes: string;
}

export const CEQA_RESOURCES: CeqaResourceFixture[] = [
  { name: 'Aesthetics & Visual Resources', construction: 'Low', operations: 'Low', notes: 'Industrial corridor; standard lighting/glare design likely sufficient.' },
  { name: 'Agricultural Resources', construction: '—', operations: '—', notes: 'FMMP Other Land; no Williamson Act contract.' },
  { name: 'Air Quality', construction: 'Med', operations: 'Med', notes: 'Nonattainment air basin; backup-generator permitting is the operations driver.' },
  { name: 'Biological Resources', construction: 'High', operations: 'Low', notes: 'Critical habitat adjacency and CNDDB occurrences — construction-phase surveys are the primary driver.' },
  { name: 'Cultural & Tribal Resources', construction: 'Med', operations: '—', notes: 'SCCIC search pending; AB 52 consultation to open at NOP.' },
  { name: 'Energy', construction: 'Low', operations: 'Med', notes: 'Large-load interconnection is a feasibility item, not typically a CEQA impact driver.' },
  { name: 'Greenhouse Gas Emissions', construction: 'Low', operations: 'Med', notes: 'Backup generator run-hours and grid-mix emissions factor into the GHG inventory.' },
  { name: 'Hazards & Hazardous Materials', construction: 'High', operations: 'Low', notes: 'Nearby LUST/VCP sites; Phase I ESA recommended pre-grading.' },
  { name: 'Hydrology & Water Quality', construction: 'Med', operations: 'Low', notes: 'Ephemeral wash on parcel; SWPPP + drainage study required.' },
  { name: 'Land Use & Planning', construction: '—', operations: 'Med', notes: 'CUP anticipated under M-1 zoning; no GPA/rezone anticipated.' },
  { name: 'Noise', construction: 'Med', operations: 'Med', notes: 'Mechanical/generator noise at the nearest receptor — acoustic study recommended.' },
  { name: 'Public Services & Wildfire', construction: 'Low', operations: 'Med', notes: 'Moderate FHSZ overlap at the NE corner; SB 283 fire-authority outreach required.' },
  { name: 'Transportation', construction: 'Med', operations: 'Low', notes: 'Construction traffic on Stockyard Road; minimal permanent trip generation.' },
  { name: 'Utilities & Service Systems', construction: '—', operations: 'Med', notes: 'Large-load interconnection queue position is the long-lead item.' },
];

export interface AhjNoteFixture { topic: string; summary: string }
export const AHJ_NOTES: AhjNoteFixture[] = [
  {
    topic: 'Kern County Planning Commission',
    summary: 'Two prior large-load industrial CUP hearings (a cold-storage facility and a BESS project) in the past 18 months — both approved with standard conditions on noise and lighting. No public comment specific to data centers on record yet.',
  },
  {
    topic: 'Kern County Fire Department',
    summary: 'Department has reviewed backup-generator fuel storage plans for two prior industrial projects in the corridor; staff indicated NFPA 76 familiarity is limited and requested an early pre-application walk-through.',
  },
];

// ── CIA report content ────────────────────────────────────────────────────────────
export interface ReportResource {
  id: string;
  number: string;
  title: string;
  risk: Risk;
  leadAgency?: string;
  findings: string[];
  recommendations: string[];
  aiNote?: string;
}

export const REPORT_RESOURCES: ReportResource[] = [
  {
    id: 'land-use',
    number: '3.1',
    title: 'Land Use, Zoning & Planning',
    risk: 'medium',
    leadAgency: 'Kern County Planning and Natural Resources Department',
    findings: [
      'The Project site is designated M-1 (Light Industrial) under the Kern County zoning ordinance, with an underlying General Plan designation of Industrial Employment Center. Data center use with on-site backup generation is consistent with the zoning, but is expected to require a Conditional Use Permit (CUP) given the scale of standby generation and mechanical equipment.',
      'The Project is consistent with applicable SCAG- and county-level goals for industrial and infrastructure development in the high-desert corridor. Setback and access requirements will be confirmed during the CUP application, including generator-yard separation distances and County Fire access standards.',
    ],
    recommendations: [
      'Beale should request a pre-application consultation with Kern County Planning to confirm the CUP path, SB 283 fire-outreach timing, and anticipated conditions of approval. No General Plan Amendment or rezoning is anticipated.',
    ],
  },
  {
    id: 'aesthetics',
    number: '3.2',
    title: 'Aesthetics & Visual Resources',
    risk: 'low',
    findings: [
      'No State scenic highways or locally designated scenic corridors traverse the area. The site sits within an existing industrial corridor with adjacent industrial development providing visual context. Public viewers are primarily limited to motorists along Stockyard Road. Kern County does not maintain a dark-sky overlay applicable to the Project area, though 24/7 facility lighting warrants standard shielding.',
    ],
    recommendations: [
      'Standard design considerations for fencing, downcast/shielded lighting, and structure reflectivity should be sufficient. No formal visual resources technical report is anticipated.',
    ],
  },
  {
    id: 'agriculture',
    number: '3.3',
    title: 'Agricultural Resources',
    risk: 'low',
    findings: [
      'The Project site is classified as Other Land under the California Department of Conservation Farmland Mapping and Monitoring Program (FMMP). There are no Williamson Act contracts associated with the parcels and no FMMP-designated Prime Farmland, Unique Farmland, or Farmland of Statewide Importance within or adjacent to the boundary.',
    ],
    recommendations: ['No additional action is anticipated for agricultural resources.'],
  },
  {
    id: 'air-quality',
    number: '3.4',
    title: 'Air Quality',
    risk: 'medium',
    leadAgency: 'Kern County Air Pollution Control District',
    findings: [
      'The Project site lies within the San Joaquin Valley Air Basin, a federal nonattainment area for ozone and PM2.5. The primary air-quality driver is not construction emissions but the emergency standby diesel generators serving the data halls, which require a Kern County Air Pollution Control District (KCAPCD) permit and compliance with applicable engine emission standards.',
    ],
    recommendations: [
      'Beale should initiate a pre-application consultation with KCAPCD early, given basin nonattainment status and district review timelines. Confirm engine tier requirements and any offset obligations before finalizing the generator specification.',
    ],
  },
  {
    id: 'biological',
    number: '3.5',
    title: 'Biological & Aquatic Resources',
    risk: 'high',
    leadAgency: 'U.S. Fish and Wildlife Service; California Dept. of Fish and Wildlife',
    findings: [
      'The Project site lies adjacent to designated Critical Habitat for the Mohave ground squirrel (federally listed) and within CNDDB sensitivity polygons for burrowing owl and western Joshua tree. A 5-mile CNDDB query also returned occurrences of desert tortoise, Le Conte’s thrasher, Swainson’s hawk (foraging only), and one record of prairie falcon. The site does not fall within a USFWS Habitat Conservation Plan (HCP) or CDFW Natural Community Conservation Plan (NCCP) area.',
      'An ephemeral wash traverses the southwestern portion of the parcel per the National Hydrography Dataset (NHD), consistent with riverine features in the USFWS National Wetlands Inventory (NWI). A jurisdictional delineation confirmed the wash connects to a downstream tributary exhibiting an indicator of relatively permanent flow — placing it within federal jurisdiction even post-Sackett v. EPA — so it is subject to Section 404 permitting, in addition to State jurisdiction.',
    ],
    aiNote: 'The CNDDB Q2 2026 refresh added one new occurrence of western Joshua tree within the parcel that was not present in the prior release. Verify before finalizing.',
    recommendations: [
      'ESA recommends a general biological reconnaissance survey to determine presence/absence of suitable habitat for special-status species on and near the site, informing whether focused protocol surveys are required (Mohave ground squirrel, CDFW 2012 burrowing owl protocol, western Joshua tree inventory). A biological technical report with mitigation measures is anticipated. If suitable desert tortoise habitat is present and would be affected, a federal incidental-take authorization may be required under ESA Section 7 or Section 10; a CDFW Section 2081 and/or Western Joshua Tree Conservation Act permit may also be required.',
      'ESA also recommends an aquatic resources delineation. If the ephemeral wash cannot be avoided, a Section 1602 Streambed Alteration Agreement with CDFW and a 401 Water Quality Certification from the Lahontan RWQCB are likely required.',
    ],
  },
  {
    id: 'cultural',
    number: '3.6',
    title: 'Cultural & Tribal Resources',
    risk: 'medium',
    leadAgency: 'Kern County (as CEQA lead agency)',
    findings: [
      'No known recorded cultural resources occur within the Project boundary based on publicly available data. One cultural sensitivity area is recorded within 1 mile. A records search request has been initiated with the South Central Coastal Information Center (SCCIC) of the California Historical Resources Information System (CHRIS); results are pending.',
    ],
    recommendations: [
      'ESA recommends Beale await the SCCIC return before finalizing site-disturbance plans. A pedestrian survey may be required depending on CHRIS results and County direction. AB 52 consultation should be initiated through Kern County at the Notice of Preparation stage; tribal monitor coordination during ground disturbance should be anticipated.',
    ],
  },
  {
    id: 'hazmat',
    number: '3.7',
    title: 'Hazardous Materials',
    risk: 'high',
    findings: [
      'The Project site is not listed in the DTSC EnviroStor or SWRCB GeoTracker databases. Within a 1-mile search radius, however, two closed Leaking Underground Storage Tank (LUST) sites and one open Voluntary Cleanup Program (VCP) case were identified.',
    ],
    recommendations: [
      'The presence of hazardous materials should be verified with a Phase I Environmental Site Assessment (ASTM E1527-21) prior to the grading-permit application. Review of DTSC EnviroStor and GeoTracker case files for closure conditions of nearby sites is recommended.',
    ],
  },
  {
    id: 'hydrology',
    number: '3.8',
    title: 'Hydrology & Water Quality',
    risk: 'medium',
    findings: [
      'The Project site is located within the Mojave Adjudicated groundwater basin. The NHD identifies one ephemeral wash crossing the southwestern portion of the parcel. The site is mapped as FEMA Zone X (outside the Special Flood Hazard Area). No Clean Water Act Section 303(d)-listed surface water segments would be affected.',
    ],
    recommendations: [
      'A drainage study and Stormwater Pollution Prevention Plan (SWPPP) will be required to protect identified drainage systems and ensure runoff meets NPDES standards. Coverage under the SWRCB Construction General Permit will be required prior to soil disturbance.',
    ],
  },
  {
    id: 'services',
    number: '3.9',
    title: 'Public Services & Wildfire',
    risk: 'medium',
    leadAgency: 'Kern County Fire Department',
    findings: [
      'Fire protection services are provided by Kern County Fire. Based on CAL FIRE FHSZ data, the northeast corner of the Project boundary overlaps a Moderate Fire Hazard Severity Zone (SRA portion); the remainder of the site is outside designated FHSZ. The site is approximately 0.6 mile from the existing Mojave Stockyard Substation. County Fire has reviewed backup-generator fuel storage plans for two prior industrial projects in the corridor.',
    ],
    recommendations: [
      'Given the scale of backup generation, Kern County Fire will review Project plans and provide comments during permitting. Early consultation on NFPA 76 compliance, emergency response planning, and fuel storage is recommended. SB 283 requires fire-authority outreach at least 10 months prior to application submittal; defensible-space setbacks should be documented on the site plan.',
    ],
  },
];

export const RESOURCE_SUMMARY_ROWS = REPORT_RESOURCES.map((r) => ({
  name: r.title,
  risk: r.risk,
  riskHex: RISK_HEX[r.risk],
  note: r.recommendations[0].split('. ').slice(0, 1).join('. ') + (r.recommendations[0].includes('. ') ? '.' : ''),
}));

export const LIMITATIONS = [
  {
    covered: 'Resources evaluated in this CIA',
    items: [
      'Land Use, Zoning & Planning',
      'Aesthetics & Visual Resources',
      'Agricultural Resources',
      'Air Quality',
      'Biological & Aquatic Resources',
      'Cultural & Tribal Resources',
      'Hazardous Materials',
      'Hydrology & Water Quality',
      'Public Services & Wildfire',
    ],
  },
  {
    covered: 'Deferred to the CEQA stage',
    items: [
      'Energy',
      'Greenhouse Gas Emissions',
      'Noise',
      'Transportation',
      'Utilities & Service Systems',
      'Geology, Soils & Paleontological Resources',
    ],
  },
];

export const REFERENCES: string[] = [
  'California Department of Conservation. Farmland Mapping and Monitoring Program (FMMP), 2024 update.',
  'California Department of Fish and Wildlife. California Natural Diversity Database (CNDDB), Q2 2026 release.',
  'CAL FIRE. Fire Hazard Severity Zone Maps (LRA + SRA), 2025 update.',
  'California Native Plant Society. Online Inventory of Rare and Endangered Plants.',
  'DTSC. EnviroStor Database, accessed 2026-08-18.',
  'FEMA. National Flood Hazard Layer, 2026.',
  'Kern County Air Pollution Control District. Permitting Guidance for Stationary Emergency Engines, 2025.',
  'SWRCB. GeoTracker Database, accessed 2026-08-18.',
  'U.S. Fish and Wildlife Service. Information for Planning and Consultation (IPaC) + Critical Habitat designations.',
  'USGS. National Hydrography Dataset (NHD); National Wetlands Inventory (NWI).',
];

export const FIGURES: string[] = [
  'Figure 1 — Project Location and Study Area',
  'Figure 2 — Aesthetic Resources & Public Viewers',
  'Figure 3 — Biological Resources (CNDDB & Critical Habitat)',
  'Figure 4 — Hydrologic Features (NHD, NWI, FEMA Flood Zones)',
  'Figure 5 — Zoning, General Plan, & Fire Hazard',
  'Appendix A — Full Permit & Approval Matrix (Excel export)',
  'Appendix B — CEQA Appendix G Considerations (optional task)',
  'Appendix C — AHJ Outreach Summary (optional task)',
];

// ── Overview page: activity feed + workflow status ────────────────────────────────
export interface ActivityEvent { text: string; emphasis?: string; by: string; when: string }
export const ACTIVITY: ActivityEvent[] = [
  { text: 'EnviroStor sync', emphasis: '2 closed LUST + 1 open VCP within 1 mi flagged as new high-severity findings.', by: 'System', when: '2 hr ago' },
  { text: 'CalFire FHSZ update', emphasis: 'NE corner of boundary now overlaps Moderate FHSZ (2025 update).', by: 'System', when: '1 day ago' },
  { text: 'Boundary defined', emphasis: 'Four parcels (237-104-007, -008, -011, -014) drawn as the 340-acre site boundary.', by: 'P. Anand', when: '2026-06-12' },
  { text: 'Advanced from Site Screening', emphasis: 'Passed all five acquisition criteria; advanced to Due Diligence.', by: 'P. Anand', when: '2026-06-10' },
  { text: 'Project created', by: 'P. Anand', when: '2026-06-02', emphasis: undefined },
];
