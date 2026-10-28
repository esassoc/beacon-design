// Ported verbatim from Beacon.Web (pages/plan-gantt/plan-element-drawer/plan-element-schedule.ts on origin/develop); only the import paths changed.
// How the plan element drawer routes a date edit through the scheduler (BCN-1822), kept free of Angular components so
// it is testable as plain functions: whether the dates changed (only then is there anything to preview), the parent's
// mode choice, and the schedule-change payload.

import type { PlanElementDto } from "./model";
import type { PlanElementScheduleChangeDto } from "./model";
import { PlanScheduleChangeModeEnum } from "./model";
import type { UiButtonToggleOption } from "./model";
import { type PlanElementFormValue, toPlanElementUpdateDto } from "./plan-element";

/** The parent's choice of what the new dates apply to, in the order the toggle shows them. */
export const PLAN_SCHEDULE_CHANGE_MODE_OPTIONS: UiButtonToggleOption<PlanScheduleChangeModeEnum>[] = [
    { value: PlanScheduleChangeModeEnum.ThisItemOnly, displayValue: "This Item Only" },
    { value: PlanScheduleChangeModeEnum.ThisItemAndEverythingUnderIt, displayValue: "This Item and Everything Under It" },
];

/** What each mode does, as the hint under the toggle says it. */
export function planScheduleChangeModeHint(mode: PlanScheduleChangeModeEnum): string {
    return mode === PlanScheduleChangeModeEnum.ThisItemAndEverythingUnderIt
        ? "Everything under it shifts by as many days as its start moves."
        : "Only its planned window changes; the items under it keep their dates.";
}

/** The mode sent: the parent's choice, and always This item only for an element without children (it has nothing under it). */
export function planScheduleChangeMode(hasChildren: boolean, chosen: PlanScheduleChangeModeEnum): PlanScheduleChangeModeEnum {
    return hasChildren ? chosen : PlanScheduleChangeModeEnum.ThisItemOnly;
}

/**
 * Whether saving would change the element's stored dates — compared as they would be sent, so a milestone's end is its
 * start and a blank date is no date. Only a date change goes through the scheduler; any other edit is a plain update.
 */
export function planElementDatesChanged(element: PlanElementDto | null, value: PlanElementFormValue): boolean {
    if (!element) return false;
    const { StartDate, EndDate } = toPlanElementUpdateDto(value);
    return (StartDate ?? null) !== (element.StartDate || null) || (EndDate ?? null) !== (element.EndDate || null);
}

/** The schedule preview and confirm payload: every field an update sends, plus the mode. */
export function toPlanElementScheduleChangeDto(value: PlanElementFormValue, mode: PlanScheduleChangeModeEnum): PlanElementScheduleChangeDto {
    return { ...toPlanElementUpdateDto(value), Mode: mode };
}
