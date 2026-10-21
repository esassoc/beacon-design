# Search-first hero

Help & Guidance · source prototype: https://esassoc.github.io/beacon-design/prototypes/help/

![Search-first hero, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-help/claude/search-first-hero.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-help/claude/search-first-hero.phone.png

The front door to the knowledge base: the animated Aldo mark, the page title, a one-line lede, and a LARGE search field that is the page's primary action — plus a quiet "What's new in Beacon" doorway to the release notes. Search is the primary path into help; browsing is the fallback, which is why the field outweighs everything else on the surface.

## Key decisions

- The search control IS the esa-text-field lego at size="lg", scaled up on the field's own class: font-size cascades into the shadow input (font: inherit), and padding/radius ride the lego's private --_field-* hooks — the public --form-* size surface was removed upstream (2026-08) with no successor, so this is a documented reach-in pending a leading-icon slot on the hub. Localized; nothing leaks globally.
- The lego's focus tokens default to Radix grass (an off-brand green ring); --form-border-color-focus and --focus-ring-color are re-pointed to --color-content-link, scoped to this one field.
- The leading magnifier is a decorative esa-icon overlay positioned in the gutter that the enlarged --_field-padding-x opens. The field still owns its own box — the icon is never inside it.
- The hero is deliberately COMPACT (no card, no surface of its own, modest padding) so the category grid sits near the fold.
- The "What's new" doorway is a quiet neutral link that only takes the house link color on hover — it is a doorway, not a second call to action.

## Gotchas

- No esa-* lego is a page hero assembly: esa-page-header is a title/lede/actions row with no mark, search, or results panel; esa-command-palette is a modal overlay, not an in-page search-first hero. Only the FIELD and the ICON are legos — the assembly is bcn-kb-hero.
- The Aldo mark is a custom SVG, not a Lucide glyph — esa-button / esa-icon-button accept only a registry icon NAME, so any Aldo affordance is bespoke by necessity.
- The field carries role="combobox" + aria-controls + aria-expanded pointing at the results listbox; aria-expanded must be kept in sync by the controller, not left static.

## Done when

- The mark, title, lede, search field, and "What's new" link render in one centered column; the field is visibly the largest control on the page and focuses with a house-colored ring, never a green one.

## Components

- `bcn-aldo-mark` (spoke) · `src/components/bcn/aldo/BcnAldoMark.astro`
- `bcn-kb-hero` (spoke) · `src/components/bcn/BcnKbHero.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

## Markup

_28 repeated elements are collapsed in the markup below; the comments say where._

```html
<section class="bcn-kb-hero" aria-label="Help &amp; Guidance">
  <div class="center bcn-kb-hero__col">
    <div class="stack bcn-kb-hero__intro">
      <span class="bcn-aldo-mark" data-size="md" data-animated="" aria-hidden="true"
        ><svg
          class="bcn-aldo-mark__glyph"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M47.59 23A18 18 0 1 1 31.37 14.01"></path>
          <path d="M43.05 25.55A12.3 12.3 0 1 1 31.97 19.41"></path>
          <path d="M38.52 28.1A6.6 6.6 0 1 1 32.57 24.8"></path>
          <circle cx="33.2" cy="31.1" r="2" fill="currentColor" stroke="none"></circle></svg
      ></span>
      <h1 class="typography-heading-lg bcn-kb-hero__title">Help &amp; Guidance</h1>
      <p class="typography-body-md bcn-kb-hero__lede">
        Plain answers about how Beacon works — on every page, and all in one place.
      </p>
    </div>
    <div class="bcn-kb-hero__search-wrap">
      <div class="bcn-kb-hero__searchbar">
        <span class="bcn-kb-hero__search-icon" aria-hidden="true"
          ><span class="esa-icon esa-icon--md" aria-hidden="true"
            ><svg
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
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path></svg></span></span
        ><esa-text-field
          class="bcn-kb-hero__search"
          data-kb-search="true"
          size="lg"
          type="text"
          placeholder="Search help articles…"
          aria-label="Search help articles"
          role="combobox"
          aria-controls="bcn-kb-results"
          aria-expanded="false"
          aria-autocomplete="list"
        ></esa-text-field>
      </div>
      <div
        class="bcn-kb-hero__results"
        id="bcn-kb-results"
        data-kb-results=""
        role="listbox"
        aria-label="Search results"
        hidden=""
      >
        <a
          class="bcn-kb-hero__result"
          id="kb-result-project-vs-component-scope"
          role="option"
          aria-selected="false"
          href="#article-project-vs-component-scope"
          data-result=""
          data-title="Scope"
          data-summary="The setting that determines whether work is tracked once, or once per location."
          hidden=""
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title="">Scope</span
            ><span class="bcn-kb-hero__result-cat">General</span></span
          ><span class="bcn-kb-hero__result-summary"
            >The setting that determines whether work is tracked once, or once per location.</span
          ></a
        ><a
          class="bcn-kb-hero__result"
          id="kb-result-tenant"
          role="option"
          aria-selected="false"
          href="#article-tenant"
          data-result=""
          data-title="Tenant"
          data-summary="The client organization a Beacon workspace, its data, and its configuration are scoped to."
          hidden=""
          ><span class="bcn-kb-hero__result-top"
            ><span class="bcn-kb-hero__result-title" data-result-title="">Tenant</span
            ><span class="bcn-kb-hero__result-cat">General</span></span
          ><span class="bcn-kb-hero__result-summary"
            >The client organization a Beacon workspace, its data, and its configuration are scoped
            to.</span
          ></a
        ><!-- …and 28 more like this (<a class="bcn-kb-hero__result">) -->
        <p class="bcn-kb-hero__no-results" data-kb-no-results="" hidden="">
          No articles match “<span data-kb-query=""></span>”.
        </p>
      </div>
    </div>
    <a class="bcn-kb-hero__whatsnew" href="/beacon-design/prototypes/release-notes"
      >What's new in Beacon<span class="bcn-kb-hero__whatsnew-arrow" aria-hidden="true">→</span></a
    >
  </div>
</section>
```

## Styles

```css
.typography-heading-lg {
  font-family: var(--typography-heading-lg-font-family);
  font-size: var(--typography-heading-lg-font-size);
  font-weight: var(--typography-heading-lg-font-weight);
  line-height: var(--typography-heading-lg-line-height);
  letter-spacing: var(--typography-heading-lg-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-aldo-mark {
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-content-default-knockout);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-mark[data-size="sm"] {
  width: 20px;
  height: 20px;
}
.bcn-aldo-mark[data-size="md"] {
  width: 40px;
  height: 40px;
}
.bcn-aldo-mark[data-size="lg"] {
  width: 64px;
  height: 64px;
}
.bcn-aldo-mark__glyph {
  width: 100%;
  height: 100%;
  display: block;
}
.bcn-aldo-mark[data-animated] {
  animation: 2s ease-in-out infinite bcn-aldo-pulse;
}
.bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
  animation: 12s linear infinite bcn-aldo-spin;
}
@media (prefers-reduced-motion: reduce) {
  .bcn-aldo-mark[data-animated],
  .bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
    animation: none;
  }
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
.bcn-kb-hero {
  padding-block: var(--spacing-500) var(--spacing-400);
}
.bcn-kb-hero__col {
  --center-max: 44rem;
  align-items: center;
  gap: var(--spacing-400);
  text-align: center;
  flex-direction: column;
  display: flex;
}
.bcn-kb-hero__intro {
  --gap: var(--spacing-200);
  align-items: center;
}
.bcn-kb-hero__title {
  color: var(--color-content-default);
}
.bcn-kb-hero__lede {
  max-inline-size: 34rem;
  color: var(--color-content-default-secondary);
}
.bcn-kb-hero__search-wrap {
  inline-size: 100%;
  max-inline-size: 40rem;
  position: relative;
}
.bcn-kb-hero__searchbar {
  inline-size: 100%;
  position: relative;
}
.bcn-kb-hero__search {
  --_field-padding-y: 0.875rem;
  --_field-padding-x: 3.25rem;
  --_field-radius: var(--radius-300);
  --form-border-color-focus: var(--color-content-link);
  --focus-ring-color: var(--color-content-link);
  text-align: start;
  inline-size: 100%;
  font-size: 1.1875rem;
}
.bcn-kb-hero__search-icon {
  color: var(--color-content-default-tertiary);
  pointer-events: none;
  z-index: 1;
  --icon-size-md: 22px;
  display: inline-flex;
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: var(--spacing-400);
  transform: translateY(-50%);
}
.bcn-kb-hero__results {
  z-index: 30;
  max-block-size: min(60vh, 30rem);
  padding: var(--spacing-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  box-shadow: var(--elevation-3, 0 8px 28px #0000001f);
  text-align: start;
  position: absolute;
  inset-block-start: calc(100% + var(--spacing-150));
  inset-inline: 0;
  overflow-y: auto;
}
.bcn-kb-hero__results[hidden] {
  display: none;
}
.bcn-kb-hero__result {
  padding: var(--spacing-200) var(--spacing-300);
  border-radius: var(--radius-200);
  color: inherit;
  flex-direction: column;
  gap: 2px;
  text-decoration: none;
  display: flex;
}
.bcn-kb-hero__result[hidden] {
  display: none;
}
.bcn-kb-hero__result:hover,
.bcn-kb-hero__result.is-active {
  background: var(--color-background-elevation-sunken);
}
.bcn-kb-hero__result-top {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-kb-hero__result-title {
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  line-height: 1.35;
}
.bcn-kb-hero__result.is-active .bcn-kb-hero__result-title,
.bcn-kb-hero__result:hover .bcn-kb-hero__result-title {
  color: var(--color-content-link);
}
.bcn-kb-hero__result-title mark {
  background: color-mix(in srgb, var(--color-content-default) 12%, transparent);
  color: inherit;
  border-radius: 2px;
  padding: 0 1px;
}
.bcn-kb-hero__result-cat {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex: none;
  font-size: 0.8125rem;
}
.bcn-kb-hero__result-summary {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
  line-height: 1.4;
}
.bcn-kb-hero__no-results {
  padding: var(--spacing-300);
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.9375rem;
}
.bcn-kb-hero__whatsnew {
  align-items: center;
  gap: var(--spacing-100);
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  text-decoration: none;
  transition: color 0.15s;
  display: inline-flex;
}
.bcn-kb-hero__whatsnew:hover {
  color: var(--color-content-link-hover);
}
.bcn-kb-hero__whatsnew:focus-visible {
  outline: 2px solid var(--color-content-link);
  outline-offset: 2px;
  border-radius: var(--radius-100);
}
.bcn-kb-hero__whatsnew-arrow {
  transition: transform 0.15s;
}
.bcn-kb-hero__whatsnew:hover .bcn-kb-hero__whatsnew-arrow {
  transform: translate(2px);
}
.typography-heading-lg {
  font-family: var(--typography-heading-lg-font-family);
  font-size: var(--typography-heading-lg-font-size);
  font-weight: var(--typography-heading-lg-font-weight);
  line-height: var(--typography-heading-lg-line-height);
  letter-spacing: var(--typography-heading-lg-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
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
.center {
  --center-max: 72rem;
  max-inline-size: var(--center-max);
  margin-inline: auto;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo` | `#08908b` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--color-content-link-hover` | `#00474f` | semantic |
| `--elevation-3` | `0 4px 20px -4px #0000000f` | semantic |
| `--gap` | `3rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
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
| `--typography-heading-lg-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-heading-lg-font-size` | `clamp(1.375rem, 1.2rem + .88vw, 1.875rem)` | semantic |
| `--typography-heading-lg-font-weight` | `550` | semantic |
| `--typography-heading-lg-letter-spacing` | `-.01em` | semantic |
| `--typography-heading-lg-line-height` | `1.3` | semantic |
