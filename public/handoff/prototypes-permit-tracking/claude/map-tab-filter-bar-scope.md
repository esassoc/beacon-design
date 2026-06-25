# Map tab — filter bar & scope

The Map tab is the hero (default of the 3-tab esa-tab-layout: Map · Data · Executive Summary, deep-linked #map/#data/#summary). Its filter bar carries two scope toggles — Paths (which of the four Phase-1 paths) and Status (which derived statuses) — plus a "Download KMZ" action. The scopes are GLOBAL to the tab: they filter the map AND every figure below it (mileage strip, clear-to-build timeline, insight cards), not just the map layers.

## Key decisions
- Two esa-button-toggle legos (Paths, Status), segmented, default "all". They are SCOPES, not layer switches — changing them re-derives the mileage strip percentages, the timeline rows, and the insight counts together, so every figure always agrees with the map.
- Download KMZ (esa-button, ghost/outline, download icon) writes a real .kmz (a store-only ZIP of doc.kml) in-browser, paths/segments colored by the committed map palette (scheme 0) so the Google-Earth overlay matches the app — shareable without a Beacon login (BCN-1364).
- There is deliberately NO "New Permit" action anywhere on the page: permits ARE source documents; this page is a projection of that data through the permitting lens, not their home.

## Gotchas
- The toggles scope downstream figures, so re-implementing them in Angular means recomputing the derived mileage/timeline/insights from the filtered segment set — not just toggling Leaflet layer visibility.
- KMZ color is KML aabbggr (byte-reversed hex, opaque ff), not #RRGGBB — keep the kmlColor() conversion.

## Done when
- Paths/Status default to "all"; narrowing either re-scopes the map and every figure below it; "Download KMZ" saves a real .kmz whose colors match the map palette.

## Markup
```html
<div class="map-filterbar">
  <div class="map-filterbar__group">
    <span class="map-filterbar__label">Paths</span>
    <esa-button-toggle id="path-toggle" value="all" size="md"></esa-button-toggle>
  </div>
  <span class="map-filterbar__divider"></span>
  <div class="map-filterbar__group">
    <span class="map-filterbar__label">Status</span>
    <esa-button-toggle id="status-toggle" value="all" size="md"></esa-button-toggle>
  </div>
  <span class="map-filterbar__actions">
    <span id="download-kmz"
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
          <span class="esa-button__label"> Download KMZ </span>
        </button>
      </span>
    </span>
  </span>
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
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
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
.map-filterbar {
  display: flex;
  align-items: center;
  gap: var(--spacing-400);
  flex-wrap: wrap;
  margin-bottom: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
}
.map-filterbar__group {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-300);
}
.map-filterbar__label {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.map-filterbar__divider {
  width: 1px;
  align-self: stretch;
  background: var(--color-border);
  margin: 0 var(--spacing-100);
}
.map-filterbar__actions {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-200);
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-text-inverse`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-padding-x-md`: .75rem _(component)_
- `--form-padding-x-sm`: .625rem _(component)_
- `--form-radius-md`: .25rem _(component)_
- `--form-radius-sm`: .25rem _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_

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

// ── src/components/bcn/BcnStatusChip.astro ──
---
// <BcnStatusChip> — the colored status chip used across Permit Tracking (both
// data tables, the segment dialog, the map drawer). Dot + tinted pill whose
// color is VALUE-driven: it reads the runtime --st-<status> custom property,
// so when the map's color-scheme switcher re-points --st-*, every chip on the
// page follows the lines. Same rationale as BcnStatusSelect's trigger dot —
// esa-badge/esa-pill have fixed variants and can't render a value-driven color.
//
// `status` is the token key (derived-segment or permit ladder — both map onto
// --st-*; `issued` shares --st-cleared, `not-required` is the fixed off-ladder
// neutral). `hex` is the SSR fallback for surfaces where --st-* isn't defined.
// Hosts that re-render the label/color at runtime hook .bcn-status-chip via
// data-* attributes they add themselves.
//
// bcn-lego-checked: no esa-* chip supports value-driven color (esa-badge and
// esa-pill are fixed-variant); checked Beacon (status pill is the same fixed
// set). bcn-status-chip is the reusable home, color via runtime --st-* tokens.

interface Props {
  /** Status key, e.g. 'submitted', 'cleared', 'issued', 'not-required'. */
  status: string;
  label: string;
  /** SSR/default color, used when --st-<status> is undefined. */
  hex: string;
}
const { status, label, hex } = Astro.props;
// issued advances a permit to the same color as a cleared segment.
const varKey = status === 'issued' ? 'cleared' : status;
---

<span class="bcn-status-chip" data-status={status} style={`--_chip: var(--st-${varKey}, ${hex});`}>
  <span class="bcn-status-chip__dot"></span>
  <span class="bcn-status-chip__label">{label}</span>
</span>

<style>
  .bcn-status-chip {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-150);
    padding: 2px var(--spacing-250);
    border-radius: var(--radius-full);
    font-size: var(--type-size-100);
    font-weight: var(--font-weight-semibold);
    white-space: nowrap;
    background: color-mix(in srgb, var(--_chip) 16%, transparent);
    color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
  }
  .bcn-status-chip__dot {
    width: 8px;
    height: 8px;
    border-radius: var(--radius-full);
    background: var(--_chip);
    flex-shrink: 0;
  }
</style>

// ── src/data/aws-routes.json ──
{"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {"id": "seg-eas", "name": "Easements Reach", "line": "Path 1", "phases": ["Day 2"], "contractor": "Fishel", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Walla Walla County, WA", "lengthFt": 28855, "sourceName": "Easements"}, "geometry": {"type": "LineString", "coordinates": [[-118.89292, 46.0998], [-118.89295, 46.09964], [-118.88951, 46.09913], [-118.86608, 46.09597], [-118.78671, 46.07225]]}}, {"type": "Feature", "properties": {"id": "seg-1a", "name": "Segment 1A", "line": "Path 1", "phases": ["Day 1", "Day 2"], "contractor": "IIG", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Umatilla County, OR", "lengthFt": 96142, "sourceName": "Untitled Path 1A"}, "geometry": {"type": "LineString", "coordinates": [[-119.26563, 45.91449], [-119.26563, 45.91349], [-119.26561, 45.91311], [-119.26567, 45.91263], [-119.26477, 45.91243], [-119.26356, 45.91223], [-119.26214, 45.912], [-119.261, 45.91181], [-119.25116, 45.91036], [-119.22525, 45.90639], [-119.1894, 45.90135], [-119.18183, 45.90133], [-119.17639, 45.90198], [-119.16636, 45.9036], [-119.16132, 45.90455], [-119.15749, 45.90575], [-119.14228, 45.9122], [-119.1374, 45.91413], [-119.13242, 45.91448], [-119.12945, 45.91552], [-119.12548, 45.91571], [-119.12245, 45.91577], [-119.12028, 45.91463], [-119.11811, 45.91357], [-119.1137, 45.91172], [-119.10505, 45.90859], [-119.09997, 45.90687], [-119.09739, 45.90598], [-119.09571, 45.90537], [-119.09464, 45.90491], [-119.09183, 45.90373], [-119.08974, 45.90285], [-119.08794, 45.90207], [-119.08413, 45.90044], [-119.0824, 45.89969], [-119.07585, 45.8969], [-119.07123, 45.89488], [-119.06997, 45.89432], [-119.06919, 45.89396], [-119.06892, 45.8938], [-119.06866, 45.89358], [-119.06845, 45.89334], [-119.06823, 45.89306], [-119.06799, 45.89271], [-119.06739, 45.89144], [-119.06676, 45.89004], [-119.06576, 45.88785], [-119.06547, 45.88708], [-119.06526, 45.8862], [-119.06469, 45.88318], [-119.06455, 45.88281], [-119.06449, 45.88251], [-119.06433, 45.88225], [-119.06411, 45.88201], [-119.06367, 45.88173], [-119.06311, 45.88153], [-119.06247, 45.88146], [-119.06193, 45.88146], [-119.06111, 45.88169], [-119.06022, 45.882], [-119.0593, 45.88232], [-119.05867, 45.88245], [-119.05795, 45.88241], [-119.05744, 45.88226], [-119.05539, 45.88168], [-119.05461, 45.88144], [-119.05392, 45.88131], [-119.05333, 45.8813], [-119.05283, 45.88138], [-119.05216, 45.88159], [-119.05116, 45.88198], [-119.05002, 45.88239], [-119.04905, 45.88262], [-119.04841, 45.8827], [-119.04773, 45.88266], [-119.04708, 45.88249], [-119.04634, 45.88223], [-119.04516, 45.88179], [-119.04422, 45.88144], [-119.04356, 45.88115], [-119.04275, 45.88082], [-119.04204, 45.88068], [-119.04148, 45.8806], [-119.04071, 45.88053], [-119.04006, 45.88048], [-119.03948, 45.88055], [-119.03869, 45.88088], [-119.03761, 45.88156], [-119.03712, 45.88174], [-119.03633, 45.88207], [-119.0354, 45.88242], [-119.03485, 45.88257], [-119.03418, 45.88265], [-119.03358, 45.88264], [-119.0329, 45.88248], [-119.03212, 45.88222], [-119.03047, 45.88172], [-119.02937, 45.88139], [-119.02857, 45.88125], [-119.02761, 45.88132], [-119.02672, 45.88152], [-119.02603, 45.88161], [-119.02533, 45.8821], [-119.0241, 45.88331], [-119.02326, 45.88407], [-119.02236, 45.88471], [-119.02145, 45.8853], [-119.02053, 45.88561], [-119.01929, 45.88593], [-119.0176, 45.88642], [-119.01684, 45.88653], [-119.01374, 45.88665], [-119.01227, 45.88688], [-119.01044, 45.88733], [-119.00908, 45.88741], [-119.00735, 45.88728], [-119.0057, 45.88704], [-119.00454, 45.88708], [-119.00341, 45.88733], [-119.00226, 45.888], [-119.0016, 45.88884], [-119.00095, 45.89012], [-118.99905, 45.89191], [-118.99807, 45.89219], [-118.99613, 45.89242], [-118.9946, 45.89268], [-118.9932, 45.89321], [-118.99187, 45.8938], [-118.99057, 45.89427], [-118.9896, 45.89444], [-118.98856, 45.89419], [-118.9869, 45.8934], [-118.98466, 45.89243], [-118.98326, 45.89157], [-118.98209, 45.89076], [-118.9811, 45.8902], [-118.98003, 45.88978], [-118.97818, 45.88941], [-118.97671, 45.88932], [-118.97573, 45.88938], [-118.9744, 45.88974], [-118.97354, 45.89003], [-118.97257, 45.89011], [-118.97144, 45.88995], [-118.97047, 45.88966], [-118.97016, 45.88949], [-118.9699, 45.88932], [-118.9698, 45.88906], [-118.96986, 45.88854], [-118.97006, 45.88793], [-118.97026, 45.88724], [-118.97031, 45.8866], [-118.97006, 45.88603], [-118.96961, 45.88549], [-118.96866, 45.88496], [-118.96742, 45.88462], [-118.96694, 45.88433], [-118.96658, 45.88391], [-118.96647, 45.88309], [-118.96636, 45.8821], [-118.96639, 45.88121], [-118.96648, 45.88071], [-118.96642, 45.88017], [-118.96606, 45.87965], [-118.96545, 45.87908], [-118.96427, 45.87858], [-118.96253, 45.87802], [-118.95884, 45.87702], [-118.9582, 45.87705], [-118.95738, 45.87705], [-118.95588, 45.87695], [-118.954, 45.87658], [-118.9518, 45.87609], [-118.94765, 45.87482], [-118.94658, 45.87448], [-118.94549, 45.87403], [-118.94527, 45.87388]]}}, {"type": "Feature", "properties": {"id": "seg-1b", "name": "Segment 1B", "line": "Path 1", "phases": ["Day 1", "Day 2"], "contractor": "IIG", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Umatilla County, OR", "lengthFt": 71774, "sourceName": "Untitled Path 1B"}, "geometry": {"type": "LineString", "coordinates": [[-118.94527, 45.87388], [-118.94495, 45.87415], [-118.94464, 45.87463], [-118.94423, 45.87508], [-118.94334, 45.87534], [-118.94233, 45.87556], [-118.94089, 45.87602], [-118.93955, 45.87638], [-118.93873, 45.87662], [-118.93837, 45.87694], [-118.93826, 45.87722], [-118.93833, 45.87791], [-118.93835, 45.87844], [-118.93836, 45.87912], [-118.93848, 45.87984], [-118.93839, 45.88056], [-118.93788, 45.88149], [-118.93749, 45.88245], [-118.93733, 45.88331], [-118.93711, 45.88448], [-118.93679, 45.8855], [-118.93639, 45.88636], [-118.93575, 45.88733], [-118.93515, 45.88781], [-118.93485, 45.88828], [-118.93428, 45.88951], [-118.93396, 45.88981], [-118.93365, 45.8901], [-118.93343, 45.89083], [-118.93319, 45.89162], [-118.93255, 45.89259], [-118.93172, 45.89349], [-118.93097, 45.89412], [-118.93029, 45.8946], [-118.92944, 45.89516], [-118.92803, 45.89646], [-118.92703, 45.89763], [-118.92659, 45.89833], [-118.92649, 45.89959], [-118.92661, 45.90048], [-118.92666, 45.90098], [-118.92642, 45.90142], [-118.92548, 45.90217], [-118.9246, 45.90292], [-118.92141, 45.90691], [-118.9205, 45.90845], [-118.91972, 45.90997], [-118.91819, 45.91305], [-118.91724, 45.91484], [-118.91667, 45.91582], [-118.91608, 45.91651], [-118.9152, 45.91785], [-118.91488, 45.91829], [-118.91459, 45.91913], [-118.91434, 45.91966], [-118.91383, 45.92019], [-118.91321, 45.92095], [-118.91297, 45.92136], [-118.91307, 45.92262], [-118.91307, 45.92294], [-118.91273, 45.92349], [-118.91223, 45.92421], [-118.9116, 45.92489], [-118.91112, 45.92534], [-118.91054, 45.926], [-118.91002, 45.92693], [-118.90987, 45.92764], [-118.90963, 45.92838], [-118.90914, 45.92881], [-118.90783, 45.92923], [-118.90611, 45.9297], [-118.90389, 45.93017], [-118.90161, 45.9303], [-118.8996, 45.93059], [-118.89627, 45.93231], [-118.89476, 45.9335], [-118.89262, 45.93528], [-118.89212, 45.93566], [-118.89095, 45.93667], [-118.88984, 45.93752], [-118.88872, 45.93838], [-118.88836, 45.93876], [-118.88776, 45.94018], [-118.88719, 45.941], [-118.88707, 45.94167], [-118.88658, 45.94211], [-118.88583, 45.94263], [-118.88436, 45.94439], [-118.8839, 45.94506], [-118.88328, 45.94532], [-118.88255, 45.94524], [-118.88172, 45.94492], [-118.88121, 45.94493], [-118.88077, 45.94543], [-118.88065, 45.94587], [-118.88063, 45.94644], [-118.88028, 45.94715], [-118.87967, 45.94774], [-118.87928, 45.94812], [-118.87847, 45.94845], [-118.87804, 45.94881], [-118.87783, 45.94907], [-118.87779, 45.94931], [-118.87824, 45.94958], [-118.87869, 45.94972], [-118.87917, 45.94974], [-118.88003, 45.94971], [-118.88073, 45.94972], [-118.88127, 45.94983], [-118.88223, 45.95004], [-118.88383, 45.95042], [-118.88558, 45.95093], [-118.88658, 45.9512], [-118.88832, 45.95138], [-118.8912, 45.95161], [-118.89292, 45.95156], [-118.89396, 45.95149], [-118.89494, 45.95135], [-118.89575, 45.95144], [-118.8963, 45.95169], [-118.89666, 45.95195], [-118.89711, 45.95256], [-118.89736, 45.95314], [-118.89811, 45.95358], [-118.89902, 45.9539], [-118.90003, 45.95429], [-118.90169, 45.95493], [-118.90181, 45.95522], [-118.90066, 45.95584], [-118.89752, 45.95792], [-118.89634, 45.95989], [-118.89458, 45.96129], [-118.89237, 45.96261], [-118.88953, 45.96343], [-118.87677, 45.97334], [-118.8732, 45.97577], [-118.86874, 45.98113], [-118.86316, 45.9854], [-118.86087, 45.987], [-118.85597, 45.99211], [-118.85499, 45.99686], [-118.8533, 45.99951], [-118.85279, 46.00179], [-118.85378, 46.00344], [-118.8547, 46.00412], [-118.85535, 46.00492], [-118.85557, 46.00997], [-118.85556, 46.01082], [-118.85616, 46.01355], [-118.85649, 46.01491], [-118.85684, 46.0231], [-118.85686, 46.0241]]}}, {"type": "Feature", "properties": {"id": "seg-1c", "name": "Segment 1C", "line": "Path 1", "phases": ["Day 2"], "contractor": "IIG", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Umatilla County, OR", "lengthFt": 105597, "sourceName": "Untitled Path 1C"}, "geometry": {"type": "LineString", "coordinates": [[-118.94527, 45.87388], [-118.94495, 45.87415], [-118.94464, 45.87463], [-118.94423, 45.87508], [-118.94334, 45.87534], [-118.94233, 45.87556], [-118.94089, 45.87602], [-118.93955, 45.87638], [-118.93873, 45.87662], [-118.93837, 45.87694], [-118.93826, 45.87722], [-118.93833, 45.87791], [-118.93835, 45.87844], [-118.93836, 45.87912], [-118.93848, 45.87984], [-118.93839, 45.88056], [-118.93788, 45.88149], [-118.93749, 45.88245], [-118.93733, 45.88331], [-118.93711, 45.88448], [-118.93679, 45.8855], [-118.93639, 45.88636], [-118.93575, 45.88733], [-118.93515, 45.88781], [-118.93485, 45.88828], [-118.93428, 45.88951], [-118.93396, 45.88981], [-118.93365, 45.8901], [-118.93343, 45.89083], [-118.93319, 45.89162], [-118.93255, 45.89259], [-118.93172, 45.89349], [-118.93097, 45.89412], [-118.93029, 45.8946], [-118.92944, 45.89516], [-118.92803, 45.89646], [-118.92703, 45.89763], [-118.92659, 45.89833], [-118.92649, 45.89959], [-118.92661, 45.90048], [-118.92666, 45.90098], [-118.92642, 45.90142], [-118.92548, 45.90217], [-118.9246, 45.90292], [-118.92141, 45.90691], [-118.9205, 45.90845], [-118.91972, 45.90997], [-118.91819, 45.91305], [-118.91724, 45.91484], [-118.91667, 45.91582], [-118.91608, 45.91651], [-118.9152, 45.91785], [-118.91488, 45.91829], [-118.91459, 45.91913], [-118.91434, 45.91966], [-118.91383, 45.92019], [-118.91321, 45.92095], [-118.91297, 45.92136], [-118.91307, 45.92262], [-118.91307, 45.92294], [-118.91273, 45.92349], [-118.91223, 45.92421], [-118.9116, 45.92489], [-118.91112, 45.92534], [-118.91054, 45.926], [-118.91002, 45.92693], [-118.90987, 45.92764], [-118.90963, 45.92838], [-118.90914, 45.92881], [-118.90783, 45.92923], [-118.90611, 45.9297], [-118.90389, 45.93017], [-118.90161, 45.9303], [-118.8996, 45.93059], [-118.89627, 45.93231], [-118.89476, 45.9335], [-118.89262, 45.93528], [-118.89212, 45.93566], [-118.89095, 45.93667], [-118.88984, 45.93752], [-118.88872, 45.93838], [-118.88836, 45.93876], [-118.88776, 45.94018], [-118.88719, 45.941], [-118.88707, 45.94167], [-118.88658, 45.94211], [-118.88583, 45.94263], [-118.88436, 45.94439], [-118.8839, 45.94506], [-118.88328, 45.94532], [-118.88255, 45.94524], [-118.88172, 45.94492], [-118.88121, 45.94493], [-118.88077, 45.94543], [-118.88065, 45.94587], [-118.88063, 45.94644], [-118.88028, 45.94715], [-118.87967, 45.94774], [-118.87928, 45.94812], [-118.87847, 45.94845], [-118.87804, 45.94881], [-118.87783, 45.94907], [-118.87779, 45.94931], [-118.87824, 45.94958], [-118.87869, 45.94972], [-118.87917, 45.94974], [-118.88003, 45.94971], [-118.88073, 45.94972], [-118.88127, 45.94983], [-118.88223, 45.95004], [-118.88383, 45.95042], [-118.88558, 45.95093], [-118.88658, 45.9512], [-118.88832, 45.95138], [-118.8912, 45.95161], [-118.89292, 45.95156], [-118.89396, 45.95149], [-118.89494, 45.95135], [-118.89575, 45.95144], [-118.8963, 45.95169], [-118.89666, 45.95195], [-118.89711, 45.95256], [-118.89736, 45.95314], [-118.89811, 45.95358], [-118.89902, 45.9539], [-118.90003, 45.95429], [-118.90169, 45.95493], [-118.90181, 45.95522], [-118.90066, 45.95584], [-118.89752, 45.95792], [-118.89634, 45.95989], [-118.89458, 45.96129], [-118.89237, 45.96261], [-118.88953, 45.96343], [-118.87677, 45.97334], [-118.8732, 45.97577], [-118.86874, 45.98113], [-118.86316, 45.9854], [-118.86087, 45.987], [-118.85597, 45.99211], [-118.85499, 45.99686], [-118.8533, 45.99951], [-118.85279, 46.00179], [-118.85378, 46.00344], [-118.8547, 46.00412], [-118.85535, 46.00492], [-118.85557, 46.00997], [-118.85556, 46.01082], [-118.85616, 46.01355], [-118.85649, 46.01491], [-118.85674, 46.02308], [-118.85693, 46.0241], [-118.85541, 46.02526], [-118.85403, 46.02588], [-118.85253, 46.02609], [-118.85145, 46.02692], [-118.85021, 46.02765], [-118.84991, 46.02796], [-118.84931, 46.02825], [-118.84888, 46.02834], [-118.84685, 46.02916], [-118.84579, 46.03036], [-118.84532, 46.03149], [-118.84537, 46.03182], [-118.8455, 46.03226], [-118.84486, 46.0322], [-118.84429, 46.03235], [-118.84368, 46.03228], [-118.84154, 46.03282], [-118.83813, 46.03319], [-118.8371, 46.03353], [-118.83414, 46.0349], [-118.83514, 46.0375], [-118.83529, 46.0389], [-118.835, 46.04043], [-118.83419, 46.04246], [-118.82896, 46.04448], [-118.81492, 46.04305], [-118.81117, 46.04135], [-118.80934, 46.04025], [-118.80636, 46.03858], [-118.80563, 46.03847], [-118.80575, 46.03935], [-118.8073, 46.04082], [-118.80707, 46.04116], [-118.80612, 46.0415], [-118.80469, 46.04224], [-118.80466, 46.04252], [-118.80586, 46.04294], [-118.80683, 46.04352], [-118.80758, 46.04417], [-118.80776, 46.04462], [-118.80358, 46.04905], [-118.79939, 46.05333], [-118.79645, 46.0537], [-118.7918, 46.06235], [-118.78992, 46.06467], [-118.78841, 46.06637], [-118.78696, 46.06692], [-118.78663, 46.06716], [-118.78504, 46.06863], [-118.78483, 46.06933], [-118.78554, 46.07103], [-118.78572, 46.07145], [-118.78676, 46.07229]]}}, {"type": "Feature", "properties": {"id": "seg-1e", "name": "Segment 1E", "line": "Path 1", "phases": ["Day 1"], "contractor": "Fishel", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Walla Walla County, WA", "lengthFt": 23820, "sourceName": "Untitled Path 1E"}, "geometry": {"type": "LineString", "coordinates": [[-118.90989, 46.05836], [-118.91038, 46.05809], [-118.91104, 46.05754], [-118.91145, 46.05725], [-118.91178, 46.0571], [-118.91211, 46.05696], [-118.91218, 46.05683], [-118.91216, 46.05671], [-118.91207, 46.05661], [-118.91193, 46.05654], [-118.91193, 46.05643], [-118.91159, 46.05643], [-118.91162, 46.05612], [-118.91155, 46.0559], [-118.91138, 46.0557], [-118.91112, 46.05552], [-118.90985, 46.05479], [-118.90919, 46.05437], [-118.90888, 46.05417], [-118.90823, 46.05394], [-118.9079, 46.05372], [-118.90665, 46.05251], [-118.90643, 46.05197], [-118.90662, 46.05063], [-118.9065, 46.04791], [-118.90639, 46.04773], [-118.90605, 46.04759], [-118.90576, 46.04748], [-118.90519, 46.04712], [-118.90498, 46.04675], [-118.90466, 46.04588], [-118.90435, 46.0456], [-118.90383, 46.04541], [-118.90342, 46.04546], [-118.90274, 46.04577], [-118.90235, 46.04587], [-118.9015, 46.04597], [-118.90081, 46.0461], [-118.9001, 46.04652], [-118.89979, 46.04686], [-118.89939, 46.04701], [-118.89889, 46.047], [-118.89843, 46.047], [-118.89777, 46.04687], [-118.89492, 46.04677], [-118.89456, 46.04665], [-118.89432, 46.04644], [-118.89431, 46.04592], [-118.89424, 46.04523], [-118.89408, 46.04503], [-118.89373, 46.04485], [-118.89339, 46.04472], [-118.89314, 46.04454], [-118.89297, 46.0442], [-118.89295, 46.04386], [-118.89303, 46.04333], [-118.89298, 46.04311], [-118.89286, 46.04268], [-118.89282, 46.04234], [-118.8928, 46.04146], [-118.8927, 46.04125], [-118.89222, 46.0409], [-118.89197, 46.04066], [-118.89171, 46.0404], [-118.8912, 46.03975], [-118.89105, 46.03957], [-118.89084, 46.03942], [-118.89051, 46.03926], [-118.88763, 46.03777], [-118.88691, 46.03747], [-118.88623, 46.03725], [-118.88536, 46.0371], [-118.87866, 46.03707], [-118.87762, 46.03703], [-118.87656, 46.03698], [-118.87499, 46.0368], [-118.87388, 46.03658], [-118.87301, 46.03635], [-118.87223, 46.03601], [-118.87138, 46.03559], [-118.87087, 46.03532], [-118.87029, 46.03499], [-118.86958, 46.03426], [-118.86933, 46.03389], [-118.86913, 46.03349], [-118.86841, 46.03187], [-118.8682, 46.0316], [-118.86781, 46.0315], [-118.86741, 46.03152], [-118.86689, 46.03165], [-118.86626, 46.03181], [-118.86591, 46.03185], [-118.86329, 46.032], [-118.86216, 46.03204], [-118.86126, 46.03203], [-118.86072, 46.03197], [-118.85939, 46.03187], [-118.85908, 46.03181], [-118.85876, 46.03165], [-118.85855, 46.03141], [-118.85843, 46.03119], [-118.85831, 46.03105], [-118.85812, 46.03089], [-118.85791, 46.03078], [-118.85753, 46.03056], [-118.85727, 46.03033], [-118.85713, 46.03015], [-118.85703, 46.02994], [-118.85699, 46.02974], [-118.85698, 46.02929], [-118.85686, 46.02407]]}}, {"type": "Feature", "properties": {"id": "seg-1f", "name": "Segment 1F", "line": "Path 1", "phases": ["Day 1"], "contractor": "Fishel", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Walla Walla County, WA", "lengthFt": 16733, "sourceName": "Untitled Path 1F"}, "geometry": {"type": "LineString", "coordinates": [[-118.90986, 46.05835], [-118.90991, 46.05873], [-118.90991, 46.05915], [-118.9085, 46.06284], [-118.90812, 46.06498], [-118.90775, 46.07703], [-118.90802, 46.07841], [-118.90835, 46.0808], [-118.91094, 46.09076], [-118.91261, 46.09999], [-118.91218, 46.09996], [-118.91157, 46.10003], [-118.91127, 46.10013], [-118.91106, 46.10035], [-118.91095, 46.10068], [-118.91104, 46.10101], [-118.9111, 46.10144], [-118.91116, 46.10187], [-118.91098, 46.1022], [-118.91066, 46.10243], [-118.91038, 46.10253], [-118.91015, 46.10247]]}}, {"type": "Feature", "properties": {"id": "seg-2a", "name": "Segment 2A", "line": "Path 2", "phases": ["Day 1"], "contractor": "Fishel", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Umatilla County, OR", "lengthFt": 252321, "sourceName": "Untitled Path 2A"}, "geometry": {"type": "LineString", "coordinates": [[-119.24851, 45.80575], [-119.24326, 45.80579], [-119.24212, 45.80611], [-119.2411, 45.80575], [-119.01751, 45.80675], [-119.01371, 45.80633], [-119.01153, 45.80618], [-119.00598, 45.80616], [-119.00495, 45.80633], [-119.00393, 45.80668], [-119.00229, 45.80699], [-118.99989, 45.80703], [-118.99886, 45.80699], [-118.9931, 45.80551], [-118.99161, 45.80476], [-118.99105, 45.80447], [-118.98916, 45.80375], [-118.98882, 45.80359], [-118.9885, 45.80339], [-118.98574, 45.8013], [-118.98532, 45.80109], [-118.98473, 45.80091], [-118.98427, 45.80084], [-118.98376, 45.80079], [-118.98322, 45.80081], [-118.98228, 45.80091], [-118.98168, 45.80088], [-118.98115, 45.80078], [-118.9803, 45.80031], [-118.97977, 45.79996], [-118.97896, 45.79968], [-118.97809, 45.79954], [-118.97742, 45.79954], [-118.9766, 45.79954], [-118.97356, 45.8018], [-118.97269, 45.80215], [-118.97151, 45.80257], [-118.97063, 45.80304], [-118.96883, 45.80413], [-118.96785, 45.80436], [-118.96437, 45.80474], [-118.95705, 45.80411], [-118.95646, 45.80399], [-118.95345, 45.80189], [-118.94993, 45.80018], [-118.94771, 45.80005], [-118.94668, 45.80015], [-118.94536, 45.79971], [-118.94416, 45.79912], [-118.94346, 45.79845], [-118.94254, 45.79777], [-118.94183, 45.79739], [-118.94102, 45.79725], [-118.94034, 45.79723], [-118.94001, 45.79718], [-118.93961, 45.79692], [-118.93935, 45.7966], [-118.93883, 45.7961], [-118.93837, 45.79588], [-118.9381, 45.7957], [-118.9374, 45.79502], [-118.93675, 45.79447], [-118.93563, 45.79362], [-118.93511, 45.79317], [-118.93418, 45.79274], [-118.93308, 45.79227], [-118.93226, 45.79195], [-118.9314, 45.79149], [-118.93081, 45.79098], [-118.93021, 45.79049], [-118.92984, 45.79019], [-118.92851, 45.78889], [-118.92783, 45.78851], [-118.92726, 45.78826], [-118.92677, 45.78807], [-118.92573, 45.78779], [-118.92539, 45.7876], [-118.92379, 45.78661], [-118.92226, 45.78589], [-118.92086, 45.78479], [-118.92016, 45.78408], [-118.91935, 45.78351], [-118.9187, 45.78323], [-118.91711, 45.78254], [-118.91681, 45.78236], [-118.9161, 45.7819], [-118.91523, 45.78148], [-118.90611, 45.77793], [-118.9041, 45.77694], [-118.90346, 45.77637], [-118.9024, 45.77574], [-118.90141, 45.77551], [-118.89995, 45.77552], [-118.89876, 45.77526], [-118.89594, 45.77407], [-118.89478, 45.77374], [-118.88963, 45.77194], [-118.88778, 45.77157], [-118.8854, 45.77135], [-118.88331, 45.77136], [-118.88088, 45.77164], [-118.87929, 45.772], [-118.87792, 45.77227], [-118.87685, 45.77215], [-118.87558, 45.77206], [-118.86966, 45.77247], [-118.86782, 45.77247], [-118.86336, 45.77236], [-118.86247, 45.77263], [-118.86179, 45.77307], [-118.86112, 45.77357], [-118.86076, 45.7741], [-118.85976, 45.77465], [-118.8594, 45.77562], [-118.85914, 45.77612], [-118.83874, 45.77595], [-118.80625, 45.77603], [-118.76596, 45.77612], [-118.76641, 45.79796], [-118.76637, 45.8843], [-118.75468, 45.88432], [-118.7543, 45.88481], [-118.75386, 45.88533], [-118.75348, 45.88567], [-118.7525, 45.88596], [-118.75169, 45.88611], [-118.75115, 45.8866], [-118.74953, 45.88636], [-118.74726, 45.88631], [-118.74601, 45.88691], [-118.74443, 45.88792], [-118.73463, 45.89355], [-118.7319, 45.89602], [-118.73092, 45.89684], [-118.7293, 45.89717], [-118.72784, 45.89667], [-118.72693, 45.89595], [-118.72618, 45.89538], [-118.72261, 45.89533], [-118.71691, 45.89737], [-118.71479, 45.89822], [-118.71425, 45.89867], [-118.71171, 45.89877], [-118.71057, 45.8991], [-118.70975, 45.89985], [-118.70804, 45.90247], [-118.70792, 45.90375], [-118.70796, 45.90518], [-118.70697, 45.90585], [-118.70567, 45.90667], [-118.70364, 45.90934], [-118.70254, 45.91072], [-118.70192, 45.91253], [-118.70043, 45.91526], [-118.69966, 45.91635], [-118.69884, 45.91717], [-118.69829, 45.91785], [-118.69746, 45.91965], [-118.69658, 45.92119], [-118.6958, 45.92284], [-118.69702, 45.92469], [-118.69755, 45.92623], [-118.69866, 45.92835], [-118.70154, 45.93141], [-118.70288, 45.93262], [-118.70605, 45.93471], [-118.70534, 45.93512], [-118.70394, 45.93508], [-118.70252, 45.9359], [-118.70089, 45.93607], [-118.69933, 45.9361], [-118.69861, 45.93678], [-118.69726, 45.93658], [-118.69575, 45.93638], [-118.69467, 45.93664], [-118.69454, 45.93803], [-118.69381, 45.95023], [-118.6881, 45.95561], [-118.6856, 45.95914], [-118.68226, 45.95974], [-118.68214, 45.96009], [-118.68287, 45.96084], [-118.68391, 45.96123], [-118.68429, 45.96145], [-118.68331, 45.96228], [-118.6811, 45.96304], [-118.67965, 45.96458], [-118.67852, 45.96584], [-118.67609, 45.96959], [-118.67488, 45.97113], [-118.67463, 45.97233], [-118.67403, 45.97423], [-118.67276, 45.97526], [-118.67008, 45.97696], [-118.66934, 45.97712], [-118.66579, 45.97909], [-118.66148, 45.98305], [-118.6589, 45.98427], [-118.65773, 45.98491], [-118.65676, 45.98491], [-118.65583, 45.98506], [-118.65286, 45.98723], [-118.65222, 45.98897], [-118.65225, 45.98978], [-118.65185, 45.99061], [-118.6513, 45.99126], [-118.64708, 45.99034], [-118.64658, 45.99042], [-118.64279, 45.99608], [-118.64268, 45.99845], [-118.64884, 45.99886], [-118.65194, 45.99921], [-118.65863, 46.00067], [-118.65871, 46.01648], [-118.66516, 46.01638], [-118.67238, 46.01857], [-118.6732, 46.01899], [-118.67423, 46.01912], [-118.67511, 46.0191], [-118.67525, 46.01933], [-118.67523, 46.02107], [-118.67494, 46.02181], [-118.67291, 46.02462], [-118.67239, 46.02511], [-118.67188, 46.02565], [-118.6715, 46.02602], [-118.67107, 46.02661], [-118.67086, 46.02716], [-118.6708, 46.02758], [-118.67086, 46.0284], [-118.67138, 46.03208]]}}, {"type": "Feature", "properties": {"id": "seg-2b", "name": "Segment 2B", "line": "Path 2", "phases": ["Day 1"], "contractor": "Fishel", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Walla Walla County, WA", "lengthFt": 98521, "sourceName": "Untitled Path 2B"}, "geometry": {"type": "LineString", "coordinates": [[-118.89002, 46.12472], [-118.89002, 46.12422], [-118.87867, 46.12425], [-118.84955, 46.12412], [-118.84944, 46.12388], [-118.84949, 46.12368], [-118.84969, 46.1232], [-118.84957, 46.12293], [-118.84908, 46.12282], [-118.84847, 46.12271], [-118.84794, 46.12265], [-118.84761, 46.12263], [-118.84713, 46.12271], [-118.84692, 46.12296], [-118.84698, 46.12336], [-118.84694, 46.12407], [-118.84699, 46.12426], [-118.84715, 46.12452], [-118.84725, 46.12467], [-118.8474, 46.12496], [-118.84757, 46.12542], [-118.84768, 46.12583], [-118.84775, 46.12638], [-118.84768, 46.12665], [-118.84387, 46.13293], [-118.84367, 46.13315], [-118.84301, 46.13386], [-118.842, 46.13533], [-118.84148, 46.13616], [-118.84093, 46.1369], [-118.84059, 46.13713], [-118.83842, 46.13872], [-118.73913, 46.13793], [-118.72635, 46.13759], [-118.72197, 46.13755], [-118.72222, 46.13358], [-118.72231, 46.13264], [-118.72245, 46.13237], [-118.72288, 46.13184], [-118.7231, 46.13156], [-118.72317, 46.13114], [-118.72301, 46.13078], [-118.72263, 46.13055], [-118.72233, 46.13044], [-118.71843, 46.13029], [-118.71723, 46.13033], [-118.71378, 46.13002], [-118.71343, 46.12979], [-118.71217, 46.12869], [-118.71202, 46.12853], [-118.7119, 46.1281], [-118.712, 46.12667], [-118.71185, 46.12639], [-118.70989, 46.12635], [-118.70653, 46.12618], [-118.70169, 46.12579], [-118.70113, 46.12575], [-118.70077, 46.12538], [-118.70086, 46.11053], [-118.70068, 46.10984], [-118.70104, 46.10795], [-118.7019, 46.10721], [-118.70257, 46.10685], [-118.70341, 46.1059], [-118.70404, 46.10481], [-118.70422, 46.10405], [-118.7041, 46.10246], [-118.70382, 46.10122], [-118.70364, 46.10034], [-118.70313, 46.09872], [-118.70303, 46.09801], [-118.70265, 46.09729], [-118.70216, 46.09667], [-118.70196, 46.09634], [-118.70186, 46.09582], [-118.70163, 46.09519], [-118.70138, 46.09491], [-118.70092, 46.09471], [-118.70003, 46.09462], [-118.69947, 46.09462], [-118.69914, 46.09438], [-118.69881, 46.09378], [-118.69858, 46.09237], [-118.69819, 46.09133], [-118.69817, 46.09076], [-118.69812, 46.08962], [-118.69828, 46.08901], [-118.69843, 46.08848], [-118.69833, 46.08792], [-118.69799, 46.08759], [-118.69663, 46.08679], [-118.69665, 46.08638], [-118.69652, 46.086], [-118.69623, 46.08589], [-118.69562, 46.08589], [-118.69466, 46.08625], [-118.69401, 46.08632], [-118.69383, 46.08618], [-118.69395, 46.08575], [-118.69437, 46.0834], [-118.69432, 46.08256], [-118.69418, 46.08202], [-118.69409, 46.08141], [-118.69375, 46.08054], [-118.69332, 46.07856], [-118.69318, 46.07786], [-118.69283, 46.07756], [-118.69233, 46.07741], [-118.69169, 46.07717], [-118.69131, 46.07704], [-118.69131, 46.07702], [-118.69055, 46.07652], [-118.69023, 46.07597], [-118.69025, 46.07538], [-118.69034, 46.07429], [-118.69031, 46.07375], [-118.68985, 46.07318], [-118.68925, 46.07183], [-118.68902, 46.07104], [-118.68871, 46.07049], [-118.68805, 46.06957], [-118.6878, 46.06888], [-118.68779, 46.06812], [-118.68741, 46.06767], [-118.6868, 46.06705], [-118.68659, 46.06684], [-118.68606, 46.06512], [-118.68475, 46.06227], [-118.68469, 46.06209], [-118.6838, 46.06134], [-118.68371, 46.06114], [-118.68346, 46.05984], [-118.68339, 46.05967], [-118.68327, 46.05952], [-118.68313, 46.05938], [-118.68273, 46.05914], [-118.68146, 46.05857], [-118.681, 46.05849], [-118.68068, 46.05846], [-118.68028, 46.05846], [-118.67995, 46.05845], [-118.67972, 46.05844], [-118.67956, 46.0583], [-118.67958, 46.05809], [-118.67959, 46.05784], [-118.67951, 46.0577], [-118.67956, 46.05758], [-118.67977, 46.05063], [-118.67994, 46.05045], [-118.68021, 46.05036], [-118.68054, 46.0503], [-118.68435, 46.05034], [-118.68475, 46.05013], [-118.6849, 46.05], [-118.68496, 46.04974], [-118.68496, 46.04719], [-118.68486, 46.04681], [-118.68486, 46.04661], [-118.68499, 46.04607], [-118.68488, 46.04553], [-118.68435, 46.04504], [-118.68372, 46.04474], [-118.68339, 46.04444], [-118.68332, 46.04398], [-118.68355, 46.04368], [-118.68419, 46.04324], [-118.68472, 46.04288], [-118.68493, 46.04261], [-118.68496, 46.04237], [-118.68498, 46.04164], [-118.67962, 46.04155], [-118.67446, 46.04098], [-118.67464, 46.03945], [-118.67459, 46.039], [-118.67461, 46.03569], [-118.67446, 46.0355], [-118.67413, 46.03544], [-118.67256, 46.03544], [-118.6714, 46.03205]]}}, {"type": "Feature", "properties": {"id": "seg-3a", "name": "Segment 3A", "line": "Path 3", "phases": ["Day 1"], "contractor": "Windwave", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Umatilla County, OR", "lengthFt": 10123, "sourceName": "Untitled Path 3A"}, "geometry": {"type": "LineString", "coordinates": [[-119.35206, 45.93433], [-119.35159, 45.93373], [-119.35076, 45.93369], [-119.34871, 45.93394], [-119.34264, 45.93449], [-119.34109, 45.93116], [-119.33478, 45.92325], [-119.33415, 45.92153], [-119.32517, 45.92318]]}}, {"type": "Feature", "properties": {"id": "seg-3b", "name": "Segment 3B", "line": "Path 3", "phases": ["Day 1"], "contractor": "Windwave", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Umatilla County, OR", "lengthFt": 57383, "sourceName": "Untitled Path 3B"}, "geometry": {"type": "LineString", "coordinates": [[-119.22235, 46.02532], [-119.22235, 46.02486], [-119.22368, 46.02305], [-119.22464, 46.02033], [-119.22513, 46.01926], [-119.22537, 46.01371], [-119.22533, 46.0118], [-119.22522, 46.01106], [-119.22523, 46.0068], [-119.22997, 46.00688], [-119.23145, 46.00559], [-119.23203, 46.00507], [-119.23268, 46.00452], [-119.23748, 46.00204], [-119.23808, 46.00161], [-119.23851, 46.00118], [-119.24115, 45.99783], [-119.24155, 45.99742], [-119.24202, 45.99712], [-119.24325, 45.99659], [-119.24432, 45.99602], [-119.24532, 45.9958], [-119.25076, 45.99375], [-119.2519, 45.99274], [-119.25251, 45.99139], [-119.25269, 45.98877], [-119.2529, 45.98611], [-119.25319, 45.98557], [-119.25459, 45.98472], [-119.25579, 45.98416], [-119.25639, 45.98345], [-119.25694, 45.98238], [-119.25704, 45.98114], [-119.25732, 45.98052], [-119.25756, 45.98024], [-119.25815, 45.97969], [-119.2588, 45.97927], [-119.25958, 45.97889], [-119.26027, 45.97854], [-119.26095, 45.97804], [-119.26157, 45.97722], [-119.26172, 45.97649], [-119.26185, 45.9759], [-119.26193, 45.97531], [-119.26222, 45.97484], [-119.26255, 45.97439], [-119.26321, 45.97383], [-119.2642, 45.9733], [-119.26517, 45.97285], [-119.26582, 45.9723], [-119.26624, 45.97187], [-119.26661, 45.97134], [-119.26663, 45.97084], [-119.26671, 45.97006], [-119.26687, 45.96962], [-119.26706, 45.96927], [-119.26726, 45.96896], [-119.26768, 45.96846], [-119.26816, 45.96815], [-119.26869, 45.96788], [-119.26926, 45.96767], [-119.26999, 45.96743], [-119.27046, 45.96734], [-119.2967, 45.9678], [-119.29762, 45.96786], [-119.30495, 45.96639], [-119.30657, 45.96623], [-119.30767, 45.96626], [-119.30861, 45.96637], [-119.30943, 45.96655], [-119.31043, 45.96685], [-119.31126, 45.96714], [-119.31233, 45.96743], [-119.3131, 45.96751], [-119.31409, 45.96741], [-119.31487, 45.96729], [-119.31555, 45.96703], [-119.31651, 45.96682], [-119.32217, 45.96591], [-119.323, 45.96564], [-119.32423, 45.96519], [-119.32886, 45.96048], [-119.32908, 45.95992], [-119.32943, 45.95746], [-119.3293, 45.95639], [-119.3291, 45.95543], [-119.32851, 45.95315], [-119.3326, 45.94579], [-119.33396, 45.94577], [-119.34131, 45.94404], [-119.34293, 45.9439], [-119.3438, 45.9439], [-119.35133, 45.94463], [-119.35138, 45.9396], [-119.35144, 45.93743], [-119.35115, 45.93594], [-119.35096, 45.93482], [-119.35138, 45.93439], [-119.35206, 45.93433]]}}, {"type": "Feature", "properties": {"id": "seg-3c", "name": "Segment 3C", "line": "Path 3", "phases": ["Day 1"], "contractor": "Windwave", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Benton County, WA", "lengthFt": 101167, "sourceName": "Untitled Path 3C"}, "geometry": {"type": "LineString", "coordinates": [[-119.22228, 46.02534], [-119.18131, 46.02396], [-119.16478, 46.02416], [-119.15506, 46.02402], [-119.14358, 46.02375], [-119.14127, 46.0235], [-119.133, 46.02354], [-119.12033, 46.02364], [-119.12001, 46.03023], [-119.11979, 46.03123], [-119.11913, 46.03221], [-119.11751, 46.0335], [-119.11141, 46.03831], [-119.10958, 46.04002], [-119.1092, 46.04111], [-119.10925, 46.04168], [-119.10904, 46.06054], [-119.10937, 46.06711], [-119.0391, 46.06663], [-119.03699, 46.06784], [-119.03628, 46.0689], [-119.03508, 46.06987], [-119.03436, 46.07083], [-119.0342, 46.07153], [-119.03443, 46.07183], [-119.03493, 46.07211], [-119.03521, 46.07229], [-119.03535, 46.07252], [-119.03519, 46.0863], [-119.03525, 46.08715], [-119.03534, 46.08745], [-119.035, 46.08791], [-119.03453, 46.08838], [-119.0345, 46.08866], [-119.03449, 46.08886], [-119.03467, 46.08911], [-119.03498, 46.08959], [-119.03501, 46.0899], [-119.03497, 46.09047], [-119.03468, 46.10114], [-119.03348, 46.10399], [-119.0329, 46.10524], [-119.03256, 46.10587], [-119.03178, 46.10659], [-119.03112, 46.10708], [-119.03052, 46.10765], [-119.03043, 46.10781], [-119.03031, 46.10826], [-119.03029, 46.10882], [-119.03022, 46.10937], [-119.0302, 46.10977], [-119.03023, 46.10996], [-119.03045, 46.11009], [-119.03088, 46.11027], [-119.03602, 46.11217], [-119.03677, 46.11281], [-119.03876, 46.11417], [-119.04012, 46.11508], [-119.04147, 46.11592], [-119.0426, 46.1165], [-119.04327, 46.11689], [-119.04368, 46.1175], [-119.04412, 46.11835], [-119.04439, 46.11865], [-119.04457, 46.11942], [-119.04453, 46.12008], [-119.04439, 46.12056], [-119.04407, 46.1211], [-119.0439, 46.12145], [-119.0438, 46.12185], [-119.04377, 46.12209], [-119.0442, 46.12275], [-119.04328, 46.12313], [-119.04249, 46.12372], [-119.04184, 46.12435], [-119.04121, 46.12538], [-119.04067, 46.12674], [-119.04019, 46.12789], [-119.0399, 46.12846], [-119.03955, 46.12896], [-119.03897, 46.12939], [-119.03834, 46.12982], [-119.03759, 46.13022], [-119.03643, 46.13097], [-119.03539, 46.13225], [-119.03505, 46.13304], [-119.03491, 46.13414], [-119.03465, 46.13552], [-119.03457, 46.13661], [-119.03428, 46.1372], [-119.0339, 46.13771], [-119.03347, 46.13802], [-119.0338, 46.13874], [-119.03394, 46.14832], [-119.03392, 46.15445], [-119.03385, 46.16139], [-119.03384, 46.1684]]}}, {"type": "Feature", "properties": {"id": "seg-3d", "name": "Segment 3D", "line": "Path 3", "phases": ["Day 1"], "contractor": "Windwave", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Benton County, WA", "lengthFt": 6384, "sourceName": "Untitled Path 3D"}, "geometry": {"type": "LineString", "coordinates": [[-119.03384, 46.1684], [-119.03395, 46.16848], [-119.03394, 46.16854], [-119.03394, 46.1701], [-119.0339, 46.17208], [-119.03391, 46.17341], [-119.0337, 46.17342], [-119.03366, 46.17544], [-119.03368, 46.17739], [-119.03366, 46.18285], [-119.03368, 46.18375], [-119.03374, 46.18411], [-119.03379, 46.18422], [-119.03388, 46.18434], [-119.03421, 46.18451], [-119.03444, 46.18458], [-119.03499, 46.1847], [-119.03568, 46.18488]]}}, {"type": "Feature", "properties": {"id": "seg-3e", "name": "Segment 3E", "line": "Path 3", "phases": ["Day 1"], "contractor": "Windwave", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Benton County, WA", "lengthFt": 56814, "sourceName": "Untitled Path 3E"}, "geometry": {"type": "LineString", "coordinates": [[-119.03568, 46.18488], [-119.04411, 46.18743], [-119.04722, 46.188], [-119.05341, 46.18905], [-119.0544, 46.18936], [-119.05533, 46.18983], [-119.05667, 46.19129], [-119.05748, 46.19259], [-119.05851, 46.19353], [-119.05915, 46.19394], [-119.06011, 46.19427], [-119.06092, 46.19442], [-119.07554, 46.1946], [-119.07546, 46.20181], [-119.09308, 46.20187], [-119.09424, 46.20237], [-119.09544, 46.20291], [-119.09615, 46.20331], [-119.09655, 46.20354], [-119.0966, 46.20371], [-119.09652, 46.21047], [-119.08673, 46.21785], [-119.08565, 46.21998], [-119.08011, 46.21851], [-119.07961, 46.21976], [-119.07802, 46.2222], [-119.07641, 46.22418], [-119.07626, 46.22569], [-119.07633, 46.22662], [-119.0447, 46.22631], [-119.04079, 46.22634], [-119.0391, 46.22678], [-119.0384, 46.22727], [-119.02676, 46.21919], [-119.01722, 46.2128], [-119.01496, 46.21126], [-119.01351, 46.21038], [-119.01451, 46.20972], [-119.01308, 46.20867], [-119.01344, 46.20784], [-119.01357, 46.20715], [-119.0134, 46.20666], [-119.01325, 46.20625], [-119.01329, 46.2052], [-119.01333, 46.2039], [-119.01137, 46.20395], [-119.01092, 46.20414], [-119.01026, 46.20416], [-119.00907, 46.20396], [-119.00839, 46.20351], [-119.0075, 46.20296], [-119.00407, 46.20069], [-119.00044, 46.19809], [-119.00024, 46.19786], [-119.00013, 46.19756], [-119.00011, 46.19697]]}}, {"type": "Feature", "properties": {"id": "seg-3f", "name": "Segment 3F", "line": "Path 3", "phases": ["Day 1"], "contractor": "Windwave", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Walla Walla County, WA", "lengthFt": 44359, "sourceName": "Untitled Path 3F"}, "geometry": {"type": "LineString", "coordinates": [[-119.00012, 46.19697], [-119.00012, 46.19672], [-119.0001, 46.19649], [-118.99993, 46.19623], [-118.99965, 46.19596], [-118.99926, 46.19588], [-118.99889, 46.19586], [-118.99679, 46.19583], [-118.99533, 46.19583], [-118.995, 46.19582], [-118.99467, 46.19578], [-118.9944, 46.19565], [-118.99408, 46.19545], [-118.99146, 46.19366], [-118.98877, 46.19179], [-118.98478, 46.18902], [-118.97049, 46.17911], [-118.96786, 46.17732], [-118.96672, 46.17654], [-118.96634, 46.176], [-118.96582, 46.17527], [-118.96558, 46.17486], [-118.96525, 46.17455], [-118.96498, 46.17467], [-118.96436, 46.17506], [-118.96421, 46.17505], [-118.96388, 46.17484], [-118.96205, 46.17358], [-118.9605, 46.17253], [-118.95975, 46.17203], [-118.95831, 46.17107], [-118.95747, 46.17049], [-118.95556, 46.16923], [-118.95422, 46.16829], [-118.9538, 46.16855], [-118.95246, 46.16758], [-118.94776, 46.16426], [-118.94589, 46.16264], [-118.94393, 46.16064], [-118.94306, 46.15958], [-118.94212, 46.15818], [-118.94138, 46.15682], [-118.94028, 46.15432], [-118.93724, 46.14527], [-118.93578, 46.14029], [-118.93522, 46.13845], [-118.93611, 46.13846], [-118.93472, 46.13437], [-118.93321, 46.13026], [-118.93166, 46.12624], [-118.93114, 46.12509], [-118.93045, 46.12374], [-118.92879, 46.1212], [-118.9272, 46.11901], [-118.92525, 46.1168], [-118.92341, 46.11482], [-118.91975, 46.1111], [-118.9185, 46.10958], [-118.91403, 46.10436], [-118.91372, 46.10379], [-118.91334, 46.10303], [-118.91292, 46.10011], [-118.91261, 46.09999]]}}, {"type": "Feature", "properties": {"id": "seg-3g", "name": "Segment 3G", "line": "Path 3", "phases": ["Day 1"], "contractor": "Windwave", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Walla Walla County, WA", "lengthFt": 15292, "sourceName": "Untitled Path 3G"}, "geometry": {"type": "LineString", "coordinates": [[-118.93522, 46.13854], [-118.93424, 46.13858], [-118.88929, 46.13867], [-118.88944, 46.12858]]}}, {"type": "Feature", "properties": {"id": "seg-3h", "name": "Segment 3H", "line": "Path 3", "phases": ["Risk Mitigation"], "contractor": "Windwave", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Walla Walla County, WA", "lengthFt": 51003, "sourceName": "Untitled Path 3H"}, "geometry": {"type": "LineString", "coordinates": [[-119.03571, 46.06932], [-119.03539, 46.06965], [-119.03506, 46.06955], [-119.03526, 46.06905], [-119.03534, 46.06835], [-119.03537, 46.06378], [-119.03553, 46.05833], [-119.0356, 46.05482], [-119.03561, 46.05368], [-119.03562, 46.05354], [-119.03573, 46.05332], [-119.03599, 46.053], [-119.03639, 46.05232], [-119.0365, 46.052], [-119.03655, 46.05177], [-119.03654, 46.05134], [-119.0365, 46.05106], [-119.03643, 46.05079], [-119.03628, 46.05053], [-119.03605, 46.05034], [-119.03587, 46.05021], [-119.03574, 46.05008], [-119.03567, 46.04993], [-119.03565, 46.04979], [-119.03567, 46.04961], [-119.03575, 46.04928], [-119.03581, 46.04905], [-119.03584, 46.04886], [-119.03578, 46.04855], [-119.03573, 46.04826], [-119.03573, 46.0478], [-119.03578, 46.04657], [-119.03593, 46.04184], [-119.03599, 46.03748], [-119.03582, 46.03758], [-119.02704, 46.03747], [-119.02659, 46.0374], [-119.02598, 46.03725], [-119.02545, 46.037], [-119.02473, 46.03637], [-119.02447, 46.03619], [-119.02417, 46.03609], [-119.02382, 46.03604], [-119.0235, 46.03605], [-119.02308, 46.03628], [-119.02228, 46.03684], [-119.02175, 46.03729], [-119.02117, 46.03799], [-119.02054, 46.03854], [-119.01951, 46.03918], [-119.01865, 46.03973], [-119.01802, 46.04018], [-119.01674, 46.04119], [-119.01585, 46.04187], [-119.01492, 46.04258], [-119.01431, 46.04312], [-119.01412, 46.04337], [-119.01394, 46.04367], [-119.01384, 46.04401], [-119.01381, 46.04431], [-119.0139, 46.04462], [-119.01411, 46.0449], [-119.01429, 46.04511], [-119.01444, 46.04532], [-119.01455, 46.0456], [-119.01447, 46.04589], [-119.0143, 46.04613], [-119.01356, 46.04686], [-119.01335, 46.04715], [-119.01322, 46.04756], [-119.01296, 46.04922], [-119.01297, 46.04966], [-119.01322, 46.05044], [-119.01349, 46.05113], [-119.01373, 46.05145], [-119.01438, 46.05219], [-119.01451, 46.05244], [-119.01455, 46.05278], [-119.01455, 46.05429], [-119.01457, 46.05609], [-119.01458, 46.05752], [-119.01456, 46.05818], [-119.0145, 46.05843], [-119.01427, 46.05881], [-119.0139, 46.05918], [-119.01372, 46.05934], [-119.01135, 46.06148], [-119.01007, 46.06264], [-119.00885, 46.06375], [-119.00736, 46.06509], [-119.00646, 46.06593], [-119.00619, 46.0662], [-119.00598, 46.06656], [-119.00595, 46.06691], [-119.00597, 46.0678], [-119.00594, 46.06814], [-119.00538, 46.07022], [-119.00518, 46.07072], [-119.00498, 46.07104], [-119.0046, 46.07137], [-119.00409, 46.07171], [-119.00352, 46.07223], [-119.00314, 46.07261], [-119.00278, 46.07288], [-119.00219, 46.0731], [-119.00166, 46.07323], [-119.00128, 46.07322], [-119.00096, 46.07317], [-119.00051, 46.07305], [-119.00011, 46.07301], [-118.99977, 46.07309], [-118.99958, 46.07322], [-118.99951, 46.07332], [-118.9995, 46.07347], [-118.99953, 46.07361], [-118.99977, 46.07413], [-118.99981, 46.07436], [-118.99976, 46.07453], [-118.9996, 46.07471], [-118.99939, 46.07484], [-118.99919, 46.07492], [-118.9985, 46.07507], [-118.99811, 46.0751], [-118.99748, 46.07508], [-118.99679, 46.07504], [-118.99577, 46.07499], [-118.9952, 46.07505], [-118.99469, 46.07521], [-118.9941, 46.07546], [-118.99363, 46.07562], [-118.99336, 46.07567], [-118.9913, 46.07591], [-118.99051, 46.07599], [-118.98989, 46.07602], [-118.98955, 46.07599], [-118.98928, 46.07596], [-118.98893, 46.07589], [-118.98856, 46.07577], [-118.98784, 46.07553], [-118.98639, 46.07505], [-118.98563, 46.07479], [-118.98467, 46.07447], [-118.98391, 46.07423], [-118.98334, 46.07403], [-118.98275, 46.07386], [-118.98241, 46.07383], [-118.98204, 46.07384], [-118.98159, 46.07396], [-118.98121, 46.07414], [-118.98081, 46.07442], [-118.9805, 46.07467], [-118.9802, 46.0751], [-118.98005, 46.07536], [-118.97971, 46.0763], [-118.97867, 46.07918], [-118.97765, 46.08187], [-118.97732, 46.08162], [-118.9736, 46.07906], [-118.97237, 46.0782], [-118.97064, 46.07697], [-118.96935, 46.07612], [-118.96807, 46.07524], [-118.96688, 46.07442], [-118.96307, 46.0718], [-118.96154, 46.07076], [-118.96061, 46.07022], [-118.96033, 46.07002], [-118.95988, 46.06956], [-118.95973, 46.06944], [-118.95959, 46.06937], [-118.95948, 46.06933], [-118.95928, 46.06931], [-118.95892, 46.06931], [-118.9581, 46.06938], [-118.95689, 46.06949], [-118.95552, 46.06964], [-118.95509, 46.06963], [-118.95451, 46.06958], [-118.95399, 46.06951], [-118.95382, 46.06946], [-118.95362, 46.06932], [-118.95342, 46.06912], [-118.95299, 46.0686], [-118.9529, 46.06845], [-118.95276, 46.06744], [-118.95266, 46.06675], [-118.95247, 46.0653], [-118.95238, 46.06451], [-118.95247, 46.06427], [-118.95275, 46.06412], [-118.95301, 46.06399], [-118.95319, 46.06384], [-118.9533, 46.06365], [-118.95333, 46.06343], [-118.9533, 46.06315], [-118.95315, 46.06281], [-118.95272, 46.06274]]}}, {"type": "Feature", "properties": {"id": "seg-3i", "name": "Segment 3I", "line": "Path 3", "phases": ["Risk Mitigation"], "contractor": "Windwave", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Walla Walla County, WA", "lengthFt": 9118, "sourceName": "Untitled Path 3I"}, "geometry": {"type": "LineString", "coordinates": [[-118.95273, 46.06275], [-118.91979, 46.05853], [-118.91984, 46.05678]]}}, {"type": "Feature", "properties": {"id": "seg-3j", "name": "Segment 3J", "line": "Path 3", "phases": ["Risk Mitigation"], "contractor": "Windwave", "buildSpec": "2x2 + 2x7FP", "jurisdiction": "Walla Walla County, WA", "lengthFt": 1985, "sourceName": "Untitled Path 3J"}, "geometry": {"type": "LineString", "coordinates": [[-118.91984, 46.05678], [-118.9143, 46.05667], [-118.91365, 46.05671], [-118.91312, 46.0568], [-118.91253, 46.05693], [-118.91228, 46.05702], [-118.9121, 46.05696]]}}, {"type": "Feature", "properties": {"id": "seg-4a", "name": "Segment 4A", "line": "Path 4", "phases": ["Day 1"], "contractor": "Fishel", "buildSpec": "12x2 + 2x7FP", "jurisdiction": "Walla Walla County, WA", "lengthFt": 12205, "sourceName": "Untitled Path 4A"}, "geometry": {"type": "LineString", "coordinates": [[-118.90479, 46.10174], [-118.90481, 46.10112], [-118.9076, 46.10137], [-118.91009, 46.1024], [-118.90997, 46.11619], [-118.90992, 46.11668], [-118.90964, 46.11717], [-118.90959, 46.1177], [-118.90867, 46.11873], [-118.90846, 46.11894], [-118.90617, 46.12034], [-118.9055, 46.12089], [-118.90335, 46.12324], [-118.90308, 46.12358], [-118.90312, 46.12365], [-118.90302, 46.12377], [-118.90299, 46.1238], [-118.90295, 46.12371], [-118.9027, 46.1236], [-118.90253, 46.12361], [-118.9016, 46.12396], [-118.90124, 46.12402], [-118.90099, 46.12404], [-118.90067, 46.1241], [-118.89594, 46.12418], [-118.89594, 46.1249]]}}]}

// ── src/data/map-fixture.ts ──
// ─────────────────────────────────────────────────────────────────────────────
// Permit Tracking fixture (BCN-1266 map + data, formerly Epics A/B BCN-1266/1267).
//
// Three layers: Permits, Segments, derived status — for the AWS pre-permit
// tracking demo. Permits are REAL (AWS plan-of-work, WA + OR agencies).
// Segments are REAL geometry: the four Phase-1 paths from the client KMZ
// ("Phase-1 05.27 — Paths 1_2_3_4"), extracted by scripts/kmz-to-routes.py
// into ./aws-routes.json (19 deduped segments, ~200 route-miles, Wallula WA →
// Umatilla OR). Which permits gate which segment is hand-curated below — the
// KMZ has no permit data.
//
// Nothing here is stored "derived" — segment status and clear-to-build date are
// COMPUTED from the permits covering each segment (see helpers at the bottom).
// ─────────────────────────────────────────────────────────────────────────────
import routesJson from './aws-routes.json';

/** Permit acquisition lifecycle (ordinal = advancement). `not-required` is off-ladder. */
export type PermitStatus =
  | 'not-started'
  | 'in-preparation'
  | 'submitted'
  | 'under-review'
  | 'issued'
  | 'not-required';

export type AgencyLevel = 'Federal' | 'State' | 'Local';

export interface Permit {
  id: string;
  name: string;
  agency: string;
  agencyLevel: AgencyLevel;
  status: PermitStatus;
  submittedDate?: string;
  estimatedApprovalDate?: string;
  actualApprovalDate?: string;
}

export interface Segment {
  id: string;
  name: string;
  /** The route line — 'Path 1' … 'Path 4' (from the KMZ Routes folders). */
  line: string;
  /** Build phases this segment appears in ('Day 1', 'Day 2', 'Risk Mitigation'). */
  phases: string[];
  /** Proposed build contractor from the KMZ subfolder (Fishel / IIG / Windwave). */
  contractor: string;
  jurisdiction: string;
  lengthFt: number;
  /** Ordered [lat, lng] vertices for the Leaflet polyline. */
  geometry: [number, number][];
  /** Permits that gate construction of this segment. */
  permitIds: string[];
}

// ── Permits (real AWS plan-of-work permits, WA + OR) ─────────────────────────
export const permits: Permit[] = [
  {
    id: 'usace-nwp',
    name: 'Nationwide Permit (Section 404)',
    agency: 'US Army Corps of Engineers',
    agencyLevel: 'Federal',
    status: 'issued',
    submittedDate: '2026-03-10',
    estimatedApprovalDate: '2026-08-15',
    actualApprovalDate: '2026-05-28',
  },
  {
    id: 'usfws-sf299',
    name: 'Refuge Right-of-Way (SF-299)',
    agency: 'US Fish & Wildlife Service',
    agencyLevel: 'Federal',
    status: 'issued',
    submittedDate: '2026-04-02',
    estimatedApprovalDate: '2026-09-30',
    actualApprovalDate: '2026-05-30',
  },
  {
    id: 'wsdot-uap',
    name: 'Utility Accommodation Permit',
    agency: 'WSDOT',
    agencyLevel: 'State',
    status: 'in-preparation',
    estimatedApprovalDate: '2026-07-20',
  },
  {
    id: 'ecology-401',
    name: 'Water Quality Certification (401)',
    agency: 'WA Dept. of Ecology',
    agencyLevel: 'State',
    status: 'under-review',
    submittedDate: '2026-03-28',
    estimatedApprovalDate: '2026-08-30',
  },
  {
    id: 'ecology-stormwater',
    name: 'Construction Stormwater (NPDES)',
    agency: 'WA Dept. of Ecology',
    agencyLevel: 'State',
    status: 'in-preparation',
    estimatedApprovalDate: '2026-07-15',
  },
  {
    id: 'wdfw-hpa',
    name: 'Hydraulic Project Approval (HPA)',
    agency: 'WA Dept. of Fish & Wildlife',
    agencyLevel: 'State',
    status: 'under-review',
    submittedDate: '2026-03-18',
    estimatedApprovalDate: '2026-08-10',
  },
  {
    id: 'wa-dnr',
    name: 'Aquatic Lands Use Authorization',
    agency: 'WA Dept. of Natural Resources',
    agencyLevel: 'State',
    status: 'issued',
    submittedDate: '2026-04-10',
    estimatedApprovalDate: '2026-09-15',
    actualApprovalDate: '2026-06-01',
  },
  {
    id: 'sepa-walla-walla',
    name: 'SEPA Environmental Review',
    agency: 'Walla Walla County (Lead Agency)',
    agencyLevel: 'Local',
    status: 'issued',
    submittedDate: '2026-01-15',
    estimatedApprovalDate: '2026-04-30',
    actualApprovalDate: '2026-04-22',
  },
  {
    id: 'ww-county-row',
    name: 'County Right-of-Way Permit',
    agency: 'Walla Walla County Public Works',
    agencyLevel: 'Local',
    status: 'issued',
    submittedDate: '2026-03-05',
    estimatedApprovalDate: '2026-07-25',
    actualApprovalDate: '2026-06-02',
  },
  {
    id: 'franchise',
    name: 'Franchise Agreement',
    agency: 'Walla Walla County',
    agencyLevel: 'Local',
    status: 'not-started',
    estimatedApprovalDate: '2026-10-15',
  },
  {
    id: 'shoreline-ssd',
    name: 'Shoreline Substantial Development / CUP',
    agency: 'Walla Walla County',
    agencyLevel: 'Local',
    status: 'submitted',
    submittedDate: '2026-04-05',
    estimatedApprovalDate: '2026-09-05',
  },
  // The Phase-1 paths cross into Oregon (Umatilla County) and Benton County, WA —
  // the agencies below gate those reaches.
  {
    id: 'odot-permit',
    name: 'Right-of-Way & Utility Permit',
    agency: 'Oregon DOT',
    agencyLevel: 'State',
    status: 'under-review',
    submittedDate: '2026-04-12',
    estimatedApprovalDate: '2026-08-20',
  },
  {
    id: 'or-dsl',
    name: 'Removal–Fill Permit',
    agency: 'Oregon Dept. of State Lands',
    agencyLevel: 'State',
    status: 'in-preparation',
    estimatedApprovalDate: '2026-09-25',
  },
  {
    id: 'uma-county-row',
    name: 'County Right-of-Way Permit',
    agency: 'Umatilla County Public Works',
    agencyLevel: 'Local',
    status: 'submitted',
    submittedDate: '2026-05-02',
    estimatedApprovalDate: '2026-09-10',
  },
  {
    id: 'benton-row',
    name: 'County Right-of-Way Permit',
    agency: 'Benton County Public Works',
    agencyLevel: 'Local',
    status: 'not-started',
    estimatedApprovalDate: '2026-11-01',
  },
];

// ── Segments (real Phase-1 route geometry ← aws-routes.json) ─────────────────
// Permit gating is curated to tell the demo story: Path 1 is the active build
// (cleared WA reaches, OR reaches in review), Path 2 is mid-flight, Path 3 is
// early (Benton County not started), the Risk Mitigation variant hasn't begun,
// Path 4 is a submitted shoreline spur.
const SEGMENT_PERMITS: Record<string, string[]> = {
  'seg-eas': ['sepa-walla-walla', 'ecology-401', 'wdfw-hpa'],
  'seg-1a': ['usace-nwp', 'odot-permit', 'uma-county-row'],
  'seg-1b': ['usace-nwp', 'odot-permit'],
  'seg-1c': ['or-dsl', 'uma-county-row', 'usace-nwp'],
  'seg-1e': ['sepa-walla-walla', 'wa-dnr', 'usace-nwp', 'ww-county-row'],
  'seg-1f': ['sepa-walla-walla', 'usace-nwp', 'wa-dnr', 'ww-county-row'],
  'seg-2a': ['usace-nwp', 'odot-permit', 'or-dsl', 'uma-county-row'],
  'seg-2b': ['sepa-walla-walla', 'usace-nwp', 'ecology-401', 'wdfw-hpa'],
  'seg-3a': ['or-dsl', 'uma-county-row'],
  'seg-3b': ['uma-county-row', 'usace-nwp'],
  'seg-3c': ['benton-row', 'ecology-stormwater'],
  'seg-3d': ['benton-row'],
  'seg-3e': ['benton-row', 'ecology-stormwater', 'usace-nwp'],
  'seg-3f': ['sepa-walla-walla', 'wsdot-uap'],
  'seg-3g': ['sepa-walla-walla', 'ww-county-row', 'usace-nwp'],
  'seg-3h': ['franchise', 'sepa-walla-walla'],
  'seg-3i': ['franchise'],
  'seg-3j': ['franchise', 'ww-county-row'],
  'seg-4a': ['shoreline-ssd', 'sepa-walla-walla', 'wa-dnr'],
};

export const segments: Segment[] = routesJson.features.map((f) => ({
  id: f.properties.id,
  name: f.properties.name,
  line: f.properties.line,
  phases: f.properties.phases,
  contractor: f.properties.contractor,
  jurisdiction: f.properties.jurisdiction,
  lengthFt: f.properties.lengthFt,
  // GeoJSON is [lng, lat]; Leaflet wants [lat, lng].
  geometry: f.geometry.coordinates.map(([lng, lat]) => [lat, lng] as [number, number]),
  permitIds: SEGMENT_PERMITS[f.properties.id] ?? [],
}));

/** The route lines, in display order, with rollup footage (drives the map's path filter). */
export interface LineSummary {
  id: string;
  segmentCount: number;
  lengthFt: number;
}
export const lines: LineSummary[] = [...new Set(segments.map((s) => s.line))].sort().map((id) => {
  const segs = segments.filter((s) => s.line === id);
  return { id, segmentCount: segs.length, lengthFt: segs.reduce((sum, s) => sum + s.lengthFt, 0) };
});

// ── Derived status model ─────────────────────────────────────────────────────

/** Status displayed for a segment (least-advanced gating permit). */
export type DerivedStatus =
  | 'not-started'
  | 'in-preparation'
  | 'submitted'
  | 'under-review'
  | 'cleared';

/** Advancement ordinal — higher is more advanced. `not-required` is off-ladder (null). */
export const STATUS_ORDINAL: Record<PermitStatus, number | null> = {
  'not-started': 0,
  'in-preparation': 1,
  submitted: 2,
  'under-review': 3,
  issued: 4,
  'not-required': null,
};

export interface StatusMeta {
  key: DerivedStatus;
  label: string;
  /** CSS custom-property name (no var()) so consumers can use it in JS + CSS. */
  colorVar: string;
  hex: string;
}

// ── Status color schemes ──────────────────────────────────────────────────────
// The page exposes these as live options on the map. ONE invariant across all
// schemes: green always means cleared. Every page surface (lines, chips,
// burndown, legend) reads the runtime --st-<status> custom properties, which
// default to the first scheme and are re-pointed by the switcher.
export interface ColorScheme {
  id: string;
  label: string;
  /** One line on what the palette is saying — shown in the switcher. */
  blurb: string;
  colors: Record<DerivedStatus, string>;
}

// All four schemes are READINESS ramps (red = far from buildable → green =
// cleared) — the chosen direction after the June 10 review. They differ on two
// axes: where the red→green pivot lands (balanced vs conservative) and how
// saturated the ink is (vivid vs print-map vs muted).
export const COLOR_SCHEMES: ColorScheme[] = [
  {
    id: 'cartographic',
    label: 'Cartographic',
    blurb: 'Soft print-map ramp (RdYlGn) — gentler ink over the basemap.',
    colors: {
      'not-started': '#d73027',
      'in-preparation': '#fc8d59',
      submitted: '#e3c14d',
      'under-review': '#91cf60',
      cleared: '#1a9850',
    },
  },
  {
    id: 'readiness',
    label: 'Readiness heat',
    blurb: 'Even spectrum — red through amber to green, balanced pivot at Submitted.',
    colors: {
      'not-started': '#dc2626',
      'in-preparation': '#f97316',
      submitted: '#eab308',
      'under-review': '#65a30d',
      cleared: '#16a34a',
    },
  },
  {
    id: 'conservative',
    label: 'Conservative',
    blurb: 'Red until proven green — nothing reads "warm" before agency review.',
    colors: {
      'not-started': '#991b1b',
      'in-preparation': '#dc2626',
      submitted: '#ea580c',
      'under-review': '#f59e0b',
      cleared: '#16a34a',
    },
  },
  {
    id: 'earth',
    label: 'Muted earth',
    blurb: 'Desaturated brick → olive — the quietest option, basemap stays legible.',
    colors: {
      'not-started': '#a13d32',
      'in-preparation': '#c47a3b',
      submitted: '#c9a227',
      'under-review': '#7d9a44',
      cleared: '#2f7d4f',
    },
  },
];

/** Canonical status → label + runtime color var (hex = first scheme, the SSR default). */
export const STATUS_META: Record<DerivedStatus, StatusMeta> = {
  'not-started': { key: 'not-started', label: 'Not Started', colorVar: '--st-not-started', hex: '#d73027' },
  'in-preparation': { key: 'in-preparation', label: 'In Preparation', colorVar: '--st-in-preparation', hex: '#fc8d59' },
  submitted: { key: 'submitted', label: 'Submitted', colorVar: '--st-submitted', hex: '#e3c14d' },
  'under-review': { key: 'under-review', label: 'Under Review', colorVar: '--st-under-review', hex: '#91cf60' },
  cleared: { key: 'cleared', label: 'Cleared to Construct', colorVar: '--st-cleared', hex: '#1a9850' },
};

/** Display order for legends + burndown (least → most advanced). */
export const STATUS_ORDER: DerivedStatus[] = [
  'not-started',
  'in-preparation',
  'submitted',
  'under-review',
  'cleared',
];

const PERMIT_BY_ID = new Map(permits.map((p) => [p.id, p]));

/** Gating permits for a segment (excludes `not-required`). */
export function gatingPermits(segment: Segment): Permit[] {
  return segment.permitIds
    .map((id) => PERMIT_BY_ID.get(id))
    .filter((p): p is Permit => !!p && p.status !== 'not-required');
}

/** Derived segment status = least-advanced gating permit (all issued → cleared). */
export function deriveStatus(segment: Segment): DerivedStatus {
  const gating = gatingPermits(segment);
  if (gating.length === 0) return 'cleared'; // nothing gates it
  let minOrdinal = Infinity;
  for (const p of gating) {
    const ord = STATUS_ORDINAL[p.status];
    if (ord !== null && ord < minOrdinal) minOrdinal = ord;
  }
  switch (minOrdinal) {
    case 0:
      return 'not-started';
    case 1:
      return 'in-preparation';
    case 2:
      return 'submitted';
    case 3:
      return 'under-review';
    default:
      return 'cleared';
  }
}

/** Projected clear-to-build date = latest approval date across gating permits. */
export function clearToBuildDate(segment: Segment): string | null {
  const dates = gatingPermits(segment)
    .map((p) => p.actualApprovalDate ?? p.estimatedApprovalDate)
    .filter((d): d is string => !!d);
  if (dates.length === 0) return null;
  return dates.reduce((a, b) => (a > b ? a : b));
}

/** Footage summed per derived status (the burndown metric). */
export function footageByStatus(): { status: DerivedStatus; feet: number }[] {
  const totals = new Map<DerivedStatus, number>(STATUS_ORDER.map((s) => [s, 0]));
  for (const seg of segments) {
    const s = deriveStatus(seg);
    totals.set(s, (totals.get(s) ?? 0) + seg.lengthFt);
  }
  return STATUS_ORDER.map((status) => ({ status, feet: totals.get(status) ?? 0 }));
}

export const totalFeet = (): number => segments.reduce((sum, s) => sum + s.lengthFt, 0);

// ── Reporting history (point-in-time snapshots) ──────────────────────────────
// Route-miles "Cleared to Construct" as recorded at each biweekly leadership
// review. This is the ONE thing that can't be derived from the current permit
// states — clearance is a running total, and a burn-up needs where it WAS, not
// just where it is. The series is frozen history; the live present value is
// always the derived total (footageByStatus → cleared), so the burn-up's "today"
// point and the "since last report" delta track real edits while the trail
// behind them stays put. Cumulative + monotonic; the last entry is the most
// recent completed review (strictly below today's derived ~10.6 mi, so momentum
// reads as forward motion). Early-phase honest: flat for months, lifting now.
export interface ReportSnapshot {
  /** Review date (YYYY-MM-DD). */
  date: string;
  /** Cumulative route-miles cleared to construct as of that review. */
  clearedMiles: number;
}
export const reportHistory: ReportSnapshot[] = [
  { date: '2026-03-30', clearedMiles: 0 },
  { date: '2026-04-13', clearedMiles: 0 },
  { date: '2026-04-27', clearedMiles: 0 },
  { date: '2026-05-11', clearedMiles: 0 },
  { date: '2026-05-25', clearedMiles: 2.9 },
  { date: '2026-06-08', clearedMiles: 7.4 }, // last completed review
];

/** The report's "as of" date — today, the moment this snapshot was generated. */
export const reportAsOf = '2026-06-23';

/** Latest projected clear-to-build across ALL segments = full-route clear date. */
export function fullRouteClearDate(): string | null {
  const dates = segments.map((s) => clearToBuildDate(s)).filter((d): d is string => !!d);
  return dates.length ? dates.reduce((a, b) => (a > b ? a : b)) : null;
}

/** Format YYYY-MM-DD → "Aug 15, 2026". */
export function formatDate(iso: string | null): string {
  if (!iso) return '—';
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[m - 1]} ${d}, ${y}`;
}

/** Format feet → "18.2 mi" (the corridor is ~200 mi — feet alone stops meaning anything). */
export function formatMiles(feet: number): string {
  return `${(feet / 5280).toFixed(1)} mi`;
}

export const PERMIT_STATUS_LABEL: Record<PermitStatus, string> = {
  'not-started': 'Not Started',
  'in-preparation': 'In Preparation',
  submitted: 'Submitted',
  'under-review': 'Under Review',
  issued: 'Issued',
  'not-required': 'Not Required',
};

/** esa-badge/esa-pill variant for a permit status chip. */
export const PERMIT_STATUS_VARIANT: Record<PermitStatus, 'default' | 'primary' | 'success' | 'warning' | 'info'> = {
  'not-started': 'default',
  'in-preparation': 'warning',
  submitted: 'info',
  'under-review': 'warning',
  issued: 'success',
  'not-required': 'default',
};

// ── Shared permit-status color (chips MUST match the map lines) ───────────────
// Permit ladder maps onto the same runtime --st-* vars: `issued` shares the
// cleared color, `not-required` is a fixed off-ladder neutral the schemes
// never re-point.
export interface PermitStatusMeta {
  label: string;
  colorVar: string;
  hex: string;
}
export const PERMIT_STATUS_META: Record<PermitStatus, PermitStatusMeta> = {
  'not-started': { label: 'Not Started', colorVar: '--st-not-started', hex: '#d73027' },
  'in-preparation': { label: 'In Preparation', colorVar: '--st-in-preparation', hex: '#fc8d59' },
  submitted: { label: 'Submitted', colorVar: '--st-submitted', hex: '#e3c14d' },
  'under-review': { label: 'Under Review', colorVar: '--st-under-review', hex: '#91cf60' },
  issued: { label: 'Issued', colorVar: '--st-cleared', hex: '#1a9850' },
  'not-required': { label: 'Not Required', colorVar: '--st-not-required', hex: '#989898' },
};

/** Display order for status filters/legends (least → most advanced; not-required last). */
export const PERMIT_STATUS_ORDER: PermitStatus[] = [
  'not-started',
  'in-preparation',
  'submitted',
  'under-review',
  'issued',
  'not-required',
];

/** Derive a short "Type" label from a permit (no `type` field in the data). */
export function permitType(permit: Permit): string {
  const n = permit.name.toLowerCase();
  if (n.includes('404') || n.includes('nationwide')) return 'Section 404';
  if (n.includes('401') || n.includes('water quality')) return '401 Certification';
  if (n.includes('stormwater') || n.includes('npdes')) return 'NPDES';
  if (n.includes('right-of-way') || n.includes('sf-299')) return 'Right-of-Way';
  if (n.includes('hydraulic') || n.includes('hpa')) return 'HPA';
  if (n.includes('utility accommodation')) return 'Utility';
  if (n.includes('aquatic lands')) return 'Aquatic Lands';
  if (n.includes('sepa') || n.includes('environmental review')) return 'SEPA';
  if (n.includes('franchise')) return 'Franchise';
  if (n.includes('shoreline')) return 'Shoreline';
  if (n.includes('removal')) return 'Removal–Fill';
  return 'Permit';
}

/** esa-badge variant for an agency level chip. */
export const LEVEL_VARIANT: Record<AgencyLevel, 'primary' | 'secondary' | 'info'> = {
  Federal: 'primary',
  State: 'info',
  Local: 'secondary',
};

const SEGMENTS_BY_PERMIT = new Map<string, number>();
for (const seg of segments) {
  for (const pid of seg.permitIds) {
    SEGMENTS_BY_PERMIT.set(pid, (SEGMENTS_BY_PERMIT.get(pid) ?? 0) + 1);
  }
}
/** How many segments include this permit in their permitIds. */
export const segmentCountForPermit = (permitId: string): number => SEGMENTS_BY_PERMIT.get(permitId) ?? 0;

// ── src/lib/beacon-grid.ts ──
// Beacon "gold-star" AG Grid theme + cell renderers — the shared client-side grid
// kit for the spoke's data-catalog grids. Ported verbatim from esassoc/Beacon
// (Beacon.Web/.../ag-grid/beacon-grid-theme.ts): teal header, DM Sans, ESA-orange
// accent, Lucide funnel filter icon. Literal hex (each annotated with the Beacon
// design token it mirrors) because AG Grid resolves theme params at config time and
// can't read CSS vars.
//
// Extracted from requirement-tracker.astro so the Actions list + the Action detail
// page's implementations grid share ONE theme instead of triple-duplicating it.
// Import from a page's client <script>:
//   import { beaconTheme, makeStatusRenderer, linkRenderer } from '../../lib/beacon-grid';
import { themeQuartz, iconOverrides } from 'ag-grid-community';
import type { ICellRendererParams } from 'ag-grid-community';

const lucideFunnelSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>';

const beaconIconOverrides = iconOverrides({
  type: 'image',
  mask: true,
  icons: { filter: { svg: lucideFunnelSvg }, filterActive: { svg: lucideFunnelSvg } },
});

export const beaconTheme = themeQuartz.withPart(beaconIconOverrides).withParams({
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

/** Status metadata: a label + a literal hex (kept in sync with --bcn-status-* by value). */
export type StatusMeta = Record<string, { label: string; hex: string }>;

/**
 * Build a status-chip cell renderer for a given status map. The chip mirrors the
 * tracker's .bcn-grid-chip (token-tinted pill + status dot); the page must ship the
 * matching :global(.bcn-grid-chip) CSS (AG Grid injects cells outside Astro's scope).
 */
export function makeStatusRenderer(statusMeta: StatusMeta) {
  return (p: ICellRendererParams) => {
    const meta = statusMeta[p.value as string];
    if (!meta) return '';
    const el = document.createElement('span');
    el.className = 'bcn-grid-chip';
    el.style.setProperty('--_chip', meta.hex);
    el.innerHTML = `<span class="bcn-grid-chip__dot"></span>${meta.label}`;
    return el;
  };
}

/** Underlined teal link cell (the Name / Commitment / Source Document columns). */
export function linkRenderer(p: ICellRendererParams) {
  const el = document.createElement('a');
  el.className = 'bcn-grid-name';
  el.href = '#';
  el.textContent = String(p.value ?? '');
  el.addEventListener('click', (e) => e.preventDefault());
  return el;
}

// ── src/pages/prototypes/permit-tracking.astro ──
---
// Permit Tracking — ONE feature (BCN-1266 + BCN-1267 merged): Tracking →
// Permit Tracking, with two tabs.
//
//   Map  (default) — the four real Phase-1 paths from the client KMZ, colored
//                    by derived permitting status (readiness ramps — red far
//                    from buildable, green cleared), a live palette switcher,
//                    a per-path filter, and a SECONDARY mileage strip below
//                    the map. The map answers "what segments are ready?"
//   Data           — Permits × Segments as AG Grids (beacon-grid kit) behind
//                    the requirement-tracker filter bar: View toggle, Status +
//                    Level dropdowns, keyword search. Permit rows open the
//                    EDITABLE drawer; saving re-derives segment status
//                    everywhere (map lines, chips, grids, mileage strip).
//
// Segment click → the same read-only segment drawer from BOTH tabs; permits
// listed in it jump to the permit editor.
//
// Geometry is real: src/data/aws-routes.json (scripts/kmz-to-routes.py).
// Status is never stored per segment — always derived from gating permits,
// at build time here and re-derived in the browser after every edit.
import AppShell from '../../layouts/AppShell.astro';
import PageLayout from '../../layouts/PageLayout.astro';
import '../../styles/beacon-map.css'; // shared Leaflet chrome (.leaflet-tooltip restyle for all map pages)
import EsaButton from '@esa/ecology/esa-button.astro';
import EsaIconButton from '@esa/ecology/esa-icon-button.astro';
import EsaIcon from '@esa/ecology/esa-icon.astro';
import EsaBadge from '@esa/ecology/esa-badge.astro';
import EsaCard from '@esa/ecology/esa-card.astro';
import EsaStat from '@esa/ecology/esa-stat.astro';
import FilterContainer from '@esa/ecology/esa-filter-container.astro';
import FilterClearButton from '@esa/ecology/esa-filter-clear-button.astro';
import BcnKeyValue from '../../components/bcn/BcnKeyValue.astro';
import BcnStatusChip from '../../components/bcn/BcnStatusChip.astro';
import {
  permits,
  segments,
  lines,
  COLOR_SCHEMES,
  STATUS_META,
  STATUS_ORDER,
  PERMIT_STATUS_META,
  PERMIT_STATUS_LABEL,
  PERMIT_STATUS_ORDER,
  deriveStatus,
  clearToBuildDate,
  gatingPermits,
  footageByStatus,
  totalFeet,
  formatDate,
  formatMiles,
  permitType,
  reportHistory,
  reportAsOf,
  fullRouteClearDate,
} from '../../data/map-fixture';

// ── Precompute (build-time mirror of what the client re-derives after edits) ──
const burndown = footageByStatus();
const total = totalFeet();
const clearedFeet = burndown.find((b) => b.status === 'cleared')?.feet ?? 0;
const pct = (feet: number) => (total === 0 ? 0 : Math.round((feet / total) * 100));

// ── Executive Summary — build-time hero values (clean first paint; the client's
//    renderExec() re-derives the whole tab live after every permit edit) ───────
const clearedMilesNow = clearedFeet / 5280;
const lastReport = reportHistory[reportHistory.length - 1];
const trendMiles = clearedMilesNow - lastReport.clearedMiles; // miles cleared since last review
const fullClear = fullRouteClearDate();

// Template rows for the segment drawer's covering-permits list (cloned in JS).
const permitRows = permits.map((p) => ({
  id: p.id,
  name: p.name,
  agency: p.agency,
  agencyLevel: p.agencyLevel,
  status: p.status,
  statusLabel: PERMIT_STATUS_LABEL[p.status],
  statusHex: PERMIT_STATUS_META[p.status].hex,
  estDate: formatDate(p.actualApprovalDate ?? p.estimatedApprovalDate ?? null),
}));

// One serialized payload — the client store. Everything live (grids, map,
// drawers, mileage strip) is re-derived from this.
const payload = {
  schemes: COLOR_SCHEMES,
  statusOrder: STATUS_ORDER,
  statusLabels: Object.fromEntries(STATUS_ORDER.map((s) => [s, STATUS_META[s].label])),
  permitLabels: PERMIT_STATUS_LABEL,
  permitOrder: PERMIT_STATUS_ORDER,
  lines: lines.map((l) => ({ id: l.id, miles: formatMiles(l.lengthFt) })),
  permits: permits.map((p) => ({
    id: p.id,
    name: p.name,
    agency: p.agency,
    agencyLevel: p.agencyLevel,
    type: permitType(p),
    status: p.status,
    submittedDate: p.submittedDate ?? '',
    estimatedApprovalDate: p.estimatedApprovalDate ?? '',
    actualApprovalDate: p.actualApprovalDate ?? '',
    segmentIds: segments.filter((s) => s.permitIds.includes(p.id)).map((s) => s.id),
  })),
  segments: segments.map((s) => ({
    id: s.id,
    name: s.name,
    line: s.line,
    phases: s.phases,
    contractor: s.contractor,
    jurisdiction: s.jurisdiction,
    lengthFt: s.lengthFt,
    geometry: s.geometry,
  })),
  // Executive Summary inputs: frozen reporting history (for the burn-up trail +
  // "since last report" delta) and the projected full-route clear date.
  reportHistory,
  reportAsOf,
  fullClearDate: fullClear,
};
---

<!-- manifest:
  layout: esa-tab-layout                                  # 3-tab spine — Map (default) · Data · Summary
  sections:
    - map status board     -> esa-button-toggle           # Leaflet status map + Paths/Status scopes + Download KMZ (esa-button); mileage strip, clear-to-build timeline & insight cards are inline viz (see bcn-lego-checked)
    - permit & segment data -> beacon-grid                 # the shared Beacon AG Grid kit (Permits × Segments); filter bar = esa-filter-container glue
    - segment drawer       -> esa-side-dialog              # read-only segment dossier, reached from both tabs
    - permit editor        -> esa-side-dialog              # write surface — status/timing/segments + a Comments thread (@-mention); saving re-derives everywhere
    - executive summary    -> esa-stat                     # leadership rollup: hero % + KPIs are esa-stat in esa-card; donut, per-path bars & burn-up are inline viz (see bcn-lego-checked)
    - notification settings -> esa-dialog                  # global per-user prefs (esa-switch-toggle rows), opened from the page utilities
-->

<!-- bcn-lego-checked: composed from esa-tab-layout, esa-side-dialog ×2, esa-select,
     esa-date-picker, esa-text-field, esa-button-toggle ×2, esa-collapsible (flush),
     esa-filter-dropdown in esa-filter-container, esa-filter-clear-button, esa-tooltip,
     esa-button, esa-icon-button, esa-icon, esa-badge, esa-pill + BcnStatusChip,
     BcnKeyValue, esa-card + esa-stat (the Summary tab's frames + KPI numbers) + the
     shared beacon-grid AG Grid kit (src/lib/beacon-grid.ts).
     Remaining CSS is composition glue: Leaflet map chrome (status legend overlay — no
     esa- lego models map overlays; checked Beacon, prod has no map UI), the secondary
     mileage strip + insight cards + clear-to-build timeline chart (no esa- lego models
     a time-axis chart), the bulk-action bar over the AG Grid selection, the Summary
     print stylesheet, the filter-bar card shell + grid footer (faithful copies of
     requirement-tracker's page glue), and the global .bcn-grid-chip cells AG Grid
     injects outside Astro's scope. The Summary tab adds the same class of bespoke,
     value-colored micro-viz canonicalized in BcnMonitoringStats — a status donut
     (conic-gradient), per-path stacked status bars, and a route-cleared burn-up (SVG
     time-axis vs target) — none of which any esa- lego models; their colors all read
     the runtime --st-* status vars, never hardcoded.
     BCN-1364 collaboration/reporting adds: a Download-KMZ action (esa-button; the KML
     overlay is generated + zipped in-browser); the global notification-settings dialog
     (esa-dialog + esa-switch-toggle rows); and the per-permit Comments thread in the
     editor (esa-textarea compose + an @-mention typeahead). The thread is rendered live
     per-permit (so it can't be the static BcnDiscussion SSR component) — its initials
     avatars + mention highlights mirror that component's vocabulary, token-colored. -->
<AppShell title="Permit Tracking — AWS Raul" activeNavId="permit-tracking">
  <PageLayout
    title="Permit Tracking"
    icon="map"
    breadcrumbs={[
      { label: 'Raul', href: '#raul' },
      { label: 'Tracking', href: '#tracking' },
      { label: 'Permit Tracking' },
    ]}
  >
    <div slot="utilities">
      <span id="notif-open"><EsaButton color="ghost" appearance="outline" size="sm" icon="bell">Notifications</EsaButton></span>
    </div>

    <!-- No "New Permit" here on purpose: permits ARE source documents — this page
         is a projection of that data through the permitting lens, not their home. -->
    <esa-tab-layout id="pt-tabs" appearance="underline">
      <!-- ═══ TAB 1 — MAP (the hero: which segments are ready?) ═══ -->
      <section slot="panel-0" class="map-panel" aria-label="Permit status map">
        <!-- Map filters — scope the MAP and every figure below it (mileage
             strip + insight cards), not just the layers. -->
        <div class="map-filterbar">
          <div class="map-filterbar__group">
            <span class="map-filterbar__label">Paths</span>
            <esa-button-toggle id="path-toggle" value="all" size="md"></esa-button-toggle>
          </div>
          <span class="map-filterbar__divider"></span>
          <div class="map-filterbar__group">
            <span class="map-filterbar__label">Status</span>
            <esa-button-toggle id="status-toggle" value="all" size="md"></esa-button-toggle>
          </div>
          <span class="map-filterbar__actions">
            <span id="download-kmz"><EsaButton color="ghost" appearance="outline" size="sm" icon="download">Download KMZ</EsaButton></span>
          </span>
        </div>

        <div class="map-wrap">
          <div id="permit-map" class="map"></div>

          <div class="map-legend" aria-label="Segment status legend">
            <span class="map-legend__title">Segment status</span>
            {
              STATUS_ORDER.map((status) => (
                <span class="map-legend__row">
                  <span class="map-legend__line" style={`background:var(${STATUS_META[status].colorVar});`} />
                  {STATUS_META[status].label}
                </span>
              ))
            }
          </div>
        </div>

        <!-- Secondary figure: mileage by status (supporting, not the headline) -->
        <section class="burndown" aria-label="Mileage by permitting status">
          <div class="burndown__head">
            <span class="burndown__title">Mileage by status</span>
            <span class="burndown__summary">
              Cleared to Construct <strong id="bd-cleared">{formatMiles(clearedFeet)}</strong>
              <span id="bd-total">of {formatMiles(total)} total · {pct(clearedFeet)}%</span>
            </span>
          </div>
          <div class="burndown__bar" id="bd-bar" role="img" aria-label={`${pct(clearedFeet)} percent cleared`}>
            {
              burndown
                .filter((b) => b.feet > 0)
                .map((b) => (
                  <div
                    style={`height:100%; flex: 0 0 ${(b.feet / total) * 100}%; background:var(${STATUS_META[b.status].colorVar});`}
                    title={`${STATUS_META[b.status].label}: ${formatMiles(b.feet)}`}
                  />
                ))
            }
          </div>
          <ul class="burndown__legend">
            {
              STATUS_ORDER.map((status) => {
                const row = burndown.find((b) => b.status === status)!;
                return (
                  <li class="burndown__legend-item" data-bd-item={status} data-empty={row.feet === 0 ? 'true' : 'false'}>
                    <span class="burndown__swatch" style={`background:var(${STATUS_META[status].colorVar});`} />
                    <span class="burndown__legend-label">{STATUS_META[status].label}</span>
                    <span class="burndown__legend-mi" data-bd-mi={status}>{formatMiles(row.feet)}</span>
                    <span class="burndown__legend-pct" data-bd-pct={status}>{pct(row.feet)}%</span>
                  </li>
                );
              })
            }
          </ul>
        </section>

        <!-- Clear-to-build timeline — directly below Mileage by status (the two
             headline figures read together). Segments ordered by projected clear
             date. Click a row → segment drawer. -->
        <section class="ctb" aria-label="Clear-to-build timeline">
          <div class="ctb__head">
            <h3 class="ctb__title">Clear-to-build timeline</h3>
            <p class="ctb__sub">Segments by projected clear-to-build date</p>
          </div>
          <div class="ctb__axisrow" aria-hidden="true">
            <span></span>
            <div class="ctb__axis" id="ctb-axis"></div>
            <span></span>
          </div>
          <ul class="ctb__rows" id="ctb-rows"></ul>
        </section>

        <!-- Insight cards — two only, side by side: the status census and the
             actionable blockers list. JS-rendered from the same store as the
             map, so they re-derive after every permit edit. -->
        <div class="insights">
          <section class="ins-card" aria-label="Permits by status">
            <h3 class="ins-card__title">Permits by status</h3>
            <ul class="ins-list" id="ins-status"></ul>
          </section>
          <section class="ins-card" aria-label="Blocking the most mileage">
            <h3 class="ins-card__title">Blocking the most mileage</h3>
            <p class="ins-card__sub">Pending permits, ranked by the route-miles they gate</p>
            <ul class="ins-list" id="ins-blockers"></ul>
          </section>
        </div>
      </section>

      <!-- ═══ TAB 2 — DATA (requirement-tracker filter bar + beacon AG Grids) ═══ -->
      <section slot="panel-1" class="data-panel" aria-label="Permit tracking data">
        <div class="bcn-filterbar">
          <div class="bcn-filterbar__top">
            <div class="bcn-filterbar__group">
              <span class="bcn-filterbar__label">View</span>
              <esa-button-toggle id="pivot-toggle" value="permits" size="md"></esa-button-toggle>
            </div>
            <div class="bcn-filterbar__search">
              <esa-text-field id="pt-search" placeholder="Search permits…" size="md"></esa-text-field>
              <span id="pt-search-clear" hidden><EsaIconButton icon="x" label="Clear search" size="sm" /></span>
            </div>
          </div>
          <div class="bcn-filterbar__bottom">
            <span class="bcn-filterbar__label">Filters</span>
            <FilterContainer>
              <esa-filter-dropdown id="flt-status" label="Status" multiple size="sm"></esa-filter-dropdown>
              <span id="flt-level-wrap"><esa-filter-dropdown id="flt-level" label="Level" multiple size="sm"></esa-filter-dropdown></span>
            </FilterContainer>
            <span id="pt-clear-filters" class="bcn-filterbar__clear"><FilterClearButton /></span>
          </div>
        </div>

        <!-- Bulk status bar — appears when permits-grid rows are checkbox-selected -->
        <div class="bulk-bar" id="bulk-bar" hidden>
          <span class="bulk-bar__count" id="bulk-count">0 selected</span>
          <esa-select id="bulk-status" placeholder="Set status…"></esa-select>
          <span id="bulk-apply"><EsaButton color="primary" size="sm">Apply status</EsaButton></span>
          <span id="bulk-clear"><EsaButton color="ghost" appearance="outline" size="sm">Clear selection</EsaButton></span>
        </div>

        <div class="bcn-view-pane" id="pane-permits">
          <div id="grid-permits" class="pt-grid"></div>
        </div>
        <div class="bcn-view-pane" id="pane-segments" hidden>
          <div id="grid-segments" class="pt-grid"></div>
        </div>

        <div class="table-footer">
          <span id="pt-download"><EsaButton color="ghost" appearance="outline" size="sm" icon="download">Download as CSV</EsaButton></span>
          <div class="row-count-data">
            Total Records: <span id="pt-total">0</span>
            <span id="pt-filtered" class="filtered-rows-count" hidden></span>
          </div>
        </div>
      </section>

      <!-- ═══ TAB 3 — EXECUTIVE SUMMARY (leadership rollup; whole project, miles-weighted) ═══
           Read-only. Every figure re-derives from the same store as the Map/Data tabs
           (renderExec), so a permit edit moves the rollup here too. Miles-weighted
           throughout — route-miles cleared is what lets crews roll, never permit counts. -->
      <section slot="panel-2" class="exec" aria-label="Executive summary">
        <!-- Hero band: headline % + KPIs (esa-stat) on the left, status donut on the right -->
        <EsaCard>
          <div class="exec__hero">
            <div class="exec__hero-figures">
              <div class="exec__hero-headline" id="exec-hero-stat">
                <EsaStat value={`${pct(clearedFeet)}%`} label="of the route cleared to construct" />
              </div>
              <div class="exec__kpis">
                <div class="exec__kpi">
                  <span class="exec__kpi-iconslot">
                    <span class="exec__kpi-icon exec__kpi-icon--up" id="exec-trend-icon">
                      <EsaIcon name="trending-up" size="sm" paths="<polyline points='22 7 13.5 15.5 8.5 10.5 2 17'/><polyline points='16 7 22 7 22 13'/>" />
                    </span>
                  </span>
                  <span id="exec-trend-stat">
                    <EsaStat
                      value={`${trendMiles >= 0 ? '+' : '−'}${Math.abs(trendMiles).toFixed(1)} mi`}
                      label="cleared in the past 14 days"
                    />
                  </span>
                </div>
                <div class="exec__kpi">
                  <span class="exec__kpi-iconslot">
                    <span class="exec__kpi-icon" id="exec-forecast-icon">
                      <EsaIcon name="flag" size="sm" paths="<path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z'/><line x1='4' y1='22' x2='4' y2='15'/>" />
                    </span>
                  </span>
                  <span id="exec-forecast-stat">
                    <EsaStat
                      value={fullClear ? formatDate(fullClear) : '—'}
                      label="forecast full-route clear"
                      sub="if agency estimates hold"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div class="exec__donut-wrap">
              <div class="exec__donut" id="exec-donut" role="img" aria-label="Route-miles by permitting status">
                <div class="exec__donut-hole">
                  <span class="exec__donut-pct" id="exec-donut-pct">{pct(clearedFeet)}%</span>
                  <span class="exec__donut-cap">cleared</span>
                </div>
              </div>
              <ul class="exec__legend" id="exec-donut-legend"></ul>
            </div>
          </div>
          <p class="exec__asof" id="exec-asof"></p>
        </EsaCard>

        <!-- Per-path breakdown — one stacked status bar per path, comparable top-to-bottom -->
        <EsaCard title="Clearance by path" subtitle="Route-miles by status — each path is a separately-scoped build crew">
          <ul class="exec__paths" id="exec-paths"></ul>
        </EsaCard>

        <!-- Momentum — cumulative miles cleared (burn-up) against the pace needed to finish -->
        <EsaCard title="Route cleared over time" subtitle="Miles cleared to date, with the projected path to full clearance from current agency estimates">
          <div class="exec__burnup">
            <div class="exec__burnup-chart" id="exec-burnup"></div>
            <ul class="exec__burnup-legend">
              <li><span class="exec__burnup-key exec__burnup-key--actual"></span>Miles cleared</li>
              <li><span class="exec__burnup-key exec__burnup-key--proj"></span>Projected clearance</li>
              <li><span class="exec__burnup-key exec__burnup-key--target"></span>Full route ({formatMiles(total)})</li>
            </ul>
          </div>
        </EsaCard>
      </section>
    </esa-tab-layout>
  </PageLayout>

  <!-- ═══ Segment drawer (read) — esa-side-dialog lego, reachable from BOTH tabs ═══ -->
  <esa-side-dialog id="segment-dialog" size="md" style="--_width: 640px; --z-modal: 1300; --z-modal-backdrop: 1250;">
    <div slot="header" class="sd__header">
      <h2 class="sd__title" id="sd-title">Segment</h2>
      <span id="sd-chip"><BcnStatusChip status="cleared" label="—" hex={STATUS_META.cleared.hex} /></span>
    </div>
    <div class="sd">
      <dl class="sd__meta">
        <div class="sd__kv"><dt>Path</dt><dd id="sd-path">—</dd></div>
        <div class="sd__kv"><dt>Build phase</dt><dd id="sd-phase">—</dd></div>
        <div class="sd__kv"><dt>Projected clear-to-build</dt><dd id="sd-clear">—</dd></div>
        <div class="sd__kv"><dt>Length</dt><dd id="sd-length">—</dd></div>
        <div class="sd__kv"><dt>Jurisdiction</dt><dd id="sd-jur">—</dd></div>
        <div class="sd__kv"><dt>Build contractor</dt><dd id="sd-build">—</dd></div>
      </dl>
      <h3 class="sd__section">Covering permits <span id="sd-count"><EsaBadge value="0" size="sm" /></span></h3>
      <ul class="sd__permits" id="sd-permits"></ul>
    </div>
  </esa-side-dialog>

  <!-- One <li> per permit; the segment drawer clones the rows it needs. Cloning
       SSR nodes (not innerHTML strings) keeps Astro's scoped styles + the chip
       component markup as the single source. -->
  <template id="pt-permit-rows">
    <ul>
      {
        permitRows.map((p) => (
          <li class="sd-permit" data-permit-row={p.id}>
            <button type="button" class="sd-permit__btn" data-edit-permit={p.id}>
              <span class="sd-permit__main">
                <span class="sd-permit__name">{p.name}</span>
                <span class="sd-permit__agency">{p.agency} · {p.agencyLevel}</span>
              </span>
              <span class="sd-permit__meta">
                <span class="sd-permit__chips">
                  <esa-tooltip text="Least-advanced covering permit — its status sets this segment's status" position="top">
                    <span class="sd-permit__gating" data-gating-tag hidden>Gating</span>
                  </esa-tooltip>
                  <span data-permit-chip={p.id}>
                    <BcnStatusChip status={p.status} label={p.statusLabel} hex={p.statusHex} />
                  </span>
                </span>
                <span class="sd-permit__date" data-permit-date={p.id}>{p.estDate}</span>
              </span>
              <EsaIcon name="chevron-right" size="sm" />
            </button>
          </li>
        ))
      }
    </ul>
  </template>

  <!-- ═══ Permit drawer (EDIT — the write surface) — esa-side-dialog lego ═══ -->
  <esa-side-dialog id="permit-dialog" size="md" style="--_width: 640px; --z-modal: 1340; --z-modal-backdrop: 1310;">
    <div slot="header" class="pd__header">
      <h2 class="pd__title" id="pd-title">Permit</h2>
      <span id="pd-chip"><BcnStatusChip status="not-started" label="—" hex={PERMIT_STATUS_META['not-started'].hex} /></span>
    </div>
    <div class="pd">
      <section class="pd__section">
        <h3 class="pd__section-head">
          <EsaIcon name="circle-dot" size="sm" paths="<circle cx='12' cy='12' r='10'/><circle cx='12' cy='12' r='1'/>" />
          Status
        </h3>
        <div class="pd__group">
          <esa-select id="pd-status"></esa-select>
        </div>
      </section>

      <section class="pd__section">
        <h3 class="pd__section-head">
          <EsaIcon name="clock" size="sm" paths="<circle cx='12' cy='12' r='10'/><polyline points='12 6 12 12 16 14'/>" />
          Timing
        </h3>
        <div class="pd__group">
          <div class="pd__row">
            <esa-date-picker id="pd-submitted" label="Submitted date"></esa-date-picker>
            <esa-date-picker id="pd-estimated" label="Estimated approval"></esa-date-picker>
          </div>
          <esa-date-picker id="pd-actual" label="Actual approval"></esa-date-picker>
        </div>
      </section>

      <section class="pd__section">
        <h3 class="pd__section-head">
          <EsaIcon name="route" size="sm" paths="<circle cx='6' cy='19' r='3'/><path d='M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15'/><circle cx='18' cy='5' r='3'/>" />
          Segments
        </h3>
        <div class="pd__group">
          <!-- Editable applicability — esa-input-tag in strict mode (segments are a
               fixed vocabulary), selected chips below the search input -->
          <esa-input-tag id="pd-segments" strict tags-below placeholder="Search segments…"></esa-input-tag>
        </div>
      </section>

      <!-- Details are READ-ONLY: agency / level / type are source-document data —
           this drawer edits permit status, timing, and segment applicability. -->
      <section class="pd__section">
        <h3 class="pd__section-head">
          <EsaIcon name="info" size="sm" />
          Details
        </h3>
        <div class="pd__group">
          <BcnKeyValue label="Agency"><span class="pd__kv-val" id="pd-agency"></span></BcnKeyValue>
          <div class="pd__row">
            <BcnKeyValue label="Level"><span class="pd__kv-val" id="pd-level"></span></BcnKeyValue>
            <BcnKeyValue label="Permit type"><span class="pd__kv-val" id="pd-type"></span></BcnKeyValue>
          </div>
        </div>
      </section>

      <!-- Comments (BCN-1364) — a collaboration thread, DISTINCT from the read-only
           Activity log below. @-mention project users (feeds notifications). -->
      <section class="pd__section">
        <h3 class="pd__section-head">
          <EsaIcon name="message-square" size="sm" paths="<path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/>" />
          Comments <span id="pd-comment-count"></span>
        </h3>
        <ul class="pd__comments" id="pd-comments"></ul>
        <div class="pd__compose">
          <div class="pd__compose-field">
            <esa-textarea id="pd-comment-input" rows="2" placeholder="Write a comment…  type @ to mention a teammate"></esa-textarea>
            <ul class="pd__mention-menu" id="pd-mention-menu" hidden></ul>
          </div>
          <div class="pd__compose-foot">
            <span class="pd__compose-hint">Posting as Andy Lovseth</span>
            <span id="pd-comment-post"><EsaButton color="primary" size="sm">Post comment</EsaButton></span>
          </div>
        </div>
      </section>

      <!-- Change log — seeded from the permit's own dates, grows as edits land -->
      <section class="pd__section">
        <h3 class="pd__section-head">
          <EsaIcon name="history" size="sm" paths="<path d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8'/><path d='M3 3v5h5'/><path d='M12 7v5l4 2'/>" />
          Activity
        </h3>
        <ul class="pd__activity" id="pd-activity"></ul>
      </section>
    </div>
    <div slot="footer" class="pd__footer">
      <span id="pd-cancel"><EsaButton color="ghost" appearance="outline" size="md">Cancel</EsaButton></span>
      <span id="pd-save"><EsaButton color="primary" size="md">Save</EsaButton></span>
    </div>
  </esa-side-dialog>

  <!-- ═══ Notification settings (BCN-1364) — GLOBAL, per-user prefs for the whole
       Permit Tracking feature (not per-permit). esa-dialog + esa-switch-toggle. ═══ -->
  <esa-dialog id="notif-dialog" heading="Notification settings" size="md" style="--z-modal: 1400; --z-modal-backdrop: 1380;">
    <div class="notif">
      <p class="notif__lede">
        Email <strong>you</strong> when these happen anywhere in Permit Tracking — across every path and
        permit. These are your personal preferences; they don't change what teammates receive.
      </p>
      <ul class="notif__list">
        <li class="notif__row">
          <span class="notif__text">
            <span class="notif__title">A permit's status changes</span>
            <span class="notif__sub">Any move along the permitting ladder (e.g. Submitted → Issued)</span>
          </span>
          <esa-switch-toggle id="notif-status" checked></esa-switch-toggle>
        </li>
        <li class="notif__row">
          <span class="notif__text">
            <span class="notif__title">A segment becomes Cleared to Construct</span>
            <span class="notif__sub">The milestone that lets crews roll on that reach</span>
          </span>
          <esa-switch-toggle id="notif-cleared" checked></esa-switch-toggle>
        </li>
        <li class="notif__row">
          <span class="notif__text">
            <span class="notif__title">You're @-mentioned in a comment</span>
            <span class="notif__sub">Someone pulls you into a permit discussion</span>
          </span>
          <esa-switch-toggle id="notif-mention" checked></esa-switch-toggle>
        </li>
        <li class="notif__row">
          <span class="notif__text">
            <span class="notif__title">Any comment is posted on a permit</span>
            <span class="notif__sub">High volume — off by default</span>
          </span>
          <esa-switch-toggle id="notif-comment"></esa-switch-toggle>
        </li>
      </ul>
    </div>
    <div slot="footer" class="notif__footer">
      <span id="notif-cancel"><EsaButton color="ghost" appearance="outline" size="md">Cancel</EsaButton></span>
      <span id="notif-save"><EsaButton color="primary" size="md">Save preferences</EsaButton></span>
    </div>
  </esa-dialog>

  <script type="application/json" id="pt-data" set:html={JSON.stringify(payload)}></script>
</AppShell>

<script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import { createGrid, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
  import type { GridApi, GridOptions, ColDef, IRowNode } from 'ag-grid-community';
  import { beaconTheme, makeStatusRenderer } from '../../lib/beacon-grid';
  import '@esa/ecology/esa-tab-layout';
  import '@esa/ecology/esa-side-dialog';
  import '@esa/ecology/esa-select';
  import '@esa/ecology/esa-date-picker';
  import '@esa/ecology/esa-text-field';
  import '@esa/ecology/esa-button-toggle';
  import '@esa/ecology/esa-input-tag';
  import '@esa/ecology/esa-tooltip';
  import '@esa/ecology/esa-filter-dropdown';
  import '@esa/ecology/esa-textarea';
  import '@esa/ecology/esa-dialog';
  import '@esa/ecology/esa-switch-toggle';

  ModuleRegistry.registerModules([AllCommunityModule]);

  // ── Types mirroring the serialized payload ──────────────────────────────────
  interface Scheme {
    id: string;
    label: string;
    blurb: string;
    colors: Record<string, string>;
  }
  interface PtPermit {
    id: string;
    name: string;
    agency: string;
    agencyLevel: string;
    type: string;
    status: string;
    submittedDate: string;
    estimatedApprovalDate: string;
    actualApprovalDate: string;
    segmentIds: string[];
  }
  interface PtSegment {
    id: string;
    name: string;
    line: string;
    phases: string[];
    contractor: string;
    jurisdiction: string;
    lengthFt: number;
    geometry: [number, number][];
  }
  interface Payload {
    schemes: Scheme[];
    statusOrder: string[];
    statusLabels: Record<string, string>;
    permitLabels: Record<string, string>;
    permitOrder: string[];
    lines: { id: string; miles: string }[];
    permits: PtPermit[];
    segments: PtSegment[];
    reportHistory: { date: string; clearedMiles: number }[];
    reportAsOf: string;
    fullClearDate: string | null;
  }

  const DATA: Payload = JSON.parse(document.getElementById('pt-data')!.textContent || '{}');
  const permitById = new Map(DATA.permits.map((p) => [p.id, p]));
  const segById = new Map(DATA.segments.map((s) => [s.id, s]));
  const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

  // ── Derived-status model (same rules the fixture runs at build time) ────────
  const ORDINAL: Record<string, number | null> = {
    'not-started': 0,
    'in-preparation': 1,
    submitted: 2,
    'under-review': 3,
    issued: 4,
    'not-required': null,
  };
  const BY_ORDINAL = ['not-started', 'in-preparation', 'submitted', 'under-review', 'cleared'];

  const gating = (segId: string) =>
    DATA.permits.filter((p) => p.segmentIds.includes(segId) && p.status !== 'not-required');

  function derive(segId: string): string {
    const g = gating(segId);
    if (!g.length) return 'cleared';
    let min = Infinity;
    for (const p of g) {
      const o = ORDINAL[p.status];
      if (o !== null && o < min) min = o;
    }
    return min === Infinity || min >= 4 ? 'cleared' : BY_ORDINAL[min];
  }

  function clearDate(segId: string): string {
    const dates = gating(segId)
      .map((p) => p.actualApprovalDate || p.estimatedApprovalDate)
      .filter(Boolean);
    return dates.length ? dates.reduce((a, b) => (a > b ? a : b)) : '';
  }

  const fmtDate = (iso: string) => {
    if (!iso) return '—';
    const [y, m, d] = iso.split('-').map(Number);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[m - 1]} ${d}, ${y}`;
  };
  const fmtMiles = (ft: number) => `${(ft / 5280).toFixed(1)} mi`;

  // ── Change log (in-session store, seeded from the fixture's own dates so the
  //    design reads with history on day one; edits made in the UI append) ──────
  interface ChangeEntry {
    ts: string; // ISO — date-only for seeds, full datetime for live edits
    permitId: string;
    text: string;
    user: string;
  }
  const changeLog: ChangeEntry[] = [];
  const SEED_USERS = ['Sarah (GIS)', 'Ryan Swanson'];
  DATA.permits.forEach((p, i) => {
    const user = SEED_USERS[i % SEED_USERS.length];
    if (p.submittedDate) changeLog.push({ ts: p.submittedDate, permitId: p.id, text: 'Status → Submitted', user });
    if (p.actualApprovalDate) changeLog.push({ ts: p.actualApprovalDate, permitId: p.id, text: 'Status → Issued', user });
  });
  const logChange = (permitId: string, text: string) =>
    changeLog.push({ ts: new Date().toISOString(), permitId, text, user: 'Andy Lovseth' });
  const fmtTs = (ts: string) =>
    ts.length > 10 ? `Today · ${new Date(ts).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}` : fmtDate(ts);
  const entriesFor = (pid?: string) =>
    changeLog.filter((c) => !pid || c.permitId === pid).sort((a, b) => b.ts.localeCompare(a.ts));

  // ── Chip updates (BcnStatusChip hooks — drawer + template clones) ────────────
  function setChip(wrapper: Element, statusKey: string, label: string) {
    const chip = wrapper.querySelector<HTMLElement>('.bcn-status-chip');
    if (!chip) return;
    const varKey = statusKey === 'issued' ? 'cleared' : statusKey;
    chip.style.setProperty('--_chip', `var(--st-${varKey})`);
    chip.dataset.status = statusKey;
    const text = chip.querySelector('.bcn-status-chip__label');
    if (text) text.textContent = label;
  }

  // ── Map (Leaflet, lazy-built so a #data deep link doesn't init at 0×0) ──────
  let map: L.Map | null = null;
  const coreById = new Map<string, L.Polyline>();
  const casingById = new Map<string, L.Polyline>();
  let activeSegId: string | null = null;

  // The committed palette (Cartographic — first scheme; matches the CSS --st-* defaults).
  const colorFor = (segId: string) => DATA.schemes[0].colors[derive(segId)];

  // Filter state (each single-select; null = All) — Paths × Status scopes the
  // map AND the figures below it.
  let activeLine: string | null = null;
  let activeStatus: string | null = null;
  const segShown = (s: PtSegment) =>
    (!activeLine || s.line === activeLine) && (!activeStatus || derive(s.id) === activeStatus);
  const visibleSegs = () => DATA.segments.filter(segShown);

  /** Fit the viewport tight to the VISIBLE segments — fractional zoom (zoomSnap
      0.25) + pixel padding instead of a 12% bounds pad, so the default view is
      as zoomed-in as the geometry allows. Re-runs whenever the filters change. */
  function fitVisible() {
    if (!map) return;
    const pts: L.LatLngTuple[] = [];
    visibleSegs().forEach((s) => s.geometry.forEach((c) => pts.push(c as L.LatLngTuple)));
    if (pts.length) map.fitBounds(L.latLngBounds(pts), { padding: [32, 32] });
  }

  /** Add/remove segment layers per the current filters. Status is DERIVED, so
      edits can move a segment in/out of an active status filter — refreshSegments
      re-syncs the affected ones (without refitting the viewport). */
  function syncVisibility(segIds?: string[]) {
    if (!map) return;
    for (const seg of DATA.segments) {
      if (segIds && !segIds.includes(seg.id)) continue;
      const show = segShown(seg);
      const core = coreById.get(seg.id);
      const casing = casingById.get(seg.id);
      if (!core || !casing) continue;
      if (show) {
        casing.addTo(map);
        core.addTo(map);
      } else {
        core.removeFrom(map);
        casing.removeFrom(map);
      }
    }
  }

  function buildMap() {
    map = L.map('permit-map', { zoomControl: true, attributionControl: true, zoomSnap: 0.25 });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(map);

    for (const seg of DATA.segments) {
      const casing = L.polyline(seg.geometry, {
        color: '#ffffff',
        weight: 9,
        opacity: 1,
        lineCap: 'round',
        lineJoin: 'round',
        interactive: false,
      });
      const core = L.polyline(seg.geometry, {
        color: colorFor(seg.id),
        weight: 5,
        opacity: 0.95,
        lineCap: 'round',
        lineJoin: 'round',
      });

      core.on('mouseover', () => core.setStyle({ weight: 7 }));
      core.on('mouseout', () => core.setStyle({ weight: activeSegId === seg.id ? 8 : 5 }));
      core.on('click', () => openSegment(seg.id));
      core.bindTooltip(`${seg.name} · ${seg.line}`, { sticky: true, direction: 'top', offset: [0, -6] });

      coreById.set(seg.id, core);
      casingById.set(seg.id, casing);
    }
    applyFilters(); // adds the visible layers + fits the viewport
  }

  const ensureMap = () => (map ? map.invalidateSize() : buildMap());

  /** Filter change: re-sync layers, refit, re-scope every figure below the map. */
  function applyFilters() {
    syncVisibility();
    fitVisible();
    refreshBurndown();
    renderInsights();
    renderTimeline();
  }

  // ── Mileage strip (secondary figure below the map; scoped to visible paths) ─
  function refreshBurndown() {
    const totals = new Map<string, number>(DATA.statusOrder.map((s) => [s, 0]));
    let total = 0;
    for (const seg of visibleSegs()) {
      const st = derive(seg.id);
      totals.set(st, (totals.get(st) ?? 0) + seg.lengthFt);
      total += seg.lengthFt;
    }
    const pct = (ft: number) => (total ? Math.round((ft / total) * 100) : 0);
    const cleared = totals.get('cleared') ?? 0;
    $('bd-cleared').textContent = fmtMiles(cleared);
    $('bd-total').textContent = `of ${fmtMiles(total)} total · ${pct(cleared)}%`;

    const bar = $('bd-bar');
    bar.innerHTML = '';
    for (const status of DATA.statusOrder) {
      const ft = totals.get(status) ?? 0;
      if (!ft) continue;
      const div = document.createElement('div');
      div.style.cssText = `height:100%; flex: 0 0 ${(ft / total) * 100}%; background:var(--st-${status});`;
      div.title = `${DATA.statusLabels[status]}: ${fmtMiles(ft)}`;
      bar.appendChild(div);
    }
    for (const status of DATA.statusOrder) {
      const ft = totals.get(status) ?? 0;
      document.querySelector(`[data-bd-mi="${status}"]`)!.textContent = fmtMiles(ft);
      document.querySelector(`[data-bd-pct="${status}"]`)!.textContent = `${pct(ft)}%`;
      (document.querySelector(`[data-bd-item="${status}"]`) as HTMLElement).dataset.empty = ft ? 'false' : 'true';
    }
  }

  // ── Insight cards (JS-rendered from the store; re-run after every edit and
  //    scoped to the visible paths — a permit counts if it covers at least one
  //    visible segment) ─────────────────────────────────────────────────────────
  function renderInsights() {
    const stVar = (s: string) => `var(--st-${s === 'issued' ? 'cleared' : s === 'not-required' ? 'not-required' : s})`;
    const visibleIds = new Set(visibleSegs().map((s) => s.id));
    const scopedPermits = DATA.permits.filter((p) => p.segmentIds.some((sid) => visibleIds.has(sid)));
    const row = (html: string, permitId?: string) => {
      const li = document.createElement('li');
      li.className = 'ins-row';
      if (permitId) {
        li.dataset.insPermit = permitId;
        li.tabIndex = 0;
        li.setAttribute('role', 'button');
      }
      li.innerHTML = html;
      return li;
    };

    // 1. Permits by status — count + proportional bar per ladder step.
    const counts = new Map<string, number>(DATA.permitOrder.map((s) => [s, 0]));
    scopedPermits.forEach((p) => counts.set(p.status, (counts.get(p.status) ?? 0) + 1));
    const statusList = $('ins-status');
    statusList.innerHTML = '';
    for (const s of DATA.permitOrder) {
      const n = counts.get(s) ?? 0;
      statusList.appendChild(
        row(`<span class="ins-dot" style="background:${stVar(s)}"></span>
          <span class="ins-row__label">${DATA.permitLabels[s]}</span>
          <span class="ins-bar"><span style="display:block;height:100%;border-radius:inherit;width:${scopedPermits.length ? (n / scopedPermits.length) * 100 : 0}%;background:${stVar(s)}"></span></span>
          <span class="ins-row__val">${n}</span>`)
      );
    }

    // 2. Top blockers — pending permits ranked by VISIBLE route-miles they gate.
    const blockers = scopedPermits
      .filter((p) => p.status !== 'issued' && p.status !== 'not-required')
      .map((p) => {
        const segs = p.segmentIds.filter((sid) => visibleIds.has(sid));
        return { p, segs: segs.length, feet: segs.reduce((sum, sid) => sum + (segById.get(sid)?.lengthFt ?? 0), 0) };
      })
      .filter((b) => b.feet > 0)
      .sort((a, b) => b.feet - a.feet)
      .slice(0, 5);
    const blockerList = $('ins-blockers');
    blockerList.innerHTML = '';
    for (const { p, segs, feet } of blockers) {
      blockerList.appendChild(
        row(`<span class="ins-dot" style="background:${stVar(p.status)}"></span>
          <span class="ins-row__label">${p.name}<span class="ins-row__sub">${p.agency} · ${segs} segment${segs === 1 ? '' : 's'}</span></span>
          <span class="ins-row__val">${fmtMiles(feet)}<span class="ins-row__sub">gated</span></span>`, p.id)
      );
    }
  }

  // ── Clear-to-build timeline (segments by projected clear date) ─
  function renderTimeline() {
    const rowsEl = $('ctb-rows');
    const axisEl = $('ctb-axis');
    const todayIso = new Date().toISOString().slice(0, 10);

    const items = visibleSegs()
      .map((s) => ({ s, st: derive(s.id), iso: clearDate(s.id) }))
      .sort((a, b) => (a.iso || '9999').localeCompare(b.iso || '9999'));

    rowsEl.innerHTML = '';
    axisEl.innerHTML = '';
    const dated = items.filter((i) => i.iso);
    if (!dated.length) return;

    const minIso = dated[0].iso < todayIso ? dated[0].iso : todayIso;
    const maxIso = dated.reduce((a, b) => (a > b.iso ? a : b.iso), todayIso);
    const start = new Date(new Date(minIso).getFullYear(), new Date(minIso).getMonth(), 1);
    const end = new Date(new Date(maxIso).getFullYear(), new Date(maxIso).getMonth() + 1, 1);
    const span = end.getTime() - start.getTime();
    const pct = (iso: string) => Math.min(100, Math.max(0, ((new Date(iso).getTime() - start.getTime()) / span) * 100));

    // month ticks (+ Today marker)
    const months: Date[] = [];
    for (const d = new Date(start); d < end; d.setMonth(d.getMonth() + 1)) months.push(new Date(d));
    const step = months.length > 10 ? 2 : 1;
    months.forEach((m, i) => {
      if (i % step) return;
      const tick = document.createElement('span');
      tick.className = 'ctb-tick';
      tick.style.left = `${((m.getTime() - start.getTime()) / span) * 100}%`;
      tick.textContent =
        m.toLocaleDateString([], { month: 'short' }) + (i === 0 || m.getMonth() === 0 ? ` ’${String(m.getFullYear()).slice(2)}` : '');
      axisEl.appendChild(tick);
    });
    const todayTick = document.createElement('span');
    todayTick.className = 'ctb-tick ctb-tick--today';
    todayTick.style.left = `${pct(todayIso)}%`;
    todayTick.textContent = 'Today';
    axisEl.appendChild(todayTick);

    const todayX = pct(todayIso);
    for (const it of items) {
      const li = document.createElement('li');
      li.className = 'ctb-row';
      const x = it.iso ? pct(it.iso) : null;
      li.innerHTML = `
        <span class="ctb-row__name">${it.s.name}<span class="ctb-row__sub">${it.s.line}</span></span>
        <span class="ctb-row__track">${
          x == null
            ? ''
            : `<span class="ctb-row__bar" style="left:${Math.min(todayX, x)}%; width:${Math.max(0.5, Math.abs(x - todayX))}%; background:var(--st-${it.st});"></span>
               <span class="ctb-row__dot" style="left:${x}%; background:var(--st-${it.st});"></span>`
        }</span>
        <span class="ctb-row__meta">${it.iso ? fmtDate(it.iso) : '—'}</span>`;
      li.addEventListener('click', () => openSegment(it.s.id));
      rowsEl.appendChild(li);
    }
  }

  // Insight rows deep-link to the permit editor.
  document.querySelector('.insights')!.addEventListener('click', (e) => {
    const li = (e.target as HTMLElement).closest<HTMLElement>('[data-ins-permit]');
    if (li) openPermit(li.dataset.insPermit!);
  });

  // ── Executive Summary (Tab 3) — whole-project, miles-weighted rollup ─────────
  //    Re-derives from the SAME store as the map, but is NEVER scoped to the map's
  //    path/status filters: a leadership rollup is always the entire route. Repaints
  //    on boot and after every permit edit (savePermit / bulk-apply).
  const setStat = (wrapId: string, value?: string, sub?: string) => {
    const wrap = $(wrapId);
    if (value != null) { const v = wrap.querySelector('.esa-stat__value'); if (v) v.textContent = value; }
    if (sub != null) { const s = wrap.querySelector('.esa-stat__sub'); if (s) s.textContent = sub; }
  };

  // Burn-up: cumulative miles cleared (frozen history + live "today") vs. the
  // projected path to full clearance. The SVG viewBox is drawn at the container's
  // REAL pixel width (1:1), not a fixed 760, so the axis/label text is true pixels
  // and never balloons when the card is wide. We cache the last inputs + width and
  // a ResizeObserver re-renders on resize (and when the tab first becomes visible,
  // where the hidden container measures 0 → fall back to 760 until shown).
  interface BurnupArgs {
    clearedMi: number;
    totalMi: number;
    projected: { iso: string; mi: number }[];
  }
  let _lastBurnup: BurnupArgs | null = null;
  let _lastBurnupW = -1;
  function renderBurnup(clearedMi: number, totalMi: number, projected: { iso: string; mi: number }[]) {
    const hist = DATA.reportHistory;
    const actual = [...hist.map((h) => ({ iso: h.date, mi: h.clearedMiles })), { iso: DATA.reportAsOf, mi: clearedMi }];
    const startIso = actual[0].iso;
    const endIso = projected.length > 1 ? projected[projected.length - 1].iso : DATA.reportAsOf;
    const t0 = Date.parse(startIso), t1 = Date.parse(endIso);
    const host = $('exec-burnup');
    _lastBurnup = { clearedMi, totalMi, projected };
    _lastBurnupW = Math.round(host.clientWidth) || 760;
    const W = _lastBurnupW, H = 280, PAD = { l: 44, r: 20, t: 22, b: 30 };
    const plotW = W - PAD.l - PAD.r, plotH = H - PAD.t - PAD.b;
    const yMax = Math.max(totalMi, 1);
    const x = (iso: string) => PAD.l + ((Date.parse(iso) - t0) / (t1 - t0 || 1)) * plotW;
    const y = (mi: number) => PAD.t + (1 - mi / yMax) * plotH;

    let grid = '';
    for (const f of [0, 0.25, 0.5, 0.75, 1]) {
      const yy = y(yMax * f).toFixed(1);
      grid += `<line x1="${PAD.l}" y1="${yy}" x2="${W - PAD.r}" y2="${yy}" class="bu-grid"/>`;
      grid += `<text x="${PAD.l - 8}" y="${yy}" class="bu-ylabel">${Math.round(yMax * f)}</text>`;
    }
    const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let xticks = '';
    for (let t = new Date(new Date(t0).getFullYear(), new Date(t0).getMonth(), 1).getTime(); t <= t1; t = new Date(new Date(t).getFullYear(), new Date(t).getMonth() + 1, 1).getTime()) {
      const dt = new Date(t);
      xticks += `<text x="${x(dt.toISOString().slice(0, 10)).toFixed(1)}" y="${H - 8}" class="bu-xlabel">${MON[dt.getMonth()]}</text>`;
    }
    const yTop = y(yMax).toFixed(1);
    const todayX = x(DATA.reportAsOf).toFixed(1);
    const target = `<line x1="${PAD.l}" y1="${yTop}" x2="${W - PAD.r}" y2="${yTop}" class="bu-target"/>`;
    const todayMark = `<line x1="${todayX}" y1="${PAD.t}" x2="${todayX}" y2="${H - PAD.b}" class="bu-today"/><text x="${todayX}" y="${PAD.t - 6}" class="bu-todaylabel">Today</text>`;
    // Actual (history → today): solid line + area under
    const aPts = actual.map((p) => `${x(p.iso).toFixed(1)},${y(p.mi).toFixed(1)}`).join(' ');
    const areaPts = `${PAD.l},${y(0).toFixed(1)} ${aPts} ${todayX},${y(0).toFixed(1)}`;
    const aDots = actual.map((p) => `<circle cx="${x(p.iso).toFixed(1)}" cy="${y(p.mi).toFixed(1)}" r="3" class="bu-dot"/>`).join('');
    // Projected (today → full clearance): dashed continuation from estimated dates
    const pPts = projected.map((p) => `${x(p.iso).toFixed(1)},${y(p.mi).toFixed(1)}`).join(' ');
    const projLine = projected.length > 1 ? `<polyline points="${pPts}" class="bu-proj"/>` : '';
    const nowLabel = `<text x="${todayX}" y="${(y(clearedMi) - 9).toFixed(1)}" class="bu-nowlabel">${clearedMi.toFixed(1)} mi</text>`;

    $('exec-burnup').innerHTML =
      `<svg viewBox="0 0 ${W} ${H}" class="bu-svg" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Cumulative route-miles cleared to date, with the projected path to full clearance from current agency estimates">` +
      grid + xticks + target + projLine +
      `<polygon points="${areaPts}" class="bu-area"/><polyline points="${aPts}" class="bu-actual"/>` +
      aDots + todayMark + nowLabel + '</svg>';
  }

  function renderExec() {
    // 1 ▸ whole-project miles by derived status (ALL segments — never filtered)
    const statusFeet = new Map<string, number>(DATA.statusOrder.map((s) => [s, 0]));
    let totalFt = 0;
    for (const s of DATA.segments) {
      const st = derive(s.id);
      statusFeet.set(st, (statusFeet.get(st) ?? 0) + s.lengthFt);
      totalFt += s.lengthFt;
    }
    const clearedFt = statusFeet.get('cleared') ?? 0;
    const clearedMi = clearedFt / 5280, totalMi = totalFt / 5280;
    const heroPct = totalFt ? Math.round((clearedFt / totalFt) * 100) : 0;

    setStat('exec-hero-stat', `${heroPct}%`);
    $('exec-donut-pct').textContent = `${heroPct}%`;

    const lastSnap = DATA.reportHistory[DATA.reportHistory.length - 1];
    const trend = clearedMi - lastSnap.clearedMiles;
    setStat('exec-trend-stat', `${trend >= 0 ? '+' : '−'}${Math.abs(trend).toFixed(1)} mi`);
    const ti = $('exec-trend-icon');
    ti.classList.toggle('exec__kpi-icon--up', trend > 0.05);
    ti.classList.toggle('exec__kpi-icon--down', trend < -0.05);

    const allDates = DATA.segments.map((s) => clearDate(s.id)).filter(Boolean);
    const fullClear = allDates.length ? allDates.reduce((a, b) => (a > b ? a : b)) : '';
    setStat('exec-forecast-stat', fullClear ? fmtDate(fullClear) : '—');

    // 2 ▸ status donut + legend (colors track the runtime --st-* palette)
    let acc = 0;
    const stops: string[] = [];
    const legend = $('exec-donut-legend');
    legend.innerHTML = '';
    for (const status of DATA.statusOrder) {
      const ft = statusFeet.get(status) ?? 0;
      const from = totalFt ? (acc / totalFt) * 100 : 0;
      acc += ft;
      const to = totalFt ? (acc / totalFt) * 100 : 0;
      if (ft > 0) stops.push(`var(--st-${status}) ${from.toFixed(2)}% ${to.toFixed(2)}%`);
      const li = document.createElement('li');
      li.className = 'exec-legend__item';
      li.dataset.empty = ft ? 'false' : 'true';
      li.innerHTML = `<span class="exec-legend__dot" style="background:var(--st-${status})"></span>
        <span class="exec-legend__label">${DATA.statusLabels[status]}</span>
        <span class="exec-legend__mi">${fmtMiles(ft)}</span>
        <span class="exec-legend__pct">${totalFt ? Math.round((ft / totalFt) * 100) : 0}%</span>`;
      legend.appendChild(li);
    }
    $('exec-donut').style.background = stops.length ? `conic-gradient(${stops.join(', ')})` : 'var(--bcn-gray-100)';

    // 3 ▸ per-path stacked status bars
    const pathsEl = $('exec-paths');
    pathsEl.innerHTML = '';
    for (const line of DATA.lines) {
      const segs = DATA.segments.filter((s) => s.line === line.id);
      const lineFt = segs.reduce((a, s) => a + s.lengthFt, 0);
      const segsHtml = DATA.statusOrder
        .map((status) => ({ status, ft: segs.filter((s) => derive(s.id) === status).reduce((a, s) => a + s.lengthFt, 0) }))
        .filter((b) => b.ft > 0)
        .map((b) => `<span class="exec-path__seg" style="flex:0 0 ${lineFt ? (b.ft / lineFt) * 100 : 0}%; background:var(--st-${b.status});" title="${DATA.statusLabels[b.status]}: ${fmtMiles(b.ft)}"></span>`)
        .join('');
      const clearedLineFt = segs.filter((s) => derive(s.id) === 'cleared').reduce((a, s) => a + s.lengthFt, 0);
      const dates = segs.map((s) => clearDate(s.id)).filter(Boolean);
      const clearBy = dates.length ? dates.reduce((a, b) => (a > b ? a : b)) : '';
      const li = document.createElement('li');
      li.className = 'exec-path';
      li.innerHTML = `
        <div class="exec-path__head">
          <span class="exec-path__name">${line.id}</span>
          <span class="exec-path__metric"><strong>${fmtMiles(clearedLineFt)}</strong> cleared of ${fmtMiles(lineFt)} · ${lineFt ? Math.round((clearedLineFt / lineFt) * 100) : 0}%</span>
        </div>
        <div class="exec-path__bar">${segsHtml || '<span class="exec-path__seg" style="flex:1;background:var(--bcn-gray-100)"></span>'}</div>
        <div class="exec-path__foot"><span>Projected clear-to-build</span><span class="exec-path__clearby">${clearBy ? fmtDate(clearBy) : '—'}</span></div>`;
      pathsEl.appendChild(li);
    }

    // 4 ▸ momentum burn-up — actual history → today, then a PROJECTED continuation
    //     built from each pending segment's estimated clear-to-build date. It's a
    //     forecast (when the route is expected to clear if estimates hold), NOT a
    //     target/schedule — there's no committed deadline; every permit is pursued ASAP.
    const projByDate = new Map<string, number>();
    for (const s of DATA.segments) {
      if (derive(s.id) === 'cleared') continue;
      const d = clearDate(s.id);
      if (!d) continue;
      const iso = d > DATA.reportAsOf ? d : DATA.reportAsOf; // clamp overdue estimates to today
      projByDate.set(iso, (projByDate.get(iso) ?? 0) + s.lengthFt / 5280);
    }
    let cum = clearedMi;
    const projected = [{ iso: DATA.reportAsOf, mi: clearedMi }];
    for (const [iso, mi] of [...projByDate.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
      cum += mi;
      projected.push({ iso, mi: cum });
    }
    renderBurnup(clearedMi, totalMi, projected);
  }

  // ── AG Grids (beacon-grid kit; lazy-built when the Data tab first shows) ────
  interface PermitRow {
    id: string;
    name: string;
    agency: string;
    agencyLevel: string;
    type: string;
    status: string;
    estDate: string;
    segments: number;
  }
  interface SegmentRow {
    id: string;
    name: string;
    line: string;
    phases: string;
    jurisdiction: string;
    lengthFt: number;
    status: string;
    clearDate: string;
    permits: number;
  }

  const buildPermitRows = (): PermitRow[] =>
    DATA.permits.map((p) => ({
      id: p.id,
      name: p.name,
      agency: p.agency,
      agencyLevel: p.agencyLevel,
      type: p.type,
      status: p.status,
      estDate: fmtDate(p.actualApprovalDate || p.estimatedApprovalDate),
      segments: p.segmentIds.length,
    }));

  const buildSegmentRows = (): SegmentRow[] =>
    DATA.segments.map((s) => ({
      id: s.id,
      name: s.name,
      line: s.line,
      phases: s.phases.join(' + '),
      jurisdiction: s.jurisdiction,
      lengthFt: s.lengthFt,
      status: derive(s.id),
      clearDate: fmtDate(clearDate(s.id)),
      permits: gating(s.id).length,
    }));

  // Chip renderers read the runtime --st-* vars, so grid chips follow the
  // map's color-scheme switcher with zero refresh work.
  const permitChip = makeStatusRenderer(
    Object.fromEntries(
      DATA.permitOrder.map((s) => [
        s,
        {
          label: DATA.permitLabels[s],
          hex: s === 'issued' ? 'var(--st-cleared)' : s === 'not-required' ? 'var(--st-not-required)' : `var(--st-${s})`,
        },
      ])
    )
  );
  const segmentChip = makeStatusRenderer(
    Object.fromEntries(DATA.statusOrder.map((s) => [s, { label: DATA.statusLabels[s], hex: `var(--st-${s})` }]))
  );

  // Facets (Status / Level dropdowns) → AG Grid external filter.
  let statusFacet: string[] = [];
  let levelFacet: string[] = [];
  let permitsApi: GridApi<PermitRow> | null = null;
  let segmentsApi: GridApi<SegmentRow> | null = null;
  let pivotValue = 'permits';
  const activeApi = (): GridApi<PermitRow> | GridApi<SegmentRow> | null =>
    pivotValue === 'permits' ? permitsApi : segmentsApi;

  function updateCounts() {
    const api = activeApi();
    if (!api) return;
    const total = pivotValue === 'permits' ? DATA.permits.length : DATA.segments.length;
    const displayed = api.getDisplayedRowCount();
    $('pt-total').textContent = String(total);
    const filteredEl = $('pt-filtered');
    if (displayed < total) {
      filteredEl.hidden = false;
      filteredEl.textContent = `Filtered Records: ${displayed}`;
    } else {
      filteredEl.hidden = true;
    }
  }

  function ensureGrids() {
    if (permitsApi) return;

    // flex (not fixed width) so the grid always spans its container.
    // Status + dates lead (cols 2/3) — they're what this view is for.
    const permitCols: ColDef<PermitRow>[] = [
      { field: 'name', headerName: 'Permit', flex: 2.2, minWidth: 240 },
      {
        field: 'status',
        headerName: 'Status',
        flex: 1.2,
        minWidth: 160,
        cellRenderer: permitChip,
        cellClass: 'bcn-grid-status-cell',
        filterValueGetter: (p) => DATA.permitLabels[p.data!.status],
      },
      { field: 'estDate', headerName: 'Est. Approval', flex: 1, minWidth: 130 },
      { field: 'agency', headerName: 'Agency', flex: 1.8, minWidth: 200 },
      { field: 'agencyLevel', headerName: 'Level', flex: 0.7, minWidth: 90 },
      { field: 'type', headerName: 'Type', flex: 1.1, minWidth: 130 },
      { field: 'segments', headerName: 'Segments', flex: 0.7, minWidth: 100, type: 'numericColumn' },
    ];

    const segmentCols: ColDef<SegmentRow>[] = [
      { field: 'name', headerName: 'Segment', flex: 1.3, minWidth: 150 },
      {
        field: 'status',
        headerName: 'Derived Status',
        flex: 1.3,
        minWidth: 180,
        cellRenderer: segmentChip,
        cellClass: 'bcn-grid-status-cell',
        filterValueGetter: (p) => DATA.statusLabels[p.data!.status],
      },
      { field: 'clearDate', headerName: 'Clear-to-Build', flex: 1, minWidth: 130 },
      { field: 'line', headerName: 'Path', flex: 0.7, minWidth: 90 },
      { field: 'phases', headerName: 'Phase', flex: 1, minWidth: 120 },
      { field: 'jurisdiction', headerName: 'Jurisdiction', flex: 1.5, minWidth: 180 },
      {
        field: 'lengthFt',
        headerName: 'Length',
        flex: 0.7,
        minWidth: 100,
        type: 'numericColumn',
        valueFormatter: (p) => fmtMiles(p.value as number),
      },
      { field: 'permits', headerName: 'Permits', flex: 0.6, minWidth: 90, type: 'numericColumn' },
    ];

    const shared = {
      theme: beaconTheme,
      defaultColDef: {
        sortable: true,
        resizable: true,
        filter: true,
        floatingFilter: false,
        suppressHeaderMenuButton: true,
      },
      onFilterChanged: updateCounts,
      onFirstDataRendered: updateCounts,
    };

    const permitOptions: GridOptions<PermitRow> = {
      ...shared,
      rowData: buildPermitRows(),
      columnDefs: permitCols,
      // Checkbox multi-select drives the bulk status bar; row clicks still open
      // the drawer (click-to-select is off, so the two don't fight).
      rowSelection: { mode: 'multiRow' },
      onSelectionChanged: () => updateBulkBar(),
      isExternalFilterPresent: () => statusFacet.length > 0 || levelFacet.length > 0,
      doesExternalFilterPass: (node: IRowNode<PermitRow>) => {
        const r = node.data;
        if (!r) return true;
        if (statusFacet.length && !statusFacet.includes(r.status)) return false;
        if (levelFacet.length && !levelFacet.includes(r.agencyLevel)) return false;
        return true;
      },
      onRowClicked: (e) => {
        if ((e.event?.target as HTMLElement | undefined)?.closest('.ag-selection-checkbox, .ag-checkbox')) return;
        if (e.data) openPermit(e.data.id);
      },
    };

    const segmentOptions: GridOptions<SegmentRow> = {
      ...shared,
      rowData: buildSegmentRows(),
      columnDefs: segmentCols,
      isExternalFilterPresent: () => statusFacet.length > 0,
      doesExternalFilterPass: (node: IRowNode<SegmentRow>) => {
        const r = node.data;
        if (!r) return true;
        if (statusFacet.length && !statusFacet.includes(r.status)) return false;
        return true;
      },
      onRowClicked: (e) => e.data && openSegment(e.data.id),
    };

    permitsApi = createGrid($('grid-permits'), permitOptions);
    segmentsApi = createGrid($('grid-segments'), segmentOptions);
  }

  function refreshGrids() {
    permitsApi?.setGridOption('rowData', buildPermitRows());
    segmentsApi?.setGridOption('rowData', buildSegmentRows());
    updateCounts();
  }

  // ── Bulk status update (permits grid checkbox selection → action bar) ───────
  const bulkBar = $('bulk-bar');
  const bulkStatus = $('bulk-status') as Field;
  bulkStatus.options = DATA.permitOrder.map((s) => ({ value: s, label: DATA.permitLabels[s] }));

  function updateBulkBar() {
    const n = permitsApi?.getSelectedRows().length ?? 0;
    bulkBar.hidden = n === 0 || pivotValue !== 'permits';
    $('bulk-count').textContent = `${n} permit${n === 1 ? '' : 's'} selected`;
  }

  $('bulk-apply').addEventListener('click', () => {
    const status = bulkStatus.value;
    const rows = permitsApi?.getSelectedRows() ?? [];
    if (!status || !rows.length) return;
    const affected = new Set<string>();
    for (const r of rows) {
      const p = permitById.get(r.id)!;
      if (p.status === status) continue;
      logChange(p.id, `Status: ${DATA.permitLabels[p.status]} → ${DATA.permitLabels[status]}`);
      p.status = status;
      p.segmentIds.forEach((sid) => affected.add(sid));
      refreshPermitUI(p.id);
    }
    refreshSegments([...affected]);
    refreshBurndown();
    refreshGrids(); // rowData reset also clears the selection
    renderInsights();
    renderTimeline();
    renderExec();
    updateBulkBar();
  });
  $('bulk-clear').addEventListener('click', () => permitsApi?.deselectAll());

  // ── Filter bar wiring ────────────────────────────────────────────────────────
  type FilterDropdownEl = HTMLElement & { options: { label: string; value: string }[]; _selected: string[] };
  const fltStatus = $('flt-status') as FilterDropdownEl;
  const fltLevel = $('flt-level') as FilterDropdownEl;

  const statusOptionsFor = (pivot: string) =>
    pivot === 'permits'
      ? DATA.permitOrder.map((s) => ({ value: s, label: DATA.permitLabels[s] }))
      : DATA.statusOrder.map((s) => ({ value: s, label: DATA.statusLabels[s] }));

  fltStatus.options = statusOptionsFor('permits');
  fltLevel.options = [...new Set(DATA.permits.map((p) => p.agencyLevel))].map((v) => ({ value: v, label: v }));

  fltStatus.addEventListener('selection-change', (e) => {
    statusFacet = ((e as CustomEvent).detail?.value as string[]) ?? [];
    activeApi()?.onFilterChanged();
  });
  fltLevel.addEventListener('selection-change', (e) => {
    levelFacet = ((e as CustomEvent).detail?.value as string[]) ?? [];
    permitsApi?.onFilterChanged();
  });

  $('pt-clear-filters').addEventListener('esa-filter-clear', () => {
    statusFacet = [];
    levelFacet = [];
    fltStatus._selected = [];
    fltLevel._selected = [];
    permitsApi?.setFilterModel(null);
    segmentsApi?.setFilterModel(null);
    permitsApi?.onFilterChanged();
    segmentsApi?.onFilterChanged();
  });

  // Keyword search → quick filter on both grids (esa-text-field 'change' per keystroke).
  const search = $('pt-search') as HTMLElement & { value: string; placeholder: string };
  const searchClear = $('pt-search-clear');
  search.addEventListener('change', (e) => {
    const v = (e as CustomEvent).detail?.value ?? search.value ?? '';
    permitsApi?.setGridOption('quickFilterText', v);
    segmentsApi?.setGridOption('quickFilterText', v);
    searchClear.hidden = !v;
  });
  searchClear.addEventListener('click', () => {
    search.value = '';
    permitsApi?.setGridOption('quickFilterText', '');
    segmentsApi?.setGridOption('quickFilterText', '');
    searchClear.hidden = true;
  });

  // Pivot toggle (esa-button-toggle lego)
  const pivot = $('pivot-toggle') as HTMLElement & { options: { value: string; label: string }[]; value: string };
  pivot.options = [
    { value: 'permits', label: 'Permits' },
    { value: 'segments', label: 'Segments' },
  ];
  pivot.addEventListener('change', (e) => {
    pivotValue = ((e as CustomEvent).detail?.value as string) ?? pivot.value;
    const isPermits = pivotValue === 'permits';
    $('pane-permits').hidden = !isPermits;
    $('pane-segments').hidden = isPermits;
    $('flt-level-wrap').hidden = !isPermits;
    search.placeholder = isPermits ? 'Search permits…' : 'Search segments…';
    // Status values differ per pivot (permit ladder vs derived) — swap + reset.
    statusFacet = [];
    fltStatus._selected = [];
    fltStatus.options = statusOptionsFor(pivotValue);
    permitsApi?.deselectAll();
    updateBulkBar();
    permitsApi?.onFilterChanged();
    segmentsApi?.onFilterChanged();
    updateCounts();
  });

  $('pt-download').addEventListener('click', () =>
    activeApi()?.exportDataAsCsv({ fileName: `permit-tracking-${pivotValue}.csv` })
  );

  // ── Live refresh after an edit ───────────────────────────────────────────────
  function refreshPermitUI(pid: string) {
    const p = permitById.get(pid)!;
    document.querySelectorAll(`[data-permit-chip="${pid}"]`).forEach((el) => setChip(el, p.status, DATA.permitLabels[p.status]));
    const est = fmtDate(p.actualApprovalDate || p.estimatedApprovalDate);
    document.querySelectorAll(`[data-permit-date="${pid}"]`).forEach((el) => (el.textContent = est));
  }

  function refreshSegments(segIds?: string[]) {
    for (const seg of DATA.segments) {
      if (segIds && !segIds.includes(seg.id)) continue;
      const core = coreById.get(seg.id);
      if (core) core.setStyle({ color: colorFor(seg.id) });
    }
    syncVisibility(segIds); // derived status may move a segment in/out of the status filter
    if (activeSegId && (!segIds || segIds.includes(activeSegId))) fillSegmentDialog(activeSegId);
  }

  // ── Segment drawer (read) ────────────────────────────────────────────────────
  type SideDialog = HTMLElement & { open: boolean; heading: string; show(): void; close(): void };
  const segDialog = $('segment-dialog') as SideDialog;
  const permitDialog = $('permit-dialog') as SideDialog;
  const rowTemplate = $('pt-permit-rows') as unknown as HTMLTemplateElement;

  function fillSegmentDialog(segId: string) {
    const seg = segById.get(segId)!;
    const st = derive(segId);
    segDialog.heading = seg.name; // aria-label; the visible header is the slot below
    $('sd-title').textContent = seg.name;
    setChip($('sd-chip'), st, DATA.statusLabels[st]);
    $('sd-path').textContent = seg.line;
    $('sd-phase').textContent = seg.phases.join(' + ');
    $('sd-clear').textContent = fmtDate(clearDate(segId));
    $('sd-length').textContent = `${fmtMiles(seg.lengthFt)} (${seg.lengthFt.toLocaleString()} ft)`;
    $('sd-jur').textContent = seg.jurisdiction;
    $('sd-build').textContent = seg.contractor ? `${seg.contractor} (proposed)` : '—';

    const covering = gating(segId);
    const countBadge = $('sd-count').querySelector('.esa-badge__text');
    if (countBadge) countBadge.textContent = String(covering.length);
    // The least-advanced ordinal among covering permits IS the segment status —
    // tag those permits so the derivation is legible.
    const minOrd = Math.min(...covering.map((p) => ORDINAL[p.status] ?? Infinity));
    const list = $('sd-permits');
    list.innerHTML = '';
    for (const p of covering) {
      const row = rowTemplate.content.querySelector(`[data-permit-row="${p.id}"]`)!.cloneNode(true) as HTMLElement;
      const tag = row.querySelector<HTMLElement>('[data-gating-tag]');
      if (tag) tag.hidden = !(ORDINAL[p.status] === minOrd && minOrd < 4);
      list.appendChild(row);
      refreshPermitUI(p.id); // clone may predate edits — repaint chip/date from the store
    }
  }

  function openSegment(segId: string) {
    activeSegId = segId;
    fillSegmentDialog(segId);
    segDialog.show();
    coreById.forEach((core, id) => core.setStyle({ weight: id === segId ? 8 : 5, opacity: id === segId ? 1 : 0.6 }));
  }
  segDialog.addEventListener('close', () => {
    activeSegId = null;
    coreById.forEach((core) => core.setStyle({ weight: 5, opacity: 0.95 }));
  });

  // Permit rows inside the segment drawer → the editor (stacks above).
  $('sd-permits').addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-edit-permit]');
    if (btn) openPermit(btn.dataset.editPermit!);
  });

  // ── Permit drawer (edit) ─────────────────────────────────────────────────────
  type Field = HTMLElement & { value: string; options?: { value: string; label: string }[] };
  let activePermitId: string | null = null;

  const pdStatus = $('pd-status') as Field;
  pdStatus.options = DATA.permitOrder.map((s) => ({ value: s, label: DATA.permitLabels[s] }));
  const pdSegments = $('pd-segments') as HTMLElement & {
    options: { value: string; label: string }[];
    value: string[];
  };
  pdSegments.options = DATA.segments.map((s) => ({ value: s.id, label: `${s.name} — ${s.line}` }));

  function openPermit(pid: string) {
    const p = permitById.get(pid)!;
    activePermitId = pid;
    permitDialog.heading = p.name; // aria-label; the visible header is the slot
    $('pd-title').textContent = p.name;
    setChip($('pd-chip'), p.status, DATA.permitLabels[p.status]);
    pdStatus.value = p.status;
    ($('pd-submitted') as Field).value = p.submittedDate;
    ($('pd-estimated') as Field).value = p.estimatedApprovalDate;
    ($('pd-actual') as Field).value = p.actualApprovalDate;
    pdSegments.value = [...p.segmentIds];
    // Details are read-only source-doc data.
    $('pd-agency').textContent = p.agency;
    $('pd-level').textContent = p.agencyLevel;
    $('pd-type').textContent = p.type;
    // Activity — this permit's change log, newest first.
    const act = $('pd-activity');
    act.innerHTML = '';
    const entries = entriesFor(pid).slice(0, 8);
    if (!entries.length) {
      act.innerHTML = `<li class="ins-row"><span class="ins-row__label"><span class="ins-row__sub">No changes yet — edits made here are logged.</span></span></li>`;
    }
    for (const c of entries) {
      const li = document.createElement('li');
      li.className = 'ins-row';
      li.innerHTML = `<span class="ins-row__label">${c.text}<span class="ins-row__sub">${c.user}</span></span>
        <span class="ins-row__val"><span class="ins-row__sub">${fmtTs(c.ts)}</span></span>`;
      act.appendChild(li);
    }
    renderComments(pid); // Comments thread for this permit (BCN-1364)
    // Card-stack when the editor opens over the segment drawer: the under card
    // slides left to peek out, and the top card brings NO second backdrop.
    const stacked = segDialog.open;
    permitDialog.classList.toggle('is-stacked', stacked);
    segDialog.classList.toggle('is-under', stacked);
    permitDialog.show();
  }
  permitDialog.addEventListener('close', () => segDialog.classList.remove('is-under'));

  function savePermit() {
    if (!activePermitId) return;
    const p = permitById.get(activePermitId)!;
    // Writable here: status, timing, segment applicability. Agency/level/type
    // are source-doc data (read-only).
    const before = new Set(p.segmentIds);
    const nextSegs = [...pdSegments.value];

    // Diff → change log (only what actually changed).
    if (p.status !== pdStatus.value)
      logChange(p.id, `Status: ${DATA.permitLabels[p.status]} → ${DATA.permitLabels[pdStatus.value]}`);
    const dateFields: [keyof PtPermit, string, string][] = [
      ['submittedDate', 'pd-submitted', 'Submitted date'],
      ['estimatedApprovalDate', 'pd-estimated', 'Estimated approval'],
      ['actualApprovalDate', 'pd-actual', 'Actual approval'],
    ];
    for (const [field, id, label] of dateFields) {
      const next = ($(id) as Field).value;
      if (p[field] !== next) logChange(p.id, `${label}: ${fmtDate(p[field] as string)} → ${fmtDate(next)}`);
    }
    const added = nextSegs.filter((s) => !before.has(s)).map((s) => segById.get(s)?.name);
    const removed = [...before].filter((s) => !nextSegs.includes(s)).map((s) => segById.get(s)?.name);
    if (added.length || removed.length)
      logChange(
        p.id,
        `Segments: ${[...added.map((n) => `+${n}`), ...removed.map((n) => `−${n}`)].join(', ')}`
      );

    p.status = pdStatus.value;
    p.submittedDate = ($('pd-submitted') as Field).value;
    p.estimatedApprovalDate = ($('pd-estimated') as Field).value;
    p.actualApprovalDate = ($('pd-actual') as Field).value;
    p.segmentIds = nextSegs;

    const affected = [...new Set([...before, ...p.segmentIds])];
    refreshPermitUI(activePermitId);
    refreshSegments(affected);
    refreshBurndown();
    refreshGrids();
    renderInsights();
    renderTimeline();
    renderExec();
    permitDialog.close();
    activePermitId = null;
  }
  $('pd-save').addEventListener('click', savePermit);
  $('pd-cancel').addEventListener('click', () => permitDialog.close());

  // ── Map filters (above the map) — scope layers, mileage strip, insights ─────
  type ToggleEl = HTMLElement & { options: { value: string; label: string }[]; value: string };
  const pathToggle = $('path-toggle') as ToggleEl;
  pathToggle.options = [{ value: 'all', label: 'All Paths' }, ...DATA.lines.map((l) => ({ value: l.id, label: l.id }))];
  pathToggle.addEventListener('change', (e) => {
    const v = ((e as CustomEvent).detail?.value as string) ?? pathToggle.value;
    activeLine = v === 'all' ? null : v;
    applyFilters();
  });

  const statusToggle = $('status-toggle') as ToggleEl;
  statusToggle.options = [
    { value: 'all', label: 'All' },
    ...DATA.statusOrder.map((s) => ({ value: s, label: s === 'cleared' ? 'Cleared' : DATA.statusLabels[s] })),
  ];
  statusToggle.addEventListener('change', (e) => {
    const v = ((e as CustomEvent).detail?.value as string) ?? statusToggle.value;
    activeStatus = v === 'all' ? null : v;
    applyFilters();
  });

  // ── Tabs (Map default; #data deep-links to the grid) ────────────────────────
  const tabs = $('pt-tabs') as HTMLElement & { tabs: { label: string; icon?: string }[]; activeIndex: number };
  const ICON = (paths: string) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  tabs.tabs = [
    {
      label: 'Map',
      icon: ICON(
        '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>'
      ),
    },
    {
      label: 'Data',
      icon: ICON('<path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/>'),
    },
    {
      label: 'Executive Summary',
      icon: ICON('<path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>'),
    },
  ];
  if (location.hash === '#data') tabs.activeIndex = 1;
  else if (location.hash === '#summary') tabs.activeIndex = 2;
  tabs.addEventListener('tabchange', (e) => {
    const idx = (e as CustomEvent).detail.index;
    history.replaceState(null, '', idx === 1 ? '#data' : idx === 2 ? '#summary' : '#map');
    if (idx === 0) requestAnimationFrame(ensureMap);
    else if (idx === 1) requestAnimationFrame(ensureGrids);
    else requestAnimationFrame(renderExec);
  });

  // ── Download KMZ (BCN-1364) — the whole route as a Google-Earth overlay,
  //    paths/segments colored by derived status, shareable without a Beacon login.
  //    A KMZ is a ZIP of doc.kml; we write a minimal store-only (uncompressed) ZIP
  //    in-browser so leadership gets a real .kmz, not a renamed .kml. Colors come
  //    from the committed map palette (scheme 0) so the overlay matches the app. ──
  const SCHEME = DATA.schemes[0].colors; // derived-status → hex (cartographic)
  /** #RRGGBB → KML aabbggr (opaque). */
  const kmlColor = (hex: string) => {
    const h = hex.replace('#', '');
    return `ff${h.slice(4, 6)}${h.slice(2, 4)}${h.slice(0, 2)}`.toLowerCase();
  };
  const xmlEscape = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  function buildKml(): string {
    const styles = DATA.statusOrder
      .map(
        (st) =>
          `<Style id="st-${st}"><LineStyle><color>${kmlColor(SCHEME[st] || '#888888')}</color><width>4</width></LineStyle></Style>`
      )
      .join('');
    const folders = DATA.lines
      .map((line) => {
        const placemarks = DATA.segments
          .filter((s) => s.line === line.id)
          .map((s) => {
            const st = derive(s.id);
            const coords = s.geometry.map(([lat, lng]) => `${lng},${lat},0`).join(' ');
            const gating = DATA.permits
              .filter((p) => p.segmentIds.includes(s.id) && p.status !== 'not-required')
              .map((p) => `${p.name} (${DATA.permitLabels[p.status]})`);
            const desc =
              `Path: ${s.line}\nStatus: ${DATA.statusLabels[st]}\nLength: ${fmtMiles(s.lengthFt)}\n` +
              `Projected clear: ${clearDate(s.id) ? fmtDate(clearDate(s.id)) : '—'}\n` +
              `Gating permits:\n  ${gating.join('\n  ') || '—'}`;
            return (
              `<Placemark><name>${xmlEscape(s.name)} — ${xmlEscape(DATA.statusLabels[st])}</name>` +
              `<description>${xmlEscape(desc)}</description><styleUrl>#st-${st}</styleUrl>` +
              `<LineString><tessellate>1</tessellate><coordinates>${coords}</coordinates></LineString></Placemark>`
            );
          })
          .join('');
        return `<Folder><name>${xmlEscape(line.id)}</name>${placemarks}</Folder>`;
      })
      .join('');
    return (
      `<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://www.opengis.net/kml/2.2"><Document>` +
      `<name>AWS Raul — Permit Tracking</name>` +
      `<description>${xmlEscape(`Route paths colored by derived permitting status. As of ${fmtDate(DATA.reportAsOf)}.`)}</description>` +
      styles +
      folders +
      `</Document></kml>`
    );
  }

  // Minimal store-only ZIP (one entry: doc.kml) → a valid .kmz.
  function crc32(bytes: Uint8Array): number {
    let c = ~0;
    for (let i = 0; i < bytes.length; i++) {
      c ^= bytes[i];
      for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
    }
    return (~c >>> 0) >>> 0;
  }
  function toKmz(kml: string): Blob {
    const enc = new TextEncoder();
    const name = enc.encode('doc.kml');
    const data = enc.encode(kml);
    const crc = crc32(data);
    const n = data.length;
    const local = new Uint8Array(30 + name.length);
    const ld = new DataView(local.buffer);
    ld.setUint32(0, 0x04034b50, true);
    ld.setUint16(4, 20, true);
    ld.setUint16(8, 0, true); // store
    ld.setUint32(14, crc, true);
    ld.setUint32(18, n, true);
    ld.setUint32(22, n, true);
    ld.setUint16(26, name.length, true);
    local.set(name, 30);
    const central = new Uint8Array(46 + name.length);
    const cd = new DataView(central.buffer);
    cd.setUint32(0, 0x02014b50, true);
    cd.setUint16(4, 20, true);
    cd.setUint16(6, 20, true);
    cd.setUint32(16, crc, true);
    cd.setUint32(20, n, true);
    cd.setUint32(24, n, true);
    cd.setUint16(28, name.length, true);
    central.set(name, 46);
    const eocd = new Uint8Array(22);
    const ed = new DataView(eocd.buffer);
    ed.setUint32(0, 0x06054b50, true);
    ed.setUint16(8, 1, true);
    ed.setUint16(10, 1, true);
    ed.setUint32(12, central.length, true);
    ed.setUint32(16, local.length + n, true);
    return new Blob([local, data, central, eocd], { type: 'application/vnd.google-earth.kmz' });
  }

  $('download-kmz').addEventListener('click', () => {
    const url = URL.createObjectURL(toKmz(buildKml()));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aws-raul-permit-tracking.kmz';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });

  // ── Permit comments + @-mention (BCN-1364) ──────────────────────────────────
  //    A per-permit collaboration thread, distinct from the system Activity log.
  //    @-mentions of project users render highlighted (and would feed the email
  //    notifications below). Mirrors BcnDiscussion visually, but is rendered live
  //    (per-permit, postable) so it can't be the static SSR component.
  const CURRENT_USER = 'Andy Lovseth';
  const PROJECT_USERS = ['Marco Reyes', 'Sarah Chen', 'Ryan Swanson', 'Andy Lovseth', 'Dana Whitfield'];
  const AVATAR_TOKENS = ['--color-source', '--color-commitment', '--color-requirement', '--color-action'];
  interface PtComment {
    author: string;
    ts: string;
    text: string;
  }
  // Seed the two long-pole permits so the thread reads populated on day one.
  const commentsByPermit: Record<string, PtComment[]> = {
    'odot-permit': [
      { author: 'Sarah Chen', ts: '2026-06-15T14:30:00', text: 'Call with ODOT today — they want the revised crossing detail before they will issue. @Ryan Swanson can you upload the markup to the source doc?' },
      { author: 'Ryan Swanson', ts: '2026-06-16T09:10:00', text: 'Uploaded. @Marco Reyes heads up — this permit is the long pole on Paths 1 and 2.' },
    ],
    'uma-county-row': [
      { author: 'Marco Reyes', ts: '2026-06-18T16:05:00', text: 'Leadership is watching this one — it gates the most mileage. @Andy Lovseth keep me posted on any movement.' },
    ],
  };

  const initials = (name: string) =>
    name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  const userToken = (name: string) => {
    const i = PROJECT_USERS.indexOf(name);
    return `var(${AVATAR_TOKENS[(i < 0 ? 0 : i) % AVATAR_TOKENS.length]})`;
  };
  const escapeHtml = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const fmtCommentTime = (ts: string) =>
    new Date(ts).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
  // Wrap "@Name" tokens (known users) in a highlight; the current user stands out.
  function renderMentions(text: string): string {
    let html = escapeHtml(text);
    for (const u of [...PROJECT_USERS].sort((a, b) => b.length - a.length)) {
      const cls = u === CURRENT_USER ? 'pd-mention pd-mention--me' : 'pd-mention';
      html = html.split('@' + u).join(`<span class="${cls}">@${u}</span>`);
    }
    return html;
  }

  function renderComments(pid: string) {
    const list = $('pd-comments');
    const arr = commentsByPermit[pid] ?? [];
    $('pd-comment-count').innerHTML = arr.length ? `<span class="pd-badge">${arr.length}</span>` : '';
    list.innerHTML = '';
    if (!arr.length) {
      list.innerHTML = `<li class="pd-comment pd-comment--empty">No comments yet. Start the discussion.</li>`;
    }
    for (const c of arr) {
      const li = document.createElement('li');
      li.className = 'pd-comment';
      li.innerHTML = `
        <span class="pd-comment__avatar" style="--_c:${userToken(c.author)}">${initials(c.author)}</span>
        <div class="pd-comment__body">
          <div class="pd-comment__meta"><span class="pd-comment__author">${escapeHtml(c.author)}</span><span class="pd-comment__time">${fmtCommentTime(c.ts)}</span></div>
          <p class="pd-comment__text">${renderMentions(c.text)}</p>
        </div>`;
      list.appendChild(li);
    }
    const ta = getCommentTA();
    if (ta) ta.value = '';
    hideMentionMenu();
  }

  // The esa-textarea wraps a native <textarea> in shadow DOM; operating on that
  // inner element gives reliable value + caret access for the @-mention typeahead.
  let _commentTA: HTMLTextAreaElement | null = null;
  function getCommentTA(): HTMLTextAreaElement | null {
    if (_commentTA && _commentTA.isConnected) return _commentTA;
    const host = $('pd-comment-input');
    _commentTA = (host.shadowRoot?.querySelector('textarea') ?? host.querySelector('textarea')) as HTMLTextAreaElement | null;
    return _commentTA;
  }

  const mentionMenu = $('pd-mention-menu');
  let mentionAt = -1; // index of the '@' that opened the menu
  const hideMentionMenu = () => {
    mentionMenu.hidden = true;
    mentionAt = -1;
  };
  function updateMentionMenu() {
    const ta = getCommentTA();
    if (!ta) return;
    const upto = ta.value.slice(0, ta.selectionStart ?? ta.value.length);
    const m = upto.match(/@([A-Za-z]*)$/);
    if (!m) return hideMentionMenu();
    const partial = m[1].toLowerCase();
    const matches = PROJECT_USERS.filter((u) => u !== CURRENT_USER && u.toLowerCase().startsWith(partial));
    if (!matches.length) return hideMentionMenu();
    mentionAt = (m.index ?? 0);
    mentionMenu.innerHTML = matches
      .map(
        (u) =>
          `<li class="pd-mention-opt" role="option" data-user="${u}"><span class="pd-comment__avatar pd-comment__avatar--xs" style="--_c:${userToken(u)}">${initials(u)}</span>${u}</li>`
      )
      .join('');
    mentionMenu.hidden = false;
  }
  function insertMention(user: string) {
    const ta = getCommentTA();
    if (!ta || mentionAt < 0) return;
    const caret = ta.selectionStart ?? ta.value.length;
    ta.value = ta.value.slice(0, mentionAt) + '@' + user + ' ' + ta.value.slice(caret);
    const pos = mentionAt + user.length + 2;
    ta.focus();
    ta.setSelectionRange(pos, pos);
    hideMentionMenu();
  }
  // Bind lazily once the inner textarea exists.
  function bindCommentEvents() {
    const ta = getCommentTA();
    if (!ta || ta.dataset.bound) return;
    ta.dataset.bound = '1';
    ta.addEventListener('input', updateMentionMenu);
    ta.addEventListener('keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Escape' && !mentionMenu.hidden) {
        e.stopPropagation();
        hideMentionMenu();
      }
    });
    ta.addEventListener('blur', () => setTimeout(hideMentionMenu, 150));
  }
  $('pd-comment-input').addEventListener('focusin', bindCommentEvents);
  mentionMenu.addEventListener('mousedown', (e) => {
    const opt = (e.target as HTMLElement).closest<HTMLElement>('[data-user]');
    if (opt) {
      e.preventDefault();
      insertMention(opt.dataset.user!);
    }
  });
  $('pd-comment-post').addEventListener('click', () => {
    const ta = getCommentTA();
    if (!ta || !activePermitId) return;
    const text = ta.value.trim();
    if (!text) return;
    (commentsByPermit[activePermitId] ??= []).push({ author: CURRENT_USER, ts: new Date().toISOString(), text });
    renderComments(activePermitId);
  });

  // ── Notification settings (BCN-1364) — global per-user prefs dialog ──────────
  type Dialog = HTMLElement & { show(): void; close(): void };
  const notifDialog = $('notif-dialog') as Dialog;
  $('notif-open').addEventListener('click', () => notifDialog.show());
  $('notif-cancel').addEventListener('click', () => notifDialog.close());
  $('notif-save').addEventListener('click', () => notifDialog.close());

  // ── Boot (line colors come straight from the CSS --st-* defaults) ───────────
  renderInsights();
  renderTimeline();
  renderExec();
  // "As of" stamp — the live moment the report was opened.
  $('exec-asof').textContent =
    'As of ' + new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
  // Keep the burn-up's SVG text at true pixel size: redraw at the container's real
  // width on resize and when the Summary tab first reveals it (0 → real width).
  new ResizeObserver(() => {
    if (!_lastBurnup) return;
    const w = Math.round($('exec-burnup').clientWidth) || 760;
    if (w !== _lastBurnupW) renderBurnup(_lastBurnup.clearedMi, _lastBurnup.totalMi, _lastBurnup.projected);
  }).observe($('exec-burnup'));
  if (tabs.activeIndex === 0) requestAnimationFrame(ensureMap);
  else if (tabs.activeIndex === 1) requestAnimationFrame(ensureGrids);
</script>

<style>
  /* Runtime status colors — defaults = first scheme, "Cartographic" (the chosen
     palette; matches the SSR hex fallbacks). The switcher re-points these; lines,
     chips, grids, mileage strip, legend all follow. */
  :global(:root) {
    --st-not-started: #d73027;
    --st-in-preparation: #fc8d59;
    --st-submitted: #e3c14d;
    --st-under-review: #91cf60;
    --st-cleared: #1a9850;
    --st-not-required: #989898; /* off-ladder; schemes never re-point this */
  }

  /* ═══ Drawer stacking (editor over segment drawer) — two index cards ═══
     The under card slides left to peek out from behind the editor; the top
     card brings no second backdrop, so the page doesn't double-dim. Both knobs
     are esa-side-dialog custom properties; the slide is the lego's own inset
     transition. */
  #segment-dialog.is-under {
    --side-dialog-inset: 44px;
  }
  #permit-dialog.is-stacked {
    --color-backdrop: transparent;
    --backdrop-filter: none;
  }

  /* Pre-upgrade FOUC guard: only the default (Map) panel shows until the lego defines */
  esa-tab-layout:not(:defined) [slot='panel-1'] {
    display: none;
  }

  /* ═══ Map + overlays (the hero) ═══ */
  .map-wrap {
    position: relative;
    width: 100%;
    height: 70vh;
    min-height: 480px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-300);
    overflow: hidden;
  }
  .map {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  /* Leaflet panes stay below the topbar (z 1100) and the side-dialogs */
  :global(.leaflet-pane),
  :global(.leaflet-top),
  :global(.leaflet-bottom) {
    z-index: 400;
  }

  /* Map filter bar (Paths · Status) — sits above the map, scopes everything in this tab */
  .map-filterbar {
    display: flex;
    align-items: center;
    gap: var(--spacing-400);
    flex-wrap: wrap;
    margin-bottom: var(--spacing-300);
    padding: var(--spacing-250) var(--spacing-400);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-200);
  }
  .map-filterbar__group {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-300);
  }
  .map-filterbar__divider {
    width: 1px;
    align-self: stretch;
    background: var(--color-border);
    margin: 0 var(--spacing-100);
  }
  .map-filterbar__label {
    font-size: var(--type-size-150);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-tertiary);
    white-space: nowrap;
  }
  .map-filterbar__actions {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-200);
  }

  .map-legend {
    position: absolute;
    bottom: var(--spacing-400);
    left: var(--spacing-400);
    z-index: 500;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-150);
    padding: var(--spacing-300) var(--spacing-400);
    background: color-mix(in srgb, var(--color-surface) 94%, transparent);
    backdrop-filter: blur(4px);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-300);
    box-shadow: var(--shadow-400);
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }
  .map-legend__title {
    font-size: 0.875rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  .map-legend__row {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
  }
  .map-legend__line {
    width: 22px;
    height: 5px;
    border-radius: var(--radius-full);
    flex-shrink: 0;
  }

  /* ═══ Mileage strip — SECONDARY figure below the map ═══ */
  .burndown {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-200);
    margin-top: var(--spacing-400);
    padding: var(--spacing-300) var(--spacing-400);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-300);
  }
  .burndown__head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--spacing-300);
    flex-wrap: wrap;
  }
  .burndown__title {
    font-size: 0.875rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  .burndown__summary {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }
  .burndown__summary strong {
    color: var(--st-cleared);
    font-weight: var(--font-weight-bold);
  }
  .burndown__bar {
    display: flex;
    height: 10px;
    border-radius: var(--radius-full);
    overflow: hidden;
    background: var(--bcn-gray-100);
  }
  .burndown__bar > :global(div + div) {
    border-left: 1px solid var(--color-surface);
  }
  .burndown__legend {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-200) var(--spacing-500);
  }
  .burndown__legend-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-150);
    font-size: 0.875rem;
    color: var(--color-text-secondary);
  }
  .burndown__legend-item[data-empty='true'] {
    opacity: 0.4;
  }
  .burndown__swatch {
    width: 12px;
    height: 12px;
    border-radius: var(--radius-050);
    flex-shrink: 0;
  }
  .burndown__legend-label {
    color: var(--color-text-primary);
  }
  .burndown__legend-mi {
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  .burndown__legend-pct {
    color: var(--color-text-tertiary);
  }

  /* ═══ Insight cards (lists injected by JS → ins-* classes are :global) ═══
     Two-up below the headline figures — never a cramped five-across row; the odd
     card out (Recent activity, a feed) reads naturally at full width. */
  .insights {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--spacing-400);
    margin-top: var(--spacing-400);
  }
  @media (max-width: 900px) {
    .insights {
      grid-template-columns: 1fr;
    }
  }
  .ins-card {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-200);
    padding: var(--spacing-400);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-300);
  }
  .ins-card__title {
    margin: 0;
    font-size: 0.9375rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  .ins-card__sub {
    margin: calc(-1 * var(--spacing-100)) 0 0;
    font-size: 0.8125rem;
    color: var(--color-text-tertiary);
  }
  .ins-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  :global(.ins-row) {
    display: flex;
    align-items: center;
    gap: var(--spacing-250);
    padding: var(--spacing-200) 0;
  }
  :global(.ins-row + .ins-row) {
    border-top: 1px solid var(--color-border-light);
  }
  :global(.ins-row[data-ins-permit]) {
    cursor: pointer;
    margin: 0 calc(-1 * var(--spacing-200));
    padding-inline: var(--spacing-200);
    border-radius: var(--radius-200);
  }
  :global(.ins-row[data-ins-permit]:hover) {
    background: var(--grid-row-bg-hover);
  }
  :global(.ins-dot) {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  :global(.ins-row__label) {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
    font-size: 0.875rem;
    color: var(--color-text-primary);
  }
  :global(.ins-row__sub) {
    font-size: 0.75rem;
    color: var(--color-text-tertiary);
  }
  :global(.ins-row__val) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1px;
    font-size: 0.875rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }
  :global(.ins-bar) {
    flex: 0 0 72px;
    height: 6px;
    border-radius: var(--radius-full);
    background: var(--bcn-gray-100);
    overflow: hidden;
  }

  /* ═══ Clear-to-build timeline (rows injected by JS → ctb-* classes :global) ═══ */
  .ctb {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-200);
    margin-top: var(--spacing-400);
    padding: var(--spacing-400);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-300);
  }
  .ctb__head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--spacing-300);
    flex-wrap: wrap;
  }
  .ctb__title {
    margin: 0;
    font-size: 0.9375rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  .ctb__sub {
    margin: 0;
    font-size: 0.8125rem;
    color: var(--color-text-tertiary);
  }
  .ctb__axisrow {
    display: grid;
    grid-template-columns: 190px 1fr 260px;
    gap: var(--spacing-400);
  }
  .ctb__axis {
    position: relative;
    height: 18px;
  }
  :global(.ctb-tick) {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    font-size: 0.75rem;
    color: var(--color-text-tertiary);
    white-space: nowrap;
  }
  :global(.ctb-tick--today) {
    color: var(--color-primary);
    font-weight: var(--font-weight-semibold);
  }
  .ctb__rows {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  :global(.ctb-row) {
    display: grid;
    grid-template-columns: 190px 1fr 260px;
    gap: var(--spacing-400);
    align-items: center;
    padding: var(--spacing-200) 0;
    border-top: 1px solid var(--color-border-light);
    cursor: pointer;
  }
  :global(.ctb-row:hover) {
    background: var(--grid-row-bg-hover);
  }
  :global(.ctb-row__name) {
    display: flex;
    flex-direction: column;
    gap: 1px;
    font-size: 0.875rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  :global(.ctb-row__sub) {
    font-size: 0.75rem;
    font-weight: var(--font-weight-regular);
    color: var(--color-text-tertiary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :global(.ctb-row__track) {
    position: relative;
    height: 12px;
    border-radius: var(--radius-full);
    background: var(--bcn-gray-100);
  }
  :global(.ctb-row__bar) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 4px;
    border-radius: var(--radius-full);
    opacity: 0.55;
  }
  :global(.ctb-row__dot) {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid var(--color-surface);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12);
  }
  :global(.ctb-row__meta) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1px;
    min-width: 0;
    text-align: right;
    font-size: 0.875rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
    font-variant-numeric: tabular-nums;
  }

  /* ═══ Bulk status bar (permits grid selection) ═══ */
  .bulk-bar {
    display: flex;
    align-items: center;
    gap: var(--spacing-300);
    margin-bottom: var(--spacing-300);
    padding: var(--spacing-200) var(--spacing-400);
    background: color-mix(in srgb, var(--color-primary) 5%, var(--color-surface));
    border: 1px solid color-mix(in srgb, var(--color-primary) 25%, var(--color-border));
    border-radius: var(--radius-200);
  }
  .bulk-bar[hidden] {
    display: none;
  }
  .bulk-bar__count {
    font-size: 0.875rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
    margin-right: var(--spacing-200);
  }
  .bulk-bar :global(esa-select) {
    width: 220px;
  }
  .bulk-bar #bulk-clear {
    margin-left: auto;
  }

  /* ═══ Permit drawer activity list (entries injected by JS, ins-row classes) ═══ */
  .pd__activity {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  /* ═══ Filter bar — carded two-band, faithful copy of requirement-tracker's
     page glue. Every control inside is a lego. ═══ */
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
  .bcn-filterbar__group {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-300);
  }
  .bcn-filterbar__label {
    font-size: var(--type-size-150);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-tertiary);
    white-space: nowrap;
  }
  .bcn-filterbar__search {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-150);
    min-width: 300px;
  }
  .bcn-filterbar__search :global(esa-text-field) {
    flex: 1;
  }
  .bcn-filterbar__clear {
    margin-left: auto;
  }
  #flt-level-wrap[hidden] {
    display: none;
  }

  /* ═══ Grid panes + beacon grid footer ═══ */
  .bcn-view-pane[hidden] {
    display: none;
  }
  .pt-grid {
    width: 100%;
    height: calc(100vh - 430px);
    min-height: 520px;
  }
  :global(#grid-permits .ag-row),
  :global(#grid-segments .ag-row) {
    cursor: pointer;
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

  /* AG Grid cell renderers (global — AG Grid injects cells outside Astro's scope).
     Chip color comes through --_chip, which the renderer points at var(--st-*),
     so grid chips track the map's color scheme live. */
  :global(.ag-cell.bcn-grid-status-cell) {
    display: flex;
    align-items: center;
  }
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

  /* ═══ Segment drawer body (esa-side-dialog slotted composition) ═══ */
  .sd {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-400);
  }
  /* Slotted header: name + status chip trailing (replaces the lego's plain title) */
  .sd__header {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: var(--spacing-300);
  }
  .sd__title {
    margin: 0;
    font-size: var(--type-size-400);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  .sd__meta {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-300) var(--spacing-400);
    margin: 0;
    padding: var(--spacing-400);
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-300);
  }
  .sd__kv {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .sd__kv dt {
    font-size: 0.875rem;
    font-weight: var(--font-weight-medium);
    color: var(--form-label-color);
  }
  .sd__kv dd {
    margin: 0;
    font-size: 0.9375rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  .sd__section {
    margin: 0;
    font-size: 0.9375rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  .sd__section :global(.esa-badge) {
    vertical-align: middle;
    margin-left: var(--spacing-100);
  }
  .sd__permits {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-200);
  }

  /* Permit rows (template-cloned into the drawer) */
  .sd-permit__btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-300);
    width: 100%;
    padding: var(--spacing-300);
    text-align: left;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-300);
    cursor: pointer;
    transition: border-color 120ms ease, background 120ms ease;
  }
  .sd-permit__btn:hover {
    background: var(--grid-row-bg-hover);
    border-color: var(--color-border-strong);
  }
  .sd-permit__main {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    flex: 1;
  }
  .sd-permit__name {
    font-size: 0.875rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  .sd-permit__agency {
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
  }
  .sd-permit__meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: var(--spacing-100);
    flex-shrink: 0;
  }
  .sd-permit__chips {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-150);
  }
  /* "This permit is what's holding the segment back" tag */
  .sd-permit__gating {
    padding: 1px var(--spacing-200);
    border-radius: var(--radius-full);
    font-size: 0.6875rem;
    font-weight: var(--font-weight-semibold);
    text-transform: uppercase;
    letter-spacing: 0.03em;
    background: var(--color-text-primary);
    color: var(--color-surface);
    white-space: nowrap;
  }
  .sd-permit__gating[hidden] {
    display: none;
  }
  .sd-permit__date {
    font-size: 0.8125rem;
    color: var(--color-text-tertiary);
    white-space: nowrap;
  }
  .sd-permit__btn :global(.esa-icon) {
    color: var(--color-text-tertiary);
    flex-shrink: 0;
  }

  /* ═══ Permit drawer body — plain sections (icon + header), hairline-separated;
     Status / Timing / Segments editable, Details read-only ═══ */
  .pd {
    display: flex;
    flex-direction: column;
  }
  /* Slotted header: permit name + live status chip (replaces the lego's title) */
  .pd__header {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: var(--spacing-300);
  }
  .pd__title {
    margin: 0;
    font-size: var(--type-size-300);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  .pd__section {
    padding-block: var(--spacing-400);
  }
  .pd__section:first-child {
    padding-top: var(--spacing-100);
  }
  .pd__section + .pd__section {
    border-top: 1px solid var(--color-border-light);
  }
  .pd__section-head {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
    margin: 0 0 var(--spacing-300);
    font-size: var(--type-size-150);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  .pd__section-head :global(.esa-icon) {
    flex-shrink: 0;
    color: var(--color-text-secondary);
  }
  .pd__group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-300);
  }
  .pd__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-300);
  }
  /* Read-only values slotted into BcnKeyValue (mirrors its __val tier) */
  .pd__kv-val {
    font-size: var(--form-font-size-md);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  .pd__footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--spacing-200);
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     TAB 3 — Executive Summary (leadership rollup). esa-card frames + esa-stat KPIs;
     the donut, per-path bars, burn-up & blocker bars are bespoke value-colored viz
     (the BcnMonitoringStats idiom) painted by renderExec into :global containers.
     print-color-adjust inherits down so the export carries its colors.
     ═══════════════════════════════════════════════════════════════════════════ */
  .exec {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-400);
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  /* Hero band — headline % + KPIs (left), status donut (right) */
  .exec__hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: var(--spacing-600);
    align-items: center;
  }
  @media (max-width: 820px) {
    .exec__hero {
      grid-template-columns: 1fr;
    }
  }
  .exec__hero-figures {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-500);
  }
  /* Override esa-stat's value size/weight + tighten the line-heights so the big %
     and its label sit close together (the default 1.3/1.6 leave a big gap). */
  .exec__hero-headline {
    --stat-value-size: clamp(3rem, 7vw, 4.25rem);
    --stat-value-weight: var(--font-weight-bold);
    --line-height-tight: 1;
    --line-height-normal: 1.35;
  }
  .exec__kpis {
    display: flex;
    gap: var(--spacing-600);
    flex-wrap: wrap;
  }
  .exec__kpi {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-250);
  }
  /* Slot sized to the value's line box, top-aligned with the stat → the icon
     circle centers on the big VALUE line, not the whole value+label block. */
  .exec__kpi-iconslot {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: calc(var(--type-size-700, 2.25rem) * 1.3);
  }
  .exec__kpi-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: var(--radius-full);
    background: var(--color-surface-sunken);
    color: var(--color-text-tertiary);
    flex-shrink: 0;
  }
  .exec__kpi-icon--up {
    background: color-mix(in srgb, var(--st-cleared) 16%, transparent);
    color: var(--st-cleared);
  }
  .exec__kpi-icon--down {
    background: color-mix(in srgb, var(--st-not-started) 16%, transparent);
    color: var(--st-not-started);
  }
  /* "As of" timestamp — subtle meta, bottom-right of the hero card */
  .exec__asof {
    margin: var(--spacing-400) 0 0;
    text-align: right;
    font-size: var(--type-size-100);
    font-style: italic;
    color: var(--color-text-tertiary);
  }

  /* Status donut (conic-gradient; hero % in the hole) + legend */
  .exec__donut-wrap {
    display: flex;
    align-items: center;
    gap: var(--spacing-500);
  }
  @media (max-width: 560px) {
    .exec__donut-wrap {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .exec__donut {
    position: relative;
    width: 168px;
    height: 168px;
    border-radius: var(--radius-full);
    background: var(--bcn-gray-100);
    flex-shrink: 0;
  }
  .exec__donut-hole {
    position: absolute;
    inset: 30px;
    border-radius: var(--radius-full);
    background: var(--color-surface);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1px;
  }
  .exec__donut-pct {
    font-family: var(--font-display, var(--font-sans));
    font-size: var(--type-size-500);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-primary);
    line-height: 1;
  }
  .exec__donut-cap {
    font-size: var(--type-size-100);
    color: var(--color-text-tertiary);
  }
  .exec__legend {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-150);
    min-width: 0;
  }
  :global(.exec-legend__item) {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto auto;
    align-items: center;
    gap: var(--spacing-200);
    font-size: var(--type-size-150);
    white-space: nowrap;
  }
  :global(.exec-legend__item[data-empty='true']) {
    opacity: 0.45;
  }
  :global(.exec-legend__dot) {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  :global(.exec-legend__label) {
    color: var(--color-text-secondary);
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :global(.exec-legend__mi) {
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
    font-variant-numeric: tabular-nums;
  }
  :global(.exec-legend__pct) {
    color: var(--color-text-tertiary);
    font-variant-numeric: tabular-nums;
    min-width: 34px;
    text-align: right;
  }

  /* Per-path stacked status bars */
  .exec__paths {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-400);
  }
  :global(.exec-path) {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-150);
  }
  :global(.exec-path__head) {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--spacing-300);
  }
  :global(.exec-path__name) {
    font-size: var(--type-size-250);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  :global(.exec-path__metric) {
    font-size: var(--type-size-150);
    color: var(--color-text-secondary);
    font-variant-numeric: tabular-nums;
  }
  :global(.exec-path__metric strong) {
    color: var(--st-cleared);
    font-weight: var(--font-weight-bold);
  }
  :global(.exec-path__bar) {
    display: flex;
    height: 18px;
    border-radius: var(--radius-100);
    overflow: hidden;
    background: var(--bcn-gray-100);
  }
  :global(.exec-path__seg) {
    height: 100%;
  }
  :global(.exec-path__seg + .exec-path__seg) {
    border-left: 1px solid var(--color-surface);
  }
  :global(.exec-path__foot) {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--spacing-300);
    font-size: var(--type-size-100);
    color: var(--color-text-tertiary);
  }
  :global(.exec-path__clearby) {
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-secondary);
    font-variant-numeric: tabular-nums;
  }

  /* Momentum burn-up (SVG; viewBox-scaled) */
  .exec__burnup {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-300);
  }
  .exec__burnup-chart {
    width: 100%;
  }
  :global(.bu-svg) {
    width: 100%;
    height: auto;
    display: block;
    overflow: visible;
  }
  :global(.bu-grid) {
    stroke: var(--color-border-light);
    stroke-width: 1;
  }
  :global(.bu-target) {
    stroke: var(--color-text-tertiary);
    stroke-width: 1.5;
    stroke-dasharray: 2 3;
  }
  :global(.bu-proj) {
    fill: none;
    stroke: var(--st-cleared);
    stroke-width: 2;
    stroke-dasharray: 5 4;
    stroke-linejoin: round;
    opacity: 0.75;
  }
  :global(.bu-today) {
    stroke: var(--color-primary);
    stroke-width: 1;
    stroke-dasharray: 3 3;
    opacity: 0.6;
  }
  :global(.bu-area) {
    fill: color-mix(in srgb, var(--st-cleared) 14%, transparent);
    stroke: none;
  }
  :global(.bu-actual) {
    fill: none;
    stroke: var(--st-cleared);
    stroke-width: 2.5;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
  :global(.bu-dot) {
    fill: var(--st-cleared);
    stroke: var(--color-surface);
    stroke-width: 1.5;
  }
  :global(.bu-ylabel) {
    fill: var(--color-text-tertiary);
    font-size: 12.5px;
    text-anchor: end;
    dominant-baseline: middle;
  }
  :global(.bu-xlabel) {
    fill: var(--color-text-tertiary);
    font-size: 12.5px;
    text-anchor: middle;
  }
  :global(.bu-todaylabel) {
    fill: var(--color-primary);
    font-size: 13.5px;
    font-weight: 600;
    text-anchor: middle;
  }
  :global(.bu-nowlabel) {
    fill: var(--st-cleared);
    font-size: 13.5px;
    font-weight: 700;
    text-anchor: middle;
  }
  .exec__burnup-legend {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-200) var(--spacing-500);
    font-size: var(--type-size-150);
    color: var(--color-text-secondary);
  }
  .exec__burnup-legend li {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
  }
  .exec__burnup-key {
    width: 18px;
    height: 0;
    border-top-width: 2.5px;
    border-top-style: solid;
    flex-shrink: 0;
  }
  .exec__burnup-key--actual {
    border-top-color: var(--st-cleared);
  }
  .exec__burnup-key--proj {
    border-top-color: var(--st-cleared);
    border-top-style: dashed;
  }
  .exec__burnup-key--target {
    border-top-color: var(--color-text-tertiary);
    border-top-style: dotted;
  }

  /* Print — clean snapshot of the active tab (Ctrl/Cmd-P), tuned for the Summary:
     drop the app chrome + tab strip, keep cards whole. */
  @media print {
    @page {
      margin: 12mm;
    }
    :global(.topbar),
    :global(.side-nav),
    :global(.page-layout__breadcrumbs),
    :global(.page-layout__title) {
      display: none !important;
    }
    :global(esa-tab-layout)::part(tabs) {
      display: none;
    }
    .exec {
      gap: 14pt;
    }
    .exec :global(.esa-card),
    .exec__hero {
      break-inside: avoid;
      box-shadow: none;
    }
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     BCN-1364 — Permit comments (+ @-mention) in the editor drawer & the global
     notification-settings dialog. Thread rendered live (per-permit), so its rows
     are :global; mirrors BcnDiscussion's avatar/author/time/text vocabulary.
     ═══════════════════════════════════════════════════════════════════════════ */
  .pd__comments {
    list-style: none;
    margin: 0 0 var(--spacing-300);
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-400);
  }
  :global(.pd-comment) {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: var(--spacing-300);
    align-items: start;
  }
  :global(.pd-comment--empty) {
    display: block;
    font-size: 0.875rem;
    color: var(--color-text-tertiary);
  }
  :global(.pd-comment__avatar) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--_c, var(--color-secondary));
    color: #fff;
    font-size: 0.6875rem;
    font-weight: var(--font-weight-bold);
    flex-shrink: 0;
    letter-spacing: 0.02em;
  }
  :global(.pd-comment__avatar--xs) {
    width: 22px;
    height: 22px;
    font-size: 0.625rem;
  }
  :global(.pd-comment__body) {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  :global(.pd-comment__meta) {
    display: flex;
    align-items: baseline;
    gap: var(--spacing-200);
    flex-wrap: wrap;
  }
  :global(.pd-comment__author) {
    font-size: 0.875rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  :global(.pd-comment__time) {
    font-size: 0.75rem;
    color: var(--color-text-tertiary);
  }
  :global(.pd-comment__text) {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--color-text-primary);
    white-space: pre-wrap;
    word-break: break-word;
  }
  :global(.pd-mention) {
    color: var(--color-primary);
    font-weight: var(--font-weight-semibold);
    background: color-mix(in srgb, var(--color-primary) 10%, transparent);
    border-radius: var(--radius-050);
    padding: 0 2px;
  }
  :global(.pd-mention--me) {
    color: var(--st-cleared);
    background: color-mix(in srgb, var(--st-cleared) 14%, transparent);
  }
  :global(.pd-badge) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    border-radius: var(--radius-full);
    background: var(--color-surface-sunken);
    color: var(--color-text-secondary);
    font-size: 0.6875rem;
    font-weight: var(--font-weight-bold);
    vertical-align: middle;
    margin-left: var(--spacing-100);
  }

  /* Compose + @-mention typeahead */
  .pd__compose {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-200);
  }
  .pd__compose-field {
    position: relative;
  }
  .pd__compose-field :global(esa-textarea) {
    width: 100%;
  }
  .pd__mention-menu {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% + 4px);
    z-index: 5;
    list-style: none;
    margin: 0;
    padding: var(--spacing-100);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-200);
    box-shadow: var(--shadow-400);
    max-height: 208px;
    overflow-y: auto;
  }
  .pd__mention-menu[hidden] {
    display: none;
  }
  :global(.pd-mention-opt) {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
    padding: var(--spacing-200);
    border-radius: var(--radius-100);
    font-size: 0.875rem;
    color: var(--color-text-primary);
    cursor: pointer;
  }
  :global(.pd-mention-opt:hover) {
    background: var(--grid-row-bg-hover);
  }
  .pd__compose-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-300);
  }
  .pd__compose-hint {
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
  }

  /* Notification settings dialog */
  .notif {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-400);
  }
  .notif__lede {
    margin: 0;
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
  }
  .notif__lede strong {
    color: var(--color-text-primary);
  }
  .notif__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  .notif__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-400);
    padding: var(--spacing-300) 0;
  }
  .notif__row + .notif__row {
    border-top: 1px solid var(--color-border-light);
  }
  .notif__text {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }
  .notif__title {
    font-size: 0.9375rem;
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  .notif__sub {
    font-size: 0.8125rem;
    color: var(--color-text-tertiary);
  }
  .notif :global(esa-switch-toggle) {
    flex-shrink: 0;
  }
  .notif__footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--spacing-200);
  }
</style>
```
