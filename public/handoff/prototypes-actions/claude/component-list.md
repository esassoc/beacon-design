# Component list

The open switcher: every component on the project, each with its seal, the current one tinted and checked.

## Done when
- The list opens left-aligned under the trigger and scrolls past about 520px.

## Markup
```html
<div
  slot="content"
  class="bcn-component-picker__panel"
  role="listbox"
  aria-label="Components"
>
  <button
    type="button"
    role="option"
    class="bcn-component-picker__opt"
    data-component-picker-opt="Southern Forebay &amp; Pumping Plant"
    aria-selected="true"
  >
    <span
      class="bcn-entity-logo"
      data-size="sm"
      data-variant="seal"
      data-shape="circle"
      data-style="fill"
      data-glyph="bird"
      data-color="rust"
      style="--_c: var(--bcn-mark-rust)"
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
          <path d="M16 7h.01"></path>
          <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path>
          <path d="m20 7 2 .5-2 .5"></path>
          <path d="M10 18v3"></path>
          <path d="M14 17.75V21"></path>
          <path d="M7 18a6 6 0 0 0 3.84-10.61"></path></svg></span></span
    ><span class="bcn-component-picker__optname"
      >Southern Forebay &amp; Pumping Plant</span
    ><span class="bcn-component-picker__check"
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
          <path d="M20 6 9 17l-5-5"></path></svg></span
    ></span></button
  ><button
    type="button"
    role="option"
    class="bcn-component-picker__opt"
    data-component-picker-opt="Intake B — North Delta"
    aria-selected="false"
  >
    <span
      class="bcn-entity-logo"
      data-size="sm"
      data-variant="seal"
      data-shape="circle"
      data-style="fill"
      data-glyph="map-pin"
      data-color="emerald"
      style="--_c: var(--bcn-mark-emerald)"
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
            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
          ></path>
          <circle cx="12" cy="10" r="3"></circle></svg></span></span
    ><span class="bcn-component-picker__optname">Intake B — North Delta</span
    ><span class="bcn-component-picker__check"
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
          <path d="M20 6 9 17l-5-5"></path></svg></span
    ></span></button
  ><button
    type="button"
    role="option"
    class="bcn-component-picker__opt"
    data-component-picker-opt="Twin Cities Complex"
    aria-selected="false"
  >
    <span
      class="bcn-entity-logo"
      data-size="sm"
      data-variant="seal"
      data-shape="circle"
      data-style="fill"
      data-glyph="warehouse"
      data-color="emerald"
      style="--_c: var(--bcn-mark-emerald)"
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
            d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"
          ></path>
          <path d="M6 18h12"></path>
          <path d="M6 14h12"></path>
          <path d="M6 22V10h12v12"></path></svg></span></span
    ><span class="bcn-component-picker__optname">Twin Cities Complex</span
    ><span class="bcn-component-picker__check"
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
          <path d="M20 6 9 17l-5-5"></path></svg></span
    ></span></button
  ><button
    type="button"
    role="option"
    class="bcn-component-picker__opt"
    data-component-picker-opt="Intake C — North Delta"
    aria-selected="false"
  >
    <span
      class="bcn-entity-logo"
      data-size="sm"
      data-variant="seal"
      data-shape="circle"
      data-style="fill"
      data-glyph="sun"
      data-color="teal"
      style="--_c: var(--bcn-mark-teal)"
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
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="m4.93 19.07 1.41-1.41"></path>
          <path d="M12 20v2"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M20 12h2"></path>
          <path d="m17.66 6.34 1.41-1.41"></path></svg></span></span
    ><span class="bcn-component-picker__optname">Intake C — North Delta</span
    ><span class="bcn-component-picker__check"
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
          <path d="M20 6 9 17l-5-5"></path></svg></span
    ></span></button
  ><button
    type="button"
    role="option"
    class="bcn-component-picker__opt"
    data-component-picker-opt="Bouldin Island Launch Shaft"
    aria-selected="false"
  >
    <span
      class="bcn-entity-logo"
      data-size="sm"
      data-variant="seal"
      data-shape="circle"
      data-style="fill"
      data-glyph="bird"
      data-color="slate"
      style="--_c: var(--bcn-mark-slate)"
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
          <path d="M16 7h.01"></path>
          <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path>
          <path d="m20 7 2 .5-2 .5"></path>
          <path d="M10 18v3"></path>
          <path d="M14 17.75V21"></path>
          <path d="M7 18a6 6 0 0 0 3.84-10.61"></path></svg></span></span
    ><span class="bcn-component-picker__optname">Bouldin Island Launch Shaft</span
    ><span class="bcn-component-picker__check"
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
          <path d="M20 6 9 17l-5-5"></path></svg></span
    ></span></button
  ><button
    type="button"
    role="option"
    class="bcn-component-picker__opt"
    data-component-picker-opt="Bethany Reservoir Aqueduct"
    aria-selected="false"
  >
    <span
      class="bcn-entity-logo"
      data-size="sm"
      data-variant="seal"
      data-shape="circle"
      data-style="fill"
      data-glyph="home"
      data-color="indigo"
      style="--_c: var(--bcn-mark-indigo)"
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
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <path d="M9 22V12h6v10"></path></svg></span></span
    ><span class="bcn-component-picker__optname">Bethany Reservoir Aqueduct</span
    ><span class="bcn-component-picker__check"
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
          <path d="M20 6 9 17l-5-5"></path></svg></span
    ></span></button
  ><button
    type="button"
    role="option"
    class="bcn-component-picker__opt"
    data-component-picker-opt="Byron Tract Forebay"
    aria-selected="false"
  >
    <span
      class="bcn-entity-logo"
      data-size="sm"
      data-variant="seal"
      data-shape="circle"
      data-style="fill"
      data-glyph="paw-print"
      data-color="orange"
      style="--_c: var(--bcn-mark-orange)"
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
          <circle cx="11" cy="4" r="2"></circle>
          <circle cx="18" cy="8" r="2"></circle>
          <circle cx="20" cy="16" r="2"></circle>
          <path
            d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
          ></path></svg></span></span
    ><span class="bcn-component-picker__optname">Byron Tract Forebay</span
    ><span class="bcn-component-picker__check"
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
          <path d="M20 6 9 17l-5-5"></path></svg></span
    ></span>
  </button>
</div>
```

## Styles
```css
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
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
.bcn-disc__head .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.bcn-disc__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-disc__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.bcn-component-picker__trigger > .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.bcn-component-picker__tmark .bcn-entity-logo {
  --icon-size-xs: 12px;
  width: 20px;
  height: 20px;
}
.bcn-component-picker__panel {
  flex-direction: column;
  gap: 2px;
  max-block-size: min(60vh, 520px);
  min-inline-size: 340px;
  display: flex;
  overflow-y: auto;
}
.bcn-component-picker__opt {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-200) var(--spacing-250) var(--spacing-200) var(--spacing-200);
  border-radius: var(--radius-200);
  font: inherit;
  color: var(--color-content-default);
  text-align: start;
  cursor: pointer;
  background: 0 0;
  border: 0;
  grid-template-columns: auto minmax(0, 1fr) 16px;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.3;
  display: grid;
}
.bcn-component-picker__opt:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-component-picker__opt:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: -2px;
}
.bcn-component-picker__opt[aria-selected="true"] {
  background: color-mix(in srgb, var(--color-background-brand) 8%, transparent);
  font-weight: 600;
}
.bcn-component-picker__optname {
  white-space: nowrap;
  text-overflow: ellipsis;
  min-inline-size: 0;
  overflow: hidden;
}
.bcn-component-picker__check {
  color: var(--color-background-brand);
  visibility: hidden;
  display: inline-flex;
}
.bcn-component-picker__opt[aria-selected="true"] .bcn-component-picker__check {
  visibility: visible;
}
.bcn-entity-logo {
  background: color-mix(in srgb, var(--_c) 12%, transparent);
  color: var(--_c);
  border: 1px solid color-mix(in srgb, var(--_c) 30%, transparent);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
  overflow: hidden;
}
.bcn-entity-logo[data-style="fill"] {
  background: var(--_c);
  color: var(--color-content-default-knockout);
  border-color: #0000;
}
.bcn-entity-logo[data-style="image"] {
  background: var(--color-background-elevation-sunken);
  border-color: var(--color-border-default-subtle);
}
.bcn-entity-logo__img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
}
.bcn-entity-logo[data-size="sm"] {
  width: 24px;
  height: 24px;
}
.bcn-entity-logo[data-size="md"] {
  --icon-size-sm: 18px;
  width: 32px;
  height: 32px;
}
.bcn-entity-logo[data-size="lg"] {
  width: 48px;
  height: 48px;
}
.bcn-entity-logo[data-size="xl"] {
  --icon-size-xl: 36px;
  width: 72px;
  height: 72px;
}
.bcn-entity-logo[data-size="2xl"] {
  --icon-size-xl: 44px;
  width: 92px;
  height: 92px;
}
.bcn-entity-logo[data-shape="rounded"][data-size="sm"],
.bcn-entity-logo[data-shape="rounded"][data-size="md"] {
  border-radius: var(--radius-200);
}
.bcn-entity-logo[data-shape="rounded"][data-size="lg"],
.bcn-entity-logo[data-shape="rounded"][data-size="xl"],
.bcn-entity-logo[data-shape="rounded"][data-size="2xl"] {
  border-radius: var(--radius-400);
}
.bcn-entity-logo[data-shape="circle"] {
  border-radius: var(--radius-full);
}
.bcn-entity-logo[data-variant="seal"] {
  border: var(--bcn-seal-ring-width) solid var(--bcn-seal-ring-color);
  box-shadow: var(--bcn-seal-shadow);
  box-sizing: content-box;
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
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.bcn-evidence-card__lead .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.15s;
}
.bcn-evidence-card.is-expanded .bcn-evidence-card__lead .esa-icon {
  transform: rotate(90deg);
}
.bcn-evidence-card__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-evidence-card__actions .esa-icon {
  width: 15px;
  height: 15px;
}
```

## Tokens
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--bcn-seal-ring-color`: #fcfcfc _(component)_
- `--bcn-seal-ring-width`: 3px _(component)_
- `--bcn-seal-shadow`: 0 2px 12px 0 #00000014 _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--page-title-icon-color`: #005862 _(component)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-400`: .75rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
