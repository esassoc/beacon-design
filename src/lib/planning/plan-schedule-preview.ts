// Ported verbatim from Beacon.Web (pages/plan-gantt/plan-schedule-preview-panel/plan-schedule-preview.ts on origin/develop); only the import paths changed.
// A schedule change's preview (BCN-1822), kept free of Angular components so it is testable as plain functions
// (shape 1 in docs/code-standards/frontend-testing.md): the heading, the moved and flagged rows, each flag as a
// sentence, and how a date range reads. Domain-neutral over the change set, so a whole-plan shift can preview through it too.

import { formatDate } from "./ng-shim";
import { HttpErrorResponse } from "./ng-shim";
import type { PlanScheduleChangeSetDto } from "./model";
import type { PlanScheduleFlagDto } from "./model";
import { PlanScheduleFlagReasonEnum } from "./model";

/** How a preview's dates read — the element drawer's span format. */
export const PLAN_SCHEDULE_DATE_FORMAT = "MMM d, y";

/**
 * A date range as the preview reads it: "Mar 1, 2027 – Mar 9, 2027", one date when it starts and ends the same day (a
 * milestone) or has only one end, and "No dates" for an undated element. `formatDate` reads a date-only ISO string by
 * its local Y-M-D parts, so a date never shifts a day off UTC.
 */
export function formatPlanDateRange(startDate: string | null | undefined, endDate: string | null | undefined, locale: string): string {
    const start = startDate ? formatDate(startDate, PLAN_SCHEDULE_DATE_FORMAT, locale) : null;
    const end = endDate ? formatDate(endDate, PLAN_SCHEDULE_DATE_FORMAT, locale) : null;
    if (start && end) return start === end ? start : `${start} – ${end}`;
    return start ?? end ?? "No dates";
}

/** Nothing else moves and nothing is flagged: the change needs no preview, so it is saved straight away. */
export function isPlanScheduleChangeSetEmpty(changeSet: PlanScheduleChangeSetDto): boolean {
    return !changeSet.Changes?.length && !changeSet.Flags?.length;
}

/**
 * What kind of change is previewed. An element edit's change set leaves out the element being edited; a plan shift's
 * holds every element it moves. The kind decides how the heading counts and what the hint explains.
 */
export const PlanScheduleChangeKind = {
    ElementEdit: "element-edit",
    PlanShift: "plan-shift",
} as const;
export type PlanScheduleChangeKind = (typeof PlanScheduleChangeKind)[keyof typeof PlanScheduleChangeKind];

/**
 * The preview's heading. An element edit's change set leaves out the element being edited, so its count is of the
 * items the edit moves besides itself; a plan shift's counts everything it moves. A preview shown only for its flags
 * says nothing (else) moves.
 */
export function planScheduleChangeHeading(changeSet: PlanScheduleChangeSetDto, kind: PlanScheduleChangeKind = PlanScheduleChangeKind.ElementEdit): string {
    const count = changeSet.Changes?.length ?? 0;
    const items = kind === PlanScheduleChangeKind.PlanShift ? "items" : "other items";
    if (!count) return `This change moves no ${items}`;
    return `This change moves ${count} ${count === 1 ? "item" : "items"}`;
}

/** The rule under the preview: how the scheduler moves what it moves, for the kind of change it is. */
export function planScheduleChangeHint(kind: PlanScheduleChangeKind = PlanScheduleChangeKind.ElementEdit): string {
    return kind === PlanScheduleChangeKind.PlanShift
        ? "Everything dated moves by the same number of days, except Scheduled items, which stay where they are. Landmarks stay where they are too."
        : "Scheduled items never move. An item that waits on another is pushed later as needed, to start the day after it ends plus any lag, and is never pulled earlier.";
}

/** One run of a note's text; a `strong` run (an element's name) reads bold. */
export interface PlanScheduleNotePart {
    text: string;
    strong?: boolean;
}

/** A sentence as runs of text, so names read bold without any HTML. */
export type PlanScheduleNote = readonly PlanScheduleNotePart[];

const strong = (text: string): PlanScheduleNotePart => ({ text, strong: true });
const plain = (text: string): PlanScheduleNotePart => ({ text });

/** The flagged element, bold — or plain words when the server sent no name, so nothing reads as an empty bold. */
function flaggedElement(flag: PlanScheduleFlagDto): PlanScheduleNotePart {
    return flag.PlanElementName ? strong(flag.PlanElementName) : plain("This item");
}

/** The related element, bold, or `fallback` in plain words when the server sent no name. */
function relatedElement(flag: PlanScheduleFlagDto, fallback: string): PlanScheduleNotePart {
    return flag.RelatedPlanElementName ? strong(flag.RelatedPlanElementName) : plain(fallback);
}

/** How a broken dependency ends: before the predecessor ends, or inside the lag after it when there is one. */
function predecessorBreach(lagDays: number | null | undefined): string {
    return lagDays && lagDays > 0 ? `but now starts within the ${lagDays}-day gap after that task ends.` : "but now starts before that task ends.";
}

function dependsOn(flag: PlanScheduleFlagDto): PlanScheduleNotePart[] {
    return [plain(" depends on "), relatedElement(flag, "another task"), plain(` ${predecessorBreach(flag.LagDays)}`)];
}

/** A Scheduled window crossed — the direct parent's, or a further ancestor's that contains it. */
function crossesWindow(flag: PlanScheduleFlagDto, crossing: string): PlanScheduleNotePart[] {
    const element = flaggedElement(flag);
    if (flag.RelatedIsParent) {
        return flag.RelatedPlanElementName
            ? [element, plain(` now ${crossing} the scheduled window of its parent, `), strong(flag.RelatedPlanElementName), plain(".")]
            : [element, plain(` now ${crossing} its parent's scheduled window.`)];
    }
    return flag.RelatedPlanElementName
        ? [element, plain(` now ${crossing} the scheduled window of `), strong(flag.RelatedPlanElementName), plain(", which contains it.")]
        : [element, plain(` now ${crossing} the scheduled window of an item that contains it.`)];
}

/**
 * Each flag reason as a sentence about the flagged element. Every reason the generated enum carries must be here — a
 * new one fails the build until it is worded; {@link planScheduleFlagSentence}'s fallback covers only a reason from a
 * newer server than the client was built against.
 */
const PLAN_SCHEDULE_FLAG_SENTENCES: Record<PlanScheduleFlagReasonEnum, (flag: PlanScheduleFlagDto) => PlanScheduleNotePart[]> = {
    [PlanScheduleFlagReasonEnum.ScheduledNotMoved]: (flag) => [flaggedElement(flag), plain(" is scheduled so it hasn't moved.")],
    [PlanScheduleFlagReasonEnum.ScheduledStartMissed]: (flag) => [flaggedElement(flag), plain(" is scheduled so it hasn't moved. It"), ...dependsOn(flag)],
    [PlanScheduleFlagReasonEnum.StartsBeforePredecessor]: (flag) => [flaggedElement(flag), ...dependsOn(flag)],
    [PlanScheduleFlagReasonEnum.DependencyLoop]: (flag) => [
        flaggedElement(flag),
        plain(" is part of a dependency loop, so nothing that depends on it has moved."),
    ],
    [PlanScheduleFlagReasonEnum.PastScheduledCutOff]: (flag) => crossesWindow(flag, "ends after"),
    [PlanScheduleFlagReasonEnum.BeforeScheduledCutOff]: (flag) => crossesWindow(flag, "starts before"),
};

/** A flag as one sentence — the same words in the Gantt's confirm popup and the schedule preview panel. */
export function planScheduleFlagSentence(flag: PlanScheduleFlagDto): PlanScheduleNote {
    const sentence = flag.Reason ? PLAN_SCHEDULE_FLAG_SENTENCES[flag.Reason as PlanScheduleFlagReasonEnum] : undefined;
    return sentence ? sentence(flag) : [flaggedElement(flag), plain(" couldn't be moved as requested.")];
}

/**
 * The label before a flag's requested dates. A held item would have moved there; an item flagged for breaking a rule
 * did move, and its requested dates are where the rule would put it.
 */
const PLAN_SCHEDULE_FLAG_REQUESTED_LABELS: Record<PlanScheduleFlagReasonEnum, string> = {
    [PlanScheduleFlagReasonEnum.ScheduledNotMoved]: "Would have moved to",
    [PlanScheduleFlagReasonEnum.ScheduledStartMissed]: "Would have moved to",
    [PlanScheduleFlagReasonEnum.PastScheduledCutOff]: "Allowed dates",
    [PlanScheduleFlagReasonEnum.DependencyLoop]: "Would have moved to",
    [PlanScheduleFlagReasonEnum.StartsBeforePredecessor]: "Allowed dates",
    [PlanScheduleFlagReasonEnum.BeforeScheduledCutOff]: "Allowed dates",
};

/** One moved item: its name, and its dates before and after. */
export interface PlanScheduleChangeRow {
    planElementID: string;
    name: string;
    from: string;
    to: string;
}

/** One flagged item: the sentence saying why, and its requested dates (null when there are none, e.g. a loop). */
export interface PlanScheduleFlagRow {
    /** The row's track key: one element can carry several flags, for different reasons or naming different related elements. */
    key: string;
    planElementID: string;
    sentence: PlanScheduleNote;
    requested: string | null;
    /** The label before `requested`. */
    requestedLabel: string;
}

export function planScheduleChangeRows(changeSet: PlanScheduleChangeSetDto, locale: string): PlanScheduleChangeRow[] {
    return (changeSet.Changes ?? []).map((change) => ({
        planElementID: change.PlanElementID ?? "",
        name: change.PlanElementName ?? "",
        from: formatPlanDateRange(change.OldStartDate, change.OldEndDate, locale),
        to: formatPlanDateRange(change.NewStartDate, change.NewEndDate, locale),
    }));
}

export function planScheduleFlagRows(changeSet: PlanScheduleChangeSetDto, locale: string): PlanScheduleFlagRow[] {
    return (changeSet.Flags ?? []).map((flag) => ({
        key: `${flag.PlanElementID ?? ""}:${flag.Reason ?? ""}:${flag.RelatedPlanElementID ?? ""}`,
        planElementID: flag.PlanElementID ?? "",
        sentence: planScheduleFlagSentence(flag),
        requested: flag.RequestedStartDate || flag.RequestedEndDate ? formatPlanDateRange(flag.RequestedStartDate, flag.RequestedEndDate, locale) : null,
        requestedLabel: PLAN_SCHEDULE_FLAG_REQUESTED_LABELS[flag.Reason as PlanScheduleFlagReasonEnum] ?? "Would have moved to",
    }));
}

/**
 * A refused confirm's field messages. The preview has no inputs to put them on, and the HTTP interceptor alerts only
 * the `""`-keyed (form-level) ones, so the rest are alerted from here rather than lost.
 */
export function planScheduleFieldErrors(error: HttpErrorResponse): string[] {
    const errors = error.error?.errors as Record<string, string[]> | undefined;
    if (!errors) return [];
    return Object.entries(errors)
        .filter(([key]) => key !== "")
        .flatMap(([, messages]) => messages);
}
