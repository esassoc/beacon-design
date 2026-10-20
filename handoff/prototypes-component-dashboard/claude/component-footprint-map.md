# Component footprint map

Where this component actually is: an inset map of its work areas, colored by clearance status, expanding to an interactive modal with a legend.

## Key decisions
- The map draws WORK AREAS, not a component boundary, because Component has no geometry column and the boundary epic (BCN-1582) has not started. Work-area coordinates are real, already returned by the work-areas endpoint, and currently discarded by every surface — Site Clearance collapses them to a centroid dot. Drawing them is exactly what BCN-1583 slice 1 proposes, with no schema change.
- The boundary source renders as a FIELD, not a caption, so it can name an uploaded file once BCN-1584 lands.
- Basemap is grayscale — containers stay neutral, color lives in the data.
- Every DOM id is namespaced by an idPrefix, so the same component serves the rail inset here and the full map on the component index.

## Gotchas
- Leaflet: call setView() BEFORE adding layers, and create the modal map lazily on first open, then invalidateSize() on every reopen — otherwise it renders as a grey box. Both gotchas are inherited from the project map.
- The predecessor component (bcn-project-map) hardcodes singleton DOM ids and cannot be instantiated twice. Do not reproduce that.

## Done when
- Work areas plot at their real coordinates colored by status; the inset expands to an interactive modal with a legend; reopening the modal renders the map, not a grey box.

## Markup
```html
<div
  class="bcn-fmap"
  id="cmp-footprint-root"
  data-bcn-fmap=""
  data-prefix="cmp-footprint"
  data-variant="inset"
>
  <div class="esa-card">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title typography-title-sm-strong">Component footprint</h3>
        </div>
      </div>
      <div class="esa-card__actions typography-label-md">
        <span id="cmp-footprint-expand"
          ><span
            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              aria-label="Expand component footprint map"
              title="Expand component footprint map"
            >
              <span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"></path>
                  <path d="M3 16.2V21m0 0h4.8M3 21l6-6"></path>
                  <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"></path>
                  <path d="M3 7.8V3m0 0h4.8M3 3l6 6"></path></svg
              ></span></button></span
        ></span>
      </div>
    </div>
    <div class="esa-card__body typography-body-md">
      <div class="stack" data-gap="sm">
        <div
          class="bcn-fmap__surface bcn-fmap__surface--inset leaflet-container leaflet-touch leaflet-fade-anim"
          id="cmp-footprint-inset"
          role="img"
          aria-label="Component footprint — 35 locations"
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
                    src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/10/166/394?access_token=undefined"
                    class="leaflet-tile"
                    style="
                      width: 256px;
                      height: 256px;
                      transform: translate3d(296px, -38px, 0px);
                      opacity: 1;
                    "
                  /><img
                    alt=""
                    src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/10/165/394?access_token=undefined"
                    class="leaflet-tile"
                    style="
                      width: 256px;
                      height: 256px;
                      transform: translate3d(40px, -38px, 0px);
                      opacity: 1;
                    "
                  /><img
                    alt=""
                    src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/10/167/394?access_token=undefined"
                    class="leaflet-tile"
                    style="
                      width: 256px;
                      height: 256px;
                      transform: translate3d(552px, -38px, 0px);
                      opacity: 1;
                    "
                  /><img
                    alt=""
                    src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/10/164/394?access_token=undefined"
                    class="leaflet-tile"
                    style="
                      width: 256px;
                      height: 256px;
                      transform: translate3d(-216px, -38px, 0px);
                      opacity: 1;
                    "
                  /><img
                    alt=""
                    src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/10/168/394?access_token=undefined"
                    class="leaflet-tile"
                    style="
                      width: 256px;
                      height: 256px;
                      transform: translate3d(808px, -38px, 0px);
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
                style="transform: translate3d(-88.5369px, -17.4084px, 0px) scale(1)"
              >
                <g>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#228be6"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M442,38a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#228be6"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M440,106a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#f59e0b"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M442,159a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#f59e0b"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M442,159a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#2e7571"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M439,30a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#f59e0b"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M442,57a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#228be6"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M442,61a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bdbdbd"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M440,34a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#2e7571"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M443,42a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#228be6"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M443,48a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bdbdbd"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M443,50a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#2e7571"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M443,57a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#f59e0b"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M442,65a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#2e7571"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M442,68a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#228be6"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M440,73a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#228be6"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M441,78a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#f59e0b"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M440,95a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#2e7571"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M440,98a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#2e7571"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M440,103a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#2e7571"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M434,12a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#2e7571"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M434,16a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#2e7571"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M439,121a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bdbdbd"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M440,151a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#f59e0b"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M438,111a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#f59e0b"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M439,116a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#228be6"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M439,125a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#2e7571"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M439,128a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#2e7571"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M439,133a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#f59e0b"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M439,136a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#2e7571"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M440,143a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#2e7571"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M440,149a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#2e7571"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M441,157a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#bdbdbd"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M442,167a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#f59e0b"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M433,108a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                  ></path>
                  <path
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#f59e0b"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M438,125a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
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
              style="transform: translate3d(42641.9px, 100991px, 0px) scale(512)"
            ></div>
          </div>
          <div class="leaflet-control-container">
            <div class="leaflet-top leaflet-left"></div>
            <div class="leaflet-top leaflet-right"></div>
            <div class="leaflet-bottom leaflet-left"></div>
            <div class="leaflet-bottom leaflet-right"></div>
          </div>
        </div>
        <p class="bcn-fmap__source">
          <span class="bcn-fmap__source-label">Geometry source</span
          ><span class="bcn-fmap__source-value">Work area locations (35)</span>
        </p>
      </div>
    </div>
  </div>
  <esa-dialog
    id="cmp-footprint-dialog"
    heading="Component footprint"
    size="lg"
    style="--z-modal: 1300; --z-modal-backdrop: 1250"
    ><div
      class="bcn-fmap__surface bcn-fmap__surface--modal"
      id="cmp-footprint-full"
    ></div>
    <div slot="footer" class="bcn-fmap__modal-foot">
      <ul class="cluster bcn-fmap__legend" data-gap="md">
        <li class="bcn-fmap__legend-row">
          <span
            class="bcn-fmap__key"
            data-shape="dot"
            style="--_cmap-key: var(--color-background-utility-success)"
            aria-hidden="true"
          ></span
          >Cleared
        </li>
        <li class="bcn-fmap__legend-row">
          <span
            class="bcn-fmap__key"
            data-shape="dot"
            style="--_cmap-key: var(--color-background-utility-info)"
            aria-hidden="true"
          ></span
          >Scheduled
        </li>
        <li class="bcn-fmap__legend-row">
          <span
            class="bcn-fmap__key"
            data-shape="dot"
            style="--_cmap-key: var(--bcn-status-in-progress)"
            aria-hidden="true"
          ></span
          >In progress
        </li>
        <li class="bcn-fmap__legend-row">
          <span
            class="bcn-fmap__key"
            data-shape="dot"
            style="--_cmap-key: var(--bcn-status-not-started)"
            aria-hidden="true"
          ></span
          >Not started
        </li>
      </ul>
    </div></esa-dialog
  >
</div>
```

## Styles
```css
/* Type comes from .typography-body-md on the element, leading included — the
       role leads at normal, which is what a one-word label beside a 22px track
       wants. This carried a line-height override back when body-md was relaxed
       (1.8) and the row outgrew the track; the role moved, so the override went. */

    /* FORCED COLORS. The worst case in the kit: on/off is --_bg-on vs --_bg-off
       (both force-adjusted to the same Canvas) and the thumb's ONLY separation
       from the track is its background plus --elevation-1, which is deleted. The
       control becomes an empty pill with an invisible thumb, and the position
       channel is unreadable because the thing being positioned cannot be seen.
       There is no "On"/"Off" text to fall back on — 'label' is the field name and
       is identical in both states.

       Two channels are restored: the thumb FILL (Canvas when off, Highlight when
       on) and its POSITION, which already worked.

       The 'left' re-declaration is not optional. ':host([checked]) .thumb' above
       computes '--_track-w - --_thumb - 2px', which assumes --_track-w is the
       track's padding-box width. Adding a border under box-sizing: border-box
       shrinks that box by 2px while the calc still uses the full value, so the
       checked thumb would overshoot the right edge at every one of the four
       sizes. -4px absorbs it. */
    @media (forced-colors: active) {
      .track {
        box-sizing: border-box;
        border: 1px solid CanvasText;
        background: Canvas;
      }
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.bcn-search-trigger .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-help-bar .esa-icon-button{color:var(--bcn-helpbar-fg-muted);--icon-button-bg-hover:var(--bcn-helpbar-hover-bg)}
.bcn-help-bar .esa-icon-button:hover,.bcn-help-bar .esa-icon-button:focus-visible{color:var(--bcn-helpbar-fg)}
.bcn-gd__label .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-gd-row .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.esa-card{--_card-bg:var(--card-bg,var(--color-background-elevation-raised,#fcfcfc));--_card-border:var(--card-border-color,var(--color-border-default,#cecece));--_card-radius:var(--radius-md,.5rem);--_card-padding:var(--spacing-500,1.5rem);--_card-header-bg:var(--card-header-bg,transparent);--_card-header-color:var(--color-content-default,#202020);--_card-header-border:var(--color-border-default-subtle,#d9d9d9);--_card-meta-label-color:var(--color-content-default-secondary,#646464);--_card-meta-label-size:var(--typography-label-sm-font-size,.875rem);--_card-meta-value-size:var(--typography-label-md-font-size,.9375rem);background:var(--_card-bg);border:var(--border-width-default,1px) solid var(--_card-border);border-radius:var(--_card-radius);display:block;overflow:hidden}
.esa-card--outlined{--_card-border:var(--color-border-default,#cecece)}
.esa-card--elevated{--_card-border:transparent;box-shadow:var(--elevation-2,0 2px 12px 0 #0000000a)}
.esa-card--filled{--_card-bg:var(--color-background-elevation-sunken,#f0f0f0);--_card-border:transparent}
.esa-card--header-primary .esa-card__header{--_card-header-bg:var(--color-background-brand,#46a758);--_card-header-color:var(--color-content-default-knockout,#fcfcfc)}
.esa-card--header-muted .esa-card__header{--_card-header-bg:var(--color-background-elevation-sunken,#f0f0f0)}
.esa-card--padding-none{--_card-padding:0}
.esa-card--padding-compact{--_card-padding:var(--spacing-300,.75rem)}
.esa-card--padding-spacious{--_card-padding:var(--spacing-700,3rem)}
.esa-card__header{padding:var(--spacing-400,1rem) var(--_card-padding);background:var(--_card-header-bg);color:var(--_card-header-color);border-bottom:var(--border-width-default,1px) solid var(--_card-header-border);justify-content:space-between;align-items:center;min-height:56px;display:flex}
.esa-card__header-content{align-items:center;gap:var(--spacing-300,.75rem);display:flex}
.esa-card__titles{gap:var(--spacing-050,.125rem);flex-direction:column;display:flex}
.esa-card__title{color:inherit;margin:0}
.esa-card__subtitle{color:var(--color-content-default-secondary,#646464);margin:0}
.esa-card--header-primary .esa-card__subtitle{color:var(--color-content-on-brand,#fffc)}
.esa-card__meta{gap:var(--spacing-100,.25rem) var(--spacing-500,1.5rem);margin:var(--spacing-050,.125rem) 0 0;flex-wrap:wrap;display:flex}
.esa-card__meta-pair{align-items:baseline;gap:var(--spacing-100,.25rem);min-width:0;display:flex}
.esa-card__meta dt{font-size:var(--_card-meta-label-size);font-weight:var(--font-weight-medium,500);color:var(--_card-meta-label-color)}
.esa-card__meta dd{font-size:var(--_card-meta-value-size);color:inherit;margin:0}
.esa-card--header-primary .esa-card__meta dt{color:#fffc}
.esa-card__icon{color:inherit;flex-shrink:0}
.esa-card__actions{align-items:center;gap:var(--spacing-200,.5rem);display:flex}
.esa-card__body{padding:var(--_card-padding)}
.esa-card__footer{padding:var(--spacing-300,.75rem) var(--_card-padding);border-top:var(--border-width-default,1px) solid var(--_card-header-border);background:var(--color-background-elevation-sunken,#f0f0f0)}
.bcn-disclosure .esa-icon{transition:transform .15s}
.bcn-disclosure[aria-expanded=false] .esa-icon{transform:rotate(-90deg)}
.bcn-ev-staging__title .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-ev-staging__item .esa-card{overflow:visible}
.bcn-ev-targets__title .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-ev-targets__item[data-receiving] .esa-card{border-color:var(--color-background-brand-muted);background:color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent)}
.bcn-ev-targets__item[data-blocked] .esa-card{opacity:.45}
.bcn-ev-targets__item .esa-card{overflow:visible}
.topbar__right .esa-icon-button{color:var(--color-content-default-secondary)}
.user-panel__item .esa-icon{color:var(--bcn-gray-500)}
.user-panel__item--danger .esa-icon{color:var(--color-background-utility-danger)}
.project-switcher__trigger>.esa-icon:first-child{color:var(--bcn-gray-500);flex-shrink:0}
.nav-section__header:hover .esa-icon,.nav-section--active .nav-section__header,.nav-section--active .nav-section__header .esa-icon{color:var(--color-background-brand)}
.nav-section__header>.esa-icon:first-child{color:var(--bcn-gray-950);flex-shrink:0;transition:color .15s}
.nav-section__header>.esa-icon:last-child{color:var(--bcn-gray-400);flex-shrink:0;transition:transform .15s,opacity .2s ease-in-out}
.nav-section--collapsed .nav-section__header>.esa-icon:last-child{transform:rotate(-90deg)}
.side-nav.collapsed .nav-section__title,.side-nav.collapsed .nav-section__header>.esa-icon:last-child{display:none}
.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;top:0;left:0}
.leaflet-container{overflow:hidden}
.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}
.leaflet-tile::selection{background:0 0}
.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}
.leaflet-safari .leaflet-tile-container{-webkit-transform-origin:0 0;width:1600px;height:1600px}
.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}
.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{width:auto;padding:0;max-width:none!important;max-height:none!important}
.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}
.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}
.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}
.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}
.leaflet-container{-webkit-tap-highlight-color:transparent}
.leaflet-container a{-webkit-tap-highlight-color:#33b5e566}
.leaflet-tile{filter:inherit;visibility:hidden}
.leaflet-tile-loaded{visibility:inherit}
.leaflet-overlay-pane svg{-moz-user-select:none}
.leaflet-pane{z-index:400}
.leaflet-tile-pane{z-index:200}
.leaflet-overlay-pane{z-index:400}
.leaflet-shadow-pane{z-index:500}
.leaflet-marker-pane{z-index:600}
.leaflet-tooltip-pane{z-index:650}
.leaflet-popup-pane{z-index:700}
.leaflet-map-pane canvas{z-index:100}
.leaflet-map-pane svg{z-index:200}
.leaflet-top,.leaflet-bottom{z-index:1000;pointer-events:none;position:absolute}
.leaflet-top{top:0}
.leaflet-right{right:0}
.leaflet-bottom{bottom:0}
.leaflet-left{left:0}
.leaflet-right .leaflet-control{float:right}
.leaflet-top .leaflet-control{margin-top:10px}
.leaflet-bottom .leaflet-control{margin-bottom:10px}
.leaflet-left .leaflet-control{margin-left:10px}
.leaflet-right .leaflet-control{margin-right:10px}
.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}
.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}
.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}
svg.leaflet-zoom-animated{will-change:transform}
.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}
.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}
.leaflet-popup-pane,.leaflet-control{cursor:auto}
.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}
.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}
.leaflet-container{outline-offset:1px;background:#ddd}
.leaflet-container a{color:#0078a8}
.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:.75rem;line-height:1.5}
.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}
.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}
.leaflet-touch .leaflet-bar a:last-child{border-bottom-right-radius:2px;border-bottom-left-radius:2px}
.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}
.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}
.leaflet-container .leaflet-control-attribution{background:#fffc;margin:0}
.leaflet-left .leaflet-control-scale{margin-left:5px}
.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}
.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}
.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{background-clip:padding-box;border:2px solid #0003}
.leaflet-container a.leaflet-popup-close-button{text-align:center;color:#757575;background:0 0;border:none;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;text-decoration:none;position:absolute;top:0;right:0}
.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}
.bcn-mod__link .esa-icon{color:var(--bcn-content-muted)}
.bcn-sw__head .esa-icon{color:var(--color-content-default-secondary)}
.esa-button{--_btn-pad-y:var(--spacing-300,.75rem);--_btn-padding-x:var(--spacing-300,.75rem);--_btn-radius:var(--button-radius-md,.5rem);--_accent:var(--color-background-brand,#46a758);--_accent-hover:var(--color-background-brand-hover,#3e9b4f);--_on:var(--color-content-default-knockout,#fcfcfc);--_accent-text:var(--_accent);--_btn-tint-hover:color-mix(in srgb, var(--_accent) 8%, transparent);--_btn-tint-active:color-mix(in srgb, var(--_accent) 14%, transparent);display:inline-block}
.esa-button--xs{--_btn-pad-y:var(--spacing-200,.5rem);--_btn-padding-x:var(--spacing-200,.5rem);--_btn-radius:var(--button-radius-xs,4px)}
.esa-button--sm{--_btn-pad-y:var(--spacing-250,.625rem);--_btn-padding-x:var(--spacing-250,.625rem);--_btn-radius:var(--button-radius-sm,4px)}
.esa-button--lg{--_btn-pad-y:var(--spacing-400,1rem);--_btn-padding-x:var(--spacing-400,1rem);--_btn-radius:var(--button-radius-lg,8px)}
.esa-button--variant-primary{--_accent-text:var(--color-content-brand)}
.esa-button--variant-secondary{--_accent:var(--color-background-brand-muted);--_accent-hover:var(--color-background-brand-muted-hover);--_on:var(--color-content-on-brand-muted,var(--color-content-default));--_accent-text:var(--color-content-brand);--_accent-border:var(--color-border-default-strong,#bbb)}
.esa-button--variant-danger{--_accent:var(--color-background-utility-danger);--_accent-hover:var(--color-background-utility-danger-hover);--_accent-text:var(--color-content-utility-danger)}
.esa-button--variant-success{--_accent:var(--color-background-utility-success);--_accent-hover:var(--color-background-utility-success-hover);--_on:var(--color-content-on-utility-success);--_accent-text:var(--color-content-utility-success)}
.esa-button--variant-warning{--_accent:var(--color-background-utility-warning);--_accent-hover:var(--color-background-utility-warning-hover);--_on:var(--button-on-warning,var(--color-content-on-utility-warning,#4f3422));--_accent-text:var(--color-content-utility-warning)}
.esa-button--variant-info{--_accent:var(--color-background-utility-info);--_accent-hover:var(--color-background-utility-info-hover);--_accent-text:var(--color-content-utility-info)}
.esa-button--variant-ai{--_accent:var(--color-background-ai);--_accent-hover:var(--color-background-ai-hover);--_accent-text:var(--color-content-ai)}
.esa-button--appearance-fill .esa-button__native{background:var(--_accent);color:var(--_on);border-color:var(--_accent-border,transparent)}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),.esa-button--appearance-fill.esa-button--active .esa-button__native{background:var(--_accent-hover)}
.esa-button--appearance-outline .esa-button__native,.esa-button--appearance-dashed .esa-button__native{color:var(--_accent-text);border-color:var(--_accent);background:0 0}
.esa-button--appearance-dashed .esa-button__native{border-style:dashed}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled){background:var(--_btn-tint-hover)}
.esa-button--appearance-outline.esa-button--active .esa-button__native,.esa-button--appearance-dashed.esa-button--active .esa-button__native{background:var(--_btn-tint-active)}
.esa-button--appearance-soft .esa-button__native{background:color-mix(in srgb, var(--color-background-elevation-sunken,#f0f0f0) 45%, var(--color-background-elevation-raised,#fcfcfc));color:var(--_accent-text);border-color:var(--color-border-default-strong,#bbb)}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),.esa-button--appearance-soft.esa-button--active .esa-button__native{background:var(--_accent);color:var(--_on);border-color:var(--_accent)}
.esa-button--variant-ghost .esa-button__native{color:var(--color-content-default,#202020);background:0 0;border-color:#0000}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native{border-color:var(--color-border-default,#cecece)}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),.esa-button--variant-ghost.esa-button--active .esa-button__native{background:var(--color-background-elevation-sunken,#f0f0f0)}
.esa-button--variant-chrome .esa-button__native{color:inherit;background:0 0;border-color:#0000}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),.esa-button--variant-chrome.esa-button--active .esa-button__native,.esa-button--variant-chrome.esa-button--current .esa-button__native{background:var(--button-chrome-bg-hover,color-mix(in srgb, currentColor 14%, transparent))}
.esa-button--variant-chrome .esa-button__native:focus-visible{outline-color:currentColor}
.esa-button__native{justify-content:center;align-items:center;gap:var(--spacing-200,8px);width:100%;padding-block:var(--_btn-pad-y);padding-inline:var(--_btn-padding-x);border:var(--border-width-default,1px) solid transparent;border-radius:var(--_btn-radius);cursor:pointer;transition:background var(--transition-fast,.15s ease), border-color var(--transition-fast,.15s ease);-webkit-appearance:none;appearance:none;text-decoration:none;display:inline-flex}
.esa-button__native:focus-visible{outline:var(--focus-ring-width,2px) solid var(--focus-ring-color,#3e9b4f);outline-offset:var(--focus-ring-offset,2px)}
.esa-button--disabled{opacity:.5;cursor:not-allowed;pointer-events:none}
.esa-button--icon-only .esa-button__native{padding-inline:var(--_btn-pad-y);aspect-ratio:1}
summary.esa-button{cursor:pointer;list-style:none}
summary.esa-button::-webkit-details-marker{display:none}
summary.esa-button:focus-visible{outline:var(--focus-ring-width,2px) solid var(--focus-ring-color,#3e9b4f);outline-offset:var(--focus-ring-offset,2px);border-radius:var(--_btn-radius)}
summary.esa-button--variant-chrome:focus-visible{outline-color:currentColor}
.esa-button__label{white-space:nowrap}
.esa-button__label--hidden{clip-path:inset(50%);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}
.esa-button__spinner{width:1em;height:1em;animation:esa-button-spin var(--animation-spin,.75s linear infinite);border:2px solid;border-right-color:#0000;border-radius:50%;display:inline-block}
.typography-body-md{font-family:var(--typography-body-md-font-family);font-size:var(--typography-body-md-font-size);font-weight:var(--typography-body-md-font-weight);line-height:var(--typography-body-md-line-height);letter-spacing:var(--typography-body-md-letter-spacing)}
.typography-label-md{font-family:var(--typography-label-md-font-family);font-size:var(--typography-label-md-font-size);font-weight:var(--typography-label-md-font-weight);line-height:var(--typography-label-md-line-height);letter-spacing:var(--typography-label-md-letter-spacing)}
.typography-label-md-strong{font-family:var(--typography-label-md-strong-font-family);font-size:var(--typography-label-md-strong-font-size);font-weight:var(--typography-label-md-strong-font-weight);line-height:var(--typography-label-md-strong-line-height);letter-spacing:var(--typography-label-md-strong-letter-spacing)}
.typography-microcopy-xs{font-family:var(--typography-microcopy-xs-font-family);font-size:var(--typography-microcopy-xs-font-size);font-weight:var(--typography-microcopy-xs-font-weight);line-height:var(--typography-microcopy-xs-line-height);letter-spacing:var(--typography-microcopy-xs-letter-spacing)}
.typography-microcopy-xs-subtle{font-family:var(--typography-microcopy-xs-subtle-font-family);font-size:var(--typography-microcopy-xs-subtle-font-size);font-weight:var(--typography-microcopy-xs-subtle-font-weight);line-height:var(--typography-microcopy-xs-subtle-line-height);letter-spacing:var(--typography-microcopy-xs-subtle-letter-spacing)}
.typography-microcopy-xs-strong{font-family:var(--typography-microcopy-xs-strong-font-family);font-size:var(--typography-microcopy-xs-strong-font-size);font-weight:var(--typography-microcopy-xs-strong-font-weight);line-height:var(--typography-microcopy-xs-strong-line-height);letter-spacing:var(--typography-microcopy-xs-strong-letter-spacing)}
.typography-title-sm-strong{font-family:var(--typography-title-sm-strong-font-family);font-size:var(--typography-title-sm-strong-font-size);font-weight:var(--typography-title-sm-strong-font-weight);line-height:var(--typography-title-sm-strong-line-height);letter-spacing:var(--typography-title-sm-strong-letter-spacing)}
.leaflet-container .leaflet-tooltip{font-family:var(--typography-font-family-sans,inherit);font-size:.9375rem;font-weight:var(--typography-font-weight-semibold,600);color:var(--color-content-default,#3d3d3d);background:var(--color-background-elevation-raised,#fff);border:1px solid var(--color-border-default,#dcdcdc);border-radius:var(--radius-100,4px);box-shadow:var(--elevation-4,0 6px 24px -6px #00000012);padding:6px 12px;line-height:1.4}
.leaflet-container .leaflet-tooltip-top:before{border-top-color:var(--color-background-elevation-raised,#fff)}
.leaflet-container .leaflet-tooltip-bottom:before{border-bottom-color:var(--color-background-elevation-raised,#fff)}
.leaflet-container .leaflet-tooltip-left:before{border-left-color:var(--color-background-elevation-raised,#fff)}
.leaflet-container .leaflet-tooltip-right:before{border-right-color:var(--color-background-elevation-raised,#fff)}
.esa-icon{--_icon-size:var(--icon-size-md,20px);width:var(--_icon-size);height:var(--_icon-size);color:inherit;justify-content:center;align-items:center;display:inline-flex}
.esa-icon--xs{--_icon-size:var(--icon-size-xs,14px)}
.esa-icon--sm{--_icon-size:var(--icon-size-sm,16px)}
.esa-icon--md{--_icon-size:var(--icon-size-md,20px)}
.esa-icon--lg{--_icon-size:var(--icon-size-lg,24px)}
.esa-icon--xl{--_icon-size:var(--icon-size-xl,28px)}
.esa-icon svg{width:var(--_icon-size);height:var(--_icon-size);display:block}
.bcn-fmap__surface{border-radius:var(--radius-200);border:1px solid var(--color-border-default);background:var(--color-background-elevation-sunken);width:100%;overflow:hidden}
.bcn-fmap__surface--inset{height:180px}
.bcn-fmap__surface--full{height:min(64vh,560px)}
.bcn-fmap__surface--modal{height:min(70vh,620px)}
.bcn-fmap__surface .leaflet-container{font-family:var(--typography-font-family-sans,inherit);background:var(--color-background-elevation-sunken)}
.bcn-fmap__surface--inset .leaflet-container{cursor:default}
.bcn-fmap__surface .leaflet-interactive{cursor:pointer}
.bcn-fmap__source{flex-direction:column;gap:1px;margin:0;font-size:.8125rem;display:flex}
.bcn-fmap__source-label{color:var(--color-content-default-tertiary)}
.bcn-fmap__source-value{font-weight:var(--typography-font-weight-medium);color:var(--color-content-default-secondary)}
.bcn-fmap__foot{justify-content:space-between;align-items:flex-end;gap:var(--spacing-400);flex-wrap:wrap;display:flex}
.bcn-fmap__modal-foot{justify-content:space-between;align-items:center;gap:var(--spacing-400);flex-wrap:wrap;width:100%;display:flex}
.bcn-fmap__legend{width:100%;font-size:var(--font-size-150);color:var(--color-content-default-secondary);margin:0;padding:0;list-style:none}
.bcn-fmap__foot .bcn-fmap__legend,.bcn-fmap__modal-foot .bcn-fmap__legend{width:auto}
.bcn-fmap__legend-row{align-items:center;gap:var(--spacing-100);display:inline-flex}
.bcn-fmap__key{background:var(--_cmap-key,var(--color-border-default,#dcdcdc));flex-shrink:0}
.bcn-fmap__key[data-shape=dot]{border-radius:var(--radius-full,999px);width:10px;height:10px;box-shadow:0 0 0 1px var(--color-background-elevation-raised,#fff)}
.bcn-fmap__key[data-shape=area]{background:color-mix(in srgb, var(--_cmap-key,#dcdcdc) 18%, transparent);border:1px solid var(--_cmap-key,#dcdcdc);border-radius:2px;width:14px;height:10px}
.bcn-fmap__key[data-shape=line]{border-top:2px dashed var(--_cmap-key,#dcdcdc);background:0 0;width:16px;height:0}
.breadcrumbs__items .esa-icon{color:var(--bcn-gray-400)}
.page-layout__title h1 .esa-icon{color:var(--page-title-icon-color,var(--bcn-gray-1000));flex-shrink:0}
.stack{--gap:var(--spacing-400,1rem);gap:var(--gap);flex-direction:column;display:flex}
.stack[data-split]>[data-split]{margin-block-end:auto}
.cluster{--gap:var(--spacing-300,.75rem);--align:center;--justify:flex-start;gap:var(--gap);align-items:var(--align);justify-content:var(--justify);flex-wrap:wrap;display:flex}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-content-muted`: #7c7c7c _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #dcdcdc _(component)_
- `--card-header-bg`: transparent _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand`: #fcfcfc _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--elevation-4`: 0 6px 24px -6px #00000012 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-weight-medium`: 500 _(component)_
- `--gap`: 1.5rem _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-font-weight`: 500 _(semantic)_
- `--typography-label-md-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-subtle-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
- `--typography-title-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-sm-strong-font-size`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(semantic)_
- `--typography-title-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-title-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-sm-strong-line-height`: 1.6 _(semantic)_
