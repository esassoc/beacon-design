# Source details

Step 1 — Source Documents · source prototype: https://esassoc.github.io/beacon-design/prototypes/setup-wizard-3-step/

Selecting a source (not one of its files) shows prod's source view in the main pane: Name and Reference number with Save, the files with page count and scan state (Open scan, Download, Delete), the upload dropzone for more PDFs, and Delete source document in a danger zone.

## Key decisions

- Feature parity with prod's source step: upload, name, delete and download (sourceDocumentsPut, source file Post, Delete, DownloadGet).
- Uploads in the prototype are kept in the browser (IndexedDB) and render for real; they have no scan, and Aldo says so.

## Done when

- Select Final Environmental Impact Report: its two files list with "170 pages. Not scanned." and "4 pages. Not scanned."

## Components

- `bcn-sw3ed` (spoke) · `src/components/bcn/BcnSw3SourceEditor.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-danger-zone` (hub) · `packages/ecology/src/components/esa-danger-zone.astro`
- `esa-file-upload` (hub) · `packages/ecology/src/components/esa-file-upload.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

## Markup

```html
<section class="bcn-sw3ed" data-sw3-editor="" hidden="" aria-labelledby="sw3ed-title">
  <form class="bcn-sw3ed__form" data-ed-form="">
    <h3 class="bcn-sw3ed__title typography-heading-sm" id="sw3ed-title" data-ed-title=""></h3>
    <div class="bcn-sw3ed__fields">
      <esa-text-field label="Name" size="sm" required="" data-ed-name="true"></esa-text-field
      ><esa-text-field label="Reference number" size="sm" data-ed-ref="true"></esa-text-field>
    </div>
    <div>
      <span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="submit"
          data-ed-save="true"
        >
          <span class="esa-button__label">Save</span>
        </button></span
      >
    </div>
  </form>
  <section class="bcn-sw3ed__files" aria-labelledby="sw3ed-files">
    <h4 class="bcn-sw3ed__h typography-title-strong" id="sw3ed-files">Files</h4>
    <ol class="bcn-sw3ed__list" data-ed-files=""></ol>
    <p class="bcn-sw3ed__none typography-body-md" data-ed-none="" hidden="">No files yet.</p>
    <esa-file-upload
      label="Add files"
      accept=".pdf,application/pdf"
      multiple="true"
      max-size-mb="200"
      data-ed-upload="true"
      name="files"
    ></esa-file-upload>
  </section>
  <section class="esa-danger-zone" role="group" aria-labelledby="esa-danger-zone-heading-1">
    <h3 class="esa-danger-zone__heading typography-title-sm-strong" id="esa-danger-zone-heading-1">
      Delete source document
    </h3>
    <p class="esa-danger-zone__description typography-body-md">
      Deleting it removes its files and every commitment found in them. This cannot be undone.
    </p>
    <div class="esa-danger-zone__actions typography-label-md">
      <span class="esa-button esa-button--variant-danger esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-ed-delete="true"
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
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              <line x1="10" x2="10" y1="11" y2="17"></line>
              <line x1="14" x2="14" y1="11" y2="17"></line></svg></span
          ><span class="esa-button__label">Delete source document</span>
        </button></span
      >
    </div>
  </section>
  <template data-ed-file-tpl=""
    ><li class="bcn-sw3ed__file" data-ed-file="" data-astro-cid-phaaurm2="">
      <span class="bcn-sw3ed__fileicon" data-astro-cid-phaaurm2=""
        ><span class="esa-icon esa-icon--md" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
            data-astro-cid-wcwfib5m=""
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            <path d="M10 9H8"></path>
            <path d="M16 13H8"></path>
            <path d="M16 17H8"></path></svg></span></span
      ><span class="bcn-sw3ed__filetext" data-astro-cid-phaaurm2=""
        ><span
          class="bcn-sw3ed__fname typography-label-md"
          data-ed-fname=""
          data-astro-cid-phaaurm2=""
        ></span
        ><span
          class="bcn-sw3ed__fmeta typography-body-sm"
          data-ed-fmeta=""
          data-astro-cid-phaaurm2=""
        ></span></span
      ><span class="bcn-sw3ed__factions" data-astro-cid-phaaurm2=""
        ><span
          class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
          data-astro-cid-5nhxdd72=""
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-ed-fopen="true"
            data-astro-cid-phaaurm2="true"
            data-astro-cid-5nhxdd72=""
          >
            <span class="esa-button__label" data-astro-cid-5nhxdd72="">Open scan</span>
          </button></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          data-astro-cid-5nhxdd72=""
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Download"
            title="Download"
            data-ed-fdownload="true"
            data-astro-cid-phaaurm2="true"
            data-astro-cid-5nhxdd72=""
          >
            <span class="esa-icon esa-icon--sm" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line></svg
            ></span></button></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          data-astro-cid-5nhxdd72=""
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Delete file"
            title="Delete file"
            data-ed-fdelete="true"
            data-astro-cid-phaaurm2="true"
            data-astro-cid-5nhxdd72=""
          >
            <span class="esa-icon esa-icon--sm" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                <line x1="10" x2="10" y1="11" y2="17"></line>
                <line x1="14" x2="14" y1="11" y2="17"></line></svg
            ></span></button></span
      ></span></li
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
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
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
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
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
.esa-danger-zone {
  --_dz-bg: var(--color-background-utility-danger-subtle, #fffcfc);
  --_dz-border: var(--color-border-utility-danger, #fdbdbe);
  --_dz-heading-color: var(--color-content-utility-danger);
  --_dz-description-color: var(--color-content-default-secondary, #646464);
  --_dz-radius: var(--radius-md, 0.5rem);
  --_dz-padding: var(--spacing-300, 0.75rem);
  --_dz-gap: var(--spacing-200, 0.5rem);
  gap: var(--_dz-gap);
  padding: var(--_dz-padding);
  border: var(--border-width-default, 1px) solid var(--_dz-border);
  border-radius: var(--_dz-radius);
  background: var(--_dz-bg);
  flex-direction: column;
  display: flex;
}
.esa-danger-zone__heading {
  color: var(--_dz-heading-color);
  margin: 0;
}
.esa-danger-zone__description {
  color: var(--_dz-description-color);
  margin: 0;
}
.esa-danger-zone__actions {
  gap: var(--_dz-gap);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sw3ed {
  gap: var(--spacing-600);
  box-sizing: border-box;
  min-height: 100%;
  padding: var(--spacing-500);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  flex-direction: column;
  flex: none;
  display: flex;
}
.bcn-sw3ed[hidden] {
  display: none;
}
.bcn-sw3ed__form {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ed__title {
  margin: 0;
}
.bcn-sw3ed__fields {
  gap: var(--spacing-300);
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  display: grid;
}
.bcn-sw3ed__files {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ed__h {
  margin: 0;
}
.bcn-sw3ed__none {
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-sw3ed__list {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-sw3ed__list:empty {
  display: none;
}
.bcn-sw3ed__list .bcn-sw3ed__file {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  display: flex;
}
.bcn-sw3ed__list .bcn-sw3ed__fileicon {
  color: var(--color-content-default-secondary);
  display: inline-flex;
}
.bcn-sw3ed__list .bcn-sw3ed__filetext {
  flex-direction: column;
  flex: 1;
  min-width: 0;
  display: flex;
}
.bcn-sw3ed__list .bcn-sw3ed__fname {
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-sw3ed__list .bcn-sw3ed__fmeta {
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
}
.bcn-sw3ed__list .bcn-sw3ed__factions {
  align-items: center;
  gap: var(--spacing-100);
  flex: none;
  display: flex;
}
.bcn-sw3tools esa-button-group,
.bcn-sw3tools .esa-button,
.bcn-sw3tools esa-dropdown-menu {
  flex: none;
}
@container (width<=720px) {
  .bcn-sw3tools [data-tool="follow"] .esa-button__label {
    display: none;
  }
}
@container (width<=660px) {
  .bcn-sw3tools [data-tool]:not([data-tool="zoom-fit"]) .esa-button__label {
    display: none;
  }
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-danger-hover` | `#641723` | semantic |
| `--color-background-utility-danger-subtle` | `#fffcfc` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-utility-danger` | `#fdbdbe` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
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
| `--typography-title-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-strong-font-size` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | semantic |
| `--typography-title-strong-font-weight` | `550` | semantic |
| `--typography-title-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-strong-line-height` | `1.6` | semantic |
