// Ported verbatim from Beacon.Web (pages/plan-gantt/plan-element-drawer/plan-dependencies.ts on origin/develop); only the import paths changed.
// The element drawer's dependency lists (BCN-1821), kept free of Angular components so they are testable as plain
// functions (shape 1 in docs/code-standards/frontend-testing.md): what an element waits on, what it blocks, how a
// lag reads, and the forms and payloads behind Waits on's edit-lag, remove and Add predecessor.

import { AbstractControl, FormControl, FormGroup, type ValidationErrors, Validators } from "./ng-shim";
import type { PlanDetailDto } from "./model";
import type { PlanElementDependencyDto } from "./model";
import { PlanElementDependencyTypeEnum } from "./model";
import type { PlanElementDependencyCreateDto } from "./model";
import type { PlanElementDependencyUpdateDto } from "./model";
import type { PlanElementDto } from "./model";
import type { PlanLinkCandidateDto } from "./model";
import { PLAN_LAG_DAYS_LIMIT } from "./plan-form";
import { PLAN_PATH_SEPARATOR } from "./plan-row-actions";
import { counted } from "./plan-settings";

/** A real minus sign (U+2212), not a hyphen: a lead reads "−14 days". */
export const PLAN_LAG_MINUS_SIGN = "−";

/** "0 days", "1 day", "10 days"; a negative lag (a lead) "−14 days". */
export function formatPlanLagDays(lagDays: number | null | undefined): string {
    const days = lagDays ?? 0;
    const magnitude = counted(Math.abs(days), "day", "days");
    return days < 0 ? `${PLAN_LAG_MINUS_SIGN}${magnitude}` : magnitude;
}

/** One dependency as a drawer row, seen from the element the drawer is open on. */
export interface PlanDependencyRow {
    planElementDependencyID: string;
    /** The element at the other end: the predecessor in Waits on, the successor in Blocks. */
    planElementID: string;
    planElementName: string;
    dependencyType: PlanElementDependencyTypeEnum;
    /** Days after the predecessor; negative is a lead. */
    lagDays: number;
    /** {@link formatPlanLagDays} of `lagDays`. */
    lagLabel: string;
}

/** Each element's position in the Gantt — the pre-order walk `planGanttRows` draws — keyed by PlanElementID. */
function planElementOrder(elements: readonly PlanElementDto[] | null | undefined): Map<string, { element: PlanElementDto; index: number }> {
    const order = new Map<string, { element: PlanElementDto; index: number }>();
    const visit = (element: PlanElementDto): void => {
        order.set(element.PlanElementID, { element, index: order.size });
        (element.Children ?? []).forEach(visit);
    };
    (elements ?? []).forEach(visit);
    return order;
}

/**
 * The dependencies touching `planElementID` at one end, as rows naming the element at the other — in Gantt row
 * order, so the list reads top to bottom like the chart. A dependency whose other end isn't in the tree is skipped.
 */
function planDependencyRows(plan: PlanDetailDto, planElementID: string, end: "predecessors" | "successors"): PlanDependencyRow[] {
    const order = planElementOrder(plan.Elements);
    const rows: { row: PlanDependencyRow; index: number }[] = [];
    for (const dependency of plan.Dependencies ?? []) {
        const otherID = otherEnd(dependency, planElementID, end);
        const other = otherID ? order.get(otherID) : undefined;
        if (!other) continue;
        rows.push({
            index: other.index,
            row: {
                planElementDependencyID: dependency.PlanElementDependencyID,
                planElementID: other.element.PlanElementID,
                planElementName: other.element.PlanElementName ?? "",
                dependencyType: dependency.PlanElementDependencyType,
                lagDays: dependency.LagDays ?? 0,
                lagLabel: formatPlanLagDays(dependency.LagDays),
            },
        });
    }
    return rows.sort((a, b) => a.index - b.index).map(({ row }) => row);
}

/** The id at the far end of `dependency` when its near end is `planElementID`; null when it doesn't touch it. */
function otherEnd(dependency: PlanElementDependencyDto, planElementID: string, end: "predecessors" | "successors"): string | null {
    if (end === "predecessors") return dependency.SuccessorPlanElementID === planElementID ? dependency.PredecessorPlanElementID : null;
    return dependency.PredecessorPlanElementID === planElementID ? dependency.SuccessorPlanElementID : null;
}

/** Waits on: the element's predecessors, each with its lag. */
export function planElementPredecessorRows(plan: PlanDetailDto, planElementID: string): PlanDependencyRow[] {
    return planDependencyRows(plan, planElementID, "predecessors");
}

/** Blocks: the elements that wait on this one, each with its lag. */
export function planElementSuccessorRows(plan: PlanDetailDto, planElementID: string): PlanDependencyRow[] {
    return planDependencyRows(plan, planElementID, "successors");
}

/** A new link starts with no lag: the successor may start the day the predecessor finishes. */
export const PLAN_DEFAULT_LAG_DAYS = 0;

/**
 * Why a typed lag can't be sent, or null when it can: a whole number of days within {@link PLAN_LAG_DAYS_LIMIT}
 * either way. Mirrors the server's range check, which answers the same out-of-range lag with a 400 on `LagDays`.
 */
export function planLagDaysError(lagDays: number | null | undefined): string | null {
    if (lagDays === null || lagDays === undefined || Number.isNaN(lagDays)) return "Enter a lag in days.";
    if (!Number.isInteger(lagDays)) return "Enter a whole number of days.";
    if (Math.abs(lagDays) > PLAN_LAG_DAYS_LIMIT) {
        return `Lag must be between ${PLAN_LAG_MINUS_SIGN}${PLAN_LAG_DAYS_LIMIT} and ${PLAN_LAG_DAYS_LIMIT} days.`;
    }
    return null;
}

/** {@link planLagDaysError} as a validator, carrying its copy for `ui-field-error`. */
export function planLagDaysValidator(control: AbstractControl<number | null>): ValidationErrors | null {
    const message = planLagDaysError(control.value);
    return message ? { planLagDays: { message } } : null;
}

export type PlanLagForm = FormGroup<{ LagDays: FormControl<number | null> }>;

/** The inline edit-lag row's form, seeded with the link's current lag. */
export function createPlanLagForm(lagDays: number = PLAN_DEFAULT_LAG_DAYS): PlanLagForm {
    return new FormGroup({ LagDays: new FormControl<number | null>(lagDays, { validators: [planLagDaysValidator] }) });
}

/** The Add predecessor row's form: no predecessor chosen yet, no lag. Control names match the create DTO's, so a field 400 lands on its input. */
export type PlanPredecessorForm = FormGroup<{
    PredecessorPlanElementID: FormControl<string | null>;
    LagDays: FormControl<number | null>;
}>;

export function createPlanPredecessorForm(): PlanPredecessorForm {
    return new FormGroup({
        PredecessorPlanElementID: new FormControl<string | null>(null, { validators: [Validators.required] }),
        LagDays: new FormControl<number | null>(PLAN_DEFAULT_LAG_DAYS, { validators: [planLagDaysValidator] }),
    });
}

/** The PUT body for an edit-lag. Call only on a valid form: the validator has ruled out an empty lag. */
export function toPlanElementDependencyUpdateDto(form: PlanLagForm): PlanElementDependencyUpdateDto {
    return { LagDays: form.getRawValue().LagDays ?? PLAN_DEFAULT_LAG_DAYS };
}

/** The POST body linking the chosen predecessor to `successorPlanElementID`. Finish-to-start is the only type there is. */
export function toPlanElementDependencyCreateDto(form: PlanPredecessorForm, successorPlanElementID: string): PlanElementDependencyCreateDto {
    const { PredecessorPlanElementID, LagDays } = form.getRawValue();
    return {
        PredecessorPlanElementID: PredecessorPlanElementID ?? undefined,
        SuccessorPlanElementID: successorPlanElementID,
        PlanElementDependencyType: PlanElementDependencyTypeEnum.FinishToStart,
        LagDays: LagDays ?? PLAN_DEFAULT_LAG_DAYS,
    };
}

/** One Add predecessor choice, labelled like a Move… target: its level as a quiet tag, its name, and where it sits. */
export interface PlanPredecessorOption {
    planElementID: string;
    name: string;
    levelName: string | null;
    /** Its ancestors' names, root first; null at the top of the tree. */
    path: string | null;
}

/** The server's candidates, as picker options. The server has already left out every element a link would be refused for. */
export function planPredecessorOptions(candidates: readonly PlanLinkCandidateDto[] | null | undefined): PlanPredecessorOption[] {
    return (candidates ?? []).map((candidate) => ({
        planElementID: candidate.PlanElementID ?? "",
        name: candidate.PlanElementName ?? "",
        levelName: candidate.LevelSingularName ?? null,
        path: candidate.AncestorNames?.length ? candidate.AncestorNames.join(PLAN_PATH_SEPARATOR) : null,
    }));
}

/** The remove confirm's text, naming both ends of the link. */
export function planDependencyRemoveConfirmText(successorName: string, row: PlanDependencyRow): string {
    return `'${successorName}' will no longer wait on '${row.planElementName}'.`;
}
