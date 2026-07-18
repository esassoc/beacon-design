# Site Clearance

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-site-clearance** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/site-clearance/
- **Section element:** `<div>`
- **Components:** esa-badge (hub), esa-button (hub), esa-collapsible (hub), esa-empty-state (hub), esa-filter-clear-button (hub), esa-filter-container (hub), esa-icon (hub), esa-icon-button (hub), esa-pill (hub)

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
        </svg>
      </button>
      <button type="button" class="tenant-trigger">
        <span>Delta Conveyance</span>
        <span class="esa-icon esa-icon--xs" aria-hidden="true">
          <svg
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
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </span>
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
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
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
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </span>
        <span class="bcn-search-trigger__placeholder">Search…</span>
        <span class="bcn-search-trigger__kbd" aria-hidden="true"> <kbd>/</kbd> </span>
      </button>
    </div>
    <!-- Right: QA badge, search, config/admin icon-buttons, user menu -->
    <div class="topbar__right">
      <span class="qa-warning">
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
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
            <path d="M12 17h.01"></path>
          </svg>
        </span>
        QA
      </span>
      <a href="#esa-config" class="icon-button" aria-label="ESA-Config">
        <span class="esa-icon esa-icon--md" aria-hidden="true">
          <svg
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
            <line x1="16" x2="16" y1="18" y2="22"></line>
          </svg>
        </span>
      </a>
      <a
        class="esa-icon-button esa-icon-button--md"
        href="#admin"
        aria-label="Admin settings"
        title="Admin settings"
      >
        <span class="esa-icon esa-icon--md" aria-hidden="true">
          <svg
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
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </span>
      </a>
      <div class="user-menu" id="user-menu">
        <button
          type="button"
          class="user-menu-trigger"
          id="user-menu-trigger"
          aria-label="User menu"
          aria-expanded="false"
        >
          <span class="user-menu-trigger__avatar user-menu-trigger__avatar--fallback">
            <span class="esa-icon esa-icon--md" aria-hidden="true">
              <svg
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
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </span>
          </span>
        </button>
        <div class="user-panel" id="user-panel" hidden="">
          <div class="user-panel__header">
            <div class="user-panel__avatar-wrapper">
              <span class="user-panel__avatar user-panel__avatar--fallback">
                <span class="esa-icon esa-icon--lg" aria-hidden="true">
                  <svg
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
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </span>
              </span>
            </div>
            <div class="user-panel__info">
              <span class="user-panel__name">Andy Lovseth</span>
              <span class="user-panel__email">andy.lovseth@esassoc.com</span>
            </div>
          </div>
          <div class="user-panel__menu">
            <button type="button" class="user-panel__item">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
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
                  <path d="m15 5 4 4"></path>
                </svg>
              </span>
              <span>Edit Profile</span>
            </button>
            <a class="user-panel__item" href="#help">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
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
                  <path d="M12 17h.01"></path>
                </svg>
              </span>
              <span>Get Help</span>
            </a>
            <button type="button" class="user-panel__item user-panel__item--danger">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
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
                  <line x1="21" x2="9" y1="12" y2="12"></line>
                </svg>
              </span>
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
          <img src="/beacon-design/beacon-icon.svg" alt="Beacon" class="site-logo__img" />
        </a>
      </div>
      <!-- project-switcher (ported from project-switcher.component) -->
      <div class="project-switcher-container">
        <button type="button" class="project-switcher__trigger">
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
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
              ></path>
            </svg>
          </span>
          <span class="project-switcher__name">Delta Conveyance Project</span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </span>
        </button>
      </div>
      <div class="main-nav">
        <div class="nav-section">
          <a href="#setup-wizard" class="nav-section__header nav-section__header--link">
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
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
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </span>
            <span class="nav-section__title">Setup Wizard</span>
          </a>
        </div>
        <div class="nav-section nav-section--collapsed">
          <button type="button" class="nav-section__header" aria-expanded="false">
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
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
                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
              </svg>
            </span>
            <span class="nav-section__title">Project</span>
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>
          </button>
          <ul class="nav-section__items">
            <li class="nav-item"><a href="#dashboard" class="nav-sublink"> Dashboard </a></li>
            <li class="nav-item">
              <a href="#source-documents" class="nav-sublink"> Source Documents </a>
            </li>
            <li class="nav-item"><a href="#commitments" class="nav-sublink"> Commitments </a></li>
            <li class="nav-item"><a href="#requirements" class="nav-sublink"> Requirements </a></li>
            <li class="nav-item">
              <a href="#organize-actions" class="nav-sublink"> Organize Actions </a>
            </li>
            <li class="nav-item"><a href="#action-lists" class="nav-sublink"> Action Lists </a></li>
            <li class="nav-item">
              <a href="#document-reviews" class="nav-sublink"> Document Reviews </a>
            </li>
            <li class="nav-item">
              <a href="#spatial-library-layers" class="nav-sublink"> Spatial Library Layers </a>
            </li>
          </ul>
        </div>
        <hr class="nav-divider" aria-hidden="true" />
        <div class="nav-section nav-section--collapsed">
          <button type="button" class="nav-section__header" aria-expanded="false">
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
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
                <path d="m13.41 10.59 5.66-5.66"></path>
              </svg>
            </span>
            <span class="nav-section__title">Tracking</span>
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>
          </button>
          <ul class="nav-section__items">
            <li class="nav-item">
              <a href="#tracking-summary" class="nav-sublink"> Tracking Summary </a>
            </li>
            <li class="nav-item">
              <a href="#project-tracking" class="nav-sublink"> Project Tracking </a>
            </li>
            <li class="nav-item">
              <a href="/beacon-design/prototypes/permit-tracking" class="nav-sublink">
                Permit Tracking
              </a>
            </li>
            <li class="nav-item">
              <a href="#all-components" class="nav-sublink"> All Components </a>
            </li>
          </ul>
        </div>
        <div class="nav-section nav-section--active">
          <button type="button" class="nav-section__header" aria-expanded="true">
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
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
                ></path>
              </svg>
            </span>
            <span class="nav-section__title">Monitoring</span>
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>
          </button>
          <ul class="nav-section__items">
            <li class="nav-item">
              <a href="/beacon-design/prototypes/monitoring/dashboard" class="nav-sublink">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a
                href="/beacon-design/prototypes/monitoring/compliance-concerns"
                class="nav-sublink"
              >
                Compliance Concerns
              </a>
            </li>
            <li class="nav-item">
              <a href="/beacon-design/prototypes/monitoring/nesting-birds" class="nav-sublink">
                Nesting Birds
              </a>
            </li>
            <li class="nav-item">
              <a
                href="/beacon-design/prototypes/monitoring/biological-resources"
                class="nav-sublink"
              >
                Biological Resources
              </a>
            </li>
            <li class="nav-item">
              <a
                href="/beacon-design/prototypes/monitoring/daily-monitoring-reports"
                class="nav-sublink"
              >
                Daily Monitoring Reports
              </a>
            </li>
            <li class="nav-item">
              <a href="/beacon-design/prototypes/monitoring/surveys" class="nav-sublink">
                Surveys
              </a>
            </li>
            <li class="nav-item">
              <a href="/beacon-design/prototypes/monitoring/all-observations" class="nav-sublink">
                All Observations
              </a>
            </li>
            <li class="nav-subdivider" aria-hidden="true"></li>
            <li class="nav-item">
              <a href="/beacon-design/prototypes/site-clearance" class="nav-sublink active">
                Site Clearance
              </a>
            </li>
          </ul>
        </div>
        <div class="nav-section nav-section--collapsed">
          <button type="button" class="nav-section__header" aria-expanded="false">
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
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
                <path d="M8 16h.01"></path>
              </svg>
            </span>
            <span class="nav-section__title">Reporting</span>
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>
          </button>
          <ul class="nav-section__items">
            <li class="nav-item">
              <a href="#progress-report" class="nav-sublink"> Progress Report </a>
            </li>
            <li class="nav-item">
              <a href="#report-center" class="nav-sublink"> Report Center </a>
            </li>
          </ul>
        </div>
        <hr class="nav-divider" aria-hidden="true" />
        <div class="nav-section nav-section--collapsed">
          <button type="button" class="nav-section__header" aria-expanded="false">
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
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
                <path d="M3 12A9 3 0 0 0 21 12"></path>
              </svg>
            </span>
            <span class="nav-section__title">Data Catalog</span>
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>
          </button>
          <ul class="nav-section__items">
            <li class="nav-item">
              <a href="#dc-source-documents" class="nav-sublink"> Source Documents </a>
            </li>
            <li class="nav-item">
              <a href="#dc-commitments" class="nav-sublink"> Commitments </a>
            </li>
            <li class="nav-item">
              <a href="#dc-requirements" class="nav-sublink"> Requirements </a>
            </li>
            <li class="nav-item"><a href="#dc-actions" class="nav-sublink"> Actions </a></li>
            <li class="nav-item"><a href="#dc-all-data" class="nav-sublink"> All Data </a></li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- content -->
    <div class="modern-layout__content">
      <style>
        :root {
          --st-blocked: #d73027;
          --st-provisional-block: #d73027;
          --st-inaccessible: #f46d43;
          --st-not-surveyed: #9aa0a6;
          --st-survey-scheduled: #74add1;
          --st-cleared-stipulations: #8db94e;
          --st-cleared: #1a9850;
          --st-not-required: #989898;
          --st-neutral: #8a9099;
          --obs-color: #7b5ea7;
          --obs-color-strong: #5b3f87;
        }
      </style>
      <div class="page-layout">
        <div class="page-layout__container">
          <section class="page-layout__breadcrumbs">
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <div class="breadcrumbs__items">
                <span class="esa-icon esa-icon--sm" aria-hidden="true">
                  <svg
                    width="16"
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
                    ></path>
                  </svg>
                </span>
                <a class="breadcrumb-item" href="#monitoring"> Monitoring </a
                ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </span>
                <a class="breadcrumb-item" href="#monitoring-portal"> Monitoring Portal </a
                ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </span>
                <span class="breadcrumb-item" aria-current="page"> Site Clearance </span>
              </div>
            </nav>
          </section>
          <section class="page-layout__title">
            <div class="page-layout__title-main">
              <h1>
                <span class="esa-icon esa-icon--md" aria-hidden="true">
                  <svg
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
                      d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
                    ></path>
                    <path d="M15 5.764v15"></path>
                    <path d="M9 3.236v15"></path>
                  </svg>
                </span>
                Site Clearance
              </h1>
            </div>
          </section>
          <section class="page-layout__content">
            <script type="module">
              document.querySelectorAll("[data-esa-filter-clear]").forEach((e) => {
                e.addEventListener("click", () => {
                  e.dispatchEvent(
                    new CustomEvent("esa-filter-clear", { bubbles: !0, composed: !0 }),
                  );
                });
              });
            </script>
            <esa-tab-layout id="gc-tabs" appearance="underline" size="md" variant="underline">
              <!-- ═══ TAB 1 — MAP (the hero: can we start work at this site on its date?) ═══ -->
              <section slot="panel-0" class="map-panel" aria-label="Clearance status map">
                <!-- Print-only header (filled on beforeprint) -->
                <div class="print-header" aria-hidden="true">
                  <span class="print-header__title">Site Clearance</span>
                  <span class="print-header__meta" id="print-meta"></span>
                </div>
                <!-- View presets + map filters. The presets band is an opinionated shortcut
             over the SAME facet state the Status dropdown edits (one source of
             truth): pressing a preset sets the facets; a preset reads as selected
             only while the facets exactly equal its set, so hand-editing the
             dropdown drops back to no-preset. Counts ride the labels as plain
             text (the lego renders label strings — an esa-badge inside a segment
             would fight it). The filter row scopes markers AND the readiness
             strip. The go-to comboboxes on the View row's right (round-5 ch2)
             are jumps, not filters: type-ahead or pick any of the 231 work-area
             IDs / any observation → pan/zoom + pulse (no drawer), then reset to
             the placeholder. -->
                <div class="map-filterbar">
                  <div class="map-filterbar__row">
                    <span class="map-filterbar__label">View</span>
                    <!-- size="md" (round-5 ch1): the View presets one type-size step up
                 (sm 12px/28px → md 14px/36px) — the lego's own size prop, no
                 override; matches the Data tab's pivot toggle. -->
                    <esa-button-toggle id="view-presets" value="all" size="md"></esa-button-toggle>
                    <div class="map-filterbar__goto">
                      <esa-combobox
                        id="goto-wa"
                        mode="autocomplete"
                        size="sm"
                        placeholder="Go to work area…"
                      ></esa-combobox>
                      <esa-combobox
                        id="goto-obs"
                        mode="autocomplete"
                        size="sm"
                        placeholder="Go to observation…"
                      ></esa-combobox>
                    </div>
                  </div>
                  <div class="map-filterbar__row">
                    <span class="map-filterbar__label">Filters</span>
                    <div
                      class="esa-filter-container"
                      style="
                        --_filter-container-gap: var(
                          --filter-container-gap,
                          var(--spacing-300, 0.75rem)
                        );
                        --_filter-container-row-gap: var(--spacing-200, 0.5rem);
                      "
                    >
                      <esa-filter-dropdown
                        id="map-flt-status"
                        label="Status"
                        multiple=""
                        size="sm"
                      ></esa-filter-dropdown>
                      <esa-filter-dropdown
                        id="map-flt-start"
                        label="Planned start"
                        multiple=""
                        size="sm"
                      ></esa-filter-dropdown>
                    </div>
                    <span id="map-clear-filters"
                      ><button
                        class="esa-filter-clear-button"
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
                        ><span class="esa-filter-clear-button__label">Clear all</span>
                      </button></span
                    >
                  </div>
                </div>
                <div class="map-wrap">
                  <div
                    id="gc-map"
                    class="map leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
                    tabindex="0"
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
                              z-index: 20;
                              transform: translate3d(0px, 0px, 0px) scale(0.707107);
                            "
                          >
                            <img
                              alt=""
                              src="https://a.basemaps.cartocdn.com/light_all/10/166/394.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(535px, 186px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://b.basemaps.cartocdn.com/light_all/10/166/395.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(535px, 442px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://d.basemaps.cartocdn.com/light_all/10/165/394.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(279px, 186px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://b.basemaps.cartocdn.com/light_all/10/167/394.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(791px, 186px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://a.basemaps.cartocdn.com/light_all/10/165/395.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(279px, 442px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://c.basemaps.cartocdn.com/light_all/10/167/395.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(791px, 442px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://d.basemaps.cartocdn.com/light_all/10/166/393.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(535px, -70px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://c.basemaps.cartocdn.com/light_all/10/166/396.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(535px, 698px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://c.basemaps.cartocdn.com/light_all/10/165/393.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(279px, -70px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://a.basemaps.cartocdn.com/light_all/10/167/393.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(791px, -70px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://b.basemaps.cartocdn.com/light_all/10/165/396.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(279px, 698px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://d.basemaps.cartocdn.com/light_all/10/167/396.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(791px, 698px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://c.basemaps.cartocdn.com/light_all/10/164/394.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(23px, 186px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://c.basemaps.cartocdn.com/light_all/10/168/394.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(1047px, 186px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://d.basemaps.cartocdn.com/light_all/10/164/395.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(23px, 442px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://d.basemaps.cartocdn.com/light_all/10/168/395.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(1047px, 442px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://b.basemaps.cartocdn.com/light_all/10/164/393.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(23px, -70px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://b.basemaps.cartocdn.com/light_all/10/168/393.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(1047px, -70px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://a.basemaps.cartocdn.com/light_all/10/164/396.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(23px, 698px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://a.basemaps.cartocdn.com/light_all/10/168/396.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(1047px, 698px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://b.basemaps.cartocdn.com/light_all/10/163/394.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(-233px, 186px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://d.basemaps.cartocdn.com/light_all/10/169/394.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(1303px, 186px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://c.basemaps.cartocdn.com/light_all/10/163/395.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(-233px, 442px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://a.basemaps.cartocdn.com/light_all/10/169/395.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(1303px, 442px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://a.basemaps.cartocdn.com/light_all/10/163/393.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(-233px, -70px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://c.basemaps.cartocdn.com/light_all/10/169/393.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(1303px, -70px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://d.basemaps.cartocdn.com/light_all/10/163/396.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(-233px, 698px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://b.basemaps.cartocdn.com/light_all/10/169/396.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(1303px, 698px, 0px);
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
                          width="1121"
                          height="602"
                          viewBox="-93 -50 1121 602"
                          style="transform: translate3d(-93px, -50px, 0px)"
                        >
                          <g>
                            <path
                              class="leaflet-interactive"
                              stroke="#7b5ea7"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-dasharray="6 4"
                              fill="#7b5ea7"
                              fill-opacity="0.11"
                              fill-rule="evenodd"
                              d="M468.78180390962007,122.40075862559024a5,5 0 1,0 10,0 a5,5 0 1,0 -10,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#5b3f87"
                              stroke-opacity="1"
                              stroke-width="0.75"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#7b5ea7"
                              fill-opacity="1"
                              fill-rule="evenodd"
                              d="M471,122a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#7b5ea7"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-dasharray="6 4"
                              fill="#7b5ea7"
                              fill-opacity="0.11"
                              fill-rule="evenodd"
                              d="M480.7158894510976,114.61047572703683a1,1 0 1,0 2,0 a1,1 0 1,0 -2,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#5b3f87"
                              stroke-opacity="1"
                              stroke-width="0.75"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#7b5ea7"
                              fill-opacity="1"
                              fill-rule="evenodd"
                              d="M479,115a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#7b5ea7"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-dasharray="6 4"
                              fill="#7b5ea7"
                              fill-opacity="0.11"
                              fill-rule="evenodd"
                              d="M509.88442808687614,330.22006940926076a1,1 0 1,0 2,0 a1,1 0 1,0 -2,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#5b3f87"
                              stroke-opacity="1"
                              stroke-width="0.75"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#7b5ea7"
                              fill-opacity="1"
                              fill-rule="evenodd"
                              d="M508,330a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#7b5ea7"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-dasharray="6 4"
                              fill="#7b5ea7"
                              fill-opacity="0.11"
                              fill-rule="evenodd"
                              d="M483.85111216911537,198.8680505449738a1,1 0 1,0 2,0 a1,1 0 1,0 -2,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#5b3f87"
                              stroke-opacity="1"
                              stroke-width="0.75"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#7b5ea7"
                              fill-opacity="1"
                              fill-rule="evenodd"
                              d="M482,199a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#7b5ea7"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-dasharray="6 4"
                              fill="#7b5ea7"
                              fill-opacity="0.11"
                              fill-rule="evenodd"
                              d="M479.1475057429234,198.86804244312225a1,1 0 1,0 2,0 a1,1 0 1,0 -2,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#5b3f87"
                              stroke-opacity="1"
                              stroke-width="0.75"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#7b5ea7"
                              fill-opacity="1"
                              fill-rule="evenodd"
                              d="M477,199a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#7b5ea7"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-dasharray="6 4"
                              fill="#7b5ea7"
                              fill-opacity="0.11"
                              fill-rule="evenodd"
                              d="M508.93392371220034,331.18344763692585a1,1 0 1,0 2,0 a1,1 0 1,0 -2,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#5b3f87"
                              stroke-opacity="1"
                              stroke-width="0.75"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#7b5ea7"
                              fill-opacity="1"
                              fill-rule="evenodd"
                              d="M507,331a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#7b5ea7"
                              stroke-opacity="1"
                              stroke-width="0.75"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.9"
                              fill-rule="evenodd"
                              d="M512,331a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#7b5ea7"
                              stroke-opacity="1"
                              stroke-width="0.75"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.9"
                              fill-rule="evenodd"
                              d="M504,329a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M408,439a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M409,437a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M407,438a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#1a9850"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M408,439a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M408,439a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M408,439a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#1a9850"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M408,441a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M437,61a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M436,61a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M438,61a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M437,62a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M431,81a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M473,111a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M471,111a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M472,111a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,111a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M468,111a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M468,111a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,111a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M467,112a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,112a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M468,113a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,113a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M468,113a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M469,114a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,114a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M469,114a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,115a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M469,115a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,115a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M468,116a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,116a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M469,117a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M477,117a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M468,118a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M477,118a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M469,119a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M477,119a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M469,120a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,120a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M473,120a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M474,120a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M475,120a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M473,120a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M469,121a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M470,121a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M470,121a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M471,121a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M472,121a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M506,332a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M503,329a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M504,330a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M505,330a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#8db94e"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M506,330a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#d73027"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M508,331a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#f46d43"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M509,331a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M511,331a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#d73027"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M513,332a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#74add1"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M514,333a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M473,99a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M475,101a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M475,103a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M475,104a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,105a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,107a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,108a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,109a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,111a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,113a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M467,114a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M468,114a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M470,115a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M471,115a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M472,115a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M474,115a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M475,115a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,115a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M477,115a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M477,117a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M477,117a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M474,120a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M476,120a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M473,120a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M472,121a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M471,122a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M470,123a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M486,320a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M486,321a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M487,321a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M485,321a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M489,321a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M490,321a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M483,321a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M482,322a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M491,322a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M492,322a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M494,322a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M494,322a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M494,324a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M494,325a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M494,327a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M494,328a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M498,329a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M499,329a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M497,330a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M496,330a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M501,330a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#1a9850"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M502,330a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M503,330a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#8db94e"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M506,331a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M519,347a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M438,63a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M438,63a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M432,82a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M432,83a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M470,115a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M470,115a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M470,115a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M480,186a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M479,234a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M480,271a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M480,271a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M481,322a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M481,323a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M481,323a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M452,362a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M452,362a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#1a9850"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M408,439a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M436,90a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M440,95a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M452,103a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#1a9850"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M441,69a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M438,76a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M437,78a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M435,79a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M437,91a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M439,92a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M440,94a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M442,97a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M443,99a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M449,102a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M452,104a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M454,105a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M460,108a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M463,110a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M462,109a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M465,111a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M468,112a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M443,99a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M470,121a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M469,137a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M478,179a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M481,199a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M480,201a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M470,118a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M470,121a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#d73027"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M470,124a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="1"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#ffffff"
                              fill-opacity="0.92"
                              fill-rule="evenodd"
                              d="M469,126a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M469,128a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M469,130a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M469,140a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M479,182a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M481,188a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M481,192a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M481,194a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#f46d43"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M481,199a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M480,204a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M480,206a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M479,210a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M480,214a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M479,226a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M479,228a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M479,231a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M474,120a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M475,167a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M474,169a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M467,118a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M478,244a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M479,266a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M478,237a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M478,241a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M478,247a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M478,249a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M478,253a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M478,255a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M479,260a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M479,264a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M480,269a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M480,276a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M481,279a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M481,286a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M482,296a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M482,300a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M483,309a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M484,317a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M474,235a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M478,247a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M470,337a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M457,356a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M449,367a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M428,406a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M479,324a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M477,327a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M475,330a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M473,333a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M472,334a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M470,337a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M468,339a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M467,342a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M462,348a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M457,355a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M453,361a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M452,362a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M448,370a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M446,375a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M444,377a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M444,379a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M442,382a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M441,384a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M439,387a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M432,400a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M431,401a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M429,404a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M426,407a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M425,411a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M424,413a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M422,415a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M422,416a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M420,419a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M413,431a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="1"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="#9aa0a6"
                              fill-opacity="0.95"
                              fill-rule="evenodd"
                              d="M411,433a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0 "
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
                        style="transform: translate3d(30138.2px, 71440.9px, 0px) scale(362.039)"
                      ></div>
                    </div>
                    <div class="leaflet-control-container">
                      <div class="leaflet-top leaflet-left">
                        <div class="leaflet-control-zoom leaflet-bar leaflet-control">
                          <a
                            class="leaflet-control-zoom-in"
                            href="#"
                            title="Zoom in"
                            role="button"
                            aria-label="Zoom in"
                            aria-disabled="false"
                            ><span aria-hidden="true">+</span></a
                          ><a
                            class="leaflet-control-zoom-out"
                            href="#"
                            title="Zoom out"
                            role="button"
                            aria-label="Zoom out"
                            aria-disabled="false"
                            ><span aria-hidden="true">−</span></a
                          >
                        </div>
                        <div class="leaflet-bar gc-reset leaflet-control">
                          <a
                            class="gc-reset__btn"
                            href="#"
                            title="Reset view to all work areas"
                            role="button"
                            aria-label="Reset view to all work areas"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                              <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                              <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                              <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg
                          ></a>
                        </div>
                      </div>
                      <div class="leaflet-top leaflet-right"></div>
                      <div class="leaflet-bottom leaflet-left"></div>
                      <div class="leaflet-bottom leaflet-right">
                        <div class="leaflet-control-attribution leaflet-control">
                          <a
                            href="https://leafletjs.com"
                            title="A JavaScript library for interactive maps"
                            ><svg
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="8"
                              viewBox="0 0 12 8"
                              class="leaflet-attribution-flag"
                            >
                              <path fill="#4C7BE1" d="M0 0h12v4H0z"></path>
                              <path fill="#FFD500" d="M0 4h12v3H0z"></path>
                              <path fill="#E0BC00" d="M0 7h12v1H0z"></path>
                            </svg>
                            Leaflet</a
                          >
                          <span aria-hidden="true">|</span> © OpenStreetMap © CARTO
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="map-legend" aria-label="Clearance status legend">
                    <span class="map-legend__title">Work area status</span>
                    <span class="map-legend__row">
                      <span class="map-legend__dot" style="background: var(--st-blocked)"></span>
                      Blocked </span
                    ><span class="map-legend__row">
                      <span
                        class="map-legend__dot"
                        style="
                          background: var(--color-surface);
                          border: 2px solid var(--st-provisional-block);
                          box-sizing: border-box;
                        "
                      ></span>
                      Provisional Block </span
                    ><span class="map-legend__row">
                      <span
                        class="map-legend__dot"
                        style="background: var(--st-inaccessible)"
                      ></span>
                      Inaccessible </span
                    ><span class="map-legend__row">
                      <span
                        class="map-legend__dot"
                        style="background: var(--st-not-surveyed)"
                      ></span>
                      Not Surveyed </span
                    ><span class="map-legend__row">
                      <span
                        class="map-legend__dot"
                        style="background: var(--st-survey-scheduled)"
                      ></span>
                      Survey Scheduled </span
                    ><span class="map-legend__row">
                      <span
                        class="map-legend__dot"
                        style="background: var(--st-cleared-stipulations)"
                      ></span>
                      Cleared w/ Stipulations </span
                    ><span class="map-legend__row">
                      <span class="map-legend__dot" style="background: var(--st-cleared)"></span>
                      Cleared
                    </span>
                    <span class="map-legend__row">
                      <span class="map-legend__ring"></span>
                      Observation buffer
                    </span>
                    <span class="map-legend__row">
                      <span class="map-legend__hollow"></span>
                      Tracking-only sighting
                    </span>
                  </div>
                </div>
                <!-- Readiness strip — the census figure below the map -->
                <section class="readiness" aria-label="Work areas by clearance status">
                  <div class="readiness__head">
                    <span class="readiness__title">Work areas by clearance status</span>
                    <span class="readiness__summary">
                      Ready to drill <strong id="rs-ready">7</strong>
                      <span id="rs-total">of 231 work areas</span>
                    </span>
                  </div>
                  <div
                    class="readiness__bar"
                    id="rs-bar"
                    role="img"
                    aria-label="7 of 231 work areas ready"
                  >
                    <div
                      title="Blocked: 3"
                      style="height: 100%; flex: 0 0 1.2987%; background: var(--st-blocked)"
                    ></div>
                    <div
                      title="Provisional Block: 18"
                      style="
                        height: 100%;
                        flex: 0 0 7.79221%;
                        background: repeating-linear-gradient(
                          135deg,
                          var(--st-provisional-block) 0 4px,
                          var(--color-surface) 4px 7px
                        );
                      "
                    ></div>
                    <div
                      title="Inaccessible: 2"
                      style="height: 100%; flex: 0 0 0.865801%; background: var(--st-inaccessible)"
                    ></div>
                    <div
                      title="Not Surveyed: 200"
                      style="height: 100%; flex: 0 0 86.5801%; background: var(--st-not-surveyed)"
                    ></div>
                    <div
                      title="Survey Scheduled: 1"
                      style="
                        height: 100%;
                        flex: 0 0 0.4329%;
                        background: var(--st-survey-scheduled);
                      "
                    ></div>
                    <div
                      title="Cleared w/ Stipulations: 2"
                      style="
                        height: 100%;
                        flex: 0 0 0.865801%;
                        background: var(--st-cleared-stipulations);
                      "
                    ></div>
                    <div
                      title="Cleared: 5"
                      style="height: 100%; flex: 0 0 2.1645%; background: var(--st-cleared)"
                    ></div>
                  </div>
                  <ul class="readiness__legend">
                    <li class="readiness__legend-item" data-rs-item="blocked" data-empty="false">
                      <span class="readiness__swatch" style="background: var(--st-blocked)"></span>
                      <span class="readiness__legend-label">Blocked</span>
                      <span class="readiness__legend-count" data-rs-count="blocked">3</span>
                    </li>
                    <li
                      class="readiness__legend-item"
                      data-rs-item="provisional-block"
                      data-empty="false"
                    >
                      <span
                        class="readiness__swatch"
                        style="
                          background: var(--color-surface);
                          border: 2px solid var(--st-provisional-block);
                          box-sizing: border-box;
                        "
                      ></span>
                      <span class="readiness__legend-label">Provisional Block</span>
                      <span class="readiness__legend-count" data-rs-count="provisional-block"
                        >18</span
                      >
                    </li>
                    <li
                      class="readiness__legend-item"
                      data-rs-item="inaccessible"
                      data-empty="false"
                    >
                      <span
                        class="readiness__swatch"
                        style="background: var(--st-inaccessible)"
                      ></span>
                      <span class="readiness__legend-label">Inaccessible</span>
                      <span class="readiness__legend-count" data-rs-count="inaccessible">2</span>
                    </li>
                    <li
                      class="readiness__legend-item"
                      data-rs-item="not-surveyed"
                      data-empty="false"
                    >
                      <span
                        class="readiness__swatch"
                        style="background: var(--st-not-surveyed)"
                      ></span>
                      <span class="readiness__legend-label">Not Surveyed</span>
                      <span class="readiness__legend-count" data-rs-count="not-surveyed">200</span>
                    </li>
                    <li
                      class="readiness__legend-item"
                      data-rs-item="survey-scheduled"
                      data-empty="false"
                    >
                      <span
                        class="readiness__swatch"
                        style="background: var(--st-survey-scheduled)"
                      ></span>
                      <span class="readiness__legend-label">Survey Scheduled</span>
                      <span class="readiness__legend-count" data-rs-count="survey-scheduled"
                        >1</span
                      >
                    </li>
                    <li
                      class="readiness__legend-item"
                      data-rs-item="cleared-stipulations"
                      data-empty="false"
                    >
                      <span
                        class="readiness__swatch"
                        style="background: var(--st-cleared-stipulations)"
                      ></span>
                      <span class="readiness__legend-label">Cleared w/ Stipulations</span>
                      <span class="readiness__legend-count" data-rs-count="cleared-stipulations"
                        >2</span
                      >
                    </li>
                    <li class="readiness__legend-item" data-rs-item="cleared" data-empty="false">
                      <span class="readiness__swatch" style="background: var(--st-cleared)"></span>
                      <span class="readiness__legend-label">Cleared</span>
                      <span class="readiness__legend-count" data-rs-count="cleared">5</span>
                    </li>
                  </ul>
                </section>
              </section>
              <!-- ═══ TAB 2 — DATA (requirement-tracker filter bar + beacon AG Grids) ═══ -->
              <section slot="panel-1" class="data-panel" aria-label="Clearance data workspace">
                <div class="bcn-filterbar">
                  <div class="bcn-filterbar__top">
                    <div class="bcn-filterbar__group">
                      <span class="bcn-filterbar__label">View</span>
                      <esa-button-toggle
                        id="pivot-toggle"
                        value="workareas"
                        size="md"
                      ></esa-button-toggle>
                    </div>
                    <div class="bcn-filterbar__search">
                      <esa-text-field
                        id="gc-search"
                        placeholder="Search work areas…"
                        size="md"
                      ></esa-text-field>
                      <span id="gc-search-clear" hidden=""
                        ><button
                          class="esa-icon-button esa-icon-button--sm"
                          type="button"
                          aria-label="Clear search"
                          title="Clear search"
                        >
                          <span class="esa-icon esa-icon--sm" aria-hidden="true">
                            <svg
                              width="16"
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
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </div>
                  <div class="bcn-filterbar__bottom">
                    <span class="bcn-filterbar__label">Filters</span>
                    <div
                      class="esa-filter-container"
                      style="
                        --_filter-container-gap: var(
                          --filter-container-gap,
                          var(--spacing-300, 0.75rem)
                        );
                        --_filter-container-row-gap: var(--spacing-200, 0.5rem);
                      "
                    >
                      <esa-filter-dropdown
                        id="flt-status"
                        label="Status"
                        multiple=""
                        size="sm"
                      ></esa-filter-dropdown>
                    </div>
                    <span id="gc-clear-filters" class="bcn-filterbar__clear"
                      ><button
                        class="esa-filter-clear-button"
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
                        ><span class="esa-filter-clear-button__label">Clear all</span>
                      </button></span
                    >
                  </div>
                </div>
                <div class="bcn-view-pane" id="pane-was">
                  <div id="grid-was" class="gc-grid"></div>
                </div>
                <div class="bcn-view-pane" id="pane-obs" hidden="">
                  <div id="grid-obs" class="gc-grid"></div>
                </div>
                <div class="table-footer">
                  <span id="gc-download"
                    ><span
                      class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
                    >
                      <button class="esa-button__native" type="button">
                        <span class="esa-icon esa-icon--sm" aria-hidden="true">
                          <svg
                            width="16"
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
                            <line x1="12" x2="12" y1="15" y2="3"></line>
                          </svg>
                        </span>
                        <span class="esa-button__label"> Download as CSV </span>
                      </button>
                    </span>
                  </span>
                  <div class="row-count-data">
                    Total Records: <span id="gc-total">0</span>
                    <span id="gc-filtered" class="filtered-rows-count" hidden=""></span>
                  </div>
                </div>
              </section>
              <!-- ═══ TAB 3 — TIMELINE ("when does work become available, and in what
           status?"). Adapted from permit-tracking's clear-to-build timeline:
           one shared auto-ranged time axis + a TODAY marker line (fixture
           clock), three swimlanes of one-row-per-site date-positioned status
           dots (the permit-tracking stagger — rows never collide):
             Work starts            cleared / cleared-stipulations /
                                    notification-pipeline sites @ plannedStartDate
             Clearance visits       sites with survey-scheduled gates @ ONE dot
                                    per work area — the earliest upcoming
                                    visit/review date (round-5 ch4)
             Blocks expected to lift  blocked + provisional-block sites @
                                    blockedUntil (indefinite GGS blocks counted
                                    in the side note, not plotted)
           Everything is JS-derived from the store (lanes re-derive after every
           save / Confirm block); rows open the work-area drawer. ═══ -->
              <section slot="panel-2" class="tl-panel" aria-label="Clearance timeline">
                <section class="tl" aria-label="Work availability timeline">
                  <div class="tl__head">
                    <h3 class="tl__title">When does work become available?</h3>
                    <p class="tl__sub">
                      Work areas by milestone date — colored by current derived status
                    </p>
                  </div>
                  <div class="tl__axisrow" aria-hidden="true">
                    <span></span>
                    <div class="tl__axis" id="tl-axis">
                      <span class="tl-tick" style="left: 0%">Jun 2026</span
                      ><span class="tl-tick" style="left: 24.5902%">Jul 2026</span
                      ><span class="tl-tick" style="left: 50%">Aug 2026</span
                      ><span class="tl-tick" style="left: 75.4098%">Sep 2026</span
                      ><span class="tl-tick tl-tick--today" style="left: 8.19672%">Today</span>
                    </div>
                    <span></span>
                  </div>
                  <div class="tl__chart" id="tl-chart">
                    <span class="tl-today-line" style="left: calc(8.19672% + 177.967px)"></span>
                    <section class="tl-lane">
                      <h4 class="tl-lane__label">
                        Work starts<span class="tl-lane__count">8 work areas</span>
                      </h4>
                      <ul class="tl-lane__rows">
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCSHF-DH-144 · Cleared · Jun 12, 2026"
                        >
                          <span class="tl-row__name"
                            >DCSHF-DH-144<span class="tl-row__sub">Shaft Sites</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot"
                              style="left: 9.01639%; background: var(--st-cleared)"
                            ></span></span
                          ><span class="tl-row__meta">Jun 12, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCBPP-DH-066 · Cleared · Jun 15, 2026"
                        >
                          <span class="tl-row__name"
                            >DCBPP-DH-066<span class="tl-row__sub"
                              >Bethany Pumping Plant</span
                            ></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot"
                              style="left: 11.4754%; background: var(--st-cleared)"
                            ></span></span
                          ><span class="tl-row__meta">Jun 15, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCRDS-DH-292 · Cleared · Jun 15, 2026"
                        >
                          <span class="tl-row__name"
                            >DCRDS-DH-292<span class="tl-row__sub">Roads</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot"
                              style="left: 11.4754%; background: var(--st-cleared)"
                            ></span></span
                          ><span class="tl-row__meta">Jun 15, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCBPP-DH-034 · Cleared · Jun 16, 2026"
                        >
                          <span class="tl-row__name"
                            >DCBPP-DH-034<span class="tl-row__sub"
                              >Bethany Pumping Plant</span
                            ></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot"
                              style="left: 12.2951%; background: var(--st-cleared)"
                            ></span></span
                          ><span class="tl-row__meta">Jun 16, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCTR1-DH-008 · Cleared · Jun 16, 2026"
                        >
                          <span class="tl-row__name"
                            >DCTR1-DH-008<span class="tl-row__sub">Tunnel Reach 1</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot"
                              style="left: 12.2951%; background: var(--st-cleared)"
                            ></span></span
                          ><span class="tl-row__meta">Jun 16, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCRDS-DH-294 · Cleared w/ Stipulations · Jun 17, 2026"
                        >
                          <span class="tl-row__name"
                            >DCRDS-DH-294<span class="tl-row__sub">Roads</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot"
                              style="left: 13.1148%; background: var(--st-cleared-stipulations)"
                            ></span></span
                          ><span class="tl-row__meta">Jun 17, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCRDS-DH-184 · Provisional Block · Jun 29, 2026"
                        >
                          <span class="tl-row__name"
                            >DCRDS-DH-184<span class="tl-row__sub">Roads</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 22.9508%"
                            ></span></span
                          ><span class="tl-row__meta">Jun 29, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCTR2-DH-012 · Provisional Block · Jun 30, 2026"
                        >
                          <span class="tl-row__name"
                            >DCTR2-DH-012<span class="tl-row__sub">Tunnel Reach 2</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 23.7705%"
                            ></span></span
                          ><span class="tl-row__meta">Jun 30, 2026</span>
                        </li>
                      </ul>
                    </section>
                    <section class="tl-lane">
                      <h4 class="tl-lane__label">
                        Clearance visits<span class="tl-lane__count">4 work areas</span>
                      </h4>
                      <ul class="tl-lane__rows">
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCRDS-DH-184 · Provisional Block · Jun 15, 2026"
                        >
                          <span class="tl-row__name"
                            >DCRDS-DH-184<span class="tl-row__sub">Roads</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 11.4754%"
                            ></span></span
                          ><span class="tl-row__meta">Jun 15, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCTR2-DH-012 · Provisional Block · Jun 16, 2026"
                        >
                          <span class="tl-row__name"
                            >DCTR2-DH-012<span class="tl-row__sub">Tunnel Reach 2</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 12.2951%"
                            ></span></span
                          ><span class="tl-row__meta">Jun 16, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCRAI-DH-014 · Survey Scheduled · Jun 18, 2026"
                        >
                          <span class="tl-row__name"
                            >DCRAI-DH-014<span class="tl-row__sub">Rail Alignment</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot"
                              style="left: 13.9344%; background: var(--st-survey-scheduled)"
                            ></span></span
                          ><span class="tl-row__meta">Jun 18, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCTR2-DH-010 · Blocked · Sep 2, 2026"
                        >
                          <span class="tl-row__name"
                            >DCTR2-DH-010<span class="tl-row__sub">Tunnel Reach 2</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot"
                              style="left: 76.2295%; background: var(--st-blocked)"
                            ></span></span
                          ><span class="tl-row__meta">Sep 2, 2026</span>
                        </li>
                      </ul>
                    </section>
                    <section class="tl-lane">
                      <h4 class="tl-lane__label">
                        Blocks expected to lift<span class="tl-lane__count">19 work areas</span>
                      </h4>
                      <ul class="tl-lane__rows">
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCLEV-DH-023 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCLEV-DH-023<span class="tl-row__sub">Levees</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCLEV-DH-025 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCLEV-DH-025<span class="tl-row__sub">Levees</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCLEV-DH-027 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCLEV-DH-027<span class="tl-row__sub">Levees</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCLEV-DH-029 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCLEV-DH-029<span class="tl-row__sub">Levees</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCLEV-DH-032 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCLEV-DH-032<span class="tl-row__sub">Levees</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCLEV-DH-033 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCLEV-DH-033<span class="tl-row__sub">Levees</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCLEV-DH-034 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCLEV-DH-034<span class="tl-row__sub">Levees</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCLEV-DH-035 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCLEV-DH-035<span class="tl-row__sub">Levees</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCLEV-DH-036 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCLEV-DH-036<span class="tl-row__sub">Levees</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCLEV-DH-037 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCLEV-DH-037<span class="tl-row__sub">Levees</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCRDS-DH-181 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCRDS-DH-181<span class="tl-row__sub">Roads</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCRDS-DH-182 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCRDS-DH-182<span class="tl-row__sub">Roads</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCRDS-DH-183 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCRDS-DH-183<span class="tl-row__sub">Roads</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCRDS-DH-184 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCRDS-DH-184<span class="tl-row__sub">Roads</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCTR2-CPT-007 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCTR2-CPT-007<span class="tl-row__sub">Tunnel Reach 2</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCTR2-DH-003 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCTR2-DH-003<span class="tl-row__sub">Tunnel Reach 2</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCTR2-DH-006 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCTR2-DH-006<span class="tl-row__sub">Tunnel Reach 2</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCTR2-DH-010 · Blocked · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCTR2-DH-010<span class="tl-row__sub">Tunnel Reach 2</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot"
                              style="left: 43.4426%; background: var(--st-blocked)"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                        <li
                          class="tl-row"
                          tabindex="0"
                          role="button"
                          title="DCTR2-DH-012 · Provisional Block · Jul 24, 2026"
                        >
                          <span class="tl-row__name"
                            >DCTR2-DH-012<span class="tl-row__sub">Tunnel Reach 2</span></span
                          ><span class="tl-row__track"
                            ><span
                              class="tl-dot tl-dot--hollow"
                              style="left: 43.4426%"
                            ></span></span
                          ><span class="tl-row__meta">Jul 24, 2026</span>
                        </li>
                      </ul>
                    </section>
                  </div>
                  <p class="tl__excluded" id="tl-excluded">
                    200 work areas not yet surveyed — no dates to plot · 2 blocked indefinitely
                    (GGS) · 1 cleared without a planned start date
                  </p>
                </section>
              </section>
              <!-- ═══ TAB 4 — ACTIVITY (the week-at-a-glance feed: what changed, what's
           coming). Feed left (date-grouped card entries, scoped by the Type/
           Component filters), Upcoming right (sticky rail — NOT scoped by the
           filters). Everything inside is JS-derived from the fixture + the live
           in-session change log — one drawer save lands in BOTH the drawer's
           Activity list and this feed. Entries jump to the relevant drawer. ═══ -->
              <section slot="panel-3" class="feed-panel" aria-label="Activity feed">
                <div class="feed">
                  <div class="feed-main">
                    <!-- Filter row — the same filter legos as the map/Data bars. Scopes
                 the feed only; Type has no dots on purpose (colors belong to
                 status, not event type). -->
                    <div class="map-filterbar feed-filterbar">
                      <div class="map-filterbar__row">
                        <span class="map-filterbar__label">Filters</span>
                        <div
                          class="esa-filter-container"
                          style="
                            --_filter-container-gap: var(
                              --filter-container-gap,
                              var(--spacing-300, 0.75rem)
                            );
                            --_filter-container-row-gap: var(--spacing-200, 0.5rem);
                          "
                        >
                          <esa-filter-dropdown
                            id="act-flt-type"
                            label="Type"
                            multiple=""
                            size="sm"
                          ></esa-filter-dropdown>
                          <esa-filter-dropdown
                            id="act-flt-component"
                            label="Component"
                            multiple=""
                            size="sm"
                          ></esa-filter-dropdown>
                        </div>
                        <span id="act-clear-filters"
                          ><button
                            class="esa-filter-clear-button"
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
                            ><span class="esa-filter-clear-button__label">Clear all</span>
                          </button></span
                        >
                      </div>
                    </div>
                    <div id="feed-groups">
                      <section class="feed-day">
                        <h3 class="feed-heading">Jun 9, 2026</h3>
                        <ul class="feed-day__list">
                          <li
                            class="entry entry--card"
                            data-obs="Species-Swainson's Hawk-06092026"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--obs"
                              >Species-Swainson's Hawk-06092026</span
                            >
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Observation</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Swainson's Hawk · tracking only</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </section>
                      <section class="feed-day">
                        <h3 class="feed-heading">Jun 4, 2026</h3>
                        <ul class="feed-day__list">
                          <li
                            class="entry entry--card"
                            data-wa="DCRAI-DH-009"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--wa">DCRAI-DH-009</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Review</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Biological · Clearance survey</span>
                                <span class="gate__chipwrap"
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="cleared-stipulations"
                                    style="--_chip: var(--st-cleared-stipulations)"
                                  >
                                    <span class="bcn-status-chip__dot"></span>
                                    <span class="bcn-status-chip__label"
                                      >Cleared w/ Stipulations</span
                                    >
                                  </span>
                                </span>
                              </p>
                            </div>
                            <span class="entry__meta">C. Anderson (ESA)</span>
                          </li>
                          <li
                            class="entry entry--card"
                            data-obs="KILL-7655-06032026"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--obs">KILL-7655-06032026</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Log update</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Killdeer</span>
                              </p>
                              <p class="entry__secondary">
                                “1 bird on nest, tried to lead us away.”
                              </p>
                            </div>
                            <span class="entry__meta">2:23 PM</span>
                          </li>
                          <li
                            class="entry entry--card"
                            data-obs="Unknown-5895-06032026"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--obs"
                              >Unknown-5895-06032026</span
                            >
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Log update</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Unknown Raptor</span>
                              </p>
                              <p class="entry__secondary">
                                “Large stick nest with raptor observed; too distant to identify
                                (likely RTHA or SWHA).”
                              </p>
                            </div>
                            <span class="entry__meta">2:20 PM</span>
                          </li>
                          <li
                            class="entry entry--card"
                            data-obs="MALL-1520-06022026"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--obs">MALL-1520-06022026</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Log update</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Mallard</span>
                              </p>
                              <p class="entry__secondary">
                                “A pair observed. Female stayed with nest.”
                              </p>
                            </div>
                            <span class="entry__meta">2:14 PM</span>
                          </li>
                          <li
                            class="entry entry--card"
                            data-obs="CORA-2695-06042026"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--obs">CORA-2695-06042026</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Observation</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Common Raven · 250 ft buffer</span>
                              </p>
                            </div>
                          </li>
                          <li
                            class="entry entry--card"
                            data-obs="Species-Swainson's Hawk-06042026"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--obs"
                              >Species-Swainson's Hawk-06042026</span
                            >
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Observation</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Swainson's Hawk · tracking only</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </section>
                      <section class="feed-day">
                        <h3 class="feed-heading">Jun 3, 2026</h3>
                        <ul class="feed-day__list">
                          <li
                            class="entry entry--card"
                            data-wa="DCRAI-DH-014"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--wa">DCRAI-DH-014</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Review</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Biological · Clearance survey</span>
                                <span class="gate__chipwrap"
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="cleared"
                                    style="--_chip: var(--st-cleared)"
                                  >
                                    <span class="bcn-status-chip__dot"></span>
                                    <span class="bcn-status-chip__label">Cleared</span>
                                  </span>
                                </span>
                              </p>
                            </div>
                            <span class="entry__meta">C. Anderson (ESA)</span>
                          </li>
                          <li
                            class="entry entry--card"
                            data-wa="DCRDS-DH-294"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--wa">DCRDS-DH-294</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Review</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Biological · Clearance survey</span>
                                <span class="gate__chipwrap"
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="cleared-stipulations"
                                    style="--_chip: var(--st-cleared-stipulations)"
                                  >
                                    <span class="bcn-status-chip__dot"></span>
                                    <span class="bcn-status-chip__label"
                                      >Cleared w/ Stipulations</span
                                    >
                                  </span>
                                </span>
                              </p>
                            </div>
                            <span class="entry__meta">C. Anderson (ESA)</span>
                          </li>
                          <li
                            class="entry entry--card"
                            data-wa="DCTR1-DH-008"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--wa">DCTR1-DH-008</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Review</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Biological · Clearance survey</span>
                                <span class="gate__chipwrap"
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="cleared"
                                    style="--_chip: var(--st-cleared)"
                                  >
                                    <span class="bcn-status-chip__dot"></span>
                                    <span class="bcn-status-chip__label">Cleared</span>
                                  </span>
                                </span>
                              </p>
                            </div>
                            <span class="entry__meta">C. Anderson (ESA)</span>
                          </li>
                          <li
                            class="entry entry--card"
                            data-wa="DCTR2-DH-100"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--wa">DCTR2-DH-100</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Review</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Biological · Clearance survey</span>
                                <span class="gate__chipwrap"
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="inaccessible"
                                    style="--_chip: var(--st-inaccessible)"
                                  >
                                    <span class="bcn-status-chip__dot"></span>
                                    <span class="bcn-status-chip__label">Inaccessible</span>
                                  </span>
                                </span>
                              </p>
                            </div>
                            <span class="entry__meta">C. Anderson (ESA)</span>
                          </li>
                          <li
                            class="entry entry--card"
                            data-obs="KILL-7655-06032026"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--obs">KILL-7655-06032026</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Observation</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Killdeer · 100 ft buffer</span>
                              </p>
                            </div>
                          </li>
                          <li
                            class="entry entry--card"
                            data-obs="Unknown-5895-06032026"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--obs"
                              >Unknown-5895-06032026</span
                            >
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Observation</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Unknown Raptor · 500 ft buffer</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </section>
                      <section class="feed-day">
                        <h3 class="feed-heading">Jun 2, 2026</h3>
                        <ul class="feed-day__list">
                          <li
                            class="entry entry--card"
                            data-obs="MALL-1520-06022026"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--obs">MALL-1520-06022026</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Observation</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Mallard · 50 ft buffer</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </section>
                      <section class="feed-day">
                        <h3 class="feed-heading">Jun 1, 2026</h3>
                        <ul class="feed-day__list">
                          <li
                            class="entry entry--card"
                            data-wa="DCBPP-DH-034"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--wa">DCBPP-DH-034</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Review</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Biological · Clearance survey</span>
                                <span class="gate__chipwrap"
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="cleared"
                                    style="--_chip: var(--st-cleared)"
                                  >
                                    <span class="bcn-status-chip__dot"></span>
                                    <span class="bcn-status-chip__label">Cleared</span>
                                  </span>
                                </span>
                              </p>
                            </div>
                            <span class="entry__meta">C. Anderson (ESA)</span>
                          </li>
                          <li
                            class="entry entry--card"
                            data-wa="DCBPP-DH-066"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--wa">DCBPP-DH-066</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Review</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Biological · Clearance survey</span>
                                <span class="gate__chipwrap"
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="cleared"
                                    style="--_chip: var(--st-cleared)"
                                  >
                                    <span class="bcn-status-chip__dot"></span>
                                    <span class="bcn-status-chip__label">Cleared</span>
                                  </span>
                                </span>
                              </p>
                            </div>
                            <span class="entry__meta">C. Anderson (ESA)</span>
                          </li>
                          <li
                            class="entry entry--card"
                            data-wa="DCRAI-DH-010"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--wa">DCRAI-DH-010</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Review</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Biological · Clearance survey</span>
                                <span class="gate__chipwrap"
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="blocked"
                                    style="--_chip: var(--st-blocked)"
                                  >
                                    <span class="bcn-status-chip__dot"></span>
                                    <span class="bcn-status-chip__label">Blocked</span>
                                  </span>
                                </span>
                              </p>
                            </div>
                            <span class="entry__meta">C. Anderson (ESA)</span>
                          </li>
                          <li
                            class="entry entry--card"
                            data-wa="DCRAI-DH-011"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--wa">DCRAI-DH-011</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Review</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Biological · Clearance survey</span>
                                <span class="gate__chipwrap"
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="inaccessible"
                                    style="--_chip: var(--st-inaccessible)"
                                  >
                                    <span class="bcn-status-chip__dot"></span>
                                    <span class="bcn-status-chip__label">Inaccessible</span>
                                  </span>
                                </span>
                              </p>
                            </div>
                            <span class="entry__meta">C. Anderson (ESA)</span>
                          </li>
                          <li
                            class="entry entry--card"
                            data-wa="DCRAI-DH-013"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--wa">DCRAI-DH-013</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Review</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Biological · Clearance survey</span>
                                <span class="gate__chipwrap"
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="blocked"
                                    style="--_chip: var(--st-blocked)"
                                  >
                                    <span class="bcn-status-chip__dot"></span>
                                    <span class="bcn-status-chip__label">Blocked</span>
                                  </span>
                                </span>
                              </p>
                            </div>
                            <span class="entry__meta">C. Anderson (ESA)</span>
                          </li>
                          <li
                            class="entry entry--card"
                            data-wa="DCRDS-DH-292"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--wa">DCRDS-DH-292</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Review</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Biological · Clearance survey</span>
                                <span class="gate__chipwrap"
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="cleared"
                                    style="--_chip: var(--st-cleared)"
                                  >
                                    <span class="bcn-status-chip__dot"></span>
                                    <span class="bcn-status-chip__label">Cleared</span>
                                  </span>
                                </span>
                              </p>
                            </div>
                            <span class="entry__meta">C. Anderson (ESA)</span>
                          </li>
                          <li
                            class="entry entry--card"
                            data-wa="DCSHF-DH-144"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--wa">DCSHF-DH-144</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Review</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Biological · Clearance survey</span>
                                <span class="gate__chipwrap"
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="cleared"
                                    style="--_chip: var(--st-cleared)"
                                  >
                                    <span class="bcn-status-chip__dot"></span>
                                    <span class="bcn-status-chip__label">Cleared</span>
                                  </span>
                                </span>
                              </p>
                            </div>
                            <span class="entry__meta">C. Anderson (ESA)</span>
                          </li>
                        </ul>
                      </section>
                      <section class="feed-day">
                        <h3 class="feed-heading">May 29, 2026</h3>
                        <ul class="feed-day__list">
                          <li
                            class="entry entry--card"
                            data-obs="CORA-5830-06052026"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--obs">CORA-5830-06052026</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Observation</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Common Raven · 250 ft buffer</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </section>
                      <section class="feed-day">
                        <h3 class="feed-heading">May 18, 2026</h3>
                        <ul class="feed-day__list">
                          <li
                            class="entry entry--card"
                            data-wa="DCTR2-DH-010"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--wa">DCTR2-DH-010</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Review</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">Biological · Clearance survey</span>
                                <span class="gate__chipwrap"
                                  ><span
                                    class="bcn-status-chip"
                                    data-status="blocked"
                                    style="--_chip: var(--st-blocked)"
                                  >
                                    <span class="bcn-status-chip__dot"></span>
                                    <span class="bcn-status-chip__label">Blocked</span>
                                  </span>
                                </span>
                              </p>
                            </div>
                            <span class="entry__meta">C. Anderson (ESA)</span>
                          </li>
                          <li
                            class="entry entry--card"
                            data-obs="SWHA-2289-05182026"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--obs">SWHA-2289-05182026</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Observation</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary"
                                  >Swainson's Hawk · 2,640 ft buffer · 19 work areas affected</span
                                >
                              </p>
                            </div>
                          </li>
                        </ul>
                      </section>
                      <section class="feed-day">
                        <h3 class="feed-heading">May 15, 2026</h3>
                        <ul class="feed-day__list">
                          <li
                            class="entry entry--card"
                            data-wa="DCRDS-DH-184"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--wa">DCRDS-DH-184</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Notification</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">30-day landowner</span>
                              </p>
                            </div>
                          </li>
                          <li
                            class="entry entry--card"
                            data-wa="DCTR2-DH-012"
                            tabindex="0"
                            role="button"
                          >
                            <span class="entry__badge entry__badge--wa">DCTR2-DH-012</span>
                            <div class="entry__body">
                              <p class="entry__line">
                                <span class="entry__type">Notification</span
                                ><span class="entry__sep"> · </span
                                ><span class="entry__primary">30-day landowner</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </section>
                    </div>
                    <div id="feed-empty" hidden="">
                      <div class="esa-empty-state esa-empty-state--sm">
                        <h3 class="esa-empty-state__title">No activity matches the filters</h3>
                        <p class="esa-empty-state__description">
                          Clear the Type / Component filters to see the full feed.
                        </p>
                        <div class="esa-empty-state__actions"></div>
                      </div>
                    </div>
                  </div>
                  <aside class="feed-upcoming" aria-label="Upcoming">
                    <h3 class="feed-heading">Upcoming</h3>
                    <ul class="feed-upcoming__list" id="feed-upcoming">
                      <li class="entry entry--up" data-wa="DCSHF-DH-144" tabindex="0" role="button">
                        <span class="entry__badge entry__badge--wa">DCSHF-DH-144</span>
                        <div class="entry__body">
                          <p class="entry__line">
                            <span class="entry__type">Work start</span
                            ><span class="entry__sep"> · </span
                            ><span class="entry__primary">Jun 12</span>
                          </p>
                        </div>
                        <span class="entry__meta">tomorrow</span>
                      </li>
                      <li class="entry entry--up" data-wa="DCBPP-DH-066" tabindex="0" role="button">
                        <span class="entry__badge entry__badge--wa">DCBPP-DH-066</span>
                        <div class="entry__body">
                          <p class="entry__line">
                            <span class="entry__type">Work start</span
                            ><span class="entry__sep"> · </span
                            ><span class="entry__primary">Jun 15</span>
                          </p>
                        </div>
                        <span class="entry__meta">in 4 days</span>
                      </li>
                      <li class="entry entry--up" data-wa="DCRDS-DH-184" tabindex="0" role="button">
                        <span class="entry__badge entry__badge--wa">DCRDS-DH-184</span>
                        <div class="entry__body">
                          <p class="entry__line">
                            <span class="entry__type">Clearance visit</span
                            ><span class="entry__sep"> · </span
                            ><span class="entry__primary">Jun 15</span>
                          </p>
                        </div>
                        <span class="entry__meta">in 4 days</span>
                      </li>
                      <li class="entry entry--up" data-wa="DCRDS-DH-292" tabindex="0" role="button">
                        <span class="entry__badge entry__badge--wa">DCRDS-DH-292</span>
                        <div class="entry__body">
                          <p class="entry__line">
                            <span class="entry__type">Work start</span
                            ><span class="entry__sep"> · </span
                            ><span class="entry__primary">Jun 15</span>
                          </p>
                        </div>
                        <span class="entry__meta">in 4 days</span>
                      </li>
                      <li class="entry entry--up" data-wa="DCBPP-DH-034" tabindex="0" role="button">
                        <span class="entry__badge entry__badge--wa">DCBPP-DH-034</span>
                        <div class="entry__body">
                          <p class="entry__line">
                            <span class="entry__type">Work start</span
                            ><span class="entry__sep"> · </span
                            ><span class="entry__primary">Jun 16</span>
                          </p>
                        </div>
                        <span class="entry__meta">in 5 days</span>
                      </li>
                      <li class="entry entry--up" data-wa="DCTR1-DH-008" tabindex="0" role="button">
                        <span class="entry__badge entry__badge--wa">DCTR1-DH-008</span>
                        <div class="entry__body">
                          <p class="entry__line">
                            <span class="entry__type">Work start</span
                            ><span class="entry__sep"> · </span
                            ><span class="entry__primary">Jun 16</span>
                          </p>
                        </div>
                        <span class="entry__meta">in 5 days</span>
                      </li>
                      <li class="entry entry--up" data-wa="DCTR2-DH-012" tabindex="0" role="button">
                        <span class="entry__badge entry__badge--wa">DCTR2-DH-012</span>
                        <div class="entry__body">
                          <p class="entry__line">
                            <span class="entry__type">Clearance visit</span
                            ><span class="entry__sep"> · </span
                            ><span class="entry__primary">Jun 16</span>
                          </p>
                        </div>
                        <span class="entry__meta">in 5 days</span>
                      </li>
                      <li class="entry entry--up" data-wa="DCRAI-DH-014" tabindex="0" role="button">
                        <span class="entry__badge entry__badge--wa">DCRAI-DH-014</span>
                        <div class="entry__body">
                          <p class="entry__line">
                            <span class="entry__type">Work start</span
                            ><span class="entry__sep"> · </span
                            ><span class="entry__primary">Jun 17</span>
                          </p>
                        </div>
                        <span class="entry__meta">in 6 days</span>
                      </li>
                      <li class="entry entry--up" data-wa="DCRDS-DH-294" tabindex="0" role="button">
                        <span class="entry__badge entry__badge--wa">DCRDS-DH-294</span>
                        <div class="entry__body">
                          <p class="entry__line">
                            <span class="entry__type">Work start</span
                            ><span class="entry__sep"> · </span
                            ><span class="entry__primary">Jun 17</span>
                          </p>
                        </div>
                        <span class="entry__meta">in 6 days</span>
                      </li>
                      <li class="entry entry--up" data-wa="DCRAI-DH-014" tabindex="0" role="button">
                        <span class="entry__badge entry__badge--wa">DCRAI-DH-014</span>
                        <div class="entry__body">
                          <p class="entry__line">
                            <span class="entry__type">Review</span
                            ><span class="entry__sep"> · </span
                            ><span class="entry__primary">Geology · Jun 18</span>
                          </p>
                        </div>
                        <span class="entry__meta">in 7 days</span>
                      </li>
                      <li class="entry entry--up" data-wa="DCRAI-DH-014" tabindex="0" role="button">
                        <span class="entry__badge entry__badge--wa">DCRAI-DH-014</span>
                        <div class="entry__body">
                          <p class="entry__line">
                            <span class="entry__type">Review</span
                            ><span class="entry__sep"> · </span
                            ><span class="entry__primary">Noise · Jun 20</span>
                          </p>
                        </div>
                        <span class="entry__meta">in 9 days</span>
                      </li>
                      <li class="entry entry--up" data-wa="DCTR2-DH-010" tabindex="0" role="button">
                        <span class="entry__badge entry__badge--wa">DCTR2-DH-010</span>
                        <div class="entry__body">
                          <p class="entry__line">
                            <span class="entry__type">Review</span
                            ><span class="entry__sep"> · </span
                            ><span class="entry__primary">Biological · Sep 2</span>
                          </p>
                        </div>
                        <span class="entry__meta">in 83 days</span>
                      </li>
                    </ul>
                  </aside>
                </div>
              </section>
            </esa-tab-layout>
          </section>
        </div>
      </div>
      <esa-side-dialog
        id="wa-dialog"
        size="md"
        style="--_width: 640px; --z-modal: 1300; --z-modal-backdrop: 1250"
        position="right"
      >
        <div slot="header" class="wa__header">
          <div class="wa__headmain">
            <h2 class="wa__title" id="wa-title">Work area</h2>
            <span id="wa-chip"
              ><span
                class="bcn-status-chip"
                data-status="cleared"
                style="--_chip: var(--st-cleared, #1a9850)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">—</span>
              </span>
            </span>
          </div>
          <p class="wa__subtitle" id="wa-sub">—</p>
        </div>
        <!-- READ mode (default) -->
        <div class="wa" id="wa-read">
          <!-- Dates band — always-visible decision inputs directly under the header
           (full-bleed against the lego's body padding); the red Blocked-until
           cell appears only while a block horizon exists. -->
          <div class="band" id="wa-band">
            <div class="bcn-key-value">
              <span class="bcn-key-value__key">Notification</span>
              <span class="wa__kv-val" id="wa-d-notif">—</span>
            </div>
            <div class="bcn-key-value">
              <span class="bcn-key-value__key">Clearance visit</span>
              <span class="wa__kv-val" id="wa-d-visit">—</span>
            </div>
            <div class="bcn-key-value">
              <span class="bcn-key-value__key">Planned start</span>
              <span class="wa__kv-val" id="wa-d-start">—</span>
            </div>
            <span class="band__cell" id="wa-d-until-wrap" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Blocked until</span>
                <span class="band__alert" id="wa-d-until">—</span>
              </div>
            </span>
          </div>
          <!-- Decision block — reads in ~2 seconds. Variants (data-variant, filled
           by JS): prov = [obs ID badge] fact line + right-aligned danger
           Confirm block (the manager's call); blocked = statement line;
           pending = awaiting-review line (+ start-conflict warn row with
           inline Edit start); cleared/neutral = one quiet line. -->
          <div class="decide" id="wa-decide" hidden="">
            <p class="decide__line decide__line--fact" id="wa-decide-fact"></p>
            <div class="decide__row decide__row--warn" id="wa-decide-warn" hidden="">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
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
                  <path d="M12 17h.01"></path>
                </svg>
              </span>
              <span class="decide__warntext" id="wa-decide-warntext"></span>
              <span id="wa-edit-start"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
                >
                  <button class="esa-button__native" type="button">
                    <span class="esa-button__label"> Edit start </span>
                  </button>
                </span>
              </span>
            </div>
            <!-- Confirm block rides esa-button's native danger color, re-pointed to
             the status red (--st-provisional-block) by the prov variant's CSS
             so it sits in the same red family as the block's tint/border/ink. -->
            <div class="decide__actions" id="wa-decide-actions" hidden="">
              <span id="wa-confirm-block"
                ><span
                  class="esa-button esa-button--color-danger esa-button--appearance-fill esa-button--sm"
                >
                  <button class="esa-button__native" type="button">
                    <span class="esa-button__label"> Confirm block </span>
                  </button>
                </span>
              </span>
            </div>
          </div>
          <!-- Disciplines board — one button cell per dimension: name, current
           status chip (hollow "Not reviewed" when nothing is recorded), key
           date line, review-count badge when >1. Click opens the discipline's
           stacked child drawer. -->
          <section>
            <h3 class="wa__section">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
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
                  ></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </span>
              Disciplines
            </h3>
            <div class="board" id="wa-board">
              <button type="button" class="board__cell" data-dim="biological">
                <span class="board__cellhead">
                  <span class="board__dim">Biological</span>
                  <span class="board__count" hidden="">
                    <span class="esa-badge esa-badge--secondary esa-badge--sm">
                      <span class="esa-badge__text">0</span>
                    </span>
                  </span>
                  <span class="board__chev">
                    <span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        focusable="false"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </span>
                <span class="board__chipwrap">
                  <span
                    class="bcn-status-chip"
                    data-status="cleared"
                    style="--_chip: var(--st-cleared, #1a9850)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">—</span>
                  </span>
                </span>
                <span class="board__unreviewed gate__unreviewed" hidden=""> Not reviewed </span>
                <span class="board__meta">—</span></button
              ><button type="button" class="board__cell" data-dim="cultural">
                <span class="board__cellhead">
                  <span class="board__dim">Cultural Resources</span>
                  <span class="board__count" hidden="">
                    <span class="esa-badge esa-badge--secondary esa-badge--sm">
                      <span class="esa-badge__text">0</span>
                    </span>
                  </span>
                  <span class="board__chev">
                    <span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        focusable="false"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </span>
                <span class="board__chipwrap">
                  <span
                    class="bcn-status-chip"
                    data-status="cleared"
                    style="--_chip: var(--st-cleared, #1a9850)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">—</span>
                  </span>
                </span>
                <span class="board__unreviewed gate__unreviewed" hidden=""> Not reviewed </span>
                <span class="board__meta">—</span></button
              ><button type="button" class="board__cell" data-dim="noise">
                <span class="board__cellhead">
                  <span class="board__dim">Noise</span>
                  <span class="board__count" hidden="">
                    <span class="esa-badge esa-badge--secondary esa-badge--sm">
                      <span class="esa-badge__text">0</span>
                    </span>
                  </span>
                  <span class="board__chev">
                    <span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        focusable="false"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </span>
                <span class="board__chipwrap">
                  <span
                    class="bcn-status-chip"
                    data-status="cleared"
                    style="--_chip: var(--st-cleared, #1a9850)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">—</span>
                  </span>
                </span>
                <span class="board__unreviewed gate__unreviewed" hidden=""> Not reviewed </span>
                <span class="board__meta">—</span></button
              ><button type="button" class="board__cell" data-dim="geology">
                <span class="board__cellhead">
                  <span class="board__dim">Geology</span>
                  <span class="board__count" hidden="">
                    <span class="esa-badge esa-badge--secondary esa-badge--sm">
                      <span class="esa-badge__text">0</span>
                    </span>
                  </span>
                  <span class="board__chev">
                    <span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        focusable="false"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </span>
                <span class="board__chipwrap">
                  <span
                    class="bcn-status-chip"
                    data-status="cleared"
                    style="--_chip: var(--st-cleared, #1a9850)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">—</span>
                  </span>
                </span>
                <span class="board__unreviewed gate__unreviewed" hidden=""> Not reviewed </span>
                <span class="board__meta">—</span>
              </button>
            </div>
          </section>
          <!-- Collapsible summary rows — the v2 demotions: ambient detail folds
           until asked for. Titles carry live counts (JS updates the lego's
           title span). -->
          <div class="wa__more">
            <span class="wa__more-item" id="wa-conflicts-col" hidden="">
              <details class="esa-collapsible esa-collapsible--flush">
                <summary class="esa-collapsible__summary">
                  <span class="esa-icon esa-icon--sm" aria-hidden="true">
                    <svg
                      width="16"
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
                      <path d="M12 17h.01"></path>
                    </svg>
                  </span>
                  <span class="esa-collapsible__title">Buffer conflicts</span>
                </summary>
                <div class="esa-collapsible__body">
                  <ul class="wa__conflicts" id="wa-conflicts"></ul>
                </div>
              </details>
            </span>
            <span class="wa__more-item" id="wa-notes-col" hidden="">
              <details class="esa-collapsible esa-collapsible--flush">
                <summary class="esa-collapsible__summary">
                  <span class="esa-icon esa-icon--sm" aria-hidden="true">
                    <svg
                      width="16"
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
                        d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                      ></path>
                      <path
                        d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                      ></path>
                    </svg>
                  </span>
                  <span class="esa-collapsible__title">Notes</span>
                </summary>
                <div class="esa-collapsible__body">
                  <blockquote class="wa__note" id="wa-note"></blockquote>
                  <ul class="wa__notes-added" id="wa-notes-added"></ul>
                </div>
              </details>
            </span>
            <span class="wa__more-item">
              <details class="esa-collapsible esa-collapsible--flush">
                <summary class="esa-collapsible__summary">
                  <span class="esa-icon esa-icon--sm" aria-hidden="true">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                      <path d="M3 3v5h5"></path>
                      <path d="M12 7v5l4 2"></path>
                    </svg>
                  </span>
                  <span class="esa-collapsible__title">Activity</span>
                </summary>
                <div class="esa-collapsible__body">
                  <ul class="wa__activity" id="wa-activity"></ul>
                </div>
              </details>
            </span>
          </div>
        </div>
        <!-- EDIT mode — SITE-LEVEL only (the v2 split): the three dates + the
         append-only note (Leah's paste-the-email flow). Discipline reviews are
         edited in the child drawer, never here. -->
        <div class="wa" id="wa-edit" hidden="">
          <section>
            <h3 class="wa__section">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
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
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </span>
              Dates
            </h3>
            <div class="we__dates">
              <esa-date-picker id="we-notif" label="Notification" size="sm"></esa-date-picker>
              <esa-date-picker id="we-visit" label="Clearance visit" size="sm"></esa-date-picker>
              <esa-date-picker id="we-start" label="Planned start" size="sm"></esa-date-picker>
            </div>
          </section>
          <section>
            <h3 class="wa__section">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
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
                    d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                  ></path>
                  <path
                    d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                  ></path>
                </svg>
              </span>
              Notes
            </h3>
            <!-- Append-only: the verbatim seed note is the field record (read-only even
             here); "Add note" is the paste-the-biologist-email affordance. -->
            <blockquote class="wa__note" id="we-seed-note"></blockquote>
            <ul class="wa__notes-added" id="we-notes-added"></ul>
            <div class="we__addnote">
              <span class="we__addnote-title">Add note</span>
              <div class="we__row">
                <esa-date-picker id="we-note-date" label="Date" size="sm"></esa-date-picker>
                <esa-text-field
                  id="we-note-author"
                  label="Author"
                  placeholder="Who sent it"
                  size="sm"
                ></esa-text-field>
              </div>
              <esa-textarea
                id="we-note-text"
                label="Note"
                rows="3"
                auto-resize=""
                placeholder="Paste the biologist's email note…"
                size="sm"
              ></esa-textarea>
            </div>
          </section>
        </div>
        <div slot="footer" class="wa__footer">
          <!-- "Show on map" (round-5 ch5) — closes the drawer, switches to the Map
           tab, pans/zooms + pulses the marker (the ch2 go-to machinery). Hidden
           while editing — a mid-edit jump would discard the form. -->
          <span id="wa-showmap" class="wa__footer-start">
            <span
              class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label">
                  <span class="esa-icon esa-icon--sm" aria-hidden="true">
                    <svg
                      width="16"
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
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  Show on map
                </span>
              </button>
            </span>
          </span>
          <span id="wa-edit-btn"
            ><span
              class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Edit site details </span>
              </button>
            </span>
          </span>
          <span id="wa-cancel" hidden=""
            ><span
              class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Cancel </span>
              </button>
            </span>
          </span>
          <span id="wa-save" hidden=""
            ><span
              class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Save </span>
              </button>
            </span>
          </span>
        </div>
      </esa-side-dialog>
      <esa-side-dialog
        id="disc-dialog"
        size="md"
        style="--_width: 560px; --z-modal: 1340; --z-modal-backdrop: 1310"
        position="right"
      >
        <div slot="header" class="wa__header">
          <div class="wa__headmain">
            <h2 class="wa__title" id="dd-title">Review</h2>
            <span id="dd-chip"
              ><span
                class="bcn-status-chip"
                data-status="cleared"
                style="--_chip: var(--st-cleared, #1a9850)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">—</span>
              </span>
            </span>
            <span class="gate__unreviewed" id="dd-unreviewed" hidden="">Not reviewed</span>
          </div>
          <p class="wa__subtitle" id="dd-sub">—</p>
        </div>
        <div class="wa">
          <div class="dd__bar">
            <span class="dd__count" id="dd-count">0 reviews</span>
            <span id="dd-add"
              ><span
                class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
              >
                <button class="esa-button__native" type="button">
                  <span class="esa-button__label"> Add review </span>
                </button>
              </span>
            </span>
          </div>
          <!-- Add/Edit review form — inline at the top when adding; swapped into a
           history node when editing (the pencil affordance). The "Scheduled —
           no outcome yet" outcome choice saves an outcome-less review. -->
          <div class="dd__form" id="dd-form" hidden="">
            <esa-select id="dd-kind" label="Kind" size="sm"></esa-select>
            <div class="we__row">
              <esa-date-picker id="dd-date" label="Date" size="sm"></esa-date-picker>
              <esa-select id="dd-outcome" label="Outcome" size="sm"></esa-select>
            </div>
            <span id="dd-until-wrap" hidden="">
              <esa-date-picker id="dd-until" label="Blocked until" size="sm"></esa-date-picker>
            </span>
            <esa-text-field
              id="dd-reviewer"
              label="Reviewer"
              placeholder="Name (org)"
              size="sm"
            ></esa-text-field>
            <esa-textarea
              id="dd-note"
              label="Note"
              rows="2"
              auto-resize=""
              size="sm"
            ></esa-textarea>
            <esa-input-tag
              id="dd-stips"
              label="Stipulations"
              placeholder="Add stipulation…"
              tags-below="true"
              size="sm"
            ></esa-input-tag>
            <div class="dd__formactions">
              <span id="dd-cancel"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
                >
                  <button class="esa-button__native" type="button">
                    <span class="esa-button__label"> Cancel </span>
                  </button>
                </span>
              </span>
              <span id="dd-save"
                ><span
                  class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--sm"
                >
                  <button class="esa-button__native" type="button">
                    <span class="esa-button__label"> Save review </span>
                  </button>
                </span>
              </span>
            </div>
          </div>
          <!-- Review history — reverse-chron node rail (JS-injected) -->
          <ol class="revs" id="dd-history"></ol>
        </div>
        <div slot="footer" class="wa__footer">
          <span id="dd-close"
            ><span
              class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Close </span>
              </button>
            </span>
          </span>
        </div>
      </esa-side-dialog>
      <esa-side-dialog
        id="obs-dialog"
        size="md"
        style="--_width: 520px; --z-modal: 1300; --z-modal-backdrop: 1250"
        position="right"
      >
        <div slot="header" class="wa__header">
          <div class="wa__headmain">
            <h2 class="wa__title" id="obs-title">Observation</h2>
            <span id="obs-chip"
              ><span
                class="bcn-status-chip"
                data-status="neutral"
                style="--_chip: var(--st-neutral, #3b4754)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">—</span>
              </span>
            </span>
          </div>
          <p class="wa__subtitle" id="obs-sub">—</p>
        </div>
        <div class="wa">
          <div class="od__meta">
            <div class="bcn-key-value">
              <span class="bcn-key-value__key">Species code</span>
              <span class="wa__kv-val" id="obs-code">—</span>
            </div>
            <div class="bcn-key-value">
              <span class="bcn-key-value__key">Kind</span>
              <span class="wa__kv-val" id="obs-kind">—</span>
            </div>
            <div class="bcn-key-value">
              <span class="bcn-key-value__key">Buffer</span>
              <span class="wa__kv-val" id="obs-buffer">—</span>
            </div>
            <div class="bcn-key-value">
              <span class="bcn-key-value__key">First observed</span>
              <span class="wa__kv-val" id="obs-first">—</span>
            </div>
            <div class="bcn-key-value">
              <span class="bcn-key-value__key">Est. end</span>
              <span class="wa__kv-val" id="obs-end">—</span>
            </div>
          </div>
          <section id="obs-log-wrap" hidden="">
            <h3 class="wa__section">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"></path>
                  <path d="M2 6h4"></path>
                  <path d="M2 10h4"></path>
                  <path d="M2 14h4"></path>
                  <path d="M2 18h4"></path>
                  <path
                    d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                  ></path>
                </svg>
              </span>
              Latest log
            </h3>
            <blockquote class="wa__note wa__note--log" id="obs-log"></blockquote>
          </section>
          <section>
            <h3 class="wa__section">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
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
                  <line x1="22" x2="18" y1="12" y2="12"></line>
                  <line x1="6" x2="2" y1="12" y2="12"></line>
                  <line x1="12" x2="12" y1="6" y2="2"></line>
                  <line x1="12" x2="12" y1="22" y2="18"></line>
                </svg>
              </span>
              Work areas within buffer
              <span id="obs-impact-count"
                ><span class="esa-badge esa-badge--primary esa-badge--sm">
                  <span class="esa-badge__text">0</span>
                </span>
              </span>
            </h3>
            <ul class="od__impact" id="obs-impact"></ul>
          </section>
        </div>
        <div slot="footer" class="wa__footer">
          <!-- "Show on map" (round-5 ch5) — same jump as the work-area drawer's. -->
          <span id="obs-showmap" class="wa__footer-start">
            <span
              class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label">
                  <span class="esa-icon esa-icon--sm" aria-hidden="true">
                    <svg
                      width="16"
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
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  Show on map
                </span>
              </button>
            </span>
          </span>
        </div>
      </esa-side-dialog>
      <template id="gc-chip-tpl">
        <span class="gate__chipwrap" data-astro-cid-2csxtc3p=""
          ><span
            class="bcn-status-chip"
            data-status="cleared"
            style="--_chip: var(--st-cleared, #1a9850)"
            data-astro-cid-dbmptlvz=""
          >
            <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
            <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz="">—</span>
          </span>
        </span>
      </template>
      <template id="gc-pill-tpl">
        <span class="esa-pill esa-pill--default esa-pill--sm" data-astro-cid-parwwt3h="">
          <span class="esa-pill__label" data-astro-cid-parwwt3h="">—</span>
        </span>
      </template>
      <template id="dd-edit-tpl">
        <span class="rev__edit" data-astro-cid-2csxtc3p=""
          ><button
            class="esa-icon-button esa-icon-button--sm"
            type="button"
            aria-label="Edit review"
            title="Edit review"
            data-astro-cid-7jyuj5q3="true"
          >
            <span class="esa-icon esa-icon--sm" aria-hidden="true" data-astro-cid-6mqbuw4b="">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
                data-astro-cid-6mqbuw4b=""
              >
                <path
                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                ></path>
                <path d="m15 5 4 4"></path>
              </svg>
            </span>
          </button>
        </span>
      </template>
    </div>
  </div>
  <!-- Global ⌘K search palette (bespoke bcn-omni-search). Sits at the modern-layout
         root so its fixed, centered overlay clears the z-1100 topbar; app-wide. -->
  <div class="bcn-omni" data-omni="" hidden="">
    <div class="bcn-omni__scrim" data-omni-close=""></div>
    <div class="bcn-omni__panel" role="dialog" aria-modal="true" aria-label="Global search">
      <div class="bcn-omni__searchrow">
        <span class="bcn-omni__searchicon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </span>
        <span class="bcn-omni__inputwrap">
          <span class="bcn-omni__ghost" data-omni-ghost="" aria-hidden="true"></span>
          <input
            class="bcn-omni__input"
            data-omni-input=""
            type="text"
            placeholder="Search…"
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
            aria-label="Search"
          />
        </span>
        <button
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
          </svg>
        </button>
        <kbd>Esc</kbd>
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
        <span data-omni-showall-label="">See all results</span>
        <svg
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
        <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span> <span><kbd>↵</kbd> Select</span>
        <span><kbd>Tab</kbd> Complete</span> <span><kbd>Esc</kbd> Close</span>
      </div>
    </div>
  </div>
  <script
    type="module"
    src="/beacon-design/_astro/BcnOmniSearch.astro_astro_type_script_index_0_lang.DH-DZQi7.js"
  ></script>
  <!-- Aldo — help & guidance, app-wide like the palette above: the floating
         bottom-center utility bar and the route-aware guidance drawer it opens.
         Same root placement so the drawer's overlay clears the z-1100 topbar. -->
  <div
    class="bcn-help-bar"
    data-help-bar=""
    data-newest="2026-07-14"
    role="toolbar"
    aria-label="Help &amp; utilities"
  >
    <!-- Primary: Guidance — the Aldo mark + visible label; opens the guidance drawer via hook. -->
    <button
      type="button"
      class="bcn-help-bar__guidance"
      data-help-trigger=""
      aria-haspopup="dialog"
    >
      <span class="bcn-aldo-mark" data-size="sm" aria-hidden="true">
        <span class="bcn-aldo-mark__glyph">
          <span class="esa-icon esa-icon--xs" aria-hidden="true">
            <svg
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
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </span>
        </span>
      </span>
      <span class="bcn-help-bar__guidance-label">Guidance</span>
    </button>
    <span class="bcn-help-bar__divider" aria-hidden="true"></span>
    <!-- Search — icon-only; the tooltip host also carries the omni-search open hook. -->
    <esa-tooltip
      class="bcn-help-bar__tooltip"
      text="Search"
      position="above"
      data-omni-trigger="true"
    >
      <button
        class="esa-icon-button esa-icon-button--md"
        type="button"
        aria-label="Search"
        title="Search"
      >
        <span class="esa-icon esa-icon--md" aria-hidden="true">
          <svg
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
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </span>
      </button>
    </esa-tooltip>
    <!-- What's new — icon-only trigger + unread dot; esa-popover panel opens above the bar. -->
    <esa-popover
      class="bcn-help-bar__popover"
      position="top"
      trigger="click"
      offset="12"
      appearance="default"
    >
      <span class="bcn-help-bar__whatsnew" data-whatsnew="">
        <button
          class="esa-icon-button esa-icon-button--md"
          type="button"
          aria-label="What's new"
          title="What's new"
        >
          <span class="esa-icon esa-icon--md" aria-hidden="true">
            <svg
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
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
              ></path>
            </svg>
          </span>
        </button>
        <span class="bcn-help-bar__dot" data-whatsnew-dot="" aria-hidden="true"></span>
      </span>
      <div slot="content" class="bcn-help-bar__panel">
        <p class="bcn-help-bar__panel-title">What's new</p>
        <ul class="bcn-help-bar__panel-list">
          <li class="bcn-help-bar__panel-item">
            <span class="bcn-help-bar__panel-icon" aria-hidden="true">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
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
                  <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                </svg>
              </span>
            </span>
            <div class="bcn-help-bar__panel-text">
              <div class="bcn-help-bar__panel-head">
                <p class="bcn-help-bar__panel-item-title">Project Dashboard</p>
                <span class="bcn-count" aria-label="Released Jul 14, 2026">Jul 14</span>
              </div>
              <p class="bcn-help-bar__panel-item-blurb">
                A new logged-in homepage: the most critical items, starred components, and front
                doors into every zone.
              </p>
            </div>
          </li>
          <li class="bcn-help-bar__panel-item">
            <span class="bcn-help-bar__panel-icon" aria-hidden="true">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
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
                  ></path>
                </svg>
              </span>
            </span>
            <div class="bcn-help-bar__panel-text">
              <div class="bcn-help-bar__panel-head">
                <p class="bcn-help-bar__panel-item-title">Site Clearance go/no-go</p>
                <span class="bcn-count" aria-label="Released Jul 2, 2026">Jul 2</span>
              </div>
              <p class="bcn-help-bar__panel-item-blurb">
                Provisional blocks now show exactly which discipline reviews are outstanding before
                ground disturbance.
              </p>
            </div>
          </li>
          <li class="bcn-help-bar__panel-item">
            <span class="bcn-help-bar__panel-icon" aria-hidden="true">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
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
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </span>
            </span>
            <div class="bcn-help-bar__panel-text">
              <div class="bcn-help-bar__panel-head">
                <p class="bcn-help-bar__panel-item-title">Full-text search</p>
                <span class="bcn-count" aria-label="Released Jun 19, 2026">Jun 19</span>
              </div>
              <p class="bcn-help-bar__panel-item-blurb">
                Press / anywhere — search now reads commitment body text and documents, with
                highlighted snippets.
              </p>
            </div>
          </li>
        </ul>
        <div class="bcn-help-bar__panel-footer">
          <a class="bcn-help-bar__panel-all" href="#release-notes">
            All release notes<span class="bcn-help-bar__panel-all-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </esa-popover>
  </div>
  <script
    type="module"
    src="/beacon-design/_astro/BcnHelpBar.astro_astro_type_script_index_0_lang.DoAGJheO.js"
  ></script>
  <!-- ── Drawer (parent) ── --><esa-side-dialog
    class="bcn-gd"
    data-gd="true"
    position="right"
    heading="Help &amp; Guidance"
    size="md"
  >
    <div slot="header" class="bcn-gd__header">
      <span class="bcn-aldo-mark" data-size="md" aria-hidden="true">
        <span class="bcn-aldo-mark__glyph">
          <span class="esa-icon esa-icon--md" aria-hidden="true">
            <svg
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
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </span>
        </span>
      </span>
      <span class="bcn-gd__title">Help &amp; Guidance</span>
    </div>
    <!-- The scroll stream: Aldo's intro message, then appended Q&A. -->
    <div class="bcn-gd__stream">
      <div class="bcn-gd-msg bcn-gd-msg--aldo" data-gd-intro="">
        <div class="bcn-gd-msg__avatar">
          <span class="bcn-aldo-mark" data-size="sm" aria-hidden="true">
            <span class="bcn-aldo-mark__glyph">
              <span class="esa-icon esa-icon--xs" aria-hidden="true">
                <svg
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
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </span>
            </span>
          </span>
        </div>
        <div class="bcn-gd-msg__group">
          <section class="bcn-gd__section">
            <h2 class="bcn-gd__label">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
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
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
              You are here
            </h2>
            <div class="bcn-gd__here">
              <span class="bcn-gd__here-page" data-gd-page="">Site Clearance</span>
              <span class="bcn-gd__here-purpose" data-gd-purpose=""
                >Go/no-go for ground disturbance — which sites are clear today, and exactly what
                blocks the rest.</span
              >
            </div>
          </section>
          <section class="bcn-gd__section" data-gd-section="howtos">
            <h2 class="bcn-gd__label">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
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
                  <line x1="3" x2="3.01" y1="18" y2="18"></line>
                </svg>
              </span>
              On this page
            </h2>
            <div class="bcn-gd__rows" data-gd-howtos="">
              <button
                type="button"
                class="bcn-gd-row"
                data-article-id="site-clearance-go-no-go"
                data-kind="howto"
                data-title="Using Site Clearance go/no-go"
                data-summary="Check whether a work site is clear for ground disturbance — and what is blocking it."
              >
                <span class="bcn-gd-row__text">
                  <span class="bcn-gd-row__title">Using Site Clearance go/no-go</span>
                  <span class="bcn-gd-row__sub"
                    >Check whether a work site is clear for ground disturbance — and what is
                    blocking it.</span
                  >
                </span>
                <span class="esa-icon esa-icon--sm" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </span>
              </button>
            </div>
          </section>
          <section class="bcn-gd__section" data-gd-section="terms">
            <h2 class="bcn-gd__label">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
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
                  ></path>
                </svg>
              </span>
              Terms
            </h2>
            <div class="bcn-gd__rows" data-gd-terms="">
              <button
                type="button"
                class="bcn-gd-row"
                data-article-id="what-is-an-observation"
                data-kind="glossary"
                data-title="What is an Observation?"
                data-summary="One recorded field event — a species sighting, habitat condition, weather event, or BMP check."
              >
                <span class="bcn-gd-row__text">
                  <span class="bcn-gd-row__title">What is an Observation?</span>
                  <span class="bcn-gd-row__sub"
                    >One recorded field event — a species sighting, habitat condition, weather
                    event, or BMP check.</span
                  >
                </span>
                <span class="esa-icon esa-icon--sm" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </span>
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
          data-article-id="five-minute-tour"
          data-kind="howto"
          data-title="A five-minute tour of Beacon"
          data-summary="The four zones of the app and how a compliance obligation flows through them."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">A five-minute tour of Beacon</span>
            <span class="bcn-gd-row__sub"
              >The four zones of the app and how a compliance obligation flows through them.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="global-search-tips"
          data-kind="howto"
          data-title="Finding anything with search"
          data-summary="Press / anywhere to search commitments, requirements, actions, and documents."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Finding anything with search</span>
            <span class="bcn-gd-row__sub"
              >Press / anywhere to search commitments, requirements, actions, and documents.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="what-is-a-source"
          data-kind="glossary"
          data-title="What is a Source Document?"
          data-summary="The regulatory document — permit, EIR, agreement — obligations are extracted from."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">What is a Source Document?</span>
            <span class="bcn-gd-row__sub"
              >The regulatory document — permit, EIR, agreement — obligations are extracted
              from.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="what-is-a-commitment"
          data-kind="glossary"
          data-title="What is a Commitment?"
          data-summary="One discrete obligation, in the document’s own words."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">What is a Commitment?</span>
            <span class="bcn-gd-row__sub"
              >One discrete obligation, in the document’s own words.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="what-is-a-requirement"
          data-kind="glossary"
          data-title="What is a Requirement?"
          data-summary="A specific, actionable sub-obligation broken out of a commitment."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">What is a Requirement?</span>
            <span class="bcn-gd-row__sub"
              >A specific, actionable sub-obligation broken out of a commitment.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="what-is-an-action"
          data-kind="glossary"
          data-title="What is an Action?"
          data-summary="One trackable deliverable consolidating requirements that describe the same work."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">What is an Action?</span>
            <span class="bcn-gd-row__sub"
              >One trackable deliverable consolidating requirements that describe the same
              work.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="tracing-lineage"
          data-kind="howto"
          data-title="Tracing a requirement back to its source"
          data-summary="Follow the lineage from any requirement up to the exact document language."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Tracing a requirement back to its source</span>
            <span class="bcn-gd-row__sub"
              >Follow the lineage from any requirement up to the exact document language.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="actions-vs-implementations"
          data-kind="glossary"
          data-title="Actions vs. implementations"
          data-summary="The action is the plan; implementations are the work you actually do."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Actions vs. implementations</span>
            <span class="bcn-gd-row__sub"
              >The action is the plan; implementations are the work you actually do.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="what-is-a-component"
          data-kind="glossary"
          data-title="What is a Component?"
          data-summary="A physical or logical subdivision of the project with its own compliance tracking."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">What is a Component?</span>
            <span class="bcn-gd-row__sub"
              >A physical or logical subdivision of the project with its own compliance
              tracking.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="project-vs-component-scope"
          data-kind="glossary"
          data-title="Project scope vs. component scope"
          data-summary="Scope decides whether work is tracked once, or once per location."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Project scope vs. component scope</span>
            <span class="bcn-gd-row__sub"
              >Scope decides whether work is tracked once, or once per location.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="reading-permit-tracking"
          data-kind="howto"
          data-title="Reading the Permit Tracking board"
          data-summary="Where each permit stands, what is blocking it, and what is due next."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Reading the Permit Tracking board</span>
            <span class="bcn-gd-row__sub"
              >Where each permit stands, what is blocking it, and what is due next.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="starring-components"
          data-kind="howto"
          data-title="Starring components on your dashboard"
          data-summary="Pin the three-to-five components you actually work in."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Starring components on your dashboard</span>
            <span class="bcn-gd-row__sub"
              >Pin the three-to-five components you actually work in.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="reading-critical-now"
          data-kind="howto"
          data-title="How “Most critical right now” is chosen"
          data-summary="Why an item earns a spot at the top of your dashboard."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">How “Most critical right now” is chosen</span>
            <span class="bcn-gd-row__sub"
              >Why an item earns a spot at the top of your dashboard.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="what-is-a-dmr"
          data-kind="glossary"
          data-title="What is a Daily Monitoring Report?"
          data-summary="The structured field report of a day on site — and a direct source of evidence."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">What is a Daily Monitoring Report?</span>
            <span class="bcn-gd-row__sub"
              >The structured field report of a day on site — and a direct source of evidence.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="qc-field-surveys"
          data-kind="howto"
          data-title="Reviewing field surveys before they count"
          data-summary="Surveys sync from field apps, but only QC-approved records drive compliance."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Reviewing field surveys before they count</span>
            <span class="bcn-gd-row__sub"
              >Surveys sync from field apps, but only QC-approved records drive compliance.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span></button
        ><button
          type="button"
          class="bcn-gd-row"
          data-article-id="what-is-evidence"
          data-kind="glossary"
          data-title="What counts as Evidence of Compliance?"
          data-summary="The documented proof an obligation was met — the artifact an auditor sees."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">What counts as Evidence of Compliance?</span>
            <span class="bcn-gd-row__sub"
              >The documented proof an obligation was met — the artifact an auditor sees.</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
    <!-- Pinned footer: one persistent browse affordance, then the composer. -->
    <div slot="footer" class="bcn-gd__foot">
      <a class="bcn-gd__browse" data-gd-browse="" href="/beacon-design/prototypes/help">
        Browse all Help &amp; Guidance
        <svg
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
          <path d="M5 12h14M13 5l7 7-7 7"></path>
        </svg>
      </a>
      <div class="bcn-gd-composer">
        <textarea
          class="bcn-gd-composer__input"
          data-gd-ask=""
          rows="1"
          placeholder="Ask Aldo a question…"
          aria-label="Ask Aldo a question"
        ></textarea>
        <button
          type="button"
          class="bcn-gd-composer__send"
          data-gd-ask-send=""
          aria-label="Send question"
          disabled=""
        >
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
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
              <path d="M12 19V5"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </esa-side-dialog>
  <!-- Aldo avatar cloned into each reply message (reuses the real mark). -->
  <template data-gd-aldo-avatar=""
    ><span class="bcn-aldo-mark" data-size="sm" aria-hidden="true" data-astro-cid-omctboch="">
      <span class="bcn-aldo-mark__glyph" data-astro-cid-omctboch="">
        <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-6mqbuw4b="">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
            data-astro-cid-6mqbuw4b=""
          >
            <path
              d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
            ></path>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </span>
      </span>
    </span>
  </template>
  <!-- ── Article reader (child, stacked above the drawer) ── -->
  <esa-side-dialog
    class="bcn-gd-article"
    data-gd-article="true"
    position="right"
    heading="Guidance article"
    size="md"
  >
    <div slot="header" class="bcn-gd-article__head">
      <button type="button" class="bcn-gd-article__back" data-gd-article-back="">
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
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
            <path d="M19 12H5"></path>
          </svg>
        </span>
        All guidance
      </button>
      <span class="bcn-gd-article__titlerow">
        <span class="bcn-gd-article__title" data-gd-article-title=""></span>
        <span class="bcn-gd-article__kind" data-gd-article-kind=""></span>
      </span>
    </div>
    <div class="bcn-gd-article__body">
      <div
        class="bcn-gd-article__panel"
        data-article-body="five-minute-tour"
        data-kind="howto"
        data-title="A five-minute tour of Beacon"
        hidden=""
      >
        <article id="article-five-minute-tour" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p type-body">
              Beacon turns a shelf of regulatory documents into a working compliance program.
              Everything in the app follows one flow: documents are cataloged, obligations are
              planned into actions, and completed work is proven with evidence.
            </p>
            <figure class="bcn-help-article__video">
              <div class="bcn-help-article__video-frame">
                <span class="bcn-help-article__video-play"
                  ><span class="esa-icon esa-icon--md" aria-hidden="true">
                    <svg
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
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </span>
                </span>
                <span class="bcn-help-article__video-duration"
                  ><span class="esa-badge esa-badge--primary esa-badge--sm">
                    <span class="esa-badge__text">4:32</span>
                  </span>
                </span>
              </div>
              <figcaption class="bcn-help-article__caption type-caption">
                Watch: a quick tour of Beacon
              </figcaption>
            </figure>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                The Data Catalog holds your source documents and the commitments and requirements
                extracted from them.
              </li>
              <li class="bcn-help-article__step type-body">
                Tracking is where planned actions become day-to-day work, tracked per project or per
                component.
              </li>
              <li class="bcn-help-article__step type-body">
                Monitoring captures what happens in the field — daily reports, observations, and
                surveys.
              </li>
              <li class="bcn-help-article__step type-body">
                Reporting assembles evidence of compliance into the reports your agencies expect.
              </li>
            </ol>
            <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
              <span class="bcn-help-article__callout-icon">
                <span class="esa-icon esa-icon--sm" aria-hidden="true">
                  <svg
                    width="16"
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
                    <path d="M10 22h4"></path>
                  </svg>
                </span>
              </span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Tip</span>
                <p class="bcn-help-article__callout-text type-body">
                  The side navigation mirrors these four zones. If you are ever lost, start from
                  your project dashboard — it links into each zone.
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
                  >What is an Action?</a
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
            <p class="bcn-help-article__p type-body">
              Search reads the full text of everything in your project — including the body text of
              commitments and uploaded documents, not just titles.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                Press / on any page, or click the search field in the top bar.
              </li>
              <li class="bcn-help-article__step type-body">
                Type a few words — results group by type (commitments, requirements, actions,
                documents) with matching snippets highlighted.
              </li>
              <li class="bcn-help-article__step type-body">
                Press Enter on a result to jump straight to it, or choose “See all results” for the
                full page with filters.
              </li>
            </ol>
            <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
              <span class="bcn-help-article__callout-icon">
                <span class="esa-icon esa-icon--sm" aria-hidden="true">
                  <svg
                    width="16"
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
                    <path d="M10 22h4"></path>
                  </svg>
                </span>
              </span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Tip</span>
                <p class="bcn-help-article__callout-text type-body">
                  Searching a permit number or an agency name is often the fastest way to find every
                  obligation tied to it.
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
        data-article-body="what-is-a-source"
        data-kind="glossary"
        data-title="What is a Source Document?"
        hidden=""
      >
        <article id="article-what-is-a-source" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p type-body">
              A Source Document is a regulatory document attached to your project: a permit, an
              environmental impact report, an incidental take permit, a contract, or an agency
              agreement. It is where every obligation in Beacon originally comes from.
            </p>
            <p class="bcn-help-article__p type-body">
              A project may carry dozens of sources from different agencies, and each source may
              contain anywhere from a handful to hundreds of discrete obligations. Uploading the
              original PDF lets Beacon extract its text for search and assisted commitment
              extraction.
            </p>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-a-commitment"
                  >What is a Commitment?</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="what-is-a-commitment"
        data-kind="glossary"
        data-title="What is a Commitment?"
        hidden=""
      >
        <article id="article-what-is-a-commitment" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p type-body">
              A Commitment is a single “thing the project must do,” captured in the original
              regulatory language of its source document. Commitments carry structured details —
              type, resource category, phases, species, seasons — so they can be filtered and
              planned.
            </p>
            <p class="bcn-help-article__p type-body">
              The same real-world obligation often appears in several documents. Each appearance is
              kept as its own commitment; the overlap is resolved later, when requirements are
              consolidated into actions.
            </p>
            <aside class="bcn-help-article__callout bcn-help-article__callout--note">
              <span class="bcn-help-article__callout-icon">
                <span class="esa-icon esa-icon--sm" aria-hidden="true">
                  <svg
                    width="16"
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
                    <path d="M12 8h.01"></path>
                  </svg>
                </span>
              </span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Note</span>
                <p class="bcn-help-article__callout-text type-body">
                  When an agency amends a document, commitments are revised rather than replaced —
                  the original and updated language coexist with clear lineage.
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
                  href="/beacon-design/prototypes/help#article-what-is-a-source"
                  >What is a Source Document?</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-a-requirement"
                  >What is a Requirement?</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="what-is-a-requirement"
        data-kind="glossary"
        data-title="What is a Requirement?"
        hidden=""
      >
        <article id="article-what-is-a-requirement" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p type-body">
              A Requirement is one specific piece of work inside a commitment. A commitment stating
              “prior to grading, conduct protocol-level surveys for burrowing owl and submit results
              within 30 days” contains two requirements: conduct the survey, and submit the results.
            </p>
            <p class="bcn-help-article__p type-body">
              Requirements carry their own type, scope, and frequency, and are the unit that gets
              consolidated into trackable actions.
            </p>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-a-commitment"
                  >What is a Commitment?</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-an-action"
                  >What is an Action?</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="what-is-an-action"
        data-kind="glossary"
        data-title="What is an Action?"
        hidden=""
      >
        <article id="article-what-is-an-action" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p type-body">
              An Action is a planned unit of compliance work. It consolidates requirements — often
              from many commitments — that describe the same underlying task. If “submit the
              stormwater plan” appears in 44 different commitments, it becomes one action.
            </p>
            <figure class="bcn-help-article__figure">
              <div class="bcn-help-article__figure-frame">
                <span class="bcn-help-article__figure-icon"
                  ><span class="esa-icon esa-icon--lg" aria-hidden="true">
                    <svg
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
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                  </span>
                </span>
                <span class="bcn-help-article__figure-label">From documents to work</span>
              </div>
              <figcaption class="bcn-help-article__caption type-caption">
                Thousands of requirements across dozens of documents collapse into a few hundred
                actions — the minimum set of real work.
              </figcaption>
            </figure>
            <p class="bcn-help-article__p type-body">
              Each action defines the work, the evidence expected, the schedule, and the responsible
              party. Actions start as drafts and must be published before they generate trackable
              implementations.
            </p>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-a-requirement"
                  >What is a Requirement?</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-actions-vs-implementations"
                  >Actions vs. implementations</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-project-vs-component-scope"
                  >Project scope vs. component scope</a
                >
              </li>
            </ul>
          </nav>
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
            <p class="bcn-help-article__p type-body">
              Every requirement keeps its full ancestry: the commitment it came from, and the source
              document that commitment was extracted from. This is how you answer “why do we have to
              do this?” with the exact regulatory language.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                Open the requirement — the lineage strip at the top shows Source → Commitment →
                Requirement.
              </li>
              <li class="bcn-help-article__step type-body">
                Click the commitment to read the obligation in the document’s original words.
              </li>
              <li class="bcn-help-article__step type-body">
                Click the source to see the document’s details, agency, and attached PDF — with the
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
                  >What is a Requirement?</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-a-source"
                  >What is a Source Document?</a
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
        data-title="Actions vs. implementations"
        hidden=""
      >
        <article id="article-actions-vs-implementations" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p type-body">
              An action defines what must be done. An implementation tracks actually doing it —
              status, assignee, tasks, comments, and evidence. Most teams simply call
              implementations “the actions,” and that is fine: they are the thing you interact with
              daily.
            </p>
            <p class="bcn-help-article__p type-body">
              How many implementations an action produces depends on its scope and frequency. A
              one-time, project-wide plan submission produces one. A recurring, component-scoped
              inspection produces one per component, per occurrence.
            </p>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-an-action"
                  >What is an Action?</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-project-vs-component-scope"
                  >Project scope vs. component scope</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="what-is-a-component"
        data-kind="glossary"
        data-title="What is a Component?"
        hidden=""
      >
        <article id="article-what-is-a-component" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p type-body">
              A Component is a distinct place or package of work within your project — a launch
              shaft, an intake site, a construction segment. Components matter because the same
              obligation often plays out independently at each location.
            </p>
            <p class="bcn-help-article__p type-body">
              Components map to the commitments that apply to them, can carry their own milestone
              dates, and receive their own implementations of component-scoped actions. Work Areas
              subdivide a component further when field tracking needs finer grain.
            </p>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-project-vs-component-scope"
                  >Project scope vs. component scope</a
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
        data-article-body="project-vs-component-scope"
        data-kind="glossary"
        data-title="Project scope vs. component scope"
        hidden=""
      >
        <article id="article-project-vs-component-scope" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p type-body">
              Scope is one of Beacon’s most important switches. A project-scoped action is done
              once, centrally — “submit the project-wide stormwater plan.” A component-scoped action
              is done independently at every applicable component — “install exclusion fencing” at
              each of 20 construction areas.
            </p>
            <figure class="bcn-help-article__figure">
              <div class="bcn-help-article__figure-frame">
                <span class="bcn-help-article__figure-icon"
                  ><span class="esa-icon esa-icon--lg" aria-hidden="true">
                    <svg
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
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                  </span>
                </span>
                <span class="bcn-help-article__figure-label">The scope multiplier</span>
              </div>
              <figcaption class="bcn-help-article__caption type-caption">
                One component-scoped action across 20 components produces 20 independently tracked
                implementations.
              </figcaption>
            </figure>
            <aside class="bcn-help-article__callout bcn-help-article__callout--note">
              <span class="bcn-help-article__callout-icon">
                <span class="esa-icon esa-icon--sm" aria-hidden="true">
                  <svg
                    width="16"
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
                    <path d="M12 8h.01"></path>
                  </svg>
                </span>
              </span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Note</span>
                <p class="bcn-help-article__callout-text type-body">
                  Each implementation is tracked on its own: different assignees, different
                  timelines, different evidence.
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
                  href="/beacon-design/prototypes/help#article-what-is-a-component"
                  >What is a Component?</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-actions-vs-implementations"
                  >Actions vs. implementations</a
                >
              </li>
            </ul>
          </nav>
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
            <p class="bcn-help-article__p type-body">
              Permit Tracking shows every permit and approval your project needs, each with its
              current status in the acquisition pipeline — from “not yet applied” through agency
              review to “issued.”
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                Each row is one permit; the status lozenge shows where it sits in the pipeline right
                now.
              </li>
              <li class="bcn-help-article__step type-body">
                The date column shows the next deadline — a submittal window, an agency response
                due, or an expiration to renew.
              </li>
              <li class="bcn-help-article__step type-body">
                Open a permit to see its conditions, responsible contacts, and the source document
                it will arrive as once issued.
              </li>
            </ol>
            <figure class="bcn-help-article__video">
              <div class="bcn-help-article__video-frame">
                <span class="bcn-help-article__video-play"
                  ><span class="esa-icon esa-icon--md" aria-hidden="true">
                    <svg
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
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </span>
                </span>
                <span class="bcn-help-article__video-duration"
                  ><span class="esa-badge esa-badge--primary esa-badge--sm">
                    <span class="esa-badge__text">2:47</span>
                  </span>
                </span>
              </div>
              <figcaption class="bcn-help-article__caption type-caption">
                Watch: a permit’s life in Beacon
              </figcaption>
            </figure>
            <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
              <span class="bcn-help-article__callout-icon">
                <span class="esa-icon esa-icon--sm" aria-hidden="true">
                  <svg
                    width="16"
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
                    <path d="M10 22h4"></path>
                  </svg>
                </span>
              </span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Tip</span>
                <p class="bcn-help-article__callout-text type-body">
                  An issued permit usually becomes a new source document — its conditions are
                  extracted as commitments and join the catalog like any other obligation.
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
                  href="/beacon-design/prototypes/help#article-what-is-a-source"
                  >What is a Source Document?</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-a-commitment"
                  >What is a Commitment?</a
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
            <p class="bcn-help-article__p type-body">
              Large projects can have dozens of components, but most people work in a few. Starring
              pins a component to your project dashboard as a card with its Tracking, Monitoring,
              and Reporting pulse — your portal into that component’s own dashboard.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                Open any component and click the star in its header.
              </li>
              <li class="bcn-help-article__step type-body">
                Starred components appear on your project dashboard in the Components section.
              </li>
              <li class="bcn-help-article__step type-body">
                Un-star from either place; the component itself is unaffected.
              </li>
            </ol>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-a-component"
                  >What is a Component?</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-reading-critical-now"
                  >How “Most critical right now” is chosen</a
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
        data-title="How “Most critical right now” is chosen"
        hidden=""
      >
        <article id="article-reading-critical-now" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p type-body">
              The dashboard’s critical surface is deliberately small: it elevates only items that
              are project-critical today — an overdue action on a critical-path component, a lapsed
              survey blocking ground disturbance, a report due to an agency this week.
            </p>
            <p class="bcn-help-article__p type-body">
              Items leave the surface when the underlying condition clears — completing the work,
              filing the report, or a review resolving the block. There is nothing to configure; it
              reads the same signals shown in each zone.
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
                  href="/beacon-design/prototypes/help#article-site-clearance-go-no-go"
                  >Using Site Clearance go/no-go</a
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
        data-title="What is a Daily Monitoring Report?"
        hidden=""
      >
        <article id="article-what-is-a-dmr" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p type-body">
              A Daily Monitoring Report (DMR) captures one day of field monitoring: who observed,
              site and weather conditions, construction activities underway, observations recorded,
              photos, and narrative notes.
            </p>
            <p class="bcn-help-article__p type-body">
              DMRs are a bridge to compliance: when an obligation says “conduct daily biological
              monitoring during construction,” the DMRs documenting that monitoring are the evidence
              the obligation was met.
            </p>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-an-observation"
                  >What is an Observation?</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-evidence"
                  >What counts as Evidence of Compliance?</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
      <div
        class="bcn-gd-article__panel"
        data-article-body="what-is-an-observation"
        data-kind="glossary"
        data-title="What is an Observation?"
        hidden=""
      >
        <article id="article-what-is-an-observation" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p type-body">
              An Observation is a single recorded event from the field: “two burrowing owls at the
              north staging area,” “silt fence along the eastern boundary intact,” “wind exceeded 25
              mph, dust control activated.” Observations usually belong to a DMR and carry species
              data, location, time, and photos.
            </p>
            <aside class="bcn-help-article__callout bcn-help-article__callout--note">
              <span class="bcn-help-article__callout-icon">
                <span class="esa-icon esa-icon--sm" aria-hidden="true">
                  <svg
                    width="16"
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
                    <path d="M12 8h.01"></path>
                  </svg>
                </span>
              </span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Note</span>
                <p class="bcn-help-article__callout-text type-body">
                  Observations with compliance consequences — an active nest inside a buffer, a
                  failed BMP — surface in Monitoring as items needing action, and can trigger review
                  before work proceeds.
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
                  href="/beacon-design/prototypes/help#article-what-is-a-dmr"
                  >What is a Daily Monitoring Report?</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-site-clearance-go-no-go"
                  >Using Site Clearance go/no-go</a
                >
              </li>
            </ul>
          </nav>
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
            <p class="bcn-help-article__p type-body">
              Survey records flow in from field collection tools (Fulcrum, Survey123). Before a
              record affects compliance — clearances, countdowns, evidence — it passes a
              quality-control review.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                New records land with a “pending QC” status in the Surveys grid.
              </li>
              <li class="bcn-help-article__step type-body">
                A reviewer checks species identification, coordinates, and required fields, then
                approves or returns the record.
              </li>
              <li class="bcn-help-article__step type-body">
                Views default to QC-approved records only; toggle the filter to see pending ones.
              </li>
            </ol>
          </div>
          <nav class="bcn-help-article__related" aria-label="Related articles">
            <span class="bcn-help-article__related-label">Related</span>
            <ul class="bcn-help-article__related-list">
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-an-observation"
                  >What is an Observation?</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-what-is-a-dmr"
                  >What is a Daily Monitoring Report?</a
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
            <p class="bcn-help-article__p type-body">
              Site Clearance answers one question per site: is it clear to disturb ground today? The
              system detects potential blocks — a lapsed nesting survey, an unclosed wildlife buffer
              — and marks the site provisionally blocked until a qualified reviewer decides.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                Green sites are clear; amber sites carry a provisional block awaiting review; red
                sites are blocked by a recorded decision.
              </li>
              <li class="bcn-help-article__step type-body">
                Open a site to see each discipline’s reviews, the detections behind them, and the
                required outcome.
              </li>
              <li class="bcn-help-article__step type-body">
                Reviews overrule detections: the system detects, humans decide.
              </li>
            </ol>
            <aside class="bcn-help-article__callout bcn-help-article__callout--tip">
              <span class="bcn-help-article__callout-icon">
                <span class="esa-icon esa-icon--sm" aria-hidden="true">
                  <svg
                    width="16"
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
                    <path d="M10 22h4"></path>
                  </svg>
                </span>
              </span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Tip</span>
                <p class="bcn-help-article__callout-text type-body">
                  The map and the review list are the same data — pick whichever view fits how you
                  work.
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
                  href="/beacon-design/prototypes/help#article-what-is-an-observation"
                  >What is an Observation?</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-reading-critical-now"
                  >How “Most critical right now” is chosen</a
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
        data-title="What counts as Evidence of Compliance?"
        hidden=""
      >
        <article id="article-what-is-evidence" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p type-body">
              Evidence of Compliance is the end of the whole flow: the report, photo, receipt,
              signed form, or monitoring record that proves an obligation was met. It is what you
              present to a regulatory agency during an audit.
            </p>
            <p class="bcn-help-article__p type-body">
              Evidence attaches to action implementations, and can also link to checklist items to
              satisfy specific requirements per component. Field-sourced evidence can come straight
              from Daily Monitoring Reports.
            </p>
            <aside class="bcn-help-article__callout bcn-help-article__callout--note">
              <span class="bcn-help-article__callout-icon">
                <span class="esa-icon esa-icon--sm" aria-hidden="true">
                  <svg
                    width="16"
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
                    <path d="M12 8h.01"></path>
                  </svg>
                </span>
              </span>
              <div class="bcn-help-article__callout-body">
                <span class="bcn-help-article__callout-label">Note</span>
                <p class="bcn-help-article__callout-text type-body">
                  Every evidence record keeps its files, metadata, and timestamps — an auditable
                  trail from source document to proof.
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
                  href="/beacon-design/prototypes/help#article-what-is-a-dmr"
                  >What is a Daily Monitoring Report?</a
                >
              </li>
              <li>
                <a
                  class="bcn-help-article__related-link"
                  href="/beacon-design/prototypes/help#article-actions-vs-implementations"
                  >Actions vs. implementations</a
                >
              </li>
            </ul>
          </nav>
        </article>
      </div>
    </div>
  </esa-side-dialog>
  <script
    type="module"
    src="/beacon-design/_astro/BcnGuidanceDrawer.astro_astro_type_script_index_0_lang.BSgV_Ns6.js"
  ></script>
</div>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
.esa-button {
  --_btn-height: var(--form-height-md, 40px);
  --_btn-padding-x: var(--form-padding-x-md, 16px);
  --_btn-font-size: var(--form-font-size-md, 14px);
  --_btn-radius: var(--form-radius-md, 6px);
  --_accent: var(--color-primary, #46a758);
  --_accent-hover: var(--color-primary-hover, #3e9b4f);
  --_on: var(--color-text-inverse, #ffffff);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button__native {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  height: var(--_btn-height);
  padding-inline: var(--_btn-padding-x);
  border: 1px solid transparent;
  border-radius: var(--_btn-radius);
  font-size: var(--_btn-font-size);
  font-family: var(--font-sans, system-ui, sans-serif);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  background: transparent;
  color: var(--_accent-text);
  border-color: var(--_accent);
}
.esa-button--color-ghost .esa-button__native {
  background: transparent;
  color: var(--color-text-primary, #171717);
  border-color: transparent;
}
.esa-button--color-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--color-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border, #e5e5e5);
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button--sm {
  --_btn-height: var(--form-height-sm, 32px);
  --_btn-padding-x: var(--form-padding-x-sm, 12px);
  --_btn-font-size: var(--form-font-size-sm, 12px);
  --_btn-radius: var(--form-radius-sm, 4px);
}
.esa-button--sm .esa-button__native {
  height: auto;
  padding-block: var(--spacing-150, 6px);
}
.modern-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
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
.topbar {
  padding: 0 var(--spacing-400);
}
.topbar__left {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
}
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
  transition:
    background 0.15s ease,
    color 0.15s ease;
}
.sidebar-toggle__icon {
  transition: transform 0.15s ease;
}
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
  transition: background 0.15s ease;
}
.topbar__center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  gap: var(--spacing-400);
  padding: 0 var(--spacing-400);
}
.bcn-search-trigger {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  padding: var(--spacing-150) var(--spacing-300);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  cursor: text;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-search-trigger__placeholder {
  flex: 1;
  min-width: 0;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--type-size-200);
  color: var(--color-text-tertiary);
}
.bcn-search-trigger__kbd {
  display: inline-flex;
  gap: 2px;
  flex: none;
}
.bcn-search-trigger__kbd kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  font-family: inherit;
  font-size: 11px;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-tertiary);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border);
  border-radius: 4px;
}
.topbar__right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--spacing-100);
}
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
  color: var(--color-text-secondary);
  text-decoration: none;
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
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
  transition: transform 0.15s ease;
}
.user-menu-trigger__avatar {
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  object-fit: cover;
  border: 2px solid var(--bcn-gray-200);
  transition: border-color 0.15s ease;
}
.user-menu-trigger__avatar--fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bcn-gray-200);
  color: var(--bcn-gray-500);
}
.user-panel {
  position: absolute;
  top: calc(100% + var(--spacing-200));
  right: 0;
  min-width: 280px;
  background: var(--color-surface);
  border-radius: var(--spacing-200);
  border: 1px solid var(--bcn-gray-200);
  box-shadow: 0 4px 24px #0000001f;
  z-index: 1200;
}
.user-panel[hidden] {
  display: none;
}
.modern-layout__body {
  display: flex;
  flex: 1;
  overflow: hidden;
  padding-top: 52px;
}
.side-nav {
  width: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--bcn-gray-50);
  font-size: 0.875rem;
  overflow: visible;
  transition: width 0.2s ease-in-out;
  border-right: 1px solid var(--bcn-gray-200);
  flex-shrink: 0;
}
.sidebar-header {
  flex-shrink: 0;
  padding: var(--spacing-300) var(--spacing-400);
  transition: padding 0.2s ease-in-out;
}
.site-logo {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-200);
  border-radius: var(--spacing-050);
  text-decoration: none;
  transition: background 0.15s ease;
}
.site-logo__img {
  width: var(--spacing-700);
  height: 3.75rem;
  object-fit: contain;
  object-position: left center;
  transition: all 0.2s ease-in-out;
}
.project-switcher-container {
  flex-shrink: 0;
  padding: 0 var(--spacing-400) var(--spacing-300);
  transition: padding 0.2s ease-in-out;
  min-width: 0;
}
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
  transition: all 0.15s ease;
  color: var(--bcn-gray-950);
  font-size: 0.875rem;
  font-weight: 500;
}
.project-switcher__trigger > .esa-icon:first-child {
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
.main-nav {
  flex: 1;
  overflow-y: auto;
  overflow-x: visible;
  padding: 0 var(--spacing-400);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-050);
  transition: padding 0.2s ease-in-out;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.nav-section {
  display: flex;
  flex-direction: column;
  position: relative;
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
  transition: all 0.15s ease;
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
.nav-section__header > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-950);
  transition: color 0.15s ease;
}
.nav-section__title {
  flex: 1;
  overflow: hidden;
  transition: opacity 0.2s ease-in-out;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  transition:
    transform 0.15s ease,
    opacity 0.2s ease-in-out;
  flex-shrink: 0;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
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
  transition:
    max-height 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__items {
  max-height: 0;
  opacity: 0;
}
.nav-item {
  padding: 0 0 0 2.5rem;
}
.nav-sublink {
  display: block;
  padding: var(--spacing-200);
  color: var(--bcn-gray-950);
  text-decoration: none;
  border-radius: var(--spacing-050);
  font-size: 0.8125rem;
  transition: all 0.15s ease;
  line-height: 1.2;
}
.nav-item + .nav-item {
  margin-top: var(--spacing-050);
}
.nav-divider {
  flex-shrink: 0;
  height: 1px;
  margin: var(--spacing-200) 0;
  border: 0;
  background: var(--bcn-gray-200);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.nav-subdivider {
  list-style: none;
  height: 1px;
  margin: var(--spacing-150) 0 var(--spacing-150) 2.5rem;
  background: var(--bcn-gray-200);
}
.nav-sublink.active {
  background: #0000000a;
  color: var(--color-primary);
}
.modern-layout__content {
  flex: 1;
  overflow-y: auto;
  min-width: 0;
}
.bcn-omni {
  position: fixed;
  inset: 0;
  z-index: 1300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-500);
}
.bcn-omni[hidden] {
  display: none;
}
.bcn-help-bar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-100) var(--spacing-150);
  color: var(--bcn-helpbar-fg);
  background: var(--bcn-helpbar-bg);
  -webkit-backdrop-filter: blur(14px) saturate(1.4);
  backdrop-filter: blur(14px) saturate(1.4);
  border: 1px solid var(--bcn-helpbar-border);
  border-radius: var(--radius-400, 14px);
  box-shadow: 0 8px 24px #00000047;
}
.bcn-help-bar__guidance {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  height: 40px;
  padding: 0 var(--spacing-250, 0.625rem);
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: var(--bcn-helpbar-fg);
  font-family: inherit;
  font-size: var(--type-size-200, 0.9375rem);
  font-weight: var(--font-weight-medium);
  line-height: 1;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
}
.bcn-aldo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-text-inverse);
  line-height: 0;
}
.bcn-aldo-mark[data-size="sm"] {
  width: 20px;
  height: 20px;
  --icon-size-xs: 12px;
}
.bcn-aldo-mark__glyph {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}
.bcn-help-bar__guidance-label {
  white-space: nowrap;
}
.bcn-help-bar__divider {
  flex: none;
  width: 1px;
  height: 22px;
  margin: 0 var(--spacing-050, 2px);
  background: var(--bcn-helpbar-divider);
}
.bcn-help-bar__tooltip,
.bcn-help-bar__popover {
  display: inline-flex;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar__whatsnew {
  position: relative;
  display: inline-flex;
}
.bcn-help-bar__dot {
  position: absolute;
  top: 7px;
  right: 7px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--bcn-aldo);
  box-shadow: 0 0 0 2px var(--bcn-helpbar-bg-solid);
  pointer-events: none;
}
.bcn-help-bar__panel {
  width: 340px;
  max-width: 84vw;
  color: var(--color-text-primary);
}
.bcn-help-bar__panel-title {
  margin: 0 0 var(--spacing-200);
  font-size: var(--type-size-200, 0.9375rem);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-help-bar__panel-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-help-bar__panel-item {
  display: flex;
  gap: var(--spacing-200);
}
.bcn-help-bar__panel-icon {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-200, var(--radius-100));
  background: var(--color-surface-sunken);
  color: var(--color-text-secondary);
}
.bcn-help-bar__panel-text {
  flex: 1;
  min-width: 0;
}
.bcn-help-bar__panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-200);
  margin: 0 0 2px;
}
.bcn-help-bar__panel-item-title {
  margin: 0;
  font-size: var(--type-size-200, 0.9375rem);
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  color: var(--color-text-primary);
}
.bcn-help-bar__panel-head .bcn-count {
  flex: none;
}
.bcn-help-bar__panel-item-blurb {
  margin: 0;
  font-size: var(--type-size-150, 0.875rem);
  font-weight: var(--font-weight-regular, 400);
  line-height: 1.45;
  color: var(--color-text-secondary);
}
.bcn-help-bar__panel-footer {
  margin-top: var(--spacing-300);
  padding-top: var(--spacing-250, 0.625rem);
  border-top: 1px solid var(--color-border);
}
.bcn-help-bar__panel-all {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: var(--type-size-150, 0.875rem);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  text-decoration: none;
}
.bcn-help-bar__panel-all-arrow {
  transition: transform 0.15s ease;
}
.bcn-gd {
  --z-modal-backdrop: 1300;
  --z-modal: 1301;
  --side-dialog-width: 460px;
  --backdrop-filter: blur(2px);
}
.bcn-gd__header {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  min-width: 0;
}
.bcn-aldo-mark[data-size="md"] {
  width: 40px;
  height: 40px;
}
.bcn-gd__title {
  font-family: var(--font-decorative);
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: 1.2;
}
.bcn-gd__stream {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
}
.bcn-gd-msg {
  display: flex;
  gap: var(--spacing-300);
  align-items: flex-start;
}
.bcn-gd-msg__avatar {
  flex: none;
  margin-top: 2px;
}
.bcn-gd-msg__group {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
}
.bcn-gd__section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-gd__label {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  margin: 0;
  font-size: var(--type-size-250);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-gd__here {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--bcn-aldo-50);
  border: 1px solid var(--bcn-aldo-100);
  border-radius: var(--radius-200);
}
.bcn-gd__here-page {
  font-size: var(--type-size-250);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-gd__here-purpose {
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
  line-height: 1.5;
}
.bcn-gd__rows {
  display: flex;
  flex-direction: column;
}
.bcn-gd__foot {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-250);
}
.bcn-gd__browse {
  align-self: flex-end;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  text-decoration: none;
}
.bcn-gd-composer {
  display: flex;
  align-items: flex-end;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-150) var(--spacing-150) var(--spacing-300);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}
.bcn-gd-composer__input {
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  resize: none;
  font-family: inherit;
  font-size: var(--type-size-200);
  line-height: 1.5;
  color: var(--color-text-primary);
  padding: 6px 0;
  overflow-y: hidden;
}
.bcn-gd-composer__input::placeholder {
  color: var(--color-text-tertiary);
}
.bcn-gd-composer__send {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-text-inverse);
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;
}
.bcn-gd-composer__send:disabled {
  background: var(--color-surface-sunken);
  color: var(--color-text-tertiary);
  cursor: default;
}
.bcn-gd-article {
  --z-modal-backdrop: 1302;
  --z-modal: 1303;
  --side-dialog-width: 460px;
  --backdrop-filter: blur(2px);
}
.bcn-gd-article__head {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  min-width: 0;
}
.bcn-gd-article__back {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  align-self: flex-start;
  padding: 0;
  border: 0;
  background: transparent;
  font: inherit;
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  cursor: pointer;
}
.bcn-gd-article__titlerow {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
}
.bcn-gd-article__title {
  font-family: var(--font-decorative);
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: 1.25;
}
.bcn-gd-article__kind {
  flex: none;
  padding: 1px 6px;
  border-radius: var(--radius-100);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  line-height: 1.5;
  white-space: nowrap;
}
.bcn-gd-article__panel[hidden] {
  display: none;
}
.page-layout {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 52px);
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
.breadcrumbs {
  padding: var(--spacing-400) 0;
}
.breadcrumbs__items {
  display: flex;
  gap: var(--spacing-100);
  align-items: center;
  flex-wrap: wrap;
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
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
.page-layout__content {
  padding: var(--spacing-500) 0;
  min-height: 70vh;
  position: relative;
}
.esa-icon {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  --_ib-bg-hover: var(--icon-button-bg-hover, color-mix(in srgb, currentColor 14%, transparent));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_ib-size);
  height: var(--_ib-size);
  padding: 0;
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-filter-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
}
.esa-filter-clear-button {
  --_clear-text: var(--filter-clear-color, var(--color-primary-strong, #3a7c59));
  --_clear-text-hover: var(--filter-clear-color-hover, var(--color-primary-strong, #3a7c59));
  --_clear-font-size: var(--type-size-150, 0.875rem);
  --_clear-icon-size: 18px;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100, 0.25rem);
  padding: var(--spacing-100, 0.25rem) var(--spacing-200, 0.5rem);
  border: none;
  border-radius: var(--radius-100, 0.25rem);
  background: transparent;
  color: var(--_clear-text);
  font-family: var(--font-sans, inherit);
  font-size: var(--_clear-font-size);
  font-weight: var(--font-weight-medium, 450);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
}
.esa-filter-clear-button__icon {
  width: var(--_clear-icon-size);
  height: var(--_clear-icon-size);
  flex: none;
}
.esa-filter-clear-button__label {
  white-space: nowrap;
}
.bcn-status-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
}
.bcn-status-chip__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
}
.bcn-key-value {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.bcn-key-value__key {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-medium);
  color: var(--form-label-color);
}
.esa-collapsible {
  border: 1px solid var(--collapsible-border-color, var(--color-border, #e5e5e5));
  border-radius: var(--collapsible-radius, var(--radius-300, 0.5rem));
  background: var(--collapsible-bg, var(--color-surface, #fff));
}
.esa-collapsible--flush {
  border: none;
  border-radius: 0;
  background: transparent;
}
.esa-collapsible__summary {
  display: flex;
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  padding: var(--spacing-300, 0.75rem) var(--collapsible-padding-x, var(--spacing-400, 1rem));
  font-size: var(--type-size-150, 0.9375rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--collapsible-title-color, var(--color-text-primary, #171717));
  cursor: pointer;
  list-style: none;
}
.esa-collapsible--flush > .esa-collapsible__summary,
.esa-collapsible--flush > .esa-collapsible__body {
  padding-inline: 0;
}
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
}
.esa-collapsible__summary:after {
  content: "";
  width: 8px;
  height: 8px;
  border-right: 2px solid var(--color-text-tertiary, #737373);
  border-bottom: 2px solid var(--color-text-tertiary, #737373);
  transform: rotate(-45deg);
  transition: transform 0.15s ease;
  margin-left: auto;
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-primary, #43608a));
  --_badge-text: var(--badge-text-color, var(--color-text-inverse, #fff));
  --_badge-height: var(--badge-height-md, 28px);
  --_badge-font-size: 13px;
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  --_badge-min-width: var(--badge-height-md, 28px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--_badge-height);
  min-width: var(--_badge-min-width);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--badge-radius, var(--radius-100, 4px));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  font-size: var(--_badge-font-size);
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  box-sizing: border-box;
}
.esa-badge--sm {
  --_badge-height: var(--badge-height-sm, 22px);
  --_badge-font-size: 11px;
  --_badge-padding-x: var(--spacing-150, 0.375rem);
  --_badge-min-width: var(--badge-height-sm, 22px);
}
.bcn-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 var(--spacing-100);
  font-size: 0.8125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-100);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.leaflet-container {
  overflow: hidden;
}
.leaflet-container {
  -webkit-tap-highlight-color: transparent;
}
.leaflet-container {
  background: #ddd;
  outline-offset: 1px;
}
.leaflet-container {
  font-family:
    Helvetica Neue,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 12px;
  font-size: 0.75rem;
  line-height: 1.5;
}
.leaflet-grab {
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;
}
.leaflet-container.leaflet-touch-zoom {
  -ms-touch-action: pan-x pan-y;
  touch-action: pan-x pan-y;
}
.leaflet-container.leaflet-touch-drag {
  -ms-touch-action: pinch-zoom;
  touch-action: none;
  touch-action: pinch-zoom;
}
.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
  -ms-touch-action: none;
  touch-action: none;
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
  left: 0;
  top: 0;
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
  position: absolute;
  z-index: 1000;
  pointer-events: none;
}
.leaflet-top {
  top: 0;
}
.leaflet-left {
  left: 0;
}
.leaflet-control {
  position: relative;
  z-index: 800;
  pointer-events: visiblePainted;
  pointer-events: auto;
}
.leaflet-control {
  float: left;
  clear: both;
}
.leaflet-bar {
  box-shadow: 0 1px 5px #000000a6;
  border-radius: 4px;
}
.leaflet-top .leaflet-control {
  margin-top: 10px;
}
.leaflet-left .leaflet-control {
  margin-left: 10px;
}
.leaflet-touch .leaflet-control-attribution,
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
  box-shadow: none;
}
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-clip: padding-box;
}
.leaflet-control-zoom-in,
.leaflet-control-zoom-out {
  font:
    700 18px Lucida Console,
    Monaco,
    monospace;
  text-indent: 1px;
}
.leaflet-container a {
  -webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);
}
.leaflet-container a {
  color: #0078a8;
}
.leaflet-bar a {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  width: 26px;
  height: 26px;
  line-height: 26px;
  display: block;
  text-align: center;
  text-decoration: none;
  color: #000;
}
.leaflet-bar a,
.leaflet-control-layers-toggle {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: block;
}
.leaflet-touch .leaflet-control-zoom-in,
.leaflet-touch .leaflet-control-zoom-out {
  font-size: 22px;
}
.leaflet-bar a:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.leaflet-touch .leaflet-bar a {
  width: 30px;
  height: 30px;
  line-height: 30px;
}
.leaflet-touch .leaflet-bar a:first-child {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.leaflet-bar a:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom: none;
}
.leaflet-touch .leaflet-bar a:last-child {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}
.leaflet-right {
  right: 0;
}
.leaflet-bottom {
  bottom: 0;
}
.leaflet-control-attribution,
.leaflet-control-scale-line {
  padding: 0 5px;
  color: #333;
  line-height: 1.4;
}
.leaflet-right .leaflet-control {
  float: right;
}
.leaflet-bottom .leaflet-control {
  margin-bottom: 10px;
}
.leaflet-right .leaflet-control {
  margin-right: 10px;
}
.leaflet-container .leaflet-control-attribution {
  background: #fff;
  background: #fffc;
  margin: 0;
}
.leaflet-control-attribution a {
  text-decoration: none;
}
.leaflet-attribution-flag {
  display: inline !important;
  vertical-align: baseline !important;
  width: 1em;
  height: 0.6669em;
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
  max-width: none !important;
  max-height: none !important;
  width: auto;
  padding: 0;
}
.leaflet-container img.leaflet-tile {
  mix-blend-mode: plus-lighter;
}
.leaflet-tile::selection {
  background: transparent;
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
.leaflet-tile-loaded {
  visibility: inherit;
}
.print-header {
  display: none;
}
.map-filterbar {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-300);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
}
.map-filterbar__row {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  padding: var(--spacing-250) var(--spacing-400);
}
.map-filterbar__label {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.map-filterbar__goto {
  margin-left: auto;
  display: flex;
  gap: var(--spacing-200);
}
.map-filterbar__goto esa-combobox {
  --form-height-sm: 32px;
  --form-font-size-sm: var(--type-size-150);
}
.map-filterbar__row + .map-filterbar__row {
  border-top: 1px solid var(--color-border);
}
.map-wrap {
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 480px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  overflow: hidden;
}
.map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.map-legend {
  position: absolute;
  bottom: var(--spacing-400);
  left: var(--spacing-400);
  z-index: 500;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
  padding: var(--spacing-300) var(--spacing-400);
  background: color-mix(in srgb, var(--color-surface) 94%, transparent);
  backdrop-filter: blur(4px);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  box-shadow: var(--shadow-400);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
.map-legend__title {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.map-legend__row {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
}
.map-legend__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-shadow: 0 0 0 2px var(--color-surface);
  flex-shrink: 0;
}
.map-legend__ring {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1.5px dashed var(--obs-color);
  background: color-mix(in srgb, var(--obs-color) 12%, transparent);
  box-sizing: border-box;
  flex-shrink: 0;
}
.map-legend__hollow {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1.5px solid var(--obs-color);
  background: var(--color-surface);
  box-sizing: border-box;
  flex-shrink: 0;
  margin-inline: 2px;
}
.readiness {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  margin-top: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.readiness__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-300);
  flex-wrap: wrap;
}
.readiness__title {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.readiness__summary {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
.readiness__summary strong {
  color: var(--st-cleared);
  font-weight: var(--font-weight-bold);
}
.readiness__bar {
  display: flex;
  height: 10px;
  border-radius: var(--radius-full);
  overflow: hidden;
  background: var(--color-background);
}
.readiness__bar > div + div {
  border-left: 1px solid var(--color-surface);
}
.readiness__legend {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-200) var(--spacing-500);
}
.readiness__legend-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-150);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
.readiness__swatch {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-050);
  flex-shrink: 0;
}
.readiness__legend-label {
  color: var(--color-text-primary);
}
.readiness__legend-count {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
}
.wa__header {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.wa__headmain {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
}
.wa__title {
  margin: 0;
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.wa__subtitle {
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
.wa {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.band {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-200) var(--spacing-300);
  margin: calc(-1 * var(--spacing-500, 1.5rem)) calc(-1 * var(--spacing-500, 1.5rem)) 0;
  padding: var(--spacing-250) var(--spacing-500, 1.5rem);
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
}
.wa__kv-val {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.band__cell[hidden] {
  display: none;
}
.decide {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  padding: var(--spacing-250) var(--spacing-300);
  border-radius: var(--radius-200);
  background: var(--color-background);
  border: 1px solid var(--color-border);
}
.decide[hidden] {
  display: none;
}
.wa__section {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.wa__section .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}
.board {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-200);
}
.board__cell {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-150);
  padding: var(--spacing-250) var(--spacing-300);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-200);
  background: var(--color-surface);
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  transition:
    border-color 0.12s ease,
    background 0.12s ease;
}
.board__cellhead {
  display: flex;
  align-items: center;
  gap: var(--spacing-150);
  width: 100%;
}
.board__dim {
  flex: 1;
  min-width: 0;
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.board__count[hidden],
.board__chipwrap[hidden],
.board__unreviewed[hidden] {
  display: none;
}
.board__chev {
  display: inline-flex;
  color: var(--color-text-tertiary);
}
.gate__unreviewed {
  display: inline-flex;
  align-items: center;
  padding: 2px var(--spacing-250);
  border: 1px dashed var(--color-border-strong);
  border-radius: var(--radius-full);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.gate__unreviewed[hidden] {
  display: none;
}
.board__meta {
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
}
.wa__more {
  display: flex;
  flex-direction: column;
}
.wa__more-item {
  display: block;
}
.wa__more-item[hidden] {
  display: none;
}
.wa__more-item + .wa__more-item {
  border-top: 1px solid var(--color-border-light);
}
.wa__more-item[hidden] + .wa__more-item {
  border-top: none;
}
.wa[hidden] {
  display: none;
}
.wa__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-200);
  width: 100%;
}
.wa__footer-start {
  margin-right: auto;
}
.wa__footer-start .esa-button__label {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
}
.wa__footer [hidden] {
  display: none;
}
.dd__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-300);
}
.dd__count {
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.dd__form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.dd__form[hidden],
#dd-until-wrap[hidden] {
  display: none;
}
.revs {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.od__meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-300) var(--spacing-400);
  margin: 0;
  padding: var(--spacing-400);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.wa__section .esa-badge {
  vertical-align: middle;
}
.wa__conflicts,
.od__impact {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.leaflet-pane,
.leaflet-top,
.leaflet-bottom {
  z-index: 400;
}
#gc-map .leaflet-interactive {
  cursor: pointer;
}
.gc-reset__btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.gc-reset__btn svg {
  width: 16px;
  height: 16px;
  display: block;
}
```

## Tokens
| Token | Value | Tier |
|---|---|---|
| `--badge-bg` | `#005862` | component |
| `--badge-height-md` | `28px` | component |
| `--badge-height-sm` | `22px` | component |
| `--badge-radius` | `.25rem` | component |
| `--badge-text-color` | `#fcfcfc` | component |
| `--bcn-aldo` | `#08908b` | component |
| `--bcn-aldo-100` | `#cfeceb` | component |
| `--bcn-aldo-50` | `#e8f6f5` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000000` | component |
| `--bcn-gray-200` | `#dcdcdc` | component |
| `--bcn-gray-300` | `#bdbdbd` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-50` | `#fafafa` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-600` | `#656565` | component |
| `--bcn-gray-900` | `#3d3d3d` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-helpbar-bg` | `rgba(23, 25, 27, .78)` | component |
| `--bcn-helpbar-bg-solid` | `#1f2224` | component |
| `--bcn-helpbar-border` | `rgba(255, 255, 255, .12)` | component |
| `--bcn-helpbar-divider` | `rgba(255, 255, 255, .16)` | component |
| `--bcn-helpbar-fg` | `rgba(255, 255, 255, .92)` | component |
| `--bcn-helpbar-fg-muted` | `rgba(255, 255, 255, .72)` | component |
| `--bcn-helpbar-hover-bg` | `rgba(255, 255, 255, .1)` | component |
| `--collapsible-bg` | `#fcfcfc` | component |
| `--collapsible-border-color` | `#dcdcdc` | component |
| `--collapsible-padding-x` | `1rem` | component |
| `--collapsible-radius` | `.5rem` | component |
| `--collapsible-title-color` | `#3d3d3d` | component |
| `--color-accent` | `#f76b15` | semantic |
| `--color-background` | `#fafafa` | semantic |
| `--color-border` | `#dcdcdc` | semantic |
| `--color-border-light` | `#efefef` | semantic |
| `--color-border-strong` | `#bdbdbd` | semantic |
| `--color-primary` | `#005862` | semantic |
| `--color-primary-hover` | `#00474f` | semantic |
| `--color-primary-strong` | `#2a7e3b` | semantic |
| `--color-surface` | `#fcfcfc` | semantic |
| `--color-surface-sunken` | `#efefef` | semantic |
| `--color-text-inverse` | `#fcfcfc` | semantic |
| `--color-text-primary` | `#3d3d3d` | semantic |
| `--color-text-secondary` | `#525252` | semantic |
| `--color-text-tertiary` | `#656565` | semantic |
| `--filter-clear-color` | `#7c7c7c` | component |
| `--filter-clear-color-hover` | `#ce2c31` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-sans` | `"DM Sans", sans-serif` | primitive |
| `--font-weight-bold` | `650` | primitive |
| `--font-weight-medium` | `450` | primitive |
| `--font-weight-regular` | `350` | primitive |
| `--font-weight-semibold` | `550` | primitive |
| `--form-font-size-md` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | component |
| `--form-font-size-sm` | `clamp(.625rem, .56rem + .32vw, .75rem)` | component |
| `--form-height-md` | `36px` | component |
| `--form-height-sm` | `28px` | component |
| `--form-label-color` | `#525252` | component |
| `--form-padding-x-md` | `.75rem` | component |
| `--form-padding-x-sm` | `.625rem` | component |
| `--form-radius-md` | `.25rem` | component |
| `--form-radius-sm` | `.25rem` | component |
| `--icon-button-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-medium` | `20px` | component |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-small` | `16px` | component |
| `--icon-size-xs` | `14px` | primitive |
| `--obs-color` | `#7b5ea7` | component |
| `--radius-050` | `.125rem` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-400` | `.75rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--shadow-400` | `0 8px 32px -8px rgba(0, 0, 0, .08)` | primitive |
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
| `--st-cleared` | `#1a9850` | component |
| `--transition-fast` | `.15s ease` | primitive |
| `--type-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--type-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--type-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--type-size-250` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | primitive |
| `--type-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--type-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--type-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
