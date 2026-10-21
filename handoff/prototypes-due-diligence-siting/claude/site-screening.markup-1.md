# Site Screening: markup, part 1 of 2

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
        ><span class="project-switcher__name">No project selected</span
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
      <div class="nav-section nav-section--active">
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
            ><span class="breadcrumb-item" aria-current="page">Site Screening</span>
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path></svg></span
              >Site Screening
            </h1>
          </div>
        </section>
        <section class="page-layout__content">
          <div class="stack" data-gap="lg">
            <div class="grid" data-gap="md" style="--grid-min: 14rem">
              <div class="esa-card">
                <div class="esa-card__body typography-body-md">
                  <div class="stack" data-gap="xs">
                    <span class="typography-body-sm">Candidates screened</span
                    ><span class="typography-heading-lg">5</span
                    ><span class="typography-body-sm">Five acquisition criteria each</span>
                  </div>
                </div>
              </div>
              <div class="esa-card">
                <div class="esa-card__body typography-body-md">
                  <div class="stack" data-gap="xs">
                    <span class="typography-body-sm">Passed all criteria</span
                    ><span
                      class="typography-heading-lg"
                      style="color: var(--color-background-utility-success)"
                      >1</span
                    ><span class="typography-body-sm">Eligible to advance</span>
                  </div>
                </div>
              </div>
              <div class="esa-card">
                <div class="esa-card__body typography-body-md">
                  <div class="stack" data-gap="xs">
                    <span class="typography-body-sm">Advancing to due diligence</span
                    ><span class="typography-heading-lg">Project Almond</span
                    ><span class="typography-body-sm">Kern County · 340 ac</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bcn-obsmap leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
              id="bcn-obsmap-stg"
              data-bcn-obsmap=""
              data-map-id="stg"
              data-interactive="true"
              style="height: 380px"
              role="region"
              aria-label="Observation map — 5 observations plotted by severity"
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
                      style="z-index: 19; transform: translate3d(-518px, -270px, 0px) scale(1)"
                    >
                      <img
                        alt=""
                        src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/6/10/24?access_token=undefined"
                        class="leaflet-tile"
                        style="
                          width: 256px;
                          height: 256px;
                          transform: translate3d(782px, 180px, 0px);
                          opacity: 1;
                        "
                      /><img
                        alt=""
                        src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/6/10/25?access_token=undefined"
                        class="leaflet-tile"
                        style="
                          width: 256px;
                          height: 256px;
                          transform: translate3d(782px, 436px, 0px);
                          opacity: 1;
                        "
                      /><!-- …and 8 more like this (<img class="leaflet-tile">) -->
                    </div>
                  </div>
                </div>
                <div class="leaflet-pane leaflet-overlay-pane">
                  <svg
                    pointer-events="none"
                    class="leaflet-zoom-animated"
                    width="1121"
                    height="454"
                    viewBox="-93 -38 1121 454"
                    style="transform: translate3d(-93px, -38px, 0px)"
                  >
                    <g>
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
                        d="M511,253a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                      ></path>
                      <path
                        class="leaflet-interactive"
                        stroke="#fcfcfc"
                        stroke-opacity="1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="#8a9099"
                        fill-opacity="0.9"
                        fill-rule="evenodd"
                        d="M370,78a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                      ></path>
                      <!-- …and 3 more like this (<path class="[object SVGAnimatedString]">) -->
                    </g>
                  </svg>
                </div>
                <div class="leaflet-pane leaflet-shadow-pane"></div>
                <div class="leaflet-pane leaflet-marker-pane"></div>
                <div class="leaflet-pane leaflet-tooltip-pane"></div>
                <!-- …and 1 more like this (<div class="leaflet-pane leaflet-tile-pane">) -->
                <div
                  class="leaflet-proxy leaflet-zoom-animated"
                  style="transform: translate3d(2763.14px, 6423.03px, 0px) scale(32)"
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
                    <span aria-hidden="true">|</span> ©
                    <a href="https://www.mapbox.com/about/maps/">Mapbox</a> ©
                    <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- script type="application/json" removed (523 bytes) --><!-- script type="module" removed (0 bytes) -->
            <div class="esa-card esa-card--padding-compact">
              <div class="esa-card__header">
                <div class="esa-card__header-content">
                  <div class="esa-card__titles">
                    <h3 class="esa-card__title typography-title-sm-strong">Candidate Properties</h3>
                  </div>
                </div>
                <div class="esa-card__actions typography-label-md">
                  <span class="bcn-gchrome__search"
                    ><esa-text-field
                      placeholder="Search candidates…"
                      size="sm"
                      data-stg-search="true"
                    ></esa-text-field
                    ><span data-stg-search-clear="true" class="astro-kspn7qo2" hidden=""
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
                          ></span></button></span></span></span
                  ><span data-stg-clear-filters="true" class="astro-kspn7qo2"
                    ><span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                      ><button class="esa-button__native typography-microcopy-xs" type="button">
                        <span class="esa-button__label">Clear Filters</span>
                      </button></span
                    ></span
                  >
                </div>
              </div>
              <div class="esa-card__body typography-body-md">
                <div class="stg-grid-host" data-stg-host="">
                  <div
                    class="ag-theme-buttonStyle-1 ag-theme-columnDropStyle-2 ag-theme-batchEditStyle-3 ag-theme-checkboxStyle-4 ag-theme-iconSet-5 ag-theme-tabStyle-6 ag-theme-inputStyle-7 ag-theme-columnDropStyle-2 ag-theme-part-8 ag-theme-params-1"
                    style="height: 100%; --ag-internal-row-border-width: 1px"
                  >
                    <div class="ag-measurement-container">
                      <div style="width: var(--ag-list-item-height, 15538px)"></div>
                      <div style="width: var(--ag-row-height, 15538px)"></div>
                      <div style="width: var(--ag-header-height, 15538px)"></div>
                      <div
                        class="ag-measurement-element-border"
                        style="
                          --ag-internal-measurement-border: var(--ag-row-border, solid 15538px);
                        "
                      ></div>
                      <div
                        class="ag-measurement-element-border"
                        style="
                          --ag-internal-measurement-border: var(
                            --ag-pinned-row-border,
                            solid 15538px
                          );
                        "
                      ></div>
                      <div
                        class="ag-measurement-element-border"
                        style="
                          --ag-internal-measurement-border: var(
                            --ag-header-row-border,
                            solid 15538px
                          );
                        "
                      ></div>
                    </div>
                    <div
                      class="ag-aria-description-container"
                      aria-live="polite"
                      aria-relevant="additions text"
                      aria-atomic="true"
                    ></div>
                    <div
                      class="ag-root-wrapper ag-layout-normal ag-ltr"
                      role="presentation"
                      grid-id="1"
                    >
                      <div
                        class="ag-root-wrapper-body ag-layout-normal ag-focus-managed"
                        data-ref="rootWrapperBody"
                        role="presentation"
                      >
                        <div
                          class="ag-tab-guard ag-tab-guard-top"
                          role="presentation"
                          tabindex="0"
                        ></div>
                        <!--AG-GRID-BODY-->
                        <div
                          class="ag-root ag-unselectable ag-layout-normal ag-body-horizontal-content-no-gap"
                          data-ref="eGridRoot"
                          role="grid"
                          aria-colcount="12"
                          aria-rowcount="6"
                        >
                          <!--AG-HEADER-ROOT-->
                          <div
                            class="ag-header ag-focus-managed ag-pivot-off ag-header-allow-overflow"
                            role="presentation"
                            style="height: 49px; min-height: 49px"
                          >
                            <div
                              class="ag-pinned-left-header ag-hidden"
                              role="rowgroup"
                              aria-hidden="true"
                              style="width: 0px; max-width: 0px; min-width: 0px"
                            ></div>
                            <div class="ag-header-viewport" role="rowgroup" tabindex="-1">
                              <div
                                class="ag-header-container"
                                data-ref="eCenterContainer"
                                role="presentation"
                                style="width: 1420px"
                              >
                                <div
                                  class="ag-header-row ag-header-row-column"
                                  role="row"
                                  tabindex="0"
                                  aria-rowindex="1"
                                  style="top: 0px; height: 48px; width: 1420px"
                                >
                                  <div
                                    class="ag-header-cell ag-column-first ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                                    role="columnheader"
                                    col-id="codeName"
                                    aria-colindex="1"
                                    tabindex="-1"
                                    aria-sort="none"
                                    style="
                                      top: 0px;
                                      height: 48px;
                                      width: 150px;
                                      touch-action: none;
                                      left: 0px;
                                    "
                                  >
                                    <div
                                      class="ag-header-cell-resize"
                                      data-ref="eResize"
                                      role="presentation"
                                      aria-hidden="false"
                                      style="touch-action: none"
                                    ></div>
                                    <div
                                      class="ag-header-cell-comp-wrapper"
                                      data-ref="eHeaderCompWrapper"
                                      role="presentation"
                                    >
                                      <div class="ag-cell-label-container" role="presentation">
                                        <span
                                          class="ag-header-icon ag-header-cell-filter-button"
                                          data-ref="eFilterButton"
                                          aria-hidden="true"
                                          ><span
                                            class="ag-icon ag-icon-filter"
                                            role="presentation"
                                            unselectable="on"
                                          ></span
                                        ></span>
                                        <div
                                          class="ag-header-cell-label"
                                          data-ref="eLabel"
                                          role="presentation"
                                        >
                                          <span class="ag-header-cell-text" data-ref="eText"
                                            >Candidate</span
                                          >
                                          <!--AG-SORT-INDICATOR--><span
                                            class="ag-sort-indicator-container"
                                            data-ref="eSortIndicator"
                                          >
                                            <span
                                              class="ag-sort-indicator-icon ag-sort-order ag-hidden"
                                              data-ref="eSortOrder"
                                              aria-hidden="true"
                                            ></span>
                                            <span
                                              class="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden"
                                              data-ref="eSortAsc"
                                              aria-hidden="true"
                                              ><span
                                                class="ag-icon ag-icon-asc"
                                                role="presentation"
                                                unselectable="on"
                                              ></span
                                            ></span>
                                            <span
                                              class="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden"
                                              data-ref="eSortDesc"
                                              aria-hidden="true"
                                              ><span
                                                class="ag-icon ag-icon-desc"
                                                role="presentation"
                                                unselectable="on"
                                              ></span
                                            ></span>
                                            <span
                                              class="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden"
                                              data-ref="eSortMixed"
                                              aria-hidden="true"
                                              ><span
                                                class="ag-icon ag-icon-none"
                                                role="presentation"
                                                unselectable="on"
                                              ></span
                                            ></span>
                                            <span
                                              class="ag-sort-indicator-icon ag-sort-absolute-ascending-icon ag-hidden"
                                              data-ref="eSortAbsoluteAsc"
                                              aria-hidden="true"
                                              ><span
                                                class="ag-icon ag-icon-aasc"
                                                role="presentation"
                                                unselectable="on"
                                              ></span></span
                                            ><!-- …and 2 more like this (<span class="ag-sort-indicator-icon ag-sort-order ag-hidden">) -->
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                                    role="columnheader"
                                    col-id="county"
                                    aria-colindex="2"
                                    tabindex="-1"
                                    aria-sort="none"
                                    style="
                                      top: 0px;
                                      height: 48px;
                                      width: 150px;
                                      touch-action: none;
                                      left: 150px;
                                    "
                                  >
                                    <div
                                      class="ag-header-cell-resize"
                                      data-ref="eResize"
                                      role="presentation"
                                      aria-hidden="false"
                                      style="touch-action: none"
                                    ></div>
                                    <div
                                      class="ag-header-cell-comp-wrapper"
                                      data-ref="eHeaderCompWrapper"
                                      role="presentation"
                                    >
                                      <div class="ag-cell-label-container" role="presentation">
                                        <span
                                          class="ag-header-icon ag-header-cell-filter-button"
                                          data-ref="eFilterButton"
                                          aria-hidden="true"
                                          ><span
                                            class="ag-icon ag-icon-filter"
                                            role="presentation"
                                            unselectable="on"
                                          ></span
                                        ></span>
                                        <div
                                          class="ag-header-cell-label"
                                          data-ref="eLabel"
                                          role="presentation"
                                        >
                                          <span class="ag-header-cell-text" data-ref="eText"
                                            >County</span
                                          >
                                          <!--AG-SORT-INDICATOR--><span
                                            class="ag-sort-indicator-container"
                                            data-ref="eSortIndicator"
                                          >
                                            <span
                                              class="ag-sort-indicator-icon ag-sort-order ag-hidden"
                                              data-ref="eSortOrder"
                                              aria-hidden="true"
                                            ></span>
                                            <span
                                              class="ag-sort-indicator-icon ag-sort-ascending-icon ag-hidden"
                                              data-ref="eSortAsc"
                                              aria-hidden="true"
                                              ><span
                                                class="ag-icon ag-icon-asc"
                                                role="presentation"
                                                unselectable="on"
                                              ></span
                                            ></span>
                                            <span
                                              class="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden"
                                              data-ref="eSortDesc"
                                              aria-hidden="true"
                                              ><span
                                                class="ag-icon ag-icon-desc"
                                                role="presentation"
                                                unselectable="on"
                                              ></span
                                            ></span>
                                            <span
                                              class="ag-sort-indicator-icon ag-sort-mixed-icon ag-hidden"
                                              data-ref="eSortMixed"
                                              aria-hidden="true"
                                              ><span
                                                class="ag-icon ag-icon-none"
                                                role="presentation"
                                                unselectable="on"
                                              ></span
                                            ></span>
                                            <span
                                              class="ag-sort-indicator-icon ag-sort-absolute-ascending-icon ag-hidden"
                                              data-ref="eSortAbsoluteAsc"
                                              aria-hidden="true"
                                              ><span
                                                class="ag-icon ag-icon-aasc"
                                                role="presentation"
                                                unselectable="on"
                                              ></span></span
                                            ><!-- …and 2 more like this (<span class="ag-sort-indicator-icon ag-sort-order ag-hidden">) -->
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <!-- …and 8 more like this (<div class="ag-header-cell ag-column-first ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed">) -->
                                </div>
                              </div>
                            </div>
                            <div
                              class="ag-pinned-right-header ag-hidden"
                              role="rowgroup"
                              aria-hidden="true"
                              style="width: 0px; max-width: 0px; min-width: 0px"
                            ></div>
                          </div>
                          <div
                            class="ag-floating-top ag-invisible"
                            data-ref="eTop"
                            role="presentation"
                            style="min-height: 0px; height: 0px; overflow-y: hidden"
                          >
                            <!--AG-ROW-CONTAINER-->
                            <div
                              class="ag-pinned-left-floating-top ag-hidden"
                              data-ref="eContainer"
                              role="rowgroup"
                              aria-hidden="true"
                              style="width: 0px; max-width: 0px; min-width: 0px"
                            ></div>
                            <!--AG-ROW-CONTAINER-->
                            <div
                              class="ag-viewport ag-floating-top-viewport"
                              data-ref="eViewport"
                              role="rowgroup"
                            >
                              <div
                                class="ag-floating-top-container"
                                data-ref="eContainer"
                                role="presentation"
                                style="width: 1420px"
                              ></div>
                            </div>
                            <!--AG-ROW-CONTAINER-->
                            <div
                              class="ag-pinned-right-floating-top ag-hidden"
                              data-ref="eContainer"
                              role="rowgroup"
                              aria-hidden="true"
                              style="width: 0px; max-width: 0px; min-width: 0px"
                            ></div>
                            <!--AG-ROW-CONTAINER-->
                            <div
                              class="ag-floating-top-full-width-container"
                              data-ref="eContainer"
                              role="rowgroup"
                            ></div>
                          </div>
                          <div
                            class="ag-body ag-layout-normal"
                            data-ref="eBody"
                            role="presentation"
                          >
                            <div
                              class="ag-body-viewport ag-layout-normal ag-row-animation"
                              data-ref="eBodyViewport"
                              role="presentation"
                              style="width: calc(100% + 16px)"
                            >
                              <!--AG-ROW-CONTAINER-->
                              <div
                                class="ag-pinned-left-cols-container ag-hidden"
                                data-ref="eContainer"
                                role="rowgroup"
                                aria-hidden="true"
                                style="height: 220px; width: 0px; max-width: 0px; min-width: 0px"
                              ></div>
                              <!--AG-ROW-CONTAINER-->
                              <div
                                class="ag-viewport ag-center-cols-viewport"
                                data-ref="eViewport"
                                role="rowgroup"
                                style="height: 220px"
                              >
                                <div
                                  class="ag-center-cols-container"
                                  data-ref="eContainer"
                                  role="presentation"
                                  style="width: 1420px; height: 220px"
                                >
                                  <div
                                    role="row"
                                    comp-id="66"
                                    tabindex="0"
                                    row-index="0"
                                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first"
                                    aria-rowindex="2"
                                    row-id="0"
                                    style="transform: translateY(0px); height: 44px"
                                  >
                                    <div
                                      role="gridcell"
                                      comp-id="67"
                                      col-id="codeName"
                                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                      tabindex="-1"
                                      aria-colindex="1"
                                      style="left: 0px; width: 150px"
                                    >
                                      Project Almond
                                    </div>
                                    <div
                                      role="gridcell"
                                      comp-id="68"
                                      col-id="county"
                                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                      tabindex="-1"
                                      aria-colindex="2"
                                      style="left: 150px; width: 150px"
                                    >
                                      Kern County
                                    </div>
                                    <!-- …and 8 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                                  </div>
                                  <div
                                    role="row"
                                    comp-id="76"
                                    tabindex="0"
                                    row-index="1"
                                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                    aria-rowindex="3"
                                    row-id="1"
                                    style="transform: translateY(44px); height: 44px"
                                  >
                                    <div
                                      role="gridcell"
                                      comp-id="77"
                                      col-id="codeName"
                                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                      tabindex="-1"
                                      aria-colindex="1"
                                      style="left: 0px; width: 150px"
                                    >
                                      Project Grape
                                    </div>
                                    <div
                                      role="gridcell"
                                      comp-id="78"
                                      col-id="county"
                                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                      tabindex="-1"
                                      aria-colindex="2"
                                      style="left: 150px; width: 150px"
                                    >
                                      San Joaquin County
                                    </div>
                                    <!-- …and 8 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                                  </div>
                                  <div
                                    role="row"
                                    comp-id="86"
                                    tabindex="0"
                                    row-index="2"
                                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                    aria-rowindex="4"
                                    row-id="2"
                                    style="transform: translateY(88px); height: 44px"
                                  >
                                    <div
                                      role="gridcell"
                                      comp-id="87"
                                      col-id="codeName"
                                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                      tabindex="-1"
                                      aria-colindex="1"
                                      style="left: 0px; width: 150px"
                                    >
                                      Project Strawberry
                                    </div>
                                    <div
                                      role="gridcell"
                                      comp-id="88"
                                      col-id="county"
                                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                      tabindex="-1"
                                      aria-colindex="2"
                                      style="left: 150px; width: 150px"
                                    >
                                      Ventura County
                                    </div>
                                    <!-- …and 8 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                                  </div>
                                  <div
                                    role="row"
                                    comp-id="96"
                                    tabindex="0"
                                    row-index="3"
                                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                    aria-rowindex="5"
                                    row-id="3"
                                    style="transform: translateY(132px); height: 44px"
                                  >
                                    <div
                                      role="gridcell"
                                      comp-id="97"
                                      col-id="codeName"
                                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                      tabindex="-1"
                                      aria-colindex="1"
                                      style="left: 0px; width: 150px"
                                    >
                                      Project Tomato
                                    </div>
                                    <div
                                      role="gridcell"
                                      comp-id="98"
                                      col-id="county"
                                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                      tabindex="-1"
                                      aria-colindex="2"
                                      style="left: 150px; width: 150px"
                                    >
                                      Fresno County
                                    </div>
                                    <!-- …and 8 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                                  </div>
                                  <div
                                    role="row"
                                    comp-id="106"
                                    tabindex="0"
                                    row-index="4"
                                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-last"
                                    aria-rowindex="6"
                                    row-id="4"
                                    style="transform: translateY(176px); height: 44px"
                                  >
                                    <div
                                      role="gridcell"
                                      comp-id="107"
                                      col-id="codeName"
                                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                      tabindex="-1"
                                      aria-colindex="1"
                                      style="left: 0px; width: 150px"
                                    >
                                      Project Garlic
                                    </div>
                                    <div
                                      role="gridcell"
                                      comp-id="108"
                                      col-id="county"
                                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                      tabindex="-1"
```
