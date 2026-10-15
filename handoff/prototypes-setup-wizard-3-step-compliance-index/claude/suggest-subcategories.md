# Suggest subcategories

Homes for what fit no subcategory, in develop's three parts: fits a bin you already have, new bins (named and placed), and better left without a bin of their own (Unfiled › Needs a home). Each suggestion is a card whose header is where its items land, as the index draws it: the category's hue dot, the category, ›, the subcategory. A new bin's header is that placement as two fields, Category then Subcategory, its dot following the category chosen. Under the header, the items as review rows: kind chip, statement, commitment badges. Better left without a bin of their own is one card, Unfiled › Needs a home, each item with its own tick and its reason under it. Unticking fades what Apply will leave out. Apply files them; Draft again makes drafts of them.

## Key decisions
- A suggestion is accepted whole, one tick a card; the plan already takes a subset, so per-item ticks are a later option.
- Unfiled actions carry no requirement type yet, so their chip reads Action.

## Markup
```html
<esa-dialog
  heading="Suggest subcategories"
  size="lg"
  class="bcn-sw3is-dialog"
  data-sw3-index-suggest="true"
  ><template data-is-badge=""
    ><span class="bcn-cbadge bcn-cbadge--sm" data-astro-cid-cqxc3yz3=""></span
  ></template>
  <div class="bcn-sw3is">
    <section class="bcn-sw3is__sec" data-is-existing="" aria-labelledby="sw3-is-ex-h">
      <h3 class="bcn-sw3is__h" id="sw3-is-ex-h">Fits a bin you already have</h3>
      <ol class="bcn-sw3is__list" data-is-existing-list=""></ol>
    </section>
    <section class="bcn-sw3is__sec" data-is-new="" aria-labelledby="sw3-is-new-h">
      <h3 class="bcn-sw3is__h" id="sw3-is-new-h">New bins</h3>
      <ol class="bcn-sw3is__list" data-is-new-list=""></ol>
    </section>
    <section class="bcn-sw3is__sec" data-is-left="" aria-labelledby="sw3-is-left-h">
      <h3 class="bcn-sw3is__h" id="sw3-is-left-h">
        Better left without a bin of their own
      </h3>
      <div class="bcn-sw3is__card" data-is-left-card="">
        <div class="bcn-sw3is__head">
          <span class="bcn-sw3is__dest"
            ><span class="bcn-sw3is__dot" aria-hidden="true"></span
            ><span class="bcn-sw3is__cat">Unfiled</span
            ><span class="bcn-sw3is__sep" aria-hidden="true">›</span
            ><span class="bcn-sw3is__sub">Needs a home</span></span
          >
        </div>
        <ul class="bcn-sw3is__items" data-is-left-list=""></ul>
      </div>
    </section>
  </div>
  <div slot="footer" class="bcn-sw3is__foot">
    <span
      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
      ><button
        class="esa-button__native typography-microcopy-xs"
        type="button"
        data-is-apply="true"
      >
        <span class="esa-button__label">Apply</span>
      </button></span
    ><span
      class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
      ><button
        class="esa-button__native typography-microcopy-xs"
        type="button"
        data-is-cancel="true"
      >
        <span class="esa-button__label">Cancel</span>
      </button></span
    >
  </div></esa-dialog
>
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
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-block;
}
.bcn-cbadge--md {
  font-size: var(--font-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-cbadge--neutral {
  font-family: var(--typography-font-family-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
}
.bcn-console__more .esa-button__native {
  font-family: var(--_mono);
  height: auto;
  min-height: 0;
  padding: 0 1ch;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.65;
}
.bcn-console__more .esa-button__native:hover {
  color: var(--bcn-console-fg);
}
.bcn-sw3is-dialog {
  --dialog-width-lg: min(56rem, calc(100vw - 4rem));
}
.bcn-sw3is {
  gap: var(--spacing-500);
  color: var(--color-content-default);
  flex-direction: column;
  font-size: 0.8125rem;
  line-height: 1.5;
  display: flex;
}
.bcn-sw3is [hidden] {
  display: none !important;
}
.bcn-sw3is__sec {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-sw3is__h {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
}
.bcn-sw3is__list {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-sw3is .bcn-sw3is__card {
  --_hue: var(--color-content-default-tertiary);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised, var(--color-background-default));
  overflow: hidden;
}
.bcn-sw3is .bcn-sw3is__head {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background-elevation-sunken);
  border-bottom: 1px solid var(--color-border-default);
  display: flex;
}
.bcn-sw3is .bcn-sw3is__head--fields {
  align-items: end;
}
.bcn-sw3is .bcn-sw3is__head--fields esa-checkbox {
  padding-bottom: var(--spacing-150);
}
.bcn-sw3is .bcn-sw3is__dest {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  font-size: 0.875rem;
  display: flex;
}
.bcn-sw3is .bcn-sw3is__dot {
  background: var(--_hue);
  border-radius: 50%;
  flex: none;
  width: 8px;
  height: 8px;
}
.bcn-sw3is .bcn-sw3is__cat {
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  font-weight: 500;
}
.bcn-sw3is .bcn-sw3is__sep {
  color: var(--color-content-default-tertiary);
}
.bcn-sw3is .bcn-sw3is__sub {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  font-weight: 600;
  overflow: hidden;
}
.bcn-sw3is .bcn-sw3is__fields {
  gap: var(--spacing-300);
  flex: 1;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  align-items: end;
  min-width: 0;
  display: grid;
}
.bcn-sw3is .bcn-sw3is__catfield {
  gap: var(--spacing-200);
  grid-template-columns: 8px minmax(0, 1fr);
  align-items: end;
  display: grid;
}
.bcn-sw3is .bcn-sw3is__catfield .bcn-sw3is__dot {
  margin-bottom: 0.9rem;
}
.bcn-sw3is .bcn-sw3is__reason {
  padding: var(--spacing-300) var(--spacing-400) 0;
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-sw3is .bcn-sw3is__items {
  padding: var(--spacing-100) var(--spacing-400);
  margin: 0;
  list-style: none;
}
.bcn-sw3is .bcn-sw3is__item {
  gap: var(--spacing-100) var(--spacing-300);
  padding: var(--spacing-250) 0;
  grid-template-columns: 4.75rem minmax(0, 1fr) auto;
  align-items: baseline;
  display: grid;
}
.bcn-sw3is .bcn-sw3is__item + .bcn-sw3is__item {
  border-top: 1px solid var(--color-border-subtle, var(--color-border-default));
}
.bcn-sw3is .bcn-sw3is__item--tick {
  grid-template-columns: auto 4.75rem minmax(0, 1fr) auto;
  align-items: start;
}
.bcn-sw3is .bcn-sw3is__item .bcn-draft-kind {
  justify-self: start;
  max-width: 100%;
}
.bcn-sw3is .bcn-sw3is__item--tick .bcn-draft-kind {
  margin-top: 0.15em;
}
.bcn-sw3is .bcn-sw3is__text {
  gap: var(--spacing-050);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-sw3is .bcn-sw3is__why {
  color: var(--color-content-default-secondary);
}
.bcn-sw3is .bcn-sw3is__cites {
  justify-content: flex-end;
  gap: var(--spacing-100);
  flex-wrap: wrap;
  max-width: 14rem;
  display: flex;
}
.bcn-sw3is .bcn-sw3is__item--tick .bcn-sw3is__cites {
  margin-top: 0.1em;
}
.bcn-sw3is
  .bcn-sw3is__card:has(> .bcn-sw3is__head > esa-checkbox:not([checked]))
  > :not(.bcn-sw3is__head),
.bcn-sw3is
  .bcn-sw3is__item--tick:has(> esa-checkbox:not([checked]))
  > :not(esa-checkbox) {
  opacity: 0.45;
}
.bcn-sw3is
  .bcn-sw3is__card:has(> .bcn-sw3is__head > esa-checkbox:not([checked]))
  .bcn-sw3is__dest {
  opacity: 0.6;
}
.bcn-sw3is__foot {
  gap: var(--spacing-200);
  justify-content: flex-end;
  width: 100%;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__cite:hover .bcn-cbadge,
.bcn-sw3ip .bcn-sw3ip__stack:hover .bcn-cbadge:first-child {
  background: color-mix(
    in srgb,
    var(--color-commitment) 22%,
    var(--color-background-elevation-raised)
  );
}
.bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge {
  box-shadow:
    1.5px 0 0 0 var(--color-background-elevation-raised),
    0 0 0 1px var(--color-background-elevation-raised);
  grid-area: 1/1;
}
.bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge:first-child {
  z-index: 3;
}
.bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge:nth-child(2) {
  z-index: 2;
  color: #0000;
  background: color-mix(
    in srgb,
    var(--color-commitment) 26%,
    var(--color-background-elevation-raised)
  );
  transform: translate(9px) scaleY(0.84);
}
.bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge:nth-child(3) {
  z-index: 1;
  color: #0000;
  background: color-mix(
    in srgb,
    var(--color-commitment) 40%,
    var(--color-background-elevation-raised)
  );
  transform: translate(18px) scaleY(0.68);
}
.bcn-sw3ip .bcn-sw3ip__stack:hover .bcn-cbadge:nth-child(2) {
  transform: translate(11px) scaleY(0.84);
}
.bcn-sw3ip .bcn-sw3ip__stack:hover .bcn-cbadge:nth-child(3) {
  transform: translate(22px) scaleY(0.68);
}
.bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge {
  transition: transform 0.12s ease-out;
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
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-aldo-600`: #06736f _(component)_
- `--bcn-console-fg`: #ffffffed _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-700`: #525252 _(component)_
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
- `--color-background-default`: #fafafa _(semantic)_
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
- `--color-border-subtle`: #efefef _(component)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-microcopy-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-subtle-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
