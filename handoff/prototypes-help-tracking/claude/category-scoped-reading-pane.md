# Category-scoped reading pane

Help category page · source prototype: https://esassoc.github.io/beacon-design/prototypes/help/tracking/

![Category-scoped reading pane, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-help-tracking/claude/category-scoped-reading-pane.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-help-tracking/claude/category-scoped-reading-pane.phone.png

The same reading pane the help home uses, but SCOPED to this category and landing on its first article — so a category page is readable the moment it loads rather than showing an empty reader.

## Key decisions

- ONE component, two behaviors, chosen by props — not two components. bcn-kb-browser takes `articles` (scoping the reader to this category's subset) and `defaultOnLoad` (true here, false on the home).
- With no hash, the category page lands on its FIRST article and does NOT scroll — the list must stay in view, because the list is the point of this page. The home, by contrast, collapses the pane to nothing.
- The default article id is resolved at build time into data-kb-default, so the controller reads a value rather than re-deriving the default.
- Scoping is genuine: only this category's articles are pre-rendered here, so a stray #article-<id> from another category does not resolve on this route — that is the home's job, and the home passes every article precisely so external deep links always land somewhere.

## Gotchas

- The home is the ONLY page that can resolve any #article-<id>. Drawer rows and article "Related" links therefore point at /prototypes/help#article-<id>, never at a category route — keep that contract when porting, or related links break depending on which page the user is on.
- Landing on the first article must not scroll. Reusing the home's scroll-into-view behavior here pushes the list off screen on load, which reads as a broken page.
- The pane's empty-collapse :has() rule still applies, but on this route it should never trigger — if it does, defaultOnLoad or the default id is not reaching the controller.

## Done when

- Loading the route with no hash shows the category's first article with the list still visible above it; clicking any row swaps the pane to that article; an #article-<id> from a different category does not resolve here.

## Components

- `bcn-help-article` (spoke) · `src/components/bcn/BcnHelpArticle.astro`
- `bcn-kb` (spoke) · `src/components/bcn/BcnKbBrowser.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_5 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="bcn-kb__pane" data-kb-pane="" data-kb-default="actions-vs-implementations">
  <article
    class="bcn-kb__article"
    data-article-id="actions-vs-implementations"
    data-category="tracking"
  >
    <article id="article-actions-vs-implementations" class="bcn-help-article">
      <header class="bcn-help-article__head">
        <h2 class="bcn-help-article__title typography-title">Implementation</h2>
        <span class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
          ><span class="esa-badge__text">Glossary</span></span
        >
      </header>
      <div class="bcn-help-article__body">
        <p class="bcn-help-article__p typography-body-md">
          An Implementation is the tracked execution of an action: its status, assignee, tasks,
          comments, and evidence. The action defines what must be done; the implementation records
          doing it. In daily use, implementations are what teams refer to as the actions.
        </p>
        <p class="bcn-help-article__p typography-body-md">
          The number of implementations an action generates is determined by its scope and
          frequency. A one-time, project-scoped submission generates one implementation. A
          recurring, component-scoped inspection generates one per component, per occurrence.
        </p>
      </div>
    </article>
  </article>
  <article
    class="bcn-kb__article"
    data-article-id="what-is-a-component"
    data-category="tracking"
    hidden=""
  >
    <article id="article-what-is-a-component" class="bcn-help-article">
      <header class="bcn-help-article__head">
        <h2 class="bcn-help-article__title typography-title">Component</h2>
        <span class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
          ><span class="esa-badge__text">Glossary</span></span
        >
      </header>
      <div class="bcn-help-article__body">
        <p class="bcn-help-article__p typography-body-md">
          A Component is a discrete location or work package within a project — a launch shaft, an
          intake site, a construction segment. Components exist because the same obligation
          frequently applies independently at each location.
        </p>
        <p class="bcn-help-article__p typography-body-md">
          A component maps to the commitments that apply to it, may carry its own milestone dates,
          and receives its own implementations of component-scoped actions. A Work Area subdivides a
          component further when field tracking requires finer grain.
        </p>
      </div>
    </article>
  </article>
  <!-- …and 5 more like this (<article class="bcn-kb__article">) -->
</div>
```

## Styles

```css
.typography-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
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
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
}
.bcn-help-article {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-help-article__head {
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.bcn-help-article__title {
  color: var(--color-content-default);
  margin: 0;
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
.bcn-admin-btn .esa-icon {
  block-size: 14px;
  inline-size: 14px;
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.typography-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
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
.bcn-kb__pane {
  min-block-size: 60vh;
  border-top: 1px solid var(--color-border-default);
  scroll-margin-top: var(--spacing-400);
  padding-block-start: var(--spacing-600);
}
.bcn-kb__pane:not(:has(> .bcn-kb__article:not([hidden]))) {
  border-top: 0;
  min-block-size: 0;
  padding-block-start: 0;
}
.bcn-kb__article {
  max-inline-size: 70ch;
}
.bcn-kb__article[hidden] {
  display: none;
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
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--color-content-link-hover` | `#00474f` | semantic |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
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
| `--spacing-600` | `2rem` | primitive |
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
| `--typography-title-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-font-size` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | semantic |
| `--typography-title-font-weight` | `500` | semantic |
| `--typography-title-letter-spacing` | `.01em` | semantic |
| `--typography-title-line-height` | `1.6` | semantic |
