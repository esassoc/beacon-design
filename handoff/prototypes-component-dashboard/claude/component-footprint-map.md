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
          <h3 class="esa-card__title">Component footprint</h3>
        </div>
      </div>
      <div class="esa-card__actions">
        <span id="cmp-footprint-expand">
          <button
            class="esa-icon-button esa-icon-button--sm"
            type="button"
            aria-label="Expand component footprint map"
            title="Expand component footprint map"
          >
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
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
                <path d="M3 7.8V3m0 0h4.8M3 3l6 6"></path>
              </svg>
            </span>
          </button>
        </span>
      </div>
    </div>
    <div class="esa-card__body">
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
                    src="https://a.basemaps.cartocdn.com/light_all/10/166/394.png"
                    class="leaflet-tile leaflet-tile-loaded"
                    style="
                      width: 256px;
                      height: 256px;
                      transform: translate3d(296px, -38px, 0px);
                      opacity: 1;
                    "
                  /><img
                    alt=""
                    src="https://d.basemaps.cartocdn.com/light_all/10/165/394.png"
                    class="leaflet-tile leaflet-tile-loaded"
                    style="
                      width: 256px;
                      height: 256px;
                      transform: translate3d(40px, -38px, 0px);
                      opacity: 1;
                    "
                  /><img
                    alt=""
                    src="https://b.basemaps.cartocdn.com/light_all/10/167/394.png"
                    class="leaflet-tile leaflet-tile-loaded"
                    style="
                      width: 256px;
                      height: 256px;
                      transform: translate3d(552px, -38px, 0px);
                      opacity: 1;
                    "
                  /><img
                    alt=""
                    src="https://c.basemaps.cartocdn.com/light_all/10/164/394.png"
                    class="leaflet-tile leaflet-tile-loaded"
                    style="
                      width: 256px;
                      height: 256px;
                      transform: translate3d(-216px, -38px, 0px);
                      opacity: 1;
                    "
                  /><img
                    alt=""
                    src="https://c.basemaps.cartocdn.com/light_all/10/168/394.png"
                    class="leaflet-tile leaflet-tile-loaded"
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
          <span class="bcn-fmap__source-label">Geometry source</span>
          <span class="bcn-fmap__source-value">Work area locations (35)</span>
        </p>
      </div>
    </div>
  </div>
  <esa-dialog
    id="cmp-footprint-dialog"
    heading="Component footprint"
    size="lg"
    style="--z-modal: 1300; --z-modal-backdrop: 1250"
  >
    <div class="bcn-fmap__surface bcn-fmap__surface--modal" id="cmp-footprint-full"></div>
    <div slot="footer" class="bcn-fmap__modal-foot">
      <ul class="cluster bcn-fmap__legend" data-gap="md">
        <li class="bcn-fmap__legend-row">
          <span
            class="bcn-fmap__key"
            data-shape="dot"
            style="--_cmap-key: var(--color-success)"
            aria-hidden="true"
          ></span>
          Cleared
        </li>
        <li class="bcn-fmap__legend-row">
          <span
            class="bcn-fmap__key"
            data-shape="dot"
            style="--_cmap-key: var(--color-info)"
            aria-hidden="true"
          ></span>
          Scheduled
        </li>
        <li class="bcn-fmap__legend-row">
          <span
            class="bcn-fmap__key"
            data-shape="dot"
            style="--_cmap-key: var(--bcn-status-in-progress)"
            aria-hidden="true"
          ></span>
          In progress
        </li>
        <li class="bcn-fmap__legend-row">
          <span
            class="bcn-fmap__key"
            data-shape="dot"
            style="--_cmap-key: var(--bcn-status-not-started)"
            aria-hidden="true"
          ></span>
          Not started
        </li>
      </ul>
    </div>
  </esa-dialog>
</div>
```

## Styles
```css
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s ease;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-ev-staging__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-staging__item .esa-card {
  overflow: visible;
}
.bcn-ev-targets__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-targets__item[data-receiving] .esa-card {
  border-color: var(--color-secondary);
  background: color-mix(in srgb, var(--color-secondary) 5%, transparent);
}
.bcn-ev-targets__item[data-blocked] .esa-card {
  opacity: 0.45;
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.nav-section__header > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-950);
  transition: color 0.15s ease;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  transition:
    transform 0.15s ease,
    opacity 0.2s ease-in-out;
  flex-shrink: 0;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.bcn-mod__link .esa-icon {
  color: var(--color-text-muted);
}
.bcn-sw__head .esa-icon {
  color: var(--color-text-secondary);
}
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
.esa-card {
  --_card-bg: var(--card-bg, var(--color-surface, #ffffff));
  --_card-border: var(--card-border-color, var(--color-border, #e5e5e5));
  --_card-radius: var(--card-radius, var(--radius-300, 0.5rem));
  --_card-padding: var(--card-padding, var(--spacing-500, 1.5rem));
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--card-header-color, var(--color-text-primary, #171717));
  --_card-header-border: var(
    --card-header-border-color,
    var(--color-border-light, #efefef)
  );
  display: block;
  background: var(--_card-bg);
  border: 1px solid var(--_card-border);
  border-radius: var(--_card-radius);
  overflow: hidden;
}
.esa-card--outlined {
  --_card-border: var(--color-border, #e5e5e5);
}
.esa-card--elevated {
  --_card-border: transparent;
  box-shadow: var(--shadow-100, 0 2px 12px 0 rgba(0, 0, 0, 0.04));
}
.esa-card--filled {
  --_card-bg: var(--color-surface-sunken, #efefef);
  --_card-border: transparent;
}
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-primary, #43608a);
  --_card-header-color: var(--color-text-inverse, #ffffff);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-surface-sunken, #efefef);
}
.esa-card--padding-none {
  --_card-padding: 0;
}
.esa-card--padding-compact {
  --_card-padding: var(--spacing-300, 0.75rem);
}
.esa-card--padding-spacious {
  --_card-padding: var(--spacing-700, 3rem);
}
.esa-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: 1px solid var(--_card-header-border);
  min-height: 56px;
}
.esa-card__header-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
}
.esa-card__titles {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-050, 0.125rem);
}
.esa-card__title {
  font-size: var(--type-size-250, 1.0625rem);
  font-weight: 600;
  margin: 0;
  color: inherit;
  font-family: var(--font-sans, "DM Sans", sans-serif);
}
.esa-card__subtitle {
  font-size: var(--type-size-150, 0.8125rem);
  color: var(--color-text-secondary, #525252);
  margin: 0;
}
.esa-card--header-primary .esa-card__subtitle {
  color: #fffc;
}
.esa-card__icon {
  color: inherit;
  flex-shrink: 0;
}
.esa-card__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
}
.esa-card__body {
  padding: var(--_card-padding);
}
.esa-card__footer {
  padding: var(--spacing-300, 0.75rem) var(--_card-padding);
  border-top: 1px solid var(--_card-header-border);
  background: var(--card-footer-bg, var(--color-surface-sunken, #efefef));
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
.esa-icon {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, var(--icon-size-large, 24px));
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  --_ib-bg-hover: var(
    --icon-button-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_ib-size);
  height: var(--_ib-size);
  padding: 0;
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-icon-button--xs {
  --_ib-size: var(--form-height-xs, 28px);
}
.esa-icon-button--sm {
  --_ib-size: var(--form-height-sm, 32px);
}
.esa-icon-button--lg {
  --_ib-size: var(--form-height-lg, 48px);
}
.esa-icon-button:hover {
  background: var(--_ib-bg-hover);
}
.esa-icon-button:focus-visible {
  outline: var(--focus-ring-width) solid currentColor;
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-fmap__surface {
  width: 100%;
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border);
  overflow: hidden;
  background: var(--color-surface-sunken);
}
.bcn-fmap__surface--inset {
  height: 180px;
}
.bcn-fmap__surface--full {
  height: min(64vh, 560px);
}
.bcn-fmap__surface--modal {
  height: min(70vh, 620px);
}
.bcn-fmap__surface .leaflet-container {
  font-family: var(--font-sans, inherit);
  background: var(--color-surface-sunken);
}
.bcn-fmap__surface--inset .leaflet-container {
  cursor: default;
}
.bcn-fmap__surface .leaflet-interactive {
  cursor: pointer;
}
.bcn-fmap__source {
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin: 0;
  font-size: 0.8125rem;
}
.bcn-fmap__source-label {
  color: var(--color-text-tertiary);
}
.bcn-fmap__source-value {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}
.bcn-fmap__foot {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--spacing-400);
  flex-wrap: wrap;
}
.bcn-fmap__modal-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-400);
  width: 100%;
  flex-wrap: wrap;
}
.bcn-fmap__legend {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
}
.bcn-fmap__foot .bcn-fmap__legend,
.bcn-fmap__modal-foot .bcn-fmap__legend {
  width: auto;
}
.bcn-fmap__legend-row {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
}
.bcn-fmap__key {
  flex-shrink: 0;
  background: var(--_cmap-key, var(--color-border, #dcdcdc));
}
.bcn-fmap__key[data-shape="dot"] {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full, 999px);
  box-shadow: 0 0 0 1px var(--color-surface, #ffffff);
}
.bcn-fmap__key[data-shape="area"] {
  width: 14px;
  height: 10px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--_cmap-key, #dcdcdc) 18%, transparent);
  border: 1px solid var(--_cmap-key, #dcdcdc);
}
.bcn-fmap__key[data-shape="line"] {
  width: 16px;
  height: 0;
  background: none;
  border-top: 2px dashed var(--_cmap-key, #dcdcdc);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #dcdcdc _(component)_
- `--card-footer-bg`: #efefef _(component)_
- `--card-header-bg`: transparent _(component)_
- `--card-header-border-color`: #efefef _(component)_
- `--card-header-color`: #3d3d3d _(component)_
- `--card-padding`: 1.5rem _(component)_
- `--card-radius`: .5rem _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-muted`: #7c7c7c _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--focus-ring-offset`: 2px _(primitive)_
- `--focus-ring-width`: 2px _(primitive)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-lg`: 44px _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-height-xs`: 24px _(component)_
- `--gap`: 1.5rem _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-large`: 24px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--shadow-100`: 0 2px 12px 0 rgba(0, 0, 0, .04) _(primitive)_
- `--shadow-300`: 0 6px 24px -6px rgba(0, 0, 0, .07) _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-250`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(primitive)_
