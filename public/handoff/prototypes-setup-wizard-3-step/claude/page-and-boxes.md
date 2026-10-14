# Page and boxes

The page in view, large, with a box per commitment drawn as it is found (dashed) and turned solid when it parses, its requirement spans filling in alternating shades. While following the scan, the view is the page being read. Picking any page stops following; Follow the scan resumes. Mark missed commitment turns the page into a drag target: drag over the commitment and Beacon parses it.

## Key decisions
- Boxes come from our own anchoring of each quote against the text layer, not from model citations (page-level only, and not combinable with structured output).
- Coordinates are page fractions, so boxes ride the pre-rendered page image at any width. Pages are pre-rendered WebP (scripts/anchor-itp.mjs).

## Gotchas
- Boxes are keyed per find and per span, so a repaint keeps existing elements and only new ones animate in.

## Done when
- On p. 151, Mark missed commitment, drag over the "11.35 Fish Salvage Plan" heading: a row appears as Parsing, then "pp. 151–154" with 7 requirements.

## Markup
```html
<div class="bcn-pv" data-page-view="">
  <div class="bcn-pv__sheet" data-pv-sheet="" style="aspect-ratio: 1 / 1.2941">
    <img class="bcn-pv__img" data-pv-img="" alt="" decoding="async" />
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
  object-fit: contain;
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
.bcn-sw3scan__page .bcn-pv {
  width: 100%;
  max-width: 46rem;
  margin: 0 auto;
}
```

## Tokens
- `--color-commitment`: #58508d _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-requirement`: #a05195 _(component)_
- `--radius-050`: .125rem _(primitive)_
- `--shadow-200`: 0 4px 20px -4px #0000000f _(component)_
