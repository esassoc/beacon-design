// The ui-viz-gantt primitive's public types (Beacon.Web/src/app/shared/ui/components/ui-viz-gantt/ui-viz-gantt.component.ts).

import type { GanttDragMode, UiVizGanttRow } from "./gantt-geometry";
export type { GanttDragMode, UiVizGanttLandmark, UiVizGanttLink, UiVizGanttLinkType, UiVizGanttRow, UiVizGanttRowKind } from "./gantt-geometry";

/** What a drag reshapes: a leaf's bar, a parent's stored planned window (never its derived bracket), or a milestone's date. */
export type GanttDragTarget = "bar" | "window" | "milestone";

/**
 * One drag gesture, in WHOLE DAYS. The component reports how far the pointer moved what it grabbed;
 * the host decides what that means for dates and anything that cascades.
 */
export interface GanttDragEvent {
    /** The row the pointer grabbed. */
    primaryId: string;
    /** `primaryId` alone for a single drag; the whole expanded selection, in row order, for a multi-drag. */
    rowIds: string[];
    /**
     * `primaryId` alone for a single drag; for a multi-drag, only the rows the user picked, in row order — not the
     * subtrees `rowIds` adds under them. The host can tell what was grabbed from what came along with it.
     */
    pickedIds: string[];
    /** A multi-drag is always `move`. */
    mode: GanttDragMode;
    target: GanttDragTarget;
    startDeltaDays: number;
    endDeltaDays: number;
}

/**
 * Where the host is with a dropped drag: `saving` while it works, `confirm` while it waits on the
 * user's Apply / Revert. The dropped preview holds until this returns to `idle` (or `rows` changes).
 */
export type GanttDropState = "idle" | "saving" | "confirm";

/** One run of a note's text; a `strong` run reads bold. */
export interface UiVizGanttNotePart {
    text: string;
    strong?: boolean;
}

/** A line the host has about a held drop, as runs of text, so it can set a name bold without any HTML. */
export type UiVizGanttNote = readonly UiVizGanttNotePart[];

/**
 * The context a {@link UiVizGanttComponent.rowActions} template is stamped with: the row it sits
 * on, as `let-row`. Typed, so the page's template reads the row's fields without a cast.
 */
export interface UiVizGanttRowActionsContext {
    $implicit: UiVizGanttRow;
}

/* ── Layout constants. Pixel geometry lives HERE and is bound inline, never re-declared in the
   stylesheet, so the outline, the plot and the arrows cannot fall out of step (the family rule —
   see ui-viz-columns-base.ts, "GEOMETRY IS IN PIXELS, NOT PERCENTAGES"). ─────────────────────── */

