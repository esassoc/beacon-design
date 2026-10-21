# Unsynced-changes bar (batched push to Fulcrum)

Daily Report Review · source prototype: https://esassoc.github.io/beacon-design/prototypes/monitoring/daily-report-review/

![Unsynced-changes bar (batched push to Fulcrum), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-report-review/claude/unsynced-changes-bar-batched-push-to-fulcrum.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-report-review/claude/unsynced-changes-bar-batched-push-to-fulcrum.phone.png

Corrections to monitoring data are held in Beacon as PENDING until the reviewer pushes them to Fulcrum together. The bar counts them and offers Review (a dialog listing each correction old → new, with per-row Undo) and Push to Fulcrum.

## Key decisions

- Batch-then-push, not instant sync (product decision): reviewers check a set of corrections before anything leaves Beacon.
- Several edits to one field collapse into ONE pending correction; editing a field back to the value Fulcrum holds withdraws it (logged as "Withdrawn").
- The bar disappears at zero pending — no "0 corrections" state.

## Gotchas

- The "Fulcrum value" shown in Review is what Fulcrum holds NOW, not the first edit's from-value — after a partial push those differ.
- Push can also be requested from the report preview ("Push to Fulcrum first") via a document-level bcn-dmr-push-request event; both paths must run the same push + confirmation.

## Done when

- Editing a Fulcrum-data field (e.g. Precipitation) raises the count by one and marks the field "Pending sync".
- Push to Fulcrum clears the bar and turns every pending marker into "Synced"; the change log records "Pushed N changes to Fulcrum".

## Components

- `bcn-dmr-sync-bar` (spoke) · `src/components/bcn/BcnDmrSyncBar.astro`
- `esa-alert-box` (hub) · `packages/ecology/src/components/esa-alert-box.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-dialog` (hub) · `packages/ecology/src/components/esa-dialog.ts`

## Markup

```html
<div class="bcn-dmr-sync-bar" data-bcn-dmr-sync-bar="">
  <div class="esa-alert-box esa-alert-box--warning typography-body-sm">
    <div class="esa-alert-box__icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
        <path d="M12 9v4"></path>
        <path d="M12 17h.01"></path>
      </svg>
    </div>
    <div class="esa-alert-box__body">
      <strong class="esa-alert-box__title typography-label-sm-strong">Not synced</strong>
      <div class="esa-alert-box__message">
        <div class="bcn-dmr-sync-bar__content repel" data-gap="sm">
          <p class="bcn-dmr-sync-bar__message">
            <span data-bcn-dmr-sync-count="">2</span>
            <span data-bcn-dmr-sync-noun="">corrections</span> waiting to push to Fulcrum.
          </p>
          <div class="cluster" data-gap="xs">
            <span
              class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-bcn-dmr-sync-review="true"
              >
                <span class="esa-button__label">Review</span>
              </button></span
            ><span
              class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-bcn-dmr-sync-push="true"
              >
                <span class="esa-button__label">Push to Fulcrum</span>
              </button></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- script type="module" removed (449 bytes) --><esa-dialog
    heading="Corrections waiting to sync"
    size="lg"
    data-bcn-dmr-sync-dialog="true"
    ><ul class="bcn-dmr-sync-bar__list" role="list" data-bcn-dmr-sync-list=""></ul>
    <span
      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
      slot="footer"
      ><button
        class="esa-button__native typography-microcopy-md"
        type="button"
        data-bcn-dmr-sync-dialog-push="true"
      >
        <span class="esa-button__label">Push to Fulcrum</span>
      </button></span
    ><span
      class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--md"
      slot="footer"
      ><button
        class="esa-button__native typography-microcopy-md"
        type="button"
        data-bcn-dmr-sync-dialog-cancel="true"
      >
        <span class="esa-button__label">Cancel</span>
      </button></span
    ></esa-dialog
  ><template data-bcn-dmr-sync-row=""
    ><li class="bcn-dmr-sync-bar__row repel" data-gap="md" data-astro-cid-6tzd3hkt="">
      <div class="stack" data-gap="3xs" data-astro-cid-6tzd3hkt="">
        <span class="typography-label-md-strong" data-row-field="" data-astro-cid-6tzd3hkt=""></span
        ><span class="typography-body-md" data-astro-cid-6tzd3hkt=""
          ><span data-row-from="" data-astro-cid-6tzd3hkt=""></span
          ><span aria-hidden="true" data-astro-cid-6tzd3hkt="">→</span
          ><span class="visually-hidden" data-astro-cid-6tzd3hkt="">changed to</span
          ><span data-row-to="" data-astro-cid-6tzd3hkt=""></span></span
        ><span
          class="bcn-dmr-sync-bar__meta typography-body-sm"
          data-row-meta=""
          data-astro-cid-6tzd3hkt=""
        ></span>
      </div>
      <span
        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
        data-astro-cid-5nhxdd72=""
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-bcn-dmr-sync-undo="true"
          data-astro-cid-6tzd3hkt="true"
          data-astro-cid-5nhxdd72=""
        >
          <span class="esa-button__label" data-astro-cid-5nhxdd72="">Undo</span>
        </button></span
      >
    </li></template
  >
</div>
```

## Styles

```css
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.bcn-help-bar__tooltip .esa-button__label {
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-status .esa-alert-box {
  padding: var(--_aldo-gap) var(--spacing-250, 0.625rem);
  font-size: var(--_aldo-text);
  align-items: center;
}
.bcn-aldo-status .esa-alert-box__icon svg {
  width: 16px;
  height: 16px;
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
.bcn-dmr-sync-bar[hidden] {
  display: none;
}
.bcn-dmr-sync-bar__content {
  align-items: center;
}
.bcn-dmr-sync-bar__message {
  margin: 0;
}
.bcn-dmr-sync-bar__list {
  margin: 0;
  padding: 0;
  list-style: none;
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
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.esa-alert-box {
  --_alert-bg: var(--color-background-utility-info-subtle, #fbfdff);
  --_alert-border: var(--color-border-utility-info, #acd8fc);
  --_alert-accent: var(--color-content-utility-info, #0d74ce);
  --_alert-icon-color: var(--_alert-accent);
  --_alert-title-color: var(--_alert-accent);
  --_alert-text-color: var(--alert-box-text-color, var(--color-content-default-secondary, #646464));
  align-items: flex-start;
  gap: var(--spacing-300, 0.75rem);
  padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
  border: var(--border-width-default, 1px) solid var(--_alert-border);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--_alert-bg);
  display: flex;
}
.esa-alert-box--warning {
  --_alert-bg: var(--color-background-utility-warning-subtle, #fefdfb);
  --_alert-border: var(--color-border-utility-warning, #f3d673);
  --_alert-accent: var(--color-content-utility-warning, #ab6400);
}
.esa-alert-box__icon {
  color: var(--_alert-icon-color);
  flex-shrink: 0;
  padding-top: 1px;
}
.esa-alert-box__body {
  flex: 1;
  min-width: 0;
}
.esa-alert-box__title {
  color: var(--_alert-title-color);
  margin-bottom: var(--spacing-050, 0.125rem);
  display: block;
}
.esa-alert-box__message {
  color: var(--_alert-text-color);
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
}
.repel {
  --gap: var(--spacing-400, 1rem);
  --align: center;
  gap: var(--gap);
  align-items: var(--align);
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--alert-box-text-color` | `#525252` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-brand-muted-hover` | `#b9d6d2` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-background-utility-warning-subtle` | `#fefdfb` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-utility-info` | `#acd8fc` | semantic |
| `--color-border-utility-warning` | `#f3d673` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-on-brand-muted` | `#203c25` | semantic |
| `--color-content-utility-info` | `#0d74ce` | semantic |
| `--color-content-utility-warning` | `#ab6400` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--gap` | `1.5rem` | component |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
