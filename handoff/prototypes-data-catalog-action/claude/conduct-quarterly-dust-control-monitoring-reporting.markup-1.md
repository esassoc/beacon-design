# Conduct Quarterly Dust-Control Monitoring & Reporting: markup, part 1 of 2

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
          <!-- …and 5 more like this (<li class="nav-item">) -->
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
            ><a class="breadcrumb-item" href="/beacon-design/prototypes/data-catalog-actions"
              >Actions</a
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
            ><span class="breadcrumb-item" aria-current="page"
              >Conduct Quarterly Dust-Control Monitoring &amp; Reporting</span
            >
          </div>
        </nav>
      </section>
      <div class="page-layout__container">
        <section class="page-layout__title">
          <div class="page-layout__title-main">
            <h1>Conduct Quarterly Dust-Control Monitoring &amp; Reporting</h1>
          </div>
        </section>
        <section class="page-layout__content">
          <div class="bcn-action">
            <!-- Identity header — tracker-modal treatment: commitment badge on top, decorative
           name as H1, neutral type badge trailing. Edit opens the upsert modal. -->
            <header class="bcn-action__head">
              <div class="bcn-action__identity">
                <span class="bcn-action__badge bcn-action__badge--commitment">SCA AIR-1</span>
                <div class="bcn-action__title-row">
                  <h1 class="bcn-action__title">
                    Conduct Quarterly Dust-Control Monitoring &amp; Reporting
                  </h1>
                  <span class="bcn-action__badge bcn-action__badge--type">Monitoring</span>
                </div>
              </div>
              <div class="bcn-action__head-actions">
                <span id="edit-action"
                  ><span
                    class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
                    ><button class="esa-button__native typography-microcopy-md" type="button">
                      <span class="esa-button__label"
                        ><span class="bcn-btn-ico"
                          ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                            ><svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              focusable="false"
                            >
                              <path
                                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                              ></path>
                              <path d="m15 5 4 4"></path></svg></span
                          >Edit action</span
                        ></span
                      >
                    </button></span
                  ></span
                >
              </div>
            </header>
            <!-- Two-column body -->
            <div class="bcn-action__body">
              <!-- Main -->
              <div class="bcn-action__main">
                <section class="bcn-action__section">
                  <h2 class="bcn-section-title">
                    Requirements
                    <span
                      class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">2</span></span
                    >
                  </h2>
                  <ul class="bcn-req-read">
                    <li class="bcn-req-read__row">
                      <span class="bcn-req-read__badge">SCA AIR-1</span
                      ><a class="bcn-req-read__name" href="#data-catalog/requirements"
                        >Dust control measures - complaints</a
                      >
                    </li>
                    <li class="bcn-req-read__row">
                      <span class="bcn-req-read__badge">SCA AIR-1</span
                      ><a class="bcn-req-read__name" href="#data-catalog/requirements"
                        >Dust control measures - simultaneous activities</a
                      >
                    </li>
                  </ul>
                </section>
                <section class="bcn-action__section">
                  <h2 class="bcn-section-title">Action Text</h2>
                  <p class="bcn-prose">
                    Monitor construction-phase fugitive-dust controls at each active work area per
                    the project dust-control plan, log visible-dust observations and corrective
                    actions, and compile the quarterly dust-control report for the air district.
                  </p>
                </section>
                <section class="bcn-action__section bcn-action__section--evidence">
                  <h2 class="bcn-section-title">Evidence of Compliance</h2>
                  <div class="bcn-subfield">
                    <span class="bcn-subfield__label">Expected evidence</span>
                    <p class="bcn-prose">
                      Quarterly dust-control monitoring log (PDF) with visible-dust observations and
                      corrective actions.
                    </p>
                  </div>
                  <div class="bcn-subfield">
                    <span class="bcn-subfield__label">Reference Files</span
                    ><esa-file-list id="ref-files" downloadable=""></esa-file-list>
                  </div>
                </section>
              </div>
              <!-- Rail -->
              <aside class="bcn-action__rail">
                <details class="esa-collapsible" open="">
                  <summary class="esa-collapsible__summary typography-label-sm-strong">
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path></svg></span
                    ><span class="esa-collapsible__title">Details</span>
                  </summary>
                  <div class="esa-collapsible__body typography-body-md">
                    <div class="bcn-key-value" data-size="md" data-layout="stack">
                      <span class="bcn-key-value__key">Type</span
                      ><span class="bcn-key-value__val">Monitoring</span>
                    </div>
                    <div class="bcn-key-value" data-size="md" data-layout="stack">
                      <span class="bcn-key-value__key">Responsible Party</span
                      ><span class="bcn-key-value__val">QSP / Inspector</span>
                    </div>
                    <!-- …and 2 more like this (<div class="bcn-key-value">) -->
                  </div>
                </details>
                <details class="esa-collapsible" open="">
                  <summary class="esa-collapsible__summary typography-label-sm-strong">
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline></svg></span
                    ><span class="esa-collapsible__title">Timing</span>
                  </summary>
                  <div class="esa-collapsible__body typography-body-md">
                    <div class="bcn-key-value" data-size="md" data-layout="stack">
                      <span class="bcn-key-value__key">Frequency</span
                      ><span class="bcn-key-value__val">Recurring</span>
                    </div>
                    <div class="bcn-key-value" data-size="md" data-layout="stack">
                      <span class="bcn-key-value__key">Deadline</span
                      ><span class="bcn-key-value__val">Every 3 months, after milestone</span>
                    </div>
                    <div class="bcn-key-value" data-size="md" data-layout="stack">
                      <span class="bcn-key-value__key">Milestone</span
                      ><span class="bcn-key-value__val">Building Permit</span>
                    </div>
                  </div>
                </details>
                <!-- …and 2 more like this (<details class="esa-collapsible">) -->
              </aside>
            </div>
            <!-- Tracked Actions (full width) — the materialized per-component instances. -->
            <section class="bcn-action__impl">
              <h2 class="bcn-section-title">
                Tracked Actions
                <span
                  class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">4</span></span
                >
              </h2>
              <div id="impl-grid" class="bcn-impl-grid">
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
                    class="ag-root-wrapper ag-layout-auto-height ag-ltr"
                    role="presentation"
                    grid-id="1"
                  >
                    <div
                      class="ag-root-wrapper-body ag-layout-auto-height ag-focus-managed"
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
                        class="ag-root ag-unselectable ag-layout-auto-height ag-body-vertical-content-no-gap ag-body-horizontal-content-no-gap"
                        data-ref="eGridRoot"
                        role="grid"
                        aria-colcount="5"
                        aria-rowcount="5"
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
                              style="width: 934px"
                            >
                              <div
                                class="ag-header-row ag-header-row-column"
                                role="row"
                                tabindex="0"
                                aria-rowindex="1"
                                style="top: 0px; height: 48px; width: 934px"
                              >
                                <div
                                  class="ag-header-cell ag-column-first ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                                  role="columnheader"
                                  col-id="component"
                                  aria-colindex="1"
                                  tabindex="-1"
                                  aria-sort="none"
                                  style="
                                    top: 0px;
                                    height: 48px;
                                    width: 232px;
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
                                      <div
                                        class="ag-header-cell-label"
                                        data-ref="eLabel"
                                        role="presentation"
                                      >
                                        <span class="ag-header-cell-text" data-ref="eText"
                                          >Component</span
                                        >
                                        <span
                                          class="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden"
                                          data-ref="eFilter"
                                          aria-hidden="true"
                                          ><span
                                            class="ag-icon ag-icon-filter"
                                            role="presentation"
                                            unselectable="on"
                                          ></span
                                        ></span>
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
                                  col-id="due"
                                  aria-colindex="2"
                                  tabindex="-1"
                                  aria-sort="none"
                                  style="
                                    top: 0px;
                                    height: 48px;
                                    width: 160px;
                                    touch-action: none;
                                    left: 232px;
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
                                      <div
                                        class="ag-header-cell-label"
                                        data-ref="eLabel"
                                        role="presentation"
                                      >
                                        <span class="ag-header-cell-text" data-ref="eText"
                                          >Due Date</span
                                        >
                                        <span
                                          class="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden"
                                          data-ref="eFilter"
                                          aria-hidden="true"
                                          ><span
                                            class="ag-icon ag-icon-filter"
                                            role="presentation"
                                            unselectable="on"
                                          ></span
                                        ></span>
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
                                  class="ag-header-cell ag-column-last ag-header-parent-hidden ag-header-cell-sortable ag-right-aligned-header ag-focus-managed"
                                  role="columnheader"
                                  col-id="evidence"
                                  aria-colindex="5"
                                  tabindex="-1"
                                  aria-sort="none"
                                  style="
                                    top: 0px;
                                    height: 48px;
                                    width: 140px;
                                    touch-action: none;
                                    left: 794px;
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
                                      <div
                                        class="ag-header-cell-label"
                                        data-ref="eLabel"
                                        role="presentation"
                                      >
                                        <span class="ag-header-cell-text" data-ref="eText"
                                          >Evidence</span
                                        >
                                        <span
                                          class="ag-header-icon ag-header-label-icon ag-filter-icon ag-hidden"
                                          data-ref="eFilter"
                                          aria-hidden="true"
                                          ><span
                                            class="ag-icon ag-icon-filter"
                                            role="presentation"
                                            unselectable="on"
                                          ></span
                                        ></span>
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
                                <!-- …and 2 more like this (<div class="ag-header-cell ag-column-first ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed">) -->
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
                              style="width: 934px"
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
                          class="ag-body ag-layout-auto-height"
                          data-ref="eBody"
                          role="presentation"
                        >
                          <div
                            class="ag-body-viewport ag-layout-auto-height ag-row-animation"
                            data-ref="eBodyViewport"
                            role="presentation"
                          >
                            <!--AG-ROW-CONTAINER-->
                            <div
                              class="ag-pinned-left-cols-container ag-hidden"
                              data-ref="eContainer"
                              role="rowgroup"
                              style="height: 176px; width: 0px; max-width: 0px; min-width: 0px"
                              aria-hidden="true"
                            ></div>
                            <!--AG-ROW-CONTAINER-->
                            <div
                              class="ag-viewport ag-center-cols-viewport"
                              data-ref="eViewport"
                              role="rowgroup"
                              style="height: 176px"
                            >
                              <div
                                class="ag-center-cols-container"
                                data-ref="eContainer"
                                role="presentation"
                                style="width: 934px; height: 176px"
                              >
                                <div
                                  role="row"
                                  comp-id="54"
                                  tabindex="0"
                                  row-index="0"
                                  class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first"
                                  aria-rowindex="2"
                                  row-id="0"
                                  style="transform: translateY(0px); height: 44px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="55"
                                    col-id="component"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                    tabindex="-1"
                                    aria-colindex="1"
                                    style="left: 0px; width: 232px"
                                  >
                                    <a class="bcn-grid-name" href="#">Demolition Area</a>
                                  </div>
                                  <div
                                    role="gridcell"
                                    comp-id="56"
                                    col-id="due"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                    tabindex="-1"
                                    aria-colindex="2"
                                    style="left: 232px; width: 160px"
                                  >
                                    Mar 31, 2026
                                  </div>
                                  <div
                                    role="gridcell"
                                    comp-id="57"
                                    col-id="status"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                                    tabindex="-1"
                                    aria-colindex="3"
                                    style="left: 392px; width: 170px"
                                  >
                                    <span class="bcn-grid-chip" style="--_chip: #22c55e"
                                      ><span class="bcn-grid-chip__dot"></span>Completed</span
                                    >
                                  </div>
                                  <div
                                    role="gridcell"
                                    comp-id="59"
                                    col-id="evidence"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-right-aligned-cell"
                                    tabindex="-1"
                                    aria-colindex="5"
                                    style="left: 794px; width: 140px"
                                  >
                                    2 files
                                  </div>
                                  <!-- …and 1 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                                </div>
                                <div
                                  role="row"
                                  comp-id="60"
                                  tabindex="0"
                                  row-index="1"
                                  class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                                  aria-rowindex="3"
                                  row-id="1"
                                  style="transform: translateY(44px); height: 44px"
                                >
                                  <div
                                    role="gridcell"
                                    comp-id="61"
                                    col-id="component"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                                    tabindex="-1"
                                    aria-colindex="1"
                                    style="left: 0px; width: 232px"
                                  >
                                    <a class="bcn-grid-name" href="#">North Grading Area</a>
                                  </div>
                                  <div
                                    role="gridcell"
                                    comp-id="62"
                                    col-id="due"
                                    class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                                    tabindex="-1"
                                    aria-colindex="2"
                                    style="left: 232px; width: 160px"
                                  >
                                    Jun 30, 2026
                                  </div>
                                  <div
                                    role="gridcell"
                                    comp-id="63"
                                    col-id="status"
```
