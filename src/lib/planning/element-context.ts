// One element's page, as data (2026-10-28, decisions 1 to 8): everything a module needs to draw itself, read once per
// draw. The planned side (dates, budget, owners, the deliverable flag, field values) comes from the plan as shown:
// Live, or a draft over it. The records (status, documents, transmittals, completion, comments) always come from Live
// (decision 5: plans are drafted, records are not), so an element that exists only in a draft has none yet.

import type { PlanDetailDto, PlanElementDto, PlanElementDependencyDto } from './model';
import { withBase } from '../base';
import {
  attributesAt,
  budgetAt,
  configOf,
  currentUserName,
  draftAttributes,
  draftBudget,
  flattenPlan,
  getRepo,
  membersOf,
  viewsOf,
  type ElementAttributes,
  type PlanAttributes,
  type PlanBudget,
  type PlanRepo,
  type PlanRepoDraft,
  type PlanRole,
} from './plan-repo';
import { fieldsFor, levelConfig, modulesFor, MODULES, type FieldDef, type LevelConfig, type LevelField, type ModuleKey, type ModulePlacement, type ModuleSettings, type PlanConfig } from './plan-config';
import { recordsFor, type PlanRecords } from './plan-records';

// ── Where things live ─────────────────────────────────────────────────────────────────────────────────────────────

const q = (params: Record<string, string | null | undefined>) =>
  Object.entries(params)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}=${encodeURIComponent(v!)}`)
    .join('&');
/** An element's page. `draft` opens it as that draft has it. */
export const ELEMENT_HREF = (planID: string, elementId: string, draftId?: string | null) => withBase(`/prototypes/plans-repo/element/?${q({ plan: planID, el: elementId, draft: draftId })}`);
/** One transmittal: the sender's record, or (for a recipient) the page with Confirm Receipt. */
export const TRANSMITTAL_HREF = (planID: string, transmittalId: string) => withBase(`/prototypes/plans-repo/transmittal/?${q({ plan: planID, id: transmittalId })}`);
/** The plan's settings page (General, Levels, Fields and Pages, People). `section` opens one. */
export const SETTINGS_HREF = (planID: string, section?: string) => withBase(`/prototypes/plans-repo/settings/?${q({ id: planID, section })}`);
/** The plan page, on a view. */
export const PLAN_VIEW_HREF = (planID: string, view?: string, draftId?: string | null) => withBase(`/prototypes/plans-repo/plan/?${q({ id: planID, draft: draftId, view })}`);
/** An obligation's page in the data catalog. */
export const OBLIGATION_HREF = (id: string) => withBase(`/prototypes/data-catalog-obligation/${encodeURIComponent(id)}`);

/** The Configure screen's working copy, read by an element page opened with `&preview=1` (its live preview). */
export const PREVIEW_CONFIG_KEY = (planID: string) => `bcn-plan-config-preview-${planID}`;

/** The element's dates as a phrase: a milestone's one date, a span's two. */
export function datesText(el: PlanElementDto): string {
  const day = (iso: string | undefined) => (iso ? new Date(`${iso.slice(0, 10)}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : '');
  const start = el.SpanStartDate ?? el.StartDate;
  const end = el.SpanEndDate ?? el.EndDate;
  if (el.IsMilestone || !start) return end || start ? `Due ${day(end ?? start)}` : 'Not Scheduled';
  return `${day(start)} to ${day(end ?? start)}`;
}

// ── The context ───────────────────────────────────────────────────────────────────────────────────────────────────

/** live: the plan of record, read-only. own: your draft, editable. view: someone else's draft, read-only. preview: the
 *  Configure screen's preview, read-only, drawn with the unsaved configuration. */
export type ElementMode = 'live' | 'own' | 'view' | 'preview';

export interface ElementContext {
  planID: string;
  repo: PlanRepo;
  config: PlanConfig;
  mode: ElementMode;
  draft: PlanRepoDraft | null;
  /** Live, as published. */
  live: PlanDetailDto;
  /** The plan as this page shows it: Live, or the draft's state. */
  plan: PlanDetailDto;
  element: PlanElementDto;
  /** Top first, the element's parent last. */
  ancestors: PlanElementDto[];
  children: PlanElementDto[];
  /** 1 is the top level. */
  depth: number;
  deepest: number;
  levelName: string;
  level: LevelConfig;
  /** The element's fields: All Levels first, then its level's. */
  fields: { def: FieldDef; assign: LevelField }[];
  /** Every module, placed (on or off), in the level's order. */
  placements: ModulePlacement[];
  /** Every element's attributes as shown (Live's, or the draft's over Live's). */
  attributes: PlanAttributes;
  /** This element's. */
  attrs: ElementAttributes;
  budget: PlanBudget;
  records: PlanRecords;
  /** The element exists on Live, so it can carry records. */
  inLive: boolean;
  me: string;
  myRole: PlanRole;
  /** Plan fields edit only in your own draft. */
  canEditPlan: boolean;
  /** Records (status, documents, sends, completion, comments) are kept by Owners, Editors and Contributors, on Live
   *  only (a draft and the preview read them). Guests only confirm receipt. */
  canRecord: boolean;
  /** Whether the plan tracks money. */
  tracksBudget: boolean;
  isDeliverable: (id: string) => boolean;
  elementById: (id: string) => PlanElementDto | undefined;
  /** Other elements' pages keep the draft this one is open in. */
  hrefOf: (id: string) => string;
  dependencies: { waitsOn: PlanElementDependencyDto[]; blocks: PlanElementDependencyDto[] };
}

/** A module shows when it's on for the level and applies to this element: deliverable modules on deliverables, parents
 *  modules on elements with children, Budget on plans that track money (and, set to editors, to Owners and Editors). */
export function moduleShows(ctx: ElementContext, p: ModulePlacement): boolean {
  const kind = MODULES[p.key].kind;
  if (kind === 'core' || kind === 'shared') return true;
  if (!p.on) return false;
  if (kind === 'deliverable') return !!ctx.attrs.deliverable;
  if (kind === 'parents') return ctx.children.length > 0;
  if (p.key === 'budget') {
    if (!ctx.tracksBudget) return false;
    if (p.settings?.visibleTo === 'editors') return ctx.myRole === 'Owner' || ctx.myRole === 'Editor';
  }
  return true;
}

export const settingsOf = (ctx: ElementContext, key: ModuleKey): ModuleSettings | undefined => ctx.placements.find((p) => p.key === key)?.settings;

/** Builds the context for one element. `shown` is the plan as the page shows it (the caller resolves a draft's state,
 *  which is async). Returns null when the element isn't in that plan. */
export function elementContext(opts: { planID: string; elementId: string; live: PlanDetailDto; shown: PlanDetailDto; draft: PlanRepoDraft | null; preview?: PlanConfig | null }): ElementContext | null {
  const { planID, elementId, live, shown, draft } = opts;
  const repo = getRepo(planID);
  const config = opts.preview ?? configOf(repo);
  const flat = flattenPlan(shown.Elements);
  const byId = new Map(flat.map(({ element }) => [element.PlanElementID ?? '', element]));
  const element = byId.get(elementId);
  if (!element) return null;
  const ancestors: PlanElementDto[] = [];
  for (let p = element.ParentPlanElementID; p; p = byId.get(p)?.ParentPlanElementID) {
    const parent = byId.get(p);
    if (!parent) break;
    ancestors.unshift(parent);
  }
  const me = currentUserName();
  const mode: ElementMode = opts.preview ? 'preview' : !draft ? 'live' : draft.owner === me ? 'own' : 'view';
  const levels = shown.Levels ?? [];
  const deepest = Math.max(1, ...levels.map((l) => l.Depth ?? 1));
  const depth = element.LevelDepth ?? ancestors.length + 1;
  const attributes = draft ? draftAttributes(repo, draft) : attributesAt(repo);
  const attrs = attributes[elementId] ?? {};
  const myRole = membersOf(repo).find((m) => m.name === me)?.role ?? 'Contributor';
  const liveIds = new Set(flattenPlan(live.Elements).map(({ element: e }) => e.PlanElementID));
  const inLive = liveIds.has(elementId);
  const deps = shown.Dependencies ?? [];
  return {
    planID,
    repo,
    config,
    mode,
    draft,
    live,
    plan: shown,
    element,
    ancestors,
    children: [...(element.Children ?? [])],
    depth,
    deepest,
    levelName: element.LevelSingularName ?? levels.find((l) => l.Depth === depth)?.SingularName ?? 'Item',
    level: levelConfig(config, depth, deepest),
    fields: fieldsFor(config, depth, deepest),
    placements: modulesFor(config, depth, deepest),
    attributes,
    attrs,
    budget: draft ? draftBudget(repo, draft) : budgetAt(repo),
    records: recordsFor(planID),
    inLive,
    me,
    myRole,
    canEditPlan: mode === 'own',
    // Records attach to Live and read the same in every draft (decision 5).
    canRecord: mode === 'live' && inLive && myRole !== 'Guest',
    tracksBudget: viewsOf(repo).includes('budget'),
    isDeliverable: (id) => !!attributes[id]?.deliverable,
    elementById: (id) => byId.get(id),
    hrefOf: (id) => ELEMENT_HREF(planID, id, draft?.id),
    dependencies: {
      waitsOn: deps.filter((d) => d.SuccessorPlanElementID === elementId),
      blocks: deps.filter((d) => d.PredecessorPlanElementID === elementId),
    },
  };
}
