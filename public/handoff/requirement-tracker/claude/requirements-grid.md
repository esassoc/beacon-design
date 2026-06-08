# Requirements grid

The AG Grid itself — the real grid (ag-grid-community), not a styled table. Column set mirrors the live Progress Report view: Source Document · Commitment ID · Requirement Name · Requirement Text · Requirement Type · Status · Comment · Action · Milestone(s) · Resource Category.

## Key decisions
- Theme is the Beacon "gold-star" Quartz theme ported verbatim from esassoc/Beacon (beacon-grid-theme.ts): teal-900 header, ESA-orange accent (#f9a134 — NOT teal), 13px DM Sans, 48/44 header/row heights, Lucide-funnel filter icon via iconOverrides, suppressHeaderMenuButton (funnel only, no hamburger).
- Columns use explicit (wide) widths and DO NOT fit-to-width — the grid overflows the viewport and scrolls left/right, like Beacon's data-catalog grids.
- Status renders as a compact chip (4px radius, 12px, status dot) centered in the row via a flex cell class — it is a renderer, not a theme feature.
- Linked cells (Source Document, Commitment ID, Requirement Name) render as regular-weight underlined links in the brand link color.
- The grid is the only wired view; the data shape is ActionRow in tracker-fixture.ts. The 5 tracking columns the FEIR export lacks (Requirement Text, Status, Comment, Action, Milestone) are synthesized deterministically in the fixture — flag this if real values are needed.

## Gotchas
- AG Grid v33+ defaults to the Theming API (JS object), not CSS-class themes — there is no ag-theme-*.css to import. Beacon ships Material globally but its own backlog promotes this Quartz theme as the target; match Quartz.
- The accent is ORANGE, not the header teal — easy to get wrong since the header is teal.
- Quick-filter fires filterChanged ASYNCHRONOUSLY; read displayed-row-count in the onFilterChanged callback, never synchronously after setting quickFilterText.
- The grid renders client-side; status chip + link styles are injected outside the Astro scope, so they are authored as global rules.

## Done when
- Teal header with funnel filter icons; orange sort/filter-active accent; columns overflow horizontally; status chips compact + centered; links underlined regular-weight.

## Markup
```html
<div id="tracker-grid" class="tracker-grid">
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
                style="width: 2460px"
              >
                <div
                  class="ag-header-row ag-header-row-column"
                  role="row"
                  tabindex="0"
                  aria-rowindex="1"
                  style="top: 0px; height: 48px; width: 2460px"
                >
                  <div
                    class="ag-header-cell ag-column-first ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                    role="columnheader"
                    col-id="sourceDoc"
                    aria-colindex="1"
                    tabindex="-1"
                    aria-sort="none"
                    style="
                      top: 0px;
                      height: 48px;
                      width: 260px;
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
                            >Source Document</span
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
                              ></span
                            ></span>
                            <span
                              class="ag-sort-indicator-icon ag-sort-absolute-descending-icon ag-hidden"
                              data-ref="eSortAbsoluteDesc"
                              aria-hidden="true"
                              ><span
                                class="ag-icon ag-icon-adesc"
                                role="presentation"
                                unselectable="on"
                              ></span
                            ></span>
                            <span
                              class="ag-sort-indicator-icon ag-sort-none-icon ag-hidden"
                              data-ref="eSortNone"
                              aria-hidden="true"
                              ><span
                                class="ag-icon ag-icon-none"
                                role="presentation"
                                unselectable="on"
                              ></span
                            ></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                    role="columnheader"
                    col-id="commitment"
                    aria-colindex="2"
                    tabindex="-1"
                    aria-sort="none"
                    style="
                      top: 0px;
                      height: 48px;
                      width: 170px;
                      touch-action: none;
                      left: 260px;
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
                            >Commitment ID</span
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
                              ></span
                            ></span>
                            <span
                              class="ag-sort-indicator-icon ag-sort-absolute-descending-icon ag-hidden"
                              data-ref="eSortAbsoluteDesc"
                              aria-hidden="true"
                              ><span
                                class="ag-icon ag-icon-adesc"
                                role="presentation"
                                unselectable="on"
                              ></span
                            ></span>
                            <span
                              class="ag-sort-indicator-icon ag-sort-none-icon ag-hidden"
                              data-ref="eSortNone"
                              aria-hidden="true"
                              ><span
                                class="ag-icon ag-icon-none"
                                role="presentation"
                                unselectable="on"
                              ></span
                            ></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                    role="columnheader"
                    col-id="name"
                    aria-colindex="3"
                    tabindex="-1"
                    aria-sort="none"
                    style="
                      top: 0px;
                      height: 48px;
                      width: 340px;
                      touch-action: none;
                      left: 430px;
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
                            >Requirement Name</span
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
                              ></span
                            ></span>
                            <span
                              class="ag-sort-indicator-icon ag-sort-absolute-descending-icon ag-hidden"
                              data-ref="eSortAbsoluteDesc"
                              aria-hidden="true"
                              ><span
                                class="ag-icon ag-icon-adesc"
                                role="presentation"
                                unselectable="on"
                              ></span
                            ></span>
                            <span
                              class="ag-sort-indicator-icon ag-sort-none-icon ag-hidden"
                              data-ref="eSortNone"
                              aria-hidden="true"
                              ><span
                                class="ag-icon ag-icon-none"
                                role="presentation"
                                unselectable="on"
                              ></span
                            ></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-focus-managed"
                    role="columnheader"
                    col-id="requirementText"
                    aria-colindex="4"
                    tabindex="-1"
                    aria-sort="none"
                    style="
                      top: 0px;
                      height: 48px;
                      width: 460px;
                      touch-action: none;
                      left: 770px;
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
                            >Requirement Text</span
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
                              ></span
                            ></span>
                            <span
                              class="ag-sort-indicator-icon ag-sort-absolute-descending-icon ag-hidden"
                              data-ref="eSortAbsoluteDesc"
                              aria-hidden="true"
                              ><span
                                class="ag-icon ag-icon-adesc"
                                role="presentation"
                                unselectable="on"
                              ></span
                            ></span>
                            <span
                              class="ag-sort-indicator-icon ag-sort-none-icon ag-hidden"
                              data-ref="eSortNone"
                              aria-hidden="true"
                              ><span
                                class="ag-icon ag-icon-none"
                                role="presentation"
                                unselectable="on"
                              ></span
                            ></span>
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
                style="width: 2460px"
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
                  style="width: 2460px; height: 5720px"
                >
                  <div
                    role="row"
                    comp-id="51"
                    tabindex="0"
                    row-index="0"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute ag-row-first"
                    aria-rowindex="2"
                    row-id="0"
                    style="transform: translateY(0px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="52"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="53"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">MM-BIO-1</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="54"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#">Develop WEAP Training</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="55"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      All project personnel shall receive develop WEAP Training prior to
                      beginning work on site, with attendance documented for the
                      compliance record.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="56"
                    tabindex="0"
                    row-index="1"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="3"
                    row-id="1"
                    style="transform: translateY(44px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="57"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="58"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">MM-BIO-1</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="59"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#"
                        >Provide WEAP Training to all Project personnel</a
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="60"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      All project personnel shall receive provide WEAP Training to all
                      Project personnel prior to beginning work on site, with attendance
                      documented for the compliance record.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="61"
                    tabindex="0"
                    row-index="2"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="4"
                    row-id="2"
                    style="transform: translateY(88px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="62"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="63"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">MM-BIO-2</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="64"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#"
                        >If bird nests are found, establish no-disturbance buffers
                        zones</a
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="65"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      Requirement: If bird nests are found, establish no-disturbance
                      buffers zones, in accordance with the applicable FEIR mitigation
                      measure and standard conditions of approval.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="66"
                    tabindex="0"
                    row-index="3"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="5"
                    row-id="3"
                    style="transform: translateY(132px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="67"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="68"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">MM-BIO-2</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="69"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#"
                        >If work must occur within established no-disturbance buffer
                        zones</a
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="70"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      Requirement: If work must occur within established no-disturbance
                      buffer zones, in accordance with the applicable FEIR mitigation
                      measure and standard conditions of approval.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="71"
                    tabindex="0"
                    row-index="4"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="6"
                    row-id="4"
                    style="transform: translateY(176px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="72"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="73"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">MM-BIO-2</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="74"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#"
                        >Pre-construction survey for nesting raptors and other migratory
                        birds during nesting season</a
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="75"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      Prior to ground-disturbing activities, a qualified biologist shall
                      complete pre-construction survey for nesting raptors and other
                      migratory birds during nesting season within the project area and
                      submit findings to the City.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="76"
                    tabindex="0"
                    row-index="5"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="7"
                    row-id="5"
                    style="transform: translateY(220px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="77"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="78"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">MM-BIO-2</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="79"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#"
                        >Report of findings for construction within any no-disturbance
                        buffer zone</a
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="80"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      The applicant shall prepare report of findings for construction
                      within any no-disturbance buffer zone and submit it to the lead
                      agency within the timeframe specified in the FEIR mitigation
                      measure.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="81"
                    tabindex="0"
                    row-index="6"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="8"
                    row-id="6"
                    style="transform: translateY(264px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="82"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="83"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">MM-BIO-3</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="84"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#">
                        Pre-construction habitat assessment of the Project area to
                        characterize potential bat habitat and identify potentially active
                        roost sites</a
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="85"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      Prior to ground-disturbing activities, a qualified biologist shall
                      complete Pre-construction habitat assessment of the Project area to
                      characterize potential bat habitat and identify potentially active
                      roost sites within the project area and submit findings to the City.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="86"
                    tabindex="0"
                    row-index="7"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="9"
                    row-id="7"
                    style="transform: translateY(308px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="87"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="88"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">MM-BIO-3</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="89"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#"
                        >If active bat roosts or evidence of roosting is identified during
                        pre-construction surveys, establish no-disturbance buffer</a
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="90"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      Requirement: If active bat roosts or evidence of roosting is
                      identified during pre-construction surveys, establish no-disturbance
                      buffer, in accordance with the applicable FEIR mitigation measure
                      and standard conditions of approval.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="91"
                    tabindex="0"
                    row-index="8"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="10"
                    row-id="8"
                    style="transform: translateY(352px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="92"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="93"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">MM-BIO-3</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="94"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#"
                        >Measures if potential bat roosting habitat or potentially active
                        bat roosts are identified during the habitat assessment</a
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="95"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      Requirement: Measures if potential bat roosting habitat or
                      potentially active bat roosts are identified during the habitat
                      assessment, in accordance with the applicable FEIR mitigation
                      measure and standard conditions of approval.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="96"
                    tabindex="0"
                    row-index="9"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="11"
                    row-id="9"
                    style="transform: translateY(396px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="97"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="98"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">MM-BIO-3</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="99"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#"
                        >Pre-construction survey if avoidance or bat maternity roosting
                        season and winter torpor is infeasible</a
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="100"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      Prior to ground-disturbing activities, a qualified biologist shall
                      complete pre-construction survey if avoidance or bat maternity
                      roosting season and winter torpor is infeasible within the project
                      area and submit findings to the City.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="101"
                    tabindex="0"
                    row-index="10"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="12"
                    row-id="10"
                    style="transform: translateY(440px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="102"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="103"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">SCA AES-1</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="104"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#">Blight</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="105"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      Requirement: Blight, in accordance with the applicable FEIR
                      mitigation measure and standard conditions of approval.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="106"
                    tabindex="0"
                    row-index="11"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="13"
                    row-id="11"
                    style="transform: translateY(484px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="107"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="108"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">SCA AES-2</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="109"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#"
                        >Best management practices for graffiti</a
                      >
                    </div>
                    <div
                      role="gridcell"
                      comp-id="110"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      The contractor shall implement best management practices for
                      graffiti as a best management practice throughout construction and
                      maintain it until the activity is complete.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="111"
                    tabindex="0"
                    row-index="12"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="14"
                    row-id="12"
                    style="transform: translateY(528px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="112"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="113"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">SCA AES-2</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="114"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#">Graffiti removal</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="115"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      Requirement: Graffiti removal, in accordance with the applicable
                      FEIR mitigation measure and standard conditions of approval.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="116"
                    tabindex="0"
                    row-index="13"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="15"
                    row-id="13"
                    style="transform: translateY(572px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="117"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="118"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">SCA AES-3</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="119"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#">Landscape Installation</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="120"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      Requirement: Landscape Installation, in accordance with the
                      applicable FEIR mitigation measure and standard conditions of
                      approval.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="121"
                    tabindex="0"
                    row-index="14"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="16"
                    row-id="14"
                    style="transform: translateY(616px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="122"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="123"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">SCA AES-3</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="124"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#">Landscape Maintenance</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="125"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      Requirement: Landscape Maintenance, in accordance with the
                      applicable FEIR mitigation measure and standard conditions of
                      approval.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="126"
                    tabindex="0"
                    row-index="15"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="17"
                    row-id="15"
                    style="transform: translateY(660px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="127"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="128"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">SCA AES-3</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="129"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#">Landscape Plan</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="130"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      The project applicant shall prepare and implement a Landscape Plan
                      prior to the affected project phase, subject to City review and
                      approval.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="131"
                    tabindex="0"
                    row-index="16"
                    class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="18"
                    row-id="16"
                    style="transform: translateY(704px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="132"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="133"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">SCA AES-4</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="134"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#">Exterior lighting fixtures</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="135"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      Project design shall incorporate exterior lighting fixtures
                      consistent with the standards and performance criteria identified in
                      the FEIR.
                    </div>
                  </div>
                  <div
                    role="row"
                    comp-id="136"
                    tabindex="0"
                    row-index="17"
                    class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                    aria-rowindex="19"
                    row-id="17"
                    style="transform: translateY(748px); height: 44px"
                  >
                    <div
                      role="gridcell"
                      comp-id="137"
                      col-id="sourceDoc"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                      tabindex="-1"
                      aria-colindex="1"
                      style="left: 0px; width: 260px"
                    >
                      <a class="tg-name" href="#">3600 Alameda Avenue Project FEIR</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="138"
                      col-id="commitment"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="2"
                      style="left: 260px; width: 170px"
                    >
                      <a class="tg-name" href="#">SCA AIR-1</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="139"
                      col-id="name"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="3"
                      style="left: 430px; width: 340px"
                    >
                      <a class="tg-name" href="#">Dust control measures - complaints</a>
                    </div>
                    <div
                      role="gridcell"
                      comp-id="140"
                      col-id="requirementText"
                      class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                      tabindex="-1"
                      aria-colindex="4"
                      style="left: 770px; width: 460px"
                    >
                      A qualified specialist shall conduct dust control measures -
                      complaints and document results in accordance with the approved
                      monitoring protocol identified in the FEIR.
                    </div>
                  </div>
                </div>
              </div>
              <!--AG-ROW-CONTAINER-->
              <div
                class="ag-pinned-right-cols-container ag-hidden"
                data-ref="eContainer"
                role="rowgroup"
                aria-hidden="true"
                style="height: 5720px; width: 0px; max-width: 0px; min-width: 0px"
              ></div>
              <!--AG-ROW-CONTAINER-->
              <div
                class="ag-full-width-container"
                data-ref="eContainer"
                role="rowgroup"
                style="height: 5720px"
              ></div>
            </div>
            <!--AG-FAKE-VERTICAL-SCROLL-->
            <div
              class="ag-body-vertical-scroll ag-apple-scrollbar ag-scrollbar-invisible"
              aria-hidden="true"
              style="width: 16px; max-width: 16px; min-width: 16px"
            >
              <div
                class="ag-body-vertical-scroll-viewport"
                data-ref="eViewport"
                style="width: 16px; max-width: 16px; min-width: 16px"
              >
                <div
                  class="ag-body-vertical-scroll-container"
                  data-ref="eContainer"
                  style="height: 5720px; width: 16px; max-width: 16px; min-width: 16px"
                ></div>
              </div>
            </div>
          </div>
          <div
            class="ag-sticky-top"
            data-ref="eStickyTop"
            role="presentation"
            style="top: 49px; height: 0px; width: calc(100% + 0px)"
          >
            <!--AG-ROW-CONTAINER-->
            <div
              class="ag-pinned-left-sticky-top ag-hidden"
              data-ref="eContainer"
              role="rowgroup"
              aria-hidden="true"
              style="width: 0px; max-width: 0px; min-width: 0px"
            ></div>
            <!--AG-ROW-CONTAINER-->
            <div
              class="ag-viewport ag-sticky-top-viewport"
              data-ref="eViewport"
              role="rowgroup"
            >
              <div
                class="ag-sticky-top-container"
                data-ref="eContainer"
                role="presentation"
                style="width: 2460px"
              ></div>
            </div>
            <!--AG-ROW-CONTAINER-->
            <div
              class="ag-pinned-right-sticky-top ag-hidden"
              data-ref="eContainer"
              role="rowgroup"
              aria-hidden="true"
              style="width: 0px; max-width: 0px; min-width: 0px"
            ></div>
            <!--AG-ROW-CONTAINER-->
            <div
              class="ag-sticky-top-full-width-container"
              data-ref="eContainer"
              role="rowgroup"
            ></div>
          </div>
          <div
            class="ag-sticky-bottom ag-invisible"
            data-ref="eStickyBottom"
            role="presentation"
            style="bottom: 0px; height: 0px; width: calc(100% + 0px)"
          >
            <!--AG-ROW-CONTAINER-->
            <div
              class="ag-pinned-left-sticky-bottom ag-hidden"
              data-ref="eContainer"
              role="rowgroup"
              aria-hidden="true"
              style="width: 0px; max-width: 0px; min-width: 0px"
            ></div>
            <!--AG-ROW-CONTAINER-->
            <div
              class="ag-viewport ag-sticky-bottom-viewport"
              data-ref="eViewport"
              role="rowgroup"
            >
              <div
                class="ag-sticky-bottom-container"
                data-ref="eContainer"
                role="presentation"
                style="width: 2460px"
              ></div>
            </div>
            <!--AG-ROW-CONTAINER-->
            <div
              class="ag-pinned-right-sticky-bottom ag-hidden"
              data-ref="eContainer"
              role="rowgroup"
              aria-hidden="true"
              style="width: 0px; max-width: 0px; min-width: 0px"
            ></div>
            <!--AG-ROW-CONTAINER-->
            <div
              class="ag-sticky-bottom-full-width-container"
              data-ref="eContainer"
              role="rowgroup"
            ></div>
          </div>
          <div
            class="ag-floating-bottom ag-invisible"
            data-ref="eBottom"
            role="presentation"
            style="min-height: 0px; height: 0px; overflow-y: scroll"
          >
            <!--AG-ROW-CONTAINER-->
            <div
              class="ag-pinned-left-floating-bottom ag-hidden"
              data-ref="eContainer"
              role="rowgroup"
              aria-hidden="true"
              style="width: 0px; max-width: 0px; min-width: 0px"
            ></div>
            <!--AG-ROW-CONTAINER-->
            <div
              class="ag-viewport ag-floating-bottom-viewport"
              data-ref="eViewport"
              role="rowgroup"
            >
              <div
                class="ag-floating-bottom-container"
                data-ref="eContainer"
                role="presentation"
                style="width: 2460px"
              ></div>
            </div>
            <!--AG-ROW-CONTAINER-->
            <div
              class="ag-pinned-right-floating-bottom ag-hidden"
              data-ref="eContainer"
              role="rowgroup"
              aria-hidden="true"
              style="width: 0px; max-width: 0px; min-width: 0px"
            ></div>
            <!--AG-ROW-CONTAINER-->
            <div
              class="ag-floating-bottom-full-width-container"
              data-ref="eContainer"
              role="rowgroup"
            ></div>
          </div>
          <!--AG-FAKE-HORIZONTAL-SCROLL-->
          <div
            class="ag-body-horizontal-scroll ag-apple-scrollbar ag-scrollbar-invisible"
            aria-hidden="true"
            style="bottom: 0px; height: 16px; max-height: 16px; min-height: 16px"
          >
            <div
              class="ag-horizontal-left-spacer ag-scroller-corner"
              data-ref="eLeftSpacer"
              style="width: 0px; max-width: 0px; min-width: 0px"
            ></div>
            <div
              class="ag-body-horizontal-scroll-viewport"
              data-ref="eViewport"
              style="height: 16px; max-height: 16px; min-height: 16px"
            >
              <div
                class="ag-body-horizontal-scroll-container"
                data-ref="eContainer"
                style="width: 2460px; height: 16px; max-height: 16px; min-height: 16px"
              ></div>
            </div>
            <div
              class="ag-horizontal-right-spacer ag-scroller-corner"
              data-ref="eRightSpacer"
              style="width: 0px; max-width: 0px; min-width: 0px"
            ></div>
          </div>
          <!--AG-OVERLAY-WRAPPER-->
          <div class="ag-overlay ag-hidden" role="presentation">
            <div class="ag-overlay-panel" role="presentation">
              <div
                class="ag-overlay-wrapper ag-layout-normal"
                data-ref="eOverlayWrapper"
                role="presentation"
                style="padding-top: 0px"
              ></div>
            </div>
          </div>
        </div>
        <div
          class="ag-tab-guard ag-tab-guard-bottom"
          role="presentation"
          tabindex="0"
        ></div>
      </div>
      <!--AG-PAGINATION-->
      <div
        class="ag-paging-panel ag-unselectable ag-focus-managed ag-hidden"
        id="ag-29"
        aria-hidden="true"
      >
        <div class="ag-tab-guard ag-tab-guard-top" role="presentation" tabindex="0"></div>
        <span class="ag-paging-page-size"
          ><div
            class="ag-picker-field ag-labeled ag-label-align-left ag-select"
            role="presentation"
          >
            <div data-ref="eLabel" class="ag-label" aria-hidden="false" id="ag-31-label">
              Page Size:
            </div>
            <div
              class="ag-wrapper ag-picker-field-wrapper ag-picker-collapsed"
              data-ref="eWrapper"
              tabindex="0"
              aria-expanded="false"
              role="combobox"
              aria-controls="ag-select-list-32"
              aria-label="Page Size"
            >
              <div
                class="ag-picker-field-display"
                data-ref="eDisplayField"
                id="ag-31-display"
              >
                100
              </div>
              <div class="ag-picker-field-icon" data-ref="eIcon" aria-hidden="true">
                <span
                  class="ag-icon ag-icon-small-down"
                  role="presentation"
                  unselectable="on"
                ></span>
              </div>
            </div></div></span
        ><span class="ag-paging-row-summary-panel">
          <span
            class="ag-paging-row-summary-panel-number"
            data-ref="lbFirstRowOnPage"
            id="ag-29-first-row"
            >1</span
          >
          <span id="ag-29-to">to</span>
          <span
            class="ag-paging-row-summary-panel-number"
            data-ref="lbLastRowOnPage"
            id="ag-29-last-row"
            >0</span
          >
          <span id="ag-29-of">of</span>
          <span
            class="ag-paging-row-summary-panel-number"
            data-ref="lbRecordCount"
            id="ag-29-row-count"
            >0</span
          > </span
        ><span class="ag-paging-page-summary-panel" role="presentation">
          <div
            class="ag-button ag-paging-button ag-disabled"
            data-ref="btFirst"
            role="button"
            aria-label="First Page"
            tabindex="0"
            aria-disabled="true"
          >
            <span
              class="ag-icon ag-icon-first"
              role="presentation"
              unselectable="on"
            ></span>
          </div>
          <div
            class="ag-button ag-paging-button ag-disabled"
            data-ref="btPrevious"
            role="button"
            aria-label="Previous Page"
            tabindex="0"
            aria-disabled="true"
          >
            <span
              class="ag-icon ag-icon-previous"
              role="presentation"
              unselectable="on"
            ></span>
          </div>
          <span class="ag-paging-description">
            <span id="ag-29-start-page">Page</span>
            <span
              class="ag-paging-number"
              data-ref="lbCurrent"
              id="ag-29-start-page-number"
              >1</span
            >
            <span id="ag-29-of-page">of</span>
            <span class="ag-paging-number" data-ref="lbTotal" id="ag-29-of-page-number"
              >1</span
            >
          </span>
          <div
            class="ag-button ag-paging-button ag-disabled"
            data-ref="btNext"
            role="button"
            aria-label="Next Page"
            tabindex="0"
            aria-disabled="true"
          >
            <span
              class="ag-icon ag-icon-next"
              role="presentation"
              unselectable="on"
            ></span>
          </div>
          <div
            class="ag-button ag-paging-button ag-disabled"
            data-ref="btLast"
            role="button"
            aria-label="Last Page"
            tabindex="0"
            aria-disabled="true"
          >
            <span
              class="ag-icon ag-icon-last"
              role="presentation"
              unselectable="on"
            ></span>
          </div>
        </span>
        <div
          class="ag-tab-guard ag-tab-guard-bottom"
          role="presentation"
          tabindex="0"
        ></div>
      </div>
    </div>
  </div>
</div>
```

## Styles
```css
:where(.ag-theme-inputStyle-7) {
:where(.ag-input-field-input[type=number]:not(.ag-number-field-input-stepper)){-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}
:where(.ag-ltr) .ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){padding-left:var(--ag-input-padding-start)}
&:where(.ag-ltr,.ag-rtl) .ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){padding:0 var(--ag-input-padding-start)}
:where(.ag-ltr) :where(.ag-column-select-header-filter-wrapper),:where(.ag-ltr) :where(.ag-filter-add-select),:where(.ag-ltr) :where(.ag-filter-filter),:where(.ag-ltr) :where(.ag-filter-toolpanel-search),:where(.ag-ltr) :where(.ag-floating-filter-search-icon),:where(.ag-ltr) :where(.ag-mini-filter){.ag-input-wrapper:before{margin-left:var(--ag-spacing)}
:where(.ag-theme-checkboxStyle-4) {
.ag-checkbox-input-wrapper,.ag-radio-button-input-wrapper{background-color:var(--ag-checkbox-unchecked-background-color);border:solid var(--ag-checkbox-border-width) var(--ag-checkbox-unchecked-border-color);flex:none;height:var(--ag-icon-size);position:relative;width:var(--ag-icon-size);&:where(.ag-checked){background-color:var(--ag-checkbox-checked-background-color);border-color:var(--ag-checkbox-checked-border-color)}
&:where(.ag-disabled){filter:grayscale();opacity:.5}
.ag-cell-editing-error .ag-checkbox-input-wrapper:focus-within{box-shadow:var(--ag-focus-error-shadow)}
.ag-paging-panel{align-items:center;border-top:var(--ag-footer-row-border);display:flex;flex-wrap:wrap-reverse;gap:calc(var(--ag-spacing)*4);justify-content:flex-end;min-height:var(--ag-pagination-panel-height);padding:calc(var(--ag-spacing)*.5) var(--ag-cell-horizontal-padding);row-gap:calc(var(--ag-spacing)*.5);@container (width < 600px){justify-content:center}
.tracker-grid{width:100%;height:calc(100vh - 420px);min-height:400px}
.tg-name{color:var(--color-text-link, #005862);font-weight:var(--font-weight-regular, 400);text-decoration:underline}
:where(.ag-theme-batchEditStyle-3) {
.ag-cell-batch-edit{background-color:var(--ag-cell-batch-edit-background-color);color:var(--ag-cell-batch-edit-text-color);display:inherit}
.ag-row-batch-edit{background-color:var(--ag-row-batch-edit-background-color);color:var(--ag-row-batch-edit-text-color)}
:where(.ag-theme-iconSet-5) {
.ag-icon-aggregation::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M18%207V4H6l6%208-6%208h12v-3%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-arrows::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpolyline%20points%3D%225%209%202%2012%205%2015%22%2F%3E%3Cpolyline%20points%3D%229%205%2012%202%2015%205%22%2F%3E%3Cpolyline%20points%3D%2215%2019%2012%2022%209%2019%22%2F%3E%3Cpolyline%20points%3D%2219%209%2022%2012%2019%2015%22%2F%3E%3Cline%20x1%3D%222%22%20x2%3D%2222%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%3Cline%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%222%22%20y2%3D%2222%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-asc::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m5%2012%207-7%207%207%22%2F%3E%3Cpath%20d%3D%22M12%2019V5%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-cancel::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m18%206-12%2012%22%2F%3E%3Cpath%20d%3D%22m6%206%2012%2012%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-chart::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cline%20x1%3D%2218%22%20x2%3D%2218%22%20y1%3D%2220%22%20y2%3D%2210%22%2F%3E%3Cline%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%2220%22%20y2%3D%224%22%2F%3E%3Cline%20x1%3D%226%22%20x2%3D%226%22%20y1%3D%2220%22%20y2%3D%2214%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-color-picker::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m19%2011-8-8-8.6%208.6a2%202%200%200%200%200%202.8l5.2%205.2c.8.8%202%20.8%202.8%200L19%2011Z%22%2F%3E%3Cpath%20d%3D%22m5%202%205%205%22%2F%3E%3Cpath%20d%3D%22M2%2013h15%22%2F%3E%3Cpath%20d%3D%22M22%2020a2%202%200%201%201-4%200c0-1.6%201.7-2.4%202-4%20.3%201.6%202%202.4%202%204Z%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-columns::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M9%203H5a2%202%200%200%200-2%202v4m6-6h10a2%202%200%200%201%202%202v4M9%203v18m0%200h10a2%202%200%200%200%202-2V9M9%2021H5a2%202%200%200%201-2-2V9m0%200h18%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-contracted::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m9%2018%206-6-6-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-copy::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Crect%20width%3D%2214%22%20height%3D%2214%22%20x%3D%228%22%20y%3D%228%22%20rx%3D%222%22%20ry%3D%222%22%2F%3E%3Cpath%20d%3D%22M4%2016c-1.1%200-2-.9-2-2V4c0-1.1.9-2%202-2h10c1.1%200%202%20.9%202%202%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-cross::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M18%206%206%2018%22%2F%3E%3Cpath%20d%3D%22m6%206%2012%2012%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-csv::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M14.5%202H6a2%202%200%200%200-2%202v16a2%202%200%200%200%202%202h12a2%202%200%200%200%202-2V7.5L14.5%202z%22%2F%3E%3Cpolyline%20points%3D%2214%202%2014%208%2020%208%22%2F%3E%3Cpath%20d%3D%22M8%2013h2%22%2F%3E%3Cpath%20d%3D%22M8%2017h2%22%2F%3E%3Cpath%20d%3D%22M14%2013h2%22%2F%3E%3Cpath%20d%3D%22M14%2017h2%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-cut::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Ccircle%20cx%3D%226%22%20cy%3D%226%22%20r%3D%223%22%2F%3E%3Cpath%20d%3D%22M8.12%208.12%2012%2012%22%2F%3E%3Cpath%20d%3D%22M20%204%208.12%2015.88%22%2F%3E%3Ccircle%20cx%3D%226%22%20cy%3D%2218%22%20r%3D%223%22%2F%3E%3Cpath%20d%3D%22M14.8%2014.8%2020%2020%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-desc::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M12%205v14%22%2F%3E%3Cpath%20d%3D%22m19%2012-7%207-7-7%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-down::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M12%205v14%22%2F%3E%3Cpath%20d%3D%22m19%2012-7%207-7-7%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-excel::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M14.5%202H6a2%202%200%200%200-2%202v16a2%202%200%200%200%202%202h12a2%202%200%200%200%202-2V7.5L14.5%202z%22%2F%3E%3Cpolyline%20points%3D%2214%202%2014%208%2020%208%22%2F%3E%3Cpath%20d%3D%22M8%2013h2%22%2F%3E%3Cpath%20d%3D%22M8%2017h2%22%2F%3E%3Cpath%20d%3D%22M14%2013h2%22%2F%3E%3Cpath%20d%3D%22M14%2017h2%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-expanded::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m15%2018-6-6%206-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-eye::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M2%2012s3-7%2010-7%2010%207%2010%207-3%207-10%207-10-7-10-7Z%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%223%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-eye-slash::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M9.88%209.88a3%203%200%201%200%204.24%204.24%22%2F%3E%3Cpath%20d%3D%22M10.73%205.08A10.43%2010.43%200%200%201%2012%205c7%200%2010%207%2010%207a13.16%2013.16%200%200%201-1.67%202.68%22%2F%3E%3Cpath%20d%3D%22M6.61%206.61A13.526%2013.526%200%200%200%202%2012s3%207%2010%207a9.74%209.74%200%200%200%205.39-1.61%22%2F%3E%3Cline%20x1%3D%222%22%20x2%3D%2222%22%20y1%3D%222%22%20y2%3D%2222%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-filter::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M3%206h18%22%2F%3E%3Cpath%20d%3D%22M7%2012h10%22%2F%3E%3Cpath%20d%3D%22M10%2018h4%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-first::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m17%2018-6-6%206-6%22%2F%3E%3Cpath%20d%3D%22M7%206v12%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-grip::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Ccircle%20cx%3D%225%22%20cy%3D%228%22%20r%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%228%22%20r%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%2219%22%20cy%3D%228%22%20r%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%225%22%20cy%3D%2216%22%20r%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2216%22%20r%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%2219%22%20cy%3D%2216%22%20r%3D%220.5%22%2F%3E%3Cg%20stroke%3D%22none%22%20fill%3D%22currentColor%22%3E%3Ccircle%20cx%3D%225%22%20cy%3D%228%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%228%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2219%22%20cy%3D%228%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%225%22%20cy%3D%2216%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2216%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2219%22%20cy%3D%2216%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'); }
.ag-icon-group::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M16%2012H3%22%2F%3E%3Cpath%20d%3D%22M16%2018H3%22%2F%3E%3Cpath%20d%3D%22M10%206H3%22%2F%3E%3Cpath%20d%3D%22M21%2018V8a2%202%200%200%200-2-2h-5%22%2F%3E%3Cpath%20d%3D%22m16%208-2-2%202-2%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-last::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m7%2018%206-6-6-6%22%2F%3E%3Cpath%20d%3D%22M17%206v12%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-left::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m12%2019-7-7%207-7%22%2F%3E%3Cpath%20d%3D%22M19%2012H5%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-linked::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M9%2017H7A5%205%200%200%201%207%207h2%22%2F%3E%3Cpath%20d%3D%22M15%207h2a5%205%200%201%201%200%2010h-2%22%2F%3E%3Cline%20x1%3D%228%22%20x2%3D%2216%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-loading::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cline%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%222%22%20y2%3D%226%22%2F%3E%3Cline%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%2218%22%20y2%3D%2222%22%2F%3E%3Cline%20x1%3D%224.93%22%20x2%3D%227.76%22%20y1%3D%224.93%22%20y2%3D%227.76%22%2F%3E%3Cline%20x1%3D%2216.24%22%20x2%3D%2219.07%22%20y1%3D%2216.24%22%20y2%3D%2219.07%22%2F%3E%3Cline%20x1%3D%222%22%20x2%3D%226%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%3Cline%20x1%3D%2218%22%20x2%3D%2222%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%3Cline%20x1%3D%224.93%22%20x2%3D%227.76%22%20y1%3D%2219.07%22%20y2%3D%2216.24%22%2F%3E%3Cline%20x1%3D%2216.24%22%20x2%3D%2219.07%22%20y1%3D%227.76%22%20y2%3D%224.93%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-maximize::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpolyline%20points%3D%2215%203%2021%203%2021%209%22%2F%3E%3Cpolyline%20points%3D%229%2021%203%2021%203%2015%22%2F%3E%3Cline%20x1%3D%2221%22%20x2%3D%2214%22%20y1%3D%223%22%20y2%3D%2210%22%2F%3E%3Cline%20x1%3D%223%22%20x2%3D%2210%22%20y1%3D%2221%22%20y2%3D%2214%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-menu::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cline%20x1%3D%224%22%20x2%3D%2220%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%3Cline%20x1%3D%224%22%20x2%3D%2220%22%20y1%3D%226%22%20y2%3D%226%22%2F%3E%3Cline%20x1%3D%224%22%20x2%3D%2220%22%20y1%3D%2218%22%20y2%3D%2218%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-menu-alt::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%225%22%20r%3D%220.75%22%20fill%3D%22%23D9D9D9%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%220.75%22%20fill%3D%22%23D9D9D9%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2219%22%20r%3D%220.75%22%20fill%3D%22%23D9D9D9%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-minimize::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpolyline%20points%3D%224%2014%2010%2014%2010%2020%22%2F%3E%3Cpolyline%20points%3D%2220%2010%2014%2010%2014%204%22%2F%3E%3Cline%20x1%3D%2214%22%20x2%3D%2221%22%20y1%3D%2210%22%20y2%3D%223%22%2F%3E%3Cline%20x1%3D%223%22%20x2%3D%2210%22%20y1%3D%2221%22%20y2%3D%2214%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-minus::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M8%2012h8%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-next::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m9%2018%206-6-6-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-none::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m7%2015%205%205%205-5%22%2F%3E%3Cpath%20d%3D%22m7%209%205-5%205%205%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-not-allowed::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22m4.9%204.9%2014.2%2014.2%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-paste::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M15%202H9a1%201%200%200%200-1%201v2c0%20.6.4%201%201%201h6c.6%200%201-.4%201-1V3c0-.6-.4-1-1-1Z%22%2F%3E%3Cpath%20d%3D%22M8%204H6a2%202%200%200%200-2%202v14a2%202%200%200%200%202%202h12a2%202%200%200%200%202-2M16%204h2a2%202%200%200%201%202%202v2M11%2014h10%22%2F%3E%3Cpath%20d%3D%22m17%2010%204%204-4%204%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-pin::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cline%20x1%3D%2212%22%20x2%3D%2212%22%20y1%3D%2217%22%20y2%3D%2222%22%2F%3E%3Cpath%20d%3D%22M5%2017h14v-1.76a2%202%200%200%200-1.11-1.79l-1.78-.9A2%202%200%200%201%2015%2010.76V6h1a2%202%200%200%200%200-4H8a2%202%200%200%200%200%204h1v4.76a2%202%200%200%201-1.11%201.79l-1.78.9A2%202%200%200%200%205%2015.24Z%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-pivot::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M15%203v18%22%2F%3E%3Crect%20width%3D%2218%22%20height%3D%2218%22%20x%3D%223%22%20y%3D%223%22%20rx%3D%222%22%2F%3E%3Cpath%20d%3D%22M21%209H3%22%2F%3E%3Cpath%20d%3D%22M21%2015H3%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-plus::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%2F%3E%3Cpath%20d%3D%22M8%2012h8%22%2F%3E%3Cpath%20d%3D%22M12%208v8%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-previous::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m15%2018-6-6%206-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-right::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M5%2012h14%22%2F%3E%3Cpath%20d%3D%22m12%205%207%207-7%207%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-save::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M12%2017V3%22%2F%3E%3Cpath%20d%3D%22m6%2011%206%206%206-6%22%2F%3E%3Cpath%20d%3D%22M19%2021H5%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-search::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%228%22%2F%3E%3Cpath%20d%3D%22m21%2021-4.3-4.3%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-settings::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M20%207h-9%22%2F%3E%3Cpath%20d%3D%22M14%2017H5%22%2F%3E%3Ccircle%20cx%3D%2217%22%20cy%3D%2217%22%20r%3D%223%22%2F%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%223%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-small-left::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m15%2018-6-6%206-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-small-right::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m9%2018%206-6-6-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-tick::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M20%206%209%2017l-5-5%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-tree-closed::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m9%2018%206-6-6-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-tree-indeterminate::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M5%2012h14%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-tree-open::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-unlinked::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M9%2017H7A5%205%200%200%201%207%207%22%2F%3E%3Cpath%20d%3D%22M15%207h2a5%205%200%200%201%204%208%22%2F%3E%3Cline%20x1%3D%228%22%20x2%3D%2212%22%20y1%3D%2212%22%20y2%3D%2212%22%2F%3E%3Cline%20x1%3D%222%22%20x2%3D%2222%22%20y1%3D%222%22%20y2%3D%2222%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-up::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22m5%2012%207-7%207%207%22%2F%3E%3Cpath%20d%3D%22M12%2019V5%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-aasc::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M13.2012%208.07928C13.6346%208.0793%2014.0128%208.15365%2014.3359%208.30193C14.6609%208.45018%2014.9141%208.65595%2015.0947%208.9201C15.2754%209.18439%2015.3683%209.49109%2015.374%209.83904H14.1904C14.1676%209.60898%2014.0695%209.4303%2013.8965%209.30291C13.7235%209.1756%2013.4889%209.1115%2013.1924%209.1115C12.9909%209.1115%2012.8204%209.1404%2012.6816%209.19744C12.543%209.25255%2012.4364%209.32917%2012.3623%209.42791C12.2901%209.52678%2012.2539%209.63933%2012.2539%209.76482C12.2501%209.8692%2012.272%209.9604%2012.3193%2010.0383C12.3688%2010.1162%2012.4369%2010.1843%2012.5225%2010.2414C12.6079%2010.2964%2012.7064%2010.3451%2012.8184%2010.3869C12.9304%2010.4268%2013.0505%2010.4609%2013.1777%2010.4894L13.7031%2010.6144C13.9578%2010.6715%2014.1914%2010.7479%2014.4043%2010.8429C14.6173%2010.938%2014.8021%2011.0547%2014.958%2011.1935C15.1138%2011.3323%2015.2348%2011.4957%2015.3203%2011.6838C15.4077%2011.8719%2015.4522%2012.088%2015.4541%2012.3312C15.4522%2012.6885%2015.3611%2012.9986%2015.1807%2013.2609C15.0019%2013.5214%2014.7427%2013.7248%2014.4043%2013.8693C14.0678%2014.0118%2013.6617%2014.0832%2013.1865%2014.0832C12.7153%2014.0832%2012.3048%2014.0107%2011.9551%2013.8664C11.6071%2013.7219%2011.3345%2013.5071%2011.1387%2013.2238C10.9449%2012.9387%2010.8435%2012.5862%2010.834%2012.1662H12.0283C12.0416%2012.362%2012.0984%2012.5252%2012.1973%2012.6564C12.298%2012.7857%2012.4323%2012.8838%2012.5996%2012.9504C12.7688%2013.0149%2012.96%2013.047%2013.1729%2013.047C13.3817%2013.047%2013.563%2013.0169%2013.7168%2012.9562C13.8727%2012.8954%2013.9935%2012.8106%2014.0791%2012.7023C14.1647%2012.5939%2014.208%2012.469%2014.208%2012.3283C14.2079%2012.1974%2014.1686%2012.0875%2014.0908%2011.9982C14.0148%2011.9089%2013.9022%2011.8324%2013.7539%2011.7697C13.6076%2011.707%2013.4276%2011.6501%2013.2148%2011.5988L12.5791%2011.4387C12.0869%2011.3189%2011.6982%2011.1318%2011.4131%2010.8771C11.128%2010.6224%2010.9855%2010.2793%2010.9873%209.84783C10.9854%209.49418%2011.0804%209.18439%2011.2705%208.9201C11.4625%208.65603%2011.7261%208.45015%2012.0605%208.30193C12.3951%208.15369%2012.7754%208.07928%2013.2012%208.07928Z%22%20fill%3D%22black%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.8125%2014.0002H4.48926L4.05664%2012.6681H1.94824L1.51465%2014.0002H0.19043L2.20703%208.15935H3.79883L5.8125%2014.0002ZM2.26172%2011.7043H3.74316L3.02539%209.49334H2.98047L2.26172%2011.7043Z%22%20fill%3D%22black%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.45215%208.15935C8.88165%208.15935%209.24031%208.22251%209.52734%208.34978C9.81445%208.47717%2010.0303%208.65477%2010.1748%208.88103C10.3192%209.10536%2010.3916%209.36368%2010.3916%209.65642C10.3916%209.88452%2010.3461%2010.085%2010.2549%2010.258C10.1637%2010.4289%2010.0384%2010.5696%209.87891%2010.6799C9.72117%2010.7882%209.54024%2010.8657%209.33691%2010.9113V10.9679C9.55917%2010.9775%209.76716%2011.0406%209.96094%2011.1564C10.1568%2011.2724%2010.3158%2011.4356%2010.4375%2011.6447C10.5591%2011.8519%2010.6201%2012.099%2010.6201%2012.3859C10.6201%2012.6958%2010.5427%2012.9727%2010.3887%2013.216C10.2366%2013.4573%2010.0113%2013.6486%209.71289%2013.7892C9.41443%2013.9299%209.04655%2014.0002%208.60938%2014.0002H6.11426V8.15935H8.45215ZM7.34863%2012.9904H8.35547C8.69943%2012.9904%208.95057%2012.9252%209.1084%2012.7941C9.26621%2012.661%209.34473%2012.4834%209.34473%2012.2629C9.34468%2012.1014%209.30643%2011.9587%209.22852%2011.8351C9.15056%2011.7116%209.03903%2011.6145%208.89453%2011.5441C8.75195%2011.4738%208.58148%2011.4387%208.38379%2011.4387H7.34863V12.9904ZM7.34863%2010.6037H8.26465C8.43369%2010.6036%208.58376%2010.5737%208.71484%2010.5148C8.84793%2010.454%208.95227%2010.3683%209.02832%2010.258C9.10628%2010.1477%209.14551%2010.0155%209.14551%209.8615C9.14546%209.65055%209.07008%209.48001%208.91992%209.35076C8.77165%209.22169%208.56064%209.15741%208.28711%209.1574H7.34863V10.6037Z%22%20fill%3D%22black%22%2F%3E%3Cpath%20d%3D%22M7.16602%200.377127C7.44584%200.189493%207.82551%200.20905%208.08496%200.442557L11.418%203.44256C11.7257%203.71966%2011.7507%204.19428%2011.4736%204.50213C11.1966%204.80961%2010.7228%204.83441%2010.415%204.55779L7.60938%202.03338L5.11328%204.53045C4.82042%204.82326%204.34562%204.82322%204.05273%204.53045C3.75986%204.23757%203.75989%203.7628%204.05273%203.4699L7.05273%200.4699L7.16602%200.377127Z%22%20fill%3D%22black%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-adesc::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.3867%2011.4697C10.6796%2011.1771%2011.1544%2011.1769%2011.4473%2011.4697C11.7399%2011.7626%2011.7399%2012.2374%2011.4473%2012.5303L8.44727%2015.5303L8.33398%2015.623C8.05425%2015.8106%207.67449%2015.7909%207.41504%2015.5576L4.08203%2012.5576C3.77415%2012.2805%203.74927%2011.8059%204.02637%2011.498C4.30342%2011.1907%204.77722%2011.1657%205.08496%2011.4424L7.89062%2013.9668L10.3867%2011.4697Z%22%20fill%3D%22black%22%2F%3E%3Cpath%20d%3D%22M13.2012%203.0791C13.6346%203.07912%2014.0128%203.1535%2014.3359%203.30176C14.6611%203.45006%2014.9141%203.65661%2015.0947%203.9209C15.2752%204.18513%2015.3683%204.49104%2015.374%204.83887H14.1904C14.1676%204.60882%2014.0695%204.43012%2013.8965%204.30273C13.7235%204.17546%2013.4889%204.11133%2013.1924%204.11133C12.9909%204.11133%2012.8204%204.14023%2012.6816%204.19727C12.5431%204.25236%2012.4364%204.32902%2012.3623%204.42773C12.2901%204.52659%2012.2539%204.63919%2012.2539%204.76465C12.2501%204.86901%2012.272%204.96023%2012.3193%205.03809C12.3688%205.11604%2012.4369%205.18417%2012.5225%205.24121C12.6079%205.29623%2012.7064%205.34496%2012.8184%205.38672C12.9304%205.42661%2013.0505%205.46075%2013.1777%205.48926L13.7031%205.61426C13.9578%205.67128%2014.1914%205.74776%2014.4043%205.84277C14.6172%205.93784%2014.8021%206.05457%2014.958%206.19336C15.1139%206.33216%2015.2348%206.49633%2015.3203%206.68457C15.4076%206.8727%2015.4522%207.08885%2015.4541%207.33203C15.4521%207.68929%2015.3612%207.99944%2015.1807%208.26172C15.0019%208.52216%2014.7427%208.72465%2014.4043%208.86914C14.0678%209.01165%2013.6617%209.08301%2013.1865%209.08301C12.7153%209.08299%2012.3048%209.01057%2011.9551%208.86621C11.6072%208.72173%2011.3345%208.50786%2011.1387%208.22461C10.9447%207.9394%2010.8435%207.58622%2010.834%207.16602H12.0283C12.0416%207.36176%2012.0985%207.52509%2012.1973%207.65625C12.298%207.78554%2012.4323%207.88365%2012.5996%207.9502C12.7688%208.01477%2012.96%208.04785%2013.1729%208.04785C13.3817%208.04781%2013.5629%208.01678%2013.7168%207.95605C13.8727%207.89522%2013.9935%207.81051%2014.0791%207.70215C14.1646%207.59387%2014.2079%207.46965%2014.208%207.3291C14.208%207.19796%2014.1687%207.08739%2014.0908%206.99805C14.0148%206.90868%2013.9022%206.83228%2013.7539%206.76953C13.6076%206.70685%2013.4276%206.64993%2013.2148%206.59863L12.5791%206.43848C12.0868%206.31871%2011.6982%206.13163%2011.4131%205.87695C11.1279%205.62221%2010.9855%205.27916%2010.9873%204.84766C10.9854%204.49404%2011.0804%204.18517%2011.2705%203.9209C11.4625%203.65661%2011.7259%203.45006%2012.0605%203.30176C12.3951%203.15353%2012.7754%203.0791%2013.2012%203.0791Z%22%20fill%3D%22black%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.8125%209H4.48926L4.05664%207.66797H1.94824L1.51465%209H0.19043L2.20703%203.15918H3.79883L5.8125%209ZM2.26172%206.7041H3.74316L3.02539%204.49414H2.98047L2.26172%206.7041Z%22%20fill%3D%22black%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.45215%203.15918C8.88181%203.15918%209.24025%203.22322%209.52734%203.35059C9.81445%203.47798%2010.0303%203.6546%2010.1748%203.88086C10.3193%204.10518%2010.3916%204.36351%2010.3916%204.65625C10.3916%204.88432%2010.3461%205.08484%2010.2549%205.25781C10.1636%205.4289%2010.0386%205.57039%209.87891%205.68066C9.72118%205.78898%209.54022%205.86549%209.33691%205.91113V5.96875C9.55913%205.9783%209.76719%206.04044%209.96094%206.15625C10.1568%206.27223%2010.3158%206.43538%2010.4375%206.64453C10.5591%206.85173%2010.6201%207.09875%2010.6201%207.38574C10.6201%207.69567%2010.5427%207.97245%2010.3887%208.21582C10.2366%208.45719%2010.0113%208.64841%209.71289%208.78906C9.41442%208.9297%209.04658%208.99999%208.60938%209H6.11426V3.15918H8.45215ZM7.34863%207.99023H8.35547C8.69948%207.99023%208.95057%207.92504%209.1084%207.79395C9.26621%207.66085%209.34473%207.48325%209.34473%207.2627C9.34466%207.10125%209.3064%206.95844%209.22852%206.83496C9.15056%206.71143%209.03899%206.61427%208.89453%206.54395C8.75196%206.47365%208.58145%206.43848%208.38379%206.43848H7.34863V7.99023ZM7.34863%205.60352H8.26465C8.43369%205.60347%208.58376%205.57354%208.71484%205.51465C8.84791%205.45381%208.95228%205.36807%209.02832%205.25781C9.10623%205.14755%209.14551%205.01529%209.14551%204.86133C9.14542%204.65046%209.07002%204.48078%208.91992%204.35156C8.77163%204.22228%208.56087%204.15724%208.28711%204.15723H7.34863V5.60352Z%22%20fill%3D%22black%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-chevron-down::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%206L8%2010L4%206%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-chevron-left::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%2012L6%208L10%204%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-chevron-right::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6%2012L10%208L6%204%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-chevron-up::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M4%2010L8%206L12%2010%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-column-arrow::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0%2026C0%2028.2092%201.79086%2030%204%2030H14C16.2091%2030%2018%2028.2092%2018%2026V15H25.8786L24.4394%2016.4393C23.8536%2017.0251%2023.8536%2017.9749%2024.4394%2018.5607C25.0252%2019.1464%2025.9748%2019.1464%2026.5606%2018.5607L30.5606%2014.5607C31.1464%2013.9749%2031.1464%2013.0251%2030.5606%2012.4393L26.5606%208.43934C25.9748%207.85356%2025.0252%207.85356%2024.4394%208.43934C23.8536%209.02512%2023.8536%209.97488%2024.4394%2010.5607L25.8786%2012H18V6C18%203.79086%2016.2091%202%2014%202H4C1.79086%202%200%203.79086%200%206V26ZM14%205H10.5V12H15V6C15%205.44772%2014.5523%205%2014%205ZM4%205H7.5V12H3V6C3%205.44772%203.44772%205%204%205ZM10.5%2015H15V26C15%2026.5522%2014.5523%2027%2014%2027H10.5V15ZM4%2027H7.5V15H3V26C3%2026.5522%203.44772%2027%204%2027Z%22%20fill%3D%22currentColor%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-edit::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M3.5%2010.6262V12.5012H5.375L10.905%206.97122L9.03%205.09622L3.5%2010.6262ZM12.355%205.52122C12.4014%205.47497%2012.4381%205.42002%2012.4632%205.35953C12.4883%205.29905%2012.5012%205.23421%2012.5012%205.16872C12.5012%205.10324%2012.4883%205.0384%2012.4632%204.97791C12.4381%204.91742%2012.4014%204.86248%2012.355%204.81622L11.185%203.64622C11.1387%203.59987%2011.0838%203.5631%2011.0233%203.53801C10.9628%203.51291%2010.898%203.5%2010.8325%203.5C10.767%203.5%2010.7022%203.51291%2010.6417%203.53801C10.5812%203.5631%2010.5263%203.59987%2010.48%203.64622L9.565%204.56122L11.44%206.43622L12.355%205.52122Z%22%20fill%3D%22currentColor%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-filter-add::before { mask-image: url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5.12126%207.75L10.8517%207.75%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M6.65934%2011.748L9.32778%2011.748%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.2943%201.04872V6.19184M14.9886%203.74341H9.68478%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M8.25488%203C8.04799%203.18323%207.91706%203.45099%207.91699%203.74902C7.91713%204.04868%208.04988%204.31681%208.25879%204.5H2C1.58579%204.5%201.25%204.16421%201.25%203.75C1.25%203.33579%201.58579%203%202%203H8.25488Z%22%20fill%3D%22currentColor%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-pinned-bottom::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20class%3D%22ag-icon%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M3.47%2012.28A.75.75%200%200%201%204%2011h8a.75.75%200%200%201%200%201.5H4a.75.75%200%200%201-.53-.22ZM12.731%205.256a.75.75%200%200%201-.2.524l-4%204a.75.75%200%200%201-1.06%200l-4-4a.75.75%200%201%201%201.06-1.06l2.72%202.72V2a.75.75%200%200%201%201.5%200v5.44l2.72-2.72a.75.75%200%200%201%201.26.536Z%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-pinned-top::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M12.53%203.72A.75.75%200%200%201%2012%205H4a.75.75%200%200%201%200-1.5h8a.75.75%200%200%201%20.53.22ZM3.269%2010.744a.75.75%200%200%201%20.2-.524l4-4a.75.75%200%200%201%201.06%200l4%204a.75.75%200%201%201-1.06%201.06L8.75%208.56V14a.75.75%200%200%201-1.5%200V8.56l-2.72%202.72a.75.75%200%200%201-1.26-.536Z%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-small-down::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22black%22%20stroke%3D%22none%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20d%3D%22M7.334%2010.667%2016%2021.334l8.667-10.667H7.334Z%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-small-up::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22black%22%20stroke%3D%22none%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20d%3D%22M7.334%2021.333%2016%2010.666l8.667%2010.667H7.334Z%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-un-pin::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20class%3D%22ag-icon%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M8%2011a.75.75%200%200%200-.75.75v3.333a.75.75%200%201%200%201.5%200V11.75A.75.75%200%200%200%208%2011Z%22%2F%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M13.11%201.436a.75.75%200%200%200-1.22-.872l-10%2014a.75.75%200%201%200%201.22.872L5.207%2012.5h7.376a.75.75%200%200%200%20.75-.75v-1.174a2.08%202.08%200%200%200-1.153-1.863l-1.185-.599-.005-.002a.58.58%200%200%201-.323-.522V5.165a2.083%202.083%200%200%200%201.854-2.904l.589-.825Zm-3.943%205.52v.634a2.08%202.08%200%200%200%201.153%201.863l1.185.6.005.002a.58.58%200%200%201%20.323.522V11H6.28l2.887-4.044ZM9.277%201H5.25a2.084%202.084%200%200%200-.083%204.165v1.676l1.5-2.132v-.292a.75.75%200%200%200-.75-.75H5.25a.584.584%200%200%201%200-1.167h2.972L9.277%201Z%22%2F%3E%3C%2Fsvg%3E'); }
.ag-icon-filter::before { mask-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22ag-icon%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cstyle%3E*%20%7B%20vector-effect%3A%20non-scaling-stroke%3B%20%7D%3C%2Fstyle%3E%3Cpath%20d%3D%22M3%206h18%22%2F%3E%3Cpath%20d%3D%22M7%2012h10%22%2F%3E%3Cpath%20d%3D%22M10%2018h4%22%2F%3E%3C%2Fsvg%3E'); }
:where(.ag-theme-tabStyle-6) {
.ag-tabs-header{background-color:var(--ag-tab-bar-background-color);border-bottom:var(--ag-tab-bar-border);display:flex;flex:1;gap:var(--ag-tab-spacing);padding:var(--ag-tab-bar-top-padding) var(--ag-tab-bar-horizontal-padding) 0}
:where(.ag-ltr) .ag-tabs-close-button-wrapper{border-right:solid var(--ag-border-width) var(--ag-border-color)}
:where(.ag-ltr) .ag-tab.ag-tab-selected:where(:not(:first-of-type)){border-left-color:var(--ag-tab-selected-border-color)}
:where(.ag-ltr) .ag-tab.ag-tab-selected:where(:not(:last-of-type)){border-right-color:var(--ag-tab-selected-border-color)}
.ag-aria-description-container{border:0;clip-path:inset(50%);height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;z-index:9999}
:where(.ag-ltr){direction:ltr;.ag-body,.ag-body-horizontal-scroll,.ag-body-viewport,.ag-floating-bottom,.ag-floating-top,.ag-header,.ag-sticky-bottom,.ag-sticky-top{flex-direction:row}
.ag-root-wrapper{border:var(--ag-wrapper-border);border-radius:var(--ag-wrapper-border-radius);container-type:inline-size;display:flex;flex-direction:column;overflow:hidden;position:relative;&.ag-layout-normal{content-visibility:auto;height:100%}
&.ag-layout-normal{content-visibility:auto;height:100%}
.ag-root-wrapper-body{display:flex;flex-direction:row;&.ag-layout-normal{flex:1 1 auto;height:0;min-height:0}
&.ag-layout-normal{flex:1 1 auto;height:0;min-height:0}
.ag-unselectable{-webkit-user-select:none;-moz-user-select:none;user-select:none}
.ag-root{display:flex;flex-direction:column;position:relative;&.ag-layout-auto-height,&.ag-layout-normal{flex:1 1 auto;overflow:hidden;width:0}
&.ag-layout-normal{height:100%}
&.ag-layout-auto-height,&.ag-layout-normal{flex:1 1 auto;overflow:hidden;width:0}
&.ag-layout-normal{height:100%}
.ag-body,.ag-body-horizontal-scroll,.ag-body-viewport,.ag-floating-bottom,.ag-floating-top,.ag-header,.ag-sticky-bottom,.ag-sticky-top{flex-direction:row}
.ag-header{background-color:var(--ag-header-background-color);border-bottom:var(--ag-header-row-border);color:var(--ag-header-text-color);display:flex;font-family:var(--ag-header-font-family);font-size:var(--ag-header-font-size);font-weight:var(--ag-header-font-weight);overflow:hidden;white-space:nowrap;width:100%}
.ag-body-horizontal-scroll-viewport,.ag-body-vertical-scroll-viewport,.ag-body-viewport,.ag-center-cols-viewport,.ag-floating-bottom-viewport,.ag-floating-top-viewport,.ag-header-viewport,.ag-sticky-bottom-viewport,.ag-sticky-top-viewport{flex:1 1 auto;height:100%;min-width:0;overflow:hidden;position:relative}
.ag-body-viewport,.ag-center-cols-viewport,.ag-floating-bottom-viewport,.ag-floating-top-viewport,.ag-header-viewport,.ag-sticky-bottom-viewport,.ag-sticky-top-viewport{overflow-x:auto;-ms-overflow-style:none!important;scrollbar-width:none!important}
.ag-body-container,.ag-body-horizontal-scroll-container,.ag-body-vertical-scroll-container,.ag-center-cols-container,.ag-floating-bottom-container,.ag-floating-bottom-full-width-container,.ag-floating-top-container,.ag-full-width-container,.ag-header-container,.ag-pinned-left-cols-container,.ag-pinned-left-sticky-bottom,.ag-pinned-right-cols-container,.ag-pinned-right-sticky-bottom,.ag-sticky-bottom-container,.ag-sticky-top-container{position:relative}
.ag-floating-bottom-container,.ag-floating-top-container,.ag-header-container,.ag-pinned-left-floating-bottom,.ag-pinned-left-floating-top,.ag-pinned-right-floating-bottom,.ag-pinned-right-floating-top,.ag-sticky-bottom-container,.ag-sticky-top-container{height:100%;white-space:nowrap}
.ag-floating-top{display:flex;overflow:hidden;position:relative;white-space:nowrap;width:100%}
.ag-body,.ag-floating-bottom,.ag-floating-top{background-color:var(--ag-data-background-color)}
.ag-viewport{position:relative}
.ag-floating-bottom-container,.ag-floating-top-container,.ag-sticky-bottom-container,.ag-sticky-top-container{min-height:1px}
.ag-floating-bottom-full-width-container,.ag-floating-top-full-width-container,.ag-full-width-container,.ag-sticky-bottom-full-width-container,.ag-sticky-top-full-width-container{pointer-events:none;position:absolute;top:0}
:where(.ag-ltr) .ag-floating-bottom-full-width-container,:where(.ag-ltr) .ag-floating-top-full-width-container,:where(.ag-ltr) .ag-full-width-container,:where(.ag-ltr) .ag-sticky-bottom-full-width-container,:where(.ag-ltr) .ag-sticky-top-full-width-container{left:0}
.ag-floating-bottom-full-width-container,.ag-floating-top-full-width-container{display:inline-block;height:100%;overflow:hidden;width:100%}
.ag-body{display:flex;flex:1 1 auto;flex-direction:row!important;min-height:0;position:relative}
.ag-body-viewport{display:flex;overflow-x:hidden;&:where(.ag-layout-normal){overflow-y:auto;-webkit-overflow-scrolling:touch}
&:where(.ag-layout-normal){overflow-y:auto;-webkit-overflow-scrolling:touch}
.ag-center-cols-viewport{min-height:100%;width:100%}
.ag-center-cols-container,.ag-pinned-right-cols-container{display:block}
.ag-full-width-container{width:100%}
.ag-body-horizontal-scroll,.ag-body-vertical-scroll{display:flex;min-height:0;min-width:0;position:relative;&:where(.ag-scrollbar-invisible){bottom:0;position:absolute;&:where(.ag-apple-scrollbar){opacity:0;transition:opacity .4s;visibility:hidden;&:where(.ag-scrollbar-active),&:where(.ag-scrollbar-scrolling){opacity:1;visibility:visible}
.ag-body-vertical-scroll{height:100%;&:where(.ag-scrollbar-invisible){top:0;z-index:10}
:where(.ag-ltr) .ag-body-vertical-scroll{&:where(.ag-scrollbar-invisible){right:0}
.ag-body-vertical-scroll-viewport{overflow-y:scroll}
.ag-body-vertical-scroll-container{width:100%}
.ag-sticky-bottom,.ag-sticky-top{background-color:var(--ag-data-background-color);display:flex;height:0;overflow:hidden;position:absolute;width:100%;z-index:1}
.ag-sticky-bottom{box-sizing:content-box!important;:where(.ag-pinned-left-sticky-bottom),:where(.ag-pinned-right-sticky-bottom),:where(.ag-sticky-bottom-container){border-top:var(--ag-row-border);box-sizing:border-box}
:where(.ag-pinned-left-sticky-bottom),:where(.ag-pinned-right-sticky-bottom),:where(.ag-sticky-bottom-container){border-top:var(--ag-row-border);box-sizing:border-box}
.ag-floating-bottom{display:flex;overflow:hidden;position:relative;white-space:nowrap;width:100%}
.ag-body-horizontal-scroll{width:100%;&:where(.ag-scrollbar-invisible){left:0;right:0}
.ag-horizontal-left-spacer,.ag-horizontal-right-spacer{height:100%;min-width:0;overflow-x:scroll;&:where(.ag-scroller-corner){overflow-x:hidden}
&:where(.ag-scroller-corner){overflow-x:hidden}
.ag-body-horizontal-scroll-viewport{overflow-x:scroll}
.ag-body-horizontal-scroll-container{height:100%}
.ag-header-row{height:var(--ag-header-height);position:absolute}
.ag-header-row:where(:not(.ag-header-row-column-group)){overflow:hidden}
:where(.ag-header.ag-header-allow-overflow) .ag-header-row{overflow:visible}
:where(.ag-header-cell:not(.ag-right-aligned-header)){.ag-header-col-ref{color:var(--ag-subtle-text-color)}
:where(.ag-ltr) :where(.ag-header-cell:not(.ag-right-aligned-header)){.ag-header-col-ref{margin-right:var(--ag-spacing)}
.ag-header-label-icon,.ag-header-menu-icon{margin-left:var(--ag-spacing)}
.ag-header-cell{display:inline-flex;overflow:hidden}
.ag-header-cell,.ag-header-group-cell{align-items:center;gap:var(--ag-cell-widget-spacing);height:100%;padding:0 var(--ag-cell-horizontal-padding);position:absolute}
.ag-header-cell:where(:not(.ag-floating-filter)):before,.ag-header-group-cell:before{background-image:linear-gradient(var(--ag-internal-hover-color),var(--ag-internal-hover-color)),linear-gradient(var(--ag-internal-moving-color),var(--ag-internal-moving-color));content:"";inset:0;position:absolute;--ag-internal-moving-color:transparent;--ag-internal-hover-color:transparent;transition:--ag-internal-moving-color var(--ag-header-cell-background-transition-duration),--ag-internal-hover-color var(--ag-header-cell-background-transition-duration)}
:where(.ag-header-cell:not(.ag-floating-filter)>*,.ag-header-group-cell>*){position:relative;z-index:1}
.ag-header-cell-resize{align-items:center;cursor:ew-resize;display:flex;height:100%;position:absolute;top:0;width:8px;z-index:2}
:where(.ag-ltr) .ag-header-cell-resize{right:-3px}
.ag-header-cell-resize:after{background-color:var(--ag-header-column-resize-handle-color);content:"";height:var(--ag-header-column-resize-handle-height);position:absolute;top:calc(50% - var(--ag-header-column-resize-handle-height)*.5);width:var(--ag-header-column-resize-handle-width);z-index:1}
:where(.ag-ltr) .ag-header-cell-resize:after{left:calc(50% - var(--ag-header-column-resize-handle-width))}
.ag-header-cell-comp-wrapper{width:100%}
:where(.ag-header-cell:not(.ag-header-cell-auto-height)) .ag-header-cell-comp-wrapper{align-items:center;display:flex;height:100%}
.ag-cell-label-container{align-items:center;display:flex;flex-direction:row-reverse;height:100%;justify-content:space-between;width:100%}
.ag-floating-filter-button-button,.ag-header-cell-filter-button,.ag-header-cell-menu-button,.ag-header-expand-icon,.ag-panel-title-bar-button,:where(.ag-header-cell-sortable) .ag-header-cell-label,:where(.ag-header-group-cell-selectable) .ag-header-cell-comp-wrapper{cursor:pointer}
.ag-header-cell-filter-button,:where(.ag-header-cell.ag-header-active) .ag-header-cell-menu-button{opacity:1}
.ag-chart-menu-icon,.ag-chart-settings-next,.ag-chart-settings-prev,.ag-column-group-icons,.ag-column-select-header-icon,.ag-filter-toolpanel-expand,.ag-floating-filter-button-button,.ag-group-title-bar-icon,.ag-header-cell-filter-button,.ag-header-cell-menu-button,.ag-header-expand-icon,.ag-panel-title-bar-button,.ag-panel-title-bar-button-icon,.ag-set-filter-group-icons,:where(.ag-group-contracted) .ag-icon,:where(.ag-group-expanded) .ag-icon{background-color:var(--ag-icon-button-background-color);border-radius:var(--ag-icon-button-border-radius);box-shadow:0 0 0 var(--ag-icon-button-background-spread) var(--ag-icon-button-background-color);color:var(--ag-icon-button-color)}
.ag-header-cell-label,.ag-header-group-cell-label{align-items:center;align-self:stretch;display:flex;flex:1 1 auto;overflow:hidden;padding:5px 0}
.ag-header-cell-label{text-overflow:ellipsis}
.ag-header-cell-text,.ag-header-group-text{overflow:hidden;text-overflow:ellipsis}
.ag-header-cell-text{overflow-wrap:break-word}
.ag-sort-indicator-container{display:flex;gap:var(--ag-spacing)}
:where(.ag-ltr) .ag-sort-indicator-icon{padding-left:var(--ag-spacing)}
.ag-header-cell:after,.ag-header-group-cell:where(:not(.ag-header-span-height.ag-header-group-cell-no-group)):after{content:"";height:var(--ag-header-column-border-height);position:absolute;top:calc(50% - var(--ag-header-column-border-height)*.5);z-index:1}
:where(.ag-ltr) .ag-header-cell:after,:where(.ag-ltr) .ag-header-group-cell:where(:not(.ag-header-span-height.ag-header-group-cell-no-group)):after{border-right:var(--ag-header-column-border);right:0}
:where(.ag-row-animation) .ag-row{transition:transform .4s,top .4s,opacity .2s;&:where(.ag-after-created){transition:transform .4s,top .4s,height .4s,opacity .2s}
.ag-row-position-absolute{position:absolute}
.ag-row,.ag-spanned-row{color:var(--ag-cell-text-color);font-family:var(--ag-cell-font-family);font-size:var(--ag-cell-font-size);font-weight:var(--ag-cell-font-weight);white-space:nowrap;--ag-internal-content-line-height:calc(min(var(--ag-row-height), var(--ag-line-height, 1000px)) - var(--ag-internal-row-border-width, 1px) - 2px)}
.ag-row{background-color:var(--ag-data-background-color);border-bottom:var(--ag-row-border);height:var(--ag-row-height);width:100%;&.ag-row-editing-invalid{background-color:var(--ag-full-row-edit-invalid-background-color)}
.ag-cell{display:inline-block;height:100%;position:absolute;white-space:nowrap;&:focus-visible{box-shadow:none}
.ag-cell-value{flex:1 1 auto}
.ag-cell,.ag-full-width-row .ag-cell-wrapper.ag-row-group{border:1px solid transparent;line-height:var(--ag-internal-content-line-height);-webkit-font-smoothing:subpixel-antialiased}
:where(.ag-ltr) .ag-cell{border-right:var(--ag-column-border)}
.ag-cell-value:not(.ag-allow-overflow),.ag-group-value{overflow:hidden;text-overflow:ellipsis}
:where(.ag-ltr) .ag-cell:not(.ag-cell-inline-editing),:where(.ag-ltr) .ag-full-width-row .ag-cell-wrapper.ag-row-group{padding-left:calc(var(--ag-cell-horizontal-padding) - 1px + var(--ag-row-group-indent-size)*var(--ag-indentation-level));padding-right:calc(var(--ag-cell-horizontal-padding) - 1px)}
.ag-row-odd{background-color:var(--ag-odd-row-background-color)}
&:where(.ag-scrollbar-invisible){bottom:0;position:absolute;&:where(.ag-apple-scrollbar){opacity:0;transition:opacity .4s;visibility:hidden;&:where(.ag-scrollbar-active),&:where(.ag-scrollbar-scrolling){opacity:1;visibility:visible}
&:where(.ag-apple-scrollbar){opacity:0;transition:opacity .4s;visibility:hidden;&:where(.ag-scrollbar-active),&:where(.ag-scrollbar-scrolling){opacity:1;visibility:visible}
&:where(.ag-scrollbar-invisible){top:0;z-index:10}
&:where(.ag-scrollbar-invisible){right:0}
&:where(.ag-scrollbar-invisible){left:0;right:0}
.ag-pinned-left-header,.ag-pinned-right-header{display:inline-block;height:100%;overflow:hidden;position:relative}
.ag-pinned-left-header{border-right:var(--ag-pinned-column-border)}
.ag-pinned-right-header{border-left:var(--ag-pinned-column-border)}
.ag-pinned-left-floating-bottom,.ag-pinned-left-floating-top,.ag-pinned-right-floating-bottom,.ag-pinned-right-floating-top{min-width:0;overflow:hidden;position:relative}
.ag-pinned-left-sticky-top,.ag-pinned-right-sticky-top{height:100%;overflow:hidden;position:relative}
.ag-sticky-bottom-full-width-container,.ag-sticky-top-full-width-container{height:100%;overflow:hidden;width:100%}
.ag-body-horizontal-scroll:not(.ag-scrollbar-invisible){.ag-horizontal-left-spacer:not(.ag-scroller-corner){border-right:var(--ag-pinned-column-border)}
.ag-horizontal-right-spacer:not(.ag-scroller-corner){border-left:var(--ag-pinned-column-border)}
:has(> :where(.ag-theme-params-1)):not(:where(.ag-theme-params-1)) {
	--ag-inherited-accent-color: var(--ag-accent-color);
	--ag-inherited-advanced-filter-builder-button-bar-border: var(--ag-advanced-filter-builder-button-bar-border);
	--ag-inherited-advanced-filter-builder-column-pill-color: var(--ag-advanced-filter-builder-column-pill-color);
	--ag-inherited-advanced-filter-builder-indent-size: var(--ag-advanced-filter-builder-indent-size);
	--ag-inherited-advanced-filter-builder-join-pill-color: var(--ag-advanced-filter-builder-join-pill-color);
	--ag-inherited-advanced-filter-builder-option-pill-color: var(--ag-advanced-filter-builder-option-pill-color);
	--ag-inherited-advanced-filter-builder-value-pill-color: var(--ag-advanced-filter-builder-value-pill-color);
	--ag-inherited-background-color: var(--ag-background-color);
	--ag-inherited-border-color: var(--ag-border-color);
	--ag-inherited-border-radius: var(--ag-border-radius);
	--ag-inherited-border-width: var(--ag-border-width);
	--ag-inherited-browser-color-scheme: var(--ag-browser-color-scheme);
	--ag-inherited-button-active-background-color: var(--ag-button-active-background-color);
	--ag-inherited-button-active-border: var(--ag-button-active-border);
	--ag-inherited-button-active-text-color: var(--ag-button-active-text-color);
	--ag-inherited-button-background-color: var(--ag-button-background-color);
	--ag-inherited-button-border: var(--ag-button-border);
	--ag-inherited-button-border-radius: var(--ag-button-border-radius);
	--ag-inherited-button-disabled-background-color: var(--ag-button-disabled-background-color);
	--ag-inherited-button-disabled-border: var(--ag-button-disabled-border);
	--ag-inherited-button-disabled-text-color: var(--ag-button-disabled-text-color);
	--ag-inherited-button-font-weight: var(--ag-button-font-weight);
	--ag-inherited-button-horizontal-padding: var(--ag-button-horizontal-padding);
	--ag-inherited-button-hover-background-color: var(--ag-button-hover-background-color);
	--ag-inherited-button-hover-border: var(--ag-button-hover-border);
	--ag-inherited-button-hover-text-color: var(--ag-button-hover-text-color);
	--ag-inherited-button-text-color: var(--ag-button-text-color);
	--ag-inherited-button-vertical-padding: var(--ag-button-vertical-padding);
	--ag-inherited-card-shadow: var(--ag-card-shadow);
	--ag-inherited-cell-batch-edit-background-color: var(--ag-cell-batch-edit-background-color);
	--ag-inherited-cell-batch-edit-text-color: var(--ag-cell-batch-edit-text-color);
	--ag-inherited-cell-editing-border: var(--ag-cell-editing-border);
	--ag-inherited-cell-editing-shadow: var(--ag-cell-editing-shadow);
	--ag-inherited-cell-font-family: var(--ag-cell-font-family);
	--ag-inherited-cell-font-size: var(--ag-cell-font-size);
	--ag-inherited-cell-font-weight: var(--ag-cell-font-weight);
	--ag-inherited-cell-horizontal-padding: var(--ag-cell-horizontal-padding);
	--ag-inherited-cell-horizontal-padding-scale: var(--ag-cell-horizontal-padding-scale);
	--ag-inherited-cell-text-color: var(--ag-cell-text-color);
	--ag-inherited-cell-widget-spacing: var(--ag-cell-widget-spacing);
	--ag-inherited-chart-menu-label-color: var(--ag-chart-menu-label-color);
	--ag-inherited-chart-menu-panel-width: var(--ag-chart-menu-panel-width);
	--ag-inherited-checkbox-border-radius: var(--ag-checkbox-border-radius);
	--ag-inherited-checkbox-border-width: var(--ag-checkbox-border-width);
	--ag-inherited-checkbox-checked-background-color: var(--ag-checkbox-checked-background-color);
	--ag-inherited-checkbox-checked-border-color: var(--ag-checkbox-checked-border-color);
	--ag-inherited-checkbox-checked-shape-color: var(--ag-checkbox-checked-shape-color);
	--ag-inherited-checkbox-checked-shape-image: var(--ag-checkbox-checked-shape-image);
	--ag-inherited-checkbox-indeterminate-background-color: var(--ag-checkbox-indeterminate-background-color);
	--ag-inherited-checkbox-indeterminate-border-color: var(--ag-checkbox-indeterminate-border-color);
	--ag-inherited-checkbox-indeterminate-shape-color: var(--ag-checkbox-indeterminate-shape-color);
	--ag-inherited-checkbox-indeterminate-shape-image: var(--ag-checkbox-indeterminate-shape-image);
	--ag-inherited-checkbox-unchecked-background-color: var(--ag-checkbox-unchecked-background-color);
	--ag-inherited-checkbox-unchecked-border-color: var(--ag-checkbox-unchecked-border-color);
	--ag-inherited-chrome-background-color: var(--ag-chrome-background-color);
	--ag-inherited-color-picker-color-border-radius: var(--ag-color-picker-color-border-radius);
	--ag-inherited-color-picker-thumb-border-width: var(--ag-color-picker-thumb-border-width);
	--ag-inherited-color-picker-thumb-size: var(--ag-color-picker-thumb-size);
	--ag-inherited-color-picker-track-border-radius: var(--ag-color-picker-track-border-radius);
	--ag-inherited-color-picker-track-size: var(--ag-color-picker-track-size);
	--ag-inherited-column-border: var(--ag-column-border);
	--ag-inherited-column-drag-indicator-color: var(--ag-column-drag-indicator-color);
	--ag-inherited-column-drag-indicator-width: var(--ag-column-drag-indicator-width);
	--ag-inherited-column-drop-cell-background-color: var(--ag-column-drop-cell-background-color);
	--ag-inherited-column-drop-cell-border: var(--ag-column-drop-cell-border);
	--ag-inherited-column-drop-cell-drag-handle-color: var(--ag-column-drop-cell-drag-handle-color);
	--ag-inherited-column-drop-cell-text-color: var(--ag-column-drop-cell-text-color);
	--ag-inherited-column-hover-color: var(--ag-column-hover-color);
	--ag-inherited-column-panel-apply-button-background-color: var(--ag-column-panel-apply-button-background-color);
	--ag-inherited-column-panel-apply-button-color: var(--ag-column-panel-apply-button-color);
	--ag-inherited-column-select-indent-size: var(--ag-column-select-indent-size);
	--ag-inherited-data-background-color: var(--ag-data-background-color);
	--ag-inherited-data-font-size: var(--ag-data-font-size);
	--ag-inherited-dialog-border: var(--ag-dialog-border);
	--ag-inherited-dialog-shadow: var(--ag-dialog-shadow);
	--ag-inherited-drag-and-drop-image-background-color: var(--ag-drag-and-drop-image-background-color);
	--ag-inherited-drag-and-drop-image-border: var(--ag-drag-and-drop-image-border);
	--ag-inherited-drag-and-drop-image-not-allowed-border: var(--ag-drag-and-drop-image-not-allowed-border);
	--ag-inherited-drag-and-drop-image-shadow: var(--ag-drag-and-drop-image-shadow);
	--ag-inherited-drag-handle-color: var(--ag-drag-handle-color);
	--ag-inherited-dropdown-shadow: var(--ag-dropdown-shadow);
	--ag-inherited-filter-panel-apply-button-background-color: var(--ag-filter-panel-apply-button-background-color);
	--ag-inherited-filter-panel-apply-button-color: var(--ag-filter-panel-apply-button-color);
	--ag-inherited-filter-panel-card-subtle-color: var(--ag-filter-panel-card-subtle-color);
	--ag-inherited-filter-panel-card-subtle-hover-color: var(--ag-filter-panel-card-subtle-hover-color);
	--ag-inherited-filter-tool-panel-group-indent: var(--ag-filter-tool-panel-group-indent);
	--ag-inherited-find-active-match-background-color: var(--ag-find-active-match-background-color);
	--ag-inherited-find-active-match-color: var(--ag-find-active-match-color);
	--ag-inherited-find-match-background-color: var(--ag-find-match-background-color);
	--ag-inherited-find-match-color: var(--ag-find-match-color);
	--ag-inherited-focus-error-shadow: var(--ag-focus-error-shadow);
	--ag-inherited-focus-shadow: var(--ag-focus-shadow);
	--ag-inherited-font-family: var(--ag-font-family);
	--ag-inherited-font-size: var(--ag-font-size);
	--ag-inherited-font-weight: var(--ag-font-weight);
	--ag-inherited-footer-row-border: var(--ag-footer-row-border);
	--ag-inherited-foreground-color: var(--ag-foreground-color);
	--ag-inherited-formula-token-1-background-color: var(--ag-formula-token-1-background-color);
	--ag-inherited-formula-token-1-border: var(--ag-formula-token-1-border);
	--ag-inherited-formula-token-1-color: var(--ag-formula-token-1-color);
	--ag-inherited-formula-token-2-background-color: var(--ag-formula-token-2-background-color);
	--ag-inherited-formula-token-2-border: var(--ag-formula-token-2-border);
	--ag-inherited-formula-token-2-color: var(--ag-formula-token-2-color);
	--ag-inherited-formula-token-3-background-color: var(--ag-formula-token-3-background-color);
	--ag-inherited-formula-token-3-border: var(--ag-formula-token-3-border);
	--ag-inherited-formula-token-3-color: var(--ag-formula-token-3-color);
	--ag-inherited-formula-token-4-background-color: var(--ag-formula-token-4-background-color);
	--ag-inherited-formula-token-4-border: var(--ag-formula-token-4-border);
	--ag-inherited-formula-token-4-color: var(--ag-formula-token-4-color);
	--ag-inherited-formula-token-5-background-color: var(--ag-formula-token-5-background-color);
	--ag-inherited-formula-token-5-border: var(--ag-formula-token-5-border);
	--ag-inherited-formula-token-5-color: var(--ag-formula-token-5-color);
	--ag-inherited-formula-token-6-background-color: var(--ag-formula-token-6-background-color);
	--ag-inherited-formula-token-6-border: var(--ag-formula-token-6-border);
	--ag-inherited-formula-token-6-color: var(--ag-formula-token-6-color);
	--ag-inherited-formula-token-7-background-color: var(--ag-formula-token-7-background-color);
	--ag-inherited-formula-token-7-border: var(--ag-formula-token-7-border);
	--ag-inherited-formula-token-7-color: var(--ag-formula-token-7-color);
	--ag-inherited-full-row-edit-invalid-background-color: var(--ag-full-row-edit-invalid-background-color);
	--ag-inherited-header-background-color: var(--ag-header-background-color);
	--ag-inherited-header-cell-background-transition-duration: var(--ag-header-cell-background-transition-duration);
	--ag-inherited-header-cell-hover-background-color: var(--ag-header-cell-hover-background-color);
	--ag-inherited-header-cell-moving-background-color: var(--ag-header-cell-moving-background-color);
	--ag-inherited-header-column-border: var(--ag-header-column-border);
	--ag-inherited-header-column-border-height: var(--ag-header-column-border-height);
	--ag-inherited-header-column-resize-handle-color: var(--ag-header-column-resize-handle-color);
	--ag-inherited-header-column-resize-handle-height: var(--ag-header-column-resize-handle-height);
	--ag-inherited-header-column-resize-handle-width: var(--ag-header-column-resize-handle-width);
	--ag-inherited-header-font-family: var(--ag-header-font-family);
	--ag-inherited-header-font-size: var(--ag-header-font-size);
	--ag-inherited-header-font-weight: var(--ag-header-font-weight);
	--ag-inherited-header-height: var(--ag-header-height);
	--ag-inherited-header-row-border: var(--ag-header-row-border);
	--ag-inherited-header-text-color: var(--ag-header-text-color);
	--ag-inherited-header-vertical-padding-scale: var(--ag-header-vertical-padding-scale);
	--ag-inherited-icon-button-active-background-color: var(--ag-icon-button-active-background-color);
	--ag-inherited-icon-button-active-color: var(--ag-icon-button-active-color);
	--ag-inherited-icon-button-active-indicator-color: var(--ag-icon-button-active-indicator-color);
	--ag-inherited-icon-button-background-color: var(--ag-icon-button-background-color);
	--ag-inherited-icon-button-background-spread: var(--ag-icon-button-background-spread);
	--ag-inherited-icon-button-border-radius: var(--ag-icon-button-border-radius);
	--ag-inherited-icon-button-color: var(--ag-icon-button-color);
	--ag-inherited-icon-button-hover-background-color: var(--ag-icon-button-hover-background-color);
	--ag-inherited-icon-button-hover-color: var(--ag-icon-button-hover-color);
	--ag-inherited-icon-color: var(--ag-icon-color);
	--ag-inherited-icon-size: var(--ag-icon-size);
	--ag-inherited-input-background-color: var(--ag-input-background-color);
	--ag-inherited-input-border: var(--ag-input-border);
	--ag-inherited-input-border-radius: var(--ag-input-border-radius);
	--ag-inherited-input-disabled-background-color: var(--ag-input-disabled-background-color);
	--ag-inherited-input-disabled-border: var(--ag-input-disabled-border);
	--ag-inherited-input-disabled-text-color: var(--ag-input-disabled-text-color);
	--ag-inherited-input-focus-background-color: var(--ag-input-focus-background-color);
	--ag-inherited-input-focus-border: var(--ag-input-focus-border);
	--ag-inherited-input-focus-shadow: var(--ag-input-focus-shadow);
	--ag-inherited-input-focus-text-color: var(--ag-input-focus-text-color);
	--ag-inherited-input-height: var(--ag-input-height);
	--ag-inherited-input-icon-color: var(--ag-input-icon-color);
	--ag-inherited-input-invalid-background-color: var(--ag-input-invalid-background-color);
	--ag-inherited-input-invalid-border: var(--ag-input-invalid-border);
	--ag-inherited-input-invalid-text-color: var(--ag-input-invalid-text-color);
	--ag-inherited-input-padding-start: var(--ag-input-padding-start);
	--ag-inherited-input-placeholder-text-color: var(--ag-input-placeholder-text-color);
	--ag-inherited-input-text-color: var(--ag-input-text-color);
	--ag-inherited-invalid-color: var(--ag-invalid-color);
	--ag-inherited-list-item-height: var(--ag-list-item-height);
	--ag-inherited-menu-background-color: var(--ag-menu-background-color);
	--ag-inherited-menu-border: var(--ag-menu-border);
	--ag-inherited-menu-separator-color: var(--ag-menu-separator-color);
	--ag-inherited-menu-shadow: var(--ag-menu-shadow);
	--ag-inherited-menu-text-color: var(--ag-menu-text-color);
	--ag-inherited-modal-overlay-background-color: var(--ag-modal-overlay-background-color);
	--ag-inherited-note-indicator-color: var(--ag-note-indicator-color);
	--ag-inherited-note-indicator-size: var(--ag-note-indicator-size);
	--ag-inherited-note-popup-background-color: var(--ag-note-popup-background-color);
	--ag-inherited-note-popup-border: var(--ag-note-popup-border);
	--ag-inherited-note-popup-input-background-color: var(--ag-note-popup-input-background-color);
	--ag-inherited-note-popup-input-text-color: var(--ag-note-popup-input-text-color);
	--ag-inherited-note-popup-padding: var(--ag-note-popup-padding);
	--ag-inherited-note-popup-text-color: var(--ag-note-popup-text-color);
	--ag-inherited-odd-row-background-color: var(--ag-odd-row-background-color);
	--ag-inherited-pagination-panel-height: var(--ag-pagination-panel-height);
	--ag-inherited-panel-background-color: var(--ag-panel-background-color);
	--ag-inherited-panel-title-bar-background-color: var(--ag-panel-title-bar-background-color);
	--ag-inherited-panel-title-bar-border: var(--ag-panel-title-bar-border);
	--ag-inherited-panel-title-bar-font-family: var(--ag-panel-title-bar-font-family);
	--ag-inherited-panel-title-bar-font-size: var(--ag-panel-title-bar-font-size);
	--ag-inherited-panel-title-bar-font-weight: var(--ag-panel-title-bar-font-weight);
	--ag-inherited-panel-title-bar-height: var(--ag-panel-title-bar-height);
	--ag-inherited-panel-title-bar-icon-color: var(--ag-panel-title-bar-icon-color);
	--ag-inherited-panel-title-bar-text-color: var(--ag-panel-title-bar-text-color);
	--ag-inherited-picker-button-background-color: var(--ag-picker-button-background-color);
	--ag-inherited-picker-button-border: var(--ag-picker-button-border);
	--ag-inherited-picker-button-focus-background-color: var(--ag-picker-button-focus-background-color);
	--ag-inherited-picker-button-focus-border: var(--ag-picker-button-focus-border);
	--ag-inherited-picker-list-background-color: var(--ag-picker-list-background-color);
	--ag-inherited-picker-list-border: var(--ag-picker-list-border);
	--ag-inherited-pinned-column-border: var(--ag-pinned-column-border);
	--ag-inherited-pinned-row-background-color: var(--ag-pinned-row-background-color);
	--ag-inherited-pinned-row-border: var(--ag-pinned-row-border);
	--ag-inherited-pinned-row-font-weight: var(--ag-pinned-row-font-weight);
	--ag-inherited-pinned-row-text-color: var(--ag-pinned-row-text-color);
	--ag-inherited-pinned-source-row-background-color: var(--ag-pinned-source-row-background-color);
	--ag-inherited-pinned-source-row-font-weight: var(--ag-pinned-source-row-font-weight);
	--ag-inherited-pinned-source-row-text-color: var(--ag-pinned-source-row-text-color);
	--ag-inherited-popup-shadow: var(--ag-popup-shadow);
	--ag-inherited-radio-checked-shape-image: var(--ag-radio-checked-shape-image);
	--ag-inherited-range-header-highlight-color: var(--ag-range-header-highlight-color);
	--ag-inherited-range-selection-background-color: var(--ag-range-selection-background-color);
	--ag-inherited-range-selection-border-color: var(--ag-range-selection-border-color);
	--ag-inherited-range-selection-border-style: var(--ag-range-selection-border-style);
	--ag-inherited-range-selection-chart-background-color: var(--ag-range-selection-chart-background-color);
	--ag-inherited-range-selection-chart-category-background-color: var(--ag-range-selection-chart-category-background-color);
	--ag-inherited-range-selection-highlight-color: var(--ag-range-selection-highlight-color);
	--ag-inherited-row-batch-edit-background-color: var(--ag-row-batch-edit-background-color);
	--ag-inherited-row-batch-edit-text-color: var(--ag-row-batch-edit-text-color);
	--ag-inherited-row-border: var(--ag-row-border);
	--ag-inherited-row-drag-indicator-color: var(--ag-row-drag-indicator-color);
	--ag-inherited-row-drag-indicator-width: var(--ag-row-drag-indicator-width);
	--ag-inherited-row-group-indent-size: var(--ag-row-group-indent-size);
	--ag-inherited-row-height: var(--ag-row-height);
	--ag-inherited-row-hover-color: var(--ag-row-hover-color);
	--ag-inherited-row-loading-skeleton-effect-color: var(--ag-row-loading-skeleton-effect-color);
	--ag-inherited-row-numbers-selected-color: var(--ag-row-numbers-selected-color);
	--ag-inherited-row-vertical-padding-scale: var(--ag-row-vertical-padding-scale);
	--ag-inherited-select-cell-background-color: var(--ag-select-cell-background-color);
	--ag-inherited-select-cell-border: var(--ag-select-cell-border);
	--ag-inherited-selected-row-background-color: var(--ag-selected-row-background-color);
	--ag-inherited-set-filter-indent-size: var(--ag-set-filter-indent-size);
	--ag-inherited-side-bar-background-color: var(--ag-side-bar-background-color);
	--ag-inherited-side-bar-panel-animation-duration: var(--ag-side-bar-panel-animation-duration);
	--ag-inherited-side-bar-panel-width: var(--ag-side-bar-panel-width);
	--ag-inherited-side-button-background-color: var(--ag-side-button-background-color);
	--ag-inherited-side-button-bar-background-color: var(--ag-side-button-bar-background-color);
	--ag-inherited-side-button-bar-top-padding: var(--ag-side-button-bar-top-padding);
	--ag-inherited-side-button-border: var(--ag-side-button-border);
	--ag-inherited-side-button-hover-background-color: var(--ag-side-button-hover-background-color);
	--ag-inherited-side-button-hover-text-color: var(--ag-side-button-hover-text-color);
	--ag-inherited-side-button-left-padding: var(--ag-side-button-left-padding);
	--ag-inherited-side-button-right-padding: var(--ag-side-button-right-padding);
	--ag-inherited-side-button-selected-background-color: var(--ag-side-button-selected-background-color);
	--ag-inherited-side-button-selected-border: var(--ag-side-button-selected-border);
	--ag-inherited-side-button-selected-text-color: var(--ag-side-button-selected-text-color);
	--ag-inherited-side-button-selected-underline-color: var(--ag-side-button-selected-underline-color);
	--ag-inherited-side-button-selected-underline-transition-duration: var(--ag-side-button-selected-underline-transition-duration);
	--ag-inherited-side-button-selected-underline-width: var(--ag-side-button-selected-underline-width);
	--ag-inherited-side-button-text-color: var(--ag-side-button-text-color);
	--ag-inherited-side-button-vertical-padding: var(--ag-side-button-vertical-padding);
	--ag-inherited-side-panel-border: var(--ag-side-panel-border);
	--ag-inherited-spacing: var(--ag-spacing);
	--ag-inherited-status-bar-label-color: var(--ag-status-bar-label-color);
	--ag-inherited-status-bar-label-font-weight: var(--ag-status-bar-label-font-weight);
	--ag-inherited-status-bar-value-color: var(--ag-status-bar-value-color);
	--ag-inherited-status-bar-value-font-weight: var(--ag-status-bar-value-font-weight);
	--ag-inherited-subtle-text-color: var(--ag-subtle-text-color);
	--ag-inherited-tab-background-color: var(--ag-tab-background-color);
	--ag-inherited-tab-bar-background-color: var(--ag-tab-bar-background-color);
	--ag-inherited-tab-bar-border: var(--ag-tab-bar-border);
	--ag-inherited-tab-bar-horizontal-padding: var(--ag-tab-bar-horizontal-padding);
	--ag-inherited-tab-bar-top-padding: var(--ag-tab-bar-top-padding);
	--ag-inherited-tab-bottom-padding: var(--ag-tab-bottom-padding);
	--ag-inherited-tab-horizontal-padding: var(--ag-tab-horizontal-padding);
	--ag-inherited-tab-hover-background-color: var(--ag-tab-hover-background-color);
	--ag-inherited-tab-hover-text-color: var(--ag-tab-hover-text-color);
	--ag-inherited-tab-selected-background-color: var(--ag-tab-selected-background-color);
	--ag-inherited-tab-selected-border-color: var(--ag-tab-selected-border-color);
	--ag-inherited-tab-selected-border-width: var(--ag-tab-selected-border-width);
	--ag-inherited-tab-selected-text-color: var(--ag-tab-selected-text-color);
	--ag-inherited-tab-selected-underline-color: var(--ag-tab-selected-underline-color);
	--ag-inherited-tab-selected-underline-transition-duration: var(--ag-tab-selected-underline-transition-duration);
	--ag-inherited-tab-selected-underline-width: var(--ag-tab-selected-underline-width);
	--ag-inherited-tab-spacing: var(--ag-tab-spacing);
	--ag-inherited-tab-text-color: var(--ag-tab-text-color);
	--ag-inherited-tab-top-padding: var(--ag-tab-top-padding);
	--ag-inherited-text-color: var(--ag-text-color);
	--ag-inherited-toggle-button-height: var(--ag-toggle-button-height);
	--ag-inherited-toggle-button-off-background-color: var(--ag-toggle-button-off-background-color);
	--ag-inherited-toggle-button-on-background-color: var(--ag-toggle-button-on-background-color);
	--ag-inherited-toggle-button-switch-background-color: var(--ag-toggle-button-switch-background-color);
	--ag-inherited-toggle-button-switch-inset: var(--ag-toggle-button-switch-inset);
	--ag-inherited-toggle-button-width: var(--ag-toggle-button-width);
	--ag-inherited-tool-panel-separator-border: var(--ag-tool-panel-separator-border);
	--ag-inherited-toolbar-background-color: var(--ag-toolbar-background-color);
	--ag-inherited-toolbar-separator-border: var(--ag-toolbar-separator-border);
	--ag-inherited-toolbar-text-color: var(--ag-toolbar-text-color);
	--ag-inherited-tooltip-background-color: var(--ag-tooltip-background-color);
	--ag-inherited-tooltip-border: var(--ag-tooltip-border);
	--ag-inherited-tooltip-error-background-color: var(--ag-tooltip-error-background-color);
	--ag-inherited-tooltip-error-border: var(--ag-tooltip-error-border);
	--ag-inherited-tooltip-error-text-color: var(--ag-tooltip-error-text-color);
	--ag-inherited-tooltip-text-color: var(--ag-tooltip-text-color);
	--ag-inherited-value-change-delta-down-color: var(--ag-value-change-delta-down-color);
	--ag-inherited-value-change-delta-up-color: var(--ag-value-change-delta-up-color);
	--ag-inherited-value-change-value-highlight-background-color: var(--ag-value-change-value-highlight-background-color);
	--ag-inherited-widget-container-horizontal-padding: var(--ag-widget-container-horizontal-padding);
	--ag-inherited-widget-container-vertical-padding: var(--ag-widget-container-vertical-padding);
	--ag-inherited-widget-horizontal-spacing: var(--ag-widget-horizontal-spacing);
	--ag-inherited-widget-vertical-spacing: var(--ag-widget-vertical-spacing);
	--ag-inherited-wrapper-background-color: var(--ag-wrapper-background-color);
	--ag-inherited-wrapper-border: var(--ag-wrapper-border);
	--ag-inherited-wrapper-border-radius: var(--ag-wrapper-border-radius);
:where([data-ag-theme-mode="light"]) & {
	--ag-inherited-background-color: var(--ag-background-color);
	--ag-inherited-browser-color-scheme: var(--ag-browser-color-scheme);
	--ag-inherited-chrome-background-color: var(--ag-chrome-background-color);
}
:where(.ag-theme-params-1) {
	--ag-accent-color: var(--ag-inherited-accent-color, #f9a134);
	--ag-advanced-filter-builder-button-bar-border: var(--ag-inherited-advanced-filter-builder-button-bar-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-advanced-filter-builder-column-pill-color: var(--ag-inherited-advanced-filter-builder-column-pill-color, #a6e194);
	--ag-advanced-filter-builder-indent-size: var(--ag-inherited-advanced-filter-builder-indent-size, calc( var(--ag-spacing)   *  2  +   var(--ag-icon-size) ));
	--ag-advanced-filter-builder-join-pill-color: var(--ag-inherited-advanced-filter-builder-join-pill-color, #f08e8d);
	--ag-advanced-filter-builder-option-pill-color: var(--ag-inherited-advanced-filter-builder-option-pill-color, #f3c08b);
	--ag-advanced-filter-builder-value-pill-color: var(--ag-inherited-advanced-filter-builder-value-pill-color, #85c0e4);
	--ag-background-color: var(--ag-inherited-background-color, #fff);
	--ag-border-color: var(--ag-inherited-border-color, #dcdcdc);
	--ag-border-radius: var(--ag-inherited-border-radius, 4px);
	--ag-border-width: var(--ag-inherited-border-width, 1px);
	--ag-browser-color-scheme: var(--ag-inherited-browser-color-scheme, light);
	--ag-button-active-background-color: var(--ag-inherited-button-active-background-color, var(--ag-button-hover-background-color));
	--ag-button-active-border: var(--ag-inherited-button-active-border, solid var(--ag-border-width) var(--ag-accent-color));
	--ag-button-active-text-color: var(--ag-inherited-button-active-text-color, var(--ag-button-hover-text-color));
	--ag-button-background-color: var(--ag-inherited-button-background-color, var(--ag-background-color));
	--ag-button-border: var(--ag-inherited-button-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-button-border-radius: var(--ag-inherited-button-border-radius, var(--ag-border-radius));
	--ag-button-disabled-background-color: var(--ag-inherited-button-disabled-background-color, var(--ag-input-disabled-background-color));
	--ag-button-disabled-border: var(--ag-inherited-button-disabled-border, var(--ag-input-disabled-border));
	--ag-button-disabled-text-color: var(--ag-inherited-button-disabled-text-color, var(--ag-input-disabled-text-color));
	--ag-button-font-weight: var(--ag-inherited-button-font-weight, normal);
	--ag-button-horizontal-padding: var(--ag-inherited-button-horizontal-padding, calc( var(--ag-spacing)   *  2));
	--ag-button-hover-background-color: var(--ag-inherited-button-hover-background-color, var(--ag-row-hover-color));
	--ag-button-hover-border: var(--ag-inherited-button-hover-border, var(--ag-button-border));
	--ag-button-hover-text-color: var(--ag-inherited-button-hover-text-color, var(--ag-button-text-color));
	--ag-button-text-color: var(--ag-inherited-button-text-color, inherit);
	--ag-button-vertical-padding: var(--ag-inherited-button-vertical-padding, var(--ag-spacing));
	--ag-card-shadow: var(--ag-inherited-card-shadow, 0 1px 4px 1px #00000018);
	--ag-cell-batch-edit-background-color: var(--ag-inherited-cell-batch-edit-background-color, rgba(220 181 139 / 16%));
	--ag-cell-batch-edit-text-color: var(--ag-inherited-cell-batch-edit-text-color, #422f00);
	--ag-cell-editing-border: var(--ag-inherited-cell-editing-border, solid var(--ag-border-width) var(--ag-accent-color));
	--ag-cell-editing-shadow: var(--ag-inherited-cell-editing-shadow, var(--ag-card-shadow));
	--ag-cell-font-family: var(--ag-inherited-cell-font-family, var(--ag-font-family));
	--ag-cell-font-size: var(--ag-inherited-cell-font-size, var(--ag-data-font-size));
	--ag-cell-font-weight: var(--ag-inherited-cell-font-weight, var(--ag-font-weight));
	--ag-cell-horizontal-padding: var(--ag-inherited-cell-horizontal-padding, calc( var(--ag-spacing)   *  2  *   var(--ag-cell-horizontal-padding-scale) ));
	--ag-cell-horizontal-padding-scale: var(--ag-inherited-cell-horizontal-padding-scale, 1);
	--ag-cell-text-color: var(--ag-inherited-cell-text-color, var(--ag-text-color));
	--ag-cell-widget-spacing: var(--ag-inherited-cell-widget-spacing, calc( var(--ag-spacing)   *  1.5));
	--ag-chart-menu-label-color: var(--ag-inherited-chart-menu-label-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 80%));
	--ag-chart-menu-panel-width: var(--ag-inherited-chart-menu-panel-width, 260px);
	--ag-checkbox-border-radius: var(--ag-inherited-checkbox-border-radius, var(--ag-border-radius));
	--ag-checkbox-border-width: var(--ag-inherited-checkbox-border-width, 1px);
	--ag-checkbox-checked-background-color: var(--ag-inherited-checkbox-checked-background-color, #f9a134);
	--ag-checkbox-checked-border-color: var(--ag-inherited-checkbox-checked-border-color, var(--ag-checkbox-checked-background-color));
	--ag-checkbox-checked-shape-color: var(--ag-inherited-checkbox-checked-shape-color, var(--ag-background-color));
	--ag-checkbox-checked-shape-image: var(--ag-inherited-checkbox-checked-shape-image, url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%227%22%20fill%3D%22none%22%3E%3Cpath%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.75%22%20d%3D%22M1%203.5%203.5%206l5-5%22%2F%3E%3C%2Fsvg%3E"));
	--ag-checkbox-indeterminate-background-color: var(--ag-inherited-checkbox-indeterminate-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 30%));
	--ag-checkbox-indeterminate-border-color: var(--ag-inherited-checkbox-indeterminate-border-color, var(--ag-checkbox-indeterminate-background-color));
	--ag-checkbox-indeterminate-shape-color: var(--ag-inherited-checkbox-indeterminate-shape-color, var(--ag-background-color));
	--ag-checkbox-indeterminate-shape-image: var(--ag-inherited-checkbox-indeterminate-shape-image, url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%222%22%20fill%3D%22none%22%3E%3Crect%20width%3D%2210%22%20height%3D%222%22%20fill%3D%22%23000%22%20rx%3D%221%22%2F%3E%3C%2Fsvg%3E"));
	--ag-checkbox-unchecked-background-color: var(--ag-inherited-checkbox-unchecked-background-color, var(--ag-background-color));
	--ag-checkbox-unchecked-border-color: var(--ag-inherited-checkbox-unchecked-border-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 30%));
	--ag-chrome-background-color: var(--ag-inherited-chrome-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 2%));
	--ag-color-picker-color-border-radius: var(--ag-inherited-color-picker-color-border-radius, 4px);
	--ag-color-picker-thumb-border-width: var(--ag-inherited-color-picker-thumb-border-width, 3px);
	--ag-color-picker-thumb-size: var(--ag-inherited-color-picker-thumb-size, 18px);
	--ag-color-picker-track-border-radius: var(--ag-inherited-color-picker-track-border-radius, 12px);
	--ag-color-picker-track-size: var(--ag-inherited-color-picker-track-size, 12px);
	--ag-column-border: var(--ag-inherited-column-border, solid 1px transparent);
	--ag-column-drag-indicator-color: var(--ag-inherited-column-drag-indicator-color, var(--ag-accent-color));
	--ag-column-drag-indicator-width: var(--ag-inherited-column-drag-indicator-width, 2px);
	--ag-column-drop-cell-background-color: var(--ag-inherited-column-drop-cell-background-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 7.000000000000001%));
	--ag-column-drop-cell-border: var(--ag-inherited-column-drop-cell-border, solid var(--ag-border-width) color-mix(in srgb, transparent, var(--ag-foreground-color) 13%));
	--ag-column-drop-cell-drag-handle-color: var(--ag-inherited-column-drop-cell-drag-handle-color, var(--ag-text-color));
	--ag-column-drop-cell-text-color: var(--ag-inherited-column-drop-cell-text-color, var(--ag-text-color));
	--ag-column-hover-color: var(--ag-inherited-column-hover-color, color-mix(in srgb, transparent, var(--ag-accent-color) 5%));
	--ag-column-panel-apply-button-background-color: var(--ag-inherited-column-panel-apply-button-background-color, var(--ag-accent-color));
	--ag-column-panel-apply-button-color: var(--ag-inherited-column-panel-apply-button-color, var(--ag-background-color));
	--ag-column-select-indent-size: var(--ag-inherited-column-select-indent-size, var(--ag-icon-size));
	--ag-data-background-color: var(--ag-inherited-data-background-color, var(--ag-background-color));
	--ag-data-font-size: var(--ag-inherited-data-font-size, 13px);
	--ag-dialog-border: var(--ag-inherited-dialog-border, solid var(--ag-border-width) color-mix(in srgb, transparent, var(--ag-foreground-color) 20%));
	--ag-dialog-shadow: var(--ag-inherited-dialog-shadow, var(--ag-popup-shadow));
	--ag-drag-and-drop-image-background-color: var(--ag-inherited-drag-and-drop-image-background-color, var(--ag-background-color));
	--ag-drag-and-drop-image-border: var(--ag-inherited-drag-and-drop-image-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-drag-and-drop-image-not-allowed-border: var(--ag-inherited-drag-and-drop-image-not-allowed-border, solid var(--ag-border-width) color-mix(in srgb, var(--ag-drag-and-drop-image-background-color), var(--ag-invalid-color) 50%));
	--ag-drag-and-drop-image-shadow: var(--ag-inherited-drag-and-drop-image-shadow, var(--ag-popup-shadow));
	--ag-drag-handle-color: var(--ag-inherited-drag-handle-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 70%));
	--ag-dropdown-shadow: var(--ag-inherited-dropdown-shadow, var(--ag-card-shadow));
	--ag-filter-panel-apply-button-background-color: var(--ag-inherited-filter-panel-apply-button-background-color, var(--ag-accent-color));
	--ag-filter-panel-apply-button-color: var(--ag-inherited-filter-panel-apply-button-color, var(--ag-background-color));
	--ag-filter-panel-card-subtle-color: var(--ag-inherited-filter-panel-card-subtle-color, color-mix(in srgb, transparent, var(--ag-text-color) 70%));
	--ag-filter-panel-card-subtle-hover-color: var(--ag-inherited-filter-panel-card-subtle-hover-color, var(--ag-text-color));
	--ag-filter-tool-panel-group-indent: var(--ag-inherited-filter-tool-panel-group-indent, var(--ag-spacing));
	--ag-find-active-match-background-color: var(--ag-inherited-find-active-match-background-color, #ffa500);
	--ag-find-active-match-color: var(--ag-inherited-find-active-match-color, var(--ag-foreground-color));
	--ag-find-match-background-color: var(--ag-inherited-find-match-background-color, #ffff00);
	--ag-find-match-color: var(--ag-inherited-find-match-color, var(--ag-foreground-color));
	--ag-focus-error-shadow: var(--ag-inherited-focus-error-shadow, 0px 0px 0px 3px color-mix(in srgb, var(--ag-background-color), var(--ag-invalid-color) 50%));
	--ag-focus-shadow: var(--ag-inherited-focus-shadow, 0px 0px 0px 3px color-mix(in srgb, transparent, var(--ag-accent-color) 50%));
	--ag-font-family: var(--ag-inherited-font-family, DM Sans, sans-serif);
	--ag-font-size: var(--ag-inherited-font-size, 14px);
	--ag-font-weight: var(--ag-inherited-font-weight, inherit);
	--ag-footer-row-border: var(--ag-inherited-footer-row-border, var(--ag-row-border));
	--ag-foreground-color: var(--ag-inherited-foreground-color, #3d3d3d);
	--ag-formula-token-1-background-color: var(--ag-inherited-formula-token-1-background-color, color-mix(in srgb, transparent, var(--ag-formula-token-1-color) 8%));
	--ag-formula-token-1-border: var(--ag-inherited-formula-token-1-border, solid var(--ag-border-width) var(--ag-formula-token-1-color));
	--ag-formula-token-1-color: var(--ag-inherited-formula-token-1-color, #3269c6);
	--ag-formula-token-2-background-color: var(--ag-inherited-formula-token-2-background-color, color-mix(in srgb, transparent, var(--ag-formula-token-2-color) 6%));
	--ag-formula-token-2-border: var(--ag-inherited-formula-token-2-border, solid var(--ag-border-width) var(--ag-formula-token-2-color));
	--ag-formula-token-2-color: var(--ag-inherited-formula-token-2-color, #c0343f);
	--ag-formula-token-3-background-color: var(--ag-inherited-formula-token-3-background-color, color-mix(in srgb, transparent, var(--ag-formula-token-3-color) 8%));
	--ag-formula-token-3-border: var(--ag-inherited-formula-token-3-border, solid var(--ag-border-width) var(--ag-formula-token-3-color));
	--ag-formula-token-3-color: var(--ag-inherited-formula-token-3-color, #8156b8);
	--ag-formula-token-4-background-color: var(--ag-inherited-formula-token-4-background-color, color-mix(in srgb, transparent, var(--ag-formula-token-4-color) 6%));
	--ag-formula-token-4-border: var(--ag-inherited-formula-token-4-border, solid var(--ag-border-width) var(--ag-formula-token-4-color));
	--ag-formula-token-4-color: var(--ag-inherited-formula-token-4-color, #007c1f);
	--ag-formula-token-5-background-color: var(--ag-inherited-formula-token-5-background-color, color-mix(in srgb, transparent, var(--ag-formula-token-5-color) 8%));
	--ag-formula-token-5-border: var(--ag-inherited-formula-token-5-border, solid var(--ag-border-width) var(--ag-formula-token-5-color));
	--ag-formula-token-5-color: var(--ag-inherited-formula-token-5-color, #b03e85);
	--ag-formula-token-6-background-color: var(--ag-inherited-formula-token-6-background-color, color-mix(in srgb, transparent, var(--ag-formula-token-6-color) 6%));
	--ag-formula-token-6-border: var(--ag-inherited-formula-token-6-border, solid var(--ag-border-width) var(--ag-formula-token-6-color));
	--ag-formula-token-6-color: var(--ag-inherited-formula-token-6-color, #b74900);
	--ag-formula-token-7-background-color: var(--ag-inherited-formula-token-7-background-color, color-mix(in srgb, transparent, var(--ag-formula-token-7-color) 8%));
	--ag-formula-token-7-border: var(--ag-inherited-formula-token-7-border, solid var(--ag-border-width) var(--ag-formula-token-7-color));
	--ag-formula-token-7-color: var(--ag-inherited-formula-token-7-color, #247492);
	--ag-full-row-edit-invalid-background-color: var(--ag-inherited-full-row-edit-invalid-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-invalid-color) 25%));
	--ag-header-background-color: var(--ag-inherited-header-background-color, #005862);
	--ag-header-cell-background-transition-duration: var(--ag-inherited-header-cell-background-transition-duration, 0.2s);
	--ag-header-cell-hover-background-color: var(--ag-inherited-header-cell-hover-background-color, transparent);
	--ag-header-cell-moving-background-color: var(--ag-inherited-header-cell-moving-background-color, var(--ag-header-cell-hover-background-color));
	--ag-header-column-border: var(--ag-inherited-header-column-border, none);
	--ag-header-column-border-height: var(--ag-inherited-header-column-border-height, 100%);
	--ag-header-column-resize-handle-color: var(--ag-inherited-header-column-resize-handle-color, rgba(255, 255, 255, 0.2));
	--ag-header-column-resize-handle-height: var(--ag-inherited-header-column-resize-handle-height, 30%);
	--ag-header-column-resize-handle-width: var(--ag-inherited-header-column-resize-handle-width, 2px);
	--ag-header-font-family: var(--ag-inherited-header-font-family, DM Sans, sans-serif);
	--ag-header-font-size: var(--ag-inherited-header-font-size, 13px);
	--ag-header-font-weight: var(--ag-inherited-header-font-weight, 600);
	--ag-header-height: var(--ag-inherited-header-height, 48px);
	--ag-header-row-border: var(--ag-inherited-header-row-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-header-text-color: var(--ag-inherited-header-text-color, #ffffff);
	--ag-header-vertical-padding-scale: var(--ag-inherited-header-vertical-padding-scale, 1);
	--ag-icon-button-active-background-color: var(--ag-inherited-icon-button-active-background-color, color-mix(in srgb, transparent, var(--ag-accent-color) 28.000000000000004%));
	--ag-icon-button-active-color: var(--ag-inherited-icon-button-active-color, var(--ag-accent-color));
	--ag-icon-button-active-indicator-color: var(--ag-inherited-icon-button-active-indicator-color, var(--ag-accent-color));
	--ag-icon-button-background-color: var(--ag-inherited-icon-button-background-color, transparent);
	--ag-icon-button-background-spread: var(--ag-inherited-icon-button-background-spread, 4px);
	--ag-icon-button-border-radius: var(--ag-inherited-icon-button-border-radius, 1px);
	--ag-icon-button-color: var(--ag-inherited-icon-button-color, var(--ag-icon-color));
	--ag-icon-button-hover-background-color: var(--ag-inherited-icon-button-hover-background-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 10%));
	--ag-icon-button-hover-color: var(--ag-inherited-icon-button-hover-color, var(--ag-icon-button-color));
	--ag-icon-color: var(--ag-inherited-icon-color, inherit);
	--ag-icon-size: var(--ag-inherited-icon-size, 16px);
	--ag-input-background-color: var(--ag-inherited-input-background-color, var(--ag-background-color));
	--ag-input-border: var(--ag-inherited-input-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-input-border-radius: var(--ag-inherited-input-border-radius, var(--ag-border-radius));
	--ag-input-disabled-background-color: var(--ag-inherited-input-disabled-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 6%));
	--ag-input-disabled-border: var(--ag-inherited-input-disabled-border, var(--ag-input-border));
	--ag-input-disabled-text-color: var(--ag-inherited-input-disabled-text-color, color-mix(in srgb, transparent, var(--ag-text-color) 50%));
	--ag-input-focus-background-color: var(--ag-inherited-input-focus-background-color, var(--ag-input-background-color));
	--ag-input-focus-border: var(--ag-inherited-input-focus-border, solid var(--ag-border-width) var(--ag-accent-color));
	--ag-input-focus-shadow: var(--ag-inherited-input-focus-shadow, var(--ag-focus-shadow));
	--ag-input-focus-text-color: var(--ag-inherited-input-focus-text-color, var(--ag-input-text-color));
	--ag-input-height: var(--ag-inherited-input-height, calc(max( var(--ag-icon-size) ,  var(--ag-font-size) )  +   var(--ag-spacing)   *  2));
	--ag-input-icon-color: var(--ag-inherited-input-icon-color, var(--ag-input-text-color));
	--ag-input-invalid-background-color: var(--ag-inherited-input-invalid-background-color, var(--ag-input-background-color));
	--ag-input-invalid-border: var(--ag-inherited-input-invalid-border, solid var(--ag-border-width) var(--ag-invalid-color));
	--ag-input-invalid-text-color: var(--ag-inherited-input-invalid-text-color, var(--ag-input-text-color));
	--ag-input-padding-start: var(--ag-inherited-input-padding-start, var(--ag-spacing));
	--ag-input-placeholder-text-color: var(--ag-inherited-input-placeholder-text-color, color-mix(in srgb, transparent, var(--ag-input-text-color) 50%));
	--ag-input-text-color: var(--ag-inherited-input-text-color, var(--ag-text-color));
	--ag-invalid-color: var(--ag-inherited-invalid-color, #e02525);
	--ag-list-item-height: var(--ag-inherited-list-item-height, calc(max( var(--ag-icon-size) ,  var(--ag-data-font-size) )  +   var(--ag-widget-vertical-spacing) ));
	--ag-menu-background-color: var(--ag-inherited-menu-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 3%));
	--ag-menu-border: var(--ag-inherited-menu-border, solid var(--ag-border-width) color-mix(in srgb, transparent, var(--ag-foreground-color) 20%));
	--ag-menu-separator-color: var(--ag-inherited-menu-separator-color, var(--ag-border-color));
	--ag-menu-shadow: var(--ag-inherited-menu-shadow, var(--ag-popup-shadow));
	--ag-menu-text-color: var(--ag-inherited-menu-text-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 95%));
	--ag-modal-overlay-background-color: var(--ag-inherited-modal-overlay-background-color, color-mix(in srgb, transparent, var(--ag-background-color) 66%));
	--ag-note-indicator-color: var(--ag-inherited-note-indicator-color, var(--ag-accent-color));
	--ag-note-indicator-size: var(--ag-inherited-note-indicator-size, 8px);
	--ag-note-popup-background-color: var(--ag-inherited-note-popup-background-color, var(--ag-menu-background-color));
	--ag-note-popup-border: var(--ag-inherited-note-popup-border, var(--ag-dialog-border));
	--ag-note-popup-input-background-color: var(--ag-inherited-note-popup-input-background-color, var(--ag-input-background-color));
	--ag-note-popup-input-text-color: var(--ag-inherited-note-popup-input-text-color, var(--ag-input-text-color));
	--ag-note-popup-padding: var(--ag-inherited-note-popup-padding, calc( var(--ag-spacing)   *  0.5));
	--ag-note-popup-text-color: var(--ag-inherited-note-popup-text-color, color-mix(in srgb, transparent, var(--ag-menu-text-color) 75%));
	--ag-odd-row-background-color: var(--ag-inherited-odd-row-background-color, #fafafa);
	--ag-pagination-panel-height: var(--ag-inherited-pagination-panel-height, calc(max( var(--ag-row-height) , 22px)));
	--ag-panel-background-color: var(--ag-inherited-panel-background-color, var(--ag-background-color));
	--ag-panel-title-bar-background-color: var(--ag-inherited-panel-title-bar-background-color, var(--ag-header-background-color));
	--ag-panel-title-bar-border: var(--ag-inherited-panel-title-bar-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-panel-title-bar-font-family: var(--ag-inherited-panel-title-bar-font-family, var(--ag-header-font-family));
	--ag-panel-title-bar-font-size: var(--ag-inherited-panel-title-bar-font-size, var(--ag-header-font-size));
	--ag-panel-title-bar-font-weight: var(--ag-inherited-panel-title-bar-font-weight, var(--ag-header-font-weight));
	--ag-panel-title-bar-height: var(--ag-inherited-panel-title-bar-height, var(--ag-header-height));
	--ag-panel-title-bar-icon-color: var(--ag-inherited-panel-title-bar-icon-color, var(--ag-header-text-color));
	--ag-panel-title-bar-text-color: var(--ag-inherited-panel-title-bar-text-color, var(--ag-header-text-color));
	--ag-picker-button-background-color: var(--ag-inherited-picker-button-background-color, var(--ag-background-color));
	--ag-picker-button-border: var(--ag-inherited-picker-button-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-picker-button-focus-background-color: var(--ag-inherited-picker-button-focus-background-color, var(--ag-background-color));
	--ag-picker-button-focus-border: var(--ag-inherited-picker-button-focus-border, var(--ag-input-focus-border));
	--ag-picker-list-background-color: var(--ag-inherited-picker-list-background-color, var(--ag-background-color));
	--ag-picker-list-border: var(--ag-inherited-picker-list-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-pinned-column-border: var(--ag-inherited-pinned-column-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-pinned-row-background-color: var(--ag-inherited-pinned-row-background-color, var(--ag-data-background-color));
	--ag-pinned-row-border: var(--ag-inherited-pinned-row-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-pinned-row-font-weight: var(--ag-inherited-pinned-row-font-weight, 600);
	--ag-pinned-row-text-color: var(--ag-inherited-pinned-row-text-color, var(--ag-text-color));
	--ag-pinned-source-row-background-color: var(--ag-inherited-pinned-source-row-background-color, var(--ag-data-background-color));
	--ag-pinned-source-row-font-weight: var(--ag-inherited-pinned-source-row-font-weight, 600);
	--ag-pinned-source-row-text-color: var(--ag-inherited-pinned-source-row-text-color, var(--ag-text-color));
	--ag-popup-shadow: var(--ag-inherited-popup-shadow, 0 0 16px #00000026);
	--ag-radio-checked-shape-image: var(--ag-inherited-radio-checked-shape-image, url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%226%22%20height%3D%226%22%20fill%3D%22none%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E"));
	--ag-range-header-highlight-color: var(--ag-inherited-range-header-highlight-color, color-mix(in srgb, var(--ag-header-background-color), var(--ag-foreground-color) 8%));
	--ag-range-selection-background-color: var(--ag-inherited-range-selection-background-color, color-mix(in srgb, transparent, var(--ag-accent-color) 20%));
	--ag-range-selection-border-color: var(--ag-inherited-range-selection-border-color, var(--ag-accent-color));
	--ag-range-selection-border-style: var(--ag-inherited-range-selection-border-style, solid);
	--ag-range-selection-chart-background-color: var(--ag-inherited-range-selection-chart-background-color, #0058FF1A);
	--ag-range-selection-chart-category-background-color: var(--ag-inherited-range-selection-chart-category-background-color, #00FF841A);
	--ag-range-selection-highlight-color: var(--ag-inherited-range-selection-highlight-color, color-mix(in srgb, transparent, var(--ag-accent-color) 50%));
	--ag-row-batch-edit-background-color: var(--ag-inherited-row-batch-edit-background-color, var(--ag-cell-batch-edit-background-color));
	--ag-row-batch-edit-text-color: var(--ag-inherited-row-batch-edit-text-color, var(--ag-cell-batch-edit-text-color));
	--ag-row-border: var(--ag-inherited-row-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-row-drag-indicator-color: var(--ag-inherited-row-drag-indicator-color, var(--ag-range-selection-border-color));
	--ag-row-drag-indicator-width: var(--ag-inherited-row-drag-indicator-width, 2px);
	--ag-row-group-indent-size: var(--ag-inherited-row-group-indent-size, calc( var(--ag-cell-widget-spacing)   +   var(--ag-icon-size) ));
	--ag-row-height: var(--ag-inherited-row-height, 44px);
	--ag-row-hover-color: var(--ag-inherited-row-hover-color, #effefb);
	--ag-row-loading-skeleton-effect-color: var(--ag-inherited-row-loading-skeleton-effect-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 15%));
	--ag-row-numbers-selected-color: var(--ag-inherited-row-numbers-selected-color, color-mix(in srgb, transparent, var(--ag-accent-color) 50%));
	--ag-row-vertical-padding-scale: var(--ag-inherited-row-vertical-padding-scale, 1);
	--ag-select-cell-background-color: var(--ag-inherited-select-cell-background-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 7.000000000000001%));
	--ag-select-cell-border: var(--ag-inherited-select-cell-border, solid var(--ag-border-width) color-mix(in srgb, transparent, var(--ag-foreground-color) 13%));
	--ag-selected-row-background-color: var(--ag-inherited-selected-row-background-color, color-mix(in srgb, transparent, var(--ag-accent-color) 12%));
	--ag-set-filter-indent-size: var(--ag-inherited-set-filter-indent-size, var(--ag-icon-size));
	--ag-side-bar-background-color: var(--ag-inherited-side-bar-background-color, var(--ag-chrome-background-color));
	--ag-side-bar-panel-animation-duration: var(--ag-inherited-side-bar-panel-animation-duration, 0s);
	--ag-side-bar-panel-width: var(--ag-inherited-side-bar-panel-width, 250px);
	--ag-side-button-background-color: var(--ag-inherited-side-button-background-color, transparent);
	--ag-side-button-bar-background-color: var(--ag-inherited-side-button-bar-background-color, var(--ag-side-bar-background-color));
	--ag-side-button-bar-top-padding: var(--ag-inherited-side-button-bar-top-padding, 0px);
	--ag-side-button-border: var(--ag-inherited-side-button-border, solid 1px transparent);
	--ag-side-button-hover-background-color: var(--ag-inherited-side-button-hover-background-color, var(--ag-side-button-background-color));
	--ag-side-button-hover-text-color: var(--ag-inherited-side-button-hover-text-color, var(--ag-side-button-text-color));
	--ag-side-button-left-padding: var(--ag-inherited-side-button-left-padding, var(--ag-spacing));
	--ag-side-button-right-padding: var(--ag-inherited-side-button-right-padding, var(--ag-spacing));
	--ag-side-button-selected-background-color: var(--ag-inherited-side-button-selected-background-color, var(--ag-background-color));
	--ag-side-button-selected-border: var(--ag-inherited-side-button-selected-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-side-button-selected-text-color: var(--ag-inherited-side-button-selected-text-color, var(--ag-side-button-text-color));
	--ag-side-button-selected-underline-color: var(--ag-inherited-side-button-selected-underline-color, transparent);
	--ag-side-button-selected-underline-transition-duration: var(--ag-inherited-side-button-selected-underline-transition-duration, 0s);
	--ag-side-button-selected-underline-width: var(--ag-inherited-side-button-selected-underline-width, 2px);
	--ag-side-button-text-color: var(--ag-inherited-side-button-text-color, var(--ag-text-color));
	--ag-side-button-vertical-padding: var(--ag-inherited-side-button-vertical-padding, calc( var(--ag-spacing)   *  3));
	--ag-side-panel-border: var(--ag-inherited-side-panel-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-spacing: var(--ag-inherited-spacing, 8px);
	--ag-status-bar-label-color: var(--ag-inherited-status-bar-label-color, var(--ag-foreground-color));
	--ag-status-bar-label-font-weight: var(--ag-inherited-status-bar-label-font-weight, 500);
	--ag-status-bar-value-color: var(--ag-inherited-status-bar-value-color, var(--ag-foreground-color));
	--ag-status-bar-value-font-weight: var(--ag-inherited-status-bar-value-font-weight, 500);
	--ag-subtle-text-color: var(--ag-inherited-subtle-text-color, color-mix(in srgb, transparent, var(--ag-text-color) 50%));
	--ag-tab-background-color: var(--ag-inherited-tab-background-color, transparent);
	--ag-tab-bar-background-color: var(--ag-inherited-tab-bar-background-color, color-mix(in srgb, transparent, var(--ag-foreground-color) 5%));
	--ag-tab-bar-border: var(--ag-inherited-tab-bar-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-tab-bar-horizontal-padding: var(--ag-inherited-tab-bar-horizontal-padding, 0px);
	--ag-tab-bar-top-padding: var(--ag-inherited-tab-bar-top-padding, 0px);
	--ag-tab-bottom-padding: var(--ag-inherited-tab-bottom-padding, var(--ag-spacing));
	--ag-tab-horizontal-padding: var(--ag-inherited-tab-horizontal-padding, var(--ag-spacing));
	--ag-tab-hover-background-color: var(--ag-inherited-tab-hover-background-color, var(--ag-tab-background-color));
	--ag-tab-hover-text-color: var(--ag-inherited-tab-hover-text-color, var(--ag-text-color));
	--ag-tab-selected-background-color: var(--ag-inherited-tab-selected-background-color, var(--ag-background-color));
	--ag-tab-selected-border-color: var(--ag-inherited-tab-selected-border-color, var(--ag-border-color));
	--ag-tab-selected-border-width: var(--ag-inherited-tab-selected-border-width, var(--ag-border-width));
	--ag-tab-selected-text-color: var(--ag-inherited-tab-selected-text-color, var(--ag-text-color));
	--ag-tab-selected-underline-color: var(--ag-inherited-tab-selected-underline-color, transparent);
	--ag-tab-selected-underline-transition-duration: var(--ag-inherited-tab-selected-underline-transition-duration, 0s);
	--ag-tab-selected-underline-width: var(--ag-inherited-tab-selected-underline-width, 0px);
	--ag-tab-spacing: var(--ag-inherited-tab-spacing, 0);
	--ag-tab-text-color: var(--ag-inherited-tab-text-color, color-mix(in srgb, transparent, var(--ag-text-color) 70%));
	--ag-tab-top-padding: var(--ag-inherited-tab-top-padding, var(--ag-spacing));
	--ag-text-color: var(--ag-inherited-text-color, var(--ag-foreground-color));
	--ag-toggle-button-height: var(--ag-inherited-toggle-button-height, 18px);
	--ag-toggle-button-off-background-color: var(--ag-inherited-toggle-button-off-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 30%));
	--ag-toggle-button-on-background-color: var(--ag-inherited-toggle-button-on-background-color, var(--ag-accent-color));
	--ag-toggle-button-switch-background-color: var(--ag-inherited-toggle-button-switch-background-color, var(--ag-background-color));
	--ag-toggle-button-switch-inset: var(--ag-inherited-toggle-button-switch-inset, 2px);
	--ag-toggle-button-width: var(--ag-inherited-toggle-button-width, 28px);
	--ag-tool-panel-separator-border: var(--ag-inherited-tool-panel-separator-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-toolbar-background-color: var(--ag-inherited-toolbar-background-color, var(--ag-header-background-color));
	--ag-toolbar-separator-border: var(--ag-inherited-toolbar-separator-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-toolbar-text-color: var(--ag-inherited-toolbar-text-color, var(--ag-header-text-color));
	--ag-tooltip-background-color: var(--ag-inherited-tooltip-background-color, var(--ag-chrome-background-color));
	--ag-tooltip-border: var(--ag-inherited-tooltip-border, solid var(--ag-border-width) var(--ag-border-color));
	--ag-tooltip-error-background-color: var(--ag-inherited-tooltip-error-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-invalid-color) 10%));
	--ag-tooltip-error-border: var(--ag-inherited-tooltip-error-border, solid var(--ag-border-width) color-mix(in srgb, var(--ag-background-color), var(--ag-invalid-color) 25%));
	--ag-tooltip-error-text-color: var(--ag-inherited-tooltip-error-text-color, var(--ag-invalid-color));
	--ag-tooltip-text-color: var(--ag-inherited-tooltip-text-color, var(--ag-text-color));
	--ag-value-change-delta-down-color: var(--ag-inherited-value-change-delta-down-color, #e53935);
	--ag-value-change-delta-up-color: var(--ag-inherited-value-change-delta-up-color, #43a047);
	--ag-value-change-value-highlight-background-color: var(--ag-inherited-value-change-value-highlight-background-color, #16a08580);
	--ag-widget-container-horizontal-padding: var(--ag-inherited-widget-container-horizontal-padding, calc( var(--ag-spacing)   *  1.5));
	--ag-widget-container-vertical-padding: var(--ag-inherited-widget-container-vertical-padding, calc( var(--ag-spacing)   *  1.5));
	--ag-widget-horizontal-spacing: var(--ag-inherited-widget-horizontal-spacing, calc( var(--ag-spacing)   *  1.5));
	--ag-widget-vertical-spacing: var(--ag-inherited-widget-vertical-spacing, var(--ag-spacing));
	--ag-wrapper-background-color: var(--ag-inherited-wrapper-background-color, var(--ag-background-color));
	--ag-wrapper-border: var(--ag-inherited-wrapper-border, 1px solid #dcdcdc);
	--ag-wrapper-border-radius: var(--ag-inherited-wrapper-border-radius, 4px 4px 0 0);
:where([data-ag-theme-mode="light"]) & {
	--ag-background-color: var(--ag-inherited-background-color, #fff);
	--ag-browser-color-scheme: var(--ag-inherited-browser-color-scheme, light);
	--ag-chrome-background-color: var(--ag-inherited-chrome-background-color, color-mix(in srgb, var(--ag-background-color), var(--ag-foreground-color) 2%));
}
.ag-overlay{inset:0;pointer-events:none;position:absolute;z-index:2}
.ag-measurement-container{height:0;overflow:hidden;visibility:hidden;width:0}
.ag-measurement-element-border{display:inline-block}
.ag-measurement-element-border:before{border-left:var(--ag-internal-measurement-border);content:"";display:block}
.ag-chart,.ag-dnd-ghost,.ag-external,.ag-popup,.ag-root-wrapper{cursor:default;line-height:normal;white-space:normal;-webkit-font-smoothing:antialiased;background-color:var(--ag-wrapper-background-color);color:var(--ag-text-color);color-scheme:var(--ag-browser-color-scheme);font-family:var(--ag-font-family);font-size:var(--ag-font-size);font-weight:var(--ag-font-weight);--ag-indentation-level:0}
.ag-tab-guard{display:block;height:0;position:absolute;width:0}
.ag-tab-guard-top{top:1px}
.ag-invisible{visibility:hidden!important}
.ag-hidden{display:none!important}
.ag-tab-guard-bottom{bottom:1px}
.ag-icon{background-position:50%;background-repeat:no-repeat;background-size:contain;color:var(--ag-icon-color);display:block;height:var(--ag-icon-size);position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:var(--ag-icon-size)}
:where(.ag-icon):before{align-items:center;background-color:currentcolor;color:inherit;content:"";display:flex;font-family:inherit;font-size:var(--ag-icon-size);font-style:normal;font-variant:normal;height:var(--ag-icon-size);justify-content:center;line-height:var(--ag-icon-size);-webkit-mask-size:contain;mask-size:contain;text-transform:none;width:var(--ag-icon-size)}
:where(.ag-theme-columnDropStyle-2) {
.ag-column-drop-vertical-empty-message{align-items:center;border:dashed var(--ag-border-width);border-color:var(--ag-border-color);display:flex;inset:0;justify-content:center;margin:calc(var(--ag-spacing)*1.5) calc(var(--ag-spacing)*2);overflow:hidden;padding:calc(var(--ag-spacing)*2);position:absolute}
:where(.ag-theme-part-8) {
.ag-icon-filter::before { mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolygon%20points%3D%2222%203%202%203%2010%2012.46%2010%2019%2014%2021%2014%2012.46%2022%203%22%2F%3E%3C%2Fsvg%3E"); }
;
.ag-icon-filterActive::before { mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolygon%20points%3D%2222%203%202%203%2010%2012.46%2010%2019%2014%2021%2014%2012.46%2022%203%22%2F%3E%3C%2Fsvg%3E"); }
.ag-icon-filter::before { mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolygon%20points%3D%2222%203%202%203%2010%2012.46%2010%2019%2014%2021%2014%2012.46%2022%203%22%2F%3E%3C%2Fsvg%3E"); }
:where(.ag-theme-buttonStyle-1) {
:where(.ag-button){background:none;border:none;color:inherit;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0;text-indent:inherit;text-shadow:inherit;text-transform:inherit;word-spacing:inherit;&:disabled{cursor:default}
```

## Tokens
- `--ag-internal-hover-color`: rgba(0, 0, 0, 0) _(component)_
- `--ag-internal-moving-color`: rgba(0, 0, 0, 0) _(component)_
- `--color-text-link`: #005862 _(semantic)_
- `--font-weight-regular`: 350 _(primitive)_

## Behavior
```ts
// ── src/components/handoff/inspector.client.ts ──
// Runtime Handoff inspector — a deployable port of @esa/handoff's dev-toolbar app.
// The dev tool is bound to Astro's dev-only toolbar (defineToolbarApp/canvas) and
// is stripped from production builds; this version brings its own shadow host and
// its own toggle, so it works on the deployed site AND in `astro dev`.
//
// It is route-aware: the manifest is resolved from location.pathname
// (/handoff/<slug>/manifest.json, slug derived exactly like the handoff CLI's
// --name), so each prototype shows ITS sections, not the homepage's. If no bundle
// exists for the current route, the inspector stays dormant — no launcher, no UI.
//
// The rendering logic (tree, HTML/CSS/token tabs, page-pick highlight, copy +
// copy-for-Claude) is a faithful port of toolbar-app.js; the export engine remains
// the source of truth and this only reads the manifest it produced.

interface Token { name: string; value: string; tier: string }
interface Guide { intent?: string; decisions?: string[]; gotchas?: string[]; acceptance?: string[] }
interface ApplyOp {
  click?: string; fill?: [string, string]; clear?: string; clickText?: [string, string]; key?: string;
}
interface Section {
  index?: number; label: string; tag?: string; selector?: string; apply?: ApplyOp[];
  html: string; css: string; tokens: Token[]; js?: string; guide?: Guide;
  claudePath?: string; repoPath?: string;
}

// Set a field's value the way a user would, so the page's input handlers fire.
function setInput(sel: string, val: string) {
  const el = document.querySelector<HTMLInputElement>(sel);
  if (!el) return;
  el.value = val;
  el.dispatchEvent(new Event('input', { bubbles: true }));
}
// Replay a state recipe on the LIVE page — the DOM twin of the capture's runApply,
// so clicking a chip drives the real app into that section's state.
function runApplyDom(ops?: ApplyOp[]) {
  for (const op of ops || []) {
    if (op.click) document.querySelector<HTMLElement>(op.click)?.click();
    else if (op.fill) setInput(op.fill[0], op.fill[1]);
    else if (op.clear) setInput(op.clear, '');
    else if (op.clickText) {
      const c = document.querySelector(op.clickText[0]);
      [...(c?.querySelectorAll('button') ?? [])]
        .find((b) => b.textContent?.trim().includes(op.clickText![1]))
        ?.click();
    } else if (op.key) document.dispatchEvent(new KeyboardEvent('keydown', { key: op.key, bubbles: true }));
  }
}
interface Manifest {
  name: string; sections: Section[];
  full?: { label: string; html: string; css: string; tokens: Token[]; claudePath?: string; repoPath?: string };
}

const esc = (s: unknown) =>
  String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]!));
const isColor = (v: unknown) =>
  /^(#[0-9a-f]{3,8}|rgba?\([\d.,\s%/]+\)|hsla?\([\d.,\s%/]+\))$/i.test(String(v).trim());

// --- syntax highlighters (operate on prettier-formatted, then-escaped code) ---
function hlVal(v: string) {
  return v
    .replace(/("[^"]*"|'[^']*')/g, '<span class="s">$1</span>')
    .replace(/(var\()(--[\w-]+)/g, '$1<span class="t">$2</span>')
    .replace(/(#[0-9a-fA-F]{3,8})\b/g, '<span class="n">$1</span>');
}
function hlCss(src: string) {
  return esc(src)
    .split('\n')
    .map((line) => {
      if (/\{\s*$/.test(line))
        return line.replace(/^(\s*)(.+?)(\s*\{)\s*$/, '$1<span class="sel">$2</span>$3');
      const m = line.match(/^(\s*)([\w-]+)(\s*:\s*)(.+?)(;?)\s*$/);
      if (m) return `${m[1]}<span class="p">${m[2]}</span>${m[3]}${hlVal(m[4])}${m[5]}`;
      return line;
    })
    .join('\n');
}
function hlHtml(src: string) {
  return esc(src)
    .replace(/("[^"]*")/g, '<span class="s">$1</span>')
    .replace(/(&lt;\/?)([a-zA-Z][\w-]*)/g, '$1<span class="tag">$2</span>');
}

function renderTokens(tokens: Token[]) {
  if (!tokens || !tokens.length) return '<p class="hint">No design tokens in this section.</p>';
  const groups: Record<string, Token[]> = {};
  for (const t of tokens) (groups[t.tier] = groups[t.tier] || []).push(t);
  const order = ['brand', 'semantic', 'component', 'primitive'];
  return order
    .filter((k) => groups[k])
    .map(
      (tier) => `
      <div class="tgroup">
        <div class="tgroup__h">${tier} <span>${groups[tier].length}</span></div>
        ${groups[tier]
          .map(
            (t) => `<div class="tok">
              <span class="tok__name">${isColor(t.value) ? `<i style="background:${esc(t.value)}"></i>` : ''}<code>${esc(t.name)}</code></span>
              <span class="tok__val">${esc(t.value)}</span>
            </div>`
          )
          .join('')}
      </div>`
    )
    .join('');
}

// Light JS/TS highlight — comments + strings only; enough to read, not a full lexer.
function hlJs(src: string) {
  return esc(src)
    .replace(/(\/\/[^\n]*)/g, '<span class="c">$1</span>')
    .replace(/(`[^`]*`|"[^"]*"|'[^']*')/g, '<span class="s">$1</span>');
}

function renderGuide(g?: Guide) {
  if (!g || !Object.keys(g).length)
    return '<p class="hint">No design guidance authored for this section.</p>';
  const list = (title: string, arr?: string[]) =>
    arr?.length
      ? `<div class="g"><div class="g__h">${title}</div><ul>${arr.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`
      : '';
  return [
    g.intent ? `<p class="g__intent">${esc(g.intent)}</p>` : '',
    list('Key decisions', g.decisions),
    list('Gotchas', g.gotchas),
    list('Done when', g.acceptance),
  ].join('');
}

const STYLE = `
  :host { all: initial; }
  /* The hidden attribute must win over the explicit display on .launch/.panel,
     otherwise the toggle is defeated by specificity. */
  [hidden] { display: none !important; }
  .host-root { position: fixed; inset: 0; pointer-events: none; z-index: 2147483000;
    font-family: system-ui, sans-serif; }
  .host-root > * { pointer-events: auto; }
  .launch { position: fixed; bottom: 22px; left: 22px; display: inline-flex; align-items: center; gap: 9px;
    padding: 13px 19px; border-radius: 999px; color: #fff; cursor: pointer; font-size: 15px; font-weight: 600;
    letter-spacing: .01em; border: 1px solid #3d6fd6;
    background: linear-gradient(180deg, #1f6feb, #1551c4);
    box-shadow: 0 10px 28px -8px rgba(31,111,235,.65), inset 0 1px 0 rgba(255,255,255,.18);
    transition: transform .15s ease, box-shadow .15s ease, filter .15s ease; }
  .launch:hover { transform: translateY(-2px); filter: brightness(1.07);
    box-shadow: 0 16px 36px -8px rgba(31,111,235,.75), inset 0 1px 0 rgba(255,255,255,.25); }
  .launch:active { transform: translateY(0); }
  .launch svg { flex: none; }
  /* Full-height glass panel, inset from the edges. */
  .panel { position: fixed; top: 18px; right: 18px; bottom: 18px; width: min(720px, 94vw);
    display: flex; flex-direction: column; color: #ffffff; border-radius: 16px;
    background: linear-gradient(155deg, rgba(26,31,40,.74), rgba(11,15,21,.86));
    backdrop-filter: blur(26px) saturate(150%); -webkit-backdrop-filter: blur(26px) saturate(150%);
    border: 1px solid rgba(255,255,255,.15);
    box-shadow: 0 28px 70px -18px rgba(0,0,0,.62), inset 0 1px 0 rgba(255,255,255,.10);
    font-size: 12.5px; overflow: hidden;
    /* slide in from the right */
    transform: translateX(calc(100% + 32px)); opacity: 0; visibility: hidden;
    transition: transform .3s cubic-bezier(.4,0,.2,1), opacity .22s ease, visibility 0s linear .3s; }
  .panel.is-open { transform: none; opacity: 1; visibility: visible;
    transition: transform .3s cubic-bezier(.4,0,.2,1), opacity .22s ease; }
  .head { display: flex; align-items: center; gap: 8px; padding: 13px 16px; border-bottom: 1px solid rgba(255,255,255,.09); }
  .head strong { font-size: 14px; }
  .head .sub { flex: 1; color: #ccd5e0; font-size: 12px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .picker { padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,.09); }
  .chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .chip { padding: 5px 12px; border-radius: 999px; border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.04);
    color: #eef2f6; font: inherit; font-size: 12.5px; cursor: pointer; white-space: nowrap;
    transition: border-color .12s ease, background .12s ease, color .12s ease; }
  .chip:hover { color: #fff; border-color: rgba(255,255,255,.3); }
  .chip.on { background: rgba(31,111,235,.28); border-color: #4493f8; color: #fff; font-weight: 600; }
  .tabs { display: flex; gap: 4px; padding: 9px 14px; border-bottom: 1px solid rgba(255,255,255,.09); }
  .tabs button { padding: 5px 12px; border: 0; border-radius: 6px; background: none; color: #ccd5e0;
    font: inherit; font-size: 12.5px; cursor: pointer; }
  .tabs button.on { background: rgba(255,255,255,.12); color: #fff; }
  .body { overflow: auto; padding: 13px 16px; flex: 1; }
  /* Prominent action footer. */
  .footer { position: relative; display: flex; justify-content: flex-end; gap: 8px; padding: 11px 16px;
    border-top: 1px solid rgba(255,255,255,.10); background: rgba(0,0,0,.18); }
  .footer button { flex: none; display: inline-flex; align-items: center; justify-content: center; gap: 7px;
    padding: 8px 14px; border-radius: 8px; font: inherit; font-size: 12.5px; font-weight: 600; cursor: pointer; }
  .copy { color: #eef2f6; border: 1px solid rgba(255,255,255,.18); background: rgba(255,255,255,.05); }
  .copy:hover { color: #fff; border-color: rgba(255,255,255,.34); }
  .copy.done { color: #7ee787; border-color: #2ea043; }
  .claude { color: #fff; border: 1px solid #d97757;
    background: linear-gradient(180deg, #e0805f, #c25e3c);
    box-shadow: 0 6px 18px -6px rgba(217,119,87,.6), inset 0 1px 0 rgba(255,255,255,.2); }
  .claude svg { flex: none; }
  .claude:hover { filter: brightness(1.06); }
  .claude.done { background: linear-gradient(180deg, #2ea043, #238636); border-color: #2ea043; }
  /* Claude payload preview popover (anchored above the footer). */
  .cpreview { position: absolute; left: 16px; right: 16px; bottom: calc(100% + 8px);
    background: rgba(13,17,23,.96); border: 1px solid rgba(255,255,255,.16); border-radius: 12px;
    box-shadow: 0 18px 50px -14px rgba(0,0,0,.7); padding: 12px 14px; max-height: 50vh; overflow: auto; }
  .cpreview__h { display: flex; align-items: center; margin-bottom: 8px; color: #ccd5e0; font-size: 11px;
    letter-spacing: .04em; text-transform: uppercase; }
  .cpreview__copy { margin-left: auto; color: #e9a589; border: 1px solid #d9775766; border-radius: 6px;
    background: none; font: inherit; font-size: 11.5px; padding: 3px 9px; cursor: pointer; text-transform: none; letter-spacing: 0; }
  .cpreview__copy:hover { color: #fff; border-color: #d97757; }
  .cpreview pre { margin: 0; white-space: pre-wrap; word-break: break-word; line-height: 1.55;
    color: #eef2f6; font-family: ui-monospace, "SF Mono", Menlo, monospace; font-size: 12px; }
  .hint { margin: 0; color: #c4cdd8; line-height: 1.6; }
  pre.code { margin: 0; white-space: pre-wrap; word-break: break-word; line-height: 1.55; tab-size: 2; color: #e3e9ef;
    font-family: ui-monospace, "SF Mono", Menlo, monospace; }
  pre.code .tag { color: #7ee787; }
  pre.code .s   { color: #a5d6ff; }
  pre.code .sel { color: #d2a8ff; }
  pre.code .p   { color: #79c0ff; }
  pre.code .t   { color: #ffa657; }
  pre.code .n   { color: #f0883e; }
  pre.code .c   { color: #8d97a3; font-style: italic; }
  .g { margin-bottom: 14px; }
  .g__intent { margin: 0 0 14px; color: #ffffff; line-height: 1.6; font-size: 13px; }
  .g__h { color: #c4cdd8; font-size: 11px; letter-spacing: .04em; text-transform: uppercase; margin-bottom: 6px; }
  .g ul { margin: 0 0 2px; padding-left: 18px; }
  .g li { color: #e3e9ef; line-height: 1.55; margin-bottom: 5px; }
  .tgroup { margin-bottom: 14px; }
  .tgroup__h { text-transform: capitalize; color: #c4cdd8; font-size: 11px; letter-spacing: .04em; margin-bottom: 6px; }
  .tgroup__h span { color: #7a8492; }
  .tok { display: flex; flex-direction: column; gap: 2px; padding: 6px 0; border-bottom: 1px solid #161b22; }
  .tok__name { display: flex; align-items: center; gap: 8px; }
  .tok__name i { width: 14px; height: 14px; border-radius: 3px; border: 1px solid #ffffff22; flex: none; }
  .tok__name code { color: #ffffff; font-family: ui-monospace, monospace; }
  .tok__val { color: #c4cdd8; padding-left: 22px; word-break: break-all; font-family: ui-monospace, monospace; }
  .x { border: 0; background: none; color: #c4cdd8; font-size: 20px; line-height: 1; cursor: pointer; }
  .x:hover { color: #fff; }
`;

const HOST_ID = 'handoff-inspector';

/** Derive the bundle slug from the path, exactly like the handoff CLI's --name. */
function routeSlug(): string {
  const base = import.meta.env.BASE_URL;
  let p = location.pathname;
  if (p.startsWith(base)) p = p.slice(base.length);
  p = p.replace(/^\/|\/$/g, '');
  return p.replace(/\//g, '-') || 'index';
}
const manifestUrl = (slug: string) => `${import.meta.env.BASE_URL}handoff/${slug}/manifest.json`;

export function initInspector(): void {
  if (document.getElementById(HOST_ID)) return; // idempotent
  const url = manifestUrl(routeSlug());
  fetch(url)
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((manifest: Manifest) => mount(manifest, url))
    .catch(() => {
      /* No bundle for this route — stay dormant. */
    });
}

function mount(manifest: Manifest, manifestUrl: string): void {
  const host = document.createElement('div');
  host.id = HOST_ID;
  const root = host.attachShadow({ mode: 'open' });
  // Mount on <html>, not <body>: the handoff capture engine treats body children
  // as page sections, so keeping our host out of <body> means re-capturing a route
  // never picks up the inspector itself as a junk section. Fixed positioning inside
  // the shadow root anchors to the viewport regardless.
  document.documentElement.appendChild(host);

  // Page-level outline for the on-hover / selected section (the page is outside
  // this app's shadow root, so these rules must live in document.head).
  const pageStyle = document.createElement('style');
  pageStyle.textContent = `
    [data-handoff-on] { outline: 2px solid #4493f8 !important; outline-offset: -2px;
      scroll-margin: 80px; }`;

  const base = manifestUrl.replace(/manifest\.json.*$/, '');

  const style = document.createElement('style');
  style.textContent = STYLE;
  const wrap = document.createElement('div');
  wrap.className = 'host-root';
  wrap.innerHTML = `
    <button class="launch" title="Inspect this prototype (⌥⇧I)">
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 9 3 3-3 3"/><path d="M14 15h3"/><rect width="18" height="16" x="3" y="4" rx="2"/></svg>
      Inspect
    </button>
    <div class="panel">
      <div class="head"><strong>Inspector</strong><span class="sub"></span><button class="x" title="Close (Esc)">×</button></div>
      <div class="picker"></div>
      <div class="tabs">
        <button data-tab="guide" class="on">Guide</button>
        <button data-tab="html">HTML</button>
        <button data-tab="css">CSS</button>
        <button data-tab="js">JS</button>
        <button data-tab="tokens">Tokens</button>
      </div>
      <div class="body"></div>
      <div class="footer">
        <div class="cpreview" hidden>
          <div class="cpreview__h">Prompt handed to Claude<button class="cpreview__copy">Copy prompt</button></div>
          <pre></pre>
        </div>
        <button class="copy" title="Copy the active tab's raw content">Copy</button>
        <button class="claude" title="Preview the prompt for Claude">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/></svg>
          for Claude
        </button>
      </div>
    </div>`;
  root.append(style, wrap);

  const launch = wrap.querySelector<HTMLButtonElement>('.launch')!;
  const panel = wrap.querySelector<HTMLElement>('.panel')!;
  const sub = wrap.querySelector<HTMLElement>('.sub')!;
  const picker = wrap.querySelector<HTMLElement>('.picker')!;
  const body = wrap.querySelector<HTMLElement>('.body')!;
  const tabBtns = [...wrap.querySelectorAll<HTMLButtonElement>('.tabs button[data-tab]')];
  const copyBtn = wrap.querySelector<HTMLButtonElement>('.copy')!;
  const claudeBtn = wrap.querySelector<HTMLButtonElement>('.claude')!;
  const cpreview = wrap.querySelector<HTMLElement>('.cpreview')!;
  const cpreviewPre = wrap.querySelector<HTMLElement>('.cpreview pre')!;
  const cpreviewCopy = wrap.querySelector<HTMLButtonElement>('.cpreview__copy')!;

  // Outline the live region a section maps to (by its authored selector).
  const clearHighlight = () =>
    document.querySelectorAll('[data-handoff-on]').forEach((el) => el.removeAttribute('data-handoff-on'));
  const highlight = (selector?: string) => {
    clearHighlight();
    if (selector) document.querySelector(selector)?.setAttribute('data-handoff-on', '');
  };

  let current: (Section & { tag?: string }) | null = null;
  let tab: 'html' | 'css' | 'js' | 'tokens' | 'guide' = 'guide';
  let open = false;
  let applying = false; // true while a recipe drives the page (its clicks aren't "outside")

  function render() {
    copyBtn.textContent = `Copy ${tab}`; // Copy button names what it'll copy
    if (!current) {
      sub.textContent = `${manifest.name} · ${manifest.sections.length} sections`;
      body.innerHTML = `<p class="hint">Pick a section above to inspect its markup, styles, behavior, tokens, and design intent.</p>`;
      return;
    }
    sub.textContent =
      current.tag && current.tag !== 'page' ? `${current.label} · <${current.tag}>` : current.label;
    if (tab === 'html') body.innerHTML = `<pre class="code">${hlHtml(current.html)}</pre>`;
    else if (tab === 'css')
      body.innerHTML = current.css
        ? `<pre class="code">${hlCss(current.css)}</pre>`
        : `<p class="hint">No section-local CSS (inherited utilities only).</p>`;
    else if (tab === 'js')
      body.innerHTML = current.js
        ? `<pre class="code">${hlJs(current.js)}</pre>`
        : `<p class="hint">No interactivity — this section is static markup.</p>`;
    else if (tab === 'tokens') body.innerHTML = renderTokens(current.tokens);
    else body.innerHTML = renderGuide(current.guide);
  }

  const chipNodes = () => [...picker.querySelectorAll<HTMLElement>('.chips .chip')];

  // doApply: drive the LIVE app into this section's state (only on a real click,
  // and only while open — never on the silent initial selection).
  function select(i: number, doApply = false) {
    current = manifest.sections[i] || null;
    chipNodes().forEach((c, j) => c.classList.toggle('on', j === i));
    hideClaudePreview();
    if (doApply && open && current?.apply) {
      // Recipe clicks land on the PAGE — flag them so the click-outside-to-close
      // handler doesn't treat the app being driven as a click off the panel.
      applying = true;
      // Reset: close the palette if it's open — via its own close control, NOT a
      // global Escape (which the inspector itself listens for and would close us).
      const omni = document.querySelector('[data-omni]');
      if (omni && !omni.hasAttribute('hidden'))
        document.querySelector<HTMLElement>('[data-omni-close]')?.click();
      runApplyDom(current.apply);
      applying = false;
    }
    if (open) highlight(current?.selector);
    render();
  }

  function buildChips() {
    picker.innerHTML = '<div class="chips"></div>';
    const chips = picker.querySelector('.chips')!;
    manifest.sections.forEach((s, i) => {
      const b = document.createElement('button');
      b.className = 'chip';
      b.title = s.apply ? `${s.label} — click to drive the app into this state` : s.label;
      b.textContent = s.label;
      b.onclick = () => select(i, true);
      chips.appendChild(b);
    });
  }

  // Close when a click lands outside the panel — but not on a recipe-driven page
  // click, and not on the very click that opened it (composedPath sees into the
  // shadow DOM, so panel clicks are correctly "inside").
  const onDocClick = (e: MouseEvent) => {
    if (!open || applying) return;
    if (!e.composedPath().includes(panel)) setOpen(false);
  };

  function setOpen(on: boolean) {
    open = on;
    panel.classList.toggle('is-open', on); // class drives the slide-in transition
    launch.hidden = on;
    if (on) {
      document.head.append(pageStyle);
      highlight(current?.selector); // re-outline the current section, if any
      // Defer arming a tick so the opening click itself doesn't immediately close it.
      setTimeout(() => document.addEventListener('click', onDocClick, true), 0);
    } else {
      pageStyle.remove();
      clearHighlight();
      document.removeEventListener('click', onDocClick, true);
    }
  }

  // Copy the active tab's raw content: HTML / CSS verbatim, tokens as CSS
  // custom-property declarations ready to paste into a :root block.
  function copyText() {
    if (!current) return '';
    if (tab === 'html') return current.html || '';
    if (tab === 'css') return current.css || '';
    if (tab === 'js') return current.js || '';
    if (tab === 'tokens') return (current.tokens || []).map((t) => `${t.name}: ${t.value};`).join('\n');
    const g = current.guide || {};
    return [
      g.intent,
      g.decisions?.length && `Key decisions:\n${g.decisions.map((x) => `- ${x}`).join('\n')}`,
      g.gotchas?.length && `Gotchas:\n${g.gotchas.map((x) => `- ${x}`).join('\n')}`,
      g.acceptance?.length && `Done when:\n${g.acceptance.map((x) => `- ${x}`).join('\n')}`,
    ].filter(Boolean).join('\n\n');
  }
  const flash = (btn: HTMLButtonElement, restore: string, ok = true) => {
    const orig = btn.innerHTML;
    btn.classList.toggle('done', ok);
    btn.textContent = restore;
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.classList.remove('done');
    }, 1300);
  };

  copyBtn.onclick = async () => {
    const text = copyText();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      flash(copyBtn, 'Copied');
    } catch {
      flash(copyBtn, 'Failed', false);
    }
  };

  // The exact prompt handed to Claude: an instruction + a fetchable link to this
  // section's self-contained spec (markup + styles + behavior + tokens + guidance).
  function claudePayload(): string {
    if (!current?.claudePath) return '';
    const url = new URL(base + current.claudePath, location.origin).href;
    const lines = [
      `Here's a new UI section to build — "${current.label}".`,
      '',
      'The linked spec has the design guidance (intent, key decisions, gotchas) plus sample',
      'HTML, CSS, and JS. The finished UI should look and behave exactly like this — match it',
      "faithfully. The sample code shows how it's built; you don't need to mirror it",
      'line-for-line — translate it to your own stack and design system, mapping the',
      "sample's values onto your established tokens.",
      '',
      'Spec — use whichever you can reach:',
      `• hosted: ${url}`,
    ];
    if (current.repoPath) lines.push(`• in this repo: ${current.repoPath}`);
    return lines.join('\n');
  }
  const hideClaudePreview = () => (cpreview.hidden = true);

  // Claude button PREVIEWS the prompt (toggles a popover) rather than copying blind.
  claudeBtn.onclick = () => {
    if (!current?.claudePath) return;
    if (!cpreview.hidden) return hideClaudePreview();
    cpreviewPre.textContent = claudePayload();
    cpreview.hidden = false;
  };
  cpreviewCopy.onclick = async () => {
    try {
      await navigator.clipboard.writeText(claudePayload());
      flash(cpreviewCopy, 'Copied ✓');
    } catch {
      flash(cpreviewCopy, 'Failed', false);
    }
  };

  launch.onclick = () => setOpen(true);
  wrap.querySelector<HTMLButtonElement>('.x')!.onclick = () => setOpen(false);
  tabBtns.forEach(
    (b) =>
      (b.onclick = () => {
        tab = b.dataset.tab as typeof tab;
        tabBtns.forEach((x) => x.classList.toggle('on', x === b));
        hideClaudePreview();
        render();
      })
  );

  // Keys: ⌥⇧I toggles anywhere; Esc closes when open.
  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
      e.preventDefault();
      setOpen(!open);
    } else if (e.key === 'Escape' && open) {
      e.preventDefault();
      setOpen(false);
    }
  });

  buildChips();
  select(0); // first chip selected by default (no apply until a real click)
  // ?inspect in the URL opens immediately — shareable inspect links.
  if (new URLSearchParams(location.search).has('inspect')) setOpen(true);
}

// ── src/components/handoff/HandoffInspector.astro ──
---
// Ships the runtime Handoff inspector on every page. The script self-gates: it
// fetches /handoff/<route-slug>/manifest.json and stays fully dormant (no UI) when
// the current route has no bundle — so it's safe to mount globally from BaseLayout.
//
// Spoke-local for now; once proven here it gets promoted into @esa/handoff so every
// Ecology spoke inherits a deployable inspector.
---
<script>
  import { initInspector } from './inspector.client.ts';
  initInspector();
</script>

// ── src/layouts/BaseLayout.astro ──
---
// Beacon base layout — wires the hub tokens + the Beacon theme, loads Beacon's
// fonts (DM Sans + Roboto Mono + Besley), and sets data-theme="beacon" so every
// inherited esa-* component re-skins to Beacon.
import '@esa/tokens/tokens.css';
import '@esa/tokens/component-tokens.css';
import '../styles/theme-beacon.css';
import HandoffInspector from '../components/handoff/HandoffInspector.astro';

interface Props {
  title?: string;
}
const { title = 'Beacon Design' } = Astro.props;
---
<!doctype html>
<html lang="en" data-theme="beacon">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <!-- DM Sans (body/heading), Roboto Mono (code/ids), Besley (opt-in decorative) —
         matching Beacon's _webfonts.scss / _modern.scss font loading. -->
    <link
      href="https://fonts.googleapis.com/css2?family=Besley:ital,wght@0,400..900;1,400..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Roboto+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <title>{title}</title>
    <style is:global>
      *, *::before, *::after { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: var(--font-sans, system-ui, sans-serif);
        font-weight: var(--font-weight-regular, 350);
        color: var(--color-text-primary, #3d3d3d);
        background: var(--color-surface, #fff);
        -webkit-font-smoothing: antialiased;
      }
      a { color: var(--color-text-link, #005862); text-decoration: none; }
      img { display: block; max-width: 100%; }
      button { font-family: inherit; cursor: pointer; background: none; border: 0; }
    </style>
  </head>
  <body>
    <slot />
    <HandoffInspector />
  </body>
</html>

// ── src/lib/base.ts ──
/**
 * Prefix a root-relative path with Astro's configured `base`.
 *
 * Use for anything Astro WON'T rewrite for us: `public/` asset references
 * (`<img src>`, CSS `url()`) and hand-written internal links/redirects.
 * Assets imported through the build pipeline already get the base — don't
 * wrap those.
 *
 * `import.meta.env.BASE_URL` always ends in `/` (e.g. `/beacon-design/` in a
 * production build, `/` in dev), so we strip any leading slash from `path`
 * to avoid a doubled separator.
 */
export const withBase = (path: string): string =>
  import.meta.env.BASE_URL + path.replace(/^\//, '');

// ── src/layouts/AppShell.astro ──
---
// AppShell — the Beacon "modern-layout" frame, ported VERBATIM from the live
// Angular app:
//   - app.component.html/.scss          → .modern-layout (header + body[sidenav+content])
//   - header-nav-modern.component.*      → .topbar (left/center/right zones)
//   - side-nav-modern.component.*        → side nav (logo, project-switcher, main-nav)
//
// SCSS → spoke-token translation (no hardcoded hex/px):
//   $gray-N → var(--bcn-gray-N); $primary → var(--color-primary);
//   rgba($primary,.1) → color-mix(...); $white → var(--color-surface);
//   $accent → var(--color-accent); $danger-600/50 → var(--color-danger[-subtle]);
//   $spacing-* → var(--spacing-*). Radii kept as spacing vars (verbatim).
//
// Driven by a static fixture (see defaults below). The collapse toggle + user
// panel are wired with a tiny inline script — no framework.
import BaseLayout from './BaseLayout.astro';
import EsaIcon from '@esa/ecology/esa-icon.astro';
import { withBase } from '../lib/base';

interface NavItem {
  id: string;
  label: string;
  active?: boolean;
}
interface NavSection {
  id: string;
  title: string;
  icon: string;
  /** Inline Lucide path markup for glyphs not in esa-icon's registry. */
  iconPaths?: string;
  items?: NavItem[];
  /** Single-link section (no sublist), e.g. a dashboard entry. */
  link?: boolean;
  expanded?: boolean;
  active?: boolean;
  dividerAfter?: boolean;
}
interface Props {
  title?: string;
  tenantName?: string;
  projectName?: string;
  userName?: string;
  userEmail?: string;
  navSections?: NavSection[];
  showQaBadge?: boolean;
}

// ── Lucide glyphs not in esa-icon's built-in registry (inner SVG markup only) ──
const LUCIDE = {
  'sliders-horizontal':
    '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
  'circle-user-round':
    '<path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/>',
  'log-out':
    '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
  'library-big':
    '<rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/>',
  'clipboard-check':
    '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  // ── side-nav section icons (verbatim names from side-nav-modern.component.ts) ──
  compass:
    '<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/>',
  'layout-dashboard':
    '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  radar:
    '<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',
  'map-pinned':
    '<path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/>',
  'clipboard-list':
    '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  database:
    '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  hammer:
    '<path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/>',
};

const {
  title = 'Beacon',
  tenantName = 'AWS',
  projectName = 'Raul',
  userName = 'Andy Lovseth',
  userEmail = 'andy.lovseth@esassoc.com',
  showQaBadge = true,
  // Verbatim nav structure from side-nav-modern.component.ts (standard labels).
  navSections = [
    {
      id: 'setup-wizard',
      title: 'Setup Wizard',
      icon: 'compass',
      iconPaths: LUCIDE['compass'],
      link: true,
    },
    {
      id: 'project',
      title: 'Project',
      icon: 'layout-dashboard',
      iconPaths: LUCIDE['layout-dashboard'],
      expanded: true,
      dividerAfter: true,
      items: [
        { id: 'dashboard', label: 'Dashboard', active: true },
        { id: 'source-documents', label: 'Source Documents' },
        { id: 'commitments', label: 'Commitments' },
        { id: 'requirements', label: 'Requirements' },
        { id: 'organize-actions', label: 'Organize Actions' },
        { id: 'action-lists', label: 'Action Lists' },
        { id: 'document-reviews', label: 'Document Reviews' },
        { id: 'spatial-library-layers', label: 'Spatial Library Layers' },
      ],
    },
    {
      id: 'tracking',
      title: 'Tracking',
      icon: 'radar',
      iconPaths: LUCIDE['radar'],
      expanded: true,
      items: [
        { id: 'tracking-summary', label: 'Tracking Summary' },
        { id: 'project-tracking', label: 'Project Tracking' },
        { id: 'all-components', label: 'All Components' },
      ],
    },
    {
      id: 'monitoring',
      title: 'Monitoring',
      icon: 'map-pinned',
      iconPaths: LUCIDE['map-pinned'],
      expanded: true,
      items: [{ id: 'monitoring-portal', label: 'Monitoring Portal' }],
    },
    {
      id: 'reporting',
      title: 'Reporting',
      icon: 'clipboard-list',
      iconPaths: LUCIDE['clipboard-list'],
      expanded: true,
      dividerAfter: true,
      items: [
        { id: 'progress-report', label: 'Progress Report' },
        { id: 'report-center', label: 'Report Center' },
      ],
    },
    {
      id: 'data-catalog',
      title: 'Data Catalog',
      icon: 'database',
      iconPaths: LUCIDE['database'],
      expanded: true,
      items: [
        { id: 'dc-source-documents', label: 'Source Documents' },
        { id: 'dc-commitments', label: 'Commitments' },
        { id: 'dc-requirements', label: 'Requirements' },
        { id: 'dc-actions', label: 'Actions' },
        { id: 'dc-all-data', label: 'All Data' },
      ],
    },
  ],
} = Astro.props as Props;

---

<BaseLayout title={title}>
  <div class="modern-layout">
    <!-- ═══ TOPBAR (header-nav-modern) ═══ -->
    <header class="topbar">
      <!-- Left: sidebar toggle + tenant trigger -->
      <div class="topbar__left">
        <button
          type="button"
          class="sidebar-toggle"
          id="sidebar-toggle"
          aria-label="Collapse sidebar"
          aria-expanded="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="sidebar-toggle__icon"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M9 3v18" />
          </svg>
        </button>

        <button type="button" class="tenant-trigger">
          <span>{tenantName}</span>
          <EsaIcon name="chevron-down" size="xs" />
        </button>
      </div>

      <!-- Center: spacer (1fr) -->
      <div class="topbar__center"></div>

      <!-- Right: QA badge, search, config/admin icon-buttons, user menu -->
      <div class="topbar__right">
        {
          showQaBadge && (
            <span class="qa-warning">
              <EsaIcon name="triangle-alert" size="sm" />
              QA
            </span>
          )
        }

        <button type="button" class="icon-button" aria-label="Search">
          <EsaIcon name="search" size="md" />
        </button>

        <a href="#esa-config" class="icon-button" aria-label="ESA-Config">
          <EsaIcon name="sliders-horizontal" size="md" paths={LUCIDE['sliders-horizontal']} />
        </a>

        <a href="#admin" class="icon-button" aria-label="Admin settings">
          <EsaIcon name="settings" size="md" />
        </a>

        <div class="user-menu" id="user-menu">
          <button type="button" class="user-menu-trigger" id="user-menu-trigger" aria-label="User menu" aria-expanded="false">
            <span class="user-menu-trigger__avatar user-menu-trigger__avatar--fallback">
              <EsaIcon name="circle-user-round" size="md" paths={LUCIDE['circle-user-round']} />
            </span>
          </button>

          <div class="user-panel" id="user-panel" hidden>
            <div class="user-panel__header">
              <div class="user-panel__avatar-wrapper">
                <span class="user-panel__avatar user-panel__avatar--fallback">
                  <EsaIcon name="circle-user-round" size="lg" paths={LUCIDE['circle-user-round']} />
                </span>
              </div>
              <div class="user-panel__info">
                <span class="user-panel__name">{userName}</span>
                <span class="user-panel__email">{userEmail}</span>
              </div>
            </div>

            <div class="user-panel__menu">
              <button type="button" class="user-panel__item">
                <EsaIcon name="pencil" size="sm" />
                <span>Edit Profile</span>
              </button>
              <a class="user-panel__item" href="#help">
                <EsaIcon name="circle-question-mark" size="sm" />
                <span>Get Help</span>
              </a>
              <button type="button" class="user-panel__item user-panel__item--danger">
                <EsaIcon name="log-out" size="sm" paths={LUCIDE['log-out']} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- ═══ BODY (sidenav + content) ═══ -->
    <div class="modern-layout__body">
      <!-- ─── side-nav-modern ─── -->
      <nav class="side-nav" id="side-nav">
        <div class="sidebar-header">
          <a href="#home" class="site-logo" aria-label="Beacon home">
            <img src={withBase('/beacon-icon.svg')} alt="Beacon" class="site-logo__img" />
          </a>
        </div>

        <!-- project-switcher (ported from project-switcher.component) -->
        <div class="project-switcher-container">
          <button type="button" class="project-switcher__trigger">
            <EsaIcon name="hammer" size="sm" paths={LUCIDE['hammer']} />
            <span class="project-switcher__name">{projectName}</span>
            <EsaIcon name="chevron-down" size="sm" class="project-switcher__chevron" />
          </button>
        </div>

        <div class="main-nav">
          {
            navSections.map((section) => (
              <>
                {section.link ? (
                  <div class:list={['nav-section', { 'nav-section--active': section.active }]}>
                    <a href={`#${section.id}`} class="nav-section__header nav-section__header--link">
                      <EsaIcon name={section.icon} size="sm" paths={section.iconPaths ?? LUCIDE[section.icon as keyof typeof LUCIDE]} />
                      <span class="nav-section__title">{section.title}</span>
                    </a>
                  </div>
                ) : (
                  <div
                    class:list={[
                      'nav-section',
                      { 'nav-section--collapsed': !section.expanded, 'nav-section--active': section.active },
                    ]}
                  >
                    <button type="button" class="nav-section__header" aria-expanded={section.expanded ? 'true' : 'false'}>
                      <EsaIcon name={section.icon} size="sm" paths={section.iconPaths ?? LUCIDE[section.icon as keyof typeof LUCIDE]} />
                      <span class="nav-section__title">{section.title}</span>
                      <EsaIcon name="chevron-down" size="sm" />
                    </button>
                    <ul class="nav-section__items">
                      {section.items?.map((item) => (
                        <li class="nav-item">
                          <a href={`#${item.id}`} class:list={['nav-sublink', { active: item.active }]}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {section.dividerAfter && <hr class="nav-divider" aria-hidden="true" />}
              </>
            ))
          }
        </div>
      </nav>

      <!-- content -->
      <div class="modern-layout__content">
        <slot />
      </div>
    </div>
  </div>
</BaseLayout>

<script>
  // Sidebar collapse toggle + chevron mirroring + user panel open/close.
  // Mirrors header-nav-modern's onToggleSidebar() and ui-dropdown behavior.
  const toggle = document.getElementById('sidebar-toggle');
  const sideNav = document.getElementById('side-nav');
  if (toggle && sideNav) {
    toggle.addEventListener('click', () => {
      const collapsed = sideNav.classList.toggle('collapsed');
      toggle.classList.toggle('sidebar-toggle--collapsed', collapsed);
      toggle.setAttribute('aria-expanded', String(!collapsed));
      toggle.setAttribute('aria-label', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
    });
  }

  // Nav-section expand/collapse (expanded sidebar only).
  document.querySelectorAll<HTMLButtonElement>('.nav-section__header:not(.nav-section__header--link)').forEach((btn) => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.nav-section');
      if (!section) return;
      const nowCollapsed = section.classList.toggle('nav-section--collapsed');
      btn.setAttribute('aria-expanded', String(!nowCollapsed));
    });
  });

  // User menu dropdown.
  const userTrigger = document.getElementById('user-menu-trigger');
  const userPanel = document.getElementById('user-panel');
  const userMenu = document.getElementById('user-menu');
  if (userTrigger && userPanel && userMenu) {
    const setOpen = (open: boolean) => {
      userPanel.hidden = !open;
      userTrigger.setAttribute('aria-expanded', String(open));
    };
    userTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      setOpen(userPanel.hidden);
    });
    document.addEventListener('click', (e) => {
      if (!userMenu.contains(e.target as Node)) setOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }
</script>

<style>
  /* ═══════════════════════════════════════════════════════════════════
     app.component.scss — .modern-layout frame
     ═══════════════════════════════════════════════════════════════════ */
  .modern-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .modern-layout__body {
    display: flex;
    flex: 1;
    overflow: hidden;
    padding-top: 52px; /* header height */
  }

  .modern-layout__content {
    flex: 1;
    overflow-y: auto;
    min-width: 0;
  }

  /* ═══════════════════════════════════════════════════════════════════
     header-nav-modern.component.scss — topbar
     ═══════════════════════════════════════════════════════════════════ */
  .qa-warning {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-100);
    padding: var(--spacing-050) var(--spacing-200);
    font-size: 0.75rem;
    font-weight: 600;
    background: var(--color-accent);
    color: var(--color-surface);
    border-radius: var(--spacing-100);
    white-space: nowrap;
  }

  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 52px;
    background: var(--bcn-gray-100);
    border-bottom: 1px solid var(--bcn-gray-300);
    z-index: 1100;

    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 0 var(--spacing-200);
  }

  @media (min-width: 768px) {
    .topbar {
      padding: 0 var(--spacing-400);
    }
  }

  .topbar__left {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
  }

  .topbar__center {
    display: flex;
    align-items: center;
    gap: var(--spacing-400);
    padding: 0 var(--spacing-400);
  }

  .topbar__right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--spacing-100);
  }

  /* Sidebar toggle */
  .sidebar-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: var(--spacing-050);
    background: transparent;
    color: var(--bcn-gray-600);
    cursor: pointer;
    transition: background 150ms ease, color 150ms ease;
  }
  .sidebar-toggle:hover {
    background: var(--bcn-gray-200);
    color: var(--color-primary);
  }
  .sidebar-toggle:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  .sidebar-toggle__icon {
    transition: transform 150ms ease;
  }
  .sidebar-toggle--collapsed .sidebar-toggle__icon {
    transform: scaleX(-1);
  }

  /* Tenant trigger */
  .tenant-trigger {
    display: flex;
    align-items: center;
    gap: var(--spacing-100);
    padding: var(--spacing-100) var(--spacing-200);
    background: transparent;
    border: none;
    border-radius: var(--spacing-050);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--bcn-gray-900);
    cursor: pointer;
    transition: background 150ms ease;
  }
  .tenant-trigger:hover {
    background: var(--bcn-gray-200);
  }

  /* Icon button */
  .icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: var(--spacing-050);
    background: transparent;
    color: var(--bcn-gray-600);
    text-decoration: none;
    cursor: pointer;
    transition: background 150ms ease, color 150ms ease;
  }
  .icon-button:hover {
    background: var(--bcn-gray-200);
    color: var(--color-primary);
  }
  .icon-button--active {
    background: color-mix(in srgb, var(--color-primary) 10%, transparent);
    color: var(--color-primary);
  }
  .icon-button:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  /* User menu trigger */
  .user-menu {
    position: relative;
  }
  .user-menu-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: none;
    border-radius: 9999px;
    background: transparent;
    cursor: pointer;
    transition: transform 150ms ease;
  }
  .user-menu-trigger:hover {
    transform: scale(1.05);
  }
  .user-menu-trigger:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  .user-menu-trigger__avatar {
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    object-fit: cover;
    border: 2px solid var(--bcn-gray-200);
    transition: border-color 150ms ease;
  }
  .user-menu-trigger__avatar--fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bcn-gray-200);
    color: var(--bcn-gray-500);
  }
  .user-menu-trigger:hover .user-menu-trigger__avatar {
    border-color: var(--color-primary);
  }

  /* User panel dropdown (ui-dropdown content, position bottom-end) */
  .user-panel {
    position: absolute;
    top: calc(100% + var(--spacing-200));
    right: 0;
    min-width: 280px;
    background: var(--color-surface);
    border-radius: var(--spacing-200);
    border: 1px solid var(--bcn-gray-200);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
    z-index: 1200;
  }
  .user-panel[hidden] {
    display: none;
  }
  .user-panel__header {
    display: flex;
    align-items: center;
    gap: var(--spacing-300);
    padding: var(--spacing-400);
    border-bottom: 1px solid var(--bcn-gray-200);
  }
  .user-panel__avatar-wrapper {
    flex-shrink: 0;
  }
  .user-panel__avatar {
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    object-fit: cover;
    border: 2px solid var(--bcn-gray-200);
  }
  .user-panel__avatar--fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bcn-gray-100);
    color: var(--bcn-gray-400);
  }
  .user-panel__info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-050);
  }
  .user-panel__name {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--bcn-gray-900);
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .user-panel__email {
    font-size: 0.8125rem;
    color: var(--bcn-gray-500);
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .user-panel__menu {
    padding: var(--spacing-200);
  }
  .user-panel__item {
    display: flex;
    align-items: center;
    gap: var(--spacing-300);
    width: 100%;
    padding: var(--spacing-300);
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--bcn-gray-900);
    background: transparent;
    border: none;
    border-radius: var(--spacing-150);
    cursor: pointer;
    text-align: left;
    text-decoration: none;
    transition: background-color 150ms ease;
  }
  .user-panel__item:hover {
    background: var(--bcn-gray-50);
  }
  .user-panel__item:active {
    background: var(--bcn-gray-100);
  }
  .user-panel__item--danger {
    color: var(--color-danger);
  }
  .user-panel__item--danger:hover {
    background: var(--color-danger-subtle);
  }
  .user-panel__item :global(.esa-icon) {
    color: var(--bcn-gray-500);
  }
  .user-panel__item--danger :global(.esa-icon) {
    color: var(--color-danger);
  }

  /* ═══════════════════════════════════════════════════════════════════
     side-nav-modern.component.scss — side nav
     ($sidebar-width 280px / $sidebar-collapsed-width 72px)
     ═══════════════════════════════════════════════════════════════════ */
  .side-nav {
    width: 280px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--bcn-gray-50);
    font-size: 0.875rem;
    overflow: visible;
    transition: width 200ms ease-in-out;
    border-right: 1px solid var(--bcn-gray-200);
    flex-shrink: 0;
  }
  .side-nav.collapsed {
    width: 72px;
    max-width: 72px;
  }

  .sidebar-header {
    flex-shrink: 0;
    padding: var(--spacing-300) var(--spacing-400);
    transition: padding 200ms ease-in-out;
  }
  .side-nav.collapsed .sidebar-header {
    padding: var(--spacing-300) var(--spacing-200);
  }

  .site-logo {
    display: inline-flex;
    align-items: center;
    padding: var(--spacing-200);
    border-radius: var(--spacing-050);
    text-decoration: none;
    transition: background 150ms ease;
  }
  .site-logo:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  .site-logo__img {
    /* Real Beacon mark (teal leaf/wave). Verbatim: width $spacing-700 (3rem) ×
       height $spacing-775 (3.75rem, one-off — no hub spacing token). */
    width: var(--spacing-700);
    height: 3.75rem;
    object-fit: contain;
    object-position: left center;
    transition: all 200ms ease-in-out;
  }
  .side-nav.collapsed .site-logo__img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    object-position: left center;
  }

  .project-switcher-container {
    flex-shrink: 0;
    padding: 0 var(--spacing-400) var(--spacing-300);
    transition: padding 200ms ease-in-out;
    min-width: 0;
  }
  .side-nav.collapsed .project-switcher-container {
    padding: 0 var(--spacing-200);
  }
  /* project-switcher.component.scss — bordered single-row control */
  .project-switcher__trigger {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    padding: var(--spacing-200) var(--spacing-300);
    background: var(--color-surface);
    border: 1px solid var(--bcn-gray-200);
    border-radius: var(--spacing-200);
    cursor: pointer;
    transition: all 150ms ease;
    color: var(--bcn-gray-950);
    font-size: 0.875rem;
    font-weight: 500;
  }
  .project-switcher__trigger:hover {
    border-color: var(--bcn-gray-300);
    background: var(--bcn-gray-0);
  }
  /* leading icon (hammer) */
  .project-switcher__trigger > :global(.esa-icon:first-child) {
    flex-shrink: 0;
    color: var(--bcn-gray-500);
  }
  .project-switcher__name {
    flex: 1;
    min-width: 0;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .project-switcher__chevron {
    flex-shrink: 0;
    color: var(--bcn-gray-400);
  }
  .side-nav.collapsed .project-switcher__trigger {
    justify-content: center;
    padding: var(--spacing-200);
  }
  .side-nav.collapsed .project-switcher__name,
  .side-nav.collapsed .project-switcher__chevron {
    display: none;
  }

  .main-nav {
    flex: 1;
    overflow-y: auto;
    overflow-x: visible;
    padding: 0 var(--spacing-400);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-050);
    transition: padding 200ms ease-in-out;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .main-nav::-webkit-scrollbar {
    display: none;
  }
  .side-nav.collapsed .main-nav {
    padding: 0 var(--spacing-200);
  }

  .nav-section {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .nav-divider {
    flex-shrink: 0;
    height: 1px;
    margin: var(--spacing-200) 0;
    border: 0;
    background: var(--bcn-gray-200);
  }

  .nav-section__header {
    display: flex;
    align-items: center;
    gap: var(--spacing-300);
    padding: var(--spacing-250) var(--spacing-200);
    color: var(--bcn-gray-950);
    font-size: 0.9375rem;
    font-weight: 550;
    border: none;
    background: transparent;
    border-radius: var(--spacing-050);
    transition: all 150ms ease;
    white-space: nowrap;
    width: 100%;
    text-align: left;
    cursor: pointer;
    text-decoration: none;
  }
  .nav-section__header--link {
    text-decoration: none;
    color: var(--bcn-gray-950);
  }
  .nav-section__header:hover {
    background: rgba(0, 0, 0, 0.04);
    color: var(--color-primary);
  }
  .nav-section__header:hover :global(.esa-icon) {
    color: var(--color-primary);
  }
  .nav-section--active .nav-section__header {
    color: var(--color-primary);
  }
  .nav-section--active .nav-section__header :global(.esa-icon) {
    color: var(--color-primary);
  }

  /* icon (first esa-icon in the header) */
  .nav-section__header > :global(.esa-icon:first-child) {
    flex-shrink: 0;
    color: var(--bcn-gray-950);
    transition: color 150ms ease;
  }
  /* chevron (last esa-icon in the header) */
  .nav-section__header > :global(.esa-icon:last-child) {
    color: var(--bcn-gray-400);
    transition: transform 150ms ease, opacity 200ms ease-in-out;
    flex-shrink: 0;
  }
  .nav-section--collapsed .nav-section__header > :global(.esa-icon:last-child) {
    transform: rotate(-90deg);
  }

  /* title spans flex between icon and chevron */
  .nav-section__title {
    flex: 1;
    overflow: hidden;
    transition: opacity 200ms ease-in-out;
  }
  .side-nav.collapsed .nav-section__title {
    display: none;
  }
  .side-nav.collapsed .nav-section__header > :global(.esa-icon:last-child) {
    display: none;
  }
  .side-nav.collapsed .nav-section__header {
    justify-content: center;
    padding: var(--spacing-250) var(--spacing-200);
  }

  .nav-section__items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-height: 500px;
    opacity: 1;
    transition: max-height 200ms ease-in-out, opacity 200ms ease-in-out;
  }
  .nav-section--collapsed .nav-section__items {
    max-height: 0;
    opacity: 0;
  }
  .side-nav.collapsed .nav-section__items {
    display: none;
  }

  .nav-item {
    padding: 0 0 0 2.5rem;
  }
  .nav-item + .nav-item {
    margin-top: var(--spacing-050);
  }

  .nav-sublink {
    display: block;
    padding: var(--spacing-200);
    color: var(--bcn-gray-950);
    text-decoration: none;
    border-radius: var(--spacing-050);
    font-size: 0.8125rem;
    transition: all 150ms ease;
    line-height: 1.2;
  }
  .nav-sublink:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  .nav-sublink.active {
    background: rgba(0, 0, 0, 0.04);
    color: var(--color-primary);
  }
</style>

// ── src/layouts/PageLayout.astro ──
---
// PageLayout — Beacon's content-page chrome, ported VERBATIM from the live
// Angular `page-layout` + `breadcrumbs` components:
//   - page-layout.component.scss   → .page-layout (padded wrapper + title row)
//   - breadcrumbs.component.scss   → .breadcrumbs (home glyph + chevron seps)
//
// Renders INSIDE AppShell: a page = AppShell > PageLayout > content.
//
// SCSS → spoke-token translation (no hardcoded hex/px):
//   $gray-N → var(--bcn-gray-N); $spacing-* → var(--spacing-*);
//   font-weight 650 → var(--font-weight-bold); var(--font-decorative) kept
//   (Besley); $type-size-500 → var(--type-size-500).
import EsaIcon from '@esa/ecology/esa-icon.astro';

export interface Breadcrumb {
  label: string;
  href?: string;
}
interface Props {
  /** Ordered crumbs; first leads with the home glyph, last renders as plain text. */
  breadcrumbs?: Breadcrumb[];
  title: string;
  /** Lucide icon name leading the H1 (e.g. "map"). */
  icon?: string;
}

// Lucide glyphs not in esa-icon's registry (inner SVG markup only).
const LUCIDE: Record<string, string> = {
  house:
    '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  map:
    '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
  radar:
    '<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',
};

const { breadcrumbs = [], title, icon } = Astro.props as Props;
const iconPaths = icon ? LUCIDE[icon] : undefined;
const hasUtilities = Astro.slots.has('utilities');
---

<div class="page-layout">
  <div class="page-layout__container">
    {
      breadcrumbs.length > 0 && (
        <section class="page-layout__breadcrumbs">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <div class="breadcrumbs__items">
              {breadcrumbs.map((crumb, i) => {
                const isFirst = i === 0;
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <>
                    {isFirst && <EsaIcon name="house" size="sm" paths={LUCIDE['house']} />}
                    {isLast || !crumb.href ? (
                      <span class="breadcrumb-item" aria-current={isLast ? 'page' : undefined}>
                        {crumb.label}
                      </span>
                    ) : (
                      <a class="breadcrumb-item" href={crumb.href}>
                        {crumb.label}
                      </a>
                    )}
                    {!isLast && <EsaIcon name="chevron-right" size="sm" />}
                  </>
                );
              })}
            </div>
          </nav>
        </section>
      )
    }

    <section class="page-layout__title">
      <div class="page-layout__title-main">
        <h1>
          {icon && <EsaIcon name={icon} paths={iconPaths} />}
          {title}
        </h1>
        <slot name="title-badge" />
      </div>
      {
        hasUtilities && (
          <div class="page-layout__utilities">
            <slot name="utilities" />
          </div>
        )
      }
    </section>

    <section class="page-layout__content">
      <slot />
    </section>
  </div>
</div>

<style>
  /* page-layout.component.scss — outer wrapper */
  .page-layout {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 15rem);
    padding: var(--spacing-600);
    background: var(--bcn-gray-50);
    box-sizing: border-box;
  }
  .page-layout__container {
    display: flex;
    flex-direction: column;
  }
  .page-layout section {
    width: 100%;
  }

  /* breadcrumbs.component.scss */
  .breadcrumbs {
    padding: var(--spacing-400) 0;
  }
  .breadcrumbs__items {
    display: flex;
    gap: var(--spacing-100);
    align-items: center;
    flex-wrap: wrap;
  }
  .breadcrumb-item {
    color: var(--bcn-gray-600);
    text-transform: capitalize;
    font-size: 0.875rem;
  }
  a.breadcrumb-item {
    text-decoration: none;
  }
  a.breadcrumb-item:hover {
    text-decoration: underline;
  }
  /* leading home glyph + chevron separators */
  .breadcrumbs__items :global(.esa-icon) {
    color: var(--bcn-gray-400);
  }

  /* page-layout__title — the header row */
  .page-layout__title {
    border-bottom: 1px solid var(--bcn-gray-200);
    padding: var(--spacing-500) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .page-layout__title-main {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
    min-width: 0;
  }
  .page-layout__title h1 {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
    font-family: var(--font-decorative);
    font-weight: var(--font-weight-bold);
    font-size: var(--type-size-500);
    margin: 0;
    color: var(--bcn-gray-1000);
  }
  .page-layout__title h1 :global(.esa-icon) {
    color: var(--bcn-gray-1000);
    flex-shrink: 0;
  }
  .page-layout__utilities {
    display: flex;
    gap: var(--spacing-200);
  }

  /* page-layout__content */
  .page-layout__content {
    padding: var(--spacing-500) 0;
    min-height: 70vh;
    position: relative;
  }
</style>

// ── src/data/tracker-fixture.ts ──
// Compliance-tracking fixture for the Action Tracker prototype.
//
// Basis: the real 3600 Alameda Avenue Project FEIR requirement export (130 rows,
// src/data/requirements.csv → generated, do not hand-edit). Columns mirror the
// live Progress Report view: Source Document · Commitment ID · Requirement Name ·
// Requirement Text · Requirement Type · Status · Comment · Action · Milestone(s)
// · Resource Category.
//
// The CSV export carries Name / Commitment / Source Document / Requirement Type /
// Resource Category / Phases. The tracking columns the export does NOT include
// (Status, Comment, Action, Milestone, Requirement Text) are synthesized
// DETERMINISTICALLY by the generator so the grid reads like the app without
// fabricating per-row legal text by hand.
//
// Regenerate: `node /tmp/gen-tracker.mjs` (generator kept out of the repo).

export type ActionStatus = 'not-started' | 'in-progress' | 'completed' | 'not-applicable';

export type Phase = 'Pre-Construction' | 'Construction' | 'Post-Construction';

export interface ActionRow {
  /** Requirement Name (links to the requirement/action). */
  name: string;
  /** Commitment ID, e.g. "MM-BIO-1". */
  commitment: string;
  /** Parent source document. */
  sourceDoc: string;
  /** Representative requirement text (synthesized; see header). */
  requirementText: string;
  /** Requirement Type, e.g. "Plan", "Monitoring", "Other". */
  type: string;
  status: ActionStatus;
  /** Comment count. */
  comments: number;
  /** Linked action label ('' when none). */
  action: string;
  /** Milestone(s) ('' when none). */
  milestones: string;
  resourceCategory: string;
  /** Lifecycle phase (from CSV; used for grouping, not a Progress Report column). */
  phase: string;
}

export const STATUS_META: Record<ActionStatus, { label: string; hex: string }> = {
  'not-started': { label: 'Not Started', hex: '#9aa3ad' },
  'in-progress': { label: 'In Progress', hex: '#e0a400' },
  completed: { label: 'Completed', hex: '#1a9b54' },
  'not-applicable': { label: 'Not Applicable', hex: '#b8bcc2' },
};

/** Kanban/board order — Not Applicable is folded off the board by default. */
export const STATUS_ORDER: ActionStatus[] = ['not-started', 'in-progress', 'completed'];

export const PROJECT_NAME = '3600 Alameda Avenue Project';
export const SOURCE_DOCUMENT = '3600 Alameda Avenue Project FEIR';

export const actions: ActionRow[] = [
  { name: 'Develop WEAP Training', commitment: 'MM-BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Training & Education', status: 'not-started', comments: 0, action: 'Develop WEAP Training', milestones: 'Demolition', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'All project personnel shall receive develop WEAP Training prior to beginning work on site, with attendance documented for the compliance record.' },
  { name: 'Provide WEAP Training to all Project personnel', commitment: 'MM-BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Training & Education', status: 'completed', comments: 1, action: 'Provide WEAP Training to all', milestones: '', resourceCategory: 'Biological Resources', phase: 'Construction', requirementText: 'All project personnel shall receive provide WEAP Training to all Project personnel prior to beginning work on site, with attendance documented for the compliance record.' },
  { name: 'If bird nests are found, establish no-disturbance buffers zones', commitment: 'MM-BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Establish no-disturbance buffers zones', milestones: '', resourceCategory: 'Biological Resources', phase: 'Construction', requirementText: 'Requirement: If bird nests are found, establish no-disturbance buffers zones, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'If work must occur within established no-disturbance buffer zones', commitment: 'MM-BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 3, action: 'If work must occur within', milestones: '', resourceCategory: 'Biological Resources', phase: 'Construction', requirementText: 'Requirement: If work must occur within established no-disturbance buffer zones, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Pre-construction survey for nesting raptors and other migratory birds during nesting season', commitment: 'MM-BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Survey', status: 'not-started', comments: 1, action: '', milestones: 'Building Permit', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'Prior to ground-disturbing activities, a qualified biologist shall complete pre-construction survey for nesting raptors and other migratory birds during nesting season within the project area and submit findings to the City.' },
  { name: 'Report of findings for construction within any no-disturbance buffer zone', commitment: 'MM-BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Reporting', status: 'in-progress', comments: 0, action: 'Report of findings for construction', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The applicant shall prepare report of findings for construction within any no-disturbance buffer zone and submit it to the lead agency within the timeframe specified in the FEIR mitigation measure.' },
  { name: ' Pre-construction habitat assessment of the Project area to characterize potential bat habitat and identify potentially active roost sites', commitment: 'MM-BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Survey', status: 'not-started', comments: 1, action: 'Pre-construction habitat assessment of the', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'Prior to ground-disturbing activities, a qualified biologist shall complete  Pre-construction habitat assessment of the Project area to characterize potential bat habitat and identify potentially active roost sites within the project area and submit findings to the City.' },
  { name: 'If active bat roosts or evidence of roosting is identified during pre-construction surveys, establish no-disturbance buffer', commitment: 'MM-BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Construction', requirementText: 'Requirement: If active bat roosts or evidence of roosting is identified during pre-construction surveys, establish no-disturbance buffer, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Measures if potential bat roosting habitat or potentially active bat roosts are identified during the habitat assessment', commitment: 'MM-BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 3, action: 'Measures if potential bat roosting', milestones: 'Final Inspection', resourceCategory: 'Biological Resources', phase: 'Construction', requirementText: 'Requirement: Measures if potential bat roosting habitat or potentially active bat roosts are identified during the habitat assessment, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Pre-construction survey if avoidance or bat maternity roosting season and winter torpor is infeasible', commitment: 'MM-BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Survey', status: 'not-started', comments: 1, action: 'Pre-construction survey if avoidance or', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'Prior to ground-disturbing activities, a qualified biologist shall complete pre-construction survey if avoidance or bat maternity roosting season and winter torpor is infeasible within the project area and submit findings to the City.' },
  { name: 'Blight', commitment: 'SCA AES-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Aesthetics', phase: 'Post-Construction', requirementText: 'Requirement: Blight, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Best management practices for graffiti', commitment: 'SCA AES-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Avoidance & BMPs', status: 'completed', comments: 1, action: 'Best management practices for graffiti', milestones: '', resourceCategory: 'Aesthetics', phase: 'Construction', requirementText: 'The contractor shall implement best management practices for graffiti as a best management practice throughout construction and maintain it until the activity is complete.' },
  { name: 'Graffiti removal', commitment: 'SCA AES-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Graffiti removal', milestones: 'Demolition', resourceCategory: 'Aesthetics', phase: 'Construction', requirementText: 'Requirement: Graffiti removal, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Landscape Installation', commitment: 'SCA AES-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Aesthetics', phase: 'Construction', requirementText: 'Requirement: Landscape Installation, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Landscape Maintenance', commitment: 'SCA AES-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Aesthetics', phase: 'Post-Construction', requirementText: 'Requirement: Landscape Maintenance, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Landscape Plan', commitment: 'SCA AES-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Landscape Plan', milestones: '', resourceCategory: 'Aesthetics', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Landscape Plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Exterior lighting fixtures', commitment: 'SCA AES-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 1, action: '', milestones: 'Building Permit', resourceCategory: 'Aesthetics', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate exterior lighting fixtures consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Dust control measures - complaints', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - complaints and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - erosion', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'completed', comments: 3, action: 'Dust control measures - erosion', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - erosion and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - paving', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - paving and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - simultaneous activities', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: '', milestones: 'Final Inspection', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - simultaneous activities and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - street sweeping', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'completed', comments: 1, action: 'Dust control measures - street', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - street sweeping and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - truck cover', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'in-progress', comments: 0, action: 'Dust control measures - truck', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - truck cover and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - unpaved road access', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - unpaved road access and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - vegetative ground cover', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: 'Dust control measures - vegetative', milestones: 'Demolition', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - vegetative ground cover and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - vehicle speeds', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'in-progress', comments: 0, action: 'Dust control measures - vehicle', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - vehicle speeds and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - watering', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - watering and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - wind', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: 'Dust control measures - wind', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - wind and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Basic control measures for criteria air pollutants - construction equipment', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'completed', comments: 3, action: 'Basic control measures for criteria', milestones: 'Building Permit', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct basic control measures for criteria air pollutants - construction equipment and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Basic control measures for criteria air pollutants - idling time', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct basic control measures for criteria air pollutants - idling time and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Basic control measures for criteria air pollutants - portable equipment', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: 'Basic control measures for criteria', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct basic control measures for criteria air pollutants - portable equipment and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Basic control measures for criteria air pollutants - VOC coating', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'completed', comments: 1, action: 'Basic control measures for criteria', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct basic control measures for criteria air pollutants - VOC coating and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Construction emissions minimization plan', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'in-progress', comments: 0, action: 'Construction emissions minimization plan', milestones: 'Final Inspection', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct construction emissions minimization plan and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Enhanced controls - construction', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 3, action: 'Enhanced controls - construction', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct enhanced controls - construction and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Enhanced controls - operation', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Post-Construction', requirementText: 'Requirement: Enhanced controls - operation, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction emissions minimization plan', commitment: 'SCA AIR-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Construction emissions minimization plan', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'The project applicant shall prepare and implement a Construction emissions minimization plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Diesel particulate matter reduction measures', commitment: 'SCA AIR-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: 'Diesel particulate matter reduction measures', milestones: 'Demolition', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct diesel particulate matter reduction measures and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'On-site stationary sources of air pollution', commitment: 'SCA AIR-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate on-site stationary sources of air pollution consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Diesel truck emission reduction measures', commitment: 'SCA AIR-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'completed', comments: 3, action: 'Diesel truck emission reduction measures', milestones: '', resourceCategory: 'Air Quality', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate diesel truck emission reduction measures consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Truck fleet emission standards', commitment: 'SCA AIR-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: 'Truck fleet emission standards', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'Requirement: Truck fleet emission standards, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Truck loading docks', commitment: 'SCA AIR-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 0, action: '', milestones: 'Building Permit', resourceCategory: 'Air Quality', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate truck loading docks consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Asbestos in structures', commitment: 'SCA AIR-6', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 1, action: 'Asbestos in structures', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'Requirement: Asbestos in structures, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Bird collision reduction plan - antennas', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Bird collision reduction plan -', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - antennas prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - bird-friendly attractants', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - bird-friendly attractants prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - bird-friendly glazing treatments', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: 'Final Inspection', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - bird-friendly glazing treatments prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - building operation and management manual', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Bird collision reduction plan -', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - building operation and management manual prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - light pollution', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - light pollution prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - lighting', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - lighting prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - mirrors', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'completed', comments: 3, action: 'Bird collision reduction plan -', milestones: 'Demolition', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - mirrors prior to the affected project phase, subject to City review and approval.' },
  { name: 'Pre-removal survey', commitment: 'SCA BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Survey', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'Prior to ground-disturbing activities, a qualified biologist shall complete pre-removal survey within the project area and submit findings to the City.' },
  { name: 'Tree removal during breeding season', commitment: 'SCA BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'Requirement: Tree removal during breeding season, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Tree permit', commitment: 'SCA BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'completed', comments: 1, action: 'Tree permit', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The applicant shall obtain tree permit from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Tree protection', commitment: 'SCA BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Tree protection', milestones: 'Building Permit', resourceCategory: 'Biological Resources', phase: 'Construction', requirementText: 'Requirement: Tree protection, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Tree replacement', commitment: 'SCA BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Construction', requirementText: 'Requirement: Tree replacement, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Data recovery of archaeological resources', commitment: 'SCA CUL-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: 'Data recovery of archaeological resources', milestones: '', resourceCategory: 'Cultural Resources', phase: 'Construction', requirementText: 'The project applicant shall prepare and implement a Data recovery of archaeological resources prior to the affected project phase, subject to City review and approval.' },
  { name: 'Discovery of cultural resources', commitment: 'SCA CUL-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Discovery of cultural resources', milestones: '', resourceCategory: 'Cultural Resources', phase: 'Construction', requirementText: 'Requirement: Discovery of cultural resources, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Human remains', commitment: 'SCA CUL-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: 'Final Inspection', resourceCategory: 'Cultural Resources', phase: 'Construction', requirementText: 'Requirement: Human remains, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction related permits', commitment: 'SCA GEO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'not-started', comments: 0, action: 'Construction related permits', milestones: '', resourceCategory: 'Geology, Soils, and Paleontological Resources', phase: 'Pre-Construction', requirementText: 'The applicant shall obtain construction related permits from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Geotechnical report', commitment: 'SCA GEO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Reporting', status: 'completed', comments: 3, action: 'Geotechnical report', milestones: '', resourceCategory: 'Geology, Soils, and Paleontological Resources', phase: 'Pre-Construction', requirementText: 'The applicant shall prepare geotechnical report and submit it to the lead agency within the timeframe specified in the FEIR mitigation measure.' },
  { name: 'Annual report', commitment: 'SCA GHG-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Greenhouse Gas Emissions', phase: 'Post-Construction', requirementText: 'The project applicant shall prepare and implement a Annual report prior to the affected project phase, subject to City review and approval.' },
  { name: 'Corrective procedure', commitment: 'SCA GHG-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 0, action: 'Corrective procedure', milestones: 'Demolition', resourceCategory: 'Greenhouse Gas Emissions', phase: 'Post-Construction', requirementText: 'The project applicant shall prepare and implement a Corrective procedure prior to the affected project phase, subject to City review and approval.' },
  { name: 'Greenhouse gas reduction plan', commitment: 'SCA GHG-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'completed', comments: 1, action: 'Greenhouse gas reduction plan', milestones: '', resourceCategory: 'Greenhouse Gas Emissions', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Greenhouse gas reduction plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Greenhouse gas reduction plan implementation after construction', commitment: 'SCA GHG-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Greenhouse gas reduction plan implementation', milestones: '', resourceCategory: 'Greenhouse Gas Emissions', phase: 'Post-Construction', requirementText: 'The project applicant shall prepare and implement a Greenhouse gas reduction plan implementation after construction prior to the affected project phase, subject to City review and approval.' },
  { name: 'Greenhouse gas reduction plan implementation during construction', commitment: 'SCA GHG-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 3, action: 'Greenhouse gas reduction plan implementation', milestones: '', resourceCategory: 'Greenhouse Gas Emissions', phase: 'Construction', requirementText: 'The project applicant shall prepare and implement a Greenhouse gas reduction plan implementation during construction prior to the affected project phase, subject to City review and approval.' },
  { name: 'BMPs - chemical products', commitment: 'SCA HAZ-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: '', milestones: 'Building Permit', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', requirementText: 'A qualified specialist shall conduct bMPs - chemical products and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'BMPs - construction equipment', commitment: 'SCA HAZ-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'in-progress', comments: 0, action: 'BMPs - construction equipment', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', requirementText: 'A qualified specialist shall conduct bMPs - construction equipment and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'BMPs - contamination', commitment: 'SCA HAZ-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: 'BMPs - contamination', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', requirementText: 'A qualified specialist shall conduct bMPs - contamination and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'BMPs - lead', commitment: 'SCA HAZ-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', requirementText: 'A qualified specialist shall conduct bMPs - lead and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'BMPs - groundwater', commitment: 'SCA HAZ-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'completed', comments: 3, action: 'BMPs - groundwater', milestones: 'Final Inspection', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', requirementText: 'A qualified specialist shall conduct bMPs - groundwater and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'BMPs - soils', commitment: 'SCA HAZ-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: 'BMPs - soils', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', requirementText: 'A qualified specialist shall conduct bMPs - soils and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Environmental site assessment', commitment: 'SCA HAZ-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Reporting', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Pre-Construction', requirementText: 'The applicant shall prepare environmental site assessment and submit it to the lead agency within the timeframe specified in the FEIR mitigation measure.' },
  { name: 'Hazardous building materials assessment', commitment: 'SCA HAZ-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 1, action: 'Hazardous building materials assessment', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Pre-Construction', requirementText: 'Requirement: Hazardous building materials assessment, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Health and safety plan', commitment: 'SCA HAZ-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Health and safety plan', milestones: 'Demolition', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Health and safety plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Hazardous materials business plan', commitment: 'SCA HAZ-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Post-Construction', requirementText: 'The project applicant shall prepare and implement a Hazardous materials business plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'State construction general permit', commitment: 'SCA HYD-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Pre-Construction', requirementText: 'The applicant shall obtain state construction general permit from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Maintenance agreement', commitment: 'SCA HYD-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'in-progress', comments: 0, action: 'Maintenance agreement', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Post-Construction', requirementText: 'The applicant shall obtain maintenance agreement from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Post-construction stormwater management plan', commitment: 'SCA HYD-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: 'Building Permit', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Post-Construction', requirementText: 'The project applicant shall prepare and implement a Post-construction stormwater management plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Vegetation management after construction', commitment: 'SCA HYD-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Post-Construction', requirementText: 'Requirement: Vegetation management after construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Vegetation management during construction', commitment: 'SCA HYD-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 3, action: 'Vegetation management during construction', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Construction', requirementText: 'Requirement: Vegetation management during construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Vegetation management pre-construction', commitment: 'SCA HYD-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Pre-Construction', requirementText: 'Requirement: Vegetation management pre-construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction BMPs', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: '', milestones: 'Final Inspection', resourceCategory: 'Hydrology and Water Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct construction BMPs and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Creek landscaping', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'completed', comments: 1, action: 'Creek landscaping', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Creek landscaping prior to the affected project phase, subject to City review and approval.' },
  { name: 'Creek protection plan', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Creek protection plan', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Creek protection plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Creek protection plan implementation - after construction', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Post-Construction', requirementText: 'The project applicant shall prepare and implement a Creek protection plan implementation - after construction prior to the affected project phase, subject to City review and approval.' },
  { name: 'Creek protection plan implementation - during construction', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: 'Creek protection plan implementation -', milestones: 'Demolition', resourceCategory: 'Hydrology and Water Quality', phase: 'Construction', requirementText: 'The project applicant shall prepare and implement a Creek protection plan implementation - during construction prior to the affected project phase, subject to City review and approval.' },
  { name: 'Post construction BMPs', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Avoidance & BMPs', status: 'in-progress', comments: 0, action: 'Post construction BMPs', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Post-Construction', requirementText: 'The contractor shall implement post construction BMPs as a best management practice throughout construction and maintain it until the activity is complete.' },
  { name: 'BCDC approval', commitment: 'SCA HYD-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Pre-Construction', requirementText: 'The applicant shall obtain bCDC approval from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Construction activity outside of the days and hours restrictions', commitment: 'SCA NOI-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: 'Construction activity outside of the', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Construction activity outside of the days and hours restrictions, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction hours - Saturday', commitment: 'SCA NOI-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 3, action: 'Construction hours - Saturday', milestones: 'Building Permit', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Construction hours - Saturday, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction hours - Sunday and holidays', commitment: 'SCA NOI-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Construction hours - Sunday and holidays, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction hours - weekdays', commitment: 'SCA NOI-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: 'Construction hours - weekdays', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Construction hours - weekdays, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise reduction measures - construction', commitment: 'SCA NOI-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 1, action: 'Noise reduction measures - construction', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Noise reduction measures - construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise reduction measures - equipment and trucks', commitment: 'SCA NOI-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Noise reduction measures - equipment', milestones: 'Final Inspection', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Noise reduction measures - equipment and trucks, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise reduction measures - impact tools', commitment: 'SCA NOI-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 3, action: 'Noise reduction measures - impact', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Noise reduction measures - impact tools, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise reduction measures - power poles', commitment: 'SCA NOI-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Noise reduction measures - power poles, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise reduction measures - stationary sources', commitment: 'SCA NOI-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Noise reduction measures - stationary', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Noise reduction measures - stationary sources, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction noise management plan', commitment: 'SCA NOI-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: 'Construction noise management plan', milestones: 'Demolition', resourceCategory: 'Noise', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Construction noise management plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Public notification', commitment: 'SCA NOI-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Noise', phase: 'Pre-Construction', requirementText: 'Requirement: Public notification, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Site-specific noise attenuation measures', commitment: 'SCA NOI-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'completed', comments: 3, action: 'Site-specific noise attenuation measures', milestones: '', resourceCategory: 'Noise', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Site-specific noise attenuation measures prior to the affected project phase, subject to City review and approval.' },
  { name: 'Noise complaints - receiving, responding to, tracking', commitment: 'SCA NOI-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: 'Noise complaints - receiving', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Noise complaints - receiving, responding to, tracking, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise complaints - signage', commitment: 'SCA NOI-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: 'Building Permit', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Noise complaints - signage, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Operational noise', commitment: 'SCA NOI-6', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 1, action: 'Operational noise', milestones: '', resourceCategory: 'Noise', phase: 'Post-Construction', requirementText: 'Requirement: Operational noise, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Vibration analysis', commitment: 'SCA NOI-7', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Analysis', status: 'in-progress', comments: 0, action: 'Vibration analysis', milestones: '', resourceCategory: 'Noise', phase: 'Pre-Construction', requirementText: 'The applicant shall complete vibration analysis to evaluate potential impacts and identify feasible mitigation prior to approval.' },
  { name: 'Jobs/Housing Impact Fee.', commitment: 'SCA POP-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Financial', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Public Services and Recreation', phase: 'Pre-Construction', requirementText: 'The applicant shall provide jobs/Housing Impact Fee. to ensure funding of the required mitigation prior to issuance of the relevant permit.' },
  { name: 'Capital improvements impact fee', commitment: 'SCA PUB-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Financial', status: 'not-started', comments: 1, action: '', milestones: 'Final Inspection', resourceCategory: 'Public Services and Recreation', phase: 'Pre-Construction', requirementText: 'The applicant shall provide capital improvements impact fee to ensure funding of the required mitigation prior to issuance of the relevant permit.' },
  { name: 'Bicycle and pedestrian access plan', commitment: 'SCA REC-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Bicycle and pedestrian access plan', milestones: '', resourceCategory: 'Public Services and Recreation', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bicycle and pedestrian access plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Implementation of bicycle and pedestrian enhancements', commitment: 'SCA REC-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Public Services and Recreation', phase: 'Construction', requirementText: 'Requirement: Implementation of bicycle and pedestrian enhancements, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Obstruction permit', commitment: 'SCA TRANS-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'The applicant shall obtain obstruction permit from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Repair of damage to public right-of-ways', commitment: 'SCA TRANS-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 3, action: 'Repair of damage to public', milestones: 'Demolition', resourceCategory: 'Transportation and Traffic', phase: 'Construction', requirementText: 'Requirement: Repair of damage to public right-of-ways, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Traffic control plan', commitment: 'SCA TRANS-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Traffic control plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Traffic control plan implementation', commitment: 'SCA TRANS-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Construction', requirementText: 'The project applicant shall prepare and implement a Traffic control plan implementation prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bicycle parking', commitment: 'SCA TRANS-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'completed', comments: 1, action: 'Bicycle parking', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate bicycle parking consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'TDM - operational strategies', commitment: 'SCA TRANS-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'TDM - operational strategies', milestones: 'Building Permit', resourceCategory: 'Transportation and Traffic', phase: 'Post-Construction', requirementText: 'The project applicant shall prepare and implement a TDM - operational strategies prior to the affected project phase, subject to City review and approval.' },
  { name: 'TDM implementation - physical improvements', commitment: 'SCA TRANS-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Construction', requirementText: 'The project applicant shall prepare and implement a TDM implementation - physical improvements prior to the affected project phase, subject to City review and approval.' },
  { name: 'Transportation and parking demand management plan', commitment: 'SCA TRANS-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: 'Transportation and parking demand management', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Transportation and parking demand management plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'ADA-accessible parking spaces', commitment: 'SCA TRANS-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'ADA-accessible parking spaces', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a ADA-accessible parking spaces prior to the affected project phase, subject to City review and approval.' },
  { name: 'PEV-capable parking spaces', commitment: 'SCA TRANS-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: 'Final Inspection', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a PEV-capable parking spaces prior to the affected project phase, subject to City review and approval.' },
  { name: 'PEV-ready parking spaces', commitment: 'SCA TRANS-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 0, action: 'PEV-ready parking spaces', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a PEV-ready parking spaces prior to the affected project phase, subject to City review and approval.' },
  { name: 'Transportation impact fee', commitment: 'SCA TRANS-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Financial', status: 'completed', comments: 3, action: 'Transportation impact fee', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'The applicant shall provide transportation impact fee to ensure funding of the required mitigation prior to issuance of the relevant permit.' },
  { name: 'Construction and Demolition Waste Reduction and Recycling Plan', commitment: 'SCA UTIL-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Construction and Demolition Waste Reduction and Recycling Plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Recycling collection space', commitment: 'SCA UTIL-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 0, action: 'Recycling collection space', milestones: 'Demolition', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate recycling collection space consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'California Green Building Standards', commitment: 'SCA UTIL-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'completed', comments: 1, action: 'California Green Building Standards', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate california Green Building Standards consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'California Green Building Standards after construction', commitment: 'SCA UTIL-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'California Green Building Standards after', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Post-Construction', requirementText: 'Requirement: California Green Building Standards after construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'California Green Building Standards during construction', commitment: 'SCA UTIL-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 3, action: 'California Green Building Standards during', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Construction', requirementText: 'Requirement: California Green Building Standards during construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Sanitary Sewer Impact Analysis', commitment: 'SCA UTIL-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Analysis', status: 'not-started', comments: 1, action: '', milestones: 'Building Permit', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', requirementText: 'The applicant shall complete sanitary Sewer Impact Analysis to evaluate potential impacts and identify feasible mitigation prior to approval.' },
  { name: 'Sanitary Sewer Impact Fee', commitment: 'SCA UTIL-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Financial', status: 'in-progress', comments: 0, action: 'Sanitary Sewer Impact Fee', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', requirementText: 'The applicant shall provide sanitary Sewer Impact Fee to ensure funding of the required mitigation prior to issuance of the relevant permit.' },
  { name: 'Storm drain system design', commitment: 'SCA UTIL-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 1, action: 'Storm drain system design', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate storm drain system design consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Underground utilities', commitment: 'SCA UTIL-6', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Construction', requirementText: 'Project design shall incorporate underground utilities consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Water Efficient Landscape Ordinance', commitment: 'SCA UTIL-7', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'completed', comments: 3, action: 'Water Efficient Landscape Ordinance', milestones: 'Final Inspection', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate water Efficient Landscape Ordinance consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Water Efficient Landscape Ordinance installation', commitment: 'SCA UTIL-7', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: 'Water Efficient Landscape Ordinance installation', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Construction', requirementText: 'Requirement: Water Efficient Landscape Ordinance installation, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
];

// ── src/pages/prototypes/requirement-tracker.astro ──
---
// Action Tracker (Prologis) — the "Compliance Tracking" workspace.
//
// Prologis wants the tracking surface as a real data grid, not the Kanban the
// app defaults to. So the View toggle offers Kanban / Timeline / Grid, and this
// prototype boots into GRID. The grid is AG Grid (community) mounted as a client
// island; Kanban renders statically from the same fixture; Timeline is a stub.
//
// Rendered inside AppShell > PageLayout, themed with the Beacon spoke tokens.
import AppShell from '../../layouts/AppShell.astro';
import PageLayout from '../../layouts/PageLayout.astro';
import EsaIcon from '@esa/ecology/esa-icon.astro';
import { actions, STATUS_META, type ActionStatus } from '../../data/tracker-fixture';

// Serialized payload for the AG Grid island.
const gridPayload = {
  rows: actions,
  statusMeta: STATUS_META as Record<ActionStatus, { label: string; hex: string }>,
};

// Prologis-specific sidenav — the aliased / trimmed tree their tenant sees.
// Project drops Organize Actions / Action Lists / Document Reviews / Spatial
// Library Layers; Tracking drops All Components; Reporting drops Progress
// Report; Data Catalog drops Actions (their "Requirements" will route to the
// Actions catalog under the upcoming Simplified fork).
const prologisNav = [
  { id: 'setup-wizard', title: 'Setup Wizard', icon: 'compass', link: true },
  {
    id: 'project',
    title: 'Project',
    icon: 'layout-dashboard',
    expanded: false,
    dividerAfter: true,
    items: [{ id: 'dashboard', label: 'Dashboard' }],
  },
  {
    id: 'tracking',
    title: 'Tracking',
    icon: 'radar',
    expanded: true,
    active: true,
    items: [{ id: 'project-tracking', label: 'Project Tracking', active: true }],
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    icon: 'map-pinned',
    expanded: false,
    items: [{ id: 'monitoring-portal', label: 'Monitoring Portal' }],
  },
  {
    id: 'reporting',
    title: 'Reporting',
    icon: 'clipboard-list',
    expanded: false,
    dividerAfter: true,
    items: [{ id: 'report-center', label: 'Report Center' }],
  },
  {
    id: 'data-catalog',
    title: 'Data Catalog',
    icon: 'database',
    expanded: false,
    items: [
      { id: 'dc-source-documents', label: 'Source Documents' },
      { id: 'dc-commitments', label: 'Commitments' },
      { id: 'dc-requirements', label: 'Requirements' },
      { id: 'dc-all-data', label: 'All Data' },
    ],
  },
];
---

<AppShell title="Requirement Tracking — 3600 Alameda" tenantName="Prologis" projectName="3600 Alameda" navSections={prologisNav}>
  <PageLayout
    title="3600 Alameda"
    icon="radar"
    breadcrumbs={[
      { label: '3600 Alameda', href: '#project' },
      { label: 'Tracking', href: '#tracking' },
      { label: 'Project Tracking' },
    ]}
  >
    <span slot="title-badge" class="ctx-badge">Project Tracking</span>

    <!-- ═══ Toolbar: View toggle · Search ═══ -->
    <div class="tt-toolbar">
      <div class="tt-views" role="tablist" aria-label="View as">
        <button type="button" class="tt-view is-active" data-view="grid" role="tab" aria-selected="true">
          <EsaIcon name="grid" size="sm" paths="<rect width='18' height='18' x='3' y='3' rx='2'/><path d='M3 9h18'/><path d='M3 15h18'/><path d='M9 3v18'/><path d='M15 3v18'/>" />
          Grid
        </button>
        <button type="button" class="tt-view" data-view="kanban" role="tab" aria-selected="false">
          <EsaIcon name="columns-3" size="sm" paths="<path d='M3 3h18v18H3z'/><path d='M9 3v18'/><path d='M15 3v18'/>" />
          Kanban
        </button>
        <button type="button" class="tt-view" data-view="timeline" role="tab" aria-selected="false">
          <EsaIcon name="calendar" size="sm" paths="<path d='M8 2v4'/><path d='M16 2v4'/><rect width='18' height='18' x='3' y='4' rx='2'/><path d='M3 10h18'/>" />
          Timeline
        </button>
      </div>

    </div>

    <!-- ═══ GRID view (default) — Beacon grid chrome + AG Grid island ═══ -->
    <div class="tt-view-pane" id="view-grid">
      <!-- Grid header: global search · clear filters -->
      <div class="grid-header">
        <div class="grid-header__filter">
          <EsaIcon name="search" size="sm" />
          <input type="search" id="tt-search" class="grid-header__input" placeholder="Search requirements…" aria-label="Search requirements" />
          <button type="button" id="tt-search-clear" class="grid-header__clear" aria-label="Clear search" hidden>
            <EsaIcon name="x" size="xs" />
          </button>
        </div>
        <button type="button" id="tt-clear-filters" class="grid-clear-filters">Clear Filters</button>
      </div>

      <div id="tracker-grid" class="tracker-grid"></div>

      <!-- Grid footer: download · record count -->
      <div class="table-footer">
        <button type="button" id="tt-download" class="download-button">
          <EsaIcon name="download" size="sm" paths="<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/><polyline points='7 10 12 15 17 10'/><line x1='12' x2='12' y1='15' y2='3'/>" />
          Download as CSV
        </button>
        <div class="row-count-data">
          Total Records: <span id="tt-total">0</span>
          <span id="tt-filtered" class="filtered-rows-count" hidden></span>
        </div>
      </div>
    </div>

    <!-- ═══ KANBAN view (stub) ═══ -->
    <div class="tt-view-pane" id="view-kanban" hidden>
      <div class="tt-empty">
        <EsaIcon name="columns-3" size="lg" paths="<path d='M3 3h18v18H3z'/><path d='M9 3v18'/><path d='M15 3v18'/>" />
        <h3>Kanban view</h3>
        <p>Status board of actions by tracking state. Not part of this prototype pass — Grid is the wired view.</p>
      </div>
    </div>

    <!-- ═══ TIMELINE view (stub) ═══ -->
    <div class="tt-view-pane" id="view-timeline" hidden>
      <div class="tt-empty">
        <EsaIcon name="calendar" size="lg" paths="<path d='M8 2v4'/><path d='M16 2v4'/><rect width='18' height='18' x='3' y='4' rx='2'/><path d='M3 10h18'/>" />
        <h3>Timeline view</h3>
        <p>Gantt-style schedule of actions by due date and phase. Not part of this prototype pass — Grid is the wired view.</p>
      </div>
    </div>
  </PageLayout>

  <script type="application/json" id="grid-data" set:html={JSON.stringify(gridPayload)}></script>
</AppShell>

<script>
  import { createGrid, ModuleRegistry, AllCommunityModule, themeQuartz, iconOverrides } from 'ag-grid-community';
  import type { GridApi, GridOptions, ColDef, ICellRendererParams } from 'ag-grid-community';

  ModuleRegistry.registerModules([AllCommunityModule]);

  type ActionStatus = 'not-started' | 'in-progress' | 'completed' | 'not-applicable';
  interface ActionRow {
    name: string;
    commitment: string;
    sourceDoc: string;
    requirementText: string;
    type: string;
    status: ActionStatus;
    comments: number;
    action: string;
    milestones: string;
    resourceCategory: string;
    phase: string;
  }
  interface Payload {
    rows: ActionRow[];
    statusMeta: Record<ActionStatus, { label: string; hex: string }>;
  }

  const payload: Payload = JSON.parse(document.getElementById('grid-data')!.textContent || '{}');
  const { rows, statusMeta } = payload;

  // Beacon "gold-star" Quartz theme — ported verbatim from esassoc/Beacon
  // (Beacon.Web/.../ag-grid/beacon-grid-theme.ts). Literal hex, each annotated
  // with the Beacon design token it mirrors.
  const lucideFunnelSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>';
  const beaconIconOverrides = iconOverrides({
    type: 'image',
    mask: true,
    icons: { filter: { svg: lucideFunnelSvg }, filterActive: { svg: lucideFunnelSvg } },
  });

  const beaconTheme = themeQuartz.withPart(beaconIconOverrides).withParams({
    fontFamily: 'DM Sans, sans-serif',
    headerFontFamily: 'DM Sans, sans-serif',
    accentColor: '#f9a134', // ESA orange / --accent
    foregroundColor: '#3d3d3d', // gray-900
    headerBackgroundColor: '#005862', // teal-900 / --primary
    headerTextColor: '#ffffff',
    headerFontSize: '13px',
    headerFontWeight: 600,
    headerHeight: 48,
    rowHeight: 44,
    dataFontSize: '13px',
    oddRowBackgroundColor: '#fafafa', // gray-50
    rowHoverColor: '#effefb', // teal-50
    borderColor: '#dcdcdc', // gray-200
    wrapperBorder: '1px solid #dcdcdc', // gray-200
    wrapperBorderRadius: '4px 4px 0 0',
    borderRadius: '4px',
    headerColumnResizeHandleColor: 'rgba(255, 255, 255, 0.2)',
    checkboxCheckedBackgroundColor: '#f9a134', // ESA orange / --accent
  });

  // ── Renderers ───────────────────────────────────────────────────────────────
  function statusRenderer(p: ICellRendererParams<ActionRow>) {
    const meta = statusMeta[p.value as ActionStatus];
    if (!meta) return '';
    const el = document.createElement('span');
    el.className = 'tg-chip';
    el.style.setProperty('--_chip', meta.hex);
    el.innerHTML = `<span class="tg-chip__dot"></span>${meta.label}`;
    return el;
  }

  function linkRenderer(p: ICellRendererParams<ActionRow>) {
    const el = document.createElement('a');
    el.className = 'tg-name';
    el.href = '#';
    el.textContent = String(p.value ?? '');
    el.addEventListener('click', (e) => e.preventDefault());
    return el;
  }

  // Column set mirrors the live Progress Report view. Explicit (wider) widths so
  // the grid overflows the viewport and scrolls left/right, the way Beacon's
  // data-catalog grids do — no fit-to-width.
  const columnDefs: ColDef<ActionRow>[] = [
    { field: 'sourceDoc', headerName: 'Source Document', width: 260, cellRenderer: linkRenderer },
    { field: 'commitment', headerName: 'Commitment ID', width: 170, cellRenderer: linkRenderer },
    { field: 'name', headerName: 'Requirement Name', width: 340, cellRenderer: linkRenderer },
    { field: 'requirementText', headerName: 'Requirement Text', width: 460 },
    { field: 'type', headerName: 'Requirement Type', width: 200 },
    { field: 'status', headerName: 'Status', width: 180, cellRenderer: statusRenderer, cellClass: 'tg-status-cell', filterValueGetter: (p) => statusMeta[p.data!.status]?.label },
    { field: 'comments', headerName: 'Comment', width: 150, type: 'numericColumn', valueFormatter: (p) => (p.value ? String(p.value) : '') },
    { field: 'action', headerName: 'Action', width: 260 },
    { field: 'milestones', headerName: 'Milestone(s)', width: 200 },
    { field: 'resourceCategory', headerName: 'Resource Category', width: 240 },
  ];

  // ── Footer record counts (Total / Filtered) ───────────────────────────────
  const totalEl = document.getElementById('tt-total')!;
  const filteredEl = document.getElementById('tt-filtered')!;
  function updateCounts() {
    const total = rows.length;
    const displayed = api.getDisplayedRowCount();
    totalEl.textContent = String(total);
    if (displayed < total) {
      filteredEl.hidden = false;
      filteredEl.textContent = `Filtered Records: ${displayed}`;
    } else {
      filteredEl.hidden = true;
    }
  }

  const gridOptions: GridOptions<ActionRow> = {
    theme: beaconTheme,
    rowData: rows,
    columnDefs,
    defaultColDef: {
      sortable: true,
      resizable: true,
      filter: true,
      floatingFilter: false,
      suppressHeaderMenuButton: true,
      tooltipValueGetter: (p) => p.value,
    },
    tooltipShowDelay: 0,
    tooltipInteraction: true,
    tooltipShowMode: 'whenTruncated',
    onFirstDataRendered: updateCounts,
    onFilterChanged: updateCounts,
  };

  const gridDiv = document.getElementById('tracker-grid')!;
  const api: GridApi<ActionRow> = createGrid(gridDiv, gridOptions);

  // ── Grid header: search → quick filter (+ clear-x) ─────────────────────────
  const search = document.getElementById('tt-search') as HTMLInputElement;
  const searchClear = document.getElementById('tt-search-clear')!;
  search?.addEventListener('input', () => {
    api.setGridOption('quickFilterText', search.value);
    searchClear.hidden = !search.value;
  });
  searchClear.addEventListener('click', () => {
    search.value = '';
    api.setGridOption('quickFilterText', '');
    searchClear.hidden = true;
    search.focus();
  });

  // ── Clear Filters → reset all column filters (Beacon parity) ───────────────
  document.getElementById('tt-clear-filters')!.addEventListener('click', () => api.setFilterModel(null));

  // ── Download as CSV ────────────────────────────────────────────────────────
  document.getElementById('tt-download')!.addEventListener('click', () =>
    api.exportDataAsCsv({ fileName: '3600-alameda-requirements.csv' }),
  );

  // ── View toggle (Kanban / Timeline / Grid) ────────────────────────────────
  const panes: Record<string, HTMLElement> = {
    grid: document.getElementById('view-grid')!,
    kanban: document.getElementById('view-kanban')!,
    timeline: document.getElementById('view-timeline')!,
  };
  document.querySelectorAll<HTMLButtonElement>('.tt-view').forEach((btn) => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view!;
      document.querySelectorAll('.tt-view').forEach((b) => {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-selected', String(b === btn));
      });
      Object.entries(panes).forEach(([key, el]) => (el.hidden = key !== view));
    });
  });
</script>

<style>
  /* ═══ Title badge — neutral, sits directly right of the H1 ═══ */
  .ctx-badge {
    display: inline-flex;
    align-items: center;
    padding: var(--spacing-100) var(--spacing-250);
    font-size: var(--type-size-100);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-secondary);
    background: var(--bcn-gray-100);
    border: 1px solid var(--bcn-gray-200);
    border-radius: var(--radius-100, 4px);
  }

  /* ═══ Toolbar ═══ */
  .tt-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-400);
    flex-wrap: wrap;
    margin-bottom: var(--spacing-400);
  }
  .tt-views {
    display: inline-flex;
    padding: var(--spacing-050);
    background: var(--bcn-gray-100);
    border-radius: var(--radius-300);
  }
  .tt-view {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-150);
    padding: var(--spacing-150) var(--spacing-400);
    font-size: var(--type-size-100);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-secondary);
    border-radius: var(--radius-200);
    transition: background 150ms ease, color 150ms ease;
  }
  .tt-view :global(.esa-icon) {
    color: currentColor;
  }
  .tt-view.is-active {
    background: var(--color-surface);
    color: var(--color-primary);
    box-shadow: var(--shadow-100, 0 1px 2px rgba(0, 0, 0, 0.08));
  }

  /* ═══ View panes ═══ */
  .tt-view-pane[hidden] {
    display: none;
  }

  /* ═══ Beacon grid header: search · clear filters ═══ */
  .grid-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-400);
    margin-bottom: var(--spacing-300);
  }
  .grid-header__filter {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-200);
    padding: 0 var(--spacing-300);
    height: 36px;
    min-width: 280px;
    background: var(--color-surface);
    border: 1px solid var(--color-border-strong, #c7c7c7);
    border-radius: var(--radius-200);
    transition: border-color 150ms ease, box-shadow 150ms ease;
  }
  .grid-header__filter:focus-within {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 18%, transparent);
  }
  .grid-header__filter :global(.esa-icon) {
    color: var(--color-text-tertiary);
    flex-shrink: 0;
  }
  .grid-header__input {
    flex: 1;
    min-width: 0;
    border: none;
    background: transparent;
    font-family: inherit;
    font-size: 0.875rem;
    color: var(--color-text-primary);
  }
  .grid-header__input:focus {
    outline: none;
  }
  .grid-header__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-tertiary);
    border-radius: var(--radius-100, 4px);
  }
  .grid-header__clear:hover {
    color: var(--color-text-primary);
  }
  .grid-clear-filters {
    height: 36px;
    padding: 0 var(--spacing-400);
    font-size: var(--type-size-100);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-secondary);
    background: var(--bcn-gray-100);
    border: 1px solid var(--bcn-gray-200);
    border-radius: var(--radius-200);
    white-space: nowrap;
    transition: background 150ms ease, color 150ms ease;
  }
  .grid-clear-filters:hover {
    background: var(--bcn-gray-200);
    color: var(--color-text-primary);
  }

  /* ═══ AG Grid host ═══ */
  .tracker-grid {
    width: 100%;
    height: calc(100vh - 420px);
    min-height: 400px;
  }

  /* ═══ Beacon grid footer: download · record count ═══ */
  .table-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-400);
    padding: var(--spacing-200) var(--spacing-400);
    background: var(--bcn-gray-50);
    border: 1px solid var(--bcn-gray-200);
    border-top: 0;
    border-radius: 0 0 var(--radius-100, 4px) var(--radius-100, 4px);
  }
  .download-button {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-200);
    font-size: var(--type-size-100);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-link, #005862);
    border-radius: var(--radius-100, 4px);
    transition: color 150ms ease;
  }
  .download-button:hover {
    color: var(--color-primary-hover, #00474f);
  }
  .download-button :global(.esa-icon) {
    color: currentColor;
  }
  .row-count-data {
    display: flex;
    align-items: center;
    gap: var(--spacing-400);
    font-size: var(--type-size-100);
    color: var(--color-text-secondary);
    font-variant-numeric: tabular-nums;
  }
  .filtered-rows-count {
    color: var(--color-text-tertiary);
  }
  .filtered-rows-count[hidden] {
    display: none;
  }
  .grid-header__clear[hidden] {
    display: none;
  }
  /* Chip + name renderers (global — AG Grid injects cells outside scope) */
  /* Status cell: vertically center the compact chip in the row. */
  :global(.ag-cell.tg-status-cell) {
    display: flex;
    align-items: center;
  }
  :global(.tg-chip) {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-150);
    padding: 1px var(--spacing-200);
    border-radius: var(--radius-100, 4px);
    font-size: 0.75rem;
    line-height: 1.5;
    font-weight: var(--font-weight-semibold);
    white-space: nowrap;
    background: color-mix(in srgb, var(--_chip) 16%, transparent);
    color: color-mix(in srgb, var(--_chip) 70%, #1a1a1a);
  }
  :global(.tg-chip__dot) {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--_chip);
    flex-shrink: 0;
  }
  :global(.tg-name) {
    color: var(--color-text-link, #005862);
    font-weight: var(--font-weight-regular, 400);
    text-decoration: underline;
  }
  :global(.tg-name:hover) {
    color: var(--color-primary-hover, #00474f);
  }


  /* ═══ Empty state (timeline stub) ═══ */
  .tt-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--spacing-200);
    padding: var(--spacing-900) var(--spacing-400);
    color: var(--color-text-secondary);
  }
  .tt-empty :global(.esa-icon) {
    color: var(--color-text-tertiary);
  }
  .tt-empty h3 {
    margin: var(--spacing-200) 0 0;
    font-size: var(--type-size-300);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  .tt-empty p {
    margin: 0;
    max-width: 46ch;
    line-height: 1.55;
  }

</style>

<!-- Green radar icon in the H1 (PageLayout renders the icon outside this page's
     scope, so override globally; only this page loads this rule). -->
<style is:global>
  .page-layout__title h1 .esa-icon {
    color: var(--color-secondary) !important;
  }
</style>
```
