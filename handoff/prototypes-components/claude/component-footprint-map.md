# Component footprint map

Components (index) · source prototype: https://esassoc.github.io/beacon-design/prototypes/components/

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

## Components

- `bcn-fmap` (spoke) · `src/components/bcn/BcnBoundaryDrawMap.astro`

## Markup

_17 repeated elements are collapsed in the markup below; the comments say where._

```html
<div
  class="bcn-fmap"
  id="cmp-index-map-root"
  data-bcn-fmap=""
  data-prefix="cmp-index-map"
  data-variant="full"
>
  <div class="stack" data-gap="sm">
    <div
      class="bcn-fmap__surface bcn-fmap__surface--full leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
      id="cmp-index-map-full"
      role="region"
      aria-label="Component footprints — 16 footprints"
      tabindex="0"
      style="position: relative"
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
                src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/14/2663/6314?access_token=undefined"
                class="leaflet-tile"
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
    <div class="bcn-fmap__foot">
      <ul class="cluster bcn-fmap__legend" data-gap="md">
        <li class="bcn-fmap__legend-row">
          <span
            class="bcn-fmap__key"
            data-shape="area"
            style="--_cmap-key: var(--bcn-status-not-started)"
            aria-hidden="true"
          ></span
          >Not started
        </li>
        <li class="bcn-fmap__legend-row">
          <span
            class="bcn-fmap__key"
            data-shape="area"
            style="--_cmap-key: var(--color-background-utility-warning)"
            aria-hidden="true"
          ></span
          >In progress
        </li>
        <!-- …and 2 more like this (<li class="bcn-fmap__legend-row">) -->
      </ul>
      <p class="bcn-fmap__source">
        <span class="bcn-fmap__source-label">Geometry source</span
        ><span class="bcn-fmap__source-value">Work areas (111 across 16 components)</span>
      </p>
    </div>
  </div>
</div>
```

## Styles

```css
.bcn-fmap__surface {
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-sunken);
  width: 100%;
  overflow: hidden;
}
.bcn-fmap__surface--full {
  height: min(64vh, 560px);
}
.bcn-fmap__surface .leaflet-container {
  font-family: var(--typography-font-family-sans, inherit);
  background: var(--color-background-elevation-sunken);
}
.bcn-fmap__surface .leaflet-interactive {
  cursor: pointer;
}
.bcn-fmap__source {
  flex-direction: column;
  gap: 1px;
  margin: 0;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-fmap__source-label {
  color: var(--color-content-default-tertiary);
}
.bcn-fmap__source-value {
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
}
.bcn-fmap__foot {
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-fmap__legend {
  width: 100%;
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-fmap__foot .bcn-fmap__legend,
.bcn-fmap__modal-foot .bcn-fmap__legend {
  width: auto;
}
.bcn-fmap__legend-row {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-fmap__key {
  background: var(--_cmap-key, var(--color-border-default, #dcdcdc));
  flex-shrink: 0;
}
.bcn-fmap__key[data-shape="dot"] {
  border-radius: var(--radius-full, 999px);
  width: 10px;
  height: 10px;
  box-shadow: 0 0 0 1px var(--color-background-elevation-raised, #fff);
}
.bcn-fmap__key[data-shape="area"] {
  background: color-mix(in srgb, var(--_cmap-key, #dcdcdc) 18%, transparent);
  border: 1px solid var(--_cmap-key, #dcdcdc);
  border-radius: 2px;
  width: 14px;
  height: 10px;
}
.bcn-fmap__key[data-shape="line"] {
  border-top: 2px dashed var(--_cmap-key, #dcdcdc);
  background: 0 0;
  width: 16px;
  height: 0;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--gap` | `1.5rem` | component |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
