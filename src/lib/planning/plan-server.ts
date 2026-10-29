// A stand-in for Beacon's PlanController (Beacon.API/Controllers/Planning/PlanController.cs on origin/develop), so the
// replica's pages call the same operations and get the same answers: every write returns the whole PlanDetailDto, a
// stale version is refused with a 409 naming who changed the plan, previews write nothing, and confirms recompute the
// change set with the same scheduler (plan-scheduler.ts) rather than trusting the client.
//
// APPROXIMATION: the store is this browser's localStorage, so "someone else" is another tab of the same browser. Each
// call reads the store fresh, which is what makes a second tab's edit show up in the first on its next status poll.
// The calling user is "Andy Lovseth" unless the page URL carries ?user=Name (the second tab's identity).

import { SAMPLE_BUDGETS, SAMPLE_NOTES, SAMPLE_PLAN, SAMPLES, type SampleElement, type SampleKey } from '../../data/sample-plan';
import { seedUuid } from './seed-ids';
import { HttpErrorResponse } from './ng-shim';
import {
  PlanDateTypeEnum,
  PlanElementDependencyTypeEnum,
  PlanScheduleChangeModeEnum,
  type PlanCreateDto,
  type PlanDetailDto,
  type PlanElementCreateDto,
  type PlanElementDependencyCreateDto,
  type PlanElementDto,
  type PlanElementScheduleChangeDto,
  type PlanElementUpdateDto,
  type PlanElementsShiftDto,
  type PlanLandmarkUpsertDto,
  type PlanLevelCreateDto,
  type PlanLinkCandidateDto,
  type PlanRulesDto,
  type PlanScheduleChangeSetDto,
  type PlanShiftDto,
  type PlanSimpleDto,
  type PlanStatusDto,
  type PlanUpdateDto,
} from './model';
import { MAX_DEPTH, PlanLinkValidationResult, PlanSchedule, PlanScheduler, toDay, toIso, type PlanScheduleChangeSet, type PlanScheduleFlag, type PlanScheduleNode } from './plan-scheduler';
import { planConflicts } from './plan-conflicts';
import type {
  PlanDraftChangeDto,
  PlanDraftDto,
  PlanDraftOverrideDto,
  PlanDraftPublishDto,
  PlanDraftSimpleDto,
  PlanDraftStaleDto,
  PlanDraftViewDto,
  PlanPresenceDto,
} from './plan-draft-model';

const STORE_KEY = 'bcn-planning-store-v1';
let LATENCY_MS = 220;

/** The repo-model prototype seeds three months of history through this API; it turns the latency off while it does (new, 2026-10-26). */
export function setPlanApiLatency(ms: number): void {
  LATENCY_MS = ms;
}
export const PROJECT_ID = 'delta-conveyance';

interface StoredElement {
  PlanElementID: string;
  ParentPlanElementID: string | null;
  PlanElementName: string;
  SortOrder: number;
  LevelDepth: number;
  IsMilestone: boolean;
  PlanDateType: PlanDateTypeEnum;
  StartDate: string | null;
  EndDate: string | null;
  UpdateDate: string;
  UpdateUserName: string;
  /** New (2026-10-21): whole dollars; absent on elements stored before budgets existed. */
  Budget?: number | null;
  Notes?: string | null;
  /** The program's version, kept on its root element as the API keeps it on the root's row. */
  Version: number;
}

interface StoredPlan {
  PlanID: string;
  ProjectID: string;
  PlanName: string;
  Description: string | null;
  Levels: { Depth: number; SingularName: string; PluralName: string }[];
  Elements: StoredElement[];
  Dependencies: { PlanElementDependencyID: string; PredecessorPlanElementID: string; SuccessorPlanElementID: string; LagDays: number }[];
  Landmarks: { PlanLandmarkID: string; PlanLandmarkName: string; LandmarkDate: string; SortOrder: number }[];
  Version: number;
  UpdateDate: string;
  UpdateUserName: string;
}

/** A draft as stored: outside the plan row, so saving one never moves the plan's version (drafts stay off it). */
type StoredDraft = PlanDraftDto;

interface StoredSnapshot {
  PlanSnapshotID: string;
  PlanID: string;
  Name: string;
  CreateDate: string;
  CreateUserName: string;
  Plan: StoredPlan;
}

/** A drawer's heartbeat: who has which part of the plan open. Lapses after PRESENCE_TTL_MS without one. */
interface StoredPresence {
  PlanID: string;
  UserName: string;
  /** One tab's drawer: a user can have two tabs open. */
  SessionID: string;
  ProgramPlanElementID: string | null;
  Subject: string;
  Seen: number;
}

interface Store {
  plans: StoredPlan[];
  drafts?: StoredDraft[];
  snapshots?: StoredSnapshot[];
  presence?: StoredPresence[];
}

/** Presence rides the 10-second status poll; a drawer that stops checking in (closed, or a hidden tab) lapses. */
const PRESENCE_TTL_MS = 25_000;

export const PLAN_RULES: PlanRulesDto = { MaxLevels: MAX_DEPTH, MinDate: '1900-01-01', MaxDate: '2199-12-31', MaxShiftDays: 36500 };

export function currentUserName(): string {
  try {
    const fromUrl = new URLSearchParams(location.search).get('user');
    if (fromUrl) sessionStorage.setItem('bcn-planning-user', fromUrl);
    return sessionStorage.getItem('bcn-planning-user') || 'Andy Lovseth';
  } catch {
    return 'Andy Lovseth';
  }
}

function load(): Store {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return backfillSample(JSON.parse(raw) as Store);
  } catch {
    /* a blocked store starts empty */
  }
  return { plans: [] };
}

/**
 * New (2026-10-21): a sample plan staged before budgets and notes existed gets the sample's values, once, on elements
 * that have never had either field (undefined, not null), so an open prototype shows them without reloading the sample.
 */
function backfillSample(store: Store): Store {
  for (const plan of store.plans) {
    if (plan.PlanName !== SAMPLE_PLAN.name) continue;
    for (const e of plan.Elements) {
      if (e.Budget === undefined) e.Budget = e.IsMilestone ? null : (SAMPLE_BUDGETS[e.PlanElementName] ?? null);
      if (e.Notes === undefined) e.Notes = SAMPLE_NOTES[e.PlanElementName] ?? null;
    }
  }
  return store;
}

function save(store: Store): void {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  } catch {
    /* in-memory only for this call */
  }
}

/** Deterministic while the sample seeds (./seed-ids.ts), so shared links resolve in any browser. */
const uuid = seedUuid;
const now = () => new Date().toISOString();
const delay = <T>(value: () => T): Promise<T> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      try {
        resolve(value());
      } catch (error) {
        reject(error);
      }
    }, LATENCY_MS)
  );

function notFound(): never {
  throw new HttpErrorResponse(404, { title: 'Not Found' });
}

/** A ValidationProblem: field messages keyed by DTO property, "" for form-level. */
function badRequest(key: string, message: string): never {
  throw new HttpErrorResponse(400, { errors: { [key]: [message] } });
}

function findPlan(store: Store, planID: string): StoredPlan {
  return store.plans.find((p) => p.PlanID === planID) ?? notFound();
}

// ── Reading ─────────────────────────────────────────────────────────────────────────────────────────────────────────

function orderedElements(plan: StoredPlan): StoredElement[] {
  return [...plan.Elements].sort(
    (a, b) => a.SortOrder - b.SortOrder || a.PlanElementName.localeCompare(b.PlanElementName) || a.PlanElementID.localeCompare(b.PlanElementID)
  );
}

function toSchedule(plan: StoredPlan): PlanSchedule {
  return new PlanSchedule(
    orderedElements(plan).map(
      (x): PlanScheduleNode => ({
        ID: x.PlanElementID,
        ParentID: x.ParentPlanElementID,
        StartDate: toDay(x.StartDate),
        EndDate: toDay(x.EndDate),
        IsMilestone: x.IsMilestone,
        PlanDateType: x.PlanDateType,
      })
    ),
    plan.Dependencies.map((d) => ({ PredecessorID: d.PredecessorPlanElementID, SuccessorID: d.SuccessorPlanElementID, LagDays: d.LagDays }))
  );
}

function programOf(plan: StoredPlan, planElementID: string): string | null {
  let current = plan.Elements.find((e) => e.PlanElementID === planElementID);
  while (current?.ParentPlanElementID) current = plan.Elements.find((e) => e.PlanElementID === current!.ParentPlanElementID);
  return current?.PlanElementID ?? null;
}

function versionToken(plan: StoredPlan): string {
  const programs: Record<string, number> = {};
  for (const e of plan.Elements) if (!e.ParentPlanElementID) programs[e.PlanElementID] = e.Version;
  return btoa(JSON.stringify({ p: plan.Version, g: programs }));
}

function decodeToken(token: string | null | undefined): { p: number; g: Record<string, number> } | null {
  if (!token) return null;
  try {
    return JSON.parse(atob(token));
  } catch {
    return null;
  }
}

function buildDetail(plan: StoredPlan): PlanDetailDto {
  const elements = orderedElements(plan);
  const spans = toSchedule(plan).DeriveSpans();
  const level = (depth: number) => plan.Levels.find((l) => l.Depth === depth);
  const dtos = new Map<string, PlanElementDto>();
  for (const e of elements) {
    const span = spans.get(e.PlanElementID) ?? null;
    dtos.set(e.PlanElementID, {
      PlanElementID: e.PlanElementID,
      ParentPlanElementID: e.ParentPlanElementID ?? undefined,
      PlanElementName: e.PlanElementName,
      SortOrder: e.SortOrder,
      LevelDepth: e.LevelDepth,
      LevelSingularName: level(e.LevelDepth)?.SingularName,
      LevelPluralName: level(e.LevelDepth)?.PluralName,
      IsMilestone: e.IsMilestone,
      PlanDateType: e.PlanDateType,
      StartDate: e.StartDate ?? undefined,
      EndDate: e.EndDate ?? undefined,
      SpanStartDate: toIso(span?.StartDate),
      SpanEndDate: toIso(span?.EndDate),
      Budget: e.IsMilestone ? null : (e.Budget ?? null),
      Notes: e.Notes ?? null,
      Children: [],
    });
  }
  const roots: PlanElementDto[] = [];
  for (const e of elements) {
    const dto = dtos.get(e.PlanElementID)!;
    if (e.ParentPlanElementID) dtos.get(e.ParentPlanElementID)!.Children!.push(dto);
    else roots.push(dto);
  }
  const setDepth = (nodes: PlanElementDto[], depth: number) =>
    nodes.forEach((n) => {
      n.TreeDepth = depth;
      setDepth(n.Children!, depth + 1);
    });
  setDepth(roots, 0);
  return {
    PlanID: plan.PlanID,
    ProjectID: plan.ProjectID,
    PlanName: plan.PlanName,
    Description: plan.Description ?? undefined,
    VersionToken: versionToken(plan),
    Levels: [...plan.Levels].sort((a, b) => a.Depth - b.Depth).map((l) => ({ ...l })),
    Elements: roots,
    Dependencies: plan.Dependencies.map((d) => ({ ...d, PlanElementDependencyType: PlanElementDependencyTypeEnum.FinishToStart })),
    Landmarks: [...plan.Landmarks]
      .sort((a, b) => a.LandmarkDate.localeCompare(b.LandmarkDate) || a.SortOrder - b.SortOrder)
      .map((l) => ({ ...l })),
  };
}

/** PlanScheduleCalculation.ToDto: both lists in tree order, named. */
function changeSetDto(plan: StoredPlan, changeSet: PlanScheduleChangeSet): PlanScheduleChangeSetDto {
  const order = new Map<string, number>();
  const visit = (parentID: string | null) =>
    orderedElements(plan)
      .filter((e) => e.ParentPlanElementID === parentID)
      .forEach((e) => {
        order.set(e.PlanElementID, order.size);
        visit(e.PlanElementID);
      });
  visit(null);
  const name = (id: string | null) => (id ? plan.Elements.find((e) => e.PlanElementID === id)?.PlanElementName : undefined);
  return {
    Changes: [...changeSet.Changes]
      .sort((a, b) => order.get(a.ElementID)! - order.get(b.ElementID)!)
      .map((c) => ({
        PlanElementID: c.ElementID,
        PlanElementName: name(c.ElementID),
        OldStartDate: toIso(c.OldDates?.StartDate),
        OldEndDate: toIso(c.OldDates?.EndDate),
        NewStartDate: toIso(c.NewDates.StartDate),
        NewEndDate: toIso(c.NewDates.EndDate),
      })),
    Flags: [...changeSet.Flags]
      .sort((a, b) => order.get(a.ElementID)! - order.get(b.ElementID)!)
      .map((f) => ({
        PlanElementID: f.ElementID,
        PlanElementName: name(f.ElementID),
        Reason: f.Reason,
        RequestedStartDate: toIso(f.Requested?.StartDate),
        RequestedEndDate: toIso(f.Requested?.EndDate),
        RelatedPlanElementID: f.RelatedElementID ?? undefined,
        RelatedPlanElementName: name(f.RelatedElementID),
        RelatedIsParent: f.RelatedIsParent,
        LagDays: f.LagDays ?? undefined,
      })),
  };
}

// ── Writing: the PlanWriteGuard ─────────────────────────────────────────────────────────────────────────────────────

interface Scope {
  plan: boolean;
  programs: (string | null)[];
}

/**
 * Checks the sent version against the parts of the plan the write edits (PlanWriteScope), runs it, then stamps the plan
 * row and every program the write touched. A version the client did not send is written unchecked, as the API does.
 */
function write(planID: string, sentToken: string | null | undefined, scope: (plan: StoredPlan) => Scope, apply: (plan: StoredPlan, store: Store) => string[] | void): PlanDetailDto {
  const store = load();
  const plan = findPlan(store, planID);
  const resolved = scope(plan);
  const sent = decodeToken(sentToken);
  if (sent) {
    const programs = resolved.programs.filter((x): x is string => !!x);
    const stalePlan = resolved.plan && sent.p !== plan.Version;
    const staleProgram = programs.find((id) => (plan.Elements.find((e) => e.PlanElementID === id)?.Version ?? 0) !== (sent.g[id] ?? 0));
    if (stalePlan || staleProgram) {
      const who = staleProgram ? plan.Elements.find((e) => e.PlanElementID === staleProgram)?.UpdateUserName : plan.UpdateUserName;
      throw new HttpErrorResponse(409, { UpdateUserName: who ?? null });
    }
  }
  const user = currentUserName();
  const touched = apply(plan, store) ?? [];
  const stamp = now();
  if (resolved.plan) {
    plan.Version += 1;
    plan.UpdateDate = stamp;
    plan.UpdateUserName = user;
  }
  const programIDs = new Set([...resolved.programs, ...touched.map((id) => programOf(plan, id))].filter((x): x is string => !!x));
  for (const id of programIDs) {
    const root = plan.Elements.find((e) => e.PlanElementID === id);
    if (!root) continue;
    root.Version += 1;
    root.UpdateDate = stamp;
    root.UpdateUserName = user;
  }
  save(store);
  return buildDetail(plan);
}

const PLAN: Scope = { plan: true, programs: [] };
const programsOf =
  (...ids: string[]) =>
  (plan: StoredPlan): Scope => ({ plan: false, programs: ids.map((id) => programOf(plan, id)) });
const placedUnder = (plan: StoredPlan, parentID: string | null): Scope => (parentID ? { plan: false, programs: [programOf(plan, parentID)] } : { plan: true, programs: [] });
const parentOf = (plan: StoredPlan, id: string) => plan.Elements.find((e) => e.PlanElementID === id)?.ParentPlanElementID ?? null;

function requireElement(plan: StoredPlan, id: string): StoredElement {
  return plan.Elements.find((e) => e.PlanElementID === id) ?? notFound();
}

function renumber(siblings: StoredElement[]): void {
  siblings.forEach((s, i) => (s.SortOrder = i));
}

function siblingsOf(plan: StoredPlan, parentID: string | null, except?: string): StoredElement[] {
  return orderedElements(plan).filter((e) => e.ParentPlanElementID === parentID && e.PlanElementID !== except);
}

function applyUpdate(element: StoredElement, dto: PlanElementUpdateDto): void {
  element.PlanElementName = (dto.PlanElementName ?? '').trim();
  element.LevelDepth = dto.LevelDepth ?? element.LevelDepth;
  element.StartDate = dto.StartDate ?? null;
  element.EndDate = dto.EndDate ?? null;
  element.PlanDateType = dto.PlanDateType ?? PlanDateTypeEnum.Estimated;
  element.IsMilestone = !!dto.IsMilestone;
  // A request that doesn't carry them (an older caller) leaves them be; a milestone never keeps a budget.
  if ('Budget' in dto) element.Budget = dto.Budget ?? null;
  if ('Notes' in dto) element.Notes = dto.Notes?.trim() || null;
  if (element.IsMilestone) element.Budget = null;
}

function applyDateChanges(plan: StoredPlan, changeSet: PlanScheduleChangeSet): string[] {
  for (const change of changeSet.Changes) {
    const element = requireElement(plan, change.ElementID);
    element.StartDate = toIso(change.NewDates.StartDate) ?? null;
    element.EndDate = toIso(change.NewDates.EndDate) ?? null;
    element.UpdateDate = now();
    element.UpdateUserName = currentUserName();
  }
  return changeSet.Changes.map((c) => c.ElementID);
}

function validateElement(plan: StoredPlan, dto: PlanElementUpdateDto, parent: StoredElement | null, element: StoredElement | null): void {
  if (!dto.PlanElementName?.trim()) badRequest('PlanElementName', 'Element name is required.');
  const depth = dto.LevelDepth ?? 0;
  if (!plan.Levels.some((l) => l.Depth === depth)) badRequest('LevelDepth', `This plan has no level at depth ${depth}.`);
  if (parent?.IsMilestone) badRequest('ParentPlanElementID', 'A milestone cannot have child elements.');
  if (parent && depth <= parent.LevelDepth) badRequest('LevelDepth', `Level ${depth} is not below this parent's level; an element sits at a deeper level than its parent.`);
  const children = element ? plan.Elements.filter((e) => e.ParentPlanElementID === element.PlanElementID) : [];
  if (children.length) {
    const minChild = Math.min(...children.map((c) => c.LevelDepth));
    if (depth >= minChild)
      badRequest('LevelDepth', `Level ${depth} is not above this element's children; it must be shallower than every child's level (the shallowest child is at level ${minChild}).`);
    if (dto.IsMilestone) badRequest('IsMilestone', 'An element with child elements cannot be a milestone.');
  }
  if (!!dto.StartDate !== !!dto.EndDate) badRequest('', dto.IsMilestone ? 'A milestone needs a start and end date on the same day.' : 'Give both a start and an end date, or neither.');
  if (dto.IsMilestone && (!dto.StartDate || dto.StartDate !== dto.EndDate)) badRequest('', 'A milestone needs a start and end date on the same day.');
  if (dto.StartDate && dto.EndDate && dto.EndDate < dto.StartDate) badRequest('EndDate', 'End date cannot be before the start date.');
  if (dto.Budget !== null && dto.Budget !== undefined && (!Number.isFinite(dto.Budget) || dto.Budget < 0)) badRequest('Budget', 'Budget must be zero or more.');
}

function elementEdit(plan: StoredPlan, planElementID: string, dto: PlanElementScheduleChangeDto): PlanScheduleChangeSet {
  const start = toDay(dto.StartDate);
  const end = toDay(dto.EndDate);
  return PlanScheduler.ChangeElement(toSchedule(plan), {
    ElementID: planElementID,
    NewDates: start !== null && end !== null ? { StartDate: start, EndDate: end } : null,
    PlanDateType: dto.PlanDateType ?? PlanDateTypeEnum.Estimated,
    Mode: dto.Mode ?? PlanScheduleChangeModeEnum.ThisItemOnly,
  });
}

function planShift(plan: StoredPlan, dto: PlanShiftDto): PlanScheduleChangeSet {
  const schedule = toSchedule(plan);
  const target = toDay(dto.NewStartDate);
  const days = dto.Days ?? (target !== null ? PlanScheduler.DaysToStartOn(schedule, target) : null) ?? 0;
  return PlanScheduler.Shift(schedule, days);
}

function stageSample(projectID: string, key: SampleKey = 'fisheries'): StoredPlan {
  const { plan: sample, budgets, notes } = SAMPLES[key];
  const user = currentUserName();
  const stamp = now();
  const plan: StoredPlan = {
    PlanID: uuid(),
    ProjectID: projectID,
    PlanName: sample.name,
    Description: sample.description,
    Levels: sample.levels.map((l, i) => ({ Depth: i + 1, ...l })),
    Elements: [],
    Dependencies: [],
    Landmarks: sample.landmarks.map((l, i) => ({ PlanLandmarkID: uuid(), PlanLandmarkName: l.name, LandmarkDate: l.date, SortOrder: i + 1 })),
    Version: 1,
    UpdateDate: stamp,
    UpdateUserName: user,
  };
  const byName = new Map<string, string>();
  const stage = (nodes: SampleElement[], parentID: string | null, depth: number) =>
    nodes.forEach((node, i) => {
      const id = uuid();
      byName.set(node.name, id);
      plan.Elements.push({
        PlanElementID: id,
        ParentPlanElementID: parentID,
        PlanElementName: node.name,
        SortOrder: i + 1,
        LevelDepth: depth,
        IsMilestone: node.milestone,
        PlanDateType: node.type as PlanDateTypeEnum,
        StartDate: node.start,
        EndDate: node.end,
        Budget: node.milestone ? null : (budgets[node.name] ?? null),
        Notes: notes[node.name] ?? null,
        UpdateDate: stamp,
        UpdateUserName: user,
        Version: 1,
      });
      stage(node.children, id, depth + 1);
    });
  stage(sample.elements, null, 1);
  for (const [from, to, lag] of sample.dependencies) {
    plan.Dependencies.push({ PlanElementDependencyID: uuid(), PredecessorPlanElementID: byName.get(from)!, SuccessorPlanElementID: byName.get(to)!, LagDays: lag });
  }
  return plan;
}

// ── Drafts (new design: "Plan Editing: Proposed Direction", 2026-10-19) ─────────────────────────────────────────────

interface DraftReplay {
  /** The live plan with the overrides applied and each one's cascade rerun. */
  work: StoredPlan;
  /** The last thing that moved each element: the planner, or the cascade from one of their edits. */
  movedBy: Map<string, { cause: 'own' } | { cause: 'cascade'; by: string }>;
  stale: PlanDraftStaleDto[];
  flags: PlanScheduleFlag[];
}

const sameDates = (a: { StartDate: string | null; EndDate: string | null }, start: string | null, end: string | null) => a.StartDate === start && a.EndDate === end;

/**
 * Replays a draft's overrides on a copy of the live plan, in the order they were made. Only the planner's own edits are
 * stored; each one's cascade is recomputed here, against the plan as it is now, so it can never go stale (ADR-0069). An
 * override whose element's live dates moved since the draft touched it is reported stale (and skipped when the planner
 * chose the live dates at publish); one whose element was deleted is reported missing and skipped.
 */
function replayDraft(plan: StoredPlan, overrides: readonly PlanDraftOverrideDto[], keepLive: ReadonlySet<string> = new Set()): DraftReplay {
  const work: StoredPlan = JSON.parse(JSON.stringify(plan));
  const movedBy: DraftReplay['movedBy'] = new Map();
  const stale: PlanDraftStaleDto[] = [];
  const flags = new Map<string, PlanScheduleFlag>();
  for (const override of overrides) {
    const live = plan.Elements.find((e) => e.PlanElementID === override.PlanElementID);
    const element = work.Elements.find((e) => e.PlanElementID === override.PlanElementID);
    if (!live || !element) {
      stale.push({
        PlanElementID: override.PlanElementID,
        PlanElementName: 'An element since deleted',
        Missing: true,
        LoadedStartDate: override.LoadedStartDate,
        LoadedEndDate: override.LoadedEndDate,
        DraftStartDate: override.StartDate,
        DraftEndDate: override.EndDate,
      });
      continue;
    }
    if (!sameDates(live, override.LoadedStartDate, override.LoadedEndDate)) {
      stale.push({
        PlanElementID: live.PlanElementID,
        PlanElementName: live.PlanElementName,
        Missing: false,
        LoadedStartDate: override.LoadedStartDate,
        LoadedEndDate: override.LoadedEndDate,
        LiveStartDate: live.StartDate ?? undefined,
        LiveEndDate: live.EndDate ?? undefined,
        DraftStartDate: override.StartDate,
        DraftEndDate: override.EndDate,
      });
      if (keepLive.has(live.PlanElementID)) continue;
    }
    if (override.Cascade) {
      const start = toDay(override.StartDate);
      const end = toDay(override.EndDate);
      const changeSet = PlanScheduler.ChangeElement(toSchedule(work), {
        ElementID: element.PlanElementID,
        NewDates: start !== null && end !== null ? { StartDate: start, EndDate: end } : null,
        PlanDateType: override.PlanDateType,
        Mode: PlanScheduleChangeModeEnum.ThisItemOnly,
      });
      for (const change of changeSet.Changes) {
        if (change.ElementID === element.PlanElementID) continue;
        const pushed = work.Elements.find((e) => e.PlanElementID === change.ElementID);
        if (!pushed) continue;
        pushed.StartDate = toIso(change.NewDates.StartDate) ?? null;
        pushed.EndDate = toIso(change.NewDates.EndDate) ?? null;
        movedBy.set(change.ElementID, { cause: 'cascade', by: element.PlanElementID });
      }
      for (const flag of changeSet.Flags) flags.set(`${flag.ElementID}|${flag.Reason}`, flag);
    }
    element.StartDate = override.StartDate;
    element.EndDate = override.EndDate;
    element.PlanDateType = override.PlanDateType;
    movedBy.set(element.PlanElementID, { cause: 'own' });
  }
  return { work, movedBy, stale, flags: [...flags.values()] };
}

/** A draft's change to the plan's shape (2026-10-28, draft first: adding, removing, moving and linking are drafted
 *  like dates). The prototype's own extension: Beacon's draft API carries date overrides only. */
export type DraftStructureOp =
  | { op: 'add'; id: string; dto: PlanElementCreateDto }
  | { op: 'remove'; id: string }
  | { op: 'move'; id: string; parentId: string | null }
  | { op: 'order'; id: string; index: number }
  | { op: 'link'; id: string; from: string; to: string; lag: number };

/**
 * The plan as a draft has its shape: its structure ops in order (each skipped when it no longer applies, as when what
 * it names is gone), then its link edits (new lags; null removes one). Writes nothing.
 */
function withDraft(plan: StoredPlan, links?: Record<string, number | null>, structure?: readonly DraftStructureOp[]): StoredPlan {
  if (!structure?.length && (!links || !Object.keys(links).length)) return plan;
  const work: StoredPlan = { ...plan, Elements: plan.Elements.map((e) => ({ ...e })), Dependencies: plan.Dependencies.map((d) => ({ ...d })) };
  const has = (id: string | null) => !id || work.Elements.some((e) => e.PlanElementID === id);
  for (const o of structure ?? []) {
    if (o.op === 'add') {
      const parent = o.dto.ParentPlanElementID ?? null;
      if (!has(parent) || has(o.id)) continue;
      const siblings = siblingsOf(work, parent);
      work.Elements.push({
        PlanElementID: o.id,
        ParentPlanElementID: parent,
        PlanElementName: (o.dto.PlanElementName ?? '').trim(),
        SortOrder: o.dto.SortOrder ?? siblings.length,
        LevelDepth: o.dto.LevelDepth ?? 1,
        IsMilestone: !!o.dto.IsMilestone,
        PlanDateType: o.dto.PlanDateType ?? PlanDateTypeEnum.Estimated,
        StartDate: o.dto.StartDate ?? null,
        EndDate: o.dto.IsMilestone ? (o.dto.StartDate ?? null) : (o.dto.EndDate ?? null),
        Budget: o.dto.IsMilestone ? null : (o.dto.Budget ?? null),
        Notes: o.dto.Notes?.trim() || null,
        UpdateDate: now(),
        UpdateUserName: currentUserName(),
        Version: 1,
      });
    } else if (o.op === 'remove') {
      const element = work.Elements.find((e) => e.PlanElementID === o.id);
      if (!element) continue;
      const subtree = new Set(toSchedule(work).SelfAndDescendantIDs(o.id));
      work.Dependencies = work.Dependencies.filter((d) => !subtree.has(d.PredecessorPlanElementID) && !subtree.has(d.SuccessorPlanElementID));
      work.Elements = work.Elements.filter((e) => !subtree.has(e.PlanElementID));
      renumber(siblingsOf(work, element.ParentPlanElementID));
    } else if (o.op === 'move') {
      const element = work.Elements.find((e) => e.PlanElementID === o.id);
      if (!element || !has(o.parentId) || (o.parentId && toSchedule(work).IsSelfOrDescendant(o.id, o.parentId))) continue;
      renumber(siblingsOf(work, element.ParentPlanElementID, o.id));
      const next = [...siblingsOf(work, o.parentId, o.id), element];
      element.ParentPlanElementID = o.parentId;
      renumber(next);
    } else if (o.op === 'order') {
      const element = work.Elements.find((e) => e.PlanElementID === o.id);
      if (!element) continue;
      const siblings = siblingsOf(work, element.ParentPlanElementID, o.id);
      siblings.splice(Math.max(0, Math.min(o.index, siblings.length)), 0, element);
      renumber(siblings);
    } else if (o.op === 'link') {
      if (!has(o.from) || !has(o.to) || work.Dependencies.some((d) => d.PredecessorPlanElementID === o.from && d.SuccessorPlanElementID === o.to)) continue;
      work.Dependencies.push({ PlanElementDependencyID: o.id, PredecessorPlanElementID: o.from, SuccessorPlanElementID: o.to, LagDays: o.lag });
    }
  }
  if (links) work.Dependencies = work.Dependencies.filter((d) => links[d.PlanElementDependencyID] !== null).map((d) => (d.PlanElementDependencyID in links ? { ...d, LagDays: links[d.PlanElementDependencyID] as number } : d));
  return work;
}

function draftView(plan: StoredPlan, overrides: readonly PlanDraftOverrideDto[], keepLive: ReadonlySet<string> = new Set()): PlanDraftViewDto {
  const { work, movedBy, stale, flags } = replayDraft(plan, overrides, keepLive);
  const detail = buildDetail(work);
  const name = (id: string | undefined) => (id ? plan.Elements.find((e) => e.PlanElementID === id)?.PlanElementName : undefined);
  const changes: PlanDraftChangeDto[] = [];
  const visit = (parentID: string | null) =>
    orderedElements(work)
      .filter((e) => e.ParentPlanElementID === parentID)
      .forEach((e) => {
        const live = plan.Elements.find((x) => x.PlanElementID === e.PlanElementID)!;
        if (!sameDates(live, e.StartDate, e.EndDate) || live.PlanDateType !== e.PlanDateType) {
          const moved = movedBy.get(e.PlanElementID);
          const by = moved?.cause === 'cascade' ? moved.by : undefined;
          changes.push({
            PlanElementID: e.PlanElementID,
            PlanElementName: e.PlanElementName,
            Cause: moved?.cause ?? 'cascade',
            CausedByPlanElementID: by,
            CausedByPlanElementName: name(by),
            LiveStartDate: live.StartDate ?? undefined,
            LiveEndDate: live.EndDate ?? undefined,
            DraftStartDate: e.StartDate ?? undefined,
            DraftEndDate: e.EndDate ?? undefined,
            LivePlanDateType: live.PlanDateType,
            DraftPlanDateType: e.PlanDateType,
          });
        }
        visit(e.PlanElementID);
      });
  visit(null);
  return { Plan: detail, Changes: changes, Stale: stale, Conflicts: planConflicts(detail), Flags: changeSetDto(work, { Changes: [], Flags: flags }).Flags };
}

function findDraft(store: Store, planID: string, planDraftID: string): StoredDraft {
  return (store.drafts ?? []).find((d) => d.PlanDraftID === planDraftID && d.PlanID === planID) ?? notFound();
}

/** Only the owner edits, publishes or deletes a draft; others view it and copy it. */
function ownDraft(store: Store, planID: string, planDraftID: string): StoredDraft {
  const draft = findDraft(store, planID, planDraftID);
  if (draft.OwnerUserName !== currentUserName()) throw new HttpErrorResponse(403, { title: 'Only the owner can change this draft.' });
  return draft;
}

function draftSimple(draft: StoredDraft): PlanDraftSimpleDto {
  return { PlanDraftID: draft.PlanDraftID, OwnerUserName: draft.OwnerUserName, Name: draft.Name, ChangeCount: draft.Overrides.length, UpdateDate: draft.UpdateDate };
}

function livePresence(store: Store, planID: string): StoredPresence[] {
  const cutoff = Date.now() - PRESENCE_TTL_MS;
  store.presence = (store.presence ?? []).filter((p) => p.Seen >= cutoff);
  return store.presence.filter((p) => p.PlanID === planID);
}

// ── The API ─────────────────────────────────────────────────────────────────────────────────────────────────────────

export const planApi = {
  rules: (): Promise<PlanRulesDto> => delay(() => ({ ...PLAN_RULES })),

  listPlans: (projectID: string): Promise<PlanSimpleDto[]> =>
    delay(() =>
      load()
        .plans.filter((p) => p.ProjectID === projectID)
        .sort((a, b) => a.PlanName.localeCompare(b.PlanName))
        .map((p) => ({ PlanID: p.PlanID, ProjectID: p.ProjectID, PlanName: p.PlanName, Description: p.Description ?? undefined, ElementCount: p.Elements.length }))
    ),

  getPlan: (planID: string): Promise<PlanDetailDto> => delay(() => buildDetail(findPlan(load(), planID))),

  getStatus: (planID: string): Promise<PlanStatusDto> =>
    delay(() => {
      const plan = findPlan(load(), planID);
      return {
        VersionToken: versionToken(plan),
        PlanUpdateDate: plan.UpdateDate,
        PlanUpdateUserName: plan.UpdateUserName,
        Programs: plan.Elements.filter((e) => !e.ParentPlanElementID).map((e) => ({
          PlanElementID: e.PlanElementID,
          PlanElementName: e.PlanElementName,
          UpdateDate: e.UpdateDate,
          UpdateUserName: e.UpdateUserName,
        })),
      };
    }),

  createPlan: (projectID: string, dto: PlanCreateDto): Promise<PlanDetailDto> =>
    delay(() => {
      if (!dto.PlanName?.trim()) badRequest('PlanName', 'Plan name is required.');
      const store = load();
      const plan: StoredPlan = {
        PlanID: uuid(),
        ProjectID: projectID,
        PlanName: dto.PlanName.trim(),
        Description: dto.Description?.trim() || null,
        Levels: (dto.Levels ?? []).map((l, i) => ({ Depth: i + 1, SingularName: l.SingularName!.trim(), PluralName: l.PluralName!.trim() })),
        Elements: [],
        Dependencies: [],
        Landmarks: [],
        Version: 1,
        UpdateDate: now(),
        UpdateUserName: currentUserName(),
      };
      store.plans.push(plan);
      save(store);
      return buildDetail(plan);
    }),

  createSample: (projectID: string, key: SampleKey = 'fisheries'): Promise<PlanDetailDto> =>
    delay(() => {
      const store = load();
      const plan = stageSample(projectID, key);
      store.plans.push(plan);
      save(store);
      return buildDetail(plan);
    }),

  updatePlan: (planID: string, dto: PlanUpdateDto, token?: string | null) =>
    delay(() =>
      write(planID, token, () => PLAN, (plan) => {
        if (!dto.PlanName?.trim()) badRequest('PlanName', 'Plan name is required.');
        plan.PlanName = dto.PlanName.trim();
        plan.Description = dto.Description?.trim() || null;
      })
    ),

  deletePlan: (planID: string, token?: string | null): Promise<void> =>
    delay(() => {
      const store = load();
      const plan = findPlan(store, planID);
      const sent = decodeToken(token);
      if (sent && sent.p !== plan.Version) throw new HttpErrorResponse(409, { UpdateUserName: plan.UpdateUserName });
      store.plans = store.plans.filter((p) => p.PlanID !== planID);
      save(store);
    }),

  createElement: (planID: string, dto: PlanElementCreateDto, token?: string | null) =>
    delay(() =>
      write(planID, token, (plan) => placedUnder(plan, dto.ParentPlanElementID ?? null), (plan) => {
        const parent = dto.ParentPlanElementID ? requireElement(plan, dto.ParentPlanElementID) : null;
        validateElement(plan, dto, parent, null);
        const id = uuid();
        plan.Elements.push({
          PlanElementID: id,
          ParentPlanElementID: parent?.PlanElementID ?? null,
          PlanElementName: dto.PlanElementName!.trim(),
          SortOrder: dto.SortOrder ?? 0,
          LevelDepth: dto.LevelDepth!,
          IsMilestone: !!dto.IsMilestone,
          PlanDateType: dto.PlanDateType ?? PlanDateTypeEnum.Estimated,
          StartDate: dto.StartDate ?? null,
          EndDate: dto.IsMilestone ? (dto.StartDate ?? null) : (dto.EndDate ?? null),
          Budget: dto.IsMilestone ? null : (dto.Budget ?? null),
          Notes: dto.Notes?.trim() || null,
          UpdateDate: now(),
          UpdateUserName: currentUserName(),
          Version: 1,
        });
        return [id];
      })
    ),

  updateElement: (planID: string, planElementID: string, dto: PlanElementUpdateDto, token?: string | null) =>
    delay(() =>
      write(planID, token, programsOf(planElementID), (plan) => {
        const element = requireElement(plan, planElementID);
        const parent = element.ParentPlanElementID ? requireElement(plan, element.ParentPlanElementID) : null;
        validateElement(plan, dto, parent, element);
        // PlanElementUpdateDatesValidator: a date change goes through the schedule endpoint.
        if ((dto.StartDate ?? null) !== element.StartDate || (dto.EndDate ?? null) !== element.EndDate)
          badRequest('', 'Change dates through the schedule endpoint, which previews what else moves.');
        applyUpdate(element, dto);
        element.UpdateDate = now();
        element.UpdateUserName = currentUserName();
      })
    ),

  previewElementSchedule: (planID: string, planElementID: string, dto: PlanElementScheduleChangeDto): Promise<PlanScheduleChangeSetDto> =>
    delay(() => {
      const plan = findPlan(load(), planID);
      requireElement(plan, planElementID);
      return changeSetDto(plan, elementEdit(plan, planElementID, dto));
    }),

  updateElementSchedule: (planID: string, planElementID: string, dto: PlanElementScheduleChangeDto, token?: string | null) =>
    delay(() =>
      write(planID, token, programsOf(planElementID), (plan) => {
        const element = requireElement(plan, planElementID);
        const parent = element.ParentPlanElementID ? requireElement(plan, element.ParentPlanElementID) : null;
        validateElement(plan, dto, parent, element);
        const changeSet = elementEdit(plan, planElementID, dto);
        applyUpdate(element, dto);
        element.UpdateDate = now();
        element.UpdateUserName = currentUserName();
        return applyDateChanges(plan, changeSet);
      })
    ),

  setSortOrder: (planID: string, planElementID: string, index: number, token?: string | null) =>
    delay(() =>
      write(planID, token, (plan) => placedUnder(plan, parentOf(plan, planElementID)), (plan) => {
        const element = requireElement(plan, planElementID);
        const siblings = siblingsOf(plan, element.ParentPlanElementID, planElementID);
        siblings.splice(Math.max(0, Math.min(index, siblings.length)), 0, element);
        renumber(siblings);
      })
    ),

  moveElement: (planID: string, planElementID: string, parentPlanElementID: string | null, token?: string | null) =>
    delay(() =>
      write(
        planID,
        token,
        (plan) => {
          const oldP = placedUnder(plan, parentOf(plan, planElementID));
          const newP = placedUnder(plan, parentPlanElementID);
          return { plan: oldP.plan || newP.plan, programs: [...oldP.programs, ...newP.programs, programOf(plan, planElementID)] };
        },
        (plan) => {
          const element = requireElement(plan, planElementID);
          if (parentPlanElementID) {
            const schedule = toSchedule(plan);
            const target = plan.Elements.find((e) => e.PlanElementID === parentPlanElementID) ?? badRequest('ParentPlanElementID', 'The new parent element does not belong to this plan.');
            if (schedule.IsSelfOrDescendant(planElementID, parentPlanElementID))
              badRequest('ParentPlanElementID', 'An element cannot be moved under itself or one of its own descendants.');
            if (target.IsMilestone) badRequest('ParentPlanElementID', 'A milestone cannot have child elements.');
            if (element.LevelDepth <= target.LevelDepth)
              badRequest(
                'ParentPlanElementID',
                `This element is at level ${element.LevelDepth}, which is not below the new parent's level ${target.LevelDepth}; an element keeps its level when moved and must sit deeper than its parent.`
              );
            if (schedule.MoveMakesImpossibleOrdering(planElementID, parentPlanElementID))
              badRequest('ParentPlanElementID', 'Moving this element here would make an impossible schedule: under the new parent, its dependencies would loop back through the tree.');
          }
          renumber(siblingsOf(plan, element.ParentPlanElementID, planElementID));
          const newSiblings = [...siblingsOf(plan, parentPlanElementID, planElementID), element];
          element.ParentPlanElementID = parentPlanElementID;
          renumber(newSiblings);
        }
      )
    ),

  deleteElement: (planID: string, planElementID: string, token?: string | null) =>
    delay(() =>
      write(
        planID,
        token,
        (plan) => {
          const placement = placedUnder(plan, parentOf(plan, planElementID));
          return { plan: placement.plan, programs: [...placement.programs, programOf(plan, planElementID)] };
        },
        (plan) => {
          const element = requireElement(plan, planElementID);
          const subtree = new Set(toSchedule(plan).SelfAndDescendantIDs(planElementID));
          plan.Dependencies = plan.Dependencies.filter((d) => !subtree.has(d.PredecessorPlanElementID) && !subtree.has(d.SuccessorPlanElementID));
          plan.Elements = plan.Elements.filter((e) => !subtree.has(e.PlanElementID));
          renumber(siblingsOf(plan, element.ParentPlanElementID));
        }
      )
    ),

  createDependency: (planID: string, dto: PlanElementDependencyCreateDto, token?: string | null) =>
    delay(() =>
      write(planID, token, programsOf(dto.PredecessorPlanElementID!, dto.SuccessorPlanElementID!), (plan) => {
        const result = toSchedule(plan).ValidateNewLink(dto.PredecessorPlanElementID!, dto.SuccessorPlanElementID!);
        const messages: Record<string, string> = {
          [PlanLinkValidationResult.SelfLink]: 'An element cannot depend on itself.',
          [PlanLinkValidationResult.Duplicate]: 'These two elements are already linked in this direction.',
          [PlanLinkValidationResult.AncestorDescendantLink]: 'An element cannot be linked to its own parent, child, or any element above or below it in the same branch.',
          [PlanLinkValidationResult.CreatesCycle]: 'This dependency would create a cycle: the predecessor already depends, directly or indirectly, on the successor.',
          [PlanLinkValidationResult.CreatesCycleThroughParent]:
            "This dependency would make an impossible schedule through a parent: something in the successor's branch already waits on the predecessor.",
        };
        if (result !== PlanLinkValidationResult.Valid) badRequest('PredecessorPlanElementID', messages[result] ?? 'This dependency is not valid.');
        if (Math.abs(dto.LagDays ?? 0) > 3650) badRequest('LagDays', 'Lag must be between -3650 and 3650 days.');
        plan.Dependencies.push({
          PlanElementDependencyID: uuid(),
          PredecessorPlanElementID: dto.PredecessorPlanElementID!,
          SuccessorPlanElementID: dto.SuccessorPlanElementID!,
          LagDays: dto.LagDays ?? 0,
        });
      })
    ),

  updateDependency: (planID: string, planElementDependencyID: string, lagDays: number, token?: string | null) =>
    delay(() =>
      write(
        planID,
        token,
        (plan) => {
          const d = plan.Dependencies.find((x) => x.PlanElementDependencyID === planElementDependencyID) ?? notFound();
          return programsOf(d.PredecessorPlanElementID, d.SuccessorPlanElementID)(plan);
        },
        (plan) => {
          if (Math.abs(lagDays) > 3650) badRequest('LagDays', 'Lag must be between -3650 and 3650 days.');
          plan.Dependencies.find((x) => x.PlanElementDependencyID === planElementDependencyID)!.LagDays = lagDays;
        }
      )
    ),

  deleteDependency: (planID: string, planElementDependencyID: string, token?: string | null) =>
    delay(() =>
      write(
        planID,
        token,
        (plan) => {
          const d = plan.Dependencies.find((x) => x.PlanElementDependencyID === planElementDependencyID) ?? notFound();
          return programsOf(d.PredecessorPlanElementID, d.SuccessorPlanElementID)(plan);
        },
        (plan) => {
          plan.Dependencies = plan.Dependencies.filter((x) => x.PlanElementDependencyID !== planElementDependencyID);
        }
      )
    ),

  /** With a draft's links and structure: what the item may wait on as the draft has the plan. */
  predecessorCandidates: (planID: string, successorPlanElementID: string, links?: Record<string, number | null>, structure?: readonly DraftStructureOp[]): Promise<PlanLinkCandidateDto[]> =>
    delay(() => {
      const plan = withDraft(findPlan(load(), planID), links, structure);
      const ids = toSchedule(plan).PredecessorCandidateIDs(successorPlanElementID);
      const level = (depth: number) => plan.Levels.find((l) => l.Depth === depth);
      const out: PlanLinkCandidateDto[] = [];
      const visit = (parentID: string | null, ancestors: string[]) =>
        orderedElements(plan)
          .filter((e) => e.ParentPlanElementID === parentID)
          .forEach((e) => {
            if (ids.has(e.PlanElementID))
              out.push({
                PlanElementID: e.PlanElementID,
                PlanElementName: e.PlanElementName,
                LevelDepth: e.LevelDepth,
                LevelSingularName: level(e.LevelDepth)?.SingularName,
                IsMilestone: e.IsMilestone,
                TreeDepth: ancestors.length,
                AncestorNames: [...ancestors],
              });
            visit(e.PlanElementID, [...ancestors, e.PlanElementName]);
          });
      visit(null, []);
      return out;
    }),

  createLandmark: (planID: string, dto: PlanLandmarkUpsertDto, token?: string | null) =>
    delay(() =>
      write(planID, token, () => PLAN, (plan) => {
        plan.Landmarks.push({
          PlanLandmarkID: uuid(),
          PlanLandmarkName: dto.PlanLandmarkName!.trim(),
          LandmarkDate: dto.LandmarkDate!,
          SortOrder: Math.max(0, ...plan.Landmarks.map((l) => l.SortOrder)) + 1,
        });
      })
    ),

  updateLandmark: (planID: string, planLandmarkID: string, dto: PlanLandmarkUpsertDto, token?: string | null) =>
    delay(() =>
      write(planID, token, () => PLAN, (plan) => {
        const landmark = plan.Landmarks.find((l) => l.PlanLandmarkID === planLandmarkID) ?? notFound();
        landmark.PlanLandmarkName = dto.PlanLandmarkName!.trim();
        landmark.LandmarkDate = dto.LandmarkDate!;
      })
    ),

  deleteLandmark: (planID: string, planLandmarkID: string, token?: string | null) =>
    delay(() =>
      write(planID, token, () => PLAN, (plan) => {
        plan.Landmarks = plan.Landmarks.filter((l) => l.PlanLandmarkID !== planLandmarkID);
      })
    ),

  createLevel: (planID: string, dto: PlanLevelCreateDto, token?: string | null) =>
    delay(() =>
      write(planID, token, () => PLAN, (plan) => {
        if (plan.Levels.length >= MAX_DEPTH) badRequest('', `A plan has at most ${MAX_DEPTH} levels.`);
        plan.Levels.push({ Depth: Math.max(0, ...plan.Levels.map((l) => l.Depth)) + 1, SingularName: dto.SingularName!.trim(), PluralName: dto.PluralName!.trim() });
      })
    ),

  updateLevel: (planID: string, depth: number, dto: PlanLevelCreateDto, token?: string | null) =>
    delay(() =>
      write(planID, token, () => PLAN, (plan) => {
        const level = plan.Levels.find((l) => l.Depth === depth) ?? notFound();
        level.SingularName = dto.SingularName!.trim();
        level.PluralName = dto.PluralName!.trim();
      })
    ),

  deleteLevel: (planID: string, depth: number, token?: string | null) =>
    delay(() =>
      write(planID, token, () => PLAN, (plan) => {
        const deepest = Math.max(...plan.Levels.map((l) => l.Depth));
        if (plan.Levels.length <= 1) badRequest('', 'A plan needs at least one level.');
        if (depth !== deepest) badRequest('', 'Only the deepest level can be removed.');
        if (plan.Elements.some((e) => e.LevelDepth === depth)) badRequest('', 'Elements use this level. Delete or move them first.');
        plan.Levels = plan.Levels.filter((l) => l.Depth !== depth);
      })
    ),

  previewShift: (planID: string, dto: PlanShiftDto): Promise<PlanScheduleChangeSetDto> =>
    delay(() => {
      const plan = findPlan(load(), planID);
      return changeSetDto(plan, planShift(plan, dto));
    }),

  shift: (planID: string, dto: PlanShiftDto, token?: string | null) =>
    delay(() => write(planID, token, () => PLAN, (plan) => applyDateChanges(plan, planShift(plan, dto)))),

  previewElementsShift: (planID: string, dto: PlanElementsShiftDto): Promise<PlanScheduleChangeSetDto> =>
    delay(() => {
      const plan = findPlan(load(), planID);
      return changeSetDto(plan, PlanScheduler.ShiftElements(toSchedule(plan), dto.PlanElementIDs ?? [], dto.Days ?? 0));
    }),

  shiftElements: (planID: string, dto: PlanElementsShiftDto, token?: string | null) =>
    delay(() =>
      write(planID, token, programsOf(...(dto.PlanElementIDs ?? [])), (plan) =>
        applyDateChanges(plan, PlanScheduler.ShiftElements(toSchedule(plan), dto.PlanElementIDs ?? [], dto.Days ?? 0))
      )
    ),

  // ── Drafts ──

  /** The Drafts list: the caller's named drafts first, then everyone else's. Scratch copies are never listed. */
  listDrafts: (planID: string): Promise<PlanDraftSimpleDto[]> =>
    delay(() => {
      const store = load();
      findPlan(store, planID);
      const me = currentUserName();
      const named = (store.drafts ?? []).filter((d) => d.PlanID === planID && d.Name !== null).sort((a, b) => b.UpdateDate.localeCompare(a.UpdateDate));
      return [...named.filter((d) => d.OwnerUserName === me), ...named.filter((d) => d.OwnerUserName !== me)].map(draftSimple);
    }),

  /** The caller's scratch copy of this plan, if they left one. */
  getScratchDraft: (planID: string): Promise<PlanDraftDto | null> =>
    delay(() => {
      const me = currentUserName();
      return (load().drafts ?? []).find((d) => d.PlanID === planID && d.Name === null && d.OwnerUserName === me) ?? null;
    }),

  getDraft: (planID: string, planDraftID: string): Promise<PlanDraftDto> => delay(() => findDraft(load(), planID, planDraftID)),

  /**
   * Creates or saves the caller's draft. Not a plan write: no version is sent or moved. A new scratch copy replaces the
   * caller's old one (one per planner per plan); naming a draft keeps it and shows it to other editors.
   */
  saveDraft: (planID: string, dto: { PlanDraftID?: string; Name: string | null; Overrides: PlanDraftOverrideDto[] }): Promise<PlanDraftDto> =>
    delay(() => {
      const store = load();
      findPlan(store, planID);
      const me = currentUserName();
      const stamp = now();
      const name = dto.Name === null ? null : dto.Name.trim();
      if (name !== null && !name) badRequest('Name', 'Give the draft a name.');
      store.drafts = store.drafts ?? [];
      let draft = dto.PlanDraftID ? ownDraft(store, planID, dto.PlanDraftID) : null;
      if (!draft) {
        if (name === null) store.drafts = store.drafts.filter((d) => !(d.PlanID === planID && d.Name === null && d.OwnerUserName === me));
        draft = { PlanDraftID: uuid(), PlanID: planID, OwnerUserName: me, Name: name, Overrides: [], CreateDate: stamp, UpdateDate: stamp };
        store.drafts.push(draft);
      }
      draft.Name = name;
      draft.Overrides = dto.Overrides.map((o) => ({ ...o }));
      draft.UpdateDate = stamp;
      save(store);
      return draft;
    }),

  deleteDraft: (planID: string, planDraftID: string): Promise<void> =>
    delay(() => {
      const store = load();
      ownDraft(store, planID, planDraftID);
      store.drafts = (store.drafts ?? []).filter((d) => d.PlanDraftID !== planDraftID);
      save(store);
    }),

  /**
   * The draft as the chart draws it, recomputed against the live plan as it is now. Writes nothing. Publish's summary
   * passes the stale elements the planner set to keep their live dates, so it shows what publishing would really do.
   */
  previewDraft: (planID: string, overrides: PlanDraftOverrideDto[], keepLivePlanElementIDs: string[] = [], links?: Record<string, number | null>, structure?: readonly DraftStructureOp[]): Promise<PlanDraftViewDto> =>
    delay(() => draftView(withDraft(findPlan(load(), planID), links, structure), overrides, new Set(keepLivePlanElementIDs))),

  /**
   * Publish: replays the draft on the live plan once more (keeping the live dates where the planner chose them), saves
   * the result through the checked path, and deletes the draft. Other people's work since the draft started is kept,
   * because only the elements whose dates the replay changes are written. A snapshot is taken first only when the
   * planner asked for one (open question 10: offered, not automatic).
   */
  publishDraft: (planID: string, planDraftID: string, dto: PlanDraftPublishDto, token?: string | null) =>
    delay(() => {
      const draft = ownDraft(load(), planID, planDraftID);
      const keepLive = new Set(dto.KeepLivePlanElementIDs ?? []);
      const ids = draft.Overrides.map((o) => o.PlanElementID);
      return write(
        planID,
        token,
        (plan) => programsOf(...ids.filter((id) => plan.Elements.some((e) => e.PlanElementID === id)))(plan),
        (plan, store) => {
          if (dto.SnapshotName?.trim()) {
            store.snapshots = store.snapshots ?? [];
            store.snapshots.push({
              PlanSnapshotID: uuid(),
              PlanID: planID,
              Name: dto.SnapshotName.trim(),
              CreateDate: now(),
              CreateUserName: currentUserName(),
              Plan: JSON.parse(JSON.stringify(plan)),
            });
          }
          const { work } = replayDraft(plan, draft.Overrides, keepLive);
          const touched: string[] = [];
          for (const e of work.Elements) {
            const live = plan.Elements.find((x) => x.PlanElementID === e.PlanElementID);
            if (!live || (sameDates(live, e.StartDate, e.EndDate) && live.PlanDateType === e.PlanDateType)) continue;
            live.StartDate = e.StartDate;
            live.EndDate = e.EndDate;
            live.PlanDateType = e.PlanDateType;
            live.UpdateDate = now();
            live.UpdateUserName = currentUserName();
            touched.push(e.PlanElementID);
          }
          store.drafts = (store.drafts ?? []).filter((d) => d.PlanDraftID !== planDraftID);
          return touched;
        }
      );
    }),

  // ── Presence (open question 8: who's editing, with nothing enforced) ──

  /** A drawer's check-in: on open, then with each status poll while its tab is visible. */
  checkIn: (planID: string, sessionID: string, programPlanElementID: string | null, subject: string): Promise<void> =>
    delay(() => {
      const store = load();
      livePresence(store, planID);
      store.presence = (store.presence ?? []).filter((p) => p.SessionID !== sessionID);
      store.presence.push({ PlanID: planID, UserName: currentUserName(), SessionID: sessionID, ProgramPlanElementID: programPlanElementID, Subject: subject, Seen: Date.now() });
      save(store);
    }),

  checkOut: (sessionID: string): Promise<void> =>
    delay(() => {
      const store = load();
      store.presence = (store.presence ?? []).filter((p) => p.SessionID !== sessionID);
      save(store);
    }),

  /** Everyone else with a drawer open on this plan, by program. */
  presence: (planID: string): Promise<PlanPresenceDto[]> =>
    delay(() => {
      const store = load();
      const plan = findPlan(store, planID);
      const me = currentUserName();
      return livePresence(store, planID)
        .filter((p) => p.UserName !== me)
        .map((p) => ({
          UserName: p.UserName,
          ProgramPlanElementID: p.ProgramPlanElementID,
          ProgramName: p.ProgramPlanElementID ? (plan.Elements.find((e) => e.PlanElementID === p.ProgramPlanElementID)?.PlanElementName ?? null) : null,
          Subject: p.Subject,
        }));
    }),
};

export type PlanApi = typeof planApi;
