// The runtime half of <BcnBadgeBank>: an esa-badge with any text, cloned from the page's bank so it keeps the lego's
// styles. A page without the bank gets a plain span (the text still reads).

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'xs' | 'sm' | 'md';

export function badge(text: string, variant: BadgeVariant = 'neutral', size: BadgeSize = 'sm'): HTMLElement {
  const tpl = document.querySelector<HTMLTemplateElement>(`[data-bcn-badge-bank] template[data-badge-variant="${variant}"][data-badge-size="${size}"]`);
  const node = (tpl?.content.firstElementChild?.cloneNode(true) as HTMLElement | undefined) ?? document.createElement('span');
  const label = node.querySelector<HTMLElement>('.esa-badge__text') ?? node;
  label.textContent = text;
  return node;
}

/** Status and health, in the colors the rest of the planning pages use for them. */
export const STATUS_VARIANT: Record<string, BadgeVariant> = {
  'Not Started': 'neutral',
  'In Progress': 'info',
  Blocked: 'danger',
  Complete: 'success',
};
export const HEALTH_VARIANT: Record<string, BadgeVariant> = {
  Upcoming: 'neutral',
  'On Track': 'success',
  'At Risk': 'warning',
  Late: 'danger',
  Complete: 'success',
  Blocked: 'danger',
};
