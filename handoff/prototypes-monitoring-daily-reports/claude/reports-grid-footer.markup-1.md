# Reports grid + footer: markup, part 1 of 3

```html
<div id="dr-grid" class="dr-grid">
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
        style="--ag-internal-measurement-border: var(--ag-pinned-row-border, solid 15538px)"
      ></div>
      <div
        class="ag-measurement-element-border"
        style="--ag-internal-measurement-border: var(--ag-header-row-border, solid 15538px)"
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
          class="ag-root ag-unselectable ag-layout-normal ag-body-vertical-content-no-gap ag-body-horizontal-content-no-gap"
          data-ref="eGridRoot"
          role="grid"
          aria-colcount="5"
          aria-rowcount="48"
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
                    col-id="date"
                    aria-colindex="1"
                    tabindex="-1"
                    aria-sort="descending"
                    style="top: 0px; height: 48px; width: 130px; touch-action: none; left: 0px"
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
                        <div class="ag-header-cell-label" data-ref="eLabel" role="presentation">
                          <span class="ag-header-cell-text" data-ref="eText">Date</span>
                          <!--AG-SORT-INDICATOR--><span
                            class="ag-sort-indicator-container"
                            data-ref="eSortIndicator"
                          >
                            <span
                              class="ag-sort-indicator-icon ag-sort-order ag-hidden"
                              data-ref="eSortOrder"
                              aria-hidden="true"
                              >1</span
                            >
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
                              class="ag-sort-indicator-icon ag-sort-descending-icon"
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
                    col-id="inspector"
                    aria-colindex="2"
                    tabindex="-1"
                    aria-sort="none"
                    style="top: 0px; height: 48px; width: 150px; touch-action: none; left: 130px"
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
                        <div class="ag-header-cell-label" data-ref="eLabel" role="presentation">
                          <span class="ag-header-cell-text" data-ref="eText">Monitor</span>
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
                    class="ag-header-cell ag-column-last ag-header-parent-hidden ag-focus-managed"
                    role="columnheader"
                    col-id="id"
                    aria-colindex="5"
                    tabindex="-1"
                    style="top: 0px; height: 48px; width: 90px; touch-action: none; left: 844px"
                  >
                    <div
                      class="ag-header-cell-resize ag-hidden"
                      data-ref="eResize"
                      role="presentation"
                      aria-hidden="true"
                    ></div>
                    <div
                      class="ag-header-cell-comp-wrapper"
                      data-ref="eHeaderCompWrapper"
                      role="presentation"
                    >
                      <div class="ag-cell-label-container" role="presentation">
                        <div class="ag-header-cell-label" data-ref="eLabel" role="presentation">
                          <span class="ag-header-cell-text" data-ref="eText">Report</span>
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
                            ></span>
                            <span
                              class="ag-sort-indicator-icon ag-sort-descending-icon ag-hidden"
                              data-ref="eSortDesc"
                              aria-hidden="true"
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
                            ></span
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
            <div class="ag-viewport ag-floating-top-viewport" data-ref="eViewport" role="rowgroup">
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
                style="height: 2068px; width: 0px; max-width: 0px; min-width: 0px"
              ></div>
              <!--AG-ROW-CONTAINER-->
              <div
                class="ag-viewport ag-center-cols-viewport"
                data-ref="eViewport"
                role="rowgroup"
                style="height: 2068px"
              >
                <div
                  class="ag-center-cols-container"
                  data-ref="eContainer"
                  role="presentation"
                  style="width: 934px; height: 2068px"
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
                      col-id="date"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 130px"
                    >
                      <a class="bcn-grid-name" href="#">8/4/26</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="56"
                      col-id="inspector"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 130px; width: 150px"
                    >
                      J. Park
                    </div>
                    <div
                      role="gridcell"
                      comp-id="57"
                      col-id="status"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 280px; width: 130px"
                    >
                      <span
                        class="bcn-grid-chip"
                        style="--_chip: var(--color-content-default-tertiary)"
                        ><span class="bcn-grid-chip__dot"></span>Draft</span
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="59"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last"
                      tabindex="-1"
                      aria-colindex="5"
                      style="left: 844px; width: 90px"
                    >
                      <button
                        type="button"
                        class="bcn-grid-download-btn"
                        aria-label="Download report — 2026-08-04, J. Park"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </button>
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
                      col-id="date"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 130px"
                    >
                      <a class="bcn-grid-name" href="#">8/4/26</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="62"
                      col-id="inspector"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 130px; width: 150px"
                    >
                      T. Whitfield
                    </div>
                    <div
                      role="gridcell"
                      comp-id="63"
                      col-id="status"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 280px; width: 130px"
                    >
                      <span
                        class="bcn-grid-chip"
                        style="--_chip: var(--color-content-default-tertiary)"
                        ><span class="bcn-grid-chip__dot"></span>Draft</span
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="65"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last"
                      tabindex="-1"
                      aria-colindex="5"
                      style="left: 844px; width: 90px"
                    >
                      <button
                        type="button"
                        class="bcn-grid-download-btn"
                        aria-label="Download report — 2026-08-04, T. Whitfield"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </button>
                    </div>
                    <!-- …and 1 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                  </div>
                  <div
                    role="row"
                    comp-id="66"
                    tabindex="0"
                    row-index="2"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="4"
                    row-id="2"
                    style="transform: translateY(88px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="67"
                      col-id="date"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 130px"
                    >
                      <a class="bcn-grid-name" href="#">8/3/26</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="68"
                      col-id="inspector"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 130px; width: 150px"
                    >
                      J. Park
                    </div>
                    <div
                      role="gridcell"
                      comp-id="69"
                      col-id="status"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 280px; width: 130px"
                    >
                      <span
                        class="bcn-grid-chip"
                        style="--_chip: var(--color-content-default-tertiary)"
                        ><span class="bcn-grid-chip__dot"></span>Draft</span
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="71"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last"
                      tabindex="-1"
                      aria-colindex="5"
                      style="left: 844px; width: 90px"
                    >
                      <button
                        type="button"
                        class="bcn-grid-download-btn"
                        aria-label="Download report — 2026-08-03, J. Park"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </button>
                    </div>
                    <!-- …and 1 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                  </div>
                  <div
                    role="row"
                    comp-id="72"
                    tabindex="0"
                    row-index="3"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="5"
                    row-id="3"
                    style="transform: translateY(132px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="73"
                      col-id="date"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 130px"
                    >
                      <a class="bcn-grid-name" href="#">8/1/26</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="74"
                      col-id="inspector"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 130px; width: 150px"
                    >
                      J. Park
                    </div>
                    <div
                      role="gridcell"
                      comp-id="75"
                      col-id="status"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 280px; width: 130px"
                    >
                      <span
                        class="bcn-grid-chip"
                        style="--_chip: var(--color-background-utility-info)"
                        ><span class="bcn-grid-chip__dot"></span>In Review</span
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="77"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last"
                      tabindex="-1"
                      aria-colindex="5"
                      style="left: 844px; width: 90px"
                    >
                      <button
                        type="button"
                        class="bcn-grid-download-btn"
                        aria-label="Download report — 2026-08-01, J. Park"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </button>
                    </div>
                    <!-- …and 1 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                  </div>
                  <div
                    role="row"
                    comp-id="78"
                    tabindex="0"
                    row-index="4"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="6"
                    row-id="4"
                    style="transform: translateY(176px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="79"
                      col-id="date"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 130px"
                    >
                      <a class="bcn-grid-name" href="#">7/30/26</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="80"
                      col-id="inspector"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 130px; width: 150px"
                    >
                      R. Delgado
                    </div>
                    <div
                      role="gridcell"
                      comp-id="81"
                      col-id="status"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 280px; width: 130px"
                    >
                      <span
                        class="bcn-grid-chip"
                        style="--_chip: var(--color-background-utility-info)"
                        ><span class="bcn-grid-chip__dot"></span>In Review</span
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="83"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last"
                      tabindex="-1"
                      aria-colindex="5"
                      style="left: 844px; width: 90px"
                    >
                      <button
                        type="button"
                        class="bcn-grid-download-btn"
                        aria-label="Download report — 2026-07-30, R. Delgado"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </button>
                    </div>
                    <!-- …and 1 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                  </div>
                  <div
                    role="row"
                    comp-id="84"
                    tabindex="0"
                    row-index="5"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="7"
                    row-id="5"
                    style="transform: translateY(220px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="85"
                      col-id="date"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 130px"
                    >
                      <a class="bcn-grid-name" href="#">7/29/26</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="86"
                      col-id="inspector"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 130px; width: 150px"
                    >
                      R. Delgado
                    </div>
                    <div
                      role="gridcell"
                      comp-id="87"
                      col-id="status"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 280px; width: 130px"
                    >
                      <span
                        class="bcn-grid-chip"
                        style="--_chip: var(--color-background-utility-warning)"
                        ><span class="bcn-grid-chip__dot"></span>In Progress</span
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="89"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last"
                      tabindex="-1"
                      aria-colindex="5"
                      style="left: 844px; width: 90px"
                    >
                      <button
                        type="button"
                        class="bcn-grid-download-btn"
                        aria-label="Download report — 2026-07-29, R. Delgado"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </button>
                    </div>
                    <!-- …and 1 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                  </div>
                  <div
                    role="row"
                    comp-id="90"
                    tabindex="0"
                    row-index="6"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="8"
                    row-id="6"
                    style="transform: translateY(264px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="91"
                      col-id="date"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 130px"
                    >
                      <a class="bcn-grid-name" href="#">7/27/26</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="92"
                      col-id="inspector"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 130px; width: 150px"
                    >
                      R. Delgado
                    </div>
                    <div
                      role="gridcell"
                      comp-id="93"
                      col-id="status"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 280px; width: 130px"
                    >
                      <span
                        class="bcn-grid-chip"
                        style="--_chip: var(--color-background-utility-warning)"
                        ><span class="bcn-grid-chip__dot"></span>In Progress</span
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="95"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last"
                      tabindex="-1"
                      aria-colindex="5"
                      style="left: 844px; width: 90px"
                    >
                      <button
                        type="button"
                        class="bcn-grid-download-btn"
                        aria-label="Download report — 2026-07-27, R. Delgado"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </button>
                    </div>
                    <!-- …and 1 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                  </div>
                  <div
                    role="row"
                    comp-id="96"
                    tabindex="0"
                    row-index="7"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="9"
                    row-id="7"
                    style="transform: translateY(308px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="97"
                      col-id="date"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 130px"
                    >
                      <a class="bcn-grid-name" href="#">7/27/26</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="98"
                      col-id="inspector"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 130px; width: 150px"
                    >
                      T. Whitfield
                    </div>
                    <div
                      role="gridcell"
                      comp-id="99"
                      col-id="status"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 280px; width: 130px"
                    >
                      <span
                        class="bcn-grid-chip"
                        style="--_chip: var(--color-background-utility-success)"
                        ><span class="bcn-grid-chip__dot"></span>Final</span
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="101"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last"
                      tabindex="-1"
                      aria-colindex="5"
                      style="left: 844px; width: 90px"
                    >
                      <button
                        type="button"
                        class="bcn-grid-download-btn"
                        aria-label="Download report — 2026-07-27, T. Whitfield"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </button>
                    </div>
                    <!-- …and 1 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                  </div>
                  <div
                    role="row"
                    comp-id="102"
                    tabindex="0"
                    row-index="8"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="10"
                    row-id="8"
                    style="transform: translateY(352px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="103"
                      col-id="date"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
```
