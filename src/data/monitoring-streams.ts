// Monitoring Portal — the data-stream registry (the "mini data catalog").
//
// THE THESIS: the portal is not a fixed set of pages — it is n data streams
// landing from field-collection forms (Fulcrum / Survey123 / CASP) through the
// Databricks pipeline, plus a dashboard COMPOSED from widgets over those
// streams. A stream can be a DECLARED SUBSET of another (observations WHERE
// type = 'Nesting Bird') — derived views are streams in the catalog too, not
// separate portal structure; view configuration itself is headed for global
// Settings (Andy 2026-08-24, retiring the per-project add-on registry). Observations,
// DMRs, and surveys are three streams among many; mileage, equipment runtime,
// and WEAP trainings are the next three DCP needs, and other tenants will
// bring their own. Nothing here is baked into the portal's structure.
//
// GROUNDING: observations and surveys derive their records and counts from
// src/data/monitoring.ts (the geotech export). Mileage and runtime mirror the
// real per-site Fulcrum export (Mileage_Runtime_<site>.xlsx: a Mileage sheet
// and a Runtimes sheet sharing the vehicle-identity columns) with invented
// values. WEAP = Worker Environmental Awareness Program — training
// confirmations for field workers, NOT seepage readings (corrected 2026-08-24).

import { FINDS, SURVEYS, TODAY, findStateMeta } from './monitoring';

export { TODAY };

// ─────────────────────────────────────────────────────────────────────────────
// Stream registry
// ─────────────────────────────────────────────────────────────────────────────
export interface StreamField {
  /** Field name as it lands in the Databricks table. */
  name: string;
  /** Display label (the Fulcrum form's question label). */
  label: string;
  type: 'text' | 'date' | 'number' | 'select';
}

export type SampleRecord = Record<string, string | number | null>;

export interface MonitoringStream {
  id: string;
  name: string;
  /** Lucide icon name (rendered by the catalog card). */
  icon: string;
  /**
   * The stream's entity-mark color — a `var(--bcn-mark-*)` reference (the
   * non-semantic ramp; never a status token). Stored on the stream, same as a
   * Component's mark, so widget accents are a fact of the model, not the
   * display tier (remy finding 4, 2026-08-24).
   */
  markColor: string;
  /** The connection's stored description — what the source form captures. */
  description: string;
  /** Source form(s) in the field-collection system. */
  sourceForm: string;
  sourceSystem: string;
  /** Databricks table the pipeline lands rows in. */
  table: string;
  status: 'active' | 'paused';
  recordCount: number;
  lastSync: string;
  firstRecord: string;
  syncCadence: string;
  /** Streams whose records carry coordinates get a map on their index page. */
  geospatial?: boolean;
  /**
   * A derived stream: this stream is the parent's table filtered on a REAL
   * column (observations.type — prod's ObservationType). Names the source so
   * the subset is a fact of the model, never a display-tier grouping.
   */
  subsetOf?: { streamId: string; field: string; value: string };
  fields: StreamField[];
  /** Recent rows (newest first), keyed by field name. */
  sampleRecords: SampleRecord[];
}

// Observations + surveys derive from the real geotech export.
const obsSample: SampleRecord[] = [...FINDS]
  .sort((a, b) => (a.observedDate < b.observedDate ? 1 : -1))
  .map((f) => ({
    observedDate: f.observedDate,
    species: f.kind === 'concern' ? (f.title ?? f.species) : f.species,
    type: f.type,
    state: findStateMeta(f).label,
    workArea: f.workArea || null,
    description: f.description,
  }));

// The typed subsets promoted to streams (Andy 2026-08-24): the observations
// table filtered on `type`, newest first. Same rows, narrower views.
const subsetFinds = (type: 'Nesting Bird' | 'Biological Resource' | 'Compliance Concern') =>
  [...FINDS].filter((f) => f.type === type).sort((a, b) => (a.observedDate < b.observedDate ? 1 : -1));

const nestingSample: SampleRecord[] = subsetFinds('Nesting Bird').map((f) => ({
  observedDate: f.observedDate,
  species: f.species,
  state: findStateMeta(f).label,
  workArea: f.workArea || null,
  description: f.description,
}));

const concernSample: SampleRecord[] = subsetFinds('Compliance Concern').map((f) => ({
  observedDate: f.observedDate,
  concern: f.title ?? f.species,
  commitment: f.commitments[0]?.code ?? null,
  state: findStateMeta(f).label,
  workArea: f.workArea || null,
  description: f.description,
}));

const bioSample: SampleRecord[] = subsetFinds('Biological Resource').map((f) => ({
  observedDate: f.observedDate,
  species: f.species,
  state: findStateMeta(f).label,
  workArea: f.workArea || null,
  description: f.description,
}));

/** Earliest record in a newest-first sample. */
const firstRecordOf = (sample: SampleRecord[]): string => String(sample.at(-1)?.observedDate ?? '');

const surveySample: SampleRecord[] = [...SURVEYS]
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .map((s) => ({
    date: s.date,
    surveyor: s.surveyor,
    surveyType: s.surveyType,
    source: s.source,
    species: s.species,
    workArea: s.workArea,
    status: s.status,
  }));

export const STREAMS: MonitoringStream[] = [
  {
    id: 'observations',
    name: 'Observations',
    icon: 'binoculars',
    markColor: 'var(--bcn-mark-teal)',
    description:
      'Biological monitor observations logged in the field — nests, species sightings, habitat features, and compliance concerns.',
    sourceForm: 'DCP Biological Monitoring — Observation',
    sourceSystem: 'Fulcrum',
    table: 'dcp_monitoring.observations',
    status: 'active',
    recordCount: FINDS.length,
    lastSync: '2026-06-17 06:10',
    firstRecord: '2026-05-18',
    syncCadence: 'Hourly',
    geospatial: true,
    fields: [
      { name: 'observedDate', label: 'Observed', type: 'date' },
      { name: 'species', label: 'Species / concern', type: 'text' },
      { name: 'type', label: 'Type', type: 'select' },
      { name: 'state', label: 'State', type: 'select' },
      { name: 'workArea', label: 'Work area', type: 'text' },
      { name: 'description', label: 'Field log', type: 'text' },
    ],
    sampleRecords: obsSample,
  },
  {
    id: 'nesting-birds',
    name: 'Nesting Birds',
    icon: 'bird',
    markColor: 'var(--bcn-mark-cyan)',
    description:
      'Observations typed Nesting Bird — active nests and their monitoring state, by species and work area.',
    sourceForm: 'DCP Biological Monitoring — Observation',
    sourceSystem: 'Fulcrum',
    table: 'dcp_monitoring.observations',
    subsetOf: { streamId: 'observations', field: 'type', value: 'Nesting Bird' },
    status: 'active',
    recordCount: nestingSample.length,
    lastSync: '2026-06-17 06:10',
    firstRecord: firstRecordOf(nestingSample),
    syncCadence: 'Hourly',
    geospatial: true,
    fields: [
      { name: 'observedDate', label: 'Observed', type: 'date' },
      { name: 'species', label: 'Species', type: 'text' },
      { name: 'state', label: 'State', type: 'select' },
      { name: 'workArea', label: 'Work area', type: 'text' },
      { name: 'description', label: 'Field log', type: 'text' },
    ],
    sampleRecords: nestingSample,
  },
  {
    id: 'compliance-concerns',
    name: 'Compliance Concerns',
    icon: 'triangle-alert',
    markColor: 'var(--bcn-mark-rust)',
    description:
      'Observations typed Compliance Concern — concerns raised in the field, each against the commitment it cites.',
    sourceForm: 'DCP Biological Monitoring — Observation',
    sourceSystem: 'Fulcrum',
    table: 'dcp_monitoring.observations',
    subsetOf: { streamId: 'observations', field: 'type', value: 'Compliance Concern' },
    status: 'active',
    recordCount: concernSample.length,
    lastSync: '2026-06-17 06:10',
    firstRecord: firstRecordOf(concernSample),
    syncCadence: 'Hourly',
    geospatial: true,
    fields: [
      { name: 'observedDate', label: 'Raised', type: 'date' },
      { name: 'concern', label: 'Concern', type: 'text' },
      { name: 'commitment', label: 'Commitment', type: 'select' },
      { name: 'state', label: 'State', type: 'select' },
      { name: 'workArea', label: 'Work area', type: 'text' },
      { name: 'description', label: 'Field log', type: 'text' },
    ],
    sampleRecords: concernSample,
  },
  {
    id: 'biological-resources',
    name: 'Biological Resources',
    icon: 'leaf',
    markColor: 'var(--bcn-mark-olive)',
    description:
      'Observations typed Biological Resource — foraging sightings, habitat features, and tracked resources by work area.',
    sourceForm: 'DCP Biological Monitoring — Observation',
    sourceSystem: 'Fulcrum',
    table: 'dcp_monitoring.observations',
    subsetOf: { streamId: 'observations', field: 'type', value: 'Biological Resource' },
    status: 'active',
    recordCount: bioSample.length,
    lastSync: '2026-06-17 06:10',
    firstRecord: firstRecordOf(bioSample),
    syncCadence: 'Hourly',
    geospatial: true,
    fields: [
      { name: 'observedDate', label: 'Observed', type: 'date' },
      { name: 'species', label: 'Resource', type: 'text' },
      { name: 'state', label: 'State', type: 'select' },
      { name: 'workArea', label: 'Work area', type: 'text' },
      { name: 'description', label: 'Field log', type: 'text' },
    ],
    sampleRecords: bioSample,
  },
  {
    id: 'daily-monitoring-reports',
    name: 'Daily Monitoring Reports',
    icon: 'file-text',
    markColor: 'var(--bcn-mark-slate)',
    description:
      'One report per monitor per field day — areas visited, activities performed, and the observations logged during the visit.',
    sourceForm: 'DCP Daily Monitoring Report',
    sourceSystem: 'Fulcrum',
    table: 'dcp_monitoring.daily_reports',
    status: 'active',
    recordCount: 32,
    lastSync: '2026-06-17 06:10',
    firstRecord: '2026-05-04',
    syncCadence: 'Daily · 06:00',
    fields: [
      { name: 'reportDate', label: 'Report date', type: 'date' },
      { name: 'monitor', label: 'Monitor', type: 'text' },
      { name: 'workAreas', label: 'Work areas', type: 'text' },
      { name: 'activities', label: 'Activities', type: 'text' },
      { name: 'observationsLogged', label: 'Observations logged', type: 'number' },
      { name: 'status', label: 'Status', type: 'select' },
    ],
    sampleRecords: [
      { reportDate: '2026-06-17', monitor: 'Christy Pierce', workAreas: 'DCTR2-DH-010, DCTR2-DH-100', activities: 'Preconstruction sweep; buffer compliance checks', observationsLogged: 2, status: 'Draft' },
      { reportDate: '2026-06-16', monitor: 'Bryce Kozak', workAreas: 'DCBPP-DH-066', activities: 'Burrow flagging follow-up; access-road avoidance check', observationsLogged: 1, status: 'Final' },
      { reportDate: '2026-06-15', monitor: 'Morgan Henry', workAreas: 'DCBPP-DH-066', activities: 'Habitat assessment', observationsLogged: 1, status: 'Final' },
      { reportDate: '2026-06-12', monitor: 'CJ January', workAreas: 'DCTR2-DH-010', activities: 'SWHA 72-hour survey', observationsLogged: 1, status: 'Final' },
      { reportDate: '2026-06-11', monitor: 'Alicia Manzo', workAreas: 'DCRAI-DH-012', activities: 'Two-week clearance survey', observationsLogged: 1, status: 'Final' },
      { reportDate: '2026-06-10', monitor: 'Mackenzie Firestone', workAreas: 'DCTR2-DH-010', activities: 'CASP protocol survey', observationsLogged: 1, status: 'Final' },
      { reportDate: '2026-06-09', monitor: 'Aaron Lopez', workAreas: 'DCRAI-DH-006, DCRAI-DH-009', activities: 'Nest monitoring; raven activity check', observationsLogged: 2, status: 'Final' },
    ],
  },
  {
    id: 'surveys',
    name: 'Surveys',
    icon: 'clipboard-list',
    markColor: 'var(--bcn-mark-emerald)',
    description:
      'Protocol survey documents — preconstruction clearance, nesting bird, CASP, and two-week clearance surveys — brought in as Evidence of Compliance.',
    sourceForm: 'Multiple protocol forms',
    sourceSystem: 'Fulcrum · Survey123 · CASP',
    table: 'dcp_monitoring.surveys',
    status: 'active',
    recordCount: SURVEYS.length,
    lastSync: '2026-06-17 06:10',
    firstRecord: '2026-05-18',
    syncCadence: 'Daily · 06:00',
    fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'surveyor', label: 'Surveyor', type: 'text' },
      { name: 'surveyType', label: 'Survey type', type: 'text' },
      { name: 'source', label: 'Source', type: 'select' },
      { name: 'species', label: 'Species / resource', type: 'text' },
      { name: 'workArea', label: 'Work area', type: 'text' },
      { name: 'status', label: 'Status', type: 'select' },
    ],
    sampleRecords: surveySample,
  },
  {
    // Field shape mirrors the real per-site Fulcrum export's Mileage sheet
    // (Mileage_Runtime_<site>.xlsx); values are invented.
    id: 'mileage',
    name: 'Vehicle Mileage',
    icon: 'car',
    markColor: 'var(--bcn-mark-sky)',
    description:
      'Per-trip vehicle mileage logged against each work site — vehicle identity, operator, trip origin, and odometer miles — for air-quality and traffic commitment reporting.',
    sourceForm: 'Mileage & Runtime Report',
    sourceSystem: 'Fulcrum',
    table: 'dcp_monitoring.mileage',
    status: 'active',
    recordCount: 186,
    lastSync: '2026-06-17 06:10',
    firstRecord: '2026-04-06',
    syncCadence: 'Daily · 06:00',
    fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'site', label: 'Site', type: 'text' },
      { name: 'company', label: 'Company', type: 'text' },
      { name: 'equipment', label: 'Equipment', type: 'text' },
      { name: 'vehicleClass', label: 'Class', type: 'select' },
      { name: 'licensePlate', label: 'License plate', type: 'text' },
      { name: 'totalMileage', label: 'Total mileage', type: 'number' },
      { name: 'occupants', label: 'Additional occupants', type: 'number' },
      { name: 'tripOrigin', label: 'Trip origin', type: 'text' },
      { name: 'operator', label: 'Equipment operator', type: 'text' },
      { name: 'roundTrip', label: 'Round trip', type: 'select' },
    ],
    sampleRecords: [
      { date: '2026-06-17', site: 'DCTR2-DH-010', company: 'ESA', equipment: 'Subaru Crosstrek', vehicleClass: 'Non-Commercial Vehicle', licensePlate: '8ULM301', totalMileage: 47.2, occupants: 1, tripOrigin: 'Hood staging yard', operator: 'Christy Pierce', roundTrip: 'yes' },
      { date: '2026-06-16', site: 'DCBPP-DH-066', company: 'Bayline Drilling', equipment: 'Ford F-150', vehicleClass: 'Commercial Vehicle', licensePlate: '61437H2', totalMileage: 38.4, occupants: 2, tripOrigin: 'Courtland yard', operator: 'M. Vasquez', roundTrip: 'yes' },
      { date: '2026-06-16', site: 'DCRDS-DH-294', company: 'Bayline Drilling', equipment: 'Kenworth T370 water truck', vehicleClass: 'Commercial Vehicle', licensePlate: '92184M1', totalMileage: 52.1, occupants: 0, tripOrigin: 'Courtland yard', operator: 'S. Ortiz', roundTrip: 'yes' },
      { date: '2026-06-15', site: 'DCTR2-DH-100', company: 'Bayline Drilling', equipment: 'Ford F-600 flatbed', vehicleClass: 'Commercial Vehicle', licensePlate: '48213K7', totalMileage: 31.0, occupants: 1, tripOrigin: 'Courtland yard', operator: 'T. Reyes', roundTrip: 'no' },
      { date: '2026-06-13', site: 'DCRAI-DH-012', company: 'ESA', equipment: 'Subaru Crosstrek', vehicleClass: 'Non-Commercial Vehicle', licensePlate: '8ULM301', totalMileage: 44.6, occupants: 1, tripOrigin: 'Hood staging yard', operator: 'Alicia Manzo', roundTrip: 'yes' },
      { date: '2026-06-12', site: 'DCTR2-DH-010', company: 'ESA', equipment: 'Toyota RAV4', vehicleClass: 'Non-Commercial Vehicle', licensePlate: '7PKT882', totalMileage: 27.3, occupants: 0, tripOrigin: 'Hood staging yard', operator: 'CJ January', roundTrip: 'yes' },
      { date: '2026-06-12', site: 'DCTR1-DH-008', company: 'Bayline Drilling', equipment: 'Kenworth T370 water truck', vehicleClass: 'Commercial Vehicle', licensePlate: '92184M1', totalMileage: 49.0, occupants: 0, tripOrigin: 'Courtland yard', operator: 'S. Ortiz', roundTrip: 'yes' },
      { date: '2026-06-11', site: 'DCRAI-DH-012', company: 'Bayline Drilling', equipment: 'Ford F-600 flatbed', vehicleClass: 'Commercial Vehicle', licensePlate: '48213K7', totalMileage: 18.2, occupants: 1, tripOrigin: 'DCRAI-DH-009', operator: 'T. Reyes', roundTrip: 'no' },
    ],
  },
  {
    // The same export's Runtimes sheet — equipment identity + run time minutes.
    id: 'runtime',
    name: 'Equipment Runtime',
    icon: 'timer',
    markColor: 'var(--bcn-mark-amber)',
    description:
      'Daily run time per equipment unit at each work site — drill rigs, support trucks, and service equipment — in minutes, for emissions and usage reporting.',
    sourceForm: 'Mileage & Runtime Report',
    sourceSystem: 'Fulcrum',
    table: 'dcp_monitoring.runtimes',
    status: 'active',
    recordCount: 224,
    lastSync: '2026-06-17 06:10',
    firstRecord: '2026-04-06',
    syncCadence: 'Daily · 06:00',
    fields: [
      { name: 'date', label: 'Date', type: 'date' },
      { name: 'site', label: 'Site', type: 'text' },
      { name: 'company', label: 'Company', type: 'text' },
      { name: 'equipment', label: 'Equipment', type: 'text' },
      { name: 'equipmentClass', label: 'Class', type: 'select' },
      { name: 'serialNumber', label: 'Serial number', type: 'text' },
      { name: 'licensePlate', label: 'License plate', type: 'text' },
      { name: 'runTimeMinutes', label: 'Run time (min)', type: 'number' },
    ],
    sampleRecords: [
      { date: '2026-06-17', site: 'DCTR2-DH-010', company: 'Bayline Drilling', equipment: 'GtechDrill GT-8', equipmentClass: 'Drill Rig', serialNumber: 'GT8-2210-114', licensePlate: '11408L4', runTimeMinutes: 465 },
      { date: '2026-06-16', site: 'DCBPP-DH-066', company: 'Bayline Drilling', equipment: 'Ford F-600', equipmentClass: 'Drill Rig', serialNumber: '1FDXF60T8NDA31177', licensePlate: '48213K7', runTimeMinutes: 540 },
      { date: '2026-06-16', site: 'DCTR2-DH-010', company: 'Bayline Drilling', equipment: 'GtechDrill GT-8', equipmentClass: 'Drill Rig', serialNumber: 'GT8-2210-114', licensePlate: '11408L4', runTimeMinutes: 480 },
      { date: '2026-06-15', site: 'DCBPP-DH-066', company: 'Bayline Drilling', equipment: 'Ford F-600', equipmentClass: 'Drill Rig', serialNumber: '1FDXF60T8NDA31177', licensePlate: '48213K7', runTimeMinutes: 475 },
      { date: '2026-06-15', site: 'DCRDS-DH-294', company: 'Valley Site Services', equipment: 'Hino 268', equipmentClass: 'Toilet service', serialNumber: null, licensePlate: '90311V2', runTimeMinutes: 15 },
      { date: '2026-06-13', site: 'DCTR1-DH-008', company: 'Bayline Drilling', equipment: 'Kenworth T370', equipmentClass: 'Water Truck', serialNumber: null, licensePlate: '92184M1', runTimeMinutes: 205 },
      { date: '2026-06-12', site: 'DCTR2-DH-010', company: 'Bayline Drilling', equipment: 'GtechDrill GT-8', equipmentClass: 'Drill Rig', serialNumber: 'GT8-2210-114', licensePlate: '11408L4', runTimeMinutes: 310 },
      { date: '2026-06-11', site: 'DCRAI-DH-012', company: 'Bayline Drilling', equipment: 'Ford F-600', equipmentClass: 'Drill Rig', serialNumber: '1FDXF60T8NDA31177', licensePlate: '48213K7', runTimeMinutes: 565 },
    ],
  },
  {
    id: 'weap',
    name: 'WEAP Trainings',
    icon: 'graduation-cap',
    markColor: 'var(--bcn-mark-moss)',
    description:
      'Worker Environmental Awareness Program (WEAP) training confirmations — each record verifies a field worker completed environmental awareness training before starting on-site work.',
    sourceForm: 'DCP WEAP Training Roster',
    sourceSystem: 'Fulcrum',
    table: 'dcp_monitoring.weap_trainings',
    status: 'active',
    recordCount: 142,
    lastSync: '2026-06-17 06:10',
    firstRecord: '2026-03-30',
    syncCadence: 'Daily · 06:00',
    fields: [
      { name: 'trainingDate', label: 'Training date', type: 'date' },
      { name: 'worker', label: 'Worker', type: 'text' },
      { name: 'company', label: 'Company', type: 'text' },
      { name: 'trade', label: 'Trade / role', type: 'text' },
      { name: 'trainer', label: 'Trainer', type: 'text' },
    ],
    sampleRecords: [
      { trainingDate: '2026-06-16', worker: 'D. Aldana', company: 'Bayline Drilling', trade: 'Driller helper', trainer: 'Christy Pierce' },
      { trainingDate: '2026-06-16', worker: 'R. Soto', company: 'Bayline Drilling', trade: 'Driller helper', trainer: 'Christy Pierce' },
      { trainingDate: '2026-06-11', worker: 'K. Doyle', company: 'Bayline Drilling', trade: 'Rig operator', trainer: 'Alicia Manzo' },
      { trainingDate: '2026-06-09', worker: 'L. Pham', company: 'Valley Site Services', trade: 'Service driver', trainer: 'Alicia Manzo' },
      { trainingDate: '2026-06-05', worker: 'J. Barrera', company: 'Delta Fence Co.', trade: 'Fence installer', trainer: 'Morgan Henry' },
      { trainingDate: '2026-06-05', worker: 'A. Whitfield', company: 'Delta Fence Co.', trade: 'Fence installer', trainer: 'Morgan Henry' },
      { trainingDate: '2026-06-04', worker: 'S. Ortiz', company: 'Bayline Drilling', trade: 'Water truck operator', trainer: 'Christy Pierce' },
      { trainingDate: '2026-06-02', worker: 'T. Reyes', company: 'Bayline Drilling', trade: 'Support driver', trainer: 'Christy Pierce' },
    ],
  },
];

export const streamById = (id: string): MonitoringStream | undefined => STREAMS.find((s) => s.id === id);

// Lucide inner-SVG paths for glyphs the esa-icon registry doesn't ship (yet) —
// passed to EsaIcon / PageLayout via their `paths` fallback. `database` is the
// catalog page's own glyph; `map-pinned` is the portal dashboard's.
export const STREAM_ICON_PATHS: Record<string, string> = {
  binoculars:
    '<path d="M10 10h4"/><path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"/><path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"/><path d="M 22 16 L 2 16"/><path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"/><path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"/>',
  bird: '<path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/><path d="M7 18a6 6 0 0 0 3.84-10.61"/>',
  'clipboard-list': '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
  timer: '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
  'graduation-cap': '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  'map-pinned': '<path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/>',
  'layout-dashboard': '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  egg: '<path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"/>',
  'triangle-alert':
    '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  'clipboard-check':
    '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
};

// ─────────────────────────────────────────────────────────────────────────────
// Dashboard widgets — the composable grid. WordPress-dashboard × iOS-widget
// model on a 3-COLUMN grid: every widget owns a footprint of (1|2|3) columns ×
// (2|3|4|5) row units (grid-auto-rows is a FLOOR — minmax(unit, auto) — so a
// band grows to its tallest widget; see specimens/spec.md §2). DOM order is
// grid order: reordering in the composer is reordering `order`.
// ─────────────────────────────────────────────────────────────────────────────
export type WidgetWidth = 1 | 2 | 3;
export type WidgetHeight = 2 | 3 | 4 | 5;
/** Visualization primitives a widget can render. First entry = default. */
export type WidgetChart = 'donut' | 'bars' | 'trend' | 'list' | 'stat' | 'meter';
export type WidgetScope = '7d' | '14d' | '30d' | '90d';

// ── Widget color (spec §10.6) ────────────────────────────────────────────────
// The 8-key subset of the mark ramp a user may color a widget with.
export type MarkKey = 'orange' | 'amber' | 'moss' | 'emerald' | 'teal' | 'sky' | 'slate' | 'rust';

/**
 * Polymorphic by the widget's viz: mono re-points ONE `--_accent`; series
 * re-points `--_series-n` per real data series (labeled by the series that
 * exists in the data, never an invented palette name); status widgets carry NO
 * color choice at all — severity reads the status standard only.
 */
export type WidgetColor =
  | { mode: 'mono'; color: MarkKey }
  | { mode: 'series'; series: Record<string, MarkKey> };

export interface WidgetDef {
  id: string;
  streamId: string;
  title: string;
  width: WidgetWidth;
  height: WidgetHeight;
  /** Chart variants the composer may switch between (first = default). */
  charts: WidgetChart[];
  /** Rolling date windows the composer may switch between (first = default).
      Rolling on purpose: a "Q2" or "water year" option would assume a calendar
      frame the tenant has not declared. */
  scopes: WidgetScope[];
  /** Which color control the config dialog shows (spec §10.6): mono = one
      accent swatch row; series = one row per data series; status = none. */
  colorMode: 'mono' | 'series' | 'status';
  defaultOn: boolean;
}

// Registry order IS the default layout (spec.md §2: bands A–F).
export const WIDGETS: WidgetDef[] = [
  { id: 'obs-active', streamId: 'observations', title: 'Active Observations', width: 2, height: 5, charts: ['donut'], scopes: ['30d', '7d'], colorMode: 'series', defaultOn: true },
  { id: 'obs-nesting-birds', streamId: 'nesting-birds', title: 'Nesting Birds', width: 1, height: 3, charts: ['bars', 'trend'], scopes: ['30d', '7d'], colorMode: 'mono', defaultOn: true },
  { id: 'obs-concerns', streamId: 'compliance-concerns', title: 'Compliance Concerns', width: 1, height: 2, charts: ['trend'], scopes: ['30d', '90d'], colorMode: 'status', defaultOn: true },
  { id: 'dmr-recent', streamId: 'daily-monitoring-reports', title: 'Daily Monitoring Reports', width: 2, height: 3, charts: ['list', 'trend'], scopes: ['7d', '30d'], colorMode: 'mono', defaultOn: true },
  { id: 'obs-bio', streamId: 'biological-resources', title: 'Biological Resources', width: 1, height: 3, charts: ['bars'], scopes: ['30d', '7d'], colorMode: 'mono', defaultOn: true },
  // Status widget (spec §11.2): severity is encoded end to end, so no Color
  // control, and the list is the only rendering — prod's section IS the design.
  { id: 'commitment-compliance', streamId: 'observations', title: 'Commitment Compliance', width: 3, height: 3, charts: ['list'], scopes: ['30d', '90d'], colorMode: 'status', defaultOn: true },
  { id: 'mileage-total', streamId: 'mileage', title: 'Vehicle Mileage', width: 3, height: 3, charts: ['trend', 'bars', 'stat'], scopes: ['14d', '7d', '30d', '90d'], colorMode: 'mono', defaultOn: true },
  { id: 'runtime-total', streamId: 'runtime', title: 'Equipment Runtime', width: 2, height: 3, charts: ['trend', 'bars'], scopes: ['14d', '7d', '30d'], colorMode: 'mono', defaultOn: true },
  { id: 'surveys-qc', streamId: 'surveys', title: 'Surveys', width: 1, height: 3, charts: ['meter'], scopes: ['30d', '90d'], colorMode: 'status', defaultOn: true },
  { id: 'weap-trained', streamId: 'weap', title: 'WEAP Trainings', width: 3, height: 3, charts: ['bars', 'stat'], scopes: ['30d', '90d'], colorMode: 'mono', defaultOn: true },
];

export const widgetById = (id: string): WidgetDef | undefined => WIDGETS.find((w) => w.id === id);

// ─────────────────────────────────────────────────────────────────────────────
// Widget rollups — stored aggregates of the FULL export for the streams whose
// sampleRecords above are a sample (same declaration as DASHBOARD in
// monitoring.ts). Deterministic; windows end at TODAY.
// ─────────────────────────────────────────────────────────────────────────────
export interface DayPoint { date: string; value: number }
export interface BarRow { name: string; value: number }

/** 14 ISO dates ending at TODAY, paired with the given values. */
const days14 = (values: number[]): DayPoint[] =>
  values.map((value, i) => {
    const d = new Date(Date.parse(TODAY) - (values.length - 1 - i) * 86_400_000);
    return { date: d.toISOString().slice(0, 10), value };
  });

export const MILEAGE_ROLLUP = {
  /** sum(totalMileage), past 14 days. */
  miles14d: 3284,
  trips14d: 96,
  perDay: days14([286, 331, 62, 0, 348, 302, 274, 336, 295, 88, 41, 318, 361, 242]),
  byVehicle: [
    { name: 'Subaru Crosstrek', value: 1046 },
    { name: 'Ford F-150', value: 742 },
    { name: 'Ford F-600', value: 588 },
    { name: 'Chevrolet Silverado 2500', value: 511 },
    { name: 'Ford Transit', value: 397 },
  ] as BarRow[],
};

export const RUNTIME_ROLLUP = {
  /** sum(runTimeMinutes)/60, past 14 days. */
  hours14d: 412,
  unitsLogged: 12,
  perDayMinutes: days14([2180, 2460, 520, 0, 2610, 2340, 2085, 2520, 2270, 700, 500, 2415, 2280, 1840]),
  byClassHours: [
    { name: 'Drill rig', value: 164 },
    { name: 'Support truck', value: 102 },
    { name: 'Water truck', value: 73 },
    { name: 'Generator', value: 46 },
    { name: 'Dewatering pump', value: 27 },
  ] as BarRow[],
};

export const WEAP_ROLLUP = {
  workersTrained: 418,
  confirmations30d: 26,
  byCompany: [
    { name: 'Bayline Drilling', value: 138 },
    { name: 'Teal Ridge Construction', value: 112 },
    { name: 'Delta Geotechnical', value: 84 },
    { name: 'Rincon Field Services', value: 51 },
    { name: 'ESA', value: 33 },
  ] as BarRow[],
};

// ─────────────────────────────────────────────────────────────────────────────
// Dashboard configuration — the ONE persisted record the composer's Save layout
// writes and the dashboard reads. Supersedes the v1 enabled-id list and the
// collapse key (collapse is dropped: resize is the answer to that need).
// ─────────────────────────────────────────────────────────────────────────────
export interface WidgetConfig {
  on: boolean;
  width: WidgetWidth;
  height: WidgetHeight;
  chart: WidgetChart;
  scope: WidgetScope;
  /** Admin-set title override; absent = the registry title. */
  title?: string;
  /** User color choice (spec §10.6); absent = the stream's stored colors. */
  color?: WidgetColor;
}

export interface DashboardConfig {
  /** Render order (widget ids). Ids missing from the list append in registry order. */
  order: string[];
  widgets: Record<string, WidgetConfig>;
}

export const defaultDashboardConfig = (): DashboardConfig => ({
  order: WIDGETS.map((w) => w.id),
  widgets: Object.fromEntries(
    WIDGETS.map((w) => [w.id, { on: w.defaultOn, width: w.width, height: w.height, chart: w.charts[0], scope: w.scopes[0] }]),
  ),
});

/** localStorage key for the composer's saved layout. */
export const DASHBOARD_CONFIG_KEY = 'bcn-mpdash-layout-v3';
