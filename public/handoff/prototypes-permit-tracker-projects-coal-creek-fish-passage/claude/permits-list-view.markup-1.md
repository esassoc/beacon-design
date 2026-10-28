# Permits (List view): markup, part 1 of 2

```html
<section class="bcn-ptl" data-ptl="" data-project-id="coal-creek-fish-passage" aria-label="Permits">
  <div class="esa-card esa-card--padding-compact">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title typography-title-sm-strong">Permits</h3>
        </div>
      </div>
      <div class="esa-card__actions typography-label-md">
        <div class="cluster" data-gap="xs">
          <esa-filter-dropdown
            data-ptl-scope="true"
            name="scope"
            label="Applies to"
            multiple=""
            size="sm"
            options='[{"label":"Project-wide","value":"project"},{"label":"SE 60th St culvert","value":"cc-se60"},{"label":"Newport Way crossing","value":"cc-newport"}]'
          ></esa-filter-dropdown
          ><span class="bcn-gchrome__search"
            ><esa-text-field
              placeholder="Search permits…"
              size="sm"
              data-ptl-search="true"
            ></esa-text-field
            ><span data-ptl-search-clear="true" class="astro-kspn7qo2" hidden=""
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
          ><span data-ptl-clear-filters="true" class="astro-kspn7qo2"
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
              ><button class="esa-button__native typography-microcopy-xs" type="button">
                <span class="esa-button__label">Clear Filters</span>
              </button></span
            ></span
          >
        </div>
      </div>
    </div>
    <div class="esa-card__body typography-body-md">
      <div class="bcn-ptl__host" data-ptl-host="">
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
                class="ag-root ag-unselectable ag-layout-normal ag-body-horizontal-content-no-gap ag-body-vertical-content-no-gap"
                data-ref="eGridRoot"
                role="grid"
                aria-colcount="11"
                aria-rowcount="11"
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
                      style="width: 1645px"
                    >
                      <div
                        class="ag-header-row ag-header-row-column"
                        role="row"
                        tabindex="0"
                        aria-rowindex="1"
                        style="top: 0px; height: 48px; width: 1645px"
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
                                <span class="ag-header-cell-text" data-ref="eText">Permit</span>
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
                          col-id="scope"
                          aria-colindex="2"
                          tabindex="-1"
                          aria-sort="none"
                          style="
                            top: 0px;
                            height: 48px;
                            width: 160px;
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
                                <span class="ag-header-cell-text" data-ref="eText">Applies to</span>
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
                          class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-right-aligned-header ag-focus-managed"
                          role="columnheader"
                          col-id="reviews"
                          aria-colindex="8"
                          tabindex="-1"
                          aria-sort="none"
                          style="
                            top: 0px;
                            height: 48px;
                            width: 105px;
                            touch-action: none;
                            left: 1160px;
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
                                <span class="ag-header-cell-text" data-ref="eText">Reviews</span>
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
                          col-id="conditions"
                          aria-colindex="11"
                          tabindex="-1"
                          aria-sort="none"
                          style="
                            top: 0px;
                            height: 48px;
                            width: 120px;
                            touch-action: none;
                            left: 1525px;
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
                                <span class="ag-header-cell-text" data-ref="eText">Conditions</span>
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
                        <!-- …and 7 more like this (<div class="ag-header-cell ag-column-first ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed">) -->
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
                      style="width: 1645px"
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
                      style="height: 584px; width: 0px; max-width: 0px; min-width: 0px"
                    ></div>
                    <!--AG-ROW-CONTAINER-->
                    <div
                      class="ag-viewport ag-center-cols-viewport"
                      data-ref="eViewport"
                      role="rowgroup"
                      style="height: 584px"
                    >
                      <div
                        class="ag-center-cols-container"
                        data-ref="eContainer"
                        role="presentation"
                        style="width: 1645px; height: 584px"
                      >
                        <div
                          role="row"
                          comp-id="72"
                          tabindex="0"
                          row-index="0"
                          class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first"
                          aria-rowindex="2"
                          row-id="cc-sepa"
                          style="transform: translateY(0px); height: 56px"
                        >
                          <div
                            role="gridcell"
                            comp-id="73"
                            col-id="name"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-first"
                            aria-colindex="1"
                            style="left: 0px; width: 220px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation"
                                ><a
                                  class="bcn-ptl__name"
                                  href="/beacon-design/prototypes/permit-tracker/permits/cc-sepa"
                                  >SEPA Threshold Determination</a
                                ></span
                              >
                            </div>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="74"
                            col-id="scope"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text"
                            aria-colindex="2"
                            style="left: 220px; width: 160px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation">Project-wide</span>
                            </div>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="80"
                            col-id="reviews"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-right-aligned-cell"
                            aria-colindex="8"
                            style="left: 1160px; width: 105px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation">1</span>
                            </div>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="83"
                            col-id="conditions"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-last"
                            aria-colindex="11"
                            style="left: 1525px; width: 120px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation">Yes</span>
                            </div>
                          </div>
                          <!-- …and 7 more like this (<div class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-first">) -->
                        </div>
                        <div
                          role="row"
                          comp-id="84"
                          tabindex="0"
                          row-index="1"
                          class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="3"
                          row-id="cc-401"
                          style="transform: translateY(56px); height: 56px"
                        >
                          <div
                            role="gridcell"
                            comp-id="85"
                            col-id="name"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-first"
                            aria-colindex="1"
                            style="left: 0px; width: 220px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation"
                                ><a
                                  class="bcn-ptl__name"
                                  href="/beacon-design/prototypes/permit-tracker/permits/cc-401"
                                  >Section 401 Water Quality Certification</a
                                ></span
                              >
                            </div>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="86"
                            col-id="scope"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text"
                            aria-colindex="2"
                            style="left: 220px; width: 160px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation">Project-wide</span>
                            </div>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="92"
                            col-id="reviews"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-right-aligned-cell"
                            aria-colindex="8"
                            style="left: 1160px; width: 105px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation">1</span>
                            </div>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="95"
                            col-id="conditions"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-last"
                            aria-colindex="11"
                            style="left: 1525px; width: 120px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation">Yes</span>
                            </div>
                          </div>
                          <!-- …and 7 more like this (<div class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-first">) -->
                        </div>
                        <div
                          role="row"
                          comp-id="96"
                          tabindex="0"
                          row-index="2"
                          class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="4"
                          row-id="cc-404"
                          style="transform: translateY(112px); height: 56px"
                        >
                          <div
                            role="gridcell"
                            comp-id="97"
                            col-id="name"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-first"
                            aria-colindex="1"
                            style="left: 0px; width: 220px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation"
                                ><a
                                  class="bcn-ptl__name"
                                  href="/beacon-design/prototypes/permit-tracker/permits/cc-404"
                                  >Section 404 Permit (Nationwide)</a
                                ></span
                              >
                            </div>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="98"
                            col-id="scope"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text"
                            aria-colindex="2"
                            style="left: 220px; width: 160px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation">Project-wide</span>
                            </div>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="104"
                            col-id="reviews"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-right-aligned-cell"
                            aria-colindex="8"
                            style="left: 1160px; width: 105px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation">2</span>
                            </div>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="107"
                            col-id="conditions"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-last"
                            aria-colindex="11"
                            style="left: 1525px; width: 120px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation"></span>
                            </div>
                          </div>
                          <!-- …and 7 more like this (<div class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-first">) -->
                        </div>
                        <div
                          role="row"
                          comp-id="108"
                          tabindex="0"
                          row-index="3"
                          class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="5"
                          row-id="cc-cswgp"
                          style="transform: translateY(168px); height: 56px"
                        >
                          <div
                            role="gridcell"
                            comp-id="109"
                            col-id="name"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-first"
                            aria-colindex="1"
                            style="left: 0px; width: 220px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation"
                                ><a
                                  class="bcn-ptl__name"
                                  href="/beacon-design/prototypes/permit-tracker/permits/cc-cswgp"
                                  >Construction Stormwater General Permit</a
                                ></span
                              >
                            </div>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="110"
                            col-id="scope"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text"
                            aria-colindex="2"
                            style="left: 220px; width: 160px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation">Project-wide</span>
                            </div>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="116"
                            col-id="reviews"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-right-aligned-cell"
                            aria-colindex="8"
                            style="left: 1160px; width: 105px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation">—</span>
                            </div>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="119"
                            col-id="conditions"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-last"
                            aria-colindex="11"
                            style="left: 1525px; width: 120px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation"></span>
                            </div>
                          </div>
                          <!-- …and 7 more like this (<div class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-first">) -->
                        </div>
                        <div
                          role="row"
                          comp-id="120"
                          tabindex="0"
                          row-index="4"
                          class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="6"
                          row-id="cc1-cao"
                          style="transform: translateY(224px); height: 56px"
                        >
                          <div
                            role="gridcell"
                            comp-id="121"
                            col-id="name"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text ag-column-first"
                            aria-colindex="1"
                            style="left: 0px; width: 220px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation"
                                ><a
                                  class="bcn-ptl__name"
                                  href="/beacon-design/prototypes/permit-tracker/permits/cc1-cao"
                                  >Critical Areas Land Use Permit</a
                                ></span
                              >
                            </div>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="122"
                            col-id="scope"
                            tabindex="-1"
                            class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height ag-cell-wrap-text"
                            aria-colindex="2"
                            style="left: 220px; width: 160px"
                          >
                            <div class="ag-cell-wrapper" role="presentation">
                              <span class="ag-cell-value" role="presentation"
                                >SE 60th St culvert</span
                              >
                            </div>
```
