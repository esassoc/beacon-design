// <BcnSaveSplit>'s runtime (2026-10-30): give the chevron its choices, or none (a plain Save). Picking one fires
// esa-dropdown-menu's `menu-action` with the choice's value; the host listens on the split and renames its button.

export interface SaveChoice {
  label: string;
  value: string;
}
type MenuEl = HTMLElement & { items: { label: string; action: string; divider?: boolean }[]; open: boolean; close?: () => void };

/** The split around an element (its primary button, or anything in it). */
export const saveSplitOf = (inside: Element | null): HTMLElement | null => inside?.closest<HTMLElement>('[data-bcn-save-split]') ?? null;

/** Show the chevron with these choices (the one that starts something new set apart), or hide it with null. One choice
 *  is no choice: the button already names it, so the chevron stays hidden. */
export function setSaveChoices(split: HTMLElement, choices: readonly SaveChoice[] | null, opts: { disabled?: boolean; newValue?: string } = {}): void {
  const menu = split.querySelector<MenuEl>('[data-save-split-menu]');
  if (!menu) return;
  const on = (choices?.length ?? 0) > 1;
  split.toggleAttribute('data-split', on);
  menu.hidden = !on;
  if (!on) {
    if (menu.open) menu.close?.();
    return;
  }
  const items = choices!.flatMap((c) => [
    ...(opts.newValue !== undefined && c.value === opts.newValue ? [{ label: '', action: '', divider: true }] : []),
    { label: c.label, action: c.value },
  ]);
  if (JSON.stringify(menu.items) !== JSON.stringify(items)) menu.items = items;
  const trigger = menu.querySelector<HTMLButtonElement>('button');
  if (trigger) trigger.disabled = !!opts.disabled;
}

/** The value a `menu-action` carries. */
export const pickedValue = (e: Event): string => String((e as CustomEvent<string>).detail ?? '');
