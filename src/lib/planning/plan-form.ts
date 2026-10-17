// Ported verbatim from Beacon.Web (shared/planning/plan-form.ts on origin/develop); only the import paths changed.
// The plan form rules shared by every surface that names a plan, its levels, landmarks or elements: the New plan
// dialog (plan-list), and the Plan settings drawer, element drawer and inline Add level panel (plan-gantt).
// Kept free of Angular components so it is testable as plain functions.

import { formatDate } from "./ng-shim";
import { AbstractControl, FormControl, FormGroup, type ValidationErrors, type ValidatorFn } from "./ng-shim";
import type { PlanLevelCreateDto } from "./model";
import type { PlanRulesDto } from "./model";

/** A plan has at least one level. The most it may have is the server's, served by `PlanRulesService`. */
export const PLAN_MIN_LEVELS = 1;

/** Hard stops matching `PlanCreateValidator` (dbo.Plan.PlanName VARCHAR(200), dbo.PlanLevel names VARCHAR(100)). */
export const PLAN_NAME_MAX_LENGTH = 200;
export const PLAN_LEVEL_NAME_MAX_LENGTH = 100;
/** Matches `PlanElementValidationErrors.PlanElementNameMaxLength` (dbo.PlanElement.PlanElementName VARCHAR(500)). */
export const PLAN_ELEMENT_NAME_MAX_LENGTH = 500;
/** A dependency's lag (or, negative, its lead) stays within this many days either way; mirrors `PlanElementDependency.LagDaysLimit`. */
export const PLAN_LAG_DAYS_LIMIT = 3650;
/** Matches `PlanLandmarkUpsertValidator.PlanLandmarkNameMaxLength` (dbo.PlanLandmark.PlanLandmarkName VARCHAR(200)). */
export const PLAN_LANDMARK_NAME_MAX_LENGTH = 200;

/** The dates every plan date must fall between, `yyyy-MM-dd` as the pickers hold them. */
export interface PlanDateRange {
    min: string;
    max: string;
}

/** The server's date range out of its rules (`PlanRulesService`); null until they load. */
export function planDateRange(rules: PlanRulesDto | null | undefined): PlanDateRange | null {
    return rules?.MinDate && rules?.MaxDate ? { min: rules.MinDate, max: rules.MaxDate } : null;
}

/** "between January 1, 1900 and December 31, 2199", worded as the server's `PlanDateRules.RangeText`. */
export function planDateRangeText(range: PlanDateRange): string {
    const long = (date: string) => formatDate(date, "MMMM d, y", "en-US");
    return `between ${long(range.min)} and ${long(range.max)}`;
}

/** Whether a set `yyyy-MM-dd` date falls outside the range; an unset date, or an unknown range, is not. */
export function isOutsidePlanDateRange(date: string | null | undefined, range: PlanDateRange | null): boolean {
    // ISO dates compare correctly as strings.
    return !!date && !!range && (date < range.min || date > range.max);
}

/**
 * A plan date outside the server's range, caught before the round-trip, with the server's own wording — e.g.
 * "Landmark date must be between January 1, 1900 and December 31, 2199." Reads the range when it validates, so a
 * form built before the rules arrive still checks against them.
 */
export function planDateRangeValidator(range: () => PlanDateRange | null, subject: string): ValidatorFn {
    return (control: AbstractControl<string | null>) => {
        const current = range();
        return isOutsidePlanDateRange(control.value, current) ? { planDateRange: { message: `${subject} must be ${planDateRangeText(current!)}.` } } : null;
    };
}

/** Required, and not just whitespace — the server trims before it checks. Carries its own copy for `ui-field-error`. */
export function requiredText(message: string): (control: AbstractControl<string>) => ValidationErrors | null {
    return (control) => (control.value?.trim() ? null : { requiredText: { message } });
}

export type PlanLevelFormGroup = FormGroup<{
    SingularName: FormControl<string>;
    PluralName: FormControl<string>;
}>;

export function createPlanLevelGroup(level: PlanLevelCreateDto = {}): PlanLevelFormGroup {
    return new FormGroup({
        SingularName: new FormControl(level.SingularName ?? "", { nonNullable: true, validators: [requiredText("Enter a singular name.")] }),
        PluralName: new FormControl(level.PluralName ?? "", { nonNullable: true, validators: [requiredText("Enter a plural name.")] }),
    });
}

/** A level's names as the API takes them, trimmed. */
export function toPlanLevelCreateDto(level: PlanLevelFormGroup): Required<PlanLevelCreateDto> {
    const { SingularName, PluralName } = level.getRawValue();
    return { SingularName: SingularName.trim(), PluralName: PluralName.trim() };
}
