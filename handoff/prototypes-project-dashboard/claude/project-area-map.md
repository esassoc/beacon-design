# Project area map

Project Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/project-dashboard/

![Project area map, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-project-dashboard/claude/project-area-map.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-project-dashboard/claude/project-area-map.phone.png

The project's footprint as an inset map in the rail, expandable to a modal. The review named the current map "not very useful yet, but I think it can be," and diagnosed it as a DATA problem: "we don't even have a footprint geometry."

## Key decisions

- The map shows the boundary polygon and the alignment only. Component markers were tried and cut — they read as noise at this size.
- The boundary's SOURCE renders as a field on the card, not a caption. Today it names the derivation; once projects can upload geometry it names the uploaded file in the same slot.
- The inset is deliberately non-interactive (it reads as a picture of the project); the modal is fully interactive and carries the legend plus an Upload-boundary affordance.
- ONE map component serves all three surfaces — the project boundary, the component index footprints, and a single component’s work areas — and it is bcn-footprint-map. The boundary is an `area`, the tunnel alignment a `line`, and legend keys carry a `shape` so a filled area and a dashed line read as themselves rather than as two identical dots. Do not build a project-specific map: bcn-project-map existed, became a strict subset of this one, and was deleted 2026-08-17.

## Gotchas

- DEFERRED PAST SLICE 1 — this is blocked on geometry, not design. Real boundaries arrive with the spatial-data epic (KMZ / shapefile / GDB upload, feature-server connections), agreed 2026-08-03. The prototype derives a stand-in boundary from the 231 real DCP geotech coordinates already in the repo.
- Leaflet needs setView() BEFORE any layer is added, or _clipPoints throws on a map with no view.
- The modal map must be created lazily on first open (and invalidateSize() on reopen) so it measures a visible container. The same class of bug bites any map built inside a hidden panel, which is why the component watches its own box and re-fits on first real size.
- Geometry crosses the boundary as [lat, lon], NOT GeoJSON [lon, lat]. dcp-geo.json is GeoJSON, so the flip happens once in src/data/project-dashboard.ts (PROJECT_BOUNDARY_RING / PROJECT_ALIGNMENT_PATH). Getting it backwards puts the Delta in the Indian Ocean, silently.
- The review's appetite here was explicit and worth carrying into the spatial epic: "you should be able to upload a boundary just directly… let people draw on the maps or upload shape files."

## Done when

- The rail shows the project footprint with its boundary source named as a field; expanding opens an interactive map with a legend and an upload affordance; no component markers.

## Components

- `bcn-fmap` (spoke) · `src/components/bcn/BcnBoundaryDrawMap.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-card` (hub) · `packages/ecology/src/components/esa-card.astro`
- `esa-dialog` (hub) · `packages/ecology/src/components/esa-dialog.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_6 repeated elements are collapsed in the markup below; the comments say where._

```html
<div
  class="bcn-fmap"
  id="proj-footprint-root"
  data-bcn-fmap=""
  data-prefix="proj-footprint"
  data-variant="inset"
>
  <div class="esa-card">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title typography-title-sm-strong">Project area</h3>
        </div>
      </div>
      <div class="esa-card__actions typography-label-md">
        <span id="proj-footprint-expand"
          ><span
            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              aria-label="Expand project area map"
              title="Expand project area map"
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
                  <!-- …and 2 more like this (<path>) -->
                </svg></span
              >
            </button></span
          ></span
        >
      </div>
    </div>
    <div class="esa-card__body typography-body-md">
      <div class="stack" data-gap="sm">
        <div
          class="bcn-fmap__surface bcn-fmap__surface--inset leaflet-container leaflet-touch leaflet-fade-anim"
          id="proj-footprint-inset"
          role="img"
          aria-label="Project area — 1 footprint"
          style="position: relative"
        >
          <div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(0px, 0px, 0px)">
            <div class="leaflet-pane leaflet-tile-pane">
              <div class="leaflet-layer" style="z-index: 1; opacity: 1">
                <div
                  class="leaflet-tile-container leaflet-zoom-animated"
                  style="z-index: 16; transform: translate3d(-2897px, -511px, 0px) scale(8)"
                ></div>
                <div
                  class="leaflet-tile-container leaflet-zoom-animated"
                  style="z-index: 19; transform: translate3d(0px, 0px, 0px) scale(1)"
                >
                  <img
                    alt=""
                    src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/8/41/98?access_token=undefined"
                    class="leaflet-tile"
                    style="
                      width: 256px;
                      height: 256px;
                      transform: translate3d(287px, -79px, 0px);
                      opacity: 1;
                    "
                  /><img
                    alt=""
                    src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/8/40/98?access_token=undefined"
                    class="leaflet-tile"
                    style="
                      width: 256px;
                      height: 256px;
                      transform: translate3d(31px, -79px, 0px);
                      opacity: 1;
                    "
                  /><!-- …and 3 more like this (<img class="leaflet-tile">) -->
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
                    stroke="#eef5f4"
                    stroke-opacity="0.85"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#eef5f4"
                    fill-opacity="0.18"
                    fill-rule="evenodd"
                    d="M432 158L446 135L462 124L457 101L457 66L454 54L454 43L442 31L442 19L432 19L432 31L444 43L444 54L447 66L447 101L452 124L436 135L422 158z"
                  ></path>
                  <path
                    stroke="#eef5f4"
                    stroke-opacity="0.9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="5 5"
                    fill="none"
                    d="M427 158L441 135L457 124L452 101L452 66L449 54L449 43L437 31L437 19"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="leaflet-pane leaflet-shadow-pane"></div>
            <div class="leaflet-pane leaflet-marker-pane"></div>
            <div class="leaflet-pane leaflet-tooltip-pane"></div>
            <!-- …and 1 more like this (<div class="leaflet-pane leaflet-tile-pane">) -->
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
        <p class="bcn-fmap__source">
          <span class="bcn-fmap__source-label">Boundary source</span
          ><span class="bcn-fmap__source-value">Geotech exploration extent (derived)</span>
        </p>
      </div>
    </div>
  </div>
  <esa-dialog
    id="proj-footprint-dialog"
    heading="Project area"
    size="lg"
    style="--z-modal: 1300; --z-modal-backdrop: 1250"
    ><div class="bcn-fmap__surface bcn-fmap__surface--modal" id="proj-footprint-full"></div>
    <div slot="footer" class="bcn-fmap__modal-foot">
      <ul class="cluster bcn-fmap__legend" data-gap="md">
        <li class="bcn-fmap__legend-row">
          <span
            class="bcn-fmap__key"
            data-shape="area"
            style="--_cmap-key: var(--color-background-brand-muted)"
            aria-hidden="true"
          ></span
          >Project boundary
        </li>
        <li class="bcn-fmap__legend-row">
          <span
            class="bcn-fmap__key"
            data-shape="line"
            style="--_cmap-key: var(--color-background-brand-muted)"
            aria-hidden="true"
          ></span
          >Tunnel alignment
        </li>
      </ul>
      <span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
        slot="modal-actions"
        ><button class="esa-button__native typography-microcopy-xs" type="button">
          <span class="esa-button__label">Upload boundary</span>
        </button></span
      >
    </div></esa-dialog
  >
</div>
```

## Styles

```css
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
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar__tooltip .esa-button__label {
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-composer__send[data-empty] .esa-button__native {
  cursor: not-allowed;
}
.bcn-admin-btn,
.bcn-admin-btn .esa-button {
  display: inline-flex;
}
.bcn-admin-btn .esa-button__native {
  --focus-ring-color: #fff;
  border-radius: var(--radius-full);
  color: #ffffffb8;
  block-size: 22px;
  min-block-size: 0;
  inline-size: 22px;
  min-inline-size: 0;
  padding: 0;
}
.bcn-admin-btn .esa-button__native:hover,
.bcn-admin-btn .esa-button__native:focus-visible {
  color: #fff;
  background: #ffffff24;
}
.bcn-admin-btn .esa-icon {
  block-size: 14px;
  inline-size: 14px;
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.esa-card {
  --_card-bg: var(--card-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_card-border: var(--card-border-color, var(--color-border-default, #cecece));
  --_card-radius: var(--radius-md, 0.5rem);
  --_card-padding: var(--spacing-500, 1.5rem);
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--color-content-default, #202020);
  --_card-header-border: var(--color-border-default-subtle, #d9d9d9);
  --_card-meta-label-color: var(--color-content-default-secondary, #646464);
  --_card-meta-label-size: var(--typography-label-sm-font-size, 0.875rem);
  --_card-meta-value-size: var(--typography-label-md-font-size, 0.9375rem);
  background: var(--_card-bg);
  border: var(--border-width-default, 1px) solid var(--_card-border);
  border-radius: var(--_card-radius);
  display: block;
  overflow: hidden;
}
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-background-brand, #46a758);
  --_card-header-color: var(--color-content-default-knockout, #fcfcfc);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-card__header {
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: var(--border-width-default, 1px) solid var(--_card-header-border);
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  display: flex;
}
.esa-card__header-content {
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
  display: flex;
}
.esa-card__titles {
  gap: var(--spacing-050, 0.125rem);
  flex-direction: column;
  display: flex;
}
.esa-card__title {
  color: inherit;
  margin: 0;
}
.esa-card__actions {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  display: flex;
}
.esa-card__body {
  padding: var(--_card-padding);
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-disclosure .esa-icon {
    transition: none;
  }
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-staging__item .esa-card {
  overflow: visible;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__item[data-receiving] .esa-card {
  border-color: var(--color-background-brand-muted);
  background: color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent);
}
.bcn-ev-targets__item[data-blocked] .esa-card {
  opacity: 0.45;
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-background-utility-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-background-brand);
}
.nav-section__header > .esa-icon:first-child {
  color: var(--bcn-gray-950);
  flex-shrink: 0;
  transition: color 0.15s;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  flex-shrink: 0;
  transition:
    transform 0.15s,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__title,
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.bcn-mod__link .esa-icon {
  color: var(--bcn-content-muted);
}
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  color: var(--_accent-text);
  border-color: var(--_accent);
  background: 0 0;
}
.esa-button--appearance-dashed .esa-button__native {
  border-style: dashed;
}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),
.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled) {
  background: var(--_btn-tint-hover);
}
.esa-button--appearance-outline.esa-button--active .esa-button__native,
.esa-button--appearance-dashed.esa-button--active .esa-button__native {
  background: var(--_btn-tint-active);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken, #f0f0f0) 45%,
    var(--color-background-elevation-raised, #fcfcfc)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-default-strong, #bbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border-default, #cecece);
}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),
.esa-button--variant-ghost.esa-button--active .esa-button__native {
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-button--variant-chrome .esa-button__native {
  color: inherit;
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),
.esa-button--variant-chrome.esa-button--active .esa-button__native,
.esa-button--variant-chrome.esa-button--current .esa-button__native {
  background: var(--button-chrome-bg-hover, color-mix(in srgb, currentColor 14%, transparent));
}
.esa-button--variant-chrome .esa-button__native:focus-visible {
  outline-color: currentColor;
}
.esa-button__native {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
  text-decoration: none;
  display: inline-flex;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
}
summary.esa-button {
  cursor: pointer;
  list-style: none;
}
summary.esa-button::-webkit-details-marker {
  display: none;
}
summary.esa-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--_btn-radius);
}
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
}
.esa-button__label {
  white-space: nowrap;
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
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.bcn-fmap__surface {
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-sunken);
  width: 100%;
  overflow: hidden;
}
.bcn-fmap__surface--inset {
  height: 180px;
}
.bcn-fmap__surface--modal {
  height: min(70vh, 620px);
}
.bcn-fmap__surface .leaflet-container {
  font-family: var(--typography-font-family-sans, inherit);
  background: var(--color-background-elevation-sunken);
}
.bcn-fmap__surface--inset .leaflet-container {
  cursor: default;
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
.bcn-fmap__modal-foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-400);
  flex-wrap: wrap;
  width: 100%;
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
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
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--gap` | `1.5rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
| `--typography-title-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-sm-strong-font-size` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | semantic |
| `--typography-title-sm-strong-font-weight` | `550` | semantic |
| `--typography-title-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-sm-strong-line-height` | `1.6` | semantic |
