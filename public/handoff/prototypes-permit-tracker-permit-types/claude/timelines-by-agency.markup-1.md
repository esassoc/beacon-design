# Timelines by agency: markup, part 1 of 4

```html
<div class="stack bcn-ptd" data-gap="md" data-ptd="">
  <div class="esa-card esa-card--padding-compact">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title typography-title-sm-strong">Timelines by agency</h3>
        </div>
      </div>
    </div>
    <div class="esa-card__body typography-body-md">
      <div class="stack" data-gap="sm">
        <div class="repel" data-gap="sm">
          <div
            class="esa-filter-container typography-label-md"
            style="
              --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
              --_filter-container-row-gap: var(--spacing-200, 0.5rem);
            "
          >
            <esa-filter-dropdown
              data-ptd-facet="level"
              data-field="level"
              label="Level"
              multiple=""
              size="sm"
              data-options='[{"value":"Federal","label":"Federal"},{"value":"State","label":"State"},{"value":"Local","label":"Local"}]'
            ></esa-filter-dropdown
            ><esa-filter-dropdown
              data-ptd-facet="type"
              data-field="typeName"
              label="Permit type"
              multiple=""
              size="sm"
              data-options='[{"value":"Clearing and Grading Permit","label":"Clearing and Grading Permit"},{"value":"Construction Stormwater General… [693 characters]'
            ></esa-filter-dropdown
            ><esa-filter-dropdown
              data-ptd-facet="jurisdiction"
              data-field="jurisdictionName"
              label="Jurisdiction"
              multiple=""
              size="sm"
              data-options='[{"value":"City of Bellevue","label":"City of Bellevue"},{"value":"City of Lake Stevens","label":"City of Lake Stevens"}… [871 characters]'
            ></esa-filter-dropdown>
          </div>
          <div class="cluster" data-gap="sm">
            <span class="bcn-gchrome__search"
              ><esa-text-field
                placeholder="Search permit types or agencies…"
                size="sm"
                data-ptd-search="true"
              ></esa-text-field
              ><span data-ptd-search-clear="true" class="astro-kspn7qo2" hidden=""
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
            ><span data-ptd-clear-filters="true" class="astro-kspn7qo2"
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Clear Filters</span>
                </button></span
              ></span
            >
          </div>
        </div>
        <div class="bcn-ptd__grid" data-ptd-host="">
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
                  aria-colcount="7"
                  aria-rowcount="46"
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
                        style="width: 1055px"
                      >
                        <div
                          class="ag-header-row ag-header-row-column"
                          role="row"
                          tabindex="0"
                          aria-rowindex="1"
                          style="top: 0px; height: 48px; width: 1055px"
                        >
                          <div
                            class="ag-header-cell ag-column-first ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                            role="columnheader"
                            col-id="typeName"
                            aria-colindex="1"
                            tabindex="-1"
                            aria-sort="none"
                            style="
                              top: 0px;
                              height: 48px;
                              width: 200px;
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
                                    >Permit type</span
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
                              width: 90px;
                              touch-action: none;
                              left: 200px;
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
                                  <span class="ag-header-cell-text" data-ref="eText">Level</span>
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
                            col-id="count"
                            aria-colindex="4"
                            tabindex="-1"
                            aria-sort="none"
                            style="
                              top: 0px;
                              height: 48px;
                              width: 135px;
                              touch-action: none;
                              left: 440px;
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
                                    >Past permits</span
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
                            class="ag-header-cell ag-column-last ag-header-parent-hidden ag-focus-managed"
                            role="columnheader"
                            col-id="range"
                            aria-colindex="7"
                            tabindex="-1"
                            style="
                              top: 0px;
                              height: 48px;
                              width: 200px;
                              touch-action: none;
                              left: 855px;
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
                                    >Range (days)</span
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
                          <!-- …and 3 more like this (<div class="ag-header-cell ag-column-first ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed">) -->
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
                        style="width: 1055px"
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
                        style="height: 1980px; width: 0px; max-width: 0px; min-width: 0px"
                      ></div>
                      <!--AG-ROW-CONTAINER-->
                      <div
                        class="ag-viewport ag-center-cols-viewport"
                        data-ref="eViewport"
                        role="rowgroup"
                        style="height: 1980px"
                      >
                        <div
                          class="ag-center-cols-container"
                          data-ref="eContainer"
                          role="presentation"
                          style="width: 1055px; height: 1980px"
                        >
                          <div
                            role="row"
                            comp-id="60"
                            tabindex="0"
                            row-index="0"
                            class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first"
                            aria-rowindex="2"
                            aria-selected="false"
                            row-id="usace-404|usace-nws"
                            style="transform: translateY(0px); height: 44px"
                          >
                            <div
                              role="gridcell"
                              comp-id="61"
                              col-id="typeName"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                              tabindex="-1"
                              aria-colindex="1"
                              style="left: 0px; width: 200px"
                            >
                              <a
                                class="bcn-ptd__link"
                                href="/beacon-design/prototypes/permit-tracker/permit-types/usace-404"
                                >Section 404 Permit (Nationwide)</a
                              >
                            </div>
                            <div
                              role="gridcell"
                              comp-id="62"
                              col-id="level"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                              tabindex="-1"
                              aria-colindex="2"
                              style="left: 200px; width: 90px"
                            >
                              Federal
                            </div>
                            <div
                              role="gridcell"
                              comp-id="64"
                              col-id="count"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-ptd__num"
                              tabindex="-1"
                              aria-colindex="4"
                              style="left: 440px; width: 135px"
                            >
                              13
                            </div>
                            <div
                              role="gridcell"
                              comp-id="67"
                              col-id="range"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last"
                              tabindex="-1"
                              aria-colindex="7"
                              style="left: 855px; width: 200px"
                            >
                              <span class="bcn-ptd__strip"
                                ><span class="bcn-ptd__range-figures">119–238</span
                                ><span
                                  class="bcn-duration-range"
                                  aria-hidden="true"
                                  style="--_from: 44.07%; --_to: 88.15%; --_mid: 62.59%"
                                  ><span class="bcn-duration-range__span"></span
                                  ><span class="bcn-duration-range__median"></span></span
                              ></span>
                            </div>
                            <!-- …and 3 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                          </div>
                          <div
                            role="row"
                            comp-id="68"
                            tabindex="0"
                            row-index="1"
                            class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                            aria-rowindex="3"
                            aria-selected="false"
                            row-id="ecy-cswgp|ecology"
                            style="transform: translateY(44px); height: 44px"
                          >
                            <div
                              role="gridcell"
                              comp-id="69"
                              col-id="typeName"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                              tabindex="-1"
                              aria-colindex="1"
                              style="left: 0px; width: 200px"
                            >
                              <a
                                class="bcn-ptd__link"
                                href="/beacon-design/prototypes/permit-tracker/permit-types/ecy-cswgp"
                                >Construction Stormwater General Permit</a
                              >
                            </div>
                            <div
                              role="gridcell"
                              comp-id="70"
                              col-id="level"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                              tabindex="-1"
                              aria-colindex="2"
                              style="left: 200px; width: 90px"
                            >
                              State
                            </div>
                            <div
                              role="gridcell"
                              comp-id="72"
                              col-id="count"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-ptd__num"
                              tabindex="-1"
                              aria-colindex="4"
                              style="left: 440px; width: 135px"
                            >
                              10
                            </div>
                            <div
                              role="gridcell"
                              comp-id="75"
                              col-id="range"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last"
                              tabindex="-1"
                              aria-colindex="7"
                              style="left: 855px; width: 200px"
                            >
                              <span class="bcn-ptd__strip"
                                ><span class="bcn-ptd__range-figures">36–44</span
                                ><span
                                  class="bcn-duration-range"
                                  aria-hidden="true"
                                  style="--_from: 13.33%; --_to: 16.3%; --_mid: 15.19%"
                                  ><span class="bcn-duration-range__span"></span
                                  ><span class="bcn-duration-range__median"></span></span
                              ></span>
                            </div>
                            <!-- …and 3 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                          </div>
                          <div
                            role="row"
                            comp-id="76"
                            tabindex="0"
                            row-index="2"
                            class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                            aria-rowindex="4"
                            aria-selected="false"
                            row-id="wdfw-hpa|wdfw"
                            style="transform: translateY(88px); height: 44px"
                          >
                            <div
                              role="gridcell"
                              comp-id="77"
                              col-id="typeName"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                              tabindex="-1"
                              aria-colindex="1"
                              style="left: 0px; width: 200px"
                            >
                              <a
                                class="bcn-ptd__link"
                                href="/beacon-design/prototypes/permit-tracker/permit-types/wdfw-hpa"
                                >Hydraulic Project Approval</a
                              >
                            </div>
                            <div
                              role="gridcell"
                              comp-id="78"
                              col-id="level"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                              tabindex="-1"
                              aria-colindex="2"
                              style="left: 200px; width: 90px"
                            >
                              State
                            </div>
                            <div
                              role="gridcell"
                              comp-id="80"
                              col-id="count"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-ptd__num"
                              tabindex="-1"
                              aria-colindex="4"
                              style="left: 440px; width: 135px"
                            >
                              22
                            </div>
                            <div
                              role="gridcell"
                              comp-id="83"
                              col-id="range"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last"
                              tabindex="-1"
                              aria-colindex="7"
                              style="left: 855px; width: 200px"
                            >
                              <span class="bcn-ptd__strip"
                                ><span class="bcn-ptd__range-figures">32–50</span
                                ><span
                                  class="bcn-duration-range"
                                  aria-hidden="true"
                                  style="--_from: 11.85%; --_to: 18.52%; --_mid: 16.67%"
                                  ><span class="bcn-duration-range__span"></span
                                  ><span class="bcn-duration-range__median"></span></span
                              ></span>
                            </div>
                            <!-- …and 3 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                          </div>
                          <div
                            role="row"
                            comp-id="84"
                            tabindex="0"
                            row-index="3"
                            class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                            aria-rowindex="5"
                            aria-selected="false"
                            row-id="ecy-401|ecology"
                            style="transform: translateY(132px); height: 44px"
                          >
                            <div
                              role="gridcell"
                              comp-id="85"
                              col-id="typeName"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                              tabindex="-1"
                              aria-colindex="1"
                              style="left: 0px; width: 200px"
                            >
                              <a
                                class="bcn-ptd__link"
                                href="/beacon-design/prototypes/permit-tracker/permit-types/ecy-401"
                                >Section 401 Water Quality Certification</a
                              >
                            </div>
                            <div
                              role="gridcell"
                              comp-id="86"
                              col-id="level"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                              tabindex="-1"
                              aria-colindex="2"
                              style="left: 200px; width: 90px"
                            >
                              State
                            </div>
                            <div
                              role="gridcell"
                              comp-id="88"
                              col-id="count"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-ptd__num"
                              tabindex="-1"
                              aria-colindex="4"
                              style="left: 440px; width: 135px"
                            >
                              14
                            </div>
                            <div
                              role="gridcell"
                              comp-id="91"
                              col-id="range"
                              class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last"
                              tabindex="-1"
                              aria-colindex="7"
                              style="left: 855px; width: 200px"
                            >
                              <span class="bcn-ptd__strip"
                                ><span class="bcn-ptd__range-figures">120–183</span
                                ><span
                                  class="bcn-duration-range"
                                  aria-hidden="true"
                                  style="--_from: 44.44%; --_to: 67.78%; --_mid: 56.3%"
                                  ><span class="bcn-duration-range__span"></span
                                  ><span class="bcn-duration-range__median"></span></span
                              ></span>
                            </div>
                            <!-- …and 3 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first">) -->
                          </div>
                          <div
                            role="row"
                            comp-id="92"
                            tabindex="0"
                            row-index="4"
                            class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                            aria-rowindex="6"
                            aria-selected="false"
                            row-id="grading|bellevue"
                            style="transform: translateY(176px); height: 44px"
                          >
                            <div
                              role="gridcell"
                              comp-id="93"
                              col-id="typeName"
```
