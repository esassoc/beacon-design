# Science Plan: markup, part 1 of 3

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
        ><span class="project-switcher__name">Delta Conveyance</span
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
                d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
              ></path>
              <path d="M6.453 15h11.094"></path>
              <path d="M8.5 2h7"></path></svg></span
          ><span class="nav-section__title">Studies</span
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
            <a href="#science-plan" class="nav-sublink active">Science Plan</a>
          </li>
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
            <a href="#project-tracking" class="nav-sublink">Project Tracking</a>
          </li>
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
            <a href="#monitoring-portal" class="nav-sublink">Monitoring Portal</a>
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
            ><a class="breadcrumb-item" href="#project">Delta Conveyance</a
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
            ><a class="breadcrumb-item" href="#studies">Studies</a
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
            ><span class="breadcrumb-item" aria-current="page">Science Plan</span>
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
                    d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
                  ></path>
                  <path d="M6.453 15h11.094"></path>
                  <path d="M8.5 2h7"></path></svg></span
              >Science Plan
            </h1>
          </div>
          <div class="page-layout__utilities">
            <div class="bcn-fs-utils">
              <span id="fs-generate"
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" x2="12" y1="15" y2="3"></line></svg></span
                    ><span class="esa-button__label">Generate outputs</span>
                  </button></span
                ></span
              >
            </div>
          </div>
        </section>
        <section class="page-layout__content">
          <div class="bcn-filterbar">
            <div class="bcn-filterbar__top">
              <div class="bcn-filterbar__group">
                <span class="bcn-filterbar__label">View</span
                ><esa-button-toggle id="fs-views" value="timeline" size="md"></esa-button-toggle>
              </div>
              <div class="bcn-filterbar__group" id="fs-sort-group">
                <span class="bcn-filterbar__label">Arrange</span
                ><esa-button-toggle id="fs-sort" value="date" size="md"></esa-button-toggle>
              </div>
              <div class="bcn-filterbar__search">
                <esa-text-field
                  id="fs-search"
                  placeholder="Search studies…"
                  size="md"
                ></esa-text-field
                ><span id="fs-search-clear" hidden=""
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
                  id="flt-category"
                  label="Category"
                  multiple=""
                  size="sm"
                ></esa-filter-dropdown
                ><esa-filter-dropdown
                  id="flt-lead"
                  label="DCP Lead"
                  multiple=""
                  size="sm"
                ></esa-filter-dropdown
                ><!-- …and 3 more like this (<esa-filter-dropdown>) -->
              </div>
              <span id="fs-clear-filters" class="bcn-filterbar__clear"
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
                  ><span class="esa-filter-clear-button__label">Clear all</span></button
                ><!-- script type="module" removed (173 bytes) --></span
              >
            </div>
          </div>
          <div class="bcn-view-pane" id="view-grid" hidden="">
            <div id="fs-grid" class="fs-grid">
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
                      class="ag-root ag-unselectable ag-layout-normal ag-body-vertical-content-no-gap ag-body-horizontal-content-no-gap"
                      data-ref="eGridRoot"
                      role="grid"
                      aria-colcount="10"
                      aria-rowcount="37"
                    >
                      <!--AG-HEADER-ROOT-->
                      <div
                        class="ag-header ag-focus-managed ag-pivot-off ag-header-allow-overflow"
                        role="presentation"
                        style="height: 49px; min-height: 49px"
                      >
                        <div
                          class="ag-pinned-left-header"
                          role="rowgroup"
                          style="width: 110px; max-width: 110px; min-width: 110px"
                        >
                          <div
                            class="ag-header-row ag-header-row-column"
                            role="row"
                            tabindex="0"
                            aria-rowindex="1"
                            style="top: 0px; height: 48px; width: 110px"
                          >
                            <div
                              class="ag-header-cell ag-column-first ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                              role="columnheader"
                              col-id="coaNumber"
                              aria-colindex="1"
                              tabindex="-1"
                              aria-sort="none"
                              style="
                                top: 0px;
                                height: 48px;
                                width: 110px;
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
                                <div
                                  class="ag-cell-label-container ag-header-cell-sorted-none"
                                  role="presentation"
                                >
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
                                    <span class="ag-header-cell-text" data-ref="eText">COA</span>
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
                          </div>
                        </div>
                        <div class="ag-header-viewport" role="rowgroup" tabindex="-1">
                          <div
                            class="ag-header-container"
                            data-ref="eCenterContainer"
                            role="presentation"
                            style="width: 2050px"
                          >
                            <div
                              class="ag-header-row ag-header-row-column"
                              role="row"
                              tabindex="0"
                              aria-rowindex="1"
                              style="top: 0px; height: 48px; width: 2050px"
                            >
                              <div
                                class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                                role="columnheader"
                                col-id="name"
                                aria-colindex="2"
                                tabindex="-1"
                                aria-sort="none"
                                style="
                                  top: 0px;
                                  height: 48px;
                                  width: 320px;
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
                                        >Study Name</span
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
                        style="min-height: 0px; height: 0px"
                      >
                        <!--AG-ROW-CONTAINER-->
                        <div
                          class="ag-pinned-left-floating-top"
                          data-ref="eContainer"
                          role="rowgroup"
                          aria-hidden="false"
                          style="width: 110px; max-width: 110px; min-width: 110px"
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
                            style="width: 2050px"
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
                          class="ag-body-viewport ag-layout-normal ag-row-no-animation"
                          data-ref="eBodyViewport"
                          role="presentation"
                        >
                          <!--AG-ROW-CONTAINER-->
                          <div
                            class="ag-pinned-left-cols-container"
                            data-ref="eContainer"
                            role="rowgroup"
                            aria-hidden="false"
                            style="height: 1512px; width: 110px; max-width: 110px; min-width: 110px"
                          >
                            <div
                              role="row"
                              comp-id="46"
                              tabindex="0"
                              row-index="0"
                              class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first"
                              aria-rowindex="2"
                              row-id="0"
                              style="transform: translateY(0px); height: 42px"
                            >
                              <div
                                role="gridcell"
                                comp-id="47"
                                col-id="coaNumber"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 110px"
                              >
                                <a class="bcn-grid-name" href="#">10.18.3</a>
                              </div>
                            </div>
                            <div
                              role="row"
                              comp-id="48"
                              tabindex="0"
                              row-index="1"
                              class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="3"
                              row-id="1"
                              style="transform: translateY(42px); height: 42px"
                            >
                              <div
                                role="gridcell"
                                comp-id="49"
                                col-id="coaNumber"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 110px"
                              >
                                <a class="bcn-grid-name" href="#">10.19.1</a>
                              </div>
                            </div>
                            <div
                              role="row"
                              comp-id="50"
                              tabindex="0"
                              row-index="2"
                              class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="4"
                              row-id="2"
                              style="transform: translateY(84px); height: 42px"
                            >
                              <div
                                role="gridcell"
                                comp-id="51"
                                col-id="coaNumber"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 110px"
                              >
                                <a class="bcn-grid-name" href="#">10.19.2</a>
                              </div>
                            </div>
                            <div
                              role="row"
                              comp-id="52"
                              tabindex="0"
                              row-index="3"
                              class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="5"
                              row-id="3"
                              style="transform: translateY(126px); height: 42px"
                            >
                              <div
                                role="gridcell"
                                comp-id="53"
                                col-id="coaNumber"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 110px"
                              >
                                <a class="bcn-grid-name" href="#">10.19.3</a>
                              </div>
                            </div>
                            <div
                              role="row"
                              comp-id="54"
                              tabindex="0"
                              row-index="4"
                              class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="6"
                              row-id="4"
                              style="transform: translateY(168px); height: 42px"
                            >
                              <div
                                role="gridcell"
                                comp-id="55"
                                col-id="coaNumber"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 110px"
                              >
                                <a class="bcn-grid-name" href="#">10.20.1</a>
                              </div>
                            </div>
                            <div
                              role="row"
                              comp-id="56"
                              tabindex="0"
                              row-index="5"
                              class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="7"
                              row-id="5"
                              style="transform: translateY(210px); height: 42px"
                            >
                              <div
                                role="gridcell"
                                comp-id="57"
                                col-id="coaNumber"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 110px"
                              >
                                <a class="bcn-grid-name" href="#">10.20.2</a>
                              </div>
                            </div>
                            <div
                              role="row"
                              comp-id="58"
                              tabindex="0"
                              row-index="6"
                              class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="8"
                              row-id="6"
                              style="transform: translateY(252px); height: 42px"
                            >
                              <div
                                role="gridcell"
                                comp-id="59"
                                col-id="coaNumber"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 110px"
                              >
                                <a class="bcn-grid-name" href="#">10.20.3</a>
                              </div>
                            </div>
                            <div
                              role="row"
                              comp-id="60"
                              tabindex="0"
                              row-index="7"
                              class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="9"
                              row-id="7"
                              style="transform: translateY(294px); height: 42px"
                            >
                              <div
                                role="gridcell"
                                comp-id="61"
                                col-id="coaNumber"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 110px"
                              >
                                <a class="bcn-grid-name" href="#">10.20.4</a>
                              </div>
                            </div>
                            <div
                              role="row"
                              comp-id="62"
                              tabindex="0"
                              row-index="8"
                              class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="10"
                              row-id="8"
                              style="transform: translateY(336px); height: 42px"
                            >
                              <div
                                role="gridcell"
                                comp-id="63"
                                col-id="coaNumber"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 110px"
                              >
                                <a class="bcn-grid-name" href="#">10.20.5</a>
                              </div>
                            </div>
                            <div
                              role="row"
                              comp-id="64"
                              tabindex="0"
                              row-index="9"
                              class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                              aria-rowindex="11"
                              row-id="9"
                              style="transform: translateY(378px); height: 42px"
                            >
                              <div
                                role="gridcell"
                                comp-id="65"
                                col-id="coaNumber"
                                class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                                tabindex="-1"
                                aria-colindex="1"
                                style="left: 0px; width: 110px"
                              >
```
