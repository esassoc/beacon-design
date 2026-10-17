// <BcnPlanWorkspace>'s runtime: Beacon's PlanGanttComponent class (pages/plan-gantt/plan-gantt.component.ts on
// origin/develop, Jamie Quishenberry) — the page that turns a plan into the Gantt and orchestrates everything around
// it. Her rules are imported, not restated: the tree walk (plan-gantt-rows), the drag → request mapping and its
// confirm rule (plan-gantt-drag), the row actions (plan-row-actions), Move plan's start and description (plan-shift),
// the notices (plan-version). Her RxJS pipelines become promises and plain state with the same orderings:
//
//   - plan → view → Gantt redraw, through planStore (every drawer's applyPlanChange lands there too).
//   - Plan settings / Move plan → schedule preview / element drawer (one at a time, swapped through its guard).
//   - row actions with one action in flight per element; Delete closes a drawer showing what it removed.
//   - edit mode: a drag's live dependents count (debounced 150ms, latest wins), a drop that saves straight away or
//     is held for Apply / Revert; leaving edit mode reverts.
//   - live refresh: the plan's status is polled every 10s; someone else's version is refetched and redrawn with a
//     toast once nothing is in hand; a deleted plan sends the viewer back to the list; a refused write opens the
//     "This plan has changed" dialog, whose Reload closes every drawer and refetches.
//
// APPROXIMATIONS: rights are all granted (PLAN_RIGHTS); her row menu trigger's [loadingButton] shows as the menu's
// items disabled while the action is out; menu items carry no icons (esa-dropdown-menu draws an item icon as a dot,
// so they are left off); the out-of-order guard (acceptPlan) is the write queue's serialisation instead.

import { PlanGanttChart } from './plan-gantt-chart';
import { fillIcons } from '../../lib/planning/icons';
import { openPlanElementDrawer, type PlanElementDrawerHandle } from './plan-element-drawer';
import { openPlanSettingsDrawer } from './plan-settings-drawer';
import { openPlanMoveDialog } from './plan-move-dialog';
import { openPlanSchedulePreview } from './plan-schedule-preview';
import { openPlanElementMoveDialog } from './plan-element-move-dialog';
import type { GanttDragEvent, GanttDropState } from '../../lib/planning/gantt-types';
import type { PlanDetailDto, PlanStatusDto } from '../../lib/planning/model';
import { HttpErrorResponse } from '../../lib/planning/ng-shim';
import { planGanttView } from '../../lib/planning/plan-gantt-rows';
import {
  planGanttDependentCount,
  planGanttDragRequest,
  planGanttDropNeedsConfirm,
  planGanttDropNotes,
  type PlanGanttDragRequest,
} from '../../lib/planning/plan-gantt-drag';
import {
  findPlanElement,
  samePlanElementDrawerTarget,
  selectedPlanElementID,
  type PlanElementDrawerTarget,
} from '../../lib/planning/plan-element';
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
import type { EsaMenuItem } from '@esa/ecology/esa-dropdown-menu';

type PlanRowVerb = 'reorder' | 'move' | 'delete';

interface PlanGanttPendingDrop {
  request: PlanGanttDragRequest;
  /** The preview leg a revert cancels: a revert before the save is sent just drops the answer. */
  cancelled: boolean;
}

const DRAG_PREVIEW_DEBOUNCE_MS = 150;
const PLAN_NOTICE_MS = 5000;
/** PlanStatusService's poll interval. */
const PLAN_STATUS_POLL_MS = 10_000;
const LOCALE = 'en-US';

const ROW_MENU = { up: 'up', down: 'down', move: 'move', delete: 'delete' } as const;

export function setupPlanWorkspace(root: HTMLElement): void {
  const q = <T extends Element>(sel: string) => root.querySelector<T>(sel)!;
  const host = q<HTMLElement>('[data-bcn-plan-gantt]');
  const tpl = (name: string) => host.querySelector<HTMLTemplateElement>(`[data-gantt-tpl="${name}"]`)!;
  const rowTpl = (name: string) => root.querySelector<HTMLTemplateElement>(`[data-pw-tpl="${name}"]`)!;
  const description = q<HTMLElement>('[data-pw-description]');
  const toolbar = q<HTMLElement>('[data-pw-toolbar]');
  const editSwitch = q<HTMLElement & { checked: boolean }>('[data-pw-edit-mode]');
  const instructions = q<HTMLElement>('[data-pw-instructions]');
  const empty = q<HTMLElement>('[data-pw-empty]');
  const utilSettings = document.querySelector<HTMLElement>('[data-plan-util="settings"]');
  const utilMove = document.querySelector<HTMLElement>('[data-plan-util="move"]');
  const utilAdd = document.querySelector<HTMLElement>('[data-plan-util="add"]');

  const rights = PLAN_RIGHTS;
  const today = toLocalIsoDate(new Date());

  // ── State (her signals) ──
  let pendingRowActions: Record<string, PlanRowVerb> = {};
  let selectedElementID: string | null = null;
  let elementDrawer: PlanElementDrawerHandle | null = null;
  let editModeOn = false;
  let editInstructionsDismissed = false;
  let dropState: GanttDropState = 'idle';
  let pendingDrop: PlanGanttPendingDrop | null = null;
  let dragSeq = 0;
  let dragTimer: ReturnType<typeof setTimeout> | null = null;
  let conflictOpen = false;
  let deferredStatus: PlanStatusDto | null = null;
  let refreshing = false;

  const editing = () => rights.canUpdate && editModeOn;
  const plan = () => planStore.plan;
  const projectID = () => plan().ProjectID ?? '';

  const chart = new PlanGanttChart(host, { caret: tpl('caret'), apply: tpl('apply'), revert: tpl('revert') }, {
    label: plan().PlanName ?? '',
    rowActions: (row) => rowActionsFor(row.id),
    onRowSelect: (id) => selectElement(id),
    onDragChange: (drag) => {
      if (dropState === 'idle') dragInHand(drag);
    },
    onDragEnd: (drag) => onDragEnd(drag),
    onDragCancel: () => dragInHand(null),
    onDropConfirm: () => {
      if (dropState === 'confirm' && pendingDrop) applyDrop(pendingDrop);
    },
    onDropRevert: () => revertDrop(),
  });

  // ── Draw ──────────────────────────────────────────────────────────────────────────────────────────────────────

  function draw(): void {
    const p = plan();
    const view = planGanttView(p);
    const hasRows = view.rows.length > 0;

    // Title and breadcrumb (routeEntityService.rename).
    const h1 = document.querySelector('.page-layout__title h1');
    const text = h1 && [...h1.childNodes].reverse().find((n) => n.nodeType === Node.TEXT_NODE && n.textContent!.trim());
    if (text) text.textContent = p.PlanName ?? '';
    const crumb = document.querySelector('.breadcrumbs [aria-current="page"]');
    if (crumb) crumb.textContent = p.PlanName ?? '';
    document.title = `${p.PlanName} | Beacon`;

    description.hidden = !p.Description;
    description.textContent = p.Description ?? '';
    toolbar.hidden = !(hasRows && rights.canUpdate);
    instructions.hidden = !(hasRows && editing() && !editInstructionsDismissed);
    empty.hidden = hasRows;
    q<HTMLElement>('[data-pw-empty-add]').hidden = !rights.canCreate;

    if (utilSettings) utilSettings.hidden = !canOpenPlanSettings(rights);
    if (utilMove) utilMove.hidden = !(rights.canUpdate && planCurrentStart(p.Elements) !== null);
    if (utilAdd) utilAdd.hidden = !(rights.canCreate && hasRows);

    chart.setEditable(editing());
    chart.setData({ rows: view.rows, links: view.links, landmarks: view.landmarks, today, outlineHeading: view.outlineHeading });
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

  // A write's returned plan (from here, a drawer, or a refresh) is the plan on screen.
  planStore.subscribe(() => {
    // A drop held for confirm was previewed against the plan being replaced.
    if (dropState === 'confirm') revertDrop();
    draw();
    flushDeferred();
  });

  // ── Header utilities ─────────────────────────────────────────────────────────────────────────────────────────

  utilSettings?.addEventListener('click', async () => {
    const planName = plan().PlanName;
    const result = await openPlanSettingsDrawer();
    if (result === 'deleted') {
      pushAlert(`Plan '${planName}' was deleted.`, 'success', 5000);
      location.href = plansHref();
    }
  });

  /** Move plan: the dialog previews the shift, the schedule preview shows what moves, and only its Confirm saves. */
  utilMove?.addEventListener('click', async () => {
    const currentStart = planCurrentStart(plan().Elements);
    if (!rights.canUpdate || !currentStart) return;
    const { PlanID: planID, PlanName: planName } = plan();
    const moved = await openPlanMoveDialog({ planID, currentStart });
    if (!moved) return;
    const updated = await openPlanSchedulePreview({
      subject: planName ?? '',
      detail: planShiftDescription(moved.shift, LOCALE),
      kind: PlanScheduleChangeKind.PlanShift,
      changeSet: moved.changeSet,
      confirm: () => planWrite((token) => planApi.shift(planID, moved.shift, token)),
    });
    if (!updated) return;
    applyPlanChange(updated);
    pushAlert('Plan moved.', 'success', 5000);
  });

  utilAdd?.addEventListener('click', () => openCreate(null));
  q<HTMLElement>('[data-pw-empty-add]').addEventListener('click', () => openCreate(null));

  // ── Element drawer ───────────────────────────────────────────────────────────────────────────────────────────

  function selectElement(planElementID: string): void {
    void openElementDrawer({ kind: 'edit', planElementID });
  }

  function openCreate(parentPlanElementID: string | null): void {
    if (!rights.canCreate) return;
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
    const handle = openPlanElementDrawer({ target, onOpenElement: (id) => selectElement(id) });
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

  function addChild(planElementID: string): void {
    const element = findPlanElement(plan().Elements, planElementID)?.element;
    if (element) openCreate(element.PlanElementID);
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
      applyPlanChange(await planWrite((token) => planApi.setSortOrder(plan().PlanID, planElementID, planReorderIndex(position, direction), token)));
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
      applyPlanChange(await planWrite((token) => planApi.moveElement(plan().PlanID, planElementID, target.parentPlanElementID ?? null, token)));
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
      const updated = await planWrite((token) => planApi.deleteElement(plan().PlanID, planElementID, token));
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

  // ── Edit mode ────────────────────────────────────────────────────────────────────────────────────────────────

  editSwitch.addEventListener('change', (e) => {
    const on = !!(e as CustomEvent<{ checked: boolean }>).detail?.checked;
    editModeOn = on;
    if (on) editInstructionsDismissed = false;
    if (!on) revertDrop();
    draw();
  });

  q<HTMLElement>('[data-pw-dismiss]').addEventListener('click', () => {
    editInstructionsDismissed = true;
    draw();
  });

  /** The drag in hand (null once dropped or abandoned): its live count, after it rests, latest answer wins. */
  function dragInHand(drag: GanttDragEvent | null): void {
    const seq = ++dragSeq;
    if (dragTimer) clearTimeout(dragTimer);
    dragTimer = null;
    const request = drag ? planGanttDragRequest(plan(), drag) : null;
    if (!request) {
      chart.setDependentCount(null);
      return;
    }
    chart.setDependentCount(null);
    dragTimer = setTimeout(async () => {
      try {
        const changeSet = await previewDrag(request);
        if (seq === dragSeq) chart.setDependentCount(planGanttDependentCount(request, changeSet));
      } catch (error) {
        console.error('Plan Gantt drag preview failed.', { planID: plan().PlanID, error });
        if (seq === dragSeq) chart.setDependentCount(null);
      }
    }, DRAG_PREVIEW_DEBOUNCE_MS);
  }

  function setDropState(state: GanttDropState, notes = chartNotes): void {
    dropState = state;
    chartNotes = notes;
    chart.setDropState(state, notes);
    if (state === 'idle') flushDeferred();
  }
  let chartNotes: ReturnType<typeof planGanttDropNotes> = [];

  /** A drop: preview it once more, then save straight away, or hold it for the Gantt's Apply / Revert. */
  async function onDragEnd(drag: GanttDragEvent): Promise<void> {
    dragInHand(null);
    if (dropState !== 'idle') return;
    setDropState('saving', []);
    const request = planGanttDragRequest(plan(), drag);
    if (!request) {
      pushAlert('This element has no dates to move.', 'danger');
      // The Gantt lets go of its held drop when the state leaves idle and comes back, so 'saving' renders first.
      requestAnimationFrame(() => settleDrop());
      return;
    }
    const drop: PlanGanttPendingDrop = { request, cancelled: false };
    pendingDrop = drop;
    try {
      const changeSet = await previewDrag(request);
      if (pendingDrop !== drop || drop.cancelled) return;
      chart.setDependentCount(planGanttDependentCount(request, changeSet));
      if (!planGanttDropNeedsConfirm(request, changeSet)) {
        void applyDrop(drop);
        return;
      }
      setDropState('confirm', planGanttDropNotes(changeSet));
    } catch (error) {
      if (drop.cancelled) return;
      failDrop(drop, error);
    }
  }

  /** Revert, or edit mode off: before the save is sent nothing is saved; once it is out it lands or fails on its own. */
  function revertDrop(): void {
    dragInHand(null);
    if (pendingDrop) pendingDrop.cancelled = true;
    settleDrop();
  }

  async function applyDrop(drop: PlanGanttPendingDrop): Promise<void> {
    setDropState('saving', []);
    const { request } = drop;
    const planID = plan().PlanID;
    try {
      const updated = await planWrite((token) =>
        request.kind === 'element'
          ? planApi.updateElementSchedule(planID, request.planElementID, request.change, token)
          : planApi.shiftElements(planID, request.shift, token)
      );
      // A save that lands after a revert still saved, so the plan is redrawn either way.
      if (pendingDrop === drop) settleDrop();
      applyPlanChange(updated);
    } catch (error) {
      failDrop(drop, error);
    }
  }

  function failDrop(drop: PlanGanttPendingDrop, error: unknown): void {
    if (pendingDrop === drop) settleDrop();
    alertRowActionFailure(error, 'Failed to save the change. Please try again.');
  }

  function settleDrop(): void {
    pendingDrop = null;
    chart.setDependentCount(null);
    setDropState('idle', []);
  }

  function previewDrag(request: PlanGanttDragRequest) {
    const planID = plan().PlanID;
    return request.kind === 'element'
      ? planApi.previewElementSchedule(planID, request.planElementID, request.change)
      : planApi.previewElementsShift(planID, request.shift);
  }

  // ── Live refresh ─────────────────────────────────────────────────────────────────────────────────────────────

  onVersionConflict(async (updateUserName) => {
    if (conflictOpen) return;
    conflictOpen = true;
    try {
      if (!(await confirmVersionConflict(updateUserName))) return;
      // Reload: every drawer closes unguarded — what they hold was refused against a plan that has moved on.
      closeAllSideDialogs();
      try {
        applyPlanChange(await planApi.getPlan(plan().PlanID));
      } catch (error) {
        if (!(error instanceof HttpErrorResponse && error.status === 404)) pushAlert('Failed to reload the plan. Please try again.', 'danger');
      }
    } finally {
      conflictOpen = false;
      flushDeferred();
    }
  });

  const remoteRefreshBlocked = () => dropState !== 'idle' || conflictOpen || planStore.inFlight > 0;

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
    const planID = plan().PlanID;
    // This tab's own version, not on screen: a response that landed out of order. Catch up without a toast.
    const announce = !isOwnVersion(status.VersionToken);
    try {
      const fetched = await planApi.getPlan(planID);
      if (deferIfBlocked(status) || fetched.VersionToken === plan().VersionToken) return;
      applyPlanChange(fetched);
      if (announce) pushAlert(planUpdatedNotice(status, fetched.PlanName ?? '', rights.canUpdate), 'info', PLAN_NOTICE_MS);
    } catch (error) {
      console.error('Plan live refresh failed.', { planID, error });
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
      const status = await planApi.getStatus(plan().PlanID);
      void statusArrived(status);
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
  void projectID;
}
