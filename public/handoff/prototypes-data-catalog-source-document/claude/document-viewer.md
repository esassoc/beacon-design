# Document viewer

The source PDF shown in the family side-dialog (esa-side-dialog, lg / 66vw), opened from the Files list. An iframe renders the PDF with the native viewer chrome stripped (#view=FitH&navpanes=0&pagemode=none).

## Key decisions
- It is the shared family side-dialog lego (not a bespoke drawer), 66vw with a blurred backdrop.
- Entry is exclusively the file rows — there is no header "View" action, because the document is multi-file.
- A single shared drawer instance serves every file row.

## Gotchas
- The prototype loads the sample PDF for every file; in the app, set the iframe src from the clicked file before opening.
- Keep the z-stack ordering: viewer (1300) above the edit modal (1200) above the topbar (1100); the delete confirm sits above all (1400).

## Done when
- Opening a file shows the PDF in a 66vw right side-dialog over a blurred backdrop.

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
</esa-side-dialog>
```

## Styles
```css
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
```

## Tokens
- `--color-surface-sunken`: #efefef _(semantic)_
- `--radius-200`: .5rem _(primitive)_
