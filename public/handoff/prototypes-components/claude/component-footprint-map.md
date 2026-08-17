# Component footprint map

The second view, asked for explicitly on the design call: where the components ARE. Components overlap on it, and that is correct — they are areas over areas over time in the same place, and color separates them the way species habitat layers do ("if we color code them, that's what the species habitat layers look like, it's fine").

## Key decisions
- Each shape is a FOOTPRINT derived from the component's WORK AREAS — the convex hull of its work-area points, buffered outward. It is labelled as a derivation on the surface, not presented as a boundary.
- Fills are translucent (18%) with a solid edge, and hovering brings one shape forward at 36%. Sixteen overlapping footprints have to stay legible where they stack, and the outline is what keeps each shape readable through the pile.
- Footprints are colored by lifecycle status from the same STATUS_META the grid and summary read, with a legend keyed to it.
- Basemap is grayscale. House rule: containers stay neutral, color lives in the data.

## Gotchas
- COMPONENT HAS NO STORED GEOMETRY. There is no geography column on dbo.Component, and BCN-1584 (which adds one, with shapefile upload) is Ready-for-Dev with zero commits. Work areas are the only real geometry a component owns today. When BCN-1584 lands, an uploaded boundary REPLACES the hull and this derivation is deleted rather than extended.
- An earlier pass drew one DOT per component at an invented coordinate. That was worse than nothing — a point implies a location the data does not have, and nobody could tell what the dots meant (cut at review 2026-08-14). Do not ship a component location the data model cannot produce.
- Do not hull the work areas without buffering first. Geotech borings sit in a LINE along the alignment, so their bare convex hull collapses to a sliver a few pixels wide that reads as a rendering artefact. Buffer each point into a disc, then hull the cloud: a line of sites becomes a lozenge and a single site becomes a circle.
- A Leaflet map built inside a hidden container measures 0x0, so fitBounds resolves against nothing and the map opens zoomed to the middle of the ocean. This map is built inside a hidden view panel. The component watches its own box with a ResizeObserver and re-measures + re-fits the first time it has real size — do not make the caller remember to poke it on reveal.

## Done when
- Every component draws one filled footprint colored by its status; overlapping shapes remain individually distinguishable and hover isolates one; the legend matches the grid's status colors; switching to the map from the grid shows a correctly fitted view with no grey box and no ocean; the surface states that footprints are derived from work areas.

## Markup
```html
<div
  class="bcn-cmap"
  id="cmp-index-map-root"
  data-bcn-cmap=""
  data-prefix="cmp-index-map"
  data-variant="full"
>
  <div class="stack" data-gap="sm">
    <div
      class="bcn-cmap__surface bcn-cmap__surface--full leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
      id="cmp-index-map-full"
      role="region"
      aria-label="Component footprints — 16 footprints"
      tabindex="0"
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
              style="z-index: 19; transform: translate3d(0px, 0px, 0px) scale(1)"
            >
              <img
                alt=""
                src="https://b.basemaps.cartocdn.com/light_all/14/2663/6314.png"
                class="leaflet-tile leaflet-tile-loaded"
                style="
                  width: 256px;
                  height: 256px;
                  transform: translate3d(-126px, -139px, 0px);
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
            width="0"
            height="0"
            viewBox="0 0 0 0"
            style="transform: translate3d(0.470238px, -0.264696px, 0px) scale(1)"
          >
            <g>
              <path
                class="leaflet-interactive"
                stroke="#f59e0b"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#f59e0b"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
              ></path>
              <path
                class="leaflet-interactive"
                stroke="#f59e0b"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#f59e0b"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
              ></path>
              <path
                class="leaflet-interactive"
                stroke="#656565"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#656565"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
              ></path>
              <path
                class="leaflet-interactive"
                stroke="#f59e0b"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#f59e0b"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
              ></path>
              <path
                class="leaflet-interactive"
                stroke="#2e7571"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#2e7571"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
              ></path>
              <path
                class="leaflet-interactive"
                stroke="#bdbdbd"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#bdbdbd"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
              ></path>
              <path
                class="leaflet-interactive"
                stroke="#bdbdbd"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#bdbdbd"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
              ></path>
              <path
                class="leaflet-interactive"
                stroke="#f59e0b"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#f59e0b"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
              ></path>
              <path
                class="leaflet-interactive"
                stroke="#f59e0b"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#f59e0b"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
              ></path>
              <path
                class="leaflet-interactive"
                stroke="#f59e0b"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#f59e0b"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
              ></path>
              <path
                class="leaflet-interactive"
                stroke="#2e7571"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#2e7571"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
              ></path>
              <path
                class="leaflet-interactive"
                stroke="#656565"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#656565"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
              ></path>
              <path
                class="leaflet-interactive"
                stroke="#bdbdbd"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#bdbdbd"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
              ></path>
              <path
                class="leaflet-interactive"
                stroke="#bdbdbd"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#bdbdbd"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
              ></path>
              <path
                class="leaflet-interactive"
                stroke="#2e7571"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#2e7571"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
              ></path>
              <path
                class="leaflet-interactive"
                stroke="#f59e0b"
                stroke-opacity="0.85"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="#f59e0b"
                fill-opacity="0.18"
                fill-rule="evenodd"
                d="M0 0"
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
          style="transform: translate3d(681854px, 1.61652e6px, 0px) scale(8192)"
        ></div>
      </div>
      <div class="leaflet-control-container">
        <div class="leaflet-top leaflet-left">
          <div class="leaflet-control-zoom leaflet-bar leaflet-control">
            <a
              class="leaflet-control-zoom-in"
              href="#"
              title="Zoom in"
              role="button"
              aria-label="Zoom in"
              aria-disabled="false"
              ><span aria-hidden="true">+</span></a
            ><a
              class="leaflet-control-zoom-out"
              href="#"
              title="Zoom out"
              role="button"
              aria-label="Zoom out"
              aria-disabled="false"
              ><span aria-hidden="true">−</span></a
            >
          </div>
        </div>
        <div class="leaflet-top leaflet-right"></div>
        <div class="leaflet-bottom leaflet-left"></div>
        <div class="leaflet-bottom leaflet-right">
          <div class="leaflet-control-attribution leaflet-control">
            <a
              href="https://leafletjs.com"
              title="A JavaScript library for interactive maps"
              ><svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                class="leaflet-attribution-flag"
              >
                <path fill="#4C7BE1" d="M0 0h12v4H0z"></path>
                <path fill="#FFD500" d="M0 4h12v3H0z"></path>
                <path fill="#E0BC00" d="M0 7h12v1H0z"></path>
              </svg>
              Leaflet</a
            >
            <span aria-hidden="true">|</span> © OpenStreetMap © CARTO
          </div>
        </div>
      </div>
    </div>
    <div class="bcn-cmap__foot">
      <ul class="cluster bcn-cmap__legend" data-gap="md">
        <li class="bcn-cmap__legend-row">
          <span
            class="bcn-cmap__key"
            style="--_cmap-key: var(--bcn-status-not-started)"
            aria-hidden="true"
          ></span>
          Not started
        </li>
        <li class="bcn-cmap__legend-row">
          <span
            class="bcn-cmap__key"
            style="--_cmap-key: var(--color-warning)"
            aria-hidden="true"
          ></span>
          In progress
        </li>
        <li class="bcn-cmap__legend-row">
          <span
            class="bcn-cmap__key"
            style="--_cmap-key: var(--bcn-status-on-hold)"
            aria-hidden="true"
          ></span>
          On hold
        </li>
        <li class="bcn-cmap__legend-row">
          <span
            class="bcn-cmap__key"
            style="--_cmap-key: var(--color-success)"
            aria-hidden="true"
          ></span>
          Complete
        </li>
      </ul>
      <p class="bcn-cmap__source">
        <span class="bcn-cmap__source-label">Geometry source</span>
        <span class="bcn-cmap__source-value">Work areas (80 across 16 components)</span>
      </p>
    </div>
  </div>
</div>
```

## Styles
```css
.stack {
  --gap: var(--spacing-400, 1rem);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
}
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
.leaflet-control {
  position: relative;
  z-index: 800;
  pointer-events: visiblePainted;
  pointer-events: auto;
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
.leaflet-control {
  float: left;
  clear: both;
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
.leaflet-interactive {
  cursor: pointer;
}
.leaflet-grab {
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;
}
.leaflet-crosshair,
.leaflet-crosshair .leaflet-interactive {
  cursor: crosshair;
}
.leaflet-popup-pane,
.leaflet-control {
  cursor: auto;
}
.leaflet-dragging .leaflet-grab,
.leaflet-dragging .leaflet-grab .leaflet-interactive,
.leaflet-dragging .leaflet-marker-draggable {
  cursor: move;
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: grabbing;
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
.leaflet-bar {
  box-shadow: 0 1px 5px #000000a6;
  border-radius: 4px;
}
.leaflet-bar a {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  width: 26px;
  height: 26px;
  line-height: 26px;
  display: block;
  text-align: center;
  text-decoration: none;
  color: #000;
}
.leaflet-bar a,
.leaflet-control-layers-toggle {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: block;
}
.leaflet-bar a:hover,
.leaflet-bar a:focus {
  background-color: #f4f4f4;
}
.leaflet-bar a:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.leaflet-bar a:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom: none;
}
.leaflet-bar a.leaflet-disabled {
  cursor: default;
  background-color: #f4f4f4;
  color: #bbb;
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
.leaflet-control-zoom-in,
.leaflet-control-zoom-out {
  font:
    700 18px Lucida Console,
    Monaco,
    monospace;
  text-indent: 1px;
}
.leaflet-touch .leaflet-control-zoom-in,
.leaflet-touch .leaflet-control-zoom-out {
  font-size: 22px;
}
.leaflet-control-layers {
  box-shadow: 0 1px 5px #0006;
  background: #fff;
  border-radius: 5px;
}
.leaflet-control-layers-toggle {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);
  width: 36px;
  height: 36px;
}
.leaflet-retina .leaflet-control-layers-toggle {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);
  background-size: 26px 26px;
}
.leaflet-touch .leaflet-control-layers-toggle {
  width: 44px;
  height: 44px;
}
.leaflet-control-layers .leaflet-control-layers-list,
.leaflet-control-layers-expanded .leaflet-control-layers-toggle {
  display: none;
}
.leaflet-control-layers-expanded .leaflet-control-layers-list {
  display: block;
  position: relative;
}
.leaflet-control-layers-expanded {
  padding: 6px 10px 6px 6px;
  color: #333;
  background: #fff;
}
.leaflet-control-layers-scrollbar {
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 5px;
}
.leaflet-control-layers-selector {
  margin-top: 2px;
  position: relative;
  top: 1px;
}
.leaflet-control-layers label {
  display: block;
  font-size: 13px;
  font-size: 1.08333em;
}
.leaflet-control-layers-separator {
  height: 0;
  border-top: 1px solid #ddd;
  margin: 5px -10px 5px -6px;
}
.leaflet-container .leaflet-control-attribution {
  background: #fff;
  background: #fffc;
  margin: 0;
}
.leaflet-control-attribution,
.leaflet-control-scale-line {
  padding: 0 5px;
  color: #333;
  line-height: 1.4;
}
.leaflet-control-attribution a {
  text-decoration: none;
}
.leaflet-control-attribution a:hover,
.leaflet-control-attribution a:focus {
  text-decoration: underline;
}
.leaflet-attribution-flag {
  display: inline !important;
  vertical-align: baseline !important;
  width: 1em;
  height: 0.6669em;
}
.leaflet-left .leaflet-control-scale {
  margin-left: 5px;
}
.leaflet-bottom .leaflet-control-scale {
  margin-bottom: 5px;
}
.leaflet-control-scale-line {
  border: 2px solid #777;
  border-top: none;
  line-height: 1.1;
  padding: 2px 5px 1px;
  white-space: nowrap;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: #fffc;
  text-shadow: 1px 1px #fff;
}
.leaflet-control-scale-line:not(:first-child) {
  border-top: 2px solid #777;
  border-bottom: none;
  margin-top: -2px;
}
.leaflet-control-scale-line:not(:first-child):not(:last-child) {
  border-bottom: 2px solid #777;
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
.leaflet-oldie .leaflet-control-zoom,
.leaflet-oldie .leaflet-control-layers,
.leaflet-oldie .leaflet-popup-content-wrapper,
.leaflet-oldie .leaflet-popup-tip {
  border: 1px solid #999;
}
.leaflet-tooltip.leaflet-interactive {
  cursor: pointer;
  pointer-events: auto;
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
.bcn-cmap__surface {
  width: 100%;
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border);
  overflow: hidden;
  background: var(--color-surface-sunken);
}
.bcn-cmap__surface--inset {
  height: 180px;
}
.bcn-cmap__surface--full {
  height: min(64vh, 560px);
}
.bcn-cmap__surface--modal {
  height: min(70vh, 620px);
}
.bcn-cmap__surface .leaflet-container {
  font-family: var(--font-sans, inherit);
  background: var(--color-surface-sunken);
}
.bcn-cmap__surface--inset .leaflet-container {
  cursor: default;
}
.bcn-cmap__surface .leaflet-interactive {
  cursor: pointer;
}
.bcn-cmap__source {
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin: 0;
  font-size: 0.8125rem;
}
.bcn-cmap__source-label {
  color: var(--color-text-tertiary);
}
.bcn-cmap__source-value {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}
.bcn-cmap__foot {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--spacing-400);
  flex-wrap: wrap;
}
.bcn-cmap__legend {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
}
.bcn-cmap__foot .bcn-cmap__legend {
  width: auto;
}
.bcn-cmap__legend-row {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
}
.bcn-cmap__key {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full, 999px);
  flex-shrink: 0;
  background: var(--_cmap-key, var(--color-border, #dcdcdc));
  box-shadow: 0 0 0 1px var(--color-surface, #ffffff);
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--gap`: 1.5rem _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--shadow-300`: 0 6px 24px -6px rgba(0, 0, 0, .07) _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
