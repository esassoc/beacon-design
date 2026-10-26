// Ported verbatim from Beacon.Web (pages/plan-gantt/plan-gantt-rows.ts on origin/develop); only the import paths changed.
// The plan → Gantt mapping, kept free of Angular so it is testable as plain functions (shape 1 in
// docs/code-standards/frontend-testing.md). `ui-viz-gantt` is domain-free: it takes pre-flattened rows and
// its own link-type union, so the walk over a plan's tree and the enum mapping live here, on the page.

import type { UiVizGanttLandmark, UiVizGanttLink, UiVizGanttLinkType, UiVizGanttRow } from "./gantt-types";
import { PlanDateTypeEnum } from "./model";
import type { PlanDetailDto } from "./model";
import type { PlanElementDependencyDto } from "./model";
import { PlanElementDependencyTypeEnum } from "./model";
import type { PlanElementDto } from "./model";
import type { PlanLandmarkDto } from "./model";
import type { PlanLevelDto } from "./model";

/** Joins the level names in the outline's corner heading, as the design source reads it. */
const OUTLINE_HEADING_SEPARATOR = " / ";

/**
 * A milestone's outline tag, whatever level it sits at: the diamond is what the reader needs named, and a
 * level name on a zero-length marker would read as a scheduled element of that level.
 */
export const MILESTONE_TAG = "Milestone";

/**
 * Every dependency type the API can send, onto the primitive's own union. Exhaustive by type: a new
 * `PlanElementDependencyTypeEnum` member fails to compile here until it is mapped.
 */
export const GANTT_LINK_TYPE_BY_DEPENDENCY_TYPE: Readonly<Record<PlanElementDependencyTypeEnum, UiVizGanttLinkType>> = {
    [PlanElementDependencyTypeEnum.FinishToStart]: "FinishToStart",
};

/**
 * Flattens the plan's element tree into Gantt rows in display order — a pre-order walk, each parent then its
 * subtree, siblings in the order the API sends them (already by SortOrder). A milestone draws a diamond; any
 * other element with children draws a roll-up bracket over its derived span; the rest are task bars.
 *
 * Indent comes from `TreeDepth` (position in the tree), NOT the plan level: levels may be skipped, so a
 * level-4 task can sit one step under a level-2 study. Every row marks its effective span
 * (`SpanStartDate`/`SpanEndDate`); a parent's STORED dates are its planned window, drawn behind the bracket.
 * Because indent no longer tells the level, every row is tagged with its own level's name — or
 * {@link MILESTONE_TAG} for a milestone.
 */
export function planGanttRows(elements: readonly PlanElementDto[] | null | undefined): UiVizGanttRow[] {
    const rows: UiVizGanttRow[] = [];
    const visit = (element: PlanElementDto, parentId: string | null): void => {
        const children = element.Children ?? [];
        const hasChildren = children.length > 0;
        rows.push({
            id: element.PlanElementID,
            label: element.PlanElementName,
            depth: element.TreeDepth,
            kind: element.IsMilestone ? "milestone" : hasChildren ? "summary" : "bar",
            start: element.SpanStartDate ?? null,
            end: element.SpanEndDate ?? null,
            parentId,
            hasChildren,
            windowStart: hasChildren ? (element.StartDate ?? null) : null,
            windowEnd: hasChildren ? (element.EndDate ?? null) : null,
            scheduled: element.PlanDateType === PlanDateTypeEnum.Scheduled,
            tag: element.IsMilestone ? MILESTONE_TAG : (element.LevelSingularName ?? null),
            budget: element.IsMilestone ? null : (element.Budget ?? null),
            notes: element.Notes ?? null,
        });
        children.forEach((child) => visit(child, element.PlanElementID));
    };
    (elements ?? []).forEach((element) => visit(element, null));
    return rows;
}

/** The plan's dependencies as Gantt links, predecessor → successor. */
export function planGanttLinks(dependencies: readonly PlanElementDependencyDto[] | null | undefined): UiVizGanttLink[] {
    return (dependencies ?? []).map((dependency) => ({
        fromId: dependency.PredecessorPlanElementID,
        toId: dependency.SuccessorPlanElementID,
        type: GANTT_LINK_TYPE_BY_DEPENDENCY_TYPE[dependency.PlanElementDependencyType],
    }));
}

/**
 * The plan's landmarks as the Gantt's full-height dated lines, in the order the API sends them (by date). No
 * landmarks, no lines.
 */
export function planGanttLandmarks(landmarks: readonly PlanLandmarkDto[] | null | undefined): UiVizGanttLandmark[] {
    return (landmarks ?? []).map((landmark) => ({
        id: landmark.PlanLandmarkID,
        label: landmark.PlanLandmarkName,
        date: landmark.LandmarkDate,
    }));
}

/** The outline's corner heading: the plan's level names, root first — e.g. "Commitment / Study / Task". */
export function planOutlineHeading(levels: readonly PlanLevelDto[] | null | undefined): string {
    return [...(levels ?? [])]
        .sort((a, b) => a.Depth - b.Depth)
        .map((level) => level.SingularName)
        .join(OUTLINE_HEADING_SEPARATOR);
}

/** Everything `<ui-viz-gantt>` draws for one plan. */
export interface PlanGanttView {
    rows: UiVizGanttRow[];
    links: UiVizGanttLink[];
    landmarks: UiVizGanttLandmark[];
    outlineHeading: string;
}

export function planGanttView(plan: PlanDetailDto): PlanGanttView {
    return {
        rows: planGanttRows(plan.Elements),
        links: planGanttLinks(plan.Dependencies),
        landmarks: planGanttLandmarks(plan.Landmarks),
        outlineHeading: planOutlineHeading(plan.Levels),
    };
}
