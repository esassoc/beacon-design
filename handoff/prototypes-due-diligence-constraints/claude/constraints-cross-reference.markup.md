# Constraints Cross-Reference: markup

```html
<div class="modern-layout__body">
  <!-- ─── side-nav-modern ─── -->
  <nav class="side-nav" id="side-nav">
    <div class="sidebar-header">
      <a href="#home" class="site-logo" aria-label="Beacon home"
        ><img src="/beacon-design/beacon-icon.svg" alt="Beacon" class="site-logo__img"
      /></a>
    </div>
    <!-- project-switcher (ported from project-switcher.component) -->
    <div class="project-switcher-container">
      <button type="button" class="project-switcher__trigger">
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
            <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"></path>
            <path d="m18 15 4-4"></path>
            <path
              d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"
            ></path></svg></span
        ><span class="project-switcher__name">Almond</span
        ><span class="esa-icon esa-icon--sm" aria-hidden="true"
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
            <path d="m6 9 6 6 6-6"></path></svg
        ></span>
      </button>
    </div>
    <div class="main-nav">
      <div class="nav-section">
        <a
          href="/beacon-design/prototypes/due-diligence-siting"
          class="nav-section__header nav-section__header--link"
          ><span class="esa-icon esa-icon--sm" aria-hidden="true"
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
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path></svg></span
          ><span class="nav-section__title">Site Screening</span></a
        >
      </div>
      <div class="nav-section nav-section--active">
        <button type="button" class="nav-section__header" aria-expanded="true">
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
              <rect width="7" height="9" x="3" y="3" rx="1"></rect>
              <rect width="7" height="5" x="14" y="3" rx="1"></rect>
              <!-- …and 2 more like this (<rect>) -->
            </svg></span
          ><span class="nav-section__title">Due Diligence</span
          ><span class="esa-icon esa-icon--sm" aria-hidden="true"
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
              <path d="m6 9 6 6 6-6"></path></svg
          ></span>
        </button>
        <ul class="nav-section__items">
          <li class="nav-item">
            <a href="/beacon-design/prototypes/due-diligence-overview" class="nav-sublink"
              >Overview</a
            >
          </li>
          <li class="nav-item">
            <a href="/beacon-design/prototypes/due-diligence-boundary" class="nav-sublink"
              >Project Boundary</a
            >
          </li>
          <!-- …and 3 more like this (<li class="nav-item">) -->
        </ul>
      </div>
      <hr class="nav-divider" aria-hidden="true" />
      <div class="nav-section">
        <button type="button" class="nav-section__header" aria-expanded="true">
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
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <!-- …and 3 more like this (<path>) -->
            </svg></span
          ><span class="nav-section__title">Permitting</span
          ><span class="esa-icon esa-icon--sm" aria-hidden="true"
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
              <path d="m6 9 6 6 6-6"></path></svg
          ></span>
        </button>
        <ul class="nav-section__items">
          <li class="nav-item">
            <a href="/beacon-design/prototypes/permitting-dashboard" class="nav-sublink"
              >Permit Dashboard</a
            >
          </li>
          <li class="nav-item">
            <a href="/beacon-design/prototypes/permitting-details" class="nav-sublink"
              >Permit Details</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- content -->
  <div class="modern-layout__content">
    <!-- bcn-lego-checked: esa-breadcrumbs exists, but this whole layout is a deliberate
     VERBATIM port of prod's page-layout + breadcrumbs (see the file header) so that
     ported Angular views match the live app; the lego has a different anatomy (no
     home glyph, its own spacing) and swapping it would restyle the breadcrumb row on
     all 39 pages at once. That migration is its own decision, not a side effect of
     moving where the row sits. Only the POSITION and an end slot changed here. -->
    <div class="page-layout">
      <section class="page-layout__breadcrumbs">
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <div class="breadcrumbs__items">
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
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path
                  d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                ></path></svg></span
            ><a class="breadcrumb-item" href="/beacon-design/prototypes/due-diligence-siting"
              >Due Diligence</a
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span
            ><a class="breadcrumb-item" href="/beacon-design/prototypes/due-diligence-overview"
              >Almond</a
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span
            ><span class="breadcrumb-item" aria-current="page">Constraints</span>
          </div>
        </nav>
      </section>
      <div class="page-layout__container">
        <section class="page-layout__title">
          <div class="page-layout__title-main">
            <h1>
              <span class="esa-icon esa-icon--lg" aria-hidden="true"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                  <path d="M3 12A9 3 0 0 0 21 12"></path></svg></span
              >Constraints Cross-Reference
            </h1>
            <div>
              <span
                class="bcn-status-chip"
                data-status="phase"
                style="--_chip: var(--st-phase, #4a90d9)"
                ><span class="bcn-status-chip__dot"></span
                ><span class="bcn-status-chip__label">Due Diligence</span></span
              ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
            </div>
          </div>
          <div class="page-layout__utilities">
            <div>
              <span id="cx-rerun"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
                  ><button class="esa-button__native typography-microcopy-md" type="button">
                    <span class="esa-icon esa-icon--md" aria-hidden="true"
                      ><svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        focusable="false"
                      >
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                        <path d="M3 3v5h5"></path></svg></span
                    ><span class="esa-button__label">Re-run</span>
                  </button></span
                ></span
              ><a href="/beacon-design/prototypes/due-diligence-report"
                ><span
                  class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
                  ><button class="esa-button__native typography-microcopy-md" type="button">
                    <span class="esa-icon esa-icon--md" aria-hidden="true"
                      ><svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        focusable="false"
                      >
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <!-- …and 3 more like this (<path>) -->
                      </svg></span
                    ><span class="esa-button__label">View report</span>
                  </button></span
                ></a
              >
            </div>
          </div>
        </section>
        <section class="page-layout__content">
          <div class="stack" data-gap="lg">
            <div class="grid" data-gap="md" style="--grid-min: 13rem">
              <div class="esa-card">
                <div class="esa-card__body typography-body-md">
                  <div class="stack" data-gap="xs">
                    <span class="typography-body-sm">Layers active</span
                    ><span class="typography-heading-lg" id="cx-layers-active">9 / 10</span>
                  </div>
                </div>
              </div>
              <div class="esa-card">
                <div class="esa-card__body typography-body-md">
                  <div class="stack" data-gap="xs">
                    <span class="typography-body-sm">Overlaps detected</span
                    ><span class="typography-heading-lg">17</span
                    ><span class="typography-body-sm">across 9 layers</span>
                  </div>
                </div>
              </div>
              <!-- …and 2 more like this (<div class="esa-card">) -->
            </div>
            <div class="bcn-filterbar">
              <div class="bcn-filterbar__top">
                <div class="bcn-filterbar__group">
                  <div class="cluster" data-gap="md">
                    <span class="cx-filter"
                      ><span class="typography-body-sm">Basemap</span
                      ><esa-select id="cx-basemap" size="sm"></esa-select
                    ></span>
                  </div>
                </div>
              </div>
              <div class="bcn-filterbar__bottom">
                <div
                  class="esa-filter-container typography-label-md"
                  style="
                    --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
                    --_filter-container-row-gap: var(--spacing-200, 0.5rem);
                  "
                ></div>
              </div>
            </div>
            <div class="sidebar" style="--sidebar-width: 20rem">
              <div
                class="bcn-gis-panel"
                id="cx-gis-panel"
                data-bcn-gis-panel="cx"
                data-bcn-gis-ready="true"
              >
                <div class="esa-card esa-card--outlined">
                  <div class="esa-card__header">
                    <div class="esa-card__header-content">
                      <div class="esa-card__titles">
                        <h3 class="esa-card__title typography-title-sm-strong">GIS Layers</h3>
                        <p class="esa-card__subtitle typography-body-sm">9 of 10 on the map</p>
                      </div>
                    </div>
                    <div class="esa-card__actions typography-label-md">
                      <div class="cluster" data-gap="xs">
                        <span
                          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            data-bcn-gis-all="on"
                          >
                            <span class="esa-button__label">All on</span>
                          </button></span
                        ><span
                          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            data-bcn-gis-all="off"
                          >
                            <span class="esa-button__label">All off</span>
                          </button></span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <ul class="bcn-gis-panel__list">
                      <li>
                        <div
                          class="bcn-gis-row"
                          id="cx-layer-jurisdictions"
                          data-bcn-gis-row=""
                          data-layer-id="jurisdictions"
                          data-on="true"
                        >
                          <div
                            class="bcn-gis-row__main"
                            data-bcn-gis-open=""
                            role="button"
                            tabindex="0"
                            aria-label="Jurisdictional Boundaries — Land Use, 1 feature on/near site"
                          >
                            <span class="bcn-gis-row__swatch" style="--_swatch: #003f5c"></span
                            ><span class="bcn-gis-row__text"
                              ><span class="bcn-gis-row__name typography-body-md"
                                >Jurisdictional Boundaries</span
                              ><span class="bcn-gis-row__meta typography-body-sm"
                                >Land Use · 1 feature on/near site</span
                              ></span
                            >
                          </div>
                          <esa-switch-toggle
                            class="bcn-gis-row__switch"
                            data-bcn-gis-toggle="true"
                            label="Show Jurisdictional Boundaries on the map"
                            size="sm"
                            checked=""
                            label-position="after"
                          ></esa-switch-toggle>
                        </div>
                      </li>
                      <li>
                        <div
                          class="bcn-gis-row"
                          id="cx-layer-zoning"
                          data-bcn-gis-row=""
                          data-layer-id="zoning"
                          data-on="true"
                        >
                          <div
                            class="bcn-gis-row__main"
                            data-bcn-gis-open=""
                            role="button"
                            tabindex="0"
                            aria-label="Zoning — Land Use, 1 feature on/near site, medium risk"
                          >
                            <span class="bcn-gis-row__swatch" style="--_swatch: #7a5195"></span
                            ><span class="bcn-gis-row__text"
                              ><span class="bcn-gis-row__name typography-body-md">Zoning</span
                              ><span class="bcn-gis-row__meta typography-body-sm"
                                >Land Use · 1 feature on/near site</span
                              ></span
                            >
                          </div>
                          <esa-switch-toggle
                            class="bcn-gis-row__switch"
                            data-bcn-gis-toggle="true"
                            label="Show Zoning on the map"
                            size="sm"
                            checked=""
                            label-position="after"
                          ></esa-switch-toggle>
                        </div>
                      </li>
                      <!-- …and 8 more like this (<li>) -->
                    </ul>
                  </div>
                  <div class="esa-card__footer typography-meta">
                    <div class="repel">
                      <span class="bcn-gis-panel__note typography-body-sm"
                        >Sources refresh nightly</span
                      ><span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/due-diligence-constraints"
                          ><span class="esa-button__label">Manage data feeds</span
                          ><span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- script type="module" removed (0 bytes) -->
              <div class="stack" data-gap="md">
                <div class="cx-map-shell">
                  <div
                    id="cx-map"
                    class="cx-map leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
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
                              src="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12973/5627"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(203px, 126px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12972/5627"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(203px, -130px, 0px);
                                opacity: 1;
                              "
                            /><!-- …and 7 more like this (<img class="leaflet-tile leaflet-tile-loaded">) -->
                          </div>
                        </div>
                      </div>
                      <div class="leaflet-pane leaflet-overlay-pane">
                        <svg
                          pointer-events="none"
                          class="leaflet-zoom-animated"
                          width="707"
                          height="670"
                          viewBox="-59 -56 707 670"
                          style="transform: translate3d(-59px, -56px, 0px)"
                        >
                          <g>
                            <path
                              class="leaflet-interactive"
                              stroke="#005862"
                              stroke-opacity="1"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#005862"
                              fill-opacity="0.1"
                              fill-rule="evenodd"
                              d="M178 353L411 353L411 211L178 211z"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#003f5c"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-dasharray="6 4"
                              fill="#003f5c"
                              fill-opacity="0.04"
                              fill-rule="evenodd"
                              d="M15 564L574 564L574 -6L15 -6z"
                            ></path>
                            <!-- …and 13 more like this (<path class="[object SVGAnimatedString]">) -->
                          </g>
                        </svg>
                      </div>
                      <div class="leaflet-pane leaflet-shadow-pane"></div>
                      <div class="leaflet-pane leaflet-marker-pane"></div>
                      <div class="leaflet-pane leaflet-tooltip-pane"></div>
                      <!-- …and 1 more like this (<div class="leaflet-pane leaflet-tile-pane">) -->
                      <div
                        class="leaflet-proxy leaflet-zoom-animated"
                        style="transform: translate3d(1.4406e6px, 3.32124e6px, 0px) scale(16384)"
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
                          <span aria-hidden="true">|</span> © Esri World Imagery
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cx-legend" id="cx-legend">
                    <div class="typography-body-sm cx-legend__title">Boundary</div>
                    <div class="cluster" data-gap="xs">
                      <span
                        class="cx-legend__swatch"
                        style="--_c: var(--color-background-brand, #005862)"
                      ></span
                      ><span class="typography-body-sm">Project site · 340 ac</span>
                    </div>
                    <div class="typography-body-sm cx-legend__title">Active overlays</div>
                    <div id="cx-legend-overlays" class="stack" data-gap="xs">
                      <div class="cluster" data-gap="xs">
                        <span class="cx-legend__swatch" style="--_c: #003f5c"></span
                        ><span class="typography-body-sm">Jurisdictional Boundaries</span>
                      </div>
                      <div class="cluster" data-gap="xs">
                        <span class="cx-legend__swatch" style="--_c: #7a5195"></span
                        ><span class="typography-body-sm">Zoning</span>
                      </div>
                      <!-- …and 7 more like this (<div class="cluster">) -->
                    </div>
                  </div>
                </div>
                <div
                  class="bcn-finding-list"
                  data-bcn-finding-list=""
                  data-bcn-finding-list-ready="true"
                >
                  <div class="esa-card esa-card--outlined esa-card--padding-none">
                    <div class="esa-card__header">
                      <div class="esa-card__header-content">
                        <div class="esa-card__titles">
                          <h3 class="esa-card__title typography-title-sm-strong">Findings</h3>
                          <p class="esa-card__subtitle typography-body-sm">
                            6 findings · 2 high risk
                          </p>
                        </div>
                      </div>
                      <div class="esa-card__actions typography-label-md">
                        <span id="cx-export-findings"
                          ><span
                            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
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
                                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                  <polyline points="7 10 12 15 17 10"></polyline>
                                  <line x1="12" x2="12" y1="15" y2="3"></line></svg></span
                              ><span class="esa-button__label">Export</span>
                            </button></span
                          ></span
                        >
                      </div>
                    </div>
                    <div class="esa-card__body typography-body-md">
                      <ul class="bcn-finding-list__rows">
                        <li>
                          <button
                            type="button"
                            class="bcn-finding-row"
                            data-bcn-finding-row=""
                            data-finding-id="haz-waste"
                            aria-label="Open finding: DTSC EnviroStor / SWRCB GeoTracker — High risk"
                          >
                            <span
                              class="bcn-finding-row__swatch"
                              style="--_swatch: #ef4444"
                              aria-hidden="true"
                            ></span
                            ><span class="bcn-finding-row__text"
                              ><span class="bcn-finding-row__category typography-body-sm"
                                >Hazards</span
                              ><span class="bcn-finding-row__name typography-body-md"
                                >DTSC EnviroStor / SWRCB GeoTracker</span
                              ><span class="bcn-finding-row__note typography-body-sm"
                                >Sites within 1 mi: 2 closed LUST + 1 open VCP</span
                              ></span
                            ><span class="bcn-finding-row__risk"
                              ><span
                                class="bcn-status-chip"
                                data-status="high"
                                style="--_chip: var(--st-high, #e5484d)"
                                ><span class="bcn-status-chip__dot"></span
                                ><span class="bcn-status-chip__label">High</span></span
                              ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
                            >
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            class="bcn-finding-row"
                            data-bcn-finding-row=""
                            data-finding-id="biological"
                            aria-label="Open finding: CNDDB + USFWS Critical Habitat — High risk"
                          >
                            <span
                              class="bcn-finding-row__swatch"
                              style="--_swatch: #2e7571"
                              aria-hidden="true"
                            ></span
                            ><span class="bcn-finding-row__text"
                              ><span class="bcn-finding-row__category typography-body-sm"
                                >Biological</span
                              ><span class="bcn-finding-row__name typography-body-md"
                                >CNDDB + USFWS Critical Habitat</span
                              ><span class="bcn-finding-row__note typography-body-sm"
                                >Occurrences: Mohave ground squirrel Critical Habitat (adjacent);
                                burrowing owl; western Joshua tree</span
                              ></span
                            ><span class="bcn-finding-row__risk"
                              ><span
                                class="bcn-status-chip"
                                data-status="high"
                                style="--_chip: var(--st-high, #e5484d)"
                                ><span class="bcn-status-chip__dot"></span
                                ><span class="bcn-status-chip__label">High</span></span
                              ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
                            >
                          </button>
                        </li>
                        <!-- …and 4 more like this (<li>) -->
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- script type="module" removed (481 bytes) -->
              </div>
            </div>
          </div>
          <!-- script type="application/json" removed (4 KB) -->
        </section>
      </div>
    </div>
    <esa-side-dialog id="cx-drawer" size="md" style="--_width: 560px" position="right"
      ><div slot="header" class="stack" data-gap="xs">
        <span class="typography-body-sm" id="cx-d-cat">—</span
        ><span class="typography-title" id="cx-d-name">—</span>
      </div>
      <div class="stack" data-gap="lg">
        <div class="cluster" data-gap="xs" id="cx-d-chips"></div>
        <div class="stack" data-gap="xs">
          <span class="typography-body-sm cx-d-label">Data source</span
          ><span class="typography-body-md" id="cx-d-source"></span>
        </div>
        <div class="stack" data-gap="xs">
          <span class="typography-body-sm cx-d-label">Intersection result</span>
          <dl class="cx-kv" id="cx-d-kv"></dl>
        </div>
        <div class="stack" data-gap="xs">
          <span class="typography-body-sm cx-d-label">Recommended next steps</span>
          <ul class="cx-d-next" id="cx-d-next"></ul>
        </div>
      </div>
      <div slot="footer" class="repel">
        <span id="cx-d-flag"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Flag for permit matrix</span>
            </button></span
          ></span
        ><span id="cx-d-add"
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Add to report</span>
            </button></span
          ></span
        >
      </div></esa-side-dialog
    >
  </div>
</div>
```
