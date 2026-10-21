# Report preview → PDF

Daily Report Review · source prototype: https://esassoc.github.io/beacon-design/prototypes/monitoring/daily-report-review/

![Report preview → PDF, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-report-review/claude/report-preview-pdf.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-report-review/claude/report-preview-pdf.phone.png

Generate Report opens a preview of the regulator document (letterhead, General Information, Compliance Monitoring Details per location, captioned photos, End of Report) built from the same model as the PDF, so the preview is what gets issued. Generate PDF downloads it and moves the DMR to Report Generated.

## Key decisions

- PDF, not Word (product decision), generated client-side here with jsPDF + autotable from the shared report model.
- "Highlight Beacon edits" tints every passage whose text differs from the inspector's Fulcrum original — the reviewer sees exactly what the regulator reads that is not in the field record. The PDF never carries the tints.
- If corrections are still unpushed, the preview warns and offers "Push to Fulcrum first".

## Gotchas

- The current prod Word generator prints "[object Object]" for Contractor(s); the model joins the contractor list explicitly.
- The PDF uses Times (built in) rather than the theme's Besley; embedding the brand font is a production task.

## Done when

- The preview reflects every edit made on the page; Generate PDF downloads a multi-page PDF with the invented letterhead on every page and "Page X of Y" footers.
- After generating, the status chip reads Report Generated and the change log records the file name.

## Components

- `bcn-report-doc` (spoke) · `src/components/bcn/BcnReportPreview.astro`
- `bcn-report-preview` (spoke) · `src/components/bcn/BcnReportPreview.astro`
- `esa-alert-box` (hub) · `packages/ecology/src/components/esa-alert-box.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-dialog` (hub) · `packages/ecology/src/components/esa-dialog.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-switch-toggle` (hub) · `packages/ecology/src/components/esa-switch-toggle.ts`

## Markup

_26 repeated elements are collapsed in the markup below; the comments say where._

```html
<esa-dialog
  heading="Report preview"
  size="lg"
  data-bcn-report-preview="true"
  class="bcn-report-preview"
  open=""
  ><div class="bcn-report-preview__body stack" data-gap="md">
    <div class="bcn-report-preview__toolbar cluster" data-gap="md">
      <esa-switch-toggle
        label="Highlight Beacon edits"
        checked=""
        data-rp-highlight="true"
        size="md"
        label-position="after"
      ></esa-switch-toggle
      ><span class="bcn-report-preview__legend typography-body-sm"
        ><span class="bcn-report-preview__swatch" aria-hidden="true" data-rp-swatch=""></span
        ><span data-rp-count="">2 passages edited in Beacon</span></span
      >
    </div>
    <div data-rp-pending="">
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
            <path
              d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
            ></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
        </div>
        <div class="esa-alert-box__body">
          <div class="esa-alert-box__message">
            <div class="stack" data-gap="sm">
              <span data-rp-pending-text=""
                >2 corrections haven't been pushed to Fulcrum. The report will include them, but
                Fulcrum won't match until you push.</span
              >
              <div class="cluster" data-gap="xs">
                <span
                  class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    data-rp-push="true"
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" x2="12" y1="3" y2="15"></line></svg></span
                    ><span class="esa-button__label">Push to Fulcrum first</span>
                  </button></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bcn-report-preview__desk">
      <article
        class="bcn-report-doc"
        tabindex="0"
        aria-label="Report document"
        data-rp-doc=""
        data-highlight=""
      >
        <header class="bcn-report-doc__letterhead">
          <div class="bcn-report-doc__org">
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20120%… [863 characters]"
              alt=""
              width="56"
              height="56"
            />
            <span class="bcn-report-doc__agency">Basin &amp; Range Lands Office</span>
          </div>
          <div class="bcn-report-doc__org bcn-report-doc__org--end">
            <span>Fieldstone Environmental Monitoring</span>
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20120%… [488 characters]"
              alt=""
              width="56"
              height="56"
            />
          </div>
          <p class="bcn-report-doc__title">Daily Monitoring Report</p>
          <p class="bcn-report-doc__project">Coyote Wash Substation</p>
        </header>
        <h3 class="bcn-report-doc__heading">Dana Whitcomb – Compliance Inspector</h3>
        <h4 class="bcn-report-doc__section">General Information</h4>
        <table class="bcn-report-doc__table">
          <tbody>
            <tr>
              <th scope="row">Compliance Inspector</th>
              <td>Dana Whitcomb</td>
            </tr>
            <tr>
              <th scope="row">Date</th>
              <td>09/11/2026</td>
            </tr>
            <!-- …and 6 more like this (<tr>) -->
          </tbody>
        </table>
        <h4 class="bcn-report-doc__section">Compliance Monitoring Details</h4>
        <table class="bcn-report-doc__table">
          <tbody>
            <tr>
              <th scope="row">Monitoring Location</th>
              <td>CW-TS14</td>
            </tr>
            <tr>
              <th scope="row">Time</th>
              <td>09:05</td>
            </tr>
            <!-- …and 4 more like this (<tr>) -->
          </tbody>
        </table>
        <table class="bcn-report-doc__table">
          <tbody>
            <tr>
              <th scope="row">Monitoring Location</th>
              <td>CW-TS22</td>
            </tr>
            <tr>
              <th scope="row">Time</th>
              <td>11:20</td>
            </tr>
            <!-- …and 4 more like this (<tr>) -->
          </tbody>
        </table>
        <table class="bcn-report-doc__table">
          <tbody>
            <tr>
              <th scope="row">Monitoring Location</th>
              <td>CW-TS31</td>
            </tr>
            <tr>
              <th scope="row">Time</th>
              <td>13:04</td>
            </tr>
            <!-- …and 4 more like this (<tr>) -->
          </tbody>
        </table>
        <h4 class="bcn-report-doc__section">Photos of Coyote Wash Substation</h4>
        <ul class="bcn-report-doc__photos" role="list">
          <li>
            <figure>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%… [1714 characters]"
                alt="Salvage tags being removed from a barrel cactus on the CW-TS14 pad"
                width="400"
                height="300"
              />
              <figcaption>
                Photo Taken: 09/11/2026 09:16<br /><span class="bcn-report-doc__muted"
                  >CW-TS14</span
                >
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%… [1714 characters]"
                alt="Cleared cactus with tag removed, pad marked as salvaged"
                width="400"
                height="300"
              />
              <figcaption>
                Photo Taken: 09/11/2026 09:18<br /><span class="bcn-report-doc__muted"
                  >CW-TS14</span
                >
              </figcaption>
            </figure>
          </li>
          <!-- …and 8 more like this (<li>) -->
        </ul>
        <h4 class="bcn-report-doc__section">End of Report</h4>
        <table class="bcn-report-doc__table">
          <tbody>
            <tr>
              <th scope="row">End Time</th>
              <td>16:30</td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  </div>
  <div slot="footer" class="cluster" data-gap="xs">
    <span class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
      ><button
        class="esa-button__native typography-microcopy-md"
        type="button"
        data-rp-generate="true"
      >
        <span class="esa-icon esa-icon--md" aria-hidden="true"
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" x2="12" y1="15" y2="3"></line></svg></span
        ><span class="esa-button__label">Generate PDF</span>
      </button></span
    ><span class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--md"
      ><button
        class="esa-button__native typography-microcopy-md"
        type="button"
        data-rp-cancel="true"
      >
        <span class="esa-button__label">Cancel</span>
      </button></span
    >
  </div></esa-dialog
>
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
.bcn-dmr-wa__heading .esa-icon,
.bcn-dmr-wa__subhead .esa-icon {
  color: var(--color-content-default-secondary, #646464);
}
.bcn-report-preview {
  --dialog-width-lg: min(1040px, 96vw);
}
.bcn-report-preview__body {
  min-height: 70vh;
}
.bcn-report-preview__toolbar {
  justify-content: space-between;
}
.bcn-report-preview__legend {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  color: var(--color-content-default-secondary, #646464);
  display: inline-flex;
}
.bcn-report-preview__swatch {
  border-radius: var(--radius-sm, 4px);
  background: var(--color-background-utility-info-muted, #e6f1fd);
  border: var(--border-width-default, 1px) solid var(--color-border-utility-info, #8ec8f6);
  block-size: 1rem;
  inline-size: 1rem;
}
.bcn-report-preview__swatch[hidden] {
  display: none;
}
.bcn-report-preview__desk {
  background: var(--color-background-elevation-sunken, #f0f0f0);
  border-radius: var(--radius-md, 0.5rem);
  padding: var(--spacing-500, 1.5rem);
}
.bcn-report-preview .bcn-report-doc {
  background: var(--color-background-elevation-floating, #fcfcfc);
  max-inline-size: 816px;
  color: var(--color-content-default, #202020);
  box-shadow: var(--shadow-200, 0 2px 8px #0000001f);
  font-family: var(--font-decorative, "Besley", serif);
  border: 1px solid #0000;
  margin-inline: auto;
  padding: 48px 72px 72px;
  font-size: 14.5px;
  line-height: 1.45;
}
.bcn-report-preview .bcn-report-doc:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-report-preview .bcn-report-doc__letterhead {
  align-items: center;
  row-gap: var(--spacing-200, 0.5rem);
  border-block-end: 1px solid var(--color-border-default, #bbb);
  grid-template-columns: 1fr 1fr;
  margin-block-end: var(--spacing-500, 1.5rem);
  padding-block-end: var(--spacing-300, 0.75rem);
  display: grid;
}
.bcn-report-preview .bcn-report-doc__org {
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
  font-size: 13px;
  display: flex;
}
.bcn-report-preview .bcn-report-doc__org--end {
  text-align: end;
  justify-content: flex-end;
}
.bcn-report-preview .bcn-report-doc__agency {
  font-weight: 700;
}
.bcn-report-preview .bcn-report-doc__title,
.bcn-report-preview .bcn-report-doc__project {
  text-align: center;
  grid-column: 1/-1;
  margin: 0;
}
.bcn-report-preview .bcn-report-doc__title {
  font-size: 20px;
  font-weight: 700;
}
.bcn-report-preview .bcn-report-doc__heading {
  margin: 0 0 var(--spacing-400, 1rem);
  font-size: 19px;
  font-weight: 700;
}
.bcn-report-preview .bcn-report-doc__section {
  margin: var(--spacing-500, 1.5rem) 0 var(--spacing-200, 0.5rem);
  font-size: 17px;
  font-weight: 700;
}
.bcn-report-preview .bcn-report-doc__table {
  border-collapse: collapse;
  inline-size: 100%;
  margin-block-end: var(--spacing-400, 1rem);
}
.bcn-report-preview .bcn-report-doc__table th,
.bcn-report-preview .bcn-report-doc__table td {
  border: 1px solid var(--color-border-default, #bbb);
  text-align: start;
  vertical-align: top;
  padding: 6px 8px;
}
.bcn-report-preview .bcn-report-doc__table th {
  background: var(--color-background-elevation-sunken, #f0f0f0);
  inline-size: 30%;
  font-weight: 700;
}
.bcn-report-preview .bcn-report-doc__table p {
  margin: 0 0 var(--spacing-200, 0.5rem);
}
.bcn-report-preview .bcn-report-doc__table p:last-child {
  margin-block-end: 0;
}
.bcn-report-preview .bcn-report-doc__photos {
  gap: var(--spacing-500, 1.5rem);
  margin: 0 0 var(--spacing-400, 1rem);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 0;
  list-style: none;
  display: grid;
}
.bcn-report-preview .bcn-report-doc__photos figure {
  margin: 0;
}
.bcn-report-preview .bcn-report-doc__photos img {
  aspect-ratio: 4/3;
  border: 1px solid var(--color-border-default, #bbb);
  block-size: auto;
  inline-size: 100%;
  display: block;
}
.bcn-report-preview .bcn-report-doc__photos figcaption {
  margin-block-start: var(--spacing-150, 0.375rem);
  font-size: 13.5px;
}
.bcn-report-preview .bcn-report-doc__muted {
  color: var(--color-content-default-secondary, #646464);
}
.bcn-report-preview .bcn-report-doc__edit {
  background: var(--color-background-utility-info-muted, #e6f1fd);
  color: inherit;
  border-radius: var(--radius-xs, 2px);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding-inline: 2px;
}
@media (forced-colors: active) {
  .bcn-report-preview .bcn-report-doc__edit {
    color: marktext;
    background: mark;
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
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
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
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
.esa-alert-box__message {
  color: var(--_alert-text-color);
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
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--alert-box-text-color` | `#525252` | component |
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
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-brand-muted-hover` | `#b9d6d2` | semantic |
| `--color-background-elevation-floating` | `#fcfcfc` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info-muted` | `#e6f4fe` | semantic |
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
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand-muted` | `#203c25` | semantic |
| `--color-content-utility-info` | `#0d74ce` | semantic |
| `--color-content-utility-warning` | `#ab6400` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--radius-sm` | `.25rem` | semantic |
| `--radius-xs` | `.125rem` | semantic |
| `--shadow-200` | `0 4px 20px -4px #0000000f` | component |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
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
