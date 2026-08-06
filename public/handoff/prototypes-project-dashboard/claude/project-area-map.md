# Project area map

The project's footprint as an inset map in the rail, expandable to a modal. The review named the current map "not very useful yet, but I think it can be," and diagnosed it as a DATA problem: "we don't even have a footprint geometry."

## Key decisions
- The map shows the boundary polygon and the alignment only. Component markers were tried and cut — they read as noise at this size.
- The boundary's SOURCE renders as a field on the card, not a caption. Today it names the derivation; once projects can upload geometry it names the uploaded file in the same slot.
- The inset is deliberately non-interactive (it reads as a picture of the project); the modal is fully interactive and carries the legend plus an Upload-boundary affordance.

## Gotchas
- DEFERRED PAST SLICE 1 — this is blocked on geometry, not design. Real boundaries arrive with the spatial-data epic (KMZ / shapefile / GDB upload, feature-server connections), agreed 2026-08-03. The prototype derives a stand-in boundary from the 231 real DCP geotech coordinates already in the repo.
- Leaflet needs setView() BEFORE any layer is added, or _clipPoints throws on a map with no view.
- The modal map must be created lazily on first open (and invalidateSize() on reopen) so it measures a visible container.
- The review's appetite here was explicit and worth carrying into the spatial epic: "you should be able to upload a boundary just directly… let people draw on the maps or upload shape files."

## Done when
- The rail shows the project footprint with its boundary source named as a field; expanding opens an interactive map with a legend and an upload affordance; no component markers.

## Markup
```html
<div class="bcn-map">
  <div
    class="bcn-map__inset leaflet-container leaflet-touch leaflet-fade-anim"
    id="bcn-map-inset"
    role="img"
    aria-label="Delta Conveyance Project boundary map"
    style="position: relative"
  >
    <div
      class="leaflet-pane leaflet-map-pane"
      style="transform: translate3d(0px, 0px, 0px)"
    >
      <div class="leaflet-pane leaflet-tile-pane">
        <div class="leaflet-layer" style="z-index: 1; opacity: 1">
          <div
            class="leaflet-tile-container leaflet-zoom-animated"
            style="z-index: 18; transform: translate3d(225px, 47px, 0px) scale(0.5)"
          ></div>
          <div
            class="leaflet-tile-container leaflet-zoom-animated"
            style="z-index: 19; transform: translate3d(225px, 47px, 0px) scale(1)"
          >
            <img
              alt=""
              src="https://b.basemaps.cartocdn.com/light_all/8/41/98.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(62px, -126px, 0px);
                opacity: 1;
              "
            /><img
              alt=""
              src="https://a.basemaps.cartocdn.com/light_all/8/40/98.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(-194px, -126px, 0px);
                opacity: 1;
              "
            /><img
              alt=""
              src="https://c.basemaps.cartocdn.com/light_all/8/42/98.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(318px, -126px, 0px);
                opacity: 1;
              "
            /><img
              alt=""
              src="https://c.basemaps.cartocdn.com/light_all/8/39/98.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(-450px, -126px, 0px);
                opacity: 1;
              "
            /><img
              alt=""
              src="https://a.basemaps.cartocdn.com/light_all/8/43/98.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(574px, -126px, 0px);
                opacity: 1;
              "
            />
          </div>
        </div>
      </div>
      <div class="leaflet-pane leaflet-overlay-pane">
        <svg
          pointer-events="none"
          class="leaflet-zoom-animated"
          width="1061"
          height="214"
          viewBox="-88 -18 1061 214"
          style="transform: translate3d(-88px, -18px, 0px)"
        >
          <g>
            <path
              stroke="#005862"
              stroke-opacity="1"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#00918b"
              fill-opacity="0.12"
              fill-rule="evenodd"
              d="M432 158L446 135L462 124L457 101L457 66L454 54L454 43L442 31L442 19L432 19L432 31L444 43L444 54L447 66L447 101L452 124L436 135L422 158z"
            ></path>
            <path
              stroke="#00918b"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="4 4"
              fill="none"
              d="M427 158L441 135L457 124L452 101L452 66L449 54L449 43L437 31L437 19"
            ></path>
          </g>
        </svg>
      </div>
      <div class="leaflet-pane leaflet-shadow-pane"></div>
      <div class="leaflet-pane leaflet-marker-pane"></div>
      <div class="leaflet-pane leaflet-tooltip-pane"></div>
      <div class="leaflet-pane leaflet-popup-pane"></div>
      <div
        class="leaflet-proxy leaflet-zoom-animated"
        style="transform: translate3d(10650.9px, 25255.9px, 0px) scale(128)"
      ></div>
    </div>
    <div class="leaflet-control-container">
      <div class="leaflet-top leaflet-left"></div>
      <div class="leaflet-top leaflet-right"></div>
      <div class="leaflet-bottom leaflet-left"></div>
      <div class="leaflet-bottom leaflet-right"></div>
    </div>
  </div>
  <!-- The boundary's SOURCE is a field, not a caption: today it names the
         derivation, and once the spatial-data epic lands it names the uploaded
         file (DCP_Boundary.kmz) in the same slot. -->
  <p class="bcn-map__source">
    <span class="bcn-map__source-label">Boundary source</span>
    <span class="bcn-map__source-value">Geotech exploration extent (derived)</span>
  </p>
</div>
```

## Styles
```css
.leaflet-pane,
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-tile-container,
.leaflet-pane > svg,
.leaflet-pane > canvas,
.leaflet-zoom-box,
.leaflet-image-layer,
.leaflet-layer {
  position: absolute;
  left: 0;
  top: 0;
}
.leaflet-container {
  overflow: hidden;
}
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
}
.leaflet-tile::selection {
  background: transparent;
}
.leaflet-safari .leaflet-tile {
  image-rendering: -webkit-optimize-contrast;
}
.leaflet-safari .leaflet-tile-container {
  width: 1600px;
  height: 1600px;
  -webkit-transform-origin: 0 0;
}
.leaflet-container .leaflet-overlay-pane svg {
  max-width: none !important;
  max-height: none !important;
}
.leaflet-container .leaflet-marker-pane img,
.leaflet-container .leaflet-shadow-pane img,
.leaflet-container .leaflet-tile-pane img,
.leaflet-container img.leaflet-image-layer,
.leaflet-container .leaflet-tile {
  max-width: none !important;
  max-height: none !important;
  width: auto;
  padding: 0;
}
.leaflet-container img.leaflet-tile {
  mix-blend-mode: plus-lighter;
}
.leaflet-container.leaflet-touch-zoom {
  -ms-touch-action: pan-x pan-y;
  touch-action: pan-x pan-y;
}
.leaflet-container.leaflet-touch-drag {
  -ms-touch-action: pinch-zoom;
  touch-action: none;
  touch-action: pinch-zoom;
}
.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
  -ms-touch-action: none;
  touch-action: none;
}
.leaflet-container {
  -webkit-tap-highlight-color: transparent;
}
.leaflet-container a {
  -webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);
}
.leaflet-tile {
  filter: inherit;
  visibility: hidden;
}
.leaflet-tile-loaded {
  visibility: inherit;
}
.leaflet-overlay-pane svg {
  -moz-user-select: none;
}
.leaflet-pane {
  z-index: 400;
}
.leaflet-tile-pane {
  z-index: 200;
}
.leaflet-overlay-pane {
  z-index: 400;
}
.leaflet-shadow-pane {
  z-index: 500;
}
.leaflet-marker-pane {
  z-index: 600;
}
.leaflet-tooltip-pane {
  z-index: 650;
}
.leaflet-popup-pane {
  z-index: 700;
}
.leaflet-map-pane canvas {
  z-index: 100;
}
.leaflet-map-pane svg {
  z-index: 200;
}
.leaflet-top,
.leaflet-bottom {
  position: absolute;
  z-index: 1000;
  pointer-events: none;
}
.leaflet-top {
  top: 0;
}
.leaflet-right {
  right: 0;
}
.leaflet-bottom {
  bottom: 0;
}
.leaflet-left {
  left: 0;
}
.leaflet-right .leaflet-control {
  float: right;
}
.leaflet-top .leaflet-control {
  margin-top: 10px;
}
.leaflet-bottom .leaflet-control {
  margin-bottom: 10px;
}
.leaflet-left .leaflet-control {
  margin-left: 10px;
}
.leaflet-right .leaflet-control {
  margin-right: 10px;
}
.leaflet-fade-anim .leaflet-popup {
  opacity: 0;
  -webkit-transition: opacity 0.2s linear;
  -moz-transition: opacity 0.2s linear;
  transition: opacity 0.2s linear;
}
.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {
  opacity: 1;
}
.leaflet-zoom-animated {
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
}
svg.leaflet-zoom-animated {
  will-change: transform;
}
.leaflet-zoom-anim .leaflet-zoom-animated {
  -webkit-transition: -webkit-transform 0.25s cubic-bezier(0, 0, 0.25, 1);
  -moz-transition: -moz-transform 0.25s cubic-bezier(0, 0, 0.25, 1);
  transition: transform 0.25s cubic-bezier(0, 0, 0.25, 1);
}
.leaflet-zoom-anim .leaflet-tile,
.leaflet-pan-anim .leaflet-tile {
  -webkit-transition: none;
  -moz-transition: none;
  transition: none;
}
.leaflet-popup-pane,
.leaflet-control {
  cursor: auto;
}
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-image-layer,
.leaflet-pane > svg path,
.leaflet-tile-container {
  pointer-events: none;
}
.leaflet-marker-icon.leaflet-interactive,
.leaflet-image-layer.leaflet-interactive,
.leaflet-pane > svg path.leaflet-interactive,
svg.leaflet-image-layer.leaflet-interactive path {
  pointer-events: visiblePainted;
  pointer-events: auto;
}
.leaflet-container {
  background: #ddd;
  outline-offset: 1px;
}
.leaflet-container a {
  color: #0078a8;
}
.leaflet-container {
  font-family:
    Helvetica Neue,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 12px;
  font-size: 0.75rem;
  line-height: 1.5;
}
.leaflet-touch .leaflet-bar a {
  width: 30px;
  height: 30px;
  line-height: 30px;
}
.leaflet-touch .leaflet-bar a:first-child {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.leaflet-touch .leaflet-bar a:last-child {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}
.leaflet-touch .leaflet-control-zoom-in,
.leaflet-touch .leaflet-control-zoom-out {
  font-size: 22px;
}
.leaflet-touch .leaflet-control-layers-toggle {
  width: 44px;
  height: 44px;
}
.leaflet-container .leaflet-control-attribution {
  background: #fff;
  background: #fffc;
  margin: 0;
}
.leaflet-left .leaflet-control-scale {
  margin-left: 5px;
}
.leaflet-bottom .leaflet-control-scale {
  margin-bottom: 5px;
}
.leaflet-touch .leaflet-control-attribution,
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
  box-shadow: none;
}
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-clip: padding-box;
}
.leaflet-container a.leaflet-popup-close-button {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  text-align: center;
  width: 24px;
  height: 24px;
  font:
    16px/24px Tahoma,
    Verdana,
    sans-serif;
  color: #757575;
  text-decoration: none;
  background: transparent;
}
.leaflet-container a.leaflet-popup-close-button:hover,
.leaflet-container a.leaflet-popup-close-button:focus {
  color: #585858;
}
.bcn-map {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-map__inset {
  height: 180px;
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border);
  overflow: hidden;
  background: var(--color-surface-sunken);
}
.bcn-map__source {
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin: 0;
  font-size: 0.8125rem;
}
.bcn-map__source-label {
  color: var(--color-text-tertiary);
}
.bcn-map__source-value {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}
.bcn-map__full {
  height: min(70vh, 620px);
  width: 100%;
  border-radius: var(--radius-200);
  overflow: hidden;
}
.bcn-map__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-400);
  width: 100%;
  flex-wrap: wrap;
}
.bcn-map__legend {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
}
.bcn-map__key {
  width: 14px;
  height: 10px;
  border-radius: 2px;
  flex-shrink: 0;
}
.bcn-map__key--boundary {
  background: color-mix(in srgb, var(--color-secondary) 20%, transparent);
  border: 1px solid var(--color-primary);
}
.bcn-map__key--align {
  height: 0;
  border-top: 2px dashed var(--color-secondary);
  border-radius: 0;
}
.bcn-map__key + .bcn-map__key {
  margin-left: var(--spacing-300);
}
.leaflet-container .leaflet-tooltip {
  padding: 6px 12px;
  font-family: var(--font-sans, inherit);
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold, 600);
  line-height: 1.4;
  color: var(--color-text-primary, #3d3d3d);
  background: var(--color-surface, #ffffff);
  border: 1px solid var(--color-border, #dcdcdc);
  border-radius: var(--radius-100, 4px);
  box-shadow: var(--shadow-300, 0 6px 24px -6px rgba(0, 0, 0, 0.07));
}
.leaflet-container .leaflet-tooltip-top:before {
  border-top-color: var(--color-surface, #ffffff);
}
.leaflet-container .leaflet-tooltip-bottom:before {
  border-bottom-color: var(--color-surface, #ffffff);
}
.leaflet-container .leaflet-tooltip-left:before {
  border-left-color: var(--color-surface, #ffffff);
}
.leaflet-container .leaflet-tooltip-right:before {
  border-right-color: var(--color-surface, #ffffff);
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--shadow-300`: 0 6px 24px -6px rgba(0, 0, 0, .07) _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
