// Project data fixture — the five surfaces behind the dashboard's "Project data"
// rail. These REPLACE the prod project-details-layout tab pages (Project Summary,
// Species, Milestones, Construction Activities, Seasons) with side panels opened
// from the project homepage; the panel contract is ?data=<key> in the URL, so the
// deep links prod's tab routes provided survive the replacement (Andy, 2026-08-03).
//
// THE PANEL STANDARD (round 6 — supersedes the earlier per-entity grid/form-row
// treatments): every entity list is READ-ONLY slim off-white cards, bespoke to
// its data, dense enough to show 6–8 at once, with a search field on every panel.
// No grids, no inline form rows, no drag ordering. Sort is alphabetical
// everywhere except Milestones, which sort by EstimatedDate. Add is a primary
// button in the panel FOOTER; per-row Edit opens a stacked child drawer carrying
// that entity's ported prod form (Delete left, Cancel/Save right; checkboxes
// render as switches). Seasons render as the ported prod season-card and carry no
// Tracked badge — the field stays, but it is an edit-form concern.
//
// Project Info opens straight into the editable form (no read view — Andy,
// 2026-08-03) and ends in the danger zone that gives delete-project its new home
// (BcnDangerZone + esa-confirm-dialog danger variant, the Source Document page's
// pattern).
//
// Content is invented-but-credible Delta Conveyance material, DETERMINISTIC (no
// Date.now()), and the row counts ARE the rail metas — the rail derives its
// figures from these arrays, so the two can never disagree.

export type ProjectDataKey =
  | 'project-info'
  | 'species'
  | 'milestones'
  | 'construction-activities'
  | 'seasons'
  | 'spatial';

// ── Species — the beacon-grid panel (prod columns: Common / Scientific / Code) ──
export interface SpeciesRow {
  commonName: string;
  scientificName: string;
  code: string;
}
export const SPECIES: SpeciesRow[] = [
  { commonName: 'Delta smelt', scientificName: 'Hypomesus transpacificus', code: 'DS' },
  { commonName: 'Longfin smelt', scientificName: 'Spirinchus thaleichthys', code: 'LFS' },
  { commonName: 'Winter-run Chinook salmon', scientificName: 'Oncorhynchus tshawytscha', code: 'WRCS' },
  { commonName: 'Spring-run Chinook salmon', scientificName: 'Oncorhynchus tshawytscha', code: 'SRCS' },
  { commonName: 'Fall-run Chinook salmon', scientificName: 'Oncorhynchus tshawytscha', code: 'FRCS' },
  { commonName: 'Central Valley steelhead', scientificName: 'Oncorhynchus mykiss', code: 'CVS' },
  { commonName: 'Green sturgeon', scientificName: 'Acipenser medirostris', code: 'GS' },
  { commonName: 'White sturgeon', scientificName: 'Acipenser transmontanus', code: 'WS' },
  { commonName: 'Sacramento splittail', scientificName: 'Pogonichthys macrolepidotus', code: 'SPLT' },
  { commonName: 'Pacific lamprey', scientificName: 'Entosphenus tridentatus', code: 'PL' },
  { commonName: 'Giant garter snake', scientificName: 'Thamnophis gigas', code: 'GGS' },
  { commonName: 'Western pond turtle', scientificName: 'Actinemys marmorata', code: 'WPT' },
  { commonName: 'California red-legged frog', scientificName: 'Rana draytonii', code: 'CRLF' },
  { commonName: 'California tiger salamander', scientificName: 'Ambystoma californiense', code: 'CTS' },
  { commonName: 'Western spadefoot', scientificName: 'Spea hammondii', code: 'WSF' },
  { commonName: "Swainson's hawk", scientificName: 'Buteo swainsoni', code: 'SWHA' },
  { commonName: 'White-tailed kite', scientificName: 'Elanus leucurus', code: 'WTK' },
  { commonName: 'Northern harrier', scientificName: 'Circus hudsonius', code: 'NOHA' },
  { commonName: 'Burrowing owl', scientificName: 'Athene cunicularia', code: 'BUOW' },
  { commonName: 'Tricolored blackbird', scientificName: 'Agelaius tricolor', code: 'TRBL' },
  { commonName: 'California black rail', scientificName: 'Laterallus jamaicensis coturniculus', code: 'CBR' },
  { commonName: 'Greater sandhill crane', scientificName: 'Antigone canadensis tabida', code: 'GSC' },
  { commonName: 'Western yellow-billed cuckoo', scientificName: 'Coccyzus americanus occidentalis', code: 'WYBC' },
  { commonName: "Least Bell's vireo", scientificName: 'Vireo bellii pusillus', code: 'LBV' },
  { commonName: 'Loggerhead shrike', scientificName: 'Lanius ludovicianus', code: 'LOSH' },
  { commonName: 'Song sparrow (Modesto population)', scientificName: 'Melospiza melodia', code: 'SOSP' },
  { commonName: "Townsend's big-eared bat", scientificName: 'Corynorhinus townsendii', code: 'TBEB' },
  { commonName: 'Pallid bat', scientificName: 'Antrozous pallidus', code: 'PALB' },
  { commonName: 'Western red bat', scientificName: 'Lasiurus blossevillii', code: 'WRB' },
  { commonName: 'American badger', scientificName: 'Taxidea taxus', code: 'AMBA' },
  { commonName: 'San Joaquin kit fox', scientificName: 'Vulpes macrotis mutica', code: 'SJKF' },
  { commonName: 'Valley elderberry longhorn beetle', scientificName: 'Desmocerus californicus dimorphus', code: 'VELB' },
  { commonName: 'Vernal pool fairy shrimp', scientificName: 'Branchinecta lynchi', code: 'VPFS' },
  { commonName: 'Vernal pool tadpole shrimp', scientificName: 'Lepidurus packardi', code: 'VPTS' },
  { commonName: "Crotch's bumble bee", scientificName: 'Bombus crotchii', code: 'CBB' },
  { commonName: 'Suisun marsh aster', scientificName: 'Symphyotrichum lentum', code: 'SMA' },
  { commonName: "Mason's lilaeopsis", scientificName: 'Lilaeopsis masonii', code: 'ML' },
  { commonName: 'Delta button-celery', scientificName: 'Eryngium racemosum', code: 'DBC' },
];

// ── Milestones — read-only list sorted by EstimatedDate; the child drawer edits
// (Andy, round 6). Dates are ISO (the DTO shape; the date-picker prefill needs
// them); fmtDate derives the display label deterministically. ─────────────────
export interface MilestoneRow {
  name: string;
  description: string;
  /** ISO date (Milestone.EstimatedDate) — list order follows this field. */
  estimatedDate: string;
}
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/** ISO → "MMM d, yyyy", no Date() involved (deterministic, timezone-proof). */
export const fmtDate = (iso: string): string => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS_SHORT[m - 1]} ${d}, ${y}`;
};
export const MILESTONES: MilestoneRow[] = [
  { name: 'NTP — Geotechnical investigations', description: 'Field explorations authorized under the initial DCA work plan', estimatedDate: '2025-01-15' },
  { name: 'USFWS Biological Opinion issued', description: 'Programmatic BiOp covering listed terrestrial and aquatic species', estimatedDate: '2025-06-30' },
  { name: 'CDFW ITP amendment issued', description: 'Incidental Take Permit amendment for construction-phase take', estimatedDate: '2025-12-19' },
  { name: 'USACE Section 408 permission', description: 'Alteration of federal levee works approved', estimatedDate: '2026-04-15' },
  { name: 'CWA Section 404 permit', description: 'Discharge of fill authorization from USACE', estimatedDate: '2026-05-29' },
  { name: 'Delta Plan consistency certification', description: 'Certification filed with the Delta Stewardship Council', estimatedDate: '2026-06-12' },
  { name: 'Start of construction — Bouldin Island', description: 'Launch shaft site mobilization and ground disturbance', estimatedDate: '2026-08-03' },
  { name: 'Intake B site preparation begins', description: 'North Delta intake clearing and access work', estimatedDate: '2026-09-14' },
  { name: 'First TBM delivery', description: 'Tunnel boring machine arrival at Bouldin Island', estimatedDate: '2027-03-01' },
  { name: 'Southern Forebay groundbreaking', description: 'Byron Tract forebay embankment work begins', estimatedDate: '2027-05-17' },
  { name: 'Twin Cities staging activation', description: 'Staging and segment casting yard operational', estimatedDate: '2027-08-30' },
  { name: 'Tunnel drive begins — Bouldin reach', description: 'First mining advance from the launch shaft', estimatedDate: '2028-01-11' },
];

// ── Construction Activities — ordered form rows (Name / Description) ────────────
export interface ConstructionActivityRow {
  name: string;
  description: string;
}
export const CONSTRUCTION_ACTIVITIES: ConstructionActivityRow[] = [
  { name: 'Clearing & grubbing', description: 'Vegetation and topsoil removal ahead of grading' },
  { name: 'Grading & excavation', description: 'Cut and fill earthwork within approved work areas' },
  { name: 'Geotechnical borings', description: 'Drill-rig explorations and CPT soundings' },
  { name: 'Monitoring well installation', description: 'Groundwater observation wells' },
  { name: 'Pile driving — impact', description: 'Impact-hammer foundation piles' },
  { name: 'Pile driving — vibratory', description: 'Vibratory sheet and pipe pile installation' },
  { name: 'Shaft excavation', description: 'Launch and reception shaft sinking' },
  { name: 'Slurry wall construction', description: 'Diaphragm wall panels at shaft sites' },
  { name: 'Tunnel boring', description: 'TBM mining and segment erection' },
  { name: 'Tunnel muck handling', description: 'Spoils conveyance, stockpiling, and disposal' },
  { name: 'Dewatering', description: 'Construction dewatering and discharge' },
  { name: 'Cofferdam installation', description: 'Temporary in-water isolation structures' },
  { name: 'Dredging', description: 'In-channel sediment removal at intake sites' },
  { name: 'Riprap placement', description: 'Rock slope protection at bank interfaces' },
  { name: 'Levee modification', description: 'Setback and reinforcement work on project levees' },
  { name: 'Haul truck operations', description: 'Off-road and public-road material hauling' },
  { name: 'Barge operations', description: 'Waterborne material delivery and staging' },
  { name: 'Concrete batching & placement', description: 'On-site batch plants and structural pours' },
  { name: 'Crane operations', description: 'Heavy lifts at shaft and intake sites' },
  { name: 'Utility relocation', description: 'Overhead and underground utility moves' },
  { name: 'Road construction', description: 'Access road building and improvements' },
  { name: 'Bridge construction', description: 'Crossing structures at sloughs and canals' },
  { name: 'Structure demolition', description: 'Removal of existing buildings and facilities' },
  { name: 'Fencing installation', description: 'Exclusion and security fencing' },
  { name: 'Night work lighting', description: 'Temporary lighting for extended shifts' },
  { name: 'Stormwater BMP installation', description: 'Erosion and sediment control measures' },
  { name: 'Site restoration & revegetation', description: 'Decompaction, seeding, and planting' },
];

// ── Seasons — grouped by season TYPE (prod's NestingBirds / BiologicalResources
// checkboxes), each rendered as the prod season-card (year timeline, today
// marker). Month/day integers mirror the ProjectSeason DTO (StartMonth/StartDay/
// EndMonth/EndDay); the card derives its labels and segment geometry from them.
export interface SeasonRow {
  name: string;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  /** SourceName — the source-document relation the season derives from. */
  source: string;
  tracked: boolean;
  /** Related species (ProjectSeason ↔ Species join) — shown in the timeline popover. */
  species: string[];
}
export interface SeasonGroup {
  group: string;
  seasons: SeasonRow[];
}
export const SEASON_GROUPS: SeasonGroup[] = [
  {
    group: 'Nesting Birds',
    seasons: [
      { name: 'Raptor nesting season', startMonth: 2, startDay: 1, endMonth: 9, endDay: 15, source: 'CDFW Code §3503.5', tracked: true, species: ["Swainson's hawk", 'White-tailed kite', 'Northern harrier'] },
      { name: 'Passerine nesting season', startMonth: 3, startDay: 15, endMonth: 9, endDay: 1, source: 'MBTA / CESA', tracked: true, species: ['Tricolored blackbird', 'Song sparrow (Modesto population)'] },
      { name: 'Burrowing owl nesting season', startMonth: 2, startDay: 1, endMonth: 8, endDay: 31, source: 'CDFW Staff Report', tracked: true, species: ['Burrowing owl'] },
      { name: 'Swainson’s hawk nesting season', startMonth: 3, startDay: 1, endMonth: 9, endDay: 15, source: 'CDFW ITP Condition 4.2', tracked: true, species: ["Swainson's hawk"] },
      { name: 'Tricolored blackbird colony season', startMonth: 3, startDay: 15, endMonth: 7, endDay: 31, source: 'CDFW ITP Condition 4.8', tracked: false, species: ['Tricolored blackbird'] },
      { name: 'Sandhill crane wintering season', startMonth: 9, startDay: 15, endMonth: 3, endDay: 15, source: 'USFWS BiOp Term 8', tracked: true, species: ['Greater sandhill crane'] },
    ],
  },
  {
    group: 'Biological Resources',
    seasons: [
      { name: 'In-water work window', startMonth: 8, startDay: 1, endMonth: 10, endDay: 31, source: 'NMFS BiOp WQ-2', tracked: true, species: ['Delta smelt', 'Winter-run Chinook salmon'] },
      { name: 'GGS active season', startMonth: 5, startDay: 1, endMonth: 10, endDay: 1, source: 'USFWS BiOp Term 12', tracked: false, species: ['Giant garter snake'] },
      { name: 'CTS breeding season', startMonth: 11, startDay: 1, endMonth: 3, endDay: 31, source: 'CDFW ITP Condition 7.4', tracked: true, species: ['California tiger salamander'] },
      { name: 'Vernal pool wet season', startMonth: 12, startDay: 1, endMonth: 5, endDay: 15, source: 'USFWS BiOp Term 15', tracked: true, species: ['Vernal pool fairy shrimp', 'Vernal pool tadpole shrimp'] },
      { name: 'Delta smelt spawning window', startMonth: 2, startDay: 1, endMonth: 6, endDay: 30, source: 'USFWS BiOp Term 3', tracked: true, species: ['Delta smelt'] },
      { name: 'VELB flight season', startMonth: 3, startDay: 15, endMonth: 6, endDay: 15, source: 'USFWS BiOp Term 19', tracked: false, species: ['Valley elderberry longhorn beetle'] },
      { name: 'Bat maternity roost season', startMonth: 4, startDay: 1, endMonth: 8, endDay: 31, source: 'CDFW ITP Condition 9.1', tracked: true, species: ["Townsend's big-eared bat", 'Pallid bat'] },
      { name: 'Salmonid migration window', startMonth: 10, startDay: 1, endMonth: 6, endDay: 30, source: 'NMFS BiOp WQ-5', tracked: true, species: ['Winter-run Chinook salmon', 'Central Valley steelhead'] },
    ],
  },
];
export const SEASON_COUNT = SEASON_GROUPS.reduce((n, g) => n + g.seasons.length, 0);

// ── Spatial Data — the project's feature-server layers (read-only panel; the
// Spatial Library zone remains the full management surface) ───────────────────
export interface SpatialLayer {
  name: string;
  /** Feature-server source the layer streams from. */
  source: string;
  geometry: 'Point' | 'Polygon' | 'Line';
}
export const SPATIAL_LAYERS: SpatialLayer[] = [
  { name: 'Work Areas', source: 'DCA Feature Server', geometry: 'Polygon' },
  { name: 'Component Footprints', source: 'DCA Feature Server', geometry: 'Polygon' },
  { name: 'Nesting Bird Buffers (live)', source: 'DWR AGOL', geometry: 'Polygon' },
  { name: 'Geotech Exploration Sites', source: 'DWR AGOL', geometry: 'Point' },
  { name: 'Delta Parcels', source: 'DWR AGOL', geometry: 'Polygon' },
  { name: 'Survey Coverage Areas', source: 'DWR AGOL', geometry: 'Polygon' },
];

// ── Project Info — the editable form (prod project-upsert fields) + danger zone ──
export interface ProjectInfoForm {
  name: string;
  startDate: string;
  endDate: string;
  hasComponents: boolean;
  description: string;
  files: string[];
}
export const PROJECT_INFO: ProjectInfoForm = {
  name: 'Delta Conveyance Project',
  startDate: 'Jan 8, 2024',
  endDate: 'Dec 31, 2043',
  hasComponents: true,
  // Same record the dashboard header/facts display — this is where it's edited.
  description:
    'A new State Water Project conveyance facility — twin tunnels carrying water beneath the Delta from new North Delta intakes to the southern export facilities. Beacon is the system of record for every environmental commitment, monitoring observation, and compliance report across the project’s components.',
  files: ['Delta_Conveyance_FEIR_Certification.pdf', 'DCP_Project_Charter_2024.pdf'],
};

// ── Panel registry — heading + rail meta per key (rail figures derive from data) ──
export interface ProjectDataMeta {
  key: ProjectDataKey;
  label: string;
  /** Rail meta figure (row count); Project Info carries none. */
  meta?: string;
}
export const PROJECT_DATA_META: ProjectDataMeta[] = [
  { key: 'project-info', label: 'Project Info' },
  { key: 'species', label: 'Species', meta: String(SPECIES.length) },
  { key: 'milestones', label: 'Milestones', meta: String(MILESTONES.length) },
  { key: 'construction-activities', label: 'Construction Activities', meta: String(CONSTRUCTION_ACTIVITIES.length) },
  { key: 'seasons', label: 'Seasons', meta: String(SEASON_COUNT) },
  // Layers panel, read-only; no rail count (Andy, round 6) — the Spatial Library
  // zone remains the management surface.
  { key: 'spatial', label: 'Spatial Data' },
];
