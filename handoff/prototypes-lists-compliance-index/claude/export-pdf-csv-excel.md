# Export — PDF, CSV, Excel

Compliance Index on Lists · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/compliance-index/

![Export — PDF, CSV, Excel, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-compliance-index/claude/export-pdf-csv-excel.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-compliance-index/claude/export-pdf-csv-excel.phone.png

The index's ways out: PDF (the Compliance Index document), CSV and Excel, then Word (a later slice, BCN-1764). No JSON endpoint.

## Key decisions

- PDF calls `GET projects/{projectID}/compliance-index/generate-pdf` (list-export-compliance-index-pdf). The prototype opens the print route in a new tab.
- LATER SLICE, not this epic: Word is BCN-1764, under epic BCN-1922. The design is settled and the prototype's download works: the SAME document as the PDF, as a .docx from `GET projects/{projectID}/compliance-index/generate-docx`, beside generate-pdf. Same title block, summary, detail and order; Word's own pagination, with the summary table's header row repeating on each page. The prototype builds a .doc from the print route (list-word.ts), so its content cannot drift from the PDF (Andy, 2026-10-20: "show as active").

## Gotchas

- Open: prod has no CSV or Excel of the index yet. The rows are shown so the card matches every list's; their columns are undecided (the PDF's summary columns plus Category and Subcategory is the obvious start).

## Done when

- PDF, CSV, Excel and Word rows in that order; PDF returns the index document.

## Components

- `bcn-lxp` (spoke) · `src/components/bcn/BcnListExportPanel.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-card` (hub) · `packages/ecology/src/components/esa-card.astro`

## Markup

```html
<section class="bcn-lxp" data-list-export-panel="">
  <div class="esa-card esa-card--outlined">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title typography-title-sm-strong">Export</h3>
        </div>
      </div>
    </div>
    <div class="esa-card__body typography-body-md">
      <div class="stack" data-gap="md">
        <div class="repel" data-gap="sm" data-list-export="pdf">
          <h4 class="cluster bcn-lxp__format typography-label-md-strong" data-gap="xs">
            <svg class="bcn-lxp__mark" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round">
                <path
                  d="M14 2.8H6.5A1.7 1.7 0 0 0 4.8 4.5v15a1.7 1.7 0 0 0 1.7 1.7h11a1.7 1.7 0 0 0 1.7-1.7V8Z"
                ></path>
                <path d="M13.8 2.8V8h5.4"></path>
              </g>
              <text x="12" y="18" text-anchor="middle" font-size="6" letter-spacing="-0.3">
                PDF
              </text></svg
            >PDF
          </h4>
          <span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
            ><a
              class="esa-button__native typography-microcopy-xs"
              href="/beacon-design/prototypes/list-export-documents/compliance-index"
              target="_blank"
              rel="noreferrer"
              role="button"
              ><span class="esa-button__label">Download</span></a
            ></span
          >
        </div>
        <hr class="bcn-lxp__rule" />
        <div class="repel" data-gap="sm" data-list-export="csv">
          <h4 class="cluster bcn-lxp__format typography-label-md-strong" data-gap="xs">
            <svg class="bcn-lxp__mark" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round">
                <path
                  d="M14 2.8H6.5A1.7 1.7 0 0 0 4.8 4.5v15a1.7 1.7 0 0 0 1.7 1.7h11a1.7 1.7 0 0 0 1.7-1.7V8Z"
                ></path>
                <path d="M13.8 2.8V8h5.4"></path>
              </g>
              <text x="12" y="18" text-anchor="middle" font-size="6" letter-spacing="-0.3">
                CSV
              </text></svg
            >CSV
          </h4>
          <span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-list-export-download="true"
            >
              <span class="esa-button__label">Download</span>
            </button></span
          >
        </div>
        <hr class="bcn-lxp__rule" />
        <div class="repel" data-gap="sm" data-list-export="excel">
          <h4 class="cluster bcn-lxp__format typography-label-md-strong" data-gap="xs">
            <svg class="bcn-lxp__mark" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round">
                <path
                  d="M14 2.8H6.5A1.7 1.7 0 0 0 4.8 4.5v15a1.7 1.7 0 0 0 1.7 1.7h11a1.7 1.7 0 0 0 1.7-1.7V8Z"
                ></path>
                <path d="M13.8 2.8V8h5.4"></path>
              </g>
              <text x="12" y="18" text-anchor="middle" font-size="7.5">X</text></svg
            >Excel
          </h4>
          <span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-list-export-download="true"
            >
              <span class="esa-button__label">Download</span>
            </button></span
          >
        </div>
        <hr class="bcn-lxp__rule" />
        <div class="repel" data-gap="sm" data-list-export="word">
          <h4 class="cluster bcn-lxp__format typography-label-md-strong" data-gap="xs">
            <svg class="bcn-lxp__mark" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round">
                <path
                  d="M14 2.8H6.5A1.7 1.7 0 0 0 4.8 4.5v15a1.7 1.7 0 0 0 1.7 1.7h11a1.7 1.7 0 0 0 1.7-1.7V8Z"
                ></path>
                <path d="M13.8 2.8V8h5.4"></path>
              </g>
              <text x="12" y="18" text-anchor="middle" font-size="7.5">W</text></svg
            >Word
          </h4>
          <span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-list-export-word="/beacon-design/prototypes/list-export-documents/compliance-index"
            >
              <span class="esa-button__label">Download</span>
            </button></span
          >
        </div>
      </div>
    </div>
  </div>
  <template data-list-export-copied=""
    ><span class="esa-icon esa-icon--sm" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
        data-astro-cid-wcwfib5m=""
      >
        <path d="M20 6 9 17l-5-5"></path></svg></span
  ></template>
</section>
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
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.bcn-lxp__format,
.bcn-lxp .bcn-key-value__key,
.bcn-lxp .bcn-key-value__val {
  font-size: 0.875rem;
  line-height: 1.45;
}
.bcn-lxp__format {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-lxp .bcn-key-value {
  gap: var(--spacing-100);
}
.bcn-lxp__mark {
  block-size: 1.5em;
  inline-size: 1.5em;
  color: var(--color-content-default-secondary);
  flex: none;
}
.bcn-lxp__mark text {
  fill: currentColor;
  font-family: var(--typography-font-family-sans);
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-lxp__rule {
  border: 0;
  border-block-start: 1px solid var(--color-border-default-subtle);
  margin: 0;
}
.bcn-lxp [data-list-export-copy][data-copied] {
  color: var(--color-content-utility-success);
}
.esa-card {
  --_card-bg: var(--card-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_card-border: var(--card-border-color, var(--color-border-default, #cecece));
  --_card-radius: var(--radius-md, 0.5rem);
  --_card-padding: var(--spacing-500, 1.5rem);
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--color-content-default, #202020);
  --_card-header-border: var(--color-border-default-subtle, #d9d9d9);
  --_card-meta-label-color: var(--color-content-default-secondary, #646464);
  --_card-meta-label-size: var(--typography-label-sm-font-size, 0.875rem);
  --_card-meta-value-size: var(--typography-label-md-font-size, 0.9375rem);
  background: var(--_card-bg);
  border: var(--border-width-default, 1px) solid var(--_card-border);
  border-radius: var(--_card-radius);
  display: block;
  overflow: hidden;
}
.esa-card--outlined {
  --_card-border: var(--color-border-default, #cecece);
}
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-background-brand, #46a758);
  --_card-header-color: var(--color-content-default-knockout, #fcfcfc);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-card__header {
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: var(--border-width-default, 1px) solid var(--_card-header-border);
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  display: flex;
}
.esa-card__header-content {
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
  display: flex;
}
.esa-card__titles {
  gap: var(--spacing-050, 0.125rem);
  flex-direction: column;
  display: flex;
}
.esa-card__title {
  color: inherit;
  margin: 0;
}
.esa-card__body {
  padding: var(--_card-padding);
}
.bcn-ev-staging__item .esa-card {
  overflow: visible;
}
.bcn-ev-targets__item[data-receiving] .esa-card {
  border-color: var(--color-background-brand-muted);
  background: color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent);
}
.bcn-ev-targets__item[data-blocked] .esa-card {
  opacity: 0.45;
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
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
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
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
| `--bcn-aldo-600` | `#06736f` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-utility-success` | `#218358` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--gap` | `1rem` | component |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
| `--typography-title-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-sm-strong-font-size` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | semantic |
| `--typography-title-sm-strong-font-weight` | `550` | semantic |
| `--typography-title-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-sm-strong-line-height` | `1.6` | semantic |
