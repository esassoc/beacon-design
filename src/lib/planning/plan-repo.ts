// The repo model for plans (new design, 2026-10-26, "plans as a git repo" prototype): a plan's history the way a repo
// keeps one, in words a planner already has.
//
//   repo          → the plan
//   main          → the Live plan: what everyone sees, and what reports read
//   commit        → a Version of the live plan (v1, v2, …), each with who, when and one line on what moved
//   branch        → a Draft: a private copy where dates are tried freely; every drop is one Revision in it
//   merge / PR    → Publish: review the draft against live in the Revisions screen, then publish it as the next version
//   tag / release → a named Version ("Submitted to CDFW")
//   revert        → Restore: a past version (or a draft revision) is brought back as a new one; history is never lost
//
// It sits on top of the replica's mock plan API (plan-server.ts, Jamie's drafts experiment) and keeps none of the
// scheduling: a draft's revisions are her override lists (PlanDraftOverrideDto[]), replayed on the live plan by her
// `previewDraft`, and Publish is her `saveDraft` + `publishDraft`. What this module adds is only the history — the
// versions as snapshots, the revisions as cumulative override lists, who and when — and the people, watchers and stars
// a repo page shows. APPROXIMATION: the history lives in this browser's localStorage beside her store.

import { dayNumber, isoOfDay } from './gantt-geometry';
import { PlanDateTypeEnum, type PlanDetailDto, type PlanElementDto } from './model';
import type { PlanDraftOverrideDto, PlanDraftViewDto } from './plan-draft-model';
import { planDraftWithEdits, type PlanDraftEdit } from './plan-draft';
import { PROJECT_ID, currentUserName, planApi, setPlanApiLatency } from './plan-server';

const REPO_KEY = 'bcn-plan-repo-v1';
const USER_KEY = 'bcn-planning-user';
const DAY_MS = 86_400_000;

// ── Types ──────────────────────────────────────────────────────────────────────────────────────────────────────────

/** One version of the live plan: a snapshot, and the line that says what it changed. */
export interface PlanVersion {
  number: number;
  author: string;
  at: string;
  message: string;
  /** How many elements this version moved, against the one before it. */
  changeCount: number;
  /** A release-style name, when someone gave it one ("Submitted to CDFW"). */
  label: string | null;
  /** Where it came from: the plan's creation, a published draft, or a restore. */
  /** Where it came from: the plan's creation, a published draft, a restore, or an exact edit made on Live. */
  source: 'created' | 'draft' | 'restore' | 'edit';
  draftName: string | null;
  plan: PlanDetailDto;
}

/** One revision of a draft: every drop is one. Its overrides are cumulative — the draft as it stood after that drop. */
export interface PlanRevision {
  id: string;
  author: string;
  at: string;
  message: string;
  overrides: PlanDraftOverrideDto[];
}

export interface PlanRepoDraft {
  id: string;
  planID: string;
  name: string;
  owner: string;
  createdAt: string;
  /** The live version the draft started from ("branched from v7"). */
  baseVersion: number;
  revisions: PlanRevision[];
}

export interface PlanRepo {
  planID: string;
  visibility: 'Project' | 'Private';
  watchers: string[];
  starredBy: string[];
  versions: PlanVersion[];
  drafts: PlanRepoDraft[];
}

interface RepoStore {
  repos: PlanRepo[];
}

/** What the Plans index shows for one plan. */
export interface PlanSummary {
  repo: PlanRepo;
  name: string;
  description: string;
  latest: PlanVersion;
  start: string | null;
  end: string | null;
  elementCount: number;
  contributors: string[];
  /** Programs and studies, for the row's miniature. */
  overview: { name: string; start: string; end: string; depth: number }[];
}

/** One element that differs between two states of a plan, as the Revisions screen lists it. */
export interface PlanChange {
  id: string;
  name: string;
  /** Its parents' names, outermost first. */
  path: string[];
  milestone: boolean;
  fromStart: string | null;
  fromEnd: string | null;
  toStart: string | null;
  toEnd: string | null;
  fromType: PlanDateTypeEnum | undefined;
  toType: PlanDateTypeEnum | undefined;
  /** Days the start moved; when only the end moved, days the end moved (and `endOnly`). */
  shiftDays: number;
  endOnly: boolean;
  /** Present in `to` only (added) or `from` only (removed). */
  status: 'moved' | 'added' | 'removed';
}

// ── Store ──────────────────────────────────────────────────────────────────────────────────────────────────────────

function load(): RepoStore {
  try {
    const raw = localStorage.getItem(REPO_KEY);
    if (raw) return JSON.parse(raw) as RepoStore;
  } catch {
    /* a blocked store starts empty */
  }
  return { repos: [] };
}

function save(store: RepoStore): void {
  try {
    localStorage.setItem(REPO_KEY, JSON.stringify(store));
  } catch {
    /* a full or blocked store keeps this tab's state only */
  }
}

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;
const uid = () => Math.random().toString(36).slice(2, 10);
const daysAgo = (days: number, hour = 10) => {
  const d = new Date(Date.now() - days * DAY_MS);
  d.setHours(hour, (days * 37) % 60, 0, 0);
  return d.toISOString();
};

function findRepo(store: RepoStore, planID: string): PlanRepo {
  const repo = store.repos.find((r) => r.planID === planID);
  if (!repo) throw new Error(`No history for plan ${planID}.`);
  return repo;
}

// ── People ─────────────────────────────────────────────────────────────────────────────────────────────────────────

/** The planners the sample history is written by. The viewer is whoever plan-server says (Andy, or ?user=). */
export const PLAN_PEOPLE = ['Jamie Quishenberry', 'Alex Rivera', 'Sam Okafor', 'Priya Natarajan', 'Andy Lovseth'] as const;

/** Runs `work` as `user` against the mock API (it reads the user from sessionStorage), then puts the viewer back. */
async function as<T>(user: string, work: () => Promise<T>): Promise<T> {
  let previous: string | null = null;
  try {
    previous = sessionStorage.getItem(USER_KEY);
    sessionStorage.setItem(USER_KEY, user);
  } catch {
    /* no sessionStorage: the work runs as the default user */
  }
  try {
    return await work();
  } finally {
    try {
      if (previous === null) sessionStorage.removeItem(USER_KEY);
      else sessionStorage.setItem(USER_KEY, previous);
    } catch {
      /* as above */
    }
  }
}

// ── Plan helpers ───────────────────────────────────────────────────────────────────────────────────────────────────

export function flattenPlan(elements: readonly PlanElementDto[] | null | undefined, path: string[] = [], out: { element: PlanElementDto; path: string[] }[] = []) {
  for (const element of elements ?? []) {
    out.push({ element, path });
    flattenPlan(element.Children, [...path, element.PlanElementName ?? ''], out);
  }
  return out;
}

const elementByName = (plan: PlanDetailDto, name: string) => flattenPlan(plan.Elements).find((x) => x.element.PlanElementName?.startsWith(name))?.element;

const shiftIso = (iso: string | null | undefined, days: number) => {
  const day = dayNumber(iso ?? null);
  return day === null ? null : isoOfDay(day + days);
};

/** The plan's first and last stored date. */
export function planSpan(plan: PlanDetailDto): { start: string | null; end: string | null } {
  const dates = flattenPlan(plan.Elements)
    .flatMap(({ element }) => [element.StartDate, element.EndDate, element.SpanStartDate, element.SpanEndDate])
    .filter((d): d is string => !!d)
    .sort();
  return { start: dates[0] ?? null, end: dates[dates.length - 1] ?? null };
}

/** Every element whose stored dates or date type differ between two states of a plan, in tree order. */
export function planCompare(from: PlanDetailDto, to: PlanDetailDto): PlanChange[] {
  const before = new Map(flattenPlan(from.Elements).map((x) => [x.element.PlanElementID, x]));
  const changes: PlanChange[] = [];
  const seen = new Set<string>();
  for (const { element, path } of flattenPlan(to.Elements)) {
    const id = element.PlanElementID ?? '';
    seen.add(id);
    const was = before.get(id)?.element;
    const base = {
      id,
      name: element.PlanElementName ?? '',
      path,
      milestone: !!element.IsMilestone,
      toStart: element.StartDate ?? null,
      toEnd: element.EndDate ?? null,
      toType: element.PlanDateType,
    };
    if (!was) {
      changes.push({ ...base, fromStart: null, fromEnd: null, fromType: undefined, shiftDays: 0, endOnly: false, status: 'added' });
      continue;
    }
    if (was.StartDate === element.StartDate && was.EndDate === element.EndDate && was.PlanDateType === element.PlanDateType) continue;
    const startShift = (dayNumber(element.StartDate ?? null) ?? 0) - (dayNumber(was.StartDate ?? null) ?? 0);
    const endShift = (dayNumber(element.EndDate ?? null) ?? 0) - (dayNumber(was.EndDate ?? null) ?? 0);
    changes.push({
      ...base,
      fromStart: was.StartDate ?? null,
      fromEnd: was.EndDate ?? null,
      fromType: was.PlanDateType,
      shiftDays: startShift !== 0 ? startShift : endShift,
      endOnly: startShift === 0 && endShift !== 0,
      status: 'moved',
    });
  }
  for (const [key, { element, path }] of before) {
    const id = key ?? '';
    if (seen.has(id)) continue;
    changes.push({
      id,
      name: element.PlanElementName ?? '',
      path,
      milestone: !!element.IsMilestone,
      fromStart: element.StartDate ?? null,
      fromEnd: element.EndDate ?? null,
      toStart: null,
      toEnd: null,
      fromType: element.PlanDateType,
      toType: undefined,
      shiftDays: 0,
      endOnly: false,
      status: 'removed',
    });
  }
  return changes;
}

/** "+3 wk", "−2 mo", "+5 d" — a minus sign, not a hyphen (Jamie's Change column). */
export function shiftText(days: number): string {
  const sign = days < 0 ? '−' : '+';
  const n = Math.abs(days);
  if (n >= 60) return `${sign}${Math.round(n / 30.44)} mo`;
  if (n >= 14) return `${sign}${Math.round(n / 7)} wk`;
  return `${sign}${n} d`;
}

/** "just now", "4 min ago", "3 hours ago", "yesterday", "5 days ago", "on Aug 2". */
export function timeAgo(iso: string, now: Date = new Date()): string {
  const ms = now.getTime() - new Date(iso).getTime();
  const minutes = Math.round(ms / 60_000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  const days = Math.round(hours / 24);
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days} days ago`;
  return `on ${new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
}

export const shortDate = (iso: string) => new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

/** "3 weeks later", "2 months earlier", "10 days later". */
export function shiftWords(days: number): string {
  const n = Math.abs(days);
  const dir = days < 0 ? 'earlier' : 'later';
  if (n >= 60) {
    const m = Math.round(n / 30.44);
    return `${m} ${m === 1 ? 'month' : 'months'} ${dir}`;
  }
  if (n >= 14) {
    const w = Math.round(n / 7);
    return `${w} weeks ${dir}`;
  }
  return `${n} ${n === 1 ? 'day' : 'days'} ${dir}`;
}

/**
 * One sentence for what an edit did, written the way a planner would say it (the check-in retired "1 change · 6
 * moved with it"): "Moved Acoustic tag procurement 3 weeks later, and the 5 items after it".
 */
export function revisionMessage(own: PlanChange[], cascaded: number): string {
  if (!own.length) return cascaded ? `${cascaded} ${cascaded === 1 ? 'item' : 'items'} moved` : 'No date changes';
  const first = own[0];
  const head =
    own.length > 1
      ? `Moved ${own.length} items ${shiftWords(first.shiftDays)}`
      : first.endOnly
        ? `${first.shiftDays > 0 ? 'Extended' : 'Shortened'} ${first.name} by ${shiftWords(first.shiftDays).replace(/ (later|earlier)$/, '')}`
        : `Moved ${first.name} ${shiftWords(first.shiftDays)}`;
  if (!cascaded) return head;
  return `${head}, and the ${cascaded === 1 ? 'item' : `${cascaded} items`} after ${own.length > 1 ? 'them' : 'it'}`;
}

// ── Seed ───────────────────────────────────────────────────────────────────────────────────────────────────────────

interface SeedEdit {
  by: string;
  daysAgo: number;
  name: string;
  days: number;
  /** Move the end only (a stretch). */
  endOnly?: boolean;
  label?: string;
  draftName?: string;
}

/** Tasks the sample holds as Scheduled (fixed dates). */
const FIXED_TASKS = ['Winter-freshet acoustic tagging', 'Receiver-site encroachment'];

/** The sample's published history: what the team did to it over three months. */
const FISH_HISTORY: SeedEdit[] = [
  { by: 'Jamie Quishenberry', daysAgo: 81, name: 'Detailed baseline study plan', days: 14, draftName: 'Baseline kickoff slip' },
  { by: 'Alex Rivera', daysAgo: 64, name: 'Acoustic tag & receiver procurement', days: 21, draftName: 'Vendor lead times' },
  { by: 'Sam Okafor', daysAgo: 50, name: 'Receiver-site encroachment', days: 30, endOnly: true, draftName: 'Encroachment permit review' },
  { by: 'Jamie Quishenberry', daysAgo: 33, name: 'Regional receiver network build-out', days: -14, label: 'Submitted to CDFW', draftName: 'CDFW submittal set' },
  { by: 'Priya Natarajan', daysAgo: 12, name: 'Winter-freshet acoustic tagging', days: 28, draftName: 'Freshet timing' },
  { by: 'Alex Rivera', daysAgo: 0.003, name: 'Fabricate & install acoustic receiv', days: 10 },
];

/** Open drafts on the sample: a scenario someone is still shaping, revision by revision. */
const FISH_DRAFTS: { name: string; owner: string; startedDaysAgo: number; edits: { daysAgo: number; name: string; days: number; endOnly?: boolean }[] }[] = [
  {
    name: 'Permit delay scenario',
    owner: 'Alex Rivera',
    startedDaysAgo: 4,
    edits: [
      { daysAgo: 4, name: 'Receiver-site encroachment', days: 45 },
      { daysAgo: 3, name: 'Regional receiver network build-out', days: 30 },
      { daysAgo: 2, name: 'Multi-year tag release & tracking', days: 60, endOnly: true },
      { daysAgo: 1, name: 'Through-Delta survival model fit', days: 21 },
    ],
  },
  {
    name: 'Tagging season re-sequence',
    owner: 'Sam Okafor',
    startedDaysAgo: 2,
    edits: [
      { daysAgo: 2, name: 'Winter-freshet acoustic tagging', days: -30 },
      { daysAgo: 1.2, name: 'Receiver retrieval & detection QA', days: -21 },
    ],
  },
];

/** The edit a seed step makes, read against the plan as it stands. */
function seedEdit(plan: PlanDetailDto, step: { name: string; days: number; endOnly?: boolean }): PlanDraftEdit | null {
  const element = elementByName(plan, step.name);
  if (!element?.StartDate || !element.EndDate) return null;
  return {
    PlanElementID: element.PlanElementID ?? '',
    StartDate: step.endOnly ? element.StartDate : shiftIso(element.StartDate, step.days),
    EndDate: shiftIso(element.EndDate, step.days),
    PlanDateType: element.PlanDateType ?? PlanDateTypeEnum.Estimated,
  };
}

async function publishOverrides(planID: string, overrides: PlanDraftOverrideDto[], user: string): Promise<PlanDetailDto> {
  return as(user, async () => {
    const live = await planApi.getPlan(planID);
    const draft = await planApi.saveDraft(planID, { Name: 'Publishing', Overrides: overrides });
    await planApi.publishDraft(planID, draft.PlanDraftID, { KeepLivePlanElementIDs: [] }, live.VersionToken);
    return planApi.getPlan(planID);
  });
}

async function seedFisheries(store: RepoStore): Promise<void> {
  const created = await as('Jamie Quishenberry', () => planApi.createSample(PROJECT_ID));
  const planID = created.PlanID ?? '';
  const renamed = await as('Jamie Quishenberry', () =>
    planApi.updatePlan(planID, { PlanName: 'Fisheries Evaluation Studies', Description: created.Description }, created.VersionToken)
  );
  let live = renamed ?? (await planApi.getPlan(planID));
  // Two tasks whose dates are fixed from outside the plan, so Scheduled shows up in the sample: the tagging season is
  // set by the winter-freshet run, the encroachment permits by the agency's review window.
  for (const name of FIXED_TASKS) {
    const element = elementByName(live, name);
    if (!element?.PlanElementID) continue;
    await as('Jamie Quishenberry', () =>
      planApi.updateElement(
        planID,
        element.PlanElementID!,
        {
          PlanElementName: element.PlanElementName,
          LevelDepth: element.LevelDepth,
          StartDate: element.StartDate ?? undefined,
          EndDate: element.EndDate ?? undefined,
          PlanDateType: PlanDateTypeEnum.Scheduled,
          IsMilestone: element.IsMilestone,
          Budget: (element as { Budget?: number | null }).Budget ?? null,
          Notes: (element as { Notes?: string | null }).Notes ?? null,
        },
        live.VersionToken
      )
    );
    live = await planApi.getPlan(planID);
  }
  const repo: PlanRepo = {
    planID,
    visibility: 'Project',
    watchers: ['Jamie Quishenberry', 'Alex Rivera', 'Sam Okafor', 'Priya Natarajan', 'Andy Lovseth', 'Dana Whitfield'],
    starredBy: ['Jamie Quishenberry', 'Andy Lovseth'],
    versions: [
      { number: 1, author: 'Jamie Quishenberry', at: daysAgo(92), message: 'Created the plan from the 2026 study outline', changeCount: 0, label: 'Baseline', source: 'created', draftName: null, plan: clone(live) },
    ],
    drafts: [],
  };
  for (const step of FISH_HISTORY) {
    const edit = seedEdit(live, step);
    if (!edit) continue;
    const overrides = planDraftWithEdits([], [edit], live, true);
    const next = await publishOverrides(planID, overrides, step.by);
    const changes = planCompare(live, next);
    const own = changes.filter((c) => c.id === edit.PlanElementID);
    repo.versions.push({
      number: repo.versions.length + 1,
      author: step.by,
      at: step.daysAgo < 0.01 ? new Date(Date.now() - 4 * 60_000).toISOString() : daysAgo(step.daysAgo),
      message: revisionMessage(own, changes.length - own.length),
      changeCount: changes.length,
      label: step.label ?? null,
      source: 'draft',
      draftName: step.draftName ?? null,
      plan: clone(next),
    });
    live = next;
  }
  for (const seed of FISH_DRAFTS) {
    const draft: PlanRepoDraft = {
      id: uid(),
      planID,
      name: seed.name,
      owner: seed.owner,
      createdAt: daysAgo(seed.startedDaysAgo, 9),
      baseVersion: repo.versions.length,
      revisions: [],
    };
    let overrides: PlanDraftOverrideDto[] = [];
    let shown = live;
    for (const step of seed.edits) {
      const edit = seedEdit(shown, step);
      if (!edit) continue;
      const before = shown;
      overrides = planDraftWithEdits(overrides, [edit], live, true);
      shown = (await planApi.previewDraft(planID, overrides)).Plan;
      const changes = planCompare(before, shown);
      const own = changes.filter((c) => c.id === edit.PlanElementID);
      draft.revisions.push({ id: uid(), author: seed.owner, at: daysAgo(step.daysAgo, 14), message: revisionMessage(own, changes.length - own.length), overrides: clone(overrides) });
    }
    repo.drafts.push(draft);
  }
  store.repos.push(repo);
}

/** A second and third plan for the index, lighter: the sample renamed and shifted, with a short history. */
async function seedVariant(store: RepoStore, name: string, description: string, shiftDays: number, owner: string, ageDays: number, draftName: string | null): Promise<void> {
  const created = await as(owner, () => planApi.createSample(PROJECT_ID));
  const planID = created.PlanID ?? '';
  await as(owner, () => planApi.updatePlan(planID, { PlanName: name, Description: description }, created.VersionToken));
  let live = await planApi.getPlan(planID);
  if (shiftDays) {
    await as(owner, () => planApi.shift(planID, { Days: shiftDays }, live.VersionToken));
    live = await planApi.getPlan(planID);
  }
  const repo: PlanRepo = {
    planID,
    visibility: 'Project',
    watchers: [owner, 'Andy Lovseth'],
    starredBy: [],
    versions: [{ number: 1, author: owner, at: daysAgo(ageDays), message: 'Created the plan', changeCount: 0, label: null, source: 'created', draftName: null, plan: clone(live) }],
    drafts: [],
  };
  if (draftName) {
    const edit = seedEdit(live, { name: 'Acoustic tag & receiver procurement', days: 35 });
    if (edit) {
      const overrides = planDraftWithEdits([], [edit], live, true);
      const shown = (await planApi.previewDraft(planID, overrides)).Plan;
      const changes = planCompare(live, shown);
      const own = changes.filter((c) => c.id === edit.PlanElementID);
      repo.drafts.push({
        id: uid(),
        planID,
        name: draftName,
        owner,
        createdAt: daysAgo(6),
        baseVersion: 1,
        revisions: [{ id: uid(), author: owner, at: daysAgo(6, 15), message: revisionMessage(own, changes.length - own.length), overrides }],
      });
    }
  }
  store.repos.push(repo);
}

/** First visit: three plans with a believable history. Later visits: drops plans the mock API no longer has. */
export async function ensureSeeded(onProgress?: (text: string) => void): Promise<void> {
  const store = load();
  const plans = await planApi.listPlans(PROJECT_ID);
  const known = new Set(plans.map((p) => p.PlanID));
  store.repos = store.repos.filter((r) => known.has(r.planID));
  if (store.repos.length) {
    save(store);
    return;
  }
  onProgress?.('Setting up three sample plans with three months of history…');
  setPlanApiLatency(0);
  try {
    await seedFisheries(store);
    await seedVariant(store, 'Habitat Restoration Monitoring', 'Monitoring for the tidal habitat restoration sites: baseline surveys, construction monitoring and five years of post-construction performance.', 210, 'Priya Natarajan', 40, null);
    await seedVariant(store, 'Geotechnical Investigations', 'Borings, CPTs and lab testing along the tunnel alignment, sequenced around the permit windows.', -150, 'Sam Okafor', 18, 'Reach 3 access change');
  } finally {
    setPlanApiLatency(220);
  }
  save(store);
}

/** Starts the history over: the mock API's plans and this module's store are cleared, and the seed runs again. */
export async function resetSample(): Promise<void> {
  const plans = await planApi.listPlans(PROJECT_ID);
  for (const plan of plans) await planApi.deletePlan(plan.PlanID ?? '').catch(() => undefined);
  save({ repos: [] });
}

// ── Reads ──────────────────────────────────────────────────────────────────────────────────────────────────────────

export function getRepo(planID: string): PlanRepo {
  return findRepo(load(), planID);
}

export function latestVersion(repo: PlanRepo): PlanVersion {
  return repo.versions[repo.versions.length - 1];
}

export function contributorsOf(repo: PlanRepo): string[] {
  const all = [...repo.versions.map((v) => v.author), ...repo.drafts.flatMap((d) => d.revisions.map((r) => r.author))];
  return [...new Set(all.reverse())];
}

export async function listPlanSummaries(): Promise<PlanSummary[]> {
  const store = load();
  const summaries: PlanSummary[] = [];
  for (const repo of store.repos) {
    const latest = latestVersion(repo);
    const plan = latest.plan;
    const span = planSpan(plan);
    const flat = flattenPlan(plan.Elements);
    summaries.push({
      repo,
      name: plan.PlanName ?? '',
      description: plan.Description ?? '',
      latest,
      start: span.start,
      end: span.end,
      elementCount: flat.length,
      contributors: contributorsOf(repo),
      overview: flat
        .filter(({ element }) => (element.Children?.length ?? 0) > 0 && (element.SpanStartDate || element.StartDate))
        .map(({ element, path }) => ({
          name: element.PlanElementName ?? '',
          start: (element.SpanStartDate ?? element.StartDate)!,
          end: (element.SpanEndDate ?? element.EndDate)!,
          depth: path.length,
        })),
    });
  }
  return summaries.sort((a, b) => b.latest.at.localeCompare(a.latest.at));
}

/** A draft as it stood after revision `index` (0 = nothing yet: the live plan). */
export async function draftState(draft: PlanRepoDraft, index: number = draft.revisions.length): Promise<PlanDraftViewDto> {
  const overrides = index <= 0 ? [] : draft.revisions[index - 1].overrides;
  return planApi.previewDraft(draft.planID, overrides);
}

// ── Writes ─────────────────────────────────────────────────────────────────────────────────────────────────────────

/** The viewer's draft of this plan, if they have one. One per person per plan (the 2026-10-26 check-in: "you get one branch at a time"). */
export function myDraft(planID: string): PlanRepoDraft | null {
  const me = currentUserName();
  return getRepo(planID).drafts.find((d) => d.owner === me) ?? null;
}

/**
 * The viewer's draft, started from the latest version if they have none. One per person per plan: asking again
 * returns the one they have. `from` copies another person's draft into it (theirs is untouched).
 */
export function startDraft(planID: string, from?: PlanRepoDraft): PlanRepoDraft {
  const store = load();
  const repo = findRepo(store, planID);
  const me = currentUserName();
  const existing = repo.drafts.find((d) => d.owner === me);
  if (existing && !from) return existing;
  const stamp = new Date();
  const draft: PlanRepoDraft = {
    id: existing?.id ?? uid(),
    planID,
    name: from ? `Copy of ${from.name}` : `${me.split(' ')[0]}'s draft`,
    owner: me,
    createdAt: stamp.toISOString(),
    baseVersion: latestVersion(repo).number,
    revisions: from
      ? [{ id: uid(), author: me, at: stamp.toISOString(), message: `Copied ${from.owner.split(' ')[0]}'s draft "${from.name}"`, overrides: clone(from.revisions[from.revisions.length - 1]?.overrides ?? []) }]
      : [],
  };
  repo.drafts = [...repo.drafts.filter((d) => d.owner !== me), draft];
  save(store);
  return draft;
}

/** Undo in a draft: its last revision goes (a draft is a scratchpad; published versions are the record). */
export function dropLastRevision(planID: string, draftID: string): PlanRevision | null {
  const store = load();
  const draft = findRepo(store, planID).drafts.find((d) => d.id === draftID);
  const dropped = draft?.revisions.pop() ?? null;
  save(store);
  return dropped;
}

/** Redo: a dropped revision comes back. */
export function restoreRevision(planID: string, draftID: string, revision: PlanRevision): void {
  const store = load();
  const draft = findRepo(store, planID).drafts.find((d) => d.id === draftID);
  if (!draft) return;
  draft.revisions.push(revision);
  save(store);
}

/** How far behind live a draft is: versions published since it started. */
export function versionsBehind(repo: PlanRepo, draft: PlanRepoDraft): number {
  return latestVersion(repo).number - draft.baseVersion;
}

export function renameDraft(planID: string, draftID: string, name: string): void {
  const store = load();
  const draft = findRepo(store, planID).drafts.find((d) => d.id === draftID);
  if (!draft || !name.trim()) return;
  draft.name = name.trim();
  save(store);
}

/** One drop in a draft: the draft's new overrides, as its next revision. */
export function addRevision(planID: string, draftID: string, overrides: PlanDraftOverrideDto[], message: string): PlanRevision {
  const store = load();
  const draft = findRepo(store, planID).drafts.find((d) => d.id === draftID);
  if (!draft) throw new Error('That draft is gone.');
  const revision: PlanRevision = { id: uid(), author: currentUserName(), at: new Date().toISOString(), message, overrides: clone(overrides) };
  draft.revisions.push(revision);
  save(store);
  return revision;
}

export function discardDraft(planID: string, draftID: string): void {
  const store = load();
  const repo = findRepo(store, planID);
  repo.drafts = repo.drafts.filter((d) => d.id !== draftID);
  save(store);
}

/**
 * Publish: the draft as it stood at `revisionIndex` (its latest by default — WordPress lets you restore any revision,
 * so here any revision can be the one published) becomes the next live version. The draft is closed.
 */
export async function publishDraft(planID: string, draftID: string, revisionIndex?: number, label?: string): Promise<PlanVersion> {
  const before = load();
  const repo = findRepo(before, planID);
  const draft = repo.drafts.find((d) => d.id === draftID);
  if (!draft) throw new Error('That draft is gone.');
  const index = revisionIndex ?? draft.revisions.length;
  const overrides = index > 0 ? draft.revisions[index - 1].overrides : [];
  const live = latestVersion(repo).plan;
  const next = await publishOverrides(planID, overrides, currentUserName());
  const changes = planCompare(live, next);
  const ownIDs = new Set(overrides.map((o) => o.PlanElementID));
  const own = changes.filter((c) => ownIDs.has(c.id));
  const store = load();
  const fresh = findRepo(store, planID);
  const version: PlanVersion = {
    number: latestVersion(fresh).number + 1,
    author: currentUserName(),
    at: new Date().toISOString(),
    message: own.length <= 1 ? revisionMessage(own, changes.length - own.length) : `Published ${draft.name}: ${changes.length} items on new dates`,
    changeCount: changes.length,
    label: label?.trim() || null,
    source: 'draft',
    draftName: draft.name,
    plan: clone(next),
  };
  fresh.versions.push(version);
  fresh.drafts = fresh.drafts.filter((d) => d.id !== draftID);
  save(store);
  return version;
}

/** Restore: a past version's dates are published again, as a new version on top. Nothing is erased. */
export async function restoreVersion(planID: string, number: number): Promise<PlanVersion> {
  const repo = getRepo(planID);
  const target = repo.versions.find((v) => v.number === number);
  if (!target) throw new Error(`No version ${number}.`);
  const live = latestVersion(repo).plan;
  const liveByID = new Map(flattenPlan(live.Elements).map((x) => [x.element.PlanElementID, x.element]));
  const overrides: PlanDraftOverrideDto[] = [];
  for (const { element } of flattenPlan(target.plan.Elements)) {
    const now = liveByID.get(element.PlanElementID);
    if (!now || (now.StartDate === element.StartDate && now.EndDate === element.EndDate && now.PlanDateType === element.PlanDateType)) continue;
    overrides.push({
      PlanElementID: element.PlanElementID ?? '',
      LoadedStartDate: now.StartDate ?? null,
      LoadedEndDate: now.EndDate ?? null,
      LoadedPlanDateType: now.PlanDateType ?? PlanDateTypeEnum.Estimated,
      StartDate: element.StartDate ?? null,
      EndDate: element.EndDate ?? null,
      PlanDateType: element.PlanDateType ?? PlanDateTypeEnum.Estimated,
      // A restore sets each date exactly as it was; nothing cascades.
      Cascade: false,
    });
  }
  const next = await publishOverrides(planID, overrides, currentUserName());
  const store = load();
  const fresh = findRepo(store, planID);
  const version: PlanVersion = {
    number: latestVersion(fresh).number + 1,
    author: currentUserName(),
    at: new Date().toISOString(),
    message: `Restored Revision ${number}${target.label ? ` (${target.label})` : ''}`,
    changeCount: planCompare(live, next).length,
    label: null,
    source: 'restore',
    draftName: null,
    plan: clone(next),
  };
  fresh.versions.push(version);
  save(store);
  return version;
}

/**
 * An exact edit made straight on Live (a dependency unlinked, a lag changed: the drawer's kind of change, which Jamie's
 * split keeps out of drafts) becomes the next revision, with its sentence.
 */
export async function recordLiveEdit(planID: string, message: string): Promise<PlanVersion> {
  const plan = await planApi.getPlan(planID);
  const store = load();
  const repo = findRepo(store, planID);
  const before = latestVersion(repo).plan;
  const version: PlanVersion = {
    number: latestVersion(repo).number + 1,
    author: currentUserName(),
    at: new Date().toISOString(),
    message,
    changeCount: planCompare(before, plan).length,
    label: null,
    source: 'edit',
    draftName: null,
    plan: clone(plan),
  };
  repo.versions.push(version);
  save(store);
  return version;
}

export function toggleWatch(planID: string): boolean {
  const store = load();
  const repo = findRepo(store, planID);
  const me = currentUserName();
  const on = !repo.watchers.includes(me);
  repo.watchers = on ? [...repo.watchers, me] : repo.watchers.filter((w) => w !== me);
  save(store);
  return on;
}

export function toggleStar(planID: string): boolean {
  const store = load();
  const repo = findRepo(store, planID);
  const me = currentUserName();
  const on = !repo.starredBy.includes(me);
  repo.starredBy = on ? [...repo.starredBy, me] : repo.starredBy.filter((w) => w !== me);
  save(store);
  return on;
}

export { currentUserName };
