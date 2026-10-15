# Merge

Two columns. Left, the ticked drafts as they read, numbered: class, who reads it, title, Applies when (or an action's scope, party, frequency and deadline), and each requirement with its excerpt. Right, the merged draft as it will be made: the title, the first draft's fields, and every requirement and monitor sign of every draft, each marked with the numbers of the drafts it came from. Pressing a draft's title makes it the merged title; the title stays editable. Merge, then Cancel.

## Key decisions
- The preview is what merge() keeps: the union of requirements (one row per requirement and excerpt) and of monitor signs. That a merge loses no source is shown by the numbers on each row, not said.
- The merged draft takes the first ticked draft's class, audience and Applies when, whichever title is picked; the preview shows it.

## Done when
- Merging two Compliance staff drafts in Take and injury reporting shows Requirements (2) marked 1 and 2, and Monitor signs (4) on the merged draft.

## Markup
```html
<esa-dialog
  heading="Merge drafts"
  size="lg"
  class="bcn-sw3im-dialog"
  data-sw3-index-merge="true"
  ><form class="bcn-sw3im" id="sw3-im-form" data-im-form="">
    <section class="bcn-sw3im__sources" aria-labelledby="sw3-im-src-h">
      <h3 class="bcn-sw3im__h" id="sw3-im-src-h" data-im-src-h="">Drafts</h3>
      <ol
        class="bcn-sw3im__cards"
        role="radiogroup"
        aria-label="Title from"
        data-im-sources=""
      ></ol>
    </section>
    <section class="bcn-sw3im__result" aria-labelledby="sw3-im-res-h">
      <h3 class="bcn-sw3im__h" id="sw3-im-res-h">Merged draft</h3>
      <div class="bcn-sw3im__card bcn-sw3im__card--result">
        <div data-im-res-head=""></div>
        <esa-textarea
          label="Title"
          size="sm"
          required=""
          maxlength="510"
          rows="3"
          auto-resize=""
          max-rows="6"
          data-im-title="true"
        ></esa-textarea
        ><esa-button-toggle
          label="Audience"
          size="sm"
          data-im-audience="true"
          data-options='[{"value":"Crews","label":"Crews"},{"value":"Monitors","label":"Monitors"},{"value":"Compliance staff","label":"Compliance staff"}]'
          hidden="true"
        ></esa-button-toggle
        ><esa-button-toggle
          label="Class"
          size="sm"
          data-im-class="true"
          data-options='[{"value":"Adhere","label":"Adhere"},{"value":"Monitor","label":"Monitor"},{"value":"Notify","label":"Notify"},{"value":"Roster","label":"Roster"}]'
          hidden="true"
        ></esa-button-toggle>
        <dl class="bcn-sw3im__fields" data-im-res-fields=""></dl>
        <div class="bcn-sw3im__block">
          <h4 class="bcn-sw3im__bh" data-im-res-locs-h=""></h4>
          <ol class="bcn-sw3im__locs" data-im-res-locs=""></ol>
        </div>
        <div class="bcn-sw3im__block" data-im-res-signs-wrap="">
          <h4 class="bcn-sw3im__bh" data-im-res-signs-h=""></h4>
          <ul class="bcn-sw3im__signs" data-im-res-signs=""></ul>
        </div>
      </div>
    </section>
  </form>
  <div slot="footer" class="bcn-sw3im__foot">
    <span
      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
      ><button
        class="esa-button__native typography-microcopy-xs"
        type="submit"
        form="sw3-im-form"
        data-im-submit="true"
      >
        <span class="esa-button__label">Merge</span>
      </button></span
    ><span
      class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
      ><button
        class="esa-button__native typography-microcopy-xs"
        type="button"
        data-im-cancel="true"
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
.bcn-sw3im [hidden] {
  display: none !important;
}
.bcn-sw3im-dialog {
  --dialog-width-lg: min(68rem, calc(100vw - 4rem));
}
.bcn-sw3im {
  gap: var(--spacing-500);
  color: var(--color-content-default);
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: start;
  font-size: 0.875rem;
  display: grid;
}
.bcn-sw3im__sources,
.bcn-sw3im__result {
  gap: var(--spacing-200);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-sw3im__result {
  position: sticky;
  top: 0;
}
.bcn-sw3im__h {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
}
.bcn-sw3im__cards {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-sw3im .bcn-sw3im__card {
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised, var(--color-background-default));
  flex-direction: column;
  display: flex;
}
.bcn-sw3im__card--result {
  border-color: var(--color-border-default-strong);
  box-shadow: var(--elevation-2);
}
.bcn-sw3im .bcn-sw3im__head {
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-content-default-secondary);
  display: flex;
}
.bcn-sw3im .bcn-sw3im__chip {
  line-height: 0;
}
.bcn-sw3im .bcn-sw3im__n {
  min-width: 1.375rem;
  height: 1.375rem;
  padding: 0 var(--spacing-100);
  border: 1px solid var(--color-border-default-strong);
  border-radius: var(--radius-full);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default-secondary);
  background: var(--color-background-default);
  flex: none;
  place-items: center;
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1;
  display: inline-grid;
}
.bcn-sw3im .bcn-sw3im__pick {
  gap: var(--spacing-250);
  margin: calc(-1 * var(--spacing-200));
  padding: var(--spacing-200);
  border-radius: var(--radius-100);
  font: inherit;
  text-align: left;
  color: var(--color-content-default);
  cursor: pointer;
  background: 0 0;
  border: 1px solid #0000;
  grid-template-columns: 1.125rem minmax(0, 1fr);
  align-items: start;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.45;
  display: grid;
}
.bcn-sw3im .bcn-sw3im__pick:hover {
  background: var(
    --color-background-default-hover,
    var(--color-background-elevation-sunken)
  );
}
.bcn-sw3im .bcn-sw3im__pick:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--color-border-focus);
  outline-offset: 1px;
}
.bcn-sw3im .bcn-sw3im__pick[aria-checked="true"] {
  border-color: var(--color-border-brand);
  background: var(--color-background-brand-subtle);
}
.bcn-sw3im .bcn-sw3im__radio {
  border: 1.5px solid var(--color-border-default-strong);
  background: var(--color-background-default);
  border-radius: 50%;
  width: 1.125rem;
  height: 1.125rem;
  margin-top: 0.15em;
  position: relative;
}
.bcn-sw3im .bcn-sw3im__pick[aria-checked="true"] .bcn-sw3im__radio {
  border-color: var(--color-background-brand);
}
.bcn-sw3im .bcn-sw3im__pick[aria-checked="true"] .bcn-sw3im__radio:after {
  content: "";
  background: var(--color-background-brand);
  border-radius: 50%;
  position: absolute;
  inset: 3px;
}
.bcn-sw3im .bcn-sw3im__fields {
  gap: var(--spacing-100) var(--spacing-300);
  grid-template-columns: 8.5rem minmax(0, 1fr);
  margin: 0;
  display: grid;
}
.bcn-sw3im .bcn-sw3im__fields dt {
  color: var(--color-content-default-secondary);
  font-weight: 500;
}
.bcn-sw3im .bcn-sw3im__fields dd {
  margin: 0;
}
.bcn-sw3im .bcn-sw3im__fields dd[data-needs] {
  color: var(--color-content-warning);
  font-weight: 500;
}
.bcn-sw3im__block {
  gap: var(--spacing-150);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-subtle, var(--color-border-default));
  flex-direction: column;
  display: flex;
}
.bcn-sw3im__bh {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
}
.bcn-sw3im .bcn-sw3im__locs {
  gap: var(--spacing-250);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-sw3im .bcn-sw3im__loc {
  gap: var(--spacing-300);
  grid-template-columns: minmax(4.75rem, max-content) minmax(0, 1fr) auto;
  align-items: baseline;
  display: grid;
}
.bcn-sw3im .bcn-sw3im__ref {
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  font-weight: 500;
}
.bcn-sw3im .bcn-sw3im__loc q {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  quotes: "“" "”";
  font-size: 0.9375rem;
  line-height: 1.55;
}
.bcn-sw3im__card--result .bcn-sw3im__loc q {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
}
.bcn-sw3im .bcn-sw3im__from {
  gap: var(--spacing-050);
  display: flex;
}
.bcn-sw3im .bcn-sw3im__signs {
  gap: var(--spacing-100);
  flex-direction: column;
  margin: 0;
  padding-left: 1.1em;
  display: flex;
}
.bcn-sw3im .bcn-sw3im__signs li {
  padding-left: var(--spacing-100);
}
.bcn-sw3im .bcn-sw3im__sign {
  gap: var(--spacing-300);
  justify-content: space-between;
  align-items: baseline;
  display: flex;
}
.bcn-sw3im .bcn-sw3im__card .bcn-sw3im__locs {
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-subtle, var(--color-border-default));
}
.bcn-sw3im .bcn-sw3im__card--source .bcn-sw3im__loc {
  grid-template-columns: minmax(4.75rem, max-content) minmax(0, 1fr);
}
.bcn-sw3im__foot {
  gap: var(--spacing-200);
  justify-content: flex-end;
  width: 100%;
  display: flex;
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
- `--color-background-brand-subtle`: #effefb _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-default-hover`: #e8e8e8 _(semantic)_
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
- `--color-border-brand`: #b9d6d2 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-focus`: #3e9b4f _(component)_
- `--color-border-subtle`: #efefef _(component)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--color-content-warning`: #ab6400 _(component)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
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
