// The planning pages' client runtime: what Beacon's PlanGanttComponent, PlanVersionService, ConfirmService,
// AlertService and UiSideDialogService give the plan screens, in one module the bcn-plan-* controllers share.
//
//   - planStore: the plan on screen (PlanGanttComponent's `plan` linkedSignal) with change listeners.
//   - versioned writes (PlanVersionService): every write sends the page's VersionToken, or a drawer's pinned one; writes
//     to a plan go one at a time; the versions this tab's own saves produce are remembered (so a poll doesn't announce
//     them) and move a pin forward; a 409 is reported to the page, which shows "This plan has changed".
//   - confirm / toast: esa-confirm-dialog and the spoke's snackbar stand in for ConfirmService and AlertService.
//   - side dialogs: a close guard (Beacon's requestClose / discard guard) and card stacking (a second panel over the first).
//
// Rights: the replica grants every PlanRights right (Update, Create, Delete); see PLAN_RIGHTS.

import '@esa/ecology/esa-confirm-dialog';
import { toast as snackbar } from '../snackbar';
import { HttpErrorResponse } from './ng-shim';
import type { PlanDetailDto } from './model';
import { planApi, PLAN_RULES, PROJECT_ID } from './plan-server';
import { planVersionConflictText, PLAN_VERSION_CONFLICT_HEADER, PLAN_VERSION_CONFLICT_RELOAD_LABEL } from './plan-version';

export { planApi, PLAN_RULES, PROJECT_ID };

/** Every right, as the replica's one user holds them. */
export const PLAN_RIGHTS = { canUpdate: true, canCreate: true, canDelete: true } as const;

/** Where the plans live in this spoke. */
export function plansHref(): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/prototypes/plans/`;
}
export function planHref(planID: string): string {
  return `${plansHref()}plan/?id=${encodeURIComponent(planID)}`;
}

// ── Toasts and confirms ─────────────────────────────────────────────────────────────────────────────────────────────

export type ToastStatus = 'success' | 'info' | 'warning' | 'danger';

/** AlertService.pushAlert: Beacon shows an alert banner; here, a toast. */
export function pushAlert(message: string, status: ToastStatus = 'info', durationMs = 5000): void {
  snackbar(message, status, durationMs);
}

export interface ConfirmOptions {
  header: string;
  text: string;
  confirmButtonLabel?: string;
  cancelButtonLabel?: string;
  /** Beacon's `color: "warn"`: a destructive confirm. */
  color?: 'warn';
}

type ConfirmEl = HTMLElement & { open: boolean; heading: string; message: string; variant: string; confirmLabel: string; cancelLabel: string };

/** ConfirmService.confirm: resolves true on the confirm button, false on cancel, close or dismiss. */
export function confirm(options: ConfirmOptions): Promise<boolean> {
  const el = document.createElement('esa-confirm-dialog') as ConfirmEl;
  Object.assign(el, {
    heading: options.header,
    message: options.text,
    variant: options.color === 'warn' ? 'danger' : 'default',
    confirmLabel: options.confirmButtonLabel ?? 'Confirm',
    cancelLabel: options.cancelButtonLabel ?? 'Cancel',
  });
  document.body.append(el);
  return new Promise((resolve) => {
    el.addEventListener(
      'resolved',
      (e) => {
        resolve(!!(e as CustomEvent<{ confirmed: boolean }>).detail?.confirmed);
        setTimeout(() => el.remove(), 300);
      },
      { once: true }
    );
    requestAnimationFrame(() => (el.open = true));
  });
}

// ── The plan on screen ──────────────────────────────────────────────────────────────────────────────────────────────

type PlanListener = (plan: PlanDetailDto, previous: PlanDetailDto | null) => void;

class PlanStore {
  private current: PlanDetailDto | null = null;
  private listeners = new Set<PlanListener>();
  /** Writes in flight to this plan: a remote refresh waits for them. */
  inFlight = 0;

  get plan(): PlanDetailDto {
    if (!this.current) throw new Error('No plan loaded.');
    return this.current;
  }
  get loaded(): boolean {
    return !!this.current;
  }

  set(plan: PlanDetailDto): void {
    const previous = this.current;
    this.current = plan;
    this.listeners.forEach((l) => l(plan, previous));
  }

  subscribe(listener: PlanListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

export const planStore = new PlanStore();

// ── Versions (PlanVersionService) ───────────────────────────────────────────────────────────────────────────────────

const OWN_VERSIONS_KEPT = 10;
const ownVersions: string[] = [];
const pins = new Set<{ token: string | null }>();
let writeQueue: Promise<unknown> = Promise.resolve();
const conflictListeners = new Set<(updateUserName: string | null) => void>();

/** A drawer's hold on the version its form loaded, released when the drawer closes. */
export interface PlanVersionPin {
  versionToken(): string | null;
  /** A refused save the editor chose to keep: the next save is checked against the plan they now see. */
  moveTo(versionToken: string | null): void;
  release(): void;
}

export function pinPlanVersion(): PlanVersionPin {
  const entry = { token: planStore.plan.VersionToken ?? null };
  pins.add(entry);
  return { versionToken: () => entry.token, moveTo: (token) => (entry.token = token), release: () => pins.delete(entry) };
}

export function isOwnVersion(token: string | null | undefined): boolean {
  return !!token && ownVersions.includes(token);
}

export function onVersionConflict(listener: (updateUserName: string | null) => void): () => void {
  conflictListeners.add(listener);
  return () => conflictListeners.delete(listener);
}

/** A refused write: the page has shown its dialog, so the caller has nothing to alert. */
export class PlanConflictAnswered extends Error {}

/**
 * Sends one write to the plan once every write queued before it has finished, with the pinned version (a drawer's) or
 * the page's. A version it produces is this tab's own; a pin that sent the old one moves on with it.
 *
 * `keepsValuesOnConflict` (new design, "Plan Editing: Proposed Direction" — Unsaved changes): the caller answers a
 * refused (409) save itself, keeping what the editor typed, so the page's "This plan has changed" dialog — whose Reload
 * closes every drawer and loses it — is not raised and the 409 is rethrown as it came.
 */
export function planWrite<T extends PlanDetailDto | void>(
  send: (versionToken: string | null) => Promise<T>,
  pin?: PlanVersionPin,
  options: { keepsValuesOnConflict?: boolean } = {}
): Promise<T> {
  const run = async (): Promise<T> => {
    const sent = pin ? pin.versionToken() : (planStore.loaded ? planStore.plan.VersionToken ?? null : null);
    planStore.inFlight += 1;
    try {
      const result = await send(sent);
      const saved = (result as PlanDetailDto | undefined)?.VersionToken;
      if (saved && sent) {
        ownVersions.push(saved);
        if (ownVersions.length > OWN_VERSIONS_KEPT) ownVersions.shift();
        for (const p of pins) if (p.token === sent) p.token = saved;
      }
      return result;
    } catch (error) {
      if (error instanceof HttpErrorResponse && error.status === 409 && !options.keepsValuesOnConflict) {
        conflictListeners.forEach((l) => l(error.error?.UpdateUserName ?? null));
        throw new PlanConflictAnswered();
      }
      throw error;
    } finally {
      planStore.inFlight -= 1;
    }
  };
  const next = writeQueue.then(run, run);
  writeQueue = next.catch(() => undefined);
  return next;
}

/** The refused-save dialog's copy. */
export function confirmVersionConflict(updateUserName: string | null): Promise<boolean> {
  return confirm({ header: PLAN_VERSION_CONFLICT_HEADER, text: planVersionConflictText(updateUserName).replace(/&#39;/g, "'").replace(/&amp;/g, '&'), confirmButtonLabel: PLAN_VERSION_CONFLICT_RELOAD_LABEL });
}

/**
 * The 400 → alert rule every plan surface shares (alertRowActionFailure / alertUnlessValidation): a refused version
 * is already answered; a 400's messages are alerted; anything else gets `fallback`.
 */
export function alertWriteFailure(error: unknown, fallback: string): void {
  if (error instanceof PlanConflictAnswered) return;
  if (error instanceof HttpErrorResponse && error.status === 400) {
    const messages = Object.values((error.error?.errors ?? {}) as Record<string, string[]>).flat();
    if (messages.length) pushAlert(messages.join(' '), 'danger');
    return;
  }
  pushAlert(fallback, 'danger');
}

/** A 400's field messages keyed by DTO property, for landing on inputs. */
export function fieldErrors(error: unknown): Record<string, string[]> {
  return error instanceof HttpErrorResponse && error.status === 400 ? ((error.error?.errors ?? {}) as Record<string, string[]>) : {};
}

// ── Side dialogs (UiSideDialogService) ──────────────────────────────────────────────────────────────────────────────

export type SideDialogEl = HTMLElement & { open: boolean; heading: string; size: string; show(): void; close(): void };

const guarded = new WeakMap<SideDialogEl, () => void>();

/**
 * Beacon opens its plan drawers with `closeOnBackdropClick: false` and closes them through `requestClose()`, which asks
 * the drawer's discard guard first. esa-side-dialog closes straight away on Esc, its X and a backdrop click, so the
 * guard is put in front of the lego's own close(): every one of those paths calls it.
 * APPROXIMATION: a backdrop click asks the guard rather than doing nothing.
 */
export async function guardSideDialog(el: SideDialogEl, canClose: () => boolean | Promise<boolean>): Promise<void> {
  await customElements.whenDefined(el.localName);
  const nativeClose = Object.getPrototypeOf(el).close as () => void;
  guarded.set(el, () => nativeClose.call(el));
  el.close = () => {
    void Promise.resolve(canClose()).then((ok) => ok && nativeClose.call(el));
  };
}

/** Closes a guarded dialog without asking (Beacon's `ref.close()` / `closeAll()`). */
export function forceClose(el: SideDialogEl): void {
  const close = guarded.get(el);
  if (close) close();
  else el.close();
}

/** Asks a guarded dialog to close; resolves whether it did. */
export function requestClose(el: SideDialogEl, canClose: () => boolean | Promise<boolean>): Promise<boolean> {
  return Promise.resolve(canClose()).then((ok) => {
    if (ok) forceClose(el);
    return ok;
  });
}

/** Every open side dialog closes unguarded (Reload after a conflict; a plan deleted elsewhere). */
export function closeAllSideDialogs(): void {
  document.querySelectorAll<SideDialogEl>('esa-side-dialog[open]').forEach(forceClose);
}

const STACK_INSET = '44px';

/**
 * Card-stacks `child` over `parent` while it is open, as Andy's fish-gantt prototype does: the under card insets to
 * peek out behind, the top card brings no second backdrop. --side-dialog-inset MUST carry units.
 */
export function stackOver(parent: SideDialogEl | null, child: SideDialogEl): void {
  if (!parent?.open) return;
  parent.style.setProperty('--side-dialog-inset', STACK_INSET);
  child.style.setProperty('--color-background-overlay-backdrop', 'transparent');
  child.addEventListener(
    'close',
    () => {
      parent.style.removeProperty('--side-dialog-inset');
      child.style.removeProperty('--color-background-overlay-backdrop');
    },
    { once: true }
  );
}

/** The local calendar date as yyyy-MM-dd (toLocalIsoDate): not toISOString(), which is UTC. */
export function toLocalIsoDate(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

/** PlanGanttComponent.applyPlanChange: a write's returned plan becomes the plan on screen. */
export function applyPlanChange(plan: PlanDetailDto): void {
  planStore.set(plan);
}
