# Full page

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-project-dashboard** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/project-dashboard/
- **Section element:** `<page>`
- **Components:** esa-badge (hub), esa-button (hub), esa-card (hub), esa-icon (hub), esa-icon-button (hub), esa-stat (hub)

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
        <span>DWR</span>
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
      <a href="/beacon-design/prototypes/settings" class="icon-button" aria-label="ESA-Config">
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
        href="/beacon-design/prototypes/settings"
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
          <span class="project-switcher__name">Delta Conveyance</span>
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
            <li class="nav-item">
              <a href="#dashboard" class="nav-sublink active"> Dashboard </a>
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
        <div class="nav-section">
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
        <div class="nav-section">
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
              <a href="/beacon-design/prototypes/site-clearance" class="nav-sublink">
                Site Clearance
              </a>
            </li>
          </ul>
        </div>
        <div class="nav-section">
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
        <div class="nav-section">
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
      <div class="page-layout page-layout--bleed">
        <div class="page-layout__bleed">
          <section class="bcn-phome" aria-label="Delta Conveyance Project — project home">
            <div class="bcn-phome__cover">
              <img
                class="bcn-phome__hero"
                src="/beacon-design/images/dcp/hero.jpeg"
                alt=""
                aria-hidden="true"
              />
              <button class="bcn-phome__edit bcn-phome__edit--cover" type="button">
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
                Change cover
              </button>
            </div>
            <div class="bcn-phome__body">
              <span class="bcn-phome__sealwrap">
                <img
                  class="bcn-phome__seal"
                  src="/beacon-design/images/dcp/dwr-logo.png"
                  alt="DWR seal"
                />
                <button
                  class="bcn-phome__edit bcn-phome__edit--logo"
                  type="button"
                  aria-label="Change logo"
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </span>
                </button>
              </span>
              <div class="bcn-phome__id">
                <div class="bcn-phome__idtop">
                  <h1 class="bcn-phome__name">Delta Conveyance Project</h1>
                  <span
                    class="bcn-status-chip"
                    data-status="phase"
                    style="--_chip: var(--st-phase, var(--color-primary))"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">Pre-Construction</span>
                  </span>
                </div>
                <p class="bcn-phome__eyebrow">Department of Water Resources</p>
              </div>
            </div>
          </section>
        </div>
        <div class="page-layout__container">
          <section class="page-layout__content">
            <div class="stack" data-gap="xl">
              <div class="esa-card">
                <div class="esa-card__header">
                  <div class="esa-card__header-content">
                    <div class="esa-card__titles"><h3 class="esa-card__title">Timeline</h3></div>
                  </div>
                  <div class="esa-card__actions">
                    <div class="bcn-tl__head">
                      <esa-button-toggle
                        id="bcn-tl-window"
                        value="30"
                        size="sm"
                      ></esa-button-toggle>
                    </div>
                  </div>
                </div>
                <div class="esa-card__body">
                  <div class="bcn-tl" data-bcn-timeline="">
                    <!-- Axis -->
                    <div class="bcn-tl__row bcn-tl__row--axis">
                      <span class="bcn-tl__lane-label"></span>
                      <div class="bcn-tl__track" data-tl-axis="">
                        <span class="bcn-tl__today" data-tl-today="" style="left: 18.9189%"
                          ><span class="bcn-tl__today-flag">Today</span></span
                        >
                        <span class="bcn-tl__tick" style="left: 0%">Mar 18</span
                        ><span class="bcn-tl__tick" style="left: 37.8378%">Apr 1</span
                        ><span class="bcn-tl__tick" style="left: 56.7568%">Apr 8</span
                        ><span class="bcn-tl__tick" style="left: 75.6757%">Apr 15</span
                        ><span class="bcn-tl__tick" style="left: 94.5946%">Apr 22</span>
                      </div>
                    </div>
                    <!-- Actions -->
                    <div class="bcn-tl__row">
                      <span class="bcn-tl__lane-label">Actions</span>
                      <div class="bcn-tl__track bcn-tl__track--items" data-tl-lane="actions">
                        <span class="bcn-tl__rule"></span>
                        <button
                          class="bcn-tl__item"
                          type="button"
                          data-tl-mark="action"
                          data-urgency="overdue"
                          aria-label="BIO-03 Nesting-bird preconstruction survey, due Mar 24"
                          style="left: 16.2162%"
                        >
                          <span class="bcn-tl__dot"></span></button
                        ><button
                          class="bcn-tl__item"
                          type="button"
                          data-tl-mark="action"
                          data-urgency="due-soon"
                          aria-label="BIO-21 Giant garter snake preconstruction survey, due Mar 31"
                          style="left: 35.1351%"
                        >
                          <span class="bcn-tl__dot"></span></button
                        ><button
                          class="bcn-tl__item"
                          type="button"
                          data-tl-mark="action"
                          data-urgency="due-soon"
                          aria-label="WQ-05 Turbidity monitoring — in-water work, due Apr 5"
                          style="left: 48.6486%"
                        >
                          <span class="bcn-tl__dot"></span></button
                        ><button
                          class="bcn-tl__item"
                          type="button"
                          data-tl-mark="action"
                          data-urgency="overdue"
                          aria-label="RPT-02 Annual mitigation summary to USFWS, due Mar 18"
                          style="left: 0%"
                        >
                          <span class="bcn-tl__dot"></span></button
                        ><button
                          class="bcn-tl__item"
                          type="button"
                          data-tl-mark="action"
                          data-urgency="due-soon"
                          aria-label="RPT-01 Q1 ITP compliance report to CDFW, due Apr 1"
                          style="left: 37.8378%"
                        >
                          <span class="bcn-tl__dot"></span></button
                        ><button
                          class="bcn-tl__item"
                          type="button"
                          data-tl-mark="action"
                          data-urgency="due-soon"
                          aria-label="RPT-04 Monthly construction compliance report, due Mar 31"
                          style="left: 35.1351%"
                        >
                          <span class="bcn-tl__dot"></span></button
                        ><button
                          class="bcn-tl__item"
                          type="button"
                          data-tl-mark="action"
                          data-urgency="overdue"
                          aria-label="BIO-14 Exclusion fencing inspection, due Mar 21"
                          style="left: 8.10811%"
                        >
                          <span class="bcn-tl__dot"></span></button
                        ><button
                          class="bcn-tl__item"
                          type="button"
                          data-tl-mark="action"
                          data-urgency="overdue"
                          aria-label="AIR-07 Fugitive dust control plan review, due Mar 23"
                          style="left: 13.5135%"
                        >
                          <span class="bcn-tl__dot"></span></button
                        ><button
                          class="bcn-tl__item"
                          type="button"
                          data-tl-mark="action"
                          data-urgency="due-soon"
                          aria-label="CUL-02 Cultural resources worker training, due Mar 30"
                          style="left: 32.4324%"
                        >
                          <span class="bcn-tl__dot"></span></button
                        ><button
                          class="bcn-tl__item"
                          type="button"
                          data-tl-mark="action"
                          data-urgency="due-soon"
                          aria-label="TRA-11 Haul route compliance verification, due Apr 7"
                          style="left: 54.0541%"
                        >
                          <span class="bcn-tl__dot"></span></button
                        ><button
                          class="bcn-tl__item"
                          type="button"
                          data-tl-mark="action"
                          data-urgency="upcoming"
                          aria-label="WQ-12 SWPPP quarterly inspection, due Apr 10"
                          style="left: 62.1622%"
                        >
                          <span class="bcn-tl__dot"></span></button
                        ><button
                          class="bcn-tl__item"
                          type="button"
                          data-tl-mark="action"
                          data-urgency="upcoming"
                          aria-label="NOI-03 Noise monitoring plan submittal, due Apr 22"
                          style="left: 94.5946%"
                        >
                          <span class="bcn-tl__dot"></span>
                        </button>
                      </div>
                    </div>
                    <!-- Seasons -->
                    <div class="bcn-tl__row bcn-tl__row--bars">
                      <span class="bcn-tl__lane-label">Seasons</span>
                      <div
                        class="bcn-tl__track bcn-tl__track--bars"
                        data-tl-lane="seasons"
                        style="height: 88px"
                      >
                        <button
                          class="bcn-tl__bar"
                          type="button"
                          data-tl-mark="season"
                          style="left: 0%; width: 35.1351%; top: 0px"
                        >
                          <span class="bcn-tl__bar-label">CTS breeding season</span
                          ><span class="bcn-tl__bar-dates">Nov 1 – Mar 31</span></button
                        ><button
                          class="bcn-tl__bar"
                          type="button"
                          data-tl-mark="season"
                          style="left: 37.8378%; width: 62.1622%; top: 22px"
                        >
                          <span class="bcn-tl__bar-label">Bat maternity roost season</span
                          ><span class="bcn-tl__bar-dates">Apr 1 – Aug 31</span></button
                        ><button
                          class="bcn-tl__bar"
                          type="button"
                          data-tl-mark="season"
                          style="left: 0%; width: 100%; top: 44px"
                        >
                          <span class="bcn-tl__bar-label">Raptor nesting season</span
                          ><span class="bcn-tl__bar-dates">Feb 1 – Sep 15</span></button
                        ><button
                          class="bcn-tl__bar"
                          type="button"
                          data-tl-mark="season"
                          style="left: 0%; width: 100%; top: 66px"
                        >
                          <span class="bcn-tl__bar-label">Passerine nesting season</span
                          ><span class="bcn-tl__bar-dates">Mar 15 – Sep 1</span>
                        </button>
                      </div>
                    </div>
                    <div class="bcn-tl__row bcn-tl__row--more">
                      <span class="bcn-tl__lane-label"></span>
                      <button class="bcn-tl__showall" type="button" data-tl-showall="">
                        Show all 11 seasons
                      </button>
                    </div>
                    <!-- Milestones -->
                    <div class="bcn-tl__row">
                      <span class="bcn-tl__lane-label">Milestones</span>
                      <div class="bcn-tl__track bcn-tl__track--items" data-tl-lane="milestones">
                        <span class="bcn-tl__rule"></span>
                        <button
                          class="bcn-tl__item bcn-tl__item--ms"
                          type="button"
                          data-tl-mark="milestone"
                          aria-label="USACE Section 408 permission, Apr 15"
                          style="left: 75.6757%"
                        >
                          <span class="bcn-tl__diamond"></span>
                        </button>
                      </div>
                    </div>
                    <p class="bcn-tl__empty" data-tl-empty="" hidden="">
                      Nothing scheduled in this window.
                    </p>
                    <!-- One click-pinned popover, repositioned per mark. -->
                  </div>
                  <script type="application/json" data-tl-data="">
                    {
                      "actions": [
                        {
                          "code": "BIO-03",
                          "name": "Nesting-bird preconstruction survey",
                          "type": "monitoring",
                          "where": "Bouldin Island Launch Shaft",
                          "status": "In Progress",
                          "day": -1,
                          "urgency": "overdue",
                          "date": "Mar 24",
                          "href": "/beacon-design/prototypes/monitoring/dashboard"
                        },
                        {
                          "code": "BIO-21",
                          "name": "Giant garter snake preconstruction survey",
                          "type": "monitoring",
                          "where": "Southern Forebay & Pumping Plant",
                          "status": "Not Started",
                          "day": 6,
                          "urgency": "due-soon",
                          "date": "Mar 31",
                          "href": "/beacon-design/prototypes/monitoring/dashboard"
                        },
                        {
                          "code": "WQ-05",
                          "name": "Turbidity monitoring — in-water work",
                          "type": "monitoring",
                          "where": "Intake B — North Delta",
                          "status": "In Progress",
                          "day": 11,
                          "urgency": "due-soon",
                          "date": "Apr 5",
                          "href": "/beacon-design/prototypes/monitoring/dashboard"
                        },
                        {
                          "code": "BIO-09",
                          "name": "Swainson’s hawk nest buffer verification",
                          "type": "monitoring",
                          "where": "Twin Cities Complex",
                          "status": "Not Started",
                          "day": 34,
                          "urgency": "upcoming",
                          "date": "Apr 28",
                          "href": "/beacon-design/prototypes/monitoring/dashboard"
                        },
                        {
                          "code": "BIO-30",
                          "name": "Vernal pool branchiopod wet-season survey",
                          "type": "monitoring",
                          "where": "Southern Forebay & Pumping Plant",
                          "status": "Not Started",
                          "day": 56,
                          "urgency": "upcoming",
                          "date": "May 20",
                          "href": "/beacon-design/prototypes/monitoring/dashboard"
                        },
                        {
                          "code": "RPT-02",
                          "name": "Annual mitigation summary to USFWS",
                          "type": "reporting",
                          "where": "Project-wide",
                          "status": "In Progress",
                          "day": -7,
                          "urgency": "overdue",
                          "date": "Mar 18",
                          "href": "#report-center"
                        },
                        {
                          "code": "RPT-01",
                          "name": "Q1 ITP compliance report to CDFW",
                          "type": "reporting",
                          "where": "Project-wide",
                          "status": "In Progress",
                          "day": 7,
                          "urgency": "due-soon",
                          "date": "Apr 1",
                          "href": "#report-center"
                        },
                        {
                          "code": "RPT-04",
                          "name": "Monthly construction compliance report",
                          "type": "reporting",
                          "where": "Project-wide",
                          "status": "Not Started",
                          "day": 6,
                          "urgency": "due-soon",
                          "date": "Mar 31",
                          "href": "#report-center"
                        },
                        {
                          "code": "RPT-07",
                          "name": "Delta Plan consistency annual report",
                          "type": "reporting",
                          "where": "Project-wide",
                          "status": "Not Started",
                          "day": 68,
                          "urgency": "upcoming",
                          "date": "Jun 1",
                          "href": "#report-center"
                        },
                        {
                          "code": "BIO-14",
                          "name": "Exclusion fencing inspection",
                          "type": "tracking",
                          "where": "Intake B — North Delta",
                          "status": "In Progress",
                          "day": -4,
                          "urgency": "overdue",
                          "date": "Mar 21",
                          "href": "/beacon-design/prototypes/data-catalog-action"
                        },
                        {
                          "code": "AIR-07",
                          "name": "Fugitive dust control plan review",
                          "type": "tracking",
                          "where": "Project-wide",
                          "status": "In Progress",
                          "day": -2,
                          "urgency": "overdue",
                          "date": "Mar 23",
                          "href": "/beacon-design/prototypes/data-catalog-action"
                        },
                        {
                          "code": "CUL-02",
                          "name": "Cultural resources worker training",
                          "type": "tracking",
                          "where": "Bouldin Island Launch Shaft",
                          "status": "Not Started",
                          "day": 5,
                          "urgency": "due-soon",
                          "date": "Mar 30",
                          "href": "/beacon-design/prototypes/data-catalog-action"
                        },
                        {
                          "code": "TRA-11",
                          "name": "Haul route compliance verification",
                          "type": "tracking",
                          "where": "Twin Cities Complex",
                          "status": "Not Started",
                          "day": 13,
                          "urgency": "due-soon",
                          "date": "Apr 7",
                          "href": "/beacon-design/prototypes/data-catalog-action"
                        },
                        {
                          "code": "WQ-12",
                          "name": "SWPPP quarterly inspection",
                          "type": "tracking",
                          "where": "Southern Forebay & Pumping Plant",
                          "status": "Not Started",
                          "day": 16,
                          "urgency": "upcoming",
                          "date": "Apr 10",
                          "href": "/beacon-design/prototypes/data-catalog-action"
                        },
                        {
                          "code": "NOI-03",
                          "name": "Noise monitoring plan submittal",
                          "type": "tracking",
                          "where": "Bouldin Island Launch Shaft",
                          "status": "Not Started",
                          "day": 28,
                          "urgency": "upcoming",
                          "date": "Apr 22",
                          "href": "/beacon-design/prototypes/data-catalog-action"
                        },
                        {
                          "code": "VEG-06",
                          "name": "Revegetation plan agency review",
                          "type": "tracking",
                          "where": "Project-wide",
                          "status": "Not Started",
                          "day": 47,
                          "urgency": "upcoming",
                          "date": "May 11",
                          "href": "/beacon-design/prototypes/data-catalog-action"
                        },
                        {
                          "code": "BIO-18",
                          "name": "Worker environmental awareness refresher",
                          "type": "tracking",
                          "where": "Intake B — North Delta",
                          "status": "Not Started",
                          "day": 82,
                          "urgency": "upcoming",
                          "date": "Jun 15",
                          "href": "/beacon-design/prototypes/data-catalog-action"
                        }
                      ],
                      "milestones": [
                        {
                          "name": "NTP — Geotechnical investigations",
                          "description": "Field explorations authorized under the initial DCA work plan",
                          "day": -434,
                          "date": "Jan 15"
                        },
                        {
                          "name": "USFWS Biological Opinion issued",
                          "description": "Programmatic BiOp covering listed terrestrial and aquatic species",
                          "day": -268,
                          "date": "Jun 30"
                        },
                        {
                          "name": "CDFW ITP amendment issued",
                          "description": "Incidental Take Permit amendment for construction-phase take",
                          "day": -96,
                          "date": "Dec 19"
                        },
                        {
                          "name": "USACE Section 408 permission",
                          "description": "Alteration of federal levee works approved",
                          "day": 21,
                          "date": "Apr 15"
                        },
                        {
                          "name": "CWA Section 404 permit",
                          "description": "Discharge of fill authorization from USACE",
                          "day": 65,
                          "date": "May 29"
                        },
                        {
                          "name": "Delta Plan consistency certification",
                          "description": "Certification filed with the Delta Stewardship Council",
                          "day": 79,
                          "date": "Jun 12"
                        },
                        {
                          "name": "Start of construction — Bouldin Island",
                          "description": "Launch shaft site mobilization and ground disturbance",
                          "day": 131,
                          "date": "Aug 3"
                        },
                        {
                          "name": "Intake B site preparation begins",
                          "description": "North Delta intake clearing and access work",
                          "day": 173,
                          "date": "Sep 14"
                        },
                        {
                          "name": "First TBM delivery",
                          "description": "Tunnel boring machine arrival at Bouldin Island",
                          "day": 341,
                          "date": "Mar 1"
                        },
                        {
                          "name": "Southern Forebay groundbreaking",
                          "description": "Byron Tract forebay embankment work begins",
                          "day": 418,
                          "date": "May 17"
                        },
                        {
                          "name": "Twin Cities staging activation",
                          "description": "Staging and segment casting yard operational",
                          "day": 523,
                          "date": "Aug 30"
                        },
                        {
                          "name": "Tunnel drive begins — Bouldin reach",
                          "description": "First mining advance from the launch shaft",
                          "day": 657,
                          "date": "Jan 11"
                        }
                      ],
                      "seasons": [
                        {
                          "name": "Raptor nesting season",
                          "group": "Nesting Birds",
                          "source": "CDFW Code §3503.5",
                          "species": ["Swainson's hawk", "White-tailed kite", "Northern harrier"],
                          "startMonth": 2,
                          "startDay": 1,
                          "endMonth": 9,
                          "endDay": 15
                        },
                        {
                          "name": "Passerine nesting season",
                          "group": "Nesting Birds",
                          "source": "MBTA / CESA",
                          "species": ["Tricolored blackbird", "Song sparrow (Modesto population)"],
                          "startMonth": 3,
                          "startDay": 15,
                          "endMonth": 9,
                          "endDay": 1
                        },
                        {
                          "name": "Burrowing owl nesting season",
                          "group": "Nesting Birds",
                          "source": "CDFW Staff Report",
                          "species": ["Burrowing owl"],
                          "startMonth": 2,
                          "startDay": 1,
                          "endMonth": 8,
                          "endDay": 31
                        },
                        {
                          "name": "Swainson’s hawk nesting season",
                          "group": "Nesting Birds",
                          "source": "CDFW ITP Condition 4.2",
                          "species": ["Swainson's hawk"],
                          "startMonth": 3,
                          "startDay": 1,
                          "endMonth": 9,
                          "endDay": 15
                        },
                        {
                          "name": "Tricolored blackbird colony season",
                          "group": "Nesting Birds",
                          "source": "CDFW ITP Condition 4.8",
                          "species": ["Tricolored blackbird"],
                          "startMonth": 3,
                          "startDay": 15,
                          "endMonth": 7,
                          "endDay": 31
                        },
                        {
                          "name": "Sandhill crane wintering season",
                          "group": "Nesting Birds",
                          "source": "USFWS BiOp Term 8",
                          "species": ["Greater sandhill crane"],
                          "startMonth": 9,
                          "startDay": 15,
                          "endMonth": 3,
                          "endDay": 15
                        },
                        {
                          "name": "In-water work window",
                          "group": "Biological Resources",
                          "source": "NMFS BiOp WQ-2",
                          "species": ["Delta smelt", "Winter-run Chinook salmon"],
                          "startMonth": 8,
                          "startDay": 1,
                          "endMonth": 10,
                          "endDay": 31
                        },
                        {
                          "name": "GGS active season",
                          "group": "Biological Resources",
                          "source": "USFWS BiOp Term 12",
                          "species": ["Giant garter snake"],
                          "startMonth": 5,
                          "startDay": 1,
                          "endMonth": 10,
                          "endDay": 1
                        },
                        {
                          "name": "CTS breeding season",
                          "group": "Biological Resources",
                          "source": "CDFW ITP Condition 7.4",
                          "species": ["California tiger salamander"],
                          "startMonth": 11,
                          "startDay": 1,
                          "endMonth": 3,
                          "endDay": 31
                        },
                        {
                          "name": "Vernal pool wet season",
                          "group": "Biological Resources",
                          "source": "USFWS BiOp Term 15",
                          "species": ["Vernal pool fairy shrimp", "Vernal pool tadpole shrimp"],
                          "startMonth": 12,
                          "startDay": 1,
                          "endMonth": 5,
                          "endDay": 15
                        },
                        {
                          "name": "Delta smelt spawning window",
                          "group": "Biological Resources",
                          "source": "USFWS BiOp Term 3",
                          "species": ["Delta smelt"],
                          "startMonth": 2,
                          "startDay": 1,
                          "endMonth": 6,
                          "endDay": 30
                        },
                        {
                          "name": "VELB flight season",
                          "group": "Biological Resources",
                          "source": "USFWS BiOp Term 19",
                          "species": ["Valley elderberry longhorn beetle"],
                          "startMonth": 3,
                          "startDay": 15,
                          "endMonth": 6,
                          "endDay": 15
                        },
                        {
                          "name": "Bat maternity roost season",
                          "group": "Biological Resources",
                          "source": "CDFW ITP Condition 9.1",
                          "species": ["Townsend's big-eared bat", "Pallid bat"],
                          "startMonth": 4,
                          "startDay": 1,
                          "endMonth": 8,
                          "endDay": 31
                        },
                        {
                          "name": "Salmonid migration window",
                          "group": "Biological Resources",
                          "source": "NMFS BiOp WQ-5",
                          "species": ["Winter-run Chinook salmon", "Central Valley steelhead"],
                          "startMonth": 10,
                          "startDay": 1,
                          "endMonth": 6,
                          "endDay": 30
                        }
                      ]
                    }
                  </script>
                </div>
              </div>
              <script
                type="module"
                src="/beacon-design/_astro/BcnProjectTimeline.astro_astro_type_script_index_0_lang.CawnqUY0.js"
              ></script>
              <div
                class="sidebar"
                data-side="end"
                data-gap="xl"
                style="--sidebar-width: 16rem; --sidebar-content-min: 64%"
              >
                <div class="stack" data-gap="lg">
                  <div class="esa-card">
                    <div class="esa-card__header">
                      <div class="esa-card__header-content">
                        <div class="esa-card__titles">
                          <h3 class="esa-card__title">Project data</h3>
                        </div>
                      </div>
                      <div class="esa-card__actions"></div>
                    </div>
                    <div class="esa-card__body">
                      <ul class="bcn-lrc">
                        <li>
                          <a class="bcn-lrc__row" href="?data=project-info">
                            <span class="bcn-lrc__label">Project Info</span>
                            <span class="bcn-lrc__right">
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
                          </a>
                        </li>
                        <li>
                          <a class="bcn-lrc__row" href="?data=species">
                            <span class="bcn-lrc__label">Species</span>
                            <span class="bcn-lrc__right">
                              <span class="bcn-lrc__meta">38</span>
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
                          </a>
                        </li>
                        <li>
                          <a class="bcn-lrc__row" href="?data=milestones">
                            <span class="bcn-lrc__label">Milestones</span>
                            <span class="bcn-lrc__right">
                              <span class="bcn-lrc__meta">12</span>
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
                          </a>
                        </li>
                        <li>
                          <a class="bcn-lrc__row" href="?data=construction-activities">
                            <span class="bcn-lrc__label">Construction Activities</span>
                            <span class="bcn-lrc__right">
                              <span class="bcn-lrc__meta">27</span>
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
                          </a>
                        </li>
                        <li>
                          <a class="bcn-lrc__row" href="?data=seasons">
                            <span class="bcn-lrc__label">Seasons</span>
                            <span class="bcn-lrc__right">
                              <span class="bcn-lrc__meta">14</span>
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
                          </a>
                        </li>
                        <li>
                          <a class="bcn-lrc__row" href="?data=spatial">
                            <span class="bcn-lrc__label">Spatial Data</span>
                            <span class="bcn-lrc__right">
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
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="esa-card">
                    <div class="esa-card__header">
                      <div class="esa-card__header-content">
                        <div class="esa-card__titles">
                          <h3 class="esa-card__title">Project area</h3>
                        </div>
                      </div>
                      <div class="esa-card__actions">
                        <span id="bcn-map-expand">
                          <button
                            class="esa-icon-button esa-icon-button--sm"
                            type="button"
                            aria-label="Expand map"
                            title="Expand map"
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
                                <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"></path>
                                <path d="M3 16.2V21m0 0h4.8M3 21l6-6"></path>
                                <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"></path>
                                <path d="M3 7.8V3m0 0h4.8M3 3l6 6"></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                      </div>
                    </div>
                    <div class="esa-card__body">
                      <div class="bcn-map">
                        <div
                          class="bcn-map__inset leaflet-container leaflet-touch leaflet-fade-anim"
                          id="bcn-map-inset"
                          role="img"
                          aria-label="Delta Conveyance Project boundary map"
                          style="position: relative"
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
                                    z-index: 19;
                                    transform: translate3d(225px, 47px, 0px) scale(1);
                                  "
                                >
                                  <img
                                    alt=""
                                    src="https://b.basemaps.cartocdn.com/light_all/8/41/98.png"
                                    class="leaflet-tile leaflet-tile-loaded"
                                    style="
                                      width: 256px;
                                      height: 256px;
                                      transform: translate3d(62px, -126px, 0px);
                                      opacity: 1;
                                    "
                                  /><img
                                    alt=""
                                    src="https://a.basemaps.cartocdn.com/light_all/8/40/98.png"
                                    class="leaflet-tile leaflet-tile-loaded"
                                    style="
                                      width: 256px;
                                      height: 256px;
                                      transform: translate3d(-194px, -126px, 0px);
                                      opacity: 1;
                                    "
                                  /><img
                                    alt=""
                                    src="https://c.basemaps.cartocdn.com/light_all/8/42/98.png"
                                    class="leaflet-tile leaflet-tile-loaded"
                                    style="
                                      width: 256px;
                                      height: 256px;
                                      transform: translate3d(318px, -126px, 0px);
                                      opacity: 1;
                                    "
                                  /><img
                                    alt=""
                                    src="https://c.basemaps.cartocdn.com/light_all/8/39/98.png"
                                    class="leaflet-tile leaflet-tile-loaded"
                                    style="
                                      width: 256px;
                                      height: 256px;
                                      transform: translate3d(-450px, -126px, 0px);
                                      opacity: 1;
                                    "
                                  /><img
                                    alt=""
                                    src="https://a.basemaps.cartocdn.com/light_all/8/43/98.png"
                                    class="leaflet-tile leaflet-tile-loaded"
                                    style="
                                      width: 256px;
                                      height: 256px;
                                      transform: translate3d(574px, -126px, 0px);
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
                                width="1061"
                                height="214"
                                viewBox="-88 -18 1061 214"
                                style="transform: translate3d(-88px, -18px, 0px)"
                              >
                                <g>
                                  <path
                                    stroke="#005862"
                                    stroke-opacity="1"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    fill="#00918b"
                                    fill-opacity="0.12"
                                    fill-rule="evenodd"
                                    d="M432 158L446 135L462 124L457 101L457 66L454 54L454 43L442 31L442 19L432 19L432 31L444 43L444 54L447 66L447 101L452 124L436 135L422 158z"
                                  ></path>
                                  <path
                                    stroke="#00918b"
                                    stroke-opacity="1"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-dasharray="4 4"
                                    fill="none"
                                    d="M427 158L441 135L457 124L452 101L452 66L449 54L449 43L437 31L437 19"
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
                              style="transform: translate3d(10650.9px, 25255.9px, 0px) scale(128)"
                            ></div>
                          </div>
                          <div class="leaflet-control-container">
                            <div class="leaflet-top leaflet-left"></div>
                            <div class="leaflet-top leaflet-right"></div>
                            <div class="leaflet-bottom leaflet-left"></div>
                            <div class="leaflet-bottom leaflet-right"></div>
                          </div>
                        </div>
                        <!-- The boundary's SOURCE is a field, not a caption: today it names the
         derivation, and once the spatial-data epic lands it names the uploaded
         file (DCP_Boundary.kmz) in the same slot. -->
                        <p class="bcn-map__source">
                          <span class="bcn-map__source-label">Boundary source</span>
                          <span class="bcn-map__source-value"
                            >Geotech exploration extent (derived)</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <script
                    type="module"
                    src="/beacon-design/_astro/BcnProjectMap.astro_astro_type_script_index_0_lang.Db1YZqgy.js"
                  ></script>
                  <esa-dialog
                    id="bcn-map-dialog"
                    heading="Project area"
                    size="lg"
                    style="--z-modal: 1300; --z-modal-backdrop: 1250"
                  >
                    <div class="bcn-map__full" id="bcn-map-full"></div>
                    <span slot="footer" class="bcn-map__foot">
                      <span class="bcn-map__legend">
                        <span class="bcn-map__key bcn-map__key--boundary"></span> Project boundary
                        <span class="bcn-map__key bcn-map__key--align"></span> Tunnel alignment
                      </span>
                      <span
                        class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
                      >
                        <button class="esa-button__native" type="button">
                          <span class="esa-button__label"> Upload boundary </span>
                        </button>
                      </span>
                    </span>
                    <script type="application/json" id="bcn-map-data">
                      {
                        "boundary": {
                          "type": "Polygon",
                          "coordinates": [
                            [
                              [-121.54588, 37.8],
                              [-121.51249, 37.85],
                              [-121.47206, 37.9],
                              [-121.38486, 37.95],
                              [-121.39505, 38],
                              [-121.4076, 38.05],
                              [-121.41196, 38.1],
                              [-121.4079, 38.15],
                              [-121.41054, 38.2],
                              [-121.42869, 38.25],
                              [-121.42665, 38.3],
                              [-121.49153, 38.35],
                              [-121.49057, 38.4],
                              [-121.54557, 38.4],
                              [-121.54653, 38.35],
                              [-121.48165, 38.3],
                              [-121.48369, 38.25],
                              [-121.46554, 38.2],
                              [-121.4629, 38.15],
                              [-121.46696, 38.1],
                              [-121.4626, 38.05],
                              [-121.45005, 38],
                              [-121.43986, 37.95],
                              [-121.52706, 37.9],
                              [-121.56749, 37.85],
                              [-121.60088, 37.8],
                              [-121.54588, 37.8]
                            ]
                          ]
                        },
                        "alignment": {
                          "type": "LineString",
                          "coordinates": [
                            [-121.57338, 37.8],
                            [-121.53999, 37.85],
                            [-121.49956, 37.9],
                            [-121.41236, 37.95],
                            [-121.42255, 38],
                            [-121.4351, 38.05],
                            [-121.43946, 38.1],
                            [-121.4354, 38.15],
                            [-121.43804, 38.2],
                            [-121.45619, 38.25],
                            [-121.45415, 38.3],
                            [-121.51903, 38.35],
                            [-121.51807, 38.4]
                          ]
                        }
                      }
                    </script>
                  </esa-dialog>
                  <div class="esa-card">
                    <div class="esa-card__header">
                      <div class="esa-card__header-content">
                        <div class="esa-card__titles">
                          <h3 class="esa-card__title">Project details</h3>
                        </div>
                      </div>
                    </div>
                    <div class="esa-card__body">
                      <p class="bcn-pf__desc">
                        The Delta Conveyance Project will modernize water infrastructure in the
                        Sacramento-San Joaquin Delta by making physical improvements to how we
                        capture and move water during wet years for use in dry years with a tunnel
                        system. The Delta Conveyance Project is intended to restore the reliability
                        of the State Water Project and ensure California’s largest supply of clean
                        and affordable water for 27 million people and 750,000 acres of farmland is
                        protected from earthquakes and climate-driven weather extremes.
                      </p>
                      <dl class="bcn-pf">
                        <div class="bcn-pf__fact">
                          <dt class="bcn-pf__label">Start Date</dt>
                          <dd class="bcn-pf__value">Jan 8, 2024</dd>
                        </div>
                        <div class="bcn-pf__fact">
                          <dt class="bcn-pf__label">End Date</dt>
                          <dd class="bcn-pf__value">Dec 31, 2043</dd>
                        </div>
                      </dl>
                      <ul class="bcn-pf__files">
                        <li class="bcn-pf__file">
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
                              <path d="M13.234 20.252 21 12.3"></path>
                              <path
                                d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"
                              ></path>
                            </svg>
                          </span>
                          <span class="bcn-pf__file-name"
                            >Delta_Conveyance_FEIR_Certification.pdf</span
                          >
                        </li>
                        <li class="bcn-pf__file">
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
                              <path d="M13.234 20.252 21 12.3"></path>
                              <path
                                d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"
                              ></path>
                            </svg>
                          </span>
                          <span class="bcn-pf__file-name">DCP_Project_Charter_2024.pdf</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="stack" data-gap="xl">
                  <section class="bcn-mod" aria-label="Tracking, Monitoring, and Reporting">
                    <div class="bcn-mod__grid">
                      <div class="bcn-mod__card">
                        <a
                          class="bcn-mod__portal"
                          href="/beacon-design/prototypes/requirement-tracker"
                          aria-label="Open Tracking"
                        ></a>
                        <div class="bcn-mod__head">
                          <span class="bcn-mod__glyph"
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
                          </span>
                          <span class="bcn-mod__name">Tracking</span>
                        </div>
                        <div class="bcn-mod__rollup">
                          <div class="esa-stat">
                            <div class="esa-stat__value">2</div>
                            <div class="esa-stat__label">Overdue</div>
                          </div>
                          <div class="esa-stat">
                            <div class="esa-stat__value">2</div>
                            <div class="esa-stat__label">Due in 14 days</div>
                          </div>
                        </div>
                        <ul class="bcn-mod__actions">
                          <li>
                            <a
                              class="bcn-mod__action"
                              href="/beacon-design/prototypes/data-catalog-action"
                              data-urgency="overdue"
                            >
                              <span class="bcn-mod__dot" aria-hidden="true"></span>
                              <span class="bcn-mod__action-body">
                                <span class="bcn-mod__action-name">
                                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-14</span> Exclusion
                                  fencing inspection
                                </span>
                                <span class="bcn-mod__action-meta"
                                  >Intake B — North Delta · 4d overdue</span
                                >
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              class="bcn-mod__action"
                              href="/beacon-design/prototypes/data-catalog-action"
                              data-urgency="overdue"
                            >
                              <span class="bcn-mod__dot" aria-hidden="true"></span>
                              <span class="bcn-mod__action-body">
                                <span class="bcn-mod__action-name">
                                  <span class="bcn-cbadge bcn-cbadge--sm">AIR-07</span> Fugitive
                                  dust control plan review
                                </span>
                                <span class="bcn-mod__action-meta">Project-wide · 2d overdue</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                        <a
                          class="bcn-mod__more"
                          href="/beacon-design/prototypes/requirement-tracker"
                        >
                          2 more overdue or due soon
                        </a>
                        <nav class="bcn-mod__links" aria-label="Tracking surfaces">
                          <a class="bcn-mod__link" href="#tracking-summary">
                            Tracking Summary
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
                            </span> </a
                          ><a class="bcn-mod__link" href="#project-tracking">
                            Project Tracking
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
                            </span> </a
                          ><a
                            class="bcn-mod__link"
                            href="/beacon-design/prototypes/permit-tracking"
                          >
                            Permit Tracking
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
                            </span> </a
                          ><a class="bcn-mod__link" href="#action-lists">
                            Action Lists
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
                          </a>
                        </nav>
                        <span class="bcn-mod__open"
                          >Open Tracking
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
                      </div>
                      <div class="bcn-mod__card">
                        <a
                          class="bcn-mod__portal"
                          href="/beacon-design/prototypes/monitoring/dashboard"
                          aria-label="Open Monitoring"
                        ></a>
                        <div class="bcn-mod__head">
                          <span class="bcn-mod__glyph"
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
                          <span class="bcn-mod__name">Monitoring</span>
                        </div>
                        <div class="bcn-mod__rollup">
                          <div class="esa-stat">
                            <div class="esa-stat__value">1</div>
                            <div class="esa-stat__label">Overdue</div>
                          </div>
                          <div class="esa-stat">
                            <div class="esa-stat__value">2</div>
                            <div class="esa-stat__label">Due in 14 days</div>
                          </div>
                        </div>
                        <ul class="bcn-mod__actions">
                          <li>
                            <a
                              class="bcn-mod__action"
                              href="/beacon-design/prototypes/monitoring/dashboard"
                              data-urgency="overdue"
                            >
                              <span class="bcn-mod__dot" aria-hidden="true"></span>
                              <span class="bcn-mod__action-body">
                                <span class="bcn-mod__action-name">
                                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span> Nesting-bird
                                  preconstruction survey
                                </span>
                                <span class="bcn-mod__action-meta"
                                  >Bouldin Island Launch Shaft · 1d overdue</span
                                >
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              class="bcn-mod__action"
                              href="/beacon-design/prototypes/monitoring/dashboard"
                              data-urgency="due-soon"
                            >
                              <span class="bcn-mod__dot" aria-hidden="true"></span>
                              <span class="bcn-mod__action-body">
                                <span class="bcn-mod__action-name">
                                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-21</span> Giant garter
                                  snake preconstruction survey
                                </span>
                                <span class="bcn-mod__action-meta"
                                  >Southern Forebay &amp; Pumping Plant · Due Mar 31</span
                                >
                              </span>
                            </a>
                          </li>
                        </ul>
                        <a
                          class="bcn-mod__more"
                          href="/beacon-design/prototypes/monitoring/dashboard"
                        >
                          1 more overdue or due soon
                        </a>
                        <nav class="bcn-mod__links" aria-label="Monitoring surfaces">
                          <a
                            class="bcn-mod__link"
                            href="/beacon-design/prototypes/monitoring/dashboard"
                          >
                            Monitoring Dashboard
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
                            </span> </a
                          ><a class="bcn-mod__link" href="#observations">
                            Observations
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
                            </span> </a
                          ><a class="bcn-mod__link" href="/beacon-design/prototypes/site-clearance">
                            Site Clearance
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
                          </a>
                        </nav>
                        <span class="bcn-mod__open"
                          >Open Monitoring
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
                      </div>
                      <div class="bcn-mod__card">
                        <a
                          class="bcn-mod__portal"
                          href="#report-center"
                          aria-label="Open Reporting"
                        ></a>
                        <div class="bcn-mod__head">
                          <span class="bcn-mod__glyph"
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
                          </span>
                          <span class="bcn-mod__name">Reporting</span>
                        </div>
                        <div class="bcn-mod__rollup">
                          <div class="esa-stat">
                            <div class="esa-stat__value">1</div>
                            <div class="esa-stat__label">Overdue</div>
                          </div>
                          <div class="esa-stat">
                            <div class="esa-stat__value">2</div>
                            <div class="esa-stat__label">Due in 14 days</div>
                          </div>
                        </div>
                        <ul class="bcn-mod__actions">
                          <li>
                            <a class="bcn-mod__action" href="#report-center" data-urgency="overdue">
                              <span class="bcn-mod__dot" aria-hidden="true"></span>
                              <span class="bcn-mod__action-body">
                                <span class="bcn-mod__action-name">
                                  <span class="bcn-cbadge bcn-cbadge--sm">RPT-02</span> Annual
                                  mitigation summary to USFWS
                                </span>
                                <span class="bcn-mod__action-meta">Project-wide · 7d overdue</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              class="bcn-mod__action"
                              href="#report-center"
                              data-urgency="due-soon"
                            >
                              <span class="bcn-mod__dot" aria-hidden="true"></span>
                              <span class="bcn-mod__action-body">
                                <span class="bcn-mod__action-name">
                                  <span class="bcn-cbadge bcn-cbadge--sm">RPT-04</span> Monthly
                                  construction compliance report
                                </span>
                                <span class="bcn-mod__action-meta">Project-wide · Due Mar 31</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                        <a class="bcn-mod__more" href="#report-center">
                          1 more overdue or due soon
                        </a>
                        <nav class="bcn-mod__links" aria-label="Reporting surfaces">
                          <a class="bcn-mod__link" href="#report-center">
                            Report Center
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
                            </span> </a
                          ><a class="bcn-mod__link" href="#progress-report">
                            Progress Report
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
                          </a>
                        </nav>
                        <span class="bcn-mod__open"
                          >Open Reporting
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
                      </div>
                    </div>
                  </section>
                  <section class="bcn-stc" aria-label="Components">
                    <header class="bcn-stc__head">
                      <!-- No lede — the starred cards and their pulses are self-describing
         (data-grounded review, 2026-08-03). -->
                      <div class="bcn-stc__headings">
                        <h2 class="bcn-stc__title type-section-title">Components</h2>
                      </div>
                      <a class="bcn-stc__all" href="/beacon-design/prototypes/component-dashboard"
                        >All 24 components
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
                      </a>
                    </header>
                    <div class="bcn-stc__list">
                      <div class="bcn-stc__card bcn-stc__card--scope">
                        <a
                          class="bcn-stc__portal"
                          href="/beacon-design/prototypes/requirement-tracker"
                          aria-label="Open project-scoped tracking"
                        ></a>
                        <div class="bcn-stc__main">
                          <div class="bcn-stc__card-head">
                            <span class="bcn-stc__glyph bcn-stc__glyph--scope"
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
                                  <path
                                    d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2z"
                                  ></path>
                                  <path d="M2 8v11a2 2 0 0 0 2 2h14"></path>
                                </svg>
                              </span>
                            </span>
                            <span class="bcn-stc__ident">
                              <span class="bcn-stc__name">Project-wide</span>
                              <!-- The identity line is the project record itself — the component
                 rows carry Component.Description in this slot, so this one
                 carries Project.Name rather than a definition of the scope. -->
                              <span class="bcn-stc__type">Delta Conveyance Project</span>
                            </span>
                          </div>
                        </div>
                        <ul class="bcn-stc__pulse">
                          <li class="bcn-stc__pulse-row">
                            <span
                              class="bcn-stc__dot"
                              style="--_c: var(--color-warning)"
                              aria-hidden="true"
                            ></span>
                            <span class="bcn-stc__pulse-area">Tracking</span>
                            <span class="bcn-stc__pulse-note">2 actions · 1 overdue</span>
                          </li>
                          <li class="bcn-stc__pulse-row">
                            <span
                              class="bcn-stc__dot"
                              style="--_c: var(--bcn-status-not-started)"
                              aria-hidden="true"
                            ></span>
                            <span class="bcn-stc__pulse-area">Monitoring</span>
                            <span class="bcn-stc__pulse-note">No actions</span>
                          </li>
                          <li class="bcn-stc__pulse-row">
                            <span
                              class="bcn-stc__dot"
                              style="--_c: var(--color-warning)"
                              aria-hidden="true"
                            ></span>
                            <span class="bcn-stc__pulse-area">Reporting</span>
                            <span class="bcn-stc__pulse-note">4 actions · 1 overdue</span>
                          </li>
                        </ul>
                      </div>
                      <div class="bcn-stc__card">
                        <a
                          class="bcn-stc__portal"
                          href="/beacon-design/prototypes/component-dashboard"
                          aria-label="Open the Bouldin Island Launch Shaft component dashboard"
                        ></a>
                        <span class="bcn-stc__star" data-star-toggle="">
                          <button
                            class="esa-icon-button esa-icon-button--sm"
                            type="button"
                            aria-label="Unstar Bouldin Island Launch Shaft"
                            title="Unstar Bouldin Island Launch Shaft"
                            aria-pressed="true"
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
                                <path
                                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                        <div class="bcn-stc__main">
                          <div class="bcn-stc__card-head">
                            <span class="bcn-stc__glyph"
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
                                  <path
                                    d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
                                  ></path>
                                  <path d="M3.29 7 12 12l8.71-5"></path>
                                  <path d="M12 22V12"></path>
                                </svg>
                              </span>
                            </span>
                            <span class="bcn-stc__ident">
                              <span class="bcn-stc__name">Bouldin Island Launch Shaft</span>
                              <span class="bcn-stc__type">
                                Tunnel launch shaft — Bouldin Island
                              </span>
                            </span>
                          </div>
                        </div>
                        <ul class="bcn-stc__pulse">
                          <li class="bcn-stc__pulse-row">
                            <span
                              class="bcn-stc__dot"
                              style="--_c: var(--color-warning)"
                              aria-hidden="true"
                            ></span>
                            <span class="bcn-stc__pulse-area">Tracking</span>
                            <span class="bcn-stc__pulse-note">3 overdue actions</span>
                          </li>
                          <li class="bcn-stc__pulse-row">
                            <span
                              class="bcn-stc__dot"
                              style="--_c: var(--color-danger)"
                              aria-hidden="true"
                            ></span>
                            <span class="bcn-stc__pulse-area">Monitoring</span>
                            <span class="bcn-stc__pulse-note">Survey expired Mar 24</span>
                          </li>
                          <li class="bcn-stc__pulse-row">
                            <span
                              class="bcn-stc__dot"
                              style="--_c: var(--color-success)"
                              aria-hidden="true"
                            ></span>
                            <span class="bcn-stc__pulse-area">Reporting</span>
                            <span class="bcn-stc__pulse-note">Nothing due</span>
                          </li>
                        </ul>
                      </div>
                      <div class="bcn-stc__card">
                        <a
                          class="bcn-stc__portal"
                          href="/beacon-design/prototypes/component-dashboard"
                          aria-label="Open the Intake B — North Delta component dashboard"
                        ></a>
                        <span class="bcn-stc__star" data-star-toggle="">
                          <button
                            class="esa-icon-button esa-icon-button--sm"
                            type="button"
                            aria-label="Unstar Intake B — North Delta"
                            title="Unstar Intake B — North Delta"
                            aria-pressed="true"
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
                                <path
                                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                        <div class="bcn-stc__main">
                          <div class="bcn-stc__card-head">
                            <span class="bcn-stc__glyph"
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
                                  <path
                                    d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
                                  ></path>
                                  <path d="M3.29 7 12 12l8.71-5"></path>
                                  <path d="M12 22V12"></path>
                                </svg>
                              </span>
                            </span>
                            <span class="bcn-stc__ident">
                              <span class="bcn-stc__name">Intake B — North Delta</span>
                              <span class="bcn-stc__type">
                                Screened intake — Sacramento River
                              </span>
                            </span>
                          </div>
                        </div>
                        <ul class="bcn-stc__pulse">
                          <li class="bcn-stc__pulse-row">
                            <span
                              class="bcn-stc__dot"
                              style="--_c: var(--color-warning)"
                              aria-hidden="true"
                            ></span>
                            <span class="bcn-stc__pulse-area">Tracking</span>
                            <span class="bcn-stc__pulse-note">1 overdue action</span>
                          </li>
                          <li class="bcn-stc__pulse-row">
                            <span
                              class="bcn-stc__dot"
                              style="--_c: var(--color-success)"
                              aria-hidden="true"
                            ></span>
                            <span class="bcn-stc__pulse-area">Monitoring</span>
                            <span class="bcn-stc__pulse-note">6 obs · 30d</span>
                          </li>
                          <li class="bcn-stc__pulse-row">
                            <span
                              class="bcn-stc__dot"
                              style="--_c: var(--color-success)"
                              aria-hidden="true"
                            ></span>
                            <span class="bcn-stc__pulse-area">Reporting</span>
                            <span class="bcn-stc__pulse-note">Nothing due</span>
                          </li>
                        </ul>
                      </div>
                      <div class="bcn-stc__card">
                        <a
                          class="bcn-stc__portal"
                          href="/beacon-design/prototypes/component-dashboard"
                          aria-label="Open the Southern Forebay &amp; Pumping Plant component dashboard"
                        ></a>
                        <span class="bcn-stc__star" data-star-toggle="">
                          <button
                            class="esa-icon-button esa-icon-button--sm"
                            type="button"
                            aria-label="Unstar Southern Forebay &amp; Pumping Plant"
                            title="Unstar Southern Forebay &amp; Pumping Plant"
                            aria-pressed="true"
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
                                <path
                                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                        <div class="bcn-stc__main">
                          <div class="bcn-stc__card-head">
                            <span class="bcn-stc__glyph"
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
                                  <path
                                    d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
                                  ></path>
                                  <path d="M3.29 7 12 12l8.71-5"></path>
                                  <path d="M12 22V12"></path>
                                </svg>
                              </span>
                            </span>
                            <span class="bcn-stc__ident">
                              <span class="bcn-stc__name"
                                >Southern Forebay &amp; Pumping Plant</span
                              >
                              <span class="bcn-stc__type"> Forebay — Byron Tract </span>
                            </span>
                          </div>
                        </div>
                        <ul class="bcn-stc__pulse">
                          <li class="bcn-stc__pulse-row">
                            <span
                              class="bcn-stc__dot"
                              style="--_c: var(--color-success)"
                              aria-hidden="true"
                            ></span>
                            <span class="bcn-stc__pulse-area">Tracking</span>
                            <span class="bcn-stc__pulse-note">22 / 30 actions</span>
                          </li>
                          <li class="bcn-stc__pulse-row">
                            <span
                              class="bcn-stc__dot"
                              style="--_c: var(--color-success)"
                              aria-hidden="true"
                            ></span>
                            <span class="bcn-stc__pulse-area">Monitoring</span>
                            <span class="bcn-stc__pulse-note">11 obs · 30d</span>
                          </li>
                          <li class="bcn-stc__pulse-row">
                            <span
                              class="bcn-stc__dot"
                              style="--_c: var(--color-warning)"
                              aria-hidden="true"
                            ></span>
                            <span class="bcn-stc__pulse-area">Reporting</span>
                            <span class="bcn-stc__pulse-note">Due in 7 days · Apr 1</span>
                          </li>
                        </ul>
                      </div>
                      <div class="bcn-stc__card">
                        <a
                          class="bcn-stc__portal"
                          href="/beacon-design/prototypes/component-dashboard"
                          aria-label="Open the Twin Cities Complex component dashboard"
                        ></a>
                        <span class="bcn-stc__star" data-star-toggle="">
                          <button
                            class="esa-icon-button esa-icon-button--sm"
                            type="button"
                            aria-label="Unstar Twin Cities Complex"
                            title="Unstar Twin Cities Complex"
                            aria-pressed="true"
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
                                <path
                                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                        <div class="bcn-stc__main">
                          <div class="bcn-stc__card-head">
                            <span class="bcn-stc__glyph"
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
                                  <path
                                    d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
                                  ></path>
                                  <path d="M3.29 7 12 12l8.71-5"></path>
                                  <path d="M12 22V12"></path>
                                </svg>
                              </span>
                            </span>
                            <span class="bcn-stc__ident">
                              <span class="bcn-stc__name">Twin Cities Complex</span>
                              <span class="bcn-stc__type"> Tunnel shaft — staging · On Hold </span>
                            </span>
                          </div>
                        </div>
                        <ul class="bcn-stc__pulse">
                          <li class="bcn-stc__pulse-row">
                            <span
                              class="bcn-stc__dot"
                              style="--_c: var(--bcn-status-not-started)"
                              aria-hidden="true"
                            ></span>
                            <span class="bcn-stc__pulse-area">Tracking</span>
                            <span class="bcn-stc__pulse-note">9 / 21 actions</span>
                          </li>
                          <li class="bcn-stc__pulse-row">
                            <span
                              class="bcn-stc__dot"
                              style="--_c: var(--bcn-status-not-started)"
                              aria-hidden="true"
                            ></span>
                            <span class="bcn-stc__pulse-area">Monitoring</span>
                            <span class="bcn-stc__pulse-note">2 obs · 30d</span>
                          </li>
                          <li class="bcn-stc__pulse-row">
                            <span
                              class="bcn-stc__dot"
                              style="--_c: var(--bcn-status-not-started)"
                              aria-hidden="true"
                            ></span>
                            <span class="bcn-stc__pulse-area">Reporting</span>
                            <span class="bcn-stc__pulse-note">Nothing due</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                  <script type="module">
                    document.querySelectorAll("[data-star-toggle]").forEach((e) => {
                      const t = e.querySelector("button");
                      t &&
                        (t.setAttribute("aria-pressed", "true"),
                        t.addEventListener("click", () => {
                          const r = t.getAttribute("aria-pressed") === "true";
                          t.setAttribute("aria-pressed", String(!r));
                        }));
                    });
                  </script>
                  <section class="bcn-swc" aria-label="Setup Wizard">
                    <div class="bcn-swc__head">
                      <span class="bcn-swc__mark"
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
                            <path
                              d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
                            ></path>
                            <circle cx="12" cy="12" r="10"></circle>
                          </svg>
                        </span>
                      </span>
                      <span class="bcn-swc__title">Setup Wizard</span>
                      <span class="bcn-swc__cta">
                        <span
                          class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
                        >
                          <a class="esa-button__native" href="#project-setup" role="button">
                            <span class="esa-button__label"> Continue setup </span>
                          </a>
                        </span>
                      </span>
                    </div>
                    <ol class="bcn-swc__steps">
                      <li class="bcn-swc__step" style="--_step: var(--color-source)">
                        <a class="bcn-swc__link" href="#setup-source-documents">
                          <span class="bcn-swc__label-row">
                            <span class="bcn-swc__n">1</span>
                            <span class="bcn-swc__label">Source Documents</span>
                          </span>
                          <dl class="bcn-swc__stats">
                            <div class="bcn-swc__stat">
                              <dt>Created</dt>
                              <dd>14</dd>
                            </div>
                          </dl>
                        </a>
                      </li>
                      <li class="bcn-swc__step" style="--_step: var(--color-commitment)">
                        <a class="bcn-swc__link" href="#setup-commitments">
                          <span class="bcn-swc__label-row">
                            <span class="bcn-swc__n">2</span>
                            <span class="bcn-swc__label">Commitments</span>
                          </span>
                          <dl class="bcn-swc__stats">
                            <div class="bcn-swc__stat">
                              <dt>Created</dt>
                              <dd>212</dd>
                            </div>
                            <div class="bcn-swc__stat">
                              <dt>Approved</dt>
                              <dd>209</dd>
                            </div>
                          </dl>
                        </a>
                      </li>
                      <li class="bcn-swc__step" style="--_step: var(--color-requirement)">
                        <a class="bcn-swc__link" href="#setup-requirements">
                          <span class="bcn-swc__label-row">
                            <span class="bcn-swc__n">3</span>
                            <span class="bcn-swc__label">Requirements</span>
                          </span>
                          <dl class="bcn-swc__stats">
                            <div class="bcn-swc__stat">
                              <dt>Created</dt>
                              <dd>486</dd>
                            </div>
                            <div class="bcn-swc__stat">
                              <dt>Approved</dt>
                              <dd>474</dd>
                            </div>
                          </dl>
                        </a>
                      </li>
                      <li class="bcn-swc__step" style="--_step: var(--color-action)">
                        <a class="bcn-swc__link" href="#setup-actions">
                          <span class="bcn-swc__label-row">
                            <span class="bcn-swc__n">4</span>
                            <span class="bcn-swc__label">Actions</span>
                          </span>
                          <dl class="bcn-swc__stats">
                            <div class="bcn-swc__stat">
                              <dt>
                                <span class="bcn-swc__attn" aria-hidden="true"></span> Requirements
                                not in an action
                              </dt>
                              <dd>12</dd>
                            </div>
                            <div class="bcn-swc__stat">
                              <dt>Created</dt>
                              <dd>142</dd>
                            </div>
                            <div class="bcn-swc__stat">
                              <dt>Approved</dt>
                              <dd>138</dd>
                            </div>
                          </dl>
                        </a>
                      </li>
                    </ol>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <esa-side-dialog
        id="pd-panel"
        position="right"
        style="
          --_width: min(480px, 94vw);
          --z-modal: 1300;
          --z-modal-backdrop: 1250;
          --backdrop-filter: blur(4px);
        "
        size="md"
      >
        <!-- Panel FOOTER (round 8): the list screens' Add action — a normal primary
       button, right-aligned. The controller re-slots this span off ('void') for
       keys with no Add (Project Info, Spatial) so the lego's footer bar hides. -->
        <span slot="footer" id="pd-addfoot" class="bcn-pdp__addfoot">
          <span data-add-for="species" data-cd-open="species-add" hidden=""
            ><span
              class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Add Species </span>
              </button>
            </span>
          </span>
          <span data-add-for="milestones" data-cd-open="milestone" hidden=""
            ><span
              class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Add Milestone </span>
              </button>
            </span>
          </span>
          <span data-add-for="construction-activities" data-cd-open="activity" hidden=""
            ><span
              class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Add Activity </span>
              </button>
            </span>
          </span>
          <span data-add-for="seasons" data-cd-open="season" hidden=""
            ><span
              class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Add Season </span>
              </button>
            </span>
          </span>
        </span>
        <!-- Species — slim cards (common · scientific · code) + live search -->
        <section class="bcn-pdp" data-pd-body="species" data-pd-heading="Species" hidden="">
          <esa-text-field
            data-pd-filter="true"
            placeholder="Search 38 species…"
            size="md"
          ></esa-text-field>
          <ul class="bcn-pdp__cards">
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">American badger</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Taxidea taxus</span>
              </span>
              <span class="bcn-pdp__code">AMBA</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Burrowing owl</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Athene cunicularia</span>
              </span>
              <span class="bcn-pdp__code">BUOW</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">California black rail</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci"
                  >Laterallus jamaicensis coturniculus</span
                >
              </span>
              <span class="bcn-pdp__code">CBR</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">California red-legged frog</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Rana draytonii</span>
              </span>
              <span class="bcn-pdp__code">CRLF</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">California tiger salamander</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci"
                  >Ambystoma californiense</span
                >
              </span>
              <span class="bcn-pdp__code">CTS</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Central Valley steelhead</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Oncorhynchus mykiss</span>
              </span>
              <span class="bcn-pdp__code">CVS</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Crotch's bumble bee</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Bombus crotchii</span>
              </span>
              <span class="bcn-pdp__code">CBB</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Delta button-celery</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Eryngium racemosum</span>
              </span>
              <span class="bcn-pdp__code">DBC</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Delta smelt</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci"
                  >Hypomesus transpacificus</span
                >
              </span>
              <span class="bcn-pdp__code">DS</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Fall-run Chinook salmon</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci"
                  >Oncorhynchus tshawytscha</span
                >
              </span>
              <span class="bcn-pdp__code">FRCS</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Giant garter snake</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Thamnophis gigas</span>
              </span>
              <span class="bcn-pdp__code">GGS</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Greater sandhill crane</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci"
                  >Antigone canadensis tabida</span
                >
              </span>
              <span class="bcn-pdp__code">GSC</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Green sturgeon</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Acipenser medirostris</span>
              </span>
              <span class="bcn-pdp__code">GS</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Least Bell's vireo</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Vireo bellii pusillus</span>
              </span>
              <span class="bcn-pdp__code">LBV</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Loggerhead shrike</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Lanius ludovicianus</span>
              </span>
              <span class="bcn-pdp__code">LOSH</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Longfin smelt</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci"
                  >Spirinchus thaleichthys</span
                >
              </span>
              <span class="bcn-pdp__code">LFS</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Mason's lilaeopsis</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Lilaeopsis masonii</span>
              </span>
              <span class="bcn-pdp__code">ML</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Northern harrier</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Circus hudsonius</span>
              </span>
              <span class="bcn-pdp__code">NOHA</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Pacific lamprey</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci"
                  >Entosphenus tridentatus</span
                >
              </span>
              <span class="bcn-pdp__code">PL</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Pallid bat</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Antrozous pallidus</span>
              </span>
              <span class="bcn-pdp__code">PALB</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Sacramento splittail</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci"
                  >Pogonichthys macrolepidotus</span
                >
              </span>
              <span class="bcn-pdp__code">SPLT</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">San Joaquin kit fox</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Vulpes macrotis mutica</span>
              </span>
              <span class="bcn-pdp__code">SJKF</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Song sparrow (Modesto population)</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Melospiza melodia</span>
              </span>
              <span class="bcn-pdp__code">SOSP</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Spring-run Chinook salmon</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci"
                  >Oncorhynchus tshawytscha</span
                >
              </span>
              <span class="bcn-pdp__code">SRCS</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Suisun marsh aster</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Symphyotrichum lentum</span>
              </span>
              <span class="bcn-pdp__code">SMA</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Swainson's hawk</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Buteo swainsoni</span>
              </span>
              <span class="bcn-pdp__code">SWHA</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Townsend's big-eared bat</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci"
                  >Corynorhinus townsendii</span
                >
              </span>
              <span class="bcn-pdp__code">TBEB</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Tricolored blackbird</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Agelaius tricolor</span>
              </span>
              <span class="bcn-pdp__code">TRBL</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Valley elderberry longhorn beetle</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci"
                  >Desmocerus californicus dimorphus</span
                >
              </span>
              <span class="bcn-pdp__code">VELB</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Vernal pool fairy shrimp</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Branchinecta lynchi</span>
              </span>
              <span class="bcn-pdp__code">VPFS</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Vernal pool tadpole shrimp</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Lepidurus packardi</span>
              </span>
              <span class="bcn-pdp__code">VPTS</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Western pond turtle</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Actinemys marmorata</span>
              </span>
              <span class="bcn-pdp__code">WPT</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Western red bat</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Lasiurus blossevillii</span>
              </span>
              <span class="bcn-pdp__code">WRB</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Western spadefoot</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Spea hammondii</span>
              </span>
              <span class="bcn-pdp__code">WSF</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Western yellow-billed cuckoo</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci"
                  >Coccyzus americanus occidentalis</span
                >
              </span>
              <span class="bcn-pdp__code">WYBC</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">White sturgeon</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci"
                  >Acipenser transmontanus</span
                >
              </span>
              <span class="bcn-pdp__code">WS</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">White-tailed kite</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci">Elanus leucurus</span>
              </span>
              <span class="bcn-pdp__code">WTK</span>
            </li>
            <li class="bcn-pdp__card bcn-pdp__card--species" data-f="">
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Winter-run Chinook salmon</span>
                <span class="bcn-pdp__card-sub bcn-pdp__card-sub--sci"
                  >Oncorhynchus tshawytscha</span
                >
              </span>
              <span class="bcn-pdp__code">WRCS</span>
            </li>
          </ul>
        </section>
        <!-- Milestones — the DATE leads: tile · name/description · Edit -->
        <section class="bcn-pdp" data-pd-body="milestones" data-pd-heading="Milestones" hidden="">
          <esa-text-field
            data-pd-filter="true"
            placeholder="Search 12 milestones…"
            size="md"
          ></esa-text-field>
          <ol class="bcn-pdp__cards">
            <li
              class="bcn-pdp__card bcn-pdp__card--milestone"
              data-f=""
              data-cd-row=""
              data-name="NTP — Geotechnical investigations"
              data-date="2025-01-15"
              data-description="Field explorations authorized under the initial DCA work plan"
            >
              <span class="bcn-pdp__date-tile">
                <span class="bcn-pdp__date-md">Jan 15</span>
                <span class="bcn-pdp__date-year">2025</span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">NTP — Geotechnical investigations</span>
                <span class="bcn-pdp__card-sub"
                  >Field explorations authorized under the initial DCA work plan</span
                >
              </span>
              <span data-cd-edit="milestone" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit NTP — Geotechnical investigations"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card bcn-pdp__card--milestone"
              data-f=""
              data-cd-row=""
              data-name="USFWS Biological Opinion issued"
              data-date="2025-06-30"
              data-description="Programmatic BiOp covering listed terrestrial and aquatic species"
            >
              <span class="bcn-pdp__date-tile">
                <span class="bcn-pdp__date-md">Jun 30</span>
                <span class="bcn-pdp__date-year">2025</span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">USFWS Biological Opinion issued</span>
                <span class="bcn-pdp__card-sub"
                  >Programmatic BiOp covering listed terrestrial and aquatic species</span
                >
              </span>
              <span data-cd-edit="milestone" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit USFWS Biological Opinion issued"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card bcn-pdp__card--milestone"
              data-f=""
              data-cd-row=""
              data-name="CDFW ITP amendment issued"
              data-date="2025-12-19"
              data-description="Incidental Take Permit amendment for construction-phase take"
            >
              <span class="bcn-pdp__date-tile">
                <span class="bcn-pdp__date-md">Dec 19</span>
                <span class="bcn-pdp__date-year">2025</span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">CDFW ITP amendment issued</span>
                <span class="bcn-pdp__card-sub"
                  >Incidental Take Permit amendment for construction-phase take</span
                >
              </span>
              <span data-cd-edit="milestone" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit CDFW ITP amendment issued"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card bcn-pdp__card--milestone"
              data-f=""
              data-cd-row=""
              data-name="USACE Section 408 permission"
              data-date="2026-04-15"
              data-description="Alteration of federal levee works approved"
            >
              <span class="bcn-pdp__date-tile">
                <span class="bcn-pdp__date-md">Apr 15</span>
                <span class="bcn-pdp__date-year">2026</span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">USACE Section 408 permission</span>
                <span class="bcn-pdp__card-sub">Alteration of federal levee works approved</span>
              </span>
              <span data-cd-edit="milestone" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit USACE Section 408 permission"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card bcn-pdp__card--milestone"
              data-f=""
              data-cd-row=""
              data-name="CWA Section 404 permit"
              data-date="2026-05-29"
              data-description="Discharge of fill authorization from USACE"
            >
              <span class="bcn-pdp__date-tile">
                <span class="bcn-pdp__date-md">May 29</span>
                <span class="bcn-pdp__date-year">2026</span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">CWA Section 404 permit</span>
                <span class="bcn-pdp__card-sub">Discharge of fill authorization from USACE</span>
              </span>
              <span data-cd-edit="milestone" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit CWA Section 404 permit"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card bcn-pdp__card--milestone"
              data-f=""
              data-cd-row=""
              data-name="Delta Plan consistency certification"
              data-date="2026-06-12"
              data-description="Certification filed with the Delta Stewardship Council"
            >
              <span class="bcn-pdp__date-tile">
                <span class="bcn-pdp__date-md">Jun 12</span>
                <span class="bcn-pdp__date-year">2026</span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Delta Plan consistency certification</span>
                <span class="bcn-pdp__card-sub"
                  >Certification filed with the Delta Stewardship Council</span
                >
              </span>
              <span data-cd-edit="milestone" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Delta Plan consistency certification"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card bcn-pdp__card--milestone"
              data-f=""
              data-cd-row=""
              data-name="Start of construction — Bouldin Island"
              data-date="2026-08-03"
              data-description="Launch shaft site mobilization and ground disturbance"
            >
              <span class="bcn-pdp__date-tile">
                <span class="bcn-pdp__date-md">Aug 3</span>
                <span class="bcn-pdp__date-year">2026</span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Start of construction — Bouldin Island</span>
                <span class="bcn-pdp__card-sub"
                  >Launch shaft site mobilization and ground disturbance</span
                >
              </span>
              <span data-cd-edit="milestone" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Start of construction — Bouldin Island"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card bcn-pdp__card--milestone"
              data-f=""
              data-cd-row=""
              data-name="Intake B site preparation begins"
              data-date="2026-09-14"
              data-description="North Delta intake clearing and access work"
            >
              <span class="bcn-pdp__date-tile">
                <span class="bcn-pdp__date-md">Sep 14</span>
                <span class="bcn-pdp__date-year">2026</span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Intake B site preparation begins</span>
                <span class="bcn-pdp__card-sub">North Delta intake clearing and access work</span>
              </span>
              <span data-cd-edit="milestone" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Intake B site preparation begins"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card bcn-pdp__card--milestone"
              data-f=""
              data-cd-row=""
              data-name="First TBM delivery"
              data-date="2027-03-01"
              data-description="Tunnel boring machine arrival at Bouldin Island"
            >
              <span class="bcn-pdp__date-tile">
                <span class="bcn-pdp__date-md">Mar 1</span>
                <span class="bcn-pdp__date-year">2027</span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">First TBM delivery</span>
                <span class="bcn-pdp__card-sub"
                  >Tunnel boring machine arrival at Bouldin Island</span
                >
              </span>
              <span data-cd-edit="milestone" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit First TBM delivery"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card bcn-pdp__card--milestone"
              data-f=""
              data-cd-row=""
              data-name="Southern Forebay groundbreaking"
              data-date="2027-05-17"
              data-description="Byron Tract forebay embankment work begins"
            >
              <span class="bcn-pdp__date-tile">
                <span class="bcn-pdp__date-md">May 17</span>
                <span class="bcn-pdp__date-year">2027</span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Southern Forebay groundbreaking</span>
                <span class="bcn-pdp__card-sub">Byron Tract forebay embankment work begins</span>
              </span>
              <span data-cd-edit="milestone" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Southern Forebay groundbreaking"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card bcn-pdp__card--milestone"
              data-f=""
              data-cd-row=""
              data-name="Twin Cities staging activation"
              data-date="2027-08-30"
              data-description="Staging and segment casting yard operational"
            >
              <span class="bcn-pdp__date-tile">
                <span class="bcn-pdp__date-md">Aug 30</span>
                <span class="bcn-pdp__date-year">2027</span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Twin Cities staging activation</span>
                <span class="bcn-pdp__card-sub">Staging and segment casting yard operational</span>
              </span>
              <span data-cd-edit="milestone" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Twin Cities staging activation"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card bcn-pdp__card--milestone"
              data-f=""
              data-cd-row=""
              data-name="Tunnel drive begins — Bouldin reach"
              data-date="2028-01-11"
              data-description="First mining advance from the launch shaft"
            >
              <span class="bcn-pdp__date-tile">
                <span class="bcn-pdp__date-md">Jan 11</span>
                <span class="bcn-pdp__date-year">2028</span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Tunnel drive begins — Bouldin reach</span>
                <span class="bcn-pdp__card-sub">First mining advance from the launch shaft</span>
              </span>
              <span data-cd-edit="milestone" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Tunnel drive begins — Bouldin reach"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
          </ol>
        </section>
        <!-- Construction Activities — name/description cards -->
        <section
          class="bcn-pdp"
          data-pd-body="construction-activities"
          data-pd-heading="Construction Activities"
          hidden=""
        >
          <esa-text-field
            data-pd-filter="true"
            placeholder="Search 27 activities…"
            size="md"
          ></esa-text-field>
          <ol class="bcn-pdp__cards">
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Barge operations"
              data-description="Waterborne material delivery and staging"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Barge operations</span>
                <span class="bcn-pdp__card-sub">Waterborne material delivery and staging</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Barge operations"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Bridge construction"
              data-description="Crossing structures at sloughs and canals"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Bridge construction</span>
                <span class="bcn-pdp__card-sub">Crossing structures at sloughs and canals</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Bridge construction"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Clearing &amp; grubbing"
              data-description="Vegetation and topsoil removal ahead of grading"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Clearing &amp; grubbing</span>
                <span class="bcn-pdp__card-sub"
                  >Vegetation and topsoil removal ahead of grading</span
                >
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Clearing &amp; grubbing"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Cofferdam installation"
              data-description="Temporary in-water isolation structures"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Cofferdam installation</span>
                <span class="bcn-pdp__card-sub">Temporary in-water isolation structures</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Cofferdam installation"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Concrete batching &amp; placement"
              data-description="On-site batch plants and structural pours"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Concrete batching &amp; placement</span>
                <span class="bcn-pdp__card-sub">On-site batch plants and structural pours</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Concrete batching &amp; placement"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Crane operations"
              data-description="Heavy lifts at shaft and intake sites"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Crane operations</span>
                <span class="bcn-pdp__card-sub">Heavy lifts at shaft and intake sites</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Crane operations"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Dewatering"
              data-description="Construction dewatering and discharge"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Dewatering</span>
                <span class="bcn-pdp__card-sub">Construction dewatering and discharge</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button class="esa-button__native" type="button" aria-label="Edit Dewatering">
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
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Dredging"
              data-description="In-channel sediment removal at intake sites"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Dredging</span>
                <span class="bcn-pdp__card-sub">In-channel sediment removal at intake sites</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button class="esa-button__native" type="button" aria-label="Edit Dredging">
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
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Fencing installation"
              data-description="Exclusion and security fencing"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Fencing installation</span>
                <span class="bcn-pdp__card-sub">Exclusion and security fencing</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Fencing installation"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Geotechnical borings"
              data-description="Drill-rig explorations and CPT soundings"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Geotechnical borings</span>
                <span class="bcn-pdp__card-sub">Drill-rig explorations and CPT soundings</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Geotechnical borings"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Grading &amp; excavation"
              data-description="Cut and fill earthwork within approved work areas"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Grading &amp; excavation</span>
                <span class="bcn-pdp__card-sub"
                  >Cut and fill earthwork within approved work areas</span
                >
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Grading &amp; excavation"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Haul truck operations"
              data-description="Off-road and public-road material hauling"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Haul truck operations</span>
                <span class="bcn-pdp__card-sub">Off-road and public-road material hauling</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Haul truck operations"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Levee modification"
              data-description="Setback and reinforcement work on project levees"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Levee modification</span>
                <span class="bcn-pdp__card-sub"
                  >Setback and reinforcement work on project levees</span
                >
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Levee modification"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Monitoring well installation"
              data-description="Groundwater observation wells"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Monitoring well installation</span>
                <span class="bcn-pdp__card-sub">Groundwater observation wells</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Monitoring well installation"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Night work lighting"
              data-description="Temporary lighting for extended shifts"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Night work lighting</span>
                <span class="bcn-pdp__card-sub">Temporary lighting for extended shifts</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Night work lighting"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Pile driving — impact"
              data-description="Impact-hammer foundation piles"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Pile driving — impact</span>
                <span class="bcn-pdp__card-sub">Impact-hammer foundation piles</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Pile driving — impact"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Pile driving — vibratory"
              data-description="Vibratory sheet and pipe pile installation"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Pile driving — vibratory</span>
                <span class="bcn-pdp__card-sub">Vibratory sheet and pipe pile installation</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Pile driving — vibratory"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Riprap placement"
              data-description="Rock slope protection at bank interfaces"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Riprap placement</span>
                <span class="bcn-pdp__card-sub">Rock slope protection at bank interfaces</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Riprap placement"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Road construction"
              data-description="Access road building and improvements"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Road construction</span>
                <span class="bcn-pdp__card-sub">Access road building and improvements</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Road construction"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Shaft excavation"
              data-description="Launch and reception shaft sinking"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Shaft excavation</span>
                <span class="bcn-pdp__card-sub">Launch and reception shaft sinking</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Shaft excavation"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Site restoration &amp; revegetation"
              data-description="Decompaction, seeding, and planting"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Site restoration &amp; revegetation</span>
                <span class="bcn-pdp__card-sub">Decompaction, seeding, and planting</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Site restoration &amp; revegetation"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Slurry wall construction"
              data-description="Diaphragm wall panels at shaft sites"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Slurry wall construction</span>
                <span class="bcn-pdp__card-sub">Diaphragm wall panels at shaft sites</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Slurry wall construction"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Stormwater BMP installation"
              data-description="Erosion and sediment control measures"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Stormwater BMP installation</span>
                <span class="bcn-pdp__card-sub">Erosion and sediment control measures</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Stormwater BMP installation"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Structure demolition"
              data-description="Removal of existing buildings and facilities"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Structure demolition</span>
                <span class="bcn-pdp__card-sub">Removal of existing buildings and facilities</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Structure demolition"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Tunnel boring"
              data-description="TBM mining and segment erection"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Tunnel boring</span>
                <span class="bcn-pdp__card-sub">TBM mining and segment erection</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button class="esa-button__native" type="button" aria-label="Edit Tunnel boring">
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
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Tunnel muck handling"
              data-description="Spoils conveyance, stockpiling, and disposal"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Tunnel muck handling</span>
                <span class="bcn-pdp__card-sub">Spoils conveyance, stockpiling, and disposal</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Tunnel muck handling"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
            <li
              class="bcn-pdp__card"
              data-f=""
              data-cd-row=""
              data-name="Utility relocation"
              data-description="Overhead and underground utility moves"
            >
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Utility relocation</span>
                <span class="bcn-pdp__card-sub">Overhead and underground utility moves</span>
              </span>
              <span data-cd-edit="activity" class="bcn-pdp__card-action"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                >
                  <button
                    class="esa-button__native"
                    type="button"
                    aria-label="Edit Utility relocation"
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
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path>
                      </svg>
                    </span>
                  </button>
                </span>
              </span>
            </li>
          </ol>
        </section>
        <!-- Seasons — bcn-season-card (year timeline), grouped by season type -->
        <section class="bcn-pdp" data-pd-body="seasons" data-pd-heading="Seasons" hidden="">
          <esa-text-field
            data-pd-filter="true"
            placeholder="Search 14 seasons…"
            size="md"
          ></esa-text-field>
          <div class="bcn-pdp__sgroup">
            <h3 class="bcn-pdp__sgroup-title">Nesting Birds</h3>
            <div class="bcn-pdp__scards">
              <div
                data-f=""
                data-cd-row=""
                data-name="Burrowing owl nesting season"
                data-start="2/1"
                data-end="8/31"
              >
                <div class="bcn-season-card">
                  <div class="bcn-season-card__header">
                    <span class="bcn-season-card__ident">
                      <span class="bcn-season-card__icon"
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
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </span>
                      </span>
                      <span class="bcn-season-card__title">Burrowing owl nesting season</span>
                      <span class="bcn-season-card__dates">Feb 1 – Aug 31</span>
                    </span>
                    <span class="bcn-season-card__actions">
                      <span data-cd-edit="season"
                        ><span
                          class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        >
                          <button
                            class="esa-button__native"
                            type="button"
                            aria-label="Edit Burrowing owl nesting season"
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
                                <path
                                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                                ></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="bcn-season-card__timeline">
                    <div class="bcn-season-card__segments">
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--first"
                        style="width: 8.767123287671232%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--middle"
                        style="width: 57.80821917808218%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--last"
                        style="width: 33.42465753424658%"
                      ></span>
                      <span
                        class="bcn-season-card__today"
                        style="left: 23.013698630136986%"
                        title="Today"
                      ></span>
                    </div>
                    <div
                      class="bcn-season-card__labels"
                      style="left: 8.767123287671232%; width: 57.80821917808218%"
                    >
                      <span>Feb 1</span> <span>Aug 31</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-f=""
                data-cd-row=""
                data-name="Passerine nesting season"
                data-start="3/15"
                data-end="9/1"
              >
                <div class="bcn-season-card">
                  <div class="bcn-season-card__header">
                    <span class="bcn-season-card__ident">
                      <span class="bcn-season-card__icon"
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
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </span>
                      </span>
                      <span class="bcn-season-card__title">Passerine nesting season</span>
                      <span class="bcn-season-card__dates">Mar 15 – Sep 1</span>
                    </span>
                    <span class="bcn-season-card__actions">
                      <span data-cd-edit="season"
                        ><span
                          class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        >
                          <button
                            class="esa-button__native"
                            type="button"
                            aria-label="Edit Passerine nesting season"
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
                                <path
                                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                                ></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="bcn-season-card__timeline">
                    <div class="bcn-season-card__segments">
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--first"
                        style="width: 20.273972602739725%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--middle"
                        style="width: 46.57534246575343%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--last"
                        style="width: 33.15068493150685%"
                      ></span>
                      <span
                        class="bcn-season-card__today"
                        style="left: 23.013698630136986%"
                        title="Today"
                      ></span>
                    </div>
                    <div
                      class="bcn-season-card__labels"
                      style="left: 20.273972602739725%; width: 46.57534246575343%"
                    >
                      <span>Mar 15</span> <span>Sep 1</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-f=""
                data-cd-row=""
                data-name="Raptor nesting season"
                data-start="2/1"
                data-end="9/15"
              >
                <div class="bcn-season-card">
                  <div class="bcn-season-card__header">
                    <span class="bcn-season-card__ident">
                      <span class="bcn-season-card__icon"
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
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </span>
                      </span>
                      <span class="bcn-season-card__title">Raptor nesting season</span>
                      <span class="bcn-season-card__dates">Feb 1 – Sep 15</span>
                    </span>
                    <span class="bcn-season-card__actions">
                      <span data-cd-edit="season"
                        ><span
                          class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        >
                          <button
                            class="esa-button__native"
                            type="button"
                            aria-label="Edit Raptor nesting season"
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
                                <path
                                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                                ></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="bcn-season-card__timeline">
                    <div class="bcn-season-card__segments">
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--first"
                        style="width: 8.767123287671232%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--middle"
                        style="width: 61.91780821917807%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--last"
                        style="width: 29.315068493150687%"
                      ></span>
                      <span
                        class="bcn-season-card__today"
                        style="left: 23.013698630136986%"
                        title="Today"
                      ></span>
                    </div>
                    <div
                      class="bcn-season-card__labels"
                      style="left: 8.767123287671232%; width: 61.91780821917807%"
                    >
                      <span>Feb 1</span> <span>Sep 15</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-f=""
                data-cd-row=""
                data-name="Sandhill crane wintering season"
                data-start="9/15"
                data-end="3/15"
              >
                <div class="bcn-season-card">
                  <div class="bcn-season-card__header">
                    <span class="bcn-season-card__ident">
                      <span class="bcn-season-card__icon"
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
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </span>
                      </span>
                      <span class="bcn-season-card__title">Sandhill crane wintering season</span>
                      <span class="bcn-season-card__dates">Sep 15 – Mar 15</span>
                    </span>
                    <span class="bcn-season-card__actions">
                      <span data-cd-edit="season"
                        ><span
                          class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        >
                          <button
                            class="esa-button__native"
                            type="button"
                            aria-label="Edit Sandhill crane wintering season"
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
                                <path
                                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                                ></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="bcn-season-card__timeline" data-wraps="true">
                    <div class="bcn-season-card__segments">
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--first"
                        style="width: 20.273972602739725%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--middle"
                        style="width: 50.41095890410959%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--last"
                        style="width: 29.315068493150687%"
                      ></span>
                      <span
                        class="bcn-season-card__today"
                        style="left: 23.013698630136986%"
                        title="Today"
                      ></span>
                    </div>
                    <div
                      class="bcn-season-card__labels"
                      style="left: 20.273972602739725%; width: 50.41095890410959%"
                    >
                      <span>Mar 15</span> <span>Sep 15</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-f=""
                data-cd-row=""
                data-name="Swainson’s hawk nesting season"
                data-start="3/1"
                data-end="9/15"
              >
                <div class="bcn-season-card">
                  <div class="bcn-season-card__header">
                    <span class="bcn-season-card__ident">
                      <span class="bcn-season-card__icon"
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
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </span>
                      </span>
                      <span class="bcn-season-card__title">Swainson’s hawk nesting season</span>
                      <span class="bcn-season-card__dates">Mar 1 – Sep 15</span>
                    </span>
                    <span class="bcn-season-card__actions">
                      <span data-cd-edit="season"
                        ><span
                          class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        >
                          <button
                            class="esa-button__native"
                            type="button"
                            aria-label="Edit Swainson’s hawk nesting season"
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
                                <path
                                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                                ></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="bcn-season-card__timeline">
                    <div class="bcn-season-card__segments">
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--first"
                        style="width: 16.43835616438356%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--middle"
                        style="width: 54.246575342465746%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--last"
                        style="width: 29.315068493150687%"
                      ></span>
                      <span
                        class="bcn-season-card__today"
                        style="left: 23.013698630136986%"
                        title="Today"
                      ></span>
                    </div>
                    <div
                      class="bcn-season-card__labels"
                      style="left: 16.43835616438356%; width: 54.246575342465746%"
                    >
                      <span>Mar 1</span> <span>Sep 15</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-f=""
                data-cd-row=""
                data-name="Tricolored blackbird colony season"
                data-start="3/15"
                data-end="7/31"
              >
                <div class="bcn-season-card">
                  <div class="bcn-season-card__header">
                    <span class="bcn-season-card__ident">
                      <span class="bcn-season-card__icon"
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
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </span>
                      </span>
                      <span class="bcn-season-card__title">Tricolored blackbird colony season</span>
                      <span class="bcn-season-card__dates">Mar 15 – Jul 31</span>
                    </span>
                    <span class="bcn-season-card__actions">
                      <span data-cd-edit="season"
                        ><span
                          class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        >
                          <button
                            class="esa-button__native"
                            type="button"
                            aria-label="Edit Tricolored blackbird colony season"
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
                                <path
                                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                                ></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="bcn-season-card__timeline">
                    <div class="bcn-season-card__segments">
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--first"
                        style="width: 20.273972602739725%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--middle"
                        style="width: 37.8082191780822%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--last"
                        style="width: 41.917808219178085%"
                      ></span>
                      <span
                        class="bcn-season-card__today"
                        style="left: 23.013698630136986%"
                        title="Today"
                      ></span>
                    </div>
                    <div
                      class="bcn-season-card__labels"
                      style="left: 20.273972602739725%; width: 37.8082191780822%"
                    >
                      <span>Mar 15</span> <span>Jul 31</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bcn-pdp__sgroup">
            <h3 class="bcn-pdp__sgroup-title">Biological Resources</h3>
            <div class="bcn-pdp__scards">
              <div
                data-f=""
                data-cd-row=""
                data-name="Bat maternity roost season"
                data-start="4/1"
                data-end="8/31"
              >
                <div class="bcn-season-card">
                  <div class="bcn-season-card__header">
                    <span class="bcn-season-card__ident">
                      <span class="bcn-season-card__icon"
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
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </span>
                      </span>
                      <span class="bcn-season-card__title">Bat maternity roost season</span>
                      <span class="bcn-season-card__dates">Apr 1 – Aug 31</span>
                    </span>
                    <span class="bcn-season-card__actions">
                      <span data-cd-edit="season"
                        ><span
                          class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        >
                          <button
                            class="esa-button__native"
                            type="button"
                            aria-label="Edit Bat maternity roost season"
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
                                <path
                                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                                ></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="bcn-season-card__timeline">
                    <div class="bcn-season-card__segments">
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--first"
                        style="width: 24.93150684931507%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--middle"
                        style="width: 41.64383561643835%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--last"
                        style="width: 33.42465753424658%"
                      ></span>
                      <span
                        class="bcn-season-card__today"
                        style="left: 23.013698630136986%"
                        title="Today"
                      ></span>
                    </div>
                    <div
                      class="bcn-season-card__labels"
                      style="left: 24.93150684931507%; width: 41.64383561643835%"
                    >
                      <span>Apr 1</span> <span>Aug 31</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-f=""
                data-cd-row=""
                data-name="CTS breeding season"
                data-start="11/1"
                data-end="3/31"
              >
                <div class="bcn-season-card">
                  <div class="bcn-season-card__header">
                    <span class="bcn-season-card__ident">
                      <span class="bcn-season-card__icon"
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
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </span>
                      </span>
                      <span class="bcn-season-card__title">CTS breeding season</span>
                      <span class="bcn-season-card__dates">Nov 1 – Mar 31</span>
                    </span>
                    <span class="bcn-season-card__actions">
                      <span data-cd-edit="season"
                        ><span
                          class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        >
                          <button
                            class="esa-button__native"
                            type="button"
                            aria-label="Edit CTS breeding season"
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
                                <path
                                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                                ></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="bcn-season-card__timeline" data-wraps="true">
                    <div class="bcn-season-card__segments">
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--first"
                        style="width: 24.65753424657534%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--middle"
                        style="width: 58.9041095890411%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--last"
                        style="width: 16.43835616438356%"
                      ></span>
                      <span
                        class="bcn-season-card__today"
                        style="left: 23.013698630136986%"
                        title="Today"
                      ></span>
                    </div>
                    <div
                      class="bcn-season-card__labels"
                      style="left: 24.65753424657534%; width: 58.9041095890411%"
                    >
                      <span>Mar 31</span> <span>Nov 1</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-f=""
                data-cd-row=""
                data-name="Delta smelt spawning window"
                data-start="2/1"
                data-end="6/30"
              >
                <div class="bcn-season-card">
                  <div class="bcn-season-card__header">
                    <span class="bcn-season-card__ident">
                      <span class="bcn-season-card__icon"
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
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </span>
                      </span>
                      <span class="bcn-season-card__title">Delta smelt spawning window</span>
                      <span class="bcn-season-card__dates">Feb 1 – Jun 30</span>
                    </span>
                    <span class="bcn-season-card__actions">
                      <span data-cd-edit="season"
                        ><span
                          class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        >
                          <button
                            class="esa-button__native"
                            type="button"
                            aria-label="Edit Delta smelt spawning window"
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
                                <path
                                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                                ></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="bcn-season-card__timeline">
                    <div class="bcn-season-card__segments">
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--first"
                        style="width: 8.767123287671232%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--middle"
                        style="width: 40.82191780821917%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--last"
                        style="width: 50.41095890410959%"
                      ></span>
                      <span
                        class="bcn-season-card__today"
                        style="left: 23.013698630136986%"
                        title="Today"
                      ></span>
                    </div>
                    <div
                      class="bcn-season-card__labels"
                      style="left: 8.767123287671232%; width: 40.82191780821917%"
                    >
                      <span>Feb 1</span> <span>Jun 30</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-f=""
                data-cd-row=""
                data-name="GGS active season"
                data-start="5/1"
                data-end="10/1"
              >
                <div class="bcn-season-card">
                  <div class="bcn-season-card__header">
                    <span class="bcn-season-card__ident">
                      <span class="bcn-season-card__icon"
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
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </span>
                      </span>
                      <span class="bcn-season-card__title">GGS active season</span>
                      <span class="bcn-season-card__dates">May 1 – Oct 1</span>
                    </span>
                    <span class="bcn-season-card__actions">
                      <span data-cd-edit="season"
                        ><span
                          class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        >
                          <button
                            class="esa-button__native"
                            type="button"
                            aria-label="Edit GGS active season"
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
                                <path
                                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                                ></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="bcn-season-card__timeline">
                    <div class="bcn-season-card__segments">
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--first"
                        style="width: 33.15068493150685%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--middle"
                        style="width: 41.917808219178085%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--last"
                        style="width: 24.93150684931507%"
                      ></span>
                      <span
                        class="bcn-season-card__today"
                        style="left: 23.013698630136986%"
                        title="Today"
                      ></span>
                    </div>
                    <div
                      class="bcn-season-card__labels"
                      style="left: 33.15068493150685%; width: 41.917808219178085%"
                    >
                      <span>May 1</span> <span>Oct 1</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-f=""
                data-cd-row=""
                data-name="In-water work window"
                data-start="8/1"
                data-end="10/31"
              >
                <div class="bcn-season-card">
                  <div class="bcn-season-card__header">
                    <span class="bcn-season-card__ident">
                      <span class="bcn-season-card__icon"
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
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </span>
                      </span>
                      <span class="bcn-season-card__title">In-water work window</span>
                      <span class="bcn-season-card__dates">Aug 1 – Oct 31</span>
                    </span>
                    <span class="bcn-season-card__actions">
                      <span data-cd-edit="season"
                        ><span
                          class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        >
                          <button
                            class="esa-button__native"
                            type="button"
                            aria-label="Edit In-water work window"
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
                                <path
                                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                                ></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="bcn-season-card__timeline">
                    <div class="bcn-season-card__segments">
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--first"
                        style="width: 58.35616438356165%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--middle"
                        style="width: 24.931506849315063%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--last"
                        style="width: 16.71232876712329%"
                      ></span>
                      <span
                        class="bcn-season-card__today"
                        style="left: 23.013698630136986%"
                        title="Today"
                      ></span>
                    </div>
                    <div
                      class="bcn-season-card__labels"
                      style="left: 58.35616438356165%; width: 24.931506849315063%"
                    >
                      <span>Aug 1</span> <span>Oct 31</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-f=""
                data-cd-row=""
                data-name="Salmonid migration window"
                data-start="10/1"
                data-end="6/30"
              >
                <div class="bcn-season-card">
                  <div class="bcn-season-card__header">
                    <span class="bcn-season-card__ident">
                      <span class="bcn-season-card__icon"
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
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </span>
                      </span>
                      <span class="bcn-season-card__title">Salmonid migration window</span>
                      <span class="bcn-season-card__dates">Oct 1 – Jun 30</span>
                    </span>
                    <span class="bcn-season-card__actions">
                      <span data-cd-edit="season"
                        ><span
                          class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        >
                          <button
                            class="esa-button__native"
                            type="button"
                            aria-label="Edit Salmonid migration window"
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
                                <path
                                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                                ></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="bcn-season-card__timeline" data-wraps="true">
                    <div class="bcn-season-card__segments">
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--first"
                        style="width: 49.589041095890416%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--middle"
                        style="width: 25.479452054794514%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--last"
                        style="width: 24.93150684931507%"
                      ></span>
                      <span
                        class="bcn-season-card__today"
                        style="left: 23.013698630136986%"
                        title="Today"
                      ></span>
                    </div>
                    <div
                      class="bcn-season-card__labels"
                      style="left: 49.589041095890416%; width: 25.479452054794514%"
                    >
                      <span>Jun 30</span> <span>Oct 1</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-f=""
                data-cd-row=""
                data-name="VELB flight season"
                data-start="3/15"
                data-end="6/15"
              >
                <div class="bcn-season-card">
                  <div class="bcn-season-card__header">
                    <span class="bcn-season-card__ident">
                      <span class="bcn-season-card__icon"
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
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </span>
                      </span>
                      <span class="bcn-season-card__title">VELB flight season</span>
                      <span class="bcn-season-card__dates">Mar 15 – Jun 15</span>
                    </span>
                    <span class="bcn-season-card__actions">
                      <span data-cd-edit="season"
                        ><span
                          class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        >
                          <button
                            class="esa-button__native"
                            type="button"
                            aria-label="Edit VELB flight season"
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
                                <path
                                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                                ></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="bcn-season-card__timeline">
                    <div class="bcn-season-card__segments">
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--first"
                        style="width: 20.273972602739725%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--middle"
                        style="width: 25.205479452054803%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--last"
                        style="width: 54.52054794520548%"
                      ></span>
                      <span
                        class="bcn-season-card__today"
                        style="left: 23.013698630136986%"
                        title="Today"
                      ></span>
                    </div>
                    <div
                      class="bcn-season-card__labels"
                      style="left: 20.273972602739725%; width: 25.205479452054803%"
                    >
                      <span>Mar 15</span> <span>Jun 15</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-f=""
                data-cd-row=""
                data-name="Vernal pool wet season"
                data-start="12/1"
                data-end="5/15"
              >
                <div class="bcn-season-card">
                  <div class="bcn-season-card__header">
                    <span class="bcn-season-card__ident">
                      <span class="bcn-season-card__icon"
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
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </span>
                      </span>
                      <span class="bcn-season-card__title">Vernal pool wet season</span>
                      <span class="bcn-season-card__dates">Dec 1 – May 15</span>
                    </span>
                    <span class="bcn-season-card__actions">
                      <span data-cd-edit="season"
                        ><span
                          class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        >
                          <button
                            class="esa-button__native"
                            type="button"
                            aria-label="Edit Vernal pool wet season"
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
                                <path
                                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                                ></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                          </button>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div class="bcn-season-card__timeline" data-wraps="true">
                    <div class="bcn-season-card__segments">
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--first"
                        style="width: 36.986301369863014%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--middle"
                        style="width: 54.794520547945204%"
                      ></span>
                      <span
                        class="bcn-season-card__seg bcn-season-card__seg--last"
                        style="width: 8.21917808219178%"
                      ></span>
                      <span
                        class="bcn-season-card__today"
                        style="left: 23.013698630136986%"
                        title="Today"
                      ></span>
                    </div>
                    <div
                      class="bcn-season-card__labels"
                      style="left: 36.986301369863014%; width: 54.794520547945204%"
                    >
                      <span>May 15</span> <span>Dec 1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Spatial Data — read-only layer cards; the Spatial Library zone manages them -->
        <section class="bcn-pdp" data-pd-body="spatial" data-pd-heading="Spatial Data" hidden="">
          <esa-text-field
            data-pd-filter="true"
            placeholder="Search 6 layers…"
            size="md"
          ></esa-text-field>
          <ul class="bcn-pdp__cards">
            <li class="bcn-pdp__card" data-f="">
              <span class="bcn-pdp__card-icon"
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
                    <path
                      d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
                    ></path>
                    <path
                      d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
                    ></path>
                    <path
                      d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
                    ></path>
                  </svg>
                </span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Component Footprints</span>
                <span class="bcn-pdp__card-sub">DCA Feature Server</span>
              </span>
              <span class="bcn-pdp__code">Polygon</span>
            </li>
            <li class="bcn-pdp__card" data-f="">
              <span class="bcn-pdp__card-icon"
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
                    <path
                      d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
                    ></path>
                    <path
                      d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
                    ></path>
                    <path
                      d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
                    ></path>
                  </svg>
                </span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Delta Parcels</span>
                <span class="bcn-pdp__card-sub">DWR AGOL</span>
              </span>
              <span class="bcn-pdp__code">Polygon</span>
            </li>
            <li class="bcn-pdp__card" data-f="">
              <span class="bcn-pdp__card-icon"
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
                    <path
                      d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
                    ></path>
                    <path
                      d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
                    ></path>
                    <path
                      d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
                    ></path>
                  </svg>
                </span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Geotech Exploration Sites</span>
                <span class="bcn-pdp__card-sub">DWR AGOL</span>
              </span>
              <span class="bcn-pdp__code">Point</span>
            </li>
            <li class="bcn-pdp__card" data-f="">
              <span class="bcn-pdp__card-icon"
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
                    <path
                      d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
                    ></path>
                    <path
                      d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
                    ></path>
                    <path
                      d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
                    ></path>
                  </svg>
                </span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Nesting Bird Buffers (live)</span>
                <span class="bcn-pdp__card-sub">DWR AGOL</span>
              </span>
              <span class="bcn-pdp__code">Polygon</span>
            </li>
            <li class="bcn-pdp__card" data-f="">
              <span class="bcn-pdp__card-icon"
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
                    <path
                      d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
                    ></path>
                    <path
                      d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
                    ></path>
                    <path
                      d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
                    ></path>
                  </svg>
                </span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Survey Coverage Areas</span>
                <span class="bcn-pdp__card-sub">DWR AGOL</span>
              </span>
              <span class="bcn-pdp__code">Polygon</span>
            </li>
            <li class="bcn-pdp__card" data-f="">
              <span class="bcn-pdp__card-icon"
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
                    <path
                      d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
                    ></path>
                    <path
                      d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
                    ></path>
                    <path
                      d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
                    ></path>
                  </svg>
                </span>
              </span>
              <span class="bcn-pdp__card-main">
                <span class="bcn-pdp__card-name">Work Areas</span>
                <span class="bcn-pdp__card-sub">DCA Feature Server</span>
              </span>
              <span class="bcn-pdp__code">Polygon</span>
            </li>
          </ul>
          <a class="bcn-pdp__zone-link" href="#spatial-library">
            Open Spatial Library
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
          </a>
        </section>
        <!-- Project Info — straight into the editable form (prod project-upsert fields),
       ending in the danger zone that gives delete-project its new home. -->
        <section
          class="bcn-pdp"
          data-pd-body="project-info"
          data-pd-heading="Project Info"
          hidden=""
        >
          <div class="bcn-pdp__form">
            <esa-text-field
              label="Name"
              value="Delta Conveyance Project"
              required=""
              size="md"
            ></esa-text-field>
            <div class="bcn-pdp__form-pair">
              <esa-text-field
                label="Start Date"
                value="Jan 8, 2024"
                required=""
                size="md"
              ></esa-text-field>
              <esa-text-field
                label="End Date"
                value="Dec 31, 2043"
                required=""
                size="md"
              ></esa-text-field>
            </div>
            <esa-switch-toggle
              label="Has Components"
              checked=""
              size="md"
              label-position="after"
            ></esa-switch-toggle>
            <esa-textarea
              label="Description"
              value="A new State Water Project conveyance facility — twin tunnels carrying water beneath the Delta from new North Delta intakes to the southern export facilities. Beacon is the system of record for every environmental commitment, monitoring observation, and compliance report across the project’s components."
              rows="6"
              size="md"
            ></esa-textarea>
            <div class="bcn-pdp__files">
              <span class="bcn-pdp__files-label">Files</span>
              <ul class="bcn-pdp__file-list">
                <li class="bcn-pdp__file">
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
                      <path d="M13.234 20.252 21 12.3"></path>
                      <path
                        d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"
                      ></path>
                    </svg>
                  </span>
                  <span class="bcn-pdp__file-name">Delta_Conveyance_FEIR_Certification.pdf</span>
                </li>
                <li class="bcn-pdp__file">
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
                      <path d="M13.234 20.252 21 12.3"></path>
                      <path
                        d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"
                      ></path>
                    </svg>
                  </span>
                  <span class="bcn-pdp__file-name">DCP_Project_Charter_2024.pdf</span>
                </li>
              </ul>
              <span
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
                >
                  <button class="esa-button__native" type="button">
                    <span class="esa-button__label"> Upload files </span>
                  </button>
                </span>
              </span>
            </div>
            <!-- Delete-project lives in the danger zone below, not this footer. -->
            <div class="bcn-pdp__formfoot">
              <span id="pd-info-cancel"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--md"
                >
                  <button class="esa-button__native" type="button">
                    <span class="esa-button__label"> Cancel </span>
                  </button>
                </span>
              </span>
              <span
                class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
              >
                <button class="esa-button__native" type="button">
                  <span class="esa-button__label"> Save </span>
                </button>
              </span>
            </div>
          </div>
          <div class="bcn-pdp__danger">
            <section class="bcn-danger-zone" aria-labelledby="bcn-danger-zone-1">
              <h2 class="bcn-danger-zone__heading" id="bcn-danger-zone-1">Danger Zone</h2>
              <div class="bcn-danger-zone__box">
                <div class="bcn-danger-zone__item">
                  <div class="bcn-danger-zone__text">
                    <h3 class="bcn-danger-zone__title">Delete this project</h3>
                    <p class="bcn-danger-zone__desc">
                      Removes the project, its components, and all tracked compliance data from
                      Beacon.
                    </p>
                  </div>
                  <div class="bcn-danger-zone__action">
                    <span id="pd-delete-project"
                      ><span
                        class="esa-button esa-button--color-danger esa-button--appearance-soft esa-button--md"
                      >
                        <button class="esa-button__native" type="button">
                          <span class="esa-button__label"> Delete project </span>
                        </button>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </esa-side-dialog>
      <!-- ── The stacked CHILD DRAWER — one narrow form per entity type (the prod
     inline-create-panels, ported). Header Add and per-row Edit both land here. ── -->
      <esa-side-dialog
        id="pd-child"
        position="right"
        style="--_width: min(420px, 90vw); --z-modal: 1350; --z-modal-backdrop: 1320"
        size="md"
      >
        <div class="bcn-pdp__cform" data-cd-body="species-add" hidden="">
          <p class="bcn-pdp__hint">
            Pick one or more species from the global library to add to this project.
          </p>
          <esa-combobox
            id="cd-species-combo"
            label="Species"
            placeholder="Search species…"
            multiple="true"
            required="true"
            mode="select"
            size="md"
          ></esa-combobox>
        </div>
        <div class="bcn-pdp__cform" data-cd-body="milestone" hidden="">
          <esa-text-field id="cd-ms-name" label="Name" required="" size="md"></esa-text-field>
          <esa-date-picker
            id="cd-ms-date"
            label="Estimated Date"
            help-text="Optional — leave blank if not yet known."
            size="md"
          ></esa-date-picker>
          <esa-textarea id="cd-ms-desc" label="Description" rows="4" size="md"></esa-textarea>
        </div>
        <div class="bcn-pdp__cform" data-cd-body="activity" hidden="">
          <esa-text-field id="cd-ca-name" label="Name" required="" size="md"></esa-text-field>
          <esa-textarea id="cd-ca-desc" label="Description" rows="4" size="md"></esa-textarea>
        </div>
        <div class="bcn-pdp__cform" data-cd-body="season" hidden="">
          <esa-text-field id="cd-se-name" label="Name" required="" size="md"></esa-text-field>
          <div class="bcn-pdp__form-pair">
            <esa-text-field
              id="cd-se-start"
              label="Start (month/day)"
              placeholder="e.g. 2/1"
              required=""
              size="md"
            ></esa-text-field>
            <esa-text-field
              id="cd-se-end"
              label="End (month/day)"
              placeholder="e.g. 9/15"
              required=""
              size="md"
            ></esa-text-field>
          </div>
          <div class="bcn-pdp__checks">
            <esa-switch-toggle
              label="Nesting Birds"
              size="md"
              label-position="after"
            ></esa-switch-toggle>
            <esa-switch-toggle
              label="Biological Resources"
              size="md"
              label-position="after"
            ></esa-switch-toggle>
          </div>
          <esa-combobox
            id="cd-se-species"
            label="Related Species"
            placeholder="Search species…"
            multiple="true"
            mode="select"
            size="md"
          ></esa-combobox>
          <esa-textarea id="cd-se-desc" label="Description" rows="3" size="md"></esa-textarea>
        </div>
        <!-- THE STANDARD EDIT-FORM FOOTER (round 8): Delete left · Cancel/Save right,
       medium. Delete renders only in edit mode; species-add swaps Save → Add. -->
        <span slot="footer" class="bcn-pdp__cfoot">
          <span id="cd-delete" data-cd-close="" hidden=""
            ><span
              class="esa-button esa-button--color-danger esa-button--appearance-soft esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Delete </span>
              </button>
            </span>
          </span>
          <span class="bcn-pdp__cfoot-right">
            <span data-cd-close=""
              ><span
                class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--md"
              >
                <button class="esa-button__native" type="button">
                  <span class="esa-button__label"> Cancel </span>
                </button>
              </span>
            </span>
            <span id="cd-save" data-cd-close=""
              ><span
                class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
              >
                <button class="esa-button__native" type="button">
                  <span class="esa-button__label"> Save </span>
                </button>
              </span>
            </span>
            <span id="cd-add" data-cd-close="" hidden=""
              ><span
                class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
              >
                <button class="esa-button__native" type="button">
                  <span class="esa-button__label"> Add </span>
                </button>
              </span>
            </span>
          </span>
        </span>
      </esa-side-dialog>
      <esa-confirm-dialog
        id="pd-delete-confirm"
        variant="danger"
        heading="Delete Project"
        message="Are you sure you want to delete this project? Doing so will also delete every component, commitment, observation, and report tracked under it. This action cannot be undone."
        confirm-label="Delete"
        cancel-label="Cancel"
        style="--z-modal: 1400; --z-modal-backdrop: 1350"
      ></esa-confirm-dialog>
      <script type="application/json" id="pd-species-data">
        [
          {
            "commonName": "Delta smelt",
            "scientificName": "Hypomesus transpacificus",
            "code": "DS"
          },
          {
            "commonName": "Longfin smelt",
            "scientificName": "Spirinchus thaleichthys",
            "code": "LFS"
          },
          {
            "commonName": "Winter-run Chinook salmon",
            "scientificName": "Oncorhynchus tshawytscha",
            "code": "WRCS"
          },
          {
            "commonName": "Spring-run Chinook salmon",
            "scientificName": "Oncorhynchus tshawytscha",
            "code": "SRCS"
          },
          {
            "commonName": "Fall-run Chinook salmon",
            "scientificName": "Oncorhynchus tshawytscha",
            "code": "FRCS"
          },
          {
            "commonName": "Central Valley steelhead",
            "scientificName": "Oncorhynchus mykiss",
            "code": "CVS"
          },
          {
            "commonName": "Green sturgeon",
            "scientificName": "Acipenser medirostris",
            "code": "GS"
          },
          {
            "commonName": "White sturgeon",
            "scientificName": "Acipenser transmontanus",
            "code": "WS"
          },
          {
            "commonName": "Sacramento splittail",
            "scientificName": "Pogonichthys macrolepidotus",
            "code": "SPLT"
          },
          {
            "commonName": "Pacific lamprey",
            "scientificName": "Entosphenus tridentatus",
            "code": "PL"
          },
          {
            "commonName": "Giant garter snake",
            "scientificName": "Thamnophis gigas",
            "code": "GGS"
          },
          {
            "commonName": "Western pond turtle",
            "scientificName": "Actinemys marmorata",
            "code": "WPT"
          },
          {
            "commonName": "California red-legged frog",
            "scientificName": "Rana draytonii",
            "code": "CRLF"
          },
          {
            "commonName": "California tiger salamander",
            "scientificName": "Ambystoma californiense",
            "code": "CTS"
          },
          { "commonName": "Western spadefoot", "scientificName": "Spea hammondii", "code": "WSF" },
          { "commonName": "Swainson's hawk", "scientificName": "Buteo swainsoni", "code": "SWHA" },
          { "commonName": "White-tailed kite", "scientificName": "Elanus leucurus", "code": "WTK" },
          {
            "commonName": "Northern harrier",
            "scientificName": "Circus hudsonius",
            "code": "NOHA"
          },
          { "commonName": "Burrowing owl", "scientificName": "Athene cunicularia", "code": "BUOW" },
          {
            "commonName": "Tricolored blackbird",
            "scientificName": "Agelaius tricolor",
            "code": "TRBL"
          },
          {
            "commonName": "California black rail",
            "scientificName": "Laterallus jamaicensis coturniculus",
            "code": "CBR"
          },
          {
            "commonName": "Greater sandhill crane",
            "scientificName": "Antigone canadensis tabida",
            "code": "GSC"
          },
          {
            "commonName": "Western yellow-billed cuckoo",
            "scientificName": "Coccyzus americanus occidentalis",
            "code": "WYBC"
          },
          {
            "commonName": "Least Bell's vireo",
            "scientificName": "Vireo bellii pusillus",
            "code": "LBV"
          },
          {
            "commonName": "Loggerhead shrike",
            "scientificName": "Lanius ludovicianus",
            "code": "LOSH"
          },
          {
            "commonName": "Song sparrow (Modesto population)",
            "scientificName": "Melospiza melodia",
            "code": "SOSP"
          },
          {
            "commonName": "Townsend's big-eared bat",
            "scientificName": "Corynorhinus townsendii",
            "code": "TBEB"
          },
          { "commonName": "Pallid bat", "scientificName": "Antrozous pallidus", "code": "PALB" },
          {
            "commonName": "Western red bat",
            "scientificName": "Lasiurus blossevillii",
            "code": "WRB"
          },
          { "commonName": "American badger", "scientificName": "Taxidea taxus", "code": "AMBA" },
          {
            "commonName": "San Joaquin kit fox",
            "scientificName": "Vulpes macrotis mutica",
            "code": "SJKF"
          },
          {
            "commonName": "Valley elderberry longhorn beetle",
            "scientificName": "Desmocerus californicus dimorphus",
            "code": "VELB"
          },
          {
            "commonName": "Vernal pool fairy shrimp",
            "scientificName": "Branchinecta lynchi",
            "code": "VPFS"
          },
          {
            "commonName": "Vernal pool tadpole shrimp",
            "scientificName": "Lepidurus packardi",
            "code": "VPTS"
          },
          {
            "commonName": "Crotch's bumble bee",
            "scientificName": "Bombus crotchii",
            "code": "CBB"
          },
          {
            "commonName": "Suisun marsh aster",
            "scientificName": "Symphyotrichum lentum",
            "code": "SMA"
          },
          {
            "commonName": "Mason's lilaeopsis",
            "scientificName": "Lilaeopsis masonii",
            "code": "ML"
          },
          {
            "commonName": "Delta button-celery",
            "scientificName": "Eryngium racemosum",
            "code": "DBC"
          }
        ]
      </script>
      <script
        type="module"
        src="/beacon-design/_astro/BcnProjectDataPanel.astro_astro_type_script_index_0_lang.C_cMufHx.js"
      ></script>
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
    src="/beacon-design/_astro/BcnOmniSearch.astro_astro_type_script_index_0_lang.vImwuuMB.js"
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
              <path d="M8 2v4"></path>
              <path d="M12 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="16" height="18" x="4" y="4" rx="2"></rect>
              <path d="M8 10h6"></path>
              <path d="M8 14h8"></path>
              <path d="M8 18h5"></path>
            </svg>
          </span>
        </button>
        <span class="bcn-help-bar__dot" data-whatsnew-dot="" aria-hidden="true"></span>
      </span>
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
            >
              <p class="bcn-help-bar__panel-item-title">Commitment Lists</p>
              <p class="bcn-help-bar__panel-item-blurb">
                Save a filtered view of commitments as a reusable, named List, then reopen it
                anytime to scope the grid to just its members.
              </p>
            </a>
          </li>
          <li class="bcn-help-bar__panel-item">
            <a
              class="bcn-help-bar__panel-link"
              href="/beacon-design/prototypes/release-notes#v1-33-0"
            >
              <p class="bcn-help-bar__panel-item-title">Evidence of Compliance</p>
              <p class="bcn-help-bar__panel-item-blurb">
                Every Evidence of Compliance record now lives in one Data Catalog grid with Project,
                Component, and Work Area scope selectors, instead of separate tabs on each page.
              </p>
            </a>
          </li>
          <li class="bcn-help-bar__panel-item">
            <a
              class="bcn-help-bar__panel-link"
              href="/beacon-design/prototypes/release-notes#v1-33-0"
            >
              <p class="bcn-help-bar__panel-item-title">Commitment Compliance</p>
              <p class="bcn-help-bar__panel-item-blurb">
                A new Monitoring Portal section shows which commitments are out of compliance and
                the field observations driving it, matched by species.
              </p>
            </a>
          </li>
        </ul>
        <div class="bcn-help-bar__panel-footer">
          <a class="bcn-help-bar__panel-all" href="/beacon-design/prototypes/release-notes">
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
              <span class="bcn-gd__here-page" data-gd-page="">Project Dashboard</span>
              <span class="bcn-gd__here-purpose" data-gd-purpose=""
                >Your project homepage — what is most critical right now, your starred components,
                and front doors into every zone of Beacon.</span
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
                data-summary="Why an item earns a spot at the top of the dashboard."
              >
                <span class="bcn-gd-row__text">
                  <span class="bcn-gd-row__title">How “Most critical right now” is chosen</span>
                  <span class="bcn-gd-row__sub"
                    >Why an item earns a spot at the top of the dashboard.</span
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
                data-article-id="five-minute-tour"
                data-kind="howto"
                data-title="A five-minute tour of Beacon"
                data-summary="The four zones of the app and how a compliance obligation flows through them."
              >
                <span class="bcn-gd-row__text">
                  <span class="bcn-gd-row__title">A five-minute tour of Beacon</span>
                  <span class="bcn-gd-row__sub"
                    >The four zones of the app and how a compliance obligation flows through
                    them.</span
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
                data-article-id="what-is-a-component"
                data-kind="glossary"
                data-title="Component"
                data-summary="A distinct place or package of work within a project, tracked independently."
              >
                <span class="bcn-gd-row__text">
                  <span class="bcn-gd-row__title">Component</span>
                  <span class="bcn-gd-row__sub"
                    >A distinct place or package of work within a project, tracked
                    independently.</span
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
                data-title="Action"
                data-summary="One trackable deliverable consolidating requirements that describe the same work."
              >
                <span class="bcn-gd-row__text">
                  <span class="bcn-gd-row__title">Action</span>
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
          data-article-id="project-vs-component-scope"
          data-kind="glossary"
          data-title="Scope"
          data-summary="The setting that determines whether work is tracked once, or once per location."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Scope</span>
            <span class="bcn-gd-row__sub"
              >The setting that determines whether work is tracked once, or once per location.</span
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
          data-article-id="tenant"
          data-kind="glossary"
          data-title="Tenant"
          data-summary="The client organization a Beacon workspace, its data, and its configuration are scoped to."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Tenant</span>
            <span class="bcn-gd-row__sub"
              >The client organization a Beacon workspace, its data, and its configuration are
              scoped to.</span
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
          data-article-id="work-area"
          data-kind="glossary"
          data-title="Work Area"
          data-summary="The finest scope level — a subdivision of a component for field-level tracking."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Work Area</span>
            <span class="bcn-gd-row__sub"
              >The finest scope level — a subdivision of a component for field-level tracking.</span
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
          data-article-id="actions-vs-implementations"
          data-kind="glossary"
          data-title="Implementation"
          data-summary="A single execution of a published action — the record teams work day to day."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Implementation</span>
            <span class="bcn-gd-row__sub"
              >A single execution of a published action — the record teams work day to day.</span
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
          data-article-id="permit"
          data-kind="glossary"
          data-title="Permit"
          data-summary="An agency authorization the project must obtain, tracked through the acquisition pipeline."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Permit</span>
            <span class="bcn-gd-row__sub"
              >An agency authorization the project must obtain, tracked through the acquisition
              pipeline.</span
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
          data-article-id="what-is-a-dmr"
          data-kind="glossary"
          data-title="Daily Monitoring Report"
          data-summary="The structured field record of one day on site, and a direct source of evidence."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Daily Monitoring Report</span>
            <span class="bcn-gd-row__sub"
              >The structured field record of one day on site, and a direct source of
              evidence.</span
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
          data-article-id="what-is-an-observation"
          data-kind="glossary"
          data-title="Observation"
          data-summary="One recorded field event — a species sighting, habitat condition, weather event, or BMP check."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Observation</span>
            <span class="bcn-gd-row__sub"
              >One recorded field event — a species sighting, habitat condition, weather event, or
              BMP check.</span
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
          data-article-id="survey"
          data-kind="glossary"
          data-title="Survey"
          data-summary="A field data record synced from a collection app, effective only after quality-control approval."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Survey</span>
            <span class="bcn-gd-row__sub"
              >A field data record synced from a collection app, effective only after
              quality-control approval.</span
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
          data-article-id="site-clearance"
          data-kind="glossary"
          data-title="Site Clearance"
          data-summary="The go/no-go determination of whether a site is clear for ground disturbance."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Site Clearance</span>
            <span class="bcn-gd-row__sub"
              >The go/no-go determination of whether a site is clear for ground disturbance.</span
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
          data-article-id="monitoring-portal"
          data-kind="glossary"
          data-title="Monitoring Portal"
          data-summary="The section that reports commitment compliance from field observations."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Monitoring Portal</span>
            <span class="bcn-gd-row__sub"
              >The section that reports commitment compliance from field observations.</span
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
          data-article-id="site-clearance-go-no-go"
          data-kind="howto"
          data-title="Using Site Clearance go/no-go"
          data-summary="Check whether a work site is clear for ground disturbance — and what is blocking it."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Using Site Clearance go/no-go</span>
            <span class="bcn-gd-row__sub"
              >Check whether a work site is clear for ground disturbance — and what is blocking
              it.</span
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
          data-title="Evidence of Compliance"
          data-summary="The documented proof that an obligation was met — the artifact an auditor reviews."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Evidence of Compliance</span>
            <span class="bcn-gd-row__sub"
              >The documented proof that an obligation was met — the artifact an auditor
              reviews.</span
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
          data-article-id="assembling-compliance-report"
          data-kind="howto"
          data-title="Assembling a compliance report"
          data-summary="Compile evidence of compliance into a report package for an agency."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Assembling a compliance report</span>
            <span class="bcn-gd-row__sub"
              >Compile evidence of compliance into a report package for an agency.</span
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
          data-title="Source Document"
          data-summary="The regulatory document — permit, EIR, or agreement — that obligations are extracted from."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Source Document</span>
            <span class="bcn-gd-row__sub"
              >The regulatory document — permit, EIR, or agreement — that obligations are extracted
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
          data-title="Commitment"
          data-summary="One discrete obligation, recorded in its source document’s original language."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Commitment</span>
            <span class="bcn-gd-row__sub"
              >One discrete obligation, recorded in its source document’s original language.</span
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
          data-title="Requirement"
          data-summary="A specific, actionable sub-obligation broken out of a commitment."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Requirement</span>
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
          data-article-id="feature-flag"
          data-kind="glossary"
          data-title="Feature Flag"
          data-summary="A tenant-level switch that enables or disables a Beacon capability."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Feature Flag</span>
            <span class="bcn-gd-row__sub"
              >A tenant-level switch that enables or disables a Beacon capability.</span
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
          data-article-id="managing-tenant-settings"
          data-kind="howto"
          data-title="Managing tenant settings"
          data-summary="Configure the display labels, defaults, and enabled features that apply across a tenant."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Managing tenant settings</span>
            <span class="bcn-gd-row__sub"
              >Configure the display labels, defaults, and enabled features that apply across a
              tenant.</span
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
          data-article-id="managing-users-roles"
          data-kind="howto"
          data-title="Managing users and roles"
          data-summary="Add users to a tenant and assign the roles that govern their access."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Managing users and roles</span>
            <span class="bcn-gd-row__sub"
              >Add users to a tenant and assign the roles that govern their access.</span
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
          data-article-id="configuring-notifications"
          data-kind="howto"
          data-title="Configuring notifications"
          data-summary="Set which compliance events generate notifications, and how each user receives them."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Configuring notifications</span>
            <span class="bcn-gd-row__sub"
              >Set which compliance events generate notifications, and how each user receives
              them.</span
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
        data-article-body="project-vs-component-scope"
        data-kind="glossary"
        data-title="Scope"
        hidden=""
      >
        <article id="article-project-vs-component-scope" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p type-body">
              Scope determines how an action is distributed. A project-scoped action is performed
              once, centrally — for example, submitting the project-wide stormwater plan. A
              component-scoped action is performed independently at every applicable component — for
              example, installing exclusion fencing at each of 20 construction areas.
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
            <p class="bcn-help-article__p type-body">
              A Tenant is the organization a Beacon workspace belongs to. Beacon is multi-tenant:
              each tenant’s projects, documents, users, and configuration are isolated from every
              other tenant’s, and a user operates within a single tenant at a time.
            </p>
            <p class="bcn-help-article__p type-body">
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
            <p class="bcn-help-article__p type-body">
              A Work Area is a subdivision of a component, used when field tracking requires finer
              grain than the component itself provides. Work areas form the most granular level of
              the Project → Component → Work Area scope hierarchy.
            </p>
            <p class="bcn-help-article__p type-body">
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
            <p class="bcn-help-article__p type-body">
              Beacon turns a body of regulatory documents into a working compliance program.
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
                The Data Catalog holds source documents and the commitments and requirements
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
                Reporting assembles evidence of compliance into the reports agencies expect.
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
            <p class="bcn-help-article__p type-body">
              Search reads the full text of everything in a project — including the body text of
              commitments and uploaded documents, not just titles.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                Press / on any page, or click the search field in the top bar.
              </li>
              <li class="bcn-help-article__step type-body">
                Type a few words. Results group by type — commitments, requirements, actions,
                documents — with matching snippets highlighted.
              </li>
              <li class="bcn-help-article__step type-body">
                Press Enter on a result to open it, or choose “See all results” for the full page
                with filters.
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
            <p class="bcn-help-article__p type-body">
              An Implementation is the tracked execution of an action: its status, assignee, tasks,
              comments, and evidence. The action defines what must be done; the implementation
              records doing it. In daily use, implementations are what teams refer to as the
              actions.
            </p>
            <p class="bcn-help-article__p type-body">
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
            <p class="bcn-help-article__p type-body">
              A Component is a discrete location or work package within a project — a launch shaft,
              an intake site, a construction segment. Components exist because the same obligation
              frequently applies independently at each location.
            </p>
            <p class="bcn-help-article__p type-body">
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
            <p class="bcn-help-article__p type-body">
              A Permit is an authorization or approval a project must secure from a regulatory
              agency before or during construction. Beacon tracks each permit through its
              acquisition pipeline — from not yet applied, through agency review, to issued.
            </p>
            <p class="bcn-help-article__p type-body">
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
            <p class="bcn-help-article__p type-body">
              Permit Tracking lists every permit and approval a project needs, each with its current
              status in the acquisition pipeline — from not yet applied, through agency review, to
              issued.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                Each row is one permit; the status lozenge shows where it sits in the pipeline.
              </li>
              <li class="bcn-help-article__step type-body">
                The date column shows the next deadline — a submittal window, an agency response
                due, or an expiration to renew.
              </li>
              <li class="bcn-help-article__step type-body">
                Open a permit to see its conditions, responsible contacts, and the source document
                it will become once issued.
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
            <p class="bcn-help-article__p type-body">
              A project may have dozens of components, though most people work in a few. Starring
              pins a component to the project dashboard as a card showing its Tracking, Monitoring,
              and Reporting pulse — the entry point into that component’s own dashboard.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                Open any component and click the star in its header.
              </li>
              <li class="bcn-help-article__step type-body">
                Starred components appear on the project dashboard in the Components section.
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
                  >Component</a
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
              The dashboard’s critical surface is deliberately small. It elevates only items that
              are project-critical today — an overdue action on a critical-path component, a lapsed
              survey blocking ground disturbance, a report due to an agency this week.
            </p>
            <p class="bcn-help-article__p type-body">
              An item leaves the surface when its underlying condition clears — the work is
              completed, the report is filed, or a review resolves the block. There is nothing to
              configure; the surface reads the same signals shown in each zone.
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
        data-title="Daily Monitoring Report"
        hidden=""
      >
        <article id="article-what-is-a-dmr" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p type-body">
              A Daily Monitoring Report (DMR) documents one day of field monitoring: the observer,
              site and weather conditions, construction activities underway, recorded observations,
              photographs, and narrative notes.
            </p>
            <p class="bcn-help-article__p type-body">
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
            <p class="bcn-help-article__p type-body">
              An Observation is a single recorded field event: two burrowing owls at the north
              staging area, an intact silt fence along the eastern boundary, or wind exceeding 25
              mph with dust control activated. An observation typically belongs to a DMR and carries
              species data, location, time, and photographs.
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
            <p class="bcn-help-article__p type-body">
              A Survey is a structured field record — typically a species or habitat survey —
              collected in a field application such as Fulcrum or Survey123 and synced into Beacon.
              Surveys supply the dated evidence behind clearances and compliance countdowns.
            </p>
            <p class="bcn-help-article__p type-body">
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
            <p class="bcn-help-article__p type-body">
              Site Clearance is the determination of whether a specific site is clear to disturb
              ground on a given day. Beacon detects potential blocks — a lapsed nesting survey, an
              open wildlife buffer — and marks the site provisionally blocked until a qualified
              reviewer records a decision.
            </p>
            <p class="bcn-help-article__p type-body">
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
            <p class="bcn-help-article__p type-body">
              The Monitoring Portal is the area of Beacon that reports commitment-level compliance
              against field activity. It identifies commitments that are out of compliance and the
              observations driving each result, matched by species and condition.
            </p>
            <p class="bcn-help-article__p type-body">
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
            <p class="bcn-help-article__p type-body">
              Survey records flow in from field collection tools such as Fulcrum and Survey123.
              Before a record affects compliance — clearances, countdowns, evidence — it passes a
              quality-control review.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                New records arrive with a pending-QC status in the Surveys grid.
              </li>
              <li class="bcn-help-article__step type-body">
                A reviewer checks species identification, coordinates, and required fields, then
                approves or returns the record.
              </li>
              <li class="bcn-help-article__step type-body">
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
            <p class="bcn-help-article__p type-body">
              Site Clearance answers one question per site: is it clear to disturb ground today? The
              system detects potential blocks — a lapsed nesting survey, an open wildlife buffer —
              and marks the site provisionally blocked until a qualified reviewer decides.
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
                Reviews overrule detections: the system detects, a reviewer decides.
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
        data-title="Evidence of Compliance"
        hidden=""
      >
        <article id="article-what-is-evidence" class="bcn-help-article">
          <div class="bcn-help-article__body">
            <p class="bcn-help-article__p type-body">
              Evidence of Compliance is the terminal output of the compliance flow: the report,
              photograph, receipt, signed form, or monitoring record that proves an obligation was
              satisfied. It is the material presented to a regulatory agency during an audit.
            </p>
            <p class="bcn-help-article__p type-body">
              Evidence attaches to action implementations and may also link to checklist items that
              satisfy specific requirements per component. Field-sourced evidence can derive
              directly from Daily Monitoring Reports.
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
            <p class="bcn-help-article__p type-body">
              A compliance report presents the evidence behind a set of obligations in the format an
              agency expects. Reports are assembled from existing Evidence of Compliance records;
              they create no new evidence.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                Open Reporting and choose the report template that matches the agency’s required
                format.
              </li>
              <li class="bcn-help-article__step type-body">
                Select the scope — project, component, or work area — and the reporting period.
              </li>
              <li class="bcn-help-article__step type-body">
                Beacon gathers the evidence records in scope; review the set and exclude any records
                that do not apply.
              </li>
              <li class="bcn-help-article__step type-body">
                Generate the package. The output lists each obligation, its status, and the linked
                evidence.
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
            <p class="bcn-help-article__p type-body">
              A Source Document is a regulatory record attached to a project: a permit, an
              environmental impact report, an incidental take permit, a contract, or an agency
              agreement. Every obligation in Beacon originates from a source document.
            </p>
            <p class="bcn-help-article__p type-body">
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
            <p class="bcn-help-article__p type-body">
              A Commitment is a single obligation a project must satisfy, captured in the regulatory
              language of its source document. Each commitment carries structured attributes — type,
              resource category, phase, species, and season — that support filtering and planning.
            </p>
            <p class="bcn-help-article__p type-body">
              The same real-world obligation frequently appears across multiple documents. Each
              appearance is retained as a separate commitment; the overlap is resolved downstream,
              when requirements are consolidated into actions.
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
            <p class="bcn-help-article__p type-body">
              A Requirement is one discrete unit of work contained within a commitment. A commitment
              stating “prior to grading, conduct protocol-level surveys for burrowing owl and submit
              results within 30 days” resolves to two requirements: conduct the survey, and submit
              the results.
            </p>
            <p class="bcn-help-article__p type-body">
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
            <p class="bcn-help-article__p type-body">
              An Action is a planned unit of compliance work. It consolidates requirements — often
              drawn from many commitments — that describe the same underlying task. A requirement to
              submit the stormwater plan appearing across 44 commitments resolves to one action.
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
            <p class="bcn-help-article__p type-body">
              Every requirement keeps its full ancestry: the commitment it came from, and the source
              document that commitment was extracted from. This is how a requirement is traced to
              the exact regulatory language behind it.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                Open the requirement. The lineage strip at the top shows Source → Commitment →
                Requirement.
              </li>
              <li class="bcn-help-article__step type-body">
                Click the commitment to read the obligation in the document’s original words.
              </li>
              <li class="bcn-help-article__step type-body">
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
            <p class="bcn-help-article__p type-body">
              A Feature Flag is a configuration switch that turns a Beacon capability on or off for
              a tenant. Flags allow a feature to be released to specific tenants independently,
              without a code change.
            </p>
            <p class="bcn-help-article__p type-body">
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
            <p class="bcn-help-article__p type-body">
              Tenant settings control behavior shared across every project a tenant owns: display
              labels for core entities, default notification rules, enabled features, and the user
              roster. Changes apply tenant-wide.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                Open Settings and select the tenant settings section (available to tenant
                administrators).
              </li>
              <li class="bcn-help-article__step type-body">
                Adjust display labels, defaults, or enabled features; each change is scoped to the
                current tenant only.
              </li>
              <li class="bcn-help-article__step type-body">
                Save. Tenant-wide changes take effect on the next page load for every user in the
                tenant.
              </li>
            </ol>
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
            <p class="bcn-help-article__p type-body">
              Access in Beacon is governed by role. A role determines which zones a user can view
              and which records a user can create, edit, or approve. Users are added at the tenant
              level and assigned one or more roles.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">Open Settings and select Users.</li>
              <li class="bcn-help-article__step type-body">
                Invite a user by email, or select an existing user to change their assignment.
              </li>
              <li class="bcn-help-article__step type-body">
                Assign roles — for example, viewer, contributor, or reviewer — and save.
              </li>
            </ol>
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
            <p class="bcn-help-article__p type-body">
              Notifications alert users to compliance events — an approaching deadline, a new
              provisional block, a returned survey. Defaults are set at the tenant level; each user
              may adjust their own delivery preferences within those defaults.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                Open Settings and select Notifications to review the tenant’s default rules.
              </li>
              <li class="bcn-help-article__step type-body">
                Enable or disable notifications by event type, and set the delivery channel for
                each.
              </li>
              <li class="bcn-help-article__step type-body">
                Individual users adjust their personal preferences from the same section; tenant
                defaults apply where a user has made no choice.
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
    </div>
  </esa-side-dialog>
  <script
    type="module"
    src="/beacon-design/_astro/BcnGuidanceDrawer.astro_astro_type_script_index_0_lang.z_ZYbuXf.js"
  ></script>
</div>
<div class="bcn-tl__pop" data-tl-pop="" hidden="" role="dialog" aria-label="Timeline detail"></div>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
:root,
[data-theme="beacon"] {
  --bcn-aldo: #08908b;
  --bcn-aldo-100: #cfeceb;
  --bcn-aldo-50: #e8f6f5;
  --bcn-gray-100: #efefef;
  --bcn-gray-1000: #000000;
  --bcn-gray-200: #dcdcdc;
  --bcn-gray-300: #bdbdbd;
  --bcn-gray-400: #989898;
  --bcn-gray-50: #fafafa;
  --bcn-gray-500: #7c7c7c;
  --bcn-gray-600: #656565;
  --bcn-gray-900: #3d3d3d;
  --bcn-gray-950: #292929;
  --bcn-helpbar-bg: rgba(23, 25, 27, 0.78);
  --bcn-helpbar-bg-solid: #1f2224;
  --bcn-helpbar-border: rgba(255, 255, 255, 0.12);
  --bcn-helpbar-divider: rgba(255, 255, 255, 0.16);
  --bcn-helpbar-fg: rgba(255, 255, 255, 0.92);
  --bcn-helpbar-fg-muted: rgba(255, 255, 255, 0.72);
  --bcn-helpbar-hover-bg: rgba(255, 255, 255, 0.1);
  --bcn-teal-600: #0e807b;
  --bcn-teal-800: #0a6562;
  --card-bg: #fcfcfc;
  --card-border-color: #dcdcdc;
  --card-header-bg: transparent;
  --card-header-border-color: #efefef;
  --card-header-color: #3d3d3d;
  --card-padding: 1.5rem;
  --card-radius: 0.5rem;
  --color-accent: #f76b15;
  --color-border: #dcdcdc;
  --color-border-light: #efefef;
  --color-border-strong: #bdbdbd;
  --color-commitment: #58508d;
  --color-danger: #e5484d;
  --color-info: #228be6;
  --color-primary: #005862;
  --color-primary-hover: #00474f;
  --color-primary-strong: #2a7e3b;
  --color-secondary: #00918b;
  --color-secondary-hover: #0a6562;
  --color-secondary-strong: #2a7e3b;
  --color-surface: #fcfcfc;
  --color-surface-elevated: #fcfcfc;
  --color-surface-sunken: #efefef;
  --color-text-inverse: #fcfcfc;
  --color-text-link: #005862;
  --color-text-muted: #7c7c7c;
  --color-text-primary: #3d3d3d;
  --color-text-secondary: #525252;
  --color-text-tertiary: #656565;
  --color-warning: #f59e0b;
  --dialog-bg: #fcfcfc;
  --dialog-border-color: #efefef;
  --dialog-radius: 0.75rem;
  --dialog-width: 480px;
  --dialog-width-lg: 640px;
  --font-decorative: "Besley", serif;
  --font-display: "DM Sans", sans-serif;
  --font-mono: "Roboto Mono", ui-monospace, monospace;
  --font-sans: "DM Sans", sans-serif;
  --font-weight-bold: 650;
  --font-weight-medium: 500;
  --font-weight-regular: 350;
  --font-weight-semibold: 550;
  --form-bg: #fcfcfc;
  --form-border-color: #dcdcdc;
  --form-border-width: 1px;
  --form-font-size-md: clamp(0.75rem, 0.66rem + 0.44vw, 0.9375rem);
  --form-font-size-sm: clamp(0.625rem, 0.56rem + 0.32vw, 0.75rem);
  --form-height-md: 36px;
  --form-height-sm: 28px;
  --form-padding-x-md: 0.75rem;
  --form-padding-x-sm: 0.625rem;
  --form-radius-md: 0.25rem;
  --form-radius-sm: 0.25rem;
  --icon-button-bg-hover: color-mix(in srgb, currentColor 14%, transparent);
  --icon-size-md: 20px;
  --icon-size-medium: 20px;
  --icon-size-sm: 16px;
  --icon-size-small: 16px;
  --icon-size-xs: 14px;
  --letter-spacing-tight: -0.01em;
  --line-height-normal: 1.6;
  --line-height-tight: 1.3;
  --popover-bg: #fcfcfc;
  --popover-border-color: #dcdcdc;
  --popover-color: #3d3d3d;
  --popover-radius: 0.5rem;
  --radius-100: 0.25rem;
  --radius-200: 0.5rem;
  --radius-300: 0.5rem;
  --radius-400: 0.75rem;
  --radius-full: 9999px;
  --shadow-100: 0 2px 12px 0 rgba(0, 0, 0, 0.04);
  --shadow-300: 0 6px 24px -6px rgba(0, 0, 0, 0.07);
  --side-dialog-width: 400px;
  --sidebar-width: 280px;
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
  --transition-fast: 0.15s ease;
  --type-size-100: clamp(0.625rem, 0.56rem + 0.32vw, 0.75rem);
  --type-size-150: clamp(0.6875rem, 0.61rem + 0.38vw, 0.875rem);
  --type-size-200: clamp(0.75rem, 0.66rem + 0.44vw, 0.9375rem);
  --type-size-250: clamp(0.8125rem, 0.71rem + 0.5vw, 1.0625rem);
  --type-size-300: clamp(0.875rem, 0.77rem + 0.52vw, 1.125rem);
  --type-size-400: clamp(1rem, 0.88rem + 0.6vw, 1.25rem);
  --type-size-500: clamp(1.125rem, 0.98rem + 0.72vw, 1.5rem);
  --type-size-600: clamp(1.375rem, 1.2rem + 0.88vw, 1.875rem);
  --type-size-700: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem);
}

:host {
  --_width: var(--side-dialog-width, 400px);
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: var(--font-sans, system-ui, sans-serif);
  font-weight: var(--font-weight-regular, 350);
  color: var(--color-text-primary, #3d3d3d);
  background: var(--color-surface, #fff);
  -webkit-font-smoothing: antialiased;
}
button {
  font-family: inherit;
  cursor: pointer;
  background: none;
  border: 0;
}
a {
  color: var(--color-text-link, #005862);
  text-decoration: none;
}
img {
  display: block;
  max-width: 100%;
}
:where(h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd, ul, ol, pre) {
  margin: 0;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}
[data-gap="xl"] {
  --gap: var(--spacing-600, 2rem);
}
.sidebar {
  --gap: var(--spacing-500, 1.5rem);
  --sidebar-width: 18rem;
  --sidebar-content-min: 60%;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
}
[data-gap="lg"] {
  --gap: var(--spacing-500, 1.5rem);
}
.sidebar > :first-child {
  flex-basis: var(--sidebar-width);
  flex-grow: 1;
}
.sidebar[data-side="end"] > :first-child {
  order: 2;
}
.sidebar > :last-child {
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: var(--sidebar-content-min);
}
.type-section-title {
  font-family: var(--font-display, var(--font-sans));
  font-size: var(--type-size-500);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}
:host {
  --_popover-bg: var(--popover-bg, var(--color-surface, #ffffff));
  --_popover-border: var(--popover-border-color, var(--color-border, #e5e5e5));
  --_popover-shadow: var(--shadow-300, 0 6px 24px -6px rgba(0, 0, 0, 0.07));
  --_popover-radius: var(--popover-radius, var(--radius-200, 0.5rem));
  --_popover-padding: var(--spacing-300, 0.75rem);
  --_popover-arrow-size: 8px;
  --_popover-color: var(--popover-color, var(--color-text-primary, #171717));
  display: inline-block;
}
.esa-popover-anchor {
  position: relative;
  display: inline-block;
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
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  transition:
    transform 0.15s ease,
    opacity 0.2s ease-in-out;
  flex-shrink: 0;
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
.nav-sublink.active {
  background: #0000000a;
  color: var(--color-primary);
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
.nav-subdivider {
  list-style: none;
  height: 1px;
  margin: var(--spacing-150) 0 var(--spacing-150) 2.5rem;
  background: var(--bcn-gray-200);
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
.bcn-help-bar__panel-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
}
.bcn-help-bar__panel-title {
  margin: 0;
  font-size: var(--type-size-200, 0.9375rem);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-help-bar__panel-release {
  margin: 0;
  font-size: var(--type-size-150, 0.875rem);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.bcn-help-bar__panel-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-help-bar__panel-link {
  display: block;
  padding: var(--spacing-150) var(--spacing-150);
  margin: 0 calc(var(--spacing-150) * -1);
  border-radius: var(--radius-200, 8px);
  color: inherit;
  text-decoration: none;
  transition: background var(--transition-fast, 0.15s ease);
}
.bcn-help-bar__panel-item-title {
  margin: 0 0 2px;
  font-family: var(--font-decorative);
  font-size: 1.0625rem;
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
  color: var(--color-text-primary);
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
  color: var(--color-text-link);
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
[data-gd-chat] {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
[data-gd-chat]:empty {
  display: none;
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
html,
.modern-layout__content {
  scroll-behavior: smooth;
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
:host {
  display: contents;
}
:host {
  all: initial;
}
.host-root {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 2147483000;
  font-family: system-ui, sans-serif;
}
.host-root > * {
  pointer-events: auto;
}
.launch {
  position: fixed;
  bottom: 22px;
  left: 22px;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 19px;
  border-radius: 999px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.01em;
  border: 1px solid #3d6fd6;
  background: linear-gradient(180deg, #1f6feb, #1551c4);
  box-shadow:
    0 10px 28px -8px rgba(31, 111, 235, 0.65),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    filter 0.15s ease;
}
.launch svg {
  flex: none;
}
.panel {
  position: fixed;
  top: 18px;
  right: 18px;
  bottom: 18px;
  width: min(720px, 94vw);
  display: flex;
  flex-direction: column;
  color: #ffffff;
  border-radius: 16px;
  background: linear-gradient(155deg, rgba(26, 31, 40, 0.74), rgba(11, 15, 21, 0.86));
  backdrop-filter: blur(26px) saturate(150%);
  -webkit-backdrop-filter: blur(26px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow:
    0 28px 70px -18px rgba(0, 0, 0, 0.62),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  font-size: 12.5px;
  overflow: hidden;
  /* slide in from the right */
  transform: translateX(calc(100% + 32px));
  opacity: 0;
  visibility: hidden;
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.22s ease,
    visibility 0s linear 0.3s;
}
.head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
}
.head strong {
  font-size: 14px;
}
.head .sub {
  flex: 1;
  color: #ccd5e0;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.x {
  border: 0;
  background: none;
  color: #c4cdd8;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
}
.picker {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.chip {
  padding: 5px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  color: #eef2f6;
  font: inherit;
  font-size: 12.5px;
  cursor: pointer;
  white-space: nowrap;
  transition:
    border-color 0.12s ease,
    background 0.12s ease,
    color 0.12s ease;
}
.chip.on {
  background: rgba(31, 111, 235, 0.28);
  border-color: #4493f8;
  color: #fff;
  font-weight: 600;
}
.tabs {
  display: flex;
  gap: 4px;
  padding: 9px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
}
.tabs button {
  padding: 5px 12px;
  border: 0;
  border-radius: 6px;
  background: none;
  color: #ccd5e0;
  font: inherit;
  font-size: 12.5px;
  cursor: pointer;
}
.tabs button.on {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.body {
  overflow: auto;
  padding: 13px 16px;
  flex: 1;
}
.hint {
  margin: 0;
  color: #c4cdd8;
  line-height: 1.6;
}
.footer {
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 11px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.18);
}
[hidden] {
  display: none !important;
}
.cpreview {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: calc(100% + 8px);
  background: rgba(13, 17, 23, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  box-shadow: 0 18px 50px -14px rgba(0, 0, 0, 0.7);
  padding: 12px 14px;
  max-height: 50vh;
  overflow: auto;
}
.copy {
  color: #eef2f6;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.05);
}
.footer button {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 8px 14px;
  border-radius: 8px;
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
}
.claude {
  color: #fff;
  border: 1px solid #d97757;
  background: linear-gradient(180deg, #e0805f, #c25e3c);
  box-shadow:
    0 6px 18px -6px rgba(217, 119, 87, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}
.claude svg {
  flex: none;
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
.esa-card {
  --_card-bg: var(--card-bg, var(--color-surface, #ffffff));
  --_card-border: var(--card-border-color, var(--color-border, #e5e5e5));
  --_card-radius: var(--card-radius, var(--radius-300, 0.5rem));
  --_card-padding: var(--card-padding, var(--spacing-500, 1.5rem));
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--card-header-color, var(--color-text-primary, #171717));
  --_card-header-border: var(--card-header-border-color, var(--color-border-light, #efefef));
  display: block;
  background: var(--_card-bg);
  border: 1px solid var(--_card-border);
  border-radius: var(--_card-radius);
  overflow: hidden;
}
.esa-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: 1px solid var(--_card-header-border);
  min-height: 56px;
}
.esa-card__header-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
}
.esa-card__titles {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-050, 0.125rem);
}
.esa-card__title {
  font-size: var(--type-size-250, 1.0625rem);
  font-weight: 600;
  margin: 0;
  color: inherit;
  font-family: var(--font-sans, "DM Sans", sans-serif);
}
.esa-card__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
}
.esa-card__body {
  padding: var(--_card-padding);
}
.esa-icon-button--sm {
  --_ib-size: var(--form-height-sm, 32px);
}
.esa-stat {
  --_stat-value-color: var(--stat-value-color, var(--color-text-primary, #171717));
  --_stat-value-font: var(
    --stat-value-font,
    var(--font-display, var(--font-sans, "DM Sans", sans-serif))
  );
  --_stat-value-size: var(--stat-value-size, var(--type-size-700, 2.25rem));
  --_stat-value-weight: var(--stat-value-weight, var(--font-weight-bold, 650));
  --_stat-label-color: var(--stat-label-color, var(--color-text-secondary, #525252));
  --_stat-label-size: var(--stat-label-size, var(--type-size-200, 0.9375rem));
  --_stat-label-weight: var(--stat-label-weight, var(--font-weight-medium, 450));
  --_stat-sub-color: var(--stat-sub-color, var(--color-text-muted, #737373));
  --_stat-sub-size: var(--stat-sub-size, var(--type-size-150, 0.875rem));
  --_stat-accent-color: var(--stat-accent-color, var(--color-secondary-strong, #3a7c59));
  --_stat-gap: var(--stat-gap, var(--spacing-050, 0.125rem));
  display: flex;
  flex-direction: column;
  gap: var(--_stat-gap);
  background: transparent;
}
.esa-stat__value {
  font-family: var(--_stat-value-font);
  font-size: var(--_stat-value-size);
  font-weight: var(--_stat-value-weight);
  line-height: var(--line-height-tight, 1.3);
  letter-spacing: var(--letter-spacing-tight, -0.01em);
  color: var(--_stat-value-color);
}
.esa-stat__label {
  font-size: var(--_stat-label-size);
  font-weight: var(--_stat-label-weight);
  line-height: var(--line-height-normal, 1.6);
  color: var(--_stat-label-color);
}
.page-layout {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 52px);
  padding: var(--spacing-600);
  background: var(--bcn-gray-50);
  box-sizing: border-box;
}
.page-layout--bleed {
  padding: 0;
}
.page-layout__bleed {
  width: 100%;
}
.page-layout__container {
  display: flex;
  flex-direction: column;
}
.page-layout--bleed .page-layout__container {
  padding: 0 var(--spacing-600) var(--spacing-600);
}
.page-layout__content {
  padding: var(--spacing-500) 0;
  min-height: 70vh;
  position: relative;
}
.page-layout section {
  width: 100%;
}
:host {
  --_dialog-bg: var(--dialog-bg, var(--color-surface-elevated, #ffffff));
  --_dialog-border-radius: var(--dialog-radius, var(--radius-400, 0.75rem));
  --_dialog-padding: var(--spacing-500, 1.5rem);
  --_dialog-header-border: var(--dialog-border-color, var(--color-border-light, #efefef));
  /* Optional header/footer surface tints — a spoke fills these to frame the
         body; default transparent leaves existing consumers unchanged. */
  --_dialog-header-bg: var(--dialog-header-bg, transparent);
  --_dialog-footer-bg: var(--dialog-footer-bg, transparent);
  --_dialog-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1);
  --_dialog-width: var(--dialog-width, 480px);
  --_dialog-max-height: 85vh;
}
:host([size="lg"]) {
  --_dialog-width: var(--dialog-width-lg, 640px);
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
.leaflet-zoom-anim .leaflet-zoom-animated {
  -webkit-transition: -webkit-transform 0.25s cubic-bezier(0, 0, 0.25, 1);
  -moz-transition: -moz-transform 0.25s cubic-bezier(0, 0, 0.25, 1);
  transition: transform 0.25s cubic-bezier(0, 0, 0.25, 1);
}
.leaflet-zoom-anim .leaflet-tile,
.leaflet-pan-anim .leaflet-tile {
  -webkit-transition: none;
  -moz-transition: none;
  transition: none;
}
.leaflet-tile-loaded {
  visibility: inherit;
}
.bcn-phome {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}
.bcn-phome__cover {
  position: relative;
  height: 132px;
  overflow: hidden;
  background: var(--color-surface-sunken);
}
.bcn-phome__hero {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.bcn-phome__edit {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  padding: var(--spacing-150) var(--spacing-250);
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  background: color-mix(in srgb, var(--color-surface) 92%, transparent);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-100);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s ease;
}
.bcn-phome__edit--cover {
  top: var(--spacing-300);
  right: var(--spacing-600);
}
.bcn-phome__body {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-500);
  padding: 0 var(--spacing-600) var(--spacing-500);
}
.bcn-phome__sealwrap {
  position: relative;
  flex-shrink: 0;
}
.bcn-phome__seal {
  display: block;
  flex-shrink: 0;
  width: 92px;
  height: 92px;
  margin-top: -46px;
  border-radius: var(--radius-full);
  background: var(--color-surface);
  border: 3px solid var(--color-surface);
  object-fit: contain;
  box-shadow: var(--shadow-100, 0 2px 12px 0 rgba(0, 0, 0, 0.08));
}
.bcn-phome__edit--logo {
  right: 0;
  bottom: 0;
  padding: var(--spacing-150);
  border-radius: var(--radius-full);
}
.bcn-phome__id {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  padding-top: var(--spacing-400);
  min-width: 0;
  flex: 1;
}
.bcn-phome__idtop {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
}
.bcn-phome__name {
  margin: 0;
  font-family: var(--font-decorative, var(--font-display, var(--font-sans)));
  font-weight: var(--font-weight-bold);
  font-size: var(--type-size-600);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--bcn-gray-1000, var(--color-text-primary));
}
.bcn-phome__eyebrow {
  margin: 0 0 var(--spacing-200);
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-tertiary);
}
.bcn-tl__head {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-400);
}
.bcn-tl {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-250);
}
.bcn-tl__row {
  display: grid;
  grid-template-columns: 5.5rem 1fr;
  align-items: center;
  gap: var(--spacing-300);
}
.bcn-tl__lane-label {
  font-size: 0.8125rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
}
.bcn-tl__track {
  position: relative;
  height: 30px;
}
.bcn-tl__row--axis .bcn-tl__track {
  height: 20px;
}
.bcn-tl__today {
  position: absolute;
  top: 0;
  bottom: -170px;
  width: 2px;
  background: var(--color-orange-400, #f9a134);
  z-index: 1;
  pointer-events: none;
}
.bcn-tl__today-flag {
  position: absolute;
  top: -2px;
  left: 4px;
  font-size: 0.75rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-orange-400, #f9a134);
}
.bcn-tl .bcn-tl__tick {
  position: absolute;
  top: 2px;
  transform: translate(-50%);
  font-size: 0.75rem;
  color: var(--color-text-muted);
  white-space: nowrap;
}
.bcn-tl__rule {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: var(--color-border);
}
.bcn-tl .bcn-tl__item {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: none;
  border: 0;
  cursor: pointer;
  border-radius: var(--radius-full);
}
.bcn-tl .bcn-tl__dot {
  display: block;
  width: 11px;
  height: 11px;
  border-radius: var(--radius-full);
  background: var(--color-border-strong);
  border: 2px solid var(--color-surface);
  box-shadow: 0 0 0 1px var(--color-border);
}
.bcn-tl [data-urgency="overdue"] .bcn-tl__dot {
  background: var(--color-danger);
  box-shadow: none;
}
.bcn-tl [data-urgency="due-soon"] .bcn-tl__dot {
  background: var(--color-warning);
  box-shadow: none;
}
.bcn-tl__row--bars {
  align-items: start;
}
.bcn-tl__track--bars {
  height: 22px;
}
.bcn-tl .bcn-tl__bar {
  position: absolute;
  height: 18px;
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  padding: 0 var(--spacing-150);
  background: color-mix(in srgb, var(--color-secondary) 16%, var(--color-surface));
  border: 1px solid color-mix(in srgb, var(--color-secondary) 40%, var(--color-surface));
  border-radius: var(--radius-100);
  overflow: hidden;
  cursor: pointer;
  text-align: left;
}
.bcn-tl .bcn-tl__bar-label {
  font-size: 0.75rem;
  font-weight: var(--font-weight-semibold);
  color: var(--bcn-teal-800, var(--color-secondary-hover));
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-tl .bcn-tl__bar-dates {
  margin-left: auto;
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.bcn-tl__row--more {
  margin-top: calc(var(--spacing-250) * -1);
}
.bcn-tl__showall {
  justify-self: start;
  padding: 0;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  background: none;
  border: 0;
  cursor: pointer;
}
.bcn-tl .bcn-tl__diamond {
  display: block;
  width: 11px;
  height: 11px;
  background: var(--color-info);
  transform: rotate(45deg);
}
.bcn-tl__empty {
  margin: 0;
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
}
.bcn-lrc {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.bcn-lrc__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-300);
  padding: var(--spacing-250) 0;
  text-decoration: none;
  color: inherit;
}
.bcn-lrc__label {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  min-width: 0;
}
.bcn-lrc__right {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-200);
  flex-shrink: 0;
}
.bcn-lrc li + li .bcn-lrc__row {
  border-top: 1px solid var(--color-border-light);
}
.bcn-lrc__meta {
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.bcn-map {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-map__inset {
  height: 180px;
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border);
  overflow: hidden;
  background: var(--color-surface-sunken);
}
.bcn-map__source {
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin: 0;
  font-size: 0.8125rem;
}
.bcn-map__source-label {
  color: var(--color-text-tertiary);
}
.bcn-map__source-value {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}
.bcn-map__full {
  height: min(70vh, 620px);
  width: 100%;
  border-radius: var(--radius-200);
  overflow: hidden;
}
.bcn-map__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-400);
  width: 100%;
  flex-wrap: wrap;
}
.bcn-map__legend {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
}
.bcn-map__key {
  width: 14px;
  height: 10px;
  border-radius: 2px;
  flex-shrink: 0;
}
.bcn-map__key--boundary {
  background: color-mix(in srgb, var(--color-secondary) 20%, transparent);
  border: 1px solid var(--color-primary);
}
.bcn-map__key--align {
  height: 0;
  border-top: 2px dashed var(--color-secondary);
  border-radius: 0;
}
.bcn-map__key + .bcn-map__key {
  margin-left: var(--spacing-300);
}
.bcn-pf__desc {
  margin: 0 0 var(--spacing-300);
  font-size: var(--type-size-150);
  line-height: var(--line-height-normal);
  color: var(--color-text-secondary);
}
.bcn-pf {
  margin: 0;
  display: flex;
  flex-direction: column;
}
.bcn-pf__fact {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--spacing-250) 0;
}
.bcn-pf__label {
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
}
.bcn-pf__value {
  margin: 0;
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-pf__fact + .bcn-pf__fact {
  border-top: 1px solid var(--color-border-light);
}
.bcn-pf__files {
  list-style: none;
  margin: 0;
  padding: var(--spacing-250) 0 0;
  border-top: 1px solid var(--color-border-light);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-pf__file {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-text-muted);
  min-width: 0;
}
.bcn-pf__file-name {
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bcn-mod__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--spacing-400);
}
.bcn-mod__card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}
.bcn-mod__portal {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-300);
}
.bcn-mod__head {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
}
.bcn-mod__glyph {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: var(--radius-200);
  background: var(--color-surface-sunken);
  color: var(--color-text-secondary);
}
.bcn-mod__name {
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-mod__rollup {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-300) var(--spacing-500);
  padding-bottom: var(--spacing-300);
  border-bottom: 1px solid var(--color-border-light);
  --stat-value-size: var(--type-size-400);
  --stat-label-size: var(--type-size-150);
  --stat-label-color: var(--color-text-tertiary);
}
.bcn-mod__actions {
  position: relative;
  z-index: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-mod__action {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-200);
  text-decoration: none;
  color: inherit;
}
.bcn-mod__dot {
  width: 9px;
  height: 9px;
  margin-top: 5px;
  border-radius: var(--radius-full);
  background: var(--color-border-strong);
  flex-shrink: 0;
}
[data-urgency="overdue"] .bcn-mod__dot {
  background: var(--color-danger);
}
.bcn-mod__action-body {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}
.bcn-mod__action-name {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
}
.bcn-cbadge {
  display: inline-block;
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-weight: var(--font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
}
.bcn-cbadge--sm {
  font-size: 0.75rem;
  padding: 1px var(--spacing-150);
}
.bcn-mod__action-name .bcn-cbadge {
  margin-right: var(--spacing-150);
}
.bcn-mod__action-meta {
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bcn-mod__more {
  position: relative;
  z-index: 1;
  font-size: 0.8125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
}
.bcn-mod__links {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-light);
}
.bcn-mod__link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  align-self: flex-start;
  font-size: 0.8125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
}
.bcn-mod__link .esa-icon {
  color: var(--color-text-muted);
}
.bcn-mod__open {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  margin-top: auto;
  padding-top: var(--spacing-200);
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
}
[data-urgency="due-soon"] .bcn-mod__dot {
  background: var(--color-warning);
}
.bcn-stc {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-stc__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--spacing-400);
  flex-wrap: wrap;
}
.bcn-stc__headings {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100);
  min-width: 0;
}
.bcn-stc__title {
  margin: 0;
  color: var(--color-text-primary);
}
.bcn-stc__all {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  white-space: nowrap;
}
.bcn-stc__list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-stc__card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  align-items: center;
  gap: var(--spacing-500);
  padding: var(--spacing-400) var(--spacing-500);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.15s ease;
}
.bcn-stc__portal {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-300);
}
.bcn-stc__main {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
  min-width: 0;
  padding-right: var(--spacing-500);
  border-right: 1px solid var(--color-border-light);
}
.bcn-stc__card-head {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-300);
}
.bcn-stc__glyph--scope {
  background: var(--color-surface-sunken) !important;
  color: var(--color-text-secondary) !important;
}
.bcn-stc__glyph {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: var(--radius-200);
  background: color-mix(in srgb, var(--color-primary) 10%, var(--color-surface));
  color: var(--color-primary);
}
.bcn-stc__ident {
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.bcn-stc__name {
  font-size: var(--type-size-250, 1.0625rem);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
}
.bcn-stc__type {
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
}
.bcn-stc__pulse {
  list-style: none;
  margin: 0;
  padding: 0 var(--spacing-600) 0 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-stc__pulse-row {
  display: grid;
  grid-template-columns: auto 6rem 1fr;
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
}
.bcn-stc__dot {
  width: 9px;
  height: 9px;
  border-radius: var(--radius-full);
  background: var(--_c);
  flex-shrink: 0;
}
.bcn-stc__pulse-area {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-stc__pulse-note {
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bcn-stc__star {
  position: absolute;
  top: var(--spacing-200);
  right: var(--spacing-200);
  z-index: 1;
}
.bcn-swc {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  padding: var(--spacing-500);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.bcn-swc__head {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
}
.bcn-swc__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: var(--radius-full);
  background: var(--bcn-teal-600, var(--color-secondary));
  color: var(--color-text-inverse);
}
.bcn-swc__title {
  font-family: var(--font-decorative, var(--font-sans));
  font-weight: var(--font-weight-bold);
  font-size: var(--type-size-300);
  color: var(--color-text-primary);
}
.bcn-swc__cta {
  margin-left: auto;
  flex-shrink: 0;
}
.bcn-swc__steps {
  list-style: none;
  margin: 0;
  padding: var(--spacing-400) 0 0;
  border-top: 1px solid var(--color-border-light);
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--spacing-400);
}
.bcn-swc__step {
  min-width: 0;
}
.bcn-swc__link {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
  min-width: 0;
  height: 100%;
  padding: var(--spacing-400);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s ease;
}
.bcn-swc__label-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-250);
  min-width: 0;
  min-height: 2.75rem;
}
.bcn-swc__n {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: var(--radius-full);
  background: var(--_step);
  color: var(--color-text-inverse);
  font-size: 0.8125rem;
  font-weight: var(--font-weight-semibold);
}
.bcn-swc__label {
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
}
.bcn-swc__stats {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
}
.bcn-swc__stat {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-200);
}
.bcn-swc__stat dt {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
  min-width: 0;
}
.bcn-swc__stat dd {
  margin: 0;
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}
.bcn-swc__attn {
  width: 7px;
  height: 7px;
  border-radius: var(--radius-full);
  background: var(--color-warning);
  flex-shrink: 0;
}
.bcn-pdp__addfoot {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.bcn-pdp {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-pdp[hidden] {
  display: none;
}
.bcn-pdp__form,
.bcn-pdp__cform {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-pdp__cform[hidden] {
  display: none;
}
.bcn-pdp__cfoot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-300);
  width: 100%;
}
.bcn-pdp__cfoot-right {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-300);
  margin-left: auto;
}
.bcn-tl__pop {
  position: fixed;
  z-index: 5;
  width: 19rem;
  max-width: calc(100% - 16px);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-250);
  padding: var(--spacing-350, var(--spacing-300)) var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  box-shadow: var(--shadow-300, 0 8px 24px -6px rgba(0, 0, 0, 0.18));
}
.bcn-tl__pop[hidden] {
  display: none;
}
.bcn-stc__star button[aria-pressed="true"] {
  color: var(--color-warning);
}
.bcn-stc__star button[aria-pressed="true"] svg {
  fill: currentColor;
}
:host {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100, 4px);
  --_height: var(--form-height-md, 40px);
  --_padding-x: var(--form-padding-x-md, 12px);
  --_font-size: var(--form-font-size-md, 14px);
  --_radius: var(--form-radius-md, 8px);
  --_border-width: var(--form-border-width, 1px);
  --_border-color: var(--form-border-color, #d4d4d4);
  --_icon-size: 18px;
}
:host([size="sm"]) {
  --_height: var(--form-height-sm, 32px);
  --_padding-x: var(--form-padding-x-sm, 8px);
  --_font-size: var(--form-font-size-sm, 12px);
  --_radius: var(--form-radius-sm, 6px);
  --_icon-size: 16px;
}
.group {
  display: inline-flex;
  width: fit-content;
  max-width: 100%;
  gap: 2px;
  padding: 2px;
  background: var(--color-surface-sunken, #efefef);
  border: var(--_border-width) solid var(--_border-color);
  border-radius: var(--_radius);
}
.option {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-150, 6px);
  height: calc(var(--_height) - 4px);
  padding: 0 var(--_padding-x);
  font-family: var(--font-sans, sans-serif);
  font-size: var(--_font-size);
  font-weight: var(--font-weight-medium, 450);
  color: var(--color-text-secondary, #525252);
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
  background: var(--form-bg, #fff);
  color: var(--color-primary, #43608a);
  font-weight: var(--font-weight-semibold, 550);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}
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
.esa-button--sm {
  --_btn-height: var(--form-height-sm, 32px);
  --_btn-padding-x: var(--form-padding-x-sm, 12px);
  --_btn-font-size: var(--form-font-size-sm, 12px);
  --_btn-radius: var(--form-radius-sm, 4px);
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
.esa-button--sm .esa-button__native {
  height: auto;
  padding-block: var(--spacing-150, 6px);
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
.esa-button--color-primary {
  --_accent-text: var(--color-primary-strong);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
:host {
  display: inline-block;
}
.esa-tooltip-anchor {
  position: relative;
  display: inline-flex;
}
```

## Tokens
| Token | Value | Tier |
|---|---|---|
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
| `--bcn-teal-600` | `#0e807b` | component |
| `--bcn-teal-800` | `#0a6562` | component |
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--card-header-border-color` | `#efefef` | component |
| `--card-header-color` | `#3d3d3d` | component |
| `--card-padding` | `1.5rem` | component |
| `--card-radius` | `.5rem` | component |
| `--color-accent` | `#f76b15` | semantic |
| `--color-border` | `#dcdcdc` | semantic |
| `--color-border-light` | `#efefef` | semantic |
| `--color-border-strong` | `#bdbdbd` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-danger` | `#e5484d` | semantic |
| `--color-info` | `#228be6` | semantic |
| `--color-primary` | `#005862` | semantic |
| `--color-primary-hover` | `#00474f` | semantic |
| `--color-primary-strong` | `#2a7e3b` | semantic |
| `--color-secondary` | `#00918b` | semantic |
| `--color-secondary-hover` | `#0a6562` | semantic |
| `--color-secondary-strong` | `#2a7e3b` | semantic |
| `--color-surface` | `#fcfcfc` | semantic |
| `--color-surface-elevated` | `#fcfcfc` | semantic |
| `--color-surface-sunken` | `#efefef` | semantic |
| `--color-text-inverse` | `#fcfcfc` | semantic |
| `--color-text-link` | `#005862` | semantic |
| `--color-text-muted` | `#7c7c7c` | semantic |
| `--color-text-primary` | `#3d3d3d` | semantic |
| `--color-text-secondary` | `#525252` | semantic |
| `--color-text-tertiary` | `#656565` | semantic |
| `--color-warning` | `#f59e0b` | semantic |
| `--dialog-bg` | `#fcfcfc` | component |
| `--dialog-border-color` | `#efefef` | component |
| `--dialog-radius` | `.75rem` | component |
| `--dialog-width` | `480px` | component |
| `--dialog-width-lg` | `640px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-display` | `"DM Sans", sans-serif` | primitive |
| `--font-mono` | `"Roboto Mono", ui-monospace, monospace` | primitive |
| `--font-sans` | `"DM Sans", sans-serif` | primitive |
| `--font-weight-bold` | `650` | primitive |
| `--font-weight-medium` | `500` | primitive |
| `--font-weight-regular` | `350` | primitive |
| `--font-weight-semibold` | `550` | primitive |
| `--form-bg` | `#fcfcfc` | component |
| `--form-border-color` | `#dcdcdc` | component |
| `--form-border-width` | `1px` | component |
| `--form-font-size-md` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | component |
| `--form-font-size-sm` | `clamp(.625rem, .56rem + .32vw, .75rem)` | component |
| `--form-height-md` | `36px` | component |
| `--form-height-sm` | `28px` | component |
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
| `--letter-spacing-tight` | `-.01em` | primitive |
| `--line-height-normal` | `1.6` | primitive |
| `--line-height-tight` | `1.3` | primitive |
| `--popover-bg` | `#fcfcfc` | component |
| `--popover-border-color` | `#dcdcdc` | component |
| `--popover-color` | `#3d3d3d` | component |
| `--popover-radius` | `.5rem` | component |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-400` | `.75rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--shadow-100` | `0 2px 12px 0 rgba(0, 0, 0, .04)` | primitive |
| `--shadow-300` | `0 6px 24px -6px rgba(0, 0, 0, .07)` | primitive |
| `--side-dialog-width` | `400px` | component |
| `--sidebar-width` | `280px` | semantic |
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
| `--transition-fast` | `.15s ease` | primitive |
| `--type-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--type-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--type-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--type-size-250` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | primitive |
| `--type-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--type-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--type-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |
| `--type-size-600` | `clamp(1.375rem, 1.2rem + .88vw, 1.875rem)` | primitive |
| `--type-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | primitive |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
