# Science Plan: markup

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
            <a href="#science-plan" class="nav-sublink active">Science Plan</a>
          </li>
          <li class="nav-item">
            <a href="/beacon-design/prototypes/fish-gantt" class="nav-sublink">Study Planning</a>
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
            ><span class="breadcrumb-item" aria-current="page">Science Plan</span>
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
                ></svg></span
              >Science Plan
            </h1>
          </div>
        </section>
        <section class="page-layout__content">
          <div class="bcn-planr">
            <div
              class="bcn-planr__filterbar"
              data-intents='[{"value":"rephrase-rq","label":"Rephrase research question"},{"value":"add-metric","label":"Add / adjust metric"},{"value":"fix-coa-link","label":"Fix COA cross-reference"},{"value":"scope-dispute","label":"Scope dispute"},{"value":"model-peer-review","label":"Model peer-review / documentation"},{"value":"governance","label":"Governance / approval"}]'
              data-coas='[{"value":"10.18","label":"10.18"},{"value":"10.19","label":"10.19"},{"value":"10.19.1","label":"10.19.1 — Migration and… [775 characters]'
            >
              <div class="bcn-planr__fb-top">
                <div class="bcn-planr__fb-group">
                  <span class="bcn-planr__fb-label">Search</span
                  ><esa-text-field
                    id="bcn-planr-search"
                    placeholder="Search sections or comments"
                    size="sm"
                  ></esa-text-field>
                </div>
                <span class="bcn-planr__fb-divider"></span>
                <div class="bcn-planr__fb-group">
                  <span class="bcn-planr__fb-label">Status</span>
                  <div class="bcn-status-select" id="bcn-planr-status" data-value="all">
                    <div class="bcn-status-select__dd">
                      <button
                        type="button"
                        class="bcn-status-select__trigger"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                      >
                        <span
                          class="bcn-status-select__dot bcn-status-select__dot--trigger"
                          style="background: #d4d4d4"
                        ></span
                        ><span class="bcn-status-select__value">All statuses</span
                        ><svg
                          class="bcn-status-select__chev"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                      <ul class="bcn-status-select__menu" role="listbox" hidden="">
                        <li
                          class="bcn-status-select__opt"
                          role="option"
                          data-value="all"
                          data-label="All statuses"
                          data-color="#d4d4d4"
                          aria-selected="true"
                        >
                          <span class="bcn-status-select__dot" style="background: #d4d4d4"></span
                          >All statuses
                        </li>
                        <li
                          class="bcn-status-select__opt"
                          role="option"
                          data-value="open"
                          data-label="Open"
                          data-color="#f2770e"
                          aria-selected="false"
                        >
                          <span class="bcn-status-select__dot" style="background: #f2770e"></span
                          >Open
                        </li>
                        <!-- …and 2 more like this (<li class="bcn-status-select__opt">) -->
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="bcn-planr__fb-group">
                  <span class="bcn-planr__fb-label">Intent</span
                  ><esa-select id="bcn-planr-intent" size="sm"></esa-select>
                </div>
                <div class="bcn-planr__fb-group">
                  <span class="bcn-planr__fb-label">COA</span
                  ><esa-select id="bcn-planr-coa" size="sm"></esa-select>
                </div>
                <span class="bcn-planr__fb-right"
                  ><span class="bcn-planr__counts"
                    ><span class="bcn-planr__count" data-s="open">13 open</span
                    ><span class="bcn-planr__count" data-s="addressed">6 addressed</span
                    ><span class="bcn-planr__count" data-s="resolved">2 resolved</span></span
                  ><button
                    class="esa-filter-clear-button typography-microcopy-sm"
                    type="button"
                    data-esa-filter-clear=""
                    aria-label="Clear all filters"
                  >
                    <svg
                      class="esa-filter-clear-button__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"></path>
                      <path d="m22 3-5 5"></path>
                      <path d="m17 3 5 5"></path></svg
                    ><span class="esa-filter-clear-button__label">Clear</span></button
                  ><!-- script type="module" removed (173 bytes) --></span
                >
              </div>
            </div>
            <div class="bcn-planr__grid">
              <!-- ── Section outline ── -->
              <nav class="bcn-planr__outline" aria-label="Plan sections">
                <ul class="bcn-planr__toc">
                  <li class="bcn-planr__toc-item" data-level="1" data-for="sec-1">
                    <a class="bcn-planr__toc-link" href="#sec-1"
                      ><span class="bcn-planr__toc-num">1</span
                      ><span class="bcn-planr__toc-title"
                        >Introduction, Background, and Purpose</span
                      ></a
                    >
                  </li>
                  <li class="bcn-planr__toc-item" data-level="2" data-for="sec-1-1">
                    <a class="bcn-planr__toc-link" href="#sec-1-1"
                      ><span class="bcn-planr__toc-num">1.1</span
                      ><span class="bcn-planr__toc-title">Introduction and Background</span></a
                    >
                  </li>
                  <!-- …and 18 more like this (<li class="bcn-planr__toc-item">) -->
                </ul>
              </nav>
              <!-- ── Document sections ── -->
              <div class="bcn-planr__doc">
                <section
                  class="bcn-planr__section"
                  id="sec-1"
                  data-level="1"
                  data-search="1 introduction, background, and purpose "
                  data-coas=""
                >
                  <header class="bcn-planr__sec-head">
                    <h2 class="bcn-planr__h1">
                      <span class="bcn-planr__num">1</span>Introduction, Background, and Purpose
                    </h2>
                  </header>
                </section>
                <section
                  class="bcn-planr__section"
                  id="sec-1-1"
                  data-level="2"
                  data-search="1.1 introduction and background the proposed delta conveyance project will construct and operate new conveyance facilities in the north delta along the sacramento river. on february 14, 2025, cdfw issued incidental take permit no. 2081-2024-018-00 under cesa for construction and operation of the dcp."
                  data-coas=""
                >
                  <header class="bcn-planr__sec-head">
                    <h3 class="bcn-planr__h2">
                      <span class="bcn-planr__num">1.1</span>Introduction and Background
                    </h3>
                  </header>
                  <p class="bcn-planr__excerpt">
                    The proposed Delta Conveyance Project will construct and operate new conveyance
                    facilities in the North Delta along the Sacramento River. On February 14, 2025,
                    CDFW issued Incidental Take Permit No. 2081-2024-018-00 under CESA for
                    construction and operation of the DCP.
                  </p>
                </section>
                <!-- …and 18 more like this (<section class="bcn-planr__section">) -->
                <p class="bcn-planr__noresults" hidden="">No sections match the filters.</p>
              </div>
            </div>
          </div>
          <!-- script type="module" removed (0 bytes) -->
        </section>
      </div>
    </div>
  </div>
</div>
```
