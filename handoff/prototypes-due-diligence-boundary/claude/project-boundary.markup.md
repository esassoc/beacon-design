# Project Boundary: markup

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
            <a href="/beacon-design/prototypes/due-diligence-boundary" class="nav-sublink active"
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
            ><span class="breadcrumb-item">Almond</span
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
            ><span class="breadcrumb-item" aria-current="page">Project Boundary</span>
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
                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                  ></path>
                  <circle cx="12" cy="10" r="3"></circle></svg></span
              >Project Boundary
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
              <a href="/beacon-design/prototypes/due-diligence-siting"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
                  ><button class="esa-button__native typography-microcopy-md" type="button">
                    <span class="esa-button__label">Cancel</span>
                  </button></span
                ></a
              ><span id="bd-continue"
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
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg></span
                    ><span class="esa-button__label">Run constraints check</span>
                  </button></span
                ></span
              >
            </div>
          </div>
        </section>
        <section class="page-layout__content">
          <div class="stack" data-gap="lg">
            <div class="esa-alert-box esa-alert-box--success typography-body-sm">
              <div class="esa-alert-box__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div class="esa-alert-box__body">
                <strong class="esa-alert-box__title typography-label-sm-strong"
                  >Passed Site Screening</strong
                >
                <div class="esa-alert-box__message">
                  Almond (screened as Project Almond) passed all five acquisition criteria on
                  2026-06-02 and advanced to Due Diligence.
                  <a href="/beacon-design/prototypes/due-diligence-siting"
                    >Review the screening result →</a
                  >
                </div>
              </div>
            </div>
            <!-- script type="module" removed (449 bytes) -->
            <div class="sidebar" style="--sidebar-width: 22rem">
              <div class="stack" data-gap="md">
                <div class="esa-card">
                  <div class="esa-card__header">
                    <div class="esa-card__header-content">
                      <div class="esa-card__titles">
                        <h3 class="esa-card__title typography-title-sm-strong">Project details</h3>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="stack" data-gap="md">
                      <esa-text-field label="Project name" value="Almond" size="md"></esa-text-field
                      ><esa-text-field
                        label="Project type"
                        value="Data Center Campus"
                        size="md"
                        readonly="true"
                      ></esa-text-field>
                      <div class="cluster" data-gap="md">
                        <esa-text-field
                          label="Critical IT load"
                          value="180 MW (Phase 1)"
                          size="md"
                        ></esa-text-field
                        ><esa-text-field
                          label="Estimated acres"
                          value="340"
                          size="md"
                        ></esa-text-field>
                      </div>
                      <esa-text-field
                        label="APN(s)"
                        value="237-104-007, 237-104-008, 237-104-011, 237-104-014"
                        size="md"
                        readonly="true"
                      ></esa-text-field
                      ><esa-text-field
                        label="Jurisdiction (auto-detected from boundary)"
                        id="bd-juris"
                        value="Kern County (unincorporated)"
                        size="md"
                        readonly="true"
                      ></esa-text-field>
                    </div>
                  </div>
                </div>
                <div id="bd-summary-card" style="display: block">
                  <div class="esa-card">
                    <div class="esa-card__header">
                      <div class="esa-card__header-content">
                        <div class="esa-card__titles">
                          <h3 class="esa-card__title typography-title-sm-strong">
                            Boundary captured
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div class="esa-card__body typography-body-md">
                      <div class="stack" data-gap="xs">
                        <div class="bcn-key-value" data-size="md" data-layout="stack">
                          <span class="bcn-key-value__key">Vertices</span
                          ><span class="bcn-key-value__val">4</span>
                        </div>
                        <div class="bcn-key-value" data-size="md" data-layout="stack">
                          <span class="bcn-key-value__key">Perimeter</span
                          ><span class="bcn-key-value__val">4.69 km · 15399 ft</span>
                        </div>
                        <!-- …and 4 more like this (<div class="bcn-key-value">) -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bcn-bmap" id="bd-root" data-bcn-bmap="" data-prefix="bd">
                <div class="stack" data-gap="md">
                  <div class="repel bcn-bmap__bar" data-gap="md">
                    <esa-button-toggle
                      id="bd-method"
                      size="sm"
                      label="Boundary method"
                    ></esa-button-toggle
                    ><esa-select id="bd-basemap" size="sm" label="Basemap"></esa-select>
                  </div>
                  <div
                    class="bcn-bmap__surface leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
                    id="bd-map"
                    style="height: 560px; position: relative"
                    role="region"
                    aria-label="Almond boundary — draw or edit the site outline"
                    tabindex="0"
                  >
                    <div
                      class="leaflet-pane leaflet-map-pane"
                      style="transform: translate3d(75px, 0px, 0px)"
                    >
                      <div class="leaflet-pane leaflet-tile-pane">
                        <div class="leaflet-layer" style="z-index: 1; opacity: 1">
                          <div
                            class="leaflet-tile-container leaflet-zoom-animated"
                            style="z-index: 19; transform: translate3d(0px, 0px, 0px) scale(1)"
                          >
                            <img
                              alt=""
                              src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/15/5627/12973?access_token=undefined"
                              class="leaflet-tile"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(172px, 129px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/15/5627/12972?access_token=undefined"
                              class="leaflet-tile"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(172px, -127px, 0px);
                                opacity: 1;
                              "
                            /><!-- …and 7 more like this (<img class="leaflet-tile">) -->
                          </div>
                        </div>
                      </div>
                      <div class="leaflet-pane leaflet-overlay-pane">
                        <svg
                          pointer-events="none"
                          class="leaflet-zoom-animated"
                          width="814"
                          height="670"
                          viewBox="-143 -56 814 670"
                          style="transform: translate3d(-143px, -56px, 0px)"
                        >
                          <g>
                            <path
                              class="leaflet-interactive"
                              stroke="#005862"
                              stroke-opacity="1"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#005862"
                              fill-opacity="0.15"
                              fill-rule="evenodd"
                              d="M114 430L414 430L414 129L114 129z"
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
                        <div class="leaflet-draw leaflet-control">
                          <div class="leaflet-draw-section">
                            <div class="leaflet-draw-toolbar leaflet-bar leaflet-draw-toolbar-top">
                              <a class="leaflet-draw-draw-polygon" href="#" title="Draw a polygon"
                                ><span class="sr-only">Draw a polygon</span></a
                              ><a
                                class="leaflet-draw-draw-rectangle"
                                href="#"
                                title="Draw a rectangle"
                                ><span class="sr-only">Draw a rectangle</span></a
                              >
                            </div>
                            <ul class="leaflet-draw-actions"></ul>
                          </div>
                          <div class="leaflet-draw-section">
                            <div class="leaflet-draw-toolbar leaflet-bar">
                              <a class="leaflet-draw-edit-edit" href="#" title="Edit layers"
                                ><span class="sr-only">Edit layers</span></a
                              ><a class="leaflet-draw-edit-remove" href="#" title="Delete layers"
                                ><span class="sr-only">Delete layers</span></a
                              >
                            </div>
                            <ul class="leaflet-draw-actions"></ul>
                          </div>
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
                  <p class="bcn-bmap__hint" id="bd-hint">
                    Use the polygon or rectangle tool on the map to trace the site outline, then the
                    edit tool to move a vertex. A boundary is a closed shape — points and lines are
                    off.
                  </p>
                  <div class="bcn-bmap__upload" id="bd-upload" hidden="">
                    <esa-file-upload
                      label="Upload a GIS file"
                      accept=".zip,.geojson,.json,.kml,.kmz"
                      name="boundary-file"
                    ></esa-file-upload>
                    <p class="bcn-bmap__hint">
                      Shapefile (.zip), GeoJSON, or KML/KMZ. Prototype: the file is not parsed —
                      selecting one loads the demo boundary so the rest of the step can be reviewed.
                    </p>
                  </div>
                </div>
              </div>
              <!-- script type="application/json" removed (126 bytes) --><!-- script type="module" removed (0 bytes) -->
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
```
