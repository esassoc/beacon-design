// Ported verbatim from Beacon.Web (pages/plan-gantt/plan-row-actions.ts on origin/develop); only the import paths changed.
// The Gantt's per-row actions (BCN-1820), kept free of Angular so they are testable as plain functions (shape 1 in
// docs/code-standards/frontend-testing.md): which controls a row offers, where it sits among its siblings for Move
// up / Move down, which elements it may move under, and what its delete takes with it.

import type { PlanDetailDto } from "./model";
import type { PlanElementDependencyDto } from "./model";
import type { PlanElementDto } from "./model";
import type { PlanLevelDto } from "./model";
import { canAddPlanLevelInline, findPlanElement, planLevelBounds, validPlanLevels } from "./plan-element";
import { counted, joinWithAnd } from "./plan-settings";
import { MILESTONE_TAG } from "./plan-gantt-rows";

/** The caller's PlanRights, one per endpoint family the row actions drive. */
export interface PlanRowActionRights {
    /** + Add child (POST element). */
    canCreate: boolean;
    /** Move up, Move down and Move… (PUT sort order, PUT parent). */
    canUpdate: boolean;
    /** Delete (DELETE element). */
    canDelete: boolean;
}

/** The row menu shows only to a user who can use something in it. */
export function hasPlanRowMenu(rights: PlanRowActionRights): boolean {
    return rights.canUpdate || rights.canDelete;
}

/**
 * + Add child: the Create right, never under a milestone — the server rejects a milestone parent — and only where the
 * child's drawer would have a level to give it: a plan level below this element's, or room to add one inline there.
 */
export function canAddPlanElementChild(
    element: PlanElementDto,
    levels: readonly PlanLevelDto[] | null | undefined,
    canCreate: boolean,
    maxLevels: number | null | undefined
): boolean {
    if (!canCreate || element.IsMilestone) return false;
    // The child's bounds, as its drawer computes them: under this element, with no children of its own.
    const bounds = planLevelBounds(element, null);
    return validPlanLevels(levels, bounds).length > 0 || canAddPlanLevelInline(levels, bounds, canCreate, maxLevels);
}

/** The noun a row goes by — the tag its outline row shows: its level's name, or "Milestone" for a milestone. */
export function planElementNoun(element: PlanElementDto): string {
    return element.IsMilestone ? MILESTONE_TAG : (element.LevelSingularName ?? "");
}

/** Where an element sits among its siblings (its parent's children, or the plan's top level). */
export interface PlanSiblingPosition {
    /** 0-based, in display order. */
    index: number;
    count: number;
    isFirst: boolean;
    isLast: boolean;
}

export function planSiblingPosition(elements: readonly PlanElementDto[] | null | undefined, planElementID: string): PlanSiblingPosition | null {
    const location = findPlanElement(elements, planElementID);
    if (!location) return null;
    const siblings = location.parent ? (location.parent.Children ?? []) : (elements ?? []);
    const index = siblings.findIndex((sibling) => sibling.PlanElementID === planElementID);
    return { index, count: siblings.length, isFirst: index === 0, isLast: index === siblings.length - 1 };
}

export type PlanReorderDirection = "up" | "down";

/** The sort-order endpoint's target Index for a one-step move: the 0-based position above or below. */
export function planReorderIndex(position: PlanSiblingPosition, direction: PlanReorderDirection): number {
    return direction === "up" ? position.index - 1 : position.index + 1;
}

/** The element's own ID and every descendant's — what moves with it, and what a delete removes. */
export function planElementSubtreeIDs(element: PlanElementDto): Set<string> {
    const ids = new Set<string>();
    const visit = (node: PlanElementDto): void => {
        ids.add(node.PlanElementID);
        (node.Children ?? []).forEach(visit);
    };
    visit(element);
    return ids;
}

/** The label of the move target that takes an element out from under its parent. */
export const PLAN_TOP_LEVEL_LABEL = "Top level";

/** Joins an option's ancestor names into its path, root first. */
export const PLAN_PATH_SEPARATOR = " / ";

/** One choice in the Move… dialog: an element to sit under, or the plan's top level. */
export interface PlanMoveTarget {
    /**
     * The search-select key. An element's own ID — or, for the top level, the plan's: the plan is what a top-level
     * element hangs from, so its ID names that spot without inventing a sentinel (`null` would read as "nothing
     * chosen"). Only ever compared; {@link parentPlanElementID} is what reaches the API.
     */
    key: string;
    /** The move's ParentPlanElementID: the target element, or null for the top level. */
    parentPlanElementID: string | null;
    /** The target's level name, or null for the top level. */
    levelName: string | null;
    name: string;
    /** The target's ancestors' names, root first; null at the top of the tree. */
    path: string | null;
}

/**
 * Where an element may move: the top level (unless it is already there), then every element — in display order —
 * that is outside the moving element's own subtree, sits at a shallower level, isn't a milestone and isn't its
 * current parent. Mirrors the server's rules, which answer a 400 should the plan have moved underneath us.
 */
export function planMoveTargets(plan: PlanDetailDto, planElementID: string): PlanMoveTarget[] {
    const location = findPlanElement(plan.Elements, planElementID);
    if (!location) return [];
    const { element, parent } = location;
    const subtree = planElementSubtreeIDs(element);
    const levelDepth = element.LevelDepth ?? 0;
    const targets: PlanMoveTarget[] = [];
    if (parent) {
        targets.push({ key: plan.PlanID, parentPlanElementID: null, levelName: null, name: PLAN_TOP_LEVEL_LABEL, path: null });
    }

    const visit = (node: PlanElementDto, ancestors: string[]): void => {
        if (subtree.has(node.PlanElementID)) return;
        const isValid = (node.LevelDepth ?? 0) < levelDepth && !node.IsMilestone && node.PlanElementID !== parent?.PlanElementID;
        if (isValid) {
            targets.push({
                key: node.PlanElementID,
                parentPlanElementID: node.PlanElementID,
                levelName: node.LevelSingularName ?? null,
                name: node.PlanElementName ?? "",
                path: ancestors.length ? ancestors.join(PLAN_PATH_SEPARATOR) : null,
            });
        }
        (node.Children ?? []).forEach((child) => visit(child, [...ancestors, node.PlanElementName ?? ""]));
    };
    (plan.Elements ?? []).forEach((node) => visit(node, []));
    return targets;
}

/** What deleting an element takes with it. */
export interface PlanElementDeleteImpact {
    /** Every element under it, at any depth. */
    descendantCount: number;
    /** Each dependency with either end in the removed subtree, counted once. */
    dependencyCount: number;
}

export function planElementDeleteImpact(
    element: PlanElementDto,
    dependencies: readonly PlanElementDependencyDto[] | null | undefined
): PlanElementDeleteImpact {
    const removed = planElementSubtreeIDs(element);
    return {
        descendantCount: removed.size - 1,
        dependencyCount: (dependencies ?? []).filter(
            (dependency) => removed.has(dependency.PredecessorPlanElementID) || removed.has(dependency.SuccessorPlanElementID)
        ).length,
    };
}

/** The delete confirmation's header, naming the element. */
export function planElementDeleteConfirmHeader(element: PlanElementDto): string {
    return `Delete '${element.PlanElementName}'`;
}

/**
 * The delete confirmation's copy, counted from the plan as the page holds it — e.g. "Deletes this Study, 4 elements
 * under it and 2 dependencies. This cannot be undone." A count of zero is left out rather than listed.
 */
export function planElementDeleteConfirmText(element: PlanElementDto, impact: PlanElementDeleteImpact): string {
    const parts = [
        impact.descendantCount ? `${counted(impact.descendantCount, "element", "elements")} under it` : null,
        impact.dependencyCount ? counted(impact.dependencyCount, "dependency", "dependencies") : null,
    ].filter((part): part is string => part !== null);

    const subject = `this ${planElementNoun(element)}`;
    const what = parts.length === 0 ? subject : parts.length === 1 ? `${subject} and ${parts[0]}` : `${subject}, ${joinWithAnd(parts)}`;
    return `Deletes ${what}. This cannot be undone.`;
}

/** What one row's actions template needs, precomputed so the template reads fields rather than calling methods. */
export interface PlanRowActionsView {
    canAddChild: boolean;
    /** The + Add child button's accessible name and tooltip. */
    addChildLabel: string;
    /** The row menu trigger's accessible name and tooltip. */
    menuLabel: string;
    /** Move up is unavailable. */
    isFirst: boolean;
    /** Move down is unavailable. */
    isLast: boolean;
    /** Move… has somewhere to go. */
    canMove: boolean;
}

/** Every row's actions, keyed by PlanElementID (the Gantt row id). */
/** `maxLevels` is the server's (`PlanRulesService`); unknown, + Add child shows only where an existing level fits. */
export function planRowActionsViews(plan: PlanDetailDto, canCreate: boolean, maxLevels: number | null | undefined): Record<string, PlanRowActionsView> {
    const views: Record<string, PlanRowActionsView> = {};
    const visit = (siblings: readonly PlanElementDto[]): void => {
        siblings.forEach((element, index) => {
            views[element.PlanElementID] = {
                canAddChild: canAddPlanElementChild(element, plan.Levels, canCreate, maxLevels),
                addChildLabel: `Add child to ${element.PlanElementName}`,
                menuLabel: `Actions for ${element.PlanElementName}`,
                isFirst: index === 0,
                isLast: index === siblings.length - 1,
                canMove: planMoveTargets(plan, element.PlanElementID).length > 0,
            };
            visit(element.Children ?? []);
        });
    };
    visit(plan.Elements ?? []);
    return views;
}
