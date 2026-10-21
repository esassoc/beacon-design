# List view (grid + footer): markup, part 1 of 2

```html
<div id="ov-list-pane">
  <div id="ov-grid" class="ov-grid">
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
            aria-colcount="8"
            aria-rowcount="17"
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
                    col-id="id"
                    aria-colindex="1"
                    tabindex="-1"
                    aria-sort="none"
                    style="top: 0px; height: 48px; width: 110px; touch-action: none; left: 0px"
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
                        <div class="ag-header-cell-label" data-ref="eLabel" role="presentation">
                          <span class="ag-header-cell-text" data-ref="eText">ID</span>
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
                  style="width: 1170px"
                >
                  <div
                    class="ag-header-row ag-header-row-column"
                    role="row"
                    tabindex="0"
                    aria-rowindex="1"
                    style="top: 0px; height: 48px; width: 1170px"
                  >
                    <div
                      class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                      role="columnheader"
                      col-id="category"
                      aria-colindex="2"
                      tabindex="-1"
                      aria-sort="none"
                      style="top: 0px; height: 48px; width: 240px; touch-action: none; left: 0px"
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
                            <span class="ag-header-cell-text" data-ref="eText">Category</span>
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
                      col-id="severity"
                      aria-colindex="3"
                      tabindex="-1"
                      aria-sort="none"
                      style="top: 0px; height: 48px; width: 170px; touch-action: none; left: 240px"
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
                            <span class="ag-header-cell-text" data-ref="eText">Severity</span>
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
                    <!-- …and 4 more like this (<div class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed">) -->
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
                  style="width: 1170px"
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
                  class="ag-pinned-left-cols-container"
                  data-ref="eContainer"
                  role="rowgroup"
                  aria-hidden="false"
                  style="height: 704px; width: 110px; max-width: 110px; min-width: 110px"
                >
                  <div
                    role="row"
                    comp-id="61"
                    tabindex="0"
                    row-index="0"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first"
                    aria-rowindex="2"
                    row-id="0"
                    style="transform: translateY(0px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="62"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0142</a>
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="63"
                    tabindex="0"
                    row-index="1"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="3"
                    row-id="1"
                    style="transform: translateY(44px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="64"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0139</a>
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="65"
                    tabindex="0"
                    row-index="2"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="4"
                    row-id="2"
                    style="transform: translateY(88px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="66"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0121</a>
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="67"
                    tabindex="0"
                    row-index="3"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="5"
                    row-id="3"
                    style="transform: translateY(132px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="68"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0144</a>
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="69"
                    tabindex="0"
                    row-index="4"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="6"
                    row-id="4"
                    style="transform: translateY(176px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="70"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0140</a>
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="71"
                    tabindex="0"
                    row-index="5"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="7"
                    row-id="5"
                    style="transform: translateY(220px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="72"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0136</a>
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="73"
                    tabindex="0"
                    row-index="6"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="8"
                    row-id="6"
                    style="transform: translateY(264px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="74"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0130</a>
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="75"
                    tabindex="0"
                    row-index="7"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="9"
                    row-id="7"
                    style="transform: translateY(308px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="76"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0126</a>
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="77"
                    tabindex="0"
                    row-index="8"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="10"
                    row-id="8"
                    style="transform: translateY(352px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="78"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0118</a>
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="79"
                    tabindex="0"
                    row-index="9"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="11"
                    row-id="9"
                    style="transform: translateY(396px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="80"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0113</a>
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="81"
                    tabindex="0"
                    row-index="10"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="12"
                    row-id="10"
                    style="transform: translateY(440px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="82"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0145</a>
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="83"
                    tabindex="0"
                    row-index="11"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="13"
                    row-id="11"
                    style="transform: translateY(484px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="84"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0143</a>
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="85"
                    tabindex="0"
                    row-index="12"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="14"
                    row-id="12"
                    style="transform: translateY(528px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="86"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0137</a>
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="87"
                    tabindex="0"
                    row-index="13"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="15"
                    row-id="13"
                    style="transform: translateY(572px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="88"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0132</a>
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="89"
                    tabindex="0"
                    row-index="14"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="16"
                    row-id="14"
                    style="transform: translateY(616px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="90"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0125</a>
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="91"
                    tabindex="0"
                    row-index="15"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-last"
                    aria-rowindex="17"
                    row-id="15"
                    style="transform: translateY(660px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="92"
                      col-id="id"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-last-left-pinned ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 110px"
                    >
                      <a class="bcn-grid-name" href="#">obs-0117</a>
                    </div>
                  </div>
                </div>
                <!--AG-ROW-CONTAINER-->
                <div
                  class="ag-viewport ag-center-cols-viewport"
                  data-ref="eViewport"
                  role="rowgroup"
                  style="height: 704px"
                >
                  <div
                    class="ag-center-cols-container"
                    data-ref="eContainer"
                    role="presentation"
                    style="width: 1170px; height: 704px"
                  >
                    <div
                      role="row"
                      comp-id="101"
                      tabindex="0"
                      row-index="0"
                      class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first"
                      aria-rowindex="2"
                      row-id="0"
                      style="transform: translateY(0px); height: 44px"
                    >
                      <div
                        role="gridcell"
                        comp-id="102"
                        col-id="category"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                        tabindex="-1"
                        aria-colindex="2"
                        style="left: 0px; width: 240px"
                      >
                        Stormwater / BMP Maintenance
                      </div>
                      <div
                        role="gridcell"
                        comp-id="103"
                        col-id="severity"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                        tabindex="-1"
                        aria-colindex="3"
                        style="left: 240px; width: 170px"
                      >
                        <span
                          class="bcn-grid-chip"
                          style="--_chip: var(--color-background-utility-danger)"
                          ><span class="bcn-grid-chip__dot"></span>Non-Compliance</span
                        >
                      </div>
                      <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height">) -->
                    </div>
                    <div
                      role="row"
                      comp-id="108"
                      tabindex="0"
                      row-index="1"
                      class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                      aria-rowindex="3"
                      row-id="1"
                      style="transform: translateY(44px); height: 44px"
                    >
                      <div
                        role="gridcell"
                        comp-id="109"
                        col-id="category"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                        tabindex="-1"
                        aria-colindex="2"
                        style="left: 0px; width: 240px"
                      >
                        Spill Prevention &amp; Response
                      </div>
                      <div
                        role="gridcell"
                        comp-id="110"
                        col-id="severity"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                        tabindex="-1"
                        aria-colindex="3"
                        style="left: 240px; width: 170px"
                      >
                        <span
                          class="bcn-grid-chip"
                          style="--_chip: var(--color-background-utility-danger)"
                          ><span class="bcn-grid-chip__dot"></span>Non-Compliance</span
                        >
                      </div>
                      <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height">) -->
                    </div>
                    <div
                      role="row"
                      comp-id="115"
                      tabindex="0"
                      row-index="2"
                      class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                      aria-rowindex="4"
                      row-id="2"
                      style="transform: translateY(88px); height: 44px"
                    >
                      <div
                        role="gridcell"
                        comp-id="116"
                        col-id="category"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                        tabindex="-1"
                        aria-colindex="2"
                        style="left: 0px; width: 240px"
                      >
                        Cultural Resources Protection
                      </div>
                      <div
                        role="gridcell"
                        comp-id="117"
                        col-id="severity"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                        tabindex="-1"
                        aria-colindex="3"
                        style="left: 240px; width: 170px"
                      >
                        <span
                          class="bcn-grid-chip"
                          style="--_chip: var(--color-background-utility-danger)"
                          ><span class="bcn-grid-chip__dot"></span>Non-Compliance</span
                        >
                      </div>
                      <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height">) -->
                    </div>
                    <div
                      role="row"
                      comp-id="122"
                      tabindex="0"
                      row-index="3"
                      class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                      aria-rowindex="5"
                      row-id="3"
                      style="transform: translateY(132px); height: 44px"
                    >
                      <div
                        role="gridcell"
                        comp-id="123"
                        col-id="category"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                        tabindex="-1"
                        aria-colindex="2"
                        style="left: 0px; width: 240px"
                      >
                        Erosion &amp; Sediment Control
                      </div>
                      <div
                        role="gridcell"
                        comp-id="124"
                        col-id="severity"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                        tabindex="-1"
                        aria-colindex="3"
                        style="left: 240px; width: 170px"
                      >
                        <span
                          class="bcn-grid-chip"
                          style="--_chip: var(--color-background-utility-warning)"
                          ><span class="bcn-grid-chip__dot"></span>Needs Attention</span
                        >
                      </div>
                      <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height">) -->
                    </div>
                    <div
                      role="row"
                      comp-id="129"
                      tabindex="0"
                      row-index="4"
                      class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                      aria-rowindex="6"
                      row-id="4"
                      style="transform: translateY(176px); height: 44px"
                    >
                      <div
                        role="gridcell"
                        comp-id="130"
                        col-id="category"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                        tabindex="-1"
                        aria-colindex="2"
                        style="left: 0px; width: 240px"
                      >
                        Access &amp; Traffic Control
                      </div>
                      <div
                        role="gridcell"
                        comp-id="131"
                        col-id="severity"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                        tabindex="-1"
                        aria-colindex="3"
                        style="left: 240px; width: 170px"
                      >
                        <span
                          class="bcn-grid-chip"
                          style="--_chip: var(--color-background-utility-warning)"
                          ><span class="bcn-grid-chip__dot"></span>Needs Attention</span
                        >
                      </div>
                      <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height">) -->
                    </div>
                    <div
                      role="row"
                      comp-id="136"
                      tabindex="0"
                      row-index="5"
                      class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                      aria-rowindex="7"
                      row-id="5"
                      style="transform: translateY(220px); height: 44px"
                    >
                      <div
                        role="gridcell"
                        comp-id="137"
                        col-id="category"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                        tabindex="-1"
                        aria-colindex="2"
                        style="left: 0px; width: 240px"
                      >
                        Waste Management
                      </div>
                      <div
                        role="gridcell"
                        comp-id="138"
                        col-id="severity"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                        tabindex="-1"
                        aria-colindex="3"
                        style="left: 240px; width: 170px"
                      >
                        <span
                          class="bcn-grid-chip"
                          style="--_chip: var(--color-background-utility-warning)"
                          ><span class="bcn-grid-chip__dot"></span>Needs Attention</span
                        >
                      </div>
                      <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height">) -->
                    </div>
                    <div
                      role="row"
                      comp-id="143"
                      tabindex="0"
                      row-index="6"
                      class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                      aria-rowindex="8"
                      row-id="6"
                      style="transform: translateY(264px); height: 44px"
                    >
                      <div
                        role="gridcell"
                        comp-id="144"
                        col-id="category"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                        tabindex="-1"
                        aria-colindex="2"
                        style="left: 0px; width: 240px"
                      >
                        Vegetation &amp; Habitat Protection
                      </div>
                      <div
                        role="gridcell"
                        comp-id="145"
                        col-id="severity"
```
