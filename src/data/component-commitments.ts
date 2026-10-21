// COMPONENT SETUP — applicable commitments, and the setup that trims them.
//
// THE BASELINE is what shipped (BCN-1629 / BCN-1636, Sept 2026): a component's
// Applicable Commitments drawer lists every commitment whose source document is in
// the project, and a person applies or dismisses each one, written on click.
//
// WHAT THIS FIXTURE ADDS is the component's SETUP, five answers a person gives once:
//
//   1. Source documents  — ComponentSource rows. The OUTER LIMIT: only these
//                          documents' commitments can apply to the component.
//   2. Location          — the component's footprint (Component.Boundary, or a
//                          shape drawn in setup when it has none), intersected in
//                          the browser with each project species' habitat layer
//                          (ProjectSpecies.HabitatLayerID).
//   3. Species           — ComponentSpecies, pre-filled from that intersection.
//   4. Construction Activities   — ComponentConstructionActivity.
//   5. Dates             — Component.StartDate / ExpectedEndDate (already stored),
//                          compared against ProjectSeason month/day windows.
//
// From those answers Beacon RECOMMENDS commitments that don't apply, each with its
// reason. The rule is deliberately the dumbest one that is correct, because the
// tags sit on REQUIREMENTS (RequirementSpecies, RequirementConstructionActivity,
// RequirementSeason, all filled by extraction) while decisions are per COMMITMENT:
//
//   A requirement MATCHES the setup when each of its tag kinds is either empty or
//   shares a value with the setup. A commitment is recommended out only when NONE
//   of its requirements match. One live requirement keeps the commitment.
//
// Nothing is dismissed by the recommendation itself. A person accepts it, and the
// dismissal then carries its reason (`origin: 'setup'`). When the setup changes,
// any setup dismissal whose reason no longer holds goes back to Needs a decision.
// A decision a person made by hand (`origin: 'person'`) is never touched.
//
// THE MAPPING RULE (Claude's call, Andy can reverse it): a component with no
// source documents mapped sees every source document, exactly as prod does today,
// so a tenant that never runs setup sees no change. Once a component maps its
// documents, only those apply to it, plus any commitment someone already decided
// there by hand, which stays visible.
//
// Content is invented-but-credible Delta Conveyance material. Nothing is copied
// from client documents.

import type { ActionType } from './project-actions';
import { TODAY } from './project-dashboard';

// ── Reference data: the project's own lists ─────────────────────────────────

export interface SetupSource {
  id: string;
  /** Source.Name. */
  name: string;
  /** Short label for facet options. */
  short: string;
  /** Other components that have mapped this document (ComponentSource rows). */
  /** Components this document is mapped to. Unmapped applies to every component. */
  mappedTo: string[];
}

export const SETUP_SOURCES: SetupSource[] = [
  {
    id: 'c-mmrp',
    name: 'Delta Conveyance Project Final EIR — MMRP',
    short: 'Construction MMRP',
    mappedTo: ['Intake B — North Delta', 'Twin Cities Complex', 'Southern Forebay & Pumping Plant'],
  },
  {
    id: 'c-itp',
    name: 'CDFW Incidental Take Permit',
    short: 'ITP',
    mappedTo: ['Intake B — North Delta', 'Twin Cities Complex', 'Southern Forebay & Pumping Plant'],
  },
  {
    id: 'c-404',
    name: 'USACE Section 404 Permit',
    short: '404 Permit',
    mappedTo: ['Intake B — North Delta', 'Southern Forebay & Pumping Plant'],
  },
  {
    id: 'c-401',
    name: 'SWRCB Section 401 Water Quality Certification',
    short: 'Construction 401',
    mappedTo: ['Intake B — North Delta', 'Twin Cities Complex', 'Southern Forebay & Pumping Plant'],
  },
  {
    id: 'g-mmrp',
    name: 'Geotechnical Investigations IS/MND — MMRP',
    short: 'Geotech MMRP',
    mappedTo: [],
  },
  {
    id: 'g-401',
    name: 'Geotechnical Investigations Section 401 Certification',
    short: 'Geotech 401',
    mappedTo: [],
  },
  {
    id: 'g-lsaa',
    name: 'CDFW Lake or Streambed Alteration Agreement — Geotechnical',
    short: 'Geotech LSAA',
    mappedTo: [],
  },
  {
    id: 'g-408',
    name: 'USACE Section 408 Permission — Geotechnical Exploration',
    short: 'Geotech 408',
    mappedTo: [],
  },
];

export const SOURCE_BY_ID: Record<string, SetupSource> = Object.fromEntries(SETUP_SOURCES.map((s) => [s.id, s]));

/** [lat, lon] ring, closed implicitly. */
export type Ring = [number, number][];

export interface ProjectSpecies {
  code: string;
  name: string;
  /** The name as it reads mid-sentence ("Giant Garter Snake", "Swainson's Hawk"). */
  phrase: string;
  /** ProjectSpecies.HabitatLayerID's layer, as polygons. null = the project has no layer for it. */
  habitat: { layerName: string; rings: Ring[] } | null;
}

// Habitat rings are drawn around the Bouldin Island corridor the component's real
// work areas sit in (lon ≈ -121.434 to -121.447). Swainson's Hawk and elderberry
// overlap some of them; the snake, smelt, splittail and salamander layers do not.
export const PROJECT_SPECIES: ProjectSpecies[] = [
  {
    code: 'SWHA',
    name: "Swainson's Hawk",
    phrase: "Swainson's Hawk",
    habitat: {
      layerName: "Swainson's Hawk Nesting Habitat",
      rings: [[[38.142, -121.462], [38.142, -121.418], [38.2, -121.414], [38.205, -121.452]]],
    },
  },
  {
    code: 'VELB',
    name: 'Valley Elderberry Longhorn Beetle',
    phrase: 'Valley Elderberry Longhorn Beetle',
    habitat: {
      layerName: 'Elderberry Shrub Survey 2025',
      rings: [
        [[38.0585, -121.441], [38.0585, -121.429], [38.0635, -121.429], [38.0635, -121.441]],
        [[38.112, -121.452], [38.112, -121.442], [38.119, -121.442], [38.119, -121.452]],
      ],
    },
  },
  {
    code: 'GGS',
    name: 'Giant Garter Snake',
    phrase: 'Giant Garter Snake',
    habitat: {
      layerName: 'Giant Garter Snake Modeled Habitat',
      rings: [[[38.07, -121.53], [38.07, -121.485], [38.15, -121.48], [38.16, -121.525]]],
    },
  },
  {
    code: 'DS',
    name: 'Delta Smelt',
    phrase: 'Delta Smelt',
    habitat: {
      layerName: 'Delta Smelt Critical Habitat',
      rings: [[[38.03, -121.58], [38.03, -121.555], [38.23, -121.545], [38.23, -121.57]]],
    },
  },
  {
    code: 'SACR',
    name: 'Sacramento Splittail',
    phrase: 'Sacramento Splittail',
    habitat: {
      layerName: 'Splittail Spawning Habitat',
      rings: [[[38.185, -121.41], [38.185, -121.39], [38.235, -121.39], [38.235, -121.41]]],
    },
  },
  {
    code: 'CTS',
    name: 'California Tiger Salamander',
    phrase: 'California Tiger Salamander',
    habitat: {
      layerName: 'CTS Upland and Breeding Habitat',
      rings: [[[38.02, -121.39], [38.02, -121.36], [38.06, -121.36], [38.06, -121.39]]],
    },
  },
  { code: 'WPT', name: 'Western Pond Turtle', phrase: 'Western Pond Turtle', habitat: null },
];

/** Prod lists project species by common name (ProjectSpecies.OrderBy(CommonName)). */
PROJECT_SPECIES.sort((a, b) => a.name.localeCompare(b.name));

export const SPECIES_LABEL: Record<string, string> = Object.fromEntries(PROJECT_SPECIES.map((s) => [s.code, s.name]));
const SPECIES_PHRASE: Record<string, string> = Object.fromEntries(PROJECT_SPECIES.map((s) => [s.code, s.phrase]));

export interface ConstructionActivity {
  id: string;
  name: string;
}

/** ProjectConstructionActivity — the project's list, which requirements are tagged from. */
export const CONSTRUCTION_ACTIVITIES: ConstructionActivity[] = [
  { id: 'ground', name: 'Ground Disturbance' },
  { id: 'drill', name: 'Drilling and Boring' },
  { id: 'veg', name: 'Vegetation Removal' },
  { id: 'staging', name: 'Equipment Staging' },
  { id: 'haul', name: 'Haul Truck Traffic' },
  { id: 'inwater', name: 'In-Water Work' },
  { id: 'dewater', name: 'Dewatering' },
  { id: 'night', name: 'Nighttime Work' },
  { id: 'pile', name: 'Pile Driving' },
];

export const ACTIVITY_LABEL: Record<string, string> = Object.fromEntries(CONSTRUCTION_ACTIVITIES.map((a) => [a.id, a.name]));

export interface ProjectSeason {
  id: string;
  name: string;
  /** The name as it reads after "Outside" ("the nesting bird season"). */
  phrase: string;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
}

/** ProjectSeason — month/day windows, a wrap-year season when end < start. */
export const PROJECT_SEASONS: ProjectSeason[] = [
  { id: 'nest', name: 'Nesting bird season', phrase: 'nesting bird season', startMonth: 2, startDay: 1, endMonth: 8, endDay: 31 },
  { id: 'swha', name: "Swainson's Hawk nesting season", phrase: "Swainson's Hawk nesting season", startMonth: 3, startDay: 1, endMonth: 9, endDay: 15 },
  { id: 'ggs', name: 'Giant Garter Snake active season', phrase: 'Giant Garter Snake active season', startMonth: 5, startDay: 1, endMonth: 10, endDay: 1 },
  { id: 'wet', name: 'Wet season', phrase: 'wet season', startMonth: 10, startDay: 15, endMonth: 4, endDay: 15 },
  { id: 'fall', name: 'Fall bird migration', phrase: 'fall bird migration season', startMonth: 9, startDay: 1, endMonth: 12, endDay: 15 },
  { id: 'ds', name: 'Delta Smelt spawning season', phrase: 'Delta Smelt spawning season', startMonth: 12, startDay: 1, endMonth: 6, endDay: 30 },
];

export const SEASON_BY_ID: Record<string, ProjectSeason> = Object.fromEntries(PROJECT_SEASONS.map((s) => [s.id, s]));

// ── Commitments, and the requirements their tags live on ────────────────────

export const REQUIREMENT_TYPES = [
  'Survey',
  'Monitoring',
  'Training',
  'Reporting',
  'Avoidance & BMPs',
  'Plan Submittal',
  'Inspection',
] as const;
export type RequirementType = (typeof REQUIREMENT_TYPES)[number];

export interface SetupRequirement {
  type: RequirementType;
  /** RequirementSpecies. Empty = not species-specific. */
  species: string[];
  /** RequirementConstructionActivity. Empty = applies whatever the work is. */
  activities: string[];
  /** RequirementSeason. Empty = applies year-round. */
  seasons: string[];
}

export type Decision = 'applied' | 'dismissed';
/** Who made a decision: a person by hand, or a person accepting a setup recommendation. */
export type DecisionOrigin = 'person' | 'setup';

export interface SetupAction {
  code: string;
  name: string;
  type: ActionType;
}

export interface ApplicableCommitment {
  id: string;
  /** ClientCommitmentID. */
  code: string;
  title: string;
  /** The commitment's own language, quoted. */
  text: string;
  sourceId: string;
  requirements: SetupRequirement[];
  /** What applying this commitment will create on the component. */
  actions: SetupAction[];
  /** The decision on record before this session. null = no ComponentCommitment row. */
  decision: Decision | null;
  origin?: DecisionOrigin;
  rationale?: string;
  decisionDate?: string;
  /** ISO date the commitment entered the project via its source document. */
  addedOn: string;
}

const r = (type: RequirementType, tags: { sp?: string[]; act?: string[]; sea?: string[] } = {}): SetupRequirement => ({
  type,
  species: tags.sp ?? [],
  activities: tags.act ?? [],
  seasons: tags.sea ?? [],
});
const a = (code: string, name: string, type: ActionType): SetupAction => ({ code, name, type });

type Seed = Omit<ApplicableCommitment, 'id'>;

const SEEDS: Seed[] = [
  // ── Geotechnical Investigations IS/MND — MMRP ─────────────────────────────
  {
    code: 'GT-BIO-1', title: 'Worker environmental awareness training', sourceId: 'g-mmrp', addedOn: '2025-11-04',
    text: 'All exploration crew shall complete environmental awareness training before site access, covering special-status species, avoidance buffers, and stop-work procedures.',
    requirements: [r('Training')],
    actions: [a('GT-BIO-1', 'Crew environmental awareness training', 'tracking')],
    decision: 'applied', origin: 'person', decisionDate: '2026-02-11', rationale: 'Required for every exploration crew.',
  },
  {
    code: 'GT-BIO-2', title: 'Nesting bird preconstruction survey', sourceId: 'g-mmrp', addedOn: '2025-11-04',
    text: 'If exploration occurs during the nesting season (February 1 through August 31), a qualified biologist shall survey for active nests within 500 feet of each work area no more than 7 days before work begins.',
    requirements: [r('Survey', { act: ['ground', 'veg'], sea: ['nest'] }), r('Avoidance & BMPs', { sea: ['nest'] })],
    actions: [a('GT-BIO-2', 'Nesting bird preconstruction survey', 'monitoring')],
    decision: null,
  },
  {
    code: 'GT-BIO-3', title: 'Swainson’s hawk nest buffer', sourceId: 'g-mmrp', addedOn: '2025-11-04',
    text: 'During the Swainson’s hawk nesting season, a 0.25-mile no-disturbance buffer shall be maintained around active nests until a qualified biologist determines the young have fledged.',
    requirements: [r('Survey', { sp: ['SWHA'], sea: ['swha'] }), r('Avoidance & BMPs', { sp: ['SWHA'], sea: ['swha'] })],
    actions: [a('GT-BIO-3', 'Swainson’s hawk nest buffer verification', 'monitoring')],
    decision: null,
  },
  {
    code: 'GT-BIO-4', title: 'Giant Garter Snake avoidance', sourceId: 'g-mmrp', addedOn: '2025-11-04',
    text: 'Work areas within 200 feet of Giant Garter Snake aquatic habitat shall be surveyed by a qualified biologist within 24 hours before ground disturbance and fenced with exclusion fencing.',
    requirements: [r('Survey', { sp: ['GGS'] }), r('Avoidance & BMPs', { sp: ['GGS'], act: ['ground'] })],
    actions: [a('GT-BIO-4', 'Giant Garter Snake preconstruction survey', 'monitoring')],
    decision: null,
  },
  {
    code: 'GT-BIO-5', title: 'Elderberry shrub avoidance', sourceId: 'g-mmrp', addedOn: '2025-11-04',
    text: 'Elderberry shrubs with stems one inch or greater in diameter shall be avoided by a minimum 20-foot buffer, fenced and signed before exploration equipment arrives.',
    requirements: [r('Avoidance & BMPs', { sp: ['VELB'], act: ['ground', 'staging'] })],
    actions: [a('GT-BIO-5', 'Elderberry buffer fencing', 'tracking')],
    decision: null,
  },
  {
    code: 'GT-BIO-6', title: 'Western Pond Turtle clearance', sourceId: 'g-mmrp', addedOn: '2025-11-18',
    text: 'Where exploration occurs within channels or ditches, a qualified biologist shall survey for Western Pond Turtle and relocate individuals outside the work area before work begins.',
    requirements: [r('Survey', { sp: ['WPT'], act: ['inwater'] })],
    actions: [a('GT-BIO-6', 'Pond turtle clearance survey', 'monitoring')],
    decision: null,
  },
  {
    code: 'GT-BIO-7', title: 'Delta Smelt in-water work window', sourceId: 'g-mmrp', addedOn: '2025-11-18',
    text: 'Over-water borings shall not occur during delta smelt spawning (December 1 through June 30) unless real-time monitoring shows smelt are absent from the action area.',
    requirements: [r('Avoidance & BMPs', { sp: ['DS'], act: ['inwater'], sea: ['ds'] })],
    actions: [a('GT-BIO-7', 'In-water work window verification', 'monitoring')],
    decision: null,
  },
  {
    code: 'GT-BIO-8', title: 'California Tiger Salamander upland survey', sourceId: 'g-mmrp', addedOn: '2025-11-18',
    text: 'Work areas within suitable upland habitat shall receive a protocol-level burrow survey before ground disturbance, and occupied burrows shall be avoided by 50 feet.',
    requirements: [r('Survey', { sp: ['CTS'], act: ['ground'] })],
    actions: [a('GT-BIO-8', 'CTS burrow survey', 'monitoring')],
    decision: null,
  },
  {
    code: 'GT-BIO-9', title: 'Non-listed raptor nest buffer', sourceId: 'g-mmrp', addedOn: '2025-11-18',
    text: 'During the nesting season, active nests of non-listed raptors shall receive a 250-foot no-disturbance buffer until the young have fledged.',
    requirements: [r('Avoidance & BMPs', { sea: ['nest'] })],
    actions: [a('GT-BIO-9', 'Raptor buffer establishment', 'monitoring')],
    decision: 'dismissed', origin: 'person', decisionDate: '2026-02-11',
    rationale: 'No raptor nests within 500 feet of any work area in the 2025 survey.',
  },
  {
    code: 'GT-CUL-1', title: 'Inadvertent discovery stop-work protocol', sourceId: 'g-mmrp', addedOn: '2025-11-04',
    text: 'If cultural materials are encountered, work shall halt within 100 feet of the find and a qualified archaeologist shall evaluate the discovery before work resumes.',
    requirements: [r('Avoidance & BMPs', { act: ['ground', 'drill'] })],
    actions: [a('GT-CUL-1', 'Discovery protocol acknowledgement', 'tracking')],
    decision: null,
  },
  {
    code: 'GT-CUL-2', title: 'Tribal monitor notification', sourceId: 'g-mmrp', addedOn: '2025-12-02',
    text: 'Culturally affiliated tribes shall receive no less than 14 days notice before ground disturbance in areas identified as culturally sensitive.',
    requirements: [r('Reporting', { act: ['ground'] })],
    actions: [a('GT-CUL-2', 'Tribal monitor notification', 'reporting')],
    decision: null,
  },
  {
    code: 'GT-HAZ-1', title: 'Drilling fluid containment', sourceId: 'g-mmrp', addedOn: '2025-12-02',
    text: 'Drilling fluids shall be fully contained and removed from the site. No discharge to surface water or to the levee prism is permitted.',
    requirements: [r('Avoidance & BMPs', { act: ['drill'] }), r('Inspection', { act: ['drill'] })],
    actions: [a('GT-HAZ-1', 'Drilling fluid containment inspection', 'tracking')],
    decision: null,
  },
  {
    code: 'GT-HAZ-2', title: 'Borehole abandonment', sourceId: 'g-mmrp', addedOn: '2025-12-02',
    text: 'Each boring shall be abandoned in accordance with county well-abandonment standards and the surface restored to preexisting contours within 30 days.',
    requirements: [r('Inspection', { act: ['drill'] })],
    actions: [a('GT-HAZ-2', 'Borehole abandonment verification', 'tracking')],
    decision: 'applied', origin: 'person', decisionDate: '2026-02-11', rationale: 'Governs every boring in the program.',
  },
  {
    code: 'GT-NOI-1', title: 'Nighttime drilling noise limits', sourceId: 'g-mmrp', addedOn: '2025-12-16',
    text: 'Drilling between 10 PM and 7 AM shall not exceed 50 dBA Leq at the nearest residence, verified by monitoring on the first night of work at each site.',
    requirements: [r('Monitoring', { act: ['night'] })],
    actions: [a('GT-NOI-1', 'Nighttime noise verification', 'monitoring')],
    decision: 'dismissed', origin: 'person', decisionDate: '2026-02-11', rationale: 'The work plan limits drilling to daylight hours.',
  },
  {
    code: 'GT-AIR-1', title: 'Fugitive dust control', sourceId: 'g-mmrp', addedOn: '2025-12-16',
    text: 'Exposed surfaces and unpaved access roads shall be watered as needed to prevent visible dust, and vehicle speed on unpaved roads shall not exceed 15 miles per hour.',
    requirements: [r('Avoidance & BMPs', { act: ['ground', 'haul'] })],
    actions: [a('GT-AIR-1', 'Dust control implementation', 'tracking')],
    decision: null,
  },

  // ── Geotechnical Investigations Section 401 Certification ─────────────────
  {
    code: 'GT401-3', title: 'Turbidity monitoring for over-water borings', sourceId: 'g-401', addedOn: '2025-11-18',
    text: 'Turbidity shall be monitored upstream and downstream of over-water borings and shall not exceed background by more than 5 NTU.',
    requirements: [r('Monitoring', { act: ['inwater'] })],
    actions: [a('GT401-3', 'Over-water turbidity monitoring', 'monitoring')],
    decision: null,
  },
  {
    code: 'GT401-5', title: 'Spill prevention and response', sourceId: 'g-401', addedOn: '2025-11-18',
    text: 'Spill response materials shall be staged within 100 feet of every drill rig and fueling location, and spills shall be reported within 24 hours.',
    requirements: [r('Avoidance & BMPs', { act: ['drill', 'staging'] }), r('Reporting', { act: ['drill'] })],
    actions: [a('GT401-5', 'Spill kit inspection', 'tracking')],
    decision: null,
  },
  {
    code: 'GT401-7', title: 'Dewatering discharge sampling', sourceId: 'g-401', addedOn: '2025-12-02',
    text: 'Dewatering discharge shall be routed through sediment controls and sampled for turbidity and pH before release to any surface water.',
    requirements: [r('Monitoring', { act: ['dewater'] })],
    actions: [a('GT401-7', 'Dewatering discharge sampling', 'monitoring')],
    decision: null,
  },
  {
    code: 'GT401-9', title: 'Wet-season erosion control', sourceId: 'g-401', addedOn: '2025-12-02',
    text: 'Between October 15 and April 15, disturbed work areas shall be stabilized with erosion control before any forecast rain event of one-half inch or more.',
    requirements: [r('Avoidance & BMPs', { act: ['ground'], sea: ['wet'] }), r('Inspection', { act: ['ground'], sea: ['wet'] })],
    actions: [a('GT401-9', 'Pre-storm erosion control inspection', 'tracking')],
    decision: null,
  },

  // ── CDFW Lake or Streambed Alteration Agreement — Geotechnical ────────────
  {
    code: 'LSAA-2', title: 'Channel work only when dry', sourceId: 'g-lsaa', addedOn: '2026-01-08',
    text: 'Exploration within the bed, bank or channel of any stream shall occur only when the channel is dry or flow has been diverted around the work area.',
    requirements: [r('Avoidance & BMPs', { act: ['inwater'] })],
    actions: [a('LSAA-2', 'Dry-channel verification', 'tracking')],
    decision: null,
  },
  {
    code: 'LSAA-4', title: 'Riparian vegetation removal limits', sourceId: 'g-lsaa', addedOn: '2026-01-08',
    text: 'During fall bird migration (September 1 through December 15), removal of riparian vegetation shall be limited to the minimum necessary for rig access, and cleared areas shall be replanted at a 3:1 ratio.',
    requirements: [r('Avoidance & BMPs', { act: ['veg'], sea: ['fall'] }), r('Reporting', { act: ['veg'], sea: ['fall'] })],
    actions: [a('LSAA-4', 'Riparian replanting report', 'reporting')],
    decision: null,
  },
  {
    code: 'LSAA-6', title: 'Splittail spawning window', sourceId: 'g-lsaa', addedOn: '2026-01-08',
    text: 'In-channel work in Sacramento Splittail spawning habitat shall not occur between February 1 and June 30.',
    requirements: [r('Avoidance & BMPs', { sp: ['SACR'], act: ['inwater'] })],
    actions: [a('LSAA-6', 'Spawning window verification', 'tracking')],
    decision: null,
  },

  // ── USACE Section 408 Permission — Geotechnical Exploration ───────────────
  {
    code: 'G408-1', title: 'Levee toe setback for borings', sourceId: 'g-408', addedOn: '2026-01-22',
    text: 'Borings shall be located no closer than 15 feet from the landside levee toe unless approved in writing by the District.',
    requirements: [r('Plan Submittal', { act: ['drill'] })],
    actions: [a('G408-1', 'Boring location plan submittal', 'tracking')],
    decision: null,
  },
  {
    code: 'G408-3', title: 'Levee deformation monitoring', sourceId: 'g-408', addedOn: '2026-01-22',
    text: 'Exploration within 100 feet of a federal project levee shall be accompanied by deformation monitoring before, during and after drilling.',
    requirements: [r('Monitoring', { act: ['drill'] })],
    actions: [a('G408-3', 'Levee deformation survey', 'monitoring')],
    decision: null,
  },
  {
    code: 'G408-5', title: 'Casing installation vibration limits', sourceId: 'g-408', addedOn: '2026-01-22',
    text: 'Driven casing or sheet pile within 300 feet of a levee shall not exceed 0.5 in/sec peak particle velocity at the levee crown.',
    requirements: [r('Monitoring', { act: ['pile'] })],
    actions: [a('G408-5', 'Vibration monitoring at levee crown', 'monitoring')],
    decision: null,
  },

  // ── Delta Conveyance Project Final EIR — MMRP (construction) ──────────────
  {
    code: 'BIO-03', title: 'Nesting bird preconstruction survey', sourceId: 'c-mmrp', addedOn: '2025-09-15',
    text: 'A qualified biologist shall conduct preconstruction surveys for nesting birds within 500 feet of ground-disturbing activity no more than 7 days before the start of work during the nesting season.',
    requirements: [r('Survey', { act: ['ground'], sea: ['nest'] })],
    actions: [a('BIO-03', 'Nesting-bird preconstruction survey', 'monitoring')],
    decision: null,
  },
  {
    code: 'CUL-02', title: 'Worker cultural resources awareness training', sourceId: 'c-mmrp', addedOn: '2025-09-15',
    text: 'All construction personnel shall receive cultural resources sensitivity training before beginning work, covering identification of archaeological materials and required stop-work procedures.',
    requirements: [r('Training')],
    actions: [a('CUL-02', 'Cultural resources worker training', 'tracking')],
    decision: null,
  },
  {
    code: 'NOI-03', title: 'Construction noise monitoring plan', sourceId: 'c-mmrp', addedOn: '2025-09-15',
    text: 'A noise monitoring plan shall be submitted at least 30 days before the start of shaft construction where work occurs within 1,000 feet of a sensitive receptor.',
    requirements: [r('Plan Submittal', { act: ['pile'] })],
    actions: [a('NOI-03', 'Noise monitoring plan submittal', 'tracking')],
    decision: null,
  },
  {
    code: 'AIR-04', title: 'Construction fugitive dust control', sourceId: 'c-mmrp', addedOn: '2025-09-15',
    text: 'Exposed surfaces shall be watered to maintain minimum soil moisture of 12 percent, and vehicle speed on unpaved roads shall not exceed 15 miles per hour.',
    requirements: [r('Avoidance & BMPs', { act: ['ground', 'haul'] })],
    actions: [a('AIR-04', 'Fugitive dust control implementation', 'tracking')],
    decision: null,
  },
  {
    code: 'TRA-11', title: 'Haul route compliance', sourceId: 'c-mmrp', addedOn: '2025-10-02',
    text: 'Construction traffic shall use only designated haul routes, and levee road segments shall be inspected monthly for load-related damage.',
    requirements: [r('Inspection', { act: ['haul'] })],
    actions: [a('TRA-11', 'Haul route compliance verification', 'tracking')],
    decision: null,
  },
  {
    code: 'VEG-06', title: 'Revegetation of temporarily disturbed areas', sourceId: 'c-mmrp', addedOn: '2025-10-02',
    text: 'Temporarily disturbed areas shall be revegetated with a native seed mix approved by the resource agencies within one growing season of disturbance.',
    requirements: [r('Plan Submittal', { act: ['ground', 'veg'] })],
    actions: [a('VEG-06', 'Revegetation plan agency review', 'tracking')],
    decision: null,
  },
  {
    code: 'NOI-12', title: 'Vibration limits for adjacent structures', sourceId: 'c-mmrp', addedOn: '2025-10-16',
    text: 'Ground-borne vibration shall not exceed 0.2 in/sec PPV at any structure of normal construction, monitored continuously during impact activities.',
    requirements: [r('Monitoring', { act: ['pile'] })],
    actions: [a('NOI-12', 'Vibration monitoring at receptors', 'monitoring')],
    decision: null,
  },

  // ── CDFW Incidental Take Permit ───────────────────────────────────────────
  {
    code: 'ITP-6.2', title: 'Giant Garter Snake active-season restriction', sourceId: 'c-itp', addedOn: '2025-09-15',
    text: 'Ground disturbance within 200 feet of Giant Garter Snake aquatic habitat shall be restricted to the active season, May 1 through October 1.',
    requirements: [r('Avoidance & BMPs', { sp: ['GGS'], act: ['ground'] })],
    actions: [a('ITP-6.2', 'Active-season work verification', 'monitoring')],
    decision: null,
  },
  {
    code: 'ITP-7.1', title: 'Swainson’s hawk foraging habitat mitigation', sourceId: 'c-itp', addedOn: '2025-09-15',
    text: 'Permanent loss of Swainson’s hawk foraging habitat shall be mitigated at a 1:1 ratio through conservation easements approved by CDFW.',
    requirements: [r('Reporting', { sp: ['SWHA'], act: ['ground'] })],
    actions: [a('ITP-7.1', 'Foraging habitat mitigation ledger', 'reporting')],
    decision: null,
  },
  {
    code: 'ITP-9.4', title: 'Delta Smelt entrainment avoidance', sourceId: 'c-itp', addedOn: '2025-10-02',
    text: 'In-water construction shall be prohibited between December 1 and June 30 unless real-time monitoring demonstrates delta smelt are absent from the action area.',
    requirements: [r('Avoidance & BMPs', { sp: ['DS'], act: ['inwater'], sea: ['ds'] })],
    actions: [],
    decision: null,
  },
  {
    code: 'ITP-11.3', title: 'Tidal marsh restoration monitoring', sourceId: 'c-itp', addedOn: '2025-10-02',
    text: 'Restored tidal marsh acreage shall be monitored annually for 10 years against performance criteria for vegetation cover, channel density, and fish access.',
    requirements: [r('Monitoring', { sp: ['SACR', 'DS'] })],
    actions: [],
    decision: null,
  },

  // ── USACE Section 404 Permit ──────────────────────────────────────────────
  {
    code: 'USACE-02', title: 'Section 404 preconstruction notification', sourceId: 'c-404', addedOn: '2025-09-15',
    text: 'The permittee shall submit preconstruction notification to the District Engineer at least 45 days before commencing work in waters of the United States.',
    requirements: [r('Reporting', { act: ['inwater'] })],
    actions: [a('USACE-02', 'Preconstruction notification submittal', 'reporting')],
    decision: null,
  },
  {
    code: 'USACE-07', title: 'Compensatory mitigation accounting', sourceId: 'c-404', addedOn: '2025-10-16',
    text: 'Permanent and temporary impacts to jurisdictional waters shall be accounted against the approved mitigation ledger and reported with each annual submittal.',
    requirements: [r('Reporting', { act: ['inwater', 'ground'] })],
    actions: [a('USACE-07', 'Mitigation ledger update', 'reporting')],
    decision: null,
  },

  // ── SWRCB Section 401 Water Quality Certification (construction) ──────────
  {
    code: 'WQ-08', title: 'Stormwater pollution prevention plan', sourceId: 'c-401', addedOn: '2025-09-15',
    text: 'A Stormwater Pollution Prevention Plan shall be prepared by a Qualified SWPPP Developer and implemented before any ground disturbance exceeding one acre.',
    requirements: [r('Plan Submittal', { act: ['ground'] })],
    actions: [a('WQ-08', 'SWPPP preparation and submittal', 'tracking')],
    decision: 'applied', origin: 'person', decisionDate: '2026-02-11',
    rationale: 'Combined disturbance across the borings exceeds one acre.',
  },
  {
    code: 'WQ-12', title: 'Quarterly SWPPP inspection', sourceId: 'c-401', addedOn: '2025-10-02',
    text: 'A Qualified SWPPP Practitioner shall inspect all stormwater controls quarterly and within 48 hours of any qualifying rain event.',
    requirements: [r('Inspection', { act: ['ground'] })],
    actions: [a('WQ-12', 'SWPPP quarterly inspection', 'tracking')],
    decision: null,
  },
  {
    code: 'WQ-19', title: 'In-water work turbidity monitoring', sourceId: 'c-401', addedOn: '2025-10-16',
    text: 'Turbidity shall be monitored upstream and downstream of in-water work and shall not exceed background by more than 5 NTU.',
    requirements: [r('Monitoring', { act: ['inwater'] })],
    actions: [],
    decision: null,
  },
  {
    code: 'WQ-23', title: 'Spill prevention and response plan', sourceId: 'c-401', addedOn: '2025-10-16',
    text: 'A spill prevention and response plan shall be maintained on site, with response materials staged within 100 feet of any fueling or fluid transfer location.',
    requirements: [r('Plan Submittal', { act: ['staging'] })],
    actions: [a('WQ-23', 'Spill response plan submittal', 'tracking')],
    decision: null,
  },
];

export const SETUP_COMMITMENTS: ApplicableCommitment[] = SEEDS.map((s, i) => ({
  id: `cc-${String(i + 1).padStart(3, '0')}`,
  ...s,
}));

/** Requirement types a commitment carries, for the Requirement type filter. */
export const typesOf = (c: ApplicableCommitment): RequirementType[] => [...new Set(c.requirements.map((q) => q.type))];
/** Species a commitment reaches through its requirements, for the Species filter. */
export const speciesOf = (c: ApplicableCommitment): string[] => [...new Set(c.requirements.flatMap((q) => q.species))];

// ── The component's setup ───────────────────────────────────────────────────

export type LocationMethod = 'footprint' | 'drawn';

export interface ComponentSetup {
  /** ComponentSource — the outer limit. */
  sources: string[];
  locationMethod: LocationMethod;
  /** A footprint drawn in setup, when the component has none stored. */
  drawn: Ring | null;
  /** ComponentSpecies. */
  species: string[];
  /** ComponentConstructionActivity. */
  activities: string[];
  /** Component.StartDate / ExpectedEndDate. */
  startDate: string;
  endDate: string;
}

/** The component's stored dates before setup asks about them. Oct through Jan. */
export const COMPONENT_DATES = { startDate: '2026-10-05', endDate: '2027-01-29' };

/** What setup suggests on first open, before the person has answered anything. */
export const SETUP_DEFAULTS = {
  activities: ['ground', 'drill', 'veg', 'staging', 'haul'],
};

// ── Geometry: the component's footprint against habitat rings ───────────────

/**
 * The component's stored footprint (prod: Component.Boundary, a GEOGRAPHY polygon),
 * drawn around its 35 work areas on Bouldin Island. A component with no footprint
 * gets one drawn in setup; the species check always runs footprint against habitat.
 */
export const COMPONENT_FOOTPRINT: Ring | null = [
  [38.22262, -121.45728], [38.22462, -121.42734], [38.13517, -121.42334],
  [38.04771, -121.42834], [38.04571, -121.45128], [38.13517, -121.45928],
];

/** Ray-cast point-in-polygon on [lat, lon]. Fine at project scale; not survey-grade. */
export const pointInRing = ([lat, lon]: [number, number], ring: Ring): boolean => {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [yi, xi] = ring[i];
    const [yj, xj] = ring[j];
    if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};

const segmentsCross = (p1: [number, number], p2: [number, number], p3: [number, number], p4: [number, number]): boolean => {
  const d = (a: [number, number], b: [number, number], c: [number, number]) =>
    (b[1] - a[1]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[1] - a[1]);
  const d1 = d(p3, p4, p1);
  const d2 = d(p3, p4, p2);
  const d3 = d(p1, p2, p3);
  const d4 = d(p1, p2, p4);
  return ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0));
};

/** Two rings intersect when either holds a vertex of the other or any edges cross. */
export const ringsIntersect = (a: Ring, b: Ring): boolean => {
  if (a.some((p) => pointInRing(p, b)) || b.some((p) => pointInRing(p, a))) return true;
  for (let i = 0; i < a.length; i++) {
    const a1 = a[i];
    const a2 = a[(i + 1) % a.length];
    for (let j = 0; j < b.length; j++) if (segmentsCross(a1, a2, b[j], b[(j + 1) % b.length])) return true;
  }
  return false;
};

export interface HabitatHit {
  code: string;
  /** null = the species has no habitat layer, so the map can't say. */
  inHabitat: boolean | null;
}

/** Intersect the component's location with every species' habitat layer. */
export const habitatHits = (method: LocationMethod, footprint: Ring | null, drawn: Ring | null): HabitatHit[] => {
  const ring = method === 'footprint' ? footprint : drawn;
  return PROJECT_SPECIES.map((sp) => {
    if (!sp.habitat) return { code: sp.code, inHabitat: null };
    return { code: sp.code, inHabitat: !!ring && sp.habitat.rings.some((r) => ringsIntersect(ring, r)) };
  });
};

// ── Dates against seasons ───────────────────────────────────────────────────

const DAY = 86_400_000;
const utc = (iso: string): number => {
  const [y, m, d] = iso.split('-').map(Number);
  return Date.UTC(y, m - 1, d);
};
const md = (m: number, d: number) => m * 100 + d;
const inSeason = (s: ProjectSeason, month: number, day: number): boolean => {
  const v = md(month, day);
  const start = md(s.startMonth, s.startDay);
  const end = md(s.endMonth, s.endDay);
  return start <= end ? v >= start && v <= end : v >= start || v <= end;
};

/** Days between two ISO dates, inclusive. */
export const spanDays = (startIso: string, endIso: string): number => Math.round((utc(endIso) - utc(startIso)) / DAY) + 1;

/** Does the component's date range touch the season in any year? A range of a year or more always does. */
export const seasonOverlaps = (s: ProjectSeason, startIso: string, endIso: string): boolean => {
  if (!startIso || !endIso || utc(endIso) < utc(startIso)) return true;
  if (spanDays(startIso, endIso) >= 365) return true;
  for (let t = utc(startIso); t <= utc(endIso); t += DAY) {
    const dt = new Date(t);
    if (inSeason(s, dt.getUTCMonth() + 1, dt.getUTCDate())) return true;
  }
  return false;
};

// ── The recommendation ──────────────────────────────────────────────────────

/** Why one requirement doesn't match: the tag kind that failed and the values it wanted. */
export interface Miss {
  kind: 'species' | 'activity' | 'season';
  values: string[];
}

export interface Recommendation {
  /** Distinct misses across every requirement, in species → activity → season order. */
  misses: Miss[];
  /** Plain-language reasons, one per miss, e.g. "No In-Water Work". */
  reasons: string[];
}

export interface SetupContext {
  setup: ComponentSetup;
  /** The map's answer per species, so a reason can say "no habitat" rather than "not selected". */
  habitat: HabitatHit[];
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const seasonWindow = (s: ProjectSeason): string =>
  `${MONTHS[s.startMonth - 1]} ${s.startDay} – ${MONTHS[s.endMonth - 1]} ${s.endDay}`;

const reasonFor = (miss: Miss, ctx: SetupContext): string => {
  if (miss.kind === 'species') {
    const names = miss.values.map((code) => {
      const hit = ctx.habitat.find((h) => h.code === code);
      return { code, noHabitat: hit?.inHabitat === false };
    });
    const all = names.every((n) => n.noHabitat);
    const label = names.map((n) => SPECIES_PHRASE[n.code] ?? n.code).join(' or ');
    return all ? `Not in ${label} habitat` : `${cap(label)} not selected`;
  }
  if (miss.kind === 'activity') {
    return `No ${miss.values.map((v) => ACTIVITY_LABEL[v] ?? v).join(' or ')}`;
  }
  return `Outside the ${miss.values.map((v) => SEASON_BY_ID[v]?.phrase ?? v).join(' and the ')}`;
};
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** The tag kinds on one requirement that the setup doesn't share. Empty = the requirement matches. */
const missesFor = (q: SetupRequirement, setup: ComponentSetup): Miss[] => {
  const out: Miss[] = [];
  if (q.species.length && !q.species.some((s) => setup.species.includes(s))) out.push({ kind: 'species', values: q.species });
  if (q.activities.length && !q.activities.some((v) => setup.activities.includes(v)))
    out.push({ kind: 'activity', values: q.activities });
  if (q.seasons.length) {
    const live = q.seasons.filter((id) => SEASON_BY_ID[id] && seasonOverlaps(SEASON_BY_ID[id], setup.startDate, setup.endDate));
    if (!live.length) out.push({ kind: 'season', values: q.seasons });
  }
  return out;
};

/**
 * null when the commitment could apply (one requirement matches). Otherwise the
 * recommendation, with the reasons drawn from every requirement's misses.
 */
export const recommend = (c: ApplicableCommitment, ctx: SetupContext): Recommendation | null => {
  const per = c.requirements.map((q) => missesFor(q, ctx.setup));
  if (per.some((m) => m.length === 0)) return null;
  const order: Miss['kind'][] = ['species', 'activity', 'season'];
  const seen = new Map<string, Miss>();
  for (const misses of per)
    for (const m of misses) {
      const key = `${m.kind}:${m.values.join(',')}`;
      if (!seen.has(key)) seen.set(key, m);
    }
  const misses = [...seen.values()].sort((x, y) => order.indexOf(x.kind) - order.indexOf(y.kind));
  const reasons = [...new Set(misses.map((m) => reasonFor(m, ctx)))];
  return { misses, reasons };
};

/** The rationale a commitment from an unselected source document is recorded with. */
export const SOURCE_REASON = 'Source document not applicable';
/** The rationale an apply carries when no tag on the commitment speaks for it. */
export const APPLY_FALLBACK = 'Recommended by setup';

/**
 * Why setup says a commitment applies: the tags on its first matching requirement
 * that the setup shares (in habitat, an activity it involves, a season it overlaps).
 * null when the matching requirement carries no tags, so nothing speaks for it.
 */
export const applyReason = (c: ApplicableCommitment, ctx: SetupContext): string | null => {
  const q = c.requirements.find((r) => missesFor(r, ctx.setup).length === 0 && (r.species.length || r.activities.length || r.seasons.length));
  if (!q) return null;
  const parts: string[] = [];
  const sp = q.species.filter((x) => ctx.setup.species.includes(x));
  if (sp.length) {
    const inHab = sp.filter((x) => ctx.habitat.find((h) => h.code === x)?.inHabitat === true);
    parts.push(inHab.length ? `In ${inHab.map((x) => SPECIES_PHRASE[x] ?? x).join(' and ')} habitat` : `${sp.map((x) => SPECIES_LABEL[x] ?? x).join(' and ')} selected`);
  }
  const act = q.activities.filter((x) => ctx.setup.activities.includes(x));
  if (act.length) parts.push(act.map((x) => ACTIVITY_LABEL[x] ?? x).join(', '));
  const se = q.seasons.filter((id) => SEASON_BY_ID[id] && seasonOverlaps(SEASON_BY_ID[id], ctx.setup.startDate, ctx.setup.endDate));
  if (se.length) parts.push(`Overlaps the ${se.map((id) => SEASON_BY_ID[id].phrase).join(' and the ')}`);
  return parts.length ? parts.join(' · ') : null;
};

/** The outer limit: a component with no mapped sources sees every source, as prod does today. */
export const inSourceScope = (c: ApplicableCommitment, setup: ComponentSetup | null): boolean =>
  !setup || setup.sources.length === 0 || setup.sources.includes(c.sourceId);

// ── Facets — every option carries the count it will actually produce ────────

export interface Facet {
  key: string;
  label: string;
  options: { value: string; label: string; count: number }[];
}

const countBy = <T>(items: ApplicableCommitment[], pick: (c: ApplicableCommitment) => T[]): Map<T, number> => {
  const m = new Map<T, number>();
  for (const c of items) for (const v of pick(c)) m.set(v, (m.get(v) ?? 0) + 1);
  return m;
};

const byLabel = (a: { label: string }, b: { label: string }) => a.label.localeCompare(b.label);

/** Facets are built over a SCOPE, so switching view recomputes them together. Options read A–Z, as prod's drawer sorts them. */
export const facetsFor = (scope: ApplicableCommitment[]): Facet[] => {
  const bySource = countBy(scope, (c) => [c.sourceId]);
  const byType = countBy(scope, typesOf);
  const bySpecies = countBy(scope, speciesOf);
  return [
    {
      key: 'source',
      label: 'Source Document',
      options: SETUP_SOURCES.filter((s) => bySource.get(s.id)).map((s) => ({ value: s.id, label: s.short, count: bySource.get(s.id) ?? 0 }))
        .sort(byLabel),
    },
    {
      key: 'type',
      label: 'Requirement Type',
      options: REQUIREMENT_TYPES.filter((t) => byType.get(t)).map((t) => ({ value: t, label: t, count: byType.get(t) ?? 0 }))
        .sort(byLabel),
    },
    {
      key: 'species',
      label: 'Species',
      options: [...bySpecies.entries()]
        .sort((x, y) => (SPECIES_LABEL[x[0]] ?? x[0]).localeCompare(SPECIES_LABEL[y[0]] ?? y[0]))
        .map(([code, count]) => ({ value: code, label: SPECIES_LABEL[code] ?? code, count })),
    },
  ];
};

// ── Starting figures (no setup yet: every source in scope, as prod today) ───

export const SETUP_TOTALS = {
  total: SETUP_COMMITMENTS.length,
  undecided: SETUP_COMMITMENTS.filter((c) => c.decision === null).length,
  decided: SETUP_COMMITMENTS.filter((c) => c.decision !== null).length,
};
export const DECIDED_PERCENT = Math.round((SETUP_TOTALS.decided / SETUP_TOTALS.total) * 100);
export const PENDING_ACTION_COUNT = SETUP_COMMITMENTS.filter((c) => c.decision === null).reduce((n, c) => n + c.actions.length, 0);

/** Decisions written in-session (setup runs, reopenings) carry the demo's TODAY, the same day the dashboard reads. */
export const TODAY_ISO = TODAY;

/** ISO → "Mmm d, yyyy" without touching Date.now(). */
export const fmtDate = (iso: string): string => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
};
