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
                        data-active=""
                        aria-current="step"
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
                <section class="bcn-swsp" style="--_step: var(--color-action)">
                  <header class="bcn-swsp__header">
                    <div class="bcn-swsp__row">
                      <span class="bcn-swsp__num" aria-hidden="true">4</span>
                      <h2 class="bcn-swsp__title">
                        <span>Actions during</span
                        ><button
                          type="button"
                          class="bcn-swsc"
                          aria-label="Phase: Construction"
                          aria-haspopup="menu"
                        >
                          <span class="bcn-swsc__label">Construction</span
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
                          ></span></button
                        ><!-- script type="module" removed (0 bytes) --><span>for</span
                        ><button
                          type="button"
                          class="bcn-swsc"
                          aria-label="Requirement type: Avoidance &amp; BMPs"
                          aria-haspopup="menu"
                        >
                          <span class="bcn-swsc__label">Avoidance &amp; BMPs</span
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
                          ></span></button
                        ><span class="bcn-swcb" aria-label="280 requirements in this phase and type"
                          >280</span
                        >
                      </h2>
                      <div class="bcn-swsp__actions"></div>
                    </div>
                    <p class="bcn-swsp__intro">
                      Review the actions drafted for this phase and type: approve the ones that are
                      right, edit the ones that are not, and send each requirement still without a
                      home to an obligation or mark it not applicable.
                    </p>
                  </header>
                  <section class="bcn-swai">
                    <button
                      type="button"
                      class="bcn-swai__header"
                      aria-expanded="false"
                      data-swai-toggle=""
                    >
                      <span class="bcn-swai__mark" aria-hidden="true"
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
                            <circle cx="12" cy="12" r="10"></circle></svg></span></span
                      ><span class="bcn-swai__label">Create Actions with AI</span
                      ><span
                        class="bcn-swai__tag"
                        title="This feature is experimental and subject to change."
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
                              d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
                            ></path>
                            <path d="M6.453 15h11.094"></path>
                            <path d="M8.5 2h7"></path></svg></span
                        >Experimental</span
                      ><span class="bcn-swai__chevron bcn-swai__chevron--closed" aria-hidden="true"
                        ><span class="esa-icon esa-icon--md" aria-hidden="true"
                          ><svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swai__chevron bcn-swai__chevron--open" aria-hidden="true"
                        ><span class="esa-icon esa-icon--md" aria-hidden="true"
                          ><svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m6 9 6 6 6-6"></path></svg></span
                      ></span>
                    </button>
                    <div class="bcn-swai__panel" hidden="">
                      <div class="bcn-swai__body">
                        <div class="bcn-swai__main">
                          <div class="bcn-swai__shell">
                            <textarea
                              class="bcn-swai__textarea"
                              rows="3"
                              maxlength="2000"
                              placeholder="Describe how you'd like to group the remaining requirements (e.g., 'group by work area' or 'one action per BMP')"
                              aria-label="Create Actions with AI"
                              style=""
                            ></textarea>
                            <div class="bcn-swai__input-footer">
                              <div class="bcn-swai__chips">
                                <span class="bcn-swai__chip"
                                  >Phase: <strong>Construction</strong></span
                                ><span class="bcn-swai__chip"
                                  >Type: <strong>Avoidance &amp; BMPs</strong></span
                                ><span class="bcn-swai__chip"
                                  >Requirements: <strong>4</strong></span
                                >
                              </div>
                              <div class="bcn-swai__footer-actions">
                                <button type="button" class="bcn-swai__suggest">
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
                                        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                                      ></path>
                                      <path d="M9 18h6"></path>
                                      <path d="M10 22h4"></path></svg></span
                                  >Suggest a Prompt</button
                                ><button
                                  type="button"
                                  class="bcn-swai__send"
                                  aria-label="Send to AI"
                                >
                                  <span class="esa-icon esa-icon--md" aria-hidden="true"
                                    ><svg
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      focusable="false"
                                    >
                                      <path d="m5 12 7-7 7 7"></path>
                                      <path d="M12 19V5"></path></svg
                                  ></span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <aside class="bcn-swai__sidecar" aria-hidden="true"></aside>
                      </div>
                      <div class="bcn-swai__divider" aria-hidden="true"></div>
                      <div class="bcn-swfr bcn-swfr--inset">
                        <esa-text-field
                          class="bcn-swfr__search"
                          size="sm"
                          name="swai-search"
                          placeholder="Search requirements by name or text..."
                          aria-label="Search requirements by name or text..."
                        ></esa-text-field
                        ><esa-select
                          class="bcn-swfr__picker"
                          size="sm"
                          name="swai-search-species"
                          options='[{"label":"Species","value":""}]'
                          value=""
                          placeholder="Species"
                          cue="Filter by species."
                        ></esa-select
                        ><esa-select
                          class="bcn-swfr__picker"
                          size="sm"
                          name="swai-search-milestones"
                          options='[{"label":"Milestones","value":""}]'
                          value=""
                          placeholder="Milestones"
                          cue="Filter by milestones."
                        ></esa-select
                        ><esa-select
                          class="bcn-swfr__picker"
                          size="sm"
                          name="swai-search-activities"
                          options='[{"label":"Activities","value":""}]'
                          value=""
                          placeholder="Activities"
                          cue="Filter by activities."
                        ></esa-select>
                        <div class="bcn-swfr__verbs"></div>
                      </div>
                      <!-- script type="module" removed (0 bytes) -->
                    </div>
                  </section>
                  <!-- script type="module" removed (289 bytes) -->
                </section>
                <div class="bcn-swb">
                  <section
                    class="bcn-swb__col bcn-swb__col--left"
                    aria-label="Unrouted requirements"
                  >
                    <header class="bcn-swb__head">
                      <h2 class="bcn-swb__title">Unrouted requirements</h2>
                      <span class="bcn-swcb" aria-label="4 requirements not yet routed">4</span>
                      <div class="bcn-swb__head-verbs"></div>
                    </header>
                    <div class="bcn-swb__body">
                      <div class="bcn-swrr">
                        <div
                          class="bcn-swrr__main"
                          role="button"
                          tabindex="0"
                          aria-expanded="false"
                          aria-label="Expand Halt Work and Apply Corrective Measures on GGS Discovery"
                        >
                          <span class="bcn-swrr__grip" aria-hidden="true"
                            ><span class="esa-icon esa-icon--md" aria-hidden="true"
                              ><svg
                                width="20"
                                height="20"
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
                          ><span class="bcn-swrr__chevron" aria-hidden="true"
                            ><span class="esa-icon esa-icon--md" aria-hidden="true"
                              ><svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                focusable="false"
                              >
                                <path d="m9 18 6-6-6-6"></path></svg></span></span
                          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.63</span
                          ><span class="bcn-swrr__name"
                            >Halt Work and Apply Corrective Measures on GGS Discovery</span
                          ><span class="bcn-swrr__verbs"
                            ><span
                              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                              ><button
                                class="esa-button__native typography-microcopy-2xs"
                                type="button"
                                title="Route to an obligation instead of an action"
                              >
                                <span class="esa-button__label">To obligation</span>
                              </button></span
                            ><span
                              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                              ><button
                                class="esa-button__native typography-microcopy-2xs"
                                type="button"
                                title="Mark not applicable, with a reason"
                              >
                                <span class="esa-button__label">Not applicable</span>
                              </button></span
                            ></span
                          >
                        </div>
                      </div>
                      <div class="bcn-swrr">
                        <div
                          class="bcn-swrr__main"
                          role="button"
                          tabindex="0"
                          aria-expanded="false"
                          aria-label="Expand Restrict Upland Habitat Work to the GGS Active Season"
                        >
                          <span class="bcn-swrr__grip" aria-hidden="true"
                            ><span class="esa-icon esa-icon--md" aria-hidden="true"
                              ><svg
                                width="20"
                                height="20"
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
                          ><span class="bcn-swrr__chevron" aria-hidden="true"
                            ><span class="esa-icon esa-icon--md" aria-hidden="true"
                              ><svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                focusable="false"
                              >
                                <path d="m9 18 6-6-6-6"></path></svg></span></span
                          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.65</span
                          ><span class="bcn-swrr__name"
                            >Restrict Upland Habitat Work to the GGS Active Season</span
                          ><span class="bcn-swrr__verbs"
                            ><span
                              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                              ><button
                                class="esa-button__native typography-microcopy-2xs"
                                type="button"
                                title="Route to an obligation instead of an action"
                              >
                                <span class="esa-button__label">To obligation</span>
                              </button></span
                            ><span
                              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                              ><button
                                class="esa-button__native typography-microcopy-2xs"
                                type="button"
                                title="Mark not applicable, with a reason"
                              >
                                <span class="esa-button__label">Not applicable</span>
                              </button></span
                            ></span
                          >
                        </div>
                      </div>
                      <!-- …and 2 more like this (<div class="bcn-swrr">) -->
                    </div>
                    <footer class="bcn-swb__foot">
                      <span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                        ><button
                          class="esa-button__native typography-microcopy-2xs"
                          type="button"
                          title="Create one Draft action per unrouted requirement"
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
                                  <path d="M21 12h-8"></path>
                                  <path d="M21 6H8"></path>
                                  <!-- …and 3 more like this (<path>) -->
                                </svg></span
                              >Convert Each (4)</span
                            ></span
                          >
                        </button></span
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                        ><button
                          class="esa-button__native typography-microcopy-2xs"
                          type="button"
                          title="Combine every unrouted requirement into one Draft action"
                        >
                          <span class="esa-button__label"
                            ><span class="sw-verb"
                              ><span class="sw-verb__rot"
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
                                    <path d="m8 6 4-4 4 4"></path>
                                    <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></path>
                                    <path d="m20 22-5-5"></path></svg></span></span
                              >Combine All (4)</span
                            ></span
                          >
                        </button></span
                      >
                    </footer>
                  </section>
                  <section class="bcn-swb__col bcn-swb__col--right" aria-label="Actions">
                    <header class="bcn-swb__head">
                      <h2 class="bcn-swb__title">Actions</h2>
                      <span class="bcn-swcb" aria-label="22 actions">22</span>
                      <div class="bcn-swb__head-verbs">
                        <span
                          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
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
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path></svg></span
                                >New Action</span
                              ></span
                            >
                          </button></span
                        >
                      </div>
                    </header>
                    <div class="bcn-swb__body">
                      <div class="sw-dropzone" aria-hidden="true">
                        <span class="esa-icon esa-icon--md" aria-hidden="true"
                          ><svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
```
