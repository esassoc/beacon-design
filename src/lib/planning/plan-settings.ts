// Ported verbatim from Beacon.Web (pages/plan-gantt/plan-settings-drawer/plan-settings.ts on origin/develop); only the import paths changed.
// The Plan settings drawer's rules, kept free of Angular so they are testable as plain functions (shape 1 in
// docs/code-standards/frontend-testing.md): which controls each right shows, which levels can be added or
// removed, the landmark list, form and payload, the details form, and the delete confirmations' copy.

import { formatDate } from "./ng-shim";
import { FormControl, FormGroup, Validators } from "./ng-shim";
import type { PlanDetailDto } from "./model";
import type { PlanElementDto } from "./model";
import type { PlanLandmarkDto } from "./model";
import type { PlanLandmarkUpsertDto } from "./model";
import type { PlanLevelDto } from "./model";
import type { PlanUpdateDto } from "./model";
import { PLAN_LANDMARK_NAME_MAX_LENGTH, PLAN_MIN_LEVELS, type PlanDateRange, planDateRangeValidator, requiredText } from "./plan-form";

/** The caller's PlanRights, one per endpoint family the drawer drives. */
export interface PlanSettingsRights {
    /** Plan details save, level rename and landmark edit. */
    canUpdate: boolean;
    /** Add level and add landmark. */
    canCreate: boolean;
    /** Remove level, delete landmark and delete plan. */
    canDelete: boolean;
}

/** The drawer is worth opening only to a user who can change something in it. */
export function canOpenPlanSettings(rights: PlanSettingsRights): boolean {
    return rights.canUpdate || rights.canCreate || rights.canDelete;
}

/** The plan's levels, root first. */
export function sortedPlanLevels(levels: readonly PlanLevelDto[] | null | undefined): PlanLevelDto[] {
    return [...(levels ?? [])].sort((a, b) => a.Depth - b.Depth);
}

/** A level can be added below the deepest until the plan has the maximum. */
export function planHasRoomForLevel(levels: readonly PlanLevelDto[] | null | undefined, maxLevels: number | null | undefined): boolean {
    return maxLevels != null && (levels?.length ?? 0) < maxLevels;
}

/** Why a level's Remove is held, worded as PlanLevelDeleteValidator words it. */
export const PLAN_LEVEL_REMOVAL_REASONS = {
    onlyLevel: "A plan needs at least one level.",
    notDeepest: "Only the deepest level can be removed.",
    inUse: "Elements use this level. Delete or move them first.",
} as const;

/** Whether a level's Remove may go ahead, and if not, the reason its held trash gives. */
export interface PlanLevelRemoval {
    removable: boolean;
    reason: string | null;
}

/** Every level depth some element in the nested tree sits at. */
export function usedPlanLevelDepths(elements: readonly PlanElementDto[] | null | undefined): Set<number> {
    const depths = new Set<number>();
    const visit = (nodes: readonly PlanElementDto[] | null | undefined): void =>
        (nodes ?? []).forEach((element) => {
            if (element.LevelDepth != null) depths.add(element.LevelDepth);
            visit(element.Children);
        });
    visit(elements);
    return depths;
}

/**
 * Each level's Remove, keyed by depth: only the deepest level of a plan with more than one, and only while no element
 * uses it. The in-use check reads the plan as the page holds it; the server still has the final say with a 400.
 */
export function planLevelRemovals(
    levels: readonly PlanLevelDto[] | null | undefined,
    elements: readonly PlanElementDto[] | null | undefined
): Map<number, PlanLevelRemoval> {
    const removals = new Map<number, PlanLevelRemoval>();
    if (!levels?.length) return removals;
    const deepest = Math.max(...levels.map((level) => level.Depth));
    const used = usedPlanLevelDepths(elements);
    const held = (reason: string): PlanLevelRemoval => ({ removable: false, reason });
    for (const level of levels) {
        removals.set(
            level.Depth,
            levels.length <= PLAN_MIN_LEVELS
                ? held(PLAN_LEVEL_REMOVAL_REASONS.onlyLevel)
                : level.Depth !== deepest
                  ? held(PLAN_LEVEL_REMOVAL_REASONS.notDeepest)
                  : used.has(level.Depth)
                    ? held(PLAN_LEVEL_REMOVAL_REASONS.inUse)
                    : { removable: true, reason: null }
        );
    }
    return removals;
}

/** Every element in the nested tree, not just the roots. */
export function countPlanElements(elements: readonly PlanElementDto[] | null | undefined): number {
    return (elements ?? []).reduce((count, element) => count + 1 + countPlanElements(element.Children), 0);
}

/** "1 level", "3 levels". */
export function counted(count: number, singular: string, plural: string): string {
    return `${count} ${count === 1 ? singular : plural}`;
}

/** "a", "a and b", "a, b and c". */
export function joinWithAnd(parts: string[]): string {
    return parts.length <= 1 ? (parts[0] ?? "") : `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
}

/**
 * The delete confirmation: names the plan and counts what goes with it, from the plan as the page holds it — e.g.
 * "Deletes 'Fish studies', its 4 levels, 37 elements and 12 dependencies. This cannot be undone." A count of zero
 * is left out rather than listed as "0 elements".
 */
export function planDeleteConfirmText(plan: PlanDetailDto): string {
    const levelCount = plan.Levels?.length ?? 0;
    const elementCount = countPlanElements(plan.Elements);
    const dependencyCount = plan.Dependencies?.length ?? 0;
    const landmarkCount = plan.Landmarks?.length ?? 0;
    const parts = [
        levelCount ? counted(levelCount, "level", "levels") : null,
        elementCount ? counted(elementCount, "element", "elements") : null,
        dependencyCount ? counted(dependencyCount, "dependency", "dependencies") : null,
        landmarkCount ? counted(landmarkCount, "landmark", "landmarks") : null,
    ].filter((part): part is string => part !== null);

    const what = parts.length === 0 ? "" : parts.length === 1 ? ` and its ${parts[0]}` : `, its ${joinWithAnd(parts)}`;
    return `Deletes '${plan.PlanName}'${what}. This cannot be undone.`;
}

export type PlanDetailsFormGroup = FormGroup<{
    PlanName: FormControl<string>;
    Description: FormControl<string>;
}>;

/** The details form's value for `plan`: what it opens with, and what it resets to once a save lands. */
export function planDetailsFormValue(plan: PlanDetailDto): { PlanName: string; Description: string } {
    return { PlanName: plan.PlanName ?? "", Description: plan.Description ?? "" };
}

export function createPlanDetailsForm(plan: PlanDetailDto): PlanDetailsFormGroup {
    const value = planDetailsFormValue(plan);
    return new FormGroup({
        PlanName: new FormControl(value.PlanName, { nonNullable: true, validators: [requiredText("Enter a name.")] }),
        Description: new FormControl(value.Description, { nonNullable: true }),
    });
}

/** The update payload: the name trimmed, a blank description omitted. */
export function toPlanUpdateDto(form: PlanDetailsFormGroup): PlanUpdateDto {
    const { PlanName, Description } = form.getRawValue();
    return { PlanName: PlanName.trim(), Description: Description.trim() || undefined };
}

/** How a landmark's date reads in its row — the element drawer's span format. */
export const PLAN_LANDMARK_DATE_FORMAT = "MMM d, y";

/** One landmark's row in the drawer: the landmark, its date as it reads, and its controls' accessible names. */
export interface PlanLandmarkRow {
    landmark: PlanLandmarkDto;
    dateLabel: string;
    editLabel: string;
    saveLabel: string;
    deleteLabel: string;
}

/**
 * The plan's landmarks as the drawer lists them: by date, then by the order they were added, then by name. The API
 * already sends them by date; sorting again keeps the list right whatever order a caller hands it. `formatDate`
 * reads a date-only ISO string by its local Y-M-D parts, so the date never shifts a day off UTC.
 */
export function planLandmarkRows(landmarks: readonly PlanLandmarkDto[] | null | undefined, locale: string): PlanLandmarkRow[] {
    return [...(landmarks ?? [])]
        .sort(
            (a, b) =>
                (a.LandmarkDate ?? "").localeCompare(b.LandmarkDate ?? "") ||
                (a.SortOrder ?? 0) - (b.SortOrder ?? 0) ||
                (a.PlanLandmarkName ?? "").localeCompare(b.PlanLandmarkName ?? "")
        )
        .map((landmark) => ({
            landmark,
            dateLabel: landmark.LandmarkDate ? formatDate(landmark.LandmarkDate, PLAN_LANDMARK_DATE_FORMAT, locale) : "",
            editLabel: `Edit the '${landmark.PlanLandmarkName}' landmark`,
            saveLabel: `Save the '${landmark.PlanLandmarkName}' landmark`,
            deleteLabel: `Delete the '${landmark.PlanLandmarkName}' landmark`,
        }));
}

/** The delete confirmation, naming the landmark. */
export function planLandmarkDeleteConfirmText(landmark: PlanLandmarkDto): string {
    return `Delete the '${landmark.PlanLandmarkName}' landmark? This cannot be undone.`;
}

export type PlanLandmarkFormGroup = FormGroup<{
    PlanLandmarkName: FormControl<string>;
    /** `yyyy-MM-dd` as `ui-date-picker` holds it; "" when unset. */
    LandmarkDate: FormControl<string>;
}>;

/**
 * Control names match `PlanLandmarkUpsertDto`, so a field 400 lands on its input. `dateRange` is the server's
 * (`PlanRulesService`), read at validation time.
 */
export function createPlanLandmarkForm(landmark: PlanLandmarkDto | null = null, dateRange: () => PlanDateRange | null = () => null): PlanLandmarkFormGroup {
    return new FormGroup({
        PlanLandmarkName: new FormControl(landmark?.PlanLandmarkName ?? "", {
            nonNullable: true,
            validators: [requiredText("Enter a name."), Validators.maxLength(PLAN_LANDMARK_NAME_MAX_LENGTH)],
        }),
        LandmarkDate: new FormControl(landmark?.LandmarkDate ?? "", {
            nonNullable: true,
            validators: [requiredText("Enter a date."), planDateRangeValidator(dateRange, "Landmark date")],
        }),
    });
}

/** The create / update payload: the name trimmed, the date as the picker holds it. */
export function toPlanLandmarkUpsertDto(form: PlanLandmarkFormGroup): Required<PlanLandmarkUpsertDto> {
    const { PlanLandmarkName, LandmarkDate } = form.getRawValue();
    return { PlanLandmarkName: PlanLandmarkName.trim(), LandmarkDate };
}
