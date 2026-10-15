# Page and boxes

The page in view, rendered from the PDF by pdf.js, with a box per commitment: dashed where Aldo drew it, solid where a person did, under a toolbar pinned across the pane. Select (V) and Mark (M) are the modes; Edit ID and name (Enter) and Delete act on the selection; More tools holds Split (S), Merge, Continue on next page and Hide Aldo's boxes (B); then Follow (F), zoom and Undo / Redo. A selected box wears its ID and name; eight handles resize it, a drag moves it, arrows nudge (Shift for a bigger step), Shift+click adds another box to the selection, Escape lets go. Every edit and undo is recorded as a steer with its page. Requirement spans are not drawn in step 1: they are step 2's.

## Key decisions
- Boxes are PdfBoundingBoxDto (page, x, y, width, height as page fractions); an edit sends the new rect for that commitment and page.
- Boxes come from anchoring against the text layer (PdfPig words), not from model citations.
- Manual work never pauses the run; it stops the view following the scan, and Follow brings it back.
- The bar never changes shape: a tool that needs a selection sits in place, off until there is one. Nothing floats over the text the person is reading.
- Mark asks for a targeted re-read of the region. Split cuts a box at a height: the top keeps the commitment, the bottom becomes a passage of its own. Merge keeps the first ID in reading order and takes every box. Continue on next page adds a box on the next page to the same commitment (PdfBoundingBoxDto already allows many pages).
- Undo puts the record of finds back; the conversation stays append-only, so an undo is itself a steer ("Undid: ...").

## Gotchas
- Assign table words to rows by y with a few points of slack: a cell's first line can sit a hundredth of a point above the row's code.
- A flattened form (the NOD) has drawn labels and image text; the text layer misses them, so the page needs OCR or a vision pass.

## Done when
- Mark, then drag over a passage: a solid box appears selected, wearing No ID; Delete removes it, and both edits are in the conversation.
- Select 11.1 and 11.2 (Shift+click), More tools, Merge: one commitment, 11.1, with both boxes; Cmd+Z puts them back, and "Undid: Merged 11.2 into COA 11.1" is in the conversation.
- Select a box, Split (S), click across its middle: the box ends there and the lower part is a new passage.
- Drag a box's corner handle: the box resizes and Aldo records "Adjusted".

## Markup
```html
<div class="bcn-pv" data-page-view="">
  <div class="bcn-pv__sheet" data-pv-sheet="" style="aspect-ratio: 612 / 792">
    <canvas
      class="bcn-pv__img"
      data-pv-canvas=""
      role="img"
      aria-label="Page 131 of ITP_2081-2024-018-00_Signed.pdf"
      width="350"
      height="452"
    ></canvas>
    <div class="bcn-pv__boxes" data-pv-boxes=""></div>
    <div class="bcn-pv__drag" data-pv-drag="" hidden=""></div>
    <div class="bcn-pv__guide" data-pv-guide="" hidden=""></div>
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
  scroll-margin: 56px 16px 16px;
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
.bcn-pv__boxes .bcn-pv__box[data-edited] {
  outline-style: solid;
}
.bcn-pv__boxes .bcn-pv__box:focus-visible {
  outline-color: var(--focus-ring-color);
  outline-style: solid;
}
.bcn-pv__boxes .bcn-pv__box[data-editable] {
  cursor: move;
  touch-action: none;
}
.bcn-pv__boxes .bcn-pv__handle {
  border: 2px solid var(--color-commitment);
  background: var(--color-background-elevation-raised);
  border-radius: 2px;
  width: 10px;
  height: 10px;
  margin: -5px 0 0 -5px;
  position: absolute;
}
.bcn-pv__boxes .bcn-pv__handle[data-handle="nw"] {
  cursor: nwse-resize;
  top: -4px;
  left: -4px;
}
.bcn-pv__boxes .bcn-pv__handle[data-handle="n"] {
  cursor: ns-resize;
  top: -4px;
  left: 50%;
}
.bcn-pv__boxes .bcn-pv__handle[data-handle="ne"] {
  cursor: nesw-resize;
  top: -4px;
  left: calc(100% + 4px);
}
.bcn-pv__boxes .bcn-pv__handle[data-handle="e"] {
  cursor: ew-resize;
  top: 50%;
  left: calc(100% + 4px);
}
.bcn-pv__boxes .bcn-pv__handle[data-handle="se"] {
  cursor: nwse-resize;
  top: calc(100% + 4px);
  left: calc(100% + 4px);
}
.bcn-pv__boxes .bcn-pv__handle[data-handle="s"] {
  cursor: ns-resize;
  top: calc(100% + 4px);
  left: 50%;
}
.bcn-pv__boxes .bcn-pv__handle[data-handle="sw"] {
  cursor: nesw-resize;
  top: calc(100% + 4px);
  left: -4px;
}
.bcn-pv__boxes .bcn-pv__handle[data-handle="w"] {
  cursor: ew-resize;
  top: 50%;
  left: -4px;
}
.bcn-pv__boxes .bcn-pv__box[data-dragging] {
  transition: none;
  animation: none;
}
.bcn-pv__boxes .bcn-pv__chip {
  background: var(--color-commitment);
  max-width: min(28rem, 90vw);
  color: var(--color-content-default-knockout);
  white-space: nowrap;
  text-overflow: ellipsis;
  pointer-events: none;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.35;
  position: absolute;
  bottom: calc(100% + 8px);
  left: -6px;
  overflow: hidden;
}
.bcn-pv[data-hide-aldo]
  .bcn-pv__box[data-kind="find"]:not([data-mine]):not([data-selected]) {
  visibility: hidden;
}
.bcn-pv__boxes .bcn-pv__box[data-splitting] {
  cursor: row-resize;
}
.bcn-pv__guide {
  border-top: 2px dashed var(--color-content-default);
  pointer-events: none;
  height: 0;
  position: absolute;
}
.bcn-pv__guide[hidden] {
  display: none;
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
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-requirement`: #a05195 _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--radius-050`: .125rem _(primitive)_
- `--shadow-200`: 0 4px 20px -4px #0000000f _(component)_
