// The runtime half of <BcnPlanPeople>: an esa-avatar for a planner, cloned from the page's bank. Someone the bank
// doesn't know (a ?user= name) gets the bank's blank avatar, labelled with their name.

export type PlanAvatarSize = 'xs' | 'sm' | 'md';

export function planAvatar(name: string, size: PlanAvatarSize = 'xs'): HTMLElement {
  const bank = document.querySelector('[data-bcn-plan-people]');
  const tpl =
    bank?.querySelector<HTMLTemplateElement>(`template[data-plan-person="${CSS.escape(name)}"][data-size="${size}"]`) ??
    bank?.querySelector<HTMLTemplateElement>(`template[data-plan-person=""][data-size="${size}"]`);
  const node = (tpl?.content.firstElementChild?.cloneNode(true) as HTMLElement | undefined) ?? document.createElement('span');
  // Neutral, not the lego's per-name hue (Andy, 2026-10-27): people are not a colour code here.
  node.style.setProperty('--avatar-bg', 'var(--color-content-default-secondary)');
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
