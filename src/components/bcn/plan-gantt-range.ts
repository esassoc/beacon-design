// Controller for <BcnPlanGanttRange>: the Gantt's date range. Holds the choice (a preset or explicit dates), keeps the
// pickers showing the range in view, and hands the chart the range to fit, or null for the whole plan.

import '@esa/ecology/esa-button-toggle';
import '@esa/ecology/esa-date-picker';
import type { GanttRange } from './plan-gantt-chart';
import { dayNumber, isoOfDay } from '../../lib/planning/gantt-geometry';

/** Whole plan, a span in months from the anchor, or the planner's own dates. */
type PlanRangePreset = 'plan' | '60' | '24' | '12' | '6' | 'custom';

const PRESETS: { label: string; value: PlanRangePreset }[] = [
  { label: 'Whole Plan', value: 'plan' },
  { label: '5 Years', value: '60' },
  { label: '2 Years', value: '24' },
  { label: '1 Year', value: '12' },
  { label: '6 Months', value: '6' },
  { label: 'Custom', value: 'custom' },
];

interface StoredRange {
  preset: PlanRangePreset;
  start?: string;
  end?: string;
}

/**
 * One lane of the overview's mini-map: a parent's rolled-up span, coloured by its tier as the chart colours it. Only
 * parents are drawn, so the strip stays a readable summary (a lane a few pixels tall) rather than texture.
 */
export interface PlanGanttOverviewRow {
  start: string | null;
  end: string | null;
  /** 0 for a top-level parent, 1 under it, 2 for anything deeper — the chart's tiers. */
  tier: 0 | 1 | 2;
}

export interface PlanGanttRangeArgs {
  /** The plan's first and last dated day (bars, windows, landmarks), or null when nothing is dated. */
  extent(): GanttRange | null;
  /** The rows the overview draws in miniature, in chart order. */
  overview(): PlanGanttOverviewRow[];
  today: string;
  /** Remembered per plan. */
  storageKey: string;
  onChange(range: GanttRange | null): void;
}

export interface PlanGanttRangeControl {
  /** The plan changed: re-show its extent under Whole plan, and keep a preset's range in step. */
  refresh(): void;
  /** The rows changed (a drop, a refresh): redraw the overview's mini-map without moving the range. */
  redrawOverview(): void;
  setVisible(visible: boolean): void;
}

type ToggleEl = HTMLElement & { options: { label: string; value: string }[]; value: string };
type PickerEl = HTMLElement & { value: string; min: string };

const firstOfMonth = (iso: string) => `${iso.slice(0, 7)}-01`;

/** The overview window's shortest span, and how far its keys move it: a week, or a month with Shift. */
const OVERVIEW_MIN_DAYS = 14;
const OVERVIEW_STEP_DAYS = 7;
const OVERVIEW_BIG_STEP_DAYS = 30;
const OVERVIEW_LABEL_ROOM_PX = 12;
const DATE_LABEL = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const dateLabel = (day: number) => DATE_LABEL.format(new Date(day * 86_400_000));

/** The last day of the month `months` after the month `start` begins. */
function endAfterMonths(start: string, months: number): string {
  const [y, m] = start.split('-').map(Number);
  return isoOfDay(Date.UTC(y, m - 1 + months, 1) / 86_400_000 - 1);
}

export function setupPlanGanttRange(root: HTMLElement, args: PlanGanttRangeArgs): PlanGanttRangeControl {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const presetField = q<ToggleEl>('[data-pr-preset]');
  const startField = q<PickerEl>('[data-pr-start]');
  const endField = q<PickerEl>('[data-pr-end]');
  presetField.options = PRESETS;

  // A remembered preset that has since been dropped falls back to Whole plan.
  const remembered = read();
  let choice: StoredRange = remembered && PRESETS.some((p) => p.value === remembered.preset) ? remembered : { preset: 'plan' };

  function read(): StoredRange | null {
    try {
      const raw = localStorage.getItem(args.storageKey);
      return raw ? (JSON.parse(raw) as StoredRange) : null;
    } catch {
      return null;
    }
  }

  function write(): void {
    try {
      localStorage.setItem(args.storageKey, JSON.stringify(choice));
    } catch {
      /* a blocked store keeps the range for this page only */
    }
  }

  /**
   * Where a preset span starts: the first of this month while the plan is under way, else the first of the plan's
   * first month — so "1 year" on a plan that hasn't started yet still shows its opening year, not an empty chart.
   */
  function anchor(extent: GanttRange): string {
    const inPlan = args.today >= extent.start && args.today <= extent.end;
    return firstOfMonth(inPlan ? args.today : extent.start);
  }

  /** The range the chart shows for the current choice; null is the whole plan. */
  function resolve(): GanttRange | null {
    const extent = args.extent();
    if (choice.preset === 'plan' || !extent) return null;
    if (choice.preset === 'custom') return choice.start && choice.end && choice.end >= choice.start ? { start: choice.start, end: choice.end } : null;
    const start = choice.start ?? anchor(extent);
    return { start, end: endAfterMonths(start, Number(choice.preset)) };
  }

  function apply(): void {
    const range = resolve();
    if (range && choice.preset !== 'custom') {
      choice.start = range.start;
      choice.end = range.end;
    }
    write();
    const shown = range ?? args.extent();
    presetField.value = choice.preset;
    startField.value = shown?.start ?? '';
    endField.value = shown?.end ?? '';
    endField.min = shown?.start ?? '';
    drawOverview(range);
    args.onChange(range);
  }

  // ── The overview ────────────────────────────────────────────────────────────────────────────────────────────────

  const overview = q('[data-pr-overview]');
  const mini = q<SVGSVGElement>('[data-pr-mini]');
  const windowEl = q('[data-pr-window]');
  const startHandle = q('[data-pr-handle="start"]');
  const endHandle = q('[data-pr-handle="end"]');
  const shadeStart = q('[data-pr-shade="start"]');
  const shadeEnd = q('[data-pr-shade="end"]');

  /** The map's whole span: the plan's months, widened to take in a range stepped past them. */
  function domain(range: GanttRange | null): { first: number; last: number } | null {
    const extent = args.extent();
    if (!extent) return null;
    let first = dayNumber(firstOfMonth(extent.start))!;
    let last = dayNumber(endAfterMonths(firstOfMonth(extent.end), 1))!;
    if (range) {
      first = Math.min(first, dayNumber(range.start)!);
      last = Math.max(last, dayNumber(range.end)!);
    }
    return { first, last };
  }

  let shownDomain: { first: number; last: number } | null = null;
  let shownRange: { start: number; end: number } | null = null;

  function drawOverview(range: GanttRange | null): void {
    const d = domain(range);
    shownDomain = d;
    if (!d) return;
    const width = overview.clientWidth;
    const height = overview.clientHeight;
    const days = d.last - d.first + 1;
    const x = (day: number) => ((day - d.first) / days) * width;

    // The mini-map: year lines and labels, then a thin line per dated row, parents lighter.
    const parts: string[] = [];
    const firstYear = new Date(d.first * 86_400_000).getUTCFullYear();
    const lastYear = new Date(d.last * 86_400_000).getUTCFullYear();
    for (let year = firstYear; year <= lastYear + 1; year++) {
      const yx = x(Date.UTC(year, 0, 1) / 86_400_000);
      if (yx < 0 || yx > width) continue;
      parts.push(`<line class="bcn-plan-range__mini-year" x1="${yx}" x2="${yx}" y1="0" y2="${height}"/>`);
      parts.push(`<text class="bcn-plan-range__mini-label" x="${yx + 3}" y="10">${year}</text>`);
    }
    const rows = args.overview().filter((row) => row.start && row.end);
    // Lanes no taller than this, so a plan with few parents still reads as a strip of bars, not blocks.
    const maxLane = 6;
    const laneTop = OVERVIEW_LABEL_ROOM_PX;
    // Breathing room: a gap between lanes, and a margin under the last one.
    const laneGap = 1;
    const bottomRoom = 4;
    const lane = rows.length ? Math.min(maxLane, (height - laneTop - bottomRoom + laneGap) / rows.length) : 0;
    rows.forEach((row, index) => {
      const s0 = dayNumber(row.start)!;
      const e0 = dayNumber(row.end)!;
      const left = x(s0);
      const w = Math.max(1, x(e0 + 1) - left);
      const h = Math.max(1, lane - laneGap);
      parts.push(`<rect class="bcn-plan-range__mini-bar bcn-plan-range__mini-bar--tier-${row.tier}" x="${left}" y="${laneTop + index * lane}" width="${w}" height="${h}" rx="1"/>`);
    });
    const today = dayNumber(args.today);
    if (today !== null && today >= d.first && today <= d.last) parts.push(`<line class="bcn-plan-range__mini-today" x1="${x(today)}" x2="${x(today)}" y1="0" y2="${height}"/>`);
    mini.setAttribute('viewBox', `0 0 ${width} ${height}`);
    mini.innerHTML = parts.join('');

    // The window: the range in view, or the whole map for Whole plan.
    const start = range ? dayNumber(range.start)! : d.first;
    const end = range ? dayNumber(range.end)! : d.last;
    shownRange = { start, end };
    const left = (start - d.first) / days;
    const right = (end + 1 - d.first) / days;
    windowEl.style.left = `${left * 100}%`;
    windowEl.style.width = `${(right - left) * 100}%`;
    shadeStart.style.width = `${left * 100}%`;
    shadeEnd.style.width = `${(1 - right) * 100}%`;
    windowEl.setAttribute('aria-label', `Range in view: ${dateLabel(start)} to ${dateLabel(end)}. Drag, or use the arrow keys, to move it.`);
    for (const [handle, value] of [
      [startHandle, start],
      [endHandle, end],
    ] as const) {
      handle.setAttribute('aria-valuemin', String(d.first));
      handle.setAttribute('aria-valuemax', String(d.last));
      handle.setAttribute('aria-valuenow', String(value));
      handle.setAttribute('aria-valuetext', dateLabel(value));
    }
  }

  /** A range set from the overview: always Custom, held inside the map and at least two weeks long. */
  function setFromOverview(start: number, end: number): void {
    const d = shownDomain;
    if (!d) return;
    const length = end - start;
    if (start < d.first) [start, end] = [d.first, d.first + length];
    if (end > d.last) [start, end] = [d.last - length, d.last];
    start = Math.max(d.first, start);
    choice = { preset: 'custom', start: isoOfDay(Math.round(start)), end: isoOfDay(Math.round(end)) };
    apply();
  }

  type OverviewDrag = { pointerId: number; mode: 'move' | 'start' | 'end'; originDay: number; start: number; end: number };
  let drag: OverviewDrag | null = null;
  let frame = 0;

  const dayAt = (clientX: number): number => {
    const d = shownDomain!;
    const rect = overview.getBoundingClientRect();
    return d.first + ((clientX - rect.left) / rect.width) * (d.last - d.first + 1);
  };

  overview.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 || !shownDomain || !shownRange) return;
    event.preventDefault();
    const target = event.target as Element;
    const handle = target.closest<HTMLElement>('[data-pr-handle]');
    let { start, end } = shownRange;
    let mode: OverviewDrag['mode'] = handle ? (handle.dataset.prHandle as 'start' | 'end') : 'move';
    if (!handle && !target.closest('[data-pr-window]')) {
      // A click on the map outside the window centres the window there, then drags it.
      const half = (end - start) / 2;
      const centre = dayAt(event.clientX);
      start = centre - half;
      end = centre + half;
      setFromOverview(start, end);
      ({ start, end } = shownRange!);
      mode = 'move';
    }
    overview.setPointerCapture(event.pointerId);
    drag = { pointerId: event.pointerId, mode, originDay: dayAt(event.clientX), start, end };
  });
  overview.addEventListener('pointermove', (event) => {
    if (!drag || event.pointerId !== drag.pointerId) return;
    const delta = Math.round(dayAt(event.clientX) - drag.originDay);
    const { mode, start, end } = drag;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      if (mode === 'move') setFromOverview(start + delta, end + delta);
      else if (mode === 'start') setFromOverview(Math.min(start + delta, end - OVERVIEW_MIN_DAYS + 1), end);
      else setFromOverview(start, Math.max(end + delta, start + OVERVIEW_MIN_DAYS - 1));
    });
  });
  const endDrag = (event: PointerEvent) => {
    if (!drag || event.pointerId !== drag.pointerId) return;
    drag = null;
    if (overview.hasPointerCapture(event.pointerId)) overview.releasePointerCapture(event.pointerId);
  };
  overview.addEventListener('pointerup', endDrag);
  overview.addEventListener('pointercancel', endDrag);

  /** Arrow keys: a week (a month with Shift) — the window moves; a handle moves its own edge. */
  const keyStep = (event: KeyboardEvent, mode: 'move' | 'start' | 'end') => {
    if (!shownRange || (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight')) return;
    event.preventDefault();
    event.stopPropagation();
    const by = (event.key === 'ArrowLeft' ? -1 : 1) * (event.shiftKey ? OVERVIEW_BIG_STEP_DAYS : OVERVIEW_STEP_DAYS);
    const { start, end } = shownRange;
    if (mode === 'move') setFromOverview(start + by, end + by);
    else if (mode === 'start') setFromOverview(Math.min(start + by, end - OVERVIEW_MIN_DAYS + 1), end);
    else setFromOverview(start, Math.max(end + by, start + OVERVIEW_MIN_DAYS - 1));
  };
  windowEl.addEventListener('keydown', (e) => {
    if (e.target === windowEl) keyStep(e, 'move');
  });
  startHandle.addEventListener('keydown', (e) => keyStep(e, 'start'));
  endHandle.addEventListener('keydown', (e) => keyStep(e, 'end'));

  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(() => drawOverview(resolve())).observe(overview);

  presetField.addEventListener('change', (e) => {
    const value = String((e as CustomEvent<{ value: string }>).detail?.value ?? presetField.value) as PlanRangePreset;
    if (value === 'custom') {
      // Custom starts from what's in view, ready to be edited.
      const shown = resolve() ?? args.extent();
      choice = { preset: 'custom', start: shown?.start, end: shown?.end };
    } else {
      choice = { preset: value };
      const extent = args.extent();
      if (extent && value !== 'plan') choice.start = anchor(extent);
    }
    apply();
  });

  const editDate = (key: 'start' | 'end', field: PickerEl) => (e: Event) => {
    const value = String((e as CustomEvent<{ value: string }>).detail?.value ?? field.value);
    if (!dayNumber(value)) return;
    const shown = resolve() ?? args.extent();
    choice = { preset: 'custom', start: shown?.start, end: shown?.end, [key]: value };
    if (choice.start && choice.end && choice.end < choice.start) {
      if (key === 'start') choice.end = choice.start;
      else choice.start = choice.end;
    }
    apply();
  };
  startField.addEventListener('change', editDate('start', startField));
  endField.addEventListener('change', editDate('end', endField));


  return {
    refresh: () => apply(),
    redrawOverview: () => drawOverview(resolve()),
    // With nothing dated, the date controls' groups and the range band hide; the bar's verbs stay.
    setVisible: (visible) => {
      for (const el of [presetField, overview]) {
        const band = el.closest<HTMLElement>('.bcn-filterbar__group, .bcn-filterbar__bottom');
        if (band) band.hidden = !visible;
      }
    },
  };
}
