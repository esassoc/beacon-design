# Full page

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **map-dashboard** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/map-dashboard/
- **Section element:** `<page>`
- **Components:** esa-icon (hub)

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
      <button type="button" class="icon-button" aria-label="Search">
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
      <a href="#admin" class="icon-button" aria-label="Admin settings">
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
            <li class="nav-item">
              <a href="#dashboard" class="nav-sublink active"> Dashboard </a>
            </li>
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
              <a href="#monitoring-portal" class="nav-sublink"> Monitoring Portal </a>
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
                <span class="breadcrumb-item" aria-current="page"> Permit Status Map </span>
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
                Permit Status Map
              </h1>
            </div>
          </section>
          <section class="page-layout__content">
            <section class="burndown" aria-label="Footage by permitting status">
              <div class="burndown__headline">
                <span class="burndown__cleared-feet">11,430 ft</span>
                <span class="burndown__cleared-label">Cleared to Construct</span>
                <span class="burndown__total">of 33,570 ft total · 34%</span>
              </div>
              <div class="burndown__bar" role="img" aria-label="34 percent cleared">
                <div
                  class="burndown__seg"
                  style="width: 6.1066428358653555%; background: var(--bcn-gray-300)"
                  title="Not Started: 2,050 ft"
                ></div>
                <div
                  class="burndown__seg"
                  style="width: 38.63568662496276%; background: var(--color-orange-300)"
                  title="In Preparation: 12,970 ft"
                ></div>
                <div
                  class="burndown__seg"
                  style="width: 9.294012511170688%; background: var(--color-blue-500)"
                  title="Submitted: 3,120 ft"
                ></div>
                <div
                  class="burndown__seg"
                  style="width: 11.915400655347035%; background: var(--color-warning)"
                  title="Under Review: 4,000 ft"
                ></div>
                <div
                  class="burndown__seg"
                  style="width: 34.048257372654156%; background: var(--color-success)"
                  title="Cleared to Construct: 11,430 ft"
                ></div>
              </div>
              <ul class="burndown__legend">
                <li class="burndown__legend-item" data-empty="false">
                  <span class="burndown__swatch" style="background: var(--bcn-gray-300)"></span>
                  <span class="burndown__legend-label">Not Started</span>
                  <span class="burndown__legend-feet">2,050 ft</span>
                  <span class="burndown__legend-pct">6%</span>
                </li>
                <li class="burndown__legend-item" data-empty="false">
                  <span class="burndown__swatch" style="background: var(--color-orange-300)"></span>
                  <span class="burndown__legend-label">In Preparation</span>
                  <span class="burndown__legend-feet">12,970 ft</span>
                  <span class="burndown__legend-pct">39%</span>
                </li>
                <li class="burndown__legend-item" data-empty="false">
                  <span class="burndown__swatch" style="background: var(--color-blue-500)"></span>
                  <span class="burndown__legend-label">Submitted</span>
                  <span class="burndown__legend-feet">3,120 ft</span>
                  <span class="burndown__legend-pct">9%</span>
                </li>
                <li class="burndown__legend-item" data-empty="false">
                  <span class="burndown__swatch" style="background: var(--color-warning)"></span>
                  <span class="burndown__legend-label">Under Review</span>
                  <span class="burndown__legend-feet">4,000 ft</span>
                  <span class="burndown__legend-pct">12%</span>
                </li>
                <li class="burndown__legend-item" data-empty="false">
                  <span class="burndown__swatch" style="background: var(--color-success)"></span>
                  <span class="burndown__legend-label">Cleared to Construct</span>
                  <span class="burndown__legend-feet">11,430 ft</span>
                  <span class="burndown__legend-pct">34%</span>
                </li>
              </ul>
            </section>
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
                        style="z-index: 20; transform: translate3d(0px, 0px, 0px) scale(1)"
                      >
                        <img
                          alt=""
                          src="https://b.basemaps.cartocdn.com/light_all/12/701/1456.png"
                          class="leaflet-tile leaflet-tile-loaded"
                          style="
                            width: 256px;
                            height: 256px;
                            transform: translate3d(262px, 166px, 0px);
                            opacity: 1;
                          "
                        /><img
                          alt=""
                          src="https://a.basemaps.cartocdn.com/light_all/12/701/1455.png"
                          class="leaflet-tile leaflet-tile-loaded"
                          style="
                            width: 256px;
                            height: 256px;
                            transform: translate3d(262px, -90px, 0px);
                            opacity: 1;
                          "
                        /><img
                          alt=""
                          src="https://a.basemaps.cartocdn.com/light_all/12/700/1456.png"
                          class="leaflet-tile leaflet-tile-loaded"
                          style="
                            width: 256px;
                            height: 256px;
                            transform: translate3d(6px, 166px, 0px);
                            opacity: 1;
                          "
                        /><img
                          alt=""
                          src="https://c.basemaps.cartocdn.com/light_all/12/702/1456.png"
                          class="leaflet-tile leaflet-tile-loaded"
                          style="
                            width: 256px;
                            height: 256px;
                            transform: translate3d(518px, 166px, 0px);
                            opacity: 1;
                          "
                        /><img
                          alt=""
                          src="https://c.basemaps.cartocdn.com/light_all/12/701/1457.png"
                          class="leaflet-tile leaflet-tile-loaded"
                          style="
                            width: 256px;
                            height: 256px;
                            transform: translate3d(262px, 422px, 0px);
                            opacity: 1;
                          "
                        /><img
                          alt=""
                          src="https://d.basemaps.cartocdn.com/light_all/12/700/1455.png"
                          class="leaflet-tile leaflet-tile-loaded"
                          style="
                            width: 256px;
                            height: 256px;
                            transform: translate3d(6px, -90px, 0px);
                            opacity: 1;
                          "
                        /><img
                          alt=""
                          src="https://b.basemaps.cartocdn.com/light_all/12/702/1455.png"
                          class="leaflet-tile leaflet-tile-loaded"
                          style="
                            width: 256px;
                            height: 256px;
                            transform: translate3d(518px, -90px, 0px);
                            opacity: 1;
                          "
                        /><img
                          alt=""
                          src="https://b.basemaps.cartocdn.com/light_all/12/700/1457.png"
                          class="leaflet-tile leaflet-tile-loaded"
                          style="
                            width: 256px;
                            height: 256px;
                            transform: translate3d(6px, 422px, 0px);
                            opacity: 1;
                          "
                        /><img
                          alt=""
                          src="https://d.basemaps.cartocdn.com/light_all/12/702/1457.png"
                          class="leaflet-tile leaflet-tile-loaded"
                          style="
                            width: 256px;
                            height: 256px;
                            transform: translate3d(518px, 422px, 0px);
                            opacity: 1;
                          "
                        /><img
                          alt=""
                          src="https://d.basemaps.cartocdn.com/light_all/12/699/1456.png"
                          class="leaflet-tile leaflet-tile-loaded"
                          style="
                            width: 256px;
                            height: 256px;
                            transform: translate3d(-250px, 166px, 0px);
                            opacity: 1;
                          "
                        /><img
                          alt=""
                          src="https://d.basemaps.cartocdn.com/light_all/12/703/1456.png"
                          class="leaflet-tile leaflet-tile-loaded"
                          style="
                            width: 256px;
                            height: 256px;
                            transform: translate3d(774px, 166px, 0px);
                            opacity: 1;
                          "
                        /><img
                          alt=""
                          src="https://c.basemaps.cartocdn.com/light_all/12/699/1455.png"
                          class="leaflet-tile leaflet-tile-loaded"
                          style="
                            width: 256px;
                            height: 256px;
                            transform: translate3d(-250px, -90px, 0px);
                            opacity: 1;
                          "
                        /><img
                          alt=""
                          src="https://c.basemaps.cartocdn.com/light_all/12/703/1455.png"
                          class="leaflet-tile leaflet-tile-loaded"
                          style="
                            width: 256px;
                            height: 256px;
                            transform: translate3d(774px, -90px, 0px);
                            opacity: 1;
                          "
                        /><img
                          alt=""
                          src="https://a.basemaps.cartocdn.com/light_all/12/699/1457.png"
                          class="leaflet-tile leaflet-tile-loaded"
                          style="
                            width: 256px;
                            height: 256px;
                            transform: translate3d(-250px, 422px, 0px);
                            opacity: 1;
                          "
                        /><img
                          alt=""
                          src="https://a.basemaps.cartocdn.com/light_all/12/703/1457.png"
                          class="leaflet-tile leaflet-tile-loaded"
                          style="
                            width: 256px;
                            height: 256px;
                            transform: translate3d(774px, 422px, 0px);
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
                      height="533"
                      viewBox="-93 -44 1121 533"
                      style="transform: translate3d(-93px, -44px, 0px)"
                    >
                      <g>
                        <path
                          class="leaflet-interactive"
                          stroke="#22c55e"
                          stroke-opacity="0.9"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          d="M124 175L204 192"
                        ></path>
                        <path
                          class="leaflet-interactive"
                          stroke="#fab54f"
                          stroke-opacity="0.9"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          d="M204 192L275 209"
                        ></path>
                        <path
                          class="leaflet-interactive"
                          stroke="#f59e0b"
                          stroke-opacity="0.9"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          d="M275 209L332 218"
                        ></path>
                        <path
                          class="leaflet-interactive"
                          stroke="#fab54f"
                          stroke-opacity="0.9"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          d="M332 218L412 230"
                        ></path>
                        <path
                          class="leaflet-interactive"
                          stroke="#22c55e"
                          stroke-opacity="0.9"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          d="M412 230L480 239"
                        ></path>
                        <path
                          class="leaflet-interactive"
                          stroke="#22c55e"
                          stroke-opacity="0.9"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          d="M480 239L544 246"
                        ></path>
                        <path
                          class="leaflet-interactive"
                          stroke="#699cc6"
                          stroke-opacity="0.9"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          d="M544 246L580 251L610 253"
                        ></path>
                        <path
                          class="leaflet-interactive"
                          stroke="#fab54f"
                          stroke-opacity="0.9"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          d="M610 253L651 258L686 260"
                        ></path>
                        <path
                          class="leaflet-interactive"
                          stroke="#bdbdbd"
                          stroke-opacity="0.9"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          d="M686 260L746 265"
                        ></path>
                        <path
                          class="leaflet-interactive"
                          stroke="#f59e0b"
                          stroke-opacity="0.9"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="none"
                          d="M746 265L809 270"
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
                    style="transform: translate3d(179661px, 372792px, 0px) scale(2048)"
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
              <!-- Status legend (map overlay) -->
              <div class="map-legend" aria-label="Segment status legend">
                <span class="map-legend__title">Segment status</span>
                <span class="map-legend__row">
                  <span class="map-legend__line" style="background: var(--bcn-gray-300)"></span> Not
                  Started </span
                ><span class="map-legend__row">
                  <span class="map-legend__line" style="background: var(--color-orange-300)"></span>
                  In Preparation </span
                ><span class="map-legend__row">
                  <span class="map-legend__line" style="background: var(--color-blue-500)"></span>
                  Submitted </span
                ><span class="map-legend__row">
                  <span class="map-legend__line" style="background: var(--color-warning)"></span>
                  Under Review </span
                ><span class="map-legend__row">
                  <span class="map-legend__line" style="background: var(--color-success)"></span>
                  Cleared to Construct
                </span>
              </div>
            </div>
            <div class="drawer-backdrop" id="drawer-backdrop" hidden=""></div>
            <aside
              class="seg-drawer"
              id="seg-drawer"
              role="dialog"
              aria-modal="true"
              aria-labelledby="seg-drawer-title"
              hidden=""
            >
              <header class="seg-drawer__header">
                <div class="seg-drawer__header-main">
                  <span class="seg-drawer__eyebrow" id="dr-line"></span>
                  <h2 class="seg-drawer__title" id="seg-drawer-title"></h2>
                  <span class="seg-drawer__subtitle" id="dr-jurisdiction"></span>
                </div>
                <button
                  type="button"
                  class="seg-drawer__close"
                  id="drawer-close"
                  aria-label="Close dialog"
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
              </header>
              <div class="seg-drawer__body">
                <!-- Derived status + clear-to-build -->
                <div class="seg-drawer__status-block">
                  <span class="seg-drawer__status-chip" id="dr-status">
                    <span class="seg-drawer__status-dot" id="dr-status-dot"></span>
                    <span id="dr-status-label"></span>
                  </span>
                  <div class="seg-drawer__clear">
                    <span class="seg-drawer__clear-label">Projected clear-to-build</span>
                    <span class="seg-drawer__clear-date" id="dr-clear-date"></span>
                  </div>
                  <div class="seg-drawer__length">
                    <span class="seg-drawer__clear-label">Segment length</span>
                    <span class="seg-drawer__length-val" id="dr-length"></span>
                  </div>
                </div>
                <!-- Covering permits -->
                <h3 class="seg-drawer__section-title">
                  Covering permits <span class="seg-drawer__count" id="dr-permit-count"></span>
                </h3>
                <ul class="seg-drawer__permits" id="dr-permits"></ul>
              </div>
            </aside>
          </section>
        </div>
      </div>
      <script type="application/json" id="map-data">
        [
          {
            "id": "seg-01",
            "name": "Barnes RD to SR-12",
            "lineId": "Raul 2 — West Reach",
            "geometry": [
              [46.0712, -118.4361],
              [46.0689, -118.4218],
              [46.0671, -118.4087]
            ],
            "status": "cleared",
            "color": "#22c55e"
          },
          {
            "id": "seg-02",
            "name": "SR-12 / Lowden Junction",
            "lineId": "Raul 2 — West Reach",
            "geometry": [
              [46.0671, -118.4087],
              [46.0648, -118.3962],
              [46.0631, -118.3841]
            ],
            "status": "in-preparation",
            "color": "#fab54f"
          },
          {
            "id": "seg-03",
            "name": "Touchet River Crossing",
            "lineId": "Raul 2 — West Reach",
            "geometry": [
              [46.0631, -118.3841],
              [46.0617, -118.3729],
              [46.0609, -118.3648]
            ],
            "status": "under-review",
            "color": "#f59e0b"
          },
          {
            "id": "seg-04",
            "name": "Ash Hollow RD to PDX",
            "lineId": "Raul 2 — Central Reach",
            "geometry": [
              [46.0609, -118.3648],
              [46.0594, -118.3501],
              [46.0581, -118.3372]
            ],
            "status": "in-preparation",
            "color": "#fab54f"
          },
          {
            "id": "seg-05",
            "name": "US-12 / McNary Refuge",
            "lineId": "Raul 2 — Central Reach",
            "geometry": [
              [46.0581, -118.3372],
              [46.0568, -118.3241],
              [46.0559, -118.3138]
            ],
            "status": "cleared",
            "color": "#22c55e"
          },
          {
            "id": "seg-06",
            "name": "McNary to Frenchtown",
            "lineId": "Raul 2 — Central Reach",
            "geometry": [
              [46.0559, -118.3138],
              [46.055, -118.3019],
              [46.0542, -118.2918]
            ],
            "status": "cleared",
            "color": "#22c55e"
          },
          {
            "id": "seg-07",
            "name": "Frenchtown Shoreline Reach",
            "lineId": "Raul 2 — East Reach",
            "geometry": [
              [46.0542, -118.2918],
              [46.0531, -118.2794],
              [46.0524, -118.2691]
            ],
            "status": "submitted",
            "color": "#699cc6"
          },
          {
            "id": "seg-08",
            "name": "Frenchtown to Dixie RD",
            "lineId": "Raul 2 — East Reach",
            "geometry": [
              [46.0524, -118.2691],
              [46.0513, -118.2552],
              [46.0508, -118.2431]
            ],
            "status": "in-preparation",
            "color": "#fab54f"
          },
          {
            "id": "seg-09",
            "name": "Dixie RD Tie-In",
            "lineId": "Raul 2 — East Reach",
            "geometry": [
              [46.0508, -118.2431],
              [46.0501, -118.2318],
              [46.0497, -118.2224]
            ],
            "status": "not-started",
            "color": "#bdbdbd"
          },
          {
            "id": "seg-10",
            "name": "East Terminus / Mill Creek",
            "lineId": "Raul 2 — East Reach",
            "geometry": [
              [46.0497, -118.2224],
              [46.0489, -118.2106],
              [46.0484, -118.2008]
            ],
            "status": "under-review",
            "color": "#f59e0b"
          }
        ]
      </script>
      <script type="application/json" id="seg-details">
        [
          {
            "id": "seg-01",
            "name": "Barnes RD to SR-12",
            "lineId": "Raul 2 — West Reach",
            "jurisdiction": "Walla Walla County",
            "lengthFt": 4820,
            "status": "cleared",
            "statusLabel": "Cleared to Construct",
            "statusHex": "#22c55e",
            "clearDate": "Jun 2, 2026",
            "covering": [
              {
                "id": "sepa-walla-walla",
                "name": "SEPA Environmental Review",
                "agency": "Walla Walla County (Lead Agency)",
                "agencyLevel": "Local",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Apr 22, 2026",
                "isActual": true
              },
              {
                "id": "wa-dnr",
                "name": "Aquatic Lands Use Authorization",
                "agency": "WA Dept. of Natural Resources",
                "agencyLevel": "State",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Jun 1, 2026",
                "isActual": true
              },
              {
                "id": "usace-nwp",
                "name": "Nationwide Permit (Section 404)",
                "agency": "US Army Corps of Engineers",
                "agencyLevel": "Federal",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "May 28, 2026",
                "isActual": true
              },
              {
                "id": "ww-county-row",
                "name": "County Right-of-Way Permit",
                "agency": "Walla Walla County Public Works",
                "agencyLevel": "Local",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Jun 2, 2026",
                "isActual": true
              }
            ]
          },
          {
            "id": "seg-02",
            "name": "SR-12 / Lowden Junction",
            "lineId": "Raul 2 — West Reach",
            "jurisdiction": "WSDOT",
            "lengthFt": 3180,
            "status": "in-preparation",
            "statusLabel": "In Preparation",
            "statusHex": "#fab54f",
            "clearDate": "Jul 20, 2026",
            "covering": [
              {
                "id": "sepa-walla-walla",
                "name": "SEPA Environmental Review",
                "agency": "Walla Walla County (Lead Agency)",
                "agencyLevel": "Local",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Apr 22, 2026",
                "isActual": true
              },
              {
                "id": "wa-dnr",
                "name": "Aquatic Lands Use Authorization",
                "agency": "WA Dept. of Natural Resources",
                "agencyLevel": "State",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Jun 1, 2026",
                "isActual": true
              },
              {
                "id": "usace-nwp",
                "name": "Nationwide Permit (Section 404)",
                "agency": "US Army Corps of Engineers",
                "agencyLevel": "Federal",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "May 28, 2026",
                "isActual": true
              },
              {
                "id": "wsdot-uap",
                "name": "Utility Accommodation Permit",
                "agency": "WSDOT",
                "agencyLevel": "State",
                "status": "in-preparation",
                "statusLabel": "In Preparation",
                "variant": "warning",
                "estDate": "Jul 20, 2026",
                "isActual": false
              }
            ]
          },
          {
            "id": "seg-03",
            "name": "Touchet River Crossing",
            "lineId": "Raul 2 — West Reach",
            "jurisdiction": "WA Ecology / WDFW",
            "lengthFt": 2240,
            "status": "under-review",
            "statusLabel": "Under Review",
            "statusHex": "#f59e0b",
            "clearDate": "Aug 30, 2026",
            "covering": [
              {
                "id": "sepa-walla-walla",
                "name": "SEPA Environmental Review",
                "agency": "Walla Walla County (Lead Agency)",
                "agencyLevel": "Local",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Apr 22, 2026",
                "isActual": true
              },
              {
                "id": "usace-nwp",
                "name": "Nationwide Permit (Section 404)",
                "agency": "US Army Corps of Engineers",
                "agencyLevel": "Federal",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "May 28, 2026",
                "isActual": true
              },
              {
                "id": "ecology-401",
                "name": "Water Quality Certification (401)",
                "agency": "WA Dept. of Ecology",
                "agencyLevel": "State",
                "status": "under-review",
                "statusLabel": "Under Review",
                "variant": "warning",
                "estDate": "Aug 30, 2026",
                "isActual": false
              },
              {
                "id": "wdfw-hpa",
                "name": "Hydraulic Project Approval (HPA)",
                "agency": "WA Dept. of Fish & Wildlife",
                "agencyLevel": "State",
                "status": "under-review",
                "statusLabel": "Under Review",
                "variant": "warning",
                "estDate": "Aug 10, 2026",
                "isActual": false
              },
              {
                "id": "wa-dnr",
                "name": "Aquatic Lands Use Authorization",
                "agency": "WA Dept. of Natural Resources",
                "agencyLevel": "State",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Jun 1, 2026",
                "isActual": true
              }
            ]
          },
          {
            "id": "seg-04",
            "name": "Ash Hollow RD to PDX",
            "lineId": "Raul 2 — Central Reach",
            "jurisdiction": "Walla Walla County",
            "lengthFt": 5310,
            "status": "in-preparation",
            "statusLabel": "In Preparation",
            "statusHex": "#fab54f",
            "clearDate": "Jul 15, 2026",
            "covering": [
              {
                "id": "sepa-walla-walla",
                "name": "SEPA Environmental Review",
                "agency": "Walla Walla County (Lead Agency)",
                "agencyLevel": "Local",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Apr 22, 2026",
                "isActual": true
              },
              {
                "id": "wa-dnr",
                "name": "Aquatic Lands Use Authorization",
                "agency": "WA Dept. of Natural Resources",
                "agencyLevel": "State",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Jun 1, 2026",
                "isActual": true
              },
              {
                "id": "usace-nwp",
                "name": "Nationwide Permit (Section 404)",
                "agency": "US Army Corps of Engineers",
                "agencyLevel": "Federal",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "May 28, 2026",
                "isActual": true
              },
              {
                "id": "ecology-stormwater",
                "name": "Construction Stormwater (NPDES)",
                "agency": "WA Dept. of Ecology",
                "agencyLevel": "State",
                "status": "in-preparation",
                "statusLabel": "In Preparation",
                "variant": "warning",
                "estDate": "Jul 15, 2026",
                "isActual": false
              }
            ]
          },
          {
            "id": "seg-05",
            "name": "US-12 / McNary Refuge",
            "lineId": "Raul 2 — Central Reach",
            "jurisdiction": "USFWS Refuge",
            "lengthFt": 3940,
            "status": "cleared",
            "statusLabel": "Cleared to Construct",
            "statusHex": "#22c55e",
            "clearDate": "Jun 1, 2026",
            "covering": [
              {
                "id": "sepa-walla-walla",
                "name": "SEPA Environmental Review",
                "agency": "Walla Walla County (Lead Agency)",
                "agencyLevel": "Local",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Apr 22, 2026",
                "isActual": true
              },
              {
                "id": "usace-nwp",
                "name": "Nationwide Permit (Section 404)",
                "agency": "US Army Corps of Engineers",
                "agencyLevel": "Federal",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "May 28, 2026",
                "isActual": true
              },
              {
                "id": "usfws-sf299",
                "name": "Refuge Right-of-Way (SF-299)",
                "agency": "US Fish & Wildlife Service",
                "agencyLevel": "Federal",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "May 30, 2026",
                "isActual": true
              },
              {
                "id": "wa-dnr",
                "name": "Aquatic Lands Use Authorization",
                "agency": "WA Dept. of Natural Resources",
                "agencyLevel": "State",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Jun 1, 2026",
                "isActual": true
              }
            ]
          },
          {
            "id": "seg-06",
            "name": "McNary to Frenchtown",
            "lineId": "Raul 2 — Central Reach",
            "jurisdiction": "Walla Walla County",
            "lengthFt": 2670,
            "status": "cleared",
            "statusLabel": "Cleared to Construct",
            "statusHex": "#22c55e",
            "clearDate": "Jun 2, 2026",
            "covering": [
              {
                "id": "sepa-walla-walla",
                "name": "SEPA Environmental Review",
                "agency": "Walla Walla County (Lead Agency)",
                "agencyLevel": "Local",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Apr 22, 2026",
                "isActual": true
              },
              {
                "id": "wa-dnr",
                "name": "Aquatic Lands Use Authorization",
                "agency": "WA Dept. of Natural Resources",
                "agencyLevel": "State",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Jun 1, 2026",
                "isActual": true
              },
              {
                "id": "usace-nwp",
                "name": "Nationwide Permit (Section 404)",
                "agency": "US Army Corps of Engineers",
                "agencyLevel": "Federal",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "May 28, 2026",
                "isActual": true
              },
              {
                "id": "ww-county-row",
                "name": "County Right-of-Way Permit",
                "agency": "Walla Walla County Public Works",
                "agencyLevel": "Local",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Jun 2, 2026",
                "isActual": true
              }
            ]
          },
          {
            "id": "seg-07",
            "name": "Frenchtown Shoreline Reach",
            "lineId": "Raul 2 — East Reach",
            "jurisdiction": "Walla Walla County (Shoreline)",
            "lengthFt": 3120,
            "status": "submitted",
            "statusLabel": "Submitted",
            "statusHex": "#699cc6",
            "clearDate": "Sep 5, 2026",
            "covering": [
              {
                "id": "sepa-walla-walla",
                "name": "SEPA Environmental Review",
                "agency": "Walla Walla County (Lead Agency)",
                "agencyLevel": "Local",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Apr 22, 2026",
                "isActual": true
              },
              {
                "id": "usace-nwp",
                "name": "Nationwide Permit (Section 404)",
                "agency": "US Army Corps of Engineers",
                "agencyLevel": "Federal",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "May 28, 2026",
                "isActual": true
              },
              {
                "id": "shoreline-ssd",
                "name": "Shoreline Substantial Development / CUP",
                "agency": "Walla Walla County",
                "agencyLevel": "Local",
                "status": "submitted",
                "statusLabel": "Submitted",
                "variant": "info",
                "estDate": "Sep 5, 2026",
                "isActual": false
              },
              {
                "id": "wa-dnr",
                "name": "Aquatic Lands Use Authorization",
                "agency": "WA Dept. of Natural Resources",
                "agencyLevel": "State",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Jun 1, 2026",
                "isActual": true
              },
              {
                "id": "ecology-401",
                "name": "Water Quality Certification (401)",
                "agency": "WA Dept. of Ecology",
                "agencyLevel": "State",
                "status": "under-review",
                "statusLabel": "Under Review",
                "variant": "warning",
                "estDate": "Aug 30, 2026",
                "isActual": false
              }
            ]
          },
          {
            "id": "seg-08",
            "name": "Frenchtown to Dixie RD",
            "lineId": "Raul 2 — East Reach",
            "jurisdiction": "WSDOT",
            "lengthFt": 4480,
            "status": "in-preparation",
            "statusLabel": "In Preparation",
            "statusHex": "#fab54f",
            "clearDate": "Jul 20, 2026",
            "covering": [
              {
                "id": "sepa-walla-walla",
                "name": "SEPA Environmental Review",
                "agency": "Walla Walla County (Lead Agency)",
                "agencyLevel": "Local",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Apr 22, 2026",
                "isActual": true
              },
              {
                "id": "wa-dnr",
                "name": "Aquatic Lands Use Authorization",
                "agency": "WA Dept. of Natural Resources",
                "agencyLevel": "State",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Jun 1, 2026",
                "isActual": true
              },
              {
                "id": "usace-nwp",
                "name": "Nationwide Permit (Section 404)",
                "agency": "US Army Corps of Engineers",
                "agencyLevel": "Federal",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "May 28, 2026",
                "isActual": true
              },
              {
                "id": "wsdot-uap",
                "name": "Utility Accommodation Permit",
                "agency": "WSDOT",
                "agencyLevel": "State",
                "status": "in-preparation",
                "statusLabel": "In Preparation",
                "variant": "warning",
                "estDate": "Jul 20, 2026",
                "isActual": false
              },
              {
                "id": "ecology-stormwater",
                "name": "Construction Stormwater (NPDES)",
                "agency": "WA Dept. of Ecology",
                "agencyLevel": "State",
                "status": "in-preparation",
                "statusLabel": "In Preparation",
                "variant": "warning",
                "estDate": "Jul 15, 2026",
                "isActual": false
              }
            ]
          },
          {
            "id": "seg-09",
            "name": "Dixie RD Tie-In",
            "lineId": "Raul 2 — East Reach",
            "jurisdiction": "Walla Walla County",
            "lengthFt": 2050,
            "status": "not-started",
            "statusLabel": "Not Started",
            "statusHex": "#bdbdbd",
            "clearDate": "Oct 15, 2026",
            "covering": [
              {
                "id": "sepa-walla-walla",
                "name": "SEPA Environmental Review",
                "agency": "Walla Walla County (Lead Agency)",
                "agencyLevel": "Local",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Apr 22, 2026",
                "isActual": true
              },
              {
                "id": "wa-dnr",
                "name": "Aquatic Lands Use Authorization",
                "agency": "WA Dept. of Natural Resources",
                "agencyLevel": "State",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Jun 1, 2026",
                "isActual": true
              },
              {
                "id": "franchise",
                "name": "Franchise Agreement",
                "agency": "Walla Walla County",
                "agencyLevel": "Local",
                "status": "not-started",
                "statusLabel": "Not Started",
                "variant": "default",
                "estDate": "Oct 15, 2026",
                "isActual": false
              }
            ]
          },
          {
            "id": "seg-10",
            "name": "East Terminus / Mill Creek",
            "lineId": "Raul 2 — East Reach",
            "jurisdiction": "WA Ecology / WDFW",
            "lengthFt": 1760,
            "status": "under-review",
            "statusLabel": "Under Review",
            "statusHex": "#f59e0b",
            "clearDate": "Aug 30, 2026",
            "covering": [
              {
                "id": "sepa-walla-walla",
                "name": "SEPA Environmental Review",
                "agency": "Walla Walla County (Lead Agency)",
                "agencyLevel": "Local",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Apr 22, 2026",
                "isActual": true
              },
              {
                "id": "usace-nwp",
                "name": "Nationwide Permit (Section 404)",
                "agency": "US Army Corps of Engineers",
                "agencyLevel": "Federal",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "May 28, 2026",
                "isActual": true
              },
              {
                "id": "ecology-401",
                "name": "Water Quality Certification (401)",
                "agency": "WA Dept. of Ecology",
                "agencyLevel": "State",
                "status": "under-review",
                "statusLabel": "Under Review",
                "variant": "warning",
                "estDate": "Aug 30, 2026",
                "isActual": false
              },
              {
                "id": "wdfw-hpa",
                "name": "Hydraulic Project Approval (HPA)",
                "agency": "WA Dept. of Fish & Wildlife",
                "agencyLevel": "State",
                "status": "under-review",
                "statusLabel": "Under Review",
                "variant": "warning",
                "estDate": "Aug 10, 2026",
                "isActual": false
              },
              {
                "id": "wa-dnr",
                "name": "Aquatic Lands Use Authorization",
                "agency": "WA Dept. of Natural Resources",
                "agencyLevel": "State",
                "status": "issued",
                "statusLabel": "Issued",
                "variant": "success",
                "estDate": "Jun 1, 2026",
                "isActual": true
              }
            ]
          }
        ]
      </script>
    </div>
  </div>
</div>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
:root,
[data-theme="beacon"] {
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
  --color-accent: #f9a134;
  --color-border: #dcdcdc;
  --color-primary: #005862;
  --color-success: #2e7571;
  --color-surface: #ffffff;
  --color-text-link: #005862;
  --color-text-primary: #3d3d3d;
  --color-text-secondary: #525252;
  --color-text-tertiary: #656565;
  --font-decorative: "Besley", serif;
  --font-sans: "DM Sans", sans-serif;
  --font-weight-bold: 650;
  --font-weight-regular: 350;
  --font-weight-semibold: 550;
  --radius-050: 0.125rem;
  --radius-300: 0.5rem;
  --radius-400: 0.75rem;
  --radius-full: 9999px;
  --shadow-400: 0 8px 32px -8px rgba(0, 0, 0, 0.08);
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
  --type-size-500: clamp(1.125rem, 0.98rem + 0.72vw, 1.5rem);
}

.burndown {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  margin-bottom: var(--spacing-500);
  padding: var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.burndown__headline {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-200);
  flex-wrap: wrap;
}
.burndown__cleared-feet {
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-success);
  line-height: 1;
}
.burndown__cleared-label {
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.burndown__total {
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
}
.burndown__bar {
  display: flex;
  height: 14px;
  border-radius: var(--radius-full);
  overflow: hidden;
  background: var(--bcn-gray-100);
}
.burndown__seg {
  height: 100%;
}
.burndown__seg + .burndown__seg {
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
  font-size: 0.8125rem;
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
.burndown__legend-feet {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.burndown__legend-pct {
  color: var(--color-text-tertiary);
}
.map-wrap {
  position: relative;
  width: 100%;
  height: 62vh;
  min-height: 420px;
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
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
}
.map-legend__title {
  font-size: 0.6875rem;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-tertiary);
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
.drawer-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1300;
  background: #00000073;
  backdrop-filter: blur(2px);
  opacity: 0;
  transition: opacity 0.28s cubic-bezier(0.32, 0.72, 0, 1);
}
.drawer-backdrop[hidden] {
  display: none;
}
.seg-drawer {
  position: fixed;
  top: var(--spacing-400);
  right: var(--spacing-400);
  bottom: var(--spacing-400);
  height: calc(100vh - var(--spacing-400) * 2);
  width: 480px;
  max-width: 90vw;
  z-index: 1400;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--color-surface);
  border-radius: var(--radius-400);
  box-shadow: var(--shadow-400);
  transform: translate(calc(100% + var(--spacing-400)));
  transition: transform 0.28s cubic-bezier(0.32, 0.72, 0, 1);
}
.seg-drawer[hidden] {
  display: none;
}
.leaflet-pane,
.leaflet-top,
.leaflet-bottom {
  z-index: 400;
}
.esa-icon {
  --_icon-size: var(--icon-size-medium, 20px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.page-layout {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 15rem);
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
  color: var(--bcn-gray-600);
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
.modern-layout__content {
  flex: 1;
  overflow-y: auto;
  min-width: 0;
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
```

## Tokens
| Token | Value | Tier |
|---|---|---|
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
| `--color-border` | `#dcdcdc` | semantic |
| `--color-primary` | `#005862` | semantic |
| `--color-success` | `#2e7571` | semantic |
| `--color-surface` | `#ffffff` | semantic |
| `--color-text-link` | `#005862` | semantic |
| `--color-text-primary` | `#3d3d3d` | semantic |
| `--color-text-secondary` | `#525252` | semantic |
| `--color-text-tertiary` | `#656565` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-sans` | `"DM Sans", sans-serif` | primitive |
| `--font-weight-bold` | `650` | primitive |
| `--font-weight-regular` | `350` | primitive |
| `--font-weight-semibold` | `550` | primitive |
| `--radius-050` | `.125rem` | primitive |
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
| `--type-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
