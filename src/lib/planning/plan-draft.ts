// A draft on the client: how a chart drag becomes the planner's own date overrides, the undo history over them, what
// the chart draws while the server recomputes the cascade, and the overlay and readout rows the chart takes. New
// design, not ported (Beacon has no drafts yet); it follows "Plan Editing: Proposed Direction" (2026-10-19). Kept free
// of the DOM so it is testable as plain functions. The cascade is never worked out here: the server replays it.

import type { GanttBaseline, GanttDraftMark, GanttDraftOverlay, GanttRowDelta, PlanGanttTipRow } from '../../components/bcn/plan-gantt-chart';
import type { GanttDragEvent } from './gantt-types';
import { dayNumber, isoOfDay } from './gantt-geometry';
import { PlanDateTypeEnum, type PlanDetailDto, type PlanElementDto } from './model';
import { planConflictSentence } from './plan-conflicts';
import type { PlanConflictDto, PlanDraftOverrideDto, PlanDraftViewDto } from './plan-draft-model';
import { findPlanElement } from './plan-element';
import { planGanttDragRequest } from './plan-gantt-drag';
import { planGanttRows } from './plan-gantt-rows';
import { formatPlanDateRange } from './plan-schedule-preview';

const LOCALE = 'en-US';

/** What the planner set on one element: the dates (and date type) an override will hold. */
export interface PlanDraftEdit {
  PlanElementID: string;
  StartDate: string | null;
  EndDate: string | null;
  PlanDateType: PlanDateTypeEnum;
}

function flatten(elements: readonly PlanElementDto[] | null | undefined, out: PlanElementDto[] = []): PlanElementDto[] {
  for (const element of elements ?? []) {
    out.push(element);
    flatten(element.Children, out);
  }
  return out;
}

const shiftIso = (iso: string | null | undefined, days: number): string | null => {
  const day = dayNumber(iso ?? null);
  return day === null ? null : isoOfDay(day + days);
};

/**
 * The planner's own edits a drop makes, read against the plan the draft shows. One element is its new stored dates
 * (a parent's planned window); a multi-drag shifts every row it carried that has stored dates, except a Scheduled
 * element it only brought along — the drawer's "everything under it" rule, so a Scheduled descendant holds.
 */
export function planDraftEditsForDrag(shown: PlanDetailDto, drag: GanttDragEvent): PlanDraftEdit[] {
  if (drag.rowIds.length <= 1) {
    const request = planGanttDragRequest(shown, drag);
    if (!request || request.kind !== 'element') return [];
    const element = findPlanElement(shown.Elements, request.planElementID)?.element;
    const own: PlanDraftEdit = {
      PlanElementID: request.planElementID,
      StartDate: request.change.StartDate ?? null,
      EndDate: request.change.EndDate ?? null,
      PlanDateType: element?.PlanDateType ?? PlanDateTypeEnum.Estimated,
    };
    // A parent moved, stretched at neither end, carries its items (withItemsCarried); a stretch changes the window alone.
    return drag.mode === 'move' ? withItemsCarried(shown, own) : [own];
  }
  const picked = new Set(drag.pickedIds);
  const edits: PlanDraftEdit[] = [];
  for (const id of drag.rowIds) {
    const element = findPlanElement(shown.Elements, id)?.element;
    if (!element?.StartDate || !element.EndDate) continue;
    if (!picked.has(id) && element.PlanDateType === PlanDateTypeEnum.Scheduled) continue;
    edits.push({
      PlanElementID: id,
      StartDate: shiftIso(element.StartDate, drag.startDeltaDays),
      EndDate: shiftIso(element.EndDate, drag.startDeltaDays),
      PlanDateType: element.PlanDateType ?? PlanDateTypeEnum.Estimated,
    });
  }
  return edits;
}

/**
 * Moving a parent moves its items with it (2026-10-29, Andy: "moving a parent should move its tasks too"; the drawer
 * matches the drag): when an edit shifts a parent's start and end by the same days, everything under it shifts by those
 * days too, as a multi-drag carries a subtree. A Scheduled item (a fixed date) holds, as it does in a multi-drag.
 * Otherwise (a stretch, a leaf, nothing moved) the edit alone.
 */
export function withItemsCarried(base: PlanDetailDto, edit: PlanDraftEdit): PlanDraftEdit[] {
  const element = findPlanElement(base.Elements, edit.PlanElementID)?.element;
  if (!element?.Children?.length || !element.StartDate || !element.EndDate || !edit.StartDate || !edit.EndDate) return [edit];
  const days = (dayNumber(edit.StartDate) ?? 0) - (dayNumber(element.StartDate) ?? 0);
  if (!days || (dayNumber(edit.EndDate) ?? 0) - (dayNumber(element.EndDate) ?? 0) !== days) return [edit];
  const under: PlanDraftEdit[] = [];
  const walk = (items: readonly PlanElementDto[] | null | undefined) => {
    for (const child of items ?? []) {
      if (child.StartDate && child.PlanDateType !== PlanDateTypeEnum.Scheduled) {
        under.push({
          PlanElementID: child.PlanElementID ?? '',
          StartDate: shiftIso(child.StartDate, days),
          EndDate: child.EndDate ? shiftIso(child.EndDate, days) : null,
          PlanDateType: child.PlanDateType ?? PlanDateTypeEnum.Estimated,
        });
      }
      walk(child.Children);
    }
  };
  walk(element.Children);
  return [edit, ...under];
}

/**
 * The draft's overrides with these edits applied. An element edited again moves to the end, so the latest edit wins
 * over an earlier edit's cascade, and keeps the live dates it loaded the first time. A new one loads them from the
 * live plan now.
 */
export function planDraftWithEdits(overrides: readonly PlanDraftOverrideDto[], edits: readonly PlanDraftEdit[], live: PlanDetailDto, cascade: boolean): PlanDraftOverrideDto[] {
  let next = [...overrides];
  for (const edit of edits) {
    const earlier = next.find((o) => o.PlanElementID === edit.PlanElementID);
    const loaded = findPlanElement(live.Elements, edit.PlanElementID)?.element;
    next = next.filter((o) => o.PlanElementID !== edit.PlanElementID);
    next.push({
      PlanElementID: edit.PlanElementID,
      LoadedStartDate: earlier ? earlier.LoadedStartDate : (loaded?.StartDate ?? null),
      LoadedEndDate: earlier ? earlier.LoadedEndDate : (loaded?.EndDate ?? null),
      LoadedPlanDateType: earlier ? earlier.LoadedPlanDateType : (loaded?.PlanDateType ?? PlanDateTypeEnum.Estimated),
      StartDate: edit.StartDate,
      EndDate: edit.EndDate,
      PlanDateType: edit.PlanDateType,
      Cascade: cascade,
    });
  }
  // An edit back to exactly what it loaded is no edit at all.
  return next.filter((o) => o.StartDate !== o.LoadedStartDate || o.EndDate !== o.LoadedEndDate || o.PlanDateType !== o.LoadedPlanDateType);
}

/**
 * "Push dependents", the move-only variant's one-click fix: the move-only edits behind a broken dependency become
 * cascading ones, so their dependents follow. Resolves the edits on a predecessor or on any parent above one.
 */
export function planDraftPushDependents(overrides: readonly PlanDraftOverrideDto[], conflicts: readonly PlanConflictDto[], shown: PlanDetailDto): PlanDraftOverrideDto[] {
  const behind = new Set<string>();
  for (const conflict of conflicts) {
    let id: string | undefined = conflict.PredecessorPlanElementID;
    while (id) {
      behind.add(id);
      id = findPlanElement(shown.Elements, id)?.parent?.PlanElementID;
    }
  }
  return overrides.map((o) => (!o.Cascade && behind.has(o.PlanElementID) ? { ...o, Cascade: true } : o));
}

/** The move-only edits a broken dependency is waiting on: what Push dependents would change. */
export function planDraftPushable(overrides: readonly PlanDraftOverrideDto[], conflicts: readonly PlanConflictDto[], shown: PlanDetailDto): number {
  const pushed = planDraftPushDependents(overrides, conflicts, shown);
  return pushed.filter((o, i) => o.Cascade !== overrides[i].Cascade).length;
}

/**
 * What the chart draws the moment a bar is dropped, before the server's replay lands: the shown plan with the dropped
 * elements at their new dates. A leaf's span is its dates; a parent's span is left for the server to rederive.
 */
export function planDraftOptimistic(shown: PlanDetailDto, edits: readonly PlanDraftEdit[]): PlanDetailDto {
  const plan: PlanDetailDto = JSON.parse(JSON.stringify(shown));
  for (const edit of edits) {
    const element = findPlanElement(plan.Elements, edit.PlanElementID)?.element;
    if (!element) continue;
    element.StartDate = edit.StartDate ?? undefined;
    element.EndDate = edit.EndDate ?? undefined;
    element.PlanDateType = edit.PlanDateType;
    if (!element.Children?.length) {
      element.SpanStartDate = edit.StartDate ?? undefined;
      element.SpanEndDate = edit.EndDate ?? undefined;
    }
  }
  return plan;
}

/** Everything a cascade from these edits could reach: the successors downstream of them and of anything under them. */
export function planDraftDownstream(shown: PlanDetailDto, editedIDs: Iterable<string>): Set<string> {
  const edited = new Set(editedIDs);
  const start: string[] = [];
  for (const id of edited) start.push(...flatten([findPlanElement(shown.Elements, id)?.element].filter((e): e is PlanElementDto => !!e)).map((e) => e.PlanElementID ?? ''));
  const successors = new Map<string, string[]>();
  for (const d of shown.Dependencies ?? []) {
    const list = successors.get(d.PredecessorPlanElementID ?? '') ?? [];
    list.push(d.SuccessorPlanElementID ?? '');
    successors.set(d.PredecessorPlanElementID ?? '', list);
  }
  const reached = new Set<string>();
  const queue = [...start];
  while (queue.length) {
    const id = queue.shift()!;
    for (const next of successors.get(id) ?? []) {
      if (reached.has(next)) continue;
      reached.add(next);
      queue.push(...flatten([findPlanElement(shown.Elements, next)?.element].filter((e): e is PlanElementDto => !!e)).map((e) => e.PlanElementID ?? ''));
    }
  }
  for (const id of edited) reached.delete(id);
  return reached;
}

/**
 * The chart's draft overlay (simplified 2026-10-21): a baseline (the live plan's dates) behind every task bar and
 * milestone the draft draws differently, one "changed" mark on every element it changed (whoever moved it — the
 * readout says who) or "pending" while the cascade is out, and the parents whose planned window the draft changed.
 * With the comparison off, only the pending marks remain: a clean draft chart.
 */
export function planDraftOverlay(
  live: PlanDetailDto,
  shown: PlanDetailDto,
  view: PlanDraftViewDto | null,
  pending: ReadonlySet<string>,
  ownIDs: ReadonlySet<string>,
  compare = true
): GanttDraftOverlay {
  const liveRows = new Map(planGanttRows(live.Elements).map((row) => [row.id, row]));
  const baseline = new Map<string, GanttBaseline>();
  const changedWindows = new Set<string>();
  for (const row of planGanttRows(shown.Elements)) {
    const was = liveRows.get(row.id);
    if (!was) continue;
    if (was.windowStart !== row.windowStart || was.windowEnd !== row.windowEnd) changedWindows.add(row.id);
    if (compare && (was.start !== row.start || was.end !== row.end)) {
      baseline.set(row.id, { start: was.start, end: was.end, windowStart: was.windowStart ?? null, windowEnd: was.windowEnd ?? null });
    }
  }
  const marks = new Map<string, GanttDraftMark>();
  if (compare) {
    for (const change of view?.Changes ?? []) marks.set(change.PlanElementID, 'changed');
    for (const id of ownIDs) marks.set(id, 'changed');
  }
  for (const id of pending) if (!ownIDs.has(id)) marks.set(id, 'pending');
  return { baseline, marks, changedWindows };
}

/** A shift as the Change column reads it: "+3 mo", "−2 wk", "+5 d" (a minus sign, not a hyphen). */
function shiftLabel(days: number): string {
  const sign = days < 0 ? '−' : '+';
  const n = Math.abs(days);
  if (n >= 60) return `${sign}${Math.round(n / 30.44)} mo`;
  if (n >= 14) return `${sign}${Math.round(n / 7)} wk`;
  return `${sign}${n} d`;
}

/**
 * The Change column (new, 2026-10-21): each changed element's shift against the live plan — by its start, or by its
 * end when only the end moved ("end +2 mo") — marked own where the planner moved it.
 */
export function planDraftDeltas(view: PlanDraftViewDto | null): Map<string, GanttRowDelta> {
  const deltas = new Map<string, GanttRowDelta>();
  for (const change of view?.Changes ?? []) {
    const startShift = (dayNumber(change.DraftStartDate ?? null) ?? 0) - (dayNumber(change.LiveStartDate ?? null) ?? 0);
    const endShift = (dayNumber(change.DraftEndDate ?? null) ?? 0) - (dayNumber(change.LiveEndDate ?? null) ?? 0);
    const text = startShift !== 0 ? shiftLabel(startShift) : endShift !== 0 ? `end ${shiftLabel(endShift)}` : change.DraftPlanDateType;
    deltas.set(change.PlanElementID, { text, own: change.Cause === 'own' });
  }
  return deltas;
}

/** Each changed row's readout: where it sits on the live plan and what moved it; each broken successor's conflict. */
export function planDraftRowNotes(
  live: PlanDetailDto | null,
  view: PlanDraftViewDto | null,
  conflicts: readonly PlanConflictDto[],
  pending: ReadonlySet<string>
): Map<string, PlanGanttTipRow[]> {
  const notes = new Map<string, PlanGanttTipRow[]>();
  const add = (id: string, row: PlanGanttTipRow) => notes.set(id, [...(notes.get(id) ?? []), row]);
  if (live && view) {
    for (const change of view.Changes) {
      const was = findPlanElement(live.Elements, change.PlanElementID)?.element;
      add(change.PlanElementID, { label: 'Live Plan', value: formatPlanDateRange(was?.StartDate, was?.EndDate, LOCALE) });
      if (change.LivePlanDateType !== change.DraftPlanDateType) add(change.PlanElementID, { label: 'Date Type', value: `${change.LivePlanDateType} → ${change.DraftPlanDateType}` });
      add(change.PlanElementID, {
        label: 'Moved By',
        value: change.Cause === 'own' ? 'you' : change.CausedByPlanElementName ? `cascade from ${change.CausedByPlanElementName}` : 'cascade',
      });
    }
  }
  for (const id of pending) add(id, { label: 'Moved By', value: 'cascade, updating…' });
  for (const conflict of conflicts) add(conflict.SuccessorPlanElementID, { label: 'Conflict', value: planConflictSentence(conflict), tone: 'danger' });
  return notes;
}

/** A row-count line for the draft bar: "12 changes", counting what the planner moved and what moved with it. */
export function planDraftChangeLine(view: PlanDraftViewDto | null, overrides: readonly PlanDraftOverrideDto[]): string {
  const own = overrides.length;
  const cascaded = (view?.Changes ?? []).filter((c) => c.Cause === 'cascade').length;
  if (own === 0) return 'No changes yet';
  const ownText = `${own} ${own === 1 ? 'change' : 'changes'}`;
  return cascaded === 0 ? ownText : `${ownText}, ${cascaded} moved with ${own === 1 ? 'it' : 'them'}`;
}

/** "just now", "3 days ago", "yesterday", "on Oct 2": when a draft last changed, to follow "Updated". */
export function planDraftUpdatedLabel(iso: string, now: Date = new Date()): string {
  const then = new Date(iso);
  const minutes = Math.round((now.getTime() - then.getTime()) / 60_000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes} min ago`;
  const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const days = Math.round((startOfDay(now) - startOfDay(then)) / 86_400_000);
  if (days === 0) return `at ${then.toLocaleTimeString(LOCALE, { hour: 'numeric', minute: '2-digit' })}`;
  if (days === 1) return 'yesterday';
  if (days < 7) return `${days} days ago`;
  return `on ${then.toLocaleDateString(LOCALE, { month: 'short', day: 'numeric' })}`;
}
