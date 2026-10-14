# Page and boxes

The page in view, rendered from the uploaded PDF by pdf.js, with a box per commitment drawn as it is found (dashed) and turned solid when it parses, its requirement spans filling in alternating shades. On the MMRP's landscape tables a box is the table row, across page breaks. While following the scan, the view is the page being read; picking any page stops following, and Follow the scan resumes. Mark missed turns the page into a drag target.

## Key decisions
- pdf.js in the browser, as prod's source-pdf-viewer (ng2-pdfjs-viewer). No pre-rendered images.
- Boxes are PdfBoundingBoxDto (page, x, y, width, height as page fractions): they arrive in events and sit over the render at any zoom.
- Boxes come from anchoring against the text layer (PdfPig words), not from model citations. A table's rows and columns come from the header row's word positions on each page.

## Gotchas
- Assign table words to rows by y with a few points of slack: a cell's first line can sit a hundredth of a point above the row's code.
- A flattened form (the NOD) has drawn labels and image text; the text layer misses them, so the page needs OCR or a vision pass.

## Done when
- On ITP p. 151, Mark missed, drag over the "11.35 Fish Salvage Plan" heading: a card appears, then COA 11.35 parses into 7 requirements.

## Markup
```html
<div class="bcn-pv" data-page-view="">
  <div class="bcn-pv__sheet" data-pv-sheet="" style="aspect-ratio: 612 / 792">
    <canvas
      class="bcn-pv__img"
      data-pv-canvas=""
      role="img"
      aria-label="Page 131 of the ITP"
      width="288"
      height="372"
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
