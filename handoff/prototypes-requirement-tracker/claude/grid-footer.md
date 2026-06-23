# Grid footer

Beacon's standard grid footer: "Download as CSV" (download glyph) on the left, "Total Records: N" on the right, with "Filtered Records: N" appearing only when a search/filter narrows the set. Attaches flush under the grid to complete the rounded card.

## Key decisions
- Download exports the current grid via api.exportDataAsCsv().
- Total Records always shows the full row count; Filtered Records appears only while a filter is active — the gap between them is the at-a-glance "how much am I looking at".
- The footer border has no top edge and bottom-rounded corners because the grid wrapper is radius "4px 4px 0 0" — the two form one continuous card.

## Gotchas
- Record counts must update from the grid's onFilterChanged (async), not from the input handler.
- Footer belongs to the Grid pane only.

## Done when
- Total Records: 130 on load; searching shows Filtered Records: N; Download exports a CSV.

## Markup
```html
<div class="table-footer">
  <span id="tt-download"
    ><span
      class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
    >
      <button class="esa-button__native" type="button">
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" x2="12" y1="15" y2="3"></line>
          </svg>
        </span>
        <span class="esa-button__label"> Download as CSV </span>
      </button>
    </span>
  </span>
  <div class="row-count-data">
    Total Records: <span id="tt-total">130</span>
    <span id="tt-filtered" class="filtered-rows-count" hidden=""></span>
  </div>
</div>
```

## Styles
```css
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_ib-size);
  height: var(--_ib-size);
  padding: 0;
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-icon-button--sm {
  --_ib-size: var(--form-height-sm, 32px);
}
.esa-icon-link {
  --_il-font: var(--icon-link-font-size-md, 1rem);
  display: inline-flex;
  align-items: center;
  gap: var(--icon-link-gap, var(--spacing-150, 6px));
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
  color: inherit;
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: var(--_il-font);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
}
.esa-icon-link--sm {
  --_il-font: var(--icon-link-font-size-sm, 0.875rem);
}
.esa-icon-link--medium {
  font-weight: var(--font-weight-medium, 500);
}
.esa-icon-link__label {
  display: inline-block;
}
.page-layout__title h1 .esa-icon {
  color: var(--color-secondary) !important;
}
.table-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-400);
  padding: var(--spacing-200) var(--spacing-400);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-top: 0;
  border-radius: 0 0 var(--radius-100) var(--radius-100);
}
.row-count-data {
  display: flex;
  align-items: center;
  gap: var(--spacing-400);
  font-size: var(--type-size-100);
  color: var(--color-text-secondary);
  font-variant-numeric: tabular-nums;
}
.filtered-rows-count {
  color: var(--color-text-tertiary);
}
.filtered-rows-count[hidden] {
  display: none;
}
.bcn-disc__head .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}
.bcn-disc__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-disc__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.bcn-evidence-card__lead .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-tertiary);
  transition: transform 0.15s ease;
}
.bcn-evidence-card__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-evidence-card__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
.esa-icon {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.bcn-reqref__key .esa-icon {
  --_icon-size: 11px;
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.bcn-reqref__footer .esa-button--color-ghost .esa-button__native {
  color: var(--color-secondary);
}
.bcn-reqref__footer .esa-icon {
  --_icon-size: 13px;
}
.bcn-reqref__ext .esa-icon {
  --_icon-size: 12px;
  opacity: 0.75;
}
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
}
.esa-button {
  --_btn-height: var(--form-height-md, 40px);
  --_btn-padding-x: var(--form-padding-x-md, 16px);
  --_btn-font-size: var(--form-font-size-md, 14px);
  --_btn-radius: var(--form-radius-md, 6px);
  --_accent: var(--color-primary, #43608a);
  --_accent-hover: var(--color-primary-hover, #39506f);
  --_on: var(--color-text-inverse, #ffffff);
  display: inline-block;
}
.esa-button--sm {
  --_btn-height: var(--form-height-sm, 32px);
  --_btn-padding-x: var(--form-padding-x-sm, 12px);
  --_btn-font-size: var(--form-font-size-sm, 12px);
  --_btn-radius: var(--form-radius-sm, 4px);
}
.esa-button__native {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  height: var(--_btn-height);
  padding-inline: var(--_btn-padding-x);
  border: 1px solid transparent;
  border-radius: var(--_btn-radius);
  font-size: var(--_btn-font-size);
  font-family: var(--font-sans, system-ui, sans-serif);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-button--sm .esa-button__native {
  height: auto;
  padding-block: var(--spacing-150, 6px);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  background: transparent;
  color: var(--_accent);
  border-color: var(--_accent);
}
.esa-button--color-ghost .esa-button__native {
  background: transparent;
  color: var(--color-text-primary, #171717);
  border-color: transparent;
}
.esa-button--color-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--color-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border, #e5e5e5);
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-950);
  transition: color 0.15s ease;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  transition:
    transform 0.15s ease,
    opacity 0.2s ease-in-out;
  flex-shrink: 0;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--color-background`: #fafafa _(semantic)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-text-inverse`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-padding-x-md`: .75rem _(component)_
- `--form-padding-x-sm`: .625rem _(component)_
- `--form-radius-md`: .25rem _(component)_
- `--form-radius-sm`: .25rem _(component)_
- `--icon-link-font-size-md`: 1rem _(component)_
- `--icon-link-font-size-sm`: .875rem _(component)_
- `--icon-link-gap`: .375rem _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_

## Behavior
```ts
// ── src/layouts/BaseLayout.astro ──
---
// Beacon base layout — wires the hub tokens + the Beacon theme, loads Beacon's
// fonts (DM Sans + Roboto Mono + Besley), and sets data-theme="beacon" so every
// inherited esa-* component re-skins to Beacon.
import '@esa/tokens/tokens.css';
import '@esa/tokens/component-tokens.css';
// Composition layer: layout primitives (.stack/.cluster/.sidebar/.grid…, gap via
// data-gap) + typography roles (.type-*). Components compose these instead of
// hand-rolling flex/grid + raw --type-size-*.
import '@esa/tokens/layouts.css';
import '@esa/tokens/type-roles.css';
import '../styles/theme-beacon.css';
// HandoffInspector: runtime inspector shipped from the hub package
// (@esa/handoff). Self-gates per route — stays invisible unless a
// /handoff/<route-slug>/manifest.json exists (run `npm run handoff:all`).
import HandoffInspector from '@esa/handoff/HandoffInspector.astro';

interface Props {
  title?: string;
}
const { title = 'Beacon Design' } = Astro.props;
---
<!doctype html>
<html lang="en" data-theme="beacon">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <!-- DM Sans (body/heading), Roboto Mono (code/ids), Besley (opt-in decorative) —
         matching Beacon's _webfonts.scss / _modern.scss font loading. -->
    <link
      href="https://fonts.googleapis.com/css2?family=Besley:ital,wght@0,400..900;1,400..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Roboto+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <title>{title}</title>
    <style is:global>
      *, *::before, *::after { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: var(--font-sans, system-ui, sans-serif);
        font-weight: var(--font-weight-regular, 350);
        color: var(--color-text-primary, #3d3d3d);
        background: var(--color-surface, #fff);
        -webkit-font-smoothing: antialiased;
      }
      a { color: var(--color-text-link, #005862); text-decoration: none; }
      img { display: block; max-width: 100%; }
      button { font-family: inherit; cursor: pointer; background: none; border: 0; }
    </style>
  </head>
  <body>
    <slot />
    <HandoffInspector />
  </body>
</html>

// ── src/lib/base.ts ──
/**
 * Prefix a root-relative path with Astro's configured `base`.
 *
 * Use for anything Astro WON'T rewrite for us: `public/` asset references
 * (`<img src>`, CSS `url()`) and hand-written internal links/redirects.
 * Assets imported through the build pipeline already get the base — don't
 * wrap those.
 *
 * `import.meta.env.BASE_URL` always ends in `/` (e.g. `/beacon-design/` in a
 * production build, `/` in dev), so we strip any leading slash from `path`
 * to avoid a doubled separator.
 */
export const withBase = (path: string): string =>
  import.meta.env.BASE_URL + path.replace(/^\//, '');

// ── src/layouts/AppShell.astro ──
---
// AppShell — the Beacon "modern-layout" frame, ported VERBATIM from the live
// Angular app:
//   - app.component.html/.scss          → .modern-layout (header + body[sidenav+content])
//   - header-nav-modern.component.*      → .topbar (left/center/right zones)
//   - side-nav-modern.component.*        → side nav (logo, project-switcher, main-nav)
//
// SCSS → spoke-token translation (no hardcoded hex/px):
//   $gray-N → var(--bcn-gray-N); $primary → var(--color-primary);
//   rgba($primary,.1) → color-mix(...); $white → var(--color-surface);
//   $accent → var(--color-accent); $danger-600/50 → var(--color-danger[-subtle]);
//   $spacing-* → var(--spacing-*). Radii kept as spacing vars (verbatim).
//
// Driven by a static fixture (see defaults below). The collapse toggle + user
// panel are wired with a tiny inline script — no framework.
import BaseLayout from './BaseLayout.astro';
import EsaIcon from '@esa/ecology/esa-icon.astro';
import EsaIconButton from '@esa/ecology/esa-icon-button.astro';
import { withBase } from '../lib/base';

interface NavItem {
  id: string;
  label: string;
  active?: boolean;
  /** Real route (already withBase'd). Defaults to the `#id` stub when absent. */
  href?: string;
  /** Render a thin divider ABOVE this item (e.g. to set a peer tool apart). */
  divider?: boolean;
}
interface NavSection {
  id: string;
  title: string;
  icon: string;
  /** Inline Lucide path markup for glyphs not in esa-icon's registry. */
  iconPaths?: string;
  items?: NavItem[];
  /** Single-link section (no sublist), e.g. a dashboard entry. */
  link?: boolean;
  expanded?: boolean;
  active?: boolean;
  dividerAfter?: boolean;
}
interface Props {
  title?: string;
  tenantName?: string;
  projectName?: string;
  userName?: string;
  userEmail?: string;
  navSections?: NavSection[];
  showQaBadge?: boolean;
  /** NavItem id to highlight (overrides the static defaults, e.g. Dashboard). */
  activeNavId?: string;
  /** Section ids to render expanded (overrides the per-section `expanded` defaults when provided). */
  expandedSections?: string[];
}

// ── Lucide glyphs not in esa-icon's built-in registry (inner SVG markup only) ──
const LUCIDE = {
  'sliders-horizontal':
    '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
  'circle-user-round':
    '<path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/>',
  'log-out':
    '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
  'library-big':
    '<rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/>',
  'clipboard-check':
    '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  // ── side-nav section icons (verbatim names from side-nav-modern.component.ts) ──
  compass:
    '<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/>',
  'layout-dashboard':
    '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  radar:
    '<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',
  'map-pinned':
    '<path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/>',
  'clipboard-list':
    '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  database:
    '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  hammer:
    '<path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/>',
};

const {
  title = 'Beacon',
  tenantName = 'AWS',
  projectName = 'Raul',
  userName = 'Andy Lovseth',
  userEmail = 'andy.lovseth@esassoc.com',
  showQaBadge = true,
  activeNavId,
  expandedSections,
  // Verbatim nav structure from side-nav-modern.component.ts (standard labels).
  navSections = [
    {
      id: 'setup-wizard',
      title: 'Setup Wizard',
      icon: 'compass',
      iconPaths: LUCIDE['compass'],
      link: true,
    },
    {
      id: 'project',
      title: 'Project',
      icon: 'layout-dashboard',
      iconPaths: LUCIDE['layout-dashboard'],
      expanded: true,
      dividerAfter: true,
      items: [
        { id: 'dashboard', label: 'Dashboard', active: true },
        { id: 'source-documents', label: 'Source Documents' },
        { id: 'commitments', label: 'Commitments' },
        { id: 'requirements', label: 'Requirements' },
        { id: 'organize-actions', label: 'Organize Actions' },
        { id: 'action-lists', label: 'Action Lists' },
        { id: 'document-reviews', label: 'Document Reviews' },
        { id: 'spatial-library-layers', label: 'Spatial Library Layers' },
      ],
    },
    {
      id: 'tracking',
      title: 'Tracking',
      icon: 'radar',
      iconPaths: LUCIDE['radar'],
      expanded: true,
      items: [
        { id: 'tracking-summary', label: 'Tracking Summary' },
        { id: 'project-tracking', label: 'Project Tracking' },
        { id: 'permit-tracking', label: 'Permit Tracking', href: withBase('/prototypes/permit-tracking') },
        { id: 'all-components', label: 'All Components' },
      ],
    },
    {
      id: 'monitoring',
      title: 'Monitoring',
      icon: 'map-pinned',
      iconPaths: LUCIDE['map-pinned'],
      expanded: true,
      items: [
        // The Monitoring Portal's former top-tabs, promoted into the rail (tabs → sidebar).
        { id: 'mp-dashboard', label: 'Dashboard', href: withBase('/prototypes/monitoring/dashboard') },
        { id: 'mp-compliance-concerns', label: 'Compliance Concerns', href: withBase('/prototypes/monitoring/compliance-concerns') },
        { id: 'mp-nesting-birds', label: 'Nesting Birds', href: withBase('/prototypes/monitoring/nesting-birds') },
        { id: 'mp-biological-resources', label: 'Biological Resources', href: withBase('/prototypes/monitoring/biological-resources') },
        { id: 'mp-daily-monitoring-reports', label: 'Daily Monitoring Reports', href: withBase('/prototypes/monitoring/daily-monitoring-reports') },
        { id: 'mp-surveys', label: 'Surveys', href: withBase('/prototypes/monitoring/surveys') },
        { id: 'mp-all-observations', label: 'All Observations', href: withBase('/prototypes/monitoring/all-observations') },
        // Site Clearance is a distinct go/no-go workspace — divided off as the last item.
        { id: 'site-clearance', label: 'Site Clearance', href: withBase('/prototypes/site-clearance'), divider: true },
      ],
    },
    {
      id: 'reporting',
      title: 'Reporting',
      icon: 'clipboard-list',
      iconPaths: LUCIDE['clipboard-list'],
      expanded: true,
      dividerAfter: true,
      items: [
        { id: 'progress-report', label: 'Progress Report' },
        { id: 'report-center', label: 'Report Center' },
      ],
    },
    {
      id: 'data-catalog',
      title: 'Data Catalog',
      icon: 'database',
      iconPaths: LUCIDE['database'],
      expanded: true,
      items: [
        { id: 'dc-source-documents', label: 'Source Documents' },
        { id: 'dc-commitments', label: 'Commitments' },
        { id: 'dc-requirements', label: 'Requirements' },
        { id: 'dc-actions', label: 'Actions' },
        { id: 'dc-all-data', label: 'All Data' },
      ],
    },
  ],
} = Astro.props as Props;

// Per-page section expansion — when provided, a section is expanded iff its id is listed.
if (expandedSections) {
  for (const section of navSections) {
    section.expanded = expandedSections.includes(section.id);
  }
}

// Per-page nav highlight — activeNavId beats the static defaults (Dashboard).
if (activeNavId) {
  for (const section of navSections) {
    let hit = false;
    for (const item of section.items ?? []) {
      item.active = item.id === activeNavId;
      if (item.active) hit = true;
    }
    section.active = hit;
  }
}

---

<BaseLayout title={title}>
  <div class="modern-layout">
    <!-- ═══ TOPBAR (header-nav-modern) ═══ -->
    <header class="topbar">
      <!-- Left: sidebar toggle + tenant trigger -->
      <div class="topbar__left">
        <button
          type="button"
          class="sidebar-toggle"
          id="sidebar-toggle"
          aria-label="Collapse sidebar"
          aria-expanded="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="sidebar-toggle__icon"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M9 3v18" />
          </svg>
        </button>

        <button type="button" class="tenant-trigger">
          <span>{tenantName}</span>
          <EsaIcon name="chevron-down" size="xs" />
        </button>
      </div>

      <!-- Center: spacer (1fr) -->
      <div class="topbar__center"></div>

      <!-- Right: QA badge, search, config/admin icon-buttons, user menu -->
      <div class="topbar__right">
        {
          showQaBadge && (
            <span class="qa-warning">
              <EsaIcon name="triangle-alert" size="sm" />
              QA
            </span>
          )
        }

        <EsaIconButton icon="search" label="Search" size="md" />

        {/* ESA-Config keeps the hand-rolled .icon-button: its glyph (sliders-horizontal)
            is not in esa-icon's built-in registry, and esa-icon-button gives no way to
            forward custom Lucide `paths`. See NEEDS.md. */}
        <a href="#esa-config" class="icon-button" aria-label="ESA-Config">
          <EsaIcon name="sliders-horizontal" size="md" paths={LUCIDE['sliders-horizontal']} />
        </a>

        <EsaIconButton icon="settings" label="Admin settings" size="md" href="#admin" />

        <div class="user-menu" id="user-menu">
          <button type="button" class="user-menu-trigger" id="user-menu-trigger" aria-label="User menu" aria-expanded="false">
            <span class="user-menu-trigger__avatar user-menu-trigger__avatar--fallback">
              <EsaIcon name="circle-user-round" size="md" paths={LUCIDE['circle-user-round']} />
            </span>
          </button>

          <div class="user-panel" id="user-panel" hidden>
            <div class="user-panel__header">
              <div class="user-panel__avatar-wrapper">
                <span class="user-panel__avatar user-panel__avatar--fallback">
                  <EsaIcon name="circle-user-round" size="lg" paths={LUCIDE['circle-user-round']} />
                </span>
              </div>
              <div class="user-panel__info">
                <span class="user-panel__name">{userName}</span>
                <span class="user-panel__email">{userEmail}</span>
              </div>
            </div>

            <div class="user-panel__menu">
              <button type="button" class="user-panel__item">
                <EsaIcon name="pencil" size="sm" />
                <span>Edit Profile</span>
              </button>
              <a class="user-panel__item" href="#help">
                <EsaIcon name="circle-question-mark" size="sm" />
                <span>Get Help</span>
              </a>
              <button type="button" class="user-panel__item user-panel__item--danger">
                <EsaIcon name="log-out" size="sm" paths={LUCIDE['log-out']} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- ═══ BODY (sidenav + content) ═══ -->
    <div class="modern-layout__body">
      <!-- ─── side-nav-modern ─── -->
      <nav class="side-nav" id="side-nav">
        <div class="sidebar-header">
          <a href="#home" class="site-logo" aria-label="Beacon home">
            <img src={withBase('/beacon-icon.svg')} alt="Beacon" class="site-logo__img" />
          </a>
        </div>

        <!-- project-switcher (ported from project-switcher.component) -->
        <div class="project-switcher-container">
          <button type="button" class="project-switcher__trigger">
            <EsaIcon name="hammer" size="sm" paths={LUCIDE['hammer']} />
            <span class="project-switcher__name">{projectName}</span>
            <EsaIcon name="chevron-down" size="sm" class="project-switcher__chevron" />
          </button>
        </div>

        <div class="main-nav">
          {
            navSections.map((section) => (
              <>
                {section.link ? (
                  <div class:list={['nav-section', { 'nav-section--active': section.active }]}>
                    <a href={`#${section.id}`} class="nav-section__header nav-section__header--link">
                      <EsaIcon name={section.icon} size="sm" paths={section.iconPaths ?? LUCIDE[section.icon as keyof typeof LUCIDE]} />
                      <span class="nav-section__title">{section.title}</span>
                    </a>
                  </div>
                ) : (
                  <div
                    class:list={[
                      'nav-section',
                      { 'nav-section--collapsed': !section.expanded, 'nav-section--active': section.active },
                    ]}
                  >
                    <button type="button" class="nav-section__header" aria-expanded={section.expanded ? 'true' : 'false'}>
                      <EsaIcon name={section.icon} size="sm" paths={section.iconPaths ?? LUCIDE[section.icon as keyof typeof LUCIDE]} />
                      <span class="nav-section__title">{section.title}</span>
                      <EsaIcon name="chevron-down" size="sm" />
                    </button>
                    <ul class="nav-section__items">
                      {section.items?.map((item) => (
                        <>
                          {item.divider && <li class="nav-subdivider" aria-hidden="true" />}
                          <li class="nav-item">
                            <a href={item.href ?? `#${item.id}`} class:list={['nav-sublink', { active: item.active }]}>
                              {item.label}
                            </a>
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                )}
                {section.dividerAfter && <hr class="nav-divider" aria-hidden="true" />}
              </>
            ))
          }
        </div>
      </nav>

      <!-- content -->
      <div class="modern-layout__content">
        <slot />
      </div>
    </div>
  </div>
</BaseLayout>

<script>
  // Sidebar collapse toggle + chevron mirroring + user panel open/close.
  // Mirrors header-nav-modern's onToggleSidebar() and ui-dropdown behavior.
  const toggle = document.getElementById('sidebar-toggle');
  const sideNav = document.getElementById('side-nav');
  if (toggle && sideNav) {
    toggle.addEventListener('click', () => {
      const collapsed = sideNav.classList.toggle('collapsed');
      toggle.classList.toggle('sidebar-toggle--collapsed', collapsed);
      toggle.setAttribute('aria-expanded', String(!collapsed));
      toggle.setAttribute('aria-label', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
    });
  }

  // Nav-section expand/collapse (expanded sidebar only).
  document.querySelectorAll<HTMLButtonElement>('.nav-section__header:not(.nav-section__header--link)').forEach((btn) => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.nav-section');
      if (!section) return;
      const nowCollapsed = section.classList.toggle('nav-section--collapsed');
      btn.setAttribute('aria-expanded', String(!nowCollapsed));
    });
  });

  // User menu dropdown.
  const userTrigger = document.getElementById('user-menu-trigger');
  const userPanel = document.getElementById('user-panel');
  const userMenu = document.getElementById('user-menu');
  if (userTrigger && userPanel && userMenu) {
    const setOpen = (open: boolean) => {
      userPanel.hidden = !open;
      userTrigger.setAttribute('aria-expanded', String(open));
    };
    userTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      setOpen(userPanel.hidden);
    });
    document.addEventListener('click', (e) => {
      if (!userMenu.contains(e.target as Node)) setOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }
</script>

<style>
  /* ═══════════════════════════════════════════════════════════════════
     app.component.scss — .modern-layout frame
     ═══════════════════════════════════════════════════════════════════ */
  .modern-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .modern-layout__body {
    display: flex;
    flex: 1;
    overflow: hidden;
    padding-top: 52px; /* header height */
  }

  .modern-layout__content {
    flex: 1;
    overflow-y: auto;
    min-width: 0;
  }

  /* ═══════════════════════════════════════════════════════════════════
     header-nav-modern.component.scss — topbar
     ═══════════════════════════════════════════════════════════════════ */
  .qa-warning {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-100);
    padding: var(--spacing-050) var(--spacing-200);
    font-size: 0.75rem;
    font-weight: 600;
    background: var(--color-accent);
    color: var(--color-surface);
    border-radius: var(--spacing-100);
    white-space: nowrap;
  }

  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 52px;
    background: var(--bcn-gray-100);
    border-bottom: 1px solid var(--bcn-gray-300);
    z-index: 1100;

    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 0 var(--spacing-200);
  }

  @media (min-width: 768px) {
    .topbar {
      padding: 0 var(--spacing-400);
    }
  }

  .topbar__left {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
  }

  .topbar__center {
    display: flex;
    align-items: center;
    gap: var(--spacing-400);
    padding: 0 var(--spacing-400);
  }

  .topbar__right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--spacing-100);
  }

  /* Sidebar toggle */
  .sidebar-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: var(--spacing-050);
    background: transparent;
    color: var(--bcn-gray-600);
    cursor: pointer;
    transition: background 150ms ease, color 150ms ease;
  }
  .sidebar-toggle:hover {
    background: var(--bcn-gray-200);
    color: var(--color-primary);
  }
  .sidebar-toggle:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  .sidebar-toggle__icon {
    transition: transform 150ms ease;
  }
  .sidebar-toggle--collapsed .sidebar-toggle__icon {
    transform: scaleX(-1);
  }

  /* Tenant trigger */
  .tenant-trigger {
    display: flex;
    align-items: center;
    gap: var(--spacing-100);
    padding: var(--spacing-100) var(--spacing-200);
    background: transparent;
    border: none;
    border-radius: var(--spacing-050);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--bcn-gray-900);
    cursor: pointer;
    transition: background 150ms ease;
  }
  .tenant-trigger:hover {
    background: var(--bcn-gray-200);
  }

  /* Icon button */
  /* esa-icon-button inherits currentColor; give the top-bar legos (Search, Admin)
     their resting icon color via the zone. The hand-rolled .icon-button (ESA-Config)
     reads the same semantic token below. */
  .topbar__right :global(.esa-icon-button) {
    color: var(--color-text-secondary);
  }

  .icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: var(--spacing-050);
    background: transparent;
    color: var(--color-text-secondary);
    text-decoration: none;
    cursor: pointer;
    transition: background 150ms ease, color 150ms ease;
  }
  .icon-button:hover {
    background: var(--color-surface-sunken);
    color: var(--color-primary);
  }
  .icon-button--active {
    background: color-mix(in srgb, var(--color-primary) 10%, transparent);
    color: var(--color-primary);
  }
  .icon-button:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  /* User menu trigger */
  .user-menu {
    position: relative;
  }
  .user-menu-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: none;
    border-radius: 9999px;
    background: transparent;
    cursor: pointer;
    transition: transform 150ms ease;
  }
  .user-menu-trigger:hover {
    transform: scale(1.05);
  }
  .user-menu-trigger:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  .user-menu-trigger__avatar {
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    object-fit: cover;
    border: 2px solid var(--bcn-gray-200);
    transition: border-color 150ms ease;
  }
  .user-menu-trigger__avatar--fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bcn-gray-200);
    color: var(--bcn-gray-500);
  }
  .user-menu-trigger:hover .user-menu-trigger__avatar {
    border-color: var(--color-primary);
  }

  /* User panel dropdown (ui-dropdown content, position bottom-end) */
  .user-panel {
    position: absolute;
    top: calc(100% + var(--spacing-200));
    right: 0;
    min-width: 280px;
    background: var(--color-surface);
    border-radius: var(--spacing-200);
    border: 1px solid var(--bcn-gray-200);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
    z-index: 1200;
  }
  .user-panel[hidden] {
    display: none;
  }
  .user-panel__header {
    display: flex;
    align-items: center;
    gap: var(--spacing-300);
    padding: var(--spacing-400);
    border-bottom: 1px solid var(--bcn-gray-200);
  }
  .user-panel__avatar-wrapper {
    flex-shrink: 0;
  }
  .user-panel__avatar {
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    object-fit: cover;
    border: 2px solid var(--bcn-gray-200);
  }
  .user-panel__avatar--fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bcn-gray-100);
    color: var(--bcn-gray-400);
  }
  .user-panel__info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-050);
  }
  .user-panel__name {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--bcn-gray-900);
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .user-panel__email {
    font-size: 0.8125rem;
    color: var(--bcn-gray-500);
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .user-panel__menu {
    padding: var(--spacing-200);
  }
  .user-panel__item {
    display: flex;
    align-items: center;
    gap: var(--spacing-300);
    width: 100%;
    padding: var(--spacing-300);
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--bcn-gray-900);
    background: transparent;
    border: none;
    border-radius: var(--spacing-150);
    cursor: pointer;
    text-align: left;
    text-decoration: none;
    transition: background-color 150ms ease;
  }
  .user-panel__item:hover {
    background: var(--bcn-gray-50);
  }
  .user-panel__item:active {
    background: var(--bcn-gray-100);
  }
  .user-panel__item--danger {
    color: var(--color-danger);
  }
  .user-panel__item--danger:hover {
    background: var(--color-danger-subtle);
  }
  .user-panel__item :global(.esa-icon) {
    color: var(--bcn-gray-500);
  }
  .user-panel__item--danger :global(.esa-icon) {
    color: var(--color-danger);
  }

  /* ═══════════════════════════════════════════════════════════════════
     side-nav-modern.component.scss — side nav
     ($sidebar-width 280px / $sidebar-collapsed-width 72px)
     ═══════════════════════════════════════════════════════════════════ */
  .side-nav {
    width: 280px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--bcn-gray-50);
    font-size: 0.875rem;
    overflow: visible;
    transition: width 200ms ease-in-out;
    border-right: 1px solid var(--bcn-gray-200);
    flex-shrink: 0;
  }
  .side-nav.collapsed {
    width: 72px;
    max-width: 72px;
  }

  .sidebar-header {
    flex-shrink: 0;
    padding: var(--spacing-300) var(--spacing-400);
    transition: padding 200ms ease-in-out;
  }
  .side-nav.collapsed .sidebar-header {
    padding: var(--spacing-300) var(--spacing-200);
  }

  .site-logo {
    display: inline-flex;
    align-items: center;
    padding: var(--spacing-200);
    border-radius: var(--spacing-050);
    text-decoration: none;
    transition: background 150ms ease;
  }
  .site-logo:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  .site-logo__img {
    /* Real Beacon mark (teal leaf/wave). Verbatim: width $spacing-700 (3rem) ×
       height $spacing-775 (3.75rem, one-off — no hub spacing token). */
    width: var(--spacing-700);
    height: 3.75rem;
    object-fit: contain;
    object-position: left center;
    transition: all 200ms ease-in-out;
  }
  .side-nav.collapsed .site-logo__img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    object-position: left center;
  }

  .project-switcher-container {
    flex-shrink: 0;
    padding: 0 var(--spacing-400) var(--spacing-300);
    transition: padding 200ms ease-in-out;
    min-width: 0;
  }
  .side-nav.collapsed .project-switcher-container {
    padding: 0 var(--spacing-200);
  }
  /* project-switcher.component.scss — bordered single-row control */
  .project-switcher__trigger {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    padding: var(--spacing-200) var(--spacing-300);
    background: var(--color-surface);
    border: 1px solid var(--bcn-gray-200);
    border-radius: var(--spacing-200);
    cursor: pointer;
    transition: all 150ms ease;
    color: var(--bcn-gray-950);
    font-size: 0.875rem;
    font-weight: 500;
  }
  .project-switcher__trigger:hover {
    border-color: var(--bcn-gray-300);
    background: var(--bcn-gray-0);
  }
  /* leading icon (hammer) */
  .project-switcher__trigger > :global(.esa-icon:first-child) {
    flex-shrink: 0;
    color: var(--bcn-gray-500);
  }
  .project-switcher__name {
    flex: 1;
    min-width: 0;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .project-switcher__chevron {
    flex-shrink: 0;
    color: var(--bcn-gray-400);
  }
  .side-nav.collapsed .project-switcher__trigger {
    justify-content: center;
    padding: var(--spacing-200);
  }
  .side-nav.collapsed .project-switcher__name,
  .side-nav.collapsed .project-switcher__chevron {
    display: none;
  }

  .main-nav {
    flex: 1;
    overflow-y: auto;
    overflow-x: visible;
    padding: 0 var(--spacing-400);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-050);
    transition: padding 200ms ease-in-out;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .main-nav::-webkit-scrollbar {
    display: none;
  }
  .side-nav.collapsed .main-nav {
    padding: 0 var(--spacing-200);
  }

  .nav-section {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .nav-divider {
    flex-shrink: 0;
    height: 1px;
    margin: var(--spacing-200) 0;
    border: 0;
    background: var(--bcn-gray-200);
  }

  .nav-section__header {
    display: flex;
    align-items: center;
    gap: var(--spacing-300);
    padding: var(--spacing-250) var(--spacing-200);
    color: var(--bcn-gray-950);
    font-size: 0.9375rem;
    font-weight: 550;
    border: none;
    background: transparent;
    border-radius: var(--spacing-050);
    transition: all 150ms ease;
    white-space: nowrap;
    width: 100%;
    text-align: left;
    cursor: pointer;
    text-decoration: none;
  }
  .nav-section__header--link {
    text-decoration: none;
    color: var(--bcn-gray-950);
  }
  .nav-section__header:hover {
    background: rgba(0, 0, 0, 0.04);
    color: var(--color-primary);
  }
  .nav-section__header:hover :global(.esa-icon) {
    color: var(--color-primary);
  }
  .nav-section--active .nav-section__header {
    color: var(--color-primary);
  }
  .nav-section--active .nav-section__header :global(.esa-icon) {
    color: var(--color-primary);
  }

  /* icon (first esa-icon in the header) */
  .nav-section__header > :global(.esa-icon:first-child) {
    flex-shrink: 0;
    color: var(--bcn-gray-950);
    transition: color 150ms ease;
  }
  /* chevron (last esa-icon in the header) */
  .nav-section__header > :global(.esa-icon:last-child) {
    color: var(--bcn-gray-400);
    transition: transform 150ms ease, opacity 200ms ease-in-out;
    flex-shrink: 0;
  }
  .nav-section--collapsed .nav-section__header > :global(.esa-icon:last-child) {
    transform: rotate(-90deg);
  }

  /* title spans flex between icon and chevron */
  .nav-section__title {
    flex: 1;
    overflow: hidden;
    transition: opacity 200ms ease-in-out;
  }
  .side-nav.collapsed .nav-section__title {
    display: none;
  }
  .side-nav.collapsed .nav-section__header > :global(.esa-icon:last-child) {
    display: none;
  }
  .side-nav.collapsed .nav-section__header {
    justify-content: center;
    padding: var(--spacing-250) var(--spacing-200);
  }

  .nav-section__items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-height: 500px;
    opacity: 1;
    transition: max-height 200ms ease-in-out, opacity 200ms ease-in-out;
  }
  .nav-section--collapsed .nav-section__items {
    max-height: 0;
    opacity: 0;
  }
  .side-nav.collapsed .nav-section__items {
    display: none;
  }

  .nav-item {
    padding: 0 0 0 2.5rem;
  }
  .nav-item + .nav-item {
    margin-top: var(--spacing-050);
  }

  /* Sub-item divider — sets a peer tool (Site Clearance) apart from the portal views. */
  .nav-subdivider {
    list-style: none;
    height: 1px;
    margin: var(--spacing-150) 0 var(--spacing-150) 2.5rem;
    background: var(--bcn-gray-200);
  }

  .nav-sublink {
    display: block;
    padding: var(--spacing-200);
    color: var(--bcn-gray-950);
    text-decoration: none;
    border-radius: var(--spacing-050);
    font-size: 0.8125rem;
    transition: all 150ms ease;
    line-height: 1.2;
  }
  .nav-sublink:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  .nav-sublink.active {
    background: rgba(0, 0, 0, 0.04);
    color: var(--color-primary);
  }
</style>

// ── src/layouts/PageLayout.astro ──
---
// PageLayout — Beacon's content-page chrome, ported VERBATIM from the live
// Angular `page-layout` + `breadcrumbs` components:
//   - page-layout.component.scss   → .page-layout (padded wrapper + title row)
//   - breadcrumbs.component.scss   → .breadcrumbs (home glyph + chevron seps)
//
// Renders INSIDE AppShell: a page = AppShell > PageLayout > content.
//
// SCSS → spoke-token translation (no hardcoded hex/px):
//   $gray-N → var(--bcn-gray-N); $spacing-* → var(--spacing-*);
//   font-weight 650 → var(--font-weight-bold); var(--font-decorative) kept
//   (Besley); $type-size-500 → var(--type-size-500).
import EsaIcon from '@esa/ecology/esa-icon.astro';

export interface Breadcrumb {
  label: string;
  href?: string;
}
interface Props {
  /** Ordered crumbs; first leads with the home glyph, last renders as plain text. */
  breadcrumbs?: Breadcrumb[];
  title: string;
  /** Lucide icon name leading the H1 (e.g. "map"). */
  icon?: string;
}

// Lucide glyphs not in esa-icon's registry (inner SVG markup only).
const LUCIDE: Record<string, string> = {
  house:
    '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  map:
    '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
  radar:
    '<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',
  'flask-conical':
    '<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/>',
};

const { breadcrumbs = [], title, icon } = Astro.props as Props;
const iconPaths = icon ? LUCIDE[icon] : undefined;
const hasUtilities = Astro.slots.has('utilities');
---

<div class="page-layout">
  <div class="page-layout__container">
    {
      breadcrumbs.length > 0 && (
        <section class="page-layout__breadcrumbs">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <div class="breadcrumbs__items">
              {breadcrumbs.map((crumb, i) => {
                const isFirst = i === 0;
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <>
                    {isFirst && <EsaIcon name="house" size="sm" paths={LUCIDE['house']} />}
                    {isLast || !crumb.href ? (
                      <span class="breadcrumb-item" aria-current={isLast ? 'page' : undefined}>
                        {crumb.label}
                      </span>
                    ) : (
                      <a class="breadcrumb-item" href={crumb.href}>
                        {crumb.label}
                      </a>
                    )}
                    {!isLast && <EsaIcon name="chevron-right" size="sm" />}
                  </>
                );
              })}
            </div>
          </nav>
        </section>
      )
    }

    <section class="page-layout__title">
      <div class="page-layout__title-main">
        <h1>
          {icon && <EsaIcon name={icon} paths={iconPaths} />}
          {title}
        </h1>
        <slot name="title-badge" />
      </div>
      {
        hasUtilities && (
          <div class="page-layout__utilities">
            <slot name="utilities" />
          </div>
        )
      }
    </section>

    <section class="page-layout__content">
      <slot />
    </section>
  </div>
</div>

<style>
  /* page-layout.component.scss — outer wrapper */
  .page-layout {
    display: flex;
    flex-direction: column;
    /* Fill the viewport below the fixed 52px topbar so the gray surface always
       reaches the bottom, even on short-content pages (e.g. detail pages). */
    min-height: calc(100vh - 52px);
    padding: var(--spacing-600);
    background: var(--bcn-gray-50);
    box-sizing: border-box;
  }
  .page-layout__container {
    display: flex;
    flex-direction: column;
  }
  .page-layout section {
    width: 100%;
  }

  /* breadcrumbs.component.scss */
  .breadcrumbs {
    padding: var(--spacing-400) 0;
  }
  .breadcrumbs__items {
    display: flex;
    gap: var(--spacing-100);
    align-items: center;
    flex-wrap: wrap;
  }
  .breadcrumb-item {
    color: var(--bcn-gray-600);
    text-transform: capitalize;
    font-size: 0.875rem;
  }
  a.breadcrumb-item {
    text-decoration: none;
  }
  a.breadcrumb-item:hover {
    text-decoration: underline;
  }
  /* leading home glyph + chevron separators */
  .breadcrumbs__items :global(.esa-icon) {
    color: var(--bcn-gray-400);
  }

  /* page-layout__title — the header row */
  .page-layout__title {
    border-bottom: 1px solid var(--bcn-gray-200);
    padding: var(--spacing-500) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .page-layout__title-main {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
    min-width: 0;
  }
  .page-layout__title h1 {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
    font-family: var(--font-decorative);
    font-weight: var(--font-weight-bold);
    font-size: var(--type-size-500);
    margin: 0;
    color: var(--bcn-gray-1000);
  }
  .page-layout__title h1 :global(.esa-icon) {
    color: var(--bcn-gray-1000);
    flex-shrink: 0;
  }
  .page-layout__utilities {
    display: flex;
    gap: var(--spacing-200);
  }

  /* page-layout__content */
  .page-layout__content {
    padding: var(--spacing-500) 0;
    min-height: 70vh;
    position: relative;
  }
</style>

// ── src/components/bcn/requirement-reference.ts ──
// Shared model + logic for <BcnRequirementReference> — imported by BOTH the .astro
// component (server render) and any dynamic host (the tracking dialog updates one
// rendered instance per grid row via applyRequirement). One source of truth so the
// field set, order, and presence rules can't drift between SSR and client.

/** The read-only requirement + collapsed-action facts the block surfaces. */
export interface RequirementReference {
  /** Full requirement (source) text — shown in the decorative serif. */
  text: string;
  resourceCategory: string;
  type: string;
  phase: string;
  /** Fixed "One-time" under the Prologis streamlined config; defaults to it. */
  frequency?: string;
  milestone?: string;
  // The conditional trio — clustered, rendered only when carried.
  species?: string[];
  season?: string;
  constructionActivities?: string[];
  responsibleParty: string;
  expectedEvidence: string;
}

/** A resolved metadata row: definition + the requirement's value + whether to show it. */
export interface ReqRefField {
  field: string;
  key: string;
  icon: string;
  value: string;
  present: boolean;
}

// Inline Lucide path markup for glyphs not in esa-icon's registry (esa-icon renders
// `paths` verbatim). Keyed so the .astro can look them up at render time.
export const ICON_PATHS: Record<string, string> = {
  layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
  bird: '<path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/><path d="M7 18a6 6 0 0 0 3.84-10.61"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
  hardhat: '<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  paperclip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
};

interface FieldDef {
  field: string;
  key: string;
  icon: string;
  get: (r: RequirementReference) => string;
}

// Fixed order. Core fields (Resource Category → Frequency, Responsible party,
// Expected evidence) are always present; the conditional trio (Species / Season /
// Construction activity) and Milestone render only when the requirement carries them.
const FIELD_DEFS: FieldDef[] = [
  { field: 'resourceCategory', key: 'Resource Category', icon: 'layers', get: (r) => r.resourceCategory },
  { field: 'type', key: 'Type', icon: 'tag', get: (r) => r.type },
  { field: 'phase', key: 'Phase', icon: 'calendar', get: (r) => r.phase },
  { field: 'frequency', key: 'Frequency', icon: 'repeat', get: (r) => r.frequency || 'One-time' },
  { field: 'milestone', key: 'Milestone', icon: 'flag', get: (r) => r.milestone ?? '' },
  { field: 'species', key: 'Species', icon: 'bird', get: (r) => (r.species ?? []).join(', ') },
  { field: 'season', key: 'Season', icon: 'leaf', get: (r) => r.season ?? '' },
  { field: 'constructionActivities', key: 'Construction activity', icon: 'hardhat', get: (r) => (r.constructionActivities ?? []).join(', ') },
  { field: 'responsibleParty', key: 'Responsible party', icon: 'user', get: (r) => r.responsibleParty },
  { field: 'expectedEvidence', key: 'Expected evidence', icon: 'paperclip', get: (r) => r.expectedEvidence },
];

/** Resolve a requirement into the ordered field rows (value + presence). */
export function resolveFields(r: RequirementReference): ReqRefField[] {
  return FIELD_DEFS.map((d) => {
    const value = d.get(r);
    return { field: d.field, key: d.key, icon: d.icon, value, present: value.trim().length > 0 };
  });
}

/**
 * Client-only — update an already-rendered <BcnRequirementReference> instance for a
 * new requirement (the tracking dialog reuses one instance across grid rows). Sets
 * the source text + each value and hides absent rows; never rebuilds markup, so the
 * SSR'd esa-icons are reused untouched.
 */
export function applyRequirement(root: HTMLElement, r: RequirementReference): void {
  const textEl = root.querySelector('[data-bcn-text]');
  if (textEl) textEl.textContent = r.text;
  for (const f of resolveFields(r)) {
    const row = root.querySelector<HTMLElement>(`[data-field="${f.field}"]`);
    if (!row) continue;
    const val = row.querySelector('.bcn-reqref__val');
    if (val) val.textContent = f.value;
    row.hidden = !f.present;
  }
}

// ── src/components/bcn/BcnRequirementReference.astro ──
---
// <BcnRequirementReference> — the read-only requirement (source) record that anchors
// the tracking dialog's main column, replacing the legacy page-level .rd-reference.
//
// Leads with the requirement text in Besley serif (full width), then a calm
// definition grid of the requirement + its collapsed action's metadata (no pills,
// neutral), then a footer of two low-emphasis actions. The conditional trio (Species /
// Season / Construction activity) and Milestone render only when carried. Frequency is
// fixed One-time under the streamlined config.
//
// It does NOT own identity (the dialog header carries Commitment ID + title + type)
// and does NOT own the source-document drawer — it exposes a [data-bcn-source]
// trigger the host wires to its own esa-side-dialog PDF viewer. For dynamic hosts,
// render once then call applyRequirement(root, req) per row (see ./requirement-reference.ts).
//
// bcn-lego-checked: no esa-* models a "requirement reference" composite (text +
// metadata definition grid + source/edit actions) — checked Ecology (esa-card is just
// a container; esa-* has no requirement-record lego) and Beacon (only the page-level
// .rd-reference blob this replaces). Two consumers (specimen + tracker dialog) → a real
// reusable bcn-. Every control inside is a lego (esa-button / esa-icon); the footer's
// "brand ghost" is a token-only tint of esa-button's ghost (Beacon teal-green), not a
// new primitive. The rest is token-driven layout. No bespoke primitive.
import EsaButton from '@esa/ecology/esa-button.astro';
import EsaIcon from '@esa/ecology/esa-icon.astro';
import { resolveFields, ICON_PATHS, type RequirementReference } from './requirement-reference';

interface Props {
  requirement: RequirementReference;
  /** Data Catalog deep-link for "Edit Requirement". */
  editHref?: string;
}
const { requirement, editHref = '#data-catalog/requirements' } = Astro.props;
const fields = resolveFields(requirement);
---

<article class="bcn-reqref">
  <p class="bcn-reqref__text" data-bcn-text>{requirement.text}</p>

  <dl class="bcn-reqref__meta">
    {fields.map((f) => (
      <div class="bcn-reqref__row" data-field={f.field} hidden={!f.present}>
        <dt class="bcn-reqref__key">
          <EsaIcon name={f.icon} paths={ICON_PATHS[f.icon]} size="xs" />
          {f.key}
        </dt>
        <dd class="bcn-reqref__val">{f.value}</dd>
      </div>
    ))}
  </dl>

  <footer class="bcn-reqref__footer">
    <!-- Host wires this trigger to its own source-document drawer. -->
    <span class="bcn-reqref__action" data-bcn-source>
      <EsaButton color="ghost" size="sm" icon="file-text">View in Source Document</EsaButton>
    </span>
    <span class="bcn-reqref__action" data-bcn-edit data-href={editHref}>
      <EsaButton color="ghost" size="sm" icon="pencil">Edit Requirement<span class="bcn-reqref__ext"><EsaIcon name="external-link" size="xs" /></span></EsaButton>
    </span>
  </footer>
</article>

<script>
  // "Edit Requirement" navigates to the Data Catalog (esa-button is a <button>, so the
  // href rides on the wrapper). Runs once; catches every instance on the page.
  document.querySelectorAll<HTMLElement>('[data-bcn-edit]').forEach((el) => {
    const href = el.dataset.href;
    if (href) el.addEventListener('click', () => { window.location.href = href; });
  });
</script>

<style>
  /* Token-driven; parent owns outer spacing. Mirrors the dialog's .rd-reference shell. */
  .bcn-reqref { display: flex; flex-direction: column; gap: var(--spacing-400); padding: var(--spacing-500); background: var(--color-background); border: 1px solid var(--color-border); border-radius: var(--radius-300); }

  /* Source text in the decorative serif (Besley) — full width, quoted regulatory voice. */
  .bcn-reqref__text { margin: 0; font-family: var(--font-decorative); font-size: 1rem; line-height: 1.6; color: var(--color-text-primary); }

  /* Quiet key-value grid (no pills). */
  .bcn-reqref__meta { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 var(--spacing-600); margin: 0; padding-top: var(--spacing-200); border-top: 1px solid var(--color-border); }
  .bcn-reqref__row { display: grid; grid-template-columns: 178px 1fr; align-items: start; gap: var(--spacing-300); padding: var(--spacing-250) 0; border-bottom: 1px solid var(--color-border-light); }
  .bcn-reqref__row[hidden] { display: none; }
  .bcn-reqref__key { display: inline-flex; align-items: center; gap: var(--spacing-150); margin: 0; font-size: var(--type-size-100); font-weight: var(--font-weight-medium); color: var(--color-text-secondary); }
  /* Attribute glyphs — small, tertiary. */
  .bcn-reqref__key :global(.esa-icon) { --_icon-size: 11px; color: var(--color-text-tertiary); flex-shrink: 0; }
  .bcn-reqref__val { margin: 0; font-size: var(--type-size-100); color: var(--color-text-primary); line-height: 1.5; }

  /* Footer actions — two identical low-emphasis buttons. */
  .bcn-reqref__footer { display: flex; align-items: center; justify-content: flex-end; gap: var(--spacing-100); flex-wrap: wrap; padding-top: var(--spacing-200); }
  .bcn-reqref__action { display: inline-flex; }
  .bcn-reqref__footer :global(.esa-icon) { --_icon-size: 13px; }
  /* Trailing external-link affordance on Edit — quieter than the leading glyph. */
  .bcn-reqref__ext { display: inline-flex; align-items: center; margin-left: var(--spacing-150); }
  .bcn-reqref__ext :global(.esa-icon) { --_icon-size: 12px; opacity: 0.75; }
  /* Brand "green ghost": tint esa-button's neutral ghost with Beacon's teal-green
     (token-only restyle of the lego — candidate for a real esa-button treatment). */
  .bcn-reqref__footer :global(.esa-button--color-ghost .esa-button__native) { color: var(--color-secondary); }
  .bcn-reqref__footer :global(.esa-button--color-ghost .esa-button__native:hover:not(:disabled)) { color: var(--color-secondary-hover); background: color-mix(in srgb, var(--color-secondary) 10%, transparent); }

  @media (max-width: 720px) {
    .bcn-reqref__meta { grid-template-columns: 1fr; }
    .bcn-reqref__row { grid-template-columns: 160px 1fr; }
  }
</style>

// ── src/components/bcn/BcnDiscussion.astro ──
---
// <BcnDiscussion> — the tracking dialog's Discussion section as a timeline of
// comments (avatars as nodes on a connecting rail, matching the dialog's Change
// Log). STRICTLY faithful to Beacon's ActionImplementation comments — no invented
// features: plain text, newest-first, flat; per comment an initials avatar, bold
// author, absolute timestamp ("MMM d, y 'at' h:mm a"), an "(edited)" marker when
// edited, and author-only Edit/Delete (revealed on hover); a "Posting as" compose
// with a plain textarea (placeholder "Write your comment...") and "Post Comment";
// empty state "No comments yet. Start the discussion!". NONE of @mentions,
// attachments, threading/replies, reactions, rich text, read state.
//
// Avatar color uses the setup-wizard STEPPER palette (source → commitment →
// requirement → action), assigned deterministically per author.
//
// bcn-lego-checked: no esa-* models a comment thread — checked Ecology (none) and
// Beacon (the prod comment list is a page-level template, not a shared component).
// Two consumers (specimen + tracker dialog) → a real reusable bcn-. Every control
// is a lego (esa-avatar, esa-icon, esa-badge, esa-icon-button, esa-textarea,
// esa-button); avatar color is a token-only override of the lego's own
// --_avatar-bg. The rest is token-driven layout. No bespoke primitive.
import EsaIcon from '@esa/ecology/esa-icon.astro';
import EsaAvatar from '@esa/ecology/esa-avatar.astro';
import EsaBadge from '@esa/ecology/esa-badge.astro';
import EsaButton from '@esa/ecology/esa-button.astro';
import EsaIconButton from '@esa/ecology/esa-icon-button.astro';

export interface DiscussionComment {
  author: string;
  /** Absolute timestamp, Beacon format: "MMM d, y 'at' h:mm a". */
  time: string;
  text: string;
  edited: boolean;
  /** Current user is the author → Edit/Delete available. */
  own: boolean;
}

interface Props {
  comments: DiscussionComment[];
  currentUser: string;
}
const { comments, currentUser } = Astro.props;

// Lucide message-square-dot.
const MSG_DOT = "<path d='M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7'/><circle cx='18' cy='5' r='3'/>";

// Setup-wizard stepper palette → one color per author, assigned by first-appearance
// order (cycles past 4). Per-author consistent within a thread, but spread across the
// palette instead of colliding the way a name-hash would.
const STEPPER = ['--color-source', '--color-commitment', '--color-requirement', '--color-action'];
const authorColors = new Map<string, string>();
let nextColor = 0;
for (const c of comments) {
  if (!authorColors.has(c.author)) authorColors.set(c.author, STEPPER[nextColor++ % STEPPER.length]);
}
if (!authorColors.has(currentUser)) authorColors.set(currentUser, STEPPER[nextColor++ % STEPPER.length]);
const stepColor = (name: string): string => authorColors.get(name) ?? STEPPER[0];
---

<section class="bcn-disc">
  <h3 class="bcn-disc__head">
    <EsaIcon name="message-square-dot" paths={MSG_DOT} size="sm" />
    Discussion
    {comments.length > 0 && <EsaBadge variant="secondary" size="sm" value={comments.length} />}
  </h3>

  {comments.length === 0 && <p class="bcn-disc__none">No comments yet. Start the discussion!</p>}

  <ul class="bcn-disc__tl">
    {comments.map((c) => (
      <li class="bcn-disc__item">
        <span class="bcn-disc__node" style={`--_node-color: var(${stepColor(c.author)})`}><EsaAvatar name={c.author} size="sm" /></span>
        <div class="bcn-disc__body">
          <div class="bcn-disc__meta">
            <span class="bcn-disc__author">{c.author}</span>
            <span class="bcn-disc__time">{c.time}</span>
            {c.edited && <span class="bcn-disc__edited">(edited)</span>}
            {c.own && (
              <span class="bcn-disc__actions">
                <EsaIconButton icon="pencil" label="Edit" size="sm" />
                <EsaIconButton icon="trash-2" label="Delete" size="sm" />
              </span>
            )}
          </div>
          <p class="bcn-disc__text">{c.text}</p>
        </div>
      </li>
    ))}

    <!-- Compose — the trailing node. -->
    <li class="bcn-disc__item bcn-disc__item--compose">
      <span class="bcn-disc__node" style={`--_node-color: var(${stepColor(currentUser)})`}><EsaAvatar name={currentUser} size="sm" /></span>
      <div class="bcn-disc__compose">
        <span class="bcn-disc__as">Posting as {currentUser}</span>
        <esa-textarea rows="2" placeholder="Write your comment..."></esa-textarea>
        <div class="bcn-disc__compose-actions"><EsaButton color="primary" size="sm">Post Comment</EsaButton></div>
      </div>
    </li>
  </ul>
</section>

<script>
  import '@esa/ecology/esa-textarea';
</script>

<style>
  .bcn-disc { display: flex; flex-direction: column; gap: var(--spacing-400); }
  .bcn-disc__head { display: flex; align-items: center; gap: var(--spacing-200); margin: 0; font-size: var(--type-size-200); font-weight: var(--font-weight-semibold); color: var(--color-text-primary); }
  .bcn-disc__head :global(.esa-icon) { flex-shrink: 0; color: var(--color-text-secondary); }
  .bcn-disc__none { margin: 0; font-size: 0.875rem; color: var(--color-text-tertiary); }

  /* Timeline — avatars as connected nodes (same vocabulary as the Change Log). */
  .bcn-disc__tl { list-style: none; margin: 0; padding: 0; }
  .bcn-disc__item { position: relative; display: grid; grid-template-columns: auto 1fr; gap: var(--spacing-300); padding-bottom: var(--spacing-400); }
  .bcn-disc__item:not(:last-child)::before { content: ''; position: absolute; left: 13px; top: 32px; bottom: 0; width: 2px; background: var(--color-border); }
  .bcn-disc__item--compose { padding-bottom: 0; }
  .bcn-disc__node { position: relative; z-index: 1; }
  /* Avatar color = the wrapper's --_node-color (stepper token), overriding the
     lego's name-hash default. */
  .bcn-disc__node :global(.esa-avatar) { --_avatar-bg: var(--_node-color, var(--color-secondary)); }

  .bcn-disc__body { min-width: 0; display: flex; flex-direction: column; gap: 2px; }
  .bcn-disc__meta { display: flex; align-items: baseline; flex-wrap: wrap; gap: var(--spacing-200); }
  .bcn-disc__author { font-size: 0.875rem; font-weight: var(--font-weight-semibold); color: var(--color-text-primary); }
  .bcn-disc__time { font-size: 0.75rem; color: var(--color-text-tertiary); }
  .bcn-disc__edited { font-size: 0.75rem; font-style: italic; color: var(--color-text-tertiary); }
  .bcn-disc__text { margin: 0; font-size: 0.875rem; line-height: 1.5; color: var(--color-text-primary); white-space: pre-wrap; }

  /* Author-only Edit/Delete — revealed on hover/focus (prod behavior). */
  .bcn-disc__actions { display: inline-flex; align-items: center; gap: 1px; margin-left: auto; opacity: 0; transition: opacity 120ms ease; }
  .bcn-disc__item:hover .bcn-disc__actions,
  .bcn-disc__item:focus-within .bcn-disc__actions { opacity: 1; }
  .bcn-disc__actions :global(.esa-icon-button) { width: 26px; height: 26px; }
  .bcn-disc__actions :global(.esa-icon) { width: 15px; height: 15px; }

  /* Compose. */
  .bcn-disc__compose { min-width: 0; display: flex; flex-direction: column; gap: var(--spacing-200); }
  .bcn-disc__as { font-size: 0.8125rem; color: var(--color-text-secondary); }
  .bcn-disc__compose esa-textarea { width: 100%; }
  .bcn-disc__compose-actions { display: flex; justify-content: flex-end; }
</style>

// ── src/components/bcn/BcnStatusSelect.astro ──
---
// <BcnStatusSelect> — a labeled status control whose trigger shows the LIVE status
// color dot (which is why it isn't an esa-select: the trigger renders a value-driven
// color the lego can't). Normal field styling — NOT the teal "active" state an
// esa-filter-dropdown shows when it holds a selection.
//
// TWO modes:
//   • Default (no `options`)  — the tracking dialog's 3 states (Not Started / In
//     Progress / Completed); dot color is token-driven (--bcn-status-*) via CSS.
//   • Option-driven           — pass `options: {value,label,color}[]` for any status
//     set (e.g. the fish-study plan/exec ramps); dots render the given hex inline.
// Both are wired the same way: render once, then setupStatusSelect(root); the
// controller flips state + (in option mode) repaints the trigger dot from the
// selected option's color. ctl.setValue(v) updates WITHOUT firing 'change'.
//
// bcn-lego-checked: no esa-* models a status select whose trigger shows the live
// status color; esa-select can't render a value-driven dot, esa-filter-dropdown is a
// teal-active multi-filter. Checked Ecology + Beacon (status pill). bcn-status-select
// is the reusable home.

interface Option {
  value: string;
  label: string;
  /** Inline dot color (option mode). Omit for the token-driven default set. */
  color?: string;
}
interface Props {
  id?: string;
  label?: string;
  value?: string;
  /** Custom status set; omit for the default Not Started / In Progress / Completed. */
  options?: Option[];
}
const { id, label = 'Status', value, options } = Astro.props;

const DEFAULT_OPTIONS: Option[] = [
  { value: 'not-started', label: 'Not Started' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'completed', label: 'Completed' },
];
const opts = options ?? DEFAULT_OPTIONS;
const tokenMode = !options; // default set → dot color from CSS tokens, no inline hex
const current = value ?? opts[0].value;
const selected = opts.find((o) => o.value === current) ?? opts[0];
---

<div class="bcn-status-select" id={id} data-value={current}>
  <span class="bcn-status-select__label">{label}</span>
  <div class="bcn-status-select__dd">
    <button type="button" class="bcn-status-select__trigger" aria-haspopup="listbox" aria-expanded="false">
      <span
        class="bcn-status-select__dot bcn-status-select__dot--trigger"
        style={selected.color ? `background:${selected.color}` : undefined}
      ></span>
      <span class="bcn-status-select__value">{selected.label}</span>
      <svg class="bcn-status-select__chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <ul class="bcn-status-select__menu" role="listbox" hidden>
      {opts.map((opt) => (
        <li
          class="bcn-status-select__opt"
          role="option"
          data-value={opt.value}
          data-label={opt.label}
          data-color={opt.color}
          aria-selected={String(opt.value === current)}
        >
          <span class={`bcn-status-select__dot ${tokenMode ? `bcn-status-select__dot--${opt.value}` : ''}`} style={opt.color ? `background:${opt.color}` : undefined}></span>{opt.label}
        </li>
      ))}
    </ul>
  </div>
</div>

<style>
  /* Label matches the legos' .field__label (esa-date-picker / esa-select), 4px gap. */
  .bcn-status-select { display: flex; flex-direction: column; gap: var(--spacing-100); }
  .bcn-status-select__label { font-size: 0.875rem; font-weight: var(--font-weight-medium); color: var(--form-label-color); }

  .bcn-status-select__dd { position: relative; }
  .bcn-status-select__trigger {
    display: flex; align-items: center; gap: var(--spacing-200); width: 100%;
    height: 40px; padding: 0 var(--spacing-300);
    font-size: 0.875rem; font-weight: var(--font-weight-medium); color: var(--color-text-primary);
    background: var(--color-surface); border: 1px solid var(--form-border-color);
    border-radius: var(--form-radius-md); cursor: pointer;
    transition: border-color 150ms ease, box-shadow 150ms ease;
  }
  .bcn-status-select__trigger:hover { border-color: var(--color-border-strong); }
  .bcn-status-select__trigger[aria-expanded='true'] {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 18%, transparent);
  }
  .bcn-status-select__value { flex: 1; text-align: left; }
  .bcn-status-select__chev { color: var(--color-text-tertiary); flex-shrink: 0; transition: transform 150ms ease; }
  .bcn-status-select__trigger[aria-expanded='true'] .bcn-status-select__chev { transform: rotate(180deg); }

  /* Default-set dot colors are token-driven (option mode supplies inline color instead). */
  .bcn-status-select__dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
  .bcn-status-select__dot--not-started { background: var(--bcn-status-not-started); }
  .bcn-status-select__dot--in-progress { background: var(--bcn-status-in-progress); }
  .bcn-status-select__dot--completed { background: var(--bcn-status-completed); }
  .bcn-status-select[data-value='not-started'] .bcn-status-select__dot--trigger { background: var(--bcn-status-not-started); }
  .bcn-status-select[data-value='in-progress'] .bcn-status-select__dot--trigger { background: var(--bcn-status-in-progress); }
  .bcn-status-select[data-value='completed'] .bcn-status-select__dot--trigger { background: var(--bcn-status-completed); }

  .bcn-status-select__menu {
    position: absolute; top: calc(100% + 4px); left: 0; right: 0; z-index: 20;
    margin: 0; padding: var(--spacing-100); list-style: none;
    background: var(--color-surface); border: 1px solid var(--color-border);
    border-radius: var(--form-radius-md); box-shadow: var(--shadow-300);
  }
  .bcn-status-select__menu[hidden] { display: none; }
  .bcn-status-select__opt {
    display: flex; align-items: center; gap: var(--spacing-200);
    padding: var(--spacing-200) var(--spacing-300); font-size: 0.875rem; color: var(--color-text-primary);
    border-radius: var(--radius-200); cursor: pointer;
  }
  .bcn-status-select__opt:hover { background: var(--color-surface-sunken); }
  .bcn-status-select__opt[aria-selected='true'] { background: var(--color-surface-sunken); font-weight: var(--font-weight-semibold); }
</style>

// ── src/components/bcn/BcnKeyValue.astro ──
---
// <BcnKeyValue> — the read-only key / value / hint tier from the tracking dialog's
// Details and Notifications sections (replacing the legacy .rd-kv block). Presentational:
// stacks a quiet label, an optional prominent value, and an optional tertiary hint.
//
// The label intentionally mirrors esa-select's .field__label EXACTLY (clamped
// --form-font-size-md, --font-weight-medium 450, --form-label-color) so a read-only
// "Responsible Party" reads identically to an editable "Assignee" select label. The
// value is the prominent answer (semibold + primary). A <slot> lets a host pass rich
// value content (links, pills) in place of the plain `value` string.
//
// bcn-lego-checked: no esa-* key/value (description-list) lego — checked Ecology and
// Beacon. bcn-key-value codifies the label -> value -> hint tier used in the dialog's
// Details and Notifications sections.

interface Props {
  label: string;
  value?: string;
  hint?: string;
}
const { label, value, hint } = Astro.props;
---

<div class="bcn-key-value">
  <span class="bcn-key-value__key">{label}</span>
  {value && <span class="bcn-key-value__val">{value}</span>}
  <slot />
  {hint && <span class="bcn-key-value__hint">{hint}</span>}
</div>

<style>
  /* Sidebar key/value (read-only prod details) */
  .bcn-key-value { display: flex; flex-direction: column; gap: 2px; }
  /* Key mirrors esa-select's .field__label EXACTLY (clamped --form-font-size-md,
     --font-weight-medium 450, --form-label-color) so "Responsible Party"
     reads identically to the "Assignee" select label. Value is the prominent answer:
     semibold + primary, so Scope's three lines gain a clear label→value→hint tier. */
  .bcn-key-value__key { font-size: var(--form-font-size-md); font-weight: var(--font-weight-medium); color: var(--form-label-color); }
  .bcn-key-value__val { font-size: var(--form-font-size-md); font-weight: var(--font-weight-semibold); color: var(--color-text-primary); }
  .bcn-key-value__hint { font-size: 0.75rem; color: var(--color-text-tertiary); }
</style>

// ── src/components/bcn/BcnChangeLog.astro ──
---
// <BcnChangeLog> — the tracking dialog's Change Log: a date-grouped vertical
// timeline of activity, replacing the legacy page-level .rd-log. Each day is a node
// on a connecting rail; under it, a list of events, each "{text} {emphasis}" on one
// line with the actor + time beneath. Presentational — no JS, host supplies the data.
//
// bcn-lego-checked: no esa-* timeline/changelog lego — checked Ecology and Beacon.
// bcn-change-log is a date-grouped vertical timeline; the spine is a rail, not a status
// left-border.

interface ChangeLogEvent {
  text: string;
  emphasis?: string;
  by: string;
}
interface ChangeLogDay {
  date: string;
  events: ChangeLogEvent[];
}
interface Props {
  days: ChangeLogDay[];
}
const { days } = Astro.props;
---

<ol class="bcn-change-log">
  {days.map((day) => (
    <li class="bcn-change-log__day">
      <p class="bcn-change-log__date">{day.date}</p>
      <ul class="bcn-change-log__events">
        {day.events.map((e) => (
          <li class="bcn-change-log__event">
            <span class="bcn-change-log__text">{e.text} {e.emphasis && <strong>{e.emphasis}</strong>}</span>
            <span class="bcn-change-log__by">{e.by}</span>
          </li>
        ))}
      </ul>
    </li>
  ))}
</ol>

<style>
  .bcn-change-log { list-style: none; margin: 0; padding: 0; }
  /* The left border is the timeline SPINE (a rail), not a status indicator. */
  .bcn-change-log__day { position: relative; margin-left: 5px; padding: 0 0 var(--spacing-400) var(--spacing-500); border-left: 2px solid var(--color-border); }
  .bcn-change-log__day:last-child { border-left-color: transparent; padding-bottom: 0; }
  .bcn-change-log__day::before { content: ''; position: absolute; left: -6px; top: 3px; width: 10px; height: 10px; border-radius: 50%; background: var(--color-surface); border: 2px solid var(--color-secondary); }
  .bcn-change-log__date { margin: 0 0 var(--spacing-200); font-size: 0.8125rem; font-weight: var(--font-weight-semibold); color: var(--color-text-primary); }
  .bcn-change-log__events { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--spacing-300); }
  .bcn-change-log__event { display: flex; flex-direction: column; gap: 1px; }
  .bcn-change-log__text { font-size: 0.875rem; line-height: 1.4; color: var(--color-text-primary); }
  .bcn-change-log__by { font-size: 0.75rem; color: var(--color-text-tertiary); }
</style>

// ── src/components/bcn/BcnNotifications.astro ──
---
// <BcnNotifications> — the tracking dialog's Notifications section: a quiet summary of
// who gets notified and on which triggers for an Action's implementations. Presentational
// only (no JS). Leads with a one-line explainer + an "Edit recipients & triggers" link
// (the settings live on the Action in the Data Catalog), then three labeled fields:
// "Next notification" (a warning dot + a host-supplied date), "Additional recipients"
// (pills), and "Triggers" (a list of named triggers, each on or off).
//
// The "Next notification" date is host-set at runtime: this renders
// <span data-bcn-notif-due>—</span> so the page can query [data-bcn-notif-due] per row
// and set textContent. The field labels use this component's OWN __label class (copied
// from the dialog's .rd-kv__key sizing) so it stays decoupled from any key-value lego.
//
// bcn-lego-checked: no esa-* notification-settings lego — checked Ecology and Beacon.
// bcn-notifications composes esa-pill / esa-badge / esa-icon-link into the per-action
// notification summary.
import EsaBadge from '@esa/ecology/esa-badge.astro';
import EsaPill from '@esa/ecology/esa-pill.astro';
import EsaIconLink from '@esa/ecology/esa-icon-link.astro';

interface NotifTrigger {
  name: string;
  detail: string;
  on: boolean;
}

interface Props {
  lead?: string;
  editHref?: string;
  /** Link copy — override where the entity noun is tenant-aliased (BCN-1283),
   *  e.g. "Edit recipients & triggers" on streamlined pages where Action reads
   *  "Requirement". */
  editLabel?: string;
  recipients: string[];
  triggers: NotifTrigger[];
}

const {
  lead = 'Sent to the assignee on each implementation.',
  editHref = '#data-catalog-action',
  editLabel = 'Edit recipients & triggers on the Action',
  recipients,
  triggers,
} = Astro.props;
---

<div class="bcn-notifications">
  <p class="bcn-notifications__lead">
    {lead}
    <EsaIconLink href={editHref} trailing="arrow-right" size="sm">{editLabel}</EsaIconLink>
  </p>

  <div class="bcn-notifications__field">
    <span class="bcn-notifications__label">Next notification</span>
    <span class="bcn-notifications__next"><EsaBadge dot variant="warning" /><span data-bcn-notif-due>—</span></span>
  </div>

  <div class="bcn-notifications__field">
    <span class="bcn-notifications__label">Additional recipients</span>
    <div class="bcn-notifications__recipients">
      {recipients.map((r) => <EsaPill label={r} removable={false} size="sm" />)}
    </div>
  </div>

  <div class="bcn-notifications__field">
    <span class="bcn-notifications__label">Triggers</span>
    <ul class="bcn-notifications__triggers">
      {triggers.map((t) => (
        <li class={`bcn-notifications__trigger ${t.on ? 'is-on' : 'is-off'}`}>
          <span class="bcn-notifications__trigger-name">{t.name}</span>
          <span class="bcn-notifications__trigger-detail">{t.detail}</span>
        </li>
      ))}
    </ul>
  </div>
</div>

<style>
  /* Notifications — quiet summary; parent owns outer spacing. */
  .bcn-notifications { display: flex; flex-direction: column; gap: var(--spacing-400); }
  .bcn-notifications__lead { margin: 0; font-size: 0.8125rem; line-height: 1.5; color: var(--color-text-secondary); }

  /* Field label — own class, copied from the dialog's .rd-kv__key sizing (decoupled). */
  .bcn-notifications__label { font-size: var(--form-font-size-md); font-weight: var(--font-weight-medium); color: var(--form-label-color); }

  .bcn-notifications__field { display: flex; flex-direction: column; gap: var(--spacing-200); }
  .bcn-notifications__next { display: inline-flex; align-items: center; gap: var(--spacing-200); font-size: 0.9375rem; font-weight: var(--font-weight-semibold); color: var(--color-text-primary); }
  .bcn-notifications__recipients { display: flex; flex-wrap: wrap; gap: var(--spacing-150); }

  .bcn-notifications__triggers { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--spacing-150); }
  .bcn-notifications__trigger { display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-300); padding: var(--spacing-250) var(--spacing-300); border: 1px solid var(--color-border); border-radius: var(--radius-200); background: var(--color-surface); }
  .bcn-notifications__trigger-name { font-size: 0.875rem; font-weight: var(--font-weight-medium); color: var(--color-text-primary); }
  .bcn-notifications__trigger-detail { display: inline-flex; align-items: center; gap: var(--spacing-150); font-size: 0.8125rem; color: var(--color-text-secondary); }
  .bcn-notifications__trigger-detail::before { content: ''; width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; background: var(--color-border-strong); }
  .bcn-notifications__trigger.is-on .bcn-notifications__trigger-detail::before { background: var(--color-success); }
  .bcn-notifications__trigger.is-off { opacity: 0.7; }
  .bcn-notifications__trigger.is-off .bcn-notifications__trigger-detail { color: var(--color-text-tertiary); }
</style>

// ── src/components/bcn/BcnEvidenceList.astro ──
---
// <BcnEvidenceList> — the Evidence-of-Compliance card list: a collapsible list of
// evidence records (Title / Notes / Tags / Files) plus the "Add New / Add Existing
// Evidence" action row. Each row is composition AROUND esa-card — the card chrome
// (border, radius, header band, body) is the lego; only the collapse behavior, the
// header row layout, and the dense action rail are ours.
//
// It does NOT own the slide-up sheet that wraps it (its header / download-all / close /
// drawer geometry stay in the host). For dynamic hosts, render the list then call
// setupEvidenceList(root, { onEdit }) to wire expand/file-list/edit/delete/star
// (see ./evidence-list.ts).
//
// bcn-lego-checked: esa-card IS the lego (one per row); the collapsible list, dense
// action rail, and esa-file-list population are composition with no single esa-*
// equivalent. Checked Ecology and Beacon. bcn-evidence-list is the reusable
// Evidence-of-Compliance list.
import EsaCard from '@esa/ecology/esa-card.astro';
import EsaButton from '@esa/ecology/esa-button.astro';
import EsaIcon from '@esa/ecology/esa-icon.astro';
import EsaIconButton from '@esa/ecology/esa-icon-button.astro';
import EsaPill from '@esa/ecology/esa-pill.astro';
import EsaBadge from '@esa/ecology/esa-badge.astro';

export interface EvidenceItem {
  id: string;
  title: string;
  notes: string;
  tags: string[];
  files: string[];
}

interface Props {
  items: EvidenceItem[];
}
const { items } = Astro.props;
---

<div class="bcn-evidence-list">
  <ul class="bcn-evidence-list__items">
    {items.map((e) => (
      <li
        class="bcn-evidence-card"
        id={e.id}
        data-title={e.title}
        data-notes={e.notes}
        data-tags={e.tags.join(',')}
        data-files={e.files.join(',')}
      >
        <EsaCard padding="none">
          <div slot="header" class="bcn-evidence-card__head">
            <span class="bcn-evidence-card__lead">
              <EsaIcon name="chevron-right" size="sm" />
              <span class="bcn-evidence-card__name">{e.title}</span>
            </span>
            <span class="bcn-evidence-card__actions">
              <EsaIconButton icon="star" label="Add to summary page" size="sm" />
              <EsaIconButton icon="download" label="Download all files as .zip" size="sm" />
              <EsaIconButton icon="pencil" label="Edit evidence" size="sm" />
              <EsaIconButton icon="trash-2" label="Delete evidence" size="sm" />
            </span>
          </div>
          <div class="bcn-evidence-card__fields" hidden>
            <div class="bcn-evidence-card__field">
              <span class="bcn-evidence-card__label">Notes</span>
              {e.notes ? <span class="bcn-evidence-card__text">{e.notes}</span> : <span class="bcn-evidence-card__text bcn-evidence-card__text--muted">None</span>}
            </div>
            {e.tags.length > 0 && (
              <div class="bcn-evidence-card__field">
                <span class="bcn-evidence-card__label">Tags</span>
                <div class="bcn-evidence-card__pills">{e.tags.map((t) => <EsaPill label={t} removable={false} size="sm" />)}</div>
              </div>
            )}
            <div class="bcn-evidence-card__field">
              <span class="bcn-evidence-card__label">Files <EsaBadge variant="secondary" size="sm" value={e.files.length} /></span>
              <!-- files (array) are set as a property by setupEvidenceList -->
              <esa-file-list class="bcn-evidence-card__files"></esa-file-list>
            </div>
          </div>
        </EsaCard>
      </li>
    ))}
  </ul>
  <div class="bcn-evidence-list__row-actions">
    <EsaButton color="primary" size="sm" icon="plus">Add New Evidence</EsaButton>
    <EsaButton color="ghost" appearance="outline" size="sm">Add Existing Evidence</EsaButton>
  </div>
</div>

<style>
  .bcn-evidence-list { display: flex; flex-direction: column; gap: var(--spacing-400); }
  .bcn-evidence-list__row-actions { display: flex; gap: var(--spacing-300); }

  /* ── Evidence cards — composition AROUND esa-card. The card chrome (border,
     radius, header band, body) is the lego; only the collapse behavior, the
     header row layout, and the dense action sizing are ours. ── */
  .bcn-evidence-list__items { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--spacing-300); }
  /* esa-card header has 0 horizontal padding under padding="none"; supply our own.
     Override the lego's 56px min-height for a denser list row. */
  .bcn-evidence-card :global(.esa-card__header) { min-height: 0; padding-block: var(--spacing-100); }
  /* No internal divider when collapsed (header border would float over empty body) */
  .bcn-evidence-card:not(.is-expanded) :global(.esa-card__header) { border-bottom: 0; }
  .bcn-evidence-card__head { display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-150); width: 100%; padding-inline: var(--spacing-200); }
  /* Clickable expand lead (chevron + title); actions sit outside it */
  .bcn-evidence-card__lead { flex: 1; min-width: 0; display: flex; align-items: center; gap: var(--spacing-150); padding: var(--spacing-150) 0; cursor: pointer; }
  .bcn-evidence-card__lead :global(.esa-icon) { flex-shrink: 0; color: var(--color-text-tertiary); transition: transform 150ms ease; }
  .bcn-evidence-card.is-expanded .bcn-evidence-card__lead :global(.esa-icon) { transform: rotate(90deg); }
  .bcn-evidence-card__name { min-width: 0; font-size: 0.8125rem; font-weight: var(--font-weight-semibold); color: var(--color-text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .bcn-evidence-card__actions { display: flex; align-items: center; gap: 1px; flex-shrink: 0; }
  /* Dense action buttons: shrink the esa-icon-button box + glyph */
  .bcn-evidence-card__actions :global(.esa-icon-button) { width: 26px; height: 26px; }
  .bcn-evidence-card__actions :global(.esa-icon) { width: 15px; height: 15px; }
  .bcn-evidence-card__actions :global(.bcn-evidence-card__star--on) { color: var(--color-accent); }
  .bcn-evidence-card__actions :global(.bcn-evidence-card__star--on svg) { fill: currentColor; }
  /* Collapsible body — [hidden] beats display rules here since it's the default flow */
  .bcn-evidence-card__fields[hidden] { display: none; }
  .bcn-evidence-card__fields { display: flex; flex-direction: column; gap: var(--spacing-300); padding: var(--spacing-300) var(--spacing-400) var(--spacing-400); }
  .bcn-evidence-card__field { display: flex; flex-direction: column; gap: var(--spacing-100); }
  .bcn-evidence-card__label { display: inline-flex; align-items: center; gap: var(--spacing-150); font-size: 0.8125rem; font-weight: var(--font-weight-semibold); color: var(--color-text-primary); }
  .bcn-evidence-card__text { font-size: 0.8125rem; line-height: 1.5; color: var(--color-text-secondary); }
  .bcn-evidence-card__text--muted { color: var(--color-text-tertiary); font-style: italic; }
  .bcn-evidence-card__pills { display: flex; flex-wrap: wrap; gap: var(--spacing-150); }

  /* File rows use the esa-file-list lego (own styling). */
</style>

// ── src/data/tracker-fixture.ts ──
// Compliance-tracking fixture for the Action Tracker prototype.
//
// Basis: the real 3600 Alameda Avenue Project FEIR requirement export (130 rows,
// src/data/requirements.csv → generated, do not hand-edit). Columns mirror the
// live Progress Report view: Source Document · Commitment ID · Requirement Name ·
// Requirement Text · Requirement Type · Status · Comment · Action · Milestone(s)
// · Resource Category.
//
// The CSV export carries Name / Commitment / Source Document / Requirement Type /
// Resource Category / Phases. The tracking columns the export does NOT include
// (Status, Comment, Action, Milestone, Requirement Text) are synthesized
// DETERMINISTICALLY by the generator so the grid reads like the app without
// fabricating per-row legal text by hand.
//
// Regenerate: `node /tmp/gen-tracker.mjs` (generator kept out of the repo).

export type ActionStatus = 'not-started' | 'in-progress' | 'completed' | 'not-applicable';

export type Phase = 'Pre-Construction' | 'Construction' | 'Post-Construction';

export interface ActionRow {
  /** Requirement Name (links to the requirement/action). */
  name: string;
  /** Commitment ID, e.g. "MM-BIO-1". */
  commitment: string;
  /** Parent source document. */
  sourceDoc: string;
  /** Representative requirement text (synthesized; see header). */
  requirementText: string;
  /** Requirement Type, e.g. "Plan", "Monitoring", "Other". */
  type: string;
  status: ActionStatus;
  /** Comment count. */
  comments: number;
  /** Linked action label ('' when none). */
  action: string;
  /** Milestone(s) ('' when none). */
  milestones: string;
  resourceCategory: string;
  /** Lifecycle phase (from CSV; used for grouping, not a Progress Report column). */
  phase: string;
  /** Action-List membership (prototype stub — assigned by type; see listForType). */
  list: string;
  /** Responsible Party (protoAction — read-only reference in the dialog). */
  responsibleParty: string;
  /** Implementation assignee (editable override). */
  assignee: string;
  /** One-time due date (YYYY-MM-DD; implementation override). */
  dueDate: string;
  /** Expected Evidence of Compliance (protoAction — read-only reference). */
  expectedEvidence: string;
}

// Hex literals mirror the spoke's --bcn-status-* tokens (theme-beacon.css). AG Grid's
// cell renderer needs literal strings (it can't read CSS vars at config time), so these
// are kept in sync with the tokens by value — the dialog's BcnStatusSelect reads the same
// tokens via CSS. Not-applicable has no status token; it's a neutral muted gray.
export const STATUS_META: Record<ActionStatus, { label: string; hex: string }> = {
  'not-started': { label: 'Not Started', hex: '#bdbdbd' }, // --bcn-status-not-started (gray-300)
  'in-progress': { label: 'In Progress', hex: '#f59e0b' }, // --bcn-status-in-progress
  completed: { label: 'Completed', hex: '#22c55e' }, // --bcn-status-completed
  'not-applicable': { label: 'Not Applicable', hex: '#b8bcc2' }, // muted gray (no status token)
};

/** Kanban/board order — Not Applicable is folded off the board by default. */
export const STATUS_ORDER: ActionStatus[] = ['not-started', 'in-progress', 'completed'];

export const PROJECT_NAME = '3600 Alameda Avenue Project';
export const SOURCE_DOCUMENT = '3600 Alameda Avenue Project FEIR';

const rawActions: Omit<ActionRow, 'list'>[] = [
  { name: 'Develop WEAP Training', commitment: 'MM-BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Training & Education', status: 'not-started', comments: 0, action: 'Develop WEAP Training', milestones: 'Demolition', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', responsibleParty: 'Project Biologist', assignee: 'Maria Chen', dueDate: '2026-01-01', expectedEvidence: 'Survey report (PDF)', requirementText: 'All project personnel shall receive develop WEAP Training prior to beginning work on site, with attendance documented for the compliance record.' },
  { name: 'Provide WEAP Training to all Project personnel', commitment: 'MM-BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Training & Education', status: 'completed', comments: 1, action: 'Provide WEAP Training to all', milestones: '', resourceCategory: 'Biological Resources', phase: 'Construction', responsibleParty: 'QSP / Inspector', assignee: 'Unassigned', dueDate: '2027-08-12', expectedEvidence: 'Monitoring log', requirementText: 'All project personnel shall receive provide WEAP Training to all Project personnel prior to beginning work on site, with attendance documented for the compliance record.' },
  { name: 'If bird nests are found, establish no-disturbance buffers zones', commitment: 'MM-BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Establish no-disturbance buffers zones', milestones: '', resourceCategory: 'Biological Resources', phase: 'Construction', responsibleParty: 'Cultural Resources Lead', assignee: 'Priya Patel', dueDate: '2026-03-23', expectedEvidence: 'Training sign-in sheet', requirementText: 'Requirement: If bird nests are found, establish no-disturbance buffers zones, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'If work must occur within established no-disturbance buffer zones', commitment: 'MM-BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 3, action: 'If work must occur within', milestones: '', resourceCategory: 'Biological Resources', phase: 'Construction', responsibleParty: 'Safety Officer', assignee: 'Nadia Hassan', dueDate: '2027-10-07', expectedEvidence: 'Inspection checklist', requirementText: 'Requirement: If work must occur within established no-disturbance buffer zones, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Pre-construction survey for nesting raptors and other migratory birds during nesting season', commitment: 'MM-BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Survey', status: 'not-started', comments: 1, action: '', milestones: 'Building Permit', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', responsibleParty: 'Environmental Lead', assignee: 'Sarah Kim', dueDate: '2026-05-18', expectedEvidence: 'Survey report (PDF)', requirementText: 'Prior to ground-disturbing activities, a qualified biologist shall complete pre-construction survey for nesting raptors and other migratory birds during nesting season within the project area and submit findings to the City.' },
  { name: 'Report of findings for construction within any no-disturbance buffer zone', commitment: 'MM-BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Reporting', status: 'in-progress', comments: 0, action: 'Report of findings for construction', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', responsibleParty: 'Air Quality Lead', assignee: 'James Okafor', dueDate: '2027-12-02', expectedEvidence: 'Monitoring log', requirementText: 'The applicant shall prepare report of findings for construction within any no-disturbance buffer zone and submit it to the lead agency within the timeframe specified in the FEIR mitigation measure.' },
  { name: ' Pre-construction habitat assessment of the Project area to characterize potential bat habitat and identify potentially active roost sites', commitment: 'MM-BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Survey', status: 'not-started', comments: 1, action: 'Pre-construction habitat assessment of the', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', responsibleParty: 'Traffic Engineer', assignee: 'Tom Alvarez', dueDate: '2026-07-13', expectedEvidence: 'Training sign-in sheet', requirementText: 'Prior to ground-disturbing activities, a qualified biologist shall complete  Pre-construction habitat assessment of the Project area to characterize potential bat habitat and identify potentially active roost sites within the project area and submit findings to the City.' },
  { name: 'If active bat roosts or evidence of roosting is identified during pre-construction surveys, establish no-disturbance buffer', commitment: 'MM-BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Construction', responsibleParty: 'Construction Manager', assignee: 'Daniel Reyes', dueDate: '2027-02-24', expectedEvidence: 'Inspection checklist', requirementText: 'Requirement: If active bat roosts or evidence of roosting is identified during pre-construction surveys, establish no-disturbance buffer, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Measures if potential bat roosting habitat or potentially active bat roosts are identified during the habitat assessment', commitment: 'MM-BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 3, action: 'Measures if potential bat roosting', milestones: 'Final Inspection', resourceCategory: 'Biological Resources', phase: 'Construction', responsibleParty: 'Acoustical Consultant', assignee: 'Maria Chen', dueDate: '2026-09-08', expectedEvidence: 'Survey report (PDF)', requirementText: 'Requirement: Measures if potential bat roosting habitat or potentially active bat roosts are identified during the habitat assessment, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Pre-construction survey if avoidance or bat maternity roosting season and winter torpor is infeasible', commitment: 'MM-BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Survey', status: 'not-started', comments: 1, action: 'Pre-construction survey if avoidance or', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', responsibleParty: 'Hydrogeologist', assignee: 'Unassigned', dueDate: '2027-04-19', expectedEvidence: 'Monitoring log', requirementText: 'Prior to ground-disturbing activities, a qualified biologist shall complete pre-construction survey if avoidance or bat maternity roosting season and winter torpor is infeasible within the project area and submit findings to the City.' },
  { name: 'Blight', commitment: 'SCA AES-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Aesthetics', phase: 'Post-Construction', responsibleParty: 'Project Biologist', assignee: 'Priya Patel', dueDate: '2026-11-03', expectedEvidence: 'Training sign-in sheet', requirementText: 'Requirement: Blight, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Best management practices for graffiti', commitment: 'SCA AES-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Avoidance & BMPs', status: 'completed', comments: 1, action: 'Best management practices for graffiti', milestones: '', resourceCategory: 'Aesthetics', phase: 'Construction', responsibleParty: 'QSP / Inspector', assignee: 'Nadia Hassan', dueDate: '2027-06-14', expectedEvidence: 'Inspection checklist', requirementText: 'The contractor shall implement best management practices for graffiti as a best management practice throughout construction and maintain it until the activity is complete.' },
  { name: 'Graffiti removal', commitment: 'SCA AES-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Graffiti removal', milestones: 'Demolition', resourceCategory: 'Aesthetics', phase: 'Construction', responsibleParty: 'Cultural Resources Lead', assignee: 'Sarah Kim', dueDate: '2026-01-25', expectedEvidence: 'Survey report (PDF)', requirementText: 'Requirement: Graffiti removal, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Landscape Installation', commitment: 'SCA AES-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Aesthetics', phase: 'Construction', responsibleParty: 'Safety Officer', assignee: 'James Okafor', dueDate: '2027-08-09', expectedEvidence: 'Monitoring log', requirementText: 'Requirement: Landscape Installation, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Landscape Maintenance', commitment: 'SCA AES-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Aesthetics', phase: 'Post-Construction', responsibleParty: 'Environmental Lead', assignee: 'Tom Alvarez', dueDate: '2026-03-20', expectedEvidence: 'Training sign-in sheet', requirementText: 'Requirement: Landscape Maintenance, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Landscape Plan', commitment: 'SCA AES-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Landscape Plan', milestones: '', resourceCategory: 'Aesthetics', phase: 'Pre-Construction', responsibleParty: 'Air Quality Lead', assignee: 'Daniel Reyes', dueDate: '2027-10-04', expectedEvidence: 'Inspection checklist', requirementText: 'The project applicant shall prepare and implement a Landscape Plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Exterior lighting fixtures', commitment: 'SCA AES-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 1, action: '', milestones: 'Building Permit', resourceCategory: 'Aesthetics', phase: 'Pre-Construction', responsibleParty: 'Traffic Engineer', assignee: 'Maria Chen', dueDate: '2026-05-15', expectedEvidence: 'Survey report (PDF)', requirementText: 'Project design shall incorporate exterior lighting fixtures consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Dust control measures - complaints', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Construction Manager', assignee: 'Unassigned', dueDate: '2027-12-26', expectedEvidence: 'Monitoring log', requirementText: 'A qualified specialist shall conduct dust control measures - complaints and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - erosion', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'completed', comments: 3, action: 'Dust control measures - erosion', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Acoustical Consultant', assignee: 'Priya Patel', dueDate: '2026-07-10', expectedEvidence: 'Training sign-in sheet', requirementText: 'A qualified specialist shall conduct dust control measures - erosion and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - paving', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Hydrogeologist', assignee: 'Nadia Hassan', dueDate: '2027-02-21', expectedEvidence: 'Inspection checklist', requirementText: 'A qualified specialist shall conduct dust control measures - paving and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - simultaneous activities', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: '', milestones: 'Final Inspection', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Project Biologist', assignee: 'Sarah Kim', dueDate: '2026-09-05', expectedEvidence: 'Survey report (PDF)', requirementText: 'A qualified specialist shall conduct dust control measures - simultaneous activities and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - street sweeping', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'completed', comments: 1, action: 'Dust control measures - street', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'QSP / Inspector', assignee: 'James Okafor', dueDate: '2027-04-16', expectedEvidence: 'Monitoring log', requirementText: 'A qualified specialist shall conduct dust control measures - street sweeping and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - truck cover', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'in-progress', comments: 0, action: 'Dust control measures - truck', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Cultural Resources Lead', assignee: 'Tom Alvarez', dueDate: '2026-11-27', expectedEvidence: 'Training sign-in sheet', requirementText: 'A qualified specialist shall conduct dust control measures - truck cover and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - unpaved road access', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Safety Officer', assignee: 'Daniel Reyes', dueDate: '2027-06-11', expectedEvidence: 'Inspection checklist', requirementText: 'A qualified specialist shall conduct dust control measures - unpaved road access and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - vegetative ground cover', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: 'Dust control measures - vegetative', milestones: 'Demolition', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Environmental Lead', assignee: 'Maria Chen', dueDate: '2026-01-22', expectedEvidence: 'Survey report (PDF)', requirementText: 'A qualified specialist shall conduct dust control measures - vegetative ground cover and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - vehicle speeds', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'in-progress', comments: 0, action: 'Dust control measures - vehicle', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Air Quality Lead', assignee: 'Unassigned', dueDate: '2027-08-06', expectedEvidence: 'Monitoring log', requirementText: 'A qualified specialist shall conduct dust control measures - vehicle speeds and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - watering', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Traffic Engineer', assignee: 'Priya Patel', dueDate: '2026-03-17', expectedEvidence: 'Training sign-in sheet', requirementText: 'A qualified specialist shall conduct dust control measures - watering and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - wind', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: 'Dust control measures - wind', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Construction Manager', assignee: 'Nadia Hassan', dueDate: '2027-10-01', expectedEvidence: 'Inspection checklist', requirementText: 'A qualified specialist shall conduct dust control measures - wind and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Basic control measures for criteria air pollutants - construction equipment', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'completed', comments: 3, action: 'Basic control measures for criteria', milestones: 'Building Permit', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Acoustical Consultant', assignee: 'Sarah Kim', dueDate: '2026-05-12', expectedEvidence: 'Survey report (PDF)', requirementText: 'A qualified specialist shall conduct basic control measures for criteria air pollutants - construction equipment and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Basic control measures for criteria air pollutants - idling time', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Hydrogeologist', assignee: 'James Okafor', dueDate: '2027-12-23', expectedEvidence: 'Monitoring log', requirementText: 'A qualified specialist shall conduct basic control measures for criteria air pollutants - idling time and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Basic control measures for criteria air pollutants - portable equipment', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: 'Basic control measures for criteria', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Project Biologist', assignee: 'Tom Alvarez', dueDate: '2026-07-07', expectedEvidence: 'Training sign-in sheet', requirementText: 'A qualified specialist shall conduct basic control measures for criteria air pollutants - portable equipment and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Basic control measures for criteria air pollutants - VOC coating', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'completed', comments: 1, action: 'Basic control measures for criteria', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'QSP / Inspector', assignee: 'Daniel Reyes', dueDate: '2027-02-18', expectedEvidence: 'Inspection checklist', requirementText: 'A qualified specialist shall conduct basic control measures for criteria air pollutants - VOC coating and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Construction emissions minimization plan', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'in-progress', comments: 0, action: 'Construction emissions minimization plan', milestones: 'Final Inspection', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Cultural Resources Lead', assignee: 'Maria Chen', dueDate: '2026-09-02', expectedEvidence: 'Survey report (PDF)', requirementText: 'A qualified specialist shall conduct construction emissions minimization plan and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Enhanced controls - construction', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 3, action: 'Enhanced controls - construction', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Safety Officer', assignee: 'Unassigned', dueDate: '2027-04-13', expectedEvidence: 'Monitoring log', requirementText: 'A qualified specialist shall conduct enhanced controls - construction and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Enhanced controls - operation', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Post-Construction', responsibleParty: 'Environmental Lead', assignee: 'Priya Patel', dueDate: '2026-11-24', expectedEvidence: 'Training sign-in sheet', requirementText: 'Requirement: Enhanced controls - operation, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction emissions minimization plan', commitment: 'SCA AIR-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Construction emissions minimization plan', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Air Quality Lead', assignee: 'Nadia Hassan', dueDate: '2027-06-08', expectedEvidence: 'Inspection checklist', requirementText: 'The project applicant shall prepare and implement a Construction emissions minimization plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Diesel particulate matter reduction measures', commitment: 'SCA AIR-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: 'Diesel particulate matter reduction measures', milestones: 'Demolition', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Traffic Engineer', assignee: 'Sarah Kim', dueDate: '2026-01-19', expectedEvidence: 'Survey report (PDF)', requirementText: 'A qualified specialist shall conduct diesel particulate matter reduction measures and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'On-site stationary sources of air pollution', commitment: 'SCA AIR-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Pre-Construction', responsibleParty: 'Construction Manager', assignee: 'James Okafor', dueDate: '2027-08-03', expectedEvidence: 'Monitoring log', requirementText: 'Project design shall incorporate on-site stationary sources of air pollution consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Diesel truck emission reduction measures', commitment: 'SCA AIR-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'completed', comments: 3, action: 'Diesel truck emission reduction measures', milestones: '', resourceCategory: 'Air Quality', phase: 'Pre-Construction', responsibleParty: 'Acoustical Consultant', assignee: 'Tom Alvarez', dueDate: '2026-03-14', expectedEvidence: 'Training sign-in sheet', requirementText: 'Project design shall incorporate diesel truck emission reduction measures consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Truck fleet emission standards', commitment: 'SCA AIR-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: 'Truck fleet emission standards', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'Hydrogeologist', assignee: 'Daniel Reyes', dueDate: '2027-10-25', expectedEvidence: 'Inspection checklist', requirementText: 'Requirement: Truck fleet emission standards, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Truck loading docks', commitment: 'SCA AIR-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 0, action: '', milestones: 'Building Permit', resourceCategory: 'Air Quality', phase: 'Pre-Construction', responsibleParty: 'Project Biologist', assignee: 'Maria Chen', dueDate: '2026-05-09', expectedEvidence: 'Survey report (PDF)', requirementText: 'Project design shall incorporate truck loading docks consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Asbestos in structures', commitment: 'SCA AIR-6', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 1, action: 'Asbestos in structures', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', responsibleParty: 'QSP / Inspector', assignee: 'Unassigned', dueDate: '2027-12-20', expectedEvidence: 'Monitoring log', requirementText: 'Requirement: Asbestos in structures, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Bird collision reduction plan - antennas', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Bird collision reduction plan -', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', responsibleParty: 'Cultural Resources Lead', assignee: 'Priya Patel', dueDate: '2026-07-04', expectedEvidence: 'Training sign-in sheet', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - antennas prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - bird-friendly attractants', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', responsibleParty: 'Safety Officer', assignee: 'Nadia Hassan', dueDate: '2027-02-15', expectedEvidence: 'Inspection checklist', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - bird-friendly attractants prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - bird-friendly glazing treatments', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: 'Final Inspection', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', responsibleParty: 'Environmental Lead', assignee: 'Sarah Kim', dueDate: '2026-09-26', expectedEvidence: 'Survey report (PDF)', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - bird-friendly glazing treatments prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - building operation and management manual', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Bird collision reduction plan -', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', responsibleParty: 'Air Quality Lead', assignee: 'James Okafor', dueDate: '2027-04-10', expectedEvidence: 'Monitoring log', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - building operation and management manual prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - light pollution', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', responsibleParty: 'Traffic Engineer', assignee: 'Tom Alvarez', dueDate: '2026-11-21', expectedEvidence: 'Training sign-in sheet', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - light pollution prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - lighting', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', responsibleParty: 'Construction Manager', assignee: 'Daniel Reyes', dueDate: '2027-06-05', expectedEvidence: 'Inspection checklist', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - lighting prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - mirrors', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'completed', comments: 3, action: 'Bird collision reduction plan -', milestones: 'Demolition', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', responsibleParty: 'Acoustical Consultant', assignee: 'Maria Chen', dueDate: '2026-01-16', expectedEvidence: 'Survey report (PDF)', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - mirrors prior to the affected project phase, subject to City review and approval.' },
  { name: 'Pre-removal survey', commitment: 'SCA BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Survey', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', responsibleParty: 'Hydrogeologist', assignee: 'Unassigned', dueDate: '2027-08-27', expectedEvidence: 'Monitoring log', requirementText: 'Prior to ground-disturbing activities, a qualified biologist shall complete pre-removal survey within the project area and submit findings to the City.' },
  { name: 'Tree removal during breeding season', commitment: 'SCA BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', responsibleParty: 'Project Biologist', assignee: 'Priya Patel', dueDate: '2026-03-11', expectedEvidence: 'Training sign-in sheet', requirementText: 'Requirement: Tree removal during breeding season, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Tree permit', commitment: 'SCA BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'completed', comments: 1, action: 'Tree permit', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', responsibleParty: 'QSP / Inspector', assignee: 'Nadia Hassan', dueDate: '2027-10-22', expectedEvidence: 'Inspection checklist', requirementText: 'The applicant shall obtain tree permit from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Tree protection', commitment: 'SCA BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Tree protection', milestones: 'Building Permit', resourceCategory: 'Biological Resources', phase: 'Construction', responsibleParty: 'Cultural Resources Lead', assignee: 'Sarah Kim', dueDate: '2026-05-06', expectedEvidence: 'Survey report (PDF)', requirementText: 'Requirement: Tree protection, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Tree replacement', commitment: 'SCA BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Construction', responsibleParty: 'Safety Officer', assignee: 'James Okafor', dueDate: '2027-12-17', expectedEvidence: 'Monitoring log', requirementText: 'Requirement: Tree replacement, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Data recovery of archaeological resources', commitment: 'SCA CUL-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: 'Data recovery of archaeological resources', milestones: '', resourceCategory: 'Cultural Resources', phase: 'Construction', responsibleParty: 'Environmental Lead', assignee: 'Tom Alvarez', dueDate: '2026-07-01', expectedEvidence: 'Training sign-in sheet', requirementText: 'The project applicant shall prepare and implement a Data recovery of archaeological resources prior to the affected project phase, subject to City review and approval.' },
  { name: 'Discovery of cultural resources', commitment: 'SCA CUL-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Discovery of cultural resources', milestones: '', resourceCategory: 'Cultural Resources', phase: 'Construction', responsibleParty: 'Air Quality Lead', assignee: 'Daniel Reyes', dueDate: '2027-02-12', expectedEvidence: 'Inspection checklist', requirementText: 'Requirement: Discovery of cultural resources, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Human remains', commitment: 'SCA CUL-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: 'Final Inspection', resourceCategory: 'Cultural Resources', phase: 'Construction', responsibleParty: 'Traffic Engineer', assignee: 'Maria Chen', dueDate: '2026-09-23', expectedEvidence: 'Survey report (PDF)', requirementText: 'Requirement: Human remains, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction related permits', commitment: 'SCA GEO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'not-started', comments: 0, action: 'Construction related permits', milestones: '', resourceCategory: 'Geology, Soils, and Paleontological Resources', phase: 'Pre-Construction', responsibleParty: 'Construction Manager', assignee: 'Unassigned', dueDate: '2027-04-07', expectedEvidence: 'Monitoring log', requirementText: 'The applicant shall obtain construction related permits from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Geotechnical report', commitment: 'SCA GEO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Reporting', status: 'completed', comments: 3, action: 'Geotechnical report', milestones: '', resourceCategory: 'Geology, Soils, and Paleontological Resources', phase: 'Pre-Construction', responsibleParty: 'Acoustical Consultant', assignee: 'Priya Patel', dueDate: '2026-11-18', expectedEvidence: 'Training sign-in sheet', requirementText: 'The applicant shall prepare geotechnical report and submit it to the lead agency within the timeframe specified in the FEIR mitigation measure.' },
  { name: 'Annual report', commitment: 'SCA GHG-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Greenhouse Gas Emissions', phase: 'Post-Construction', responsibleParty: 'Hydrogeologist', assignee: 'Nadia Hassan', dueDate: '2027-06-02', expectedEvidence: 'Inspection checklist', requirementText: 'The project applicant shall prepare and implement a Annual report prior to the affected project phase, subject to City review and approval.' },
  { name: 'Corrective procedure', commitment: 'SCA GHG-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 0, action: 'Corrective procedure', milestones: 'Demolition', resourceCategory: 'Greenhouse Gas Emissions', phase: 'Post-Construction', responsibleParty: 'Project Biologist', assignee: 'Sarah Kim', dueDate: '2026-01-13', expectedEvidence: 'Survey report (PDF)', requirementText: 'The project applicant shall prepare and implement a Corrective procedure prior to the affected project phase, subject to City review and approval.' },
  { name: 'Greenhouse gas reduction plan', commitment: 'SCA GHG-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'completed', comments: 1, action: 'Greenhouse gas reduction plan', milestones: '', resourceCategory: 'Greenhouse Gas Emissions', phase: 'Pre-Construction', responsibleParty: 'QSP / Inspector', assignee: 'James Okafor', dueDate: '2027-08-24', expectedEvidence: 'Monitoring log', requirementText: 'The project applicant shall prepare and implement a Greenhouse gas reduction plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Greenhouse gas reduction plan implementation after construction', commitment: 'SCA GHG-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Greenhouse gas reduction plan implementation', milestones: '', resourceCategory: 'Greenhouse Gas Emissions', phase: 'Post-Construction', responsibleParty: 'Cultural Resources Lead', assignee: 'Tom Alvarez', dueDate: '2026-03-08', expectedEvidence: 'Training sign-in sheet', requirementText: 'The project applicant shall prepare and implement a Greenhouse gas reduction plan implementation after construction prior to the affected project phase, subject to City review and approval.' },
  { name: 'Greenhouse gas reduction plan implementation during construction', commitment: 'SCA GHG-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 3, action: 'Greenhouse gas reduction plan implementation', milestones: '', resourceCategory: 'Greenhouse Gas Emissions', phase: 'Construction', responsibleParty: 'Safety Officer', assignee: 'Daniel Reyes', dueDate: '2027-10-19', expectedEvidence: 'Inspection checklist', requirementText: 'The project applicant shall prepare and implement a Greenhouse gas reduction plan implementation during construction prior to the affected project phase, subject to City review and approval.' },
  { name: 'BMPs - chemical products', commitment: 'SCA HAZ-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: '', milestones: 'Building Permit', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', responsibleParty: 'Environmental Lead', assignee: 'Maria Chen', dueDate: '2026-05-03', expectedEvidence: 'Survey report (PDF)', requirementText: 'A qualified specialist shall conduct bMPs - chemical products and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'BMPs - construction equipment', commitment: 'SCA HAZ-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'in-progress', comments: 0, action: 'BMPs - construction equipment', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', responsibleParty: 'Air Quality Lead', assignee: 'Unassigned', dueDate: '2027-12-14', expectedEvidence: 'Monitoring log', requirementText: 'A qualified specialist shall conduct bMPs - construction equipment and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'BMPs - contamination', commitment: 'SCA HAZ-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: 'BMPs - contamination', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', responsibleParty: 'Traffic Engineer', assignee: 'Priya Patel', dueDate: '2026-07-25', expectedEvidence: 'Training sign-in sheet', requirementText: 'A qualified specialist shall conduct bMPs - contamination and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'BMPs - lead', commitment: 'SCA HAZ-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', responsibleParty: 'Construction Manager', assignee: 'Nadia Hassan', dueDate: '2027-02-09', expectedEvidence: 'Inspection checklist', requirementText: 'A qualified specialist shall conduct bMPs - lead and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'BMPs - groundwater', commitment: 'SCA HAZ-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'completed', comments: 3, action: 'BMPs - groundwater', milestones: 'Final Inspection', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', responsibleParty: 'Acoustical Consultant', assignee: 'Sarah Kim', dueDate: '2026-09-20', expectedEvidence: 'Survey report (PDF)', requirementText: 'A qualified specialist shall conduct bMPs - groundwater and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'BMPs - soils', commitment: 'SCA HAZ-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: 'BMPs - soils', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', responsibleParty: 'Hydrogeologist', assignee: 'James Okafor', dueDate: '2027-04-04', expectedEvidence: 'Monitoring log', requirementText: 'A qualified specialist shall conduct bMPs - soils and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Environmental site assessment', commitment: 'SCA HAZ-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Reporting', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Pre-Construction', responsibleParty: 'Project Biologist', assignee: 'Tom Alvarez', dueDate: '2026-11-15', expectedEvidence: 'Training sign-in sheet', requirementText: 'The applicant shall prepare environmental site assessment and submit it to the lead agency within the timeframe specified in the FEIR mitigation measure.' },
  { name: 'Hazardous building materials assessment', commitment: 'SCA HAZ-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 1, action: 'Hazardous building materials assessment', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Pre-Construction', responsibleParty: 'QSP / Inspector', assignee: 'Daniel Reyes', dueDate: '2027-06-26', expectedEvidence: 'Inspection checklist', requirementText: 'Requirement: Hazardous building materials assessment, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Health and safety plan', commitment: 'SCA HAZ-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Health and safety plan', milestones: 'Demolition', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Pre-Construction', responsibleParty: 'Cultural Resources Lead', assignee: 'Maria Chen', dueDate: '2026-01-10', expectedEvidence: 'Survey report (PDF)', requirementText: 'The project applicant shall prepare and implement a Health and safety plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Hazardous materials business plan', commitment: 'SCA HAZ-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Post-Construction', responsibleParty: 'Safety Officer', assignee: 'Unassigned', dueDate: '2027-08-21', expectedEvidence: 'Monitoring log', requirementText: 'The project applicant shall prepare and implement a Hazardous materials business plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'State construction general permit', commitment: 'SCA HYD-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Pre-Construction', responsibleParty: 'Environmental Lead', assignee: 'Priya Patel', dueDate: '2026-03-05', expectedEvidence: 'Training sign-in sheet', requirementText: 'The applicant shall obtain state construction general permit from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Maintenance agreement', commitment: 'SCA HYD-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'in-progress', comments: 0, action: 'Maintenance agreement', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Post-Construction', responsibleParty: 'Air Quality Lead', assignee: 'Nadia Hassan', dueDate: '2027-10-16', expectedEvidence: 'Inspection checklist', requirementText: 'The applicant shall obtain maintenance agreement from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Post-construction stormwater management plan', commitment: 'SCA HYD-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: 'Building Permit', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Post-Construction', responsibleParty: 'Traffic Engineer', assignee: 'Sarah Kim', dueDate: '2026-05-27', expectedEvidence: 'Survey report (PDF)', requirementText: 'The project applicant shall prepare and implement a Post-construction stormwater management plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Vegetation management after construction', commitment: 'SCA HYD-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Post-Construction', responsibleParty: 'Construction Manager', assignee: 'James Okafor', dueDate: '2027-12-11', expectedEvidence: 'Monitoring log', requirementText: 'Requirement: Vegetation management after construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Vegetation management during construction', commitment: 'SCA HYD-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 3, action: 'Vegetation management during construction', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Construction', responsibleParty: 'Acoustical Consultant', assignee: 'Tom Alvarez', dueDate: '2026-07-22', expectedEvidence: 'Training sign-in sheet', requirementText: 'Requirement: Vegetation management during construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Vegetation management pre-construction', commitment: 'SCA HYD-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Pre-Construction', responsibleParty: 'Hydrogeologist', assignee: 'Daniel Reyes', dueDate: '2027-02-06', expectedEvidence: 'Inspection checklist', requirementText: 'Requirement: Vegetation management pre-construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction BMPs', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: '', milestones: 'Final Inspection', resourceCategory: 'Hydrology and Water Quality', phase: 'Construction', responsibleParty: 'Project Biologist', assignee: 'Maria Chen', dueDate: '2026-09-17', expectedEvidence: 'Survey report (PDF)', requirementText: 'A qualified specialist shall conduct construction BMPs and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Creek landscaping', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'completed', comments: 1, action: 'Creek landscaping', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Pre-Construction', responsibleParty: 'QSP / Inspector', assignee: 'Unassigned', dueDate: '2027-04-01', expectedEvidence: 'Monitoring log', requirementText: 'The project applicant shall prepare and implement a Creek landscaping prior to the affected project phase, subject to City review and approval.' },
  { name: 'Creek protection plan', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Creek protection plan', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Pre-Construction', responsibleParty: 'Cultural Resources Lead', assignee: 'Priya Patel', dueDate: '2026-11-12', expectedEvidence: 'Training sign-in sheet', requirementText: 'The project applicant shall prepare and implement a Creek protection plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Creek protection plan implementation - after construction', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Post-Construction', responsibleParty: 'Safety Officer', assignee: 'Nadia Hassan', dueDate: '2027-06-23', expectedEvidence: 'Inspection checklist', requirementText: 'The project applicant shall prepare and implement a Creek protection plan implementation - after construction prior to the affected project phase, subject to City review and approval.' },
  { name: 'Creek protection plan implementation - during construction', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: 'Creek protection plan implementation -', milestones: 'Demolition', resourceCategory: 'Hydrology and Water Quality', phase: 'Construction', responsibleParty: 'Environmental Lead', assignee: 'Sarah Kim', dueDate: '2026-01-07', expectedEvidence: 'Survey report (PDF)', requirementText: 'The project applicant shall prepare and implement a Creek protection plan implementation - during construction prior to the affected project phase, subject to City review and approval.' },
  { name: 'Post construction BMPs', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Avoidance & BMPs', status: 'in-progress', comments: 0, action: 'Post construction BMPs', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Post-Construction', responsibleParty: 'Air Quality Lead', assignee: 'James Okafor', dueDate: '2027-08-18', expectedEvidence: 'Monitoring log', requirementText: 'The contractor shall implement post construction BMPs as a best management practice throughout construction and maintain it until the activity is complete.' },
  { name: 'BCDC approval', commitment: 'SCA HYD-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Pre-Construction', responsibleParty: 'Traffic Engineer', assignee: 'Tom Alvarez', dueDate: '2026-03-02', expectedEvidence: 'Training sign-in sheet', requirementText: 'The applicant shall obtain bCDC approval from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Construction activity outside of the days and hours restrictions', commitment: 'SCA NOI-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: 'Construction activity outside of the', milestones: '', resourceCategory: 'Noise', phase: 'Construction', responsibleParty: 'Construction Manager', assignee: 'Daniel Reyes', dueDate: '2027-10-13', expectedEvidence: 'Inspection checklist', requirementText: 'Requirement: Construction activity outside of the days and hours restrictions, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction hours - Saturday', commitment: 'SCA NOI-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 3, action: 'Construction hours - Saturday', milestones: 'Building Permit', resourceCategory: 'Noise', phase: 'Construction', responsibleParty: 'Acoustical Consultant', assignee: 'Maria Chen', dueDate: '2026-05-24', expectedEvidence: 'Survey report (PDF)', requirementText: 'Requirement: Construction hours - Saturday, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction hours - Sunday and holidays', commitment: 'SCA NOI-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Noise', phase: 'Construction', responsibleParty: 'Hydrogeologist', assignee: 'Unassigned', dueDate: '2027-12-08', expectedEvidence: 'Monitoring log', requirementText: 'Requirement: Construction hours - Sunday and holidays, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction hours - weekdays', commitment: 'SCA NOI-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: 'Construction hours - weekdays', milestones: '', resourceCategory: 'Noise', phase: 'Construction', responsibleParty: 'Project Biologist', assignee: 'Priya Patel', dueDate: '2026-07-19', expectedEvidence: 'Training sign-in sheet', requirementText: 'Requirement: Construction hours - weekdays, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise reduction measures - construction', commitment: 'SCA NOI-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 1, action: 'Noise reduction measures - construction', milestones: '', resourceCategory: 'Noise', phase: 'Construction', responsibleParty: 'QSP / Inspector', assignee: 'Nadia Hassan', dueDate: '2027-02-03', expectedEvidence: 'Inspection checklist', requirementText: 'Requirement: Noise reduction measures - construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise reduction measures - equipment and trucks', commitment: 'SCA NOI-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Noise reduction measures - equipment', milestones: 'Final Inspection', resourceCategory: 'Noise', phase: 'Construction', responsibleParty: 'Cultural Resources Lead', assignee: 'Sarah Kim', dueDate: '2026-09-14', expectedEvidence: 'Survey report (PDF)', requirementText: 'Requirement: Noise reduction measures - equipment and trucks, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise reduction measures - impact tools', commitment: 'SCA NOI-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 3, action: 'Noise reduction measures - impact', milestones: '', resourceCategory: 'Noise', phase: 'Construction', responsibleParty: 'Safety Officer', assignee: 'James Okafor', dueDate: '2027-04-25', expectedEvidence: 'Monitoring log', requirementText: 'Requirement: Noise reduction measures - impact tools, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise reduction measures - power poles', commitment: 'SCA NOI-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Noise', phase: 'Construction', responsibleParty: 'Environmental Lead', assignee: 'Tom Alvarez', dueDate: '2026-11-09', expectedEvidence: 'Training sign-in sheet', requirementText: 'Requirement: Noise reduction measures - power poles, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise reduction measures - stationary sources', commitment: 'SCA NOI-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Noise reduction measures - stationary', milestones: '', resourceCategory: 'Noise', phase: 'Construction', responsibleParty: 'Air Quality Lead', assignee: 'Daniel Reyes', dueDate: '2027-06-20', expectedEvidence: 'Inspection checklist', requirementText: 'Requirement: Noise reduction measures - stationary sources, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction noise management plan', commitment: 'SCA NOI-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: 'Construction noise management plan', milestones: 'Demolition', resourceCategory: 'Noise', phase: 'Pre-Construction', responsibleParty: 'Traffic Engineer', assignee: 'Maria Chen', dueDate: '2026-01-04', expectedEvidence: 'Survey report (PDF)', requirementText: 'The project applicant shall prepare and implement a Construction noise management plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Public notification', commitment: 'SCA NOI-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Noise', phase: 'Pre-Construction', responsibleParty: 'Construction Manager', assignee: 'Unassigned', dueDate: '2027-08-15', expectedEvidence: 'Monitoring log', requirementText: 'Requirement: Public notification, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Site-specific noise attenuation measures', commitment: 'SCA NOI-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'completed', comments: 3, action: 'Site-specific noise attenuation measures', milestones: '', resourceCategory: 'Noise', phase: 'Pre-Construction', responsibleParty: 'Acoustical Consultant', assignee: 'Priya Patel', dueDate: '2026-03-26', expectedEvidence: 'Training sign-in sheet', requirementText: 'The project applicant shall prepare and implement a Site-specific noise attenuation measures prior to the affected project phase, subject to City review and approval.' },
  { name: 'Noise complaints - receiving, responding to, tracking', commitment: 'SCA NOI-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: 'Noise complaints - receiving', milestones: '', resourceCategory: 'Noise', phase: 'Construction', responsibleParty: 'Hydrogeologist', assignee: 'Nadia Hassan', dueDate: '2027-10-10', expectedEvidence: 'Inspection checklist', requirementText: 'Requirement: Noise complaints - receiving, responding to, tracking, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise complaints - signage', commitment: 'SCA NOI-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: 'Building Permit', resourceCategory: 'Noise', phase: 'Construction', responsibleParty: 'Project Biologist', assignee: 'Sarah Kim', dueDate: '2026-05-21', expectedEvidence: 'Survey report (PDF)', requirementText: 'Requirement: Noise complaints - signage, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Operational noise', commitment: 'SCA NOI-6', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 1, action: 'Operational noise', milestones: '', resourceCategory: 'Noise', phase: 'Post-Construction', responsibleParty: 'QSP / Inspector', assignee: 'James Okafor', dueDate: '2027-12-05', expectedEvidence: 'Monitoring log', requirementText: 'Requirement: Operational noise, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Vibration analysis', commitment: 'SCA NOI-7', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Analysis', status: 'in-progress', comments: 0, action: 'Vibration analysis', milestones: '', resourceCategory: 'Noise', phase: 'Pre-Construction', responsibleParty: 'Cultural Resources Lead', assignee: 'Tom Alvarez', dueDate: '2026-07-16', expectedEvidence: 'Training sign-in sheet', requirementText: 'The applicant shall complete vibration analysis to evaluate potential impacts and identify feasible mitigation prior to approval.' },
  { name: 'Jobs/Housing Impact Fee.', commitment: 'SCA POP-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Financial', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Public Services and Recreation', phase: 'Pre-Construction', responsibleParty: 'Safety Officer', assignee: 'Daniel Reyes', dueDate: '2027-02-27', expectedEvidence: 'Inspection checklist', requirementText: 'The applicant shall provide jobs/Housing Impact Fee. to ensure funding of the required mitigation prior to issuance of the relevant permit.' },
  { name: 'Capital improvements impact fee', commitment: 'SCA PUB-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Financial', status: 'not-started', comments: 1, action: '', milestones: 'Final Inspection', resourceCategory: 'Public Services and Recreation', phase: 'Pre-Construction', responsibleParty: 'Environmental Lead', assignee: 'Maria Chen', dueDate: '2026-09-11', expectedEvidence: 'Survey report (PDF)', requirementText: 'The applicant shall provide capital improvements impact fee to ensure funding of the required mitigation prior to issuance of the relevant permit.' },
  { name: 'Bicycle and pedestrian access plan', commitment: 'SCA REC-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Bicycle and pedestrian access plan', milestones: '', resourceCategory: 'Public Services and Recreation', phase: 'Pre-Construction', responsibleParty: 'Air Quality Lead', assignee: 'Unassigned', dueDate: '2027-04-22', expectedEvidence: 'Monitoring log', requirementText: 'The project applicant shall prepare and implement a Bicycle and pedestrian access plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Implementation of bicycle and pedestrian enhancements', commitment: 'SCA REC-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Public Services and Recreation', phase: 'Construction', responsibleParty: 'Traffic Engineer', assignee: 'Priya Patel', dueDate: '2026-11-06', expectedEvidence: 'Training sign-in sheet', requirementText: 'Requirement: Implementation of bicycle and pedestrian enhancements, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Obstruction permit', commitment: 'SCA TRANS-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', responsibleParty: 'Construction Manager', assignee: 'Nadia Hassan', dueDate: '2027-06-17', expectedEvidence: 'Inspection checklist', requirementText: 'The applicant shall obtain obstruction permit from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Repair of damage to public right-of-ways', commitment: 'SCA TRANS-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 3, action: 'Repair of damage to public', milestones: 'Demolition', resourceCategory: 'Transportation and Traffic', phase: 'Construction', responsibleParty: 'Acoustical Consultant', assignee: 'Sarah Kim', dueDate: '2026-01-01', expectedEvidence: 'Survey report (PDF)', requirementText: 'Requirement: Repair of damage to public right-of-ways, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Traffic control plan', commitment: 'SCA TRANS-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', responsibleParty: 'Hydrogeologist', assignee: 'James Okafor', dueDate: '2027-08-12', expectedEvidence: 'Monitoring log', requirementText: 'The project applicant shall prepare and implement a Traffic control plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Traffic control plan implementation', commitment: 'SCA TRANS-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Construction', responsibleParty: 'Project Biologist', assignee: 'Tom Alvarez', dueDate: '2026-03-23', expectedEvidence: 'Training sign-in sheet', requirementText: 'The project applicant shall prepare and implement a Traffic control plan implementation prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bicycle parking', commitment: 'SCA TRANS-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'completed', comments: 1, action: 'Bicycle parking', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', responsibleParty: 'QSP / Inspector', assignee: 'Daniel Reyes', dueDate: '2027-10-07', expectedEvidence: 'Inspection checklist', requirementText: 'Project design shall incorporate bicycle parking consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'TDM - operational strategies', commitment: 'SCA TRANS-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'TDM - operational strategies', milestones: 'Building Permit', resourceCategory: 'Transportation and Traffic', phase: 'Post-Construction', responsibleParty: 'Cultural Resources Lead', assignee: 'Maria Chen', dueDate: '2026-05-18', expectedEvidence: 'Survey report (PDF)', requirementText: 'The project applicant shall prepare and implement a TDM - operational strategies prior to the affected project phase, subject to City review and approval.' },
  { name: 'TDM implementation - physical improvements', commitment: 'SCA TRANS-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Construction', responsibleParty: 'Safety Officer', assignee: 'Unassigned', dueDate: '2027-12-02', expectedEvidence: 'Monitoring log', requirementText: 'The project applicant shall prepare and implement a TDM implementation - physical improvements prior to the affected project phase, subject to City review and approval.' },
  { name: 'Transportation and parking demand management plan', commitment: 'SCA TRANS-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: 'Transportation and parking demand management', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', responsibleParty: 'Environmental Lead', assignee: 'Priya Patel', dueDate: '2026-07-13', expectedEvidence: 'Training sign-in sheet', requirementText: 'The project applicant shall prepare and implement a Transportation and parking demand management plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'ADA-accessible parking spaces', commitment: 'SCA TRANS-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'ADA-accessible parking spaces', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', responsibleParty: 'Air Quality Lead', assignee: 'Nadia Hassan', dueDate: '2027-02-24', expectedEvidence: 'Inspection checklist', requirementText: 'The project applicant shall prepare and implement a ADA-accessible parking spaces prior to the affected project phase, subject to City review and approval.' },
  { name: 'PEV-capable parking spaces', commitment: 'SCA TRANS-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: 'Final Inspection', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', responsibleParty: 'Traffic Engineer', assignee: 'Sarah Kim', dueDate: '2026-09-08', expectedEvidence: 'Survey report (PDF)', requirementText: 'The project applicant shall prepare and implement a PEV-capable parking spaces prior to the affected project phase, subject to City review and approval.' },
  { name: 'PEV-ready parking spaces', commitment: 'SCA TRANS-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 0, action: 'PEV-ready parking spaces', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', responsibleParty: 'Construction Manager', assignee: 'James Okafor', dueDate: '2027-04-19', expectedEvidence: 'Monitoring log', requirementText: 'The project applicant shall prepare and implement a PEV-ready parking spaces prior to the affected project phase, subject to City review and approval.' },
  { name: 'Transportation impact fee', commitment: 'SCA TRANS-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Financial', status: 'completed', comments: 3, action: 'Transportation impact fee', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', responsibleParty: 'Acoustical Consultant', assignee: 'Tom Alvarez', dueDate: '2026-11-03', expectedEvidence: 'Training sign-in sheet', requirementText: 'The applicant shall provide transportation impact fee to ensure funding of the required mitigation prior to issuance of the relevant permit.' },
  { name: 'Construction and Demolition Waste Reduction and Recycling Plan', commitment: 'SCA UTIL-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', responsibleParty: 'Hydrogeologist', assignee: 'Daniel Reyes', dueDate: '2027-06-14', expectedEvidence: 'Inspection checklist', requirementText: 'The project applicant shall prepare and implement a Construction and Demolition Waste Reduction and Recycling Plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Recycling collection space', commitment: 'SCA UTIL-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 0, action: 'Recycling collection space', milestones: 'Demolition', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', responsibleParty: 'Project Biologist', assignee: 'Maria Chen', dueDate: '2026-01-25', expectedEvidence: 'Survey report (PDF)', requirementText: 'Project design shall incorporate recycling collection space consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'California Green Building Standards', commitment: 'SCA UTIL-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'completed', comments: 1, action: 'California Green Building Standards', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', responsibleParty: 'QSP / Inspector', assignee: 'Unassigned', dueDate: '2027-08-09', expectedEvidence: 'Monitoring log', requirementText: 'Project design shall incorporate california Green Building Standards consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'California Green Building Standards after construction', commitment: 'SCA UTIL-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'California Green Building Standards after', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Post-Construction', responsibleParty: 'Cultural Resources Lead', assignee: 'Priya Patel', dueDate: '2026-03-20', expectedEvidence: 'Training sign-in sheet', requirementText: 'Requirement: California Green Building Standards after construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'California Green Building Standards during construction', commitment: 'SCA UTIL-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 3, action: 'California Green Building Standards during', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Construction', responsibleParty: 'Safety Officer', assignee: 'Nadia Hassan', dueDate: '2027-10-04', expectedEvidence: 'Inspection checklist', requirementText: 'Requirement: California Green Building Standards during construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Sanitary Sewer Impact Analysis', commitment: 'SCA UTIL-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Analysis', status: 'not-started', comments: 1, action: '', milestones: 'Building Permit', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', responsibleParty: 'Environmental Lead', assignee: 'Sarah Kim', dueDate: '2026-05-15', expectedEvidence: 'Survey report (PDF)', requirementText: 'The applicant shall complete sanitary Sewer Impact Analysis to evaluate potential impacts and identify feasible mitigation prior to approval.' },
  { name: 'Sanitary Sewer Impact Fee', commitment: 'SCA UTIL-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Financial', status: 'in-progress', comments: 0, action: 'Sanitary Sewer Impact Fee', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', responsibleParty: 'Air Quality Lead', assignee: 'James Okafor', dueDate: '2027-12-26', expectedEvidence: 'Monitoring log', requirementText: 'The applicant shall provide sanitary Sewer Impact Fee to ensure funding of the required mitigation prior to issuance of the relevant permit.' },
  { name: 'Storm drain system design', commitment: 'SCA UTIL-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 1, action: 'Storm drain system design', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', responsibleParty: 'Traffic Engineer', assignee: 'Tom Alvarez', dueDate: '2026-07-10', expectedEvidence: 'Training sign-in sheet', requirementText: 'Project design shall incorporate storm drain system design consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Underground utilities', commitment: 'SCA UTIL-6', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Construction', responsibleParty: 'Construction Manager', assignee: 'Daniel Reyes', dueDate: '2027-02-21', expectedEvidence: 'Inspection checklist', requirementText: 'Project design shall incorporate underground utilities consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Water Efficient Landscape Ordinance', commitment: 'SCA UTIL-7', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'completed', comments: 3, action: 'Water Efficient Landscape Ordinance', milestones: 'Final Inspection', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', responsibleParty: 'Acoustical Consultant', assignee: 'Maria Chen', dueDate: '2026-09-05', expectedEvidence: 'Survey report (PDF)', requirementText: 'Project design shall incorporate water Efficient Landscape Ordinance consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Water Efficient Landscape Ordinance installation', commitment: 'SCA UTIL-7', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: 'Water Efficient Landscape Ordinance installation', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Construction', responsibleParty: 'Hydrogeologist', assignee: 'Unassigned', dueDate: '2027-04-16', expectedEvidence: 'Monitoring log', requirementText: 'Requirement: Water Efficient Landscape Ordinance installation, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
];

// List facet (prototype stub): the FEIR export carries no Action-List membership,
// so each row is assigned to one of three lists deterministically by requirement
// type. Gives the Tracker's "List" filter real backing without hand-editing every
// generated row. Swap for real list data when the export carries it.
const LIST_BY_TYPE: Record<string, string> = {
  Reporting: 'Annual Reporting',
  Monitoring: 'Annual Reporting',
  Plan: 'Desktop Requirements',
  Design: 'Desktop Requirements',
  'Approval & Consultation': 'Desktop Requirements',
};
const listForType = (type: string): string => LIST_BY_TYPE[type] ?? 'Field Verification';

export const actions: ActionRow[] = rawActions.map((r) => ({ ...r, list: listForType(r.type) }));

// ── src/data/requirement-enrich.ts ──
// Conditional-trio enrichment (Species / Season / Construction activity) keyed by
// commitment ID — the generated FEIR fixture doesn't carry these, so this map drives
// the differential requirement metadata that BcnRequirementReference surfaces.
//
// Shared by the Requirement Tracker dialog AND the streamlined Data Catalog
// Requirements pages (BCN-1163 / BCN-1283): one source of truth so the same
// commitment shows the same species/season/activities everywhere.
import type { RequirementReference } from '../components/bcn/requirement-reference';
import type { ActionRow } from './tracker-fixture';

export const ENRICH: Record<string, Pick<RequirementReference, 'species' | 'season' | 'constructionActivities'>> = {
  'MM-BIO-1': { constructionActivities: ['Demolition', 'Site preparation'] },
  'MM-BIO-2': { species: ['Nesting raptors', 'Migratory birds'], season: 'Feb 1 – Aug 31', constructionActivities: ['Ground disturbance', 'Vegetation removal'] },
  'MM-BIO-3': { species: ['Roosting bats'], constructionActivities: ['Demolition', 'Tree removal'] },
  'SCA BIO-1': { species: ['Migratory birds'] },
  'SCA BIO-2': { season: 'Breeding season (Feb – Aug)', constructionActivities: ['Tree removal'] },
  'SCA BIO-3': { constructionActivities: ['Tree removal', 'Grading'] },
  'SCA AIR-1': { constructionActivities: ['Earthwork', 'Grading', 'Demolition'] },
  'SCA AIR-2': { constructionActivities: ['Earthwork', 'Hauling'] },
};

/** Map a fixture row → the component's RequirementReference (Frequency defaults to
 *  One-time inside the component under the streamlined config). */
export const toRequirement = (row: ActionRow): RequirementReference => ({
  text: row.requirementText,
  resourceCategory: row.resourceCategory,
  type: row.type,
  phase: row.phase,
  milestone: row.milestones || undefined,
  responsibleParty: row.responsibleParty,
  expectedEvidence: row.expectedEvidence,
  ...ENRICH[row.commitment],
});

// ── src/components/bcn/status-select.ts ──
// Shared logic for <BcnStatusSelect> — a hand-driven listbox (NOT esa-select)
// because the trigger must show the live status color. The controller flips state —
// root.dataset.value + aria + the trigger label text + (in option mode) the trigger
// dot color — and emits 'change' only on user selection.
//
// Default-set dots are token-driven via CSS ([data-value] → --bcn-status-*); option
// mode supplies a per-option `data-color` the controller copies onto the trigger dot.

// Widened to string so any status set (e.g. the fish-study plan/exec ramps) works;
// the default tracking set ('not-started' | 'in-progress' | 'completed') still passes.
export type StatusValue = string;

export interface StatusSelectController {
  readonly value: StatusValue;
  setValue(v: StatusValue): void;
  element: HTMLElement;
}

// Fallback labels for the default 3-state set (option mode carries data-label).
const LABELS: Record<string, string> = {
  'not-started': 'Not Started',
  'in-progress': 'In Progress',
  completed: 'Completed',
};

/** Wire one rendered <BcnStatusSelect> root into a live listbox. */
export function setupStatusSelect(root: HTMLElement): StatusSelectController {
  const trigger = root.querySelector<HTMLButtonElement>('.bcn-status-select__trigger')!;
  const menu = root.querySelector<HTMLUListElement>('.bcn-status-select__menu')!;
  const labelEl = root.querySelector<HTMLSpanElement>('.bcn-status-select__value')!;
  const triggerDot = root.querySelector<HTMLElement>('.bcn-status-select__dot--trigger')!;
  const opts = [...menu.querySelectorAll<HTMLLIElement>('.bcn-status-select__opt')];

  const optFor = (value: string) => opts.find((o) => o.dataset.value === value);
  let current = root.dataset.value ?? opts[0]?.dataset.value ?? '';

  // Update the UI WITHOUT firing 'change'. dataset.value drives the default-set dot
  // color via CSS; option mode repaints the trigger dot from the option's data-color.
  function paint(value: StatusValue) {
    current = value;
    root.dataset.value = value;
    const opt = optFor(value);
    labelEl.textContent = opt?.dataset.label ?? LABELS[value] ?? '—';
    if (opt?.dataset.color) triggerDot.style.background = opt.dataset.color;
    opts.forEach((o) => o.setAttribute('aria-selected', String(o.dataset.value === value)));
  }

  function openMenu(open: boolean) {
    menu.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
  }

  paint(current);

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    openMenu(menu.hidden);
  });

  opts.forEach((opt) =>
    opt.addEventListener('click', () => {
      const value = opt.dataset.value as string;
      paint(value);
      openMenu(false);
      root.dispatchEvent(new CustomEvent('change', { detail: { value }, bubbles: true }));
    }),
  );

  document.addEventListener('click', (e) => {
    if (!root.contains(e.target as Node)) openMenu(false);
  });

  return {
    get value() {
      return current;
    },
    setValue(v: StatusValue) {
      paint(v);
    },
    element: root,
  };
}

// ── src/components/bcn/evidence-list.ts ──
// Shared controller for <BcnEvidenceList> — the Evidence-of-Compliance card list.
// Imported by the dynamic host (the tracking dialog) to wire per-card behavior on a
// server-rendered list: expand/collapse, esa-file-list population, edit/delete/star.
// One source of truth so the card contract (data-* attrs, aria-labels) can't drift
// between the .astro markup and the JS that drives it.

/** The evidence facts carried on each card's data-* attributes. */
export interface EvidenceCardData {
  id: string;
  title: string;
  notes: string;
  tags: string[];
  files: string[];
}

export interface EvidenceListOptions {
  /** Host opens its own editor (esa-side-dialog) with the card's data. */
  onEdit?(data: EvidenceCardData): void;
}

// esa-file-list: files set as a property (never an attr); name + optional href.
type FileListEl = HTMLElement & { files: { name: string; href?: string }[]; removable: boolean; downloadable: boolean };

const toFiles = (csv: string | undefined, href?: string) =>
  (csv ?? '').split(',').filter(Boolean).map((name) => ({ name, ...(href ? { href } : {}) }));

const readCard = (item: HTMLElement): EvidenceCardData => ({
  id: item.id,
  title: item.dataset.title ?? '',
  notes: item.dataset.notes ?? '',
  tags: (item.dataset.tags ?? '').split(',').filter(Boolean),
  files: (item.dataset.files ?? '').split(',').filter(Boolean),
});

/**
 * Wire every .bcn-evidence-card inside `root`: lead-click expand toggle, esa-file-list
 * population (download-only), and the edit/delete/star action buttons. Buttons are
 * esa-icon-button (no class passthrough) → selected by aria-label.
 */
export function setupEvidenceList(root: HTMLElement, opts: EvidenceListOptions = {}): void {
  root.querySelectorAll<HTMLLIElement>('.bcn-evidence-card').forEach((item) => {
    const lead = item.querySelector<HTMLElement>('.bcn-evidence-card__lead')!;
    const fields = item.querySelector<HTMLElement>('.bcn-evidence-card__fields')!;
    lead.addEventListener('click', () => {
      const open = item.classList.toggle('is-expanded');
      fields.hidden = !open;
    });

    // Populate the card's esa-file-list (download-only) from data-files.
    const fileList = item.querySelector<FileListEl>('esa-file-list');
    if (fileList) fileList.files = toFiles(item.dataset.files, '#file');

    const byLabel = (label: string) => item.querySelector<HTMLElement>(`[aria-label="${label}"]`);
    byLabel('Edit evidence')?.addEventListener('click', () => opts.onEdit?.(readCard(item)));
    byLabel('Delete evidence')?.addEventListener('click', () => item.remove());

    const star = byLabel('Add to summary page');
    star?.addEventListener('click', () => {
      const on = star.getAttribute('aria-pressed') === 'true';
      star.setAttribute('aria-pressed', String(!on));
      star.classList.toggle('bcn-evidence-card__star--on', !on);
    });
  });
}

// ── src/pages/prototypes/requirement-tracker.astro ──
---
// Action Tracker (Prologis) — the "Compliance Tracking" workspace.
//
// Prologis wants the tracking surface as a real data grid, not the Kanban the
// app defaults to. So the View toggle offers Kanban / Timeline / Grid, and this
// prototype boots into GRID. The grid is AG Grid (community) mounted as a client
// island; Kanban renders statically from the same fixture; Timeline is a stub.
//
// COMPONENT MANIFEST: this page assembles esa-* hub legos + bcn-* spoke components.
// The requirement dialog is composed from BcnRequirementReference / BcnDiscussion /
// BcnStatusSelect / BcnKeyValue / BcnChangeLog / BcnNotifications /
// BcnEvidenceList. The only CSS that remains here is page-composition glue: the grid
// chrome, the dialog SHELL (header / two-column stage / slide-up evidence sheet), and
// the side-dialogs — geometry with no reusable-component home.
//
// Rendered inside AppShell > PageLayout, themed with the Beacon spoke tokens.
import AppShell from '../../layouts/AppShell.astro';
import PageLayout from '../../layouts/PageLayout.astro';
import EsaIcon from '@esa/ecology/esa-icon.astro';
import EsaButton from '@esa/ecology/esa-button.astro';
import EsaBadge from '@esa/ecology/esa-badge.astro';
import EsaIconButton from '@esa/ecology/esa-icon-button.astro';
import EsaPill from '@esa/ecology/esa-pill.astro';
import EsaEmptyState from '@esa/ecology/esa-empty-state.astro';
import EsaIconLink from '@esa/ecology/esa-icon-link.astro';
import EsaCollapsible from '@esa/ecology/esa-collapsible.astro';
import FilterContainer from '@esa/ecology/esa-filter-container.astro';
import FilterClearButton from '@esa/ecology/esa-filter-clear-button.astro';
import BcnRequirementReference from '../../components/bcn/BcnRequirementReference.astro';
import BcnDiscussion, { type DiscussionComment } from '../../components/bcn/BcnDiscussion.astro';
import BcnStatusSelect from '../../components/bcn/BcnStatusSelect.astro';
import BcnKeyValue from '../../components/bcn/BcnKeyValue.astro';
import BcnChangeLog from '../../components/bcn/BcnChangeLog.astro';
import BcnNotifications from '../../components/bcn/BcnNotifications.astro';
import BcnEvidenceList from '../../components/bcn/BcnEvidenceList.astro';
import { actions, STATUS_META, type ActionStatus } from '../../data/tracker-fixture';
import { withBase } from '../../lib/base';
import { ENRICH, toRequirement } from '../../data/requirement-enrich';

// Serialized payload for the AG Grid island.
// Conditional-trio enrichment (Species / Season / Construction activity) lives in the
// shared src/data/requirement-enrich.ts (also consumed by the streamlined Data Catalog
// Requirements pages). Serialized to the client so openDialog can rebuild the
// reference block per row.

const initialReq = toRequirement(actions[0]);
const sourcePdf = withBase('/source-docs/feir-sample.pdf');
const sourceDocTitle = '3600 Alameda Avenue Project FEIR';
const sourceDocHref = '#data-catalog/source-documents/3600-alameda-feir';

// Seed Discussion thread (static prototype data; newest-first like Beacon).
const currentUser = 'Maria Chen';
const discussionComments: DiscussionComment[] = [
  { author: 'James Okafor', time: 'Jun 6, 2026 at 9:12 AM', text: 'Pre-construction survey scheduled — waiting on biologist availability.', edited: false, own: false },
  { author: 'Maria Chen', time: 'Jun 5, 2026 at 4:30 PM', text: 'Uploaded the signed C-57 driller license to evidence and flagged it for review.', edited: true, own: true },
  { author: 'Priya Patel', time: 'Jun 2, 2026 at 2:40 PM', text: 'Assigned to Maria. Set the due date to align with the Building Permit milestone.', edited: false, own: false },
];

// Sidebar fixture data (was hardcoded in the dialog markup, now props-driven).
const changeLog = [
  { date: 'Jun 4, 2026', events: [{ text: 'Status set to', emphasis: 'In Progress', by: 'James Okafor · 9:12 AM' }] },
  {
    date: 'Jun 2, 2026',
    events: [
      { text: 'Assignee set to', emphasis: 'Maria Chen', by: 'Priya Patel · 2:40 PM' },
      { text: 'Due date set to', emphasis: 'Dec 2, 2027', by: 'Priya Patel · 2:38 PM' },
    ],
  },
  { date: 'May 30, 2026', events: [{ text: 'Implementation created', by: 'System · 12:00 AM' }] },
];
const notifRecipients = ['Environmental Lead', 'DWR Compliance (org)'];
const notifTriggers = [
  { name: 'Coming up', detail: '7 days before', on: true },
  { name: 'Due', detail: 'On due date', on: true },
  { name: 'Past due', detail: 'Off', on: false },
];

const gridPayload = {
  rows: actions,
  statusMeta: STATUS_META as Record<ActionStatus, { label: string; hex: string }>,
  enrich: ENRICH,
};

// Evidence-of-Compliance fixture for the dialog drawer (mirrors the Beacon
// EvidenceOfCompliance shape: Title / Notes / TagsList / Files). Three items so
// the drawer shows a realistic list. Cards are collapsed by default.
const eocs = [
  {
    id: 'eoc-1',
    title: 'C-57 Driller License',
    notes: 'Active C-57 driller license on file; renewed annually before the dry season.',
    tags: ['License', 'Pre-construction'],
    files: ['C57-driller-license-2026.pdf', 'license-renewal-receipt.pdf'],
  },
  {
    id: 'eoc-2',
    title: 'Pre-Construction Nesting Bird Survey',
    notes: 'Survey completed within 3 days of ground disturbance; no active nests found.',
    tags: ['Survey', 'Biological'],
    files: ['nesting-bird-survey-2026.pdf'],
  },
  {
    id: 'eoc-3',
    title: 'WEAP Training Sign-In Sheets',
    notes: '',
    tags: ['Training'],
    files: ['weap-signin-2026-05.pdf', 'weap-signin-2026-06.pdf', 'weap-slides.pdf'],
  },
];

// Prologis-specific sidenav — the aliased / trimmed tree their tenant sees.
// Project drops Organize Actions / Action Lists / Document Reviews / Spatial
// Library Layers; Tracking drops All Components; Reporting drops Progress
// Report; Data Catalog drops Actions — their "Requirements" routes to the
// streamlined Requirements catalog (the aliased Actions, BCN-1163/BCN-1283), and
// the native Requirement entity remains as "Terms".
const prologisNav = [
  { id: 'setup-wizard', title: 'Setup Wizard', icon: 'compass', link: true },
  {
    id: 'project',
    title: 'Project',
    icon: 'layout-dashboard',
    expanded: false,
    dividerAfter: true,
    items: [{ id: 'dashboard', label: 'Dashboard' }],
  },
  {
    id: 'tracking',
    title: 'Tracking',
    icon: 'radar',
    expanded: true,
    active: true,
    items: [{ id: 'project-tracking', label: 'Project Tracking', active: true }],
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    icon: 'map-pinned',
    expanded: false,
    items: [{ id: 'monitoring-portal', label: 'Monitoring Portal' }],
  },
  {
    id: 'reporting',
    title: 'Reporting',
    icon: 'clipboard-list',
    expanded: false,
    dividerAfter: true,
    items: [{ id: 'report-center', label: 'Report Center' }],
  },
  {
    id: 'data-catalog',
    title: 'Data Catalog',
    icon: 'database',
    expanded: false,
    items: [
      { id: 'dc-source-documents', label: 'Source Documents' },
      { id: 'dc-commitments', label: 'Commitments' },
      // Aliased Actions — routes to the streamlined Requirements catalog (BCN-1163).
      // (The native entity's "Terms" entry lives on the catalog pages' own sub-nav.)
      { id: 'dc-requirements', label: 'Requirements', href: withBase('/prototypes/data-catalog-requirements-streamlined') },
      { id: 'dc-all-data', label: 'All Data' },
    ],
  },
];
---

<AppShell title="Requirement Tracking — 3600 Alameda" tenantName="Prologis" projectName="3600 Alameda" navSections={prologisNav}>
  <PageLayout
    title="3600 Alameda"
    icon="radar"
    breadcrumbs={[
      { label: '3600 Alameda', href: '#project' },
      { label: 'Tracking', href: '#tracking' },
      { label: 'Project Tracking' },
    ]}
  >
    <EsaPill slot="title-badge" label="Project Tracking" removable={false} size="sm" />

    <!-- ═══ Filter bar — carded two-band (Beacon prod parity) ═══
         bcn-lego-checked: no esa- lego is a banded filter-toolbar SHELL — esa-filter-container
         lays out the dropdown ROW only, not the View/N-A/Search top band + card chrome. The
         card + vertical dividers + "View"/"Filters" labels are page-composition glue (same class
         as .bcn-toolbar/dialog shell). Every CONTROL inside is a lego: esa-button-toggle (View),
         esa-switch-toggle (N/A), esa-text-field (Search), esa-filter-dropdown ×7 in
         esa-filter-container (Filters), esa-filter-clear-button (Clear all). Checked Beacon: this
         mirrors the prod ui-filter toolbar, ported to the esa-* vocabulary. -->
    <div class="bcn-filterbar">
      <div class="bcn-filterbar__top">
        <div class="bcn-filterbar__group">
          <span class="bcn-filterbar__label">View</span>
          <esa-button-toggle id="tt-views" value="grid" size="md"></esa-button-toggle>
        </div>
        <span class="bcn-filterbar__divider"></span>
        <div class="bcn-filterbar__na">
          <esa-switch-toggle id="tt-na" label="N/A" label-position="before"></esa-switch-toggle>
        </div>
        <div class="bcn-filterbar__search">
          <esa-text-field id="tt-search" placeholder="Search requirements…" size="md"></esa-text-field>
          <span id="tt-search-clear" hidden><EsaIconButton icon="x" label="Clear search" size="sm" /></span>
        </div>
      </div>
      <div class="bcn-filterbar__bottom">
        <span class="bcn-filterbar__label">Filters</span>
        <FilterContainer>
          <esa-filter-dropdown id="flt-type" label="Type" multiple size="sm"></esa-filter-dropdown>
          <esa-filter-dropdown id="flt-phase" label="Phase" multiple size="sm"></esa-filter-dropdown>
          <esa-filter-dropdown id="flt-commitment" label="Commitment" multiple size="sm"></esa-filter-dropdown>
          <esa-filter-dropdown id="flt-list" label="List" multiple size="sm"></esa-filter-dropdown>
          <esa-filter-dropdown id="flt-species" label="Species" multiple size="sm"></esa-filter-dropdown>
          <esa-filter-dropdown id="flt-activity" label="Construction Activities" multiple size="sm"></esa-filter-dropdown>
          <esa-filter-dropdown id="flt-milestone" label="Milestones" multiple size="sm"></esa-filter-dropdown>
        </FilterContainer>
        <span id="tt-clear-filters" class="bcn-filterbar__clear"><FilterClearButton /></span>
      </div>
    </div>

    <!-- ═══ GRID view (default) — Beacon grid chrome + AG Grid island ═══ -->
    <div class="bcn-view-pane" id="view-grid">
      <div id="tracker-grid" class="tracker-grid"></div>

      <!-- Grid footer: download · record count -->
      <div class="table-footer">
        <span id="tt-download"><EsaButton color="ghost" appearance="outline" size="sm" icon="download">Download as CSV</EsaButton></span>
        <div class="row-count-data">
          Total Records: <span id="tt-total">0</span>
          <span id="tt-filtered" class="filtered-rows-count" hidden></span>
        </div>
      </div>
    </div>

    <!-- ═══ KANBAN view (stub) ═══ -->
    <div class="bcn-view-pane" id="view-kanban" hidden>
      <EsaEmptyState title="Kanban view" description="Status board of actions by tracking state. Not part of this prototype pass — Grid is the wired view.">
        <EsaIcon slot="icon" name="columns-3" size="xl" paths="<path d='M3 3h18v18H3z'/><path d='M9 3v18'/><path d='M15 3v18'/>" />
      </EsaEmptyState>
    </div>

    <!-- ═══ TIMELINE view (stub) ═══ -->
    <div class="bcn-view-pane" id="view-timeline" hidden>
      <EsaEmptyState title="Timeline view" description="Gantt-style schedule of actions by due date and phase. Not part of this prototype pass — Grid is the wired view.">
        <EsaIcon slot="icon" name="calendar" size="xl" paths="<path d='M8 2v4'/><path d='M16 2v4'/><rect width='18' height='18' x='3' y='4' rx='2'/><path d='M3 10h18'/>" />
      </EsaEmptyState>
    </div>
  </PageLayout>

  <!-- ═══ Requirement dialog (simplified action-implementation upsert) ═══
       esa-dialog shell + bcn-* section components. No tabs. Jira-style:
       independently-scrolling main + sidebar two-column, with BcnStatusSelect primary
       at the top of the rail and Details / Notifications / etc. as EsaCollapsible
       collapsibles. Evidence of Compliance is a full-width slide-up sheet below the two
       columns. Action Plan + Tasks are hidden — the Prologis "simplified" config off. -->
  <esa-dialog
    id="rd"
    size="lg"
    style="--_dialog-width: min(1920px, 94vw); --_dialog-padding: 0; --_dialog-bg: var(--color-surface, #fff); --_dialog-header-border: var(--color-border, #dcdcdc); --z-modal-backdrop: 1150; --z-modal: 1200;"
  >
    <!-- Own close button (not show-close-button) so the header scrim can cover it -->
    <div slot="header" class="bcn-dialog__head">
      <div class="bcn-dialog__head-text">
        <!-- bcn-lego-checked: no esa- fits — the purple commitment-ID badge is a Beacon-specific
             identity (--color-commitment tint); checked Ecology (no commitment badge lego) and
             Beacon (ported client-commitment-id faithfully, sans-font per design call). Leading
             badge = commitment ID (purple), trailing = requirement type (neutral); ids preserved
             so openDialog() textContent bindings stay wired. -->
        <h1 class="bcn-dialog__title">
          <span class="bcn-dialog__badge bcn-dialog__badge--commitment" id="rd-commitment">—</span>
          <span class="bcn-dialog__title-row">
            <span class="bcn-dialog__title-name" id="rd-title">—</span>
            <span class="bcn-dialog__badge bcn-dialog__badge--type" id="rd-type">—</span>
          </span>
        </h1>
      </div>
      <span class="bcn-dialog__head-close" id="rd-close"><EsaIconButton icon="x" label="Close dialog" /></span>
      <div class="bcn-dialog__head-scrim" aria-hidden="true"></div>
    </div>

    <div class="bcn-dialog__shell" id="rd-shell">
      <div class="bcn-dialog__grid">
        <!-- ── Main column (independently scrolls) ── -->
        <div class="bcn-dialog__main">
          <BcnRequirementReference requirement={initialReq} editHref={withBase('/prototypes/data-catalog-requirement-streamlined')} />
          <BcnDiscussion comments={discussionComments} currentUser={currentUser} />
        </div>

        <!-- ── Sidebar (independently scrolls) ── -->
        <aside class="bcn-dialog__side">
          <!-- A. Tracking — Status · Due Date · Assignee. -->
          <EsaCollapsible icon="square-check" iconPaths="<rect width='18' height='18' x='3' y='3' rx='2'/><path d='m9 12 2 2 4-4'/>" title="Tracking" open>
            <BcnStatusSelect id="rd-status" />
            <esa-date-picker id="rd-due" label="Due Date"></esa-date-picker>
            <esa-select id="rd-assignee" label="Assignee"></esa-select>
          </EsaCollapsible>

          <!-- D. Lists -->
          <EsaCollapsible icon="list" iconPaths="<path d='M8 6h13'/><path d='M8 12h13'/><path d='M8 18h13'/><path d='M3 6h.01'/><path d='M3 12h.01'/><path d='M3 18h.01'/>" title="Lists">
            <ul class="bcn-lists">
              <li><a class="bcn-list-link" href="#commitment-list">Annual Reporting</a></li>
              <li><a class="bcn-list-link" href="#commitment-list">Desktop Requirements</a></li>
            </ul>
          </EsaCollapsible>

          <!-- E. Notifications -->
          <EsaCollapsible icon="bell" title="Notifications">
            <BcnNotifications recipients={notifRecipients} triggers={notifTriggers} editHref="#data-catalog-action" />
          </EsaCollapsible>

          <!-- F. Change log -->
          <EsaCollapsible icon="history" title="Change Log">
            <BcnChangeLog days={changeLog} />
          </EsaCollapsible>

          <!-- G. Details (Scope) -->
          <EsaCollapsible icon="info" title="Details">
            <BcnKeyValue label="Scope" value="Project" hint="Perform once, applies to entire project" />
            <label class="bcn-na-row"><esa-switch-toggle id="rd-na" label="Not Applicable"></esa-switch-toggle></label>
          </EsaCollapsible>
        </aside>
      </div>

      <!-- Dim scrim + slide-up Evidence sheet: overlays the body, fixed height,
           does not affect modal height (collapsed by default) -->
      <div class="bcn-evidence-sheet-scrim" id="rd-evidence-scrim"></div>
      <!-- bcn-lego-checked: the bottom slide-up SHEET (.bcn-evidence-sheet) has no
           ecology lego — esa-side-dialog is a side sheet, esa-dialog is centered;
           neither is a bottom sheet anchored inside the modal body. Kept as a
           documented page shell. The list inside is <BcnEvidenceList>; everything
           else uses legos (esa-icon-button, esa-badge, esa-button). -->
      <section class="bcn-evidence-sheet" id="rd-evidence-drawer" aria-hidden="true" aria-label="Evidence of Compliance">
        <header class="bcn-evidence-sheet__head">
          <div class="bcn-evidence-sheet__heading">
            <span class="bcn-evidence-sheet__title">
              <EsaIcon name="paperclip" size="sm" paths="<path d='m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48'/>" />
              Evidence of Compliance <EsaBadge variant="secondary" size="sm" value={eocs.length} />
            </span>
            <span class="bcn-evidence-sheet__expected">Expected: <span id="rd-exp-evidence">—</span></span>
          </div>
          <div class="bcn-evidence-sheet__head-actions">
            <span id="rd-evidence-download-all"><EsaIconButton icon="download" label="Download all evidence as .zip" size="md" /></span>
            <span id="rd-evidence-close"><EsaIconButton icon="x" label="Close evidence" size="md" /></span>
          </div>
        </header>
        <div class="bcn-evidence-sheet__body">
          <BcnEvidenceList items={eocs} />
        </div>
      </section>
    </div>

    <!-- ── Footer slot: left Add-Evidence ghost trigger + right action row ── -->
    <div slot="footer" class="bcn-dialog__footer">
      <div class="bcn-dialog__foot">
        <!-- Wrapper carries the id/aria the sheet JS toggles; click bubbles from the
             EsaButton (same pattern as Cancel/Save). Keeps the sheet wiring unchanged. -->
        <span id="rd-evidence-trigger" class="bcn-dialog__evidence-btn" aria-controls="rd-evidence-drawer" aria-expanded="false">
          <EsaButton color="ghost">
            <span class="bcn-dialog__evidence-btn-label">
              <EsaIcon name="paperclip" size="sm" paths="<path d='m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48'/>" />
              Add Evidence
              <EsaBadge variant="secondary" size="sm" value={eocs.length} />
            </span>
          </EsaButton>
        </span>
        <span id="rd-cancel"><EsaButton color="ghost" appearance="outline">Cancel</EsaButton></span>
        <span id="rd-save"><EsaButton color="primary">Save</EsaButton></span>
      </div>
    </div>
  </esa-dialog>

  <!-- Edit panel = esa-side-dialog lego (own backdrop, focus trap, Esc-to-close,
       header/footer slots). At the PAGE ROOT so it isn't trapped in the esa-dialog
       panel's stacking context; --z-modal/--z-modal-backdrop lift it above the
       fixed .topbar (z 1100), which the lego exposes precisely for this. -->
  <esa-side-dialog id="rd-eoc-editor" heading="Edit Evidence of Compliance" size="md" style="--z-modal: 1300; --z-modal-backdrop: 1250;">
    <esa-text-field id="rd-edit-title" label="Title"></esa-text-field>
    <esa-input-tag id="rd-edit-tags" label="Tags"></esa-input-tag>
    <esa-textarea id="rd-edit-notes" label="Notes" rows="4"></esa-textarea>
    <div class="bcn-edit-files-field">
      <span class="bcn-edit-files-field__label">Files</span>
      <!-- existing server files (no esa- file-display lego) — populated by JS -->
      <esa-file-list id="rd-edit-files" removable></esa-file-list>
      <esa-file-upload label="Add files" multiple accept=".pdf,.csv,.xlsx,.jpg,.jpeg,.png,.gif,.bmp,.zip"></esa-file-upload>
    </div>
    <span slot="footer" class="bcn-edit-foot">
      <span id="rd-eoc-editor-cancel"><EsaButton color="ghost" appearance="outline">Cancel</EsaButton></span>
      <span id="rd-eoc-editor-save"><EsaButton color="primary">Save</EsaButton></span>
    </span>
  </esa-side-dialog>

  <!-- Source-document viewer = esa-side-dialog lego at page root (half-page). The
       BcnRequirementReference [data-bcn-source] trigger opens it; lifts above the
       requirement dialog (z 1200) like the eoc editor. -->
  <esa-side-dialog id="rd-source-drawer" heading={sourceDocTitle} size="lg" style="--_width: 66vw; --z-modal: 1300; --z-modal-backdrop: 1250; --backdrop-filter: blur(4px);">
    <div class="bcn-source-pdf">
      <!-- Custom viewer chrome: navpanes=0/pagemode=none hide the thumbnail sidebar. -->
      <iframe class="bcn-source-pdf__frame" src={`${sourcePdf}?v=187#view=FitH&navpanes=0&pagemode=none`} title={`Source document — ${sourceDocTitle} (sample)`}></iframe>
    </div>
    <span slot="footer" class="bcn-source-foot">
      <EsaIconLink href={sourceDocHref} trailing="arrow-right" size="sm" weight="medium">Open Source Document</EsaIconLink>
    </span>
  </esa-side-dialog>

  <script type="application/json" id="grid-data" set:html={JSON.stringify(gridPayload)}></script>
</AppShell>

<script>
  import { createGrid, ModuleRegistry, AllCommunityModule, themeQuartz, iconOverrides } from 'ag-grid-community';
  import type { GridApi, GridOptions, ColDef, ICellRendererParams, IRowNode } from 'ag-grid-community';
  import { applyRequirement, type RequirementReference } from '../../components/bcn/requirement-reference';
  import { setupStatusSelect, type StatusValue } from '../../components/bcn/status-select';
  import { setupEvidenceList, type EvidenceCardData } from '../../components/bcn/evidence-list';

  // Register the esa-* legos the requirement dialog composes (self-registering).
  import '@esa/ecology/esa-dialog';
  import '@esa/ecology/esa-side-dialog';
  import '@esa/ecology/esa-file-upload';
  import '@esa/ecology/esa-file-list';
  import '@esa/ecology/esa-button-toggle';
  import '@esa/ecology/esa-text-field';
  import '@esa/ecology/esa-select';
  import '@esa/ecology/esa-date-picker';
  import '@esa/ecology/esa-textarea';
  import '@esa/ecology/esa-switch-toggle';
  import '@esa/ecology/esa-input-tag';
  import '@esa/ecology/esa-filter-dropdown';

  ModuleRegistry.registerModules([AllCommunityModule]);

  type ActionStatus = 'not-started' | 'in-progress' | 'completed' | 'not-applicable';
  interface ActionRow {
    name: string;
    commitment: string;
    sourceDoc: string;
    requirementText: string;
    type: string;
    status: ActionStatus;
    comments: number;
    action: string;
    milestones: string;
    resourceCategory: string;
    phase: string;
    list: string;
    responsibleParty: string;
    assignee: string;
    dueDate: string;
    expectedEvidence: string;
  }
  interface Payload {
    rows: ActionRow[];
    statusMeta: Record<ActionStatus, { label: string; hex: string }>;
    enrich: Record<string, Partial<RequirementReference>>;
  }

  const payload: Payload = JSON.parse(document.getElementById('grid-data')!.textContent || '{}');
  const { rows, statusMeta } = payload;
  const enrich = payload.enrich ?? {};

  // Build the reference component's RequirementReference from a grid row + trio enrichment.
  const toReq = (row: ActionRow): RequirementReference => ({
    text: row.requirementText,
    resourceCategory: row.resourceCategory,
    type: row.type,
    phase: row.phase,
    milestone: row.milestones || undefined,
    responsibleParty: row.responsibleParty,
    expectedEvidence: row.expectedEvidence,
    ...enrich[row.commitment],
  });
  const referenceRoot = document.querySelector('.bcn-reqref') as HTMLElement;

  // Beacon "gold-star" Quartz theme — ported verbatim from esassoc/Beacon
  // (Beacon.Web/.../ag-grid/beacon-grid-theme.ts). Literal hex, each annotated
  // with the Beacon design token it mirrors.
  const lucideFunnelSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>';
  const beaconIconOverrides = iconOverrides({
    type: 'image',
    mask: true,
    icons: { filter: { svg: lucideFunnelSvg }, filterActive: { svg: lucideFunnelSvg } },
  });

  const beaconTheme = themeQuartz.withPart(beaconIconOverrides).withParams({
    fontFamily: 'DM Sans, sans-serif',
    headerFontFamily: 'DM Sans, sans-serif',
    accentColor: '#f9a134', // ESA orange / --color-orange-400
    foregroundColor: '#3d3d3d', // gray-900
    headerBackgroundColor: '#005862', // teal-900 / --primary
    headerTextColor: '#ffffff',
    headerFontSize: '13px',
    headerFontWeight: 600,
    headerHeight: 48,
    rowHeight: 44,
    dataFontSize: '13px',
    oddRowBackgroundColor: '#fafafa', // gray-50
    rowHoverColor: '#effefb', // teal-50
    borderColor: '#dcdcdc', // gray-200
    wrapperBorder: '1px solid #dcdcdc', // gray-200
    wrapperBorderRadius: '4px 4px 0 0',
    borderRadius: '4px',
    headerColumnResizeHandleColor: 'rgba(255, 255, 255, 0.2)',
    checkboxCheckedBackgroundColor: '#f9a134', // ESA orange / --color-orange-400
  });

  // ── Renderers ───────────────────────────────────────────────────────────────
  function statusRenderer(p: ICellRendererParams<ActionRow>) {
    const meta = statusMeta[p.value as ActionStatus];
    if (!meta) return '';
    const el = document.createElement('span');
    el.className = 'bcn-grid-chip';
    el.style.setProperty('--_chip', meta.hex);
    el.innerHTML = `<span class="bcn-grid-chip__dot"></span>${meta.label}`;
    return el;
  }

  function linkRenderer(p: ICellRendererParams<ActionRow>) {
    const el = document.createElement('a');
    el.className = 'bcn-grid-name';
    el.href = '#';
    el.textContent = String(p.value ?? '');
    el.addEventListener('click', (e) => e.preventDefault());
    return el;
  }

  // Column set mirrors the live Progress Report view. Explicit (wider) widths so
  // the grid overflows the viewport and scrolls left/right, the way Beacon's
  // data-catalog grids do — no fit-to-width.
  const columnDefs: ColDef<ActionRow>[] = [
    { field: 'sourceDoc', headerName: 'Source Document', width: 260, cellRenderer: linkRenderer },
    { field: 'commitment', headerName: 'Commitment ID', width: 170, cellRenderer: linkRenderer },
    { field: 'name', headerName: 'Requirement Name', width: 340, cellRenderer: linkRenderer },
    { field: 'status', headerName: 'Status', width: 180, cellRenderer: statusRenderer, cellClass: 'bcn-grid-status-cell', filterValueGetter: (p) => statusMeta[p.data!.status]?.label },
    { field: 'requirementText', headerName: 'Requirement Text', width: 460 },
    { field: 'type', headerName: 'Requirement Type', width: 200 },
    { field: 'comments', headerName: 'Comment', width: 150, type: 'numericColumn', valueFormatter: (p) => (p.value ? String(p.value) : '') },
    { field: 'action', headerName: 'Action', width: 260 },
    { field: 'milestones', headerName: 'Milestone(s)', width: 200 },
    { field: 'resourceCategory', headerName: 'Resource Category', width: 240 },
  ];

  // ── Footer record counts (Total / Filtered) ───────────────────────────────
  const totalEl = document.getElementById('tt-total')!;
  const filteredEl = document.getElementById('tt-filtered')!;
  function updateCounts() {
    const total = rows.length;
    const displayed = api.getDisplayedRowCount();
    totalEl.textContent = String(total);
    if (displayed < total) {
      filteredEl.hidden = false;
      filteredEl.textContent = `Filtered Records: ${displayed}`;
    } else {
      filteredEl.hidden = true;
    }
  }

  // ── Faceted filters → AG Grid EXTERNAL filter ───────────────────────────────
  // The 7 dropdowns (Type · Phase · Commitment · List · Species · Construction
  // Activities · Milestones) plus the N/A toggle filter through one external pass.
  // Why external (not column setFilterModel): Species + Construction Activities are
  // NOT grid columns — they're derived per row from the enrich map — so a single
  // predicate filters row fields and derived facets the same way.
  type FacetKey = 'type' | 'phase' | 'commitment' | 'list' | 'species' | 'activity' | 'milestone';
  const facets: Record<FacetKey, string[]> = { type: [], phase: [], commitment: [], list: [], species: [], activity: [], milestone: [] };
  let naIncluded = false; // N/A toggle off ⇒ not-applicable rows hidden (prod default)
  const speciesOf = (r: ActionRow) => enrich[r.commitment]?.species ?? [];
  const activitiesOf = (r: ActionRow) => enrich[r.commitment]?.constructionActivities ?? [];
  const anyFacetActive = () => Object.values(facets).some((v) => v.length > 0);

  function doesExternalFilterPass(node: IRowNode<ActionRow>) {
    const r = node.data;
    if (!r) return true;
    if (!naIncluded && r.status === 'not-applicable') return false;
    if (facets.type.length && !facets.type.includes(r.type)) return false;
    if (facets.phase.length && !facets.phase.includes(r.phase)) return false;
    if (facets.commitment.length && !facets.commitment.includes(r.commitment)) return false;
    if (facets.list.length && !facets.list.includes(r.list)) return false;
    if (facets.milestone.length && !facets.milestone.includes(r.milestones)) return false;
    if (facets.species.length && !facets.species.some((s) => speciesOf(r).includes(s))) return false;
    if (facets.activity.length && !facets.activity.some((a) => activitiesOf(r).includes(a))) return false;
    return true;
  }

  const gridOptions: GridOptions<ActionRow> = {
    theme: beaconTheme,
    rowData: rows,
    columnDefs,
    defaultColDef: {
      sortable: true,
      resizable: true,
      filter: true,
      floatingFilter: false,
      suppressHeaderMenuButton: true,
      tooltipValueGetter: (p) => p.value,
    },
    tooltipShowDelay: 0,
    tooltipInteraction: true,
    tooltipShowMode: 'whenTruncated',
    isExternalFilterPresent: () => !naIncluded || anyFacetActive(),
    doesExternalFilterPass,
    onFirstDataRendered: updateCounts,
    onFilterChanged: updateCounts,
    onRowClicked: (e) => e.data && openDialog(e.data),
  };

  const gridDiv = document.getElementById('tracker-grid')!;
  const api: GridApi<ActionRow> = createGrid(gridDiv, gridOptions);

  // ── Grid header: esa-text-field → quick filter (+ clear-x). esa-text-field
  //    fires a composed 'change' (with detail.value) on every keystroke. ────────
  const search = document.getElementById('tt-search') as HTMLElement & { value: string };
  const searchClear = document.getElementById('tt-search-clear')!;
  search?.addEventListener('change', (e) => {
    const v = (e as CustomEvent).detail?.value ?? search.value ?? '';
    api.setGridOption('quickFilterText', v);
    searchClear.hidden = !v;
  });
  searchClear.addEventListener('click', () => {
    search.value = '';
    api.setGridOption('quickFilterText', '');
    searchClear.hidden = true;
  });

  // ── Faceted filter dropdowns (esa-filter-dropdown legos) ────────────────────
  const uniq = (xs: string[]) => [...new Set(xs.filter(Boolean))].sort();
  const toOpts = (xs: string[]) => xs.map((v) => ({ label: v, value: v }));
  const facetOptions: Record<FacetKey, string[]> = {
    type: uniq(rows.map((r) => r.type)),
    phase: uniq(rows.map((r) => r.phase)),
    commitment: uniq(rows.map((r) => r.commitment)),
    list: uniq(rows.map((r) => r.list)),
    species: uniq(rows.flatMap(speciesOf)),
    activity: uniq(rows.flatMap(activitiesOf)),
    milestone: uniq(rows.map((r) => r.milestones)),
  };
  const facetEls: Record<FacetKey, string> = {
    type: 'flt-type', phase: 'flt-phase', commitment: 'flt-commitment', list: 'flt-list',
    species: 'flt-species', activity: 'flt-activity', milestone: 'flt-milestone',
  };
  // esa-filter-dropdown: set `options` as a property; it emits `selection-change`
  // with detail.value = the selected-values array (multiple mode). Its selection
  // lives in reactive `_selected` state — reset that to clear it from outside.
  type FilterDropdownEl = HTMLElement & { options: { label: string; value: string }[]; _selected: string[] };
  const filterDropdowns = (Object.entries(facetEls) as [FacetKey, string][]).map(([key, id]) => {
    const el = document.getElementById(id) as FilterDropdownEl;
    el.options = toOpts(facetOptions[key]);
    el.addEventListener('selection-change', (e) => {
      facets[key] = ((e as CustomEvent).detail?.value as string[]) ?? [];
      api.onFilterChanged();
    });
    return el;
  });

  // ── N/A toggle (esa-switch-toggle) → include/exclude not-applicable rows ─────
  const naToggle = document.getElementById('tt-na') as HTMLElement & { checked: boolean };
  naToggle.addEventListener('change', (e) => {
    naIncluded = Boolean((e as CustomEvent).detail?.checked);
    api.onFilterChanged();
  });

  // ── Clear all (esa-filter-clear-button) → reset every facet + column filters ─
  document.getElementById('tt-clear-filters')!.addEventListener('esa-filter-clear', () => {
    (Object.keys(facets) as FacetKey[]).forEach((k) => (facets[k] = []));
    filterDropdowns.forEach((el) => (el._selected = []));
    api.setFilterModel(null);
    api.onFilterChanged();
  });

  // ── Download as CSV ────────────────────────────────────────────────────────
  document.getElementById('tt-download')!.addEventListener('click', () =>
    api.exportDataAsCsv({ fileName: '3600-alameda-requirements.csv' }),
  );

  // ── View toggle (esa-button-toggle lego; options set here, panes on change) ──
  const panes: Record<string, HTMLElement> = {
    grid: document.getElementById('view-grid')!,
    kanban: document.getElementById('view-kanban')!,
    timeline: document.getElementById('view-timeline')!,
  };
  const viewToggle = document.getElementById('tt-views') as HTMLElement & {
    options: { label: string; value: string; icon?: string }[];
    value: string;
  };
  // icon = inner Lucide SVG markup (esa-button-toggle's `icon` = esa-icon `paths`).
  viewToggle.options = [
    { label: 'Grid', value: 'grid', icon: "<rect width='18' height='18' x='3' y='3' rx='2'/><path d='M3 9h18'/><path d='M3 15h18'/><path d='M9 3v18'/><path d='M15 3v18'/>" },
    { label: 'Kanban', value: 'kanban', icon: "<path d='M3 3h18v18H3z'/><path d='M9 3v18'/><path d='M15 3v18'/>" },
    { label: 'Timeline', value: 'timeline', icon: "<path d='M8 2v4'/><path d='M16 2v4'/><rect width='18' height='18' x='3' y='4' rx='2'/><path d='M3 10h18'/>" },
  ];
  viewToggle.addEventListener('change', (e) => {
    const view = (e as CustomEvent).detail.value as string;
    Object.entries(panes).forEach(([key, el]) => (el.hidden = key !== view));
  });

  // ── Requirement dialog (esa-dialog shell + bcn-* section components) ─────────
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const fmtDue = (iso: string) => {
    if (!iso) return 'Not set';
    const [y, m, d] = iso.split('-').map(Number);
    return `${MONTHS[m - 1]} ${d}, ${y}`;
  };
  const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

  const rdDialog = $('rd') as HTMLElement & { open: boolean; showCloseButton: boolean };
  rdDialog.showCloseButton = false; // we render our own close (inside .bcn-dialog__head) so the header scrim covers it
  const rdAssignee = $('rd-assignee') as HTMLElement & { options: { value: string; label: string }[]; value: string };
  const rdDue = $('rd-due') as HTMLElement & { value: string };
  const rdNa = $('rd-na') as HTMLElement & { checked: boolean };
  const notifDue = document.querySelector('[data-bcn-notif-due]') as HTMLElement;

  rdAssignee.options = ['Unassigned', 'Maria Chen', 'James Okafor', 'Priya Patel', 'Daniel Reyes', 'Sarah Kim', 'Tom Alvarez', 'Nadia Hassan'].map(
    (n) => ({ value: n, label: n }),
  );

  // Status control → BcnStatusSelect (token-driven dots; controller flips state).
  const status = setupStatusSelect($('rd-status'));

  function openDialog(row: ActionRow) {
    $('rd-title').textContent = row.name.trim();
    $('rd-commitment').textContent = row.commitment;
    $('rd-type').textContent = row.type;
    status.setValue((row.status === 'not-applicable' ? 'not-started' : row.status) as StatusValue);
    rdAssignee.value = row.assignee;
    rdDue.value = row.dueDate;
    rdNa.checked = row.status === 'not-applicable';
    applyRequirement(referenceRoot, toReq(row));
    $('rd-exp-evidence').textContent = row.expectedEvidence;
    if (notifDue) notifDue.textContent = fmtDue(row.dueDate);
    setEvidenceOpen(false); // always start collapsed
    rdDialog.open = true;
  }

  // ── Evidence sheet (slides up over the body; never resizes the modal) ──
  const rdShell = $('rd-shell');
  const evTrigger = $('rd-evidence-trigger');
  const evDrawer = $('rd-evidence-drawer');
  function setEvidenceOpen(open: boolean) {
    rdShell.classList.toggle('is-evidence-open', open);
    rdDialog.classList.toggle('is-evidence-open', open); // host → drives header scrim
    evTrigger.setAttribute('aria-expanded', String(open));
    evDrawer.setAttribute('aria-hidden', String(!open));
  }
  evTrigger.addEventListener('click', () => setEvidenceOpen(!rdShell.classList.contains('is-evidence-open')));
  $('rd-evidence-close').addEventListener('click', () => setEvidenceOpen(false));
  $('rd-evidence-scrim').addEventListener('click', () => setEvidenceOpen(false));

  // ── Evidence-of-Compliance editor (esa-side-dialog lego) ──
  const eocEditor = $('rd-eoc-editor') as HTMLElement & { open: boolean; show(): void; close(): void };
  const editTitle = $('rd-edit-title') as HTMLElement & { value: string };
  const editTags = $('rd-edit-tags') as HTMLElement & { value: string[] };
  const editNotes = $('rd-edit-notes') as HTMLElement & { value: string };
  // esa-file-list (removable in the editor); files set as a property, never an attr.
  type FileListEl = HTMLElement & { files: { name: string; href?: string }[]; removable: boolean; downloadable: boolean };
  const editFiles = $('rd-edit-files') as FileListEl;
  editFiles.downloadable = false; // editor shows remove only (default-true bool → set via prop)

  // BcnEvidenceList owns the cards; the host only supplies the editor. onEdit hands
  // back the card's data (EvidenceCardData), which fills the side-dialog.
  function openEocEditor(data: EvidenceCardData) {
    editTitle.value = data.title;
    editNotes.value = data.notes;
    editTags.value = data.tags;
    editFiles.files = data.files.map((name) => ({ name }));
    eocEditor.show();
  }
  setupEvidenceList(document.querySelector('.bcn-evidence-list')!, { onEdit: openEocEditor });

  // esa-side-dialog owns its own backdrop-click + Esc + close-button → close().
  $('rd-eoc-editor-cancel').addEventListener('click', () => eocEditor.close());
  $('rd-eoc-editor-save').addEventListener('click', () => eocEditor.close());

  const closeDialog = () => (rdDialog.open = false);
  $('rd-close').addEventListener('click', closeDialog);
  $('rd-cancel').addEventListener('click', closeDialog);
  $('rd-save').addEventListener('click', closeDialog);

  // ── Source-document drawer (opened by the BcnRequirementReference trigger) ──
  const sourceDrawer = $('rd-source-drawer') as HTMLElement & { open: boolean; show(): void; close(): void };
  document.querySelectorAll('[data-bcn-source]').forEach((el) => el.addEventListener('click', () => sourceDrawer.show()));

  // Escape precedence editor → evidence sheet → dialog. Capture phase so we run
  // BEFORE esa-side-dialog's own Esc and stop the sheet/dialog from also closing.
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (sourceDrawer.open) {
      e.stopPropagation();
      sourceDrawer.close();
    } else if (eocEditor.open) {
      e.stopPropagation();
      eocEditor.close();
    } else if (rdShell.classList.contains('is-evidence-open')) {
      e.stopPropagation();
      setEvidenceOpen(false);
    }
  }, true);

  // ── Deep link: ?track=<row index> auto-opens the tracking dialog. Used by the
  //    streamlined Data Catalog Requirement detail page's "Track this Requirement" —
  //    tracking data + presentation live HERE, the catalog only links in. ──
  const trackParam = new URLSearchParams(location.search).get('track');
  if (trackParam !== null) {
    const trackRow = rows[Number(trackParam)];
    if (trackRow) openDialog(trackRow);
  }
</script>

<style>
  /* ═══════════════════════════════════════════════════════════════════════════
     PAGE-COMPOSITION GLUE ONLY. Every reusable block now lives in a bcn-* component
     (BcnStatusSelect / BcnKeyValue / BcnChangeLog / BcnNotifications
     / BcnEvidenceList / BcnRequirementReference / BcnDiscussion). What's left here is
     the grid chrome + the dialog SHELL (header / two-column stage / slide-up sheet) +
     the side-dialogs — geometry with no reusable-component home.
     ═══════════════════════════════════════════════════════════════════════════ */

  /* ═══ Filter bar — carded two-band (prod parity). Card shell + dividers + labels
     are composition glue; every control inside is a lego. ═══ */
  .bcn-filterbar {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-200);
    margin-bottom: var(--spacing-400);
  }
  .bcn-filterbar__top {
    display: flex;
    align-items: center;
    gap: var(--spacing-400);
    padding: var(--spacing-300) var(--spacing-400);
    flex-wrap: wrap;
  }
  .bcn-filterbar__bottom {
    display: flex;
    align-items: center;
    gap: var(--spacing-300);
    padding: var(--spacing-300) var(--spacing-400);
    border-top: 1px solid var(--color-border);
    flex-wrap: wrap;
  }
  .bcn-filterbar__group { display: inline-flex; align-items: center; gap: var(--spacing-300); }
  .bcn-filterbar__label {
    font-size: var(--type-size-150);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-tertiary);
    white-space: nowrap;
  }
  .bcn-filterbar__divider { width: 1px; align-self: stretch; background: var(--color-border); margin: 0 var(--spacing-100); }
  .bcn-filterbar__na { display: inline-flex; align-items: center; }
  .bcn-filterbar__search { margin-left: auto; display: inline-flex; align-items: center; gap: var(--spacing-150); min-width: 300px; }
  .bcn-filterbar__search :global(esa-text-field) { flex: 1; }
  .bcn-filterbar__clear { margin-left: auto; }

  /* ═══ View panes ═══ */
  .bcn-view-pane[hidden] {
    display: none;
  }

  /* ═══ AG Grid host — taller stage so ~10 more rows are visible at once (the
     min-height floor; the page scrolls past the fold on shorter laptops). ═══ */
  .tracker-grid {
    width: 100%;
    height: calc(100vh - 260px);
    min-height: 840px;
  }

  /* ═══ Beacon grid footer: download · record count ═══ */
  .table-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-400);
    padding: var(--spacing-200) var(--spacing-400);
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-top: 0;
    border-radius: 0 0 var(--radius-100) var(--radius-100);
  }
  .row-count-data {
    display: flex;
    align-items: center;
    gap: var(--spacing-400);
    font-size: var(--type-size-100);
    color: var(--color-text-secondary);
    font-variant-numeric: tabular-nums;
  }
  .filtered-rows-count { color: var(--color-text-tertiary); }
  .filtered-rows-count[hidden] { display: none; }

  /* ═══ AG Grid cell renderers (global — AG Grid injects cells outside scope) ═══ */
  :global(.ag-cell.bcn-grid-status-cell) { display: flex; align-items: center; }
  :global(.bcn-grid-chip) {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-150);
    padding: 1px var(--spacing-200);
    border-radius: var(--radius-100);
    font-size: 0.75rem;
    line-height: 1.5;
    font-weight: var(--font-weight-semibold);
    white-space: nowrap;
    background: color-mix(in srgb, var(--_chip) 16%, transparent);
    color: color-mix(in srgb, var(--_chip) 70%, #1a1a1a);
  }
  :global(.bcn-grid-chip__dot) {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--_chip);
    flex-shrink: 0;
  }
  :global(.bcn-grid-name) {
    color: var(--color-text-link);
    font-weight: var(--font-weight-regular);
    text-decoration: underline;
  }
  :global(.bcn-grid-name:hover) { color: var(--color-primary-hover); }

  /* ═══ Requirement dialog SHELL — esa-dialog + bcn-* section components compose
     the content; these rules are the header, the fixed-height dual-scroll stage,
     and the slide-up evidence sheet geometry. ═══ */
  .bcn-dialog__head { position: relative; flex: 1; display: flex; align-items: center; gap: var(--spacing-300); min-width: 0; padding: var(--spacing-500); background: var(--color-background); }
  .bcn-dialog__head-text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
  /* Close → EsaIconButton; wrapper just anchors it right, above the header scrim */
  .bcn-dialog__head-close { flex-shrink: 0; margin-left: auto; z-index: 1; }
  /* Header scrim — dims the whole header in sync with the body scrim when the sheet
     is open. Toggled by .is-evidence-open on the host. */
  .bcn-dialog__head-scrim { position: absolute; top: 0; left: 0; right: 0; bottom: -1px; z-index: 3; background: rgba(15, 23, 42, 0.18); opacity: 0; pointer-events: none; transition: opacity 280ms ease; }
  esa-dialog.is-evidence-open .bcn-dialog__head-scrim { opacity: 1; pointer-events: auto; }
  /* Title block: commitment badge stacked above, then a row of the Besley name +
     vertically-centered type badge. Badges keep the body font (no mono). */
  .bcn-dialog__title { display: flex; flex-direction: column; align-items: flex-start; gap: var(--spacing-100); margin: 0; min-width: 0; }
  .bcn-dialog__title-row { display: flex; align-items: center; flex-wrap: wrap; gap: var(--spacing-200); min-width: 0; }
  .bcn-dialog__title-name { font-family: var(--font-decorative); font-size: 1.5rem; font-weight: var(--font-weight-semibold); line-height: 1.2; color: var(--color-text-primary); }
  /* Commitment-ID badge — faithful port of Beacon .client-commitment-id (purple
     --color-commitment on a 12% tint), minus Roboto Mono. */
  .bcn-dialog__badge { flex-shrink: 0; padding: 0.125rem 0.375rem; border-radius: var(--radius-100); font-size: var(--type-size-100); font-weight: var(--font-weight-semibold); line-height: 1.4; white-space: nowrap; }
  .bcn-dialog__badge--commitment { color: var(--color-commitment); background: color-mix(in srgb, var(--color-commitment) 12%, white); }
  /* Besley glyphs sit low in their line box; nudge the type badge down to optically
     center it against the title's cap height. */
  .bcn-dialog__badge--type { color: var(--color-text-secondary); background: var(--color-surface-sunken); transform: translateY(2px); }

  /* Footer slot: left Add-Evidence ghost trigger + right action row (Cancel/Save). */
  .bcn-dialog__footer { display: flex; flex-direction: column; width: 100%; min-width: 0; gap: var(--spacing-300); }
  .bcn-dialog__foot { display: flex; align-items: center; justify-content: flex-end; gap: var(--spacing-200); padding: 0 var(--spacing-500); }
  .bcn-dialog__evidence-btn { margin-right: auto; }
  .bcn-dialog__evidence-btn-label { display: inline-flex; align-items: center; gap: var(--spacing-200); }

  /* Fixed-height stage: holds the scrolling two-col grid + the Evidence sheet overlay.
     Height is fixed so opening sections or the sheet never resizes the modal.
     Dialog height lives here (not inline) so a height media query can lift it on short
     laptop viewports; .bcn-dialog__shell inherits the same var to stay in sync. */
  #rd { --_dialog-max-height: 88vh; }
  @media (max-height: 860px) { #rd { --_dialog-max-height: 96vh; } }
  .bcn-dialog__shell { position: relative; height: calc(var(--_dialog-max-height, 88vh) - 13.5rem); min-height: 360px; overflow: hidden; }
  .bcn-dialog__grid { height: 100%; display: grid; grid-template-columns: minmax(0, 1fr) 480px; align-items: stretch; }
  /* Each column scrolls independently within the fixed-height stage. gap-700 = plenty
     of breathing room between the reference block and Discussion. */
  .bcn-dialog__main { overflow-y: auto; min-height: 0; padding: var(--spacing-500); display: flex; flex-direction: column; gap: var(--spacing-700); min-width: 0; }
  .bcn-dialog__side { overflow-y: auto; min-height: 0; padding: var(--spacing-500); border-left: 1px solid var(--color-border); display: flex; flex-direction: column; gap: var(--spacing-400); background: var(--color-background); min-width: 0; }

  /* Lists — page-level sidebar text links (esa-icon + <a>) inside an EsaCollapsible. */
  .bcn-lists { display: flex; flex-direction: column; align-items: flex-start; gap: var(--spacing-200); margin: 0; padding: 0; list-style: none; }
  .bcn-list-link { display: inline-flex; align-items: center; gap: var(--spacing-200); font-size: var(--form-font-size-md); font-weight: var(--font-weight-medium); color: var(--color-primary); text-decoration: none; }
  .bcn-list-link:hover { text-decoration: underline; }
  .bcn-list-link :global(.esa-icon) { color: var(--color-text-tertiary); flex-shrink: 0; }
  /* Not-Applicable toggle: a divider ties it to the Details section instead of floating. */
  .bcn-na-row { display: flex; align-items: center; padding-top: var(--spacing-400); border-top: 1px solid var(--color-border); }

  /* Source-document drawer (esa-side-dialog slotted body) */
  .bcn-source-pdf { height: calc(100vh - 10rem); min-height: 360px; border: 1px solid var(--color-border); border-radius: var(--radius-300); overflow: hidden; background: var(--color-surface-sunken); }
  .bcn-source-pdf__frame { width: 100%; height: 100%; border: 0; }
  .bcn-source-foot { display: flex; align-items: center; width: 100%; }

  /* ── Evidence slide-up SHEET (page owns the sheet; the cards are <BcnEvidenceList>) ── */
  .bcn-evidence-sheet-scrim { position: absolute; inset: 0; z-index: 4; background: rgba(15, 23, 42, 0.18); opacity: 0; pointer-events: none; transition: opacity 280ms ease; }
  .bcn-dialog__shell.is-evidence-open .bcn-evidence-sheet-scrim { opacity: 1; pointer-events: auto; }
  /* Slides up from the bottom of the stage, ~90% height. Bounded to the stage (a % of
     it, never a px floor) so esa-dialog's shadow panel (which clips overflow) never
     paints the sheet under the header. */
  .bcn-evidence-sheet { position: absolute; left: var(--spacing-500); right: var(--spacing-500); bottom: 0; z-index: 5; height: 90%; min-height: 0; display: flex; flex-direction: column; background: var(--color-surface); border-top: 1px solid var(--color-border); border-radius: var(--radius-400) var(--radius-400) 0 0; box-shadow: none; transform: translateY(100%); transition: transform 300ms cubic-bezier(0.32, 0.72, 0, 1), box-shadow 300ms ease; }
  .bcn-dialog__shell.is-evidence-open .bcn-evidence-sheet { transform: translateY(0); box-shadow: 0 -12px 32px rgba(0, 0, 0, 0.18); }
  .bcn-evidence-sheet__head { flex-shrink: 0; display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-300); padding: var(--spacing-400) var(--spacing-500); border-bottom: 1px solid var(--color-border); }
  .bcn-evidence-sheet__heading { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
  .bcn-evidence-sheet__title { display: inline-flex; align-items: center; gap: var(--spacing-200); font-size: var(--type-size-200); font-weight: var(--font-weight-semibold); color: var(--color-text-primary); }
  .bcn-evidence-sheet__expected { font-size: 0.8125rem; color: var(--color-text-tertiary); }
  .bcn-evidence-sheet__head-actions { display: flex; align-items: center; gap: var(--spacing-050); flex-shrink: 0; }
  .bcn-evidence-sheet__body { flex: 1; overflow-y: auto; padding: var(--spacing-500); display: flex; flex-direction: column; gap: var(--spacing-400); }

  /* ── Evidence-of-Compliance editor (esa-side-dialog lego) — only body composition is ours ── */
  .bcn-edit-files-field { display: flex; flex-direction: column; gap: var(--spacing-200); }
  .bcn-edit-files-field__label { font-size: 0.875rem; font-weight: var(--font-weight-medium); color: var(--color-text-primary); }
  .bcn-edit-foot { display: flex; gap: var(--spacing-300); justify-content: flex-end; }

  @media (max-width: 860px) {
    .bcn-dialog__grid { grid-template-columns: 1fr; }
    .bcn-dialog__side { border-left: 0; border-top: 1px solid var(--color-border); }
  }
</style>

<!-- Green radar icon in the H1 (PageLayout renders the icon outside this page's
     scope, so override globally; only this page loads this rule). -->
<style is:global>
  .page-layout__title h1 .esa-icon {
    color: var(--color-secondary) !important;
  }
</style>
```
