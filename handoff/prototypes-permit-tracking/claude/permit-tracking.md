# Permit Tracking

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-permit-tracking** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/permit-tracking/
- **Section element:** `<div>`
- **Components:** esa-badge (hub), esa-button (hub), esa-filter-clear-button (hub), esa-filter-container (hub), esa-icon (hub), esa-icon-button (hub)

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
        <span>AWS</span>
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
    <!-- Center: spacer (1fr) -->
    <div class="topbar__center"></div>
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
          <span class="project-switcher__name">Raul</span>
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
              <a href="/beacon-design/prototypes/permit-tracking" class="nav-sublink active">
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
                <a class="breadcrumb-item" href="#raul"> Raul </a
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
                <a class="breadcrumb-item" href="#tracking"> Tracking </a
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
                <span class="breadcrumb-item" aria-current="page"> Permit Tracking </span>
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
                Permit Tracking
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
            <esa-tab-layout id="pt-tabs" appearance="underline" size="md" variant="underline">
              <!-- ═══ TAB 1 — MAP (the hero: which segments are ready?) ═══ -->
              <section slot="panel-0" class="map-panel" aria-label="Permit status map">
                <!-- Print-only board header (filled by the Export button) -->
                <div class="print-header" aria-hidden="true">
                  <span class="print-header__title">Permit Tracking</span>
                  <span class="print-header__meta" id="print-meta"></span>
                </div>
                <!-- Map filters — scope the MAP and every figure below it (mileage
             strip + insight cards), not just the layers. -->
                <div class="map-filterbar">
                  <div class="map-filterbar__group">
                    <span class="map-filterbar__label">Paths</span>
                    <esa-button-toggle id="path-toggle" value="all" size="md"></esa-button-toggle>
                  </div>
                  <span class="map-filterbar__divider"></span>
                  <div class="map-filterbar__group">
                    <span class="map-filterbar__label">Status</span>
                    <esa-button-toggle id="status-toggle" value="all" size="md"></esa-button-toggle>
                  </div>
                  <span class="map-filterbar__export" id="board-export">
                    <span
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
                        <span class="esa-button__label"> Export board </span>
                      </button>
                    </span>
                  </span>
                </div>
                <div class="map-wrap">
                  <div
                    id="permit-map"
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
                              transform: translate3d(0px, 0px, 0px) scale(0.840896);
                            "
                          >
                            <img
                              alt=""
                              src="https://b.basemaps.cartocdn.com/light_all/10/173/364.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(423px, 221px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://a.basemaps.cartocdn.com/light_all/10/173/363.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(423px, -35px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://a.basemaps.cartocdn.com/light_all/10/172/364.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(167px, 221px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://c.basemaps.cartocdn.com/light_all/10/174/364.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(679px, 221px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://c.basemaps.cartocdn.com/light_all/10/173/365.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(423px, 477px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://d.basemaps.cartocdn.com/light_all/10/172/363.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(167px, -35px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://b.basemaps.cartocdn.com/light_all/10/174/363.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(679px, -35px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://b.basemaps.cartocdn.com/light_all/10/172/365.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(167px, 477px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://d.basemaps.cartocdn.com/light_all/10/174/365.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(679px, 477px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://d.basemaps.cartocdn.com/light_all/10/171/364.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(-89px, 221px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://d.basemaps.cartocdn.com/light_all/10/175/364.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(935px, 221px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://c.basemaps.cartocdn.com/light_all/10/171/363.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(-89px, -35px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://c.basemaps.cartocdn.com/light_all/10/175/363.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(935px, -35px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://a.basemaps.cartocdn.com/light_all/10/171/365.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(-89px, 477px, 0px);
                                opacity: 1;
                              "
                            /><img
                              alt=""
                              src="https://a.basemaps.cartocdn.com/light_all/10/175/365.png"
                              class="leaflet-tile leaflet-tile-loaded"
                              style="
                                width: 256px;
                                height: 256px;
                                transform: translate3d(935px, 477px, 0px);
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
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M531 163L548 166L596 187"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#91cf60"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M531 163L548 166L596 187"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M303 326L303 328L354 338L367 335L382 326L391 325L422 343L424 345L427 355L449 355L453 351L463 350L466 346L473 344L478 348L484 348L484 352L486 352L486 356L488 358L499 362"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#e3c14d"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M303 326L303 328L354 338L367 335L382 326L391 325L422 343L424 345L427 355L449 355L453 351L463 350L466 346L473 344L478 348L484 348L484 352L486 352L486 356L488 358L499 362"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M499 362L503 360L505 349L507 344L511 340L521 313L529 310L534 305L537 299L539 299L539 295L532 293L530 294L526 290L554 258L554 253L556 249L554 246L553 229"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#91cf60"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M499 362L503 360L505 349L507 344L511 340L521 313L529 310L534 305L537 299L539 299L539 295L532 293L530 294L526 290L554 258L554 253L556 249L554 246L553 229"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M499 362L503 360L505 349L507 344L511 340L521 313L529 310L534 305L537 299L539 299L539 295L532 293L530 294L526 290L554 258L554 253L556 249L554 246L554 228L556 228L560 224L560 222L567 220L567 213L570 211L579 213L584 217L585 213L583 211L590 203L597 190L596 187"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#fc8d59"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M499 362L503 360L505 349L507 344L511 340L521 313L529 310L534 305L537 299L539 299L539 295L532 293L530 294L526 290L554 258L554 253L556 249L554 246L554 228L556 228L560 224L560 222L567 220L567 213L570 211L579 213L584 217L585 213L583 211L590 203L597 190L596 187"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M521 199L519 201L523 204L523 208L525 211L527 209L530 209L531 214L535 218L542 218L546 221L546 223L551 222L553 224L553 229"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#1a9850"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M521 199L519 201L523 204L523 208L525 211L527 209L530 209L531 214L535 218L542 218L546 221L546 223L551 222L553 224L553 229"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M521 199L522 179L519 162L521 160"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#1a9850"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M521 199L522 179L519 162L521 160"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M313 422L466 420L474 426L479 427L487 422L492 423L496 427L500 427L501 429L503 429L504 432L507 433L517 443L534 452L549 451L552 448L609 448L609 353L616 353L631 341L635 343L643 339L652 319L646 308L652 307L653 295L660 286L659 285L662 282L665 273L678 262L679 258L682 259L684 254L684 252L675 250L675 236L664 234L667 228L667 222"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#fc8d59"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M313 422L466 420L474 426L479 427L487 422L492 423L496 427L500 427L501 429L503 429L504 432L507 433L517 443L534 452L549 451L552 448L609 448L609 353L616 353L631 341L635 343L643 339L652 319L646 308L652 307L653 295L660 286L659 285L662 282L665 273L678 262L679 258L682 259L684 254L684 252L675 250L675 236L664 234L667 228L667 222"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M533 141L559 142L561 133L565 128L636 129L636 136L641 136L642 139L648 140L649 155L647 157L647 164L648 167L650 167L650 173L653 177L653 181L655 183L659 198L662 199L662 206L659 206L659 213L665 215L665 219L667 222"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#91cf60"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M533 141L559 142L561 133L565 128L636 129L636 136L641 136L642 139L648 140L649 155L647 157L647 164L648 167L650 167L650 173L653 177L653 181L655 183L659 198L662 199L662 206L659 206L659 213L665 215L665 219L667 222"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M250 309L256 308L261 320L267 318"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#fc8d59"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M250 309L256 308L261 320L267 318"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M329 228L328 245L325 245L320 249L317 254L311 257L311 263L308 266L302 278L279 280L274 279L268 281L264 286L262 298L257 300L251 299L250 309"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#e3c14d"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M329 228L328 245L325 245L320 249L317 254L311 257L311 263L308 266L302 278L279 280L274 279L268 281L264 286L262 298L257 300L251 299L250 309"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M330 228L355 230L392 230L392 224L399 215L399 191L443 191L445 188L444 161L447 154L438 146L438 144L440 142L441 137L444 134L445 129L445 102"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M330 228L355 230L392 230L392 224L399 215L399 191L443 191L445 188L444 161L447 154L438 146L438 144L440 142L441 137L444 134L445 129L445 102"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M445 102L444 87"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M445 102L444 87"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M444 87L433 84L429 79L419 79L419 72L407 71L407 65L413 58L413 56L417 58L419 51L442 50L458 66L457 71L461 71L466 77"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M444 87L433 84L429 79L419 79L419 72L407 71L407 65L413 58L413 56L417 58L419 51L442 50L458 66L457 71L461 71L466 77"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M466 77L473 81L501 110L507 139L511 148L516 154L519 162"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#fc8d59"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M466 77L473 81L501 110L507 139L511 148L516 154L519 162"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M505 128L533 128L533 137"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#1a9850"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M505 128L533 128L533 137"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M444 190L444 218L451 219L457 213L457 199L462 192L462 189L467 184L473 184L477 186L479 178L491 190L494 189L495 195"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M444 190L444 218L451 219L457 213L457 199L462 192L462 189L467 184L473 184L477 186L479 178L491 190L494 189L495 195"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M495 195L515 199L515 201"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M495 195L515 199L515 201"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M515 201L519 200"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#d73027"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M515 201L519 200"
                            ></path>
                            <path
                              stroke="#ffffff"
                              stroke-opacity="1"
                              stroke-width="9"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M524 161L521 160L521 148L523 144L529 140"
                            ></path>
                            <path
                              class="leaflet-interactive"
                              stroke="#e3c14d"
                              stroke-opacity="0.95"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill="none"
                              d="M524 161L521 160L521 148L523 144L529 140"
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
                        style="transform: translate3d(37353.3px, 78422.9px, 0px) scale(430.539)"
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
                  <div class="map-legend" aria-label="Segment status legend">
                    <span class="map-legend__title">Segment status</span>
                    <span class="map-legend__row">
                      <span
                        class="map-legend__line"
                        style="background: var(--st-not-started)"
                      ></span>
                      Not Started </span
                    ><span class="map-legend__row">
                      <span
                        class="map-legend__line"
                        style="background: var(--st-in-preparation)"
                      ></span>
                      In Preparation </span
                    ><span class="map-legend__row">
                      <span class="map-legend__line" style="background: var(--st-submitted)"></span>
                      Submitted </span
                    ><span class="map-legend__row">
                      <span
                        class="map-legend__line"
                        style="background: var(--st-under-review)"
                      ></span>
                      Under Review </span
                    ><span class="map-legend__row">
                      <span class="map-legend__line" style="background: var(--st-cleared)"></span>
                      Cleared to Construct
                    </span>
                  </div>
                </div>
                <!-- Secondary figure: mileage by status (supporting, not the headline) -->
                <section class="burndown" aria-label="Mileage by permitting status">
                  <div class="burndown__head">
                    <span class="burndown__title">Mileage by status</span>
                    <span class="burndown__summary">
                      Cleared to Construct <strong id="bd-cleared">10.6 mi</strong>
                      <span id="bd-total">of 200.7 mi total · 5%</span>
                    </span>
                  </div>
                  <div class="burndown__bar" id="bd-bar" role="img" aria-label="5 percent cleared">
                    <div
                      title="Not Started: 42.9 mi"
                      style="height: 100%; flex: 0 0 21.3733%; background: var(--st-not-started)"
                    ></div>
                    <div
                      title="In Preparation: 78.1 mi"
                      style="height: 100%; flex: 0 0 38.9205%; background: var(--st-in-preparation)"
                    ></div>
                    <div
                      title="Submitted: 31.4 mi"
                      style="height: 100%; flex: 0 0 15.6409%; background: var(--st-submitted)"
                    ></div>
                    <div
                      title="Under Review: 37.7 mi"
                      style="height: 100%; flex: 0 0 18.7949%; background: var(--st-under-review)"
                    ></div>
                    <div
                      title="Cleared to Construct: 10.6 mi"
                      style="height: 100%; flex: 0 0 5.2704%; background: var(--st-cleared)"
                    ></div>
                  </div>
                  <ul class="burndown__legend">
                    <li class="burndown__legend-item" data-bd-item="not-started" data-empty="false">
                      <span
                        class="burndown__swatch"
                        style="background: var(--st-not-started)"
                      ></span>
                      <span class="burndown__legend-label">Not Started</span>
                      <span class="burndown__legend-mi" data-bd-mi="not-started">42.9 mi</span>
                      <span class="burndown__legend-pct" data-bd-pct="not-started">21%</span>
                    </li>
                    <li
                      class="burndown__legend-item"
                      data-bd-item="in-preparation"
                      data-empty="false"
                    >
                      <span
                        class="burndown__swatch"
                        style="background: var(--st-in-preparation)"
                      ></span>
                      <span class="burndown__legend-label">In Preparation</span>
                      <span class="burndown__legend-mi" data-bd-mi="in-preparation">78.1 mi</span>
                      <span class="burndown__legend-pct" data-bd-pct="in-preparation">39%</span>
                    </li>
                    <li class="burndown__legend-item" data-bd-item="submitted" data-empty="false">
                      <span class="burndown__swatch" style="background: var(--st-submitted)"></span>
                      <span class="burndown__legend-label">Submitted</span>
                      <span class="burndown__legend-mi" data-bd-mi="submitted">31.4 mi</span>
                      <span class="burndown__legend-pct" data-bd-pct="submitted">16%</span>
                    </li>
                    <li
                      class="burndown__legend-item"
                      data-bd-item="under-review"
                      data-empty="false"
                    >
                      <span
                        class="burndown__swatch"
                        style="background: var(--st-under-review)"
                      ></span>
                      <span class="burndown__legend-label">Under Review</span>
                      <span class="burndown__legend-mi" data-bd-mi="under-review">37.7 mi</span>
                      <span class="burndown__legend-pct" data-bd-pct="under-review">19%</span>
                    </li>
                    <li class="burndown__legend-item" data-bd-item="cleared" data-empty="false">
                      <span class="burndown__swatch" style="background: var(--st-cleared)"></span>
                      <span class="burndown__legend-label">Cleared to Construct</span>
                      <span class="burndown__legend-mi" data-bd-mi="cleared">10.6 mi</span>
                      <span class="burndown__legend-pct" data-bd-pct="cleared">5%</span>
                    </li>
                  </ul>
                </section>
                <!-- Clear-to-build timeline — directly below Mileage by status (the two
             headline figures read together). Segments ordered by projected clear
             date. Click a row → segment drawer. -->
                <section class="ctb" aria-label="Clear-to-build timeline">
                  <div class="ctb__head">
                    <h3 class="ctb__title">Clear-to-build timeline</h3>
                    <p class="ctb__sub">Segments by projected clear-to-build date</p>
                  </div>
                  <div class="ctb__axisrow" aria-hidden="true">
                    <span></span>
                    <div class="ctb__axis" id="ctb-axis">
                      <span class="ctb-tick" style="left: 0%">Jun ’26</span
                      ><span class="ctb-tick" style="left: 19.6078%">Jul</span
                      ><span class="ctb-tick" style="left: 39.8693%">Aug</span
                      ><span class="ctb-tick" style="left: 60.1307%">Sep</span
                      ><span class="ctb-tick" style="left: 79.7386%">Oct</span
                      ><span class="ctb-tick ctb-tick--today" style="left: 14.1885%">Today</span>
                    </div>
                    <span></span>
                  </div>
                  <ul class="ctb__rows" id="ctb-rows">
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 1E<span class="ctb-row__sub">Path 1</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 0.4629629629629629%;
                            width: 13.72549019607843%;
                            background: var(--st-cleared);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 0.4629629629629629%; background: var(--st-cleared)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Jun 2, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 1F<span class="ctb-row__sub">Path 1</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 0.4629629629629629%;
                            width: 13.72549019607843%;
                            background: var(--st-cleared);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 0.4629629629629629%; background: var(--st-cleared)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Jun 2, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 3G<span class="ctb-row__sub">Path 3</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 0.4629629629629629%;
                            width: 13.72549019607843%;
                            background: var(--st-cleared);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 0.4629629629629629%; background: var(--st-cleared)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Jun 2, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 3F<span class="ctb-row__sub">Path 3</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 17.647058823529413%;
                            background: var(--st-in-preparation);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 31.835511982570807%; background: var(--st-in-preparation)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Jul 20, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 1B<span class="ctb-row__sub">Path 1</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 37.90849673202614%;
                            background: var(--st-under-review);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 52.09694989106753%; background: var(--st-under-review)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Aug 20, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Easements Reach<span class="ctb-row__sub">Path 1</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 44.44444444444444%;
                            background: var(--st-under-review);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 58.63289760348584%; background: var(--st-under-review)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Aug 30, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 2B<span class="ctb-row__sub">Path 2</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 44.44444444444444%;
                            background: var(--st-under-review);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 58.63289760348584%; background: var(--st-under-review)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Aug 30, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 4A<span class="ctb-row__sub">Path 4</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 48.36601307189543%;
                            background: var(--st-submitted);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 62.554466230936825%; background: var(--st-submitted)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Sep 5, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 1A<span class="ctb-row__sub">Path 1</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 51.633986928104584%;
                            background: var(--st-submitted);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 65.82244008714598%; background: var(--st-submitted)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Sep 10, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 3B<span class="ctb-row__sub">Path 3</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 51.633986928104584%;
                            background: var(--st-submitted);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 65.82244008714598%; background: var(--st-submitted)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Sep 10, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 1C<span class="ctb-row__sub">Path 1</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 61.43790849673203%;
                            background: var(--st-in-preparation);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 75.62636165577342%; background: var(--st-in-preparation)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Sep 25, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 2A<span class="ctb-row__sub">Path 2</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 61.43790849673203%;
                            background: var(--st-in-preparation);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 75.62636165577342%; background: var(--st-in-preparation)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Sep 25, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 3A<span class="ctb-row__sub">Path 3</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 61.43790849673203%;
                            background: var(--st-in-preparation);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 75.62636165577342%; background: var(--st-in-preparation)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Sep 25, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 3H<span class="ctb-row__sub">Path 3</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 74.50980392156862%;
                            background: var(--st-not-started);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 88.69825708061002%; background: var(--st-not-started)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Oct 15, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 3I<span class="ctb-row__sub">Path 3</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 74.50980392156862%;
                            background: var(--st-not-started);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 88.69825708061002%; background: var(--st-not-started)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Oct 15, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 3J<span class="ctb-row__sub">Path 3</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 74.50980392156862%;
                            background: var(--st-not-started);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 88.69825708061002%; background: var(--st-not-started)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Oct 15, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 3C<span class="ctb-row__sub">Path 3</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 85.62091503267973%;
                            background: var(--st-not-started);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 99.80936819172113%; background: var(--st-not-started)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Nov 1, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 3D<span class="ctb-row__sub">Path 3</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 85.62091503267973%;
                            background: var(--st-not-started);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 99.80936819172113%; background: var(--st-not-started)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Nov 1, 2026</span>
                    </li>
                    <li class="ctb-row">
                      <span class="ctb-row__name"
                        >Segment 3E<span class="ctb-row__sub">Path 3</span></span
                      >
                      <span class="ctb-row__track"
                        ><span
                          class="ctb-row__bar"
                          style="
                            left: 14.188453159041394%;
                            width: 85.62091503267973%;
                            background: var(--st-not-started);
                          "
                        ></span>
                        <span
                          class="ctb-row__dot"
                          style="left: 99.80936819172113%; background: var(--st-not-started)"
                        ></span
                      ></span>
                      <span class="ctb-row__meta">Nov 1, 2026</span>
                    </li>
                  </ul>
                </section>
                <!-- Insight cards — two only, side by side: the status census and the
             actionable blockers list. JS-rendered from the same store as the
             map, so they re-derive after every permit edit. -->
                <div class="insights">
                  <section class="ins-card" aria-label="Permits by status">
                    <h3 class="ins-card__title">Permits by status</h3>
                    <ul class="ins-list" id="ins-status">
                      <li class="ins-row">
                        <span class="ins-dot" style="background: var(--st-not-started)"></span>
                        <span class="ins-row__label">Not Started</span>
                        <span class="ins-bar"
                          ><span
                            style="
                              display: block;
                              height: 100%;
                              border-radius: inherit;
                              width: 14.285714285714285%;
                              background: var(--st-not-started);
                            "
                          ></span
                        ></span>
                        <span class="ins-row__val">2</span>
                      </li>
                      <li class="ins-row">
                        <span class="ins-dot" style="background: var(--st-in-preparation)"></span>
                        <span class="ins-row__label">In Preparation</span>
                        <span class="ins-bar"
                          ><span
                            style="
                              display: block;
                              height: 100%;
                              border-radius: inherit;
                              width: 21.428571428571427%;
                              background: var(--st-in-preparation);
                            "
                          ></span
                        ></span>
                        <span class="ins-row__val">3</span>
                      </li>
                      <li class="ins-row">
                        <span class="ins-dot" style="background: var(--st-submitted)"></span>
                        <span class="ins-row__label">Submitted</span>
                        <span class="ins-bar"
                          ><span
                            style="
                              display: block;
                              height: 100%;
                              border-radius: inherit;
                              width: 14.285714285714285%;
                              background: var(--st-submitted);
                            "
                          ></span
                        ></span>
                        <span class="ins-row__val">2</span>
                      </li>
                      <li class="ins-row">
                        <span class="ins-dot" style="background: var(--st-under-review)"></span>
                        <span class="ins-row__label">Under Review</span>
                        <span class="ins-bar"
                          ><span
                            style="
                              display: block;
                              height: 100%;
                              border-radius: inherit;
                              width: 21.428571428571427%;
                              background: var(--st-under-review);
                            "
                          ></span
                        ></span>
                        <span class="ins-row__val">3</span>
                      </li>
                      <li class="ins-row">
                        <span class="ins-dot" style="background: var(--st-cleared)"></span>
                        <span class="ins-row__label">Issued</span>
                        <span class="ins-bar"
                          ><span
                            style="
                              display: block;
                              height: 100%;
                              border-radius: inherit;
                              width: 28.57142857142857%;
                              background: var(--st-cleared);
                            "
                          ></span
                        ></span>
                        <span class="ins-row__val">4</span>
                      </li>
                      <li class="ins-row">
                        <span class="ins-dot" style="background: var(--st-not-required)"></span>
                        <span class="ins-row__label">Not Required</span>
                        <span class="ins-bar"
                          ><span
                            style="
                              display: block;
                              height: 100%;
                              border-radius: inherit;
                              width: 0%;
                              background: var(--st-not-required);
                            "
                          ></span
                        ></span>
                        <span class="ins-row__val">0</span>
                      </li>
                    </ul>
                  </section>
                  <section class="ins-card" aria-label="Blocking the most mileage">
                    <h3 class="ins-card__title">Blocking the most mileage</h3>
                    <p class="ins-card__sub">
                      Pending permits, ranked by the route-miles they gate
                    </p>
                    <ul class="ins-list" id="ins-blockers">
                      <li
                        class="ins-row"
                        data-ins-permit="uma-county-row"
                        tabindex="0"
                        role="button"
                      >
                        <span class="ins-dot" style="background: var(--st-submitted)"></span>
                        <span class="ins-row__label"
                          >County Right-of-Way Permit<span class="ins-row__sub"
                            >Umatilla County Public Works · 5 segments</span
                          ></span
                        >
                        <span class="ins-row__val"
                          >98.8 mi<span class="ins-row__sub">gated</span></span
                        >
                      </li>
                      <li class="ins-row" data-ins-permit="odot-permit" tabindex="0" role="button">
                        <span class="ins-dot" style="background: var(--st-under-review)"></span>
                        <span class="ins-row__label"
                          >Right-of-Way &amp; Utility Permit<span class="ins-row__sub"
                            >Oregon DOT · 3 segments</span
                          ></span
                        >
                        <span class="ins-row__val"
                          >79.6 mi<span class="ins-row__sub">gated</span></span
                        >
                      </li>
                      <li class="ins-row" data-ins-permit="or-dsl" tabindex="0" role="button">
                        <span class="ins-dot" style="background: var(--st-in-preparation)"></span>
                        <span class="ins-row__label"
                          >Removal–Fill Permit<span class="ins-row__sub"
                            >Oregon Dept. of State Lands · 3 segments</span
                          ></span
                        >
                        <span class="ins-row__val"
                          >69.7 mi<span class="ins-row__sub">gated</span></span
                        >
                      </li>
                      <li class="ins-row" data-ins-permit="benton-row" tabindex="0" role="button">
                        <span class="ins-dot" style="background: var(--st-not-started)"></span>
                        <span class="ins-row__label"
                          >County Right-of-Way Permit<span class="ins-row__sub"
                            >Benton County Public Works · 3 segments</span
                          ></span
                        >
                        <span class="ins-row__val"
                          >31.1 mi<span class="ins-row__sub">gated</span></span
                        >
                      </li>
                      <li
                        class="ins-row"
                        data-ins-permit="ecology-stormwater"
                        tabindex="0"
                        role="button"
                      >
                        <span class="ins-dot" style="background: var(--st-in-preparation)"></span>
                        <span class="ins-row__label"
                          >Construction Stormwater (NPDES)<span class="ins-row__sub"
                            >WA Dept. of Ecology · 2 segments</span
                          ></span
                        >
                        <span class="ins-row__val"
                          >29.9 mi<span class="ins-row__sub">gated</span></span
                        >
                      </li>
                    </ul>
                  </section>
                </div>
              </section>
              <!-- ═══ TAB 2 — DATA (requirement-tracker filter bar + beacon AG Grids) ═══ -->
              <section slot="panel-1" class="data-panel" aria-label="Permit tracking data">
                <div class="bcn-filterbar">
                  <div class="bcn-filterbar__top">
                    <div class="bcn-filterbar__group">
                      <span class="bcn-filterbar__label">View</span>
                      <esa-button-toggle
                        id="pivot-toggle"
                        value="permits"
                        size="md"
                      ></esa-button-toggle>
                    </div>
                    <div class="bcn-filterbar__search">
                      <esa-text-field
                        id="pt-search"
                        placeholder="Search permits…"
                        size="md"
                      ></esa-text-field>
                      <span id="pt-search-clear" hidden=""
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
                      <span id="flt-level-wrap"
                        ><esa-filter-dropdown
                          id="flt-level"
                          label="Level"
                          multiple=""
                          size="sm"
                        ></esa-filter-dropdown
                      ></span>
                    </div>
                    <span id="pt-clear-filters" class="bcn-filterbar__clear"
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
                <!-- Bulk status bar — appears when permits-grid rows are checkbox-selected -->
                <div class="bulk-bar" id="bulk-bar" hidden="">
                  <span class="bulk-bar__count" id="bulk-count">0 selected</span>
                  <esa-select id="bulk-status" placeholder="Set status…" size="md"></esa-select>
                  <span id="bulk-apply"
                    ><span
                      class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--sm"
                    >
                      <button class="esa-button__native" type="button">
                        <span class="esa-button__label"> Apply status </span>
                      </button>
                    </span>
                  </span>
                  <span id="bulk-clear"
                    ><span
                      class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
                    >
                      <button class="esa-button__native" type="button">
                        <span class="esa-button__label"> Clear selection </span>
                      </button>
                    </span>
                  </span>
                </div>
                <div class="bcn-view-pane" id="pane-permits">
                  <div id="grid-permits" class="pt-grid"></div>
                </div>
                <div class="bcn-view-pane" id="pane-segments" hidden="">
                  <div id="grid-segments" class="pt-grid"></div>
                </div>
                <div class="table-footer">
                  <span id="pt-download"
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
                    Total Records: <span id="pt-total">0</span>
                    <span id="pt-filtered" class="filtered-rows-count" hidden=""></span>
                  </div>
                </div>
              </section>
            </esa-tab-layout>
          </section>
        </div>
      </div>
      <esa-side-dialog
        id="segment-dialog"
        size="md"
        style="--_width: 640px; --z-modal: 1300; --z-modal-backdrop: 1250"
        position="right"
      >
        <div slot="header" class="sd__header">
          <h2 class="sd__title" id="sd-title">Segment</h2>
          <span id="sd-chip"
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
        <div class="sd">
          <dl class="sd__meta">
            <div class="sd__kv">
              <dt>Path</dt>
              <dd id="sd-path">—</dd>
            </div>
            <div class="sd__kv">
              <dt>Build phase</dt>
              <dd id="sd-phase">—</dd>
            </div>
            <div class="sd__kv">
              <dt>Projected clear-to-build</dt>
              <dd id="sd-clear">—</dd>
            </div>
            <div class="sd__kv">
              <dt>Length</dt>
              <dd id="sd-length">—</dd>
            </div>
            <div class="sd__kv">
              <dt>Jurisdiction</dt>
              <dd id="sd-jur">—</dd>
            </div>
            <div class="sd__kv">
              <dt>Build contractor</dt>
              <dd id="sd-build">—</dd>
            </div>
          </dl>
          <h3 class="sd__section">
            Covering permits
            <span id="sd-count"
              ><span class="esa-badge esa-badge--primary esa-badge--sm">
                <span class="esa-badge__text">0</span>
              </span>
            </span>
          </h3>
          <ul class="sd__permits" id="sd-permits"></ul>
        </div>
      </esa-side-dialog>
      <template id="pt-permit-rows">
        <ul data-astro-cid-zk2hxksb="">
          <li class="sd-permit" data-permit-row="usace-nwp" data-astro-cid-zk2hxksb="">
            <button
              type="button"
              class="sd-permit__btn"
              data-edit-permit="usace-nwp"
              data-astro-cid-zk2hxksb=""
            >
              <span class="sd-permit__main" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__name" data-astro-cid-zk2hxksb=""
                  >Nationwide Permit (Section 404)</span
                >
                <span class="sd-permit__agency" data-astro-cid-zk2hxksb=""
                  >US Army Corps of Engineers · Federal</span
                >
              </span>
              <span class="sd-permit__meta" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__chips" data-astro-cid-zk2hxksb="">
                  <esa-tooltip
                    text="Least-advanced covering permit — its status sets this segment's status"
                    position="top"
                    data-astro-cid-zk2hxksb="true"
                  >
                    <span
                      class="sd-permit__gating"
                      data-gating-tag=""
                      hidden=""
                      data-astro-cid-zk2hxksb=""
                      >Gating</span
                    >
                  </esa-tooltip>
                  <span data-permit-chip="usace-nwp" data-astro-cid-zk2hxksb="">
                    <span
                      class="bcn-status-chip"
                      data-status="issued"
                      style="--_chip: var(--st-cleared, #1a9850)"
                      data-astro-cid-dbmptlvz=""
                    >
                      <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
                      <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz="">Issued</span>
                    </span>
                  </span>
                </span>
                <span
                  class="sd-permit__date"
                  data-permit-date="usace-nwp"
                  data-astro-cid-zk2hxksb=""
                  >May 28, 2026</span
                >
              </span>
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </li>
          <li class="sd-permit" data-permit-row="usfws-sf299" data-astro-cid-zk2hxksb="">
            <button
              type="button"
              class="sd-permit__btn"
              data-edit-permit="usfws-sf299"
              data-astro-cid-zk2hxksb=""
            >
              <span class="sd-permit__main" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__name" data-astro-cid-zk2hxksb=""
                  >Refuge Right-of-Way (SF-299)</span
                >
                <span class="sd-permit__agency" data-astro-cid-zk2hxksb=""
                  >US Fish &amp; Wildlife Service · Federal</span
                >
              </span>
              <span class="sd-permit__meta" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__chips" data-astro-cid-zk2hxksb="">
                  <esa-tooltip
                    text="Least-advanced covering permit — its status sets this segment's status"
                    position="top"
                    data-astro-cid-zk2hxksb="true"
                  >
                    <span
                      class="sd-permit__gating"
                      data-gating-tag=""
                      hidden=""
                      data-astro-cid-zk2hxksb=""
                      >Gating</span
                    >
                  </esa-tooltip>
                  <span data-permit-chip="usfws-sf299" data-astro-cid-zk2hxksb="">
                    <span
                      class="bcn-status-chip"
                      data-status="issued"
                      style="--_chip: var(--st-cleared, #1a9850)"
                      data-astro-cid-dbmptlvz=""
                    >
                      <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
                      <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz="">Issued</span>
                    </span>
                  </span>
                </span>
                <span
                  class="sd-permit__date"
                  data-permit-date="usfws-sf299"
                  data-astro-cid-zk2hxksb=""
                  >May 30, 2026</span
                >
              </span>
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </li>
          <li class="sd-permit" data-permit-row="wsdot-uap" data-astro-cid-zk2hxksb="">
            <button
              type="button"
              class="sd-permit__btn"
              data-edit-permit="wsdot-uap"
              data-astro-cid-zk2hxksb=""
            >
              <span class="sd-permit__main" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__name" data-astro-cid-zk2hxksb=""
                  >Utility Accommodation Permit</span
                >
                <span class="sd-permit__agency" data-astro-cid-zk2hxksb="">WSDOT · State</span>
              </span>
              <span class="sd-permit__meta" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__chips" data-astro-cid-zk2hxksb="">
                  <esa-tooltip
                    text="Least-advanced covering permit — its status sets this segment's status"
                    position="top"
                    data-astro-cid-zk2hxksb="true"
                  >
                    <span
                      class="sd-permit__gating"
                      data-gating-tag=""
                      hidden=""
                      data-astro-cid-zk2hxksb=""
                      >Gating</span
                    >
                  </esa-tooltip>
                  <span data-permit-chip="wsdot-uap" data-astro-cid-zk2hxksb="">
                    <span
                      class="bcn-status-chip"
                      data-status="in-preparation"
                      style="--_chip: var(--st-in-preparation, #fc8d59)"
                      data-astro-cid-dbmptlvz=""
                    >
                      <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
                      <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz=""
                        >In Preparation</span
                      >
                    </span>
                  </span>
                </span>
                <span
                  class="sd-permit__date"
                  data-permit-date="wsdot-uap"
                  data-astro-cid-zk2hxksb=""
                  >Jul 20, 2026</span
                >
              </span>
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </li>
          <li class="sd-permit" data-permit-row="ecology-401" data-astro-cid-zk2hxksb="">
            <button
              type="button"
              class="sd-permit__btn"
              data-edit-permit="ecology-401"
              data-astro-cid-zk2hxksb=""
            >
              <span class="sd-permit__main" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__name" data-astro-cid-zk2hxksb=""
                  >Water Quality Certification (401)</span
                >
                <span class="sd-permit__agency" data-astro-cid-zk2hxksb=""
                  >WA Dept. of Ecology · State</span
                >
              </span>
              <span class="sd-permit__meta" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__chips" data-astro-cid-zk2hxksb="">
                  <esa-tooltip
                    text="Least-advanced covering permit — its status sets this segment's status"
                    position="top"
                    data-astro-cid-zk2hxksb="true"
                  >
                    <span
                      class="sd-permit__gating"
                      data-gating-tag=""
                      hidden=""
                      data-astro-cid-zk2hxksb=""
                      >Gating</span
                    >
                  </esa-tooltip>
                  <span data-permit-chip="ecology-401" data-astro-cid-zk2hxksb="">
                    <span
                      class="bcn-status-chip"
                      data-status="under-review"
                      style="--_chip: var(--st-under-review, #91cf60)"
                      data-astro-cid-dbmptlvz=""
                    >
                      <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
                      <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz=""
                        >Under Review</span
                      >
                    </span>
                  </span>
                </span>
                <span
                  class="sd-permit__date"
                  data-permit-date="ecology-401"
                  data-astro-cid-zk2hxksb=""
                  >Aug 30, 2026</span
                >
              </span>
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </li>
          <li class="sd-permit" data-permit-row="ecology-stormwater" data-astro-cid-zk2hxksb="">
            <button
              type="button"
              class="sd-permit__btn"
              data-edit-permit="ecology-stormwater"
              data-astro-cid-zk2hxksb=""
            >
              <span class="sd-permit__main" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__name" data-astro-cid-zk2hxksb=""
                  >Construction Stormwater (NPDES)</span
                >
                <span class="sd-permit__agency" data-astro-cid-zk2hxksb=""
                  >WA Dept. of Ecology · State</span
                >
              </span>
              <span class="sd-permit__meta" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__chips" data-astro-cid-zk2hxksb="">
                  <esa-tooltip
                    text="Least-advanced covering permit — its status sets this segment's status"
                    position="top"
                    data-astro-cid-zk2hxksb="true"
                  >
                    <span
                      class="sd-permit__gating"
                      data-gating-tag=""
                      hidden=""
                      data-astro-cid-zk2hxksb=""
                      >Gating</span
                    >
                  </esa-tooltip>
                  <span data-permit-chip="ecology-stormwater" data-astro-cid-zk2hxksb="">
                    <span
                      class="bcn-status-chip"
                      data-status="in-preparation"
                      style="--_chip: var(--st-in-preparation, #fc8d59)"
                      data-astro-cid-dbmptlvz=""
                    >
                      <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
                      <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz=""
                        >In Preparation</span
                      >
                    </span>
                  </span>
                </span>
                <span
                  class="sd-permit__date"
                  data-permit-date="ecology-stormwater"
                  data-astro-cid-zk2hxksb=""
                  >Jul 15, 2026</span
                >
              </span>
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </li>
          <li class="sd-permit" data-permit-row="wdfw-hpa" data-astro-cid-zk2hxksb="">
            <button
              type="button"
              class="sd-permit__btn"
              data-edit-permit="wdfw-hpa"
              data-astro-cid-zk2hxksb=""
            >
              <span class="sd-permit__main" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__name" data-astro-cid-zk2hxksb=""
                  >Hydraulic Project Approval (HPA)</span
                >
                <span class="sd-permit__agency" data-astro-cid-zk2hxksb=""
                  >WA Dept. of Fish &amp; Wildlife · State</span
                >
              </span>
              <span class="sd-permit__meta" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__chips" data-astro-cid-zk2hxksb="">
                  <esa-tooltip
                    text="Least-advanced covering permit — its status sets this segment's status"
                    position="top"
                    data-astro-cid-zk2hxksb="true"
                  >
                    <span
                      class="sd-permit__gating"
                      data-gating-tag=""
                      hidden=""
                      data-astro-cid-zk2hxksb=""
                      >Gating</span
                    >
                  </esa-tooltip>
                  <span data-permit-chip="wdfw-hpa" data-astro-cid-zk2hxksb="">
                    <span
                      class="bcn-status-chip"
                      data-status="under-review"
                      style="--_chip: var(--st-under-review, #91cf60)"
                      data-astro-cid-dbmptlvz=""
                    >
                      <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
                      <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz=""
                        >Under Review</span
                      >
                    </span>
                  </span>
                </span>
                <span class="sd-permit__date" data-permit-date="wdfw-hpa" data-astro-cid-zk2hxksb=""
                  >Aug 10, 2026</span
                >
              </span>
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </li>
          <li class="sd-permit" data-permit-row="wa-dnr" data-astro-cid-zk2hxksb="">
            <button
              type="button"
              class="sd-permit__btn"
              data-edit-permit="wa-dnr"
              data-astro-cid-zk2hxksb=""
            >
              <span class="sd-permit__main" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__name" data-astro-cid-zk2hxksb=""
                  >Aquatic Lands Use Authorization</span
                >
                <span class="sd-permit__agency" data-astro-cid-zk2hxksb=""
                  >WA Dept. of Natural Resources · State</span
                >
              </span>
              <span class="sd-permit__meta" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__chips" data-astro-cid-zk2hxksb="">
                  <esa-tooltip
                    text="Least-advanced covering permit — its status sets this segment's status"
                    position="top"
                    data-astro-cid-zk2hxksb="true"
                  >
                    <span
                      class="sd-permit__gating"
                      data-gating-tag=""
                      hidden=""
                      data-astro-cid-zk2hxksb=""
                      >Gating</span
                    >
                  </esa-tooltip>
                  <span data-permit-chip="wa-dnr" data-astro-cid-zk2hxksb="">
                    <span
                      class="bcn-status-chip"
                      data-status="issued"
                      style="--_chip: var(--st-cleared, #1a9850)"
                      data-astro-cid-dbmptlvz=""
                    >
                      <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
                      <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz="">Issued</span>
                    </span>
                  </span>
                </span>
                <span class="sd-permit__date" data-permit-date="wa-dnr" data-astro-cid-zk2hxksb=""
                  >Jun 1, 2026</span
                >
              </span>
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </li>
          <li class="sd-permit" data-permit-row="sepa-walla-walla" data-astro-cid-zk2hxksb="">
            <button
              type="button"
              class="sd-permit__btn"
              data-edit-permit="sepa-walla-walla"
              data-astro-cid-zk2hxksb=""
            >
              <span class="sd-permit__main" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__name" data-astro-cid-zk2hxksb=""
                  >SEPA Environmental Review</span
                >
                <span class="sd-permit__agency" data-astro-cid-zk2hxksb=""
                  >Walla Walla County (Lead Agency) · Local</span
                >
              </span>
              <span class="sd-permit__meta" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__chips" data-astro-cid-zk2hxksb="">
                  <esa-tooltip
                    text="Least-advanced covering permit — its status sets this segment's status"
                    position="top"
                    data-astro-cid-zk2hxksb="true"
                  >
                    <span
                      class="sd-permit__gating"
                      data-gating-tag=""
                      hidden=""
                      data-astro-cid-zk2hxksb=""
                      >Gating</span
                    >
                  </esa-tooltip>
                  <span data-permit-chip="sepa-walla-walla" data-astro-cid-zk2hxksb="">
                    <span
                      class="bcn-status-chip"
                      data-status="issued"
                      style="--_chip: var(--st-cleared, #1a9850)"
                      data-astro-cid-dbmptlvz=""
                    >
                      <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
                      <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz="">Issued</span>
                    </span>
                  </span>
                </span>
                <span
                  class="sd-permit__date"
                  data-permit-date="sepa-walla-walla"
                  data-astro-cid-zk2hxksb=""
                  >Apr 22, 2026</span
                >
              </span>
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </li>
          <li class="sd-permit" data-permit-row="ww-county-row" data-astro-cid-zk2hxksb="">
            <button
              type="button"
              class="sd-permit__btn"
              data-edit-permit="ww-county-row"
              data-astro-cid-zk2hxksb=""
            >
              <span class="sd-permit__main" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__name" data-astro-cid-zk2hxksb=""
                  >County Right-of-Way Permit</span
                >
                <span class="sd-permit__agency" data-astro-cid-zk2hxksb=""
                  >Walla Walla County Public Works · Local</span
                >
              </span>
              <span class="sd-permit__meta" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__chips" data-astro-cid-zk2hxksb="">
                  <esa-tooltip
                    text="Least-advanced covering permit — its status sets this segment's status"
                    position="top"
                    data-astro-cid-zk2hxksb="true"
                  >
                    <span
                      class="sd-permit__gating"
                      data-gating-tag=""
                      hidden=""
                      data-astro-cid-zk2hxksb=""
                      >Gating</span
                    >
                  </esa-tooltip>
                  <span data-permit-chip="ww-county-row" data-astro-cid-zk2hxksb="">
                    <span
                      class="bcn-status-chip"
                      data-status="issued"
                      style="--_chip: var(--st-cleared, #1a9850)"
                      data-astro-cid-dbmptlvz=""
                    >
                      <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
                      <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz="">Issued</span>
                    </span>
                  </span>
                </span>
                <span
                  class="sd-permit__date"
                  data-permit-date="ww-county-row"
                  data-astro-cid-zk2hxksb=""
                  >Jun 2, 2026</span
                >
              </span>
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </li>
          <li class="sd-permit" data-permit-row="franchise" data-astro-cid-zk2hxksb="">
            <button
              type="button"
              class="sd-permit__btn"
              data-edit-permit="franchise"
              data-astro-cid-zk2hxksb=""
            >
              <span class="sd-permit__main" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__name" data-astro-cid-zk2hxksb="">Franchise Agreement</span>
                <span class="sd-permit__agency" data-astro-cid-zk2hxksb=""
                  >Walla Walla County · Local</span
                >
              </span>
              <span class="sd-permit__meta" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__chips" data-astro-cid-zk2hxksb="">
                  <esa-tooltip
                    text="Least-advanced covering permit — its status sets this segment's status"
                    position="top"
                    data-astro-cid-zk2hxksb="true"
                  >
                    <span
                      class="sd-permit__gating"
                      data-gating-tag=""
                      hidden=""
                      data-astro-cid-zk2hxksb=""
                      >Gating</span
                    >
                  </esa-tooltip>
                  <span data-permit-chip="franchise" data-astro-cid-zk2hxksb="">
                    <span
                      class="bcn-status-chip"
                      data-status="not-started"
                      style="--_chip: var(--st-not-started, #d73027)"
                      data-astro-cid-dbmptlvz=""
                    >
                      <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
                      <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz=""
                        >Not Started</span
                      >
                    </span>
                  </span>
                </span>
                <span
                  class="sd-permit__date"
                  data-permit-date="franchise"
                  data-astro-cid-zk2hxksb=""
                  >Oct 15, 2026</span
                >
              </span>
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </li>
          <li class="sd-permit" data-permit-row="shoreline-ssd" data-astro-cid-zk2hxksb="">
            <button
              type="button"
              class="sd-permit__btn"
              data-edit-permit="shoreline-ssd"
              data-astro-cid-zk2hxksb=""
            >
              <span class="sd-permit__main" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__name" data-astro-cid-zk2hxksb=""
                  >Shoreline Substantial Development / CUP</span
                >
                <span class="sd-permit__agency" data-astro-cid-zk2hxksb=""
                  >Walla Walla County · Local</span
                >
              </span>
              <span class="sd-permit__meta" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__chips" data-astro-cid-zk2hxksb="">
                  <esa-tooltip
                    text="Least-advanced covering permit — its status sets this segment's status"
                    position="top"
                    data-astro-cid-zk2hxksb="true"
                  >
                    <span
                      class="sd-permit__gating"
                      data-gating-tag=""
                      hidden=""
                      data-astro-cid-zk2hxksb=""
                      >Gating</span
                    >
                  </esa-tooltip>
                  <span data-permit-chip="shoreline-ssd" data-astro-cid-zk2hxksb="">
                    <span
                      class="bcn-status-chip"
                      data-status="submitted"
                      style="--_chip: var(--st-submitted, #e3c14d)"
                      data-astro-cid-dbmptlvz=""
                    >
                      <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
                      <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz=""
                        >Submitted</span
                      >
                    </span>
                  </span>
                </span>
                <span
                  class="sd-permit__date"
                  data-permit-date="shoreline-ssd"
                  data-astro-cid-zk2hxksb=""
                  >Sep 5, 2026</span
                >
              </span>
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </li>
          <li class="sd-permit" data-permit-row="odot-permit" data-astro-cid-zk2hxksb="">
            <button
              type="button"
              class="sd-permit__btn"
              data-edit-permit="odot-permit"
              data-astro-cid-zk2hxksb=""
            >
              <span class="sd-permit__main" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__name" data-astro-cid-zk2hxksb=""
                  >Right-of-Way &amp; Utility Permit</span
                >
                <span class="sd-permit__agency" data-astro-cid-zk2hxksb="">Oregon DOT · State</span>
              </span>
              <span class="sd-permit__meta" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__chips" data-astro-cid-zk2hxksb="">
                  <esa-tooltip
                    text="Least-advanced covering permit — its status sets this segment's status"
                    position="top"
                    data-astro-cid-zk2hxksb="true"
                  >
                    <span
                      class="sd-permit__gating"
                      data-gating-tag=""
                      hidden=""
                      data-astro-cid-zk2hxksb=""
                      >Gating</span
                    >
                  </esa-tooltip>
                  <span data-permit-chip="odot-permit" data-astro-cid-zk2hxksb="">
                    <span
                      class="bcn-status-chip"
                      data-status="under-review"
                      style="--_chip: var(--st-under-review, #91cf60)"
                      data-astro-cid-dbmptlvz=""
                    >
                      <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
                      <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz=""
                        >Under Review</span
                      >
                    </span>
                  </span>
                </span>
                <span
                  class="sd-permit__date"
                  data-permit-date="odot-permit"
                  data-astro-cid-zk2hxksb=""
                  >Aug 20, 2026</span
                >
              </span>
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </li>
          <li class="sd-permit" data-permit-row="or-dsl" data-astro-cid-zk2hxksb="">
            <button
              type="button"
              class="sd-permit__btn"
              data-edit-permit="or-dsl"
              data-astro-cid-zk2hxksb=""
            >
              <span class="sd-permit__main" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__name" data-astro-cid-zk2hxksb="">Removal–Fill Permit</span>
                <span class="sd-permit__agency" data-astro-cid-zk2hxksb=""
                  >Oregon Dept. of State Lands · State</span
                >
              </span>
              <span class="sd-permit__meta" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__chips" data-astro-cid-zk2hxksb="">
                  <esa-tooltip
                    text="Least-advanced covering permit — its status sets this segment's status"
                    position="top"
                    data-astro-cid-zk2hxksb="true"
                  >
                    <span
                      class="sd-permit__gating"
                      data-gating-tag=""
                      hidden=""
                      data-astro-cid-zk2hxksb=""
                      >Gating</span
                    >
                  </esa-tooltip>
                  <span data-permit-chip="or-dsl" data-astro-cid-zk2hxksb="">
                    <span
                      class="bcn-status-chip"
                      data-status="in-preparation"
                      style="--_chip: var(--st-in-preparation, #fc8d59)"
                      data-astro-cid-dbmptlvz=""
                    >
                      <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
                      <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz=""
                        >In Preparation</span
                      >
                    </span>
                  </span>
                </span>
                <span class="sd-permit__date" data-permit-date="or-dsl" data-astro-cid-zk2hxksb=""
                  >Sep 25, 2026</span
                >
              </span>
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </li>
          <li class="sd-permit" data-permit-row="uma-county-row" data-astro-cid-zk2hxksb="">
            <button
              type="button"
              class="sd-permit__btn"
              data-edit-permit="uma-county-row"
              data-astro-cid-zk2hxksb=""
            >
              <span class="sd-permit__main" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__name" data-astro-cid-zk2hxksb=""
                  >County Right-of-Way Permit</span
                >
                <span class="sd-permit__agency" data-astro-cid-zk2hxksb=""
                  >Umatilla County Public Works · Local</span
                >
              </span>
              <span class="sd-permit__meta" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__chips" data-astro-cid-zk2hxksb="">
                  <esa-tooltip
                    text="Least-advanced covering permit — its status sets this segment's status"
                    position="top"
                    data-astro-cid-zk2hxksb="true"
                  >
                    <span
                      class="sd-permit__gating"
                      data-gating-tag=""
                      hidden=""
                      data-astro-cid-zk2hxksb=""
                      >Gating</span
                    >
                  </esa-tooltip>
                  <span data-permit-chip="uma-county-row" data-astro-cid-zk2hxksb="">
                    <span
                      class="bcn-status-chip"
                      data-status="submitted"
                      style="--_chip: var(--st-submitted, #e3c14d)"
                      data-astro-cid-dbmptlvz=""
                    >
                      <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
                      <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz=""
                        >Submitted</span
                      >
                    </span>
                  </span>
                </span>
                <span
                  class="sd-permit__date"
                  data-permit-date="uma-county-row"
                  data-astro-cid-zk2hxksb=""
                  >Sep 10, 2026</span
                >
              </span>
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </li>
          <li class="sd-permit" data-permit-row="benton-row" data-astro-cid-zk2hxksb="">
            <button
              type="button"
              class="sd-permit__btn"
              data-edit-permit="benton-row"
              data-astro-cid-zk2hxksb=""
            >
              <span class="sd-permit__main" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__name" data-astro-cid-zk2hxksb=""
                  >County Right-of-Way Permit</span
                >
                <span class="sd-permit__agency" data-astro-cid-zk2hxksb=""
                  >Benton County Public Works · Local</span
                >
              </span>
              <span class="sd-permit__meta" data-astro-cid-zk2hxksb="">
                <span class="sd-permit__chips" data-astro-cid-zk2hxksb="">
                  <esa-tooltip
                    text="Least-advanced covering permit — its status sets this segment's status"
                    position="top"
                    data-astro-cid-zk2hxksb="true"
                  >
                    <span
                      class="sd-permit__gating"
                      data-gating-tag=""
                      hidden=""
                      data-astro-cid-zk2hxksb=""
                      >Gating</span
                    >
                  </esa-tooltip>
                  <span data-permit-chip="benton-row" data-astro-cid-zk2hxksb="">
                    <span
                      class="bcn-status-chip"
                      data-status="not-started"
                      style="--_chip: var(--st-not-started, #d73027)"
                      data-astro-cid-dbmptlvz=""
                    >
                      <span class="bcn-status-chip__dot" data-astro-cid-dbmptlvz=""></span>
                      <span class="bcn-status-chip__label" data-astro-cid-dbmptlvz=""
                        >Not Started</span
                      >
                    </span>
                  </span>
                </span>
                <span
                  class="sd-permit__date"
                  data-permit-date="benton-row"
                  data-astro-cid-zk2hxksb=""
                  >Nov 1, 2026</span
                >
              </span>
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </li>
        </ul>
      </template>
      <esa-side-dialog
        id="permit-dialog"
        size="md"
        style="--_width: 640px; --z-modal: 1340; --z-modal-backdrop: 1310"
        position="right"
      >
        <div slot="header" class="pd__header">
          <h2 class="pd__title" id="pd-title">Permit</h2>
          <span id="pd-chip"
            ><span
              class="bcn-status-chip"
              data-status="not-started"
              style="--_chip: var(--st-not-started, #d73027)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">—</span>
            </span>
          </span>
        </div>
        <div class="pd">
          <section class="pd__section">
            <h3 class="pd__section-head">
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
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
              </span>
              Status
            </h3>
            <div class="pd__group"><esa-select id="pd-status" size="md"></esa-select></div>
          </section>
          <section class="pd__section">
            <h3 class="pd__section-head">
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
              Timing
            </h3>
            <div class="pd__group">
              <div class="pd__row">
                <esa-date-picker
                  id="pd-submitted"
                  label="Submitted date"
                  size="md"
                ></esa-date-picker>
                <esa-date-picker
                  id="pd-estimated"
                  label="Estimated approval"
                  size="md"
                ></esa-date-picker>
              </div>
              <esa-date-picker id="pd-actual" label="Actual approval" size="md"></esa-date-picker>
            </div>
          </section>
          <section class="pd__section">
            <h3 class="pd__section-head">
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
                  <circle cx="6" cy="19" r="3"></circle>
                  <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                  <circle cx="18" cy="5" r="3"></circle>
                </svg>
              </span>
              Segments
            </h3>
            <div class="pd__group">
              <!-- Editable applicability — esa-input-tag in strict mode (segments are a
               fixed vocabulary), selected chips below the search input -->
              <esa-input-tag
                id="pd-segments"
                strict="true"
                tags-below="true"
                placeholder="Search segments…"
                size="md"
              ></esa-input-tag>
            </div>
          </section>
          <!-- Details are READ-ONLY: agency / level / type are source-document data —
           this drawer edits permit status, timing, and segment applicability. -->
          <section class="pd__section">
            <h3 class="pd__section-head">
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
              Details
            </h3>
            <div class="pd__group">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Agency</span>
                <span class="pd__kv-val" id="pd-agency"></span>
              </div>
              <div class="pd__row">
                <div class="bcn-key-value">
                  <span class="bcn-key-value__key">Level</span>
                  <span class="pd__kv-val" id="pd-level"></span>
                </div>
                <div class="bcn-key-value">
                  <span class="bcn-key-value__key">Permit type</span>
                  <span class="pd__kv-val" id="pd-type"></span>
                </div>
              </div>
            </div>
          </section>
          <!-- Change log — seeded from the permit's own dates, grows as edits land -->
          <section class="pd__section">
            <h3 class="pd__section-head">
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
              Activity
            </h3>
            <ul class="pd__activity" id="pd-activity"></ul>
          </section>
        </div>
        <div slot="footer" class="pd__footer">
          <span id="pd-cancel"
            ><span
              class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Cancel </span>
              </button>
            </span>
          </span>
          <span id="pd-save"
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
      <script type="application/json" id="pt-data">
        {
          "schemes": [
            {
              "id": "cartographic",
              "label": "Cartographic",
              "blurb": "Soft print-map ramp (RdYlGn) — gentler ink over the basemap.",
              "colors": {
                "not-started": "#d73027",
                "in-preparation": "#fc8d59",
                "submitted": "#e3c14d",
                "under-review": "#91cf60",
                "cleared": "#1a9850"
              }
            },
            {
              "id": "readiness",
              "label": "Readiness heat",
              "blurb": "Even spectrum — red through amber to green, balanced pivot at Submitted.",
              "colors": {
                "not-started": "#dc2626",
                "in-preparation": "#f97316",
                "submitted": "#eab308",
                "under-review": "#65a30d",
                "cleared": "#16a34a"
              }
            },
            {
              "id": "conservative",
              "label": "Conservative",
              "blurb": "Red until proven green — nothing reads \"warm\" before agency review.",
              "colors": {
                "not-started": "#991b1b",
                "in-preparation": "#dc2626",
                "submitted": "#ea580c",
                "under-review": "#f59e0b",
                "cleared": "#16a34a"
              }
            },
            {
              "id": "earth",
              "label": "Muted earth",
              "blurb": "Desaturated brick → olive — the quietest option, basemap stays legible.",
              "colors": {
                "not-started": "#a13d32",
                "in-preparation": "#c47a3b",
                "submitted": "#c9a227",
                "under-review": "#7d9a44",
                "cleared": "#2f7d4f"
              }
            }
          ],
          "statusOrder": ["not-started", "in-preparation", "submitted", "under-review", "cleared"],
          "statusLabels": {
            "not-started": "Not Started",
            "in-preparation": "In Preparation",
            "submitted": "Submitted",
            "under-review": "Under Review",
            "cleared": "Cleared to Construct"
          },
          "permitLabels": {
            "not-started": "Not Started",
            "in-preparation": "In Preparation",
            "submitted": "Submitted",
            "under-review": "Under Review",
            "issued": "Issued",
            "not-required": "Not Required"
          },
          "permitOrder": [
            "not-started",
            "in-preparation",
            "submitted",
            "under-review",
            "issued",
            "not-required"
          ],
          "lines": [
            { "id": "Path 1", "miles": "64.9 mi" },
            { "id": "Path 2", "miles": "66.4 mi" },
            { "id": "Path 3", "miles": "67.0 mi" },
            { "id": "Path 4", "miles": "2.3 mi" }
          ],
          "permits": [
            {
              "id": "usace-nwp",
              "name": "Nationwide Permit (Section 404)",
              "agency": "US Army Corps of Engineers",
              "agencyLevel": "Federal",
              "type": "Section 404",
              "status": "issued",
              "submittedDate": "2026-03-10",
              "estimatedApprovalDate": "2026-08-15",
              "actualApprovalDate": "2026-05-28",
              "segmentIds": [
                "seg-1a",
                "seg-1b",
                "seg-1c",
                "seg-1e",
                "seg-1f",
                "seg-2a",
                "seg-2b",
                "seg-3b",
                "seg-3e",
                "seg-3g"
              ]
            },
            {
              "id": "usfws-sf299",
              "name": "Refuge Right-of-Way (SF-299)",
              "agency": "US Fish & Wildlife Service",
              "agencyLevel": "Federal",
              "type": "Right-of-Way",
              "status": "issued",
              "submittedDate": "2026-04-02",
              "estimatedApprovalDate": "2026-09-30",
              "actualApprovalDate": "2026-05-30",
              "segmentIds": []
            },
            {
              "id": "wsdot-uap",
              "name": "Utility Accommodation Permit",
              "agency": "WSDOT",
              "agencyLevel": "State",
              "type": "Utility",
              "status": "in-preparation",
              "submittedDate": "",
              "estimatedApprovalDate": "2026-07-20",
              "actualApprovalDate": "",
              "segmentIds": ["seg-3f"]
            },
            {
              "id": "ecology-401",
              "name": "Water Quality Certification (401)",
              "agency": "WA Dept. of Ecology",
              "agencyLevel": "State",
              "type": "401 Certification",
              "status": "under-review",
              "submittedDate": "2026-03-28",
              "estimatedApprovalDate": "2026-08-30",
              "actualApprovalDate": "",
              "segmentIds": ["seg-eas", "seg-2b"]
            },
            {
              "id": "ecology-stormwater",
              "name": "Construction Stormwater (NPDES)",
              "agency": "WA Dept. of Ecology",
              "agencyLevel": "State",
              "type": "NPDES",
              "status": "in-preparation",
              "submittedDate": "",
              "estimatedApprovalDate": "2026-07-15",
              "actualApprovalDate": "",
              "segmentIds": ["seg-3c", "seg-3e"]
            },
            {
              "id": "wdfw-hpa",
              "name": "Hydraulic Project Approval (HPA)",
              "agency": "WA Dept. of Fish & Wildlife",
              "agencyLevel": "State",
              "type": "HPA",
              "status": "under-review",
              "submittedDate": "2026-03-18",
              "estimatedApprovalDate": "2026-08-10",
              "actualApprovalDate": "",
              "segmentIds": ["seg-eas", "seg-2b"]
            },
            {
              "id": "wa-dnr",
              "name": "Aquatic Lands Use Authorization",
              "agency": "WA Dept. of Natural Resources",
              "agencyLevel": "State",
              "type": "Aquatic Lands",
              "status": "issued",
              "submittedDate": "2026-04-10",
              "estimatedApprovalDate": "2026-09-15",
              "actualApprovalDate": "2026-06-01",
              "segmentIds": ["seg-1e", "seg-1f", "seg-4a"]
            },
            {
              "id": "sepa-walla-walla",
              "name": "SEPA Environmental Review",
              "agency": "Walla Walla County (Lead Agency)",
              "agencyLevel": "Local",
              "type": "SEPA",
              "status": "issued",
              "submittedDate": "2026-01-15",
              "estimatedApprovalDate": "2026-04-30",
              "actualApprovalDate": "2026-04-22",
              "segmentIds": [
                "seg-eas",
                "seg-1e",
                "seg-1f",
                "seg-2b",
                "seg-3f",
                "seg-3g",
                "seg-3h",
                "seg-4a"
              ]
            },
            {
              "id": "ww-county-row",
              "name": "County Right-of-Way Permit",
              "agency": "Walla Walla County Public Works",
              "agencyLevel": "Local",
              "type": "Right-of-Way",
              "status": "issued",
              "submittedDate": "2026-03-05",
              "estimatedApprovalDate": "2026-07-25",
              "actualApprovalDate": "2026-06-02",
              "segmentIds": ["seg-1e", "seg-1f", "seg-3g", "seg-3j"]
            },
            {
              "id": "franchise",
              "name": "Franchise Agreement",
              "agency": "Walla Walla County",
              "agencyLevel": "Local",
              "type": "Franchise",
              "status": "not-started",
              "submittedDate": "",
              "estimatedApprovalDate": "2026-10-15",
              "actualApprovalDate": "",
              "segmentIds": ["seg-3h", "seg-3i", "seg-3j"]
            },
            {
              "id": "shoreline-ssd",
              "name": "Shoreline Substantial Development / CUP",
              "agency": "Walla Walla County",
              "agencyLevel": "Local",
              "type": "Shoreline",
              "status": "submitted",
              "submittedDate": "2026-04-05",
              "estimatedApprovalDate": "2026-09-05",
              "actualApprovalDate": "",
              "segmentIds": ["seg-4a"]
            },
            {
              "id": "odot-permit",
              "name": "Right-of-Way & Utility Permit",
              "agency": "Oregon DOT",
              "agencyLevel": "State",
              "type": "Right-of-Way",
              "status": "under-review",
              "submittedDate": "2026-04-12",
              "estimatedApprovalDate": "2026-08-20",
              "actualApprovalDate": "",
              "segmentIds": ["seg-1a", "seg-1b", "seg-2a"]
            },
            {
              "id": "or-dsl",
              "name": "Removal–Fill Permit",
              "agency": "Oregon Dept. of State Lands",
              "agencyLevel": "State",
              "type": "Removal–Fill",
              "status": "in-preparation",
              "submittedDate": "",
              "estimatedApprovalDate": "2026-09-25",
              "actualApprovalDate": "",
              "segmentIds": ["seg-1c", "seg-2a", "seg-3a"]
            },
            {
              "id": "uma-county-row",
              "name": "County Right-of-Way Permit",
              "agency": "Umatilla County Public Works",
              "agencyLevel": "Local",
              "type": "Right-of-Way",
              "status": "submitted",
              "submittedDate": "2026-05-02",
              "estimatedApprovalDate": "2026-09-10",
              "actualApprovalDate": "",
              "segmentIds": ["seg-1a", "seg-1c", "seg-2a", "seg-3a", "seg-3b"]
            },
            {
              "id": "benton-row",
              "name": "County Right-of-Way Permit",
              "agency": "Benton County Public Works",
              "agencyLevel": "Local",
              "type": "Right-of-Way",
              "status": "not-started",
              "submittedDate": "",
              "estimatedApprovalDate": "2026-11-01",
              "actualApprovalDate": "",
              "segmentIds": ["seg-3c", "seg-3d", "seg-3e"]
            }
          ],
          "segments": [
            {
              "id": "seg-eas",
              "name": "Easements Reach",
              "line": "Path 1",
              "phases": ["Day 2"],
              "contractor": "Fishel",
              "jurisdiction": "Walla Walla County, WA",
              "lengthFt": 28855,
              "geometry": [
                [46.0998, -118.89292],
                [46.09964, -118.89295],
                [46.09913, -118.88951],
                [46.09597, -118.86608],
                [46.07225, -118.78671]
              ]
            },
            {
              "id": "seg-1a",
              "name": "Segment 1A",
              "line": "Path 1",
              "phases": ["Day 1", "Day 2"],
              "contractor": "IIG",
              "jurisdiction": "Umatilla County, OR",
              "lengthFt": 96142,
              "geometry": [
                [45.91449, -119.26563],
                [45.91349, -119.26563],
                [45.91311, -119.26561],
                [45.91263, -119.26567],
                [45.91243, -119.26477],
                [45.91223, -119.26356],
                [45.912, -119.26214],
                [45.91181, -119.261],
                [45.91036, -119.25116],
                [45.90639, -119.22525],
                [45.90135, -119.1894],
                [45.90133, -119.18183],
                [45.90198, -119.17639],
                [45.9036, -119.16636],
                [45.90455, -119.16132],
                [45.90575, -119.15749],
                [45.9122, -119.14228],
                [45.91413, -119.1374],
                [45.91448, -119.13242],
                [45.91552, -119.12945],
                [45.91571, -119.12548],
                [45.91577, -119.12245],
                [45.91463, -119.12028],
                [45.91357, -119.11811],
                [45.91172, -119.1137],
                [45.90859, -119.10505],
                [45.90687, -119.09997],
                [45.90598, -119.09739],
                [45.90537, -119.09571],
                [45.90491, -119.09464],
                [45.90373, -119.09183],
                [45.90285, -119.08974],
                [45.90207, -119.08794],
                [45.90044, -119.08413],
                [45.89969, -119.0824],
                [45.8969, -119.07585],
                [45.89488, -119.07123],
                [45.89432, -119.06997],
                [45.89396, -119.06919],
                [45.8938, -119.06892],
                [45.89358, -119.06866],
                [45.89334, -119.06845],
                [45.89306, -119.06823],
                [45.89271, -119.06799],
                [45.89144, -119.06739],
                [45.89004, -119.06676],
                [45.88785, -119.06576],
                [45.88708, -119.06547],
                [45.8862, -119.06526],
                [45.88318, -119.06469],
                [45.88281, -119.06455],
                [45.88251, -119.06449],
                [45.88225, -119.06433],
                [45.88201, -119.06411],
                [45.88173, -119.06367],
                [45.88153, -119.06311],
                [45.88146, -119.06247],
                [45.88146, -119.06193],
                [45.88169, -119.06111],
                [45.882, -119.06022],
                [45.88232, -119.0593],
                [45.88245, -119.05867],
                [45.88241, -119.05795],
                [45.88226, -119.05744],
                [45.88168, -119.05539],
                [45.88144, -119.05461],
                [45.88131, -119.05392],
                [45.8813, -119.05333],
                [45.88138, -119.05283],
                [45.88159, -119.05216],
                [45.88198, -119.05116],
                [45.88239, -119.05002],
                [45.88262, -119.04905],
                [45.8827, -119.04841],
                [45.88266, -119.04773],
                [45.88249, -119.04708],
                [45.88223, -119.04634],
                [45.88179, -119.04516],
                [45.88144, -119.04422],
                [45.88115, -119.04356],
                [45.88082, -119.04275],
                [45.88068, -119.04204],
                [45.8806, -119.04148],
                [45.88053, -119.04071],
                [45.88048, -119.04006],
                [45.88055, -119.03948],
                [45.88088, -119.03869],
                [45.88156, -119.03761],
                [45.88174, -119.03712],
                [45.88207, -119.03633],
                [45.88242, -119.0354],
                [45.88257, -119.03485],
                [45.88265, -119.03418],
                [45.88264, -119.03358],
                [45.88248, -119.0329],
                [45.88222, -119.03212],
                [45.88172, -119.03047],
                [45.88139, -119.02937],
                [45.88125, -119.02857],
                [45.88132, -119.02761],
                [45.88152, -119.02672],
                [45.88161, -119.02603],
                [45.8821, -119.02533],
                [45.88331, -119.0241],
                [45.88407, -119.02326],
                [45.88471, -119.02236],
                [45.8853, -119.02145],
                [45.88561, -119.02053],
                [45.88593, -119.01929],
                [45.88642, -119.0176],
                [45.88653, -119.01684],
                [45.88665, -119.01374],
                [45.88688, -119.01227],
                [45.88733, -119.01044],
                [45.88741, -119.00908],
                [45.88728, -119.00735],
                [45.88704, -119.0057],
                [45.88708, -119.00454],
                [45.88733, -119.00341],
                [45.888, -119.00226],
                [45.88884, -119.0016],
                [45.89012, -119.00095],
                [45.89191, -118.99905],
                [45.89219, -118.99807],
                [45.89242, -118.99613],
                [45.89268, -118.9946],
                [45.89321, -118.9932],
                [45.8938, -118.99187],
                [45.89427, -118.99057],
                [45.89444, -118.9896],
                [45.89419, -118.98856],
                [45.8934, -118.9869],
                [45.89243, -118.98466],
                [45.89157, -118.98326],
                [45.89076, -118.98209],
                [45.8902, -118.9811],
                [45.88978, -118.98003],
                [45.88941, -118.97818],
                [45.88932, -118.97671],
                [45.88938, -118.97573],
                [45.88974, -118.9744],
                [45.89003, -118.97354],
                [45.89011, -118.97257],
                [45.88995, -118.97144],
                [45.88966, -118.97047],
                [45.88949, -118.97016],
                [45.88932, -118.9699],
                [45.88906, -118.9698],
                [45.88854, -118.96986],
                [45.88793, -118.97006],
                [45.88724, -118.97026],
                [45.8866, -118.97031],
                [45.88603, -118.97006],
                [45.88549, -118.96961],
                [45.88496, -118.96866],
                [45.88462, -118.96742],
                [45.88433, -118.96694],
                [45.88391, -118.96658],
                [45.88309, -118.96647],
                [45.8821, -118.96636],
                [45.88121, -118.96639],
                [45.88071, -118.96648],
                [45.88017, -118.96642],
                [45.87965, -118.96606],
                [45.87908, -118.96545],
                [45.87858, -118.96427],
                [45.87802, -118.96253],
                [45.87702, -118.95884],
                [45.87705, -118.9582],
                [45.87705, -118.95738],
                [45.87695, -118.95588],
                [45.87658, -118.954],
                [45.87609, -118.9518],
                [45.87482, -118.94765],
                [45.87448, -118.94658],
                [45.87403, -118.94549],
                [45.87388, -118.94527]
              ]
            },
            {
              "id": "seg-1b",
              "name": "Segment 1B",
              "line": "Path 1",
              "phases": ["Day 1", "Day 2"],
              "contractor": "IIG",
              "jurisdiction": "Umatilla County, OR",
              "lengthFt": 71774,
              "geometry": [
                [45.87388, -118.94527],
                [45.87415, -118.94495],
                [45.87463, -118.94464],
                [45.87508, -118.94423],
                [45.87534, -118.94334],
                [45.87556, -118.94233],
                [45.87602, -118.94089],
                [45.87638, -118.93955],
                [45.87662, -118.93873],
                [45.87694, -118.93837],
                [45.87722, -118.93826],
                [45.87791, -118.93833],
                [45.87844, -118.93835],
                [45.87912, -118.93836],
                [45.87984, -118.93848],
                [45.88056, -118.93839],
                [45.88149, -118.93788],
                [45.88245, -118.93749],
                [45.88331, -118.93733],
                [45.88448, -118.93711],
                [45.8855, -118.93679],
                [45.88636, -118.93639],
                [45.88733, -118.93575],
                [45.88781, -118.93515],
                [45.88828, -118.93485],
                [45.88951, -118.93428],
                [45.88981, -118.93396],
                [45.8901, -118.93365],
                [45.89083, -118.93343],
                [45.89162, -118.93319],
                [45.89259, -118.93255],
                [45.89349, -118.93172],
                [45.89412, -118.93097],
                [45.8946, -118.93029],
                [45.89516, -118.92944],
                [45.89646, -118.92803],
                [45.89763, -118.92703],
                [45.89833, -118.92659],
                [45.89959, -118.92649],
                [45.90048, -118.92661],
                [45.90098, -118.92666],
                [45.90142, -118.92642],
                [45.90217, -118.92548],
                [45.90292, -118.9246],
                [45.90691, -118.92141],
                [45.90845, -118.9205],
                [45.90997, -118.91972],
                [45.91305, -118.91819],
                [45.91484, -118.91724],
                [45.91582, -118.91667],
                [45.91651, -118.91608],
                [45.91785, -118.9152],
                [45.91829, -118.91488],
                [45.91913, -118.91459],
                [45.91966, -118.91434],
                [45.92019, -118.91383],
                [45.92095, -118.91321],
                [45.92136, -118.91297],
                [45.92262, -118.91307],
                [45.92294, -118.91307],
                [45.92349, -118.91273],
                [45.92421, -118.91223],
                [45.92489, -118.9116],
                [45.92534, -118.91112],
                [45.926, -118.91054],
                [45.92693, -118.91002],
                [45.92764, -118.90987],
                [45.92838, -118.90963],
                [45.92881, -118.90914],
                [45.92923, -118.90783],
                [45.9297, -118.90611],
                [45.93017, -118.90389],
                [45.9303, -118.90161],
                [45.93059, -118.8996],
                [45.93231, -118.89627],
                [45.9335, -118.89476],
                [45.93528, -118.89262],
                [45.93566, -118.89212],
                [45.93667, -118.89095],
                [45.93752, -118.88984],
                [45.93838, -118.88872],
                [45.93876, -118.88836],
                [45.94018, -118.88776],
                [45.941, -118.88719],
                [45.94167, -118.88707],
                [45.94211, -118.88658],
                [45.94263, -118.88583],
                [45.94439, -118.88436],
                [45.94506, -118.8839],
                [45.94532, -118.88328],
                [45.94524, -118.88255],
                [45.94492, -118.88172],
                [45.94493, -118.88121],
                [45.94543, -118.88077],
                [45.94587, -118.88065],
                [45.94644, -118.88063],
                [45.94715, -118.88028],
                [45.94774, -118.87967],
                [45.94812, -118.87928],
                [45.94845, -118.87847],
                [45.94881, -118.87804],
                [45.94907, -118.87783],
                [45.94931, -118.87779],
                [45.94958, -118.87824],
                [45.94972, -118.87869],
                [45.94974, -118.87917],
                [45.94971, -118.88003],
                [45.94972, -118.88073],
                [45.94983, -118.88127],
                [45.95004, -118.88223],
                [45.95042, -118.88383],
                [45.95093, -118.88558],
                [45.9512, -118.88658],
                [45.95138, -118.88832],
                [45.95161, -118.8912],
                [45.95156, -118.89292],
                [45.95149, -118.89396],
                [45.95135, -118.89494],
                [45.95144, -118.89575],
                [45.95169, -118.8963],
                [45.95195, -118.89666],
                [45.95256, -118.89711],
                [45.95314, -118.89736],
                [45.95358, -118.89811],
                [45.9539, -118.89902],
                [45.95429, -118.90003],
                [45.95493, -118.90169],
                [45.95522, -118.90181],
                [45.95584, -118.90066],
                [45.95792, -118.89752],
                [45.95989, -118.89634],
                [45.96129, -118.89458],
                [45.96261, -118.89237],
                [45.96343, -118.88953],
                [45.97334, -118.87677],
                [45.97577, -118.8732],
                [45.98113, -118.86874],
                [45.9854, -118.86316],
                [45.987, -118.86087],
                [45.99211, -118.85597],
                [45.99686, -118.85499],
                [45.99951, -118.8533],
                [46.00179, -118.85279],
                [46.00344, -118.85378],
                [46.00412, -118.8547],
                [46.00492, -118.85535],
                [46.00997, -118.85557],
                [46.01082, -118.85556],
                [46.01355, -118.85616],
                [46.01491, -118.85649],
                [46.0231, -118.85684],
                [46.0241, -118.85686]
              ]
            },
            {
              "id": "seg-1c",
              "name": "Segment 1C",
              "line": "Path 1",
              "phases": ["Day 2"],
              "contractor": "IIG",
              "jurisdiction": "Umatilla County, OR",
              "lengthFt": 105597,
              "geometry": [
                [45.87388, -118.94527],
                [45.87415, -118.94495],
                [45.87463, -118.94464],
                [45.87508, -118.94423],
                [45.87534, -118.94334],
                [45.87556, -118.94233],
                [45.87602, -118.94089],
                [45.87638, -118.93955],
                [45.87662, -118.93873],
                [45.87694, -118.93837],
                [45.87722, -118.93826],
                [45.87791, -118.93833],
                [45.87844, -118.93835],
                [45.87912, -118.93836],
                [45.87984, -118.93848],
                [45.88056, -118.93839],
                [45.88149, -118.93788],
                [45.88245, -118.93749],
                [45.88331, -118.93733],
                [45.88448, -118.93711],
                [45.8855, -118.93679],
                [45.88636, -118.93639],
                [45.88733, -118.93575],
                [45.88781, -118.93515],
                [45.88828, -118.93485],
                [45.88951, -118.93428],
                [45.88981, -118.93396],
                [45.8901, -118.93365],
                [45.89083, -118.93343],
                [45.89162, -118.93319],
                [45.89259, -118.93255],
                [45.89349, -118.93172],
                [45.89412, -118.93097],
                [45.8946, -118.93029],
                [45.89516, -118.92944],
                [45.89646, -118.92803],
                [45.89763, -118.92703],
                [45.89833, -118.92659],
                [45.89959, -118.92649],
                [45.90048, -118.92661],
                [45.90098, -118.92666],
                [45.90142, -118.92642],
                [45.90217, -118.92548],
                [45.90292, -118.9246],
                [45.90691, -118.92141],
                [45.90845, -118.9205],
                [45.90997, -118.91972],
                [45.91305, -118.91819],
                [45.91484, -118.91724],
                [45.91582, -118.91667],
                [45.91651, -118.91608],
                [45.91785, -118.9152],
                [45.91829, -118.91488],
                [45.91913, -118.91459],
                [45.91966, -118.91434],
                [45.92019, -118.91383],
                [45.92095, -118.91321],
                [45.92136, -118.91297],
                [45.92262, -118.91307],
                [45.92294, -118.91307],
                [45.92349, -118.91273],
                [45.92421, -118.91223],
                [45.92489, -118.9116],
                [45.92534, -118.91112],
                [45.926, -118.91054],
                [45.92693, -118.91002],
                [45.92764, -118.90987],
                [45.92838, -118.90963],
                [45.92881, -118.90914],
                [45.92923, -118.90783],
                [45.9297, -118.90611],
                [45.93017, -118.90389],
                [45.9303, -118.90161],
                [45.93059, -118.8996],
                [45.93231, -118.89627],
                [45.9335, -118.89476],
                [45.93528, -118.89262],
                [45.93566, -118.89212],
                [45.93667, -118.89095],
                [45.93752, -118.88984],
                [45.93838, -118.88872],
                [45.93876, -118.88836],
                [45.94018, -118.88776],
                [45.941, -118.88719],
                [45.94167, -118.88707],
                [45.94211, -118.88658],
                [45.94263, -118.88583],
                [45.94439, -118.88436],
                [45.94506, -118.8839],
                [45.94532, -118.88328],
                [45.94524, -118.88255],
                [45.94492, -118.88172],
                [45.94493, -118.88121],
                [45.94543, -118.88077],
                [45.94587, -118.88065],
                [45.94644, -118.88063],
                [45.94715, -118.88028],
                [45.94774, -118.87967],
                [45.94812, -118.87928],
                [45.94845, -118.87847],
                [45.94881, -118.87804],
                [45.94907, -118.87783],
                [45.94931, -118.87779],
                [45.94958, -118.87824],
                [45.94972, -118.87869],
                [45.94974, -118.87917],
                [45.94971, -118.88003],
                [45.94972, -118.88073],
                [45.94983, -118.88127],
                [45.95004, -118.88223],
                [45.95042, -118.88383],
                [45.95093, -118.88558],
                [45.9512, -118.88658],
                [45.95138, -118.88832],
                [45.95161, -118.8912],
                [45.95156, -118.89292],
                [45.95149, -118.89396],
                [45.95135, -118.89494],
                [45.95144, -118.89575],
                [45.95169, -118.8963],
                [45.95195, -118.89666],
                [45.95256, -118.89711],
                [45.95314, -118.89736],
                [45.95358, -118.89811],
                [45.9539, -118.89902],
                [45.95429, -118.90003],
                [45.95493, -118.90169],
                [45.95522, -118.90181],
                [45.95584, -118.90066],
                [45.95792, -118.89752],
                [45.95989, -118.89634],
                [45.96129, -118.89458],
                [45.96261, -118.89237],
                [45.96343, -118.88953],
                [45.97334, -118.87677],
                [45.97577, -118.8732],
                [45.98113, -118.86874],
                [45.9854, -118.86316],
                [45.987, -118.86087],
                [45.99211, -118.85597],
                [45.99686, -118.85499],
                [45.99951, -118.8533],
                [46.00179, -118.85279],
                [46.00344, -118.85378],
                [46.00412, -118.8547],
                [46.00492, -118.85535],
                [46.00997, -118.85557],
                [46.01082, -118.85556],
                [46.01355, -118.85616],
                [46.01491, -118.85649],
                [46.02308, -118.85674],
                [46.0241, -118.85693],
                [46.02526, -118.85541],
                [46.02588, -118.85403],
                [46.02609, -118.85253],
                [46.02692, -118.85145],
                [46.02765, -118.85021],
                [46.02796, -118.84991],
                [46.02825, -118.84931],
                [46.02834, -118.84888],
                [46.02916, -118.84685],
                [46.03036, -118.84579],
                [46.03149, -118.84532],
                [46.03182, -118.84537],
                [46.03226, -118.8455],
                [46.0322, -118.84486],
                [46.03235, -118.84429],
                [46.03228, -118.84368],
                [46.03282, -118.84154],
                [46.03319, -118.83813],
                [46.03353, -118.8371],
                [46.0349, -118.83414],
                [46.0375, -118.83514],
                [46.0389, -118.83529],
                [46.04043, -118.835],
                [46.04246, -118.83419],
                [46.04448, -118.82896],
                [46.04305, -118.81492],
                [46.04135, -118.81117],
                [46.04025, -118.80934],
                [46.03858, -118.80636],
                [46.03847, -118.80563],
                [46.03935, -118.80575],
                [46.04082, -118.8073],
                [46.04116, -118.80707],
                [46.0415, -118.80612],
                [46.04224, -118.80469],
                [46.04252, -118.80466],
                [46.04294, -118.80586],
                [46.04352, -118.80683],
                [46.04417, -118.80758],
                [46.04462, -118.80776],
                [46.04905, -118.80358],
                [46.05333, -118.79939],
                [46.0537, -118.79645],
                [46.06235, -118.7918],
                [46.06467, -118.78992],
                [46.06637, -118.78841],
                [46.06692, -118.78696],
                [46.06716, -118.78663],
                [46.06863, -118.78504],
                [46.06933, -118.78483],
                [46.07103, -118.78554],
                [46.07145, -118.78572],
                [46.07229, -118.78676]
              ]
            },
            {
              "id": "seg-1e",
              "name": "Segment 1E",
              "line": "Path 1",
              "phases": ["Day 1"],
              "contractor": "Fishel",
              "jurisdiction": "Walla Walla County, WA",
              "lengthFt": 23820,
              "geometry": [
                [46.05836, -118.90989],
                [46.05809, -118.91038],
                [46.05754, -118.91104],
                [46.05725, -118.91145],
                [46.0571, -118.91178],
                [46.05696, -118.91211],
                [46.05683, -118.91218],
                [46.05671, -118.91216],
                [46.05661, -118.91207],
                [46.05654, -118.91193],
                [46.05643, -118.91193],
                [46.05643, -118.91159],
                [46.05612, -118.91162],
                [46.0559, -118.91155],
                [46.0557, -118.91138],
                [46.05552, -118.91112],
                [46.05479, -118.90985],
                [46.05437, -118.90919],
                [46.05417, -118.90888],
                [46.05394, -118.90823],
                [46.05372, -118.9079],
                [46.05251, -118.90665],
                [46.05197, -118.90643],
                [46.05063, -118.90662],
                [46.04791, -118.9065],
                [46.04773, -118.90639],
                [46.04759, -118.90605],
                [46.04748, -118.90576],
                [46.04712, -118.90519],
                [46.04675, -118.90498],
                [46.04588, -118.90466],
                [46.0456, -118.90435],
                [46.04541, -118.90383],
                [46.04546, -118.90342],
                [46.04577, -118.90274],
                [46.04587, -118.90235],
                [46.04597, -118.9015],
                [46.0461, -118.90081],
                [46.04652, -118.9001],
                [46.04686, -118.89979],
                [46.04701, -118.89939],
                [46.047, -118.89889],
                [46.047, -118.89843],
                [46.04687, -118.89777],
                [46.04677, -118.89492],
                [46.04665, -118.89456],
                [46.04644, -118.89432],
                [46.04592, -118.89431],
                [46.04523, -118.89424],
                [46.04503, -118.89408],
                [46.04485, -118.89373],
                [46.04472, -118.89339],
                [46.04454, -118.89314],
                [46.0442, -118.89297],
                [46.04386, -118.89295],
                [46.04333, -118.89303],
                [46.04311, -118.89298],
                [46.04268, -118.89286],
                [46.04234, -118.89282],
                [46.04146, -118.8928],
                [46.04125, -118.8927],
                [46.0409, -118.89222],
                [46.04066, -118.89197],
                [46.0404, -118.89171],
                [46.03975, -118.8912],
                [46.03957, -118.89105],
                [46.03942, -118.89084],
                [46.03926, -118.89051],
                [46.03777, -118.88763],
                [46.03747, -118.88691],
                [46.03725, -118.88623],
                [46.0371, -118.88536],
                [46.03707, -118.87866],
                [46.03703, -118.87762],
                [46.03698, -118.87656],
                [46.0368, -118.87499],
                [46.03658, -118.87388],
                [46.03635, -118.87301],
                [46.03601, -118.87223],
                [46.03559, -118.87138],
                [46.03532, -118.87087],
                [46.03499, -118.87029],
                [46.03426, -118.86958],
                [46.03389, -118.86933],
                [46.03349, -118.86913],
                [46.03187, -118.86841],
                [46.0316, -118.8682],
                [46.0315, -118.86781],
                [46.03152, -118.86741],
                [46.03165, -118.86689],
                [46.03181, -118.86626],
                [46.03185, -118.86591],
                [46.032, -118.86329],
                [46.03204, -118.86216],
                [46.03203, -118.86126],
                [46.03197, -118.86072],
                [46.03187, -118.85939],
                [46.03181, -118.85908],
                [46.03165, -118.85876],
                [46.03141, -118.85855],
                [46.03119, -118.85843],
                [46.03105, -118.85831],
                [46.03089, -118.85812],
                [46.03078, -118.85791],
                [46.03056, -118.85753],
                [46.03033, -118.85727],
                [46.03015, -118.85713],
                [46.02994, -118.85703],
                [46.02974, -118.85699],
                [46.02929, -118.85698],
                [46.02407, -118.85686]
              ]
            },
            {
              "id": "seg-1f",
              "name": "Segment 1F",
              "line": "Path 1",
              "phases": ["Day 1"],
              "contractor": "Fishel",
              "jurisdiction": "Walla Walla County, WA",
              "lengthFt": 16733,
              "geometry": [
                [46.05835, -118.90986],
                [46.05873, -118.90991],
                [46.05915, -118.90991],
                [46.06284, -118.9085],
                [46.06498, -118.90812],
                [46.07703, -118.90775],
                [46.07841, -118.90802],
                [46.0808, -118.90835],
                [46.09076, -118.91094],
                [46.09999, -118.91261],
                [46.09996, -118.91218],
                [46.10003, -118.91157],
                [46.10013, -118.91127],
                [46.10035, -118.91106],
                [46.10068, -118.91095],
                [46.10101, -118.91104],
                [46.10144, -118.9111],
                [46.10187, -118.91116],
                [46.1022, -118.91098],
                [46.10243, -118.91066],
                [46.10253, -118.91038],
                [46.10247, -118.91015]
              ]
            },
            {
              "id": "seg-2a",
              "name": "Segment 2A",
              "line": "Path 2",
              "phases": ["Day 1"],
              "contractor": "Fishel",
              "jurisdiction": "Umatilla County, OR",
              "lengthFt": 252321,
              "geometry": [
                [45.80575, -119.24851],
                [45.80579, -119.24326],
                [45.80611, -119.24212],
                [45.80575, -119.2411],
                [45.80675, -119.01751],
                [45.80633, -119.01371],
                [45.80618, -119.01153],
                [45.80616, -119.00598],
                [45.80633, -119.00495],
                [45.80668, -119.00393],
                [45.80699, -119.00229],
                [45.80703, -118.99989],
                [45.80699, -118.99886],
                [45.80551, -118.9931],
                [45.80476, -118.99161],
                [45.80447, -118.99105],
                [45.80375, -118.98916],
                [45.80359, -118.98882],
                [45.80339, -118.9885],
                [45.8013, -118.98574],
                [45.80109, -118.98532],
                [45.80091, -118.98473],
                [45.80084, -118.98427],
                [45.80079, -118.98376],
                [45.80081, -118.98322],
                [45.80091, -118.98228],
                [45.80088, -118.98168],
                [45.80078, -118.98115],
                [45.80031, -118.9803],
                [45.79996, -118.97977],
                [45.79968, -118.97896],
                [45.79954, -118.97809],
                [45.79954, -118.97742],
                [45.79954, -118.9766],
                [45.8018, -118.97356],
                [45.80215, -118.97269],
                [45.80257, -118.97151],
                [45.80304, -118.97063],
                [45.80413, -118.96883],
                [45.80436, -118.96785],
                [45.80474, -118.96437],
                [45.80411, -118.95705],
                [45.80399, -118.95646],
                [45.80189, -118.95345],
                [45.80018, -118.94993],
                [45.80005, -118.94771],
                [45.80015, -118.94668],
                [45.79971, -118.94536],
                [45.79912, -118.94416],
                [45.79845, -118.94346],
                [45.79777, -118.94254],
                [45.79739, -118.94183],
                [45.79725, -118.94102],
                [45.79723, -118.94034],
                [45.79718, -118.94001],
                [45.79692, -118.93961],
                [45.7966, -118.93935],
                [45.7961, -118.93883],
                [45.79588, -118.93837],
                [45.7957, -118.9381],
                [45.79502, -118.9374],
                [45.79447, -118.93675],
                [45.79362, -118.93563],
                [45.79317, -118.93511],
                [45.79274, -118.93418],
                [45.79227, -118.93308],
                [45.79195, -118.93226],
                [45.79149, -118.9314],
                [45.79098, -118.93081],
                [45.79049, -118.93021],
                [45.79019, -118.92984],
                [45.78889, -118.92851],
                [45.78851, -118.92783],
                [45.78826, -118.92726],
                [45.78807, -118.92677],
                [45.78779, -118.92573],
                [45.7876, -118.92539],
                [45.78661, -118.92379],
                [45.78589, -118.92226],
                [45.78479, -118.92086],
                [45.78408, -118.92016],
                [45.78351, -118.91935],
                [45.78323, -118.9187],
                [45.78254, -118.91711],
                [45.78236, -118.91681],
                [45.7819, -118.9161],
                [45.78148, -118.91523],
                [45.77793, -118.90611],
                [45.77694, -118.9041],
                [45.77637, -118.90346],
                [45.77574, -118.9024],
                [45.77551, -118.90141],
                [45.77552, -118.89995],
                [45.77526, -118.89876],
                [45.77407, -118.89594],
                [45.77374, -118.89478],
                [45.77194, -118.88963],
                [45.77157, -118.88778],
                [45.77135, -118.8854],
                [45.77136, -118.88331],
                [45.77164, -118.88088],
                [45.772, -118.87929],
                [45.77227, -118.87792],
                [45.77215, -118.87685],
                [45.77206, -118.87558],
                [45.77247, -118.86966],
                [45.77247, -118.86782],
                [45.77236, -118.86336],
                [45.77263, -118.86247],
                [45.77307, -118.86179],
                [45.77357, -118.86112],
                [45.7741, -118.86076],
                [45.77465, -118.85976],
                [45.77562, -118.8594],
                [45.77612, -118.85914],
                [45.77595, -118.83874],
                [45.77603, -118.80625],
                [45.77612, -118.76596],
                [45.79796, -118.76641],
                [45.8843, -118.76637],
                [45.88432, -118.75468],
                [45.88481, -118.7543],
                [45.88533, -118.75386],
                [45.88567, -118.75348],
                [45.88596, -118.7525],
                [45.88611, -118.75169],
                [45.8866, -118.75115],
                [45.88636, -118.74953],
                [45.88631, -118.74726],
                [45.88691, -118.74601],
                [45.88792, -118.74443],
                [45.89355, -118.73463],
                [45.89602, -118.7319],
                [45.89684, -118.73092],
                [45.89717, -118.7293],
                [45.89667, -118.72784],
                [45.89595, -118.72693],
                [45.89538, -118.72618],
                [45.89533, -118.72261],
                [45.89737, -118.71691],
                [45.89822, -118.71479],
                [45.89867, -118.71425],
                [45.89877, -118.71171],
                [45.8991, -118.71057],
                [45.89985, -118.70975],
                [45.90247, -118.70804],
                [45.90375, -118.70792],
                [45.90518, -118.70796],
                [45.90585, -118.70697],
                [45.90667, -118.70567],
                [45.90934, -118.70364],
                [45.91072, -118.70254],
                [45.91253, -118.70192],
                [45.91526, -118.70043],
                [45.91635, -118.69966],
                [45.91717, -118.69884],
                [45.91785, -118.69829],
                [45.91965, -118.69746],
                [45.92119, -118.69658],
                [45.92284, -118.6958],
                [45.92469, -118.69702],
                [45.92623, -118.69755],
                [45.92835, -118.69866],
                [45.93141, -118.70154],
                [45.93262, -118.70288],
                [45.93471, -118.70605],
                [45.93512, -118.70534],
                [45.93508, -118.70394],
                [45.9359, -118.70252],
                [45.93607, -118.70089],
                [45.9361, -118.69933],
                [45.93678, -118.69861],
                [45.93658, -118.69726],
                [45.93638, -118.69575],
                [45.93664, -118.69467],
                [45.93803, -118.69454],
                [45.95023, -118.69381],
                [45.95561, -118.6881],
                [45.95914, -118.6856],
                [45.95974, -118.68226],
                [45.96009, -118.68214],
                [45.96084, -118.68287],
                [45.96123, -118.68391],
                [45.96145, -118.68429],
                [45.96228, -118.68331],
                [45.96304, -118.6811],
                [45.96458, -118.67965],
                [45.96584, -118.67852],
                [45.96959, -118.67609],
                [45.97113, -118.67488],
                [45.97233, -118.67463],
                [45.97423, -118.67403],
                [45.97526, -118.67276],
                [45.97696, -118.67008],
                [45.97712, -118.66934],
                [45.97909, -118.66579],
                [45.98305, -118.66148],
                [45.98427, -118.6589],
                [45.98491, -118.65773],
                [45.98491, -118.65676],
                [45.98506, -118.65583],
                [45.98723, -118.65286],
                [45.98897, -118.65222],
                [45.98978, -118.65225],
                [45.99061, -118.65185],
                [45.99126, -118.6513],
                [45.99034, -118.64708],
                [45.99042, -118.64658],
                [45.99608, -118.64279],
                [45.99845, -118.64268],
                [45.99886, -118.64884],
                [45.99921, -118.65194],
                [46.00067, -118.65863],
                [46.01648, -118.65871],
                [46.01638, -118.66516],
                [46.01857, -118.67238],
                [46.01899, -118.6732],
                [46.01912, -118.67423],
                [46.0191, -118.67511],
                [46.01933, -118.67525],
                [46.02107, -118.67523],
                [46.02181, -118.67494],
                [46.02462, -118.67291],
                [46.02511, -118.67239],
                [46.02565, -118.67188],
                [46.02602, -118.6715],
                [46.02661, -118.67107],
                [46.02716, -118.67086],
                [46.02758, -118.6708],
                [46.0284, -118.67086],
                [46.03208, -118.67138]
              ]
            },
            {
              "id": "seg-2b",
              "name": "Segment 2B",
              "line": "Path 2",
              "phases": ["Day 1"],
              "contractor": "Fishel",
              "jurisdiction": "Walla Walla County, WA",
              "lengthFt": 98521,
              "geometry": [
                [46.12472, -118.89002],
                [46.12422, -118.89002],
                [46.12425, -118.87867],
                [46.12412, -118.84955],
                [46.12388, -118.84944],
                [46.12368, -118.84949],
                [46.1232, -118.84969],
                [46.12293, -118.84957],
                [46.12282, -118.84908],
                [46.12271, -118.84847],
                [46.12265, -118.84794],
                [46.12263, -118.84761],
                [46.12271, -118.84713],
                [46.12296, -118.84692],
                [46.12336, -118.84698],
                [46.12407, -118.84694],
                [46.12426, -118.84699],
                [46.12452, -118.84715],
                [46.12467, -118.84725],
                [46.12496, -118.8474],
                [46.12542, -118.84757],
                [46.12583, -118.84768],
                [46.12638, -118.84775],
                [46.12665, -118.84768],
                [46.13293, -118.84387],
                [46.13315, -118.84367],
                [46.13386, -118.84301],
                [46.13533, -118.842],
                [46.13616, -118.84148],
                [46.1369, -118.84093],
                [46.13713, -118.84059],
                [46.13872, -118.83842],
                [46.13793, -118.73913],
                [46.13759, -118.72635],
                [46.13755, -118.72197],
                [46.13358, -118.72222],
                [46.13264, -118.72231],
                [46.13237, -118.72245],
                [46.13184, -118.72288],
                [46.13156, -118.7231],
                [46.13114, -118.72317],
                [46.13078, -118.72301],
                [46.13055, -118.72263],
                [46.13044, -118.72233],
                [46.13029, -118.71843],
                [46.13033, -118.71723],
                [46.13002, -118.71378],
                [46.12979, -118.71343],
                [46.12869, -118.71217],
                [46.12853, -118.71202],
                [46.1281, -118.7119],
                [46.12667, -118.712],
                [46.12639, -118.71185],
                [46.12635, -118.70989],
                [46.12618, -118.70653],
                [46.12579, -118.70169],
                [46.12575, -118.70113],
                [46.12538, -118.70077],
                [46.11053, -118.70086],
                [46.10984, -118.70068],
                [46.10795, -118.70104],
                [46.10721, -118.7019],
                [46.10685, -118.70257],
                [46.1059, -118.70341],
                [46.10481, -118.70404],
                [46.10405, -118.70422],
                [46.10246, -118.7041],
                [46.10122, -118.70382],
                [46.10034, -118.70364],
                [46.09872, -118.70313],
                [46.09801, -118.70303],
                [46.09729, -118.70265],
                [46.09667, -118.70216],
                [46.09634, -118.70196],
                [46.09582, -118.70186],
                [46.09519, -118.70163],
                [46.09491, -118.70138],
                [46.09471, -118.70092],
                [46.09462, -118.70003],
                [46.09462, -118.69947],
                [46.09438, -118.69914],
                [46.09378, -118.69881],
                [46.09237, -118.69858],
                [46.09133, -118.69819],
                [46.09076, -118.69817],
                [46.08962, -118.69812],
                [46.08901, -118.69828],
                [46.08848, -118.69843],
                [46.08792, -118.69833],
                [46.08759, -118.69799],
                [46.08679, -118.69663],
                [46.08638, -118.69665],
                [46.086, -118.69652],
                [46.08589, -118.69623],
                [46.08589, -118.69562],
                [46.08625, -118.69466],
                [46.08632, -118.69401],
                [46.08618, -118.69383],
                [46.08575, -118.69395],
                [46.0834, -118.69437],
                [46.08256, -118.69432],
                [46.08202, -118.69418],
                [46.08141, -118.69409],
                [46.08054, -118.69375],
                [46.07856, -118.69332],
                [46.07786, -118.69318],
                [46.07756, -118.69283],
                [46.07741, -118.69233],
                [46.07717, -118.69169],
                [46.07704, -118.69131],
                [46.07702, -118.69131],
                [46.07652, -118.69055],
                [46.07597, -118.69023],
                [46.07538, -118.69025],
                [46.07429, -118.69034],
                [46.07375, -118.69031],
                [46.07318, -118.68985],
                [46.07183, -118.68925],
                [46.07104, -118.68902],
                [46.07049, -118.68871],
                [46.06957, -118.68805],
                [46.06888, -118.6878],
                [46.06812, -118.68779],
                [46.06767, -118.68741],
                [46.06705, -118.6868],
                [46.06684, -118.68659],
                [46.06512, -118.68606],
                [46.06227, -118.68475],
                [46.06209, -118.68469],
                [46.06134, -118.6838],
                [46.06114, -118.68371],
                [46.05984, -118.68346],
                [46.05967, -118.68339],
                [46.05952, -118.68327],
                [46.05938, -118.68313],
                [46.05914, -118.68273],
                [46.05857, -118.68146],
                [46.05849, -118.681],
                [46.05846, -118.68068],
                [46.05846, -118.68028],
                [46.05845, -118.67995],
                [46.05844, -118.67972],
                [46.0583, -118.67956],
                [46.05809, -118.67958],
                [46.05784, -118.67959],
                [46.0577, -118.67951],
                [46.05758, -118.67956],
                [46.05063, -118.67977],
                [46.05045, -118.67994],
                [46.05036, -118.68021],
                [46.0503, -118.68054],
                [46.05034, -118.68435],
                [46.05013, -118.68475],
                [46.05, -118.6849],
                [46.04974, -118.68496],
                [46.04719, -118.68496],
                [46.04681, -118.68486],
                [46.04661, -118.68486],
                [46.04607, -118.68499],
                [46.04553, -118.68488],
                [46.04504, -118.68435],
                [46.04474, -118.68372],
                [46.04444, -118.68339],
                [46.04398, -118.68332],
                [46.04368, -118.68355],
                [46.04324, -118.68419],
                [46.04288, -118.68472],
                [46.04261, -118.68493],
                [46.04237, -118.68496],
                [46.04164, -118.68498],
                [46.04155, -118.67962],
                [46.04098, -118.67446],
                [46.03945, -118.67464],
                [46.039, -118.67459],
                [46.03569, -118.67461],
                [46.0355, -118.67446],
                [46.03544, -118.67413],
                [46.03544, -118.67256],
                [46.03205, -118.6714]
              ]
            },
            {
              "id": "seg-3a",
              "name": "Segment 3A",
              "line": "Path 3",
              "phases": ["Day 1"],
              "contractor": "Windwave",
              "jurisdiction": "Umatilla County, OR",
              "lengthFt": 10123,
              "geometry": [
                [45.93433, -119.35206],
                [45.93373, -119.35159],
                [45.93369, -119.35076],
                [45.93394, -119.34871],
                [45.93449, -119.34264],
                [45.93116, -119.34109],
                [45.92325, -119.33478],
                [45.92153, -119.33415],
                [45.92318, -119.32517]
              ]
            },
            {
              "id": "seg-3b",
              "name": "Segment 3B",
              "line": "Path 3",
              "phases": ["Day 1"],
              "contractor": "Windwave",
              "jurisdiction": "Umatilla County, OR",
              "lengthFt": 57383,
              "geometry": [
                [46.02532, -119.22235],
                [46.02486, -119.22235],
                [46.02305, -119.22368],
                [46.02033, -119.22464],
                [46.01926, -119.22513],
                [46.01371, -119.22537],
                [46.0118, -119.22533],
                [46.01106, -119.22522],
                [46.0068, -119.22523],
                [46.00688, -119.22997],
                [46.00559, -119.23145],
                [46.00507, -119.23203],
                [46.00452, -119.23268],
                [46.00204, -119.23748],
                [46.00161, -119.23808],
                [46.00118, -119.23851],
                [45.99783, -119.24115],
                [45.99742, -119.24155],
                [45.99712, -119.24202],
                [45.99659, -119.24325],
                [45.99602, -119.24432],
                [45.9958, -119.24532],
                [45.99375, -119.25076],
                [45.99274, -119.2519],
                [45.99139, -119.25251],
                [45.98877, -119.25269],
                [45.98611, -119.2529],
                [45.98557, -119.25319],
                [45.98472, -119.25459],
                [45.98416, -119.25579],
                [45.98345, -119.25639],
                [45.98238, -119.25694],
                [45.98114, -119.25704],
                [45.98052, -119.25732],
                [45.98024, -119.25756],
                [45.97969, -119.25815],
                [45.97927, -119.2588],
                [45.97889, -119.25958],
                [45.97854, -119.26027],
                [45.97804, -119.26095],
                [45.97722, -119.26157],
                [45.97649, -119.26172],
                [45.9759, -119.26185],
                [45.97531, -119.26193],
                [45.97484, -119.26222],
                [45.97439, -119.26255],
                [45.97383, -119.26321],
                [45.9733, -119.2642],
                [45.97285, -119.26517],
                [45.9723, -119.26582],
                [45.97187, -119.26624],
                [45.97134, -119.26661],
                [45.97084, -119.26663],
                [45.97006, -119.26671],
                [45.96962, -119.26687],
                [45.96927, -119.26706],
                [45.96896, -119.26726],
                [45.96846, -119.26768],
                [45.96815, -119.26816],
                [45.96788, -119.26869],
                [45.96767, -119.26926],
                [45.96743, -119.26999],
                [45.96734, -119.27046],
                [45.9678, -119.2967],
                [45.96786, -119.29762],
                [45.96639, -119.30495],
                [45.96623, -119.30657],
                [45.96626, -119.30767],
                [45.96637, -119.30861],
                [45.96655, -119.30943],
                [45.96685, -119.31043],
                [45.96714, -119.31126],
                [45.96743, -119.31233],
                [45.96751, -119.3131],
                [45.96741, -119.31409],
                [45.96729, -119.31487],
                [45.96703, -119.31555],
                [45.96682, -119.31651],
                [45.96591, -119.32217],
                [45.96564, -119.323],
                [45.96519, -119.32423],
                [45.96048, -119.32886],
                [45.95992, -119.32908],
                [45.95746, -119.32943],
                [45.95639, -119.3293],
                [45.95543, -119.3291],
                [45.95315, -119.32851],
                [45.94579, -119.3326],
                [45.94577, -119.33396],
                [45.94404, -119.34131],
                [45.9439, -119.34293],
                [45.9439, -119.3438],
                [45.94463, -119.35133],
                [45.9396, -119.35138],
                [45.93743, -119.35144],
                [45.93594, -119.35115],
                [45.93482, -119.35096],
                [45.93439, -119.35138],
                [45.93433, -119.35206]
              ]
            },
            {
              "id": "seg-3c",
              "name": "Segment 3C",
              "line": "Path 3",
              "phases": ["Day 1"],
              "contractor": "Windwave",
              "jurisdiction": "Benton County, WA",
              "lengthFt": 101167,
              "geometry": [
                [46.02534, -119.22228],
                [46.02396, -119.18131],
                [46.02416, -119.16478],
                [46.02402, -119.15506],
                [46.02375, -119.14358],
                [46.0235, -119.14127],
                [46.02354, -119.133],
                [46.02364, -119.12033],
                [46.03023, -119.12001],
                [46.03123, -119.11979],
                [46.03221, -119.11913],
                [46.0335, -119.11751],
                [46.03831, -119.11141],
                [46.04002, -119.10958],
                [46.04111, -119.1092],
                [46.04168, -119.10925],
                [46.06054, -119.10904],
                [46.06711, -119.10937],
                [46.06663, -119.0391],
                [46.06784, -119.03699],
                [46.0689, -119.03628],
                [46.06987, -119.03508],
                [46.07083, -119.03436],
                [46.07153, -119.0342],
                [46.07183, -119.03443],
                [46.07211, -119.03493],
                [46.07229, -119.03521],
                [46.07252, -119.03535],
                [46.0863, -119.03519],
                [46.08715, -119.03525],
                [46.08745, -119.03534],
                [46.08791, -119.035],
                [46.08838, -119.03453],
                [46.08866, -119.0345],
                [46.08886, -119.03449],
                [46.08911, -119.03467],
                [46.08959, -119.03498],
                [46.0899, -119.03501],
                [46.09047, -119.03497],
                [46.10114, -119.03468],
                [46.10399, -119.03348],
                [46.10524, -119.0329],
                [46.10587, -119.03256],
                [46.10659, -119.03178],
                [46.10708, -119.03112],
                [46.10765, -119.03052],
                [46.10781, -119.03043],
                [46.10826, -119.03031],
                [46.10882, -119.03029],
                [46.10937, -119.03022],
                [46.10977, -119.0302],
                [46.10996, -119.03023],
                [46.11009, -119.03045],
                [46.11027, -119.03088],
                [46.11217, -119.03602],
                [46.11281, -119.03677],
                [46.11417, -119.03876],
                [46.11508, -119.04012],
                [46.11592, -119.04147],
                [46.1165, -119.0426],
                [46.11689, -119.04327],
                [46.1175, -119.04368],
                [46.11835, -119.04412],
                [46.11865, -119.04439],
                [46.11942, -119.04457],
                [46.12008, -119.04453],
                [46.12056, -119.04439],
                [46.1211, -119.04407],
                [46.12145, -119.0439],
                [46.12185, -119.0438],
                [46.12209, -119.04377],
                [46.12275, -119.0442],
                [46.12313, -119.04328],
                [46.12372, -119.04249],
                [46.12435, -119.04184],
                [46.12538, -119.04121],
                [46.12674, -119.04067],
                [46.12789, -119.04019],
                [46.12846, -119.0399],
                [46.12896, -119.03955],
                [46.12939, -119.03897],
                [46.12982, -119.03834],
                [46.13022, -119.03759],
                [46.13097, -119.03643],
                [46.13225, -119.03539],
                [46.13304, -119.03505],
                [46.13414, -119.03491],
                [46.13552, -119.03465],
                [46.13661, -119.03457],
                [46.1372, -119.03428],
                [46.13771, -119.0339],
                [46.13802, -119.03347],
                [46.13874, -119.0338],
                [46.14832, -119.03394],
                [46.15445, -119.03392],
                [46.16139, -119.03385],
                [46.1684, -119.03384]
              ]
            },
            {
              "id": "seg-3d",
              "name": "Segment 3D",
              "line": "Path 3",
              "phases": ["Day 1"],
              "contractor": "Windwave",
              "jurisdiction": "Benton County, WA",
              "lengthFt": 6384,
              "geometry": [
                [46.1684, -119.03384],
                [46.16848, -119.03395],
                [46.16854, -119.03394],
                [46.1701, -119.03394],
                [46.17208, -119.0339],
                [46.17341, -119.03391],
                [46.17342, -119.0337],
                [46.17544, -119.03366],
                [46.17739, -119.03368],
                [46.18285, -119.03366],
                [46.18375, -119.03368],
                [46.18411, -119.03374],
                [46.18422, -119.03379],
                [46.18434, -119.03388],
                [46.18451, -119.03421],
                [46.18458, -119.03444],
                [46.1847, -119.03499],
                [46.18488, -119.03568]
              ]
            },
            {
              "id": "seg-3e",
              "name": "Segment 3E",
              "line": "Path 3",
              "phases": ["Day 1"],
              "contractor": "Windwave",
              "jurisdiction": "Benton County, WA",
              "lengthFt": 56814,
              "geometry": [
                [46.18488, -119.03568],
                [46.18743, -119.04411],
                [46.188, -119.04722],
                [46.18905, -119.05341],
                [46.18936, -119.0544],
                [46.18983, -119.05533],
                [46.19129, -119.05667],
                [46.19259, -119.05748],
                [46.19353, -119.05851],
                [46.19394, -119.05915],
                [46.19427, -119.06011],
                [46.19442, -119.06092],
                [46.1946, -119.07554],
                [46.20181, -119.07546],
                [46.20187, -119.09308],
                [46.20237, -119.09424],
                [46.20291, -119.09544],
                [46.20331, -119.09615],
                [46.20354, -119.09655],
                [46.20371, -119.0966],
                [46.21047, -119.09652],
                [46.21785, -119.08673],
                [46.21998, -119.08565],
                [46.21851, -119.08011],
                [46.21976, -119.07961],
                [46.2222, -119.07802],
                [46.22418, -119.07641],
                [46.22569, -119.07626],
                [46.22662, -119.07633],
                [46.22631, -119.0447],
                [46.22634, -119.04079],
                [46.22678, -119.0391],
                [46.22727, -119.0384],
                [46.21919, -119.02676],
                [46.2128, -119.01722],
                [46.21126, -119.01496],
                [46.21038, -119.01351],
                [46.20972, -119.01451],
                [46.20867, -119.01308],
                [46.20784, -119.01344],
                [46.20715, -119.01357],
                [46.20666, -119.0134],
                [46.20625, -119.01325],
                [46.2052, -119.01329],
                [46.2039, -119.01333],
                [46.20395, -119.01137],
                [46.20414, -119.01092],
                [46.20416, -119.01026],
                [46.20396, -119.00907],
                [46.20351, -119.00839],
                [46.20296, -119.0075],
                [46.20069, -119.00407],
                [46.19809, -119.00044],
                [46.19786, -119.00024],
                [46.19756, -119.00013],
                [46.19697, -119.00011]
              ]
            },
            {
              "id": "seg-3f",
              "name": "Segment 3F",
              "line": "Path 3",
              "phases": ["Day 1"],
              "contractor": "Windwave",
              "jurisdiction": "Walla Walla County, WA",
              "lengthFt": 44359,
              "geometry": [
                [46.19697, -119.00012],
                [46.19672, -119.00012],
                [46.19649, -119.0001],
                [46.19623, -118.99993],
                [46.19596, -118.99965],
                [46.19588, -118.99926],
                [46.19586, -118.99889],
                [46.19583, -118.99679],
                [46.19583, -118.99533],
                [46.19582, -118.995],
                [46.19578, -118.99467],
                [46.19565, -118.9944],
                [46.19545, -118.99408],
                [46.19366, -118.99146],
                [46.19179, -118.98877],
                [46.18902, -118.98478],
                [46.17911, -118.97049],
                [46.17732, -118.96786],
                [46.17654, -118.96672],
                [46.176, -118.96634],
                [46.17527, -118.96582],
                [46.17486, -118.96558],
                [46.17455, -118.96525],
                [46.17467, -118.96498],
                [46.17506, -118.96436],
                [46.17505, -118.96421],
                [46.17484, -118.96388],
                [46.17358, -118.96205],
                [46.17253, -118.9605],
                [46.17203, -118.95975],
                [46.17107, -118.95831],
                [46.17049, -118.95747],
                [46.16923, -118.95556],
                [46.16829, -118.95422],
                [46.16855, -118.9538],
                [46.16758, -118.95246],
                [46.16426, -118.94776],
                [46.16264, -118.94589],
                [46.16064, -118.94393],
                [46.15958, -118.94306],
                [46.15818, -118.94212],
                [46.15682, -118.94138],
                [46.15432, -118.94028],
                [46.14527, -118.93724],
                [46.14029, -118.93578],
                [46.13845, -118.93522],
                [46.13846, -118.93611],
                [46.13437, -118.93472],
                [46.13026, -118.93321],
                [46.12624, -118.93166],
                [46.12509, -118.93114],
                [46.12374, -118.93045],
                [46.1212, -118.92879],
                [46.11901, -118.9272],
                [46.1168, -118.92525],
                [46.11482, -118.92341],
                [46.1111, -118.91975],
                [46.10958, -118.9185],
                [46.10436, -118.91403],
                [46.10379, -118.91372],
                [46.10303, -118.91334],
                [46.10011, -118.91292],
                [46.09999, -118.91261]
              ]
            },
            {
              "id": "seg-3g",
              "name": "Segment 3G",
              "line": "Path 3",
              "phases": ["Day 1"],
              "contractor": "Windwave",
              "jurisdiction": "Walla Walla County, WA",
              "lengthFt": 15292,
              "geometry": [
                [46.13854, -118.93522],
                [46.13858, -118.93424],
                [46.13867, -118.88929],
                [46.12858, -118.88944]
              ]
            },
            {
              "id": "seg-3h",
              "name": "Segment 3H",
              "line": "Path 3",
              "phases": ["Risk Mitigation"],
              "contractor": "Windwave",
              "jurisdiction": "Walla Walla County, WA",
              "lengthFt": 51003,
              "geometry": [
                [46.06932, -119.03571],
                [46.06965, -119.03539],
                [46.06955, -119.03506],
                [46.06905, -119.03526],
                [46.06835, -119.03534],
                [46.06378, -119.03537],
                [46.05833, -119.03553],
                [46.05482, -119.0356],
                [46.05368, -119.03561],
                [46.05354, -119.03562],
                [46.05332, -119.03573],
                [46.053, -119.03599],
                [46.05232, -119.03639],
                [46.052, -119.0365],
                [46.05177, -119.03655],
                [46.05134, -119.03654],
                [46.05106, -119.0365],
                [46.05079, -119.03643],
                [46.05053, -119.03628],
                [46.05034, -119.03605],
                [46.05021, -119.03587],
                [46.05008, -119.03574],
                [46.04993, -119.03567],
                [46.04979, -119.03565],
                [46.04961, -119.03567],
                [46.04928, -119.03575],
                [46.04905, -119.03581],
                [46.04886, -119.03584],
                [46.04855, -119.03578],
                [46.04826, -119.03573],
                [46.0478, -119.03573],
                [46.04657, -119.03578],
                [46.04184, -119.03593],
                [46.03748, -119.03599],
                [46.03758, -119.03582],
                [46.03747, -119.02704],
                [46.0374, -119.02659],
                [46.03725, -119.02598],
                [46.037, -119.02545],
                [46.03637, -119.02473],
                [46.03619, -119.02447],
                [46.03609, -119.02417],
                [46.03604, -119.02382],
                [46.03605, -119.0235],
                [46.03628, -119.02308],
                [46.03684, -119.02228],
                [46.03729, -119.02175],
                [46.03799, -119.02117],
                [46.03854, -119.02054],
                [46.03918, -119.01951],
                [46.03973, -119.01865],
                [46.04018, -119.01802],
                [46.04119, -119.01674],
                [46.04187, -119.01585],
                [46.04258, -119.01492],
                [46.04312, -119.01431],
                [46.04337, -119.01412],
                [46.04367, -119.01394],
                [46.04401, -119.01384],
                [46.04431, -119.01381],
                [46.04462, -119.0139],
                [46.0449, -119.01411],
                [46.04511, -119.01429],
                [46.04532, -119.01444],
                [46.0456, -119.01455],
                [46.04589, -119.01447],
                [46.04613, -119.0143],
                [46.04686, -119.01356],
                [46.04715, -119.01335],
                [46.04756, -119.01322],
                [46.04922, -119.01296],
                [46.04966, -119.01297],
                [46.05044, -119.01322],
                [46.05113, -119.01349],
                [46.05145, -119.01373],
                [46.05219, -119.01438],
                [46.05244, -119.01451],
                [46.05278, -119.01455],
                [46.05429, -119.01455],
                [46.05609, -119.01457],
                [46.05752, -119.01458],
                [46.05818, -119.01456],
                [46.05843, -119.0145],
                [46.05881, -119.01427],
                [46.05918, -119.0139],
                [46.05934, -119.01372],
                [46.06148, -119.01135],
                [46.06264, -119.01007],
                [46.06375, -119.00885],
                [46.06509, -119.00736],
                [46.06593, -119.00646],
                [46.0662, -119.00619],
                [46.06656, -119.00598],
                [46.06691, -119.00595],
                [46.0678, -119.00597],
                [46.06814, -119.00594],
                [46.07022, -119.00538],
                [46.07072, -119.00518],
                [46.07104, -119.00498],
                [46.07137, -119.0046],
                [46.07171, -119.00409],
                [46.07223, -119.00352],
                [46.07261, -119.00314],
                [46.07288, -119.00278],
                [46.0731, -119.00219],
                [46.07323, -119.00166],
                [46.07322, -119.00128],
                [46.07317, -119.00096],
                [46.07305, -119.00051],
                [46.07301, -119.00011],
                [46.07309, -118.99977],
                [46.07322, -118.99958],
                [46.07332, -118.99951],
                [46.07347, -118.9995],
                [46.07361, -118.99953],
                [46.07413, -118.99977],
                [46.07436, -118.99981],
                [46.07453, -118.99976],
                [46.07471, -118.9996],
                [46.07484, -118.99939],
                [46.07492, -118.99919],
                [46.07507, -118.9985],
                [46.0751, -118.99811],
                [46.07508, -118.99748],
                [46.07504, -118.99679],
                [46.07499, -118.99577],
                [46.07505, -118.9952],
                [46.07521, -118.99469],
                [46.07546, -118.9941],
                [46.07562, -118.99363],
                [46.07567, -118.99336],
                [46.07591, -118.9913],
                [46.07599, -118.99051],
                [46.07602, -118.98989],
                [46.07599, -118.98955],
                [46.07596, -118.98928],
                [46.07589, -118.98893],
                [46.07577, -118.98856],
                [46.07553, -118.98784],
                [46.07505, -118.98639],
                [46.07479, -118.98563],
                [46.07447, -118.98467],
                [46.07423, -118.98391],
                [46.07403, -118.98334],
                [46.07386, -118.98275],
                [46.07383, -118.98241],
                [46.07384, -118.98204],
                [46.07396, -118.98159],
                [46.07414, -118.98121],
                [46.07442, -118.98081],
                [46.07467, -118.9805],
                [46.0751, -118.9802],
                [46.07536, -118.98005],
                [46.0763, -118.97971],
                [46.07918, -118.97867],
                [46.08187, -118.97765],
                [46.08162, -118.97732],
                [46.07906, -118.9736],
                [46.0782, -118.97237],
                [46.07697, -118.97064],
                [46.07612, -118.96935],
                [46.07524, -118.96807],
                [46.07442, -118.96688],
                [46.0718, -118.96307],
                [46.07076, -118.96154],
                [46.07022, -118.96061],
                [46.07002, -118.96033],
                [46.06956, -118.95988],
                [46.06944, -118.95973],
                [46.06937, -118.95959],
                [46.06933, -118.95948],
                [46.06931, -118.95928],
                [46.06931, -118.95892],
                [46.06938, -118.9581],
                [46.06949, -118.95689],
                [46.06964, -118.95552],
                [46.06963, -118.95509],
                [46.06958, -118.95451],
                [46.06951, -118.95399],
                [46.06946, -118.95382],
                [46.06932, -118.95362],
                [46.06912, -118.95342],
                [46.0686, -118.95299],
                [46.06845, -118.9529],
                [46.06744, -118.95276],
                [46.06675, -118.95266],
                [46.0653, -118.95247],
                [46.06451, -118.95238],
                [46.06427, -118.95247],
                [46.06412, -118.95275],
                [46.06399, -118.95301],
                [46.06384, -118.95319],
                [46.06365, -118.9533],
                [46.06343, -118.95333],
                [46.06315, -118.9533],
                [46.06281, -118.95315],
                [46.06274, -118.95272]
              ]
            },
            {
              "id": "seg-3i",
              "name": "Segment 3I",
              "line": "Path 3",
              "phases": ["Risk Mitigation"],
              "contractor": "Windwave",
              "jurisdiction": "Walla Walla County, WA",
              "lengthFt": 9118,
              "geometry": [
                [46.06275, -118.95273],
                [46.05853, -118.91979],
                [46.05678, -118.91984]
              ]
            },
            {
              "id": "seg-3j",
              "name": "Segment 3J",
              "line": "Path 3",
              "phases": ["Risk Mitigation"],
              "contractor": "Windwave",
              "jurisdiction": "Walla Walla County, WA",
              "lengthFt": 1985,
              "geometry": [
                [46.05678, -118.91984],
                [46.05667, -118.9143],
                [46.05671, -118.91365],
                [46.0568, -118.91312],
                [46.05693, -118.91253],
                [46.05702, -118.91228],
                [46.05696, -118.9121]
              ]
            },
            {
              "id": "seg-4a",
              "name": "Segment 4A",
              "line": "Path 4",
              "phases": ["Day 1"],
              "contractor": "Fishel",
              "jurisdiction": "Walla Walla County, WA",
              "lengthFt": 12205,
              "geometry": [
                [46.10174, -118.90479],
                [46.10112, -118.90481],
                [46.10137, -118.9076],
                [46.1024, -118.91009],
                [46.11619, -118.90997],
                [46.11668, -118.90992],
                [46.11717, -118.90964],
                [46.1177, -118.90959],
                [46.11873, -118.90867],
                [46.11894, -118.90846],
                [46.12034, -118.90617],
                [46.12089, -118.9055],
                [46.12324, -118.90335],
                [46.12358, -118.90308],
                [46.12365, -118.90312],
                [46.12377, -118.90302],
                [46.1238, -118.90299],
                [46.12371, -118.90295],
                [46.1236, -118.9027],
                [46.12361, -118.90253],
                [46.12396, -118.9016],
                [46.12402, -118.90124],
                [46.12404, -118.90099],
                [46.1241, -118.90067],
                [46.12418, -118.89594],
                [46.1249, -118.89594]
              ]
            }
          ]
        }
      </script>
    </div>
  </div>
</div>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
.esa-button {
  --_btn-height: var(--form-height-md, 40px);
  --_btn-padding-x: var(--form-padding-x-md, 16px);
  --_btn-font-size: var(--form-font-size-md, 14px);
  --_btn-radius: var(--form-radius-md, 6px);
  --_accent: var(--color-primary, #43608a);
  --_accent-hover: var(--color-primary-hover, #39506f);
  --_on: var(--color-text-inverse, #ffffff);
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
  color: var(--_accent);
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
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
.print-header {
  display: none;
}
.map-filterbar {
  display: flex;
  align-items: center;
  gap: var(--spacing-400);
  flex-wrap: wrap;
  margin-bottom: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
}
.map-filterbar__group {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-300);
}
.map-filterbar__label {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.map-filterbar__divider {
  width: 1px;
  align-self: stretch;
  background: var(--color-border);
  margin: 0 var(--spacing-100);
}
.map-filterbar__export {
  margin-left: auto;
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
.map-legend__line {
  width: 22px;
  height: 5px;
  border-radius: var(--radius-full);
  flex-shrink: 0;
}
.burndown {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  margin-top: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.burndown__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-300);
  flex-wrap: wrap;
}
.burndown__title {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.burndown__summary {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
.burndown__summary strong {
  color: var(--st-cleared);
  font-weight: var(--font-weight-bold);
}
.burndown__bar {
  display: flex;
  height: 10px;
  border-radius: var(--radius-full);
  overflow: hidden;
  background: var(--bcn-gray-100);
}
.burndown__bar > div + div {
  border-left: 1px solid var(--color-surface);
}
.burndown__legend {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-200) var(--spacing-500);
}
.burndown__legend-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-150);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
.burndown__swatch {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-050);
  flex-shrink: 0;
}
.burndown__legend-label {
  color: var(--color-text-primary);
}
.burndown__legend-mi {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.burndown__legend-pct {
  color: var(--color-text-tertiary);
}
.ctb {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  margin-top: var(--spacing-400);
  padding: var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.ctb__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-300);
  flex-wrap: wrap;
}
.ctb__title {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.ctb__sub {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
}
.ctb__axisrow {
  display: grid;
  grid-template-columns: 190px 1fr 260px;
  gap: var(--spacing-400);
}
.ctb__axis {
  position: relative;
  height: 18px;
}
.ctb__rows {
  list-style: none;
  margin: 0;
  padding: 0;
}
.insights {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--spacing-400);
  margin-top: var(--spacing-400);
}
.ins-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  padding: var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.ins-card__title {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.ins-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.ins-card__sub {
  margin: calc(-1 * var(--spacing-100)) 0 0;
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
}
.sd__header {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
}
.sd__title {
  margin: 0;
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.sd {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.sd__meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-300) var(--spacing-400);
  margin: 0;
  padding: var(--spacing-400);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.sd__kv {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.sd__kv dt {
  font-size: 0.875rem;
  font-weight: var(--font-weight-medium);
  color: var(--form-label-color);
}
.sd__kv dd,
.sd__section {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.sd__section .esa-badge {
  vertical-align: middle;
  margin-left: var(--spacing-100);
}
.sd__permits {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.pd__header {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
}
.pd__title {
  margin: 0;
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.pd {
  display: flex;
  flex-direction: column;
}
.pd__section {
  padding-block: var(--spacing-400);
}
.pd__section:first-child {
  padding-top: var(--spacing-100);
}
.pd__section-head {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.pd__section-head .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}
.pd__group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.pd__section + .pd__section {
  border-top: 1px solid var(--color-border-light);
}
.pd__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-300);
}
.pd__kv-val {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.pd__activity {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.pd__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-200);
}
.ctb-tick {
  position: absolute;
  top: 0;
  transform: translate(-50%);
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.ctb-tick--today {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}
.ctb-row {
  display: grid;
  grid-template-columns: 190px 1fr 260px;
  gap: var(--spacing-400);
  align-items: center;
  padding: var(--spacing-200) 0;
  border-top: 1px solid var(--color-border-light);
  cursor: pointer;
}
.ctb-row__name {
  display: flex;
  flex-direction: column;
  gap: 1px;
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.ctb-row__sub {
  font-size: 0.75rem;
  font-weight: var(--font-weight-regular);
  color: var(--color-text-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ctb-row__track {
  position: relative;
  height: 12px;
  border-radius: var(--radius-full);
  background: var(--bcn-gray-100);
}
.ctb-row__bar {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 4px;
  border-radius: var(--radius-full);
  opacity: 0.55;
}
.ctb-row__dot {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--color-surface);
  box-shadow: 0 0 0 1px #0000001f;
}
.ctb-row__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
  min-width: 0;
  text-align: right;
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
}
.ins-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-250);
  padding: var(--spacing-200) 0;
}
.ins-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex-shrink: 0;
}
.ins-row__label {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
  font-size: 0.875rem;
  color: var(--color-text-primary);
}
.ins-bar {
  flex: 0 0 72px;
  height: 6px;
  border-radius: var(--radius-full);
  background: var(--bcn-gray-100);
  overflow: hidden;
}
.ins-row__val {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.ins-row + .ins-row {
  border-top: 1px solid var(--color-border-light);
}
.ins-row[data-ins-permit] {
  cursor: pointer;
  margin: 0 calc(-1 * var(--spacing-200));
  padding-inline: var(--spacing-200);
  border-radius: var(--radius-200);
}
.ins-row__sub {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
}
.leaflet-pane,
.leaflet-top,
.leaflet-bottom {
  z-index: 400;
}
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
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
  gap: var(--spacing-400);
  padding: 0 var(--spacing-400);
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
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
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
.nav-sublink.active {
  background: #0000000a;
  color: var(--color-primary);
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
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-primary, #43608a));
  --_badge-text: var(--badge-text-color, var(--color-text-inverse, #fff));
  --_badge-height: var(--badge-height-md, 20px);
  --_badge-font-size: 11px;
  --_badge-padding-x: 6px;
  --_badge-min-width: var(--badge-height-md, 20px);
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
  --_badge-height: var(--badge-height-sm, 16px);
  --_badge-font-size: 10px;
  --_badge-padding-x: 4px;
  --_badge-min-width: var(--badge-height-sm, 16px);
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
```

## Tokens
| Token | Value | Tier |
|---|---|---|
| `--badge-bg` | `#005862` | component |
| `--badge-height-md` | `20px` | component |
| `--badge-height-sm` | `16px` | component |
| `--badge-radius` | `.25rem` | component |
| `--badge-text-color` | `#ffffff` | component |
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
| `--color-accent` | `#f9a134` | semantic |
| `--color-background` | `#fafafa` | semantic |
| `--color-border` | `#dcdcdc` | semantic |
| `--color-border-light` | `#efefef` | semantic |
| `--color-primary` | `#005862` | semantic |
| `--color-primary-hover` | `#00474f` | semantic |
| `--color-surface` | `#ffffff` | semantic |
| `--color-text-inverse` | `#ffffff` | semantic |
| `--color-text-primary` | `#3d3d3d` | semantic |
| `--color-text-secondary` | `#525252` | semantic |
| `--color-text-tertiary` | `#656565` | semantic |
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
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-medium` | `20px` | component |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-small` | `16px` | component |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-050` | `.125rem` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
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
| `--type-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--type-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--type-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
