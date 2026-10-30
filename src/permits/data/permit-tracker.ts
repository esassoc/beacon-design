// Permit Tracker — data fixture for the standalone permit-issuance app (a satellite of
// Beacon, not a Beacon module: its own shell, its own nav).
//
// Shape: Project → (project-wide permits) + Sites → (site permits). A permit belongs to the
// whole project (one SEPA, one Corps permit covering every crossing) or to one site (each
// crossing's own critical areas review). Dependencies may cross that line: a site's
// critical areas review waits on the project's SEPA.
//
// JURISDICTION: a local permit's jurisdiction is its site's city/county (or, project-wide,
// the project's lead agency); a state or federal permit's is the issuing office. So "how
// long does a King County critical areas review take" and "how long does a WDFW HPA take"
// fall out of the same grouping (see timelines()).
//
// STATUS is user data, modelled on the Actions board (src/data/action-status.ts): each
// project has WORKFLOWS (one per group of permit types), each an ordered list of
// COLUMNS, and every column maps to Beacon's fixed backbone category (Not Started / In
// Progress / Completed) so rollups keep one meaning of done. A permit points at a column
// id. "Waiting on another permit" and "Expires soon" are DERIVED flags, never statuses,
// so they survive any renaming a team does. Runtime edits to the workflows live in
// src/lib/permit-status-store.ts.
//
// ACTIVE projects are hand-written. CLOSED projects are generated from a fixed seed so the
// timeline benchmarks have a past to read; same seed, same numbers, every build.
//
// All content is invented and domain-credible (real Washington agencies and permit types;
// fictional projects, clients, staff, and reference numbers).

import { CATEGORIES, CATEGORY_META, type StatusCategory } from '../../data/action-status';

export { CATEGORIES, CATEGORY_META, type StatusCategory };

export type Level = 'Federal' | 'State' | 'Local';

/** Fixed "today" so derivations are stable in every demo. */
export const TODAY = '2026-10-23';

export interface Jurisdiction {
  id: string;
  name: string;
  level: Level;
  /** What this city/county calls its critical areas approval. Local only. */
  criticalAreasName?: string;
}

export const JURISDICTIONS: Jurisdiction[] = [
  { id: 'usace-nws', name: 'USACE Seattle District', level: 'Federal' },
  { id: 'wdfw', name: 'WDFW', level: 'State' },
  { id: 'ecology', name: 'Dept. of Ecology', level: 'State' },
  { id: 'king-county', name: 'King County', level: 'Local', criticalAreasName: 'Critical Areas Review' },
  { id: 'bellevue', name: 'City of Bellevue', level: 'Local', criticalAreasName: 'Critical Areas Land Use Permit' },
  { id: 'redmond', name: 'City of Redmond', level: 'Local', criticalAreasName: 'Critical Areas Review' },
  { id: 'woodinville', name: 'City of Woodinville', level: 'Local', criticalAreasName: 'Critical Areas Review' },
  { id: 'snohomish-county', name: 'Snohomish County', level: 'Local', criticalAreasName: 'Critical Area Review' },
  { id: 'lake-stevens', name: 'City of Lake Stevens', level: 'Local', criticalAreasName: 'Critical Areas Permit' },
  { id: 'pierce-county', name: 'Pierce County', level: 'Local', criticalAreasName: 'Critical Areas Verification' },
  { id: 'thurston-county', name: 'Thurston County', level: 'Local', criticalAreasName: 'Critical Areas Review Permit' },
  // Southwest Washington: the agencies whose critical areas rules are read from the code
  // itself (src/data/permit-tracker-cao.json), not written as examples.
  { id: 'lewis-county', name: 'Lewis County', level: 'Local', criticalAreasName: 'Critical Areas Review' },
  { id: 'napavine', name: 'City of Napavine', level: 'Local', criticalAreasName: 'Critical Areas Review' },
  { id: 'grays-harbor-county', name: 'Grays Harbor County', level: 'Local', criticalAreasName: 'Critical Areas Review' },
  { id: 'pacific-county', name: 'Pacific County', level: 'Local', criticalAreasName: 'Critical Areas Determination' },
  { id: 'raymond', name: 'City of Raymond', level: 'Local', criticalAreasName: 'Critical Areas Review' },
];

export type PermitTypeId = 'usace-404' | 'ecy-401' | 'wdfw-hpa' | 'ecy-cswgp' | 'sepa' | 'critical-areas' | 'ssdp' | 'grading';

export interface PermitType {
  id: PermitTypeId;
  name: string;
  level: Level;
  /** Issuing office for state/federal permits; local permits take the site's jurisdiction. */
  jurisdictionId?: string;
  /** Years an issued permit stays valid. Absent = does not expire. */
  validYears?: number;
  /** What an application needs before it can be submitted. */
  prerequisites: string[];
}

export const PERMIT_TYPES: PermitType[] = [
  {
    id: 'usace-404',
    name: 'Section 404 Permit (Nationwide)',
    level: 'Federal',
    jurisdictionId: 'usace-nws',
    validYears: 2,
    prerequisites: ['JARPA application', 'Wetland delineation report', 'Biological evaluation (ESA Section 7)', 'Cultural resources survey (Section 106)'],
  },
  {
    id: 'ecy-401',
    name: 'Section 401 Water Quality Certification',
    level: 'State',
    jurisdictionId: 'ecology',
    validYears: 5,
    prerequisites: ['Pre-filing meeting request (30 days ahead)', 'JARPA application', 'Compensatory mitigation plan'],
  },
  {
    id: 'wdfw-hpa',
    name: 'Hydraulic Project Approval',
    level: 'State',
    jurisdictionId: 'wdfw',
    validYears: 5,
    prerequisites: ['JARPA application', 'SEPA determination', 'Stamped plans and specifications', 'Fish passage design report'],
  },
  {
    id: 'ecy-cswgp',
    name: 'Construction Stormwater General Permit',
    level: 'State',
    jurisdictionId: 'ecology',
    validYears: 5,
    prerequisites: ['Notice of Intent', 'Stormwater pollution prevention plan', 'Public notice (two consecutive weeks)', 'SEPA determination'],
  },
  {
    id: 'sepa',
    name: 'SEPA Threshold Determination',
    level: 'Local',
    prerequisites: ['SEPA environmental checklist', 'Critical areas report', 'Traffic and noise memo'],
  },
  {
    id: 'critical-areas',
    name: 'Critical Areas Review',
    level: 'Local',
    validYears: 3,
    prerequisites: ['Critical areas report (wetland and stream delineation)', 'Mitigation plan', 'SEPA determination', 'Pre-application meeting'],
  },
  {
    id: 'ssdp',
    name: 'Shoreline Substantial Development Permit',
    level: 'Local',
    validYears: 5,
    prerequisites: ['JARPA application', 'Shoreline narrative', 'SEPA determination', 'Public notice'],
  },
  {
    id: 'grading',
    name: 'Clearing and Grading Permit',
    level: 'Local',
    validYears: 1,
    prerequisites: ['Critical areas approval', 'Temporary erosion and sediment control plan', 'Geotechnical report'],
  },
];

/** Short names for compact flags ("Waiting on SEPA"). */
export const PERMIT_SHORT: Record<PermitTypeId, string> = {
  'usace-404': 'Section 404',
  'ecy-401': 'Section 401',
  'wdfw-hpa': 'HPA',
  'ecy-cswgp': 'CSWGP',
  sepa: 'SEPA',
  'critical-areas': 'critical areas',
  ssdp: 'SSDP',
  grading: 'grading',
};

export const STAFF = ['Maya Okafor', 'Daniel Reyes', 'Priya Natarajan', 'Tom Lindqvist', 'Grace Huang', 'Sam Whitford'] as const;
/** Everyone who can be put on a project team: STAFF plus people not yet assigned a permit. */
export const PEOPLE: string[] = [...STAFF, 'Elena Vasquez', 'Jordan Pike'].sort();

// ── status workflows (the Actions board model, applied to permits) ──────────

export interface StatusColumn {
  /** Stable across renames; what a permit's statusId points at. */
  id: string;
  name: string;
  category: StatusCategory;
  /** The timeline milestone a change INTO this status records (see permitTimeline). */
  milestone?: Milestone;
}

/** What a status change means on a permit's timeline: the application went in, the
 *  agency returned a review round, or the permit was issued. */
export type Milestone = 'submitted' | 'review' | 'issued';

export interface PermitWorkflow {
  id: string;
  name: string;
  /** The permit types whose permits move through these columns. */
  types: PermitTypeId[];
  /** Board order. Always grouped NotStarted → InProgress → Completed. */
  columns: StatusColumn[];
}

const col = (wf: string, name: string, category: StatusCategory, milestone?: Milestone): StatusColumn => ({
  id: `${wf}-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`,
  name,
  category,
  ...(milestone ? { milestone } : {}),
});

export const DEFAULT_WORKFLOWS: PermitWorkflow[] = [
  {
    id: 'land-use',
    name: 'Local land use',
    types: ['sepa', 'critical-areas', 'ssdp', 'grading'],
    columns: [
      col('land-use', 'Not Started', 'NotStarted'),
      col('land-use', 'Preparing Application', 'InProgress'),
      col('land-use', 'Submitted', 'InProgress', 'submitted'),
      col('land-use', 'In Review', 'InProgress'),
      col('land-use', 'Corrections Requested', 'InProgress', 'review'),
      col('land-use', 'Public Notice', 'InProgress'),
      col('land-use', 'Issued', 'Completed', 'issued'),
    ],
  },
  {
    id: 'agency',
    name: 'State and federal',
    types: ['usace-404', 'ecy-401', 'wdfw-hpa'],
    columns: [
      col('agency', 'Not Started', 'NotStarted'),
      col('agency', 'Pre-application', 'InProgress'),
      col('agency', 'Preparing Application', 'InProgress'),
      col('agency', 'Submitted', 'InProgress', 'submitted'),
      col('agency', 'Under Agency Review', 'InProgress'),
      col('agency', 'Additional Info Requested', 'InProgress', 'review'),
      col('agency', 'Issued', 'Completed', 'issued'),
    ],
  },
  {
    id: 'coverage',
    name: 'Stormwater coverage',
    types: ['ecy-cswgp'],
    columns: [
      col('coverage', 'Not Started', 'NotStarted'),
      col('coverage', 'Drafting NOI and SWPPP', 'InProgress'),
      col('coverage', 'Public Notice', 'InProgress'),
      col('coverage', 'Submitted', 'InProgress', 'submitted'),
      col('coverage', 'Coverage Granted', 'Completed', 'issued'),
    ],
  },
];

const defaultColumnById = new Map(DEFAULT_WORKFLOWS.flatMap((w) => w.columns).map((c) => [c.id, c]));

/** A column's milestone. A column the user added has none unless set; a default column
 *  keeps its milestone even when a stored copy of the workflow predates the field. */
export const milestoneOf = (c: StatusColumn): Milestone | undefined =>
  c.milestone ?? defaultColumnById.get(c.id)?.milestone ?? (c.category === 'Completed' ? 'issued' : undefined);

export const workflowOf = (typeId: PermitTypeId, workflows: PermitWorkflow[] = DEFAULT_WORKFLOWS): PermitWorkflow =>
  workflows.find((w) => w.types.includes(typeId)) ?? workflows[workflows.length - 1];

/** Resolve a status id against a workflow set; a deleted column falls back to its workflow's first column. */
export function statusColumn(statusId: string, typeId: PermitTypeId, workflows: PermitWorkflow[] = DEFAULT_WORKFLOWS): StatusColumn {
  for (const w of workflows) {
    const c = w.columns.find((x) => x.id === statusId);
    if (c) return c;
  }
  return workflowOf(typeId, workflows).columns[0];
}

// ── records ──────────────────────────────────────────────────────────────────

/** One item on a permit's application checklist. The permit type supplies the
 *  standard items; a user can add custom ones per permit. */
export interface Prerequisite {
  id: string;
  label: string;
  done: boolean;
  /** Filename of the document that satisfied it. */
  doc?: string;
  /** Who is responsible for getting it done. */
  owner?: string;
  due?: string;
  /** Set when checked off. */
  doneAt?: string;
  doneBy?: string;
  note?: string;
  /** Added for this permit, not one of the permit type's standard items. */
  custom?: boolean;
}

export interface PermitFile {
  name: string;
  size: string;
}

export interface Permit {
  id: string;
  projectId: string;
  /** Absent = project-wide (covers every site). */
  siteId?: string;
  typeId: PermitTypeId;
  /** Resolved display name (local critical areas take the jurisdiction's own name). */
  name: string;
  level: Level;
  jurisdictionId: string;
  /** A DEFAULT_WORKFLOWS column id (or a user column, at runtime). */
  statusId: string;
  /** Why this permit applies here. */
  trigger: string;
  assignee: string;
  agencyRef?: string;
  submitted?: string;
  /** Dates the agency returned each review round (0–3). */
  reviews: string[];
  issued?: string;
  expires?: string;
  /** Known once issued. */
  hasConditions?: boolean;
  file?: PermitFile;
  prerequisites: Prerequisite[];
  /** Permit ids (same project, any scope) that must be issued before this one can be submitted. */
  dependsOn: string[];
}

/**
 * A place the project builds. A site has no agency of its own: each permit on it names
 * its agency, and one site usually carries permits from several.
 */
export interface Site {
  id: string;
  projectId: string;
  name: string;
  /** Parcel or location reference. */
  location: string;
}

/**
 * Sample data only: the agency the fixture gives a site's LOCAL permits (the city or
 * county the site sits in) when it builds them. Never shown or edited as the site's.
 */
type SiteSeed = Site & { localJurisdictionId: string };

export interface Project {
  id: string;
  name: string;
  number: string;
  client: string;
  manager: string;
  status: 'active' | 'closed';
  /** Lead agency for project-wide local permits (e.g. the SEPA lead). */
  leadJurisdictionId: string;
  /** Target groundbreaking date — every permit is needed before it. */
  constructionStart: string;
}

// ── helpers ──────────────────────────────────────────────────────────────────

const typeById = new Map(PERMIT_TYPES.map((t) => [t.id, t]));
const jurisdictionById = new Map(JURISDICTIONS.map((j) => [j.id, j]));

export const permitType = (id: PermitTypeId): PermitType => typeById.get(id)!;
export const jurisdiction = (id: string): Jurisdiction => jurisdictionById.get(id)!;

const DAY = 86_400_000;
const toTime = (iso: string) => Date.parse(`${iso}T00:00:00Z`);
const toIso = (t: number) => new Date(t).toISOString().slice(0, 10);
export const addDays = (iso: string, n: number) => toIso(toTime(iso) + n * DAY);
export const daysBetween = (a: string, b: string) => Math.round((toTime(b) - toTime(a)) / DAY);
const addYears = (iso: string, n: number) => `${Number(iso.slice(0, 4)) + n}${iso.slice(4)}`;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/** ISO → "Mar 4, 2027" (timezone-proof). */
export const fmtDate = (iso: string): string => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
};

/** Deterministic PRNG (mulberry32) — fixed seed, same past every build. */
function seeded(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ── permit builder ───────────────────────────────────────────────────────────

interface PermitSpec {
  id: string;
  type: PermitTypeId;
  trigger: string;
  assignee: string;
  agencyRef?: string;
  submitted?: string;
  reviews?: string[];
  issued?: string;
  hasConditions?: boolean;
  /** How many of the type's prerequisites are done (default: all if submitted, else 0). */
  prereqsDone?: number;
  dependsOn?: string[];
  /** Column NAME in the type's default workflow; derived from the dates when absent. */
  status?: string;
}

interface Scope {
  projectId: string;
  siteId?: string;
  /** The site's jurisdiction, or the project's lead agency when project-wide. */
  localJurisdictionId: string;
}

function defaultStatus(s: PermitSpec, done: number): string {
  const wf = workflowOf(s.type);
  const named = (name: string) => wf.columns.find((c) => c.name === name)?.id;
  if (s.status) return named(s.status) ?? wf.columns[0].id;
  if (s.issued) return wf.columns.filter((c) => c.category === 'Completed')[0].id;
  if (s.submitted) return (s.reviews?.length ? named('In Review') ?? named('Under Agency Review') : named('Submitted')) ?? wf.columns[0].id;
  if (done > 0) return named('Preparing Application') ?? named('Drafting NOI and SWPPP') ?? wf.columns[0].id;
  return wf.columns[0].id;
}

function buildPermit(scope: Scope, s: PermitSpec): Permit {
  const t = permitType(s.type);
  const jurisdictionId = t.level === 'Local' ? scope.localJurisdictionId : t.jurisdictionId!;
  const name = s.type === 'critical-areas' ? jurisdiction(jurisdictionId).criticalAreasName ?? t.name : t.name;
  const done = s.prereqsDone ?? (s.submitted ? t.prerequisites.length : 0);
  const slug = name.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return {
    id: s.id,
    projectId: scope.projectId,
    siteId: scope.siteId,
    typeId: s.type,
    name,
    level: t.level,
    jurisdictionId,
    statusId: defaultStatus(s, done),
    trigger: s.trigger,
    assignee: s.assignee,
    agencyRef: s.agencyRef,
    submitted: s.submitted,
    reviews: s.reviews ?? [],
    issued: s.issued,
    expires: s.issued && t.validYears ? addYears(s.issued, t.validYears) : undefined,
    hasConditions: s.issued ? s.hasConditions ?? false : undefined,
    file: s.issued ? { name: `${slug}_${s.agencyRef ?? s.id}.pdf`.replace(/\s+/g, ''), size: `${(0.4 + (s.id.length % 7) * 0.35).toFixed(1)} MB` } : undefined,
    prerequisites: t.prerequisites.map((label, i) => {
      const isDone = i < done;
      // Done items were checked off before submittal (or recently, for an unsubmitted
      // permit); outstanding ones fall due a fortnight apart from today.
      const anchor = s.submitted ?? TODAY;
      return {
        id: `${s.id}-r${i + 1}`,
        label,
        done: isDone,
        owner: s.assignee,
        ...(isDone
          ? {
              doc: `${label.split(' (')[0].replace(/[^A-Za-z0-9]+/g, '-')}.pdf`,
              doneAt: addDays(anchor, -14 * (done - i)),
              doneBy: s.assignee,
            }
          : { due: addDays(TODAY, 14 * (i - done + 1)) }),
      };
    }),
    dependsOn: s.dependsOn ?? [],
  };
}

// ── ACTIVE projects (hand-written) ───────────────────────────────────────────

const ACTIVE_PROJECTS: Project[] = [
  {
    id: 'coal-creek-fish-passage',
    name: 'Coal Creek Fish Passage',
    number: '2025-0417',
    client: 'Eastside Surface Water Utility',
    manager: 'Maya Okafor',
    status: 'active',
    leadJurisdictionId: 'bellevue',
    constructionStart: '2027-07-01',
  },
  {
    id: 'northshore-trail-extension',
    name: 'Northshore Trail Extension',
    number: '2025-0288',
    client: 'Northshore Parks District',
    manager: 'Daniel Reyes',
    status: 'active',
    leadJurisdictionId: 'king-county',
    constructionStart: '2027-04-15',
  },
  {
    id: 'lift-station-7-upgrade',
    name: 'Lift Station 7 Upgrade',
    number: '2026-0062',
    client: 'Lake Stevens Sewer District',
    manager: 'Priya Natarajan',
    status: 'active',
    leadJurisdictionId: 'lake-stevens',
    constructionStart: '2027-03-01',
  },
  {
    id: 'puyallup-levee-setback',
    name: 'Puyallup River Levee Setback, Phase 2',
    number: '2024-0731',
    client: 'Pierce Flood Control Partners',
    manager: 'Tom Lindqvist',
    status: 'active',
    leadJurisdictionId: 'pierce-county',
    constructionStart: '2026-12-01',
  },
];

const ACTIVE_SITES: SiteSeed[] = [
  { id: 'cc-se60', projectId: 'coal-creek-fish-passage', name: 'SE 60th St culvert', localJurisdictionId: 'bellevue', location: 'Coal Creek, RM 1.4' },
  { id: 'cc-newport', projectId: 'coal-creek-fish-passage', name: 'Newport Way crossing', localJurisdictionId: 'king-county', location: 'Coal Creek, RM 2.9' },
  { id: 'ns-woodinville', projectId: 'northshore-trail-extension', name: 'Sammamish River segment', localJurisdictionId: 'woodinville', location: '0.8 mi, NE 145th St to NE 175th St' },
  { id: 'ns-redmond', projectId: 'northshore-trail-extension', name: 'Bear Creek bridge', localJurisdictionId: 'redmond', location: 'Bear Creek at Avondale Rd' },
  { id: 'ns-kc', projectId: 'northshore-trail-extension', name: 'Cottage Lake connector', localJurisdictionId: 'king-county', location: '1.1 mi, unincorporated King County' },
  { id: 'ls7', projectId: 'lift-station-7-upgrade', name: 'Lift Station 7', localJurisdictionId: 'lake-stevens', location: 'Parcel 29061400301200' },
  { id: 'pl-north', projectId: 'puyallup-levee-setback', name: 'North reach setback', localJurisdictionId: 'pierce-county', location: 'Puyallup River, RM 8.2–9.0' },
  { id: 'pl-south', projectId: 'puyallup-levee-setback', name: 'South reach setback', localJurisdictionId: 'pierce-county', location: 'Puyallup River, RM 9.0–9.7' },
];

/** Keyed by site id, or `project:<id>` for project-wide permits. */
const ACTIVE_SPECS: Record<string, PermitSpec[]> = {
  'project:coal-creek-fish-passage': [
    { id: 'cc-sepa', type: 'sepa', trigger: 'Two culvert replacements exceed the categorical exemption for in-stream work', assignee: 'Maya Okafor', agencyRef: '25-118402-LE', submitted: '2025-11-03', reviews: ['2025-12-12'], issued: '2026-01-20', hasConditions: true },
    { id: 'cc-401', type: 'ecy-401', trigger: 'Federal permit for discharge of fill to waters of the state at both crossings', assignee: 'Sam Whitford', agencyRef: 'ECY-31877', submitted: '2026-03-16', reviews: ['2026-06-05'], issued: '2026-08-11', hasConditions: true },
    { id: 'cc-404', type: 'usace-404', trigger: 'Temporary fill below the ordinary high water mark during culvert removal', assignee: 'Sam Whitford', agencyRef: 'NWS-2026-0412', submitted: '2026-03-16', reviews: ['2026-05-28', '2026-09-02'], dependsOn: ['cc-401'], status: 'Additional Info Requested' },
    { id: 'cc-cswgp', type: 'ecy-cswgp', trigger: 'Combined disturbance of 2.1 acres including staging', assignee: 'Grace Huang', prereqsDone: 2, dependsOn: ['cc-sepa'] },
  ],
  'cc-se60': [
    { id: 'cc1-cao', type: 'critical-areas', trigger: 'Work within the Coal Creek stream buffer (Type F) and a Category III wetland buffer', assignee: 'Grace Huang', agencyRef: '26-102215-LO', submitted: '2026-02-09', reviews: ['2026-04-02', '2026-06-18', '2026-08-27'], dependsOn: ['cc-sepa'], status: 'Corrections Requested' },
    { id: 'cc1-hpa', type: 'wdfw-hpa', trigger: 'Work in the ordinary high water line of a fish-bearing stream', assignee: 'Maya Okafor', agencyRef: '2026-4-0217+01', submitted: '2026-02-23', reviews: ['2026-03-30'], issued: '2026-04-08', hasConditions: true, dependsOn: ['cc-sepa'] },
    { id: 'cc1-grading', type: 'grading', trigger: 'Excavation of 2,400 cubic yards for the new channel', assignee: 'Grace Huang', prereqsDone: 1, dependsOn: ['cc1-cao'] },
  ],
  'cc-newport': [
    { id: 'cc2-cao', type: 'critical-areas', trigger: 'Work in the Coal Creek aquatic area and its 165 ft buffer', assignee: 'Grace Huang', agencyRef: 'CAOR26-0031', submitted: '2026-03-19', reviews: ['2026-06-11', '2026-09-14'], dependsOn: ['cc-sepa'] },
    { id: 'cc2-hpa', type: 'wdfw-hpa', trigger: 'Work in the ordinary high water line of a fish-bearing stream', assignee: 'Maya Okafor', agencyRef: '2026-4-0388+01', submitted: '2026-04-06', reviews: ['2026-05-12'], issued: '2026-05-21', hasConditions: true, dependsOn: ['cc-sepa'] },
    { id: 'cc2-grading', type: 'grading', trigger: 'Excavation and fill exceeding 100 cubic yards', assignee: 'Grace Huang', prereqsDone: 1, dependsOn: ['cc2-cao'] },
  ],
  'project:northshore-trail-extension': [
    { id: 'ns-sepa', type: 'sepa', trigger: 'New regional trail over 1/4 mile, partly within shoreline jurisdiction', assignee: 'Daniel Reyes', agencyRef: 'SEPA25-0112', submitted: '2025-09-15', reviews: ['2025-10-24'], issued: '2025-11-13' },
    { id: 'ns-cswgp', type: 'ecy-cswgp', trigger: 'Disturbance of 3.4 acres along the full corridor', assignee: 'Priya Natarajan', agencyRef: 'WAR312455', submitted: '2026-06-01', reviews: [], issued: '2026-07-14', dependsOn: ['ns-sepa'] },
  ],
  'ns-woodinville': [
    { id: 'ns1-ssdp', type: 'ssdp', trigger: 'Development within 200 ft of the Sammamish River (shoreline of the state)', assignee: 'Daniel Reyes', agencyRef: 'SHR25-0007', submitted: '2025-12-08', reviews: ['2026-02-17', '2026-04-30'], issued: '2026-07-06', hasConditions: true, dependsOn: ['ns-sepa'] },
    { id: 'ns1-cao', type: 'critical-areas', trigger: 'Boardwalk across a Category II wetland buffer', assignee: 'Priya Natarajan', agencyRef: 'CAR25-0019', submitted: '2025-12-08', reviews: ['2026-02-02', '2026-03-26'], issued: '2026-05-11', hasConditions: true, dependsOn: ['ns-sepa'] },
    { id: 'ns1-grading', type: 'grading', trigger: 'Trail subgrade preparation over 500 cubic yards', assignee: 'Priya Natarajan', agencyRef: 'GRD26-0144', submitted: '2026-07-20', reviews: ['2026-09-04'], dependsOn: ['ns1-cao'] },
  ],
  'ns-redmond': [
    { id: 'ns2-cao', type: 'critical-areas', trigger: 'Abutments within the Bear Creek riparian buffer', assignee: 'Priya Natarajan', agencyRef: 'LAND-2026-00093', submitted: '2026-01-26', reviews: ['2026-03-20', '2026-05-15'], issued: '2026-06-24', hasConditions: true, dependsOn: ['ns-sepa'] },
    { id: 'ns2-hpa', type: 'wdfw-hpa', trigger: 'Bridge construction over a fish-bearing stream', assignee: 'Daniel Reyes', agencyRef: '2026-4-0101+01', submitted: '2026-01-12', reviews: ['2026-02-19'], issued: '2026-02-26', hasConditions: true, dependsOn: ['ns-sepa'] },
    { id: 'ns2-401', type: 'ecy-401', trigger: 'Federal permit for temporary work-bridge fill', assignee: 'Sam Whitford', agencyRef: 'ECY-31402', submitted: '2026-02-02', reviews: ['2026-04-20'], issued: '2026-06-02' },
    { id: 'ns2-404', type: 'usace-404', trigger: 'Temporary work bridge piers below ordinary high water', assignee: 'Sam Whitford', agencyRef: 'NWS-2026-0077', submitted: '2026-02-02', reviews: ['2026-04-14'], issued: '2026-07-21', hasConditions: true, dependsOn: ['ns2-401'] },
  ],
  'ns-kc': [
    { id: 'ns3-cao', type: 'critical-areas', trigger: 'Trail alignment through a wildlife habitat network', assignee: 'Priya Natarajan', prereqsDone: 2, dependsOn: ['ns-sepa'] },
    { id: 'ns3-grading', type: 'grading', trigger: 'Clearing over 7,000 square feet', assignee: 'Priya Natarajan', prereqsDone: 0, dependsOn: ['ns3-cao'] },
  ],
  ls7: [
    { id: 'ls-sepa', type: 'sepa', trigger: 'Replacement facility with a new force main within 200 ft of Lake Stevens', assignee: 'Priya Natarajan', agencyRef: 'LUA2026-0044', submitted: '2026-04-13', reviews: ['2026-05-27'], issued: '2026-06-22' },
    { id: 'ls-cao', type: 'critical-areas', trigger: 'Force main crossing a Category III wetland buffer', assignee: 'Tom Lindqvist', agencyRef: 'LUA2026-0071', submitted: '2026-07-06', reviews: ['2026-08-21'], dependsOn: ['ls-sepa'] },
    { id: 'ls-ssdp', type: 'ssdp', trigger: 'Development within 200 ft of Lake Stevens', assignee: 'Tom Lindqvist', agencyRef: 'LUA2026-0072', submitted: '2026-07-06', reviews: ['2026-09-10'], dependsOn: ['ls-sepa'], status: 'Public Notice' },
    { id: 'ls-cswgp', type: 'ecy-cswgp', trigger: 'Disturbance of 1.1 acres', assignee: 'Tom Lindqvist', prereqsDone: 3, dependsOn: ['ls-sepa'], status: 'Public Notice' },
    { id: 'ls-grading', type: 'grading', trigger: 'Excavation for the new wet well', assignee: 'Tom Lindqvist', prereqsDone: 1, dependsOn: ['ls-cao'] },
  ],
  'project:puyallup-levee-setback': [
    { id: 'pl-sepa', type: 'sepa', trigger: 'Levee relocation in the Puyallup River floodplain', assignee: 'Tom Lindqvist', agencyRef: 'SEPA24-0312', submitted: '2024-11-18', reviews: ['2025-01-10', '2025-03-04'], issued: '2025-04-02', hasConditions: true },
    { id: 'pl-401', type: 'ecy-401', trigger: 'Federal permit for fill in the active channel', assignee: 'Sam Whitford', agencyRef: 'ECY-29910', submitted: '2025-03-10', reviews: ['2025-06-02'], issued: '2025-08-19', hasConditions: true },
    { id: 'pl-404', type: 'usace-404', trigger: 'Fill and excavation in waters of the U.S. for both setback reaches', assignee: 'Sam Whitford', agencyRef: 'NWS-2025-0219', submitted: '2025-03-10', reviews: ['2025-05-22', '2025-09-11'], issued: '2025-11-03', hasConditions: true, dependsOn: ['pl-401'] },
    { id: 'pl-hpa', type: 'wdfw-hpa', trigger: 'Levee breaches and side-channel excavation', assignee: 'Grace Huang', agencyRef: '2025-6-0544+01', submitted: '2025-05-12', reviews: ['2025-06-20'], issued: '2025-06-26', hasConditions: true, dependsOn: ['pl-sepa'] },
    { id: 'pl-cswgp', type: 'ecy-cswgp', trigger: 'Disturbance of 23 acres across both reaches', assignee: 'Grace Huang', agencyRef: 'WAR310877', submitted: '2025-10-13', reviews: [], issued: '2025-11-24', dependsOn: ['pl-sepa'] },
  ],
  'pl-north': [
    { id: 'pl1-cao', type: 'critical-areas', trigger: 'Work in the flood hazard area and Puyallup River riparian buffer', assignee: 'Grace Huang', agencyRef: 'CAV25-0188', submitted: '2025-05-05', reviews: ['2025-06-27', '2025-08-22'], issued: '2025-09-30', hasConditions: true, dependsOn: ['pl-sepa'] },
    { id: 'pl1-ssdp', type: 'ssdp', trigger: 'Development within the Puyallup River shoreline', assignee: 'Tom Lindqvist', agencyRef: 'SD25-0041', submitted: '2025-05-05', reviews: ['2025-07-14', '2025-10-06'], issued: '2025-12-15', hasConditions: true, dependsOn: ['pl-sepa'] },
    { id: 'pl1-grading', type: 'grading', trigger: 'Earthwork of 86,000 cubic yards', assignee: 'Grace Huang', agencyRef: 'GRD25-1120', submitted: '2025-10-20', reviews: ['2025-12-04'], issued: '2026-01-08', hasConditions: true, dependsOn: ['pl1-cao'] },
  ],
  'pl-south': [
    { id: 'pl2-cao', type: 'critical-areas', trigger: 'Work in the flood hazard area and a Category II wetland', assignee: 'Grace Huang', agencyRef: 'CAV25-0189', submitted: '2025-05-05', reviews: ['2025-06-27', '2025-08-22', '2025-11-14'], issued: '2026-01-12', hasConditions: true, dependsOn: ['pl-sepa'] },
    { id: 'pl2-grading', type: 'grading', trigger: 'Earthwork of 52,000 cubic yards', assignee: 'Grace Huang', agencyRef: 'GRD26-0015', submitted: '2026-01-26', reviews: ['2026-03-06'], issued: '2026-04-14', dependsOn: ['pl2-cao'] },
  ],
};

// ── CLOSED projects (generated from a fixed seed — the timelines' past) ─────

interface ClosedSeed {
  id: string;
  name: string;
  number: string;
  client: string;
  manager: string;
  start: string;
  sites: { name: string; localJurisdictionId: string; location: string; types: PermitTypeId[] }[];
}

const CLOSED_SEEDS: ClosedSeed[] = [
  {
    id: 'issaquah-creek-restoration', name: 'Issaquah Creek Floodplain Restoration', number: '2021-0155', client: 'Issaquah Basin Alliance', manager: 'Maya Okafor', start: '2021-03-01',
    sites: [{ name: 'Lower reach', localJurisdictionId: 'king-county', location: 'Issaquah Creek, RM 1.0–1.6', types: ['sepa', 'critical-areas', 'wdfw-hpa', 'ecy-401', 'usace-404', 'grading'] }],
  },
  {
    id: 'bel-red-stormwater', name: 'Bel-Red Regional Stormwater Facility', number: '2021-0402', client: 'Eastside Surface Water Utility', manager: 'Grace Huang', start: '2021-08-15',
    sites: [{ name: 'Facility site', localJurisdictionId: 'bellevue', location: 'Parcel 2825059128', types: ['sepa', 'critical-areas', 'ecy-cswgp', 'grading'] }],
  },
  {
    id: 'evans-creek-relocation', name: 'Evans Creek Relocation', number: '2022-0090', client: 'Redmond Ridge Holdings', manager: 'Daniel Reyes', start: '2022-02-01',
    sites: [
      { name: 'Upper channel', localJurisdictionId: 'redmond', location: 'Evans Creek, RM 2.1', types: ['sepa', 'critical-areas', 'wdfw-hpa', 'ecy-401', 'usace-404'] },
      { name: 'Staging area', localJurisdictionId: 'redmond', location: 'Parcel 1225069031', types: ['ecy-cswgp', 'grading'] },
    ],
  },
  {
    id: 'snohomish-estuary-dikes', name: 'Snohomish Estuary Dike Breach', number: '2022-0377', client: 'Lowland Salmon Trust', manager: 'Tom Lindqvist', start: '2022-06-01',
    sites: [
      { name: 'Ebey Slough breach', localJurisdictionId: 'snohomish-county', location: 'Ebey Slough, RM 3.4', types: ['sepa', 'critical-areas', 'ssdp', 'wdfw-hpa', 'ecy-401', 'usace-404'] },
      { name: 'Union Slough breach', localJurisdictionId: 'snohomish-county', location: 'Union Slough, RM 1.8', types: ['critical-areas', 'ssdp', 'wdfw-hpa', 'grading'] },
    ],
  },
  {
    id: 'woodinville-sewer-interceptor', name: 'Woodinville Sewer Interceptor', number: '2023-0021', client: 'Northshore Utility Cooperative', manager: 'Priya Natarajan', start: '2023-01-15',
    sites: [{ name: 'Interceptor alignment', localJurisdictionId: 'woodinville', location: '1.9 mi along SR 202', types: ['sepa', 'critical-areas', 'ssdp', 'ecy-cswgp', 'grading'] }],
  },
  {
    id: 'clear-creek-fish-passage', name: 'Clear Creek Fish Passage', number: '2023-0244', client: 'Pierce Flood Control Partners', manager: 'Tom Lindqvist', start: '2023-04-01',
    sites: [{ name: 'Pioneer Way culvert', localJurisdictionId: 'pierce-county', location: 'Clear Creek, RM 0.6', types: ['sepa', 'critical-areas', 'wdfw-hpa', 'ecy-401', 'usace-404', 'grading'] }],
  },
  {
    id: 'deschutes-trailhead', name: 'Deschutes Falls Trailhead', number: '2023-0519', client: 'South Sound Parks Foundation', manager: 'Daniel Reyes', start: '2023-09-01',
    sites: [{ name: 'Trailhead and parking', localJurisdictionId: 'thurston-county', location: 'Parcel 21722240100', types: ['sepa', 'critical-areas', 'ecy-cswgp', 'grading'] }],
  },
  {
    id: 'lake-stevens-outfall', name: 'Lake Stevens Outfall Replacement', number: '2024-0103', client: 'Lake Stevens Sewer District', manager: 'Priya Natarajan', start: '2024-02-01',
    sites: [{ name: 'Outfall', localJurisdictionId: 'lake-stevens', location: 'Lake Stevens, north shore', types: ['sepa', 'critical-areas', 'ssdp', 'wdfw-hpa', 'ecy-401', 'usace-404'] }],
  },
  {
    id: 'thornton-creek-daylighting', name: 'Thornton Creek Daylighting', number: '2024-0266', client: 'North Lake Watershed Council', manager: 'Grace Huang', start: '2024-03-15',
    sites: [{ name: 'Daylight reach', localJurisdictionId: 'king-county', location: 'Thornton Creek, RM 2.2', types: ['sepa', 'critical-areas', 'wdfw-hpa', 'ecy-401', 'usace-404', 'ecy-cswgp'] }],
  },
  {
    id: 'kelsey-creek-bank-stabilization', name: 'Kelsey Creek Bank Stabilization', number: '2022-0193', client: 'Eastside Surface Water Utility', manager: 'Sam Whitford', start: '2022-04-01',
    sites: [
      { name: 'Lake Hills reach', localJurisdictionId: 'bellevue', location: 'Kelsey Creek, RM 3.1', types: ['sepa', 'critical-areas', 'wdfw-hpa', 'grading'] },
      { name: 'Larsen Lake outlet', localJurisdictionId: 'bellevue', location: 'Kelsey Creek, RM 4.0', types: ['critical-areas', 'wdfw-hpa', 'ecy-401', 'usace-404'] },
    ],
  },
  {
    id: 'cedar-river-trail-bridges', name: 'Cedar River Trail Bridges', number: '2022-0458', client: 'Cedar Valley Trails Coalition', manager: 'Daniel Reyes', start: '2022-10-01',
    sites: [
      { name: 'Bridge 3', localJurisdictionId: 'king-county', location: 'Cedar River, RM 11.2', types: ['sepa', 'critical-areas', 'ssdp', 'wdfw-hpa', 'grading'] },
      { name: 'Bridge 5', localJurisdictionId: 'king-county', location: 'Cedar River, RM 13.6', types: ['critical-areas', 'ssdp', 'wdfw-hpa', 'ecy-cswgp'] },
    ],
  },
  {
    id: 'pilchuck-dam-removal', name: 'Pilchuck River Diversion Removal', number: '2023-0336', client: 'Lowland Salmon Trust', manager: 'Maya Okafor', start: '2023-05-15',
    sites: [{ name: 'Diversion structure', localJurisdictionId: 'snohomish-county', location: 'Pilchuck River, RM 26.4', types: ['sepa', 'critical-areas', 'ssdp', 'wdfw-hpa', 'ecy-401', 'usace-404', 'grading'] }],
  },
  {
    id: 'clover-creek-culverts', name: 'Clover Creek Culverts', number: '2024-0048', client: 'Pierce Flood Control Partners', manager: 'Grace Huang', start: '2024-01-10',
    sites: [
      { name: 'Steele St culvert', localJurisdictionId: 'pierce-county', location: 'Clover Creek, RM 4.7', types: ['sepa', 'critical-areas', 'wdfw-hpa', 'grading'] },
      { name: '112th St culvert', localJurisdictionId: 'pierce-county', location: 'Clover Creek, RM 5.5', types: ['critical-areas', 'wdfw-hpa', 'ecy-cswgp'] },
    ],
  },
  // Southwest Washington (appended last so the seeds above keep their random draws).
  {
    id: 'newaukum-bridge-replacement', name: 'Newaukum River Bridge Replacement', number: '2022-0512', client: 'Lewis County Public Works', manager: 'Sam Whitford', start: '2022-09-01',
    sites: [
      { name: 'North Fork bridge', localJurisdictionId: 'lewis-county', location: 'North Fork Newaukum River, RM 3.2', types: ['sepa', 'critical-areas', 'wdfw-hpa', 'ecy-401', 'usace-404', 'grading'] },
      { name: 'Napavine approach', localJurisdictionId: 'napavine', location: 'Rush Rd at the city limit', types: ['critical-areas', 'ecy-cswgp', 'grading'] },
    ],
  },
  {
    id: 'willapa-levee-repair', name: 'Willapa River Levee Repair', number: '2023-0148', client: 'Willapa Harbor Diking District', manager: 'Grace Huang', start: '2023-03-01',
    sites: [
      { name: 'Raymond waterfront', localJurisdictionId: 'raymond', location: 'Willapa River, RM 4.1', types: ['sepa', 'critical-areas', 'ssdp', 'wdfw-hpa', 'ecy-401', 'usace-404'] },
      { name: 'South Fork reach', localJurisdictionId: 'pacific-county', location: 'South Fork Willapa River, RM 1.3', types: ['critical-areas', 'ssdp', 'wdfw-hpa'] },
    ],
  },
  {
    id: 'wishkah-culvert-replacement', name: 'Wishkah River Road Culvert Replacement', number: '2024-0177', client: 'Grays Harbor County Public Services', manager: 'Daniel Reyes', start: '2024-02-15',
    sites: [{ name: 'Wishkah Rd MP 8.6', localJurisdictionId: 'grays-harbor-county', location: 'Unnamed tributary to the Wishkah River', types: ['sepa', 'critical-areas', 'wdfw-hpa', 'ecy-401', 'usace-404', 'grading'] }],
  },
];

/**
 * Days from submittal to issuance, [base, spread] — the generator's "truth". Local critical
 * areas and shoreline permits vary by jurisdiction, which is the whole point of the
 * timelines page.
 */
const DURATION: Record<PermitTypeId, [number, number]> = {
  sepa: [55, 30],
  'critical-areas': [140, 70],
  ssdp: [180, 80],
  grading: [60, 40],
  'wdfw-hpa': [42, 20],
  'ecy-cswgp': [40, 12],
  'ecy-401': [150, 70],
  'usace-404': [170, 110],
};
const LOCAL_FACTOR: Record<string, number> = {
  'king-county': 1.45,
  bellevue: 1.15,
  redmond: 0.9,
  woodinville: 0.8,
  'snohomish-county': 1.05,
  'lake-stevens': 0.85,
  'pierce-county': 0.75,
  'thurston-county': 0.95,
  'lewis-county': 0.7,
  napavine: 0.6,
  'grays-harbor-county': 0.8,
  'pacific-county': 0.65,
  raymond: 0.6,
};
const ORDER: PermitTypeId[] = ['sepa', 'ecy-401', 'usace-404', 'wdfw-hpa', 'critical-areas', 'ssdp', 'ecy-cswgp', 'grading'];
const DEPENDS: Partial<Record<PermitTypeId, PermitTypeId[]>> = {
  'critical-areas': ['sepa'],
  ssdp: ['sepa'],
  'wdfw-hpa': ['sepa'],
  'ecy-cswgp': ['sepa'],
  'usace-404': ['ecy-401'],
  grading: ['critical-areas'],
};
/** On a multi-site project these are filed once for the whole project. */
const PROJECT_WIDE_TYPES: PermitTypeId[] = ['sepa', 'ecy-401', 'usace-404', 'ecy-cswgp'];
const CLOSED_TRIGGER: Record<PermitTypeId, string> = {
  sepa: 'Project exceeds categorical exemption thresholds',
  'critical-areas': 'Work within a regulated stream or wetland buffer',
  ssdp: 'Development within shoreline jurisdiction',
  grading: 'Earthwork over the permit threshold',
  'wdfw-hpa': 'Work within the ordinary high water line',
  'ecy-cswgp': 'Disturbance of one acre or more',
  'ecy-401': 'Federal permit for discharge to waters of the state',
  'usace-404': 'Fill in waters of the U.S.',
};

function buildClosed(): { projects: Project[]; sites: Site[]; permits: Permit[] } {
  const rand = seeded(20260611);
  const projects: Project[] = [];
  const sites: Site[] = [];
  const permits: Permit[] = [];
  for (const seed of CLOSED_SEEDS) {
    let latest = seed.start;
    const lead = seed.sites[0].localJurisdictionId;
    const multi = seed.sites.length > 1;
    const wide = new Set(multi ? PROJECT_WIDE_TYPES.filter((t) => seed.sites.some((s) => s.types.includes(t))) : []);
    /** Issued date by "scope|type", where scope is 'project' or a site id. */
    const issuedAt = new Map<string, string>();

    const make = (scope: Scope, scopeKey: string, type: PermitTypeId) => {
      const t = permitType(type);
      const [base, spread] = DURATION[type];
      const factor = t.level === 'Local' ? LOCAL_FACTOR[scope.localJurisdictionId] ?? 1 : 1;
      const duration = Math.round((base + (rand() - 0.5) * spread) * factor);
      const depKeys = (DEPENDS[type] ?? [])
        .map((d) => (wide.has(d) ? `project|${d}` : `${scopeKey}|${d}`))
        .filter((k) => issuedAt.has(k));
      const ready = depKeys.length ? depKeys.map((k) => issuedAt.get(k)!).sort().at(-1)! : seed.start;
      const submitted = addDays(ready, 7 + Math.round(rand() * 35));
      const issued = addDays(submitted, duration);
      const maxRounds = t.level === 'Local' ? 3 : 2;
      const rounds = type === 'ecy-cswgp' ? 0 : 1 + Math.floor(rand() * maxRounds);
      const reviews = Array.from({ length: rounds }, (_, i) => addDays(submitted, Math.round((duration * (i + 1)) / (rounds + 1))));
      issuedAt.set(`${scopeKey}|${type}`, issued);
      if (issued > latest) latest = issued;
      const idOf = (k: string) => {
        const [sc, ty] = k.split('|');
        return sc === 'project' ? `${seed.id}-${ty}` : `${sc}-${ty}`;
      };
      permits.push(
        buildPermit(scope, {
          id: idOf(`${scopeKey}|${type}`),
          type,
          trigger: CLOSED_TRIGGER[type],
          assignee: STAFF[Math.floor(rand() * STAFF.length)],
          agencyRef: `${type === 'usace-404' ? 'NWS' : type === 'wdfw-hpa' ? 'HPA' : type.startsWith('ecy') ? 'ECY' : 'LU'}-${submitted.slice(0, 4)}-${String(100 + Math.floor(rand() * 900))}`,
          submitted,
          reviews,
          issued,
          hasConditions: rand() < 0.6,
          dependsOn: depKeys.map(idOf),
        }),
      );
    };

    for (const type of ORDER.filter((t) => wide.has(t))) make({ projectId: seed.id, localJurisdictionId: lead }, 'project', type);
    seed.sites.forEach((ss, si) => {
      const site: Site = { id: `${seed.id}-s${si + 1}`, projectId: seed.id, name: ss.name, location: ss.location };
      sites.push(site);
      for (const type of ORDER.filter((t) => ss.types.includes(t) && !wide.has(t))) {
        make({ projectId: seed.id, siteId: site.id, localJurisdictionId: ss.localJurisdictionId }, site.id, type);
      }
    });
    projects.push({
      id: seed.id,
      name: seed.name,
      number: seed.number,
      client: seed.client,
      manager: seed.manager,
      status: 'closed',
      leadJurisdictionId: lead,
      constructionStart: addDays(latest, 30),
    });
  }
  return { projects, sites, permits };
}

const closed = buildClosed();

export const PROJECTS: Project[] = [...ACTIVE_PROJECTS, ...closed.projects];
export const SITES: Site[] = [...ACTIVE_SITES.map(({ localJurisdictionId: _, ...site }) => site), ...closed.sites];

const activePermits = (): Permit[] => {
  const out: Permit[] = [];
  for (const p of ACTIVE_PROJECTS) {
    for (const spec of ACTIVE_SPECS[`project:${p.id}`] ?? []) out.push(buildPermit({ projectId: p.id, localJurisdictionId: p.leadJurisdictionId }, spec));
    for (const site of ACTIVE_SITES.filter((s) => s.projectId === p.id)) {
      for (const spec of ACTIVE_SPECS[site.id] ?? []) out.push(buildPermit({ projectId: p.id, siteId: site.id, localJurisdictionId: site.localJurisdictionId }, spec));
    }
  }
  return out;
};

export const PERMITS: Permit[] = [...activePermits(), ...closed.permits];

const permitById = new Map(PERMITS.map((p) => [p.id, p]));
const siteById = new Map(SITES.map((s) => [s.id, s]));
const projectById = new Map(PROJECTS.map((p) => [p.id, p]));

export const getPermit = (id: string) => permitById.get(id);

/**
 * A new permit, built the way the fixture builds its own (name, level, agency, first
 * status, the type's application checklist). Used by Add permit (src/lib/added-permits-store.ts).
 */
export const createPermit = (scope: { projectId: string; siteId?: string; localJurisdictionId: string }, spec: { id: string; type: PermitTypeId; trigger: string; assignee: string; dependsOn: string[] }): Permit =>
  buildPermit(scope, spec);

/** Add a browser-created permit to PERMITS so every lookup (permitsOfProject, getPermit,
 *  readiness, blockers) sees it. Idempotent. */
export function registerPermit(p: Permit) {
  if (permitById.has(p.id)) return;
  PERMITS.push(p);
  permitById.set(p.id, p);
}
export const getSite = (id: string) => siteById.get(id)!;
export const getProject = (id: string) => projectById.get(id)!;
export const sitesOf = (projectId: string) => SITES.filter((s) => s.projectId === projectId);
/** Every permit on the project, project-wide first. */
export const permitsOfProject = (projectId: string) => PERMITS.filter((p) => p.projectId === projectId).sort((a, b) => Number(!!a.siteId) - Number(!!b.siteId));
export const projectWidePermits = (projectId: string) => PERMITS.filter((p) => p.projectId === projectId && !p.siteId);
export const permitsOfSite = (siteId: string) => PERMITS.filter((p) => p.siteId === siteId);
/** People on a team without a permit of their own yet. */
const EXTRA_TEAM: Record<string, string[]> = {
  'lift-station-7-upgrade': ['Maya Okafor'],
  'northshore-trail-extension': ['Elena Vasquez'],
};
/**
 * The project's starting team: the project manager, anyone added by hand, then everyone
 * assigned one of its permits. People are added and removed in the browser
 * (src/lib/project-team-store.ts); this is what a fresh browser sees.
 */
export const teamOf = (projectId: string): string[] => {
  const project = getProject(projectId);
  return [...new Set([project.manager, ...(EXTRA_TEAM[projectId] ?? []), ...permitsOfProject(projectId).map((p) => p.assignee)])];
};
/** "Project-wide" or the site's name. */
export const scopeLabel = (p: Permit) => (p.siteId ? getSite(p.siteId).name : 'Project-wide');

// ── derived flags (never statuses) ───────────────────────────────────────────

/** Issued permits expiring within this many days carry the "Expires soon" flag. */
export const EXPIRING_WINDOW = 90;

/** Unissued permits this one waits on. Non-empty = the "Waiting on" flag. */
export const blockers = (p: Permit): Permit[] => (p.issued ? [] : p.dependsOn.map((d) => permitById.get(d)!).filter((d) => !d.issued));

export type ExpiryFlag = 'expiring' | 'expired' | undefined;
export function expiryFlag(p: Permit, today = TODAY): ExpiryFlag {
  if (!p.expires) return undefined;
  if (p.expires < today) return 'expired';
  return daysBetween(today, p.expires) <= EXPIRING_WINDOW ? 'expiring' : undefined;
}

/** Days from submittal to issuance; undefined until issued. */
export const daysToIssue = (p: Permit) => (p.submitted && p.issued ? daysBetween(p.submitted, p.issued) : undefined);

/** Days in agency review so far (submitted, not yet issued). */
export const daysInReview = (p: Permit, today = TODAY) => (p.submitted && !p.issued ? daysBetween(p.submitted, today) : undefined);

/** Step in the project's dependency chain: 1 for permits that wait on nothing, else one past the deepest prerequisite permit. */
export function chainStep(p: Permit): number {
  if (!p.dependsOn.length) return 1;
  return 1 + Math.max(...p.dependsOn.map((d) => chainStep(permitById.get(d)!)));
}

/** Permits that wait on this one. */
export const dependents = (p: Permit) => PERMITS.filter((o) => o.dependsOn.includes(p.id));

// ── timelines (the "how long do permits take" benchmarks) ────────────────────

export interface TimelineRow {
  typeId: PermitTypeId;
  typeName: string;
  level: Level;
  jurisdictionId: string;
  jurisdictionName: string;
  count: number;
  median: number;
  min: number;
  max: number;
  /** Mean agency review rounds before issuance. */
  avgReviews: number;
  samples: { permitId: string; projectName: string; days: number; issued: string }[];
}

const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2);
};

let timelineCache: TimelineRow[] | undefined;

/** Every issued permit, grouped by permit type × jurisdiction. */
export function timelines(): TimelineRow[] {
  if (timelineCache) return timelineCache;
  const groups = new Map<string, Permit[]>();
  for (const p of PERMITS) {
    if (daysToIssue(p) === undefined) continue;
    const key = `${p.typeId}|${p.jurisdictionId}`;
    groups.set(key, [...(groups.get(key) ?? []), p]);
  }
  const rows: TimelineRow[] = [];
  for (const list of groups.values()) {
    const p0 = list[0];
    const days = list.map((p) => daysToIssue(p)!);
    rows.push({
      typeId: p0.typeId,
      typeName: permitType(p0.typeId).name,
      level: p0.level,
      jurisdictionId: p0.jurisdictionId,
      jurisdictionName: jurisdiction(p0.jurisdictionId).name,
      count: list.length,
      median: median(days),
      min: Math.min(...days),
      max: Math.max(...days),
      avgReviews: Math.round((list.reduce((n, p) => n + p.reviews.length, 0) / list.length) * 10) / 10,
      samples: list
        .map((p) => ({ permitId: p.id, projectName: getProject(p.projectId).name, days: daysToIssue(p)!, issued: p.issued! }))
        .sort((a, b) => b.issued.localeCompare(a.issued)),
    });
  }
  const levelOrder: Level[] = ['Federal', 'State', 'Local'];
  timelineCache = rows.sort(
    (a, b) => levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level) || a.typeName.localeCompare(b.typeName) || a.jurisdictionName.localeCompare(b.jurisdictionName),
  );
  return timelineCache;
}

/** Shared axis (days) for every duration strip: the slowest issued permit, rounded up to a month. */
export const timelineAxisMax = () => Math.ceil(Math.max(...timelines().map((r) => r.max)) / 30) * 30;

/** The benchmark row for one permit's type × jurisdiction. */
export const timelineFor = (p: Permit) => timelines().find((r) => r.typeId === p.typeId && r.jurisdictionId === p.jurisdictionId);

/** Expected issuance for an unissued, submitted permit: submittal + the benchmark median. */
export function expectedIssue(p: Permit): string | undefined {
  if (p.issued || !p.submitted) return undefined;
  const t = timelineFor(p);
  return t ? addDays(p.submitted, t.median) : undefined;
}

/** Days assumed between the last prerequisite permit issuing and this application going in. */
export const PREP_DAYS = 30;
/** Days still assumed for a permit already past its typical review time. */
export const OVERRUN_DAYS = 30;

/**
 * Forecast issuance for ANY permit, walking the dependency chain:
 *   issued        → its issued date
 *   in review     → submittal + median, or TODAY + OVERRUN_DAYS once past typical
 *   not submitted → (latest of TODAY and its prerequisites' forecasts) + PREP_DAYS + median
 * The median is the type × jurisdiction benchmark, else the type's median anywhere.
 * Undefined only when the type has no history at all.
 */
export function forecastIssue(p: Permit, today = TODAY): string | undefined {
  if (p.issued) return p.issued;
  const row = timelineFor(p);
  const typeDays = timelines()
    .filter((r) => r.typeId === p.typeId)
    .flatMap((r) => r.samples.map((s) => s.days));
  const days = row?.median ?? (typeDays.length ? median(typeDays) : undefined);
  if (days === undefined) return undefined;
  if (p.submitted) {
    const due = addDays(p.submitted, days);
    return due < today ? addDays(today, OVERRUN_DAYS) : due;
  }
  let ready = today;
  for (const d of p.dependsOn) {
    const f = forecastIssue(permitById.get(d)!, today);
    if (f === undefined) return undefined;
    if (f > ready) ready = f;
  }
  return addDays(ready, PREP_DAYS + days);
}

/**
 * When the application goes in: the real submittal date, or for an unsubmitted permit
 * the latest of TODAY and its prerequisites' forecasts, plus PREP_DAYS (the same walk
 * as forecastIssue). Undefined when a prerequisite can't be forecast.
 */
export function forecastSubmit(p: Permit, today = TODAY): string | undefined {
  if (p.submitted) return p.submitted;
  let ready = today;
  for (const d of p.dependsOn) {
    const f = forecastIssue(permitById.get(d)!, today);
    if (f === undefined) return undefined;
    if (f > ready) ready = f;
  }
  return addDays(ready, PREP_DAYS);
}

// ── readiness (will every permit be issued by construction start?) ───────────

export type ReadinessState = 'all-issued' | 'on-track' | 'unconfirmed' | 'at-risk';

export const READINESS_BADGE: Record<ReadinessState, { label: string; variant: 'success' | 'warning' | 'danger' }> = {
  'all-issued': { label: 'All issued', variant: 'success' },
  'on-track': { label: 'On track', variant: 'success' },
  unconfirmed: { label: 'Unconfirmed', variant: 'warning' },
  'at-risk': { label: 'At risk', variant: 'danger' },
};

export interface Schedule {
  issued: number;
  total: number;
  outstanding: number;
  /** Outstanding permits whose type has no history to forecast from. */
  unforecast: number;
  allIssued: boolean;
  /** The last issue date: real or forecast. Undefined when nothing outstanding can be forecast. */
  expectedAll?: string;
  /** Days from construction start to expectedAll: > 0 means after start. */
  gap?: number;
  /** Permits that expire before construction start, soonest first. */
  expiresBeforeStart: Permit[];
  /**
   * At risk: expected all-issued after construction start, or a permit expiring before it.
   * All issued: nothing outstanding. Unconfirmed: a permit can't be forecast. Else on track.
   */
  state: ReadinessState;
}

/**
 * Whether a set of permits (a project, or one site plus the project-wide permits) will
 * all be issued by `start`. Pure: the project page and the Projects cards call it with the
 * construction start saved in the browser, so editing that date re-runs it.
 */
export function scheduleOf(permits: Permit[], start: string): Schedule {
  const open = permits.filter((p) => !p.issued);
  const forecasts = open.map((p) => forecastIssue(p));
  const unforecast = forecasts.filter((d) => !d).length;
  const allIssued = open.length === 0 && permits.length > 0;
  const known = [...permits.filter((p) => p.issued).map((p) => p.issued!), ...forecasts.filter((d): d is string => !!d)].sort();
  const expectedAll = known.length && (allIssued || unforecast < open.length) ? known[known.length - 1] : undefined;
  const gap = expectedAll ? daysBetween(start, expectedAll) : undefined;
  const expiresBeforeStart = permits.filter((p) => p.expires && p.expires < start).sort((a, b) => a.expires!.localeCompare(b.expires!));
  const state: ReadinessState =
    (gap !== undefined && gap > 0) || expiresBeforeStart.length > 0 ? 'at-risk' : allIssued ? 'all-issued' : unforecast > 0 ? 'unconfirmed' : 'on-track';
  return { issued: permits.length - open.length, total: permits.length, outstanding: open.length, unforecast, allIssued, expectedAll, gap, expiresBeforeStart, state };
}

// ── status history (the audit trail the timeline is read from) ───────────────

export interface HistoryEntry {
  /** The day the change happened (backdatable: an agency letter arrives before it's logged). */
  at: string;
  statusId: string;
  by: string;
  note?: string;
  /** Set with a change into an issued status. */
  expires?: string;
}

/** The person using the prototype; every change made in the browser is theirs. */
export const CURRENT_USER = 'Maya Okafor';

const AGENCY_NOTE: Record<Milestone, string> = {
  submitted: 'Application submitted to the agency',
  review: 'Agency comments received',
  issued: 'Permit issued',
};

/**
 * The fixture's history for a permit, rebuilt from its dates so every surface that
 * reads p.submitted / p.reviews / p.issued agrees with the log: preparation began,
 * submitted, each review round (comments received, then a resubmittal three weeks
 * later when another round or the issue followed), issued — then the permit's current
 * status if the log doesn't already end there.
 */
export function seedHistory(p: Permit): HistoryEntry[] {
  const wf = workflowOf(p.typeId);
  const find = (m: Milestone) => wf.columns.find((c) => milestoneOf(c) === m);
  const submittedCol = find('submitted');
  const reviewCol = find('review');
  const issuedCol = find('issued');
  const prepCol = wf.columns.find((c) => c.category === 'InProgress' && !milestoneOf(c) && /prepar|draft/i.test(c.name));
  const at = wf.columns.findIndex((c) => c.id === submittedCol?.id);
  const inReviewCol = wf.columns[at + 1]?.category === 'InProgress' && !milestoneOf(wf.columns[at + 1]) ? wf.columns[at + 1] : undefined;

  const currentMilestone = milestoneOf(statusColumn(p.statusId, p.typeId));
  const out: HistoryEntry[] = [];
  const add = (date: string, statusId: string | undefined, note?: string, expires?: string) => {
    if (statusId && date <= TODAY) out.push({ at: date, statusId, by: p.assignee, ...(note ? { note } : {}), ...(expires ? { expires } : {}) });
  };
  if (p.submitted) {
    add(addDays(p.submitted, -45), prepCol?.id);
    add(p.submitted, submittedCol?.id, AGENCY_NOTE.submitted);
    p.reviews.forEach((d, i) => {
      add(d, reviewCol?.id, AGENCY_NOTE.review);
      const next = p.reviews[i + 1] ?? p.issued;
      const resubmit = addDays(d, 21);
      // After the last round, only when the permit has moved on from "comments received".
      const resubmitted = next ? resubmit < next : resubmit <= TODAY && currentMilestone !== 'review';
      if (inReviewCol && resubmitted) add(resubmit, inReviewCol.id, 'Revised application resubmitted');
    });
  }
  if (p.issued) add(p.issued, issuedCol?.id, AGENCY_NOTE.issued, p.expires);
  // End on the current status — unless it's a milestone, which the dates above already logged.
  const last = out.at(-1);
  if (!currentMilestone && (!last || last.statusId !== p.statusId)) {
    if (last || statusColumn(p.statusId, p.typeId).category !== 'NotStarted') {
      add(last ? (addDays(last.at, 14) < TODAY ? addDays(last.at, 14) : TODAY) : addDays(TODAY, -20), p.statusId);
    }
  }
  return out;
}

export interface PermitDates {
  submitted?: string;
  reviews: string[];
  issued?: string;
  expires?: string;
}

/**
 * Read a permit's milestone dates from its history: the first change into a
 * "submitted" status, every change into a "review" status after it, and the latest
 * change into an "issued" status (with its expiry). `columnOf` resolves a status id
 * against the CURRENT workflows, so a renamed column still counts.
 */
export function datesFromHistory(history: HistoryEntry[], columnOf: (statusId: string) => StatusColumn): PermitDates {
  const dates: PermitDates = { reviews: [] };
  for (const e of [...history].sort((a, b) => a.at.localeCompare(b.at))) {
    const m = milestoneOf(columnOf(e.statusId));
    if (m === 'submitted' && !dates.submitted) dates.submitted = e.at;
    else if (m === 'review' && dates.submitted && !dates.issued) dates.reviews.push(e.at);
    else if (m === 'issued') {
      dates.issued = e.at;
      dates.expires = e.expires;
    }
  }
  return dates;
}

// ── routes ───────────────────────────────────────────────────────────────────

export const ROUTES = {
  projects: '/prototypes/permits',
  project: (id: string) => `/prototypes/permits/projects/${id}`,
  permits: '/prototypes/permits/permits',
  permit: (id: string) => `/prototypes/permits/permits/${id}`,
  /** A permit added in the browser: one page that reads the id from the query. */
  addedPermit: (id: string) => `/prototypes/permits/permits/added?id=${encodeURIComponent(id)}`,
  permitTypes: '/prototypes/permits/permit-types',
  permitType: (typeId: string) => `/prototypes/permits/permit-types/${typeId}`,
  /** One permit type at one agency: its timeline and, for critical areas, its ordinance. */
  permitAgency: (typeId: string, jurisdictionId: string) => `/prototypes/permits/permit-types/${typeId}/${jurisdictionId}`,
  /** The read-only status page a project shares outside ESA (BcnShareProject). */
  shared: (projectId: string) => `/prototypes/permits/shared/${projectId}`,
};
