# Merge

Step 3: Compliance Index · source prototype: https://esassoc.github.io/beacon-design/prototypes/setup-wizard-3-step/compliance-index/

Two columns. Left, the ticked drafts as they read, numbered: class, who reads it, title, Applies when (or an action's scope, party, frequency and deadline), and each requirement with its excerpt. Right, the merged draft as it will be made: the title, the first draft's fields, and every requirement and monitor sign of every draft, each marked with the numbers of the drafts it came from. Pressing a draft's title makes it the merged title; the title stays editable. Merge, then Cancel.

## Key decisions

- The preview is what merge() keeps: the union of requirements (one row per requirement and excerpt) and of monitor signs. That a merge loses no source is shown by the numbers on each row, not said.
- The merged draft takes the first ticked draft's class, audience and Applies when, whichever title is picked; the preview shows it.

## Done when

- Merging two Compliance staff drafts in Take and injury reporting shows Requirements (2) marked 1 and 2, and Monitor signs (4) on the merged draft.

## Components

- `bcn-sw3im` (spoke) · `src/components/bcn/BcnSw3IndexMerge.astro`
- `bcn-sw3im-dialog` (spoke) · `src/components/bcn/BcnSw3IndexMerge.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`
- `esa-dialog` (hub) · `packages/ecology/src/components/esa-dialog.ts`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`

## Markup

```html
<esa-dialog heading="Merge drafts" size="lg" class="bcn-sw3im-dialog" data-sw3-index-merge="true"
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
    <span class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
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
@container (width<=640px) {
  .bcn-sw3c__group [data-c-tool] .esa-button__label {
    display: none;
  }
}
@container (width<=540px) {
  .bcn-sw3c__group [data-c-pages] .esa-button__label,
  .bcn-sw3c__rule {
    display: none;
  }
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
@media (width<=52rem) {
  .bcn-sw3im {
    grid-template-columns: minmax(0, 1fr);
  }
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
  background: var(--color-background-default-hover, var(--color-background-elevation-sunken));
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
@container (width<=720px) {
  .bcn-sw3ip__toolkeys :is([data-ip-merge], [data-ip-discard-all]) .esa-button__label {
    display: none;
  }
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
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
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
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-console-fg` | `#ffffffed` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-brand-muted-hover` | `#b9d6d2` | semantic |
| `--color-background-brand-subtle` | `#effefb` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-default-hover` | `#e8e8e8` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-brand` | `#b9d6d2` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-focus` | `#3e9b4f` | component |
| `--color-border-subtle` | `#efefef` | component |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-on-brand-muted` | `#203c25` | semantic |
| `--color-content-warning` | `#ab6400` | component |
| `--elevation-2` | `0 2px 12px 0 #0000000a` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
