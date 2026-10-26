// The plan-state check BCN-1906 needs before broken dependencies can be drawn: which finish-to-start links the plan's
// dates break AS THEY STAND. The scheduler's flags describe only what one change caused (by design, ADR-0070), so they
// vanish once a change is saved; this reads the saved plan instead. Pure, so the mock server runs it on every read
// (the live plan and every draft) and it is testable as plain functions.

import type { PlanDetailDto, PlanElementDto } from './model';
import type { PlanConflictDto } from './plan-draft-model';
import { EarliestSuccessorStart, toDay } from './plan-scheduler';

function flatten(elements: readonly PlanElementDto[] | null | undefined, out = new Map<string, PlanElementDto>()): Map<string, PlanElementDto> {
  for (const element of elements ?? []) {
    out.set(element.PlanElementID ?? '', element);
    flatten(element.Children, out);
  }
  return out;
}

/** Every link whose successor (by its effective span) starts before its predecessor's finish plus lag allows. */
export function planConflicts(plan: PlanDetailDto): PlanConflictDto[] {
  const byID = flatten(plan.Elements);
  const conflicts: PlanConflictDto[] = [];
  for (const dependency of plan.Dependencies ?? []) {
    const predecessor = byID.get(dependency.PredecessorPlanElementID ?? '');
    const successor = byID.get(dependency.SuccessorPlanElementID ?? '');
    const finish = toDay(predecessor?.SpanEndDate);
    const start = toDay(successor?.SpanStartDate);
    if (!predecessor || !successor || finish === null || start === null) continue;
    const earliest = EarliestSuccessorStart(finish, dependency.LagDays ?? 0);
    if (start >= earliest) continue;
    conflicts.push({
      PlanElementDependencyID: dependency.PlanElementDependencyID ?? '',
      PredecessorPlanElementID: predecessor.PlanElementID ?? '',
      PredecessorPlanElementName: predecessor.PlanElementName ?? '',
      SuccessorPlanElementID: successor.PlanElementID ?? '',
      SuccessorPlanElementName: successor.PlanElementName ?? '',
      DaysEarly: earliest - start,
    });
  }
  return conflicts;
}

/** The successor's reading of a conflict: "Starts 12 days before Fabricate array allows". */
export function planConflictSentence(conflict: PlanConflictDto): string {
  const days = `${conflict.DaysEarly} ${conflict.DaysEarly === 1 ? 'day' : 'days'}`;
  return `Starts ${days} before ${conflict.PredecessorPlanElementName} allows`;
}
