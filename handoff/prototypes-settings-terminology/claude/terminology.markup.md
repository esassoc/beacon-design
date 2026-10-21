# Terminology: markup

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
        ><span class="project-switcher__name">Raul</span
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
          <li class="nav-item"><a href="#dashboard" class="nav-sublink active">Dashboard</a></li>
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
            ><a class="breadcrumb-item" href="/beacon-design/prototypes/settings">Settings</a
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
            ><span class="breadcrumb-item" aria-current="page">Terminology</span>
          </div>
        </nav>
      </section>
      <div class="page-layout__container">
        <section class="page-layout__title">
          <div class="page-layout__title-main"><h1>Terminology</h1></div>
        </section>
        <section class="page-layout__content">
          <div
            class="bcn-settings-shell sidebar"
            data-gap="xl"
            style="--sidebar-width: 15rem; --sidebar-content-min: 62%"
            data-settings-shell=""
          >
            <div class="bcn-settings-shell__rail stack" data-gap="lg">
              <div class="bcn-settings-shell__search">
                <div class="bcn-settings-search">
                  <div class="bcn-settings-search__fieldwrap">
                    <span class="bcn-settings-search__icon" aria-hidden="true"
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
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path></svg></span></span
                    ><esa-text-field
                      class="bcn-settings-search__field"
                      data-settings-search="true"
                      size="md"
                      type="text"
                      placeholder="Search settings…"
                      aria-label="Search settings"
                      role="combobox"
                      aria-controls="bcn-settings-results"
                      aria-expanded="false"
                      aria-autocomplete="list"
                    ></esa-text-field>
                  </div>
                  <div class="bcn-settings-search__panel" data-settings-panel="" hidden="">
                    <p class="bcn-settings-search__count">
                      <span data-settings-count=""></span><kbd>Esc</kbd>
                    </p>
                    <div
                      class="bcn-settings-search__list"
                      id="bcn-settings-results"
                      data-settings-results=""
                      role="listbox"
                      aria-label="Settings search results"
                    >
                      <a
                        class="bcn-settings-search__result"
                        id="bcn-set-r-0"
                        role="option"
                        aria-selected="false"
                        href="/beacon-design/prototypes/settings/tenant-profile"
                        data-result=""
                        data-label="Tenant Profile"
                        data-match="tenant profile the tenant’s name, address, logo, and enabled modules."
                        hidden=""
                        ><span class="bcn-settings-search__result-label" data-result-label=""
                          >Tenant Profile</span
                        ><span class="bcn-settings-search__result-meta">General</span></a
                      ><a
                        class="bcn-settings-search__result"
                        id="bcn-set-r-1"
                        role="option"
                        aria-selected="false"
                        href="/beacon-design/prototypes/settings/tenant-profile#s-tenant-name"
                        data-result=""
                        data-label="Tenant name"
                        data-match="tenant name the organization name shown in the top bar, on generated reports, and in notification emails. organization client name tenant profile"
                        hidden=""
                        ><span class="bcn-settings-search__result-label" data-result-label=""
                          >Tenant name</span
                        ><span class="bcn-settings-search__result-meta"
                          >General · Tenant Profile</span
                        ></a
                      ><!-- …and 50 more like this (<a class="bcn-settings-search__result">) -->
                    </div>
                    <p class="bcn-settings-search__more" data-settings-more="" hidden=""></p>
                    <p class="bcn-settings-search__empty" data-settings-empty="" hidden="">
                      No settings match “<span data-settings-query=""></span>”.
                    </p>
                  </div>
                </div>
                <!-- script type="module" removed (0 bytes) -->
              </div>
              <div class="bcn-settings-shell__nav-scroll">
                <nav class="bcn-settings-nav" aria-label="Settings">
                  <section
                    class="bcn-settings-nav__block bcn-settings-nav__block--esa"
                    aria-labelledby="settings-aud-esa-admin"
                  >
                    <h2
                      class="typography-body-md bcn-settings-nav__aud"
                      id="settings-aud-esa-admin"
                    >
                      <span class="bcn-settings-nav__aud-icon" aria-hidden="true"
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
                              d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                            ></path></svg></span></span
                      >ESA Admin
                    </h2>
                    <div class="bcn-settings-nav__group">
                      <h3
                        class="typography-label-xs bcn-settings-nav__zone"
                        id="settings-zone-esa-admin-platform"
                      >
                        Platform
                      </h3>
                      <ul
                        class="bcn-settings-nav__list"
                        aria-labelledby="settings-zone-esa-admin-platform"
                        role="list"
                      >
                        <li class="bcn-settings-nav__item">
                          <a
                            class="typography-body-sm bcn-settings-nav__link"
                            href="/beacon-design/prototypes/settings/tenants"
                            ><span class="bcn-settings-nav__page">Tenants</span
                            ><span class="bcn-settings-nav__count" aria-label="19 records"
                              >19</span
                            ></a
                          >
                        </li>
                        <li class="bcn-settings-nav__item">
                          <a
                            class="typography-body-sm bcn-settings-nav__link"
                            href="/beacon-design/prototypes/settings/feature-flags"
                            ><span class="bcn-settings-nav__page">Feature Flags</span
                            ><span class="bcn-settings-nav__count" aria-label="14 records"
                              >14</span
                            ></a
                          >
                        </li>
                        <li class="bcn-settings-nav__item">
                          <a
                            class="typography-body-sm bcn-settings-nav__link"
                            href="/beacon-design/prototypes/settings/operations"
                            ><span class="bcn-settings-nav__page">Operations</span
                            ><span class="bcn-settings-nav__count" aria-label="5 records"
                              >5</span
                            ></a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="bcn-settings-nav__group">
                      <h3
                        class="typography-label-xs bcn-settings-nav__zone"
                        id="settings-zone-esa-admin-general"
                      >
                        General
                      </h3>
                      <ul
                        class="bcn-settings-nav__list"
                        aria-labelledby="settings-zone-esa-admin-general"
                        role="list"
                      >
                        <li class="bcn-settings-nav__item">
                          <a
                            class="typography-body-sm bcn-settings-nav__link"
                            href="/beacon-design/prototypes/settings/terminology"
                            aria-current="page"
                            ><span class="bcn-settings-nav__page">Terminology</span></a
                          >
                        </li>
                        <li class="bcn-settings-nav__item">
                          <a
                            class="typography-body-sm bcn-settings-nav__link"
                            href="/beacon-design/prototypes/settings/custom-fields"
                            ><span class="bcn-settings-nav__page">Custom Fields</span
                            ><span class="bcn-settings-nav__count" aria-label="6 records"
                              >6</span
                            ></a
                          >
                        </li>
                      </ul>
                    </div>
                    <!-- …and 3 more like this (<div class="bcn-settings-nav__group">) -->
                  </section>
                  <section
                    class="bcn-settings-nav__block"
                    aria-labelledby="settings-aud-tenant-admin"
                  >
                    <h2
                      class="typography-body-md bcn-settings-nav__aud"
                      id="settings-aud-tenant-admin"
                    >
                      <span class="bcn-settings-nav__aud-icon" aria-hidden="true"
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
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                            <!-- …and 5 more like this (<path>) -->
                          </svg></span
                        ></span
                      >Tenant Admin
                    </h2>
                    <div class="bcn-settings-nav__group">
                      <h3
                        class="typography-label-xs bcn-settings-nav__zone"
                        id="settings-zone-tenant-admin-general"
                      >
                        General
                      </h3>
                      <ul
                        class="bcn-settings-nav__list"
                        aria-labelledby="settings-zone-tenant-admin-general"
                        role="list"
                      >
                        <li class="bcn-settings-nav__item">
                          <a
                            class="typography-body-sm bcn-settings-nav__link"
                            href="/beacon-design/prototypes/settings/tenant-profile"
                            ><span class="bcn-settings-nav__page">Tenant Profile</span></a
                          >
                        </li>
                        <li class="bcn-settings-nav__item">
                          <a
                            class="typography-body-sm bcn-settings-nav__link"
                            href="/beacon-design/prototypes/settings/labels-definitions"
                            ><span class="bcn-settings-nav__page">Labels &amp; Definitions</span
                            ><span class="bcn-settings-nav__count" aria-label="36 records"
                              >36</span
                            ></a
                          >
                        </li>
                        <li class="bcn-settings-nav__item">
                          <a
                            class="typography-body-sm bcn-settings-nav__link"
                            href="/beacon-design/prototypes/settings/custom-pages"
                            ><span class="bcn-settings-nav__page">Custom Pages</span
                            ><span class="bcn-settings-nav__count" aria-label="2 records"
                              >2</span
                            ></a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="bcn-settings-nav__group">
                      <h3
                        class="typography-label-xs bcn-settings-nav__zone"
                        id="settings-zone-tenant-admin-people-access"
                      >
                        People &amp; Access
                      </h3>
                      <ul
                        class="bcn-settings-nav__list"
                        aria-labelledby="settings-zone-tenant-admin-people-access"
                        role="list"
                      >
                        <li class="bcn-settings-nav__item">
                          <a
                            class="typography-body-sm bcn-settings-nav__link"
                            href="/beacon-design/prototypes/settings/users"
                            ><span class="bcn-settings-nav__page">Users</span
                            ><span class="bcn-settings-nav__count" aria-label="75 records"
                              >75</span
                            ></a
                          >
                        </li>
                        <li class="bcn-settings-nav__item">
                          <a
                            class="typography-body-sm bcn-settings-nav__link"
                            href="/beacon-design/prototypes/settings/roles"
                            ><span class="bcn-settings-nav__page">Roles</span
                            ><span class="bcn-settings-nav__count" aria-label="4 records"
                              >4</span
                            ></a
                          >
                        </li>
                        <!-- …and 2 more like this (<li class="bcn-settings-nav__item">) -->
                      </ul>
                    </div>
                    <!-- …and 2 more like this (<div class="bcn-settings-nav__group">) -->
                  </section>
                </nav>
              </div>
            </div>
            <div class="bcn-settings-shell__content" data-esa-surface="">
              <div class="stack" data-gap="lg">
                <section id="sec-entity-aliases" class="bcn-set">
                  <div class="esa-card esa-card--outlined">
                    <div class="esa-card__header">
                      <div class="esa-card__header-content">
                        <div class="esa-card__titles">
                          <h3 class="esa-card__title typography-title-sm-strong">Entity aliases</h3>
                        </div>
                      </div>
                      <div class="esa-card__actions typography-label-md"></div>
                    </div>
                    <div class="esa-card__body typography-body-md">
                      <p class="bcn-set__desc typography-body-md">
                        Both forms are required when a term is set — the singular and the plural
                        appear in different places.
                      </p>
                      <div class="bcn-set__scroll">
                        <table class="bcn-set__table">
                          <thead>
                            <tr>
                              <th class="bcn-set__th" scope="col">Entity</th>
                              <th class="bcn-set__th" scope="col">Singular</th>
                              <th class="bcn-set__th" scope="col">Plural</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="bcn-set__tr">
                              <th class="bcn-set__td bcn-set__td--lead" scope="row">Project</th>
                              <td class="bcn-set__td bcn-set__td--field">
                                <esa-text-field
                                  value=""
                                  placeholder="Project"
                                  aria-label="Project — singular"
                                  size="md"
                                ></esa-text-field>
                              </td>
                              <td class="bcn-set__td bcn-set__td--field">
                                <esa-text-field
                                  value=""
                                  placeholder="Projects"
                                  aria-label="Project — plural"
                                  size="md"
                                ></esa-text-field>
                              </td>
                            </tr>
                            <tr class="bcn-set__tr">
                              <th class="bcn-set__td bcn-set__td--lead" scope="row">
                                Source Document
                              </th>
                              <td class="bcn-set__td bcn-set__td--field">
                                <esa-text-field
                                  value="Regulatory Document"
                                  placeholder="Source Document"
                                  aria-label="Source Document — singular"
                                  size="md"
                                ></esa-text-field>
                              </td>
                              <td class="bcn-set__td bcn-set__td--field">
                                <esa-text-field
                                  value="Regulatory Documents"
                                  placeholder="Source Documents"
                                  aria-label="Source Document — plural"
                                  size="md"
                                ></esa-text-field>
                              </td>
                            </tr>
                            <!-- …and 7 more like this (<tr class="bcn-set__tr">) -->
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>
                <!-- script type="module" removed (0 bytes) -->
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
```
