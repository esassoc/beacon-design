# Page and boxes

The page in view, rendered from the uploaded PDF by pdf.js, with a box per commitment drawn as it is found (dashed) and turned solid when it parses, its requirement spans filling in alternating shades. While following the scan, the view is the page being read; picking any page stops following, and Follow the scan resumes. Mark missed commitment turns the page into a drag target: drag over the commitment and Beacon parses it.

## Key decisions
- pdf.js in the browser, as prod's source-pdf-viewer (ng2-pdfjs-viewer). No pre-rendered images.
- Boxes are PdfBoundingBoxDto (page, x, y, width, height as page fractions): they arrive in events and sit over the render at any zoom.
- Boxes come from anchoring each quote against the text layer (PdfPig words for native PDFs, OCR words for scanned ones), not from model citations.

## Gotchas
- Render each page at the sheet width times devicePixelRatio, off-screen, then swap, so the old page holds until the new one is ready.

## Done when
- On p. 151, Mark missed commitment, drag over the "11.35 Fish Salvage Plan" heading: a card appears, then COA 11.35 parses into 7 requirements and pp. 152–154 stop being gaps.

## Markup
```html
<div class="bcn-pv" data-page-view="">
  <div class="bcn-pv__sheet" data-pv-sheet="" style="aspect-ratio: 612 / 792">
    <canvas
      class="bcn-pv__img"
      data-pv-canvas=""
      role="img"
      aria-label="Page 131 of the ITP"
      width="384"
      height="496"
    ></canvas>
    <div class="bcn-pv__boxes" data-pv-boxes=""></div>
    <div class="bcn-pv__drag" data-pv-drag="" hidden=""></div>
  </div>
</div>
```

## Styles
```css
.bcn-pv {
  justify-content: center;
  min-width: 0;
  display: flex;
}
.bcn-pv__sheet {
  width: 100%;
  box-shadow: var(--shadow-200);
  border-radius: var(--radius-050);
  position: relative;
  overflow: hidden;
}
.bcn-pv__sheet[data-selecting] {
  cursor: crosshair;
}
.bcn-pv__img {
  background: var(--color-background-elevation-raised);
  width: 100%;
  height: 100%;
  display: block;
}
.bcn-pv__boxes {
  position: absolute;
  inset: 0;
}
.bcn-pv__boxes .bcn-pv__box {
  border-radius: 3px;
  animation: 0.36s ease-out bcn-pv-draw;
  position: absolute;
}
.bcn-pv__boxes .bcn-pv__box[data-kind="find"] {
  outline: 2px dashed var(--color-commitment);
  outline-offset: 4px;
  background: color-mix(in srgb, var(--color-commitment) 5%, transparent);
  cursor: pointer;
}
.bcn-pv__boxes .bcn-pv__box[data-kind="find"][data-parsed] {
  outline-style: solid;
}
.bcn-pv__boxes .bcn-pv__box[data-kind="find"][data-selected] {
  background: color-mix(in srgb, var(--color-commitment) 9%, transparent);
  outline-width: 3px;
}
.bcn-pv__boxes .bcn-pv__box[data-kind="span"] {
  background: color-mix(in srgb, var(--color-requirement) 18%, transparent);
  pointer-events: none;
  animation-duration: 0.6s;
}
.bcn-pv__boxes .bcn-pv__box[data-kind="span"][data-shade="2"] {
  background: color-mix(in srgb, var(--color-requirement) 30%, transparent);
}
.bcn-pv__boxes .bcn-pv__box[data-kind="mark"] {
  outline: 2px solid var(--color-content-default);
  outline-offset: 4px;
}
.bcn-pv__drag {
  border: 2px solid var(--color-content-default);
  background: color-mix(in srgb, var(--color-content-default) 8%, transparent);
  pointer-events: none;
  position: absolute;
}
```

## Tokens
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-requirement`: #a05195 _(component)_
- `--radius-050`: .125rem _(primitive)_
- `--shadow-200`: 0 4px 20px -4px #0000000f _(component)_
