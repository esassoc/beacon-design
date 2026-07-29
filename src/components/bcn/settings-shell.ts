// settings-shell.client — behavior for <BcnSettingsShell>: the "View as" audience switch.
//
// Unified Settings is one page set serving two readers: ESA admins, who see the whole
// surface, and tenant admins, who see the subset their tenancy owns. The difference is
// carried by a single attribute — `data-audience` on the shell root — so any component
// under the shell can mark its ESA-only parts with `data-esa-only` and never think about
// the switch again.
//
// The choice persists per browser under `bcn-settings-audience`, so a reviewer who set
// themselves to Tenant admin stays there while they walk the rest of the settings pages.
// The shell's inline restore script paints the attribute before this module loads; this
// re-reads the same key to put the toggle in agreement with it.
//
// Options arrive as JSON on data-options because `options` is a Lit ARRAY property:
// arrays cannot cross an HTML attribute, so Astro can't hand it over at build time.

export const AUDIENCES = ['esa-admin', 'tenant-admin'] as const;
export type Audience = (typeof AUDIENCES)[number];

/** The one storage key for the audience choice; the shell's inline restore repeats it. */
export const AUDIENCE_STORAGE_KEY = 'bcn-settings-audience';

export const DEFAULT_AUDIENCE: Audience = 'esa-admin';

/** Segments for the esa-button-toggle, imported by the shell for its data-options JSON. */
export const AUDIENCE_OPTIONS: { label: string; value: Audience }[] = [
  { label: 'ESA admin', value: 'esa-admin' },
  { label: 'Tenant admin', value: 'tenant-admin' },
];

const isAudience = (value: unknown): value is Audience =>
  AUDIENCES.includes(value as Audience);

function readAudience(): Audience | null {
  try {
    const stored = localStorage.getItem(AUDIENCE_STORAGE_KEY);
    return isAudience(stored) ? stored : null;
  } catch {
    return null; // localStorage unavailable (private mode) — fall back to the default
  }
}

function writeAudience(value: Audience): void {
  try {
    localStorage.setItem(AUDIENCE_STORAGE_KEY, value);
  } catch {
    /* localStorage unavailable — the switch still works, it just won't survive a reload */
  }
}

export function setupSettingsShell(): void {
  const root = document.querySelector<HTMLElement>('[data-settings-shell]');
  if (!root) return;

  const toggle = root.querySelector<HTMLElement>('[data-settings-audience]');

  const apply = (value: Audience): void => {
    root.dataset.audience = value;
    if (toggle) (toggle as unknown as { value: string }).value = value;
  };

  if (toggle) {
    const raw = toggle.dataset.options;
    if (raw) {
      try {
        (toggle as unknown as { options: unknown }).options = JSON.parse(raw);
      } catch {
        /* malformed options → the toggle renders empty rather than throwing */
      }
    }

    // esa-button-toggle emits a composed `change` carrying the selected value.
    toggle.addEventListener('change', (e) => {
      const value = (e as CustomEvent<{ value?: string }>).detail?.value;
      if (!isAudience(value)) return;
      apply(value);
      writeAudience(value);
    });
  }

  // The inline restore already set the attribute; this agrees the toggle with it (and
  // covers the case where the inline script was skipped or the store was empty).
  const rendered = root.dataset.audience;
  apply(readAudience() ?? (isAudience(rendered) ? rendered : DEFAULT_AUDIENCE));
}
