// Ported verbatim from Beacon.Web (pages/plan-gantt/plan-move-dialog/plan-shift.ts on origin/develop); only the import paths changed.
// Move plan (BCN-1822), kept free of Angular components so it is testable as plain functions (shape 1 in
// docs/code-standards/frontend-testing.md): where the plan starts now, the form and its rules, the shift as the API
// takes it, and how the preview names the move.

import { formatDate } from "./ng-shim";
import { AbstractControl, FormControl, FormGroup, type ValidationErrors } from "./ng-shim";
import { PlanDateTypeEnum } from "./model";
import type { PlanElementDto } from "./model";
import type { PlanRulesDto } from "./model";
import type { PlanShiftDto } from "./model";
import { isOutsidePlanDateRange, planDateRange, planDateRangeText } from "./plan-form";
import type { UiButtonToggleOption } from "./model";
import { PLAN_LAG_MINUS_SIGN } from "./plan-dependencies";
import { PLAN_SCHEDULE_DATE_FORMAT } from "./plan-schedule-preview";
import { counted } from "./plan-settings";

/** How the move is given: a number of days, or the date the plan should start on. The API takes exactly one. */
export const PlanShiftMode = {
    ByDays: "by-days",
    ToStartDate: "to-start-date",
} as const;
export type PlanShiftMode = (typeof PlanShiftMode)[keyof typeof PlanShiftMode];

export const PLAN_SHIFT_MODE_OPTIONS: UiButtonToggleOption<PlanShiftMode>[] = [
    { value: PlanShiftMode.ByDays, displayValue: "By days" },
    { value: PlanShiftMode.ToStartDate, displayValue: "To a new start date" },
];

/**
 * Where the plan starts now, as the server measures a move to a new start date from (`PlanScheduler.DaysToStartOn`):
 * the earliest start among elements that can move — dated at both ends, and not Scheduled — or, when none can, the
 * earliest effective start (`SpanStartDate`) anywhere in the tree. Null when nothing is dated. ISO date-only strings
 * compare as dates.
 */
export function planCurrentStart(elements: readonly PlanElementDto[] | null | undefined): string | null {
    let earliestMovable: string | null = null;
    let earliestSpan: string | null = null;
    const earlier = (date: string | null | undefined, than: string | null): string | null => (date && (than === null || date < than) ? date : than);
    const visit = (nodes: readonly PlanElementDto[] | null | undefined): void => {
        for (const element of nodes ?? []) {
            if (element.StartDate && element.EndDate && element.PlanDateType !== PlanDateTypeEnum.Scheduled) {
                earliestMovable = earlier(element.StartDate, earliestMovable);
            }
            earliestSpan = earlier(element.SpanStartDate, earliestSpan);
            visit(element.Children);
        }
    };
    visit(elements);
    return earliestMovable ?? earliestSpan;
}

/**
 * Why a typed number of days can't be sent, or null when it can: a whole, nonzero number within the server's limit
 * either way (`PlanRulesDto.MaxShiftDays`; unchecked here until the rules load — the server still checks).
 */
export function planShiftDaysError(days: number | null | undefined, maxShiftDays: number | null | undefined): string | null {
    if (days === null || days === undefined || Number.isNaN(days)) return "Enter a number of days.";
    if (!Number.isInteger(days)) return "Enter a whole number of days.";
    if (days === 0) return "Enter a number of days other than 0.";
    if (maxShiftDays != null && Math.abs(days) > maxShiftDays) {
        return `Days must be between ${PLAN_LAG_MINUS_SIGN}${maxShiftDays} and ${maxShiftDays}.`;
    }
    return null;
}

/**
 * Why a chosen start date can't be sent, or null when it can: a date, within the server's plan date range, and not
 * the one the plan already starts on (see {@link planCurrentStart}).
 */
export function planShiftStartDateError(
    newStartDate: string | null | undefined,
    currentStart: string | null,
    rules: PlanRulesDto | null | undefined
): string | null {
    if (!newStartDate) return "Choose a new start date.";
    const range = planDateRange(rules);
    // The server's wording (PlanShiftValidator).
    if (isOutsidePlanDateRange(newStartDate, range)) return `The new start date must be ${planDateRangeText(range!)}.`;
    if (newStartDate === currentStart) return "Choose a date other than the plan's current start.";
    return null;
}

export type PlanShiftForm = FormGroup<{
    Mode: FormControl<PlanShiftMode>;
    Days: FormControl<number | null>;
    NewStartDate: FormControl<string | null>;
}>;

/**
 * The Move plan form, By days to start. Control names match `PlanShiftDto`'s, so a field 400 lands on its input. Only
 * the chosen mode's control is enabled ({@link applyPlanShiftMode}), so the form is valid when that one is. `rules` is
 * the server's (`PlanRulesService`), read at validation time so a form built before they load still checks them.
 */
export function createPlanShiftForm(currentStart: string | null, rules: () => PlanRulesDto | null | undefined = () => null): PlanShiftForm {
    const form: PlanShiftForm = new FormGroup({
        Mode: new FormControl<PlanShiftMode>(PlanShiftMode.ByDays, { nonNullable: true }),
        Days: new FormControl<number | null>(null, {
            validators: [(control: AbstractControl<number | null>) => planShiftValidationError(planShiftDaysError(control.value, rules()?.MaxShiftDays))],
        }),
        NewStartDate: new FormControl<string | null>(null, {
            validators: [(control: AbstractControl<string | null>) => planShiftValidationError(planShiftStartDateError(control.value, currentStart, rules()))],
        }),
    });
    applyPlanShiftMode(form, form.controls.Mode.value);
    return form;
}

function planShiftValidationError(message: string | null): ValidationErrors | null {
    return message ? { planShift: { message } } : null;
}

/**
 * Enables the chosen mode's control and disables the other, so only the shown field validates and is sent. A field
 * coming back into view starts untouched, so switching to it doesn't greet the user with an error from an earlier
 * Preview (which touches every control, hidden ones included).
 */
export function applyPlanShiftMode(form: PlanShiftForm, mode: PlanShiftMode): void {
    const [shown, hidden] = mode === PlanShiftMode.ByDays ? [form.controls.Days, form.controls.NewStartDate] : [form.controls.NewStartDate, form.controls.Days];
    if (shown.disabled) {
        shown.enable({ emitEvent: false });
        shown.markAsUntouched();
    }
    hidden.disable({ emitEvent: false });
}

/** The shift as the API takes it: exactly one of Days or NewStartDate, by the chosen mode. Call only on a valid form. */
export function toPlanShiftDto(form: PlanShiftForm): PlanShiftDto {
    const { Mode, Days, NewStartDate } = form.getRawValue();
    return Mode === PlanShiftMode.ByDays ? { Days: Days ?? undefined } : { NewStartDate: NewStartDate ?? undefined };
}

/** A signed number of days: "+90 days", "+1 day", and "−14 days" with a real minus sign, as a lag reads. */
export function formatPlanShiftDays(days: number): string {
    const magnitude = counted(Math.abs(days), "day", "days");
    return days < 0 ? `${PLAN_LAG_MINUS_SIGN}${magnitude}` : `+${magnitude}`;
}

/** What the preview says the move is: "Move plan by +90 days", or "Move plan to start Mar 1, 2027". */
export function planShiftDescription(shift: PlanShiftDto, locale: string): string {
    if (shift.NewStartDate) return `Move plan to start ${formatDate(shift.NewStartDate, PLAN_SCHEDULE_DATE_FORMAT, locale)}`;
    return `Move plan by ${formatPlanShiftDays(shift.Days ?? 0)}`;
}
