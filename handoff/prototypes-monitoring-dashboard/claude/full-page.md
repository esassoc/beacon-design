# Full page

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-monitoring-dashboard** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/monitoring/dashboard/
- **Section element:** `<page>`
- **Components:** esa-alert-box (hub), esa-badge (hub), esa-button (hub), esa-card (hub), esa-empty-state (hub), esa-icon (hub), esa-loading-spinner (hub), esa-pill (hub), esa-stat (hub)

## Markup (de-scoped, framework-free)
```html
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
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M9 3v18"></path>
        </svg></button
      ><button type="button" class="tenant-trigger">
        <span>DWR</span
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
            <path d="m6 9 6 6 6-6"></path></svg
        ></span>
      </button>
    </div>
    <!-- Center: global-search trigger field (opens BcnOmniSearch) -->
    <div class="topbar__center">
      <button
        class="bcn-search-trigger"
        type="button"
        data-omni-trigger=""
        aria-label="Search"
        aria-keyshortcuts="/"
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
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path></svg></span
        ><span class="bcn-search-trigger__placeholder">Search…</span
        ><span class="bcn-search-trigger__kbd" aria-hidden="true"><kbd>/</kbd></span>
      </button>
    </div>
    <!-- Right: QA badge, search, config/admin icon-buttons, user menu -->
    <div class="topbar__right">
      <span class="qa-warning"
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
              d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
            ></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path></svg></span
        >QA</span
      ><a href="/beacon-design/prototypes/settings" class="icon-button" aria-label="ESA-Config"
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
            <line x1="21" x2="14" y1="4" y2="4"></line>
            <line x1="10" x2="3" y1="4" y2="4"></line>
            <line x1="21" x2="12" y1="12" y2="12"></line>
            <line x1="8" x2="3" y1="12" y2="12"></line>
            <line x1="21" x2="16" y1="20" y2="20"></line>
            <line x1="12" x2="3" y1="20" y2="20"></line>
            <line x1="14" x2="14" y1="2" y2="6"></line>
            <line x1="8" x2="8" y1="10" y2="14"></line>
            <line x1="16" x2="16" y1="18" y2="22"></line></svg></span></a
      ><span
        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--md esa-button--icon-only"
        ><a
          class="esa-button__native typography-microcopy-md"
          href="/beacon-design/prototypes/settings"
          aria-label="Admin settings"
          title="Admin settings"
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
              <path
                d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
              ></path>
              <circle cx="12" cy="12" r="3"></circle></svg></span></a
      ></span>
      <div class="user-menu" id="user-menu">
        <button
          type="button"
          class="user-menu-trigger"
          id="user-menu-trigger"
          aria-label="User menu"
          aria-expanded="false"
        >
          <span class="user-menu-trigger__avatar user-menu-trigger__avatar--fallback"
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
                <path d="M18 20a6 6 0 0 0-12 0"></path>
                <circle cx="12" cy="10" r="4"></circle>
                <circle cx="12" cy="12" r="10"></circle></svg></span
          ></span>
        </button>
        <div class="user-panel" id="user-panel" hidden="">
          <div class="user-panel__header">
            <div class="user-panel__avatar-wrapper">
              <span class="user-panel__avatar user-panel__avatar--fallback"
                ><span class="esa-icon esa-icon--lg" aria-hidden="true"
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
                    <path d="M18 20a6 6 0 0 0-12 0"></path>
                    <circle cx="12" cy="10" r="4"></circle>
                    <circle cx="12" cy="12" r="10"></circle></svg></span
              ></span>
            </div>
            <div class="user-panel__info">
              <span class="user-panel__name">Andy Lovseth</span
              ><span class="user-panel__email">andy.lovseth@esassoc.com</span>
            </div>
          </div>
          <div class="user-panel__menu">
            <button type="button" class="user-panel__item">
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
                    d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                  ></path>
                  <path d="m15 5 4 4"></path></svg></span
              ><span>Edit Profile</span></button
            ><a class="user-panel__item" href="#help"
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path></svg></span
              ><span>Get Help</span></a
            ><button type="button" class="user-panel__item user-panel__item--danger">
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
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" x2="9" y1="12" y2="12"></line></svg></span
              ><span>Sign Out</span>
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
                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                <rect width="7" height="5" x="3" y="16" rx="1"></rect></svg></span
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
            <li class="nav-item"><a href="#action-lists" class="nav-sublink">Action Lists</a></li>
            <li class="nav-item">
              <a href="#document-reviews" class="nav-sublink">Document Reviews</a>
            </li>
            <li class="nav-item">
              <a href="#spatial-library-layers" class="nav-sublink">Spatial Library Layers</a>
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
                <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                <path d="M12 18h.01"></path>
                <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
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
            <li class="nav-item">
              <a href="/beacon-design/prototypes/permit-tracking" class="nav-sublink"
                >Permit Tracking</a
              >
            </li>
            <li class="nav-item">
              <a href="#all-components" class="nav-sublink">All Components</a>
            </li>
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
            <li class="nav-item">
              <a href="/beacon-design/prototypes/monitoring/data" class="nav-sublink">Data</a>
            </li>
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
                <path d="M12 16h4"></path>
                <path d="M8 11h.01"></path>
                <path d="M8 16h.01"></path></svg></span
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
            <li class="nav-item">
              <a href="#dc-requirements" class="nav-sublink">Requirements</a>
            </li>
            <li class="nav-item"><a href="#dc-actions" class="nav-sublink">Actions</a></li>
            <li class="nav-item"><a href="#dc-all-data" class="nav-sublink">All Data</a></li>
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
                      ></span></button></esa-dropdown-menu
                ></span>
                <script
                  type="module"
                  src="/beacon-design/_astro/BcnComponentPicker.astro_astro_type_script_index_0_lang.BkuXXS3g.js"
                ></script
              ></span>
            </div>
          </section>
          <section class="page-layout__content">
            <div
              class="mpdash"
              data-mpdash=""
              data-geotech-component="2024-2029 Geotechnical Activities"
            >
              <div class="mpd-tracks" aria-hidden="true"><i></i><i></i><i></i></div>
              <!-- ═══ Band A ═══ --><!-- ═══ Band B ═══ --><!-- ═══ Band C ═══ --><!-- ═══ Band D ═══ --><!-- ═══ Band E ═══ --><!-- ═══ Band F ═══ --><!-- bcn-lego-checked: the add tile is the board's own dashed affordance
           (spec §10.8; checked esa-empty-state — a full-region message, wrong
           shape; esa-button — real chrome, this is a wireframe void). -->
              <section
                class="bcn-dwidget"
                data-widget-id="obs-active"
                data-w="2"
                data-h="5"
                style="--_accent: var(--bcn-mark-teal)"
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
                              <path
                                d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"
                              ></path>
                              <path d="M 22 16 L 2 16"></path>
                              <path
                                d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"
                              ></path>
                              <path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"></path></svg></span
                        ></span>
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
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
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
                        >
                        <script
                          type="module"
                          src="/beacon-design/_astro/BcnWidgetMenu.astro_astro_type_script_index_0_lang.D9uoY8PY.js"
                        ></script
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-dwidget__body stack" data-gap="md">
                      <div class="cluster" data-gap="xl" style="--align: flex-start">
                        <span style="--stat-value-size: var(--font-size-900)"
                          ><div class="esa-stat">
                            <div class="esa-stat__value typography-display-sm">9</div>
                            <div class="esa-stat__label typography-label-md">
                              active observations
                            </div>
                            <div class="esa-stat__sub typography-body-sm">
                              13 total in the past 30 days
                            </div>
                          </div></span
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
                            <li class="bcn-viz-donut__row cluster">
                              <span
                                class="bcn-viz-donut__dot"
                                style="--_c: var(--_series-1, var(--bcn-mark-teal))"
                              ></span
                              ><span class="bcn-viz-donut__label typography-body-md"
                                >Nesting Birds</span
                              ><span class="bcn-viz-donut__value typography-label-md-strong"
                                >6</span
                              >
                            </li>
                            <li class="bcn-viz-donut__row cluster">
                              <span
                                class="bcn-viz-donut__dot"
                                style="--_c: var(--_series-2, var(--bcn-mark-orange))"
                              ></span
                              ><span class="bcn-viz-donut__label typography-body-md"
                                >Biological Resources</span
                              ><span class="bcn-viz-donut__value typography-label-md-strong"
                                >3</span
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        class="bcn-obsmap leaflet-container leaflet-touch leaflet-fade-anim"
                        id="bcn-obsmap-mpdash-obs"
                        data-bcn-obsmap=""
                        data-map-id="mpdash-obs"
                        data-interactive="false"
                        style="height: 220px"
                        role="img"
                        aria-label="Observation map — 9 observations plotted by severity"
                        data-bcn-obsmap-ready="true"
                      >
                        <div
                          class="leaflet-pane leaflet-map-pane"
                          style="transform: translate3d(0px, 0px, 0px)"
                        >
                          <div class="leaflet-pane leaflet-tile-pane">
                            <div class="leaflet-layer" style="z-index: 1; opacity: 1">
                              <div
                                class="leaflet-tile-container leaflet-zoom-animated"
                                style="
                                  z-index: 16;
                                  transform: translate3d(-1786px, -664px, 0px) scale(8);
                                "
                              ></div>
                              <div
                                class="leaflet-tile-container leaflet-zoom-animated"
                                style="z-index: 19; transform: translate3d(0px, 0px, 0px) scale(1)"
                              >
                                <img
                                  alt=""
                                  src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/8/41/98?access_token=undefined"
                                  class="leaflet-tile"
                                  style="
                                    width: 256px;
                                    height: 256px;
                                    transform: translate3d(126px, -72px, 0px);
                                    opacity: 1;
                                  "
                                /><img
                                  alt=""
                                  src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/8/41/99?access_token=undefined"
                                  class="leaflet-tile"
                                  style="
                                    width: 256px;
                                    height: 256px;
                                    transform: translate3d(126px, 184px, 0px);
                                    opacity: 1;
                                  "
                                /><img
                                  alt=""
                                  src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/8/40/98?access_token=undefined"
                                  class="leaflet-tile"
                                  style="
                                    width: 256px;
                                    height: 256px;
                                    transform: translate3d(-130px, -72px, 0px);
                                    opacity: 1;
                                  "
                                /><img
                                  alt=""
                                  src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/8/42/98?access_token=undefined"
                                  class="leaflet-tile"
                                  style="
                                    width: 256px;
                                    height: 256px;
                                    transform: translate3d(382px, -72px, 0px);
                                    opacity: 1;
                                  "
                                /><img
                                  alt=""
                                  src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/8/40/99?access_token=undefined"
                                  class="leaflet-tile"
                                  style="
                                    width: 256px;
                                    height: 256px;
                                    transform: translate3d(-130px, 184px, 0px);
                                    opacity: 1;
                                  "
                                /><img
                                  alt=""
                                  src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/8/42/99?access_token=undefined"
                                  class="leaflet-tile"
                                  style="
                                    width: 256px;
                                    height: 256px;
                                    transform: translate3d(382px, 184px, 0px);
                                    opacity: 1;
                                  "
                                />
                              </div>
                            </div>
                          </div>
                          <div class="leaflet-pane leaflet-overlay-pane">
                            <svg
                              pointer-events="none"
                              class="leaflet-zoom-animated"
                              width="680"
                              height="262"
                              viewBox="-57 -22 680 262"
                              style="transform: translate3d(-57px, -22px, 0px)"
                            >
                              <g>
                                <path
                                  class="leaflet-interactive"
                                  stroke="#fcfcfc"
                                  stroke-opacity="1"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  fill="#ce2c31"
                                  fill-opacity="0.9"
                                  fill-rule="evenodd"
                                  d="M280,54a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                                ></path>
                                <path
                                  class="leaflet-interactive"
                                  stroke="#fcfcfc"
                                  stroke-opacity="1"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  fill="#f59e0b"
                                  fill-opacity="0.9"
                                  fill-rule="evenodd"
                                  d="M280,54a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                                ></path>
                                <path
                                  class="leaflet-interactive"
                                  stroke="#fcfcfc"
                                  stroke-opacity="1"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  fill="#f59e0b"
                                  fill-opacity="0.9"
                                  fill-rule="evenodd"
                                  d="M293,126a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                                ></path>
                                <path
                                  class="leaflet-interactive"
                                  stroke="#fcfcfc"
                                  stroke-opacity="1"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  fill="#f59e0b"
                                  fill-opacity="0.9"
                                  fill-rule="evenodd"
                                  d="M284,79a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                                ></path>
                                <path
                                  class="leaflet-interactive"
                                  stroke="#fcfcfc"
                                  stroke-opacity="1"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  fill="#f59e0b"
                                  fill-opacity="0.9"
                                  fill-rule="evenodd"
                                  d="M293,127a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                                ></path>
                                <path
                                  class="leaflet-interactive"
                                  stroke="#fcfcfc"
                                  stroke-opacity="1"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  fill="#f59e0b"
                                  fill-opacity="0.9"
                                  fill-rule="evenodd"
                                  d="M284,80a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                                ></path>
                                <path
                                  class="leaflet-interactive"
                                  stroke="#fcfcfc"
                                  stroke-opacity="1"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  fill="#bdbdbd"
                                  fill-opacity="0.9"
                                  fill-rule="evenodd"
                                  d="M292,126a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                                ></path>
                                <path
                                  class="leaflet-interactive"
                                  stroke="#fcfcfc"
                                  stroke-opacity="1"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  fill="#bdbdbd"
                                  fill-opacity="0.9"
                                  fill-rule="evenodd"
                                  d="M295,126a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                                ></path>
                                <path
                                  class="leaflet-interactive"
                                  stroke="#fcfcfc"
                                  stroke-opacity="1"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  fill="#bdbdbd"
                                  fill-opacity="0.9"
                                  fill-rule="evenodd"
                                  d="M259,165a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div class="leaflet-pane leaflet-shadow-pane"></div>
                          <div class="leaflet-pane leaflet-marker-pane"></div>
                          <div class="leaflet-pane leaflet-tooltip-pane"></div>
                          <div class="leaflet-pane leaflet-popup-pane"></div>
                          <div
                            class="leaflet-proxy leaflet-zoom-animated"
                            style="transform: translate3d(10653.9px, 25269.3px, 0px) scale(128)"
                          ></div>
                        </div>
                        <div class="leaflet-control-container">
                          <div class="leaflet-top leaflet-left"></div>
                          <div class="leaflet-top leaflet-right"></div>
                          <div class="leaflet-bottom leaflet-left"></div>
                          <div class="leaflet-bottom leaflet-right"></div>
                        </div>
                      </div>
                      <script type="application/json" data-bcn-obsmap-data="mpdash-obs">
                        [
                          {
                            "id": "CC-1042-06162026",
                            "lat": 38.282135,
                            "lng": -121.457699,
                            "label": "Staging within the SWHA buffer before clearance · Open",
                            "hex": "var(--color-background-utility-danger)"
                          },
                          {
                            "id": "SWHA-2289-05182026",
                            "lat": 38.283235,
                            "lng": -121.457699,
                            "label": "Swainson’s Hawk · Active",
                            "hex": "var(--color-background-utility-warning)"
                          },
                          {
                            "id": "CORA-2695-06042026",
                            "lat": 37.969248,
                            "lng": -121.386597,
                            "label": "Common Raven · Active",
                            "hex": "var(--color-background-utility-warning)"
                          },
                          {
                            "id": "KILL-7655-06032026",
                            "lat": 38.17228,
                            "lng": -121.436532,
                            "label": "Killdeer · Active",
                            "hex": "var(--color-background-utility-warning)"
                          },
                          {
                            "id": "MALL-1520-06022026",
                            "lat": 37.96534,
                            "lng": -121.386396,
                            "label": "Mallard · Active",
                            "hex": "var(--color-background-utility-warning)"
                          },
                          {
                            "id": "Unknown-5895-06032026",
                            "lat": 38.16898,
                            "lng": -121.435232,
                            "label": "Unknown raptor · Active",
                            "hex": "var(--color-background-utility-warning)"
                          },
                          {
                            "id": "Species-Swainsons-Hawk-06042026",
                            "lat": 37.970537,
                            "lng": -121.392578,
                            "label": "Swainson’s Hawk · Tracking",
                            "hex": "var(--bcn-status-not-started)"
                          },
                          {
                            "id": "Species-Swainsons-Hawk-06092026",
                            "lat": 37.968754000000004,
                            "lng": -121.376684,
                            "label": "Swainson’s Hawk · Tracking",
                            "hex": "var(--bcn-status-not-started)"
                          },
                          {
                            "id": "Habitat-Other-06152026",
                            "lat": 37.801145000000005,
                            "lng": -121.57617,
                            "label": "Rodent burrows · Tracking",
                            "hex": "var(--bcn-status-not-started)"
                          }
                        ]
                      </script>
                      <script
                        type="module"
                        src="/beacon-design/_astro/BcnObservationMap.astro_astro_type_script_index_0_lang.V9eB__99.js"
                      ></script>
                      <div class="stack" data-gap="sm">
                        <span
                          class="cluster"
                          data-gap="sm"
                          style="
                            --badge-bg: var(--color-background-elevation-sunken);
                            --badge-text-color: var(--color-content-default-secondary);
                          "
                          ><span class="typography-label-md-strong">Outstanding issues</span
                          ><span
                            class="esa-badge esa-badge--primary esa-badge--md typography-microcopy-sm-strong"
                            ><span class="esa-badge__text">5</span></span
                          ></span
                        >
                        <table class="bcn-mt">
                          <thead>
                            <tr>
                              <th scope="col">Age</th>
                              <th scope="col">Observation</th>
                              <th scope="col">Species</th>
                              <th class="bcn-mt--end" scope="col">Work area</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="bcn-mt--num">30d</td>
                              <td>
                                <a href="/beacon-design/prototypes/monitoring/stream/observations"
                                  >SWHA-2289</a
                                >
                              </td>
                              <td>Swainson’s Hawk</td>
                              <td class="bcn-mt--end">DCTR2-DH-010</td>
                            </tr>
                            <tr>
                              <td class="bcn-mt--num">15d</td>
                              <td>
                                <a href="/beacon-design/prototypes/monitoring/stream/observations"
                                  >MALL-1520</a
                                >
                              </td>
                              <td>Mallard</td>
                              <td class="bcn-mt--end">DCRDS-DH-294</td>
                            </tr>
                            <tr>
                              <td class="bcn-mt--num">14d</td>
                              <td>
                                <a href="/beacon-design/prototypes/monitoring/stream/observations"
                                  >KILL-7655</a
                                >
                              </td>
                              <td>Killdeer</td>
                              <td class="bcn-mt--end">DCTR2-DH-100</td>
                            </tr>
                            <tr>
                              <td class="bcn-mt--num">14d</td>
                              <td>
                                <a href="/beacon-design/prototypes/monitoring/stream/observations"
                                  >UNK-5895</a
                                >
                              </td>
                              <td>Unknown raptor</td>
                              <td class="bcn-mt--end">DCTR2-DH-100</td>
                            </tr>
                            <tr>
                              <td class="bcn-mt--num">13d</td>
                              <td>
                                <a href="/beacon-design/prototypes/monitoring/stream/observations"
                                  >CORA-2695</a
                                >
                              </td>
                              <td>Common Raven</td>
                              <td class="bcn-mt--end">DCRAI-DH-009</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
                data-w="1"
                data-h="3"
                style="--_accent: var(--bcn-mark-cyan)"
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
                              <path d="m20 7 2 .5-2 .5"></path>
                              <path d="M10 18v3"></path>
                              <path d="M14 17.75V21"></path>
                              <path d="M7 18a6 6 0 0 0 3.84-10.61"></path></svg></span
                        ></span>
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
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
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
                      <div class="esa-stat">
                        <div class="esa-stat__value typography-display-sm">6</div>
                        <div class="esa-stat__label typography-label-md">
                          nesting-bird observations
                        </div>
                        <div class="esa-stat__sub typography-body-sm">
                          9 total in the past 30 days
                        </div>
                      </div>
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
                        <div class="bcn-viz-bars__row">
                          <span class="bcn-viz-bars__name">KILL</span
                          ><span class="bcn-viz-bars__track" aria-hidden="true"
                            ><span
                              class="bcn-viz-bars__fill"
                              style="width: 50%; --_bar-fill: var(--bcn-mark-teal)"
                            ></span></span
                          ><span class="bcn-viz-bars__val">1</span>
                        </div>
                        <div class="bcn-viz-bars__row">
                          <span class="bcn-viz-bars__name">MALL</span
                          ><span class="bcn-viz-bars__track" aria-hidden="true"
                            ><span
                              class="bcn-viz-bars__fill"
                              style="width: 50%; --_bar-fill: var(--bcn-mark-teal)"
                            ></span></span
                          ><span class="bcn-viz-bars__val">1</span>
                        </div>
                        <div class="bcn-viz-bars__row">
                          <span class="bcn-viz-bars__name">UNK</span
                          ><span class="bcn-viz-bars__track" aria-hidden="true"
                            ><span
                              class="bcn-viz-bars__fill"
                              style="width: 50%; --_bar-fill: #bdbdbd"
                            ></span></span
                          ><span class="bcn-viz-bars__val">1</span>
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
              <section
                class="bcn-dwidget"
                data-widget-id="obs-concerns"
                data-w="1"
                data-h="2"
                style="--_accent: var(--bcn-mark-rust)"
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
                              <path
                                d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                              ></path>
                              <path d="M12 9v4"></path>
                              <path d="M12 17h.01"></path></svg></span
                        ></span>
                        <h3 class="bcn-dwidget__title typography-title-sm-strong">
                          Compliance Concerns
                        </h3></span
                      ><span class="bcn-dwidget__tools cluster" data-gap="xs"
                        ><button
                          type="button"
                          class="bcn-dwidget__grip"
                          data-widget-grip=""
                          aria-label="Move Compliance Concerns"
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
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
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
                            aria-label="Options for Compliance Concerns"
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
                      <span style="--stat-value-color: var(--color-content-utility-danger)"
                        ><div class="esa-stat">
                          <div class="esa-stat__value typography-display-sm">1</div>
                          <div class="esa-stat__label typography-label-md">
                            open compliance concerns
                          </div>
                        </div></span
                      >
                      <div
                        class="bcn-viztrend bcn-viztrend--sm"
                        style="--_accent: var(--color-background-utility-danger)"
                      >
                        <div
                          class="bcn-viztrend__strip"
                          role="img"
                          aria-label="Concerns raised per day, May 19 to Jun 17"
                        >
                          <span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                          ><span class="bcn-viztrend__col" style="height: 100%"></span
                          ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span>
                        </div>
                        <div class="bcn-viztrend__axis"><span>May 19</span><span>Jun 17</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__footer typography-meta">
                    <a
                      class="bcn-dwidget__foot"
                      href="/beacon-design/prototypes/monitoring/stream/compliance-concerns"
                      >All compliance concerns →</a
                    >
                  </div>
                </div>
              </section>
              <section
                class="bcn-dwidget"
                data-widget-id="dmr-recent"
                data-w="2"
                data-h="3"
                style="--_accent: var(--bcn-mark-slate)"
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
                              <path
                                d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                              ></path>
                              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path></svg></span
                        ></span>
                        <h3 class="bcn-dwidget__title typography-title-sm-strong">
                          Daily Monitoring Reports
                        </h3></span
                      ><span class="bcn-dwidget__tools cluster" data-gap="xs"
                        ><button
                          type="button"
                          class="bcn-dwidget__grip"
                          data-widget-grip=""
                          aria-label="Move Daily Monitoring Reports"
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
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
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
                            aria-label="Options for Daily Monitoring Reports"
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
                      <div class="bcn-widget-panels" data-panels="2">
                        <div class="bcn-widget-panels__panel stack">
                          <div class="stack" data-gap="md">
                            <div class="esa-stat">
                              <div class="esa-stat__value typography-display-sm">32</div>
                              <div class="esa-stat__label typography-label-md">
                                daily monitoring reports
                              </div>
                              <div class="esa-stat__sub typography-body-sm">
                                5 filed in the past 7 days
                              </div>
                            </div>
                            <div
                              class="bcn-viz-strip"
                              role="img"
                              aria-label="Reports filed by weekday, Jun 11 to Jun 17"
                            >
                              <span class="bcn-viz-strip__day"
                                ><span class="bcn-viz-strip__cell"></span
                                ><span class="bcn-viz-strip__initial">Th</span></span
                              ><span class="bcn-viz-strip__day"
                                ><span class="bcn-viz-strip__cell"></span
                                ><span class="bcn-viz-strip__initial">F</span></span
                              ><span class="bcn-viz-strip__day"
                                ><span class="bcn-viz-strip__cell"></span
                                ><span class="bcn-viz-strip__initial">M</span></span
                              ><span class="bcn-viz-strip__day"
                                ><span class="bcn-viz-strip__cell"></span
                                ><span class="bcn-viz-strip__initial">Tu</span></span
                              ><span class="bcn-viz-strip__day"
                                ><span class="bcn-viz-strip__cell"></span
                                ><span class="bcn-viz-strip__initial">W</span></span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="bcn-widget-panels__panel stack">
                          <div>
                            <table class="bcn-mt">
                              <thead>
                                <tr>
                                  <th scope="col">Date</th>
                                  <th scope="col">Monitor</th>
                                  <th scope="col">Work areas</th>
                                  <th class="bcn-mt--end" scope="col">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="bcn-mt--num">
                                    <a
                                      href="data:text/plain;charset=utf-8,Daily%20Monitoring%20Report%20%E2%80%94%202026-06-17%0AMonitor%3A%20Christy%20Pierce%0AWork%20areas%3A%20DCTR2-DH-010%2C%20DCTR2-DH-100%0AActivities%3A%20Preconstruction%20sweep%3B%20buffer%20compliance%20checks%0AObservations%20logged%3A%202%0AStatus%3A%20Draft"
                                      download="DMR_DCTR2-DH-010_2026-06-17.txt"
                                      >Jun 17</a
                                    >
                                  </td>
                                  <td>Christy Pierce</td>
                                  <td>DCTR2-DH-010, DCTR2-DH-100</td>
                                  <td class="bcn-mt--end">
                                    <span
                                      class="bcn-mt__dot"
                                      style="background: #989898"
                                      aria-hidden="true"
                                    ></span
                                    >Draft
                                  </td>
                                </tr>
                                <tr>
                                  <td class="bcn-mt--num">
                                    <a
                                      href="data:text/plain;charset=utf-8,Daily%20Monitoring%20Report%20%E2%80%94%202026-06-16%0AMonitor%3A%20Bryce%20Kozak%0AWork%20areas%3A%20DCBPP-DH-066%0AActivities%3A%20Burrow%20flagging%20follow-up%3B%20access-road%20avoidance%20check%0AObservations%20logged%3A%201%0AStatus%3A%20Final"
                                      download="DMR_DCBPP-DH-066_2026-06-16.txt"
                                      >Jun 16</a
                                    >
                                  </td>
                                  <td>Bryce Kozak</td>
                                  <td>DCBPP-DH-066</td>
                                  <td class="bcn-mt--end">
                                    <span
                                      class="bcn-mt__dot"
                                      style="background: #2e7571"
                                      aria-hidden="true"
                                    ></span
                                    >Final
                                  </td>
                                </tr>
                                <tr>
                                  <td class="bcn-mt--num">
                                    <a
                                      href="data:text/plain;charset=utf-8,Daily%20Monitoring%20Report%20%E2%80%94%202026-06-15%0AMonitor%3A%20Morgan%20Henry%0AWork%20areas%3A%20DCBPP-DH-066%0AActivities%3A%20Habitat%20assessment%0AObservations%20logged%3A%201%0AStatus%3A%20Final"
                                      download="DMR_DCBPP-DH-066_2026-06-15.txt"
                                      >Jun 15</a
                                    >
                                  </td>
                                  <td>Morgan Henry</td>
                                  <td>DCBPP-DH-066</td>
                                  <td class="bcn-mt--end">
                                    <span
                                      class="bcn-mt__dot"
                                      style="background: #2e7571"
                                      aria-hidden="true"
                                    ></span
                                    >Final
                                  </td>
                                </tr>
                                <tr>
                                  <td class="bcn-mt--num">
                                    <a
                                      href="data:text/plain;charset=utf-8,Daily%20Monitoring%20Report%20%E2%80%94%202026-06-12%0AMonitor%3A%20CJ%20January%0AWork%20areas%3A%20DCTR2-DH-010%0AActivities%3A%20SWHA%2072-hour%20survey%0AObservations%20logged%3A%201%0AStatus%3A%20Final"
                                      download="DMR_DCTR2-DH-010_2026-06-12.txt"
                                      >Jun 12</a
                                    >
                                  </td>
                                  <td>CJ January</td>
                                  <td>DCTR2-DH-010</td>
                                  <td class="bcn-mt--end">
                                    <span
                                      class="bcn-mt__dot"
                                      style="background: #2e7571"
                                      aria-hidden="true"
                                    ></span
                                    >Final
                                  </td>
                                </tr>
                                <tr>
                                  <td class="bcn-mt--num">
                                    <a
                                      href="data:text/plain;charset=utf-8,Daily%20Monitoring%20Report%20%E2%80%94%202026-06-11%0AMonitor%3A%20Alicia%20Manzo%0AWork%20areas%3A%20DCRAI-DH-012%0AActivities%3A%20Two-week%20clearance%20survey%0AObservations%20logged%3A%201%0AStatus%3A%20Final"
                                      download="DMR_DCRAI-DH-012_2026-06-11.txt"
                                      >Jun 11</a
                                    >
                                  </td>
                                  <td>Alicia Manzo</td>
                                  <td>DCRAI-DH-012</td>
                                  <td class="bcn-mt--end">
                                    <span
                                      class="bcn-mt__dot"
                                      style="background: #2e7571"
                                      aria-hidden="true"
                                    ></span
                                    >Final
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__footer typography-meta">
                    <a
                      class="bcn-dwidget__foot"
                      href="/beacon-design/prototypes/monitoring/stream/daily-monitoring-reports"
                      >All daily monitoring reports →</a
                    >
                  </div>
                </div>
              </section>
              <section
                class="bcn-dwidget"
                data-widget-id="obs-bio"
                data-w="1"
                data-h="3"
                style="--_accent: var(--bcn-mark-olive)"
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
                              <path
                                d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                              ></path>
                              <path
                                d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                              ></path></svg></span
                        ></span>
                        <h3 class="bcn-dwidget__title typography-title-sm-strong">
                          Biological Resources
                        </h3></span
                      ><span class="bcn-dwidget__tools cluster" data-gap="xs"
                        ><button
                          type="button"
                          class="bcn-dwidget__grip"
                          data-widget-grip=""
                          aria-label="Move Biological Resources"
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
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
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
                            aria-label="Options for Biological Resources"
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
                      <div class="esa-stat">
                        <div class="esa-stat__value typography-display-sm">3</div>
                        <div class="esa-stat__label typography-label-md">
                          biological-resource observations
                        </div>
                        <div class="esa-stat__sub typography-body-sm">
                          3 total in the past 30 days
                        </div>
                      </div>
                      <div class="bcn-viz-bars">
                        <div class="bcn-viz-bars__row">
                          <span class="bcn-viz-bars__name">SWHA foraging</span
                          ><span class="bcn-viz-bars__track" aria-hidden="true"
                            ><span
                              class="bcn-viz-bars__fill"
                              style="width: 100%; --_bar-fill: var(--bcn-mark-orange)"
                            ></span></span
                          ><span class="bcn-viz-bars__val">2</span>
                        </div>
                        <div class="bcn-viz-bars__row">
                          <span class="bcn-viz-bars__name">Habitat / burrows</span
                          ><span class="bcn-viz-bars__track" aria-hidden="true"
                            ><span
                              class="bcn-viz-bars__fill"
                              style="width: 50%; --_bar-fill: var(--bcn-mark-orange)"
                            ></span></span
                          ><span class="bcn-viz-bars__val">1</span>
                        </div>
                      </div>
                      <table class="bcn-mt">
                        <thead>
                          <tr>
                            <th scope="col">Latest observation</th>
                            <th class="bcn-mt--end" scope="col">Observed</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="/beacon-design/prototypes/monitoring/stream/observations"
                                >HAB-0615</a
                              >
                            </td>
                            <td class="bcn-mt--end bcn-mt--num">Jun 15</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="esa-card__footer typography-meta">
                    <a
                      class="bcn-dwidget__foot"
                      href="/beacon-design/prototypes/monitoring/stream/biological-resources"
                      >All biological-resource observations →</a
                    >
                  </div>
                </div>
              </section>
              <section
                class="bcn-dwidget"
                data-widget-id="commitment-compliance"
                data-w="3"
                data-h="3"
                style="--_accent: var(--bcn-mark-teal)"
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
                              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                              <path
                                d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                              ></path>
                              <path d="m9 14 2 2 4-4"></path></svg></span
                        ></span>
                        <h3 class="bcn-dwidget__title typography-title-sm-strong">
                          Commitment Compliance
                        </h3></span
                      ><span class="bcn-dwidget__tools cluster" data-gap="xs"
                        ><button
                          type="button"
                          class="bcn-dwidget__grip"
                          data-widget-grip=""
                          aria-label="Move Commitment Compliance"
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
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
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
                            aria-label="Options for Commitment Compliance"
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
                      <div class="bcn-cc" data-cc="" data-show="needs">
                        <esa-button-toggle
                          class="bcn-cc__show"
                          data-cc-show="true"
                          size="sm"
                          label="Show"
                        ></esa-button-toggle>
                        <div class="bcn-cc__pane" data-cc-pane="needs">
                          <section class="bcn-cc__lane">
                            <h4 class="bcn-cc__lane-head">
                              <span>Compliance concerns</span
                              ><span
                                class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                ><span class="esa-badge__text">1</span></span
                              >
                            </h4>
                            <div class="bcn-cc__rows">
                              <div class="bcn-cc__item" data-cc-item="">
                                <button
                                  type="button"
                                  class="bcn-cc__row"
                                  data-cc-row=""
                                  aria-expanded="false"
                                >
                                  <span class="bcn-cc__alert"
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
                                          d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                                        ></path>
                                        <path d="M12 9v4"></path>
                                        <path d="M12 17h.01"></path></svg></span></span
                                  ><span class="bcn-cc__name"
                                    >Staging within the SWHA buffer before clearance</span
                                  ><span class="bcn-cc__id">CC-1042</span
                                  ><span class="bcn-cc__meta">raised 2026-06-16 · DCTR2-DH-010</span
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="open"
                                    style="
                                      --_chip: var(
                                        --st-open,
                                        var(--color-background-utility-danger)
                                      );
                                    "
                                    ><span class="bcn-status-chip__dot"></span
                                    ><span class="bcn-status-chip__label">Open</span></span
                                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                  ></span>
                                </button>
                                <div class="bcn-cc__detail">
                                  <p class="bcn-cc__desc">
                                    Geotechnical staging equipment was observed inside the
                                    Swainson’s hawk no-disturbance buffer at DCTR2-DH-010 before
                                    clearance was issued. The designated biologist halted staging
                                    and notified the construction lead.
                                  </p>
                                  <div class="bcn-cc__cmts">
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-39</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Preconstruction Surveys and Implement Protective
                                        Measures to Minimize Disturbance of Swainson's Hawk
                                        (FEIR)</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section class="bcn-cc__lane">
                            <h4 class="bcn-cc__lane-head">
                              <span>Species observations</span
                              ><span
                                class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                ><span class="esa-badge__text">5</span></span
                              >
                            </h4>
                            <div class="bcn-cc__rows">
                              <div class="bcn-cc__item" data-cc-item="">
                                <button
                                  type="button"
                                  class="bcn-cc__row"
                                  data-cc-row=""
                                  aria-expanded="false"
                                >
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">SWHA</span></span
                                  ><span class="bcn-cc__name">Swainson’s Hawk</span
                                  ><span class="bcn-cc__id">SWHA-2289</span
                                  ><span class="bcn-cc__meta"
                                    >observed 2026-05-18 · DCTR2-DH-010</span
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="active"
                                    style="
                                      --_chip: var(
                                        --st-active,
                                        var(--color-background-utility-warning)
                                      );
                                    "
                                    ><span class="bcn-status-chip__dot"></span
                                    ><span class="bcn-status-chip__label">Active</span></span
                                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                  ></span>
                                </button>
                                <div class="bcn-cc__detail">
                                  <p class="bcn-cc__desc">
                                    Active SWHA nest in a tree on the north side of Twin Cities
                                    Road. One adult sitting (presumably incubating); a second adult
                                    foraging and delivering food. Not disturbed by the
                                    preconstruction survey along the public roadway or at the bore
                                    site.
                                  </p>
                                  <div class="bcn-cc__cmts">
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-39</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Preconstruction Surveys and Implement Protective
                                        Measures to Minimize Disturbance of Swainson's Hawk
                                        (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-36a</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Nesting Surveys for Special-Status and
                                        Non-Special-Status Birds and Raptors and Implement
                                        Protective Measures to Avoid Disturbance of Nesting Birds
                                        and Raptors (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">EC-14</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Construction Best Management Practices for Biological
                                        Resources (FEIR)</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bcn-cc__item" data-cc-item="">
                                <button
                                  type="button"
                                  class="bcn-cc__row"
                                  data-cc-row=""
                                  aria-expanded="false"
                                >
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">CORA</span></span
                                  ><span class="bcn-cc__name">Common Raven</span
                                  ><span class="bcn-cc__id">CORA-2695</span
                                  ><span class="bcn-cc__meta"
                                    >observed 2026-06-04 · DCRAI-DH-009</span
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="active"
                                    style="
                                      --_chip: var(
                                        --st-active,
                                        var(--color-background-utility-warning)
                                      );
                                    "
                                    ><span class="bcn-status-chip__dot"></span
                                    ><span class="bcn-status-chip__label">Active</span></span
                                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                  ></span>
                                </button>
                                <div class="bcn-cc__detail">
                                  <p class="bcn-cc__desc">
                                    Both ravens perched outside the nest during the preconstruction
                                    survey.
                                  </p>
                                  <div class="bcn-cc__cmts">
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-36a</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Nesting Surveys for Special-Status and
                                        Non-Special-Status Birds and Raptors and Implement
                                        Protective Measures to Avoid Disturbance of Nesting Birds
                                        and Raptors (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">EC-14</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Construction Best Management Practices for Biological
                                        Resources (FEIR)</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bcn-cc__item" data-cc-item="">
                                <button
                                  type="button"
                                  class="bcn-cc__row"
                                  data-cc-row=""
                                  aria-expanded="false"
                                >
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">KILL</span></span
                                  ><span class="bcn-cc__name">Killdeer</span
                                  ><span class="bcn-cc__id">KILL-7655</span
                                  ><span class="bcn-cc__meta"
                                    >observed 2026-06-03 · DCTR2-DH-100</span
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="active"
                                    style="
                                      --_chip: var(
                                        --st-active,
                                        var(--color-background-utility-warning)
                                      );
                                    "
                                    ><span class="bcn-status-chip__dot"></span
                                    ><span class="bcn-status-chip__label">Active</span></span
                                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                  ></span>
                                </button>
                                <div class="bcn-cc__detail">
                                  <p class="bcn-cc__desc">
                                    One bird on the nest; tried to lead us away as we neared the
                                    site. Four eggs present.
                                  </p>
                                  <div class="bcn-cc__cmts">
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-36a</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Nesting Surveys for Special-Status and
                                        Non-Special-Status Birds and Raptors and Implement
                                        Protective Measures to Avoid Disturbance of Nesting Birds
                                        and Raptors (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">EC-14</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Construction Best Management Practices for Biological
                                        Resources (FEIR)</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bcn-cc__item" data-cc-item="">
                                <button
                                  type="button"
                                  class="bcn-cc__row"
                                  data-cc-row=""
                                  aria-expanded="false"
                                >
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">MALL</span></span
                                  ><span class="bcn-cc__name">Mallard</span
                                  ><span class="bcn-cc__id">MALL-1520</span
                                  ><span class="bcn-cc__meta"
                                    >observed 2026-06-02 · DCRDS-DH-294</span
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="active"
                                    style="
                                      --_chip: var(
                                        --st-active,
                                        var(--color-background-utility-warning)
                                      );
                                    "
                                    ><span class="bcn-status-chip__dot"></span
                                    ><span class="bcn-status-chip__label">Active</span></span
                                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                  ></span>
                                </button>
                                <div class="bcn-cc__detail">
                                  <p class="bcn-cc__desc">
                                    A pair observed. Female stayed with the nest and had eggs.
                                  </p>
                                  <div class="bcn-cc__cmts">
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-36a</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Nesting Surveys for Special-Status and
                                        Non-Special-Status Birds and Raptors and Implement
                                        Protective Measures to Avoid Disturbance of Nesting Birds
                                        and Raptors (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">EC-14</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Construction Best Management Practices for Biological
                                        Resources (FEIR)</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bcn-cc__item" data-cc-item="">
                                <button
                                  type="button"
                                  class="bcn-cc__row"
                                  data-cc-row=""
                                  aria-expanded="false"
                                >
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">UNK</span></span
                                  ><span class="bcn-cc__name">Unknown raptor</span
                                  ><span class="bcn-cc__id">UNK-5895</span
                                  ><span class="bcn-cc__meta"
                                    >observed 2026-06-03 · DCTR2-DH-100</span
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="active"
                                    style="
                                      --_chip: var(
                                        --st-active,
                                        var(--color-background-utility-warning)
                                      );
                                    "
                                    ><span class="bcn-status-chip__dot"></span
                                    ><span class="bcn-status-chip__label">Active</span></span
                                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                  ></span>
                                </button>
                                <div class="bcn-cc__detail">
                                  <p class="bcn-cc__desc">
                                    Large stick nest with a raptor in it. Too far to identify to
                                    species and the site could not be accessed, so no closer ID was
                                    made.
                                  </p>
                                  <div class="bcn-cc__cmts">
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-36a</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Nesting Surveys for Special-Status and
                                        Non-Special-Status Birds and Raptors and Implement
                                        Protective Measures to Avoid Disturbance of Nesting Birds
                                        and Raptors (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-37</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Surveys for Golden Eagle and Avoid Disturbance of
                                        Occupied Nests (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">EC-14</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Construction Best Management Practices for Biological
                                        Resources (FEIR)</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                        <div class="bcn-cc__pane" data-cc-pane="all">
                          <section class="bcn-cc__lane">
                            <h4 class="bcn-cc__lane-head">
                              <span>Compliance concerns</span
                              ><span
                                class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                ><span class="esa-badge__text">1</span></span
                              >
                            </h4>
                            <div class="bcn-cc__rows">
                              <div class="bcn-cc__item" data-cc-item="">
                                <button
                                  type="button"
                                  class="bcn-cc__row"
                                  data-cc-row=""
                                  aria-expanded="false"
                                >
                                  <span class="bcn-cc__alert"
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
                                          d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                                        ></path>
                                        <path d="M12 9v4"></path>
                                        <path d="M12 17h.01"></path></svg></span></span
                                  ><span class="bcn-cc__name"
                                    >Staging within the SWHA buffer before clearance</span
                                  ><span class="bcn-cc__id">CC-1042</span
                                  ><span class="bcn-cc__meta">raised 2026-06-16 · DCTR2-DH-010</span
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="open"
                                    style="
                                      --_chip: var(
                                        --st-open,
                                        var(--color-background-utility-danger)
                                      );
                                    "
                                    ><span class="bcn-status-chip__dot"></span
                                    ><span class="bcn-status-chip__label">Open</span></span
                                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                  ></span>
                                </button>
                                <div class="bcn-cc__detail">
                                  <p class="bcn-cc__desc">
                                    Geotechnical staging equipment was observed inside the
                                    Swainson’s hawk no-disturbance buffer at DCTR2-DH-010 before
                                    clearance was issued. The designated biologist halted staging
                                    and notified the construction lead.
                                  </p>
                                  <div class="bcn-cc__cmts">
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-39</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Preconstruction Surveys and Implement Protective
                                        Measures to Minimize Disturbance of Swainson's Hawk
                                        (FEIR)</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section class="bcn-cc__lane">
                            <h4 class="bcn-cc__lane-head">
                              <span>Species observations</span
                              ><span
                                class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                ><span class="esa-badge__text">9</span></span
                              >
                            </h4>
                            <div class="bcn-cc__rows">
                              <div class="bcn-cc__item" data-cc-item="">
                                <button
                                  type="button"
                                  class="bcn-cc__row"
                                  data-cc-row=""
                                  aria-expanded="false"
                                >
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">SWHA</span></span
                                  ><span class="bcn-cc__name">Swainson’s Hawk</span
                                  ><span class="bcn-cc__id">SWHA-2289</span
                                  ><span class="bcn-cc__meta"
                                    >observed 2026-05-18 · DCTR2-DH-010</span
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="active"
                                    style="
                                      --_chip: var(
                                        --st-active,
                                        var(--color-background-utility-warning)
                                      );
                                    "
                                    ><span class="bcn-status-chip__dot"></span
                                    ><span class="bcn-status-chip__label">Active</span></span
                                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                  ></span>
                                </button>
                                <div class="bcn-cc__detail">
                                  <p class="bcn-cc__desc">
                                    Active SWHA nest in a tree on the north side of Twin Cities
                                    Road. One adult sitting (presumably incubating); a second adult
                                    foraging and delivering food. Not disturbed by the
                                    preconstruction survey along the public roadway or at the bore
                                    site.
                                  </p>
                                  <div class="bcn-cc__cmts">
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-39</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Preconstruction Surveys and Implement Protective
                                        Measures to Minimize Disturbance of Swainson's Hawk
                                        (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-36a</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Nesting Surveys for Special-Status and
                                        Non-Special-Status Birds and Raptors and Implement
                                        Protective Measures to Avoid Disturbance of Nesting Birds
                                        and Raptors (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">EC-14</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Construction Best Management Practices for Biological
                                        Resources (FEIR)</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bcn-cc__item" data-cc-item="">
                                <button
                                  type="button"
                                  class="bcn-cc__row"
                                  data-cc-row=""
                                  aria-expanded="false"
                                >
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">CORA</span></span
                                  ><span class="bcn-cc__name">Common Raven</span
                                  ><span class="bcn-cc__id">CORA-2695</span
                                  ><span class="bcn-cc__meta"
                                    >observed 2026-06-04 · DCRAI-DH-009</span
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="active"
                                    style="
                                      --_chip: var(
                                        --st-active,
                                        var(--color-background-utility-warning)
                                      );
                                    "
                                    ><span class="bcn-status-chip__dot"></span
                                    ><span class="bcn-status-chip__label">Active</span></span
                                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                  ></span>
                                </button>
                                <div class="bcn-cc__detail">
                                  <p class="bcn-cc__desc">
                                    Both ravens perched outside the nest during the preconstruction
                                    survey.
                                  </p>
                                  <div class="bcn-cc__cmts">
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-36a</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Nesting Surveys for Special-Status and
                                        Non-Special-Status Birds and Raptors and Implement
                                        Protective Measures to Avoid Disturbance of Nesting Birds
                                        and Raptors (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">EC-14</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Construction Best Management Practices for Biological
                                        Resources (FEIR)</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bcn-cc__item" data-cc-item="">
                                <button
                                  type="button"
                                  class="bcn-cc__row"
                                  data-cc-row=""
                                  aria-expanded="false"
                                >
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">CORA</span></span
                                  ><span class="bcn-cc__name">Common Raven</span
                                  ><span class="bcn-cc__id">CORA-5830</span
                                  ><span class="bcn-cc__meta">observed 2026-05-29</span
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="cleared"
                                    style="
                                      --_chip: var(
                                        --st-cleared,
                                        var(--color-background-utility-success)
                                      );
                                    "
                                    ><span class="bcn-status-chip__dot"></span
                                    ><span class="bcn-status-chip__label">Cleared</span></span
                                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                  ></span>
                                </button>
                                <div class="bcn-cc__detail">
                                  <p class="bcn-cc__desc">
                                    Multiple ravens observed around the nest; one in the nest. 6/8:
                                    ravens perched high on the tower outside the nest and foraging —
                                    appear to have fledged.
                                  </p>
                                  <div class="bcn-cc__cmts">
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-36a</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Nesting Surveys for Special-Status and
                                        Non-Special-Status Birds and Raptors and Implement
                                        Protective Measures to Avoid Disturbance of Nesting Birds
                                        and Raptors (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">EC-14</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Construction Best Management Practices for Biological
                                        Resources (FEIR)</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bcn-cc__item" data-cc-item="">
                                <button
                                  type="button"
                                  class="bcn-cc__row"
                                  data-cc-row=""
                                  aria-expanded="false"
                                >
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">KILL</span></span
                                  ><span class="bcn-cc__name">Killdeer</span
                                  ><span class="bcn-cc__id">KILL-7655</span
                                  ><span class="bcn-cc__meta"
                                    >observed 2026-06-03 · DCTR2-DH-100</span
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="active"
                                    style="
                                      --_chip: var(
                                        --st-active,
                                        var(--color-background-utility-warning)
                                      );
                                    "
                                    ><span class="bcn-status-chip__dot"></span
                                    ><span class="bcn-status-chip__label">Active</span></span
                                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                  ></span>
                                </button>
                                <div class="bcn-cc__detail">
                                  <p class="bcn-cc__desc">
                                    One bird on the nest; tried to lead us away as we neared the
                                    site. Four eggs present.
                                  </p>
                                  <div class="bcn-cc__cmts">
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-36a</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Nesting Surveys for Special-Status and
                                        Non-Special-Status Birds and Raptors and Implement
                                        Protective Measures to Avoid Disturbance of Nesting Birds
                                        and Raptors (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">EC-14</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Construction Best Management Practices for Biological
                                        Resources (FEIR)</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bcn-cc__item" data-cc-item="">
                                <button
                                  type="button"
                                  class="bcn-cc__row"
                                  data-cc-row=""
                                  aria-expanded="false"
                                >
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">MALL</span></span
                                  ><span class="bcn-cc__name">Mallard</span
                                  ><span class="bcn-cc__id">MALL-1520</span
                                  ><span class="bcn-cc__meta"
                                    >observed 2026-06-02 · DCRDS-DH-294</span
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="active"
                                    style="
                                      --_chip: var(
                                        --st-active,
                                        var(--color-background-utility-warning)
                                      );
                                    "
                                    ><span class="bcn-status-chip__dot"></span
                                    ><span class="bcn-status-chip__label">Active</span></span
                                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                  ></span>
                                </button>
                                <div class="bcn-cc__detail">
                                  <p class="bcn-cc__desc">
                                    A pair observed. Female stayed with the nest and had eggs.
                                  </p>
                                  <div class="bcn-cc__cmts">
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-36a</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Nesting Surveys for Special-Status and
                                        Non-Special-Status Birds and Raptors and Implement
                                        Protective Measures to Avoid Disturbance of Nesting Birds
                                        and Raptors (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">EC-14</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Construction Best Management Practices for Biological
                                        Resources (FEIR)</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bcn-cc__item" data-cc-item="">
                                <button
                                  type="button"
                                  class="bcn-cc__row"
                                  data-cc-row=""
                                  aria-expanded="false"
                                >
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">UNK</span></span
                                  ><span class="bcn-cc__name">Unknown raptor</span
                                  ><span class="bcn-cc__id">UNK-5895</span
                                  ><span class="bcn-cc__meta"
                                    >observed 2026-06-03 · DCTR2-DH-100</span
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="active"
                                    style="
                                      --_chip: var(
                                        --st-active,
                                        var(--color-background-utility-warning)
                                      );
                                    "
                                    ><span class="bcn-status-chip__dot"></span
                                    ><span class="bcn-status-chip__label">Active</span></span
                                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                  ></span>
                                </button>
                                <div class="bcn-cc__detail">
                                  <p class="bcn-cc__desc">
                                    Large stick nest with a raptor in it. Too far to identify to
                                    species and the site could not be accessed, so no closer ID was
                                    made.
                                  </p>
                                  <div class="bcn-cc__cmts">
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-36a</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Nesting Surveys for Special-Status and
                                        Non-Special-Status Birds and Raptors and Implement
                                        Protective Measures to Avoid Disturbance of Nesting Birds
                                        and Raptors (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-37</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Surveys for Golden Eagle and Avoid Disturbance of
                                        Occupied Nests (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">EC-14</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Construction Best Management Practices for Biological
                                        Resources (FEIR)</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bcn-cc__stack" data-cc-stack="">
                                <button
                                  type="button"
                                  class="bcn-cc__row bcn-cc__row--head"
                                  data-cc-stack-head=""
                                  aria-expanded="false"
                                >
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">SWHA</span></span
                                  ><span class="bcn-cc__name">Swainson’s Hawk</span
                                  ><span class="bcn-cc__id">2 observations</span
                                  ><span class="bcn-cc__meta">observed 2026-06-04 – 2026-06-09</span
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="tracking"
                                    style="
                                      --_chip: var(--st-tracking, var(--bcn-status-not-started));
                                    "
                                    ><span class="bcn-status-chip__dot"></span
                                    ><span class="bcn-status-chip__label">Tracking</span></span
                                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                  ></span>
                                </button>
                                <div class="bcn-cc__members">
                                  <div class="bcn-cc__item" data-cc-item="">
                                    <button
                                      type="button"
                                      class="bcn-cc__row"
                                      data-cc-row=""
                                      aria-expanded="false"
                                    >
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">SWHA</span></span
                                      ><span class="bcn-cc__name">Swainson’s Hawk</span
                                      ><span class="bcn-cc__id">SWHA-0604</span
                                      ><span class="bcn-cc__meta"
                                        >observed 2026-06-04 · DCRAI-DH-006</span
                                      ><span
                                        class="bcn-status-chip"
                                        data-status="tracking"
                                        style="
                                          --_chip: var(
                                            --st-tracking,
                                            var(--bcn-status-not-started)
                                          );
                                        "
                                        ><span class="bcn-status-chip__dot"></span
                                        ><span class="bcn-status-chip__label">Tracking</span></span
                                      ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                      ></span>
                                    </button>
                                    <div class="bcn-cc__detail">
                                      <p class="bcn-cc__desc">
                                        Swainson’s hawk observed foraging overhead. No nest at the
                                        site.
                                      </p>
                                      <div class="bcn-cc__cmts">
                                        <div class="bcn-cc__cmt">
                                          <span
                                            class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                            ><span class="esa-badge__text">BIO-39</span></span
                                          ><span class="bcn-cc__cmt-title"
                                            >Conduct Preconstruction Surveys and Implement
                                            Protective Measures to Minimize Disturbance of
                                            Swainson's Hawk (FEIR)</span
                                          >
                                        </div>
                                        <div class="bcn-cc__cmt">
                                          <span
                                            class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                            ><span class="esa-badge__text">EC-14</span></span
                                          ><span class="bcn-cc__cmt-title"
                                            >Construction Best Management Practices for Biological
                                            Resources (FEIR)</span
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="bcn-cc__item" data-cc-item="">
                                    <button
                                      type="button"
                                      class="bcn-cc__row"
                                      data-cc-row=""
                                      aria-expanded="false"
                                    >
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">SWHA</span></span
                                      ><span class="bcn-cc__name">Swainson’s Hawk</span
                                      ><span class="bcn-cc__id">SWHA-0609</span
                                      ><span class="bcn-cc__meta"
                                        >observed 2026-06-09 · DCRAI-DH-012</span
                                      ><span
                                        class="bcn-status-chip"
                                        data-status="tracking"
                                        style="
                                          --_chip: var(
                                            --st-tracking,
                                            var(--bcn-status-not-started)
                                          );
                                        "
                                        ><span class="bcn-status-chip__dot"></span
                                        ><span class="bcn-status-chip__label">Tracking</span></span
                                      ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                      ></span>
                                    </button>
                                    <div class="bcn-cc__detail">
                                      <p class="bcn-cc__desc">
                                        Swainson’s hawk observed soaring overhead to the west. No
                                        nest at the site.
                                      </p>
                                      <div class="bcn-cc__cmts">
                                        <div class="bcn-cc__cmt">
                                          <span
                                            class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                            ><span class="esa-badge__text">BIO-39</span></span
                                          ><span class="bcn-cc__cmt-title"
                                            >Conduct Preconstruction Surveys and Implement
                                            Protective Measures to Minimize Disturbance of
                                            Swainson's Hawk (FEIR)</span
                                          >
                                        </div>
                                        <div class="bcn-cc__cmt">
                                          <span
                                            class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                            ><span class="esa-badge__text">EC-14</span></span
                                          ><span class="bcn-cc__cmt-title"
                                            >Construction Best Management Practices for Biological
                                            Resources (FEIR)</span
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bcn-cc__item" data-cc-item="">
                                <button
                                  type="button"
                                  class="bcn-cc__row"
                                  data-cc-row=""
                                  aria-expanded="false"
                                >
                                  <span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">HAB</span></span
                                  ><span class="bcn-cc__name">Rodent burrows</span
                                  ><span class="bcn-cc__id">HAB-0615</span
                                  ><span class="bcn-cc__meta"
                                    >observed 2026-06-15 · DCBPP-DH-066</span
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="tracking"
                                    style="
                                      --_chip: var(--st-tracking, var(--bcn-status-not-started));
                                    "
                                    ><span class="bcn-status-chip__dot"></span
                                    ><span class="bcn-status-chip__label">Tracking</span></span
                                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="bcn-cc__chev"
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
                                  ></span>
                                </button>
                                <div class="bcn-cc__detail">
                                  <p class="bcn-cc__desc">
                                    Two small rodent burrows flagged within the project footprint;
                                    several more flagged along the access road. Crew asked to avoid
                                    the road north of the berm (many burrows, not all flagged).
                                    6/16: crew has been avoiding driving over burrow entrances.
                                  </p>
                                  <div class="bcn-cc__cmts">
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-40</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Surveys and Minimize Impacts on Burrowing Owl
                                        (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">BIO-47</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Conduct Preconstruction Survey for American Badger and
                                        Implement Avoidance and Minimization Measures (FEIR)</span
                                      >
                                    </div>
                                    <div class="bcn-cc__cmt">
                                      <span
                                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                        ><span class="esa-badge__text">EC-14</span></span
                                      ><span class="bcn-cc__cmt-title"
                                        >Construction Best Management Practices for Biological
                                        Resources (FEIR)</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                      <script
                        type="module"
                        src="/beacon-design/_astro/BcnComplianceList.astro_astro_type_script_index_0_lang.CCCaeY45.js"
                      ></script>
                    </div>
                  </div>
                </div>
              </section>
              <section
                class="bcn-dwidget"
                data-widget-id="mileage-total"
                data-w="3"
                data-h="3"
                style="--_accent: var(--bcn-mark-sky)"
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
                              <path
                                d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
                              ></path>
                              <circle cx="7" cy="17" r="2"></circle>
                              <path d="M9 17h6"></path>
                              <circle cx="17" cy="17" r="2"></circle></svg></span
                        ></span>
                        <h3 class="bcn-dwidget__title typography-title-sm-strong">
                          Vehicle Mileage
                        </h3></span
                      ><span class="bcn-dwidget__tools cluster" data-gap="xs"
                        ><button
                          type="button"
                          class="bcn-dwidget__grip"
                          data-widget-grip=""
                          aria-label="Move Vehicle Mileage"
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
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
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
                            aria-label="Options for Vehicle Mileage"
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
                      <div class="bcn-widget-panels" data-panels="3">
                        <div class="bcn-widget-panels__panel stack">
                          <div>
                            <div class="esa-stat">
                              <div class="esa-stat__value typography-display-sm">3,284</div>
                              <div class="esa-stat__label typography-label-md">
                                vehicle miles, past 14 days
                              </div>
                              <div class="esa-stat__sub typography-body-sm">96 trips logged</div>
                            </div>
                          </div>
                        </div>
                        <div class="bcn-widget-panels__panel stack">
                          <div class="stack" data-gap="sm">
                            <span class="typography-label-md-strong">Miles per day</span>
                            <div class="bcn-viztrend">
                              <div
                                class="bcn-viztrend__strip"
                                role="img"
                                aria-label="Miles per day, Jun 4 to Jun 17"
                              >
                                <span class="bcn-viztrend__col" style="height: 79.2%"></span
                                ><span class="bcn-viztrend__col" style="height: 91.7%"></span
                                ><span class="bcn-viztrend__col" style="height: 17.2%"></span
                                ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                                ><span class="bcn-viztrend__col" style="height: 96.4%"></span
                                ><span class="bcn-viztrend__col" style="height: 83.7%"></span
                                ><span class="bcn-viztrend__col" style="height: 75.9%"></span
                                ><span class="bcn-viztrend__col" style="height: 93.1%"></span
                                ><span class="bcn-viztrend__col" style="height: 81.7%"></span
                                ><span class="bcn-viztrend__col" style="height: 24.4%"></span
                                ><span class="bcn-viztrend__col" style="height: 11.4%"></span
                                ><span class="bcn-viztrend__col" style="height: 88.1%"></span
                                ><span class="bcn-viztrend__col" style="height: 100%"></span
                                ><span class="bcn-viztrend__col" style="height: 67%"></span>
                              </div>
                              <div class="bcn-viztrend__axis">
                                <span>Jun 4</span><span>Jun 17</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="bcn-widget-panels__panel stack">
                          <div class="stack" data-gap="sm">
                            <span class="typography-label-md-strong">Miles by vehicle</span>
                            <div class="bcn-viz-bars">
                              <div class="bcn-viz-bars__row">
                                <span class="bcn-viz-bars__name">Subaru Crosstrek</span
                                ><span class="bcn-viz-bars__track" aria-hidden="true"
                                  ><span
                                    class="bcn-viz-bars__fill"
                                    style="width: 100%"
                                  ></span></span
                                ><span class="bcn-viz-bars__val">1,046</span>
                              </div>
                              <div class="bcn-viz-bars__row">
                                <span class="bcn-viz-bars__name">Ford F-150</span
                                ><span class="bcn-viz-bars__track" aria-hidden="true"
                                  ><span
                                    class="bcn-viz-bars__fill"
                                    style="width: 70.94%"
                                  ></span></span
                                ><span class="bcn-viz-bars__val">742</span>
                              </div>
                              <div class="bcn-viz-bars__row">
                                <span class="bcn-viz-bars__name">Ford F-600</span
                                ><span class="bcn-viz-bars__track" aria-hidden="true"
                                  ><span
                                    class="bcn-viz-bars__fill"
                                    style="width: 56.21%"
                                  ></span></span
                                ><span class="bcn-viz-bars__val">588</span>
                              </div>
                              <div class="bcn-viz-bars__row">
                                <span class="bcn-viz-bars__name">Chevrolet Silverado 2500</span
                                ><span class="bcn-viz-bars__track" aria-hidden="true"
                                  ><span
                                    class="bcn-viz-bars__fill"
                                    style="width: 48.85%"
                                  ></span></span
                                ><span class="bcn-viz-bars__val">511</span>
                              </div>
                              <div class="bcn-viz-bars__row">
                                <span class="bcn-viz-bars__name">Ford Transit</span
                                ><span class="bcn-viz-bars__track" aria-hidden="true"
                                  ><span
                                    class="bcn-viz-bars__fill"
                                    style="width: 37.95%"
                                  ></span></span
                                ><span class="bcn-viz-bars__val">397</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__footer typography-meta">
                    <a
                      class="bcn-dwidget__foot"
                      href="/beacon-design/prototypes/monitoring/stream/mileage"
                      >All vehicle mileage →</a
                    >
                  </div>
                </div>
              </section>
              <section
                class="bcn-dwidget"
                data-widget-id="runtime-total"
                data-w="2"
                data-h="3"
                style="--_accent: var(--bcn-mark-amber)"
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
                              <line x1="10" x2="14" y1="2" y2="2"></line>
                              <line x1="12" x2="15" y1="14" y2="11"></line>
                              <circle cx="12" cy="14" r="8"></circle></svg></span
                        ></span>
                        <h3 class="bcn-dwidget__title typography-title-sm-strong">
                          Equipment Runtime
                        </h3></span
                      ><span class="bcn-dwidget__tools cluster" data-gap="xs"
                        ><button
                          type="button"
                          class="bcn-dwidget__grip"
                          data-widget-grip=""
                          aria-label="Move Equipment Runtime"
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
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
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
                            aria-label="Options for Equipment Runtime"
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
                      <div class="bcn-widget-panels" data-panels="2">
                        <div class="bcn-widget-panels__panel stack">
                          <div class="stack" data-gap="md">
                            <div class="esa-stat">
                              <div class="esa-stat__value typography-display-sm">412</div>
                              <div class="esa-stat__label typography-label-md">
                                equipment hours, past 14 days
                              </div>
                              <div class="esa-stat__sub typography-body-sm">12 units logged</div>
                            </div>
                            <div class="bcn-viztrend bcn-viztrend--sm">
                              <div
                                class="bcn-viztrend__strip"
                                role="img"
                                aria-label="Runtime minutes per day, Jun 4 to Jun 17"
                              >
                                <span class="bcn-viztrend__col" style="height: 83.5%"></span
                                ><span class="bcn-viztrend__col" style="height: 94.3%"></span
                                ><span class="bcn-viztrend__col" style="height: 19.9%"></span
                                ><span class="bcn-viztrend__col bcn-viztrend__col--zero"></span
                                ><span class="bcn-viztrend__col" style="height: 100%"></span
                                ><span class="bcn-viztrend__col" style="height: 89.7%"></span
                                ><span class="bcn-viztrend__col" style="height: 79.9%"></span
                                ><span class="bcn-viztrend__col" style="height: 96.6%"></span
                                ><span class="bcn-viztrend__col" style="height: 87%"></span
                                ><span class="bcn-viztrend__col" style="height: 26.8%"></span
                                ><span class="bcn-viztrend__col" style="height: 19.2%"></span
                                ><span class="bcn-viztrend__col" style="height: 92.5%"></span
                                ><span class="bcn-viztrend__col" style="height: 87.4%"></span
                                ><span class="bcn-viztrend__col" style="height: 70.5%"></span>
                              </div>
                              <div class="bcn-viztrend__axis">
                                <span>Jun 4</span><span>Jun 17</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="bcn-widget-panels__panel stack">
                          <div class="stack" data-gap="sm">
                            <span class="typography-label-md-strong">Hours by equipment class</span>
                            <div class="bcn-viz-bars">
                              <div class="bcn-viz-bars__row">
                                <span class="bcn-viz-bars__name">Drill rig</span
                                ><span class="bcn-viz-bars__track" aria-hidden="true"
                                  ><span
                                    class="bcn-viz-bars__fill"
                                    style="width: 100%"
                                  ></span></span
                                ><span class="bcn-viz-bars__val">164</span>
                              </div>
                              <div class="bcn-viz-bars__row">
                                <span class="bcn-viz-bars__name">Support truck</span
                                ><span class="bcn-viz-bars__track" aria-hidden="true"
                                  ><span
                                    class="bcn-viz-bars__fill"
                                    style="width: 62.2%"
                                  ></span></span
                                ><span class="bcn-viz-bars__val">102</span>
                              </div>
                              <div class="bcn-viz-bars__row">
                                <span class="bcn-viz-bars__name">Water truck</span
                                ><span class="bcn-viz-bars__track" aria-hidden="true"
                                  ><span
                                    class="bcn-viz-bars__fill"
                                    style="width: 44.51%"
                                  ></span></span
                                ><span class="bcn-viz-bars__val">73</span>
                              </div>
                              <div class="bcn-viz-bars__row">
                                <span class="bcn-viz-bars__name">Generator</span
                                ><span class="bcn-viz-bars__track" aria-hidden="true"
                                  ><span
                                    class="bcn-viz-bars__fill"
                                    style="width: 28.05%"
                                  ></span></span
                                ><span class="bcn-viz-bars__val">46</span>
                              </div>
                              <div class="bcn-viz-bars__row">
                                <span class="bcn-viz-bars__name">Dewatering pump</span
                                ><span class="bcn-viz-bars__track" aria-hidden="true"
                                  ><span
                                    class="bcn-viz-bars__fill"
                                    style="width: 16.46%"
                                  ></span></span
                                ><span class="bcn-viz-bars__val">27</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__footer typography-meta">
                    <a
                      class="bcn-dwidget__foot"
                      href="/beacon-design/prototypes/monitoring/stream/runtime"
                      >All equipment runtime →</a
                    >
                  </div>
                </div>
              </section>
              <section
                class="bcn-dwidget"
                data-widget-id="surveys-qc"
                data-w="1"
                data-h="3"
                style="--_accent: var(--bcn-mark-emerald)"
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
                              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                              <path
                                d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                              ></path>
                              <path d="M12 11h4"></path>
                              <path d="M12 16h4"></path>
                              <path d="M8 11h.01"></path>
                              <path d="M8 16h.01"></path></svg></span
                        ></span>
                        <h3 class="bcn-dwidget__title typography-title-sm-strong">Surveys</h3></span
                      ><span class="bcn-dwidget__tools cluster" data-gap="xs"
                        ><button
                          type="button"
                          class="bcn-dwidget__grip"
                          data-widget-grip=""
                          aria-label="Move Surveys"
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
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
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
                            aria-label="Options for Surveys"
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
                      <div class="esa-stat">
                        <div class="esa-stat__value typography-display-sm">12</div>
                        <div class="esa-stat__label typography-label-md">survey documents</div>
                      </div>
                      <div class="bcn-viz-meter">
                        <div class="bcn-viz-meter__bar" aria-hidden="true">
                          <span style="width: 50%; background: #2e7571"></span
                          ><span style="width: 33.33%; background: #f59e0b"></span
                          ><span style="width: 16.67%; background: #989898"></span>
                        </div>
                        <div class="bcn-viz-meter__legend">
                          <div class="bcn-viz-meter__row">
                            <span class="bcn-viz-meter__dot" style="background: #2e7571"></span
                            >Final<span class="bcn-viz-meter__n">6</span>
                          </div>
                          <div class="bcn-viz-meter__row">
                            <span class="bcn-viz-meter__dot" style="background: #f59e0b"></span>In
                            QC<span class="bcn-viz-meter__n">4</span>
                          </div>
                          <div class="bcn-viz-meter__row">
                            <span class="bcn-viz-meter__dot" style="background: #989898"></span
                            >Draft<span class="bcn-viz-meter__n">2</span>
                          </div>
                        </div>
                      </div>
                      <table class="bcn-mt">
                        <thead>
                          <tr>
                            <th scope="col">Latest surveys</th>
                            <th class="bcn-mt--end" scope="col">Surveyed</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="/beacon-design/prototypes/monitoring/stream/surveys"
                                >SRV-HAB-061526</a
                              >
                            </td>
                            <td class="bcn-mt--end bcn-mt--num">Jun 15</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="/beacon-design/prototypes/monitoring/stream/surveys"
                                >SRV-72H-061226</a
                              >
                            </td>
                            <td class="bcn-mt--end bcn-mt--num">Jun 12</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="/beacon-design/prototypes/monitoring/stream/surveys"
                                >SRV-CASP-061026</a
                              >
                            </td>
                            <td class="bcn-mt--end bcn-mt--num">Jun 10</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="/beacon-design/prototypes/monitoring/stream/surveys"
                                >SRV-2WK-060926</a
                              >
                            </td>
                            <td class="bcn-mt--end bcn-mt--num">Jun 9</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="/beacon-design/prototypes/monitoring/stream/surveys"
                                >SRV-CASP-060426</a
                              >
                            </td>
                            <td class="bcn-mt--end bcn-mt--num">Jun 4</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="esa-card__footer typography-meta">
                    <a
                      class="bcn-dwidget__foot"
                      href="/beacon-design/prototypes/monitoring/stream/surveys"
                      >All surveys →</a
                    >
                  </div>
                </div>
              </section>
              <section
                class="bcn-dwidget"
                data-widget-id="weap-trained"
                data-w="3"
                data-h="3"
                style="--_accent: var(--bcn-mark-moss)"
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
                              <path
                                d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
                              ></path>
                              <path d="M22 10v6"></path>
                              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg></span
                        ></span>
                        <h3 class="bcn-dwidget__title typography-title-sm-strong">
                          WEAP Trainings
                        </h3></span
                      ><span class="bcn-dwidget__tools cluster" data-gap="xs"
                        ><button
                          type="button"
                          class="bcn-dwidget__grip"
                          data-widget-grip=""
                          aria-label="Move WEAP Trainings"
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
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
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
                            aria-label="Options for WEAP Trainings"
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
                      <div class="bcn-widget-panels" data-panels="3">
                        <div class="bcn-widget-panels__panel stack">
                          <div>
                            <div class="esa-stat">
                              <div class="esa-stat__value typography-display-sm">418</div>
                              <div class="esa-stat__label typography-label-md">workers trained</div>
                              <div class="esa-stat__sub typography-body-sm">
                                26 confirmations in the past 30 days
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="bcn-widget-panels__panel stack">
                          <div class="stack" data-gap="sm">
                            <span class="typography-label-md-strong">Workers by company</span>
                            <div class="bcn-viz-bars">
                              <div class="bcn-viz-bars__row">
                                <span class="bcn-viz-bars__name">Bayline Drilling</span
                                ><span class="bcn-viz-bars__track" aria-hidden="true"
                                  ><span
                                    class="bcn-viz-bars__fill"
                                    style="width: 100%"
                                  ></span></span
                                ><span class="bcn-viz-bars__val">138</span>
                              </div>
                              <div class="bcn-viz-bars__row">
                                <span class="bcn-viz-bars__name">Teal Ridge Construction</span
                                ><span class="bcn-viz-bars__track" aria-hidden="true"
                                  ><span
                                    class="bcn-viz-bars__fill"
                                    style="width: 81.16%"
                                  ></span></span
                                ><span class="bcn-viz-bars__val">112</span>
                              </div>
                              <div class="bcn-viz-bars__row">
                                <span class="bcn-viz-bars__name">Delta Geotechnical</span
                                ><span class="bcn-viz-bars__track" aria-hidden="true"
                                  ><span
                                    class="bcn-viz-bars__fill"
                                    style="width: 60.87%"
                                  ></span></span
                                ><span class="bcn-viz-bars__val">84</span>
                              </div>
                              <div class="bcn-viz-bars__row">
                                <span class="bcn-viz-bars__name">Rincon Field Services</span
                                ><span class="bcn-viz-bars__track" aria-hidden="true"
                                  ><span
                                    class="bcn-viz-bars__fill"
                                    style="width: 36.96%"
                                  ></span></span
                                ><span class="bcn-viz-bars__val">51</span>
                              </div>
                              <div class="bcn-viz-bars__row">
                                <span class="bcn-viz-bars__name">ESA</span
                                ><span class="bcn-viz-bars__track" aria-hidden="true"
                                  ><span
                                    class="bcn-viz-bars__fill"
                                    style="width: 23.91%"
                                  ></span></span
                                ><span class="bcn-viz-bars__val">33</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="bcn-widget-panels__panel stack">
                          <div class="stack" data-gap="sm">
                            <span class="typography-label-md-strong">Latest confirmations</span>
                            <table class="bcn-mt">
                              <thead>
                                <tr>
                                  <th scope="col">Worker</th>
                                  <th scope="col">Trade</th>
                                  <th class="bcn-mt--end" scope="col">Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>D. Aldana</td>
                                  <td>Driller helper</td>
                                  <td class="bcn-mt--end bcn-mt--num">Jun 16</td>
                                </tr>
                                <tr>
                                  <td>R. Soto</td>
                                  <td>Driller helper</td>
                                  <td class="bcn-mt--end bcn-mt--num">Jun 16</td>
                                </tr>
                                <tr>
                                  <td>K. Doyle</td>
                                  <td>Rig operator</td>
                                  <td class="bcn-mt--end bcn-mt--num">Jun 11</td>
                                </tr>
                                <tr>
                                  <td>L. Pham</td>
                                  <td>Service driver</td>
                                  <td class="bcn-mt--end bcn-mt--num">Jun 9</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__footer typography-meta">
                    <a
                      class="bcn-dwidget__foot"
                      href="/beacon-design/prototypes/monitoring/stream/weap"
                      >All WEAP trainings →</a
                    >
                  </div>
                </div>
              </section>
              <button type="button" class="mpd-add" data-mpd-add-open="">
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
                  disabled=""
                >
                  <div class="esa-card">
                    <div class="esa-card__body typography-body-md">
                      <span class="bcn-widget-card__body stack" data-gap="md"
                        ><span class="repel"
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
                              <path d="M10 10h4"></path>
                              <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"></path>
                              <path
                                d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"
                              ></path>
                              <path d="M 22 16 L 2 16"></path>
                              <path
                                d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"
                              ></path>
                              <path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"></path></svg></span
                          ><span class="bcn-widget-card__state"
                            ><span
                              class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                              ><span class="esa-badge__text">On dashboard</span></span
                            ></span
                          ></span
                        ><span class="stack" data-gap="xs"
                          ><span class="bcn-widget-card__title typography-label-md-strong"
                            >Active Observations</span
                          ><span class="bcn-widget-card__stream">Observations</span></span
                        ></span
                      >
                    </div>
                  </div></button
                ><button
                  type="button"
                  class="bcn-widget-card"
                  data-widget-card=""
                  data-widget-id="obs-nesting-birds"
                  data-on=""
                  disabled=""
                >
                  <div class="esa-card">
                    <div class="esa-card__body typography-body-md">
                      <span class="bcn-widget-card__body stack" data-gap="md"
                        ><span class="repel"
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
                              <path d="M16 7h.01"></path>
                              <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path>
                              <path d="m20 7 2 .5-2 .5"></path>
                              <path d="M10 18v3"></path>
                              <path d="M14 17.75V21"></path>
                              <path d="M7 18a6 6 0 0 0 3.84-10.61"></path></svg></span
                          ><span class="bcn-widget-card__state"
                            ><span
                              class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                              ><span class="esa-badge__text">On dashboard</span></span
                            ></span
                          ></span
                        ><span class="stack" data-gap="xs"
                          ><span class="bcn-widget-card__title typography-label-md-strong"
                            >Nesting Birds</span
                          ></span
                        ></span
                      >
                    </div>
                  </div></button
                ><button
                  type="button"
                  class="bcn-widget-card"
                  data-widget-card=""
                  data-widget-id="obs-concerns"
                  data-on=""
                  disabled=""
                >
                  <div class="esa-card">
                    <div class="esa-card__body typography-body-md">
                      <span class="bcn-widget-card__body stack" data-gap="md"
                        ><span class="repel"
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
                              <path
                                d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                              ></path>
                              <path d="M12 9v4"></path>
                              <path d="M12 17h.01"></path></svg></span
                          ><span class="bcn-widget-card__state"
                            ><span
                              class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                              ><span class="esa-badge__text">On dashboard</span></span
                            ></span
                          ></span
                        ><span class="stack" data-gap="xs"
                          ><span class="bcn-widget-card__title typography-label-md-strong"
                            >Compliance Concerns</span
                          ></span
                        ></span
                      >
                    </div>
                  </div></button
                ><button
                  type="button"
                  class="bcn-widget-card"
                  data-widget-card=""
                  data-widget-id="dmr-recent"
                  data-on=""
                  disabled=""
                >
                  <div class="esa-card">
                    <div class="esa-card__body typography-body-md">
                      <span class="bcn-widget-card__body stack" data-gap="md"
                        ><span class="repel"
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
                              <path
                                d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                              ></path>
                              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path></svg></span
                          ><span class="bcn-widget-card__state"
                            ><span
                              class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                              ><span class="esa-badge__text">On dashboard</span></span
                            ></span
                          ></span
                        ><span class="stack" data-gap="xs"
                          ><span class="bcn-widget-card__title typography-label-md-strong"
                            >Daily Monitoring Reports</span
                          ></span
                        ></span
                      >
                    </div>
                  </div></button
                ><button
                  type="button"
                  class="bcn-widget-card"
                  data-widget-card=""
                  data-widget-id="obs-bio"
                  data-on=""
                  disabled=""
                >
                  <div class="esa-card">
                    <div class="esa-card__body typography-body-md">
                      <span class="bcn-widget-card__body stack" data-gap="md"
                        ><span class="repel"
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
                              <path
                                d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                              ></path>
                              <path
                                d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                              ></path></svg></span
                          ><span class="bcn-widget-card__state"
                            ><span
                              class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                              ><span class="esa-badge__text">On dashboard</span></span
                            ></span
                          ></span
                        ><span class="stack" data-gap="xs"
                          ><span class="bcn-widget-card__title typography-label-md-strong"
                            >Biological Resources</span
                          ></span
                        ></span
                      >
                    </div>
                  </div></button
                ><button
                  type="button"
                  class="bcn-widget-card"
                  data-widget-card=""
                  data-widget-id="commitment-compliance"
                  data-on=""
                  disabled=""
                >
                  <div class="esa-card">
                    <div class="esa-card__body typography-body-md">
                      <span class="bcn-widget-card__body stack" data-gap="md"
                        ><span class="repel"
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
                              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                              <path
                                d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                              ></path>
                              <path d="m9 14 2 2 4-4"></path></svg></span
                          ><span class="bcn-widget-card__state"
                            ><span
                              class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                              ><span class="esa-badge__text">On dashboard</span></span
                            ></span
                          ></span
                        ><span class="stack" data-gap="xs"
                          ><span class="bcn-widget-card__title typography-label-md-strong"
                            >Commitment Compliance</span
                          ><span class="bcn-widget-card__stream">Observations</span></span
                        ></span
                      >
                    </div>
                  </div></button
                ><button
                  type="button"
                  class="bcn-widget-card"
                  data-widget-card=""
                  data-widget-id="mileage-total"
                  data-on=""
                  disabled=""
                >
                  <div class="esa-card">
                    <div class="esa-card__body typography-body-md">
                      <span class="bcn-widget-card__body stack" data-gap="md"
                        ><span class="repel"
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
                              <path
                                d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
                              ></path>
                              <circle cx="7" cy="17" r="2"></circle>
                              <path d="M9 17h6"></path>
                              <circle cx="17" cy="17" r="2"></circle></svg></span
                          ><span class="bcn-widget-card__state"
                            ><span
                              class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                              ><span class="esa-badge__text">On dashboard</span></span
                            ></span
                          ></span
                        ><span class="stack" data-gap="xs"
                          ><span class="bcn-widget-card__title typography-label-md-strong"
                            >Vehicle Mileage</span
                          ></span
                        ></span
                      >
                    </div>
                  </div></button
                ><button
                  type="button"
                  class="bcn-widget-card"
                  data-widget-card=""
                  data-widget-id="runtime-total"
                  data-on=""
                  disabled=""
                >
                  <div class="esa-card">
                    <div class="esa-card__body typography-body-md">
                      <span class="bcn-widget-card__body stack" data-gap="md"
                        ><span class="repel"
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
                              <line x1="10" x2="14" y1="2" y2="2"></line>
                              <line x1="12" x2="15" y1="14" y2="11"></line>
                              <circle cx="12" cy="14" r="8"></circle></svg></span
                          ><span class="bcn-widget-card__state"
                            ><span
                              class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                              ><span class="esa-badge__text">On dashboard</span></span
                            ></span
                          ></span
                        ><span class="stack" data-gap="xs"
                          ><span class="bcn-widget-card__title typography-label-md-strong"
                            >Equipment Runtime</span
                          ></span
                        ></span
                      >
                    </div>
                  </div></button
                ><button
                  type="button"
                  class="bcn-widget-card"
                  data-widget-card=""
                  data-widget-id="surveys-qc"
                  data-on=""
                  disabled=""
                >
                  <div class="esa-card">
                    <div class="esa-card__body typography-body-md">
                      <span class="bcn-widget-card__body stack" data-gap="md"
                        ><span class="repel"
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
                              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                              <path
                                d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                              ></path>
                              <path d="M12 11h4"></path>
                              <path d="M12 16h4"></path>
                              <path d="M8 11h.01"></path>
                              <path d="M8 16h.01"></path></svg></span
                          ><span class="bcn-widget-card__state"
                            ><span
                              class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                              ><span class="esa-badge__text">On dashboard</span></span
                            ></span
                          ></span
                        ><span class="stack" data-gap="xs"
                          ><span class="bcn-widget-card__title typography-label-md-strong"
                            >Surveys</span
                          ></span
                        ></span
                      >
                    </div>
                  </div></button
                ><button
                  type="button"
                  class="bcn-widget-card"
                  data-widget-card=""
                  data-widget-id="weap-trained"
                  data-on=""
                  disabled=""
                >
                  <div class="esa-card">
                    <div class="esa-card__body typography-body-md">
                      <span class="bcn-widget-card__body stack" data-gap="md"
                        ><span class="repel"
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
                              <path
                                d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
                              ></path>
                              <path d="M22 10v6"></path>
                              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg></span
                          ><span class="bcn-widget-card__state"
                            ><span
                              class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                              ><span class="esa-badge__text">On dashboard</span></span
                            ></span
                          ></span
                        ><span class="stack" data-gap="xs"
                          ><span class="bcn-widget-card__title typography-label-md-strong"
                            >WEAP Trainings</span
                          ></span
                        ></span
                      >
                    </div>
                  </div>
                </button>
              </div></esa-dialog
            >
            <script type="module">
              var e = new WeakMap();
              function t(e) {
                let t = getComputedStyle(e);
                return {
                  width: e.clientWidth - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight),
                  height: e.clientHeight - parseFloat(t.paddingTop) - parseFloat(t.paddingBottom),
                };
              }
              function n(n) {
                let r = e.get(n);
                if (!r || !r.host.firstElementChild || r.frameWidth <= 0) return;
                let i = t(r.scroll);
                if (i.width <= 0) return;
                ((r.host.style.transform = `none`),
                  (r.host.style.width = `${r.frameWidth}px`),
                  (r.host.style.height = `auto`),
                  (r.host.style.minHeight = `${r.minHeight}px`));
                let a = r.host.getBoundingClientRect().height,
                  o = Math.min(1, i.width / r.frameWidth);
                r.host.style.transform = `scale(${o.toFixed(4)})`;
                let s = a * o;
                ((r.well.style.width = `${Math.round(r.frameWidth * o)}px`),
                  (r.well.style.height = `${Math.round(s)}px`),
                  (r.well.style.marginTop = `${Math.max(0, (i.height - s) / 2)}px`),
                  (n.dataset.overflow = s > i.height ? `1` : `0`));
              }
              function r(t) {
                let r = e.get(t);
                r &&
                  (cancelAnimationFrame(r.pending),
                  (r.pending = requestAnimationFrame(() => n(t))));
              }
              function i(e, t) {
                e.badge && (e.badge.textContent = t);
              }
              function a(t) {
                if (t.dataset.stageArmed === `1`) return;
                let a = t.querySelector(`[data-stage-scroll]`),
                  o = t.querySelector(`[data-stage-well]`),
                  s = t.querySelector(`[data-stage-host]`);
                if (!a || !o || !s) return;
                t.dataset.stageArmed = `1`;
                let c = {
                  frameWidth: 0,
                  minHeight: 0,
                  scroll: a,
                  well: o,
                  host: s,
                  badge: t.querySelector(`[data-stage-badge]`),
                  pending: 0,
                };
                (e.set(t, c),
                  t.addEventListener(`bcn-stage-show`, (e) => {
                    let r = e.detail ?? {};
                    !r.node ||
                      !r.frameWidth ||
                      r.frameWidth <= 0 ||
                      ((c.frameWidth = r.frameWidth),
                      (c.minHeight = r.minHeight ?? 0),
                      s.replaceChildren(r.node),
                      typeof r.badge == `string` && i(c, r.badge),
                      n(t));
                  }),
                  t.addEventListener(`bcn-stage-badge`, (e) => {
                    let t = e.detail ?? {};
                    typeof t.badge == `string` && i(c, t.badge);
                  }),
                  t.addEventListener(`bcn-stage-rescale`, (e) => {
                    let r = e.detail ?? {};
                    !r.frameWidth ||
                      r.frameWidth <= 0 ||
                      ((c.frameWidth = r.frameWidth),
                      typeof r.minHeight == `number` && (c.minHeight = r.minHeight),
                      n(t));
                  }),
                  new ResizeObserver(() => r(t)).observe(a));
              }
              document.querySelectorAll(`[data-preview-stage]`).forEach(a);
            </script>
            <script type="module">
              function e(e) {
                let t = Array.from(e.querySelectorAll(`[data-color-swatch]`));
                if (!t.length) return;
                let n = (e) => {
                  for (let n of t)
                    n.setAttribute(`aria-pressed`, String(n.dataset.colorSwatch === e));
                };
                (e.addEventListener(`click`, (t) => {
                  let r = t.target?.closest(`[data-color-swatch]`);
                  if (!r || !e.contains(r)) return;
                  let i = r.dataset.colorSwatch;
                  i &&
                    (n(i),
                    e.dispatchEvent(
                      new CustomEvent(`bcn-color-change`, {
                        detail: { value: i, seriesKey: e.dataset.series },
                        bubbles: !0,
                        composed: !0,
                      }),
                    ));
                }),
                  e.addEventListener(`bcn-color-set`, (e) => {
                    let t = e.detail;
                    n(t?.value ?? null);
                  }));
              }
              document.querySelectorAll(`[data-color-field]`).forEach(e);
            </script>
            <esa-dialog
              id="mp-config-dialog"
              data-config-dialog="true"
              heading="Configure widget"
              size="lg"
              show-close-button="true"
              style="--dialog-width-lg: min(1140px, 94vw)"
              ><div class="bcn-cfg">
                <div class="bcn-cfg__preview stack" data-gap="md">
                  <esa-button-toggle
                    data-cfg-tabs="true"
                    size="sm"
                    aria-label="Preview width"
                  ></esa-button-toggle>
                  <div class="bcn-preview-stage" data-preview-stage="" data-stage-armed="1">
                    <span class="bcn-preview-stage__badge" data-stage-badge=""></span>
                    <div class="bcn-preview-stage__scroll" data-stage-scroll="">
                      <div class="bcn-preview-stage__well" data-stage-well="">
                        <div class="bcn-preview-stage__host" data-stage-host=""></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bcn-cfg__options stack" data-gap="lg">
                  <esa-text-field data-cfg-title="true" label="Title" size="sm"></esa-text-field>
                  <div data-cfg-shows-field="">
                    <esa-select data-cfg-shows="true" label="Shows" size="sm"></esa-select>
                  </div>
                  <esa-select data-cfg-scope="true" label="Date range" size="sm"></esa-select>
                  <div class="stack" data-gap="sm" data-cfg-color-mono="">
                    <span class="bcn-cfg__label typography-label-md-strong">Color</span>
                    <div class="bcn-color-field" data-color-field="">
                      <div class="bcn-color-field__swatches" role="group" aria-label="Color">
                        <button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Orange"
                          data-color-swatch="orange"
                          style="--_fill: var(--bcn-mark-orange)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Amber"
                          data-color-swatch="amber"
                          style="--_fill: var(--bcn-mark-amber)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Moss"
                          data-color-swatch="moss"
                          style="--_fill: var(--bcn-mark-moss)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Emerald"
                          data-color-swatch="emerald"
                          style="--_fill: var(--bcn-mark-emerald)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Teal"
                          data-color-swatch="teal"
                          style="--_fill: var(--bcn-mark-teal)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Sky"
                          data-color-swatch="sky"
                          style="--_fill: var(--bcn-mark-sky)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Slate"
                          data-color-swatch="slate"
                          style="--_fill: var(--bcn-mark-slate)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Rust"
                          data-color-swatch="rust"
                          style="--_fill: var(--bcn-mark-rust)"
                        ></button>
                      </div>
                    </div>
                  </div>
                  <div class="stack" data-gap="sm" data-cfg-color-series="" hidden="">
                    <span class="bcn-cfg__label typography-label-md-strong">Color</span>
                    <div class="bcn-color-field" data-color-field="" data-series="Nesting Birds">
                      <span class="bcn-color-field__name typography-label-sm">Nesting Birds</span>
                      <div
                        class="bcn-color-field__swatches"
                        role="group"
                        aria-label="Nesting Birds"
                      >
                        <button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Orange"
                          data-color-swatch="orange"
                          style="--_fill: var(--bcn-mark-orange)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Amber"
                          data-color-swatch="amber"
                          style="--_fill: var(--bcn-mark-amber)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Moss"
                          data-color-swatch="moss"
                          style="--_fill: var(--bcn-mark-moss)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Emerald"
                          data-color-swatch="emerald"
                          style="--_fill: var(--bcn-mark-emerald)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Teal"
                          data-color-swatch="teal"
                          style="--_fill: var(--bcn-mark-teal)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Sky"
                          data-color-swatch="sky"
                          style="--_fill: var(--bcn-mark-sky)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Slate"
                          data-color-swatch="slate"
                          style="--_fill: var(--bcn-mark-slate)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Rust"
                          data-color-swatch="rust"
                          style="--_fill: var(--bcn-mark-rust)"
                        ></button>
                      </div>
                    </div>
                    <div
                      class="bcn-color-field"
                      data-color-field=""
                      data-series="Biological Resources"
                    >
                      <span class="bcn-color-field__name typography-label-sm"
                        >Biological Resources</span
                      >
                      <div
                        class="bcn-color-field__swatches"
                        role="group"
                        aria-label="Biological Resources"
                      >
                        <button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Orange"
                          data-color-swatch="orange"
                          style="--_fill: var(--bcn-mark-orange)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Amber"
                          data-color-swatch="amber"
                          style="--_fill: var(--bcn-mark-amber)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Moss"
                          data-color-swatch="moss"
                          style="--_fill: var(--bcn-mark-moss)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Emerald"
                          data-color-swatch="emerald"
                          style="--_fill: var(--bcn-mark-emerald)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Teal"
                          data-color-swatch="teal"
                          style="--_fill: var(--bcn-mark-teal)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Sky"
                          data-color-swatch="sky"
                          style="--_fill: var(--bcn-mark-sky)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Slate"
                          data-color-swatch="slate"
                          style="--_fill: var(--bcn-mark-slate)"
                        ></button
                        ><button
                          type="button"
                          class="bcn-color-field__swatch"
                          aria-pressed="false"
                          aria-label="Rust"
                          data-color-swatch="rust"
                          style="--_fill: var(--bcn-mark-rust)"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div slot="footer" class="repel bcn-cfg__foot" data-gap="md">
                <span data-cfg-remove=""
                  ><span
                    class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--sm"
                    ><button class="esa-button__native typography-microcopy-xs" type="button">
                      <span class="esa-button__label">Remove widget</span>
                    </button></span
                  ></span
                ><span class="cluster" data-gap="sm"
                  ><span data-cfg-save=""
                    ><span
                      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                      ><button class="esa-button__native typography-microcopy-xs" type="button">
                        <span class="esa-button__label">Save widget</span>
                      </button></span
                    ></span
                  ><span data-cfg-cancel=""
                    ><span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                      ><button class="esa-button__native typography-microcopy-xs" type="button">
                        <span class="esa-button__label">Cancel</span>
                      </button></span
                    ></span
                  ></span
                >
              </div></esa-dialog
            >
            <script
              type="module"
              src="/beacon-design/_astro/BcnConfigDialog.astro_astro_type_script_index_0_lang.UibiIlFv.js"
            ></script>
            <script type="application/json" data-mpd-payload="">
              [
                {
                  "id": "obs-active",
                  "title": "Active Observations",
                  "charts": ["donut"],
                  "scopes": ["30d", "7d"],
                  "colorMode": "series",
                  "series": ["Nesting Birds", "Biological Resources"],
                  "stream": "Observations"
                },
                {
                  "id": "obs-nesting-birds",
                  "title": "Nesting Birds",
                  "charts": ["bars", "trend"],
                  "scopes": ["30d", "7d"],
                  "colorMode": "mono",
                  "series": [],
                  "stream": "Nesting Birds"
                },
                {
                  "id": "obs-concerns",
                  "title": "Compliance Concerns",
                  "charts": ["trend"],
                  "scopes": ["30d", "90d"],
                  "colorMode": "status",
                  "series": [],
                  "stream": "Compliance Concerns"
                },
                {
                  "id": "dmr-recent",
                  "title": "Daily Monitoring Reports",
                  "charts": ["list", "trend"],
                  "scopes": ["7d", "30d"],
                  "colorMode": "mono",
                  "series": [],
                  "stream": "Daily Monitoring Reports"
                },
                {
                  "id": "obs-bio",
                  "title": "Biological Resources",
                  "charts": ["bars"],
                  "scopes": ["30d", "7d"],
                  "colorMode": "mono",
                  "series": [],
                  "stream": "Biological Resources"
                },
                {
                  "id": "commitment-compliance",
                  "title": "Commitment Compliance",
                  "charts": ["list"],
                  "scopes": ["30d", "90d"],
                  "colorMode": "status",
                  "series": [],
                  "stream": "Observations"
                },
                {
                  "id": "mileage-total",
                  "title": "Vehicle Mileage",
                  "charts": ["trend", "bars", "stat"],
                  "scopes": ["14d", "7d", "30d", "90d"],
                  "colorMode": "mono",
                  "series": [],
                  "stream": "Vehicle Mileage"
                },
                {
                  "id": "runtime-total",
                  "title": "Equipment Runtime",
                  "charts": ["trend", "bars"],
                  "scopes": ["14d", "7d", "30d"],
                  "colorMode": "mono",
                  "series": [],
                  "stream": "Equipment Runtime"
                },
                {
                  "id": "surveys-qc",
                  "title": "Surveys",
                  "charts": ["meter"],
                  "scopes": ["30d", "90d"],
                  "colorMode": "status",
                  "series": [],
                  "stream": "Surveys"
                },
                {
                  "id": "weap-trained",
                  "title": "WEAP Trainings",
                  "charts": ["bars", "stat"],
                  "scopes": ["30d", "90d"],
                  "colorMode": "mono",
                  "series": [],
                  "stream": "WEAP Trainings"
                }
              ]
            </script>
          </section>
        </div>
      </div>
    </div>
  </div>
  <!-- Global ⌘K search palette (bespoke bcn-omni-search). Sits at the modern-layout
         root so its fixed, centered overlay clears the z-1100 topbar; app-wide. -->
  <div class="bcn-omni" data-omni="" hidden="">
    <div class="bcn-omni__scrim" data-omni-close=""></div>
    <div class="bcn-omni__panel" role="dialog" aria-modal="true" aria-label="Global search">
      <div class="bcn-omni__searchrow">
        <span class="bcn-omni__searchicon" aria-hidden="true"
          ><svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path></svg></span
        ><span class="bcn-omni__inputwrap"
          ><span class="bcn-omni__ghost" data-omni-ghost="" aria-hidden="true"></span
          ><input
            class="bcn-omni__input"
            data-omni-input=""
            type="text"
            placeholder="Search…"
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
            aria-label="Search" /></span
        ><button
          class="bcn-omni__clear"
          data-omni-clear=""
          type="button"
          aria-label="Clear search"
          hidden=""
        >
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg></button
        ><kbd>Esc</kbd>
      </div>
      <div class="bcn-omni__split">
        <nav
          class="bcn-omni__rail"
          data-omni-scopes=""
          role="tablist"
          aria-label="Filter by type"
        ></nav>
        <div class="bcn-omni__body" data-omni-body="" role="listbox"></div>
      </div>
      <button class="bcn-omni__showall" data-omni-showall="" type="button" hidden="">
        <span data-omni-showall-label="">See all results</span
        ><svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
      <div class="bcn-omni__footer">
        <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span><span><kbd>↵</kbd> Select</span
        ><span><kbd>Tab</kbd> Complete</span><span><kbd>Esc</kbd> Close</span>
      </div>
    </div>
  </div>
  <script
    type="module"
    src="/beacon-design/_astro/BcnOmniSearch.astro_astro_type_script_index_0_lang.B0-2TFz8.js"
  ></script>
  <!-- Aldo — help & guidance, app-wide like the palette above: the floating
         bottom-center utility bar and the route-aware guidance drawer it opens.
         Same root placement so the drawer's overlay clears the z-1100 topbar. -->
  <div
    class="bcn-help-bar"
    data-help-bar=""
    data-newest="2026-06-02"
    role="toolbar"
    aria-label="Help &amp; utilities"
  >
    <!-- Primary: Guidance — the Aldo mark + visible label; opens the guidance drawer via hook. --><button
      type="button"
      class="bcn-help-bar__guidance"
      data-help-trigger=""
      aria-haspopup="dialog"
    >
      <span class="bcn-aldo-mark" data-size="sm" aria-hidden="true"
        ><span class="bcn-aldo-mark__glyph"
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
              <circle cx="12" cy="12" r="10"></circle></svg></span></span></span
      ><span class="bcn-help-bar__guidance-label">Guidance</span></button
    ><span class="bcn-help-bar__divider" aria-hidden="true"></span
    ><!-- Attach Evidence of Compliance — icon-only; the tooltip host carries the drawer's open hook.
       GLYPH NOTE: the spoke's committed evidence glyph is the paperclip in global-search's
       SCOPES (what the ⌘K palette shows for Evidence of Compliance), but esa-icon-button
       forwards only a registry `name` — no custom `paths` — and the hub registry has no
       paperclip. Using 'file-text' until paperclip is registered in the hub, the same
       constraint and the same fix as 'notepad-text' below.
       This slot used to hold a duplicate Search button. It was replaced (product meeting
       2026-08-04): search already has the top bar's own field and ⌘K, and this bar is
       where Beacon's bottom affordances live, which is where the global evidence drawer
       belongs. --><esa-tooltip
      class="bcn-help-bar__tooltip"
      text="Attach Evidence of Compliance"
      position="above"
      data-evidence-trigger="true"
      ><span
        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--md esa-button--icon-only"
        ><button
          class="esa-button__native typography-microcopy-md"
          type="button"
          aria-label="Attach Evidence of Compliance"
          title="Attach Evidence of Compliance"
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
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path></svg
          ></span></button></span></esa-tooltip
    ><!-- What's new — icon-only trigger + unread dot; esa-popover panel opens above the bar. --><esa-popover
      class="bcn-help-bar__popover"
      position="top"
      trigger="click"
      offset="12"
      appearance="default"
      ><span class="bcn-help-bar__whatsnew" data-whatsnew=""
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--md esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-md"
            type="button"
            aria-label="What's new"
            title="What's new"
            aria-expanded="false"
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
                <path d="M8 2v4"></path>
                <path d="M12 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="16" height="18" x="4" y="4" rx="2"></rect>
                <path d="M8 10h6"></path>
                <path d="M8 14h8"></path>
                <path d="M8 18h5"></path></svg
            ></span></button></span
        ><span class="bcn-help-bar__dot" data-whatsnew-dot="" aria-hidden="true"></span
      ></span>
      <div slot="content" class="bcn-help-bar__panel">
        <header class="bcn-help-bar__panel-header">
          <p class="bcn-help-bar__panel-title">What's new</p>
          <p class="bcn-help-bar__panel-release">
            1.33.0 · <time datetime="2026-06-02">Jun 2, 2026</time>
          </p>
        </header>
        <ul class="bcn-help-bar__panel-list">
          <li class="bcn-help-bar__panel-item">
            <a
              class="bcn-help-bar__panel-link"
              href="/beacon-design/prototypes/release-notes#v1-33-0"
              ><p class="bcn-help-bar__panel-item-title">Commitment Lists</p>
              <p class="bcn-help-bar__panel-item-blurb">
                Save a filtered view of commitments as a reusable, named List, then reopen it
                anytime to scope the grid to just its members.
              </p></a
            >
          </li>
          <li class="bcn-help-bar__panel-item">
            <a
              class="bcn-help-bar__panel-link"
              href="/beacon-design/prototypes/release-notes#v1-33-0"
              ><p class="bcn-help-bar__panel-item-title">Evidence of Compliance</p>
              <p class="bcn-help-bar__panel-item-blurb">
                Every Evidence of Compliance record now lives in one Data Catalog grid with Project,
                Component, and Work Area scope selectors, instead of separate tabs on each page.
              </p></a
            >
          </li>
          <li class="bcn-help-bar__panel-item">
            <a
              class="bcn-help-bar__panel-link"
              href="/beacon-design/prototypes/release-notes#v1-33-0"
              ><p class="bcn-help-bar__panel-item-title">Commitment Compliance</p>
              <p class="bcn-help-bar__panel-item-blurb">
                A new Monitoring Portal section shows which commitments are out of compliance and
                the field observations driving it, matched by species.
              </p></a
            >
          </li>
        </ul>
        <div class="bcn-help-bar__panel-footer">
          <a class="bcn-help-bar__panel-all" href="/beacon-design/prototypes/release-notes"
            >All release notes<span class="bcn-help-bar__panel-all-arrow" aria-hidden="true"
              >→</span
            ></a
          >
        </div>
      </div></esa-popover
    >
  </div>
  <script
    type="module"
    src="/beacon-design/_astro/BcnHelpBar.astro_astro_type_script_index_0_lang.rnozUMkB.js"
  ></script>
  <!-- ── Drawer (parent) ── --><esa-side-dialog
    class="bcn-gd"
    data-gd="true"
    position="right"
    heading="Help &amp; Guidance"
    size="md"
    ><div slot="header" class="bcn-gd__header">
      <span class="bcn-aldo-mark" data-size="md" aria-hidden="true"
        ><span class="bcn-aldo-mark__glyph"
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
              <path
                d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
              ></path>
              <circle cx="12" cy="12" r="10"></circle></svg></span></span></span
      ><span class="bcn-gd__title">Help &amp; Guidance</span>
    </div>
    <div class="bcn-gd__stream">
      <div class="bcn-gd-msg bcn-gd-msg--aldo" data-gd-intro="">
        <div class="bcn-gd-msg__avatar">
          <span class="bcn-aldo-mark" data-size="sm" aria-hidden="true"
            ><span class="bcn-aldo-mark__glyph"
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
          ></span>
        </div>
        <div class="bcn-gd-msg__group">
          <section class="bcn-gd__section">
            <h2 class="bcn-gd__label">
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
                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                  ></path>
                  <circle cx="12" cy="10" r="3"></circle></svg
              ></span>
              You are here
            </h2>
            <div class="bcn-gd__here">
              <span class="bcn-gd__here-page" data-gd-page="">Monitoring</span
              ><span class="bcn-gd__here-purpose" data-gd-purpose=""
                >What is happening in the field — daily reports, observations, surveys, and the
                compliance concerns they raise.</span
              >
            </div>
          </section>
          <section class="bcn-gd__section" data-gd-section="howtos">
            <h2 class="bcn-gd__label">
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
                  <line x1="8" x2="21" y1="6" y2="6"></line>
                  <line x1="8" x2="21" y1="12" y2="12"></line>
                  <line x1="8" x2="21" y1="18" y2="18"></line>
                  <line x1="3" x2="3.01" y1="6" y2="6"></line>
                  <line x1="3" x2="3.01" y1="12" y2="12"></line>
                  <line x1="3" x2="3.01" y1="18" y2="18"></line></svg
              ></span>
              On this page
            </h2>
            <div class="bcn-gd__rows" data-gd-howtos="">
              <button
                type="button"
                class="bcn-gd-row"
                data-article-id="qc-field-surveys"
                data-kind="howto"
                data-title="Reviewing field surveys before they count"
                data-summary="Surveys sync from field apps, but only QC-approved records drive compliance."
              >
                <span class="bcn-gd-row__text"
                  ><span class="bcn-gd-row__title">Reviewing field surveys before they count</span
                  ><span class="bcn-gd-row__sub"
                    >Surveys sync from field apps, but only QC-approved records drive
                    compliance.</span
                  ></span
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
                    <path d="m9 18 6-6-6-6"></path></svg
                ></span></button
              ><button
                type="button"
                class="bcn-gd-row"
                data-article-id="site-clearance-go-no-go"
                data-kind="howto"
                data-title="Using Site Clearance go/no-go"
                data-summary="Check whether a work site is clear for ground disturbance — and what is blocking it."
              >
                <span class="bcn-gd-row__text"
                  ><span class="bcn-gd-row__title">Using Site Clearance go/no-go</span
                  ><span class="bcn-gd-row__sub"
                    >Check whether a work site is clear for ground disturbance — and what is
                    blocking it.</span
                  ></span
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
                    <path d="m9 18 6-6-6-6"></path></svg
                ></span>
              </button>
            </div>
          </section>
          <section class="bcn-gd__section" data-gd-section="terms">
            <h2 class="bcn-gd__label">
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
                    d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                  ></path></svg
              ></span>
              Terms
            </h2>
            <div class="bcn-gd__rows" data-gd-terms="">
              <button
                type="button"
                class="bcn-gd-row"
                data-article-id="what-is-a-dmr"
                data-kind="glossary"
                data-title="Daily Monitoring Report"
                data-summary="The structured field record of one day on site, and a direct source of evidence."
              >
                <span class="bcn-gd-row__text"
                  ><span class="bcn-gd-row__title">Daily Monitoring Report</span
                  ><span class="bcn-gd-row__sub"
                    >The structured field record of one day on site, and a direct source of
                    evidence.</span
                  ></span
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
                    <path d="m9 18 6-6-6-6"></path></svg
                ></span></button
              ><button
                type="button"
                class="bcn-gd-row"
                data-article-id="what-is-an-observation"
                data-kind="glossary"
                data-title="Observation"
                data-summary="One recorded field event — a species sighting, habitat condition, weather event, or BMP check."
              >
                <span class="bcn-gd-row__text"
                  ><span class="bcn-gd-row__title">Observation</span
                  ><span class="bcn-gd-row__sub"
                    >One recorded field event — a species sighting, habitat condition, weather
                    event, or BMP check.</span
                  ></span
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
                    <path d="m9 18 6-6-6-6"></path></svg
                ></span></button
              ><button
                type="button"
                class="bcn-gd-row"
                data-article-id="monitoring-portal"
                data-kind="glossary"
                data-title="Monitoring Portal"
                data-summary="The section that reports commitment compliance from field observations."
              >
                <span class="bcn-gd-row__text"
                  ><span class="bcn-gd-row__title">Monitoring Portal</span
                  ><span class="bcn-gd-row__sub"
                    >The section that reports commitment compliance from field observations.</span
                  ></span
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
                    <path d="m9 18 6-6-6-6"></path></svg
                ></span>
              </button>
            </div>
          </section>
        </div>
      </div>
      <!-- appended Q&A exchanges -->
      <div data-gd-chat=""></div>
      <!-- Row pool: every article as a compact row, hidden. The client moves the route's
         rows into the two sections above; the rest stay here (hidden). -->
      <div class="bcn-gd__pool" data-gd-pool="" hidden="">
        <button
          type="button"
          class="bcn-gd-row"
          data-article-id="project-vs-component-scope"
          data-kind="glossary"
          data-title="Scope"
          data-summary="The setting that determines whether work is tracked once, or once per location."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Scope</span
            ><span class="bcn-gd-row__sub"
              >The setting that determines whether work is tracked once, or once per location.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="tenant"
          data-kind="glossary"
          data-title="Tenant"
          data-summary="The client organization a Beacon workspace, its data, and its configuration are scoped to."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Tenant</span
            ><span class="bcn-gd-row__sub"
              >The client organization a Beacon workspace, its data, and its configuration are
              scoped to.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="work-area"
          data-kind="glossary"
          data-title="Work Area"
          data-summary="The finest scope level — a subdivision of a component for field-level tracking."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Work Area</span
            ><span class="bcn-gd-row__sub"
              >The finest scope level — a subdivision of a component for field-level tracking.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="five-minute-tour"
          data-kind="howto"
          data-title="A five-minute tour of Beacon"
          data-summary="The four zones of the app and how a compliance obligation flows through them."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">A five-minute tour of Beacon</span
            ><span class="bcn-gd-row__sub"
              >The four zones of the app and how a compliance obligation flows through them.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="global-search-tips"
          data-kind="howto"
          data-title="Finding anything with search"
          data-summary="Press / anywhere to search commitments, requirements, actions, and documents."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Finding anything with search</span
            ><span class="bcn-gd-row__sub"
              >Press / anywhere to search commitments, requirements, actions, and documents.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="actions-vs-implementations"
          data-kind="glossary"
          data-title="Implementation"
          data-summary="A single execution of a published action — the record teams work day to day."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Implementation</span
            ><span class="bcn-gd-row__sub"
              >A single execution of a published action — the record teams work day to day.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="what-is-a-component"
          data-kind="glossary"
          data-title="Component"
          data-summary="A distinct place or package of work within a project, tracked independently."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Component</span
            ><span class="bcn-gd-row__sub"
              >A distinct place or package of work within a project, tracked independently.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="permit"
          data-kind="glossary"
          data-title="Permit"
          data-summary="An agency authorization the project must obtain, tracked through the acquisition pipeline."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Permit</span
            ><span class="bcn-gd-row__sub"
              >An agency authorization the project must obtain, tracked through the acquisition
              pipeline.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="reading-permit-tracking"
          data-kind="howto"
          data-title="Reading the Permit Tracking board"
          data-summary="Where each permit stands, what is blocking it, and what is due next."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Reading the Permit Tracking board</span
            ><span class="bcn-gd-row__sub"
              >Where each permit stands, what is blocking it, and what is due next.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="starring-components"
          data-kind="howto"
          data-title="Starring components on your dashboard"
          data-summary="Pin the three-to-five components you actually work in."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Starring components on your dashboard</span
            ><span class="bcn-gd-row__sub"
              >Pin the three-to-five components you actually work in.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="reading-critical-now"
          data-kind="howto"
          data-title="How the dashboard decides what needs attention"
          data-summary="Urgency comes from action due dates, shown in the zone that owns the work."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">How the dashboard decides what needs attention</span
            ><span class="bcn-gd-row__sub"
              >Urgency comes from action due dates, shown in the zone that owns the work.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="reading-project-timeline"
          data-kind="howto"
          data-title="Reading the project timeline"
          data-summary="The next 30, 60, or 90 days of due dates, seasons, and milestones."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Reading the project timeline</span
            ><span class="bcn-gd-row__sub"
              >The next 30, 60, or 90 days of due dates, seasons, and milestones.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="survey"
          data-kind="glossary"
          data-title="Survey"
          data-summary="A field data record synced from a collection app, effective only after quality-control approval."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Survey</span
            ><span class="bcn-gd-row__sub"
              >A field data record synced from a collection app, effective only after
              quality-control approval.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="site-clearance"
          data-kind="glossary"
          data-title="Site Clearance"
          data-summary="The go/no-go determination of whether a site is clear for ground disturbance."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Site Clearance</span
            ><span class="bcn-gd-row__sub"
              >The go/no-go determination of whether a site is clear for ground disturbance.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="what-is-evidence"
          data-kind="glossary"
          data-title="Evidence of Compliance"
          data-summary="The documented proof that an obligation was met — the artifact an auditor reviews."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Evidence of Compliance</span
            ><span class="bcn-gd-row__sub"
              >The documented proof that an obligation was met — the artifact an auditor
              reviews.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="assembling-compliance-report"
          data-kind="howto"
          data-title="Assembling a compliance report"
          data-summary="Compile evidence of compliance into a report package for an agency."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Assembling a compliance report</span
            ><span class="bcn-gd-row__sub"
              >Compile evidence of compliance into a report package for an agency.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="what-is-a-source"
          data-kind="glossary"
          data-title="Source Document"
          data-summary="The regulatory document — permit, EIR, or agreement — that obligations are extracted from."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Source Document</span
            ><span class="bcn-gd-row__sub"
              >The regulatory document — permit, EIR, or agreement — that obligations are extracted
              from.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="what-is-a-commitment"
          data-kind="glossary"
          data-title="Commitment"
          data-summary="One discrete obligation, recorded in its source document’s original language."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Commitment</span
            ><span class="bcn-gd-row__sub"
              >One discrete obligation, recorded in its source document’s original language.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="what-is-a-requirement"
          data-kind="glossary"
          data-title="Requirement"
          data-summary="A specific, actionable sub-obligation broken out of a commitment."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Requirement</span
            ><span class="bcn-gd-row__sub"
              >A specific, actionable sub-obligation broken out of a commitment.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="what-is-an-action"
          data-kind="glossary"
          data-title="Action"
          data-summary="One trackable deliverable consolidating requirements that describe the same work."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Action</span
            ><span class="bcn-gd-row__sub"
              >One trackable deliverable consolidating requirements that describe the same
              work.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="tracing-lineage"
          data-kind="howto"
          data-title="Tracing a requirement back to its source"
          data-summary="Follow the lineage from any requirement up to the exact document language."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Tracing a requirement back to its source</span
            ><span class="bcn-gd-row__sub"
              >Follow the lineage from any requirement up to the exact document language.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="feature-flag"
          data-kind="glossary"
          data-title="Feature Flag"
          data-summary="A tenant-level switch that enables or disables a Beacon capability."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Feature Flag</span
            ><span class="bcn-gd-row__sub"
              >A tenant-level switch that enables or disables a Beacon capability.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="managing-tenant-settings"
          data-kind="howto"
          data-title="Managing tenant settings"
          data-summary="Configure the display labels, defaults, and enabled features that apply across a tenant."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Managing tenant settings</span
            ><span class="bcn-gd-row__sub"
              >Configure the display labels, defaults, and enabled features that apply across a
              tenant.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="managing-users-roles"
          data-kind="howto"
          data-title="Managing users and roles"
          data-summary="Add users to a tenant and assign the roles that govern their access."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Managing users and roles</span
            ><span class="bcn-gd-row__sub"
              >Add users to a tenant and assign the roles that govern their access.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="configuring-notifications"
          data-kind="howto"
          data-title="Configuring notifications"
          data-summary="Set which compliance events generate notifications, and how each user receives them."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Configuring notifications</span
            ><span class="bcn-gd-row__sub"
              >Set which compliance events generate notifications, and how each user receives
              them.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span>
        </button>
      </div>
    </div>
    <div slot="footer" class="bcn-gd__foot">
      <a class="bcn-gd__browse" data-gd-browse="" href="/beacon-design/prototypes/help"
        >Browse all Help &amp; Guidance<svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 5l7 7-7 7"></path></svg
      ></a>
      <div class="bcn-gd-composer">
        <textarea
          class="bcn-gd-composer__input"
          data-gd-ask=""
          rows="1"
          placeholder="Ask Aldo a question…"
          aria-label="Ask Aldo a question"
        ></textarea
        ><button
          type="button"
          class="bcn-gd-composer__send"
          data-gd-ask-send=""
          aria-label="Send question"
          disabled=""
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
              <path d="m5 12 7-7 7 7"></path>
              <path d="M12 19V5"></path></svg
          ></span>
        </button>
      </div></div></esa-side-dialog
  ><!-- Aldo avatar cloned into each reply message (reuses the real mark). --><template
    data-gd-aldo-avatar=""
    ><span class="bcn-aldo-mark" data-size="sm" aria-hidden="true" data-astro-cid-breadewf=""
      ><span class="bcn-aldo-mark__glyph" data-astro-cid-breadewf=""
        ><span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
            <path
              d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
            ></path>
            <circle cx="12" cy="12" r="10"></circle></svg></span></span></span></template
  ><!-- ── Article reader (child, stacked above the drawer) ── --><esa-side-dialog
    class="bcn-gd-article"
    data-gd-article="true"
    position="right"
    heading="Guidance article"
    size="md"
    ><div slot="header" class="bcn-gd-article__head">
      <button type="button" class="bcn-gd-article__back" data-gd-article-back="">
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
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path></svg
        ></span>
        All guidance</button
      ><span class="bcn-gd-article__titlerow"
        ><span class="bcn-gd-article__title" data-gd-article-title=""></span
        ><span class="bcn-gd-article__kind" data-gd-article-kind=""></span
      ></span>
    </div>
    <div class="bcn-gd-article__body">
      <div
        class="bcn-gd-article__panel"
        data-article-body="project-vs-component-scope"
        data-kind="glossary"
        data-title="Scope"
        hidden=""
      >
        <article id="article-project-vs-component-scope" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              Scope determines how an action is distributed. A project-scoped action is performed
              once, centrally — for example, submitting the project-wide stormwater plan. A
              component-scoped action is performed independently at every applicable component — for
              example, installing exclusion fencing at each of 20 construction areas.
            </p>
            <figure class="bcn-help-article__figure">
              <div class="bcn-help-article__figure-frame">
                <span class="bcn-help-article__figure-icon"
                  ><span class="esa-icon esa-icon--lg" aria-hidden="true"
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
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <circle cx="9" cy="9" r="2"></circle>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></span></span
                ><span class="bcn-help-article__figure-label">The scope multiplier</span>
              </div>
              <figcaption class="bcn-help-article__caption typography-meta">
                One component-scoped action across 20 components produces 20 independently tracked
                implementations.
              </figcaption>
            </figure>
            <aside class="bcn-help-article__callout bcn-help-article__callout--note">
              <span class="bcn-help-article__callout-icon"
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path></svg></span
              ></span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Note</span>
                <p class="bcn-help-article__callout-text typography-body-md">
                  Each implementation is tracked separately, with its own assignee, timeline, and
                  evidence.
                </p>
              </div>
            </aside>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="tenant"
        data-kind="glossary"
        data-title="Tenant"
        hidden=""
      >
        <article id="article-tenant" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              A Tenant is the organization a Beacon workspace belongs to. Beacon is multi-tenant:
              each tenant’s projects, documents, users, and configuration are isolated from every
              other tenant’s, and a user operates within a single tenant at a time.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              Tenant-level settings — display labels, enabled features, notification defaults, and
              user roles — apply uniformly across every project the tenant owns.
            </p>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="work-area"
        data-kind="glossary"
        data-title="Work Area"
        hidden=""
      >
        <article id="article-work-area" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              A Work Area is a subdivision of a component, used when field tracking requires finer
              grain than the component itself provides. Work areas form the most granular level of
              the Project → Component → Work Area scope hierarchy.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              Evidence of Compliance and monitoring records can be scoped to a work area, isolating
              activity to a specific portion of a component.
            </p>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="five-minute-tour"
        data-kind="howto"
        data-title="A five-minute tour of Beacon"
        hidden=""
      >
        <article id="article-five-minute-tour" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              Beacon turns a body of regulatory documents into a working compliance program.
              Everything in the app follows one flow: documents are cataloged, obligations are
              planned into actions, and completed work is proven with evidence.
            </p>
            <figure class="bcn-help-article__video">
              <div class="bcn-help-article__video-frame">
                <span class="bcn-help-article__video-play"
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
                      <polygon points="6 3 20 12 6 21 6 3"></polygon></svg></span></span
                ><span class="bcn-help-article__video-duration"
                  ><span
                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    ><span class="esa-badge__text">4:32</span></span
                  ></span
                >
              </div>
              <figcaption class="bcn-help-article__caption typography-meta">
                Watch: a quick tour of Beacon
              </figcaption>
            </figure>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step typography-body-md">
                The Data Catalog holds source documents and the commitments and requirements
                extracted from them.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Tracking is where planned actions become day-to-day work, tracked per project or per
                component.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Monitoring captures what happens in the field — daily reports, observations, and
                surveys.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Reporting assembles evidence of compliance into the reports agencies expect.
              </li>
            </ol>
            <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
              <span class="bcn-help-article__callout-icon"
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
                      d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                    ></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path></svg></span
              ></span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Tip</span>
                <p class="bcn-help-article__callout-text typography-body-md">
                  The side navigation mirrors these four zones. The project dashboard links into
                  each zone and is the shortest path back to any of them.
                </p>
              </div>
            </aside>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-global-search-tips"
                  >Finding anything with search</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-an-action"
                  >Action</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="global-search-tips"
        data-kind="howto"
        data-title="Finding anything with search"
        hidden=""
      >
        <article id="article-global-search-tips" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              Search reads the full text of everything in a project — including the body text of
              commitments and uploaded documents, not just titles.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step typography-body-md">
                Press / on any page, or click the search field in the top bar.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Type a few words. Results group by type — commitments, requirements, actions,
                documents — with matching snippets highlighted.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Press Enter on a result to open it, or choose “See all results” for the full page
                with filters.
              </li>
            </ol>
            <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
              <span class="bcn-help-article__callout-icon"
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
                      d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                    ></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path></svg></span
              ></span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Tip</span>
                <p class="bcn-help-article__callout-text typography-body-md">
                  Searching a permit number or an agency name returns every obligation tied to it.
                </p>
              </div>
            </aside>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-five-minute-tour"
                  >A five-minute tour of Beacon</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="actions-vs-implementations"
        data-kind="glossary"
        data-title="Implementation"
        hidden=""
      >
        <article id="article-actions-vs-implementations" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              An Implementation is the tracked execution of an action: its status, assignee, tasks,
              comments, and evidence. The action defines what must be done; the implementation
              records doing it. In daily use, implementations are what teams refer to as the
              actions.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              The number of implementations an action generates is determined by its scope and
              frequency. A one-time, project-scoped submission generates one implementation. A
              recurring, component-scoped inspection generates one per component, per occurrence.
            </p>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="what-is-a-component"
        data-kind="glossary"
        data-title="Component"
        hidden=""
      >
        <article id="article-what-is-a-component" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              A Component is a discrete location or work package within a project — a launch shaft,
              an intake site, a construction segment. Components exist because the same obligation
              frequently applies independently at each location.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              A component maps to the commitments that apply to it, may carry its own milestone
              dates, and receives its own implementations of component-scoped actions. A Work Area
              subdivides a component further when field tracking requires finer grain.
            </p>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="permit"
        data-kind="glossary"
        data-title="Permit"
        hidden=""
      >
        <article id="article-permit" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              A Permit is an authorization or approval a project must secure from a regulatory
              agency before or during construction. Beacon tracks each permit through its
              acquisition pipeline — from not yet applied, through agency review, to issued.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              An issued permit typically becomes a source document: its conditions are extracted as
              commitments and enter the catalog alongside every other obligation.
            </p>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="reading-permit-tracking"
        data-kind="howto"
        data-title="Reading the Permit Tracking board"
        hidden=""
      >
        <article id="article-reading-permit-tracking" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              Permit Tracking lists every permit and approval a project needs, each with its current
              status in the acquisition pipeline — from not yet applied, through agency review, to
              issued.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step typography-body-md">
                Each row is one permit; the status lozenge shows where it sits in the pipeline.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                The date column shows the next deadline — a submittal window, an agency response
                due, or an expiration to renew.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Open a permit to see its conditions, responsible contacts, and the source document
                it will become once issued.
              </li>
            </ol>
            <figure class="bcn-help-article__video">
              <div class="bcn-help-article__video-frame">
                <span class="bcn-help-article__video-play"
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
                      <polygon points="6 3 20 12 6 21 6 3"></polygon></svg></span></span
                ><span class="bcn-help-article__video-duration"
                  ><span
                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    ><span class="esa-badge__text">2:47</span></span
                  ></span
                >
              </div>
              <figcaption class="bcn-help-article__caption typography-meta">
                Watch: a permit’s life in Beacon
              </figcaption>
            </figure>
            <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
              <span class="bcn-help-article__callout-icon"
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
                      d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                    ></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path></svg></span
              ></span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Tip</span>
                <p class="bcn-help-article__callout-text typography-body-md">
                  An issued permit becomes a source document: its conditions are extracted as
                  commitments and join the catalog like any other obligation.
                </p>
              </div>
            </aside>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-permit"
                  >Permit</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-a-source"
                  >Source Document</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-a-commitment"
                  >Commitment</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="starring-components"
        data-kind="howto"
        data-title="Starring components on your dashboard"
        hidden=""
      >
        <article id="article-starring-components" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              A project may have dozens of components, though most people work in a few. Starring
              pins a component to the project dashboard as a card showing its Tracking, Monitoring,
              and Reporting pulse — the entry point into that component’s own dashboard.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step typography-body-md">
                Star a component from the all-components list, or from the star in its own header.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Starred components appear on the project dashboard in the Components section, below
                the project-wide row.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Un-star from either place; the component itself is unaffected.
              </li>
            </ol>
            <p class="bcn-help-article__p typography-body-md">
              Stars are yours alone — starring a component does not change what anyone else sees.
              The Components section always leads with a project-wide row for actions that belong to
              the project rather than to any one component.
            </p>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-a-component"
                  >Component</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-reading-critical-now"
                  >How the dashboard decides what needs attention</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="reading-critical-now"
        data-kind="howto"
        data-title="How the dashboard decides what needs attention"
        hidden=""
      >
        <article id="article-reading-critical-now" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              Everything urgent on the dashboard is an action with a due date. Each action belongs
              to one of the three zones by its type — tracking, monitoring, or reporting — so a
              lapsed survey is a monitoring action and an agency submittal is a reporting action.
              There is no separate list of critical items to maintain.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              The Tracking, Monitoring, and Reporting modules each count their own overdue actions
              and the ones due within the next fourteen days, then list the most urgent of them. Red
              means past due; amber means due soon. Clicking any of them opens the action itself.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              An action leaves the surface when it is completed or its due date moves. There is
              nothing to configure — the modules read the same action records you work with in each
              zone.
            </p>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-starring-components"
                  >Starring components on your dashboard</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-reading-project-timeline"
                  >Reading the project timeline</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="reading-project-timeline"
        data-kind="howto"
        data-title="Reading the project timeline"
        hidden=""
      >
        <article id="article-reading-project-timeline" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              The timeline across the top of the dashboard plots three things on one date axis:
              action due dates, season windows, and project milestones. It opens a week before today
              so anything already overdue stays in view.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step typography-body-md">
                Switch the window between 30, 60, and 90 days to look further ahead.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Click any mark — a dot, a season bar, or a milestone — to pin its details open.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Seasons show the ones starting or ending inside the window first; use “Show all”
                when a project carries many.
              </li>
            </ol>
            <p class="bcn-help-article__p typography-body-md">
              Action dots follow the same colors as the modules: red for past due, amber for due
              soon, gray for later. Milestones are shown in blue because they mark schedule rather
              than urgency.
            </p>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-reading-critical-now"
                  >How the dashboard decides what needs attention</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-starring-components"
                  >Starring components on your dashboard</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="what-is-a-dmr"
        data-kind="glossary"
        data-title="Daily Monitoring Report"
        hidden=""
      >
        <article id="article-what-is-a-dmr" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              A Daily Monitoring Report (DMR) documents one day of field monitoring: the observer,
              site and weather conditions, construction activities underway, recorded observations,
              photographs, and narrative notes.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              DMRs connect field activity to compliance. When an obligation requires daily
              biological monitoring during construction, the DMRs documenting that monitoring
              constitute the evidence the obligation was met.
            </p>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="what-is-an-observation"
        data-kind="glossary"
        data-title="Observation"
        hidden=""
      >
        <article id="article-what-is-an-observation" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              An Observation is a single recorded field event: two burrowing owls at the north
              staging area, an intact silt fence along the eastern boundary, or wind exceeding 25
              mph with dust control activated. An observation typically belongs to a DMR and carries
              species data, location, time, and photographs.
            </p>
            <aside class="bcn-help-article__callout bcn-help-article__callout--note">
              <span class="bcn-help-article__callout-icon"
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path></svg></span
              ></span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Note</span>
                <p class="bcn-help-article__callout-text typography-body-md">
                  Observations with compliance consequences — an active nest inside a buffer, a
                  failed BMP — surface in Monitoring as items requiring action, and may trigger
                  review before work proceeds.
                </p>
              </div>
            </aside>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="survey"
        data-kind="glossary"
        data-title="Survey"
        hidden=""
      >
        <article id="article-survey" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              A Survey is a structured field record — typically a species or habitat survey —
              collected in a field application such as Fulcrum or Survey123 and synced into Beacon.
              Surveys supply the dated evidence behind clearances and compliance countdowns.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              A survey record does not affect compliance until it passes quality-control review.
              Pending records are excluded from clearance and evidence calculations by default.
            </p>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="site-clearance"
        data-kind="glossary"
        data-title="Site Clearance"
        hidden=""
      >
        <article id="article-site-clearance" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              Site Clearance is the determination of whether a specific site is clear to disturb
              ground on a given day. Beacon detects potential blocks — a lapsed nesting survey, an
              open wildlife buffer — and marks the site provisionally blocked until a qualified
              reviewer records a decision.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              Detections are advisory; reviews are authoritative. A site is clear only when no
              unresolved block remains and the governing reviews permit disturbance.
            </p>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="monitoring-portal"
        data-kind="glossary"
        data-title="Monitoring Portal"
        hidden=""
      >
        <article id="article-monitoring-portal" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              The Monitoring Portal is the area of Beacon that reports commitment-level compliance
              against field activity. It identifies commitments that are out of compliance and the
              observations driving each result, matched by species and condition.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              The portal reads the same observation and survey records captured elsewhere in
              Monitoring; it holds no separate data of its own.
            </p>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="qc-field-surveys"
        data-kind="howto"
        data-title="Reviewing field surveys before they count"
        hidden=""
      >
        <article id="article-qc-field-surveys" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              Survey records flow in from field collection tools such as Fulcrum and Survey123.
              Before a record affects compliance — clearances, countdowns, evidence — it passes a
              quality-control review.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step typography-body-md">
                New records arrive with a pending-QC status in the Surveys grid.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                A reviewer checks species identification, coordinates, and required fields, then
                approves or returns the record.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Views default to QC-approved records; toggle the filter to see pending ones.
              </li>
            </ol>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-survey"
                  >Survey</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-an-observation"
                  >Observation</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-a-dmr"
                  >Daily Monitoring Report</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="site-clearance-go-no-go"
        data-kind="howto"
        data-title="Using Site Clearance go/no-go"
        hidden=""
      >
        <article id="article-site-clearance-go-no-go" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              Site Clearance answers one question per site: is it clear to disturb ground today? The
              system detects potential blocks — a lapsed nesting survey, an open wildlife buffer —
              and marks the site provisionally blocked until a qualified reviewer decides.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step typography-body-md">
                Green sites are clear; amber sites carry a provisional block awaiting review; red
                sites are blocked by a recorded decision.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Open a site to see each discipline’s reviews, the detections behind them, and the
                required outcome.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Reviews overrule detections: the system detects, a reviewer decides.
              </li>
            </ol>
            <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
              <span class="bcn-help-article__callout-icon"
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
                      d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                    ></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path></svg></span
              ></span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Tip</span>
                <p class="bcn-help-article__callout-text typography-body-md">
                  The map and the review list present the same data in two views.
                </p>
              </div>
            </aside>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-site-clearance"
                  >Site Clearance</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-an-observation"
                  >Observation</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-reading-critical-now"
                  >How the dashboard decides what needs attention</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="what-is-evidence"
        data-kind="glossary"
        data-title="Evidence of Compliance"
        hidden=""
      >
        <article id="article-what-is-evidence" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              Evidence of Compliance is the terminal output of the compliance flow: the report,
              photograph, receipt, signed form, or monitoring record that proves an obligation was
              satisfied. It is the material presented to a regulatory agency during an audit.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              Evidence attaches to action implementations and may also link to checklist items that
              satisfy specific requirements per component. Field-sourced evidence can derive
              directly from Daily Monitoring Reports.
            </p>
            <aside class="bcn-help-article__callout bcn-help-article__callout--note">
              <span class="bcn-help-article__callout-icon"
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path></svg></span
              ></span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Note</span>
                <p class="bcn-help-article__callout-text typography-body-md">
                  Every evidence record retains its files, metadata, and timestamps — an auditable
                  trail from source document to proof.
                </p>
              </div>
            </aside>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="assembling-compliance-report"
        data-kind="howto"
        data-title="Assembling a compliance report"
        hidden=""
      >
        <article id="article-assembling-compliance-report" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              A compliance report presents the evidence behind a set of obligations in the format an
              agency expects. Reports are assembled from existing Evidence of Compliance records;
              they create no new evidence.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step typography-body-md">
                Open Reporting and choose the report template that matches the agency’s required
                format.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Select the scope — project, component, or work area — and the reporting period.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Beacon gathers the evidence records in scope; review the set and exclude any records
                that do not apply.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Generate the package. The output lists each obligation, its status, and the linked
                evidence.
              </li>
            </ol>
            <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
              <span class="bcn-help-article__callout-icon"
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
                      d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                    ></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path></svg></span
              ></span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Tip</span>
                <p class="bcn-help-article__callout-text typography-body-md">
                  A report reflects the evidence present at generation time. Regenerate after new
                  evidence is attached to capture the current state.
                </p>
              </div>
            </aside>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-evidence"
                  >Evidence of Compliance</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-actions-vs-implementations"
                  >Implementation</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="what-is-a-source"
        data-kind="glossary"
        data-title="Source Document"
        hidden=""
      >
        <article id="article-what-is-a-source" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              A Source Document is a regulatory record attached to a project: a permit, an
              environmental impact report, an incidental take permit, a contract, or an agency
              agreement. Every obligation in Beacon originates from a source document.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              A project may carry dozens of source documents from multiple agencies, and a single
              source may contain anywhere from a few to several hundred discrete obligations.
              Uploading the original file makes its text available for search and assisted
              commitment extraction.
            </p>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="what-is-a-commitment"
        data-kind="glossary"
        data-title="Commitment"
        hidden=""
      >
        <article id="article-what-is-a-commitment" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              A Commitment is a single obligation a project must satisfy, captured in the regulatory
              language of its source document. Each commitment carries structured attributes — type,
              resource category, phase, species, and season — that support filtering and planning.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              The same real-world obligation frequently appears across multiple documents. Each
              appearance is retained as a separate commitment; the overlap is resolved downstream,
              when requirements are consolidated into actions.
            </p>
            <aside class="bcn-help-article__callout bcn-help-article__callout--note">
              <span class="bcn-help-article__callout-icon"
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path></svg></span
              ></span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Note</span>
                <p class="bcn-help-article__callout-text typography-body-md">
                  When an agency amends a document, its commitments are revised rather than
                  replaced. The original and updated language coexist with explicit lineage.
                </p>
              </div>
            </aside>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="what-is-a-requirement"
        data-kind="glossary"
        data-title="Requirement"
        hidden=""
      >
        <article id="article-what-is-a-requirement" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              A Requirement is one discrete unit of work contained within a commitment. A commitment
              stating “prior to grading, conduct protocol-level surveys for burrowing owl and submit
              results within 30 days” resolves to two requirements: conduct the survey, and submit
              the results.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              Each requirement carries its own type, scope, and frequency. The requirement is the
              unit consolidated into trackable actions.
            </p>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="what-is-an-action"
        data-kind="glossary"
        data-title="Action"
        hidden=""
      >
        <article id="article-what-is-an-action" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              An Action is a planned unit of compliance work. It consolidates requirements — often
              drawn from many commitments — that describe the same underlying task. A requirement to
              submit the stormwater plan appearing across 44 commitments resolves to one action.
            </p>
            <figure class="bcn-help-article__figure">
              <div class="bcn-help-article__figure-frame">
                <span class="bcn-help-article__figure-icon"
                  ><span class="esa-icon esa-icon--lg" aria-hidden="true"
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
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <circle cx="9" cy="9" r="2"></circle>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></span></span
                ><span class="bcn-help-article__figure-label">From documents to work</span>
              </div>
              <figcaption class="bcn-help-article__caption typography-meta">
                Thousands of requirements across dozens of documents collapse into a few hundred
                actions — the minimum set of real work.
              </figcaption>
            </figure>
            <p class="bcn-help-article__p typography-body-md">
              Each action defines the work, the expected evidence, the schedule, and the responsible
              party. Actions begin as drafts and must be published before they generate trackable
              implementations.
            </p>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="tracing-lineage"
        data-kind="howto"
        data-title="Tracing a requirement back to its source"
        hidden=""
      >
        <article id="article-tracing-lineage" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              Every requirement keeps its full ancestry: the commitment it came from, and the source
              document that commitment was extracted from. This is how a requirement is traced to
              the exact regulatory language behind it.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step typography-body-md">
                Open the requirement. The lineage strip at the top shows Source → Commitment →
                Requirement.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Click the commitment to read the obligation in the document’s original words.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Click the source to see the document’s details, agency, and attached file — with the
                cited passage highlighted.
              </li>
            </ol>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-a-requirement"
                  >Requirement</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-a-source"
                  >Source Document</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="feature-flag"
        data-kind="glossary"
        data-title="Feature Flag"
        hidden=""
      >
        <article id="article-feature-flag" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              A Feature Flag is a configuration switch that turns a Beacon capability on or off for
              a tenant. Flags allow a feature to be released to specific tenants independently,
              without a code change.
            </p>
            <p class="bcn-help-article__p typography-body-md">
              Feature flags are administered in tenant settings. A disabled flag hides its feature
              from navigation and removes its surfaces from every project the tenant owns.
            </p>
          </div>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="managing-tenant-settings"
        data-kind="howto"
        data-title="Managing tenant settings"
        hidden=""
      >
        <article id="article-managing-tenant-settings" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              Tenant settings control behavior shared across every project a tenant owns: display
              labels for core entities, default notification rules, enabled features, and the user
              roster. Changes apply tenant-wide.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step typography-body-md">
                Open Settings and select the tenant settings section (available to tenant
                administrators).
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Adjust display labels, defaults, or enabled features; each change is scoped to the
                current tenant only.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Save. Tenant-wide changes take effect on the next page load for every user in the
                tenant.
              </li>
            </ol>
            <aside class="bcn-help-article__callout bcn-help-article__callout--note">
              <span class="bcn-help-article__callout-icon"
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path></svg></span
              ></span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Note</span>
                <p class="bcn-help-article__callout-text typography-body-md">
                  Entity label overrides — for example, renaming Actions to match an agency’s
                  vocabulary — apply to navigation, headings, and search across the tenant.
                </p>
              </div>
            </aside>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-tenant"
                  >Tenant</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-feature-flag"
                  >Feature Flag</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-managing-users-roles"
                  >Managing users and roles</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="managing-users-roles"
        data-kind="howto"
        data-title="Managing users and roles"
        hidden=""
      >
        <article id="article-managing-users-roles" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              Access in Beacon is governed by role. A role determines which zones a user can view
              and which records a user can create, edit, or approve. Users are added at the tenant
              level and assigned one or more roles.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step typography-body-md">
                Open Settings and select Users.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Invite a user by email, or select an existing user to change their assignment.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Assign roles — for example, viewer, contributor, or reviewer — and save.
              </li>
            </ol>
            <aside class="bcn-help-article__callout bcn-help-article__callout--note">
              <span class="bcn-help-article__callout-icon"
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path></svg></span
              ></span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Note</span>
                <p class="bcn-help-article__callout-text typography-body-md">
                  Approval actions, such as clearing a survey through quality control, require a
                  role with review authority. A contributor role cannot approve its own records.
                </p>
              </div>
            </aside>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-managing-tenant-settings"
                  >Managing tenant settings</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-qc-field-surveys"
                  >Reviewing field surveys before they count</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="configuring-notifications"
        data-kind="howto"
        data-title="Configuring notifications"
        hidden=""
      >
        <article id="article-configuring-notifications" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p typography-body-md">
              Notifications alert users to compliance events — an approaching deadline, a new
              provisional block, a returned survey. Defaults are set at the tenant level; each user
              may adjust their own delivery preferences within those defaults.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step typography-body-md">
                Open Settings and select Notifications to review the tenant’s default rules.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Enable or disable notifications by event type, and set the delivery channel for
                each.
              </li>
              <li class="bcn-help-article__step typography-body-md">
                Individual users adjust their personal preferences from the same section; tenant
                defaults apply where a user has made no choice.
              </li>
            </ol>
            <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
              <span class="bcn-help-article__callout-icon"
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
                      d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                    ></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path></svg></span
              ></span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Tip</span>
                <p class="bcn-help-article__callout-text typography-body-md">
                  Scope notifications to the components a user has starred to keep alerts limited to
                  their own work.
                </p>
              </div>
            </aside>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-managing-tenant-settings"
                  >Managing tenant settings</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-starring-components"
                  >Starring components on your dashboard</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
    </div></esa-side-dialog
  >
  <script
    type="module"
    src="/beacon-design/_astro/BcnGuidanceDrawer.astro_astro_type_script_index_0_lang.Bw3BjR8_.js"
  ></script>
  <!-- The global evidence workspace — the bar's third affordance. App-shell
         furniture by design: it opens from ANY page, rises from the bottom, and
         layers above dialogs (see BcnBottomDrawer for the stack). Same root
         placement as the drawers above, for the same reason. -->
  <script type="module">
    document.addEventListener(
      `click`,
      (e) => {
        let t = e.target.closest?.(`[data-esa-pill-remove]`);
        if (!t) return;
        e.stopPropagation();
        let n = t.closest(`.esa-pill`);
        n && (n.dispatchEvent(new CustomEvent(`removed`, { bubbles: !0 })), n.remove());
      },
      !0,
    );
  </script>
  <script type="module">
    document.addEventListener(`click`, (e) => {
      let t = e.target.closest?.(`[data-esa-alert-dismiss]`);
      if (!t) return;
      let n = t.closest(`.esa-alert-box`);
      if (!n) return;
      let r = Array.from(document.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
          (e) => !n.contains(e) && e.offsetParent !== null,
        ),
        i =
          r.find((e) => n.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING) ??
          r[r.length - 1];
      ((n.style.display = `none`),
        n.dispatchEvent(new CustomEvent(`dismissed`, { bubbles: !0 })),
        i?.focus());
    });
  </script>
  <bcn-bottom-drawer id="bcn-evidence-drawer" class="bcn-bottom-drawer"
    ><div class="bcn-bottom-drawer__backdrop" data-drawer-backdrop=""></div>
    <div
      class="bcn-bottom-drawer__panel"
      data-drawer-panel=""
      role="dialog"
      aria-modal="true"
      aria-label="Add Evidence of Compliance"
      tabindex="-1"
    >
      <header class="bcn-bottom-drawer__head">
        <div class="bcn-bottom-drawer__headslot">
          <div class="bcn-ev__head"><h2 class="bcn-ev__title">Add Evidence of Compliance</h2></div>
        </div>
        <span class="bcn-bottom-drawer__close" data-drawer-close=""
          ><span
            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--md esa-button--icon-only"
            ><button
              class="esa-button__native typography-microcopy-md"
              type="button"
              aria-label="Close"
              title="Close"
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
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path></svg
              ></span></button></span
        ></span>
      </header>
      <div class="bcn-bottom-drawer__body">
        <div class="bcn-ev__panels">
          <div class="bcn-ev__pane bcn-ev__pane--left">
            <section class="bcn-ev-staging" aria-labelledby="bcn-ev-staging-title">
              <header class="bcn-ev-staging__head">
                <h3 class="bcn-ev-staging__title" id="bcn-ev-staging-title">
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
                        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                      ></path></svg></span
                  >Evidence
                </h3>
              </header>
              <!-- Two tabs: intake, then the list you drag from. The controller sets the labels and
       keeps a count badge on the list tab, so uploading on tab 1 has visible consequences
       even though it leaves you where you are. -->
              <div class="bcn-ev-staging__tabs">
                <esa-tab-layout
                  data-staging-tabs="true"
                  appearance="underline"
                  size="sm"
                  variant="underline"
                ></esa-tab-layout>
              </div>
              <!-- ── Tab 1 · Upload ────────────────────────────────────────────────────── -->
              <div
                class="bcn-ev-staging__panel bcn-ev-staging__panel--upload"
                data-staging-panel="upload"
              >
                <!-- The zone owns the WHOLE tab while it is the only thing to do here, and yields the
         moment there is a draft to show. No standing caption underneath: an empty tab whose
         one affordance fills it does not need to be told what it is for. -->
                <div class="bcn-ev-staging__drop" data-upload-zone="">
                  <esa-file-upload
                    label="Drop files here, or browse"
                    multiple="true"
                    max-size-mb="50"
                    data-staging-dropzone="true"
                    name="files"
                    data-bcn-chrome-trimmed="true"
                  ></esa-file-upload>
                </div>
                <!-- ── The draft ──────────────────────────────────────────────────────────
         One card, however many files land in it — this IS the "several files, one piece of
         evidence" model, made by the act of dropping rather than explained in copy. Always
         expanded: a draft you are still assembling has nothing worth hiding, so it carries
         no disclosure toggle at all. -->
                <div class="bcn-ev-staging__draft" data-draft="" hidden="">
                  <div class="esa-card esa-card--outlined">
                    <div class="esa-card__body typography-body-md">
                      <div class="bcn-ev-draft">
                        <div class="bcn-ev-draft__titlerow">
                          <h4 class="bcn-ev-draft__title" data-draft-title=""></h4>
                          <!-- Reuses bcn-ev-card__count, the staged cards' class, rather than a draft-only
                 copy: the border-only pill is already defined once there, and a second
                 definition is how the two would drift. --><span
                            class="bcn-ev-card__count"
                            data-draft-count=""
                            ><span
                              class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                              ><span class="esa-pill__label"></span></span></span
                          ><!-- A draft is unsaved BY DEFINITION — it exists only until Save commits it — so
                 this is static rather than toggled. Same glyph, wording and pink as the
                 drawer footer's marker: one condition, stated the same way wherever it
                 appears. --><span class="bcn-ev-draft__unsaved"
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
                                  d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                                ></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path></svg></span
                            >Unsaved</span
                          >
                        </div>
                        <p class="bcn-ev-draft__notes" data-draft-notes=""></p>
                        <div class="bcn-ev-draft__filesrow">
                          <p class="bcn-ev-draft__fileslabel">Files</p>
                          <ul class="bcn-ev-draft__files" data-draft-files=""></ul>
                        </div>
                        <!-- Windows order — primary left of Cancel inside a right-aligned group, the same
               arrangement the drawer footer uses. -->
                        <footer class="bcn-ev-draft__foot">
                          <span data-draft-add=""
                            ><span
                              class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                              >
                                <span class="esa-button__label">Save</span>
                              </button></span
                            ></span
                          ><span data-draft-cancel=""
                            ><span
                              class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                              >
                                <span class="esa-button__label">Cancel</span>
                              </button></span
                            ></span
                          >
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- One file pill, for filling in a NEW_SLOTS card at runtime. Cloned, never
         hand-written, so runtime-built markup still comes from the legos. --><template
                  data-file-pill=""
                  ><li data-astro-cid-qzg7vnux="">
                    <span
                      class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                      data-astro-cid-xtwxlazl=""
                      ><span class="esa-pill__label" data-astro-cid-xtwxlazl=""></span
                    ></span></li></template
                ><!-- One draft file row, same bridge: <template> + clone, because Astro legos are
         compile-time and cannot be constructed from JS. --><template data-draft-file-row=""
                  ><li class="bcn-ev-draft__file" data-astro-cid-qzg7vnux="">
                    <span class="bcn-ev-draft__filename" data-astro-cid-qzg7vnux=""></span
                    ><span class="bcn-ev-draft__filesize" data-astro-cid-qzg7vnux=""></span
                    ><span class="bcn-ev-draft__fileremove" data-astro-cid-qzg7vnux=""
                      ><span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        data-astro-cid-5nhxdd72=""
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Remove this file from the evidence"
                          title="Remove this file from the evidence"
                          data-astro-cid-qzg7vnux="true"
                          data-astro-cid-5nhxdd72=""
                        >
                          <span
                            class="esa-icon esa-icon--sm"
                            aria-hidden="true"
                            data-astro-cid-wcwfib5m=""
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
                              data-astro-cid-wcwfib5m=""
                            >
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button></span
                    ></span></li
                ></template>
              </div>
              <!-- ── Tab 2 · The list — the one drag source ────────────────────────────── -->
              <div
                class="bcn-ev-staging__panel bcn-ev-staging__panel--list"
                data-staging-panel="list"
                hidden=""
              >
                <div class="bcn-ev-staging__search">
                  <div class="bcn-ev-search">
                    <span class="bcn-ev-search__icon" aria-hidden="true"
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
                    ><esa-combobox
                      data-staging-existing="true"
                      mode="autocomplete"
                      size="md"
                      aria-label="Search evidence already in Beacon"
                      placeholder="Search evidence already in Beacon"
                    ></esa-combobox>
                  </div>
                </div>
                <div class="bcn-ev-staging__scroll">
                  <!-- Pre-rendered pool; the script reveals the staged ones. Each card is a DRAG
           SOURCE — grabbed by its grip, exactly as the Setup Wizard's requirement rows
           are. `draggable` is set by the controller, not here, so a card whose evidence
           is already on every action in view can have it withdrawn. -->
                  <ul class="bcn-ev-staging__list" data-staging-list="">
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-staged-swha"
                      data-origin="upload"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-staged-swha"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle></svg></span
                            ></span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-staged-swha"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Swainson’s hawk nest survey — Jul 14</a
                                >
                              </p>
                              <span class="bcn-ev-card__count"
                                ><span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label">3 files</span></span
                                ></span
                              ><esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                                ><span class="bcn-countchip__stack"
                                  ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                        <path d="M4 6h.01"></path>
                                        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                        <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                                  ><span class="bcn-countchip__num" aria-hidden="true"
                                    ><span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    ></span
                                  ><span class="bcn-countchip__sr">On 0 actions</span></span
                                ></esa-tooltip
                              ><span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-staged-swha"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Swainson’s hawk nest survey — Jul 14"
                                    title="Remove Swainson’s hawk nest survey — Jul 14"
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
                                    ></span></button></span
                              ></span>
                            </div>
                            <span class="bcn-ev-card__toggle"
                              ><button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Swainson’s hawk nest survey — Jul 14"
                                data-evidence-toggle="ev-staged-swha"
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
                                    <path d="m6 9 6 6 6-6"></path></svg
                                ></span></button></span
                            ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              Two active nests recorded along the northern levee; surveyed by C.
                              Anderson.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label"
                                      >SWHA-nest-survey-2026-07-14.pdf</span
                                    ></span
                                  >
                                </li>
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label"
                                      >SWHA-nest-locations-2026-07-14.kmz</span
                                    ></span
                                  >
                                </li>
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label"
                                      >SWHA-survey-photos-2026-07-14.zip</span
                                    ></span
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-staged-training"
                      data-origin="upload"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-staged-training"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle></svg></span
                            ></span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-staged-training"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Worker training roster — Jul 16</a
                                >
                              </p>
                              <span class="bcn-ev-card__count"
                                ><span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label">1 file</span></span
                                ></span
                              ><esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                                ><span class="bcn-countchip__stack"
                                  ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                        <path d="M4 6h.01"></path>
                                        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                        <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                                  ><span class="bcn-countchip__num" aria-hidden="true"
                                    ><span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    ></span
                                  ><span class="bcn-countchip__sr">On 0 actions</span></span
                                ></esa-tooltip
                              ><span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-staged-training"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Worker training roster — Jul 16"
                                    title="Remove Worker training roster — Jul 16"
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
                                    ></span></button></span
                              ></span>
                            </div>
                            <span class="bcn-ev-card__toggle"
                              ><button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Worker training roster — Jul 16"
                                data-evidence-toggle="ev-staged-training"
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
                                    <path d="m6 9 6 6 6-6"></path></svg
                                ></span></button></span
                            ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              34 crew signatures against the Q3 awareness curriculum.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label"
                                      >WEAP-training-roster-2026-07-16.pdf</span
                                    ></span
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-ggs-survey"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-ggs-survey"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle></svg></span
                            ></span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-ggs-survey"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Giant garter snake preconstruction survey — Jun 29</a
                                >
                              </p>
                              <span class="bcn-ev-card__count"
                                ><span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label">1 file</span></span
                                ></span
                              ><esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                                ><span class="bcn-countchip__stack"
                                  ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                        <path d="M4 6h.01"></path>
                                        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                        <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                                  ><span class="bcn-countchip__num" aria-hidden="true"
                                    ><span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    ></span
                                  ><span class="bcn-countchip__sr">On 0 actions</span></span
                                ></esa-tooltip
                              ><span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-ggs-survey"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Giant garter snake preconstruction survey — Jun 29"
                                    title="Remove Giant garter snake preconstruction survey — Jun 29"
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
                                    ></span></button></span
                              ></span>
                            </div>
                            <span class="bcn-ev-card__toggle"
                              ><button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Giant garter snake preconstruction survey — Jun 29"
                                data-evidence-toggle="ev-exist-ggs-survey"
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
                                    <path d="m6 9 6 6 6-6"></path></svg
                                ></span></button></span
                            ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              No individuals observed; upland refugia mapped along the north levee
                              toe.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label"
                                      >GGS-preconstruction-survey-2026-06-29.pdf</span
                                    ></span
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-biologist-quals"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-biologist-quals"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle></svg></span
                            ></span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-biologist-quals"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Qualified biologist statements of qualification</a
                                >
                              </p>
                              <span class="bcn-ev-card__count"
                                ><span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label">4 files</span></span
                                ></span
                              ><esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                                ><span class="bcn-countchip__stack"
                                  ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                        <path d="M4 6h.01"></path>
                                        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                        <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                                  ><span class="bcn-countchip__num" aria-hidden="true"
                                    ><span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    ></span
                                  ><span class="bcn-countchip__sr">On 0 actions</span></span
                                ></esa-tooltip
                              ><span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-biologist-quals"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Qualified biologist statements of qualification"
                                    title="Remove Qualified biologist statements of qualification"
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
                                    ></span></button></span
                              ></span>
                            </div>
                            <span class="bcn-ev-card__toggle"
                              ><button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Qualified biologist statements of qualification"
                                data-evidence-toggle="ev-exist-biologist-quals"
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
                                    <path d="m6 9 6 6 6-6"></path></svg
                                ></span></button></span
                            ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              Four approved biologists covering avian, herpetological and botanical
                              scopes.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label">SOQ-C-Anderson.pdf</span></span
                                  >
                                </li>
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label">SOQ-M-Okafor.pdf</span></span
                                  >
                                </li>
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label">SOQ-R-Delgado.pdf</span></span
                                  >
                                </li>
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label">SOQ-J-Whitfield.pdf</span></span
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-noise-readings"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-noise-readings"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle></svg></span
                            ></span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-noise-readings"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Noise level readings — week of Jul 6</a
                                >
                              </p>
                              <span class="bcn-ev-card__count"
                                ><span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label">1 file</span></span
                                ></span
                              ><esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                                ><span class="bcn-countchip__stack"
                                  ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                        <path d="M4 6h.01"></path>
                                        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                        <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                                  ><span class="bcn-countchip__num" aria-hidden="true"
                                    ><span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    ></span
                                  ><span class="bcn-countchip__sr">On 0 actions</span></span
                                ></esa-tooltip
                              ><span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-noise-readings"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Noise level readings — week of Jul 6"
                                    title="Remove Noise level readings — week of Jul 6"
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
                                    ></span></button></span
                              ></span>
                            </div>
                            <span class="bcn-ev-card__toggle"
                              ><button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Noise level readings — week of Jul 6"
                                data-evidence-toggle="ev-exist-noise-readings"
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
                                    <path d="m6 9 6 6 6-6"></path></svg
                                ></span></button></span
                            ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              Five sensitive receptors, all below the 75 dBA construction threshold.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label"
                                      >noise-readings-2026-07-06.xlsx</span
                                    ></span
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-swppp-inspection"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-swppp-inspection"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle></svg></span
                            ></span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-swppp-inspection"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >SWPPP inspection report — Jul 9</a
                                >
                              </p>
                              <span class="bcn-ev-card__count"
                                ><span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label">1 file</span></span
                                ></span
                              ><esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                                ><span class="bcn-countchip__stack"
                                  ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                        <path d="M4 6h.01"></path>
                                        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                        <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                                  ><span class="bcn-countchip__num" aria-hidden="true"
                                    ><span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    ></span
                                  ><span class="bcn-countchip__sr">On 0 actions</span></span
                                ></esa-tooltip
                              ><span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-swppp-inspection"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove SWPPP inspection report — Jul 9"
                                    title="Remove SWPPP inspection report — Jul 9"
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
                                    ></span></button></span
                              ></span>
                            </div>
                            <span class="bcn-ev-card__toggle"
                              ><button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand SWPPP inspection report — Jul 9"
                                data-evidence-toggle="ev-exist-swppp-inspection"
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
                                    <path d="m6 9 6 6 6-6"></path></svg
                                ></span></button></span
                            ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              Two corrective actions logged at the southern stockpile; both closed
                              Jul 11.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label"
                                      >SWPPP-inspection-2026-07-09.pdf</span
                                    ></span
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-dust-log"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-dust-log"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle></svg></span
                            ></span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-dust-log"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Dust control log — Jul 2026</a
                                >
                              </p>
                              <span class="bcn-ev-card__count"
                                ><span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label">1 file</span></span
                                ></span
                              ><esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                                ><span class="bcn-countchip__stack"
                                  ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                        <path d="M4 6h.01"></path>
                                        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                        <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                                  ><span class="bcn-countchip__num" aria-hidden="true"
                                    ><span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    ></span
                                  ><span class="bcn-countchip__sr">On 0 actions</span></span
                                ></esa-tooltip
                              ><span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-dust-log"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Dust control log — Jul 2026"
                                    title="Remove Dust control log — Jul 2026"
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
                                    ></span></button></span
                              ></span>
                            </div>
                            <span class="bcn-ev-card__toggle"
                              ><button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Dust control log — Jul 2026"
                                data-evidence-toggle="ev-exist-dust-log"
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
                                    <path d="m6 9 6 6 6-6"></path></svg
                                ></span></button></span
                            ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              Daily watering passes and wind-speed shutdowns for the month to date.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label"
                                      >dust-control-log-2026-07.pdf</span
                                    ></span
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-haul-agreement"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-haul-agreement"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle></svg></span
                            ></span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-haul-agreement"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Executed haul route maintenance agreement</a
                                >
                              </p>
                              <span class="bcn-ev-card__count"
                                ><span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label">1 file</span></span
                                ></span
                              ><esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                                ><span class="bcn-countchip__stack"
                                  ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                        <path d="M4 6h.01"></path>
                                        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                        <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                                  ><span class="bcn-countchip__num" aria-hidden="true"
                                    ><span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    ></span
                                  ><span class="bcn-countchip__sr">On 0 actions</span></span
                                ></esa-tooltip
                              ><span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-haul-agreement"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Executed haul route maintenance agreement"
                                    title="Remove Executed haul route maintenance agreement"
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
                                    ></span></button></span
                              ></span>
                            </div>
                            <span class="bcn-ev-card__toggle"
                              ><button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Executed haul route maintenance agreement"
                                data-evidence-toggle="ev-exist-haul-agreement"
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
                                    <path d="m6 9 6 6 6-6"></path></svg
                                ></span></button></span
                            ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              Countersigned by the county public works director.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label"
                                      >haul-route-agreement-executed.pdf</span
                                    ></span
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-cultural-brief"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-cultural-brief"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle></svg></span
                            ></span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-cultural-brief"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Cultural resources monitoring brief — Jul 8</a
                                >
                              </p>
                              <span class="bcn-ev-card__count"
                                ><span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label">1 file</span></span
                                ></span
                              ><esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                                ><span class="bcn-countchip__stack"
                                  ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                        <path d="M4 6h.01"></path>
                                        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                        <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                                  ><span class="bcn-countchip__num" aria-hidden="true"
                                    ><span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    ></span
                                  ><span class="bcn-countchip__sr">On 0 actions</span></span
                                ></esa-tooltip
                              ><span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-cultural-brief"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Cultural resources monitoring brief — Jul 8"
                                    title="Remove Cultural resources monitoring brief — Jul 8"
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
                                    ></span></button></span
                              ></span>
                            </div>
                            <span class="bcn-ev-card__toggle"
                              ><button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Cultural resources monitoring brief — Jul 8"
                                data-evidence-toggle="ev-exist-cultural-brief"
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
                                    <path d="m6 9 6 6 6-6"></path></svg
                                ></span></button></span
                            ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              No cultural material encountered during the utility trench excavation.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label"
                                      >cultural-monitoring-brief-2026-07-08.pdf</span
                                    ></span
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-exist-nesting-bird-sweep"
                      data-origin="existing"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-exist-nesting-bird-sweep"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle></svg></span
                            ></span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-exist-nesting-bird-sweep"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >Nesting bird sweep — Jun 22</a
                                >
                              </p>
                              <span class="bcn-ev-card__count"
                                ><span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label">2 files</span></span
                                ></span
                              ><esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                                ><span class="bcn-countchip__stack"
                                  ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                        <path d="M4 6h.01"></path>
                                        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                        <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                                  ><span class="bcn-countchip__num" aria-hidden="true"
                                    ><span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    ></span
                                  ><span class="bcn-countchip__sr">On 0 actions</span></span
                                ></esa-tooltip
                              ><span
                                class="bcn-ev-card__remove"
                                data-staging-remove="ev-exist-nesting-bird-sweep"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Nesting bird sweep — Jun 22"
                                    title="Remove Nesting bird sweep — Jun 22"
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
                                    ></span></button></span
                              ></span>
                            </div>
                            <span class="bcn-ev-card__toggle"
                              ><button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand Nesting bird sweep — Jun 22"
                                data-evidence-toggle="ev-exist-nesting-bird-sweep"
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
                                    <path d="m6 9 6 6 6-6"></path></svg
                                ></span></button></span
                            ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc">
                              Two mourning dove nests flagged with 50-ft buffers; released Jul 6.
                            </p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files">
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label"
                                      >nesting-bird-sweep-2026-06-22.pdf</span
                                    ></span
                                  >
                                </li>
                                <li>
                                  <span
                                    class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                    ><span class="esa-pill__label"
                                      >nest-buffer-map-2026-06-22.pdf</span
                                    ></span
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-new-1"
                      data-origin="upload"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-new-1"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle></svg></span
                            ></span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-new-1"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                ></a>
                              </p>
                              <span class="bcn-ev-card__count"
                                ><span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label">0 files</span></span
                                ></span
                              ><esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                                ><span class="bcn-countchip__stack"
                                  ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                        <path d="M4 6h.01"></path>
                                        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                        <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                                  ><span class="bcn-countchip__num" aria-hidden="true"
                                    ><span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    ></span
                                  ><span class="bcn-countchip__sr">On 0 actions</span></span
                                ></esa-tooltip
                              ><span class="bcn-ev-card__remove" data-staging-remove="ev-new-1"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove "
                                    title="Remove "
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
                                    ></span></button></span
                              ></span>
                            </div>
                            <span class="bcn-ev-card__toggle"
                              ><button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand "
                                data-evidence-toggle="ev-new-1"
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
                                    <path d="m6 9 6 6 6-6"></path></svg
                                ></span></button></span
                            ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc"></p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files"></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-new-2"
                      data-origin="upload"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-new-2"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle></svg></span
                            ></span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-new-2"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                ></a>
                              </p>
                              <span class="bcn-ev-card__count"
                                ><span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label">0 files</span></span
                                ></span
                              ><esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                                ><span class="bcn-countchip__stack"
                                  ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                        <path d="M4 6h.01"></path>
                                        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                        <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                                  ><span class="bcn-countchip__num" aria-hidden="true"
                                    ><span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    ></span
                                  ><span class="bcn-countchip__sr">On 0 actions</span></span
                                ></esa-tooltip
                              ><span class="bcn-ev-card__remove" data-staging-remove="ev-new-2"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove "
                                    title="Remove "
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
                                    ></span></button></span
                              ></span>
                            </div>
                            <span class="bcn-ev-card__toggle"
                              ><button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand "
                                data-evidence-toggle="ev-new-2"
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
                                    <path d="m6 9 6 6 6-6"></path></svg
                                ></span></button></span
                            ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc"></p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files"></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-new-3"
                      data-origin="upload"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-new-3"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle></svg></span
                            ></span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-new-3"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                ></a>
                              </p>
                              <span class="bcn-ev-card__count"
                                ><span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label">0 files</span></span
                                ></span
                              ><esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                                ><span class="bcn-countchip__stack"
                                  ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                        <path d="M4 6h.01"></path>
                                        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                        <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                                  ><span class="bcn-countchip__num" aria-hidden="true"
                                    ><span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    ></span
                                  ><span class="bcn-countchip__sr">On 0 actions</span></span
                                ></esa-tooltip
                              ><span class="bcn-ev-card__remove" data-staging-remove="ev-new-3"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove "
                                    title="Remove "
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
                                    ></span></button></span
                              ></span>
                            </div>
                            <span class="bcn-ev-card__toggle"
                              ><button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand "
                                data-evidence-toggle="ev-new-3"
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
                                    <path d="m6 9 6 6 6-6"></path></svg
                                ></span></button></span
                            ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc"></p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files"></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="bcn-ev-staging__item"
                      data-staging-item="ev-new-4"
                      data-origin="upload"
                      hidden=""
                      data-collapsed=""
                    >
                      <div class="esa-card esa-card--outlined">
                        <div class="esa-card__body typography-body-md">
                          <div class="bcn-ev-card">
                            <span
                              class="bcn-ev-card__grip"
                              data-staging-grip="ev-new-4"
                              aria-hidden="true"
                              title="Drag onto an action"
                              draggable="true"
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
                                  <circle cx="9" cy="12" r="1"></circle>
                                  <circle cx="9" cy="5" r="1"></circle>
                                  <circle cx="9" cy="19" r="1"></circle>
                                  <circle cx="15" cy="12" r="1"></circle>
                                  <circle cx="15" cy="5" r="1"></circle>
                                  <circle cx="15" cy="19" r="1"></circle></svg></span
                            ></span>
                            <div class="bcn-ev-card__top">
                              <p class="bcn-ev-card__title">
                                <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                  class="bcn-ev-card__titlelink"
                                  href="/evidence-of-compliance/ev-new-4"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                ></a>
                              </p>
                              <span class="bcn-ev-card__count"
                                ><span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label">0 files</span></span
                                ></span
                              ><esa-tooltip
                                class="bcn-countchip"
                                text="On 0 actions"
                                position="below"
                                data-staging-attached=""
                                hidden=""
                                ><span class="bcn-countchip__stack"
                                  ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                        <path d="M4 6h.01"></path>
                                        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                        <path d="M12 18h.01"></path>
                                        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                        <circle cx="12" cy="12" r="2"></circle>
                                        <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                                  ><span class="bcn-countchip__num" aria-hidden="true"
                                    ><span
                                      class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                      >0</span
                                    ></span
                                  ><span class="bcn-countchip__sr">On 0 actions</span></span
                                ></esa-tooltip
                              ><span class="bcn-ev-card__remove" data-staging-remove="ev-new-4"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove "
                                    title="Remove "
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
                                    ></span></button></span
                              ></span>
                            </div>
                            <span class="bcn-ev-card__toggle"
                              ><button
                                type="button"
                                class="bcn-disclosure"
                                aria-expanded="false"
                                aria-label="Expand "
                                data-evidence-toggle="ev-new-4"
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
                                    <path d="m6 9 6 6 6-6"></path></svg
                                ></span></button></span
                            ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                            <p class="bcn-ev-card__desc"></p>
                            <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                            <div class="bcn-ev-card__filesrow">
                              <p class="bcn-ev-card__fileslabel">Files</p>
                              <ul class="bcn-ev-card__files"></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <!-- Nothing staged yet. -->
                  <div class="bcn-ev-staging__empty" data-staging-empty="">
                    <div class="esa-empty-state esa-empty-state--sm">
                      <h3 class="esa-empty-state__title typography-label-sm-strong">
                        Nothing added yet
                      </h3>
                      <p class="esa-empty-state__description typography-body-xs">
                        Search above for evidence already in Beacon, or upload a file on the Add New
                        tab.
                      </p>
                      <div class="esa-empty-state__actions typography-label-md"></div>
                    </div>
                  </div>
                </div>
                <!-- The match utility lives with the evidence it reads, not with the actions it
         proposes — and only on this tab, since it has nothing to read from the uploader. -->
                <footer class="bcn-ev-staging__foot">
                  <span class="bcn-ev-staging__find" data-targets-find=""
                    ><span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                      ><button class="esa-button__native typography-microcopy-xs" type="button">
                        <span class="esa-button__label">Find matches</span>
                      </button></span
                    ></span
                  >
                </footer>
              </div>
            </section>
          </div>
          <!-- The seam is a 1px grid track — the rule itself, nothing more. It costs the layout
         no width, so either column can run right up to the line. -->
          <div class="bcn-ev__joint" aria-hidden="true"></div>
          <div class="bcn-ev__pane bcn-ev__pane--right">
            <section class="bcn-ev-targets" aria-labelledby="bcn-ev-targets-title">
              <header class="bcn-ev-targets__head">
                <h3 class="bcn-ev-targets__title" id="bcn-ev-targets-title">
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
                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="m13.41 10.59 5.66-5.66"></path></svg></span
                  >Actions<span
                    class="bcn-ev-targets__count"
                    data-targets-count=""
                    aria-hidden="true"
                  ></span>
                </h3>
              </header>
              <!-- The three facets on a ruled row, NOT in a card: its bottom border is the same
       hairline the Evidence column's tab strip draws, at the same height, so the two
       columns share one line across the seam instead of each starting differently.
       The scope lives HERE, not in the drawer header: it governs this column and nothing
       else. Component and Phase are the dimensions the Setup Wizard's Actions step filters
       on; all three are guarded while associations are unsaved (see evidence-drawer.ts). -->
              <div class="bcn-ev-targets__filters">
                <span class="bcn-ev-targets__filter"
                  ><span class="bcn-ev-targets__flabel" id="bcn-ev-flabel-component">Component</span
                  ><esa-select
                    data-evidence-component="true"
                    size="sm"
                    searchable="true"
                    aria-labelledby="bcn-ev-flabel-component"
                  ></esa-select></span
                ><span class="bcn-ev-targets__filter"
                  ><span class="bcn-ev-targets__flabel" id="bcn-ev-flabel-phase">Phase</span
                  ><esa-select
                    data-targets-phase="true"
                    size="sm"
                    aria-labelledby="bcn-ev-flabel-phase"
                  ></esa-select></span
                ><span class="bcn-ev-targets__filter"
                  ><span class="bcn-ev-targets__flabel" id="bcn-ev-flabel-type">Type</span
                  ><esa-select
                    data-targets-type="true"
                    size="sm"
                    aria-labelledby="bcn-ev-flabel-type"
                  ></esa-select
                ></span>
              </div>
              <div class="bcn-ev-targets__search">
                <div class="bcn-ev-search">
                  <span class="bcn-ev-search__icon" aria-hidden="true"
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
                  ><esa-combobox
                    data-targets-search="true"
                    mode="autocomplete"
                    size="md"
                    aria-label="Search actions in this component"
                    placeholder="Search actions in this component"
                  ></esa-combobox>
                </div>
              </div>
              <div class="bcn-ev-targets__scroll">
                <!-- Working state for Find matches — replaced by rows the moment it resolves. -->
                <div class="bcn-ev-targets__working" data-targets-working="" hidden="">
                  <span class="esa-loading-spinner esa-loading-spinner--sm"
                    ><span
                      class="esa-loading-spinner__ring"
                      role="img"
                      aria-label="Loading"
                    ></span></span
                  ><span class="typography-body-sm"
                    >Reading the evidence and checking actions in this component…</span
                  >
                </div>
                <!-- Find matches must never finish silently. A utility that runs and then does nothing
         visible reads as broken, and the two ways it legitimately finds nothing — no
         evidence staged, and nothing new in scope — are different answers that deserve
         different sentences. -->
                <p
                  class="bcn-ev-targets__notice typography-body-sm"
                  data-targets-notice=""
                  hidden=""
                ></p>
                <!-- The one list: searched rows and suggested rows together. -->
                <ul class="bcn-ev-targets__list" data-targets-list="">
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-swha-preconstruction-survey"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Preconstruction Swainson’s hawk nest survey"
                                  data-card-toggle="act-swha-preconstruction-survey"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Preconstruction Swainson’s hawk nest survey</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">BIO-4.2</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Monitoring</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Pre-Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-swha-preconstruction-survey"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Preconstruction Swainson’s hawk nest survey"
                                    title="Remove Preconstruction Swainson’s hawk nest survey"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-swha-preconstruction-survey"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-swha-buffer-monitoring"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Swainson’s hawk active-nest buffer monitoring"
                                  data-card-toggle="act-swha-buffer-monitoring"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Swainson’s hawk active-nest buffer monitoring</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">BIO-4.5</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Monitoring</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-swha-buffer-monitoring"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Swainson’s hawk active-nest buffer monitoring"
                                    title="Remove Swainson’s hawk active-nest buffer monitoring"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-swha-buffer-monitoring"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-ggs-preconstruction-survey"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Giant garter snake preconstruction survey"
                                  data-card-toggle="act-ggs-preconstruction-survey"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Giant garter snake preconstruction survey</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">BIO-6.1</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Monitoring</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Pre-Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-ggs-preconstruction-survey"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Giant garter snake preconstruction survey"
                                    title="Remove Giant garter snake preconstruction survey"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-ggs-preconstruction-survey"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-qualified-biologist"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Retain qualified biologist for covered species"
                                  data-card-toggle="act-qualified-biologist"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Retain qualified biologist for covered species</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">BIO-1.1</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Tracking</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text"
                                      >Implementation Planning</span
                                    ></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-qualified-biologist"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Retain qualified biologist for covered species"
                                    title="Remove Retain qualified biologist for covered species"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-qualified-biologist"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-worker-training"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Worker environmental awareness training"
                                  data-card-toggle="act-worker-training"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Worker environmental awareness training</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">BIO-2.3</span
                                  ><esa-popover
                                    class="bcn-ev-row__morepop"
                                    position="bottom"
                                    trigger="hover"
                                    offset="6"
                                    appearance="default"
                                    ><span class="bcn-ev-row__more" aria-expanded="false"
                                      ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                                        >+ 2 more</span
                                      ></span
                                    >
                                    <div slot="content" class="bcn-ev-row__poplist">
                                      <p class="bcn-ev-row__poptitle typography-meta">
                                        Commitments
                                      </p>
                                      <ul>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">BIO-2.3</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">BIO-6.4</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">CUL-1.2</span>
                                        </li>
                                      </ul>
                                    </div></esa-popover
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Tracking</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Pre-Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-worker-training"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Worker environmental awareness training"
                                    title="Remove Worker environmental awareness training"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-worker-training"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-daily-biological-monitoring"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Daily biological monitoring during ground disturbance"
                                  data-card-toggle="act-daily-biological-monitoring"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Daily biological monitoring during ground disturbance</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">BIO-8.4</span
                                  ><esa-popover
                                    class="bcn-ev-row__morepop"
                                    position="bottom"
                                    trigger="hover"
                                    offset="6"
                                    appearance="default"
                                    ><span class="bcn-ev-row__more" aria-expanded="false"
                                      ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                                        >+ 3 more</span
                                      ></span
                                    >
                                    <div slot="content" class="bcn-ev-row__poplist">
                                      <p class="bcn-ev-row__poptitle typography-meta">
                                        Commitments
                                      </p>
                                      <ul>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">BIO-8.4</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">BIO-4.5</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">BIO-6.1</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">CUL-3.3</span>
                                        </li>
                                      </ul>
                                    </div></esa-popover
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Monitoring</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-daily-biological-monitoring"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Daily biological monitoring during ground disturbance"
                                    title="Remove Daily biological monitoring during ground disturbance"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-daily-biological-monitoring"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-monthly-compliance-report"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Monthly compliance monitoring report"
                                  data-card-toggle="act-monthly-compliance-report"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Monthly compliance monitoring report</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">REP-3.1</span
                                  ><esa-popover
                                    class="bcn-ev-row__morepop"
                                    position="bottom"
                                    trigger="hover"
                                    offset="6"
                                    appearance="default"
                                    ><span class="bcn-ev-row__more" aria-expanded="false"
                                      ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                                        >+ 3 more</span
                                      ></span
                                    >
                                    <div slot="content" class="bcn-ev-row__poplist">
                                      <p class="bcn-ev-row__poptitle typography-meta">
                                        Commitments
                                      </p>
                                      <ul>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">REP-3.1</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">REP-3.4</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">REP-5.1</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">ADM-2.2</span>
                                        </li>
                                      </ul>
                                    </div></esa-popover
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Reporting</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-monthly-compliance-report"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Monthly compliance monitoring report"
                                    title="Remove Monthly compliance monitoring report"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-monthly-compliance-report"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-noise-monitoring"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Construction noise level monitoring at sensitive receptors"
                                  data-card-toggle="act-noise-monitoring"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Construction noise level monitoring at sensitive receptors</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">NOI-2.2</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Monitoring</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-noise-monitoring"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Construction noise level monitoring at sensitive receptors"
                                    title="Remove Construction noise level monitoring at sensitive receptors"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-noise-monitoring"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-dust-control-inspection"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Fugitive dust control inspection"
                                  data-card-toggle="act-dust-control-inspection"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Fugitive dust control inspection</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">AIR-1.4</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Monitoring</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-dust-control-inspection"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Fugitive dust control inspection"
                                    title="Remove Fugitive dust control inspection"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-dust-control-inspection"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-swppp-inspection"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse SWPPP qualified-personnel site inspection"
                                  data-card-toggle="act-swppp-inspection"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >SWPPP qualified-personnel site inspection</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">WQ-5.2</span
                                  ><esa-popover
                                    class="bcn-ev-row__morepop"
                                    position="bottom"
                                    trigger="hover"
                                    offset="6"
                                    appearance="default"
                                    ><span class="bcn-ev-row__more" aria-expanded="false"
                                      ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                                        >+ 1 more</span
                                      ></span
                                    >
                                    <div slot="content" class="bcn-ev-row__poplist">
                                      <p class="bcn-ev-row__poptitle typography-meta">
                                        Commitments
                                      </p>
                                      <ul>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">WQ-5.2</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">WQ-5.5</span>
                                        </li>
                                      </ul>
                                    </div></esa-popover
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Monitoring</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-swppp-inspection"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove SWPPP qualified-personnel site inspection"
                                    title="Remove SWPPP qualified-personnel site inspection"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-swppp-inspection"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-cultural-monitoring"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Archaeological monitoring during excavation"
                                  data-card-toggle="act-cultural-monitoring"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Archaeological monitoring during excavation</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">CUL-3.3</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Monitoring</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-cultural-monitoring"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Archaeological monitoring during excavation"
                                    title="Remove Archaeological monitoring during excavation"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-cultural-monitoring"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-haul-route-agreement"
                    data-component="southern-forebay-pumping-plant"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Execute haul route maintenance agreement"
                                  data-card-toggle="act-haul-route-agreement"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Execute haul route maintenance agreement</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">TRA-2.1</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Tracking</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text"
                                      >Implementation Planning</span
                                    ></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-haul-route-agreement"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Execute haul route maintenance agreement"
                                    title="Remove Execute haul route maintenance agreement"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-haul-route-agreement"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-ib-fish-screen-inspection"
                    data-component="intake-b-north-delta"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Fish screen criteria compliance inspection"
                                  data-card-toggle="act-ib-fish-screen-inspection"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Fish screen criteria compliance inspection</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">FSH-2.1</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Monitoring</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-ib-fish-screen-inspection"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Fish screen criteria compliance inspection"
                                    title="Remove Fish screen criteria compliance inspection"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-ib-fish-screen-inspection"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-ib-inwater-work-window"
                    data-component="intake-b-north-delta"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse In-water work window conformance record"
                                  data-card-toggle="act-ib-inwater-work-window"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >In-water work window conformance record</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">FSH-1.3</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Tracking</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-ib-inwater-work-window"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove In-water work window conformance record"
                                    title="Remove In-water work window conformance record"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-ib-inwater-work-window"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-ib-turbidity-monitoring"
                    data-component="intake-b-north-delta"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Turbidity monitoring during in-water construction"
                                  data-card-toggle="act-ib-turbidity-monitoring"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Turbidity monitoring during in-water construction</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">WQ-2.4</span
                                  ><esa-popover
                                    class="bcn-ev-row__morepop"
                                    position="bottom"
                                    trigger="hover"
                                    offset="6"
                                    appearance="default"
                                    ><span class="bcn-ev-row__more" aria-expanded="false"
                                      ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                                        >+ 2 more</span
                                      ></span
                                    >
                                    <div slot="content" class="bcn-ev-row__poplist">
                                      <p class="bcn-ev-row__poptitle typography-meta">
                                        Commitments
                                      </p>
                                      <ul>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">WQ-2.4</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">WQ-2.6</span>
                                        </li>
                                        <li>
                                          <span class="bcn-cbadge bcn-cbadge--sm">FSH-3.1</span>
                                        </li>
                                      </ul>
                                    </div></esa-popover
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Monitoring</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-ib-turbidity-monitoring"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Turbidity monitoring during in-water construction"
                                    title="Remove Turbidity monitoring during in-water construction"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-ib-turbidity-monitoring"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-ib-worker-training"
                    data-component="intake-b-north-delta"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Worker environmental awareness training"
                                  data-card-toggle="act-ib-worker-training"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Worker environmental awareness training</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">BIO-2.3</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Tracking</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Pre-Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-ib-worker-training"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Worker environmental awareness training"
                                    title="Remove Worker environmental awareness training"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-ib-worker-training"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-ib-monthly-compliance-report"
                    data-component="intake-b-north-delta"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Monthly compliance monitoring report"
                                  data-card-toggle="act-ib-monthly-compliance-report"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Monthly compliance monitoring report</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">REP-3.1</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Reporting</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-ib-monthly-compliance-report"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Monthly compliance monitoring report"
                                    title="Remove Monthly compliance monitoring report"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-ib-monthly-compliance-report"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-ib-pile-driving-hydroacoustic"
                    data-component="intake-b-north-delta"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Hydroacoustic monitoring during pile driving"
                                  data-card-toggle="act-ib-pile-driving-hydroacoustic"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Hydroacoustic monitoring during pile driving</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">FSH-4.2</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Monitoring</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-ib-pile-driving-hydroacoustic"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Hydroacoustic monitoring during pile driving"
                                    title="Remove Hydroacoustic monitoring during pile driving"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-ib-pile-driving-hydroacoustic"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-tc-rtm-stockpile-inspection"
                    data-component="twin-cities-complex"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Reusable tunnel material stockpile inspection"
                                  data-card-toggle="act-tc-rtm-stockpile-inspection"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Reusable tunnel material stockpile inspection</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">WQ-7.1</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Monitoring</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-tc-rtm-stockpile-inspection"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Reusable tunnel material stockpile inspection"
                                    title="Remove Reusable tunnel material stockpile inspection"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-tc-rtm-stockpile-inspection"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-tc-haul-route-agreement"
                    data-component="twin-cities-complex"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Execute haul route maintenance agreement"
                                  data-card-toggle="act-tc-haul-route-agreement"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Execute haul route maintenance agreement</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">TRA-2.1</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Tracking</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text"
                                      >Implementation Planning</span
                                    ></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-tc-haul-route-agreement"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Execute haul route maintenance agreement"
                                    title="Remove Execute haul route maintenance agreement"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-tc-haul-route-agreement"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-tc-worker-training"
                    data-component="twin-cities-complex"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Worker environmental awareness training"
                                  data-card-toggle="act-tc-worker-training"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Worker environmental awareness training</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">BIO-2.3</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Tracking</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Pre-Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-tc-worker-training"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Worker environmental awareness training"
                                    title="Remove Worker environmental awareness training"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-tc-worker-training"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-targets__item"
                    data-target-row="act-tc-nesting-bird-survey"
                    data-component="twin-cities-complex"
                    data-tier="manual"
                    hidden=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-row">
                          <div class="bcn-ev-row__head">
                            <div class="bcn-ev-row__main">
                              <div class="bcn-ev-row__titlerow">
                                <button
                                  type="button"
                                  class="bcn-disclosure"
                                  aria-expanded="true"
                                  aria-label="Collapse Nesting bird survey before vegetation removal"
                                  data-card-toggle="act-tc-nesting-bird-survey"
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
                                      <path d="m6 9 6 6 6-6"></path></svg
                                  ></span></button
                                ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                                  class="bcn-ev-row__dot"
                                  data-action-unsaved=""
                                  hidden=""
                                  aria-hidden="true"
                                ></span
                                ><span class="bcn-ev-row__name"
                                  >Nesting bird survey before vegetation removal</span
                                ><span class="bcn-ev-row__codes"
                                  ><span class="bcn-cbadge bcn-cbadge--sm">BIO-5.2</span
                                  ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                    class="bcn-countchip"
                                    text="No evidence attached yet"
                                    position="below"
                                    data-action-evcount=""
                                    hidden="true"
                                    ><span class="bcn-countchip__stack"
                                      ><span class="bcn-countchip__icon" aria-hidden="true"
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
                                            <path
                                              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                            ></path></svg></span></span
                                      ><span class="bcn-countchip__num" aria-hidden="true"
                                        ><span
                                          class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                          ><span class="esa-badge__text">0</span></span
                                        ></span
                                      ><span class="bcn-countchip__sr"
                                        >No evidence attached yet</span
                                      ></span
                                    ></esa-tooltip
                                  ></span
                                ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                                ><span class="bcn-ev-row__tags"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Monitoring</span></span
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                    ><span class="esa-badge__text">Pre-Construction</span></span
                                  ></span
                                >
                              </div>
                            </div>
                            <div class="bcn-ev-row__side">
                              <span
                                class="bcn-ev-row__dismiss"
                                data-target-dismiss="act-tc-nesting-bird-survey"
                                ><span
                                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                  ><button
                                    class="esa-button__native typography-microcopy-xs"
                                    type="button"
                                    aria-label="Remove Nesting bird survey before vegetation removal"
                                    title="Remove Nesting bird survey before vegetation removal"
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
                                    ></span></button></span
                              ></span>
                            </div>
                          </div>
                          <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                          <div class="bcn-ev-row__body" data-card-body="">
                            <ul
                              class="bcn-ev-attached"
                              data-attached-list="act-tc-nesting-bird-survey"
                            ></ul>
                            <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                              Drag evidence here to attach it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- An attached-evidence row, pre-rendered from the LEGOS once and cloned per
         attachment by the controller. Astro's legos are compile-time, so a template is how
         a runtime-built list still gets real esa-badge / esa-icon-button markup instead of
         hand-written copies of it (the same trick BcnGuidanceDrawer uses for its avatar). --><template
                  data-attached-row=""
                  ><li class="bcn-ev-attached__row" data-astro-cid-6zu5gb4v="">
                    <span class="bcn-ev-attached__name" data-astro-cid-6zu5gb4v=""></span
                    ><span class="bcn-ev-attached__mark" hidden="" data-astro-cid-6zu5gb4v=""
                      ><span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                        data-astro-cid-yahmuvtj=""
                        ><span class="esa-badge__text" data-astro-cid-yahmuvtj=""
                          >Suggested</span
                        ></span
                      ></span
                    ><span class="bcn-ev-attached__remove" data-astro-cid-6zu5gb4v=""
                      ><span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        data-astro-cid-5nhxdd72=""
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Remove this evidence from the action"
                          title="Remove this evidence from the action"
                          data-astro-cid-6zu5gb4v="true"
                          data-astro-cid-5nhxdd72=""
                        >
                          <span
                            class="esa-icon esa-icon--sm"
                            aria-hidden="true"
                            data-astro-cid-wcwfib5m=""
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
                              data-astro-cid-wcwfib5m=""
                            >
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button></span
                    ></span></li></template
                ><!-- Nothing on the list yet. -->
                <div class="bcn-ev-targets__empty" data-targets-empty="">
                  <div class="esa-empty-state esa-empty-state--sm">
                    <h3 class="esa-empty-state__title typography-label-sm-strong">
                      No actions selected
                    </h3>
                    <p class="esa-empty-state__description typography-body-xs">
                      Search above to add one, or run Find matches once you have added evidence.
                    </p>
                    <div class="esa-empty-state__actions typography-label-md"></div>
                  </div>
                </div>
              </div>
              <!-- ── What is outstanding ─────────────────────────────────────────────────
       Pinned BELOW the scroll rather than inside it: it summarises the whole
       column, so it must not scroll away from the changes it is counting. Shown
       only while associations are unsaved; the Add New tab's draft has its own
       marker and is not counted here. -->
              <div class="bcn-ev-targets__pending" data-targets-pending="" hidden="">
                <div class="esa-alert-box esa-alert-box--warning typography-body-sm">
                  <div class="esa-alert-box__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                  </div>
                  <div class="esa-alert-box__body">
                    <strong class="esa-alert-box__title typography-label-sm-strong"
                      >Unsaved changes</strong
                    >
                    <div class="esa-alert-box__message">
                      <span data-targets-pending-text=""></span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <esa-confirm-dialog
          data-evidence-confirm="true"
          heading="Discard these associations?"
          message="Evidence you have attached in this session has not been saved. Changing the component or phase re-scopes the action list and discards it."
          variant="warning"
          confirm-label="Discard and change"
          cancel-label="Keep working"
        ></esa-confirm-dialog>
      </div>
      <footer class="bcn-bottom-drawer__foot">
        <div class="bcn-ev__foot">
          <div class="bcn-ev__actions">
            <span data-evidence-save=""
              ><span
                class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md esa-button--disabled"
                ><button
                  class="esa-button__native typography-microcopy-md"
                  type="button"
                  disabled=""
                >
                  <span class="esa-button__label">Save</span>
                </button></span
              ></span
            ><span data-drawer-close=""
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
                ><button class="esa-button__native typography-microcopy-md" type="button">
                  <span class="esa-button__label">Cancel</span>
                </button></span
              ></span
            >
          </div>
        </div>
      </footer>
    </div></bcn-bottom-drawer
  >
  <script
    type="module"
    src="/beacon-design/_astro/BcnEvidenceDrawer.astro_astro_type_script_index_0_lang.DSCvyJLV.js"
  ></script>
</div>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
:root,
[data-theme="beacon"] {
  --animation-overlay-enter: 0.25s ease-out;
  --badge-bg: #43608a;
  --badge-text-color: #fcfcfc;
  --bcn-aldo: #08908b;
  --bcn-aldo-100: #cfeceb;
  --bcn-aldo-50: #e8f6f5;
  --bcn-gray-100: #efefef;
  --bcn-gray-1000: #000;
  --bcn-gray-200: #dcdcdc;
  --bcn-gray-300: #bdbdbd;
  --bcn-gray-400: #989898;
  --bcn-gray-50: #fafafa;
  --bcn-gray-500: #7c7c7c;
  --bcn-gray-600: #656565;
  --bcn-gray-900: #3d3d3d;
  --bcn-gray-950: #292929;
  --bcn-helpbar-bg: #17191bc7;
  --bcn-helpbar-bg-solid: #1f2224;
  --bcn-helpbar-border: #ffffff1f;
  --bcn-helpbar-divider: #ffffff29;
  --bcn-helpbar-fg: #ffffffeb;
  --border-width-default: 1px;
  --button-radius-md: 0.25rem;
  --button-radius-sm: 0.25rem;
  --card-bg: #fcfcfc;
  --card-border-color: #dcdcdc;
  --card-header-bg: transparent;
  --color-background-accent: #f76b15;
  --color-background-brand-muted: #eef5f4;
  --color-background-elevation-floating: #fcfcfc;
  --color-background-elevation-raised: #fcfcfc;
  --color-background-elevation-sunken: #efefef;
  --color-background-overlay-backdrop: #00000080;
  --color-background-utility-danger: #ce2c31;
  --color-background-utility-danger-hover: #641723;
  --color-border-default: #dcdcdc;
  --color-border-default-strong: #bdbdbd;
  --color-border-default-subtle: #efefef;
  --color-content-default: #3d3d3d;
  --color-content-default-knockout: #fcfcfc;
  --color-content-default-secondary: #525252;
  --color-content-default-tertiary: #656565;
  --color-content-utility-danger: #ce2c31;
  --dialog-width: 480px;
  --dialog-width-lg: 640px;
  --elevation-4: 0 6px 24px -6px #00000012;
  --elevation-5: 0 8px 32px -8px #00000014;
  --font-decorative: "Besley", serif;
  --font-size-100: clamp(0.625rem, 0.56rem + 0.32vw, 0.75rem);
  --font-size-150: clamp(0.6875rem, 0.61rem + 0.38vw, 0.875rem);
  --font-size-200: clamp(0.75rem, 0.66rem + 0.44vw, 0.9375rem);
  --font-size-250: clamp(0.8125rem, 0.71rem + 0.5vw, 1.0625rem);
  --font-size-300: clamp(0.875rem, 0.77rem + 0.52vw, 1.125rem);
  --font-size-400: clamp(1rem, 0.88rem + 0.6vw, 1.25rem);
  --font-size-500: clamp(1.125rem, 0.98rem + 0.72vw, 1.5rem);
  --font-size-700: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem);
  --form-border-color: #dcdcdc;
  --form-border-width: 1px;
  --form-label-color: #525252;
  --icon-size-lg: 24px;
  --icon-size-md: 20px;
  --icon-size-sm: 16px;
  --icon-size-xs: 14px;
  --radius-100: 0.25rem;
  --radius-200: 0.5rem;
  --radius-300: 0.5rem;
  --radius-400: 0.75rem;
  --radius-chip: 0.25rem;
  --radius-full: 9999px;
  --radius-lg: 0.75rem;
  --radius-md: 0.25rem;
  --radius-sm: 0.25rem;
  --radius-xs: 0.125rem;
  --side-dialog-inset: 16px;
  --side-dialog-width: 400px;
  --spacing-050: 0.125rem;
  --spacing-100: 0.25rem;
  --spacing-150: 0.375rem;
  --spacing-200: 0.5rem;
  --spacing-250: 0.625rem;
  --spacing-300: 0.75rem;
  --spacing-400: 1rem;
  --spacing-500: 1.5rem;
  --spacing-600: 2rem;
  --spacing-700: 3rem;
  --stat-accent-color: #3a7c59;
  --stat-value-color: #3d3d3d;
  --stat-value-size: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem);
  --transition-fast: 0.15s ease;
  --typography-body-md-font-family: "DM Sans", sans-serif;
  --typography-body-md-font-size: clamp(0.75rem, 0.66rem + 0.44vw, 0.9375rem);
  --typography-body-md-font-weight: 350;
  --typography-body-md-letter-spacing: 0.01em;
  --typography-body-md-line-height: 1.6;
  --typography-body-sm-font-family: "DM Sans", sans-serif;
  --typography-body-sm-font-size: clamp(0.6875rem, 0.61rem + 0.38vw, 0.875rem);
  --typography-body-sm-font-weight: 350;
  --typography-body-sm-letter-spacing: 0.01em;
  --typography-body-sm-line-height: 1.6;
  --typography-display-sm-font-family: "DM Sans", sans-serif;
  --typography-display-sm-font-size: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem);
  --typography-display-sm-font-weight: 650;
  --typography-display-sm-letter-spacing: -0.01em;
  --typography-display-sm-line-height: 1.3;
  --typography-font-family-display: "DM Sans", sans-serif;
  --typography-font-family-sans: "DM Sans", sans-serif;
  --typography-font-weight-bold: 650;
  --typography-font-weight-medium: 500;
  --typography-font-weight-regular: 350;
  --typography-font-weight-semibold: 550;
  --typography-label-md-font-family: "DM Sans", sans-serif;
  --typography-label-md-font-size: clamp(0.75rem, 0.66rem + 0.44vw, 0.9375rem);
  --typography-label-md-font-weight: 500;
  --typography-label-md-letter-spacing: 0.01em;
  --typography-label-md-line-height: 1.6;
  --typography-label-md-strong-font-family: "DM Sans", sans-serif;
  --typography-label-md-strong-font-size: clamp(0.75rem, 0.66rem + 0.44vw, 0.9375rem);
  --typography-label-md-strong-font-weight: 550;
  --typography-label-md-strong-letter-spacing: 0.01em;
  --typography-label-md-strong-line-height: 1.6;
  --typography-label-sm-font-size: clamp(0.6875rem, 0.61rem + 0.38vw, 0.875rem);
  --typography-label-xs-font-family: "DM Sans", sans-serif;
  --typography-label-xs-font-size: clamp(0.625rem, 0.56rem + 0.32vw, 0.75rem);
  --typography-label-xs-font-weight: 500;
  --typography-label-xs-letter-spacing: 0.01em;
  --typography-label-xs-line-height: 1.6;
  --typography-meta-font-family: "DM Sans", sans-serif;
  --typography-meta-font-size: clamp(0.625rem, 0.56rem + 0.32vw, 0.75rem);
  --typography-meta-font-weight: 350;
  --typography-meta-letter-spacing: 0.01em;
  --typography-meta-line-height: 1.6;
  --typography-microcopy-md-font-family: "DM Sans", sans-serif;
  --typography-microcopy-md-font-size: clamp(0.75rem, 0.66rem + 0.44vw, 0.9375rem);
  --typography-microcopy-md-font-weight: 500;
  --typography-microcopy-md-letter-spacing: 0.01em;
  --typography-microcopy-md-line-height: 1;
  --typography-microcopy-sm-strong-font-family: "DM Sans", sans-serif;
  --typography-microcopy-sm-strong-font-size: clamp(0.6875rem, 0.61rem + 0.38vw, 0.875rem);
  --typography-microcopy-sm-strong-font-weight: 550;
  --typography-microcopy-sm-strong-letter-spacing: 0.01em;
  --typography-microcopy-sm-strong-line-height: 1;
  --typography-microcopy-xs-font-family: "DM Sans", sans-serif;
  --typography-microcopy-xs-font-size: clamp(0.625rem, 0.56rem + 0.32vw, 0.75rem);
  --typography-microcopy-xs-font-weight: 500;
  --typography-microcopy-xs-letter-spacing: 0.01em;
  --typography-microcopy-xs-line-height: 1;
  --typography-microcopy-xs-strong-font-family: "DM Sans", sans-serif;
  --typography-microcopy-xs-strong-font-size: clamp(0.625rem, 0.56rem + 0.32vw, 0.75rem);
  --typography-microcopy-xs-strong-font-weight: 550;
  --typography-microcopy-xs-strong-letter-spacing: 0.01em;
  --typography-microcopy-xs-strong-line-height: 1;
  --typography-title-sm-strong-font-family: "DM Sans", sans-serif;
  --typography-title-sm-strong-font-size: clamp(0.8125rem, 0.71rem + 0.5vw, 1.0625rem);
  --typography-title-sm-strong-font-weight: 550;
  --typography-title-sm-strong-letter-spacing: 0.01em;
  --typography-title-sm-strong-line-height: 1.6;
}

.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-brand, #46a758));
  --_badge-text: var(--badge-text-color, var(--color-content-default-knockout, #fcfcfc));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.bcn-status-chip {
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
  display: inline-flex;
}
.bcn-status-chip__dot {
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
  width: 8px;
  height: 8px;
}
*,
:before,
:after {
  box-sizing: border-box;
}
body {
  font-family: var(--typography-font-family-sans, system-ui, sans-serif);
  font-weight: var(--typography-font-weight-regular, 350);
  color: var(--color-content-default, #3d3d3d);
  background: var(--color-background-elevation-raised, #fff);
  -webkit-font-smoothing: antialiased;
  margin: 0;
}
button {
  cursor: pointer;
  background: 0 0;
  border: 0;
  font-family: inherit;
}
a {
  color: var(--color-content-link, #005862);
  text-decoration: none;
}
img {
  max-width: 100%;
  display: block;
}
:where(h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd, ul, ol, pre) {
  margin: 0;
}
.page-layout {
  min-height: calc(100vh - 52px);
  padding: var(--spacing-600);
  background: var(--bcn-gray-50);
  box-sizing: border-box;
  flex-direction: column;
  display: flex;
}
.page-layout__bleed,
.page-layout section {
  width: 100%;
}
.breadcrumbs {
  padding: var(--spacing-400) 0;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-400);
  display: flex;
}
.breadcrumbs__items {
  gap: var(--spacing-100);
  flex-wrap: wrap;
  align-items: center;
  display: flex;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.breadcrumb-item {
  color: var(--bcn-gray-600);
  text-transform: capitalize;
  font-size: 0.875rem;
}
a.breadcrumb-item {
  text-decoration: none;
}
.page-layout__container {
  flex-direction: column;
  display: flex;
}
.page-layout__title {
  border-bottom: 1px solid var(--bcn-gray-200);
  padding: var(--spacing-500) 0;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.page-layout__title-main {
  align-items: center;
  gap: var(--spacing-400);
  min-width: 0;
  display: flex;
}
.page-layout__title h1 {
  align-items: center;
  gap: var(--spacing-300);
  font-family: var(--font-decorative);
  font-weight: var(--typography-font-weight-bold);
  font-size: var(--font-size-500);
  color: var(--bcn-gray-1000);
  margin: 0;
  display: flex;
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.page-layout__content {
  padding: var(--spacing-500) 0;
  min-height: 70vh;
  position: relative;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
[data-gap="md"] {
  --gap: var(--spacing-400, 1rem);
}
.repel {
  --gap: var(--spacing-400, 1rem);
  --align: center;
  gap: var(--gap);
  align-items: var(--align);
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
}
[data-gap="xs"] {
  --gap: var(--spacing-200, 0.5rem);
}
[data-gap="lg"] {
  --gap: var(--spacing-500, 1.5rem);
}
[data-gap="sm"] {
  --gap: var(--spacing-300, 0.75rem);
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
}
.esa-stat {
  --_stat-value-color: var(--stat-value-color, var(--color-content-default, #202020));
  --_stat-value-font: var(
    --typography-font-family-display,
    var(
      --typography-display-sm-font-family,
      var(--typography-font-family-display, "DM Sans", sans-serif)
    )
  );
  --_stat-value-size: var(
    --stat-value-size,
    var(--typography-display-sm-font-size, var(--font-size-700, 2.25rem))
  );
  --_stat-value-weight: var(
    --typography-font-weight-bold,
    var(--typography-display-sm-font-weight, var(--typography-font-weight-bold, 650))
  );
  --_stat-label-color: var(--color-content-default-secondary, #646464);
  --_stat-label-size: var(
    --font-size-200,
    var(--typography-label-md-font-size, var(--font-size-200, 0.9375rem))
  );
  --_stat-label-weight: var(
    --typography-font-weight-medium,
    var(--typography-label-md-font-weight, var(--typography-font-weight-medium, 500))
  );
  --_stat-sub-color: var(--color-content-default-secondary, #646464);
  --_stat-sub-size: var(
    --font-size-150,
    var(--typography-body-sm-font-size, var(--font-size-150, 0.875rem))
  );
  --_stat-accent-color: var(--stat-accent-color, var(--color-content-brand, #2a7e3b));
  --_stat-gap: var(--spacing-050, 0.125rem);
  gap: var(--_stat-gap);
  background: 0 0;
  flex-direction: column;
  display: flex;
}
.esa-stat__value {
  font-family: var(--_stat-value-font);
  font-size: var(--_stat-value-size);
  font-weight: var(--_stat-value-weight);
  color: var(--_stat-value-color);
}
.esa-stat__label {
  font-size: var(--_stat-label-size);
  font-weight: var(--_stat-label-weight);
  color: var(--_stat-label-color);
}
.esa-stat__sub {
  font-size: var(--_stat-sub-size);
  color: var(--_stat-sub-color);
}
[data-gap="xl"] {
  --gap: var(--spacing-600, 2rem);
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button__native {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
  text-decoration: none;
  display: inline-flex;
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button--variant-chrome .esa-button__native {
  color: inherit;
  background: 0 0;
  border-color: #0000;
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
}
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken, #f0f0f0) 45%,
    var(--color-background-elevation-raised, #fcfcfc)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-default-strong, #bbb);
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  color: var(--_accent-text);
  border-color: var(--_accent);
  background: 0 0;
}
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border-default, #cecece);
}
.bcn-obsmap {
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-sunken);
  z-index: 0;
  isolation: isolate;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.bcn-obsmap .leaflet-interactive {
  cursor: pointer;
}
html,
.modern-layout__content {
  scroll-behavior: smooth;
}
.bcn-component-picker {
  align-self: center;
  align-items: center;
  min-width: 0;
  display: inline-flex;
}
.bcn-component-picker esa-dropdown-menu {
  --font-size-200: 0.875rem;
  align-items: center;
  display: inline-flex;
}
.bcn-component-picker__trigger {
  align-items: center;
  gap: var(--spacing-150);
  min-height: 28px;
  padding: var(--spacing-100) var(--spacing-200);
  border-radius: var(--radius-200);
  font: inherit;
  font-size: 0.875rem;
  line-height: 1.3;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  cursor: pointer;
  white-space: nowrap;
  background: 0 0;
  border: 0;
  margin: 0;
  display: inline-flex;
}
.bcn-component-picker__trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.mpdash {
  --_col: 3;
  --_gap: var(--spacing-400);
  grid-template-columns: repeat(var(--_col), minmax(0, 1fr));
  gap: var(--_gap);
  grid-auto-rows: minmax(84px, auto);
  display: grid;
  position: relative;
}
.mpd-tracks {
  inset: calc(var(--_gap) * -1) 0;
  grid-template-columns: repeat(var(--_col), minmax(0, 1fr));
  gap: var(--_gap);
  pointer-events: none;
  opacity: 0;
  z-index: 0;
  transition: opacity 0.12s;
  display: grid;
  position: absolute;
}
.mpd-tracks > i {
  background: var(--color-background-elevation-sunken);
  border: 1px dashed var(--color-border-default-strong);
  border-radius: var(--radius-200);
}
.bcn-dwidget {
  min-width: 0;
  display: flex;
  container-type: inline-size;
}
.bcn-dwidget[data-w="2"] {
  grid-column: span 2;
}
.bcn-dwidget[data-h="5"] {
  grid-row: span 5;
}
.mpdash > .bcn-dwidget {
  z-index: 1;
  position: relative;
}
.bcn-dwidget[data-w="1"] {
  grid-column: span 1;
}
.bcn-dwidget[data-h="3"] {
  grid-row: span 3;
}
.bcn-dwidget[data-h="2"] {
  grid-row: span 2;
}
.bcn-dwidget[data-w="3"] {
  grid-column: span 3;
}
.mpd-add {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200);
  border: 1.5px dashed var(--color-border-default-strong);
  border-radius: var(--radius-md);
  background: var(--color-background-elevation-base);
  min-block-size: 64px;
  color: var(--color-content-default-secondary);
  font-size: var(--font-size-150);
  cursor: pointer;
  grid-column: 1/-1;
  font-weight: 600;
  display: flex;
}
.mpd-add > span {
  font-size: var(--font-size-400);
  line-height: 1;
}
.mpd-add-grid {
  gap: var(--spacing-400);
  padding-block: var(--spacing-200);
  grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
  display: grid;
}
.bcn-widget-card {
  border-radius: var(--radius-md);
  block-size: 100%;
  inline-size: 100%;
  color: inherit;
  font: inherit;
  text-align: start;
  cursor: pointer;
  background: 0 0;
  border: 0;
  margin: 0;
  padding: 0;
  display: block;
}
.bcn-widget-card[data-on] {
  --card-bg: var(--color-background-elevation-sunken);
  --card-border-color: var(--color-border-default);
  cursor: default;
}
.bcn-widget-card > .esa-card {
  block-size: 100%;
}
.bcn-widget-card__body {
  color: var(--color-content-default-secondary);
}
.bcn-widget-card[data-on] .bcn-widget-card__body {
  color: var(--color-content-default-tertiary);
}
.bcn-widget-card__state {
  display: none;
}
.bcn-widget-card[data-on] .bcn-widget-card__state {
  display: inline-flex;
}
.bcn-widget-card__state .esa-badge {
  font-weight: var(--typography-font-weight-medium);
}
.bcn-widget-card__title {
  color: var(--color-content-default);
}
.bcn-widget-card__stream {
  color: var(--color-content-default-secondary);
  font-size: var(--font-size-100);
}
.bcn-cfg {
  gap: var(--spacing-500);
  grid-template-columns: minmax(0, 1fr) 348px;
  align-items: start;
  display: grid;
}
.bcn-preview-stage {
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  height: 520px;
  position: relative;
  overflow: hidden;
}
.bcn-preview-stage__badge {
  top: var(--spacing-300);
  right: var(--spacing-300);
  z-index: 2;
  padding: 1px var(--spacing-200);
  font-size: var(--typography-label-sm-font-size);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default-secondary);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  position: absolute;
}
.bcn-preview-stage__badge:empty {
  display: none;
}
.bcn-preview-stage__scroll {
  height: 100%;
  padding: var(--spacing-500);
  scrollbar-gutter: stable;
  overflow-y: auto;
}
.bcn-preview-stage__well {
  margin: 0 auto;
  position: relative;
}
.bcn-preview-stage__host {
  transform-origin: 0 0;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
}
.bcn-cfg__label {
  color: var(--color-content-default-primary);
}
.bcn-color-field {
  --_swatch: 24px;
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-color-field__swatches {
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.bcn-color-field__swatch {
  width: var(--_swatch);
  height: var(--_swatch);
  border-radius: var(--radius-sm);
  background: var(--_fill);
  cursor: pointer;
  border: 0;
  padding: 0;
  box-shadow: inset 0 0 0 1px #00000024;
}
.bcn-cfg [hidden] {
  display: none;
}
.bcn-cfg__foot {
  inline-size: 100%;
}
.bcn-dwidget .esa-card {
  --card-header-bg: var(--color-background-elevation-sunken);
  --_card-header-border: var(--color-border-default-strong);
  flex-direction: column;
  flex: 1;
  min-width: 0;
  display: flex;
}
.bcn-dwidget .esa-card {
  transition: box-shadow 0.12s;
}
.bcn-dwidget__head {
  cursor: grab;
  touch-action: none;
  min-block-size: 28px;
  inline-size: 100%;
}
.bcn-dwidget__glyph {
  color: var(--color-content-default-secondary);
  display: inline-flex;
}
.bcn-dwidget__title {
  margin: 0;
}
.bcn-dwidget__tools {
  opacity: 0;
  transition: opacity 0.12s;
}
.bcn-dwidget__grip {
  border-radius: var(--radius-full);
  block-size: 28px;
  inline-size: 28px;
  color: var(--color-content-default-secondary);
  cursor: grab;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-widget-menu__kebab {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-base);
  block-size: 28px;
  inline-size: 28px;
  color: var(--color-content-default-secondary);
  cursor: pointer;
  justify-content: center;
  align-items: center;
  line-height: 1;
  display: inline-flex;
}
.bcn-widget-menu__panel {
  inline-size: calc(256px - 2 * var(--spacing-300));
}
.bcn-widget-menu__width {
  padding-inline: var(--spacing-250);
  padding-block-start: var(--spacing-100);
}
.bcn-widget-menu__rule {
  background: var(--color-border-default-subtle);
  block-size: 1px;
  margin-block: var(--spacing-250);
}
.bcn-widget-menu__item {
  align-items: center;
  gap: var(--spacing-250);
  block-size: 32px;
  inline-size: 100%;
  padding-inline: var(--spacing-250);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  text-align: start;
  cursor: pointer;
  background: 0 0;
  border: 0;
  display: flex;
}
.bcn-widget-menu__item .esa-icon {
  color: var(--color-content-default-secondary);
  flex: none;
}
.bcn-widget-menu__item--danger,
.bcn-widget-menu__item--danger .esa-icon {
  color: var(--color-content-utility-danger);
}
.bcn-dwidget .esa-card__body {
  flex: 1;
}
.bcn-viztrend {
  --_trend-height: 72px;
}
.bcn-viztrend--sm {
  --_trend-height: 44px;
}
.bcn-viztrend__strip {
  height: var(--_trend-height);
  align-items: flex-end;
  gap: 2px;
  display: flex;
}
.bcn-viztrend__col {
  background: var(--_accent, var(--color-content-default-secondary));
  border-radius: 1px;
  flex: 1;
  min-width: 2px;
  min-height: 3px;
}
.bcn-viztrend__col--zero {
  background: var(--color-border-default);
  height: 2px;
  min-height: 0;
}
.bcn-viztrend__axis {
  margin-top: var(--spacing-100);
  font-size: max(0.8125rem, var(--font-size-150));
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  justify-content: space-between;
  display: flex;
}
.bcn-dwidget__foot {
  color: var(--color-content-link);
  font-size: var(--font-size-150);
  font-weight: 600;
  text-decoration: none;
}
.bcn-viz-bars {
  gap: var(--spacing-200);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-viz-bars__row {
  align-items: center;
  gap: var(--spacing-250);
  grid-template-columns: minmax(0, 1fr) minmax(52px, 1.15fr) auto;
  display: grid;
}
.bcn-viz-bars--code .bcn-viz-bars__row {
  grid-template-columns: 46px 1fr auto;
}
.bcn-viz-bars__name {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
  overflow: hidden;
}
.bcn-viz-bars__track {
  background: var(--color-background-elevation-sunken);
  border-radius: var(--radius-xs);
  height: 12px;
  display: block;
  overflow: hidden;
}
.bcn-viz-bars__fill {
  background: var(
    --_mono,
    var(--_bar-fill, var(--_accent, var(--color-content-default-secondary)))
  );
  border-radius: var(--radius-xs);
  height: 100%;
  display: block;
}
.bcn-viz-bars__val {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
.bcn-widget-panels {
  gap: var(--spacing-400);
  flex: 1;
  grid-template-columns: 220px 1fr;
  min-inline-size: 0;
  display: grid;
}
.bcn-widget-panels__panel {
  --gap: var(--spacing-250);
  min-inline-size: 0;
}
.bcn-viz-strip {
  gap: var(--spacing-100);
  display: flex;
}
.bcn-viz-strip__day {
  align-items: center;
  gap: var(--spacing-100);
  flex-direction: column;
  flex: 1;
  display: flex;
}
.bcn-viz-strip__cell {
  box-sizing: border-box;
  width: 100%;
  height: var(--bcn-viz-strip-cell-height, 26px);
  border-radius: var(--radius-xs);
  background: var(--_accent, var(--color-content-default-secondary));
}
.bcn-viz-strip__initial {
  font-size: max(0.8125rem, var(--font-size-100));
  color: var(--color-content-default-tertiary);
  line-height: 1;
}
.bcn-widget-panels__panel + .bcn-widget-panels__panel {
  border-inline-start: 1px solid var(--color-border-default-subtle);
  padding-inline-start: var(--spacing-400);
}
.bcn-mt {
  border-collapse: collapse;
  inline-size: 100%;
  font-size: var(--font-size-150);
}
.bcn-mt th {
  text-align: start;
  color: var(--color-content-default-secondary);
  padding-block: var(--spacing-100);
  border-block-end: 1px solid var(--color-border-default);
  font-weight: 600;
}
.bcn-mt th.bcn-mt--end,
.bcn-mt td.bcn-mt--end {
  text-align: end;
}
.bcn-mt--num {
  font-variant-numeric: tabular-nums;
}
.bcn-mt td {
  padding-block: var(--spacing-150);
  border-block-end: 1px solid var(--color-border-default);
  color: var(--color-content-default-primary);
}
.bcn-mt td a {
  color: var(--color-content-brand);
  font-weight: 600;
  text-decoration: none;
}
.bcn-mt__dot {
  border-radius: var(--radius-full);
  block-size: 7px;
  inline-size: 7px;
  vertical-align: 1px;
  margin-inline-end: var(--spacing-100);
  display: inline-block;
}
.bcn-mt tbody tr:last-child td {
  border-block-end: none;
}
.bcn-cc {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-cc__show {
  align-self: flex-start;
}
.bcn-cc__pane,
.bcn-cc__lane {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-cc__lane-head {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  margin: 0;
  display: flex;
}
.bcn-cc__rows {
  gap: var(--spacing-150);
  flex-direction: column;
  display: flex;
}
.bcn-cc__row {
  align-items: center;
  gap: var(--spacing-200);
  min-block-size: 40px;
  inline-size: 100%;
  padding-block: var(--spacing-150);
  padding-inline: var(--spacing-300);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default-primary);
  font: inherit;
  text-align: start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
}
.bcn-cc__alert {
  color: var(--color-background-utility-danger);
  display: inline-flex;
}
.bcn-cc__name {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
}
.bcn-cc__id {
  font-size: var(--font-size-100);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
}
.bcn-cc__meta {
  min-inline-size: 0;
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: auto;
  overflow: hidden;
}
.bcn-cc__chev {
  color: var(--color-content-default-tertiary);
  transition: transform 0.12s;
  display: inline-flex;
}
.bcn-cc__detail {
  display: none;
}
.bcn-cc[data-show="needs"] [data-cc-pane="all"],
.bcn-cc[data-show="all"] [data-cc-pane="needs"] {
  display: none;
}
.bcn-widget-panels[data-panels="3"] {
  grid-template-columns: 190px 1fr 1fr;
}
.bcn-viz-meter {
  gap: var(--spacing-300);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-viz-meter__bar {
  border-radius: var(--radius-xs);
  background: var(--color-background-elevation-sunken);
  height: 14px;
  display: flex;
  overflow: hidden;
}
.bcn-viz-meter__bar span {
  height: 100%;
  display: block;
}
.bcn-viz-meter__legend {
  gap: var(--spacing-200);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-viz-meter__row {
  align-items: center;
  gap: var(--spacing-250);
  font-size: var(--font-size-200);
  color: var(--color-content-default);
  display: flex;
}
.bcn-viz-meter__dot {
  border-radius: var(--radius-full);
  flex: none;
  width: 10px;
  height: 10px;
}
.bcn-viz-meter__n {
  font-weight: var(--typography-font-weight-semibold);
  font-variant-numeric: tabular-nums;
  margin-left: auto;
}
.bcn-viz-donut {
  min-inline-size: 0;
}
.bcn-viz-donut__ring {
  flex: none;
}
.bcn-viz-donut__legend {
  flex: auto;
  min-inline-size: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-viz-donut__row {
  --gap: var(--spacing-250);
  flex-wrap: nowrap;
}
.bcn-viz-donut__dot {
  border-radius: var(--radius-full);
  background: var(--_c);
  flex: none;
  block-size: 10px;
  inline-size: 10px;
}
.bcn-viz-donut__label {
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  min-inline-size: 0;
  overflow: hidden;
}
.bcn-viz-donut__value {
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
  flex: none;
  margin-inline-start: auto;
}
:host {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100, 4px);
  --_pad-y: var(--spacing-300, 0.75rem);
  --_padding-x: var(--spacing-300, 0.75rem);
  --_radius: var(--radius-md, 0.5rem);
  --_border-width: var(--form-border-width, 1px);
  --_border-color: var(--form-border-color, #cecece);
  --_icon-size: 18px;
}
:host([size="sm"]) {
  --_pad-y: var(--spacing-250, 0.625rem);
  --_padding-x: var(--spacing-250, 0.625rem);
  --_radius: var(--radius-sm, 0.25rem);
  --_icon-size: 16px;
}
.group {
  display: inline-flex;
  width: fit-content;
  max-width: 100%;
  gap: 2px;
  padding: 2px;
  background: var(--color-background-elevation-sunken, #f0f0f0);
  border: var(--_border-width) solid var(--_border-color);
  border-radius: var(--_radius);
}
.label {
  color: var(--form-label-color, #646464);
}
.option {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-150, 6px);
  /* Was calc(height - 4px) to compensate for the track's 2px padding. With no
         height token the segment is its own text plus padding, and the track wraps
         it — the compensation has nothing left to compensate for. */
  padding: var(--_pad-y) var(--_padding-x);
  color: var(--color-content-default-secondary, #646464);
  background: transparent;
  border: 0;
  border-radius: calc(var(--_radius) - 2px);
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition:
    background-color var(--transition-fast, 150ms ease),
    color var(--transition-fast, 150ms ease),
    box-shadow var(--transition-fast, 150ms ease);
}
.option--selected {
  background: var(--color-background-elevation-raised, #fcfcfc);
  color: var(--color-content-brand, #2a7e3b);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}
:host {
  --_dialog-bg: var(--color-background-elevation-floating, #fcfcfc);
  --_dialog-border-radius: var(--radius-lg, 0.75rem);
  --_dialog-padding: var(--spacing-500, 1.5rem);
  --_dialog-header-border: var(--color-border-default-subtle, #d9d9d9);
  /* Header/footer surface tints. These were --dialog-header-bg /
         --dialog-footer-bg, declared in no token file — a hook offered on the
         strength of a fallback nobody had asked to override. Folded to their
         literal default 2026-08-16; --dialog-* is a live namespace, so they come
         back as declarations the day a spoke actually wants to frame the body. */
  --_dialog-header-bg: transparent;
  --_dialog-footer-bg: transparent;
  --_dialog-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1);
  --_dialog-width: var(--dialog-width, 480px);
  --_dialog-max-height: 85vh;
}
:host([size="lg"]) {
  --_dialog-width: var(--dialog-width-lg, 640px);
}
dialog.esa-dialog {
  /* UA reset. The UA sheet gives <dialog> a solid border, 1em padding and
         'max-width/max-height: calc(100% - 6px - 2em)'; without clearing those the
         panel renders inside a second, smaller box. */
  border: none;
  padding: 0;
  margin: auto;
  background: var(--_dialog-bg);
  color: var(--color-content-default, #202020);
  border-radius: var(--_dialog-border-radius);
  box-shadow: var(--_dialog-shadow);
  width: var(--_dialog-width);
  max-width: 100vw;
  max-height: var(--_dialog-max-height);
  overflow: hidden;
  font-family: var(--typography-font-family-sans, "DM Sans", sans-serif);
}
.leaflet-container {
  overflow: hidden;
}
.leaflet-container {
  -webkit-tap-highlight-color: transparent;
}
.leaflet-container {
  outline-offset: 1px;
  background: #ddd;
}
.leaflet-container {
  font-family:
    Helvetica Neue,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 0.75rem;
  line-height: 1.5;
}
.leaflet-pane,
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-tile-container,
.leaflet-pane > svg,
.leaflet-pane > canvas,
.leaflet-zoom-box,
.leaflet-image-layer,
.leaflet-layer {
  position: absolute;
  top: 0;
  left: 0;
}
.leaflet-pane {
  z-index: 400;
}
.leaflet-tile-pane {
  z-index: 200;
}
.leaflet-overlay-pane {
  z-index: 400;
}
.leaflet-shadow-pane {
  z-index: 500;
}
.leaflet-marker-pane {
  z-index: 600;
}
.leaflet-tooltip-pane {
  z-index: 650;
}
.leaflet-popup-pane {
  z-index: 700;
}
.leaflet-popup-pane,
.leaflet-control {
  cursor: auto;
}
.leaflet-zoom-animated {
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
}
.leaflet-top,
.leaflet-bottom {
  z-index: 1000;
  pointer-events: none;
  position: absolute;
}
.leaflet-top {
  top: 0;
}
.leaflet-left {
  left: 0;
}
.leaflet-right {
  right: 0;
}
.leaflet-bottom {
  bottom: 0;
}
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-image-layer,
.leaflet-pane > svg path,
.leaflet-tile-container {
  pointer-events: none;
}
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
}
.leaflet-tile {
  filter: inherit;
  visibility: hidden;
}
.leaflet-container .leaflet-marker-pane img,
.leaflet-container .leaflet-shadow-pane img,
.leaflet-container .leaflet-tile-pane img,
.leaflet-container img.leaflet-image-layer,
.leaflet-container .leaflet-tile {
  width: auto;
  padding: 0;
  max-width: none !important;
  max-height: none !important;
}
.leaflet-container img.leaflet-tile {
  mix-blend-mode: plus-lighter;
}
.leaflet-tile::selection {
  background: 0 0;
}
.leaflet-zoom-anim .leaflet-zoom-animated {
  -webkit-transition: -webkit-transform 0.25s cubic-bezier(0, 0, 0.25, 1);
  -moz-transition: -moz-transform 0.25s cubic-bezier(0, 0, 0.25, 1);
  transition: transform 0.25s cubic-bezier(0, 0, 0.25, 1);
}
.leaflet-overlay-pane svg {
  -moz-user-select: none;
}
.leaflet-map-pane svg {
  z-index: 200;
}
svg.leaflet-zoom-animated {
  will-change: transform;
}
.leaflet-container .leaflet-overlay-pane svg {
  max-width: none !important;
  max-height: none !important;
}
.leaflet-interactive {
  cursor: pointer;
}
.leaflet-marker-icon.leaflet-interactive,
.leaflet-image-layer.leaflet-interactive,
.leaflet-pane > svg path.leaflet-interactive,
svg.leaflet-image-layer.leaflet-interactive path {
  pointer-events: visiblePainted;
  pointer-events: auto;
}
.leaflet-zoom-anim .leaflet-tile,
.leaflet-pan-anim .leaflet-tile {
  -webkit-transition: none;
  -moz-transition: none;
  transition: none;
}
:host {
  display: inline-block;
}
.esa-tooltip-anchor {
  position: relative;
  display: inline-flex;
}
:host {
  --_width: var(--side-dialog-width, 400px);
}
dialog.panel {
  --_inset: var(--side-dialog-inset, 16px);
  position: fixed;
  top: var(--_inset);
  bottom: var(--_inset);
  inset-inline: auto;
  height: auto;
  margin: 0;
  border: none;
  padding: 0;
  width: min(var(--_width), calc(100vw - var(--_inset) * 2));
  max-width: none;
  max-height: none;
  background: var(--color-background-elevation-raised, #fcfcfc);
  color: var(--color-content-default, #202020);
  border-radius: var(--radius-md, 0.5rem);
  box-shadow: var(--elevation-5, 0 8px 32px -8px rgba(0, 0, 0, 0.2));
  outline: none;
  overflow: hidden;
  /* Hosts may re-point --side-dialog-inset while open (e.g. card-stacking a
         second dialog on top) — ease the reposition instead of jumping. */
  transition:
    top 220ms ease,
    right 220ms ease,
    bottom 220ms ease,
    left 220ms ease;
}
:host([position="right"]) dialog.panel {
  right: var(--_inset);
  animation: slide-right var(--animation-overlay-enter, 250ms ease-out);
}
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
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.modern-layout {
  flex-direction: column;
  height: 100vh;
  display: flex;
}
.topbar {
  background: var(--bcn-gray-100);
  border-bottom: 1px solid var(--bcn-gray-300);
  z-index: 1100;
  height: 52px;
  padding: 0 var(--spacing-200);
  grid-template-columns: auto 1fr auto;
  align-items: center;
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.topbar {
  padding: 0 var(--spacing-400);
}
.topbar__left {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.sidebar-toggle {
  border-radius: var(--spacing-050);
  width: 32px;
  height: 32px;
  color: var(--bcn-gray-600);
  cursor: pointer;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  transition:
    background 0.15s,
    color 0.15s;
  display: flex;
}
.sidebar-toggle__icon {
  transition: transform 0.15s;
}
.tenant-trigger {
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-100) var(--spacing-200);
  border-radius: var(--spacing-050);
  color: var(--bcn-gray-900);
  cursor: pointer;
  background: 0 0;
  border: none;
  font-size: 0.875rem;
  font-weight: 600;
  transition: background 0.15s;
  display: flex;
}
.topbar__center {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-400);
  min-width: 0;
  padding: 0 var(--spacing-400);
  display: flex;
}
.bcn-search-trigger {
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  max-width: 520px;
  padding: var(--spacing-150) var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  cursor: text;
  margin: 0 auto;
  transition:
    border-color 0.15s,
    background 0.15s;
  display: flex;
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-search-trigger__placeholder {
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  font-size: var(--font-size-200);
  color: var(--color-content-default-tertiary);
  flex: 1;
  overflow: hidden;
}
.bcn-search-trigger__kbd {
  flex: none;
  gap: 2px;
  display: inline-flex;
}
.bcn-search-trigger__kbd kbd {
  min-width: 18px;
  height: 18px;
  font-family: inherit;
  font-size: 11px;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-tertiary);
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  display: inline-flex;
}
.topbar__right {
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-100);
  display: flex;
}
.qa-warning {
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-050) var(--spacing-200);
  background: var(--color-background-accent);
  color: var(--color-background-elevation-raised);
  border-radius: var(--spacing-100);
  white-space: nowrap;
  font-size: 0.8125rem;
  font-weight: 600;
  display: inline-flex;
}
.icon-button {
  border-radius: var(--spacing-050);
  width: 32px;
  height: 32px;
  color: var(--color-content-default-secondary);
  cursor: pointer;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  text-decoration: none;
  transition:
    background 0.15s,
    color 0.15s;
  display: flex;
}
.user-menu {
  position: relative;
}
.user-menu-trigger {
  cursor: pointer;
  background: 0 0;
  border: none;
  border-radius: 9999px;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  transition: transform 0.15s;
  display: flex;
}
.user-menu-trigger__avatar {
  object-fit: cover;
  border: 2px solid var(--bcn-gray-200);
  border-radius: 9999px;
  width: 32px;
  height: 32px;
  transition: border-color 0.15s;
}
.user-menu-trigger__avatar--fallback {
  background: var(--bcn-gray-200);
  color: var(--bcn-gray-500);
  justify-content: center;
  align-items: center;
  display: flex;
}
.user-panel {
  top: calc(100% + var(--spacing-200));
  background: var(--color-background-elevation-raised);
  border-radius: var(--spacing-200);
  border: 1px solid var(--bcn-gray-200);
  z-index: 1200;
  min-width: 280px;
  position: absolute;
  right: 0;
  box-shadow: 0 4px 24px #0000001f;
}
.user-panel[hidden] {
  display: none;
}
.modern-layout__body {
  flex: 1;
  padding-top: 52px;
  display: flex;
  overflow: hidden;
}
.side-nav {
  background-color: var(--bcn-gray-50);
  border-right: 1px solid var(--bcn-gray-200);
  flex-direction: column;
  flex-shrink: 0;
  width: 280px;
  height: 100%;
  font-size: 0.875rem;
  transition: width 0.2s ease-in-out;
  display: flex;
  overflow: visible;
}
.sidebar-header {
  padding: var(--spacing-300) var(--spacing-400);
  flex-shrink: 0;
  transition: padding 0.2s ease-in-out;
}
.site-logo {
  padding: var(--spacing-200);
  border-radius: var(--spacing-050);
  align-items: center;
  text-decoration: none;
  transition: background 0.15s;
  display: inline-flex;
}
.site-logo__img {
  width: var(--spacing-700);
  object-fit: contain;
  object-position: left center;
  height: 3.75rem;
  transition: all 0.2s ease-in-out;
}
.project-switcher-container {
  padding: 0 var(--spacing-400) var(--spacing-300);
  flex-shrink: 0;
  min-width: 0;
  transition: padding 0.2s ease-in-out;
}
.project-switcher__trigger {
  align-items: center;
  gap: var(--spacing-200);
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: var(--spacing-200) var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--bcn-gray-200);
  border-radius: var(--spacing-200);
  cursor: pointer;
  color: var(--bcn-gray-950);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.15s;
  display: flex;
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.project-switcher__name {
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.main-nav {
  padding: 0 var(--spacing-400);
  gap: var(--spacing-050);
  scrollbar-width: none;
  -ms-overflow-style: none;
  flex-direction: column;
  flex: 1;
  transition: padding 0.2s ease-in-out;
  display: flex;
  overflow: visible auto;
}
.nav-section {
  flex-direction: column;
  display: flex;
  position: relative;
}
.nav-section__header {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-200);
  color: var(--bcn-gray-950);
  border-radius: var(--spacing-050);
  white-space: nowrap;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: none;
  width: 100%;
  font-size: 0.9375rem;
  font-weight: 550;
  text-decoration: none;
  transition: all 0.15s;
  display: flex;
}
.nav-section__header--link {
  color: var(--bcn-gray-950);
  text-decoration: none;
}
.nav-section__header > .esa-icon:first-child {
  color: var(--bcn-gray-950);
  flex-shrink: 0;
  transition: color 0.15s;
}
.nav-section__title {
  flex: 1;
  transition: opacity 0.2s ease-in-out;
  overflow: hidden;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  flex-shrink: 0;
  transition:
    transform 0.15s,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.nav-section__items {
  opacity: 1;
  flex-direction: column;
  max-height: 500px;
  margin: 0;
  padding: 0;
  list-style: none;
  transition:
    max-height 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
  display: flex;
  overflow: hidden;
}
.nav-section--collapsed .nav-section__items {
  opacity: 0;
  max-height: 0;
}
.nav-item {
  padding: 0 0 0 2.5rem;
}
.nav-sublink {
  padding: var(--spacing-200);
  color: var(--bcn-gray-950);
  border-radius: var(--spacing-050);
  font-size: 0.8125rem;
  line-height: 1.2;
  text-decoration: none;
  transition: all 0.15s;
  display: block;
}
.nav-item + .nav-item {
  margin-top: var(--spacing-050);
}
.nav-divider {
  height: 1px;
  margin: var(--spacing-200) 0;
  background: var(--bcn-gray-200);
  border: 0;
  flex-shrink: 0;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-background-brand);
}
.nav-sublink.active {
  color: var(--color-background-brand);
  background: #0000000a;
}
.modern-layout__content {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
}
.esa-card {
  --_card-bg: var(--card-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_card-border: var(--card-border-color, var(--color-border-default, #cecece));
  --_card-radius: var(--radius-md, 0.5rem);
  --_card-padding: var(--spacing-500, 1.5rem);
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--color-content-default, #202020);
  --_card-header-border: var(--color-border-default-subtle, #d9d9d9);
  --_card-meta-label-color: var(--color-content-default-secondary, #646464);
  --_card-meta-label-size: var(--typography-label-sm-font-size, 0.875rem);
  --_card-meta-value-size: var(--typography-label-md-font-size, 0.9375rem);
  background: var(--_card-bg);
  border: var(--border-width-default, 1px) solid var(--_card-border);
  border-radius: var(--_card-radius);
  display: block;
  overflow: hidden;
}
.esa-card__body {
  padding: var(--_card-padding);
}
.bcn-omni {
  z-index: 1300;
  padding: var(--spacing-500);
  justify-content: center;
  align-items: center;
  display: flex;
  position: fixed;
  inset: 0;
}
.bcn-omni[hidden] {
  display: none;
}
.bcn-help-bar {
  z-index: 1000;
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-100) var(--spacing-150);
  color: var(--bcn-helpbar-fg);
  background: var(--bcn-helpbar-bg);
  backdrop-filter: blur(14px) saturate(1.4);
  border: 1px solid var(--bcn-helpbar-border);
  border-radius: var(--radius-400, 14px);
  display: flex;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 0 8px 24px #00000047;
}
.bcn-help-bar__guidance {
  align-items: center;
  gap: var(--spacing-150);
  height: 40px;
  padding: 0 var(--spacing-250, 0.625rem);
  border-radius: var(--radius-200, 8px);
  color: var(--bcn-helpbar-fg);
  font-family: inherit;
  font-size: var(--font-size-200, 0.9375rem);
  font-weight: var(--typography-font-weight-medium);
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: 0;
  line-height: 1;
  display: inline-flex;
}
.bcn-aldo-mark {
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-content-default-knockout);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-mark[data-size="sm"] {
  --icon-size-xs: 12px;
  width: 20px;
  height: 20px;
}
.bcn-aldo-mark__glyph {
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
}
.bcn-help-bar__guidance-label {
  white-space: nowrap;
}
.bcn-help-bar__divider {
  width: 1px;
  height: 22px;
  margin: 0 var(--spacing-050, 2px);
  background: var(--bcn-helpbar-divider);
  flex: none;
}
.bcn-help-bar__tooltip,
.bcn-help-bar__popover {
  display: inline-flex;
}
.bcn-help-bar__whatsnew {
  display: inline-flex;
  position: relative;
}
.bcn-help-bar__dot {
  background: var(--bcn-aldo);
  width: 8px;
  height: 8px;
  box-shadow: 0 0 0 2px var(--bcn-helpbar-bg-solid);
  pointer-events: none;
  border-radius: 50%;
  position: absolute;
  top: 7px;
  right: 7px;
}
.bcn-help-bar__panel {
  width: 340px;
  max-width: 84vw;
  color: var(--color-content-default);
}
.bcn-help-bar__panel-header {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
  display: flex;
}
.bcn-help-bar__panel-title {
  font-size: var(--font-size-200, 0.9375rem);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-help-bar__panel-release {
  font-size: var(--font-size-150, 0.875rem);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  margin: 0;
}
.bcn-help-bar__panel-list {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-help-bar__panel-link {
  padding: var(--spacing-150) var(--spacing-150);
  margin: 0 calc(var(--spacing-150) * -1);
  border-radius: var(--radius-200, 8px);
  color: inherit;
  transition: background var(--transition-fast, 0.15s ease);
  text-decoration: none;
  display: block;
}
.bcn-help-bar__panel-item-title {
  font-family: var(--font-decorative);
  font-size: 1.0625rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0 0 2px;
  line-height: 1.3;
}
.bcn-help-bar__panel-item-blurb {
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-regular, 400);
  color: var(--color-content-default-secondary);
  margin: 0;
  line-height: 1.45;
}
.bcn-help-bar__panel-footer {
  margin-top: var(--spacing-300);
  padding-top: var(--spacing-250, 0.625rem);
  border-top: 1px solid var(--color-border-default);
}
.bcn-help-bar__panel-all {
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-link);
  align-items: center;
  gap: 4px;
  text-decoration: none;
  display: inline-flex;
}
.bcn-help-bar__panel-all-arrow {
  transition: transform 0.15s;
}
.bcn-gd {
  --z-modal-backdrop: 1300;
  --z-modal: 1301;
  --side-dialog-width: 460px;
  --side-dialog-backdrop-filter: blur(2px);
}
.bcn-gd__header {
  align-items: center;
  gap: var(--spacing-300);
  min-width: 0;
  display: flex;
}
.bcn-aldo-mark[data-size="md"] {
  width: 40px;
  height: 40px;
}
.bcn-gd__title {
  font-family: var(--font-decorative);
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: 1.2;
}
.bcn-gd__stream {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-gd-msg {
  gap: var(--spacing-300);
  align-items: flex-start;
  display: flex;
}
.bcn-gd-msg__avatar {
  flex: none;
  margin-top: 2px;
}
.bcn-gd-msg__group {
  gap: var(--spacing-500);
  flex-direction: column;
  flex: 1;
  min-width: 0;
  display: flex;
}
.bcn-gd__section {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-gd__label {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-250);
  font-weight: var(--typography-font-weight-bold);
  color: var(--color-content-default);
  margin: 0;
  display: flex;
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd__here {
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--bcn-aldo-50);
  border: 1px solid var(--bcn-aldo-100);
  border-radius: var(--radius-200);
  flex-direction: column;
  gap: 4px;
  display: flex;
}
.bcn-gd__here-page {
  font-size: var(--font-size-250);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-gd__here-purpose {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  line-height: 1.5;
}
.bcn-gd__rows {
  flex-direction: column;
  display: flex;
}
[data-gd-chat] {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
[data-gd-chat]:empty {
  display: none;
}
.bcn-gd__foot {
  gap: var(--spacing-250);
  flex-direction: column;
  display: flex;
}
.bcn-gd__browse {
  align-self: flex-end;
  align-items: center;
  gap: var(--spacing-150);
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-background-brand);
  text-decoration: none;
  display: inline-flex;
}
.bcn-gd-composer {
  align-items: flex-end;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-150) var(--spacing-150) var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  transition:
    border-color 0.15s,
    box-shadow 0.15s;
  display: flex;
}
.bcn-gd-composer__input {
  resize: none;
  min-width: 0;
  font-family: inherit;
  font-size: var(--font-size-200);
  color: var(--color-content-default);
  background: 0 0;
  border: 0;
  outline: 0;
  flex: 1;
  padding: 6px 0;
  line-height: 1.5;
  overflow-y: hidden;
}
.bcn-gd-composer__input::placeholder {
  color: var(--color-content-default-tertiary);
}
.bcn-gd-composer__send {
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  width: 32px;
  height: 32px;
  color: var(--color-content-default-knockout);
  cursor: pointer;
  border: 0;
  flex: none;
  justify-content: center;
  align-items: center;
  transition:
    background 0.15s,
    color 0.15s;
  display: inline-flex;
}
.bcn-gd-composer__send:disabled {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default-tertiary);
  cursor: default;
}
.bcn-gd-article {
  --z-modal-backdrop: 1302;
  --z-modal: 1303;
  --side-dialog-width: 460px;
  --side-dialog-backdrop-filter: blur(2px);
}
.bcn-gd-article__head {
  gap: var(--spacing-200);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-gd-article__back {
  align-items: center;
  gap: var(--spacing-100);
  font: inherit;
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  cursor: pointer;
  background: 0 0;
  border: 0;
  align-self: flex-start;
  padding: 0;
  display: inline-flex;
}
.bcn-gd-article__titlerow {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  display: flex;
}
.bcn-gd-article__title {
  font-family: var(--font-decorative);
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: 1.25;
}
.bcn-gd-article__kind {
  border-radius: var(--radius-100);
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  flex: none;
  padding: 1px 6px;
  line-height: 1.5;
}
.bcn-gd-article__panel[hidden] {
  display: none;
}
.bcn-bottom-drawer {
  --_width: var(--bcn-bottom-drawer-width, 90vw);
  --_height: var(--bcn-bottom-drawer-height, 80vh);
  --_inset: var(--bcn-bottom-drawer-inset, 0px);
  --_z: var(--bcn-bottom-drawer-z, 1400);
  display: contents;
}
#bcn-evidence-drawer {
  --bcn-bottom-drawer-width: 96vw;
  --bcn-bottom-drawer-height: 92vh;
  --bcn-bottom-drawer-z: 1400;
  --form-border-color-focus: var(--color-background-brand-muted);
  --focus-ring-color: color-mix(in srgb, var(--color-background-brand-muted) 30%, transparent);
  --focus-ring-width: 2px;
  --color-content-brand: var(--color-background-brand);
  --bcn-ev-search-gap: var(--spacing-250, 0.625rem);
  --card-padding: var(--spacing-200, 0.5rem);
}
.bcn-bottom-drawer__backdrop {
  background: var(--color-background-overlay-backdrop, #00000080);
  backdrop-filter: blur(2px);
  z-index: var(--_z);
  animation: 0.15s bcn-bd-fade;
  position: fixed;
  inset: 0;
}
.bcn-bottom-drawer:not([open]):not([closing]) .bcn-bottom-drawer__backdrop,
.bcn-bottom-drawer:not([open]):not([closing]) .bcn-bottom-drawer__panel {
  display: none;
}
.bcn-bottom-drawer__panel {
  left: 50%;
  bottom: var(--_inset);
  width: min(var(--_width), calc(100vw - var(--_inset) * 2));
  height: var(--_height);
  background: var(--color-background-elevation-raised);
  border-radius: var(--radius-300) var(--radius-300) 0 0;
  z-index: calc(var(--_z) + 1);
  outline: none;
  flex-direction: column;
  animation: 0.3s cubic-bezier(0.16, 1, 0.3, 1) bcn-bd-up;
  display: flex;
  position: fixed;
  overflow: hidden;
  transform: translate(-50%);
  box-shadow: 0 -12px 48px -12px #00000052;
}
.esa-card__header {
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: var(--border-width-default, 1px) solid var(--_card-header-border);
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  display: flex;
}
.esa-card__footer {
  padding: var(--spacing-300, 0.75rem) var(--_card-padding);
  border-top: var(--border-width-default, 1px) solid var(--_card-header-border);
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
:host {
  --_popover-bg: var(--color-background-elevation-raised, #fcfcfc);
  --_popover-border: var(--color-border-default, #cecece);
  --_popover-shadow: var(--elevation-4, 0 6px 24px -6px rgba(0, 0, 0, 0.07));
  --_popover-radius: var(--radius-md, 0.5rem);
  --_popover-padding: var(--spacing-300, 0.75rem);
  --_popover-arrow-size: 8px;
  --_popover-color: var(--color-content-default, #202020);
  display: inline-block;
}
.esa-popover-anchor {
  position: relative;
  display: inline-block;
}
:host {
  display: inline-block;
}
.esa-dropdown {
  position: relative;
  display: inline-block;
}
.esa-dropdown__trigger {
  display: inline-block;
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
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
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.typography-display-sm {
  font-family: var(--typography-display-sm-font-family);
  font-size: var(--typography-display-sm-font-size);
  font-weight: var(--typography-display-sm-font-weight);
  line-height: var(--typography-display-sm-line-height);
  letter-spacing: var(--typography-display-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
```

## Tokens
| Token | Value | Tier |
|---|---|---|
| `--animation-overlay-enter` | `.25s ease-out` | semantic |
| `--badge-bg` | `#43608a` | component |
| `--badge-text-color` | `#fcfcfc` | component |
| `--bcn-aldo` | `#08908b` | component |
| `--bcn-aldo-100` | `#cfeceb` | component |
| `--bcn-aldo-50` | `#e8f6f5` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-200` | `#dcdcdc` | component |
| `--bcn-gray-300` | `#bdbdbd` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-50` | `#fafafa` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-600` | `#656565` | component |
| `--bcn-gray-900` | `#3d3d3d` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-helpbar-bg` | `#17191bc7` | component |
| `--bcn-helpbar-bg-solid` | `#1f2224` | component |
| `--bcn-helpbar-border` | `#ffffff1f` | component |
| `--bcn-helpbar-divider` | `#ffffff29` | component |
| `--bcn-helpbar-fg` | `#ffffffeb` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--color-background-accent` | `#f76b15` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-floating` | `#fcfcfc` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-overlay-backdrop` | `#00000080` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-danger-hover` | `#641723` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--dialog-width` | `480px` | component |
| `--dialog-width-lg` | `640px` | component |
| `--elevation-4` | `0 6px 24px -6px #00000012` | semantic |
| `--elevation-5` | `0 8px 32px -8px #00000014` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-250` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--font-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--font-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |
| `--font-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | primitive |
| `--form-border-color` | `#dcdcdc` | component |
| `--form-border-width` | `1px` | component |
| `--form-label-color` | `#525252` | component |
| `--icon-size-lg` | `24px` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-400` | `.75rem` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-lg` | `.75rem` | semantic |
| `--radius-md` | `.25rem` | semantic |
| `--radius-sm` | `.25rem` | semantic |
| `--radius-xs` | `.125rem` | semantic |
| `--side-dialog-inset` | `16px` | component |
| `--side-dialog-width` | `400px` | component |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--spacing-700` | `3rem` | primitive |
| `--stat-accent-color` | `#3a7c59` | component |
| `--stat-value-color` | `#3d3d3d` | component |
| `--stat-value-size` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | component |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `350` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `350` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-display-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-display-sm-font-size` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | semantic |
| `--typography-display-sm-font-weight` | `650` | semantic |
| `--typography-display-sm-letter-spacing` | `-.01em` | semantic |
| `--typography-display-sm-line-height` | `1.3` | semantic |
| `--typography-font-family-display` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `350` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-label-xs-font-weight` | `500` | semantic |
| `--typography-label-xs-letter-spacing` | `.01em` | semantic |
| `--typography-label-xs-line-height` | `1.6` | semantic |
| `--typography-meta-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-meta-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-meta-font-weight` | `350` | semantic |
| `--typography-meta-letter-spacing` | `.01em` | semantic |
| `--typography-meta-line-height` | `1.6` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |
| `--typography-microcopy-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-microcopy-sm-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-sm-strong-line-height` | `1` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
| `--typography-microcopy-xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-strong-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-strong-line-height` | `1` | semantic |
| `--typography-title-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-sm-strong-font-size` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | semantic |
| `--typography-title-sm-strong-font-weight` | `550` | semantic |
| `--typography-title-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-sm-strong-line-height` | `1.6` | semantic |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
