// <BcnPlanWorkspace>'s runtime: Beacon's PlanGanttComponent class (pages/plan-gantt/plan-gantt.component.ts on
// origin/develop, Jamie Quishenberry) — the page that turns a plan into the Gantt and orchestrates everything around
// it. Her rules are imported, not restated: the tree walk (plan-gantt-rows), the row actions (plan-row-actions), Move
// plan's start and description (plan-shift), the notices (plan-version). Her RxJS pipelines become promises and plain
// state with the same orderings:
//
//   - plan → view → Gantt redraw, through planStore (every drawer's applyPlanChange lands there too).
//   - Plan settings / Move plan → schedule preview / element drawer (one at a time, swapped through its guard).
//   - row actions with one action in flight per element; Delete closes a drawer showing what it removed.
//   - live refresh: the plan's status is polled every 10s; someone else's version is refetched and redrawn with a
//     toast once nothing is in hand; a deleted plan sends the viewer back to the list; a refused write opens the
//     "This plan has changed" dialog, whose Reload closes every drawer and refetches.
//
// DRAFTS (new design, replacing her edit mode — "Plan Editing: Proposed Direction", 2026-10-19). Two editing routes:
// drawers change the shared plan carefully, as before; drafts are where a planner tries date changes freely on the
// Gantt. The Gantt opens on the live plan, read-only. New draft opens a private scratch copy; Drafts lists the named
// ones. Inside a draft every drop applies at once — no Apply / Revert popup — and Undo / Redo take it back; the
// cascade still runs, on the server, so the dragged bar lands at once and the bars it pushes follow a moment later,
// marked pending. The live plan shows as baseline bars behind, and broken dependencies are drawn on the chart. A draft
// approves once, at Publish. It stores only the planner's own edits and follows the live plan as it changes.
//
// APPROXIMATIONS: rights are all granted (PLAN_RIGHTS); her row menu trigger's [loadingButton] shows as the menu's
// items disabled while the action is out; menu items carry no icons (esa-dropdown-menu draws an item icon as a dot,
// so they are left off); the out-of-order guard (acceptPlan) is the write queue's serialisation instead.

import { PlanGanttChart } from './plan-gantt-chart';
import { fillIcons } from '../../lib/planning/icons';
import { openPlanElementDrawer, type PlanElementDrawerDraft, type PlanElementDrawerHandle } from './plan-element-drawer';
import { openPlanSettingsDrawer } from './plan-settings-drawer';
import { openPlanMoveDialog } from './plan-move-dialog';
import { openPlanSchedulePreview } from './plan-schedule-preview';
import { openPlanElementMoveDialog } from './plan-element-move-dialog';
import { openPlanDraftsDrawer } from './plan-drafts-drawer';
import { openPlanDraftNameDialog } from './plan-draft-name-dialog';
import { openPlanPublishDialog } from './plan-publish-dialog';
import { setupPlanDraftBar, type PlanDraftBarState } from './plan-draft-bar';
import { setupPlanGanttRange } from './plan-gantt-range';
import type { GanttRange } from './plan-gantt-chart';
import type { GanttDragEvent } from '../../lib/planning/gantt-types';
import type { PlanDetailDto, PlanStatusDto } from '../../lib/planning/model';
import { HttpErrorResponse } from '../../lib/planning/ng-shim';
import { planGanttView } from '../../lib/planning/plan-gantt-rows';
import { planConflicts } from '../../lib/planning/plan-conflicts';
import type { PlanConflictDto, PlanDraftDto, PlanDraftOverrideDto, PlanDraftViewDto } from '../../lib/planning/plan-draft-model';
import {
  planDraftChangeLine,
  planDraftDeltas,
  planDraftDownstream,
  planDraftEditsForDrag,
  planDraftOptimistic,
  planDraftOverlay,
  planDraftPushable,
  planDraftPushDependents,
  planDraftRowNotes,
  planDraftUpdatedLabel,
  planDraftWithEdits,
  type PlanDraftEdit,
} from '../../lib/planning/plan-draft';
import { findPlanElement, samePlanElementDrawerTarget, selectedPlanElementID, type PlanElementDrawerTarget } from '../../lib/planning/plan-element';
import {
  hasPlanRowMenu,
  planElementDeleteConfirmHeader,
  planElementDeleteConfirmText,
  planElementDeleteImpact,
  planElementSubtreeIDs,
  planMoveTargets,
  planReorderIndex,
  planRowActionsViews,
  planSiblingPosition,
  type PlanReorderDirection,
} from '../../lib/planning/plan-row-actions';
import { canOpenPlanSettings } from '../../lib/planning/plan-settings';
import { planCurrentStart, planShiftDescription } from '../../lib/planning/plan-shift';
import { PlanScheduleChangeKind } from '../../lib/planning/plan-schedule-preview';
import { planDeletedNotice, planUpdatedNotice } from '../../lib/planning/plan-version';
import {
  PLAN_RIGHTS,
  PLAN_RULES,
  PlanConflictAnswered,
  applyPlanChange,
  closeAllSideDialogs,
  confirm,
  confirmVersionConflict,
  isOwnVersion,
  onVersionConflict,
  planApi,
  planStore,
  planWrite,
  plansHref,
  pushAlert,
  toLocalIsoDate,
} from '../../lib/planning/plan-page';
import { currentUserName } from '../../lib/planning/plan-server';
import { onPlanPresence, planPresence, setPlanPresence } from '../../lib/planning/plan-presence';
import { onPlanUnsavedChanges, planUnsavedChanges } from '../../lib/planning/plan-unsaved';
import type { EsaMenuItem } from '@esa/ecology/esa-dropdown-menu';

type PlanRowVerb = 'reorder' | 'move' | 'delete';

/** The draft open on the Gantt. */
interface DraftSession {
  draft: PlanDraftDto;
  /** The viewer owns it: they edit and publish it. Anyone else's draft opens view-only. */
  own: boolean;
  overrides: PlanDraftOverrideDto[];
  past: PlanDraftOverrideDto[][];
  future: PlanDraftOverrideDto[][];
  /** The server's last replay of the draft against the live plan. */
  view: PlanDraftViewDto | null;
  /** What the chart draws: the replay, or the replay with a drop applied while its cascade is out. */
  shown: PlanDetailDto;
  /** Bars a drop's cascade could reach, marked until the replay lands. */
  pending: Set<string>;
  /** What the last drop moved, marked as the planner's until the replay says otherwise. */
  justEdited: Set<string>;
  viewSeq: number;
  saveSeq: number;
  saveState: 'saved' | 'saving' | 'failed';
}

const PLAN_NOTICE_MS = 5000;
/** PlanStatusService's poll interval. */
const PLAN_STATUS_POLL_MS = 10_000;
const LOCALE = 'en-US';
/** How many steps Undo goes back. */
const UNDO_DEPTH = 100;
/** The drag behaviour the prototype tests (open question 6), remembered per browser. */
const CASCADE_PREF_KEY = 'bcn-plan-draft-cascade';
const COMPARE_PREF_KEY = 'bcn-plan-draft-compare';

const ROW_MENU = { up: 'up', down: 'down', move: 'move', delete: 'delete' } as const;
const MORE_MENU = { move: 'move-plan', settings: 'settings' } as const;

function readCascadePref(): boolean {
  try {
    return localStorage.getItem(CASCADE_PREF_KEY) !== 'move-only';
  } catch {
    return true;
  }
}

/** "Compare with live plan" (2026-10-21): the ghosts, changed marks and Change column, on by default. */
function readComparePref(): boolean {
  try {
    return localStorage.getItem(COMPARE_PREF_KEY) !== 'off';
  } catch {
    return true;
  }
}

function writeComparePref(compare: boolean): void {
  try {
    localStorage.setItem(COMPARE_PREF_KEY, compare ? 'on' : 'off');
  } catch {
    /* a blocked store keeps the choice for this page only */
  }
}

function writeCascadePref(cascade: boolean): void {
  try {
    localStorage.setItem(CASCADE_PREF_KEY, cascade ? 'cascade' : 'move-only');
  } catch {
    /* a blocked store keeps the choice for this page only */
  }
}

export function setupPlanWorkspace(root: HTMLElement): void {
  const q = <T extends Element>(sel: string) => root.querySelector<T>(sel)!;
  const host = q<HTMLElement>('[data-bcn-plan-gantt]');
  const tpl = (name: string) => host.querySelector<HTMLTemplateElement>(`[data-gantt-tpl="${name}"]`)!;
  const rowTpl = (name: string) => root.querySelector<HTMLTemplateElement>(`[data-pw-tpl="${name}"]`)!;
  const recover = q<HTMLElement>('[data-pw-recover]');
  const empty = q<HTMLElement>('[data-pw-empty]');
  // The chart's toolbar (new): Drafts with its count (New draft is in its list) and Add <top level>. Move plan and Plan
  // settings are in the page header's More menu.
  const addButton = q<HTMLElement>('[data-pw-add]');
  const draftsButton = q<HTMLElement>('[data-pw-drafts]');
  const draftsCount = q<HTMLElement>('[data-pw-drafts-count]');
  const more = document.querySelector<HTMLElement & { items: EsaMenuItem[] }>('[data-plan-more]')!;
  const presenceLine = q<HTMLElement>('[data-pw-presence]');
  fillIcons(root);
  let draftCount = 0;
  let moreKey = '';

  const rights = PLAN_RIGHTS;
  const today = toLocalIsoDate(new Date());
  const me = currentUserName();

  // ── State (her signals, and the draft's) ──
  let pendingRowActions: Record<string, PlanRowVerb> = {};
  let selectedElementID: string | null = null;
  let elementDrawer: PlanElementDrawerHandle | null = null;
  let conflictOpen = false;
  let deferredStatus: PlanStatusDto | null = null;
  let refreshing = false;
  let session: DraftSession | null = null;
  /** The viewer's scratch copy left from last time, offered back until they continue or discard it. */
  let scratchOffer: PlanDraftDto | null = null;
  let cascadeDrags = readCascadePref();
  let compareLive = readComparePref();
  let draftSaves: Promise<unknown> = Promise.resolve();
  const draftListeners = new Set<() => void>();

  const plan = () => planStore.plan;
  const planID = () => plan().PlanID ?? '';

  const chart = new PlanGanttChart(host, { caret: tpl('caret'), apply: tpl('apply'), revert: tpl('revert'), badge: tpl('badge') }, {
    label: plan().PlanName ?? '',
    rowActions: (row) => (session ? null : rowActionsFor(row.id)),
    onRowSelect: (id) => selectElement(id),
    onDragEnd: (drag) => draftDrop(drag),
  });

  // The chart area takes the draft's card colour while a draft is open (EXPERIMENT 2026-10-21).
  const chartArea = q<HTMLElement>('.bcn-plan-workspace__chart');
  // In a draft the page header is the draft's: its name as the title, a Draft badge, and its actions.
  const draftTag = document.querySelector<HTMLElement>('[data-plan-draft-tag]');
  // How to edit: a note on the page while a draft is open, until dismissed (it comes back with the next draft).
  const instructions = q<HTMLElement>('[data-pw-instructions]');
  let instructionsDismissed = false;
  q<HTMLElement>('[data-pw-dismiss]').addEventListener('click', () => {
    instructionsDismissed = true;
    draw();
  });

  const draftBar = setupPlanDraftBar(document.querySelector<HTMLElement>('[data-bcn-plan-draft-bar]')!, q<HTMLElement>('[data-bcn-plan-draft-key]'), {
    onClose: () => void closeDraft(),
    onUndo: () => undo(),
    onRedo: () => redo(),
    onDiscard: () => void discardDraft(),
    onSaveAs: () => void saveDraftAs(),
    onCopy: () => void copyDraft(),
    onPublish: () => void publishDraft(),
    onCompareChange: (compare) => {
      compareLive = compare;
      writeComparePref(compare);
      draw();
    },
    onCascadeChange: (cascade) => {
      cascadeDrags = cascade;
      writeCascadePref(cascade);
      drawBar();
    },
    onPushDependents: () => pushDependents(),
  });

  // The chart's date range (new): a preset span or explicit dates, fitted to the chart; Whole plan is the fixed scale.
  let extentKey = '';
  const range = setupPlanGanttRange(root.querySelector<HTMLElement>('[data-bcn-plan-range]')!, {
    extent: () => planExtent(session ? session.shown : plan()),
    overview: () =>
      planGanttView(session ? session.shown : plan())
        .rows.filter((row) => row.kind === 'summary')
        .map((row) => ({ start: row.start, end: row.end, tier: row.depth <= 0 ? 0 : row.depth === 1 ? 1 : 2 })),
    today,
    storageKey: `bcn-plan-range-${planID()}`,
    onChange: (next) => chart.setRange(next),
  });

  /** The plan's first and last dated day: bars, planned windows and landmarks. */
  function planExtent(p: PlanDetailDto): GanttRange | null {
    const view = planGanttView(p);
    const dates = [
      ...view.rows.flatMap((row) => [row.start, row.end, row.windowStart, row.windowEnd]),
      ...view.landmarks.map((landmark) => landmark.date),
    ].filter((d): d is string => !!d);
    if (!dates.length) return null;
    dates.sort();
    return { start: dates[0], end: dates[dates.length - 1] };
  }

  // ── Draw ──────────────────────────────────────────────────────────────────────────────────────────────────────

  function draw(): void {
    const p = plan();
    const s = session;
    const shown = s ? s.shown : p;
    const view = planGanttView(shown);
    const hasRows = view.rows.length > 0;

    // Title and breadcrumb (routeEntityService.rename).
    const h1 = document.querySelector('.page-layout__title h1');
    const text = h1 && [...h1.childNodes].reverse().find((n) => n.nodeType === Node.TEXT_NODE && n.textContent!.trim());
    // In a draft the title is the draft's, with a Draft badge (someone else's: "Alex's draft").
    const draftTitle = s ? (s.draft.Name ?? 'Unnamed draft') : null;
    if (text) text.textContent = draftTitle ?? p.PlanName ?? '';
    if (draftTag) {
      draftTag.hidden = !s;
      const tagText = draftTag.querySelector('.esa-badge__text');
      if (tagText && s) tagText.textContent = s.own ? 'Draft' : `${s.draft.OwnerUserName}'s draft`;
    }
    instructions.hidden = !(s && hasRows && s.own && !instructionsDismissed);
    const crumb = document.querySelector('.breadcrumbs [aria-current="page"]');
    if (crumb) crumb.textContent = p.PlanName ?? '';
    document.title = draftTitle ? `${draftTitle} · Draft of ${p.PlanName} | Beacon` : `${p.PlanName} | Beacon`;

    addButton.hidden = !(hasRows && rights.canCreate) || !!s;
    // Add creates at the top: it is named for the plan's top level ("Add Program").
    const topLevel = [...(p.Levels ?? [])].sort((a, b) => (a.Depth ?? 0) - (b.Depth ?? 0))[0]?.SingularName;
    const addLabel = addButton.querySelector('.esa-button__label');
    if (addLabel) addLabel.textContent = topLevel ? `Add ${topLevel}` : 'Add';
    // Inside a draft the toolbar's live-plan actions step aside: Drafts (you are in one), Add, and the header's More.
    draftsButton.hidden = !(hasRows && rights.canUpdate) || !!s;
    draftsCount.hidden = draftCount === 0;
    draftsCount.querySelector('.esa-badge__text')!.textContent = String(draftCount);
    draftsButton.querySelector('button')?.setAttribute('aria-label', draftCount ? `Drafts, ${draftCount}` : 'Drafts');
    recover.hidden = !(scratchOffer && !s && rights.canUpdate);
    if (scratchOffer) {
      const n = scratchOffer.Overrides.length;
      q<HTMLElement>('[data-pw-recover-text]').textContent = `You have an unsaved draft with ${n} ${n === 1 ? 'change' : 'changes'}, updated ${planDraftUpdatedLabel(scratchOffer.UpdateDate)}. Only you can see it.`;
    }
    // In a draft the chart card takes the draft's frame and surface (BcnPlanWorkspace carries the rules).
    chartArea.toggleAttribute('data-draft', !!s);
    empty.hidden = hasRows;
    q<HTMLElement>('[data-pw-empty-add]').hidden = !rights.canCreate;

    // Inside a draft the page is about dates: structure edits (Add, Move plan, row actions) wait on the live plan.
    const items: EsaMenuItem[] = [];
    if (!s && rights.canUpdate && planCurrentStart(p.Elements) !== null) items.push({ label: 'Move plan', action: MORE_MENU.move });
    if (canOpenPlanSettings(rights)) items.push({ label: 'Plan settings', action: MORE_MENU.settings });
    const menuKey = items.map((item) => item.action).join('|');
    if (menuKey !== moreKey) {
      moreKey = menuKey;
      void customElements.whenDefined('esa-dropdown-menu').then(() => (more.items = items));
    }
    // esa-dropdown-menu sets its own display, which `hidden` alone doesn't beat; the page carries no CSS to make it.
    more.hidden = items.length === 0 || !!s;
    more.style.display = more.hidden ? 'none' : '';

    const conflicts = drawnConflicts();
    chart.setEditable(!!s?.own && rights.canUpdate);
    chart.setAnnotations({
      draft: s ? planDraftOverlay(p, shown, s.view, s.pending, s.justEdited, compareLive) : null,
      rowDeltas: s && compareLive ? planDraftDeltas(s.view) : null,
      conflicts: conflicts.map((c) => ({ fromId: c.PredecessorPlanElementID, toId: c.SuccessorPlanElementID })),
      rowNotes: planDraftRowNotes(s ? p : null, s?.view ?? null, conflicts, s?.pending ?? new Set()),
      countsDependents: !s,
      // Unsaved changes are the author's alone, and belong to the live plan's drawers: not shown inside a draft.
      rowBadges: s ? new Map() : new Map([...planUnsavedChanges(planID()).keys()].map((id) => [id, 'Unsaved Changes'])),
    });
    drawPresence();
    // The range control follows the plan's extent (Whole plan's dates, a preset's anchor); it redraws only when that moves.
    range.setVisible(hasRows);
    const extent = planExtent(shown);
    const key = extent ? `${extent.start}|${extent.end}` : '';
    if (key !== extentKey) {
      extentKey = key;
      range.refresh();
    } else if (hasRows) {
      range.redrawOverview();
    }
    chart.setData({ rows: view.rows, links: view.links, landmarks: view.landmarks, today, outlineHeading: view.outlineHeading });
    drawBar();
    if (s) draftListeners.forEach((listener) => listener());
  }

  /** The plan-state check (BCN-1906) over what the chart shows: the live plan, or the draft as it stands right now. */
  function drawnConflicts(): PlanConflictDto[] {
    const s = session;
    if (!s) return planConflicts(plan());
    return s.view && s.pending.size === 0 && s.justEdited.size === 0 ? s.view.Conflicts : planConflicts(s.shown);
  }

  /** "Sam is editing Fisheries Evaluation Studies" — presence from the poll, in place of edit locks. */
  function drawPresence(): void {
    const people = [...new Map(planPresence().map((p) => [p.UserName, p])).values()];
    presenceLine.textContent = people.map((p) => `${p.UserName} is editing ${p.ProgramName ?? 'plan settings'}`).join(' · ');
    presenceLine.hidden = people.length === 0;
  }
  onPlanPresence(() => drawPresence());
  onPlanUnsavedChanges(() => draw());

  function drawBar(): void {
    draftBar.render(session ? barState(session) : null);
  }

  function barState(s: DraftSession): PlanDraftBarState {
    const isScratch = s.draft.Name === null;
    const conflicts = drawnConflicts();
    const changes = planDraftChangeLine(s.view, s.overrides);
    const saved = s.saveState === 'saving' ? 'Saving…' : s.saveState === 'failed' ? 'Not saved — check your connection' : isScratch ? 'Saved for you only' : 'Saved';
    return {
      own: s.own,
      kind: s.own ? 'Draft' : `${s.draft.OwnerUserName}'s draft`,
      name: s.draft.Name ?? 'Unnamed draft',
      meta: s.own ? `${changes} · ${saved}` : `${changes} · Updated ${planDraftUpdatedLabel(s.draft.UpdateDate)} · View only`,
      canUndo: s.past.length > 0,
      canRedo: s.future.length > 0,
      isScratch,
      hasChanges: s.overrides.length > 0,
      cascade: cascadeDrags,
      compare: compareLive,
      conflicts: conflicts.length,
      pushable: s.own ? planDraftPushable(s.overrides, conflicts, s.shown) : 0,
    };
  }

  function rowActionsFor(planElementID: string): Node | null {
    const actions = planRowActionsViews(plan(), rights.canCreate, PLAN_RULES.MaxLevels)[planElementID];
    if (!actions) return null;
    const frag = document.createDocumentFragment();
    const pending = planElementID in pendingRowActions;
    if (actions.canAddChild) {
      const add = rowTpl('add-child').content.firstElementChild!.cloneNode(true) as HTMLElement;
      setLabel(add, actions.addChildLabel);
      add.addEventListener('click', () => addChild(planElementID));
      frag.append(add);
    }
    if (hasPlanRowMenu(rights)) {
      const menu = rowTpl('menu').content.firstElementChild!.cloneNode(true) as HTMLElement & { items: EsaMenuItem[] };
      setLabel(menu.firstElementChild as HTMLElement, actions.menuLabel);
      const items: EsaMenuItem[] = [];
      if (rights.canUpdate) {
        items.push({ label: 'Move up', action: ROW_MENU.up, disabled: actions.isFirst || pending });
        items.push({ label: 'Move down', action: ROW_MENU.down, disabled: actions.isLast || pending });
        items.push({ label: 'Move…', action: ROW_MENU.move, disabled: !actions.canMove || pending });
      }
      if (rights.canDelete) {
        if (rights.canUpdate) items.push({ label: '', divider: true });
        items.push({ label: 'Delete', action: ROW_MENU.delete, variant: 'danger', disabled: pending });
      }
      void customElements.whenDefined('esa-dropdown-menu').then(() => (menu.items = items));
      menu.addEventListener('menu-action', (e) => {
        const action = (e as CustomEvent<string>).detail;
        if (action === ROW_MENU.up || action === ROW_MENU.down) reorder(planElementID, action);
        else if (action === ROW_MENU.move) void openMove(planElementID);
        else if (action === ROW_MENU.delete) void deleteElement(planElementID);
      });
      fillIcons(menu);
      frag.append(menu);
    }
    return frag;
  }

  function setLabel(el: HTMLElement, label: string): void {
    const button = el.matches('button, a') ? el : (el.querySelector('button, a') ?? el);
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  }

  // A write's returned plan (from here, a drawer, or a refresh) is the plan on screen. A draft follows it: its
  // overrides are replayed on the plan as it is now.
  planStore.subscribe(() => {
    draw();
    if (session) void refreshDraftView();
    flushDeferred();
  });

  // ── Add; the header's More (Move plan, Plan settings) ──────────────────────────────────────────────────────

  addButton.addEventListener('click', () => openCreate(null));
  fillIcons(more);
  more.addEventListener('menu-action', (e) => {
    const action = (e as CustomEvent<string>).detail;
    if (action === MORE_MENU.move) void movePlan();
    else if (action === MORE_MENU.settings) void openSettings();
  });

  async function openSettings(): Promise<void> {
    const planName = plan().PlanName;
    const result = await openPlanSettingsDrawer();
    if (result === 'deleted') {
      pushAlert(`Plan '${planName}' was deleted.`, 'success', 5000);
      location.href = plansHref();
    }
  }

  /** Move plan: the dialog previews the shift, the schedule preview shows what moves, and only its Confirm saves. */
  async function movePlan(): Promise<void> {
    const currentStart = planCurrentStart(plan().Elements);
    if (!rights.canUpdate || !currentStart) return;
    const id = planID();
    const planName = plan().PlanName;
    const moved = await openPlanMoveDialog({ planID: id, currentStart });
    if (!moved) return;
    const updated = await openPlanSchedulePreview({
      subject: planName ?? '',
      detail: planShiftDescription(moved.shift, LOCALE),
      kind: PlanScheduleChangeKind.PlanShift,
      changeSet: moved.changeSet,
      confirm: () => planWrite((token) => planApi.shift(id, moved.shift, token)),
    });
    if (!updated) return;
    applyPlanChange(updated);
    pushAlert('Plan moved.', 'success', 5000);
  }

  /** The Drafts button's count: every named draft an editor can open (scratch copies aren't listed). */
  async function refreshDraftCount(): Promise<void> {
    try {
      const count = (await planApi.listDrafts(planID())).length;
      if (count === draftCount) return;
      draftCount = count;
      draw();
    } catch {
      /* the count catches up on the next beat */
    }
  }
  q<HTMLElement>('[data-pw-empty-add]').addEventListener('click', () => openCreate(null));

  // ── Element drawer ───────────────────────────────────────────────────────────────────────────────────────────

  function selectElement(planElementID: string): void {
    void openElementDrawer({ kind: 'edit', planElementID });
  }

  function openCreate(parentPlanElementID: string | null): void {
    if (!rights.canCreate || session) return;
    void openElementDrawer({ kind: 'create', parentPlanElementID });
  }

  /** Already open on it: nothing to do. Open on something else: that drawer closes first, through its guard. */
  async function openElementDrawer(target: PlanElementDrawerTarget): Promise<void> {
    const open = elementDrawer;
    if (open) {
      if (samePlanElementDrawerTarget(open.target, target)) return;
      if (!(await open.requestClose())) return;
      await open.closed;
    }
    const handle = openPlanElementDrawer({ target, onOpenElement: (id) => selectElement(id), draft: drawerDraft() });
    elementDrawer = handle;
    selectedElementID = selectedPlanElementID(target);
    chart.setSelectedId(selectedElementID);
    void handle.closed.then(() => {
      // A swapped-out drawer finishes closing after its replacement opened; leave the replacement's selection be.
      if (elementDrawer !== handle) return;
      elementDrawer = null;
      selectedElementID = null;
      chart.setSelectedId(null);
    });
  }

  /** Inside a draft, the element drawer opens in draft mode: its dates write to the draft. */
  function drawerDraft(): PlanElementDrawerDraft | undefined {
    const s = session;
    if (!s) return undefined;
    return {
      label: s.own ? `Draft · ${s.draft.Name ?? 'Unnamed'}` : `${s.draft.OwnerUserName}'s draft · ${s.draft.Name ?? 'Unnamed'} · View only`,
      readOnly: !s.own,
      plan: () => (session ?? s).shown,
      subscribe: (listener) => {
        draftListeners.add(listener);
        return () => draftListeners.delete(listener);
      },
      save: (edit) => {
        if (session === s) applyEdits([edit]);
      },
    };
  }

  /** Closes an open element drawer through its guard; resolves whether it closed. Entering or leaving a draft needs it. */
  async function closeElementDrawer(): Promise<boolean> {
    const open = elementDrawer;
    if (!open) return true;
    if (!(await open.requestClose())) return false;
    await open.closed;
    return true;
  }

  function addChild(planElementID: string): void {
    const element = findPlanElement(plan().Elements, planElementID)?.element;
    if (element) openCreate(element.PlanElementID ?? null);
  }

  // ── Row actions ──────────────────────────────────────────────────────────────────────────────────────────────

  function beginRowAction(planElementID: string, verb: PlanRowVerb): boolean {
    if (planElementID in pendingRowActions) return false;
    pendingRowActions = { ...pendingRowActions, [planElementID]: verb };
    draw();
    return true;
  }

  function endRowAction(planElementID: string): void {
    const next = { ...pendingRowActions };
    delete next[planElementID];
    pendingRowActions = next;
    draw();
  }

  async function reorder(planElementID: string, direction: PlanReorderDirection): Promise<void> {
    const position = planSiblingPosition(plan().Elements, planElementID);
    if (!position || !beginRowAction(planElementID, 'reorder')) return;
    try {
      applyPlanChange(await planWrite((token) => planApi.setSortOrder(planID(), planElementID, planReorderIndex(position, direction), token)));
    } catch (error) {
      alertRowActionFailure(error, 'Failed to reorder the element. Please try again.');
    } finally {
      endRowAction(planElementID);
    }
  }

  async function openMove(planElementID: string): Promise<void> {
    const element = findPlanElement(plan().Elements, planElementID)?.element;
    if (!element || planElementID in pendingRowActions) return;
    const target = await openPlanElementMoveDialog({ planElementName: element.PlanElementName ?? '', targets: planMoveTargets(plan(), planElementID) });
    if (!target || !beginRowAction(planElementID, 'move')) return;
    try {
      applyPlanChange(await planWrite((token) => planApi.moveElement(planID(), planElementID, target.parentPlanElementID ?? null, token)));
    } catch (error) {
      alertRowActionFailure(error, 'Failed to move the element. Please try again.');
    } finally {
      endRowAction(planElementID);
    }
  }

  async function deleteElement(planElementID: string): Promise<void> {
    const p = plan();
    const element = findPlanElement(p.Elements, planElementID)?.element;
    if (!element || planElementID in pendingRowActions) return;
    const removed = planElementSubtreeIDs(element);
    const ok = await confirm({
      color: 'warn',
      header: planElementDeleteConfirmHeader(element),
      text: planElementDeleteConfirmText(element, planElementDeleteImpact(element, p.Dependencies)),
      confirmButtonLabel: 'Delete',
    });
    if (!ok || !beginRowAction(planElementID, 'delete')) return;
    try {
      const updated = await planWrite((token) => planApi.deleteElement(planID(), planElementID, token));
      closeElementDrawerOn(removed);
      applyPlanChange(updated);
    } catch (error) {
      alertRowActionFailure(error, 'Failed to delete the element. Please try again.');
    } finally {
      endRowAction(planElementID);
    }
  }

  /** Closes the element drawer — skipping its guard — when what it shows (or creates under) was removed. */
  function closeElementDrawerOn(removedIDs: ReadonlySet<string>): void {
    const open = elementDrawer;
    if (!open) return;
    const shownID = open.target.kind === 'edit' ? open.target.planElementID : open.target.parentPlanElementID;
    if (shownID === null || !removedIDs.has(shownID)) return;
    elementDrawer = null;
    selectedElementID = null;
    chart.setSelectedId(null);
    open.forceClose();
  }

  /** A 400 alerts the server's field-keyed reasons (the form-level "" one is the interceptor's); else the retry alert. */
  function alertRowActionFailure(error: unknown, message: string): void {
    if (error instanceof PlanConflictAnswered) return;
    if (!(error instanceof HttpErrorResponse) || error.status !== 400) {
      pushAlert(message, 'danger');
      return;
    }
    const errors = { ...((error.error?.errors ?? {}) as Record<string, string[]>) };
    const formLevel = errors[''];
    delete errors[''];
    // Her HTTP error interceptor alerts the form-level messages on its own.
    if (formLevel?.length) pushAlert(formLevel.join(' '), 'danger');
    const messages = Object.values(errors).flat();
    if (messages.length) pushAlert(messages.join(' '), 'danger');
  }

  // ── Drafts: opening, closing, the list ───────────────────────────────────────────────────────────────────────

  async function enterDraft(draft: PlanDraftDto): Promise<void> {
    if (!(await closeElementDrawer())) return;
    session = {
      draft,
      own: draft.OwnerUserName === me,
      overrides: [...draft.Overrides],
      past: [],
      future: [],
      view: null,
      shown: plan(),
      pending: new Set(),
      justEdited: new Set(),
      viewSeq: 0,
      saveSeq: 0,
      saveState: 'saved',
    };
    if (draft.Name === null) scratchOffer = null;
    instructionsDismissed = false;
    draw();
    await refreshDraftView();
  }

  async function exitDraft(): Promise<void> {
    if (!(await closeElementDrawer())) return;
    session = null;
    draw();
  }

  q<HTMLElement>('[data-pw-drafts]').addEventListener('click', async () => {
    const picked = await openPlanDraftsDrawer(planID());
    if (!picked) return;
    if (picked.kind === 'new') {
      void newDraft();
      return;
    }
    try {
      await enterDraft(await planApi.getDraft(planID(), picked.planDraftID));
    } catch {
      pushAlert("That draft couldn't be opened. It may have been published or deleted.", 'danger');
    }
  });

  /** New draft: a private scratch copy. One per planner per plan, so an old one with changes is offered for discard first. */
  async function newDraft(): Promise<void> {
    try {
      const existing = scratchOffer ?? (await planApi.getScratchDraft(planID()));
      if (existing?.Overrides.length) {
        const ok = await confirm({
          color: 'warn',
          header: 'Discard your unsaved draft?',
          text: `You have an unsaved draft with ${existing.Overrides.length} ${existing.Overrides.length === 1 ? 'change' : 'changes'}. Starting a new one discards it. To keep it, continue it instead and use Save as draft.`,
          confirmButtonLabel: 'Discard and start new',
          cancelButtonLabel: 'Keep it',
        });
        if (!ok) return;
      }
      scratchOffer = null;
      await enterDraft(await planApi.saveDraft(planID(), { Name: null, Overrides: [] }));
    } catch {
      pushAlert("A draft couldn't be started. Please try again.", 'danger');
    }
  }

  q<HTMLElement>('[data-pw-recover-continue]').addEventListener('click', () => {
    if (scratchOffer) void enterDraft(scratchOffer);
  });
  q<HTMLElement>('[data-pw-recover-discard]').addEventListener('click', async () => {
    const offer = scratchOffer;
    if (!offer) return;
    scratchOffer = null;
    draw();
    try {
      await planApi.deleteDraft(planID(), offer.PlanDraftID);
    } catch {
      /* it lapses with the next new draft */
    }
  });

  /** Close: back to the live plan. A named draft is kept; a scratch copy with changes is kept for recovery too. */
  async function closeDraft(): Promise<void> {
    const s = session;
    if (!s) return;
    await draftSaves;
    await exitDraft();
    if (session) return;
    if (s.own && s.draft.Name === null && s.overrides.length) {
      scratchOffer = { ...s.draft, Overrides: s.overrides };
      draw();
    }
  }

  async function discardDraft(): Promise<void> {
    const s = session;
    if (!s?.own) return;
    const named = s.draft.Name !== null;
    if (named || s.overrides.length) {
      const ok = await confirm({
        color: 'warn',
        header: named ? `Delete '${s.draft.Name}'?` : 'Discard this draft?',
        text: named
          ? 'The draft is deleted for everyone who can see it. The live plan is not affected.'
          : `Your ${s.overrides.length} ${s.overrides.length === 1 ? 'change is' : 'changes are'} deleted. The live plan is not affected.`,
        confirmButtonLabel: named ? 'Delete draft' : 'Discard',
      });
      if (!ok || session !== s) return;
    }
    await draftSaves;
    await exitDraft();
    if (session === s) return;
    try {
      await planApi.deleteDraft(planID(), s.draft.PlanDraftID);
      void refreshDraftCount();
    } catch {
      pushAlert("The draft couldn't be deleted. Please try again.", 'danger');
    }
  }

  /** Save as draft: naming keeps the draft and shares it, view-only, with every editor of the plan. */
  async function saveDraftAs(): Promise<void> {
    const s = session;
    if (!s?.own) return;
    const name = await openPlanDraftNameDialog({
      heading: 'Save as draft',
      value: '',
      hint: 'A named draft is kept, and every editor of this plan can see it (view-only). Only you can change or publish it.',
      saveLabel: 'Save and share',
    });
    if (!name || session !== s) return;
    s.draft = { ...s.draft, Name: name };
    drawBar();
    await persistDraft(s);
    if (s.saveState === 'saved') pushAlert(`Saved as '${name}'. Other editors can see it in Drafts.`, 'success');
    void refreshDraftCount();
  }

  /** Copy to my drafts: someone else's draft becomes the viewer's own, to build on. */
  async function copyDraft(): Promise<void> {
    const s = session;
    if (!s || s.own) return;
    const name = await openPlanDraftNameDialog({
      heading: 'Copy to my drafts',
      value: `${s.draft.Name ?? 'Draft'} (copy)`,
      hint: `A copy of ${s.draft.OwnerUserName}'s draft, yours to change. Their draft is not affected.`,
      saveLabel: 'Copy',
    });
    if (!name || session !== s) return;
    try {
      await enterDraft(await planApi.saveDraft(planID(), { Name: name, Overrides: s.overrides }));
      pushAlert(`Copied to your drafts as '${name}'.`, 'success');
      void refreshDraftCount();
    } catch {
      pushAlert("The draft couldn't be copied. Please try again.", 'danger');
    }
  }

  async function publishDraft(): Promise<void> {
    const s = session;
    if (!s?.own || !s.overrides.length) return;
    if (!(await closeElementDrawer())) return;
    await draftSaves;
    const presence = await planApi.presence(planID()).catch(() => []);
    const name = s.draft.Name ?? 'your draft';
    const updated = await openPlanPublishDialog({
      planID: planID(),
      draftName: s.draft.Name ?? 'Unnamed draft',
      overrides: s.overrides,
      presence,
      liveConflictIDs: new Set(planConflicts(plan()).map((c) => c.PlanElementDependencyID)),
      publish: (keepLivePlanElementIDs, snapshotName, versionToken) =>
        planApi.publishDraft(planID(), s.draft.PlanDraftID, { KeepLivePlanElementIDs: keepLivePlanElementIDs, SnapshotName: snapshotName ?? undefined }, versionToken),
    });
    if (!updated || session !== s) return;
    const moved = s.view?.Changes.length ?? s.overrides.length;
    session = null;
    applyPlanChange(updated);
    pushAlert(`Published ${s.draft.Name ? `'${name}'` : 'your draft'}: ${moved} ${moved === 1 ? 'item' : 'items'} moved on the live plan.`, 'success', 6000);
    void refreshDraftCount();
  }

  // ── Drafts: editing ──────────────────────────────────────────────────────────────────────────────────────────

  /** A drop inside a draft applies at once: no confirm, no popup. Undo takes it back. */
  function draftDrop(drag: GanttDragEvent): void {
    const s = session;
    if (!s?.own) return;
    const edits = planDraftEditsForDrag(s.shown, drag);
    if (!edits.length) {
      pushAlert('This element has no dates to move.', 'danger');
      // The Gantt lets go of its held drop when the rows change.
      draw();
      return;
    }
    applyEdits(edits);
  }

  /** The planner's own edits, from a drop or the draft-mode drawer: the dropped bars land now, the cascade follows. */
  function applyEdits(edits: PlanDraftEdit[]): void {
    const s = session;
    if (!s?.own) return;
    const next = planDraftWithEdits(s.overrides, edits, plan(), cascadeDrags);
    commit(s, next);
    s.shown = planDraftOptimistic(s.shown, edits);
    s.justEdited = new Set(edits.map((e) => e.PlanElementID));
    s.pending = cascadeDrags ? planDraftDownstream(s.shown, s.justEdited) : new Set();
    draw();
    void refreshDraftView();
  }

  /** One undoable step. */
  function commit(s: DraftSession, next: PlanDraftOverrideDto[]): void {
    s.past.push(s.overrides);
    if (s.past.length > UNDO_DEPTH) s.past.shift();
    s.future = [];
    s.overrides = next;
    void persistDraft(s);
  }

  function undo(): void {
    const s = session;
    if (!s?.own || !s.past.length) return;
    s.future.push(s.overrides);
    s.overrides = s.past.pop()!;
    afterHistoryStep(s);
  }

  function redo(): void {
    const s = session;
    if (!s?.own || !s.future.length) return;
    s.past.push(s.overrides);
    s.overrides = s.future.pop()!;
    afterHistoryStep(s);
  }

  function afterHistoryStep(s: DraftSession): void {
    s.justEdited = new Set();
    s.pending = new Set();
    drawBar();
    void persistDraft(s);
    void refreshDraftView();
  }

  /** Push dependents (move-only drags): the edits behind a broken dependency start pushing, as one undoable step. */
  function pushDependents(): void {
    const s = session;
    if (!s?.own) return;
    const conflicts = drawnConflicts();
    const next = planDraftPushDependents(s.overrides, conflicts, s.shown);
    if (next.every((o, i) => o.Cascade === s.overrides[i].Cascade)) return;
    commit(s, next);
    s.pending = new Set(conflicts.map((c) => c.SuccessorPlanElementID));
    draw();
    void refreshDraftView();
  }

  /** The server's replay of the draft on the live plan as it is now. The latest request wins. */
  async function refreshDraftView(): Promise<void> {
    const s = session;
    if (!s) return;
    const seq = ++s.viewSeq;
    try {
      const view = await planApi.previewDraft(planID(), s.overrides);
      if (session !== s || seq !== s.viewSeq) return;
      s.view = view;
      s.shown = view.Plan;
      s.pending = new Set();
      s.justEdited = new Set();
      draw();
    } catch (error) {
      if (session !== s || seq !== s.viewSeq) return;
      console.error('Draft replay failed.', error);
      s.pending = new Set();
      draw();
      pushAlert("The draft couldn't be updated. Your changes are kept; try Undo or Redo to refresh it.", 'danger');
    }
  }

  /** Autosave, one small write per change: queued so saves land in order. Never touches the plan's version. */
  function persistDraft(s: DraftSession): Promise<unknown> {
    if (!s.own) return Promise.resolve();
    const seq = ++s.saveSeq;
    s.saveState = 'saving';
    drawBar();
    draftSaves = draftSaves
      .then(() => planApi.saveDraft(planID(), { PlanDraftID: s.draft.PlanDraftID, Name: s.draft.Name, Overrides: s.overrides }))
      .then(
        (saved) => {
          s.draft = { ...saved, Name: s.draft.Name };
          if (seq === s.saveSeq) s.saveState = 'saved';
        },
        () => {
          if (seq === s.saveSeq) s.saveState = 'failed';
        }
      )
      .finally(() => {
        if (session === s) drawBar();
      });
    return draftSaves;
  }

  // Ctrl+Z / Ctrl+Shift+Z (Ctrl+Y) inside the viewer's own draft — unless a field or a dialog has the keys.
  document.addEventListener('keydown', (event) => {
    const s = session;
    if (!s?.own || event.defaultPrevented || !(event.ctrlKey || event.metaKey) || event.altKey) return;
    const key = event.key.toLowerCase();
    if (key !== 'z' && key !== 'y') return;
    const target = event.target as HTMLElement | null;
    if (target?.closest?.('input, textarea, select, [contenteditable], esa-text-field, esa-date-picker, esa-textarea, esa-combobox')) return;
    if (document.querySelector('esa-side-dialog[open], esa-dialog[open], esa-confirm-dialog[open]')) return;
    event.preventDefault();
    if (key === 'y' || event.shiftKey) redo();
    else undo();
  });


  // ── Live refresh ─────────────────────────────────────────────────────────────────────────────────────────────

  onVersionConflict(async (updateUserName) => {
    if (conflictOpen) return;
    conflictOpen = true;
    try {
      if (!(await confirmVersionConflict(updateUserName))) return;
      // Reload: every drawer closes unguarded — what they hold was refused against a plan that has moved on.
      closeAllSideDialogs();
      try {
        applyPlanChange(await planApi.getPlan(planID()));
      } catch (error) {
        if (!(error instanceof HttpErrorResponse && error.status === 404)) pushAlert('Failed to reload the plan. Please try again.', 'danger');
      }
    } finally {
      conflictOpen = false;
      flushDeferred();
    }
  });

  const remoteRefreshBlocked = () => conflictOpen || planStore.inFlight > 0;

  function flushDeferred(): void {
    if (remoteRefreshBlocked() || !deferredStatus) return;
    const deferred = deferredStatus;
    deferredStatus = null;
    void statusArrived(deferred);
  }

  function deferIfBlocked(status: PlanStatusDto): boolean {
    if (!remoteRefreshBlocked()) return false;
    deferredStatus = status;
    return true;
  }

  async function statusArrived(status: PlanStatusDto): Promise<void> {
    if (!status.VersionToken || status.VersionToken === plan().VersionToken) return;
    if (deferIfBlocked(status) || refreshing) return;
    refreshing = true;
    const id = planID();
    // This tab's own version, not on screen: a response that landed out of order. Catch up without a toast.
    const announce = !isOwnVersion(status.VersionToken);
    try {
      const fetched = await planApi.getPlan(id);
      if (deferIfBlocked(status) || fetched.VersionToken === plan().VersionToken) return;
      applyPlanChange(fetched);
      if (announce) pushAlert(planUpdatedNotice(status, fetched.PlanName ?? '', rights.canUpdate), 'info', PLAN_NOTICE_MS);
    } catch (error) {
      console.error('Plan live refresh failed.', { planID: id, error });
    } finally {
      refreshing = false;
    }
  }

  /** Someone else deleted the plan: every drawer closes unguarded, there is nothing left to save to. */
  function leaveDeletedPlan(): void {
    closeAllSideDialogs();
    pushAlert(planDeletedNotice(plan().PlanName ?? ''), 'warning', PLAN_NOTICE_MS);
    setTimeout(() => (location.href = plansHref()), 1200);
  }

  let polling = true;
  async function poll(): Promise<void> {
    if (!polling) return;
    try {
      const status = await planApi.getStatus(planID());
      void statusArrived(status);
      // Presence and the Drafts count ride the same 10-second beat.
      void planApi.presence(planID()).then(setPlanPresence, () => undefined);
      void refreshDraftCount();
    } catch (error) {
      if (error instanceof HttpErrorResponse && error.status === 404) {
        polling = false;
        leaveDeletedPlan();
        return;
      }
      console.error('Plan status watch failed.', error);
    }
    setTimeout(poll, PLAN_STATUS_POLL_MS);
  }
  setTimeout(poll, PLAN_STATUS_POLL_MS);

  draw();

  void planApi.presence(planID()).then(setPlanPresence, () => undefined);
  void refreshDraftCount();

  // A scratch copy left from last time is offered back, never reopened on its own.
  void planApi
    .getScratchDraft(planID())
    .then((scratch) => {
      if (!scratch?.Overrides.length || session) return;
      scratchOffer = scratch;
      draw();
    })
    .catch(() => undefined);
}
