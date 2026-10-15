// Daily Monitoring Report — QA/QC review — fixture data.
//
// Fictional scenario: Fieldstone Environmental Monitoring holds the compliance-
// inspection contract on the Coyote Wash Substation, a 230 kV substation and
// tie-line built by High Desert Transmission Co. in the Lucerne Valley, CA, under
// a right-of-way grant from the (invented) Basin & Range Lands Office. A field
// inspector logs each day in Fulcrum; the internal QA/QC team reviews the log in
// Beacon, corrects it, and generates the PDF report that goes to the agency.
//
// Every name, place, coordinate, and sentence below is INVENTED demo data. The
// SHAPE follows the real Daily Monitoring Report (General Information table,
// per-location Compliance Monitoring Details, captioned photos, end time) and
// Beacon's DailyMonitoringReportDetailsDto — the content does not.
//
// Two kinds of editable field (see FieldKind):
//   'fulcrum' — monitoring data. A Beacon correction is held as PENDING until the
//               reviewer pushes the batch back to Fulcrum, then it is SYNCED.
//   'beacon'  — report wording (narrative). Edited in Beacon only, never pushed;
//               Fulcrum keeps the field inspector's original text.

export const TENANT_NAME = 'High Desert Transmission Co.';
export const PROJECT_NAME = 'Coyote Wash Substation';
export const AGENCY_NAME = 'Basin & Range Lands Office';
export const FIRM_NAME = 'Fieldstone Environmental Monitoring';

/** The signed-in QA/QC reviewer. */
export const CURRENT_USER = 'Priya Raman';

/** Fixture clock — new edits are stamped from this anchor so every demo run
 *  reads the same. The morning after the inspection day. */
export const FIXTURE_NOW = '2026-09-12T09:15:00';

export type FieldKind = 'fulcrum' | 'beacon';
export type FieldInput = 'text' | 'textarea' | 'select' | 'time' | 'number' | 'toggle';

export interface FieldDef {
  id: string;
  label: string;
  kind: FieldKind;
  /** 'record' = a field of a persistent record shared by several daily reports (a
   *  compliance concern). Editing it changes the record everywhere it appears. */
  scope?: 'report' | 'record';
  /** For scope 'record': the compliance concern id. */
  recordId?: string;
  input: FieldInput;
  /** The value as the field inspector submitted it from Fulcrum. */
  fulcrumValue: string;
  /** Display suffix for numbers ("°F", " mph", " in"). */
  unit?: string;
  options?: string[];
}

export const COMPLIANCE_LEVELS = [
  'Level 1 – In Compliance',
  'Level 2 – Minor Deviation',
  'Level 3 – Non-Compliance',
] as const;

export const WEATHER_CONDITIONS = ['Clear', 'Partly cloudy', 'Overcast', 'Windy', 'Light rain'];
export const WIND_DIRECTIONS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

export type ReportStatus = 'in-progress' | 'draft' | 'in-review' | 'report-generated';
export const REPORT_STATUS_LABEL: Record<ReportStatus, string> = {
  'in-progress': 'In Progress',
  draft: 'Draft',
  'in-review': 'Needs Review',
  'report-generated': 'Report Generated',
};

export type PhotoScene = 'cactus' | 'pad' | 'grading' | 'fence' | 'drainage' | 'poles' | 'nest' | 'burrow';

export interface ReportPhoto {
  id: string;
  scene: PhotoScene;
  /** "2026-09-11T09:14" */
  takenAt: string;
  alt: string;
}

export type ItemCategory = 'Compliance Concerns' | 'Nesting Birds' | 'Resource Observations' | 'Site Activities';
export const CATEGORY_ORDER: ItemCategory[] = [
  'Compliance Concerns',
  'Nesting Birds',
  'Resource Observations',
  'Site Activities',
];

export interface WorkAreaItem {
  /** Compliance Concerns only: the persistent concern record this visit logs against. */
  concernId?: string;
  id: string;
  category: ItemCategory;
  time: string; // "09:14"
  title: string;
  photoIds: string[];
}

export interface WorkArea {
  id: string;
  name: string;
  startTime: string; // "09:05"
  lat: number;
  lng: number;
  items: WorkAreaItem[];
  species: string[];
  photoIds: string[];
}

export const REPORT = {
  id: 'dmr-2026-09-11-whitcomb',
  title: 'Dana Whitcomb - Sep 11, 2026 Report',
  date: '2026-09-11',
  fieldPerson: 'Dana Whitcomb',
  role: 'Compliance Inspector',
  constructionPackage: '2026 Substation & 230 kV Tie-Line Construction',
  lat: 34.4519,
  lng: -116.9371,
  status: 'in-review' as ReportStatus,
};

export const WORK_AREAS: WorkArea[] = [
  {
    id: 'ts14',
    name: 'CW-TS14',
    startTime: '09:05',
    lat: 34.4541,
    lng: -116.9418,
    items: [
      { id: 'ts14-a1', category: 'Site Activities', time: '09:14', title: 'Cactus salvage tag removal', photoIds: ['p1', 'p2'] },
      { id: 'ts14-a2', category: 'Site Activities', time: '10:38', title: 'Clear and grub', photoIds: ['p3'] },
      { id: 'ts14-r1', category: 'Resource Observations', time: '10:52', title: 'Desert tortoise burrow (inactive)', photoIds: ['p4'] },
      { id: 'ts14-c1', category: 'Compliance Concerns', time: '10:44', title: 'Dust-2347-09112026', concernId: 'Dust-2347-09112026', photoIds: ['p10'] },
    ],
    species: ['Common raven', 'Side-blotched lizard', 'Black-tailed jackrabbit'],
    photoIds: [],
  },
  {
    id: 'ts22',
    name: 'CW-TS22',
    startTime: '11:20',
    lat: 34.4507,
    lng: -116.9352,
    items: [
      { id: 'ts22-c1', category: 'Compliance Concerns', time: '11:34', title: 'Erosion-2331-09092026', concernId: 'Erosion-2331-09092026', photoIds: ['p5', 'p6'] },
      { id: 'ts22-a1', category: 'Site Activities', time: '11:20', title: 'Pad grading', photoIds: [] },
    ],
    species: ['Say’s phoebe'],
    photoIds: ['p7'],
  },
  {
    id: 'ts31',
    name: 'CW-TS31',
    startTime: '13:04',
    lat: 34.4476,
    lng: -116.9297,
    items: [
      { id: 'ts31-a1', category: 'Site Activities', time: '13:04', title: 'Pole delivery', photoIds: ['p8'] },
      { id: 'ts31-n1', category: 'Nesting Birds', time: '13:40', title: 'Verdin nest (active)', photoIds: ['p9'] },
    ],
    species: ['Verdin', 'Common raven'],
    photoIds: [],
  },
];

export const PHOTOS: ReportPhoto[] = [
  { id: 'p1', scene: 'cactus', takenAt: '2026-09-11T09:16', alt: 'Salvage tags being removed from a barrel cactus on the CW-TS14 pad' },
  { id: 'p2', scene: 'cactus', takenAt: '2026-09-11T09:18', alt: 'Cleared cactus with tag removed, pad marked as salvaged' },
  { id: 'p3', scene: 'grading', takenAt: '2026-09-11T10:41', alt: 'Skid steer clearing vegetation on the CW-TS14 pad' },
  { id: 'p4', scene: 'burrow', takenAt: '2026-09-11T10:53', alt: 'Inactive burrow at the north edge of the CW-TS14 work area' },
  { id: 'p10', scene: 'grading', takenAt: '2026-09-11T10:45', alt: 'Dust rising behind the skid steer while clearing the CW-TS14 pad' },
  { id: 'p5', scene: 'fence', takenAt: '2026-09-11T11:35', alt: 'Section of silt fence down where the access road crosses the wash' },
  { id: 'p6', scene: 'drainage', takenAt: '2026-09-11T11:37', alt: 'Drainage crossing downslope of the CW-TS22 pad' },
  { id: 'p7', scene: 'pad', takenAt: '2026-09-11T12:02', alt: 'Graded CW-TS22 pad, looking east' },
  { id: 'p8', scene: 'poles', takenAt: '2026-09-11T13:06', alt: 'Steel poles staged on cribbing at CW-TS31' },
  { id: 'p9', scene: 'nest', takenAt: '2026-09-11T13:42', alt: 'Staked 50-foot buffer around an active verdin nest in a creosote bush' },
];

// ── Compliance concerns (persistent records) ───────────────────────────────
// Mirrors Beacon prod's Observation: a concern is ONE record (title like
// "Erosion-2331-09092026" = type-number-first-observed date) that outlives any single
// visit. Each daily report that visits it adds a daily log entry. This report's entry
// is the work-area item's `item:<id>:summary` field; entries from other reports are
// read-only here.

export const CONCERN_STATUSES = ['Open', 'In Progress', 'Resolved'] as const;
export type ConcernStatus = (typeof CONCERN_STATUSES)[number];

/** Other daily reports on this project that log against a concern on this page. */
export interface OtherReport {
  id: string;
  date: string;
  fieldPerson: string;
  status: ReportStatus;
}

export const OTHER_REPORTS: OtherReport[] = [
  { id: 'dmr-2026-09-09-oyelaran', date: '2026-09-09', fieldPerson: 'Marcus Oyelaran', status: 'report-generated' },
  { id: 'dmr-2026-09-10-whitcomb', date: '2026-09-10', fieldPerson: 'Dana Whitcomb', status: 'report-generated' },
  { id: 'dmr-2026-09-12-oyelaran', date: '2026-09-12', fieldPerson: 'Marcus Oyelaran', status: 'draft' },
];

export interface ConcernLogEntry {
  /** The daily report this entry belongs to (REPORT.id for this page's own entry). */
  reportId: string;
  at: string; // ISO
  fieldPerson: string;
  /** Other reports' entries carry their text here; this report's entry reads its field. */
  notes?: string;
  photoIds: string[];
}

export interface ComplianceConcern {
  id: string;
  type: string;
  reporter: string;
  firstObserved: string; // ISO
  workSite: string;
  lat: number;
  lng: number;
  status: ConcernStatus;
  description: string;
  /** Every visit, oldest first — including this report's (notes come from its item field). */
  logs: ConcernLogEntry[];
}

export const COMPLIANCE_CONCERNS: ComplianceConcern[] = [
  {
    id: 'Erosion-2331-09092026',
    type: 'Erosion & Sediment Control',
    reporter: 'Marcus Oyelaran',
    firstObserved: '2026-09-09T14:20:00',
    workSite: 'CW-TS22',
    lat: 34.4503,
    lng: -116.9349,
    status: 'Open',
    description:
      'Silt fence undercut and down where the CW-TS22 access road crosses the wash. Risk of sediment reaching the drainage if it rains before repair.',
    logs: [
      {
        reportId: 'dmr-2026-09-09-oyelaran',
        at: '2026-09-09T14:20:00',
        fieldPerson: 'Marcus Oyelaran',
        notes: 'About 40 ft of silt fence undercut by overnight runoff at the wash crossing. Mesa Civil foreman notified.',
        photoIds: [],
      },
      {
        reportId: 'dmr-2026-09-10-whitcomb',
        at: '2026-09-10T10:05:00',
        fieldPerson: 'Dana Whitcomb',
        notes: 'Fence still down. Repair scheduled for tomorrow morning. No sediment past the fence line.',
        photoIds: [],
      },
      { reportId: 'dmr-2026-09-11-whitcomb', at: '2026-09-11T11:34:00', fieldPerson: 'Dana Whitcomb', photoIds: ['p5', 'p6'] },
      {
        reportId: 'dmr-2026-09-12-oyelaran',
        at: '2026-09-12T08:40:00',
        fieldPerson: 'Marcus Oyelaran',
        notes: 'Fence reinstalled and keyed in along the full run. Recommend resolving.',
        photoIds: [],
      },
    ],
  },
  {
    id: 'Dust-2347-09112026',
    type: 'Air Quality / Dust Control',
    reporter: 'Dana Whitcomb',
    firstObserved: '2026-09-11T10:44:00',
    workSite: 'CW-TS14',
    lat: 34.4544,
    lng: -116.9421,
    status: 'Resolved',
    description: 'Fugitive dust leaving the CW-TS14 pad during clear and grub before the water truck was on site.',
    logs: [{ reportId: 'dmr-2026-09-11-whitcomb', at: '2026-09-11T10:44:00', fieldPerson: 'Dana Whitcomb', photoIds: ['p10'] }],
  },
];

// ── Editable fields ────────────────────────────────────────────────────────
// fulcrumValue is what arrived from Fulcrum on submit. Seed edits (below) move
// some of them; the store derives each field's current value.

export const FIELDS: FieldDef[] = [
  // General Information — monitoring data, syncs to Fulcrum
  { id: 'timeIn', label: 'Time In', kind: 'fulcrum', input: 'time', fulcrumValue: '07:30' },
  { id: 'timeOut', label: 'End Time', kind: 'fulcrum', input: 'time', fulcrumValue: '16:30' },
  { id: 'conditions', label: 'Conditions', kind: 'fulcrum', input: 'select', fulcrumValue: 'Clear', options: WEATHER_CONDITIONS },
  { id: 'airTempCurrent', label: 'Air Temperature', kind: 'fulcrum', input: 'number', fulcrumValue: '74', unit: '°F' },
  { id: 'airTempHigh', label: 'High Temperature', kind: 'fulcrum', input: 'number', fulcrumValue: '98', unit: '°F' },
  { id: 'airTempLow', label: 'Low Temperature', kind: 'fulcrum', input: 'number', fulcrumValue: '61', unit: '°F' },
  { id: 'windSpeed', label: 'Wind Speed', kind: 'fulcrum', input: 'number', fulcrumValue: '60', unit: ' mph' },
  { id: 'windDirection', label: 'Wind Direction', kind: 'fulcrum', input: 'select', fulcrumValue: 'SW', options: WIND_DIRECTIONS },
  { id: 'precipitation', label: 'Precipitation', kind: 'fulcrum', input: 'number', fulcrumValue: '0', unit: ' inches' },
  {
    id: 'contractors',
    label: 'Contractors',
    kind: 'fulcrum',
    input: 'text',
    fulcrumValue: 'Ridgeline Electric; Mesa Civil Constructors; Arroyo Pole Delivery',
  },
  // General Information — report wording, Beacon only
  {
    id: 'tailboards',
    label: 'Tailboards Attended',
    kind: 'beacon',
    input: 'textarea',
    fulcrumValue: 'ridgeline tailboard 0630 at laydown yard',
  },
  { id: 'variances', label: 'Variance Requests Reviewed', kind: 'beacon', input: 'textarea', fulcrumValue: 'None' },

  // Per work area — compliance level is data; notes are report wording
  { id: 'wa:ts14:level', label: 'Compliance Level', kind: 'fulcrum', input: 'select', fulcrumValue: COMPLIANCE_LEVELS[0], options: [...COMPLIANCE_LEVELS] },
  { id: 'wa:ts22:level', label: 'Compliance Level', kind: 'fulcrum', input: 'select', fulcrumValue: COMPLIANCE_LEVELS[0], options: [...COMPLIANCE_LEVELS] },
  { id: 'wa:ts31:level', label: 'Compliance Level', kind: 'fulcrum', input: 'select', fulcrumValue: COMPLIANCE_LEVELS[0], options: [...COMPLIANCE_LEVELS] },
  {
    id: 'wa:ts14:notes',
    label: 'Notes',
    kind: 'beacon',
    input: 'textarea',
    fulcrumValue: 'Biological monitor on site for all ground disturbance. No wildlife in work area during clearing.',
  },
  {
    id: 'wa:ts22:notes',
    label: 'Notes',
    kind: 'beacon',
    input: 'textarea',
    fulcrumValue: 'Told Mesa Civil foreman about the silt fence. They said they would fix it today.',
  },
  {
    id: 'wa:ts31:notes',
    label: 'Notes',
    kind: 'beacon',
    input: 'textarea',
    fulcrumValue: 'nest found in creosote nw corner of pad. buffer staked 50ft. no work in buffer',
  },

  // Per item — the write-up under each activity / observation is report wording
  {
    id: 'item:ts14-a1:summary',
    label: 'Description',
    kind: 'beacon',
    input: 'textarea',
    fulcrumValue: 'removing tags from non salvaged cactus.. crew pulling metal tags off plants at TS14, pad marked salvaged',
  },
  {
    id: 'item:ts14-a2:summary',
    label: 'Description',
    kind: 'beacon',
    input: 'textarea',
    fulcrumValue:
      'Mesa Civil crew clearing and grubbing the TS14 pad with a skid steer. Vegetation piled at the pad edge. Biological monitor present.',
  },
  {
    id: 'item:ts14-r1:summary',
    label: 'Description',
    kind: 'beacon',
    input: 'textarea',
    fulcrumValue:
      'Inactive burrow found 30 ft north of the pad edge, outside the work limits. Scoped by the biological monitor — no sign of use. Flagged for avoidance.',
  },
  {
    id: 'item:ts14-c1:summary',
    label: 'Log entry',
    kind: 'beacon',
    input: 'textarea',
    fulcrumValue:
      'Visible dust leaving the TS14 pad while the skid steer cleared vegetation; wind picked up around 10:30. Asked the operator to stop until the water truck arrived. Truck on site at 10:58, dust controlled and work resumed.',
  },
  {
    id: 'item:ts22-c1:summary',
    label: 'Log entry',
    kind: 'beacon',
    input: 'textarea',
    fulcrumValue:
      'Mesa Civil re-staked part of the fence this morning but about 15 ft is still down at the wash crossing. No sediment past the fence line yet. Foreman says it will be finished today.',
  },
  {
    id: 'item:ts22-a1:summary',
    label: 'Description',
    kind: 'beacon',
    input: 'textarea',
    fulcrumValue: 'Mesa Civil grading the TS22 pad to finish elevation. Water truck running for dust control.',
  },
  {
    id: 'item:ts31-a1:summary',
    label: 'Description',
    kind: 'beacon',
    input: 'textarea',
    fulcrumValue: 'Arroyo Pole Delivery crew delivering steel poles to TS31 and staging them on cribbing inside the work limits.',
  },
  {
    id: 'item:ts31-n1:summary',
    label: 'Description',
    kind: 'beacon',
    input: 'textarea',
    fulcrumValue: 'Active verdin nest with two nestlings in a creosote bush at the NW corner of the pad. 50 ft buffer staked and flagged.',
  },

  // Compliance concern RECORDS — shared by every daily report that logs against them.
  // Status and description are Fulcrum data on the record, so they batch-sync like any
  // other correction; but an edit here changes the concern in every report listed in
  // its `reports`, which the UI has to say before it happens.
  ...COMPLIANCE_CONCERNS.flatMap<FieldDef>((c) => [
    {
      id: `concern:${c.id}:status`,
      label: 'Status',
      kind: 'fulcrum',
      scope: 'record',
      recordId: c.id,
      input: 'select',
      fulcrumValue: c.status,
      options: [...CONCERN_STATUSES],
    },
    {
      id: `concern:${c.id}:description`,
      label: 'Description',
      kind: 'fulcrum',
      scope: 'record',
      recordId: c.id,
      input: 'textarea',
      fulcrumValue: c.description,
    },
  ]),

  // Per photo — whether it goes in the regulator report (Beacon only)
  ...PHOTOS.map<FieldDef>((p) => ({
    id: `photo:${p.id}:include`,
    label: 'Include in report',
    kind: 'beacon',
    input: 'toggle',
    fulcrumValue: 'yes',
  })),
];

// ── Seed history ───────────────────────────────────────────────────────────
// What already happened before the reviewer opened the page, oldest first.

export type SyncState = 'pending' | 'synced';

export interface SeedEdit {
  fieldId: string;
  to: string;
  by: string;
  at: string; // ISO
  /** Only for 'fulcrum' fields. */
  sync?: SyncState;
}

export const SEED_EDITS: SeedEdit[] = [
  { fieldId: 'timeIn', to: '07:00', by: 'Priya Raman', at: '2026-09-12T08:05:00', sync: 'synced' },
  {
    fieldId: 'item:ts14-a1:summary',
    to: 'Fieldstone observed the Ridgeline Electric crew removing salvage tags from cacti that were not selected for salvage at CW-TS14, marking the pad as salvage-complete. No live plants were disturbed.',
    by: 'Jordan Ellis',
    at: '2026-09-12T08:31:00',
  },
  {
    fieldId: 'wa:ts31:notes',
    to: 'An active verdin nest was found in a creosote bush at the northwest corner of the CW-TS31 pad. A 50-foot no-work buffer was staked and flagged, and no work took place inside it.',
    by: 'Jordan Ellis',
    at: '2026-09-12T08:36:00',
  },
  { fieldId: 'wa:ts22:level', to: COMPLIANCE_LEVELS[1], by: 'Priya Raman', at: '2026-09-12T08:52:00', sync: 'pending' },
  { fieldId: 'windSpeed', to: '6', by: 'Priya Raman', at: '2026-09-12T08:54:00', sync: 'pending' },
];

/** Non-edit activity for the change log, oldest first. */
export interface SeedEvent {
  text: string;
  by: string;
  at: string;
}

export const SEED_EVENTS: SeedEvent[] = [
  { text: 'Submitted from Fulcrum', by: 'Dana Whitcomb', at: '2026-09-11T16:42:00' },
  { text: 'Status changed to Needs Review', by: 'Priya Raman', at: '2026-09-12T08:02:00' },
  { text: 'Pushed 1 change to Fulcrum', by: 'Priya Raman', at: '2026-09-12T08:10:00' },
];
