# Study Planning: markup, part 1 of 3

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
            <a href="/beacon-design/prototypes/fish-science-plan" class="nav-sublink"
              >Science Plan</a
            >
          </li>
          <li class="nav-item">
            <a href="#tasking-gantt" class="nav-sublink active">Study Planning</a>
          </li>
          <li class="nav-item">
            <a href="/beacon-design/prototypes/fish-model-map" class="nav-sublink">Data Model</a>
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
            ><span class="breadcrumb-item" aria-current="page">Study Planning</span>
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
              >Study Planning
            </h1>
            <span class="bcn-gantt-coa" title="Covered Fish Species Monitoring &amp; Science Plan"
              >COA 10.18</span
            >
          </div>
          <div class="page-layout__utilities">
            <div class="bcn-gantt-utils">
              <esa-button-toggle id="gantt-view" value="gantt" size="md"></esa-button-toggle
              ><esa-dropdown-menu id="export-menu" position="below-end" width="auto"
                ><span id="export-trigger"
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
                    ><button
                      class="esa-button__native typography-microcopy-md"
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-controls="menu"
                    >
                      <span class="esa-button__label">Export</span>
                    </button></span
                  ></span
                ></esa-dropdown-menu
              >
            </div>
          </div>
        </section>
        <section class="page-layout__content">
          <div id="view-gantt">
            <div class="bcn-wb">
              <!-- script type="application/json" removed (18 KB) --><!-- ── Filter bar (permit-tracking pattern): controls on top, legend below.
       Every lego rides the sm size variant; Add commitment lives at the BOTTOM of
       the tree body (the ghost add-row), so the bar starts with Search. ── -->
              <div class="bcn-wb__filterbar">
                <div class="bcn-wb__fb-top">
                  <div class="bcn-wb__fb-group">
                    <span class="bcn-wb__fb-label">Search</span
                    ><esa-text-field
                      id="bcn-wb-search"
                      placeholder="Search name or ID"
                      size="sm"
                    ></esa-text-field>
                  </div>
                  <span class="bcn-wb__fb-divider"></span>
                  <div class="bcn-wb__fb-group">
                    <span class="bcn-wb__fb-label">Tier</span
                    ><esa-button-toggle
                      id="bcn-wb-tier-filter"
                      value="all"
                      size="sm"
                    ></esa-button-toggle>
                  </div>
                  <span class="bcn-wb__fb-divider"></span>
                  <div class="bcn-wb__fb-group">
                    <span class="bcn-wb__fb-label">Lead</span
                    ><esa-select
                      id="bcn-wb-lead-filter"
                      class="bcn-wb__fb-leadsel"
                      size="sm"
                    ></esa-select>
                  </div>
                  <span class="bcn-wb__fb-divider"></span>
                  <div class="bcn-wb__fb-group">
                    <span class="bcn-wb__fb-label">Years</span
                    ><esa-select
                      id="bcn-wb-year-from"
                      class="bcn-wb__fb-year"
                      size="sm"
                    ></esa-select
                    ><span class="bcn-wb__fb-to">to</span
                    ><esa-select id="bcn-wb-year-to" class="bcn-wb__fb-year" size="sm"></esa-select>
                  </div>
                </div>
                <div class="bcn-wb__legend">
                  <span class="bcn-wb__legend-item"
                    ><span class="bcn-wb__legend-dot" style="--_c: #1a9850"></span>Complete</span
                  ><span class="bcn-wb__legend-item"
                    ><span class="bcn-wb__legend-dot" style="--_c: #91cf60"></span>On track</span
                  ><!-- …and 4 more like this (<span class="bcn-wb__legend-item">) -->
                </div>
              </div>
              <div class="bcn-wb__scroll">
                <div class="bcn-wb__canvas">
                  <!-- ── Axis header: phases / years / milestones (water-year aware) ── -->
                  <header class="bcn-wb__axis">
                    <div class="bcn-wb__corner">Commitment / study / sub-study / task</div>
                    <div class="bcn-wb__lead-head">Lead</div>
                    <div class="bcn-wb__money-head">Planned $</div>
                    <div class="bcn-wb__head-plot">
                      <div class="bcn-wb__head-bands">
                        <span
                          class="bcn-wb__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-wb__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><!-- …and 2 more like this (<span class="bcn-wb__band">) -->
                      </div>
                      <div class="bcn-wb__head-phases">
                        <span class="bcn-wb__phase-tag" style="left: 15.79%; width: 26.32%"
                          >Baseline</span
                        ><span class="bcn-wb__phase-tag" style="left: 42.11%; width: 47.37%"
                          >In-water construction</span
                        ><!-- …and 2 more like this (<span class="bcn-wb__phase-tag">) -->
                      </div>
                      <div class="bcn-wb__head-years">
                        <span class="bcn-wb__yr" style="left: 0%; width: 5.26%"
                          ><span class="bcn-wb__yr-label">’26</span></span
                        ><span class="bcn-wb__yr" style="left: 5.26%; width: 5.26%"
                          ><span class="bcn-wb__yr-label">’27</span></span
                        ><span class="bcn-wb__yr is-five" style="left: 21.05%; width: 5.26%"
                          ><span class="bcn-wb__yr-label">’30</span></span
                        ><!-- …and 16 more like this (<span class="bcn-wb__yr">) -->
                      </div>
                      <div class="bcn-wb__head-ms">
                        <span
                          class="bcn-wb__ms-tag"
                          style="left: 26.31%"
                          title="30% design (WY2031)"
                          >30%</span
                        ><span
                          class="bcn-wb__ms-tag is-alt"
                          style="left: 31.57%"
                          title="60% design (WY2032)"
                          >60%</span
                        ><!-- …and 3 more like this (<span class="bcn-wb__ms-tag">) -->
                      </div>
                    </div>
                  </header>
                  <!-- ── Body: recursive rows (no dependency overlay) ── -->
                  <div class="bcn-wb__body">
                    <div
                      class="bcn-wb__row is-program"
                      data-id="COA-10.19"
                      data-start="2026-07"
                      data-end="2032-10"
                      data-tier="program"
                      data-depth="0"
                      data-parent=""
                      data-has-children="1"
                      data-lead=""
                    >
                      <div class="bcn-wb__label" style="--_indent: 0">
                        <button
                          type="button"
                          class="bcn-wb__caret"
                          aria-expanded="true"
                          aria-label="Collapse Fisheries Evaluation Studies"
                        >
                          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                            <path
                              d="m6 9 6 6 6-6"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg></button
                        ><button
                          type="button"
                          class="bcn-wb__name-btn"
                          title="COA-10.19 — Fisheries Evaluation Studies"
                          aria-label="Open COA-10.19 Fisheries Evaluation Studies"
                        >
                          <span class="bcn-wb__id">COA-10.19</span
                          ><span class="bcn-wb__name">Fisheries Evaluation Studies</span></button
                        ><span class="bcn-wb__add"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              aria-label="Add study"
                              title="Add study"
                            >
                              <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg
                              ></span></button></span></span
                        ><esa-dropdown-menu class="bcn-wb__menu" position="below-end" width="auto"
                          ><button
                            type="button"
                            class="bcn-wb__kebab"
                            aria-label="Actions for Fisheries Evaluation Studies"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-controls="menu"
                          >
                            ⋯
                          </button></esa-dropdown-menu
                        >
                      </div>
                      <span class="bcn-wb__lead" title="DWR-DISE">DWR-DISE</span
                      ><span class="bcn-wb__money">$8.5M</span>
                      <div class="bcn-wb__plot">
                        <span
                          class="bcn-wb__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-wb__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><!-- …and 2 more like this (<span class="bcn-wb__band">) --><span
                          class="bcn-wb__grid"
                          style="left: 5.26%"
                        ></span
                        ><span class="bcn-wb__grid" style="left: 10.53%"></span
                        ><span class="bcn-wb__grid is-five" style="left: 21.05%"></span
                        ><!-- …and 15 more like this (<span class="bcn-wb__grid">) --><span
                          class="bcn-wb__ms-line"
                          style="left: 26.31%"
                        ></span
                        ><span class="bcn-wb__ms-line" style="left: 31.57%"></span
                        ><!-- …and 3 more like this (<span class="bcn-wb__ms-line">) --><span
                          class="bcn-wb__today"
                          style="left: 2.9%"
                        ></span
                        ><span
                          class="bcn-wb__summary"
                          style="left: 2.61%; width: 33.3%"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                    <div
                      class="bcn-wb__row is-study"
                      data-id="STY-014"
                      data-start="2026-07"
                      data-end="2031-10"
                      data-tier="study"
                      data-depth="1"
                      data-parent="COA-10.19"
                      data-has-children="1"
                      data-lead="DWR-DISE"
                    >
                      <div class="bcn-wb__label" style="--_indent: 1">
                        <button
                          type="button"
                          class="bcn-wb__caret"
                          aria-expanded="true"
                          aria-label="Collapse Migration &amp; Survival Study"
                        >
                          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                            <path
                              d="m6 9 6 6 6-6"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg></button
                        ><button
                          type="button"
                          class="bcn-wb__name-btn"
                          title="STY-014 — Migration &amp; Survival Study"
                          aria-label="Open STY-014 Migration &amp; Survival Study"
                        >
                          <span class="bcn-wb__id">STY-014</span
                          ><span class="bcn-wb__ref" title="ITP condition reference">10.19.1</span
                          ><span class="bcn-wb__name">Migration &amp; Survival Study</span></button
                        ><span class="bcn-wb__add"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              aria-label="Add sub-study"
                              title="Add sub-study"
                            >
                              <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg
                              ></span></button></span></span
                        ><esa-dropdown-menu class="bcn-wb__menu" position="below-end" width="auto"
                          ><button
                            type="button"
                            class="bcn-wb__kebab"
                            aria-label="Actions for Migration &amp; Survival Study"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-controls="menu"
                          >
                            ⋯
                          </button></esa-dropdown-menu
                        >
                      </div>
                      <span class="bcn-wb__lead" title="Lead: DWR-DISE">DWR-DISE</span
                      ><span class="bcn-wb__money">$5.3M</span>
                      <div class="bcn-wb__plot">
                        <span
                          class="bcn-wb__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-wb__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><!-- …and 2 more like this (<span class="bcn-wb__band">) --><span
                          class="bcn-wb__grid"
                          style="left: 5.26%"
                        ></span
                        ><span class="bcn-wb__grid" style="left: 10.53%"></span
                        ><span class="bcn-wb__grid is-five" style="left: 21.05%"></span
                        ><!-- …and 15 more like this (<span class="bcn-wb__grid">) --><span
                          class="bcn-wb__ms-line"
                          style="left: 26.31%"
                        ></span
                        ><span class="bcn-wb__ms-line" style="left: 31.57%"></span
                        ><!-- …and 3 more like this (<span class="bcn-wb__ms-line">) --><span
                          class="bcn-wb__today"
                          style="left: 2.9%"
                        ></span
                        ><span
                          class="bcn-wb__summary"
                          style="left: 2.61%; width: 28.03%"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                    <div
                      class="bcn-wb__row is-substudy"
                      data-id="SUB-021"
                      data-start="2026-07"
                      data-end="2029-12"
                      data-tier="substudy"
                      data-depth="2"
                      data-parent="STY-014"
                      data-has-children="1"
                      data-lead="DWR-DISE"
                    >
                      <div class="bcn-wb__label" style="--_indent: 2">
                        <button
                          type="button"
                          class="bcn-wb__caret"
                          aria-expanded="true"
                          aria-label="Collapse Near-field intake behavior &amp; survival"
                        >
                          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                            <path
                              d="m6 9 6 6 6-6"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg></button
                        ><button
                          type="button"
                          class="bcn-wb__name-btn"
                          title="SUB-021 — Near-field intake behavior &amp; survival"
                          aria-label="Open SUB-021 Near-field intake behavior &amp; survival"
                        >
                          <span class="bcn-wb__id">SUB-021</span
                          ><span class="bcn-wb__name"
                            >Near-field intake behavior &amp; survival</span
                          ></button
                        ><span class="bcn-wb__add"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              aria-label="Add task"
                              title="Add task"
                            >
                              <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg
                              ></span></button></span></span
                        ><esa-dropdown-menu class="bcn-wb__menu" position="below-end" width="auto"
                          ><button
                            type="button"
                            class="bcn-wb__kebab"
                            aria-label="Actions for Near-field intake behavior &amp; survival"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-controls="menu"
                          >
                            ⋯
                          </button></esa-dropdown-menu
                        >
                      </div>
                      <span class="bcn-wb__lead is-inherited" title="Inherited lead: DWR-DISE"
                        >DWR-DISE</span
                      ><span class="bcn-wb__money">$2.4M</span>
                      <div class="bcn-wb__plot">
                        <span
                          class="bcn-wb__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-wb__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><!-- …and 2 more like this (<span class="bcn-wb__band">) --><span
                          class="bcn-wb__grid"
                          style="left: 5.26%"
                        ></span
                        ><span class="bcn-wb__grid" style="left: 10.53%"></span
                        ><span class="bcn-wb__grid is-five" style="left: 21.05%"></span
                        ><!-- …and 15 more like this (<span class="bcn-wb__grid">) --><span
                          class="bcn-wb__ms-line"
                          style="left: 26.31%"
                        ></span
                        ><span class="bcn-wb__ms-line" style="left: 31.57%"></span
                        ><!-- …and 3 more like this (<span class="bcn-wb__ms-line">) --><span
                          class="bcn-wb__today"
                          style="left: 2.9%"
                        ></span
                        ><span
                          class="bcn-wb__summary"
                          style="left: 2.61%; width: 18.39%"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                    <div
                      class="bcn-wb__row is-task is-leaf"
                      data-id="TSK-029"
                      data-start="2026-07"
                      data-end="2027-03"
                      data-tier="task"
                      data-depth="3"
                      data-parent="SUB-021"
                      data-has-children="0"
                      data-lead="DWR-DISE"
                    >
                      <div class="bcn-wb__label" style="--_indent: 3">
                        <span class="bcn-wb__caret-spacer"></span
                        ><button
                          type="button"
                          class="bcn-wb__name-btn"
                          title="TSK-029 — Detailed baseline study plan"
                          aria-label="Open TSK-029 Detailed baseline study plan"
                        >
                          <span class="bcn-wb__id">TSK-029</span
                          ><span class="bcn-wb__name">Detailed baseline study plan</span></button
                        ><esa-dropdown-menu class="bcn-wb__menu" position="below-end" width="auto"
                          ><button
                            type="button"
                            class="bcn-wb__kebab"
                            aria-label="Actions for Detailed baseline study plan"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-controls="menu"
                          >
                            ⋯
                          </button></esa-dropdown-menu
                        >
                      </div>
                      <span class="bcn-wb__lead is-inherited" title="Inherited lead: DWR-DISE"
                        >DWR-DISE</span
                      ><span class="bcn-wb__money">$180k</span>
                      <div class="bcn-wb__plot">
                        <span
                          class="bcn-wb__band"
                          data-phase="baseline"
                          style="left: 15.79%; width: 26.32%"
                        ></span
                        ><span
                          class="bcn-wb__band"
                          data-phase="in-water-construction"
                          style="left: 42.11%; width: 47.37%"
                        ></span
                        ><!-- …and 2 more like this (<span class="bcn-wb__band">) --><span
                          class="bcn-wb__grid"
                          style="left: 5.26%"
                        ></span
                        ><span class="bcn-wb__grid" style="left: 10.53%"></span
                        ><span class="bcn-wb__grid is-five" style="left: 21.05%"></span
                        ><!-- …and 15 more like this (<span class="bcn-wb__grid">) --><span
                          class="bcn-wb__ms-line"
                          style="left: 26.31%"
                        ></span
                        ><span class="bcn-wb__ms-line" style="left: 31.57%"></span
                        ><!-- …and 3 more like this (<span class="bcn-wb__ms-line">) --><span
                          class="bcn-wb__today"
                          style="left: 2.9%"
                        ></span
                        ><button
                          type="button"
                          class="bcn-wb__bar"
                          style="left: 2.61%; width: 3.89%; --_c: #91cf60"
                          title="TSK-029 — Detailed baseline study plan · On track"
                          aria-label="Open TSK-029 Detailed baseline study plan"
                        ></button>
                      </div>
                    </div>
                    <!-- …and 62 more like this (<div class="bcn-wb__row is-program">) -->
                  </div>
                  <!-- ── Ghost add-row: Add commitment lives at the bottom of the tree body.
           The button rides the sticky label column so it stays visible while
           the plot scrolls. Same #bcn-wb-add-program hook as before. ── -->
                  <div class="bcn-wb__addrow">
                    <span id="bcn-wb-add-program"
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-dashed esa-button--sm"
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
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path></svg></span
                          ><span class="esa-button__label">Add commitment</span>
                        </button></span
                      ></span
                    ><span class="bcn-wb__lead" aria-hidden="true"></span
                    ><span class="bcn-wb__money" aria-hidden="true"></span>
                  </div>
                  <!-- ── Sum line: the money column totals at the bottom, spreadsheet-style. ── -->
                  <div class="bcn-wb__row bcn-wb__row--total">
                    <div class="bcn-wb__label bcn-wb__label--total" style="--_indent: 0">Total</div>
                    <span class="bcn-wb__lead" aria-hidden="true"></span
                    ><span class="bcn-wb__money bcn-wb__money--total" data-wb-money-total=""
                      >$18.7M</span
                    >
                    <div class="bcn-wb__plot"></div>
                  </div>
                </div>
              </div>
              <!-- Row template cloned by the CRUD script for newly added nodes (unscheduled). --><template
                id="bcn-wb-row-tpl"
                ><div
                  class="bcn-wb__row is-leaf"
                  data-id=""
                  data-tier=""
                  data-depth="0"
                  data-parent=""
                  data-has-children="0"
                >
                  <div class="bcn-wb__label" style="--_indent: 0">
                    <span class="bcn-wb__caret-spacer"></span
                    ><button type="button" class="bcn-wb__name-btn">
                      <span class="bcn-wb__id"></span><span class="bcn-wb__name"></span></button
                    ><span class="bcn-wb__add"
                      ><span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                        data-astro-cid-5nhxdd72=""
                        ><button
                          class="esa-button__native typography-microcopy-2xs"
                          type="button"
                          aria-label="Add child"
                          title="Add child"
                          data-astro-cid-5nhxdd72=""
                        >
                          <span
                            class="esa-icon esa-icon--xs"
                            aria-hidden="true"
                            data-astro-cid-wcwfib5m=""
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
                              data-astro-cid-wcwfib5m=""
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path></svg
                          ></span></button></span></span
                    ><esa-dropdown-menu class="bcn-wb__menu" position="below-end" width="auto"
                      ><button type="button" class="bcn-wb__kebab" aria-label="Row actions">
                        ⋯
                      </button></esa-dropdown-menu
                    >
                  </div>
                  <span class="bcn-wb__lead"></span><span class="bcn-wb__money">—</span>
                  <div class="bcn-wb__plot">
                    <span
                      class="bcn-wb__band"
                      data-phase="baseline"
                      style="left: 15.79%; width: 26.32%"
                    ></span
                    ><span
                      class="bcn-wb__band"
                      data-phase="in-water-construction"
                      style="left: 42.11%; width: 47.37%"
                    ></span
                    ><span
                      class="bcn-wb__band"
                      data-phase="phase1-ops"
                      style="left: 89.47%; width: 5.26%"
                    ></span
                    ><span
                      class="bcn-wb__band"
                      data-phase="phase2-ops"
                      style="left: 94.74%; width: 5.26%"
                    ></span
                    ><span class="bcn-wb__grid" style="left: 5.26%"></span
                    ><span class="bcn-wb__grid" style="left: 10.53%"></span
                    ><span class="bcn-wb__grid" style="left: 15.79%"></span
                    ><span class="bcn-wb__grid is-five" style="left: 21.05%"></span
                    ><span class="bcn-wb__grid" style="left: 26.32%"></span
                    ><span class="bcn-wb__grid" style="left: 31.58%"></span
                    ><span class="bcn-wb__grid" style="left: 36.84%"></span
                    ><span class="bcn-wb__grid" style="left: 42.11%"></span
                    ><span class="bcn-wb__grid is-five" style="left: 47.37%"></span
                    ><span class="bcn-wb__grid" style="left: 52.63%"></span
                    ><span class="bcn-wb__grid" style="left: 57.89%"></span
                    ><span class="bcn-wb__grid" style="left: 63.16%"></span
                    ><span class="bcn-wb__grid" style="left: 68.42%"></span
                    ><span class="bcn-wb__grid is-five" style="left: 73.68%"></span
                    ><span class="bcn-wb__grid" style="left: 78.95%"></span
                    ><span class="bcn-wb__grid" style="left: 84.21%"></span
                    ><span class="bcn-wb__grid" style="left: 89.47%"></span
                    ><span class="bcn-wb__grid" style="left: 94.74%"></span
                    ><span class="bcn-wb__ms-line" style="left: 26.31%"></span
                    ><span class="bcn-wb__ms-line" style="left: 31.57%"></span
                    ><span class="bcn-wb__ms-line" style="left: 44.28%"></span
                    ><span class="bcn-wb__ms-line" style="left: 89.47%"></span
                    ><span class="bcn-wb__ms-line" style="left: 94.73%"></span
                    ><span class="bcn-wb__unscheduled"
                      >Unscheduled — open the panel to set a start &amp; end month</span
                    >
                  </div>
                </div></template
              ><!-- Delete confirmation (esa-confirm-dialog lego). Delete is reachable from the
       node-edit drawer too, so this must stack ABOVE the drawer's --z-modal:1300. --><esa-confirm-dialog
                id="bcn-wb-confirm"
                heading="Delete node"
                variant="danger"
                confirm-label="Delete"
                cancel-label="Keep"
                style="--z-modal: 1400; --z-modal-backdrop: 1350"
              ></esa-confirm-dialog
              ><!-- Reparent chooser (esa-dialog + esa-select legos). --><esa-dialog
                id="bcn-wb-reparent"
                heading="Move to a different parent"
                size="sm"
                ><esa-select
                  id="bcn-wb-reparent-select"
                  label="New parent"
                  placeholder="Choose a parent…"
                  size="md"
                ></esa-select
                ><span slot="footer" class="bcn-wb__dialog-foot"
                  ><button type="button" class="bcn-wb__dialog-cancel" id="bcn-wb-reparent-cancel">
                    Cancel</button
                  ><button type="button" class="bcn-wb__dialog-move" id="bcn-wb-reparent-move">
                    Move
                  </button></span
                ></esa-dialog
              >
            </div>
            <!-- script type="module" removed (0 bytes) -->
          </div>
          <div id="view-roles" hidden="">
            <div
              class="bcn-roles"
              data-workstreams='["lead","design","implementation","compliance","engineering","construction","modeling","operations","baseline","near-field","far-field"]'
            >
              <!-- ── Filter bar (parity with the gantt's controls; Search + Lead — the two
       that apply to a flat study matrix). Every control is a lego. ── -->
              <div class="bcn-roles__filterbar">
                <div class="bcn-roles__fb-group">
                  <span class="bcn-roles__fb-label">Search</span
                  ><esa-text-field
                    id="bcn-roles-search"
                    placeholder="Search study or COA"
                    size="sm"
                  ></esa-text-field>
                </div>
```
