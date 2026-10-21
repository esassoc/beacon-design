# Data tab — Permits / Segments grids: markup, part 1 of 3

```html
<div class="bcn-view-pane" id="pane-permits">
  <div id="grid-permits" class="pt-grid">
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
            aria-multiselectable="true"
            aria-rowcount="16"
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
                  style="width: 1100px"
                >
                  <div
                    class="ag-header-row ag-header-row-column"
                    role="row"
                    tabindex="0"
                    aria-rowindex="1"
                    style="top: 0px; height: 48px; width: 1100px"
                  >
                    <div
                      class="ag-header-cell ag-column-first ag-header-parent-hidden ag-focus-managed"
                      role="columnheader"
                      col-id="ag-Grid-SelectionColumn"
                      aria-colindex="1"
                      tabindex="-1"
                      style="top: 0px; height: 48px; width: 50px; left: 0px"
                    >
                      <div
                        class="ag-header-cell-resize ag-hidden"
                        data-ref="eResize"
                        role="presentation"
                        aria-hidden="true"
                      ></div>
                      <div
                        role="presentation"
                        class="ag-labeled ag-label-align-right ag-checkbox ag-input-field ag-header-select-all"
                      >
                        <div
                          class="ag-input-field-label ag-label ag-hidden ag-checkbox-label"
                          data-ref="eLabel"
                          aria-hidden="true"
                          role="presentation"
                          id="ag-40-label"
                        ></div>
                        <div
                          class="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper"
                          data-ref="eWrapper"
                          role="presentation"
                        >
                          <input
                            class="ag-input-field-input ag-checkbox-input"
                            data-ref="eInput"
                            type="checkbox"
                            id="ag-40-input"
                            tabindex="-1"
                            aria-label="Column with Header Selection"
                            style=""
                          />
                        </div>
                      </div>
                      <div
                        class="ag-header-cell-comp-wrapper"
                        data-ref="eHeaderCompWrapper"
                        role="presentation"
                      >
                        <div class="ag-cell-label-container" role="presentation">
                          <div class="ag-header-cell-label" data-ref="eLabel" role="presentation">
                            <span class="ag-header-cell-text" data-ref="eText"></span>
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
                    <div
                      class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                      role="columnheader"
                      col-id="name"
                      aria-colindex="2"
                      tabindex="-1"
                      aria-sort="none"
                      style="top: 0px; height: 48px; width: 240px; touch-action: none; left: 50px"
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
                      class="ag-header-cell ag-column-last ag-header-parent-hidden ag-header-cell-sortable ag-right-aligned-header ag-focus-managed"
                      role="columnheader"
                      col-id="segments"
                      aria-colindex="8"
                      tabindex="-1"
                      aria-sort="none"
                      style="top: 0px; height: 48px; width: 100px; touch-action: none; left: 1000px"
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
                            <span class="ag-header-cell-text" data-ref="eText">Segments</span>
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
                    <!-- …and 5 more like this (<div class="ag-header-cell ag-column-first ag-header-parent-hidden ag-focus-managed">) -->
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
                  style="width: 1100px"
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
                  style="height: 660px; width: 0px; max-width: 0px; min-width: 0px"
                ></div>
                <!--AG-ROW-CONTAINER-->
                <div
                  class="ag-viewport ag-center-cols-viewport"
                  data-ref="eViewport"
                  role="rowgroup"
                  style="height: 660px"
                >
                  <div
                    class="ag-center-cols-container"
                    data-ref="eContainer"
                    role="presentation"
                    style="width: 1100px; height: 660px"
                  >
                    <div
                      role="row"
                      comp-id="61"
                      tabindex="0"
                      row-index="0"
                      class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first"
                      aria-rowindex="2"
                      aria-selected="false"
                      row-id="0"
                      style="transform: translateY(0px); height: 44px"
                    >
                      <div
                        role="gridcell"
                        comp-id="62"
                        col-id="ag-Grid-SelectionColumn"
                        class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                        tabindex="-1"
                        aria-colindex="1"
                        style="left: 0px; width: 50px"
                      >
                        <div class="ag-cell-wrapper" role="presentation">
                          <div class="ag-selection-checkbox" role="presentation">
                            <!--AG-CHECKBOX-->
                            <div
                              role="presentation"
                              data-ref="eCheckbox"
                              class="ag-labeled ag-label-align-right ag-checkbox ag-input-field"
                            >
                              <div
                                class="ag-input-field-label ag-label ag-hidden ag-checkbox-label"
                                data-ref="eLabel"
                                aria-hidden="true"
                                role="presentation"
                                id="ag-64-label"
                              ></div>
                              <div
                                class="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper"
                                data-ref="eWrapper"
                                role="presentation"
                              >
                                <input
                                  class="ag-input-field-input ag-checkbox-input"
                                  data-ref="eInput"
                                  type="checkbox"
                                  id="ag-64-input"
                                  tabindex="-1"
                                  aria-label="Press Space to toggle row selection (unchecked)"
                                  style=""
                                />
                              </div>
                            </div>
                          </div>
                          <span class="ag-cell-value" role="presentation"></span>
                        </div>
                      </div>
                      <div
                        role="gridcell"
                        comp-id="65"
                        col-id="name"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                        tabindex="-1"
                        aria-colindex="2"
                        style="left: 50px; width: 240px"
                      >
                        Nationwide Permit (Section 404)
                      </div>
                      <div
                        role="gridcell"
                        comp-id="66"
                        col-id="status"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                        tabindex="-1"
                        aria-colindex="3"
                        style="left: 290px; width: 160px"
                      >
                        <span class="bcn-grid-chip" style="--_chip: var(--st-cleared)"
                          ><span class="bcn-grid-chip__dot"></span>Issued</span
                        >
                      </div>
                      <div
                        role="gridcell"
                        comp-id="292"
                        col-id="segments"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-right-aligned-cell"
                        tabindex="-1"
                        aria-colindex="8"
                        style="left: 1000px; width: 100px"
                      >
                        10
                      </div>
                      <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height">) -->
                    </div>
                    <div
                      role="row"
                      comp-id="71"
                      tabindex="0"
                      row-index="1"
                      class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                      aria-rowindex="3"
                      aria-selected="false"
                      row-id="1"
                      style="transform: translateY(44px); height: 44px"
                    >
                      <div
                        role="gridcell"
                        comp-id="72"
                        col-id="ag-Grid-SelectionColumn"
                        class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                        tabindex="-1"
                        aria-colindex="1"
                        style="left: 0px; width: 50px"
                      >
                        <div class="ag-cell-wrapper" role="presentation">
                          <div class="ag-selection-checkbox" role="presentation">
                            <!--AG-CHECKBOX-->
                            <div
                              role="presentation"
                              data-ref="eCheckbox"
                              class="ag-labeled ag-label-align-right ag-checkbox ag-input-field"
                            >
                              <div
                                class="ag-input-field-label ag-label ag-hidden ag-checkbox-label"
                                data-ref="eLabel"
                                aria-hidden="true"
                                role="presentation"
                                id="ag-74-label"
                              ></div>
                              <div
                                class="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper"
                                data-ref="eWrapper"
                                role="presentation"
                              >
                                <input
                                  class="ag-input-field-input ag-checkbox-input"
                                  data-ref="eInput"
                                  type="checkbox"
                                  id="ag-74-input"
                                  tabindex="-1"
                                  aria-label="Press Space to toggle row selection (unchecked)"
                                  style=""
                                />
                              </div>
                            </div>
                          </div>
                          <span class="ag-cell-value" role="presentation"></span>
                        </div>
                      </div>
                      <div
                        role="gridcell"
                        comp-id="75"
                        col-id="name"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                        tabindex="-1"
                        aria-colindex="2"
                        style="left: 50px; width: 240px"
                      >
                        Refuge Right-of-Way (SF-299)
                      </div>
                      <div
                        role="gridcell"
                        comp-id="76"
                        col-id="status"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                        tabindex="-1"
                        aria-colindex="3"
                        style="left: 290px; width: 160px"
                      >
                        <span class="bcn-grid-chip" style="--_chip: var(--st-cleared)"
                          ><span class="bcn-grid-chip__dot"></span>Issued</span
                        >
                      </div>
                      <div
                        role="gridcell"
                        comp-id="293"
                        col-id="segments"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-right-aligned-cell"
                        tabindex="-1"
                        aria-colindex="8"
                        style="left: 1000px; width: 100px"
                      >
                        0
                      </div>
                      <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height">) -->
                    </div>
                    <div
                      role="row"
                      comp-id="81"
                      tabindex="0"
                      row-index="2"
                      class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                      aria-rowindex="4"
                      aria-selected="false"
                      row-id="2"
                      style="transform: translateY(88px); height: 44px"
                    >
                      <div
                        role="gridcell"
                        comp-id="82"
                        col-id="ag-Grid-SelectionColumn"
                        class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                        tabindex="-1"
                        aria-colindex="1"
                        style="left: 0px; width: 50px"
                      >
                        <div class="ag-cell-wrapper" role="presentation">
                          <div class="ag-selection-checkbox" role="presentation">
                            <!--AG-CHECKBOX-->
                            <div
                              role="presentation"
                              data-ref="eCheckbox"
                              class="ag-labeled ag-label-align-right ag-checkbox ag-input-field"
                            >
                              <div
                                class="ag-input-field-label ag-label ag-hidden ag-checkbox-label"
                                data-ref="eLabel"
                                aria-hidden="true"
                                role="presentation"
                                id="ag-84-label"
                              ></div>
                              <div
                                class="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper"
                                data-ref="eWrapper"
                                role="presentation"
                              >
                                <input
                                  class="ag-input-field-input ag-checkbox-input"
                                  data-ref="eInput"
                                  type="checkbox"
                                  id="ag-84-input"
                                  tabindex="-1"
                                  aria-label="Press Space to toggle row selection (unchecked)"
                                  style=""
                                />
                              </div>
                            </div>
                          </div>
                          <span class="ag-cell-value" role="presentation"></span>
                        </div>
                      </div>
                      <div
                        role="gridcell"
                        comp-id="85"
                        col-id="name"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                        tabindex="-1"
                        aria-colindex="2"
                        style="left: 50px; width: 240px"
                      >
                        Utility Accommodation Permit
                      </div>
                      <div
                        role="gridcell"
                        comp-id="86"
                        col-id="status"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                        tabindex="-1"
                        aria-colindex="3"
                        style="left: 290px; width: 160px"
                      >
                        <span class="bcn-grid-chip" style="--_chip: var(--st-in-preparation)"
                          ><span class="bcn-grid-chip__dot"></span>In Preparation</span
                        >
                      </div>
                      <div
                        role="gridcell"
                        comp-id="294"
                        col-id="segments"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-right-aligned-cell"
                        tabindex="-1"
                        aria-colindex="8"
                        style="left: 1000px; width: 100px"
                      >
                        1
                      </div>
                      <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height">) -->
                    </div>
                    <div
                      role="row"
                      comp-id="91"
                      tabindex="0"
                      row-index="3"
                      class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                      aria-rowindex="5"
                      aria-selected="false"
                      row-id="3"
                      style="transform: translateY(132px); height: 44px"
                    >
                      <div
                        role="gridcell"
                        comp-id="92"
                        col-id="ag-Grid-SelectionColumn"
                        class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                        tabindex="-1"
                        aria-colindex="1"
                        style="left: 0px; width: 50px"
                      >
                        <div class="ag-cell-wrapper" role="presentation">
                          <div class="ag-selection-checkbox" role="presentation">
                            <!--AG-CHECKBOX-->
                            <div
                              role="presentation"
                              data-ref="eCheckbox"
                              class="ag-labeled ag-label-align-right ag-checkbox ag-input-field"
                            >
                              <div
                                class="ag-input-field-label ag-label ag-hidden ag-checkbox-label"
                                data-ref="eLabel"
                                aria-hidden="true"
                                role="presentation"
                                id="ag-94-label"
                              ></div>
                              <div
                                class="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper"
                                data-ref="eWrapper"
                                role="presentation"
                              >
                                <input
                                  class="ag-input-field-input ag-checkbox-input"
                                  data-ref="eInput"
                                  type="checkbox"
                                  id="ag-94-input"
                                  tabindex="-1"
                                  aria-label="Press Space to toggle row selection (unchecked)"
                                  style=""
                                />
                              </div>
                            </div>
                          </div>
                          <span class="ag-cell-value" role="presentation"></span>
                        </div>
                      </div>
                      <div
                        role="gridcell"
                        comp-id="95"
                        col-id="name"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                        tabindex="-1"
                        aria-colindex="2"
                        style="left: 50px; width: 240px"
                      >
                        Water Quality Certification (401)
                      </div>
                      <div
                        role="gridcell"
                        comp-id="96"
                        col-id="status"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                        tabindex="-1"
                        aria-colindex="3"
                        style="left: 290px; width: 160px"
                      >
                        <span class="bcn-grid-chip" style="--_chip: var(--st-under-review)"
                          ><span class="bcn-grid-chip__dot"></span>Under Review</span
                        >
                      </div>
                      <div
                        role="gridcell"
                        comp-id="295"
                        col-id="segments"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-right-aligned-cell"
                        tabindex="-1"
                        aria-colindex="8"
                        style="left: 1000px; width: 100px"
                      >
                        2
                      </div>
                      <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height">) -->
                    </div>
                    <div
                      role="row"
                      comp-id="101"
                      tabindex="0"
                      row-index="4"
                      class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                      aria-rowindex="6"
                      aria-selected="false"
                      row-id="4"
                      style="transform: translateY(176px); height: 44px"
                    >
                      <div
                        role="gridcell"
                        comp-id="102"
                        col-id="ag-Grid-SelectionColumn"
                        class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                        tabindex="-1"
                        aria-colindex="1"
                        style="left: 0px; width: 50px"
                      >
                        <div class="ag-cell-wrapper" role="presentation">
                          <div class="ag-selection-checkbox" role="presentation">
                            <!--AG-CHECKBOX-->
                            <div
                              role="presentation"
                              data-ref="eCheckbox"
                              class="ag-labeled ag-label-align-right ag-checkbox ag-input-field"
                            >
                              <div
                                class="ag-input-field-label ag-label ag-hidden ag-checkbox-label"
                                data-ref="eLabel"
                                aria-hidden="true"
                                role="presentation"
                                id="ag-104-label"
                              ></div>
                              <div
                                class="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper"
                                data-ref="eWrapper"
                                role="presentation"
                              >
                                <input
                                  class="ag-input-field-input ag-checkbox-input"
                                  data-ref="eInput"
                                  type="checkbox"
                                  id="ag-104-input"
                                  tabindex="-1"
                                  aria-label="Press Space to toggle row selection (unchecked)"
                                  style=""
                                />
                              </div>
                            </div>
                          </div>
                          <span class="ag-cell-value" role="presentation"></span>
                        </div>
                      </div>
                      <div
                        role="gridcell"
                        comp-id="105"
                        col-id="name"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                        tabindex="-1"
                        aria-colindex="2"
                        style="left: 50px; width: 240px"
                      >
                        Construction Stormwater (NPDES)
                      </div>
                      <div
                        role="gridcell"
                        comp-id="106"
                        col-id="status"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                        tabindex="-1"
                        aria-colindex="3"
                        style="left: 290px; width: 160px"
                      >
                        <span class="bcn-grid-chip" style="--_chip: var(--st-in-preparation)"
                          ><span class="bcn-grid-chip__dot"></span>In Preparation</span
                        >
                      </div>
                      <div
                        role="gridcell"
                        comp-id="296"
                        col-id="segments"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-right-aligned-cell"
                        tabindex="-1"
                        aria-colindex="8"
                        style="left: 1000px; width: 100px"
                      >
                        2
                      </div>
                      <!-- …and 4 more like this (<div class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height">) -->
                    </div>
                    <div
                      role="row"
                      comp-id="111"
                      tabindex="0"
                      row-index="5"
                      class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                      aria-rowindex="7"
                      aria-selected="false"
                      row-id="5"
                      style="transform: translateY(220px); height: 44px"
                    >
                      <div
                        role="gridcell"
                        comp-id="112"
                        col-id="ag-Grid-SelectionColumn"
                        class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                        tabindex="-1"
                        aria-colindex="1"
                        style="left: 0px; width: 50px"
                      >
                        <div class="ag-cell-wrapper" role="presentation">
                          <div class="ag-selection-checkbox" role="presentation">
                            <!--AG-CHECKBOX-->
                            <div
                              role="presentation"
                              data-ref="eCheckbox"
                              class="ag-labeled ag-label-align-right ag-checkbox ag-input-field"
                            >
                              <div
                                class="ag-input-field-label ag-label ag-hidden ag-checkbox-label"
                                data-ref="eLabel"
                                aria-hidden="true"
                                role="presentation"
                                id="ag-114-label"
                              ></div>
                              <div
                                class="ag-wrapper ag-input-wrapper ag-checkbox-input-wrapper"
                                data-ref="eWrapper"
                                role="presentation"
                              >
                                <input
                                  class="ag-input-field-input ag-checkbox-input"
                                  data-ref="eInput"
                                  type="checkbox"
                                  id="ag-114-input"
                                  tabindex="-1"
                                  aria-label="Press Space to toggle row selection (unchecked)"
                                  style=""
                                />
                              </div>
                            </div>
                          </div>
                          <span class="ag-cell-value" role="presentation"></span>
                        </div>
                      </div>
                      <div
                        role="gridcell"
                        comp-id="115"
                        col-id="name"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                        tabindex="-1"
                        aria-colindex="2"
                        style="left: 50px; width: 240px"
                      >
                        Hydraulic Project Approval (HPA)
                      </div>
                      <div
                        role="gridcell"
                        comp-id="116"
                        col-id="status"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-grid-status-cell"
                        tabindex="-1"
                        aria-colindex="3"
                        style="left: 290px; width: 160px"
                      >
                        <span class="bcn-grid-chip" style="--_chip: var(--st-under-review)"
                          ><span class="bcn-grid-chip__dot"></span>Under Review</span
                        >
                      </div>
                      <div
                        role="gridcell"
                        comp-id="297"
                        col-id="segments"
                        class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-last ag-right-aligned-cell"
                        tabindex="-1"
                        aria-colindex="8"
                        style="left: 1000px; width: 100px"
                      >
                        2
                      </div>
```
