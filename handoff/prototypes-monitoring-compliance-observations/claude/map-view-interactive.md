# Map view (interactive)

The same filtered observation set plotted geographically — BcnObservationMap at full size with interactive={true}, the working counterpart to the dashboard panel's static inset. It answers "is this clustered in one area", which the grid cannot show.

## Key decisions
- One component serves both surfaces. The dashboard inset passes interactive={false}; this passes true. Two maps that drift apart is exactly the duplication this avoided.
- The map is deliberately DUMB: it owns the basemap, pins, tooltips, and fit-to-bounds, and nothing else. A pin click dispatches `bcn-observation-pin-click` on the container and stops there — the HOST decides whether that opens the detail panel, selects a row, or navigates.
- Pins are coloured by severity from the same SEVERITY_META source the dashboard donut reads, so a severity is one colour across the whole product.

## Gotchas
- MULTI-INSTANCE CONTRACT: an Astro <script> is hoisted and bundled ONCE per page, not re-run per instance, so props are NOT visible to it as a closure. Every prop is threaded through the DOM — data-* attributes plus a sibling <script type="application/json"> payload — and the module iterates every [data-bcn-obsmap] on the page, building an independent map per container. Break that and a second map on one page silently takes the first one's data.
- The map pane starts hidden. Leaflet cannot measure a display:none container, so the map must be sized or invalidated when the pane is first revealed, or it renders as a grey box.
- Re-filtering while the map is visible must re-pin and re-fit; a stale fit leaves you zoomed to observations that are no longer in the set.

## Done when
- Switching View to Map replaces the grid with a full-size interactive map pinned to the filtered rows.
- Pin colours match the severity colours used by the dashboard donut and the grid status chips.
- Changing a filter while the map is open re-pins and re-fits to the new set.

## Markup
```html
<div id="ov-map-pane">
  <div
    class="bcn-obsmap leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
    id="bcn-obsmap-observations-full"
    data-bcn-obsmap=""
    data-map-id="observations-full"
    data-interactive="true"
    style="height: min(70vh, 620px); position: relative"
    role="region"
    aria-label="Observation map — no observations to show"
    data-bcn-obsmap-ready="true"
    tabindex="0"
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
              src="https://b.basemaps.cartocdn.com/light_all/14/2759/6470.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(168px, 231px, 0px);
                opacity: 1;
              "
            /><img
              alt=""
              src="https://c.basemaps.cartocdn.com/light_all/14/2760/6470.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(424px, 231px, 0px);
                opacity: 1;
              "
            /><img
              alt=""
              src="https://a.basemaps.cartocdn.com/light_all/14/2759/6469.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(168px, -25px, 0px);
                opacity: 1;
              "
            /><img
              alt=""
              src="https://b.basemaps.cartocdn.com/light_all/14/2760/6469.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(424px, -25px, 0px);
                opacity: 1;
              "
            /><img
              alt=""
              src="https://c.basemaps.cartocdn.com/light_all/14/2759/6471.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(168px, 487px, 0px);
                opacity: 0.775;
              "
            /><img
              alt=""
              src="https://d.basemaps.cartocdn.com/light_all/14/2760/6471.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(424px, 487px, 0px);
                opacity: 1;
              "
            /><img
              alt=""
              src="https://a.basemaps.cartocdn.com/light_all/14/2758/6470.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(-88px, 231px, 0px);
                opacity: 1;
              "
            /><img
              alt=""
              src="https://d.basemaps.cartocdn.com/light_all/14/2761/6470.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(680px, 231px, 0px);
                opacity: 1;
              "
            /><img
              alt=""
              src="https://d.basemaps.cartocdn.com/light_all/14/2758/6469.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(-88px, -25px, 0px);
                opacity: 1;
              "
            /><img
              alt=""
              src="https://c.basemaps.cartocdn.com/light_all/14/2761/6469.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(680px, -25px, 0px);
                opacity: 1;
              "
            /><img
              alt=""
              src="https://b.basemaps.cartocdn.com/light_all/14/2758/6471.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(-88px, 487px, 0px);
                opacity: 1;
              "
            /><img
              alt=""
              src="https://a.basemaps.cartocdn.com/light_all/14/2761/6471.png"
              class="leaflet-tile leaflet-tile-loaded"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(680px, 487px, 0px);
                opacity: 0.77;
              "
            />
          </div>
        </div>
      </div>
      <div class="leaflet-pane leaflet-overlay-pane">
        <svg
          pointer-events="none"
          class="leaflet-zoom-animated"
          width="1121"
          height="602"
          viewBox="-93 -50 1121 602"
          style="transform: translate3d(-93.0734px, -49.9875px, 0px) scale(1)"
        >
          <g>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#e5484d"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M495,445a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#e5484d"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M424,356a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#e5484d"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M273,174a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#f59e0b"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M456,57a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#f59e0b"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M350,133a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#f59e0b"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M521,238a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#f59e0b"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M595,261a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#f59e0b"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M554,278a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#f59e0b"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M647,394a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#f59e0b"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M350,133a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#2e7571"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M456,57a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#2e7571"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M456,57a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#2e7571"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M424,356a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#2e7571"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M554,278a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#2e7571"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M273,174a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#2e7571"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M595,261a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
        style="transform: translate3d(706603px, 1.65634e6px, 0px) scale(8192)"
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
  <script type="application/json" data-bcn-obsmap-data="observations-full">
    []
  </script>
  <script
    type="module"
    src="/beacon-design/_astro/BcnObservationMap.astro_astro_type_script_index_0_lang.CaGBcxyZ.js"
  ></script>
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
.bcn-obsmap {
  width: 100%;
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border);
  overflow: hidden;
  background: var(--color-surface-sunken);
}
.bcn-obsmap .leaflet-container {
  font-family: var(--font-sans, inherit);
  background: var(--color-surface-sunken);
}
.bcn-obsmap[data-interactive="false"] .leaflet-container {
  cursor: default;
}
.bcn-obsmap .leaflet-interactive {
  cursor: pointer;
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--shadow-300`: 0 6px 24px -6px rgba(0, 0, 0, .07) _(primitive)_
