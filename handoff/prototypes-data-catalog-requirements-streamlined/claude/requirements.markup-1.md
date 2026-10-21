# Requirements: markup, part 1 of 2

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
        ><span class="project-switcher__name">Select a Project</span
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
          <li class="nav-item"><a href="#dc-projects" class="nav-sublink">Projects</a></li>
          <li class="nav-item">
            <a href="#dc-source-documents" class="nav-sublink">Source Documents</a>
          </li>
          <!-- …and 4 more like this (<li class="nav-item">) -->
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
            ><a class="breadcrumb-item" href="#data-catalog">Data Catalog</a
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
            ><span class="breadcrumb-item" aria-current="page">Requirements</span>
          </div>
        </nav>
      </section>
      <div class="page-layout__container">
        <section class="page-layout__title">
          <div class="page-layout__title-main"><h1>Requirements</h1></div>
        </section>
        <section class="page-layout__content">
          <div class="grid-header">
            <div class="grid-header__filter">
              <esa-text-field id="dc-search" placeholder="Search grid…" size="sm"></esa-text-field
              ><span id="dc-search-clear" hidden=""
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
            <span id="dc-clear-filters"
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Clear Filters</span>
                </button></span
              ></span
            >
          </div>
          <div id="dc-grid" class="tracker-grid">
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
                  style="--ag-internal-measurement-border: var(--ag-row-border, solid 15538px)"
                ></div>
                <div
                  class="ag-measurement-element-border"
                  style="
                    --ag-internal-measurement-border: var(--ag-pinned-row-border, solid 15538px);
                  "
                ></div>
                <div
                  class="ag-measurement-element-border"
                  style="
                    --ag-internal-measurement-border: var(--ag-header-row-border, solid 15538px);
                  "
                ></div>
              </div>
              <div
                class="ag-aria-description-container"
                aria-live="polite"
                aria-relevant="additions text"
                aria-atomic="true"
              ></div>
              <div class="ag-root-wrapper ag-layout-normal ag-ltr" role="presentation" grid-id="1">
                <div
                  class="ag-root-wrapper-body ag-layout-normal ag-focus-managed"
                  data-ref="rootWrapperBody"
                  role="presentation"
                >
                  <div class="ag-tab-guard ag-tab-guard-top" role="presentation" tabindex="0"></div>
                  <!--AG-GRID-BODY-->
                  <div
                    class="ag-root ag-unselectable ag-layout-normal ag-body-horizontal-content-no-gap ag-body-vertical-content-no-gap"
                    data-ref="eGridRoot"
                    role="grid"
                    aria-colcount="10"
                    aria-rowcount="131"
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
                          style="width: 2170px"
                        >
                          <div
                            class="ag-header-row ag-header-row-column"
                            role="row"
                            tabindex="0"
                            aria-rowindex="1"
                            style="top: 0px; height: 48px; width: 2170px"
                          >
                            <div
                              class="ag-header-cell ag-column-first ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                              role="columnheader"
                              col-id="name"
                              aria-colindex="1"
                              tabindex="-1"
                              aria-sort="none"
                              style="
                                top: 0px;
                                height: 48px;
                                width: 360px;
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
                                    <span class="ag-header-cell-text" data-ref="eText">Name</span>
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
                              col-id="project"
                              aria-colindex="2"
                              tabindex="-1"
                              aria-sort="none"
                              style="
                                top: 0px;
                                height: 48px;
                                width: 210px;
                                touch-action: none;
                                left: 360px;
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
                                      >Project</span
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
                            <!-- …and 4 more like this (<div class="ag-header-cell ag-column-first ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed">) -->
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
                      style="min-height: 0px; height: 0px; overflow-y: scroll"
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
                          style="width: 2170px"
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
                    <div class="ag-body ag-layout-normal" data-ref="eBody" role="presentation">
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
                          style="height: 5720px; width: 0px; max-width: 0px; min-width: 0px"
                        ></div>
                        <!--AG-ROW-CONTAINER-->
                        <div
                          class="ag-viewport ag-center-cols-viewport"
                          data-ref="eViewport"
                          role="rowgroup"
                          style="height: 5720px"
                        >
                          <div
                            class="ag-center-cols-container"
                            data-ref="eContainer"
                            role="presentation"
                            style="width: 2170px; height: 5720px"
                          >
                            <div
                              role="row"
                              comp-id="57"
                              tabindex="0"
                              row-index="0"
                              class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first"
                              aria-rowindex="2"
                              row-id="0"
                              style="transform: translateY(0px); height: 44px"
                            >
                              <div
                                role="gridcell"
                                comp-id="58"
                                col-id="name"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 360px"
                              >
                                <a class="bcn-grid-name" href="#">Develop WEAP Training</a>
                              </div>
                              <div
                                role="gridcell"
                                comp-id="59"
                                col-id="project"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                tabindex="-1"
                                aria-colindex="2"
                                style="left: 360px; width: 210px"
                              >
                                <a class="bcn-grid-name" href="#">3600 Alameda Avenue Project</a>
                              </div>
                              <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                            </div>
                            <div
                              role="row"
                              comp-id="64"
                              tabindex="0"
                              row-index="1"
                              class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="3"
                              row-id="1"
                              style="transform: translateY(44px); height: 44px"
                            >
                              <div
                                role="gridcell"
                                comp-id="65"
                                col-id="name"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 360px"
                              >
                                <a class="bcn-grid-name" href="#"
                                  >Provide WEAP Training to all Project personnel</a
                                >
                              </div>
                              <div
                                role="gridcell"
                                comp-id="66"
                                col-id="project"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                tabindex="-1"
                                aria-colindex="2"
                                style="left: 360px; width: 210px"
                              >
                                <a class="bcn-grid-name" href="#">3600 Alameda Avenue Project</a>
                              </div>
                              <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                            </div>
                            <div
                              role="row"
                              comp-id="71"
                              tabindex="0"
                              row-index="2"
                              class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="4"
                              row-id="2"
                              style="transform: translateY(88px); height: 44px"
                            >
                              <div
                                role="gridcell"
                                comp-id="72"
                                col-id="name"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 360px"
                              >
                                <a class="bcn-grid-name" href="#"
                                  >If bird nests are found, establish no-disturbance buffers
                                  zones</a
                                >
                              </div>
                              <div
                                role="gridcell"
                                comp-id="73"
                                col-id="project"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                tabindex="-1"
                                aria-colindex="2"
                                style="left: 360px; width: 210px"
                              >
                                <a class="bcn-grid-name" href="#">3600 Alameda Avenue Project</a>
                              </div>
                              <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                            </div>
                            <div
                              role="row"
                              comp-id="78"
                              tabindex="0"
                              row-index="3"
                              class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="5"
                              row-id="3"
                              style="transform: translateY(132px); height: 44px"
                            >
                              <div
                                role="gridcell"
                                comp-id="79"
                                col-id="name"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 360px"
                              >
                                <a class="bcn-grid-name" href="#"
                                  >If work must occur within established no-disturbance buffer
                                  zones</a
                                >
                              </div>
                              <div
                                role="gridcell"
                                comp-id="80"
                                col-id="project"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                tabindex="-1"
                                aria-colindex="2"
                                style="left: 360px; width: 210px"
                              >
                                <a class="bcn-grid-name" href="#">3600 Alameda Avenue Project</a>
                              </div>
                              <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                            </div>
                            <div
                              role="row"
                              comp-id="85"
                              tabindex="0"
                              row-index="4"
                              class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="6"
                              row-id="4"
                              style="transform: translateY(176px); height: 44px"
                            >
                              <div
                                role="gridcell"
                                comp-id="86"
                                col-id="name"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 360px"
                              >
                                <a class="bcn-grid-name" href="#"
                                  >Pre-construction survey for nesting raptors and other migratory
                                  birds during nesting season</a
                                >
                              </div>
                              <div
                                role="gridcell"
                                comp-id="87"
                                col-id="project"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                tabindex="-1"
                                aria-colindex="2"
                                style="left: 360px; width: 210px"
                              >
                                <a class="bcn-grid-name" href="#">3600 Alameda Avenue Project</a>
                              </div>
                              <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                            </div>
                            <div
                              role="row"
                              comp-id="92"
                              tabindex="0"
                              row-index="5"
                              class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="7"
                              row-id="5"
                              style="transform: translateY(220px); height: 44px"
                            >
                              <div
                                role="gridcell"
                                comp-id="93"
                                col-id="name"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 360px"
                              >
                                <a class="bcn-grid-name" href="#"
                                  >Report of findings for construction within any no-disturbance
                                  buffer zone</a
                                >
                              </div>
                              <div
                                role="gridcell"
                                comp-id="94"
                                col-id="project"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                tabindex="-1"
                                aria-colindex="2"
                                style="left: 360px; width: 210px"
                              >
                                <a class="bcn-grid-name" href="#">3600 Alameda Avenue Project</a>
                              </div>
                              <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                            </div>
                            <div
                              role="row"
                              comp-id="99"
                              tabindex="0"
                              row-index="6"
                              class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="8"
                              row-id="6"
                              style="transform: translateY(264px); height: 44px"
                            >
                              <div
                                role="gridcell"
                                comp-id="100"
                                col-id="name"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 360px"
                              >
                                <a class="bcn-grid-name" href="#"
                                  >Pre-construction habitat assessment of the Project area to
                                  characterize potential bat habitat and identify potentially active
                                  roost sites</a
                                >
                              </div>
                              <div
                                role="gridcell"
                                comp-id="101"
                                col-id="project"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                tabindex="-1"
                                aria-colindex="2"
                                style="left: 360px; width: 210px"
                              >
                                <a class="bcn-grid-name" href="#">3600 Alameda Avenue Project</a>
                              </div>
                              <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                            </div>
                            <div
                              role="row"
                              comp-id="106"
                              tabindex="0"
                              row-index="7"
                              class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="9"
                              row-id="7"
                              style="transform: translateY(308px); height: 44px"
                            >
                              <div
                                role="gridcell"
                                comp-id="107"
                                col-id="name"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 360px"
                              >
                                <a class="bcn-grid-name" href="#"
                                  >If active bat roosts or evidence of roosting is identified during
                                  pre-construction surveys, establish no-disturbance buffer</a
                                >
                              </div>
                              <div
                                role="gridcell"
                                comp-id="108"
                                col-id="project"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                tabindex="-1"
                                aria-colindex="2"
                                style="left: 360px; width: 210px"
                              >
                                <a class="bcn-grid-name" href="#">3600 Alameda Avenue Project</a>
                              </div>
                              <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                            </div>
                            <div
                              role="row"
                              comp-id="113"
                              tabindex="0"
                              row-index="8"
                              class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="10"
                              row-id="8"
                              style="transform: translateY(352px); height: 44px"
                            >
                              <div
                                role="gridcell"
                                comp-id="114"
                                col-id="name"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 360px"
                              >
                                <a class="bcn-grid-name" href="#"
                                  >Measures if potential bat roosting habitat or potentially active
                                  bat roosts are identified during the habitat assessment</a
                                >
                              </div>
                              <div
                                role="gridcell"
                                comp-id="115"
                                col-id="project"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                tabindex="-1"
                                aria-colindex="2"
                                style="left: 360px; width: 210px"
                              >
                                <a class="bcn-grid-name" href="#">3600 Alameda Avenue Project</a>
                              </div>
                              <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                            </div>
                            <div
                              role="row"
                              comp-id="120"
                              tabindex="0"
                              row-index="9"
                              class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="11"
                              row-id="9"
                              style="transform: translateY(396px); height: 44px"
                            >
                              <div
                                role="gridcell"
                                comp-id="121"
                                col-id="name"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 360px"
                              >
                                <a class="bcn-grid-name" href="#"
                                  >Pre-construction survey if avoidance or bat maternity roosting
                                  season and winter torpor is infeasible</a
                                >
                              </div>
                              <div
                                role="gridcell"
                                comp-id="122"
                                col-id="project"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                tabindex="-1"
                                aria-colindex="2"
                                style="left: 360px; width: 210px"
                              >
                                <a class="bcn-grid-name" href="#">3600 Alameda Avenue Project</a>
                              </div>
                              <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                            </div>
                            <div
                              role="row"
                              comp-id="127"
                              tabindex="0"
                              row-index="10"
                              class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="12"
                              row-id="10"
```
