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

/** A transmittal's receipts, one way everywhere (2026-10-29): "2 of 3 Received", success once all are in, warning while
 *  one is past its date, neutral otherwise. */
export function receiptBadge(confirmed: number, of: number, overdue: boolean, size: BadgeSize = 'sm'): HTMLElement {
  const b = badge(`${confirmed} of ${of} Received`, confirmed === of ? 'success' : overdue ? 'warning' : 'neutral', size);
  b.title = confirmed === of ? `All ${of} confirmed receipt` : `${confirmed} of ${of} confirmed receipt${overdue ? '; past the date to confirm' : ''}`;
  return b;
}

/** Status and health, in the colors the rest of the planning pages use for them. */
export const STATUS_VARIANT: Record<string, BadgeVariant> = {
  'Not Started': 'neutral',
  // Beacon's ramp (prod's status pill, --bcn-status-*): In Progress is the warning tone, Completed success.
  'In Progress': 'warning',
  Blocked: 'danger',
  Completed: 'success',
};
export const HEALTH_VARIANT: Record<string, BadgeVariant> = {
  'On Track': 'success',
  'At Risk': 'warning',
  Late: 'danger',
  Completed: 'success',
  Blocked: 'danger',
};
