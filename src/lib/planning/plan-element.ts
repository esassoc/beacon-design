// Ported verbatim from Beacon.Web (pages/plan-gantt/plan-element-drawer/plan-element.ts on origin/develop); only the import paths changed.
// The plan element drawer's rules, kept free of Angular components so they are testable as plain functions (shape 1
// in docs/code-standards/frontend-testing.md): where an element sits in the tree, which levels it may take, whether
// the level picker may add one inline, the form with its date rules, and the create / update payloads.

import { AbstractControl, FormControl, FormGroup, type ValidationErrors, Validators } from "./ng-shim";
import { PlanDateTypeEnum } from "./model";
import type { PlanElementCreateDto } from "./model";
import type { PlanElementDto } from "./model";
import type { PlanElementUpdateDto } from "./model";
import type { PlanLevelDto } from "./model";
import { PLAN_ELEMENT_NAME_MAX_LENGTH, type PlanDateRange, planDateRangeValidator, requiredText } from "./plan-form";
import type { UiButtonToggleOption } from "./model";

/** The caller's PlanRights, one per endpoint the drawer drives. */
export interface PlanElementRights {
    /** Edit an element and a predecessor link's lag (PUTs). Without it the edit drawer is read-only. */
    canUpdate: boolean;
    /** Add an element, add a level inline from the level picker, and add a predecessor link (POSTs). */
    canCreate: boolean;
    /** Remove a predecessor link from Waits on (DELETE). */
    canDelete: boolean;
}

/** What the drawer is open on: an existing element, or a new one under a parent (null for a top-level element). */
export type PlanElementDrawerTarget = { kind: "edit"; planElementID: string } | { kind: "create"; parentPlanElementID: string | null };

export function samePlanElementDrawerTarget(a: PlanElementDrawerTarget, b: PlanElementDrawerTarget): boolean {
    if (a.kind === "edit" && b.kind === "edit") return a.planElementID === b.planElementID;
    if (a.kind === "create" && b.kind === "create") return a.parentPlanElementID === b.parentPlanElementID;
    return false;
}

/** The row the Gantt keeps selected while the drawer is open: the element being edited; nothing while creating. */
export function selectedPlanElementID(target: PlanElementDrawerTarget): string | null {
    return target.kind === "edit" ? target.planElementID : null;
}

/** An element and its parent (null at the top level), found anywhere in the nested tree. */
export interface PlanElementLocation {
    element: PlanElementDto;
    parent: PlanElementDto | null;
}

export function findPlanElement(
    elements: readonly PlanElementDto[] | null | undefined,
    planElementID: string,
    parent: PlanElementDto | null = null
): PlanElementLocation | null {
    for (const element of elements ?? []) {
        if (element.PlanElementID === planElementID) return { element, parent };
        const found = findPlanElement(element.Children, planElementID, element);
        if (found) return found;
    }
    return null;
}

/**
 * The bounds a level choice must sit inside: deeper than the parent's level (any level at the top), and shallower
 * than every child's. Mirrors the server's structure rules; it answers a 400 if the plan moved underneath us.
 */
export interface PlanLevelBounds {
    /** The parent's level depth, or null for a top-level element. */
    parentLevelDepth: number | null;
    /** The shallowest child's level depth, or null for an element without children (and every new element). */
    shallowestChildLevelDepth: number | null;
}

export function planLevelBounds(parent: PlanElementDto | null, children: readonly PlanElementDto[] | null | undefined): PlanLevelBounds {
    const childDepths = (children ?? []).map((child) => child.LevelDepth ?? 0);
    return {
        parentLevelDepth: parent?.LevelDepth ?? null,
        shallowestChildLevelDepth: childDepths.length ? Math.min(...childDepths) : null,
    };
}

export function isLevelDepthWithinBounds(depth: number, bounds: PlanLevelBounds): boolean {
    const deeperThanParent = bounds.parentLevelDepth === null || depth > bounds.parentLevelDepth;
    const shallowerThanChildren = bounds.shallowestChildLevelDepth === null || depth < bounds.shallowestChildLevelDepth;
    return deeperThanParent && shallowerThanChildren;
}

/** The plan's levels an element may take, root first. Levels may be skipped, so this can be any subset. */
export function validPlanLevels(levels: readonly PlanLevelDto[] | null | undefined, bounds: PlanLevelBounds): PlanLevelDto[] {
    return [...(levels ?? [])].sort((a, b) => a.Depth - b.Depth).filter((level) => isLevelDepthWithinBounds(level.Depth, bounds));
}

/** The plan's deepest level depth, or 0 for a plan with no levels. */
export function deepestPlanLevelDepth(levels: readonly PlanLevelDto[] | null | undefined): number {
    return (levels ?? []).reduce((deepest, level) => Math.max(deepest, level.Depth), 0);
}

/** The depth a level added now would land at: one below the deepest (levels are contiguous from 1). */
export function nextPlanLevelDepth(levels: readonly PlanLevelDto[] | null | undefined): number {
    return deepestPlanLevelDepth(levels) + 1;
}

/**
 * Whether the level picker offers "Add level" (UX Decree 1): the user may create, the plan has room for another
 * level, and the level it would add — one below the deepest — is a valid choice for this element. An element with
 * children never qualifies (its children already sit at or above the deepest level).
 */
export function canAddPlanLevelInline(
    levels: readonly PlanLevelDto[] | null | undefined,
    bounds: PlanLevelBounds,
    canCreate: boolean,
    maxLevels: number | null | undefined
): boolean {
    // An unknown maximum (the server's rules not loaded yet) offers nothing rather than assuming one.
    if (!canCreate || maxLevels == null || (levels?.length ?? 0) >= maxLevels) return false;
    return isLevelDepthWithinBounds(nextPlanLevelDepth(levels), bounds);
}

/** A new element goes last among its siblings: one past the highest SortOrder, or 0 when it is the first. */
export function nextPlanElementSortOrder(siblings: readonly PlanElementDto[] | null | undefined): number {
    if (!siblings?.length) return 0;
    return Math.max(...siblings.map((sibling) => sibling.SortOrder ?? 0)) + 1;
}

/** The Date type toggle's help: what the selected type means for the element's dates. */
export const PLAN_DATE_TYPE_HINTS: Record<PlanDateTypeEnum, string> = {
    [PlanDateTypeEnum.Estimated]: "Estimated dates move when the plan is rescheduled.",
    [PlanDateTypeEnum.Scheduled]: "Scheduled dates are fixed. Shifts and dependency changes never move them; a change that would is flagged instead.",
};

/** The two date types, in the order the toggle shows them; labels are the enum members themselves. */
export const PLAN_DATE_TYPE_OPTIONS: UiButtonToggleOption<PlanDateTypeEnum>[] = [
    { value: PlanDateTypeEnum.Estimated, displayValue: PlanDateTypeEnum.Estimated },
    { value: PlanDateTypeEnum.Scheduled, displayValue: PlanDateTypeEnum.Scheduled },
];

export type PlanElementFormGroup = FormGroup<{
    PlanElementName: FormControl<string>;
    LevelDepth: FormControl<number | null>;
    /** `yyyy-MM-dd` as `ui-date-picker` holds it; "" when unset. */
    StartDate: FormControl<string>;
    EndDate: FormControl<string>;
    PlanDateType: FormControl<PlanDateTypeEnum>;
    IsMilestone: FormControl<boolean>;
}>;

export type PlanElementFormValue = ReturnType<PlanElementFormGroup["getRawValue"]>;

type DateField = "StartDate" | "EndDate";

/**
 * The date rules, as the server applies them: a milestone needs its one date (its end is its start); otherwise the
 * dates come both or neither, and the end can't be before the start. Each message lands on the field that fixes it.
 */
export function planElementDateErrors(value: Pick<PlanElementFormValue, DateField | "IsMilestone">): Partial<Record<DateField, string>> {
    const { StartDate, EndDate, IsMilestone } = value;
    if (IsMilestone) {
        return StartDate ? {} : { StartDate: "Enter the milestone's date." };
    }
    if (StartDate && !EndDate) return { EndDate: "Enter an end date." };
    if (EndDate && !StartDate) return { StartDate: "Enter a start date." };
    // ISO dates compare correctly as strings.
    if (StartDate && EndDate && EndDate < StartDate) return { EndDate: "The end date can't be before the start date." };
    return {};
}

/** A date control's share of {@link planElementDateErrors}, read off its siblings through the parent group. */
function planElementDateValidator(field: DateField): (control: AbstractControl) => ValidationErrors | null {
    return (control) => {
        const form = control.parent as PlanElementFormGroup | null;
        if (!form) return null;
        const message = planElementDateErrors(form.getRawValue())[field];
        return message ? { planElementDates: { message } } : null;
    };
}

/**
 * Re-runs the cross-field date rules after any change to the form. `onlySelf` keeps the group's valueChanges from
 * re-firing (no loop) while each control still emits the status event its `ui-*` field reads; the group's own
 * status is then recomputed silently from the refreshed children.
 */
export function refreshPlanElementDateValidity(form: PlanElementFormGroup): void {
    form.controls.StartDate.updateValueAndValidity({ onlySelf: true });
    form.controls.EndDate.updateValueAndValidity({ onlySelf: true });
    form.updateValueAndValidity({ emitEvent: false });
}

/** `dateRange` is the server's (`PlanRulesService`), read at validation time; unknown, the range goes unchecked here. */
export function createPlanElementForm(initial: Partial<PlanElementFormValue>, dateRange: () => PlanDateRange | null = () => null): PlanElementFormGroup {
    // The server's wording for an element date out of range (PlanElementValidationErrors).
    const inRange = planDateRangeValidator(dateRange, "Dates");
    return new FormGroup({
        PlanElementName: new FormControl(initial.PlanElementName ?? "", {
            nonNullable: true,
            validators: [requiredText("Enter a name."), Validators.maxLength(PLAN_ELEMENT_NAME_MAX_LENGTH)],
        }),
        LevelDepth: new FormControl<number | null>(initial.LevelDepth ?? null, { validators: [Validators.required] }),
        StartDate: new FormControl(initial.StartDate ?? "", { nonNullable: true, validators: [planElementDateValidator("StartDate"), inRange] }),
        EndDate: new FormControl(initial.EndDate ?? "", { nonNullable: true, validators: [planElementDateValidator("EndDate"), inRange] }),
        PlanDateType: new FormControl<PlanDateTypeEnum>(initial.PlanDateType ?? PlanDateTypeEnum.Estimated, { nonNullable: true }),
        IsMilestone: new FormControl(initial.IsMilestone ?? false, { nonNullable: true }),
    });
}

/** The form's starting values for an existing element: its stored dates (a parent's planned window), not its span. */
export function planElementFormValue(element: PlanElementDto): PlanElementFormValue {
    return {
        PlanElementName: element.PlanElementName ?? "",
        LevelDepth: element.LevelDepth ?? null,
        StartDate: element.StartDate ?? "",
        EndDate: element.EndDate ?? "",
        PlanDateType: element.PlanDateType ?? PlanDateTypeEnum.Estimated,
        IsMilestone: element.IsMilestone ?? false,
    };
}

/** A new element's starting values: the shallowest level it may take, and Estimated dates. */
export function newPlanElementFormValue(validLevels: readonly PlanLevelDto[]): PlanElementFormValue {
    return {
        PlanElementName: "",
        LevelDepth: validLevels[0]?.Depth ?? null,
        StartDate: "",
        EndDate: "",
        PlanDateType: PlanDateTypeEnum.Estimated,
        IsMilestone: false,
    };
}

/** The fields create and update share: the name trimmed, blank dates omitted, and a milestone's end set to its start. */
export function toPlanElementUpdateDto(value: PlanElementFormValue): PlanElementUpdateDto {
    const startDate = value.StartDate || undefined;
    return {
        PlanElementName: value.PlanElementName.trim(),
        LevelDepth: value.LevelDepth ?? undefined,
        StartDate: startDate,
        EndDate: value.IsMilestone ? startDate : value.EndDate || undefined,
        PlanDateType: value.PlanDateType,
        IsMilestone: value.IsMilestone,
    };
}

export function toPlanElementCreateDto(value: PlanElementFormValue, parentPlanElementID: string | null, sortOrder: number): PlanElementCreateDto {
    return {
        ...toPlanElementUpdateDto(value),
        ParentPlanElementID: parentPlanElementID ?? undefined,
        SortOrder: sortOrder,
    };
}
