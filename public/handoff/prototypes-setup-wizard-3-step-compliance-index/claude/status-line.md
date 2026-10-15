# Status line

Under the step header. Built: the index in numbers, and after a Re-run, Added, Removed and Kept because locked (or "The re-run changed nothing."). Drafting: the stage ("Step 2 of 4: File into bins."), its counts, a bar, View progress. Drafted: drafts to review, what is outstanding for Draft again, what fit no subcategory with Suggest subcategories, View log.

## Key decisions
- The four stages are project-wide, as draft-stages.ts runs them: Read requirements, File into bins, Merge duties, Complete drafts. Draft again takes only what is outstanding.

## Done when
- A Draft run over the Re-run index ends at 2,222 drafts to review, with 3 items that fit no subcategory.

## Markup
```html
<div class="bcn-sw3ir" data-sw3-index-run="">
  <div class="bcn-sw3ir__line" data-ir-built="" hidden="">
    <span data-ir-built-text=""></span>
  </div>
  <div class="bcn-sw3ir__rerun" data-ir-rerun="" hidden="">
    <p class="bcn-sw3ir__said" data-ir-rerun-said=""></p>
    <p data-ir-rerun-none="">The re-run changed nothing.</p>
    <div class="bcn-sw3ir__lists">
      <div data-ir-added="">
        <span class="bcn-sw3ir__lh" data-ir-added-h=""></span>
        <ul data-ir-added-list=""></ul>
      </div>
      <div data-ir-removed="">
        <span class="bcn-sw3ir__lh" data-ir-removed-h=""></span>
        <ul data-ir-removed-list=""></ul>
      </div>
    </div>
    <div data-ir-kept="">
      <details class="esa-collapsible esa-collapsible--flush">
        <summary class="esa-collapsible__summary typography-label-sm-strong">
          <span class="esa-collapsible__title">Kept because locked</span>
        </summary>
        <div class="esa-collapsible__body typography-body-md">
          <ul data-ir-kept-list=""></ul>
        </div>
      </details>
    </div>
  </div>
  <div class="bcn-sw3ir__line" data-ir-running="" hidden="">
    <span class="esa-loading-spinner esa-loading-spinner--xs"
      ><span
        class="esa-loading-spinner__ring"
        role="img"
        aria-label="Drafting"
      ></span></span
    ><span class="bcn-sw3ir__step" data-ir-step=""></span><span data-ir-detail=""></span
    ><span class="bcn-sw3ir__bar" data-ir-bar=""
      ><div
        class="esa-progress-bar esa-progress-bar--xs esa-progress-bar--primary"
        role="progressbar"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Drafting"
      >
        <div class="esa-progress-bar__header typography-body-2xs">
          <span class="esa-progress-bar__label typography-label-2xs">Drafting</span>
        </div>
        <div class="esa-progress-bar__track">
          <div class="esa-progress-bar__fill" style="width: 0%"></div>
        </div></div></span
    ><span data-ir-view-progress=""
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
        ><button class="esa-button__native typography-microcopy-2xs" type="button">
          <span class="esa-button__label">View progress</span>
        </button></span
      ></span
    >
  </div>
  <div class="bcn-sw3ir__line" data-ir-drafted="" hidden="">
    <span class="bcn-sw3ir__ok" data-ir-approved-mark=""
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
          <path d="m9 12 2 2 4-4"></path></svg></span></span
    ><span class="bcn-sw3ir__step" data-ir-review=""></span
    ><span data-ir-pending=""></span><span data-ir-nobin=""></span
    ><span data-ir-suggest=""
      ><span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--xs"
        ><button class="esa-button__native typography-microcopy-2xs" type="button">
          <span class="esa-button__label">Suggest subcategories</span>
        </button></span
      ></span
    ><span data-ir-view-log=""
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
        ><button class="esa-button__native typography-microcopy-2xs" type="button">
          <span class="esa-button__label">View log</span>
        </button></span
      ></span
    >
  </div>
  <esa-dialog heading="Drafting obligations" size="md" data-ir-log="true"
    ><ol class="bcn-sw3ir__stages" data-ir-stages=""></ol>
    <div
      class="bcn-sw3ir__log"
      role="log"
      aria-label="Run log"
      tabindex="0"
      data-ir-lines=""
    ></div
  ></esa-dialog>
</div>
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
.typography-body-2xs {
  font-family: var(--typography-body-2xs-font-family);
  font-size: var(--typography-body-2xs-font-size);
  font-weight: var(--typography-body-2xs-font-weight);
  line-height: var(--typography-body-2xs-line-height);
  letter-spacing: var(--typography-body-2xs-letter-spacing);
}
.typography-label-2xs {
  font-family: var(--typography-label-2xs-font-family);
  font-size: var(--typography-label-2xs-font-size);
  font-weight: var(--typography-label-2xs-font-weight);
  line-height: var(--typography-label-2xs-line-height);
  letter-spacing: var(--typography-label-2xs-letter-spacing);
}
.typography-label-2xs-strong {
  font-family: var(--typography-label-2xs-strong-font-family);
  font-size: var(--typography-label-2xs-strong-font-size);
  font-weight: var(--typography-label-2xs-strong-font-weight);
  line-height: var(--typography-label-2xs-strong-line-height);
  letter-spacing: var(--typography-label-2xs-strong-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
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
.esa-loading-spinner {
  --_spinner-size: 32px;
  --_spinner-border-width: 3px;
  --_spinner-color: var(--loading-spinner-color, var(--color-background-brand, #46a758));
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-loading-spinner--xs {
  --_spinner-size: 14px;
  --_spinner-border-width: 2px;
}
.esa-loading-spinner--sm {
  --_spinner-size: 20px;
  --_spinner-border-width: 2px;
}
.esa-loading-spinner--lg {
  --_spinner-size: 48px;
  --_spinner-border-width: 4px;
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
.bcn-sw3ir {
  gap: var(--spacing-200);
  padding: 0 var(--spacing-500) var(--spacing-400);
  color: var(--color-content-default);
  flex-direction: column;
  font-size: 0.875rem;
  display: flex;
}
.bcn-sw3ir [hidden] {
  display: none !important;
}
.bcn-sw3ir:not(:has(> :not([hidden], esa-dialog))) {
  display: none;
}
.bcn-sw3ir__line {
  align-items: center;
  gap: var(--spacing-200) var(--spacing-300);
  flex-wrap: wrap;
  min-height: 28px;
  display: flex;
}
.bcn-sw3ir__step {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}
.bcn-sw3ir__line > span {
  font-variant-numeric: tabular-nums;
}
.bcn-sw3ir__bar {
  flex: 10rem;
  min-width: 8rem;
  max-width: 20rem;
}
.bcn-sw3ir__ok {
  color: var(--color-content-success);
  line-height: 0;
}
.bcn-sw3ir [data-ir-pending],
.bcn-sw3ir [data-ir-nobin] {
  color: var(--color-content-default-secondary);
}
.bcn-sw3ir__rerun {
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--spacing-400);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-sunken);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ir__rerun p {
  margin: 0;
}
.bcn-sw3ir__said {
  font-weight: 600;
}
.bcn-sw3ir__lists {
  gap: var(--spacing-200) var(--spacing-500);
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  display: grid;
}
.bcn-sw3ir__lh {
  font-weight: 600;
}
.bcn-sw3ir ul {
  margin: var(--spacing-100) 0 0;
  max-height: 9rem;
  padding-left: 1.1em;
  overflow-y: auto;
}
.bcn-sw3ir__stages {
  margin: 0 0 var(--spacing-400);
  gap: var(--spacing-200);
  flex-direction: column;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-sw3ir .bcn-sw3ir__stage {
  gap: var(--spacing-200);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default-secondary);
  grid-template-columns: 1.25rem 10rem minmax(0, 1fr);
  align-items: baseline;
  display: grid;
}
.bcn-sw3ir .bcn-sw3ir__stage[data-state="running"],
.bcn-sw3ir .bcn-sw3ir__stage[data-state="done"] {
  color: var(--color-content-default);
}
.bcn-sw3ir .bcn-sw3ir__stage b {
  font-weight: 600;
}
.bcn-sw3ir__log {
  max-height: 18rem;
  padding: var(--spacing-300);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-sunken);
  font-variant-numeric: tabular-nums;
  font-size: 0.8125rem;
  line-height: 1.6;
  overflow-y: auto;
}
.bcn-sw3ir .bcn-sw3ir__log p {
  margin: 0;
}
.bcn-sw3ir .bcn-sw3ir__log p[data-h] {
  margin-top: var(--spacing-200);
  font-weight: 600;
}
.bcn-sw3ir .bcn-sw3ir__log p[data-h]:first-child {
  margin-top: 0;
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
.esa-button--xs {
  --_btn-pad-y: var(--spacing-200, 0.5rem);
  --_btn-padding-x: var(--spacing-200, 0.5rem);
  --_btn-radius: var(--button-radius-xs, 4px);
}
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-pad-y: var(--spacing-400, 1rem);
  --_btn-padding-x: var(--spacing-400, 1rem);
  --_btn-radius: var(--button-radius-lg, 8px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
}
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
}
.esa-button--variant-success {
  --_accent: var(--color-background-utility-success);
  --_accent-hover: var(--color-background-utility-success-hover);
  --_on: var(--color-content-on-utility-success);
  --_accent-text: var(--color-content-utility-success);
}
.esa-button--variant-warning {
  --_accent: var(--color-background-utility-warning);
  --_accent-hover: var(--color-background-utility-warning-hover);
  --_on: var(--button-on-warning, var(--color-content-on-utility-warning, #4f3422));
  --_accent-text: var(--color-content-utility-warning);
}
.esa-button--variant-info {
  --_accent: var(--color-background-utility-info);
  --_accent-hover: var(--color-background-utility-info-hover);
  --_accent-text: var(--color-content-utility-info);
}
.esa-button--variant-ai {
  --_accent: var(--color-background-ai);
  --_accent-hover: var(--color-background-ai-hover);
  --_accent-text: var(--color-content-ai);
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
  background: var(
    --button-chrome-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
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
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
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
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
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
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-instructions .esa-collapsible__summary {
  padding-block: var(--_aldo-gap);
}
.bcn-aldo-panel__side .bcn-aldo-instructions .esa-collapsible__summary {
  padding-block: 0 var(--spacing-200);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-2xs {
  font-family: var(--typography-body-2xs-font-family);
  font-size: var(--typography-body-2xs-font-size);
  font-weight: var(--typography-body-2xs-font-weight);
  line-height: var(--typography-body-2xs-line-height);
  letter-spacing: var(--typography-body-2xs-letter-spacing);
}
.typography-label-2xs {
  font-family: var(--typography-label-2xs-font-family);
  font-size: var(--typography-label-2xs-font-size);
  font-weight: var(--typography-label-2xs-font-weight);
  line-height: var(--typography-label-2xs-line-height);
  letter-spacing: var(--typography-label-2xs-letter-spacing);
}
.typography-label-2xs-strong {
  font-family: var(--typography-label-2xs-strong-font-family);
  font-size: var(--typography-label-2xs-strong-font-size);
  font-weight: var(--typography-label-2xs-strong-font-weight);
  line-height: var(--typography-label-2xs-strong-line-height);
  letter-spacing: var(--typography-label-2xs-strong-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.esa-collapsible {
  border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--color-background-elevation-raised, #fcfcfc);
}
.esa-collapsible--flush {
  background: 0 0;
  border: none;
  border-radius: 0;
}
.esa-collapsible--flush > .esa-collapsible__summary,
.esa-collapsible--flush > .esa-collapsible__body {
  padding-inline: 0;
}
.esa-collapsible__summary {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
  color: var(--color-content-default, #202020);
  cursor: pointer;
  list-style: none;
  display: flex;
}
.esa-collapsible__summary::-webkit-details-marker {
  display: none;
}
.esa-collapsible__summary:after {
  content: "";
  border-right: 2px solid var(--color-content-default-secondary, #646464);
  border-bottom: 2px solid var(--color-content-default-secondary, #646464);
  width: 8px;
  height: 8px;
  margin-left: auto;
  transition: transform 0.15s;
  transform: rotate(-45deg);
}
.esa-collapsible[open] > .esa-collapsible__summary:after {
  transform: rotate(45deg);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.esa-collapsible__body {
  gap: var(--spacing-400, 1rem);
  padding: 0 var(--spacing-400, 1rem) var(--spacing-400, 1rem);
  flex-direction: column;
  display: flex;
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
.esa-progress-bar {
  --_progress-height: var(--progress-bar-height-md, 8px);
  --_progress-radius: var(--radius-pill, 9999px);
  --_progress-track-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_progress-fill-bg: var(--color-background-brand, #46a758);
  width: 100%;
  display: block;
}
.esa-progress-bar__header {
  margin-bottom: var(--spacing-100, 0.25rem);
  justify-content: space-between;
  align-items: baseline;
  display: flex;
}
.esa-progress-bar__label {
  color: var(--color-content-default, #202020);
}
.esa-progress-bar__value {
  color: var(--color-content-default-secondary, #646464);
  font-variant-numeric: tabular-nums;
}
.esa-progress-bar__track {
  height: var(--_progress-height);
  border-radius: var(--_progress-radius);
  background: var(--_progress-track-bg);
  position: relative;
  overflow: hidden;
}
.esa-progress-bar__fill {
  border-radius: var(--_progress-radius);
  background: var(--_progress-fill-bg);
  height: 100%;
  transition: width 0.3s;
}
.esa-progress-bar--xs {
  --_progress-height: var(--progress-bar-height-xs, 2px);
}
.esa-progress-bar--sm {
  --_progress-height: var(--progress-bar-height-sm, 4px);
}
.esa-progress-bar--lg {
  --_progress-height: var(--progress-bar-height-lg, 12px);
}
.esa-progress-bar--success {
  --_progress-fill-bg: var(--color-background-utility-success, #30a46c);
}
.esa-progress-bar--warning {
  --_progress-fill-bg: var(--color-background-utility-warning, #ffc53d);
}
.esa-progress-bar--danger {
  --_progress-fill-bg: var(--color-background-utility-danger, #e5484d);
}
.esa-progress-bar--indeterminate .esa-progress-bar__fill {
  animation: esa-progress-indeterminate
    var(--animation-indeterminate, 1.5s ease-in-out infinite);
  width: 40% !important;
}
.esa-progress-bar__fill {
  transition: none;
}
.esa-progress-bar__fill {
  background: highlight;
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
- `--animation-indeterminate`: 1.5s ease-in-out infinite _(semantic)_
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-aldo-600`: #06736f _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-success`: #218358 _(component)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--loading-spinner-color`: #005862 _(component)_
- `--loading-spinner-track-color`: #efefef _(component)_
- `--progress-bar-height-lg`: 12px _(component)_
- `--progress-bar-height-md`: 8px _(component)_
- `--progress-bar-height-sm`: 4px _(component)_
- `--progress-bar-height-xs`: 2px _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--radius-pill`: 9999px _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-2xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-2xs-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-body-2xs-font-weight`: 400 _(semantic)_
- `--typography-body-2xs-letter-spacing`: .01em _(semantic)_
- `--typography-body-2xs-line-height`: 1.6 _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 400 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-label-2xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-2xs-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-label-2xs-font-weight`: 500 _(semantic)_
- `--typography-label-2xs-letter-spacing`: .01em _(semantic)_
- `--typography-label-2xs-line-height`: 1.6 _(semantic)_
- `--typography-label-2xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-2xs-strong-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-label-2xs-strong-font-weight`: 550 _(semantic)_
- `--typography-label-2xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-2xs-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-2xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-2xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-strong-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-2xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-subtle-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-2xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-subtle-line-height`: 1 _(semantic)_
