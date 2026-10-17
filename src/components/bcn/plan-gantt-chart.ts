// bcn-lego-checked: the outline row's name is Jamie's `ui-viz-gantt__select` — a <button> reset to read exactly as the plain text it replaced (tag + name, takes the row's free width, truncates). esa-button styles every variant as a control (padding, height, chrome), so none fits; checked Beacon (ui-viz-gantt.component.scss .ui-viz-gantt__select, ported here); BcnPlanGantt is the reusable home. Every real control (caret, Apply, Revert) is a cloned EsaButton.
//
// <BcnPlanGantt>'s runtime: a vanilla-TS port of Beacon's UiVizGanttComponent (shared/ui/components/ui-viz-gantt/
// ui-viz-gantt.component.ts + .html on origin/develop, Jamie Quishenberry, BCN-1652). The layout constants, the copy,
// the row / mark / band / cut-off / landmark / link / ghost / popup geometry, the hover readout, collapse, selection
// and edit mode's press → drag → drop → held-drop flow are hers, line for line. What changed is only the plumbing:
// Angular signals and computeds become one `view()` recomputed per render, the template becomes string markup, and
// her `(event)` bindings become listeners delegated from the one persistent frame.
//
// Two render passes, so a drag never tears down the element holding its pointer capture:
//   render()        — the whole canvas, on new data, collapse, selection, edit mode, frame width.
//   renderOverlay() — the ghosts, the drag popup, the dimmed originals, the cursors and the hovered mark.

import {
  GANTT_PX_PER_YEAR,
  LINK_EDGES,
  dayDeltaOfPx,
  dayNumber,
  daysPast,
  dragModeAt,
  durationDays,
  ganttWindow,
  hasPassedDragThreshold,
  isoOfDay,
  landmarkSpan,
  overrunOf,
  plannedWindowOf,
  routeLink,
  spanOf,
  stackTags,
  visibleRows,
  xOfDay,
} from '../../lib/planning/gantt-geometry';
import type {
  GanttDragMode,
  UiVizGanttEdge,
  UiVizGanttLandmark,
  UiVizGanttLink,
  UiVizGanttRow,
  UiVizGanttRowKind,
  UiVizGanttSpan,
  UiVizGanttWindow,
} from '../../lib/planning/gantt-geometry';
import { fillIcons } from '../../lib/planning/icons';
import type { GanttDragEvent, GanttDragTarget, GanttDropState, UiVizGanttNote } from '../../lib/planning/gantt-types';

/* ── Layout constants (verbatim). ─────────────────────────────────────────────────────────────────────────────── */
const OUTLINE_PX = 420;
const ROW_PX = 28;
const AXIS_PX = 40;
const BAR_HEIGHT_PX = 16;
const BAR_MIN_WIDTH_PX = 5;
const MARK_RADIUS_PX = 2;
const SUMMARY_HEIGHT_PX = [10, 7, 4] as const;
const SUMMARY_TICK_WIDTH_PX = 2;
const SUMMARY_TICK_OVERHANG_PX = 3;
const SUMMARY_TICKED_TIERS = 2;
const MILESTONE_SIZE_PX = 12;
const HIT_PAD_PX = 4;
const EMPHASIS_EVERY_YEARS = 5;
const TODAY_LINE_PX = 2;
const WINDOW_BAND_INSET_PX = 4;
const WINDOW_BAND_MIN_WIDTH_PX = BAR_MIN_WIDTH_PX;
const CUTOFF_WIDTH_PX = 2;
const CUTOFF_HEIGHT_PX = ROW_PX - 2 * WINDOW_BAND_INSET_PX;
const LANDMARK_LINE_PX = 1;
const LANDMARK_LANE_PX = 18;
const LANDMARK_BAND_INSET_PX = 2;
const LANDMARK_TAG_CHAR_PX = 8;
const LANDMARK_TAG_CHROME_PX = 10;
const LANDMARK_TAG_MAX_PX = 160;
const LANDMARK_TAG_GAP_PX = 4;
const DRAG_POPUP_ROOM_PX = 72;
const WINDOW_HANDLE_PX = 3;
/** ui-viz-tip's FLOATING_OFFSET_PX. */
const TIP_OFFSET_PX = 4;

/* ── Copy (verbatim). ─────────────────────────────────────────────────────────────────────────────────────────── */
const TODAY_FLAG = 'Today';
const CARET_COLLAPSE = 'Collapse';
const CARET_EXPAND = 'Expand';
const TIP_DATES = 'Dates';
const TIP_DATE = 'Date';
const TIP_DURATION = 'Duration';
const TIP_PLANNED_WINDOW = 'Planned window';
const TIP_OVERRUN = 'Overrun';
const KIND_ESTIMATED = 'Estimated';
const KIND_SCHEDULED = 'Scheduled';
const OVERRUN_PREFIX = 'Runs';
const OVERRUN_ESTIMATED_SUFFIX = 'past planned window';
const OVERRUN_SCHEDULED_SUFFIX = 'past scheduled window';
const LABEL_OVERRUN_ONE = 'running past its planned window';
const LABEL_OVERRUN_MANY = 'running past their planned window';
const LABEL_SCHEDULED_OF_THEM = 'of them';
const LABEL_SCHEDULED_CUTOFF = 'past a scheduled cut-off';
const LABEL_LANDMARK_ONE = 'landmark';
const LABEL_LANDMARK_MANY = 'landmarks';
const LABEL_LANDMARK_ON = 'on';
const LABEL_LANDMARK_SEPARATOR = '; ';
const RANGE_SEPARATOR = ' – ';
const DEPENDENTS_PREFIX = 'Shifts';
const DEPENDENT_ONE = 'dependent';
const DEPENDENT_MANY = 'dependents';
const DEPENDENTS_PENDING = 'Checking dependents…';
const DROP_SAVING = 'Saving…';
const DROP_APPLY = 'Apply change';
const DROP_REVERT = 'Revert change';
const SUMMARY_LABEL_SEPARATOR = ': ';
const SUMMARY_NOTE_SEPARATOR = ', ';
const SUMMARY_ROW_TERMINATOR = '.';
const SUMMARY_ROW_SEPARATOR = ' ';
const TAG_SEPARATOR = ' · ';

const P = 'bcn-plan-gantt';
let nextId = 0;

/** ui-viz-tip's row: `label: value`, with an optional quieter note. */
export interface PlanGanttTipRow {
  label: string;
  value: string | number;
  note?: string;
}

const roundPx = (value: number): number => Math.round(value * 100) / 100;
const plural = (count: number, one: string, many: string): string => `${count} ${count === 1 ? one : many}`;
const esc = (value: unknown): string =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const tipRowsText = (rows: readonly PlanGanttTipRow[]): string =>
  rows
    .map((row) => {
      const note = row.note ? `${SUMMARY_NOTE_SEPARATOR}${row.note}` : '';
      return `${row.label}${SUMMARY_LABEL_SEPARATOR}${row.value}${note}${SUMMARY_ROW_TERMINATOR}`;
    })
    .join(SUMMARY_ROW_SEPARATOR);

/** period-label.ts's "day" label: "September 8, 2026", in UTC. */
const FULL_DAY = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
function periodLabel(isoDate: string): string {
  const parts = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate);
  if (!parts) return isoDate;
  const parsed = new Date(Date.UTC(Number(parts[1]), Number(parts[2]) - 1, Number(parts[3])));
  return Number.isNaN(parsed.getTime()) ? isoDate : FULL_DAY.format(parsed);
}

type GanttTier = 0 | 1 | 2;
const tierOf = (depth: number): GanttTier => (depth <= 0 ? 0 : depth === 1 ? 1 : 2);

interface GanttRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface GanttRowSchedule {
  span: UiVizGanttSpan | null;
  plannedWindow: UiVizGanttSpan | null;
  scheduled: boolean;
  overrun: UiVizGanttSpan | null;
}

interface GanttMarkView {
  kind: UiVizGanttRowKind;
  x: number;
  width: number;
  y: number;
  height: number;
  diamond: string;
  ticks: readonly GanttRect[];
  overrunRect: GanttRect | null;
  overrun: boolean;
  startEdge: number;
  endEdge: number;
  reachX: number;
  reachWidth: number;
  tipRows: readonly PlanGanttTipRow[];
}

interface GanttRowView {
  row: UiVizGanttRow;
  tier: GanttTier;
  top: number;
  centre: number;
  expanded: boolean;
  caretLabel: string;
  mark: GanttMarkView | null;
  band: GanttRect | null;
  cutoff: GanttRect | null;
  scheduled: boolean;
  hit: { x: number; width: number } | null;
  tipRows: readonly PlanGanttTipRow[];
  summary: string;
  summaryId: string | null;
}

interface GanttYearView {
  year: number;
  x: number;
  label: string;
  emphasis: boolean;
}

interface GanttLandmarkView {
  landmark: UiVizGanttLandmark;
  lineX: number;
  hitX: number;
  hitWidth: number;
  tagCentre: number;
  tagWidth: number;
  tagTop: number;
  dateLabel: string;
  tipRows: readonly PlanGanttTipRow[];
}

type GanttHover = { kind: 'row'; id: string } | { kind: 'landmark'; id: string };

interface GanttEditTarget {
  target: GanttDragTarget;
  kind: UiVizGanttRowKind;
  span: UiVizGanttSpan;
  x1: number;
  x2: number;
}

interface GanttPress {
  pointerId: number;
  element: Element;
  startX: number;
  startY: number;
  originX: number;
  primaryId: string;
  rowIds: string[];
  pickedIds: string[];
  mode: GanttDragMode;
  target: GanttDragTarget;
  spanDays: number;
  active: boolean;
}

interface GanttHeldDrop {
  event: GanttDragEvent;
  rows: readonly UiVizGanttRow[];
}

interface GanttGhostView {
  id: string;
  diamond: string | null;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface GanttWindowEditView {
  id: string;
  band: GanttRect;
  handles: readonly GanttRect[];
}

interface GanttCursors {
  grab: string | null;
  grabbing: string | null;
  resize: string | null;
  plotGrabbing: boolean;
  plotResizing: boolean;
}

const NO_CURSORS: GanttCursors = Object.freeze({ grab: null, grabbing: null, resize: null, plotGrabbing: false, plotResizing: false });

const ownDatesOf = (row: UiVizGanttRow, schedule: GanttRowSchedule): UiVizGanttSpan | null => (row.kind === 'summary' ? schedule.plannedWindow : schedule.span);

function expandSelection(rows: readonly UiVizGanttRow[], picked: ReadonlySet<string>): string[] {
  const ids: string[] = [];
  let insideDeeperThan: number | null = null;
  for (const row of rows) {
    if (insideDeeperThan !== null && row.depth <= insideDeeperThan) insideDeeperThan = null;
    if (insideDeeperThan !== null || picked.has(row.id)) {
      ids.push(row.id);
      if (insideDeeperThan === null) insideDeeperThan = row.depth;
    }
  }
  return ids;
}

/** Everything one render draws, resolved from the inputs and internal state. */
interface GanttView {
  schedules: Map<string, GanttRowSchedule>;
  spans: UiVizGanttSpan[];
  window: UiVizGanttWindow | null;
  plotWidth: number;
  years: GanttYearView[];
  rowViews: GanttRowView[];
  plotHeight: number;
  landmarkViews: GanttLandmarkView[];
  landmarkBandPx: number;
  axisPx: number;
  linkViews: { path: string; head: string }[];
  todayX: number | null;
  plotLabel: string;
  editTargets: Map<string, GanttEditTarget>;
  windowEditViews: GanttWindowEditView[];
}

export interface PlanGanttChartOptions {
  /** The accessible-name prefix for the plot's role="img". */
  label: string;
  /** Controls stamped at the right end of every outline row. Called on every full render. */
  rowActions?: (row: UiVizGanttRow) => Node | null;
  onRowSelect?: (id: string) => void;
  onDragChange?: (event: GanttDragEvent) => void;
  onDragEnd?: (event: GanttDragEvent) => void;
  onDragCancel?: () => void;
  onDropConfirm?: () => void;
  onDropRevert?: () => void;
  onSelectionChange?: (ids: string[]) => void;
}

/** Pre-rendered EsaButton shells the chart clones (EsaButton is compile-time, so it cannot be built at runtime). */
export interface PlanGanttTemplates {
  caret: HTMLTemplateElement;
  apply: HTMLTemplateElement;
  revert: HTMLTemplateElement;
}

export class PlanGanttChart {
  // ── Inputs ──
  private rows: readonly UiVizGanttRow[] = [];
  private links: readonly UiVizGanttLink[] = [];
  private landmarks: readonly UiVizGanttLandmark[] = [];
  private today: string | null = null;
  private outlineHeading = '';
  private selectedId: string | null = null;
  private editable = false;
  private dependentCount: number | null = null;
  private dropState: GanttDropState = 'idle';
  private dropNotes: readonly UiVizGanttNote[] = [];

  // ── Internal state ──
  private collapsed: ReadonlySet<string> = new Set();
  private frameWidth = 0;
  private hovered: GanttHover | null = null;
  private hoveredPoint: { x: number; y: number } | null = null;
  private picked: ReadonlySet<string> = new Set();
  private press: GanttPress | null = null;
  private swallowClick = false;
  private dragging: GanttDragEvent | null = null;
  private held: GanttHeldDrop | null = null;
  private gripHover: { id: string; mode: GanttDragMode } | null = null;

  private readonly idPrefix = `${P}-${++nextId}`;
  private readonly frame: HTMLElement;
  private readonly tip: HTMLElement;
  private v: GanttView | null = null;

  constructor(
    private readonly host: HTMLElement,
    private readonly templates: PlanGanttTemplates,
    private readonly options: PlanGanttChartOptions
  ) {
    this.frame = host.querySelector<HTMLElement>(`.${P}`)!;
    this.tip = document.createElement('div');
    this.tip.className = `${P}-tip`;
    this.tip.setAttribute('aria-hidden', 'true');
    this.tip.setAttribute('popover', 'manual');
    document.body.append(this.tip);

    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(() => {
        const width = this.frame.clientWidth;
        if (width !== this.frameWidth) {
          this.frameWidth = width;
          this.render();
        }
      }).observe(this.frame);
    }
    this.wire();
  }

  // ── Inputs ─────────────────────────────────────────────────────────────────────────────────────────────────────

  /** New rows: a held drop on the old ones is released (the host settled by handing over new data). */
  setData(data: { rows: readonly UiVizGanttRow[]; links: readonly UiVizGanttLink[]; landmarks: readonly UiVizGanttLandmark[]; today: string | null; outlineHeading: string }): void {
    this.rows = data.rows;
    this.links = data.links;
    this.landmarks = data.landmarks;
    this.today = data.today;
    this.outlineHeading = data.outlineHeading;
    if (this.held && this.held.rows !== this.rows) this.held = null;
    this.render();
  }

  setSelectedId(id: string | null): void {
    if (id === this.selectedId) return;
    this.selectedId = id;
    this.render();
  }

  /** Leaving edit mode drops everything it was holding: a drag in hand, a held drop, the selection. */
  setEditable(editable: boolean): void {
    if (editable === this.editable) return;
    this.editable = editable;
    if (!editable) {
      this.cancelDrag();
      this.held = null;
      this.gripHover = null;
      this.clearPicked(false);
    }
    this.render();
  }

  setDependentCount(count: number | null): void {
    this.dependentCount = count;
    this.renderOverlay();
  }

  /** Back to idle from saving / confirm, the held drop is released. */
  setDropState(state: GanttDropState, notes: readonly UiVizGanttNote[] = []): void {
    const last = this.dropState;
    this.dropState = state;
    this.dropNotes = notes;
    if (state === 'idle' && last !== 'idle') this.held = null;
    this.renderOverlay();
  }

  // ── The view ───────────────────────────────────────────────────────────────────────────────────────────────────

  private heldDrop(): GanttHeldDrop | null {
    return this.held && this.held.rows === this.rows ? this.held : null;
  }

  private preview(): GanttDragEvent | null {
    return this.dragging ?? this.heldDrop()?.event ?? null;
  }

  private pickedRowIds(): string[] {
    return this.picked.size === 0 ? [] : expandSelection(this.rows, this.picked);
  }

  private pickedRootIds(): string[] {
    return this.rows.filter((row) => this.picked.has(row.id)).map((row) => row.id);
  }

  private view(): GanttView {
    const schedules = new Map<string, GanttRowSchedule>();
    for (const row of this.rows) {
      const span = spanOf(row);
      const plannedWindow = plannedWindowOf(row);
      const overrun = span ? overrunOf(span, plannedWindow) : null;
      schedules.set(row.id, { span, plannedWindow, scheduled: row.scheduled === true, overrun });
    }
    const spans: UiVizGanttSpan[] = [];
    for (const schedule of schedules.values()) if (schedule.span) spans.push(schedule.span);

    const datedLandmarks = this.landmarks
      .map((landmark) => ({ landmark, span: landmarkSpan(landmark) }))
      .filter((dated): dated is { landmark: UiVizGanttLandmark; span: UiVizGanttSpan } => dated.span !== null)
      .sort((a, b) => a.span.startDay - b.span.startDay);

    const extents = [...spans];
    for (const schedule of schedules.values()) if (schedule.plannedWindow) extents.push(schedule.plannedWindow);
    for (const dated of datedLandmarks) extents.push(dated.span);
    const data = ganttWindow(extents);

    const availablePlotPx = Math.max(0, this.frameWidth - OUTLINE_PX);
    const window: UiVizGanttWindow | null = data
      ? { startYear: data.startYear, endYear: Math.max(data.endYear, data.startYear + Math.ceil(availablePlotPx / GANTT_PX_PER_YEAR)) }
      : null;
    const dataPx = data ? (data.endYear - data.startYear) * GANTT_PX_PER_YEAR : 0;
    const plotWidth = Math.max(dataPx, Math.floor(availablePlotPx));

    const years: GanttYearView[] = [];
    if (window) {
      for (let year = window.startYear; year < window.endYear; year++) {
        years.push({ year, x: (year - window.startYear) * GANTT_PX_PER_YEAR, label: `’${String(year).slice(-2)}`, emphasis: year % EMPHASIS_EVERY_YEARS === 0 });
      }
    }

    const rowViews: GanttRowView[] = visibleRows(this.rows, this.collapsed).map((row, index) => {
      const top = index * ROW_PX;
      const centre = top + ROW_PX / 2;
      const expanded = !this.collapsed.has(row.id);
      const schedule = schedules.get(row.id)!;
      const mark = schedule.span && window ? this.markFor(row, schedule.span, schedule.overrun, window, centre) : null;
      const band = row.kind === 'summary' && schedule.plannedWindow && window ? this.bandFor(schedule.plannedWindow, window, top) : null;
      const cutoff = schedule.scheduled && window ? this.cutoffFor(schedule, mark, window, centre) : null;
      const tipRows = this.tipRowsFor(mark, schedule);
      const summary = tipRowsText(tipRows);
      return {
        row,
        tier: tierOf(row.depth),
        top,
        centre,
        expanded,
        caretLabel: `${expanded ? CARET_COLLAPSE : CARET_EXPAND} ${row.label}`,
        mark,
        band,
        cutoff,
        scheduled: schedule.scheduled,
        hit: this.hitFor(mark, band, cutoff),
        tipRows,
        summary,
        summaryId: summary ? `${this.idPrefix}-schedule-${index}` : null,
      };
    });
    const plotHeight = rowViews.length * ROW_PX;

    const byId = new Map<string, GanttRowView>();
    for (const view of rowViews) if (view.mark) byId.set(view.row.id, view);
    const edgeX = (mark: GanttMarkView, edge: UiVizGanttEdge): number => (edge === 'start' ? mark.startEdge : mark.endEdge);
    const linkViews: { path: string; head: string }[] = [];
    for (const link of this.links) {
      const from = byId.get(link.fromId);
      const to = byId.get(link.toId);
      if (!from?.mark || !to?.mark || from === to) continue;
      const edges = LINK_EDGES[link.type];
      linkViews.push(routeLink({ x: edgeX(from.mark, edges.from), y: from.centre }, edges.from, { x: edgeX(to.mark, edges.to), y: to.centre }, edges.to, ROW_PX));
    }

    let todayX: number | null = null;
    const todayDay = dayNumber(this.today);
    if (window && todayDay !== null) {
      const x = xOfDay(todayDay, window);
      todayX = x < 0 || x > plotWidth ? null : x - TODAY_LINE_PX / 2;
    }

    let landmarkViews: GanttLandmarkView[] = [];
    if (window) {
      const placed = datedLandmarks.map(({ landmark, span }) => {
        const lineX = Math.round(xOfDay(span.startDay, window)) + LANDMARK_LINE_PX / 2;
        const tagWidth = Math.min(LANDMARK_TAG_MAX_PX, landmark.label.length * LANDMARK_TAG_CHAR_PX + LANDMARK_TAG_CHROME_PX);
        const half = tagWidth / 2;
        const tagCentre = Math.min(Math.max(lineX, half), Math.max(half, plotWidth - half));
        return { landmark, span, lineX, tagWidth, tagCentre };
      });
      const lanes = stackTags(placed.map((tag) => ({ centre: tag.tagCentre, width: tag.tagWidth })), LANDMARK_TAG_GAP_PX);
      landmarkViews = placed.map(({ landmark, span, lineX, tagWidth, tagCentre }, index) => {
        const dateLabel = this.dayLabel(span.startDay);
        return {
          landmark,
          lineX,
          hitX: lineX - LANDMARK_LINE_PX / 2 - HIT_PAD_PX,
          hitWidth: LANDMARK_LINE_PX + 2 * HIT_PAD_PX,
          tagCentre,
          tagWidth,
          tagTop: LANDMARK_BAND_INSET_PX + lanes[index] * LANDMARK_LANE_PX,
          dateLabel,
          tipRows: [{ label: TIP_DATE, value: dateLabel }],
        };
      });
    }
    const landmarkBandPx = landmarkViews.length === 0 ? 0 : Math.max(...landmarkViews.map((view) => view.tagTop)) + LANDMARK_LANE_PX + LANDMARK_BAND_INSET_PX;

    // The plot's accessible name.
    const rowsLabel = (() => {
      const rows = plural(this.rows.length, 'row', 'rows');
      if (spans.length === 0) return `${this.options.label}: ${rows}, none scheduled`;
      const first = Math.min(...spans.map((span) => span.startDay));
      const last = Math.max(...spans.map((span) => span.endDay));
      const summary = `${this.options.label}: ${rows} from ${this.dayLabel(first)} to ${this.dayLabel(last)}, ${plural(this.links.length, 'dependency', 'dependencies')}`;
      const late = [...schedules.values()].filter((schedule) => schedule.overrun !== null);
      if (late.length === 0) return summary;
      const pastCutoff = late.filter((schedule) => schedule.scheduled).length;
      const overrunning = `${summary}, ${plural(late.length, LABEL_OVERRUN_ONE, LABEL_OVERRUN_MANY)}`;
      return pastCutoff === 0 ? overrunning : `${overrunning}, ${pastCutoff} ${LABEL_SCHEDULED_OF_THEM} ${LABEL_SCHEDULED_CUTOFF}`;
    })();
    const plotLabel =
      landmarkViews.length === 0
        ? rowsLabel
        : `${rowsLabel}. ${plural(landmarkViews.length, LABEL_LANDMARK_ONE, LABEL_LANDMARK_MANY)}: ${landmarkViews
            .map((view) => `${view.landmark.label} ${LABEL_LANDMARK_ON} ${view.dateLabel}`)
            .join(LABEL_LANDMARK_SEPARATOR)}`;

    // Edit mode's targets and window outlines.
    const editTargets = new Map<string, GanttEditTarget>();
    const windowEditViews: GanttWindowEditView[] = [];
    if (this.editable) {
      for (const view of rowViews) {
        const schedule = schedules.get(view.row.id)!;
        if (view.row.kind === 'summary') {
          if (view.band && schedule.plannedWindow) {
            editTargets.set(view.row.id, { target: 'window', kind: view.row.kind, span: schedule.plannedWindow, x1: view.band.x, x2: view.band.x + view.band.width });
          }
        } else if (view.mark && schedule.span) {
          editTargets.set(view.row.id, {
            target: view.row.kind === 'milestone' ? 'milestone' : 'bar',
            kind: view.row.kind,
            span: schedule.span,
            x1: view.mark.x,
            x2: view.mark.x + view.mark.width,
          });
        }
      }
      for (const view of rowViews) {
        if (view.row.kind !== 'summary' || view.band === null) continue;
        const band = view.band;
        windowEditViews.push({
          id: view.row.id,
          band,
          handles: [
            { x: band.x, y: band.y, width: WINDOW_HANDLE_PX, height: band.height },
            { x: band.x + band.width - WINDOW_HANDLE_PX, y: band.y, width: WINDOW_HANDLE_PX, height: band.height },
          ],
        });
      }
    }

    return {
      schedules,
      spans,
      window,
      plotWidth,
      years,
      rowViews,
      plotHeight,
      landmarkViews,
      landmarkBandPx,
      axisPx: AXIS_PX + landmarkBandPx,
      linkViews,
      todayX,
      plotLabel,
      editTargets,
      windowEditViews,
    };
  }

  private ghostViews(v: GanttView): GanttGhostView[] {
    const preview = this.preview();
    const window = v.window;
    if (!preview || !window) return [];
    const views = new Map(v.rowViews.map((view) => [view.row.id, view]));
    const ghosts: GanttGhostView[] = [];
    for (const id of preview.rowIds) {
      const view = views.get(id);
      const target = v.editTargets.get(id);
      if (!view || !target) continue;
      const startDay = target.span.startDay + preview.startDeltaDays;
      const endDay = target.span.endDay + preview.endDeltaDays;
      if (target.target === 'milestone') {
        const cx = roundPx(xOfDay(startDay, window));
        const half = MILESTONE_SIZE_PX / 2;
        const c = view.centre;
        ghosts.push({ id, diamond: `${cx},${c - half} ${cx + half},${c} ${cx},${c + half} ${cx - half},${c}`, x: cx - half, y: c - half, width: MILESTONE_SIZE_PX, height: MILESTONE_SIZE_PX });
        continue;
      }
      const x = xOfDay(startDay, window);
      const width = Math.max(BAR_MIN_WIDTH_PX, xOfDay(endDay + 1, window) - x);
      const height = target.target === 'window' ? ROW_PX - 2 * WINDOW_BAND_INSET_PX : BAR_HEIGHT_PX;
      ghosts.push({ id, diamond: null, x: roundPx(x), y: view.centre - height / 2, width: roundPx(width), height });
    }
    return ghosts;
  }

  private dragPopup(v: GanttView, ghosts: GanttGhostView[]) {
    const preview = this.preview();
    if (!preview) return null;
    const primary = v.rowViews.find((view) => view.row.id === preview.primaryId);
    const ghost = ghosts.find((view) => view.id === preview.primaryId);
    if (!primary || !ghost) return null;
    const rowsById = new Map(this.rows.map((row) => [row.id, row]));
    let first = Infinity;
    let last = -Infinity;
    for (const id of preview.rowIds) {
      const row = rowsById.get(id);
      const own = row ? ownDatesOf(row, v.schedules.get(id)!) : null;
      if (own) {
        first = Math.min(first, own.startDay + preview.startDeltaDays);
        last = Math.max(last, own.endDay + preview.endDeltaDays);
      }
    }
    const count = this.dependentCount;
    const above = primary.top + ROW_PX + DRAG_POPUP_ROOM_PX > v.plotHeight && primary.top >= DRAG_POPUP_ROOM_PX;
    const held = this.heldDrop() !== null && this.dragging === null;
    return {
      left: OUTLINE_PX + Math.max(0, ghost.x),
      top: v.axisPx + (above ? primary.top : primary.top + ROW_PX),
      above,
      dates: this.rangeLabel({ startDay: first, endDay: last }),
      dependents: count === null ? DEPENDENTS_PENDING : count > 0 ? `${DEPENDENTS_PREFIX} ${plural(count, DEPENDENT_ONE, DEPENDENT_MANY)}` : null,
      saving: held && this.dropState === 'saving',
      confirm: held && this.dropState === 'confirm',
    };
  }

  private cursors(): GanttCursors {
    const dragging = this.dragging;
    if (dragging) {
      const moving = dragging.mode === 'move';
      return { grab: null, grabbing: moving ? dragging.primaryId : null, resize: moving ? null : dragging.primaryId, plotGrabbing: moving, plotResizing: !moving };
    }
    const hover = this.gripHover;
    if (!hover || this.heldDrop()) return NO_CURSORS;
    const moving = hover.mode === 'move';
    return { grab: moving ? hover.id : null, grabbing: null, resize: moving ? null : hover.id, plotGrabbing: false, plotResizing: false };
  }

  // ── Render ─────────────────────────────────────────────────────────────────────────────────────────────────────

  render(): void {
    if (this.rows.length === 0) {
      // RENDERS NOTHING WITH NO ROWS: the page's own empty state owns that case.
      this.frame.hidden = true;
      this.frame.replaceChildren();
      this.v = null;
      this.hideTip();
      return;
    }
    this.frame.hidden = false;
    const v = (this.v = this.view());
    const pickedIds = new Set(this.pickedRowIds());
    const pickedTops = pickedIds.size === 0 ? [] : v.rowViews.filter((view) => pickedIds.has(view.row.id)).map((view) => view.top);
    const selectedTop = this.selectedId === null ? null : (v.rowViews.find((view) => view.row.id === this.selectedId)?.top ?? null);

    const axis = `
      <div class="${P}__axis" style="height:${v.axisPx}px" aria-hidden="true">
        ${v.years
          .map(
            (year) =>
              `<span class="${P}__year${year.emphasis ? ` ${P}__year--emphasis` : ''}" style="left:${year.x}px;width:${GANTT_PX_PER_YEAR}px;inset-block-end:${v.landmarkBandPx}px"><span class="${P}__year-label">${year.label}</span></span>`
          )
          .join('')}
        ${v.todayX !== null ? `<span class="${P}__today" style="left:${v.todayX}px;width:${TODAY_LINE_PX}px"><span class="${P}__today-flag">${TODAY_FLAG}</span></span>` : ''}
        ${
          v.landmarkBandPx > 0
            ? `<div class="${P}__landmarks" style="height:${v.landmarkBandPx}px">${v.landmarkViews
                .map(
                  (view) =>
                    `<span class="${P}__landmark-tag" data-landmark-id="${esc(view.landmark.id)}" style="left:${view.tagCentre}px;top:${view.tagTop}px;max-inline-size:${view.tagWidth}px">${esc(view.landmark.label)}</span>`
                )
                .join('')}</div>`
            : ''
        }
      </div>`;

    const outline = `<ul class="${P}__outline">${v.rowViews
      .map((view) => {
        const classes = [`${P}__item`];
        if (view.tier === 0) classes.push(`${P}__item--tier-0`);
        if (view.tier === 1) classes.push(`${P}__item--tier-1`);
        if (view.row.id === this.selectedId) classes.push(`${P}__item--selected`);
        if (pickedIds.has(view.row.id)) classes.push(`${P}__item--picked`);
        return `<li class="${classes.join(' ')}" data-row-id="${esc(view.row.id)}" style="height:${ROW_PX}px;--bcn-plan-gantt-depth:${view.row.depth}" aria-level="${view.row.depth + 1}">
          ${view.row.hasChildren ? `<span data-caret-slot></span>` : `<span class="${P}__caret-spacer"></span>`}
          <button type="button" class="${P}__select" data-select="${esc(view.row.id)}"${view.row.id === this.selectedId ? ' aria-current="true"' : ''}${view.summaryId ? ` aria-describedby="${view.summaryId}"` : ''}>
            ${view.row.tag ? `<span class="${P}__tag">${esc(view.row.tag)}</span>` : ''}
            <span class="${P}__name" title="${esc(view.row.label)}">${esc(view.row.label)}</span>
          </button>
          ${view.summaryId ? `<span class="${P}__schedule-summary" id="${view.summaryId}">${esc(view.summary)}</span>` : ''}
          ${this.options.rowActions ? `<div class="${P}__actions"></div>` : ''}
        </li>`;
      })
      .join('')}</ul>`;

    const W = v.plotWidth;
    const H = v.plotHeight;
    const r = MARK_RADIUS_PX;
    const svg: string[] = [];
    for (const view of v.rowViews) {
      if (view.tier < 2) svg.push(`<rect class="${P}__band ${P}__band--tier-${view.tier}" x="0" y="${view.top}" width="${W}" height="${ROW_PX}"/>`);
    }
    if (selectedTop !== null) svg.push(`<rect class="${P}__selected" x="0" y="${selectedTop}" width="${W}" height="${ROW_PX}"/>`);
    for (const top of pickedTops) svg.push(`<rect class="${P}__picked" x="0" y="${top}" width="${W}" height="${ROW_PX}"/>`);
    for (const year of v.years) svg.push(`<line class="${P}__grid${year.emphasis ? ` ${P}__grid--emphasis` : ''}" x1="${year.x + 0.5}" x2="${year.x + 0.5}" y1="0" y2="${H}"/>`);
    for (const view of v.rowViews) svg.push(`<line class="${P}__rule" x1="0" x2="${W}" y1="${view.top + ROW_PX - 0.5}" y2="${view.top + ROW_PX - 0.5}"/>`);
    for (const view of v.landmarkViews) svg.push(`<line class="${P}__landmark" data-landmark-id="${esc(view.landmark.id)}" x1="${view.lineX}" x2="${view.lineX}" y1="0" y2="${H}"/>`);
    if (v.todayX !== null) svg.push(`<rect class="${P}__today-line" x="${v.todayX}" y="0" width="${TODAY_LINE_PX}" height="${H}"/>`);
    for (const view of v.rowViews) {
      const band = view.band;
      if (band) svg.push(`<rect class="${P}__window" data-row-id="${esc(view.row.id)}" x="${band.x}" y="${band.y}" width="${band.width}" height="${band.height}" rx="${r}"/>`);
    }
    for (const view of v.rowViews) {
      const mark = view.mark;
      if (!mark) continue;
      const classes = [`${P}__mark`];
      if (pickedIds.has(view.row.id)) classes.push(`${P}__mark--picked`);
      const overrun = mark.overrunRect
        ? `<rect class="${P}__overrun${view.scheduled ? ` ${P}__overrun--scheduled` : ''}" x="${mark.overrunRect.x}" y="${mark.overrunRect.y}" width="${mark.overrunRect.width}" height="${mark.overrunRect.height}" rx="${r}"/>`
        : '';
      let body = '';
      if (mark.kind === 'bar') {
        body = `<rect class="${P}__bar" x="${mark.x + 0.5}" y="${mark.y + 0.5}" width="${mark.width - 1}" height="${mark.height - 1}" rx="${r}"/>${overrun}`;
      } else if (mark.kind === 'summary') {
        body =
          `<rect class="${P}__summary ${P}__summary--tier-${view.tier}" x="${mark.x + 0.5}" y="${mark.y + 0.5}" width="${mark.width - 1}" height="${mark.height - 1}" rx="${r}"/>${overrun}` +
          mark.ticks.map((tick) => `<rect class="${P}__summary-tick" x="${tick.x}" y="${tick.y}" width="${tick.width}" height="${tick.height}"/>`).join('');
      } else {
        const overrunClass = mark.overrun ? ` ${P}__milestone--overrun${view.scheduled ? ` ${P}__milestone--overrun-scheduled` : ''}` : '';
        body = `<polygon class="${P}__milestone${overrunClass}" points="${mark.diamond}"/>`;
      }
      svg.push(`<g class="${classes.join(' ')}" data-row-id="${esc(view.row.id)}">${body}</g>`);
    }
    for (const view of v.rowViews) {
      const c = view.cutoff;
      if (c) svg.push(`<rect class="${P}__cutoff" data-row-id="${esc(view.row.id)}" x="${c.x}" y="${c.y}" width="${c.width}" height="${c.height}"/>`);
    }
    for (const edit of v.windowEditViews) {
      svg.push(
        `<g class="${P}__window-edit" data-row-id="${esc(edit.id)}"><rect class="${P}__window-edit-band" x="${edit.band.x}" y="${edit.band.y}" width="${edit.band.width}" height="${edit.band.height}" rx="${r}"/>${edit.handles
          .map((h) => `<rect class="${P}__window-handle" x="${h.x}" y="${h.y}" width="${h.width}" height="${h.height}"/>`)
          .join('')}</g>`
      );
    }
    for (const link of v.linkViews) svg.push(`<g class="${P}__link"><path class="${P}__link-line" d="${link.path}"/><polygon class="${P}__link-head" points="${link.head}"/></g>`);
    svg.push(`<g data-layer="ghosts"></g>`);
    for (const view of v.landmarkViews) svg.push(`<rect class="${P}__landmark-hit" data-landmark-id="${esc(view.landmark.id)}" x="${view.hitX}" y="0" width="${view.hitWidth}" height="${H}"/>`);
    for (const view of v.rowViews) {
      const hit = view.hit;
      if (!hit) continue;
      svg.push(`<rect class="${P}__hit${this.editable ? ` ${P}__hit--editable` : ''}" data-hit="${esc(view.row.id)}" x="${hit.x}" y="${view.top}" width="${hit.width}" height="${ROW_PX}"/>`);
    }

    this.frame.innerHTML = `
      <div class="${P}__canvas" style="grid-template-columns:${OUTLINE_PX}px ${W}px">
        <div class="${P}__corner" style="height:${v.axisPx}px">${esc(this.outlineHeading)}</div>
        ${axis}
        ${outline}
        <svg class="${P}__plot" role="img" aria-label="${esc(v.plotLabel)}" width="${W}" height="${H}">${svg.join('')}</svg>
        <div class="${P}__drag-popup" hidden></div>
      </div>`;

    // The carets and the caller's row actions: real elements, not strings.
    for (const view of v.rowViews) {
      const item = this.frame.querySelector<HTMLElement>(`li[data-row-id="${CSS.escape(view.row.id)}"]`)!;
      const slot = item.querySelector('[data-caret-slot]');
      if (slot) {
        const caret = this.templates.caret.content.firstElementChild!.cloneNode(true) as HTMLElement;
        caret.classList.add(`${P}__caret`);
        caret.setAttribute('aria-label', view.caretLabel);
        caret.setAttribute('title', view.caretLabel);
        caret.setAttribute('aria-expanded', String(view.expanded));
        caret.dataset.caret = view.row.id;
        slot.replaceWith(caret);
      }
      const actions = item.querySelector(`.${P}__actions`);
      if (actions && this.options.rowActions) {
        const node = this.options.rowActions(view.row);
        if (node) actions.append(node);
      }
    }
    this.renderOverlay();
    this.renderTip();
  }

  /** The drag-and-hover layer: what changes on every pointer move without rebuilding the canvas. */
  private renderOverlay(): void {
    const v = this.v;
    if (!v) return;
    const svg = this.frame.querySelector<SVGSVGElement>(`.${P}__plot`)!;
    const ghosts = this.ghostViews(v);
    const layer = svg.querySelector('[data-layer="ghosts"]')!;
    layer.innerHTML = ghosts
      .map((ghost) =>
        ghost.diamond
          ? `<polygon class="${P}__ghost" data-row-id="${esc(ghost.id)}" points="${ghost.diamond}"/>`
          : `<rect class="${P}__ghost" data-row-id="${esc(ghost.id)}" x="${ghost.x}" y="${ghost.y}" width="${ghost.width}" height="${ghost.height}" rx="${MARK_RADIUS_PX}"/>`
      )
      .join('');

    const previewIds = new Set(this.preview()?.rowIds ?? []);
    const hoveredRowId = this.hoveredRow()?.row.id ?? null;
    svg.querySelectorAll<SVGGElement>(`.${P}__mark`).forEach((g) => {
      const id = g.dataset.rowId!;
      g.classList.toggle(`${P}__mark--previewed`, previewIds.has(id));
      g.classList.toggle(`${P}__mark--hovered`, id === hoveredRowId);
    });

    const cursors = this.cursors();
    svg.classList.toggle(`${P}__plot--grabbing`, cursors.plotGrabbing);
    svg.classList.toggle(`${P}__plot--resizing`, cursors.plotResizing);
    svg.querySelectorAll<SVGRectElement>(`.${P}__hit`).forEach((hit) => {
      const id = hit.dataset.hit!;
      hit.classList.toggle(`${P}__hit--grab`, cursors.grab === id);
      hit.classList.toggle(`${P}__hit--grabbing`, cursors.grabbing === id);
      hit.classList.toggle(`${P}__hit--resize`, cursors.resize === id);
    });

    const popupEl = this.frame.querySelector<HTMLElement>(`.${P}__drag-popup`)!;
    const popup = this.dragPopup(v, ghosts);
    if (!popup) {
      popupEl.hidden = true;
      popupEl.replaceChildren();
      return;
    }
    popupEl.hidden = false;
    popupEl.classList.toggle(`${P}__drag-popup--above`, popup.above);
    popupEl.style.left = `${popup.left}px`;
    popupEl.style.top = `${popup.top}px`;
    const changes = popup.saving ? DROP_SAVING : popup.dependents;
    const notes =
      popup.confirm && this.dropNotes.length
        ? `<ul class="${P}__drop-notes">${this.dropNotes.map((note) => `<li>${note.map((part) => (part.strong ? `<strong>${esc(part.text)}</strong>` : esc(part.text))).join('')}</li>`).join('')}</ul>`
        : '';
    popupEl.innerHTML = `<div class="${P}__drag-readout" role="status"><span class="${P}__drag-dates">${esc(popup.dates)}</span>${
      changes ? `<span class="${P}__drag-changes">${esc(changes)}</span>` : ''
    }${notes}</div>${popup.confirm ? `<div class="${P}__drag-actions"></div>` : ''}`;
    if (popup.confirm) {
      const actions = popupEl.querySelector(`.${P}__drag-actions`)!;
      const apply = this.templates.apply.content.firstElementChild!.cloneNode(true) as HTMLElement;
      apply.dataset.dropApply = '';
      const revert = this.templates.revert.content.firstElementChild!.cloneNode(true) as HTMLElement;
      revert.dataset.dropRevert = '';
      for (const [el, label] of [[apply, DROP_APPLY], [revert, DROP_REVERT]] as const) {
        el.setAttribute('aria-label', label);
        el.setAttribute('title', label);
      }
      actions.append(apply, revert);
      fillIcons(actions);
    }
  }

  // ── Hover readout (ui-viz-tip, anchored at the pointer, bottom-start) ──────────────────────────────────────────

  private hoveredRow(): GanttRowView | null {
    const hovered = this.hovered;
    if (hovered?.kind !== 'row' || !this.v) return null;
    return this.v.rowViews.find((view) => view.row.id === hovered.id && view.hit) ?? null;
  }

  private hoveredLandmark(): GanttLandmarkView | null {
    const hovered = this.hovered;
    if (hovered?.kind !== 'landmark' || !this.v) return null;
    return this.v.landmarkViews.find((view) => view.landmark.id === hovered.id) ?? null;
  }

  private renderTip(): void {
    const landmark = this.hoveredLandmark();
    const row = this.hoveredRow();
    const point = this.hoveredPoint;
    if (!point || (!landmark && !row)) {
      this.hideTip();
      return;
    }
    const title = landmark ? landmark.landmark.label : row!.row.tag ? `${row!.row.tag}${TAG_SEPARATOR}${row!.row.label}` : row!.row.label;
    const rows = landmark?.tipRows ?? row!.tipRows;
    this.tip.innerHTML = `<div class="${P}-tip__panel"><span class="${P}-tip__title">${esc(title)}</span>${rows
      .map(
        (line) =>
          `<span class="${P}-tip__row"><span class="${P}-tip__label">${esc(line.label)}:</span><span class="${P}-tip__value">${esc(line.value)}</span>${
            line.note ? `<span class="${P}-tip__note">${esc(line.note)}</span>` : ''
          }</span>`
      )
      .join('')}</div>`;
    if (typeof this.tip.showPopover === 'function' && !this.tip.matches(':popover-open')) this.tip.showPopover();
    // bottom-start of a zero-size rect at the cursor, flipped where it would leave the viewport.
    const rect = this.tip.getBoundingClientRect();
    let top = point.y + TIP_OFFSET_PX;
    let left = point.x;
    if (top + rect.height > window.innerHeight) top = point.y - TIP_OFFSET_PX - rect.height;
    if (left + rect.width > window.innerWidth) left = point.x - rect.width;
    this.tip.style.top = `${Math.max(0, top)}px`;
    this.tip.style.left = `${Math.max(0, left)}px`;
  }

  private hideTip(): void {
    if (typeof this.tip.hidePopover === 'function' && this.tip.matches(':popover-open')) this.tip.hidePopover();
  }

  private setHover(hover: GanttHover | null, event?: MouseEvent): void {
    this.hovered = hover;
    this.hoveredPoint = hover && event ? { x: event.clientX, y: event.clientY } : null;
    this.renderOverlay();
    this.renderTip();
  }

  // ── Events (her template bindings, delegated) ──────────────────────────────────────────────────────────────────

  private wire(): void {
    const f = this.frame;
    const hitOf = (e: Event) => (e.target as Element).closest?.(`.${P}__hit`) as SVGRectElement | null;
    const landmarkOf = (e: Event) => (e.target as Element).closest?.(`.${P}__landmark-hit, .${P}__landmark-tag`) as HTMLElement | null;

    f.addEventListener('click', (e) => {
      const target = e.target as Element;
      const caret = target.closest<HTMLElement>('[data-caret]');
      if (caret) return this.toggle(caret.dataset.caret!);
      const select = target.closest<HTMLElement>('[data-select]');
      if (select) return this.options.onRowSelect?.(select.dataset.select!);
      if (target.closest('[data-drop-apply]')) return this.options.onDropConfirm?.();
      if (target.closest('[data-drop-revert]')) return this.options.onDropRevert?.();
      const hit = hitOf(e);
      if (hit) {
        if (this.editable) this.onEditClick(hit.dataset.hit!, e as MouseEvent);
        else this.options.onRowSelect?.(hit.dataset.hit!);
      }
    });

    // mouseenter / mouseleave: the hit targets and landmark marks are leaves, so over / out on them is enter / leave.
    f.addEventListener('mouseover', (e) => {
      const hit = hitOf(e);
      if (hit) return this.setHover({ kind: 'row', id: hit.dataset.hit! }, e);
      const landmark = landmarkOf(e);
      if (landmark) this.setHover({ kind: 'landmark', id: landmark.dataset.landmarkId! }, e);
    });
    f.addEventListener('mousemove', (e) => {
      if (this.hovered === null) return;
      this.hoveredPoint = { x: e.clientX, y: e.clientY };
      this.renderTip();
    });
    f.addEventListener('mouseout', (e) => {
      const hit = hitOf(e);
      if (hit) {
        if (this.editable) this.gripHover = null;
        return this.setHover(null);
      }
      if (landmarkOf(e)) this.setHover(null);
    });

    f.addEventListener('pointerdown', (e) => {
      const hit = hitOf(e);
      if (hit && this.editable) this.onEditPointerDown(hit.dataset.hit!, e, hit);
    });
    f.addEventListener('pointermove', (e) => {
      if (!this.editable) return;
      const hit = this.press ? (this.press.element as SVGRectElement) : hitOf(e);
      if (hit) this.onEditPointerMove(hit.dataset.hit!, e);
    });
    f.addEventListener('pointerup', (e) => this.onEditPointerUp(e));
    f.addEventListener('pointercancel', (e) => {
      if (e.pointerId === this.press?.pointerId) this.cancelDrag();
    });

    // Escape clears a selection. A drag in hand takes Escape first (its capture-phase listener cancels the drag and
    // stops it here), and a held drop keeps its selection until the host settles it.
    document.addEventListener('keydown', (event) => {
      if (!this.editable || this.picked.size === 0) return;
      if (event.key !== 'Escape' || event.defaultPrevented || this.held) return;
      event.preventDefault();
      this.clearPicked();
    });
    window.addEventListener('resize', () => this.hideTip(), { passive: true });
    window.addEventListener('scroll', () => this.hideTip(), { capture: true, passive: true });
  }

  private toggle(id: string): void {
    const next = new Set(this.collapsed);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    this.collapsed = next;
    this.render();
    this.frame.querySelector<HTMLElement>(`[data-caret="${CSS.escape(id)}"]`)?.focus();
  }

  /** Edit mode's click: shift toggles the row into the selection; a plain click clears it and selects. */
  private onEditClick(id: string, event: MouseEvent): void {
    if (this.swallowClick) {
      this.swallowClick = false;
      return;
    }
    if (event.shiftKey) {
      this.togglePicked(id);
      return;
    }
    this.clearPicked();
    this.options.onRowSelect?.(id);
  }

  private plotXOf(event: MouseEvent): number {
    const plot = this.frame.querySelector(`.${P}__plot`);
    return event.clientX - (plot ? plot.getBoundingClientRect().left : 0);
  }

  private onEditPointerDown(id: string, event: PointerEvent, element: Element): void {
    this.swallowClick = false;
    if (event.button !== 0 || this.press || this.heldDrop() || !this.v) return;
    const target = this.v.editTargets.get(id);
    if (!target) return;
    const x = this.plotXOf(event);
    if (x < target.x1 - HIT_PAD_PX || x > target.x2 + HIT_PAD_PX) return;
    const picked = new Set(this.pickedRowIds());
    const multi = picked.has(id) && picked.size > 1;
    if (typeof element.setPointerCapture === 'function' && event.pointerId !== undefined) element.setPointerCapture(event.pointerId);
    event.preventDefault();
    this.press = {
      pointerId: event.pointerId,
      element,
      startX: event.clientX,
      startY: event.clientY,
      originX: x,
      primaryId: id,
      rowIds: multi ? this.pickedRowIds() : [id],
      pickedIds: multi ? this.pickedRootIds() : [id],
      mode: multi ? 'move' : dragModeAt(x, target.x1, target.x2, target.kind),
      target: target.target,
      spanDays: target.span.endDay - target.span.startDay,
      active: false,
    };
    document.addEventListener('keydown', this.onDragKey, true);
  }

  private onEditPointerMove(id: string, event: PointerEvent): void {
    const press = this.press;
    if (!press) {
      this.hoverGrip(id, event);
      return;
    }
    if (event.pointerId !== press.pointerId) return;
    if (!press.active) {
      if (!hasPassedDragThreshold(press.startX, press.startY, event.clientX, event.clientY)) return;
      press.active = true;
      this.hovered = null;
      this.hoveredPoint = null;
      this.hideTip();
    }
    const window = this.v?.window;
    if (!window) return;
    const days = dayDeltaOfPx(press.originX, event.clientX - press.startX, window);
    // One edge never crosses the other: a resized mark keeps at least its one day.
    const startDeltaDays = press.mode === 'resize-end' ? 0 : press.mode === 'resize-start' ? Math.min(days, press.spanDays) : days;
    const endDeltaDays = press.mode === 'resize-start' ? 0 : press.mode === 'resize-end' ? Math.max(days, -press.spanDays) : days;
    const previous = this.dragging;
    if (previous && previous.startDeltaDays === startDeltaDays && previous.endDeltaDays === endDeltaDays) return;
    const drag: GanttDragEvent = { primaryId: press.primaryId, rowIds: press.rowIds, pickedIds: press.pickedIds, mode: press.mode, target: press.target, startDeltaDays, endDeltaDays };
    this.dragging = drag;
    this.renderOverlay();
    if (previous || startDeltaDays !== 0 || endDeltaDays !== 0) this.options.onDragChange?.(drag);
  }

  /** A drop somewhere new holds its preview and reports it; a drop back home is a cancel. */
  private onEditPointerUp(event: PointerEvent): void {
    const press = this.press;
    if (!press || event.pointerId !== press.pointerId) return;
    this.releasePress();
    const drag = this.dragging;
    this.dragging = null;
    if (!press.active) return;
    this.swallowClick = true;
    if (drag && (drag.startDeltaDays !== 0 || drag.endDeltaDays !== 0)) {
      this.held = { event: drag, rows: this.rows };
      this.renderOverlay();
      this.options.onDragEnd?.(drag);
    } else {
      this.renderOverlay();
      this.options.onDragCancel?.();
    }
  }

  private readonly onDragKey = (event: KeyboardEvent): void => {
    if (event.key !== 'Escape') return;
    event.preventDefault();
    event.stopPropagation();
    this.cancelDrag();
  };

  private cancelDrag(): void {
    const press = this.press;
    if (!press) return;
    this.releasePress();
    this.dragging = null;
    this.renderOverlay();
    if (press.active) {
      this.swallowClick = true;
      this.options.onDragCancel?.();
    }
  }

  private releasePress(): void {
    const press = this.press;
    this.press = null;
    document.removeEventListener('keydown', this.onDragKey, true);
    if (press && typeof press.element.hasPointerCapture === 'function' && press.element.hasPointerCapture(press.pointerId)) {
      press.element.releasePointerCapture(press.pointerId);
    }
  }

  private hoverGrip(id: string, event: PointerEvent): void {
    const target = this.v?.editTargets.get(id);
    const x = this.plotXOf(event);
    const mode = target && x >= target.x1 - HIT_PAD_PX && x <= target.x2 + HIT_PAD_PX ? dragModeAt(x, target.x1, target.x2, target.kind) : null;
    const current = this.gripHover;
    if (mode === null) {
      if (current !== null) {
        this.gripHover = null;
        this.renderOverlay();
      }
    } else if (current?.id !== id || current.mode !== mode) {
      this.gripHover = { id, mode };
      this.renderOverlay();
    }
  }

  private togglePicked(id: string): void {
    const next = new Set(this.picked);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    this.picked = next;
    this.render();
    this.options.onSelectionChange?.(this.pickedRowIds());
  }

  private clearPicked(rerender = true): void {
    if (this.picked.size === 0) return;
    this.picked = new Set();
    if (rerender) this.render();
    this.options.onSelectionChange?.([]);
  }

  // ── Geometry helpers (verbatim) ────────────────────────────────────────────────────────────────────────────────

  private dayLabel(day: number): string {
    return periodLabel(isoOfDay(day));
  }

  private rangeLabel(span: UiVizGanttSpan): string {
    return span.startDay === span.endDay ? this.dayLabel(span.startDay) : `${this.dayLabel(span.startDay)}${RANGE_SEPARATOR}${this.dayLabel(span.endDay)}`;
  }

  private bandFor(plannedWindow: UiVizGanttSpan, window: UiVizGanttWindow, top: number): GanttRect {
    const x = xOfDay(plannedWindow.startDay, window);
    return { x, y: top + WINDOW_BAND_INSET_PX, width: Math.max(WINDOW_BAND_MIN_WIDTH_PX, xOfDay(plannedWindow.endDay + 1, window) - x), height: ROW_PX - 2 * WINDOW_BAND_INSET_PX };
  }

  private cutoffFor(schedule: GanttRowSchedule, mark: GanttMarkView | null, window: UiVizGanttWindow, centre: number): GanttRect | null {
    const endX = schedule.plannedWindow ? xOfDay(schedule.plannedWindow.endDay + 1, window) : mark?.endEdge;
    if (endX === undefined) return null;
    return { x: roundPx(endX) - CUTOFF_WIDTH_PX / 2, y: centre - CUTOFF_HEIGHT_PX / 2, width: CUTOFF_WIDTH_PX, height: CUTOFF_HEIGHT_PX };
  }

  private hitFor(mark: GanttMarkView | null, band: GanttRect | null, tick: GanttRect | null): { x: number; width: number } | null {
    const reaches = [
      ...(mark ? [{ left: mark.reachX, right: mark.reachX + mark.reachWidth }] : []),
      ...[band, tick].filter((rect): rect is GanttRect => rect !== null).map((rect) => ({ left: rect.x, right: rect.x + rect.width })),
    ];
    if (reaches.length === 0) return null;
    const left = Math.min(...reaches.map((reach) => reach.left)) - HIT_PAD_PX;
    const right = Math.max(...reaches.map((reach) => reach.right)) + HIT_PAD_PX;
    return { x: left, width: right - left };
  }

  private tipRowsFor(mark: GanttMarkView | null, schedule: GanttRowSchedule): readonly PlanGanttTipRow[] {
    const kind = schedule.scheduled ? KIND_SCHEDULED : KIND_ESTIMATED;
    const rows: PlanGanttTipRow[] = [...(mark?.tipRows ?? [])];
    if (schedule.plannedWindow) {
      rows.push({ label: TIP_PLANNED_WINDOW, value: this.rangeLabel(schedule.plannedWindow), note: kind });
      if (schedule.span) {
        const late = daysPast(schedule.span, schedule.plannedWindow.endDay);
        if (late > 0) {
          const suffix = schedule.scheduled ? OVERRUN_SCHEDULED_SUFFIX : OVERRUN_ESTIMATED_SUFFIX;
          rows.push({ label: TIP_OVERRUN, value: `${OVERRUN_PREFIX} ${plural(late, 'day', 'days')} ${suffix}` });
        }
      }
    } else if (rows.length > 0) {
      rows[0] = { ...rows[0], note: kind };
    }
    return rows;
  }

  private markFor(row: UiVizGanttRow, span: UiVizGanttSpan, overrun: UiVizGanttSpan | null, window: UiVizGanttWindow, centre: number): GanttMarkView {
    if (row.kind === 'milestone') {
      const cx = roundPx(xOfDay(span.startDay, window));
      const half = MILESTONE_SIZE_PX / 2;
      return {
        kind: row.kind,
        x: cx - half,
        width: MILESTONE_SIZE_PX,
        y: centre - half,
        height: MILESTONE_SIZE_PX,
        diamond: `${cx},${centre - half} ${cx + half},${centre} ${cx},${centre + half} ${cx - half},${centre}`,
        ticks: [],
        overrunRect: null,
        overrun: overrun !== null,
        startEdge: cx - half,
        endEdge: cx + half,
        reachX: cx - half,
        reachWidth: MILESTONE_SIZE_PX,
        tipRows: [{ label: TIP_DATE, value: this.dayLabel(span.startDay) }],
      };
    }
    const x = xOfDay(span.startDay, window);
    const width = Math.max(BAR_MIN_WIDTH_PX, xOfDay(span.endDay + 1, window) - x);
    const tier = tierOf(row.depth);
    const height = row.kind === 'summary' ? SUMMARY_HEIGHT_PX[tier] : BAR_HEIGHT_PX;
    const y = centre - height / 2;
    const ticked = row.kind === 'summary' && tier < SUMMARY_TICKED_TIERS;
    const tickY = y - SUMMARY_TICK_OVERHANG_PX;
    const tickHeight = height + 2 * SUMMARY_TICK_OVERHANG_PX;
    const bodyLeft = x + 0.5;
    const bodyRight = x + width - 0.5;
    const overrunLeft = overrun ? Math.max(bodyLeft, xOfDay(overrun.startDay, window)) : bodyRight;
    const overrunRect = bodyRight > overrunLeft ? { x: roundPx(overrunLeft), y: y + 0.5, width: roundPx(bodyRight - overrunLeft), height: height - 1 } : null;
    return {
      kind: row.kind,
      x,
      width,
      y,
      height,
      diamond: '',
      ticks: ticked
        ? [
            { x, y: tickY, width: SUMMARY_TICK_WIDTH_PX, height: tickHeight },
            { x: x + width - SUMMARY_TICK_WIDTH_PX, y: tickY, width: SUMMARY_TICK_WIDTH_PX, height: tickHeight },
          ]
        : [],
      overrunRect,
      overrun: overrunRect !== null,
      startEdge: x,
      endEdge: x + width,
      reachX: x,
      reachWidth: width,
      tipRows: [
        { label: TIP_DATES, value: this.rangeLabel(span) },
        { label: TIP_DURATION, value: plural(durationDays(span), 'day', 'days') },
      ],
    };
  }
}
