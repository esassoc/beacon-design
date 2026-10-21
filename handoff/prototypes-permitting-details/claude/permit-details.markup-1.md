# Permit Details: markup, part 1 of 3

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
            <a href="/beacon-design/prototypes/permitting-details" class="nav-sublink active"
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
            ><a class="breadcrumb-item" href="/beacon-design/prototypes/permitting-dashboard"
              >Permit Dashboard</a
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
            ><span class="breadcrumb-item" aria-current="page">Permit Details</span>
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
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <!-- …and 3 more like this (<path>) -->
                </svg></span
              >Permit Details
            </h1>
            <div>
              <span
                class="bcn-status-chip"
                data-status="phase"
                style="--_chip: var(--st-phase, #7b5ea7)"
                ><span class="bcn-status-chip__dot"></span
                ><span class="bcn-status-chip__label">Permitting</span></span
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
        </section>
        <section class="page-layout__content">
          <div class="esa-card esa-card--padding-compact">
            <div class="esa-card__header">
              <div class="esa-card__header-content">
                <div class="esa-card__titles">
                  <h3 class="esa-card__title typography-title-sm-strong">Permit Tracking</h3>
                </div>
              </div>
              <div class="esa-card__actions typography-label-md">
                <span class="bcn-gchrome__search"
                  ><esa-text-field
                    placeholder="Search permits…"
                    size="sm"
                    data-pt-search="true"
                  ></esa-text-field
                  ><span data-pt-search-clear="true" class="astro-kspn7qo2" hidden=""
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
                ><span data-pt-clear-filters="true" class="astro-kspn7qo2"
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
              <div class="pt-grid-host" data-pt-host="">
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
                        class="ag-root ag-unselectable ag-layout-normal ag-body-horizontal-content-no-gap ag-body-vertical-content-no-gap"
                        data-ref="eGridRoot"
                        role="grid"
                        aria-colcount="7"
                        aria-rowcount="12"
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
                              style="width: 1250px"
                            >
                              <div
                                class="ag-header-row ag-header-row-column"
                                role="row"
                                tabindex="0"
                                aria-rowindex="1"
                                style="top: 0px; height: 48px; width: 1250px"
                              >
                                <div
                                  class="ag-header-cell ag-column-first ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                                  role="columnheader"
                                  col-id="agency"
                                  aria-colindex="1"
                                  tabindex="-1"
                                  aria-sort="none"
                                  style="
                                    top: 0px;
                                    height: 48px;
                                    width: 220px;
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
                                          >Agency</span
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
                                  col-id="level"
                                  aria-colindex="2"
                                  tabindex="-1"
                                  aria-sort="none"
                                  style="
                                    top: 0px;
                                    height: 48px;
                                    width: 110px;
                                    touch-action: none;
                                    left: 220px;
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
                                          >Level</span
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
                                  class="ag-header-cell ag-column-last ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                                  role="columnheader"
                                  col-id="notes"
                                  aria-colindex="7"
                                  tabindex="-1"
                                  aria-sort="none"
                                  style="
                                    top: 0px;
                                    height: 48px;
                                    width: 220px;
                                    touch-action: none;
                                    left: 1030px;
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
                                          >Notes</span
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
                              style="width: 1250px"
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
                              style="height: 795px; width: 0px; max-width: 0px; min-width: 0px"
                            ></div>
                            <!--AG-ROW-CONTAINER-->
                            <div
                              class="ag-viewport ag-center-cols-viewport"
                              data-ref="eViewport"
                              role="rowgroup"
                              style="height: 795px"
                            >
                              <div
                                class="ag-center-cols-container"
                                data-ref="eContainer"
                                role="presentation"
                                style="width: 1250px; height: 795px"
                              >
                                <div
                                  role="row"
                                  comp-id="60"
                                  tabindex="0"
                                  row-index="0"
                                  class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first"
                                  aria-rowindex="2"
                                  row-id="swppp"
                                  style="transform: translateY(0px); height: 53px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="61"
                                    col-id="agency"
                                    tabindex="-1"
                                    class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-first"
                                    aria-colindex="1"
                                    style="left: 0px; width: 220px"
                                  >
                                    <div class="ag-cell-wrapper" role="presentation">
                                      <span class="ag-cell-value" role="presentation"
                                        >State Water Resources Control Board</span
                                      >
                                    </div>
                                  </div>
                                  <div
                                    role="gridcell"
                                    comp-id="62"
                                    col-id="level"
                                    tabindex="-1"
                                    class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text"
                                    aria-colindex="2"
                                    style="left: 220px; width: 110px"
                                  >
                                    <div class="ag-cell-wrapper" role="presentation">
                                      <span class="ag-cell-value" role="presentation">State</span>
                                    </div>
                                  </div>
                                  <div
                                    role="gridcell"
                                    comp-id="67"
                                    col-id="notes"
                                    tabindex="-1"
                                    class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-last"
                                    aria-colindex="7"
                                    style="left: 1030px; width: 220px"
                                  >
                                    <div class="ag-cell-wrapper" role="presentation">
                                      <span class="ag-cell-value" role="presentation"
                                        >Coverage required before soil disturbance.</span
                                      >
                                    </div>
                                  </div>
                                  <!-- …and 4 more like this (<div class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-first">) -->
                                </div>
                                <div
                                  role="row"
                                  comp-id="68"
                                  tabindex="0"
                                  row-index="1"
                                  class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                  aria-rowindex="3"
                                  row-id="cup-site-plan"
                                  style="transform: translateY(53px); height: 71px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="69"
                                    col-id="agency"
                                    tabindex="-1"
                                    class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-first"
                                    aria-colindex="1"
                                    style="left: 0px; width: 220px"
                                  >
                                    <div class="ag-cell-wrapper" role="presentation">
                                      <span class="ag-cell-value" role="presentation"
                                        >Kern County Planning and Natural Resources Dept.</span
                                      >
                                    </div>
                                  </div>
                                  <div
                                    role="gridcell"
                                    comp-id="70"
                                    col-id="level"
                                    tabindex="-1"
                                    class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text"
                                    aria-colindex="2"
                                    style="left: 220px; width: 110px"
                                  >
                                    <div class="ag-cell-wrapper" role="presentation">
                                      <span class="ag-cell-value" role="presentation">Local</span>
                                    </div>
                                  </div>
                                  <div
                                    role="gridcell"
                                    comp-id="75"
                                    col-id="notes"
                                    tabindex="-1"
                                    class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-last"
                                    aria-colindex="7"
                                    style="left: 1030px; width: 220px"
                                  >
                                    <div class="ag-cell-wrapper" role="presentation">
                                      <span class="ag-cell-value" role="presentation"
                                        >Confirm CUP path and conditions at pre-application
                                        meeting.</span
                                      >
                                    </div>
                                  </div>
                                  <!-- …and 4 more like this (<div class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-first">) -->
                                </div>
                                <div
                                  role="row"
                                  comp-id="76"
                                  tabindex="0"
                                  row-index="2"
                                  class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                  aria-rowindex="4"
                                  row-id="streambed-alteration"
                                  style="transform: translateY(124px); height: 53px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="77"
                                    col-id="agency"
                                    tabindex="-1"
```
