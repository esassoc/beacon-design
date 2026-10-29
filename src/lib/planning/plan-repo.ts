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
import { PlanDateTypeEnum, type PlanDetailDto, type PlanElementDto, type PlanLevelCreateDto } from './model';
import type { PlanDraftOverrideDto, PlanDraftViewDto } from './plan-draft-model';
import { planDraftWithEdits, type PlanDraftEdit } from './plan-draft';
import { PROJECT_ID, currentUserName, planApi, setPlanApiLatency, type DraftStructureOp } from './plan-server';
import { TEMPLATES, clonePlanConfig, type PlanConfig } from './plan-config';
import { clearPlanRecords, seedPlanRecords } from './plan-records';
import { seeding, seedShortId } from './seed-ids';
import type { SampleKey } from '../../data/sample-plan';

const REPO_KEY = 'bcn-plan-repo-v1';
const USER_KEY = 'bcn-planning-user';
const DAY_MS = 86_400_000;

// ── Types ──────────────────────────────────────────────────────────────────────────────────────────────────────────

/**
 * What a change did, as data (2026-10-28, Andy: "Moved", the item and "+10 days" read as one casual sentence; each is
 * its own element). The page draws each part as its own token (plan-change-note.ts); `message` keeps the plain form
 * for titles and tooltips.
 */
export interface PlanChangeNote {
  /** A closed set, in Title Case: Moved, End Moved, Published, Restored, Unlinked, Lag Set, Created, Copied, No Change. */
  action: string;
  /** What it acted on: an element, a draft, a revision, "3 Items". */
  subject?: string;
  /** A second thing it names: the other end of a dependency, the revision a draft became. */
  object?: string;
  /** The signed shift ("+10 days", "−3 weeks") or a lag ("5 days"). */
  shift?: string;
  /** Items that moved with it. */
  others?: number;
}

/** A note as one plain line, for titles and tooltips: "Moved: Fabricate & install... +10 days, 2 Followed". */
export function noteText(note: PlanChangeNote): string {
  const what = [note.subject, note.object].filter(Boolean).join(' \u2192 ');
  const tail = [note.shift, note.others ? `${note.others} Followed` : ''].filter(Boolean).join(', ');
  return `${note.action}${what ? `: ${what}` : ''}${tail ? `, ${tail}` : ''}`;
}

/** One version of the live plan: a snapshot, and the line that says what it changed. */
export interface PlanVersion {
  number: number;
  author: string;
  at: string;
  message: string;
  note?: PlanChangeNote;
  /** The plan's budget by fiscal year as of this revision; absent, the last one before it that carries one. */
  budget?: PlanBudget;
  /** Elements' planning attributes as of this revision (owners, deliverable, field values); absent, as budget. */
  attributes?: PlanAttributes;
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
  note?: PlanChangeNote;
  overrides: PlanDraftOverrideDto[];
  /** Edits to elements' own fields, cumulative like the overrides (2026-10-28: a draft edits more than dates). */
  fields?: Record<string, PlanFieldEdit>;
  /** Budget cells the draft changed, cumulative, over Live's budget (2026-10-28, the Budget view). */
  budget?: PlanBudget;
  /** Attributes the draft changed, cumulative, over Live's (2026-10-28, the element page). */
  attributes?: PlanAttributes;
  /** Dependencies the draft changed, cumulative, by id: the new lag in days, or null when unlinked (2026-10-28, draft
   *  first: a link's edit is drafted like a date's). */
  links?: PlanLinkEdits;
  /** Adds, removes, moves, reorders and new links, in order, cumulative (2026-10-28, draft first: building a plan's
   *  outline is drafted too). A new item's id is a temporary one until it's published. */
  structure?: DraftStructureOp[];
}

/** A draft's dependency edits: id to new lag, or null for removed. */
export type PlanLinkEdits = Record<string, number | null>;

/** An element's own fields as a draft changes them, beyond its dates. */
export interface PlanFieldEdit {
  PlanElementName?: string;
  LevelDepth?: number;
  IsMilestone?: boolean;
  Notes?: string | null;
}

/** Budget by fiscal year for the elements that carry work (parents roll up): element id → fiscal year → dollars. */
export type PlanBudget = Record<string, Record<string, number>>;

export interface PlanRepoDraft {
  id: string;
  planID: string;
  name: string;
  owner: string;
  createdAt: string;
  /** The live version the draft started from ("branched from v7"). */
  baseVersion: number;
  revisions: PlanRevision[];
  /** When its owner, who can't publish, asked someone who can (the draft study, 2026-10-27: "Ask to publish"). */
  publishRequestedAt?: string;
  /** Sent back by someone who can publish, with what to change (2026-10-29, the traps audit: Ask to Publish had no way
   *  back). Cleared by the next Ask to Publish. */
  sentBack?: { by: string; at: string; note: string };
  /** An element page's Edit, under review (2026-10-28, Andy: "a form modal ... and then a republish review"): one
   *  edit to one item, published or thrown away when its review closes. Not the person's draft. */
  transient?: boolean;
}

export interface PlanRepo {
  planID: string;
  visibility: 'Project' | 'Private';
  watchers: string[];
  starredBy: string[];
  versions: PlanVersion[];
  drafts: PlanRepoDraft[];
  /** Word left for someone about their draft (2026-10-28): it was published by someone else. Read on their next visit. */
  notices?: PlanNotice[];
  /** What the plan tracks (2026-10-28, Andy: "some plans may or may not need schedule AND budget"). Absent: both. */
  views?: PlanView[];
  /** Who works on it and what they may do (2026-10-28). Absent: its creator as Owner, everyone who has written to it
   *  as an Editor. Settings, like a repo's, not revisions: changing them makes no revision. */
  members?: PlanMember[];
  /** Fields and page layouts per level, and the modules' lists (2026-10-28, decisions 1 to 8). Absent: Study Program. */
  config?: PlanConfig;
  /** The span the plan is planned to run (2026-10-28, the build-from-scratch review): the chart's window before any
   *  item has dates, and the yardstick About reads the items' span against. Settings, not revisions. */
  window?: PlanWindow;
}

/** A plan's planned start and end, each optional (ISO dates). */
export interface PlanWindow {
  start: string | null;
  end: string | null;
}

/** An element's planning attributes beyond its dates (2026-10-28): its owners, whether it's a deliverable, and the
 *  plan's custom field values. Drafted like dates and budget (decision 5: plans are drafted, records are not). */
export interface ElementAttributes {
  owners?: string[];
  deliverable?: boolean;
  values?: Record<string, FieldValue>;
}
export type FieldValue = string | number | boolean | string[] | null;
/** Element id to its attributes. */
export type PlanAttributes = Record<string, ElementAttributes>;

export type PlanView = 'schedule' | 'budget';
/** Owners and Editors publish to Live; Contributors draft and ask to publish; an Owner also changes the settings. A
 *  Guest (an agency reviewer, decision 2) sees only the transmittals sent to them. */
export type PlanRole = 'Owner' | 'Editor' | 'Contributor' | 'Guest';
export interface PlanMember {
  name: string;
  role: PlanRole;
}

/** "Priya published your draft Permit delay scenario as Revision 9." */
export interface PlanNotice {
  id: string;
  /** Who it's for: the draft's owner. */
  to: string;
  by: string;
  at: string;
  version: number;
  draftName: string;
}

interface RepoStore {
  repos: PlanRepo[];
  /** The seed's shape; a store from an older one starts over (see SEED_FORMAT). */
  format?: number;
}

/** Bumped when the seed's shape changes (2: the fixed grammar; 3: change notes as data; 4: budget by fiscal year;
 *  5: views and people, which a format-4 store takes on without starting over; 6: element attributes, records and two
 *  early deliverables, a full start over; 7: the Lineage module in the layouts and units on number fields). */
const SEED_FORMAT = 11;

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

const clone = <T>(value: T): T => (value === undefined ? value : (JSON.parse(JSON.stringify(value)) as T));
/** Deterministic while the sample seeds (./seed-ids.ts). */
const uid = seedShortId;
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

/** The people a plan's settings can add: the sample's planners and a few more of the project's staff. */
export const PLAN_DIRECTORY = [...PLAN_PEOPLE, 'Dana Whitfield', 'Morgan Ellis', 'Chris Tanaka', 'Ravi Shah', 'Jordan Reyes', 'Casey Lin', 'Rowan Hale', 'Avery Nguyen'] as const;
/** Each person's organization: ESA's planners, DWR's manager, the agencies' reviewers (fictional, for the sample). */
export const PERSON_ORG: Record<string, string> = {
  'Jamie Quishenberry': 'ESA',
  'Alex Rivera': 'ESA',
  'Sam Okafor': 'ESA',
  'Priya Natarajan': 'ESA',
  'Andy Lovseth': 'ESA',
  'Dana Whitfield': 'ESA',
  'Chris Tanaka': 'ESA',
  'Ravi Shah': 'ESA',
  'Morgan Ellis': 'DWR',
  'Jordan Reyes': 'CDFW',
  'Casey Lin': 'CDFW',
  'Rowan Hale': 'NMFS',
  'Avery Nguyen': 'USFWS',
};
export const orgOf = (name: string) => PERSON_ORG[name] ?? '';

/**
 * The organizations a plan can name as owners in their own right (2026-10-28, the SOW review: "one or more owners or
 * leads (individuals and organizations)"): the firms and agencies the project works with, by short name.
 */
export const PLAN_ORGANIZATIONS: Record<string, string> = {
  ESA: 'Environmental Science Associates',
  DWR: 'California Department of Water Resources',
  CDFW: 'California Department of Fish and Wildlife',
  NMFS: 'NOAA Fisheries',
  USFWS: 'U.S. Fish and Wildlife Service',
  USACE: 'U.S. Army Corps of Engineers',
  CSLC: 'California State Lands Commission',
};
export const isOrganization = (name: string) => name in PLAN_ORGANIZATIONS;
/** An owner as a picker or a card names them: "Alex Rivera (ESA)", or "CDFW (Organization)". */
export const ownerLabel = (name: string) => (isOrganization(name) ? `${name} (Organization)` : orgOf(name) ? `${name} (${orgOf(name)})` : name);
/** An owner's muted aside: a person's organization, or an organization's full name. */
export const ownerAside = (name: string) => (isOrganization(name) ? PLAN_ORGANIZATIONS[name] : orgOf(name));

// ── Plan helpers ───────────────────────────────────────────────────────────────────────────────────────────────────

export function flattenPlan(elements: readonly PlanElementDto[] | null | undefined, path: string[] = [], out: { element: PlanElementDto; path: string[] }[] = []) {
  for (const element of elements ?? []) {
    out.push({ element, path });
    flattenPlan(element.Children, [...path, element.PlanElementName ?? ''], out);
  }
  return out;
}

// ── Budget by fiscal year (2026-10-28, Andy: "you need to run your budgeting not as one lump sum but by fiscal year") ──

/** California's fiscal year runs July 1 to June 30, named here by the year it starts in: 2026 is FY 2026–27. */
export function fiscalYearOf(iso: string): number {
  const [year, month] = iso.slice(0, 7).split('-').map(Number);
  return month >= 7 ? year : year - 1;
}
export const fiscalYearLabel = (fy: number) => `FY ${fy}\u2013${String((fy + 1) % 100).padStart(2, '0')}`;
export const fiscalYearSpan = (fy: number) => `Jul 1, ${fy} \u2013 Jun 30, ${fy + 1}`;

/** The seed's start: each element's one budget figure spread over the fiscal years it runs in, by days, to $1,000. */
export function spreadBudget(plan: PlanDetailDto): PlanBudget {
  const out: PlanBudget = {};
  for (const { element } of flattenPlan(plan.Elements)) {
    if (element.Children?.length || element.IsMilestone || !element.Budget || !element.StartDate || !element.EndDate) continue;
    const start = Date.parse(element.StartDate);
    const end = Date.parse(element.EndDate) + DAY_MS;
    if (end <= start) continue;
    const first = fiscalYearOf(element.StartDate);
    const last = fiscalYearOf(element.EndDate);
    const row: Record<string, number> = {};
    let left = element.Budget;
    for (let fy = first; fy <= last; fy++) {
      const from = Math.max(start, Date.UTC(fy, 6, 1));
      const to = Math.min(end, Date.UTC(fy + 1, 6, 1));
      const share = fy === last ? left : Math.round((element.Budget * (to - from)) / (end - start) / 1000) * 1000;
      row[String(fy)] = share;
      left -= share;
    }
    out[element.PlanElementID ?? ''] = row;
  }
  return out;
}

/** Cells laid over a budget: the draft's changes over Live's. */
export function mergeBudget(base: PlanBudget, cells?: PlanBudget): PlanBudget {
  const out: PlanBudget = {};
  for (const [id, row] of Object.entries(base)) out[id] = { ...row };
  for (const [id, row] of Object.entries(cells ?? {})) out[id] = { ...(out[id] ?? {}), ...row };
  return out;
}

/** The budget as of a revision: the last one at or before it that carries one; before any, the seed's spread. */
export function budgetAt(repo: PlanRepo, number: number = latestVersion(repo).number): PlanBudget {
  for (let i = repo.versions.length - 1; i >= 0; i--) {
    const v = repo.versions[i];
    if (v.number <= number && v.budget) return v.budget;
  }
  return spreadBudget(repo.versions[0].plan);
}

/** Attributes laid over attributes: per element, the later wins field by field, and values merge. */
export function mergeAttributes(base: PlanAttributes, over?: PlanAttributes): PlanAttributes {
  const out: PlanAttributes = {};
  for (const [id, a] of Object.entries(base)) out[id] = { ...a, values: { ...(a.values ?? {}) } };
  for (const [id, a] of Object.entries(over ?? {})) {
    const was = out[id] ?? {};
    out[id] = { ...was, ...a, values: { ...(was.values ?? {}), ...(a.values ?? {}) } };
  }
  return out;
}
/** The attributes as of a revision: the last one at or before it that carries them; before any, none. */
export function attributesAt(repo: PlanRepo, number: number = latestVersion(repo).number): PlanAttributes {
  for (let i = repo.versions.length - 1; i >= 0; i--) {
    const v = repo.versions[i];
    if (v.number <= number && v.attributes) return v.attributes;
  }
  return {};
}
/** A draft's attributes at one of its revisions: Live's as they are now, with the draft's over them. */
export function draftAttributes(repo: PlanRepo, draft: PlanRepoDraft, index: number = draft.revisions.length): PlanAttributes {
  return mergeAttributes(attributesAt(repo), index > 0 ? draft.revisions[index - 1].attributes : undefined);
}
/** A plan's configuration: its own, or the Study Program template's. */
export const configOf = (repo: PlanRepo): PlanConfig => repo.config ?? TEMPLATES['Study Program']();

/** A draft's budget at one of its revisions: Live's as it is now, with the draft's cells over it. */
export function draftBudget(repo: PlanRepo, draft: PlanRepoDraft, index: number = draft.revisions.length): PlanBudget {
  return mergeBudget(budgetAt(repo), index > 0 ? draft.revisions[index - 1].budget : undefined);
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

/** When, as a time on a day: "Today, 9:14 AM", "Yesterday, 4:02 PM", "Oct 24, 8:07 AM". */
export function stamp(iso: string, now = new Date()): string {
  const d = new Date(iso);
  const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (d.toDateString() === now.toDateString()) return `Today, ${time}`;
  if (d.toDateString() === yesterday.toDateString()) return `Yesterday, ${time}`;
  const day = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', ...(d.getFullYear() !== now.getFullYear() ? { year: 'numeric' as const } : {}) });
  return `${day}, ${time}`;
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

/** A signed shift in the unit a planner reads it in: "+10 days", "−3 weeks", "+23 months". */
export function signedShift(days: number): string {
  const n = Math.abs(days);
  const sign = days < 0 ? '\u2212' : '+';
  if (n >= 60) {
    const m = Math.round(n / 30.44);
    return `${sign}${m} ${m === 1 ? 'month' : 'months'}`;
  }
  if (n >= 14) return `${sign}${Math.round(n / 7)} weeks`;
  return `${sign}${n} ${n === 1 ? 'day' : 'days'}`;
}

/**
 * What an edit did, in one fixed grammar (2026-10-28, Andy: the old sentence, "Extended X by 23 months, and the 6
 * items after it", read as written rather than generated; "make it more deterministic"). A verb from a closed set,
 * the item, the signed shift, then how many others moved:
 *   Moved {item} {±shift}           the whole item
 *   Moved end of {item} {±shift}    its end only
 *   Moved {n} items {±shift}        several, by the first one's shift
 *   ... ({n} others moved)          the items that moved with it
 */
export function revisionNote(own: PlanChange[], cascaded: number): PlanChangeNote {
  if (!own.length) return cascaded ? { action: 'Moved', subject: `${cascaded} ${cascaded === 1 ? 'Item' : 'Items'}` } : { action: 'No Change' };
  const first = own[0];
  const others = cascaded || undefined;
  const shift = signedShift(first.shiftDays);
  if (own.length > 1) return { action: 'Moved', subject: `${own.length} Items`, shift, others };
  return { action: first.endOnly ? 'End Moved' : 'Moved', subject: first.name, shift, others };
}

/** The note and its plain line, as a version or revision stores them. */
export const noted = (note: PlanChangeNote) => ({ note, message: noteText(note) });

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

/** The two early deliverables the sample adds (2026-10-28): finished before today, with their records. */
const EARLY_TASKS = [
  { under: 'Near-field intake behavior', name: 'Near-field study scoping memo', start: '2026-07-01', end: '2026-08-28', budget: 48_000 },
  { under: 'Far-field through-Delta', name: 'Tag technology feasibility memo', start: '2026-07-15', end: '2026-09-30', budget: 36_000 },
];

/** Two deliverables dated from the day the sample is seeded (2026-10-28, the SOW review: "Late or Due in 30 Days"
 *  was empty in every demo): one past its end and still in progress, one due in 5 days (its Coming Up reminder sent). */
const isoFromToday = (days: number) => new Date(Date.now() + days * 86_400_000).toISOString().slice(0, 10);
const RELATIVE_TASKS = () => [
  { under: 'Predator density', name: 'Predator survey collection permit', start: isoFromToday(-75), end: isoFromToday(-9), budget: 12_000 },
  { under: 'Near-field intake behavior', name: 'Quarterly agency coordination memo', start: isoFromToday(-20), end: isoFromToday(5), budget: 9_000 },
];

/** The sample's attributes: owners on every element, the deliverables flagged, the Study Program's fields filled. */
function seedAttributes(plan: PlanDetailDto): PlanAttributes {
  const out: PlanAttributes = {};
  const set = (name: string, a: ElementAttributes) => {
    const id = elementByName(plan, name)?.PlanElementID;
    if (id) out[id] = { ...out[id], ...a, values: { ...(out[id]?.values ?? {}), ...(a.values ?? {}) } };
  };
  set('Fisheries Evaluation Studies', { owners: ['Jamie Quishenberry', 'Andy Lovseth'], values: { 'lead-agency': 'CDFW', authorization: 'Both' } });
  set('Migration & Survival Study', { owners: ['Alex Rivera'], values: { 'lead-agency': 'CDFW', 'science-plan-status': 'Agency Review' } });
  set('Predation Study', { owners: ['Priya Natarajan'], values: { 'lead-agency': 'CDFW', 'science-plan-status': 'Not Started' } });
  set('Near-field intake behavior', { owners: ['Alex Rivera'], values: { 'lead-agency': 'CDFW', 'field-season': 'Winter', 'sampling-method': 'Acoustic telemetry, JSATS' } });
  set('Far-field through-Delta', { owners: ['Sam Okafor'], values: { 'lead-agency': 'NMFS', 'field-season': 'Year-Round', 'sampling-method': 'Regional receiver network' } });
  set('Predator density', { owners: ['Priya Natarajan'], values: { 'lead-agency': 'CDFW', 'field-season': 'Spring', 'sampling-method': 'Hydroacoustic survey' } });
  set('Predation exposure modeling', { owners: ['Priya Natarajan'], values: { 'lead-agency': 'CDFW', 'field-season': 'Summer' } });
  const deliverable = (name: string, owners: string[], type: string, reviewer: string, period = 30, agency = 'CDFW') =>
    set(name, { owners, deliverable: true, values: { 'lead-agency': agency, 'deliverable-type': type, 'agency-reviewer': reviewer, 'review-period': period } });
  deliverable('Near-field study scoping memo', ['Alex Rivera'], 'Technical Memo', 'Jordan Reyes');
  deliverable('Tag technology feasibility memo', ['Sam Okafor'], 'Technical Memo', 'Rowan Hale', 30, 'NMFS');
  deliverable('Detailed baseline study plan', ['Alex Rivera', 'Priya Natarajan'], 'Science Plan', 'Jordan Reyes', 30);
  deliverable('Receiver-site encroachment', ['Sam Okafor'], 'Permit Application', 'Morgan Ellis', 45, 'DWR');
  deliverable('Draft near-field survival memo', ['Alex Rivera'], 'Technical Memo', 'Jordan Reyes');
  deliverable('Through-Delta survival model fit', ['Sam Okafor'], 'Data Report', 'Rowan Hale', 45, 'NMFS');
  deliverable('Predation study plan', ['Priya Natarajan'], 'Science Plan', 'Casey Lin');
  deliverable('Predation exposure model build', ['Priya Natarajan'], 'Data Report', 'Casey Lin', 45);
  deliverable('Predator survey collection permit', ['Priya Natarajan'], 'Permit Application', 'Casey Lin', 30);
  deliverable('Quarterly agency coordination memo', ['Alex Rivera', 'Andy Lovseth'], 'Technical Memo', 'Jordan Reyes', 30);
  for (const name of ['Acoustic tag & receiver procurement', 'Fabricate & install', 'Winter-freshet', 'Receiver retrieval', 'Regional receiver network', 'Multi-year tag release', 'Baseline predator hydroacoustic', 'Predation hotspot', 'Diet & eDNA']) {
    set(name, { owners: [name.startsWith('Regional') || name.startsWith('Multi-year') ? 'Sam Okafor' : name.startsWith('Baseline predator') || name.startsWith('Predation hotspot') || name.startsWith('Diet') ? 'Priya Natarajan' : 'Alex Rivera'], values: { 'lead-agency': 'CDFW' } });
  }
  return out;
}

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
const FISH_DRAFTS: { name: string; owner: string; startedDaysAgo: number; askedDaysAgo?: number; edits: { daysAgo: number; name: string; days: number; endOnly?: boolean }[] }[] = [
  {
    name: 'Permit delay scenario',
    owner: 'Alex Rivera',
    startedDaysAgo: 4,
    askedDaysAgo: 0.8,
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
  // Two early deliverables, finished this summer (2026-10-28), so the sample has done work to show: sends, receipts,
  // completions. They lead their sub-studies.
  for (const t of [...EARLY_TASKS, ...RELATIVE_TASKS()]) {
    const parent = elementByName(live, t.under);
    if (!parent?.PlanElementID) continue;
    await as('Jamie Quishenberry', () =>
      planApi.createElement(planID, { ParentPlanElementID: parent.PlanElementID!, LevelDepth: 4, PlanElementName: t.name, SortOrder: -1, StartDate: t.start, EndDate: t.end, Budget: t.budget, PlanDateType: PlanDateTypeEnum.Estimated }, live.VersionToken)
    );
    live = await planApi.getPlan(planID);
  }
  const repo: PlanRepo = {
    planID,
    visibility: 'Project',
    watchers: ['Jamie Quishenberry', 'Alex Rivera', 'Sam Okafor', 'Priya Natarajan', 'Andy Lovseth', 'Dana Whitfield'],
    starredBy: ['Jamie Quishenberry', 'Andy Lovseth'],
    versions: [
      { number: 1, author: 'Jamie Quishenberry', at: daysAgo(92), ...noted({ action: 'Created', subject: '2026 Study Outline' }), changeCount: 0, label: 'Baseline', source: 'created', draftName: null, plan: clone(live), budget: spreadBudget(live), attributes: seedAttributes(live) },
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
      ...noted(revisionNote(own, changes.length - own.length)),
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
      ...(seed.askedDaysAgo ? { publishRequestedAt: daysAgo(seed.askedDaysAgo, 16) } : {}),
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
      draft.revisions.push({ id: uid(), author: seed.owner, at: daysAgo(step.daysAgo, 14), ...noted(revisionNote(own, changes.length - own.length)), overrides: clone(overrides) });
    }
    repo.drafts.push(draft);
  }
  store.repos.push(repo);
  seedPlanRecords(planID, live);
}

/** A second and third plan for the index, lighter: their own samples (2026-10-28: they were the fisheries sample
 *  renamed, so a geotechnical plan opened on fish studies), with a short history and, for one, a draft. */
async function seedVariant(store: RepoStore, key: SampleKey, owner: string, ageDays: number, draft: { name: string; item: string; days: number } | null): Promise<void> {
  const created = await as(owner, () => planApi.createSample(PROJECT_ID, key));
  const planID = created.PlanID ?? '';
  const live = await planApi.getPlan(planID);
  const repo: PlanRepo = {
    planID,
    visibility: 'Project',
    watchers: [owner, 'Andy Lovseth'],
    starredBy: [],
    versions: [{ number: 1, author: owner, at: daysAgo(ageDays), ...noted({ action: 'Created' }), changeCount: 0, label: null, source: 'created', draftName: null, plan: clone(live), budget: spreadBudget(live) }],
    drafts: [],
  };
  if (draft) {
    const draftName = draft.name;
    const edit = seedEdit(live, { name: draft.item, days: draft.days });
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
        revisions: [{ id: uid(), author: owner, at: daysAgo(6, 15), ...noted(revisionNote(own, changes.length - own.length)), overrides }],
      });
    }
  }
  store.repos.push(repo);
}

/** First visit: three plans with a believable history. Later visits: drops plans the mock API no longer has. */
/** One seeding at a time: two scripts on a page (the index and its Due for You card) share the one under way. */
let seedingNow: Promise<void> | null = null;
export function ensureSeeded(onProgress?: (text: string) => void): Promise<void> {
  seedingNow ??= seedOnce(onProgress).finally(() => (seedingNow = null));
  return seedingNow;
}
async function seedOnce(onProgress?: (text: string) => void): Promise<void> {
  const plans = await planApi.listPlans(PROJECT_ID);
  // Read after the API answers (2026-10-29): read before, a plan created meanwhile (New Plan on the index) was saved
  // over by this stale copy and came back without its People.
  const store = load();
  const known = new Set(plans.map((p) => p.PlanID));
  store.repos = store.repos.filter((r) => known.has(r.planID));
  if (store.repos.length && store.format === SEED_FORMAT) {
    save(store);
    return;
  }
  if (store.repos.length || plans.length) {
    // An older seed: its plans go, and the sample starts over in the current shape.
    for (const plan of plans) await planApi.deletePlan(plan.PlanID ?? '').catch(() => undefined);
    store.repos = [];
  }
  clearPlanRecords();
  onProgress?.('Setting up three sample plans with three months of history…');
  setPlanApiLatency(0);
  try {
    // Deterministic ids, so a link to a plan, an item or a transmittal opens the same thing in any browser.
    await seeding(async () => {
      await seedFisheries(store);
      await seedVariant(store, 'habitat', 'Priya Natarajan', 40, null);
      await seedVariant(store, 'geotech', 'Sam Okafor', 18, { name: 'Reach 3 access change', item: 'Drilling contractor procurement', days: 35 });
    });
  } finally {
    setPlanApiLatency(220);
  }
  seedSettings(store);
  store.format = SEED_FORMAT;
  save(store);
}

/** The sample's settings: the three plans track different things, and each has its people. Andy owns all three, so
 *  the default viewer can open every plan's settings (?user= shows the others' roles). */
function seedSettings(store: RepoStore): void {
  const SETTINGS: Record<string, { views: PlanView[]; members: PlanMember[] }> = {
    'Fisheries Evaluation Studies': {
      views: ['schedule', 'budget'],
      members: [
        { name: 'Jamie Quishenberry', role: 'Owner' },
        { name: 'Andy Lovseth', role: 'Owner' },
        { name: 'Alex Rivera', role: 'Editor' },
        { name: 'Priya Natarajan', role: 'Editor' },
        { name: 'Sam Okafor', role: 'Contributor' },
        { name: 'Morgan Ellis', role: 'Contributor' },
        { name: 'Jordan Reyes', role: 'Guest' },
        { name: 'Casey Lin', role: 'Guest' },
        { name: 'Rowan Hale', role: 'Guest' },
      ],
    },
    'Geotechnical Investigations': {
      views: ['schedule'],
      members: [
        { name: 'Sam Okafor', role: 'Owner' },
        { name: 'Andy Lovseth', role: 'Owner' },
        { name: 'Chris Tanaka', role: 'Contributor' },
      ],
    },
    'Habitat Restoration Monitoring': {
      views: ['budget'],
      members: [
        { name: 'Priya Natarajan', role: 'Owner' },
        { name: 'Andy Lovseth', role: 'Owner' },
        { name: 'Dana Whitfield', role: 'Editor' },
      ],
    },
  };
  for (const repo of store.repos) {
    const seed = SETTINGS[latestVersion(repo).plan.PlanName ?? ''];
    if (seed && !repo.views) Object.assign(repo, clone(seed));
    // The fisheries plan is Aaron's study program; the other two start Blank (no study fields), with their agencies.
    const name = latestVersion(repo).plan.PlanName ?? '';
    repo.config ??=
      name === 'Fisheries Evaluation Studies'
        ? TEMPLATES['Study Program']()
        : { ...TEMPLATES.Blank(), agencies: name === 'Geotechnical Investigations' ? ['DWR', 'CSLC', 'USACE', 'San Joaquin County'] : ['CDFW', 'NMFS', 'USFWS', 'DWR'] };
  }
}

/** Starts the history over: the mock API's plans and this module's store are cleared, and the seed runs again. */
export async function resetSample(): Promise<void> {
  const plans = await planApi.listPlans(PROJECT_ID);
  for (const plan of plans) await planApi.deletePlan(plan.PlanID ?? '').catch(() => undefined);
  save({ repos: [] });
  clearPlanRecords();
}

// ── Reads ──────────────────────────────────────────────────────────────────────────────────────────────────────────

export function getRepo(planID: string): PlanRepo {
  return findRepo(load(), planID);
}

export function latestVersion(repo: PlanRepo): PlanVersion {
  return repo.versions[repo.versions.length - 1];
}

/**
 * Whether a role sees budget figures (2026-10-28, the SOW review: the Budget card's Who Sees It held on the item page
 * only). At one level, that level's Budget card decides; with no level, the plan-wide surfaces (the Budget tab, the
 * index's figure, Review's Budget section) show only when every level shows money to the role, so none leaks.
 * Owners and Editors always see it. The prototype hides in the UI; real enforcement is the API withholding the figures.
 */
export function seesBudget(repo: PlanRepo, role: PlanRole | null | undefined, depth?: number | null): boolean {
  if (role === 'Owner' || role === 'Editor') return true;
  const config = configOf(repo);
  const restricted = (d: number) => config.levels[d]?.modules.find((m) => m.key === 'budget')?.settings?.visibleTo === 'editors';
  if (depth !== undefined && depth !== null) return !restricted(depth);
  return !Object.keys(config.levels).some((d) => restricted(Number(d)));
}

export const viewsOf = (repo: PlanRepo): PlanView[] => (repo.views?.length ? repo.views : ['schedule', 'budget']);

export function membersOf(repo: PlanRepo): PlanMember[] {
  if (repo.members?.length) return repo.members;
  const creator = repo.versions[0]?.author;
  return [
    ...(creator ? [{ name: creator, role: 'Owner' as const }] : []),
    ...contributorsOf(repo).filter((name) => name !== creator).map((name) => ({ name, role: 'Editor' as const })),
  ];
}

/** What a plan's settings dialog edits. */
export interface PlanSettings {
  name: string;
  description: string;
  views: PlanView[];
  /** Top of the plan down. */
  levels: Required<PlanLevelCreateDto>[];
  members: PlanMember[];
  /** A new plan's starting configuration (a template); settings saves leave the plan's own alone. */
  config?: PlanConfig;
  window?: PlanWindow;
}

/** A new plan: made on the API, then its history starts with one revision, Created, by whoever made it. */
export async function createPlanRepo(settings: PlanSettings): Promise<string> {
  const created = await planApi.createPlan(PROJECT_ID, { PlanName: settings.name, Description: settings.description, Levels: settings.levels });
  const me = currentUserName();
  const store = load();
  store.repos.push({
    planID: created.PlanID ?? '',
    visibility: 'Project',
    watchers: [me],
    starredBy: [],
    versions: [{ number: 1, author: me, at: new Date().toISOString(), ...noted({ action: 'Created' }), changeCount: 0, label: null, source: 'created', draftName: null, plan: clone(created), budget: {} }],
    drafts: [],
    views: settings.views,
    members: settings.members,
    config: clonePlanConfig(settings.config ?? TEMPLATES['Study Program']()),
    window: settings.window,
  });
  save(store);
  return created.PlanID ?? '';
}

/** A plan's settings saved: its name and description and levels on the API, its views and people on the repo. The
 *  name and description are the plan's, not a revision's, so every revision's copy takes them. */
export async function savePlanSettings(planID: string, settings: PlanSettings): Promise<void> {
  let plan = await planApi.getPlan(planID);
  if ((plan.PlanName ?? '') !== settings.name || (plan.Description ?? '') !== settings.description) {
    await planApi.updatePlan(planID, { PlanName: settings.name, Description: settings.description }, plan.VersionToken);
    plan = await planApi.getPlan(planID);
  }
  const levels = [...(plan.Levels ?? [])].sort((a, b) => (a.Depth ?? 0) - (b.Depth ?? 0));
  for (let i = 0; i < Math.max(levels.length, settings.levels.length); i++) {
    const was = levels[i];
    const next = settings.levels[i];
    if (was && next && (was.SingularName !== next.SingularName || was.PluralName !== next.PluralName)) await planApi.updateLevel(planID, was.Depth ?? i + 1, next, (await planApi.getPlan(planID)).VersionToken);
    else if (!was && next) await planApi.createLevel(planID, next, (await planApi.getPlan(planID)).VersionToken);
  }
  // Removed from the bottom up: only the deepest level can go.
  for (let i = levels.length - 1; i >= settings.levels.length; i--) await planApi.deleteLevel(planID, levels[i].Depth ?? i + 1, (await planApi.getPlan(planID)).VersionToken);
  const store = load();
  const repo = findRepo(store, planID);
  for (const version of repo.versions) Object.assign(version.plan, { PlanName: settings.name, Description: settings.description });
  repo.views = settings.views;
  repo.members = settings.members;
  repo.window = settings.window;
  save(store);
}

/** A plan's fields, page layouts and lists saved (the Configure screen, 2026-10-28). Settings, like a repository's:
 *  no revision. Values on elements stay where they are; a field taken off a level is hidden, never deleted. */
export function savePlanConfig(planID: string, config: PlanConfig): void {
  const store = load();
  findRepo(store, planID).config = clonePlanConfig(config);
  save(store);
}

/** People a transmittal went to who aren't on the plan join it as Guests (2026-10-29, the traps audit): on the plan
 *  for what was sent to them, nothing more. Returns who was added. */
export function addGuests(planID: string, names: readonly string[]): string[] {
  const store = load();
  const repo = findRepo(store, planID);
  const members = membersOf(repo);
  const added = names.filter((n) => !members.some((m) => m.name === n));
  if (!added.length) return [];
  repo.members = [...members, ...added.map((name) => ({ name, role: 'Guest' as const }))];
  save(store);
  return added;
}

/** A plan deleted: on the API, and its history, drafts and budget with it. */
export async function deletePlanRepo(planID: string): Promise<void> {
  await planApi.deletePlan(planID);
  const store = load();
  store.repos = store.repos.filter((r) => r.planID !== planID);
  save(store);
  // Its records go with it (2026-10-29, the traps audit): no transmittals, documents or obligation links left pointing
  // at a plan that isn't there.
  clearPlanRecords(planID);
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
  const view = await planApi.previewDraft(draft.planID, overrides, [], index <= 0 ? undefined : draft.revisions[index - 1].links, index <= 0 ? undefined : draft.revisions[index - 1].structure);
  // The draft's edits to elements' own fields, laid over what the server previews (it knows dates only).
  const fields = index <= 0 ? undefined : draft.revisions[index - 1].fields;
  if (fields) {
    for (const { element } of flattenPlan(view.Plan.Elements)) {
      const edit = fields[element.PlanElementID ?? ''];
      if (!edit) continue;
      Object.assign(element, edit);
      if (edit.LevelDepth !== undefined) element.LevelSingularName = view.Plan.Levels?.find((l) => l.Depth === edit.LevelDepth)?.SingularName ?? element.LevelSingularName;
    }
  }
  return view;
}

// ── Writes ─────────────────────────────────────────────────────────────────────────────────────────────────────────

/** The viewer's draft of this plan, if they have one. One per person per plan (the 2026-10-26 check-in: "you get one branch at a time"). */
export function myDraft(planID: string): PlanRepoDraft | null {
  const me = currentUserName();
  return getRepo(planID).drafts.find((d) => d.owner === me && !d.transient) ?? null;
}

/** Every item a draft changes: its dates (by hand or moved by another edit), fields, budget, attributes, or a link to
 *  it. Empty for a draft with no edits. */
export async function draftFootprint(draft: PlanRepoDraft, live: PlanDetailDto): Promise<Set<string>> {
  const rev = draft.revisions.at(-1);
  const ids = new Set<string>();
  if (!rev) return ids;
  rev.overrides.forEach((o) => ids.add(o.PlanElementID));
  for (const part of [rev.fields, rev.budget, rev.attributes]) Object.keys(part ?? {}).forEach((id) => ids.add(id));
  for (const o of rev.structure ?? []) {
    ids.add(o.op === 'link' ? o.to : o.id);
    if (o.op === 'link') ids.add(o.from);
  }
  for (const id of Object.keys(rev.links ?? {})) {
    const dep = (live.Dependencies ?? []).find((x) => x.PlanElementDependencyID === id);
    if (dep) ids.add(dep.PredecessorPlanElementID ?? '').add(dep.SuccessorPlanElementID ?? '');
  }
  if (rev.overrides.length) {
    const was = new Map(flattenPlan(live.Elements).map(({ element }) => [element.PlanElementID, element]));
    for (const { element: e } of flattenPlan((await draftState(draft)).Plan.Elements)) {
      const w = was.get(e.PlanElementID);
      if (w && (w.StartDate !== e.StartDate || w.EndDate !== e.EndDate)) ids.add(e.PlanElementID ?? '');
    }
  }
  return ids;
}

/**
 * The open drafts (anyone's, the short-lived ones aside) that change this item (2026-10-28, the draft-first edit model:
 * Publish Now is offered only when none does, so publishing one later can't quietly put Live's edit back).
 */
export async function draftsTouching(planID: string, elementId: string, live: PlanDetailDto): Promise<PlanRepoDraft[]> {
  const out: PlanRepoDraft[] = [];
  for (const d of getRepo(planID).drafts) if (!d.transient && (await draftFootprint(d, live)).has(elementId)) out.push(d);
  return out;
}

/** The other open drafts that change items this one changes, with those items' ids (2026-10-28: Review and Publish
 *  says so, since whichever publishes second replaces the other's version of them). */
export async function draftOverlaps(planID: string, draftID: string, live: PlanDetailDto): Promise<{ draft: PlanRepoDraft; ids: string[] }[]> {
  const drafts = getRepo(planID).drafts;
  const self = drafts.find((d) => d.id === draftID);
  if (!self) return [];
  const mine = await draftFootprint(self, live);
  const out: { draft: PlanRepoDraft; ids: string[] }[] = [];
  for (const d of drafts) {
    if (d.id === draftID || d.transient) continue;
    const ids = [...(await draftFootprint(d, live))].filter((id) => mine.has(id));
    if (ids.length) out.push({ draft: d, ids });
  }
  return out;
}

/** An element page's Edit: a draft of its own holding one edit while it's reviewed. The person's draft, if any, is left
 *  alone; the review publishes this one or the page discards it. */
export function startEditDraft(planID: string, itemName: string): PlanRepoDraft {
  const store = load();
  const repo = findRepo(store, planID);
  const draft: PlanRepoDraft = {
    id: uid(),
    planID,
    name: `Edit to ${itemName}`,
    owner: currentUserName(),
    createdAt: new Date().toISOString(),
    baseVersion: latestVersion(repo).number,
    revisions: [],
    transient: true,
  };
  repo.drafts.push(draft);
  save(store);
  return draft;
}

/**
 * The viewer's draft, started from the latest version if they have none. One per person per plan: asking again
 * returns the one they have. `from` copies another person's draft into it (theirs is untouched).
 */
/** `kind` names a new one: "Andy's Draft" (Scenario is kept for older callers; the word is retired in the UI). */
export function startDraft(planID: string, from?: PlanRepoDraft, kind: 'Draft' | 'Scenario' = 'Draft'): PlanRepoDraft {
  const store = load();
  const repo = findRepo(store, planID);
  const me = currentUserName();
  const existing = repo.drafts.find((d) => d.owner === me && !d.transient);
  if (existing && !from) return existing;
  const stamp = new Date();
  const draft: PlanRepoDraft = {
    id: existing?.id ?? uid(),
    planID,
    name: from ? `Copy of ${from.name}` : `${me.split(' ')[0]}'s ${kind}`,
    owner: me,
    createdAt: stamp.toISOString(),
    baseVersion: latestVersion(repo).number,
    revisions: from
      ? [{ id: uid(), author: me, at: stamp.toISOString(), ...noted({ action: 'Copied', subject: from.name }), overrides: clone(from.revisions.at(-1)?.overrides ?? []), fields: clone(from.revisions.at(-1)?.fields), budget: clone(from.revisions.at(-1)?.budget), attributes: clone(from.revisions.at(-1)?.attributes), links: clone(from.revisions.at(-1)?.links), structure: clone(from.revisions.at(-1)?.structure) }]
      : [],
  };
  repo.drafts = [...repo.drafts.filter((d) => d.owner !== me || d.transient), draft];
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
export function addRevision(planID: string, draftID: string, overrides: PlanDraftOverrideDto[], note: PlanChangeNote, extras: { fields?: Record<string, PlanFieldEdit>; budget?: PlanBudget; attributes?: PlanAttributes; links?: PlanLinkEdits; structure?: DraftStructureOp[] } = {}): PlanRevision {
  const store = load();
  const draft = findRepo(store, planID).drafts.find((d) => d.id === draftID);
  if (!draft) throw new Error('That draft is gone.');
  // Fields and budget cells are cumulative like the overrides: a revision that doesn't change them carries them on.
  const prior = draft.revisions.at(-1);
  const revision: PlanRevision = {
    id: uid(),
    author: currentUserName(),
    at: new Date().toISOString(),
    ...noted(note),
    overrides: clone(overrides),
    fields: clone(extras.fields ?? prior?.fields),
    budget: clone(extras.budget ?? prior?.budget),
    attributes: clone(extras.attributes ?? prior?.attributes),
    links: clone(extras.links ?? prior?.links),
    structure: clone(extras.structure ?? prior?.structure),
  };
  draft.revisions.push(revision);
  // A new edit after Ask to Publish withdraws the request (2026-10-29, the traps audit): whoever answers it would have
  // published edits made after it. The owner asks again when it's ready.
  if (draft.publishRequestedAt && revision.author === draft.owner) delete draft.publishRequestedAt;
  save(store);
  return revision;
}

/** Ask to publish: the owner of a draft, who can't publish, asks someone who can. A request, not a lock: the draft
 *  stays editable, and publishing (by anyone who can) closes it as usual. */
export function requestPublish(planID: string, draftID: string): void {
  const store = load();
  const draft = findRepo(store, planID).drafts.find((d) => d.id === draftID);
  if (!draft) return;
  draft.publishRequestedAt = new Date().toISOString();
  delete draft.sentBack;
  save(store);
}

/** The other answer to Ask to Publish: not yet, with a note. The request closes; the draft stays its owner's. */
export function sendBack(planID: string, draftID: string, by: string, note: string): void {
  const store = load();
  const draft = findRepo(store, planID).drafts.find((d) => d.id === draftID);
  if (!draft) return;
  delete draft.publishRequestedAt;
  draft.sentBack = { by, at: new Date().toISOString(), note };
  save(store);
}

export function discardDraft(planID: string, draftID: string): void {
  const store = load();
  const repo = findRepo(store, planID);
  repo.drafts = repo.drafts.filter((d) => d.id !== draftID);
  save(store);
}

/** A draft's structure ops replayed on Live through the API, in order; returns each temporary id's real one. An op
 *  that no longer applies (what it names is gone) is skipped, as the preview skips it. */
async function landStructure(planID: string, ops: readonly DraftStructureOp[]): Promise<Map<string, string>> {
  const ids = new Map<string, string>();
  const real = (id: string | null | undefined) => (id ? (ids.get(id) ?? id) : null);
  for (const o of ops) {
    const now = await planApi.getPlan(planID);
    const exists = (id: string | null) => !id || flattenPlan(now.Elements).some((x) => x.element.PlanElementID === id);
    try {
      if (o.op === 'add') {
        const parent = real(o.dto.ParentPlanElementID);
        if (!exists(parent)) continue;
        const before = new Set(flattenPlan(now.Elements).map((x) => x.element.PlanElementID));
        const after = await planApi.createElement(planID, { ...o.dto, ParentPlanElementID: parent ?? undefined }, now.VersionToken);
        const made = flattenPlan(after.Elements).find((x) => !before.has(x.element.PlanElementID))?.element.PlanElementID;
        if (made) ids.set(o.id, made);
      } else if (o.op === 'remove') {
        if (exists(real(o.id))) await planApi.deleteElement(planID, real(o.id)!, now.VersionToken);
      } else if (o.op === 'move') {
        if (exists(real(o.id)) && exists(real(o.parentId))) await planApi.moveElement(planID, real(o.id)!, real(o.parentId), now.VersionToken);
      } else if (o.op === 'order') {
        if (exists(real(o.id))) await planApi.setSortOrder(planID, real(o.id)!, o.index, now.VersionToken);
      } else if (o.op === 'link') {
        if (!exists(real(o.from)) || !exists(real(o.to))) continue;
        const after = await planApi.createDependency(planID, { PredecessorPlanElementID: real(o.from)!, SuccessorPlanElementID: real(o.to)!, LagDays: o.lag }, now.VersionToken);
        const made = (after.Dependencies ?? []).find((d) => d.PredecessorPlanElementID === real(o.from) && d.SuccessorPlanElementID === real(o.to))?.PlanElementDependencyID;
        if (made) ids.set(o.id, made);
      }
    } catch (err) {
      // One op the server refuses (a rule the draft's preview doesn't check) doesn't stop the rest.
      console.warn('A drafted change could not be published', o, err);
    }
  }
  return ids;
}

/** A revision read with real ids in place of temporary ones; a new item's date overrides load from Live as it now is. */
function remapRevision(rev: PlanRevision, ids: ReadonlyMap<string, string>, now: PlanDetailDto): PlanRevision {
  if (!ids.size) return rev;
  const id = (x: string) => ids.get(x) ?? x;
  const keys = <T,>(rec?: Record<string, T>) => (rec ? Object.fromEntries(Object.entries(rec).map(([k, v]) => [id(k), v])) : undefined);
  const els = new Map(flattenPlan(now.Elements).map((x) => [x.element.PlanElementID, x.element]));
  return {
    ...rev,
    overrides: rev.overrides.map((o) => {
      if (!ids.has(o.PlanElementID)) return o;
      const el = els.get(id(o.PlanElementID));
      return { ...o, PlanElementID: id(o.PlanElementID), LoadedStartDate: el?.StartDate ?? null, LoadedEndDate: el?.EndDate ?? null, LoadedPlanDateType: el?.PlanDateType ?? o.LoadedPlanDateType };
    }),
    fields: keys(rev.fields),
    budget: keys(rev.budget),
    attributes: keys(rev.attributes),
    links: keys(rev.links),
    structure: rev.structure?.map((o) =>
      o.op === 'add'
        ? { ...o, id: id(o.id), dto: { ...o.dto, ParentPlanElementID: o.dto.ParentPlanElementID ? id(o.dto.ParentPlanElementID) : undefined } }
        : o.op === 'move'
          ? { ...o, id: id(o.id), parentId: o.parentId ? id(o.parentId) : null }
          : o.op === 'link'
            ? { ...o, id: id(o.id), from: id(o.from), to: id(o.to) }
            : { ...o, id: id(o.id) }
    ),
  };
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
  const live = latestVersion(repo).plan;
  // The draft's shape lands first (adds, removes, moves, new links), each new item taking its real id; then everything
  // else the draft holds is read with those ids.
  const ids = await landStructure(planID, index > 0 ? (draft.revisions[index - 1].structure ?? []) : []);
  const landedRev = index > 0 ? remapRevision(draft.revisions[index - 1], ids, await planApi.getPlan(planID)) : undefined;
  const overrides = landedRev?.overrides ?? [];
  // The draft's link edits land next, so the dates replay against the links as the draft has them.
  const links = landedRev?.links;
  for (const [id, lag] of Object.entries(links ?? {})) {
    const now = await planApi.getPlan(planID);
    const dep = (now.Dependencies ?? []).find((d) => d.PlanElementDependencyID === id);
    if (!dep) continue;
    if (lag === null) await planApi.deleteDependency(planID, id, now.VersionToken);
    else if (lag !== dep.LagDays) await planApi.updateDependency(planID, id, lag, now.VersionToken);
  }
  let next = await publishOverrides(planID, overrides, currentUserName());
  const changes = planCompare(live, next);
  const ownIDs = new Set([...overrides.map((o) => o.PlanElementID), ...changes.filter((c) => c.status !== 'moved').map((c) => c.id)]);
  const own = changes.filter((c) => ownIDs.has(c.id));
  // The draft's edits to elements' own fields go to Live as element updates (dates as they now stand).
  const rev = landedRev;
  for (const [id, edit] of Object.entries(rev?.fields ?? {})) {
    const el = flattenPlan(next.Elements).find((x) => x.element.PlanElementID === id)?.element;
    if (!el) continue;
    await planApi.updateElement(
      planID,
      id,
      {
        PlanElementName: edit.PlanElementName ?? el.PlanElementName ?? '',
        LevelDepth: edit.LevelDepth ?? el.LevelDepth,
        StartDate: el.StartDate ?? undefined,
        EndDate: el.EndDate ?? undefined,
        PlanDateType: el.PlanDateType,
        IsMilestone: edit.IsMilestone ?? el.IsMilestone,
        Budget: el.Budget ?? null,
        Notes: 'Notes' in edit ? edit.Notes : (el.Notes ?? null),
      },
      next.VersionToken
    );
    next = await planApi.getPlan(planID);
  }
  const store = load();
  const fresh = findRepo(store, planID);
  const version: PlanVersion = {
    number: latestVersion(fresh).number + 1,
    author: currentUserName(),
    at: new Date().toISOString(),
    // An edit with no date change says what it did (its own note: "Edited, Owners, Lead Agency").
    // An edit with no date change, or a draft's one structural edit (Added, Deleted, Moved Under), says itself.
    ...noted(
      (!changes.length || (index === 1 && changes.some((c) => c.status !== 'moved'))) && rev?.note
        ? rev.note
        : own.length <= 1 && own.every((c) => c.status === 'moved')
          ? revisionNote(own, changes.length - own.length)
          : { action: 'Published', subject: draft.name, shift: `${changes.length} ${changes.length === 1 ? 'Item' : 'Items'}` }
    ),
    changeCount: changes.length,
    label: label?.trim() || null,
    source: 'draft',
    draftName: draft.transient ? null : draft.name,
    plan: clone(next),
    // Live's budget with the draft's cells over it; the same for its attributes.
    budget: mergeBudget(budgetAt(fresh), rev?.budget),
    attributes: mergeAttributes(attributesAt(fresh), rev?.attributes),
  };
  fresh.versions.push(version);
  // Part of a draft published (2026-10-28, Andy): the edits after the one published stay as the draft, on top of the
  // new Live. Each override now loads from Live as it is, and one Live already matches drops out.
  const kept = fresh.drafts.find((d) => d.id === draftID);
  const rest = kept ? kept.revisions.slice(index) : [];
  if (kept && rest.length) {
    const now = new Map(flattenPlan(next.Elements).map((x) => [x.element.PlanElementID, x.element]));
    const landed = links ?? {};
    const shipped = index > 0 ? (draft.revisions[index - 1].structure ?? []).length : 0;
    kept.revisions = rest.map((r) => remapRevision({ ...r, structure: r.structure?.slice(shipped) }, ids, next)).map((rev) => ({
      ...rev,
      links: rev.links ? Object.fromEntries(Object.entries(rev.links).filter(([id, lag]) => landed[id] !== lag)) : undefined,
      overrides: rev.overrides
        .map((o) => {
          const el = now.get(o.PlanElementID);
          return el ? { ...o, LoadedStartDate: el.StartDate ?? null, LoadedEndDate: el.EndDate ?? null, LoadedPlanDateType: el.PlanDateType ?? o.LoadedPlanDateType } : o;
        })
        .filter((o) => o.StartDate !== o.LoadedStartDate || o.EndDate !== o.LoadedEndDate || o.PlanDateType !== o.LoadedPlanDateType),
    }));
    kept.baseVersion = version.number;
    delete kept.publishRequestedAt;
  } else fresh.drafts = fresh.drafts.filter((d) => d.id !== draftID);
  // Someone else's draft, published: its owner hears about it on their next visit.
  if (draft.owner !== version.author) {
    fresh.notices = [...(fresh.notices ?? []), { id: uid(), to: draft.owner, by: version.author, at: version.at, version: version.number, draftName: draft.name }];
  }
  save(store);
  return version;
}

/** The notices left for this person on this plan, newest last. */
export function noticesFor(planID: string, user: string): PlanNotice[] {
  return (getRepo(planID).notices ?? []).filter((n) => n.to === user);
}

export function dismissNotice(planID: string, noticeID: string): void {
  const store = load();
  const repo = findRepo(store, planID);
  repo.notices = (repo.notices ?? []).filter((n) => n.id !== noticeID);
  save(store);
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
    ...noted({ action: 'Restored', subject: `Revision ${number}${target.label ? `, ${target.label}` : ''}` }),
    changeCount: planCompare(live, next).length,
    label: null,
    source: 'restore',
    draftName: null,
    plan: clone(next),
    budget: clone(budgetAt(repo, number)),
    attributes: clone(attributesAt(repo, number)),
  };
  fresh.versions.push(version);
  save(store);
  return version;
}

/**
 * An exact edit made straight on Live (a dependency unlinked, a lag changed: the drawer's kind of change, which Jamie's
 * split keeps out of drafts) becomes the next revision, with its sentence.
 */
export async function recordLiveEdit(planID: string, note: PlanChangeNote): Promise<PlanVersion> {
  const plan = await planApi.getPlan(planID);
  const store = load();
  const repo = findRepo(store, planID);
  const before = latestVersion(repo).plan;
  const version: PlanVersion = {
    number: latestVersion(repo).number + 1,
    author: currentUserName(),
    at: new Date().toISOString(),
    ...noted(note),
    changeCount: planCompare(before, plan).length,
    label: null,
    source: 'edit',
    draftName: null,
    plan: clone(plan),
    budget: clone(budgetAt(repo)),
    attributes: clone(attributesAt(repo)),
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
