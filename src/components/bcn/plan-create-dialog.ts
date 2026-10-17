// "New plan" — Jamie's PlanCreateDialogComponent (Beacon.Web pages/plan-list/plan-create-dialog). The form rules are
// her plan-create-form.ts, ported verbatim into lib/planning; this module binds them to BcnPlanCreateDialog's
// esa-dialog / esa-text-field / esa-textarea markup and stands in for UiDialogRef (setCanClose / requestClose / close).
//
// THE CLOSE GUARD. Beacon opens the dialog with `closeOnBackdropClick: false` and closes it through requestClose(),
// which asks canClose() first. esa-dialog has no guard, so one is put in front of its close() (as plan-page.ts's
// guardSideDialog does for esa-side-dialog): the header X and Cancel call it, Esc's native `cancel` is held and
// routed through it, and the native dialog's backdrop light-dismiss is switched off (closedby="closerequest").

import '@esa/ecology/esa-dialog';
import '@esa/ecology/esa-text-field';
import '@esa/ecology/esa-textarea';
import type { PlanDetailDto } from '../../lib/planning/model';
import { controlErrorMessage, HttpErrorResponse } from '../../lib/planning/ng-shim';
import type { AbstractControl } from '../../lib/planning/ng-shim';
import {
  addPlanLevel,
  canAddPlanLevel,
  canRemovePlanLevel,
  createPlanCreateForm,
  removePlanLevel,
  toPlanCreateDto,
  type PlanCreateFormGroup,
} from '../../lib/planning/plan-create-form';
import type { PlanLevelFormGroup } from '../../lib/planning/plan-form';
import { confirm, planApi, PlanConflictAnswered, PROJECT_ID, pushAlert } from '../../lib/planning/plan-page';

type DialogEl = HTMLElement & { open: boolean; show(): void; close(): void; updateComplete: Promise<boolean> };
type FieldEl = HTMLElement & { value: string; errorText: string; updateComplete: Promise<boolean> };

interface Session {
  form: PlanCreateFormGroup;
  resolve: (plan: PlanDetailDto | null) => void;
  result: PlanDetailDto | null;
  /** Server messages landed on a control (Beacon's `server` error), cleared when its value changes. */
  serverErrors: Map<AbstractControl, string>;
  rows: Map<PlanLevelFormGroup, HTMLElement>;
  saving: boolean;
}

interface Dialog {
  el: DialogEl;
  open(): Promise<PlanDetailDto | null>;
}

let dialog: Dialog | null = null;
/** The server's level maximum; undefined until it loads, which holds Add level back. */
let maxLevels: number | undefined;
let rulesRequested = false;

export function openPlanCreateDialog(): Promise<PlanDetailDto | null> {
  dialog ??= setup();
  return dialog ? dialog.open() : Promise.resolve(null);
}

function setup(): Dialog | null {
  const root = document.querySelector<HTMLElement>('[data-plan-create]');
  if (!root) return null;
  const el = root.querySelector<DialogEl>('[data-plan-create-dialog]')!;
  const formEl = root.querySelector<HTMLFormElement>('[data-plan-create-form]')!;
  const nameField = root.querySelector<FieldEl>('[data-control="PlanName"]')!;
  const descriptionField = root.querySelector<FieldEl>('[data-control="Description"]')!;
  const hint = root.querySelector<HTMLElement>('[data-plan-create-hint]')!;
  const levelRows = root.querySelector<HTMLElement>('[data-plan-create-levels]')!;
  const levelTpl = root.querySelector<HTMLTemplateElement>('template[data-plan-create-tpl="level"]')!;
  const addWrap = root.querySelector<HTMLElement>('[data-plan-create-add]')!;
  const submitIdle = root.querySelector<HTMLElement>('[data-busy="idle"]')!;
  const submitBusy = root.querySelector<HTMLElement>('[data-busy="busy"]')!;

  let session: Session | null = null;

  // ── Errors (ui-field-error: shown once the control is touched and invalid) ─────────────────────────────────────

  const errorFor = (control: AbstractControl): string => {
    const server = session?.serverErrors.get(control);
    if (server) return server;
    return control.touched && control.invalid ? controlErrorMessage(control) ?? '' : '';
  };

  const bindField = (field: FieldEl, control: AbstractControl): void => {
    field.value = control.value ?? '';
    field.errorText = errorFor(control);
    const onChange = (e: Event): void => {
      const value = (e as CustomEvent<{ value: string }>).detail?.value ?? field.value;
      session?.serverErrors.delete(control);
      (control as AbstractControl & { setValue(v: string): void }).setValue(value);
      control.markAsDirty();
      field.errorText = errorFor(control);
    };
    const onBlur = (): void => {
      control.markAsTouched();
      field.errorText = errorFor(control);
    };
    // Beacon's (ngSubmit): Enter in a single-line input submits the form.
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'Enter' && field.localName === 'esa-text-field') {
        e.preventDefault();
        create();
      }
    };
    const bound = field as FieldEl & { __unbind?: () => void };
    bound.__unbind?.();
    field.addEventListener('change', onChange);
    field.addEventListener('focusout', onBlur);
    field.addEventListener('keydown', onKey);
    bound.__unbind = () => {
      field.removeEventListener('change', onChange);
      field.removeEventListener('focusout', onBlur);
      field.removeEventListener('keydown', onKey);
    };
  };

  const refreshErrors = (): void => {
    if (!session) return;
    const { form } = session;
    nameField.errorText = errorFor(form.controls.PlanName);
    descriptionField.errorText = errorFor(form.controls.Description);
    for (const [level, row] of session.rows) {
      row.querySelector<FieldEl>('[data-level-control="SingularName"]')!.errorText = errorFor(level.controls.SingularName);
      row.querySelector<FieldEl>('[data-level-control="PluralName"]')!.errorText = errorFor(level.controls.PluralName);
    }
  };

  // ── Levels ───────────────────────────────────────────────────────────────────────────────────────────────────────

  /** esa-text-field does not forward a host aria-label to its inner input, so the name is set on the input too. */
  const nameInput = (field: FieldEl, label: string): void => {
    field.setAttribute('aria-label', label);
    void field.updateComplete?.then(() => field.shadowRoot?.querySelector('input')?.setAttribute('aria-label', label));
  };

  const setButtonDisabled = (button: HTMLButtonElement, disabled: boolean): void => {
    button.disabled = disabled;
    button.closest('.esa-button')?.classList.toggle('esa-button--disabled', disabled);
  };

  const buildRow = (level: PlanLevelFormGroup): HTMLElement => {
    const row = (levelTpl.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
    bindField(row.querySelector<FieldEl>('[data-level-control="SingularName"]')!, level.controls.SingularName);
    bindField(row.querySelector<FieldEl>('[data-level-control="PluralName"]')!, level.controls.PluralName);
    row.querySelector('[data-level-remove]')!.addEventListener('click', () => {
      if (!session) return;
      const levels = session.form.controls.Levels;
      removePlanLevel(levels, levels.controls.indexOf(level));
      renderLevels();
    });
    return row;
  };

  const renderLevels = (): void => {
    if (!session) return;
    const levels = session.form.controls.Levels;
    // `track level`: a kept level keeps its row; a removed one's row goes.
    for (const [level, row] of session.rows) {
      if (!levels.controls.includes(level)) {
        session.rows.delete(level);
        row.remove();
      }
    }
    const canRemove = canRemovePlanLevel(levels);
    levels.controls.forEach((level, i) => {
      let row = session!.rows.get(level);
      if (!row) {
        row = buildRow(level);
        session!.rows.set(level, row);
      }
      if (levelRows.children[i] !== row) levelRows.insertBefore(row, levelRows.children[i] ?? null);
      const n = i + 1;
      row.querySelector<HTMLElement>('[data-level-label]')!.textContent = `Level ${n}`;
      nameInput(row.querySelector<FieldEl>('[data-level-control="SingularName"]')!, `Level ${n} singular name`);
      nameInput(row.querySelector<FieldEl>('[data-level-control="PluralName"]')!, `Level ${n} plural name`);
      const remove = row.querySelector<HTMLButtonElement>('[data-level-remove]')!;
      remove.setAttribute('aria-label', `Remove level ${n}`);
      remove.title = `Remove level ${n}`;
      setButtonDisabled(remove, !canRemove);
    });
    addWrap.hidden = !canAddPlanLevel(levels, maxLevels);
  };

  const renderRules = (): void => {
    hint.textContent = `From the top of the plan down${maxLevels ? ', up to ' + maxLevels : ''}.`;
    if (session) addWrap.hidden = !canAddPlanLevel(session.form.controls.Levels, maxLevels);
  };

  root.querySelector('[data-plan-create-add-button]')!.addEventListener('click', () => {
    if (!session) return;
    addPlanLevel(session.form.controls.Levels, maxLevels);
    renderLevels();
  });

  // ── Saving ───────────────────────────────────────────────────────────────────────────────────────────────────────

  const setSaving = (on: boolean): void => {
    if (session) session.saving = on;
    submitIdle.hidden = on;
    submitBusy.hidden = !on;
  };

  /**
   * applyServerErrorsAndAlert: a 400 on PlanName/Description lands on that field; a "" one is the HTTP interceptor's
   * alert; a key with no control (e.g. "Levels[0].SingularName") is alerted; any other failure gets `message`.
   */
  const applyServerErrorsAndAlert = (error: unknown, message: string): void => {
    if (!session) return;
    session.serverErrors.clear();
    if (error instanceof PlanConflictAnswered) return refreshErrors();
    if (!(error instanceof HttpErrorResponse) || error.status !== 400) {
      refreshErrors();
      pushAlert(message, 'danger');
      return;
    }
    const raw = (error.error?.errors ?? {}) as Record<string, string[]>;
    const formErrors: string[] = [];
    const unplaced: string[] = [];
    const controls = session.form.controls as Record<string, AbstractControl>;
    for (const [key, messages] of Object.entries(raw)) {
      if (key === '') formErrors.push(...messages);
      else if (controls[key]) {
        session.serverErrors.set(controls[key], messages[0]);
        controls[key].markAsTouched();
      } else unplaced.push(...messages);
    }
    refreshErrors();
    if (formErrors.length) pushAlert(formErrors.join(' '), 'danger');
    if (unplaced.length) pushAlert(unplaced.join(' '), 'danger');
    // Beacon scrolls the first invalid field into view.
    const first = [nameField, descriptionField, ...levelRows.querySelectorAll<FieldEl>('esa-text-field')].find((f) => f.errorText);
    first?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const create = (): void => {
    if (!session) return;
    const current = session;
    current.form.markAllAsTouched();
    refreshErrors();
    if (current.form.invalid || current.saving) return;
    setSaving(true);
    planApi
      .createPlan(PROJECT_ID, toPlanCreateDto(current.form))
      .then((plan) => {
        if (session !== current) return;
        current.result = plan;
        forceClose();
      })
      .catch((error: unknown) => {
        if (session === current) applyServerErrorsAndAlert(error, 'Failed to create the plan. Please try again.');
      })
      .finally(() => {
        if (session === current) setSaving(false);
      });
  };

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    create();
  });
  root.querySelector('[data-plan-create-submit]')!.addEventListener('click', create);

  // ── Close guard (UiDialogRef.setCanClose / requestClose) ────────────────────────────────────────────────────────

  const canClose = (): boolean | Promise<boolean> => {
    if (!session?.form.dirty) return true;
    return confirm({
      header: 'Discard this plan?',
      text: 'You have started a new plan. Closing now will discard it.',
      confirmButtonLabel: 'Discard',
      color: 'warn',
    });
  };

  const nativeClose = Object.getPrototypeOf(el).close as () => void;
  const innerDialog = (): HTMLDialogElement | null | undefined => el.shadowRoot?.querySelector('dialog');
  let asking = false;

  const forceClose = (): void => nativeClose.call(el);

  const requestClose = (): void => {
    if (asking || !el.open) return;
    asking = true;
    void Promise.resolve(canClose())
      .then((ok) => {
        if (ok) return forceClose();
        // A repeated Esc can close the native <dialog> without a cancelable `cancel`; keep it open.
        const inner = innerDialog();
        if (el.open && inner && !inner.open) inner.showModal();
      })
      .finally(() => (asking = false));
  };

  void customElements.whenDefined('esa-dialog').then(async () => {
    el.close = requestClose;
    await el.updateComplete;
    const inner = innerDialog();
    // closeOnBackdropClick: false — no light dismiss; Esc still asks (closedby="closerequest").
    inner?.setAttribute('closedby', 'closerequest');
    inner?.addEventListener('cancel', (e) => {
      e.preventDefault();
      requestClose();
    });
  });

  root.querySelector('[data-plan-create-close]')!.addEventListener('click', requestClose);
  root.querySelector('[data-plan-create-cancel]')!.addEventListener('click', requestClose);

  el.addEventListener('close', (e) => {
    if (e.target !== el || !session) return;
    const done = session;
    session = null;
    done.resolve(done.result);
  });

  // ── Open ─────────────────────────────────────────────────────────────────────────────────────────────────────────

  const open = (): Promise<PlanDetailDto | null> =>
    new Promise((resolve) => {
      if (!rulesRequested) {
        rulesRequested = true;
        void planApi.rules().then((rules) => {
          maxLevels = rules.MaxLevels ?? undefined;
          renderRules();
        });
      }
      const form = createPlanCreateForm();
      session = { form, resolve, result: null, serverErrors: new Map(), rows: new Map(), saving: false };
      levelRows.replaceChildren();
      setSaving(false);
      bindField(nameField, form.controls.PlanName);
      bindField(descriptionField, form.controls.Description);
      renderRules();
      renderLevels();
      el.show();
    });

  return { el, open };
}
