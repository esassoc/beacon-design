# Guidance drawer — curated route context

Aldo's opening message on THIS route — the route-aware half of the guidance drawer. "You are here" names the page and states its purpose in plain words; "On this page" lists the how-to articles curated for it; "Terms" lists the glossary terms it uses. Every page gets this; the Release Notes route has a curated entry rather than the generic fallback.

## Key decisions
- Route context is a DATA RECORD, not logic: HELP_ROUTE_CONTEXTS is an ordered list of { pattern, page, purpose, howtos, terms }, matched by pathname substring with FIRST MATCH WINNING. Adding guidance for a route is a data edit.
- HELP_GENERAL_CONTEXT is the fallback for any route without a curated entry, so the drawer is never empty — an uncurated page still gets an orienting answer.
- The pattern is a base-agnostic pathname substring, so the same record works under the prototype base path and in the real app.
- howtos and terms are ARRAYS OF ARTICLE IDS into the one shared dataset — the drawer never holds its own copy of an article. Curating a route means choosing which existing articles surface, not writing new text.
- The Release Notes entry curates to what this page actually raises: the how-to for tenant settings and the "feature flag" glossary term — matching the flag notes on the entries above.
- Section labels are readable words with a leading esa-icon glyph (map-pin / list / book), not ornamental micro-labels.
- Rendering is a MOVE, not a build: every article is pre-rendered once as a row into a hidden pool, and the client moves the matched route's rows into these two sections. Astro is compile-time and the drawer is route-agnostic at build, so the move is what makes it route-aware.

## Gotchas
- Order matters in HELP_ROUTE_CONTEXTS — first match wins, so a broad pattern placed above a specific one will shadow it. Keep specific routes before general ones.
- A curated entry whose howtos or terms name an id that no longer exists silently renders one fewer row. Validate the ids against the dataset at build time.
- The "On this page" and "Terms" sections hide themselves when their list is empty — a curated entry with no terms should not leave a labeled empty section.
- This intro is a message in the chat stream, not a fixed header: it scrolls away as the conversation grows. Do not pin it.

## Done when
- Opening the drawer on this route shows "Release Notes" with its purpose sentence, the curated how-to row, and the "feature flag" term; opening it on an uncurated route shows the general fallback instead of an empty drawer; every listed row opens that article in the stacked reader.

## Markup
```html
<div class="bcn-gd-msg bcn-gd-msg--aldo" data-gd-intro="">
  <div class="bcn-gd-msg__avatar">
    <span class="bcn-aldo-mark" data-size="sm" aria-hidden="true"
      ><span class="bcn-aldo-mark__glyph"
        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
          ><svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path
              d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
            ></path>
            <circle cx="12" cy="12" r="10"></circle></svg></span></span
    ></span>
  </div>
  <div class="bcn-gd-msg__group">
    <section class="bcn-gd__section">
      <h2 class="bcn-gd__label">
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
            <path
              d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
            ></path>
            <circle cx="12" cy="10" r="3"></circle></svg
        ></span>
        You are here
      </h2>
      <div class="bcn-gd__here">
        <span class="bcn-gd__here-page" data-gd-page="">Release Notes</span
        ><span class="bcn-gd__here-purpose" data-gd-purpose=""
          >What changed in each Beacon release — headline features, per-area improvements,
          and fixes, newest first.</span
        >
      </div>
    </section>
    <section class="bcn-gd__section" data-gd-section="howtos">
      <h2 class="bcn-gd__label">
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
            <line x1="8" x2="21" y1="6" y2="6"></line>
            <line x1="8" x2="21" y1="12" y2="12"></line>
            <line x1="8" x2="21" y1="18" y2="18"></line>
            <line x1="3" x2="3.01" y1="6" y2="6"></line>
            <line x1="3" x2="3.01" y1="12" y2="12"></line>
            <line x1="3" x2="3.01" y1="18" y2="18"></line></svg
        ></span>
        On this page
      </h2>
      <div class="bcn-gd__rows" data-gd-howtos="">
        <button
          type="button"
          class="bcn-gd-row"
          data-article-id="managing-tenant-settings"
          data-kind="howto"
          data-title="Managing tenant settings"
          data-summary="Configure the display labels, defaults, and enabled features that apply across a tenant."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Managing tenant settings</span
            ><span class="bcn-gd-row__sub"
              >Configure the display labels, defaults, and enabled features that apply
              across a tenant.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span>
        </button>
      </div>
    </section>
    <section class="bcn-gd__section" data-gd-section="terms">
      <h2 class="bcn-gd__label">
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
            <path
              d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
            ></path></svg
        ></span>
        Terms
      </h2>
      <div class="bcn-gd__rows" data-gd-terms="">
        <button
          type="button"
          class="bcn-gd-row"
          data-article-id="feature-flag"
          data-kind="glossary"
          data-title="Feature Flag"
          data-summary="A tenant-level switch that enables or disables a Beacon capability."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Feature Flag</span
            ><span class="bcn-gd-row__sub"
              >A tenant-level switch that enables or disables a Beacon capability.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span>
        </button>
      </div>
    </section>
  </div>
</div>
```

## Styles
```css
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
  --icon-size-xs: 12px;
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
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-mark[data-animated] {
  animation: 2s ease-in-out infinite bcn-aldo-pulse;
}
.bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
  animation: 8s linear infinite bcn-aldo-spin;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
}
.bcn-gd__section {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-gd__section[hidden] {
  display: none;
}
.bcn-gd__label {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-250);
  font-weight: var(--typography-font-weight-bold);
  color: var(--color-content-default);
  margin: 0;
  display: flex;
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd__here {
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--bcn-aldo-50);
  border: 1px solid var(--bcn-aldo-100);
  border-radius: var(--radius-200);
  flex-direction: column;
  gap: 4px;
  display: flex;
}
.bcn-gd__here-page {
  font-size: var(--font-size-250);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-gd__here-purpose {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  line-height: 1.5;
}
.bcn-gd__rows {
  flex-direction: column;
  display: flex;
}
.bcn-gd-row {
  align-items: center;
  gap: var(--spacing-300);
  width: 100%;
  padding: var(--spacing-300) var(--spacing-100);
  border: 0;
  border-bottom: 1px solid var(--color-border-default-subtle);
  font: inherit;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  display: flex;
}
.bcn-gd-row:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-gd-row__text {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-gd-row__title {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: 1.35;
}
.bcn-gd-row__sub {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default-secondary);
  line-height: 1.4;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-msg {
  gap: var(--spacing-300);
  align-items: flex-start;
  display: flex;
}
.bcn-gd-msg--user {
  justify-content: flex-end;
}
.bcn-gd-msg__avatar {
  flex: none;
  margin-top: 2px;
}
.bcn-gd-msg__group {
  gap: var(--spacing-500);
  flex-direction: column;
  flex: 1;
  min-width: 0;
  display: flex;
}
.bcn-gd-msg__bubble {
  gap: var(--spacing-200);
  max-width: 88%;
  padding: var(--spacing-250) var(--spacing-300);
  border-radius: var(--radius-300);
  font-size: var(--font-size-150);
  flex-direction: column;
  line-height: 1.5;
  display: flex;
}
.bcn-gd-msg--user .bcn-gd-msg__bubble {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default);
  white-space: pre-wrap;
}
.bcn-gd-msg--aldo .bcn-gd-msg__bubble {
  background: var(--bcn-aldo-50);
  color: var(--color-content-default);
}
.bcn-gd-msg__text {
  margin: 0;
}
.bcn-gd-msg__links {
  gap: var(--spacing-100);
  flex-direction: column;
  display: flex;
}
.bcn-gd-msg__link {
  font: inherit;
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-background-brand);
  text-align: left;
  text-underline-offset: 2px;
  cursor: pointer;
  background: 0 0;
  border: 0;
  padding: 0;
  text-decoration: underline;
}
.bcn-gd-msg__browse {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-background-brand);
  text-underline-offset: 2px;
  text-decoration: underline;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
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
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
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
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
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
- `--bcn-aldo`: #08908b _(component)_
- `--bcn-aldo-100`: #cfeceb _(component)_
- `--bcn-aldo-50`: #e8f6f5 _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--font-size-250`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--typography-font-weight-bold`: 650 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-regular`: 350 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
