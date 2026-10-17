// Ported verbatim from Beacon.Web (pages/plan-gantt/plan-gantt-drag.ts on origin/develop); only the import paths changed.
// What a Gantt drag asks the scheduler (BCN-1866), kept free of Angular components so it is testable as plain functions
// (shape 1 in docs/code-standards/frontend-testing.md): which endpoint a drag goes to and with what payload, how many
// dependents its preview says it shifts, whether it needs the user's confirm, and the lines the confirm shows. The
// server's preview is the source of truth for dates and cascades; nothing here works one out.

import type { PlanDetailDto } from "./model";
import type { PlanElementScheduleChangeDto } from "./model";
import type { PlanElementsShiftDto } from "./model";
import { PlanScheduleChangeModeEnum } from "./model";
import type { PlanScheduleChangeSetDto } from "./model";
import type { GanttDragEvent, UiVizGanttNote } from "./gantt-types";
import { dayNumber, isoOfDay } from "./gantt-geometry";
import { findPlanElement, planElementFormValue } from "./plan-element";
import { toPlanElementScheduleChangeDto } from "./plan-element-schedule";
import { planScheduleFlagSentence } from "./plan-schedule-preview";

/**
 * A drag as the API takes it. One element is an element schedule change (This item only), whose preview leaves the
 * element out; several — a multi-selection, or a parent with its subtree — are one elements shift, whose preview holds
 * every element it moves. A shift sends only the rows the user picked: the server brings each one's subtree along by
 * the drawer's "everything under it" rule, so a Scheduled descendant holds. `draggedIDs` is the whole expanded
 * selection the drag carried, which the dependents count leaves out.
 */
export type PlanGanttDragRequest =
    { kind: "element"; planElementID: string; change: PlanElementScheduleChangeDto } | { kind: "shift"; shift: PlanElementsShiftDto; draggedIDs: string[] };

/** An ISO date moved by whole days, in the same UTC day numbers the Gantt measured the drag in. */
function shiftIsoDate(isoDate: string | null | undefined, days: number): string | null {
    const day = dayNumber(isoDate);
    return day === null ? null : isoOfDay(day + days);
}

/**
 * The request for a drag. A single element's new dates are its STORED dates (a parent's planned window) plus the
 * drag's deltas — a milestone has the one date, so only its start moves. Null when the element isn't in the plan or
 * has no stored dates to move.
 */
export function planGanttDragRequest(plan: PlanDetailDto, drag: GanttDragEvent): PlanGanttDragRequest | null {
    if (drag.rowIds.length > 1) {
        return { kind: "shift", shift: { PlanElementIDs: [...drag.pickedIds], Days: drag.startDeltaDays }, draggedIDs: [...drag.rowIds] };
    }
    const planElementID = drag.rowIds[0] ?? drag.primaryId;
    const element = findPlanElement(plan.Elements, planElementID)?.element;
    if (!element) return null;
    const value = planElementFormValue(element);
    const startDate = shiftIsoDate(element.StartDate, drag.startDeltaDays);
    const endDate = element.IsMilestone ? startDate : shiftIsoDate(element.EndDate, drag.endDeltaDays);
    if (!startDate || !endDate) return null;
    return {
        kind: "element",
        planElementID,
        change: toPlanElementScheduleChangeDto({ ...value, StartDate: startDate, EndDate: endDate }, PlanScheduleChangeModeEnum.ThisItemOnly),
    };
}

/** The elements the drag itself carried: the one edited, or the whole expanded selection shifted. */
function draggedIDs(request: PlanGanttDragRequest): ReadonlySet<string> {
    return new Set(request.kind === "element" ? [request.planElementID] : request.draggedIDs);
}

/** The preview's changes to elements the drag didn't grab — what cascades. */
function otherChanges(request: PlanGanttDragRequest, changeSet: PlanScheduleChangeSetDto): PlanScheduleChangeSetDto {
    const dragged = draggedIDs(request);
    return { Changes: (changeSet.Changes ?? []).filter((change) => !dragged.has(change.PlanElementID ?? "")), Flags: changeSet.Flags ?? [] };
}

/** How many dependents the drop shifts: the elements it changes that the drag didn't grab. */
export function planGanttDependentCount(request: PlanGanttDragRequest, changeSet: PlanScheduleChangeSetDto): number {
    return otherChanges(request, changeSet).Changes!.length;
}

/** Whether the drop waits on the user's confirm: something it didn't grab moves, or anything is flagged. */
export function planGanttDropNeedsConfirm(request: PlanGanttDragRequest, changeSet: PlanScheduleChangeSetDto): boolean {
    const others = otherChanges(request, changeSet);
    return !!others.Changes!.length || !!others.Flags!.length;
}

/** The confirm's lines: each flag as a sentence, in the schedule preview's words. The popup counts the dependents itself. */
export function planGanttDropNotes(changeSet: PlanScheduleChangeSetDto): UiVizGanttNote[] {
    return (changeSet.Flags ?? []).map(planScheduleFlagSentence);
}
