// ops-console — behavior for every <BcnOpCard> on the page. ONE controller, not one per
// card: it sweeps `[data-op-card]` and wires each root it hasn't seen (cards carry their
// own ids, so delegation needs no registry).
//
// What it wires, per instant op:
//   trigger ("Run…")        → opens the card's own esa-dialog
//   type-to-confirm gate    → 'all-tenants' ops keep "Run now" disabled until the typed
//                             name matches op.name (case-insensitive, trimmed)
//   confirm                 → closes the dialog, announces the run, flashes the trigger
//
// The RUN ITSELF is not this controller's business. It dispatches `bcn-op-run` on document
// and stops. NOTHING LISTENS TODAY — the run-history component that prepended a row left
// scope with the rest of the deferred persistence (2026-08-03), and the card already closes
// its own loop by holding the trigger at "Started". The event stays because the seam is the
// point: the card is ignorant of what observes it, so the history can mount later without
// touching this file.
//
// Guided ops have no dialog and no trigger — they link out to their own multi-step run —
// so wiring quietly skips them.
import type { Operation } from '../../data/settings-registry';

/** The event a card announces on document when an operation is fired. */
export const OP_RUN_EVENT = 'bcn-op-run';

export interface OpRunDetail {
  opId: string;
  opName: string;
  scope: Operation['scope'];
}

/** How long the trigger holds its "Started" state before returning to "Run…". */
const STARTED_MS = 2000;

/** Wire every op card on the page. Safe to call more than once (Astro hoists the script
 *  once, but a card is idempotent regardless). */
export function setupOpsConsole(): void {
  for (const card of document.querySelectorAll<HTMLElement>('[data-op-card]')) {
    if (card.dataset.opsWired) continue;
    card.dataset.opsWired = '1';
    wireCard(card);
  }
}

function wireCard(card: HTMLElement): void {
  const trigger = card.querySelector<HTMLButtonElement>('[data-op-run]');
  const dialog = card.querySelector<DialogElement>('[data-op-dialog]');
  if (!trigger || !dialog) return; // guided op — nothing to confirm

  const confirmBtn = card.querySelector<HTMLButtonElement>('[data-op-confirm]');
  const cancelBtn = card.querySelector<HTMLButtonElement>('[data-op-cancel]');
  const nameInput = card.querySelector<HTMLElement>('[data-op-confirm-input]');

  const detail: OpRunDetail = {
    opId: card.dataset.opId ?? '',
    opName: card.dataset.opName ?? '',
    scope: (card.dataset.opScope as Operation['scope']) ?? 'tenant',
  };
  // The typed-name gate exists only where the blast radius does.
  const gate =
    detail.scope === 'all-tenants' && nameInput && confirmBtn
      ? { input: nameInput, button: confirmBtn }
      : null;
  const runLabel = labelOf(trigger);
  let startedTimer = 0;

  trigger.addEventListener('click', () => {
    if (isBusy(trigger)) return;
    dialog.show();
  });
  cancelBtn?.addEventListener('click', () => dialog.close());

  if (gate) {
    // esa-text-field re-emits every keystroke as a composed `change` carrying the value,
    // so the gate tracks typing live rather than waiting for a blur.
    gate.input.addEventListener('change', (event) => {
      const typed = (event as CustomEvent<{ value?: string }>).detail?.value ?? '';
      setDisabled(gate.button, !matchesName(typed, detail.opName));
    });

    // Re-arm on every close — dismissing via Esc, backdrop, X or Cancel must not leave a
    // satisfied gate standing open for the next run.
    dialog.addEventListener('close', () => {
      setFieldValue(gate.input, '');
      setDisabled(gate.button, true);
    });
  }

  confirmBtn?.addEventListener('click', () => {
    if (confirmBtn.disabled) return;
    dialog.close();
    document.dispatchEvent(new CustomEvent<OpRunDetail>(OP_RUN_EVENT, { detail }));

    // A started job is not an instant one — the trigger says so and stays shut for a beat,
    // so a double-click can't fire the same job twice.
    window.clearTimeout(startedTimer);
    setBusy(trigger, true);
    setLabel(trigger, 'Started');
    startedTimer = window.setTimeout(() => {
      setBusy(trigger, false);
      setLabel(trigger, runLabel);
    }, STARTED_MS);
  });
}

/** esa-dialog's imperative surface (the lego is a Lit element, not a native <dialog>). */
interface DialogElement extends HTMLElement {
  show(): void;
  close(): void;
}

const matchesName = (typed: string, name: string): boolean =>
  typed.trim().toLowerCase() === name.trim().toLowerCase();

/**
 * Disable/enable a rendered <EsaButton>.
 *
 * HUB SEAM: esa-button is an .astro lego — compile-time markup, no runtime API — so a
 * caller that flips `disabled` after render has to touch both halves the lego renders:
 * the native <button> (keyboard + activation) and the .esa-button wrapper class (the
 * dimmed look and pointer-events:none). Setting only one leaves a button that looks live
 * but isn't, or the reverse.
 */
function setDisabled(native: HTMLButtonElement, disabled: boolean): void {
  native.disabled = disabled;
  native.closest('.esa-button')?.classList.toggle('esa-button--disabled', disabled);
}

/**
 * The trigger's post-confirm "Started" state.
 *
 * aria-disabled, NOT the disabled property: esa-dialog restores focus to whatever opened
 * it, and a natively-disabled button can't take focus — confirming would dump the caret on
 * <body>. This dims it, blocks the pointer, keeps it announced and focusable, and the click
 * handler reads it back. Only the trigger needs this; the confirm button's gate is a real
 * disabled control.
 */
function setBusy(native: HTMLButtonElement, busy: boolean): void {
  if (busy) native.setAttribute('aria-disabled', 'true');
  else native.removeAttribute('aria-disabled');
  native.closest('.esa-button')?.classList.toggle('esa-button--disabled', busy);
}

const isBusy = (native: HTMLButtonElement): boolean => native.hasAttribute('aria-disabled');

/** Same seam: the label is a span inside the lego's native button. */
function labelOf(native: HTMLButtonElement): string {
  return native.querySelector('.esa-button__label')?.textContent?.trim() ?? '';
}

function setLabel(native: HTMLButtonElement, text: string): void {
  const label = native.querySelector('.esa-button__label');
  if (label) label.textContent = text;
}

/** Write a value into esa-text-field (a Lit host, not a native input). */
function setFieldValue(field: HTMLElement, value: string): void {
  (field as unknown as { value: string }).value = value;
  const inner = field.shadowRoot?.querySelector('input');
  if (inner) inner.value = value;
}
