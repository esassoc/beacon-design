// <BcnPlanRepoPage>'s runtime: one plan in the repo model. Three modes, from the URL:
//   live   (no ?draft)          the live plan, read with its latest version; any drag checks out your draft
//   own    (?draft = yours)     your draft: every drop is a revision, Undo / Redo, Review and publish
//   view   (?draft = theirs)    someone else's draft, read-only, Copy to my draft
// The chart is Jamie's PlanGanttChart at the tactile density, the range is her setupPlanGanttRange; the draft
// arithmetic (edits from a drag, overrides, the cascade) is hers too (plan-draft.ts, the mock's previewDraft).

import { PlanGanttChart, type GanttDraftOverlay, type GanttRowHealth } from './plan-gantt-chart';
import { healthOf, recordsFor, setStatus, statusOf, type ElementStatus } from '../../lib/planning/plan-records';
import { setupPlanGanttRange } from './plan-gantt-range';
import { setupPlanRevisionsDialog, budgetDiff, signedDollars } from './plan-revisions-dialog';
import { openPlanElementDrawer, type PlanElementDrawerHandle } from './plan-element-drawer';
import { setupPlanBudgetSheet, type BudgetChange } from './plan-budget-sheet';
import { setupPlanItemsTable, type ItemChange } from './plan-items-table';
import { setupPlanImportDialog } from './plan-import-dialog';
import { PLAN_ICON_PATHS, fillIcons, planIcon } from '../../lib/planning/icons';
import { planGanttView } from '../../lib/planning/plan-gantt-rows';
import { planConflicts } from '../../lib/planning/plan-conflicts';
import { planDraftEditsForDrag, planDraftOverlay, planDraftWithEdits, type PlanDraftEdit } from '../../lib/planning/plan-draft';
import { formatPlanDateRange } from '../../lib/planning/plan-schedule-preview';
import { confirm, planStore, pushAlert, toLocalIsoDate } from '../../lib/planning/plan-page';
import { DRAFT_FIRST, DRAFT_FIRST_ASK, DRAFT_FIRST_NOW } from '../../lib/planning/plan-copy';
import { findPlanElement, planLevelBounds, validPlanLevels } from '../../lib/planning/plan-element';
import {
  planElementDeleteConfirmHeader,
  planElementDeleteConfirmText,
  planElementDeleteImpact,
  planElementSubtreeIDs,
  planMoveTargets,
  planReorderIndex,
  planRowActionsViews,
  planSiblingPosition,
  type PlanRowActionsView,
} from '../../lib/planning/plan-row-actions';
import { openPlanElementMoveDialog } from './plan-element-move-dialog';
import type { EsaMenuItem } from '@esa/ecology/esa-dropdown-menu';
import { planApi, type DraftStructureOp } from '../../lib/planning/plan-server';
import { PlanDateTypeEnum, type PlanDetailDto, type PlanElementDto, type PlanLevelDto } from '../../lib/planning/model';
import type { GanttDragEvent } from '../../lib/planning/gantt-types';
import {
  addRevision,
  draftsTouching,
  startEditDraft,
  publishDraft,
  currentUserName,
  discardDraft,
  dismissNotice,
  draftState,
  dropLastRevision,
  ensureSeeded,
  flattenPlan,
  getRepo,
  latestVersion,
  listPlanSummaries,
  myDraft,
  noticesFor,
  planCompare,
  planSpan,
  restoreRevision,
  revisionNote,
  mergeBudget,
  spreadBudget,
  mergeAttributes,
  type PlanAttributes,
  budgetAt,
  draftBudget,
  fiscalYearLabel,
  type PlanBudget,
  type PlanFieldEdit,
  type PlanChangeNote,
  shortDate,
  startDraft,
  timeAgo,
  versionsBehind,
  type PlanRepo,
  type PlanRepoDraft,
  type PlanRevision,
  membersOf,
  seesBudget,
  viewsOf,
  stamp,
  signedShift,
  attributesAt,
  draftAttributes,
  configOf,
  type PlanChange,
  orgOf,
} from '../../lib/planning/plan-repo';
import { setupPlanDeliverablesView } from './plan-deliverables';
import { setupPlanDocumentsView } from './plan-documents';
import { CUSTOMIZE_HREF, ELEMENT_HREF, TRANSMITTAL_HREF } from '../../lib/planning/element-context';
import { setupPlanSetupDialog } from './plan-setup-dialog';
import { personColor, planAvatar, setButtonDisabled } from './plan-people';
import { withBase } from '../../lib/base';
import { changeNote } from './plan-change-note';
import { PLAN_HREF, REVISIONS_HREF, STUDY_KEYS, fillGlyphs, keepStudy, type StudyKey } from './plan-repo-index';

type Mode = 'live' | 'own' | 'view';

const firstName = (name: string) => name.split(' ')[0];
export async function setupPlanRepoPage(root: HTMLElement): Promise<void> {
  const q = <T extends Element>(sel: string) => root.querySelector<T>(sel)!;
  await ensureSeeded();
  const params = new URLSearchParams(location.search);
  const planID = params.get('id') ?? (await listPlanSummaries())[0]?.repo.planID;
  if (!planID) return;
  const me = currentUserName();

  // A link to a plan that isn't here, or a Guest (2026-10-28, the review): the page's empty state, nothing else.
  const stop = (which: 'missing' | 'guest' | 'outside', title: string): void => {
    root.setAttribute('data-stopped', '');
    q<HTMLElement>(`[data-prp-stop="${which}"]`).hidden = false;
    document.querySelector<HTMLElement>('.bcn-plan-views')?.setAttribute('hidden', '');
    const h1 = document.querySelector('.page-layout__title h1');
    const text = h1 && [...h1.childNodes].reverse().find((n) => n.nodeType === Node.TEXT_NODE && n.textContent!.trim());
    if (text) text.textContent = title;
    const crumb = document.querySelector('.breadcrumbs [aria-current="page"]');
    if (crumb) crumb.textContent = title;
    document.title = `${title} | Beacon`;
    fillIcons(root);
  };
  let known = true;
  try {
    getRepo(planID);
  } catch {
    known = false;
  }
  if (!known) return stop('missing', 'Plan Not Found');
  const roleHere = membersOf(getRepo(planID)).find((m) => m.name === me)?.role;
  if (roleHere === 'Guest') return stop('guest', (await planApi.getPlan(planID)).PlanName ?? 'Plan');
  // Not on the plan's People at all (2026-10-29, the traps audit: anyone not on a plan got a Contributor's page): no way
  // in; the stop names its Owners to ask.
  if (!roleHere) {
    const owners = membersOf(getRepo(planID)).filter((m) => m.role === 'Owner').map((m) => m.name);
    q<HTMLElement>('[data-prp-stop="outside"] .esa-empty-state__description').textContent = `You aren’t on this plan’s People. Ask ${owners.length ? owners.join(' or ') : 'its Owner'} to add you.`;
    return stop('outside', 'Not Shared With You');
  }

  // The design studies (2026-10-27) switch variants from the URL; navigation keeps them.
  const study = Object.fromEntries(STUDY_KEYS.map((k) => [k, params.get(k)])) as Record<StudyKey, string | null>;
  const keep = (href: string) => keepStudy(href, params);
  // The draft-mode concepts (2026-10-27, second round): what being in a draft looks like on the work surface. Every one
  // carries the band; they differ in what happens to the chart. pencil: what the draft changed is pencilled in, and inks
  // in on publish. drafting: graph paper, with each move measured. night: the chart is a different room. bench: the draft
  // is a workbench the app folds away for.
  // pencil-paper is the recommended combination: drafting's graph paper as the ground, pencil for what changed.
  // issued is the study's recommendation, directions A and D: Live is the issued plan, read-only and printed flat;
  // your draft is where bars stand up and move; the chart's corner carries a title block that says which is which.
  // Issued is the default since Andy picked A and D (2026-10-28); &concept=none shows the page without a concept.
  const concept = (study.concept === 'none' ? null : (study.concept ?? 'issued')) as 'pencil' | 'drafting' | 'night' | 'bench' | 'pencil-paper' | 'issued' | null;
  const issued = concept === 'issued';
  // Who may publish (2026-10-27): someone who can't still makes a scenario, and asks someone who can to publish it.
  // The plan's people say who can (2026-10-28): Owners and Editors publish, Contributors and anyone not on the plan
  // ask. &role=contributor still forces the contributor's page.
  const myRole = roleHere;
  /** Whether this person sees money at a level (each level's Who Sees It). */
  const moneyAt = (depth: number) => seesBudget(getRepo(planID), myRole, depth);
  const canPublish = study.role !== 'contributor' && myRole !== 'Contributor';
  // One word for every role (2026-10-28, the review: "Draft vs Scenario vs Edit" is vocabulary a program manager won't
  // parse). Whether you can publish changes only the draft's last button: Publish, or Ask to Publish.
  const noun = 'draft';
  const yours = 'Your Draft';
  const kind = 'Draft' as const;
  const look = concept === 'pencil-paper' ? 'pencil' : concept;
  const paper = concept === 'drafting' || concept === 'pencil-paper';
  const editStyle = study.edit ?? (concept ? 'band' : 'quiet');

  // A door into your draft from elsewhere (the branch menu on another page): opened here, the URL put right.
  if (params.get('start')) {
    params.set('draft', startDraft(planID, undefined, kind).id);
    history.replaceState(null, '', keep(PLAN_HREF(planID, `&draft=${params.get('draft')}`)));
  }

  let repo: PlanRepo = getRepo(planID);
  let live: PlanDetailDto = await planApi.getPlan(planID);
  let draft: PlanRepoDraft | null = repo.drafts.find((d) => d.id === params.get('draft')) ?? null;
  // A new plan built in its owner's draft (2026-10-29, the second traps audit: back on the plan, an empty Live read as
  // lost work): while Live has nothing, the plan opens on your draft.
  if (!params.get('draft') && !flattenPlan(live.Elements).length) {
    const mine = repo.drafts.find((d) => d.owner === me && !d.transient && d.revisions.length);
    if (mine) {
      draft = mine;
      history.replaceState(null, '', keep(PLAN_HREF(planID, `&draft=${mine.id}`)));
    }
  }
  // A link to a draft that's gone (published or discarded since; 2026-10-29, the traps audit): say so, then show Live.
  if (params.get('draft') && !draft) {
    history.replaceState(null, '', keep(PLAN_HREF(planID)));
    queueMicrotask(() => pushAlert('That draft is closed: it was published or discarded. This is the Live plan.', 'info', 7000));
  }
  let mode: Mode = !draft ? 'live' : draft.owner === me ? 'own' : 'view';
  let shown: PlanDetailDto = draft ? (await draftState(draft)).Plan : live;
  const redo: PlanRevision[] = [];
  let busy = false;
  /** The Schedule's Health filter (set below): kept here so every redraw can reapply it. */
  // Arrived for one health (the index's "3 Late"): the filter starts on it.
  let healthPick: string[] = new URLSearchParams(location.search).getAll('health');
  /** The element drawer open over the chart, if any (2026-10-28: Jamie's drawer, in its draft mode). */
  let elementDrawer: PlanElementDrawerHandle | null = null;
  /** The open drawer's subscription: it re-reads the plan on every draw. */
  const drawerListeners = new Set<() => void>();
  // The drawer reads the page's plan store for its version pin; Live is the plan of record here.
  planStore.set(live);
  /** The drop that checks out a draft: its first draw crossfades, so entering the draft reads as one change of state. */
  let entering = false;
  /** The drafting concept's delta tags: the edit that last moved each row. */
  let editOf: ReadonlyMap<string, number> = new Map();
  /** The pencil concept, after a publish: the rows that just went from pencil to ink, animated once on Live. */
  let inked: ReadonlySet<string> = new Set();
  const today = toLocalIsoDate(new Date());

  // ── The chart and its range ─────────────────────────────────────────────────────────────────────────────────────
  const host = q<HTMLElement>('[data-bcn-plan-gantt]');
  if (concept) {
    root.dataset.concept = concept;
    host.dataset.draftLook = look!;
    host.toggleAttribute('data-paper', paper);
    if (study.marks) host.dataset.pencil = study.marks;
  }
  // Levels (adopted 2026-10-27, the levels study): the full rules by default, Sections once a plan has more than one
  // Program; Budget lives in the readout and About, not the outline.
  const programs = (live.Elements ?? []).filter((e) => !e.ParentPlanElementID).length;
  host.dataset.levels = study.levels ?? (programs > 1 ? 'sections' : 'rules');
  host.dataset.budget = study.budget ?? 'off';
  host.dataset.sched = study.sched ?? 'pin';
  host.dataset.cascade = study.cascade ?? 'spotlight';
  // Solid marks (2026-10-28, option 1 of the bar study): flat bars, grey parents.
  host.dataset.bars = 'solid';
  const tpl = (name: string) => host.querySelector<HTMLTemplateElement>(`[data-gantt-tpl="${name}"]`)!;
  const chart = new PlanGanttChart(host, { caret: tpl('caret'), apply: tpl('apply'), revert: tpl('revert'), badge: tpl('badge') }, {
    label: live.PlanName ?? 'Plan',
    density: (study.density as 'compact' | 'medium' | 'tactile' | null) ?? 'medium',
    // Adopted 2026-10-27: the cascade preview is on (spotlight), Scheduled shows as a pin.
    cascadePreview: study.cascade !== 'none',
    // Adopted 2026-10-27 from the density and levels studies: medium rows, a 360px outline (every name fits once the
    // level words and Budget leave the outline).
    outlineWidth: study.outline ? Number(study.outline) : 360,
    readFlat: issued,
    onRowSelect: (id) => {
      chart.setSelectedId(id);
      void openElement(id);
    },
    onDragEnd: (drag) => void drop(drag),
    onLinkSelect: (link, at) => openLink(link, at),
    rowActions: (row) => rowActionsFor(row.id),
  });
  // The items' span; before any item has dates, the plan's planned window (Plan Settings, General), so the first bar has
  // somewhere to land (2026-10-28, the build-from-scratch review).
  const extent = () => {
    const span = planSpan(shown);
    if (span.start && span.end) return { start: span.start, end: span.end };
    const w = getRepo(planID!).window;
    return w?.start && w.end ? { start: w.start, end: w.end } : null;
  };
  const range = setupPlanGanttRange(q<HTMLElement>('[data-bcn-plan-range]'), {
    extent,
    overview: () =>
      planGanttView(shown, moneyAt)
        .rows.filter((row) => row.kind === 'summary')
        .map((row) => ({ start: row.start, end: row.end, tier: row.depth <= 0 ? 0 : row.depth === 1 ? 1 : 2 })),
    today,
    storageKey: `bcn-plan-range-${planID}`,
    onChange: (next) => chart.setRange(next),
  });

  // ── Navigation ──
  // Another page (Review, the revisions) is a page load; the URL carries the study.
  const go = (href: string): void => {
    location.href = keep(href);
  };

  /**
   * Live, your draft, someone else's: switched in place (2026-10-27, Andy: "switching to edit mode looks really janky,
   * everything disappears"). A reload blanked the page while it rebuilt; now the head, the scope and the chart stay
   * put, only what differs redraws, and the URL follows so Back and a shared link still land on the same state.
   */
  async function switchTo(next: PlanRepoDraft | null, how: { push?: boolean; rise?: boolean } = {}): Promise<void> {
    if (busy) return;
    // An open element drawer closes first, through its guard (its edits belong to the plan it opened on).
    if (elementDrawer && !(await elementDrawer.requestClose())) return;
    repo = getRepo(planID!);
    const target = next ? (repo.drafts.find((d) => d.id === next.id) ?? null) : null;
    if (target?.id === draft?.id && !!target === !!draft) return;
    busy = true;
    draft = target;
    mode = !draft ? 'live' : draft.owner === me ? 'own' : 'view';
    shown = draft ? (await draftState(draft)).Plan : live;
    redo.length = 0;
    if (how.push !== false) history.pushState(null, '', keep(PLAN_HREF(planID!, draft ? `&draft=${draft.id}` : '')));
    // Issued: the bars stand up as your draft opens.
    if (how.rise && issued && mode === 'own') {
      host.setAttribute('data-rise', '');
      setTimeout(() => host.removeAttribute('data-rise'), 900);
    }
    busy = false;
    refresh();
  }
  window.addEventListener('popstate', () => {
    const id = new URLSearchParams(location.search).get('draft');
    void switchTo(id ? (getRepo(planID!).drafts.find((d) => d.id === id) ?? null) : null, { push: false });
  });
  /** The menu's and About's links to Live and the drafts: switched in place, unless asked for a new tab. */
  q<HTMLElement>('[data-prp-draft-counter]').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const pop = q<HTMLElement & { open: boolean }>('[data-prp-branch-popover]');
    requestAnimationFrame(() => (pop.open = true));
  });
  root.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-prp-to]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const pop = q<HTMLElement & { open: boolean }>('[data-prp-branch-popover]');
    pop.open = false;
    const to = a.dataset.prpTo!;
    if (to === 'live') return void switchTo(null);
    if (to === 'start') return void switchTo(startDraft(planID!, undefined, kind), { rise: true });
    void switchTo(getRepo(planID!).drafts.find((d) => d.id === to) ?? null);
  });

  // ── Drops: Live checks out your draft; your draft takes a revision per drop ──
  async function drop(drag: GanttDragEvent): Promise<void> {
    if (busy || mode === 'view') return draw();
    // Issued: Live is read-only; a draft starts only from its door, never from a drag.
    if (issued && mode === 'live') return draw();
    if (mode === 'live') {
      const mine = myDraft(planID!);
      if (mine && mine.revisions.length) {
        // One draft per person: you already have one, so it opens instead of a second one starting.
        return switchTo(mine);
      }
      draft = mine ?? startDraft(planID!, undefined, kind);
      mode = 'own';
      entering = true;
      history.replaceState(null, '', keep(PLAN_HREF(planID!, `&draft=${draft.id}`)));
    }
    return applyEdits(planDraftEditsForDrag(shown, drag));
  }

  /** Your draft takes edits (a drag, or the element drawer's Save) as its next revision. */
  async function applyEdits(edits: PlanDraftEdit[], patch?: { fields?: Record<string, PlanFieldEdit>; budget?: PlanBudget; attributes?: PlanAttributes; note: PlanChangeNote }): Promise<void> {
    if ((!edits.length && !patch) || !draft || mode !== 'own' || busy) return draw();
    busy = true;
    const before = shown;
    const prior = draft!.revisions.at(-1);
    const next = edits.length ? planDraftWithEdits(prior?.overrides ?? [], edits, live, true) : (prior?.overrides ?? []);
    // Dates first: a date change is what the note says; a field or budget change alone says itself.
    let note = patch?.note;
    if (edits.length) {
      const view = await planApi.previewDraft(planID!, next);
      const changes = planCompare(before, view.Plan);
      // What was grabbed, not what came along: an edited item under another edited item (a parent moved with its
      // items) counts as followed, so the note names the parent.
      const ids = new Set(edits.map((e) => e.PlanElementID));
      const carried = new Set<string>();
      for (const id of ids) {
        const el = findPlanElement(before.Elements, id)?.element;
        if (el?.Children?.length) for (const { element } of flattenPlan(el.Children)) carried.add(element.PlanElementID ?? '');
      }
      const own = changes.filter((c) => ids.has(c.id) && !carried.has(c.id));
      if (changes.length || !note) note = revisionNote(own, changes.length - own.length);
    }
    addRevision(planID!, draft!.id, next, note!, {
      fields: patch?.fields ? { ...(prior?.fields ?? {}), ...patch.fields } : undefined,
      budget: patch?.budget ? mergeBudget(prior?.budget ?? {}, patch.budget) : undefined,
      attributes: patch?.attributes ? mergeAttributes(prior?.attributes ?? {}, patch.attributes) : undefined,
    });
    redo.length = 0;
    repo = getRepo(planID!);
    draft = repo.drafts.find((d) => d.id === draft!.id) ?? draft;
    shown = (await draftState(draft!)).Plan;
    busy = false;
    refresh();
  }

  type DrawerEdit = PlanDraftEdit & { fields?: { PlanElementName: string; LevelDepth?: number; IsMilestone: boolean; Notes: string | null } };
  /** What a drawer's Save changes against `base`: its dates as an edit, whatever of its own fields changed, and the
   *  note that says so. Null when nothing did. */
  function drawerChange(edit: DrawerEdit, base: PlanDetailDto): { dates: PlanDraftEdit | null; fields?: Record<string, PlanFieldEdit>; note: PlanChangeNote } | null {
    const el = flattenPlan(base.Elements).find((x) => x.element.PlanElementID === edit.PlanElementID)?.element;
    if (!el) return null;
    const datesMoved = el.StartDate !== edit.StartDate || el.EndDate !== edit.EndDate || el.PlanDateType !== edit.PlanDateType;
    const changed: PlanFieldEdit = {};
    const f = edit.fields;
    if (f && f.PlanElementName !== el.PlanElementName) changed.PlanElementName = f.PlanElementName;
    if (f && f.LevelDepth !== undefined && f.LevelDepth !== el.LevelDepth) changed.LevelDepth = f.LevelDepth;
    if (f && f.IsMilestone !== !!el.IsMilestone) changed.IsMilestone = f.IsMilestone;
    if (f && (f.Notes ?? null) !== (el.Notes ?? null)) changed.Notes = f.Notes;
    const keys = Object.keys(changed) as (keyof PlanFieldEdit)[];
    if (!datesMoved && !keys.length) return null;
    const words: Record<keyof PlanFieldEdit, string> = { PlanElementName: 'Name', LevelDepth: 'Level', IsMilestone: 'Milestone', Notes: 'Notes' };
    // A rename names both; any other field change names the item and what changed.
    const note: PlanChangeNote =
      keys.length === 1 && changed.PlanElementName !== undefined
        ? { action: 'Renamed', subject: el.PlanElementName ?? '', object: changed.PlanElementName }
        : { action: 'Edited', subject: el.PlanElementName ?? '', shift: keys.map((k) => words[k]).join(', ') };
    const dates: PlanDraftEdit = { PlanElementID: edit.PlanElementID, StartDate: edit.StartDate, EndDate: edit.EndDate, PlanDateType: edit.PlanDateType };
    return { dates: datesMoved ? dates : null, fields: keys.length ? { [edit.PlanElementID]: changed } : undefined, note };
  }

  /** The drawer's Save in your draft: its dates as an edit, and whatever of its own fields changed. */
  function saveFromDrawer(edit: DrawerEdit): void {
    const change = drawerChange(edit, shown);
    if (!change) return;
    void applyEdits(change.dates ? [change.dates] : [], change.fields ? { fields: change.fields, note: change.note } : undefined);
  }

  /** From Live (draft first, 2026-10-28): your draft opens, started if need be, and takes the edit. */
  async function saveToMyDraft(edit: DrawerEdit, said?: string): Promise<void> {
    if (!drawerChange(edit, live)) return;
    // The drawer has closed itself; the switch shouldn't ask it again.
    elementDrawer = null;
    await Promise.resolve();
    const mine = myDraft(planID!) ?? startDraft(planID!, undefined, kind);
    await switchTo(mine, { rise: !mine.revisions.length });
    saveFromDrawer(edit);
    pushAlert(said ?? (canPublish ? 'Saved to your draft. Review and Publish when it’s ready.' : 'Saved to your draft. Ask to Publish when it’s ready.'), said ? 'warning' : 'success', 7000);
  }

  /** Publish Now from Live's drawer: straight to Live when nothing else moves; otherwise it goes to your draft. */
  async function publishFromDrawer(edit: DrawerEdit): Promise<void> {
    const change = drawerChange(edit, live);
    if (!change) return;
    if (change.dates) {
      const view = await planApi.previewDraft(planID!, planDraftWithEdits([], [change.dates], live, true));
      const was = new Map(flattenPlan(live.Elements).map(({ element }) => [element.PlanElementID, element]));
      const n = flattenPlan(view.Plan.Elements).filter(({ element: e }) => {
        const w = was.get(e.PlanElementID);
        return e.PlanElementID !== edit.PlanElementID && !e.Children?.length && w && (w.StartDate !== e.StartDate || w.EndDate !== e.EndDate);
      }).length;
      if (n) return saveToMyDraft(edit, `It moves ${n} other ${n === 1 ? 'item' : 'items'}, so it went to your draft for review.`);
    }
    const name = flattenPlan(live.Elements).find((x) => x.element.PlanElementID === edit.PlanElementID)?.element.PlanElementName ?? 'Item';
    const temp = startEditDraft(planID!, name);
    addRevision(planID!, temp.id, change.dates ? planDraftWithEdits([], [change.dates], live, true) : [], change.note, { fields: change.fields });
    const version = await publishDraft(planID!, temp.id);
    await landOnLive();
    pushAlert(`Published as Revision ${version.number}.`, 'success');
  }

  // ── The outline, draft first (2026-10-28, the build-from-scratch review: "you can't build a plan from scratch") ──
  // Add, Move Up, Move Down, Move To, Delete and new links are your draft's next edits, as a drag is; from Live your
  // draft opens first (started if you have none). A new item has a temporary id until the draft is published.
  const newID = () => `new-${Math.random().toString(36).slice(2, 10)}`;
  /** Your draft, opened from Live if need be. False for someone else's draft. */
  async function enterMyDraft(): Promise<boolean> {
    if (mode === 'own' && draft) return true;
    if (mode === 'view') return false;
    const mine = myDraft(planID!) ?? startDraft(planID!, undefined, kind);
    await switchTo(mine, { rise: !mine.revisions.length });
    return mode === 'own' && !!draft;
  }
  /** One change to the plan's shape as your draft's next revision. Deleting an item the draft added drops it, and
   *  everything the draft did to it, as if it had never been. */
  async function shapeEdit(op: DraftStructureOp, note: PlanChangeNote): Promise<void> {
    if (!(await enterMyDraft()) || !draft) return;
    const prior = draft.revisions.at(-1);
    let ops = [...(prior?.structure ?? [])];
    let overrides = prior?.overrides ?? [];
    const added = op.op === 'remove' && ops.some((o) => o.op === 'add' && o.id === op.id);
    if (added) {
      const el = findPlanElement(shown.Elements, op.id)?.element;
      const gone = el ? planElementSubtreeIDs(el) : new Set([op.id]);
      ops = ops.filter((o) => (o.op === 'link' ? !gone.has(o.from) && !gone.has(o.to) : !gone.has(o.id)));
      overrides = overrides.filter((o) => !gone.has(o.PlanElementID));
    } else ops.push(op);
    addRevision(planID!, draft.id, overrides, note, { structure: ops });
    redo.length = 0;
    await reload();
  }
  /** The level a new item under `parent` takes: the next one down (the top level for a new top item). */
  function childLevel(parent: PlanElementDto | null): PlanLevelDto | null {
    return validPlanLevels(shown.Levels, planLevelBounds(parent, null))[0] ?? null;
  }
  function topLevelName(): string {
    return childLevel(null)?.SingularName ?? 'Item';
  }

  /** The drawer in create mode, in your draft: Save adds the item. */
  async function openCreate(parentID: string | null): Promise<void> {
    if (elementDrawer && !(await elementDrawer.requestClose())) return;
    if (!(await enterMyDraft()) || !draft) return;
    const handle = openPlanElementDrawer({
      target: { kind: 'create', parentPlanElementID: parentID },
      onOpenElement: (other) => void openElement(other),
      draft: {
        label: draft.name,
        badge: { text: draft.name, state: 'draft' },
        readOnly: false,
        editsFields: true,
        plan: () => shown,
        subscribe: (listener) => {
          drawerListeners.add(listener);
          return () => drawerListeners.delete(listener);
        },
        save: () => undefined,
        create: (dto) => void shapeEdit({ op: 'add', id: newID(), dto }, { action: 'Added', subject: dto.PlanElementName ?? '' }),
      },
    });
    elementDrawer = handle;
    // Closed (Escape included), focus goes back where it came from, the row (2026-10-29, the second traps audit).
    const from = document.activeElement as HTMLElement | null;
    void handle.closed.then(() => {
      if (elementDrawer === handle) elementDrawer = null;
      setTimeout(() => {
        if (from?.isConnected && (document.activeElement === document.body || !document.activeElement)) from.focus();
      }, 400);
    });
  }

  async function reorder(id: string, direction: 'up' | 'down'): Promise<void> {
    const position = planSiblingPosition(shown.Elements, id);
    const name = findPlanElement(shown.Elements, id)?.element.PlanElementName ?? '';
    if (!position) return;
    await shapeEdit({ op: 'order', id, index: planReorderIndex(position, direction) }, { action: direction === 'up' ? 'Moved Up' : 'Moved Down', subject: name });
  }
  async function moveTo(id: string): Promise<void> {
    const name = findPlanElement(shown.Elements, id)?.element.PlanElementName ?? '';
    const target = await openPlanElementMoveDialog({ planElementName: name, targets: planMoveTargets(shown, id) });
    if (!target) return;
    await shapeEdit({ op: 'move', id, parentId: target.parentPlanElementID ?? null }, { action: 'Moved Under', subject: name, object: target.parentPlanElementID ? target.name : 'the Plan' });
  }
  async function remove(id: string): Promise<void> {
    const element = findPlanElement(shown.Elements, id)?.element;
    if (!element) return;
    const gone = planElementSubtreeIDs(element);
    const rec = recordsFor(planID!);
    const out = rec.transmittals.filter((t) => gone.has(t.elementId) && t.sentAt && !t.closedAt);
    if (out.length) {
      const t = out[0];
      const open = await confirm({
        header: `${element.PlanElementName} Has Sends Still Out`,
        text: `${out.map((x) => `T-${String(x.number).padStart(3, '0')}`).join(', ')} ${out.length === 1 ? 'is' : 'are'} still with ${[...new Set(out.flatMap((x) => x.to))].join(', ')}. Close ${out.length === 1 ? 'it' : 'them'} on ${out.length === 1 ? 'its page' : 'their pages'} first, so the record of what was sent keeps its item.`,
        confirmButtonLabel: `Open T-${String(t.number).padStart(3, '0')}`,
      });
      if (open) location.assign(TRANSMITTAL_HREF(planID!, t.id));
      return;
    }
    const docs = rec.links.filter((l) => gone.has(l.elementId)).length;
    const talk = rec.comments.filter((c) => gone.has(c.elementId)).length;
    const records = [docs ? `${docs} ${docs === 1 ? 'document link' : 'document links'}` : '', talk ? `${talk} ${talk === 1 ? 'comment' : 'comments'}` : ''].filter(Boolean);
    const text = (planElementDeleteConfirmText(element, planElementDeleteImpact(element, shown.Dependencies)) + (records.length ? ` Its ${records.join(' and ')} stay in the plan's records without an item.` : '')).replace('This cannot be undone.', mode === 'live' ? 'It goes to your draft; Live keeps it until the draft is published.' : 'Undo takes it back.');
    const ok = await confirm({ color: 'warn', header: planElementDeleteConfirmHeader(element), text, confirmButtonLabel: 'Delete' });
    if (!ok) return;
    await shapeEdit({ op: 'remove', id }, { action: 'Deleted', subject: element.PlanElementName ?? '' });
  }

  /** Each outline row's + Add (named for the level it adds) and its menu: Move Up, Move Down, Move To, Delete. */
  let rowViews: { plan: PlanDetailDto; views: Record<string, PlanRowActionsView> } | null = null;
  const rowTpl = (name: string) => root.querySelector<HTMLTemplateElement>(`[data-prp-row-tpl="${name}"]`)!;
  function rowActionsFor(id: string): Node | null {
    if (mode === 'view') return null;
    if (rowViews?.plan !== shown) rowViews = { plan: shown, views: planRowActionsViews(shown, true, shown.Levels?.length ?? 0) };
    const v = rowViews.views[id];
    const element = findPlanElement(shown.Elements, id)?.element;
    if (!v || !element) return null;
    const frag = document.createDocumentFragment();
    const level = v.canAddChild ? childLevel(element) : null;
    if (level) {
      const add = rowTpl('add').content.firstElementChild!.cloneNode(true) as HTMLElement;
      const label = `Add ${level.SingularName ?? 'Item'} to ${element.PlanElementName}`;
      add.querySelector('esa-tooltip')?.setAttribute('text', `Add ${level.SingularName ?? 'Item'}`);
      add.querySelector('button')?.setAttribute('aria-label', label);
      add.addEventListener('click', (e) => {
        e.stopPropagation();
        void openCreate(id);
      });
      frag.append(add);
    }
    const menu = rowTpl('menu').content.firstElementChild!.cloneNode(true) as HTMLElement & { items: EsaMenuItem[] };
    menu.querySelector('button')?.setAttribute('aria-label', `Actions for ${element.PlanElementName}`);
    const items: EsaMenuItem[] = [
      { label: 'Move Up', action: 'up', disabled: v.isFirst },
      { label: 'Move Down', action: 'down', disabled: v.isLast },
      { label: 'Move To…', action: 'move', disabled: !v.canMove },
      { label: '', divider: true },
      { label: 'Delete', action: 'delete', variant: 'danger' },
    ];
    void customElements.whenDefined('esa-dropdown-menu').then(() => (menu.items = items));
    menu.addEventListener('click', (e) => e.stopPropagation());
    menu.addEventListener('menu-action', (e) => {
      const action = (e as CustomEvent<string>).detail;
      if (action === 'up' || action === 'down') void reorder(id, action);
      else if (action === 'move') void moveTo(id);
      else if (action === 'delete') void remove(id);
    });
    fillIcons(menu);
    frag.append(menu);
    return frag;
  }

  // ── Import (2026-10-28, the SOW review): rows from a file or a spreadsheet, as new items in your draft ──
  const importer = setupPlanImportDialog(document.querySelector<HTMLElement>('[data-bcn-plan-import]')!);
  async function importItems(): Promise<void> {
    if (mode === 'view') return;
    const result = await importer.open(shown, live.PlanName ?? 'the Plan');
    if (!result || !(await enterMyDraft()) || !draft) return;
    const prior = draft.revisions.at(-1);
    const ops: DraftStructureOp[] = [...(prior?.structure ?? []), ...result.rows.map((r) => ({ op: 'add' as const, id: r.id, dto: r.dto }))];
    // Owners as attributes; a budget spread over the fiscal years its dates run in, as the sample's figures are.
    const attributes: PlanAttributes = Object.fromEntries(result.rows.filter((r) => r.owners.length).map((r) => [r.id, { owners: r.owners }]));
    const budget = spreadBudget({ Elements: result.rows.filter((r) => r.dto.Budget).map((r) => ({ PlanElementID: r.id, StartDate: r.dto.StartDate, EndDate: r.dto.EndDate, Budget: r.dto.Budget, Children: [] })) } as unknown as PlanDetailDto);
    addRevision(planID!, draft.id, prior?.overrides ?? [], { action: 'Imported', subject: `${result.rows.length} ${result.rows.length === 1 ? 'Item' : 'Items'}`, object: result.source }, {
      structure: ops,
      attributes: Object.keys(attributes).length ? mergeAttributes(prior?.attributes ?? {}, attributes) : undefined,
      budget: Object.keys(budget).length ? mergeBudget(prior?.budget ?? {}, budget) : undefined,
    });
    redo.length = 0;
    await reload();
    pushAlert(`Imported ${result.rows.length} ${result.rows.length === 1 ? 'item' : 'items'} into your draft. Review and Publish when it’s ready.`, 'success', 7000);
  }
  q<HTMLElement>('[data-prp-import]').addEventListener('click', () => void importItems());
  q<HTMLElement>('[data-prp-empty-import]').addEventListener('click', () => void importItems());
  q<HTMLElement>('[data-prp-add]').addEventListener('click', () => void openCreate(null));
  q<HTMLElement>('[data-prp-empty-add]').addEventListener('click', () => void openCreate(null));

  /** The drawer's Waits On in a draft (2026-10-28): each change is your draft's next edit; from Live, your draft opens
   *  and the drawer comes back on the same item there. */
  function drawerLinks(id: string) {
    const name = (x: string) => findPlanElement(shown.Elements, x)?.element.PlanElementName ?? '';
    const dep = (depID: string) => (shown.Dependencies ?? []).find((d) => d.PlanElementDependencyID === depID);
    const edit = async (change: (prior: PlanRevision | undefined) => { structure?: DraftStructureOp[]; links?: Record<string, number | null> }, note: PlanChangeNote) => {
      const fromLive = mode === 'live';
      if (fromLive) elementDrawer = null;
      if (!(await enterMyDraft()) || !draft) return;
      const prior = draft.revisions.at(-1);
      addRevision(planID!, draft.id, prior?.overrides ?? [], note, change(prior));
      redo.length = 0;
      await reload();
      if (fromLive) void openElement(id);
    };
    return {
      candidates: (successorID: string) => planApi.predecessorCandidates(planID!, successorID, draft?.revisions.at(-1)?.links, draft?.revisions.at(-1)?.structure),
      add: (from: string, to: string, lag: number) =>
        void edit((prior) => ({ structure: [...(prior?.structure ?? []), { op: 'link', id: newID(), from, to, lag }] }), { action: 'Linked', subject: name(from), object: name(to) }),
      setLag: (depID: string, lag: number) => {
        const d = dep(depID);
        void edit((prior) => ({ links: { ...(prior?.links ?? {}), [depID]: lag } }), { action: 'Lag Set', subject: name(d?.PredecessorPlanElementID ?? ''), object: name(d?.SuccessorPlanElementID ?? ''), shift: `${lag} ${Math.abs(lag) === 1 ? 'day' : 'days'}` });
      },
      remove: (depID: string) => {
        const d = dep(depID);
        void edit((prior) => ({ links: { ...(prior?.links ?? {}), [depID]: null } }), { action: 'Unlinked', subject: name(d?.PredecessorPlanElementID ?? ''), object: name(d?.SuccessorPlanElementID ?? '') });
      },
    };
  }

  /**
   * An element's drawer (2026-10-28, Andy: "does this prototype not have side panels when you click a work element?"):
   * Jamie's BcnPlanElementDrawer in its draft mode. Other people's drafts open it read-only; your draft opens it
   * editable, and Save is the draft's next edit, as a drag is. Live opens it editable too, its Save going to your draft.
   */
  async function openElement(id: string): Promise<void> {
    if (elementDrawer && !(await elementDrawer.requestClose())) return;
    // Live, draft first (2026-10-28, Andy): the drawer edits, and Save goes to your draft (Publish Now when it's safe).
    // Your draft already changing the item: it opens there instead, on the draft's version.
    let liveNote: string | undefined;
    let offerPublish = false;
    if (mode === 'live') {
      const touching = await draftsTouching(planID!, id, live);
      const mine = myDraft(planID!);
      if (mine && touching.some((d) => d.id === mine.id)) {
        await switchTo(mine);
        pushAlert('Your draft already changes this item, so it opens there.', 'info');
        return openElement(id);
      }
      const others = touching.map((d) => firstName(d.owner));
      offerPublish = canPublish && !others.length;
      liveNote = !canPublish
        ? DRAFT_FIRST_ASK
        : others.length
          ? `${others.length === 1 ? `${others[0]}’s draft also changes` : `${others.length} open drafts also change`} this item, so changes save to your draft.`
          : DRAFT_FIRST_NOW;
    }
    const note = mode === 'live' ? liveNote : mode === 'view' ? `${firstName(draft!.owner)}'s draft is read-only. Copy to My Draft to change it.` : undefined;
    const handle = openPlanElementDrawer({
      target: { kind: 'edit', planElementID: id },
      onOpenElement: (other) => void openElement(other),
      draft: {
        label: mode === 'live' ? 'Live Plan' : draft!.name,
        // The page's own badge in the drawer's header (2026-10-28): Live Plan in orange, the draft's name in green.
        badge: { text: mode === 'live' ? 'Live Plan' : draft!.name, state: mode === 'live' ? 'live' : 'draft' },
        readOnly: mode === 'view',
        // Your draft edits every field, not only the dates (2026-10-28, Andy: "those shouldn't be disabled").
        editsFields: mode !== 'view',
        note,
        saveLabel: mode === 'live' ? 'Save to My Draft' : 'Save',
        links: mode === 'view' ? undefined : drawerLinks(id),
        publishNow: offerPublish ? (edit) => void publishFromDrawer(edit) : undefined,
        plan: () => shown,
        subscribe: (listener) => {
          drawerListeners.add(listener);
          return () => drawerListeners.delete(listener);
        },
        save: (edit) => (mode === 'live' ? void saveToMyDraft(edit) : saveFromDrawer(edit)),
        budget: () => budgetSummary(id),
        hideBudget: !seesBudget(repo, myRole, findPlanElement(shown.Elements, id)?.element.LevelDepth),
        onOpenBudget: () => {
          void handle.requestClose().then((closed) => closed && setView('budget', id));
        },
        detail: () => detailOf(id),
      },
    });
    elementDrawer = handle;
    // Closed (Escape included), focus goes back where it came from, the row (2026-10-29, the second traps audit).
    const rowSel = () => root.querySelector<HTMLElement>(`.bcn-plan-gantt__select[data-select="${id}"]`);
    void handle.closed.then(() => {
      if (elementDrawer === handle) elementDrawer = null;
      // After esa-side-dialog's close animation, which hands focus to the page body.
      setTimeout(() => {
        if (document.activeElement === document.body || !document.activeElement) rowSel()?.focus();
      }, 400);
    });
  }

  /** The plan's budget as this view has it: Live's, or the draft's cells over Live's. */
  const currentBudget = (): PlanBudget => (draft && mode !== 'live' ? draftBudget(repo, draft) : budgetAt(repo));
  const dollars = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  /** An element's budget by fiscal year, read-only for the drawer: its own cells, or its children's summed. */
  function budgetSummary(id: string): { rows: { label: string; amount: string }[]; total: string } | null {
    const budget = currentBudget();
    const node = flattenPlan(shown.Elements).find((x) => x.element.PlanElementID === id)?.element;
    if (!node) return null;
    const ids = flattenPlan([node]).map((x) => x.element.PlanElementID ?? '');
    const byYear = new Map<number, number>();
    for (const leaf of ids) for (const [fy, amount] of Object.entries(budget[leaf] ?? {})) byYear.set(Number(fy), (byYear.get(Number(fy)) ?? 0) + amount);
    const years = [...byYear.keys()].sort((a, b) => a - b).filter((fy) => byYear.get(fy));
    const total = years.reduce((sum, fy) => sum + byYear.get(fy)!, 0);
    return { rows: years.map((fy) => ({ label: fiscalYearLabel(fy), amount: dollars.format(byYear.get(fy)!) })), total: dollars.format(total) };
  }

  /** The element's own page (2026-10-28, the configurable element page): in the draft this page shows, if any. */
  function detailOf(id: string): { href: string; label: string } | null {
    const el = flattenPlan(shown.Elements).find((x) => x.element.PlanElementID === id)?.element;
    return el ? { href: ELEMENT_HREF(planID!, id, draft?.id), label: `Open ${el.LevelSingularName ?? 'Item'} Page` } : null;
  }

  // ── Views (2026-10-28, Andy: "a plan has multiple projected views, like the Gantt chart and a spreadsheet") ──
  // Schedule is the Gantt; Budget is the fiscal-year sheet over the same elements. The panel's tabs switch them, the
  // URL keeps the choice (&view=budget), and the drawer's Open in Budget View lands on the element's row.
  // Deliverables (and Documents) are the plan's records as views (2026-10-28): always offered, whatever it tracks.
  type View = 'schedule' | 'budget' | 'documents' | 'deliverables';
  const RECORD_VIEWS: View[] = ['documents', 'deliverables'];
  const viewToggle = document.querySelector<HTMLElement & { options: { label: string; value: string; icon?: string }[]; value: string }>('[data-prp-view-toggle]');
  const asView = (v: string | null | undefined): View => (v === 'budget' || (RECORD_VIEWS as string[]).includes(v ?? '') ? (v as View) : 'schedule');
  let view: View = asView(params.get('view'));
  // A plan tracks a schedule, a budget, or both (its settings, 2026-10-28): the switch offers what it tracks, and
  // steps aside when that's one.
  const VIEW_OPTIONS: Record<View, { label: string; value: string; icon: string }> = {
    schedule: { label: 'Schedule', value: 'schedule', icon: PLAN_ICON_PATHS.calendar },
    budget: { label: 'Budget', value: 'budget', icon: PLAN_ICON_PATHS.sheet },
    documents: { label: 'Documents', value: 'documents', icon: PLAN_ICON_PATHS.files },
    deliverables: { label: 'Deliverables', value: 'deliverables', icon: PLAN_ICON_PATHS.package },
  };
  function applyViews(): void {
    // Budget only for those who see money at every level (Who Sees It, on each level's Budget card).
    const tracks: View[] = [...viewsOf(getRepo(planID!)).filter((v) => v !== 'budget' || seesBudget(getRepo(planID!), myRole)), ...RECORD_VIEWS];
    if (!tracks.includes(view)) view = tracks[0];
    void customElements.whenDefined('esa-button-toggle').then(() => {
      if (!viewToggle) return;
      viewToggle.options = tracks.map((t) => VIEW_OPTIONS[t]);
      viewToggle.value = view;
      viewToggle.hidden = tracks.length < 2;
    });
  }
  applyViews();
  viewToggle?.addEventListener('change', (e) => setView(asView((e as CustomEvent<{ value: string }>).detail?.value ?? viewToggle.value)));
  /** Beside the view's title (2026-10-28, Andy, in place of the H1's badge): which plan you're in, by the plan menu's
   *  dot and name, then, small and italic, why it won't edit. */
  // Draft mode (2026-10-28, Andy: "going into draft mode isn't clear enough... 4-5 options"; he picked fill): in a
  // draft the panel's header fills with the draft owner's color, everything in it white. The other studies stay behind
  // &drafthead= (tint, frame, ribbon, full); &drafthead=none is the plain header. Live is untouched.
  const draftHead = study.drafthead === 'none' ? null : ['fill', 'tint', 'frame', 'ribbon', 'full'].includes(study.drafthead ?? '') ? study.drafthead! : 'fill';
  function drawDraftHead(): void {
    const inDraft = mode !== 'live' && !!draft && !!draftHead;
    root.toggleAttribute('data-drafthead', inDraft);
    if (inDraft) root.dataset.drafthead = draftHead!;
    root.style.setProperty('--prp-draft', draft ? personColor(draft.owner) : '');
    const avatar = q<HTMLElement>('[data-prp-state-avatar]');
    avatar.replaceChildren(...(inDraft && draftHead !== 'ribbon' ? [planAvatar(draft!.owner, 'xs')] : []));
    const ribbon = q<HTMLElement>('[data-prp-ribbon]');
    ribbon.hidden = !(inDraft && draftHead === 'ribbon');
    if (!ribbon.hidden) {
      q<HTMLElement>('[data-prp-ribbon-avatar]').replaceChildren(planAvatar(draft!.owner, 'xs'));
      const whose = mode === 'own' ? 'your draft' : `${firstName(draft!.owner)}'s draft`;
      const name = Object.assign(document.createElement('b'), { textContent: draft!.name });
      q<HTMLElement>('[data-prp-ribbon-text]').replaceChildren('You’re in ', name, `, ${whose}. Live doesn’t change until it’s published.`);
    }
  }
  function drawState(): void {
    drawDraftHead();
    q<HTMLElement>('[data-prp-state] .bcn-prp__state-dot').dataset.dot = mode === 'live' ? 'live' : mode === 'own' ? 'mine' : 'other';
    q<HTMLElement>('[data-prp-state-label]').textContent = mode === 'live' ? 'Live Plan' : draft?.name ?? '';
    q<HTMLElement>('[data-prp-state-note]').textContent = RECORD_VIEWS.includes(view)
      ? 'Records are kept on Live: they read the same in every draft.'
      : mode === 'live'
        ? canPublish ? DRAFT_FIRST : DRAFT_FIRST_ASK
        : mode === 'view'
          ? `${firstName(draft!.owner)}'s draft is read-only. Copy to My Draft to change it.`
          : '';
  }
  function showView(): void {
    root.dataset.view = view;
    root.querySelectorAll<HTMLElement>('[data-prp-pane]').forEach((pane) => (pane.hidden = pane.dataset.prpPane !== view));
    root.querySelectorAll<HTMLElement>('[data-prp-view-title]').forEach((t) => (t.hidden = t.dataset.prpViewTitle !== view));
    if (viewToggle && viewToggle.value !== view) viewToggle.value = view;
    drawState();
  }
  function setView(next: View, focusID?: string): void {
    view = next;
    showView();
    if (next !== 'schedule') params.set('view', next);
    else params.delete('view');
    const url = new URL(location.href);
    if (next !== 'schedule') url.searchParams.set('view', next);
    else url.searchParams.delete('view');
    history.replaceState(history.state, '', url);
    drawSheet();
    drawRecordViews();
    if (focusID) requestAnimationFrame(() => sheet.focus(focusID));
  }
  showView();
  // The record views: Live's tree, Live's attributes (which items are deliverables), each item's page.
  const deliverablesView = setupPlanDeliverablesView(q<HTMLElement>('[data-bcn-plan-deliverables]'), {
    planID: planID!,
    plan: () => live,
    isDeliverable: (id) => !!attributesAt(getRepo(planID!))[id]?.deliverable,
    elementHref: (id) => ELEMENT_HREF(planID!, id),
  });
  const documentsView = setupPlanDocumentsView(q<HTMLElement>('[data-bcn-plan-documents]'), {
    planID: planID!,
    plan: () => live,
    elementHref: (id) => ELEMENT_HREF(planID!, id),
  });
  function drawRecordViews(): void {
    if (view === 'deliverables') deliverablesView.draw();
    if (view === 'documents') documentsView.draw();
  }
  drawRecordViews();

  const sheet = setupPlanBudgetSheet(q<HTMLElement>('[data-bcn-plan-budget-sheet]'), {
    onEdit: (changes) => budgetEdit(changes),
    onOpen: (id) => void openElement(id),
  });
  function drawSheet(): void {
    if (view !== 'budget') return;
    sheet.set({
      plan: shown,
      budget: currentBudget(),
      base: draft && mode !== 'live' ? budgetAt(repo) : null,
      // Live edits too (draft first): the first figure typed opens your draft and lands there.
      editable: mode !== 'view',
      query: q<HTMLElement & { value: string }>('[data-prp-search]').value ?? '',
      heading: planGanttView(shown, moneyAt).outlineHeading,
    });
  }
  /** Cells changed in your draft: one edit. A typed figure is "Budget Set", a deleted one "Budget Cleared", a pasted
   *  block "Budget Pasted" with its count of cells. */
  async function budgetEdit(changes: BudgetChange[]): Promise<void> {
    if (mode === 'view') return drawSheet();
    if (mode === 'live' && !(await enterMyDraft())) return drawSheet();
    const was = currentBudget();
    const real = changes.filter((c) => (was[c.id]?.[String(c.fy)] ?? 0) !== c.value);
    if (!real.length) return drawSheet();
    const patch: PlanBudget = {};
    for (const c of real) patch[c.id] = { ...patch[c.id], [String(c.fy)]: c.value };
    const nameOf = (id: string) => flattenPlan(shown.Elements).find((x) => x.element.PlanElementID === id)?.element.PlanElementName ?? '';
    const one = real[0];
    const rows = new Set(real.map((c) => c.id));
    const note: PlanChangeNote =
      real.length > 1
        ? { action: 'Budget Pasted', subject: rows.size === 1 ? nameOf(one.id) : `${rows.size} Items`, shift: `${real.length} Cells` }
        : one.value === 0
          ? { action: 'Budget Cleared', subject: nameOf(one.id), object: fiscalYearLabel(one.fy) }
          : { action: 'Budget Set', subject: nameOf(one.id), object: fiscalYearLabel(one.fy), shift: dollars.format(one.value) };
    void applyEdits([], { budget: patch, note });
  }

  // ── The schedule as a table (2026-10-28, the SOW review): the same items, edited cell by cell; Show As picks ──
  type ShowAs = 'chart' | 'table';
  const showAsToggle = q<HTMLElement & { value: string; options: { label: string; value: string }[] }>('[data-prp-showas]');
  const tableBox = q<HTMLElement>('[data-prp-table]');
  const itemsTable = setupPlanItemsTable(
    q<HTMLElement>('[data-bcn-plan-items-table]'),
    (changes) => void tableEdit(changes),
    (id, status) => {
      const name = findPlanElement(live.Elements, id)?.element.PlanElementName ?? 'The item';
      const cleared = setStatus(planID!, id, status as ElementStatus);
      pushAlert(`${name}: ${status}, on Live.${cleared ? ' Its earlier health note is cleared.' : ''}`, 'success', 5000);
      draw();
    }
  );
  let showAs: ShowAs = new URLSearchParams(location.search).get('showas') === 'table' ? 'table' : 'chart';
  void customElements.whenDefined('esa-button-toggle').then(() => {
    showAsToggle.options = [
      { label: 'Chart', value: 'chart' },
      { label: 'Table', value: 'table' },
    ];
    showAsToggle.value = showAs;
  });
  showAsToggle.addEventListener('change', (e) => {
    showAs = ((e as CustomEvent<{ value: string }>).detail?.value ?? showAsToggle.value) === 'table' ? 'table' : 'chart';
    drawTable();
  });
  function drawTable(): void {
    root.dataset.showas = showAs;
    tableBox.hidden = showAs !== 'table';
    if (showAs !== 'table') return;
    const attrs = draft && mode !== 'live' ? draftAttributes(repo, draft) : attributesAt(repo);
    itemsTable.set({
      plan: shown,
      owners: Object.fromEntries(Object.entries(attrs).map(([id, a]) => [id, a.owners ?? []])),
      editable: mode !== 'view',
      query: q<HTMLElement & { value: string }>('[data-prp-search]').value ?? '',
      // Status is Live's record: set on items Live has, by anyone working on the plan.
      statuses: Object.fromEntries(flattenPlan(live.Elements).filter(({ element }) => !element.Children?.length).map(({ element }) => [element.PlanElementID ?? '', statusOf(recordsFor(planID!), live, element.PlanElementID ?? '')])),
      canRecord: !!myRole,
      keep: (() => {
        const rows = healthRows();
        if (!rows) return null;
        const parentOf = new Map(flattenPlan(shown.Elements).map(({ element }) => [element.PlanElementID ?? '', element.ParentPlanElementID ?? null]));
        const out = new Set<string>();
        for (const id of rows) for (let at: string | null | undefined = id; at && !out.has(at); at = parentOf.get(at)) out.add(at);
        return out;
      })(),
      deliverables: new Set(Object.entries(attrs).filter(([, a]) => a?.deliverable).map(([id]) => id)),
    });
  }
  /** Cells changed in the table (or a pasted block): one edit of your draft. From Live, your draft opens first. */
  async function tableEdit(changes: ItemChange[]): Promise<void> {
    if (mode === 'view' || !changes.length) return drawTable();
    if (mode === 'live' && !(await enterMyDraft())) return drawTable();
    const byId = new Map(flattenPlan(shown.Elements).map(({ element }) => [element.PlanElementID ?? '', element]));
    const attrs = draft ? draftAttributes(repo, draft) : attributesAt(repo);
    const dates = new Map<string, PlanDraftEdit>();
    const fields: Record<string, PlanFieldEdit> = {};
    const attributes: PlanAttributes = {};
    const words: Record<ItemChange['field'], string> = { name: 'Name', start: 'Start', end: 'End', type: 'Date Type', milestone: 'Milestone', owners: 'Owners', notes: 'Notes' };
    for (const c of changes) {
      const el = byId.get(c.id);
      if (!el) continue;
      if (c.field === 'start' || c.field === 'end' || c.field === 'type') {
        const d = dates.get(c.id) ?? { PlanElementID: c.id, StartDate: el.StartDate ?? null, EndDate: el.EndDate ?? null, PlanDateType: el.PlanDateType ?? PlanDateTypeEnum.Estimated };
        if (c.field === 'start') d.StartDate = c.value as string | null;
        if (c.field === 'end') d.EndDate = c.value as string | null;
        if (c.field === 'type') d.PlanDateType = c.value === 'Scheduled' ? PlanDateTypeEnum.Scheduled : PlanDateTypeEnum.Estimated;
        if (el.IsMilestone) d.EndDate = d.StartDate;
        dates.set(c.id, d);
      } else if (c.field === 'owners') attributes[c.id] = { ...attrs[c.id], owners: c.value as string[] };
      else fields[c.id] = { ...fields[c.id], ...(c.field === 'name' ? { PlanElementName: c.value as string } : c.field === 'notes' ? { Notes: c.value as string | null } : { IsMilestone: c.value as boolean }) };
    }
    const one = changes[0];
    const items = new Set(changes.map((c) => c.id));
    const note: PlanChangeNote =
      changes.length === 1
        ? one.field === 'name'
          ? { action: 'Renamed', subject: byId.get(one.id)?.PlanElementName ?? '', object: String(one.value) }
          : { action: 'Edited', subject: byId.get(one.id)?.PlanElementName ?? '', shift: words[one.field] }
        : { action: 'Edited in the Table', subject: items.size === 1 ? (byId.get(one.id)?.PlanElementName ?? '') : `${items.size} Items`, shift: `${changes.length} Cells` };
    await applyEdits([...dates.values()], { fields: Object.keys(fields).length ? fields : undefined, attributes: Object.keys(attributes).length ? attributes : undefined, note });
  }

  // ── A dependency as an object: change its lag or unlink it. Draft first (2026-10-28, Andy): from Live the edit goes
  // to your draft, which opens, as a drag does; in your draft it's the next revision. Reviewed and published with the
  // rest of the draft. ──
  const linkPop = q<HTMLElement & { open: boolean }>('[data-prp-link-pop]');
  const lagField = q<HTMLElement & { value: string }>('[data-prp-link-lag]');
  let openDep: { id: string; from: string; to: string; lag: number } | null = null;
  const nameOf = (id: string) => flattenPlan(shown.Elements).find((x) => x.element.PlanElementID === id)?.element.PlanElementName ?? '';
  function openLink(link: { fromId: string; toId: string }, at: { x: number; y: number }): void {
    // A click is deliberate (unlike a drag), so even an issued Live takes it: it goes to your draft.
    if (mode === 'view' || busy) return;
    const dep = (shown.Dependencies ?? []).find((d) => d.PredecessorPlanElementID === link.fromId && d.SuccessorPlanElementID === link.toId);
    if (!dep?.PlanElementDependencyID) return;
    openDep = { id: dep.PlanElementDependencyID, from: nameOf(link.fromId), to: nameOf(link.toId), lag: dep.LagDays ?? 0 };
    q<HTMLElement>('[data-prp-link-from]').textContent = openDep.from;
    q<HTMLElement>('[data-prp-link-to]').textContent = openDep.to;
    q<HTMLElement>('[data-prp-link-where]').textContent = mode === 'live' ? 'Saved to your draft, to review and publish with it.' : 'Saved as your draft’s next edit.';
    q<HTMLElement>('[data-prp-link-save] .esa-button__label').textContent = mode === 'live' ? 'Save to My Draft' : 'Save';
    lagField.value = String(openDep.lag);
    const box = q<HTMLElement>('.bcn-prp__main').getBoundingClientRect();
    linkPop.style.left = `${at.x - box.left}px`;
    linkPop.style.top = `${at.y - box.top}px`;
    // Opened on the next frame, so the click that opened it isn't read as a click outside.
    requestAnimationFrame(() => (linkPop.open = true));
  }
  /** A link's edit as your draft's next revision; from Live, your draft (started if need be) opens first. */
  async function linkEdit(lag: number | null, note: PlanChangeNote): Promise<void> {
    if (!openDep) return;
    linkPop.open = false;
    if (mode === 'live') {
      const mine = myDraft(planID!) ?? startDraft(planID!, undefined, kind);
      await switchTo(mine, { rise: !mine.revisions.length });
    }
    if (mode !== 'own' || !draft) return;
    const prior = draft.revisions.at(-1);
    addRevision(planID!, draft.id, prior?.overrides ?? [], note, { links: { ...(prior?.links ?? {}), [openDep.id]: lag } });
    redo.length = 0;
    await reload();
  }
  q<HTMLElement>('[data-prp-link-unlink]').addEventListener('click', () => {
    if (openDep) void linkEdit(null, { action: 'Unlinked', subject: openDep.from, object: openDep.to });
  });
  q<HTMLElement>('[data-prp-link-save]').addEventListener('click', () => {
    if (!openDep) return;
    const lag = Math.round(Number(lagField.value));
    if (!Number.isFinite(lag) || lag === openDep.lag) return void (linkPop.open = false);
    // Lag as a signed count of days: + waits after the predecessor ends, \u2212 overlaps its end.
    void linkEdit(lag, { action: 'Lag Set', subject: openDep.from, object: openDep.to, shift: `${lag < 0 ? '\u2212' : lag > 0 ? '+' : ''}${Math.abs(lag)} ${Math.abs(lag) === 1 ? 'day' : 'days'}` });
  });

  async function undo(): Promise<void> {
    if (mode !== 'own' || !draft?.revisions.length || busy) return;
    const dropped = dropLastRevision(planID!, draft.id);
    if (dropped) redo.push(dropped);
    await reload();
  }

  async function redoStep(): Promise<void> {
    if (mode !== 'own' || !redo.length || busy) return;
    restoreRevision(planID!, draft!.id, redo.pop()!);
    await reload();
  }

  async function reload(): Promise<void> {
    repo = getRepo(planID!);
    draft = draft ? (repo.drafts.find((d) => d.id === draft!.id) ?? null) : null;
    shown = draft ? (await draftState(draft)).Plan : live;
    refresh();
  }

  function refresh(): void {
    repo = getRepo(planID!);
    if (draft) draft = repo.drafts.find((d) => d.id === draft!.id) ?? draft;
    const paint = async () => {
      if (concept === 'drafting' && draft && mode !== 'live') editOf = await editIndex(draft);
      draw();
    };
    if (!entering) return void paint();
    entering = false;
    // Entering a draft is one change of state, so it crossfades (where the browser can).
    const doc = document as Document & { startViewTransition?: (cb: () => Promise<void>) => unknown };
    if (doc.startViewTransition) doc.startViewTransition(paint);
    else void paint();
  }

  /** Which edit last moved each row: replay the draft one revision at a time and note what each one changed. */
  async function editIndex(d: PlanRepoDraft): Promise<Map<string, number>> {
    const out = new Map<string, number>();
    let before = live;
    for (let i = 1; i <= d.revisions.length; i++) {
      const after = (await draftState(d, i)).Plan;
      for (const c of planCompare(before, after)) out.set(c.id, i);
      before = after;
    }
    return out;
  }

  // ── Draw ──────────────────────────────────────────────────────────────────────────────────────────────────────────
  /** Each task bar's and milestone's health, as the chart colors it (Late, At Risk, Blocked, Complete). */
  function rowHealth(): Map<string, GanttRowHealth> {
    const rec = recordsFor(planID!);
    const attrs = draft && mode !== 'live' ? draftAttributes(repo, draft) : attributesAt(repo);
    const tone: Partial<Record<string, GanttRowHealth>> = { Late: 'late', 'At Risk': 'risk', Blocked: 'blocked', Completed: 'done' };
    const out = new Map<string, GanttRowHealth>();
    for (const { element } of flattenPlan(shown.Elements)) {
      if (element.Children?.length) continue;
      const id = element.PlanElementID ?? '';
      const t = tone[healthOf(rec, shown, id, (x) => !!attrs[x]?.deliverable).health];
      if (t) out.set(id, t);
    }
    return out;
  }
  function draw(): void {
    const name = live.PlanName ?? 'Plan';
    const h1 = document.querySelector('.page-layout__title h1');
    const text = h1 && [...h1.childNodes].reverse().find((n) => n.nodeType === Node.TEXT_NODE && n.textContent!.trim());
    if (text) text.textContent = name;
    const crumb = document.querySelector('.breadcrumbs [aria-current="page"], .breadcrumbs span:last-child');
    if (crumb) crumb.textContent = name;
    document.title = draft ? `${draft.name}, ${name} | Beacon` : `${name} | Beacon`;
    drawState();

    drawBar();
    drawStatus();
    drawAside();

    const view = planGanttView(shown, moneyAt);
    chart.setEditable(issued ? mode === 'own' : mode !== 'view');
    drawConcept();
    chart.setAnnotations({
      draft: conceptOverlay(),
      conflicts: planConflicts(shown).map((c) => ({ fromId: c.PredecessorPlanElementID, toId: c.SuccessorPlanElementID })),
      rowNotes: conceptNotes(),
      countsDependents: false,
      paper: paper && mode !== 'live',
      // No title block (2026-10-28, Andy: "Issued, Revision 7" said again what the badge and the strip say).
      titleBlock: null,
      stamp: issued && study.stamp && mode !== 'live' ? 'Draft, not issued' : null,
      rowHealth: rowHealth(),
    });
    range.refresh();
    chart.setData({ rows: view.rows, links: view.links, landmarks: view.landmarks, today, outlineHeading: view.outlineHeading });
    if (healthPick.length || ownerPick) applyHealth();
    drawTable();
    drawerListeners.forEach((listener) => listener());
    // Adding (2026-10-28): the header's Add names the top level; an empty plan says where its first item comes from.
    const top = topLevelName();
    const empty = !flattenPlan(shown.Elements).length;
    q<HTMLElement>('[data-prp-add]').hidden = mode === 'view' || empty;
    q<HTMLElement>('[data-prp-import]').hidden = mode === 'view' || empty;
    q<HTMLElement>('[data-prp-empty-import]').hidden = mode === 'view';
    q<HTMLElement>('[data-prp-add-label]').textContent = `Add ${top}`;
    q<HTMLElement>('[data-prp-empty]').hidden = !empty;
    q<HTMLElement>('[data-prp-legend]').hidden = empty;
    q<HTMLElement>('[data-prp-empty-add]').hidden = mode === 'view';
    q<HTMLElement>('[data-prp-empty-add-label]').textContent = `Add ${top}`;
    q<HTMLElement>('[data-prp-empty] .esa-empty-state__description').textContent =
      mode === 'view' ? 'This draft has no items yet.' : `Start the outline with its first ${top}. ${mode === 'live' ? 'It goes to your draft; ' : ''}Review and Publish takes it to Live.`;
    drawSheet();
  }



  /**
   * What the draft looks like on the chart, by concept: one mark per row (never a ghost of Live), each row the draft
   * changed marked so the concept can draw it (pencil, dimension lines); on Live after a publish, the rows that just
   * inked in.
   */
  function conceptOverlay(): GanttDraftOverlay | null {
    // Night and bench change the room, not the marks: the chart draws the draft as plainly as Live.
    if (!concept || concept === 'night' || concept === 'bench') return null;
    // Issued: your draft marks what it changed with a dark edge, and nothing else; Live draws itself.
    if (issued && mode === 'live') return null;
    if (mode === 'live') {
      if (!inked.size) return null;
      return { baseline: new Map(), marks: new Map([...inked].map((id) => [id, 'inked' as const])), changedWindows: new Set(), ghosts: false };
    }
    const own = new Set((draft?.revisions.at(-1)?.overrides ?? []).map((o) => o.PlanElementID));
    const overlay = planDraftOverlay(live, shown, null, new Set(), own, true);
    const marks = new Map(overlay.marks);
    for (const c of planCompare(live, shown)) marks.set(c.id, 'changed');
    return { ...overlay, marks, ghosts: false, measure: concept === 'drafting', edits: concept === 'drafting' ? editOf : undefined };
  }

  /** In a draft, a changed row's readout says where Live has it. */
  function conceptNotes(): Map<string, { label: string; value: string }[]> {
    if (!concept || mode === 'live') return new Map();
    return new Map(planCompare(live, shown).map((c) => [c.id, [{ label: 'Live', value: formatPlanDateRange(c.fromStart, c.fromEnd, 'en-US') }]]));
  }

  /** The page around the chart, by concept: night dims the chart into its own scheme; bench folds the app away. */
  function drawConcept(): void {
    const inDraft = mode !== 'live';
    host.toggleAttribute('data-in-draft', inDraft);
    if (concept === 'night') {
      // The chart is the room; the band stays the page's neutral, as in every concept.
      if (inDraft) host.dataset.scheme = 'night';
      else delete host.dataset.scheme;
    }
    if (concept === 'bench') {
      document.documentElement.toggleAttribute('data-bench', inDraft);
      const nav = document.querySelector<HTMLElement>('.side-nav');
      const toggle = document.getElementById('sidebar-toggle');
      if (nav && toggle && nav.classList.contains('collapsed') !== inDraft) toggle.click();
      const name = q<HTMLElement>('[data-prp-plan-name]');
      name.hidden = !inDraft;
      name.textContent = live.PlanName ?? '';
    }
  }

  /** The edit-mode study's band and tabs (quiet, the default, is the branch menu and the status line alone). */
  function drawEditStyle(): void {
    const bar = q<HTMLElement>('[data-prp-bar]');
    const banded = editStyle === 'band' && mode !== 'live';
    bar.toggleAttribute('data-band', banded);
    bar.dataset.bandOf = mode;
    q<HTMLElement>('[data-prp-base]').hidden = !banded;
    if (banded && draft) {
      // The band: the branch menu is its name, the base revision beside it, the draft's actions at its end.
      const behind = versionsBehind(repo, draft);
      q<HTMLElement>('[data-prp-base-rev]').textContent = `Based on revision ${draft.baseVersion}`;
      // Issued: the chart's title block says what the draft is based on; the band keeps only a warning that Live moved.
      q<HTMLElement>('[data-prp-base-rev]').hidden = issued;
      q<HTMLElement>('[data-prp-base-behind]').hidden = behind <= 0;
      q<HTMLElement>('[data-prp-base]').hidden = issued && behind <= 0;
      q<HTMLElement>('[data-prp-base-behind-text]').textContent = `Live has ${behind} newer ${behind === 1 ? 'revision' : 'revisions'}`;
      q<HTMLElement>('[data-prp-review]').before(q<HTMLElement>('[data-prp-draft-actions]'));
    }
    const tabs = q<HTMLElement & { options: { label: string; value: string }[]; value: string }>('[data-prp-tabs]');
    const tabbed = editStyle === 'tabs' && mode !== 'view';
    tabs.hidden = !tabbed;
    q<HTMLElement>('[data-prp-branch-popover]').style.display = tabbed ? 'none' : '';
    if (tabbed) {
      void customElements.whenDefined('esa-button-toggle').then(() => {
        tabs.options = [
          { label: 'Live Plan', value: 'live' },
          { label: 'Your Draft', value: 'draft' },
        ];
        tabs.value = mode === 'own' ? 'draft' : 'live';
      });
    }
  }

  function drawBar(): void {
    drawEditStyle();
    q<HTMLElement>('[data-prp-branch-label]').textContent = mode === 'live' ? 'Live Plan' : mode === 'own' ? yours : `${firstName(draft!.owner)}'s Draft`;
    q<HTMLElement>('[data-prp-draft-count]').textContent = String(repo.drafts.length);
    q<HTMLElement>('[data-prp-version-count]').textContent = String(repo.versions.length);
    q<HTMLElement>('[data-prp-draft-noun]').textContent = repo.drafts.length === 1 ? 'Draft' : 'Drafts';
    q<HTMLElement>('[data-prp-version-noun]').textContent = repo.versions.length === 1 ? 'Revision' : 'Revisions';
    q<HTMLAnchorElement>('[data-prp-history-link]').href = keep(REVISIONS_HREF(planID!));
    q<HTMLElement>('[data-prp-edit]').hidden = mode !== 'live';
    const editLabel = q<HTMLElement>('[data-prp-edit] .esa-button__label');
    if (editLabel) editLabel.textContent = 'Edit in a Draft';
    // One primary action per state. Your draft: Review and publish if you can publish, else Ask to publish (then its
    // state). Someone else's: Review and publish when they asked and you can; otherwise Copy to my draft.
    const asked = !!draft?.publishRequestedAt;
    const reviewTheirs = mode === 'view' && canPublish && asked;
    q<HTMLElement>('[data-prp-review]').hidden = !((mode === 'own' && canPublish) || reviewTheirs);
    q<HTMLElement>('[data-prp-ask]').hidden = !(mode === 'own' && !canPublish && !asked);
    q<HTMLElement>('[data-prp-asked]').hidden = !(mode === 'own' && !canPublish && asked);
    q<HTMLElement>('[data-prp-copy]').hidden = !(mode === 'view' && !reviewTheirs);
    q<HTMLElement>('[data-prp-back]').hidden = mode !== 'view';
    const reviewBtn = q<HTMLElement>('[data-prp-review] button');
    setButtonDisabled(reviewBtn as HTMLButtonElement | null, !draft?.revisions.length);
    setButtonDisabled(q<HTMLElement>('[data-prp-ask] button') as HTMLButtonElement | null, !draft?.revisions.length);
    // Sent back: whose word, and what to change, on the owner's draft until they ask again.
    const back = mode === 'own' ? draft?.sentBack : undefined;
    q<HTMLElement>('[data-prp-sentback]').hidden = !back;
    if (back) {
      const when = new Date(back.at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      q<HTMLElement>('[data-prp-sentback-text]').textContent = `${back.by} sent this draft back on ${when}${back.note ? `: “${back.note}”` : '.'} ${canPublish ? 'Make the changes, then Review and Publish.' : 'Make the changes, then Ask to Publish again.'}`;
    }
    drawBranches();
    if (editStyle === 'tabs') q<HTMLElement>('[data-prp-edit]').hidden = true;
  }

  /**
   * esa-popover centres its panel under its anchor (an inline-block around the slotted trigger) and has no start
   * alignment: a lego gap, noted for /request-lego. Workaround: the trigger's wrapper is as wide as the panel with the
   * button at its left, a negative end margin gives the bar its space back, and pointer events pass through the
   * empty part (the button and the panel's rows take them back).
   */
  function alignBranchMenu(): void {
    const pop = q<HTMLElement>('[data-prp-branch-popover]');
    const trigger = q<HTMLElement>('[data-prp-branch-trigger]');
    const button = trigger.querySelector<HTMLElement>('button');
    if (!button) return;
    const PANEL_REM = 20;
    Object.assign(trigger.style, { display: 'inline-block', inlineSize: `${PANEL_REM}rem`, pointerEvents: 'none' });
    button.style.pointerEvents = 'auto';
    Object.assign(pop.style, { pointerEvents: 'none', marginInlineEnd: `calc(${button.getBoundingClientRect().width}px - ${PANEL_REM}rem)` });
    q<HTMLElement>('[data-prp-branches]').style.pointerEvents = 'auto';
  }

  function drawBranches(): void {
    requestAnimationFrame(alignBranchMenu);
    const list = q<HTMLElement>('[data-prp-branches]');
    const latest = latestVersion(repo);
    const row = (to: string, current: boolean, title: string, sub: string, dot: 'live' | 'mine' | 'other' | null = null) => {
      const a = document.createElement('a');
      a.className = 'bcn-prp__branch-row';
      a.href = keep(PLAN_HREF(planID!, to === 'live' ? '' : to === 'start' ? '&start=1' : `&draft=${to}`));
      a.dataset.prpTo = to;
      a.setAttribute('role', 'menuitem');
      if (current) a.setAttribute('aria-current', 'true');
      const text = document.createElement('span');
      text.className = 'bcn-prp__branch-text';
      text.innerHTML = `<span class="bcn-prp__branch-name typography-label-md-strong"></span><span class="bcn-prp__branch-sub typography-body-xs"></span>`;
      text.children[0].textContent = title;
      text.children[1].textContent = sub;
      const check = document.createElement('span');
      check.className = 'bcn-prp__branch-check';
      check.innerHTML = current ? planIcon('check', 16) : '';
      // Which kind of plan it is, as a dot (2026-10-28): the H1 badge's orange for Live, its green for yours, grey for
      // other people's.
      const mark = Object.assign(document.createElement('span'), { className: 'bcn-prp__branch-dot' });
      if (dot) mark.dataset.dot = dot;
      a.append(mark, text, check);
      return a;
    };
    // No draft yet (2026-10-28, Andy: it "literally looks like a draft"): an action, not a row like one. One line, a
    // plus, the link color.
    const startRow = () => {
      const a = row('start', false, '', '');
      a.classList.add('bcn-prp__branch-row--start');
      a.innerHTML = `${planIcon('plus', 16)}<span class="typography-label-md">Start a Draft</span>`;
      return a;
    };
    const head = (text: string, aside = '') => {
      const el = Object.assign(document.createElement('div'), { className: 'bcn-prp__branch-head typography-label-sm-strong', textContent: text });
      if (aside) el.append(Object.assign(document.createElement('span'), { textContent: aside }));
      return el;
    };
    const mine = repo.drafts.find((d) => d.owner === me) ?? null;
    const others = repo.drafts.filter((d) => d.owner !== me);
    const sub = (d: PlanRepoDraft) => {
      const behind = versionsBehind(repo, d);
      return `${d.revisions.length} ${d.revisions.length === 1 ? 'edit' : 'edits'}, ${timeAgo(d.revisions.at(-1)?.at ?? d.createdAt)}${behind > 0 ? `, ${behind} behind Live` : ''}${d.publishRequestedAt ? ', publish requested' : ''}`;
    };
    list.replaceChildren(
      row('live', mode === 'live', 'Live Plan', `Revision ${latest.number}, ${firstName(latest.author)}, ${timeAgo(latest.at)}`, 'live'),
      head('Your Draft'),
      mine ? row(mine.id, mode === 'own', mine.name, sub(mine), 'mine') : startRow(),
      ...(others.length ? [head("Other People's Drafts", 'Read-Only'), ...others.map((d) => row(d.id, draft?.id === d.id, d.name, `${firstName(d.owner)}, ${sub(d)}`, 'other'))] : [])
    );
  }

  function drawStatus(): void {
    const avatarSlot = q<HTMLElement>('[data-prp-status-avatar]');
    const who = q<HTMLElement>('[data-prp-status-who]');
    const message = q<HTMLElement>('[data-prp-status-message]');
    const meta = q<HTMLElement>('[data-prp-status-meta]');
    const actions = q<HTMLElement>('[data-prp-draft-actions]');
    const label = q<HTMLElement>('[data-prp-status-label]');
    const time = q<HTMLTimeElement>('[data-prp-status-time]');
    const when = (iso: string | null) => {
      time.textContent = iso ? stamp(iso) : '';
      time.dateTime = iso ?? '';
      time.title = iso ? new Date(iso).toLocaleString() : '';
    };
    const latest = latestVersion(repo);
    if (mode === 'live') {
      // Named as what it is (2026-10-28): Last update, when, then who did what.
      label.hidden = false;
      label.parentElement!.hidden = false;
      label.textContent = 'Last Update';
      when(latest.at);
      avatarSlot.replaceChildren(planAvatar(latest.author, 'xs'));
      who.textContent = latest.author;
      message.replaceChildren(changeNote(latest.note, latest.message));
      meta.innerHTML = '';
      actions.hidden = true;
      return;
    }
    const d = draft!;
    const last = d.revisions.at(-1);
    avatarSlot.replaceChildren(planAvatar(d.owner, 'xs'));
    const behind = versionsBehind(repo, d);
    const n = d.revisions.length;
    if (editStyle === 'band') {
      // The band names the draft, so the line is its latest edit: Last edit, when, then what. None yet says so alone.
      label.hidden = !last;
      label.parentElement!.hidden = !last;
      label.textContent = 'Last Edit';
      when(last ? last.at : null);
      who.textContent = '';
      message.replaceChildren(last ? changeNote(last.note, last.message) : 'No edits yet');
      meta.innerHTML = '';
    } else {
      label.parentElement!.hidden = true;
      when(null);
      who.textContent = mode === 'own' ? yours : `${firstName(d.owner)}'s Draft`;
      message.replaceChildren(last ? changeNote(last.note, last.message) : 'No changes yet. Drag a bar to start.');
      meta.innerHTML = `<span>${n} ${n === 1 ? 'edit' : 'edits'}, based on revision ${d.baseVersion}${behind > 0 ? `, <b>Live has ${behind} newer ${behind === 1 ? 'revision' : 'revisions'}</b>` : ''}</span>`;
    }
    actions.hidden = mode !== 'own';
    const undoBtn = actions.querySelector<HTMLButtonElement>('[data-prp-undo] button');
    const redoBtn = actions.querySelector<HTMLButtonElement>('[data-prp-redo] button');
    setButtonDisabled(undoBtn, n === 0);
    setButtonDisabled(redoBtn, redo.length === 0);
  }

  /**
   * A draft's changes from Live (2026-10-28, Andy: "as a user I have no idea what you're trying to show"; "what's the
   * best version of this that user needs to see at a glance"). Not the log of each drag, which Undo already walks, but
   * what publishing the draft would change: one block per item the draft changed itself, its name, then each value
   * that differs, named as the Review modal names it (Start, End, Date, Budget, a field's label). Items that only moved
   * because something they wait on moved fold into one line.
   */
  function drawChanges(d: PlanRepoDraft): void {
    const last = d.revisions.at(-1);
    q<HTMLElement>('[data-prp-draft-meta]').textContent = `Started from Revision ${d.baseVersion}. ${last ? `Last edit ${stamp(last.at)}.` : 'No edits yet.'}`;

    const lines = new Map<string, { key: string; value: string; text?: boolean; after?: string }[]>();
    const add = (id: string, key: string, value: string, text = false, after?: string) => lines.set(id, [...(lines.get(id) ?? []), { key, value, text, after }]);
    const dayOf = (iso: string | null) => (iso ? new Date(`${iso.slice(0, 10)}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : '');
    const dayDiff = (a: string | null, b: string | null) => (a && b ? Math.round((Date.parse(b) - Date.parse(a)) / 86_400_000) : 0);
    const own = new Set((last?.overrides ?? []).map((o) => o.PlanElementID));
    const changes = planCompare(live, shown);
    const followed: PlanChange[] = [];
    for (const c of changes) {
      if (c.status === 'added') add(c.id, 'Added', 'New in this draft', true);
      else if (c.status === 'removed') add(c.id, 'Removed', 'Not in this draft', true);
      else if (own.has(c.id)) {
        const start = dayDiff(c.fromStart, c.toStart);
        const end = dayDiff(c.fromEnd, c.toEnd);
        // Where it lands now, after the shift: a whole move is one Dates line; a stretch names the end it moved.
        if (c.milestone) add(c.id, 'Date', signedShift(start || end), false, dayOf(c.toEnd ?? c.toStart));
        else if (start && start === end) add(c.id, 'Dates', signedShift(start), false, `${dayOf(c.toStart)} to ${dayOf(c.toEnd)}`);
        else {
          if (start) add(c.id, 'Start', signedShift(start), false, dayOf(c.toStart));
          if (end) add(c.id, 'End', signedShift(end), false, dayOf(c.toEnd));
        }
        if (c.fromType !== c.toType) add(c.id, 'Date Type', c.toType ?? 'None', true);
      } else followed.push(c);
    }
    // The item's own fields (name, level, milestone, notes), where they now differ from Live.
    const liveById = new Map(flattenPlan(live.Elements).map(({ element }) => [element.PlanElementID ?? '', element]));
    const shownById = new Map(flattenPlan(shown.Elements).map(({ element }) => [element.PlanElementID ?? '', element]));
    for (const [id, edit] of Object.entries(last?.fields ?? {})) {
      const was = liveById.get(id);
      if (!was) continue;
      if (edit.PlanElementName !== undefined && edit.PlanElementName !== was.PlanElementName) add(id, 'Name', `Was ${was.PlanElementName ?? ''}`, true);
      if (edit.LevelDepth !== undefined && edit.LevelDepth !== was.LevelDepth) add(id, 'Level', live.Levels?.find((l) => l.Depth === edit.LevelDepth)?.SingularName ?? String(edit.LevelDepth), true);
      if (edit.IsMilestone !== undefined && edit.IsMilestone !== !!was.IsMilestone) add(id, 'Milestone', edit.IsMilestone ? 'Yes' : 'No', true);
      if (edit.Notes !== undefined && (edit.Notes ?? null) !== (was.Notes ?? null)) add(id, 'Notes', 'Edited', true);
    }
    // Money, net per item, with the fiscal year when it's one.
    for (const m of budgetDiff(budgetAt(repo), draftBudget(repo, d), live, shown)) {
      const where = m.years.length === 1 ? ` in ${fiscalYearLabel(m.years[0].fy)}` : ` across ${m.years.length} years`;
      add(m.id, 'Budget', m.net === 0 ? 'Moved between years' : `${signedDollars(m.net)}${where}`);
    }
    // Owners, the deliverable flag and the plan's fields.
    const config = configOf(repo);
    const before = attributesAt(repo);
    const after = draftAttributes(repo, d);
    const same = (a: unknown, b: unknown) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);
    for (const id of new Set([...Object.keys(before), ...Object.keys(after)])) {
      const a = before[id] ?? {};
      const b = after[id] ?? {};
      if (!same(a.owners, b.owners)) add(id, 'Owners', b.owners?.length ? b.owners.join(', ') : 'None', true);
      if (!!a.deliverable !== !!b.deliverable) add(id, 'Deliverable', b.deliverable ? 'Yes' : 'No', true);
      for (const f of config.fields) {
        const was = a.values?.[f.id];
        const now = b.values?.[f.id];
        if (!same(was, now)) add(id, f.label, now === null || now === undefined || now === '' ? 'Cleared' : Array.isArray(now) ? now.join(', ') : String(now), true);
      }
    }

    // In the plan's order, then anything only Live has.
    const order = [...shownById.keys(), ...changes.filter((c) => c.status === 'removed').map((c) => c.id)];
    const ids = order.filter((id) => lines.has(id));
    q<HTMLOListElement>('[data-prp-change-list]').replaceChildren(
      ...ids.map((id) => {
        const li = document.createElement('li');
        const name = Object.assign(document.createElement('button'), {
          type: 'button',
          className: 'bcn-prp__change-name',
          textContent: shownById.get(id)?.PlanElementName ?? liveById.get(id)?.PlanElementName ?? '',
          title: 'Show it in the chart',
        });
        name.disabled = !shownById.has(id);
        name.addEventListener('click', () => {
          chart.setSelectedId(id);
          void openElement(id);
        });
        const dl = document.createElement('dl');
        for (const line of lines.get(id)!) {
          const dd = document.createElement('dd');
          dd.append(Object.assign(document.createElement('b'), { textContent: line.value }));
          if (line.after) dd.append(Object.assign(document.createElement('span'), { textContent: line.after }));
          if (line.text) dd.dataset.text = '';
          dl.append(Object.assign(document.createElement('dt'), { textContent: line.key }), dd);
        }
        li.append(name, dl);
        return li;
      })
    );
    const count = q<HTMLElement>('[data-prp-change-count]');
    count.hidden = !ids.length;
    const countText = count.querySelector('.esa-badge__text');
    if (countText) countText.textContent = `${ids.length} ${ids.length === 1 ? 'Item' : 'Items'}`;
    const empty = q<HTMLElement>('[data-prp-changes-empty]');
    empty.hidden = ids.length > 0;
    empty.textContent = d.revisions.length ? 'Nothing differs from Live.' : mode === 'own' ? 'No changes yet. Drag a bar, or open an item to edit it.' : 'No changes yet.';

    const fold = q<HTMLElement>('[data-prp-followed]');
    fold.hidden = !followed.length;
    const title = fold.querySelector('.esa-collapsible__title');
    if (title) title.textContent = `${followed.length} ${followed.length === 1 ? 'Item' : 'Items'} Followed`;
    q<HTMLElement>('[data-prp-followed-list]').replaceChildren(
      ...followed.map((c) => {
        const li = document.createElement('li');
        li.append(Object.assign(document.createElement('span'), { textContent: c.name }), Object.assign(document.createElement('span'), { textContent: `${c.endOnly ? 'End ' : ''}${signedShift(c.shiftDays)}` }));
        return li;
      })
    );
  }

  function drawAside(): void {
    // In a draft the pane leads with the draft itself: its edits, newest first, each one a place to go back to.
    q<HTMLElement>('[data-prp-pane-title]').textContent = mode === 'live' ? 'About' : mode === 'own' ? yours : `${firstName(draft!.owner)}'s Draft`;
    const editsSection = q<HTMLElement>('[data-prp-edits]');
    editsSection.hidden = mode === 'live';
    if (draft && mode !== 'live') drawChanges(draft);
    q<HTMLElement>('[data-prp-about-head]').hidden = mode === 'live';
    q<HTMLElement>('[data-prp-desc]').textContent = live.Description ?? '';
    // Span: the items' years; the planned window beside them when one is set, or in their place before any dates.
    const span = planSpan(shown);
    const w = repo.window;
    const years = (a: string, b: string) => {
      const x = new Date(a).getUTCFullYear();
      const y = new Date(b).getUTCFullYear();
      return x === y ? String(x) : `${x}–${y}`;
    };
    const planned = w?.start && w.end ? `Planned ${shortDate(w.start)} to ${shortDate(w.end)}` : '';
    q<HTMLElement>('[data-prp-span]').textContent =
      span.start && span.end ? `${years(span.start, span.end)}${planned ? `. ${planned}` : ''}` : planned || 'No Dates Yet';
    q<HTMLElement>('[data-prp-items]').textContent = String(flattenPlan(shown.Elements).length);
    q<HTMLElement>('[data-prp-deps]').textContent = String(shown.Dependencies?.length ?? 0);
    q<HTMLElement>('[data-prp-tracks]').textContent = viewsOf(repo).map((v) => VIEW_OPTIONS[v].label).join(', ');
    q<HTMLElement>('[data-prp-people]').replaceChildren(
      ...membersOf(repo).map((m) => {
        const li = document.createElement('li');
        li.append(planAvatar(m.name, 'xs'), Object.assign(document.createElement('span'), { className: 'bcn-prp__person-name', textContent: m.name }), Object.assign(document.createElement('span'), { className: 'bcn-prp__person-role', textContent: m.role }));
        return li;
      })
    );
    // Plan settings aren't drafted, so their Edit lives on Live's About only (2026-10-28: beside "Your Draft" it read
    // as editing the draft).
    q<HTMLElement>('[data-prp-settings]').hidden = myRole !== 'Owner' || mode !== 'live';
    q<HTMLElement>('[data-prp-settings-head]').hidden = myRole !== 'Owner' || mode !== 'live';

    const item = (avatarName: string | null, glyph: string | null, title: string, sub: string, href?: string, to?: string) => {
      const el = document.createElement('div');
      el.className = 'bcn-prp__item';
      const lead = avatarName ? planAvatar(avatarName, 'xs') : Object.assign(document.createElement('span'), { innerHTML: '' });
      if (glyph) lead.dataset.glyph = glyph;
      const body = document.createElement('div');
      const name = document.createElement(href ? 'a' : 'b');
      name.textContent = title;
      if (href) (name as HTMLAnchorElement).href = keep(href);
      if (to) name.dataset.prpTo = to;
      const small = document.createElement('small');
      small.textContent = sub;
      body.append(name, small);
      el.append(lead, body);
      return el;
    };
    const latest = latestVersion(repo);
    const named = [...repo.versions].reverse().find((v) => v.label);
    const more = Object.assign(document.createElement('a'), { className: 'bcn-prp__more', href: keep(REVISIONS_HREF(planID!)), textContent: repo.versions.length === 1 ? 'The 1 Revision' : `All ${repo.versions.length} Revisions` });
    more.dataset.prpRevisions = '';
    q<HTMLElement>('[data-prp-releases]').replaceChildren(
      item(latest.author, null, `Revision ${latest.number}`, `${shortDate(latest.at)}, ${firstName(latest.author)}`),
      ...(named ? [item(null, 'tag', named.label!, `Revision ${named.number}, ${shortDate(named.at)}`)] : []),
      more
    );

    const list = q<HTMLUListElement>('[data-prp-draftlist]');
    list.replaceChildren(
      ...repo.drafts.map((d) => {
        const li = document.createElement('li');
        li.append(item(d.owner, null, d.owner === me ? `${d.name} (yours)` : d.name, `${d.revisions.length} ${d.revisions.length === 1 ? 'edit' : 'edits'}, ${timeAgo(d.revisions.at(-1)?.at ?? d.createdAt)}`, PLAN_HREF(planID!, `&draft=${d.id}`), d.id));
        return li;
      })
    );
    if (!repo.drafts.length) list.innerHTML = '<li><small>None open</small></li>';
    fillGlyphs(root);
  }

  // ── Wiring ──────────────────────────────────────────────────────────────────────────────────────────────────────
  q<HTMLElement>('[data-prp-tabs]').addEventListener('change', (e) => {
    const value = (e.currentTarget as HTMLElement & { value: string }).value;
    if (value === 'live' && mode !== 'live') void switchTo(null);
    if (value === 'draft' && mode !== 'own') void switchTo(startDraft(planID!, undefined, kind), { rise: true });
  });
  q<HTMLElement>('[data-prp-edit]').addEventListener('click', () => void switchTo(startDraft(planID!, undefined, kind), { rise: true }));
  // Ask to Publish opens the review (2026-10-29, Andy: "more of a diff view" than a paragraph): each change side by side
  // and on the chart, the request and an optional note at its foot.
  q<HTMLElement>('[data-prp-ask]').addEventListener('click', () => {
    if (!draft || !draft.revisions.length) return;
    void revisions.open(draft.id);
  });
  const onAsked = () => {
    const asked = membersOf(getRepo(planID!)).filter((m) => m.role === 'Owner' || m.role === 'Editor').map((m) => m.name.split(' ')[0]);
    pushAlert(`Asked ${asked.length > 1 ? `${asked.slice(0, -1).join(', ')} or ${asked.at(-1)}` : (asked[0] ?? 'the Owners')} to publish your draft. A new edit withdraws the request.`, 'success', 7000);
    refresh();
  };
  // Revisions in a modal (2026-10-28): the history from the Revisions link and About; a draft's review from Review and
  // Publish. A publish or a restore lands back here, on Live, without a reload.
  const revisions = setupPlanRevisionsDialog({ planID: planID!, canPublish, concept, onLanded: landOnLive, onAsked });
  // ── The plan's setup (2026-10-28): its Owners edit it from About; saved, the page takes it in; deleted, the index ──
  // ── The plan's setup (2026-10-28): its Owners edit it from About; saved, the page takes it in; deleted, the index;
  //    a level's Customize Page, that item's page ──
  const setup = setupPlanSetupDialog(document.querySelector<HTMLElement>('[data-bcn-plan-setup]')!);
  q<HTMLElement>('[data-prp-download]').addEventListener('click', () => {
    const where = mode === 'live' ? 'Live' : draft ? draft.name : 'Draft';
    sheet.download(`${(shown.PlanName ?? 'Plan').replace(/[\\/:*?"<>|]/g, '')} Budget, ${where}, ${toLocalIsoDate(new Date())}.csv`);
  });
  q<HTMLElement>('[data-prp-settings-head]').addEventListener('click', () => q<HTMLElement>('[data-prp-settings] button').click());
  q<HTMLElement>('[data-prp-settings]').addEventListener('click', async () => {
    const result = await setup.open(planID!);
    if (result?.kind === 'deleted') return void location.assign(keep(withBase('/prototypes/plans-repo/')));
    if (result?.kind === 'customize') return void location.assign(CUSTOMIZE_HREF(planID!, result.elementId));
    if (result?.kind !== 'saved') return;
    live = await planApi.getPlan(planID!);
    if (mode === 'live') {
      planStore.set(live);
      shown = live;
    }
    applyViews();
    showView();
    refresh();
  });

  async function landOnLive(): Promise<void> {
    live = await planApi.getPlan(planID!);
    planStore.set(live);
    repo = getRepo(planID!);
    if (draft) {
      draft = null;
      mode = 'live';
      redo.length = 0;
      history.pushState(null, '', keep(PLAN_HREF(planID!)));
    }
    shown = live;
    refresh();
    drawNotice();
  }

  /** The newest word left for the viewer on this plan: someone published their draft. */
  function drawNotice(): void {
    const notice = noticesFor(planID!, me).at(-1) ?? null;
    const box = q<HTMLElement>('[data-prp-notice]');
    box.hidden = !notice;
    if (!notice) return;
    const when = new Date(notice.at);
    // As data, like every change line (2026-10-28): what, then who and when.
    q<HTMLElement>('[data-prp-notice-text]').replaceChildren(
      changeNote({ action: 'Published', subject: notice.draftName, object: `Revision ${notice.version}` }),
      Object.assign(document.createElement('span'), {
        className: 'bcn-prp__notice-meta',
        textContent: `${notice.by}, ${when.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, ${when.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`,
      })
    );
    box.dataset.noticeId = notice.id;
    box.dataset.version = String(notice.version);
  }
  q<HTMLElement>('[data-prp-notice-dismiss]').addEventListener('click', () => {
    const id = q<HTMLElement>('[data-prp-notice]').dataset.noticeId;
    if (id) dismissNotice(planID!, id);
    drawNotice();
  });
  q<HTMLElement>('[data-prp-notice-view]').addEventListener('click', () => void revisions.open(null, Number(q<HTMLElement>('[data-prp-notice]').dataset.version)));
  drawNotice();
  q<HTMLElement>('[data-prp-review]').addEventListener('click', () => draft && void revisions.open(draft.id));
  q<HTMLElement>('[data-prp-back]').addEventListener('click', () => void switchTo(null));
  q<HTMLElement>('[data-prp-history-link]').setAttribute('data-prp-revisions', '');
  // Arrived for the revisions (the index's count, the old /revisions/ link): the modal opens over the plan.
  if (params.get('revisions') === '1') void revisions.open(null);
  root.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest('a[data-prp-revisions]');
    if (!a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    void revisions.open(null);
  });
  /** The page's guard: esa-confirm-dialog, answered as a promise. A dismiss (Esc, the backdrop) is a no. */
  type ConfirmEl = HTMLElement & { heading: string; message: string; confirmLabel: string; cancelLabel: string; open: boolean };
  const guard = q<ConfirmEl>('[data-prp-confirm]');
  // Its buttons centered under the centered icon, heading and message (2026-10-28, Andy). esa-confirm-dialog has no
  // hook or part for its footer, so the one rule goes into its shadow root: a hub gap, noted for /request-lego (the
  // centered body suggests a centered footer as the lego's default).
  void customElements.whenDefined('esa-confirm-dialog').then(async () => {
    await (guard as HTMLElement & { updateComplete?: Promise<unknown> }).updateComplete;
    const sheet = new CSSStyleSheet();
    sheet.replaceSync('.esa-confirm-dialog__footer { justify-content: center; }');
    if (guard.shadowRoot) guard.shadowRoot.adoptedStyleSheets = [...guard.shadowRoot.adoptedStyleSheets, sheet];
  });
  const ask = (heading: string, message: string, confirmLabel: string): Promise<boolean> =>
    new Promise((resolve) => {
      Object.assign(guard, { heading, message, confirmLabel, cancelLabel: 'Keep Editing' });
      guard.addEventListener('resolved', (e) => resolve((e as CustomEvent<{ confirmed: boolean }>).detail.confirmed), { once: true });
      guard.open = true;
    });
  q<HTMLElement>('[data-prp-copy]').addEventListener('click', async () => {
    const mine = myDraft(planID!);
    const edits = mine?.revisions.length ?? 0;
    if (edits && !(await ask(`Replace ${mine!.name}?`, `Your draft and its ${edits} ${edits === 1 ? 'edit' : 'edits'} are replaced by a copy of ${firstName(draft!.owner)}'s. This can't be undone.`, 'Replace My Draft'))) return;
    void switchTo(startDraft(planID!, draft!, kind), { rise: true });
  });
  q<HTMLElement>('[data-prp-discard]').addEventListener('click', async () => {
    if (!draft) return;
    const edits = draft.revisions.length;
    if (edits && !(await ask(`Discard ${draft.name}?`, `${edits === 1 ? 'Its 1 edit is' : `Its ${edits} edits are`} deleted. Live is not affected. This can't be undone.`, 'Discard Draft'))) return;
    discardDraft(planID!, draft.id);
    void switchTo(null);
  });
  q<HTMLElement>('[data-prp-undo]').addEventListener('click', () => void undo());
  q<HTMLElement>('[data-prp-redo]').addEventListener('click', () => void redoStep());
  document.addEventListener('keydown', (e) => {
    if (!(e.ctrlKey || e.metaKey) || e.key.toLowerCase() !== 'z' || mode !== 'own') return;
    const t = e.target as HTMLElement | null;
    if (t?.closest('input, textarea, [contenteditable]')) return;
    e.preventDefault();
    void (e.shiftKey ? redoStep() : undo());
  });


  // ── Health (2026-10-28, the SOW review): the whole plan's late, at-risk, blocked and due-soon work, on the chart ──
  type FacetEl = HTMLElement & { options: { value: string; label: string }[]; _selected: string[] };
  const healthFacet = q<FacetEl>('[data-prp-health]');
  const DUE_SOON = 'Due in 30 Days';
  void customElements.whenDefined('esa-filter-dropdown').then(() => {
    healthFacet.options = ['Late', 'At Risk', DUE_SOON, 'Blocked', 'Completed'].map((h) => ({ value: h, label: h }));
    if (healthPick.length) healthFacet._selected = [...healthPick];
  });
  // Owner (2026-10-29, the second traps audit: a Contributor told to update his tasks opened every row to find them):
  // Mine, or one owner, a person or an organization.
  const ownerFacet = q<FacetEl>('[data-prp-owner]');
  let ownerPick = new URLSearchParams(location.search).get('owner') ?? '';
  const MINE = 'mine';
  function drawOwnerFacet(): void {
    const attrs = draft && mode !== 'live' ? draftAttributes(repo, draft) : attributesAt(repo);
    const names = [...new Set(Object.values(attrs).flatMap((a) => a?.owners ?? []))].sort();
    ownerFacet.options = [{ value: MINE, label: 'Mine' }, ...names.map((n) => ({ value: n, label: n }))];
    if (ownerPick) ownerFacet._selected = [ownerPick];
  }
  void customElements.whenDefined('esa-filter-dropdown').then(drawOwnerFacet);
  ownerFacet.addEventListener('selection-change', (e) => {
    const v = (e as CustomEvent<{ value?: string | string[] }>).detail?.value;
    ownerPick = (Array.isArray(v) ? v[0] : v) ?? '';
    applyHealth();
    drawTable();
  });
  const ownedBy = (owners: string[] | undefined, pick: string) => !!owners?.some((o) => (pick === MINE ? o === me || o === orgOf(me) : o === pick));
  /** The tasks and milestones the Health and Owner filters keep, or null for every row. */
  function healthRows(): Set<string> | null {
    if (!healthPick.length && !ownerPick) return null;
    const rec = recordsFor(planID!);
    const attrs = draft && mode !== 'live' ? draftAttributes(repo, draft) : attributesAt(repo);
    const todayIso = toLocalIsoDate(new Date());
    const soon = toLocalIsoDate(new Date(Date.now() + 30 * 86_400_000));
    const out = new Set<string>();
    for (const { element } of flattenPlan(shown.Elements)) {
      if (element.Children?.length) continue;
      const id = element.PlanElementID ?? '';
      const h = healthOf(rec, shown, id, (x) => !!attrs[x]?.deliverable);
      const end = element.EndDate ?? element.StartDate ?? null;
      const dueSoon = h.health !== 'Completed' && !!end && end >= todayIso && end <= soon;
      const healthOk = !healthPick.length || healthPick.includes(h.health) || (healthPick.includes(DUE_SOON) && dueSoon);
      if (healthOk && (!ownerPick || ownedBy(attrs[id]?.owners, ownerPick))) out.add(id);
    }
    return out;
  }
  function applyHealth(): void {
    const rows = healthRows();
    chart.setRowFilter(rows && rows.size ? rows : rows ? new Set(['\u0000']) : null);
    const none = q<HTMLElement>('[data-prp-no-match]');
    none.hidden = !rows || rows.size > 0;
    if (rows && !rows.size) {
      const whose = ownerPick ? (ownerPick === MINE ? ' of Yours' : ` for ${ownerPick}`) : '';
      none.querySelector('.esa-empty-state__title')!.textContent = healthPick.length ? `Nothing ${healthPick.join(' or ')}${whose}` : `No Items${whose}`;
      none.querySelector('.esa-empty-state__description')!.textContent = 'Clear the filters to see every item.';
    }
    // The empty state's button clears what emptied it (2026-10-29: it said Clear Search under the Health filter).
    q<HTMLElement>('[data-prp-search-clear-label]').textContent = rows && !rows.size ? 'Clear Filters' : 'Clear Search';
  }
  healthFacet.addEventListener('selection-change', (e) => {
    const v = (e as CustomEvent<{ value?: string | string[] }>).detail?.value;
    healthPick = Array.isArray(v) ? v : v ? [v] : [];
    applyHealth();
    drawTable();
  });

  // ── Search (2026-10-27): narrows the rows to the matches, their parents and contents; the names mark the hits ──
  const search = q<HTMLElement & { value: string }>('[data-prp-search]');
  const noMatch = q<HTMLElement>('[data-prp-no-match]');
  let searchTimer = 0;
  const applySearch = () => {
    const text = (search.value ?? '').trim();
    const found = chart.setFilter(text);
    noMatch.hidden = !text || found > 0;
    if (text && !found) {
      noMatch.querySelector('.esa-empty-state__title')!.textContent = `Nothing Matches “${text}”`;
      noMatch.querySelector('.esa-empty-state__description')!.textContent = 'Try another word.';
    }
    drawSheet();
    drawTable();
  };
  search.addEventListener('change', () => {
    clearTimeout(searchTimer);
    searchTimer = window.setTimeout(applySearch, 120);
  });
  search.addEventListener('keydown', (e) => {
    if ((e as KeyboardEvent).key !== 'Escape' || !search.value) return;
    search.value = '';
    applySearch();
  });
  q<HTMLElement>('[data-prp-search-clear]').addEventListener('click', () => {
    if ((healthPick.length || ownerPick) && q<HTMLElement>('[data-prp-search-clear-label]').textContent === 'Clear Filters') {
      healthPick = [];
      healthFacet._selected = [];
      ownerPick = '';
      ownerFacet._selected = [];
      applyHealth();
      return;
    }
    search.value = '';
    applySearch();
    search.focus();
  });
  // About folds into a rail from its own header (the setup wizard's Library), remembered in this browser.
  const ABOUT_KEY = 'bcn-prp-about';
  const setAbout = (open: boolean) => {
    root.dataset.about = open ? 'open' : 'closed';
    try {
      localStorage.setItem(ABOUT_KEY, root.dataset.about);
    } catch {
      /* a blocked store keeps this page's state only */
    }
  };
  try {
    // About is folded by default below 1600px wide (the density study); a choice made in this browser wins.
    const remembered = localStorage.getItem(ABOUT_KEY);
    if (study.about) root.dataset.about = study.about;
    else if (remembered) root.dataset.about = remembered;
    else if (window.innerWidth < 1600) root.dataset.about = 'closed';
  } catch {
    /* as above */
  }
  q<HTMLElement>('[data-prp-about-close]').addEventListener('click', () => setAbout(false));
  q<HTMLElement>('[data-prp-about-open]').addEventListener('click', () => setAbout(true));
  // The pencil concept: a publish just landed, so the rows it changed ink in once.
  if (look === 'pencil' && mode === 'live') {
    try {
      const key = `bcn-prp-inked-${planID}`;
      inked = new Set(JSON.parse(sessionStorage.getItem(key) ?? '[]') as string[]);
      sessionStorage.removeItem(key);
      if (inked.size) setTimeout(() => ((inked = new Set()), draw()), 1600);
    } catch {
      /* a blocked store just skips the moment */
    }
  }
  fillIcons(root);
  if (concept === 'drafting' && draft && mode !== 'live') editOf = await editIndex(draft);
  draw();
  // From an element's page (Open in Plan, Open the Sheet): that item selected, in the view it came for.
  const focus = params.get('el');
  if (focus) {
    if (view === 'budget') requestAnimationFrame(() => sheet.focus(focus));
    else {
      chart.setSelectedId(focus);
      requestAnimationFrame(() => host.querySelector(`[data-row-id="${CSS.escape(focus)}"]`)?.scrollIntoView({ block: 'center' }));
    }
  }
}
