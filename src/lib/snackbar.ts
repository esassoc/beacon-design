// The page's toast stack — the shared client-side helper behind every "…, saved"
// confirmation in the Unified Settings surface.
//
// Extracted from flag-rows.ts when a second controller (record-rows.ts) needed the same
// stack: two modules each creating their own <esa-snackbar-container> would stack two
// fixed overlays on a page that renders both. One host, found or created once.
//
// Import from a component's client <script> (or from another controller):
//   import { toast } from '../../lib/snackbar';
import '@esa/ecology/esa-snackbar-container';

/** The imperative slice of esa-snackbar-container these controllers drive. */
export interface SnackbarHost extends HTMLElement {
  show(config: { message: string; variant?: string; duration?: number }): string;
  dismiss(id: string): void;
}

/**
 * The page's toast stack, created on first use.
 *
 * The container is `display: contents` around a `position: fixed` stack, so body is the
 * right home for it and a page that already renders one is reused rather than doubled.
 */
export function snackbarHost(): SnackbarHost {
  const existing = document.querySelector<SnackbarHost>('esa-snackbar-container');
  if (existing) return existing;
  const created = document.createElement('esa-snackbar-container') as SnackbarHost;
  document.body.appendChild(created);
  return created;
}

/** Show one toast; returns its id, which {@link SnackbarHost.dismiss} takes. */
export function toast(message: string, variant = 'info', duration = 3000): string {
  return snackbarHost().show({ message, variant, duration });
}
