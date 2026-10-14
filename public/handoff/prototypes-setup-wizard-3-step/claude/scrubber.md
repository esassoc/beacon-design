# Scrubber

Every page in scope in one strip. Read pages fill in; a pip marks each find on the page it starts (hollow while found, solid once parsed); a read page with nothing on it is a hatched gap, which is where a missed commitment hides. The scan head runs ahead of the thumb (the page in view). Drag or click to jump; click a pip to land on that commitment.

## Key decisions
- bcn-page-scrubber, reusable: esa-range-slider is a single native input with no per-step state or markers.
- Keyboard: it is a slider (arrows, Page Up/Down by five, Home/End). Pips are pointer shortcuts; the queue is the keyboard path to a find.

## Done when
- After the run, pp. 152–154 show as gaps until COA 11.35 is marked; then none do.

## Markup
```html
<div
  class="bcn-scrub"
  data-page-scrubber=""
  data-first="131"
  data-last="180"
  style="--_n: 50"
>
  <div
    class="bcn-scrub__track"
    role="slider"
    tabindex="0"
    aria-label="Page in view"
    aria-valuemin="131"
    aria-valuemax="180"
    aria-valuenow="131"
    aria-valuetext="Page 131"
    data-scrub-track=""
  >
    <span class="bcn-scrub__page" data-page="131" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="132" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="133" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="134" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="135" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="136" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="137" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="138" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="139" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="140" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="141" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="142" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="143" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="144" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="145" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="146" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="147" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="148" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="149" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="150" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="151" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="152" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="153" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="154" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="155" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="156" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="157" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="158" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="159" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="160" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="161" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="162" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="163" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="164" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="165" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="166" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="167" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="168" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="169" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="170" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="171" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="172" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="173" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="174" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="175" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="176" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="177" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="178" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="179" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__page" data-page="180" data-state="pending"
      ><span class="bcn-scrub__pips" data-scrub-pips=""></span></span
    ><span class="bcn-scrub__head" data-scrub-head="" hidden="" aria-hidden="true"></span
    ><span class="bcn-scrub__thumb" data-scrub-thumb="" aria-hidden="true"></span>
  </div>
  <div class="bcn-scrub__ticks typography-microcopy-sm" aria-hidden="true">
    <span class="bcn-scrub__tick" style="--_i: 0">131</span
    ><span class="bcn-scrub__tick" style="--_i: 9">140</span
    ><span class="bcn-scrub__tick" style="--_i: 19">150</span
    ><span class="bcn-scrub__tick" style="--_i: 29">160</span
    ><span class="bcn-scrub__tick" style="--_i: 39">170</span
    ><span class="bcn-scrub__tick" style="--_i: 49">180</span>
  </div>
</div>
```

## Styles
```css
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.typography-microcopy-sm-subtle {
  font-family: var(--typography-microcopy-sm-subtle-font-family);
  font-size: var(--typography-microcopy-sm-subtle-font-size);
  font-weight: var(--typography-microcopy-sm-subtle-font-weight);
  line-height: var(--typography-microcopy-sm-subtle-line-height);
  letter-spacing: var(--typography-microcopy-sm-subtle-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
.bcn-scrub {
  --_cell: calc(100% / var(--_n));
  gap: var(--spacing-100);
  user-select: none;
  flex-direction: column;
  display: flex;
}
.bcn-scrub__track {
  grid-template-columns: repeat(var(--_n), minmax(0, 1fr));
  cursor: pointer;
  touch-action: none;
  border-radius: var(--radius-100);
  gap: 2px;
  height: 40px;
  padding: 4px 0;
  display: grid;
  position: relative;
}
.bcn-scrub__track:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-scrub__page {
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: 2px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4px;
  transition: background-color 0.16s;
  display: flex;
  position: relative;
}
.bcn-scrub__page[data-state="scanned"] {
  background: color-mix(
    in srgb,
    var(--color-content-default) 26%,
    var(--color-background-elevation-raised)
  );
  border-color: #0000;
}
.bcn-scrub__page[data-state="gap"] {
  background: repeating-linear-gradient(
    135deg,
    var(--color-background-warning-subtle),
    var(--color-background-warning-subtle) 3px,
    var(--color-background-elevation-raised) 3px,
    var(--color-background-elevation-raised) 6px
  );
  border-color: var(--color-border-warning);
}
.bcn-scrub__page[data-state="out"] {
  opacity: 0.5;
  background: 0 0;
  border-style: dashed;
}
.bcn-scrub__pips {
  flex-direction: column;
  align-items: center;
  gap: 2px;
  display: flex;
}
.bcn-scrub__pips .bcn-scrub__pip {
  border: 1.5px solid var(--color-commitment);
  background: var(--color-background-elevation-raised);
  cursor: pointer;
  border-radius: 50%;
  width: 7px;
  height: 7px;
  animation: 0.22s ease-out bcn-scrub-pop;
  display: block;
}
.bcn-scrub__pips .bcn-scrub__pip[data-parsed] {
  background: var(--color-commitment);
}
.bcn-scrub__pips .bcn-scrub__pip[data-selected] {
  box-shadow:
    0 0 0 2px var(--color-background-elevation-raised),
    0 0 0 3.5px var(--color-commitment);
}
.bcn-scrub__head {
  top: 0;
  bottom: 0;
  left: calc(var(--_cell) * var(--_head, 0));
  width: var(--_cell);
  background: color-mix(in srgb, var(--color-background-brand) 22%, transparent);
  box-shadow: inset 0 -3px 0 var(--color-background-brand);
  pointer-events: none;
  border-radius: 2px;
  transition: left 0.3s;
  position: absolute;
}
.bcn-scrub__thumb {
  top: -3px;
  bottom: -3px;
  left: calc(var(--_cell) * var(--_view, 0) - 2px);
  width: calc(var(--_cell) + 4px);
  border: 2px solid var(--color-content-default);
  pointer-events: none;
  border-radius: 4px;
  position: absolute;
}
.bcn-scrub__ticks {
  height: 1.25rem;
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  line-height: 1.25rem;
  position: relative;
}
.bcn-scrub__tick {
  left: calc(var(--_cell) * var(--_i) + var(--_cell) / 2);
  position: absolute;
  transform: translate(-50%);
}
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.typography-microcopy-sm-subtle {
  font-family: var(--typography-microcopy-sm-subtle-font-family);
  font-size: var(--typography-microcopy-sm-subtle-font-size);
  font-weight: var(--typography-microcopy-sm-subtle-font-weight);
  line-height: var(--typography-microcopy-sm-subtle-line-height);
  letter-spacing: var(--typography-microcopy-sm-subtle-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
```

## Tokens
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-warning-subtle`: #fefdfb _(component)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-border-warning`: #f3d673 _(component)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--typography-microcopy-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-sm-font-weight`: 500 _(semantic)_
- `--typography-microcopy-sm-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-sm-line-height`: 1 _(semantic)_
- `--typography-microcopy-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-sm-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-sm-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-sm-subtle-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-sm-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-sm-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-sm-subtle-line-height`: 1 _(semantic)_
