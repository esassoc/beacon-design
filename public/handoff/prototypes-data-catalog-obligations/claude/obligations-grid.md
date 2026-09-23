# Obligations grid

One row per obligation across all 402, using the shared Beacon grid kit (src/lib/beacon-grid.ts) already carried by the component index, the work-area board and the other catalog lists. Columns are the obligation title, its class, and the three category axes it is filed under (subject major/minor, activities, species), plus the commitments that state the duty. Row click and the title link both open the obligation detail page.

## Key decisions
- NO STATUS COLUMN, for two independent reasons. The team dropped the obligation status model on 2026-09-03, so there is no compliance verdict to render at all; and the sibling Actions catalog already omits status on principle, because status is tracking data that belongs to the Tracking area rather than to a configuration surface.
- Class renders as a NEUTRAL chip, never a colored one. Class (Adhere / Monitor / Notify / Roster) is a categorical facet that drives the evidence shape — it is not a status, and giving it status color would say otherwise. Coloring it would also mean inventing a four-value palette with no design token behind it.
- The catalog is FLAT on purpose. An obligation belongs to every category that fits on three independent axes, so its categories are a set rather than a path. The hierarchy is real but it belongs to the registry, which is a different surface; a tree here would imply this record sits at one place in it.
- Multi-valued axis cells join their values with commas and ellipsize with a tooltip rather than wrapping, so row height stays uniform and the grid stays scannable at 402 rows.
- Chrome, counts, CSV export and theme all come from the shared kit (BcnGridChrome, BcnGridFooter, mountBeaconGrid) rather than being rebuilt — the older Actions list predates that extraction and still carries the markup by hand; do not copy that page.

## Gotchas
- The grid prefix ("og") must match between BcnGridChrome, BcnGridFooter and mountBeaconGrid. Two grids on one page sharing a prefix would drive each other's filters, which is why the prop is required rather than defaulted.
- The grid host has a FIXED height (40rem) so the page below it does not jump as filters narrow the set. Do not make it auto-height.
- Row order is alphabetical by title, set once in the data module — not a grid sort model. AG Grid preserves rowData order until the user sorts, which is what lets the grid open on the registry's own ordering rule without fighting the first column-header click.

## Done when
- The grid lists all 402 obligations, alphabetical by title, with the total shown in the footer and the card heading.
- Typing in Search narrows across every column; Clear Filters restores all 402 and empties the search box.
- Filtering the Activities column to a single activity yields every obligation that work carries — the contractor-checklist read.
- Clicking a row, or its title link, opens that obligation's detail page. The title link must also work with a middle click or a new-tab modifier.
- Download as CSV exports the currently filtered rows, and the footer count matches what is on screen.

## Markup
```html
<section class="bcn-og" data-og="" aria-label="Obligations">
  <div class="esa-card esa-card--padding-compact">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title typography-title-sm-strong">Obligations</h3>
        </div>
      </div>
      <div class="esa-card__actions typography-label-md">
        <span class="bcn-gchrome__search"
          ><esa-text-field
            placeholder="Search obligations…"
            size="sm"
            data-og-search="true"
          ></esa-text-field
          ><span data-og-search-clear="true" class="astro-kspn7qo2" hidden=""
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
        ><span data-og-clear-filters="true" class="astro-kspn7qo2"
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
      <div class="bcn-og__host" data-og-host="">
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
              style="
                --ag-internal-measurement-border: var(--ag-row-border, solid 15538px);
              "
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
                aria-rowcount="403"
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
                      style="width: 1458px"
                    >
                      <div
                        class="ag-header-row ag-header-row-column"
                        role="row"
                        tabindex="0"
                        aria-rowindex="1"
                        style="top: 0px; height: 48px; width: 1458px"
                      >
                        <div
                          class="ag-header-cell ag-column-first ag-header-parent-hidden ag-header-cell-sortable ag-header-cell-wrap-text ag-header-cell-auto-height ag-focus-managed"
                          role="columnheader"
                          col-id="title"
                          aria-colindex="1"
                          tabindex="-1"
                          aria-sort="none"
                          style="
                            top: 0px;
                            height: 48px;
                            width: 300px;
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
                                  >Obligation</span
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
                          class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-header-cell-wrap-text ag-header-cell-auto-height ag-focus-managed"
                          role="columnheader"
                          col-id="cls"
                          aria-colindex="2"
                          tabindex="-1"
                          aria-sort="none"
                          style="
                            top: 0px;
                            height: 48px;
                            width: 128px;
                            touch-action: none;
                            left: 300px;
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
                                  >Class</span
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
                          class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-header-cell-wrap-text ag-header-cell-auto-height ag-focus-managed"
                          role="columnheader"
                          col-id="subjectMajor"
                          aria-colindex="3"
                          tabindex="-1"
                          aria-sort="none"
                          style="
                            top: 0px;
                            height: 48px;
                            width: 190px;
                            touch-action: none;
                            left: 428px;
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
                                  >Major category</span
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
                          class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-header-cell-wrap-text ag-header-cell-auto-height ag-focus-managed"
                          role="columnheader"
                          col-id="subjectMinor"
                          aria-colindex="4"
                          tabindex="-1"
                          aria-sort="none"
                          style="
                            top: 0px;
                            height: 48px;
                            width: 200px;
                            touch-action: none;
                            left: 618px;
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
                                  >Minor category</span
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
                          class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-header-cell-wrap-text ag-header-cell-auto-height ag-focus-managed"
                          role="columnheader"
                          col-id="activities"
                          aria-colindex="5"
                          tabindex="-1"
                          aria-sort="none"
                          style="
                            top: 0px;
                            height: 48px;
                            width: 230px;
                            touch-action: none;
                            left: 818px;
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
                                  >Activities</span
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
                          class="ag-header-cell ag-header-parent-hidden ag-header-cell-sortable ag-header-cell-wrap-text ag-header-cell-auto-height ag-focus-managed"
                          role="columnheader"
                          col-id="species"
                          aria-colindex="6"
                          tabindex="-1"
                          aria-sort="none"
                          style="
                            top: 0px;
                            height: 48px;
                            width: 200px;
                            touch-action: none;
                            left: 1048px;
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
                                  >Species</span
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
                      style="width: 1458px"
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
                  class="ag-body ag-layout-normal"
                  data-ref="eBody"
                  role="presentation"
                >
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
                      style="height: 17688px; width: 0px; max-width: 0px; min-width: 0px"
                    ></div>
                    <!--AG-ROW-CONTAINER-->
                    <div
                      class="ag-viewport ag-center-cols-viewport"
                      data-ref="eViewport"
                      role="rowgroup"
                      style="height: 17688px"
                    >
                      <div
                        class="ag-center-cols-container"
                        data-ref="eContainer"
                        role="presentation"
                        style="width: 1458px; height: 17688px"
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
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/3-069a"
                              >Active nest and colony monitoring until fledging</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="59"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Monitor</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="60"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Birds
                          </div>
                          <div
                            role="gridcell"
                            comp-id="61"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Nesting birds
                          </div>
                          <div
                            role="gridcell"
                            comp-id="62"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Compliance monitoring and inspections, Ground disturbance and
                            grading
                          </div>
                          <div
                            role="gridcell"
                            comp-id="63"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            California least tern, Heron and egret rookeries
                          </div>
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
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/2-023"
                              >Active season and in-channel work window</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="66"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Adhere</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="67"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Amphibians and reptiles, Water
                          </div>
                          <div
                            role="gridcell"
                            comp-id="68"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Giant garter snake, In-water work
                          </div>
                          <div
                            role="gridcell"
                            comp-id="69"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Ground disturbance and grading, In-water and in-channel work
                          </div>
                          <div
                            role="gridcell"
                            comp-id="70"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            Giant garter snake
                          </div>
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
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/2-027"
                              >Active tricolored blackbird colony buffer in nesting
                              season</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="73"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Adhere</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="74"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Birds
                          </div>
                          <div
                            role="gridcell"
                            comp-id="75"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Nesting birds
                          </div>
                          <div
                            role="gridcell"
                            comp-id="76"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Ground disturbance and grading, Site clearing and vegetation
                            removal
                          </div>
                          <div
                            role="gridcell"
                            comp-id="77"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            Tricolored blackbird
                          </div>
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
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/2-065"
                              >Active work and staging area fencing or flagging</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="80"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Adhere</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="81"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Habitat protection
                          </div>
                          <div
                            role="gridcell"
                            comp-id="82"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Exclusion fencing and ESAs
                          </div>
                          <div
                            role="gridcell"
                            comp-id="83"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Exclusion fencing and flagging installation, Staging and
                            laydown
                          </div>
                          <div
                            role="gridcell"
                            comp-id="84"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            California red-legged frog, California tiger salamander, Giant
                            garter snake, Mason's lilaeopsis, San Joaquin kit fox
                          </div>
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
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/2-022"
                              >Agency work window for in-water work</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="87"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Adhere</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="88"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Fish, Water
                          </div>
                          <div
                            role="gridcell"
                            comp-id="89"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Fish rescue and salvage, In-water work
                          </div>
                          <div
                            role="gridcell"
                            comp-id="90"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Dewatering and fish isolation, In-water and in-channel work,
                            Pile driving
                          </div>
                          <div
                            role="gridcell"
                            comp-id="91"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            California red-legged frog, California tiger salamander,
                            Chinook salmon, Delta smelt, Longfin smelt, White sturgeon
                          </div>
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
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/4-069"
                              >Agency-approved handlers for Covered Species</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="94"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Roster</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="95"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Habitat protection, People and qualifications
                          </div>
                          <div
                            role="gridcell"
                            comp-id="96"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Designated biologists and monitors, Wildlife encounters and
                            handling
                          </div>
                          <div
                            role="gridcell"
                            comp-id="97"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Training and personnel qualification, Wildlife capture,
                            handling and relocation
                          </div>
                          <div
                            role="gridcell"
                            comp-id="98"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            California red-legged frog, California tiger salamander, Giant
                            garter snake, Pond turtle, Western spadefoot
                          </div>
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
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/4-072"
                              >Agency-approved or permitted protocol surveyors</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="101"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Roster</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="102"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            People and qualifications
                          </div>
                          <div
                            role="gridcell"
                            comp-id="103"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Designated biologists and monitors
                          </div>
                          <div
                            role="gridcell"
                            comp-id="104"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Surveys and habitat assessments, Training and personnel
                            qualification
                          </div>
                          <div
                            role="gridcell"
                            comp-id="105"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            California black rail, San Joaquin kit fox, Vernal pool fairy
                            shrimp, Vernal pool tadpole shrimp
                          </div>
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
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/1-115"
                              >Agricultural pole placement BMPs</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="108"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Adhere</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="109"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Mitigation and restoration, Site conduct
                          </div>
                          <div
                            role="gridcell"
                            comp-id="110"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Agricultural land, Facility design and siting
                          </div>
                          <div
                            role="gridcell"
                            comp-id="111"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Transmission and power line work
                          </div>
                          <div
                            role="gridcell"
                            comp-id="112"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-og__quiet"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            —
                          </div>
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
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/4-022"
                              >Air quality exceedance report to the air district</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="115"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Notify</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="116"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Agency reporting and approvals, Air quality
                          </div>
                          <div
                            role="gridcell"
                            comp-id="117"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Fugitive dust, Non-compliance reporting
                          </div>
                          <div
                            role="gridcell"
                            comp-id="118"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Compliance monitoring and inspections, Notifications and
                            reporting
                          </div>
                          <div
                            role="gridcell"
                            comp-id="119"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-og__quiet"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            —
                          </div>
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
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/2-060"
                              >Amphibian exclusion fence near habitat</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="122"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Adhere</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="123"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Amphibians and reptiles, Habitat protection
                          </div>
                          <div
                            role="gridcell"
                            comp-id="124"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Amphibians, Exclusion fencing and ESAs
                          </div>
                          <div
                            role="gridcell"
                            comp-id="125"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Exclusion fencing and flagging installation
                          </div>
                          <div
                            role="gridcell"
                            comp-id="126"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            California red-legged frog, California tiger salamander,
                            Western spadefoot
                          </div>
                        </div>
                        <div
                          role="row"
                          comp-id="127"
                          tabindex="0"
                          row-index="10"
                          class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="12"
                          row-id="10"
                          style="transform: translateY(440px); height: 44px"
                        >
                          <div
                            role="gridcell"
                            comp-id="128"
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/1-089"
                              >Animal-proof trash containment and removal</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="129"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Adhere</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="130"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Site conduct
                          </div>
                          <div
                            role="gridcell"
                            comp-id="131"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Trash and food waste
                          </div>
                          <div
                            role="gridcell"
                            comp-id="132"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Waste and trash handling
                          </div>
                          <div
                            role="gridcell"
                            comp-id="133"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-og__quiet"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            —
                          </div>
                        </div>
                        <div
                          role="row"
                          comp-id="134"
                          tabindex="0"
                          row-index="11"
                          class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="13"
                          row-id="11"
                          style="transform: translateY(484px); height: 44px"
                        >
                          <div
                            role="gridcell"
                            comp-id="135"
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/3-011"
                              >Annual bird strike diverter inspection</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="136"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Monitor</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="137"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Birds, Site conduct
                          </div>
                          <div
                            role="gridcell"
                            comp-id="138"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Facility design and siting, Nesting birds, Sandhill crane
                          </div>
                          <div
                            role="gridcell"
                            comp-id="139"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Compliance monitoring and inspections, Facility operations and
                            maintenance, Transmission and power line work
                          </div>
                          <div
                            role="gridcell"
                            comp-id="140"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            Sandhill crane, Swainson's hawk, Tricolored blackbird
                          </div>
                        </div>
                        <div
                          role="row"
                          comp-id="141"
                          tabindex="0"
                          row-index="12"
                          class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="14"
                          row-id="12"
                          style="transform: translateY(528px); height: 44px"
                        >
                          <div
                            role="gridcell"
                            comp-id="142"
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/3-054"
                              >Annual invasive plant survey and cover monitoring</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="143"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Monitor</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="144"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Water
                          </div>
                          <div
                            role="gridcell"
                            comp-id="145"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Invasive species
                          </div>
                          <div
                            role="gridcell"
                            comp-id="146"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Compliance monitoring and inspections, Restoration and
                            planting, Surveys and habitat assessments
                          </div>
                          <div
                            role="gridcell"
                            comp-id="147"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            California red-legged frog, California tiger salamander, Giant
                            garter snake, Mason's lilaeopsis
                          </div>
                        </div>
                        <div
                          role="row"
                          comp-id="148"
                          tabindex="0"
                          row-index="13"
                          class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="15"
                          row-id="13"
                          style="transform: translateY(572px); height: 44px"
                        >
                          <div
                            role="gridcell"
                            comp-id="149"
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/3-026"
                              >Annual mercury and methylmercury monitoring</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="150"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Monitor</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="151"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Fish, Water
                          </div>
                          <div
                            role="gridcell"
                            comp-id="152"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Fish rescue and salvage, Water quality
                          </div>
                          <div
                            role="gridcell"
                            comp-id="153"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Compliance monitoring and inspections, In-water and in-channel
                            work, Water diversions and intake operations
                          </div>
                          <div
                            role="gridcell"
                            comp-id="154"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            Chinook salmon, Delta smelt, Longfin smelt, White sturgeon
                          </div>
                        </div>
                        <div
                          role="row"
                          comp-id="155"
                          tabindex="0"
                          row-index="14"
                          class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="16"
                          row-id="14"
                          style="transform: translateY(616px); height: 44px"
                        >
                          <div
                            role="gridcell"
                            comp-id="156"
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/3-085"
                              >Annual repeat of species surveys at active sites</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="157"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Monitor</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="158"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Site conduct
                          </div>
                          <div
                            role="gridcell"
                            comp-id="159"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Compliance inspections and records
                          </div>
                          <div
                            role="gridcell"
                            comp-id="160"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Ground disturbance and grading, Surveys and habitat
                            assessments
                          </div>
                          <div
                            role="gridcell"
                            comp-id="161"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            Burrowing owl, California tiger salamander, Crotch bumble bee,
                            Giant garter snake, Mason's lilaeopsis, Tricolored blackbird
                          </div>
                        </div>
                        <div
                          role="row"
                          comp-id="162"
                          tabindex="0"
                          row-index="15"
                          class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="17"
                          row-id="15"
                          style="transform: translateY(660px); height: 44px"
                        >
                          <div
                            role="gridcell"
                            comp-id="163"
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/2-094"
                              >Approval and perpetual management of mitigation projects</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="164"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Adhere</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="165"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Agency reporting and approvals, Mitigation and restoration
                          </div>
                          <div
                            role="gridcell"
                            comp-id="166"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Agency approvals, Mitigation lands
                          </div>
                          <div
                            role="gridcell"
                            comp-id="167"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Notifications and reporting, Restoration and planting
                          </div>
                          <div
                            role="gridcell"
                            comp-id="168"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-og__quiet"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            —
                          </div>
                        </div>
                        <div
                          role="row"
                          comp-id="169"
                          tabindex="0"
                          row-index="16"
                          class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="18"
                          row-id="16"
                          style="transform: translateY(704px); height: 44px"
                        >
                          <div
                            role="gridcell"
                            comp-id="170"
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/4-063"
                              >Approved biologist contact for kit fox incidents</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="171"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Roster</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="172"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Agency reporting and approvals, Mammals, People and
                            qualifications
                          </div>
                          <div
                            role="gridcell"
                            comp-id="173"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Designated biologists and monitors, Kit fox and badger dens,
                            Take and injury reporting
                          </div>
                          <div
                            role="gridcell"
                            comp-id="174"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Notifications and reporting, Training and personnel
                            qualification, Wildlife capture, handling and relocation
                          </div>
                          <div
                            role="gridcell"
                            comp-id="175"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            San Joaquin kit fox
                          </div>
                        </div>
                        <div
                          role="row"
                          comp-id="176"
                          tabindex="0"
                          row-index="17"
                          class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="19"
                          row-id="17"
                          style="transform: translateY(748px); height: 44px"
                        >
                          <div
                            role="gridcell"
                            comp-id="177"
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/3-001"
                              >Archaeological monitoring of ground disturbance in
                              sensitive areas</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="178"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Monitor</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="179"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Cultural resources
                          </div>
                          <div
                            role="gridcell"
                            comp-id="180"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Cultural resources
                          </div>
                          <div
                            role="gridcell"
                            comp-id="181"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Compliance monitoring and inspections, Ground disturbance and
                            grading
                          </div>
                          <div
                            role="gridcell"
                            comp-id="182"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-og__quiet"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            —
                          </div>
                        </div>
                        <div
                          role="row"
                          comp-id="183"
                          tabindex="0"
                          row-index="18"
                          class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="20"
                          row-id="18"
                          style="transform: translateY(792px); height: 44px"
                        >
                          <div
                            role="gridcell"
                            comp-id="184"
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/3-002"
                              >Archaeological review of field investigation locations</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="185"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Monitor</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="186"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Cultural resources
                          </div>
                          <div
                            role="gridcell"
                            comp-id="187"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Cultural resources
                          </div>
                          <div
                            role="gridcell"
                            comp-id="188"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Geotechnical investigations and drilling, Surveys and habitat
                            assessments
                          </div>
                          <div
                            role="gridcell"
                            comp-id="189"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-og__quiet"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            —
                          </div>
                        </div>
                        <div
                          role="row"
                          comp-id="190"
                          tabindex="0"
                          row-index="19"
                          class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="21"
                          row-id="19"
                          style="transform: translateY(836px); height: 44px"
                        >
                          <div
                            role="gridcell"
                            comp-id="191"
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/1-075"
                              >Bank restoration after barge erosion</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="192"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Adhere</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="193"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Mitigation and restoration, Water
                          </div>
                          <div
                            role="gridcell"
                            comp-id="194"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Barge and vessel operations, Erosion and sediment control,
                            Restoration
                          </div>
                          <div
                            role="gridcell"
                            comp-id="195"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Barge and vessel operations, Restoration and planting
                          </div>
                          <div
                            role="gridcell"
                            comp-id="196"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-og__quiet"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            —
                          </div>
                        </div>
                        <div
                          role="row"
                          comp-id="197"
                          tabindex="0"
                          row-index="20"
                          class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="22"
                          row-id="20"
                          style="transform: translateY(880px); height: 44px"
                        >
                          <div
                            role="gridcell"
                            comp-id="198"
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/1-074"
                              >Barge anchoring, grounding, wake and cargo containment</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="199"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Adhere</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="200"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Water
                          </div>
                          <div
                            role="gridcell"
                            comp-id="201"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Barge and vessel operations, Water quality
                          </div>
                          <div
                            role="gridcell"
                            comp-id="202"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Barge and vessel operations
                          </div>
                          <div
                            role="gridcell"
                            comp-id="203"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            Chinook salmon, Delta smelt, Longfin smelt, White sturgeon
                          </div>
                        </div>
                        <div
                          role="row"
                          comp-id="204"
                          tabindex="0"
                          row-index="21"
                          class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="23"
                          row-id="21"
                          style="transform: translateY(924px); height: 44px"
                        >
                          <div
                            role="gridcell"
                            comp-id="205"
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/4-016"
                              >Barge incident and plan deviation report</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="206"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Notify</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="207"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Agency reporting and approvals, Hazards, Water
                          </div>
                          <div
                            role="gridcell"
                            comp-id="208"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Barge and vessel operations, Non-compliance reporting, Spill
                            prevention and response
                          </div>
                          <div
                            role="gridcell"
                            comp-id="209"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Barge and vessel operations, Notifications and reporting
                          </div>
                          <div
                            role="gridcell"
                            comp-id="210"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            Chinook salmon, Delta smelt, Longfin smelt, White sturgeon
                          </div>
                        </div>
                        <div
                          role="row"
                          comp-id="211"
                          tabindex="0"
                          row-index="22"
                          class="ag-row-even ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="24"
                          row-id="22"
                          style="transform: translateY(968px); height: 44px"
                        >
                          <div
                            role="gridcell"
                            comp-id="212"
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/1-076"
                              >Barge Operations Plan aboard every vessel</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="213"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Adhere</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="214"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Water
                          </div>
                          <div
                            role="gridcell"
                            comp-id="215"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Barge and vessel operations
                          </div>
                          <div
                            role="gridcell"
                            comp-id="216"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Barge and vessel operations
                          </div>
                          <div
                            role="gridcell"
                            comp-id="217"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height bcn-og__quiet"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            —
                          </div>
                        </div>
                        <div
                          role="row"
                          comp-id="218"
                          tabindex="0"
                          row-index="23"
                          class="ag-row-odd ag-row-no-focus ag-row ag-row-level-0 ag-row-position-absolute"
                          aria-rowindex="25"
                          row-id="23"
                          style="transform: translateY(1012px); height: 44px"
                        >
                          <div
                            role="gridcell"
                            comp-id="219"
                            col-id="title"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-column-first"
                            tabindex="-1"
                            aria-colindex="1"
                            style="left: 0px; width: 300px"
                          >
                            <a
                              class="bcn-og__name"
                              href="/beacon-design/prototypes/data-catalog-obligation/1-100"
                              >Barge Operations Plan approval before operations</a
                            >
                          </div>
                          <div
                            role="gridcell"
                            comp-id="220"
                            col-id="cls"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="2"
                            style="left: 300px; width: 128px"
                          >
                            <span class="bcn-og__cls">Adhere</span>
                          </div>
                          <div
                            role="gridcell"
                            comp-id="221"
                            col-id="subjectMajor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="3"
                            style="left: 428px; width: 190px"
                          >
                            Agency reporting and approvals, Water
                          </div>
                          <div
                            role="gridcell"
                            comp-id="222"
                            col-id="subjectMinor"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="4"
                            style="left: 618px; width: 200px"
                          >
                            Agency approvals, Barge and vessel operations
                          </div>
                          <div
                            role="gridcell"
                            comp-id="223"
                            col-id="activities"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="5"
                            style="left: 818px; width: 230px"
                          >
                            Barge and vessel operations
                          </div>
                          <div
                            role="gridcell"
                            comp-id="224"
                            col-id="species"
                            class="ag-cell-value ag-cell ag-cell-not-inline-editing ag-cell-normal-height"
                            tabindex="-1"
                            aria-colindex="6"
                            style="left: 1048px; width: 200px"
                          >
                            Chinook salmon, Delta smelt, Longfin smelt, White sturgeon
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
                      style="height: 17688px; width: 0px; max-width: 0px; min-width: 0px"
                    ></div>
                    <!--AG-ROW-CONTAINER-->
                    <div
                      class="ag-full-width-container"
                      data-ref="eContainer"
                      role="rowgroup"
                      style="height: 17688px"
                    ></div>
                  </div>
                  <!--AG-FAKE-VERTICAL-SCROLL-->
                  <div
                    class="ag-body-vertical-scroll ag-scrollbar-invisible"
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
                        style="
                          height: 17688px;
                          width: 16px;
                          max-width: 16px;
                          min-width: 16px;
                        "
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
                      style="width: 1458px"
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
                      style="width: 1458px"
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
                      style="width: 1458px"
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
                  class="ag-body-horizontal-scroll ag-scrollbar-invisible"
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
                      style="
                        width: 1458px;
                        height: 16px;
                        max-height: 16px;
                        min-height: 16px;
                      "
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
              <div
                class="ag-tab-guard ag-tab-guard-top"
                role="presentation"
                tabindex="0"
              ></div>
              <span class="ag-paging-page-size"
                ><div
                  class="ag-picker-field ag-labeled ag-label-align-left ag-select"
                  role="presentation"
                >
                  <div
                    data-ref="eLabel"
                    class="ag-label"
                    aria-hidden="false"
                    id="ag-31-label"
                  >
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
                  <span
                    class="ag-paging-number"
                    data-ref="lbTotal"
                    id="ag-29-of-page-number"
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
    </div>
    <div class="esa-card__footer typography-meta">
      <div class="repel bcn-gfoot" data-gap="md">
        <span data-og-download="true" class="astro-lujwycoi"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
            ><button class="esa-button__native typography-microcopy-xs" type="button">
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line></svg></span
              ><span class="esa-button__label">Download as CSV</span>
            </button></span
          ></span
        >
        <div class="cluster bcn-gfoot__count" data-gap="md">
          <span
            >Total Records:
            <span data-og-total="true" class="astro-lujwycoi">402</span></span
          ><span class="bcn-gfoot__filtered" data-og-filtered="true" hidden=""></span>
        </div>
      </div>
    </div>
  </div>
  <script type="application/json" data-og-data="">
    [
      {
        "id": "3-069a",
        "title": "Active nest and colony monitoring until fledging",
        "cls": "Monitor",
        "subjectMajor": "Birds",
        "subjectMinor": "Nesting birds",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "California least tern, Heron and egret rookeries",
        "commitments": "BIO-34, BIO-35, BIO-36a, CM 6.3.2.2",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-069a"
      },
      {
        "id": "2-023",
        "title": "Active season and in-channel work window",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Water",
        "subjectMinor": "Giant garter snake, In-water work",
        "activities": "Ground disturbance and grading, In-water and in-channel work",
        "species": "Giant garter snake",
        "commitments": "BIO-30, CM 6.3.2.7, COA 11.57, COA 11.58, COA 11.59, COA 11.60, COA 11.61, COA 11.65",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-023"
      },
      {
        "id": "2-027",
        "title": "Active tricolored blackbird colony buffer in nesting season",
        "cls": "Adhere",
        "subjectMajor": "Birds",
        "subjectMinor": "Nesting birds",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal",
        "species": "Tricolored blackbird",
        "commitments": "BIO-44, COA 11.82, COA 11.85, COA 11.89, COA 11.91",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-027"
      },
      {
        "id": "2-065",
        "title": "Active work and staging area fencing or flagging",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Exclusion fencing and ESAs",
        "activities": "Exclusion fencing and flagging installation, Staging and laydown",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, Mason's lilaeopsis, San Joaquin kit fox",
        "commitments": "AMM-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-065"
      },
      {
        "id": "2-022",
        "title": "Agency work window for in-water work",
        "cls": "Adhere",
        "subjectMajor": "Fish, Water",
        "subjectMinor": "Fish rescue and salvage, In-water work",
        "activities": "Dewatering and fish isolation, In-water and in-channel work, Pile driving",
        "species": "California red-legged frog, California tiger salamander, Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AMM-14, AMM-26, AQUA-1a, COA 11.31, COA 11.32, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-022"
      },
      {
        "id": "4-069",
        "title": "Agency-approved handlers for Covered Species",
        "cls": "Roster",
        "subjectMajor": "Habitat protection, People and qualifications",
        "subjectMinor": "Designated biologists and monitors, Wildlife encounters and handling",
        "activities": "Training and personnel qualification, Wildlife capture, handling and relocation",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, Pond turtle, Western spadefoot",
        "commitments": "AMM-14, BIO-22a, BIO-23, BIO-24a, BIO-25, BIO-30, CM 6.3.2.10, CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6, CM 6.3.2.7, COA 11.1, COA 11.3, COA 11.39, COA 11.50, COA 11.51, COA 11.67, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-069"
      },
      {
        "id": "4-072",
        "title": "Agency-approved or permitted protocol surveyors",
        "cls": "Roster",
        "subjectMajor": "People and qualifications",
        "subjectMinor": "Designated biologists and monitors",
        "activities": "Surveys and habitat assessments, Training and personnel qualification",
        "species": "California black rail, San Joaquin kit fox, Vernal pool fairy shrimp, Vernal pool tadpole shrimp",
        "commitments": "BIO-14, BIO-32, BIO-53, CM 6.3.2.1, CM 6.3.2.9",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-072"
      },
      {
        "id": "1-115",
        "title": "Agricultural pole placement BMPs",
        "cls": "Adhere",
        "subjectMajor": "Mitigation and restoration, Site conduct",
        "subjectMinor": "Agricultural land, Facility design and siting",
        "activities": "Transmission and power line work",
        "species": "",
        "commitments": "BIO-2c",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-115"
      },
      {
        "id": "4-022",
        "title": "Air quality exceedance report to the air district",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Air quality",
        "subjectMinor": "Fugitive dust, Non-compliance reporting",
        "activities": "Compliance monitoring and inspections, Notifications and reporting",
        "species": "",
        "commitments": "AQ-5",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-022"
      },
      {
        "id": "2-060",
        "title": "Amphibian exclusion fence near habitat",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Habitat protection",
        "subjectMinor": "Amphibians, Exclusion fencing and ESAs",
        "activities": "Exclusion fencing and flagging installation",
        "species": "California red-legged frog, California tiger salamander, Western spadefoot",
        "commitments": "BIO-22a, BIO-23, BIO-24a, CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-060"
      },
      {
        "id": "1-089",
        "title": "Animal-proof trash containment and removal",
        "cls": "Adhere",
        "subjectMajor": "Site conduct",
        "subjectMinor": "Trash and food waste",
        "activities": "Waste and trash handling",
        "species": "",
        "commitments": "AMM-14, COA 11.119, COA 11.20, COA 9.6, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-089"
      },
      {
        "id": "3-011",
        "title": "Annual bird strike diverter inspection",
        "cls": "Monitor",
        "subjectMajor": "Birds, Site conduct",
        "subjectMinor": "Facility design and siting, Nesting birds, Sandhill crane",
        "activities": "Compliance monitoring and inspections, Facility operations and maintenance, Transmission and power line work",
        "species": "Sandhill crane, Swainson's hawk, Tricolored blackbird",
        "commitments": "AMM-22, BIO-2c, COA 11.17",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-011"
      },
      {
        "id": "3-054",
        "title": "Annual invasive plant survey and cover monitoring",
        "cls": "Monitor",
        "subjectMajor": "Water",
        "subjectMinor": "Invasive species",
        "activities": "Compliance monitoring and inspections, Restoration and planting, Surveys and habitat assessments",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, Mason's lilaeopsis",
        "commitments": "AMM-14, COA 11.19, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-054"
      },
      {
        "id": "3-026",
        "title": "Annual mercury and methylmercury monitoring",
        "cls": "Monitor",
        "subjectMajor": "Fish, Water",
        "subjectMinor": "Fish rescue and salvage, Water quality",
        "activities": "Compliance monitoring and inspections, In-water and in-channel work, Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AMM-23, COA 10.20, COA 11.30, WQ-6",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-026"
      },
      {
        "id": "3-085",
        "title": "Annual repeat of species surveys at active sites",
        "cls": "Monitor",
        "subjectMajor": "Site conduct",
        "subjectMinor": "Compliance inspections and records",
        "activities": "Ground disturbance and grading, Surveys and habitat assessments",
        "species": "Burrowing owl, California tiger salamander, Crotch bumble bee, Giant garter snake, Mason's lilaeopsis, Tricolored blackbird",
        "commitments": "COA 11.105, COA 11.111, COA 11.42, COA 11.46, COA 11.56, COA 11.84, COA 11.97",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-085"
      },
      {
        "id": "2-094",
        "title": "Approval and perpetual management of mitigation projects",
        "cls": "Adhere",
        "subjectMajor": "Agency reporting and approvals, Mitigation and restoration",
        "subjectMinor": "Agency approvals, Mitigation lands",
        "activities": "Notifications and reporting, Restoration and planting",
        "species": "",
        "commitments": "COA 12, COA 12.13, COA 12.8, COA 12.9, COA 13.3",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-094"
      },
      {
        "id": "4-063",
        "title": "Approved biologist contact for kit fox incidents",
        "cls": "Roster",
        "subjectMajor": "Agency reporting and approvals, Mammals, People and qualifications",
        "subjectMinor": "Designated biologists and monitors, Kit fox and badger dens, Take and injury reporting",
        "activities": "Notifications and reporting, Training and personnel qualification, Wildlife capture, handling and relocation",
        "species": "San Joaquin kit fox",
        "commitments": "BIO-46",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-063"
      },
      {
        "id": "3-001",
        "title": "Archaeological monitoring of ground disturbance in sensitive areas",
        "cls": "Monitor",
        "subjectMajor": "Cultural resources",
        "subjectMinor": "Cultural resources",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "",
        "commitments": "CUL-3a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-001"
      },
      {
        "id": "3-002",
        "title": "Archaeological review of field investigation locations",
        "cls": "Monitor",
        "subjectMajor": "Cultural resources",
        "subjectMinor": "Cultural resources",
        "activities": "Geotechnical investigations and drilling, Surveys and habitat assessments",
        "species": "",
        "commitments": "CUL-3c",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-002"
      },
      {
        "id": "1-075",
        "title": "Bank restoration after barge erosion",
        "cls": "Adhere",
        "subjectMajor": "Mitigation and restoration, Water",
        "subjectMinor": "Barge and vessel operations, Erosion and sediment control, Restoration",
        "activities": "Barge and vessel operations, Restoration and planting",
        "species": "",
        "commitments": "COA 11.36",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-075"
      },
      {
        "id": "1-074",
        "title": "Barge anchoring, grounding, wake and cargo containment",
        "cls": "Adhere",
        "subjectMajor": "Water",
        "subjectMinor": "Barge and vessel operations, Water quality",
        "activities": "Barge and vessel operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AMM-27, AQUA-1b, COA 11.36",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-074"
      },
      {
        "id": "4-016",
        "title": "Barge incident and plan deviation report",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Hazards, Water",
        "subjectMinor": "Barge and vessel operations, Non-compliance reporting, Spill prevention and response",
        "activities": "Barge and vessel operations, Notifications and reporting",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AMM-27, AQUA-1b, COA 11.36",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-016"
      },
      {
        "id": "1-076",
        "title": "Barge Operations Plan aboard every vessel",
        "cls": "Adhere",
        "subjectMajor": "Water",
        "subjectMinor": "Barge and vessel operations",
        "activities": "Barge and vessel operations",
        "species": "",
        "commitments": "AQUA-1b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-076"
      },
      {
        "id": "1-100",
        "title": "Barge Operations Plan approval before operations",
        "cls": "Adhere",
        "subjectMajor": "Agency reporting and approvals, Water",
        "subjectMinor": "Agency approvals, Barge and vessel operations",
        "activities": "Barge and vessel operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.36",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-100"
      },
      {
        "id": "4-051",
        "title": "Barge pilot plan affidavit",
        "cls": "Roster",
        "subjectMajor": "People and qualifications, Water",
        "subjectMinor": "Barge and vessel operations, Qualified specialists",
        "activities": "Barge and vessel operations, Training and personnel qualification",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AMM-27, AQUA-1b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-051"
      },
      {
        "id": "4-010",
        "title": "Barred tiger salamander or hybrid notice to CDFW",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Amphibians and reptiles",
        "subjectMinor": "Amphibians, Species sightings and CNDDB reporting",
        "activities": "Notifications and reporting, Surveys and habitat assessments, Wildlife capture, handling and relocation",
        "species": "California tiger salamander",
        "commitments": "11.53, COA 11.53",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-010"
      },
      {
        "id": "2-010",
        "title": "Bat eviction season and conditions",
        "cls": "Adhere",
        "subjectMajor": "Mammals",
        "subjectMinor": "Bats",
        "activities": "Burrow and roost exclusion, Demolition, Site clearing and vegetation removal",
        "species": "",
        "commitments": "BIO-45b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-010"
      },
      {
        "id": "1-036",
        "title": "Batch plant dust suppression at delivery and loading",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Fugitive dust",
        "activities": "Concrete work and batch plants, Hauling and deliveries",
        "species": "",
        "commitments": "AMM-12, EC-12",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-036"
      },
      {
        "id": "1-045",
        "title": "Batch plant storage pile and aggregate dust suppression",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Fugitive dust",
        "activities": "Concrete work and batch plants",
        "species": "",
        "commitments": "EC-12",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-045"
      },
      {
        "id": "3-031",
        "title": "Bathymetric survey after high bypass flows",
        "cls": "Monitor",
        "subjectMajor": "Water operations",
        "subjectMinor": "Operations monitoring and studies",
        "activities": "Surveys and habitat assessments, Water diversions and intake operations",
        "species": "",
        "commitments": "COA 10.23",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-031"
      },
      {
        "id": "1-058",
        "title": "Bethany Complex fire suppression and hand clearing",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Hazards",
        "subjectMinor": "Fire prevention, Vegetation removal",
        "activities": "Heavy equipment operation, Site clearing and vegetation removal",
        "species": "",
        "commitments": "COA 9.18",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-058"
      },
      {
        "id": "1-011",
        "title": "Biological criteria for entrainment, survival and growth",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Biological performance criteria",
        "activities": "Compliance monitoring and inspections, Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.126, COA 11.127, COA 11.128",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-011"
      },
      {
        "id": "3-062",
        "title": "Biological monitoring of work near special-status habitat",
        "cls": "Monitor",
        "subjectMajor": "People and qualifications",
        "subjectMinor": "Designated biologists and monitors",
        "activities": "Compliance monitoring and inspections, Facility operations and maintenance, Ground disturbance and grading",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, Mason's lilaeopsis",
        "commitments": "AMM-14, AMM-17, BIO-22a, BIO-2b, COA 11.18, COA 11.62, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-062"
      },
      {
        "id": "3-063",
        "title": "Biologist guidance for access and setup around ESAs",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles, Habitat protection",
        "subjectMinor": "Exclusion fencing and ESAs, Giant garter snake",
        "activities": "Access road and route construction, Compliance monitoring and inspections, Staging and laydown",
        "species": "California tiger salamander, Giant garter snake, Mason's lilaeopsis",
        "commitments": "BIO-30, CM 6.3.2.7, COA 11.106, COA 11.41, COA 11.55, COA 11.65",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-063"
      },
      {
        "id": "3-007",
        "title": "Biologist inspection during exclusion fence installation",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles, Habitat protection",
        "subjectMinor": "Amphibians, Exclusion fencing and ESAs, Giant garter snake",
        "activities": "Compliance monitoring and inspections, Exclusion fencing and flagging installation",
        "species": "California tiger salamander, Giant garter snake",
        "commitments": "COA 11.43, COA 11.62",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-007"
      },
      {
        "id": "4-068",
        "title": "Biologist or Monitor presence during take-risk work",
        "cls": "Roster",
        "subjectMajor": "People and qualifications, Site conduct",
        "subjectMinor": "Compliance inspections and records, Designated biologists and monitors",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading, Site clearing and vegetation removal",
        "species": "California tiger salamander",
        "commitments": "CM 6.3.2.6, COA 9.2",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-068"
      },
      {
        "id": "3-066",
        "title": "Biologist presence and habitat survey throughout dewatering",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles, Fish, Water",
        "subjectMinor": "Amphibians, Dewatering, Fish rescue and salvage",
        "activities": "Compliance monitoring and inspections, Dewatering and fish isolation, Wildlife capture, handling and relocation",
        "species": "California red-legged frog, Chinook salmon, Delta smelt, Giant garter snake, Longfin smelt, Pond turtle, White sturgeon",
        "commitments": "BIO-24a, BIO-30, CM 6.3.2.10, CM 6.3.2.7, COA 11.37, COA 11.61",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-066"
      },
      {
        "id": "3-020",
        "title": "Biologist site survey before work resumes after rain",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles",
        "subjectMinor": "Amphibians",
        "activities": "Ground disturbance and grading, Surveys and habitat assessments",
        "species": "",
        "commitments": "COA 11.13",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-020"
      },
      {
        "id": "4-061",
        "title": "Biologist stop-work authority",
        "cls": "Roster",
        "subjectMajor": "People and qualifications, Site conduct",
        "subjectMinor": "Compliance inspections and records, Designated biologists and monitors",
        "activities": "Compliance monitoring and inspections, Training and personnel qualification",
        "species": "Burrowing owl, California black rail, California red-legged frog, California tiger salamander, Sandhill crane",
        "commitments": "BIO-22a, BIO-24a, BIO-26, BIO-32, BIO-33, BIO-40",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-061"
      },
      {
        "id": "4-062",
        "title": "Biologist stop-work on likely nest failure",
        "cls": "Roster",
        "subjectMajor": "Birds, People and qualifications",
        "subjectMinor": "Designated biologists and monitors, Nesting birds",
        "activities": "Compliance monitoring and inspections, Notifications and reporting",
        "species": "California least tern, Swainson's hawk, Tricolored blackbird, White-tailed kite",
        "commitments": "BIO-34, BIO-36a, BIO-36b, BIO-39, BIO-44",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-062"
      },
      {
        "id": "3-045",
        "title": "Biologist walk-ahead during initial clearing, mowing and trenching",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles, People and qualifications",
        "subjectMinor": "Amphibians, Designated biologists and monitors, Giant garter snake",
        "activities": "Compliance monitoring and inspections, Excavation and trenching, Site clearing and vegetation removal",
        "species": "California tiger salamander, Giant garter snake, Mason's lilaeopsis",
        "commitments": "BIO-30, COA 11.104, COA 11.42, COA 11.48, COA 11.57, COA 11.62, COA 11.63",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-045"
      },
      {
        "id": "2-056",
        "title": "Bird strike diverters, wildlife-passable fencing and visual barriers",
        "cls": "Adhere",
        "subjectMajor": "Birds, Site conduct",
        "subjectMinor": "Facility design and siting, Nesting birds, Sandhill crane",
        "activities": "Exclusion fencing and flagging installation, Transmission and power line work",
        "species": "Burrowing owl, California tiger salamander, Giant garter snake, Swainson's hawk, Tricolored blackbird",
        "commitments": "AES-1a, AMM-18, BIO-22b, BIO-53, COA 11.10, COA 12.4",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-056"
      },
      {
        "id": "2-031",
        "title": "Black rail buffer in breeding season and extreme tides",
        "cls": "Adhere",
        "subjectMajor": "Birds",
        "subjectMinor": "Nesting birds",
        "activities": "Ground disturbance and grading, In-water and in-channel work",
        "species": "California black rail",
        "commitments": "BIO-32",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-031"
      },
      {
        "id": "3-082b",
        "title": "Botanical and Mason's lilaeopsis surveys in bloom season",
        "cls": "Monitor",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Special-status plants",
        "activities": "Site clearing and vegetation removal, Surveys and habitat assessments",
        "species": "Mason's lilaeopsis",
        "commitments": "AES-1c, BIO-2a, COA 11.105",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-082b"
      },
      {
        "id": "2-086",
        "title": "Buffers or sound curtains for new tricolored blackbird colonies",
        "cls": "Adhere",
        "subjectMajor": "Birds, Noise and vibration",
        "subjectMinor": "Nesting birds, Noise",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading, Pile driving",
        "species": "Tricolored blackbird",
        "commitments": "COA 11.85",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-086"
      },
      {
        "id": "3-087",
        "title": "Bumble bee habitat assessment and three-survey sequence",
        "cls": "Monitor",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Bumble bees and monarchs",
        "activities": "Ground disturbance and grading, Surveys and habitat assessments",
        "species": "Crotch bumble bee",
        "commitments": "BIO-21, COA 11.95, COA 11.96, COA 11.97, COA 11.99",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-087"
      },
      {
        "id": "3-071",
        "title": "Bumble bee nest search and full-time nest monitoring",
        "cls": "Monitor",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Bumble bees and monarchs",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading, Surveys and habitat assessments",
        "species": "Crotch bumble bee",
        "commitments": "BIO-21, COA 11.102, COA 11.99",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-071"
      },
      {
        "id": "4-028",
        "title": "Bumble bee sighting and nest report to CDFW",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Plants and invertebrates",
        "subjectMinor": "Bumble bees and monarchs, Species sightings and CNDDB reporting",
        "activities": "Compliance monitoring and inspections, Notifications and reporting, Surveys and habitat assessments",
        "species": "Crotch bumble bee",
        "commitments": "BIO-21, COA 11.94, COA 11.97, COA 11.98, COA 11.99",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-028"
      },
      {
        "id": "2-006",
        "title": "Burrow and refugia flagging and hand excavation before earthmoving",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Habitat protection",
        "subjectMinor": "Amphibians, Exclusion fencing and ESAs, Giant garter snake",
        "activities": "Excavation and trenching, Exclusion fencing and flagging installation, Ground disturbance and grading",
        "species": "California tiger salamander, Giant garter snake",
        "commitments": "BIO-30, COA 11.49, COA 11.56, COA 11.62",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-006"
      },
      {
        "id": "2-073",
        "title": "Burrow and refugia protection outside the disturbance footprint",
        "cls": "Adhere",
        "subjectMajor": "Birds, Habitat protection",
        "subjectMinor": "Burrowing owl, Habitat avoidance and work footprint",
        "activities": "Ground disturbance and grading, Vehicle travel on site",
        "species": "Burrowing owl, Crotch bumble bee, Giant garter snake",
        "commitments": "AMM-17, COA 11.100, COA 11.109, COA 11.117, COA 11.56",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-073"
      },
      {
        "id": "3-057",
        "title": "Burrow complex map updates from sightings and sign",
        "cls": "Monitor",
        "subjectMajor": "Birds",
        "subjectMinor": "Burrowing owl",
        "activities": "Compliance monitoring and inspections, Surveys and habitat assessments",
        "species": "Burrowing owl",
        "commitments": "COA 11.112",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-057"
      },
      {
        "id": "3-070",
        "title": "Burrow monitoring before blocking and inside reduced buffers",
        "cls": "Monitor",
        "subjectMajor": "Birds",
        "subjectMinor": "Burrowing owl",
        "activities": "Burrow and roost exclusion, Compliance monitoring and inspections",
        "species": "Burrowing owl",
        "commitments": "BIO-40, COA 11.116, COA 11.117",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-070"
      },
      {
        "id": "3-065",
        "title": "Burrow vacancy confirmation before blocking",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles",
        "subjectMinor": "Amphibians, Giant garter snake",
        "activities": "Burrow and roost exclusion, Excavation and trenching, Surveys and habitat assessments",
        "species": "California tiger salamander, Giant garter snake",
        "commitments": "COA 11.49, COA 11.56, COA 11.62",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-065"
      },
      {
        "id": "2-046",
        "title": "Burrow, refugia and ESA buffer flagging before earthmoving",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Exclusion fencing and ESAs",
        "activities": "Exclusion fencing and flagging installation, Ground disturbance and grading",
        "species": "California red-legged frog, California tiger salamander, Crotch bumble bee, Giant garter snake, Western spadefoot",
        "commitments": "BIO-22a, BIO-23, BIO-24a, CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6, COA 11.100, COA 11.41, COA 11.54, COA 11.62, COA 11.65",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-046"
      },
      {
        "id": "3-086",
        "title": "Burrowing owl habitat assessment and preconstruction surveys",
        "cls": "Monitor",
        "subjectMajor": "Birds",
        "subjectMinor": "Burrowing owl",
        "activities": "Ground disturbance and grading, Surveys and habitat assessments",
        "species": "Burrowing owl",
        "commitments": "BIO-40, COA 11.110, COA 11.111",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-086"
      },
      {
        "id": "4-026",
        "title": "Burrowing owl sighting report to the Designated Biologist",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Birds",
        "subjectMinor": "Burrowing owl, Species sightings and CNDDB reporting",
        "activities": "Compliance monitoring and inspections, Notifications and reporting, Surveys and habitat assessments",
        "species": "Burrowing owl",
        "commitments": "COA 11.109",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-026"
      },
      {
        "id": "1-079",
        "title": "Canal and channel excavation and bank limits",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Water",
        "subjectMinor": "Erosion and sediment control, In-water work, Vegetation removal",
        "activities": "Excavation and trenching, In-water and in-channel work, Site clearing and vegetation removal",
        "species": "Giant garter snake",
        "commitments": "COA 11.57, COA 11.60",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-079"
      },
      {
        "id": "1-096",
        "title": "Capped pipe ends and minimal debris piles",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Wildlife entrapment",
        "activities": "Excavation and trenching, Staging and laydown",
        "species": "",
        "commitments": "COA 11.15, PH-1a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-096"
      },
      {
        "id": "4-005",
        "title": "Capture and relocation notice to USFWS and CDFW",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Habitat protection",
        "subjectMinor": "Take and injury reporting, Wildlife encounters and handling",
        "activities": "Notifications and reporting, Wildlife capture, handling and relocation",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, Western spadefoot",
        "commitments": "BIO-22a, BIO-24a, CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6, COA 11.51, COA 11.67",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-005"
      },
      {
        "id": "2-003",
        "title": "Care and release of injured covered species",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Wildlife encounters and handling",
        "activities": "Wildlife capture, handling and relocation",
        "species": "Burrowing owl, California red-legged frog, California tiger salamander, Giant garter snake, Western spadefoot",
        "commitments": "CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6, COA 11.118, COA 11.2, COA 11.52, COA 11.68",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-003"
      },
      {
        "id": "2-061",
        "title": "Caution signage for basking reptiles and amphibian movement",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Habitat protection",
        "subjectMinor": "Amphibians, Exclusion fencing and ESAs, Giant garter snake",
        "activities": "Exclusion fencing and flagging installation, Vehicle travel on site",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, Mason's lilaeopsis, San Joaquin kit fox",
        "commitments": "AMM-14, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-061"
      },
      {
        "id": "1-114",
        "title": "CCWD interconnection capacity",
        "cls": "Adhere",
        "subjectMajor": "Site conduct",
        "subjectMinor": "Facility design and siting",
        "activities": "Water diversions and intake operations",
        "species": "",
        "commitments": "WQ-4",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-114"
      },
      {
        "id": "4-067",
        "title": "CDFW approval of Designated Biologists and Monitors",
        "cls": "Roster",
        "subjectMajor": "People and qualifications",
        "subjectMinor": "Designated biologists and monitors",
        "activities": "Notifications and reporting, Training and personnel qualification",
        "species": "",
        "commitments": "AMM-14, COA 9.2",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-067"
      },
      {
        "id": "1-109",
        "title": "CDFW consultation before work resumes after distress",
        "cls": "Adhere",
        "subjectMajor": "Agency reporting and approvals, Birds, Fish",
        "subjectMinor": "Agency approvals, Burrowing owl, Fish rescue and salvage",
        "activities": "Burrow and roost exclusion, In-water and in-channel work, Pile driving",
        "species": "Burrowing owl, Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.116, COA 11.33",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-109"
      },
      {
        "id": "4-043",
        "title": "CDFW consultation on an unmet buffer or season",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals",
        "subjectMinor": "Agency approvals",
        "activities": "Ground disturbance and grading, Notifications and reporting",
        "species": "California tiger salamander, Giant garter snake, Swainson's hawk, Tricolored blackbird",
        "commitments": "CM 6.3.2.6, COA 11.59, COA 11.75, COA 11.86, COA 11.91",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-043"
      },
      {
        "id": "2-018",
        "title": "Closed season for ground disturbance in amphibian habitat",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles",
        "subjectMinor": "Amphibians",
        "activities": "Ground disturbance and grading",
        "species": "California red-legged frog, California tiger salamander, Western spadefoot",
        "commitments": "BIO-22a, BIO-23, BIO-24a, CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6, COA 11.44",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-018"
      },
      {
        "id": "4-025",
        "title": "CNDDB field survey form submittal",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals",
        "subjectMinor": "Species sightings and CNDDB reporting",
        "activities": "Notifications and reporting, Surveys and habitat assessments",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, San Joaquin kit fox",
        "commitments": "AMM-14, BIO-30, BIO-46, CM 6.3.2.1, COA 10.14, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-025"
      },
      {
        "id": "2-029",
        "title": "Colony active period limit in bumble bee habitat",
        "cls": "Adhere",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Bumble bees and monarchs",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal",
        "species": "Crotch bumble bee",
        "commitments": "COA 11.100, COA 11.95",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-029"
      },
      {
        "id": "1-009",
        "title": "Combined north and south Delta diversion limit",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Diversion limits and bypass flows",
        "activities": "Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.123, COA 11.125",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-009"
      },
      {
        "id": "2-095",
        "title": "Compensatory and on-site restoration acreage",
        "cls": "Adhere",
        "subjectMajor": "Birds, Mitigation and restoration",
        "subjectMinor": "Burrowing owl, Mitigation lands",
        "activities": "Restoration and planting",
        "species": "Burrowing owl",
        "commitments": "COA 12.6",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-095"
      },
      {
        "id": "2-077",
        "title": "Conserved lands and conservation easement setback",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Mitigation and restoration",
        "subjectMinor": "Habitat avoidance and work footprint, Mitigation lands",
        "activities": "Ground disturbance and grading",
        "species": "",
        "commitments": "COA 9.16",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-077"
      },
      {
        "id": "4-032",
        "title": "Construction manager alert on species entry",
        "cls": "Notify",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Wildlife encounters and handling",
        "activities": "Compliance monitoring and inspections, Notifications and reporting",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, Mason's lilaeopsis",
        "commitments": "AMM-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-032"
      },
      {
        "id": "3-022",
        "title": "Continuous sound-level monitoring at intakes and complexes",
        "cls": "Monitor",
        "subjectMajor": "Noise and vibration",
        "subjectMinor": "Noise",
        "activities": "Compliance monitoring and inspections, Heavy equipment operation, Night work",
        "species": "",
        "commitments": "AMM-21, NOI-1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-022"
      },
      {
        "id": "4-034",
        "title": "Coroner notification on human remains discovery",
        "cls": "Notify",
        "subjectMajor": "Cultural resources",
        "subjectMinor": "Cultural resources",
        "activities": "Excavation and trenching, Ground disturbance and grading, Notifications and reporting",
        "species": "",
        "commitments": "CUL-5",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-034"
      },
      {
        "id": "1-043",
        "title": "Corrective action at air monitoring thresholds",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Equipment emissions, Fugitive dust",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "",
        "commitments": "AQ-5",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-043"
      },
      {
        "id": "3-032",
        "title": "Covered fish monitoring through construction and operations",
        "cls": "Monitor",
        "subjectMajor": "Fish, Water operations",
        "subjectMinor": "Fish rescue and salvage, Operations monitoring and studies",
        "activities": "Compliance monitoring and inspections, In-water and in-channel work, Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 10.18, COA 10.19, COA 10.21",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-032"
      },
      {
        "id": "4-024",
        "title": "Covered Species sighting report to CDFW",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals",
        "subjectMinor": "Species sightings and CNDDB reporting",
        "activities": "Compliance monitoring and inspections, Notifications and reporting, Surveys and habitat assessments",
        "species": "",
        "commitments": "COA 10.7, COA 11.1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-024"
      },
      {
        "id": "4-060",
        "title": "Cultural training record for SHPO",
        "cls": "Roster",
        "subjectMajor": "Cultural resources, People and qualifications",
        "subjectMinor": "Cultural resources, Worker training",
        "activities": "Notifications and reporting, Training and personnel qualification",
        "species": "",
        "commitments": "AMM-6, EC-6",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-060"
      },
      {
        "id": "4-056",
        "title": "Cultural, Tribal and fossil awareness training",
        "cls": "Roster",
        "subjectMajor": "Cultural resources, People and qualifications",
        "subjectMinor": "Cultural resources, Paleontological resources, Tribal cultural resources, Worker training",
        "activities": "Ground disturbance and grading, Training and personnel qualification",
        "species": "",
        "commitments": "AMM-6, CUL-3b, EC-6, PALEO-1b, TCR-1c",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-056"
      },
      {
        "id": "3-052",
        "title": "Cumulative impact tracking within each phase",
        "cls": "Monitor",
        "subjectMajor": "Habitat protection, Mitigation and restoration",
        "subjectMinor": "Habitat impact tracking, Mitigation lands",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "",
        "commitments": "COA 10.9",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-052"
      },
      {
        "id": "3-015",
        "title": "Daily 72-hour forecast check before work",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles",
        "subjectMinor": "Amphibians, Giant garter snake",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "Giant garter snake",
        "commitments": "COA 11.13, COA 11.27, COA 11.58",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-015"
      },
      {
        "id": "3-064",
        "title": "Daily burrow survey before work at linear sites",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles",
        "subjectMinor": "Amphibians, Giant garter snake",
        "activities": "Ground disturbance and grading, Surveys and habitat assessments",
        "species": "California tiger salamander, Giant garter snake",
        "commitments": "COA 11.41, COA 11.47, COA 11.65",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-064"
      },
      {
        "id": "3-039",
        "title": "Daily compliance inspection by the biologist or monitor",
        "cls": "Monitor",
        "subjectMajor": "Site conduct",
        "subjectMinor": "Compliance inspections and records",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading, Site clearing and vegetation removal",
        "species": "",
        "commitments": "COA 10.10",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-039"
      },
      {
        "id": "3-005",
        "title": "Daily exclusion fence inspection",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles, Habitat protection",
        "subjectMinor": "Amphibians, Exclusion fencing and ESAs",
        "activities": "Compliance monitoring and inspections, Exclusion fencing and flagging installation",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, Pond turtle, Western spadefoot",
        "commitments": "BIO-22a, BIO-23, BIO-24a, BIO-25, BIO-30, CM 6.3.2.10, CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6, CM 6.3.2.7, COA 11.43, COA 11.62",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-005"
      },
      {
        "id": "3-008",
        "title": "Daily exclusion zone sign and flagging check",
        "cls": "Monitor",
        "subjectMajor": "Habitat protection, Plants and invertebrates",
        "subjectMinor": "Exclusion fencing and ESAs, Vernal pools",
        "activities": "Compliance monitoring and inspections, Exclusion fencing and flagging installation",
        "species": "Vernal pool fairy shrimp, Vernal pool tadpole shrimp",
        "commitments": "BIO-14, BIO-2a, CM 6.3.2.9, COA 10.10, COA 9.9, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-008"
      },
      {
        "id": "3-073",
        "title": "Daily fisheries monitor observation of barge operations",
        "cls": "Monitor",
        "subjectMajor": "Fish, Water",
        "subjectMinor": "Barge and vessel operations, Fish rescue and salvage",
        "activities": "Barge and vessel operations, Compliance monitoring and inspections, In-water and in-channel work",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AMM-27, AQUA-1b, COA 11.36",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-073"
      },
      {
        "id": "3-044",
        "title": "Daily petroleum leak inspection of in-water equipment",
        "cls": "Monitor",
        "subjectMajor": "Hazards",
        "subjectMinor": "Refueling and equipment servicing, Spill prevention and response",
        "activities": "Compliance monitoring and inspections, In-water and in-channel work, Refueling and equipment maintenance",
        "species": "",
        "commitments": "AMM-3, COA 11.22, EC-3",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-044"
      },
      {
        "id": "3-050b",
        "title": "Daily vehicle leak check",
        "cls": "Monitor",
        "subjectMajor": "Hazards",
        "subjectMinor": "Refueling and equipment servicing, Spill prevention and response",
        "activities": "Compliance monitoring and inspections, Refueling and equipment maintenance, Vehicle travel on site",
        "species": "",
        "commitments": "COA 9.13",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-050b"
      },
      {
        "id": "3-040",
        "title": "Daily written observation and inspection record",
        "cls": "Monitor",
        "subjectMajor": "Site conduct",
        "subjectMinor": "Compliance inspections and records",
        "activities": "Compliance monitoring and inspections",
        "species": "Burrowing owl",
        "commitments": "AQ-5, COA 10.10, COA 11.116, COA 11.21, COA 11.3, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-040"
      },
      {
        "id": "2-039",
        "title": "Daylight-only surface work near intake residences",
        "cls": "Adhere",
        "subjectMajor": "Noise and vibration, Site conduct",
        "subjectMinor": "Noise, Work hours",
        "activities": "Night work",
        "species": "",
        "commitments": "AES-4a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-039"
      },
      {
        "id": "2-040",
        "title": "Daylight-only work near occupied nests and colonies",
        "cls": "Adhere",
        "subjectMajor": "Birds, Site conduct",
        "subjectMinor": "Nesting birds, Work hours",
        "activities": "Night work",
        "species": "Swainson's hawk, Tricolored blackbird",
        "commitments": "BIO-39, BIO-44",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-040"
      },
      {
        "id": "3-091",
        "title": "Daytime bat sign surveys of bridges and structures",
        "cls": "Monitor",
        "subjectMajor": "Mammals",
        "subjectMinor": "Bats",
        "activities": "Demolition, Site clearing and vegetation removal, Surveys and habitat assessments",
        "species": "",
        "commitments": "BIO-45b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-091"
      },
      {
        "id": "4-009",
        "title": "Dead bumble bee or monarch report and salvage",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Plants and invertebrates",
        "subjectMinor": "Bumble bees and monarchs, Take and injury reporting",
        "activities": "Compliance monitoring and inspections, Notifications and reporting, Wildlife capture, handling and relocation",
        "species": "Crotch bumble bee, Monarch butterfly",
        "commitments": "BIO-21, CM 6.3.2.12",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-009"
      },
      {
        "id": "1-065",
        "title": "Dead vegetative debris clearance in the work footprint",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Hazards",
        "subjectMinor": "Fire prevention, Vegetation removal",
        "activities": "Site clearing and vegetation removal",
        "species": "",
        "commitments": "COA 9.18",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-065"
      },
      {
        "id": "2-084",
        "title": "Debris and cut vegetation placement away from aquatic habitat",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Vegetation removal",
        "activities": "Site clearing and vegetation removal, Stockpiling and spoils handling",
        "species": "",
        "commitments": "AMM-17, BIO-2b, COA 11.16",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-084"
      },
      {
        "id": "4-070",
        "title": "Designated Biologist hand excavation of burrows and refugia",
        "cls": "Roster",
        "subjectMajor": "Amphibians and reptiles, People and qualifications",
        "subjectMinor": "Amphibians, Designated biologists and monitors, Giant garter snake",
        "activities": "Excavation and trenching, Training and personnel qualification, Wildlife capture, handling and relocation",
        "species": "California tiger salamander, Giant garter snake",
        "commitments": "COA 11.49, COA 11.62",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-070"
      },
      {
        "id": "3-077",
        "title": "Designated Biologist presence during dewatering in GGS habitat",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles, Water",
        "subjectMinor": "Dewatering, Giant garter snake",
        "activities": "Compliance monitoring and inspections, Dewatering and fish isolation",
        "species": "Giant garter snake",
        "commitments": "COA 11.61",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-077"
      },
      {
        "id": "4-066",
        "title": "Designated Paleontological Resources Specialist",
        "cls": "Roster",
        "subjectMajor": "Cultural resources, People and qualifications",
        "subjectMinor": "Paleontological resources, Qualified specialists",
        "activities": "Compliance monitoring and inspections, Training and personnel qualification",
        "species": "",
        "commitments": "PALEO-1a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-066"
      },
      {
        "id": "1-101",
        "title": "Dewatering and fish salvage plan approval",
        "cls": "Adhere",
        "subjectMajor": "Agency reporting and approvals, Fish, Water",
        "subjectMinor": "Agency approvals, Dewatering, Fish rescue and salvage",
        "activities": "Dewatering and fish isolation",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.35, COA 11.37",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-101"
      },
      {
        "id": "2-051",
        "title": "Dewatering pump intake screens and cofferdam nets",
        "cls": "Adhere",
        "subjectMajor": "Fish, Water",
        "subjectMinor": "Dewatering, Fish rescue and salvage",
        "activities": "Dewatering and fish isolation, In-water and in-channel work",
        "species": "California tiger salamander, Chinook salmon, Delta smelt, Longfin smelt, Western spadefoot, White sturgeon",
        "commitments": "AMM-25, AQUA-1c, BIO-22a, BIO-23, BIO-24a, BIO-25, CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6, COA 11.35, COA 11.37",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-051"
      },
      {
        "id": "3-051",
        "title": "Disturbance and buffer GIS layers per site",
        "cls": "Monitor",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Exclusion fencing and ESAs, Habitat impact tracking",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "",
        "commitments": "COA 10.3, COA 10.4",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-051"
      },
      {
        "id": "1-003",
        "title": "Diversion spread across intakes and screens",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Diversion limits and bypass flows, Fish screens",
        "activities": "Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.120",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-003"
      },
      {
        "id": "1-049",
        "title": "Drip pans, absorbents and spill kits at equipment",
        "cls": "Adhere",
        "subjectMajor": "Hazards",
        "subjectMinor": "Hazardous materials, Spill prevention and response",
        "activities": "Heavy equipment operation, Refueling and equipment maintenance, Staging and laydown",
        "species": "",
        "commitments": "AMM-3, COA 11.22, EC-3, EC-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-049"
      },
      {
        "id": "1-034",
        "title": "Dryer and conveyor enclosures",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Fugitive dust",
        "activities": "Concrete work and batch plants, Heavy equipment operation",
        "species": "",
        "commitments": "11.29, AMM-11, COA 11.29, EC-11",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-034"
      },
      {
        "id": "2-067",
        "title": "Dust complaint sign and response time",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Fugitive dust",
        "activities": "Ground disturbance and grading, Hauling and deliveries",
        "species": "",
        "commitments": "COA 11.29, EC-11",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-067"
      },
      {
        "id": "1-030",
        "title": "Dust suppression on exposed soil, stockpiles and roads",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Fugitive dust",
        "activities": "Ground disturbance and grading, Stockpiling and spoils handling, Vehicle travel on site",
        "species": "",
        "commitments": "11.29, AMM-11, COA 11.29, COA 11.55, COA 11.69, EC-11",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-030"
      },
      {
        "id": "3-029",
        "title": "Effluent sampling after a breach, leak or spill",
        "cls": "Monitor",
        "subjectMajor": "Hazards, Water",
        "subjectMinor": "Spill prevention and response, Stormwater and discharges",
        "activities": "Compliance monitoring and inspections, Hazardous materials handling and storage",
        "species": "",
        "commitments": "AMM-4b, EC-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-029"
      },
      {
        "id": "2-074",
        "title": "Elderberry drip line setback and chemical limits",
        "cls": "Adhere",
        "subjectMajor": "Hazards, Plants and invertebrates",
        "subjectMinor": "Elderberry shrubs, Pesticides and rodenticides",
        "activities": "Ground disturbance and grading, Pesticide and herbicide application",
        "species": "Valley elderberry longhorn beetle",
        "commitments": "BIO-18, CM 6.3.2.8",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-074"
      },
      {
        "id": "3-082a",
        "title": "Elderberry shrub survey around sites",
        "cls": "Monitor",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Elderberry shrubs",
        "activities": "Site clearing and vegetation removal, Surveys and habitat assessments",
        "species": "Valley elderberry longhorn beetle",
        "commitments": "BIO-18, CM 6.3.2.8",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-082a"
      },
      {
        "id": "4-035",
        "title": "Encounter report to the Designated Biologist",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Habitat protection",
        "subjectMinor": "Species sightings and CNDDB reporting, Wildlife encounters and handling",
        "activities": "Compliance monitoring and inspections, Notifications and reporting",
        "species": "",
        "commitments": "COA 11.1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-035"
      },
      {
        "id": "4-053",
        "title": "Environmental awareness training before site work",
        "cls": "Roster",
        "subjectMajor": "People and qualifications",
        "subjectMinor": "Worker training",
        "activities": "Training and personnel qualification",
        "species": "",
        "commitments": "AMM-1, BIO-14, COA 9.4, EC-1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-053"
      },
      {
        "id": "3-046",
        "title": "Environmental clearance review before maintenance",
        "cls": "Monitor",
        "subjectMajor": "Site conduct",
        "subjectMinor": "Compliance inspections and records",
        "activities": "Compliance monitoring and inspections, Facility operations and maintenance",
        "species": "",
        "commitments": "AMM-17, BIO-2b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-046"
      },
      {
        "id": "1-077",
        "title": "Equipment and watercraft cleaning and wash log",
        "cls": "Adhere",
        "subjectMajor": "Water",
        "subjectMinor": "Barge and vessel operations, Invasive species",
        "activities": "Barge and vessel operations, In-water and in-channel work, Vehicle travel on site",
        "species": "",
        "commitments": "AMM-27, AQUA-1b, COA 11.16, COA 11.19, COA 9.12, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-077"
      },
      {
        "id": "1-037",
        "title": "Equipment idling limit",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Equipment emissions",
        "activities": "Heavy equipment operation, Vehicle travel on site",
        "species": "",
        "commitments": "AMM-8, EC-7, EC-8",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-037"
      },
      {
        "id": "2-052",
        "title": "Erosion and sediment controls before earth-moving",
        "cls": "Adhere",
        "subjectMajor": "Water",
        "subjectMinor": "Erosion and sediment control, Stormwater and discharges",
        "activities": "Exclusion fencing and flagging installation, Ground disturbance and grading",
        "species": "",
        "commitments": "AMM-4a, COA 11.26, COA 12.3, COA 9.7, EC-4a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-052"
      },
      {
        "id": "1-067",
        "title": "Erosion controls before earth-moving and SWPPP on site",
        "cls": "Adhere",
        "subjectMajor": "Water",
        "subjectMinor": "Erosion and sediment control, Stormwater and discharges",
        "activities": "Excavation and trenching, Ground disturbance and grading",
        "species": "",
        "commitments": "AMM-4a, AMM-4b, COA 11.25, COA 11.26, COA 9.7, EC-4a, EC-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-067"
      },
      {
        "id": "2-068",
        "title": "ESA and site boundary marking until work ends",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Habitat protection",
        "subjectMinor": "Exclusion fencing and ESAs, Giant garter snake",
        "activities": "Exclusion fencing and flagging installation, Facility operations and maintenance",
        "species": "Giant garter snake",
        "commitments": "COA 11.54, COA 9.8",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-068"
      },
      {
        "id": "1-088",
        "title": "Established access routes, staging and parking",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Site conduct",
        "subjectMinor": "Access routes and parking, Habitat avoidance and work footprint",
        "activities": "Staging and laydown, Vehicle travel on site",
        "species": "",
        "commitments": "AMM-13, AMM-14, AMM-17, BIO-2b, COA 9.10, EC-13, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-088"
      },
      {
        "id": "1-046",
        "title": "EV charging at park-and-ride lots",
        "cls": "Adhere",
        "subjectMajor": "Air quality, Site conduct",
        "subjectMinor": "Greenhouse gas and zero-emission fleet, Traffic and community coordination",
        "activities": "Vehicle travel on site",
        "species": "",
        "commitments": "AQ-9",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-046"
      },
      {
        "id": "4-042",
        "title": "Eviction notice to CDFW before one-way doors",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Birds",
        "subjectMinor": "Burrowing owl, Schedule notices",
        "activities": "Burrow and roost exclusion, Notifications and reporting",
        "species": "Burrowing owl",
        "commitments": "COA 11.117",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-042"
      },
      {
        "id": "1-106",
        "title": "Exclusion Activities Plan approval before owl exclusion",
        "cls": "Adhere",
        "subjectMajor": "Agency reporting and approvals, Birds",
        "subjectMinor": "Agency approvals, Burrowing owl",
        "activities": "Burrow and roost exclusion",
        "species": "Burrowing owl",
        "commitments": "COA 11.117",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-106"
      },
      {
        "id": "2-045",
        "title": "Exclusion fence installation and upkeep after clearance",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Habitat protection",
        "subjectMinor": "Amphibians, Exclusion fencing and ESAs, Giant garter snake",
        "activities": "Exclusion fencing and flagging installation, Facility operations and maintenance",
        "species": "California tiger salamander, Giant garter snake",
        "commitments": "BIO-30, CM 6.3.2.7, COA 11.43, COA 11.48, COA 11.61, COA 11.62",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-045"
      },
      {
        "id": "2-106",
        "title": "Exclusion fence removal and seeding dates near aquatic features",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Mitigation and restoration",
        "subjectMinor": "Exclusion fencing and ESAs, Restoration",
        "activities": "Exclusion fencing and flagging installation, Restoration and planting",
        "species": "",
        "commitments": "COA 12.3",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-106"
      },
      {
        "id": "2-102",
        "title": "Farmland restoration or owner compensation",
        "cls": "Adhere",
        "subjectMajor": "Mitigation and restoration",
        "subjectMinor": "Agricultural land",
        "activities": "Restoration and planting",
        "species": "",
        "commitments": "AMM-22",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-102"
      },
      {
        "id": "3-006",
        "title": "Fence line and under-vehicle survey after a compromise",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles, Habitat protection",
        "subjectMinor": "Amphibians, Exclusion fencing and ESAs, Wildlife entrapment",
        "activities": "Exclusion fencing and flagging installation, Surveys and habitat assessments",
        "species": "California tiger salamander, Giant garter snake, Western spadefoot",
        "commitments": "BIO-22a, BIO-23, BIO-30, CM 6.3.2.6, CM 6.3.2.7",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-006"
      },
      {
        "id": "3-028",
        "title": "Fence-line PM and NO2 monitoring",
        "cls": "Monitor",
        "subjectMajor": "Air quality",
        "subjectMinor": "Fugitive dust",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading, Hauling and deliveries",
        "species": "",
        "commitments": "AQ-5",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-028"
      },
      {
        "id": "3-030",
        "title": "Field check of vibration treatments on historic buildings",
        "cls": "Monitor",
        "subjectMajor": "Cultural resources, Noise and vibration",
        "subjectMinor": "Cultural resources, Vibration",
        "activities": "Compliance monitoring and inspections, Pile driving",
        "species": "",
        "commitments": "CUL-1b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-030"
      },
      {
        "id": "4-048",
        "title": "Fire agency call on fire start",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Hazards",
        "subjectMinor": "Fire prevention, Non-compliance reporting",
        "activities": "Heavy equipment operation, Hot work and welding, Notifications and reporting",
        "species": "",
        "commitments": "AMM-5, EC-5",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-048"
      },
      {
        "id": "1-066",
        "title": "Fire season agency contact and crew briefings",
        "cls": "Adhere",
        "subjectMajor": "Hazards",
        "subjectMinor": "Fire prevention",
        "activities": "Notifications and reporting, Training and personnel qualification",
        "species": "",
        "commitments": "AMM-5",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-066"
      },
      {
        "id": "3-019",
        "title": "Fire-season condition update and crew briefing",
        "cls": "Monitor",
        "subjectMajor": "Hazards",
        "subjectMinor": "Fire prevention",
        "activities": "Compliance monitoring and inspections, Heavy equipment operation, Hot work and welding",
        "species": "",
        "commitments": "EC-5",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-019"
      },
      {
        "id": "3-050a",
        "title": "Fish collection record at each salvage",
        "cls": "Monitor",
        "subjectMajor": "Fish",
        "subjectMinor": "Fish rescue and salvage",
        "activities": "Compliance monitoring and inspections, Dewatering and fish isolation, Wildlife capture, handling and relocation",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.35",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-050a"
      },
      {
        "id": "3-074",
        "title": "Fish distress watch during pile driving",
        "cls": "Monitor",
        "subjectMajor": "Fish, Noise and vibration",
        "subjectMinor": "Fish rescue and salvage, Pile driving and underwater sound",
        "activities": "Compliance monitoring and inspections, Pile driving",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AMM-26, AQUA-1a, COA 11.33",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-074"
      },
      {
        "id": "3-047",
        "title": "Fish inspection and dip-netting of dewatered areas",
        "cls": "Monitor",
        "subjectMajor": "Fish, Water",
        "subjectMinor": "Dewatering, Fish rescue and salvage",
        "activities": "Compliance monitoring and inspections, Dewatering and fish isolation, Wildlife capture, handling and relocation",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AQUA-1c, COA 11.37",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-047"
      },
      {
        "id": "4-038",
        "title": "Fish isolation notice and rescue results to agencies",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Fish, Water",
        "subjectMinor": "Dewatering, Fish rescue and salvage, Schedule notices",
        "activities": "Dewatering and fish isolation, In-water and in-channel work, Notifications and reporting",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AQUA-1c, COA 11.35, COA 11.37",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-038"
      },
      {
        "id": "4-058",
        "title": "Fish rescue worker safety training",
        "cls": "Roster",
        "subjectMajor": "Fish, People and qualifications, Water",
        "subjectMinor": "Dewatering, Fish rescue and salvage, Worker training",
        "activities": "Dewatering and fish isolation, Training and personnel qualification, Wildlife capture, handling and relocation",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AQUA-1c, COA 11.35",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-058"
      },
      {
        "id": "2-012",
        "title": "Fish salvage timing after isolation",
        "cls": "Adhere",
        "subjectMajor": "Fish, Water",
        "subjectMinor": "Dewatering, Fish rescue and salvage",
        "activities": "Dewatering and fish isolation, Wildlife capture, handling and relocation",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AQUA-1c, COA 11.35",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-012"
      },
      {
        "id": "1-002",
        "title": "Fish screen approach and sweeping velocities",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Fish screens",
        "activities": "Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.120",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-002"
      },
      {
        "id": "3-035a",
        "title": "Fish screen retest after a qualifying change",
        "cls": "Monitor",
        "subjectMajor": "Water operations",
        "subjectMinor": "Fish screens",
        "activities": "Compliance monitoring and inspections, Facility operations and maintenance, Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 10.27",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-035a"
      },
      {
        "id": "1-001",
        "title": "Fish screen unit criteria for diversion",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Fish screens",
        "activities": "Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.120",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-001"
      },
      {
        "id": "2-059",
        "title": "Flight diverters on lines near crane roosts",
        "cls": "Adhere",
        "subjectMajor": "Birds, Site conduct",
        "subjectMinor": "Facility design and siting, Sandhill crane",
        "activities": "Transmission and power line work",
        "species": "Sandhill crane",
        "commitments": "BIO-2c",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-059"
      },
      {
        "id": "2-042",
        "title": "Flight season limit in bumble bee habitat",
        "cls": "Adhere",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Bumble bees and monarchs",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal",
        "species": "Crotch bumble bee",
        "commitments": "COA 11.95",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-042"
      },
      {
        "id": "1-005",
        "title": "Flow-tier diversion percentage",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Diversion limits and bypass flows",
        "activities": "Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.122",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-005"
      },
      {
        "id": "3-034",
        "title": "Food web baseline survey before Phase 1",
        "cls": "Monitor",
        "subjectMajor": "Water operations",
        "subjectMinor": "Operations monitoring and studies",
        "activities": "Surveys and habitat assessments, Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 10.21",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-034"
      },
      {
        "id": "3-018",
        "title": "Forecast check near unfenced CTS breeding sites",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles",
        "subjectMinor": "Amphibians",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "California tiger salamander",
        "commitments": "COA 11.45",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-018"
      },
      {
        "id": "4-045",
        "title": "Foreseen compliance or stay-ahead failure notice to CDFW",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Habitat protection, Mitigation and restoration",
        "subjectMinor": "Habitat impact tracking, Mitigation lands, Non-compliance reporting",
        "activities": "Compliance monitoring and inspections, Notifications and reporting, Restoration and planting",
        "species": "",
        "commitments": "COA 12, COA 9.3",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-045"
      },
      {
        "id": "1-047",
        "title": "Fuel and petroleum storage sites and containers",
        "cls": "Adhere",
        "subjectMajor": "Hazards",
        "subjectMinor": "Hazardous materials, Spill prevention and response",
        "activities": "Hazardous materials handling and storage, Refueling and equipment maintenance, Staging and laydown",
        "species": "",
        "commitments": "AMM-2, AMM-3, COA 11.21, COA 11.22, EC-2, EC-3",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-047"
      },
      {
        "id": "1-013",
        "title": "Georgiana Slough flow reversal minimization",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Diversion limits and bypass flows",
        "activities": "Water diversions and intake operations",
        "species": "Chinook salmon",
        "commitments": "COA 10.21",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-013"
      },
      {
        "id": "2-085",
        "title": "Geotechnical exploration siting outside aquatic features",
        "cls": "Adhere",
        "subjectMajor": "Site conduct",
        "subjectMinor": "Facility design and siting",
        "activities": "Geotechnical investigations and drilling",
        "species": "",
        "commitments": "AMM-14, COA 12.2, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-085"
      },
      {
        "id": "3-097",
        "title": "Golden eagle records review and nest site mapping",
        "cls": "Monitor",
        "subjectMajor": "Birds",
        "subjectMinor": "Nesting birds",
        "activities": "Ground disturbance and grading, Surveys and habitat assessments",
        "species": "Golden eagle",
        "commitments": "BIO-37",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-097"
      },
      {
        "id": "1-042",
        "title": "Greenhouse gas BMPs for hauling, deliveries and waste",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Equipment emissions, Greenhouse gas and zero-emission fleet",
        "activities": "Hauling and deliveries, Heavy equipment operation, Waste and trash handling",
        "species": "",
        "commitments": "AMM-13, AQ-9, EC-13, TRANS-1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-042"
      },
      {
        "id": "2-070",
        "title": "Ground disturbance footprint limit per the Phase Authorization Package",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Habitat avoidance and work footprint, Habitat impact tracking",
        "activities": "Ground disturbance and grading",
        "species": "",
        "commitments": "CM 6.3.2.7, COA 11.109, COA 11.39, COA 11.55, COA 11.63, COA 11.94",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-070"
      },
      {
        "id": "1-016",
        "title": "Groundwater extraction at inside elevation rise",
        "cls": "Adhere",
        "subjectMajor": "Water",
        "subjectMinor": "Groundwater",
        "activities": "Facility operations and maintenance",
        "species": "",
        "commitments": "GW-5",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-016"
      },
      {
        "id": "3-025",
        "title": "Groundwater level and EC monitoring at dewatering sites",
        "cls": "Monitor",
        "subjectMajor": "Water",
        "subjectMinor": "Dewatering, Groundwater",
        "activities": "Compliance monitoring and inspections, Dewatering and fish isolation",
        "species": "",
        "commitments": "GW-1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-025"
      },
      {
        "id": "3-080",
        "title": "Habitat delineation and protocol presence surveys",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles",
        "subjectMinor": "Amphibians",
        "activities": "Ground disturbance and grading, Surveys and habitat assessments",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, Pond turtle, Western spadefoot",
        "commitments": "BIO-22a, BIO-23, BIO-24a, BIO-30, CM 6.3.2.10, CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6, CM 6.3.2.7",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-080"
      },
      {
        "id": "3-053",
        "title": "Habitat feature photo documentation before and after work",
        "cls": "Monitor",
        "subjectMajor": "Habitat protection, Mitigation and restoration",
        "subjectMinor": "Habitat impact tracking, Restoration",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "",
        "commitments": "COA 10.3, COA 10.6",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-053"
      },
      {
        "id": "3-096",
        "title": "Habitat suitability assessment in modeled habitat",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles, Mammals, Plants and invertebrates",
        "subjectMinor": "Kit fox and badger dens, Pond turtles and other reptiles, Vernal pools",
        "activities": "Ground disturbance and grading, Surveys and habitat assessments",
        "species": "California glossy snake, Coast horned lizard, Northern California legless lizard, Pond turtle, San Joaquin coachwhip, San Joaquin kit fox, Vernal pool fairy shrimp, Vernal pool tadpole shrimp, Western spadefoot",
        "commitments": "BIO-23, BIO-25, BIO-26, BIO-46, CM 6.3.2.9, COA 10.8",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-096"
      },
      {
        "id": "2-002",
        "title": "Handling protocol for covered species",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Wildlife encounters and handling",
        "activities": "Wildlife capture, handling and relocation",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, Mason's lilaeopsis, San Joaquin kit fox, Western spadefoot",
        "commitments": "AMM-14, CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6, COA 11.3, COA 11.50, COA 11.51, COA 11.67, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-002"
      },
      {
        "id": "1-031",
        "title": "Haul truck and rail car covers and freeboard",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Fugitive dust",
        "activities": "Hauling and deliveries",
        "species": "",
        "commitments": "11.29, AMM-11, COA 11.29, EC-11",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-031"
      },
      {
        "id": "1-095",
        "title": "Hauling coordination around Delta community events",
        "cls": "Adhere",
        "subjectMajor": "Site conduct",
        "subjectMinor": "Traffic and community coordination",
        "activities": "Hauling and deliveries",
        "species": "",
        "commitments": "EC-18",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-095"
      },
      {
        "id": "1-059",
        "title": "Hazardous building materials and contaminated soil disposal",
        "cls": "Adhere",
        "subjectMajor": "Hazards",
        "subjectMinor": "Hazardous materials",
        "activities": "Demolition, Hazardous materials handling and storage",
        "species": "",
        "commitments": "HAZ-2",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-059"
      },
      {
        "id": "1-062",
        "title": "Hazardous material labeling and handling protocol",
        "cls": "Adhere",
        "subjectMajor": "Hazards",
        "subjectMinor": "Hazardous materials",
        "activities": "Hazardous materials handling and storage",
        "species": "",
        "commitments": "AMM-2, COA 11.21, EC-2",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-062"
      },
      {
        "id": "2-089",
        "title": "Heavy equipment limit in upland snake habitat",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Site conduct",
        "subjectMinor": "Access routes and parking, Giant garter snake",
        "activities": "Facility operations and maintenance, Heavy equipment operation, Vehicle travel on site",
        "species": "Giant garter snake",
        "commitments": "COA 11.65",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-089"
      },
      {
        "id": "2-079",
        "title": "Helicopter exclusion radius around nests and colonies",
        "cls": "Adhere",
        "subjectMajor": "Birds",
        "subjectMinor": "Nesting birds",
        "activities": "Helicopter operations, Transmission and power line work",
        "species": "Swainson's hawk, Tricolored blackbird, White-tailed kite",
        "commitments": "BIO-36b, BIO-39, BIO-44, COA 11.79, COA 11.91",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-079"
      },
      {
        "id": "2-093",
        "title": "HM lands stay-ahead ratio",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Mitigation and restoration",
        "subjectMinor": "Habitat impact tracking, Mitigation lands",
        "activities": "Ground disturbance and grading, Restoration and planting",
        "species": "",
        "commitments": "CMP-0, COA 10.13, COA 12",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-093"
      },
      {
        "id": "1-060",
        "title": "HMMP, SWPPP and SPCC measures aboard vessels",
        "cls": "Adhere",
        "subjectMajor": "Hazards, Water",
        "subjectMinor": "Barge and vessel operations, Hazardous materials, Spill prevention and response",
        "activities": "Barge and vessel operations",
        "species": "",
        "commitments": "AMM-27, COA 11.36",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-060"
      },
      {
        "id": "4-047",
        "title": "Hydraulic test and operations data to CDFW",
        "cls": "Notify",
        "subjectMajor": "Water operations",
        "subjectMinor": "Fish screens, Operations coordination and data",
        "activities": "Compliance monitoring and inspections, Notifications and reporting, Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 10.27, COA 11.120, COA 11.122",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-047"
      },
      {
        "id": "4-018",
        "title": "Hydroacoustic exceedance report to CDFW",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Fish, Noise and vibration",
        "subjectMinor": "Fish rescue and salvage, Non-compliance reporting, Pile driving and underwater sound",
        "activities": "Compliance monitoring and inspections, Notifications and reporting, Pile driving",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.33",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-018"
      },
      {
        "id": "3-021",
        "title": "Hydrophone monitoring during impact pile driving",
        "cls": "Monitor",
        "subjectMajor": "Fish, Noise and vibration",
        "subjectMinor": "Fish rescue and salvage, Pile driving and underwater sound",
        "activities": "Compliance monitoring and inspections, In-water and in-channel work, Pile driving",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AMM-14, AQUA-1a, COA 11.33",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-021"
      },
      {
        "id": "2-055a",
        "title": "Idling-limit signage at site entrances",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Equipment emissions",
        "activities": "Heavy equipment operation",
        "species": "",
        "commitments": "AMM-13, AMM-7, EC-13, EC-7",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-055a"
      },
      {
        "id": "1-051",
        "title": "Immediate spill containment and cleanup",
        "cls": "Adhere",
        "subjectMajor": "Hazards",
        "subjectMinor": "Hazardous materials, Spill prevention and response",
        "activities": "Hazardous materials handling and storage, Refueling and equipment maintenance",
        "species": "",
        "commitments": "AMM-2, AMM-3, COA 11.21, EC-2, EC-4b, HAZ-2",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-051"
      },
      {
        "id": "3-038",
        "title": "In-water baseline monitoring and hydraulic velocity testing",
        "cls": "Monitor",
        "subjectMajor": "Water operations",
        "subjectMinor": "Operations monitoring and studies",
        "activities": "Compliance monitoring and inspections, In-water and in-channel work, Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 10.18, COA 11.120",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-038"
      },
      {
        "id": "4-039",
        "title": "In-water maintenance notice and approval from CDFW",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Water",
        "subjectMinor": "Agency approvals, In-water work, Schedule notices",
        "activities": "Facility operations and maintenance, In-water and in-channel work, Notifications and reporting",
        "species": "",
        "commitments": "COA 11.31",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-039"
      },
      {
        "id": "4-002",
        "title": "Initial take call to CDFW Stockton",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals",
        "subjectMinor": "Non-compliance reporting, Take and injury reporting",
        "activities": "Notifications and reporting, Wildlife capture, handling and relocation",
        "species": "",
        "commitments": "COA 10.16, COA 11.2",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-002"
      },
      {
        "id": "1-020",
        "title": "Intake and construction lighting on the river channel",
        "cls": "Adhere",
        "subjectMajor": "Fish, Lighting",
        "subjectMinor": "Fish rescue and salvage, Lighting near habitat and waters",
        "activities": "In-water and in-channel work, Night work",
        "species": "Chinook salmon",
        "commitments": "COA 11.9",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-020"
      },
      {
        "id": "3-013",
        "title": "Intake fish screen inspection cycle",
        "cls": "Monitor",
        "subjectMajor": "Water operations",
        "subjectMinor": "Fish screens",
        "activities": "Compliance monitoring and inspections, Facility operations and maintenance, Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 10.27, COA 10.28, COA 10.29, COA 10.30",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-013"
      },
      {
        "id": "2-108",
        "title": "Interim HM lands management funding",
        "cls": "Adhere",
        "subjectMajor": "Mitigation and restoration",
        "subjectMinor": "Mitigation lands",
        "activities": "Restoration and planting",
        "species": "",
        "commitments": "COA 12.12",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-108"
      },
      {
        "id": "3-043",
        "title": "Invasive species inspection of equipment before entry",
        "cls": "Monitor",
        "subjectMajor": "Water",
        "subjectMinor": "Invasive species",
        "activities": "Compliance monitoring and inspections, Heavy equipment operation, In-water and in-channel work",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, Mason's lilaeopsis",
        "commitments": "AMM-14, COA 11.36, COA 9.12, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-043"
      },
      {
        "id": "4-033",
        "title": "Invasive species on equipment report and quarantine",
        "cls": "Notify",
        "subjectMajor": "Water",
        "subjectMinor": "Invasive species",
        "activities": "Barge and vessel operations, Compliance monitoring and inspections, Notifications and reporting, Refueling and equipment maintenance",
        "species": "",
        "commitments": "COA 11.36",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-033"
      },
      {
        "id": "1-092",
        "title": "ITP, sign-in list and wallet cards on site",
        "cls": "Adhere",
        "subjectMajor": "People and qualifications, Site conduct",
        "subjectMinor": "Agency and biologist access, Worker training",
        "activities": "Training and personnel qualification",
        "species": "",
        "commitments": "AMM-1, COA 9.4, COA 9.5, EC-1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-092"
      },
      {
        "id": "1-006",
        "title": "June criteria after the salmon off-ramp",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Diversion limits and bypass flows",
        "activities": "Water diversions and intake operations",
        "species": "Chinook salmon",
        "commitments": "COA 11.122",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-006"
      },
      {
        "id": "4-029",
        "title": "Kit fox activity and natal den notice",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Mammals",
        "subjectMinor": "Kit fox and badger dens, Species sightings and CNDDB reporting",
        "activities": "Compliance monitoring and inspections, Notifications and reporting, Surveys and habitat assessments",
        "species": "San Joaquin kit fox",
        "commitments": "BIO-46, CM 6.3.2.1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-029"
      },
      {
        "id": "3-072",
        "title": "Kit fox and badger den surveys and monitoring",
        "cls": "Monitor",
        "subjectMajor": "Mammals",
        "subjectMinor": "Kit fox and badger dens",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading, Surveys and habitat assessments",
        "species": "American badger, San Joaquin kit fox",
        "commitments": "BIO-46, BIO-47, CM 6.3.2.1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-072"
      },
      {
        "id": "2-033",
        "title": "Least tern habitat activity limit in nesting season",
        "cls": "Adhere",
        "subjectMajor": "Birds",
        "subjectMinor": "Nesting birds",
        "activities": "Ground disturbance and grading, Surveys and habitat assessments",
        "species": "California least tern",
        "commitments": "BIO-34, CM 6.3.2.2",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-033"
      },
      {
        "id": "4-074",
        "title": "Licensed pesticide applicators",
        "cls": "Roster",
        "subjectMajor": "Hazards, People and qualifications",
        "subjectMinor": "Pesticides and rodenticides, Qualified specialists",
        "activities": "Pesticide and herbicide application, Training and personnel qualification",
        "species": "",
        "commitments": "COA 11.4",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-074"
      },
      {
        "id": "2-058",
        "title": "Light barriers on access routes and crane roosts",
        "cls": "Adhere",
        "subjectMajor": "Birds, Lighting",
        "subjectMinor": "Lighting near habitat and waters, Sandhill crane",
        "activities": "Night work, Vehicle travel on site",
        "species": "Sandhill crane",
        "commitments": "AES-4c, AMM-20, BIO-33",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-058"
      },
      {
        "id": "4-007",
        "title": "Listed fish injury or distress report to agencies",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Fish, Noise and vibration",
        "subjectMinor": "Fish rescue and salvage, Pile driving and underwater sound, Take and injury reporting",
        "activities": "Dewatering and fish isolation, In-water and in-channel work, Notifications and reporting, Pile driving",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AQUA-1a, AQUA-1c, TC-4a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-007"
      },
      {
        "id": "1-039",
        "title": "Locomotive engine tier",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Equipment emissions",
        "activities": "Hauling and deliveries",
        "species": "",
        "commitments": "AMM-9, EC-9",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-039"
      },
      {
        "id": "3-061",
        "title": "Long-term monitoring of restoration and mitigation sites",
        "cls": "Monitor",
        "subjectMajor": "Mitigation and restoration",
        "subjectMinor": "Mitigation lands, Restoration",
        "activities": "Compliance monitoring and inspections, Restoration and planting",
        "species": "Delta smelt, Longfin smelt, Swainson's hawk, Valley elderberry longhorn beetle",
        "commitments": "BIO-53, CMP-12, CMP-9, COA 12.5, COA 12.7, PH-1b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-061"
      },
      {
        "id": "3-037",
        "title": "Long-term restoration effectiveness monitoring at CMP sites",
        "cls": "Monitor",
        "subjectMajor": "Mitigation and restoration",
        "subjectMinor": "Mitigation lands, Restoration",
        "activities": "Compliance monitoring and inspections, Restoration and planting",
        "species": "Delta smelt",
        "commitments": "CMP-25, CMP-27",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-037"
      },
      {
        "id": "1-015",
        "title": "Longfin smelt distribution operational scenario",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Diversion limits and bypass flows",
        "activities": "Water diversions and intake operations",
        "species": "Longfin smelt",
        "commitments": "COA 12.7",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-015"
      },
      {
        "id": "4-055",
        "title": "Maintenance crew awareness training",
        "cls": "Roster",
        "subjectMajor": "People and qualifications",
        "subjectMinor": "Worker training",
        "activities": "Facility operations and maintenance, Training and personnel qualification",
        "species": "",
        "commitments": "AMM-17, BIO-2b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-055"
      },
      {
        "id": "2-082",
        "title": "Mason's lilaeopsis avoidance and maintenance buffers",
        "cls": "Adhere",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Special-status plants",
        "activities": "Facility operations and maintenance, In-water and in-channel work, Surveys and habitat assessments",
        "species": "Mason's lilaeopsis",
        "commitments": "COA 11.106, COA 11.107",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-082"
      },
      {
        "id": "2-064",
        "title": "Mason's lilaeopsis buffer marking",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Plants and invertebrates",
        "subjectMinor": "Exclusion fencing and ESAs, Special-status plants",
        "activities": "Exclusion fencing and flagging installation",
        "species": "Mason's lilaeopsis",
        "commitments": "COA 11.106",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-064"
      },
      {
        "id": "4-030",
        "title": "Mason's lilaeopsis discovery report",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Plants and invertebrates",
        "subjectMinor": "Special-status plants, Species sightings and CNDDB reporting",
        "activities": "Notifications and reporting, Surveys and habitat assessments",
        "species": "Mason's lilaeopsis",
        "commitments": "COA 11.106, COA 11.108",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-030"
      },
      {
        "id": "4-049",
        "title": "Mason's lilaeopsis transplant report to CDFW",
        "cls": "Notify",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Special-status plants",
        "activities": "Notifications and reporting, Restoration and planting, Wildlife capture, handling and relocation",
        "species": "Mason's lilaeopsis",
        "commitments": "COA 11.108",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-049"
      },
      {
        "id": "4-065",
        "title": "Methylmercury specialist approval of mercury conclusions",
        "cls": "Roster",
        "subjectMajor": "People and qualifications, Water",
        "subjectMinor": "Qualified specialists, Water quality",
        "activities": "Compliance monitoring and inspections, Training and personnel qualification",
        "species": "",
        "commitments": "WQ-6",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-065"
      },
      {
        "id": "1-091",
        "title": "Minimal vegetation removal and mower blade heights",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Habitat protection",
        "subjectMinor": "Giant garter snake, Vegetation removal",
        "activities": "Site clearing and vegetation removal",
        "species": "California tiger salamander, Crotch bumble bee, Giant garter snake",
        "commitments": "AMM-17, BIO-2b, COA 11.101, COA 11.18, COA 11.42, COA 11.57",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-091"
      },
      {
        "id": "4-011",
        "title": "Mitigation consultation after burrowing owl take",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Birds, Mitigation and restoration",
        "subjectMinor": "Burrowing owl, Mitigation lands, Take and injury reporting",
        "activities": "Burrow and roost exclusion, Notifications and reporting",
        "species": "Burrowing owl",
        "commitments": "CMP-20",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-011"
      },
      {
        "id": "2-097",
        "title": "Mitigation land crop mix",
        "cls": "Adhere",
        "subjectMajor": "Birds, Mitigation and restoration",
        "subjectMinor": "Mitigation lands, Nesting birds, Sandhill crane",
        "activities": "Facility operations and maintenance, Restoration and planting",
        "species": "Sandhill crane, Swainson's hawk, Tricolored blackbird",
        "commitments": "CMP-18b, CMP-19b, CMP-22b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-097"
      },
      {
        "id": "3-092",
        "title": "Monarch life stage and milkweed survey before construction",
        "cls": "Monitor",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Bumble bees and monarchs",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal, Surveys and habitat assessments",
        "species": "Monarch butterfly",
        "commitments": "CM 6.3.2.12",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-092"
      },
      {
        "id": "3-069b",
        "title": "Monarch life stage monitoring until departure",
        "cls": "Monitor",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Bumble bees and monarchs",
        "activities": "Compliance monitoring and inspections, Site clearing and vegetation removal",
        "species": "Monarch butterfly",
        "commitments": "CM 6.3.2.12",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-069b"
      },
      {
        "id": "4-031",
        "title": "Monarch life stage report to USFWS",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Plants and invertebrates",
        "subjectMinor": "Bumble bees and monarchs, Species sightings and CNDDB reporting",
        "activities": "Notifications and reporting, Surveys and habitat assessments",
        "species": "Monarch butterfly",
        "commitments": "CM 6.3.2.12",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-031"
      },
      {
        "id": "3-076",
        "title": "Monitor-guided access through unfenced turtle habitat",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles",
        "subjectMinor": "Pond turtles and other reptiles",
        "activities": "Compliance monitoring and inspections, Staging and laydown, Vehicle travel on site",
        "species": "Pond turtle",
        "commitments": "CM 6.3.2.10",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-076"
      },
      {
        "id": "4-017",
        "title": "Monitored parameter exceedance report to CDFW",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Water",
        "subjectMinor": "Non-compliance reporting, Stormwater and discharges, Water quality",
        "activities": "Compliance monitoring and inspections, In-water and in-channel work, Notifications and reporting",
        "species": "",
        "commitments": "COA 10.11",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-017"
      },
      {
        "id": "3-016",
        "title": "Morning biologist survey during clearing under rain forecast",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles",
        "subjectMinor": "Amphibians",
        "activities": "Site clearing and vegetation removal, Surveys and habitat assessments",
        "species": "California red-legged frog, California tiger salamander, Western spadefoot",
        "commitments": "BIO-22a, BIO-23, BIO-24a, CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6, COA 11.45",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-016"
      },
      {
        "id": "3-041",
        "title": "Morning inspection of overnight equipment and trenches",
        "cls": "Monitor",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Wildlife entrapment",
        "activities": "Compliance monitoring and inspections, Excavation and trenching, Staging and laydown",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, Mason's lilaeopsis",
        "commitments": "AMM-14, COA 11.14, COA 11.15, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-041"
      },
      {
        "id": "2-100",
        "title": "Mosquito management at mitigation sites",
        "cls": "Adhere",
        "subjectMajor": "Hazards, Mitigation and restoration",
        "subjectMinor": "Mitigation lands, Standing water and mosquitoes",
        "activities": "Facility operations and maintenance, Pesticide and herbicide application, Restoration and planting",
        "species": "",
        "commitments": "PH-1b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-100"
      },
      {
        "id": "2-037",
        "title": "Mowing conditions in tiger salamander upland before clearance surveys",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Habitat protection",
        "subjectMinor": "Amphibians, Vegetation removal",
        "activities": "Site clearing and vegetation removal, Surveys and habitat assessments",
        "species": "California tiger salamander",
        "commitments": "BIO-22a, CM 6.3.2.6, COA 11.42",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-037"
      },
      {
        "id": "2-092",
        "title": "Native plant palette and irrigation upkeep in landscaping",
        "cls": "Adhere",
        "subjectMajor": "Mitigation and restoration, Water",
        "subjectMinor": "Erosion and sediment control, Invasive species, Restoration",
        "activities": "Restoration and planting",
        "species": "",
        "commitments": "AES-1c",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-092"
      },
      {
        "id": "1-099",
        "title": "Natural debris piles away from water",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Water",
        "subjectMinor": "Vegetation removal, Water quality",
        "activities": "Hauling and deliveries, Site clearing and vegetation removal",
        "species": "Giant garter snake",
        "commitments": "COA 11.64",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-099"
      },
      {
        "id": "4-012",
        "title": "Nest abandonment notice to CDFW",
        "cls": "Notify",
        "subjectMajor": "Birds",
        "subjectMinor": "Nesting birds",
        "activities": "Compliance monitoring and inspections, Notifications and reporting",
        "species": "Burrowing owl, Swainson's hawk, Tricolored blackbird, White-tailed kite",
        "commitments": "BIO-36b, BIO-39, BIO-44, COA 11.118, COA 11.75, COA 11.81, COA 11.86, COA 11.93",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-012"
      },
      {
        "id": "2-026",
        "title": "Nest tree and woody vegetation removal window",
        "cls": "Adhere",
        "subjectMajor": "Birds, Habitat protection",
        "subjectMinor": "Nesting birds, Vegetation removal",
        "activities": "Site clearing and vegetation removal",
        "species": "Swainson's hawk",
        "commitments": "COA 11.71, COA 11.76, COA 11.77",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-026"
      },
      {
        "id": "2-048",
        "title": "Nest, colony and den buffer marking",
        "cls": "Adhere",
        "subjectMajor": "Birds, Habitat protection, Mammals",
        "subjectMinor": "Exclusion fencing and ESAs, Kit fox and badger dens, Nesting birds",
        "activities": "Exclusion fencing and flagging installation",
        "species": "Burrowing owl, Crotch bumble bee, San Joaquin kit fox, Swainson's hawk, Tricolored blackbird, White-tailed kite",
        "commitments": "BIO-36b, BIO-39, BIO-46, CM 6.3.2.1, COA 11.114, COA 11.72, COA 11.85, COA 11.87, COA 11.98",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-048"
      },
      {
        "id": "4-054",
        "title": "New worker training and annual refresher",
        "cls": "Roster",
        "subjectMajor": "People and qualifications",
        "subjectMinor": "Worker training",
        "activities": "Training and personnel qualification",
        "species": "",
        "commitments": "BIO-2b, COA 9.4",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-054"
      },
      {
        "id": "1-018",
        "title": "Night lighting near habitat",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Birds, Lighting",
        "subjectMinor": "Amphibians, Lighting near habitat and waters, Nesting birds, Sandhill crane",
        "activities": "Night work",
        "species": "California least tern, California red-legged frog, California tiger salamander, Least Bell's vireo, Western spadefoot, Yellow-billed cuckoo",
        "commitments": "BIO-22a, BIO-23, BIO-24a, BIO-31, BIO-33, BIO-42, CM 6.3.2.11, CM 6.3.2.2, CM 6.3.2.3, CM 6.3.2.4, CM 6.3.2.5, CM 6.3.2.6, COA 11.47, COA 11.8",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-018"
      },
      {
        "id": "1-098",
        "title": "Night speed limit in the Bethany Complex",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Site conduct",
        "subjectMinor": "Giant garter snake, Speed limits",
        "activities": "Night work, Vehicle travel on site",
        "species": "California tiger salamander, Giant garter snake",
        "commitments": "COA 11.11",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-098"
      },
      {
        "id": "2-035",
        "title": "Nighttime construction limit",
        "cls": "Adhere",
        "subjectMajor": "Site conduct",
        "subjectMinor": "Work hours",
        "activities": "Concrete work and batch plants, Night work",
        "species": "California glossy snake, Coast horned lizard, Northern California legless lizard, San Joaquin coachwhip",
        "commitments": "AMM-21, BIO-26, COA 11.7, NOI-1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-035"
      },
      {
        "id": "1-028",
        "title": "Nighttime fishing spot shielding from construction light",
        "cls": "Adhere",
        "subjectMajor": "Lighting, Site conduct",
        "subjectMinor": "Lighting near residences and recreation, Traffic and community coordination",
        "activities": "Night work",
        "species": "",
        "commitments": "AES-4c, AMM-20",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-028"
      },
      {
        "id": "1-027",
        "title": "Noise barriers and light control at bat roosts",
        "cls": "Adhere",
        "subjectMajor": "Lighting, Mammals, Noise and vibration",
        "subjectMinor": "Bats, Lighting near habitat and waters, Noise",
        "activities": "Heavy equipment operation, Night work",
        "species": "",
        "commitments": "BIO-45b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-027"
      },
      {
        "id": "1-023",
        "title": "Noise limit near present vireo, cuckoo or tern",
        "cls": "Adhere",
        "subjectMajor": "Birds, Noise and vibration",
        "subjectMinor": "Nesting birds, Noise",
        "activities": "Ground disturbance and grading, Heavy equipment operation",
        "species": "California least tern, Least Bell's vireo, Yellow-billed cuckoo",
        "commitments": "BIO-31, BIO-42, CM 6.3.2.2, CM 6.3.2.3, CM 6.3.2.4",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-023"
      },
      {
        "id": "1-025",
        "title": "Noise walls near black rail calling centers",
        "cls": "Adhere",
        "subjectMajor": "Birds, Noise and vibration",
        "subjectMinor": "Nesting birds, Noise",
        "activities": "Ground disturbance and grading, Heavy equipment operation",
        "species": "California black rail",
        "commitments": "BIO-32",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-025"
      },
      {
        "id": "4-014",
        "title": "Non-compliance notice to CDFW",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals",
        "subjectMinor": "Non-compliance reporting",
        "activities": "Compliance monitoring and inspections, Notifications and reporting",
        "species": "",
        "commitments": "COA 10.2, COA 9.2",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-014"
      },
      {
        "id": "2-087",
        "title": "Non-disturbance buffers around newly found sensitive resources",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Exclusion fencing and ESAs, Habitat avoidance and work footprint",
        "activities": "Exclusion fencing and flagging installation, Ground disturbance and grading, Surveys and habitat assessments",
        "species": "",
        "commitments": "BIO-2b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-087"
      },
      {
        "id": "2-088",
        "title": "Non-disturbance buffers around sensitive resources during maintenance",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Exclusion fencing and ESAs, Habitat avoidance and work footprint",
        "activities": "Exclusion fencing and flagging installation, Facility operations and maintenance",
        "species": "",
        "commitments": "AMM-17",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-088"
      },
      {
        "id": "2-072",
        "title": "Non-disturbance buffers at occupied nests, dens and roosts",
        "cls": "Adhere",
        "subjectMajor": "Birds, Habitat protection, Mammals",
        "subjectMinor": "Bats, Habitat avoidance and work footprint, Kit fox and badger dens, Nesting birds",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal",
        "species": "American badger, California tiger salamander, Crotch bumble bee, Giant garter snake, Golden eagle, Heron and egret rookeries, Monarch butterfly, Swainson's hawk, Tricolored blackbird",
        "commitments": "AMM-14, AMM-22, BIO-21, BIO-35, BIO-36a, BIO-37, BIO-39, BIO-47, CM 6.3.2.12, COA 11.39, COA 11.55, COA 11.72, COA 11.87, COA 11.98, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-072"
      },
      {
        "id": "2-009",
        "title": "Non-natal den plugging and excavation",
        "cls": "Adhere",
        "subjectMajor": "Mammals",
        "subjectMinor": "Kit fox and badger dens",
        "activities": "Burrow and roost exclusion, Excavation and trenching",
        "species": "American badger, San Joaquin kit fox",
        "commitments": "BIO-46, BIO-47",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-009"
      },
      {
        "id": "1-071",
        "title": "Non-stormwater discharge controls",
        "cls": "Adhere",
        "subjectMajor": "Water",
        "subjectMinor": "Stormwater and discharges, Water quality",
        "activities": "Concrete work and batch plants, Dewatering and fish isolation, Refueling and equipment maintenance",
        "species": "",
        "commitments": "AMM-4b, COA 11.25, EC-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-071"
      },
      {
        "id": "1-008",
        "title": "North Delta diversion in balanced conditions",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Diversion limits and bypass flows",
        "activities": "Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.124",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-008"
      },
      {
        "id": "1-078",
        "title": "Occupied aquatic habitat clearance before dewatering",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Fish, Water",
        "subjectMinor": "Amphibians, Dewatering, Fish rescue and salvage",
        "activities": "Dewatering and fish isolation",
        "species": "California red-legged frog, California tiger salamander, Chinook salmon, Delta smelt, Longfin smelt, Western spadefoot",
        "commitments": "AMM-25, AQUA-1c, BIO-22a, BIO-23, BIO-24a, CM 6.3.2.11, CM 6.3.2.6, COA 11.37",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-078"
      },
      {
        "id": "2-032",
        "title": "Occupied bat roost disturbance season",
        "cls": "Adhere",
        "subjectMajor": "Mammals",
        "subjectMinor": "Bats",
        "activities": "Demolition, Site clearing and vegetation removal",
        "species": "",
        "commitments": "BIO-45b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-032"
      },
      {
        "id": "2-028",
        "title": "Occupied burrow buffer in breeding season",
        "cls": "Adhere",
        "subjectMajor": "Birds",
        "subjectMinor": "Burrowing owl",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal",
        "species": "Burrowing owl",
        "commitments": "BIO-40, COA 11.113, COA 11.114, COA 11.117",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-028"
      },
      {
        "id": "2-011",
        "title": "Occupied elderberry shrub transplant to conservation areas",
        "cls": "Adhere",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Elderberry shrubs",
        "activities": "Restoration and planting, Site clearing and vegetation removal, Wildlife capture, handling and relocation",
        "species": "Valley elderberry longhorn beetle",
        "commitments": "BIO-18, CM 6.3.2.8, CMP-12",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-011"
      },
      {
        "id": "2-078",
        "title": "Occupied nest tree protection until fledging",
        "cls": "Adhere",
        "subjectMajor": "Birds, Habitat protection",
        "subjectMinor": "Nesting birds, Vegetation removal",
        "activities": "Site clearing and vegetation removal",
        "species": "Swainson's hawk, White-tailed kite",
        "commitments": "BIO-36b, BIO-39, COA 11.71, COA 11.74, COA 11.76, COA 11.79",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-078"
      },
      {
        "id": "3-067",
        "title": "Occupied raptor nest observation before and during work",
        "cls": "Monitor",
        "subjectMajor": "Birds",
        "subjectMinor": "Nesting birds",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "Swainson's hawk, White-tailed kite",
        "commitments": "BIO-36b, BIO-39, COA 11.73, COA 11.75",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-067"
      },
      {
        "id": "1-038",
        "title": "Off-road engine tier and fuel",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Equipment emissions",
        "activities": "Heavy equipment operation",
        "species": "",
        "commitments": "AMM-10, AMM-7, AMM-9, EC-10, EC-7, EC-9",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-038"
      },
      {
        "id": "1-029",
        "title": "Off-site haul trip hours on local roads",
        "cls": "Adhere",
        "subjectMajor": "Noise and vibration, Site conduct",
        "subjectMinor": "Noise, Traffic and community coordination, Work hours",
        "activities": "Hauling and deliveries",
        "species": "",
        "commitments": "AMM-21, TRANS-1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-029"
      },
      {
        "id": "1-050",
        "title": "Oil-absorbent booms and clean equipment beside water",
        "cls": "Adhere",
        "subjectMajor": "Hazards, Water",
        "subjectMinor": "Spill prevention and response, Water quality",
        "activities": "Heavy equipment operation, In-water and in-channel work",
        "species": "",
        "commitments": "AMM-3, COA 11.22, EC-3",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-050"
      },
      {
        "id": "1-012",
        "title": "Operations data sharing with CDFW after QA/QC",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Operations coordination and data, Operations monitoring and studies",
        "activities": "Notifications and reporting, Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.124, COA 7.1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-012"
      },
      {
        "id": "1-007",
        "title": "Operations under the resolved NDDMT and WOMT decision",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Diversion limits and bypass flows, Operations coordination and data",
        "activities": "Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.122",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-007"
      },
      {
        "id": "2-050",
        "title": "Overnight covers and escape ramps for open excavations",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Wildlife entrapment",
        "activities": "Excavation and trenching, Night work",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, Mason's lilaeopsis, San Joaquin kit fox",
        "commitments": "AMM-14, COA 11.14, EC-14, TRANS-1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-050"
      },
      {
        "id": "3-004",
        "title": "Paleontological monitoring during grading and excavation",
        "cls": "Monitor",
        "subjectMajor": "Cultural resources",
        "subjectMinor": "Paleontological resources",
        "activities": "Compliance monitoring and inspections, Excavation and trenching, Ground disturbance and grading",
        "species": "",
        "commitments": "PALEO-1a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-004"
      },
      {
        "id": "3-003",
        "title": "Paleontological survey of sensitive geologic units",
        "cls": "Monitor",
        "subjectMajor": "Cultural resources",
        "subjectMinor": "Paleontological resources",
        "activities": "Excavation and trenching, Ground disturbance and grading, Surveys and habitat assessments",
        "species": "",
        "commitments": "PALEO-1a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-003"
      },
      {
        "id": "2-007",
        "title": "Passive relocation window and conditions",
        "cls": "Adhere",
        "subjectMajor": "Birds",
        "subjectMinor": "Burrowing owl",
        "activities": "Burrow and roost exclusion",
        "species": "Burrowing owl",
        "commitments": "BIO-40, COA 11.111, COA 11.114, COA 11.117, COA 11.119",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-007"
      },
      {
        "id": "1-070",
        "title": "Permitted erosion control materials",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Water",
        "subjectMinor": "Erosion and sediment control, Invasive species, Wildlife entrapment",
        "activities": "Ground disturbance and grading, Restoration and planting",
        "species": "",
        "commitments": "AMM-14, AMM-17, AMM-4a, BIO-2b, COA 11.27, COA 11.28, EC-14, EC-4a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-070"
      },
      {
        "id": "4-073",
        "title": "Permitted fisheries biologist leading fish rescue",
        "cls": "Roster",
        "subjectMajor": "Fish, People and qualifications",
        "subjectMinor": "Designated biologists and monitors, Fish rescue and salvage",
        "activities": "Dewatering and fish isolation, Training and personnel qualification, Wildlife capture, handling and relocation",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AQUA-1c, COA 10.22, COA 11.35",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-073"
      },
      {
        "id": "2-080",
        "title": "Personnel conduct inside nest and colony buffers",
        "cls": "Adhere",
        "subjectMajor": "Birds",
        "subjectMinor": "Nesting birds",
        "activities": "Geotechnical investigations and drilling, Vehicle travel on site",
        "species": "Swainson's hawk, Tricolored blackbird",
        "commitments": "COA 11.74, COA 11.78, COA 11.89",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-080"
      },
      {
        "id": "1-055",
        "title": "Pesticide and herbicide use near aquatic habitat",
        "cls": "Adhere",
        "subjectMajor": "Hazards, Water",
        "subjectMinor": "Pesticides and rodenticides, Water quality",
        "activities": "Pesticide and herbicide application",
        "species": "",
        "commitments": "CMP-22b, COA 11.4",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-055"
      },
      {
        "id": "1-061",
        "title": "Pesticide, herbicide and fertilizer approval",
        "cls": "Adhere",
        "subjectMajor": "Hazards",
        "subjectMinor": "Pesticides and rodenticides",
        "activities": "Pesticide and herbicide application, Restoration and planting",
        "species": "",
        "commitments": "COA 11.4, COA 11.6",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-061"
      },
      {
        "id": "1-090",
        "title": "Pets, firearms and campfires in the work area",
        "cls": "Adhere",
        "subjectMajor": "Site conduct",
        "subjectMinor": "Pets, firearms and campfires",
        "activities": "Staging and laydown, Vehicle travel on site",
        "species": "",
        "commitments": "AMM-14, AMM-17, BIO-2b, COA 11.20, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-090"
      },
      {
        "id": "3-024",
        "title": "pH and turbidity sampling during qualifying rain",
        "cls": "Monitor",
        "subjectMajor": "Water",
        "subjectMinor": "Stormwater and discharges, Water quality",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "",
        "commitments": "AMM-4b, EC-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-024"
      },
      {
        "id": "1-010",
        "title": "Phase 1 diversion test limits",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Diversion limits and bypass flows",
        "activities": "Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.121",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-010"
      },
      {
        "id": "1-104",
        "title": "Phase Authorization before Phase Covered Activities",
        "cls": "Adhere",
        "subjectMajor": "Agency reporting and approvals",
        "subjectMinor": "Agency approvals",
        "activities": "Ground disturbance and grading",
        "species": "",
        "commitments": "COA-6",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-104"
      },
      {
        "id": "3-058",
        "title": "Photo station per temporarily impacted habitat area",
        "cls": "Monitor",
        "subjectMajor": "Habitat protection, Mitigation and restoration",
        "subjectMinor": "Habitat impact tracking, Restoration",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "",
        "commitments": "COA 10.6",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-058"
      },
      {
        "id": "1-026",
        "title": "Pile driver shrouds and noise source enclosures",
        "cls": "Adhere",
        "subjectMajor": "Noise and vibration",
        "subjectMinor": "Noise",
        "activities": "Heavy equipment operation, Pile driving",
        "species": "",
        "commitments": "AMM-21, NOI-1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-026"
      },
      {
        "id": "1-021",
        "title": "Pile driving and local-road hauling hours",
        "cls": "Adhere",
        "subjectMajor": "Noise and vibration, Site conduct",
        "subjectMinor": "Noise, Work hours",
        "activities": "Hauling and deliveries, Pile driving",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AMM-21, AMM-26, AQUA-1a, NOI-1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-021"
      },
      {
        "id": "2-099",
        "title": "Plant habitat restoration ratio and pollinator revegetation",
        "cls": "Adhere",
        "subjectMajor": "Mitigation and restoration, Plants and invertebrates",
        "subjectMinor": "Bumble bees and monarchs, Restoration, Special-status plants",
        "activities": "Restoration and planting",
        "species": "Crotch bumble bee, Monarch butterfly",
        "commitments": "BIO-21, CM 6.3.2.12, CMP-9",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-099"
      },
      {
        "id": "1-112",
        "title": "Pole and line siting away from habitat",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Mitigation and restoration, Site conduct",
        "subjectMinor": "Agricultural land, Facility design and siting, Habitat avoidance and work footprint",
        "activities": "Transmission and power line work",
        "species": "",
        "commitments": "AMM-22, BIO-2c, COA 11.17",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-112"
      },
      {
        "id": "1-019",
        "title": "Portable light wattage, height and screening near residents",
        "cls": "Adhere",
        "subjectMajor": "Lighting",
        "subjectMinor": "Lighting near residences and recreation",
        "activities": "Night work",
        "species": "",
        "commitments": "AES-4a, AES-4b, AMM-19",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-019"
      },
      {
        "id": "3-049",
        "title": "Portable toilet containment and leak inspection",
        "cls": "Monitor",
        "subjectMajor": "Water",
        "subjectMinor": "Stormwater and discharges",
        "activities": "Compliance monitoring and inspections, Waste and trash handling",
        "species": "",
        "commitments": "AMM-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-049"
      },
      {
        "id": "2-044",
        "title": "Post-survey mowing window in flagged snake habitat",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Habitat protection",
        "subjectMinor": "Giant garter snake, Vegetation removal",
        "activities": "Site clearing and vegetation removal, Surveys and habitat assessments",
        "species": "Giant garter snake",
        "commitments": "COA 11.57",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-044"
      },
      {
        "id": "3-075",
        "title": "Pre-eviction bat survey and tree examination",
        "cls": "Monitor",
        "subjectMajor": "Mammals",
        "subjectMinor": "Bats",
        "activities": "Demolition, Site clearing and vegetation removal, Surveys and habitat assessments",
        "species": "",
        "commitments": "BIO-45b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-075"
      },
      {
        "id": "1-108",
        "title": "Pre-season approval for work in GGS habitat",
        "cls": "Adhere",
        "subjectMajor": "Agency reporting and approvals, Amphibians and reptiles",
        "subjectMinor": "Agency approvals, Giant garter snake",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal",
        "species": "Giant garter snake",
        "commitments": "COA 11.59",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-108"
      },
      {
        "id": "3-088",
        "title": "Pre-start survey series near vireo and tern habitat",
        "cls": "Monitor",
        "subjectMajor": "Birds, Noise and vibration",
        "subjectMinor": "Nesting birds, Noise",
        "activities": "Heavy equipment operation, Pile driving, Surveys and habitat assessments",
        "species": "California least tern, Least Bell's vireo, Yellow-billed cuckoo",
        "commitments": "BIO-31, BIO-34, BIO-42, CM 6.3.2.2, CM 6.3.2.3, CM 6.3.2.4",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-088"
      },
      {
        "id": "3-010",
        "title": "Pre-storm and post-storm SWPPP inspection",
        "cls": "Monitor",
        "subjectMajor": "Water",
        "subjectMinor": "Erosion and sediment control, Stormwater and discharges",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "",
        "commitments": "AMM-4b, EC-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-010"
      },
      {
        "id": "3-014a",
        "title": "Pre-workday ESA stake and wire inspection",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles, Habitat protection",
        "subjectMinor": "Exclusion fencing and ESAs, Giant garter snake",
        "activities": "Access road and route construction, Compliance monitoring and inspections, Exclusion fencing and flagging installation",
        "species": "Giant garter snake",
        "commitments": "COA 11.10, COA 11.54",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-014a"
      },
      {
        "id": "3-083",
        "title": "Preconstruction and daily clearance surveys",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles",
        "subjectMinor": "Amphibians",
        "activities": "Exclusion fencing and flagging installation, Ground disturbance and grading, Site clearing and vegetation removal, Surveys and habitat assessments",
        "species": "California glossy snake, California red-legged frog, California tiger salamander, Coast horned lizard, Giant garter snake, Northern California legless lizard, Pond turtle, San Joaquin coachwhip, Western spadefoot",
        "commitments": "BIO-22a, BIO-23, BIO-24a, BIO-25, BIO-26, BIO-30, CM 6.3.2.10, CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6, CM 6.3.2.7, COA 11.42, COA 11.56",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-083"
      },
      {
        "id": "3-098",
        "title": "Preconstruction nest, colony and roost surveys by radius",
        "cls": "Monitor",
        "subjectMajor": "Birds, Mammals",
        "subjectMinor": "Bats, Nesting birds",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal, Surveys and habitat assessments",
        "species": "Golden eagle, Sandhill crane, Swainson's hawk, Tricolored blackbird, White-tailed kite",
        "commitments": "BIO-33, BIO-36a, BIO-36b, BIO-37, BIO-39, BIO-44, COA 11.71, COA 11.77, COA 11.84",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-098"
      },
      {
        "id": "3-089",
        "title": "Preconstruction nesting bird, rookery, rail and swallow surveys",
        "cls": "Monitor",
        "subjectMajor": "Birds",
        "subjectMinor": "Nesting birds",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal, Surveys and habitat assessments",
        "species": "Bank swallow, California black rail, Heron and egret rookeries",
        "commitments": "BIO-32, BIO-35, BIO-36a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-089"
      },
      {
        "id": "3-093",
        "title": "Preconstruction survey before maintenance when required",
        "cls": "Monitor",
        "subjectMajor": "Site conduct",
        "subjectMinor": "Compliance inspections and records",
        "activities": "Facility operations and maintenance, Surveys and habitat assessments",
        "species": "",
        "commitments": "AMM-17, BIO-2b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-093"
      },
      {
        "id": "1-084",
        "title": "Predatory fish and bullfrog exclusion near CTS habitat",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Water",
        "subjectMinor": "Amphibians, Invasive species",
        "activities": "Restoration and planting, Wildlife capture, handling and relocation",
        "species": "California tiger salamander",
        "commitments": "11.53, COA 11.19, COA 11.53",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-084"
      },
      {
        "id": "2-004",
        "title": "Preservation and delivery of dead covered species",
        "cls": "Adhere",
        "subjectMajor": "Agency reporting and approvals, Habitat protection",
        "subjectMinor": "Take and injury reporting, Wildlife encounters and handling",
        "activities": "Notifications and reporting, Wildlife capture, handling and relocation",
        "species": "California tiger salamander, Chinook salmon, Delta smelt, Giant garter snake, Longfin smelt, White sturgeon",
        "commitments": "AQUA-1c, COA 11.103, COA 11.35, COA 11.52, COA 11.68",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-004"
      },
      {
        "id": "4-020",
        "title": "Projected impact exceedance notice to CDFW",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Habitat protection",
        "subjectMinor": "Habitat impact tracking, Non-compliance reporting",
        "activities": "Compliance monitoring and inspections, Notifications and reporting",
        "species": "",
        "commitments": "COA 10.9",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-020"
      },
      {
        "id": "2-057",
        "title": "Protection of built-environment resources under the BETP",
        "cls": "Adhere",
        "subjectMajor": "Cultural resources",
        "subjectMinor": "Cultural resources",
        "activities": "Demolition, Exclusion fencing and flagging installation, Facility operations and maintenance",
        "species": "",
        "commitments": "CUL-1b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-057"
      },
      {
        "id": "3-081",
        "title": "Protocol vernal pool shrimp surveys",
        "cls": "Monitor",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Vernal pools",
        "activities": "Ground disturbance and grading, Surveys and habitat assessments",
        "species": "Vernal pool fairy shrimp, Vernal pool tadpole shrimp",
        "commitments": "BIO-14, CM 6.3.2.9",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-081"
      },
      {
        "id": "2-063",
        "title": "Pump screens and turtle relocation during active-season dewatering",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Water",
        "subjectMinor": "Dewatering, Pond turtles and other reptiles",
        "activities": "Dewatering and fish isolation, Wildlife capture, handling and relocation",
        "species": "Pond turtle",
        "commitments": "CM 6.3.2.10",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-063"
      },
      {
        "id": "1-080",
        "title": "Pump shutdown for a snake at the screen",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Water",
        "subjectMinor": "Dewatering, Giant garter snake",
        "activities": "Dewatering and fish isolation",
        "species": "Giant garter snake",
        "commitments": "COA 11.61",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-080"
      },
      {
        "id": "1-064",
        "title": "Qualified cleanup of fuel and hazardous spills",
        "cls": "Adhere",
        "subjectMajor": "Hazards",
        "subjectMinor": "Spill prevention and response",
        "activities": "Hazardous materials handling and storage, Refueling and equipment maintenance",
        "species": "",
        "commitments": "COA 9.14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-064"
      },
      {
        "id": "4-064",
        "title": "Qualified SWPPP Practitioner supervision",
        "cls": "Roster",
        "subjectMajor": "People and qualifications, Water",
        "subjectMinor": "Erosion and sediment control, Qualified specialists, Stormwater and discharges",
        "activities": "Compliance monitoring and inspections, Training and personnel qualification",
        "species": "",
        "commitments": "AMM-4b, EC-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-064"
      },
      {
        "id": "2-055b",
        "title": "Quiet Zone signage near residences",
        "cls": "Adhere",
        "subjectMajor": "Noise and vibration",
        "subjectMinor": "Noise",
        "activities": "Hauling and deliveries, Heavy equipment operation",
        "species": "",
        "commitments": "AMM-21, NOI-1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-055b"
      },
      {
        "id": "2-020",
        "title": "Rain and forecast limits for work near water",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles",
        "subjectMinor": "Giant garter snake",
        "activities": "Ground disturbance and grading, In-water and in-channel work",
        "species": "Giant garter snake",
        "commitments": "COA 11.13, COA 11.27, COA 11.58",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-020"
      },
      {
        "id": "2-019",
        "title": "Rain shutdown for clearing in amphibian habitat",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles",
        "subjectMinor": "Amphibians",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal",
        "species": "California red-legged frog, California tiger salamander, Western spadefoot",
        "commitments": "BIO-22a, BIO-23, BIO-24a, CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6, COA 11.45",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-019"
      },
      {
        "id": "2-025",
        "title": "Raptor nest tree work window and start timing",
        "cls": "Adhere",
        "subjectMajor": "Birds",
        "subjectMinor": "Nesting birds",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal",
        "species": "Swainson's hawk, White-tailed kite",
        "commitments": "BIO-36b, BIO-39, COA 11.70, COA 11.72, COA 11.74, COA 11.78",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-025"
      },
      {
        "id": "3-059",
        "title": "Real-time disturbance acreage tracking per Covered Species",
        "cls": "Monitor",
        "subjectMajor": "Habitat protection, Mitigation and restoration",
        "subjectMinor": "Habitat impact tracking, Mitigation lands",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "",
        "commitments": "COA 10.3, COA 10.6",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-059"
      },
      {
        "id": "3-035b",
        "title": "Real-time station data feed to CDFW",
        "cls": "Monitor",
        "subjectMajor": "Water operations",
        "subjectMinor": "Operations coordination and data",
        "activities": "Notifications and reporting, Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 10.20",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-035b"
      },
      {
        "id": "3-079",
        "title": "Recipient site assessment and evicted owl monitoring",
        "cls": "Monitor",
        "subjectMajor": "Birds",
        "subjectMinor": "Burrowing owl",
        "activities": "Burrow and roost exclusion, Compliance monitoring and inspections, Surveys and habitat assessments",
        "species": "Burrowing owl",
        "commitments": "COA 11.114, COA 11.117",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-079"
      },
      {
        "id": "1-048",
        "title": "Refueling and servicing setback from water",
        "cls": "Adhere",
        "subjectMajor": "Hazards, Water",
        "subjectMinor": "Refueling and equipment servicing, Spill prevention and response, Water quality",
        "activities": "Refueling and equipment maintenance",
        "species": "",
        "commitments": "AMM-2, AMM-3, AMM-4b, COA 9.13, EC-2, EC-3, EC-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-048"
      },
      {
        "id": "2-005",
        "title": "Relocation and translocation plan procedures",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Wildlife encounters and handling",
        "activities": "Wildlife capture, handling and relocation",
        "species": "Mason's lilaeopsis, Swainson's hawk, Tricolored blackbird",
        "commitments": "COA 11.104, COA 11.106, COA 11.108, COA 11.80, COA 11.92",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-005"
      },
      {
        "id": "2-066",
        "title": "Removal of buffer delineation materials at completion",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Mitigation and restoration",
        "subjectMinor": "Exclusion fencing and ESAs, Restoration",
        "activities": "Exclusion fencing and flagging installation, Restoration and planting",
        "species": "",
        "commitments": "COA 11.114, COA 11.72",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-066"
      },
      {
        "id": "4-021",
        "title": "Reoccupied blocked burrow notice to CDFW",
        "cls": "Notify",
        "subjectMajor": "Birds",
        "subjectMinor": "Burrowing owl",
        "activities": "Burrow and roost exclusion, Compliance monitoring and inspections, Notifications and reporting",
        "species": "Burrowing owl",
        "commitments": "COA 11.117",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-021"
      },
      {
        "id": "2-017",
        "title": "Repair of project-caused damage to historic resources",
        "cls": "Adhere",
        "subjectMajor": "Cultural resources",
        "subjectMinor": "Cultural resources",
        "activities": "Demolition, Ground disturbance and grading",
        "species": "",
        "commitments": "CUL-1b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-017"
      },
      {
        "id": "3-084",
        "title": "Repeat clearance survey after a lapse or repair",
        "cls": "Monitor",
        "subjectMajor": "Amphibians and reptiles, Site conduct",
        "subjectMinor": "Amphibians, Compliance inspections and records",
        "activities": "Exclusion fencing and flagging installation, Ground disturbance and grading, Surveys and habitat assessments",
        "species": "Burrowing owl, California red-legged frog, California tiger salamander, Crotch bumble bee, Giant garter snake, Monarch butterfly, Pond turtle, Swainson's hawk, Tricolored blackbird, Western spadefoot, White-tailed kite",
        "commitments": "BIO-21, BIO-22a, BIO-23, BIO-24a, BIO-25, BIO-26, BIO-30, BIO-36b, BIO-39, CM 6.3.2.12, CM 6.3.2.7, COA 11.100, COA 11.111, COA 11.43, COA 11.56, COA 11.62, COA 11.84, COA 11.99",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-084"
      },
      {
        "id": "2-104",
        "title": "Replacement of agricultural infrastructure before service disruption",
        "cls": "Adhere",
        "subjectMajor": "Mitigation and restoration",
        "subjectMinor": "Agricultural land",
        "activities": "Excavation and trenching, Ground disturbance and grading",
        "species": "",
        "commitments": "AG-3",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-104"
      },
      {
        "id": "1-107",
        "title": "Replacement roost before bat eviction",
        "cls": "Adhere",
        "subjectMajor": "Agency reporting and approvals, Mammals",
        "subjectMinor": "Agency approvals, Bats",
        "activities": "Burrow and roost exclusion, Demolition, Site clearing and vegetation removal",
        "species": "",
        "commitments": "BIO-45b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-107"
      },
      {
        "id": "4-023",
        "title": "Resident relocation assistance on noise exceedance",
        "cls": "Notify",
        "subjectMajor": "Noise and vibration, Site conduct",
        "subjectMinor": "Noise, Traffic and community coordination",
        "activities": "Night work, Notifications and reporting, Pile driving",
        "species": "",
        "commitments": "NOI-1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-023"
      },
      {
        "id": "3-055",
        "title": "Restoration area monitoring against success criteria",
        "cls": "Monitor",
        "subjectMajor": "Mitigation and restoration",
        "subjectMinor": "Restoration",
        "activities": "Compliance monitoring and inspections, Restoration and planting",
        "species": "Giant garter snake",
        "commitments": "COA 11.66, COA 12.3",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-055"
      },
      {
        "id": "2-105",
        "title": "Restoration or compensation for temporarily disturbed agricultural areas",
        "cls": "Adhere",
        "subjectMajor": "Mitigation and restoration",
        "subjectMinor": "Agricultural land",
        "activities": "Restoration and planting",
        "species": "",
        "commitments": "BIO-2c",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-105"
      },
      {
        "id": "1-105",
        "title": "Restoration Plan approval before temporary-impact activities",
        "cls": "Adhere",
        "subjectMajor": "Agency reporting and approvals, Mitigation and restoration",
        "subjectMinor": "Agency approvals, Restoration",
        "activities": "Ground disturbance and grading, Restoration and planting",
        "species": "",
        "commitments": "COA 12.3",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-105"
      },
      {
        "id": "2-091",
        "title": "Restoration survivorship and invasive cover thresholds",
        "cls": "Adhere",
        "subjectMajor": "Mitigation and restoration, Water",
        "subjectMinor": "Invasive species, Restoration",
        "activities": "Compliance monitoring and inspections, Restoration and planting",
        "species": "",
        "commitments": "COA 11.19, COA 12.3",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-091"
      },
      {
        "id": "1-113",
        "title": "Riparian connectivity and canopy retention",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Site conduct",
        "subjectMinor": "Facility design and siting, Vegetation removal",
        "activities": "In-water and in-channel work, Site clearing and vegetation removal",
        "species": "",
        "commitments": "BIO-53",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-113"
      },
      {
        "id": "1-054",
        "title": "Rodenticide, poison and broadcast baiting ban",
        "cls": "Adhere",
        "subjectMajor": "Hazards, Mitigation and restoration",
        "subjectMinor": "Mitigation lands, Pesticides and rodenticides",
        "activities": "Pesticide and herbicide application",
        "species": "Burrowing owl, California tiger salamander, Giant garter snake, San Joaquin kit fox, Swainson's hawk",
        "commitments": "AMM-14, AMM-17, BIO-2b, CMP-19b, COA 11.5, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-054"
      },
      {
        "id": "4-013",
        "title": "Roost disruption contact with CDFW",
        "cls": "Notify",
        "subjectMajor": "Birds, Noise and vibration",
        "subjectMinor": "Nesting birds, Noise",
        "activities": "Compliance monitoring and inspections, Notifications and reporting",
        "species": "Tricolored blackbird",
        "commitments": "COA 11.88",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-013"
      },
      {
        "id": "2-030",
        "title": "Roost season limits on surface work and night activity",
        "cls": "Adhere",
        "subjectMajor": "Birds, Site conduct",
        "subjectMinor": "Sandhill crane, Work hours",
        "activities": "Ground disturbance and grading, Night work",
        "species": "Sandhill crane",
        "commitments": "BIO-33",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-030"
      },
      {
        "id": "1-052",
        "title": "Safety data sheets and hazardous waste holding limit",
        "cls": "Adhere",
        "subjectMajor": "Hazards",
        "subjectMinor": "Hazardous materials",
        "activities": "Hazardous materials handling and storage, Waste and trash handling",
        "species": "",
        "commitments": "AMM-2, COA 11.21, COA 9.14, EC-2",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-052"
      },
      {
        "id": "3-014b",
        "title": "Scheduled SWPPP site inspection",
        "cls": "Monitor",
        "subjectMajor": "Water",
        "subjectMinor": "Erosion and sediment control, Stormwater and discharges",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "",
        "commitments": "COA 11.25",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-014b"
      },
      {
        "id": "1-004",
        "title": "Seasonal bypass flows below intake C",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Diversion limits and bypass flows",
        "activities": "Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.122",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-004"
      },
      {
        "id": "2-107",
        "title": "Seasonal wetland flooding timing for mosquito avoidance",
        "cls": "Adhere",
        "subjectMajor": "Hazards, Mitigation and restoration",
        "subjectMinor": "Mitigation lands, Standing water and mosquitoes",
        "activities": "Facility operations and maintenance, Restoration and planting",
        "species": "",
        "commitments": "PH-1b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-107"
      },
      {
        "id": "3-036",
        "title": "Sediment and flow monitoring at the north diversion",
        "cls": "Monitor",
        "subjectMajor": "Water, Water operations",
        "subjectMinor": "Operations monitoring and studies, Water quality",
        "activities": "Compliance monitoring and inspections, Water diversions and intake operations",
        "species": "Delta smelt",
        "commitments": "EC-15",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-036"
      },
      {
        "id": "3-027",
        "title": "Sediment, algal bloom and selenium monitoring in operations",
        "cls": "Monitor",
        "subjectMajor": "Water, Water operations",
        "subjectMinor": "Operations monitoring and studies, Water quality",
        "activities": "Compliance monitoring and inspections, Water diversions and intake operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 10.20",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-027"
      },
      {
        "id": "3-017",
        "title": "Site inspection before, during and after rain events",
        "cls": "Monitor",
        "subjectMajor": "Water",
        "subjectMinor": "Erosion and sediment control, Stormwater and discharges",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "",
        "commitments": "COA 11.26",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-017"
      },
      {
        "id": "1-102",
        "title": "Sound abatement plan approval before in-water work",
        "cls": "Adhere",
        "subjectMajor": "Agency reporting and approvals, Noise and vibration, Water",
        "subjectMinor": "Agency approvals, In-water work, Pile driving and underwater sound",
        "activities": "In-water and in-channel work, Pile driving",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "COA 11.33",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-102"
      },
      {
        "id": "1-057",
        "title": "Spark arrestors, hot work and smoking safeguards",
        "cls": "Adhere",
        "subjectMajor": "Hazards",
        "subjectMinor": "Fire prevention",
        "activities": "Heavy equipment operation, Hot work and welding",
        "species": "",
        "commitments": "AMM-5, EC-5",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-057"
      },
      {
        "id": "2-076",
        "title": "Special-status plant buffers",
        "cls": "Adhere",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Special-status plants",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal",
        "species": "Caper-fruited tropidocarpum, Diamond-petaled poppy",
        "commitments": "BIO-2a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-076"
      },
      {
        "id": "4-006",
        "title": "Special-status species take report to all agencies",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals",
        "subjectMinor": "Take and injury reporting",
        "activities": "Notifications and reporting, Wildlife capture, handling and relocation",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, Mason's lilaeopsis",
        "commitments": "AMM-14, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-006"
      },
      {
        "id": "4-059",
        "title": "Species avoidance and buffer training",
        "cls": "Roster",
        "subjectMajor": "Birds, People and qualifications",
        "subjectMinor": "Burrowing owl, Nesting birds, Worker training",
        "activities": "Training and personnel qualification",
        "species": "Burrowing owl, Tricolored blackbird",
        "commitments": "COA 11.109, COA 11.82",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-059"
      },
      {
        "id": "2-015",
        "title": "Species measures in unmapped suitable habitat",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Habitat avoidance and work footprint",
        "activities": "Ground disturbance and grading, Surveys and habitat assessments",
        "species": "",
        "commitments": "COA 10.8",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-015"
      },
      {
        "id": "4-071",
        "title": "Species-expert biologists for sensitive species handling",
        "cls": "Roster",
        "subjectMajor": "Habitat protection, People and qualifications",
        "subjectMinor": "Designated biologists and monitors, Wildlife encounters and handling",
        "activities": "Training and personnel qualification, Wildlife capture, handling and relocation",
        "species": "Burrowing owl, Crotch bumble bee, Mason's lilaeopsis, Swainson's hawk, Tricolored blackbird",
        "commitments": "COA 11.102, COA 11.105, COA 11.108, COA 11.115, COA 11.80, COA 11.92",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-071"
      },
      {
        "id": "1-087",
        "title": "Speed limits on non-public roads and sites",
        "cls": "Adhere",
        "subjectMajor": "Air quality, Birds, Site conduct",
        "subjectMinor": "Burrowing owl, Fugitive dust, Speed limits",
        "activities": "Night work, Vehicle travel on site",
        "species": "",
        "commitments": "11.29, AMM-11, AMM-14, AMM-17, AMM-18, BIO-22b, BIO-2b, COA 11.11, COA 11.39, COA 11.41, COA 11.55, COA 11.65, EC-11, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-087"
      },
      {
        "id": "2-054",
        "title": "Spill kits at work sites and aboard vessels",
        "cls": "Adhere",
        "subjectMajor": "Hazards, Water",
        "subjectMinor": "Barge and vessel operations, Spill prevention and response",
        "activities": "Barge and vessel operations, Hazardous materials handling and storage, Refueling and equipment maintenance",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AMM-2, AMM-27, AQUA-1b, COA 11.21, COA 11.22, COA 11.36, EC-2, EC-3",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-054"
      },
      {
        "id": "4-015",
        "title": "Spill report to CDFW OSPR and DWR",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Hazards",
        "subjectMinor": "Hazardous materials, Non-compliance reporting, Spill prevention and response",
        "activities": "Hazardous materials handling and storage, Notifications and reporting, Refueling and equipment maintenance",
        "species": "",
        "commitments": "AMM-27, AMM-3, AQUA-1b, COA 11.22, COA 11.36, EC-3",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-015"
      },
      {
        "id": "1-081",
        "title": "Spoils, RTM and dredged material placement",
        "cls": "Adhere",
        "subjectMajor": "Water",
        "subjectMinor": "Erosion and sediment control, Water quality",
        "activities": "In-water and in-channel work, Stockpiling and spoils handling",
        "species": "",
        "commitments": "COA 11.16, COA 11.60",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-081"
      },
      {
        "id": "1-035",
        "title": "Stabilization of inactive disturbed areas",
        "cls": "Adhere",
        "subjectMajor": "Air quality, Water",
        "subjectMinor": "Erosion and sediment control, Fugitive dust",
        "activities": "Ground disturbance and grading, Stockpiling and spoils handling",
        "species": "",
        "commitments": "11.29, AMM-11, AMM-4b, COA 11.29, COA 12.3, EC-11, EC-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-035"
      },
      {
        "id": "2-053",
        "title": "Stabilized entrances, tire wash and wind breaks at exits",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Fugitive dust",
        "activities": "Access road and route construction, Hauling and deliveries, Vehicle travel on site",
        "species": "",
        "commitments": "11.29, AMM-11, AMM-4a, COA 11.29, EC-11, EC-4a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-053"
      },
      {
        "id": "2-071",
        "title": "Staging and parking setback from covered species aquatic habitat",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Site conduct",
        "subjectMinor": "Access routes and parking, Habitat avoidance and work footprint",
        "activities": "Staging and laydown",
        "species": "California least tern, Giant garter snake, Least Bell's vireo, Pond turtle, Yellow-billed cuckoo",
        "commitments": "BIO-30, BIO-31, BIO-42, CM 6.3.2.10, CM 6.3.2.2, CM 6.3.2.3, CM 6.3.2.4, CM 6.3.2.7, COA 11.55, COA 9.11",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-071"
      },
      {
        "id": "2-101",
        "title": "Standing water prevention in work areas",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Hazards",
        "subjectMinor": "Standing water and mosquitoes, Wildlife entrapment",
        "activities": "Excavation and trenching, Staging and laydown",
        "species": "",
        "commitments": "PH-1a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-101"
      },
      {
        "id": "4-036",
        "title": "Start-of-work notice to CDFW",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals",
        "subjectMinor": "Schedule notices",
        "activities": "Ground disturbance and grading, Notifications and reporting",
        "species": "",
        "commitments": "COA 10.1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-036"
      },
      {
        "id": "2-109",
        "title": "Staten Island crane use days and flooding",
        "cls": "Adhere",
        "subjectMajor": "Birds, Mitigation and restoration",
        "subjectMinor": "Mitigation lands, Sandhill crane",
        "activities": "Facility operations and maintenance, Restoration and planting",
        "species": "Sandhill crane",
        "commitments": "BIO-33",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-109"
      },
      {
        "id": "1-069",
        "title": "Stockpile placement and stabilization ahead of storms",
        "cls": "Adhere",
        "subjectMajor": "Water",
        "subjectMinor": "Erosion and sediment control, Stormwater and discharges",
        "activities": "Stockpiling and spoils handling",
        "species": "",
        "commitments": "AMM-4a, COA 11.16, EC-4a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-069"
      },
      {
        "id": "2-014",
        "title": "Stop-work and buffer enlargement on nesting bird distress",
        "cls": "Adhere",
        "subjectMajor": "Birds",
        "subjectMinor": "Nesting birds",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "Swainson's hawk, Tricolored blackbird",
        "commitments": "COA 11.75, COA 11.86",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-014"
      },
      {
        "id": "4-027",
        "title": "Stop-work and CDFW notice on new owl presence",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Birds",
        "subjectMinor": "Burrowing owl, Species sightings and CNDDB reporting",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading, Notifications and reporting",
        "species": "Burrowing owl",
        "commitments": "COA 11.114, COA 11.116, COA 11.117",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-027"
      },
      {
        "id": "2-008",
        "title": "Stop-work buffer around a bumble bee nest",
        "cls": "Adhere",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Bumble bees and monarchs",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal",
        "species": "Crotch bumble bee",
        "commitments": "COA 11.102, COA 11.94, COA 11.98",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-008"
      },
      {
        "id": "2-013",
        "title": "Stop-work buffer around an unanticipated cultural or fossil find",
        "cls": "Adhere",
        "subjectMajor": "Cultural resources",
        "subjectMinor": "Cultural resources, Paleontological resources",
        "activities": "Excavation and trenching, Ground disturbance and grading",
        "species": "",
        "commitments": "CUL-3a, CUL-3c, CUL-5, PALEO-1a, TCR-1b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-013"
      },
      {
        "id": "2-001",
        "title": "Stop-work distance around an encountered covered species",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Wildlife encounters and handling",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal, Wildlife capture, handling and relocation",
        "species": "California red-legged frog, California tiger salamander, Giant garter snake, Pond turtle, San Joaquin kit fox, Western spadefoot",
        "commitments": "AMM-14, AMM-17, BIO-22a, BIO-23, BIO-24a, BIO-25, BIO-26, BIO-2b, BIO-30, CM 6.3.2.1, CM 6.3.2.10, CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6, CM 6.3.2.7, COA 11.14, COA 11.15, COA 11.42, COA 11.43, COA 11.48, COA 11.51, COA 11.55, COA 11.56, COA 11.57, COA 11.62, COA 11.63, COA 11.67, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-001"
      },
      {
        "id": "2-016",
        "title": "Stop-work for a tiger salamander aboveground under lights",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Lighting",
        "subjectMinor": "Amphibians, Lighting near habitat and waters",
        "activities": "Night work",
        "species": "California tiger salamander",
        "commitments": "COA 11.47",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-016"
      },
      {
        "id": "2-062",
        "title": "Stop-work near a fence defect or open gate",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Habitat protection",
        "subjectMinor": "Amphibians, Exclusion fencing and ESAs, Giant garter snake",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "California tiger salamander, Giant garter snake",
        "commitments": "COA 11.43, COA 11.62",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-062"
      },
      {
        "id": "1-063",
        "title": "Stop-work on suspected contamination",
        "cls": "Adhere",
        "subjectMajor": "Hazards",
        "subjectMinor": "Hazardous materials",
        "activities": "Dewatering and fish isolation, Excavation and trenching, Ground disturbance and grading",
        "species": "",
        "commitments": "HAZ-2",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-063"
      },
      {
        "id": "4-019",
        "title": "Stormwater NAL exceedance filing with the Water Board",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Water",
        "subjectMinor": "Erosion and sediment control, Non-compliance reporting, Stormwater and discharges",
        "activities": "Compliance monitoring and inspections, Notifications and reporting",
        "species": "",
        "commitments": "AMM-4b, EC-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-019"
      },
      {
        "id": "1-110",
        "title": "Structure paint and low-sheen finishes",
        "cls": "Adhere",
        "subjectMajor": "Site conduct",
        "subjectMinor": "Facility design and siting",
        "activities": "Facility operations and maintenance",
        "species": "",
        "commitments": "AES-1b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-110"
      },
      {
        "id": "1-017",
        "title": "Suisun Marsh Salinity Control Gates additional operating days",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Diversion limits and bypass flows",
        "activities": "Water diversions and intake operations",
        "species": "Delta smelt",
        "commitments": "COA 12.7",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-017"
      },
      {
        "id": "2-081",
        "title": "Suitable tricolored blackbird nesting and roosting habitat avoidance",
        "cls": "Adhere",
        "subjectMajor": "Birds, Habitat protection",
        "subjectMinor": "Habitat avoidance and work footprint, Nesting birds",
        "activities": "Ground disturbance and grading, Staging and laydown",
        "species": "Tricolored blackbird",
        "commitments": "COA 11.85, COA 11.87",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-081"
      },
      {
        "id": "2-021",
        "title": "Sunset shutdown for earthmoving near amphibian habitat",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles, Site conduct",
        "subjectMinor": "Amphibians, Work hours",
        "activities": "Ground disturbance and grading, Night work",
        "species": "California red-legged frog, California tiger salamander, Western spadefoot",
        "commitments": "BIO-22a, BIO-23, BIO-24a, CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6, COA 11.46, COA 11.7",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-021"
      },
      {
        "id": "2-043",
        "title": "Sunset to sunrise shutdown in covered species habitat",
        "cls": "Adhere",
        "subjectMajor": "Site conduct",
        "subjectMinor": "Work hours",
        "activities": "Night work",
        "species": "",
        "commitments": "COA 11.7",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-043"
      },
      {
        "id": "3-078",
        "title": "Supervised debris removal in the overwintering period",
        "cls": "Monitor",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Bumble bees and monarchs",
        "activities": "Compliance monitoring and inspections, Site clearing and vegetation removal, Waste and trash handling",
        "species": "Crotch bumble bee",
        "commitments": "COA 11.95",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-078"
      },
      {
        "id": "1-103",
        "title": "Survey protocol approval before surveys and Covered Activities",
        "cls": "Adhere",
        "subjectMajor": "Agency reporting and approvals",
        "subjectMinor": "Agency approvals",
        "activities": "Surveys and habitat assessments",
        "species": "California tiger salamander, Crotch bumble bee, Giant garter snake, Mason's lilaeopsis, Swainson's hawk, Tricolored blackbird",
        "commitments": "COA 11.38",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-103"
      },
      {
        "id": "4-040",
        "title": "Survey results to CDFW before construction",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Birds, Mammals",
        "subjectMinor": "Burrowing owl, Kit fox and badger dens, Nesting birds, Schedule notices",
        "activities": "Notifications and reporting, Surveys and habitat assessments",
        "species": "Burrowing owl, San Joaquin kit fox, Swainson's hawk, White-tailed kite",
        "commitments": "BIO-36b, BIO-39, BIO-46, CM 6.3.2.1, COA 11.111, COA 11.73, COA 11.77",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-040"
      },
      {
        "id": "3-094",
        "title": "Swainson's hawk nest survey before in-season field investigations",
        "cls": "Monitor",
        "subjectMajor": "Birds",
        "subjectMinor": "Nesting birds",
        "activities": "Geotechnical investigations and drilling, Surveys and habitat assessments",
        "species": "Swainson's hawk",
        "commitments": "COA 11.78",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-094"
      },
      {
        "id": "2-096",
        "title": "Swainson's hawk replacement nest trees",
        "cls": "Adhere",
        "subjectMajor": "Birds, Mitigation and restoration",
        "subjectMinor": "Mitigation lands, Nesting birds",
        "activities": "Restoration and planting",
        "species": "Swainson's hawk",
        "commitments": "CMP-19a, CMP-19b, COA 12.5",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-096"
      },
      {
        "id": "3-060",
        "title": "Swainson's hawk replacement tree monitoring",
        "cls": "Monitor",
        "subjectMajor": "Birds, Mitigation and restoration",
        "subjectMinor": "Nesting birds, Restoration",
        "activities": "Compliance monitoring and inspections, Restoration and planting",
        "species": "Swainson's hawk",
        "commitments": "CMP-19a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-060"
      },
      {
        "id": "1-073",
        "title": "SWPPP amendment at effluent action levels",
        "cls": "Adhere",
        "subjectMajor": "Water",
        "subjectMinor": "Stormwater and discharges, Water quality",
        "activities": "Compliance monitoring and inspections",
        "species": "",
        "commitments": "AMM-4b, EC-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-073"
      },
      {
        "id": "4-001",
        "title": "Take or carcass report to the Designated Biologist",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Habitat protection",
        "subjectMinor": "Take and injury reporting, Wildlife encounters and handling",
        "activities": "Compliance monitoring and inspections, Notifications and reporting, Wildlife capture, handling and relocation",
        "species": "",
        "commitments": "BIO-46, COA 10.16, COA 11.103, COA 11.118, COA 11.52, COA 11.68, COA 11.81, COA 11.93",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-001"
      },
      {
        "id": "4-003",
        "title": "Take or injury contact with the CDFW representative",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals",
        "subjectMinor": "Take and injury reporting",
        "activities": "Notifications and reporting, Wildlife capture, handling and relocation",
        "species": "Burrowing owl, California tiger salamander, Crotch bumble bee, Giant garter snake, Swainson's hawk, Tricolored blackbird",
        "commitments": "COA 11.103, COA 11.118, COA 11.52, COA 11.68, COA 11.81, COA 11.93",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-003"
      },
      {
        "id": "4-008",
        "title": "Take surrogate exceedance notice to NMFS",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Water operations",
        "subjectMinor": "Biological performance criteria, Take and injury reporting",
        "activities": "Compliance monitoring and inspections, Notifications and reporting, Water diversions and intake operations",
        "species": "Chinook salmon",
        "commitments": "TC-4a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-008"
      },
      {
        "id": "1-014",
        "title": "Telemetry and sonar equipment upkeep through Phase 2",
        "cls": "Adhere",
        "subjectMajor": "Water operations",
        "subjectMinor": "Operations coordination and data, Operations monitoring and studies",
        "activities": "Facility operations and maintenance, Water diversions and intake operations",
        "species": "",
        "commitments": "COA 10.19",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-014"
      },
      {
        "id": "3-033",
        "title": "Telemetry tagging of Chinook and sturgeon",
        "cls": "Monitor",
        "subjectMajor": "Fish, Water operations",
        "subjectMinor": "Fish rescue and salvage, Operations monitoring and studies",
        "activities": "Compliance monitoring and inspections, Water diversions and intake operations, Wildlife capture, handling and relocation",
        "species": "Chinook salmon, White sturgeon",
        "commitments": "COA 10.19",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-033"
      },
      {
        "id": "2-103",
        "title": "Temporary fill and refuse removal at completion",
        "cls": "Adhere",
        "subjectMajor": "Mitigation and restoration",
        "subjectMinor": "Restoration",
        "activities": "Restoration and planting, Waste and trash handling",
        "species": "",
        "commitments": "COA 9.17",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-103"
      },
      {
        "id": "2-090",
        "title": "Temporary impact restoration",
        "cls": "Adhere",
        "subjectMajor": "Mitigation and restoration",
        "subjectMinor": "Restoration",
        "activities": "Geotechnical investigations and drilling, Restoration and planting",
        "species": "",
        "commitments": "11.29, AMM-11, AMM-14, AMM-4a, COA 11.29, COA 11.41, COA 11.65, COA 12.2, COA 12.3, EC-11, EC-14, EC-4a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-090"
      },
      {
        "id": "1-083",
        "title": "Tidal habitat methylation design and mercury adaptive management",
        "cls": "Adhere",
        "subjectMajor": "Mitigation and restoration, Water",
        "subjectMinor": "Mitigation lands, Water quality",
        "activities": "In-water and in-channel work, Restoration and planting",
        "species": "",
        "commitments": "AMM-23, WQ-6",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-083"
      },
      {
        "id": "2-038",
        "title": "Tiger salamander breeding habitat buffer south of Byron Highway",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles",
        "subjectMinor": "Amphibians",
        "activities": "Ground disturbance and grading",
        "species": "California tiger salamander",
        "commitments": "BIO-22a, CM 6.3.2.6, COA 11.40",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-038"
      },
      {
        "id": "3-048",
        "title": "Tire inflation check log",
        "cls": "Monitor",
        "subjectMajor": "Air quality",
        "subjectMinor": "Greenhouse gas and zero-emission fleet",
        "activities": "Compliance monitoring and inspections, Hauling and deliveries, Vehicle travel on site",
        "species": "",
        "commitments": "AMM-13, EC-13",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-048"
      },
      {
        "id": "1-032",
        "title": "Track-out sweeping on public roads",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Fugitive dust",
        "activities": "Hauling and deliveries, Vehicle travel on site",
        "species": "",
        "commitments": "11.29, AMM-11, COA 11.29, EC-11",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-032"
      },
      {
        "id": "1-094",
        "title": "Traffic management plan measures",
        "cls": "Adhere",
        "subjectMajor": "Air quality, Site conduct",
        "subjectMinor": "Greenhouse gas and zero-emission fleet, Traffic and community coordination",
        "activities": "Hauling and deliveries, Night work, Vehicle travel on site",
        "species": "",
        "commitments": "TRANS-1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-094"
      },
      {
        "id": "4-057",
        "title": "Trained spill responders on site",
        "cls": "Roster",
        "subjectMajor": "Hazards, People and qualifications",
        "subjectMinor": "Spill prevention and response, Worker training",
        "activities": "Hazardous materials handling and storage, Refueling and equipment maintenance, Training and personnel qualification",
        "species": "",
        "commitments": "AMM-3, AMM-4b, COA 11.22, COA 11.25, EC-3, EC-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-057"
      },
      {
        "id": "2-069",
        "title": "Travel and work on existing roads and disturbed ground",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Site conduct",
        "subjectMinor": "Access routes and parking, Habitat avoidance and work footprint",
        "activities": "Access road and route construction, Vehicle travel on site",
        "species": "",
        "commitments": "AMM-14, CM 6.3.2.7, COA 11.109, COA 11.55, COA 11.69, COA 11.94, COA 9.11",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-069"
      },
      {
        "id": "1-097",
        "title": "Tribal monitoring offer for ground disturbance and surveys",
        "cls": "Adhere",
        "subjectMajor": "Cultural resources",
        "subjectMinor": "Cultural resources, Tribal cultural resources",
        "activities": "Ground disturbance and grading, Surveys and habitat assessments",
        "species": "",
        "commitments": "TCR-1a, TCR-1b, TCR-1c",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-097"
      },
      {
        "id": "3-068",
        "title": "Tricolored blackbird colony and roost monitoring",
        "cls": "Monitor",
        "subjectMajor": "Birds",
        "subjectMinor": "Nesting birds",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "Tricolored blackbird",
        "commitments": "BIO-44, COA 11.86, COA 11.88",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-068"
      },
      {
        "id": "3-090",
        "title": "Tricolored blackbird habitat assessment and breeding-season surveys",
        "cls": "Monitor",
        "subjectMajor": "Birds",
        "subjectMinor": "Nesting birds",
        "activities": "Ground disturbance and grading, Surveys and habitat assessments",
        "species": "Tricolored blackbird",
        "commitments": "BIO-44, COA 11.83, COA 11.84",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-090"
      },
      {
        "id": "2-098",
        "title": "Tricolored blackbird nesting stand upkeep on mitigation lands",
        "cls": "Adhere",
        "subjectMajor": "Birds, Mitigation and restoration",
        "subjectMinor": "Mitigation lands, Nesting birds",
        "activities": "Facility operations and maintenance, Restoration and planting, Site clearing and vegetation removal",
        "species": "Tricolored blackbird",
        "commitments": "CMP-22a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-098"
      },
      {
        "id": "4-052",
        "title": "Tug and barge operator environmental training",
        "cls": "Roster",
        "subjectMajor": "People and qualifications, Water",
        "subjectMinor": "Barge and vessel operations, Qualified specialists, Worker training",
        "activities": "Barge and vessel operations, Training and personnel qualification",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AQUA-1b, COA 11.36",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-052"
      },
      {
        "id": "3-012",
        "title": "Twice-daily one-way burrow door check",
        "cls": "Monitor",
        "subjectMajor": "Birds",
        "subjectMinor": "Burrowing owl",
        "activities": "Burrow and roost exclusion, Compliance monitoring and inspections",
        "species": "Burrowing owl",
        "commitments": "BIO-40, COA 11.117",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-012"
      },
      {
        "id": "3-095",
        "title": "Two-night emergence surveys with acoustic monitoring",
        "cls": "Monitor",
        "subjectMajor": "Mammals",
        "subjectMinor": "Bats",
        "activities": "Site clearing and vegetation removal, Surveys and habitat assessments",
        "species": "",
        "commitments": "BIO-45b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-095"
      },
      {
        "id": "3-042",
        "title": "Under-vehicle and stockpile check before moving",
        "cls": "Monitor",
        "subjectMajor": "Habitat protection",
        "subjectMinor": "Wildlife entrapment",
        "activities": "Compliance monitoring and inspections, Stockpiling and spoils handling, Vehicle travel on site",
        "species": "California glossy snake, Coast horned lizard, Giant garter snake, Northern California legless lizard, San Joaquin coachwhip",
        "commitments": "BIO-26, BIO-30, COA 9.12",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-042"
      },
      {
        "id": "1-022",
        "title": "Underwater pile-driving sound thresholds",
        "cls": "Adhere",
        "subjectMajor": "Fish, Noise and vibration",
        "subjectMinor": "Fish rescue and salvage, Pile driving and underwater sound",
        "activities": "In-water and in-channel work, Pile driving",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AMM-26, AQUA-1a, COA 11.31, COA 11.33",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-022"
      },
      {
        "id": "1-033",
        "title": "Unpaved route and stockpile surface treatment",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Fugitive dust",
        "activities": "Access road and route construction, Stockpiling and spoils handling, Vehicle travel on site",
        "species": "",
        "commitments": "11.29, AMM-11, COA 11.29, EC-11",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-033"
      },
      {
        "id": "1-093",
        "title": "Unrestricted agency and biologist site access",
        "cls": "Adhere",
        "subjectMajor": "People and qualifications, Site conduct",
        "subjectMinor": "Agency and biologist access, Designated biologists and monitors",
        "activities": "Compliance monitoring and inspections",
        "species": "",
        "commitments": "AQUA-1c, BIO-22a, CM 6.3.2.6, COA 11.35, COA 9.15, COA 9.3",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-093"
      },
      {
        "id": "2-024",
        "title": "Upland work start before pond turtle nesting season",
        "cls": "Adhere",
        "subjectMajor": "Amphibians and reptiles",
        "subjectMinor": "Pond turtles and other reptiles",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal",
        "species": "Pond turtle",
        "commitments": "BIO-25, CM 6.3.2.10",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-024"
      },
      {
        "id": "3-056",
        "title": "Vegetation and bank erosion mapping at barge sites",
        "cls": "Monitor",
        "subjectMajor": "Water",
        "subjectMinor": "Barge and vessel operations, Erosion and sediment control",
        "activities": "Barge and vessel operations, Surveys and habitat assessments",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AQUA-1b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-056"
      },
      {
        "id": "2-034",
        "title": "Vegetation removal and elderberry trimming windows",
        "cls": "Adhere",
        "subjectMajor": "Birds, Habitat protection, Plants and invertebrates",
        "subjectMinor": "Elderberry shrubs, Nesting birds, Vegetation removal",
        "activities": "Site clearing and vegetation removal",
        "species": "Heron and egret rookeries, Valley elderberry longhorn beetle",
        "commitments": "BIO-18, BIO-35, BIO-36a, CM 6.3.2.8, COA 11.18",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-034"
      },
      {
        "id": "2-083",
        "title": "Vegetation removal clearance near vireo and cuckoo habitat",
        "cls": "Adhere",
        "subjectMajor": "Birds, Habitat protection",
        "subjectMinor": "Nesting birds, Vegetation removal",
        "activities": "Site clearing and vegetation removal, Surveys and habitat assessments",
        "species": "Least Bell's vireo, Yellow-billed cuckoo",
        "commitments": "BIO-31, BIO-42, CM 6.3.2.3, CM 6.3.2.4, COA 11.18",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-083"
      },
      {
        "id": "1-068",
        "title": "Vegetation retention and sediment retention on cleared slopes",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Water",
        "subjectMinor": "Erosion and sediment control, Vegetation removal",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal",
        "species": "",
        "commitments": "AMM-4a, AMM-4b, COA 11.26, EC-4a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-068"
      },
      {
        "id": "1-056",
        "title": "Vehicle fire extinguishers and water truck",
        "cls": "Adhere",
        "subjectMajor": "Hazards",
        "subjectMinor": "Fire prevention",
        "activities": "Heavy equipment operation, Vehicle travel on site",
        "species": "",
        "commitments": "AMM-5, EC-5",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-056"
      },
      {
        "id": "2-075",
        "title": "Vernal pool setback for disturbance and hydrology changes",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Plants and invertebrates",
        "subjectMinor": "Habitat avoidance and work footprint, Vernal pools",
        "activities": "Ground disturbance and grading",
        "species": "Vernal pool fairy shrimp, Vernal pool tadpole shrimp",
        "commitments": "BIO-14, CM 6.3.2.9",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-075"
      },
      {
        "id": "2-049",
        "title": "Vernal pool, elderberry and plant buffer fencing",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Plants and invertebrates",
        "subjectMinor": "Elderberry shrubs, Exclusion fencing and ESAs, Special-status plants, Vernal pools",
        "activities": "Exclusion fencing and flagging installation",
        "species": "Monarch butterfly, Valley elderberry longhorn beetle, Vernal pool fairy shrimp, Vernal pool tadpole shrimp",
        "commitments": "BIO-14, BIO-18, BIO-2a, CM 6.3.2.12, CM 6.3.2.8, CM 6.3.2.9",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-049"
      },
      {
        "id": "1-085",
        "title": "Vessel approach speed and wake at shore",
        "cls": "Adhere",
        "subjectMajor": "Water",
        "subjectMinor": "Barge and vessel operations",
        "activities": "Barge and vessel operations",
        "species": "Chinook salmon, Delta smelt, Longfin smelt, White sturgeon",
        "commitments": "AMM-27, AQUA-1b, COA 11.36",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-085"
      },
      {
        "id": "1-040",
        "title": "Vessel engine model year",
        "cls": "Adhere",
        "subjectMajor": "Air quality, Water",
        "subjectMinor": "Barge and vessel operations, Equipment emissions",
        "activities": "Barge and vessel operations, Geotechnical investigations and drilling, In-water and in-channel work",
        "species": "",
        "commitments": "AMM-10, EC-10",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-040"
      },
      {
        "id": "3-023",
        "title": "Vibration monitoring at susceptible historic buildings",
        "cls": "Monitor",
        "subjectMajor": "Cultural resources, Noise and vibration",
        "subjectMinor": "Cultural resources, Vibration",
        "activities": "Compliance monitoring and inspections, Heavy equipment operation, Pile driving",
        "species": "",
        "commitments": "CUL-1b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-023"
      },
      {
        "id": "1-086",
        "title": "Waste and stockpile covers ahead of rain",
        "cls": "Adhere",
        "subjectMajor": "Water",
        "subjectMinor": "Erosion and sediment control, Stormwater and discharges",
        "activities": "Stockpiling and spoils handling, Waste and trash handling",
        "species": "",
        "commitments": "AMM-4b, COA 11.26, EC-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-086"
      },
      {
        "id": "1-053",
        "title": "Watertight containment for chemicals, concrete and wash water",
        "cls": "Adhere",
        "subjectMajor": "Hazards, Water",
        "subjectMinor": "Hazardous materials, Stormwater and discharges",
        "activities": "Concrete work and batch plants, Hazardous materials handling and storage",
        "species": "",
        "commitments": "AMM-4b, COA 11.22, EC-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-053"
      },
      {
        "id": "1-072",
        "title": "Watertight forms for overwater concrete",
        "cls": "Adhere",
        "subjectMajor": "Water",
        "subjectMinor": "In-water work, Water quality",
        "activities": "Concrete work and batch plants, In-water and in-channel work",
        "species": "",
        "commitments": "AMM-4a, COA 11.26, EC-4a",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-072"
      },
      {
        "id": "4-037",
        "title": "Waterway agency notice and marina postings",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Water",
        "subjectMinor": "In-water work, Schedule notices",
        "activities": "Barge and vessel operations, In-water and in-channel work, Notifications and reporting",
        "species": "",
        "commitments": "AMM-16, EC-16",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-037"
      },
      {
        "id": "3-009",
        "title": "Weekly and storm-event BMP inspection",
        "cls": "Monitor",
        "subjectMajor": "Water",
        "subjectMinor": "Erosion and sediment control, Stormwater and discharges",
        "activities": "Compliance monitoring and inspections, Ground disturbance and grading",
        "species": "",
        "commitments": "AMM-4a, AMM-4b, COA 11.27, COA 9.7, EC-4a, EC-4b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/3-009"
      },
      {
        "id": "4-050",
        "title": "Weekly multilingual road work notices",
        "cls": "Notify",
        "subjectMajor": "Site conduct",
        "subjectMinor": "Traffic and community coordination",
        "activities": "Hauling and deliveries, Notifications and reporting, Vehicle travel on site",
        "species": "",
        "commitments": "TRANS-1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-050"
      },
      {
        "id": "1-082",
        "title": "Well decline threshold for reinjection or potable supply",
        "cls": "Adhere",
        "subjectMajor": "Water",
        "subjectMinor": "Groundwater",
        "activities": "Dewatering and fish isolation, Facility operations and maintenance",
        "species": "",
        "commitments": "GW-1",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-082"
      },
      {
        "id": "1-111",
        "title": "Wildlife-passable roads and crossing signs",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Site conduct",
        "subjectMinor": "Facility design and siting, Habitat avoidance and work footprint",
        "activities": "Access road and route construction",
        "species": "",
        "commitments": "AMM-18, BIO-22b, COA 11.11, COA 11.12",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-111"
      },
      {
        "id": "1-024",
        "title": "Winter noise limit at crane roosts",
        "cls": "Adhere",
        "subjectMajor": "Birds, Noise and vibration",
        "subjectMinor": "Noise, Sandhill crane",
        "activities": "Heavy equipment operation, Pile driving",
        "species": "Sandhill crane",
        "commitments": "BIO-33",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-024"
      },
      {
        "id": "2-047",
        "title": "Work area delineation and flagged routes",
        "cls": "Adhere",
        "subjectMajor": "Habitat protection, Site conduct",
        "subjectMinor": "Access routes and parking, Exclusion fencing and ESAs, Habitat avoidance and work footprint",
        "activities": "Exclusion fencing and flagging installation, Staging and laydown, Vehicle travel on site",
        "species": "California red-legged frog, California tiger salamander, Crotch bumble bee, Giant garter snake, Swainson's hawk, Tricolored blackbird",
        "commitments": "AMM-14, BIO-30, COA 11.39, COA 11.55, COA 11.65, COA 11.78, COA 11.79, COA 11.84, COA 11.90, COA 11.94, COA 9.10, COA 9.8, COA 9.9, EC-14",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-047"
      },
      {
        "id": "2-041",
        "title": "Work window within the elderberry shrub buffer",
        "cls": "Adhere",
        "subjectMajor": "Plants and invertebrates",
        "subjectMinor": "Elderberry shrubs",
        "activities": "Ground disturbance and grading, Site clearing and vegetation removal",
        "species": "Valley elderberry longhorn beetle",
        "commitments": "BIO-18, CM 6.3.2.8",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-041"
      },
      {
        "id": "2-036",
        "title": "Work windows and weather limits from the clearance review",
        "cls": "Adhere",
        "subjectMajor": "Site conduct",
        "subjectMinor": "Compliance inspections and records",
        "activities": "Facility operations and maintenance, Surveys and habitat assessments",
        "species": "",
        "commitments": "AMM-17, BIO-2b",
        "href": "/beacon-design/prototypes/data-catalog-obligation/2-036"
      },
      {
        "id": "4-046",
        "title": "Written approval before a new off-site route",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Site conduct",
        "subjectMinor": "Access routes and parking, Agency approvals",
        "activities": "Access road and route construction, Notifications and reporting",
        "species": "",
        "commitments": "COA 9.10",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-046"
      },
      {
        "id": "4-041",
        "title": "Written approval before nest tree removal",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, Birds, Habitat protection",
        "subjectMinor": "Agency approvals, Nesting birds, Vegetation removal",
        "activities": "Notifications and reporting, Site clearing and vegetation removal",
        "species": "Crotch bumble bee, Heron and egret rookeries, Swainson's hawk, White-tailed kite",
        "commitments": "BIO-35, BIO-36b, BIO-39, COA 11.102",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-041"
      },
      {
        "id": "4-004",
        "title": "Written incident report to CDFW",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals",
        "subjectMinor": "Non-compliance reporting, Take and injury reporting",
        "activities": "Notifications and reporting",
        "species": "",
        "commitments": "BIO-22a, BIO-24a, CM 6.3.2.11, CM 6.3.2.5, CM 6.3.2.6, COA 10.16, COA 11.103, COA 11.118, COA 11.52, COA 11.68, COA 11.81, COA 11.93",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-004"
      },
      {
        "id": "4-044",
        "title": "Written notice of representative and land manager changes",
        "cls": "Notify",
        "subjectMajor": "Agency reporting and approvals, People and qualifications",
        "subjectMinor": "Agency approvals, Qualified specialists",
        "activities": "Notifications and reporting",
        "species": "",
        "commitments": "COA 12.12, COA 8, COA 9.1, COA-8",
        "href": "/beacon-design/prototypes/data-catalog-obligation/4-044"
      },
      {
        "id": "1-044",
        "title": "Zero-emission equipment where feasible",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Equipment emissions, Greenhouse gas and zero-emission fleet",
        "activities": "Heavy equipment operation",
        "species": "",
        "commitments": "AMM-13, AMM-7, AMM-8, EC-7, EC-8",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-044"
      },
      {
        "id": "1-041",
        "title": "Zero-emission fleet targets",
        "cls": "Adhere",
        "subjectMajor": "Air quality",
        "subjectMinor": "Equipment emissions, Greenhouse gas and zero-emission fleet",
        "activities": "Heavy equipment operation, Vehicle travel on site",
        "species": "",
        "commitments": "AMM-7, AMM-8, EC-7, EC-8",
        "href": "/beacon-design/prototypes/data-catalog-obligation/1-041"
      }
    ]
  </script>
</section>
```

## Styles
```css
:where(.ag-ltr) :where(.ag-animate-autosize){.ag-cell,.ag-header-cell,.ag-header-group-cell{transition:width .2s ease-in-out,left .2s ease-in-out}
:where(.ag-ltr) :where(.ag-column-moving){.ag-cell,.ag-header-cell,.ag-spanned-cell-wrapper{transition:left .2s}
.ag-header-group-cell{transition:left .2s,width .2s}
.ag-header-group-cell{transition:right .2s,width .2s}
:where(.ag-selection-checkbox) .ag-checkbox-input-wrapper:before{content:"";cursor:pointer;inset:-8px;position:absolute}
:where(.ag-theme-batchEditStyle-3) {
.ag-cell-batch-edit{background-color:var(--ag-cell-batch-edit-background-color);color:var(--ag-cell-batch-edit-text-color);display:inherit}
.ag-row-batch-edit{background-color:var(--ag-row-batch-edit-background-color);color:var(--ag-row-batch-edit-text-color)}
:where(.ag-theme-buttonStyle-1) {
:where(.ag-button){background:none;border:none;color:inherit;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0;text-indent:inherit;text-shadow:inherit;text-transform:inherit;word-spacing:inherit;&:disabled{cursor:default}
:where(.ag-theme-checkboxStyle-4) {
.ag-checkbox-input-wrapper,.ag-radio-button-input-wrapper{background-color:var(--ag-checkbox-unchecked-background-color);border:solid var(--ag-checkbox-border-width) var(--ag-checkbox-unchecked-border-color);flex:none;height:var(--ag-icon-size);position:relative;width:var(--ag-icon-size);&:where(.ag-checked){background-color:var(--ag-checkbox-checked-background-color);border-color:var(--ag-checkbox-checked-border-color)}
&:where(.ag-disabled){filter:grayscale();opacity:.5}
.ag-cell-editing-error .ag-checkbox-input-wrapper:focus-within{box-shadow:var(--ag-focus-error-shadow)}
:where(.ag-theme-columnDropStyle-2) {
.ag-column-drop-vertical-empty-message{align-items:center;border:dashed var(--ag-border-width);border-color:var(--ag-border-color);display:flex;inset:0;justify-content:center;margin:calc(var(--ag-spacing)*1.5) calc(var(--ag-spacing)*2);overflow:hidden;padding:calc(var(--ag-spacing)*2);position:absolute}
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
:where(.ag-theme-inputStyle-7) {
:where(.ag-input-field-input[type=number]:not(.ag-number-field-input-stepper)){-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}
:where(.ag-ltr) .ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){padding-left:var(--ag-input-padding-start)}
&:where(.ag-ltr,.ag-rtl) .ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){padding:0 var(--ag-input-padding-start)}
:where(.ag-ltr) :where(.ag-column-select-header-filter-wrapper),:where(.ag-ltr) :where(.ag-filter-add-select),:where(.ag-ltr) :where(.ag-filter-filter),:where(.ag-ltr) :where(.ag-filter-toolpanel-search),:where(.ag-ltr) :where(.ag-floating-filter-search-icon),:where(.ag-ltr) :where(.ag-mini-filter){.ag-input-wrapper:before{margin-left:var(--ag-spacing)}
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
:where(.ag-theme-part-8) {
.ag-icon-filter::before { mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolygon%20points%3D%2222%203%202%203%2010%2012.46%2010%2019%2014%2021%2014%2012.46%2022%203%22%2F%3E%3C%2Fsvg%3E"); }
;
.ag-icon-filterActive::before { mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolygon%20points%3D%2222%203%202%203%2010%2012.46%2010%2019%2014%2021%2014%2012.46%2022%203%22%2F%3E%3C%2Fsvg%3E"); }
:where(.ag-theme-tabStyle-6) {
.ag-tabs-header{background-color:var(--ag-tab-bar-background-color);border-bottom:var(--ag-tab-bar-border);display:flex;flex:1;gap:var(--ag-tab-spacing);padding:var(--ag-tab-bar-top-padding) var(--ag-tab-bar-horizontal-padding) 0}
:where(.ag-ltr) .ag-tabs-close-button-wrapper{border-right:solid var(--ag-border-width) var(--ag-border-color)}
:where(.ag-ltr) .ag-tab.ag-tab-selected:where(:not(:first-of-type)){border-left-color:var(--ag-tab-selected-border-color)}
:where(.ag-ltr) .ag-tab.ag-tab-selected:where(:not(:last-of-type)){border-right-color:var(--ag-tab-selected-border-color)}
.ag-hidden{display:none!important}
.ag-invisible{visibility:hidden!important}
.ag-tab-guard{display:block;height:0;position:absolute;width:0}
.ag-tab-guard-top{top:1px}
.ag-tab-guard-bottom{bottom:1px}
.ag-measurement-container{height:0;overflow:hidden;visibility:hidden;width:0}
.ag-measurement-element-border{display:inline-block}
.ag-measurement-element-border:before{border-left:var(--ag-internal-measurement-border);content:"";display:block}
.ag-input-wrapper,.ag-picker-field-wrapper{align-items:center;display:flex;flex:1 1 auto;line-height:normal;position:relative}
.ag-chart,.ag-dnd-ghost,.ag-external,.ag-popup,.ag-root-wrapper{cursor:default;line-height:normal;white-space:normal;-webkit-font-smoothing:antialiased;background-color:var(--ag-wrapper-background-color);color:var(--ag-text-color);color-scheme:var(--ag-browser-color-scheme);font-family:var(--ag-font-family);font-size:var(--ag-font-size);font-weight:var(--ag-font-weight);--ag-indentation-level:0}
:where(.ag-icon):before{align-items:center;background-color:currentcolor;color:inherit;content:"";display:flex;font-family:inherit;font-size:var(--ag-icon-size);font-style:normal;font-variant:normal;height:var(--ag-icon-size);justify-content:center;line-height:var(--ag-icon-size);-webkit-mask-size:contain;mask-size:contain;text-transform:none;width:var(--ag-icon-size)}
.ag-icon{background-position:50%;background-repeat:no-repeat;background-size:contain;color:var(--ag-icon-color);display:block;height:var(--ag-icon-size);position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:var(--ag-icon-size)}
.ag-disabled .ag-icon,[disabled] .ag-icon{opacity:.5}
.ag-icon-grip.ag-disabled,.ag-icon-grip[disabled]{opacity:.35}
.ag-icon-loading{animation-duration:1s;animation-iteration-count:infinite;animation-name:spin;animation-timing-function:linear}
.ag-aria-description-container{border:0;clip-path:inset(50%);height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;z-index:9999}
.ag-unselectable{-webkit-user-select:none;-moz-user-select:none;user-select:none}
.ag-selectable{-webkit-user-select:text;-moz-user-select:text;user-select:text}
.ag-body-horizontal-scroll-viewport,.ag-body-vertical-scroll-viewport,.ag-body-viewport,.ag-center-cols-viewport,.ag-floating-bottom-viewport,.ag-floating-top-viewport,.ag-header-viewport,.ag-sticky-bottom-viewport,.ag-sticky-top-viewport{flex:1 1 auto;height:100%;min-width:0;overflow:hidden;position:relative}
.ag-viewport{position:relative}
.ag-body-viewport,.ag-center-cols-viewport,.ag-floating-bottom-viewport,.ag-floating-top-viewport,.ag-header-viewport,.ag-sticky-bottom-viewport,.ag-sticky-top-viewport{overflow-x:auto;-ms-overflow-style:none!important;scrollbar-width:none!important}
.ag-body-viewport::-webkit-scrollbar,.ag-center-cols-viewport::-webkit-scrollbar,.ag-floating-bottom-viewport::-webkit-scrollbar,.ag-floating-top-viewport::-webkit-scrollbar,.ag-header-viewport::-webkit-scrollbar,.ag-sticky-bottom-viewport::-webkit-scrollbar,.ag-sticky-top-viewport::-webkit-scrollbar{display:none!important}
.ag-body-viewport{display:flex;overflow-x:hidden;&:where(.ag-layout-normal){overflow-y:auto;-webkit-overflow-scrolling:touch}
.ag-floating-bottom-container,.ag-floating-top-container,.ag-sticky-bottom-container,.ag-sticky-top-container{min-height:1px}
.ag-center-cols-viewport{min-height:100%;width:100%}
.ag-body-horizontal-scroll-viewport{overflow-x:scroll}
.ag-body-vertical-scroll-viewport{overflow-y:scroll}
.ag-body-container,.ag-body-horizontal-scroll-container,.ag-body-vertical-scroll-container,.ag-center-cols-container,.ag-floating-bottom-container,.ag-floating-bottom-full-width-container,.ag-floating-top-container,.ag-full-width-container,.ag-header-container,.ag-pinned-left-cols-container,.ag-pinned-left-sticky-bottom,.ag-pinned-right-cols-container,.ag-pinned-right-sticky-bottom,.ag-sticky-bottom-container,.ag-sticky-top-container{position:relative}
.ag-floating-bottom-container,.ag-floating-top-container,.ag-header-container,.ag-pinned-left-floating-bottom,.ag-pinned-left-floating-top,.ag-pinned-right-floating-bottom,.ag-pinned-right-floating-top,.ag-sticky-bottom-container,.ag-sticky-top-container{height:100%;white-space:nowrap}
.ag-center-cols-container,.ag-pinned-right-cols-container{display:block}
.ag-body-horizontal-scroll-container{height:100%}
.ag-body-vertical-scroll-container{width:100%}
.ag-floating-bottom-full-width-container,.ag-floating-top-full-width-container,.ag-full-width-container,.ag-sticky-bottom-full-width-container,.ag-sticky-top-full-width-container{pointer-events:none;position:absolute;top:0}
:where(.ag-ltr) .ag-floating-bottom-full-width-container,:where(.ag-ltr) .ag-floating-top-full-width-container,:where(.ag-ltr) .ag-full-width-container,:where(.ag-ltr) .ag-sticky-bottom-full-width-container,:where(.ag-ltr) .ag-sticky-top-full-width-container{left:0}
:where(.ag-rtl) .ag-floating-bottom-full-width-container,:where(.ag-rtl) .ag-floating-top-full-width-container,:where(.ag-rtl) .ag-full-width-container,:where(.ag-rtl) .ag-sticky-bottom-full-width-container,:where(.ag-rtl) .ag-sticky-top-full-width-container{right:0}
.ag-full-width-container{width:100%}
.ag-floating-bottom-full-width-container,.ag-floating-top-full-width-container{display:inline-block;height:100%;overflow:hidden;width:100%}
.ag-body{display:flex;flex:1 1 auto;flex-direction:row!important;min-height:0;position:relative}
.ag-body-horizontal-scroll,.ag-body-vertical-scroll{display:flex;min-height:0;min-width:0;position:relative;&:where(.ag-scrollbar-invisible){bottom:0;position:absolute;&:where(.ag-apple-scrollbar){opacity:0;transition:opacity .4s;visibility:hidden;&:where(.ag-scrollbar-active),&:where(.ag-scrollbar-scrolling){opacity:1;visibility:visible}
.ag-body-horizontal-scroll{width:100%;&:where(.ag-scrollbar-invisible){left:0;right:0}
.ag-body-vertical-scroll{height:100%;&:where(.ag-scrollbar-invisible){top:0;z-index:10}
:where(.ag-ltr) .ag-body-vertical-scroll{&:where(.ag-scrollbar-invisible){right:0}
:where(.ag-rtl) .ag-body-vertical-scroll{&:where(.ag-scrollbar-invisible){left:0}
.ag-horizontal-left-spacer,.ag-horizontal-right-spacer{height:100%;min-width:0;overflow-x:scroll;&:where(.ag-scroller-corner){overflow-x:hidden}
:where(.ag-row-animation) .ag-row{transition:transform .4s,top .4s,opacity .2s;&:where(.ag-after-created){transition:transform .4s,top .4s,height .4s,opacity .2s}
:where(.ag-row-animation.ag-prevent-animation) .ag-row{transition:none!important;&:where(.ag-row.ag-after-created){transition:none!important}
:where(.ag-row-no-animation) .ag-row{transition:none}
.ag-row-loading{align-items:center;display:flex}
.ag-row-position-absolute{position:absolute}
.ag-row-position-relative{position:relative}
.ag-row-inline-editing{z-index:1}
.ag-row-dragging{z-index:2}
.ag-cell{display:inline-block;height:100%;position:absolute;white-space:nowrap;&:focus-visible{box-shadow:none}
.ag-cell-value{flex:1 1 auto}
.ag-cell-value:not(.ag-allow-overflow),.ag-group-value{overflow:hidden;text-overflow:ellipsis}
.ag-cell-wrap-text{overflow-wrap:break-word;white-space:normal}
:where(.ag-cell) .ag-icon{display:inline-block;vertical-align:middle}
.ag-floating-top{display:flex;overflow:hidden;position:relative;white-space:nowrap;width:100%}
:where(.ag-floating-top:not(.ag-invisible)){border-bottom:var(--ag-pinned-row-border)}
.ag-floating-bottom{display:flex;overflow:hidden;position:relative;white-space:nowrap;width:100%}
:where(.ag-floating-bottom:not(.ag-invisible)){border-top:var(--ag-pinned-row-border)}
.ag-sticky-bottom,.ag-sticky-top{background-color:var(--ag-data-background-color);display:flex;height:0;overflow:hidden;position:absolute;width:100%;z-index:1}
.ag-sticky-bottom{box-sizing:content-box!important;:where(.ag-pinned-left-sticky-bottom),:where(.ag-pinned-right-sticky-bottom),:where(.ag-sticky-bottom-container){border-top:var(--ag-row-border);box-sizing:border-box}
.ag-cell-label-container{align-items:center;display:flex;flex-direction:row-reverse;height:100%;justify-content:space-between;width:100%}
.ag-header-cell-text{text-align:end}
:where(.ag-ltr){direction:ltr;.ag-body,.ag-body-horizontal-scroll,.ag-body-viewport,.ag-floating-bottom,.ag-floating-top,.ag-header,.ag-sticky-bottom,.ag-sticky-top{flex-direction:row}
.ag-icon-contracted,.ag-icon-expanded,.ag-icon-tree-closed{display:block}
:where(.ag-ltr) .ag-row:not(.ag-row-level-0) .ag-pivot-leaf-group{margin-left:var(--ag-row-group-indent-size)}
:where(.ag-rtl) .ag-row:not(.ag-row-level-0) .ag-pivot-leaf-group{margin-right:var(--ag-row-group-indent-size)}
:where(.ag-ltr) .ag-row-group-leaf-indent{margin-left:calc(var(--ag-cell-widget-spacing) + var(--ag-icon-size))}
:where(.ag-rtl) .ag-row-group-leaf-indent{margin-right:calc(var(--ag-cell-widget-spacing) + var(--ag-icon-size))}
.ag-cell-data-changed{background-color:var(--ag-value-change-value-highlight-background-color)!important}
.ag-cell-data-changed-animation{background-color:transparent}
.ag-cell-highlight{background-color:var(--ag-range-selection-highlight-color)!important}
.ag-row,.ag-spanned-row{color:var(--ag-cell-text-color);font-family:var(--ag-cell-font-family);font-size:var(--ag-cell-font-size);font-weight:var(--ag-cell-font-weight);white-space:nowrap;--ag-internal-content-line-height:calc(min(var(--ag-row-height), var(--ag-line-height, 1000px)) - var(--ag-internal-row-border-width, 1px) - 2px)}
.ag-row{background-color:var(--ag-data-background-color);border-bottom:var(--ag-row-border);height:var(--ag-row-height);width:100%;&.ag-row-editing-invalid{background-color:var(--ag-full-row-edit-invalid-background-color)}
:where(.ag-body-vertical-content-no-gap>div>div>div,.ag-body-vertical-content-no-gap>div>div>div>div)>.ag-row-last{border-bottom-color:transparent}
.ag-cell,.ag-full-width-row .ag-cell-wrapper.ag-row-group{border:1px solid transparent;line-height:var(--ag-internal-content-line-height);-webkit-font-smoothing:subpixel-antialiased}
:where(.ag-ltr) .ag-cell{border-right:var(--ag-column-border)}
:where(.ag-rtl) .ag-cell{border-left:var(--ag-column-border)}
:where(.ag-ltr) :where(.ag-body-horizontal-content-no-gap) .ag-column-last{border-right-color:transparent}
:where(.ag-rtl) :where(.ag-body-horizontal-content-no-gap) .ag-column-last{border-left-color:transparent}
.ag-cell-wrapper{align-items:center;display:flex;>:where(:not(.ag-cell-value,.ag-group-value)){align-items:center;display:flex;height:var(--ag-internal-content-line-height)}
&:where(.ag-row-group){align-items:flex-start}
:where(.ag-full-width-row) &:where(.ag-row-group){align-items:center;height:100%}
:where(.ag-ltr) .ag-cell-wrapper{padding-left:calc(var(--ag-indentation-level)*var(--ag-row-group-indent-size))}
:where(.ag-rtl) .ag-cell-wrapper{padding-right:calc(var(--ag-indentation-level)*var(--ag-row-group-indent-size))}
:where(.ag-cell-wrap-text:not(.ag-cell-auto-height)) .ag-cell-wrapper{align-items:normal;height:100%;:where(.ag-cell-value){height:100%}
:where(.ag-ltr) .ag-row>.ag-cell-wrapper.ag-row-group{padding-left:calc(var(--ag-cell-horizontal-padding) + var(--ag-row-group-indent-size)*var(--ag-indentation-level))}
:where(.ag-rtl) .ag-row>.ag-cell-wrapper.ag-row-group{padding-right:calc(var(--ag-cell-horizontal-padding) + var(--ag-row-group-indent-size)*var(--ag-indentation-level))}
.ag-cell-focus:not(.ag-cell-range-selected):focus-within,.ag-cell-range-single-cell,.ag-cell-range-single-cell.ag-cell-range-handle,.ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected),.ag-context-menu-open .ag-full-width-row.ag-row-focus .ag-cell-wrapper.ag-row-group,.ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group{border:1px solid;border-color:var(--ag-range-selection-border-color);border-style:var(--ag-range-selection-border-style);outline:initial}
.ag-full-width-row.ag-row-focus:focus{box-shadow:none}
:where(.ag-ltr) .ag-group-contracted,:where(.ag-ltr) .ag-group-expanded,:where(.ag-ltr) .ag-row-drag,:where(.ag-ltr) .ag-selection-checkbox{margin-right:var(--ag-cell-widget-spacing)}
:where(.ag-rtl) .ag-group-contracted,:where(.ag-rtl) .ag-group-expanded,:where(.ag-rtl) .ag-row-drag,:where(.ag-rtl) .ag-selection-checkbox{margin-left:var(--ag-cell-widget-spacing)}
:where(.ag-ltr) .ag-group-child-count{margin-left:3px}
.ag-row-highlight-above:after,.ag-row-highlight-below:after,.ag-row-highlight-inside:after{background-color:var(--ag-row-drag-indicator-color);border-radius:calc(var(--ag-row-drag-indicator-width)/2);content:"";height:var(--ag-row-drag-indicator-width);pointer-events:none;position:absolute;width:calc(100% - 1px)}
:where(.ag-ltr) .ag-row-highlight-above:after,:where(.ag-ltr) .ag-row-highlight-below:after,:where(.ag-ltr) .ag-row-highlight-inside:after{left:1px}
:where(.ag-rtl) .ag-row-highlight-above:after,:where(.ag-rtl) .ag-row-highlight-below:after,:where(.ag-rtl) .ag-row-highlight-inside:after{right:1px}
.ag-row-highlight-above:after{top:0}
.ag-row-highlight-below:after{bottom:0}
.ag-row-highlight-indent:after{display:block;width:auto}
:where(.ag-ltr) .ag-row-highlight-indent:after{left:calc((var(--ag-cell-widget-spacing) + var(--ag-icon-size))*2 + var(--ag-cell-horizontal-padding) + var(--ag-row-highlight-level)*var(--ag-row-group-indent-size));right:1px}
:where(.ag-rtl) .ag-row-highlight-indent:after{left:1px;right:calc((var(--ag-cell-widget-spacing) + var(--ag-icon-size))*2 + var(--ag-cell-horizontal-padding) + var(--ag-row-highlight-level)*var(--ag-row-group-indent-size))}
.ag-row-highlight-inside:after{background-color:var(--ag-selected-row-background-color);border:1px solid var(--ag-range-selection-border-color);display:block;height:auto;inset:0;width:auto}
.ag-body,.ag-floating-bottom,.ag-floating-top{background-color:var(--ag-data-background-color)}
.ag-row-odd{background-color:var(--ag-odd-row-background-color)}
.ag-row-selected:before{background-color:var(--ag-selected-row-background-color);content:"";display:block;inset:0;pointer-events:none;position:absolute}
.ag-row-hover.ag-full-width-row.ag-row-group:before,.ag-row-hover:not(.ag-full-width-row):before{background-color:var(--ag-row-hover-color);content:"";display:block;inset:0;pointer-events:none;position:absolute}
.ag-row-hover.ag-row-selected:before{background-color:var(--ag-row-hover-color);background-image:linear-gradient(var(--ag-selected-row-background-color),var(--ag-selected-row-background-color))}
.ag-row.ag-full-width-row.ag-row-group>*{position:relative}
.ag-header-range-highlight{background-color:var(--ag-range-header-highlight-color)}
:where(.ag-ltr) .ag-right-aligned-cell{text-align:right}
.ag-right-aligned-cell .ag-cell-value,.ag-right-aligned-cell .ag-group-value{margin-left:auto}
:where(.ag-ltr) .ag-cell:not(.ag-cell-inline-editing),:where(.ag-ltr) .ag-full-width-row .ag-cell-wrapper.ag-row-group{padding-left:calc(var(--ag-cell-horizontal-padding) - 1px + var(--ag-row-group-indent-size)*var(--ag-indentation-level));padding-right:calc(var(--ag-cell-horizontal-padding) - 1px)}
:where(.ag-rtl) .ag-cell:not(.ag-cell-inline-editing),:where(.ag-rtl) .ag-full-width-row .ag-cell-wrapper.ag-row-group{padding-left:calc(var(--ag-cell-horizontal-padding) - 1px);padding-right:calc(var(--ag-cell-horizontal-padding) - 1px + var(--ag-row-group-indent-size)*var(--ag-indentation-level))}
.ag-row>.ag-cell-wrapper{padding-left:calc(var(--ag-cell-horizontal-padding) - 1px);padding-right:calc(var(--ag-cell-horizontal-padding) - 1px)}
.ag-row-dragging{cursor:move;opacity:.5}
.ag-overlay-exporting-wrapper,.ag-overlay-loading-wrapper,.ag-overlay-modal-wrapper{background-color:var(--ag-modal-overlay-background-color)}
:where(.ag-ltr) .ag-right-aligned-cell .ag-skeleton-effect{margin-left:auto}
:where(.ag-ltr) .ag-loading{padding-left:var(--ag-cell-horizontal-padding)}
:where(.ag-ltr) .ag-loading-icon{padding-right:var(--ag-cell-widget-spacing)}
.ag-header{background-color:var(--ag-header-background-color);border-bottom:var(--ag-header-row-border);color:var(--ag-header-text-color);display:flex;font-family:var(--ag-header-font-family);font-size:var(--ag-header-font-size);font-weight:var(--ag-header-font-weight);overflow:hidden;white-space:nowrap;width:100%}
.ag-header-row{height:var(--ag-header-height);position:absolute}
.ag-floating-filter-button-button,.ag-header-cell-filter-button,.ag-header-cell-menu-button,.ag-header-expand-icon,.ag-panel-title-bar-button,:where(.ag-header-cell-sortable) .ag-header-cell-label,:where(.ag-header-group-cell-selectable) .ag-header-cell-comp-wrapper{cursor:pointer}
:where(.ag-ltr) .ag-header-expand-icon{margin-left:4px}
:where(.ag-rtl) .ag-header-expand-icon{margin-right:4px}
.ag-header-row:where(:not(:first-child)){:where(.ag-header-cell:not(.ag-header-span-height.ag-header-span-total,.ag-header-parent-hidden)),:where(.ag-header-group-cell.ag-header-group-cell-with-group){border-top:var(--ag-header-row-border)}
.ag-header-row:where(:not(.ag-header-row-column-group)){overflow:hidden}
:where(.ag-header.ag-header-allow-overflow) .ag-header-row{overflow:visible}
.ag-header-cell{display:inline-flex;overflow:hidden}
.ag-header-group-cell{contain:paint;display:flex}
.ag-header-cell,.ag-header-group-cell{align-items:center;gap:var(--ag-cell-widget-spacing);height:100%;padding:0 var(--ag-cell-horizontal-padding);position:absolute}
.ag-header-cell:where(:not(.ag-floating-filter)):before,.ag-header-group-cell:before{background-image:linear-gradient(var(--ag-internal-hover-color),var(--ag-internal-hover-color)),linear-gradient(var(--ag-internal-moving-color),var(--ag-internal-moving-color));content:"";inset:0;position:absolute;--ag-internal-moving-color:transparent;--ag-internal-hover-color:transparent;transition:--ag-internal-moving-color var(--ag-header-cell-background-transition-duration),--ag-internal-hover-color var(--ag-header-cell-background-transition-duration)}
.ag-header-cell:where(:not(.ag-floating-filter)):where(:hover):before,.ag-header-group-cell:where(:hover):before{--ag-internal-hover-color:var(--ag-header-cell-hover-background-color)}
.ag-header-cell:where(:not(.ag-floating-filter)):where(.ag-header-cell-moving):before,.ag-header-group-cell:where(.ag-header-cell-moving):before{--ag-internal-moving-color:var(--ag-header-cell-moving-background-color);--ag-internal-hover-color:var(--ag-header-cell-hover-background-color)}
:where(.ag-header-cell:not(.ag-floating-filter)>*,.ag-header-group-cell>*){position:relative;z-index:1}
.ag-header-cell-menu-button:where(:not(.ag-header-menu-always-show)){opacity:0;transition:opacity .2s}
.ag-header-cell-filter-button,:where(.ag-header-cell.ag-header-active) .ag-header-cell-menu-button{opacity:1}
.ag-header-cell-label,.ag-header-group-cell-label{align-items:center;align-self:stretch;display:flex;flex:1 1 auto;overflow:hidden;padding:5px 0}
:where(.ag-ltr) .ag-sort-indicator-icon{padding-left:var(--ag-spacing)}
:where(.ag-rtl) .ag-sort-indicator-icon{padding-right:var(--ag-spacing)}
.ag-header-cell-label{text-overflow:ellipsis}
.ag-header-group-cell-label.ag-sticky-label{flex:none;max-width:100%;overflow:visible;position:sticky}
:where(.ag-ltr) .ag-header-group-cell-label.ag-sticky-label{left:var(--ag-cell-horizontal-padding)}
:where(.ag-rtl) .ag-header-group-cell-label.ag-sticky-label{right:var(--ag-cell-horizontal-padding)}
.ag-header-cell-text,.ag-header-group-text{overflow:hidden;text-overflow:ellipsis}
.ag-header-cell-text{overflow-wrap:break-word}
.ag-header-cell-comp-wrapper{width:100%}
:where(.ag-header-group-cell) .ag-header-cell-comp-wrapper{display:flex}
:where(.ag-header-cell:not(.ag-header-cell-auto-height)) .ag-header-cell-comp-wrapper{align-items:center;display:flex;height:100%}
.ag-header-cell-wrap-text .ag-header-cell-comp-wrapper{white-space:normal}
.ag-header-cell-comp-wrapper-limited-height>*{overflow:hidden}
:where(.ag-right-aligned-header) .ag-header-cell-label{flex-direction:row-reverse}
:where(.ag-header-cell:not(.ag-right-aligned-header)){.ag-header-col-ref{color:var(--ag-subtle-text-color)}
:where(.ag-ltr) :where(.ag-header-cell:not(.ag-right-aligned-header)){.ag-header-col-ref{margin-right:var(--ag-spacing)}
.ag-header-label-icon,.ag-header-menu-icon{margin-left:var(--ag-spacing)}
:where(.ag-rtl) :where(.ag-header-cell:not(.ag-right-aligned-header)){.ag-header-col-ref{margin-left:var(--ag-spacing)}
.ag-header-label-icon,.ag-header-menu-icon{margin-right:var(--ag-spacing)}
:where(.ag-header-cell.ag-right-aligned-header){.ag-header-col-ref{color:var(--ag-subtle-text-color)}
:where(.ag-ltr) :where(.ag-header-cell.ag-right-aligned-header){.ag-header-col-ref{margin-left:var(--ag-spacing)}
:where(.ag-rtl) :where(.ag-header-cell.ag-right-aligned-header){.ag-header-col-ref{margin-right:var(--ag-spacing)}
.ag-header-cell:after,.ag-header-group-cell:where(:not(.ag-header-span-height.ag-header-group-cell-no-group)):after{content:"";height:var(--ag-header-column-border-height);position:absolute;top:calc(50% - var(--ag-header-column-border-height)*.5);z-index:1}
:where(.ag-ltr) .ag-header-cell:after,:where(.ag-ltr) .ag-header-group-cell:where(:not(.ag-header-span-height.ag-header-group-cell-no-group)):after{border-right:var(--ag-header-column-border);right:0}
:where(.ag-rtl) .ag-header-cell:after,:where(.ag-rtl) .ag-header-group-cell:where(:not(.ag-header-span-height.ag-header-group-cell-no-group)):after{border-left:var(--ag-header-column-border);left:0}
.ag-header-highlight-after:after,.ag-header-highlight-before:after{background-color:var(--ag-column-drag-indicator-color);border-radius:calc(var(--ag-column-drag-indicator-width)/2);content:"";height:100%;position:absolute;top:0;width:var(--ag-column-drag-indicator-width)}
:where(.ag-ltr) .ag-header-highlight-before:after{left:0}
:where(.ag-rtl) .ag-header-highlight-before:after{right:0}
:where(.ag-ltr) .ag-header-highlight-after:after{right:0;:where(.ag-pinned-left-header) &{right:1px}
:where(.ag-rtl) .ag-header-highlight-after:after{left:0;:where(.ag-pinned-left-header) &{left:1px}
.ag-header-cell-resize{align-items:center;cursor:ew-resize;display:flex;height:100%;position:absolute;top:0;width:8px;z-index:2}
:where(.ag-ltr) .ag-header-cell-resize{right:-3px}
:where(.ag-rtl) .ag-header-cell-resize{left:-3px}
.ag-header-cell-resize:after{background-color:var(--ag-header-column-resize-handle-color);content:"";height:var(--ag-header-column-resize-handle-height);position:absolute;top:calc(50% - var(--ag-header-column-resize-handle-height)*.5);width:var(--ag-header-column-resize-handle-width);z-index:1}
:where(.ag-ltr) .ag-header-cell-resize:after{left:calc(50% - var(--ag-header-column-resize-handle-width))}
:where(.ag-rtl) .ag-header-cell-resize:after{right:calc(50% - var(--ag-header-column-resize-handle-width))}
:where(.ag-header-cell.ag-header-span-height) .ag-header-cell-resize:after{height:calc(100% - var(--ag-spacing)*4);top:calc(var(--ag-spacing)*2)}
.ag-header-group-cell-no-group:where(.ag-header-span-height){display:none}
.ag-sort-indicator-container{display:flex;gap:var(--ag-spacing)}
&.ag-root-wrapper{container-type:normal;display:inline-block}
.ag-body-horizontal-scroll,.ag-body-vertical-scroll{display:none}
.ag-cell,.ag-row{-moz-column-break-inside:avoid;break-inside:avoid}
.ag-root-wrapper{border:var(--ag-wrapper-border);border-radius:var(--ag-wrapper-border-radius);container-type:inline-size;display:flex;flex-direction:column;overflow:hidden;position:relative;&.ag-layout-normal{content-visibility:auto;height:100%}
.ag-root-wrapper-body{display:flex;flex-direction:row;&.ag-layout-normal{flex:1 1 auto;height:0;min-height:0}
.ag-root{display:flex;flex-direction:column;position:relative;&.ag-layout-auto-height,&.ag-layout-normal{flex:1 1 auto;overflow:hidden;width:0}
&.ag-layout-normal{height:100%}
.ag-chart-menu-icon,.ag-chart-settings-next,.ag-chart-settings-prev,.ag-column-group-icons,.ag-column-select-header-icon,.ag-filter-toolpanel-expand,.ag-floating-filter-button-button,.ag-group-title-bar-icon,.ag-header-cell-filter-button,.ag-header-cell-menu-button,.ag-header-expand-icon,.ag-panel-title-bar-button,.ag-panel-title-bar-button-icon,.ag-set-filter-group-icons,:where(.ag-group-contracted) .ag-icon,:where(.ag-group-expanded) .ag-icon{background-color:var(--ag-icon-button-background-color);border-radius:var(--ag-icon-button-border-radius);box-shadow:0 0 0 var(--ag-icon-button-background-spread) var(--ag-icon-button-background-color);color:var(--ag-icon-button-color)}
.ag-chart-menu-icon:hover,.ag-chart-settings-next:hover,.ag-chart-settings-prev:hover,.ag-column-group-icons:hover,.ag-column-select-header-icon:hover,.ag-filter-toolpanel-expand:hover,.ag-floating-filter-button-button:hover,.ag-group-title-bar-icon:hover,.ag-header-cell-filter-button:hover,.ag-header-cell-menu-button:hover,.ag-header-expand-icon:hover,.ag-panel-title-bar-button-icon:hover,.ag-panel-title-bar-button:hover,.ag-set-filter-group-icons:hover,:where(.ag-group-contracted) .ag-icon:hover,:where(.ag-group-expanded) .ag-icon:hover{background-color:var(--ag-icon-button-hover-background-color);box-shadow:0 0 0 var(--ag-icon-button-background-spread) var(--ag-icon-button-hover-background-color);color:var(--ag-icon-button-hover-color)}
:where(.ag-ltr) :where(.ag-filter-active):after,:where(.ag-ltr) :where(.ag-filter-toolpanel-group-instance-header-icon):after,:where(.ag-ltr) :where(.ag-filter-toolpanel-instance-header-icon):after{right:-1px}
.ag-cell-inline-editing{border:var(--ag-cell-editing-border)!important;border-radius:var(--ag-border-radius);box-shadow:var(--ag-cell-editing-shadow);padding:0;z-index:1;.ag-cell-edit-wrapper,.ag-cell-editor,.ag-cell-wrapper,:where(.ag-cell-editor) .ag-input-field-input,:where(.ag-cell-editor) .ag-wrapper{height:100%;line-height:normal;min-height:100%;width:100%}
&.ag-cell-editing-error{border-color:var(--ag-invalid-color)!important}
:where(.ag-ltr) .ag-checkbox-edit{padding-left:var(--ag-cell-horizontal-padding)}
:where(.ag-row.ag-row-editing-invalid .ag-cell-inline-editing){opacity:.8}
.ag-label{white-space:nowrap}
:where(.ag-ltr) .ag-label{margin-right:var(--ag-spacing)}
:where(.ag-rtl) .ag-label{margin-left:var(--ag-spacing)}
:where(.ag-label-align-right) .ag-label{order:1}
:where(.ag-ltr) :where(.ag-label-align-right) .ag-label{margin-left:var(--ag-spacing)}
:where(.ag-rtl) :where(.ag-label-align-right) .ag-label{margin-right:var(--ag-spacing)}
:where(.ag-label-align-right){.ag-label,.ag-wrapper{flex:none}
.ag-label-align-top{align-items:flex-start;flex-direction:column}
:where(.ag-label-align-top){.ag-label,.ag-wrapper{align-self:stretch}
.ag-label-ellipsis{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
:where(.ag-label-align-top) .ag-label{margin-bottom:calc(var(--ag-spacing)*.5)}
.ag-overlay{inset:0;pointer-events:none;position:absolute;z-index:2}
.ag-overlay-panel,.ag-overlay-wrapper{display:flex;height:100%;width:100%}
.ag-overlay-wrapper{align-items:center;flex:none;justify-content:center;text-align:center}
.ag-overlay-exporting-wrapper,.ag-overlay-loading-wrapper,.ag-overlay-modal-wrapper{pointer-events:all}
.ag-overlay-exporting-center,.ag-overlay-loading-center{background:var(--ag-background-color);border:solid var(--ag-border-width) var(--ag-border-color);border-radius:var(--ag-border-radius);box-shadow:var(--ag-popup-shadow);display:flex;padding:var(--ag-spacing)}
.ag-paging-panel{align-items:center;border-top:var(--ag-footer-row-border);display:flex;flex-wrap:wrap-reverse;gap:calc(var(--ag-spacing)*4);justify-content:flex-end;min-height:var(--ag-pagination-panel-height);padding:calc(var(--ag-spacing)*.5) var(--ag-cell-horizontal-padding);row-gap:calc(var(--ag-spacing)*.5);@container (width < 600px){justify-content:center}
:where(.ag-paging-page-size) .ag-wrapper{min-width:50px}
.ag-paging-page-summary-panel,.ag-paging-row-summary-panel{margin:calc(var(--ag-spacing)*.5)}
.ag-paging-page-summary-panel{align-items:center;display:flex;gap:var(--ag-cell-widget-spacing);.ag-disabled &{pointer-events:none}
.ag-paging-button{cursor:pointer;position:relative;&.ag-disabled{cursor:default;opacity:.5}
.ag-paging-number,.ag-paging-row-summary-panel-number{font-variant-numeric:tabular-nums;font-weight:500}
.ag-paging-description{line-height:0}
.ag-picker-field-display{flex:1 1 auto}
.ag-picker-field{align-items:center;display:flex}
.ag-picker-field-icon{border:0;cursor:pointer;display:flex;margin:0;padding:0}
.ag-picker-field-wrapper{background-color:var(--ag-picker-button-background-color);border:var(--ag-picker-button-border);border-radius:5px;min-height:max(var(--ag-list-item-height),calc(var(--ag-spacing)*4));overflow:hidden;&:where(.invalid){background-color:var(--ag-input-invalid-background-color);border:var(--ag-input-invalid-border);color:var(--ag-input-invalid-text-color)}
.ag-picker-field-wrapper:where(.ag-picker-has-focus),.ag-picker-field-wrapper:where(:focus-within){background-color:var(--ag-picker-button-focus-background-color);border:var(--ag-picker-button-focus-border);box-shadow:var(--ag-focus-shadow);&:where(.invalid){box-shadow:var(--ag-focus-error-shadow)}
.ag-picker-field-wrapper:disabled{opacity:.5}
.ag-pinned-left-floating-bottom,.ag-pinned-left-floating-top,.ag-pinned-right-floating-bottom,.ag-pinned-right-floating-top{min-width:0;overflow:hidden;position:relative}
.ag-pinned-left-sticky-top,.ag-pinned-right-sticky-top{height:100%;overflow:hidden;position:relative}
.ag-sticky-bottom-full-width-container,.ag-sticky-top-full-width-container{height:100%;overflow:hidden;width:100%}
.ag-pinned-left-header,.ag-pinned-right-header{display:inline-block;height:100%;overflow:hidden;position:relative}
.ag-body-horizontal-scroll:not(.ag-scrollbar-invisible){.ag-horizontal-left-spacer:not(.ag-scroller-corner){border-right:var(--ag-pinned-column-border)}
.ag-horizontal-right-spacer:not(.ag-scroller-corner){border-left:var(--ag-pinned-column-border)}
.ag-pinned-right-header{border-left:var(--ag-pinned-column-border)}
.ag-pinned-left-header{border-right:var(--ag-pinned-column-border)}
.ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left,.ag-cell-range-single-cell,.ag-cell-focus:not(.ag-cell-range-selected):focus-within){border-left:var(--ag-pinned-column-border)}
.ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right,.ag-cell-range-single-cell,.ag-cell-focus:not(.ag-cell-range-selected):focus-within){border-right:var(--ag-pinned-column-border)}
.ag-pinned-left-header .ag-header-cell-resize:after{left:calc(50% - var(--ag-header-column-resize-handle-width))}
.ag-pinned-right-header .ag-header-cell-resize:after{left:50%}
.ag-pinned-left-header .ag-header-cell-resize{right:-3px}
.ag-pinned-right-header .ag-header-cell-resize{left:-3px}
.ag-row-pinned-source{background-color:var(--ag-pinned-source-row-background-color);color:var(--ag-pinned-source-row-text-color);font-weight:var(--ag-pinned-source-row-font-weight)}
.ag-row-pinned-manual{background-color:var(--ag-pinned-row-background-color);color:var(--ag-pinned-row-text-color);font-weight:var(--ag-pinned-row-font-weight)}
.ag-select{align-items:center;display:flex;&.ag-disabled{opacity:.5}
.ag-select:where(:not(.ag-cell-editor,.ag-label-align-top)){min-height:var(--ag-list-item-height)}
:where(.ag-select){.ag-picker-field-wrapper{cursor:default;padding-left:var(--ag-spacing);padding-right:var(--ag-spacing)}
&.ag-disabled .ag-picker-field-wrapper:focus{box-shadow:none}
.ag-picker-field-display{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ag-picker-field-icon{align-items:center;display:flex}
.ag-select-list{background-color:var(--ag-picker-list-background-color);border:var(--ag-picker-list-border);border-radius:var(--ag-border-radius);box-shadow:var(--ag-dropdown-shadow);overflow:hidden auto}
.ag-select-list-item{cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}
:where(.ag-ltr) .ag-select-list-item{padding-left:var(--ag-spacing)}
:where(.ag-rtl) .ag-select-list-item{padding-right:var(--ag-spacing)}
.ag-select-list-item-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
:where(.ag-ltr) .ag-set-filter-item{padding-left:calc(var(--ag-widget-container-horizontal-padding) + var(--ag-indentation-level)*var(--ag-set-filter-indent-size))}
:where(.ag-ltr) .ag-set-filter-group-icons{margin-right:var(--ag-widget-container-horizontal-padding)}
:where(.ag-filter-select) .ag-picker-field-wrapper{width:0}
:where(.ag-ltr) .ag-filter-condition-operator-or{margin-left:calc(var(--ag-spacing)*2)}
:where(.ag-ltr) .ag-set-filter-add-group-indent{margin-left:calc(var(--ag-icon-size) + var(--ag-widget-container-horizontal-padding))}
:where(.ag-ltr) .ag-filter-apply-panel-button{margin-left:calc(var(--ag-spacing)*2)}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
}
.bcn-search-trigger .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-help-bar .esa-icon-button{color:var(--bcn-helpbar-fg-muted);--icon-button-bg-hover:var(--bcn-helpbar-hover-bg)}
.bcn-help-bar .esa-icon-button:hover,.bcn-help-bar .esa-icon-button:focus-visible{color:var(--bcn-helpbar-fg)}
.bcn-gd__label .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-gd-row .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.esa-card{--_card-bg:var(--card-bg,var(--color-background-elevation-raised,#fcfcfc));--_card-border:var(--card-border-color,var(--color-border-default,#cecece));--_card-radius:var(--radius-md,.5rem);--_card-padding:var(--spacing-500,1.5rem);--_card-header-bg:var(--card-header-bg,transparent);--_card-header-color:var(--color-content-default,#202020);--_card-header-border:var(--color-border-default-subtle,#d9d9d9);--_card-meta-label-color:var(--color-content-default-secondary,#646464);--_card-meta-label-size:var(--typography-label-sm-font-size,.875rem);--_card-meta-value-size:var(--typography-label-md-font-size,.9375rem);background:var(--_card-bg);border:var(--border-width-default,1px) solid var(--_card-border);border-radius:var(--_card-radius);display:block;overflow:hidden}
.esa-card--outlined{--_card-border:var(--color-border-default,#cecece)}
.esa-card--elevated{--_card-border:transparent;box-shadow:var(--elevation-2,0 2px 12px 0 #0000000a)}
.esa-card--filled{--_card-bg:var(--color-background-elevation-sunken,#f0f0f0);--_card-border:transparent}
.esa-card--header-primary .esa-card__header{--_card-header-bg:var(--color-background-brand,#46a758);--_card-header-color:var(--color-content-default-knockout,#fcfcfc)}
.esa-card--header-muted .esa-card__header{--_card-header-bg:var(--color-background-elevation-sunken,#f0f0f0)}
.esa-card--padding-none{--_card-padding:0}
.esa-card--padding-compact{--_card-padding:var(--spacing-300,.75rem)}
.esa-card--padding-spacious{--_card-padding:var(--spacing-700,3rem)}
.esa-card__header{padding:var(--spacing-400,1rem) var(--_card-padding);background:var(--_card-header-bg);color:var(--_card-header-color);border-bottom:var(--border-width-default,1px) solid var(--_card-header-border);justify-content:space-between;align-items:center;min-height:56px;display:flex}
.esa-card__header-content{align-items:center;gap:var(--spacing-300,.75rem);display:flex}
.esa-card__titles{gap:var(--spacing-050,.125rem);flex-direction:column;display:flex}
.esa-card__title{color:inherit;margin:0}
.esa-card__subtitle{color:var(--color-content-default-secondary,#646464);margin:0}
.esa-card--header-primary .esa-card__subtitle{color:var(--color-content-on-brand,#fffc)}
.esa-card__meta{gap:var(--spacing-100,.25rem) var(--spacing-500,1.5rem);margin:var(--spacing-050,.125rem) 0 0;flex-wrap:wrap;display:flex}
.esa-card__meta-pair{align-items:baseline;gap:var(--spacing-100,.25rem);min-width:0;display:flex}
.esa-card__meta dt{font-size:var(--_card-meta-label-size);font-weight:var(--font-weight-medium,500);color:var(--_card-meta-label-color)}
.esa-card__meta dd{font-size:var(--_card-meta-value-size);color:inherit;margin:0}
.esa-card--header-primary .esa-card__meta dt{color:#fffc}
.esa-card__icon{color:inherit;flex-shrink:0}
.esa-card__actions{align-items:center;gap:var(--spacing-200,.5rem);display:flex}
.esa-card__body{padding:var(--_card-padding)}
.esa-card__footer{padding:var(--spacing-300,.75rem) var(--_card-padding);border-top:var(--border-width-default,1px) solid var(--_card-header-border);background:var(--color-background-elevation-sunken,#f0f0f0)}
.bcn-disclosure .esa-icon{transition:transform .15s}
.bcn-disclosure[aria-expanded=false] .esa-icon{transform:rotate(-90deg)}
.bcn-ev-staging__title .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-ev-staging__item .esa-card{overflow:visible}
.bcn-ev-targets__title .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-ev-targets__item[data-receiving] .esa-card{border-color:var(--color-background-brand-muted);background:color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent)}
.bcn-ev-targets__item[data-blocked] .esa-card{opacity:.45}
.bcn-ev-targets__item .esa-card{overflow:visible}
.topbar__right .esa-icon-button{color:var(--color-content-default-secondary)}
.user-panel__item .esa-icon{color:var(--bcn-gray-500)}
.user-panel__item--danger .esa-icon{color:var(--color-background-utility-danger)}
.project-switcher__trigger>.esa-icon:first-child{color:var(--bcn-gray-500);flex-shrink:0}
.nav-section__header:hover .esa-icon,.nav-section--active .nav-section__header,.nav-section--active .nav-section__header .esa-icon{color:var(--color-background-brand)}
.nav-section__header>.esa-icon:first-child{color:var(--bcn-gray-950);flex-shrink:0;transition:color .15s}
.nav-section__header>.esa-icon:last-child{color:var(--bcn-gray-400);flex-shrink:0;transition:transform .15s,opacity .2s ease-in-out}
.nav-section--collapsed .nav-section__header>.esa-icon:last-child{transform:rotate(-90deg)}
.side-nav.collapsed .nav-section__title,.side-nav.collapsed .nav-section__header>.esa-icon:last-child{display:none}
.esa-button{--_btn-pad-y:var(--spacing-300,.75rem);--_btn-padding-x:var(--spacing-300,.75rem);--_btn-radius:var(--button-radius-md,.5rem);--_accent:var(--color-background-brand,#46a758);--_accent-hover:var(--color-background-brand-hover,#3e9b4f);--_on:var(--color-content-default-knockout,#fcfcfc);--_accent-text:var(--_accent);--_btn-tint-hover:color-mix(in srgb, var(--_accent) 8%, transparent);--_btn-tint-active:color-mix(in srgb, var(--_accent) 14%, transparent);display:inline-block}
.esa-button--xs{--_btn-pad-y:var(--spacing-200,.5rem);--_btn-padding-x:var(--spacing-200,.5rem);--_btn-radius:var(--button-radius-xs,4px)}
.esa-button--sm{--_btn-pad-y:var(--spacing-250,.625rem);--_btn-padding-x:var(--spacing-250,.625rem);--_btn-radius:var(--button-radius-sm,4px)}
.esa-button--lg{--_btn-pad-y:var(--spacing-400,1rem);--_btn-padding-x:var(--spacing-400,1rem);--_btn-radius:var(--button-radius-lg,8px)}
.esa-button--variant-primary{--_accent-text:var(--color-content-brand)}
.esa-button--variant-secondary{--_accent:var(--color-background-brand-muted);--_accent-hover:var(--color-background-brand-muted-hover);--_on:var(--color-content-on-brand-muted,var(--color-content-default));--_accent-text:var(--color-content-brand);--_accent-border:var(--color-border-default-strong,#bbb)}
.esa-button--variant-danger{--_accent:var(--color-background-utility-danger);--_accent-hover:var(--color-background-utility-danger-hover);--_accent-text:var(--color-content-utility-danger)}
.esa-button--variant-success{--_accent:var(--color-background-utility-success);--_accent-hover:var(--color-background-utility-success-hover);--_on:var(--color-content-on-utility-success);--_accent-text:var(--color-content-utility-success)}
.esa-button--variant-warning{--_accent:var(--color-background-utility-warning);--_accent-hover:var(--color-background-utility-warning-hover);--_on:var(--button-on-warning,var(--color-content-on-utility-warning,#4f3422));--_accent-text:var(--color-content-utility-warning)}
.esa-button--variant-info{--_accent:var(--color-background-utility-info);--_accent-hover:var(--color-background-utility-info-hover);--_accent-text:var(--color-content-utility-info)}
.esa-button--variant-ai{--_accent:var(--color-background-ai);--_accent-hover:var(--color-background-ai-hover);--_accent-text:var(--color-content-ai)}
.esa-button--appearance-fill .esa-button__native{background:var(--_accent);color:var(--_on);border-color:var(--_accent-border,transparent)}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),.esa-button--appearance-fill.esa-button--active .esa-button__native{background:var(--_accent-hover)}
.esa-button--appearance-outline .esa-button__native,.esa-button--appearance-dashed .esa-button__native{color:var(--_accent-text);border-color:var(--_accent);background:0 0}
.esa-button--appearance-dashed .esa-button__native{border-style:dashed}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled){background:var(--_btn-tint-hover)}
.esa-button--appearance-outline.esa-button--active .esa-button__native,.esa-button--appearance-dashed.esa-button--active .esa-button__native{background:var(--_btn-tint-active)}
.esa-button--appearance-soft .esa-button__native{background:color-mix(in srgb, var(--color-background-elevation-sunken,#f0f0f0) 45%, var(--color-background-elevation-raised,#fcfcfc));color:var(--_accent-text);border-color:var(--color-border-default-strong,#bbb)}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),.esa-button--appearance-soft.esa-button--active .esa-button__native{background:var(--_accent);color:var(--_on);border-color:var(--_accent)}
.esa-button--variant-ghost .esa-button__native{color:var(--color-content-default,#202020);background:0 0;border-color:#0000}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native{border-color:var(--color-border-default,#cecece)}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),.esa-button--variant-ghost.esa-button--active .esa-button__native{background:var(--color-background-elevation-sunken,#f0f0f0)}
.esa-button--variant-chrome .esa-button__native{color:inherit;background:0 0;border-color:#0000}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),.esa-button--variant-chrome.esa-button--active .esa-button__native,.esa-button--variant-chrome.esa-button--current .esa-button__native{background:var(--button-chrome-bg-hover,color-mix(in srgb, currentColor 14%, transparent))}
.esa-button--variant-chrome .esa-button__native:focus-visible{outline-color:currentColor}
.esa-button__native{justify-content:center;align-items:center;gap:var(--spacing-200,8px);width:100%;padding-block:var(--_btn-pad-y);padding-inline:var(--_btn-padding-x);border:var(--border-width-default,1px) solid transparent;border-radius:var(--_btn-radius);cursor:pointer;transition:background var(--transition-fast,.15s ease), border-color var(--transition-fast,.15s ease);-webkit-appearance:none;appearance:none;text-decoration:none;display:inline-flex}
.esa-button__native:focus-visible{outline:var(--focus-ring-width,2px) solid var(--focus-ring-color,#3e9b4f);outline-offset:var(--focus-ring-offset,2px)}
.esa-button--disabled{opacity:.5;cursor:not-allowed;pointer-events:none}
.esa-button--icon-only .esa-button__native{padding-inline:var(--_btn-pad-y);aspect-ratio:1}
summary.esa-button{cursor:pointer;list-style:none}
summary.esa-button::-webkit-details-marker{display:none}
summary.esa-button:focus-visible{outline:var(--focus-ring-width,2px) solid var(--focus-ring-color,#3e9b4f);outline-offset:var(--focus-ring-offset,2px);border-radius:var(--_btn-radius)}
summary.esa-button--variant-chrome:focus-visible{outline-color:currentColor}
.esa-button__label{white-space:nowrap}
.esa-button__label--hidden{clip-path:inset(50%);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}
.esa-button__spinner{width:1em;height:1em;animation:esa-button-spin var(--animation-spin,.75s linear infinite);border:2px solid;border-right-color:#0000;border-radius:50%;display:inline-block}
.typography-body-md{font-family:var(--typography-body-md-font-family);font-size:var(--typography-body-md-font-size);font-weight:var(--typography-body-md-font-weight);line-height:var(--typography-body-md-line-height);letter-spacing:var(--typography-body-md-letter-spacing)}
.typography-label-md{font-family:var(--typography-label-md-font-family);font-size:var(--typography-label-md-font-size);font-weight:var(--typography-label-md-font-weight);line-height:var(--typography-label-md-line-height);letter-spacing:var(--typography-label-md-letter-spacing)}
.typography-label-md-strong{font-family:var(--typography-label-md-strong-font-family);font-size:var(--typography-label-md-strong-font-size);font-weight:var(--typography-label-md-strong-font-weight);line-height:var(--typography-label-md-strong-line-height);letter-spacing:var(--typography-label-md-strong-letter-spacing)}
.typography-microcopy-xs{font-family:var(--typography-microcopy-xs-font-family);font-size:var(--typography-microcopy-xs-font-size);font-weight:var(--typography-microcopy-xs-font-weight);line-height:var(--typography-microcopy-xs-line-height);letter-spacing:var(--typography-microcopy-xs-letter-spacing)}
.typography-microcopy-xs-subtle{font-family:var(--typography-microcopy-xs-subtle-font-family);font-size:var(--typography-microcopy-xs-subtle-font-size);font-weight:var(--typography-microcopy-xs-subtle-font-weight);line-height:var(--typography-microcopy-xs-subtle-line-height);letter-spacing:var(--typography-microcopy-xs-subtle-letter-spacing)}
.typography-microcopy-xs-strong{font-family:var(--typography-microcopy-xs-strong-font-family);font-size:var(--typography-microcopy-xs-strong-font-size);font-weight:var(--typography-microcopy-xs-strong-font-weight);line-height:var(--typography-microcopy-xs-strong-line-height);letter-spacing:var(--typography-microcopy-xs-strong-letter-spacing)}
.typography-title-sm-strong{font-family:var(--typography-title-sm-strong-font-family);font-size:var(--typography-title-sm-strong-font-size);font-weight:var(--typography-title-sm-strong-font-weight);line-height:var(--typography-title-sm-strong-line-height);letter-spacing:var(--typography-title-sm-strong-letter-spacing)}
.typography-meta{font-family:var(--typography-meta-font-family);font-size:var(--typography-meta-font-size);font-weight:var(--typography-meta-font-weight);line-height:var(--typography-meta-line-height);letter-spacing:var(--typography-meta-letter-spacing)}
.bcn-gchrome__search{align-items:center;gap:var(--spacing-100);min-inline-size:15rem;display:inline-flex}
.bcn-gchrome__search esa-text-field{inline-size:100%}
.bcn-gfoot__count{font-size:var(--font-size-150);color:var(--color-content-default-secondary);font-variant-numeric:tabular-nums}
.bcn-gfoot__filtered{color:var(--color-content-default-tertiary)}
.bcn-gfoot__filtered[hidden]{display:none}
.bcn-og__host{block-size:40rem;inline-size:100%}
.bcn-og .ag-row{cursor:pointer}
.bcn-og .bcn-og__name{color:var(--color-content-link);text-overflow:ellipsis;text-decoration:underline;overflow:hidden}
.bcn-og .bcn-og__name:hover{color:var(--color-background-brand-hover)}
.bcn-og .bcn-og__cls{padding:1px var(--spacing-200);border:1px solid var(--color-border-default);border-radius:var(--radius-100);background:var(--color-background-elevation-sunken);color:var(--color-content-default);font-size:.875rem;line-height:1.5;font-weight:var(--typography-font-weight-medium);white-space:nowrap;align-items:center;display:inline-flex}
.bcn-og .bcn-og__quiet{color:var(--bcn-content-muted)}
.esa-icon{--_icon-size:var(--icon-size-md,20px);width:var(--_icon-size);height:var(--_icon-size);color:inherit;justify-content:center;align-items:center;display:inline-flex}
.esa-icon--xs{--_icon-size:var(--icon-size-xs,14px)}
.esa-icon--sm{--_icon-size:var(--icon-size-sm,16px)}
.esa-icon--md{--_icon-size:var(--icon-size-md,20px)}
.esa-icon--lg{--_icon-size:var(--icon-size-lg,24px)}
.esa-icon--xl{--_icon-size:var(--icon-size-xl,28px)}
.esa-icon svg{width:var(--_icon-size);height:var(--_icon-size);display:block}
.breadcrumbs__items .esa-icon{color:var(--bcn-gray-400)}
.page-layout__title h1 .esa-icon{color:var(--page-title-icon-color,var(--bcn-gray-1000));flex-shrink:0}
.cluster{--gap:var(--spacing-300,.75rem);--align:center;--justify:flex-start;gap:var(--gap);align-items:var(--align);justify-content:var(--justify);flex-wrap:wrap;display:flex}
.repel{--gap:var(--spacing-400,1rem);--align:center;gap:var(--gap);align-items:var(--align);flex-wrap:wrap;justify-content:space-between;display:flex}
```

## Tokens
- `--ag-internal-hover-color`: rgba(0, 0, 0, 0) _(component)_
- `--ag-internal-moving-color`: rgba(0, 0, 0, 0) _(component)_
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-content-muted`: #7c7c7c _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #dcdcdc _(component)_
- `--card-header-bg`: transparent _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand`: #fcfcfc _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-weight-medium`: 500 _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-label-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-font-weight`: 500 _(semantic)_
- `--typography-label-md-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-meta-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-meta-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-meta-font-weight`: 350 _(semantic)_
- `--typography-meta-letter-spacing`: .01em _(semantic)_
- `--typography-meta-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-subtle-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
- `--typography-title-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-sm-strong-font-size`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(semantic)_
- `--typography-title-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-title-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-sm-strong-line-height`: 1.6 _(semantic)_
