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
.bcn-lineage__icon .esa-icon {
  --_icon-size: 14px;
}
.bcn-trigger-row .esa-icon {
  color: var(--color-primary);
  flex-shrink: 0;
}
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
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
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
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
.bcn-reqref__key .esa-icon {
  --_icon-size: 11px;
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.bcn-reqref__footer .esa-icon {
  --_icon-size: 13px;
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
```

## Tokens
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--color-primary`: #005862 _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--form-height-md`: 36px _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
