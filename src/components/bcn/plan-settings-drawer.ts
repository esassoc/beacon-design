// Controller for <BcnPlanSettingsDrawer> — Jamie's PlanSettingsDrawerComponent (Beacon.Web
// pages/plan-gantt/plan-settings-drawer) on the spoke's plan runtime (../../lib/planning/plan-page).
//
// ONE pre-rendered shell. Each open starts a session: the details form loaded from the plan on screen, the version
// pin its saves are checked against, the one inline level editor and the one inline landmark editor, and the shared
// busy state (pendingVerb). planStore stands in for her `plan` signal: every change redraws the level and landmark
// lists, as her computed()s do. Rows are cloned from the .astro's <template>s (every control in them is an esa-button,
// esa-text-field, esa-date-picker or esa-tooltip) and kept by key, so an open editor keeps its node (and its focus
// and typing) through a redraw. Nothing here builds markup from strings.
//
// The rules are hers, imported verbatim from src/lib/planning; nothing here re-derives them.

import '@esa/ecology/esa-side-dialog';
import '@esa/ecology/esa-text-field';
import '@esa/ecology/esa-textarea';
import '@esa/ecology/esa-date-picker';
import '@esa/ecology/esa-tooltip';
import { type AbstractControl, type FormGroup, HttpErrorResponse, controlErrorMessage } from '../../lib/planning/ng-shim';
import type { PlanDetailDto, PlanLandmarkDto, PlanLevelDto } from '../../lib/planning/model';
import {
  applyPlanChange,
  confirm,
  fieldErrors,
  forceClose,
  guardSideDialog,
  pinPlanVersion,
  planApi,
  planStore,
  planWrite,
  pushAlert,
  alertWriteFailure,
  PlanConflictAnswered,
  PLAN_RIGHTS,
  PLAN_RULES,
  type PlanVersionPin,
  type SideDialogEl,
} from '../../lib/planning/plan-page';
import { createPlanLevelGroup, planDateRange, toPlanLevelCreateDto, type PlanLevelFormGroup } from '../../lib/planning/plan-form';
import {
  createPlanDetailsForm,
  createPlanLandmarkForm,
  planDeleteConfirmText,
  planDetailsFormValue,
  planHasRoomForLevel,
  planLandmarkDeleteConfirmText,
  planLandmarkRows,
  planLevelRemovals,
  sortedPlanLevels,
  toPlanLandmarkUpsertDto,
  toPlanUpdateDto,
  type PlanDetailsFormGroup,
  type PlanLandmarkFormGroup,
  type PlanLandmarkRow,
  type PlanLevelRemoval,
} from '../../lib/planning/plan-settings';

/** `"deleted"` when the plan was deleted; the opener leaves the page. Otherwise nothing — every change has already reached the page. */
export type PlanSettingsDrawerResult = 'deleted';

/** The level row the inline editor is open on: a level's depth, or the add row below the deepest. */
const NEW_LEVEL = 'new';
type LevelEditorTarget = number | typeof NEW_LEVEL;

/** The landmark row the inline editor is open on: a landmark's ID, or the add row below the list. */
const NEW_LANDMARK = 'new';
type LandmarkEditorTarget = string | typeof NEW_LANDMARK;

/** A level or landmark action in flight — they share one busy state (see `pendingVerb`). */
type PlanStructureVerb = 'add-level' | 'rename-level' | 'remove-level' | 'add-landmark' | 'edit-landmark' | 'delete-landmark';

const LOCALE = 'en-US';
const rights = PLAN_RIGHTS;

type FieldEl = HTMLElement & { value: string; errorText: string; min?: string; max?: string };
type TooltipEl = HTMLElement & { text: string };
type AnyForm = FormGroup<Record<string, AbstractControl<any>>>;

interface Session {
  pin: PlanVersionPin;
  unsubscribe: () => void;
  resolve: (result: PlanSettingsDrawerResult | undefined) => void;
  promise: Promise<PlanSettingsDrawerResult | undefined>;
  result: PlanSettingsDrawerResult | undefined;
  detailsForm: PlanDetailsFormGroup;
  /** One inline editor, shared by the row being renamed and the add row. */
  levelForm: PlanLevelFormGroup;
  levelEditor: LevelEditorTarget | null;
  levelEditorEl: HTMLLIElement | null;
  /** One inline editor, shared by the landmark being edited and the add row — the levels' shape. */
  landmarkForm: PlanLandmarkFormGroup;
  landmarkEditor: LandmarkEditorTarget | null;
  /** The editor's form; for an existing landmark it sits in an <li> of the list. */
  landmarkEditorEl: HTMLFormElement | null;
  landmarkEditorItem: HTMLLIElement | null;
  isSaving: boolean;
  isDeleting: boolean;
  /**
   * Level AND landmark actions share one busy state. Each answers with the whole plan, which replaces the page's: let
   * two run at once and the one answering last wins.
   */
  pendingVerb: PlanStructureVerb | null;
  /** The landmark a delete is in flight for, so only its row's trash shows it working. */
  deletingLandmarkID: string | null;
  levelRows: Map<number, HTMLLIElement>;
  landmarkItems: Map<string, HTMLLIElement>;
}

interface Shell {
  root: HTMLElement;
  dialog: SideDialogEl;
  details: HTMLFormElement;
  save: HTMLButtonElement;
  revert: HTMLButtonElement;
  levels: HTMLOListElement;
  addLevelWrap: HTMLElement;
  addLevel: HTMLButtonElement;
  landmarkHead: HTMLElement;
  landmarks: HTMLOListElement;
  landmarksEmpty: HTMLElement;
  newLandmarkSlot: HTMLElement;
  addLandmarkWrap: HTMLElement;
  addLandmark: HTMLButtonElement;
  danger: HTMLElement;
  deletePlan: HTMLButtonElement;
}

let shell: Shell | null = null;
let session: Session | null = null;

// ── esa-button runtime state ────────────────────────────────────────────────────────────────────────────────────────
// The .astro lego renders a wrapper span (.esa-button) around its native control (.esa-button__native); its disabled
// and loading looks are classes on the wrapper, so they are toggled here as the lego would render them. The spinner
// borrows the native's data-astro-cid so the lego's scoped styles reach it (BcnReportPreview's shape).

function setButton(native: HTMLButtonElement, state: { disabled?: boolean; loading?: boolean }): void {
  const disabled = !!state.disabled;
  const loading = !!state.loading;
  const wrap = native.closest<HTMLElement>('.esa-button');
  wrap?.classList.toggle('esa-button--disabled', disabled);
  wrap?.classList.toggle('esa-button--loading', loading);
  native.disabled = disabled || loading;
  native.removeAttribute('aria-disabled');
  native.querySelector(':scope > .esa-button__label')?.classList.toggle('esa-button__label--hidden', loading);
  native
    .querySelectorAll<HTMLElement>(':scope > :not(.esa-button__label):not(.esa-button__spinner)')
    .forEach((icon) => (icon.style.display = loading ? 'none' : ''));
  const spinner = native.querySelector(':scope > .esa-button__spinner');
  if (loading && !spinner) {
    const s = document.createElement('span');
    s.className = 'esa-button__spinner';
    s.setAttribute('aria-hidden', 'true');
    for (const a of Array.from(native.attributes)) if (a.name.startsWith('data-astro-cid')) s.setAttribute(a.name, a.value);
    native.prepend(s);
  } else if (!loading && spinner) spinner.remove();
  if (loading) native.setAttribute('aria-busy', 'true');
  else native.removeAttribute('aria-busy');
}

/** A held control: aria-disabled, not disabled, so it stays focusable and describable (the held trash). */
function setHeld(native: HTMLButtonElement): void {
  setButton(native, {});
  native.closest<HTMLElement>('.esa-button')?.classList.add('esa-button--disabled');
  native.setAttribute('aria-disabled', 'true');
}

/** An icon button's accessible name and its esa-tooltip (her `[aria-label]` + `[uiTooltip]`). */
function name(native: HTMLButtonElement, tooltip: TooltipEl | null, label: string, tip = label): void {
  native.setAttribute('aria-label', label);
  native.removeAttribute('title');
  if (tooltip) tooltip.text = tip;
}

// ── Form binding (Angular's formControlName + ui-field-error) ──────────────────────────────────────────────────────

function fields(scope: Element): FieldEl[] {
  return Array.from(scope.querySelectorAll<FieldEl>('[data-psd-field]'));
}

function controlOf(form: AnyForm, el: FieldEl): AbstractControl | undefined {
  return form.controls[el.dataset.psdField ?? ''];
}

/** An error shows once its field is touched or changed, as ui-field-error shows it. */
function showErrors(scope: Element, form: AnyForm): void {
  for (const el of fields(scope)) {
    const control = controlOf(form, el);
    el.errorText = control && (control.touched || control.dirty) && control.invalid ? (controlErrorMessage(control) ?? '') : '';
  }
}

/** The form's values into its inputs (after a reset), errors cleared with it. */
function writeFields(scope: Element, form: AnyForm): void {
  for (const el of fields(scope)) {
    const control = controlOf(form, el);
    el.value = (control?.value as string) ?? '';
  }
  showErrors(scope, form);
}

function bindFields(scope: HTMLFormElement, form: () => AnyForm, submit: () => void): void {
  for (const el of fields(scope)) {
    el.addEventListener('change', (e) => {
      const control = controlOf(form(), el) as (AbstractControl & { setValue(v: string): void }) | undefined;
      if (!control) return;
      control.setValue((e as CustomEvent<{ value: string }>).detail?.value ?? el.value ?? '');
      control.markAsDirty();
      showErrors(scope, form());
    });
    el.addEventListener('focusout', () => {
      controlOf(form(), el)?.markAsTouched();
      showErrors(scope, form());
    });
  }
  scope.addEventListener('submit', (e) => {
    e.preventDefault();
    submit();
  });
  // The inputs live in shadow roots, so Enter does not submit the form by itself; a single-line field's Enter does.
  scope.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' || e.isComposing) return;
    if (e.composedPath().some((n) => n instanceof HTMLTextAreaElement || n instanceof HTMLButtonElement)) return;
    e.preventDefault();
    submit();
  });
}

/** applyServerErrors: a 400's field messages sit on their inputs. */
function applyServerErrors(scope: Element | null, form: AnyForm, error: unknown): void {
  for (const [key, messages] of Object.entries(fieldErrors(error))) {
    const control = form.controls[key];
    if (!control || !messages.length) continue;
    control.errors = { ...(control.errors ?? {}), server: { message: messages[0] } };
    control.markAsTouched();
  }
  if (scope) showErrors(scope, form);
}

/**
 * alertUnlessValidation: a 400 is answered on the form (fields on their inputs; a form-level one, which Beacon's HTTP
 * interceptor alerts, alerted here); a refused version is already answered; anything else gets `fallback`.
 */
function alertUnlessValidation(form: AnyForm | null, error: unknown, fallback: string): void {
  if (error instanceof PlanConflictAnswered) return;
  if (error instanceof HttpErrorResponse && error.status === 400) {
    const formLevel = Object.entries(fieldErrors(error))
      .filter(([key]) => !form || !(key in form.controls))
      .flatMap(([, messages]) => messages);
    if (formLevel.length) pushAlert(formLevel.join(' '), 'danger');
    return;
  }
  alertWriteFailure(error, fallback);
}

// ── Shell ───────────────────────────────────────────────────────────────────────────────────────────────────────────

function clone<T extends Element>(root: HTMLElement, tpl: string): T {
  const template = root.querySelector<HTMLTemplateElement>(`template[data-psd-tpl="${tpl}"]`)!;
  return (document.importNode(template.content, true) as DocumentFragment).firstElementChild as T;
}

/** The truncate directive: a name cut short says itself in full on hover. */
function truncateTitle(el: HTMLElement): void {
  el.addEventListener('mouseenter', () => {
    if (el.scrollWidth > el.clientWidth) el.title = el.textContent ?? '';
    else el.removeAttribute('title');
  });
}

function setup(): Shell | null {
  if (shell) return shell;
  const root = document.querySelector<HTMLElement>('[data-bcn-plan-settings-drawer]');
  if (!root) return null;
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  shell = {
    root,
    dialog: q<SideDialogEl>('esa-side-dialog'),
    details: q<HTMLFormElement>('[data-psd-details]'),
    save: q<HTMLButtonElement>('button[data-psd-save]'),
    revert: q<HTMLButtonElement>('button[data-psd-revert]'),
    levels: q<HTMLOListElement>('[data-psd-levels]'),
    addLevelWrap: q('[data-psd-add-level-wrap]'),
    addLevel: q<HTMLButtonElement>('button[data-psd-add-level]'),
    landmarkHead: q('[data-psd-landmark-head]'),
    landmarks: q<HTMLOListElement>('[data-psd-landmarks]'),
    landmarksEmpty: q('[data-psd-landmarks-empty]'),
    newLandmarkSlot: q('[data-psd-new-landmark-slot]'),
    addLandmarkWrap: q('[data-psd-add-landmark-wrap]'),
    addLandmark: q<HTMLButtonElement>('button[data-psd-add-landmark]'),
    danger: q('[data-psd-danger]'),
    deletePlan: q<HTMLButtonElement>('button[data-psd-delete]'),
  };
  const s = shell;

  // Details: the name and description, saved in place.
  bindFields(s.details, () => session!.detailsForm as unknown as AnyForm, () => void save());
  s.revert.addEventListener('click', revertDetails);
  s.addLevel.addEventListener('click', startAddLevel);
  s.addLandmark.addEventListener('click', startAddLandmark);
  s.deletePlan.addEventListener('click', () => void deletePlan());

  // Beacon opens the drawer with closeOnBackdropClick: false and asks canClose() before it closes.
  void guardSideDialog(s.dialog, canClose);
  s.dialog.addEventListener('close', (e) => {
    if (e.target !== s.dialog || !session) return;
    const ended = session;
    session = null;
    ended.pin.release();
    ended.unsubscribe();
    ended.resolve(ended.result);
  });
  return shell;
}

/** Opens Plan settings on the plan in planStore; resolves 'deleted' after the plan is deleted, else undefined when closed. */
export function openPlanSettingsDrawer(): Promise<'deleted' | undefined> {
  const s = setup();
  if (!s || !planStore.loaded) return Promise.resolve(undefined);
  if (session) return session.promise;

  let resolve!: Session['resolve'];
  const promise = new Promise<PlanSettingsDrawerResult | undefined>((r) => (resolve = r));
  const dateRange = () => planDateRange(PLAN_RULES);
  session = {
    // The version this drawer's form loaded: its saves are checked against it, however the page refreshes meanwhile.
    pin: pinPlanVersion(),
    unsubscribe: planStore.subscribe(() => render()),
    resolve,
    promise,
    result: undefined,
    detailsForm: createPlanDetailsForm(planStore.plan),
    levelForm: createPlanLevelGroup(),
    levelEditor: null,
    levelEditorEl: null,
    landmarkForm: createPlanLandmarkForm(null, dateRange),
    landmarkEditor: null,
    landmarkEditorEl: null,
    landmarkEditorItem: null,
    isSaving: false,
    isDeleting: false,
    pendingVerb: null,
    deletingLandmarkID: null,
    levelRows: new Map(),
    landmarkItems: new Map(),
  };
  s.levels.replaceChildren();
  s.landmarks.replaceChildren();
  s.newLandmarkSlot.replaceChildren();
  writeFields(s.details, session.detailsForm as unknown as AnyForm);
  render();
  s.dialog.show();
  return promise;
}

// ── Render (her template's bindings) ────────────────────────────────────────────────────────────────────────────────

/** Puts `nodes` in `parent` in order, moving only what is out of place, so a kept node keeps its focus. */
function reconcile(parent: Element, nodes: Element[]): void {
  const keep = new Set(nodes);
  Array.from(parent.children).forEach((child) => {
    if (!keep.has(child)) child.remove();
  });
  nodes.forEach((node, i) => {
    if (parent.children[i] !== node) parent.insertBefore(node, parent.children[i] ?? null);
  });
}

function render(): void {
  const s = shell;
  const ss = session;
  if (!s || !ss || !planStore.loaded) return;
  const pending = ss.pendingVerb;

  // Details.
  s.details.hidden = !rights.canUpdate;
  setButton(s.save, { loading: ss.isSaving, disabled: !!pending });
  setButton(s.revert, { disabled: ss.isSaving || !!pending });

  renderLevels(s, ss);
  renderLandmarks(s, ss);

  // Danger zone.
  s.danger.hidden = !rights.canDelete;
  setButton(s.deletePlan, { loading: ss.isDeleting, disabled: !!pending });
}

function renderLevels(s: Shell, ss: Session): void {
  const plan = planStore.plan;
  const levels = sortedPlanLevels(plan.Levels);
  // Depths are contiguous from 1, so an added level lands one below the deepest.
  const nextLevelDepth = levels.length + 1;
  const canAddLevel = rights.canCreate && planHasRoomForLevel(plan.Levels, PLAN_RULES.MaxLevels);
  const removals = rights.canDelete ? planLevelRemovals(plan.Levels, plan.Elements) : new Map<number, PlanLevelRemoval>();
  const pending = ss.pendingVerb;
  const editorOpen = ss.levelEditor !== null;

  const nodes: HTMLLIElement[] = [];
  for (const level of levels) {
    const depth = level.Depth ?? 0;
    if (ss.levelEditor === depth && ss.levelEditorEl) {
      fillLevelEditor(ss.levelEditorEl, depth, `Save level ${depth}`, pending === 'rename-level');
      nodes.push(ss.levelEditorEl);
      continue;
    }
    let row = ss.levelRows.get(depth);
    if (!row) {
      row = createLevelRow(s.root, depth);
      ss.levelRows.set(depth, row);
    }
    fillLevelRow(row, level, removals.get(depth), pending, editorOpen);
    nodes.push(row);
  }
  for (const depth of ss.levelRows.keys()) if (!levels.some((l) => l.Depth === depth)) ss.levelRows.delete(depth);
  if (ss.levelEditor === NEW_LEVEL && ss.levelEditorEl) {
    fillLevelEditor(ss.levelEditorEl, nextLevelDepth, 'Add level', pending === 'add-level');
    nodes.push(ss.levelEditorEl);
  }
  reconcile(s.levels, nodes);

  s.addLevelWrap.hidden = !(canAddLevel && ss.levelEditor !== NEW_LEVEL);
  setButton(s.addLevel, { disabled: !!pending || editorOpen });
}

function createLevelRow(root: HTMLElement, depth: number): HTMLLIElement {
  const row = clone<HTMLLIElement>(root, 'level');
  row.querySelectorAll<HTMLElement>('.bcn-psd__truncate').forEach(truncateTitle);
  const level = () => sortedPlanLevels(planStore.plan.Levels).find((l) => l.Depth === depth);
  row.querySelector('button[data-psd-rename]')!.addEventListener('click', () => {
    const l = level();
    if (l) editLevel(l);
  });
  row.querySelector('button[data-psd-remove]')!.addEventListener('click', () => {
    const l = level();
    if (l) void removeLevel(l);
  });
  return row;
}

function fillLevelRow(row: HTMLLIElement, level: PlanLevelDto, removal: PlanLevelRemoval | undefined, pending: PlanStructureVerb | null, editorOpen: boolean): void {
  const depth = level.Depth ?? 0;
  row.querySelector('[data-psd-level-label]')!.textContent = `Level ${depth}`;
  row.querySelector('[data-psd-singular]')!.textContent = level.SingularName ?? '';
  row.querySelector('[data-psd-plural]')!.textContent = level.PluralName ?? '';

  const renameTip = row.querySelector<TooltipEl>('[data-psd-rename-tip]')!;
  const rename = row.querySelector<HTMLButtonElement>('button[data-psd-rename]')!;
  renameTip.hidden = !rights.canUpdate;
  name(rename, renameTip, `Rename level ${depth}`);
  setButton(rename, { disabled: !!pending || editorOpen });

  const removeTip = row.querySelector<TooltipEl>('[data-psd-remove-tip]')!;
  const remove = row.querySelector<HTMLButtonElement>('button[data-psd-remove]')!;
  const reason = row.querySelector<HTMLElement>('[data-psd-remove-reason]')!;
  const reasonId = `plan-settings-level-remove-reason-${depth}`;
  removeTip.hidden = !removal;
  if (removal?.removable) {
    name(remove, removeTip, `Remove level ${depth}`);
    remove.removeAttribute('aria-describedby');
    reason.textContent = '';
    reason.removeAttribute('id');
    setButton(remove, { loading: pending === 'remove-level', disabled: !!pending && pending !== 'remove-level' });
  } else if (removal) {
    // Held by the rule, not the right: the trash stays, saying why; removeLevel()'s guard blocks activation.
    name(remove, removeTip, `Remove level ${depth}`, removal.reason ?? '');
    reason.id = reasonId;
    reason.textContent = removal.reason ?? '';
    remove.setAttribute('aria-describedby', reasonId);
    setHeld(remove);
  }
}

function createLevelEditor(root: HTMLElement): HTMLLIElement {
  const li = clone<HTMLLIElement>(root, 'level-edit');
  const form = li.querySelector('form')!;
  bindFields(form, () => session!.levelForm as unknown as AnyForm, () => void saveLevel());
  form.querySelector('button[data-psd-cancel]')!.addEventListener('click', cancelLevelEdit);
  writeFields(form, session!.levelForm as unknown as AnyForm);
  return li;
}

function fillLevelEditor(li: HTMLLIElement, depth: number, submitLabel: string, saving: boolean): void {
  li.querySelector('[data-psd-level-label]')!.textContent = `Level ${depth}`;
  const [singular, plural] = fields(li);
  singular.setAttribute('aria-label', `Level ${depth} singular name`);
  plural.setAttribute('aria-label', `Level ${depth} plural name`);
  const submit = li.querySelector<HTMLButtonElement>('button[data-psd-submit]')!;
  name(submit, li.querySelector<TooltipEl>('[data-psd-submit-tip]'), submitLabel);
  setButton(submit, { loading: saving });
  setButton(li.querySelector<HTMLButtonElement>('button[data-psd-cancel]')!, { disabled: saving });
}

function renderLandmarks(s: Shell, ss: Session): void {
  const rows = planLandmarkRows(planStore.plan.Landmarks, LOCALE);
  const pending = ss.pendingVerb;
  const editorOpen = ss.landmarkEditor !== null;
  const range = planDateRange(PLAN_RULES);

  s.landmarkHead.hidden = !rows.length;
  s.landmarks.hidden = !rows.length;
  s.landmarksEmpty.hidden = !!rows.length || ss.landmarkEditor === NEW_LANDMARK;

  const nodes: HTMLLIElement[] = [];
  for (const row of rows) {
    const id = row.landmark.PlanLandmarkID ?? '';
    if (ss.landmarkEditor === id && ss.landmarkEditorEl) {
      if (!ss.landmarkEditorItem) {
        ss.landmarkEditorItem = document.createElement('li');
        ss.landmarkEditorItem.append(ss.landmarkEditorEl);
      }
      fillLandmarkEditor(ss.landmarkEditorEl, 'Landmark name', 'Landmark date', row.saveLabel, pending === 'edit-landmark', range);
      nodes.push(ss.landmarkEditorItem);
      continue;
    }
    let item = ss.landmarkItems.get(id);
    if (!item) {
      item = createLandmarkRow(s.root, id);
      ss.landmarkItems.set(id, item);
    }
    fillLandmarkRow(item, row, ss, editorOpen);
    nodes.push(item);
  }
  for (const id of ss.landmarkItems.keys()) if (!rows.some((r) => r.landmark.PlanLandmarkID === id)) ss.landmarkItems.delete(id);
  reconcile(s.landmarks, nodes);

  if (ss.landmarkEditor === NEW_LANDMARK && ss.landmarkEditorEl) {
    fillLandmarkEditor(ss.landmarkEditorEl, 'New landmark name', 'New landmark date', 'Add landmark', pending === 'add-landmark', range);
    reconcile(s.newLandmarkSlot, [ss.landmarkEditorEl]);
  } else {
    s.newLandmarkSlot.replaceChildren();
  }

  s.addLandmarkWrap.hidden = !(rights.canCreate && ss.landmarkEditor !== NEW_LANDMARK);
  setButton(s.addLandmark, { disabled: !!pending || editorOpen });
}

function createLandmarkRow(root: HTMLElement, id: string): HTMLLIElement {
  const item = clone<HTMLLIElement>(root, 'landmark');
  item.querySelectorAll<HTMLElement>('.bcn-psd__truncate').forEach(truncateTitle);
  const landmark = () => (planStore.plan.Landmarks ?? []).find((l) => l.PlanLandmarkID === id);
  item.querySelector('button[data-psd-edit]')!.addEventListener('click', () => {
    const l = landmark();
    if (l) editLandmark(l);
  });
  item.querySelector('button[data-psd-delete-landmark]')!.addEventListener('click', () => {
    const l = landmark();
    if (l) void deleteLandmark(l);
  });
  return item;
}

function fillLandmarkRow(item: HTMLLIElement, row: PlanLandmarkRow, ss: Session, editorOpen: boolean): void {
  const id = row.landmark.PlanLandmarkID ?? '';
  const pending = ss.pendingVerb;
  item.querySelector('[data-psd-landmark-name]')!.textContent = row.landmark.PlanLandmarkName ?? '';
  item.querySelector('[data-psd-landmark-date]')!.textContent = row.dateLabel;

  const editTip = item.querySelector<TooltipEl>('[data-psd-edit-tip]')!;
  const edit = item.querySelector<HTMLButtonElement>('button[data-psd-edit]')!;
  editTip.hidden = !rights.canUpdate;
  name(edit, editTip, row.editLabel);
  setButton(edit, { disabled: !!pending || editorOpen });

  const deleteTip = item.querySelector<TooltipEl>('[data-psd-delete-tip]')!;
  const del = item.querySelector<HTMLButtonElement>('button[data-psd-delete-landmark]')!;
  deleteTip.hidden = !rights.canDelete;
  name(del, deleteTip, row.deleteLabel);
  setButton(del, { loading: ss.deletingLandmarkID === id, disabled: !!pending && ss.deletingLandmarkID !== id });
}

function createLandmarkEditor(root: HTMLElement): HTMLFormElement {
  const form = clone<HTMLFormElement>(root, 'landmark-edit');
  bindFields(form, () => session!.landmarkForm as unknown as AnyForm, () => void saveLandmark());
  form.querySelector('button[data-psd-cancel]')!.addEventListener('click', cancelLandmarkEdit);
  writeFields(form, session!.landmarkForm as unknown as AnyForm);
  return form;
}

function fillLandmarkEditor(
  form: HTMLFormElement,
  nameLabel: string,
  dateLabel: string,
  submitLabel: string,
  saving: boolean,
  range: { min: string; max: string } | null
): void {
  const [nameField, dateField] = fields(form);
  nameField.setAttribute('aria-label', nameLabel);
  dateField.setAttribute('aria-label', dateLabel);
  dateField.min = range?.min ?? '';
  dateField.max = range?.max ?? '';
  const submit = form.querySelector<HTMLButtonElement>('button[data-psd-submit]')!;
  name(submit, form.querySelector<TooltipEl>('[data-psd-submit-tip]'), submitLabel);
  setButton(submit, { loading: saving });
  setButton(form.querySelector<HTMLButtonElement>('button[data-psd-cancel]')!, { disabled: saving });
}

// ── Actions (her methods, in her order) ─────────────────────────────────────────────────────────────────────────────

const planID = (): string => planStore.plan.PlanID ?? '';

function editLevel(level: PlanLevelDto): void {
  const ss = session;
  if (!ss || !shell || ss.levelEditor !== null) return;
  ss.levelForm.reset({ SingularName: level.SingularName ?? '', PluralName: level.PluralName ?? '' });
  ss.levelEditor = level.Depth ?? 0;
  ss.levelEditorEl = createLevelEditor(shell.root);
  render();
}

function startAddLevel(): void {
  const ss = session;
  if (!ss || !shell || ss.levelEditor !== null) return;
  ss.levelForm.reset({ SingularName: '', PluralName: '' });
  ss.levelEditor = NEW_LEVEL;
  ss.levelEditorEl = createLevelEditor(shell.root);
  render();
}

function closeLevelEditor(ss: Session): void {
  ss.levelEditor = null;
  ss.levelEditorEl = null;
}

function cancelLevelEdit(): void {
  if (!session) return;
  closeLevelEditor(session);
  render();
}

/** Saves the open inline editor: a rename (PUT) on a level's row, an add (POST) on the add row. */
async function saveLevel(): Promise<void> {
  const ss = session;
  if (!ss) return;
  const target = ss.levelEditor;
  const editorEl = ss.levelEditorEl;
  const form = ss.levelForm as unknown as AnyForm;
  ss.levelForm.markAllAsTouched();
  if (editorEl) showErrors(editorEl, form);
  if (target === null || ss.levelForm.invalid || ss.pendingVerb) return;

  const dto = toPlanLevelCreateDto(ss.levelForm);
  const isAdd = target === NEW_LEVEL;
  const id = planID();
  ss.pendingVerb = isAdd ? 'add-level' : 'rename-level';
  render();
  try {
    const plan = await planWrite<PlanDetailDto>(
      (token) => (isAdd ? planApi.createLevel(id, dto, token) : planApi.updateLevel(id, target, dto, token)),
      ss.pin
    );
    if (session !== ss) return;
    closeLevelEditor(ss);
    applyPlanChange(plan);
  } catch (error) {
    if (session !== ss) return;
    // A field 400 sits on its input; a form-level one (e.g. a fifth level) is alerted.
    applyServerErrors(editorEl, form, error);
    alertUnlessValidation(form, error, isAdd ? 'Failed to add the level. Please try again.' : 'Failed to rename the level. Please try again.');
  } finally {
    if (session === ss) {
      ss.pendingVerb = null;
      render();
    }
  }
}

async function removeLevel(level: PlanLevelDto): Promise<void> {
  const ss = session;
  if (!ss) return;
  const depth = level.Depth ?? 0;
  const removals = rights.canDelete ? planLevelRemovals(planStore.plan.Levels, planStore.plan.Elements) : new Map<number, PlanLevelRemoval>();
  // A held trash is aria-disabled, not disabled, so it stays focusable and can still be pressed.
  if (ss.pendingVerb || !removals.get(depth)?.removable) return;
  const confirmed = await confirm({
    color: 'warn',
    header: 'Remove level',
    text: `Remove the '${level.SingularName}' level from this plan? This cannot be undone.`,
    confirmButtonLabel: 'Remove',
  });
  if (!confirmed || session !== ss) return;
  const id = planID();
  ss.pendingVerb = 'remove-level';
  render();
  try {
    const plan = await planWrite<PlanDetailDto>((token) => planApi.deleteLevel(id, depth, token), ss.pin);
    if (session !== ss) return;
    applyPlanChange(plan);
  } catch (error) {
    // A 400 ("Only the deepest level can be removed.") is form-level, so it is alerted as-is; the level stays.
    if (session === ss) alertUnlessValidation(null, error, 'Failed to remove the level. Please try again.');
  } finally {
    if (session === ss) {
      ss.pendingVerb = null;
      render();
    }
  }
}

function editLandmark(landmark: PlanLandmarkDto): void {
  const ss = session;
  if (!ss || !shell || ss.landmarkEditor !== null) return;
  ss.landmarkForm.reset({ PlanLandmarkName: landmark.PlanLandmarkName ?? '', LandmarkDate: landmark.LandmarkDate ?? '' });
  ss.landmarkEditor = landmark.PlanLandmarkID ?? '';
  ss.landmarkEditorEl = createLandmarkEditor(shell.root);
  ss.landmarkEditorItem = null;
  render();
}

function startAddLandmark(): void {
  const ss = session;
  if (!ss || !shell || ss.landmarkEditor !== null) return;
  ss.landmarkForm.reset({ PlanLandmarkName: '', LandmarkDate: '' });
  ss.landmarkEditor = NEW_LANDMARK;
  ss.landmarkEditorEl = createLandmarkEditor(shell.root);
  ss.landmarkEditorItem = null;
  render();
}

function closeLandmarkEditor(ss: Session): void {
  ss.landmarkEditor = null;
  ss.landmarkEditorEl = null;
  ss.landmarkEditorItem = null;
}

function cancelLandmarkEdit(): void {
  if (!session) return;
  closeLandmarkEditor(session);
  render();
}

/** Saves the open landmark editor: an edit (PUT) on a landmark's row, an add (POST) on the add row. */
async function saveLandmark(): Promise<void> {
  const ss = session;
  if (!ss) return;
  const target = ss.landmarkEditor;
  const editorEl = ss.landmarkEditorEl;
  const form = ss.landmarkForm as unknown as AnyForm;
  ss.landmarkForm.markAllAsTouched();
  if (editorEl) showErrors(editorEl, form);
  if (target === null || ss.landmarkForm.invalid || ss.pendingVerb) return;

  const dto = toPlanLandmarkUpsertDto(ss.landmarkForm);
  const isAdd = target === NEW_LANDMARK;
  const id = planID();
  ss.pendingVerb = isAdd ? 'add-landmark' : 'edit-landmark';
  render();
  try {
    const plan = await planWrite<PlanDetailDto>(
      (token) => (isAdd ? planApi.createLandmark(id, dto, token) : planApi.updateLandmark(id, target, dto, token)),
      ss.pin
    );
    if (session !== ss) return;
    closeLandmarkEditor(ss);
    applyPlanChange(plan);
  } catch (error) {
    if (session !== ss) return;
    // A field 400 (a blank or over-long name, a missing date) sits on its input; a form-level one is alerted.
    applyServerErrors(editorEl, form, error);
    alertUnlessValidation(form, error, isAdd ? 'Failed to add the landmark. Please try again.' : 'Failed to save the landmark. Please try again.');
  } finally {
    if (session === ss) {
      ss.pendingVerb = null;
      render();
    }
  }
}

async function deleteLandmark(landmark: PlanLandmarkDto): Promise<void> {
  const ss = session;
  if (!ss || ss.pendingVerb) return;
  const confirmed = await confirm({
    color: 'warn',
    header: 'Delete landmark',
    text: planLandmarkDeleteConfirmText(landmark),
    confirmButtonLabel: 'Delete',
  });
  if (!confirmed || session !== ss) return;
  const id = planID();
  const landmarkID = landmark.PlanLandmarkID ?? '';
  ss.pendingVerb = 'delete-landmark';
  ss.deletingLandmarkID = landmarkID;
  render();
  try {
    const plan = await planWrite<PlanDetailDto>((token) => planApi.deleteLandmark(id, landmarkID, token), ss.pin);
    if (session !== ss) return;
    // An editor open on the deleted landmark has nothing left to save.
    if (ss.landmarkEditor === landmarkID) closeLandmarkEditor(ss);
    applyPlanChange(plan);
  } catch (error) {
    if (session === ss) alertUnlessValidation(null, error, 'Failed to delete the landmark. Please try again.');
  } finally {
    if (session === ss) {
      ss.pendingVerb = null;
      ss.deletingLandmarkID = null;
      render();
    }
  }
}

/**
 * The details section's Save: the plan's name and description. It stays open — the section saves in place, like the
 * level and landmark rows — and the form resets to what was saved, so it reads clean again.
 */
async function save(): Promise<void> {
  const ss = session;
  const s = shell;
  if (!ss || !s) return;
  const form = ss.detailsForm as unknown as AnyForm;
  ss.detailsForm.markAllAsTouched();
  showErrors(s.details, form);
  if (!ss.detailsForm.dirty || ss.detailsForm.invalid || ss.isSaving || ss.pendingVerb) return;
  ss.isSaving = true;
  render();
  const id = planID();
  try {
    const plan = await planWrite<PlanDetailDto>((token) => planApi.updatePlan(id, toPlanUpdateDto(ss.detailsForm), token), ss.pin);
    if (session !== ss) return;
    applyPlanChange(plan);
    ss.detailsForm.reset(planDetailsFormValue(plan));
    writeFields(s.details, form);
    pushAlert('Plan saved.', 'success');
  } catch (error) {
    if (session !== ss) return;
    applyServerErrors(s.details, form, error);
    alertUnlessValidation(form, error, 'Failed to save the plan. Please try again.');
  } finally {
    if (session === ss) {
      ss.isSaving = false;
      render();
    }
  }
}

/** The details section's Cancel: back to the plan's saved name and description. The drawer stays open. */
function revertDetails(): void {
  const ss = session;
  if (!ss || !shell || ss.isSaving) return;
  ss.detailsForm.reset(planDetailsFormValue(planStore.plan));
  writeFields(shell.details, ss.detailsForm as unknown as AnyForm);
}

async function deletePlan(): Promise<void> {
  const ss = session;
  const s = shell;
  if (!ss || !s || ss.isDeleting) return;
  const confirmed = await confirm({
    color: 'warn',
    header: 'Delete plan',
    text: planDeleteConfirmText(planStore.plan),
    confirmButtonLabel: 'Delete',
  });
  if (!confirmed || session !== ss) return;
  const id = planID();
  ss.isDeleting = true;
  render();
  try {
    await planWrite<void>((token) => planApi.deletePlan(id, token), ss.pin);
    ss.isDeleting = false;
    ss.result = 'deleted';
    forceClose(s.dialog);
  } catch (error) {
    if (!(error instanceof PlanConflictAnswered)) pushAlert('Failed to delete the plan. Please try again.', 'danger');
  } finally {
    if (session === ss) {
      ss.isDeleting = false;
      render();
    }
  }
}

/**
 * Held while a level or landmark change is in flight (closing would drop the plan it returns). Otherwise unsaved
 * details, or anything typed into an open level or landmark editor, prompt before the drawer closes.
 */
function canClose(): boolean | Promise<boolean> {
  const ss = session;
  if (!ss) return true;
  if (ss.pendingVerb) return false;
  const editingLevel = ss.levelEditor !== null && ss.levelForm.dirty;
  const editingLandmark = ss.landmarkEditor !== null && ss.landmarkForm.dirty;
  if (!ss.detailsForm.dirty && !editingLevel && !editingLandmark) return true;
  return confirm({
    header: 'Discard unsaved changes?',
    text: 'You have unsaved changes to this plan. Closing now will discard them.',
    confirmButtonLabel: 'Discard changes',
    color: 'warn',
  });
}
