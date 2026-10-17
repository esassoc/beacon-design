// Controller for <BcnPlanSchedulePreview> — PlanSchedulePreviewPanelComponent (Jamie, BCN-1822) over the spoke's one
// pre-rendered shell. Opened over the drawer that asked for it (card-stacked) or alone (Move plan). Confirm runs the
// opener's confirm() — busy while it runs, the panel unclosable meanwhile — and resolves with the returned plan;
// Cancel or a close resolves null and leaves the opener's form untouched.
//
// Rows are cloned from the shell's <template>s; nothing is built from markup strings.

import '@esa/ecology/esa-side-dialog';
import { HttpErrorResponse } from '../../lib/planning/ng-shim';
import type { PlanDetailDto, PlanScheduleChangeSetDto } from '../../lib/planning/model';
import {
  PlanScheduleChangeKind,
  planScheduleChangeHeading,
  planScheduleChangeHint,
  planScheduleChangeRows,
  planScheduleFieldErrors,
  planScheduleFlagRows,
} from '../../lib/planning/plan-schedule-preview';
import { alertWriteFailure, forceClose, guardSideDialog, PlanConflictAnswered, pushAlert, requestClose, stackOver, type SideDialogEl } from '../../lib/planning/plan-page';

export interface OpenPlanSchedulePreviewArgs {
  /** What is being changed — the edited element's name, or the plan's for a shift — shown under the title. */
  subject: string;
  /** What the change is, as a second line under the subject (a shift's "Move plan by +90 days"). */
  detail?: string;
  /** How the heading counts and what the hint explains. */
  kind: PlanScheduleChangeKind;
  /** The preview: what else the change moves, and what it couldn't. */
  changeSet: PlanScheduleChangeSetDto;
  /** Saves the change and returns the whole plan. */
  confirm: () => Promise<PlanDetailDto>;
  /** A side dialog it opens over (card-stacked with stackOver); absent when opened alone (Move plan). */
  over?: SideDialogEl;
}

/** Beacon reads dates in the app's LOCALE_ID; the replica's is en-US. */
const LOCALE = 'en-US';

// ── esa-button runtime state (shared by the plan dialogs) ─────────────────────────────────────────────────────────

/**
 * Busy and disabled states on a pre-rendered esa-button, reusing the lego's own classes (Beacon's [loadingButton] and
 * [disabled]). The spinner is cloned from a pre-rendered `<EsaButton loading>` so it carries the lego's scoped-CSS id.
 */
export interface EsaButtonState {
  setBusy(on: boolean): void;
  setDisabled(on: boolean): void;
}

export function esaButtonState(native: HTMLButtonElement, spinnerSource: HTMLTemplateElement): EsaButtonState {
  const wrap = native.closest<HTMLElement>('.esa-button') ?? native;
  const label = native.querySelector<HTMLElement>('.esa-button__label');
  let busy = false;
  let disabled = false;
  const sync = () => {
    native.disabled = busy || disabled;
    wrap.classList.toggle('esa-button--disabled', disabled && !busy);
  };
  return {
    setBusy(on) {
      if (on === busy) return;
      busy = on;
      wrap.classList.toggle('esa-button--loading', on);
      label?.classList.toggle('esa-button__label--hidden', on);
      if (on) {
        native.setAttribute('aria-busy', 'true');
        const spinner = spinnerSource.content.querySelector('.esa-button__spinner')?.cloneNode(true) as HTMLElement | undefined;
        if (spinner) {
          spinner.dataset.busySpinner = '';
          native.prepend(spinner);
        }
      } else {
        native.removeAttribute('aria-busy');
        native.querySelector('[data-busy-spinner]')?.remove();
      }
      sync();
    },
    setDisabled(on) {
      disabled = on;
      sync();
    },
  };
}

// ── The panel ───────────────────────────────────────────────────────────────────────────────────────────────────────

interface PreviewShell {
  dialog: SideDialogEl;
  open(args: OpenPlanSchedulePreviewArgs): Promise<PlanDetailDto | null>;
}

let shell: PreviewShell | null = null;

function setupShell(root: HTMLElement): PreviewShell {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const tpl = (name: string) => q<HTMLTemplateElement>(`template[data-pp-tpl="${name}"]`);
  const clone = <T extends Element = HTMLElement>(name: string) => tpl(name).content.firstElementChild!.cloneNode(true) as T;

  const dialog = q<SideDialogEl>('esa-side-dialog');
  const confirmButton = esaButtonState(q<HTMLButtonElement>('[data-pp-confirm]'), tpl('spinner'));
  const cancelButton = esaButtonState(q<HTMLButtonElement>('[data-pp-cancel]'), tpl('spinner'));

  let isConfirming = false;
  let current: OpenPlanSchedulePreviewArgs | null = null;
  let result: PlanDetailDto | null = null;
  let settle: ((plan: PlanDetailDto | null) => void) | null = null;

  // Nothing here to lose, but closing mid-confirm would drop the saved plan on the floor.
  const canClose = () => !isConfirming;
  const guarded = guardSideDialog(dialog, canClose);

  const setConfirming = (on: boolean) => {
    isConfirming = on;
    confirmButton.setBusy(on);
    cancelButton.setDisabled(on);
  };

  dialog.addEventListener('close', (event) => {
    if (event.target !== dialog || !settle) return;
    const done = settle;
    settle = null;
    current = null;
    done(result);
  });

  q('[data-pp-cancel]').addEventListener('click', () => {
    void requestClose(dialog, canClose);
  });

  q('[data-pp-confirm]').addEventListener('click', async () => {
    if (isConfirming || !current) return;
    setConfirming(true);
    try {
      const plan = await current.confirm();
      setConfirming(false);
      result = plan;
      forceClose(dialog);
    } catch (error) {
      setConfirming(false);
      alertConfirmFailure(error);
    }
  });

  const fill = (args: OpenPlanSchedulePreviewArgs) => {
    const subject = q('[data-pp-subject]');
    subject.textContent = args.subject;
    subject.hidden = !args.subject;
    const detail = q('[data-pp-detail]');
    detail.textContent = args.detail ?? '';
    detail.hidden = !args.detail;

    q('[data-pp-heading]').textContent = planScheduleChangeHeading(args.changeSet, args.kind);
    q('[data-pp-hint]').textContent = planScheduleChangeHint(args.kind);

    const changeRows = planScheduleChangeRows(args.changeSet, LOCALE);
    const changes = q('[data-pp-changes]');
    changes.replaceChildren(
      ...changeRows.map((row) => {
        const li = clone('change');
        li.dataset.planElementId = row.planElementID;
        const name = li.querySelector<HTMLElement>('[data-pp-name]')!;
        name.textContent = row.name;
        name.title = row.name;
        li.querySelector('[data-pp-from]')!.textContent = row.from;
        li.querySelector('[data-pp-to]')!.textContent = row.to;
        return li;
      })
    );
    changes.hidden = !changeRows.length;

    const flagRows = planScheduleFlagRows(args.changeSet, LOCALE);
    q('[data-pp-flags]').replaceChildren(
      ...flagRows.map((row) => {
        const li = clone('flag');
        li.dataset.key = row.key;
        const sentence = li.querySelector<HTMLElement>('[data-pp-sentence]')!;
        sentence.replaceChildren(
          ...row.sentence.map((part) => {
            if (!part.strong) return document.createTextNode(part.text);
            const strong = clone('strong');
            strong.textContent = part.text;
            return strong;
          })
        );
        const requested = li.querySelector<HTMLElement>('[data-pp-requested]')!;
        if (row.requested) {
          requested.textContent = `${row.requestedLabel} ${row.requested}`;
          requested.hidden = false;
        }
        return li;
      })
    );
    q('[data-pp-flags-section]').hidden = !flagRows.length;
  };

  return {
    dialog,
    async open(args) {
      await guarded;
      // One panel at a time: a second open supersedes an earlier one that never settled.
      settle?.(null);
      current = args;
      result = null;
      setConfirming(false);
      fill(args);
      stackOver(args.over ?? null, dialog);
      return new Promise<PlanDetailDto | null>((resolve) => {
        settle = resolve;
        dialog.show();
      });
    },
  };
}

/**
 * A refused confirm. Beacon's HTTP interceptor alerts a form-level ("") 400; the panel has no inputs for a field one,
 * so it alerts those too (planScheduleFieldErrors); anything else gets the fallback (alertUnlessValidation).
 */
function alertConfirmFailure(error: unknown): void {
  const fallback = 'Failed to save the change. Please try again.';
  if (error instanceof PlanConflictAnswered || !(error instanceof HttpErrorResponse) || error.status !== 400) {
    alertWriteFailure(error, fallback);
    return;
  }
  const formLevel = ((error.error?.errors ?? {}) as Record<string, string[]>)[''] ?? [];
  if (formLevel.length) pushAlert(formLevel.join(' '), 'danger');
  const fieldErrors = planScheduleFieldErrors(error);
  if (fieldErrors.length) pushAlert(fieldErrors.join(' '), 'danger');
}

/** Opens "Review schedule change". Resolves the plan confirm() returned, or null on Cancel/close. */
export function openPlanSchedulePreview(args: OpenPlanSchedulePreviewArgs): Promise<PlanDetailDto | null> {
  if (!shell) {
    const root = document.querySelector<HTMLElement>('[data-bcn-plan-schedule-preview]');
    if (!root) throw new Error('<BcnPlanSchedulePreview /> is not on this page.');
    shell = setupShell(root);
  }
  return shell.open(args);
}
