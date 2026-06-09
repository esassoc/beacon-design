# Page header

The project title row: an H1 reading the project name ("3600 Alameda") with a green radar (Tracking) glyph, immediately followed by a neutral "Project Tracking" badge that names the workspace. The badge sits directly right of the H1, not in the far-right utilities slot.

## Key decisions
- The H1 is the PROJECT, not the page — the workspace name ("Project Tracking") is demoted to a badge beside it, so the user always sees what project they are in first.
- The radar icon is the Tracking section glyph, tinted brand green (--color-secondary / teal-500) to tie the title to the active nav section.
- The badge is neutral (gray-100 bg, gray-200 border, 4px radius) — it labels, it does not signal status, so it must not read as a colored state chip.

## Gotchas
- PageLayout renders the icon outside the page component's style scope, so the green tint is applied with a global override — re-implementing in Angular, color the icon on the title component directly.
- Keep the badge directly adjacent to the H1 (same flex group); do not push it to the opposite end of the title row.

## Done when
- H1 shows the project name with a green radar glyph; "Project Tracking" badge sits immediately to its right and reads as a neutral label.

## Markup
```html
<section class="page-layout__title">
  <div class="page-layout__title-main">
    <h1>
      <span class="esa-icon esa-icon--md" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          focusable="false"
        >
          <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
          <path d="M4 6h.01"></path>
          <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
          <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
          <path d="M12 18h.01"></path>
          <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
          <circle cx="12" cy="12" r="2"></circle>
          <path d="m13.41 10.59 5.66-5.66"></path>
        </svg>
      </span>
      3600 Alameda
    </h1>
    <span class="ctx-badge">Project Tracking</span>
  </div>
</section>
```

## Styles
```css
.page-layout__title h1 .esa-icon {
  color: var(--color-secondary) !important;
}
.ctx-badge {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-100) var(--spacing-250);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  background: var(--bcn-gray-100);
  border: 1px solid var(--bcn-gray-200);
  border-radius: var(--radius-100, 4px);
}
.tt-view .esa-icon {
  color: currentColor;
}
.grid-header__filter .esa-icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.download-button .esa-icon {
  color: currentColor;
}
.esa-icon {
  --_icon-size: var(--icon-size-medium, 20px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
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
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
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
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-200`: #dcdcdc _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--color-primary`: #005862 _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-weight-bold`: 650 _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-500`: clamp(1.125rem, .98rem + .72vw, 1.5rem) _(primitive)_

## Behavior
```ts
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
    min-height: calc(100vh - 15rem);
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
```
