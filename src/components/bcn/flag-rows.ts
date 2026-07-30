// flag-rows — behavior for <BcnFlagRow>: per-flag save. There is no page Save button, so
// flipping a switch IS the commit, and a toast confirms the save.
//
// Self-mounting like setupPrototypeIndex(): the component's <script> is hoisted and
// bundled ONCE per page no matter how many rows render, so this sweeps the document for
// every [data-bcn-flag-row] rather than being handed a root.
//
// State is in-memory only (prototype) — the switch holds its own checked state and the
// row mirrors it onto data-enabled so the page can count or style by it. Nothing persists
// across a reload.

import '@esa/ecology/esa-snackbar-container';

/** The imperative slice of esa-snackbar-container this module drives. */
interface SnackbarHost extends HTMLElement {
  show(config: { message: string; variant?: string; duration?: number }): string;
  dismiss(id: string): void;
}

/**
 * The page's toast stack, created on first use.
 *
 * The container is `display: contents` around a `position: fixed` stack, so body is the
 * right home for it and a page that already renders one is reused rather than doubled.
 */
function snackbarHost(): SnackbarHost {
  const existing = document.querySelector<SnackbarHost>('esa-snackbar-container');
  if (existing) return existing;
  const created = document.createElement('esa-snackbar-container') as SnackbarHost;
  document.body.appendChild(created);
  return created;
}

export function setupFlagRows(): void {
  const rows = [...document.querySelectorAll<HTMLElement>('[data-bcn-flag-row]')];
  if (!rows.length) return;

  // One live toast per row. Toggling the same flag twice quickly should REPLACE its
  // confirmation, not stack two — and the lego's uniqueKey can't do that (it dedupes by
  // returning the existing toast, which would leave "turned on" up after a turn-off).
  const openToast = new Map<HTMLElement, string>();

  for (const row of rows) {
    const toggle = row.querySelector<HTMLElement>('[data-bcn-flag-toggle]');
    if (!toggle) continue;

    toggle.addEventListener('change', (event) => {
      const detail = (event as CustomEvent<{ checked?: boolean }>).detail;
      const enabled = detail?.checked ?? (toggle as unknown as { checked: boolean }).checked;

      if (enabled) row.dataset.enabled = '';
      else delete row.dataset.enabled;

      const name = row.dataset.displayName ?? 'Flag';
      const bar = snackbarHost();
      const previous = openToast.get(row);
      if (previous) bar.dismiss(previous);
      openToast.set(
        row,
        bar.show({
          message: `${name} turned ${enabled ? 'on' : 'off'} — saved`,
          variant: enabled ? 'success' : 'info',
          duration: 3000,
        }),
      );

      // Let the page react — a lifecycle group's "3 of 5 on" count, say — without it
      // having to reach into the switch.
      row.dispatchEvent(
        new CustomEvent('bcn-flag-change', {
          detail: { id: row.dataset.flagId, enabled },
          bubbles: true,
        }),
      );
    });
  }
}
