// bcn-lego-checked: the outline row's name is Jamie's `ui-viz-gantt__select` — a <button> reset to read exactly as the plain text it replaced (tag + name, takes the row's free width, truncates). esa-button styles every variant as a control (padding, height, chrome), so none fits; checked Beacon (ui-viz-gantt.component.scss .ui-viz-gantt__select, ported here); BcnPlanGantt is the reusable home. Every real control (caret, Apply, Revert) is a cloned EsaButton.
//
// <BcnPlanGantt>'s runtime: a vanilla-TS port of Beacon's UiVizGanttComponent (shared/ui/components/ui-viz-gantt/
// ui-viz-gantt.component.ts + .html on origin/develop, Jamie Quishenberry, BCN-1652). The layout constants, the copy,
// the row / mark / band / cut-off / landmark / link / ghost / popup geometry, the hover readout, collapse, selection
// and edit mode's press → drag → drop → held-drop flow are hers, line for line. What changed is only the plumbing:
// Angular signals and computeds become one `view()` recomputed per render, the template becomes string markup, and
// her `(event)` bindings become listeners delegated from the one persistent frame.
//
// DRAFTS (new design, "Plan Editing: Proposed Direction"): edit mode became drafts, so the chart also takes a draft
// overlay — the live plan's dates as faint baseline bars behind each changed row, and each changed row marked as moved
// by the planner, moved by a cascade, or still waiting on the cascade — plus broken dependencies drawn as conflicts
// (BCN-1906) and extra readout rows per row. All of it is a drawing layer: nothing in it is interactive.
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
  yearPositionOfDay,
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
/** A search keeps the chart at least this many rows tall (2026-10-28): the matches, then empty rows. */
const MIN_FILTER_ROWS = 10;
/** The outline column is resizable (new): by its divider, between these widths, remembered per browser. */
const OUTLINE_MIN_PX = 200;
const OUTLINE_MIN_PLOT_PX = 160;
const OUTLINE_KEY_STEP_PX = 16;
const OUTLINE_WIDTH_KEY = 'bcn-plan-gantt-outline-width';
const SPLITTER_LABEL = 'Resize the outline column';
let ROW_PX = 28;
const AXIS_PX = 40;
let BAR_HEIGHT_PX = 16;
const BAR_MIN_WIDTH_PX = 5;
const MARK_RADIUS_PX = 2;
/**
 * A parent bracket's height by tier. EXPERIMENT (2026-10-21): her brackets thin out with depth (10 / 7 / 4px), which
 * left a sub-study a hairline. Here they grow toward their children instead — the program shortest, the deepest
 * parent tallest, in small steps and well under a task bar's 16px — matching the colour, which deepens toward the children too.
 */
let SUMMARY_HEIGHT_PX: readonly [number, number, number] = [6, 7, 8];
/**
 * EXPERIMENT (2026-10-21): a parent's bracket ends in a small tick hanging below each end, in the bracket's own colour,
 * in place of her 2px end rules overhanging both edges (on the top two tiers only). Every tier gets them, 4px wide
 * and 3px deep.
 */
const SUMMARY_TICK_WIDTH_PX = 4;
const SUMMARY_TICK_DROP_PX = 3;
/** A tick starts this far inside the mark it hangs from, so no anti-aliased seam shows between them. */
const TICK_OVERLAP_PX = 0.5;
let MILESTONE_SIZE_PX = 12;
let HIT_PAD_PX = 4;
const EMPHASIS_EVERY_YEARS = 5;
const TODAY_LINE_PX = 2;
const WINDOW_BAND_INSET_PX = 4;
const WINDOW_BAND_MIN_WIDTH_PX = BAR_MIN_WIDTH_PX;
const CUTOFF_WIDTH_PX = 2;
let CUTOFF_HEIGHT_PX = ROW_PX - 2 * WINDOW_BAND_INSET_PX;
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
/** The drafting concept (2026-10-27): a delta tag sits this far past its mark; a dimension label is measured at this
 *  advance per character plus padding each side; graph paper aims for cells about this wide. */
const DELTA_GAP_PX = 6;
const DELTA_W_PX = 17;
const DIMENSION_CHAR_PX = 7;
const DIMENSION_LABEL_PAD_PX = 4;
const PAPER_CELL_PX = 9;
/** The header's least height when the corner carries a title block over the outline heading. */
const TITLED_AXIS_MIN_PX = 58;

/**
 * Density (new, 2026-10-26, the repo-model prototype): `compact` is her geometry, above. `tactile` makes every mark an
 * object you want to pick up: taller rows and bars, a lit top edge, a shadow that lifts on hover and on the grab, and
 * grip lines at a bar's ends. The geometry is module state (one density per page), set by the constructor.
 */
export type PlanGanttDensity = 'compact' | 'medium' | 'tactile';
const DENSITY_GEOMETRY: Record<PlanGanttDensity, { row: number; bar: number; radius: number; milestone: number; summary: readonly [number, number, number]; hitPad: number }> = {
  compact: { row: 28, bar: 16, radius: 4, milestone: 12, summary: [6, 7, 8], hitPad: 4 },
  /** Between the two (2026-10-27, the density study): the tactile look on a tighter row. */
  medium: { row: 34, bar: 20, radius: 5, milestone: 15, summary: [6, 8, 9], hitPad: 5 },
  tactile: { row: 44, bar: 26, radius: 7, milestone: 20, summary: [8, 10, 12], hitPad: 6 },
};
/** Grip lines show on a tactile bar this wide or wider; each sits this far in from its end. */
const GRIP_MIN_WIDTH_PX = 40;
const GRIP_INSET_PX = 7;
let density: PlanGanttDensity = 'compact';

function applyDensity(next: PlanGanttDensity): void {
  const g = DENSITY_GEOMETRY[next];
  density = next;
  ROW_PX = g.row;
  BAR_HEIGHT_PX = g.bar;
  BAR_ESTIMATED_RADIUS_PX = g.radius;
  MILESTONE_SIZE_PX = g.milestone;
  SUMMARY_HEIGHT_PX = g.summary;
  HIT_PAD_PX = g.hitPad;
  CUTOFF_HEIGHT_PX = ROW_PX - 2 * WINDOW_BAND_INSET_PX;
}

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
/**
 * EXPERIMENT (2026-10-21): how Scheduled (fixed) dates read. Her design draws a thick cut-off rule at a Scheduled
 * element's end and nothing for Estimated. Tried instead, on the chart and never as a second colour (colour already
 * tells a parent from its children): a Scheduled bar has square, hard corners and an Estimated one rounded corners; a
 * parent's planned window keeps one corner (a box around a bar) and reads by its outline — a step darker when
 * Scheduled. Milestones stay diamonds. The cut-off rule is off; set SHOW_SCHEDULED_CUTOFF true to bring it
 * back.
 */
/** An Estimated bar's corner radius: clearly rounder than a Scheduled bar's square one, short of a full pill. */
let BAR_ESTIMATED_RADIUS_PX = 4;
const SHOW_SCHEDULED_CUTOFF = false;
const OVERRUN_PREFIX = 'Runs';
const OVERRUN_ESTIMATED_SUFFIX = 'past planned window';
const OVERRUN_SCHEDULED_SUFFIX = 'past scheduled window';
const LABEL_OVERRUN_ONE = 'running past its planned window';
const LABEL_OVERRUN_MANY = 'running past their planned window';
const LABEL_SCHEDULED_OF_THEM = 'of them';
const LABEL_SCHEDULED_CUTOFF = 'past a scheduled cut-off';
const LABEL_CONFLICT_ONE = 'broken dependency';
const LABEL_CONFLICT_MANY = 'broken dependencies';
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
const TAG_SEPARATOR = ', ';

const P = 'bcn-plan-gantt';
let nextId = 0;

/** ui-viz-tip's row: `label: value`, with an optional quieter note. */
export interface PlanGanttTipRow {
  label: string;
  value: string | number;
  note?: string;
  /**
   * A warning (new, 2026-10-21): the readout sets it apart under the facts, with an icon and its colour — amber for an
   * Estimated overrun, red past a Scheduled one or for a broken dependency — so it is seen, not read past.
   */
  tone?: 'warning' | 'danger';
  /** Long text (notes): wraps, clamped to two lines in the readout. */
  clamp?: boolean;
}

/** The outline's Budget column: compact ("$1.3M", "$185K"), the whole figure in its title and the readout. */
const BUDGET_COMPACT = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact', maximumFractionDigits: 1 });
const BUDGET_FULL = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const TIP_BUDGET = 'Budget';
const TIP_NOTES = 'Notes';
const BUDGET_HEADING = 'Budget';
const CHANGE_HEADING = 'Change';

/** The readout's warning glyph (Lucide triangle-alert), inline: the tip lives on <body>, outside any lego. */
const TIP_WARNING_ICON =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>';

const roundPx = (value: number): number => Math.round(value * 100) / 100;

/** A shift as the draft's dimension lines label it: "+8 mo", "−3 wk", "+5 d" (a minus sign, not a hyphen). */
function shiftLabelOf(days: number): string {
  const sign = days < 0 ? '\u2212' : '+';
  const n = Math.abs(days);
  if (n >= 60) return `${sign}${Math.round(n / 30.44)} mo`;
  if (n >= 14) return `${sign}${Math.round(n / 7)} wk`;
  return `${sign}${n} d`;
}

/**
 * A tactile bar's grips (new, 2026-10-26): two short vertical lines inside each end, where a resize starts, shown on
 * hover. Revised 2026-10-27: the lit top band is gone; the bar's depth is a gentle gradient fill (see the plot's
 * <defs>) and one soft shadow. Drawing only — the hit rect takes the pointer.
 */
function tactileBarDetail(x: number, y: number, width: number, height: number): string {
  if (width < GRIP_MIN_WIDTH_PX) return '';
  const top = y + height * 0.32;
  const bottom = y + height * 0.68;
  const grip = (gx: number) => `<line class="${P}__bar-grip" x1="${gx}" x2="${gx}" y1="${top}" y2="${bottom}"/><line class="${P}__bar-grip" x1="${gx + 3}" x2="${gx + 3}" y1="${top}" y2="${bottom}"/>`;
  return grip(x + GRIP_INSET_PX - 1.5) + grip(x + width - GRIP_INSET_PX - 1.5);
}

/** A rect rounded on its right side only (a bar's overrun: it starts inside the bar and ends where the bar does). */
function rightRoundedPath(x: number, y: number, width: number, height: number, radius: number): string {
  const r = Math.max(0, Math.min(radius, width, height / 2));
  if (r === 0) return `M${x},${y} H${x + width} V${y + height} H${x} Z`;
  return `M${x},${y} H${x + width - r} A${r},${r} 0 0 1 ${x + width},${y + r} V${y + height - r} A${r},${r} 0 0 1 ${x + width - r},${y + height} H${x} Z`;
}

/** A rect with only its top corners rounded: a parent bracket, whose end ticks hang from its square bottom corners. */
function topRoundedPath(x: number, y: number, width: number, height: number, radius: number): string {
  const r = Math.max(0, Math.min(radius, width / 2, height / 2));
  return `M${x},${y + height} V${y + r} Q${x},${y} ${x + r},${y} H${x + width - r} Q${x + width},${y} ${x + width},${y + r} V${y + height} Z`;
}

function readOutlineWidth(): number {
  try {
    const stored = Number(localStorage.getItem(OUTLINE_WIDTH_KEY));
    return Number.isFinite(stored) && stored >= OUTLINE_MIN_PX ? stored : OUTLINE_PX;
  } catch {
    return OUTLINE_PX;
  }
}

function writeOutlineWidth(width: number): void {
  try {
    localStorage.setItem(OUTLINE_WIDTH_KEY, String(width));
  } catch {
    /* a blocked store keeps the width for this page only */
  }
}
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
  /** A parent bracket's end caps: polygon points, and whether their end is in the overrun. */
  ticks: readonly { points: string; overrun: boolean }[];
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

/** A zoomed axis's finer divisions: quarters or months, each a gridline and a label. */
interface GanttTickView {
  x: number;
  label: string;
}

/** A date range to show (new design, 2026-10-21): the plot fits it to the frame's width. Null shows the whole plan. */
export interface GanttRange {
  start: string;
  end: string;
}

/** Zoomed in past these scales, the axis divides each year into quarters, then months. */
const QUARTER_TICKS_MIN_PX_PER_YEAR = 240;
const MONTH_TICKS_MIN_PX_PER_YEAR = 540;
const FULL_YEAR_LABEL_MIN_PX_PER_YEAR = 160;
/** The room an axis label needs before the plot's right edge, else it is left off. */
const AXIS_LABEL_ROOM_PX = 34;
const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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

/**
 * How a draft changed a row (simplified 2026-10-21): changed — by the planner or by a cascade from their edit; which
 * one is in the readout, not the drawing — or pending, while the cascade is on its way.
 */
export type GanttDraftMark = 'changed' | 'pending' | 'inked';

/** A changed row's live-plan dates, drawn behind it. A parent's window and span are kept apart, as the row draws them. */
export interface GanttBaseline {
  start: string | null;
  end: string | null;
  windowStart: string | null;
  windowEnd: string | null;
}

export interface GanttDraftOverlay {
  /** Live-plan positions, drawn as ghosts behind task bars and milestones only — never behind a parent. */
  baseline: ReadonlyMap<string, GanttBaseline>;
  marks: ReadonlyMap<string, GanttDraftMark>;
  /** Parents whose planned window the draft changed: their window stays drawn. */
  changedWindows: ReadonlySet<string>;
  /**
   * Draw the baseline as ghost bars behind the changed rows (the default). False keeps the live plan out of the
   * drawing (the draft-mode concepts, 2026-10-27): one mark per row, and every planned window drawn as on Live.
   */
  ghosts?: boolean;
  /**
   * Each changed task bar and milestone's shift as a dimension line in its own lane, from where Live has it to where the
   * draft does, labelled with the shift (the drafting concept: a measurement, never a second bar).
   */
  measure?: boolean;
  /** The draft edit that last moved each row (1-based), drawn as a delta tag past the mark's end. */
  edits?: ReadonlyMap<string, number>;
}

/**
 * The chart's title block (the draft study's direction D, 2026-10-27), after a drawing's: what this chart is (Issued,
 * Draft, a person's draft) and the facts that pin it down (revision, date, what it's based on). It sits in the corner,
 * which stays pinned with the axis while the chart scrolls, so it's in view wherever the bars are.
 */
export interface GanttTitleBlock {
  status: string;
  facts: readonly string[];
}

/** A changed row's shift, for the outline's Change column in a draft: "+3 mo", bold where the planner moved it. */
export interface GanttRowDelta {
  text: string;
  own: boolean;
}

/** A finish-to-start link the plan's dates break. */
export interface GanttConflict {
  fromId: string;
  toId: string;
}

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
  ticks: GanttTickView[];
  pxPerYear: number;
  rowViews: GanttRowView[];
  /** Empty rows under a search's few matches, so the chart keeps its height. */
  fillerRows: number;
  plotHeight: number;
  landmarkViews: GanttLandmarkView[];
  landmarkBandPx: number;
  axisPx: number;
  linkViews: { path: string; head: string; broken: boolean; fromId: string; toId: string }[];
  todayX: number | null;
  plotLabel: string;
  editTargets: Map<string, GanttEditTarget>;
  windowEditViews: GanttWindowEditView[];
  baselineViews: { id: string; diamond: string | null; rect: GanttRect }[];
  /** The drafting concept's dimension lines and delta tags, per changed row. */
  dimensionViews: { id: string; x1: number; x2: number; y: number; label: string; labelX: number; later: boolean }[];
  deltaViews: { id: string; x: number; y: number; edit: number }[];
  /** Graph paper under the plot: month columns (split nearer square when zoomed) and quarter-row lines. */
  paperPath: string | null;
  conflictIds: ReadonlySet<string>;
  /** What a drag of each grabbable row would move with it (the study's cascade preview), by row id. */
  chains: ReadonlyMap<string, readonly string[]>;
  /** The hovered row's chain, for the marks (filled in by renderOverlay). */
  chainIds: Set<string>;
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
  /** Her compact geometry (default), or the tactile one: bigger, lit, lifting marks. */
  density?: PlanGanttDensity;
  /** A click on a dependency's line (new, 2026-10-27): the link and where the pointer was, for a popover. Absent, links
   *  stay a drawing that takes no pointer. */
  onLinkSelect?: (link: { fromId: string; toId: string }, at: { x: number; y: number }) => void;
  /** Show what a drag will move before it happens (the study's cascade preview). */
  cascadePreview?: boolean;
  /** The outline column's starting width, in place of the remembered one (a narrow host, e.g. beside a change list). */
  outlineWidth?: number;
  /**
   * Read views print flat (direction A of the draft study, 2026-10-27): while the chart isn't editable its marks drop
   * the tactile depth, lift and grips, so depth only ever means "you can move this".
   */
  readFlat?: boolean;
}

/** Pre-rendered EsaButton shells the chart clones (EsaButton is compile-time, so it cannot be built at runtime). */
export interface PlanGanttTemplates {
  caret: HTMLTemplateElement;
  /** A quiet EsaBadge for a row marker ("Unsaved changes"); its text is set per row. */
  badge?: HTMLTemplateElement;
  apply: HTMLTemplateElement;
  revert: HTMLTemplateElement;
}

/** A bar's health on the chart: Late, At Risk, Blocked and Complete are colored; anything else keeps the brand. */
export type GanttRowHealth = 'late' | 'risk' | 'blocked' | 'done';

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
  private draft: GanttDraftOverlay | null = null;
  /** The drafting concept's ground: graph paper ruled to the time scale. */
  private paper = false;
  private titleBlock: GanttTitleBlock | null = null;
  private stamp: string | null = null;
  private conflicts: readonly GanttConflict[] = [];
  private rowNotes: ReadonlyMap<string, readonly PlanGanttTipRow[]> = new Map();
  private rowHealth: ReadonlyMap<string, GanttRowHealth> = new Map();
  /** Row markers by row id; one inside a collapsed parent shows on the nearest visible row. */
  private rowBadges: ReadonlyMap<string, string> = new Map();
  private rowDeltas: ReadonlyMap<string, GanttRowDelta> | null = null;
  /** Whether the drag readout counts dependents (the live plan's server preview); a draft shows the result instead. */
  private countsDependents = true;
  private range: GanttRange | null = null;

  // ── Internal state ──
  private collapsed: ReadonlySet<string> = new Set();
  /** The search (2026-10-27): lowercased, trimmed; empty shows every row. */
  private query = '';
  /** The rows whose names hold the search, by id. */
  private matched: ReadonlySet<string> = new Set();
  /** Rows to show by id (the revisions dialog's Changes Only), with their parents; null shows them all. */
  private only: ReadonlySet<string> | null = null;
  private frameWidth = 0;
  private hovered: GanttHover | null = null;
  private hoveredPoint: { x: number; y: number } | null = null;
  private picked: ReadonlySet<string> = new Set();
  private press: GanttPress | null = null;
  private swallowClick = false;
  private dragging: GanttDragEvent | null = null;
  private held: GanttHeldDrop | null = null;
  private gripHover: { id: string; mode: GanttDragMode } | null = null;

  private outlineWidth = OUTLINE_PX;
  private readonly splitter: HTMLElement;
  private readonly idPrefix = `${P}-${++nextId}`;
  private readonly fillId = `${this.idPrefix}-fill`;
  private get cascadePreview(): boolean {
    return !!this.options.cascadePreview;
  }
  private readonly frame: HTMLElement;
  private readonly tip: HTMLElement;
  private v: GanttView | null = null;

  constructor(
    private readonly host: HTMLElement,
    private readonly templates: PlanGanttTemplates,
    private readonly options: PlanGanttChartOptions
  ) {
    this.frame = host.querySelector<HTMLElement>(`.${P}`)!;
    applyDensity(options.density ?? 'compact');
    host.dataset.density = density;
    // The tactile look (gradient, soft shadow, lift) rides every density but Jamie's compact one.
    this.applyFeel();
    this.tip = document.createElement('div');
    this.tip.className = `${P}-tip`;
    this.tip.setAttribute('aria-hidden', 'true');
    this.tip.setAttribute('popover', 'manual');
    document.body.append(this.tip);

    // The divider between the outline and the plot: outside the frame's markup, so a render never drops its capture.
    this.outlineWidth = options.outlineWidth ?? readOutlineWidth();
    this.splitter = document.createElement('div');
    this.splitter.className = `${P}__splitter`;
    this.splitter.setAttribute('role', 'separator');
    this.splitter.setAttribute('aria-orientation', 'vertical');
    this.splitter.setAttribute('aria-label', SPLITTER_LABEL);
    this.splitter.title = `${SPLITTER_LABEL} (double-click to reset)`;
    this.splitter.tabIndex = 0;
    host.append(this.splitter);
    this.wireSplitter();

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
    if (this.query) this.matched = new Set(this.rows.filter((row) => row.label.toLowerCase().includes(this.query)).map((row) => row.id));
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

  /** The look of the marks: Jamie's flat compact, the tactile one, or print (a read view, with readFlat). */
  private applyFeel(): void {
    this.host.dataset.feel = density === 'compact' ? 'flat' : this.options.readFlat && !this.editable ? 'print' : 'tactile';
  }

  /** Leaving edit mode drops everything it was holding: a drag in hand, a held drop, the selection. */
  setEditable(editable: boolean): void {
    if (editable === this.editable) return;
    this.editable = editable;
    this.applyFeel();
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

  /**
   * What the chart draws over the rows: a draft's overlay (null on the live plan), the broken dependencies, extra
   * readout rows per row (a draft's "Live plan" dates, a conflict) and whether a drag counts dependents (the live plan's
   * server preview; a draft shows the result instead). Takes effect on the next setData(), which the host always sends
   * after it, so one redraw paints both.
   */
  setAnnotations(annotations: {
    draft: GanttDraftOverlay | null;
    conflicts: readonly GanttConflict[];
    rowNotes: ReadonlyMap<string, readonly PlanGanttTipRow[]>;
    countsDependents: boolean;
    rowBadges?: ReadonlyMap<string, string>;
    /** A draft's comparison: each changed row's shift, shown in place of its budget. Absent, the Budget column shows. */
    rowDeltas?: ReadonlyMap<string, GanttRowDelta> | null;
    /** Graph paper under the plot, ruled to months and rows (the drafting concept). */
    paper?: boolean;
    /** The chart's title block (direction D): its status and a few facts, in the corner over the outline heading. */
    titleBlock?: GanttTitleBlock | null;
    /** A faint stamp repeated across the plot, so a screenshot of any part of a draft still says what it is. */
    stamp?: string | null;
    /** Each task bar's and milestone's health (2026-10-28, the SOW review: status color coding on the chart). */
    rowHealth?: ReadonlyMap<string, GanttRowHealth>;
  }): void {
    this.rowHealth = annotations.rowHealth ?? new Map();
    this.paper = annotations.paper ?? false;
    this.titleBlock = annotations.titleBlock ?? null;
    this.stamp = annotations.stamp ?? null;
    this.rowBadges = annotations.rowBadges ?? new Map();
    this.rowDeltas = annotations.rowDeltas ?? null;
    this.draft = annotations.draft;
    this.conflicts = annotations.conflicts;
    this.rowNotes = annotations.rowNotes;
    this.countsDependents = annotations.countsDependents;
  }

  /**
   * Narrow the rows to a search (2026-10-27): the rows whose names hold it, and the parents above them so the outline
   * still reads (just the matches, 2026-10-28: a matching parent no longer brings its contents). Collapsed parents
   * above a match open while it lasts; the names mark the hits; empty rows keep the chart MIN_FILTER_ROWS tall.
   * Returns how many rows matched; none hides the chart, like no rows, for the page's own empty state.
   */
  setFilter(query: string): number {
    const next = query.trim().toLowerCase();
    if (next !== this.query) {
      this.query = next;
      this.matched = new Set(next ? this.rows.filter((row) => row.label.toLowerCase().includes(next)).map((row) => row.id) : []);
      this.render();
    }
    return this.matched.size;
  }

  /** Show only these rows and the parents above them (null: every row). A search, when there is one, wins. */
  setRowFilter(ids: ReadonlySet<string> | null): void {
    this.only = ids && ids.size ? ids : null;
    this.render();
  }

  /** The rows on show: the collapse applied, then the search or the row filter when there is one. */
  private shownRows(): UiVizGanttRow[] {
    const hits = this.query ? this.matched : this.only;
    if (!hits) return visibleRows(this.rows, this.collapsed);
    const parentOf = new Map(this.rows.map((row) => [row.id, row.parentId]));
    const keep = new Set<string>();
    const opened = new Set<string>();
    for (const row of this.rows) {
      if (!hits.has(row.id)) continue;
      keep.add(row.id);
      for (let at = row.parentId; at; at = parentOf.get(at) ?? null) {
        keep.add(at);
        opened.add(at);
      }
    }
    const collapsed = new Set([...this.collapsed].filter((id) => !opened.has(id)));
    return visibleRows(
      this.rows.filter((row) => keep.has(row.id)),
      collapsed
    );
  }

  /** A row's name, escaped, with the search marked wherever it occurs. */
  private nameHtml(label: string): string {
    if (!this.query || !this.matched.size) return esc(label);
    const lower = label.toLowerCase();
    let out = '';
    let from = 0;
    for (let at = lower.indexOf(this.query); at !== -1; at = lower.indexOf(this.query, from)) {
      out += `${esc(label.slice(from, at))}<mark class="${P}__match">${esc(label.slice(at, at + this.query.length))}</mark>`;
      from = at + this.query.length;
    }
    return out + esc(label.slice(from));
  }

  /** The date range to show, fitted to the frame; null shows the whole plan at the fixed scale. */
  setRange(range: GanttRange | null): void {
    this.range = range;
    this.render();
  }

  // ── The view ───────────────────────────────────────────────────────────────────────────────────────────────────

  /**
   * Whether a parent's planned window is drawn. Always on the live plan; in a draft (simplified 2026-10-21) only for the
   * parent selected or picked, or one whose window the draft changed — so changed parents read as one bracket, not a
   * stack of window, edit outline and bracket.
   */
  private windowShown(id: string): boolean {
    if (!this.draft || this.draft.ghosts === false) return true;
    return id === this.selectedId || this.picked.has(id) || this.draft.changedWindows.has(id);
  }

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

    const availablePlotPx = Math.max(0, this.frameWidth - this.shownOutlineWidth());
    // A chosen range is fitted to the frame (it never scrolls sideways); the whole plan keeps her fixed scale.
    const rangeStart = dayNumber(this.range?.start);
    const rangeEnd = dayNumber(this.range?.end);
    const zoomed = rangeStart !== null && rangeEnd !== null && rangeEnd >= rangeStart && availablePlotPx > 0;
    let window: UiVizGanttWindow | null;
    let plotWidth: number;
    if (zoomed) {
      const startYear = yearPositionOfDay(rangeStart!);
      const endYear = yearPositionOfDay(rangeEnd! + 1);
      plotWidth = Math.floor(availablePlotPx);
      window = { startYear, endYear, pxPerYear: plotWidth / (endYear - startYear) };
    } else {
      window = data
        ? { startYear: data.startYear, endYear: Math.max(data.endYear, data.startYear + Math.ceil(availablePlotPx / GANTT_PX_PER_YEAR)) }
        : null;
      const dataPx = data ? (data.endYear - data.startYear) * GANTT_PX_PER_YEAR : 0;
      plotWidth = Math.max(dataPx, Math.floor(availablePlotPx));
    }
    const pxPerYear = window?.pxPerYear ?? GANTT_PX_PER_YEAR;

    const years: GanttYearView[] = [];
    const ticks: GanttTickView[] = [];
    if (window) {
      const fullYear = pxPerYear >= FULL_YEAR_LABEL_MIN_PX_PER_YEAR;
      for (let year = Math.floor(window.startYear); year < window.endYear; year++) {
        years.push({ year, x: (year - window.startYear) * pxPerYear, label: fullYear ? String(year) : `’${String(year).slice(-2)}`, emphasis: year % EMPHASIS_EVERY_YEARS === 0 });
        const months = pxPerYear >= MONTH_TICKS_MIN_PX_PER_YEAR ? 1 : pxPerYear >= QUARTER_TICKS_MIN_PX_PER_YEAR ? 3 : 0;
        if (!months) continue;
        for (let month = months; month < 12; month += months) {
          const x = xOfDay(Date.UTC(year, month, 1) / 86_400_000, window);
          // Half a pixel either side absorbs rounding: a range starting on the 1st shows that month at x = 0, and the
          // month after its last day (at the right edge) has nothing to label.
          if (x < -0.5 || x > plotWidth - 1) continue;
          ticks.push({ x, label: months === 1 ? MONTH_LABELS[month] : `Q${month / 3 + 1}` });
        }
        const jan = xOfDay(Date.UTC(year, 0, 1) / 86_400_000, window);
        if (jan >= -0.5 && jan <= plotWidth - 1) ticks.push({ x: jan, label: months === 1 ? MONTH_LABELS[0] : 'Q1' });
      }
    }

    // The cascade a drag would make, per row (the study's preview, 2026-10-27): every finish-to-start successor, then
    // theirs, stopping at a Scheduled row, which holds its dates. Only while editing.
    const chains = new Map<string, string[]>();
    if (this.editable) {
      const rowById = new Map(this.rows.map((row) => [row.id, row]));
      const next = new Map<string, string[]>();
      for (const link of this.links) next.set(link.fromId, [...(next.get(link.fromId) ?? []), link.toId]);
      for (const row of this.rows) {
        if (row.kind === 'summary') continue;
        const seen = new Set<string>();
        const queue = [...(next.get(row.id) ?? [])];
        while (queue.length) {
          const id = queue.shift()!;
          if (seen.has(id) || id === row.id || rowById.get(id)?.scheduled) continue;
          seen.add(id);
          queue.push(...(next.get(id) ?? []));
        }
        if (seen.size) chains.set(row.id, [...seen]);
      }
    }

    const rowViews: GanttRowView[] = this.shownRows().map((row, index) => {
      const top = index * ROW_PX;
      const centre = top + ROW_PX / 2;
      const expanded = !this.collapsed.has(row.id);
      const schedule = schedules.get(row.id)!;
      const mark = schedule.span && window ? this.markFor(row, schedule.span, schedule.overrun, window, centre) : null;
      const band = row.kind === 'summary' && schedule.plannedWindow && window && this.windowShown(row.id) ? this.bandFor(schedule.plannedWindow, window, top) : null;
      const cutoff = SHOW_SCHEDULED_CUTOFF && schedule.scheduled && window ? this.cutoffFor(schedule, mark, window, centre) : null;
      const chain = chains.get(row.id);
      const tipRows = [
        ...this.tipRowsFor(mark, schedule),
        ...this.detailRowsFor(row),
        ...(this.rowNotes.get(row.id) ?? []),
        ...(chain && this.cascadePreview ? [{ label: 'Moves with it', value: `${chain.length} ${chain.length === 1 ? 'item' : 'items'}` }] : []),
      ];
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
    const fillerRows = this.query ? Math.max(0, MIN_FILTER_ROWS - rowViews.length) : 0;
    const plotHeight = (rowViews.length + fillerRows) * ROW_PX;

    const byId = new Map<string, GanttRowView>();
    for (const view of rowViews) if (view.mark) byId.set(view.row.id, view);
    const edgeX = (mark: GanttMarkView, edge: UiVizGanttEdge): number => (edge === 'start' ? mark.startEdge : mark.endEdge);
    const brokenLinks = new Set(this.conflicts.map((c) => `${c.fromId}>${c.toId}`));
    const conflictIds = new Set(this.conflicts.map((c) => c.toId));
    const linkViews: GanttView['linkViews'] = [];
    for (const link of this.links) {
      const from = byId.get(link.fromId);
      const to = byId.get(link.toId);
      if (!from?.mark || !to?.mark || from === to) continue;
      const edges = LINK_EDGES[link.type];
      const route = routeLink({ x: edgeX(from.mark, edges.from), y: from.centre }, edges.from, { x: edgeX(to.mark, edges.to), y: to.centre }, edges.to, ROW_PX);
      linkViews.push({ ...route, broken: brokenLinks.has(`${link.fromId}>${link.toId}`), fromId: link.fromId, toId: link.toId });
    }

    // The draft's baseline: each changed row's live-plan dates, where the row draws them.
    const baselineViews: GanttView['baselineViews'] = [];
    if (this.draft && this.draft.ghosts !== false && window) {
      for (const view of rowViews) {
        const live = this.draft.baseline.get(view.row.id);
        // Ghosts for task bars and milestones only: a parent's change shows through its children.
        if (!live || view.row.kind === 'summary') continue;
        const span = spanOf({ ...view.row, start: live.start, end: live.end });
        if (span && view.row.kind === 'milestone') {
          const cx = roundPx(xOfDay(span.startDay, window));
          const half = MILESTONE_SIZE_PX / 2;
          const c = view.centre;
          baselineViews.push({ id: view.row.id, diamond: `${cx},${c - half} ${cx + half},${c} ${cx},${c + half} ${cx - half},${c}`, rect: { x: cx - half, y: c - half, width: MILESTONE_SIZE_PX, height: MILESTONE_SIZE_PX } });
          continue;
        }
        if (span) {
          const x = xOfDay(span.startDay, window);
          const width = Math.max(BAR_MIN_WIDTH_PX, xOfDay(span.endDay + 1, window) - x);
          baselineViews.push({ id: view.row.id, diamond: null, rect: { x: roundPx(x), y: view.centre - BAR_HEIGHT_PX / 2, width: roundPx(width), height: BAR_HEIGHT_PX } });
        }
      }
    }

    // The drafting concept (2026-10-27): each moved task bar or milestone measured in its own lane, through the space it
    // left, from Live's edge to the draft's: a later move from the old start to the new one, an earlier move from the new
    // end to the old one. A resize that keeps its start has no free lane and is left to the readout. The line rides above
    // the row's centre, where a dependency comes in, and the edit's delta tag sits at its outer end; with no line, the tag
    // sits past the mark's end, raised the same way clear of the link that leaves it.
    const dimensionViews: GanttView['dimensionViews'] = [];
    const deltaViews: GanttView['deltaViews'] = [];
    if (this.draft && window) {
      const raise = Math.round(BAR_HEIGHT_PX * 0.35);
      for (const view of rowViews) {
        const mark = view.mark;
        if (!mark || mark.kind === 'summary') continue;
        const live = this.draft.baseline.get(view.row.id);
        const now = spanOf(view.row);
        const was = live ? spanOf({ ...view.row, start: live.start, end: live.end }) : null;
        const edit = this.draft.edits?.get(view.row.id);
        const y = view.centre - raise;
        let dim: GanttView['dimensionViews'][number] | null = null;
        if (this.draft.measure && now && was) {
          const startShift = now.startDay - was.startDay;
          const endShift = now.endDay - was.endDay;
          let span: [number, number, number] | null = null;
          if (mark.kind === 'milestone') {
            const half = MILESTONE_SIZE_PX / 2;
            const a = xOfDay(was.startDay, window);
            const b = xOfDay(now.startDay, window);
            if (startShift) span = startShift > 0 ? [a, b - half, startShift] : [b + half, a, startShift];
          } else if (startShift > 0) span = [xOfDay(was.startDay, window), xOfDay(now.startDay, window), startShift];
          else if (startShift < 0) span = [xOfDay(now.endDay + 1, window), xOfDay(was.endDay + 1, window), endShift || startShift];
          if (span && span[1] - span[0] >= 2) {
            const [x1, x2, days] = span;
            const label = shiftLabelOf(days);
            const labelW = label.length * DIMENSION_CHAR_PX + 2 * DIMENSION_LABEL_PAD_PX;
            // The label sits in a break in the line when it fits, else just outside the line's free end.
            const labelX = x2 - x1 >= labelW + 12 ? (x1 + x2) / 2 : days > 0 ? x1 - labelW / 2 - 4 : x2 + labelW / 2 + 4;
            dim = { id: view.row.id, x1: roundPx(x1), x2: roundPx(x2), y, label, labelX: roundPx(labelX), later: days > 0 };
            dimensionViews.push(dim);
          }
        }
        if (edit) {
          // Left of the measurement for a later move, right of it for an earlier one: the group stays in the lane.
          const labelHalf = dim ? (dim.label.length * DIMENSION_CHAR_PX) / 2 + DIMENSION_LABEL_PAD_PX : 0;
          const x = !dim
            ? (mark.kind === 'milestone' ? xOfDay(now?.startDay ?? 0, window) + MILESTONE_SIZE_PX / 2 : mark.x + mark.width) + DELTA_GAP_PX
            : dim.later
              ? Math.min(dim.x1, dim.labelX - labelHalf) - DELTA_GAP_PX - DELTA_W_PX
              : Math.max(dim.x2, dim.labelX + labelHalf) + DELTA_GAP_PX;
          deltaViews.push({ id: view.row.id, x: roundPx(x), y, edit });
        }
      }
    }

    // Graph paper (the drafting concept): month columns, split nearer square when zoomed in, and each row ruled in quarters.
    let paperPath: string | null = null;
    if (this.paper && window) {
      const parts: string[] = [];
      const monthPx = pxPerYear / 12;
      const split = Math.max(1, Math.round(monthPx / PAPER_CELL_PX));
      const plotH = rowViews.length * ROW_PX;
      for (let year = Math.floor(window.startYear); year < window.endYear; year++) {
        for (let month = 0; month < 12; month++) {
          const from = Date.UTC(year, month, 1) / 86_400_000;
          const to = Date.UTC(year, month + 1, 1) / 86_400_000;
          for (let k = 0; k < split; k++) {
            if (month === 0 && k === 0) continue; // the year line is drawn by the grid
            const x = roundPx(xOfDay(from + ((to - from) * k) / split, window)) + 0.5;
            if (x < 0 || x > plotWidth) continue;
            parts.push(`M${x} 0V${plotH}`);
          }
        }
      }
      for (let i = 0; i < rowViews.length; i++) {
        for (let k = 1; k < 4; k++) parts.push(`M0 ${roundPx(i * ROW_PX + (ROW_PX * k) / 4) + 0.5}H${plotWidth}`);
      }
      paperPath = parts.join('');
    }

    let todayX: number | null = null;
    const todayDay = dayNumber(this.today);
    if (window && todayDay !== null) {
      const x = xOfDay(todayDay, window);
      todayX = x < 0 || x > plotWidth ? null : x - TODAY_LINE_PX / 2;
    }

    let landmarkViews: GanttLandmarkView[] = [];
    if (window) {
      const placed = datedLandmarks
        .map(({ landmark, span }) => {
          const lineX = Math.round(xOfDay(span.startDay, window)) + LANDMARK_LINE_PX / 2;
          const tagWidth = Math.min(LANDMARK_TAG_MAX_PX, landmark.label.length * LANDMARK_TAG_CHAR_PX + LANDMARK_TAG_CHROME_PX);
          const half = tagWidth / 2;
          const tagCentre = Math.min(Math.max(lineX, half), Math.max(half, plotWidth - half));
          return { landmark, span, lineX, tagWidth, tagCentre };
        })
        // Zoomed, a landmark outside the range is left out: clamped to the plot's edge, its tag would pile up there.
        .filter(({ lineX }) => !zoomed || (lineX >= 0 && lineX <= plotWidth));
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
      const broken = this.conflicts.length === 0 ? '' : `, ${plural(this.conflicts.length, LABEL_CONFLICT_ONE, LABEL_CONFLICT_MANY)}`;
      if (late.length === 0) return `${summary}${broken}`;
      const pastCutoff = late.filter((schedule) => schedule.scheduled).length;
      const overrunning = `${summary}, ${plural(late.length, LABEL_OVERRUN_ONE, LABEL_OVERRUN_MANY)}`;
      return `${pastCutoff === 0 ? overrunning : `${overrunning}, ${pastCutoff} ${LABEL_SCHEDULED_OF_THEM} ${LABEL_SCHEDULED_CUTOFF}`}${broken}`;
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
      ticks,
      pxPerYear,
      rowViews,
      fillerRows,
      plotHeight,
      landmarkViews,
      landmarkBandPx,
      // A title block needs two lines in the corner: the header grows to fit them on a short (compact) axis.
      axisPx: Math.max(AXIS_PX + landmarkBandPx, this.titleBlock ? TITLED_AXIS_MIN_PX : 0),
      linkViews,
      todayX,
      plotLabel,
      editTargets,
      windowEditViews,
      baselineViews,
      dimensionViews,
      deltaViews,
      paperPath,
      conflictIds,
      chains,
      chainIds: new Set(),
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
      left: this.shownOutlineWidth() + Math.max(0, ghost.x),
      top: v.axisPx + (above ? primary.top : primary.top + ROW_PX),
      above,
      dates: this.rangeLabel({ startDay: first, endDay: last }),
      dependents: !this.countsDependents ? null : count === null ? DEPENDENTS_PENDING : count > 0 ? `${DEPENDENTS_PREFIX} ${plural(count, DEPENDENT_ONE, DEPENDENT_MANY)}` : null,
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
    if (this.rows.length === 0 || (this.query && this.matched.size === 0)) {
      // RENDERS NOTHING WITH NO ROWS (or none matching the search): the page's own empty state owns that case.
      this.frame.hidden = true;
      this.splitter.hidden = true;
      this.frame.replaceChildren();
      this.v = null;
      this.hideTip();
      return;
    }
    this.frame.hidden = false;
    this.placeSplitter();
    const v = (this.v = this.view());
    const pickedIds = new Set(this.pickedRowIds());
    const pickedTops = pickedIds.size === 0 ? [] : v.rowViews.filter((view) => pickedIds.has(view.row.id)).map((view) => view.top);
    const selectedTop = this.selectedId === null ? null : (v.rowViews.find((view) => view.row.id === this.selectedId)?.top ?? null);

    const axis = `
      <div class="${P}__axis" style="height:${v.axisPx}px" aria-hidden="true">
        ${v.years
          .map((year) => {
            // A year that starts left of a zoomed window keeps its label at the plot's left edge.
            const left = Math.max(0, year.x);
            const width = v.pxPerYear + Math.min(0, year.x);
            const classes = [`${P}__year`, year.emphasis ? `${P}__year--emphasis` : '', year.x < 0 ? `${P}__year--clipped` : '', v.ticks.length ? `${P}__year--top` : ''].filter(Boolean).join(' ');
            // A label with no room before the plot's right edge is left off rather than cut ("202…"); its line stays.
            const label = v.plotWidth - left < AXIS_LABEL_ROOM_PX ? '' : `<span class="${P}__year-label">${year.label}</span>`;
            return `<span class="${classes}" style="left:${left}px;width:${width}px;inset-block-end:${v.landmarkBandPx}px">${label}</span>`;
          })
          .join('')}
        ${v.ticks
          .map(
            (tick) =>
              `<span class="${P}__tick" style="left:${tick.x}px;inset-block-end:${v.landmarkBandPx}px">${v.plotWidth - tick.x < AXIS_LABEL_ROOM_PX ? '' : `<span class="${P}__tick-label">${tick.label}</span>`}</span>`
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

    // Row markers, lifted to the nearest visible row when theirs is inside a collapsed parent.
    const visibleIds = new Set(v.rowViews.map((view) => view.row.id));
    const parentOf = new Map(this.rows.map((row) => [row.id, row.parentId]));
    const badges = new Map<string, string[]>();
    for (const [id, text] of this.rowBadges) {
      let at: string | null | undefined = id;
      while (at && !visibleIds.has(at)) at = parentOf.get(at);
      if (at) badges.set(at, [...(badges.get(at) ?? []), text]);
    }

    const outline = `<ul class="${P}__outline">${v.rowViews
      .map((view) => {
        const classes = [`${P}__item`];
        if (view.tier === 0) classes.push(`${P}__item--tier-0`);
        if (view.tier === 1) classes.push(`${P}__item--tier-1`);
        if (view.row.id === this.selectedId) classes.push(`${P}__item--selected`);
        if (pickedIds.has(view.row.id)) classes.push(`${P}__item--picked`);
        return `<li class="${classes.join(' ')}" data-row-id="${esc(view.row.id)}" style="height:${ROW_PX}px;--bcn-plan-gantt-depth:${view.row.depth}" aria-level="${view.row.depth + 1}">
          ${
            view.row.hasChildren
              ? `<span data-caret-slot></span>`
              : // A milestone isn't a stretch of work: the chart's diamond hangs in the caret's place, left of its tag, so
                // the "Milestone" tag lines up with the level tags of the rows around it.
                `<span class="${P}__caret-spacer">${view.row.kind === 'milestone' ? `<svg class="${P}__milestone-icon" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><polygon points="5,0.5 9.5,5 5,9.5 0.5,5"/></svg>` : ''}</span>`
          }
          <button type="button" class="${P}__select" data-select="${esc(view.row.id)}"${view.row.id === this.selectedId ? ' aria-current="true"' : ''}${view.summaryId ? ` aria-describedby="${view.summaryId}"` : ''}>
            ${view.row.tag ? `<span class="${P}__tag">${esc(view.row.tag)}</span>` : ''}
            <span class="${P}__name" title="${esc(view.row.label)}">${this.nameHtml(view.row.label)}</span>
          </button>
          ${badges.has(view.row.id) && this.templates.badge ? `<span data-badge-slot></span>` : ''}
          ${this.options.rowActions ? `<div class="${P}__actions"></div>` : ''}
          ${
            this.rowDeltas
              ? // In a draft's comparison the column shows each changed row's shift instead of its budget.
                `<span class="${P}__budget ${P}__delta${this.rowDeltas.get(view.row.id)?.own ? ` ${P}__delta--own` : ''}">${esc(this.rowDeltas.get(view.row.id)?.text ?? '')}</span>`
              : `<span class="${P}__budget"${typeof view.row.budget === 'number' ? ` title="${esc(BUDGET_FULL.format(view.row.budget))}"` : ''}>${typeof view.row.budget === 'number' ? esc(BUDGET_COMPACT.format(view.row.budget)) : ''}</span>`
          }
          ${view.summaryId ? `<span class="${P}__schedule-summary" id="${view.summaryId}">${esc(view.summary)}</span>` : ''}
        </li>`;
      })
      .join('')}${`<li class="${P}__item ${P}__item--filler" aria-hidden="true" style="height:${ROW_PX}px"></li>`.repeat(v.fillerRows)}</ul>`;

    const W = v.plotWidth;
    const H = v.plotHeight;
    const r = MARK_RADIUS_PX;
    const svg: string[] = [];
    // Tactile (revised 2026-10-27): the bars' fill, a few percent lighter at the top than at the bottom.
    if (density !== 'compact') {
      svg.push(`<defs><linearGradient id="${this.fillId}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" class="${P}__fill-top"/><stop offset="1" class="${P}__fill-bottom"/></linearGradient></defs>`);
    }
    for (const view of v.rowViews) {
      if (view.tier < 2) svg.push(`<rect class="${P}__band ${P}__band--tier-${view.tier}" x="0" y="${view.top}" width="${W}" height="${ROW_PX}"/>`);
    }
    if (selectedTop !== null) svg.push(`<rect class="${P}__selected" x="0" y="${selectedTop}" width="${W}" height="${ROW_PX}"/>`);
    for (const top of pickedTops) svg.push(`<rect class="${P}__picked" x="0" y="${top}" width="${W}" height="${ROW_PX}"/>`);
    if (v.paperPath) svg.push(`<path class="${P}__paper" d="${v.paperPath}"/>`);
    if (this.stamp) {
      // The stamp: one line of text on a tilted tile, repeated across the plot under the marks.
      const id = `${this.fillId}-stamp`;
      svg.push(
        `<defs><pattern id="${id}" width="560" height="220" patternUnits="userSpaceOnUse" patternTransform="rotate(-14)"><text class="${P}__stamp-text" x="20" y="120">${esc(this.stamp)}</text></pattern></defs>` +
          `<rect class="${P}__stamp" x="0" y="0" width="${W}" height="${H}" fill="url(#${id})"/>`
      );
    }
    for (const tick of v.ticks) svg.push(`<line class="${P}__grid ${P}__grid--minor" x1="${roundPx(tick.x) + 0.5}" x2="${roundPx(tick.x) + 0.5}" y1="0" y2="${H}"/>`);
    for (const year of v.years) {
      if (year.x < 0) continue;
      svg.push(`<line class="${P}__grid${year.emphasis ? ` ${P}__grid--emphasis` : ''}" x1="${roundPx(year.x) + 0.5}" x2="${roundPx(year.x) + 0.5}" y1="0" y2="${H}"/>`);
    }
    for (const view of v.rowViews) svg.push(`<line class="${P}__rule" x1="0" x2="${W}" y1="${view.top + ROW_PX - 0.5}" y2="${view.top + ROW_PX - 0.5}"/>`);
    for (let i = 0; i < v.fillerRows; i++) {
      const y = (v.rowViews.length + i + 1) * ROW_PX - 0.5;
      svg.push(`<line class="${P}__rule" x1="0" x2="${W}" y1="${y}" y2="${y}"/>`);
    }
    for (const view of v.landmarkViews) svg.push(`<line class="${P}__landmark" data-landmark-id="${esc(view.landmark.id)}" x1="${view.lineX}" x2="${view.lineX}" y1="0" y2="${H}"/>`);
    if (v.todayX !== null) svg.push(`<rect class="${P}__today-line" x="${v.todayX}" y="0" width="${TODAY_LINE_PX}" height="${H}"/>`);
    for (const view of v.rowViews) {
      const band = view.band;
      if (band) svg.push(`<rect class="${P}__window${view.scheduled ? '' : ` ${P}__window--estimated`}" data-row-id="${esc(view.row.id)}" x="${band.x}" y="${band.y}" width="${band.width}" height="${band.height}" rx="${r}"/>`);
    }
    for (const base of v.baselineViews) {
      svg.push(
        base.diamond
          ? `<polygon class="${P}__baseline" data-row-id="${esc(base.id)}" points="${base.diamond}"/>`
          : `<rect class="${P}__baseline" data-row-id="${esc(base.id)}" x="${base.rect.x + 0.5}" y="${base.rect.y + 0.5}" width="${Math.max(0, base.rect.width - 1)}" height="${base.rect.height - 1}" rx="${r}"/>`
      );
    }
    for (const view of v.rowViews) {
      const mark = view.mark;
      if (!mark) continue;
      const classes = [`${P}__mark`];
      if (pickedIds.has(view.row.id)) classes.push(`${P}__mark--picked`);
      const draftMark = this.draft?.marks.get(view.row.id) ?? null;
      if (draftMark) classes.push(`${P}__mark--draft-${draftMark}`);
      if (v.conflictIds.has(view.row.id)) classes.push(`${P}__mark--conflict`);
      if (view.scheduled) classes.push(`${P}__mark--scheduled`);
      const health = this.rowHealth.get(view.row.id);
      if (health) classes.push(`${P}__mark--health-${health}`);
      if (v.chainIds.has(view.row.id)) classes.push(`${P}__mark--chain`);
      const overrunClass = `${P}__overrun${view.scheduled ? ` ${P}__overrun--scheduled` : ''}${mark.kind === 'summary' ? ` ${P}__overrun--borderless` : ''}`;
      const o = mark.overrunRect;
      const overrun = !o
        ? ''
        : mark.kind === 'summary'
          ? // A parent's overrun runs to its end: square on the left (it starts inside the bracket), round at the
            // top right, square at the bottom right where the end tick hangs.
            `<path class="${overrunClass}" d="M${o.x},${o.y} H${o.x + o.width - r} Q${o.x + o.width},${o.y} ${o.x + o.width},${o.y + r} V${o.y + o.height} H${o.x} Z"/>`
          : // A bar's overrun runs to its end, so it takes the bar's end shape on the right and starts square.
            `<path class="${overrunClass}" d="${rightRoundedPath(o.x, o.y, o.width, o.height, view.scheduled ? 0 : BAR_ESTIMATED_RADIUS_PX)}"/>`;
      let body = '';
      if (mark.kind === 'bar') {
        // Scheduled: square, hard corners. Estimated: rounded ones.
        const barRadius = view.scheduled ? 0 : BAR_ESTIMATED_RADIUS_PX;
        body = `<rect class="${P}__bar" x="${mark.x + 0.5}" y="${mark.y + 0.5}" width="${mark.width - 1}" height="${mark.height - 1}" rx="${barRadius}"/>${overrun}`;
        // Scheduled marks for the study (2026-10-27): a pin at the start and a cap at each end, drawn for every bar and
        // shown by the host's data-sched variant only.
        if (view.scheduled) {
          const cy = mark.y + mark.height / 2;
          body += `<circle class="${P}__sched-pin" cx="${mark.x + Math.min(9, mark.width / 2)}" cy="${cy}" r="${Math.max(2.5, mark.height * 0.14)}"/>`;
          body += `<rect class="${P}__sched-cap" x="${mark.x}" y="${mark.y - 2}" width="3" height="${mark.height + 4}"/><rect class="${P}__sched-cap" x="${mark.x + mark.width - 3}" y="${mark.y - 2}" width="3" height="${mark.height + 4}"/>`;
        }
        // Solid marks (data-bars, the plan page) draw their own fills: no gradient, no grips.
        if (density !== 'compact' && this.host.dataset.feel !== 'print' && !this.host.dataset.bars) body = body.replace(`class="${P}__bar"`, `class="${P}__bar" style="fill:url(#${this.fillId})"`) + tactileBarDetail(mark.x, mark.y, mark.width, mark.height);
      } else if (mark.kind === 'summary') {
        body =
          // Round at the top, square at the bottom, so the end ticks hang straight off the corners.
          `<path class="${P}__summary ${P}__summary--tier-${view.tier}" d="${topRoundedPath(mark.x, mark.y, mark.width, mark.height, r)}"/>${overrun}` +
          mark.ticks
            .map((tick) => {
              // An end in the overrun takes the overrun's colour (amber, or red past a Scheduled window).
              const overrunClass = tick.overrun ? ` ${P}__summary-tick--overrun${view.scheduled ? ` ${P}__summary-tick--overrun-scheduled` : ''}` : '';
              return `<polygon class="${P}__summary-tick ${P}__summary-tick--tier-${view.tier}${overrunClass}" points="${tick.points}"/>`;
            })
            .join('');
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
    // The drafting concept's measurements: a dimension line with slash ticks at both ends and its shift in a break in the
    // line, then each row's delta tag (the edit that last moved it), past the mark's end.
    for (const dim of v.dimensionViews) {
      const t = 3.5;
      svg.push(
        `<g class="${P}__dimension" data-row-id="${esc(dim.id)}"><path class="${P}__dimension-line" d="M${dim.x1} ${dim.y}H${dim.x2}M${dim.x1 - t} ${dim.y + t}L${dim.x1 + t} ${dim.y - t}M${dim.x2 - t} ${dim.y + t}L${dim.x2 + t} ${dim.y - t}M${dim.x1} ${dim.y - 4.5}V${dim.y + 4.5}M${dim.x2} ${dim.y - 4.5}V${dim.y + 4.5}"/>` +
          `<text class="${P}__dimension-label" x="${dim.labelX}" y="${dim.y}" text-anchor="middle" dominant-baseline="central">${esc(dim.label)}</text></g>`
      );
    }
    for (const delta of v.deltaViews) {
      const w = DELTA_W_PX;
      const h = 15;
      svg.push(
        `<g class="${P}__delta" data-row-id="${esc(delta.id)}"><polygon class="${P}__delta-mark" points="${delta.x},${delta.y + h / 2} ${delta.x + w / 2},${delta.y - h / 2} ${delta.x + w},${delta.y + h / 2}"/>` +
          `<text class="${P}__delta-label" x="${delta.x + w / 2}" y="${delta.y + 2.5}" text-anchor="middle" dominant-baseline="central">${delta.edit}</text></g>`
      );
    }
    for (const edit of v.windowEditViews) {
      svg.push(
        `<g class="${P}__window-edit" data-row-id="${esc(edit.id)}"><rect class="${P}__window-edit-band" x="${edit.band.x}" y="${edit.band.y}" width="${edit.band.width}" height="${edit.band.height}" rx="${r}"/>${edit.handles
          .map((h) => `<rect class="${P}__window-handle" x="${h.x}" y="${h.y}" width="${h.width}" height="${h.height}"/>`)
          .join('')}</g>`
      );
    }
    // A dependency is an object (new, 2026-10-27): with onLinkSelect, each link carries a wide invisible hit line, drawn
    // over the rows' hit targets but trimmed 12px at each end (after render), so a bar's end and its resize grip still
    // win where the link leaves and meets it.
    const linkHit = (link: GanttView['linkViews'][number]) =>
      this.options.onLinkSelect ? `<path class="${P}__link-hit" data-link-from="${esc(link.fromId)}" data-link-to="${esc(link.toId)}" d="${link.path}"/>` : '';
    for (const link of v.linkViews) svg.push(`<g class="${P}__link${link.broken ? ` ${P}__link--broken` : ''}" data-link-key="${esc(link.fromId)}>${esc(link.toId)}"><path class="${P}__link-line" d="${link.path}"/><polygon class="${P}__link-head" points="${link.head}"/></g>`);
    svg.push(`<g data-layer="ghosts"></g>`);
    for (const view of v.landmarkViews) svg.push(`<rect class="${P}__landmark-hit" data-landmark-id="${esc(view.landmark.id)}" x="${view.hitX}" y="0" width="${view.hitWidth}" height="${H}"/>`);
    for (const view of v.rowViews) {
      const hit = view.hit;
      if (!hit) continue;
      svg.push(`<rect class="${P}__hit${this.editable ? ` ${P}__hit--editable` : ''}" data-hit="${esc(view.row.id)}" x="${hit.x}" y="${view.top}" width="${hit.width}" height="${ROW_PX}"/>`);
    }
    if (this.options.onLinkSelect) for (const link of v.linkViews) svg.push(linkHit(link));

    this.frame.innerHTML = `
      <div class="${P}__canvas" style="grid-template-columns:${this.shownOutlineWidth()}px ${W}px">
        ${
          this.titleBlock
            ? `<div class="${P}__corner ${P}__corner--titled" style="height:${v.axisPx}px"><div class="${P}__title-block"><span class="${P}__title-status">${esc(this.titleBlock.status)}</span>${this.titleBlock.facts.map((f) => `<span class="${P}__title-fact">${esc(f)}</span>`).join('')}</div><div class="${P}__corner-row"><span class="${P}__corner-heading">${esc(this.outlineHeading)}</span><span class="${P}__corner-budget">${this.rowDeltas ? CHANGE_HEADING : BUDGET_HEADING}</span></div></div>`
            : `<div class="${P}__corner" style="height:${v.axisPx}px"><span class="${P}__corner-heading">${esc(this.outlineHeading)}</span><span class="${P}__corner-budget">${this.rowDeltas ? CHANGE_HEADING : BUDGET_HEADING}</span></div>`
        }
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
      const badgeSlot = item.querySelector('[data-badge-slot]');
      if (badgeSlot && this.templates.badge) {
        const texts = badges.get(view.row.id)!;
        const badge = this.templates.badge.content.firstElementChild!.cloneNode(true) as HTMLElement;
        badge.classList.add(`${P}__badge`);
        const label = texts.length > 1 ? `${texts[0]} (${texts.length})` : texts[0];
        badge.querySelector('.esa-badge__text')!.textContent = label;
        badge.title = view.row.hasChildren && texts.length ? `${label}: inside ${view.row.label}` : label;
        badgeSlot.replaceWith(badge);
      }
      const actions = item.querySelector(`.${P}__actions`);
      if (actions && this.options.rowActions) {
        const node = this.options.rowActions(view.row);
        if (node) actions.append(node);
      }
    }
    this.trimLinkHits();
    this.renderOverlay();
    this.renderTip();
  }

  /** Each link's hit line leaves 12px free at both ends, by dashing it: the bar ends there keep the pointer. */
  private trimLinkHits(): void {
    const TRIM = 12;
    this.frame.querySelectorAll<SVGPathElement>(`.${P}__link-hit`).forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length > TRIM * 2 + 4 ? `0 ${TRIM} ${length - TRIM * 2} ${TRIM}` : '0 9999';
    });
  }

  /** The drag-and-hover layer: what changes on every pointer move without rebuilding the canvas. */
  private renderOverlay(): void {
    const v = this.v;
    if (!v) return;
    const svg = this.frame.querySelector<SVGSVGElement>(`.${P}__plot`)!;
    const ghosts = this.ghostViews(v);
    const layer = svg.querySelector('[data-layer="ghosts"]')!;
    // The drafting concept: while a bar is carried, construction lines drop from its ends through the whole plot, so it
    // can be squared up against the rows above and below.
    const primaryGhost = this.draft?.measure ? ghosts.find((g) => g.id === (this.dragging?.primaryId ?? this.press?.primaryId)) : undefined;
    const construct = primaryGhost && !primaryGhost.diamond
      ? [primaryGhost.x, primaryGhost.x + primaryGhost.width].map((x) => `<line class="${P}__construct" x1="${roundPx(x) + 0.5}" x2="${roundPx(x) + 0.5}" y1="0" y2="${v.plotHeight}"/>`).join('')
      : '';
    layer.innerHTML = construct + ghosts
      .map((ghost) =>
        ghost.diamond
          ? `<polygon class="${P}__ghost" data-row-id="${esc(ghost.id)}" points="${ghost.diamond}"/>`
          : `<rect class="${P}__ghost" data-row-id="${esc(ghost.id)}" x="${ghost.x}" y="${ghost.y}" width="${ghost.width}" height="${ghost.height}" rx="${MARK_RADIUS_PX}"${density !== 'compact' ? ` style="fill:url(#${this.fillId})"` : ''}/>`
      )
      .join('');

    const previewIds = new Set(this.preview()?.rowIds ?? []);
    const hoveredRowId = this.hoveredRow()?.row.id ?? null;
    // The cascade preview: what a drag of the hovered (or pressed, or carried) bar moves with it.
    const chainRoot = this.cascadePreview ? (this.dragging?.primaryId ?? this.press?.primaryId ?? hoveredRowId) : null;
    const chainIds = new Set(chainRoot ? (v.chains.get(chainRoot) ?? []) : []);
    svg.classList.toggle(`${P}__plot--chaining`, chainIds.size > 0);
    this.frame.querySelectorAll<HTMLElement>(`.${P}__item`).forEach((li) => {
      li.classList.toggle(`${P}__item--chain`, chainIds.has(li.dataset.rowId!));
      li.classList.toggle(`${P}__item--chain-root`, chainIds.size > 0 && li.dataset.rowId === chainRoot);
    });
    svg.querySelectorAll<SVGGElement>(`.${P}__link`).forEach((g) => {
      const [from, to] = (g.dataset.linkKey ?? '').split('>');
      g.classList.toggle(`${P}__link--chain`, chainIds.has(to) && (chainIds.has(from) || from === chainRoot));
    });
    svg.querySelectorAll<SVGGElement>(`.${P}__mark`).forEach((g) => {
      const id = g.dataset.rowId!;
      g.classList.toggle(`${P}__mark--previewed`, previewIds.has(id));
      g.classList.toggle(`${P}__mark--hovered`, id === hoveredRowId);
      g.classList.toggle(`${P}__mark--chain`, chainIds.has(id));
      g.classList.toggle(`${P}__mark--chain-root`, chainIds.size > 0 && id === chainRoot);
      g.classList.toggle(`${P}__mark--pressed`, !!this.press && !this.press.active && this.press.primaryId === id);
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
    // The facts as a two-column list (label | value, a quiet note set apart after the value), then any warnings under
    // a rule, each with its icon and colour.
    const facts = rows.filter((line) => !line.tone);
    const warnings = rows.filter((line) => line.tone);
    this.tip.innerHTML = `<div class="${P}-tip__panel"><span class="${P}-tip__title">${esc(title)}</span>${
      facts.length
        ? `<dl class="${P}-tip__facts">${facts
            .map(
              (line) =>
                `<dt class="${P}-tip__label">${esc(line.label)}</dt><dd class="${P}-tip__value${line.clamp ? ` ${P}-tip__value--clamp` : ''}">${esc(line.value)}${
                  line.note ? `<span class="${P}-tip__note">${esc(line.note)}</span>` : ''
                }</dd>`
            )
            .join('')}</dl>`
        : ''
    }${
      warnings.length
        ? `<ul class="${P}-tip__warnings">${warnings
            .map((line) => `<li class="${P}-tip__warning ${P}-tip__warning--${line.tone}">${TIP_WARNING_ICON}<span>${esc(line.value)}</span></li>`)
            .join('')}</ul>`
        : ''
    }</div>`;
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
      const linkHit = target.closest<SVGPathElement>(`.${P}__link-hit`);
      if (linkHit) {
        const me = e as MouseEvent;
        return this.options.onLinkSelect?.({ fromId: linkHit.dataset.linkFrom!, toId: linkHit.dataset.linkTo! }, { x: me.clientX, y: me.clientY });
      }
      const hit = hitOf(e);
      if (hit) {
        if (this.editable) this.onEditClick(hit.dataset.hit!, e as MouseEvent);
        else this.options.onRowSelect?.(hit.dataset.hit!);
      }
    });

    // mouseenter / mouseleave: the hit targets and landmark marks are leaves, so over / out on them is enter / leave.
    f.addEventListener('mouseover', (e) => {
      // A selectable link darkens while its hit line is under the pointer.
      const overLink = (e.target as Element).closest?.(`.${P}__link-hit`) as SVGPathElement | null;
      const key = overLink ? `${overLink.dataset.linkFrom}>${overLink.dataset.linkTo}` : null;
      f.querySelectorAll<SVGGElement>(`.${P}__link`).forEach((g) => g.classList.toggle(`${P}__link--hovered`, g.dataset.linkKey === key));
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

  // ── The outline's divider ──────────────────────────────────────────────────────────────────────────────────────

  private maxOutlineWidth(): number {
    return Math.max(OUTLINE_MIN_PX, this.frame.clientWidth - OUTLINE_MIN_PLOT_PX);
  }

  /** The width the outline draws at: the chosen one, narrowed when the frame is too small to keep a plot beside it. */
  private shownOutlineWidth(): number {
    return this.frame.clientWidth ? Math.min(this.outlineWidth, this.maxOutlineWidth()) : this.outlineWidth;
  }

  private placeSplitter(): void {
    const width = this.shownOutlineWidth();
    this.splitter.hidden = false;
    // The frame's own border sits left of the outline.
    this.splitter.style.left = `${this.frame.clientLeft + width}px`;
    this.splitter.setAttribute('aria-valuemin', String(OUTLINE_MIN_PX));
    this.splitter.setAttribute('aria-valuemax', String(Math.round(this.maxOutlineWidth())));
    this.splitter.setAttribute('aria-valuenow', String(Math.round(width)));
  }

  private setOutlineWidth(width: number, remember: boolean): void {
    const next = Math.round(Math.min(Math.max(width, OUTLINE_MIN_PX), this.maxOutlineWidth()));
    if (next !== this.outlineWidth) {
      this.outlineWidth = next;
      this.render();
    }
    if (remember) writeOutlineWidth(this.outlineWidth);
  }

  private wireSplitter(): void {
    const el = this.splitter;
    let drag: { pointerId: number; startX: number; startWidth: number } | null = null;
    let frame = 0;
    el.addEventListener('pointerdown', (event) => {
      if (event.button !== 0) return;
      event.preventDefault();
      el.setPointerCapture(event.pointerId);
      drag = { pointerId: event.pointerId, startX: event.clientX, startWidth: this.outlineWidth };
      el.classList.add(`${P}__splitter--dragging`);
      this.hideTip();
    });
    el.addEventListener('pointermove', (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      const width = drag.startWidth + event.clientX - drag.startX;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => this.setOutlineWidth(width, false));
    });
    const end = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      drag = null;
      el.classList.remove(`${P}__splitter--dragging`);
      if (el.hasPointerCapture(event.pointerId)) el.releasePointerCapture(event.pointerId);
      writeOutlineWidth(this.outlineWidth);
    };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
    el.addEventListener('dblclick', () => this.setOutlineWidth(OUTLINE_PX, true));
    el.addEventListener('keydown', (event) => {
      const step = event.shiftKey ? OUTLINE_KEY_STEP_PX * 4 : OUTLINE_KEY_STEP_PX;
      if (event.key === 'ArrowLeft') this.setOutlineWidth(this.outlineWidth - step, true);
      else if (event.key === 'ArrowRight') this.setOutlineWidth(this.outlineWidth + step, true);
      else if (event.key === 'Home') this.setOutlineWidth(OUTLINE_MIN_PX, true);
      else if (event.key === 'End') this.setOutlineWidth(this.maxOutlineWidth(), true);
      else return;
      event.preventDefault();
    });
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

  /** A row's Budget (the whole figure) and Notes (clamped) for the readout; none when the element has neither. */
  private detailRowsFor(row: UiVizGanttRow): PlanGanttTipRow[] {
    const rows: PlanGanttTipRow[] = [];
    if (typeof row.budget === 'number') rows.push({ label: TIP_BUDGET, value: BUDGET_FULL.format(row.budget) });
    if (row.notes) rows.push({ label: TIP_NOTES, value: row.notes, clamp: true });
    return rows;
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
          rows.push({ label: TIP_OVERRUN, value: `${OVERRUN_PREFIX} ${plural(late, 'day', 'days')} ${suffix}`, tone: schedule.scheduled ? 'danger' : 'warning' });
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
    const summary = row.kind === 'summary';
    // A parent bracket has no edge, so it fills its whole box; a bar's 1px edge is drawn half a pixel in.
    const inset = summary ? 0 : 0.5;
    const bodyLeft = x + inset;
    const bodyRight = x + width - inset;
    const overrunLeft = overrun ? Math.max(bodyLeft, xOfDay(overrun.startDay, window)) : bodyRight;
    const overrunRect = bodyRight > overrunLeft ? { x: roundPx(overrunLeft), y: y + inset, width: roundPx(bodyRight - overrunLeft), height: height - 2 * inset } : null;
    const startInOverrun = overrunRect !== null && overrunRect.x <= bodyLeft + 0.5;
    const endInOverrun = overrunRect !== null;
    // Each cap: a small right triangle off a corner, its square side on the end, its other side along the edge.
    const cap = (cornerX: number, inward: 1 | -1, edgeY: number, outward: 1 | -1) => {
      const y0 = roundPx(edgeY - outward * TICK_OVERLAP_PX);
      const y1 = roundPx(edgeY + outward * SUMMARY_TICK_DROP_PX);
      return `${roundPx(cornerX)},${y0} ${roundPx(cornerX)},${y1} ${roundPx(cornerX + inward * SUMMARY_TICK_WIDTH_PX)},${y0}`;
    };
    const ticks: { points: string; overrun: boolean }[] = [];
    if (summary) {
      ticks.push({ points: cap(x, 1, y + height, 1), overrun: startInOverrun }, { points: cap(x + width, -1, y + height, 1), overrun: endInOverrun });
    }
    return {
      kind: row.kind,
      x,
      width,
      y,
      height,
      diamond: '',
      // The overrun runs to the mark's end, so it reaches the start's caps only when the whole mark is past.
      ticks,
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
