// The contract every module on an element's page keeps (2026-10-28). A module is an Astro component whose root carries
// `data-element-module="<key>"` and sits in <BcnElementModule>'s card; its runtime is a setup function that wires the
// card's controls once and returns a draw, which the page calls on every change (a draft edit, a record saved here or
// in another tab). The page decides placement (column, order, shown or not); a module only fills its own card.
//
//   export function setupDocumentsModule(root: HTMLElement, host: ElementModuleHost): ElementModule {
//     return { draw(ctx) { ... } };
//   }

import type { ElementContext } from '../../lib/planning/element-context';
import type { ModuleSettings } from '../../lib/planning/plan-config';

export interface ElementModuleHost {
  /** The context as of the last draw. */
  ctx(): ElementContext;
  /** Re-read the plan and records and draw every module again (after a write a module made itself). */
  refresh(): Promise<void>;
  /** The page's confirm (esa-confirm-dialog). */
  confirm(opts: { heading: string; message: string; confirmLabel?: string; danger?: boolean }): Promise<boolean>;
  /** A short message at the foot of the page (esa-snackbar). */
  toast(message: string, status?: 'success' | 'info' | 'warning' | 'danger'): void;
}

export interface ElementModule {
  /** Fill the card for this context. Called after every change; must be idempotent. */
  draw(ctx: ElementContext, settings: ModuleSettings | undefined): void;
}

export type ElementModuleSetup = (root: HTMLElement, host: ElementModuleHost) => ElementModule;

/** The count beside a module's title (a module with nothing to count leaves it hidden). */
export function setModuleCount(root: HTMLElement, count: number | null): void {
  const slot = root.querySelector<HTMLElement>('[data-elm-count]');
  if (!slot) return;
  slot.hidden = count === null;
  const value = slot.querySelector<HTMLElement>('.esa-badge__text');
  if (value && count !== null) value.textContent = String(count);
}

/** A line under a module's title, or none. */
export function setModuleNote(root: HTMLElement, text: string | null): void {
  const note = root.querySelector<HTMLElement>('[data-elm-note]');
  if (!note) return;
  note.textContent = text ?? '';
  note.hidden = !text;
}

export const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** "Oct 9, 2026" from an ISO date or timestamp. */
export const day = (iso: string | undefined | null) => (iso ? new Date(iso.length === 10 ? `${iso}T12:00:00` : iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '');
/** "Oct 9, 2026, 2:05 PM". */
export const dayTime = (iso: string | undefined | null) => (iso ? new Date(iso).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' }) : '');
/** "$95,000". */
export const money = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`;
