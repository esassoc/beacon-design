// Controller for <BcnPlanElementDrawer> — Jamie's PlanElementDrawerComponent (Beacon.Web
// pages/plan-gantt/plan-element-drawer/plan-element-drawer.component.ts), ported onto the spoke's one pre-rendered
// shell. Each openPlanElementDrawer() call is one "component instance": its own form, version pin, link state and
// planStore subscription, all dropped when the drawer closes. Angular's signals become a render() pass that runs on
// every form change, link-state change and plan change, so the derived parts (title, level options, Waits on /
// Blocks) stay live against the page's plan the way her computed() values do.
//
// Variable-length rows are cloned from the .astro's <template>s; nothing here builds markup from strings.

import '@esa/ecology/esa-side-dialog';
import '@esa/ecology/esa-text-field';
import '@esa/ecology/esa-select';
import '@esa/ecology/esa-combobox';
import '@esa/ecology/esa-date-picker';
import '@esa/ecology/esa-button-toggle';
import '@esa/ecology/esa-switch-toggle';
import '@esa/ecology/esa-tooltip';

import { controlErrorMessage, formatDate, FormControl, HttpErrorResponse, type AbstractControl, type FormGroup } from '../../lib/planning/ng-shim';
import type { PlanDateTypeEnum, PlanDetailDto, PlanElementCreateDto, PlanLinkCandidateDto, PlanElementDto, PlanElementScheduleChangeDto, PlanScheduleChangeModeEnum as PlanScheduleChangeModeType } from '../../lib/planning/model';
import { PlanScheduleChangeModeEnum } from '../../lib/planning/model';
import {
  canAddPlanLevelInline,
  createPlanElementForm,
  deepestPlanLevelDepth,
  findPlanElement,
  newPlanElementFormValue,
  nextPlanElementSortOrder,
  PLAN_DATE_TYPE_HINTS,
  PLAN_DATE_TYPE_OPTIONS,
  planElementFormValue,
  planLevelBounds,
  refreshPlanElementDateValidity,
  toPlanElementCreateDto,
  toPlanElementUpdateDto,
  validPlanLevels,
  type PlanElementDrawerTarget,
  type PlanElementFormGroup,
  type PlanElementRights,
} from '../../lib/planning/plan-element';
import {
  createPlanLagForm,
  createPlanPredecessorForm,
  PLAN_DEFAULT_LAG_DAYS,
  planDependencyRemoveConfirmText,
  planElementPredecessorRows,
  planElementSuccessorRows,
  planPredecessorOptions,
  toPlanElementDependencyCreateDto,
  toPlanElementDependencyUpdateDto,
  type PlanDependencyRow,
  type PlanPredecessorOption,
} from '../../lib/planning/plan-dependencies';
import {
  PLAN_SCHEDULE_CHANGE_MODE_OPTIONS,
  planElementDatesChanged,
  planScheduleChangeMode,
  planScheduleChangeModeHint,
  toPlanElementScheduleChangeDto,
} from '../../lib/planning/plan-element-schedule';
import { planDateRange } from '../../lib/planning/plan-form';
import { isPlanScheduleChangeSetEmpty, PlanScheduleChangeKind } from '../../lib/planning/plan-schedule-preview';
import {
  alertWriteFailure,
  applyPlanChange,
  confirm,
  fieldErrors,
  forceClose,
  guardSideDialog,
  pinPlanVersion,
  planApi,
  planStore,
  planWrite,
  PLAN_RIGHTS,
  PLAN_RULES,
  pushAlert,
  requestClose,
  type PlanVersionPin,
  type SideDialogEl,
} from '../../lib/planning/plan-page';
import { openPlanSchedulePreview } from './plan-schedule-preview';
import { openPlanLevelPanel } from './plan-level-panel';
import { onPlanPresence, planPresence, planPresenceSentence, startPlanPresence } from '../../lib/planning/plan-presence';
import {
  discardPlanUnsavedChanges,
  keepPlanUnsavedChanges,
  planElementFieldLabel,
  planElementFieldsChanged,
  planUnsavedChanges,
  planUnsavedExpiryLabel,
  type PlanUnsavedChanges,
} from '../../lib/planning/plan-unsaved';
import type { PlanElementFormValue } from '../../lib/planning/plan-element';

/**
 * DRAFT MODE (new design, "Plan Editing: Proposed Direction"): opening an element from inside a draft opens this drawer
 * over the draft. Only the dates and date type are editable, and Save writes them to the draft (no preview: the draft
 * shows the cascade on the chart, and Undo takes it back). Everything else reads as it is and says it is edited on the
 * live plan. Someone else's draft opens it read-only.
 */
export interface PlanElementDrawerDraft {
  /** The header's subtitle: "Draft · Permits slip 6 mo". */
  label: string;
  readOnly: boolean;
  /** The hint over the fields, in place of the draft one (the repo page's read-only Live, 2026-10-28). */
  note?: string;
  /** Every field editable, not only the dates (the repo page's own draft, 2026-10-28): Save carries them all. */
  editsFields?: boolean;
  /** The header's badge in place of the subtitle: Live Plan (orange), or the draft's name (green). */
  badge?: { text: string; state: 'live' | 'draft' };
  /** Budget by fiscal year, read here and edited in the page's Budget view, in place of the one Budget field. */
  budget?: () => { rows: { label: string; amount: string }[]; total: string } | null;
  onOpenBudget?: () => void;
  /** No money for this person at this level (Who Sees It): the Budget field and summary both stay out. */
  hideBudget?: boolean;
  /** The element's own page ("Open Task Page"), when it has one. */
  detail?: () => { href: string; label: string } | null;
  /** The footer's Save, named for where it goes ("Save to My Draft" from Live, 2026-10-28 draft first). */
  saveLabel?: string;
  /** Publish Now beside Save (draft first: offered only when it's safe); the edit as Save would hand it. */
  publishNow?: (edit: Parameters<PlanElementDrawerDraft['save']>[0]) => void;
  /** A new item in the draft (2026-10-28, draft first): the create form's element, as the API would take it. */
  create?: (dto: PlanElementCreateDto) => void;
  /** Waits On in the draft (2026-10-28): its links added, re-lagged and removed as the draft's next edits. */
  links?: {
    candidates(successorID: string): Promise<PlanLinkCandidateDto[]>;
    add(predecessorID: string, successorID: string, lag: number): void;
    setLag(dependencyID: string, lag: number): void;
    remove(dependencyID: string): void;
  };
  /** The plan as the draft has it. */
  plan(): PlanDetailDto;
  subscribe(listener: () => void): () => void;
  save(edit: {
    PlanElementID: string;
    StartDate: string | null;
    EndDate: string | null;
    PlanDateType: PlanDateTypeEnum;
    /** With editsFields: the element's own fields as the form has them. */
    fields?: { PlanElementName: string; LevelDepth?: number; IsMilestone: boolean; Notes: string | null };
  }): void;
}

export interface PlanElementDrawerHandle {
  target: PlanElementDrawerTarget;
  /** Ask the drawer to close through its discard guard; resolves whether it closed. */
  requestClose(): Promise<boolean>;
  /** Close without asking (the element it shows was deleted). */
  forceClose(): void;
  /** Resolves once the drawer has closed (any path). */
  closed: Promise<void>;
}

/** The link action in flight, so the pressed button spins and every other link control only greys. */
type PlanLinkVerb = 'lag' | 'remove' | 'add';
interface PlanPendingLink {
  verb: PlanLinkVerb;
  /** The Waits on row acted on; null for an add. */
  planElementDependencyID: string | null;
}

/** The Add predecessor picker's options: fetched each time the row opens and after every link change. */
type PlanPredecessorCandidates = { status: 'loading' } | { status: 'loaded'; options: PlanPredecessorOption[] } | { status: 'failed' };

type ValueEl = HTMLElement & { value: string; errorText: string; disabled: boolean; required: boolean; label: string; min: string; max: string };
type OptionsEl = ValueEl & { options: { label: string; value: string }[]; helpText: string; loading?: boolean };
type SwitchEl = HTMLElement & { checked: boolean; disabled: boolean };

const MILESTONE_BLOCKED_REASON = "An element with child elements can't be a milestone.";

// ── The shell ───────────────────────────────────────────────────────────────────────────────────────────────────────

interface Shell {
  root: HTMLElement;
  dialog: SideDialogEl;
  q<T extends Element = HTMLElement>(key: string): T;
  clone(name: string): HTMLElement;
  spinner(): HTMLElement;
}

let shell: Shell | null = null;
/** The open drawer's guard; the shell's close paths (Esc, X, backdrop) all ask it. */
let activeCanClose: () => boolean | Promise<boolean> = () => true;

function getShell(): Shell {
  if (shell) return shell;
  const root = document.querySelector<HTMLElement>('[data-bcn-plan-element-drawer]');
  if (!root) throw new Error('BcnPlanElementDrawer is not on the page.');
  const dialog = root.querySelector<SideDialogEl>('esa-side-dialog')!;
  const tpl = (name: string) => root.querySelector<HTMLTemplateElement>(`template[data-ped-tpl="${name}"]`)!.content;
  shell = {
    root,
    dialog,
    q: <T extends Element = HTMLElement>(key: string) => root.querySelector<T>(`[data-ped="${key}"]`)!,
    clone: (name) => tpl(name).firstElementChild!.cloneNode(true) as HTMLElement,
    spinner: () => tpl('spinner').querySelector('.esa-button__spinner')!.cloneNode(true) as HTMLElement,
  };
  void guardSideDialog(dialog, () => activeCanClose());
  return shell;
}

// ── esa-button at runtime (the .astro lego is compile-time; its rendered nodes are toggled here) ──────────────────

/** An esa-button's wrapper, found from the native control the data-* hook landed on. */
function wrapOf(native: HTMLElement): HTMLElement {
  return native.closest<HTMLElement>('.esa-button') ?? native;
}

/** Beacon's [disabled] on a ui-button. */
function setButtonDisabled(native: HTMLElement, disabled: boolean): void {
  const wrap = wrapOf(native);
  const loading = wrap.classList.contains('esa-button--loading');
  (native as HTMLButtonElement).disabled = disabled || loading;
  wrap.classList.toggle('esa-button--disabled', disabled);
}

/** Beacon's [loadingButton]: the spinner replaces the label / icon, and the button holds. */
function setButtonLoading(native: HTMLElement, loading: boolean, spinner: () => HTMLElement): void {
  const wrap = wrapOf(native);
  if (wrap.classList.contains('esa-button--loading') === loading) return;
  wrap.classList.toggle('esa-button--loading', loading);
  native.toggleAttribute('aria-busy', loading);
  if (loading) {
    (native as HTMLButtonElement).disabled = true;
    native.prepend(spinner());
  } else {
    native.querySelector(':scope > .esa-button__spinner')?.remove();
    (native as HTMLButtonElement).disabled = wrap.classList.contains('esa-button--disabled');
  }
  native.querySelector(':scope > .esa-button__label')?.classList.toggle('esa-button__label--hidden', loading);
  native.querySelectorAll<HTMLElement | SVGElement>(':scope > :not(.esa-button__label):not(.esa-button__spinner)').forEach((icon) => {
    (icon as HTMLElement).style.display = loading ? 'none' : '';
  });
}

/** Names an icon-only button, and its tooltip; the native title would double the esa-tooltip bubble. */
function nameIconButton(native: HTMLElement, label: string): void {
  native.setAttribute('aria-label', label);
  native.removeAttribute('title');
  const tip = native.closest('esa-tooltip') as (HTMLElement & { text: string }) | null;
  if (tip) tip.text = label;
}

function show(el: Element, visible: boolean): void {
  (el as HTMLElement).hidden = !visible;
}

/** A field shows its error once touched, as ui-field-error does. */
function errorOf(control: AbstractControl): string {
  return control.touched && control.invalid ? controlErrorMessage(control) ?? '' : '';
}

/** A 400's field messages land on their inputs; what is left (form-level) is alerted, as the HTTP interceptor does. */
function applyServerErrorsAndAlert(form: FormGroup<any>, error: unknown, fallback: string): void {
  if (error instanceof HttpErrorResponse && error.status === 400) {
    const leftover: string[] = [];
    for (const [key, messages] of Object.entries(fieldErrors(error))) {
      const control = (form.controls as Record<string, AbstractControl | undefined>)[key];
      if (control && messages.length) {
        control.errors = { server: { message: messages.join(' ') } };
        control.markAsTouched();
      } else leftover.push(...messages);
    }
    if (leftover.length) pushAlert(leftover.join(' '), 'danger');
    return;
  }
  alertWriteFailure(error, fallback);
}

/** Moves focus once the swap that brings `target` in has drawn (afterNextRender). */
function focusAfterRender(target: () => HTMLElement | null | undefined): void {
  requestAnimationFrame(() => requestAnimationFrame(() => target()?.focus()));
}

// ── One drawer ──────────────────────────────────────────────────────────────────────────────────────────────────────

export function openPlanElementDrawer(args: {
  target: PlanElementDrawerTarget;
  onOpenElement: (planElementID: string) => void;
  draft?: PlanElementDrawerDraft;
}): PlanElementDrawerHandle {
  const s = getShell();
  const { dialog, q } = s;
  const target = args.target;
  const rights: PlanElementRights = { canUpdate: PLAN_RIGHTS.canUpdate, canCreate: PLAN_RIGHTS.canCreate, canDelete: PLAN_RIGHTS.canDelete };
  const isCreate = target.kind === 'create';
  /** Create needs the Create right to open at all; edit without Update shows the element read-only. */
  const draft = args.draft ?? null;
  const canSave = (isCreate || rights.canUpdate) && !draft?.readOnly;

  // ── Derived from the page's plan (her computed() values) ──
  const plan = () => (draft ? draft.plan() : planStore.plan);
  const element = (): PlanElementDto | null =>
    target.kind === 'edit' ? findPlanElement(plan().Elements, target.planElementID)?.element ?? null : null;
  const parent = (): PlanElementDto | null => {
    if (target.kind === 'edit') return findPlanElement(plan().Elements, target.planElementID)?.parent ?? null;
    return target.parentPlanElementID ? findPlanElement(plan().Elements, target.parentPlanElementID)?.element ?? null : null;
  };
  const predecessorRows = () => (target.kind === 'edit' ? planElementPredecessorRows(plan(), target.planElementID) : []);
  const successorRows = () => (target.kind === 'edit' ? planElementSuccessorRows(plan(), target.planElementID) : []);
  const hasChildren = () => (element()?.Children?.length ?? 0) > 0;
  const levelBounds = () => planLevelBounds(parent(), element()?.Children);
  const levelOptions = () => validPlanLevels(plan().Levels, levelBounds());
  const canAddLevel = () => canSave && canAddPlanLevelInline(plan().Levels, levelBounds(), rights.canCreate, PLAN_RULES.MaxLevels);
  const dateRange = () => planDateRange(PLAN_RULES);

  /** The version this drawer's form loaded: its saves are checked against it, however the page refreshes meanwhile. */
  const versionPin: PlanVersionPin = pinPlanVersion();
  const initialElement = element();
  const form: PlanElementFormGroup = createPlanElementForm(
    target.kind === 'edit' && initialElement ? planElementFormValue(initialElement) : newPlanElementFormValue(levelOptions()),
    () => dateRange()
  );
  const formValue = () => form.getRawValue();

  // ── Unsaved changes and presence (new design, "Plan Editing: Proposed Direction") ──
  // A refused save keeps what the editor typed, here in the open drawer, with every field someone else changed flagged;
  // the next Save is checked against the plan they now see. Closing a drawer that holds kept values keeps them for
  // UNSAVED_KEEP_DAYS, and reopening the element offers them back. Never inside a draft: a draft has no refused saves.
  type FieldKey = keyof PlanElementFormValue;
  const keeps = !draft;
  /** The element as this form last loaded it: what "someone else changed" is measured from. */
  let loadedValue: PlanElementFormValue = formValue();
  /** The refused save in hand: who changed the plan, the fields they changed, and which of those the editor changed too. */
  let refused: { userName: string | null; theirs: FieldKey[]; overlap: FieldKey[] } | null = null;
  /** Kept values from an earlier refused save, offered back on open. */
  let offer: PlanUnsavedChanges | null = keeps && target.kind === 'edit' ? (planUnsavedChanges(plan().PlanID ?? '').get(target.planElementID) ?? null) : null;
  /** Once the editor has values that were refused (or resumed them), closing keeps them instead of discarding them. */
  let keepOnClose = false;
  let flags: Partial<Record<FieldKey, string>> = {};
  const programID = (): string | null => {
    let id = target.kind === 'edit' ? target.planElementID : target.parentPlanElementID;
    let root: string | null = null;
    while (id) {
      root = id;
      id = findPlanElement(plan().Elements, id)?.parent?.PlanElementID ?? null;
    }
    return root;
  };
  const isMilestone = () => formValue().IsMilestone;
  const startDate = () => formValue().StartDate || null;
  const dateTypeHint = () => PLAN_DATE_TYPE_HINTS[formValue().PlanDateType];
  const selectedLevel = () => levelOptions().find((level) => level.Depth === formValue().LevelDepth) ?? null;
  const title = () => (isCreate ? `New ${selectedLevel()?.SingularName ?? 'element'}` : element()?.PlanElementName ?? '');
  const subtitle = () => {
    if (draft) return draft.label;
    if (!isCreate) return element()?.LevelSingularName ?? '';
    const p = parent();
    return p ? `Under ${p.PlanElementName}` : 'Top level';
  };

  let isSaving = false;

  // The scheduler (BCN-1822): a date edit is previewed before it saves, since it can push other elements.
  /** A parent's choice of what its new dates apply to. Outside the element form: it is how to save, not a field saved. */
  const scheduleModeControl = new FormControl<PlanScheduleChangeModeType>(PlanScheduleChangeModeEnum.ThisItemOnly, { nonNullable: true });
  const scheduleModeHint = () => planScheduleChangeModeHint(scheduleModeControl.value);
  const datesChanged = () => planElementDatesChanged(element(), formValue());
  /** The mode choice shows only on a parent whose dates changed; a leaf has nothing under it to choose about. */
  const showScheduleMode = () => canSave && hasChildren() && datesChanged();

  // Waits on's link actions (BCN-1821): they apply immediately, each handing its returned plan to the page.
  let lagEditorID: string | null = null;
  const lagForm = createPlanLagForm();
  let pendingLink: PlanPendingLink | null = null;
  const isLinkBusy = () => pendingLink !== null;

  let isAddingPredecessor = false;
  const predecessorForm = createPlanPredecessorForm();
  let predecessorCandidates: PlanPredecessorCandidates = { status: 'loading' };
  const candidatesStatus = () => predecessorCandidates.status;
  const predecessorOptions = () => (predecessorCandidates.status === 'loaded' ? predecessorCandidates.options : []);
  const noPredecessorCandidates = () => predecessorCandidates.status === 'loaded' && !predecessorCandidates.options.length;
  const showPredecessorPicker = () => candidatesStatus() !== 'failed' && !noPredecessorCandidates();
  /** Bumped to drop a candidates fetch still in flight (her candidatesSubscription.unsubscribe()). */
  let candidatesRequest = 0;

  let isOpen = true;
  let resolveClosed!: () => void;
  const closed = new Promise<void>((resolve) => (resolveClosed = resolve));

  // ── Fields ──
  const nameField = q<ValueEl>('name');
  const levelField = q<OptionsEl>('level');
  const addLevelWrap = q('add-level-wrap');
  const addLevelButton = q('add-level');
  const datesGroup = q('dates');
  const startField = q<ValueEl>('start');
  const endField = q<ValueEl>('end');
  const spanBox = q('span');
  const spanValue = q('span-value');
  const modeField = q<OptionsEl>('mode');
  const dateTypeField = q<OptionsEl>('date-type');
  const milestoneField = q<SwitchEl>('milestone');
  const budgetWrap = q('budget-wrap');
  const budgetField = q<ValueEl & { helpText: string }>('budget');
  const notesField = q<ValueEl & { helpText: string }>('notes');
  const milestoneHint = q('milestone-hint');
  const predList = q('pred-list');
  const succList = q('succ-list');
  const addPredForm = q<HTMLFormElement>('add-pred');
  const addPredOpenWrap = q('add-pred-open-wrap');
  const addPredOpenButton = q('add-pred-open');
  const predSelect = q<OptionsEl>('pred-select');
  const predLag = q<ValueEl>('pred-lag');
  const predAddButton = q('pred-add');
  const predCancelButton = q('pred-cancel');
  const saveButton = q('save');
  const publishButton = q('publish');
  const cancelButton = q('cancel');
  const closeButton = q('close');

  modeField.options = PLAN_SCHEDULE_CHANGE_MODE_OPTIONS.map((o) => ({ label: o.displayValue, value: o.value }));

  dateTypeField.options = PLAN_DATE_TYPE_OPTIONS.map((o) => ({ label: o.displayValue, value: o.value }));
  nameIconButton(addLevelButton, 'Add Level');

  /** Writes the form into the legos: on open, and when the drawer itself sets a value (a level just added). */
  const syncFields = () => {
    const v = formValue();
    nameField.value = v.PlanElementName;
    levelField.value = v.LevelDepth === null ? '' : String(v.LevelDepth);
    startField.value = v.StartDate;
    endField.value = v.EndDate;
    dateTypeField.value = v.PlanDateType;
    milestoneField.checked = v.IsMilestone;
    budgetField.value = v.Budget === null ? '' : String(v.Budget);
    notesField.value = v.Notes;
    modeField.value = scheduleModeControl.value;
  };

  if (!canSave) {
    form.disable();
  } else if (hasChildren()) {
    // An element with children can't be a milestone; the toggle says why in its hint.
    form.controls.IsMilestone.disable();
  }
  const fieldsDisabled = !canSave;
  for (const el of [nameField, levelField, startField, endField, dateTypeField, budgetField, notesField] as ValueEl[]) el.disabled = fieldsDisabled;
  milestoneField.disabled = form.controls.IsMilestone.disabled;
  // A draft changes dates and Estimated/Scheduled only; the rest is edited on the live plan.
  if (draft && !draft.editsFields) for (const el of [nameField, levelField, milestoneField, budgetField, notesField] as ValueEl[]) el.disabled = true;
  milestoneField.removeAttribute('aria-describedby');

  // ── render(): everything her template binds ──
  const render = () => {
    if (!isOpen) return;
    const range = dateRange();
    const t = title();
    q('title').textContent = t;
    const sub = subtitle();
    q('subtitle').textContent = sub;
    const badge = draft?.badge;
    show(q('badge'), !!badge);
    if (badge) {
      q('badge').dataset.state = badge.state;
      const text = q('badge').querySelector('.esa-badge__text');
      if (text) text.textContent = badge.text;
    }
    show(q('subtitle'), !!sub && !badge);
    const detail = draft?.detail?.() ?? null;
    show(q('detail'), !!detail);
    if (detail) {
      q<HTMLAnchorElement>('detail-link').href = detail.href;
      q('detail-label').textContent = detail.label;
    }
    (dialog as unknown as { requestUpdate?: () => void }).requestUpdate?.();

    renderKept();

    // Name + Level
    nameField.errorText = errorOf(form.controls.PlanElementName);
    (nameField as ValueEl & { helpText: string }).helpText = flags.PlanElementName ?? '';
    (levelField as OptionsEl).helpText = flags.LevelDepth ?? '';
    (startField as ValueEl & { helpText: string }).helpText = flags.StartDate ?? '';
    (endField as ValueEl & { helpText: string }).helpText = flags.EndDate ?? '';
    const levels = levelOptions();
    const levelOpts = levels.map((level) => ({ label: level.SingularName ?? '', value: String(level.Depth) }));
    if (JSON.stringify(levelField.options) !== JSON.stringify(levelOpts)) levelField.options = levelOpts;
    levelField.errorText = errorOf(form.controls.LevelDepth);
    show(addLevelWrap, canAddLevel() && !draft);
    show(q('draft-note'), !!draft && (!!draft.note || !draft.editsFields));
    // The shell is shared, so the markup's draft hint is kept to come back to when the next drawer has no note of its own.
    const note = q('draft-note');
    note.dataset.default ??= note.textContent ?? '';
    note.textContent = draft?.note ?? note.dataset.default;


    // Scheduling
    const milestone = isMilestone();
    datesGroup.setAttribute('aria-label', milestone ? 'Date' : 'Date range');
    startField.label = milestone ? 'Date' : 'Start Date';
    startField.required = milestone;
    startField.min = range?.min ?? '';
    startField.max = range?.max ?? '';
    startField.errorText = errorOf(form.controls.StartDate);
    show(endField, !milestone);
    endField.min = startDate() ?? range?.min ?? '';
    endField.max = range?.max ?? '';
    endField.errorText = errorOf(form.controls.EndDate);

    const children = hasChildren();
    show(spanBox, children);
    if (children) {
      const el = element();
      spanValue.textContent =
        el?.SpanStartDate && el?.SpanEndDate ? `${formatDate(el.SpanStartDate, 'MMM d, y')} – ${formatDate(el.SpanEndDate, 'MMM d, y')}` : 'Not yet scheduled';
    }
    show(modeField, showScheduleMode() && !draft);
    modeField.helpText = scheduleModeHint();
    // A refused save's flag rides the toggle's own help (it is about this value); the type's meaning is the hint under it.
    dateTypeField.helpText = flags.PlanDateType ?? '';
    q('date-type-hint').textContent = dateTypeHint();
    show(milestoneHint, children);

    // Budget: none on a milestone. By fiscal year where the page has a budget sheet; else the one amount.
    const fy = draft?.budget ? draft.budget() : null;
    show(q('budget-section'), !milestone && !draft?.hideBudget);
    show(budgetWrap, !milestone && !draft?.budget && !draft?.hideBudget);
    show(q('budget-summary'), !milestone && !!draft?.budget && !draft?.hideBudget);
    if (fy) {
      const row = (label: string, amount: string, total = false) => {
        const div = document.createElement('div');
        if (total) div.dataset.total = '';
        div.append(Object.assign(document.createElement('dt'), { textContent: label }), Object.assign(document.createElement('dd'), { textContent: amount }));
        return div;
      };
      q('budget-fy').replaceChildren(...fy.rows.map((r) => row(r.label, r.amount)), row('Total', fy.total, true));
    }
    budgetField.errorText = errorOf(form.controls.Budget);
    budgetField.helpText = flags.Budget ?? '';
    notesField.errorText = errorOf(form.controls.Notes);
    notesField.helpText = flags.Notes ?? '';

    // Waits on / Blocks (edit only)
    const linksHere = !draft || (!!draft.links && !draft.readOnly);
    show(q('waits-on'), !isCreate && linksHere);
    show(q('blocks'), !isCreate && linksHere);
    if (!isCreate && linksHere) {
      renderPredecessors();
      renderAddPredecessor();
      renderSuccessors();
    }

    // Footer
    show(saveButton.closest('.esa-button')!, canSave);
    show(publishButton.closest('.esa-button')!, canSave && !!draft?.publishNow);
    const saveLabel = saveButton.querySelector('.esa-button__label');
    if (saveLabel) saveLabel.textContent = draft?.saveLabel ?? 'Save';
    setButtonDisabled(publishButton, isSaving || isLinkBusy());
    show(cancelButton.closest('.esa-button')!, canSave);
    show(closeButton.closest('.esa-button')!, !canSave);
    // Held while a link action is out: closing would drop the plan it returns (see canClose).
    setButtonLoading(saveButton, isSaving, s.spinner);
    setButtonDisabled(saveButton, isLinkBusy());
    setButtonDisabled(cancelButton, isSaving || isLinkBusy());
    setButtonDisabled(closeButton, isLinkBusy());
  };

  // ── Waits on rows (keyed, so an open lag editor survives a plan refresh) ──
  const predRowEls = new Map<string, HTMLElement>();
  const renderPredecessors = () => {
    const rows = predecessorRows();
    const seen = new Set<string>();
    rows.forEach((row) => {
      seen.add(row.planElementDependencyID);
      let li = predRowEls.get(row.planElementDependencyID);
      if (!li) {
        li = buildPredecessorRow(row.planElementDependencyID);
        predRowEls.set(row.planElementDependencyID, li);
      }
      paintPredecessorRow(li, row);
      predList.append(li); // re-appending keeps Gantt row order
    });
    for (const [id, li] of predRowEls) {
      if (!seen.has(id)) {
        li.remove();
        predRowEls.delete(id);
      }
    }
    show(q('pred-none'), !rows.length);
  };

  const rowByID = (planElementDependencyID: string) => predecessorRows().find((r) => r.planElementDependencyID === planElementDependencyID);

  const buildPredecessorRow = (planElementDependencyID: string): HTMLElement => {
    const li = s.clone('pred-row');
    const part = (key: string) => li.querySelector<HTMLElement>(`[data-row="${key}"]`)!;
    const editForm = part('edit') as HTMLFormElement;
    const lagInput = part('lag-input') as ValueEl;
    lagInput.addEventListener('change', (e) => {
      const raw = String((e as CustomEvent<{ value: string }>).detail?.value ?? lagInput.value);
      lagForm.controls.LagDays.setValue(raw === '' ? null : Number(raw));
      lagForm.controls.LagDays.markAsDirty();
      paintPredecessorRow(li, rowByID(planElementDependencyID));
    });
    lagInput.addEventListener('focusout', () => {
      lagForm.controls.LagDays.markAsTouched();
      paintPredecessorRow(li, rowByID(planElementDependencyID));
    });
    const submitLag = (e: Event) => {
      e.preventDefault();
      const row = rowByID(planElementDependencyID);
      if (row) saveLag(row);
    };
    editForm.addEventListener('submit', submitLag);
    editForm.addEventListener('keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Enter') submitLag(e);
    });
    part('save-lag').addEventListener('click', submitLag);
    part('cancel-lag').addEventListener('click', () => cancelLagEdit());
    part('edit-lag').addEventListener('click', () => {
      const row = rowByID(planElementDependencyID);
      if (row) editLag(row);
    });
    part('remove').addEventListener('click', () => {
      const row = rowByID(planElementDependencyID);
      if (row) void removePredecessor(row);
    });
    return li;
  };

  const paintPredecessorRow = (li: HTMLElement, row: PlanDependencyRow | undefined) => {
    if (!row) return;
    const part = (key: string) => li.querySelector<HTMLElement>(`[data-row="${key}"]`)!;
    const editing = lagEditorID === row.planElementDependencyID;
    const editForm = part('edit');
    const view = part('view');
    const wasEditing = !editForm.hidden;
    show(editForm, editing);
    show(view, !editing);
    li.querySelectorAll<HTMLElement>('[data-row="name"]').forEach((n) => (n.textContent = row.planElementName));
    part('lag').textContent = `, ${row.lagLabel}`;

    const busy = isLinkBusy();
    const lagInput = part('lag-input') as ValueEl;
    if (editing) {
      lagInput.setAttribute('aria-label', `Lag after ${row.planElementName}, in days`);
      if (!wasEditing) {
        const v = lagForm.controls.LagDays.value;
        lagInput.value = v === null ? '' : String(v);
        // autoFocus
        focusAfterRender(() => lagInput);
      }
      lagInput.errorText = errorOf(lagForm.controls.LagDays);
      const saveLagButton = part('save-lag');
      nameIconButton(saveLagButton, `Save Lag After ${row.planElementName}`);
      setButtonLoading(saveLagButton, pendingLink?.verb === 'lag' && pendingLink.planElementDependencyID === row.planElementDependencyID, s.spinner);
      setButtonDisabled(saveLagButton, busy);
      const cancelLagButton = part('cancel-lag');
      nameIconButton(cancelLagButton, 'Cancel');
      setButtonDisabled(cancelLagButton, busy);
    } else {
      show(part('actions'), rights.canUpdate || rights.canDelete);
      const editLagButton = part('edit-lag');
      show(editLagButton.closest('esa-tooltip')!, rights.canUpdate);
      nameIconButton(editLagButton, `Edit Lag After ${row.planElementName}`);
      setButtonDisabled(editLagButton, busy);
      const removeButton = part('remove');
      show(removeButton.closest('esa-tooltip')!, rights.canDelete);
      nameIconButton(removeButton, `Remove Link to ${row.planElementName}`);
      setButtonLoading(removeButton, pendingLink?.verb === 'remove' && pendingLink.planElementDependencyID === row.planElementDependencyID, s.spinner);
      setButtonDisabled(removeButton, busy);
    }
  };

  // ── Add predecessor ──
  const renderAddPredecessor = () => {
    const canCreate = rights.canCreate;
    show(addPredForm, canCreate && isAddingPredecessor);
    show(addPredOpenWrap, canCreate && !isAddingPredecessor);
    setButtonDisabled(addPredOpenButton, isLinkBusy());
    if (!isAddingPredecessor) return;
    const status = candidatesStatus();
    show(q('cand-failed'), status === 'failed');
    show(q('cand-none'), status !== 'failed' && noPredecessorCandidates());
    show(q('cand-picker'), showPredecessorPicker());
    const opts = predecessorOptions().map((option) => ({ label: predecessorOptionLabel(option), value: option.planElementID }));
    if (JSON.stringify(predSelect.options) !== JSON.stringify(opts)) predSelect.options = opts;
    predSelect.loading = status === 'loading';
    predSelect.errorText = errorOf(predecessorForm.controls.PredecessorPlanElementID);
    predLag.errorText = errorOf(predecessorForm.controls.LagDays);
    show(predAddButton.closest('.esa-button')!, showPredecessorPicker());
    setButtonLoading(predAddButton, pendingLink?.verb === 'add', s.spinner);
    setButtonDisabled(predAddButton, isLinkBusy());
    setButtonDisabled(predCancelButton, isLinkBusy());
  };

  /** Writes the predecessor form into its legos (open, and the reset after an add). */
  const syncPredecessorFields = () => {
    const v = predecessorForm.getRawValue();
    predSelect.value = v.PredecessorPlanElementID ?? '';
    predLag.value = v.LagDays === null ? '' : String(v.LagDays);
  };

  // ── Blocks rows ──
  const renderSuccessors = () => {
    const rows = successorRows();
    succList.replaceChildren(
      ...rows.map((row) => {
        const li = s.clone('succ-row');
        const button = li.querySelector<HTMLButtonElement>('[data-row="open"]')!;
        li.querySelector('[data-row="name"]')!.textContent = row.planElementName;
        li.querySelector('[data-row="lag"]')!.textContent = `, ${row.lagLabel}`;
        button.disabled = isLinkBusy();
        button.addEventListener('click', () => openElement(row.planElementID));
        return li;
      })
    );
    show(q('succ-none'), !rows.length);
  };

  // ── Actions (her methods, in her order) ──

  /** Opens the inline Add level panel over this drawer; the new level is applied to the page and selected here. */
  const openAddLevel = async () => {
    const updated = await openPlanLevelPanel({ over: dialog, pin: versionPin });
    if (!updated || !isOpen) return;
    applyPlanChange(updated);
    // The level just added is the plan's new deepest.
    form.controls.LevelDepth.setValue(deepestPlanLevelDepth(updated.Levels));
    // setValue doesn't mark the form dirty, and the discard guard keys off dirty.
    form.markAsDirty();
    render();
    levelField.value = String(form.controls.LevelDepth.value ?? '');
  };

  const close = () => forceClose(dialog);

  /** The footer's Save: creates or updates, hands the returned plan to the page and closes. An untouched edit just closes. */
  const save = (publish = false) => {
    // Save closes the drawer; held while a link action is out, for the reason canClose gives.
    if (isLinkBusy()) return;
    if (!isCreate && !form.dirty) {
      close();
      return;
    }
    form.markAllAsTouched();
    refreshPlanElementDateValidity(form);
    render();
    if (form.invalid || isSaving) return;
    isSaving = true;
    render();

    const value = form.getRawValue();
    if (draft?.create && target.kind === 'create') {
      isSaving = false;
      draft.create(toPlanElementCreateDto(value, target.parentPlanElementID, nextPlanElementSortOrder(parent()?.Children ?? plan().Elements)));
      close();
      return;
    }
    if (draft && target.kind === 'edit') {
      isSaving = false;
      (publish && draft.publishNow ? draft.publishNow : draft.save)({
        PlanElementID: target.planElementID,
        StartDate: value.StartDate || null,
        EndDate: (value.IsMilestone ? value.StartDate : value.EndDate) || null,
        PlanDateType: value.PlanDateType,
        ...(draft.editsFields
          ? { fields: { PlanElementName: value.PlanElementName.trim(), LevelDepth: value.LevelDepth ?? undefined, IsMilestone: value.IsMilestone, Notes: value.Notes.trim() || null } }
          : {}),
      });
      close();
      return;
    }
    if (target.kind === 'edit' && datesChanged()) {
      void saveSchedule(target.planElementID, toPlanElementScheduleChangeDto(value, planScheduleChangeMode(hasChildren(), scheduleModeControl.value)));
      return;
    }
    const current = plan();
    const planID = current.PlanID!;
    const request =
      target.kind === 'edit'
        ? planWrite((token) => planApi.updateElement(planID, target.planElementID, toPlanElementUpdateDto(value), token), versionPin, { keepsValuesOnConflict: keeps })
        : planWrite(
            (token) =>
              planApi.createElement(
                planID,
                toPlanElementCreateDto(value, target.parentPlanElementID, nextPlanElementSortOrder(parent()?.Children ?? current.Elements)),
                token
              ),
            versionPin,
            { keepsValuesOnConflict: keeps }
          );
    const name = value.PlanElementName.trim();

    void (request as Promise<PlanDetailDto>)
      .then((updated) => applySaved(updated, name))
      .catch((error) => handleSaveError(error))
      .finally(() => {
        isSaving = false;
        render();
      });
  };

  /**
   * A date edit: previews it, and when it moves nothing else and flags nothing, saves it straight away; otherwise the
   * stacked preview shows what it does and only its Confirm saves. Going back from the preview leaves the form as it
   * was, still dirty, so Save previews again.
   */
  const saveSchedule = async (planElementID: string, change: PlanElementScheduleChangeDto) => {
    isSaving = true;
    render();
    const planID = plan().PlanID!;
    // A refusal inside the stacked preview closes it as if confirmed with the current plan, and the drawer keeps the values.
    let refusedBy: { userName: string | null } | null = null;
    const confirmSave = () =>
      (planWrite((token) => planApi.updateElementSchedule(planID, planElementID, change, token), versionPin, { keepsValuesOnConflict: keeps }) as Promise<PlanDetailDto>).catch(
        async (error) => {
          if (!(keeps && error instanceof HttpErrorResponse && error.status === 409)) throw error;
          refusedBy = { userName: error.error?.UpdateUserName ?? null };
          return planApi.getPlan(planID);
        }
      );
    try {
      const changeSet = await planApi.previewElementSchedule(planID, planElementID, change);
      let updated: PlanDetailDto | null;
      if (isPlanScheduleChangeSetEmpty(changeSet)) {
        updated = await confirmSave();
      } else {
        // Save stops spinning once the preview is up: the preview's Confirm carries its own.
        isSaving = false;
        render();
        updated = await openPlanSchedulePreview({
          subject: change.PlanElementName ?? '',
          kind: PlanScheduleChangeKind.ElementEdit,
          changeSet,
          confirm: confirmSave,
          over: dialog,
        });
      }
      const refusal = refusedBy as { userName: string | null } | null;
      if (refusal) await keepRefused(refusal.userName);
      else if (updated) applySaved(updated, change.PlanElementName ?? '');
    } catch (error) {
      handleSaveError(error);
    } finally {
      isSaving = false;
      render();
    }
  };

  /** A saved element: the page redraws from the returned plan and the drawer closes. */
  const applySaved = (updated: PlanDetailDto, name: string) => {
    if (keeps && target.kind === 'edit') discardPlanUnsavedChanges(updated.PlanID ?? '', target.planElementID);
    keepOnClose = false;
    applyPlanChange(updated);
    close();
    // pushAlertAfterClose
    pushAlert(isCreate ? `'${name}' added.` : `'${name}' saved.`, 'success');
  };

  const handleSaveError = (error: unknown) => {
    if (keeps && error instanceof HttpErrorResponse && error.status === 409) {
      void keepRefused(error.error?.UpdateUserName ?? null);
      return;
    }
    // A field 400 sits on its input; a form-level one is alerted.
    applyServerErrorsAndAlert(form, error, `Failed to ${isCreate ? 'add' : 'save'} the element. Please try again.`);
    render();
  };

  /** A field's value as the notice and the field flags read it. */
  const readable = (key: FieldKey, value: PlanElementFormValue): string => {
    const v = value[key];
    if (key === 'StartDate' || key === 'EndDate') return v ? formatDate(String(v), 'MMM d, y') : 'no date';
    if (key === 'LevelDepth') return plan().Levels?.find((l) => l.Depth === v)?.SingularName ?? String(v ?? '');
    if (key === 'IsMilestone') return v ? 'a milestone' : 'not a milestone';
    if (key === 'Budget') return v === null || v === undefined || v === '' ? 'no budget' : `$${Number(v).toLocaleString('en-US')}`;
    if (key === 'Notes') return v ? `"${String(v).slice(0, 60)}${String(v).length > 60 ? '…' : ''}"` : 'no notes';
    return String(v ?? '');
  };
  const list = (keys: FieldKey[]) => keys.map((k) => planElementFieldLabel(k).toLowerCase()).join(', ').replace(/, ([^,]*)$/, ' and $1');

  /** Flags each field someone else changed, with what it is now. */
  const flagTheirs = (who: string | null, theirs: FieldKey[], now: PlanElementFormValue) => {
    flags = Object.fromEntries(theirs.map((key) => [key, `${who ?? 'Someone'} changed this to ${readable(key, now)}`]));
  };

  /**
   * The version check refused a save: someone changed the plan since this form loaded. The drawer stays open on what
   * the editor typed; the page takes the current plan; the next Save is checked against it. Where nobody else changed
   * the same fields, that Save just applies the editor's changes to the current plan.
   */
  const keepRefused = async (who: string | null) => {
    const planID = plan().PlanID ?? '';
    try {
      const fresh = await planApi.getPlan(planID);
      if (!isOpen) return;
      applyPlanChange(fresh);
      versionPin.moveTo(fresh.VersionToken ?? null);
    } catch {
      /* the next poll catches up; the values stay */
    }
    const current = target.kind === 'edit' ? element() : null;
    const now = current ? planElementFormValue(current) : loadedValue;
    const theirs = target.kind === 'edit' ? planElementFieldsChanged(loadedValue, now) : [];
    const mine = planElementFieldsChanged(loadedValue, formValue());
    refused = { userName: who, theirs, overlap: theirs.filter((key) => mine.includes(key)) };
    flagTheirs(who, theirs, now);
    loadedValue = now;
    keepOnClose = target.kind === 'edit';
    isSaving = false;
    render();
  };

  /** Keeps what the editor typed for later, as unsaved changes on the element. */
  const keepForLater = () => {
    if (target.kind !== 'edit') return;
    keepPlanUnsavedChanges({
      PlanID: plan().PlanID ?? '',
      PlanElementID: target.planElementID,
      PlanElementName: element()?.PlanElementName ?? formValue().PlanElementName,
      Values: formValue(),
      Loaded: loadedValue,
      ConflictUserName: refused?.userName ?? offer?.ConflictUserName ?? null,
    });
    pushAlert(`Your changes to '${element()?.PlanElementName ?? formValue().PlanElementName}' were kept. Open it again to resume editing.`, 'info', 6000);
  };

  const resumeKept = () => {
    const kept = offer;
    if (!kept) return;
    offer = null;
    form.reset(kept.Values);
    form.markAsDirty();
    syncFields();
    const now = loadedValue;
    const theirs = planElementFieldsChanged(kept.Loaded, now);
    flagTheirs(kept.ConflictUserName, theirs, now);
    const mine = planElementFieldsChanged(kept.Loaded, kept.Values);
    refused = { userName: kept.ConflictUserName, theirs, overlap: theirs.filter((key) => mine.includes(key)) };
    keepOnClose = true;
    render();
  };

  const discardKept = () => {
    if (target.kind === 'edit') discardPlanUnsavedChanges(plan().PlanID ?? '', target.planElementID);
    offer = null;
    if (refused) {
      refused = null;
      flags = {};
      keepOnClose = false;
      form.reset(loadedValue);
      syncFields();
    }
    render();
  };

  const renderKept = () => {
    const presenceText = keeps ? planPresenceSentence(planPresence(), programID()) : null;
    show(q('presence'), !!presenceText);
    q('presence-text').textContent = presenceText ?? '';

    let text = '';
    if (offer) {
      const when = formatDate(offer.KeptAt.slice(0, 10), 'MMM d, y');
      text = `You have unsaved changes to this element from ${when}. ${planUnsavedExpiryLabel(offer)}.`;
    } else if (refused) {
      const who = refused.userName ?? 'Someone';
      const base = `${who} changed this plan after you opened this. Your changes are kept here.`;
      text = refused.overlap.length
        ? `${base} They also changed the ${list(refused.overlap)}. Check the flagged fields, then Save.`
        : refused.theirs.length
          ? `${base} They changed the ${list(refused.theirs)}, which you didn't. Save applies your changes to the current plan.`
          : `${base} Save applies them to the current plan.`;
    }
    show(q('kept'), !!text);
    q('kept-text').textContent = text;
    show(q('kept-resume'), !!offer);
  };

  const editLag = (row: PlanDependencyRow) => {
    lagForm.reset({ LagDays: row.lagDays });
    lagEditorID = row.planElementDependencyID;
    render();
  };

  const cancelLagEdit = () => {
    const planElementDependencyID = lagEditorID;
    lagEditorID = null;
    render();
    if (planElementDependencyID) focusEditLag(planElementDependencyID);
  };

  /** Saves the open edit-lag row (PUT) and applies the returned plan; the row then reads the new lag. */
  const saveLag = (row: PlanDependencyRow) => {
    lagForm.markAllAsTouched();
    if (lagForm.invalid || !beginLink('lag', row.planElementDependencyID)) {
      render();
      return;
    }
    if (draft?.links) {
      draft.links.setLag(row.planElementDependencyID, toPlanElementDependencyUpdateDto(lagForm).LagDays!);
      pendingLink = null;
      lagEditorID = null;
      render();
      return;
    }
    const planID = plan().PlanID!;
    void (planWrite(
      (token) => planApi.updateDependency(planID, row.planElementDependencyID, toPlanElementDependencyUpdateDto(lagForm).LagDays!, token),
      versionPin
    ) as Promise<PlanDetailDto>)
      .then((updated) => {
        pendingLink = null;
        lagEditorID = null;
        applyPlanChange(updated);
        focusEditLag(row.planElementDependencyID);
      })
      .catch((error) => applyServerErrorsAndAlert(lagForm, error, 'Failed to change the lag. Please try again.'))
      .finally(() => {
        pendingLink = null;
        render();
      });
  };

  /** Removes a predecessor link (DELETE), after a confirm. */
  const removePredecessor = async (row: PlanDependencyRow) => {
    if (isLinkBusy()) return;
    const index = predecessorRows().findIndex((candidate) => candidate.planElementDependencyID === row.planElementDependencyID);
    const confirmed = await confirm({
      color: 'warn',
      header: 'Remove dependency',
      text: planDependencyRemoveConfirmText(element()?.PlanElementName ?? '', row),
      confirmButtonLabel: 'Remove',
    });
    if (!confirmed || !isOpen || !beginLink('remove', row.planElementDependencyID)) return;
    if (draft?.links) {
      draft.links.remove(row.planElementDependencyID);
      pendingLink = null;
      if (lagEditorID === row.planElementDependencyID) lagEditorID = null;
      if (isAddingPredecessor) reloadCandidates();
      render();
      return;
    }
    const planID = plan().PlanID!;
    try {
      const updated = (await planWrite((token) => planApi.deleteDependency(planID, row.planElementDependencyID, token), versionPin)) as PlanDetailDto;
      pendingLink = null;
      if (lagEditorID === row.planElementDependencyID) lagEditorID = null;
      applyPlanChange(updated);
      // The removed predecessor may be offered again.
      if (isAddingPredecessor) reloadCandidates();
      focusAfterRemove(index);
    } catch (error) {
      // A 400 is form-level: its messages are alerted.
      alertWriteFailure(error, 'Failed to remove the dependency. Please try again.');
    } finally {
      pendingLink = null;
      render();
    }
  };

  /** Opens the inline Add predecessor row and fetches what the element may wait on. Its picker takes focus. */
  const openAddPredecessor = () => {
    predecessorForm.reset({ PredecessorPlanElementID: null, LagDays: PLAN_DEFAULT_LAG_DAYS });
    syncPredecessorFields();
    isAddingPredecessor = true;
    reloadCandidates();
    focusAfterRender(() => predSelect);
  };

  const cancelAddPredecessor = () => {
    candidatesRequest += 1;
    isAddingPredecessor = false;
    render();
    focusAfterRender(() => addPredOpenButton);
  };

  /**
   * Links the chosen predecessor (POST), applies the returned plan and resets the row for another, holding the row
   * busy until the refreshed candidates arrive so the just-linked element can't be picked twice.
   */
  const addPredecessor = async () => {
    predecessorForm.markAllAsTouched();
    if (target.kind !== 'edit' || predecessorForm.invalid || !beginLink('add', null)) {
      render();
      return;
    }
    candidatesRequest += 1;
    if (draft?.links) {
      const dto = toPlanElementDependencyCreateDto(predecessorForm, target.planElementID);
      draft.links.add(dto.PredecessorPlanElementID!, target.planElementID, dto.LagDays ?? 0);
      predecessorForm.reset({ PredecessorPlanElementID: null, LagDays: PLAN_DEFAULT_LAG_DAYS });
      syncPredecessorFields();
      pendingLink = null;
      // The page's redraw lands the link in the draft's plan; the picker refetches after it.
      setTimeout(() => reloadCandidates(), 300);
      render();
      return;
    }
    const planID = plan().PlanID!;
    try {
      const updated = (await planWrite(
        (token) => planApi.createDependency(planID, toPlanElementDependencyCreateDto(predecessorForm, target.planElementID), token),
        versionPin
      )) as PlanDetailDto;
      applyPlanChange(updated);
      predecessorForm.reset({ PredecessorPlanElementID: null, LagDays: PLAN_DEFAULT_LAG_DAYS });
      syncPredecessorFields();
      // The link is committed once the POST resolves; a failed refresh only shows on the picker.
      await loadCandidates();
    } catch (error) {
      applyServerErrorsAndAlert(predecessorForm, error, 'Failed to add the dependency. Please try again.');
      // The candidates fetch was dropped for the POST; without a refetch the picker would sit loading.
      reloadCandidates();
    } finally {
      pendingLink = null;
      render();
    }
  };

  /** A Blocks row: the page swaps this drawer for that element's, prompting first if this one has unsaved edits. */
  const openElement = (planElementID: string) => args.onOpenElement(planElementID);

  const cancel = () => void requestClose(dialog, canClose);

  /** Marks the drawer's links busy with `verb`; false when a link action is already in flight, so the press is dropped. */
  const beginLink = (verb: PlanLinkVerb, planElementDependencyID: string | null): boolean => {
    if (isLinkBusy()) return false;
    pendingLink = { verb, planElementDependencyID };
    render();
    return true;
  };

  /** Refetches the Add predecessor candidates, dropping any fetch still in flight. */
  const reloadCandidates = () => void loadCandidates();

  /** The server is the single source of truth for what may be linked; the drawer offers exactly what it returns. */
  const loadCandidates = async (): Promise<void> => {
    if (target.kind !== 'edit') return;
    const request = ++candidatesRequest;
    predecessorCandidates = { status: 'loading' };
    render();
    try {
      const candidates = draft?.links ? await draft.links.candidates(target.planElementID) : await planApi.predecessorCandidates(plan().PlanID!, target.planElementID);
      if (request !== candidatesRequest || !isOpen) return;
      predecessorCandidates = { status: 'loaded', options: planPredecessorOptions(candidates) };
    } catch {
      if (request !== candidatesRequest || !isOpen) return;
      predecessorCandidates = { status: 'failed' };
    }
    render();
  };

  /** Focuses the row's Edit lag pencil once it is back in place of the lag editor. */
  const focusEditLag = (planElementDependencyID: string) =>
    focusAfterRender(() => predRowEls.get(planElementDependencyID)?.querySelector<HTMLElement>('[data-row="edit-lag"]'));

  /** After a remove: the row that took the removed one's place, else Add predecessor, else the row above. */
  const focusAfterRemove = (index: number) =>
    focusAfterRender(() => {
      const rows = Array.from(predList.children) as HTMLElement[];
      const rowControl = (row: HTMLElement | undefined) => row?.querySelector<HTMLElement>('button');
      return rowControl(rows[index]) ?? (addPredOpenWrap.hidden ? null : addPredOpenButton) ?? rowControl(rows[index - 1]);
    });

  /**
   * Unsaved fields, or a lag or predecessor typed into an open link row, prompt before the drawer closes. A link
   * action in flight holds the drawer open: the server commits it either way, and closing would drop the plan it
   * returns before it reaches the page.
   */
  const canClose = (): boolean | Promise<boolean> => {
    if (isLinkBusy()) return false;
    const editingLink = (lagEditorID !== null && lagForm.dirty) || (isAddingPredecessor && predecessorForm.dirty);
    // Values a save already tried to send are never discarded by a close: they're kept for later.
    if (keepOnClose && form.dirty) {
      keepForLater();
      return true;
    }
    if (!form.dirty && !editingLink) return true;
    return confirm({
      header: 'Discard unsaved changes?',
      text: 'You have unsaved changes to this element. Closing now will discard them.',
      confirmButtonLabel: 'Discard Changes',
      color: 'warn',
    });
  };

  // ── Wiring (removed on close) ──
  const ac = new AbortController();
  const on = (el: EventTarget, type: string, handler: (e: Event) => void) => el.addEventListener(type, handler, { signal: ac.signal });
  // The Budget section's way to the sheet, where the fiscal years are edited.
  on(q('budget-open'), 'click', () => draft?.onOpenBudget?.());
  const detailValue = (e: Event, el: { value: unknown }) => String((e as CustomEvent<{ value: unknown }>).detail?.value ?? el.value ?? '');
  const touch = (control: AbstractControl) => () => {
    control.markAsTouched();
    render();
  };
  const edit = <K extends keyof PlanElementFormGroup['controls']>(key: K, value: PlanElementFormGroup['controls'][K]['value']) => {
    const control = form.controls[key] as unknown as FormControl<typeof value>;
    control.setValue(value);
    control.markAsDirty();
  };

  // Her constructor: the date rules re-run after any change to the form.
  const formSub = form.valueChanges.subscribe(() => {
    refreshPlanElementDateValidity(form);
    render();
  });

  on(nameField, 'change', (e) => edit('PlanElementName', detailValue(e, nameField)));
  on(nameField, 'focusout', touch(form.controls.PlanElementName));
  on(levelField, 'change', (e) => {
    const v = detailValue(e, levelField);
    edit('LevelDepth', v === '' ? null : Number(v));
  });
  on(levelField, 'focusout', touch(form.controls.LevelDepth));
  on(addLevelButton, 'click', (e) => {
    e.stopPropagation();
    void openAddLevel();
  });
  on(startField, 'change', (e) => edit('StartDate', detailValue(e, startField)));
  on(startField, 'focusout', touch(form.controls.StartDate));
  on(endField, 'change', (e) => edit('EndDate', detailValue(e, endField)));
  on(endField, 'focusout', touch(form.controls.EndDate));
  on(modeField, 'change', (e) => {
    scheduleModeControl.setValue(detailValue(e, modeField) as PlanScheduleChangeModeType);
    render();
  });
  on(dateTypeField, 'change', (e) => edit('PlanDateType', detailValue(e, dateTypeField) as PlanElementFormGroup['controls']['PlanDateType']['value']));
  on(budgetField, 'change', (e) => {
    const raw = detailValue(e, budgetField).trim();
    edit('Budget', raw === '' ? null : Number(raw));
  });
  on(budgetField, 'focusout', touch(form.controls.Budget));
  on(notesField, 'change', (e) => edit('Notes', detailValue(e, notesField)));
  on(notesField, 'input', (e) => edit('Notes', String((e.target as { value?: string }).value ?? notesField.value ?? '')));
  on(milestoneField, 'change', (e) => edit('IsMilestone', !!((e as CustomEvent<{ checked: boolean }>).detail?.checked ?? milestoneField.checked)));

  // The element's fields are one form: Enter in a field saves, as her (ngSubmit) does.
  const fieldsForm = q<HTMLFormElement>('form');
  on(fieldsForm, 'submit', (e) => {
    e.preventDefault();
    save();
  });
  on(fieldsForm, 'keydown', (e) => {
    const ke = e as KeyboardEvent;
    const host = (ke.target as HTMLElement | null)?.closest?.('esa-text-field, esa-date-picker');
    if (ke.key === 'Enter' && host) {
      ke.preventDefault();
      save();
    }
  });

  on(addPredOpenButton, 'click', () => openAddPredecessor());
  on(predCancelButton, 'click', () => cancelAddPredecessor());
  on(addPredForm, 'submit', (e) => {
    e.preventDefault();
    void addPredecessor();
  });
  on(predAddButton, 'click', (e) => {
    e.preventDefault();
    void addPredecessor();
  });
  on(predSelect, 'change', (e) => {
    const v = detailValue(e, predSelect);
    predecessorForm.controls.PredecessorPlanElementID.setValue(v === '' ? null : v);
    predecessorForm.controls.PredecessorPlanElementID.markAsDirty();
    render();
  });
  on(predSelect, 'focusout', touch(predecessorForm.controls.PredecessorPlanElementID));
  on(predLag, 'change', (e) => {
    const raw = detailValue(e, predLag);
    predecessorForm.controls.LagDays.setValue(raw === '' ? null : Number(raw));
    predecessorForm.controls.LagDays.markAsDirty();
    render();
  });
  on(predLag, 'focusout', touch(predecessorForm.controls.LagDays));
  on(predLag, 'keydown', (e) => {
    if ((e as KeyboardEvent).key === 'Enter') {
      e.preventDefault();
      void addPredecessor();
    }
  });

  on(q('kept-resume'), 'click', () => resumeKept());
  on(q('kept-discard'), 'click', () => discardKept());
  on(saveButton, 'click', () => save());
  on(publishButton, 'click', () => save(true));
  on(cancelButton, 'click', () => cancel());
  on(closeButton, 'click', () => cancel());

  // Her signals over the page's plan: every plan change redraws what derives from it.
  const unsubscribe = draft ? draft.subscribe(() => render()) : planStore.subscribe(() => render());
  const unsubscribePresence = keeps ? onPlanPresence(() => render()) : () => undefined;
  const checkOut = keeps
    ? startPlanPresence(plan().PlanID ?? '', programID(), target.kind === 'edit' ? (initialElement?.PlanElementName ?? 'an element') : `a new element in ${parent()?.PlanElementName ?? 'the plan'}`)
    : () => undefined;

  const teardown = () => {
    if (!isOpen) return;
    isOpen = false;
    ac.abort();
    formSub.unsubscribe();
    unsubscribe();
    unsubscribePresence();
    checkOut();
    versionPin.release();
    candidatesRequest += 1;
    predRowEls.clear();
    predList.replaceChildren();
    succList.replaceChildren();
    if (activeCanClose === canClose) activeCanClose = () => true;
    resolveClosed();
  };
  dialog.addEventListener(
    'close',
    function onClose(e) {
      if (e.target !== dialog) return;
      dialog.removeEventListener('close', onClose);
      teardown();
    }
  );

  // ── Open ──
  activeCanClose = canClose;
  isAddingPredecessor = false;
  syncFields();
  syncPredecessorFields();
  for (const el of [nameField, levelField, startField, endField, predSelect, predLag] as ValueEl[]) el.errorText = '';
  render();
  dialog.show();

  return {
    target,
    requestClose: () => (isOpen ? requestClose(dialog, canClose) : Promise.resolve(true)),
    forceClose: () => {
      if (isOpen) close();
    },
    closed,
  };
}

/** A candidate as one option label: its level as a quiet tag before the name, its path after (her option template). */
function predecessorOptionLabel(option: PlanPredecessorOption): string {
  const name = option.levelName ? `${option.levelName}: ${option.name}` : option.name;
  return option.path ? `${name}, in ${option.path}` : name;
}
