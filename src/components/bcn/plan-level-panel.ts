// Controller for <BcnPlanLevelPanel> — Jamie's PlanLevelCreatePanelComponent (Beacon.Web
// shared/components/inline-create-panels/plan-level-create-panel). Stacked over its opener (the plan element drawer),
// it creates a level one below the plan's deepest, then closes with the whole plan the POST returns so the opener can
// apply it and select the new level. Cancel / Esc / X go through a discard guard.

import '@esa/ecology/esa-side-dialog';
import '@esa/ecology/esa-text-field';

import { controlErrorMessage, HttpErrorResponse, type AbstractControl } from '../../lib/planning/ng-shim';
import type { PlanDetailDto } from '../../lib/planning/model';
import { createPlanLevelGroup, toPlanLevelCreateDto, type PlanLevelFormGroup } from '../../lib/planning/plan-form';
import { nextPlanLevelDepth } from '../../lib/planning/plan-element';
import {
  alertWriteFailure,
  confirm,
  fieldErrors,
  forceClose,
  guardSideDialog,
  planApi,
  planStore,
  planWrite,
  pushAlert,
  requestClose,
  stackOver,
  type PlanVersionPin,
  type SideDialogEl,
} from '../../lib/planning/plan-page';

type FieldEl = HTMLElement & { value: string; errorText: string };

interface Shell {
  dialog: SideDialogEl;
  q<T extends Element = HTMLElement>(key: string): T;
  spinner(): HTMLElement;
}

let shell: Shell | null = null;
let activeCanClose: () => boolean | Promise<boolean> = () => true;

function getShell(): Shell {
  if (shell) return shell;
  const root = document.querySelector<HTMLElement>('[data-bcn-plan-level-panel]');
  if (!root) throw new Error('BcnPlanLevelPanel is not on the page.');
  const dialog = root.querySelector<SideDialogEl>('esa-side-dialog')!;
  shell = {
    dialog,
    q: <T extends Element = HTMLElement>(key: string) => root.querySelector<T>(`[data-plp="${key}"]`)!,
    spinner: () =>
      root.querySelector<HTMLTemplateElement>('template[data-plp-tpl="spinner"]')!.content.querySelector('.esa-button__spinner')!.cloneNode(true) as HTMLElement,
  };
  void guardSideDialog(dialog, () => activeCanClose());
  return shell;
}

/** Beacon's [loadingButton] / [disabled] on an esa-button's rendered nodes. */
function setButtonState(native: HTMLElement, state: { loading?: boolean; disabled?: boolean }, spinner: () => HTMLElement): void {
  const wrap = native.closest<HTMLElement>('.esa-button') ?? native;
  const loading = !!state.loading;
  const disabled = !!state.disabled;
  wrap.classList.toggle('esa-button--disabled', disabled);
  if (wrap.classList.contains('esa-button--loading') !== loading) {
    wrap.classList.toggle('esa-button--loading', loading);
    native.toggleAttribute('aria-busy', loading);
    if (loading) native.prepend(spinner());
    else native.querySelector(':scope > .esa-button__spinner')?.remove();
    native.querySelector(':scope > .esa-button__label')?.classList.toggle('esa-button__label--hidden', loading);
  }
  (native as HTMLButtonElement).disabled = loading || disabled;
}

const errorOf = (control: AbstractControl) => (control.touched && control.invalid ? controlErrorMessage(control) ?? '' : '');

/** Opens the panel over `over`; resolves the updated plan after a level is added, or null on cancel. */
export function openPlanLevelPanel(args: { over: SideDialogEl; pin: PlanVersionPin }): Promise<PlanDetailDto | null> {
  const s = getShell();
  const { dialog, q } = s;
  /** Where the level lands — one below the plan's deepest. Shown so the user knows what they are adding. */
  const depth = nextPlanLevelDepth(planStore.plan.Levels);
  const planID = planStore.plan.PlanID!;
  const form: PlanLevelFormGroup = createPlanLevelGroup();
  let isSaving = false;
  let result: PlanDetailDto | null = null;
  let isOpen = true;

  const singular = q<FieldEl>('singular');
  const plural = q<FieldEl>('plural');
  const saveButton = q('save');
  const cancelButton = q('cancel');

  const render = () => {
    if (!isOpen) return;
    singular.errorText = errorOf(form.controls.SingularName);
    plural.errorText = errorOf(form.controls.PluralName);
    setButtonState(saveButton, { loading: isSaving }, s.spinner);
    setButtonState(cancelButton, { disabled: isSaving }, s.spinner);
  };

  const canClose = (): boolean | Promise<boolean> => {
    if (!form.dirty) return true;
    return confirm({
      header: 'Discard unsaved changes?',
      text: 'You have unsaved changes to this level. Closing now will discard them.',
      confirmButtonLabel: 'Discard changes',
      color: 'warn',
    });
  };

  const save = async () => {
    form.markAllAsTouched();
    render();
    if (form.invalid || isSaving) return;
    isSaving = true;
    render();
    try {
      const plan = (await planWrite((token) => planApi.createLevel(planID, toPlanLevelCreateDto(form), token), args.pin)) as PlanDetailDto;
      result = plan;
      forceClose(dialog);
    } catch (error) {
      // A field 400 sits on its input; a form-level one (e.g. a fifth level) is alerted.
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
      } else {
        alertWriteFailure(error, 'Failed to add the level. Please try again.');
      }
    } finally {
      isSaving = false;
      render();
    }
  };

  const ac = new AbortController();
  const on = (el: EventTarget, type: string, handler: (e: Event) => void) => el.addEventListener(type, handler, { signal: ac.signal });
  const bind = (el: FieldEl, control: AbstractControl<string>) => {
    on(el, 'change', (e) => {
      (control as unknown as { setValue(v: string): void }).setValue(String((e as CustomEvent<{ value: string }>).detail?.value ?? el.value));
      control.markAsDirty();
      render();
    });
    on(el, 'focusout', () => {
      control.markAsTouched();
      render();
    });
    on(el, 'keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Enter') {
        e.preventDefault();
        void save();
      }
    });
  };
  bind(singular, form.controls.SingularName);
  bind(plural, form.controls.PluralName);
  on(q('form'), 'submit', (e) => {
    e.preventDefault();
    void save();
  });
  on(saveButton, 'click', () => void save());
  on(cancelButton, 'click', () => void requestClose(dialog, canClose));

  q('subtitle').textContent = `Level ${depth}`;
  singular.value = '';
  plural.value = '';
  activeCanClose = canClose;
  render();
  stackOver(args.over, dialog);
  dialog.show();

  return new Promise((resolve) => {
    dialog.addEventListener('close', function onClose(e) {
      if (e.target !== dialog) return;
      dialog.removeEventListener('close', onClose);
      isOpen = false;
      ac.abort();
      if (activeCanClose === canClose) activeCanClose = () => true;
      resolve(result);
    });
  });
}
