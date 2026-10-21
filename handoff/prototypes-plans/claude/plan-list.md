# Plan list

Plans (Jamie replica) · source prototype: https://esassoc.github.io/beacon-design/prototypes/plans/

![Plan list, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-plans/claude/plan-list.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-plans/claude/plan-list.phone.png

The project’s plans, with New plan and Load sample plan. Each row opens that plan’s Gantt. A replica of Beacon’s pages/plan-list.

## Key decisions

- REPLICA, NOT A SPEC. Read Beacon’s origin/develop for behavior; this page mirrors it, including its complexity.
- Load sample plan is prod’s temporary demo scaffolding (BCN-1788), kept because prod still has it.

## Gotchas

- Plans persist in this browser only. Clearing site data empties the list.

## Done when

- With no plans, the empty state offers New plan and Load sample plan.
- Load sample plan creates a plan and opens its Gantt.

## Components

- `bcn-plan-list` (spoke) · `src/components/bcn/BcnPlanList.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-loading-spinner` (hub) · `packages/ecology/src/components/esa-loading-spinner.astro`

## Markup

```html
<div class="bcn-plan-list" data-plan-list="" data-plan-list-ready="true">
  <div class="bcn-plan-list__loading" data-plan-list-state="loading" hidden="">
    <span class="esa-loading-spinner esa-loading-spinner--md" aria-hidden="true"
      ><span class="esa-loading-spinner__ring"></span
    ></span>
  </div>
  <div class="bcn-plan-list__box" data-plan-list-state="failed" hidden="">
    <span class="bcn-plan-list__box-icon"
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
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path></svg></span
    ></span>
    <div class="bcn-plan-list__empty">
      <span role="alert">Plans couldn't be loaded.</span
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-outline esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-plan-list-retry="true"
        >
          <span class="esa-button__label">Retry</span>
        </button></span
      >
    </div>
  </div>
  <ul class="bcn-plan-list__rows" data-plan-list-state="plans" hidden=""></ul>
  <div class="bcn-plan-list__box" data-plan-list-state="empty">
    <div class="bcn-plan-list__empty">
      <span>This project has no plans yet.</span>
      <div class="bcn-plan-list__empty-actions">
        <span
          class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-plan-list-create="true"
          >
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
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path></svg></span
            ><span class="esa-button__label">New plan</span>
          </button></span
        ><span class="bcn-plan-list__busy-pair" data-plan-list-sample=""
          ><span data-busy="idle"
            ><span
              class="esa-button esa-button--variant-primary esa-button--appearance-outline esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-plan-list-sample-button="true"
              >
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path></svg></span
                ><span class="esa-button__label">Load sample plan</span>
              </button></span
            ></span
          ><span data-busy="busy" hidden=""
            ><span
              class="esa-button esa-button--variant-primary esa-button--appearance-outline esa-button--sm esa-button--loading"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                disabled=""
                aria-busy="true"
              >
                <span class="esa-button__spinner" aria-hidden="true"></span
                ><span class="esa-button__label esa-button__label--hidden">Load sample plan</span>
              </button></span
            ></span
          ></span
        >
      </div>
    </div>
  </div>
  <template data-plan-list-tpl="row"
    ><li class="bcn-plan-list__row" data-astro-cid-ei5ip3z4="">
      <div class="bcn-plan-list__row-head" data-astro-cid-ei5ip3z4="">
        <a
          class="bcn-plan-list__name typography-label-sm-strong"
          href="#"
          data-plan-list-name=""
          data-astro-cid-ei5ip3z4=""
        ></a
        ><span class="bcn-plan-list__count" data-plan-list-count="" data-astro-cid-ei5ip3z4=""
          ><span
            class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
            data-astro-cid-yahmuvtj=""
            ><span class="esa-badge__text" data-astro-cid-yahmuvtj="">0</span></span
          ></span
        >
      </div>
      <p
        class="bcn-plan-list__description typography-body-md"
        data-plan-list-description=""
        data-astro-cid-ei5ip3z4=""
      ></p></li
  ></template>
</div>
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
.bcn-help-bar__tooltip .esa-button__label {
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-composer__send[data-empty] .esa-button__native {
  cursor: not-allowed;
}
.bcn-admin-btn,
.bcn-admin-btn .esa-button {
  display: inline-flex;
}
.bcn-admin-btn .esa-button__native {
  --focus-ring-color: #fff;
  border-radius: var(--radius-full);
  color: #ffffffb8;
  block-size: 22px;
  min-block-size: 0;
  inline-size: 22px;
  min-inline-size: 0;
  padding: 0;
}
.bcn-admin-btn .esa-button__native:hover,
.bcn-admin-btn .esa-button__native:focus-visible {
  color: #fff;
  background: #ffffff24;
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
.esa-loading-spinner {
  --_spinner-size: 32px;
  --_spinner-border-width: 3px;
  --_spinner-color: var(--loading-spinner-color, var(--color-background-brand, #46a758));
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-loading-spinner__ring {
  width: var(--_spinner-size);
  height: var(--_spinner-size);
  border: var(--_spinner-border-width) solid
    var(--loading-spinner-track-color, var(--color-border-default-subtle, #d9d9d9));
  border-top-color: var(--_spinner-color);
  border-radius: var(--radius-pill, 9999px);
  animation: esa-spinner-rotate var(--animation-spin, 0.75s linear infinite);
  box-sizing: border-box;
}
@media (prefers-reduced-motion: reduce) {
  .esa-loading-spinner__ring {
    animation-duration: 2.5s;
    animation-timing-function: steps(8, end);
  }
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
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  color: var(--_accent-text);
  border-color: var(--_accent);
  background: 0 0;
}
.esa-button--appearance-dashed .esa-button__native {
  border-style: dashed;
}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),
.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled) {
  background: var(--_btn-tint-hover);
}
.esa-button--appearance-outline.esa-button--active .esa-button__native,
.esa-button--appearance-dashed.esa-button--active .esa-button__native {
  background: var(--_btn-tint-active);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken, #f0f0f0) 45%,
    var(--color-background-elevation-raised, #fcfcfc)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-default-strong, #bbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border-default, #cecece);
}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),
.esa-button--variant-ghost.esa-button--active .esa-button__native {
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-button--variant-chrome .esa-button__native {
  color: inherit;
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),
.esa-button--variant-chrome.esa-button--active .esa-button__native,
.esa-button--variant-chrome.esa-button--current .esa-button__native {
  background: var(--button-chrome-bg-hover, color-mix(in srgb, currentColor 14%, transparent));
}
.esa-button--variant-chrome .esa-button__native:focus-visible {
  outline-color: currentColor;
}
.esa-button__native {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
  text-decoration: none;
  display: inline-flex;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
}
summary.esa-button {
  cursor: pointer;
  list-style: none;
}
summary.esa-button::-webkit-details-marker {
  display: none;
}
summary.esa-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--_btn-radius);
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button__label--hidden {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.esa-button__spinner {
  width: 1em;
  height: 1em;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
  border: 2px solid;
  border-right-color: #0000;
  border-radius: 50%;
  display: inline-block;
}
.bcn-plan-list {
  --_row-surface: var(--color-background-elevation-raised, #fcfcfc);
  --_row-surface-hover: var(--color-background-default-hover, #f0f0f0);
  --_row-border: var(--color-border-default-subtle, #d9d9d9);
  --_row-focus: var(--color-background-brand, #46a758);
  --_text: var(--color-content-default, #202020);
  --_text-muted: var(--color-content-default-secondary, #646464);
  --_text-subtle: var(--color-content-default-tertiary, #8d8d8d);
  --_page-bg: var(--color-background-default, #fcfcfc);
}
.bcn-plan-list__loading {
  padding: var(--spacing-400, 1rem);
  justify-content: center;
  display: flex;
}
.bcn-plan-list__rows {
  gap: var(--spacing-100, 0.25rem);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-plan-list__box {
  align-items: center;
  gap: var(--spacing-400, 1rem);
  padding: var(--spacing-400, 1rem);
  border: 2px dashed var(--_row-border);
  border-radius: var(--spacing-200, 0.5rem);
  background: var(--_page-bg);
  text-align: center;
  flex-direction: column;
  display: flex;
}
.bcn-plan-list__box-icon {
  color: var(--_text-subtle);
  display: inline-flex;
}
.bcn-plan-list__box-icon svg {
  width: 3rem;
  height: 3rem;
}
.bcn-plan-list__empty {
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
  flex-wrap: wrap;
  display: flex;
}
.bcn-plan-list__empty-actions {
  gap: var(--spacing-200, 0.5rem);
  flex-wrap: wrap;
  display: flex;
}
.bcn-plan-list__busy-pair {
  display: contents;
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
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
| `--animation-spin` | `.75s linear infinite` | semantic |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-default-hover` | `#e8e8e8` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--loading-spinner-color` | `#005862` | component |
| `--loading-spinner-track-color` | `#efefef` | component |
| `--radius-full` | `9999px` | primitive |
| `--radius-pill` | `9999px` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
