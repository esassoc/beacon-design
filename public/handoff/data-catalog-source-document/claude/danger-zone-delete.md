# Danger zone (delete)

The destructive action lives in a bottom danger zone (BcnDangerZone — GitHub layout: a heading OUTSIDE/above a red-bordered box, and inside it a row of [bold title + description | right-aligned soft-danger button]). Deleting the document also deletes its files, so it is deliberately separated from the rest of the page and gated by a confirm.

## Key decisions
- Uses BcnDangerZone, not esa-danger-zone: the lego stacks heading-INSIDE the box; this ports Beacon's ui-danger-zone as GitHub's heading-OUTSIDE / per-item-row anatomy. It is a candidate to promote to an esa- variant.
- Delete is a SOFT-danger button (color=danger, appearance=soft), not a loud solid fill — present but not alarming.
- Confirm is a simple yes/no esa-confirm-dialog (danger variant), NOT type-to-confirm — faithful to Beacon. On confirm, prod navigates back to the source-documents list.
- There is NO header trash icon — delete is reachable only here, at the bottom, behind the confirm.

## Gotchas
- Do not add a type-to-confirm; Beacon uses a plain confirm and the prototype matches it.
- The confirm dialog z-index (1400) must sit above the topbar and the other dialogs.
- BcnDangerZone reads only the semantic token layer; the box border is --color-danger.

## Done when
- A red-bordered danger zone at the page bottom with a soft-danger "Delete source document" button; clicking it opens a simple confirm; confirming routes to the source-documents list.

## Markup
```html
<section class="bcn-danger-zone" aria-labelledby="bcn-danger-zone-1">
  <h2 class="bcn-danger-zone__heading" id="bcn-danger-zone-1">Danger Zone</h2>
  <div class="bcn-danger-zone__box">
    <div class="bcn-danger-zone__item">
      <div class="bcn-danger-zone__text">
        <h3 class="bcn-danger-zone__title">Delete this source document</h3>
        <p class="bcn-danger-zone__desc">
          Deleting this source document also deletes all files attached to it. This action
          cannot be undone.
        </p>
      </div>
      <div class="bcn-danger-zone__action">
        <span id="delete-doc"
          ><span
            class="esa-button esa-button--color-danger esa-button--appearance-soft esa-button--md"
          >
            <button class="esa-button__native" type="button">
              <span class="esa-button__label"> Delete source document </span>
            </button>
          </span>
        </span>
      </div>
    </div>
  </div>
</section>
```

## Styles
```css
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
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
.esa-button__label {
  white-space: nowrap;
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
.esa-button--color-danger {
  --_accent: var(--color-danger, #ef4444);
  --_accent-hover: color-mix(in srgb, var(--color-danger, #ef4444) 85%, #000);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-surface-sunken, #efefef) 45%,
    var(--color-surface, #fff)
  );
  color: var(--_accent);
  border-color: var(--color-border-strong, #d4d4d4);
}
#download-coversheet .esa-button {
  width: 100%;
  justify-content: center;
}
.bcn-danger-zone {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-danger-zone__heading {
  margin: 0;
  font-size: var(--type-size-250);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-danger-zone__box {
  padding: var(--spacing-500);
  border: 1px solid var(--color-danger);
  border-radius: var(--radius-200);
  background: var(--color-surface);
}
.bcn-danger-zone__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-400);
}
.bcn-danger-zone__text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100);
  min-width: 0;
}
.bcn-danger-zone__title {
  margin: 0;
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-danger-zone__desc {
  margin: 0;
  font-size: var(--form-font-size-md);
  color: var(--color-text-secondary);
}
.bcn-danger-zone__action {
  flex-shrink: 0;
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-strong`: #bdbdbd _(semantic)_
- `--color-danger`: #ef4444 _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
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
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-250`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(primitive)_

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

// ── src/components/bcn/BcnDangerZone.astro ──
---
// <BcnDangerZone> — GitHub-style danger zone: a section heading that sits OUTSIDE
// (above) a bordered panel, and inside the panel a row of [bold title + normal
// description | right-aligned action]. The action is slotted (pass an esa-button).
//
// bcn-lego-checked: esa-danger-zone exists but faithfully ports Beacon's ui-danger-zone
// layout — the heading lives INSIDE the panel and heading/description/actions stack.
// The requested treatment is GitHub's: title OUTSIDE the box (above, with gap) and a
// per-item row with the action right-aligned. That anatomy isn't exposed by the lego,
// so this is a real, reusable bcn- component (candidate to promote to an esa- variant).
// Reads only the semantic token layer (--color-*/--type-*/--spacing-*/--radius-*).

interface Props {
  /** Section title, rendered above the box. */
  heading?: string;
  /** The destructive item's bold header. */
  title: string;
  /** Normal-weight explanation under the title. */
  description?: string;
}
const { heading = 'Danger Zone', title, description } = Astro.props;

let nextId = 0;
const headingId = `bcn-danger-zone-${++nextId}`;
---

<section class="bcn-danger-zone" aria-labelledby={headingId}>
  <h2 class="bcn-danger-zone__heading" id={headingId}>{heading}</h2>
  <div class="bcn-danger-zone__box">
    <div class="bcn-danger-zone__item">
      <div class="bcn-danger-zone__text">
        <h3 class="bcn-danger-zone__title">{title}</h3>
        {description && <p class="bcn-danger-zone__desc">{description}</p>}
      </div>
      <div class="bcn-danger-zone__action"><slot /></div>
    </div>
  </div>
</section>

<style>
  .bcn-danger-zone { display: flex; flex-direction: column; gap: var(--spacing-300); }
  .bcn-danger-zone__heading { margin: 0; font-size: var(--type-size-250); font-weight: var(--font-weight-semibold); color: var(--color-text-primary); }
  .bcn-danger-zone__box {
    padding: var(--spacing-500);
    border: 1px solid var(--color-danger);
    border-radius: var(--radius-200);
    background: var(--color-surface);
  }
  .bcn-danger-zone__item { display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-400); }
  .bcn-danger-zone__text { display: flex; flex-direction: column; gap: var(--spacing-100); min-width: 0; }
  .bcn-danger-zone__title { margin: 0; font-size: var(--form-font-size-md); font-weight: var(--font-weight-semibold); color: var(--color-text-primary); }
  .bcn-danger-zone__desc { margin: 0; font-size: var(--form-font-size-md); color: var(--color-text-secondary); }
  .bcn-danger-zone__action { flex-shrink: 0; }

  @media (max-width: 640px) {
    .bcn-danger-zone__item { flex-direction: column; align-items: flex-start; }
  }
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

// ── src/pages/prototypes/data-catalog-source-document.astro ──
---
// Data Catalog — Source Document detail (standard workflow).
//
// The catalog home of ONE source document (the FEIR): what it is, who approved it,
// what it contains. Modeled on the prod Source Document overview (Project, Reference
// Number, Agreement Terms, Date of Latest Amendment, Approving Agency / Contact /
// Signatory, Files, Associated Components, Description) but recomposed in the Data
// Catalog detail family: identity header, main + rail, lineage, PDF drawer,
// single-pane upsert (the prod Edit Source Document field set).
//
// Files are the entry point to the document: each file row is a link that opens the
// source PDF in the side-dialog viewer. A document can have several files, so there
// is no single "View Document" header action. A coversheet-download action lives at
// the bottom of the rail; delete lives in a bottom danger zone (port of Beacon's
// ui-danger-zone) behind a simple confirm — no header trash icon.
//
// COMPONENT MANIFEST: AppShell + PageLayout chrome; BcnKeyValue + BcnDangerZone +
// esa-* legos (EsaButton/Icon/Badge/Collapsible, esa-file-list); the edit modal is a
// single-column esa-dialog (esa-select / esa-text-field / esa-textarea /
// esa-date-picker); the document viewer is esa-side-dialog; delete confirms via
// esa-confirm-dialog (danger variant).
import AppShell from '../../layouts/AppShell.astro';
import PageLayout from '../../layouts/PageLayout.astro';
import EsaButton from '@esa/ecology/esa-button.astro';
import EsaIcon from '@esa/ecology/esa-icon.astro';
import EsaBadge from '@esa/ecology/esa-badge.astro';
import EsaCollapsible from '@esa/ecology/esa-collapsible.astro';
import BcnKeyValue from '../../components/bcn/BcnKeyValue.astro';
import BcnDangerZone from '../../components/bcn/BcnDangerZone.astro';
import { actions, PROJECT_NAME, SOURCE_DOCUMENT } from '../../data/tracker-fixture';
import { withBase } from '../../lib/base';

const FOLDER = "<path d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/>";
const CLIPBOARD_CHECK = "<rect width='8' height='4' x='8' y='2' rx='1' ry='1'/><path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/><path d='m9 14 2 2 4-4'/>";
const LIST_TODO = "<rect x='3' y='5' width='6' height='6' rx='1'/><path d='m3 17 2 2 4-4'/><path d='M13 6h8'/><path d='M13 12h8'/><path d='M13 18h8'/>";
const DOWNLOAD = "<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/><polyline points='7 10 12 15 17 10'/><line x1='12' x2='12' y1='15' y2='3'/>";
const RADAR = "<path d='M19.07 4.93A10 10 0 0 0 6.99 3.34'/><path d='M4 6h.01'/><path d='M2.29 9.62A10 10 0 1 0 21.31 8.35'/><path d='M16.24 7.76A6 6 0 1 0 8.23 16.67'/><path d='M12 18h.01'/><path d='M17.99 11.66A6 6 0 0 1 15.77 16.67'/><circle cx='12' cy='12' r='2'/><path d='m13.41 10.59 5.66-5.66'/>";

const dataCatalogNav = [
  {
    id: 'data-catalog',
    title: 'Data Catalog',
    icon: 'database',
    expanded: true,
    active: true,
    items: [
      { id: 'dc-projects', label: 'Projects' },
      { id: 'dc-source-documents', label: 'Source Documents', active: true },
      { id: 'dc-commitments', label: 'Commitments' },
      { id: 'dc-requirements', label: 'Requirements' },
      { id: 'dc-actions', label: 'Actions' },
      { id: 'dc-components', label: 'Components' },
      { id: 'dc-evidence', label: 'Evidence of Compliance' },
    ],
  },
];

// ── The document ──
const docTitle = SOURCE_DOCUMENT; // 3600 Alameda Avenue Project FEIR
const description =
  'Final Environmental Impact Report for the 3600 Alameda Avenue Project, certified by the City of Oakland. It establishes the mitigation measures and standard conditions of approval that govern demolition, construction, and post-construction operation of the project, and is the source of every commitment and requirement tracked under it.';

// Reference details (prod Source Document overview field set).
const referenceNumber = 'SCH #2023040072';
const latestAmendment = 'Feb 20, 2026';
const approvingAgency = 'City of Oakland — Bureau of Planning';
const agencyContact = 'Dana Whitfield, Senior Planner';
const agencySignatory = 'M. Reyes, Planning Director';
const agreementTerms = '—';
const createdMeta = 'Created Jan 8, 2026 · Updated Jun 3, 2026';

// ── Contents: what this document contains (fixture-computed). Each row is a child
// rollup with its count, linking to that catalog list. The full rosters live there. ──
const commitmentsTotal = new Set(actions.map((a) => a.commitment)).size;
const requirementsTotal = actions.length;
const actionsTotal = new Set(actions.map((a) => a.action).filter(Boolean)).size;

const contains = [
  { label: 'Commitments', count: commitmentsTotal, href: withBase('/prototypes/data-catalog-commitment'), icon: 'clipboard-check', paths: CLIPBOARD_CHECK },
  { label: 'Requirements', count: requirementsTotal, href: withBase('/prototypes/data-catalog-requirement'), icon: 'list-todo', paths: LIST_TODO },
  { label: 'Actions', count: actionsTotal, href: withBase('/prototypes/data-catalog-actions'), icon: 'radar', paths: RADAR },
];

const files = ['feir-volume-1.pdf', 'feir-volume-2_appendices.pdf', 'mmrp_adopted_2026-02.pdf'];
const associatedComponents = ['Demolition Area', 'North Grading Area', 'South Grading Area', 'Haul Routes'];

// Lineage — short chain: the document sits directly under its project. `kindHref`
// links the type caption to its catalog list; `href` links the name to the entity.
const lineage = [
  { kind: 'Project', kindHref: '#data-catalog/projects', name: PROJECT_NAME, href: '#data-catalog/projects/3600-alameda', icon: 'folder', paths: FOLDER, current: false },
  { kind: 'Source Document', kindHref: '#data-catalog/source-documents', name: docTitle, href: undefined, icon: 'file-text', paths: undefined, current: true },
];

const sourcePdf = withBase('/source-docs/feir-sample.pdf');
const editPayload = { docTitle, project: PROJECT_NAME, latestAmendment: '2026-02-20', referenceNumber, approvingAgency, agencyContact, agencySignatory, description };
---

<!-- manifest:
  layout: stack(2xl)                            # page spine; identity header + description are composition glue
  sections:
    - files           -> esa-file-list          # rows link to the source PDF; clicking opens the viewer drawer
    - lineage rail     -> esa-collapsible         # one spine, 5 nodes: project -> source document (current = filled primary dot) -> commitments/requirements/actions (counted links)
    - details         -> bcn-key-value          # prod reference field set, folded in an esa-collapsible
    - components rail  -> esa-collapsible         # associated components list
    - coversheet       -> esa-button              # rail action module: download source coversheet (prod sourcesSourceIDCoverSheetGet)
    - edit source doc  -> esa-dialog              # single-column upsert (esa-select / text-field / textarea / date-picker)
    - document viewer  -> esa-side-dialog         # the source PDF in the family side drawer
    - delete           -> bcn-danger-zone         # GitHub-layout danger zone (heading outside + row); esa-danger-zone is heading-inside/stacked
    - delete confirm   -> esa-confirm-dialog      # simple yes/no danger confirm (no type-to-confirm; faithful to Beacon)
-->

<AppShell title={`${docTitle} — Data Catalog`} projectName="Select a Project" navSections={dataCatalogNav}>
  <PageLayout
    title={docTitle}
    breadcrumbs={[{ label: 'Data Catalog', href: '#data-catalog' }, { label: 'Source Documents', href: '#data-catalog/source-documents' }, { label: docTitle }]}
  >
    <div class="bcn-doc">
      <!-- Identity header — title + edit action. -->
      <header class="bcn-doc__head">
        <h1 class="bcn-doc__title">{docTitle}</h1>
        <div class="bcn-doc__head-actions">
          <span id="edit-doc"><EsaButton color="primary" size="sm"><span class="bcn-btn-ico"><EsaIcon name="pencil" size="xs" />Edit source document</span></EsaButton></span>
        </div>
      </header>

      <div class="bcn-doc__body">
        <div class="bcn-doc__main">
          <section class="bcn-doc__section">
            <h2 class="bcn-section-title">Description</h2>
            <p class="bcn-prose">{description}</p>
          </section>

          <!-- Files — each row links to the source PDF; clicking opens the viewer drawer. -->
          <section class="bcn-doc__section">
            <h2 class="bcn-section-title">Files <span class="bcn-count-neutral"><EsaBadge size="sm" value={files.length} /></span></h2>
            <esa-file-list id="doc-files" data-src={sourcePdf}></esa-file-list>
          </section>
        </div>

        <aside class="bcn-doc__rail">
          <EsaCollapsible icon="git-branch" iconPaths={"<line x1='6' x2='6' y1='3' y2='15'/><circle cx='18' cy='6' r='3'/><circle cx='6' cy='18' r='3'/><path d='M18 9a9 9 0 0 1-9 9'/>"} title="Lineage" open>
            <!-- One spine: ancestry (Project → this doc) then the doc's child rollups,
                 each a counted link. All five share the lineage line + icon treatment. -->
            <ol class="bcn-lineage">
              {lineage.map((n) => (
                <li class={`bcn-lineage__node${n.current ? ' bcn-lineage__node--current' : ''}`}>
                  <span class="bcn-lineage__icon"><EsaIcon name={n.icon} size="sm" paths={n.paths} /></span>
                  <span class="bcn-lineage__body">
                    <a class="bcn-lineage__kind" href={n.kindHref}>{n.kind}</a>
                    {n.href ? <a class="bcn-lineage__name" href={n.href}>{n.name}</a> : <span class="bcn-lineage__name bcn-lineage__name--current">{n.name}</span>}
                  </span>
                </li>
              ))}
              {contains.map((c) => (
                <li class="bcn-lineage__node bcn-lineage__node--child">
                  <span class="bcn-lineage__icon"><EsaIcon name={c.icon} size="sm" paths={c.paths} /></span>
                  <span class="bcn-lineage__body">
                    <a class="bcn-lineage__name" href={c.href}>{c.label}</a>
                  </span>
                  <span class="bcn-count-neutral"><EsaBadge size="sm" value={c.count} /></span>
                </li>
              ))}
            </ol>
          </EsaCollapsible>

          <EsaCollapsible icon="info" title="Details" open>
            <BcnKeyValue label="Reference Number" value={referenceNumber} />
            <BcnKeyValue label="Date of Latest Amendment" value={latestAmendment} />
            <BcnKeyValue label="Approving Agency" value={approvingAgency} />
            <BcnKeyValue label="Agency Contact" value={agencyContact} />
            <BcnKeyValue label="Agency Signatory" value={agencySignatory} />
            <BcnKeyValue label="Agreement Terms" value={agreementTerms} />
            <p class="bcn-rail-meta">{createdMeta}</p>
          </EsaCollapsible>

          <EsaCollapsible icon="layers" iconPaths={"<rect width='7' height='7' x='3' y='3' rx='1'/><rect width='7' height='7' x='14' y='3' rx='1'/><rect width='7' height='7' x='14' y='14' rx='1'/><rect width='7' height='7' x='3' y='14' rx='1'/>"} title="Associated Components" open>
            <ul class="bcn-lists">
              {associatedComponents.map((c) => <li><a class="bcn-list-link" href="#data-catalog/components">{c}</a></li>)}
            </ul>
          </EsaCollapsible>

          <!-- Coversheet download — rail action module (prod: sourcesSourceIDCoverSheetGet). -->
          <div class="bcn-coversheet">
            <span id="download-coversheet"><EsaButton color="ghost" appearance="outline"><span class="bcn-btn-ico"><EsaIcon name="download" size="xs" paths={DOWNLOAD} />Download Source Coversheet</span></EsaButton></span>
          </div>
        </aside>
      </div>

      <!-- Danger zone — GitHub layout (heading outside the box; row of title+desc and a
           right-aligned secondary-danger button). Opens a simple confirm, matching prod. -->
      <BcnDangerZone title="Delete this source document" description="Deleting this source document also deletes all files attached to it. This action cannot be undone.">
        <span id="delete-doc"><EsaButton color="danger" appearance="soft">Delete source document</EsaButton></span>
      </BcnDangerZone>
    </div>
  </PageLayout>

  <!-- ═══ Edit Source Document MODAL — single-column form (prod field set). ═══ -->
  <esa-dialog id="edit-dialog" heading="Edit Source Document" style="--_dialog-width: 640px; --_dialog-max-height: 92vh; --_dialog-bg: var(--color-surface, #fff); --z-modal-backdrop: 1150; --z-modal: 1200;">
    <div class="bcn-form bcn-form--dialog">
      <esa-text-field id="d-name" label="Name" required></esa-text-field>
      <esa-select id="d-project" label="Project" required></esa-select>
      <div class="bcn-grid-2">
        <esa-date-picker id="d-amended" label="Date of Latest Amendment"></esa-date-picker>
        <esa-text-field id="d-ref" label="Reference Number"></esa-text-field>
      </div>
      <esa-text-field id="d-agency" label="Approving Agency"></esa-text-field>
      <div class="bcn-grid-2">
        <esa-text-field id="d-contact" label="Agency Contact"></esa-text-field>
        <esa-text-field id="d-signatory" label="Agency Signatory"></esa-text-field>
      </div>
      <esa-textarea id="d-desc" label="Description" rows="5"></esa-textarea>
    </div>
    <div slot="footer" class="bcn-editor__foot">
      <span id="ed-cancel"><EsaButton color="ghost" appearance="outline">Cancel</EsaButton></span>
      <span id="ed-save"><EsaButton color="primary">Save</EsaButton></span>
    </div>
  </esa-dialog>

  <!-- Document viewer — the source PDF in the family side drawer. -->
  <esa-side-dialog id="source-drawer" heading={docTitle} size="lg" style="--_width: 66vw; --z-modal: 1300; --z-modal-backdrop: 1250; --backdrop-filter: blur(4px);">
    <div class="bcn-source-pdf">
      <iframe class="bcn-source-pdf__frame" src={`${sourcePdf}#view=FitH&navpanes=0&pagemode=none`} title={`Source document — ${docTitle} (sample)`}></iframe>
    </div>
  </esa-side-dialog>

  <!-- Delete confirmation — simple yes/no (faithful to Beacon; no type-to-confirm).
       z above the topbar (1100) and the other dialogs. -->
  <esa-confirm-dialog
    id="delete-confirm"
    variant="danger"
    heading="Delete Source Document"
    message="Are you sure you want to delete this source document? Doing so will also delete all files attached to it. This action cannot be undone."
    confirm-label="Delete"
    cancel-label="Cancel"
    style="--z-modal: 1400; --z-modal-backdrop: 1350;"
  ></esa-confirm-dialog>

  <script type="application/json" id="edit-meta" set:html={JSON.stringify(editPayload)}></script>
  <script type="application/json" id="doc-files-data" set:html={JSON.stringify(files)}></script>
</AppShell>

<script>
  import '@esa/ecology/esa-dialog';
  import '@esa/ecology/esa-side-dialog';
  import '@esa/ecology/esa-select';
  import '@esa/ecology/esa-text-field';
  import '@esa/ecology/esa-textarea';
  import '@esa/ecology/esa-date-picker';
  import '@esa/ecology/esa-file-list';
  import '@esa/ecology/esa-confirm-dialog';

  const editMeta = JSON.parse(document.getElementById('edit-meta')!.textContent || '{}');
  const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
  const setValue = (id: string, value: string) => {
    const el = document.getElementById(id) as (HTMLElement & { value: string }) | null;
    if (el) el.value = value;
  };
  const setOptions = (id: string, opts: string[], value?: string) => {
    const el = document.getElementById(id) as (HTMLElement & { options: { value: string; label: string }[]; value: string }) | null;
    if (!el) return;
    el.options = opts.map((o) => ({ value: o, label: o }));
    if (value !== undefined) el.value = value;
  };

  // Document viewer drawer — the entry point is the file rows below (a document can
  // have several files, so there is no single header action).
  const drawer = $('source-drawer') as HTMLElement & { open: boolean };

  // Trigger a browser download for an href under a given filename (prototype helper).
  const downloadFile = (href: string, name: string) => {
    const a = document.createElement('a');
    a.href = href;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  // Files (read list) — each row name is a link to the source PDF; clicking it opens
  // the in-page viewer instead of navigating. The href is the no-JS fallback. The
  // lego's per-row download button (downloadable defaults true) stays for downloads.
  const docFiles = JSON.parse(document.getElementById('doc-files-data')!.textContent || '[]') as string[];
  const fileList = $('doc-files') as HTMLElement & { files: { name: string; href: string }[] };
  const sourceHref = fileList.dataset.src ?? '#';
  fileList.files = docFiles.map((name) => ({ name, href: sourceHref }));
  fileList.addEventListener('click', (e) => {
    // The clicked name is an <a> inside the lego's shadow DOM; click is composed, so
    // composedPath() surfaces it. Open the drawer instead of following the link. The
    // download <button> is not an anchor, so it falls through to the `download` handler.
    if (!e.composedPath().some((el) => el instanceof HTMLAnchorElement)) return;
    e.preventDefault();
    drawer.open = true;
  });
  // Per-row download button → fetch the source PDF (prototype: every file is the sample).
  fileList.addEventListener('download', (e) => {
    const { file } = (e as CustomEvent<{ file: { name: string } }>).detail;
    downloadFile(sourceHref, file?.name ?? '');
  });

  // Coversheet rail module → prod calls sourcesSourceIDCoverSheetGet and saves
  // Source-Coversheet_{Name}.pdf; here we stand in with the sample PDF.
  $('download-coversheet').addEventListener('click', () =>
    downloadFile(sourceHref, `Source-Coversheet_${editMeta.docTitle ?? 'source'}.pdf`),
  );

  // Danger zone → open the delete confirm; on confirm, prod navigates to the
  // source-documents list (here we just route to that catalog hash).
  const deleteConfirm = $('delete-confirm') as HTMLElement & { open: boolean };
  $('delete-doc').addEventListener('click', () => (deleteConfirm.open = true));
  deleteConfirm.addEventListener('confirm', () => {
    window.location.hash = '#data-catalog/source-documents';
  });

  // Edit modal
  const dialog = $('edit-dialog') as HTMLElement & { open: boolean };
  setValue('d-name', editMeta.docTitle ?? '');
  setOptions('d-project', [editMeta.project, 'Harbor Logistics Center', 'Foothill Substation Upgrade'], editMeta.project);
  setValue('d-amended', editMeta.latestAmendment ?? '');
  setValue('d-ref', editMeta.referenceNumber ?? '');
  setValue('d-agency', editMeta.approvingAgency ?? '');
  setValue('d-contact', editMeta.agencyContact ?? '');
  setValue('d-signatory', editMeta.agencySignatory ?? '');
  setValue('d-desc', editMeta.description ?? '');
  $('edit-doc').addEventListener('click', () => (dialog.open = true));
  $('ed-cancel').addEventListener('click', () => (dialog.open = false));
  $('ed-save').addEventListener('click', () => (dialog.open = false));
</script>

<style>
  /* bcn-lego-checked: page-composition glue only — the family detail layout (identity
     header, main+rail), the lineage spine (ancestry + child rollups, one connected
     line), and the single-column dialog form. No esa-* lego
     models an entity detail PAGE; checked Ecology (every control here is a lego —
     buttons/badges/collapsibles/dialog/side-dialog/selects/text-fields/textarea/
     date-picker/file-list/confirm-dialog; delete uses BcnDangerZone for the GitHub
     layout) and Beacon (recomposes the prod Source Document overview + Edit modal +
     delete confirm + coversheet download). Ported from data-catalog-requirement.astro. */

  .bcn-doc { display: flex; flex-direction: column; gap: var(--spacing-600); }

  .bcn-doc__head { display: flex; align-items: flex-start; justify-content: space-between; gap: var(--spacing-400); padding-bottom: var(--spacing-400); border-bottom: 1px solid var(--color-border); }
  .bcn-doc__head-actions { display: inline-flex; align-items: center; gap: var(--spacing-200); flex-shrink: 0; }
  .bcn-doc__title { margin: 0; min-width: 0; font-family: var(--font-decorative); font-size: 1.5rem; font-weight: var(--font-weight-semibold); line-height: 1.2; color: var(--color-text-primary); }

  .bcn-doc__body { display: grid; grid-template-columns: minmax(0, 1fr) 360px; gap: var(--spacing-600); align-items: start; }
  .bcn-doc__main { min-width: 0; display: flex; flex-direction: column; gap: var(--spacing-600); }
  .bcn-doc__rail { min-width: 0; display: flex; flex-direction: column; gap: var(--spacing-500); }
  .bcn-doc__rail :global(.esa-collapsible__title) { font-size: var(--type-size-250); font-weight: var(--font-weight-semibold); }

  .bcn-doc__section { display: flex; flex-direction: column; gap: var(--spacing-300); }
  .bcn-section-title { display: flex; align-items: center; gap: var(--spacing-200); margin: 0; font-size: var(--type-size-300); font-weight: var(--font-weight-semibold); color: var(--color-text-primary); }
  .bcn-prose { margin: 0; font-size: var(--form-font-size-md); line-height: 1.6; color: var(--color-text-primary); }
  .bcn-btn-ico { display: inline-flex; align-items: center; gap: var(--spacing-150); }

  /* Coversheet download — full-width rail action module. */
  #download-coversheet { display: block; }
  #download-coversheet :global(.esa-button) { width: 100%; justify-content: center; }

  /* Neutral count badge — re-point esa-badge's public override tokens to the house
     neutral pair (sunken surface + secondary text), instead of the teal secondary. */
  .bcn-count-neutral { display: inline-flex; align-items: center; --badge-bg: var(--color-surface-sunken); --badge-text-color: var(--color-text-secondary); }

  /* Roomier file rows — drive the esa-file-list density knob (inherits into the lego's
     shadow DOM); default there is a tight 2px block padding. */
  #doc-files { --file-list-row-padding-y: var(--spacing-200); }

  /* Rail lists (Associated Components) */
  .bcn-lists { display: flex; flex-direction: column; align-items: flex-start; gap: var(--spacing-150); margin: 0; padding: 0; list-style: none; }
  .bcn-list-link { font-size: var(--form-font-size-md); font-weight: var(--font-weight-medium); color: var(--color-primary); text-decoration: none; }
  .bcn-list-link:hover { text-decoration: underline; }

  /* Child rollup nodes (Commitments / Requirements / Actions) on the lineage spine —
     single-line link + neutral count. Double-class selector so `align-items: center`
     beats the base `.bcn-lineage__node` rule (defined later, equal specificity). The
     label matches the ancestry "kind" caption size (0.75rem). */
  .bcn-lineage__node.bcn-lineage__node--child { align-items: center; }
  .bcn-lineage__node--child .bcn-lineage__body { flex: 1; padding-top: 0; }
  .bcn-lineage__node--child .bcn-lineage__name { font-size: 0.75rem; }
  .bcn-lineage__node--child .bcn-count-neutral { flex-shrink: 0; }

  /* Lineage rail (family treatment) */
  .bcn-lineage { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }
  .bcn-lineage__node { position: relative; display: flex; align-items: flex-start; gap: var(--spacing-300); padding-bottom: var(--spacing-400); }
  .bcn-lineage__node::before { content: ''; position: absolute; left: 13px; top: 30px; bottom: 2px; width: 2px; background: var(--color-border); }
  .bcn-lineage__node:last-child { padding-bottom: 0; }
  .bcn-lineage__node:last-child::before { display: none; }
  .bcn-lineage__icon { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; flex-shrink: 0; border-radius: 50%; background: var(--color-surface); border: 1px solid var(--color-border); color: var(--color-text-secondary); }
  .bcn-lineage__icon :global(.esa-icon) { --_icon-size: 14px; }
  .bcn-lineage__node--current .bcn-lineage__icon { border-color: var(--color-primary); background: var(--color-primary); color: var(--color-text-inverse); }
  .bcn-lineage__body { display: flex; flex-direction: column; gap: 1px; min-width: 0; padding-top: 2px; }
  .bcn-lineage__kind { font-size: 0.75rem; color: var(--color-primary); text-decoration: none; width: fit-content; }
  a.bcn-lineage__kind:hover { text-decoration: underline; }
  .bcn-lineage__name { font-size: var(--form-font-size-md); font-weight: var(--font-weight-medium); line-height: 1.35; color: var(--color-primary); text-decoration: none; }
  a.bcn-lineage__name:hover { text-decoration: underline; }
  .bcn-lineage__name--current { color: var(--color-text-primary); font-weight: var(--font-weight-semibold); }

  .bcn-rail-meta { margin: var(--spacing-300) 0 0; padding-top: var(--spacing-300); border-top: 1px solid var(--color-border-light); font-size: 0.75rem; color: var(--color-text-secondary); }

  @media (max-width: 1024px) {
    .bcn-doc__body { grid-template-columns: 1fr; }
  }

  /* Single-column dialog form */
  .bcn-form { display: flex; flex-direction: column; gap: var(--spacing-400); }
  .bcn-form--dialog { padding: var(--spacing-100) 0; }
  .bcn-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--spacing-300); }
  .bcn-editor__foot { display: flex; gap: var(--spacing-300); justify-content: flex-end; width: 100%; }

  .bcn-source-pdf { height: 100%; min-height: 60vh; }
  .bcn-source-pdf__frame { width: 100%; height: 100%; min-height: 60vh; border: 0; border-radius: var(--radius-200); background: var(--color-surface-sunken); }
</style>

<!-- Page renders its own identity header; hide PageLayout's default title row. -->
<style is:global>
  .page-layout__title { display: none !important; }
</style>
```
