// Daily Monitoring Report review — the one source of truth every section reads.
//
// Pure derivations (initialState / fieldView / changeLog / buildReportModel) run
// at BUILD time too, so components can server-render the seeded state; the
// `dmrStore` singleton is the client-side mutable copy. Vite bundles this module
// once per page, so every component script that imports it shares one store.
//
// Listen for changes:  dmrStore.addEventListener('change', () => …)
//
// Edit model (see the fixture header):
//   'fulcrum' fields — an edit is PENDING until pushToFulcrum(); edits to one field
//                      collapse into a single pending correction; editing back to
//                      Fulcrum's value withdraws it.
//   'beacon'  fields — applied immediately, never pushed; the field is marked
//                      "Edited in Beacon" whenever it differs from the inspector's text.

import {
  AGENCY_NAME,
  CATEGORY_ORDER,
  COMPLIANCE_CONCERNS,
  OTHER_REPORTS,
  COMPLIANCE_LEVELS,
  CURRENT_USER,
  FIELDS,
  FIRM_NAME,
  FIXTURE_NOW,
  PHOTOS,
  PROJECT_NAME,
  REPORT,
  REPORT_STATUS_LABEL,
  SEED_EDITS,
  SEED_EVENTS,
  WORK_AREAS,
  type ComplianceConcern,
  type FieldDef,
  type OtherReport,
  type FieldKind,
  type ReportPhoto,
  type ReportStatus,
  type SyncState,
} from '../data/dmr-review-fixture';

// ── Types ──────────────────────────────────────────────────────────────────

export interface EditRecord {
  seq: number;
  fieldId: string;
  kind: FieldKind;
  from: string;
  to: string;
  by: string;
  at: string;
  /** 'fulcrum' edits only. 'withdrawn' = replaced by a later correction, or undone before a push. */
  sync?: EditSync;
}

export type EditSync = SyncState | 'withdrawn';

export type LogKind = 'event' | FieldKind;

export interface LogEntry {
  seq: number;
  at: string;
  by: string;
  kind: LogKind;
  /** For 'event': the sentence ("Pushed 2 changes to Fulcrum"). For edits: the field label. */
  text: string;
  /** For edits: where the field lives ("CW-TS22", "General Information"). */
  context?: string;
  fieldId?: string;
  from?: string;
  to?: string;
  /** For 'fulcrum' edits: the CURRENT sync state of that correction. */
  sync?: EditSync;
  /** For 'fulcrum' edits: the edit record this entry logged (sync state follows it). */
  editSeq?: number;
}

export interface DmrState {
  status: ReportStatus;
  /** Current value per field id. */
  values: Record<string, string>;
  /** What Fulcrum currently holds per field id (moves when a push lands). */
  fulcrum: Record<string, string>;
  edits: EditRecord[];
  log: LogEntry[];
  /** Generated daily reports a shared-record edit has made stale: reportId → concern ids
   *  changed since that report's PDF was generated. */
  outOfDate: Record<string, string[]>;
  /** Minutes past FIXTURE_NOW — the deterministic clock for new entries. */
  clock: number;
  seq: number;
}

export type FieldMarker = 'pending' | 'synced' | 'beacon' | null;

export interface FieldView {
  def: FieldDef;
  value: string;
  /** value formatted for reading ("74°F", "Included"). */
  display: string;
  /** What the field inspector submitted from Fulcrum. */
  original: string;
  originalDisplay: string;
  marker: FieldMarker;
  /** The latest edit to this field, if any. */
  lastEdit?: EditRecord;
}

// ── Lookups ────────────────────────────────────────────────────────────────

const FIELD_BY_ID = new Map(FIELDS.map((f) => [f.id, f]));
const PHOTO_BY_ID = new Map(PHOTOS.map((p) => [p.id, p]));

export function fieldDef(id: string): FieldDef {
  const def = FIELD_BY_ID.get(id);
  if (!def) throw new Error(`Unknown DMR field: ${id}`);
  return def;
}

export function photo(id: string): ReportPhoto {
  const p = PHOTO_BY_ID.get(id);
  if (!p) throw new Error(`Unknown DMR photo: ${id}`);
  return p;
}

export function concern(id: string): ComplianceConcern {
  const c = COMPLIANCE_CONCERNS.find((x) => x.id === id);
  if (!c) throw new Error(`Unknown compliance concern: ${id}`);
  return c;
}

/** The OTHER daily reports that log against a concern — every one of them shows the
 *  shared record, so a record edit made here changes the concern there too. */
export function concernOtherReports(concernId: string): OtherReport[] {
  const ids = new Set(concern(concernId).logs.map((l) => l.reportId));
  return OTHER_REPORTS.filter((r) => ids.has(r.id) && r.id !== REPORT.id);
}

/** True when a field belongs to a shared record rather than to this report. */
export function isRecordField(id: string): boolean {
  return fieldDef(id).scope === 'record';
}

/** Where a field lives, for the change log and markers. */
export function fieldContext(id: string): string {
  const [scope, key] = id.split(':');
  if (scope === 'concern') return `${key} · shared record`;
  if (scope === 'wa') return WORK_AREAS.find((w) => w.id === key)?.name ?? key;
  if (scope === 'item') {
    for (const w of WORK_AREAS) {
      const item = w.items.find((i) => i.id === key);
      if (item) return `${w.name} · ${item.title}`;
    }
  }
  if (scope === 'photo') {
    const p = photo(key);
    const w = WORK_AREAS.find((wa) => wa.photoIds.includes(key) || wa.items.some((i) => i.photoIds.includes(key)));
    return `${w?.name ?? ''} · Photo ${fmtTime12(p.takenAt.slice(11))}`.trim();
  }
  return 'General Information';
}

// ── Formatting ─────────────────────────────────────────────────────────────

export function formatValue(def: FieldDef, value: string): string {
  if (def.input === 'toggle') return value === 'yes' ? 'Included' : 'Excluded';
  if (def.input === 'time') return fmtTime12(value);
  if (value === '') return '—';
  return def.unit ? `${value}${def.unit}` : value;
}

/** "13:04" → "1:04 PM" */
export function fmtTime12(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number);
  if (Number.isNaN(h)) return hhmm;
  const suffix = h >= 12 ? 'PM' : 'AM';
  return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${suffix}`;
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** "2026-09-11" → "September 11, 2026" */
export function fmtDateLong(iso: string): string {
  const [y, m, d] = iso.slice(0, 10).split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

/** "2026-09-11" → "Sep 11, 2026" */
export function fmtDateShort(iso: string): string {
  const [y, m, d] = iso.slice(0, 10).split('-').map(Number);
  return `${MONTHS[m - 1].slice(0, 3)} ${d}, ${y}`;
}

/** "2026-09-11T09:16" → "09/11/2026 09:16" — the report's photo-caption form. */
export function fmtReportStamp(iso: string): string {
  const [y, m, d] = iso.slice(0, 10).split('-');
  return `${m}/${d}/${y} ${iso.slice(11, 16)}`;
}

/** "2026-09-12T08:05:00" → "8:05 AM" */
export function fmtClock(iso: string): string {
  return fmtTime12(iso.slice(11, 16));
}

function stamp(clock: number): string {
  const base = new Date(`${FIXTURE_NOW}Z`);
  base.setUTCMinutes(base.getUTCMinutes() + clock);
  return base.toISOString().slice(0, 19);
}

// ── State ──────────────────────────────────────────────────────────────────

export function initialState(): DmrState {
  const values: Record<string, string> = {};
  const fulcrum: Record<string, string> = {};
  for (const f of FIELDS) {
    values[f.id] = f.fulcrumValue;
    fulcrum[f.id] = f.fulcrumValue;
  }
  const state: DmrState = { status: REPORT.status, values, fulcrum, edits: [], log: [], outOfDate: {}, clock: 0, seq: 0 };

  // Interleave seed edits and seed events in time order.
  type Seed = { at: string; apply: () => void };
  const seeds: Seed[] = [
    ...SEED_EVENTS.map((e) => ({
      at: e.at,
      apply: () => state.log.push({ seq: ++state.seq, at: e.at, by: e.by, kind: 'event' as const, text: e.text }),
    })),
    ...SEED_EDITS.map((e) => ({
      at: e.at,
      apply: () => {
        const def = fieldDef(e.fieldId);
        const rec: EditRecord = {
          seq: ++state.seq,
          fieldId: e.fieldId,
          kind: def.kind,
          from: values[e.fieldId],
          to: e.to,
          by: e.by,
          at: e.at,
          sync: def.kind === 'fulcrum' ? (e.sync ?? 'pending') : undefined,
        };
        state.edits.push(rec);
        values[e.fieldId] = e.to;
        if (rec.sync === 'synced') fulcrum[e.fieldId] = e.to;
        state.log.push(logForEdit(state, rec));
      },
    })),
  ];
  seeds.sort((a, b) => a.at.localeCompare(b.at)).forEach((s) => s.apply());
  return state;
}

function logForEdit(state: DmrState, rec: EditRecord): LogEntry {
  return {
    seq: ++state.seq,
    at: rec.at,
    by: rec.by,
    kind: rec.kind,
    text: fieldDef(rec.fieldId).label,
    context: fieldContext(rec.fieldId),
    fieldId: rec.fieldId,
    from: rec.from,
    to: rec.to,
    sync: rec.sync,
    editSeq: rec.kind === 'fulcrum' ? rec.seq : undefined,
  };
}

export function fieldView(state: DmrState, id: string): FieldView {
  const def = fieldDef(id);
  const value = state.values[id];
  const edits = state.edits.filter((e) => e.fieldId === id);
  const lastEdit = edits[edits.length - 1];
  let marker: FieldMarker = null;
  if (def.kind === 'fulcrum') {
    if (edits.some((e) => e.sync === 'pending')) marker = 'pending';
    else if (edits.some((e) => e.sync === 'synced')) marker = 'synced';
  } else if (value !== def.fulcrumValue) {
    marker = 'beacon';
  }
  return {
    def,
    value,
    display: formatValue(def, value),
    original: def.fulcrumValue,
    originalDisplay: formatValue(def, def.fulcrumValue),
    marker,
    lastEdit,
  };
}

/** True when a shared-record edit landed after this (generated) report's PDF. */
export function isReportOutOfDate(state: DmrState, reportId: string): boolean {
  return (state.outOfDate[reportId]?.length ?? 0) > 0;
}

export function pendingEdits(state: DmrState): EditRecord[] {
  return state.edits.filter((e) => e.sync === 'pending');
}

export type LogFilter = 'all' | 'fulcrum' | 'beacon';

/** Newest first. Each fulcrum entry's `sync` reflects its correction's CURRENT state. */
export function changeLog(state: DmrState, filter: LogFilter = 'all'): LogEntry[] {
  const bySeq = new Map(state.edits.map((e) => [e.seq, e]));
  return state.log
    .filter((l) => filter === 'all' || l.kind === filter)
    .map((l) => (l.editSeq ? { ...l, sync: bySeq.get(l.editSeq)?.sync } : l))
    .reverse();
}

/** Change log grouped by calendar day, newest day first. */
export function changeLogDays(state: DmrState, filter: LogFilter = 'all'): { date: string; entries: LogEntry[] }[] {
  const days: { date: string; entries: LogEntry[] }[] = [];
  for (const entry of changeLog(state, filter)) {
    const date = fmtDateLong(entry.at);
    const last = days[days.length - 1];
    if (last && last.date === date) last.entries.push(entry);
    else days.push({ date, entries: [entry] });
  }
  return days;
}

// ── Report model (shared by the on-screen preview and the PDF) ─────────────

export interface ReportRow {
  label: string;
  value: string;
  /** Field ids feeding this row — the preview highlights the row when any is a Beacon edit. */
  fieldIds: string[];
}

export interface ReportActivity {
  time: string; // "09:14"
  title: string;
  text: string;
  fieldId: string;
}

export interface ReportLocation {
  name: string;
  time: string;
  level: string;
  levelFieldId: string;
  activities: ReportActivity[];
  notes: string;
  notesFieldId: string;
  species: string[];
}

export interface ReportPhotoEntry extends ReportPhoto {
  location: string;
  caption: string;
}

export interface ReportModel {
  agency: string;
  firm: string;
  project: string;
  heading: string;
  general: ReportRow[];
  locations: ReportLocation[];
  photos: ReportPhotoEntry[];
  endTime: string;
  /** Field ids whose report text differs from Fulcrum because of a Beacon edit. */
  beaconEdited: Set<string>;
  pendingCount: number;
  fileName: string;
}

export function complianceSummary(state: DmrState): string {
  const counts = new Map<string, number>();
  for (const w of WORK_AREAS) {
    const level = state.values[`wa:${w.id}:level`];
    counts.set(level, (counts.get(level) ?? 0) + 1);
  }
  return COMPLIANCE_LEVELS.filter((l) => counts.has(l))
    .map((l) => `${counts.get(l)} ${l.split('– ')[1]}`)
    .join(', ');
}

export function buildReportModel(state: DmrState): ReportModel {
  const v = (id: string) => formatValue(fieldDef(id), state.values[id]);
  // Text passages only — an excluded photo is a Beacon edit too, but it shows up as
  // an absent photo, not as highlightable text.
  const beaconEdited = new Set(
    FIELDS.filter((f) => f.kind === 'beacon' && f.input !== 'toggle' && state.values[f.id] !== f.fulcrumValue).map((f) => f.id),
  );

  const weather =
    `${state.values.conditions}, ${v('airTempCurrent')} (high ${v('airTempHigh')}, low ${v('airTempLow')}); ` +
    `wind ${v('windSpeed')} ${state.values.windDirection}; precipitation ${v('precipitation')}`;

  const general: ReportRow[] = [
    { label: 'Compliance Inspector', value: REPORT.fieldPerson, fieldIds: [] },
    { label: 'Date', value: fmtReportStamp(`${REPORT.date}T`).trim(), fieldIds: [] },
    { label: 'Time In', value: state.values.timeIn, fieldIds: ['timeIn'] },
    {
      label: 'Weather',
      value: weather,
      fieldIds: ['conditions', 'airTempCurrent', 'airTempHigh', 'airTempLow', 'windSpeed', 'windDirection', 'precipitation'],
    },
    { label: 'Tailboard(s) Attended and Location(s)', value: state.values.tailboards, fieldIds: ['tailboards'] },
    { label: 'Contractor(s)', value: state.values.contractors.split(/;\s*/).join(', '), fieldIds: ['contractors'] },
    { label: 'Variance Request(s) Reviewed', value: state.values.variances, fieldIds: ['variances'] },
    { label: 'Report Compliance Summary', value: complianceSummary(state), fieldIds: WORK_AREAS.map((w) => `wa:${w.id}:level`) },
  ];

  const locations: ReportLocation[] = WORK_AREAS.map((w) => ({
    name: w.name,
    time: w.startTime,
    level: state.values[`wa:${w.id}:level`],
    levelFieldId: `wa:${w.id}:level`,
    activities: [...w.items]
      .sort((a, b) => a.time.localeCompare(b.time) || CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category))
      .map((i) => ({
        time: i.time,
        // A compliance concern reads as its record id plus the record's CURRENT status.
        title: i.concernId ? `${i.title} (${state.values[`concern:${i.concernId}:status`]})` : i.title,
        text: state.values[`item:${i.id}:summary`],
        fieldId: `item:${i.id}:summary`,
      })),
    notes: state.values[`wa:${w.id}:notes`],
    notesFieldId: `wa:${w.id}:notes`,
    species: w.species,
  }));

  const photos: ReportPhotoEntry[] = [];
  for (const w of WORK_AREAS) {
    const ids = [...w.items.flatMap((i) => i.photoIds), ...w.photoIds];
    for (const id of ids) {
      if (state.values[`photo:${id}:include`] !== 'yes') continue;
      const p = photo(id);
      photos.push({ ...p, location: w.name, caption: `Photo Taken: ${fmtReportStamp(p.takenAt)}` });
    }
  }
  photos.sort((a, b) => a.takenAt.localeCompare(b.takenAt));

  return {
    agency: AGENCY_NAME,
    firm: FIRM_NAME,
    project: PROJECT_NAME,
    heading: `${REPORT.fieldPerson} – ${REPORT.role}`,
    general,
    locations,
    photos,
    endTime: state.values.timeOut,
    beaconEdited,
    pendingCount: pendingEdits(state).length,
    fileName: `${REPORT.date.replaceAll('-', '')}_${REPORT.fieldPerson.replace(/\s+/g, '-')}_Daily-Monitoring-Report.pdf`,
  };
}

export function statusLabel(status: ReportStatus): string {
  return REPORT_STATUS_LABEL[status];
}

// ── Client store ───────────────────────────────────────────────────────────

class DmrStore extends EventTarget {
  state: DmrState = initialState();

  private now(): string {
    this.state.clock += 1;
    return stamp(this.state.clock);
  }

  private emit() {
    this.dispatchEvent(new Event('change'));
  }

  field(id: string): FieldView {
    return fieldView(this.state, id);
  }

  /** Record an edit by the current user. No-op when the value is unchanged. */
  edit(fieldId: string, to: string): void {
    const s = this.state;
    const def = fieldDef(fieldId);
    const from = s.values[fieldId];
    if (to === from) return;
    const at = this.now();

    if (def.kind === 'fulcrum') {
      // One pending correction per field: replace it, or withdraw it when the value
      // goes back to what Fulcrum already holds.
      for (const e of s.edits) if (e.fieldId === fieldId && e.sync === 'pending') e.sync = 'withdrawn';
      if (to !== s.fulcrum[fieldId]) {
        const rec: EditRecord = { seq: ++s.seq, fieldId, kind: 'fulcrum', from, to, by: CURRENT_USER, at, sync: 'pending' };
        s.edits.push(rec);
        s.log.push(logForEdit(s, rec));
      } else {
        s.log.push({ seq: ++s.seq, at, by: CURRENT_USER, kind: 'fulcrum', text: def.label, context: fieldContext(fieldId), fieldId, from, to, sync: 'withdrawn' });
      }
    } else {
      const rec: EditRecord = { seq: ++s.seq, fieldId, kind: 'beacon', from, to, by: CURRENT_USER, at };
      s.edits.push(rec);
      s.log.push(logForEdit(s, rec));
    }
    s.values[fieldId] = to;
    if (def.scope === 'record') this.flagGeneratedReports(def.recordId!, at);
    this.emit();
  }

  /** A shared record changed: every OTHER report that includes it and already has a
   *  generated PDF is now out of date. Flag each once per concern and log it. */
  private flagGeneratedReports(concernId: string, at: string): void {
    const s = this.state;
    const fresh = concernOtherReports(concernId).filter(
      (r) => r.status === 'report-generated' && !(s.outOfDate[r.id] ?? []).includes(concernId),
    );
    if (!fresh.length) return;
    for (const r of fresh) s.outOfDate[r.id] = [...(s.outOfDate[r.id] ?? []), concernId];
    const names = fresh.map((r) => `${fmtDateShort(r.date)} (${r.fieldPerson})`).join(', ');
    s.log.push({
      seq: ++s.seq,
      at,
      by: CURRENT_USER,
      kind: 'event',
      text: `Flagged ${fresh.length} generated ${fresh.length === 1 ? 'report' : 'reports'} out of date after ${concernId} changed: ${names}`,
    });
  }

  /** Restore a Beacon-only field to the field inspector's original text. */
  revertToFulcrum(fieldId: string): void {
    this.edit(fieldId, fieldDef(fieldId).fulcrumValue);
  }

  /** Push every pending correction to Fulcrum. Returns how many were pushed. */
  pushToFulcrum(): number {
    const s = this.state;
    const pending = pendingEdits(s);
    if (!pending.length) return 0;
    for (const e of pending) {
      e.sync = 'synced';
      s.fulcrum[e.fieldId] = e.to;
    }
    s.log.push({
      seq: ++s.seq,
      at: this.now(),
      by: CURRENT_USER,
      kind: 'event',
      text: `Pushed ${pending.length} ${pending.length === 1 ? 'change' : 'changes'} to Fulcrum`,
    });
    this.emit();
    return pending.length;
  }

  /** Mark the PDF as generated (the caller produces the file). */
  reportGenerated(fileName: string): void {
    const s = this.state;
    s.status = 'report-generated';
    s.log.push({ seq: ++s.seq, at: this.now(), by: CURRENT_USER, kind: 'event', text: `Generated report ${fileName}` });
    this.emit();
  }
}

export const dmrStore = new DmrStore();
