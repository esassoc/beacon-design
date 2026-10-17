// Ported verbatim from Beacon.Web (pages/plan-list/plan-create-dialog/plan-create-form.ts on origin/develop); only the import paths changed.
import { FormArray, FormControl, FormGroup } from "./ng-shim";
import type { PlanCreateDto } from "./model";
import type { PlanLevelCreateDto } from "./model";
import { createPlanLevelGroup, PLAN_MIN_LEVELS, type PlanLevelFormGroup, requiredText, toPlanLevelCreateDto } from "./plan-form";

/** The sample plan's levels (`SamplePlanFixture`), in depth order — the New plan dialog starts from these. */
export const SAMPLE_PLAN_LEVELS: readonly Required<PlanLevelCreateDto>[] = [
    { SingularName: "Program", PluralName: "Programs" },
    { SingularName: "Study", PluralName: "Studies" },
    { SingularName: "Sub-study", PluralName: "Sub-studies" },
    { SingularName: "Task", PluralName: "Tasks" },
];

export type PlanCreateFormGroup = FormGroup<{
    PlanName: FormControl<string>;
    Description: FormControl<string>;
    Levels: FormArray<PlanLevelFormGroup>;
}>;

export function createPlanCreateForm(): PlanCreateFormGroup {
    return new FormGroup({
        PlanName: new FormControl("", { nonNullable: true, validators: [requiredText("Enter a name.")] }),
        Description: new FormControl("", { nonNullable: true }),
        Levels: new FormArray(SAMPLE_PLAN_LEVELS.map((level) => createPlanLevelGroup(level))),
    });
}

/** Room for another level under the server's maximum; none while that maximum isn't known yet. */
export function canAddPlanLevel(levels: FormArray<PlanLevelFormGroup>, maxLevels: number | null | undefined): boolean {
    return maxLevels != null && levels.length < maxLevels;
}

export function canRemovePlanLevel(levels: FormArray<PlanLevelFormGroup>): boolean {
    return levels.length > PLAN_MIN_LEVELS;
}

/**
 * Appends a blank level at the next depth. Blank rather than a sample name: after a removal the remaining rows
 * have shifted up, so the sample name for the new depth could repeat one already in the list. No-op at the maximum.
 */
export function addPlanLevel(levels: FormArray<PlanLevelFormGroup>, maxLevels: number | null | undefined): void {
    if (!canAddPlanLevel(levels, maxLevels)) return;
    levels.push(createPlanLevelGroup());
    levels.markAsDirty();
}

/** Removes the level at `index`; the rows below move up a depth. No-op at the minimum. */
export function removePlanLevel(levels: FormArray<PlanLevelFormGroup>, index: number): void {
    if (!canRemovePlanLevel(levels)) return;
    levels.removeAt(index);
    levels.markAsDirty();
}

/** The create payload: names trimmed, a blank description omitted, levels in depth order. */
export function toPlanCreateDto(form: PlanCreateFormGroup): PlanCreateDto {
    const { PlanName, Description } = form.getRawValue();
    return {
        PlanName: PlanName.trim(),
        Description: Description.trim() || undefined,
        Levels: form.controls.Levels.controls.map(toPlanLevelCreateDto),
    };
}
