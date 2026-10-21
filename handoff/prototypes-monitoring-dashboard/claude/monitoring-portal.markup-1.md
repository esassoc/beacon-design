# Monitoring Portal: markup, part 1 of 2

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
      <div class="nav-section">
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
            <a href="/beacon-design/prototypes/monitoring/dashboard" class="nav-sublink active"
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
            ><span class="breadcrumb-item" aria-current="page">Monitoring Portal</span>
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
                    d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
                  ></path>
                  <circle cx="12" cy="8" r="2"></circle>
                  <path
                    d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
                  ></path></svg></span
              >Monitoring Portal
            </h1>
            <span
              ><span
                class="bcn-component-picker"
                data-component-picker=""
                data-components='["2024-2029 Geotechnical Activities","2027 Geotechnical Activities - Covered under ITP","AEM Surveys - Fall 2026","Compensatory Mitigation 1 - I-5 Ponds"]'
                data-storage-key="beacon.activeComponent"
                data-default="2024-2029 Geotechnical Activities"
                ><esa-dropdown-menu
                  position="below-start"
                  data-component-picker-menu="true"
                  width="auto"
                  ><button
                    type="button"
                    class="bcn-component-picker__trigger"
                    aria-label="Switch component"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-controls="menu"
                  >
                    <span class="bcn-component-picker__label" data-component-picker-label=""
                      >2024-2029 Geotechnical Activities</span
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
                    ></span></button></esa-dropdown-menu></span
              ><!-- script type="module" removed (0 bytes) --></span
            >
          </div>
        </section>
        <section class="page-layout__content">
          <!-- script type="application/json" removed (450 bytes) -->
          <div
            class="mpdash"
            data-mpdash=""
            data-geotech-component="2024-2029 Geotechnical Activities"
          >
            <div class="mpd-tracks" aria-hidden="true"><i></i><i></i><i></i></div>
            <!-- ═══ Band A ═══ --><!-- ═══ Band B ═══ --><!-- ═══ Band C ═══ --><!-- ═══ Band D ═══ --><!-- ═══ Band E ═══ --><!-- ═══ Band F ═══ --><!-- ═══ Band G ═══ --><!-- bcn-lego-checked: the add tile is the board's own dashed affordance
           (spec §10.8; checked esa-empty-state — a full-region message, wrong
           shape; esa-button — real chrome, this is a wireframe void). -->
            <section
              class="bcn-dwidget"
              data-widget-id="obs-active"
              data-widget-type="obs-active"
              data-w="2"
              style="--_accent: var(--bcn-mark-teal); grid-row-end: span 151"
              data-span="151"
            >
              <div class="esa-card">
                <div class="esa-card__header typography-title-sm-strong">
                  <div class="repel bcn-dwidget__head" data-gap="sm">
                    <span class="cluster" data-gap="sm"
                      ><span class="bcn-dwidget__glyph" aria-hidden="true"
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
                            <path d="M10 10h4"></path>
                            <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"></path>
                            <!-- …and 4 more like this (<path>) -->
                          </svg></span
                        ></span
                      >
                      <h3 class="bcn-dwidget__title typography-title-sm-strong">
                        Active Observations
                      </h3></span
                    ><span class="bcn-dwidget__tools cluster" data-gap="xs"
                      ><button
                        type="button"
                        class="bcn-dwidget__grip"
                        data-widget-grip=""
                        aria-label="Move Active Observations"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="9" cy="12" r="1"></circle>
                          <circle cx="9" cy="5" r="1"></circle>
                          <!-- …and 4 more like this (<circle>) -->
                        </svg></button
                      ><esa-popover
                        class="bcn-widget-menu"
                        data-widget-menu="true"
                        trigger="click"
                        position="bottom"
                        label="Widget options"
                        has-arrow="false"
                        appearance="default"
                        ><button
                          type="button"
                          class="bcn-widget-menu__kebab"
                          aria-label="Options for Active Observations"
                          aria-expanded="false"
                          aria-haspopup="dialog"
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
                              <circle
                                cx="5"
                                cy="12"
                                r="1.7"
                                fill="currentColor"
                                stroke="none"
                              ></circle>
                              <circle
                                cx="12"
                                cy="12"
                                r="1.7"
                                fill="currentColor"
                                stroke="none"
                              ></circle>
                              <circle
                                cx="19"
                                cy="12"
                                r="1.7"
                                fill="currentColor"
                                stroke="none"
                              ></circle></svg
                          ></span>
                        </button>
                        <div slot="content" class="bcn-widget-menu__panel">
                          <esa-button-toggle
                            class="bcn-widget-menu__width"
                            size="xs"
                            label="Width"
                            data-menu-width="true"
                          ></esa-button-toggle>
                          <div class="bcn-widget-menu__rule" role="separator"></div>
                          <button
                            type="button"
                            class="bcn-widget-menu__item"
                            data-menu-action="configure"
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
                                <path d="M20 7h-9"></path>
                                <path d="M14 17H5"></path>
                                <circle cx="17" cy="17" r="3"></circle>
                                <circle cx="7" cy="7" r="3"></circle></svg></span
                            >Configure</button
                          ><button
                            type="button"
                            class="bcn-widget-menu__item bcn-widget-menu__item--danger"
                            data-menu-action="remove"
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
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                <line x1="10" x2="10" y1="11" y2="17"></line>
                                <line x1="14" x2="14" y1="11" y2="17"></line></svg></span
                            >Remove widget
                          </button>
                        </div></esa-popover
                      ><!-- script type="module" removed (0 bytes) --></span
                    >
                  </div>
                </div>
                <div class="esa-card__body typography-body-md">
                  <div class="bcn-dwidget__body stack" data-gap="md">
                    <div class="bcn-widget-flow">
                      <div data-section="count" data-flow="figure" class="stack" data-gap="sm">
                        <span class="cluster bcn-shead__line" data-gap="sm"
                          ><span
                            class="bcn-shead__title typography-label-md-strong"
                            data-section-title=""
                            >Active observations</span
                          ></span
                        ><span style="--stat-value-size: var(--font-size-900)"
                          ><div class="esa-stat">
                            <div class="esa-stat__value typography-display-sm">9</div>
                            <div class="esa-stat__label typography-label-md">
                              Active observations
                            </div>
                          </div></span
                        >
                      </div>
                      <div
                        class="stack is-rowmate"
                        data-gap="sm"
                        data-section="breakdown"
                        data-flow="chart"
                      >
                        <span class="cluster bcn-shead__line" data-gap="sm"
                          ><span
                            class="bcn-shead__title typography-label-md-strong"
                            data-section-title=""
                            >Observations by type</span
                          ></span
                        >
                        <div class="bcn-viz-donut cluster" data-gap="md">
                          <svg
                            class="bcn-viz-donut__ring"
                            width="96"
                            height="96"
                            viewBox="0 0 120 120"
                            aria-hidden="true"
                          >
                            <circle
                              cx="60"
                              cy="60"
                              r="42"
                              fill="none"
                              stroke="var(--color-background-elevation-sunken)"
                              stroke-width="18"
                            ></circle>
                            <g transform="rotate(-90 60 60)">
                              <circle
                                cx="60"
                                cy="60"
                                r="42"
                                fill="none"
                                style="stroke: var(--_series-1, var(--bcn-mark-teal))"
                                stroke-width="18"
                                stroke-dasharray="175.93 87.96"
                                stroke-dashoffset="0.00"
                              ></circle>
                              <circle
                                cx="60"
                                cy="60"
                                r="42"
                                fill="none"
                                style="stroke: var(--_series-2, var(--bcn-mark-orange))"
                                stroke-width="18"
                                stroke-dasharray="87.96 175.93"
                                stroke-dashoffset="-175.93"
                              ></circle>
                            </g>
                          </svg>
                          <ul class="bcn-viz-donut__legend stack" data-gap="xs">
                            <li class="bcn-viz-donut__slot">
                              <esa-popover
                                class="bcn-viztip"
                                trigger="hover"
                                position="top"
                                appearance="default"
                                ><span class="bcn-viz-donut__row cluster" aria-expanded="false"
                                  ><span
                                    class="bcn-viz-donut__dot"
                                    style="--_c: var(--_series-1, var(--bcn-mark-teal))"
                                  ></span
                                  ><span class="bcn-viz-donut__label typography-body-md"
                                    >Nesting Birds</span
                                  ><span class="bcn-viz-donut__value typography-label-md-strong"
                                    >6</span
                                  ></span
                                >
                                <div slot="content" class="bcn-viztip__panel">
                                  <span class="bcn-viztip__title">Nesting Birds</span
                                  ><span class="bcn-viztip__row"
                                    ><span
                                      class="bcn-viztip__key"
                                      style="background: var(--_series-1, var(--bcn-mark-teal))"
                                      aria-hidden="true"
                                    ></span
                                    ><span class="bcn-viztip__label">Observations:</span
                                    ><span class="bcn-viztip__value">6</span
                                    ><span class="bcn-viztip__note">67%</span></span
                                  >
                                </div></esa-popover
                              ><!-- script type="module" removed (0 bytes) -->
                            </li>
                            <li class="bcn-viz-donut__slot">
                              <esa-popover
                                class="bcn-viztip"
                                trigger="hover"
                                position="top"
                                appearance="default"
                                ><span class="bcn-viz-donut__row cluster" aria-expanded="false"
                                  ><span
                                    class="bcn-viz-donut__dot"
                                    style="--_c: var(--_series-2, var(--bcn-mark-orange))"
                                  ></span
                                  ><span class="bcn-viz-donut__label typography-body-md"
                                    >Biological Resources</span
                                  ><span class="bcn-viz-donut__value typography-label-md-strong"
                                    >3</span
                                  ></span
                                >
                                <div slot="content" class="bcn-viztip__panel">
                                  <span class="bcn-viztip__title">Biological Resources</span
                                  ><span class="bcn-viztip__row"
                                    ><span
                                      class="bcn-viztip__key"
                                      style="background: var(--_series-2, var(--bcn-mark-orange))"
                                      aria-hidden="true"
                                    ></span
                                    ><span class="bcn-viztip__label">Observations:</span
                                    ><span class="bcn-viztip__value">3</span
                                    ><span class="bcn-viztip__note">33%</span></span
                                  >
                                </div></esa-popover
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!-- …and 4 more like this (<div class="stack">) -->
                    </div>
                    <!-- script type="module" removed (869 bytes) -->
                  </div>
                </div>
                <div class="esa-card__footer typography-meta">
                  <a
                    class="bcn-dwidget__foot"
                    href="/beacon-design/prototypes/monitoring/stream/observations"
                    >All observations →</a
                  >
                </div>
              </div>
            </section>
            <section
              class="bcn-dwidget"
              data-widget-id="obs-nesting-birds"
              data-widget-type="obs-nesting-birds"
              data-w="1"
              style="--_accent: var(--bcn-mark-cyan); grid-row-end: span 85"
              data-span="85"
            >
              <div class="esa-card">
                <div class="esa-card__header typography-title-sm-strong">
                  <div class="repel bcn-dwidget__head" data-gap="sm">
                    <span class="cluster" data-gap="sm"
                      ><span class="bcn-dwidget__glyph" aria-hidden="true"
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
                            <path d="M16 7h.01"></path>
                            <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path>
                            <!-- …and 4 more like this (<path>) -->
                          </svg></span
                        ></span
                      >
                      <h3 class="bcn-dwidget__title typography-title-sm-strong">
                        Nesting Birds
                      </h3></span
                    ><span class="bcn-dwidget__tools cluster" data-gap="xs"
                      ><button
                        type="button"
                        class="bcn-dwidget__grip"
                        data-widget-grip=""
                        aria-label="Move Nesting Birds"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="9" cy="12" r="1"></circle>
                          <circle cx="9" cy="5" r="1"></circle>
                          <!-- …and 4 more like this (<circle>) -->
                        </svg></button
                      ><esa-popover
                        class="bcn-widget-menu"
                        data-widget-menu="true"
                        trigger="click"
                        position="bottom"
                        label="Widget options"
                        has-arrow="false"
                        appearance="default"
                        ><button
                          type="button"
                          class="bcn-widget-menu__kebab"
                          aria-label="Options for Nesting Birds"
                          aria-expanded="false"
                          aria-haspopup="dialog"
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
                              <circle
                                cx="5"
                                cy="12"
                                r="1.7"
                                fill="currentColor"
                                stroke="none"
                              ></circle>
                              <circle
                                cx="12"
                                cy="12"
                                r="1.7"
                                fill="currentColor"
                                stroke="none"
                              ></circle>
                              <circle
                                cx="19"
                                cy="12"
                                r="1.7"
                                fill="currentColor"
                                stroke="none"
                              ></circle></svg
                          ></span>
                        </button>
                        <div slot="content" class="bcn-widget-menu__panel">
                          <esa-button-toggle
                            class="bcn-widget-menu__width"
                            size="xs"
                            label="Width"
                            data-menu-width="true"
                          ></esa-button-toggle>
                          <div class="bcn-widget-menu__rule" role="separator"></div>
                          <button
                            type="button"
                            class="bcn-widget-menu__item"
                            data-menu-action="configure"
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
                                <path d="M20 7h-9"></path>
                                <path d="M14 17H5"></path>
                                <circle cx="17" cy="17" r="3"></circle>
                                <circle cx="7" cy="7" r="3"></circle></svg></span
                            >Configure</button
                          ><button
                            type="button"
                            class="bcn-widget-menu__item bcn-widget-menu__item--danger"
                            data-menu-action="remove"
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
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                <line x1="10" x2="10" y1="11" y2="17"></line>
                                <line x1="14" x2="14" y1="11" y2="17"></line></svg></span
                            >Remove widget
                          </button>
                        </div></esa-popover
                      ></span
                    >
                  </div>
                </div>
                <div class="esa-card__body typography-body-md">
                  <div class="bcn-dwidget__body stack" data-gap="md">
                    <div class="bcn-widget-flow">
                      <div data-section="count" data-flow="figure" class="stack" data-gap="sm">
                        <span class="cluster bcn-shead__line" data-gap="sm"
                          ><span
                            class="bcn-shead__title typography-label-md-strong"
                            data-section-title=""
                            >Total nesting-bird observations</span
                          ></span
                        >
                        <div class="esa-stat">
                          <div class="esa-stat__value typography-display-sm">6</div>
                          <div class="esa-stat__label typography-label-md">
                            Total nesting-bird observations
                          </div>
                        </div>
                      </div>
                      <div class="stack" data-gap="sm" data-section="species" data-flow="chart">
                        <span class="cluster bcn-shead__line" data-gap="sm"
                          ><span
                            class="bcn-shead__title typography-label-md-strong"
                            data-section-title=""
                            >Observations by species</span
                          ></span
                        >
                        <div class="bcn-viz-bars bcn-viz-bars--code">
                          <div class="bcn-viz-bars__row">
                            <span class="bcn-viz-bars__name">CORA</span
                            ><span class="bcn-viz-bars__track" aria-hidden="true"
                              ><span
                                class="bcn-viz-bars__fill"
                                style="width: 100%; --_bar-fill: var(--bcn-mark-teal)"
                              ></span></span
                            ><span class="bcn-viz-bars__val">2</span>
                          </div>
                          <div class="bcn-viz-bars__row">
                            <span class="bcn-viz-bars__name">SWHA</span
                            ><span class="bcn-viz-bars__track" aria-hidden="true"
                              ><span
                                class="bcn-viz-bars__fill"
                                style="width: 50%; --_bar-fill: var(--bcn-mark-teal)"
                              ></span></span
                            ><span class="bcn-viz-bars__val">1</span>
                          </div>
                          <!-- …and 3 more like this (<div class="bcn-viz-bars__row">) -->
                        </div>
                      </div>
                      <div class="stack" data-gap="sm" data-section="latest" data-flow="full">
                        <span class="cluster bcn-shead__line" data-gap="sm"
                          ><span
                            class="bcn-shead__title typography-label-md-strong"
                            data-section-title=""
                            >Latest observations</span
                          ></span
                        >
                        <table
                          class="bcn-mt"
                          role="table"
                          data-fill=""
                          style="--_tracks: auto auto auto"
                        >
                          <thead role="rowgroup">
                            <tr role="row">
                              <th scope="col" role="columnheader">Observation</th>
                              <th scope="col" role="columnheader">Species</th>
                              <th class="bcn-mt--end" scope="col" role="columnheader">Observed</th>
                            </tr>
                          </thead>
                          <tbody role="rowgroup">
                            <tr role="row">
                              <td role="cell">
                                <a href="/beacon-design/prototypes/monitoring/stream/nesting-birds"
                                  >CORA-2695</a
                                >
                              </td>
                              <td role="cell">Common Raven</td>
                              <td class="bcn-mt--end bcn-mt--num" role="cell">Jun 4</td>
                            </tr>
                            <tr role="row">
                              <td role="cell">
                                <a href="/beacon-design/prototypes/monitoring/stream/nesting-birds"
                                  >UNK-5895</a
                                >
                              </td>
                              <td role="cell">Unknown raptor</td>
                              <td class="bcn-mt--end bcn-mt--num" role="cell">Jun 3</td>
                            </tr>
                            <!-- …and 4 more like this (<tr>) -->
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="esa-card__footer typography-meta">
                  <a
                    class="bcn-dwidget__foot"
                    href="/beacon-design/prototypes/monitoring/stream/nesting-birds"
                    >All nesting-bird observations →</a
                  >
                </div>
              </div>
            </section>
            <!-- …and 9 more like this (<section class="bcn-dwidget">) --><button
              type="button"
              class="mpd-add"
              data-mpd-add-open=""
            >
              <span aria-hidden="true">+</span>Add widget
            </button>
          </div>
          <esa-dialog
            id="mpd-add-dialog"
            heading="Add widget"
            size="lg"
            show-close-button="true"
            style="--dialog-width-lg: min(760px, 92vw)"
            ><div class="mpd-add-grid" data-mpd-add-grid="">
              <button
                type="button"
                class="bcn-widget-card"
                data-widget-card=""
                data-widget-id="obs-active"
                data-on=""
              >
                <div class="esa-card">
                  <div class="esa-card__body typography-body-md">
                    <span class="bcn-widget-card__body stack" data-gap="md"
                      ><span class="repel"
                        ><span class="esa-icon esa-icon--md" aria-hidden="true"
                          ><svg
```
