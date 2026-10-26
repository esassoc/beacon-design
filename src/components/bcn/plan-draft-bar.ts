// Controller for <BcnPlanDraftBar>: paints the open draft's state and forwards its actions. Holds no draft state of its
// own — plan-workspace.ts owns the draft and calls render() whenever it changes.

import '@esa/ecology/esa-switch-toggle';
import { fillIcons } from '../../lib/planning/icons';

export interface PlanDraftBarState {
  /** The draft's owner is the viewer: everything but Copy to my drafts. Someone else's: view-only. */
  own: boolean;
  /** "Draft", or "Alex's draft" (someone else's). */
  kind: string;
  name: string;
  /** "12 changes · 3 moved with them · Saved". */
  meta: string;
  canUndo: boolean;
  canRedo: boolean;
  /** A scratch copy offers Save as draft; a named one is already kept. */
  isScratch: boolean;
  hasChanges: boolean;
  cascade: boolean;
  compare: boolean;
  conflicts: number;
  /** Move-only edits behind a broken dependency: what Push dependents would change. */
  pushable: number;
}

export interface PlanDraftBarHandlers {
  onClose(): void;
  onUndo(): void;
  onRedo(): void;
  onDiscard(): void;
  onSaveAs(): void;
  onCopy(): void;
  onPublish(): void;
  onCascadeChange(cascade: boolean): void;
  onCompareChange(compare: boolean): void;
  onPushDependents(): void;
}

export interface PlanDraftBar {
  render(state: PlanDraftBarState | null): void;
}

type SwitchEl = HTMLElement & { checked: boolean };

/**
 * `root` is the draft's header actions (BcnPlanDraftBar, in the page header); `keyRoot` the edit bar card
 * (BcnPlanDraftKey: Undo / Redo, the state, the settings, broken dependencies), wired here too.
 */
export function setupPlanDraftBar(root: HTMLElement, keyRoot: HTMLElement, handlers: PlanDraftBarHandlers): PlanDraftBar {
  const q = <T extends Element = HTMLElement>(sel: string) => (root.querySelector<T>(sel) ?? keyRoot.querySelector<T>(sel))!;
  const action = (name: string) => q(`[data-db="${name}"]`);
  const button = (name: string) => action(name).querySelector<HTMLButtonElement>('button') ?? (action(name) as HTMLButtonElement);
  fillIcons(root);
  fillIcons(keyRoot);

  const on = (name: string, run: () => void) => action(name).addEventListener('click', run);
  on('back', () => handlers.onClose());
  on('undo', () => handlers.onUndo());
  on('redo', () => handlers.onRedo());
  on('publish', () => handlers.onPublish());
  on('discard', () => handlers.onDiscard());
  on('save-as', () => handlers.onSaveAs());
  on('copy', () => handlers.onCopy());
  on('push', () => handlers.onPushDependents());
  const cascade = q<SwitchEl>('[data-db="cascade"]');
  cascade.addEventListener('change', (e) => handlers.onCascadeChange(!!((e as CustomEvent<{ checked: boolean }>).detail?.checked ?? cascade.checked)));
  const compare = q<SwitchEl>('[data-db="compare"]');
  compare.addEventListener('change', (e) => handlers.onCompareChange(!!((e as CustomEvent<{ checked: boolean }>).detail?.checked ?? compare.checked)));


  const setDisabled = (name: string, disabled: boolean) => {
    const native = button(name);
    native.disabled = disabled;
    native.closest('.esa-button')?.classList.toggle('esa-button--disabled', disabled);
  };

  return {
    render(state) {
      root.hidden = !state;
      keyRoot.hidden = !state;
      if (!state) return;
      // The draft's name and kind are the page header's (plan-workspace.ts sets the title and badge).
      q('[data-db-meta]').textContent = state.meta;
      for (const r of [root, keyRoot]) r.querySelectorAll<HTMLElement>('[data-db-own]').forEach((el) => (el.hidden = !state.own));
      setDisabled('undo', !state.canUndo);
      setDisabled('redo', !state.canRedo);
      setDisabled('publish', !state.hasChanges);
      if (cascade.checked !== state.cascade) cascade.checked = state.cascade;
      if (compare.checked !== state.compare) compare.checked = state.compare;

      // An unsaved draft can be kept (Save as draft); a named one already is, so its Discard deletes it.
      action('save-as').hidden = !state.own || !state.isScratch;
      action('discard').querySelector('.esa-button__label')!.textContent = state.isScratch ? 'Discard' : 'Delete draft';
      action('copy').hidden = state.own;

      q('[data-db-conflicts]').hidden = state.conflicts === 0;
      q('[data-db-conflicts-text]').textContent = `${state.conflicts} ${state.conflicts === 1 ? 'broken dependency' : 'broken dependencies'}`;
      action('push').hidden = !state.own || state.pushable === 0;
    },
  };
}
