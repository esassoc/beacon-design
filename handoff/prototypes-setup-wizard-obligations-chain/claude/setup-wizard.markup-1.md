# Setup Wizard: markup, part 1 of 2

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
      <div class="nav-section nav-section--active">
        <a href="#setup-wizard" class="nav-section__header nav-section__header--link"
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
              <path
                d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
              ></path>
              <circle cx="12" cy="12" r="10"></circle></svg></span
          ><span class="nav-section__title">Setup Wizard</span></a
        >
      </div>
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
          <li class="nav-item">
            <a href="/beacon-design/prototypes/lists" class="nav-sublink">Lists</a>
          </li>
          <!-- …and 2 more like this (<li class="nav-item">) -->
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
            <a href="#tracking-summary" class="nav-sublink">Tracking Summary</a>
          </li>
          <li class="nav-item">
            <a href="#project-tracking" class="nav-sublink">Project Tracking</a>
          </li>
          <!-- …and 2 more like this (<li class="nav-item">) -->
        </ul>
      </div>
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
              <path
                d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
              ></path>
              <circle cx="12" cy="8" r="2"></circle>
              <path
                d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
              ></path></svg></span
          ><span class="nav-section__title">Monitoring</span
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
            <a href="/beacon-design/prototypes/monitoring/dashboard" class="nav-sublink"
              >Monitoring Portal</a
            >
          </li>
          <li class="nav-item">
            <a href="/beacon-design/prototypes/site-clearance" class="nav-sublink"
              >Site Clearance</a
            >
          </li>
          <!-- …and 2 more like this (<li class="nav-item">) -->
        </ul>
      </div>
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
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
              <path
                d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
              ></path>
              <path d="M12 11h4"></path>
              <!-- …and 3 more like this (<path>) -->
            </svg></span
          ><span class="nav-section__title">Reporting</span
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
            <a href="#progress-report" class="nav-sublink">Progress Report</a>
          </li>
          <li class="nav-item"><a href="#report-center" class="nav-sublink">Report Center</a></li>
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
          <li class="nav-item">
            <a href="#dc-source-documents" class="nav-sublink">Source Documents</a>
          </li>
          <li class="nav-item"><a href="#dc-commitments" class="nav-sublink">Commitments</a></li>
          <!-- …and 3 more like this (<li class="nav-item">) -->
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
      <div class="page-layout__container">
        <section class="page-layout__content">
          <div class="bcn-swf">
            <header class="bcn-swf__head">
              <a class="bcn-swf__home" href="/beacon-design/prototypes/setup-wizard"
                ><span class="bcn-swf__mark" aria-hidden="true"
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
                        d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
                      ></path>
                      <circle cx="12" cy="12" r="10"></circle></svg></span
                ></span>
                <h1 class="bcn-swf__title">Setup Wizard</h1></a
              >
              <p class="bcn-swf__sub">
                From source documents to trackable actions and obligations.
              </p>
            </header>
            <nav class="bcn-swf__nav" aria-label="Setup wizard steps">
              <ol class="bcn-swf__steps">
                <li class="bcn-swf__item">
                  <a
                    class="bcn-swf__step"
                    data-complete=""
                    href="#setup-source-documents"
                    style="--_step: var(--color-source)"
                    ><span class="bcn-swf__icon" aria-hidden="true"
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
                          <path
                            d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                          ></path>
                          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                          <!-- …and 3 more like this (<path>) -->
                        </svg></span
                      ></span
                    ><span class="bcn-swf__label">Source Documents</span
                    ><span class="bcn-swf__check" aria-label="Step complete"
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
                          <path d="M20 6 9 17l-5-5"></path></svg></span></span></a
                  ><span class="bcn-swf__connector" aria-hidden="true"></span>
                </li>
                <li class="bcn-swf__item">
                  <a
                    class="bcn-swf__step"
                    data-complete=""
                    href="#setup-commitments"
                    style="--_step: var(--color-commitment)"
                    ><span class="bcn-swf__icon" aria-hidden="true"
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
                          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                          <path
                            d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                          ></path>
                          <path d="M12 11h4"></path>
                          <!-- …and 3 more like this (<path>) -->
                        </svg></span
                      ></span
                    ><span class="bcn-swf__label">Commitments</span
                    ><span class="bcn-swf__check" aria-label="Step complete"
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
                          <path d="M20 6 9 17l-5-5"></path></svg></span></span></a
                  ><span class="bcn-swf__connector" aria-hidden="true"></span>
                </li>
                <li class="bcn-swf__item bcn-swf__item--fork">
                  <ol class="bcn-swf__branches" aria-label="Either of">
                    <li class="bcn-swf__branch">
                      <span class="bcn-swf__tine" aria-hidden="true"></span
                      ><a
                        class="bcn-swf__step"
                        href="/beacon-design/prototypes/setup-wizard/actions"
                        style="--_step: var(--color-action)"
                        ><span class="bcn-swf__icon" aria-hidden="true"
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
                              <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                              <path d="M4 6h.01"></path>
                              <!-- …and 4 more like this (<path>) -->
                              <circle cx="12" cy="12" r="2"></circle>
                              <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                        ><span class="bcn-swf__label">Actions</span></a
                      >
                    </li>
                    <li class="bcn-swf__branch">
                      <span class="bcn-swf__tine" aria-hidden="true"></span
                      ><a
                        class="bcn-swf__step"
                        data-active=""
                        aria-current="step"
                        href="/beacon-design/prototypes/setup-wizard/obligations"
                        style="--_step: var(--color-obligation)"
                        ><span class="bcn-swf__icon" aria-hidden="true"
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
                              <path
                                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                              ></path>
                              <path d="m9 12 2 2 4-4"></path></svg></span></span
                        ><span class="bcn-swf__label">Obligations</span></a
                      >
                    </li>
                  </ol>
                </li>
                <!-- …and 1 more like this (<li class="bcn-swf__item">) -->
              </ol>
            </nav>
            <div class="bcn-swf__body">
              <div class="stack" data-gap="md">
                <section class="bcn-swsp" style="--_step: var(--color-obligation)">
                  <header class="bcn-swsp__header">
                    <div class="bcn-swsp__row">
                      <span class="bcn-swsp__num" aria-hidden="true">5</span>
                      <h2 class="bcn-swsp__title">
                        <span>Obligations by Commitment</span
                        ><esa-dropdown-menu
                          class="bcn-swsc__menu"
                          position="below-start"
                          data-sw-chip="coverage"
                          data-items='[{"label":"All Requirements","value":""},{"label":"Orphaned Requirements","value":"unrouted"},{"label":"Multiple Obligations","value":"several"}]'
                          data-value=""
                          width="auto"
                          ><button
                            type="button"
                            class="bcn-swsc"
                            aria-label="Coverage: All Requirements"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-controls="menu"
                            style="
                              font-family: Besley, serif;
                              font-size: 18px;
                              font-weight: 600;
                              line-height: 21.6px;
                            "
                          >
                            <span class="bcn-swsc__label" data-sw-chip-label=""
                              >All Requirements</span
                            ><span class="bcn-swsc__chevron" aria-hidden="true"
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
                                  <path d="m6 9 6 6 6-6"></path></svg></span
                            ></span></button></esa-dropdown-menu
                        ><!-- script type="module" removed (0 bytes) --><span data-swc-count="title"
                          ><span class="bcn-swcb" aria-label="854 requirements">854</span></span
                        >
                      </h2>
                      <div class="bcn-swsp__actions">
                        <esa-button-toggle
                          class="bcn-swvs"
                          size="sm"
                          value="chain"
                          aria-label="View"
                          data-sw-view-switch="true"
                          data-options='[{"label":"By category","value":"registry"},{"label":"By commitment","value":"chain"}]'
                          data-hrefs='{"registry":"/beacon-design/prototypes/setup-wizard/obligations","chain":"/beacon-design/prototypes/setup-wizard/obligations-chain"}'
                        ></esa-button-toggle
                        ><!-- script type="module" removed (0 bytes) -->
                      </div>
                    </div>
                    <p class="bcn-swsp__intro">
                      Follow each commitment down to its requirements and the obligations they
                      became. Filter to the orphans, requirements in no obligation and no action,
                      and open any requirement to add it to an obligation.
                    </p>
                  </header>
                  <div class="bcn-swfr">
                    <esa-text-field
                      class="bcn-swfr__search"
                      size="sm"
                      name="swc-search"
                      placeholder="Search requirements"
                      aria-label="Search requirements"
                    ></esa-text-field>
                    <div class="bcn-swfr__verbs">
                      <span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                        ><button
                          class="esa-button__native typography-microcopy-2xs"
                          type="button"
                          data-swc-expand="true"
                          title="Open every commitment"
                        >
                          <span class="esa-button__label"
                            ><span class="sw-verb"
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
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path></svg></span
                              >Expand all</span
                            ></span
                          >
                        </button></span
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                        ><button
                          class="esa-button__native typography-microcopy-2xs"
                          type="button"
                          data-swc-collapse="true"
                          title="Close every commitment"
                        >
                          <span class="esa-button__label"
                            ><span class="sw-verb"
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
                                  <path d="m7 20 5-5 5 5"></path>
                                  <path d="m7 4 5 5 5-5"></path></svg></span
                              >Collapse all</span
                            ></span
                          >
                        </button></span
                      >
                    </div>
                  </div>
                  <!-- script type="module" removed (0 bytes) -->
                </section>
                <section class="bcn-swc" data-swc-tree="" data-swc-mode="review">
                  <p class="bcn-swc__nomatch" data-swc-nomatch="" hidden="">
                    No requirements match.
                  </p>
                  <div class="bcn-swc__body">
                    <details class="bcn-swc__cmt" data-swc-cmt="" data-code="COA 4">
                      <summary class="bcn-swc__row bcn-swc__row--cmt">
                        <span class="bcn-swc__chevron" aria-hidden="true"
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
                              <path d="m9 18 6-6-6-6"></path></svg></span></span
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 4</span
                        ><span
                          class="bcn-swc__name"
                          data-swc-text="ESA Consultation and ITP Precedence"
                          >ESA Consultation and ITP Precedence</span
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span
                        ><span class="bcn-swc__gap" data-swc-gap="" hidden="">0 orphaned</span
                        ><span class="bcn-swc__verbs"
                          ><esa-tooltip text="Expand to obligations" position="above" align="center"
                            ><button
                              type="button"
                              class="bcn-swc__verb"
                              aria-label="Expand to obligations"
                              data-swc-cmt-expand=""
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
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path></svg
                              ></span></button></esa-tooltip
                          ><esa-tooltip text="Collapse" align="end" position="above"
                            ><button
                              type="button"
                              class="bcn-swc__verb"
                              aria-label="Collapse"
                              data-swc-cmt-collapse=""
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
                                  <path d="m7 20 5-5 5 5"></path>
                                  <path d="m7 4 5 5 5-5"></path></svg
                              ></span></button></esa-tooltip
                        ></span>
                      </summary>
                      <div class="bcn-swc__reqs">
                        <details
                          data-swc-req="req_01M2ESMC0B9X341GWB1FC7JSGT"
                          data-code="COA 4"
                          data-actions="1"
                          class="bcn-swc__req is-leaf"
                        >
                          <summary class="bcn-swc__row bcn-swc__row--req">
                            <span class="bcn-swc__chevron" aria-hidden="true"
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
                                  <path d="m9 18 6-6-6-6"></path></svg></span></span
                            ><button
                              type="button"
                              class="bcn-swc__title"
                              data-swc-open=""
                              data-swc-text="Consult with CDFW on Federal Biological Opinion Terms"
                            >
                              Consult with CDFW on Federal Biological Opinion Terms</button
                            ><span class="bcn-swc__route bcn-swc__route--action" data-swc-route=""
                              >action only</span
                            ><span class="bcn-swc__verbs"
                              ><esa-tooltip
                                text="Add to an obligation"
                                position="above"
                                align="center"
                                ><button
                                  type="button"
                                  class="bcn-swc__verb"
                                  aria-label="Add to an obligation"
                                  data-swc-add=""
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
                                  ></span></button></esa-tooltip
                              ><esa-tooltip text="Open" align="end" position="above"
                                ><button
                                  type="button"
                                  class="bcn-swc__verb"
                                  aria-label="Open requirement"
                                  data-swc-open=""
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
                                      <path
                                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                      ></path>
                                      <path
                                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                                      ></path></svg
                                  ></span></button></esa-tooltip
                            ></span>
                          </summary>
                          <ul class="bcn-swc__obls" data-swc-obls=""></ul>
                        </details>
                      </div>
                    </details>
                    <details class="bcn-swc__cmt" data-swc-cmt="" data-code="COA 6">
                      <summary class="bcn-swc__row bcn-swc__row--cmt">
                        <span class="bcn-swc__chevron" aria-hidden="true"
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
                              <path d="m9 18 6-6-6-6"></path></svg></span></span
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 6</span
                        ><span
                          class="bcn-swc__name"
                          data-swc-text="Construction Phase Authorization Required Before Construction"
                          >Construction Phase Authorization Required Before Construction</span
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span
                        ><span class="bcn-swc__gap" data-swc-gap="" hidden="">0 orphaned</span
                        ><span class="bcn-swc__verbs"
                          ><esa-tooltip text="Expand to obligations" position="above" align="center"
                            ><button
                              type="button"
                              class="bcn-swc__verb"
                              aria-label="Expand to obligations"
                              data-swc-cmt-expand=""
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
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path></svg
                              ></span></button></esa-tooltip
                          ><esa-tooltip text="Collapse" align="end" position="above"
                            ><button
                              type="button"
                              class="bcn-swc__verb"
                              aria-label="Collapse"
                              data-swc-cmt-collapse=""
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
                                  <path d="m7 20 5-5 5 5"></path>
                                  <path d="m7 4 5 5 5-5"></path></svg
                              ></span></button></esa-tooltip
                        ></span>
                      </summary>
                      <div class="bcn-swc__reqs">
                        <details
                          data-swc-req="req_01M2ESMC3SG5TTMS74P5R5PTEA"
                          data-code="COA 6"
                          data-actions="1"
                          class="bcn-swc__req is-leaf"
                        >
                          <summary class="bcn-swc__row bcn-swc__row--req">
                            <span class="bcn-swc__chevron" aria-hidden="true"
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
                                  <path d="m9 18 6-6-6-6"></path></svg></span></span
                            ><button
                              type="button"
                              class="bcn-swc__title"
                              data-swc-open=""
                              data-swc-text="Obtain Construction Phase Authorization Before Each Phase"
                            >
                              Obtain Construction Phase Authorization Before Each Phase</button
                            ><span class="bcn-swc__route bcn-swc__route--action" data-swc-route=""
                              >action only</span
                            ><span class="bcn-swc__verbs"
                              ><esa-tooltip
                                text="Add to an obligation"
                                position="above"
                                align="center"
                                ><button
                                  type="button"
                                  class="bcn-swc__verb"
                                  aria-label="Add to an obligation"
                                  data-swc-add=""
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
                                  ></span></button></esa-tooltip
                              ><esa-tooltip text="Open" align="end" position="above"
                                ><button
                                  type="button"
                                  class="bcn-swc__verb"
                                  aria-label="Open requirement"
                                  data-swc-open=""
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
                                      <path
                                        d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                      ></path>
                                      <path
                                        d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                                      ></path></svg
                                  ></span></button></esa-tooltip
                            ></span>
                          </summary>
                          <ul class="bcn-swc__obls" data-swc-obls=""></ul>
                        </details>
                      </div>
                    </details>
                    <!-- …and 292 more like this (<details class="bcn-swc__cmt">) -->
                  </div>
                  <footer class="bcn-swc__foot">
                    <div class="bcn-swc__legend">
                      <span class="bcn-swc__stat"
                        ><span class="bcn-swc__dot bcn-swc__dot--obligation"></span
                        ><span data-swc-legend="obligation">422</span> in an obligation</span
                      ><span class="bcn-swc__sep">·</span
                      ><span class="bcn-swc__stat"
                        ><span class="bcn-swc__dot bcn-swc__dot--action"></span
                        ><span data-swc-legend="action">428</span> action only</span
                      ><span class="bcn-swc__sep">·</span
                      ><span class="bcn-swc__stat"
                        ><span class="bcn-swc__dot bcn-swc__dot--unrouted"></span
                        ><span data-swc-legend="unrouted">4</span> orphaned</span
                      >
                    </div>
                    <div class="bcn-swc__foot-end">
                      <span
                        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
```
