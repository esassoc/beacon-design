# Source viewer

The source PDF shown in the family side-dialog (esa-side-dialog, lg / 66vw), opened from the reference block's "View in Source Document" trigger and the edit modal's context button. An iframe renders the PDF with the native viewer chrome stripped (#view=FitH&navpanes=0&pagemode=none).

## Key decisions
- It is the shared family side-dialog lego (not a bespoke drawer), 66vw with a blurred backdrop, rendered at page root so it beats the topbar and the edit modal.
- A single shared drawer instance serves both entry points (the reference block and the modal context button).
- Its footer carries an "Open Source Document" link to the source-document catalog page.

## Gotchas
- The prototype loads the sample FEIR PDF; in the app, set the iframe src to the real source document before opening.
- Keep the z-stack ordering: viewer (--z-modal 1300) above the edit modal (1200) above the topbar (1100).

## Done when
- Triggering "View in Source Document" (from the reference block or the modal) opens the PDF in a 66vw right side-dialog over a blurred backdrop.

## Markup
```html
<esa-side-dialog
  id="source-drawer"
  heading="3600 Alameda Avenue Project FEIR"
  size="lg"
  style="
    --_width: 66vw;
    --z-modal: 1300;
    --z-modal-backdrop: 1250;
    --backdrop-filter: blur(4px);
  "
  position="right"
>
  <div class="bcn-source-pdf">
    <iframe
      class="bcn-source-pdf__frame"
      src="/beacon-design/source-docs/feir-sample.pdf#view=FitH&amp;navpanes=0&amp;pagemode=none"
      title="Source document — 3600 Alameda Avenue Project FEIR (sample)"
    ></iframe>
  </div>
  <span slot="footer" class="bcn-source-foot">
    <a
      class="esa-icon-link esa-icon-link--sm esa-icon-link--medium"
      href="#data-catalog/source-documents/3600-alameda-feir"
      ><span class="esa-icon-link__label">Open Source Document</span>
      <span class="esa-icon esa-icon--xs" aria-hidden="true">
        <svg
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
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </span>
    </a>
  </span>
</esa-side-dialog>
```

## Styles
```css
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  --_ib-bg-hover: var(
    --icon-button-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_ib-size);
  height: var(--_ib-size);
  padding: 0;
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.bcn-reqref__key .esa-icon {
  --_icon-size: 11px;
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.bcn-reqref__footer .esa-icon {
  --_icon-size: 13px;
}
.bcn-lineage__icon .esa-icon {
  --_icon-size: 14px;
}
.bcn-trigger-row .esa-icon {
  color: var(--color-primary);
  flex-shrink: 0;
}
.bcn-context__doc .esa-icon {
  color: var(--color-text-tertiary);
}
.bcn-note .esa-icon {
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 2px;
}
.bcn-ntoggle__title .esa-icon {
  color: var(--color-text-primary);
}
.bcn-source-pdf {
  height: 100%;
  min-height: 60vh;
}
.bcn-source-pdf__frame {
  width: 100%;
  height: 100%;
  min-height: 60vh;
  border: 0;
  border-radius: var(--radius-200);
  background: var(--color-surface-sunken);
}
.bcn-source-foot {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.esa-icon {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
}
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.nav-section__header > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-950);
  transition: color 0.15s ease;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  transition:
    transform 0.15s ease,
    opacity 0.2s ease-in-out;
  flex-shrink: 0;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.esa-icon-link {
  --_il-font: var(--icon-link-font-size-md, 1rem);
  display: inline-flex;
  align-items: center;
  gap: var(--icon-link-gap, var(--spacing-150, 6px));
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
  color: inherit;
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: var(--_il-font);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
}
.esa-icon-link--sm {
  --_il-font: var(--icon-link-font-size-sm, 0.875rem);
}
.esa-icon-link--medium {
  font-weight: var(--font-weight-medium, 500);
}
.esa-icon-link__label {
  display: inline-block;
}
```

## Tokens
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-primary`: #005862 _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--form-height-md`: 36px _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-link-font-size-md`: 1rem _(component)_
- `--icon-link-font-size-sm`: .875rem _(component)_
- `--icon-link-gap`: .375rem _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
