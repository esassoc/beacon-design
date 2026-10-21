# Site Clearance: markup, part 1 of 2

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
        ><span class="project-switcher__name">Delta Conveyance Project</span
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
        <a href="#setup-wizard" class="nav-section__header nav-section__header--link"
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
              <path
                d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
              ></path>
              <circle cx="12" cy="12" r="10"></circle></svg></span
          ><span class="nav-section__title">Setup Wizard</span></a
        >
      </div>
      <div class="nav-section nav-section--collapsed">
        <button type="button" class="nav-section__header" aria-expanded="false">
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
          ><span class="nav-section__title">Project</span
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
          <li class="nav-item"><a href="#dashboard" class="nav-sublink">Dashboard</a></li>
          <li class="nav-item">
            <a href="/beacon-design/prototypes/lists" class="nav-sublink">Lists</a>
          </li>
          <!-- …and 2 more like this (<li class="nav-item">) -->
        </ul>
      </div>
      <hr class="nav-divider" aria-hidden="true" />
      <div class="nav-section nav-section--collapsed">
        <button type="button" class="nav-section__header" aria-expanded="false">
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
              <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
              <path d="M4 6h.01"></path>
              <!-- …and 4 more like this (<path>) -->
              <circle cx="12" cy="12" r="2"></circle>
              <path d="m13.41 10.59 5.66-5.66"></path></svg></span
          ><span class="nav-section__title">Tracking</span
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
            <a href="#tracking-summary" class="nav-sublink">Tracking Summary</a>
          </li>
          <li class="nav-item">
            <a href="#project-tracking" class="nav-sublink">Project Tracking</a>
          </li>
          <!-- …and 2 more like this (<li class="nav-item">) -->
        </ul>
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
              <path
                d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
              ></path>
              <circle cx="12" cy="8" r="2"></circle>
              <path
                d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
              ></path></svg></span
          ><span class="nav-section__title">Monitoring</span
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
            <a href="/beacon-design/prototypes/monitoring/dashboard" class="nav-sublink"
              >Monitoring Portal</a
            >
          </li>
          <li class="nav-item">
            <a href="/beacon-design/prototypes/site-clearance" class="nav-sublink active"
              >Site Clearance</a
            >
          </li>
          <!-- …and 2 more like this (<li class="nav-item">) -->
        </ul>
      </div>
      <div class="nav-section nav-section--collapsed">
        <button type="button" class="nav-section__header" aria-expanded="false">
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
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
              <path
                d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
              ></path>
              <path d="M12 11h4"></path>
              <!-- …and 3 more like this (<path>) -->
            </svg></span
          ><span class="nav-section__title">Reporting</span
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
            <a href="#progress-report" class="nav-sublink">Progress Report</a>
          </li>
          <li class="nav-item"><a href="#report-center" class="nav-sublink">Report Center</a></li>
        </ul>
      </div>
      <hr class="nav-divider" aria-hidden="true" />
      <div class="nav-section nav-section--collapsed">
        <button type="button" class="nav-section__header" aria-expanded="false">
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
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
              <path d="M3 12A9 3 0 0 0 21 12"></path></svg></span
          ><span class="nav-section__title">Data Catalog</span
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
            <a href="#dc-source-documents" class="nav-sublink">Source Documents</a>
          </li>
          <li class="nav-item"><a href="#dc-commitments" class="nav-sublink">Commitments</a></li>
          <!-- …and 3 more like this (<li class="nav-item">) -->
        </ul>
      </div>
    </div>
  </nav>
  <!-- content -->
  <div class="modern-layout__content">
    <!-- style removed (290 bytes) --><!-- bcn-lego-checked: esa-breadcrumbs exists, but this whole layout is a deliberate
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
            ><a class="breadcrumb-item" href="#monitoring">Monitoring</a
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
            ><a class="breadcrumb-item" href="#monitoring-portal">Monitoring Portal</a
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
            ><span class="breadcrumb-item" aria-current="page">Site Clearance</span>
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
                  <path
                    d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
                  ></path>
                  <path d="M15 5.764v15"></path>
                  <path d="M9 3.236v15"></path></svg></span
              >Site Clearance
            </h1>
          </div>
        </section>
        <section class="page-layout__content">
          <!-- script type="module" removed (173 bytes) --><esa-tab-layout
            id="gc-tabs"
            appearance="underline"
            size="md"
            variant="underline"
            ><section slot="panel-0" class="map-panel" aria-label="Clearance status map">
              <!-- Print-only header (filled on beforeprint) -->
              <div class="print-header" aria-hidden="true">
                <span class="print-header__title">Site Clearance</span
                ><span class="print-header__meta" id="print-meta"></span>
              </div>
              <!-- View presets + map filters. The presets band is an opinionated shortcut
             over the SAME facet state the Status dropdown edits (one source of
             truth): pressing a preset sets the facets; a preset reads as selected
             only while the facets exactly equal its set, so hand-editing the
             dropdown drops back to no-preset. Counts ride the labels as plain
             text (the lego renders label strings — an esa-badge inside a segment
             would fight it). The filter row scopes markers AND the readiness
             strip. The go-to comboboxes on the View row's right (round-5 ch2)
             are jumps, not filters: type-ahead or pick any of the 231 work-area
             IDs / any observation → pan/zoom + pulse (no drawer), then reset to
             the placeholder. -->
              <div class="map-filterbar">
                <div class="map-filterbar__row">
                  <span class="map-filterbar__label">View</span
                  ><!-- size="md" (round-5 ch1): the View presets one type-size step up
                 (sm 12px/28px → md 14px/36px) — the lego's own size prop, no
                 override; matches the Data tab's pivot toggle. --><esa-button-toggle
                    id="view-presets"
                    value="all"
                    size="md"
                  ></esa-button-toggle>
                  <div class="map-filterbar__goto">
                    <esa-combobox
                      id="goto-wa"
                      mode="autocomplete"
                      size="sm"
                      placeholder="Go to work area…"
                    ></esa-combobox
                    ><esa-combobox
                      id="goto-obs"
                      mode="autocomplete"
                      size="sm"
                      placeholder="Go to observation…"
                    ></esa-combobox>
                  </div>
                </div>
                <div class="map-filterbar__row">
                  <span class="map-filterbar__label">Filters</span>
                  <div
                    class="esa-filter-container typography-label-md"
                    style="
                      --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
                      --_filter-container-row-gap: var(--spacing-200, 0.5rem);
                    "
                  >
                    <esa-filter-dropdown
                      id="map-flt-status"
                      label="Status"
                      multiple=""
                      size="sm"
                    ></esa-filter-dropdown
                    ><esa-filter-dropdown
                      id="map-flt-start"
                      label="Planned start"
                      multiple=""
                      size="sm"
                    ></esa-filter-dropdown>
                  </div>
                  <span id="map-clear-filters"
                    ><button
                      class="esa-filter-clear-button typography-microcopy-sm"
                      type="button"
                      data-esa-filter-clear=""
                      aria-label="Clear all filters"
                    >
                      <svg
                        class="esa-filter-clear-button__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"></path>
                        <path d="m22 3-5 5"></path>
                        <path d="m17 3 5 5"></path></svg
                      ><span class="esa-filter-clear-button__label">Clear all</span>
                    </button></span
                  >
                </div>
              </div>
              <div class="map-wrap">
                <div
                  id="gc-map"
                  class="map leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
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
                          style="z-index: 20; transform: translate3d(0px, 0px, 0px) scale(1)"
                        >
                          <img
                            alt=""
                            src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/10/166/394?access_token=undefined"
                            class="leaflet-tile"
                            style="
                              width: 256px;
                              height: 256px;
                              transform: translate3d(341px, 145px, 0px);
                              opacity: 1;
                            "
                          /><img
                            alt=""
                            src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/10/166/393?access_token=undefined"
                            class="leaflet-tile"
                            style="
                              width: 256px;
                              height: 256px;
                              transform: translate3d(341px, -111px, 0px);
                              opacity: 1;
                            "
                          /><!-- …and 13 more like this (<img class="leaflet-tile">) -->
                        </div>
                      </div>
                    </div>
                    <div class="leaflet-pane leaflet-overlay-pane">
                      <svg
                        pointer-events="none"
                        class="leaflet-zoom-animated"
                        width="1121"
                        height="754"
                        viewBox="-93 -63 1121 754"
                        style="transform: translate3d(-93px, -63px, 0px)"
                      >
                        <g>
                          <path
                            class="leaflet-interactive"
                            stroke="#7b5ea7"
                            stroke-opacity="1"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-dasharray="6 4"
                            fill="#7b5ea7"
                            fill-opacity="0.11"
                            fill-rule="evenodd"
                            d="M469.1592618666764,131.96431823368766a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                          ></path>
                          <path
                            class="leaflet-interactive"
                            stroke="#5b3f87"
                            stroke-opacity="1"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="#7b5ea7"
                            fill-opacity="1"
                            fill-rule="evenodd"
                            d="M473,132a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0 "
                          ></path>
                          <!-- …and 243 more like this (<path class="[object SVGAnimatedString]">) -->
                        </g>
                      </svg>
                    </div>
                    <div class="leaflet-pane leaflet-shadow-pane"></div>
                    <div class="leaflet-pane leaflet-marker-pane"></div>
                    <div class="leaflet-pane leaflet-tooltip-pane"></div>
                    <!-- …and 1 more like this (<div class="leaflet-pane leaflet-tile-pane">) -->
                    <div
                      class="leaflet-proxy leaflet-zoom-animated"
                      style="transform: translate3d(42621.9px, 101033px, 0px) scale(512)"
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
                      <div class="leaflet-bar gc-reset leaflet-control">
                        <a
                          class="gc-reset__btn"
                          href="#"
                          title="Reset view to all work areas"
                          role="button"
                          aria-label="Reset view to all work areas"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                            <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                            <!-- …and 2 more like this (<path>) -->
                          </svg></a
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
                        <span aria-hidden="true">|</span> ©
                        <a href="https://www.mapbox.com/about/maps/">Mapbox</a> ©
                        <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="map-legend" aria-label="Clearance status legend">
                  <span class="map-legend__title">Work area status</span
                  ><span class="map-legend__row"
                    ><span class="map-legend__dot" style="background: var(--st-blocked)"></span
                    >Blocked</span
                  ><span class="map-legend__row"
                    ><span
                      class="map-legend__dot"
                      style="
                        background: var(--color-background-elevation-raised);
                        border: 2px solid var(--st-provisional-block);
                        box-sizing: border-box;
                      "
                    ></span
                    >Provisional Block</span
                  ><!-- …and 7 more like this (<span class="map-legend__row">) -->
                </div>
              </div>
              <!-- Readiness strip — the census figure below the map -->
              <section class="readiness" aria-label="Work areas by clearance status">
                <div class="readiness__head">
                  <span class="readiness__title">Work areas by clearance status</span
                  ><span class="readiness__summary"
                    >Ready to drill <strong id="rs-ready">7</strong
                    ><span id="rs-total">of 231 work areas</span></span
                  >
                </div>
                <div
                  class="readiness__bar"
                  id="rs-bar"
                  role="img"
                  aria-label="7 of 231 work areas ready"
                >
                  <div
                    title="Blocked: 3"
                    style="height: 100%; flex: 0 0 1.2987%; background: var(--st-blocked)"
                  ></div>
                  <div
                    title="Provisional Block: 18"
                    style="
                      height: 100%;
                      flex: 0 0 7.79221%;
                      background: repeating-linear-gradient(
                        135deg,
                        var(--st-provisional-block) 0 4px,
                        var(--color-background-elevation-raised) 4px 7px
                      );
                    "
                  ></div>
                  <!-- …and 5 more like this (<div>) -->
                </div>
                <ul class="readiness__legend">
                  <li class="readiness__legend-item" data-rs-item="blocked" data-empty="false">
                    <span class="readiness__swatch" style="background: var(--st-blocked)"></span
                    ><span class="readiness__legend-label">Blocked</span
                    ><span class="readiness__legend-count" data-rs-count="blocked">3</span>
                  </li>
                  <li
                    class="readiness__legend-item"
                    data-rs-item="provisional-block"
                    data-empty="false"
                  >
                    <span
                      class="readiness__swatch"
                      style="
                        background: var(--color-background-elevation-raised);
                        border: 2px solid var(--st-provisional-block);
                        box-sizing: border-box;
                      "
                    ></span
                    ><span class="readiness__legend-label">Provisional Block</span
                    ><span class="readiness__legend-count" data-rs-count="provisional-block"
                      >18</span
                    >
                  </li>
                  <!-- …and 5 more like this (<li class="readiness__legend-item">) -->
                </ul>
              </section>
            </section>
            <section slot="panel-1" class="data-panel" aria-label="Clearance data workspace">
              <div class="bcn-filterbar">
                <div class="bcn-filterbar__top">
                  <div class="bcn-filterbar__group">
                    <span class="bcn-filterbar__label">View</span
                    ><esa-button-toggle
                      id="pivot-toggle"
                      value="workareas"
                      size="md"
                    ></esa-button-toggle>
                  </div>
                  <div class="bcn-filterbar__search">
                    <esa-text-field
                      id="gc-search"
                      placeholder="Search work areas…"
                      size="md"
                    ></esa-text-field
                    ><span id="gc-search-clear" hidden=""
                      ><span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Clear search"
                          title="Clear search"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button></span
                    ></span>
                  </div>
                </div>
                <div class="bcn-filterbar__bottom">
                  <span class="bcn-filterbar__label">Filters</span>
                  <div
                    class="esa-filter-container typography-label-md"
                    style="
                      --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
                      --_filter-container-row-gap: var(--spacing-200, 0.5rem);
                    "
                  >
                    <esa-filter-dropdown
                      id="flt-status"
                      label="Status"
                      multiple=""
                      size="sm"
                    ></esa-filter-dropdown>
                  </div>
                  <span id="gc-clear-filters" class="bcn-filterbar__clear"
                    ><button
                      class="esa-filter-clear-button typography-microcopy-sm"
                      type="button"
                      data-esa-filter-clear=""
                      aria-label="Clear all filters"
                    >
                      <svg
                        class="esa-filter-clear-button__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"></path>
                        <path d="m22 3-5 5"></path>
                        <path d="m17 3 5 5"></path></svg
                      ><span class="esa-filter-clear-button__label">Clear all</span>
                    </button></span
                  >
                </div>
              </div>
              <div class="bcn-view-pane" id="pane-was">
                <div id="grid-was" class="gc-grid"></div>
              </div>
              <div class="bcn-view-pane" id="pane-obs" hidden="">
                <div id="grid-obs" class="gc-grid"></div>
              </div>
              <div class="table-footer">
                <span id="gc-download"
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                    ><button class="esa-button__native typography-microcopy-xs" type="button">
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
                      ><span class="esa-button__label">Download as CSV</span>
                    </button></span
                  ></span
                >
                <div class="row-count-data">
                  Total Records: <span id="gc-total">0</span
                  ><span id="gc-filtered" class="filtered-rows-count" hidden=""></span>
                </div>
              </div>
            </section>
            <section slot="panel-2" class="tl-panel" aria-label="Clearance timeline">
              <section class="tl" aria-label="Work availability timeline">
                <div class="tl__head">
                  <h3 class="tl__title">When does work become available?</h3>
                  <p class="tl__sub">
                    Work areas by milestone date — colored by current derived status
                  </p>
                </div>
                <div class="tl__axisrow" aria-hidden="true">
                  <span></span>
                  <div class="tl__axis" id="tl-axis">
                    <span class="tl-tick" style="left: 0%">Jun 2026</span
                    ><span class="tl-tick" style="left: 24.5902%">Jul 2026</span
                    ><span class="tl-tick tl-tick--today" style="left: 8.19672%">Today</span
                    ><!-- …and 2 more like this (<span class="tl-tick">) -->
                  </div>
                  <span></span>
                </div>
                <div class="tl__chart" id="tl-chart">
                  <span class="tl-today-line" style="left: calc(8.19672% + 177.967px)"></span>
                  <section class="tl-lane">
                    <h4 class="tl-lane__label">
                      Work starts<span class="tl-lane__count">8 work areas</span>
                    </h4>
                    <ul class="tl-lane__rows">
                      <li
                        class="tl-row"
                        tabindex="0"
                        role="button"
                        title="DCSHF-DH-144 · Cleared · Jun 12, 2026"
                      >
                        <span class="tl-row__name"
                          >DCSHF-DH-144<span class="tl-row__sub">Shaft Sites</span></span
                        ><span class="tl-row__track"
                          ><span
                            class="tl-dot"
                            style="left: 9.01639%; background: var(--st-cleared)"
                          ></span></span
                        ><span class="tl-row__meta">Jun 12, 2026</span>
                      </li>
                      <li
                        class="tl-row"
                        tabindex="0"
                        role="button"
                        title="DCBPP-DH-066 · Cleared · Jun 15, 2026"
                      >
                        <span class="tl-row__name"
                          >DCBPP-DH-066<span class="tl-row__sub">Bethany Pumping Plant</span></span
                        ><span class="tl-row__track"
                          ><span
                            class="tl-dot"
                            style="left: 11.4754%; background: var(--st-cleared)"
                          ></span></span
                        ><span class="tl-row__meta">Jun 15, 2026</span>
                      </li>
                      <!-- …and 6 more like this (<li class="tl-row">) -->
                    </ul>
                  </section>
                  <section class="tl-lane">
                    <h4 class="tl-lane__label">
                      Clearance visits<span class="tl-lane__count">4 work areas</span>
                    </h4>
                    <ul class="tl-lane__rows">
                      <li
                        class="tl-row"
                        tabindex="0"
                        role="button"
                        title="DCRDS-DH-184 · Provisional Block · Jun 15, 2026"
                      >
                        <span class="tl-row__name"
                          >DCRDS-DH-184<span class="tl-row__sub">Roads</span></span
                        ><span class="tl-row__track"
                          ><span class="tl-dot tl-dot--hollow" style="left: 11.4754%"></span></span
                        ><span class="tl-row__meta">Jun 15, 2026</span>
                      </li>
                      <li
                        class="tl-row"
                        tabindex="0"
                        role="button"
                        title="DCTR2-DH-012 · Provisional Block · Jun 16, 2026"
                      >
                        <span class="tl-row__name"
                          >DCTR2-DH-012<span class="tl-row__sub">Tunnel Reach 2</span></span
                        ><span class="tl-row__track"
                          ><span class="tl-dot tl-dot--hollow" style="left: 12.2951%"></span></span
                        ><span class="tl-row__meta">Jun 16, 2026</span>
                      </li>
                      <!-- …and 2 more like this (<li class="tl-row">) -->
                    </ul>
                  </section>
                  <section class="tl-lane">
                    <h4 class="tl-lane__label">
                      Blocks expected to lift<span class="tl-lane__count">19 work areas</span>
                    </h4>
                    <ul class="tl-lane__rows">
                      <li
                        class="tl-row"
                        tabindex="0"
                        role="button"
                        title="DCLEV-DH-023 · Provisional Block · Jul 24, 2026"
                      >
                        <span class="tl-row__name"
                          >DCLEV-DH-023<span class="tl-row__sub">Levees</span></span
                        ><span class="tl-row__track"
                          ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
                        ><span class="tl-row__meta">Jul 24, 2026</span>
                      </li>
                      <li
                        class="tl-row"
                        tabindex="0"
                        role="button"
                        title="DCLEV-DH-025 · Provisional Block · Jul 24, 2026"
                      >
                        <span class="tl-row__name"
                          >DCLEV-DH-025<span class="tl-row__sub">Levees</span></span
                        ><span class="tl-row__track"
                          ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
                        ><span class="tl-row__meta">Jul 24, 2026</span>
                      </li>
                      <!-- …and 17 more like this (<li class="tl-row">) -->
                    </ul>
                  </section>
                </div>
                <p class="tl__excluded" id="tl-excluded">
                  200 work areas not yet surveyed — no dates to plot · 2 blocked indefinitely (GGS)
                  · 1 cleared without a planned start date
                </p>
              </section>
            </section>
            <section slot="panel-3" class="feed-panel" aria-label="Activity feed">
              <div class="feed">
                <div class="feed-main">
                  <!-- Filter row — the same filter legos as the map/Data bars. Scopes
                 the feed only; Type has no dots on purpose (colors belong to
                 status, not event type). -->
                  <div class="map-filterbar feed-filterbar">
                    <div class="map-filterbar__row">
                      <span class="map-filterbar__label">Filters</span>
                      <div
                        class="esa-filter-container typography-label-md"
                        style="
                          --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
                          --_filter-container-row-gap: var(--spacing-200, 0.5rem);
                        "
                      >
                        <esa-filter-dropdown
                          id="act-flt-type"
                          label="Type"
                          multiple=""
                          size="sm"
                        ></esa-filter-dropdown
                        ><esa-filter-dropdown
                          id="act-flt-component"
                          label="Component"
                          multiple=""
                          size="sm"
                        ></esa-filter-dropdown>
                      </div>
                      <span id="act-clear-filters"
                        ><button
                          class="esa-filter-clear-button typography-microcopy-sm"
                          type="button"
                          data-esa-filter-clear=""
                          aria-label="Clear all filters"
                        >
                          <svg
                            class="esa-filter-clear-button__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"></path>
                            <path d="m22 3-5 5"></path>
                            <path d="m17 3 5 5"></path></svg
                          ><span class="esa-filter-clear-button__label">Clear all</span>
                        </button></span
                      >
                    </div>
                  </div>
                  <div id="feed-groups">
                    <section class="feed-day">
                      <h3 class="feed-heading">Jun 9, 2026</h3>
                      <ul class="feed-day__list">
                        <li
                          class="entry entry--card"
                          data-obs="Species-Swainson's Hawk-06092026"
                          tabindex="0"
                          role="button"
                        >
                          <span class="entry__badge entry__badge--obs"
                            >Species-Swainson's Hawk-06092026</span
                          >
                          <div class="entry__body">
                            <p class="entry__line">
                              <span class="entry__type">Observation</span
                              ><span class="entry__sep"> · </span
                              ><span class="entry__primary">Swainson's Hawk · tracking only</span>
                            </p>
```
