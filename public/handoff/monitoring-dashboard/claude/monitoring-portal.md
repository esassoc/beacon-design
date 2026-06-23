# Monitoring Portal

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **monitoring-dashboard** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/monitoring/dashboard/
- **Section element:** `<div>`
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
              <a href="/beacon-design/prototypes/monitoring/dashboard" class="nav-sublink active">
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
                <a class="breadcrumb-item" href="#project"> Delta Conveyance </a
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
                <span class="breadcrumb-item" aria-current="page"> Monitoring Portal </span>
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
                Monitoring Portal
              </h1>
              <span
                class="bcn-status-chip"
                data-status="cleared"
                style="--_chip: var(--st-cleared, #2e7571)"
              >
                <span class="bcn-status-chip__dot"></span>
                <span class="bcn-status-chip__label">Connected</span>
              </span>
            </div>
            <div class="page-layout__utilities">
              <div>
                <span
                  class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
                >
                  <button class="esa-button__native" type="button">
                    <span class="esa-button__label"> Edit Connection </span>
                  </button>
                </span>
              </div>
            </div>
          </section>
          <section class="page-layout__content">
            <div class="bcn-mstats sidebar" data-gap="lg">
              <!-- ── Active Observations (large, left) ── -->
              <div class="esa-card">
                <div class="esa-card__header">
                  <div class="esa-card__header-content">
                    <div class="esa-card__titles">
                      <h3 class="esa-card__title">Active Observations</h3>
                    </div>
                  </div>
                </div>
                <div class="esa-card__body">
                  <div class="stack" data-gap="lg">
                    <!-- big number + donut, side by side -->
                    <div class="cluster" data-gap="lg" data-justify="between" data-align="start">
                      <div class="esa-stat">
                        <div class="esa-stat__value">9</div>
                        <div class="esa-stat__label">Active observations</div>
                        <div class="esa-stat__sub">13 Total in the past 30 days</div>
                      </div>
                      <div class="cluster" data-gap="md" data-align="center">
                        <div
                          class="bcn-mstats__donut"
                          style="--_stops: #2e7571 0% 66.67%, #f2770e 66.67% 100%"
                          aria-hidden="true"
                        >
                          <span class="bcn-mstats__donut-hole">9</span>
                        </div>
                        <ul class="bcn-mstats__legend stack" data-gap="2xs">
                          <li class="bcn-mstats__legend-item">
                            <span class="bcn-mstats__dot" style="--_c: #2e7571"></span>
                            <span class="type-body-small">Nesting Birds (6)</span>
                          </li>
                          <li class="bcn-mstats__legend-item">
                            <span class="bcn-mstats__dot" style="--_c: #f2770e"></span>
                            <span class="type-body-small">Biological Resources (3)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- Outstanding Issues mini-panel -->
                    <section class="bcn-mstats__issues stack" data-gap="sm">
                      <h4 class="bcn-mstats__issues-title type-label">Outstanding Issues (4)</h4>
                      <ul class="stack" data-gap="2xs">
                        <li class="bcn-mstats__issue">
                          <span class="esa-badge esa-badge--warning esa-badge--sm">
                            <span class="esa-badge__text">30d</span>
                          </span>
                          <a class="bcn-mstats__issue-link" href="#SWHA-2289">SWHA-2289</a>
                        </li>
                        <li class="bcn-mstats__issue">
                          <span class="esa-badge esa-badge--warning esa-badge--sm">
                            <span class="esa-badge__text">14d</span>
                          </span>
                          <a class="bcn-mstats__issue-link" href="#KILL-7655">KILL-7655</a>
                        </li>
                        <li class="bcn-mstats__issue">
                          <span class="esa-badge esa-badge--warning esa-badge--sm">
                            <span class="esa-badge__text">14d</span>
                          </span>
                          <a class="bcn-mstats__issue-link" href="#UNK-5895">UNK-5895</a>
                        </li>
                        <li class="bcn-mstats__issue">
                          <span class="esa-badge esa-badge--warning esa-badge--sm">
                            <span class="esa-badge__text">13d</span>
                          </span>
                          <a class="bcn-mstats__issue-link" href="#CORA-2695">CORA-2695</a>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
              <!-- ── three stacked cards (right) ── -->
              <div class="stack" data-gap="lg">
                <!-- Nesting Birds -->
                <div class="esa-card">
                  <div class="esa-card__header">
                    <div class="esa-card__header-content">
                      <div class="esa-card__titles">
                        <h3 class="esa-card__title">Nesting Birds</h3>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body">
                    <div class="stack" data-gap="md">
                      <div class="esa-stat">
                        <div class="esa-stat__value">6</div>
                        <div class="esa-stat__label">Nesting birds</div>
                        <div class="esa-stat__sub">9 Total in the past 30 days</div>
                      </div>
                      <ul class="bcn-mstats__bars stack" data-gap="xs">
                        <li class="bcn-mstats__bar-row">
                          <span class="bcn-mstats__bar-label type-body-small">CORA</span>
                          <span class="bcn-mstats__bar-track">
                            <span
                              class="bcn-mstats__bar-fill"
                              style="--_c: #2e7571; width: 100%"
                            ></span>
                          </span>
                          <span class="bcn-mstats__bar-value type-label">2</span>
                        </li>
                        <li class="bcn-mstats__bar-row">
                          <span class="bcn-mstats__bar-label type-body-small">SWHA</span>
                          <span class="bcn-mstats__bar-track">
                            <span
                              class="bcn-mstats__bar-fill"
                              style="--_c: #2e7571; width: 50%"
                            ></span>
                          </span>
                          <span class="bcn-mstats__bar-value type-label">1</span>
                        </li>
                        <li class="bcn-mstats__bar-row">
                          <span class="bcn-mstats__bar-label type-body-small">KILL</span>
                          <span class="bcn-mstats__bar-track">
                            <span
                              class="bcn-mstats__bar-fill"
                              style="--_c: #2e7571; width: 50%"
                            ></span>
                          </span>
                          <span class="bcn-mstats__bar-value type-label">1</span>
                        </li>
                        <li class="bcn-mstats__bar-row">
                          <span class="bcn-mstats__bar-label type-body-small">MALL</span>
                          <span class="bcn-mstats__bar-track">
                            <span
                              class="bcn-mstats__bar-fill"
                              style="--_c: #2e7571; width: 50%"
                            ></span>
                          </span>
                          <span class="bcn-mstats__bar-value type-label">1</span>
                        </li>
                        <li class="bcn-mstats__bar-row">
                          <span class="bcn-mstats__bar-label type-body-small">UNK</span>
                          <span class="bcn-mstats__bar-track">
                            <span
                              class="bcn-mstats__bar-fill"
                              style="--_c: #bdbdbd; width: 50%"
                            ></span>
                          </span>
                          <span class="bcn-mstats__bar-value type-label">1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Compliance Concerns -->
                <div class="esa-card">
                  <div class="esa-card__header">
                    <div class="esa-card__header-content">
                      <div class="esa-card__titles">
                        <h3 class="esa-card__title">Compliance Concerns</h3>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body">
                    <div class="esa-stat">
                      <div class="esa-stat__value">1</div>
                      <div class="esa-stat__label">Active compliance concerns</div>
                      <div class="esa-stat__sub">1 Total in the past 30 days</div>
                    </div>
                  </div>
                </div>
                <!-- Biological Resources -->
                <div class="esa-card">
                  <div class="esa-card__header">
                    <div class="esa-card__header-content">
                      <div class="esa-card__titles">
                        <h3 class="esa-card__title">Biological Resources</h3>
                      </div>
                    </div>
                  </div>
                  <div class="esa-card__body">
                    <div class="stack" data-gap="md">
                      <div class="esa-stat">
                        <div class="esa-stat__value">3</div>
                        <div class="esa-stat__label">Biological resources</div>
                        <div class="esa-stat__sub">3 Total in the past 30 days</div>
                      </div>
                      <ul class="bcn-mstats__bars stack" data-gap="xs">
                        <li class="bcn-mstats__bar-row">
                          <span class="bcn-mstats__bar-label type-body-small">SWHA foraging</span>
                          <span class="bcn-mstats__bar-track">
                            <span
                              class="bcn-mstats__bar-fill"
                              style="--_c: #f2770e; width: 100%"
                            ></span>
                          </span>
                          <span class="bcn-mstats__bar-value type-label">2</span>
                        </li>
                        <li class="bcn-mstats__bar-row">
                          <span class="bcn-mstats__bar-label type-body-small"
                            >Habitat / burrows</span
                          >
                          <span class="bcn-mstats__bar-track">
                            <span
                              class="bcn-mstats__bar-fill"
                              style="--_c: #f2770e; width: 50%"
                            ></span>
                          </span>
                          <span class="bcn-mstats__bar-value type-label">1</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section class="cc">
              <div class="cc__bar">
                <h2 class="cc__title">Commitment Compliance</h2>
                <div class="cc__controls">
                  <div class="cc__ctx">
                    <span class="cc__ctx-label">Show</span>
                    <esa-button-toggle id="cc-needs" value="needs" size="sm"></esa-button-toggle>
                  </div>
                  <div class="cc__ctx">
                    <span class="cc__ctx-label">Group by</span>
                    <esa-button-toggle id="cc-group" value="species" size="sm"></esa-button-toggle>
                  </div>
                </div>
              </div>
              <!-- Group by source (default) — the two lanes -->
              <div class="cc__pane" id="cc-by-source">
                <section class="cc-group">
                  <header class="cc-group__head">
                    <span class="cc-group__name">Compliance concerns</span>
                    <span class="cc-badge">1</span>
                  </header>
                  <div class="cc-group__cards">
                    <details
                      class="bcn-obs"
                      data-needs-action="true"
                      data-species="Swainson’s Hawk"
                      data-date="2026-06-16"
                    >
                      <summary class="bcn-obs__summary" data-kind="concern">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__concern-icon" aria-label="Compliance concern"
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
                                d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                              ></path>
                              <path d="M12 9v4"></path>
                              <path d="M12 17h.01"></path>
                            </svg>
                          </span>
                        </span>
                        <span class="bcn-obs__name"
                          >Staging within the SWHA buffer before clearance</span
                        >
                        <span class="bcn-obs__id">CC-1042</span>
                        <span class="bcn-obs__meta">raised 2026-06-16 · DCTR2-DH-010</span>
                        <span class="bcn-obs__spacer"></span>
                        <span
                          class="bcn-status-chip"
                          data-status="open"
                          style="--_chip: var(--st-open, #ef4444)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Open</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          ILLUSTRATIVE SAMPLE — the geotech export has no real compliance concerns
                          yet. Geotechnical staging equipment was observed inside the Swainson’s
                          hawk no-disturbance buffer at DCTR2-DH-010 before clearance was issued.
                          The designated biologist halted staging and notified the construction
                          lead.
                          <a class="bcn-obs__detail-link" href="#concern/CC-1042">View Concern</a>
                        </p>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-39"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-39</span>
                              <span class="bcn-crow__title"
                                >Conduct Preconstruction Surveys and Implement Protective Measures
                                to Minimize Disturbance of Swainson's Hawk (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                  </div>
                </section>
                <section class="cc-group">
                  <header class="cc-group__head">
                    <span class="cc-group__name">Species observations</span>
                    <span class="cc-badge">5</span>
                  </header>
                  <div class="cc-group__cards">
                    <details
                      class="bcn-obs"
                      data-needs-action="true"
                      data-species="Swainson’s Hawk"
                      data-date="2026-05-18"
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">SWHA</span>
                        <span class="bcn-obs__name">Swainson’s Hawk</span>
                        <span class="bcn-obs__id">SWHA-2289</span>
                        <span class="bcn-obs__meta">observed 2026-05-18 · DCTR2-DH-010</span>
                        <span class="bcn-obs__spacer"></span>
                        <span class="bcn-obs__fledge">~33d to fledge</span>
                        <span
                          class="bcn-status-chip"
                          data-status="active"
                          style="--_chip: var(--st-active, #f2770e)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Active</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          Active SWHA nest in a tree on the north side of Twin Cities Road. One
                          adult sitting (presumably incubating); a second adult foraging and
                          delivering food. Not disturbed by the preconstruction survey along the
                          public roadway or at the bore site.
                          <a class="bcn-obs__detail-link" href="#observation/SWHA-2289"
                            >View Observation</a
                          >
                        </p>
                        <div class="bcn-obs__fledge-panel">
                          <div class="bcn-fledge" data-fledged="false">
                            <div class="bcn-fledge__band">
                              <div class="bcn-fledge__count">
                                <span class="bcn-fledge__num"
                                  >~33<span class="bcn-fledge__unit">d</span></span
                                >
                                <span class="bcn-fledge__caption">to fledge</span>
                              </div>
                              <div
                                class="bcn-fledge__rail"
                                role="img"
                                aria-label="Observed May 18, est. hatch Jun 8, est. fledge Jul 20; ~33 days to fledge"
                              >
                                <div class="bcn-fledge__track">
                                  <span class="bcn-fledge__fill" style="width: 47.6%"></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="true"
                                    style="left: 0%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="true"
                                    style="left: 33.3%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot bcn-fledge__dot--end"
                                    data-reached="false"
                                    style="left: 100%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__today"
                                    style="left: 47.6%"
                                    aria-hidden="true"
                                  ></span>
                                </div>
                                <div class="bcn-fledge__caps">
                                  <span class="bcn-fledge__cap bcn-fledge__cap--start">
                                    <span class="bcn-fledge__cap-label">Observed</span>
                                    <span class="bcn-fledge__cap-date">May 18</span>
                                  </span>
                                  <span
                                    class="bcn-fledge__cap bcn-fledge__cap--mid"
                                    style="left: 33.3%"
                                  >
                                    <span class="bcn-fledge__cap-label">Est. hatch</span>
                                    <span class="bcn-fledge__cap-date">Jun 8</span>
                                  </span>
                                  <span class="bcn-fledge__cap bcn-fledge__cap--end">
                                    <span class="bcn-fledge__cap-label">Est. fledge</span>
                                    <span class="bcn-fledge__cap-date">Jul 20</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p class="bcn-fledge__note">
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
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </span>
                              <span
                                >Swainson’s hawk: ~38–42 day nestling period. ±4 day estimate —
                                guidance for rescheduling, not a guarantee.</span
                              >
                            </p>
                          </div>
                        </div>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-39"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-39</span>
                              <span class="bcn-crow__title"
                                >Conduct Preconstruction Surveys and Implement Protective Measures
                                to Minimize Disturbance of Swainson's Hawk (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="BIO-36a"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-36a</span>
                              <span class="bcn-crow__title"
                                >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                                Birds and Raptors and Implement Protective Measures to Avoid
                                Disturbance of Nesting Birds and Raptors (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                    <details
                      class="bcn-obs"
                      data-needs-action="true"
                      data-species="Common Raven"
                      data-date="2026-06-04"
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">CORA</span>
                        <span class="bcn-obs__name">Common Raven</span>
                        <span class="bcn-obs__id">CORA-2695</span>
                        <span class="bcn-obs__meta">observed 2026-06-04 · DCRAI-DH-009</span>
                        <span class="bcn-obs__spacer"></span>
                        <span class="bcn-obs__fledge">~25d to fledge</span>
                        <span
                          class="bcn-status-chip"
                          data-status="active"
                          style="--_chip: var(--st-active, #f2770e)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Active</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          Both ravens perched outside the nest during the preconstruction survey.
                          <a class="bcn-obs__detail-link" href="#observation/CORA-2695"
                            >View Observation</a
                          >
                        </p>
                        <div class="bcn-obs__fledge-panel">
                          <div class="bcn-fledge" data-fledged="false">
                            <div class="bcn-fledge__band">
                              <div class="bcn-fledge__count">
                                <span class="bcn-fledge__num"
                                  >~25<span class="bcn-fledge__unit">d</span></span
                                >
                                <span class="bcn-fledge__caption">to fledge</span>
                              </div>
                              <div
                                class="bcn-fledge__rail"
                                role="img"
                                aria-label="Observed Jun 4, est. hatch Jun 18, est. fledge Jul 12; ~25 days to fledge"
                              >
                                <div class="bcn-fledge__track">
                                  <span class="bcn-fledge__fill" style="width: 34.2%"></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="true"
                                    style="left: 0%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="false"
                                    style="left: 36.8%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot bcn-fledge__dot--end"
                                    data-reached="false"
                                    style="left: 100%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__today"
                                    style="left: 34.2%"
                                    aria-hidden="true"
                                  ></span>
                                </div>
                                <div class="bcn-fledge__caps">
                                  <span class="bcn-fledge__cap bcn-fledge__cap--start">
                                    <span class="bcn-fledge__cap-label">Observed</span>
                                    <span class="bcn-fledge__cap-date">Jun 4</span>
                                  </span>
                                  <span
                                    class="bcn-fledge__cap bcn-fledge__cap--mid"
                                    style="left: 36.8%"
                                  >
                                    <span class="bcn-fledge__cap-label">Est. hatch</span>
                                    <span class="bcn-fledge__cap-date">Jun 18</span>
                                  </span>
                                  <span class="bcn-fledge__cap bcn-fledge__cap--end">
                                    <span class="bcn-fledge__cap-label">Est. fledge</span>
                                    <span class="bcn-fledge__cap-date">Jul 12</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p class="bcn-fledge__note">
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
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </span>
                              <span
                                >Common raven: ~28–35 day nestling period. ±4 day estimate.</span
                              >
                            </p>
                          </div>
                        </div>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-36a"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-36a</span>
                              <span class="bcn-crow__title"
                                >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                                Birds and Raptors and Implement Protective Measures to Avoid
                                Disturbance of Nesting Birds and Raptors (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                    <details
                      class="bcn-obs"
                      data-needs-action="false"
                      data-species="Common Raven"
                      data-date="2026-05-29"
                      hidden=""
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">CORA</span>
                        <span class="bcn-obs__name">Common Raven</span>
                        <span class="bcn-obs__id">CORA-5830</span>
                        <span class="bcn-obs__meta">observed 2026-05-29</span>
                        <span class="bcn-obs__spacer"></span>
                        <span class="bcn-obs__fledge">~-3d to fledge</span>
                        <span
                          class="bcn-status-chip"
                          data-status="cleared"
                          style="--_chip: var(--st-cleared, #2e7571)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Cleared</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          Multiple ravens observed around the nest; one in the nest. 6/8: ravens
                          perched high on the tower outside the nest and foraging — appear to have
                          fledged.
                          <a class="bcn-obs__detail-link" href="#observation/CORA-5830"
                            >View Observation</a
                          >
                        </p>
                        <div class="bcn-obs__fledge-panel">
                          <div class="bcn-fledge" data-fledged="true">
                            <div class="bcn-fledge__band">
                              <div class="bcn-fledge__count">
                                <span class="bcn-fledge__num">Fledged</span>
                                <span class="bcn-fledge__caption">nest is clear</span>
                              </div>
                              <div
                                class="bcn-fledge__rail"
                                role="img"
                                aria-label="Observed May 29, est. hatch May 30, est. fledge Jun 14; ~-3 days to fledge"
                              >
                                <div class="bcn-fledge__track">
                                  <span class="bcn-fledge__fill" style="width: 100%"></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="true"
                                    style="left: 0%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="true"
                                    style="left: 6.3%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot bcn-fledge__dot--end"
                                    data-reached="true"
                                    style="left: 100%"
                                  ></span>
                                </div>
                                <div class="bcn-fledge__caps">
                                  <span class="bcn-fledge__cap bcn-fledge__cap--start">
                                    <span class="bcn-fledge__cap-label">Observed</span>
                                    <span class="bcn-fledge__cap-date">May 29</span>
                                  </span>
                                  <span
                                    class="bcn-fledge__cap bcn-fledge__cap--mid"
                                    style="left: 6.3%"
                                  >
                                    <span class="bcn-fledge__cap-label">Est. hatch</span>
                                    <span class="bcn-fledge__cap-date">May 30</span>
                                  </span>
                                  <span class="bcn-fledge__cap bcn-fledge__cap--end">
                                    <span class="bcn-fledge__cap-label">Est. fledge</span>
                                    <span class="bcn-fledge__cap-date">Jun 14</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p class="bcn-fledge__note">
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
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </span>
                              <span
                                >Common raven: ~28–35 day nestling period. Young appear fledged —
                                buffer clearing.</span
                              >
                            </p>
                          </div>
                        </div>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-36a"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-36a</span>
                              <span class="bcn-crow__title"
                                >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                                Birds and Raptors and Implement Protective Measures to Avoid
                                Disturbance of Nesting Birds and Raptors (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                    <details
                      class="bcn-obs"
                      data-needs-action="true"
                      data-species="Killdeer"
                      data-date="2026-06-03"
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">KILL</span>
                        <span class="bcn-obs__name">Killdeer</span>
                        <span class="bcn-obs__id">KILL-7655</span>
                        <span class="bcn-obs__meta">observed 2026-06-03 · DCTR2-DH-100</span>
                        <span class="bcn-obs__spacer"></span>
                        <span class="bcn-obs__fledge">~14d to fledge</span>
                        <span
                          class="bcn-status-chip"
                          data-status="active"
                          style="--_chip: var(--st-active, #f2770e)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Active</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          One bird on the nest; tried to lead us away as we neared the site. Four
                          eggs present.
                          <a class="bcn-obs__detail-link" href="#observation/KILL-7655"
                            >View Observation</a
                          >
                        </p>
                        <div class="bcn-obs__fledge-panel">
                          <div class="bcn-fledge" data-fledged="false">
                            <div class="bcn-fledge__band">
                              <div class="bcn-fledge__count">
                                <span class="bcn-fledge__num"
                                  >~14<span class="bcn-fledge__unit">d</span></span
                                >
                                <span class="bcn-fledge__caption">to fledge</span>
                              </div>
                              <div
                                class="bcn-fledge__rail"
                                role="img"
                                aria-label="Observed Jun 3, est. hatch Jun 27, est. fledge Jul 1; ~14 days to fledge"
                              >
                                <div class="bcn-fledge__track">
                                  <span class="bcn-fledge__fill" style="width: 50%"></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="true"
                                    style="left: 0%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="false"
                                    style="left: 85.7%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot bcn-fledge__dot--end"
                                    data-reached="false"
                                    style="left: 100%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__today"
                                    style="left: 50%"
                                    aria-hidden="true"
                                  ></span>
                                </div>
                                <div class="bcn-fledge__caps">
                                  <span class="bcn-fledge__cap bcn-fledge__cap--start">
                                    <span class="bcn-fledge__cap-label">Observed</span>
                                    <span class="bcn-fledge__cap-date">Jun 3</span>
                                  </span>
                                  <span
                                    class="bcn-fledge__cap bcn-fledge__cap--mid"
                                    style="left: 85.7%"
                                  >
                                    <span class="bcn-fledge__cap-label">Est. hatch</span>
                                    <span class="bcn-fledge__cap-date">Jun 27</span>
                                  </span>
                                  <span class="bcn-fledge__cap bcn-fledge__cap--end">
                                    <span class="bcn-fledge__cap-label">Est. fledge</span>
                                    <span class="bcn-fledge__cap-date">Jul 1</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p class="bcn-fledge__note">
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
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </span>
                              <span
                                >Killdeer: ~24–28 day incubation; precocial — young leave the nest
                                within ~1 day of hatch.</span
                              >
                            </p>
                          </div>
                        </div>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-36a"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-36a</span>
                              <span class="bcn-crow__title"
                                >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                                Birds and Raptors and Implement Protective Measures to Avoid
                                Disturbance of Nesting Birds and Raptors (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                    <details
                      class="bcn-obs"
                      data-needs-action="true"
                      data-species="Mallard"
                      data-date="2026-06-02"
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">MALL</span>
                        <span class="bcn-obs__name">Mallard</span>
                        <span class="bcn-obs__id">MALL-1520</span>
                        <span class="bcn-obs__meta">observed 2026-06-02 · DCRDS-DH-294</span>
                        <span class="bcn-obs__spacer"></span>
                        <span class="bcn-obs__fledge">~13d to fledge</span>
                        <span
                          class="bcn-status-chip"
                          data-status="active"
                          style="--_chip: var(--st-active, #f2770e)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Active</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          A pair observed. Female stayed with the nest and had eggs.
                          <a class="bcn-obs__detail-link" href="#observation/MALL-1520"
                            >View Observation</a
                          >
                        </p>
                        <div class="bcn-obs__fledge-panel">
                          <div class="bcn-fledge" data-fledged="false">
                            <div class="bcn-fledge__band">
                              <div class="bcn-fledge__count">
                                <span class="bcn-fledge__num"
                                  >~13<span class="bcn-fledge__unit">d</span></span
                                >
                                <span class="bcn-fledge__caption">to fledge</span>
                              </div>
                              <div
                                class="bcn-fledge__rail"
                                role="img"
                                aria-label="Observed Jun 2, est. hatch Jun 28, est. fledge Jun 30; ~13 days to fledge"
                              >
                                <div class="bcn-fledge__track">
                                  <span class="bcn-fledge__fill" style="width: 53.6%"></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="true"
                                    style="left: 0%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="false"
                                    style="left: 92.9%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot bcn-fledge__dot--end"
                                    data-reached="false"
                                    style="left: 100%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__today"
                                    style="left: 53.6%"
                                    aria-hidden="true"
                                  ></span>
                                </div>
                                <div class="bcn-fledge__caps">
                                  <span class="bcn-fledge__cap bcn-fledge__cap--start">
                                    <span class="bcn-fledge__cap-label">Observed</span>
                                    <span class="bcn-fledge__cap-date">Jun 2</span>
                                  </span>
                                  <span
                                    class="bcn-fledge__cap bcn-fledge__cap--mid"
                                    style="left: 92.9%"
                                  >
                                    <span class="bcn-fledge__cap-label">Est. hatch</span>
                                    <span class="bcn-fledge__cap-date">Jun 28</span>
                                  </span>
                                  <span class="bcn-fledge__cap bcn-fledge__cap--end">
                                    <span class="bcn-fledge__cap-label">Est. fledge</span>
                                    <span class="bcn-fledge__cap-date">Jun 30</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p class="bcn-fledge__note">
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
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </span>
                              <span
                                >Mallard: ~26–28 day incubation; precocial — ducklings leave the
                                nest within ~1 day of hatch.</span
                              >
                            </p>
                          </div>
                        </div>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-36a"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-36a</span>
                              <span class="bcn-crow__title"
                                >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                                Birds and Raptors and Implement Protective Measures to Avoid
                                Disturbance of Nesting Birds and Raptors (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                    <details
                      class="bcn-obs"
                      data-needs-action="true"
                      data-species="Unknown raptor"
                      data-date="2026-06-03"
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">UNK</span>
                        <span class="bcn-obs__name">Unknown raptor</span>
                        <span class="bcn-obs__id">UNK-5895</span>
                        <span class="bcn-obs__meta">observed 2026-06-03 · DCTR2-DH-100</span>
                        <span class="bcn-obs__spacer"></span>
                        <span
                          class="bcn-status-chip"
                          data-status="active"
                          style="--_chip: var(--st-active, #f2770e)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Active</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          Large stick nest with a raptor in it. Too far to identify to species and
                          the site could not be accessed, so no closer ID was made.
                          <a class="bcn-obs__detail-link" href="#observation/UNK-5895"
                            >View Observation</a
                          >
                        </p>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-36a"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-36a</span>
                              <span class="bcn-crow__title"
                                >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                                Birds and Raptors and Implement Protective Measures to Avoid
                                Disturbance of Nesting Birds and Raptors (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="BIO-37"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-37: Conduct Surveys for Golden Eagle and Avoid Disturbance of Occupied Nests (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-37</span>
                              <span class="bcn-crow__title"
                                >Conduct Surveys for Golden Eagle and Avoid Disturbance of Occupied
                                Nests (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                    <details
                      class="bcn-obs"
                      data-needs-action="false"
                      data-species="Swainson’s Hawk"
                      data-date="2026-06-04"
                      hidden=""
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">SWHA</span>
                        <span class="bcn-obs__name">Swainson’s Hawk</span>
                        <span class="bcn-obs__id">SWHA-0604</span>
                        <span class="bcn-obs__meta">observed 2026-06-04 · DCRAI-DH-006</span>
                        <span class="bcn-obs__spacer"></span>
                        <span
                          class="bcn-status-chip"
                          data-status="tracking"
                          style="--_chip: var(--st-tracking, #7c7c7c)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Tracking</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          Swainson’s hawk observed foraging overhead. No nest at the site.
                          <a class="bcn-obs__detail-link" href="#observation/SWHA-0604"
                            >View Observation</a
                          >
                        </p>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-39"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-39</span>
                              <span class="bcn-crow__title"
                                >Conduct Preconstruction Surveys and Implement Protective Measures
                                to Minimize Disturbance of Swainson's Hawk (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                    <details
                      class="bcn-obs"
                      data-needs-action="false"
                      data-species="Swainson’s Hawk"
                      data-date="2026-06-09"
                      hidden=""
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">SWHA</span>
                        <span class="bcn-obs__name">Swainson’s Hawk</span>
                        <span class="bcn-obs__id">SWHA-0609</span>
                        <span class="bcn-obs__meta">observed 2026-06-09 · DCRAI-DH-012</span>
                        <span class="bcn-obs__spacer"></span>
                        <span
                          class="bcn-status-chip"
                          data-status="tracking"
                          style="--_chip: var(--st-tracking, #7c7c7c)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Tracking</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          Swainson’s hawk observed soaring overhead to the west. No nest at the
                          site.
                          <a class="bcn-obs__detail-link" href="#observation/SWHA-0609"
                            >View Observation</a
                          >
                        </p>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-39"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-39</span>
                              <span class="bcn-crow__title"
                                >Conduct Preconstruction Surveys and Implement Protective Measures
                                to Minimize Disturbance of Swainson's Hawk (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                    <details
                      class="bcn-obs"
                      data-needs-action="false"
                      data-species="Rodent burrows"
                      data-date="2026-06-15"
                      hidden=""
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">HAB</span>
                        <span class="bcn-obs__name">Rodent burrows</span>
                        <span class="bcn-obs__id">HAB-0615</span>
                        <span class="bcn-obs__meta">observed 2026-06-15 · DCBPP-DH-066</span>
                        <span class="bcn-obs__spacer"></span>
                        <span
                          class="bcn-status-chip"
                          data-status="tracking"
                          style="--_chip: var(--st-tracking, #7c7c7c)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Tracking</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          Two small rodent burrows flagged within the project footprint; several
                          more flagged along the access road. Crew asked to avoid the road north of
                          the berm (many burrows, not all flagged). 6/16: crew has been avoiding
                          driving over burrow entrances.
                          <a class="bcn-obs__detail-link" href="#observation/HAB-0615"
                            >View Observation</a
                          >
                        </p>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-40"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-40: Conduct Surveys and Minimize Impacts on Burrowing Owl (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-40</span>
                              <span class="bcn-crow__title"
                                >Conduct Surveys and Minimize Impacts on Burrowing Owl (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="BIO-47"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-47: Conduct Preconstruction Survey for American Badger and Implement Avoidance and Minimization Measures (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-47</span>
                              <span class="bcn-crow__title"
                                >Conduct Preconstruction Survey for American Badger and Implement
                                Avoidance and Minimization Measures (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                  </div>
                </section>
              </div>
              <!-- Group by date (reverse-chronological log) -->
              <div class="cc__pane" id="cc-by-date" hidden="">
                <section class="cc-group">
                  <header class="cc-group__head">
                    <span class="cc-group__name">Tuesday, June 16, 2026</span>
                    <span class="cc-badge">1</span>
                  </header>
                  <div class="cc-group__cards">
                    <details
                      class="bcn-obs"
                      data-needs-action="true"
                      data-species="Swainson’s Hawk"
                      data-date="2026-06-16"
                    >
                      <summary class="bcn-obs__summary" data-kind="concern">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__concern-icon" aria-label="Compliance concern"
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
                                d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                              ></path>
                              <path d="M12 9v4"></path>
                              <path d="M12 17h.01"></path>
                            </svg>
                          </span>
                        </span>
                        <span class="bcn-obs__name"
                          >Staging within the SWHA buffer before clearance</span
                        >
                        <span class="bcn-obs__id">CC-1042</span>
                        <span class="bcn-obs__meta">raised 2026-06-16 · DCTR2-DH-010</span>
                        <span class="bcn-obs__spacer"></span>
                        <span
                          class="bcn-status-chip"
                          data-status="open"
                          style="--_chip: var(--st-open, #ef4444)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Open</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          ILLUSTRATIVE SAMPLE — the geotech export has no real compliance concerns
                          yet. Geotechnical staging equipment was observed inside the Swainson’s
                          hawk no-disturbance buffer at DCTR2-DH-010 before clearance was issued.
                          The designated biologist halted staging and notified the construction
                          lead.
                          <a class="bcn-obs__detail-link" href="#concern/CC-1042">View Concern</a>
                        </p>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-39"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-39</span>
                              <span class="bcn-crow__title"
                                >Conduct Preconstruction Surveys and Implement Protective Measures
                                to Minimize Disturbance of Swainson's Hawk (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                  </div>
                </section>
                <section class="cc-group" hidden="">
                  <header class="cc-group__head">
                    <span class="cc-group__name">Monday, June 15, 2026</span>
                    <span class="cc-badge">0</span>
                  </header>
                  <div class="cc-group__cards">
                    <details
                      class="bcn-obs"
                      data-needs-action="false"
                      data-species="Rodent burrows"
                      data-date="2026-06-15"
                      hidden=""
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">HAB</span>
                        <span class="bcn-obs__name">Rodent burrows</span>
                        <span class="bcn-obs__id">HAB-0615</span>
                        <span class="bcn-obs__meta">observed 2026-06-15 · DCBPP-DH-066</span>
                        <span class="bcn-obs__spacer"></span>
                        <span
                          class="bcn-status-chip"
                          data-status="tracking"
                          style="--_chip: var(--st-tracking, #7c7c7c)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Tracking</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          Two small rodent burrows flagged within the project footprint; several
                          more flagged along the access road. Crew asked to avoid the road north of
                          the berm (many burrows, not all flagged). 6/16: crew has been avoiding
                          driving over burrow entrances.
                          <a class="bcn-obs__detail-link" href="#observation/HAB-0615"
                            >View Observation</a
                          >
                        </p>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-40"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-40: Conduct Surveys and Minimize Impacts on Burrowing Owl (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-40</span>
                              <span class="bcn-crow__title"
                                >Conduct Surveys and Minimize Impacts on Burrowing Owl (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="BIO-47"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-47: Conduct Preconstruction Survey for American Badger and Implement Avoidance and Minimization Measures (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-47</span>
                              <span class="bcn-crow__title"
                                >Conduct Preconstruction Survey for American Badger and Implement
                                Avoidance and Minimization Measures (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                  </div>
                </section>
                <section class="cc-group" hidden="">
                  <header class="cc-group__head">
                    <span class="cc-group__name">Tuesday, June 9, 2026</span>
                    <span class="cc-badge">0</span>
                  </header>
                  <div class="cc-group__cards">
                    <details
                      class="bcn-obs"
                      data-needs-action="false"
                      data-species="Swainson’s Hawk"
                      data-date="2026-06-09"
                      hidden=""
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">SWHA</span>
                        <span class="bcn-obs__name">Swainson’s Hawk</span>
                        <span class="bcn-obs__id">SWHA-0609</span>
                        <span class="bcn-obs__meta">observed 2026-06-09 · DCRAI-DH-012</span>
                        <span class="bcn-obs__spacer"></span>
                        <span
                          class="bcn-status-chip"
                          data-status="tracking"
                          style="--_chip: var(--st-tracking, #7c7c7c)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Tracking</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          Swainson’s hawk observed soaring overhead to the west. No nest at the
                          site.
                          <a class="bcn-obs__detail-link" href="#observation/SWHA-0609"
                            >View Observation</a
                          >
                        </p>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-39"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-39</span>
                              <span class="bcn-crow__title"
                                >Conduct Preconstruction Surveys and Implement Protective Measures
                                to Minimize Disturbance of Swainson's Hawk (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                  </div>
                </section>
                <section class="cc-group">
                  <header class="cc-group__head">
                    <span class="cc-group__name">Thursday, June 4, 2026</span>
                    <span class="cc-badge">1</span>
                  </header>
                  <div class="cc-group__cards">
                    <details
                      class="bcn-obs"
                      data-needs-action="true"
                      data-species="Common Raven"
                      data-date="2026-06-04"
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">CORA</span>
                        <span class="bcn-obs__name">Common Raven</span>
                        <span class="bcn-obs__id">CORA-2695</span>
                        <span class="bcn-obs__meta">observed 2026-06-04 · DCRAI-DH-009</span>
                        <span class="bcn-obs__spacer"></span>
                        <span class="bcn-obs__fledge">~25d to fledge</span>
                        <span
                          class="bcn-status-chip"
                          data-status="active"
                          style="--_chip: var(--st-active, #f2770e)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Active</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          Both ravens perched outside the nest during the preconstruction survey.
                          <a class="bcn-obs__detail-link" href="#observation/CORA-2695"
                            >View Observation</a
                          >
                        </p>
                        <div class="bcn-obs__fledge-panel">
                          <div class="bcn-fledge" data-fledged="false">
                            <div class="bcn-fledge__band">
                              <div class="bcn-fledge__count">
                                <span class="bcn-fledge__num"
                                  >~25<span class="bcn-fledge__unit">d</span></span
                                >
                                <span class="bcn-fledge__caption">to fledge</span>
                              </div>
                              <div
                                class="bcn-fledge__rail"
                                role="img"
                                aria-label="Observed Jun 4, est. hatch Jun 18, est. fledge Jul 12; ~25 days to fledge"
                              >
                                <div class="bcn-fledge__track">
                                  <span class="bcn-fledge__fill" style="width: 34.2%"></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="true"
                                    style="left: 0%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="false"
                                    style="left: 36.8%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot bcn-fledge__dot--end"
                                    data-reached="false"
                                    style="left: 100%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__today"
                                    style="left: 34.2%"
                                    aria-hidden="true"
                                  ></span>
                                </div>
                                <div class="bcn-fledge__caps">
                                  <span class="bcn-fledge__cap bcn-fledge__cap--start">
                                    <span class="bcn-fledge__cap-label">Observed</span>
                                    <span class="bcn-fledge__cap-date">Jun 4</span>
                                  </span>
                                  <span
                                    class="bcn-fledge__cap bcn-fledge__cap--mid"
                                    style="left: 36.8%"
                                  >
                                    <span class="bcn-fledge__cap-label">Est. hatch</span>
                                    <span class="bcn-fledge__cap-date">Jun 18</span>
                                  </span>
                                  <span class="bcn-fledge__cap bcn-fledge__cap--end">
                                    <span class="bcn-fledge__cap-label">Est. fledge</span>
                                    <span class="bcn-fledge__cap-date">Jul 12</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p class="bcn-fledge__note">
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
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </span>
                              <span
                                >Common raven: ~28–35 day nestling period. ±4 day estimate.</span
                              >
                            </p>
                          </div>
                        </div>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-36a"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-36a</span>
                              <span class="bcn-crow__title"
                                >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                                Birds and Raptors and Implement Protective Measures to Avoid
                                Disturbance of Nesting Birds and Raptors (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                    <details
                      class="bcn-obs"
                      data-needs-action="false"
                      data-species="Swainson’s Hawk"
                      data-date="2026-06-04"
                      hidden=""
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">SWHA</span>
                        <span class="bcn-obs__name">Swainson’s Hawk</span>
                        <span class="bcn-obs__id">SWHA-0604</span>
                        <span class="bcn-obs__meta">observed 2026-06-04 · DCRAI-DH-006</span>
                        <span class="bcn-obs__spacer"></span>
                        <span
                          class="bcn-status-chip"
                          data-status="tracking"
                          style="--_chip: var(--st-tracking, #7c7c7c)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Tracking</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          Swainson’s hawk observed foraging overhead. No nest at the site.
                          <a class="bcn-obs__detail-link" href="#observation/SWHA-0604"
                            >View Observation</a
                          >
                        </p>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-39"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-39</span>
                              <span class="bcn-crow__title"
                                >Conduct Preconstruction Surveys and Implement Protective Measures
                                to Minimize Disturbance of Swainson's Hawk (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                  </div>
                </section>
                <section class="cc-group">
                  <header class="cc-group__head">
                    <span class="cc-group__name">Wednesday, June 3, 2026</span>
                    <span class="cc-badge">2</span>
                  </header>
                  <div class="cc-group__cards">
                    <details
                      class="bcn-obs"
                      data-needs-action="true"
                      data-species="Killdeer"
                      data-date="2026-06-03"
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">KILL</span>
                        <span class="bcn-obs__name">Killdeer</span>
                        <span class="bcn-obs__id">KILL-7655</span>
                        <span class="bcn-obs__meta">observed 2026-06-03 · DCTR2-DH-100</span>
                        <span class="bcn-obs__spacer"></span>
                        <span class="bcn-obs__fledge">~14d to fledge</span>
                        <span
                          class="bcn-status-chip"
                          data-status="active"
                          style="--_chip: var(--st-active, #f2770e)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Active</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          One bird on the nest; tried to lead us away as we neared the site. Four
                          eggs present.
                          <a class="bcn-obs__detail-link" href="#observation/KILL-7655"
                            >View Observation</a
                          >
                        </p>
                        <div class="bcn-obs__fledge-panel">
                          <div class="bcn-fledge" data-fledged="false">
                            <div class="bcn-fledge__band">
                              <div class="bcn-fledge__count">
                                <span class="bcn-fledge__num"
                                  >~14<span class="bcn-fledge__unit">d</span></span
                                >
                                <span class="bcn-fledge__caption">to fledge</span>
                              </div>
                              <div
                                class="bcn-fledge__rail"
                                role="img"
                                aria-label="Observed Jun 3, est. hatch Jun 27, est. fledge Jul 1; ~14 days to fledge"
                              >
                                <div class="bcn-fledge__track">
                                  <span class="bcn-fledge__fill" style="width: 50%"></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="true"
                                    style="left: 0%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="false"
                                    style="left: 85.7%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot bcn-fledge__dot--end"
                                    data-reached="false"
                                    style="left: 100%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__today"
                                    style="left: 50%"
                                    aria-hidden="true"
                                  ></span>
                                </div>
                                <div class="bcn-fledge__caps">
                                  <span class="bcn-fledge__cap bcn-fledge__cap--start">
                                    <span class="bcn-fledge__cap-label">Observed</span>
                                    <span class="bcn-fledge__cap-date">Jun 3</span>
                                  </span>
                                  <span
                                    class="bcn-fledge__cap bcn-fledge__cap--mid"
                                    style="left: 85.7%"
                                  >
                                    <span class="bcn-fledge__cap-label">Est. hatch</span>
                                    <span class="bcn-fledge__cap-date">Jun 27</span>
                                  </span>
                                  <span class="bcn-fledge__cap bcn-fledge__cap--end">
                                    <span class="bcn-fledge__cap-label">Est. fledge</span>
                                    <span class="bcn-fledge__cap-date">Jul 1</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p class="bcn-fledge__note">
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
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </span>
                              <span
                                >Killdeer: ~24–28 day incubation; precocial — young leave the nest
                                within ~1 day of hatch.</span
                              >
                            </p>
                          </div>
                        </div>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-36a"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-36a</span>
                              <span class="bcn-crow__title"
                                >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                                Birds and Raptors and Implement Protective Measures to Avoid
                                Disturbance of Nesting Birds and Raptors (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                    <details
                      class="bcn-obs"
                      data-needs-action="true"
                      data-species="Unknown raptor"
                      data-date="2026-06-03"
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">UNK</span>
                        <span class="bcn-obs__name">Unknown raptor</span>
                        <span class="bcn-obs__id">UNK-5895</span>
                        <span class="bcn-obs__meta">observed 2026-06-03 · DCTR2-DH-100</span>
                        <span class="bcn-obs__spacer"></span>
                        <span
                          class="bcn-status-chip"
                          data-status="active"
                          style="--_chip: var(--st-active, #f2770e)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Active</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          Large stick nest with a raptor in it. Too far to identify to species and
                          the site could not be accessed, so no closer ID was made.
                          <a class="bcn-obs__detail-link" href="#observation/UNK-5895"
                            >View Observation</a
                          >
                        </p>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-36a"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-36a</span>
                              <span class="bcn-crow__title"
                                >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                                Birds and Raptors and Implement Protective Measures to Avoid
                                Disturbance of Nesting Birds and Raptors (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="BIO-37"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-37: Conduct Surveys for Golden Eagle and Avoid Disturbance of Occupied Nests (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-37</span>
                              <span class="bcn-crow__title"
                                >Conduct Surveys for Golden Eagle and Avoid Disturbance of Occupied
                                Nests (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                  </div>
                </section>
                <section class="cc-group">
                  <header class="cc-group__head">
                    <span class="cc-group__name">Tuesday, June 2, 2026</span>
                    <span class="cc-badge">1</span>
                  </header>
                  <div class="cc-group__cards">
                    <details
                      class="bcn-obs"
                      data-needs-action="true"
                      data-species="Mallard"
                      data-date="2026-06-02"
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">MALL</span>
                        <span class="bcn-obs__name">Mallard</span>
                        <span class="bcn-obs__id">MALL-1520</span>
                        <span class="bcn-obs__meta">observed 2026-06-02 · DCRDS-DH-294</span>
                        <span class="bcn-obs__spacer"></span>
                        <span class="bcn-obs__fledge">~13d to fledge</span>
                        <span
                          class="bcn-status-chip"
                          data-status="active"
                          style="--_chip: var(--st-active, #f2770e)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Active</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          A pair observed. Female stayed with the nest and had eggs.
                          <a class="bcn-obs__detail-link" href="#observation/MALL-1520"
                            >View Observation</a
                          >
                        </p>
                        <div class="bcn-obs__fledge-panel">
                          <div class="bcn-fledge" data-fledged="false">
                            <div class="bcn-fledge__band">
                              <div class="bcn-fledge__count">
                                <span class="bcn-fledge__num"
                                  >~13<span class="bcn-fledge__unit">d</span></span
                                >
                                <span class="bcn-fledge__caption">to fledge</span>
                              </div>
                              <div
                                class="bcn-fledge__rail"
                                role="img"
                                aria-label="Observed Jun 2, est. hatch Jun 28, est. fledge Jun 30; ~13 days to fledge"
                              >
                                <div class="bcn-fledge__track">
                                  <span class="bcn-fledge__fill" style="width: 53.6%"></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="true"
                                    style="left: 0%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="false"
                                    style="left: 92.9%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot bcn-fledge__dot--end"
                                    data-reached="false"
                                    style="left: 100%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__today"
                                    style="left: 53.6%"
                                    aria-hidden="true"
                                  ></span>
                                </div>
                                <div class="bcn-fledge__caps">
                                  <span class="bcn-fledge__cap bcn-fledge__cap--start">
                                    <span class="bcn-fledge__cap-label">Observed</span>
                                    <span class="bcn-fledge__cap-date">Jun 2</span>
                                  </span>
                                  <span
                                    class="bcn-fledge__cap bcn-fledge__cap--mid"
                                    style="left: 92.9%"
                                  >
                                    <span class="bcn-fledge__cap-label">Est. hatch</span>
                                    <span class="bcn-fledge__cap-date">Jun 28</span>
                                  </span>
                                  <span class="bcn-fledge__cap bcn-fledge__cap--end">
                                    <span class="bcn-fledge__cap-label">Est. fledge</span>
                                    <span class="bcn-fledge__cap-date">Jun 30</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p class="bcn-fledge__note">
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
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </span>
                              <span
                                >Mallard: ~26–28 day incubation; precocial — ducklings leave the
                                nest within ~1 day of hatch.</span
                              >
                            </p>
                          </div>
                        </div>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-36a"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-36a</span>
                              <span class="bcn-crow__title"
                                >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                                Birds and Raptors and Implement Protective Measures to Avoid
                                Disturbance of Nesting Birds and Raptors (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                  </div>
                </section>
                <section class="cc-group" hidden="">
                  <header class="cc-group__head">
                    <span class="cc-group__name">Friday, May 29, 2026</span>
                    <span class="cc-badge">0</span>
                  </header>
                  <div class="cc-group__cards">
                    <details
                      class="bcn-obs"
                      data-needs-action="false"
                      data-species="Common Raven"
                      data-date="2026-05-29"
                      hidden=""
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">CORA</span>
                        <span class="bcn-obs__name">Common Raven</span>
                        <span class="bcn-obs__id">CORA-5830</span>
                        <span class="bcn-obs__meta">observed 2026-05-29</span>
                        <span class="bcn-obs__spacer"></span>
                        <span class="bcn-obs__fledge">~-3d to fledge</span>
                        <span
                          class="bcn-status-chip"
                          data-status="cleared"
                          style="--_chip: var(--st-cleared, #2e7571)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Cleared</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          Multiple ravens observed around the nest; one in the nest. 6/8: ravens
                          perched high on the tower outside the nest and foraging — appear to have
                          fledged.
                          <a class="bcn-obs__detail-link" href="#observation/CORA-5830"
                            >View Observation</a
                          >
                        </p>
                        <div class="bcn-obs__fledge-panel">
                          <div class="bcn-fledge" data-fledged="true">
                            <div class="bcn-fledge__band">
                              <div class="bcn-fledge__count">
                                <span class="bcn-fledge__num">Fledged</span>
                                <span class="bcn-fledge__caption">nest is clear</span>
                              </div>
                              <div
                                class="bcn-fledge__rail"
                                role="img"
                                aria-label="Observed May 29, est. hatch May 30, est. fledge Jun 14; ~-3 days to fledge"
                              >
                                <div class="bcn-fledge__track">
                                  <span class="bcn-fledge__fill" style="width: 100%"></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="true"
                                    style="left: 0%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="true"
                                    style="left: 6.3%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot bcn-fledge__dot--end"
                                    data-reached="true"
                                    style="left: 100%"
                                  ></span>
                                </div>
                                <div class="bcn-fledge__caps">
                                  <span class="bcn-fledge__cap bcn-fledge__cap--start">
                                    <span class="bcn-fledge__cap-label">Observed</span>
                                    <span class="bcn-fledge__cap-date">May 29</span>
                                  </span>
                                  <span
                                    class="bcn-fledge__cap bcn-fledge__cap--mid"
                                    style="left: 6.3%"
                                  >
                                    <span class="bcn-fledge__cap-label">Est. hatch</span>
                                    <span class="bcn-fledge__cap-date">May 30</span>
                                  </span>
                                  <span class="bcn-fledge__cap bcn-fledge__cap--end">
                                    <span class="bcn-fledge__cap-label">Est. fledge</span>
                                    <span class="bcn-fledge__cap-date">Jun 14</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p class="bcn-fledge__note">
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
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </span>
                              <span
                                >Common raven: ~28–35 day nestling period. Young appear fledged —
                                buffer clearing.</span
                              >
                            </p>
                          </div>
                        </div>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-36a"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-36a</span>
                              <span class="bcn-crow__title"
                                >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                                Birds and Raptors and Implement Protective Measures to Avoid
                                Disturbance of Nesting Birds and Raptors (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                  </div>
                </section>
                <section class="cc-group">
                  <header class="cc-group__head">
                    <span class="cc-group__name">Monday, May 18, 2026</span>
                    <span class="cc-badge">1</span>
                  </header>
                  <div class="cc-group__cards">
                    <details
                      class="bcn-obs"
                      data-needs-action="true"
                      data-species="Swainson’s Hawk"
                      data-date="2026-05-18"
                    >
                      <summary class="bcn-obs__summary" data-kind="observation">
                        <span class="bcn-obs__chev" aria-hidden="true"
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
                        </span>
                        <span class="bcn-obs__badge">SWHA</span>
                        <span class="bcn-obs__name">Swainson’s Hawk</span>
                        <span class="bcn-obs__id">SWHA-2289</span>
                        <span class="bcn-obs__meta">observed 2026-05-18 · DCTR2-DH-010</span>
                        <span class="bcn-obs__spacer"></span>
                        <span class="bcn-obs__fledge">~33d to fledge</span>
                        <span
                          class="bcn-status-chip"
                          data-status="active"
                          style="--_chip: var(--st-active, #f2770e)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Active</span>
                        </span>
                      </summary>
                      <div class="bcn-obs__body">
                        <p class="bcn-obs__desc">
                          Active SWHA nest in a tree on the north side of Twin Cities Road. One
                          adult sitting (presumably incubating); a second adult foraging and
                          delivering food. Not disturbed by the preconstruction survey along the
                          public roadway or at the bore site.
                          <a class="bcn-obs__detail-link" href="#observation/SWHA-2289"
                            >View Observation</a
                          >
                        </p>
                        <div class="bcn-obs__fledge-panel">
                          <div class="bcn-fledge" data-fledged="false">
                            <div class="bcn-fledge__band">
                              <div class="bcn-fledge__count">
                                <span class="bcn-fledge__num"
                                  >~33<span class="bcn-fledge__unit">d</span></span
                                >
                                <span class="bcn-fledge__caption">to fledge</span>
                              </div>
                              <div
                                class="bcn-fledge__rail"
                                role="img"
                                aria-label="Observed May 18, est. hatch Jun 8, est. fledge Jul 20; ~33 days to fledge"
                              >
                                <div class="bcn-fledge__track">
                                  <span class="bcn-fledge__fill" style="width: 47.6%"></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="true"
                                    style="left: 0%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot"
                                    data-reached="true"
                                    style="left: 33.3%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__dot bcn-fledge__dot--end"
                                    data-reached="false"
                                    style="left: 100%"
                                  ></span>
                                  <span
                                    class="bcn-fledge__today"
                                    style="left: 47.6%"
                                    aria-hidden="true"
                                  ></span>
                                </div>
                                <div class="bcn-fledge__caps">
                                  <span class="bcn-fledge__cap bcn-fledge__cap--start">
                                    <span class="bcn-fledge__cap-label">Observed</span>
                                    <span class="bcn-fledge__cap-date">May 18</span>
                                  </span>
                                  <span
                                    class="bcn-fledge__cap bcn-fledge__cap--mid"
                                    style="left: 33.3%"
                                  >
                                    <span class="bcn-fledge__cap-label">Est. hatch</span>
                                    <span class="bcn-fledge__cap-date">Jun 8</span>
                                  </span>
                                  <span class="bcn-fledge__cap bcn-fledge__cap--end">
                                    <span class="bcn-fledge__cap-label">Est. fledge</span>
                                    <span class="bcn-fledge__cap-date">Jul 20</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p class="bcn-fledge__note">
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
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </span>
                              <span
                                >Swainson’s hawk: ~38–42 day nestling period. ±4 day estimate —
                                guidance for rescheduling, not a guarantee.</span
                              >
                            </p>
                          </div>
                        </div>
                        <section class="bcn-obs__section">
                          <h4 class="bcn-obs__h">Relevant commitments</h4>
                          <div class="bcn-obs__rows">
                            <div
                              class="bcn-crow"
                              data-code="BIO-39"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-39</span>
                              <span class="bcn-crow__title"
                                >Conduct Preconstruction Surveys and Implement Protective Measures
                                to Minimize Disturbance of Swainson's Hawk (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="BIO-36a"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                            >
                              <span class="bcn-crow__code">BIO-36a</span>
                              <span class="bcn-crow__title"
                                >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                                Birds and Raptors and Implement Protective Measures to Avoid
                                Disturbance of Nesting Birds and Raptors (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                            <div
                              class="bcn-crow"
                              data-code="EC-14"
                              role="button"
                              tabindex="0"
                              aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                            >
                              <span class="bcn-crow__code">EC-14</span>
                              <span class="bcn-crow__title"
                                >Construction Best Management Practices for Biological Resources
                                (FEIR)</span
                              >
                              <span class="bcn-crow__open" aria-hidden="true"
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
                              </span>
                            </div>
                          </div>
                        </section>
                      </div>
                    </details>
                  </div>
                </section>
              </div>
            </section>
          </section>
        </div>
      </div>
      <esa-side-dialog
        id="cmt-drawer"
        size="md"
        style="--z-modal: 1300; --z-modal-backdrop: 1250; --side-dialog-width: 640px"
        position="right"
      >
        <div slot="header" class="cmt-head">
          <span class="cmt-head__code" id="cmt-code">—</span>
          <span class="cmt-head__title" id="cmt-title">—</span>
        </div>
        <article class="cmt-body" id="cmt-body"></article>
        <span slot="footer" class="cmt-foot">
          <span class="cmt-foot__src" id="cmt-source"></span>
          <span id="cmt-close"
            ><span
              class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Close </span>
              </button>
            </span>
          </span>
        </span>
      </esa-side-dialog>
      <script type="application/json" id="cmt-data">
        {
          "AES-4a": {
            "code": "AES-4a",
            "title": "Limit Construction Outside of Daylight Hours within 0.25 Mile of Residents at the Intakes (FEIR)",
            "source": "EIR",
            "text": "All Project Alternatives\n\nWithin occupational safety standards, DWR will minimize the impact of nighttime construction light and glare on residences within 0.25 mile of the intake construction sites by limiting non-tunnel-related surface construction, except for periodic continuous concrete pours at the intakes and tunnel shafts, after daylight hours (which vary according to season), minimizing the use of high-wattage lighting sources to operate in the dark, and minimizing introduction of new nighttime light and glare sources in these areas. a.&nbsp; DWR will establish a construction hotline, which will enable residents to report any construction violation including construction activities outside of daylight hours.\n\n&nbsp;\nImplementation of this measure, while taking into account occupational safety requirements, will reduce the use of nighttime lighting and provide residents the means to report any observed deviation from the mitigation requirements."
          },
          "AES-4b": {
            "code": "AES-4b",
            "title": "Minimize Fugitive Light from Portable Sources Used for Construction",
            "source": "EIR",
            "text": "All Project AlternativesDWR will minimize fugitive light, or light trespass, from portable lighting sources used during construction by adhering to the following practices, at a minimum.Project-related light and glare will be minimized to the maximum extent feasible, given safety considerations.&nbsp;Color-corrected lights will be used.&nbsp;Portable lights will be operated at the lowest feasible wattage and height.&nbsp;All lights will be screened and directed down toward work activities and away from the night sky and nearby residents to the maximum extent safely possible.&nbsp;The number of nighttime lights used will be minimized to the greatest extent feasible.Implementation of this measure will reduce—to the extent as governed by site-specific safety and fisheries protection requirements—the overall amount of new daytime and nighttime light and glare introduced to the project vicinity during construction."
          },
          "AES-4c": {
            "code": "AES-4c",
            "title": "Install Visual Barriers along Access Routes, Where Necessary, to Prevent Light Spill from Truck Headlights toward Residences (FEIR)",
            "source": "EIR",
            "text": "&nbsp;\n1. DWR will evaluate construction routes and identify portions of access routes where the use of visual barriers would minimize the introduction of new light and glare from construction truck headlights and the impact on nearby residents. Access routes could include SR 160, Hood-Franklin Road, West Walnut Grove Road, Mountain House Road, South Holt Road, Byron Highway, West Bethany Road, and various levee roads.\na. DWR will install a visual barrier along portions of access routes where screening would &nbsp;&nbsp;prevent excessive light spill toward residents from truck headlights being used during nighttime construction activities. DWR will also coordinate with local recreational interested parties to protect sensitive nighttime recreational resources, such as nighttime fishing spots, from construction truck headlight light spill. These visual barriers will meet the following performance criteria.\ni. The visual barrier will be a minimum of 5 feet high and will provide a continuous surface impenetrable by light. This height may be obtained by installing a temporary structure, such as fencing (e.g., chain link with privacy slats) or a semi-permanent structure, such as a concrete barrier (e.g., a roadway median barrier or architectural concrete wall system) retrofitted with an approved visual screen, if necessary, to meet the required height.\nii. The visual barriers will be of a material or have a color treatment appropriate for the location and traffic safety requirements. The use of glossy materials will be avoided.\nThis measure will minimize the extent of construction truck headlight glare intruding into nearby residential areas."
          },
          "AG-1": {
            "code": "AG-1",
            "title": "Preserve Agricultural Land (FEIR)",
            "source": "EIR",
            "text": "Permanently converted Important Farmland will be mitigated at an acreage ratio of at least 1:1. This mitigation ratio will be achieved through a combination of acquisition and dedication of agricultural land, acquisition of development rights or conservation easements to permanently protect agricultural land, or payment of in-lieu fees to fully fund the acquisition and maintenance of such real property interests by a third party. To the extent feasible, any rights to land acquired for the purpose of mitigation of agricultural land conversion will be of equal or better farmland quality than the land that was permanently converted. Therefore, impacts on Prime Farmland will be mitigated through protection of Prime Farmland; impacts on Farmland of Statewide Importance will be mitigated through protection of Prime Farmland or Farmland of Statewide Importance; impacts on Farmland of Local Importance will be mitigated through protection of Prime Farmland, Farmland of Statewide Importance, or Farmland of Local Importance. Because Unique Farmland is land used to grow a crop considered by the State of California to be an agricultural product of economic importance, mitigation for impacts on Unique Farmland will be targeted at lands that are also mapped as Unique Farmland.\n\nPreservation of agricultural lands will be within the Delta counties (i.e., Sacramento, San Joaquin, Contra Costa, Alameda, Solano, and Yolo).\nAny agricultural conservation easements acquired pursuant to this mitigation strategy will be held by a qualified organization that has the legal and technical ability to hold and administer agricultural conservation easements for the purpose of conserving and maintaining lands in agricultural production.\nDWR will also consider an optional approach of funding farm improvements to enhance the productivity of the lower-quality farmland, consistent with Agricultural Land Stewardship Consideration A2."
          },
          "AG-3": {
            "code": "AG-3",
            "title": "Replacement or Relocation of Affected Infrastructure Supporting Agricultural Properties (FEIR)",
            "source": "EIR",
            "text": "To the extent feasible, project designs will be modified to avoid any conflicts with irrigation or drainage infrastructure servicing farmland located outside the construction footprint for the project. DWR will consult with the neighboring landowners and agricultural operators to require that construction of the project facilities adequately avoids the impact on agricultural infrastructure servicing their properties, based on their understanding of local site conditions. If such impacts cannot be avoided through a redesign of local project design elements, DWR will implement at least one of the following options:&nbsp;\n\n\nProvide new water wells until diversion connection is reestablished.&nbsp;&nbsp;\nRelocate and/or replace wells, pipelines, power lines, drainage systems and other infrastructure that are needed to support ongoing agricultural uses.&nbsp;\n\nIn the event that none of the above options is feasible, as part of a negotiated settlement process, DWR will compensate owners for production losses attributable to reductions in water supply from affected diversions, losses associated with disruption in drainage facilities, and losses associated with other infrastructure disruptions.&nbsp;"
          },
          "AQ-1": {
            "code": "AQ-1",
            "title": "Offset Construction-Generated Criteria Pollutants in the Sacramento Valley Air Basin (FEIR)",
            "source": "EIR",
            "text": "Performance Standard&nbsp;\nPrior to issuance of construction contracts, DWR will enter into a memorandum of understanding (MOU) <span\nstyle='mso-bookmark:_Hlk94690555'><span\nstyle='mso-element:field-begin'><span\nstyle='mso-bookmark:_Hlk67997509'> TC &quot;<span\nstyle='mso-bookmark:_Toc127537975'>memorandum of understanding (MOU)&quot;\n\\f A \\l &quot;1&quot; with SMAQMD or develop an alternative or complementary mitigation program (as discussed below) to reduce NOX and PM10. Emissions above the federal de minimis thresholds[1] will be reduced to net zero (0). Emissions not above the de minimis thresholds, but above SMAQMD&rsquo;s thresholds, will be reduced to quantities below the air district&rsquo;s thresholds. \nEmissions generated by project construction have been quantified as part of this Final EIR. Although this inventory could be used exclusively to inform the required mitigation commitment, the methods used to quantify emissions in the Final EIR were conservative. They also do not account for any additional reductions that may be achieved by future state and federal regulations that reduce the emissions intensity of equipment and vehicles, nor do they account for reduction strategies that may be implemented by DWR pursuant to other mitigation measures (e.g., Mitigation Measure AQ-9). Accordingly, this Final EIR likely overestimates actual emissions that would be generated by construction of the project. DWR may, therefore, reanalyze criteria pollutant emissions from construction of the project to update the required reduction commitment to achieve performance standard. \nAn updated emissions analysis conducted for the project will be performed using approved emissions models and methods available at the time of the reanalysis. The analysis must use the latest available engineering data for the project, inclusive of any required environmental commitments or emissions reduction strategies. Consistent with the methodology used in this Final EIR, emissions factors may account for enacted regulations that will influence future year emissions intensities (e.g., fuel efficiency standards for on-road vehicles). \nMitigation Agreement with SMAQMD \n1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DWR will enter into an MOU with SMAQMD to reduce NOX and PM10 according to the performance standard described above.\na.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The mitigation offset fee amount will be determined at the time of mitigation to fund one or more emissions reduction projects. NOx reduction projects must occur within the SFNA[2] (or in a nearby area of equal or higher nonattainment classification, as allowed under 40 CFR 93.158(2)). SMAQMD will require an additional administrative fee of no less than 5% of the total offset fee. The mitigation offset fee will be determined by DWR and SMAQMD based on the type of projects available at the time of mitigation. This fee is intended to fund emissions reduction projects to achieve reductions. Documentation of payment will be provided to DWR or its designated representative.\nb.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The MOU will include details regarding the annual calculation of required offsets DWR must achieve, funds to be paid, administrative fees, and the timing of the emissions reduction projects. Reduction projects may be administrated through SMAQMD&rsquo;s HDLEVIP, which include the Carl Moyer and Sacramento Emergency Clean Air Transportation (SECAT)<span\nstyle='mso-bookmark:_Hlk67997509'><span\nstyle='mso-element:field-end'>&nbsp;Programs. The HDLEVIP and associated incentive programs are managed and implemented by SMAQMD on behalf of all air districts within the SFNA. Example projects funded through the Carl Moyer Program include the following.\nl&nbsp; Independent Construction Caterpillar 633D Scraper Tier 2 Engine Repower\nl&nbsp; Kiewit Pacific Construction Caterpillar 16G Grader Diesel Catalyst Retrofit\nl&nbsp; Commercial Low-Emission Propane Generator\nl&nbsp; American Engineering &amp; Asphalt Caterpillar 825C Compactor Tier 2 Engine Repower\nl&nbsp; B&amp;D Geerts Construction Caterpillar 826C Compactor Tier 1 Engine Repower\nThe SECAT program differs from the Carl Moyer Program in that it can only fund projects for on-road vehicles. However, the SECAT program can also finance operational emissions reductions, including facility modifications and out-of-cycle replacements; the Carl Moyer Program is only available to fund the incremental capital costs of control measures.\nc.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Acceptance of the mitigation fee by SMAQMD will serve as an acknowledgment and commitment by SMAQMD to: (1) implement an emissions reduction project(s) within a timeframe to be determined based on the type of project(s) selected after receipt of the mitigation fee designed to achieve the emissions reduction objectives; and (2) provide documentation to DWR or its designated representative describing the project(s) funded by the mitigation fee, including the amount of emissions reduced (tons per year) from the emissions reduction project(s). To qualify under this mitigation measure, the specific emissions reduction project(s) must result in emissions reductions in the SVAB/SFNA (or in a nearby area of equal or higher nonattainment classification, as allowed under 40 CFR 93.158(2)) that are real, surplus, quantifiable, enforceable, and will not otherwise be achieved through compliance with existing regulatory requirements or any other legal requirement. Funding will need to be received prior to contracting with participants and should allow enough time to receive and process applications to fund and implement off-site reduction projects prior to commencement of the project activities that are being offset. This will roughly equate to one year prior to the required mitigation; additional lead time may be necessary depending on the level of off-site emissions reductions required for a specific year.\nAlternative or Complementary Mitigation Program \nShould DWR be unable to enter what they regard as a satisfactory agreement with SMAQMD, or should DWR enter an agreement with SMAQMD but find themselves unable to meet the performance standards established above, DWR will develop an alternative or complementary off-site mitigation program to reduce NOX and PM10 emissions according to the performance standard described above. \nDWR will establish a program to fund emissions reduction projects through grants, ERCs, or similar mechanisms. DWR may identify emissions reduction projects through consultation with SMAQMD, other regional air districts, CARB, CEC, local governments, transit agencies, or others, as needed. Potential projects could include but are not limited to the following.\nl&nbsp; Alternative fuel, low-emissions school buses, transit buses, and other vehicles.\nl&nbsp; Diesel engine retrofits and repowers.\nl&nbsp; Locomotive retrofits and repowers.\nl&nbsp; Electric vehicle or lawn equipment rebates.\nl&nbsp; Electric vehicle charging stations and plug-ins.\nl&nbsp; Video-teleconferencing systems for local businesses.\nl&nbsp; Telecommuting start-up costs for local businesses.\nAs part of its alternative or complementary off-site mitigation program, DWR will develop pollutant-specific formulas to monetize, calculate, and achieve emissions reductions in a cost-effective manner. Payments can be allocated to emissions reductions projects in a grant-like manner. DWR will document the fee schedule basis, such as consistency with the CARB&rsquo;s Carl Moyer Program cost-effectiveness limits and capital recovery factors.\nDWR will conduct annual reporting to verify and document that emissions reductions projects achieve a 1:1 reduction with construction emissions to ensure claimed offsets meet the required performance standard. Each report should describe the projects that were funded over the prior year, identify emissions reduction realized by the funded projects, document compliance with mitigation requirements, and identify corrective actions (if any) needed to ensure the offsetting program achieves the performance standards for NOx and PM10. DWR will retain a third-party expert to assist with its review and approval of the annual reports. Annual reports will be finalized and posted on DWR&rsquo;s website by December 31 of the following year.\n\n\n[1] Federal de minimis thresholds are triggered if the project is subject to general conformity. \n\n\n[2] The Sacramento Federal Ozone Nonattainment Area (SFNA) includes all of Sacramento and Yolo Counties and portions of Placer, El Dorado, Solano, and Sutter Counties. This area is designated a nonattainment area for the federal 8-hour ozone standard (see Table 23-5)."
          },
          "AQ-2": {
            "code": "AQ-2",
            "title": "Offset Construction-Generated Criteria Pollutants in the San Joaquin Valley Air Basin (FEIR)",
            "source": "EIR",
            "text": "Performance Standard&nbsp;\nPrior to issuance of construction contracts, DWR will enter into a VERA<span\nstyle='mso-bookmark:_Hlk79153536'><span\nstyle='mso-element:field-begin'><span\nstyle='mso-bookmark:_Hlk67997565'> TC “Voluntary\nEmissions Reduction Agreement (VERA)” \\f A \\l “1” <span\nstyle='mso-bookmark:_Hlk79153536'><span\nstyle='mso-element:field-end'>&nbsp;with the SJVAPCD or develop an alternative or complementary mitigation program (as discussed below) to reduce NOX and PM10. Emissions above the federal de minimis thresholds[1] will be reduced to net zero (0). Emissions not above the de minimis thresholds, but above SJVAPCD&rsquo;s thresholds, will be reduced to quantities below the air district&rsquo;s thresholds. \nEmissions generated by project construction have been quantified as part of this Final EIR. Although this inventory could be used exclusively to inform the required mitigation commitment, the methods used to quantify emissions in the Final EIR were conservative. They also do not account for any additional reductions that may be achieved by future state and federal regulations that reduce the emissions intensity of equipment and vehicles, nor do they account for reduction strategies that may be implemented by DWR pursuant to other mitigation measures (e.g., Mitigation Measure AQ-9). Accordingly, this Final EIR likely overestimates actual emissions that would be generated by construction of the project. DWR may, therefore, reanalyze criteria pollutant emissions from construction of the project to update the required reduction commitment to achieve performance standard. \nAn updated emissions analysis conducted for the project will be performed using approved emissions models and methods available at the time of the reanalysis. The analysis must use the latest available engineering data for the project, inclusive of any required environmental commitments or emissions reduction strategies. Consistent with the methodology used in this Final EIR, emissions factors may account for enacted regulations that will influence future year emissions intensities (e.g., fuel efficiency standards for on-road vehicles).\nMitigation Agreement with SJVAPCD \n1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DWR will enter into a VERA with the SJVAPCD to reduce NOX and PM10 according to the performance standard described above.\na.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The mitigation offset fee amount will be determined at the time of mitigation to fund one or more emissions reduction projects within the SJVAB (or in a nearby area of equal or higher nonattainment classification, as allowed under 40 CFR 93.158(2)). SJVAPCD will require an additional administrative fee of no less than 4% of the total offset fee. The mitigation offset fee will be determined by DWR and SJVAPCD based on the type of projects available at the time of mitigation. This fee is intended to fund emissions reduction projects to achieve reductions. Documentation showing receipt of payment will be provided to DWR or its designated representative.\nb.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The VERA will include details regarding the annual calculation of required offsets DWR must achieve, funds to be paid, administrative fee, and the timing of the emissions reduction projects. SJVAPCD&rsquo;s VERA is implemented through District Incentive Programs, which fund grants and projects to achieve emissions reductions in the SJVAB. Example programs funded through the VERA include the following.\nl&nbsp; On-Road Truck Voucher Program\nl&nbsp; Burn Clean Program\nl&nbsp; Heavy Duty Engine Program\nl&nbsp; Cordless Zero-Emission Commercial Lawn &amp; Garden Equipment Demonstration Program\nl&nbsp; Statewide School Bus Retrofit Program \nc.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Acceptance of the offset fee by SJVAPCD will serve as an acknowledgment and commitment by SJVAPCD to: (1) implement an emissions reduction project(s) within a timeframe to be determined based on the type of project(s) selected after receipt of the mitigation fee designed to achieve the emissions reduction objectives; and (2) provide documentation to DWR or its designated representative describing the project(s) funded by the mitigation fee, including the amount of emissions reduced (tons per year) from the emissions reduction project(s). To qualify under this mitigation measure, the specific emissions reduction project(s) must result in emissions reductions in the SJVAB (or in a nearby area of equal or higher nonattainment classification, as allowed under 40 CFR 93.158(2)) that are real, surplus, quantifiable, enforceable, and will not otherwise be achieved through compliance with existing regulatory requirements or any other legal requirement. Funding will need to be received prior to contracting with participants and should allow enough time to receive and process applications to fund and implement off-site reduction projects prior to commencement of the project activities that are being offset. This will roughly equate to 1 year prior to the required mitigation; additional lead time may be necessary depending on the level of off-site emissions reductions required for a specific year.\nAlternative or Complementary Mitigation Program \nShould DWR be unable to enter what they regard as a satisfactory agreement with SJVAPCD, or should DWR enter an agreement with SJVAPCD but find themselves unable to meet the performance standards established above, DWR will develop an alternative or complementary off-site mitigation program to reduce NOX and PM10 emissions according to the performance standard described above. \nDWR will establish a program to fund emissions reduction projects through grants, ERCs, or similar mechanisms. DWR may identify emissions reduction projects through consultation with SJVAPCD, other regional air districts, CARB, CEC, local governments, transit agencies, or others, as needed. Potential projects could include but are not limited to the following.\nl&nbsp; Alternative fuel, low-emissions school buses, transit buses, and other vehicles.\nl&nbsp; Diesel engine retrofits and repowers.\nl&nbsp; Locomotive retrofits and repowers.\nl&nbsp; Electric vehicle or lawn equipment rebates.\nl&nbsp; Electric vehicle charging stations and plug-ins.\nl&nbsp; Video-teleconferencing systems for local businesses.\nl&nbsp; Telecommuting start-up costs for local businesses.\nAs part of its alternative or complementary off-site mitigation program, DWR will develop pollutant-specific formulas to monetize, calculate, and achieve emissions reductions in a cost-effective manner. Payments can be allocated to emissions reductions projects in a grant-like manner. DWR will document the fee schedule basis, such as consistency with the CARB&rsquo;s Carl Moyer Program cost-effectiveness limits and capital recovery factors.\nDWR will conduct annual reporting to verify and document that emissions reductions projects achieve a 1:1 reduction with construction emissions to ensure claimed offsets meet the required performance standard. Each report should describe the projects that were funded over the prior year, identify emissions reduction realized by the funded projects, document compliance with mitigation requirements, and identify corrective actions (if any) needed to ensure the offsetting program achieves the performance standards for NOx and PM10. DWR will retain a third-party expert to assist with its review and approval of the annual reports. Annual reports will be finalized and posted on DWR&rsquo;s website by December 31 of the following year.\n\n\n[1] Federal de minimis thresholds are triggered if the project is subject to general conformity."
          },
          "AQ-3": {
            "code": "AQ-3",
            "title": "Offset Construction-Generated Criteria Pollutants in the San Francisco Bay Area Air Basin (FEIR)",
            "source": "EIR",
            "text": "Performance Standard&nbsp;\nPrior to issuance of construction contracts, DWR will enter into an MOU with the Bay Area Clean Air Foundation (Foundation)<span\nstyle='mso-bookmark:_Hlk67997623'><span\nstyle='mso-bookmark:_Hlk67997623'> TC &quot;Bay\nArea Clean Air Foundation (Foundation)&quot; \\f A \\l &quot;1&quot; <span\nstyle='mso-bookmark:_Hlk67997623'>, a public nonprofit and supporting organization for the BAAQMD, or develop an alternative or complementary mitigation program (as discussed below) to reduce NOX. Emissions above the federal de minimis thresholds[1] will be reduced to net zero (0). Emissions not above the de minimis thresholds, but above BAAQMD&rsquo;s thresholds, will be reduced to quantities below the air district&rsquo;s thresholds. \nEmissions generated by project construction have been quantified as part of this Final EIR. Although this inventory could be used exclusively to inform the required mitigation commitment, the methods used to quantify emissions in the Final EIR were conservative. They also do not account for any additional reductions that may be achieved by future state and federal regulations that reduce the emissions intensity of equipment and vehicles, nor do they account for reduction strategies that may be implemented by DWR pursuant to other mitigation measures (e.g., Mitigation Measure AQ-9). Accordingly, this Final EIR likely overestimates actual emissions that would be generated by construction of the project. DWR may, therefore, reanalyze criteria pollutant emissions from construction of the project to update the required reduction commitment to achieve performance standard. \nAn updated emissions analysis conducted for the project will be performed using approved emissions models and methods available at the time of the reanalysis. The analysis must use the latest available engineering data for the project, inclusive of any required environmental commitments or emissions reduction strategies. Consistent with the methodology used in this Final EIR, emissions factors may account for enacted regulations that will influence future year emissions intensities (e.g., fuel efficiency standards for on-road vehicles).\nMitigation Agreement with Bay Area Clean Air Foundation \n1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DWR will enter into an MOU with the Foundation to reduce NOX according to the performance standard described above.\na.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The mitigation offset fee amount will be determined at the time of mitigation to fund one or more emissions reduction projects within the SFBAAB. The Foundation will require an additional administrative fee of no less than 5% of the total offset fee. The mitigation offset fee will be determined by the Foundation based on the type of projects available at the time of mitigation. This fee is intended to fund emissions reduction projects to achieve reductions. Documentation of payment will be provided to DWR or its designated representative.\nb.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The MOU will include details regarding the annual calculation of required offsets DWR must achieve, funds to be paid, administrative fee, and the timing of the emissions reduction projects. Acceptance of this fee by the Foundation will serve as an acknowledgment and commitment by the Foundation to (1) implement an emissions reduction project(s) within a timeframe to be determined based on the type of project(s) selected after receipt of the mitigation fee designed to achieve the emissions reduction objectives; and (2) provide documentation to DWR or its designated representative describing the project(s) funded by the mitigation fee, including the amount of emissions reduced (tons per year) from the emissions reduction project(s). To qualify under this mitigation measure, the specific emissions reduction project(s) must result in emissions reductions in the SFBAAB that are real, surplus, quantifiable, enforceable, and will not otherwise be achieved through compliance with existing regulatory requirements or any other legal requirement. Funding will need to be received prior to contracting with participants and should allow enough time to receive and process applications to fund off-site reduction projects prior to commencement of the project activities that are being offset. This will roughly equate to 1 year prior to the required mitigation; additional lead time may be necessary depending on the level of off-site emissions reductions required for a specific year. \nAlternative or Complementary Mitigation Program \nShould DWR be unable to enter what they regard as a satisfactory agreement with the Foundation, or should DWR enter an agreement with the Foundation but find themselves unable to meet the performance standards established above, DWR will develop an alternative or complementary off-site mitigation program to reduce NOX emissions according to the performance standard described above. \nDWR will establish a program to fund emissions reduction projects through grants, ERCs, or similar mechanisms. DWR may identify emissions reduction projects through consultation with BAAQMD, other regional air districts, CARB, CEC, local governments, transit agencies, or others, as needed. Potential projects could include but are not limited to the following.\nl&nbsp; Alternative fuel, low-emissions school buses, transit buses, and other vehicles.\nl&nbsp; Diesel engine retrofits and repowers.\nl&nbsp; Locomotive retrofits and repowers.\nl&nbsp; Electric vehicle or lawn equipment rebates.\nl&nbsp; Electric vehicle charging stations and plug-ins.\nl&nbsp; Video-teleconferencing systems for local businesses.\nl&nbsp; Telecommuting start-up costs for local businesses.\nAs part of its alternative or complementary off-site mitigation program, DWR will develop pollutant-specific formulas to monetize, calculate, and achieve emissions reductions in a cost-effective manner. Payments can be allocated to emissions reductions projects in a grant-like manner. DWR will document the fee schedule basis, such as consistency with the CARB&rsquo;s Carl Moyer Program cost-effectiveness limits and capital recovery factors.\nDWR will conduct annual reporting to verify and document that emissions reductions projects achieve a 1:1 reduction with construction emissions to ensure claimed offsets meet the required performance standard. Each report should describe the projects that were funded over the prior year, identify emissions reduction realized by the funded projects, document compliance with mitigation requirements, and identify corrective actions (if any) needed to ensure the offsetting program achieves the performance standards for NOx. DWR will retain a third-party expert to assist with its review and approval of the annual reports. Annual reports will be finalized and posted on DWR&rsquo;s website by December 31 of the following year.\n\n\n[1] Federal de minimis thresholds are triggered if the project is subject to general conformity."
          },
          "AQ-5": {
            "code": "AQ-5",
            "title": "Avoid Public Exposure to Localized Particulate Matter and Nitrogen Dioxide Concentrations (FEIR)",
            "source": "EIR",
            "text": "1. DWR will employ a tiered approach to reduce ambient exposure to localized PM and NO 2 concentrations. The approach will be taken in the following way.\na. Conduct refined PM and NO2 concentration modeling at locations identified in the air quality analysis as exceeding the SIL or ambient air quality standards (as appliable, depending on background concentrations). NO2 modeling will be refined by using seasonal and diurnal hourly background NO2 concentration data for the local air quality study area. In addition, ozone data from the same hourly meteorological period will be used to perform a Tier 3 analysis of 1-hour NO2 using the EPA&rsquo;s ozone limiting method. The refined PM modeling (both PM2.5 and PM10) will be performed using local site-specific representative data collected for silt loading and soil moisture content. The measurement will be completed using specific test methods as described in EPA AP-42 Appendix C.1. Procedures for Sampling Surface/Bulk Dust Loading and EPA AP-42 Appendix C.2. Procedures for Laboratory Analysis of Surface/Bulk Dust Loading Samples. These site-specific silt loading and soil moisture measurements will be used to determine emissions estimates for use in the refined PM concentration modeling.\nb. If the refined modeling shows an exceedance of the SIL or ambient air quality standards (as appliable), DWR will conduct real-time air quality monitoring for PM and/or NO2 during construction at locations identified in the refined modeling as potentially exceeding the SIL or ambient air quality standards (as appliable, depending on background concentrations). The monitoring will be conducted according to the following requirements.\ni. Background Monitoring During Construction: DWR will identify representative background PM and/or NO2 air quality monitors in coordination with the local air district. CARB and air districts maintain a network of air quality monitoring sites designed to monitor background concentrations within the air district. Project construction features must be within the spatial scale[1] of representativeness for the selected monitors. DWR will identify background monitoring stations based on their proximity to project construction features and registered spatial scale. DWR will confirm with the local air district that the selected stations are representative of ambient air quality for the study area(s). DWR will also confirm with the station administrator (CARB or local air district) that the selected monitoring stations will operate during construction of those features for which the background concentrations will be applied and real-time monitoring results will be accessible to DWR.\nIn the event that there are no CARB or air district monitoring stations within an appropriate distance of project construction features (as determined through consultation with the local air district), or those stations will not operate during project construction and/or real-time data would not be available to DWR, DWR will consult with the local air district to identify alternative monitoring stations, which may include establishment of a DWR operated background station. Any alternative monitoring station used to collect background monitoring data must meet the network design criteria for ambient air quality monitoring defined in 40 CFR Part 58, Appendix D. DWR must obtain confirmation from the local air district that the alternative monitoring station(s) meet these design standards.\nii. On-Site Construction Monitoring: Downwind monitoring during construction will be conducted by DWR in the prevailing downwind direction from the construction activity at the fence line location. The location of the monitor may be moved from time to time to follow changes in active construction. DWR will use a monitoring method that is equivalent to the method used at the background station (e.g., Federal Reference Method). This will allow real-time differences in PM concentrations to be determined through a comparison of the construction monitoring data collected by DWR to the background monitoring maintained by the air district. The difference in concentrations between the monitoring results represents the incremental project contribution for comparison to the SILs.\niii. Increment: If the real-time construction monitoring concentration is found to be within 80% of the 24-hour PM10 CAAQS (50 &mu;g/m 3) or 24-hour PM2.5 NAAQS (35 &mu;g/m 3), and the real-time hourly increment (construction minus background) concentrations are found to be within 80% of the 24-hour PM10 SIL (5 &mu;g/m 3) or 24-hour PM2.5 SIL (1.2 &mu;g/m 3), then DWR will take corrective action to reduce incremental concentrations to acceptable levels (i.e., 24-hour PM10 CAAQS [50 &mu;g/m 3] or 24-hour PM2.5 NAAQS [35 &mu;g/m 3]). Likewise, if the real-time construction monitoring concentration is found to be within 80% of the 1-hour NO 2 CAAQS (188 &mu;g/m 3), then DWR will take corrective action to reduce total concentrations to acceptable levels (i.e., 24-hour PM10 CAAQS [50 &mu;g/m 3] or 24-hour PM2.5 NAAQS [35 &mu;g/m 3]). All feasible actions necessary to reduce concentrations to an acceptable level, including but not limited to potentially limiting construction activity during adverse meteorological conditions (e.g., during high wind events), relocating construction activity during the adverse period, or taking additional corrective activities to limit emissions (e.g., temporary covering of portions of the storage piles, reducing equipment operation).\niv. Timing: DWR will select the background monitoring station(s) prior to obtaining the authority to construct permit for the construction activities. Background monitoring (i) and on-site construction monitoring (ii) will occur daily over the entire duration of construction activities.\nv. Reporting: DWR will conduct monthly reviews of the concentration data and maintain a record of data throughout construction. If the measured increment concentrations attributable to on-site construction activities exceed the performance standard (SIL or ambient air quality standard), DWR will report this information to the local air district and describe the action(s) taken to reduce the increment concentrations (as described under [iii]).\n\n\n[1] 40 CFR Part 58, Appendix D defines spatial scale as the &ldquo;physical dimensions of the air parcel nearest to a monitoring site throughout which actual pollutant concentrations are reasonably similar.&rdquo; The six scales are microscale (several meters to 100 meters), middle scale (100 meters to 0.5 kilometer), neighborhood scale (0.5 kilometer to 4.0 kilometers), urban scale (4.0 kilometers to 50 kilometers), regional scale (tens to hundreds of kilometers), and national and global scales.\n&nbsp;"
          },
          "AQ-9": {
            "code": "AQ-9",
            "title": "Develop and Implement a GHG Reduction Plan to Reduce GHG Emissions from Construction and Net CVP Operational Pumping to Net Zero",
            "source": "EIR",
            "text": "Prior to issuance of the first construction or grading permit for the project, DWR will retain a qualified consultant to develop a GHG Reduction Plan (Plan)&nbsp;to mitigate GHG emissions resulting from construction and displaced purchases of CVP electricity&nbsp;to net zero. Net additional GHG emissions from construction and displaced purchases of CVP electricity&nbsp;have been quantified as part of this Draft EIR and total between 453,412 and 794,180&nbsp;metric tons CO2e, depending on the alternative. Construction of the compensatory mitigation restoration sites is predicted to generate an additional 3,570 metric tons CO2e. This yields a reduction commitment of up to 797,750&nbsp;metric tons CO2e needed to meet the net zero performance standard. The net zero performance standard may be achieved based on actual emissions calculations, as described below. The reduction commitment may therefore change based on project activities and adoption of new state regulations. Notably, if CARB’s amendments to the Regulation for Reducing Sulfur Hexafluoride Emissions from Gas Insulated Switchgear (SF6 Switchgear Regulation)&nbsp;are not adopted, DWR must reduce annual ongoing SF6 from electrical transmission beyond 2045. This is further discussed below.Required content for the Plan is identified in Section A below, including potential GHG reduction strategies to achieve the net zero performance standard. Monitoring, reporting, and enforcement requirements for future implementation of the Plan are outlined in Section B.&nbsp;Required Plan Contents&nbsp;Emissions Quantities and Reduction Commitments: GHG emissions from construction and displaced purchases of CVP electricity must be mitigated to net zero on a continual basis throughout construction and operations. This will require DWR to constantly “stay ahead” of the estimated emissions through early investment in GHG reduction efforts prior to construction (to ensure mitigation of unavoidable initial construction GHG emissions) and advanced planning for GHG reductions so that throughout the construction and operational period, the net effect of project emissions and this mitigation is that the project will not result in any increase in GHG emissions over baseline conditions. Since some of the planning will rely on the estimated GHG reduction value of future actions during construction and operation, there may be some need for “catch up” GHG reductions if emissions are higher than expected or reduction results are lower than expected. Conversely, if emissions are lower than expected or reduction results are higher than expected, there may be some building up of “forward credits” for the next phase of construction and/or operations.&nbsp;&nbsp;Plan Development: Developing a fixed and rigid implementation strategy up-front to cover 12 to 14 years of construction, depending on the alternative, followed by project operation will be restrictive and will potentially preclude DWR from pursing future reduction technologies that could be economically or environmentally superior to options that are currently available.&nbsp;Given the constraints associated with developing a fixed and rigid reduction plan to cover all project emissions, the Plan may be developed and implemented over multiple phases. A phased approach provides increased implementation and management flexibility. It also enhances Plan quality as lessons learned during initial phases are applied to future reduction efforts. The first phase of the Plan must address no fewer than the first 5 years of construction. The Plan will be amended to provide implementation details for subsequent phases according to the requirements in Section B below.&nbsp;The Plan will identify the amount of GHG emissions anticipated in the covered phase, as well as emissions from prior phases (if applicable) and the projected total net emissions of the project. This&nbsp;Draft EIR presents an estimate of annual GHG emissions generated by project construction and displaced purchases of CVP electricity. Although this inventory could be used exclusively to inform the required mitigation commitment, the methods used to quantify emissions in the&nbsp;Draft EIR were conservative. They also do not account for any GHG reduction strategies that may be implemented by DWR pursuant to this measure. Accordingly, this&nbsp;Draft EIR likely overestimates actual GHG emissions that would be generated by the project. DWR may therefore reanalyze GHG emissions for any phase of the project to update the required reduction commitment to achieve net zero.&nbsp;An updated emissions analysis conducted for the Plan will be performed using approved emissions models and methods available at the time of the reanalysis. The analysis must use the latest available engineering data for the project, inclusive of any required environmental commitments or GHG emissions reduction strategies. Consistent with the methodology used in this&nbsp;Draft EIR, emissions factors may account for enacted regulations that will influence future year emissions intensities (e.g., fuel efficiency standards for on-road vehicles). Emissions from displaced purchases of CVP electricity will be derived by subtracting the project total energy consumption from what would have been generated by the system without implementation of the project, and then multiplying the net change in energy consumption by the statewide grid average emissions intensity.&nbsp;&nbsp;GHG Reduction Strategies: Each phase of the Plan will identify the GHG reduction strategies that will be implemented during that phase to achieve the net zero performance standard. Strategies that could be used in formulating the Plan are summarized below. GHG reduction strategies must be verifiable and feasible to implement. The Plan will identify the entity responsible for implementing each strategy (if not DWR) and the estimated GHG reduction that will be achieved by implementation of the strategy. If the selected strategies are shown to exceed total net emissions of that phase, the estimated surplus can be applied as a credit in future phase(s), as explained in Section B.1.Environmental commitments (Section A.3a) are required project design features that must be incorporated into the Plan. Following environmental commitments, DWR will prioritize selected strategies as: (1) on-site construction strategies (Section A.3b); (2) off-site strategies (Section A.3c); and (3) GHG credits (Section A.3d). The order of priority for the location of selected strategies will be: (1) within the project right-of-way; (2) within communities surrounding the water conveyance alignment (e.g., Hood); (3) throughout California’s Central Valley and Northern California; (4) in the State of California; (5) in the United States; and (6) outside of the United States. If the Plan proposes GHG reduction strategies that do not conform to the priorities outlined above, it must present substantial evidence to justify the deviation or explain why higher priority strategies were deemed infeasible as defined under CEQA.It is possible that some of the strategies could independently achieve the net zero performance standard for the project. Various combinations of strategies could also be pursued to optimize total costs or community co-benefits. DWR will be responsible for determining the overall mix of strategies necessary to ensure the performance standard to mitigate the significant GHG impact is met.The list of strategies presented in this section is not exclusive. DWR may include additional or new strategies to reduce GHG emissions to the extent that they become commercially available and cost effective and earn a track-record for reliability in real-world conditions. This may include new equipment and vehicle systems (e.g., autonomous construction equipment, fuel-cells), new energy systems (e.g., battery storage), or other technologies (e.g., carbon capture and storage).Environmental Commitments: All phases of the Plan must incorporate the following environmental commitments. Refer to Appendix 3B, Environmental Commitments and Best Management Practice, for measure descriptions.&nbsp;EC-7: Off-Road Heavy-Duty Engines&nbsp;&nbsp;EC-8: On-Road Haul Trucks&nbsp;&nbsp;EC-9: On-Site Locomotives&nbsp;&nbsp;EC-10: Marine Vessels&nbsp;&nbsp;EC-13: DWR Best Management Practices to Reduce GHG Emissions&nbsp;&nbsp;On-Site Construction Strategies: Strategies to reduce on-site construction emissions may include but are not limited to the following.&nbsp;Purchase Zero-Carbon Electricity: Enter into a power purchase agreement, where feasible, with utilities that provide electricity service to the study area to purchase construction electricity from renewable sources. Renewable sources must be zero-carbon energy sources (e.g., wind, solar, hydro) and may not be accounted to utility RPS goals.&nbsp;Install Electric Vehicle (EV)&nbsp;Charging Stations at Park-and-Ride Lots: Install EV charging stations at employee park-and-ride lots.&nbsp;&nbsp;Use Electric Shuttles and Buses: Require electric shuttles and buses to transport employees from the park-and-ride lots to construction sites.&nbsp;&nbsp;Optimize Delivery Logistics:&nbsp;Utilize freight instead of on-road haul trucks to deliver construction materials and equipment, if feasible.&nbsp;&nbsp;Off-Site Strategies: Off-site strategies to reduce emissions may include but are not limited to the following.Support Community Building Energy Efficiency Improvements:&nbsp;In coordination with local utilities, fund or contribute to an energy efficiency improvement program to achieve reductions in residential and commercial natural gas and electricity usage. Potential building improvements may include energy efficient appliances, energy efficient boilers, installation of alternative water heaters in place of natural gas storage tank heaters, installation of induction cooktops in place of gas ranges, or installation of cool roofs or green roofs.&nbsp;Support Community Renewable Energy Projects:&nbsp;In coordination with local utilities, fund or contribute to community solar, wind, or other renewable energy projects or programs. This could include providing funding to support utility programs that will allow homeowners to install solar photovoltaic systems at zero or minimal up-front cost. All projects installed under this measure must be designed for high performance (e.g., optimal full-sun location, solar orientation) and additive to utility RPS goals.&nbsp;Support Energy Decarbonization Projects:&nbsp;In coordination with local utilities, fund or contribute to community infrastructure projects (e.g., retirement of natural gas facilities) to support decarbonization of the electric power sector.Support Community Transit Programs:&nbsp;In coordination with local transit providers, fund or contribute to programs to increase the use of public transit (e.g., increased transit frequency, reduced transit fares).&nbsp;Support Community Pedestrian Network Improvements:&nbsp;In coordination with local authorities, fund or contribute to programs to&nbsp;increase sidewalk coverage to improve pedestrian access and interconnectivity of the pedestrian network.&nbsp;&nbsp;Support Community Bicycle Network Improvements:&nbsp;In coordination with local authorities, fund or contribute to programs to&nbsp;construct or improve bicycle lane facilities (Class I, II, or IV) or bicycle boulevards.&nbsp;&nbsp;Support Community Carshare or Bikeshare Programs:&nbsp;In coordination with local authorities, fund or contribute to the deployment of neighborhood/city conventional or electric carshare or bikeshare programs.&nbsp;&nbsp;Support Transportation Decarbonization Projects:&nbsp;In coordination with&nbsp;local authorities, utilities, or transit&nbsp;providers, fund or contribute to community infrastructure projects (e.g., electric-transit buses, EV infrastructure) to support decarbonization of the transportation sector.&nbsp;Support Biomass Waste Digestion and Conversion Facilities: Fund or contribute financing to facility development either through long-term power purchase agreements or up-front project financing. Projects should be awarded through a competitive bidding process and chosen for GHG reduction and other environmental benefits to the project area. Projects could provide a range of final products: electricity generation, compressed natural gas for transportation fuels, and pipeline quality biomethane.&nbsp;Support Agriculture Waste Conversion Development:&nbsp;Fund or contribute financing to the re-commissioning of thermal chemical conversion facilities to process collected agricultural biomass residues.&nbsp;Project funding should provide incentives to farmers in the project area to deliver agricultural wastes to existing facilities.&nbsp;Increase Renewable Energy Purchases for Operations: Increase renewable energy purchases under DWR’s REPP) to reduce project emissions. The REPP identifies the quantity of renewable electricity resources that DWR will purchase each year to achieve the GHG emissions reduction goals laid out in its Update 2020.&nbsp;Support Tidal Wetland Inundation Projects: Expand the number of subsidence reversal and/or carbon sequestration projects currently being undertaken by DWR on Sherman and Twitchell Islands. Existing research at the Twitchell Wetlands Research Facility demonstrates that wetland restoration can sequester 25 tons of carbon per acre per year. Measure funding could be used to finance permanent wetlands for waterfowl or rice cultivation, creating co-benefits for wildlife and local farmers.&nbsp;Support Urban Tree Planting:&nbsp;In coordination with&nbsp;local authorities, fund, contribute to, or implement a program to expand urban tree planting. The program should prioritize native&nbsp;tree species that require minimal water and maintenance, low-biogenic VOC emitting tree species, and low-allergen tree species. All trees should be appropriately distanced from buildings, especially in high fire areas.&nbsp;Conserve Agricultural Lands:&nbsp;In coordination with&nbsp;local authorities, fund a program to protect agricultural lands from conversion to urban or rural residential development.GHG Credits:&nbsp;A GHG credit enables development projects to compensate for their GHG emissions and associated environmental impacts by financing reductions in GHG emissions elsewhere. GHG credits derived from completed prior actions are referred to as “GHG offsets” or “carbon offsets.” GHG credits derived from future contracted actions are referred to as “GHG future credits” or “GHG future mitigation units” (FMUs). GHG credits (including offsets) are classified as either compliance credits or voluntary credits. Compliance offsets can be purchased by covered entities subject to the cap-and-trade regulation to meet predetermined regulatory targets (to date, the cap-and-trade regulation only allows the use of GHG offsets, not GHG future credits). Voluntary offsets or voluntary GHG future credits are not associated with the cap-and-trade regulation and are purchased with the intent to voluntarily meet carbon neutral or other environmental obligations.&nbsp;As of June 2021, DWR has 59,552 credits registered with the American Carbon Registry (ACR). One credit is equal to a GHG reduction or GHG removal enhancement of 1 metric ton of CO2e. All GHG credits must be created through a CARB-approved registry. These registries are currently the ACR, Climate Action Reserve, and Verra, although additional registries may be accredited by CARB in the future.&nbsp;These registries use robust accounting protocols for all GHG credits created for their exchange, including the six currently approved CARB protocols. This mitigation measure specifically requires GHG credits created for the project to originate from a CARB-approved protocol or a protocol that is equal to or more rigorous than CARB requirements under 17 Cal. Code Regs. Section 95972. The selected protocol must demonstrate that the reduction of GHG emissions are real, permanent, quantifiable, verifiable, enforceable, and additional. Definitions of these terms from 17 Cal. Code Regs. Section 95802(a) are provided below (the original text used the term offset, which has been replaced in the text below with the generic term GHG credit, as this measure allows for use of both offsets and FMUs).&nbsp;Real: GHG reductions or GHG enhancements result from a demonstrable action or set of actions, and are quantified using appropriate, accurate, and conservative methodologies that account for all GHG emissions sources, GHG sinks, and GHG reservoirs within the [GHG credit] project boundary and account for uncertainty and the potential for activity-shifting leakage and market-shifting leakage.&nbsp;Additional: GHG reductions or removals that exceed any GHG reduction or removals otherwise required by law, regulation, or legally binding mandate, and that exceed any GHG reductions or removals that would otherwise occur in a conservative business-as-usual scenario.&nbsp;Permanent: GHG reductions and GHG removal enhancements are not reversible, or when GHG reductions and GHG removal enhancements may be reversible, mechanisms are in place to replace any reversed GHG emissions reductions and GHG removal enhancements to ensure that all credited reductions endure for at least 100 years.&nbsp;Quantifiable: The ability to accurately measure and calculate GHG reductions or GHG removal enhancements relative to a project baseline in a reliable and replicable manner for all GHG emissions sources, GHG sinks, or GHG reservoirs included within the [GHG credit] project boundary, while accounting for uncertainty and activity-shifting leakage and market-shifting leakage.&nbsp;Verified: A [GHG credit] project report assertion is well documented and transparent such that it lends itself to an objective review by an accredited verification body.&nbsp;Enforceable:&nbsp;The authority for CARB to hold a particular party liable and to take appropriate action if any of the provisions of this article are violated.Note that this definition of enforceability is specific to the cap-and-trade regulation, where CARB holds enforcement authority, but this measure will employ GHG credits from the voluntary market, where CARB has no enforcement authority. Applying the definition to this mitigation measure means that GHG reductions must be owned by a single entity and be backed by a legal instrument or contract that defines exclusive ownership.GHG credits may be in the form of GHG offsets for prior reductions of GHG emissions verified through protocols or FMUs for future committed GHG emissions meeting protocols. Because emissions reductions from GHG offsets have already occurred, their benefits are immediate and can be used to compensate for an equivalent quantity of project-generated emissions at any time. GHG credits from FMUs must be funded and implemented within 5 years of project GHG emissions to qualify as a GHG credit under this measure (i.e., there can only be a maximum of 5 years lag between project emissions and their real-world reductions through funding an FMU in advance and implementing the FMU on the ground). Any use of FMUs that result in a time lag between project emissions and their reduction by GHG credits from FMUs must be compensated through a pro-rated surcharge of additional FMUs proportional to the effect of the delay. Since emissions of CO2 in the atmosphere reach their peak radiative forcing within 10 years, a surcharge of 10% for every year of lag between project emissions and their reduction through an FMU will be added to the GHG credit requirement (i.e., 1.10 FMUs will be required to mitigate 1 metric ton of project GHG emissions generated in the year prior to funding and implementation of the FMU).Consistent with the priorities outlined above in Section A.2, GHG credits from reduction projects in geographies closest to the water conveyance alignment (i.e., Sacramento and Central Valley) will be prioritized before projects in larger geographies (i.e., Southern California, California, United States, internationally). DWR will inform brokers of the required geographic prioritization for the procurement of GHG credits. GHG credits from reduction projects identified in the Sacramento and Central Valley that are of equal or lesser cost compared to the settlement price of the latest cap-and-trade auction must be included in the transaction. GHG credits from reduction projects in larger geographies may be purchased if adequate credits cannot be found in the Sacramento and Central Valley or they exceed the price maximum identified above. The economic and geographic analysis undertaken to inform the selection of GHG credits must be provided as part of the required documentation discussed below in Section B.3.All GHG credits will be verified by an independent verifier accredited by the ANSI National Accreditation Board (ANAB)&nbsp;or CARB, or an expert with equivalent qualifications to the extent necessary to assist with the verification. Following the standards and requirements established by the accreditation board (ANAB or CARB), the verifier will certify the following.GHG credits conform to a CARB-approved protocol or a protocol that is equal to or more rigorous than CARB requirements under 17 Cal. Code Regs. Section 95972. Verification of the latter requires certification that the credits meet or exceed the standards in 17 Cal. Code Regs. Section 95972.&nbsp;&nbsp;GHG credits are real, permanent, quantifiable, verifiable, enforceable, and additional, as defined in this measure.&nbsp;GHG credits were purchased according to the geographic prioritization standard defined in this measure.Verification of GHG offsets must occur as part of the certification process for compliance with the accounting protocol. Because FMUs are GHG credits that will result from future projects, additional verification must occur beyond initial certification. Verification for FMUs must include initial certification and independent verification every 5 years over the duration of the FMU generating the GHG credits. The verification will examine both the GHG credit realization on the ground and its progress toward delivering future GHG credits. DWR will retain an independent verifier meeting the qualifications described above to certify reductions achieved by FMUs are achieved following completion of the future reduction project.&nbsp;Implementation and Enforcement&nbsp;Phased Analysis and Plan Amendments:&nbsp;As described above in Section A.1, the Plan may be developed and implemented over multiple phases. Prior to the start of each phase, DWR will update the Plan to calculate the amount of GHG emissions anticipated in the covered phase, as well as emissions from prior phases (if applicable) and the projected total net emissions of the project. The Plan will identify the specific GHG reduction strategies that will be implemented to meet the net zero performance standard for the covered phase and quantify the expected reductions that will be achieved by each strategy. All emissions and reductions will be quantified in accordance with the requirements outlined in Section A.1.DWR will retain a qualified professional firm where the supervising staff has at least 10 years of experience performing air quality and GHG analysis to assist with its review and approval of the Plan. Subsequent amendments to the Plan will identify reductions that have been achieved during prior phases and determine if those reductions exceed emissions generated by the project. If the GHG reduction strategies implemented by DWR result in a surplus of reductions above the net zero performance standard, the balance of those reductions may be credited to subsequent phases.&nbsp;The final phase of the Plan must address operational emissions following construction, accounting for regulations adopted at that time that will reduce project emissions. Specifically, DWR will confirm statewide emissions from electricity transmission will achieve carbon neutrality no later than December 31, 2045, pursuant to SB 100 and the SF6 Switchgear Regulation (or subsequent regulations). If GHG emissions from displaced purchases of CVP electricity are expected to persist beyond 2045, DWR will calculate the amount of GHG emissions anticipated until the industry achieves carbon neutrality. The final Plan will identify GHG reduction strategies that will be implemented by DWR to meet the net zero performance standard for these emissions.&nbsp;Timing and Execution:&nbsp;DWR will prepare the Plan (or first phase of the Plan) prior to issuance of the first construction or grading permit for the project. If DWR elects to use a phased approach, the first phase of the Plan must identify the expected future phases and schedule for amending the Plan to cover future phases.Environmental Commitments and selected on-site construction strategies will be included in construction permits (as appliable) and contractor bid packages/agreements. Selected off-site strategies will be completed or operational before completion of the applicable phase. If GHG credits are pursued, DWR will enter the necessary contract(s) to purchase credits prior to the start of each phase. All credits must be retired before completion of the applicable phase.&nbsp;Reporting:&nbsp;DWR&nbsp;will conduct annual reporting to verify and document that selected strategies achieve sufficient emissions reductions to mitigate project emissions to net zero. Each report should describe the GHG reduction strategies that were implemented over the prior year, summarize past, current, and anticipated project phasing, document compliance with Plan requirements, and identify corrective actions (if any) needed to ensure the Plan achieves the net zero performance standard. If GHG credits have been purchased to reduce emissions for the reporting year, the annual report must include copies of the offset retirement verification.DWR will retain a qualified professional firm where the supervising staff has at least 10 years of experience performing air quality and GHG analysis to assist with its review and approval of the annual reports. Annual reports will be finalized and posted on DWR’s website by December 31 of the following year."
          },
          "BIO-2a": {
            "code": "BIO-2a",
            "title": "Avoid or Minimize Impacts on Special-Status Natural Communities and Special-Status Plants (FEIR)",
            "source": "EIR",
            "text": "DWR will conduct preconstruction surveys for special-status natural communities and special-status plants within and up to 250-feet of all project sites (based on the sensitivity or rarity of potential resources that may be present, as determined by a qualified biologist). Surveys will be conducted from locations where access allows in areas of potential suitable habitat, as identified in the habitat models and by additional assessments conducted during the planning for work in a given area. The purposes of these surveys will be to (1) identify and map any special-status natural communities present, (2) determine whether the locations of special-status plants identified in previous record searches or surveys are extant, (3) identify any new special-status plant occurrences, (4) cover any portions of the study area not previously surveyed, and (5) identify where mitigation measures will be implemented to avoid or offset impacts from surface construction. The extent of mitigation for direct loss of, or indirect effects on, special-status plants will be based on these survey results. All surveys for special-status natural communities and special-status plants will be conducted by qualified biologists with experience identifying special-status plants that have the potential to occur in the project site following Guidelines for Conducting and Reporting Botanical Inventories for Federally Listed, Proposed and Candidate Plants (U.S. Fish and Wildlife Service 1996) and Protocols for Surveying and Evaluating Impacts to Special Status Native Plant Populations and Sensitive Natural Communities (California Department of Fish and Wildlife 2018b:1&ndash;12), or the most current versions of these protocols. The surveys will be floristic in nature and conducted in a manner that maximizes the likelihood of locating special-status plant species or special-status natural communities that may be present (i.e., during the appropriate season and at an appropriate level of ground coverage). Locations of special-status plants in construction areas will be recorded using a GPS unit and flagged. DWR will evaluate all project activities for their impacts on special-status natural communities and special-status plants and avoid or minimize impacts on special-status natural communities and special-status plants that occur on project sites by establishing non-disturbance buffers where feasible. For diamond-petaled California poppy and caper-fruited tropidocarpum, which are quite rare and on the verge of extinction, a 100-foot non-disturbance buffer will be established around the plant occurrence. Impacts on other special-status plant species and natural communities will be avoided to the extent feasible. Regarding other special-status plant species and natural communities, construction activities will avoid the plant occurrence by establishing non-disturbance buffers of 50 to 100 feet, based on the sensitivity or rarity of the resource and the size of the buffer required to avoid significant impacts on the resource, as determined by a qualified biologist.\nWhere non-disturbance buffers are not feasible (i.e., because the plant occurrence is within a surface construction impact footprint), reduced buffers will be established by a biological monitor and protective barriers and/or fencing will be installed under the supervision of the biological monitor. During construction, the biological monitor will conduct regular site visits to inspect the protective barrier and resource. Where special-status natural communities or special-status plants are removed, compensatory mitigation for impacts on special-status plants and natural communities will be implemented as described in Appendix 3F, Attachment 3F-1, Compensatory Mitigation Design Guidelines, CMP-9: Special-Status Plants."
          },
          "BIO-14": {
            "code": "BIO-14",
            "title": "Avoid and Minimize Impacts from Construction on Vernal Pool Aquatic Invertebrates and Critical Habitat for Vernal Pool Fairy Shrimp (FEIR)",
            "source": "EIR",
            "text": "All Project Alternatives\nAs properties become accessible for initiating project activities, planning level surveys will be conducted to assess the suitability of modeled habitat and, where suitable, conduct protocol-level surveys for vernal pool fairy shrimp and vernal pool tadpole shrimp. To the extent practicable, work areas will be designed to avoid habitat for vernal pool aquatic invertebrates and critical habitat for vernal pool fairy shrimp. Where practicable, the project will be planned and designed to avoid ground-disturbing activities or alterations to hydrology within 250 feet of vernal pool aquatic invertebrate habitat.&nbsp;Where activities need to occur within 250 feet of habitat, those work areas will be assessed for their potential to alter the hydrology of the pool habitat such that the hydroperiod of the pool will no longer support the species. Where the USFWS agrees that any changes to the hydroperiod will not permanently affect habitat functionality, compensatory mitigation would not be required.\nTo the extent practicable, DWR will minimize impacts on critical habitat for vernal pool fairy shrimp.&nbsp;To achieve this, project construction will occur at least 250 feet from vernal pool fairy shrimp critical habitat containing the primary constituent elements defined below unless it is determined through USFWS review that the activities within the buffer will not substantially modify the primary constituent elements of vernal pool fairy shrimp critical habitat.\nPrimary constituent elements for vernal pool fairy shrimp are defined as follows (70 FR 46924&ndash;46998).\n\nTopographic features characterized by mounds and swales and depressions within a matrix of surrounding uplands that result in complexes of continuously, or intermittently, flowing surface water in the swales connecting the pools described below, providing for dispersal and promoting hydroperiods of adequate length in the pools.&nbsp;\nDepressional features including isolated vernal pools with underlying restrictive soil layers that become inundated during winter rains and that continuously hold water for a minimum of 18 days, in all but the driest years, thereby providing adequate water for incubation, maturation, and reproduction. As these features are inundated on a seasonal basis, they do not promote the development of obligate wetland vegetation habitats typical of permanently flooded emergent wetlands.&nbsp;\nSources of food, expected to be detritus occurring in the pools, contributed by overland flow from the pools&rsquo; watershed, or the results of biological processes within the pools themselves, such as single-celled bacteria, algae, and dead organic matter, to provide for feeding.&nbsp;\nStructure within the pools described above, consisting of organic and inorganic materials, such as living and dead plants from plant species adapted to seasonally inundated environments, rocks, and other inorganic debris that may be washed, blown, or otherwise transported into the pools, that provide shelter.\n\n&nbsp;\nFor suitable aquatic habitat for vernal pool fairy shrimp and vernal pool tadpole shrimp that will be affected by the project, protocol-level surveys for these species will be conducted to determine whether they are present or where time does not allow for surveys to be completed (e.g., dry years, timely access), the suitable habitat will be assumed to be occupied. Surveys will be conducted according to the most recent USFWS guidelines by USFWS-approved biologists with the appropriate recovery permit under Section 10(a)(1)(A) of the ESA.\nProject elements will be designed to avoid direct and indirect effects on vernal pool aquatic invertebrate habitat to the extent practicable. Where construction occurs within 250 feet of vernal pool crustacean habitat, construction BMPs will be implemented to ensure that construction activities minimize effects on the habitat. Protective fencing will be installed around vernal pool aquatic invertebrate habitat with signage identifying these areas as containing sensitive biological resources. A biological monitor will ensure that fencing and BMPs are maintained for the duration of construction and that construction personnel are provided the necessary worker awareness training."
          },
          "BIO-18": {
            "code": "BIO-18",
            "title": "Avoid and Minimize Impacts on Valley Elderberry Longhorn Beetle (FEIR)",
            "source": "EIR",
            "text": "All Project Alternatives\nThe following measures will be required only for surface construction and restoration activities occurring in suitable habitat for valley elderberry longhorn beetle as defined in Appendix 13B, Section 13B.39, Valley Elderberry Longhorn Beetle, and by additional assessments conducted during the planning for work in a given area. Surveys and monitoring will be conducted from locations where access allows.\nAs properties become accessible for initiating project activities, DWR will require surveys for elderberry shrubs to be conducted in construction areas by a USFWS-approved biologist. Elderberry shrubs will be avoided to the maximum extent practicable. Complete avoidance (i.e., no adverse effects) will be assumed when a buffer of at least 165 feet is established and maintained around elderberry shrubs containing stems measuring 1 inch or greater in diameter at ground level (U.S. Fish and Wildlife Service 2017a:10, 11).\nElderberry shrubs that have stems measuring 1 inch or greater in diameter at ground level determined or assumed to be occupied, according to the criteria in the 2017 Framework or the most recent available guidance at that time, that are identified within project footprints that cannot be avoided (i.e., those in the project footprint) will be transplanted to conservation areas identified in the CMP. Transplanting will follow the guidance outlined in USFWS&rsquo;s 2017 Framework for Assessing Impacts on Valley Elderberry Longhorn Beetle (Desmocerus californicus dimorphus)&nbsp;(2017 Framework) or the most recent available guidance at that time.\nFor shrubs not directly affected by construction but that occur within 165 feet of ground-disturbing activities, the following measures will be implemented, which come from the USFWS 2017 Framework.\n\nFencing. All areas to be avoided during construction activities will be fenced and flagged as close to construction limits as feasible.&nbsp;\nAvoidance area. Activities that may damage or kill an elderberry shrub (e.g., trenching, paving, etc.) may need an avoidance area of at least 20 feet from the drip-line, depending on the type of activity.&nbsp;\nTiming. As much as feasible, all activities that occur within 165 feet of an elderberry shrub, will be conducted outside of the flight season of the species (March to July).&nbsp;\nTrimming. Trimming may remove or destroy valley elderberry longhorn beetle eggs and/or larvae and may reduce the health and vigor of the elderberry shrub. In order to avoid and minimize adverse effects on valley elderberry longhorn beetle, trimming will occur between November 1 and February 1 and will avoid the removal of any branches or stems that are = 1 inch in diameter. Measures to address regular or largescale maintenance (trimming) should be established in consultation with USFWS.&nbsp;\nChemical usage. Herbicides will not be used within the drip-line of an elderberry shrub. Insecticides will not be used within 100 feet of an elderberry shrub. All chemicals will be applied using a backpack sprayer or similar direct-application method."
          },
          "BIO-21": {
            "code": "BIO-21",
            "title": "Avoid and Minimize Impacts on Bumble Bees (FEIR)",
            "source": "EIR",
            "text": "As properties become accessible for initiating project and restoration activities, DWR will require site-level surveys to determine whether Crotch bumble bee is present.&nbsp;\nIf suitable habitat for Crotch bumble bee, as defined in Appendix 13B, Section&nbsp;13B.45, Crotch Bumble Bee, and by additional assessments conducted during the planning for work in a given area, is identified within construction or restoration areas, and if these areas will have surface ground disturbance during the active season (approximately February 1 through October 31), the following measures will be implemented. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\n1. The ground disturbance footprint will be surveyed for foraging individuals and nests by a qualified biologist(s) familiar with the identification and life histories of Crotch bumble bee.&nbsp;\na. &nbsp; &nbsp;Preconstruction Surveys. A total of three preconstruction surveys will be conducted prior to any ground-disturbing project activities or vegetation removal that will take place during the active season for Crotch bumble bee (approximately February 1 through October 31).9 Each preconstruction survey will, ideally, be spaced 2 to 4 weeks apart, with the last preconstruction survey (i.e., clearance survey) taking place within 72 hours prior to construction activity. The qualified biologist will perform meandering transects through the planned construction footprint, plus a&nbsp;50-foot buffer where accessible, at least an hour after sunrise and at least two hours before sunset, though ideally between 9:00 a.m. and 1:00 p.m., to visually survey the area for bumble bee activity. The duration of the survey will be the minimum amount of time necessary to adequately survey the area, or 30 minutes, whichever is longer.b. &nbsp; &nbsp;If a suspected or confirmed Crotch bumble bee is identified during any of these surveys, the qualified biologist will notify CDFW within 48 hours.\n2. &nbsp; &nbsp;If only foraging Crotch bumble bee is observed (i.e., no nest is found), construction activities can proceed without a full-time qualified biologist; however, if there is a lapse in initial construction disturbance more than 2 weeks, an additional clearance survey will be repeated prior to ground disturbance. If a Crotch bumble bee nest is found, a qualified biologist will provide biological construction monitoring as long as needed to ensure implementation of applicable measures below.3. &nbsp; &nbsp;If a nest is discovered within the construction or restoration area, a non-disturbance buffer of 50 feet will be established around the nest until the nest senesces or becomes inactive and is no longer in use, as determined by the qualified biologist or until the project activities in the project area are complete, whichever is first. The nest location will be recorded with GPS and will be reported to CDFW within 48 hours of finding the nest.4. &nbsp; &nbsp;If implementation of a 50-foot non-disturbance buffer is not possible but disturbance of the nest can be avoided, a buffer of the greatest distance possible will be established in coordination with CDFW, and ground disturbance can proceed under supervision of the qualified biologist.5. &nbsp; &nbsp;If the nest cannot be avoided and will be lost, an attempt will be made to relocate the nest. A qualified biologist will attempt to relocate the nest to a suitable location outside the project footprint. Nest relocation will follow the general guidelines described by Xerces Society for relocating an entire nest and substrate (Xerces Society 2022). A bumble bee nest relocation plan will be prepared and submitted to CDFW for approval prior to ground disturbance. The relocation plan will describe the following.a. &nbsp; &nbsp;How the bumble bee nest will be relocated.&nbsp;b. &nbsp; &nbsp;Who will conduct the relocation.&nbsp;c. &nbsp; &nbsp;Where potential relocation sites will be located (i.e., as close to the existing location as feasible and have access to suitable foraging habitat to sustain the nest through the nesting season).d. &nbsp; &nbsp;Suitable habitat requirements.e. &nbsp; &nbsp;Methods of monitoring the relocated nest.6. &nbsp; &nbsp;If a suitable, nearby location for nest relocation cannot be identified, an off-site location will be chosen in coordination with the CDFW.7. &nbsp; &nbsp;Once relocated, the nest will be monitored for 1 week. Monitoring of an active nest can be conducted using a motion-detecting wildlife trail camera or daily by a qualified biologist based on site-specific conditions, weather, and species behaviors.8. &nbsp; &nbsp;If monitoring suggests the nest relocation was successful (i.e., it is not immediately abandoned following relocation, bees are observed returning to the relocated nest following foraging activity, and it is continued to be used at least 1 week following relocation), no further measures will be required.&nbsp;\n9. &nbsp; &nbsp;If monitoring finds nest relocation to be unsuccessful, as determined through premature absence of bee activity, DWR will create or enhance and protect suitable foraging and nesting habitat at a ratio of 1:1 for the lost suitable habitat associated with the nest (i.e., 1 acre of created or enhanced and protected habitat to 1 acre of permanently lost habitat). Lost suitable habitat is defined as habitat that is suitable for foraging, nesting, or overwintering within a 1.8-kilometer buffer10 around the lost nest that is permanently affected.&nbsp;10. &nbsp; &nbsp;If biological monitoring or surveys find a recently deceased Crotch bumble bee within the project area, CDFW will be notified and the carcass will be salvaged, photographed, and appropriately recorded (e.g., date, collection location) and stored for shipment to CDFW Wildlife Health Lab.11. &nbsp; &nbsp;Temporarily disturbed grassland identified as suitable bumble bee habitat by a qualified biologist will be revegetated using a seed mix combination that includes nectar- and pollen-producing plants commonly used as a food source by Crotch bumble bee. Perennial flowers constitute the major forage resource for bumble bees (Jennersten et al. 1992; Dramstad and Fry 1995), therefore, these plants will be incorporated into the seed mix, as applicable for the existing habitat conditions. Nectar- and pollen-producing plants that may be used by Crotch bumble bee include the genera Asclepias, Chaenactis, Lupinus, Phacelia, and Salvia or the families Fabaceae, Apocynaceae, Asteraceae, Lamiaceae, Hydrophyllaceae, Plantaginaceae, Onagraceae, Papaveraceae, Polygonaceae, Boraginaceae, including nonnative, noninvasive flowering plants.\nBumble bee survey considerations have been published by CDFW (California Department of Fish and Wildlife 2023). Currently, there are no CDFW-approved survey protocols specific to Crotch bumble bee. Therefore, with the above measures, DWR proposes to use a project-specific methodology (above) that is consistent with the CDFW&rsquo;s Survey Considerations for California Endangered Species Act (CESA) Candidate Bumble Bee Species (California Department of Fish and Wildlife 2023), which includes the following major components: surveyors must be knowledgeable about the identification and biology of Crotch bumble bees; surveys must be conducted at the appropriate time of year and under temperature conditions when bumble bees are active; and suitable nesting and foraging habitat must be surveyed prior to ground disturbance. Surveys would include the potential for non-lethal capture by permitted biologists if necessary to facilitate identification. If a survey methodology is developed specifically for determining presence or absence of Crotch bumble bee and is approved by CDFW, that methodology will be used.&nbsp;"
          },
          "BIO-22a": {
            "code": "BIO-22a",
            "title": "Avoid and Minimize Impacts on California Tiger Salamander (FEIR)",
            "source": "EIR",
            "text": "The following measures for California tiger salamander will be required only for surface construction activities occurring within suitable habitat as defined in Appendix 13B, Section 13B.47, California Tiger Salamander, and by additional assessments conducted during the planning for work in a given area. Surveys and monitoring will be conducted from locations where access allows.&nbsp;During project implementation and prior to project construction, DWR will implement the following measures.&nbsp;\n1. When each site is available for surveys a USFWS- and CDFW-approved biologist will then delineate California tiger salamander habitat at each project site, based on the definition of suitable habitat, including both aquatic and upland habitat. The criteria used for assessing suitable habitat have been adopted from the primary constituent elements identified in the 2005 critical habitat designation for the Central Valley distinct population segment of California tiger salamander (70 FR 49390). Habitat deemed suitable will include at least one of the following:\na. &nbsp; &nbsp;Aquatic&mdash;Standing bodies of fresh water (including natural and human-made [e.g., stock]) ponds, vernal pools, and other ephemeral or permanent waterbodies that typically support inundation during winter rains and hold water for a minimum of 12 weeks in a year of average rainfall.&rsquo;b. &nbsp; &nbsp;Upland&mdash;Upland habitats within 1.3 miles of suitable aquatic habitat that contain small mammal burrows or other underground habitat that California tiger salamander depend upon for food, shelter, and protection from the elements and predation. Accessible upland dispersal habitat between occupied locations that allow for movement between such sites.&nbsp;\n2. &nbsp; &nbsp;Once habitat has been delineated, the USFWS- and CDFW-approved biologist may use preconstruction surveys performed using a method approved by USFWS and CDFW to determine presence of the species on the project site to enable further determination of compensatory mitigation requirements. In the event of a dry year, the aquatic habitat will be evaluated based on general suitability (e.g., evidence of suitable ponding depths, proximity to occurrences) and the habitat will be assumed to represent occupied habitat. In areas where ground disturbance will occur, grasses within suitable upland habitat will be mowed within 24 hours of clearance surveys to allow the biologist to see and survey for California tiger salamander and burrows. Clearance surveys are surveys that are conducted immediately before ground-disturbing activities to find and relocate California tiger salamander outside of the work area; additional information on clearance surveys is described in measure 11. Light mowing equipment will be used and will only occur during the day in dry conditions when California tiger salamander is unlikely to be aboveground.&nbsp;3. &nbsp; &nbsp;To the greatest extent possible, identified and delineated habitat will be completely avoided.\nFor areas verified as being suitable for California tiger salamander and that can&rsquo;t be avoided, the following measures will be implemented.&nbsp;\n4. &nbsp; &nbsp;To the extent practicable, initial ground-disturbing activities will not be conducted between November 1 and March 31, or extended to April 30 during wet years, in areas identified during the planning stages as providing suitable California tiger salamander habitat, to avoid the period when they are most likely to be moving through upland areas. Once clearance surveys have been conducted, exclusionary fence is in place, the area has been surveyed, and initial ground disturbance has occurred, work within the disturbed area can occur outside the construction window (defined as April 1 through October 31 or, during wet years, May 1 through October 31).5. &nbsp; &nbsp;If aquatic habitat is identified by the designated biologist(s) within the project area southwest of Byron Highway, DWR will restrict construction activities to beyond 300 feet of breeding habitat, during the breeding season (November 1 through March 31, or extended to April 30 during wet years). Where aquatic habitat cannot be avoided by 300 feet during the breeding season, DWR will notify and coordinate with CDFW to implement site-specific avoidance and minimization measures. Where construction takes place in aquatic habitat, activities will not be initiated until after the habitat is no longer ponding water or until a USFWS- and CDFW-approved biologist has conducted clearance surveys of the aquatic habitat for presence of California tiger salamander and results have been submitted to the agencies. No work or dewatering will be allowed in occupied habitat. If a work site is to be temporarily dewatered by pumping, intakes will be completely screened with wire mesh not larger than 5 millimeters to prevent larger aquatic species from entering the pump system.6. &nbsp; &nbsp;Ground-disturbing activities will be designed to minimize or eliminate effects on rodent burrows that may provide suitable cover habitat for California tiger salamander. Surface-disturbing activities will avoid areas with a high concentration of burrows to the greatest extent practicable. In addition, when a concentration of burrows is present in a work site, the area plus a 50-foot buffer will be staked or flagged to ensure that work crews are aware of their location and to facilitate avoidance of the area.&nbsp;\n7. &nbsp; &nbsp;All initial ground disturbance or vegetation removal (clearing) will be limited to periods of no or low rainfall (less than 0.08 inch per 24-hour period and less than 40% chance of rain). DWR will avoid clearance work during rainfall events between sunset and sunrise. Clearing activities within California tiger salamander habitat will cease 24 hours prior to a 40% or greater forecast of rain from the closest National Weather Service (NWS) weather station. Clearing may continue 24 hours after the rain ceases, if no more than 0.5 inch of precipitation is in the 72-hour forecast. If clearing must continue when rain is forecast (greater than 40% chance of rain), a USFWS- and CDFW-approved biologist will survey the work site before clearing begins each day rain is forecast. If rain exceeds 0.5 inch during a 24-hour period, clearing will cease until the NWS forecasts no further rain. If this measure cannot be implemented as written or modifications to this timing are pursued, DWR will notify and coordinate with the agencies based on site conditions and expected risks to California tiger salamander. For a given site that has exclusion fencing in place and all surface soil disturbance completed (i.e., no burrows present), these restrictions would no longer apply. If there is a lapse in construction in a work area for 7 days or more due to weather conditions, clearance surveys will be reconducted as described in California tiger salamander measure 11.8. &nbsp; &nbsp;To the extent practicable, earthmoving and construction activities will cease no less than 30 minutes before sunset and will not begin again until no less than 30 minutes after sunrise within 300 feet of California tiger salamander habitat. Except when necessary for driver or pedestrian safety, to the greatest extent practicable, artificial lighting at a work site will be prohibited during the hours of darkness.9. &nbsp; &nbsp;At least 30 days prior to any ground-disturbing activities, DWR will prepare and submit a relocation plan for USFWS&rsquo;s and CDFW&rsquo;s written approval. The relocation plan will contain the name(s) of the USFWS- and CDFW-approved biologist(s) to relocate California tiger salamanders, the method of relocation (if different than described), a map, and a description of the proposed release site(s) within 300 feet of the work area or at a distance otherwise agreed to by USFWS and CDFW, and written permission from the landowner to use their land as a relocation site. The relocation plan will also include methods for searching for California tiger salamander (i.e., clearance surveys) in the work areas to avoid and minimize the potential for injury and mortality. Generally, work areas will be attempted to be cleared of California tiger salamanders by placing pit fall traps along the inside of the exclusion fence (i.e., within work areas) or by hand-excavating mammal burrows. Methods will be selected based on site specific conditions in a given work area and will be approved by USFWS and CDFW. Any California tiger salamanders found will be relocated according to the agency-approved relocation plan and will follow the handling protocols outlined below.10. &nbsp; &nbsp;When there is California tiger salamander habitat within 300 feet of construction activities, exclusion fencing will be installed along the perimeter of construction sites to protect California tiger salamander habitat and minimize the potential for salamanders to enter the construction work area. The perimeter of construction sites within 300 feet of California tiger salamander habitat will be fenced with fencing material suitable for excluding amphibians by no more than 14 days prior to the start of construction activities (e.g., staging, vegetation removal, grading) in a given area. The placement of exclusion fencing will be determined, in part, by the locations of suitable habitat for the species (defined above). A conceptual fencing plan will be submitted to USFWS and CDFW prior to the start of construction and the exclusion fencing will be shown on the final construction plans. DWR will include the amphibian exclusion fence specifications including installation and maintenance criteria in the bid solicitation package special provisions. The amphibian exclusion fencing will remain in place for the duration of construction and will be regularly inspected and fully maintained. The biological monitor and construction manager will be responsible for checking the exclusion fencing around the work areas each day of construction for wildlife trapped inside and to ensure that they are intact and upright. This will be especially critical during times of inclement weather that could damage the fencing. Repairs to the amphibian exclusion fence will be made within 24 hours of discovery of a breach. Where construction access is necessary, gates will be installed in the exclusion fence and fencing will be installed to direct animals away from the work area to the extent practicable (e.g., fencing will flare out and turn back toward suitable habitat).&nbsp;\n11. &nbsp; &nbsp;Clearance surveys will be conducted by a USFWS- and CDFW-approved biologist immediately prior to the initiation of any ground-disturbing activities or vegetation clearing, including immediately prior to exclusion fence installation, in areas identified as having suitable California tiger salamander habitat. These surveys will consist of walking surveys within the work sites and investigating suitable aquatic and upland habitat including potential refugia habitat such as small woody debris, refuse, burrow entrances, etc., that are not directly disturbed by project activities. If there is a lapse in construction in a work area for 7 days or more, these surveys will be repeated before activities resume.12. &nbsp; &nbsp;The USFWS- and CDFW-approved biologist will conduct clearance surveys within the construction work area at the beginning of each day and regularly throughout the workday when construction activities are occurring that may result in take of California tiger salamander. Surveys will be conducted in the same manner as the preconstruction surveys.13. &nbsp; &nbsp;If a California tiger salamander is observed at any point within a work area, the USFWS- and CDFW-approved biologist will implement the following species observation and handling protocol. Only USFWS- and CDFW-approved biologists will participate in activities associated with the capture, handling, and monitoring of California tiger salamanders. If a California tiger salamander is encountered in a construction or restoration area, activities within a minimum of 10 feet of the individual will cease immediately and the construction manager and USFWS- and CDFW-approved biologist will be notified to observe and follow within 10 feet of the individual to ensure it has safely left the area. A larger protective buffer may be established, depending on site-specific conditions such as the use of heavy equipment, as determined by the USFWS- and CDFW-approved biologist. The California tiger salamander will be allowed to leave the area of its own volition, and work may resume when it is no longer in harm&rsquo;s way. All personnel on-site will be notified of the finding and no work will occur within a minimum of 10 feet of the California tiger salamander, or larger buffer depending on site-specific conditions, without a USFWS- and CDFW-approved biologist present. If the salamander does not move out of the area on its own, and it is determined by the approved biologist, in coordination with the construction manager, that relocating the California tiger salamander is necessary, these steps will be followed:a. &nbsp; &nbsp;Prior to handling and relocation, the USFWS- and CDFW-approved biologist will take precautions to prevent introduction of amphibian diseases in accordance with the Interim Guidance on Site Assessment and Field Surveys for Determining Presence or a Negative Finding of the California Tiger Salamander (U.S. Fish and Wildlife Service 2003), or the most up-to-date guidance available at the time. Disinfecting equipment and clothing is especially important when biologists are coming to the action area to handle amphibians after working in other aquatic habitats. California tiger salamanders will also be handled and assessed according to the Restraint and Handling of Live Amphibians (U.S. Geological Survey National Wildlife Health Center 2001), or the most up-to-date guidance available at the time.b. &nbsp; &nbsp;California tiger salamanders will be captured by hand, dipnet, or other USFWS- and CDFW-approved methodology, transported, and relocated to nearby suitable habitat outside of the work area and released as soon as practicable the same day of capture. Following the conditions of the relocation plan described in measure 9, individuals will be relocated outside of the exclusion fencing and no more than 300 feet outside of the work area to areas with an active rodent burrow or burrow system (unless otherwise approved by USFWS). Holding/transporting containers and dipnets will be thoroughly cleaned, disinfected, and rinsed with fresh water prior to use within the action area. USFWS and CDFW will be notified within 24 hours of all capture, handling, and relocation efforts. USFWS- and CDFW-approved biologists will wear clean, new disposable surgical style (nitrile, etc.) gloves and/or ensure that their hands are free of soaps, oils, creams, lotions, repellents, or solvents of any sort while capturing and relocating individuals. To avoid transferring disease or pathogens in handling of the amphibians, USFWS- and CDFW-approved biologists will follow the Declining Amphibian Populations Task Force&rsquo;s &ldquo;Code of Practice&rdquo; or the most recent guidance.&nbsp;\nc. &nbsp; &nbsp;If an injured California tiger salamander is encountered and the USFWS- and CDFW-approved biologist determines the injury is minor or healing and the salamander is likely to survive, the salamander will be released immediately, consistent with the preapproved relocation plan as described in measure 9. The California tiger salamander will be monitored until it is determined that it is not imperiled by predators or other dangers.d. &nbsp; &nbsp;If the USFWS- and CDFW-approved biologist determines that the California tiger salamander has major or serious injuries because of activities at the work site, the USFWS- and CDFW-approved biologist, or designee, will immediately take it to a USFWS- and CDFW-approved facility. If taken into captivity, the individual will not be released into the wild unless it has been kept in quarantine and the release is authorized by USFWS. DWR will bear any costs associated with the care or treatment of such injured California tiger salamanders. The circumstances of the injury, the procedure followed, and the final disposition of the injured animal will be documented in a written incident report. Notification to USFWS and CDFW of an injured or dead California tiger salamander in the project area will be reported within 24 hours and will include details such as whether or not its condition resulted from activities related to the proposed project. In addition, the USFWS- and CDFW-approved biologist will follow up with USFWS and CDFW in writing within 2 calendar days of the finding. Written notification to USFWS and CDFW will include the following information: the species, number of animals taken or injured, sex (if known), date, time, location of the incident or of the finding of a dead or injured animal, how the individual was taken, photographs of the specific animal, the names of the persons who observed the take or found the animal, and any other pertinent information. Dead specimens will be preserved, as appropriate, and held in a secure location until instructions are received from USFWS regarding the disposition of the specimen.\n14. &nbsp; &nbsp;The USFWS- and CDFW-approved biologist will have the authority to stop activities at the work site if they determine that any of avoidance and minimization measures are not being fulfilled.15. &nbsp; &nbsp;If the exclusion fence is compromised during the rainy season, when California tiger salamanders are likely to be active, the fence will be repaired and a survey will be conducted immediately preceding construction activity that occurs in modeled or suitable California tiger salamander habitat, as determined by a USFWS- and CDFW-approved biologist, or in advance of any activity that may result in take of the species. The biologist will search along exclusion fences, and beneath vehicles each morning before the vehicles are moved. The survey will include a careful inspection of all potential hiding spots, such as along exclusion fencing; large, downed woody debris; and the perimeter of ponds, wetlands, and riparian areas. Any California tiger salamanders found will be captured and relocated according to the USFWS/CDFW-approved relocation plan.&nbsp;\n16. &nbsp; &nbsp;If work must be conducted at night within 300 feet of California tiger salamander habitat, all lighting will be directed away and shielded from California tiger salamander habitat outside the construction area to minimize light spillover to the greatest extent possible. If light spillover into adjacent California tiger salamander habitat occurs, a USFWS- and CDFW-approved biologist will be present during night work to survey for burrows and emerging California tiger salamanders in areas illuminated by construction lighting. If California tiger salamander is found aboveground the USFWS- and CDFW-approved biologist has the authority to terminate the project activities until the light is directed away from the burrows, the California tiger salamander moves out of the illuminated area, or the California tiger salamander is relocated out of the illuminated area by the USFWS- and CDFW-approved biologist.17. &nbsp; &nbsp;If requested before, during, or upon completion of ground disturbance and construction activities where suitable California tiger salamander habitat is present, DWR will require that USFWS and CDFW can access and inspect the work site for compliance with the description of the project and avoidance and minimization measures, and to evaluate effects on the California tiger salamander and its habitat. A USFWS- and CDFW-approved biologist will be on-site during all activities that may result in take of California tiger salamander."
          },
          "BIO-22b": {
            "code": "BIO-22b",
            "title": "Avoid and Minimize Operational Traffic Impacts on Wildlife (FEIR)",
            "source": "EIR",
            "text": "DWR will implement the following measures to avoid and minimize wildlife-vehicle collisions on DWR facility access roads.\n\nVehicles will observe a maximum speed limit of 15 miles per hour on unpaved non-public DWR access roads where it is safe to do so. Vehicles will observe a maximum speed limit of 30 miles per hour on paved, non-public DWR access roads. Speed limits will be posted in both directions.&nbsp;\nTo extent practicable, traffic control structures, such as speed bumps, will be utilized to reduce speeds.&nbsp;\nWildlife crossing signs will be posted in both directions on new or widened access roads that overlap with habitat for special-status wildlife, to the extent practicable."
          },
          "BIO-23": {
            "code": "BIO-23",
            "title": "Avoid and Minimize Impacts on Western Spadefoot Toad (FEIR)",
            "source": "EIR",
            "text": "The following measures for western spadefoot toad will be required only for surface construction activities occurring within suitable habitat as defined in Appendix 13B, Section 13B.48 and by additional assessments conducted during the planning for work in a given area. Surveys and monitoring will be conducted from locations where access allows.&nbsp;As properties become accessible for initiating project activities within areas of modeled western spadefoot toad habitat, the suitability of the modeled habitat will be assessed on the ground by a biologist qualified to identify aquatic and upland habitat for the species.&nbsp;\nFor areas verified as being suitable for western spadefoot toad, the following measures will be implemented.&nbsp;\n\n&nbsp; &nbsp;Except for limited vegetation clearing necessary to minimize effects on nesting birds, initial suitable upland habitat clearance and disturbance will not be conducted between November 1 and March 31, with the period extending to April 30 during wet years. Once the initial ground disturbance has occurred, the area has been surveyed, and exclusionary fencing is in place, work in the disturbed area can occur outside the construction window (defined as April 1 through October 31 or, during wet years, May 1 through October 31).2. &nbsp; &nbsp;Where construction or restoration activities take place in aquatic habitat, activities will not be initiated until after the habitat is no longer ponding water or until a biologist has surveyed the aquatic habitat for presence of western spadefoot toad larvae. No work or dewatering will be allowed in occupied habitat. If a work site is to be temporarily dewatered by pumping, intakes will be completely screened with wire mesh not larger than 5 millimeters to prevent larger aquatic species from entering the pump system.3. &nbsp; &nbsp;Ground-disturbing activities will be designed to minimize or eliminate effects on rodent burrows that may provide suitable upland habitat for western spadefoot toad. Surface-disturbing activities will avoid areas with a high concentration of burrows to the greatest extent practicable. In addition, when a concentration of burrows is present in a work site, the area plus a 50-foot buffer will be staked or flagged to ensure that work crews are aware of their location and to facilitate avoidance of the area.4. &nbsp; &nbsp;All initial ground disturbance or vegetation removal (clearing) will be limited to periods of no or low rainfall (less than 0.08 inch per 24-hour period and less than 40% chance of rain). To the extent practicable, clearing activities within western spadefoot toad habitat will cease 24 hours prior to a 40% or greater forecast of rain from the closest NWS weather station. Clearing may continue 24 hours after the rain ceases, if no more than 0.5 inch of precipitation is in the 72-hour forecast. If clearing must continue when rain is forecast (greater than 40% chance of rain), a qualified biologist will survey the work site before clearing begins each day rain is forecast. If rain exceeds 0.5 inch during a 24-hour period, clearing will cease until the NWS forecasts no further rain. For a given site that has exclusion fencing in place and all surface soil disturbance completed (i.e., no burrows present), these restrictions would no longer apply.5. &nbsp; &nbsp;To the extent feasible, as determined by the contractor in coordination with the qualified biologist, earthmoving and construction activities will cease no less than 30 minutes before sunset and will not begin again until no less than 30 minutes after sunrise within 300 feet of western spadefoot toad habitat. Suitability of aquatic and upland habitat characteristics will be determined by the qualified biologist consistent with the description of suitable habitat defined in Appendix 13B, Section 13B.48, Western Spadefoot and by additional assessments conducted prior to ground disturbance. Except when necessary for driver or pedestrian safety, to the greatest extent practicable, artificial lighting at a work site will be prohibited during the hours of darkness.\n\n6. &nbsp; &nbsp;When there is western spadefoot habitat within 300 feet of construction activities, exclusion fencing will be installed along the perimeter of construction sites to protect western spadefoot habitat and minimize the potential for toads to enter the construction work area. The perimeter of construction and restoration sites within western spadefoot toad habitat will be fenced with fencing material suitable for excluding amphibians by no more than 14 days prior to the start of construction activities (e.g., staging, vegetation removal, grading) in a given area. DWR will include the amphibian exclusion fence specifications including installation and maintenance criteria in the bid solicitation package special provisions. The amphibian exclusion fencing will remain in place for the duration of construction and will be regularly inspected and fully maintained. A biological monitor and construction manager will be responsible for checking the exclusion fencing around the work areas each day of construction for wildlife trapped inside and to ensure that they are intact and upright. This will be especially critical during times of inclement weather that can damage the fencing. Repairs to the amphibian exclusion fence will be made within 24 hours of discovery of a breach. Where construction access is necessary, gates will be installed in the exclusion fence and fencing will direct animals away from the work area to the extent practicable (e.g., fencing will flare out and turn back toward suitable habitat).7. &nbsp; &nbsp;Preconstruction surveys will be conducted by a qualified biologist immediately prior to the initiation of any ground-disturbing activities or vegetation clearing, including immediately prior to exclusion fence installation, in areas identified as having suitable western spadefoot toad habitat. These surveys will consist of walking surveys within the work sites and investigating suitable aquatic and upland habitat including potential refugia habitat such as small woody debris, refuse, burrow entrances, etc., that are not directly disturbed by project activities. If there is a lapse in construction in a work area for 7 days or more, these surveys will be repeated before activities resume.8. &nbsp; &nbsp;If the exclusion fence is compromised during the rainy season, a survey will be conducted immediately preceding construction activity that occurs in suitable western spadefoot toad habitat, or in advance of any activity that may result in take of the species. The biologist will search along exclusion fences, and beneath vehicles each morning before the vehicles are moved. Surveys will be conducted in the same manner as the preconstruction surveys.9. &nbsp; &nbsp;If a western spadefoot toad is encountered in a construction or restoration area, activities within a minimum of 10 feet of the individual will cease immediately, the construction manager and biological monitor will be notified, and the biological monitor will observe and follow the individual within 10 feet to ensure it has safely left the area. A larger protective buffer may be established, depending on site-specific conditions such as the use of heavy equipment, or other activities that may cause harm to the individual, as determined by the biological monitor. All personnel on-site will be notified of the finding and at no time will work occur within a minimum of 10 feet of the toad, or larger buffer depending on site-specific conditions, without a biological monitor present. The toad will be allowed to leave the area of its own volition, and work may resume when it is no longer in harm&rsquo;s way. If the toad does not move out of the area on its own, and it is determined by the biologist that relocating is necessary, these steps will be followed:a. &nbsp; &nbsp;Prior to handling and relocation, the biologist will take precautions to prevent introduction of amphibian diseases by following guidance in The Declining Amphibian Task Force Fieldwork Code of Practice (U.S. Fish and Wildlife Service 2019:1) or the most up-to-date guidance available at the time. Western spadefoot toads will also be handled and assessed according to the Restraint and Handling of Live Amphibians (U.S. Geological Survey National Wildlife Health Center 2001) or the most up-to-date guidance available at the time.&nbsp;\nb. Western spadefoot toads will be captured by hand, dipnet, or other CDFW-approved methodology, transported, and relocated to nearby suitable habitat outside of the work area and released as soon as practicable the same day of capture."
          },
          "BIO-24a": {
            "code": "BIO-24a",
            "title": "Avoid and Minimize Impacts on California Red-Legged Frog and Critical Habitat (FEIR)",
            "source": "EIR",
            "text": "The following measures for California red-legged frog will be required for surface construction activities occurring within suitable habitat as defined in Appendix 13B, Section 13B.49, California Red-Legged Frog, and by additional assessments conducted during project implementation and prior to project construction in a given area. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\nTo the extent feasible, DWR will minimize impacts on critical habitat for California red-legged frog containing the primary constituent elements listed below.&nbsp;\n\n&nbsp; &nbsp;Aquatic Breeding Habitat. Standing bodies of fresh water (with salinities less than 4.5 parts per thousand [ppt]), including: natural and human-made (e.g., stock) ponds, slow-moving streams or pools within streams, and other ephemeral or permanent waterbodies that typically become inundated during winter rains and hold water for a minimum of 20 weeks in all but the driest of years.2. &nbsp; &nbsp;Non-Breeding Aquatic Habitat. Freshwater pond and stream habitats, as described above, that may or may not hold water long enough for the species to complete its aquatic life cycle but that do provide for shelter, foraging, predator avoidance, and aquatic dispersal for juvenile and adult California red-legged frogs. Other wetland habitats that would be considered to meet these criteria include, but are not limited to: plunge pools within intermittent creeks, seeps, quiet water refugia during high water flows, and springs of sufficient flow to withstand short-term dry periods.3. &nbsp; &nbsp;Upland Habitat. Upland areas adjacent to or surrounding breeding and non-breeding aquatic and riparian up to a distance of 1 mile in most cases (i.e., depending on surrounding landscape and dispersal barriers) including various vegetational series such as grassland, woodland, forest, wetland, or riparian areas that provide shelter, forage, and predator avoidance. Upland features are also essential in that they are needed to maintain the hydrologic, geographic, topographic, ecological, and edaphic features that support and surround the aquatic, wetland, or riparian habitat. These upland features contribute to the filling and drying of the wetland or riparian habitat and are responsible for maintaining suitable periods of pool inundation for larval frogs and their food sources, and provide breeding, non-breeding, feeding, and sheltering habitat for juvenile and adult frogs (e.g., shelter, shade, moisture, cooler temperatures, a prey base, foraging opportunities, and areas for predator avoidance). Upland habitat can include structural features such as boulders, rocks and organic debris (e.g., downed trees, logs), as well as small mammal burrows and moist leaf litter.4. &nbsp; &nbsp;Dispersal Habitat. Accessible upland or riparian habitat within and between occupied or previously occupied sites that are located within 1 mile of each other, and that support movement between such sites. Dispersal habitat includes various natural habitats and altered habitats such as agricultural fields, which do not contain barriers to dispersal. Dispersal habitat does not include moderate- to high-density urban or industrial developments with large expanses of asphalt or concrete, nor does it include large lakes or reservoirs over 50 acres in size, or other areas that do not contain those features identified in primary constituent elements 1, 2, or 3 as essential to the conservation of the species.&nbsp;During project implementation and prior to project construction, DWR will implement the following measures.\n\n5. &nbsp; &nbsp;When each site is available for surveys, biologist approved by USFWS, will then delineate California red-legged frog habitat at each project site, based on an agreed-upon definition of suitable habitat, including both aquatic and upland habitat.6. &nbsp; &nbsp;Once habitat has been delineated, the qualified biologist may conduct surveys performed using a method approved by USFWS to determine presence of the species on the project site to enable further determination of compensatory mitigation requirements. In the event of a dry year, the aquatic habitat will be evaluated based on general suitability (e.g., evidence of suitable ponding depths, proximity to occurrences) and the habitat will be assumed to represent occupied habitat.7. &nbsp; &nbsp;To the greatest extent possible, identified and delineated habitat will be completely avoided.\nFor areas verified as being suitable for California red-legged frog and that can&rsquo;t be avoided, the following measures will be implemented.&nbsp;\n8. &nbsp; &nbsp;To the extent practicable, initial ground-disturbing activities will not be conducted between September 1 and April 30, to avoid the wet season which encompasses breeding as well as potential upland migration before and after. Once the area has been surveyed, initial ground disturbance has occurred, and exclusionary fencing is in place, the seasonal restriction would not apply.9. &nbsp; &nbsp;Ground-disturbing activities will be designed to minimize or eliminate effects on rodent burrows that may provide suitable cover habitat for California red-legged frog. Surface-disturbing activities will avoid areas with a high concentration of burrows to the greatest extent practicable. In addition, when a concentration of burrows is present in a work site, the area will be staked or flagged to ensure that work crews are aware of their location and to facilitate avoidance of the area.10. &nbsp; &nbsp;All initial ground disturbance or vegetation removal (clearing) will be limited to periods of no or low rainfall (less than 0.08 inch per 24-hour period and less than 40% chance of rain). To the extent practicable, clearing activities within California red-legged frog habitat will cease 24 hours prior to a 40% or greater forecast of rain from the closest NWS weather station. Clearing may continue 24 hours after the rain ceases, if no more than 0.5 inch of precipitation is in the 72-hour forecast. If clearing must continue when rain is forecast (i.e., greater than 40% chance of rain), a USFWS-approved biologist will survey the work site before clearing begins each day rain is forecast. If rain exceeds 0.5 inch during a 24-hour period, clearing will cease until the NWS forecasts no further rain. Modifications to this timing may be approved by USFWS based on site conditions and expected risks to California red-legged frog. For a given site that has exclusion fencing in place and all surface soil disturbance completed (i.e., no burrows present), these restrictions would no longer apply.11. &nbsp; &nbsp;To the maximum extent practicable, nighttime construction will be minimized or avoided when working in suitable California red-legged frog habitat. To the greatest extent practicable, earthmoving and construction activities will cease no less than 30 minutes before sunset and will not begin again prior to no less than 30 minutes after sunrise. Except when necessary for driver or pedestrian safety, artificial lighting at a work site will be prohibited during the hours of darkness when working in suitable California red-legged frog habitat.12. &nbsp; &nbsp;If work must be conducted at night within 300 feet of California red-legged frog habitat, all lighting will be directed away and shielded from California red-legged frog habitat outside the construction area to minimize light spillover to the greatest extent possible. If light spillover into adjacent California red-legged frog habitat occurs, a USFWS-approved biologist will be present during night work to survey for California red-legged frogs in areas illuminated by construction lighting. If California red-legged frog is found to be illuminated, the USFWS-approved biologist has the authority to terminate the project activities until the light is directed away from the frog&rsquo;s location, or the California red-legged frog moves out of the illuminated area.&nbsp;\n13. &nbsp; &nbsp;At least 15 days prior to any ground disturbance activities, DWR will prepare and submit a relocation plan for USFWS&rsquo;s written approval. The relocation plan will contain the name(s) of the USFWS-approved biologist(s) to relocate California red-legged frogs, the method of relocation (if different than described), a map, and a description of the proposed release site(s) outside of exclusion fencing and within 300 feet of the work area or at a distance otherwise agreed to by USFWS, and written permission from the landowner to use their land as a relocation site14. &nbsp; &nbsp;When there is California red-legged frog habitat within 300 feet of construction activities, exclusion fencing will be installed along the perimeter of construction sites to protect California red-legged frog habitat and minimize the potential for frogs to enter the construction work area. The perimeter of construction sites will be fenced with fencing material suitable for excluding amphibians by no more than 14 days prior to the start of construction. The placement of exclusion fencing will be determined, in part, by the locations of suitable habitat for the species. A conceptual fencing plan will be submitted to USFWS prior to the start of construction and the California red-legged frog exclusion fencing will be shown on the final construction plans. DWR will include the amphibian exclusion fence specifications including installation and maintenance criteria in the bid solicitation package special provisions. The amphibian exclusion fencing will remain in place for the duration of construction and will be regularly inspected and fully maintained. The biological monitor and construction manager will be responsible for checking the exclusion fencing around the work areas each day of construction for wildlife trapped inside and to ensure that they are intact and upright. This will be especially critical during times of inclement weather that can damage the fencing. Repairs to the amphibian exclusion fence will be made within 24 hours of discovery of a breach. Where construction access is necessary, gates will be installed in the exclusion fence and fencing will direct animals away from the work area to the extent practicable (e.g., fencing will flare out and turn back toward suitable habitat).15. &nbsp; &nbsp;Preconstruction surveys will be conducted by a USFWS-approved biologist immediately prior to the initiation of any ground-disturbing activities or vegetation clearing, including immediately prior to exclusion fence installation, in areas identified as having suitable California red-legged frog habitat. These surveys will consist of walking the work site limits. The USFWS-approved biologist will investigate all potential areas that could be used by the California red-legged frog for feeding, breeding, sheltering, movement, or other essential behaviors. If there is a lapse in construction in a work area for 7 days or more, these surveys will be repeated before activities resume.16. &nbsp; &nbsp;The USFWS-approved biologist will conduct clearance surveys at the beginning of each day and regularly throughout the workday when construction activities are occurring that may result in take of California red-legged frog. These surveys will consist of walking surveys within the work sites and investigating suitable aquatic and upland habitat including potential refugia habitat such as small woody debris, refuse, and burrow entrances, that are not directly disturbed by project activities.17. &nbsp; &nbsp;If a California red-legged frog is encountered at any point within a construction or restoration area, activities within a minimum of 10 feet of the individual will cease immediately, the construction manager and USFWS-approved biologist will be notified, and the USFWS-approved biologist will observe and follow within 10 feet of the individual to ensure it has safely left the area. A larger protective buffer may be established, depending on site-specific conditions such as the use of heavy equipment, or other activities that may cause harm to the individual, as determined by the USFWS-approved biologist. The frog will be allowed to leave the area of its own volition, and work may resume when it is no longer in harm&rsquo;s way. All personnel on-site will be notified of the finding and at no time will work occur within a minimum of 10 feet of the frog, or larger protective buffer depending on site-specific conditions, without a USFWS-approved biologist present. If the frog does not move out of the area on its own, and it is determined by the USFWS-approved biologist, in coordination with the construction manager, that relocating the frog is necessary, these steps will be followed:&nbsp;\na. &nbsp; &nbsp;Prior to handling and relocation, the biologist will take precautions to prevent introduction of amphibian diseases by following guidance in The Declining Amphibian Task Force Fieldwork Code of Practice (U.S. Fish and Wildlife Service 2019:1), or the most up-to-date guidance available at that time. California red-legged frogs will also be handled and assessed according to the Restraint and Handling of Live Amphibians (U.S. Geological Survey National Wildlife Health Center 2001), or the most up-to-date guidance available at that time.b. &nbsp; &nbsp;California red-legged frogs will be captured by hand, dipnet, or other USFWS-approved methodology, transported, and relocated to nearby suitable habitat outside but within 300 feet of the work area, or at a distance otherwise specified in the relocation plan described in measure 13, and released as soon as practicable the same day of capture per the relocation plan. Holding/transporting containers and dipnets will be thoroughly cleaned, disinfected, and rinsed with fresh water prior to use within construction areas. USFWS will be notified within 24 hours of all capture, handling, and relocation efforts. USFWS-approved biologists will wear clean, new disposable surgical style (latex, nitrile, etc.) gloves and/or ensure that their hands are free of soaps, oils, creams, lotions, repellents, or solvents of any sort while capturing and relocating individuals. To avoid transferring disease or pathogens in handling of the amphibians, USFWS-approved biologists will follow the Declining Amphibian Populations Task Force&rsquo;s &ldquo;Code of Practice&rdquo; or the most up to date, agency-accepted guidance.c. &nbsp; &nbsp;If an injured California red-legged frog is encountered and the USFWS-approved biologist determines the injury is minor or healing and the frog is likely to survive, the frog will be released immediately, consistent with the preapproved relocation plan as described above. The frog will be monitored until it is determined that it is not imperiled by predators or other dangers.d. &nbsp; &nbsp;If the USFWS-approved biologist determines that the frog has major or serious injuries because of activities at the work site, the USFWS-approved biologist, or designee, will immediately take it to a USFWS-approved facility. If taken into captivity, the individual will not be released into the wild unless it has been kept in quarantine and the release is authorized by USFWS. DWR will bear any costs associated with the care or treatment of such injured frogs. The circumstances of the injury, the procedure followed, and the final disposition of the injured animal will be documented in a written incident report. Notification to USFWS of an injured or dead California red-legged frog in the project area will be reported within 24 hours and will include details such as whether or not its condition resulted from activities related to the proposed project. In addition, the USFWS-approved biologist will follow up with USFWS in writing within 2 calendar days of the finding. Written notification to USFWS will include the following information: the species, number of animals taken or injured, sex (if known), date, time, location of the incident or of the finding of a dead or injured animal, how the individual was taken, photographs of the specific animal, the names of the persons who observed the take or found the animal, and any other pertinent information. Dead specimens will be preserved, as appropriate, and held in a secure location until instructions are received from USFWS regarding the disposition of the specimen.&nbsp;\n18. Work within suitable aquatic habitats will not begin until the habitat is dry or has been adequately surveyed and dewatered. Aquatic habitats that must be dewatered will be surveyed for California red-legged frogs prior to dewatering. Dewatering pumps will be screened with wire mesh not larger than 5 millimeters to prevent larvae from entering the pump. The biological monitor will be present during dewatering. Any California red-legged frogs found will be relocated per the relocation plan."
          },
          "BIO-25": {
            "code": "BIO-25",
            "title": "Avoid and Minimize Impacts on Western Pond Turtle (FEIR)",
            "source": "EIR",
            "text": "The following measures for western pond turtle will be required only for surface construction occurring within 300 feet of suitable habitat as defined in Appendix 13B, Section 13B.50, Western Pond Turtle, and by additional assessments conducted during project implementation and prior to project construction in a given area. A qualified biologist will conduct a field evaluation of suitable upland or aquatic habitat for western pond turtles for all surface construction activities that occur within western pond turtle habitat. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\nIf the project does not fully avoid effects on suitable habitat, the following measures will be required.&nbsp;\n\nNo more than 14 days prior to the start of construction activities in a given area, exclusion fencing will be installed between the work area and adjacent suitable aquatic habitat. Where openings need to be maintained, such as on the levee road, fencing will be installed to direct turtles away from the work area to the extent practicable (e.g., fencing will flare out and turn back toward the river and adjacent riparian). Fencing will be installed prior to the start of the nesting season (March) and remain in place for the duration of construction. Fencing may be moved or reconfigured to facilitate construction. The biological monitor and construction manager will be responsible for checking the exclusion fencing around the work areas each day of construction to ensure that they are intact and upright. Repairs to the exclusion fence will be made within 24 hours of discovery of damage. Where construction access is necessary, gates will be installed in the exclusion fence and fencing will direct animals away from the work area to the extent practicable (e.g., fencing will flare out and turn back toward suitable habitat). 2. &nbsp; &nbsp;Preconstruction surveys will be conducted by a qualified biologist immediately prior to the initiation of any ground-disturbing activities or vegetation clearing, including exclusion fence installation, in areas identified as having suitable western pond turtle habitat. If there is a lapse in construction in a work area for 7 days or more, these surveys will be repeated before activities resume.3. &nbsp; &nbsp;The qualified biologist will conduct clearance surveys at the beginning of each day and regularly throughout the workday when construction activities are occurring that may result in take of western pond turtle. If a turtle is observed, the qualified biologist will implement the following species observation and handling protocol. Only qualified biologists will participate in activities associated with the capture, handling, and monitoring of western pond turtles. If a western pond turtle is encountered in a construction or restoration area, activities within a minimum of 10 feet of the individual will cease immediately, the construction manager and qualified biologist will be notified, and the qualified biologist will observe and follow within 10 feet of the individual to ensure it has safely left the area. A larger protective buffer may be established, depending on site-specific conditions such as the use of heavy equipment, or other activities that may cause harm to the individual, as determined by the qualified biologist. The turtle will be allowed to leave the area of its own volition, and work may resume when it is no longer in harm&rsquo;s way. All personnel on-site will be notified of the finding and at no time will work occur within a minimum of 10 feet of the turtle, or larger buffer depending on site-specific conditions, without a qualified biologist present. If the turtle does not move out of the area on its own, and it is determined by the qualified biologist, in coordination with the construction manager that relocating the turtle is necessary, relocation will be done in coordination with CDFW. Any handling of turtles will be done by a biologist with a valid memorandum of understanding from CDFW authorizing the capture and relocation of turtles and as determined during coordination with CDFW. Biologists will wear clean, new disposable surgical style (nitrile, etc.) gloves while handling and relocating individuals.4. &nbsp; &nbsp;If a work site is to be temporarily dewatered by pumping, intakes will be completely screened with wire mesh not larger than 5 millimeters to prevent juvenile pond turtle and other aquatic species from entering the pump system. Any turtles found in the dewatered area will be relocated in coordination with CDFW to the nearest aquatic habitat by a biologist authorized to relocate turtles."
          },
          "BIO-26": {
            "code": "BIO-26",
            "title": "Avoid and Minimize Impacts on Special-Status Reptiles (FEIR)",
            "source": "EIR",
            "text": "The following measures will be required only for surface construction and restoration activities occurring in suitable habitat for special-status reptiles as defined in Appendix 13B, Section 13B.51, Coast Horned Lizard, Section 13B.52, Northern California Legless Lizard, Section 13B.53, California Glossy Snake, and Section 13B.54, San Joaquin Coachwhip, and by additional assessments conducted during project implementation and prior to project construction in a given area. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\nDuring project implementation and prior to project construction, DWR will direct a qualified biologist to conduct a habitat assessment in modeled habitat for coast horned lizard, Northern California legless lizard, California glossy snake, and San Joaquin coachwhip to confirm these areas contain suitable habitat for the species as defined above.\n2. &nbsp; &nbsp;Where suitable habitat exists, the qualified biologist will conduct a preconstruction survey for special-status reptiles immediately prior to the start of vegetation clearing or ground-disturbing activities. If there is a lapse in construction in a work area for 7 days or more, these surveys will be repeated before activities resume.\n3. &nbsp; &nbsp;If a special-status reptile is found in a construction or restoration area, activities within a minimum of 10 feet of the individual will cease immediately, the construction manager and qualified biologist will be notified, and the qualified biologist will observe and follow the individual within 10 feet to ensure it has safely left the area. A larger protective buffer may be established, depending on site-specific conditions such as the use of heavy equipment, or other activities that may cause harm to the individual, as determined by the qualified biologist. The biologist will first attempt to allow the individual to move out of harm&rsquo;s way on its own, but if it does not move out of the area on its own and it is determined by the qualified biologist, in coordination with the construction manager, that relocating the individual is necessary, the individual will be captured by the biologist and relocated to the nearest suitable habitat outside of the work area, as determined in consultation with CDFW. \n4. &nbsp; &nbsp;Vehicles that are parked near suitable habitat for these species overnight or for more than 1 hour during the day, will be inspected to ensure no reptiles have taken refuge beneath the tires prior to moving the vehicles.\n5. &nbsp; &nbsp;To the extent feasible, as determined by the contractor, work in areas with suitable habitat should not be conducted during periods of cold and hot temperatures (below 67 degrees Fahrenheit [&deg;F] and above 100&deg;F), because these species would generally be relatively inactive during these periods and could be taking cover in loose soil, in burrows or crevices, or under structures such as rocks or logs. This will reduce the likelihood of special-status reptiles being injured or killed by ground-disturbing activities.\n6. &nbsp; &nbsp;The qualified biologist will have the authority to stop activities at the work site if they determine that any of the avoidance and minimization measures are not being fulfilled."
          },
          "BIO-30": {
            "code": "BIO-30",
            "title": "Avoid and Minimize Impacts on Giant Garter Snake (FEIR)",
            "source": "EIR",
            "text": "The following measures for giant garter snake will only be required for surface construction and restoration activities occurring within suitable habitat as defined in Appendix 13B, Section 13B.55, Giant Garter Snake, and by additional assessments conducted during project implementation and prior to project construction in a given area. Surveys and monitoring will be conducted from locations where access allows.&nbsp;During project implementation and prior to project construction, DWR, in agreement with CDFW and USFWS, will perform the following measures.&nbsp;\n1. &nbsp; &nbsp;When each site is available for surveys, a USFWS- and CDFW-approved biologist will then delineate giant garter snake habitat at each project site, including both aquatic and upland habitat.2. &nbsp; &nbsp;Once habitat has been delineated, the biologist may use giant garter snake preconstruction surveys performed using a method approved by USFWS to determine presence of the species on the project site to enable further determination of compensatory mitigation requirements.3. &nbsp; &nbsp;For sites where such preconstruction surveys are performed, the surveys will conform to established protocols for giant garter snake surveys and all occurrence data gathered will be reported to the CNDDB and USFWS to add to the understanding of populations and occurrences for the species in the Delta.4. &nbsp; &nbsp;To the greatest extent feasible, and determined by the contractor in coordination with the USFWS- and CDFW-approved biologist, identified and delineated habitat will be completely avoided.\nIf the construction or restoration activity does not fully avoid effects on suitable habitat, the following measures will be implemented.&nbsp;\n5. &nbsp; &nbsp;Initiate construction and clear suitable habitat in the summer months, between May 1 and October 1, and avoid giant garter snake habitat during periods of brumation (between October 1 and May 1). Suitability of aquatic and upland habitat characteristics will be determined by the biologist consistent with the description of suitable habitat defined in Appendix 13B, Section 13B.55. Once a construction site has been cleared and exclusionary fencing is in place, work within the cleared area can occur between October 1 and May 1.6. &nbsp; &nbsp;To the extent practicable, as determined by project engineers and contractors, in coordination with the USFWS- and CDFW-approved biologist, conduct all activities within paved roads, farm roads, road shoulders, and similarly disturbed and compacted areas; confine ground disturbance and habitat removal to the minimal area necessary to facilitate construction activities.\n7. &nbsp; &nbsp;At least 30 days prior to any ground-disturbing activities, DWR will prepare and submit a relocation plan for USFWS&rsquo;s and CDFW&rsquo;s written approval. The relocation plan will contain the name(s) of the biologist(s) to relocate giant garter snakes, the method of relocation (if different than described), a map, and a description of the proposed release site(s) within 300 feet of the work area or at a distance otherwise agreed to by USFWS and CDFW, and written permission from the landowner to use their land as a relocation site.8. &nbsp; &nbsp;When there is giant garter snake habitat within 200 feet of construction activities, exclusion fencing will be installed along the perimeter of construction sites to protect giant garter snake habitat and minimize the potential for snakes to enter the construction work area. The perimeter of construction sites (except for work sites within areas of open water, like the Sacramento River) within or adjacent to giant garter snake habitat will be fenced with exclusion fencing by no more than 14 days prior to the start of construction activities (e.g., staging, vegetation removal, grading) in a given area. The placement of exclusion fencing will be determined, in part, by the locations of suitable habitat for the species. A conceptual fencing plan will be submitted to USFWS and CDFW prior to the start of construction and the exclusion fencing will be shown on the final construction plans. DWR will include the exclusion fence specifications including installation and maintenance criteria in the bid solicitation package special provisions. The exclusion fencing will remain in place for the duration of construction and will be regularly inspected and fully maintained. The biological monitor and construction manager will be responsible for checking the exclusion fencing around the work areas each day of construction to ensure that they are intact and upright. This will be especially critical during times of inclement weather that can damage the fencing. Repairs to the exclusion fence will be made within 24 hours of discovery of a breach. Where construction access is necessary, gates will be installed in the exclusion fence and fencing will direct animals away from the work area to the extent practicable (e.g., fencing will flare out and turn back toward suitable habitat).9. &nbsp; &nbsp;Immediately prior to the initiation of any vegetation clearing, ground-disturbing activities, and exclusion fence installation, the USFWS- and CDFW-approved biologist will conduct clearance surveys of suitable aquatic and upland habitat in the entire work site for the presence of giant garter snakes. Beginning no more than 7 days prior to initiating ground-disturbing activities during the active season (May 1 to October 1), the biologist will conduct 2 days of walking clearance surveys within each construction site and a 3-foot boundary surrounding the exclusion fencing, where access allows. The final clearance survey will occur within 24 hours preceding exclusion barrier installation. If there is a lapse in construction in a work area for 7 days or more, these surveys will be repeated before activities resume.10. &nbsp; &nbsp;If exclusionary fencing is found to be compromised, a survey of the exclusion fencing and the area inside the fencing will be conducted immediately preceding construction activity that occurs in delineated giant garter snake habitat or in advance of any activity that may result in take of the species. The biologist will search along exclusionary fences, in pipes, and beneath vehicles before the vehicles are moved.11. &nbsp; &nbsp;If a giant garter snake is found in a construction or restoration area, activities within a minimum of 10 feet of the individual will cease immediately, the construction manager and the USFWS- and CDFW-approved biologist will be notified, and the USFWS- and CDFW-approved biologist will observe and follow the individual within 10 feet to ensure it has safely left the area. A larger protective buffer may be established, depending on site-specific conditions such as the use of heavy equipment, or other activities that may cause harm to the individual, as determined by the USFWS- and CDFW-approved biologist. The snake will be allowed to move of its own volition out of harm&rsquo;s way. If the snake does not move and it is deemed necessary to relocate the animal to prevent harm, as determined by the USFWS- and CDFW-approved biologist in coordination with the construction manager, the snake may be captured and relocated to suitable habitat a minimum of 200 feet outside of the work area in accordance with the relocation plan, prior to resumption of construction activity. After the giant garter snake has moved out of the work area, all burrows within 200 feet of aquatic habitat will be inspected and collapsed; burrow collapse on levees will only be conducted following approval from relevant regulatory agencies (e.g., USACE, Reclamation).\n12. &nbsp; &nbsp;Within 24 hours prior to construction activities, and dredging, requiring heavy equipment, a USFWS- and CDFW-approved biologist will conduct a preconstruction clearance survey of all the activity area not protected by exclusionary fencing where giant garter snake could be present. This survey of the work area will be repeated if a lapse in construction or dredging activity of 2 weeks or greater occurs during the aestivation period (October 1 to May 1) or if the lapse in construction activity is more than 12 hours during active season&nbsp;(May 1 to October 1). If a giant garter snake is encountered during surveys or construction, cease activities until appropriate corrective measures have been completed, it has been determined that the giant garter snake will not be harmed, or the giant garter snake has left the work area.13. &nbsp; &nbsp;The USFWS- and CDFW-approved biological monitor will help guide access and construction work around wetlands, active rice fields, and other sensitive habitats capable of supporting giant garter snake to minimize habitat disturbance and risk of injuring or killing giant garter snakes.14. &nbsp; &nbsp;Store equipment in designated staging area areas at least 200 feet away from giant garter snake aquatic habitat to the extent practicable.15. &nbsp; &nbsp;Visually check for giant garter snake under any vehicles or equipment that have been idle for more than 1 hour, or parked overnight, prior to moving the vehicles. Check any crevices or cavities in the work area where individuals may be present, including stockpiles that have been left for more than 24 hours where cracks/crevices may have formed.\nFor activities that will occur within suitable giant garter snake habitat during the giant garter snake inactive season (October 2 to April 30) and will last more than 2 weeks, DWR will implement the following additional avoidance and minimization measures.&nbsp;\n16. &nbsp; &nbsp;All aquatic giant garter snake habitat will be dewatered between May 1 and October 1 (giant garter snake active season) to the extent that the area is no longer suitable habitat for giant garter snake as determined by the USFWS- and CDFW-approved biologist. Dewatering will be limited to the immediate construction area and will remain dry for at least 15 consecutive days prior to excavating or filling the dewatered habitat. The USFWS- and CDFW-approved biologist will be on-site during dewatering activities to salvage and relocate any snake that cannot escape on its own. Dewatering is necessary because aquatic habitat provides prey and cover for giant garter snake; dewatering serves to remove the attractant and increase the likelihood that giant garter snake will move to other available habitat. Any deviation from this measure will be done in coordination with and with the approval of USFWS and CDFW.17. &nbsp; &nbsp;Following dewatering of aquatic habitat, all potential impact areas that provide suitable aquatic or upland giant garter snake habitat will be surveyed for giant garter snake by the biologist. If giant garter snakes are observed, they will be passively allowed to leave the potential impact area. If the snake does not move of its own accord and it is determined necessary, the snake will be relocated in accordance with the approved relocation plan.18. &nbsp; &nbsp;Once habitat is deemed free of giant garter snakes, exclusion fencing will be installed around the construction site so no snakes may reenter prior to or during construction."
          },
          "BIO-31": {
            "code": "BIO-31",
            "title": "Avoid and Minimize Impacts on Western Yellow-Billed Cuckoo (FEIR)",
            "source": "EIR",
            "text": "The following measures will be required only for surface construction and restoration activities occurring between May 15 through September 1 to avoid and minimize impacts on western yellow-billed cuckoo. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\n1. &nbsp; &nbsp;Prior to the construction, a noise expert will create a sound level contour map showing the 60 dBA sound level contour specific to the type and location of construction to occur in the area.2. &nbsp; &nbsp;Two weeks prior to construction, a USFWS- and CDFW-approved biologist will conduct daily surveys, consistent with a USFWS- or CDFW-approved survey protocol (e.g., Halterman et al. 2015:9-42, or more current guidance), within 500 feet of suitable habitat where construction-related noise levels could exceed 60 dBA equivalent sound level (Leq) (1 hour).3. &nbsp; &nbsp;If a yellow-billed cuckoo is found, construction activities will be limited such that sound will not exceed 60 dBA within 500 feet of the habitat being used until the USFWS- and CDFW-approved biologist has confirmed that the bird has left the area.4. &nbsp; &nbsp;If surveys find cuckoos in an area where vegetation will be removed, vegetation removal will be conducted when the USFWS- and CDFW-approved biologist has confirmed that cuckoos are not present within 500 feet of vegetation removal activities.5. &nbsp; &nbsp;Portable and stationary equipment will be located, stored, and maintained as far as possible, with a minimum distance of 500 feet, from suitable western yellow-billed cuckoo habitat.6. &nbsp; &nbsp;All lights will be screened and directed down toward work activities and away from migratory habitat. A biological monitor will ensure that lights are properly directed at all times during construction."
          },
          "BIO-32": {
            "code": "BIO-32",
            "title": "Conduct Preconstruction Surveys and Implement Protective Measures to Avoid Disturbance of California Black Rail (FEIR)",
            "source": "EIR",
            "text": "The following measures will be required only for surface construction and restoration activities. Preconstruction surveys for California black rail will be required by DWR to be conducted 1 year prior to construction and the year of construction where potentially suitable habitat for this species occurs within 500 feet of work areas and where access is available. Potentially suitable habitat includes tidal and nontidal seasonal or perennial wetlands at least 2 acres in size with any kind of vegetation types consistent with California black rail use in the Delta (as determined by field evaluations conducted by a CDFW-approved biologist with experience surveying for black rail) over 10 inches high, whether or not the patch in question was mapped as modeled habitat. A minimum of four surveys will be conducted between February 1 and April 15, with at least 10 days between surveys. Because California black rail are most active between 2 hours before and 3 hours after sunrise, surveys will start at sunrise and continue no later than 9:30 a.m. These surveys will involve the following protocols (based on Evens et al. 1991), or other CDFW-approved survey methodologies that may be developed using new information and best-available science and will be conducted by biologists with the qualifications stipulated in the CDFW-approved methodologies. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\n1. &nbsp; &nbsp;Listening stations will be established at 300-foot intervals throughout potential California black rail habitat that will be affected by construction or CMP restoration activities. Listening stations will be placed along roads, trails, and levees to avoid trampling wetland vegetation. Listening stations will be located a maximum of 10 meters from suitable habitat where access is available.2. &nbsp; &nbsp;Surveys at each station will consist of a biologist listening passively for 1 minute, then broadcasting prerecorded black rail vocalizations: 1 minute of&nbsp;&ldquo;grr&rdquo; calls followed by 0.5 minute of &ldquo;ki-ki-doo&rdquo; calls. The CDFW-approved biologist will then listen for another 3.5 minutes for a total of 6 minutes per station. Once a California black rail response is detected, the biologist will cease broadcasting immediately.3. &nbsp; &nbsp;A global positioning system (GPS) receiver and compass will be used to identify survey stations, angles to call locations, and call locations and distances from listening stations. The California black rail call type, location, distance from listening station, and time will be recorded.&nbsp;\nThe project will be implemented in a manner that will not result in take of California black rail as defined by Section 86 of the California Fish and Game Code. Where California black rail has been detected within 500 feet of work areas during preconstruction surveys, the following measures will be required.&nbsp;\n4. &nbsp; &nbsp;To avoid the loss of individual California black rails, construction activities within 500 feet of potential habitat will not occur within 2 hours before or after extreme high tides (6.5 feet or above, as measured at the Golden Gate Bridge), to the extent feasible, as determined by the construction manager in coordination with a qualified biologist. During high tide, protective cover for California black rail is sometimes limited, and disturbance from project activities could prevent individual rails from reaching available cover.5. &nbsp; &nbsp;To avoid the loss of individual California black rails, activities within 500 feet of tidal marsh areas and managed wetlands will be avoided during the rail breeding season (February 1 through August 31), unless surveys are conducted to determine that no rails are present within the 500-foot buffer.6. &nbsp; &nbsp;If breeding California black rail is determined to be present, activities will not occur within 500 feet of an identified calling center (or a smaller distance if approved by CDFW). If the intervening distance between the rail calling center and any activity area is greater than 200 feet and across a major slough channel or substantial barrier (e.g., constructed noise barrier) it may proceed at that location within the breeding season.7. &nbsp; &nbsp;If construction activities require removal of potential California black rail habitat, whether or not rails have been detected there, vegetation will be removed during the nonbreeding season (September 1 through January 31). Vegetation removal will be completed carefully using hand tools or vegetation removal equipment that is approved by a CDFW-approved biologist. The CDFW-approved biologist will search vegetation immediately in front of the removal tools or equipment and will stop removal if rails are detected. Vegetation removal will resume when the California black rail leaves the area.8. &nbsp; &nbsp;If the construction footprint is within 500 feet of a known calling center, noise reduction structures such as temporary noise-reducing walls, will be installed at the edge of construction footprint, as determined by an on-site CDFW-approved biologist. Noise-causing construction will be initiated during the nonbreeding season (September 1 through January 31), where feasible, as determined by the contractor in coordination with the CDFW-approved biologist, so that California black rails can acclimate to noise and activity prior to nesting. Examples where construction initiation during the nonbreeding season would not be feasible include inclement weather or conflicts with work windows for other terrestrial or aquatic species.9. &nbsp; &nbsp;The CDFW-approved biologist will have the authority to stop activities at the work site if they determine that any of avoidance and minimization measures are not being fulfilled."
          },
          "BIO-33": {
            "code": "BIO-33",
            "title": "Avoid and Minimize Disturbance of Sandhill Cranes (FEIR)",
            "source": "EIR",
            "text": "Surface construction and restoration activities will be avoided during the sandhill crane wintering season (September 15 through March 15) to the extent feasible, as determined by the contractor in coordination with project engineers. DWR recognizes that sandhill cranes may arrive earlier and stay later than the dates specified in the EIR because the project will take many years to construct. If CDFW develops guidance regarding sandhill crane surveys and work windows, DWR will adjust survey dates and dates included in mitigation measures to minimize potential impacts on sandhill cranes. In addition, the following measures will be implemented for surface construction and restoration activities to avoid and minimize impacts on greater and lesser sandhill crane and to avoid take of greater sandhill crane as defined by Section 86 of the California Fish and Game Code. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\n\n&nbsp; &nbsp;Preconstruction Surveys&nbsp;a. &nbsp; &nbsp;Preconstruction surveys will be conducted to evaluate the use of sandhill crane suitable habitat (described in Appendix 13B, Section 13B.58, Greater Sandhill Crane, and Section 13B.59, Lesser Sandhill Crane) by a qualified biologist familiar with sandhill crane biology and experienced with sandhill crane survey techniques. Annual surveys will be conducted for sandhill crane temporary (cultivated lands) and permanent (managed wetlands) roost sites (Ivey et al. 2014a:6) within 0.75 mile of the construction area boundary where access is available. Surveys will be conducted annually, beginning during the winter prior ground disturbance, over multiple days within the survey area by a qualified biologist with experience observing the species. DWR will coordinate with CDFW and Refuge biologists prior to conducting sandhill crane preconstruction surveys.b. &nbsp; &nbsp;Prior to construction, a noise expert will create a sound level contour map showing the 50 dBA sound level contour specific to the type and location of construction to occur in the area and existing noise barriers such as levees or embankments. The sandhill crane survey data will be used with GIS-based methods to evaluate habitat loss, the acres of habitat affected by the 50 dB sound level contour, to identify lands in fulfillment of minimization requirements, and to determine the total affected and compensatory habitat required, at the time of project footprint finalization. The sandhill crane foraging habitat model may be updated using agricultural land-use data or a combination of land-use and survey data to allow for avoidance and minimization requirements to be quantified using up-to-date information.2. &nbsp; &nbsp;Timing&nbsp;c. &nbsp; &nbsp;Construction of some project facilities such as access roads and underground transmission lines may be scheduled so that they occur outside of the crane wintering season (September 15 through March 15). The construction activities with a high potential to disturb cranes, such as pile driving, that need to occur for only limited time periods will be scheduled for periods outside the sandhill crane wintering season&nbsp;(September 15 through March 15) to the extent feasible, as determined by the contractor in coordination with project engineers.d. &nbsp; &nbsp;Helicopter surveys to identify buried groundwater and natural gas wells throughout the project area and pile installation test methods at the north Delta intakes will be conducted outside of the sandhill crane wintering season (September 15 through March 15). Pile installation test methods will include noise monitoring to test the site-specific effectiveness of noise minimization measures (e.g., shrouds around the hammer as described below), to determine which measures will be feasible and effective to implement during pile installation.e. &nbsp; &nbsp;Other field investigations including test trenches, CPTs, soil borings, ERT, groundwater testing, monument installation, pilot studies for settlement, agronomic testing, and utility potholing will not be conducted within known permanent and temporary roost sites during the sandhill crane wintering season (September 15 through March 15).f. &nbsp; &nbsp;To the extent feasible, as determined by the contractor in coordination with project engineers, construction within habitat that is known to be occupied based on preconstruction surveys and cannot be completed prior to commencement of the wintering season, will be started at a minimum, 14 days before September 15 or 14 days after March 15, such that no new sources of noise or other major disturbance that could affect sandhill cranes will be introduced after the sandhill cranes arrive at their wintering grounds.3. &nbsp; &nbsp;Minimize Effects on Sandhill Crane Foraging and Roosting Habitat Resulting from Water Conveyance Facilities Construction&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; DWR will implement the following measures to minimize effects on sandhill crane resulting from implementation of the final design of the water conveyance facilities.&nbsp;\n\na. &nbsp; &nbsp;Foraging Habitati. &nbsp; &nbsp;The final design of the conveyance facilities will avoid construction-related loss of sandhill crane foraging habitat to the extent feasible, as determined by project engineers in coordination with a qualified biologist.ii. &nbsp; &nbsp;Avoid pile driving and general construction-related combined noise effects on foraging habitat to the extent feasible. Where feasible, as determined by the contractor in coordination with a qualified biologist, DWR will avoid construction from 1 hour after sunrise to 1 hour before sunset in areas where construction would result in noise exceeding 50 dBA Leq (1 hour) within crane foraging habitat.11 Prior to construction, a noise expert will create a sound level contour map showing the 50 dBA sound level contour specific to the type and location of construction to occur in the area and existing noise barriers such as levees or embankments. DWR will use shrouds or noise blankets to reduce noise from impact hammers or vibratory pile drivers at the intake work sites, which have been shown to reduce pile hammer noise by 8 to 23 dBA (Teachout and Cushman 2005:8; Washington State Department of Transportation 2018:7.15). Artificial noise barriers may be installed to decrease noise levels at foraging habitat below 50 dBA Leq (1 hour). However, the visual effects of noise barriers on sandhill cranes are unknown; therefore, all other options to reduce noise (e.g., installation of shrouds at pile driving locations at the intakes and other construction sites) will be implemented before installing noise barriers at the edge of the construction boundary. As described above, test piles constructed under field investigations and sound level surveys will determine site-specific considerations and feasibility for implementation of these measures.iii. &nbsp; &nbsp;Enhance foraging habitat to avoid loss of foraging values that could otherwise result from unavoidable noise-related effects. DWR will enhance 0.1 acre of foraging habitat for each acre of foraging habitat to be indirectly affected within the 50 dBA Leq (1 hour) construction sound level contour during the wintering season (September 1 through March 15). The enhanced foraging habitat will be established one crane wintering season (September 1 through March 15) prior to construction and will be maintained until the activities causing the indirect noise effect is completed. The enhanced habitat will consist of corn fields that will not be harvested and will be managed to maximize food availability to sandhill cranes (e.g., corn stalks will be knocked down or mulched to make grain available to foraging cranes). A management plan for the enhanced habitat will be completed prior to establishing the habitat, in coordination with a qualified biologist with experience managing sandhill crane habitat on cultivated lands, or experience directing such management, consistent with the foraging habitat values in Appendix 13B, Section 13B.58, Greater Sandhill Crane. The enhanced habitat will be located outside the construction-related 50 dBA Leq (1 hour) sound level contour and within 1 mile of the affected habitat.b. &nbsp; &nbsp;Roosting Habitati. &nbsp; &nbsp;If a sandhill crane roost site is located within 0.75 mile of the construction area boundary, then to the extent feasible, nighttime (1 hour before sunset to 1 hour after sunrise) project activities will be relocated to maintain a 0.75-mile non-disturbance buffer during the wintering season (September 1 through March 15) or until a qualified biologist has determined that the roost site is no longer being used by cranes. If this is not feasible, as determined by project engineers in coordination with a qualified biologist, the following measures will be implemented to avoid and minimize effects on roosting sandhill cranes.&nbsp;\nii. &nbsp; &nbsp;DWR will avoid permanent impacts resulting in direct loss of roost sites. This can be accomplished by siting activities outside identified crane roost sites or by relocating the roost site if it consists of cultivated lands (roost sites that consist of wetlands rather than cultivated lands will not be subject to relocation). A cultivated land roost site can be relocated by not flooding the site where the impact will occur during years when construction will occur and by establishing a new roost site equal or greater in size at a new location away from the disturbance (outside the 50 dBA Leq [1 hour] pile driving and general construction sound level contour) but within 1 mile of the affected roost site. The relocated roost site will be established 1 year prior to construction activities affecting the original roost site. A qualified biologist familiar with crane biology will design the new roost site and direct roost site establishment. Potential sites will be identified and surveyed prior to establishment. Relocated roost sites will be maintained until construction is complete in the affected region. Prior to construction, a noise expert will create a sound level contour map showing the 50 dBA sound level contour specific to the type and location of construction to occur in the area and existing noise barriers such as levees or embankments.iii. &nbsp; &nbsp;Avoid pile driving and general construction-related noise effects on known permanent and temporary roost sites as described below. Activities within 0.75 mile of known roost sites will reduce pile driving and general construction noise during nighttime hours (from 1 hour before sunset to 1 hour after sunrise) such that pile-driving and general construction noise levels do not exceed a combined 50 dBA Leq (1 hour) at the nearest temporary or permanent roost sites during periods when the roost sites are available (flooded). This can be accomplished by limiting construction activities that could result in pile-driving and general construction noise levels above 50 dBA Leq (1 hour) at the roost site to day time only (from 1 hour after sunrise to 1 hour before sunset); siting nighttime project activities to ensure that pile-driving and general construction noise levels do not exceed a combined 50 dBA Leq (1 hour) at the roost site; relocating cultivated land roost sites as described above; and/or installing noise barriers between roost sites within the 50 dBA Leq (1 hour) contour and the pile-driving and general construction noise source areas, such that construction noise levels at the roost site do not exceed 50 dBA Leq (1 hour). The installation of noise barriers will be used only if the first three options cannot be implemented to the extent that noise levels do not exceed 50 dBA Leq (1 hour) at the roost site. As described above, DWR will use shrouds or noise blankets to reduce noise from impact hammers or vibratory pile drivers at the intake work sites, which have been shown to reduce pile hammer noise by 8 to 23 dBA (Teachout and Cushman 2005; Washington State Department of Transportation 2018:7.15). All other options to reduce noise (e.g., installation of shrouds at pile driving locations at the intakes and other construction sites) will be implemented before installing noise barriers before installing noise barriers at the edge of the construction boundary. As described above, test piles constructed under field investigations and sound level surveys will determine site-specific considerations and feasibility for implementation of these measures.&nbsp;\niv. If the roost site to be indirectly affected within the 50 dBA Leq (1 hour) pile-driving and general construction combined sound level contour is a wetland roost site (natural wetlands) rather than flooded cultivated lands, then the existing wetland roost site will not be removed. A new, cultivated land roost site will be temporarily established at a new location away from the disturbance (outside the 50 dBA Leq (1 hour) sound level contour) but within 1 mile of the affected site, at a ratio of 1 acre created for each acre of temporary or permanent roost site within the pile-driving and general construction 50 dBA Leq (1 hour) sound level contour. The new roost site will be established prior to commencement of the wintering season that occurs prior to construction activities potentially affecting the original roost site and will be maintained until the activities creating the indirect disturbance are completed. A qualified biologist familiar with crane biology will design the new roost site and direct roost site establishment.\n4. &nbsp; &nbsp;Measures to Avoid and Minimize Potential Effects from Lighting and Visual Disturbance&nbsp;DWR has designed the project to minimize lighting and visual effects from traffic to reduce disturbance to sandhill cranes in the vicinity of Stone Lakes NWR. Project-related traffic on Hood-Franklin Road would be limited to shuttles bringing construction employees to and from the intake construction areas and the park and ride lot. In areas within 0.75 miles of known sandhill crane roost sites, DWR will implement the following measures to avoid and minimize potential lighting and visual effects that could result from construction or operation and maintenance.a. &nbsp; &nbsp;Route nighttime truck traffic to reduce headlight impacts in roosting habitat where feasible, as determined by the project engineers in coordination with a qualified biologist.b. &nbsp; &nbsp;Require trucks traveling along the intake haul road to move continuously and not idle or stop along the haul road adjacent to Stone Lakes NWR.c. &nbsp; &nbsp;Install light barriers, where there are no existing barriers such as levees or embankments, to block the line of sight between the nearest roosting areas and the primary nighttime construction light source areas.d. &nbsp; &nbsp;Screen all construction-related lights and direct them down toward work activities and away from the night sky and nearby roost sites. A biological monitor will ensure that lights are properly directed at all times during construction.e. &nbsp; &nbsp;Minimize the use of construction equipment greater than 50 feet in height to the extent feasible, as determined by the contractor in light of project schedule and cost and logistical considerations.f. &nbsp; &nbsp;DWR&rsquo;s approach to satisfying these measures will be reviewed and approved by a qualified biologist prior to construction. The qualified biologist will have the authority to stop activities at the work site if they determine that any of the avoidance and minimization measures are not being fulfilled.5. &nbsp; &nbsp;Measures to Minimize Effects to Sandhill Cranes on Staten IslandBecause of the density of greater sandhill cranes wintering on Staten Island and the importance of Staten Island to the existing population of the greater sandhill crane in the study area facilities will be placed to minimize disturbance to sandhill cranes at this site. Interested parties provided information used to identify the placement of the tunnel shaft on Staten Island (under Alternatives 1, 2a, 2b, and 2c) at a location at the northern portion of Staten Island in a previously disturbed area adjacent to a road and powerline (Delta Conveyance Design and Construction Authority 2022d:4). DWR will ensure that project-related construction will not result in a net decrease in crane use on Staten Island as determined by deriving greater sandhill crane use days for the entire winter period.12 This standard will be achieved through some combination of the following (and including the above required avoidance and minimization measures).&nbsp;\na. &nbsp; &nbsp;Minimize noise, lighting, and visual disturbances during construction (see measures described above).b. &nbsp; &nbsp;Minimize construction activity during the crane wintering season&nbsp;(September 15 through March 15) to the extent feasible, as determined by the contractor in coordination with project engineers.c. &nbsp; &nbsp;Provide supplemental feeding/foraging habitat enhancement as described above under Minimize Effects on Sandhill Crane Foraging and Roosting Habitat Resulting from Water Conveyance Facilities Construction.d. &nbsp; &nbsp;Maintain flooding and irrigation capacity. DWR will work with land managers to stage construction activities on Staten Island such that they do not disrupt flooding and irrigation to the extent that greater sandhill crane habitat will be reduced during the crane wintering season.\nPrior to construction on Staten Island, the qualified biologist will coordinate with DWR to develop a strategy for achieving no net decrease in crane use on Staten Island using a combination of the measures described above, and prepare a plan based on the final construction design on Staten Island that includes all avoidance and minimization measures necessary for achieving no net decrease in crane use on Staten Island. This plan will be subject to review and approval by the wildlife agencies prior to its implementation. All avoidance and minimization measures will be in place, consistent with the plan, prior to project construction on Staten Island.&nbsp;\n6. &nbsp; &nbsp;Bouldin Island Minimization Measures&nbsp;Because of the regular use of temporary roost sites (cultivated lands) on Bouldin Island by sandhill cranes, DWR will place conveyance facilities and RTM to minimize disturbance to sandhill cranes at this site to the extent feasible, as determined by project engineers. Interested parties provided information used to minimize impacts on habitat for special-status species on Bouldin Island and to prioritize placement of facilities and RTM along the southern, western, and northeastern portions of the island based on physical conditions and biological resources. DWR will implement some combination of the following (and including the above required avoidance and minimization measures).a. &nbsp; &nbsp;Provide supplemental feeding/foraging habitat enhancement as described above under Minimize Effects on Sandhill Crane Foraging and Roosting Habitat Resulting from Water Conveyance Facilities Construction.b. &nbsp; &nbsp;Maintain flooding and irrigation capacity. DWR will work with land managers to stage construction activities on Bouldin Island such that they do not disrupt flooding and irrigation to the extent that sandhill crane habitat will be reduced during the crane wintering season.\n12 Expected loss of crane use will be estimated by using data on crane use days/acre by habitat type on Staten Island from past studies and future monitoring before construction begins (using averages among available years). These will be used to predict the number of lost crane use days within the footprint of the habitat loss and within the 50 dBA Leq (1 hour) pile-driving and general construction sound level contour. Preproject crane surveys will provide additional data on crane use day densities per habitat type to improve the prediction. Use day densities will be used to guide decisions regarding crop habitat needed to be maintained on Staten Island to maintain this performance standard during construction.&nbsp;"
          },
          "BIO-34": {
            "code": "BIO-34",
            "title": "Avoid California Least Tern Nesting Colonies and Minimize Indirect Effects on Colonies (FEIR)",
            "source": "EIR",
            "text": "The following measures will be implemented for surface construction and restoration activities to avoid and minimize impacts on California least tern nesting colonies and to avoid take of California least tern, as defined by Section 86 of the California Fish and Game Code. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\n1. If suitable nesting habitat for California least tern (flat, unvegetated areas near aquatic foraging habitat) is identified during planning-level surveys the year prior to construction, DWR will require that at least three preconstruction surveys for this species will be conducted in all suitable habitat within 500 feet of the construction footprint during the California least tern breeding season (April 15 to August 15). Surveys will be conducted by a USFWS- and CDFW-approved biologist with experience observing the species and its nests. DWR will implement the following requirements to avoid loss of California least tern nesting colonies if construction will take place within 500 feet of a California least tern nest during the breeding season (April 15 to August 15 or extended as determined through surveys).&nbsp;\na. &nbsp; &nbsp;A USFWS- and CDFW-approved wildlife biologist will monitor construction activities within 500 feet of the nests to ensure that construction activities do not affect nest success. Reduced buffers may be allowed, through coordination with USFWS and CDFW, if a full-time USFWS- and CDFW-approved biologist is present to monitor the nest and has authority to halt construction if bird behavior indicates continued activities could lead to nest failure. Active nests will be monitored to track progress of nesting activities until the biologist determines that the young have fledged and are capable of independent survival or the nest site is no longer active.b. &nbsp; &nbsp;Activities performed during the California least tern breeding season, in occupied least tern nesting habitat, with USFWS and CDFW approval and under the supervision of a USFWS- and CDFW-approved biologist will be limited to inspection, research, or monitoring."
          },
          "BIO-35": {
            "code": "BIO-35",
            "title": "Avoid and Minimize Impacts on Cormorant, Heron, and Egret Rookeries (FEIR)",
            "source": "EIR",
            "text": "Cormorants, herons, and egrets are highly traditional in their use of nest sites&nbsp;(rookeries), in that they use the same sites year after year. To reduce impacts on rookeries, DWR will implement the following measures prior to surface construction and restoration activities. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\n1. &nbsp; &nbsp;To the maximum extent feasible, as determined by the contractor in coordination with a qualified biologist, vegetation removal and trimming will be scheduled during the nonbreeding season of birds (September 1 through January 31). Vegetation trimming will not remove known nests. If a rookery needs to be removed, DWR will contact CDFW prior to removal and removal will occur during the nonbreeding season (September 1 through January 31). Preconstruction surveys of previously occupied colonies and all suitable habitat within 500 feet of the project footprint and compensatory mitigation sites will be conducted during the breeding (February 1 through August 31) season by a qualified biologist with experience observing cormorants, herons, and egrets and their nests. If there is a break in construction of 3 calendar days or more, surveys will be conducted prior to restarting construction in the area.2. &nbsp; &nbsp;Construction activities that will result in the greatest disturbance to an active cormorant, heron, or egret rookery, as determined by the qualified biologist, will be deferred until after or as late in the breeding season as feasible, as determined by the contractor in coordination with the project biologist. If construction must take place within 500 feet of an active cormorant, heron, or egret rookery during the breeding season, a qualified biologist will establish a non-disturbance buffer within a minimum distance of 50 feet from the rookery and will monitor the rookery to ensure that construction activities do not affect nest success. The extent of the buffer will be determined by the qualified wildlife biologist(s) and will be established by taking into consideration the type and extent of the proposed activity occurring near the nest, the duration and timing of the activity, the line of sight between the nest and the disturbance, the sensitivity and the habituation of the birds and raptors to existing conditions, and the dissimilarity of the proposed activity to ambient levels of noise and other disturbances. Reduced buffers may be allowed if a full-time qualified biologist is present to monitor the nest and has authority to expand the buffer or halt construction if bird behavior indicates continued activities could lead to nest failure or if a bird is in the footprint during project activities.3. &nbsp; &nbsp;Active nests will be monitored to track progress of nesting activities until the biologist determines that the young have fledged and are capable of independent survival or the nest site is no longer active."
          },
          "BIO-36a": {
            "code": "BIO-36a",
            "title": "Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)",
            "source": "EIR",
            "text": "To reduce impacts on nesting birds, DWR will implement the measures listed below prior to surface construction and restoration activities. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\n1. &nbsp; &nbsp;Timing Restrictions. To the maximum extent feasible, as determined by the contractor in coordination with a qualified biologist, construction activities, vegetation removal, and trimming will be scheduled during the nonbreeding season of birds (September 1 through January 31) to avoid impacts on nesting birds if nesting birds are present. If construction activities, vegetation removal, and trimming cannot be conducted in accordance with this timeframe, surveys for nesting birds and additional protective measures will be implemented as described below.2. &nbsp; &nbsp;Preconstruction Surveys. A qualified wildlife biologist with knowledge of the relevant species will conduct nesting surveys before the start of construction. A minimum of three separate surveys will be conducted within 30 days prior to construction, with the last survey within 3 days prior to construction. Surveys will be conducted within the project construction and staging areas and all suitable nesting habitat (e.g., trees, shrubs, emergent wetland, grasslands ruderal areas, cultivated lands, human-made structures) within 500 feet of the project construction and staging areas (or an alternative survey distance if described within species-specific USFWS or CDFW protocols or species-specific mitigation measures within this document) to locate any active nest protected by the Migratory Bird Treaty Act. If no active nests are detected during these surveys, no additional measures are required if construction begins within 3 calendar days. An additional survey will be conducted after any construction breaks of 3 calendar days or more. Surveys for nesting bank swallows will be conducted in RTM areas that have been present for at least 1 year, allowing the substrate to stabilize. Surveys of RTM will be conducted prior to RTM removal, during the bank swallow nesting season (April 1 through August 31).3. &nbsp; &nbsp;Non-Disturbance Buffer. If active nests are found in the survey area, non-disturbance buffers will be established around the nest sites to avoid disturbance or destruction of the nest site until the end of the breeding season (September 1) or until a qualified wildlife biologist determines that the young have fledged and moved out of the work area (this date varies by species). Buffer distances vary by species and conservation status (e.g., listed species and fully protected species may warrant larger buffers than non&ndash;special-status species) but typically, these buffer distances are between 300 feet and 650 feet for raptors and between 50 feet and 250 feet for other nesting birds. The extent of the buffers will be determined by the qualified wildlife biologist(s) and will be established by taking into consideration the type and extent of the proposed activity occurring near the nest, the duration and timing of the activity, the line of sight between the nest and the disturbance, the sensitivity and the habituation of the birds and raptors to existing conditions, and the dissimilarity of the proposed activity to ambient levels of noise and other disturbances. The qualified wildlife biologist(s) will mark the extent and locations of non-disturbance buffers on maps to present to construction personnel at morning tailboards or will use flagging, fencing, or other suitable physical markers, depending on the species of birds, the size of the buffers, and the construction activities to be conducted in the work area.4. &nbsp; &nbsp;Nest Monitoring. The qualified wildlife biologist(s) will monitor the nests to ensure that construction activities do not affect nest success. Buffers (described above) may be reduced if a full-time qualified biologist is present to monitor the nest. Active nests will be monitored to track progress of nesting activities until the biologist determines that the young have fledged and are capable of independent survival or the nest site is no longer active.5. &nbsp; &nbsp;Authority of Qualified Wildlife Biologist(s). If, during construction, the qualified wildlife biologist(s) determines that a nesting bird is disturbed by construction activities to the point where continued activities could lead to nest failure, the qualified wildlife biologist(s) will have the authority to immediately stop work. The qualified wildlife biologist(s) will determine if additional protective measures (including increasing the non-disturbance buffer distance) need to be implemented and will continue monitoring the nest until the qualified biologist(s) determine that bird behavior has normalized.&nbsp;"
          },
          "BIO-36b": {
            "code": "BIO-36b",
            "title": "Conduct Preconstruction Surveys and Implement Protective Measures to Avoid Disturbance of White-Tailed Kite (FEIR)",
            "source": "EIR",
            "text": "The following measures will be required for surface construction and restoration activities occurring in suitable white-tailed kite habitat as defined in Appendix 13B, Section 13B.68, White-Tailed Kite, and by additional assessments conducted prior to construction in a given area. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\n1. &nbsp; &nbsp;Preconstruction Surveys. Preconstruction surveys will be conducted by a qualified biologist(s) to identify the presence of potential white-tailed kite nest trees within project construction and staging areas and within 0.25 mile of these areas, where accessible. Surveys for nesting white-tailed kites will be conducted, following a protocol approved by CDFW, within 30 days prior to construction to ensure nesting activity is documented prior to the onset of construction activity during the nesting season. White-tailed kite nest in the study area between approximately March 15 and September 15. While many nest sites are traditionally used for multiple years, new nest sites can be established in any year. Therefore, construction activity that is planned after March 15 of any year will require surveys during the year of the construction. If construction is planned before March 15 of any year, surveys will be conducted the year immediately prior to the year of construction. DWR will provide survey results to CDFW by phone or email no less than 5 days prior to commencement of construction activities. The qualified biologist(s) will conduct a second survey of potential nesting trees and active nests and monitor white-tailed kite nests no more than 72 hours prior to construction. If no nesting activity is found, then construction can proceed with no restrictions if construction begins within 3 calendar days. An additional survey will be conducted after any construction breaks of 3 calendar days or more.2. &nbsp; &nbsp;Timing Restrictions. Where the construction site occurs within 0.25 mile of a white-tailed kite nest, DWR will limit construction activities to outside the white-tailed kite breeding season (March 15 through September 15), to the extent feasible, as determined by the contractor in coordination with a qualified biologist. Where construction activities within 0.25 mile of an active nest cannot feasibly be avoided during the breeding season, DWR will initiate construction prior to egg laying to the greatest extent feasible, as determined by the contractor in coordination with a qualified biologist. This will allow time for white-tailed kites to acclimate to disturbance before eggs are laid. If eggs or young are present in the nest, work will not be permitted to occur until the qualified biologist(s) determines that white-tailed kites have acclimated to disturbance and exhibit normal nesting behavior.3. &nbsp; &nbsp;Non-Disturbance Buffer. Where construction activities must occur within 0.25 mile of an occupied white-tailed kite nest, DWR will establish a 650-foot-radius (198 meters) non-disturbance buffer around each white-tailed kite nest tree and the buffer will remain in place until the end of the breeding season or until the last chick has left the nest. DWR will clearly delineate the non-disturbance buffer with fencing or other conspicuous marking. The qualified biologist(s) will monitor occupied nest trees to track progress of nesting activities (see measure 4 below). DWR will not conduct any construction activities within the buffer while a nest site is occupied by white-tailed kite during the breeding season. The buffer size may be modified based on the field examination and determination by the qualified biologist(s) of conditions that may minimize disturbance effects, including line of sight, topography, land use, type of disturbance, existing ambient noise and disturbance levels, and other relevant factors, as authorized by CDFW. Entry into the buffer will be granted when the qualified biologist(s) determines that the young have fledged and are capable of independent survival, or the nest has failed, and the nest site is no longer active.4. &nbsp; &nbsp;White-Tailed Kite Nest Monitoring. Where construction activities must occur within 0.25 mile of an occupied white-tailed kite nest tree, DWR will implement the following monitoring plan.&nbsp;\na. &nbsp; &nbsp;Five days and three days prior to the initiation of construction at any site where a nest is within 650 feet of construction, the qualified biologist(s) will observe the subject nest(s) for at least 1 hour or until normal nesting behavior can be determined. The qualified biologist(s) will document nesting status and behaviors to compare to nesting status and behaviors after construction begins. The results of preconstruction monitoring will be reported to CDFW within 24 hours of each survey.b. &nbsp; &nbsp;Where an occupied white-tailed kite nest tree occurs less than 325 feet (99 meters) from construction, the qualified biologist(s) will observe the nest for at least 4 hours per day during construction to ensure the white-tailed kites are engaged in normal nesting behavior.c. &nbsp; &nbsp;Where an occupied white-tailed kite nest tree occurs between 325 to 650 feet (99 to 198 meters) from construction, the qualified biologist(s) will observe the nest for at least 2 hours per day during construction to ensure the white-tailed kites are engaged in normal nesting behavior.d. &nbsp; &nbsp;Where an occupied white-tailed kite nest tree occurs between 650 to 1,300 feet (198 to 396 meters) from construction, the qualified biologist(s) will observe the nest once a day during construction to ensure the white-tailed kites are engaged in normal nesting behavior and to check the status of the nest.\n5. &nbsp; &nbsp;Disturbance of Occupied Nest Tree. DWR will prohibit physical contact with an active nest tree from the time of egg laying to fledging, unless approved by CDFW. All workers within 650 feet will be out of the line of sight of the occupied white-tailed kite nest tree during breaks or will take breaks more than 650 feet from an occupied nest tree.6. &nbsp; &nbsp;Authority of Qualified Biologist(s). The project will be implemented in a manner that will not result in take of white-tailed kite, as defined by Section 86 of the California Fish and Game Code. If during construction, the qualified biologist(s) determines that a nesting white-tailed kite within 0.25 mile of construction is disturbed by construction activities to the point where nest abandonment is likely, the qualified biologist(s) will have the authority to immediately stop work and will immediately notify DWR. A designated representative from DWR will contact CDFW within 24 hours to determine additional protection measures to be implemented. Additional protective measures may include, but are not limited to, increasing the size of the buffer, delaying construction until the chicks have fledged, temporarily relocating staging areas, and temporarily rerouting access to the construction site. The qualified biologist(s) will:a. &nbsp; &nbsp;Stop construction until additional protective measures are implemented unless white-tailed kite behavior normalizes on its own. Potential nest abandonment and failure may be indicated if, in the qualified biologist(s)&rsquo; professional judgment, the white-tailed kite exhibits distress and/or abnormal nesting behavior, such as swooping or stooping at construction equipment or personnel, excessive distress-call vocalization or agitated behavior directed personnel, failure to remain on nest, or failure to deliver prey items.b. &nbsp; &nbsp;Continue monitoring and ensure additional protective measures remain in place until the qualified biologist(s) determine(s) white-tailed kite behavior has normalized.c. &nbsp; &nbsp;Determine if additional protective measures are ineffective and stop construction until the additional protective measures are modified.d. &nbsp; &nbsp;Continue monitoring until determining that white-tailed kite behavior has normalized.e. &nbsp; &nbsp;The DWR representative or qualified biologist(s) will notify CDFW within 24 hours if nests or nestlings are abandoned and if the nestlings are still alive. The qualified biologist(s) will work with CDFW to determine appropriate actions.&nbsp;\n7. &nbsp; &nbsp;Nest Tree Avoidance. DWR will avoid removal of known nest trees to the maximum extent feasible as determined by the contractor in coordination with a qualified biologist. If a known nest tree must be removed for construction activities, DWR will notify and obtain written approval from CDFW. The notification will include the location of the known nest tree, conditions to offset the loss of the nest tree (using the protocol described for Swainson&rsquo;s Hawk in Appendix 3F, Attachment 3F.1, Table 3F.1-3, CMP-19a: Swainson&rsquo;s Hawk Nesting Habitat), and the time of removal, which will generally be October 1 through February 1. DWR will not remove any occupied nest tree until the last young have left the nest, as verified by the qualified biologist(s). DWR will compensate for the temporal loss of known white-tailed kite nest trees using the protocol described for Swainson&rsquo;s Hawk in Appendix 3F, Compensatory Mitigation(Attachment 3F.1, Table 3F.1-3, CMP-19a: Swainson&rsquo;s Hawk Nesting Habitat).8. &nbsp; &nbsp;Geotechnical Exploration. DWR will conduct geotechnical exploration outside of the breeding season, to the extent feasible, as determined by the contractor in coordination with project engineers. The qualified biologist(s) will delineate with flagging or other visible markers suitable breeding habitat within the geotechnical exploration site. DWR will restrict geotechnical exploration to areas outside of the delineated breeding habitat. If geotechnical exploration must occur during the breeding season, the qualified biologist(s) will survey the breeding habitat within 0.25 mile for nesting white-tailed kite. DWR will limit geotechnical exploration activities to least 0.25 mile away from any occupied nest tree, unless otherwise approved by CDFW.9. &nbsp; &nbsp;Measures Specific to Transmission Line Construction. DWR will not use helicopters to string transmission lines or to conduct field investigations within 0.25 mile of an occupied nest tree. DWR will not remove or trim occupied nest trees for transmission line construction until after the breeding season has ended or the last young have left the nest. If removal or trimming of an occupied nest tree needs to occur for human or wildlife safety, DWR will conduct removal or trimming from October 1 to February 1, or with written approval and guidance from CDFW. DWR will avoid removal or trimming of known or suitable nest trees, to the extent practicable, as determined by the contractor in coordination with the qualified biologist, during transmission line stringing and reconductoring activities or during power and pole placement. Where practicable, as determined by the contractor, DWR will place poles and lines outside of breeding habitat, as delineated by the qualified biologist(s). DWR will follow the Nest Tree Avoidance measures listed above when removal or trimming of known or suitable nest trees cannot be avoided."
          },
          "BIO-37": {
            "code": "BIO-37",
            "title": "Conduct Surveys for Golden Eagle and Avoid Disturbance of Occupied Nests (FEIR)",
            "source": "EIR",
            "text": "The following measures will be required for surface construction and restoration activities to avoid disturbance of occupied golden eagle nests. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\n1. &nbsp; &nbsp;Prior to the start of construction, DWR will require qualified wildlife biologists (experienced with raptor identification and behaviors) to conduct focused surveys for golden eagle nests in suitable habitat within up to a 1-mile radius of the construction footprint. Survey methods will be determined based on coordination with USFWS and CDFW and all survey results will be submitted to USFWS and CDFW. In addition, prior to conducting surveys, any known breeding area records will be reviewed, and a map of potential nest sites will be created using GIS mapping of suitable nesting habitat.2. &nbsp; &nbsp;If an occupied golden eagle nest is identified in the survey area, a non-disturbance buffer of up to 1 mile will be established around the nest site to avoid disturbance or destruction of the site, consistent with the USFWS Recommended Buffer Zones for Ground-based Human Activities around Nesting Sites of Golden Eagles in California and Nevada (U.S. Fish and Wildlife Service 2020b:1), or more recent USFWS-approved guidance, if it becomes available. If the qualified wildlife biologist(s) determines that a nesting eagle is disturbed by construction activities, the qualified wildlife biologist(s) will have the authority to increase the non-disturbance buffer in coordination with USFWS and CDFW. If active eagle nests are identified and avoidance guidelines cannot be feasibly implemented, then DWR will not proceed with construction activities within 1 mile of the active eagle nests until the qualified biologist(s) confirms that the nests are no longer active or the qualified biologist(s), working with the USFWS and CDFW, identifies protective measures that avoid take.&nbsp;"
          },
          "BIO-39": {
            "code": "BIO-39",
            "title": "Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)",
            "source": "EIR",
            "text": "The following measures will be required for surface construction and restoration activities occurring in suitable Swainson&rsquo;s hawk habitat as defined in Appendix 13B, Section 13B.72, Swainson&rsquo;s Hawk, and by additional assessments conducted prior to construction in a given area. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\n1. &nbsp; &nbsp;Preconstruction Surveys. Preconstruction surveys will be conducted by a CDFW-approved biologist(s) to identify the presence of suitable Swainson&rsquo;s hawk nest trees and known nest trees (occupied within 1 or more of the past 5 years) within 0.5 mile of project sites. DWR will ensure that surveys for nesting Swainson&rsquo;s hawks are conducted in all suitable and known nest trees identified by the CDFW-approved biologist(s) and are consistent with the Recommended Timing and Methodology for Swainson&rsquo;s Hawk Nesting Surveys in California&rsquo;s Central Valley (Swainson&rsquo;s Hawk Technical Advisory Committee 2000), or methodology modified with written approval from CDFW. DWR will provide survey results to CDFW by phone or email no less than 5 days prior to commencement of construction activities, and in a written report within 30 days after commencement of construction activities. The CDFW-approved biologist(s) will include the location of all known and occupied nest trees(occupied in 1 or more of the last 5 years) present within 0.5 mile of the construction footprint. A nest tree will be considered occupied from the time the Swainson&rsquo;s hawk pair starts constructing the nest until the young leave the nest, or until the CDFW-approved biologist(s) determine(s) the nesting attempt failed and the nest is abandoned.2. &nbsp; &nbsp;Timing Restrictions. Where the construction site occurs within 0.5 mile of known or occupied nest trees identified by the CDFW-approved biologist(s), DWR will limit construction activities to outside the Swainson&rsquo;s hawk breeding season (March 1 through August 15), to the extent practicable, as determined by the contractor. Where construction activities cannot be restricted to more than 0.5 mile of an occupied nest tree during the breeding season, DWR will restrict the construction activities to not occur during the period of egg laying until after young have fledged, as determined by the CDFW-approved biologist(s), to the extent practicable as determined by the contractor in coordination with the CDFW-approved biologist. If not practicable, DWR will initiate construction activities prior to egg laying to allow time for Swainson&rsquo;s hawk acclimate to disturbance before eggs are laid. Where restricting work to outside the breeding season or during the period of egg laying to post-fledging is not practicable, DWR will submit plans to initiate construction activities to CDFW for written approval.3. &nbsp; &nbsp;Non-Disturbance Buffer. Where construction activities must occur within 0.5 mile of an occupied Swainson&rsquo;s hawk nest tree, DWR will establish a 650-foot-radius non-disturbance buffer around each occupied nest tree, and the buffer will remain in place until the end of the breeding season or until the last chick has left the nest. DWR will clearly delineate the non-disturbance buffer with fencing or other conspicuous marking. The CDFW-approved biologist(s) will monitor occupied nest trees to track progress of nesting activities (see measure 4 below). DWR will not conduct any construction activities within the buffer unless a smaller buffer is approved in writing by CDFW. If a construction activity must occur within 0.5 miles of an occupied nest tree, DWR will follow the conditions under Swainson&rsquo;s Hawk Nest Monitoring below. DWR will not conduct any construction activity within 150 feet of an occupied nest tree.\n4. &nbsp; &nbsp;Swainson&rsquo;s Hawk Nest Monitoring. Where construction activities must occur within 0.5 mile of an occupied Swainson&rsquo;s hawk nest tree, DWR will implement the following monitoring plan. If a nesting bird monitoring and management plan is prepared by a CDFW-approved biologist, and approved in writing by CDFW, it will prevail where it differs from the measures below.a. &nbsp; &nbsp;Five days and three days prior to the initiation of construction at any site where an occupied nest is within 0.5 mile of construction, the CDFW-approved biologist will observe the subject nest(s) for at least one hour or until nest status can be determined. The CDFW-approved biologist(s) will document nesting status and behaviors to compare to nesting status and behaviors after construction begins. DWR will report the results of preconstruction monitoring to CDFW within 24 hours of each survey.&nbsp;b. &nbsp; &nbsp;Where an occupied nest tree occurs between 150 and 325 feet (46 to 99 meters) from construction activities, the CDFW-approved biologist will observe the nest for at least 4 hours per day during construction to ensure the Swainson&rsquo;s hawks are engaged in normal nesting behavior. DWR will limit construction to between 30 minutes after sunrise and 30 minutes before sunset.c. &nbsp; &nbsp;Where an occupied nest tree occurs between 325 and 650 feet (99 to 198 meters) of construction, the CDFW-approved biologist(s) will observe the nest for at least 2 hours per day during construction to ensure the Swainson&rsquo;s hawk are engaged in normal nesting behavior.d. &nbsp; &nbsp;Where an occupied nest tree occurs between 650 and 1,300 feet (198 to 396 meters) of construction, the CDFW-approved biologist(s) will observe the nest for at least one hour on at least three days per week during construction to ensure the Swainson&rsquo;s hawk are engaged in normal nesting behavior and to check the status of the nest.e. &nbsp; &nbsp;Where an occupied nest tree occurs between 1,300 and 2,640 feet (396 to 805 meters) of construction, the CDFW-approved biologist(s) will observe the nest for at least one hour on at least one day per week during construction to ensure the Swainson&rsquo;s hawks are engaged in normal nesting behavior and to check the status of the nest.5. &nbsp; &nbsp;Disturbance of Occupied Nest Tree. DWR will prohibit physical contact with an occupied nest tree throughout the breeding season (March 1 through August 15). All workers within 650 feet will be out of the line of sight of the occupied nest tree during breaks or will take breaks more than 650 feet from the occupied nest tree.6. &nbsp; &nbsp;Authority of CDFW-Approved biologist(s). If, during construction, the CDFW-approved biologist(s) determine(s) that a nesting Swainson&rsquo;s hawk within 0.5 mile of the construction site is disturbed by construction activities to the point where nest abandonment is likely, the CDFW-approved biologist(s) will have the authority to immediately stop work and will immediately notify DWR. A designated representative from DWR will contact CDFW within 24 hours to determine additional protective measures to be implemented. Additional protective measures may include, but are not limited to, increasing the size of the buffer, delaying construction until the chicks have fledged, temporarily relocating staging areas, and temporarily rerouting access to the construction site. The CDFW-approved biologist(s) will:a. &nbsp; &nbsp;Stop construction until additional protective measures are implemented, unless Swainson&rsquo;s hawk behavior normalizes on its own. Potential nest abandonment and failure may be indicated if, in the CDFW-approved biologist(s)professional judgment, the Swainson&rsquo;s hawks exhibit distress and/or abnormal nesting behavior, such as swooping/ stooping at equipment or personnel, excessive distress-call vocalization or agitated behavior directed at personnel, failure to remain on nest, or failure to deliver prey items.b. &nbsp; &nbsp;Continue monitoring and ensure additional protective measures remain in place until the CDFW-approved biologist(s) determine(s) Swainson&rsquo;s hawk behavior has normalized.&nbsp;\nc. &nbsp; &nbsp;Determine if additional protective measures are ineffective and stop construction until the additional protective measures are modified.d. &nbsp; &nbsp;Continue monitoring until determining that Swainson&rsquo;s hawk behavior has normalized.e. &nbsp; &nbsp;The DWR representative or CDFW-approved biologist(s) will notify CDFW within 24 hours if nests or nestlings are abandoned and if the nestlings are still alive. The CDFW-approved biologist(s) will work with CDFW to determine appropriate actions.\n7. &nbsp; &nbsp;Nest Tree Avoidance. DWR will avoid removal of known nest trees and suitable nest trees to the maximum extent practicable as determined by the contractor in coordination with the CDFW-approved biologist. If a known nest tree must be removed for construction activities, DWR will notify and obtain written approval from CDFW. The notification will include the location of the known nest tree, conditions to offset the loss of the nest tree (using the protocol described for Swainson&rsquo;s Hawk in Appendix 3F, Attachment 3F.1, Table 3F.1-3, CMP-19a: Swainson&rsquo;s Hawk Nesting Habitat), and the time of removal, which will generally be October 1 through February 1. DWR will not remove any occupied nest tree until the last young have left the nest, as verified by the CDFW-approved biologist(s).8. &nbsp; &nbsp;Geotechnical Exploration. DWR will conduct geotechnical exploration outside of the breeding season, to the extent practicable as determined by the contractor in coordination with project engineers. The CDFW-approved biologist(s) will delineate with flagging or other visible markers suitable breeding habitat within the geotechnical exploration site. DWR will restrict geotechnical exploration to areas outside of the delineated breeding habitat. If geotechnical exploration must occur during the breeding season, the CDFW-approved biologist(s) will survey the breeding habitat within 0.5 mile for nesting Swainson&rsquo;s hawks. DWR will limit geotechnical exploration activities to least 0.5 mile away from any occupied nest tree, unless otherwise approved by CDFW.9. &nbsp; &nbsp;Measures Specific to Transmission Line Construction. DWR will not use helicopters to string transmission lines or to conduct surveys for field investigations within 0.5 mile of an occupied nest tree. DWR will not remove or trim occupied nest trees for transmission line construction until after the breeding season has ended or the last young have left the nest. If removal or trimming of an occupied nest tree needs to occur for human or wildlife safety, DWR will conduct removal or trimming from October 1 to February 1 (outside of the breeding season), or with written approval and guidance from CDFW. DWR will avoid removal or trimming of known or suitable nest trees, to the extent practicable, as determined by the contractor in coordination with the qualified biologist, during transmission line stringing and reconductoring activities or during power and pole placement. Where practicable, as determined by the contractor, DWR will place poles and lines outside of breeding habitat, as delineated by the CDFW-approved biologist(s). DWR will follow the Nest Tree Avoidance measures listed above when removal or trimming of known or suitable nest trees cannot be avoided."
          },
          "BIO-40": {
            "code": "BIO-40",
            "title": "Conduct Surveys and Minimize Impacts on Burrowing Owl (FEIR)",
            "source": "EIR",
            "text": "The following measures will be required for surface construction and restoration activities to minimize impacts on burrowing owl. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\n1. &nbsp; &nbsp;Surveys.&nbsp;a. &nbsp; &nbsp;Burrowing owl breeding and wintering surveys will be required within 500 feet of water conveyance work areas and restoration sites where suitable habitat has been identified during habitat assessment surveys where access is available. Surveys will be initiated during the year that precedes construction and will be consistent with the methods described in the Staff Report on Burrowing Owl Mitigation (California Department of Fish and Game 2012), or a modified methodology with written approval from CDFW.&nbsp;\nb. In addition to initial breeding and wintering season surveys, DWR will also require that preconstructions survey be conducted, with one occurring 14 days prior to groundbreaking and/or staging activities and another within 24 hours of these activities. These surveys will confirm whether owls identified during the initial breeding and wintering season surveys are still present or whether the previously unoccupied site has since become occupied by burrowing owls.\n2. &nbsp; &nbsp;Avoidance and Minimization. To the extent feasible, as determined by the contractor in coordination with the qualified biologist, burrowing owls will be avoided by relocating work areas with flexible locations, such as geotechnical exploration sites. Within the construction footprint where ground disturbance cannot avoid burrowing owls, owls will be relocated during the nonbreeding season and burrows will be excavated in coordination with CDFW, as described below under Burrowing Owl Relocation.a. &nbsp; &nbsp;If an active burrow is identified within 500 feet of a work area and work cannot be conducted outside of the nesting season (February 1 through August 31), a qualified biologist will establish a non-disturbance buffer that extends a minimum of 328 feet (200 meters) around the burrow. If burrowing owls are present at the site during the nonbreeding season&nbsp;(September 1 through January 31), a qualified biologist will establish a no-activity zone that extends a minimum of 656 feet (100 meters) around the burrow. The extent of non-disturbance buffers will be determined based on time of year and level of disturbance described in the Staff Report on Burrowing Owl Mitigation (California Department of Fish and Game 2012:9)b. &nbsp; &nbsp;If the appropriate non-disturbance buffer for breeding or nonbreeding burrowing owls cannot be established, a qualified biologist will evaluate site-specific conditions and, in consultation with CDFW, recommend a smaller buffer that still minimizes the potential to disturb the owls (and still allows reproductive success during the breeding season). The site-specific buffer will be established by taking into consideration the type and extent of the proposed activity occurring near the occupied burrow, the duration and timing of the activity, the sensitivity and habituation of the owls to existing conditions, and the dissimilarity of the proposed activity to background activities. If an appropriate buffer cannot be established around the active owl burrows, actions will be taken to exclude the owls from the site per the requirements below.c. &nbsp; &nbsp;A biological monitor will be present during all construction activities occurring within any reduced buffers. If during the breeding season there is any change in owl nesting and foraging behavior as a result of construction activities, the biological monitor will have the authority to immediately stop work and will work with construction personnel and the environmental manager to provide additional protections to reduce disturbance, such as adding visual and sound curtains; any modifications to the standard protections will be in consultation with CDFW.d. &nbsp; &nbsp;If monitoring indicates that the nest is abandoned prior to the end of nesting season or the burrow is no longer in use by owls (e.g., chicks have fledged), the non-disturbance buffer may be removed. If the abandoned burrow cannot be avoided by construction activity, the biologist will excavate and collapse the burrow to prevent reoccupation.3. &nbsp; &nbsp;Burrowing Owl Relocation. If burrowing owls are present within the construction footprint and cannot be avoided during the nonbreeding season (generally September 1 through January 31), they will be relocated through passive relocation, with or without burrow exclusion. Burrow exclusion is the prevention of burrows being reoccupied through the use of one-way doors. Passive relocation will be used when (1) there is a sufficient amount of suitable habitat within 500 feet of the work area to support nesting and foraging, (2) there are compatible land use practices in the area, and (3) the area is preferably currently under or proposed for conservation. Passive relocation will be conducted during the nonbreeding season; however, passive relocation techniques may be used during the breeding season (February 1 through August 31) if a qualified biologist, coordinating with CDFW, determines through site surveillance that the burrow is not occupied by a breeding pair, young, or eggs. Passive relocation will first be considered without the use of exclusion devices in order to avoid and minimize harassment of owls. DWR will develop Burrowing Owl Artificial Burrow and Exclusions Plans to be approved by CDFW prior to relocation, which will include the following relocation activities or revised relocation activities based on CDFW guidance and approval.&nbsp;\na. &nbsp; &nbsp;Passive relocation without exclusion. Prior to relocating owls, all potential burrowing owl burrows in suitable nesting habitat within the project footprint and 75 feet (23 meters) around the footprint, will be surveyed for owl use, and excavated if no owls are found. If occupied burrows are found, two natural or artificial burrows will be provided for each occupied burrow, within 165 to 325 feet (50 to 99 meters) of the natural burrow where feasible. Artificial burrows will be installed following the methods in Barclay (2008:53&ndash;55) and Johnson et al. (2010:4&ndash;32), or more current methodology if it becomes available, upon CDFW approval. Sites used for artificial burrows will either be properties currently used for or proposed for conservation if feasible, as determined by DWR in coordination with property owners. After constructing the artificial burrows, the owls will be given 60 days to relocate on their own. The work area will be monitored weekly for up to 60 days to determine whether the owls have left the burrow and to confirm occupancy at the artificial or other nearby burrows. The formerly occupied burrows will then be excavated. Whenever feasible, based on the location and substrate of burrows, as determined by the qualified biologist, burrows will be excavated using hand tools and refilled to prevent reoccupation. Sections of flexible plastic pipe (at least 3 inches in diameter) will be inserted into burrows during excavation to maintain an escape route for any animals inside the burrow.b. &nbsp; &nbsp;Passive relocation with exclusion. If the burrowing owls found do not relocate on their own through the above methodology, passive relocation will be accomplished by installing one-way doors (e.g., modified dryer vents). The one-way doors will be left in place for a minimum of 48 hours and be monitored twice daily to ensure that the owls have left the burrow. Once the biologist concludes the owls have left the burrow, the burrow will be excavated using hand tools, and a section of flexible plastic pipe (at least 3 inches in diameter) will be inserted into the burrow tunnel during excavation to maintain an escape route for any animals that may be inside the burrow."
          },
          "BIO-42": {
            "code": "BIO-42",
            "title": "Conduct Surveys and Minimize Impacts on Least Bell's Vireo (FEIR)",
            "source": "EIR",
            "text": "The following measures will be required for all surface construction and restoration activities occurring between May 15 through September 1 to avoid and minimize impacts on least Bell&rsquo;s vireo. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\n1. &nbsp; &nbsp;Prior to the construction, a noise expert will create a sound level contour map showing the 60 dBA sound level contour specific to the type and location of construction to occur in the area.2. &nbsp; &nbsp;Two weeks prior to construction, a USFWS- and CDFW-approved biologist will conduct daily surveys, consistent with a USFWS- or CDFW- approved survey protocol (U.S. Fish and Wildlife Service 2001:1-3, or more current guidance), within 500 feet of suitable habitat where construction-related noise levels could exceed 60 dBA Leq (1 hour).\n3. &nbsp; &nbsp;If a least Bell&rsquo;s vireo is found, construction activities will be limited such that sound will not exceed 60 dBA within 500 feet of the habitat being used until the USFWS- and CDFW-approved biologist has confirmed that the bird has left the area.4. &nbsp; &nbsp;If surveys find least Bell&rsquo;s vireos in an area where vegetation will be removed, vegetation removal will be conducted when the USFWS- and CDFW-approved biologist has confirmed that least Bell&rsquo;s vireos are not present within 500 feet of vegetation removal activities.5. &nbsp; &nbsp;Portable and stationary equipment will be located, stored, and maintained as far as possible, with a minimum distance of 500 feet, from suitable least Bell&rsquo;s vireo habitat.6. &nbsp; &nbsp;All lights will be screened and directed down toward work activities and away from suitable habitat. A biological construction monitor will ensure that lights are properly directed at all times during construction."
          },
          "BIO-44": {
            "code": "BIO-44",
            "title": "Conduct Preconstruction Surveys and Implement Protective Measures to Avoid Disturbance of Tricolored Blackbird (FEIR)",
            "source": "EIR",
            "text": "The following measures will be required for surface construction and restoration activities to avoid disturbance of tricolored blackbird. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\n1. &nbsp; &nbsp;Preconstruction Surveys.&nbsp;a. &nbsp; &nbsp;Nesting. Prior to construction, DWR will contact the UC Davis Tricolored Blackbird Portal Project staff, or another group as recommended by CDFW, to acquire recent colony information. Prior to initiation of construction in a given work area and within 1,300 feet (396 meters) of the work area, the CDFW-approved biologist(s) will conduct preconstruction surveys to evaluate the presence of tricolored blackbird breeding colonies and suitable nesting habitat. Surveys will be conducted during the breeding season (March 15 through July 31) 1 year prior to, and then again in the year of, construction. During each year, surveys will be conducted monthly in March, April, May, June, and July. If construction is initiated during the breeding season, the CDFW-approved biologist(s) will conduct three surveys within 15 days of construction, with one of the surveys within 5 days of the start of construction. If there is a break in construction of 1 week or more, surveys will be conducted prior to starting construction again in the area. DWR will use a breeding season survey protocol approved in writing by CDFW. The CDFW-approved biologist(s) will delineate suitable nesting habitat and breeding colonies with flagging or other visible marking. If active tricolored blackbird nesting colonies are identified, the following avoidance measures will be implemented.b. &nbsp; &nbsp;Roosting. Prior to initiation of nighttime construction activities (45 minutes before sunset to 45 minutes after sunrise) within 300 feet of a construction site, the CDFW-approved biologist(s) will conduct preconstruction surveys to establish the existence and use of roosting habitat by tricolored blackbird. Surveys will be conducted during the nonbreeding season(August 1 through March 14) 1 year prior and then the year of construction to establish use of roosting habitat. If nighttime construction is initiated at a site during the nonbreeding season, the CDFW-approved biologist(s) will conduct three surveys within 15 days prior to the nighttime construction, with one of the surveys within 5 days prior to the start of the nighttime construction. DWR will use a roosting survey protocol approved in writing by CDFW. DWR will consider roosting habitat occupied by large mixed blackbird flocks to be occupied by tricolored blackbird if the CDFW-approved biologist(s) cannot clearly identify tricolored blackbird presence within the flock. During nighttime construction activities (45 minutes before sunset to 45 minutes after sunrise), the CDFW-approved biologist(s) will check suitable roost sites within 300 feet of construction areas that are not occupied at the time of preconstruction surveys each day throughout the nonbreeding season, in accordance with the roosting survey protocol approved by CDFW, to determine whether tricolored blackbird later occupy the roost site. The CDFW-approved biologist(s) will delineate occupied roost sites with flagging or other visible markings.&nbsp;\n2. &nbsp; &nbsp;Non-Disturbance Buffer for Breeding. DWR will ensure construction avoids suitable nesting habitat within 1,300 feet, to the extent feasible as determined by the construction manager in coordination with the CDFW-approved biologist. If nesting habitat cannot be avoided and a tricolored blackbird breeding colony is detected, DWR will ensure construction does not occur within a 1,300-foot diameter non-disturbance buffer surrounding the colony and associated habitat during the breeding season (March 15 through July 31). The non-disturbance buffer may be reduced to a minimum of 300 feet (91 meters), with written approval from CDFW, in areas with dense forest, buildings, or other features between the construction and the breeding colony, where there is sufficient topographic relief to protect the colony from excessive noise or visual disturbance; or where sound curtains have been installed. If tricolored blackbird colonizes habitat within 1,300 feet of construction after construction has been initiated, DWR will reduce disturbance through establishment of non-disturbance buffers and/or sound curtains, as determined in consultation with CDFW.3. &nbsp; &nbsp;Night Work. DWR will restrict construction to 45 minutes after sunrise to 45 minutes before sunset if occurring within 1,300 feet (396 meters) of a breeding colony occupied by tricolored blackbird to the extent feasible, as determined by the contractor in coordination with the CDFW-approved biologist.4. &nbsp; &nbsp;Daily Monitoring. Where access allows, the CDFW-approved biologist(s) will monitor breeding colonies that are within 1,300 feet (396 meters) of construction for at least 6 hours per day, to verify that construction is not disrupting the colony. If the Designated Biologist(s) determines that construction is causing a disruption to the colony, the CDFW-approved biologist(s) will have the authority to stop construction and will notify DWR immediately. The DWR Representative will notify CDFW within 24 hours to determine additional protective measures that can be implemented. The CDFW-approved biologist(s) will have the authority to:a. &nbsp; &nbsp;Stop construction activities that are resulting in the disturbance until additional protective measures are implemented, unless tricolored blackbird breeding behavior normalizes on its own.b. &nbsp; &nbsp;Continue monitoring and ensure additional protective measures will remain in place for the duration of construction.c. &nbsp; &nbsp;Determine if additional protective measures are ineffective and stop construction as needed until the additional protective measures are modified.d. &nbsp; &nbsp;Maintain additional protective measures until the CDFW-approved biologist determines tricolored blackbird behavior has normalized and continue monitoring.\nAdditional protective measures may include, but are not limited to, increasing the size of the buffer, delaying construction until the colony is finished breeding and chicks have left the nest site, temporarily relocating staging areas, and temporarily rerouting access to the construction site. The CDFW-approved biologist(s) will notify CDFW within 24 hours if nests or nestlings are abandoned. If the nestlings are still alive, the CDFW-approved biologist (s) will work with CDFW to determine appropriate actions. Notification to CDFW will be via telephone or email, followed by a written incident report. Notification will include the date, time, location, and circumstances of the incident.&nbsp;\n5. &nbsp; &nbsp;Non-Disturbance Buffer for Roosting. DWR will not conduct nighttime construction (45 minutes before sunset to 45 minutes after sunrise) within a&nbsp;300-foot non-disturbance buffer surrounding the roost site. The non-disturbance buffer may be modified in areas with dense forest, buildings, or other features between the nighttime construction and the occupied roost site; where there is sufficient topographic relief to protect the roost site from excessive noise or visual disturbance; or where sound curtains are installed, as approved in writing by CDFW. Occupied roost sites that are within 300 feet of nighttime construction that occurs 45 minutes before sunset to 45 minutes after sunrise will be monitored daily (beginning 45 minutes before sunset) by the CDFW-approved biologist(s), for at least 4 hours or until the roost site is no longer occupied, to verify that the activity is not disrupting the roosting birds. If the CDFW-approved biologist(s) determines construction are disrupting roosting activity, DWR will put additional protective measures in place until the tricolored blackbird behavior normalizes. Additional protective measures may include, but are not limited to, increasing the size of the non-disturbance buffer, delaying nighttime construction until the flock has left the roost site or the end of the nonbreeding season, temporarily relocating staging areas, temporarily rerouting access to the construction site, or installation of sound curtains. DWR will contact CDFW if protective measures are not effectively reducing disruption to the roost site.&nbsp;\n6. &nbsp; &nbsp;Disturbance of Breeding Colonies and Roost Sites. DWR will prohibit physical contact with a breeding colony during the breeding season (March 15 through July 31) from the time of nest site selection until after the chicks have fledged. DWR will prohibit physical contact with an occupied roost site during the nonbreeding season (August 1 through March 14).7. &nbsp; &nbsp;Nesting Habitat Avoidance for Geotechnical Exploration and Transmission Line Construction. The CDFW-approved biologist(s) will delineate breeding colonies and buffers with flagging or other visible marking at construction sites for geotechnical exploration and transmission line construction, including work and staging areas and access roads. DWR will restrict these construction activities to construction sites outside of the delineated habitat during the breeding season. DWR will not conduct these construction activities within non-disturbance buffers established for breeding colonies.8. &nbsp; &nbsp;Helicopters. DWR will not use helicopters to conduct field investigations or to string transmission lines within 200 horizontal feet (61 meters) or 150 vertical feet (46 meters) of breeding colonies unless the helicopter is small enough to only cause a down draft of 15 to 18 miles per hour at up to 150 feet (46 meters). DWR will only operate helicopters at these distances from the breeding colony for up to 3 minutes in duration, once or twice per day, with a minimum of 4 hours between helicopter activities. If activities require larger helicopters or longer work periods, DWR will consult with CDFW to establish the appropriate buffer. DWR will ensure helicopters do not land or take off within 500 feet (152 meters) of any breeding colony. This buffer may be modified in areas with dense forest, buildings, or other features between the helicopter landing/take-off site and the breeding colony, where there is sufficient topographic relief to protect the breeding colony from excessive noise or disturbance; and as approved in writing by CDFW. Helicopters will not be used between 45 minutes before sunset to 45 minutes after sunrise."
          },
          "BIO-45b": {
            "code": "BIO-45b",
            "title": "Avoid and Minimize Impacts on Roosting Bats (FEIR)",
            "source": "EIR",
            "text": "The following measures were designed to avoid and minimize impacts on special-status bats. These measures are in part adopted from Caltrans Bat Mitigation: A Guide to Developing Feasible and Effective Solutions (Johnston et al. 2019). Bat species with potential to occur in the study area employ varied roost strategies, from solitary roosting in foliage of trees to colonial roosting in trees and artificial structures, such as buildings and bridges. Daily and seasonal variations in habitat use are common. To obtain the highest likelihood of detection, preconstruction bat surveys will be implemented by DWR approximately 2 years prior to the beginning of surface construction at a given location. Surveys and monitoring will be conducted from locations where access allows.&nbsp;\nPreconstruction Bridge, Overpass, and Other Structure Surveys&nbsp;\n1. &nbsp; &nbsp;Approximately 2 years prior to surface construction, including demolition, beginning on a bridge, overpass or a structure, a qualified biologist, with knowledge of the natural history of California bats, experience identifying habitat, and experience using full-spectrum acoustic equipment, will conduct a daytime search for bat sign (e.g., guano, urine staining, culled insect parts) on or underneath the bridge, overpass, or structure. This 2-year period prior to surface construction allows enough time to conduct surveys and plan for evictions, if necessary. Biologists conducting daytime surveys will listen for audible social calls through the use of bat detector, which converts ultrasonic echolocation emissions into frequencies audible to humans in real-time. This field assessment can be performed during any time of year, provided that weather conditions or local flooding do not affect the biologist&rsquo;s ability to do a thorough evaluation. Visual observations can be made using the naked eye, binoculars, a high-powered flashlight, and or a fiber-optic camera probe to inspect eaves and attics of structures and on bridge or overpass expansion joints, weep holes, and other bridge or overpass features that could house bats. Surveys should include the following methods.a. &nbsp; &nbsp;Survey under the entire bridge or overpass, as practicable.b. &nbsp; &nbsp;Identify the type of habitat present (e.g., day and night-roosting habitat).&nbsp;c. &nbsp; &nbsp;Describe the features that provide the roosting habitat (e.g., expansion joints, hinges, closure pours).d. &nbsp; &nbsp;Describe signs of bat use with respect to each habitat feature, if present.e. &nbsp; &nbsp;Include a sketch of the structure showing the locations of suitable habitat features and bat activity in each feature, based on sign or visual detection. A sketch will help in describing the habitat feature and planning for future surveys.f. &nbsp; &nbsp;Use the preferred method of documenting conditions in the survey area, including evidence of bats: a digital camera capable of capturing high-resolution images that provide scale. Take adequate photos to capture the bridge or overpass size, structural type, and all features that are relevant to bat use. At a minimum, the photographs should document the bridge or overpass signage (with identification number, post mile, and bridge or overpass name [if applicable]); a right-angle (i.e., side perspective) view showing the entire span; the abutments and any details associated with potential roosting habitat; representative images of the soffit, expansion joints, hinges, and closure pours; how the piers support the deck; representative weep holes documenting the presence or absence of screens; and images of various bat sign, such as urine staining and guano on the structure.g. &nbsp; &nbsp;Because several species may occupy a bridge or overpass, ensure that each type of guano sign is photographed. If bats occupy the bridge or overpass, the survey time under active roosts needs to be limited. Any use of flash photography to document roosting bats will create some level of disturbance. Many digital cameras can take images at very low light; if a flash is required, use a minimum setting such as 1/8 power or less.h. &nbsp; &nbsp;Estimate dimensions (i.e., length, width, depth) of each roost habitat type. Dimensions should be taken into consideration when designing mitigation habitat.i. &nbsp; &nbsp;Describe surrounding environmental conditions, including the dominant habitat type present, aquatic features, and other potential roost habitat (e.g., tree snags or large sycamores with cavities) on-site and in its vicinity.&nbsp;\nSurvey the entire project site plus a 100-foot-wide buffer for potential roosting habitat.&nbsp;\n2. &nbsp; &nbsp;If no habitat or sign of bats is observed, no further surveys are warranted. The biologist will carefully document the reasons for determining that no bat habitat is present on the bridge, overpass, or structure, and why further surveys are not merited. If habitat is present, but no sign of bats is observed, additional surveys would be necessary to support the conclusion that bats are not present because small colonies and individuals may often not produce obvious signs of occupancy and depending on the timing of the habitat assessment bats may have migrated or are not occupying the habitat at that time.3. &nbsp; &nbsp;If suitable habitat or signs of bat use are observed during the preliminary field assessment, focused surveys should be performed by a biologist to determine whether colonies are present and the approximate size of the colony or colonies and the species present. Caution should be taken when conducting field surveys at active roosts. To ensure that disturbance is kept to a minimum, the biologist and any field assistants should not loiter directly underneath known or suspected occupied roosts longer than is necessary to record data. Surveys should be performed in the summer, fall, spring, and winter to determine how the site is used by bats. Information collected during focused surveys should include an estimate of the number of bats and species present during the summer, fall or spring, and winter to provide an assessment of spatial and temporal use, as described below.a. &nbsp; &nbsp;Maternity season surveys. In California, the maternity season generally occurs from March 1 to August 31. The exact timing of the maternity season surveys will be determined by the biologist and take into consideration conditions in a given year. The following methods will be used for maternity season surveys.i. &nbsp; &nbsp;Conduct a daytime inspection to determine if bats are present and to identify areas of high use. While daytime inspections are usually sufficient to determine the presence of night-roosting habitat, nighttime roost inspections (2 to 3 hours after sunset) will be conducted if special-status species are suspected to occur.ii. &nbsp; &nbsp;Conduct a follow-up dusk emergence count survey. Dusk emergence count surveys should be conducted on a warm night when nighttime lows are not less than 45&deg;F and during dry weather conditions. Surveys should be conducted from approximately 15 minutes before sunset to 1 hour after sunset. Prior to any dusk emergence count, the biologist should understand the primary locations where bats are day roosting so these locations can be targeted during the emergence count. Depending on the locations and number of roost exit points, multiple surveyors may be needed. Surveyors should each be assigned a specific area that does not overlap with other surveyors&rsquo; locations. Surveyors should station themselves such that roost exit points are backlit by the sky. If possible, night-vision goggles should be used to assist in the counting.iii. &nbsp; &nbsp;Use bat detectors that produce an audible sound, which is helpful in identifying and counting bats as they emerge from the roost. Conduct active acoustic monitoring concurrent with exit count surveys to determine species or frequency group of bats.b. &nbsp; &nbsp;Fall and spring migratory period surveys. At least one daytime site inspection and one dusk emergence count should be conducted between March and April, and between early September and mid-October, to assess if bats are present and to count individuals.c. &nbsp; &nbsp;Winter surveys. At least one daytime site inspection should be conducted in January or February to determine if winter hibernacula or overwintering habitat for bats are present. Crevice-roosting species typically roost deep in crevices in the winter, and they may not be visible during winter inspections. Therefore, visual surveys, in combination with the use of an extendable fiber-optic camera probe to view inside crevices may be required for some bridges, overpasses, or structures.&nbsp;\nPreconstruction Tree Surveys&nbsp;\n4. &nbsp; &nbsp;If tree removal or trimming is necessary for project construction, approximately 1 year prior to surface construction at a given location a biologist will examine trees to be removed or trimmed for suitable bat roosting habitat. High-value habitat features (e.g., large tree cavities, basal hollows, loose or peeling bark, larger snags, palm trees with intact thatch) will be identified and the area around these features searched for bats and bat sign (e.g., guano, culled insect parts, staining). Riparian woodland, orchards, and stands of mature broadleaf trees should be considered potential habitat for solitary foliage-roosting bat species.5. &nbsp; &nbsp;If bat sign is detected, biologists will conduct evening visual emergence survey of the source habitat feature, from a half hour before sunset to 1 to 2 hours after sunset for a minimum of 2 nights within the season that surface construction would be taking place. Methodology should follow that described above in measure 3 for the bridge or overpass emergence survey.6. &nbsp; &nbsp;Additionally, if suitable tree-roosting habitat is present, acoustic monitoring with a bat detector will be used to assist in determining species present. These surveys will be conducted in coordination with the acoustic monitoring conducted for the bridge, overpass, or structure.\nProtective Measures for Bats Using Bridges, Overpasses, Structures, and Trees&nbsp;\n7. &nbsp; &nbsp;Avoidance and minimization measures will be necessary if it is determined that bats are using a bridge, overpass, or structure or trees as roost sites and/or sensitive bats species are detected during acoustic monitoring. Appropriate measures will be determined by DWR in consultation with CDFW and will include, as applicable, the following measures.a. &nbsp; &nbsp;Ensure that bats are protected from noise, vibrations, and light that result from surface construction activities associated with project infrastructure as well as operations and maintenance of aboveground water conveyance facilities. This would be accomplished by placing noise barriers between surface construction activities and the roost and by directing lights inward toward construction.b. &nbsp; &nbsp;Avoid construction-related disturbance above disturbance created by normal use of the bridge, overpass, or structure (as determined during preconstruction surveys) between April 15 and September 15 (the maternity period) to avoid impacts on reproductively active females and dependent young.c. &nbsp; &nbsp;Install exclusion devices from March 1 through April 1 and/or September 1 through November 1 to preclude bats from occupying the bridge or overpass during surface construction. Exclusionary devices will only be installed by or under the supervision of an experienced biologist.d. &nbsp; &nbsp;Avoid tree removal between April 15 and September 15 (the maternity period for bat species that use trees) to avoid impacts on pregnant females and active maternity roosts (whether colonial or solitary).e. &nbsp; &nbsp;Conduct tree removal between September 15 and October 31 to the maximum extent practicable, which corresponds to a time period when bats would not likely have entered winter hibernation and would not be caring for flightless young. If weather conditions remain conducive to regular bat activity beyond October 31, later tree removal may be considered in consultation with CDFW.f. &nbsp; &nbsp;Remove trees in pieces, rather than felling the entire tree.&nbsp;g. &nbsp; &nbsp;If a maternity roost is located, whether solitary or colonial, leave that roost undisturbed with a minimum 200-foot non-disturbance buffer or a distance as determined in consultation with CDFW until September 15 or until a biologist has determined the roost is no longer active.&nbsp;\nh. &nbsp; &nbsp;If a non-maternity roost is found, avoid that roost to the maximum extent practicable and use a minimum 200-foot non-disturbance buffer or a distance as determined in consultation with CDFW. Every effort will be made to avoid the roost to the maximum extent practicable, as methods to evict bats from trees are largely untested. However, if the roost cannot be avoided, eviction will be attempted and procedures designed in consultation with CDFW to reduce the likelihood of mortality of evicted bats. In all cases:i. &nbsp; &nbsp;Eviction will not occur before September 15 and will match the timeframe for tree removal approved by CDFW.ii. &nbsp; &nbsp;Biologists will carry out or oversee the eviction tasks and monitor the tree trimming or removal.iii. &nbsp; &nbsp;Eviction will take place late in the day or in the evening to reduce the likelihood of evicted bats falling prey to diurnal predators.iv. &nbsp; &nbsp;Eviction will take place during weather and temperature conditions conducive to bat activity (a warm night when nighttime lows are not less than 45&deg;F and during dry weather conditions).v. &nbsp; &nbsp;Special-status bat roosts will not be disturbed.vi. &nbsp; &nbsp;Evictions will not occur until temporary or permanent replacement roosting habitat is established at a location subject to CDFW approval. Replacement habitat plans will be reviewed and approved by CDFW. Habitat will be replaced at a ratio of 1:1 and will be functionally equivalent.\n8. &nbsp; &nbsp;Eviction procedures will include but are not limited to:&nbsp;a. &nbsp; &nbsp;Pre-eviction surveys to obtain data to inform the eviction approach and subsequent mitigation requirements. Relevant data may include the species, sex, reproductive status, and number of bats using the roost, and roost conditions such as temperature and dimensions. Surveys may include visual emergence, night vision, acoustic, and capture.b. &nbsp; &nbsp;Structural changes may be made to the roost, performed without harming bats, such that the conditions in the roost are undesirable to roosting bats and the bats leave on their own (e.g., open additional portals so that temperature, wind, light, and precipitation regime in the roost change).c. &nbsp; &nbsp;Uninjurious harassment at the roost site to encourage bats to leave on their own, such as ultrasound deterrents or other sensory irritants."
          },
          "BIO-46": {
            "code": "BIO-46",
            "title": "Conduct Preconstruction Survey for San Joaquin Kit Fox and Implement Avoidance and Minimization Measures (FEIR)",
            "source": "EIR",
            "text": "As properties become accessible for initiating project activities within areas of modeled San Joaquin kit fox habitat, DWR will require suitability assessments of the modeled habitat by a biologist qualified to identify suitable habitat for this species. Surveys will be conducted from locations where access allows.&nbsp;\n1. &nbsp; &nbsp;For areas verified as being suitable for San Joaquin kit fox, preconstruction surveys will be initiated within 14 to 30 days prior to ground disturbance, vegetation removal, or establishment of staging areas related to project activities. A USFWS- and CDFW-approved biologist with experience surveying for and observing the species will survey the project footprint and the area within 200 feet beyond the footprint to identify known or potential San Joaquin kit fox dens. Adjacent parcels under different land ownership will not be surveyed unless access is granted within the 200-foot radius of the project footprint. The biologists will conduct these searches by systematically walking 30- to 100-foot-wide transects throughout the survey area; transect width will be adjusted based on vegetation height and topography. The biologist will conduct walking transects such that 100% visual coverage of the worksite footprint is achieved. Dens will be classified in one of the following four den status categories outlined in the Standardized Recommendations for Protection of the Endangered San Joaquin Kit Fox Prior to or During Ground Disturbance (U.S. Fish and Wildlife Service 2011:8&ndash;9).\na. &nbsp; &nbsp;Potential den. Any subterranean hole within the species&rsquo; range that has entrances of appropriate dimensions for which available evidence is sufficient to conclude that it is being used or has been used by a San Joaquin kit fox. Potential dens comprise any suitable subterranean hole or any den or burrow of another species (e.g., coyote, badger, red fox, or ground squirrel) that otherwise has appropriate characteristics for kit fox use. If a potential den is found, the biologist will establish a 50-foot buffer using flagging.b. &nbsp; &nbsp;Known den. Any existing natural den or artificial structure that is used or has been used at any time in the past by a San Joaquin kit fox. Evidence of use may include historical records; past or current radiotelemetry or spotlighting data; kit fox sign such as tracks, scat, or prey remains; or other reasonable proof that a den is being or has been used by a kit fox. If a known den is found, the biologist will establish a 100-foot buffer using flagging.c. &nbsp; &nbsp;Natal or pupping den. Any den used by San Joaquin kit foxes to whelp or rear their pups. Natal or pupping dens may be larger with more numerous entrances than dens occupied exclusively by adults. These dens typically have more kit fox tracks, scat, and prey remains near the den and may have a broader apron of matted dirt or vegetation at one or more entrances. A natal den, defined as a den in which kit fox pups are actually whelped but not necessarily reared, is a more restrictive version of the pupping den. In practice, however, it is difficult to distinguish between the two types of dens; therefore, for purposes of this definition, either term applies. If a natal or pupping den is discovered, the biologist will establish a buffer of at least 200 feet using fencing but a final buffer will be established in coordination with USFWS and CDFW.d. &nbsp; &nbsp;Atypical den. Any artificial structure that has been or is being occupied by a San Joaquin kit fox. Atypical dens may include pipes, culverts, and diggings beneath concrete slabs and buildings. If an atypical den is discovered, the biologist will establish a 50-foot buffer using flagging.\n2. &nbsp; &nbsp;Disturbance to all San Joaquin kit fox den status categories (described directly above) will be avoided to the extent possible. Where avoidance is not possible, limited den destruction may be allowed provided the following procedures are observed.3. &nbsp; &nbsp;If an atypical, natal or pupping, known or potential San Joaquin kit fox den is discovered within a project footprint, the den will be monitored for 3 days by a USFWS- and CDFW-approved biologist using a tracking medium or an infrared beam camera to determine if the den is currently being used.4. &nbsp; &nbsp;If an active natal or pupping den is found within a project footprint, USFWS and CDFW will be notified immediately. The den will not be destroyed until the pups and adults have vacated and then only after further coordination with USFWS and CDFW.5. &nbsp; &nbsp;If San Joaquin kit fox activity is observed at the potential, known, or atypical den during the preconstruction surveys, den use will be actively discouraged with the approval of the USFWS- and CDFW-approved biologist, as described below, and monitoring will continue for an additional 5 consecutive days from the time of the first observation to allow any resident animals to move to another den. For dens other than natal or pupping dens, use of the den can be discouraged by partially plugging the entrance with soil such that any resident animal can easily escape. Alternatively, if the animal is still present after 5 or more consecutive days of plugging and monitoring, the den may have to be excavated by hand when, in the judgment of a biologist, it is temporarily vacant (i.e., during the animal&rsquo;s normal foraging activities). If at any point during excavation a San Joaquin kit fox is discovered inside the den, the excavation activity will cease immediately and monitoring of the den, as described above, will be resumed. Destruction of the den may be completed when, in the judgment of the biologist, the animal has escaped from the partially destroyed den.&nbsp;\n6. &nbsp; &nbsp;Construction requirements from Standardized Recommendations for Protection of the San Joaquin Kit Fox Prior to or during Ground Disturbance (U.S. Fish and Wildlife Service 2011:5&ndash;9) or the latest guidelines will be implemented.7. &nbsp; &nbsp;If potential, known, atypical, or natal or pupping dens are identified within temporary work areas or within a 200-foot buffer of a temporary work area, exclusion zones around each den entrance or cluster of entrances will be demarcated. The configuration of exclusion zones will be circular, with a radius measured outward from the den entrance(s). No activities will occur within the exclusion zones. Exclusion zone radii for atypical dens and potential dens will be at least 50 feet and will be demarcated with four to five flagged stakes. Exclusion zone radii for known dens will be at least 100 feet and will be demarcated with staking and flagging that encircle each den or cluster of dens but do not prevent access to the den by the foxes. Exclusion zone radii for natal or pupping dens will be at least 200 feet and will be demarcated using fencing, but a final buffer will be established in coordination with USFWS and CDFW. Exclusion zone radii for natal or pupping dens will be at least 200 feet and will be demarcated using fencing, but a final buffer will be established in coordination with USFWS and CDFW.8. &nbsp; &nbsp;Written results of the surveys will be submitted to USFWS and CDFW within 5 calendar days of the completion of surveys and prior to the beginning of ground disturbance and/or construction activities in San Joaquin kit fox modeled habitat.\nDuring construction, the following measures will be implemented for all activities in suitable San Joaquin kit fox habitat (as determined by a USFWS- and CDFW-approved biologist):&nbsp;\n9. &nbsp; &nbsp;The USFWS- and CDFW-approved biologist for San Joaquin kit fox will be the contact source for any employee or contractor who might incidentally kill or injure a kit fox or who finds a dead, injured, or entrapped kit fox.10. &nbsp; &nbsp;Any personnel who are responsible for incidentally killing or injuring a San Joaquin kit fox will immediately report the incident to the USFWS- and CDFW-approved biologist. The USFWS- and CDFW-approved biologist will contact USFWS immediately in the case of a dead, injured, or entrapped kit fox.11. &nbsp; &nbsp;USFWS and CDFW will be notified immediately of the accidental death or injury to a San Joaquin kit fox. Notification must include the date, time, and location of the incident or of the finding of a dead or injured animal and any other pertinent information. The USFWS contact is the Assistant Field Supervisor of Endangered Species.12. &nbsp; &nbsp;New sightings of kit fox will be reported to the CNDDB. A copy of the reporting form and a topographic map clearly marked with the location of where the kit fox was observed will also be provided to USFWS at the address below."
          },
          "BIO-47": {
            "code": "BIO-47",
            "title": "Conduct Preconstruction Survey for American Badger and Implement Avoidance and Minimization Measures (FEIR)",
            "source": "EIR",
            "text": "DWR will require a qualified biologist to survey for American badger concurrently with the preconstruction surveys for burrowing owl within 14 days prior to the start of ground disturbance. If an active den is detected within the work area, the qualified biologist will establish a minimum 100-foot non-disturbance buffer around the den until the biologist determines that the den is no longer active through direct monitoring, using wildlife cameras, or using a camera probe. Potential dens that are determined to be inactive by one or more of the aforementioned methods will be collapsed by hand to prevent occupation of the den between the time of the survey and construction activities. Surveys and monitoring will be conducted from locations where access allows.&nbsp;"
          },
          "CUL-1a": {
            "code": "CUL-1a",
            "title": "Avoid Impacts on Built-Environment Historical Resources through Project Design (FEIR)",
            "source": "EIR",
            "text": "1. Redesign or modify relevant facilities, construction activities, or both to avoid destruction of or damage to a built-environment historical resource or its setting, to the extent feasible, and if avoidance is not feasible, minimize the destruction or damage to the greatest extent feasible."
          },
          "CUL-1b": {
            "code": "CUL-1b",
            "title": "Prepare and Implement a Built-Environment Treatment Plan in Consultation with Interested Parties (FEIR)",
            "source": "EIR",
            "text": "1. &nbsp; &nbsp;DWR will complete a built-environment treatment plan (BETP) as part of mitigation and monitoring for compliance with CEQA. This mitigation measure provides options that may be included in the BETP, depending on the type of impact and the type of resource. A historian who meets the Secretary of the Interior&rsquo;s Standards will determine suitable content for each resource&rsquo;s BETP that would appropriately mitigate the impacts for individual historical resources. Therefore, the content of different BETPs may vary.a. &nbsp; &nbsp;A BETP will be prepared for each built-environment historical resource with a significant impact from the project. For each BETP prepared, DWR will review mitigation measures from other resource topics in this EIR, such as noise and visual, to identify other mitigation activities related to the historical resource that is the subject of the treatment plan. The BETP will be prepared by an architectural historian who meets the Secretary of the Interior&rsquo;s Standards with demonstrated experience preparing treatment for similar kinds of resources and reviewed by relevant parties prior to any demolition or ground-disturbing activity with potential to affect a built-environment resource. Property-specific impacts are identified in Appendix 19C, Tables 19C-1 through 19C-4, and mitigation consistent with (c) and (d) below will be implemented in accordance with the specifics developed in the BETP. Resource-specific BETPs will reduce project impacts by tailoring avoidance and minimization treatments to each resource.b. &nbsp; &nbsp;DWR will consult with relevant parties during preparation of the BETPs. Consultation with relevant parties will help ensure that BETP mitigation activities protect significant character-defining features important to those parties. Such parties may include but are not limited to the State Historic Preservation Officer, the Advisory Council on Historic Preservation, local historical societies, and other interested parties such as local preservation and community organizations with a demonstrated interest in the resource that is the subject of the BETP.&nbsp;\nc. &nbsp; &nbsp;For built-environment historical resources whose integrity of design, materials, or workmanship will be significantly affected, an architectural historian who meets the Secretary of the Interior&rsquo;s Standards may specify resource-specific treatments in each BETP. Treatments selected for each resource&rsquo;s BETP would establish baseline conditions for affected resources and identify additional treatments most likely to address potential damage. Specific treatments will reduce project impacts by developing a clear plan to stabilize resources, resulting in avoidance or minimization of potential impacts on the resource&rsquo;s integrity of design, materials, or workmanship. Furthermore, these treatments will help avoid damage to built-environment historical resources and will provide guidance on conducting repairs if inadvertent damage occurs. These treatments will be designed to avoid direct impacts such as vibration that may result in structural damage or other physical damage.i. &nbsp; &nbsp;A preconstruction condition assessment is required for all resources in the AI-BE and will be included in every BETP. The condition assessment will be used to prepare a stabilization plan for all resources and to identify resources in poor condition. For those identified in the assessment as being in poor condition, a Historic Structure Report will be prepared. Should damage caused by the project be questioned, these condition assessments will provide evidence of the preconstruction condition.ii. &nbsp; &nbsp;Historic Structure Reports may be prepared for built-environment historical resources in the AI-BE for which detailed information is required to develop protection measures (National Park Service 2005a). These reports will be prepared for buildings and structures that are adjacent to construction and potentially sensitive to construction-related activities such as vibration. Preconstruction stabilization of these buildings may be necessary. The Historic Structure Report will include preconstruction protection measures based on guidance in the National Park Service&rsquo;s Technical Preservation Brief 31 on mothballing historic buildings (1993), preconstruction stabilization methods, and outline a treatment plan and work recommendations based on the Secretary of the Interior&rsquo;s Standards for the Treatment of Historic Properties,13 should the historical resource sustain unanticipated damage (National Park Service n.d.).iii. &nbsp; &nbsp;Precautions to protect built-environment historical resources from construction vehicles, debris, and dust may be required and may include fencing or debris meshing. Temporary mothballing and fire and intrusion protection based on the National Park Service&rsquo;s Technical Preservation Brief 31 on mothballing historic buildings&nbsp;(1993) may be needed if the buildings are unoccupied during construction.iv. &nbsp; &nbsp;Protective treatments against construction vibration may be recommended and would be field checked as needed during construction by a qualified architectural historian with demonstrated experience in conducting monitoring of this nature. Vibration monitoring will be required for buildings determined to be susceptible to vibration damage that are in the AI-BE and within an area to be affected by activities or machinery that cause vibrations in exceedance of a single-event source vibration generating a PPV in inches per second of 0.3 PPV, or when a continuous source causes vibration at 0.12 PPV, as summarized in Table 19-4.\nd. &nbsp; &nbsp;For built-environment historical resources whose integrity of setting, feeling, or association will be significantly affected, an architectural historian who meets the Secretary of Interior&rsquo;s Standards may specify resource-specific treatments in each BETP. Treatments selected for each resource&rsquo;s BETP would establish baseline conditions for affected resources and identify additional treatments most likely to address potential damage. These treatments will reduce project impacts by ensuring that new project features, to the extent feasible, are designed in a manner consistent with the setting to retain the resource&rsquo;s integrity of setting, feeling, and association. As an effort to mitigate significant impacts on a built-environment historical resource, the resource will be documented and recorded to preserve its history and role within the region for the public&rsquo;s benefit and understanding. Where significant impacts on built-environment historical resources will occur, the impacts will be mitigated by repairing damage in accordance with the Secretary of the Interior&rsquo;s Standards.i. &nbsp; &nbsp;Design standards consistent with the Secretary of the Interior&rsquo;s Standards may be incorporated into the BETP to minimize visual impacts and to ensure context-appropriate design. This may include screening features, plantings, or other design changes that can minimize impacts.ii. &nbsp; &nbsp;Historic American Building Survey (HABS) documentation may be prepared for historical resources that will be demolished or altered. HABS documentation will include written and photographic documentation of the significant and character-defining features of these properties. These reports will minimize the adverse impacts by capturing and preserving a description of the significant information and characteristics associated with the resource.iii. &nbsp; &nbsp;As applicable, Historic American Landscape Survey (HALS) records and Historic American Engineering Record (HAER) documents may be prepared for historic water-associated resources (National Park Service 2005b). The levees and other linear historical resource features will be recorded following HAER guidelines. Additionally, the settings will be recorded following HALS guidelines. These reports will include written and photographic documentation of the significant and character-defining features of these properties. The HALS and HAER reports will minimize the significant impacts by capturing and retaining a description of the significant engineering and design information associated with the resource.iv. &nbsp; &nbsp;In recent years, the National Park Service and National Archives have issued directives indicating that they will not accept formal submissions under the HABS, HALS, and HAER programs unless the resource being documented is a rare, unusual, or exceptionally high-quality example of its type because of the huge volume of submissions generated by environmental mitigation requirements. Therefore, if HABS, HALS, or HAER documentation is prepared, the BETP will indicate whether the documentation will be formally submitted to the National Park Service for review and approval, based on a consideration of the rarity or caliber of the resource being mitigated, or instead will be prepared informally for distribution to local repositories or for re-use for interpretive or educational programs.v. &nbsp; &nbsp;As applicable for rural cultural landscape historic districts, the BETP may include the preparation of a Landscape Treatment Plan. The Landscape Treatment Plan will follow guidance published by the National Park Service (1998) and will serve to document the history and significance of the landscape and provide treatment recommendations that conform with the Secretary of the Interior&rsquo;s Standards.\nvi. The BETP may include preparation of interpretive or educational media such as displays in public spaces, print materials, or websites. Interpretive and educational media may incorporate written, photographic, and archival documentation (such as those compiled for informal HABS/HAER/HALS reports), oral history interviews, video, or animation to tell the story of the heritage represented by the affected resource. Interpretive media may be an appropriate mitigation for some historical resources because they are associated with events that have made a significant contribution to the broad patterns of California&rsquo;s history and cultural heritage or that are associated with persons important in our past for their association with historical trends or people, rather than for their design qualities.&nbsp;"
          },
          "CUL-2": {
            "code": "CUL-2",
            "title": "Conduct a Survey of Inaccessible Properties to Assess Eligibility and Determine Whether These Properties Will Be Adversely Affected by the Project (FEIR)",
            "source": "EIR",
            "text": "1. &nbsp; &nbsp;Because DWR does not have legal access to portions of the project footprint, built resources inventory has not been concluded for the areas that were inaccessible from the public right-of-way. Before construction, DWR will have access to all property needed to finalize the inventory and evaluation, and DWR will ensure that all areas of impacts will be surveyed. This subsequent survey will be conducted in a manner consistent with the 2021 survey (Appendix 19A, Historical Resources Survey and Evaluation Report). The project impacts will be minimized with this measure by ensuring that built-environment historical resources have been identified, so Mitigation Measure CUL-1b can be applied.a. &nbsp; &nbsp;The scope of the inventory will include the entire area where impacts may occur that were inaccessible or partially inaccessible in the first survey efforts. Such impacts consist of direct disturbance, damage through vibration, or changes to the setting.b. &nbsp; &nbsp;The work will be led or supervised by architectural historians that meet the Secretary of the Department of the Interior&rsquo;s professional qualification standards provided in 36 CFR Part 61.c. &nbsp; &nbsp;Inventory methods and evaluation will include pedestrian surveys, photographic documentation, historical research using both primary and secondary sources, and interviews and oral histories.d. &nbsp; &nbsp;Newly identified resources will be mapped and described on applicable California Department of Parks and Recreation (DPR) 523-series forms. Mapping will be performed by recording data points with GPS hardware that can be imported and managed digitally.e. &nbsp; &nbsp;For all identified resources, DWR will review the previous documentation and complete a field survey to determine if the resources retain sufficient integrity as historical resources (CEQA Guidelines &sect; 15064.5(a)).f. &nbsp; &nbsp;The recorded resources and the resource evaluations will be summarized in an inventory report. The inventory report will include a determination of whether individual resources qualifying as historical resources or historic properties will be subject to significant impacts. DWR will make such a finding if the project will result in the following:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;i. &nbsp; &nbsp;Demolish or materially alter the qualities that make the resource eligible for listing&nbsp; in the CRHR (CEQA Guidelines &sect;15064.5(b)(2)(A),(C)).&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ii. &nbsp; &nbsp;Demolish or materially alter the qualities that justify the inclusion of the resource on a local register or its identification in an historical resources survey meeting the requirements of California Public Resources Code Section 5024.1(g).g. &nbsp; &nbsp;Where built-environment historical resources that are listed or qualify for listing in the CRHR or NRHP, or that have been designated in a qualified local register, will be subject to significant impacts, these resources will be added to the BETP prepared in accordance with Mitigation Measure CUL-1b."
          },
          "CUL-3a": {
            "code": "CUL-3a",
            "title": "Prepare and Implement an Archaeological Resources Management Plan (FEIR)",
            "source": "EIR",
            "text": "1. &nbsp; &nbsp;Because DWR does not have legal access to portions of the project footprint, an archaeological resources inventory has not been concluded for the areas that were inaccessible. Before construction, DWR will have access to all property needed to finalize the inventory and evaluation, and DWR will ensure that all areas of impacts will be surveyed. The project impacts will be minimized with this measure by ensuring that archaeological resources have been identified. DWR will prepare an Archaeological Resources Management Plan (ARMP) prior to field investigations and construction activities to guide the archaeological resources technical studies and resource-specific treatments to be conducted prior to and during construction activities. The ARMP will describe procedures that have been identified for avoiding, minimizing, and mitigating known or potential project impacts on archaeological resources. The first step in each procedure will be to implement feasible avoidance of archaeological resources.&nbsp;a. &nbsp; &nbsp;The ARMP will be developed during the permitting and design process and will be adopted prior to land acquisition. Preparers of the ARMP will meet professional qualification standards established in the Secretary of the Interior&rsquo;s Professional Qualification Standards for archaeology and architectural history. DWR will coordinate with the Native American Tribes that participated in consultation on the project to ascertain whether they have standard procedures that may be applicable or other input on the content of the ARMP. The Tribes will be afforded an opportunity to review and comment on the draft ARMP. The content of the ARMP will follow industry standards, including guidance prepared by the California Office of Historic Preservation and the National Park Service. Each procedure will be attached to the ARMP, as each is completed in accordance with the timing and responsibilities identified below.b. &nbsp; &nbsp;The ARMP will include procedures for the following:&nbsp;i. &nbsp; &nbsp;Archaeological Resources Phased Identification&nbsp;ii. &nbsp; &nbsp;Archaeological Treatmentiii. &nbsp; &nbsp;Post-Review Discoveryiv. &nbsp; &nbsp;Archaeological Monitoring&nbsp;\nArchaeological Resources Phased Identification Procedure (PIP)&nbsp;\nc. &nbsp; &nbsp;Purpose: DWR, or its qualified contractors, will conduct pedestrian and subsurface surveys to complete the identification of archaeological resources located in the AI-A. The PIP will provide details about the current cultural resources data gaps and requirements for completing phased identification surveys prior to construction for areas where DWR currently does not have access. Once these surveys are conducted and DWR has detailed information about potentially affected resources, DWR will be able to assess resource-specific project impacts and consider avoidance options and the applicability of other procedures in the ARMP, such as treatment plans or monitoring.d. &nbsp; &nbsp;Outcome: Implementing the PIP will ensure that DWR fills the current data gaps for archaeological resources and is fully aware of the presence of archaeological resources that may be affected by the project. As part of the reporting requirements when implementing the PIP, the survey and evaluation reports will recommend appropriate procedures in the ARMP required to avoid, minimize, or mitigate project impacts on those resources found to be significant that are not currently known due to limited access.e. &nbsp; &nbsp;Content: The PIP will include guidance for phased surveys and CRHR evaluations for archaeological resources and assessment of impacts, should any resources be newly identified. The PIP will specify the ways in which surveys might be phased, taking into consideration the mechanisms for acquiring access to currently inaccessible properties and the schedule for design development.\nArchaeological Treatment Procedure&nbsp;\nf. &nbsp; &nbsp;Purpose: DWR, or its qualified contractors, will prepare a procedure that provides a range of treatment options for archaeological resources identified as part of implementing the PIP or previously identified as NRHP/CRHR eligible.g. &nbsp; &nbsp;Outcome: The Archaeological Treatment Procedure will ensure that all archaeological resources potentially affected by the project will be treated according to best practices and professional standards, and that treatment options will include a range of interventions from avoidance and minimization of impacts to mitigation for the loss of the physical resource.h. &nbsp; &nbsp;Content: The Archaeological Treatment Procedure will provide detailed guidance on the professional standards and best practices for a range of treatment types for avoiding and minimizing impacts on archaeological resources, as well as other treatments for how to record the significance of an archaeological resource when impacts cannot be avoided or minimized. This procedure will identify when it is appropriate to prepare a resource-specific treatment plan and establish the minimum contents and standards for such plans. Treatment may include, but would not be limited to the following actions.i. &nbsp; &nbsp;Installation of exclusionary fencingii. &nbsp; &nbsp;Site cappingiii. &nbsp; &nbsp;Data recoveryiv. &nbsp; &nbsp;Public interpretation and education&nbsp;\nPost-Review Discovery Procedure&nbsp;\ni. &nbsp; &nbsp;Purpose: DWR, or its qualified contractors, will prepare a procedure that identifies the critical path actions that must be followed if an unanticipated discovery of cultural materials occurs at any time during project construction, operations, or maintenance.j. &nbsp; &nbsp;Outcome: The Post-Review Discovery Procedure will ensure that any archaeological resources that are disturbed in the course of project construction, operations, or maintenance will be assessed by qualified archaeologists prior to further ground-disturbing activities, and that treatment options for the avoidance, minimization, or mitigation of further disturbance are developed and applied prior to resumption of construction activity.k. &nbsp; &nbsp;Content: The Post-Review Discovery Procedure will specify the steps required for stopping work, assessing the find, coordinating with appropriate agencies or interested parties, developing appropriate treatment, and determining when construction or other activities can continue in what proximity of any unanticipated discoveries of archaeological resources. This procedure will include a research design and guidance for evaluation and treatment of post-review archaeological discoveries. Treatment may include, but would not be limited to the following actions.i. &nbsp; &nbsp;Installation of exclusionary fencingii. &nbsp; &nbsp;Site cappingiii. &nbsp; &nbsp;Data recoveryiv. &nbsp; &nbsp;Public interpretation and education&nbsp;\nArchaeological Monitoring Procedure&nbsp;\nl. Purpose: DWR, or its qualified contractors, will prepare a procedure for archaeological monitoring that will be performed during project-related ground disturbance.\nm. Outcome: The Archaeological Monitoring Procedure will ensure that qualified archaeologists perform monitoring during project-related ground disturbance to identify any unanticipated discoveries and to implement the Post-Review Discovery Procedure.\nn. Content: The Archaeological Monitoring Procedure will establish the methods and standards for when and how archaeological monitoring activities will be conducted, identify the roles and responsibilities of monitors and construction crews, and specify communication protocols and reporting requirements. This procedure will address monitoring required during project-related ground disturbance."
          },
          "CUL-3b": {
            "code": "CUL-3b",
            "title": "Conduct Cultural Resources Sensitivity Training (FEIR)",
            "source": "EIR",
            "text": "Prior to the start of ground disturbance, DWR will ensure that a qualified archaeologist conducts a mandatory archaeological sensitivity training for all personnel involved in ground-disturbing work about cultural resources sensitivity in the project footprint and cultural resources that could be encountered during work. Participants will be required to sign a form stating that they have received and understand the training. DWR will maintain the record of training and make it available to interested parties, upon request. The project foreman will ensure that the new personnel brought onto the project receive the mandatory training before starting work."
          },
          "CUL-3c": {
            "code": "CUL-3c",
            "title": "Implement Archaeological Protocols for Field Investigations (FEIR)",
            "source": "EIR",
            "text": "1. &nbsp; &nbsp;All areas associated with field investigations will be reviewed by a qualified archaeologist to evaluate the potential for impacts, if any, on cultural resources. DWR will also implement the following protocols:a. &nbsp; &nbsp;Locations that have no previous survey coverage must be surveyed by, or under the direct supervision of, a qualified archaeologist prior to the start of any ground-disturbing activities.b. &nbsp; &nbsp;If the archaeologist observes cultural resources within the field investigation area or at minimum, within a 100-foot buffer as identified by a qualified archaeologist, the location will be shifted outside the buffer to reduce the potential for significant cultural resource impacts without significantly increasing potential impacts on other resources.c. &nbsp; &nbsp;If a suitable location cannot be determined by project engineers within adjacent areas, and if relocation or termination is feasible, then the soil investigation at that location will not be conducted. If relocation or termination are not feasible, field investigations will not be conducted until Mitigation Measure CUL-3a has been completed.i. &nbsp; &nbsp;Should any unexpected cultural resources be exposed during field investigations, all work will immediately stop in the immediate vicinity (e.g., within 100 feet [30 meters]) of the find until it can be evaluated by a qualified archaeologist and an appropriate plan of action can be determined."
          },
          "CUL-5": {
            "code": "CUL-5",
            "title": "Follow State and Federal Law Governing Human Remains if Such Resources Are Discovered during Construction (FEIR)",
            "source": "EIR",
            "text": "If human remains are discovered, DWR and the construction contractors will coordinate with the county coroner and California Native American Heritage Commission (NAHC) to make the determinations and perform the management steps prescribed in California Health and Safety Code Section 7050.5 and California Public Resources Code Section 5097.98. The provisions of these state laws apply unless discoveries occur on land owned or controlled by the federal government. For discoveries on federal land, procedures for Native American Graves Protection and Repatriation Act will be followed. Compliance with state law for discoveries occurring on private or state lands requires notification of the county coroner so the coroner may determine if an investigation regarding the cause of death is required. If the coroner determines that the remains are of early Native American origin, the coroner will notify the NAHC.&nbsp;Upon notification the NAHC will identify the most likely descendant (MLD). DWR will coordinate with the MLD to ascertain whether the Tribe has standard procedures for treatment of burials or human remains. DWR will coordinate closely with the Tribe to develop an appropriate treatment plan for the reinterment or other consideration of the remains. If the NAHC fails to identify the MLD, or if the parties cannot reach agreement as to how to treat the remains as described in California Public Resources Code Section 5097.98(e), DWR will reinter the remains at a location not subject to further disturbance. DWR will ensure the protections prescribed in California Public Resources Code Section 5097.98(e) are performed, such as the use of conservation easements and recording of the location with the relevant county and CHRIS Information Center. If the burial appears to be a contributor to the Delta Tribal cultural landscape, as determined by implementing Mitigation Measure TCR-2: Perform an Assessment of Significance, Known Attributes, and Integrity for Individual CRHR Eligibility, DWR will also implement Mitigation Measure TCR-1c: Implement Measures to Restore and Enhance the Physical, Spiritual, and Ceremonial Qualities of Affected Tribal Cultural Resources including, but not limited to, the provision for access to designated land for repatriation of disturbed cultural materials associated with burials.&nbsp;"
          },
          "EC-1": {
            "code": "EC-1",
            "title": "Conduct Environmental Resources Worker Awareness Training (FEIR)",
            "source": "EIR",
            "text": "DWR will provide training to field management and construction personnel on the&nbsp;importance of protecting sensitive natural resources (e.g., special-status fish species,&nbsp;wildlife species, plant species, and designated critical and/or suitable habitats for these&nbsp;species) prior to any ground-disturbing activity. Preconstruction training will be&nbsp;conducted so that construction personnel are aware of their responsibilities and the&nbsp;importance of compliance. All trainees will be required to sign a sheet indicating their&nbsp;attendance and completion of environmental training. The signature pages will be&nbsp;provided to California Department of Fish and Wildlife (CDFW), U.S. Fish and Wildlife&nbsp;Service (USFWS), and National Marine Fisheries Service (NMFS), if requested.&nbsp;Construction personnel will be educated on the types of sensitive resources in the&nbsp;project area and the measures required to avoid and minimize impacts on these&nbsp;resources. Materials covered in the training program will include environmental rules&nbsp;and regulations for the specific site requirements for limiting activities to approved&nbsp;work areas, timing restrictions, and avoidance of sensitive resource areas.&nbsp;In general, trainings will include the following components.\n1. The need and legal requirements for resource avoidance and protection.\n2. Important timing windows for special-status species (i.e., timing of special-status&nbsp;fish migration, spawning, and rearing; wildlife mating, nesting, and fledging;&nbsp;amphibian breeding and dispersal, and plant flowering periods).\n3. Identification of listed fish, wildlife, and plant species potentially affected at the&nbsp;worksite, which will depend upon the work to be performed and location of the&nbsp;work.\n4. Relevant measures from environmental documents and regulatory permits to be&nbsp;implemented during construction for the protection of covered fish, wildlife, and&nbsp;plant species, depending upon work to be performed and location of the work (i.e.,&nbsp;in-water, upland, wetland).\n5. Brief discussions of special-status species and natural communities of concern.\n6. Boundaries of the work area.\n7. Exclusion and construction fencing methods.\n8. Roles and responsibilities, including an explanation regarding the authority of&nbsp;biological monitors to stop work as required by permits and/or project approvals.\n9. What to do when special-status fish, wildlife, or plants are encountered (including&nbsp;dead, injured, stressed, or entrapped individuals) in work areas.\n10. Staking methods to protect resources.\n11. Avoidance and minimization commitments.\n12. Consequences of violations of the laws and regulations protecting resources.\nA fact sheet or other supporting materials containing this information will be prepared and distributed to construction supervisors and managers, along with a list of contacts (names, numbers, and affiliations) prior to initiating construction activities. DWR will appoint a representative to be the primary point of contact for any employee or contractor who might inadvertently take a special-status species, or a representative will be identified during the employee education program and the representative&rsquo;s name and telephone number provided to the fish and wildlife agencies. If new construction personnel are added to the project, the contractor will require that the personnel receive the mandatory training and sign a sheet indicating their attendance and completion of the environmental training before starting work. The training sheets for new construction personnel will be provided to CDFW, USFWS, and NMFS, if requested"
          },
          "EC-2": {
            "code": "EC-2",
            "title": "Develop and Implement Hazardous Materials Management Plans (FEIR)",
            "source": "EIR",
            "text": "DWR will require that each project contractor responsible for construction of a project facility or project develop and implement a hazardous materials management plan (HMMP) before beginning construction. Multiple HMMPs will be prepared for the overall project construction activities, each considering site-specific conditions such as hazardous materials present on site and known historic site contamination. A database on known historic instances of contamination and results of any field inspections regarding the presence of hazardous chemicals will be maintained. The HMMPs will provide detailed information on the types of hazardous materials used or stored at all sites associated with the water conveyance facilities (e.g., intake pumping plants, maintenance facilities); phone numbers of applicable city, county, state, and federal emergency response agencies; primary, secondary, and final cleanup procedures; emergency-response procedures in case of a spill; and other applicable information. The HMMPs will include appropriate practices to reduce the likelihood of a spill of toxic chemicals and other hazardous materials during construction and facilities operation and maintenance. A specific protocol for the proper handling and disposal of hazardous materials will be established before construction activities begin, will be implemented during project construction, and will be enforced by DWR.\nThe HMMP will include, but not be limited to, the following measures or practices:\n\nFuel, oil, and other petroleum products will be stored only at designated sites.2. Hazardous materials containment containers will be clearly labeled with the identity of the hazardous materials contained therein, handling and safety instructions, and emergency contact information.3. Storage, use, or transfer of hazardous materials in or near wet or dry streams will be consistent with the Fish and Game Code (Section 5650) and/or with the permission of CDFW.4. Material Safety Data Sheets will be made readily available to the contractor&rsquo;s employees and other&nbsp;personnel at the work site.5. The accumulation and temporary storage of hazardous wastes will not exceed 90 days.6. Soils contaminated by spills or cleaning wastes will be contained and removed to an approved disposal site by an appropriately-certified hazardous waste disposal contractor.7. Hazardous waste generated at work sites, such as contaminated soil, will be segregated from other construction spoils and properly handled, hauled, and disposed of at an approved disposal facility by a licensed hazardous waste hauler in accordance with applicable law and regulations. The contractor will obtain permits required for such disposal.8. Emergency spill containment and cleanup kits will be located at the work site. The contents of the kit will be appropriate to the type and quantities of chemical or goods stored at the work site.9. Handling and disposal of roadway materials will follow existing standards and specifications.10. These steps will be taken when refueling vehicles at construction sites&nbsp; &nbsp; &nbsp; a. &nbsp;Refueling will only occur when employees are present.&nbsp; &nbsp; &nbsp; b. &nbsp;Refueling will be conducted only with approved pumps, hoses, and nozzles.&nbsp; &nbsp; &nbsp; c. &nbsp;All disconnected hoses will be placed in containers to collect residual fuel from the hoses.&nbsp; &nbsp; &nbsp; d. &nbsp;Vehicle engines will be shut down during refueling.&nbsp; &nbsp; &nbsp; e. &nbsp;When refueling is completed, the service truck will leave the project site.\n\n(From 10/24/2024 Draft ITP): &nbsp;\n11.20 Hazardous Materials Management Plans.\nPermittee shall develop and implement a hazardous materials management plan (HMMP) prior to initiating Covered Activities. Multiple HMMPs [KM1]&nbsp;shall be prepared for site-specific Project construction activities to address hazardous materials present on site and known historic site contamination. A database on known historic instances of contamination and results of any field inspections regarding the presence of hazardous materials shall be maintained. The HMMPs shall provide detailed information on the types of hazardous materials used or stored at all sites; phone numbers of applicable city, county, state, and federal emergency response agencies; primary, secondary, and final cleanup procedures; emergency-response procedures in case of a spill of toxic chemicals or other hazardous waste (see Condition of Approval XX); a specific protocol for the proper handling and disposal of hazardous materials; and other applicable information that shall be implemented during project construction and enforced by the Permittee. The HMMPs shall address the following measures or practices: storage of fuel, oil, and other petroleum products at designated sites for hazardous materials; clear labeling, handling, and safety instructions, and emergency contact information on hazardous material containers; use or transfer of hazardous materials near wet or dry streams consistent with Fish and Game Code section 5650 and with permission from CDFW; Material Safety Data Sheets provided to all Project site personnel; prohibition of the accumulation and temporary storage of hazardous materials exceeding 90 days; segregation, containment, and removal of contaminated soils to the approved disposal site; site-specific emergency spill containment and spill kits at every work site; and handling and disposal of roadway materials. Permittee shall submit the HMMPs to CDFW as part of the appropriate Phase Authorization Package for review and written approval at a minimum 90 days prior to initiating Covered Activities.[KM2]&nbsp;\n\n\n\n&nbsp;[KM1]The first sentence implies one plan but this says multiple. Is the intent to have a separate plan for each phase package?\n\n\n\n\n&nbsp;[KM2]So the invasive species management plan needs to be reviewed and approved before the phase authorization is submitted but this plan gets submitted and reviewed as part of the phase authorization package. It is not really clear what is sequenced with the authorization package and what is part of the authorization package, or why that distinction was made."
          },
          "EC-3": {
            "code": "EC-3",
            "title": "Develop and Implement Spill Prevention, Containment, and Countermeasure Plans (FEIR)",
            "source": "EIR",
            "text": "DWR will require that each project contractor responsible for construction of a project facility or project develop and implement a spill prevention, containment, and countermeasure plan (SPCCP) for each project site (typically required to meet state and federal water quality requirements). Multiple SPCCPs will be prepared for project construction activities, each taking into account site-specific conditions. The SPCCPs will be developed in accordance with the regulatory requirements of Title 40 of the Code of Federal Regulations (CFR), Part 112, or the Spill Prevention, Control, and Countermeasure Rule under the Oil Pollution Act of 1990, which includes requirements for oil spill prevention, preparedness, and response to prevent oil discharges to navigable waters of the United States and adjoining shorelines. The rule requires the preparation, amendment, and implementation of site-specific SPCCPs to prevent and respond to oil discharges that could affect navigable waters. The SPCCPs will be developed and implemented to minimize effects from spills of oil or oil-containing products during project construction and operation. Each SPCC plan will address actions used to prevent spills in addition to specifying actions that will be taken should any spills occur, including emergency notification procedures. &nbsp;The SPCCPs will include the following measures and practices.&nbsp;\n\n&nbsp; &nbsp;Discharge prevention measures will include procedures for routine handling of products (e.g., loading, unloading, and facility transfers) (40 CFR &sect; 112.7(a)(3)(i)).2. &nbsp; &nbsp;Discharge or drainage controls will be implemented such as secondary containment around containers and other structures, equipment, and procedures for the control of a discharge (40 CFR &sect; 112.7(a)(3)(ii)).3. &nbsp; &nbsp;Countermeasures will be implemented for discharge discovery, response, and cleanup (both the facility&rsquo;s capability and those that might be required of a contractor) (40 CFR &sect; 112.7(a)(3)(iii)).4. &nbsp; &nbsp;Methods of disposal of recovered materials will comply with applicable legal requirements (40 CFR &sect;112.7(a)(3)(iv)).5. &nbsp; &nbsp;Personnel will be trained in emergency response and spill containment techniques, and will also be made aware of the pollution control laws, rules, and regulations applicable to their work.6. &nbsp; &nbsp;Petroleum products will be stored in non-leaking containers at impervious storage sites from which an accidental spill cannot escape.7. &nbsp; &nbsp;Absorbent pads, pillows, socks, booms, and other spill containment materials will be stored and maintained at the hazardous materials storage sites for use in the event of an accidental spill.&nbsp;8. &nbsp; &nbsp;Contaminated absorbent pads, pillows, socks, booms, and other spill containment materials will be placed in non-leaking sealed containers until transport to an appropriate disposal facility.9. &nbsp; &nbsp;When transferring oil or other hazardous materials from trucks to storage containers, absorbent pads, pillows, socks, booms or other spill containment material will be placed under the transfer area.10. &nbsp; &nbsp;Refueling of construction equipment will occur only in designated areas that will be a minimum of 150 feet from surface waters and other sensitive habitats, such as wetlands.11. &nbsp; &nbsp;Equipment used in direct contact with water will be inspected daily for oil, grease, and other petroleum products. All equipment must be cleaned of external petroleum products prior to beginning work where contact with water may occur to prevent the release of such products to surface waters.12. &nbsp; &nbsp;Oil-absorbent booms will be used when equipment is used in or immediately adjacent to waters.13. &nbsp; &nbsp;All reserve fuel supplies will be stored only within the confines of a designated staging area, to be located a minimum of 150 feet from surface waters and other sensitive habitats, such as wetlands.14. &nbsp; &nbsp;Fuel transfers will take place a minimum of 150 feet from surface waters and other sensitive habitats, such as wetlands, and absorbent pads will be placed under the fuel transfer operation.15. &nbsp; &nbsp;Staging areas will be designed to contain contaminants such as oil, grease, fuel, and other petroleum products so that should an accidental spill occur, they do not drain toward receiving waters or storm drain inlets.16. &nbsp; &nbsp;All stationary equipment will be staged in appropriate staging areas and positioned over drip pans.\n\n17. &nbsp; &nbsp;In the event of an accidental spill, personnel will identify and secure the source of the discharge and contain the discharge with sorbents, sandbags, or other material from spill kits and will contact appropriate regulatory authorities (e.g., National Response Center will be contacted if the spill threatens navigable waters of the United States or adjoining shorelines, as well as other appropriate response personnel).18. &nbsp; &nbsp;These steps will be taken when refueling vehicles at construction sites.&nbsp;a. &nbsp; &nbsp;Refueling will only occur when employees are present.b. &nbsp; &nbsp;Refueling will be conducted only with approved pumps, hoses, and nozzles.&nbsp;c. &nbsp; &nbsp;All disconnected hoses will be placed in containers to collect residual fuel from the hoses.d. &nbsp; &nbsp;Vehicle engines will be shut down during refueling.&nbsp;e. &nbsp; &nbsp;When refueling is completed, the service truck will leave the project site.&nbsp;\nMethods of cleanup may include the following.&nbsp;\n\n&nbsp; &nbsp;Physical methods for the cleanup of dry chemicals include the use of brooms, shovels, sweepers, or plows.2. &nbsp; &nbsp;Mechanical methods include, but may not be limited to, the use of vacuum cleaning systems and pumps.3. &nbsp; &nbsp;Chemical methods include the use of appropriate chemical agents such as sorbents, gels, and foams.\n\n&nbsp;\n(From 10/24/2024&nbsp; Draft ITP)\n11.21 Spill Prevention, Control, and Countermeasure Plans.\nPermittee shall ensure compliance with all construction stormwater permitting requirements and shall develop and implement a Spill Prevention, Control, and Countermeasure plan (SPCCP) at each project site to control short-term and long-term effects associated with construction-generated stormwater runoff. Each SPCCP shall address site-specific actions used to prevent spills and actions that will be taken should any spills occur, including emergency notification procedures. The SPCCPs shall be developed and implemented to minimize effects from spills of oil or oil-containing products (i.e., gasoline, diesel fuel, motor oil, hydraulic fluid, aviation fuel, oil-based paint, oil-based paint thinner, roofing tar, and petroleum-based solvents) during Project construction and operation.\n&nbsp;\nThe SPCCPs shall include, but not be limited to, the following: procedures for routine handling of products; discharge or drainage controls such as secondary containment and procedures for discharge control; countermeasures for discharge discovery, response, and cleanup; methods of disposal or recovered materials; personnel training in emergency response and spill containment techniques; storage of petroleum products in non-leaking containers at impervious storage sites from which an accidental spills cannot escape; storage of concrete, wash water, and other contaminants in watertight containment structures; storing and maintaining spill containment materials such as absorbent pads, pillows, socks, booms, and other spill containment materials in non-leaking sealed containers at the hazardous materials storage sites until transport to an appropriate disposal facility; using spills containment materials under transfer areas when transferring oil or other hazardous materials from trucks to storage containers; daily inspection of equipment for oil, grease, and other petroleum products if equipment is in contact with water; cleaning of external petroleum products off of equipment prior to its contact to water; use of oil-absorbent booms for equipment used in or adjacent to water; containment of contaminants in staging areas designed so that should an accidental spill occur, contaminants do not drain toward receiving waters or storm drain inlets; and staging of all stationary equipment in appropriate staging areas and positioned over drip pans.\n&nbsp;\nIn the event of an accidental spill, personnel shall identify and secure the source of the discharge and contain the discharge with sorbents, sandbags, or other material from spill kits and shall contact CDFW and other appropriate regulatory authorities within 24 hours. Permittee shall submit the SPCC plans to CDFW as part of the appropriate Phase Authorization Package for review and written approval at a minimum 90 days prior to initiating Covered Activities."
          },
          "EC-5": {
            "code": "EC-5",
            "title": "Develop and Implement a Fire Prevention and Control Plan (FEIR)",
            "source": "EIR",
            "text": "DWR will develop and implement a fire prevention and control plan in consultation with the appropriate fire suppression agencies to verify that the necessary fire prevention and response methods are included in the plan. The plan will include fire prevention and suppression measures as appropriate for different activities and will consider the policies and standards in the affected jurisdictions.\nAt a minimum, the following components, as applicable, will be included in the plan. If a component is not applicable to a specific activity, DWR or its contractor will explain in the plan why that component or a portion thereof is not included in the plan.&nbsp;\n\n&nbsp; &nbsp;If a fire should start, the appropriate fire protection agencies will be contacted immediately.2. &nbsp; &nbsp;Procedures and policies for controlling any fires that are on the work site, and other related fire prevention and control procedures developed in consultation with and fire protection agencies.3. &nbsp; &nbsp;Procedures for regular maintenance of safeguards installed on heat-producing equipment to prevent the accidental ignition of combustible materials.4. &nbsp; &nbsp;A list of all major potential fire hazards, proper handling and storage procedures for hazardous materials, potential ignition sources and their control, and the type of fire protection equipment necessary to control each potential major hazard.5. &nbsp; &nbsp;Smoking will be allowed only in areas designated for smoking, and these areas will be cleared of vegetation, or in enclosed vehicles. Cigarette butts are to be disposed of in car ashtrays or other approved disposal containers and dumped daily in a proper receptacle off the work site.6. &nbsp; &nbsp;The contractor will be responsible for maintaining appropriate fire suppression equipment at the work site including a water truck or fire truck with a water tank with a capacity of at least 3,000 gallons. Fire extinguishers, shovels, and other firefighting equipment will be available at work sites and on appropriate construction equipment. The contractor will be required to require that each construction vehicle on the work site will be equipped with a minimum 20-pound (or two 10-pound) fire extinguisher(s).7. &nbsp; &nbsp;At the work site, a sealed fire toolbox will be located at a point accessible in the event of fire. This fire toolbox will contain: one back-pack pump-type extinguisher filled with water, two axes, two McLeod fire tools, and shovels so that employees at the work site can be equipped to fight fire.8. &nbsp; &nbsp;Gasoline-powered construction equipment with catalytic converters will be equipped with shielding or other acceptable fire prevention features. Internal combustion engines will be equipped with spark arrestors.9. &nbsp; &nbsp;Welding sites will include fire prevention provisions.10. &nbsp; &nbsp;The contractor will maintain contact with local firefighting agencies throughout the fire season for updates on fire conditions, and such fire conditions will be communicated daily to the on-site employees of the contractor and subcontractors daily.\n\nIn addition to the plan, fire protection will conform to the State Fire Marshal requirements and will be in full compliance with Cal/OSHA standards for fire safety and prevention. Public road modifications will be designed per the county or state standards, which includes adequate widths for first responders. The project-only access roads would be designed with widths for large construction trucks, which would also be adequate for first responders and fire suppression equipment. Any fire hydrants will be located as deemed acceptable by the State Fire Marshal and will meet state government standards. Fire protection using water will be provided by a potable water system either from the nearest municipal clean water conveyance system or from a self-contained filtration and treatment system that takes water from an adjacent waterway or a site well or tank. &nbsp;"
          },
          "EC-6": {
            "code": "EC-6",
            "title": "Conduct Cultural Resources Awareness Training (FEIR)",
            "source": "EIR",
            "text": "Prior to the start of ground disturbance, a qualified DWR archaeologist will conduct a mandatory cultural resources awareness training for all personnel involved in ground-disturbing work about cultural resources sensitivity in the project footprint and cultural resources that could be encountered during work. Cultural resources awareness training will also be conducted for all operations and maintenance staff. Participants will be required to sign a form stating that they have received and understand the training. DWR will maintain the record of training and make it available to interested parties, including but not limited to State Historic Preservation Officer, the Advisory Council on Historic Preservation, local historical societies, and other interested parties such as local preservation and community organizations with a demonstrated interest in the resource, upon request. The project foreman will require that the new personnel brought onto the project receive the mandatory training before starting work.&nbsp;In general, trainings will include the following components.&nbsp;\n1. &nbsp; &nbsp;The need and legal requirements for resource avoidance and protection.&nbsp;2. &nbsp; &nbsp;Types of materials that could indicate the presence of an archaeological resource.&nbsp;3. &nbsp; &nbsp;Brief discussion of the cultural context for the area.4. &nbsp; &nbsp;Roles and responsibilities, including an explanation regarding the authority of archaeological monitors to stop work if needed.5. &nbsp; &nbsp;What to do when archaeological resources or human remains are encountered in work areas.6. &nbsp; &nbsp;Avoidance and minimization commitments.&nbsp;7. &nbsp; &nbsp;Consequences of violations of the laws and regulations protecting resources."
          },
          "EC-7": {
            "code": "EC-7",
            "title": "Off-Road Heavy-Duty Engines (FEIR)",
            "source": "EIR",
            "text": "Zero-Emission Equipment&nbsp;&nbsp;\n\n\nDWR will reinforce state priorities for zero-emission equipment (including generators) during construction and operation of the project. Zero-emission equipment (e.g., electric, hydrogen fuel cell) does not produce any emissions during operation from the tailpipe (e.g., electric, hydrogen fuel cell). Requirements for use of these technologies will follow the below phased approach that focuses on implementation feasibility that is described here.&nbsp;&nbsp;\n\n\n\n\nAt the start of each construction contract, prohibit use of fossil -fuel&ndash; powered axial fans, gantry cranes, light plants, and forklifts. All construction contractors must use zero-emission versions of these equipment types.&nbsp;\n\n\n\n\n\n\nBy 2030, require 10% percent zero-emission off-road equipment in all construction contracts, where feasible (i.e., equipment is commercially available, is cost-effective, and has earned a track -record forof reliability in real-world construction conditions).&nbsp;\n\n\n\n\n\n\nBy 2035, require 100% percent zero-emission off-road equipment in all construction contracts, where feasible (i.e., equipment is commercially available, is cost-effective, and has earned a track -record forof reliability in real-world construction conditions).&nbsp;&nbsp;\n\n\n\n\n\n\n\n\nAt the start of project operation and during project operations, require 100% percent zero-emission off-road equipment, where feasible (i.e., equipment is commercially available, is cost-effective, and has earned a track-record forof reliability in real-world construction conditions).DWR will&nbsp;support attainment of the performance standards by prioritizing contractors that operate zero-emission and electric off-road equipment, and by offering contract incentives for compliance. DWR will consider use of electric or hybrid-electric off-road equipment (including generators) over diesel counterparts to the extent that they become commercially available and earns a track-record for reliability in real-world construction conditions and become cost effective.&nbsp;\n\nDWR will support attainment of the performance standards by prioritizing contractors that operate zero-emission and electric off-road equipment and by offering contract incentives for compliance.\n\n\n\nDiesel Equipment&nbsp;\n\n\nDWR will require all off-road diesel engines greater than or equal to 25 horsepower&nbsp; relevant equipment to utilize use EPA- certified Tier 4 Final or more advanced engines. This mandate does not preclude use of engines that meeting certification standards more stringent than Tier 4 Final, if commercially available at the time of construction. A copy of each unit&rsquo;s certified tier specification, emissions rating, and any required California Air Resources Board (CARB) permit or air pollution control district operating permit will be made available to DWR at the time of mobilization of each piece of equipment. Each project contractor responsible for construction of a project facility will keep a written record (supported by equipment-hour meters where available) of equipment usage during project construction and maintenance for each piece of equipment. Each contractor will also provide DWR with monthly and annual reports of equipment operating hours documenting compliance. DWR will consider use of electric or hybrid-electric off-road equipment (including generators) over diesel counterparts to the extent that they become commercially available and earns a track-record for reliability in real-world construction conditions and become cost effective.&nbsp;&nbsp;\n\n\nAll off-road diesel equipment with engines less than 25 horsepower (i.e., non&ndash;Tier 4) will be required to use renewable diesel fuel that meets the most recent ASTM D975 specification for ultra-low sulfur diesel and has a carbon intensity no greater than 50% of diesel with the lowest carbon intensity among petroleum fuels sold in California. Each project contractor responsible for construction of a project facility will provide DWR with monthly and annual reports of renewable diesel purchase records and equipment and vehicle fuel consumption. Pursuant to the In-Use Off-Road Diesel-Fueled Fleets Regulation (In-Use Regulation), contractors will also be required to submit to CARB an affirmation that the fleet complied with the renewable diesel mandate in each year that annual reporting is required under the In-Use Regulation. &nbsp;&nbsp;&nbsp;\n\n\n\nAll off-road diesel equipment will be required to minimize idling time either by&nbsp; shutting equipment off when not in use or reducing the time of idling time to 5 minutes ([13 Cal.ifornia Code of Regulations [CCR],. &sect; Title 13, sections 2449(d)(32) and 2485]). Each project contractor responsible for construction of a project facility must provide clear signage that posts this requirement for workers at the entrances to the site.&nbsp;"
          },
          "EC-8": {
            "code": "EC-8",
            "title": "On-Road Haul Trucks (FEIR)",
            "source": "EIR",
            "text": "Zero-Emission Vehicles&nbsp;&nbsp;\n\n\nDWR will reinforce state priorities for zero-emission vehicles (ZEVs) during construction and operation of the project. A ZEV (e.g., electric, hydrogen fuel cell) does not produce any emissions during operation from the tailpipe. Requirements for use of these technologies will follow the&nbsp;phased approach that focuses on implementation feasibility that is described here.&nbsp;&nbsp;\n\n\n\n\nAt the start of each construction contract, require 100% light-duty ZEVs for on-site contractor travel, where feasible (i.e., vehicle is commercially available, is cost-effective, and has earned a track-record of reliability in real-world construction conditions). On-site light-duty vehicles are defined to include automobiles and pick-up trucks that will exclusively operate within the construction right-of-way for at least 6 months.&nbsp;\n\n\n\n\n\n\n\n\nBy 2030, require 50%&nbsp;medium- and heavy-duty on-site ZEVs in all construction contracts, where feasible (i.e., vehicle is commercially available, is cost-effective, and has earned a track-record of reliability in real-world construction conditions). On-site vehicles are defined to include utility trucks, service trucks, water trucks, and dump trucks that will exclusively operate within the construction right-of-way for at least 6 months.&nbsp;\n\n\n\n\n\n\nBy 2035, require 75%&nbsp;medium- and heavy-duty on-site ZEVs in all construction contracts. On-site vehicles are defined to include utility trucks, service trucks, water trucks, and dump trucks that will exclusively operate within the construction right-of-way for at least 6 months.&nbsp;\n\n\n\n\n\n\nBy 2035, require 50% ZEVs for all off-site short-haul and drayage (i.e., within 10 miles of a project site), where feasible (i.e., vehicle is commercially available, is cost-effective, and has earned a track-record of reliability in real-world construction conditions).&nbsp;&nbsp;\n\n\n\n\n\n\nAt the start of and during project operation, require 100% ZEVs for all vehicle types, where feasible.&nbsp;&nbsp;\n\n\n\n\nDWR will support attainment of the performance standards by prioritizing contractors that operate ZEVs and electric on-road vehicles, and by offering contract incentives for compliance. &nbsp;\n\n\n\n\nDiesel Vehicles&nbsp;&nbsp;\n\n\nDWR will require all contractors to use diesel trucks that have model year engines manufactured or retrofitted ideally within the past 5 years from when the vehicles are brought to the individual construction or maintenance sites, but no more than 8 years from overall project groundbreaking. Each contractor will provide DWR with monthly and annual reports documenting compliance. All on-road diesel vehicles will be required to comply with California idling regulations (13 Cal. Code Regs., &sect;&sect;2485 and 2480).&nbsp;&nbsp;"
          },
          "EC-11": {
            "code": "EC-11",
            "title": "Fugitive Dust Control (FEIR)",
            "source": "EIR",
            "text": "DWR will require all contractors employ the following measures to minimize and control fugitive dust emissions.&nbsp;\n\n&nbsp; &nbsp;Water exposed soil during active construction with adequate frequency for continued moist soil and to prevent visible dust from leaving work areas. Frequency of watering will be increased during especially dry or windy periods or in areas with high construction activity. Active work areas include (but are not limited to), graded areas, excavation areas, and demolition sites.&nbsp;2. &nbsp; &nbsp;Gravel and cover all on-site vehicle travel routes with chip seal, or apply dust suppressants (e.g., Soil-Sement, PennzSuppress) on all ungraveled travel routes. On-site vehicle travel routes include (but are not limited to) staging areas, access roads, and haul areas.3. &nbsp; &nbsp;Apply and maintain an organic biopolymer tackifier on all stockpiles during active use.4. &nbsp; &nbsp;Cover or maintain at least 2 feet of freeboard space on haul trucks and rail cars transporting soil, sand, or other loose material on the site. Haul trucks and rail cars transporting soil, sand, or other loose material that will be traveling along freeways, major roadways, or railways will be covered.5. &nbsp; &nbsp;If practicable, install wind breaks (e.g., plant trees, solid fencing) on the average dominant windward side(s) of construction areas. For purposes of implementation, chain-link fencing with added landscape mesh fabric adequately qualifies as solid fencing.&nbsp;6. &nbsp; &nbsp;Enclose all mechanical dryers and outdoor conveyors.&nbsp;7. &nbsp; &nbsp;Plant vegetative ground cover (native grass/plant seed) in disturbed areas(including stockpiles) as soon as reasonable after construction is completed. Water appropriately until vegetation is established.8. &nbsp; &nbsp;Promptly finish and/or protect and maintain all disturbed areas in a manner to control fugitive dust. Mulch, dust palliative, soil binders, or other reasonable measures will be used in all inactive areas.9. &nbsp; &nbsp;Establish and enforce a 15-mph speed limit for vehicles driving on unpaved portions of project construction sites.10. &nbsp; &nbsp;Use wet power vacuum street sweepers to remove any visible trackout mud or dirt onto adjacent public roads at least once a day. Use of dry power sweeping is prohibited.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;11. &nbsp; &nbsp;Install rattle plates and tire wheel wash facilities to stabilize construction entrances and exits, where not prohibited by site conditions.&nbsp;12. &nbsp; &nbsp;Post a publicly visible sign with the telephone number and person to contact at the lead agency regarding dust complaints. This person will respond and take corrective action within 48 hours. The phone number of the air quality management district will also be visible to confirm compliance."
          },
          "EC-13": {
            "code": "EC-13",
            "title": "DWR Best Management Practices to Reduce GHG Emissions (FEIR)",
            "source": "EIR",
            "text": "DWR will require all construction contractors to implement the following applicable greenhouse gas (GHG) BMPs, which are outlined in DWR&rsquo;s Climate Action Plan Phase I: Greenhouse Gas Emissions Reduction Plan Update 2020 (California Department of Water Resources 2020).&nbsp;\nPreconstruction and Final Design BMPs &nbsp;Preconstruction and final design BMPs are designed to ensure that individual projects are evaluated, and their unique characteristics taken into consideration when determining if specific equipment, procedures, or material requirements are feasible and efficacious for reducing GHG emissions from the project.&nbsp;\n\n&nbsp; &nbsp;BMP 1. Evaluate project characteristics, including location, project work flow, site conditions, and equipment performance requirements, to determine whether the specifications for the use of equipment with repowered engines, electric drive trains, or other high-efficiency technologies are appropriate and feasible for the project or specific elements of the project.2. &nbsp; &nbsp;BMP 2. Evaluate the feasibility and efficacy of performing on-site material hauling with trucks equipped with onroad engines.3. &nbsp; &nbsp;BMP 3. Confirm that all feasible avenues have been explored for providing an electrical service drop to the construction site for temporary construction power. When generators must be used, use alternative fuels, such as propane, or solar power, to power generators to the maximum extent feasible.4. &nbsp; &nbsp;BMP 4. Evaluate the performance requirements for concrete used on the project and specify concrete mix designs that minimize GHG emissions from cement production and curing while preserving all required performance characteristics.5. &nbsp; &nbsp;BMP 5. Limit deliveries of materials and equipment to the site to off peak traffic congestion hours.\n\nConstruction BMPs&nbsp;Construction BMPs apply to all construction and maintenance projects that DWR completes or for which DWR issues contracts. All projects are expected to implement all Construction BMPs unless a variance is granted by the Division of Engineering Chief, Division of Operation and Maintenance Chief, or Division of Flood Management Chief, as applicable, and the variance is approved by the DWR CEQA Climate Change Committee. Variances will be granted when specific project conditions or characteristics make the BMP infeasible and where omitting the BMP will not be detrimental to the project&rsquo;s consistency with the Climate Action Plan Phase I: Greenhouse Gas Emissions Reduction Plan Update 2020 (California Department of Water Resources 2020).\n1. BMP 7. Minimize idling time by requiring that equipment be shut down after five minutes when not in use (as required by the State airborne toxics control measure [13 CCR Section 2485]). Provide clear signage that posts this requirement for workers at the entrances to the site and provide a plan for the enforcement of this requirement.&nbsp;\n2. BMP 8. Maintain all construction equipment in proper working condition and perform all preventative maintenance. Required maintenance includes compliance with all manufacturer&rsquo;s recommendations, proper upkeep and replacement of filters and mufflers, and maintenance of all engine and emissions systems in proper operating condition. Maintenance schedules will be detailed in an Air Quality Control Plan prior to commencement of construction.3. BMP 9. Implement tire inflation program on jobsite to confirm that equipment tires are correctly inflated. Check tire inflation when equipment arrives on site and every two weeks for equipment that remains on site. Check vehicles used for hauling materials off site weekly for correct tire inflation. Procedures for the tire inflation program will be documented in an Air Quality Management Plan prior to commencement of construction.4. BMP 10. Develop a project specific ride share program to encourage carpools, shuttle vans, transit passes and/or secure bicycle parking for construction worker commutes.5. BMP 11. Reduce electricity use in temporary construction offices by using high efficiency lighting and requiring that heating and cooling units be Energy Star compliant. Require that all contractors develop and implement procedures for turning off computers, lights, air conditioners, heaters, and other equipment each day at close of business.6. BMP 12. For deliveries to project sites where the haul distance exceeds 100 miles and a heavy-duty class 7 or class 8 semi-truck or 53-foot or longer box type trailer is used for hauling, a SmartWay24 certified truck will be used.7. BMP 13. Minimize the amount of cement in concrete by specifying higher levels of cementitious material alternatives, larger aggregate, longer final set times, or lower maximum strength where appropriate.8. BMP 14. Develop a project-specific construction debris recycling and diversion program to achieve a documented 50% diversion of construction waste.9. BMP 15. Evaluate the feasibility of restrictions for material hauling on public roadways to off-peak traffic congestion hours. During construction scheduling and execution, minimize, to the extent possible, uses of public roadways that are not designated as construction haul routes during peak commuting hours.\n24 The U.S. Environmental Protection Agency (EPA) has developed the SmartWay truck and trailer certification program to set voluntary standards for trucks and trailers that exhibit the highest fuel efficiency and emissions reductions. These tractors and trailers are outfitted at point of sale or retrofitted with equipment that significantly reduces fuel use and emissions including idle reduction technologies, improved aerodynamics, automatic tire inflation systems, advanced lubricants, advanced powertrain technologies, and low rolling resistance tires. EPA Smartway (https://www.epa.gov/smartway)."
          },
          "EC-14": {
            "code": "EC-14",
            "title": "Construction Best Management Practices for Biological Resources (FEIR)",
            "source": "EIR",
            "text": "DWR will require all construction and restoration activities in and adjacent to suitable habitat for special-status species and sensitive natural communities implement BMPs and have construction monitored by qualified biologists (experience with the resources and environmental compliance training and monitoring). Depending on the resource of concern and construction timing, construction activities and areas will be monitored for compliance with water quality regulations (SWPPP monitor, see EC-4b) and with resource-specific mitigation measures developed for sensitive biological resources&nbsp;(biological monitoring).&nbsp;\nBefore initiating construction, DWR or its contractor, with DWR approval, will prepare a site or activity-specific environmental compliance monitoring plan to monitor, enforce and document measures to protect special-status fish, wildlife, plant species, and their habitats, designated critical habitat, and sensitive natural communities. The plan will include the following elements.&nbsp;\n\nReference to or inclusion of the SWPPP prepared under the CGP, where one is needed. (See EC-4b, Develop and Implement Stormwater Pollution and Prevention Plans.)\nSummaries or copies of planning and preconstruction surveys (if applicable) for natural communities and special-status species.\nDescription of mitigation measures to be implemented, including a description of site or activity-specific BMPs or additional measures not otherwise included in the project.\nDescriptions of monitoring parameters (e.g., turbidity), including the specific activities to be monitored (e.g., dredging, grading activities) and monitoring frequency and duration as well as parameters and reporting criteria (e.g., turbidity is not to exceed 10 NTUs above background. Exceedances will be reported and the contractor must identify and correct the cause.).\nDescription of roles and responsibilities of the monitors and protocols for notifying CDFW, NMFS, and USFWS, if needed.\nA daily monitoring log prepared by the monitor, which documents the day&rsquo;s construction activities, notes any problems identified and solutions implemented to rectify those problems, and document notifications of the construction superintendent and/or the fish and wildlife agencies regarding any exceedances of&nbsp;specific parameters (i.e., turbidity) or observations of special-status species. The monitoring log will also document construction start/end times, weather and general site conditions, and any other relevant information.\n\nThe following measures will be Implemented prior to and during construction activities and field investigations for the protection of special-status fish, wildlife and plant species and their habitats, designated critical habitats, and sensitive natural communities. Additional measures may be developed for site-specific conditions or specific biological resources during the review and preconstruction planning of individual work areas.\n&nbsp;\n\nAll in-water construction activities where special-status species are known or have a potential to occur will be conducted during the allowable in-water work windows established by the USFWS, NMFS, and CDFW for the protection of special-status fish or wildlife species. With regard to impact pile driving, work windows for the north Delta intakes may be lengthened subject to NMFS, CDFW, and USFWS approval based on success of bubble curtain or other noise attenuation methods (see Mitigation Measure AQUA-1a: Develop and Implement an Underwater Sound Control and Abatement Plan in Chapter 12, Fish and Aquatic Resources) and realtime monitoring for fish presence. In-water activities associated with mobilization and demobilization (e.g., initial movement of materials to construction sites) are not subject to the work windows. Any in-water work may occur within a cofferdam, or behind the sheet pile training walls, regardless of the timing of in-water work windows.25 Any extension/reduction of in-water work windows would focus on half-month increments.&nbsp;\n\n\nGeotechnical exploration: August 1 to October 31. &nbsp;\nNorth Delta intakes: June 1 to October 31, except that in-water impact pile driving is unlimited during the period June 15 to September 15, and in-water impact pile driving is subject to the conditions noted above for the periods from June 1 to June 15 and September 15 to October 31.&nbsp;\nModified bridges: June 1 to October 31, except that in-water impact pile driving is unlimited during the period June 15 to September 15.&nbsp;\nCalifornia Aqueduct (between Skinner Fish Facility, Banks Pumping Plant, and Bethany Reservoir) and Delta-Mendota Canal (between Tracy Fish Collection Facility and Jones Pumping Plant): January 1 through December 31.&nbsp;\nWork in the Delta except for the north Delta intakes, modified bridges, and California Aqueduct and Delta-Mendota Canal: August 1 to October 31. &nbsp;\n\n\nQualified biologists will monitor construction activities in areas identified during the planning stages and species/habitat surveys as having special-status fish, wildlife, and plant species or their habitats, designated critical habitat, and sensitive natural communities. The intent of the biological monitoring is to confirm that specific measures that have been integrated into the project design and permit requirements are being implemented correctly during construction and are working appropriately and as intended for the protection of special-status species, natural communities, and the environment in general.\nBiological monitors will be professional biologists selected for their knowledge of the special-status species and natural communities that may be affected by construction activities. The qualifications of the biologist(s) will be presented to the fish and wildlife agencies for review and written approval, consistent with permits and authorizations. If a special-status species is observed in an active work area, the biological monitors will immediately provide the construction manager and contractor with its location and recommendations to address the species&rsquo; presence and steps necessary to ensure the protection of the species consistent with permits and authorizations.\nDuring construction, the non-disturbance buffers described under the special-status species&rsquo; mitigation measures in Chapter 13, Terrestrial Biological Resources, of this Final EIR, will be established and maintained as necessary. A qualified biologist will monitor the site consistent with the requirements described for special-status species to enforce buffers and non-disturbance of sensitive resources.\nActive construction and staging areas will be delineated with high-visibility temporary fencing at least 4 feet in height, flagging, or other barrier to prevent encroachment of construction personnel and equipment outside the defined project footprint. The location of fencing will be included in construction plans and/or EC sheets. Such fencing will be inspected and maintained daily by the construction foreman until completion of the project. Status of the fencing will also be verified and documented by the biological monitor. The fencing or flagging will be removed from areas after all construction activities have ceased and equipment is removed. No project-related construction activities will occur outside the delineated project construction areas.\nProject-related vehicles will observe a maximum speed limit of 15 miles per hour on unpaved non-public construction access roads and in construction sites where it is safe to do so. Paved, non-public construction access roads will observe a maximum speed limit of 30 miles per hour. Speeds limits will be posted in both directions and will be enforced. Signage would be provided for extra caution to be used on cool days when giant garter snake may be basking on roads and on rainy nights when California tiger salamander and California red-legged frog are most likely to be moving between breeding and upland habitats. Vehicles will observe a nighttime speed limit of 10 miles per hour in construction sites within the Southern Complex and Bethany Complex to avoid potential vehicle strikes of California red-legged frog, California tiger salamander, and San Joaquin kit fox.\nAll ingress/egress at the project site will be restricted to those routes identified in the project plans and description. Cross-country access routes will be clearly marked in the field with appropriate flagging and signs.\n&nbsp;All vehicle parking will be restricted to established areas, existing roads, or other suitable areas.\nTo avoid attracting predators, all food-related trash items such as wrappers, cans, bottles, and food scraps will be disposed of in enclosed containers and trash will be removed and disposed of at an appropriate facility at least once a week from the construction or project site. All contracts with contractors will include language reminding them of the obligations to abide by all laws related to litter. These obligations will be applicable both within work areas and while traveling along public roads within the project area. Vehicles carrying trash will be required to have loads covered and secured to prevent trash and debris from falling onto roads and adjacent properties.\nTo avoid injury or death to wildlife, no firearms will be allowed on the project site except for those carried by authorized security personnel or local, state, or federal law enforcement official.&nbsp;\nTo prevent harassment, injury, or mortality of sensitive wildlife by dogs or cats, no pets will be permitted in the active construction area.\nTo prevent inadvertent entrapment of special-status wildlife during construction in areas that may be occupied by wildlife at risk for entrapment, all excavated, steep-walled holes or trenches more than 6 inches deep, with the exception of shaft excavation, will be covered at the close of each working day with plywood or similar material or will be provided with one or more escape ramps constructed of earthfill or wooden planks at no more than a 30&deg; angle. Shaft excavation sites are exempt from this measure because it would not be feasible to place a ramp into a vertical shaft. Rather than a vertical ramp inside the shaft, suitable barriers, approved by a qualified biologist prior to construction at the shaft site (e.g. chain link fence for large wildlife such as foxes and appropriate exclusion barriers for amphibians and reptiles), will be placed around the shaft opening to prohibit entry of wildlife into the shaft. Before such holes or trenches are filled, they will be thoroughly inspected for trapped animals.\nIf a special-status species is encountered during construction work, including dewatering, generally construction activities should be diverted away from the animal or, depending upon the conditions and specification in the relevant environmental documents and permits, work will cease until it moves out of the work area on its own or is relocated by a qualified biologist, following the species-specific mitigation measures appearing in the environmental documents and relevant permits. The monitor&rsquo;s authority to stop work will depend on the species encountered and the specific requirement of the relevant environmental documents and permits.\nCapture and relocation of trapped or injured special-status wildlife can only be performed by personnel with appropriate USFWS and CDFW handling approvals. Any sightings and any incidental take will be reported to CDFW and USFWS via email within 1 working day of the discovery. A follow-up report will be sent to these agencies, including dates, locations, habitat description, and any corrective measures taken to protect special-status species encountered. For each special-status species encountered, the biologist will submit a completed CNDDB field survey form (or equivalent) to CDFW no more than 90 days after completing the last field visit to the project site.\nPlastic monofilament netting or similar material will not be used for erosion control, because smaller wildlife may become entangled or trapped in it. Acceptable substitutes include coconut coir matting, burlap-wrapped straw wattles, or tackified hydroseeding compounds. This limitation will be communicated to the contractor through specifications or special provisions included in the construction bid solicitation package.\nWildlife, including special-status wildlife and their predators, can be attracted to den-like structures such as debris piles or pipes and may enter stored pipes and become trapped or injured. All pipes and culverts stored in the open will have their ends capped. Debris piles should be kept to a minimum and removed regularly. All construction, construction equipment, or construction debris left overnight in areas that may be occupied by wildlife that could occupy such structures will be inspected by the biological monitor prior to being used for construction. Such inspections will occur at the beginning of each day&rsquo;s activities, for those materials to be used or moved that day.\nCDFW, NMFS and/or USFWS will be notified within 1 working day of the discovery of, injury to, or mortality of a special-status species that results from project-related construction activities or is observed at the project site. Notification will include the date, time, and location of the incident or of the discovery of an individual special-status species that is dead or injured. For a special-status species that is injured or killed, general information on the type or extent of injury or likely cause of death will be included. The location of the incident will be recorded using a GPS and the coordinates will be made available upon requests by CDFW, NMFS and/or USFWS. The biologist is encouraged to include any other pertinent information in the notification. All observations of special-status species will be reported to the California Natural Diversity Database.\nRodenticides and herbicides will be used in accordance with the manufacturer-recommended uses and applications and in such a manner as to prevent primary or secondary poisoning of special-status fish, wildlife, and plant species and depletion of prey populations upon which they depend. Broadcast baiting will be avoided on all project-related and mitigation lands. Rodenticides will not be used on compensatory mitigation lands. All uses of such compounds will observe label and other restrictions mandated by EPA, the California Department of Pesticide Regulation, and other appropriate state and federal regulations, as well as additional project-related restrictions imposed by USFWS, NMFS and/or CDFW. If rodent control must be conducted in San Joaquin kit fox habitat, zinc phosphide should be used because of its proven lower risk to kit fox. Use of pesticides may be limited in other species-specific instances as well. In addition, the method of rodent control will comply with those discussed in the 4(d) rule published in the final listing rule for California tiger salamander (69 Federal Register [FR] 47211&ndash;47248).&nbsp;\nThe most recent available standard methods for species capture and handling, as well as species specific authorizations, will be used to capture and handle special-status fish or wildlife species. A professional biologist, with appropriate USFWS and CDFW handling approvals, will be responsible for and direct any efforts to capture and handle special-status species. Any person who captures and handles special-status species will ensure their hands are free of soaps, oils, creams, lotions, insect repellents, solvents or other potentially harmful chemicals and if not single use, nitrile or other hypo-allergenic gloves (non-latex) will be used for handling special-status fish or wildlife. To avoid transferring diseases or pathogens between aquatic habitats during the course of surveys or the capture and handling of special-status fish or wildlife species, all species captured and handled will be released in a safe, aquatic environment as close to the point of capture as possible. When capturing and handing special-status amphibians, the biologists will follow the Declining Amphibian Population Task Force&rsquo;s Fieldwork Code of Practice (U.S. Fish and Wildlife Service n.d.) or the most current applicable guidance. While in captivity, individual amphibians will be kept in a cool, moist, aerated environment such as a dark (e.g., green or brown) bucket containing a damp sponge. Containers used for holding or transporting these species will be sanitized and will not contain any standing water, unless transporting larvae or fish species.\nThe qualified biologist(s) will maintain monitoring records that include (1) the beginning and ending time of each day&rsquo;s monitoring effort; (2) a statement identifying the species encountered, including the time and location of the observation; (3) the time the specimen was identified and by whom and its condition; (4) the capture and release locations of each individual; (5) photographs and measurements of each individual; and (6) a description of any actions taken. The biologist(s) will maintain complete records in their possession while conducting monitoring activities and will immediately provide records to USFWS, CDFW, and NMFS upon request. If requested, all monitoring records will be provided to agencies according to the reporting requirements of the relevant permits.\nPermanent and temporary construction disturbances and other types of ongoing project-related disturbance activities in suitable habitat for special-status species will be minimized by adhering to the following activities. Project designs will limit or cluster permanent project features to the smallest area possible while still permitting achievement of project goals. To minimize temporary disturbances, all project-related vehicle traffic and material storage will be restricted to established and/or designated ingress/egress points, construction areas, and other designated staging/storage areas. These areas will also be included in preconstruction surveys and, to the extent possible, will be established in locations disturbed by previous activities to prevent further effects.\nGeotechnical investigations taking place on land over tunnel sections where there will be no surface disturbance during construction will avoid citing test trenches, CPTs, and borings in aquatic features, to the extent possible. This measure would not apply to the West Tracy Fault studies because these investigations need to take place along the fault alignment to gather the necessary information to support future designs.&nbsp;\nTemporarily affected areas will be restored within 1 year to their pre-project conditions, including grade and hydrology. Areas to be restored to grassland will be reseeded with a non-invasive native mix of grasses and flowering forbs. Revegetation will take place during the appropriate time of year for the species being planted. A vegetation restoration plan will be prepared to facilitate revegetation of the temporary disturbance footprints on-site for each of the covered species habitats. DWR shall ensure that the vegetation restoration plan is successfully implemented to restore covered species habitat. Where there are temporary impacts to potentially suitable but unoccupied Mason&rsquo;s lilaeopsis (Lilaeopsis masonii) habitat, the vegetation restoration plan will require post-disturbance grading to elevations and hydrology suitable for Mason&rsquo;s lilaeopsis.\nAll equipment used for construction and habitat creation, enhancement, and management will be cleaned and inspected by a qualified biologist for terrestrial invasive plant and animal species prior to entering work areas and before moving between work areas.\nEquipment to be used in aquatic habitats will be thoroughly cleaned and inspected for aquatic invasive plant propagules and animal species before entering aquatic habitats.\n\nDWR will also develop an invasive plant species management and control plan prior to construction for each construction site. The plan will ensure that invasive plant species and populations are kept below preconstruction abundance and distribution levels and will be developed in consultation with CDFW and local experts (e.g., California Invasive Plant Council). The invasive plant species management plan will include the following elements.&nbsp;\n\nDocumentation of preconstruction conditions.\nAnnual monitoring to document percent cover of native and nonnative invasive plant species.\nPreparation of an annual report that includes the type, location, and quantity of the invasive plant species; the percent cover of invasive plant species for (i) the year prior to preconstruction, (ii) the current monitoring year, and (iii) any prior monitoring years; and a description of any management problems and remedial actions taken. Annual reports will be provided to CDFW on request.\nGuidance provided by the California Invasive Plant Council (2012) for weed mapping field protocols and treatment plans, with particular attention given to species rated as high-level invasives with a negative ecological impact in California (California Invasive Plant Council 2006).\nInvasive plant species management and control techniques employed where necessary. For terrestrial species, these techniques include hand or mechanical removal, chemical treatment, and targeted livestock grazing for terrestrial species management; for aquatic species, these techniques include hand or mechanical removal and chemical treatment. Only chemicals approved for use for such purposes in California may be employed in any control action.\n\n25 There is no impact pile driving proposed within cofferdams or behind training walls.\n&nbsp;"
          },
          "EC-18": {
            "code": "EC-18",
            "title": "Minimize Construction-Related Disturbances to Delta Community Events and Festivals (FEIR)",
            "source": "EIR",
            "text": "DWR will require the construction contractor coordinate with the Ombudsman to identify Delta community events and festivals that could be disturbed by construction activity (see Sources of Contributions to the Delta Region Economy, in Chapter 17, Socioeconomics and Table 16-5, Annual Community-Based Delta Recreation Events, in Chapter 16, Recreation). In coordination with the Ombudsman, the contractor will prepare a site or activity-specific plan to minimize and avoid construction-related disturbances, such as noise and traffic, where feasible. Specific actions could include limiting, re-routing, or avoiding truck hauling during festivals and events and developing an event specific traffic management plan to address traffic congestion. In addition, depending on the location of the event relative to the area of construction at the time, reduced construction-hours may be implemented and/or other avoidance measures (e.g., additional screening or fencing) to limit exposure of festival attendees by construction activities. &nbsp;"
          },
          "NOI-1": {
            "code": "NOI-1",
            "title": "Develop and Implement a Noise Control Plan (FEIR)",
            "source": "EIR",
            "text": "DWR and project contractors will develop and implement a noise control plan consisting of pre-construction actions, sound-level monitoring, best noise control practices, and noise barriers constructed in locations where sound levels from construction are anticipated to exceed daytime or nighttime noise level criteria. The frequency and duration of construction noise are also considered as factors in the implementation of these measures.\nPre-construction Actions\nFuture investigations test pile sound-level monitoring. Prior to construction, as a part of field investigations, pile testing would be done in the vicinity of one of the future intake locations where ground conditions are similar to intake areas (see discussion under Impact NOI-1). During pile testing, sound-level monitoring would be conducted to measure source sound levels from in-water pile driving. Noise modeling will be updated based on result of test pile sound-level monitoring.14 Updated sound-level modeling will be used to determine where impacts would occur to receptors due to pile driving, to update the construction noise analysis for all facilities, based on daytime and nighttime noise level criteria described in Section 24.3.2, Thresholds of Significance.\nSound Insulation Program.\nDWR will coordinate a program to offer sound insulation to property owners of residences and businesses where sound levels during construction of project facilities are predicted to exceed daytime or nighttime noise level criteria for a specified duration, notwithstanding other noise mitigation measures described below. The program would consist of, but would not be limited to, installation of dual pane windows, new or improved exterior doors, and new HVAC systems for qualifying homes.15 Updated modeling will identify locations of sensitive receptors that would qualify for sound insulation.16 The following two categories of residences would be eligible.\n\nResidences where construction would exceed the daytime criterion of 60 dBA 1-hour Leq for more than 12 months.\nResidences where night work would exceed the nighttime criterion of 50 dBA 1-hour Leq for more than 21 days.\n\nReplacement or acoustical treatment of windows and doors can result in a noise reduction of 5 dB or more in interior rooms, depending on condition of existing construction. New HVAC systems would provide regulated internal temperatures of residential buildings, allowing for inhabitants to close their windows. To reduce the level of impact due to construction noise, this measure would require voluntary participation of all property owners and occupants of residences affected by project-related construction noise. The sound insulation program would continue to be available for property owners to opt in after facility construction begins.\nSound-Level Monitoring\nTo address additional noise concerns during construction, SLMs will be installed at locations outside construction work areas to collect sound-level data continuously during long-term buildout of facilities (Intakes A, B and C, Twin Cities, and Bethany). SLMs will be located as near as possible to a location equidistant from the construction boundary to the nearest sensitive receptor, at a location where property access for this purpose is allowed. Sound-level data collected at each site will be used to verify compliance with daytime and nighttime noise limits. All SLMs will be programmed to run continuously and have the capability to access data remotely, so that data reviews and compliance reporting can be done on a weekly basis.\nA daytime exceedance would occur if on-site equipment or truck noise during daytime hours (7:00 a.m. to 10:00 p.m.) is measured to exceed a daily average of 60 dBA 1-hour Leq for a period of more than 3 days in any 14-day period, or a daily average of 70 dBA 1-hour Leq for a period of more than 1 day in any 14-day period. A nighttime exceedance would occur if on-site equipment or truck noise during nighttime hours (10:00 p.m. to 7:00 a.m.) is measured to exceed a daily average of 50 dBA 1-hour Leq for a period of more than 3 days in any 14-day period.\nIn the event of an exceedance, DWR will contact affected residents to offer short-term (or long-term, if preferred) relocation assistance and/or measures stated above for the duration of the time construction is expected to exceed the specified levels. To reduce the significance of Impact NOI-1 due to construction noise, this measure would require voluntary participation of all property owners of residences affected by project-related construction noise.\nBest Noise Control Practices\n\nConstruction hours. Construction activities will be restricted to certain hours of the day.\n\no&nbsp;&nbsp; Pile driving will be limited to the hours between 7:00 a.m. and 7:00 p.m.\no&nbsp;&nbsp; Construction will not occur during nighttime hours (10:00 p.m. to 7:00 p.m.), except for concrete pours, which, when they occur, will be done on a 24-hour basis as required at each new facility.17\no&nbsp;&nbsp; Off-site haul truck trips on local roads will be limited to the hours between 7:00 a.m. and 7:00 p.m., except for 24-hour concrete deliveries during continuous pours.\no&nbsp;&nbsp; Where workplace safety standards allow, dedicated backup monitors will be used instead of backup beepers on heavy equipment between 10:00 p.m. and 7:00 a.m.\n\nNoise shrouds for pile drivers. Shrouds will be used to reduce noise from pile driving. A shroud or noise blanket of sufficient mass installed on pile-driver scaffolding is effective as a noise-reduction method for noise from impact hammers or vibratory pile drivers. A noise blanket has been shown to reduce pile hammer noise by 8 to 23 dBA (Teachout and Cushman 2005:8; Washington State Department of Transportation 2018:7-13).\nImplementation of Quiet Zones around work areas. Construction work areas will include signage indicating areas that will be operated as &ldquo;Quiet Zones.&rdquo; These signs will be located within areas where residences are more likely to be affected by noise from heavy equipment or trucks. Quiet Zones will limit truck idling time and require shut down of equipment (no idling). The zone will end at a distance approximately 700 feet from the nearest residence.18\nInstallation of enclosures around noise-generating equipment. If there are one or more dominant sources of noise in fixed locations where enclosures make a noticeable difference in overall ambient levels, then the use of this measure will be appropriate. This measure will substantially reduce levels from a single piece of equipment in a fixed location, such as a generator or ventilation fan. The achievable amount of noise reduction relative to a receptor will vary depending on the enclosure type and the location of equipment. For a given piece of equipment, sound reductions from an enclosure or silencer will typically be in the range of 8 to 25 dBA.\n\nInstallation of Temporary Sound Barriers at Work Areas\nIn the event of an exceedance during sound-level monitoring as defined above, a temporary sound barrier will be used to reduce noise from work areas where it is determined that use of barriers would be effective to reduce noise levels at sensitive receptor locations. A barrier of sufficient dimensions can effectively reduce noise from heavy equipment activity occurring at a construction site to levels below daytime and nighttime noise level criteria at sensitive receptors.\nFootnotes:\n14 Sound level modeling in this Final EIR is developed for environmental review, to determine whether noise impacts would occur. Modeled source levels used in the Delta Conveyance Project noise analysis are conservative. Source levels measured during test-pile installation would be representative of construction, and inclusion of measured data would improve the accuracy of the model.\n15 Furnace/heat pump systems are included so that residents can close their windows, reducing interior noise. Homes already with newer systems (installed within the last 8 years) would not qualify for replacement.\n16 The program would be done in coordination with Mitigation Measure AQ-6: Avoid Residential Exposure to Localized Diesel Particulate Matter.\n17 The total durations of continuous pours would range from 1 week to 4 months and are specified for each facility under Impact NOI-1. Pours at a given facility would not be consecutive over the total duration specified for nighttime pours.\n18 This is the distance where heavy equipment noise is expected to be 60 dBA 1-hour Leq or lower, according to modeling."
          },
          "PH-1a": {
            "code": "PH-1a",
            "title": "Avoid Creating Areas of Standing Water During Preconstruction Field Investigations and Project Construction (FEIR)",
            "source": "EIR",
            "text": "DWR will eliminate standing water to reduce&nbsp;potentially suitable mosquito breeding areas&nbsp;at field investigation sites and construction sites (including staging areas). Actions will include, but not necessarily be limited to:\n\nAvoid leaving containers that&nbsp;can&nbsp;accumulate water in an uncovered or upright position. This includes wheelbarrows, drums, buckets, cans, tarps, and other containers. If uncovered containers must remain on-site, create drainage holes.&nbsp;\nStore building materials under shelter/cover that does not collect water.&nbsp;\nGrade all work areas to drain.&nbsp;\nFill in potholes and other areas where water is likely to accumulate and/or clear pooled, stagnant water regularly.&nbsp;\nRoutinely remove garbage and other debris that may collect water.&nbsp;\nPeriodically pump out water from trenches, ditches, or other ground areas where water could accumulate for several days and potentially provide mosquito breeding habitat."
          },
          "TCR-1a": {
            "code": "TCR-1a",
            "title": "Avoidance of Impacts on Tribal Cultural Resources (FEIR)",
            "source": "EIR",
            "text": "DWR will construct the project in a manner that avoids physically disturbing character-defining features of the Delta TCL by conducting preconstruction surveys to verify the extent of character-defining features of the Delta TCL and coordinating with affiliated Tribes and the project engineering design team to modify project-related construction activities, facilities, or both, to avoid physically disturbing character-defining features of the Delta TCL to the extent feasible, and if complete avoidance is not feasible, to minimize the physical disturbance to the greatest extent feasible.&nbsp;\nEfforts have been made during project planning to identify locations where construction activities have the potential to damage known ethnohistorical or archaeological locations and to assess the feasibility of adjusting the project locations to avoid physical disturbance of a known ethnohistorical or archaeological location. For example, access roads related to one or more of the north Delta intakes are in proximity to known mound sites. The project design team deemed that relocation of access roads to a safer distance away from the known sites (i.e., changing the location of the roads to avoid physical disturbance) would be feasible, and could be a realistic solution to avoid this impact. However, the exact location and extent of impacts on character-defining features of the Delta TCL are unclear due to the lack of confirmation of the extent of resource boundaries, as described in this chapter. Therefore, the first step in avoidance of impacts through adjusting the design will be to field-verify the extent of the resource relative to the proposed project activity and determine avoidance options.&nbsp;Based on Tribal consultation and input from the engineering design team, DWR has concluded that avoidance at certain locations of known archaeological resources is feasible through collaboration with Tribes during the project design phase. For example, many consulting Tribes raised a concern with DWR about a known archaeological site near Intake B that is a character-defining feature of the Delta TCL. The physical extent had not been confirmed through site surveys in many decades, but based on previous mapping and consultation with the Tribes regarding potential protective buffers, the engineering design team developed options for feasible avoidance near Intake B that both DWR and consulting Tribes agreed would likely avoid impacts.&nbsp;\nDWR will coordinate with affiliated Tribes to inform project design refinements to avoid or minimize, whenever feasible, physical disturbances to character-defining features, such as Native American archaeological resources, village sites, ceremonial locations, and other character-defining features that may be physically affected by project related activities. Through the continuing collaborative process used during consultation, DWR and consulting Tribes discussed an avoidance strategy which DWR will implement that includes the following steps:&nbsp;\n1. &nbsp; &nbsp;Where Native American archaeological resources, ceremonial sites, or other character-defining features have been identified, DWR will conduct site-specific surveys, in coordination with affiliated Tribes, to delineate the resource boundaries and inform further design refinements for avoidance.2. &nbsp; &nbsp;Based on the results of the site-specific surveys, DWR will design or redesign project facilities to avoid Native American archaeological resources, ceremonial sites, or other character-defining features to the greatest extent possible, while still practicably meeting the purpose of the facility."
          },
          "TCR-1b": {
            "code": "TCR-1b",
            "title": "Plans for the Management of Tribal Cultural Resources (FEIR)",
            "source": "EIR",
            "text": "1. &nbsp; &nbsp;DWR will construct the project in a manner that avoids physically disturbing Tribal cultural resources when feasible and, if complete avoidance is not feasible, implement other resource-specific treatment measures that minimize or mitigate the physical disturbance to Tribal cultural resources. This mitigation measure will be implemented through the development of a Tribal Cultural Resources Management Plan (TCRMP) subject to review and approval by DWR&rsquo;s Archaeologist.\nDWR will prepare a TCRMP prior to field investigations and construction activities to guide continued consultation, refinement of resource identification, and procedures for developing resource-specific treatment to be conducted prior to and during construction activities. The TCRMP will describe procedures for avoiding, minimizing, and mitigating project impacts on known or potential Tribal cultural resources. The TCRMP will be developed during the permitting and design process and will be adopted within 2 years of certification of the EIR. Preparers of the TCRMP will meet professional qualification standards established in the Secretary of the Interior&rsquo;s Professional Qualification Standards for cultural resources disciplines (history, archaeology, and/or architectural history). DWR will coordinate with the Tribes that participated in consultation on the project to ascertain whether they have standard procedures that may be applicable or other input on the content of the TCRMP. The Tribes will be afforded an opportunity to review and comment on the draft TCRMP.\nThe TCRMP will include procedures for the following:a. &nbsp; &nbsp;Tribal Consultation\nb. &nbsp; &nbsp;Principles and Procedures for the Identification of Tribal Cultural Resourcesc. &nbsp; &nbsp;Developing Resource-Specific Treatmentd. &nbsp; &nbsp;Native American Burial Treatmente. &nbsp; &nbsp;Post-Review Discoveryf. &nbsp; &nbsp;Tribal Monitoring\n2. &nbsp; &nbsp;The TCRMP will be prepared in consultation with culturally affiliated Tribes, including co-creation of the procedures for ongoing consultation regarding implementation of the TCRMP as well as development of other project implementation documents and plans.DWR is committed to continuing Tribal consultation throughout construction of the project to provide culturally affiliated Tribes the opportunity to review and comment on future, yet to be developed, documents developed for construction and mitigation of the project, as applicable. This consultation will include implementation of specific construction elements and mitigation components, in which culturally affiliated Tribes have expressed interest in coordinating with DWR.At a minimum, DWR will facilitate quarterly meetings with culturally affiliated Tribes to provide project updates and discuss opportunities for Tribal participation in aspects of project construction and mitigation measure implementation, including development of compensatory mitigation site-specific performance monitoring and management plans and adaptive management plans. The purpose of these meetings will be to clearly identify coordination opportunities and roles for culturally affiliated Tribes to participate in implementation of the project. DWR is also committed to coordinating with Tribes regarding the long-term operations and maintenance of the Delta Conveyance Project.\n3. &nbsp; &nbsp;DWR will construct the project in a manner that avoids physically disturbing archaeological resources that are character-defining features of the Delta TCL when feasible and, if complete avoidance is not feasible, implement other resource-specific treatment measures that minimize or mitigate the physical disturbance of these character-defining features. This mitigation measure will be implemented through the development of an Archaeological Resources Management Plan (ARMP) subject to review and approval by DWR&rsquo;s Archeologist.&nbsp; Native American archaeological resources that are character-defining features of the Delta TCL will be subject to Chapter 19, Cultural Resources, Mitigation Measure CUL-3a: Prepare and Implement an Archaeological Resources Management Plan with additional recognition of their role as part of the Delta TCL. As described in Mitigation Measure CUL-3a, the ARMP will include procedures for archaeological resources phased identification, archaeological treatment, post-review discovery, and archaeological monitoring. In accordance with (1)(a) of Mitigation Measure CUL-3a, DWR will consult with affiliated Tribes regarding the methods for identification, treatment, post-review discovery, and monitoring during the preparation of the ARMP and incorporate Tribal input into the ARMP to the greatest extent practicable. Tribes will be afforded an opportunity to review and comment on the draft ARMP. The ARMP will reiterate DWR&rsquo;s commitment to avoidance for Native American archaeological resources in accordance with Mitigation Measure TCR-1a: Avoidance of Impacts on Tribal Cultural Resources. DWR recognizes that different affiliated Tribes may have different preferences about the approach for identification or treatment of Native American archaeological resources, and thus application of the ARMP for one location may differ from application at another location. Some examples of resource identification methods recommended by affiliated Tribes include:a. &nbsp; &nbsp;Canine forensic surveys&nbsp;b. &nbsp; &nbsp;Intensive pedestrian surveys&nbsp;\nc. &nbsp; &nbsp;Light detection and ranging (LiDAR) imagery analysis&nbsp;d. &nbsp; &nbsp;Geophysical studies, such as the use of ground-penetrating radar&nbsp;e. &nbsp; &nbsp;Subsurface investigations (which may include excavation of test pits) Where Native American archaeological resources cannot be avoided through implementation of Mitigation Measure TCR-1a, other treatment measures will be applied as defined in the TCRMP. Such treatment measures may include those listed in Mitigation Measure TCR-1c(4)(a)&ndash;(f), or others that are developed through consultation with culturally affiliated Tribes as set forth in the TCRMP.\n4. For Native American archaeological resources where burials have been identified, DWR will implement burial treatment plans as described in Mitigation Measure CUL-5: Follow State and Federal Law Governing Human Remains If Such Resources Are Discovered during Construction. DWR will implement these plans prior to, during, and following construction, depending on how the treatments are described in the final ARMP or burial treatment plan(s). As part of the burial treatment plans, DWR will provide access to designated land to the affiliated Tribe (or most likely descendant), in perpetuity, for repatriation of disturbed cultural materials associated with burials.&nbsp;"
          },
          "TCR-1c": {
            "code": "TCR-1c",
            "title": "Implement Measures to Restore and Enhance the Physical, Spiritual, and Ceremonial Qualities of Affected Tribal Cultural Resources (FEIR)",
            "source": "EIR",
            "text": "DWR will construct the project in a manner that minimizes the material impairment of the physical, spiritual, and ceremonial qualities of the character-defining features of the Delta TCL; however, because this may not be feasible in all cases, mitigation will be implemented for unavoidable impacts. Through consultation with Tribes, DWR has identified mitigation measures for the material impairment of the physical, spiritual, and ceremonial qualities of character-defining features of the Delta TCL. For character-defining features of the Delta TCL that would be materially impaired by construction activities DWR will:&nbsp;\n\nProvide affiliated Tribes the opportunity to participate in surveys for all project footprint locations. DWR will provide Tribes with Tribal survey forms to document site-specific information the Tribe wishes to share with DWR.&nbsp;&nbsp;\nAllow affiliated Tribes to monitor ground-disturbing construction activities with surface effects.&nbsp;&nbsp;\nDevelop Tribal resources awareness training in coordination with affiliated Tribes to support avoidance and protection of character-defining features. Prior to the start of ground disturbance, a mandatory Tribal resource awareness training will be provided for all personnel involved in ground-disturbing work. DWR will maintain the record of training and make it available, upon request.&nbsp;&nbsp;\nSupport Tribal stewardship activities through funding and access opportunities, to be defined in coordination with affiliated Tribes, that allow Tribes to restore land and develop conservation projects. Techniques may include:\n\nProviding funding to develop conservation projects that allow Tribes to reintroduce ancestral languages.&nbsp;\nFacilitating access agreements, as appropriate, for restored areas.&nbsp;&nbsp;\nRestoring traditional use areas and restoration of plants and animals affected by the project (see Mitigation Measure TCR-1d for additional information on Tribal involvement of planned restoration activities for mitigation for project impacts).&nbsp;\nPromoting access to areas where Tribes can continue to conduct their ceremonial practices.&nbsp;&nbsp;\nProviding funding for the development of indigenous science by establishing education programs and scholarships; and support of academic programming development in selected academic institutions.&nbsp;\nSupporting co-management partnerships for access to state lands currently not publicly accessible."
          },
          "TCR-2": {
            "code": "TCR-2",
            "title": "Perform an Assessment of Significance, Known Attributes, and Integrity for Individual CRHR Eligibility (FEIR)",
            "source": "EIR",
            "text": "Efforts have been made during Tribal consultation to identify individual Tribal cultural resources. DWR considered whether any of the character-defining features of the Delta TCL, such as biological species habitats, waterways, archaeological sites, built mound structures, trails, villages, ceremonial places, and cemeteries and burials, possess cultural value separate from what they contribute to the Delta TCL, and established a three-step screening process for identifying which landscape components warranted further CRHR evaluation as potential individual Tribal cultural resources.&nbsp;\nDWR is committed to continuing Tribal consultation throughout implementation of the mitigation measures and recognizes that during the course of the ongoing consultation, DWR may gain further understanding of the significance of Delta TCL character-defining features, or other resources, that have cultural value to an affiliated Tribe. If this occurs, DWR would reevaluate a character-defining feature, or evaluate a resource, for individual CRHR eligibility using the following three-step assessment of significance, known attributes, and integrity:\n\nDWR will assess whether the additional evidence, in the form of Tribal expert opinion shared through consultation, and other relevant data that DWR has collected, demonstrates a discrete resource has cultural value (significance) separate and apart from the holistic Delta TCL (though it may also contribute to the landscape).&nbsp;&nbsp;\nDWR will assess whether the additional evidence, in the form of Tribal expert opinion shared through consultation, and other relevant data that DWR has collected, demonstrates a discrete resource that has demonstrated significance is described and mapped sufficiently for CRHR evaluation.&nbsp;&nbsp;\nDWR will assess whether the additional evidence, in the form of Tribal expert opinion shared through consultation, and other relevant data that DWR has collected, demonstrates a discrete resource that has demonstrated significance has integrity of its characteristics to convey its cultural value (significance) separate and apart from the holistic Delta TCL (though it may also contribute to the landscape). DWR will continue to assess integrity through a Tribal perspective. If DWR finds that any resources pass all three screening steps, DWR will assess the resources&rsquo; CRHR eligibility in accordance with Public Resources Code Section 21074(a)(1) and (2). If an individual resource is CRHR eligible, DWR will assess the project&rsquo;s potential effect on the resource to determine whether there would be a substantial adverse change to the resource&rsquo;s independent significance. If the project would cause a substantial adverse change to the individual Tribal cultural resource, DWR will implement Mitigation Measures TCR-1a: Avoidance of Impacts on Tribal Cultural Resources, TCR-1b: Plans for the Management of Tribal Cultural Resources, TCR-1c: Implement Measures to Restore and Enhance the Physical, Spiritual, and Ceremonial Qualities of Affected Tribal Cultural Resources, and TCR-1d: Incorporate Tribal Knowledge into Compensatory Mitigation Planning (Restoration) to avoid or reduce the impact.&nbsp;"
          },
          "TRANS-1": {
            "code": "TRANS-1",
            "title": "Implement Site-Specific Construction Transportation Demand Management Plan and Transportation Management Plan (FEIR)",
            "source": "EIR",
            "text": "Prior to construction, DWR will require that provisions be included in construction contracts stating that contractors&rsquo; crews and schedules are to be coordinated to reduce total construction employee VMT during construction periods through the use of park-and-ride lots and carpooling/vanpooling, and that the plans and specifications that are developed as part of the project alternatives design are being followed. The project will also require development of site-specific TDMs and TMPs that address the specific steps to be taken before, during, and after construction to minimize VMT as a result of construction employees driving alone in their single occupancy vehicles to and from park-and-ride lots and construction sites. Construction contractors will be responsible for developing the TDMs and TMPs in consultation with the following applicable transportation entities.\n\nCaltrans for state and federal roadway facilities\nLocal agencies for local roadway and intersection facilities (vehicles, pedestrians, and bicyclists)\nTransit providers\nCommuter and Freight Rail operators\nU.S. Coast Guard\nFederal, California, city, and county parks departments&nbsp;&nbsp;\n\n\nDWR will be responsible for verifying that the TDMs and TMPs are implemented prior to beginning construction at each project feature. If necessary, to minimize unexpected operational and safety related impacts or delays during construction, DWR will also be responsible for modifying the TDMs and/or the TMPs to reduce potential effects identified by the applicable transportation entities identified above throughout the duration of the contract. The following shall be prepared by the contractor(s) and approved by DWR prior to beginning construction at each project feature:\n\nDevelop of a TDM plan that will reduce the reliance of construction employees on single occupancy vehicles. The TDM plan shall include the following performance standards:\n\nIncentivize carpooling and vanpooling to and from park-and-ride facilities to achieve the goal of a 25% reduction in single occupancy vehicles.&nbsp;\nRequire 100% compliance by construction workers to use park-and-ride facilities and transfer to project transit vehicles to travel to and from feature construction sites.&nbsp;\nIncentives can include a combination of monetary (i.e., carpool/vanpool gas cards) and non-monetary (i.e., preferential parking spaces and express transit boarding to and from park-and-ride facilities and construction site for employees who carpool/vanpool).&nbsp;\nQuarterly and yearly TDM reports will be prepared to quantify the performance toward meeting the goal of 25% reduction in the use of single-occupancy vehicles at each of the park-and-ride facilities based on number of passengers compared to vehicles parked.&nbsp;\n\n\nIncorporate TDM measure to incentivize the use of alternative travel modes such as transit and bicycling to park-and-ride facilities.\n\nIncentives can include a combination of monetary (i.e., transit passes) and non-monetary (i.e., preferential transit boarding to and from park-and-ride facilities and construction site for employees who use transit).\nQuarterly and yearly TDM reports will be prepared to quantify the performance of transit and bicycling to park-and-ride facilities based on surveys on how construction workers arrived at the park-and-ride facilities (drove alone, carpool/vanpool, transit, or bicycling).&nbsp;\n\n\n\n\n\n3. Each TMP will address the following, as needed.\n\n\n\nCoordination with the affected agency during the construction and operation of the five park-and-ride facilities to be served by alternative fuel vehicles to and from construction sites.\n\nHood-Franklin Park-and-Ride Lot (Alternatives 1, 2a, 2b, 2c, 3, 4a, 4b, 4c, and 5)\nCharter Way Park-and-Ride Lot (Alternatives 1, 2a, 2b, 2c, 3, 4a, 4b, 4c, and 5)&nbsp;\n\n\nCoordination with the affected agency during the construction of the following major road improvements described in Section 20.3.3.3.\n\nIntake haul road (Alternatives 1, 2a, 2b, 2c, 3, 4a, 4b, 4c, and 5)&nbsp;\nTwin Cities Complex (Alternatives 1, 2a, 2b, 2c, 3, 4a, 4b, 4c, and 5)\nNew Hope Tract (Alternatives 3, 4a, 4b, 4c, and 5)\nTerminous Tract (Alternatives 3, 4a, 4b, 4c, and 5)\nLower Roberts Island (Alternatives 3, 4a, 4b, 4c, and 5)\nBethany Reservoir Pumping Plant and Surge Basin (Alternative 5)\nBethany Reservoir Aqueduct (Alternative 5)\nBethany Reservoir Discharge Structure (Alternative 5)&nbsp;\n\n\nCoordination with the affected agency during the construction of the following shaft site improvements:&nbsp;\n\nNew Hope Tract, Canal Ranch Tract, King Island, Upper Jones Tract, and Union Island (Bethany Reservoir alignment).&nbsp;\n\n\nNotifications in the multiple languages spoken in the Delta for the public, emergency providers, cycling organizations, bike shops, and schools, the U.S. Coast Guard, boating organizations, marinas, city and county parks departments, and California Department of Parks and Recreation, where applicable, describing construction activities that could affect transportation and water navigation.&nbsp;\nAlternate access routes via detours, including Americans with Disabilities Act-compliant facilities where required to maintain continual circulation for local travelers in and around construction zones and site access driveways, including bicycle riders, pedestrians, and boaters, where applicable.&nbsp;\nScheduling for oversized material deliveries to the work site and haul routes during off-peak times.&nbsp;\nProvisions that direct haulers are required to pull over to the side of the road if an emergency vehicle is approaching in either direction. If an emergency vehicle is approaching on a narrow two-way roadway, specify measures to require that construction vehicles use appropriate maneuvers to allow continual access for emergency vehicles at the time of an emergency.&nbsp;\nTo eliminate potential hazards from a geometric design, DWR will&nbsp;require that geometric design plans that meet geometric standards be prepared and approved by the applicable transportation entity (i.e., Caltrans, county, or city public works department) for the&nbsp;major road improvements included in the conceptual design of the project alternatives.&nbsp;\nScheduling closures for road and bridge improvements to night-time hours and limit closure periods to reduce traffic effects associated with detours.&nbsp;\nDesigning park-and-ride lot entrances and exits to avoid construction employee queuing on higher volume roadways, providing adequate turn lanes and signage or signals (if needed) for lot entrances and exits and scheduling park and ride lot arrivals and departures to reduce employee traffic volumes during peak morning and evening commute periods.&nbsp;&nbsp;\nTo reduce potential conflicts with existing land uses, DWR will require that staged construction plans,&nbsp;roadway closure reports, and detour plans be prepared for major road improvements and approved by the applicable transportation entity (i.e., Caltrans, county, or city public works department).&nbsp;\nA project information website in the multiple languages spoken in the Delta will be developed to inform residents, business owners, and farmers of provisions that have been implemented to reduce VMT in the project study area and forthcoming construction in coordination with events and harvest activities in the Delta.&nbsp;&nbsp;\nThe contractor will coordinate with emergency responders to identify routes traditionally used by voluntary responders to access fire stations, and emergency responders to access the communities from the police and fire stations. |&nbsp;\nDuring construction, each week, the contractor will coordinate with emergency responders, including ambulance dispatchers, to identify road construction and high-volume construction traffic events (e.g., during hours of material deliveries).&nbsp;\nDuring road construction, the contractor will have designated staff monitor emergency response calls with immediate communications with construction crews at every site to facilitate movement of emergency responders.&nbsp;&nbsp;\nThe contractor will post on a weekly basis information on the project information website in the multiple languages spoken in the Delta to inform residents, business owners, and farmers of daily road construction and high-volume construction traffic events (e.g., during hours of material deliveries).&nbsp;&nbsp;\nThe contractor will either maintain at least one shoulder along existing access roads to be free of debris or provide detours during short-term, overnight closures (maximum of 2 nights per week) to allow access of fire engines, ambulances, and police cars that need to travel at high speeds.&nbsp;&nbsp;\nDuring road construction, the contractor will have several steel plates and equipment available at all times to cover trench sites when there is no construction activity (i.e., after hours or weekends) to provide access for emergency responders over temporary excavations.&nbsp;"
          }
        }
      </script>
    </div>
  </div>
</div>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
.bcn-mstats {
  --sidebar-width: 22rem;
  --sidebar-content-min: 55%;
  align-items: stretch;
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
  --_stat-accent-color: var(--stat-accent-color, var(--color-secondary, #5787b9));
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
.esa-stat__sub {
  font-size: var(--_stat-sub-size);
  font-weight: var(--font-weight-regular, 350);
  line-height: var(--line-height-normal, 1.6);
  color: var(--_stat-sub-color);
}
.bcn-mstats__donut {
  position: relative;
  width: 92px;
  height: 92px;
  border-radius: var(--radius-full);
  background: conic-gradient(var(--_stops));
  flex-shrink: 0;
}
.bcn-mstats__donut-hole {
  position: absolute;
  inset: 18px;
  display: grid;
  place-items: center;
  border-radius: var(--radius-full);
  background: var(--color-surface);
  font-family: var(--font-display, var(--font-sans));
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}
.bcn-mstats__legend {
  list-style: none;
  padding: 0;
}
.bcn-mstats__legend-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-text-secondary);
}
.bcn-mstats__dot {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full);
  background: var(--_c);
  flex-shrink: 0;
}
.bcn-mstats__issues {
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-light);
}
.bcn-mstats__issues-title {
  margin: 0;
  color: var(--color-text-secondary);
}
.bcn-mstats__issues ul {
  list-style: none;
  padding: 0;
}
.bcn-mstats__issue {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
}
.bcn-mstats__issue-link {
  font-size: var(--type-size-150);
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bcn-mstats > :last-child {
  flex-grow: 1;
}
.bcn-mstats__bars {
  list-style: none;
  padding: 0;
}
.bcn-mstats__bar-row {
  display: grid;
  grid-template-columns: 4rem 1fr auto;
  align-items: center;
  gap: var(--spacing-300);
}
.bcn-mstats__bar-label {
  color: var(--color-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-mstats__bar-track {
  height: 10px;
  border-radius: var(--radius-full);
  background: var(--color-surface-sunken);
  overflow: hidden;
}
.bcn-mstats__bar-fill {
  display: block;
  height: 100%;
  border-radius: var(--radius-full);
  background: var(--_c);
}
.bcn-mstats__bar-value {
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
.cc {
  margin-top: var(--spacing-700);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.cc__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-400);
  flex-wrap: wrap;
  padding-bottom: var(--spacing-200);
  border-bottom: 1px solid var(--color-border);
}
.cc__title {
  margin: 0;
  font-family: var(--font-decorative);
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}
.cc__controls {
  display: flex;
  align-items: center;
  gap: var(--spacing-400);
  flex-wrap: wrap;
}
.cc__ctx {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-200);
}
.cc__ctx-label {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.cc-group__head {
  display: flex;
  align-items: center;
  gap: var(--spacing-250);
  margin-bottom: var(--spacing-300);
}
.cc-group__name {
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.cc-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 var(--spacing-150);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-100);
  font-variant-numeric: tabular-nums;
}
.cc-group__cards {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-obs {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  background: var(--color-surface);
  overflow: hidden;
}
.bcn-obs__summary {
  display: flex;
  align-items: center;
  gap: var(--spacing-250);
  padding: var(--spacing-300) var(--spacing-400);
  cursor: pointer;
  list-style: none;
}
.bcn-obs__chev {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-text-tertiary);
  transition: transform 0.15s ease;
}
.bcn-obs__concern-icon {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-danger);
}
.bcn-obs__name {
  flex-shrink: 0;
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-obs__id {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: var(--type-size-100);
  color: var(--color-text-secondary);
}
.bcn-obs__meta {
  font-size: var(--type-size-100);
  color: var(--color-text-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-obs__spacer {
  flex: 1 1 var(--spacing-300);
}
.cc-group + .cc-group {
  margin-top: var(--spacing-500);
}
.bcn-obs__badge {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-secondary);
  background: color-mix(in srgb, var(--color-secondary) 12%, white);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
}
.bcn-obs__fledge {
  flex-shrink: 0;
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-secondary);
  white-space: nowrap;
}
.bcn-obs[hidden] {
  display: none;
}
.cc__pane[hidden],
.cc-group[hidden] {
  display: none;
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
.esa-card__body {
  padding: var(--_card-padding);
}
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
.sidebar {
  --gap: var(--spacing-500, 1.5rem);
  --sidebar-width: 18rem;
  --sidebar-content-min: 60%;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
}
.sidebar > :first-child {
  flex-basis: var(--sidebar-width);
  flex-grow: 1;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
}
.type-body-small {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
.type-label {
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
.sidebar > :last-child {
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: var(--sidebar-content-min);
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
.esa-badge--warning {
  --_badge-bg: var(--color-warning, #f59e0b);
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
.page-layout__utilities {
  display: flex;
  gap: var(--spacing-200);
}
.page-layout__content {
  padding: var(--spacing-500) 0;
  min-height: 70vh;
  position: relative;
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
| `--card-bg` | `#ffffff` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--card-header-border-color` | `#efefef` | component |
| `--card-header-color` | `#3d3d3d` | component |
| `--card-padding` | `1.5rem` | component |
| `--card-radius` | `.5rem` | component |
| `--color-accent` | `#f9a134` | semantic |
| `--color-border` | `#dcdcdc` | semantic |
| `--color-border-light` | `#efefef` | semantic |
| `--color-danger` | `#ef4444` | semantic |
| `--color-primary` | `#005862` | semantic |
| `--color-primary-hover` | `#00474f` | semantic |
| `--color-secondary` | `#00918b` | semantic |
| `--color-surface` | `#ffffff` | semantic |
| `--color-surface-sunken` | `#efefef` | semantic |
| `--color-text-inverse` | `#ffffff` | semantic |
| `--color-text-muted` | `#7c7c7c` | semantic |
| `--color-text-primary` | `#3d3d3d` | semantic |
| `--color-text-secondary` | `#525252` | semantic |
| `--color-text-tertiary` | `#656565` | semantic |
| `--color-warning` | `#f2770e` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-display` | `"DM Sans", sans-serif` | primitive |
| `--font-mono` | `"Roboto Mono", ui-monospace, monospace` | primitive |
| `--font-sans` | `"DM Sans", sans-serif` | primitive |
| `--font-weight-bold` | `650` | primitive |
| `--font-weight-medium` | `450` | primitive |
| `--font-weight-regular` | `350` | primitive |
| `--font-weight-semibold` | `550` | primitive |
| `--form-font-size-md` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | component |
| `--form-font-size-sm` | `clamp(.625rem, .56rem + .32vw, .75rem)` | component |
| `--form-height-md` | `36px` | component |
| `--form-height-sm` | `28px` | component |
| `--form-padding-x-md` | `.75rem` | component |
| `--form-padding-x-sm` | `.625rem` | component |
| `--form-radius-md` | `.25rem` | component |
| `--form-radius-sm` | `.25rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-medium` | `20px` | component |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-small` | `16px` | component |
| `--icon-size-xs` | `14px` | primitive |
| `--letter-spacing-normal` | `.01em` | primitive |
| `--letter-spacing-tight` | `-.01em` | primitive |
| `--line-height-normal` | `1.6` | primitive |
| `--line-height-tight` | `1.3` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
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
| `--type-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | primitive |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
