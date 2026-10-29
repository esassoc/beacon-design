// Controller for <BcnPlanElementMoveDialog> — PlanElementMoveDialogComponent (Jamie, BCN-1820) over the spoke's one
// pre-rendered shell. A required pick over `planMoveTargets`; Move enables once a spot is chosen and resolves it;
// Cancel or a close resolves null. The opener sends the move, so the dialog stays a picker and the page owns the
// mutation.

import '@esa/ecology/esa-dialog';
import '@esa/ecology/esa-combobox';
import type { PlanMoveTarget } from '../../lib/planning/plan-row-actions';
import { esaButtonState } from './plan-schedule-preview';

export interface OpenPlanElementMoveDialogArgs {
  /** The element being moved, named in the title. */
  planElementName: string;
  /** Where it may go — `planMoveTargets`, worked out by the opener from the plan it holds. */
  targets: PlanMoveTarget[];
}

type DialogEl = HTMLElement & { open: boolean; heading: string; show(): void; close(): void };
type ComboEl = HTMLElement & { options: { value: string; label: string }[]; value: string | string[] | null };

/**
 * One option as esa-combobox can show it: a single string, so her option template (the level as a quiet tag before
 * the name, the path beneath) reads as "Level Name · Path". Every one of her searchableValues (name, level, path) is in
 * it, so typing any of them still finds the target.
 * APPROXIMATION: no muted level tag or second path line, and the chosen value shows the path too.
 */
export function planMoveTargetLabel(target: PlanMoveTarget): string {
  const named = target.levelName ? `${target.levelName} ${target.name}` : target.name;
  return target.path ? `${named}, in ${target.path}` : named;
}

interface ElementMoveShell {
  open(args: OpenPlanElementMoveDialogArgs): Promise<PlanMoveTarget | null>;
}

let shell: ElementMoveShell | null = null;

function setupShell(root: HTMLElement): ElementMoveShell {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel)!;

  const dialog = q<DialogEl>('esa-dialog');
  const picker = q<ComboEl>('[data-pem-target]');
  const moveButton = esaButtonState(q<HTMLButtonElement>('[data-pem-move]'), q<HTMLTemplateElement>('template[data-pem-tpl="spinner"]'));

  let targets: PlanMoveTarget[] = [];
  let result: PlanMoveTarget | null = null;
  let settle: ((target: PlanMoveTarget | null) => void) | null = null;

  const chosenKey = (): string | null => {
    const value = picker.value;
    const key = Array.isArray(value) ? value[0] : value;
    return key ? key : null;
  };

  // Move enables once a spot is chosen.
  picker.addEventListener('change', () => moveButton.setDisabled(chosenKey() === null));

  q('[data-pem-move]').addEventListener('click', () => {
    const key = chosenKey();
    const target = targets.find((candidate) => candidate.key === key);
    if (!target) return;
    result = target;
    dialog.close();
  });
  q('[data-pem-cancel]').addEventListener('click', () => dialog.close());

  dialog.addEventListener('close', (event) => {
    if (event.target !== dialog || !settle) return;
    const done = settle;
    settle = null;
    done(result);
  });

  return {
    open(args) {
      settle?.(null);
      targets = args.targets;
      result = null;
      dialog.heading = `Move '${args.planElementName}'`;
      picker.options = targets.map((target) => ({ value: target.key, label: planMoveTargetLabel(target) }));
      picker.value = null;
      moveButton.setDisabled(true);
      return new Promise<PlanMoveTarget | null>((resolve) => {
        settle = resolve;
        dialog.show();
      });
    },
  };
}

/** Opens "Move 'X'". Resolves the chosen target, or null on Cancel/close. */
export function openPlanElementMoveDialog(args: OpenPlanElementMoveDialogArgs): Promise<PlanMoveTarget | null> {
  if (!shell) {
    const root = document.querySelector<HTMLElement>('[data-bcn-plan-element-move-dialog]');
    if (!root) throw new Error('<BcnPlanElementMoveDialog /> is not on this page.');
    shell = setupShell(root);
  }
  return shell.open(args);
}
