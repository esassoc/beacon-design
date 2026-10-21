# Map view (interactive)

Compliance Dashboard — Observations · source prototype: https://esassoc.github.io/beacon-design/prototypes/monitoring/compliance-observations/

![Map view (interactive), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-compliance-observations/claude/map-view-interactive.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-compliance-observations/claude/map-view-interactive.phone.png

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

## Components

- `bcn-obsmap` (spoke) · `src/components/bcn/BcnDmrDetails.astro`

## Markup

_29 repeated elements are collapsed in the markup below; the comments say where._

```html
<div id="ov-map-pane">
  <div
    class="bcn-obsmap leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
    id="bcn-obsmap-observations-full"
    data-bcn-obsmap=""
    data-map-id="observations-full"
    data-interactive="true"
    style="height: min(70vh, 620px)"
    role="region"
    aria-label="Observation map — no observations to show"
    data-bcn-obsmap-ready="true"
    tabindex="0"
  >
    <div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(0px, 0px, 0px)">
      <div class="leaflet-pane leaflet-tile-pane">
        <div class="leaflet-layer" style="z-index: 1; opacity: 1">
          <div
            class="leaflet-tile-container leaflet-zoom-animated"
            style="z-index: 19; transform: translate3d(0px, 0px, 0px) scale(1)"
          >
            <img
              alt=""
              src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/14/2759/6469?access_token=undefined"
              class="leaflet-tile"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(168px, 33px, 0px);
                opacity: 0.895;
              "
            /><img
              alt=""
              src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/14/2760/6469?access_token=undefined"
              class="leaflet-tile"
              style="
                width: 256px;
                height: 256px;
                transform: translate3d(424px, 33px, 0px);
                opacity: 1;
              "
            /><!-- …and 14 more like this (<img class="leaflet-tile">) -->
          </div>
        </div>
      </div>
      <div class="leaflet-pane leaflet-overlay-pane">
        <svg
          pointer-events="none"
          class="leaflet-zoom-animated"
          width="1121"
          height="742"
          viewBox="-93 -62 1121 742"
          style="transform: translate3d(-93.0734px, -61.5875px, 0px) scale(1)"
        >
          <g>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#ce2c31"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M495,503a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <path
              class="leaflet-interactive"
              stroke="#fcfcfc"
              stroke-opacity="1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="#ce2c31"
              fill-opacity="0.9"
              fill-rule="evenodd"
              d="M424,414a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
            ></path>
            <!-- …and 14 more like this (<path class="[object SVGAnimatedString]">) -->
          </g>
        </svg>
      </div>
      <div class="leaflet-pane leaflet-shadow-pane"></div>
      <div class="leaflet-pane leaflet-marker-pane"></div>
      <div class="leaflet-pane leaflet-tooltip-pane"></div>
      <!-- …and 1 more like this (<div class="leaflet-pane leaflet-tile-pane">) -->
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
          <a href="https://leafletjs.com" title="A JavaScript library for interactive maps"
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
          <span aria-hidden="true">|</span> ©
          <a href="https://www.mapbox.com/about/maps/">Mapbox</a> ©
          <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
        </div>
      </div>
    </div>
  </div>
  <!-- script type="application/json" removed (2 bytes) --><!-- script type="module" removed (0 bytes) -->
</div>
```

## Styles

```css
.bcn-obsmap {
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-sunken);
  z-index: 0;
  isolation: isolate;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.bcn-obsmap .leaflet-container {
  font-family: var(--typography-font-family-sans, inherit);
  background: var(--color-background-elevation-sunken);
}
.bcn-obsmap[data-interactive="false"] .leaflet-container {
  cursor: default;
}
.bcn-obsmap .leaflet-interactive {
  cursor: pointer;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--radius-200` | `.5rem` | primitive |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
