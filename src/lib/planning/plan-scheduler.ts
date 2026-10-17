// The planning server's pure rules, ported from Beacon.API/Services/Planning on origin/develop so the replica schedules
// exactly as the API does: PlanSchedule.cs (the tree + dependency graph, derived spans, link and move checks),
// PlanScheduler.cs (element edit, set shift, whole-plan shift, the cascade and its flags) and
// PlanElementStructureRules.cs. Dates are UTC day numbers here; C# DateOnly records compare by value, so spans are
// compared with spanEquals.

import { dayNumber, isoOfDay } from "./gantt-geometry";
import { PlanDateTypeEnum, PlanScheduleChangeModeEnum, PlanScheduleFlagReasonEnum } from "./model";

export interface PlanScheduleNode {
    ID: string;
    ParentID: string | null;
    StartDate: number | null;
    EndDate: number | null;
    IsMilestone: boolean;
    PlanDateType: PlanDateTypeEnum;
}

export interface PlanScheduleLink {
    PredecessorID: string;
    SuccessorID: string;
    LagDays: number;
}

export interface PlanScheduleSpan {
    StartDate: number;
    EndDate: number;
}

export type Span = PlanScheduleSpan | null;

export function spanEquals(a: Span | undefined, b: Span | undefined): boolean {
    if (!a || !b) return !a && !b;
    return a.StartDate === b.StartDate && a.EndDate === b.EndDate;
}

export const PlanLinkValidationResult = {
    Valid: "Valid",
    SelfLink: "SelfLink",
    PredecessorNotInPlan: "PredecessorNotInPlan",
    SuccessorNotInPlan: "SuccessorNotInPlan",
    Duplicate: "Duplicate",
    AncestorDescendantLink: "AncestorDescendantLink",
    CreatesCycle: "CreatesCycle",
    CreatesCycleThroughParent: "CreatesCycleThroughParent",
} as const;
export type PlanLinkValidationResult = (typeof PlanLinkValidationResult)[keyof typeof PlanLinkValidationResult];

type ScheduleEvent = string; // `${id}|S` or `${id}|F`
const startOf = (id: string): ScheduleEvent => `${id}|S`;
const finishOf = (id: string): ScheduleEvent => `${id}|F`;

export class PlanSchedule {
    private readonly nodesByID = new Map<string, PlanScheduleNode>();
    private readonly childIDsByParentID = new Map<string, string[]>();
    private readonly successorIDsByPredecessorID = new Map<string, string[]>();
    private readonly linksByPredecessorID = new Map<string, PlanScheduleLink[]>();
    private readonly linksBySuccessorID = new Map<string, PlanScheduleLink[]>();
    private readonly linkPairs = new Set<string>();
    readonly Links: readonly PlanScheduleLink[];

    constructor(nodes: Iterable<PlanScheduleNode>, links: Iterable<PlanScheduleLink>) {
        for (const node of nodes) {
            if (this.nodesByID.has(node.ID)) throw new Error(`Duplicate plan element ${node.ID}.`);
            this.nodesByID.set(node.ID, node);
        }
        for (const node of this.nodesByID.values()) {
            if (node.ParentID && !this.nodesByID.has(node.ParentID)) throw new Error(`Plan element ${node.ID} references a parent not in the plan.`);
            if (node.ParentID) push(this.childIDsByParentID, node.ParentID, node.ID);
        }
        this.Links = [...links];
        for (const link of this.Links) {
            push(this.successorIDsByPredecessorID, link.PredecessorID, link.SuccessorID);
            push(this.linksByPredecessorID, link.PredecessorID, link);
            push(this.linksBySuccessorID, link.SuccessorID, link);
            this.linkPairs.add(`${link.PredecessorID}>${link.SuccessorID}`);
        }
    }

    get Nodes(): PlanScheduleNode[] {
        return [...this.nodesByID.values()];
    }

    Contains(id: string): boolean {
        return this.nodesByID.has(id);
    }

    Node(id: string): PlanScheduleNode {
        return this.nodesByID.get(id)!;
    }

    private children(id: string): string[] {
        return this.childIDsByParentID.get(id) ?? [];
    }

    IsSelfOrDescendant(rootID: string, candidateID: string): boolean {
        return candidateID === rootID || this.AncestorIDs(candidateID).includes(rootID);
    }

    SelfAndDescendantIDs(id: string): string[] {
        const out = [id];
        for (const childID of this.children(id)) out.push(...this.SelfAndDescendantIDs(childID));
        return out;
    }

    LinksFrom(id: string): PlanScheduleLink[] {
        return this.linksByPredecessorID.get(id) ?? [];
    }

    LinksInto(id: string): PlanScheduleLink[] {
        return this.linksBySuccessorID.get(id) ?? [];
    }

    DeriveSpans(storedDates?: (id: string) => Span): Map<string, Span> {
        const read =
            storedDates ??
            ((id: string) => {
                const node = this.nodesByID.get(id)!;
                return node.StartDate !== null && node.EndDate !== null ? { StartDate: node.StartDate, EndDate: node.EndDate } : null;
            });
        const spans = new Map<string, Span>();
        for (const id of this.nodesByID.keys()) this.deriveSpan(id, read, spans);
        return spans;
    }

    private deriveSpan(id: string, read: (id: string) => Span, spans: Map<string, Span>): Span {
        if (spans.has(id)) return spans.get(id)!;
        const node = this.nodesByID.get(id)!;
        const childIDs = this.children(id);
        let span: Span;
        if (childIDs.length === 0 || node.IsMilestone) {
            span = read(id);
        } else {
            const childSpans = childIDs.map((c) => this.deriveSpan(c, read, spans)).filter((s): s is PlanScheduleSpan => s !== null);
            span = childSpans.length === 0 ? null : { StartDate: Math.min(...childSpans.map((s) => s.StartDate)), EndDate: Math.max(...childSpans.map((s) => s.EndDate)) };
        }
        spans.set(id, span);
        return span;
    }

    ValidateNewLink(predecessorID: string, successorID: string): PlanLinkValidationResult {
        if (predecessorID === successorID) return PlanLinkValidationResult.SelfLink;
        if (!this.Contains(predecessorID)) return PlanLinkValidationResult.PredecessorNotInPlan;
        if (!this.Contains(successorID)) return PlanLinkValidationResult.SuccessorNotInPlan;
        if (this.linkPairs.has(`${predecessorID}>${successorID}`)) return PlanLinkValidationResult.Duplicate;
        if (this.AncestorIDs(predecessorID).includes(successorID) || this.AncestorIDs(successorID).includes(predecessorID))
            return PlanLinkValidationResult.AncestorDescendantLink;
        if (this.isReachableByDependencies(successorID, predecessorID)) return PlanLinkValidationResult.CreatesCycle;
        if (this.finishIsReachableFromStart(successorID, predecessorID)) return PlanLinkValidationResult.CreatesCycleThroughParent;
        return PlanLinkValidationResult.Valid;
    }

    MoveMakesImpossibleOrdering(elementID: string, newParentID: string | null): boolean {
        if (this.hasImpossibleOrdering()) return false;
        const moved = new PlanSchedule(
            this.Nodes.map((x) => (x.ID === elementID ? { ...x, ParentID: newParentID } : x)),
            this.Links
        );
        return moved.hasImpossibleOrdering();
    }

    PredecessorCandidateIDs(successorID: string): Set<string> {
        return new Set([...this.nodesByID.keys()].filter((id) => this.ValidateNewLink(id, successorID) === PlanLinkValidationResult.Valid));
    }

    AncestorIDs(id: string): string[] {
        const out: string[] = [];
        const visited = new Set<string>();
        let parentID = this.nodesByID.get(id)!.ParentID;
        while (parentID && !visited.has(parentID)) {
            visited.add(parentID);
            out.push(parentID);
            parentID = this.nodesByID.get(parentID)!.ParentID;
        }
        return out;
    }

    private nextEvents(event: ScheduleEvent): ScheduleEvent[] {
        const [id, kind] = event.split("|");
        if (kind === "S") return [...this.children(id).map(startOf), finishOf(id)];
        const next = (this.successorIDsByPredecessorID.get(id) ?? []).map(startOf);
        const parentID = this.nodesByID.get(id)!.ParentID;
        return parentID ? [...next, finishOf(parentID)] : next;
    }

    private finishIsReachableFromStart(fromStartOfID: string, toFinishOfID: string): boolean {
        const target = finishOf(toFinishOfID);
        const visited = new Set<ScheduleEvent>([startOf(fromStartOfID)]);
        const frontier = [startOf(fromStartOfID)];
        while (frontier.length) {
            for (const candidate of this.nextEvents(frontier.shift()!)) {
                if (candidate === target) return true;
                if (!visited.has(candidate)) {
                    visited.add(candidate);
                    frontier.push(candidate);
                }
            }
        }
        return false;
    }

    private hasImpossibleOrdering(): boolean {
        const done = new Set<ScheduleEvent>();
        const onPath = new Set<ScheduleEvent>();
        for (const id of this.nodesByID.keys()) {
            for (const root of [startOf(id), finishOf(id)]) {
                if (done.has(root)) continue;
                const stack: { event: ScheduleEvent; next: ScheduleEvent[]; i: number }[] = [{ event: root, next: this.nextEvents(root), i: 0 }];
                onPath.add(root);
                while (stack.length) {
                    const top = stack[stack.length - 1];
                    if (top.i < top.next.length) {
                        const candidate = top.next[top.i++];
                        if (onPath.has(candidate)) return true;
                        if (done.has(candidate)) continue;
                        onPath.add(candidate);
                        stack.push({ event: candidate, next: this.nextEvents(candidate), i: 0 });
                    } else {
                        stack.pop();
                        onPath.delete(top.event);
                        done.add(top.event);
                    }
                }
            }
        }
        return false;
    }

    private isReachableByDependencies(fromID: string, toID: string): boolean {
        const visited = new Set([fromID]);
        const frontier = [fromID];
        while (frontier.length) {
            const current = frontier.shift()!;
            for (const successorID of this.successorIDsByPredecessorID.get(current) ?? []) {
                if (successorID === toID) return true;
                if (!visited.has(successorID)) {
                    visited.add(successorID);
                    frontier.push(successorID);
                }
            }
        }
        return false;
    }
}

function push<T>(map: Map<string, T[]>, key: string, value: T): void {
    const list = map.get(key);
    if (list) list.push(value);
    else map.set(key, [value]);
}

// ── PlanScheduler ───────────────────────────────────────────────────────────────────────────────────────────────────

export interface PlanScheduleChange {
    ElementID: string;
    OldDates: Span;
    NewDates: PlanScheduleSpan;
}

export interface PlanScheduleFlag {
    ElementID: string;
    Reason: PlanScheduleFlagReasonEnum;
    Requested: Span;
    RelatedElementID: string | null;
    RelatedIsParent: boolean;
    LagDays: number | null;
}

export interface PlanScheduleChangeSet {
    Changes: PlanScheduleChange[];
    Flags: PlanScheduleFlag[];
}

export interface PlanScheduleElementEdit {
    ElementID: string;
    NewDates: Span;
    PlanDateType: PlanDateTypeEnum;
    Mode: PlanScheduleChangeModeEnum;
}

/** Finish-to-start on inclusive whole-day dates: the day after the predecessor's last day, shifted by the lag. */
export function EarliestSuccessorStart(predecessorEndDate: number, lagDays: number): number {
    return predecessorEndDate + 1 + lagDays;
}

export const PlanScheduler = {
    ChangeElement(schedule: PlanSchedule, edit: PlanScheduleElementEdit): PlanScheduleChangeSet {
        if (!schedule.Contains(edit.ElementID)) throw new Error(`Plan element ${edit.ElementID} is not in the plan.`);
        const calculation = new Calculation(schedule, new Set([edit.ElementID]));
        const node = schedule.Node(edit.ElementID);
        const oldStart = node.StartDate ?? calculation.Spans().get(edit.ElementID)?.StartDate ?? null;

        calculation.SetDirectly(edit.ElementID, edit.NewDates, edit.PlanDateType);

        if (edit.Mode === PlanScheduleChangeModeEnum.ThisItemAndEverythingUnderIt && oldStart !== null && edit.NewDates) {
            const days = edit.NewDates.StartDate - oldStart;
            if (days !== 0) {
                for (const descendantID of schedule.SelfAndDescendantIDs(edit.ElementID).slice(1)) {
                    calculation.TryShift(descendantID, days, PlanScheduleFlagReasonEnum.ScheduledNotMoved);
                }
            }
        }

        calculation.Cascade();
        calculation.FlagStartsBeforePredecessor(schedule.SelfAndDescendantIDs(edit.ElementID));
        calculation.FlagScheduledCutOffs();
        return calculation.Result(false);
    },

    ShiftElements(schedule: PlanSchedule, elementIDs: Iterable<string>, days: number): PlanScheduleChangeSet {
        const requestedIDs = new Set(elementIDs);
        const missing = [...requestedIDs].filter((x) => !schedule.Contains(x));
        if (missing.length) throw new Error(`Plan elements ${missing.join(", ")} are not in the plan.`);

        const movedIDs = new Set([...requestedIDs].flatMap((id) => schedule.SelfAndDescendantIDs(id)));
        const calculation = new Calculation(schedule, requestedIDs);
        if (days !== 0) {
            for (const id of requestedIDs) calculation.ShiftDirectly(id, days);
            for (const id of movedIDs) if (!requestedIDs.has(id)) calculation.TryShift(id, days, PlanScheduleFlagReasonEnum.ScheduledNotMoved);
        }

        calculation.Cascade();
        calculation.FlagStartsBeforePredecessor(movedIDs);
        calculation.FlagScheduledCutOffs();
        return calculation.Result(true);
    },

    Shift(schedule: PlanSchedule, days: number): PlanScheduleChangeSet {
        const calculation = new Calculation(schedule, new Set());
        if (days !== 0) {
            for (const node of schedule.Nodes) calculation.TryShift(node.ID, days, PlanScheduleFlagReasonEnum.ScheduledNotMoved);
        }
        calculation.Cascade();
        calculation.FlagStartsBeforePredecessor(schedule.Nodes.map((x) => x.ID));
        calculation.FlagScheduledCutOffs();
        return calculation.Result(false);
    },

    DaysToStartOn(schedule: PlanSchedule, newStartDate: number): number | null {
        const movableStarts = schedule.Nodes.filter((x) => x.StartDate !== null && x.EndDate !== null && x.PlanDateType !== PlanDateTypeEnum.Scheduled).map(
            (x) => x.StartDate!
        );
        const starts = movableStarts.length
            ? movableStarts
            : [...schedule.DeriveSpans().values()].filter((x): x is PlanScheduleSpan => x !== null).map((x) => x.StartDate);
        return starts.length === 0 ? null : newStartDate - Math.min(...starts);
    },
};

class Calculation {
    private readonly originalDates = new Map<string, Span>();
    private dates = new Map<string, Span>();
    private readonly dateTypes = new Map<string, PlanDateTypeEnum>();
    private flags = new Map<string, PlanScheduleFlag>();
    private readonly originalSpans: Map<string, Span>;

    constructor(
        private readonly schedule: PlanSchedule,
        private readonly editedElementIDs: ReadonlySet<string>
    ) {
        for (const node of schedule.Nodes) {
            const dates = node.StartDate !== null && node.EndDate !== null ? { StartDate: node.StartDate, EndDate: node.EndDate } : null;
            this.originalDates.set(node.ID, dates);
            this.dates.set(node.ID, dates);
            this.dateTypes.set(node.ID, node.PlanDateType);
        }
        this.originalSpans = this.Spans();
    }

    Spans(): Map<string, Span> {
        return this.schedule.DeriveSpans((id) => this.dates.get(id) ?? null);
    }

    SetDirectly(elementID: string, dates: Span, planDateType: PlanDateTypeEnum): void {
        this.dates.set(elementID, dates);
        this.dateTypes.set(elementID, planDateType);
    }

    ShiftDirectly(elementID: string, days: number): void {
        const dates = this.dates.get(elementID);
        if (!dates) return;
        this.dates.set(elementID, { StartDate: dates.StartDate + days, EndDate: dates.EndDate + days });
    }

    TryShift(elementID: string, days: number, reasonIfScheduled: PlanScheduleFlagReasonEnum, brokenLink: PlanScheduleLink | null = null): void {
        if (this.editedElementIDs.has(elementID)) return;
        const dates = this.dates.get(elementID);
        if (!dates) return;
        const requested = { StartDate: dates.StartDate + days, EndDate: dates.EndDate + days };
        if (this.dateTypes.get(elementID) === PlanDateTypeEnum.Scheduled) {
            this.flag(elementID, reasonIfScheduled, requested, brokenLink?.PredecessorID ?? null, false, brokenLink?.LagDays ?? null);
            return;
        }
        this.dates.set(elementID, requested);
    }

    Cascade(): void {
        const datesBefore = new Map(this.dates);
        const flagsBefore = new Map(this.flags);
        let spans = this.Spans();
        const worklist: string[] = [];
        const queued = new Set<string>();
        this.enqueueFinishChanges(this.originalSpans, spans, worklist, queued);

        const visitLimit = this.schedule.Nodes.length;
        const visits = new Map<string, number>();
        while (worklist.length) {
            const predecessorID = worklist.shift()!;
            queued.delete(predecessorID);

            visits.set(predecessorID, (visits.get(predecessorID) ?? 0) + 1);
            if (visits.get(predecessorID)! > visitLimit) {
                this.dates = datesBefore;
                this.flags = flagsBefore;
                this.flag(predecessorID, PlanScheduleFlagReasonEnum.DependencyLoop, null);
                return;
            }

            const predecessorSpan = spans.get(predecessorID);
            if (!predecessorSpan) continue;

            for (const link of this.schedule.LinksFrom(predecessorID)) {
                const successorSpan = spans.get(link.SuccessorID);
                if (!successorSpan) continue;
                const requiredStart = EarliestSuccessorStart(predecessorSpan.EndDate, link.LagDays);
                if (successorSpan.StartDate >= requiredStart) continue;

                const shortfall = requiredStart - successorSpan.StartDate;
                for (const id of this.schedule.SelfAndDescendantIDs(link.SuccessorID)) {
                    this.TryShift(id, shortfall, PlanScheduleFlagReasonEnum.ScheduledStartMissed, link);
                }
                const before = spans;
                spans = this.Spans();
                this.enqueueFinishChanges(before, spans, worklist, queued);
            }
        }
    }

    FlagStartsBeforePredecessor(candidateIDs: Iterable<string>): void {
        const spans = this.Spans();
        const checkedIDs = new Set([...candidateIDs].filter((id) => this.editedElementIDs.has(id) || !spanEquals(spans.get(id), this.originalSpans.get(id))));
        for (const elementID of checkedIDs) {
            const span = spans.get(elementID);
            if (!span) continue;
            const gatingIDs = [elementID, ...this.schedule.AncestorIDs(elementID).filter((id) => !checkedIDs.has(id))];
            for (const gatingID of gatingIDs) {
                for (const link of this.schedule.LinksInto(gatingID)) {
                    const predecessorSpan = spans.get(link.PredecessorID);
                    if (!predecessorSpan) continue;
                    const requiredStart = EarliestSuccessorStart(predecessorSpan.EndDate, link.LagDays);
                    if (span.StartDate >= requiredStart) continue;
                    if (spanEquals(span, this.originalSpans.get(elementID)) && spanEquals(predecessorSpan, this.originalSpans.get(link.PredecessorID))) continue;
                    this.flag(elementID, PlanScheduleFlagReasonEnum.StartsBeforePredecessor, startingOn(requiredStart, span), link.PredecessorID, false, link.LagDays);
                }
            }
        }
    }

    FlagScheduledCutOffs(): void {
        for (const node of this.schedule.Nodes) {
            const dates = this.dates.get(node.ID);
            const originalDates = this.originalDates.get(node.ID) ?? null;
            if (!dates) continue;
            if (
                !this.editedElementIDs.has(node.ID) &&
                spanEquals(dates, originalDates) &&
                !this.schedule.AncestorIDs(node.ID).some((id) => this.windowChanged(id))
            )
                continue;

            let flaggedPast = false;
            let flaggedBefore = false;
            for (const ancestorID of this.schedule.AncestorIDs(node.ID)) {
                const window = this.dates.get(ancestorID);
                if (this.dateTypes.get(ancestorID) !== PlanDateTypeEnum.Scheduled || !window) continue;
                const originalWindow = this.originalDates.get(ancestorID) ?? null;
                const isParent = ancestorID === node.ParentID;
                const originalPast = originalDates && originalWindow ? originalDates.EndDate - originalWindow.EndDate : null;
                const originalBefore = originalDates && originalWindow ? originalWindow.StartDate - originalDates.StartDate : null;

                if (!flaggedPast && widensOverhang(dates.EndDate - window.EndDate, originalPast)) {
                    this.flag(node.ID, PlanScheduleFlagReasonEnum.PastScheduledCutOff, endingOn(window.EndDate, dates), ancestorID, isParent);
                    flaggedPast = true;
                }
                if (!flaggedBefore && widensOverhang(window.StartDate - dates.StartDate, originalBefore)) {
                    this.flag(node.ID, PlanScheduleFlagReasonEnum.BeforeScheduledCutOff, startingOn(window.StartDate, dates), ancestorID, isParent);
                    flaggedBefore = true;
                }
            }
        }
    }

    Result(includeEditedElements: boolean): PlanScheduleChangeSet {
        const changes = this.schedule.Nodes.filter((x) => {
            const now = this.dates.get(x.ID);
            return (includeEditedElements || !this.editedElementIDs.has(x.ID)) && now && !spanEquals(now, this.originalDates.get(x.ID));
        }).map((x) => ({ ElementID: x.ID, OldDates: this.originalDates.get(x.ID) ?? null, NewDates: this.dates.get(x.ID)! }));
        return { Changes: changes, Flags: [...this.flags.values()] };
    }

    private windowChanged(elementID: string): boolean {
        return this.dateTypes.get(elementID) === PlanDateTypeEnum.Scheduled && !spanEquals(this.dates.get(elementID), this.originalDates.get(elementID));
    }

    private enqueueFinishChanges(before: Map<string, Span>, after: Map<string, Span>, worklist: string[], queued: Set<string>): void {
        for (const node of this.schedule.Nodes) {
            if ((before.get(node.ID)?.EndDate ?? null) !== (after.get(node.ID)?.EndDate ?? null) && !queued.has(node.ID)) {
                queued.add(node.ID);
                worklist.push(node.ID);
            }
        }
    }

    private flag(
        elementID: string,
        reason: PlanScheduleFlagReasonEnum,
        requested: Span,
        relatedElementID: string | null = null,
        relatedIsParent = false,
        lagDays: number | null = null
    ): void {
        const key = `${elementID}:${reason}`;
        const existing = this.flags.get(key);
        if (existing && existing.Requested && requested && existing.Requested.StartDate >= requested.StartDate) return;
        this.flags.set(key, { ElementID: elementID, Reason: reason, Requested: requested, RelatedElementID: relatedElementID, RelatedIsParent: relatedIsParent, LagDays: lagDays });
    }
}

function widensOverhang(overhang: number, originalOverhang: number | null): boolean {
    return overhang > 0 && (originalOverhang === null || overhang > originalOverhang);
}

function startingOn(startDate: number, span: PlanScheduleSpan): PlanScheduleSpan {
    return { StartDate: startDate, EndDate: startDate + (span.EndDate - span.StartDate) };
}

function endingOn(endDate: number, span: PlanScheduleSpan): PlanScheduleSpan {
    return { StartDate: endDate + (span.StartDate - span.EndDate), EndDate: endDate };
}

// ── PlanElementStructureRules (the move check the Move… dialog's server answers with) ──────────────────────────────

export const MAX_DEPTH = 4;

/** ISO ⇄ day-number at the server boundary. */
export const toDay = (iso: string | null | undefined): number | null => dayNumber(iso ?? null);
export const toIso = (day: number | null | undefined): string | undefined => (day === null || day === undefined ? undefined : isoOfDay(day));
