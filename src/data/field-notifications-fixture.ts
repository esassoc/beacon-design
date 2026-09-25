// ─────────────────────────────────────────────────────────────────────────────
// Field notifications & daily logs fixture — Delta Conveyance 2026 geotechnical
// campaign.
//
// Source: George Valenzuela (DCA), "Mock Compliance Dashboard Design.xlsx",
// received 2026-09-25. The 66 exploration locations, their county / agreement
// batch / property / activity / depth / rig / field notes / drill dates, and the
// notification due dates are HIS rows verbatim (his WORKDAY formula already
// applied: N calendar days before drilling, rolled back to a working day, his
// holiday list excluded).
//
// What is MOCK: every ReceivedRecord. They are generated deterministically
// (string-seeded, never Math.random) so the page renders identically on every
// build, with the gaps concentrated in plausible patterns:
//   - one missed DWR 3-week look-ahead (every hole drilling the week of Sep 7)
//   - USA tickets not uploaded for three Franklin County hand-auger holes
//   - rig 8's field coordinator logs lagging through September
//   - a thin random scatter of missing and late documents everywhere else
//
// Status is NEVER stored. deriveStatus(expected, record, today) is pure: a
// record received on or before its due date is Received, after it Received
// late; no record and the due date passed is Missing; otherwise Upcoming.
//
// Interpretations of George's rules (flag these back to him):
//   - Tribal notification is ONE campaign-wide notice (2026-05-02), so every hole
//     points at the same record.
//   - USA ticket is due by the 72-hr site clearance date; the 14-day date opens
//     its window. Uploaded any time inside the window counts as on time.
//   - A daily log is due on its drill day. Uploaded the next working day or later
//     counts as late. Drill days are working days between drill start and finish.
//   - Unscheduled holes (TBD, Bio Stop) carry no expectations yet.
// ─────────────────────────────────────────────────────────────────────────────

/** The fixture clock. Everything "past due" is relative to this date. */
export const FIXTURE_TODAY = '2026-09-25';

// ── Types ────────────────────────────────────────────────────────────────────

/** Every document a drill hole is expected to produce. */
export type DocKind =
  | 'tribal'
  | 'landowner14'
  | 'landowner10'
  | 'landowner72'
  | 'publicNotice'
  | 'siteClearance14'
  | 'usaTicket'
  | 'siteClearance72'
  | 'bioLog'
  | 'coordinatorLog'
  | 'geologistLog';

/** The three column groups of the matrix. */
export type DocGroup = 'notifications' | 'clearance' | 'daily';

/** Where a record is uploaded. */
export type SourceSystem = 'survey123-notifications' | 'survey123-daily' | 'fulcrum';

/** Once per hole, or once per drill day. */
export type DocCadence = 'per-hole' | 'per-drill-day';

export interface DocTypeDef {
  kind: DocKind;
  /** Full name, used in the checklist. */
  label: string;
  /** Matrix column header (non-breaking hyphens keep "14-day" on one line). */
  column: string;
  group: DocGroup;
  source: SourceSystem;
  cadence: DocCadence;
}

export type ScheduleReason = 'TBD' | 'Bio Stop';

export type DrillSchedule =
  | { kind: 'scheduled'; start: string; finish: string }
  | { kind: 'unscheduled'; reason: ScheduleReason };

/** George's computed due dates, per hole (tribal is campaign-wide, below). */
export interface NotificationDueDates {
  landowner14: string;
  landowner10: string;
  landowner72: string;
  publicNotice: string;
  siteClearance14: string;
  siteClearance72: string;
}

/** One exploration location (drill hole, CPT or hand auger) — a row of George's sheet. */
export interface ExplorationLocation {
  id: string;
  county: string;
  agreement: string;
  property: string;
  accessWindow: string;
  activity: string;
  depthFt: number;
  rig: string;
  rigDays: number;
  notes?: string;
  schedule: DrillSchedule;
  due?: NotificationDueDates;
}

/** A document the model expects — generated, never stored. */
export interface ExpectedDocument {
  holeId: string;
  kind: DocKind;
  /** The date it must be in by. */
  due: string;
  /** USA ticket only: the first day it may be pulled. */
  windowStart?: string;
  /** Daily logs only: the drill day it covers. */
  drillDay?: string;
}

/** An uploaded record — the (mock) stored data. */
export interface ReceivedRecord {
  holeId: string;
  kind: DocKind;
  drillDay?: string;
  receivedOn: string;
  source: SourceSystem;
  fileName: string;
}

export type DocStatus = 'received' | 'late' | 'missing' | 'upcoming';

/** A hole's worst open state — drives the row filter and the drawer chip. */
export type HoleStatus = 'missing' | 'late' | 'upcoming' | 'complete' | 'unscheduled';

export interface ChecklistItem {
  expected: ExpectedDocument;
  status: DocStatus;
  record?: ReceivedRecord;
}

/** One matrix cell: a per-hole doc is one item, a daily log is n drill days. */
export interface CellSummary {
  kind: DocKind;
  expected: number;
  received: number;
  late: number;
  missing: number;
  upcoming: number;
  /** Worst state in the cell; undefined when nothing is expected. */
  status?: DocStatus;
}

export interface HoleSummary {
  location: ExplorationLocation;
  status: HoleStatus;
  cells: Record<DocKind, CellSummary>;
  checklist: ChecklistItem[];
  missing: number;
  late: number;
  upcoming: number;
  drillDays: string[];
}

export interface CampaignReadiness {
  scheduledHoles: number;
  holesWithMissing: number;
  missingDocuments: number;
  lateDocuments: number;
  dueSoon: number;
  /** The last day of the "due soon" window (5 working days out). */
  dueSoonThrough: string;
}

// ── Reference data ───────────────────────────────────────────────────────────

export const SOURCE_LABEL: Record<SourceSystem, string> = {
  'survey123-notifications': 'Survey123 Notification Log',
  'survey123-daily': 'Survey123 Daily Logs',
  fulcrum: 'Fulcrum',
};

export const DOC_GROUP_LABEL: Record<DocGroup, string> = {
  notifications: 'Notifications',
  clearance: 'Site clearance + USA',
  daily: 'Daily logs',
};

/** Matrix column order. */
export const DOC_TYPES: DocTypeDef[] = [
  { kind: 'tribal', label: 'Tribal notification', column: 'Tribal', group: 'notifications', source: 'survey123-notifications', cadence: 'per-hole' },
  { kind: 'landowner14', label: 'Landowner notification, 14-day', column: 'Landowner 14‑day', group: 'notifications', source: 'survey123-notifications', cadence: 'per-hole' },
  { kind: 'landowner10', label: 'Landowner notification, 10-day', column: 'Landowner 10‑day', group: 'notifications', source: 'survey123-notifications', cadence: 'per-hole' },
  { kind: 'landowner72', label: 'Landowner notification, 72-hr', column: 'Landowner 72‑hr', group: 'notifications', source: 'survey123-notifications', cadence: 'per-hole' },
  { kind: 'publicNotice', label: 'Public notification (3-week look-ahead)', column: 'Public 3‑week', group: 'notifications', source: 'survey123-notifications', cadence: 'per-hole' },
  { kind: 'siteClearance14', label: 'Site clearance, 14-day', column: 'Site clearance 14‑day', group: 'clearance', source: 'survey123-notifications', cadence: 'per-hole' },
  { kind: 'usaTicket', label: 'USA ticket', column: 'USA ticket', group: 'clearance', source: 'survey123-notifications', cadence: 'per-hole' },
  { kind: 'siteClearance72', label: 'Site clearance, 72-hr', column: 'Site clearance 72‑hr', group: 'clearance', source: 'fulcrum', cadence: 'per-hole' },
  { kind: 'bioLog', label: 'Daily biological monitoring log', column: 'Biological', group: 'daily', source: 'fulcrum', cadence: 'per-drill-day' },
  { kind: 'coordinatorLog', label: 'Daily field coordinator log', column: 'Field coordinator', group: 'daily', source: 'survey123-daily', cadence: 'per-drill-day' },
  { kind: 'geologistLog', label: 'Daily geologist log', column: 'Geologist', group: 'daily', source: 'survey123-daily', cadence: 'per-drill-day' },
];

export const DOC_TYPE: Record<DocKind, DocTypeDef> = Object.fromEntries(DOC_TYPES.map((d) => [d.kind, d])) as Record<DocKind, DocTypeDef>;

/**
 * Status palette — the Beacon status standard (theme-beacon.css): success teal-green,
 * attention amber, overdue red (red-11), not-started gray. Hexes are the SSR fallbacks
 * BcnStatusChip needs; CSS reads the matching --bcn-status-* tokens.
 */
export const DOC_STATUS_META: Record<DocStatus, { label: string; hex: string; token: string }> = {
  received: { label: 'Received', hex: '#2e7571', token: '--bcn-status-completed' },
  late: { label: 'Received late', hex: '#f59e0b', token: '--bcn-status-in-progress' },
  missing: { label: 'Missing', hex: '#ce2c31', token: '--bcn-status-overdue' },
  upcoming: { label: 'Upcoming', hex: '#bdbdbd', token: '--bcn-status-not-started' },
};

export const HOLE_STATUS_META: Record<HoleStatus, { label: string; hex: string }> = {
  missing: { label: 'Missing documents', hex: '#ce2c31' },
  late: { label: 'Received late', hex: '#f59e0b' },
  upcoming: { label: 'Upcoming', hex: '#bdbdbd' },
  complete: { label: 'Complete', hex: '#2e7571' },
  unscheduled: { label: 'Not scheduled', hex: '#8a8a8a' },
};

export const HOLE_STATUS_ORDER: HoleStatus[] = ['missing', 'late', 'upcoming', 'complete', 'unscheduled'];

/** One notice covers the whole campaign. */
export const TRIBAL_NOTICE_DUE = '2026-05-02';

/** George's holiday list — excluded from every working-day count. */
export const HOLIDAYS: readonly string[] = ["2026-05-25", "2026-07-03", "2026-09-07", "2026-11-25", "2026-11-26", "2026-11-27", "2026-11-28", "2026-11-29", "2026-12-23", "2026-12-24", "2026-12-25", "2026-12-26", "2026-12-27", "2026-12-28", "2026-12-29", "2026-12-30", "2026-12-31", "2027-01-01", "2027-05-31", "2027-07-04", "2027-09-06", "2027-11-24", "2027-11-25", "2027-11-26", "2027-11-27", "2027-11-28", "2027-12-23", "2027-12-24", "2027-12-25", "2027-12-26", "2027-12-27", "2027-12-28", "2027-12-29", "2027-12-30", "2027-12-31", "2028-01-01"];

export const LOCATIONS: ExplorationLocation[] = [
  { id: "DCRDS-DH-292", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "WTR-8202-F", accessWindow: "4/1 - 11/30/2026", activity: "LR Access -Design 30%", depthFt: 15, rig: "5", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-06-17", finish: "2026-06-17" }, due: { landowner14: "2026-05-20", landowner10: "2026-05-22", landowner72: "2026-05-29", publicNotice: "2026-05-27", siteClearance14: "2026-06-03", siteClearance72: "2026-06-12" } },
  { id: "DCRDS-DH-317", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "WTR-8202-F", accessWindow: "4/1 - 11/30/2026", activity: "RDMT-Road Overlays-Design 30%", depthFt: 15, rig: "5", rigDays: 0.5, notes: "Permit Paid - site clearance 9/23 - then drill", schedule: { kind: 'scheduled', start: "2026-09-28", finish: "2026-09-28" }, due: { landowner14: "2026-08-31", landowner10: "2026-09-04", landowner72: "2026-09-11", publicNotice: "2026-09-04", siteClearance14: "2026-09-14", siteClearance72: "2026-09-25" } },
  { id: "DCRAI-DH-010", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "WTR-8202-F", accessWindow: "4/1 - 11/30/2026", activity: "Rail", depthFt: 15, rig: "5", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-09-18", finish: "2026-09-18" }, due: { landowner14: "2026-08-21", landowner10: "2026-08-25", landowner72: "2026-09-01", publicNotice: "2026-08-28", siteClearance14: "2026-09-04", siteClearance72: "2026-09-15" } },
  { id: "DCRAI-DH-011", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "WTR-8202-F", accessWindow: "4/1 - 11/30/2026", activity: "Rail", depthFt: 15, rig: "5", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-09-17", finish: "2026-09-17" }, due: { landowner14: "2026-08-20", landowner10: "2026-08-24", landowner72: "2026-08-31", publicNotice: "2026-08-27", siteClearance14: "2026-09-03", siteClearance72: "2026-09-14" } },
  { id: "DCRAI-DH-013", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "WTR-8202-F", accessWindow: "4/1 - 11/30/2026", activity: "Rail", depthFt: 15, rig: "5", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-09-17", finish: "2026-09-17" }, due: { landowner14: "2026-08-20", landowner10: "2026-08-24", landowner72: "2026-08-31", publicNotice: "2026-08-27", siteClearance14: "2026-09-03", siteClearance72: "2026-09-14" } },
  { id: "DCRDS-DH-294", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "WTR-8202-F", accessWindow: "4/1 - 11/30/2026", activity: "LR Access -Design 30%", depthFt: 15, rig: "HA", rigDays: 0.5, notes: "Owner Flood Field - Possible Hand Auger", schedule: { kind: 'scheduled', start: "2026-09-28", finish: "2026-09-29" }, due: { landowner14: "2026-08-31", landowner10: "2026-09-04", landowner72: "2026-09-11", publicNotice: "2026-09-04", siteClearance14: "2026-09-14", siteClearance72: "2026-09-25" } },
  { id: "DCRAI-DH-014", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "WTR-8202-F", accessWindow: "4/1 - 11/30/2026", activity: "Rail", depthFt: 15, rig: "5", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-06-17", finish: "2026-06-17" }, due: { landowner14: "2026-05-20", landowner10: "2026-05-22", landowner72: "2026-05-29", publicNotice: "2026-05-27", siteClearance14: "2026-06-03", siteClearance72: "2026-06-12" } },
  { id: "DCRAI-DH-006", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "WTR-8202-F", accessWindow: "4/1 - 11/30/2026", activity: "Rail", depthFt: 15, rig: "5", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-06-18", finish: "2026-06-18" }, due: { landowner14: "2026-05-21", landowner10: "2026-05-22", landowner72: "2026-06-01", publicNotice: "2026-05-28", siteClearance14: "2026-06-04", siteClearance72: "2026-06-15" } },
  { id: "DCRAI-DH-008", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "WTR-8202-F", accessWindow: "4/1 - 11/30/2026", activity: "Rail", depthFt: 15, rig: "HA", rigDays: 0.5, notes: "Owner Flood Field - Possible Hand Auger", schedule: { kind: 'scheduled', start: "2026-09-28", finish: "2026-09-29" }, due: { landowner14: "2026-08-31", landowner10: "2026-09-04", landowner72: "2026-09-11", publicNotice: "2026-09-04", siteClearance14: "2026-09-14", siteClearance72: "2026-09-25" } },
  { id: "DCRAI-DH-009", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "WTR-8202-F", accessWindow: "4/1 - 11/30/2026", activity: "Rail", depthFt: 15, rig: "HA", rigDays: 0.5, notes: "Owner Flood Field - Possible Hand Auger", schedule: { kind: 'scheduled', start: "2026-09-28", finish: "2026-09-29" }, due: { landowner14: "2026-08-31", landowner10: "2026-09-04", landowner72: "2026-09-11", publicNotice: "2026-09-04", siteClearance14: "2026-09-14", siteClearance72: "2026-09-25" } },
  { id: "DCRAI-DH-012", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "WTR-8202-F", accessWindow: "4/1 - 11/30/2026", activity: "Rail", depthFt: 15, rig: "5", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-09-18", finish: "2026-09-18" }, due: { landowner14: "2026-08-21", landowner10: "2026-08-25", landowner72: "2026-09-01", publicNotice: "2026-08-28", siteClearance14: "2026-09-04", siteClearance72: "2026-09-15" } },
  { id: "DCPWR-DH-001", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "WTR-8202-F", accessWindow: "4/1 - 11/30/2026", activity: "Power (PG&E) LR-Design 100%", depthFt: 75, rig: "4", rigDays: 2.5, notes: "Field Flood - GGS Zone (Oct 1)- Harvest", schedule: { kind: 'unscheduled', reason: "TBD" } },
  { id: "DCTR2-DH-100", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "STATE-7220-M", accessWindow: "4/1 - 11/30/2026", activity: "TR 2-Design 30%", depthFt: 250, rig: "5", rigDays: 11, notes: "Bio Stop - emailed no work this season SC", schedule: { kind: 'unscheduled', reason: "Bio Stop" } },
  { id: "DCTR2-CPT-099", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "STATE-7220-M", accessWindow: "4/1 - 11/30/2026", activity: "TR 2-Design 30%", depthFt: 200, rig: "CPT", rigDays: 1, notes: "Bio Stop - emailed no work this season SC", schedule: { kind: 'unscheduled', reason: "Bio Stop" } },
  { id: "DCTR2-CPT-102", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "STATE-7220-M", accessWindow: "4/1 - 11/30/2026", activity: "TR 2-Design 30%", depthFt: 250, rig: "CPT", rigDays: 1, schedule: { kind: 'scheduled', start: "2026-09-28", finish: "2026-09-29" }, due: { landowner14: "2026-08-31", landowner10: "2026-09-04", landowner72: "2026-09-11", publicNotice: "2026-09-04", siteClearance14: "2026-09-14", siteClearance72: "2026-09-25" } },
  { id: "DCRDS-DH-246", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "SJC-0481", accessWindow: "8/28 - 11/30/2026", activity: "LR Access -Design 30%", depthFt: 150, rig: "7", rigDays: 5.5, schedule: { kind: 'scheduled', start: "2026-09-04", finish: "2026-09-09" }, due: { landowner14: "2026-08-07", landowner10: "2026-08-11", landowner72: "2026-08-18", publicNotice: "2026-08-14", siteClearance14: "2026-08-21", siteClearance72: "2026-09-01" } },
  { id: "DCRDS-DH-248", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "SJC-0481", accessWindow: "8/28 - 11/30/2026", activity: "LR Access -Design 30%", depthFt: 15, rig: "5", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-08-28", finish: "2026-08-28" }, due: { landowner14: "2026-07-31", landowner10: "2026-08-04", landowner72: "2026-08-11", publicNotice: "2026-08-07", siteClearance14: "2026-08-14", siteClearance72: "2026-08-25" } },
  { id: "DCRDS-DH-253", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "SJC-0481", accessWindow: "8/28 - 11/30/2026", activity: "LR Access -Design 30%", depthFt: 15, rig: "5", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-08-28", finish: "2026-08-28" }, due: { landowner14: "2026-07-31", landowner10: "2026-08-04", landowner72: "2026-08-11", publicNotice: "2026-08-07", siteClearance14: "2026-08-14", siteClearance72: "2026-08-25" } },
  { id: "DCRDS-DH-255", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "SJC-0481", accessWindow: "8/28 - 11/30/2026", activity: "LR Access -Design 30%", depthFt: 15, rig: "5", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-08-28", finish: "2026-08-28" }, due: { landowner14: "2026-07-31", landowner10: "2026-08-04", landowner72: "2026-08-11", publicNotice: "2026-08-07", siteClearance14: "2026-08-14", siteClearance72: "2026-08-25" } },
  { id: "DCTR4-DH-004", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "SJC-0481", accessWindow: "8/28 - 11/30/2026", activity: "TR 4-Design 30%", depthFt: 250, rig: "8", rigDays: 11, schedule: { kind: 'scheduled', start: "2026-08-31", finish: "2026-09-15" }, due: { landowner14: "2026-08-03", landowner10: "2026-08-07", landowner72: "2026-08-14", publicNotice: "2026-08-10", siteClearance14: "2026-08-17", siteClearance72: "2026-08-28" } },
  { id: "DCTR4-DH-008", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "SJC-0481", accessWindow: "8/28 - 11/30/2026", activity: "TR 4-Design 30%", depthFt: 250, rig: "5", rigDays: 11, schedule: { kind: 'scheduled', start: "2026-08-31", finish: "2026-09-10" }, due: { landowner14: "2026-08-03", landowner10: "2026-08-07", landowner72: "2026-08-14", publicNotice: "2026-08-10", siteClearance14: "2026-08-17", siteClearance72: "2026-08-28" } },
  { id: "DCSHF-DH-103", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "SJC-0481", accessWindow: "8/28 - 11/30/2026", activity: "TR 4-Design 30%", depthFt: 250, rig: "8", rigDays: 11, notes: "After October 1 Harvest / Bio Zone Travel", schedule: { kind: 'unscheduled', reason: "TBD" } },
  { id: "DCSHF-DH-098", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "SJC-0481", accessWindow: "8/28 - 11/30/2026", activity: "TR 4-Design 30%", depthFt: 250, rig: "5", rigDays: 11, notes: "After October 1 Harvest / Bio Zone Travel", schedule: { kind: 'unscheduled', reason: "TBD" } },
  { id: "DCSHF-DH-092", county: "San Joaquin", agreement: "Batch 4 (TEP)", property: "SJC-0481", accessWindow: "8/28 - 11/30/2026", activity: "TR 4-Design 30%", depthFt: 250, rig: "8", rigDays: 11, notes: "After October 1 Harvest / Bio Zone Travel", schedule: { kind: 'unscheduled', reason: "TBD" } },
  { id: "DCBPP-DH-039", county: "Alameda", agreement: "Batch 5 (TEP)", property: "PWR-8063", accessWindow: "4/1 - 11/30/2026", activity: "Beth. PP&SB-Design 30%", depthFt: 250, rig: "1", rigDays: 11, schedule: { kind: 'scheduled', start: "2026-06-01", finish: "2026-06-11" }, due: { landowner14: "2026-05-04", landowner10: "2026-05-08", landowner72: "2026-05-15", publicNotice: "2026-05-11", siteClearance14: "2026-05-18", siteClearance72: "2026-05-29" } },
  { id: "DCBPP-DH-036", county: "Alameda", agreement: "Batch 5 (TEP)", property: "PWR-8063", accessWindow: "4/1 - 11/30/2026", activity: "Beth. PP&SB-Design 30%", depthFt: 250, rig: "3", rigDays: 11, schedule: { kind: 'scheduled', start: "2026-06-01", finish: "2026-06-12" }, due: { landowner14: "2026-05-04", landowner10: "2026-05-08", landowner72: "2026-05-15", publicNotice: "2026-05-11", siteClearance14: "2026-05-18", siteClearance72: "2026-05-29" } },
  { id: "DCBPP-DH-034", county: "Alameda", agreement: "Batch 5 (TEP)", property: "PWR-8063", accessWindow: "4/1 - 11/30/2026", activity: "Beth. PP&SB-Design 30%", depthFt: 250, rig: "3", rigDays: 11, schedule: { kind: 'scheduled', start: "2026-06-16", finish: "2026-06-25" }, due: { landowner14: "2026-05-19", landowner10: "2026-05-22", landowner72: "2026-05-29", publicNotice: "2026-05-26", siteClearance14: "2026-06-02", siteClearance72: "2026-06-12" } },
  { id: "DCSHF-DH-144", county: "Alameda", agreement: "Batch 5 (TEP)", property: "PWR-8063", accessWindow: "4/1 - 11/30/2026", activity: "TR 4-Design 30%", depthFt: 200, rig: "4", rigDays: 9, schedule: { kind: 'scheduled', start: "2026-06-12", finish: "2026-06-30" }, due: { landowner14: "2026-05-15", landowner10: "2026-05-19", landowner72: "2026-05-26", publicNotice: "2026-05-22", siteClearance14: "2026-05-29", siteClearance72: "2026-06-09" } },
  { id: "DCBPP-DH-003", county: "Alameda", agreement: "Batch 5 (TEP)", property: "PWR-8063", accessWindow: "4/1 - 11/30/2026", activity: "Beth. PP&SB-Design 30%", depthFt: 250, rig: "3", rigDays: 11, schedule: { kind: 'scheduled', start: "2026-07-13", finish: "2026-07-22" }, due: { landowner14: "2026-06-15", landowner10: "2026-06-19", landowner72: "2026-06-26", publicNotice: "2026-06-22", siteClearance14: "2026-06-29", siteClearance72: "2026-07-10" } },
  { id: "DCBPP-DH-066", county: "Alameda", agreement: "Batch 5 (TEP)", property: "PWR-8064", accessWindow: "4/1 - 11/30/2026", activity: "Beth. PP&SB-Design 30%", depthFt: 250, rig: "6", rigDays: 11, schedule: { kind: 'scheduled', start: "2026-06-15", finish: "2026-06-25" }, due: { landowner14: "2026-05-18", landowner10: "2026-05-22", landowner72: "2026-05-29", publicNotice: "2026-05-22", siteClearance14: "2026-06-01", siteClearance72: "2026-06-12" } },
  { id: "DCBPP-DH-019", county: "Alameda", agreement: "Batch 5 (TEP)", property: "PWR-8063", accessWindow: "4/1 - 11/30/2026", activity: "Beth. PP&SB-Design 30%", depthFt: 250, rig: "7", rigDays: 11, schedule: { kind: 'scheduled', start: "2026-07-06", finish: "2026-07-15" }, due: { landowner14: "2026-06-08", landowner10: "2026-06-12", landowner72: "2026-06-19", publicNotice: "2026-06-15", siteClearance14: "2026-06-22", siteClearance72: "2026-07-02" } },
  { id: "DCBPP-CPT-035", county: "Alameda", agreement: "Batch 5 (TEP)", property: "PWR-8063", accessWindow: "4/1 - 11/30/2026", activity: "Beth. PP&SB-Design 30%", depthFt: 250, rig: "CPT", rigDays: 1, schedule: { kind: 'scheduled', start: "2026-07-23", finish: "2026-07-24" }, due: { landowner14: "2026-06-25", landowner10: "2026-06-29", landowner72: "2026-07-06", publicNotice: "2026-07-02", siteClearance14: "2026-07-09", siteClearance72: "2026-07-20" } },
  { id: "DCIN3-DH-016", county: "Sacramento", agreement: "Batch 5 (TEP)", property: "SAC-0058", accessWindow: "4/1 - 11/30/2026", activity: "Intake 3(B)-Design 30%", depthFt: 150, rig: "2", rigDays: 5.5, schedule: { kind: 'scheduled', start: "2026-07-21", finish: "2026-07-27" }, due: { landowner14: "2026-06-23", landowner10: "2026-06-26", landowner72: "2026-07-02", publicNotice: "2026-06-30", siteClearance14: "2026-07-07", siteClearance72: "2026-07-17" } },
  { id: "DCTR2-DH-010", county: "Sacramento", agreement: "Batch 5 (TEP)", property: "SAC-2484", accessWindow: "4/1 - 11/30/2026", activity: "TR 2-Design 30%", depthFt: 200, rig: "3", rigDays: 9.5, schedule: { kind: 'scheduled', start: "2026-08-17", finish: "2026-08-31" }, due: { landowner14: "2026-07-20", landowner10: "2026-07-24", landowner72: "2026-07-31", publicNotice: "2026-07-27", siteClearance14: "2026-08-03", siteClearance72: "2026-08-14" } },
  { id: "DCRDS-DH-131", county: "Sacramento", agreement: "Batch 5 (TEP)", property: "SAC-2851", accessWindow: "4/1 - 11/30/2026", activity: "Power (SMUD) Twin Cities-Design 100%", depthFt: 50, rig: "5", rigDays: 1.5, schedule: { kind: 'scheduled', start: "2026-06-25", finish: "2026-06-25" }, due: { landowner14: "2026-05-28", landowner10: "2026-06-01", landowner72: "2026-06-08", publicNotice: "2026-06-04", siteClearance14: "2026-06-11", siteClearance72: "2026-06-22" } },
  { id: "DCTR1-DH-008", county: "Sacramento", agreement: "Batch 5 (TEP)", property: "SAC-0274", accessWindow: "4/1 - 11/30/2026", activity: "TR 1 - Design 30%", depthFt: 200, rig: "2", rigDays: 9.5, schedule: { kind: 'scheduled', start: "2026-06-16", finish: "2026-06-30" }, due: { landowner14: "2026-05-19", landowner10: "2026-05-22", landowner72: "2026-05-29", publicNotice: "2026-05-26", siteClearance14: "2026-06-02", siteClearance72: "2026-06-12" } },
  { id: "DCTR1-DH-056", county: "Sacramento", agreement: "Batch 5 (TEP)", property: "STATE-7220-A", accessWindow: "4/1 - 11/30/2026", activity: "TR 1 - Design 30% (Note: property change)", depthFt: 200, rig: "3", rigDays: 9, notes: "Bio Stop Pos - Mow Plan - need clearance", schedule: { kind: 'unscheduled', reason: "TBD" } },
  { id: "DCTR2-DH-029", county: "Sacramento", agreement: "Batch 5 (TEP)", property: "STATE-7220-B", accessWindow: "4/1 - 11/30/2026", activity: "TR 2-Design 30%", depthFt: 200, rig: "4", rigDays: 9, schedule: { kind: 'scheduled', start: "2026-08-24", finish: "2026-09-03" }, due: { landowner14: "2026-07-27", landowner10: "2026-07-31", landowner72: "2026-08-07", publicNotice: "2026-08-03", siteClearance14: "2026-08-10", siteClearance72: "2026-08-21" } },
  { id: "DCTR2-CPT-024", county: "Sacramento", agreement: "Batch 5 (TEP)", property: "STATE-7220-B", accessWindow: "4/1 - 11/30/2026", activity: "TR 2-Design 30%", depthFt: 200, rig: "CPT", rigDays: 1, schedule: { kind: 'scheduled', start: "2026-09-04", finish: "2026-09-04" }, due: { landowner14: "2026-08-07", landowner10: "2026-08-11", landowner72: "2026-08-18", publicNotice: "2026-08-14", siteClearance14: "2026-08-21", siteClearance72: "2026-09-01" } },
  { id: "DCRDS-DH-184", county: "Sacramento", agreement: "Batch 5 (TEP)", property: "SAC-2484", accessWindow: "4/1 - 11/30/2026", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "5", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-08-21", finish: "2026-08-21" }, due: { landowner14: "2026-07-24", landowner10: "2026-07-28", landowner72: "2026-08-04", publicNotice: "2026-07-31", siteClearance14: "2026-08-07", siteClearance72: "2026-08-18" } },
  { id: "DCTR2-DH-012", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "Caltrans", activity: "TR 2-Design 30%", depthFt: 200, rig: "7", rigDays: 9, schedule: { kind: 'scheduled', start: "2026-08-25", finish: "2026-09-02" }, due: { landowner14: "2026-07-28", landowner10: "2026-07-31", landowner72: "2026-08-07", publicNotice: "2026-08-04", siteClearance14: "2026-08-11", siteClearance72: "2026-08-21" } },
  { id: "DCTR2-DH-015", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "Caltrans", activity: "TR 2-Design 30%", depthFt: 200, rig: "7", rigDays: 9, schedule: { kind: 'scheduled', start: "2026-08-12", finish: "2026-08-19" }, due: { landowner14: "2026-07-15", landowner10: "2026-07-17", landowner72: "2026-07-24", publicNotice: "2026-07-22", siteClearance14: "2026-07-29", siteClearance72: "2026-08-07" } },
  { id: "DCTR2-DH-017", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "Caltrans", activity: "TR 2-Design 30%", depthFt: 200, rig: "7", rigDays: 9, schedule: { kind: 'scheduled', start: "2026-07-29", finish: "2026-08-07" }, due: { landowner14: "2026-07-01", landowner10: "2026-07-02", landowner72: "2026-07-10", publicNotice: "2026-07-08", siteClearance14: "2026-07-15", siteClearance72: "2026-07-24" } },
  { id: "DCLEV-DH-015", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 50, rig: "8", rigDays: 1.5, schedule: { kind: 'scheduled', start: "2026-08-19", finish: "2026-08-20" }, due: { landowner14: "2026-07-22", landowner10: "2026-07-24", landowner72: "2026-07-31", publicNotice: "2026-07-29", siteClearance14: "2026-08-05", siteClearance72: "2026-08-14" } },
  { id: "DCLEV-DH-026", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 50, rig: "7", rigDays: 1.5, notes: "Franklin", schedule: { kind: 'scheduled', start: "2026-09-11", finish: "2026-09-11" }, due: { landowner14: "2026-08-14", landowner10: "2026-08-18", landowner72: "2026-08-25", publicNotice: "2026-08-21", siteClearance14: "2026-08-28", siteClearance72: "2026-09-08" } },
  { id: "DCRDS-DH-158", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "HA", rigDays: 0.5, notes: "Franklin", schedule: { kind: 'scheduled', start: "2026-09-02", finish: "2026-09-02" }, due: { landowner14: "2026-08-05", landowner10: "2026-08-07", landowner72: "2026-08-14", publicNotice: "2026-08-12", siteClearance14: "2026-08-19", siteClearance72: "2026-08-28" } },
  { id: "DCRDS-DH-166", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "8", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-08-20", finish: "2026-08-20" }, due: { landowner14: "2026-07-23", landowner10: "2026-07-27", landowner72: "2026-08-03", publicNotice: "2026-07-30", siteClearance14: "2026-08-06", siteClearance72: "2026-08-17" } },
  { id: "DCRDS-DH-171", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "8", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-08-14", finish: "2026-08-14" }, due: { landowner14: "2026-07-17", landowner10: "2026-07-21", landowner72: "2026-07-28", publicNotice: "2026-07-24", siteClearance14: "2026-07-31", siteClearance72: "2026-08-11" } },
  { id: "DCRDS-DH-172", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "8", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-08-13", finish: "2026-08-13" }, due: { landowner14: "2026-07-16", landowner10: "2026-07-20", landowner72: "2026-07-27", publicNotice: "2026-07-23", siteClearance14: "2026-07-30", siteClearance72: "2026-08-10" } },
  { id: "DCRDS-DH-177", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "5", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-08-21", finish: "2026-08-21" }, due: { landowner14: "2026-07-24", landowner10: "2026-07-28", landowner72: "2026-08-04", publicNotice: "2026-07-31", siteClearance14: "2026-08-07", siteClearance72: "2026-08-18" } },
  { id: "DCRDS-DH-178", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "5", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-08-20", finish: "2026-08-20" }, due: { landowner14: "2026-07-23", landowner10: "2026-07-27", landowner72: "2026-08-03", publicNotice: "2026-07-30", siteClearance14: "2026-08-06", siteClearance72: "2026-08-17" } },
  { id: "DCRDS-DH-156", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "HA", rigDays: 0.5, notes: "Franklin", schedule: { kind: 'scheduled', start: "2026-09-01", finish: "2026-09-01" }, due: { landowner14: "2026-08-04", landowner10: "2026-08-07", landowner72: "2026-08-14", publicNotice: "2026-08-11", siteClearance14: "2026-08-18", siteClearance72: "2026-08-28" } },
  { id: "DCRDS-DH-157", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "HA", rigDays: 0.5, notes: "Franklin", schedule: { kind: 'scheduled', start: "2026-09-01", finish: "2026-09-01" }, due: { landowner14: "2026-08-04", landowner10: "2026-08-07", landowner72: "2026-08-14", publicNotice: "2026-08-11", siteClearance14: "2026-08-18", siteClearance72: "2026-08-28" } },
  { id: "DCRDS-DH-168", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "8", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-08-17", finish: "2026-08-17" }, due: { landowner14: "2026-07-20", landowner10: "2026-07-24", landowner72: "2026-07-31", publicNotice: "2026-07-27", siteClearance14: "2026-08-03", siteClearance72: "2026-08-14" } },
  { id: "DCRDS-DH-169", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "8", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-08-17", finish: "2026-08-17" }, due: { landowner14: "2026-07-20", landowner10: "2026-07-24", landowner72: "2026-07-31", publicNotice: "2026-07-27", siteClearance14: "2026-08-03", siteClearance72: "2026-08-14" } },
  { id: "DCRDS-DH-175", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "HA", rigDays: 0.5, notes: "Franklin", schedule: { kind: 'scheduled', start: "2026-09-08", finish: "2026-09-08" }, due: { landowner14: "2026-08-11", landowner10: "2026-08-14", landowner72: "2026-08-21", publicNotice: "2026-08-18", siteClearance14: "2026-08-25", siteClearance72: "2026-09-04" } },
  { id: "DCRDS-DH-176", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "HA", rigDays: 0.5, notes: "Franklin", schedule: { kind: 'scheduled', start: "2026-09-09", finish: "2026-09-09" }, due: { landowner14: "2026-08-12", landowner10: "2026-08-14", landowner72: "2026-08-21", publicNotice: "2026-08-19", siteClearance14: "2026-08-26", siteClearance72: "2026-09-04" } },
  { id: "DCRDS-DH-160", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "HA", rigDays: 0.5, notes: "Franklin", schedule: { kind: 'scheduled', start: "2026-09-03", finish: "2026-09-03" }, due: { landowner14: "2026-08-06", landowner10: "2026-08-10", landowner72: "2026-08-17", publicNotice: "2026-08-13", siteClearance14: "2026-08-20", siteClearance72: "2026-08-31" } },
  { id: "DCRDS-DH-161", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "HA", rigDays: 0.5, notes: "Franklin", schedule: { kind: 'scheduled', start: "2026-09-03", finish: "2026-09-03" }, due: { landowner14: "2026-08-06", landowner10: "2026-08-10", landowner72: "2026-08-17", publicNotice: "2026-08-13", siteClearance14: "2026-08-20", siteClearance72: "2026-08-31" } },
  { id: "DCRDS-DH-162", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "HA", rigDays: 0.5, notes: "Franklin", schedule: { kind: 'scheduled', start: "2026-09-04", finish: "2026-09-04" }, due: { landowner14: "2026-08-07", landowner10: "2026-08-11", landowner72: "2026-08-18", publicNotice: "2026-08-14", siteClearance14: "2026-08-21", siteClearance72: "2026-09-01" } },
  { id: "DCRDS-DH-170", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "8", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-08-14", finish: "2026-08-14" }, due: { landowner14: "2026-07-17", landowner10: "2026-07-21", landowner72: "2026-07-28", publicNotice: "2026-07-24", siteClearance14: "2026-07-31", siteClearance72: "2026-08-11" } },
  { id: "DCRDS-DH-174", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "HA", rigDays: 0.5, notes: "Franklin", schedule: { kind: 'scheduled', start: "2026-09-08", finish: "2026-09-08" }, due: { landowner14: "2026-08-11", landowner10: "2026-08-14", landowner72: "2026-08-21", publicNotice: "2026-08-18", siteClearance14: "2026-08-25", siteClearance72: "2026-09-04" } },
  { id: "DCRDS-DH-159", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "HA", rigDays: 0.5, notes: "Franklin", schedule: { kind: 'scheduled', start: "2026-09-02", finish: "2026-09-02" }, due: { landowner14: "2026-08-05", landowner10: "2026-08-07", landowner72: "2026-08-14", publicNotice: "2026-08-12", siteClearance14: "2026-08-19", siteClearance72: "2026-08-28" } },
  { id: "DCRDS-DH-173", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "8", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-08-13", finish: "2026-08-13" }, due: { landowner14: "2026-07-16", landowner10: "2026-07-20", landowner72: "2026-07-27", publicNotice: "2026-07-23", siteClearance14: "2026-07-30", siteClearance72: "2026-08-10" } },
  { id: "DCRDS-DH-164", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "HA", rigDays: 0.5, notes: "Franklin", schedule: { kind: 'scheduled', start: "2026-09-04", finish: "2026-09-04" }, due: { landowner14: "2026-08-07", landowner10: "2026-08-11", landowner72: "2026-08-18", publicNotice: "2026-08-14", siteClearance14: "2026-08-21", siteClearance72: "2026-09-01" } },
  { id: "DCRDS-DH-167", county: "Sacramento", agreement: "ROW (2026)", property: "State or County", accessWindow: "County", activity: "Twin Cities Advanced Work-Design 30%", depthFt: 15, rig: "8", rigDays: 0.5, schedule: { kind: 'scheduled', start: "2026-08-18", finish: "2026-08-18" }, due: { landowner14: "2026-07-21", landowner10: "2026-07-24", landowner72: "2026-07-31", publicNotice: "2026-07-28", siteClearance14: "2026-08-04", siteClearance72: "2026-08-14" } },
];

// ── Working-day arithmetic (UTC date strings, no time zones) ───────────────────

const HOLIDAY_SET = new Set(HOLIDAYS);
const toDate = (iso: string) => new Date(`${iso}T00:00:00Z`);
const toIso = (d: Date) => d.toISOString().slice(0, 10);

export function addDays(iso: string, n: number): string {
  const d = toDate(iso);
  d.setUTCDate(d.getUTCDate() + n);
  return toIso(d);
}

export function isWorkingDay(iso: string): boolean {
  const dow = toDate(iso).getUTCDay();
  return dow !== 0 && dow !== 6 && !HOLIDAY_SET.has(iso);
}

/** Every working day from `from` to `to`, inclusive. */
export function workingDaysBetween(from: string, to: string): string[] {
  const out: string[] = [];
  for (let d = from; d <= to; d = addDays(d, 1)) if (isWorkingDay(d)) out.push(d);
  return out;
}

/** Step n working days forward (n > 0) or back (n < 0). */
export function addWorkingDays(iso: string, n: number): string {
  let d = iso;
  let left = Math.abs(n);
  const step = n < 0 ? -1 : 1;
  while (left > 0) {
    d = addDays(d, step);
    if (isWorkingDay(d)) left -= 1;
  }
  return d;
}

/** The working day on or before a date. */
const onOrBeforeWorkingDay = (iso: string) => (isWorkingDay(iso) ? iso : addWorkingDays(iso, -1));

/** Monday of the ISO week a date falls in. */
function weekOf(iso: string): string {
  const dow = toDate(iso).getUTCDay();
  return addDays(iso, -((dow + 6) % 7));
}

// ── Expected documents (derived from the schedule) ─────────────────────────────

export function drillDays(loc: ExplorationLocation): string[] {
  if (loc.schedule.kind !== 'scheduled') return [];
  return workingDaysBetween(loc.schedule.start, loc.schedule.finish);
}

export function expectedDocuments(loc: ExplorationLocation): ExpectedDocument[] {
  if (loc.schedule.kind !== 'scheduled' || !loc.due) return [];
  const d = loc.due;
  const holeId = loc.id;
  const perHole: ExpectedDocument[] = [
    { holeId, kind: 'tribal', due: TRIBAL_NOTICE_DUE },
    { holeId, kind: 'landowner14', due: d.landowner14 },
    { holeId, kind: 'landowner10', due: d.landowner10 },
    { holeId, kind: 'landowner72', due: d.landowner72 },
    { holeId, kind: 'publicNotice', due: d.publicNotice },
    { holeId, kind: 'siteClearance14', due: d.siteClearance14 },
    { holeId, kind: 'usaTicket', due: d.siteClearance72, windowStart: d.siteClearance14 },
    { holeId, kind: 'siteClearance72', due: d.siteClearance72 },
  ];
  const daily: ExpectedDocument[] = drillDays(loc).flatMap((day) =>
    (['bioLog', 'coordinatorLog', 'geologistLog'] as const).map((kind) => ({ holeId, kind, due: day, drillDay: day })),
  );
  return [...perHole, ...daily];
}

// ── Mock received records (deterministic) ──────────────────────────────────────

/** FNV-1a → murmur3 fmix → mulberry32: a stable [0, 1) per string key. */
function seeded(key: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  // murmur3 finalizer: keys that differ only in their last characters must not land close.
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;
  let t = (h + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
const pick = (key: string, n: number) => Math.floor(seeded(key) * n);

/** Pattern: the DWR look-ahead covering drilling the week of Sep 7 never arrived. */
const MISSED_LOOKAHEAD_WEEK = '2026-09-07';
/** Pattern: hand-auger USA tickets pulled but never uploaded. */
const MISSING_USA = new Set(['DCRDS-DH-156', 'DCRDS-DH-160', 'DCRDS-DH-162']);
/** Pattern: 72-hr landowner notices not logged. */
const MISSING_LANDOWNER72 = new Set(['DCBPP-DH-003', 'DCTR2-DH-029']);
/** Pattern: a 72-hr clearance survey with no Fulcrum record. */
const MISSING_SC72 = new Set(['DCRDS-DH-184']);
/** Pattern: rig 8's coordinator logs fall behind from here on. */
const RIG8_LAG_FROM = '2026-08-31';

const FILE_STEM: Record<DocKind, string> = {
  tribal: 'Tribal-Notification',
  landowner14: 'Landowner-Notice-14-Day',
  landowner10: 'Landowner-Notice-10-Day',
  landowner72: 'Landowner-Notice-72-Hr',
  publicNotice: 'DWR-3-Week-Look-Ahead',
  siteClearance14: 'Site-Clearance-14-Day',
  usaTicket: 'USA-Ticket',
  siteClearance72: 'Site-Clearance-72-Hr',
  bioLog: 'Daily-Bio-Monitoring',
  coordinatorLog: 'Field-Coordinator-Log',
  geologistLog: 'Geologist-Log',
};

/** USA North 811-style ticket number: X + year digit + day of year + sequence. */
function usaTicketNumber(holeId: string, on: string): string {
  const start = toDate(`${on.slice(0, 4)}-01-01`).getTime();
  const doy = Math.floor((toDate(on).getTime() - start) / 86_400_000) + 1;
  const seq = String(100 + pick(`usa-seq:${holeId}`, 800)).padStart(4, '0');
  return `X${on.slice(3, 4)}${String(doy).padStart(3, '0')}${seq}`;
}

/** Miss / late odds per document kind (the random scatter under the patterns). */
function odds(loc: ExplorationLocation, exp: ExpectedDocument): { miss: number; late: number } {
  switch (exp.kind) {
    case 'landowner10':
      return { miss: 0.07, late: 0.02 };
    case 'coordinatorLog':
      if (loc.rig === '8') return exp.due >= RIG8_LAG_FROM ? { miss: 0.5, late: 0.3 } : { miss: 0, late: 0.2 };
      return { miss: 0.01, late: 0.015 };
    case 'geologistLog':
      return { miss: 0.01, late: 0.015 };
    case 'publicNotice':
      // One email per week — its only gap is the missed week above.
      return { miss: 0, late: 0.04 };
    case 'bioLog':
      return { miss: 0.01, late: 0.01 };
    default:
      return { miss: 0.045, late: 0.02 };
  }
}

function forcedMissing(loc: ExplorationLocation, exp: ExpectedDocument): boolean {
  if (loc.schedule.kind !== 'scheduled') return false;
  switch (exp.kind) {
    case 'publicNotice':
      return weekOf(loc.schedule.start) === MISSED_LOOKAHEAD_WEEK;
    case 'usaTicket':
      return MISSING_USA.has(loc.id);
    case 'landowner72':
      return MISSING_LANDOWNER72.has(loc.id);
    case 'siteClearance72':
      return MISSING_SC72.has(loc.id);
    default:
      return false;
  }
}

function mockRecord(loc: ExplorationLocation, exp: ExpectedDocument, today: string): ReceivedRecord | undefined {
  const source = DOC_TYPE[exp.kind].source;
  const key = `${exp.holeId}:${exp.kind}:${exp.drillDay ?? ''}`;

  // One campaign-wide tribal notice, sent ahead of its date.
  if (exp.kind === 'tribal') {
    return { holeId: exp.holeId, kind: 'tribal', receivedOn: '2026-04-30', source, fileName: 'Tribal-Notification_2026-Geotechnical-Campaign.pdf' };
  }
  if (forcedMissing(loc, exp)) return undefined;

  // The look-ahead is one DWR email per drilling week, so every hole in that week shares its fate.
  const fateKey = exp.kind === 'publicNotice' && loc.schedule.kind === 'scheduled' ? `lookahead:${weekOf(loc.schedule.start)}` : key;
  const { miss, late } = odds(loc, exp);
  const roll = seeded(`${fateKey}:fate`);
  let receivedOn: string;
  if (roll < miss) return undefined;
  if (roll < miss + late) {
    receivedOn = addWorkingDays(exp.due, 1 + pick(`${fateKey}:lag`, 3));
  } else if (exp.drillDay || exp.kind === 'siteClearance72') {
    receivedOn = exp.due;
  } else if (exp.kind === 'usaTicket' && exp.windowStart) {
    const window = workingDaysBetween(exp.windowStart, exp.due);
    receivedOn = window[pick(`${key}:day`, Math.max(1, window.length - 1))] ?? exp.due;
  } else if (exp.kind === 'publicNotice' && loc.schedule.kind === 'scheduled') {
    receivedOn = onOrBeforeWorkingDay(addDays(weekOf(loc.schedule.start), -21));
  } else {
    receivedOn = addWorkingDays(exp.due, -pick(`${key}:lead`, 3));
    if (receivedOn > exp.due) receivedOn = exp.due;
  }
  // Nothing arrives from the future.
  if (receivedOn > today || (receivedOn === today && exp.due > today)) return undefined;

  const fileName =
    exp.kind === 'usaTicket'
      ? `${FILE_STEM.usaTicket}_${usaTicketNumber(loc.id, receivedOn)}.pdf`
      : exp.kind === 'publicNotice' && loc.schedule.kind === 'scheduled'
        ? `${FILE_STEM.publicNotice}_Week-of-${weekOf(loc.schedule.start)}.pdf`
        : exp.drillDay
          ? `${loc.id}_${FILE_STEM[exp.kind]}_${exp.drillDay}.pdf`
          : `${loc.id}_${FILE_STEM[exp.kind]}.pdf`;
  return { holeId: exp.holeId, kind: exp.kind, drillDay: exp.drillDay, receivedOn, source, fileName };
}

/** The stored records — what Survey123 and Fulcrum hold. */
export const RECEIVED_RECORDS: ReceivedRecord[] = LOCATIONS.flatMap((loc) =>
  expectedDocuments(loc)
    .map((exp) => mockRecord(loc, exp, FIXTURE_TODAY))
    .filter((r): r is ReceivedRecord => Boolean(r)),
);

// ── Derivations ─────────────────────────────────────────────────────────────────

const recordKey = (holeId: string, kind: DocKind, drillDay?: string) => `${holeId}|${kind}|${drillDay ?? ''}`;

export function indexRecords(records: ReceivedRecord[]): Map<string, ReceivedRecord> {
  return new Map(records.map((r) => [recordKey(r.holeId, r.kind, r.drillDay), r]));
}

/** Pure: the whole status model is this function. */
export function deriveStatus(exp: ExpectedDocument, record: ReceivedRecord | undefined, today: string): DocStatus {
  if (record) return record.receivedOn <= exp.due ? 'received' : 'late';
  return exp.due < today ? 'missing' : 'upcoming';
}

const SEVERITY: Record<DocStatus, number> = { missing: 3, late: 2, upcoming: 1, received: 0 };

function summarizeCell(kind: DocKind, items: ChecklistItem[]): CellSummary {
  const mine = items.filter((i) => i.expected.kind === kind);
  const count = (s: DocStatus) => mine.filter((i) => i.status === s).length;
  const worst = mine.reduce<DocStatus | undefined>((w, i) => (!w || SEVERITY[i.status] > SEVERITY[w] ? i.status : w), undefined);
  return {
    kind,
    expected: mine.length,
    received: count('received') + count('late'),
    late: count('late'),
    missing: count('missing'),
    upcoming: count('upcoming'),
    status: worst,
  };
}

export function summarizeHole(loc: ExplorationLocation, records: Map<string, ReceivedRecord>, today: string): HoleSummary {
  const checklist: ChecklistItem[] = expectedDocuments(loc)
    .map((expected) => {
      const record = records.get(recordKey(expected.holeId, expected.kind, expected.drillDay));
      return { expected, record, status: deriveStatus(expected, record, today) };
    })
    .sort((a, b) => a.expected.due.localeCompare(b.expected.due));
  const cells = Object.fromEntries(DOC_TYPES.map((t) => [t.kind, summarizeCell(t.kind, checklist)])) as Record<DocKind, CellSummary>;
  const missing = checklist.filter((i) => i.status === 'missing').length;
  const late = checklist.filter((i) => i.status === 'late').length;
  const upcoming = checklist.filter((i) => i.status === 'upcoming').length;
  const status: HoleStatus =
    loc.schedule.kind !== 'scheduled' ? 'unscheduled' : missing ? 'missing' : late ? 'late' : upcoming ? 'upcoming' : 'complete';
  return { location: loc, status, cells, checklist, missing, late, upcoming, drillDays: drillDays(loc) };
}

export function summarizeCampaign(today: string = FIXTURE_TODAY): HoleSummary[] {
  const records = indexRecords(RECEIVED_RECORDS);
  return LOCATIONS.map((loc) => summarizeHole(loc, records, today));
}

export function campaignReadiness(holes: HoleSummary[], today: string = FIXTURE_TODAY): CampaignReadiness {
  const dueSoonThrough = addWorkingDays(today, 5);
  const items = holes.flatMap((h) => h.checklist);
  return {
    scheduledHoles: holes.filter((h) => h.status !== 'unscheduled').length,
    holesWithMissing: holes.filter((h) => h.missing > 0).length,
    missingDocuments: items.filter((i) => i.status === 'missing').length,
    lateDocuments: items.filter((i) => i.status === 'late').length,
    dueSoon: items.filter((i) => i.status === 'upcoming' && i.expected.due <= dueSoonThrough).length,
    dueSoonThrough,
  };
}

// ── Formatting ──────────────────────────────────────────────────────────────────

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "Jun 17" — the campaign is one year, so the year is implied. */
export function shortDate(iso: string): string {
  const [, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}`;
}

/** "Jun 17" or "Aug 31 – Sep 15". */
export function drillRange(loc: ExplorationLocation): string {
  if (loc.schedule.kind !== 'scheduled') return loc.schedule.reason;
  const { start, finish } = loc.schedule;
  return start === finish ? shortDate(start) : `${shortDate(start)} – ${shortDate(finish)}`;
}

// ── Timeline axis ────────────────────────────────────────────────────────────────

/** The campaign span the timeline draws: first notice window to a week past today. */
export const CAMPAIGN_SPAN = { start: '2026-05-01', end: '2026-10-02' } as const;

/** Every weekday in a range, holidays included (the timeline shades them). */
export function weekdaysBetween(from: string, to: string): string[] {
  const out: string[] = [];
  for (let d = from; d <= to; d = addDays(d, 1)) {
    const dow = toDate(d).getUTCDay();
    if (dow !== 0 && dow !== 6) out.push(d);
  }
  return out;
}

export const isHoliday = (iso: string) => HOLIDAY_SET.has(iso);

/** Worst state of a set of items — a drill day's three logs, a cell. */
export function worstStatus(statuses: DocStatus[]): DocStatus | undefined {
  return statuses.reduce<DocStatus | undefined>((w, s) => (!w || SEVERITY[s] > SEVERITY[w] ? s : w), undefined);
}

/** Month + day, "Sep 25", plus the weekday when a tooltip needs it. */
export function longDate(iso: string): string {
  const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return `${WD[toDate(iso).getUTCDay()]} ${shortDate(iso)}`;
}
