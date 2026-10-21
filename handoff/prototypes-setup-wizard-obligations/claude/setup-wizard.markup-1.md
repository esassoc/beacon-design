# Setup Wizard: markup, part 1 of 4

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
                        <span>Obligations in</span
                        ><esa-dropdown-menu
                          class="bcn-swsc__menu"
                          position="below-start"
                          data-sw-chip="category"
                          data-items='[{"label":"All categories","value":""},{"label":"Agency reporting and approvals","value":"agency"},{"label":"Air quality… [731 characters]'
                          data-value=""
                          width="auto"
                          ><button
                            type="button"
                            class="bcn-swsc"
                            aria-label="Category: All categories"
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
                            <span class="bcn-swsc__label" data-sw-chip-label="">All categories</span
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
                        ><!-- script type="module" removed (0 bytes) --><span data-swo-count="title"
                          ><span class="bcn-swcb" aria-label="333 obligations">333</span></span
                        >
                      </h2>
                      <div class="bcn-swsp__actions">
                        <esa-button-toggle
                          class="bcn-swvs"
                          size="sm"
                          value="registry"
                          aria-label="View"
                          data-sw-view-switch="true"
                          data-options='[{"label":"By category","value":"registry"},{"label":"By commitment","value":"chain"}]'
                          data-hrefs='{"registry":"/beacon-design/prototypes/setup-wizard/obligations","chain":"/beacon-design/prototypes/setup-wizard/obligations-chain"}'
                        ></esa-button-toggle
                        ><!-- script type="module" removed (0 bytes) -->
                      </div>
                    </div>
                    <p class="bcn-swsp__intro">
                      Review and approve Obligations and their proposed categorizations.
                    </p>
                  </header>
                  <div class="bcn-swfr">
                    <esa-text-field
                      class="bcn-swfr__search"
                      size="sm"
                      name="swo-search"
                      placeholder="Search obligations"
                      aria-label="Search obligations"
                    ></esa-text-field
                    ><esa-select
                      class="bcn-swfr__picker"
                      size="sm"
                      name="swo-search-class"
                      options='[{"label":"All classes","value":""},{"label":"Adhere","value":"adhere"},{"label":"Monitor","value":"monitor"},{"label":"Notify","value":"notify"},{"label":"Roster","value":"roster"}]'
                      value=""
                      placeholder="All classes"
                      cue="Filter by class."
                    ></esa-select>
                    <div class="bcn-swfr__verbs">
                      <span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                        ><button
                          class="esa-button__native typography-microcopy-2xs"
                          type="button"
                          data-swo-expand="true"
                          title="Open every category"
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
                          data-swo-collapse="true"
                          title="Close every category"
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
                <section class="bcn-swot" aria-label="Obligations" data-swo-mode="review">
                  <p class="bcn-swot__nomatch" data-swo-nomatch="" hidden="">
                    No obligations match.
                  </p>
                  <div class="bcn-swot__body" data-swo-cats="">
                    <details class="bcn-swot__cat" data-swo-branch="" data-swo-cat="agency" open="">
                      <summary class="bcn-swot__row bcn-swot__row--cat">
                        <span class="bcn-swot__chevron" aria-hidden="true"
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
                        ><span class="bcn-swot__name" data-swo-name=""
                          >Agency reporting and approvals</span
                        ><span data-swo-count="cat"
                          ><span class="bcn-swcb" aria-label="2 obligations">2</span></span
                        ><span class="bcn-swot__verbs"
                          ><esa-tooltip text="Rename" position="above" align="center"
                            ><button
                              type="button"
                              class="bcn-swot__verb bcn-swot__verb--quiet"
                              aria-label="Rename category"
                              data-swo-rename=""
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
                          ><esa-tooltip text="Remove" position="above" align="center"
                            ><button
                              type="button"
                              class="bcn-swot__verb bcn-swot__verb--quiet bcn-swot__verb--danger"
                              aria-label="Remove category"
                              data-swo-remove-branch=""
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></esa-tooltip
                          ><esa-tooltip text="Add subcategory" align="end" position="above"
                            ><button
                              type="button"
                              class="bcn-swot__verb"
                              aria-label="Add a subcategory"
                              data-swo-add-sub=""
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
                        ></span>
                      </summary>
                      <div class="bcn-swot__subs" data-swo-subs="">
                        <details
                          class="bcn-swot__sub"
                          data-swo-branch=""
                          data-swo-sub="sightings-reporting"
                        >
                          <summary
                            class="bcn-swot__row bcn-swot__row--sub"
                            data-swo-drop="subcategory"
                          >
                            <span class="bcn-swot__chevron" aria-hidden="true"
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
                            ><span class="bcn-swot__name" data-swo-name=""
                              >Species sightings and CNDDB reporting</span
                            ><span data-swo-count="sub"
                              ><span class="bcn-swcb" aria-label="1 obligations">1</span></span
                            ><span class="bcn-swot__verbs"
                              ><esa-tooltip text="Rename" position="above" align="center"
                                ><button
                                  type="button"
                                  class="bcn-swot__verb bcn-swot__verb--quiet"
                                  aria-label="Rename subcategory"
                                  data-swo-rename=""
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
                              ><esa-tooltip text="Remove" position="above" align="center"
                                ><button
                                  type="button"
                                  class="bcn-swot__verb bcn-swot__verb--quiet bcn-swot__verb--danger"
                                  aria-label="Remove subcategory"
                                  data-swo-remove-branch=""
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
                                      <path d="M18 6 6 18"></path>
                                      <path d="m6 6 12 12"></path></svg
                                  ></span></button></esa-tooltip
                              ><!-- …and 3 more like this (<esa-tooltip>) --></span
                            >
                          </summary>
                          <ul class="bcn-swot__cards" data-swo-drop="subcategory" data-swo-cards="">
                            <li
                              class="bcn-swoc"
                              data-swo-card=""
                              data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                              data-class="notify"
                              draggable="true"
                              data-swo-drag="obligation"
                            >
                              <details class="bcn-swoc__node" data-swo-branch="">
                                <summary class="bcn-swoc__main" data-swo-drop="obligation">
                                  <esa-tooltip text="Drag to move" position="above" align="center"
                                    ><span class="bcn-swoc__grip" aria-hidden="true"
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
                                          <circle cx="9" cy="12" r="1"></circle>
                                          <circle cx="9" cy="5" r="1"></circle>
                                          <!-- …and 4 more like this (<circle>) -->
                                        </svg></span
                                      ></span
                                    ></esa-tooltip
                                  ><span class="bcn-swoc__chevron" aria-hidden="true"
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
                                  ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                                  ><button
                                    type="button"
                                    class="bcn-swoc__title"
                                    data-swo-open=""
                                    data-swo-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                                  >
                                    Biological Monitor daily communication and immediate reports to
                                    the Designated Biologist</button
                                  ><span data-swo-count="obligation"
                                    ><span class="bcn-swcb" aria-label="1 requirements"
                                      >1</span
                                    ></span
                                  ><esa-tooltip text="Edit" position="above" align="center"
                                    ><button
                                      type="button"
                                      class="bcn-swoc__verb"
                                      aria-label="Edit obligation"
                                      data-swo-open=""
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
                                  ><esa-tooltip text="Duplicate" position="above" align="center"
                                    ><button
                                      type="button"
                                      class="bcn-swoc__verb"
                                      aria-label="Duplicate obligation"
                                      data-swo-dup-card=""
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
                                          <rect
                                            width="14"
                                            height="14"
                                            x="8"
                                            y="8"
                                            rx="2"
                                            ry="2"
                                          ></rect>
                                          <path
                                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                                          ></path></svg
                                      ></span></button></esa-tooltip
                                  ><esa-tooltip text="Remove" position="above" align="center"
                                    ><button
                                      type="button"
                                      class="bcn-swoc__verb bcn-swoc__verb--danger"
                                      aria-label="Remove obligation"
                                      data-swo-remove=""
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
                                          <path d="M18 6 6 18"></path>
                                          <path d="m6 6 12 12"></path></svg
                                      ></span></button
                                  ></esa-tooltip>
                                </summary>
                                <ul class="bcn-swoc__reqs">
                                  <li
                                    class="bcn-swoc__req"
                                    draggable="true"
```
