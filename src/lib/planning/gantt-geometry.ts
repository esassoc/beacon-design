// Ported verbatim from Beacon.Web (shared/ui/components/ui-viz-gantt/ui-viz-gantt-geometry.ts on origin/develop); only the import paths changed.
// The Gantt's arithmetic, kept free of Angular, the DOM, `Intl` and the clock so every rule the
// chart draws by is testable as a plain function (shape 1 in docs/code-standards/frontend-testing.md).
// The component maps these numbers onto SVG; it decides nothing about time or position itself.
//
// ONE COORDINATE SPACE. Bars, brackets, diamonds, gridlines, the today line, landmark lines and
// the dependency arrows are all placed by `xOfDay()` against the same window, in pixels — never
// percentages — so an arrow lands exactly on the edge of the bar it points at.

/** What a row draws in the plot: a leaf task bar, a parent roll-up bracket, or a milestone diamond. */
export type UiVizGanttRowKind = "bar" | "summary" | "milestone";

/**
 * One row of the chart, already flattened into display order (a pre-order walk: a parent, then
 * its subtree). The primitive never builds the tree itself — the caller owns that, and the depth
 * and `hasChildren` it passes are what the outline indents and disclosure carets are drawn from.
 */
export interface UiVizGanttRow {
    id: string;
    label: string;
    /** 0 for a root. Indents the outline and steps the roll-up bracket's weight. */
    depth: number;
    kind: UiVizGanttRowKind;
    /** ISO `YYYY-MM-DD`. Null (with `end`) is an unscheduled row — an empty plot cell. */
    start: string | null;
    /** ISO `YYYY-MM-DD`, INCLUSIVE: a bar from Jan 1 to Jan 1 is one day long. */
    end: string | null;
    parentId: string | null;
    /** Rows with children get a disclosure caret; leaves get a spacer in its place. */
    hasChildren: boolean;
    /**
     * Optional PLANNED WINDOW, ISO `YYYY-MM-DD`, both-or-neither, `windowEnd` inclusive. A range the
     * row's span is compared against but never constrained by: a summary draws it as a faint band
     * behind its bracket, and any part of the span running past `windowEnd` is highlighted.
     */
    windowStart?: string | null;
    windowEnd?: string | null;
    /**
     * Whether this row's OWN DATES are a hard cut-off (true) or a soft estimate (absent / false).
     * A row's own dates are its planned window when it has one, otherwise its span (a bar's dates,
     * a milestone's date). A hard cut-off draws a solid end rule at rest, and running past a hard
     * window is painted in danger rather than warning.
     */
    scheduled?: boolean;
    /**
     * Optional short secondary label — a classifier the caller owns (e.g. a level or type name), drawn
     * quietly before the name in the outline and leading the hover readout's title. Never truncates;
     * the name gives way instead. Absent / null / empty draws nothing.
     */
    tag?: string | null;
}

/**
 * How a dependency ties two rows' edges together. A string-literal union owned HERE, so the
 * primitive stays domain-free — a page maps its own generated enum onto these four.
 */
export type UiVizGanttLinkType = "FinishToStart" | "StartToStart" | "FinishToFinish" | "StartToFinish";

export interface UiVizGanttLink {
    fromId: string;
    toId: string;
    type: UiVizGanttLinkType;
}

/**
 * A LANDMARK: a chart-wide anchor date — not a row — drawn as a full-height line through every row
 * with a tag in the axis header. Domain-free: the caller decides what its landmarks mean.
 */
export interface UiVizGanttLandmark {
    id: string;
    label: string;
    /** ISO `YYYY-MM-DD`. A landmark whose date does not parse is not drawn. */
    date: string;
}

/** An edge of a scheduled mark. */
export type UiVizGanttEdge = "start" | "end";

/** A whole-year window: `startYear` inclusive, `endYear` exclusive. */
export interface UiVizGanttWindow {
    startYear: number;
    endYear: number;
}

/**
 * The fixed scale. 96px a year is the design source's 1900px over a 20-year plot, rounded to a
 * number that divides cleanly into quarters (24px) and months (8px).
 */
export const GANTT_PX_PER_YEAR = 96;

const MS_PER_DAY = 86_400_000;
const ISO_DAY = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * A date as a whole UTC DAY NUMBER (days since 1970-01-01), or null when unparseable.
 *
 * NEVER `new Date("YYYY-MM-DD")` read back in local time: that string is parsed as UTC midnight,
 * and every getter west of Greenwich then reports the previous day. Everything here stays in UTC
 * integer days, so a date cannot drift by the viewer's zone.
 */
export function dayNumber(isoDate: string | null | undefined): number | null {
    if (!isoDate) {
        return null;
    }
    const parts = ISO_DAY.exec(isoDate);
    if (!parts) {
        return null;
    }
    const year = Number(parts[1]);
    const month = Number(parts[2]) - 1;
    const day = Number(parts[3]);
    const ms = Date.UTC(year, month, day);
    const check = new Date(ms);
    // Rejects a calendar-impossible date ("2026-02-30") rather than letting Date.UTC roll it over.
    if (check.getUTCFullYear() !== year || check.getUTCMonth() !== month || check.getUTCDate() !== day) {
        return null;
    }
    return ms / MS_PER_DAY;
}

/** A day number back to its ISO `YYYY-MM-DD`, read in UTC so it is the same day that went in. */
export function isoOfDay(day: number): string {
    return new Date(day * MS_PER_DAY).toISOString().slice(0, 10);
}

/** The UTC calendar year a day number falls in. */
export function yearOfDay(day: number): number {
    return new Date(day * MS_PER_DAY).getUTCFullYear();
}

/** January 1 of `year`, as a day number. */
export function firstDayOfYear(year: number): number {
    return Date.UTC(year, 0, 1) / MS_PER_DAY;
}

/**
 * The x of a day's START, in px from the window's left edge.
 *
 * Positioned WITHIN its own year (day-of-year over that year's length) rather than by a flat
 * 365.25-day year, so January 1 lands exactly on the year's gridline whatever the leap years —
 * a bar starting on New Year's Day must start on the line, not a pixel beside it.
 */
export function xOfDay(day: number, window: UiVizGanttWindow, pxPerYear: number = GANTT_PX_PER_YEAR): number {
    const year = yearOfDay(day);
    const jan1 = firstDayOfYear(year);
    const yearLength = firstDayOfYear(year + 1) - jan1;
    return (year - window.startYear + (day - jan1) / yearLength) * pxPerYear;
}

/** The days a mark draws from: a bar/bracket's inclusive span, or a milestone's single day. */
export interface UiVizGanttSpan {
    startDay: number;
    /** INCLUSIVE last day. Equal to `startDay` for a milestone. */
    endDay: number;
}

/**
 * What a row is scheduled over, or null when it draws nothing.
 *
 * A bar or bracket needs BOTH ends — half a span is not a span, and inventing the other end would
 * draw a claim the data does not make. A milestone is one date, so either field will do (`start`
 * first). An end before its start is treated as unscheduled rather than drawn backwards.
 */
export function spanOf(row: UiVizGanttRow): UiVizGanttSpan | null {
    const start = dayNumber(row.start);
    const end = dayNumber(row.end);
    if (row.kind === "milestone") {
        const day = start ?? end;
        return day === null ? null : { startDay: day, endDay: day };
    }
    if (start === null || end === null || end < start) {
        return null;
    }
    return { startDay: start, endDay: end };
}

/** Inclusive length in days: a one-day task is 1, never 0. */
export function durationDays(span: UiVizGanttSpan): number {
    return span.endDay - span.startDay + 1;
}

/**
 * A row's planned window as an inclusive span, or null. Both ends must parse and run forwards —
 * as with {@link spanOf}, half a window is not a window.
 */
export function plannedWindowOf(row: UiVizGanttRow): UiVizGanttSpan | null {
    const start = dayNumber(row.windowStart);
    const end = dayNumber(row.windowEnd);
    if (start === null || end === null || end < start) {
        return null;
    }
    return { startDay: start, endDay: end };
}

/**
 * The part of `span` that runs LATE — past the planned window's end — as inclusive days, or null
 * when it ends on or inside its window (or there is no window).
 *
 * ONLY LATE-RUNNING COUNTS. A span that starts before its window starts is early, not over — it is
 * never highlighted, so only the window's END is compared.
 */
export function overrunOf(span: UiVizGanttSpan, plannedWindow: UiVizGanttSpan | null): UiVizGanttSpan | null {
    if (!plannedWindow) {
        return null;
    }
    const startDay = Math.max(span.startDay, plannedWindow.endDay + 1);
    return startDay <= span.endDay ? { startDay, endDay: span.endDay } : null;
}

/** Whole days `span` runs past an inclusive last day `limit` — 0 when it ends on or before it. */
export function daysPast(span: UiVizGanttSpan, limit: number): number {
    return Math.max(0, span.endDay - limit);
}

/**
 * The window every scheduled row fits inside, padded out to WHOLE YEARS — January 1 of the
 * earliest year to January 1 after the latest — and widened to at least `minYears` (extra years
 * go on the end) so a short plan can still fill its frame. Null when nothing is scheduled.
 */
export function ganttWindow(spans: readonly UiVizGanttSpan[], minYears = 0): UiVizGanttWindow | null {
    if (spans.length === 0) {
        return null;
    }
    const first = Math.min(...spans.map((span) => span.startDay));
    const last = Math.max(...spans.map((span) => span.endDay));
    const startYear = yearOfDay(first);
    const endYear = Math.max(yearOfDay(last) + 1, startYear + minYears);
    return { startYear, endYear };
}

/**
 * A landmark's date as a one-day span, or null when it does not parse — so it can join the rows'
 * spans in {@link ganttWindow} and widen the window to reach it. It never touches a row's own span.
 */
export function landmarkSpan(landmark: UiVizGanttLandmark): UiVizGanttSpan | null {
    const day = dayNumber(landmark.date);
    return day === null ? null : { startDay: day, endDay: day };
}

/** A header tag's horizontal reach: its centre and its width, in px. */
export interface UiVizGanttTagExtent {
    centre: number;
    width: number;
}

/**
 * Stacks header tags into LANES so no two overlap: each tag, taken left to right, goes in the
 * lowest lane whose last tag ends at least `gapPx` before it starts. Returns each tag's lane, in
 * the order the extents were given. Tags far enough apart share lane 0; a crowd steps down.
 */
export function stackTags(extents: readonly UiVizGanttTagExtent[], gapPx: number): number[] {
    const lanes = new Array<number>(extents.length).fill(0);
    const laneRight: number[] = [];
    const order = extents.map((_, index) => index).sort((a, b) => extents[a].centre - extents[b].centre);
    for (const index of order) {
        const left = extents[index].centre - extents[index].width / 2;
        let lane = laneRight.findIndex((right) => right + gapPx <= left);
        if (lane === -1) {
            lane = laneRight.length;
            laneRight.push(0);
        }
        laneRight[lane] = left + extents[index].width;
        lanes[index] = lane;
    }
    return lanes;
}

/**
 * The rows still on screen after collapsing: every row whose ancestor is collapsed is dropped.
 * Walks the pre-order list by DEPTH, so it needs no parent lookups — after a collapsed row, every
 * following row deeper than it belongs to its subtree, until the walk climbs back to its level.
 */
export function visibleRows(rows: readonly UiVizGanttRow[], collapsed: ReadonlySet<string>): UiVizGanttRow[] {
    const visible: UiVizGanttRow[] = [];
    let hideDeeperThan: number | null = null;
    for (const row of rows) {
        if (hideDeeperThan !== null) {
            if (row.depth > hideDeeperThan) {
                continue;
            }
            hideDeeperThan = null;
        }
        visible.push(row);
        if (row.hasChildren && collapsed.has(row.id)) {
            hideDeeperThan = row.depth;
        }
    }
    return visible;
}

/** Which edge of the source a link leaves from, and which edge of the target it arrives at. */
export const LINK_EDGES: Readonly<Record<UiVizGanttLinkType, { from: UiVizGanttEdge; to: UiVizGanttEdge }>> = {
    FinishToStart: { from: "end", to: "start" },
    StartToStart: { from: "start", to: "start" },
    FinishToFinish: { from: "end", to: "end" },
    StartToFinish: { from: "start", to: "end" },
};

/** How far an arrow runs straight out of its source edge before turning. */
export const LINK_STUB_PX = 8;
/** The arrowhead: its length along the line, and its full width across it. */
export const ARROW_LENGTH_PX = 5;
export const ARROW_WIDTH_PX = 6;

/** A point in the plot's coordinate space. */
export interface UiVizGanttPoint {
    x: number;
    y: number;
}

/** A routed dependency: the elbow line and the arrowhead closing it, both ready to draw. */
export interface UiVizGanttRoute {
    /** SVG path data for the line, ending at the arrowhead's base. */
    path: string;
    /** SVG polygon points for the arrowhead, its tip on the target edge. */
    head: string;
}

const round = (value: number): number => Math.round(value * 100) / 100;

/**
 * An elbow route from one mark's edge to another's.
 *
 * THE SHORT ROUTE — out of the source edge horizontally for {@link LINK_STUB_PX}, vertically to
 * the target row's centre, horizontally into the target edge — whenever that last run approaches
 * the target edge FROM OUTSIDE the mark: from the left into a start edge, from the right into an
 * end edge.
 *
 * THE DETOUR when it cannot — the everyday finish-to-start case where the next task starts the
 * day the last one ends, so the stub has already passed the target's start. Run straight on
 * would draw the arrow across the target bar and into its edge from inside. Instead the line
 * drops to the row boundary above (or below) the target, runs back past the edge, and comes in
 * from outside like the short route does.
 *
 * The arrowhead always points INTO the edge it lands on: rightwards at a start, leftwards at an
 * end. Drawn as a polygon rather than an SVG `<marker>` — a marker is referenced by `url(#id)`,
 * which needs a per-instance id and resolves against the document's `<base href>` in some
 * engines, and a polygon needs neither.
 */
export function routeLink(
    source: UiVizGanttPoint,
    fromEdge: UiVizGanttEdge,
    target: UiVizGanttPoint,
    toEdge: UiVizGanttEdge,
    rowPitchPx: number
): UiVizGanttRoute {
    const outward = fromEdge === "end" ? 1 : -1;
    // +1: the arrow travels rightwards into a start edge; -1: leftwards into an end edge.
    const inward = toEdge === "start" ? 1 : -1;
    const stubX = source.x + outward * LINK_STUB_PX;
    const baseX = target.x - inward * ARROW_LENGTH_PX;

    // The short route works when its last run starts on the outside of the target edge with room
    // for the arrowhead, i.e. the stub is at or before the arrow's base in the arrow's direction.
    const shortRouteFits = (baseX - stubX) * inward >= 0;

    let path: string;
    if (shortRouteFits) {
        path = `M ${round(source.x)} ${round(source.y)} H ${round(stubX)} V ${round(target.y)} H ${round(baseX)}`;
    } else {
        const down = target.y >= source.y ? 1 : -1;
        const gutterY = target.y - (down * rowPitchPx) / 2;
        const approachX = target.x - inward * (ARROW_LENGTH_PX + LINK_STUB_PX);
        path =
            `M ${round(source.x)} ${round(source.y)} H ${round(stubX)} V ${round(gutterY)} ` + `H ${round(approachX)} V ${round(target.y)} H ${round(baseX)}`;
    }

    const halfWidth = ARROW_WIDTH_PX / 2;
    const head = `${round(target.x)},${round(target.y)} ${round(baseX)},${round(target.y - halfWidth)} ${round(baseX)},${round(target.y + halfWidth)}`;
    return { path, head };
}

/* ── Edit mode. The component turns a pointer gesture into DAY DELTAS with these and reports them;
   what those deltas mean for a row's dates (and anything that cascades) is the caller's call. ─── */

/** How a drag reshapes what it grabbed: slide it whole, or move one edge. */
export type GanttDragMode = "move" | "resize-start" | "resize-end";

/** How far the pointer must travel before a press becomes a drag; anything less is a click. */
export const GANTT_DRAG_THRESHOLD_PX = 3;

/** The resize grip at either end of a bar. Shrinks on a narrow bar so a move zone always remains. */
export const GANTT_RESIZE_EDGE_PX = 6;

/** Each edge zone takes at most this fraction of the bar, so the middle third stays a move zone. */
const RESIZE_EDGE_MAX_FRACTION = 1 / 3;

/**
 * The fractional day at `x` px from the window's left edge — the inverse of {@link xOfDay}, so
 * `dayOfX(xOfDay(d, w), w) === d`. Read within its own year, as `xOfDay` places it.
 */
export function dayOfX(x: number, window: UiVizGanttWindow, pxPerYear: number = GANTT_PX_PER_YEAR): number {
    const yearOffset = x / pxPerYear;
    const year = window.startYear + Math.floor(yearOffset);
    const jan1 = firstDayOfYear(year);
    const yearLength = firstDayOfYear(year + 1) - jan1;
    return jan1 + (yearOffset - Math.floor(yearOffset)) * yearLength;
}

/**
 * A horizontal pointer travel of `deltaPx`, starting at `fromX`, as a WHOLE number of days —
 * rounded to the nearest day, never coarser. Measured through {@link dayOfX} from where the drag
 * began, so a drag across a leap year's boundary counts that year's days, not an average.
 */
export function dayDeltaOfPx(fromX: number, deltaPx: number, window: UiVizGanttWindow, pxPerYear: number = GANTT_PX_PER_YEAR): number {
    const days = Math.round(dayOfX(fromX + deltaPx, window, pxPerYear) - dayOfX(fromX, window, pxPerYear));
    // Normalises -0, so a drag that returns home reads as exactly no change.
    return days === 0 ? 0 : days;
}

/** Whether a pointer has travelled far enough from where it pressed to be a drag rather than a click. */
export function hasPassedDragThreshold(fromX: number, fromY: number, x: number, y: number): boolean {
    return Math.hypot(x - fromX, y - fromY) >= GANTT_DRAG_THRESHOLD_PX;
}

/**
 * What a press at `x` on a mark spanning `x1`..`x2` would drag. Within {@link GANTT_RESIZE_EDGE_PX}
 * of either end (or beyond it) resizes that end; the rest moves the whole mark. The edge zone
 * shrinks on a narrow mark so a third of it in the middle always moves. A milestone is one day, so
 * it only ever moves.
 */
export function dragModeAt(x: number, x1: number, x2: number, kind: UiVizGanttRowKind): GanttDragMode {
    if (kind === "milestone") {
        return "move";
    }
    const edge = Math.min(GANTT_RESIZE_EDGE_PX, (x2 - x1) * RESIZE_EDGE_MAX_FRACTION);
    if (x < x1 + edge) {
        return "resize-start";
    }
    if (x > x2 - edge) {
        return "resize-end";
    }
    return "move";
}
