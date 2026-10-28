// The runtime half of <BcnPlanPeople>: an esa-avatar for a planner, cloned from the page's bank. Someone the bank
// doesn't know (a ?user= name) gets the bank's blank avatar, labelled with their name.

import { MARK_COLOR_BY_KEY } from '../../data/entity-marks';

export type PlanAvatarSize = 'xs' | 'sm' | 'md';

/**
 * Each planner's color (2026-10-28, Andy: a color per person, from the monitoring dashboard's ramp, the --bcn-mark-*
 * identity swatches). Kept off teal (the bars) and red, orange and amber (conflicts, overruns, today). Someone not
 * named here takes a spare by their name, the same one every time.
 */
const PERSON_MARK: Record<string, string> = {
  'Alex Rivera': 'violet',
  'Sam Okafor': 'sky',
  'Priya Natarajan': 'magenta',
  'Jamie Quishenberry': 'moss',
  'Andy Lovseth': 'indigo',
  'Dana Whitfield': 'brown',
};
const SPARE_MARKS = ['blue', 'purple', 'olive', 'cyan', 'fuchsia', 'slate', 'green'];
export function personColor(name: string): string {
  const key = PERSON_MARK[name] ?? SPARE_MARKS[[...name].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7) % SPARE_MARKS.length];
  return MARK_COLOR_BY_KEY[key].token;
}

export function planAvatar(name: string, size: PlanAvatarSize = 'xs'): HTMLElement {
  const bank = document.querySelector('[data-bcn-plan-people]');
  const tpl =
    bank?.querySelector<HTMLTemplateElement>(`template[data-plan-person="${CSS.escape(name)}"][data-size="${size}"]`) ??
    bank?.querySelector<HTMLTemplateElement>(`template[data-plan-person=""][data-size="${size}"]`);
  const node = (tpl?.content.firstElementChild?.cloneNode(true) as HTMLElement | undefined) ?? document.createElement('span');
  // Their color, not the lego's per-name hue (neutral 2026-10-27; a color per person, Andy 2026-10-28).
  node.style.setProperty('--avatar-bg', personColor(name));
  node.setAttribute('title', name);
  node.setAttribute('aria-label', name);
  return node;
}

/** An overlapping stack of avatars, at most `max`, then "+N". */
export function planAvatarStack(names: readonly string[], max = 5, size: PlanAvatarSize = 'xs'): HTMLElement {
  const stack = document.createElement('span');
  stack.className = 'bcn-plan-people-stack';
  for (const name of names.slice(0, max)) stack.append(planAvatar(name, size));
  if (names.length > max) {
    const more = document.createElement('span');
    more.className = 'bcn-plan-people-stack__more';
    more.textContent = `+${names.length - max}`;
    stack.append(more);
  }
  return stack;
}

/** EsaButton draws its disabled state from a class as well as the attribute, so a runtime toggle sets both. */
export function setButtonDisabled(btn: HTMLButtonElement | null | undefined, disabled: boolean): void {
  if (!btn) return;
  btn.disabled = disabled;
  btn.classList.toggle('esa-button--disabled', disabled);
  if (disabled) btn.setAttribute('aria-disabled', 'true');
  else btn.removeAttribute('aria-disabled');
}
