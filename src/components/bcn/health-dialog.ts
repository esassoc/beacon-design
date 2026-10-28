// <BcnHealthDialog>'s runtime (2026-10-28, the proposal's "On track, derived and overridable"). Beacon derives an
// element's health from its dates and status (Late past its end; At Risk when behind plan by more than 10 points, or due
// within 14 days and not started). Its owner can override it with a note, as Asana and Linear let people post a health;
// an override nobody has confirmed for 30 days shows Update Missing, after Linear's flag. Saving the same health again
// confirms it. Go Back to Derived drops the override.
//
// Health is a record, kept on Live (decision 5): call this only where records are kept (Live, ctx.canRecord).

import type { PlanDetailDto } from '../../lib/planning/model';
import { attributesAt, getRepo } from '../../lib/planning/plan-repo';
import { planApi } from '../../lib/planning/plan-server';
import { HEALTH_CHOICES, healthOf, recordsFor, setHealth, type Health, type HealthReading } from '../../lib/planning/plan-records';
import { confirm } from '../../lib/planning/plan-page';
import { badge, HEALTH_VARIANT } from './badge-bank';
import { setButtonDisabled } from './plan-people';
import { day } from './element-module';

type DialogEl = HTMLElement & { open: boolean; heading: string };
type ToggleEl = HTMLElement & { value: string; options: { value: string; label: string }[]; errorText: string };
type FieldEl = HTMLElement & { value: string; errorText: string };

export interface HealthDialogOptions {
  planID: string;
  elementId: string;
  elementName: string;
  /** The health as the page shows it: derived, or an owner's override. */
  current: HealthReading;
  /** What Beacon derives with no override. Read from Live when left out. */
  derived?: HealthReading;
}

/** The records' phrases carry ISO dates ("Starts 2027-01-04"); a person reads "Jan 4, 2027". */
export const datesIn = (text: string) => text.replace(/\b(\d{4}-\d{2}-\d{2})\b/g, (iso) => day(iso));

/** What Beacon derives for an element on Live, setting any override aside. */
export async function derivedHealth(planID: string, elementId: string, plan?: PlanDetailDto): Promise<HealthReading> {
  const live = plan ?? (await planApi.getPlan(planID));
  const attrs = attributesAt(getRepo(planID));
  return healthOf({ ...recordsFor(planID), health: {} }, live, elementId, (id) => !!attrs[id]?.deliverable);
}

let api: { open(opts: HealthDialogOptions): Promise<boolean> } | null = null;

/** One-time wiring of the page's <BcnHealthDialog>. openHealthDialog calls it when it's first needed. */
export function setupHealthDialog(): void {
  if (api) return;
  const root = document.querySelector<HTMLElement>('[data-bcn-health-dialog]');
  if (root) api = wire(root);
}

/** Opens the health dialog for one element. Resolves true when its health changed (set, confirmed or reverted). */
export function openHealthDialog(opts: HealthDialogOptions): Promise<boolean> {
  setupHealthDialog();
  return api ? api.open(opts) : Promise.resolve(false);
}

function wire(root: HTMLElement): { open(opts: HealthDialogOptions): Promise<boolean> } {
  // At the body's end, where nothing the page redraws can move it while it's open.
  document.body.append(root);
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const dialog = q<DialogEl>('[data-hld-dialog]');
  const derivedBadge = q('[data-hld-derived-badge]');
  const derivedWhy = q('[data-hld-derived-why]');
  const current = q('[data-hld-current]');
  const stale = q('[data-hld-stale]');
  const staleText = q('[data-hld-stale-text]');
  const staleHint = q('[data-hld-stale-hint]');
  const choice = q<ToggleEl>('[data-hld-choice]');
  const note = q<FieldEl>('[data-hld-note]');
  const revert = q('[data-hld-revert]');
  const saveWrap = q('[data-hld-save]');
  const saveLabel = q('[data-hld-save-label]');
  const ready = Promise.all(['esa-dialog', 'esa-button-toggle', 'esa-textarea'].map((n) => customElements.whenDefined(n)));

  let opts: HealthDialogOptions | null = null;
  let initial = '';
  let settled = true;
  let settle: (changed: boolean) => void = () => undefined;

  const snapshot = () => JSON.stringify([choice.value ?? '', (note.value ?? '').trim()]);
  const dirty = () => snapshot() !== initial;

  /** Save says Confirm when it would keep the override as it is: saving restamps it, and the staleness clears. */
  function drawSave(): void {
    const o = opts?.current.override;
    const same = !!o && choice.value === o.health && (note.value ?? '').trim() === o.note;
    saveLabel.textContent = same ? 'Confirm Health' : 'Set Health';
    setButtonDisabled(saveWrap.querySelector('button'), !choice.value);
  }
  choice.addEventListener('change', () => {
    choice.errorText = '';
    drawSave();
  });
  note.addEventListener('input', () => {
    note.errorText = '';
    drawSave();
  });

  function close(changed: boolean): void {
    settled = true;
    dialog.open = false;
    settle(changed);
  }
  const askDiscard = () => confirm({ header: 'Discard Your Changes?', text: 'The health stays as it was.', confirmButtonLabel: 'Discard', cancelButtonLabel: 'Keep Editing', color: 'warn' });
  q('[data-hld-cancel]').addEventListener('click', async () => {
    if (dirty() && !(await askDiscard())) return;
    close(false);
  });
  dialog.addEventListener('close', async (e) => {
    if (e.target !== dialog || settled) return;
    if (!dirty()) return close(false);
    dialog.open = true;
    if (await askDiscard()) close(false);
  });

  saveWrap.addEventListener('click', () => {
    if (!opts) return;
    const health = choice.value as Health;
    const text = (note.value ?? '').trim();
    choice.errorText = health ? '' : 'Choose a health.';
    note.errorText = text ? '' : 'Say what’s going on, in a line.';
    if (!health || !text) return;
    setHealth(opts.planID, opts.elementId, health, text);
    close(true);
  });
  revert.addEventListener('click', () => {
    if (!opts) return;
    setHealth(opts.planID, opts.elementId, null);
    close(true);
  });

  return {
    async open(o) {
      await ready;
      opts = o;
      const derived = o.derived ?? (await derivedHealth(o.planID, o.elementId));
      const override = o.current.override;
      dialog.heading = `Health: ${o.elementName}`;

      // What Beacon says, and why.
      derivedBadge.replaceChildren(badge(derived.health, HEALTH_VARIANT[derived.health] ?? 'neutral', 'sm'));
      derivedWhy.textContent = derived.why === derived.health ? '' : `${datesIn(derived.why)}.`;

      // The override in place, and whether anyone has confirmed it lately. Stale, the warning says both.
      const isStale = !!override && !!o.current.stale;
      current.hidden = !override || isStale;
      stale.hidden = !isStale;
      staleHint.hidden = isStale;
      if (override) {
        current.textContent = `${override.by} set it to ${override.health} on ${day(override.at)}.`;
        staleText.textContent = `${override.by} set it to ${override.health} on ${day(override.at)} and nobody has confirmed it since. Confirm it if it still holds, or go back to what Beacon derives.`;
      }
      revert.hidden = !override;

      choice.options = HEALTH_CHOICES.map((h) => ({ value: h, label: h }));
      choice.value = override?.health ?? '';
      note.value = override?.note ?? '';
      choice.errorText = '';
      note.errorText = '';
      drawSave();
      initial = snapshot();
      settled = false;
      dialog.open = true;
      return new Promise<boolean>((resolve) => (settle = resolve));
    },
  };
}
