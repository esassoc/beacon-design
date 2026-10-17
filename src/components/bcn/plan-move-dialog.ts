// Controller for <BcnPlanMoveDialog> — PlanMoveDialogComponent (Jamie, BCN-1822) over the spoke's one pre-rendered
// shell. The form is her plan-shift.ts form (createPlanShiftForm / applyPlanShiftMode / toPlanShiftDto) on the ng-shim
// FormGroup; the legos are its inputs. Preview asks planApi.previewShift what would move: nothing → her "Nothing would
// move." notification, cleared as soon as the move changes; anything else → the dialog closes and resolves with the
// shift and its preview. Nothing is saved here.

import '@esa/ecology/esa-dialog';
import '@esa/ecology/esa-button-toggle';
import '@esa/ecology/esa-text-field';
import '@esa/ecology/esa-date-picker';
import { controlErrorMessage, formatDate, HttpErrorResponse, type AbstractControl } from '../../lib/planning/ng-shim';
import type { PlanScheduleChangeSetDto, PlanShiftDto } from '../../lib/planning/model';
import { planDateRange } from '../../lib/planning/plan-form';
import { isPlanScheduleChangeSetEmpty, PLAN_SCHEDULE_DATE_FORMAT } from '../../lib/planning/plan-schedule-preview';
import {
  applyPlanShiftMode,
  createPlanShiftForm,
  PLAN_SHIFT_MODE_OPTIONS,
  PlanShiftMode,
  toPlanShiftDto,
  type PlanShiftForm,
} from '../../lib/planning/plan-shift';
import { fieldErrors, planApi, PLAN_RULES, pushAlert } from '../../lib/planning/plan-page';
import { esaButtonState } from './plan-schedule-preview';

export interface OpenPlanMoveDialogArgs {
  planID: string;
  /** Where the plan starts now (`planCurrentStart`), so a new start date has something to differ from. */
  currentStart: string;
}

/** The shift asked for and its preview; the opener shows the preview, and only its Confirm saves. */
export interface PlanMoveDialogResult {
  shift: PlanShiftDto;
  changeSet: PlanScheduleChangeSetDto;
}

type DialogEl = HTMLElement & { open: boolean; show(): void; close(): void };
type ToggleEl = HTMLElement & { options: { label: string; value: string }[]; value: string };
type FieldEl = HTMLElement & { value: string; errorText: string; min?: string; max?: string };

interface MoveShell {
  open(args: OpenPlanMoveDialogArgs): Promise<PlanMoveDialogResult | null>;
}

let shell: MoveShell | null = null;

function setupShell(root: HTMLElement): MoveShell {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;

  const dialog = q<DialogEl>('esa-dialog');
  const modeToggle = q<ToggleEl>('[data-pm-mode]');
  const daysField = q<FieldEl>('[data-pm-days]');
  const startField = q<FieldEl>('[data-pm-start]');
  const nothing = q('[data-pm-nothing]');
  const spinner = q<HTMLTemplateElement>('template[data-pm-tpl="spinner"]');
  const previewButton = esaButtonState(q<HTMLButtonElement>('[data-pm-preview]'), spinner);
  const cancelButton = esaButtonState(q<HTMLButtonElement>('[data-pm-cancel]'), spinner);

  modeToggle.options = PLAN_SHIFT_MODE_OPTIONS.map((option) => ({ label: option.displayValue, value: option.value }));
  // The server's plan date range, as the new start date picker's min and max.
  const range = planDateRange(PLAN_RULES);
  startField.min = range?.min ?? '';
  startField.max = range?.max ?? '';

  let form: PlanShiftForm | null = null;
  let planID = '';
  let isPreviewing = false;
  /** Bumped on every open and close, so a preview answering after the dialog has gone is dropped. */
  let session = 0;
  /** A field 400's messages, on their inputs until the field changes (applyServerErrors). */
  let serverErrors: Partial<Record<'Days' | 'NewStartDate', string>> = {};
  let result: PlanMoveDialogResult | null = null;
  let settle: ((value: PlanMoveDialogResult | null) => void) | null = null;

  const setPreviewing = (on: boolean) => {
    isPreviewing = on;
    previewButton.setBusy(on);
    cancelButton.setDisabled(on);
  };

  /** ui-field-error: a control's message shows once it is touched. */
  const errorOf = (control: AbstractControl, key: 'Days' | 'NewStartDate'): string =>
    serverErrors[key] ?? (control.touched && control.invalid ? controlErrorMessage(control) ?? '' : '');

  const render = () => {
    if (!form) return;
    const byDays = form.controls.Mode.value === PlanShiftMode.ByDays;
    modeToggle.value = form.controls.Mode.value;
    daysField.hidden = !byDays;
    startField.hidden = byDays;
    daysField.errorText = byDays ? errorOf(form.controls.Days, 'Days') : '';
    startField.errorText = byDays ? '' : errorOf(form.controls.NewStartDate, 'NewStartDate');
  };

  const setNothingMoves = (on: boolean) => {
    nothing.hidden = !on;
  };

  modeToggle.addEventListener('change', (event) => {
    if (!form) return;
    const value = (event as CustomEvent<{ value: string }>).detail?.value ?? modeToggle.value;
    form.controls.Mode.setValue(value as PlanShiftMode);
  });

  daysField.addEventListener('change', () => {
    if (!form) return;
    delete serverErrors.Days;
    const raw = daysField.value.trim();
    form.controls.Days.setValue(raw === '' ? null : Number(raw));
    form.controls.Days.markAsDirty();
  });
  daysField.addEventListener('focusout', () => {
    if (!form) return;
    form.controls.Days.markAsTouched();
    render();
  });

  startField.addEventListener('change', () => {
    if (!form) return;
    delete serverErrors.NewStartDate;
    form.controls.NewStartDate.setValue(startField.value || null);
    form.controls.NewStartDate.markAsDirty();
  });
  startField.addEventListener('focusout', () => {
    if (!form) return;
    form.controls.NewStartDate.markAsTouched();
    render();
  });

  const preview = async () => {
    if (!form) return;
    form.markAllAsTouched();
    render();
    if (form.invalid || isPreviewing) return;
    setPreviewing(true);
    const shift = toPlanShiftDto(form);
    const mine = session;
    try {
      const changeSet = await planApi.previewShift(planID, shift);
      if (mine !== session) return;
      setPreviewing(false);
      if (isPlanScheduleChangeSetEmpty(changeSet)) {
        setNothingMoves(true);
        return;
      }
      result = { shift, changeSet };
      dialog.close();
    } catch (error) {
      if (mine !== session) return;
      setPreviewing(false);
      // A field 400 sits on its input; the HTTP interceptor alerts a form-level one.
      const errors = fieldErrors(error);
      for (const key of ['Days', 'NewStartDate'] as const) {
        if (errors[key]?.length) serverErrors[key] = errors[key][0];
      }
      if (errors['']?.length) pushAlert(errors[''].join(' '), 'danger');
      render();
      if (!(error instanceof HttpErrorResponse) || error.status !== 400) {
        pushAlert('Failed to preview the move. Please try again.', 'danger');
      }
    }
  };

  q('[data-pm-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    void preview();
  });
  q('[data-pm-preview]').addEventListener('click', () => void preview());
  q('[data-pm-cancel]').addEventListener('click', () => dialog.close());

  dialog.addEventListener('close', (event) => {
    if (event.target !== dialog || !settle) return;
    session += 1;
    setPreviewing(false);
    const done = settle;
    settle = null;
    form = null;
    done(result);
  });

  return {
    open(args) {
      settle?.(null);
      session += 1;
      planID = args.planID;
      result = null;
      serverErrors = {};
      setPreviewing(false);
      setNothingMoves(false);

      form = createPlanShiftForm(args.currentStart, () => PLAN_RULES);
      const opened = form;
      opened.valueChanges.subscribe(() => {
        applyPlanShiftMode(opened, opened.controls.Mode.value);
        setNothingMoves(false);
        render();
      });

      q('[data-pm-current]').textContent = `The plan starts ${formatDate(args.currentStart, PLAN_SCHEDULE_DATE_FORMAT)}, not counting Scheduled items, which never move.`;
      daysField.value = '';
      startField.value = '';
      render();

      return new Promise<PlanMoveDialogResult | null>((resolve) => {
        settle = resolve;
        dialog.show();
      });
    },
  };
}

/** Opens "Move plan". Resolves the shift and its (non-empty) preview, or null on Cancel/close. */
export function openPlanMoveDialog(args: OpenPlanMoveDialogArgs): Promise<PlanMoveDialogResult | null> {
  if (!shell) {
    const root = document.querySelector<HTMLElement>('[data-bcn-plan-move-dialog]');
    if (!root) throw new Error('<BcnPlanMoveDialog /> is not on this page.');
    shell = setupShell(root);
  }
  return shell.open(args);
}
