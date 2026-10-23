// Internal Permit Tracking: the fixture behind the standalone Permits app, a
// satellite in the Beacon family with its own navigation.
//
// One store, four views read it: the cross-project home, a project's permit
// register / timeline / submittal readiness, the jurisdiction permit catalog, and
// turnaround. Turnaround is never stored — it is derived from every issued permit's
// submitted → issued span, so a permit issued in one project feeds the "how long
// does this take here?" answer for the next.
//
// Shape starts from prod's permit Source (Name, ApprovingAgency, ReferenceNumber,
// AgencyContact, SourcePermitStatus / Level / Type, PermitSubmittedDate,
// PermitEstimatedApprovalDate, PermitActualApprovalDate, SourceFiles, status
// history). Everything else here — trigger, assignee, review rounds, expiration,
// conditions, dependencies, submittal requirements, the catalog — is new.
//
// Sample data is invented: projects, clients and people are made up. Jurisdictions,
// agencies and permit types are real Washington ones.

// ── Enums ─────────────────────────────────────────────────────────────────────

/** Prod's permit status ladder (SourcePermitStatus). `not-required` is off-ladder. */
export type PermitStatus =
  | 'not-started'
  | 'in-preparation'
  | 'submitted'
  | 'under-review'
  | 'issued'
  | 'not-required';

export type AgencyLevel = 'Federal' | 'State' | 'Local';

export type ProjectPhase = 'Permitting' | 'Construction' | 'Monitoring' | 'Closed';

/** Where a jurisdiction publishes what a permit application needs. */
export type RequirementSource = 'pdf' | 'code' | 'pre-app';

export interface StatusMeta {
  label: string;
  /** Semantic token the chip/dot reads. Never a raw ramp step. */
  tone: string;
  /** Ladder position; `not-required` is null. */
  ordinal: number | null;
}

export const STATUS_META: Record<PermitStatus, StatusMeta> = {
  'not-started': { label: 'Not Started', tone: 'var(--bcn-status-not-started)', ordinal: 0 },
  'in-preparation': { label: 'In Preparation', tone: 'var(--bcn-status-on-hold)', ordinal: 1 },
  submitted: { label: 'Submitted', tone: 'var(--bcn-status-in-progress)', ordinal: 2 },
  'under-review': { label: 'Under Agency Review', tone: 'var(--bcn-status-in-progress)', ordinal: 3 },
  issued: { label: 'Issued', tone: 'var(--bcn-status-completed)', ordinal: 4 },
  'not-required': { label: 'Not Required', tone: 'var(--bcn-status-not-started)', ordinal: null },
};

export const STATUS_ORDER: PermitStatus[] = [
  'not-started',
  'in-preparation',
  'submitted',
  'under-review',
  'issued',
  'not-required',
];

export const LEVEL_ORDER: AgencyLevel[] = ['Federal', 'State', 'Local'];

export const REQUIREMENT_SOURCE_LABEL: Record<RequirementSource, string> = {
  pdf: 'Submittal checklist (PDF)',
  code: 'Municipal code',
  'pre-app': 'Pre-application meeting',
};

// ── People ────────────────────────────────────────────────────────────────────

export interface Person {
  id: string;
  name: string;
  role: string;
}

export const PEOPLE: Person[] = [
  { id: 'maren', name: 'Maren Holt', role: 'Permitting Lead' },
  { id: 'owen', name: 'Owen Castillo', role: 'Project Manager' },
  { id: 'priya', name: 'Priya Raman', role: 'Biologist' },
  { id: 'devin', name: 'Devin Achebe', role: 'Project Manager' },
  { id: 'sam', name: 'Sam Whitford', role: 'Environmental Planner' },
  { id: 'lena', name: 'Lena Okafor', role: 'Wetland Scientist' },
];

/** The demo's signed-in user. */
export const CURRENT_USER_ID = 'maren';

export const personById = (id: string): Person | undefined => PEOPLE.find((p) => p.id === id);
export const personName = (id: string | undefined): string => (id ? (personById(id)?.name ?? '—') : '—');

// ── Jurisdictions + permit catalog ───────────────────────────────────────────

export interface Jurisdiction {
  id: string;
  name: string;
  /** Short form for dense cells. */
  short: string;
  level: AgencyLevel;
  /** Year the critical areas ordinance (or the governing code) was last updated. Local only. */
  codeUpdated?: number;
}

export const JURISDICTIONS: Jurisdiction[] = [
  { id: 'usace-seattle', name: 'U.S. Army Corps of Engineers, Seattle District', short: 'USACE Seattle District', level: 'Federal' },
  { id: 'nmfs', name: 'NOAA Fisheries, West Coast Region', short: 'NOAA Fisheries', level: 'Federal' },
  { id: 'usfws', name: 'U.S. Fish and Wildlife Service, Washington Office', short: 'USFWS', level: 'Federal' },
  { id: 'ecology', name: 'Washington Department of Ecology', short: 'Ecology', level: 'State' },
  { id: 'wdfw', name: 'Washington Department of Fish and Wildlife', short: 'WDFW', level: 'State' },
  { id: 'dahp', name: 'Department of Archaeology and Historic Preservation', short: 'DAHP', level: 'State' },
  { id: 'bothell', name: 'City of Bothell', short: 'Bothell', level: 'Local', codeUpdated: 2019 },
  { id: 'kent', name: 'City of Kent', short: 'Kent', level: 'Local', codeUpdated: 2025 },
  { id: 'king-county', name: 'King County', short: 'King County', level: 'Local', codeUpdated: 2021 },
  { id: 'thurston-county', name: 'Thurston County', short: 'Thurston County', level: 'Local', codeUpdated: 2018 },
];

export const jurisdictionById = (id: string): Jurisdiction | undefined => JURISDICTIONS.find((j) => j.id === id);

/** The canonical permit types a catalog entry maps its local name onto. */
export const PERMIT_TYPES = [
  'SEPA Review',
  'Conditional Use',
  'Shoreline Variance',
  'Shoreline Substantial Development',
  'Shoreline Exemption',
  'Critical Areas Review',
  'Clearing and Grading',
  'Right-of-Way Use',
  'Building',
  'Section 404',
  'Section 401 Water Quality Certification',
  'Construction Stormwater General Permit',
  'Hydraulic Project Approval',
  'ESA Section 7 Consultation',
  'Section 106 Consultation',
] as const;
export type PermitType = (typeof PERMIT_TYPES)[number];

/** One permit as a specific jurisdiction names and requires it. */
export interface CatalogEntry {
  id: string;
  jurisdictionId: string;
  /** What this jurisdiction calls it. */
  localName: string;
  /** Short local form ("CARP"), when the agency uses one. */
  abbreviation?: string;
  type: PermitType;
  source: RequirementSource;
  /** Where to find the source: the checklist title, the code chapter, or the meeting. */
  sourceRef: string;
  /** The submittal requirements a new permit of this kind starts with. */
  requirements: string[];
  /** Typical validity once issued, in months. */
  validMonths?: number;
}

export const CATALOG: CatalogEntry[] = [
  // ── City of Bothell ──
  {
    id: 'bothell-sepa',
    jurisdictionId: 'bothell',
    localName: 'SEPA Threshold Determination',
    type: 'SEPA Review',
    source: 'code',
    sourceRef: 'Bothell Municipal Code, Title 14 Environmental Policy',
    requirements: ['SEPA environmental checklist', 'Site plan', 'Critical areas report', 'Traffic impact analysis'],
  },
  {
    id: 'bothell-cup',
    jurisdictionId: 'bothell',
    localName: 'Conditional Use Permit',
    type: 'Conditional Use',
    source: 'code',
    sourceRef: 'Bothell Municipal Code, Title 12 Zoning',
    requirements: ['Land use application', 'Site plan', 'Project narrative', 'SEPA determination', 'Public notice mailing list'],
  },
  {
    id: 'bothell-shoreline-variance',
    jurisdictionId: 'bothell',
    localName: 'Shoreline Variance',
    type: 'Shoreline Variance',
    source: 'code',
    sourceRef: 'Bothell Shoreline Master Program',
    requirements: ['JARPA', 'Shoreline narrative', 'No-net-loss report', 'SEPA determination', 'Site plan with ordinary high water mark'],
    validMonths: 60,
  },
  {
    id: 'bothell-cao',
    jurisdictionId: 'bothell',
    localName: 'Critical Areas Approval',
    type: 'Critical Areas Review',
    source: 'code',
    sourceRef: 'Bothell Municipal Code, Title 14 Critical Areas',
    requirements: ['Critical areas report', 'Wetland delineation report', 'Buffer mitigation plan'],
  },
  {
    id: 'bothell-lda',
    jurisdictionId: 'bothell',
    localName: 'Land Disturbing Activity Permit',
    abbreviation: 'LDA',
    type: 'Clearing and Grading',
    source: 'pdf',
    sourceRef: 'Bothell LDA submittal checklist',
    requirements: [
      'Critical areas report',
      'Geotechnical report',
      'Temporary erosion and sediment control plan',
      'Stormwater site plan',
      'Tree retention plan',
      'SEPA determination',
    ],
    validMonths: 36,
  },
  {
    id: 'bothell-row',
    jurisdictionId: 'bothell',
    localName: 'Right-of-Way Use Permit',
    type: 'Right-of-Way Use',
    source: 'pdf',
    sourceRef: 'Bothell right-of-way permit application',
    requirements: ['Traffic control plan', 'Certificate of insurance', 'Restoration plan'],
    validMonths: 12,
  },
  {
    id: 'bothell-building',
    jurisdictionId: 'bothell',
    localName: 'Building Permit',
    type: 'Building',
    source: 'pdf',
    sourceRef: 'Bothell commercial building submittal checklist',
    requirements: ['Construction drawings', 'Structural calculations', 'Energy code compliance forms', 'Issued LDA permit'],
    validMonths: 18,
  },
  // ── City of Kent ──
  {
    id: 'kent-ssdp',
    jurisdictionId: 'kent',
    localName: 'Shoreline Substantial Development Permit',
    abbreviation: 'SSDP',
    type: 'Shoreline Substantial Development',
    source: 'code',
    sourceRef: 'Kent Shoreline Master Program (2025 update)',
    requirements: ['JARPA', 'Shoreline narrative', 'Critical areas report', 'SEPA determination'],
    validMonths: 60,
  },
  {
    id: 'kent-row',
    jurisdictionId: 'kent',
    localName: 'Street Use Permit',
    type: 'Right-of-Way Use',
    source: 'pdf',
    sourceRef: 'Kent street use application',
    requirements: ['Traffic control plan', 'Haul route plan', 'Certificate of insurance'],
    validMonths: 12,
  },
  // ── King County ──
  {
    id: 'kc-sepa',
    jurisdictionId: 'king-county',
    localName: 'SEPA Determination',
    type: 'SEPA Review',
    source: 'pdf',
    sourceRef: 'King County Permitting environmental checklist',
    requirements: ['SEPA environmental checklist', 'Critical areas report', 'Site plan'],
  },
  {
    id: 'kc-grading',
    jurisdictionId: 'king-county',
    localName: 'Clearing and Grading Permit',
    type: 'Clearing and Grading',
    source: 'pdf',
    sourceRef: 'King County clearing and grading submittal requirements',
    requirements: [
      'Critical areas report (reviewed with this permit)',
      'Geotechnical report',
      'Temporary erosion and sediment control plan',
      'Drainage review',
      'SEPA determination',
    ],
    validMonths: 24,
  },
  {
    id: 'kc-shoreline-exemption',
    jurisdictionId: 'king-county',
    localName: 'Shoreline Exemption',
    type: 'Shoreline Exemption',
    source: 'pdf',
    sourceRef: 'King County shoreline exemption request form',
    requirements: ['JARPA', 'Exemption justification letter', 'Site plan'],
  },
  // ── Thurston County ──
  {
    id: 'tc-sepa',
    jurisdictionId: 'thurston-county',
    localName: 'SEPA Determination',
    type: 'SEPA Review',
    source: 'pre-app',
    sourceRef: 'Thurston County pre-application meeting',
    requirements: ['SEPA environmental checklist', 'Critical areas report', 'Cultural resources survey'],
  },
  {
    id: 'tc-carp',
    jurisdictionId: 'thurston-county',
    localName: 'Critical Areas Review Permit',
    abbreviation: 'CARP',
    type: 'Critical Areas Review',
    source: 'pre-app',
    sourceRef: 'Thurston County pre-application meeting',
    requirements: ['Critical areas report', 'Habitat management plan', 'Geotechnical report', 'Mitigation plan'],
    validMonths: 36,
  },
  {
    id: 'tc-ssdp',
    jurisdictionId: 'thurston-county',
    localName: 'Shoreline Substantial Development Permit',
    abbreviation: 'SSDP',
    type: 'Shoreline Substantial Development',
    source: 'code',
    sourceRef: 'Thurston County Shoreline Master Program',
    requirements: ['JARPA', 'Shoreline narrative', 'SEPA determination', 'No-net-loss report'],
    validMonths: 60,
  },
  {
    id: 'tc-grading',
    jurisdictionId: 'thurston-county',
    localName: 'Grading Permit',
    type: 'Clearing and Grading',
    source: 'pdf',
    sourceRef: 'Thurston County grading permit checklist',
    requirements: ['Grading plan', 'Temporary erosion and sediment control plan', 'Issued CARP'],
    validMonths: 24,
  },
  // ── State ──
  {
    id: 'ecology-401',
    jurisdictionId: 'ecology',
    localName: 'Section 401 Water Quality Certification',
    type: 'Section 401 Water Quality Certification',
    source: 'pdf',
    sourceRef: 'Ecology 401 certification request',
    requirements: ['Pre-filing meeting request', 'JARPA', 'Water quality monitoring plan', 'Mitigation plan'],
  },
  {
    id: 'ecology-cswgp',
    jurisdictionId: 'ecology',
    localName: 'Construction Stormwater General Permit',
    abbreviation: 'CSWGP',
    type: 'Construction Stormwater General Permit',
    source: 'pdf',
    sourceRef: 'Ecology CSWGP notice of intent',
    requirements: ['Notice of intent', 'Stormwater pollution prevention plan', 'Public notice (two publications)'],
    validMonths: 60,
  },
  {
    id: 'wdfw-hpa',
    jurisdictionId: 'wdfw',
    localName: 'Hydraulic Project Approval',
    abbreviation: 'HPA',
    type: 'Hydraulic Project Approval',
    source: 'pdf',
    sourceRef: 'WDFW APPS application',
    requirements: ['APPS application', 'Plan and section drawings', 'SEPA determination', 'Fish exclusion plan'],
    validMonths: 60,
  },
  {
    id: 'dahp-106',
    jurisdictionId: 'dahp',
    localName: 'Section 106 Review',
    type: 'Section 106 Consultation',
    source: 'pdf',
    sourceRef: 'DAHP WISAARD project submittal',
    requirements: ['Cultural resources survey', 'Area of potential effect map', 'Tribal consultation record'],
  },
  // ── Federal ──
  {
    id: 'usace-404-ip',
    jurisdictionId: 'usace-seattle',
    localName: 'Section 404 Individual Permit',
    type: 'Section 404',
    source: 'pdf',
    sourceRef: 'Seattle District JARPA checklist',
    requirements: [
      'JARPA',
      'Wetland delineation report',
      'Alternatives analysis',
      'Compensatory mitigation plan',
      'Biological assessment',
      'Cultural resources report',
    ],
    validMonths: 60,
  },
  {
    id: 'usace-404-nwp',
    jurisdictionId: 'usace-seattle',
    localName: 'Section 404 Nationwide Permit',
    abbreviation: 'NWP',
    type: 'Section 404',
    source: 'pdf',
    sourceRef: 'Seattle District JARPA checklist',
    requirements: ['JARPA', 'Wetland delineation report', 'Biological evaluation', 'Plan and section drawings'],
    validMonths: 24,
  },
  {
    id: 'nmfs-esa-formal',
    jurisdictionId: 'nmfs',
    localName: 'ESA Section 7 Formal Consultation',
    type: 'ESA Section 7 Consultation',
    source: 'pdf',
    sourceRef: 'NOAA Fisheries consultation initiation package',
    requirements: ['Biological assessment', 'Essential fish habitat assessment', 'Conservation measures'],
  },
  {
    id: 'usfws-esa-informal',
    jurisdictionId: 'usfws',
    localName: 'ESA Section 7 Informal Consultation',
    type: 'ESA Section 7 Consultation',
    source: 'pdf',
    sourceRef: 'USFWS consultation request',
    requirements: ['Biological evaluation', 'Species list (IPaC)', 'Effect determination'],
  },
];

export const catalogById = (id: string): CatalogEntry | undefined => CATALOG.find((c) => c.id === id);

// ── Projects ──────────────────────────────────────────────────────────────────

export interface PmTenure {
  personId: string;
  from: string;
  to?: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  /** City / county the work is in. */
  location: string;
  phase: ProjectPhase;
  started: string;
  sites: string[];
  /** Current ESA project manager first; earlier ones after. */
  pms: PmTenure[];
  /** Fully seeded (register, rounds, files, comments) vs a closed record feeding turnaround. */
  detailed: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'north-creek-commons',
    name: 'North Creek Commons',
    client: 'Lakeshore Mill Partners',
    location: 'Bothell, WA',
    phase: 'Construction',
    started: '2018-03-12',
    sites: ['Site A', 'Site B', 'Site C'],
    pms: [
      { personId: 'maren', from: '2026-08-11' },
      { personId: 'owen', from: '2018-03-12', to: '2026-08-10' },
    ],
    detailed: true,
  },
  {
    id: 'deschutes-bank-stabilization',
    name: 'Deschutes Bank Stabilization',
    client: 'Black Hills Water Cooperative',
    location: 'Thurston County, WA',
    phase: 'Permitting',
    started: '2025-11-03',
    sites: ['Reach 2'],
    pms: [{ personId: 'priya', from: '2025-11-03' }],
    detailed: true,
  },
  {
    id: 'green-river-levee-setback',
    name: 'Green River Levee Setback',
    client: 'Lower Green Flood District',
    location: 'Kent, WA',
    phase: 'Permitting',
    started: '2024-04-15',
    sites: ['North Reach', 'South Reach'],
    pms: [{ personId: 'devin', from: '2024-04-15' }],
    detailed: true,
  },
  {
    id: 'sammamish-trail-bridge',
    name: 'Sammamish Trail Bridge',
    client: 'Eastside Trails Alliance',
    location: 'Bothell, WA',
    phase: 'Closed',
    started: '2020-02-03',
    sites: ['Bridge'],
    pms: [{ personId: 'sam', from: '2020-02-03', to: '2023-06-30' }],
    detailed: false,
  },
  {
    id: 'tenino-prairie-restoration',
    name: 'Tenino Prairie Restoration',
    client: 'South Sound Land Trust',
    location: 'Thurston County, WA',
    phase: 'Monitoring',
    started: '2021-05-17',
    sites: ['Unit 1', 'Unit 2'],
    pms: [{ personId: 'priya', from: '2021-05-17' }],
    detailed: false,
  },
  {
    id: 'covington-creek-culvert',
    name: 'Covington Creek Culvert',
    client: 'Soos Basin Roads Partnership',
    location: 'King County, WA',
    phase: 'Closed',
    started: '2021-09-07',
    sites: ['Crossing'],
    pms: [{ personId: 'devin', from: '2021-09-07', to: '2024-03-29' }],
    detailed: false,
  },
  {
    id: 'horseshoe-lake-outfall',
    name: 'Horseshoe Lake Outfall',
    client: 'Yelm Prairie Utilities',
    location: 'Thurston County, WA',
    phase: 'Closed',
    started: '2022-01-10',
    sites: ['Outfall'],
    pms: [{ personId: 'lena', from: '2022-01-10', to: '2025-02-28' }],
    detailed: false,
  },
];

export const projectById = (id: string): Project | undefined => PROJECTS.find((p) => p.id === id);
export const currentPm = (p: Project): string => p.pms[0]?.personId ?? '';

// ── Permits ───────────────────────────────────────────────────────────────────

/** One agency review cycle: the package went in, the agency answered. */
export interface ReviewRound {
  /** Date the package (or resubmittal) went to the agency. */
  sent: string;
  /** Date the agency answered. Empty while the round is open. */
  returned?: string;
  /** What came back: comments to address, or the decision. */
  outcome?: 'comments' | 'decision';
}

/** "This permit can't move until that one has." */
export interface Dependency {
  permitId: string;
  needs: 'submitted' | 'issued';
}

export interface Requirement {
  id: string;
  label: string;
  done: boolean;
  /** When the item was finished (for done ones). */
  doneDate?: string;
  /** When it is the outcome of another permit in the register (e.g. a SEPA determination). */
  permitId?: string;
}

export type FileKind = 'Application' | 'Agency Comments' | 'Response to Comments' | 'Issued Permit';

export interface PermitFile {
  kind: FileKind;
  date: string;
  round?: number;
  /** The name it was uploaded under, kept for search. */
  original: string;
}

export interface PermitComment {
  authorId: string;
  date: string;
  text: string;
}

export interface Permit {
  id: string;
  projectId: string;
  catalogId: string;
  /** Display name as tracked on the project (local name + site qualifier). */
  name: string;
  site?: string;
  /** Why this permit applies. */
  trigger: string;
  assigneeId: string;
  status: PermitStatus;
  referenceNumber?: string;
  agencyContact?: string;
  rounds: ReviewRound[];
  estimatedIssueDate?: string;
  issuedDate?: string;
  expiresDate?: string;
  /** null = not known until the permit is issued. */
  conditions: boolean | null;
  conditionsCount?: number;
  /** Conditions are tracked in Beacon's compliance side (optional). */
  conditionsInBeacon?: boolean;
  dependsOn: Dependency[];
  requirements: Requirement[];
  files: PermitFile[];
  comments: PermitComment[];
}

/** Build a requirement list from a catalog entry, marking the done ones. */
function reqs(catalogId: string, done: Record<string, string | true> = {}, linked: Record<string, string> = {}): Requirement[] {
  const entry = catalogById(catalogId);
  if (!entry) return [];
  return entry.requirements.map((label, i) => {
    const d = done[label] ?? done['*'];
    return {
      id: `${catalogId}-r${i + 1}`,
      label,
      done: Boolean(d),
      doneDate: typeof d === 'string' ? d : undefined,
      permitId: linked[label],
    };
  });
}

/** Standard file trail for a set of rounds: application, comments, response, issued permit. */
function trail(rounds: ReviewRound[], issued?: string, originals: string[] = []): PermitFile[] {
  const files: PermitFile[] = [];
  let o = 0;
  const orig = (fallback: string) => originals[o++] ?? fallback;
  rounds.forEach((r, i) => {
    const n = i + 1;
    files.push({
      kind: n === 1 ? 'Application' : 'Response to Comments',
      date: r.sent,
      round: n,
      original: orig(n === 1 ? 'application.pdf' : `response_round${n}.pdf`),
    });
    if (r.returned && r.outcome === 'comments') {
      files.push({ kind: 'Agency Comments', date: r.returned, round: n, original: orig(`agency_comments_${n}.pdf`) });
    }
  });
  if (issued) files.push({ kind: 'Issued Permit', date: issued, original: orig('permit.pdf') });
  return files;
}

const ALL = { '*': true } as const;

const P = (p: Omit<Permit, 'files'> & { files?: PermitFile[]; originals?: string[] }): Permit => {
  const { originals, files, ...rest } = p;
  return { ...rest, files: files ?? trail(p.rounds, p.issuedDate, originals) };
};

// North Creek Commons — the inherited one: running since 2018, now in construction,
// three sites, its first PM gone. Every permit's history is here; the Site C LDA is
// the one that took the longest to find.
const NCC = 'north-creek-commons';
const northCreek: Permit[] = [
  P({
    id: 'ncc-esa',
    projectId: NCC,
    catalogId: 'nmfs-esa-formal',
    name: 'ESA Section 7 Formal Consultation',
    trigger: 'Corps permit for in-water work in North Creek (Chinook salmon critical habitat)',
    assigneeId: 'priya',
    status: 'issued',
    referenceNumber: 'WCRO-2019-01187',
    agencyContact: 'Consultation biologist, Lacey office',
    rounds: [
      { sent: '2019-08-14', returned: '2020-01-22', outcome: 'comments' },
      { sent: '2020-04-30', returned: '2020-10-05', outcome: 'comments' },
      { sent: '2020-12-11', returned: '2021-07-26', outcome: 'decision' },
    ],
    issuedDate: '2021-07-26',
    conditions: true,
    conditionsCount: 11,
    conditionsInBeacon: true,
    dependsOn: [],
    requirements: reqs('nmfs-esa-formal', ALL),
    originals: ['NCC_BA_final.pdf', 'NMFS addl info request.pdf', 'BA_rev2_FINAL_v3.pdf', 'NMFS_comments_round2.pdf', 'BA rev3 clean.pdf', 'WCRO-2019-01187 Biological Opinion.pdf'],
    comments: [
      { authorId: 'owen', date: '2021-07-27', text: 'Biological opinion is in. Twenty-three months from initiation. Terms and conditions copied into the construction monitoring plan.' },
    ],
  }),
  P({
    id: 'ncc-404',
    projectId: NCC,
    catalogId: 'usace-404-ip',
    name: 'Section 404 Individual Permit',
    trigger: 'Fill of 0.6 acres of Category III wetland and in-water work below ordinary high water',
    assigneeId: 'lena',
    status: 'issued',
    referenceNumber: 'NWS-2019-00431',
    agencyContact: 'Regulatory project manager, Seattle District',
    rounds: [
      { sent: '2019-06-03', returned: '2019-10-17', outcome: 'comments' },
      { sent: '2020-01-21', returned: '2020-06-08', outcome: 'comments' },
      { sent: '2020-09-14', returned: '2021-09-02', outcome: 'decision' },
    ],
    issuedDate: '2021-09-02',
    expiresDate: '2027-09-02',
    conditions: true,
    conditionsCount: 8,
    conditionsInBeacon: true,
    dependsOn: [
      { permitId: 'ncc-esa', needs: 'issued' },
      { permitId: 'ncc-401', needs: 'issued' },
    ],
    requirements: reqs('usace-404-ip', ALL),
    originals: ['JARPA_NorthCreek_signed.pdf', 'Corps comments 10-17-19.pdf', 'Response to USACE.docx', 'USACE 2nd round.pdf', 'resp2_final.pdf', 'NWS-2019-00431 permit.pdf'],
    comments: [
      { authorId: 'owen', date: '2026-07-30', text: 'Expires Sept 2026. Site C work below OHWM will not be done by then; we need a time extension request to the Corps before August.' },
      { authorId: 'maren', date: '2026-09-04', text: 'Corps granted the one-year time extension on Oct 9. New expiration is Sep 2, 2027; the extension letter is filed under Issued Permit.' },
    ],
  }),
  P({
    id: 'ncc-401',
    projectId: NCC,
    catalogId: 'ecology-401',
    name: 'Section 401 Water Quality Certification',
    trigger: 'Federal 404 permit requires state water quality certification',
    assigneeId: 'lena',
    status: 'issued',
    referenceNumber: 'ECY-WQC-2019-1162',
    rounds: [
      { sent: '2019-07-08', returned: '2019-12-02', outcome: 'comments' },
      { sent: '2020-03-16', returned: '2021-03-29', outcome: 'decision' },
    ],
    issuedDate: '2021-03-29',
    conditions: true,
    conditionsCount: 14,
    conditionsInBeacon: true,
    dependsOn: [{ permitId: 'ncc-sepa', needs: 'issued' }],
    requirements: reqs('ecology-401', ALL),
    comments: [],
  }),
  P({
    id: 'ncc-hpa',
    projectId: NCC,
    catalogId: 'wdfw-hpa',
    name: 'Hydraulic Project Approval',
    trigger: 'Work in and over North Creek, a fish-bearing stream',
    assigneeId: 'priya',
    status: 'issued',
    referenceNumber: '2021-4-118+01',
    rounds: [{ sent: '2021-03-01', returned: '2021-04-26', outcome: 'decision' }],
    issuedDate: '2021-04-26',
    expiresDate: '2026-12-15',
    conditions: true,
    conditionsCount: 22,
    dependsOn: [{ permitId: 'ncc-sepa', needs: 'issued' }],
    requirements: reqs('wdfw-hpa', ALL),
    comments: [],
  }),
  P({
    id: 'ncc-cswgp',
    projectId: NCC,
    catalogId: 'ecology-cswgp',
    name: 'Construction Stormwater General Permit',
    trigger: 'More than 1 acre of soil disturbance across the three sites',
    assigneeId: 'sam',
    status: 'issued',
    referenceNumber: 'WAR312744',
    rounds: [{ sent: '2021-04-05', returned: '2021-05-10', outcome: 'decision' }],
    issuedDate: '2021-05-10',
    expiresDate: '2030-12-31',
    conditions: true,
    conditionsCount: 6,
    dependsOn: [],
    requirements: reqs('ecology-cswgp', ALL),
    comments: [],
  }),
  P({
    id: 'ncc-sepa',
    projectId: NCC,
    catalogId: 'bothell-sepa',
    name: 'SEPA Threshold Determination',
    trigger: 'Mixed-use development over SEPA categorical exemption thresholds',
    assigneeId: 'sam',
    status: 'issued',
    referenceNumber: 'SEP2018-0219',
    rounds: [
      { sent: '2018-09-10', returned: '2018-12-14', outcome: 'comments' },
      { sent: '2019-02-04', returned: '2019-04-22', outcome: 'decision' },
    ],
    issuedDate: '2019-04-22',
    conditions: true,
    conditionsCount: 9,
    dependsOn: [],
    requirements: reqs('bothell-sepa', ALL),
    originals: ['SEPA checklist NCC.pdf', 'COB SEPA comments.pdf', 'SEPA checklist revised.pdf', 'MDNS SEP2018-0219.pdf'],
    comments: [],
  }),
  P({
    id: 'ncc-cao',
    projectId: NCC,
    catalogId: 'bothell-cao',
    name: 'Critical Areas Approval',
    trigger: 'Wetland and stream buffers on Sites A and C',
    assigneeId: 'lena',
    status: 'issued',
    referenceNumber: 'CAR2018-0077',
    rounds: [
      { sent: '2018-10-01', returned: '2019-01-28', outcome: 'comments' },
      { sent: '2019-04-08', returned: '2019-10-14', outcome: 'decision' },
    ],
    issuedDate: '2019-10-14',
    conditions: true,
    conditionsCount: 5,
    dependsOn: [{ permitId: 'ncc-sepa', needs: 'issued' }],
    requirements: reqs('bothell-cao', ALL),
    comments: [],
  }),
  P({
    id: 'ncc-cup',
    projectId: NCC,
    catalogId: 'bothell-cup',
    name: 'Conditional Use Permit',
    trigger: 'Residential use above ground-floor retail in a General Commercial zone',
    assigneeId: 'sam',
    status: 'issued',
    referenceNumber: 'CUP2019-0012',
    rounds: [{ sent: '2019-05-13', returned: '2019-11-18', outcome: 'decision' }],
    issuedDate: '2019-11-18',
    conditions: true,
    conditionsCount: 12,
    dependsOn: [{ permitId: 'ncc-sepa', needs: 'issued' }],
    requirements: reqs('bothell-cup', ALL),
    comments: [],
  }),
  P({
    id: 'ncc-shoreline',
    projectId: NCC,
    catalogId: 'bothell-shoreline-variance',
    name: 'Shoreline Variance',
    trigger: 'Pedestrian bridge footing inside the 50-foot shoreline setback',
    assigneeId: 'sam',
    status: 'issued',
    referenceNumber: 'SHR2019-0004',
    rounds: [
      { sent: '2019-06-17', returned: '2019-10-07', outcome: 'comments' },
      { sent: '2019-11-25', returned: '2020-02-24', outcome: 'decision' },
    ],
    issuedDate: '2020-02-24',
    expiresDate: '2027-02-24',
    conditions: true,
    conditionsCount: 7,
    dependsOn: [{ permitId: 'ncc-sepa', needs: 'issued' }],
    requirements: reqs('bothell-shoreline-variance', ALL),
    comments: [],
  }),
  P({
    id: 'ncc-lda-a',
    projectId: NCC,
    catalogId: 'bothell-lda',
    name: 'Land Disturbing Activity Permit, Site A',
    site: 'Site A',
    trigger: 'Clearing and grading over 500 cubic yards on Site A',
    assigneeId: 'sam',
    status: 'issued',
    referenceNumber: 'LDA2020-0311',
    rounds: [
      { sent: '2020-10-05', returned: '2021-01-11', outcome: 'comments' },
      { sent: '2021-02-22', returned: '2021-06-14', outcome: 'decision' },
    ],
    issuedDate: '2021-06-14',
    expiresDate: '2026-12-14',
    conditions: true,
    conditionsCount: 4,
    dependsOn: [
      { permitId: 'ncc-sepa', needs: 'issued' },
      { permitId: 'ncc-cao', needs: 'issued' },
    ],
    requirements: reqs('bothell-lda', ALL, { 'SEPA determination': 'ncc-sepa' }),
    comments: [],
  }),
  P({
    id: 'ncc-lda-b',
    projectId: NCC,
    catalogId: 'bothell-lda',
    name: 'Land Disturbing Activity Permit, Site B',
    site: 'Site B',
    trigger: 'Clearing and grading over 500 cubic yards on Site B',
    assigneeId: 'sam',
    status: 'issued',
    referenceNumber: 'LDA2021-0402',
    rounds: [{ sent: '2021-09-13', returned: '2022-03-07', outcome: 'decision' }],
    issuedDate: '2022-03-07',
    expiresDate: '2027-03-07',
    conditions: true,
    conditionsCount: 4,
    dependsOn: [{ permitId: 'ncc-sepa', needs: 'issued' }],
    requirements: reqs('bothell-lda', ALL, { 'SEPA determination': 'ncc-sepa' }),
    comments: [],
  }),
  P({
    id: 'ncc-lda-c',
    projectId: NCC,
    catalogId: 'bothell-lda',
    name: 'Land Disturbing Activity Permit, Site C',
    site: 'Site C',
    trigger: 'Clearing and grading within the North Creek stream buffer on Site C',
    assigneeId: 'maren',
    status: 'under-review',
    referenceNumber: 'LDA2024-0158',
    agencyContact: 'Permit technician, Bothell Community Development',
    rounds: [
      { sent: '2024-05-20', returned: '2024-09-03', outcome: 'comments' },
      { sent: '2025-03-10', returned: '2025-07-21', outcome: 'comments' },
      { sent: '2026-09-28' },
    ],
    estimatedIssueDate: '2027-01-15',
    conditions: null,
    dependsOn: [
      { permitId: 'ncc-sepa', needs: 'issued' },
      { permitId: 'ncc-cao', needs: 'issued' },
    ],
    requirements: reqs(
      'bothell-lda',
      {
        'Critical areas report': '2024-04-30',
        'Geotechnical report': '2024-05-06',
        'Temporary erosion and sediment control plan': '2025-02-24',
        'Stormwater site plan': '2026-09-15',
        'Tree retention plan': '2024-05-13',
        'SEPA determination': '2019-04-22',
      },
      { 'SEPA determination': 'ncc-sepa' },
    ),
    originals: [
      'LDA_SiteC_app.pdf',
      'Bothell LDA comments 9.3.24.pdf',
      'LDA SiteC resubmittal FINAL v2 (1).pdf',
      'COB 2nd review ltr.pdf',
      'SiteC_LDA_rev3_FINAL_revised.pdf',
    ],
    comments: [
      { authorId: 'owen', date: '2025-07-23', text: 'Second round comments are mostly stormwater: they want the vault sized to the 2024 manual. Civil is on it.' },
      { authorId: 'maren', date: '2026-08-14', text: 'Picked this up from Owen. The rev 3 package was sitting unsent in the project folder under a different name; filed it here and confirmed with the city it is the right permit number.' },
      { authorId: 'maren', date: '2026-09-28', text: 'Round 3 resubmitted with the revised stormwater site plan. City says 8 to 12 weeks.' },
    ],
  }),
  P({
    id: 'ncc-row',
    projectId: NCC,
    catalogId: 'bothell-row',
    name: 'Right-of-Way Use Permit',
    trigger: 'Frontage improvements and lane closures on NE 185th St',
    assigneeId: 'sam',
    status: 'issued',
    referenceNumber: 'ROW2025-0933',
    rounds: [{ sent: '2025-10-06', returned: '2025-11-24', outcome: 'decision' }],
    issuedDate: '2025-11-24',
    expiresDate: '2026-11-24',
    conditions: true,
    conditionsCount: 3,
    dependsOn: [],
    requirements: reqs('bothell-row', ALL),
    comments: [],
  }),
  P({
    id: 'ncc-bldg-a',
    projectId: NCC,
    catalogId: 'bothell-building',
    name: 'Building Permit, Site A',
    site: 'Site A',
    trigger: 'Five-story mixed-use building',
    assigneeId: 'sam',
    status: 'issued',
    referenceNumber: 'BLD2022-1874',
    rounds: [
      { sent: '2022-06-06', returned: '2022-10-03', outcome: 'comments' },
      { sent: '2022-12-12', returned: '2023-08-21', outcome: 'decision' },
    ],
    issuedDate: '2023-08-21',
    expiresDate: '2027-02-21',
    conditions: false,
    dependsOn: [{ permitId: 'ncc-lda-a', needs: 'issued' }],
    requirements: reqs('bothell-building', ALL, { 'Issued LDA permit': 'ncc-lda-a' }),
    comments: [],
  }),
  P({
    id: 'ncc-bldg-b',
    projectId: NCC,
    catalogId: 'bothell-building',
    name: 'Building Permit, Site B',
    site: 'Site B',
    trigger: 'Four-story residential building with structured parking',
    assigneeId: 'sam',
    status: 'issued',
    referenceNumber: 'BLD2023-0442',
    rounds: [{ sent: '2023-05-15', returned: '2024-01-22', outcome: 'decision' }],
    issuedDate: '2024-01-22',
    expiresDate: '2026-12-22',
    conditions: false,
    dependsOn: [{ permitId: 'ncc-lda-b', needs: 'issued' }],
    requirements: reqs('bothell-building', ALL, { 'Issued LDA permit': 'ncc-lda-b' }),
    comments: [],
  }),
  P({
    id: 'ncc-bldg-c',
    projectId: NCC,
    catalogId: 'bothell-building',
    name: 'Building Permit, Site C',
    site: 'Site C',
    trigger: 'Three-story office building',
    assigneeId: 'maren',
    status: 'in-preparation',
    rounds: [],
    estimatedIssueDate: '2027-09-30',
    conditions: null,
    dependsOn: [{ permitId: 'ncc-lda-c', needs: 'issued' }],
    requirements: reqs(
      'bothell-building',
      { 'Construction drawings': '2026-06-30', 'Structural calculations': '2026-07-17' },
      { 'Issued LDA permit': 'ncc-lda-c' },
    ),
    comments: [],
  }),
];

// Deschutes Bank Stabilization — mid-permitting in Thurston County, where the
// critical areas review is a CARP and the requirements came out of a pre-app meeting.
const DBS = 'deschutes-bank-stabilization';
const deschutes: Permit[] = [
  P({
    id: 'dbs-sepa',
    projectId: DBS,
    catalogId: 'tc-sepa',
    name: 'SEPA Determination',
    trigger: 'Bank stabilization below ordinary high water of the Deschutes River',
    assigneeId: 'priya',
    status: 'under-review',
    referenceNumber: '2026101478',
    rounds: [{ sent: '2026-07-27' }],
    estimatedIssueDate: '2026-11-20',
    conditions: null,
    dependsOn: [],
    requirements: reqs('tc-sepa', {
      'SEPA environmental checklist': '2026-07-20',
      'Critical areas report': '2026-07-20',
      'Cultural resources survey': '2026-07-13',
    }),
    comments: [{ authorId: 'priya', date: '2026-10-06', text: 'Comment period closed Oct 3 with two comments, both from the Squaxin Island Tribe on large woody debris. Responding this week.' }],
  }),
  P({
    id: 'dbs-carp',
    projectId: DBS,
    catalogId: 'tc-carp',
    name: 'Critical Areas Review Permit',
    trigger: 'Work within the 250-foot riparian habitat area and a mapped landslide hazard',
    assigneeId: 'lena',
    status: 'in-preparation',
    rounds: [],
    estimatedIssueDate: '2027-04-30',
    conditions: null,
    dependsOn: [{ permitId: 'dbs-sepa', needs: 'submitted' }],
    requirements: reqs('tc-carp', { 'Geotechnical report': '2026-06-29', 'Mitigation plan': '2026-09-21' }),
    comments: [{ authorId: 'lena', date: '2026-10-13', text: 'Habitat management plan waits on the critical areas report. Field work is done; report draft is due Nov 7.' }],
  }),
  P({
    id: 'dbs-ssdp',
    projectId: DBS,
    catalogId: 'tc-ssdp',
    name: 'Shoreline Substantial Development Permit',
    trigger: 'Development valued over the shoreline exemption threshold on a shoreline of the state',
    assigneeId: 'priya',
    status: 'not-started',
    rounds: [],
    estimatedIssueDate: '2027-05-31',
    conditions: null,
    dependsOn: [{ permitId: 'dbs-sepa', needs: 'issued' }],
    requirements: reqs('tc-ssdp', {}, { 'SEPA determination': 'dbs-sepa' }),
    comments: [],
  }),
  P({
    id: 'dbs-grading',
    projectId: DBS,
    catalogId: 'tc-grading',
    name: 'Grading Permit',
    trigger: 'Excavation and fill for the rock toe and bench',
    assigneeId: 'priya',
    status: 'not-started',
    rounds: [],
    estimatedIssueDate: '2027-06-30',
    conditions: null,
    dependsOn: [{ permitId: 'dbs-carp', needs: 'issued' }],
    requirements: reqs('tc-grading', {}, { 'Issued CARP': 'dbs-carp' }),
    comments: [],
  }),
  P({
    id: 'dbs-hpa',
    projectId: DBS,
    catalogId: 'wdfw-hpa',
    name: 'Hydraulic Project Approval',
    trigger: 'Work below ordinary high water of a fish-bearing river',
    assigneeId: 'priya',
    status: 'in-preparation',
    rounds: [],
    estimatedIssueDate: '2027-02-15',
    conditions: null,
    dependsOn: [{ permitId: 'dbs-sepa', needs: 'issued' }],
    requirements: reqs('wdfw-hpa', { 'Plan and section drawings': '2026-08-31', 'Fish exclusion plan': '2026-09-28' }, { 'SEPA determination': 'dbs-sepa' }),
    comments: [],
  }),
  P({
    id: 'dbs-401',
    projectId: DBS,
    catalogId: 'ecology-401',
    name: 'Section 401 Water Quality Certification',
    trigger: 'Covered by Ecology’s certification of Nationwide Permit 13',
    assigneeId: 'priya',
    status: 'not-required',
    rounds: [],
    conditions: null,
    dependsOn: [],
    requirements: [],
    comments: [],
  }),
  P({
    id: 'dbs-cswgp',
    projectId: DBS,
    catalogId: 'ecology-cswgp',
    name: 'Construction Stormwater General Permit',
    trigger: 'Disturbance is under 1 acre',
    assigneeId: 'priya',
    status: 'not-required',
    rounds: [],
    conditions: null,
    dependsOn: [],
    requirements: [],
    comments: [],
  }),
  P({
    id: 'dbs-404',
    projectId: DBS,
    catalogId: 'usace-404-nwp',
    name: 'Section 404 Nationwide Permit 13',
    trigger: 'Bank stabilization below ordinary high water, under 500 linear feet',
    assigneeId: 'lena',
    status: 'under-review',
    referenceNumber: 'NWS-2026-00862',
    rounds: [{ sent: '2026-08-19' }],
    estimatedIssueDate: '2027-01-31',
    conditions: null,
    dependsOn: [{ permitId: 'dbs-esa', needs: 'issued' }],
    requirements: reqs('usace-404-nwp', ALL),
    comments: [],
  }),
  P({
    id: 'dbs-esa',
    projectId: DBS,
    catalogId: 'usfws-esa-informal',
    name: 'ESA Section 7 Informal Consultation',
    trigger: 'Corps permit; bull trout foraging habitat in the action area',
    assigneeId: 'priya',
    status: 'under-review',
    rounds: [{ sent: '2026-08-19' }],
    estimatedIssueDate: '2026-12-18',
    conditions: null,
    dependsOn: [],
    requirements: reqs('usfws-esa-informal', ALL),
    comments: [],
  }),
  P({
    id: 'dbs-106',
    projectId: DBS,
    catalogId: 'dahp-106',
    name: 'Section 106 Review',
    trigger: 'Federal undertaking (Corps permit) within a high-probability area for archaeological resources',
    assigneeId: 'sam',
    status: 'submitted',
    rounds: [{ sent: '2026-10-12' }],
    estimatedIssueDate: '2026-12-11',
    conditions: null,
    dependsOn: [],
    requirements: reqs('dahp-106', ALL),
    comments: [],
  }),
];

// Green River Levee Setback — King County and the City of Kent, a long federal track.
const GRL = 'green-river-levee-setback';
const greenRiver: Permit[] = [
  P({
    id: 'grl-sepa',
    projectId: GRL,
    catalogId: 'kc-sepa',
    name: 'SEPA Determination',
    trigger: 'Levee setback and floodplain grading over 500 cubic yards',
    assigneeId: 'sam',
    status: 'issued',
    referenceNumber: 'ENVR24-0118',
    rounds: [{ sent: '2024-08-05', returned: '2024-12-16', outcome: 'decision' }],
    issuedDate: '2024-12-16',
    conditions: true,
    conditionsCount: 6,
    dependsOn: [],
    requirements: reqs('kc-sepa', ALL),
    comments: [],
  }),
  P({
    id: 'grl-grading',
    projectId: GRL,
    catalogId: 'kc-grading',
    name: 'Clearing and Grading Permit',
    trigger: 'Floodplain excavation of roughly 48,000 cubic yards',
    assigneeId: 'devin',
    status: 'under-review',
    referenceNumber: 'GRDE25-0047',
    rounds: [
      { sent: '2025-03-03', returned: '2025-08-11', outcome: 'comments' },
      { sent: '2026-02-09', returned: '2026-06-22', outcome: 'comments' },
      { sent: '2026-09-21' },
    ],
    estimatedIssueDate: '2027-01-29',
    conditions: null,
    dependsOn: [{ permitId: 'grl-sepa', needs: 'issued' }],
    requirements: reqs('kc-grading', ALL, { 'SEPA determination': 'grl-sepa' }),
    comments: [{ authorId: 'devin', date: '2026-06-24', text: 'Round 2 comments fold the critical areas review in here, as expected for the county. Mostly buffer averaging on the south reach.' }],
  }),
  P({
    id: 'grl-shoreline-ex',
    projectId: GRL,
    catalogId: 'kc-shoreline-exemption',
    name: 'Shoreline Exemption',
    site: 'North Reach',
    trigger: 'Flood control maintenance on the north reach (exempt under WAC 173-27-040)',
    assigneeId: 'sam',
    status: 'issued',
    referenceNumber: 'SHEX25-0009',
    rounds: [{ sent: '2025-01-13', returned: '2025-02-24', outcome: 'decision' }],
    issuedDate: '2025-02-24',
    conditions: false,
    dependsOn: [],
    requirements: reqs('kc-shoreline-exemption', ALL),
    comments: [],
  }),
  P({
    id: 'grl-ssdp',
    projectId: GRL,
    catalogId: 'kent-ssdp',
    name: 'Shoreline Substantial Development Permit',
    site: 'South Reach',
    trigger: 'New levee alignment inside Kent’s shoreline jurisdiction',
    assigneeId: 'devin',
    status: 'under-review',
    referenceNumber: 'LUSP-2026-0031',
    rounds: [{ sent: '2026-05-18', returned: '2026-08-10', outcome: 'comments' }, { sent: '2026-10-05' }],
    estimatedIssueDate: '2027-02-26',
    conditions: null,
    dependsOn: [{ permitId: 'grl-sepa', needs: 'issued' }],
    requirements: reqs('kent-ssdp', ALL, { 'SEPA determination': 'grl-sepa' }),
    comments: [],
  }),
  P({
    id: 'grl-row',
    projectId: GRL,
    catalogId: 'kent-row',
    name: 'Street Use Permit',
    site: 'South Reach',
    trigger: 'Haul route and closures on S 212th St',
    assigneeId: 'devin',
    status: 'in-preparation',
    rounds: [],
    estimatedIssueDate: '2027-04-15',
    conditions: null,
    dependsOn: [{ permitId: 'grl-grading', needs: 'issued' }],
    requirements: reqs('kent-row', { 'Certificate of insurance': '2026-10-01' }),
    comments: [],
  }),
  P({
    id: 'grl-hpa',
    projectId: GRL,
    catalogId: 'wdfw-hpa',
    name: 'Hydraulic Project Approval',
    trigger: 'Work in the Green River floodplain connected at high flows',
    assigneeId: 'priya',
    status: 'issued',
    referenceNumber: '2025-4-603+01',
    rounds: [{ sent: '2025-04-14', returned: '2025-06-02', outcome: 'decision' }],
    issuedDate: '2025-06-02',
    expiresDate: '2030-06-02',
    conditions: true,
    conditionsCount: 18,
    dependsOn: [{ permitId: 'grl-sepa', needs: 'issued' }],
    requirements: reqs('wdfw-hpa', ALL, { 'SEPA determination': 'grl-sepa' }),
    comments: [],
  }),
  P({
    id: 'grl-401',
    projectId: GRL,
    catalogId: 'ecology-401',
    name: 'Section 401 Water Quality Certification',
    trigger: 'Federal 404 permit requires state water quality certification',
    assigneeId: 'lena',
    status: 'under-review',
    referenceNumber: 'ECY-WQC-2025-0904',
    rounds: [{ sent: '2025-09-15', returned: '2026-02-02', outcome: 'comments' }, { sent: '2026-05-04' }],
    estimatedIssueDate: '2026-12-31',
    conditions: null,
    dependsOn: [{ permitId: 'grl-sepa', needs: 'issued' }],
    requirements: reqs('ecology-401', ALL),
    comments: [],
  }),
  P({
    id: 'grl-404',
    projectId: GRL,
    catalogId: 'usace-404-ip',
    name: 'Section 404 Individual Permit',
    trigger: 'Fill below ordinary high water for the new levee toe; 1.2 acres of wetland impact',
    assigneeId: 'lena',
    status: 'under-review',
    referenceNumber: 'NWS-2025-00219',
    rounds: [{ sent: '2025-06-30', returned: '2025-12-15', outcome: 'comments' }, { sent: '2026-04-13' }],
    estimatedIssueDate: '2027-05-28',
    conditions: null,
    dependsOn: [
      { permitId: 'grl-esa', needs: 'issued' },
      { permitId: 'grl-401', needs: 'issued' },
    ],
    requirements: reqs('usace-404-ip', ALL),
    comments: [{ authorId: 'lena', date: '2026-04-14', text: 'Corps will not issue until the biological opinion is in. NOAA is at 15 months with no draft yet.' }],
  }),
  P({
    id: 'grl-esa',
    projectId: GRL,
    catalogId: 'nmfs-esa-formal',
    name: 'ESA Section 7 Formal Consultation',
    trigger: 'Corps permit in Puget Sound Chinook and steelhead critical habitat',
    assigneeId: 'priya',
    status: 'under-review',
    referenceNumber: 'WCRO-2025-02210',
    rounds: [{ sent: '2025-07-21' }],
    estimatedIssueDate: '2027-03-31',
    conditions: null,
    dependsOn: [],
    requirements: reqs('nmfs-esa-formal', ALL),
    comments: [],
  }),
  P({
    id: 'grl-cswgp',
    projectId: GRL,
    catalogId: 'ecology-cswgp',
    name: 'Construction Stormwater General Permit',
    trigger: 'About 11 acres of soil disturbance',
    assigneeId: 'devin',
    status: 'in-preparation',
    rounds: [],
    estimatedIssueDate: '2027-04-30',
    conditions: null,
    dependsOn: [],
    requirements: reqs('ecology-cswgp', { 'Notice of intent': '2026-10-08' }),
    comments: [],
  }),
];

// Closed and monitoring projects — issued permits only. They exist so turnaround has
// a history to read: each one is a span the next project can be quoted against.
const H = (
  projectId: string,
  catalogId: string,
  name: string,
  assigneeId: string,
  rounds: ReviewRound[],
  extra: Partial<Permit> = {},
): Permit => {
  const issued = rounds[rounds.length - 1]?.returned;
  return P({
    id: `${projectId}--${catalogId}${extra.site ? `-${extra.site.toLowerCase().replace(/\s+/g, '-')}` : ''}`,
    projectId,
    catalogId,
    name,
    trigger: '',
    assigneeId,
    status: 'issued',
    rounds,
    issuedDate: issued,
    conditions: true,
    dependsOn: [],
    requirements: reqs(catalogId, ALL),
    comments: [],
    files: [],
    ...extra,
  });
};

const STB = 'sammamish-trail-bridge';
const TPR = 'tenino-prairie-restoration';
const CCC = 'covington-creek-culvert';
const HLO = 'horseshoe-lake-outfall';
const history: Permit[] = [
  H(STB, 'bothell-sepa', 'SEPA Threshold Determination', 'sam', [{ sent: '2020-05-04', returned: '2020-08-17', outcome: 'decision' }], { trigger: 'Trail bridge over the Sammamish River' }),
  H(STB, 'bothell-cao', 'Critical Areas Approval', 'lena', [{ sent: '2020-06-01', returned: '2020-09-08', outcome: 'comments' }, { sent: '2020-10-19', returned: '2021-01-25', outcome: 'decision' }], { trigger: 'Abutments inside the river buffer' }),
  H(STB, 'bothell-shoreline-variance', 'Shoreline Variance', 'sam', [{ sent: '2020-09-14', returned: '2021-03-15', outcome: 'decision' }], { trigger: 'Abutment inside the shoreline setback', expiresDate: '2026-03-15' }),
  H(STB, 'bothell-lda', 'Land Disturbing Activity Permit', 'sam', [{ sent: '2021-02-08', returned: '2021-05-03', outcome: 'comments' }, { sent: '2021-06-07', returned: '2021-08-30', outcome: 'decision' }], { trigger: 'Approach grading at both abutments' }),
  H(STB, 'bothell-row', 'Right-of-Way Use Permit', 'sam', [{ sent: '2021-09-13', returned: '2021-10-25', outcome: 'decision' }], { trigger: 'Trailhead closure on 102nd Ave NE' }),
  H(STB, 'wdfw-hpa', 'Hydraulic Project Approval', 'priya', [{ sent: '2021-01-11', returned: '2021-03-01', outcome: 'decision' }], { trigger: 'Work over the Sammamish River' }),
  H(STB, 'usace-404-nwp', 'Section 404 Nationwide Permit 14', 'lena', [{ sent: '2020-11-02', returned: '2021-04-19', outcome: 'decision' }], { trigger: 'Pier fill below ordinary high water' }),
  H(TPR, 'tc-sepa', 'SEPA Determination', 'priya', [{ sent: '2021-08-02', returned: '2021-11-15', outcome: 'decision' }], { trigger: 'Prairie and oak woodland restoration over 20 acres' }),
  H(TPR, 'tc-carp', 'Critical Areas Review Permit', 'lena', [{ sent: '2021-10-04', returned: '2022-01-31', outcome: 'comments' }, { sent: '2022-03-14', returned: '2022-07-25', outcome: 'decision' }], { trigger: 'Work in Mazama pocket gopher habitat' }),
  H(TPR, 'tc-grading', 'Grading Permit', 'priya', [{ sent: '2022-08-08', returned: '2022-10-31', outcome: 'decision' }], { trigger: 'Swale and berm grading' }),
  H(TPR, 'usace-404-nwp', 'Section 404 Nationwide Permit 27', 'lena', [{ sent: '2021-12-06', returned: '2022-05-23', outcome: 'decision' }], { trigger: 'Wetland enhancement' }),
  H(CCC, 'kc-sepa', 'SEPA Determination', 'sam', [{ sent: '2021-11-15', returned: '2022-02-28', outcome: 'decision' }], { trigger: 'Culvert replacement on a fish-bearing stream' }),
  H(CCC, 'kc-grading', 'Clearing and Grading Permit', 'devin', [{ sent: '2022-03-21', returned: '2022-07-18', outcome: 'comments' }, { sent: '2022-09-06', returned: '2023-01-30', outcome: 'decision' }], { trigger: 'Stream channel regrade' }),
  H(CCC, 'wdfw-hpa', 'Hydraulic Project Approval', 'priya', [{ sent: '2022-04-04', returned: '2022-05-31', outcome: 'decision' }], { trigger: 'Fish passage barrier removal' }),
  H(CCC, 'usace-404-nwp', 'Section 404 Nationwide Permit 3', 'lena', [{ sent: '2022-03-07', returned: '2022-08-15', outcome: 'decision' }], { trigger: 'Culvert replacement below ordinary high water' }),
  H(CCC, 'usfws-esa-informal', 'ESA Section 7 Informal Consultation', 'priya', [{ sent: '2022-03-07', returned: '2022-06-27', outcome: 'decision' }], { trigger: 'Corps permit; bull trout' }),
  H(HLO, 'tc-sepa', 'SEPA Determination', 'lena', [{ sent: '2022-04-18', returned: '2022-07-11', outcome: 'decision' }], { trigger: 'Stormwater outfall to Horseshoe Lake' }),
  H(HLO, 'tc-carp', 'Critical Areas Review Permit', 'lena', [{ sent: '2022-06-06', returned: '2022-11-14', outcome: 'decision' }], { trigger: 'Lakeshore wetland buffer' }),
  H(HLO, 'tc-ssdp', 'Shoreline Substantial Development Permit', 'lena', [{ sent: '2022-07-25', returned: '2022-11-21', outcome: 'comments' }, { sent: '2023-01-09', returned: '2023-05-15', outcome: 'decision' }], { trigger: 'Outfall on a shoreline of the state' }),
  H(HLO, 'wdfw-hpa', 'Hydraulic Project Approval', 'priya', [{ sent: '2022-08-01', returned: '2022-09-26', outcome: 'decision' }], { trigger: 'Outfall below ordinary high water' }),
  H(HLO, 'ecology-401', 'Section 401 Water Quality Certification', 'lena', [{ sent: '2022-09-12', returned: '2023-04-03', outcome: 'decision' }], { trigger: 'Individual certification for the outfall' }),
  H(HLO, 'usace-404-nwp', 'Section 404 Nationwide Permit 7', 'lena', [{ sent: '2022-08-15', returned: '2023-03-06', outcome: 'decision' }], { trigger: 'Outfall structure' }),
];

export const PERMITS: Permit[] = [...northCreek, ...deschutes, ...greenRiver, ...history];

export const permitById = (id: string): Permit | undefined => PERMITS.find((p) => p.id === id);
export const permitsForProject = (projectId: string): Permit[] => PERMITS.filter((p) => p.projectId === projectId);

// ── Derived ───────────────────────────────────────────────────────────────────

/** The demo's "today" — fixed so every run reads the same. */
export const TODAY = '2026-10-22';

export const levelOf = (p: Permit): AgencyLevel => jurisdictionById(catalogById(p.catalogId)?.jurisdictionId ?? '')?.level ?? 'Local';
export const jurisdictionOf = (p: Permit): Jurisdiction | undefined => jurisdictionById(catalogById(p.catalogId)?.jurisdictionId ?? '');
export const submittedDate = (p: Permit): string | undefined => p.rounds[0]?.sent;

/** The round the permit is in now (1-based), or 0 before submittal. */
export const currentRound = (p: Permit): number => p.rounds.length;

/** Has a dependency been met? */
export function dependencyMet(dep: Dependency): boolean {
  const target = permitById(dep.permitId);
  if (!target) return true;
  if (target.status === 'not-required') return true;
  const ord = STATUS_META[target.status].ordinal ?? 0;
  return dep.needs === 'issued' ? target.status === 'issued' : ord >= (STATUS_META.submitted.ordinal ?? 2);
}

/** Dependencies still holding this permit up. */
export const openDependencies = (p: Permit): Dependency[] => (p.status === 'issued' ? [] : p.dependsOn.filter((d) => !dependencyMet(d)));

/** Permits in the same project that wait on this one. */
export const blockedBy = (p: Permit): Permit[] => PERMITS.filter((o) => o.dependsOn.some((d) => d.permitId === p.id));

/** Requirements still open before the package can go in (only meaningful pre-submittal). */
export const openRequirements = (p: Permit): Requirement[] => p.requirements.filter((r) => !r.done);

/** Months between two ISO dates, to one decimal. */
export function monthsBetween(a: string, b: string): number {
  const ms = new Date(`${b}T00:00:00Z`).getTime() - new Date(`${a}T00:00:00Z`).getTime();
  return Math.round((ms / (1000 * 60 * 60 * 24 * 30.4375)) * 10) / 10;
}

export const daysBetween = (a: string, b: string): number =>
  Math.round((new Date(`${b}T00:00:00Z`).getTime() - new Date(`${a}T00:00:00Z`).getTime()) / 86_400_000);

/** Submitted → issued span in months; null until issued. */
export function turnaroundMonths(p: Permit): number | null {
  const s = submittedDate(p);
  return s && p.issuedDate ? monthsBetween(s, p.issuedDate) : null;
}

export interface TurnaroundRow {
  catalogId: string;
  jurisdictionId: string;
  localName: string;
  type: PermitType;
  level: AgencyLevel;
  /** Every issued permit's span, months, ascending. */
  spans: { permitId: string; projectId: string; months: number; rounds: number }[];
  median: number;
  min: number;
  max: number;
  medianRounds: number;
  /** Open permits of this kind and how long they have been in. */
  open: { permitId: string; projectId: string; months: number }[];
}

const median = (xs: number[]): number => {
  if (!xs.length) return 0;
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round(((s[m - 1] + s[m]) / 2) * 10) / 10;
};

/** Turnaround per catalog entry, from every issued permit across every project. */
export function turnaroundByEntry(): TurnaroundRow[] {
  return CATALOG.map((c) => {
    const kind = PERMITS.filter((p) => p.catalogId === c.id);
    const spans = kind
      .map((p) => ({ permitId: p.id, projectId: p.projectId, months: turnaroundMonths(p), rounds: p.rounds.length }))
      .filter((x): x is { permitId: string; projectId: string; months: number; rounds: number } => x.months != null)
      .sort((a, b) => a.months - b.months);
    const open = kind
      .filter((p) => (p.status === 'submitted' || p.status === 'under-review') && submittedDate(p))
      .map((p) => ({ permitId: p.id, projectId: p.projectId, months: monthsBetween(submittedDate(p)!, TODAY) }));
    const months = spans.map((s) => s.months);
    const j = jurisdictionById(c.jurisdictionId)!;
    return {
      catalogId: c.id,
      jurisdictionId: c.jurisdictionId,
      localName: c.localName,
      type: c.type,
      level: j.level,
      spans,
      median: median(months),
      min: months[0] ?? 0,
      max: months[months.length - 1] ?? 0,
      medianRounds: median(spans.map((s) => s.rounds)),
      open,
    };
  }).filter((r) => r.spans.length > 0 || r.open.length > 0);
}

export const turnaroundFor = (catalogId: string): TurnaroundRow | undefined => turnaroundByEntry().find((r) => r.catalogId === catalogId);

/** Permits expiring within `days` of TODAY (issued, not yet expired). */
export const expiringSoon = (permits: Permit[], days = 90): Permit[] =>
  permits.filter((p) => p.status === 'issued' && p.expiresDate && daysBetween(TODAY, p.expiresDate) >= 0 && daysBetween(TODAY, p.expiresDate) <= days);

export interface ProjectSummary {
  total: number;
  issued: number;
  /** With the agency now (submitted or under review). */
  withAgency: number;
  /** Not yet submitted, still required. */
  toSubmit: number;
  notRequired: number;
  expiringSoon: number;
  /** Earliest upcoming expiration. */
  nextExpiration?: { permitId: string; date: string };
  jurisdictions: string[];
}

export function summarizeProject(projectId: string): ProjectSummary {
  const ps = permitsForProject(projectId);
  const upcoming = ps
    .filter((p) => p.status === 'issued' && p.expiresDate && p.expiresDate >= TODAY)
    .sort((a, b) => (a.expiresDate! < b.expiresDate! ? -1 : 1));
  return {
    total: ps.length,
    issued: ps.filter((p) => p.status === 'issued').length,
    withAgency: ps.filter((p) => p.status === 'submitted' || p.status === 'under-review').length,
    toSubmit: ps.filter((p) => p.status === 'not-started' || p.status === 'in-preparation').length,
    notRequired: ps.filter((p) => p.status === 'not-required').length,
    expiringSoon: expiringSoon(ps).length,
    nextExpiration: upcoming[0] ? { permitId: upcoming[0].id, date: upcoming[0].expiresDate! } : undefined,
    jurisdictions: [...new Set(ps.map((p) => jurisdictionOf(p)?.short ?? ''))].filter(Boolean),
  };
}

/** Standardized file label: the kind and round, not whatever it was saved as. */
export function fileLabel(f: PermitFile): string {
  return f.round && f.kind !== 'Issued Permit' ? `${f.kind}, Round ${f.round}` : f.kind;
}

// ── Formatting ────────────────────────────────────────────────────────────────

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "Sep 28, 2026"; "—" when empty. */
export function formatDate(iso?: string | null): string {
  if (!iso) return '—';
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

/** "Sep 2026". */
export function formatMonth(iso?: string | null): string {
  if (!iso) return '—';
  const [y, m] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

/** "5.5 months" / "1 month". */
export function formatMonths(n: number): string {
  return `${n % 1 === 0 ? n.toFixed(0) : n.toFixed(1)} ${n === 1 ? 'month' : 'months'}`;
}

// ── Routes ────────────────────────────────────────────────────────────────────

export const APP_BASE = '/prototypes/internal-permit-tracking';
export const ROUTES = {
  home: APP_BASE,
  project: (id: string) => `${APP_BASE}/${id}`,
  catalog: `${APP_BASE}/catalog`,
  turnaround: `${APP_BASE}/turnaround`,
};
