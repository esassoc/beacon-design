// A stand-in for Beacon's PlanController (Beacon.API/Controllers/Planning/PlanController.cs on origin/develop), so the
// replica's pages call the same operations and get the same answers: every write returns the whole PlanDetailDto, a
// stale version is refused with a 409 naming who changed the plan, previews write nothing, and confirms recompute the
// change set with the same scheduler (plan-scheduler.ts) rather than trusting the client.
//
// APPROXIMATION: the store is this browser's localStorage, so "someone else" is another tab of the same browser. Each
// call reads the store fresh, which is what makes a second tab's edit show up in the first on its next status poll.
// The calling user is "Andy Lovseth" unless the page URL carries ?user=Name (the second tab's identity).

import { SAMPLE_PLAN, type SampleElement } from '../../data/sample-plan';
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
import { MAX_DEPTH, PlanLinkValidationResult, PlanSchedule, PlanScheduler, toDay, toIso, type PlanScheduleChangeSet, type PlanScheduleNode } from './plan-scheduler';

const STORE_KEY = 'bcn-planning-store-v1';
const LATENCY_MS = 220;
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

interface Store {
  plans: StoredPlan[];
}

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
    if (raw) return JSON.parse(raw) as Store;
  } catch {
    /* a blocked store starts empty */
  }
  return { plans: [] };
}

function save(store: Store): void {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  } catch {
    /* in-memory only for this call */
  }
}

const uuid = () => (crypto.randomUUID ? crypto.randomUUID() : `id-${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`);
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

function stageSample(projectID: string): StoredPlan {
  const user = currentUserName();
  const stamp = now();
  const plan: StoredPlan = {
    PlanID: uuid(),
    ProjectID: projectID,
    PlanName: SAMPLE_PLAN.name,
    Description: SAMPLE_PLAN.description,
    Levels: SAMPLE_PLAN.levels.map((l, i) => ({ Depth: i + 1, ...l })),
    Elements: [],
    Dependencies: [],
    Landmarks: SAMPLE_PLAN.landmarks.map((l, i) => ({ PlanLandmarkID: uuid(), PlanLandmarkName: l.name, LandmarkDate: l.date, SortOrder: i + 1 })),
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
        UpdateDate: stamp,
        UpdateUserName: user,
        Version: 1,
      });
      stage(node.children, id, depth + 1);
    });
  stage(SAMPLE_PLAN.elements, null, 1);
  for (const [from, to, lag] of SAMPLE_PLAN.dependencies) {
    plan.Dependencies.push({ PlanElementDependencyID: uuid(), PredecessorPlanElementID: byName.get(from)!, SuccessorPlanElementID: byName.get(to)!, LagDays: lag });
  }
  return plan;
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

  createSample: (projectID: string): Promise<PlanDetailDto> =>
    delay(() => {
      const store = load();
      const plan = stageSample(projectID);
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

  predecessorCandidates: (planID: string, successorPlanElementID: string): Promise<PlanLinkCandidateDto[]> =>
    delay(() => {
      const plan = findPlan(load(), planID);
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
};

export type PlanApi = typeof planApi;
