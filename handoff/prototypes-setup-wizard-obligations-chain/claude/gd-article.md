# Gd article

Step 5 — Obligations by Commitment · source prototype: https://esassoc.github.io/beacon-design/prototypes/setup-wizard/obligations-chain/

## Components

- `bcn-gd-article` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `bcn-help-article` (spoke) · `src/components/bcn/BcnHelpArticle.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-side-dialog` (hub) · `packages/ecology/src/components/esa-side-dialog.ts`

## Markup

_28 repeated elements are collapsed in the markup below; the comments say where._

```html
<esa-side-dialog
  class="bcn-gd-article"
  data-gd-article="true"
  position="right"
  heading="Guidance article"
  size="md"
  ><div slot="header" class="bcn-gd-article__head">
    <button type="button" class="bcn-gd-article__back" data-gd-article-back="">
      <span class="esa-icon esa-icon--sm" aria-hidden="true"
        ><svg
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
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path></svg
      ></span>
      All guidance</button
    ><span class="bcn-gd-article__titlerow"
      ><span class="bcn-gd-article__title" data-gd-article-title=""></span
      ><span class="bcn-gd-article__kind" data-gd-article-kind=""></span
    ></span>
  </div>
  <div class="bcn-gd-article__body">
    <div
      class="bcn-gd-article__panel"
      data-article-body="project-vs-component-scope"
      data-kind="glossary"
      data-title="Scope"
      hidden=""
    >
      <article id="article-project-vs-component-scope" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p typography-body-md">
            Scope determines how an action is distributed. A project-scoped action is performed
            once, centrally — for example, submitting the project-wide stormwater plan. A
            component-scoped action is performed independently at every applicable component — for
            example, installing exclusion fencing at each of 20 construction areas.
          </p>
          <figure class="bcn-help-article__figure">
            <div class="bcn-help-article__figure-frame">
              <span class="bcn-help-article__figure-icon"
                ><span class="esa-icon esa-icon--lg" aria-hidden="true"
                  ><svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                    <circle cx="9" cy="9" r="2"></circle>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></span></span
              ><span class="bcn-help-article__figure-label">The scope multiplier</span>
            </div>
            <figcaption class="bcn-help-article__caption typography-meta">
              One component-scoped action across 20 components produces 20 independently tracked
              implementations.
            </figcaption>
          </figure>
          <aside class="bcn-help-article__callout bcn-help-article__callout--note">
            <span class="bcn-help-article__callout-icon"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path></svg></span
            ></span>
            <div class="bcn-help-article__callout-body">
              <span class="bcn-help-article__callout-label">Note</span>
              <p class="bcn-help-article__callout-text typography-body-md">
                Each implementation is tracked separately, with its own assignee, timeline, and
                evidence.
              </p>
            </div>
          </aside>
        </div>
      </article>
    </div>
    <div
      class="bcn-gd-article__panel"
      data-article-body="tenant"
      data-kind="glossary"
      data-title="Tenant"
      hidden=""
    >
      <article id="article-tenant" class="bcn-help-article">
        <div class="bcn-help-article__body">
          <p class="bcn-help-article__p typography-body-md">
            A Tenant is the organization a Beacon workspace belongs to. Beacon is multi-tenant: each
            tenant’s projects, documents, users, and configuration are isolated from every other
            tenant’s, and a user operates within a single tenant at a time.
          </p>
          <p class="bcn-help-article__p typography-body-md">
            Tenant-level settings — display labels, enabled features, notification defaults, and
            user roles — apply uniformly across every project the tenant owns.
          </p>
        </div>
      </article>
    </div>
    <!-- …and 28 more like this (<div class="bcn-gd-article__panel">) -->
  </div></esa-side-dialog
>
```

## Styles

```css
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-article {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-help-article__body {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-help-article--compact .bcn-help-article__body {
  gap: var(--spacing-300);
}
.bcn-help-article__p {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-help-article__steps {
  counter-reset: bcn-step;
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-help-article__step {
  counter-increment: bcn-step;
  align-items: start;
  gap: var(--spacing-300);
  color: var(--color-content-default);
  grid-template-columns: 1.625rem 1fr;
  margin: 0;
  display: grid;
}
.bcn-help-article__step:before {
  content: counter(bcn-step);
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-sunken);
  width: 1.625rem;
  height: 1.625rem;
  color: var(--color-content-default);
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  justify-content: center;
  align-items: center;
  line-height: 1;
  display: inline-flex;
}
.bcn-help-article__callout {
  align-items: start;
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border-default-subtle);
  background: var(--color-background-elevation-sunken);
  grid-template-columns: auto 1fr;
  display: grid;
}
.bcn-help-article--compact .bcn-help-article__callout {
  padding: var(--spacing-300);
}
.bcn-help-article__callout-icon {
  color: var(--color-content-default-secondary);
  margin-top: 1px;
  display: inline-flex;
}
.bcn-help-article__callout-body {
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-help-article__callout-label {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
}
.bcn-help-article__callout-text {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-help-article__figure {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  display: flex;
}
.bcn-help-article__figure-frame {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200);
  min-height: 8.5rem;
  padding: var(--spacing-500);
  border: 1px dashed var(--color-border-default-strong);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-sunken);
  text-align: center;
  flex-direction: column;
  display: flex;
}
.bcn-help-article__figure-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-help-article__figure-label {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
}
.bcn-help-article__video {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  display: flex;
}
.bcn-help-article__video-frame {
  aspect-ratio: 16/9;
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border-default);
  background: color-mix(
    in srgb,
    var(--color-content-default) 8%,
    var(--color-background-elevation-sunken)
  );
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  overflow: hidden;
}
.bcn-help-article__video-play {
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-raised);
  width: 3rem;
  height: 3rem;
  color: var(--color-content-default);
  justify-content: center;
  align-items: center;
  padding-left: 3px;
  display: inline-flex;
  box-shadow: 0 1px 4px #0000002e;
}
.bcn-help-article__video-duration {
  right: var(--spacing-200);
  bottom: var(--spacing-200);
  position: absolute;
}
.bcn-help-article__video-label,
.bcn-help-article__caption {
  font-size: max(0.8125rem, var(--font-size-100));
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-help-article__related {
  align-items: baseline;
  gap: var(--spacing-150) var(--spacing-300);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-default-subtle);
  flex-wrap: wrap;
  display: flex;
}
.bcn-help-article__related-label {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
}
.bcn-help-article__related-list {
  gap: var(--spacing-100) var(--spacing-300);
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-help-article__related-link {
  color: var(--color-content-link);
  font-size: 0.9375rem;
  text-decoration: none;
}
.bcn-help-article__related-link:hover {
  color: var(--color-content-link-hover);
  text-decoration: underline;
}
.bcn-gd-article {
  --z-modal-backdrop: 1302;
  --z-modal: 1303;
  --side-dialog-width: 460px;
  --side-dialog-backdrop-filter: blur(2px);
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-article__head {
  gap: var(--spacing-200);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-gd-article__back {
  align-items: center;
  gap: var(--spacing-100);
  font: inherit;
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  cursor: pointer;
  background: 0 0;
  border: 0;
  align-self: flex-start;
  padding: 0;
  display: inline-flex;
}
.bcn-gd-article__back:hover {
  color: var(--color-content-default);
}
.bcn-gd-article__titlerow {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  display: flex;
}
.bcn-gd-article__title {
  font-family: var(--font-decorative);
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: 1.25;
}
.bcn-gd-article__kind {
  border-radius: var(--radius-100);
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  flex: none;
  padding: 1px 6px;
  line-height: 1.5;
}
.bcn-gd-article__kind[data-kind="glossary"] {
  color: var(--bcn-aldo-600);
  border-color: var(--bcn-aldo-100);
  background: var(--bcn-aldo-50);
}
.bcn-gd-article__panel[hidden] {
  display: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-disclosure .esa-icon {
    transition: none;
  }
}
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-background-utility-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-background-brand);
}
.nav-section__header > .esa-icon:first-child {
  color: var(--bcn-gray-950);
  flex-shrink: 0;
  transition: color 0.15s;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  flex-shrink: 0;
  transition:
    transform 0.15s,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__title,
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_badge-text: var(--badge-text-color, var(--color-content-default-secondary, #646464));
  --_badge-border: var(--badge-border-color, var(--color-border-default, #cecece));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--neutral:not(.esa-badge--dot),
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot.esa-badge--neutral {
  --_badge-bg: var(--color-content-default-secondary, #646464);
}
@media (forced-colors: active) {
  .esa-badge {
    border: 1px solid canvastext;
  }
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-aldo-100` | `#cfeceb` | component |
| `--bcn-aldo-50` | `#e8f6f5` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--color-content-link-hover` | `#00474f` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--icon-size-lg` | `24px` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-meta-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-meta-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-meta-font-weight` | `400` | semantic |
| `--typography-meta-letter-spacing` | `.01em` | semantic |
| `--typography-meta-line-height` | `1.6` | semantic |
| `--typography-microcopy-xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-strong-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-strong-line-height` | `1` | semantic |
