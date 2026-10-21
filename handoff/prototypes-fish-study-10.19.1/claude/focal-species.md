# Focal Species

Study detail / sketch · source prototype: https://esassoc.github.io/beacon-design/prototypes/fish-study/10.19.1/

![Focal Species, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-fish-study-10.19.1/claude/focal-species.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-fish-study-10.19.1/claude/focal-species.phone.png

## Components

- `bcn-sketch` (spoke) · `src/components/bcn/BcnStudySketch.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-pill` (hub) · `packages/ecology/src/components/esa-pill.astro`

## Markup

_5 repeated elements are collapsed in the markup below; the comments say where._

```html
<article class="bcn-sketch">
  <!-- Field 1 — Focal Species -->
  <section class="bcn-sketch__field" data-field="focalSpeciesNote">
    <h3 class="bcn-sketch__h">Focal Species</h3>
    <div class="bcn-sketch__chips">
      <span class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
        ><span class="esa-pill__label">Winter-run Chinook salmon</span></span
      ><!-- script type="module" removed (229 bytes) --><span
        class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
        ><span class="esa-pill__label">Spring-run Chinook salmon</span></span
      ><span class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
        ><span class="esa-pill__label">White sturgeon</span></span
      >
    </div>
    <p class="bcn-sketch__p">
      Listed winter-run and spring-run Chinook salmon and white sturgeon out-migrants are the focal
      taxa. Salmonid smolts are tagged for reach-scale survival and routing; white sturgeon are
      tagged to characterize sub-adult/juvenile movement past the north Delta intakes.
    </p>
  </section>
  <!-- Field 2 — Project Effect Links -->
  <section class="bcn-sketch__field" data-field="projectEffectLinks">
    <h3 class="bcn-sketch__h">Project Effect Links</h3>
    <p class="bcn-sketch__p">
      Both near-field and far-field. Near-field: entrainment, impingement, and predation at the
      north Delta intakes (NDD) during construction and operations. Far-field: altered routing into
      the interior and southern Delta and reduced through-Delta survival driven by
      diversion-modified hydrodynamics. The study resolves the project effect at both scales so
      near-field intake performance and far-field routing can be attributed separately.
    </p>
  </section>
  <!-- …and 5 more like this (<section class="bcn-sketch__field">) --><!-- Field 3 — Objectives, Research Questions & Hypotheses --><!-- Field 4 — Background --><!-- Field 5 — Methods (Study Area + Components, or study-level methods) --><!-- Field 6 — Performance Metrics (study-level; component metrics render above) --><!-- Field 7 — Data Management --><!-- Field 8 — Reporting Requirements -->
</article>
```

## Styles

```css
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-aldo-composer__context .esa-pill[data-auto] {
  --_pill-bg: transparent;
  border-style: dashed;
}
.bcn-aldo-composer__context .esa-pill {
  max-width: 100%;
}
.bcn-aldo-composer__context .esa-pill__label,
.bcn-aldo-msg__context .esa-pill__label {
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 16rem;
  overflow: hidden;
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
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-card__count .esa-pill {
  --pill-bg: transparent;
  --pill-border-color: var(--color-border-default);
  --pill-text-color: var(--color-content-default-secondary);
}
.bcn-ev-card__files .esa-pill {
  max-width: 100%;
}
.bcn-ev-card__files .esa-pill__label {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-sketch {
  gap: var(--spacing-600);
  flex-direction: column;
  display: flex;
}
.bcn-sketch__field {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-sketch__h {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  padding-bottom: var(--spacing-150);
  border-bottom: 1px solid var(--color-border-default);
  margin: 0;
  display: flex;
}
.bcn-sketch__h .esa-icon {
  color: var(--color-background-brand-muted);
  flex-shrink: 0;
}
.bcn-sketch__p {
  font-size: var(--font-size-200);
  color: var(--color-content-default-secondary);
  margin: 0;
  line-height: 1.6;
}
.bcn-sketch__sub {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-sketch__chips {
  gap: var(--spacing-150);
  margin-bottom: var(--spacing-100);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sketch__rq {
  margin: var(--spacing-100) 0 0;
  padding-left: var(--spacing-500);
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-sketch__rq li {
  font-size: var(--font-size-200);
  color: var(--color-content-default);
  line-height: 1.5;
}
.bcn-sketch__hyp {
  margin: var(--spacing-200) 0 0;
  padding-left: var(--spacing-500);
}
.bcn-sketch__hyp li {
  font-size: var(--font-size-200);
  color: var(--color-content-default-secondary);
  font-style: italic;
  line-height: 1.5;
}
.bcn-sketch__list {
  padding-left: var(--spacing-500);
  gap: var(--spacing-100);
  flex-direction: column;
  margin: 0;
  display: flex;
}
.bcn-sketch__list li {
  font-size: var(--font-size-200);
  color: var(--color-content-default-secondary);
  line-height: 1.5;
}
.bcn-sketch__components {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-sketch__component {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background-elevation-raised);
}
.bcn-sketch__component-h {
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-200);
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  display: flex;
}
.bcn-sketch__component-h .esa-icon {
  color: var(--color-background-brand-muted);
}
.bcn-sketch__cols {
  gap: var(--spacing-400);
  grid-template-columns: 1fr 1fr;
  display: grid;
}
.bcn-sketch__col-label {
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  margin-bottom: var(--spacing-150);
  display: block;
}
@media (width<=720px) {
  .bcn-sketch__cols {
    grid-template-columns: 1fr;
  }
}
.bcn-review__title .esa-icon {
  color: var(--color-background-utility-warning);
  flex-shrink: 0;
}
.bcn-review__field .esa-icon {
  color: var(--bcn-content-muted);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.esa-pill {
  --_pill-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_pill-text: var(--color-content-default, #202020);
  --_pill-border: var(--color-border-default-subtle, #d9d9d9);
  --_pill-padding-y: var(--spacing-150, 0.375rem);
  --_pill-padding-x: var(--spacing-200, 0.5rem);
  --_pill-gap: var(--spacing-100, 0.25rem);
  align-items: center;
  gap: var(--_pill-gap);
  padding-block: var(--_pill-padding-y);
  padding-inline: var(--_pill-padding-x);
  border: var(--border-width-default, 1px) solid var(--_pill-border);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_pill-bg);
  color: var(--_pill-text);
  white-space: nowrap;
  box-sizing: border-box;
  display: inline-flex;
}
.esa-pill--sm {
  --_pill-padding-y: var(--spacing-100, 0.25rem);
  --_pill-padding-x: var(--spacing-150, 0.375rem);
}
.esa-pill[data-category] {
  --_pill-bg: var(--category-2, var(--color-background-elevation-sunken, #f0f0f0));
  --_pill-border: var(--category-6, var(--color-border-default-subtle, #d9d9d9));
  --_pill-text: var(--category-11, var(--color-content-default, #202020));
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
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-warning` | `#f59e0b` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
