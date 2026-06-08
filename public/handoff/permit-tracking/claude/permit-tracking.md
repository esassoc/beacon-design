# Permit Tracking

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **permit-tracking** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/permit-tracking/
- **Section element:** `<div>`
- **Components:** esa-badge (hub), esa-button (hub), esa-form-field (hub), esa-icon (hub)

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
                  ></svg>
                </span>
                Permit Tracking
              </h1>
            </div>
            <div class="page-layout__utilities">
              <span
                class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--sm"
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
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </span>
                  <span class="esa-button__label"> New Permit </span>
                </button>
              </span>
            </div>
          </section>
          <section class="page-layout__content">
            <div class="pt-toolbar">
              <div class="pt-pivot" role="tablist" aria-label="Pivot view">
                <button
                  type="button"
                  class="pt-pivot__btn is-active"
                  data-view="permits"
                  role="tab"
                  aria-selected="true"
                >
                  Permits
                </button>
                <button
                  type="button"
                  class="pt-pivot__btn"
                  data-view="segments"
                  role="tab"
                  aria-selected="false"
                >
                  Segments
                </button>
              </div>
              <!-- Filter pills (affordance; non-functional) -->
              <div class="pt-filters" id="pt-filters">
                <span class="pt-filter-label">Filters</span>
                <span class="pt-pill">
                  Status: Under Review
                  <button type="button" class="pt-pill__x" aria-label="Remove filter">
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
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </span>
                  </button>
                </span>
                <span class="pt-pill">
                  Level: Federal
                  <button type="button" class="pt-pill__x" aria-label="Remove filter">
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
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </span>
                  </button>
                </span>
                <button type="button" class="pt-filter-clear">Clear all</button>
              </div>
            </div>
            <div class="grid-wrap" id="view-permits">
              <table class="grid">
                <thead>
                  <tr>
                    <th class="grid__th grid__th--sortable">
                      Permit
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
                    </th>
                    <th class="grid__th">Agency</th>
                    <th class="grid__th">Level</th>
                    <th class="grid__th">Type</th>
                    <th class="grid__th">Status</th>
                    <th class="grid__th">Est. Approval</th>
                    <th class="grid__th grid__th--num">Segments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="grid__row" data-permit-id="usace-nwp" tabindex="0">
                    <td class="grid__td grid__td--name">Nationwide Permit (Section 404)</td>
                    <td class="grid__td">US Army Corps of Engineers</td>
                    <td class="grid__td">
                      <span class="esa-badge esa-badge--primary esa-badge--sm">
                        <span class="esa-badge__text">Federal</span>
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Section 404</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #22c55e">
                        <span class="status-chip__dot"></span> Issued
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">May 28, 2026</td>
                    <td class="grid__td grid__td--num">9</td>
                  </tr>
                  <tr class="grid__row" data-permit-id="usfws-sf299" tabindex="0">
                    <td class="grid__td grid__td--name">Refuge Right-of-Way (SF-299)</td>
                    <td class="grid__td">US Fish &amp; Wildlife Service</td>
                    <td class="grid__td">
                      <span class="esa-badge esa-badge--primary esa-badge--sm">
                        <span class="esa-badge__text">Federal</span>
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Right-of-Way</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #22c55e">
                        <span class="status-chip__dot"></span> Issued
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">May 30, 2026</td>
                    <td class="grid__td grid__td--num">1</td>
                  </tr>
                  <tr class="grid__row" data-permit-id="wsdot-uap" tabindex="0">
                    <td class="grid__td grid__td--name">Utility Accommodation Permit</td>
                    <td class="grid__td">WSDOT</td>
                    <td class="grid__td">
                      <span class="esa-badge esa-badge--info esa-badge--sm">
                        <span class="esa-badge__text">State</span>
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Utility</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #fab54f">
                        <span class="status-chip__dot"></span> In Preparation
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Jul 20, 2026</td>
                    <td class="grid__td grid__td--num">2</td>
                  </tr>
                  <tr class="grid__row" data-permit-id="ecology-401" tabindex="0">
                    <td class="grid__td grid__td--name">Water Quality Certification (401)</td>
                    <td class="grid__td">WA Dept. of Ecology</td>
                    <td class="grid__td">
                      <span class="esa-badge esa-badge--info esa-badge--sm">
                        <span class="esa-badge__text">State</span>
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">401 Certification</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #f59e0b">
                        <span class="status-chip__dot"></span> Under Review
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Aug 30, 2026</td>
                    <td class="grid__td grid__td--num">3</td>
                  </tr>
                  <tr class="grid__row" data-permit-id="ecology-stormwater" tabindex="0">
                    <td class="grid__td grid__td--name">Construction Stormwater (NPDES)</td>
                    <td class="grid__td">WA Dept. of Ecology</td>
                    <td class="grid__td">
                      <span class="esa-badge esa-badge--info esa-badge--sm">
                        <span class="esa-badge__text">State</span>
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">NPDES</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #fab54f">
                        <span class="status-chip__dot"></span> In Preparation
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Jul 15, 2026</td>
                    <td class="grid__td grid__td--num">2</td>
                  </tr>
                  <tr class="grid__row" data-permit-id="wdfw-hpa" tabindex="0">
                    <td class="grid__td grid__td--name">Hydraulic Project Approval (HPA)</td>
                    <td class="grid__td">WA Dept. of Fish &amp; Wildlife</td>
                    <td class="grid__td">
                      <span class="esa-badge esa-badge--info esa-badge--sm">
                        <span class="esa-badge__text">State</span>
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">HPA</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #f59e0b">
                        <span class="status-chip__dot"></span> Under Review
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Aug 10, 2026</td>
                    <td class="grid__td grid__td--num">2</td>
                  </tr>
                  <tr class="grid__row" data-permit-id="wa-dnr" tabindex="0">
                    <td class="grid__td grid__td--name">Aquatic Lands Use Authorization</td>
                    <td class="grid__td">WA Dept. of Natural Resources</td>
                    <td class="grid__td">
                      <span class="esa-badge esa-badge--info esa-badge--sm">
                        <span class="esa-badge__text">State</span>
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Aquatic Lands</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #22c55e">
                        <span class="status-chip__dot"></span> Issued
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Jun 1, 2026</td>
                    <td class="grid__td grid__td--num">10</td>
                  </tr>
                  <tr class="grid__row" data-permit-id="sepa-walla-walla" tabindex="0">
                    <td class="grid__td grid__td--name">SEPA Environmental Review</td>
                    <td class="grid__td">Walla Walla County (Lead Agency)</td>
                    <td class="grid__td">
                      <span class="esa-badge esa-badge--secondary esa-badge--sm">
                        <span class="esa-badge__text">Local</span>
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">SEPA</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #22c55e">
                        <span class="status-chip__dot"></span> Issued
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Apr 22, 2026</td>
                    <td class="grid__td grid__td--num">10</td>
                  </tr>
                  <tr class="grid__row" data-permit-id="ww-county-row" tabindex="0">
                    <td class="grid__td grid__td--name">County Right-of-Way Permit</td>
                    <td class="grid__td">Walla Walla County Public Works</td>
                    <td class="grid__td">
                      <span class="esa-badge esa-badge--secondary esa-badge--sm">
                        <span class="esa-badge__text">Local</span>
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Right-of-Way</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #22c55e">
                        <span class="status-chip__dot"></span> Issued
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Jun 2, 2026</td>
                    <td class="grid__td grid__td--num">2</td>
                  </tr>
                  <tr class="grid__row" data-permit-id="franchise" tabindex="0">
                    <td class="grid__td grid__td--name">Franchise Agreement</td>
                    <td class="grid__td">Walla Walla County</td>
                    <td class="grid__td">
                      <span class="esa-badge esa-badge--secondary esa-badge--sm">
                        <span class="esa-badge__text">Local</span>
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Franchise</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #bdbdbd">
                        <span class="status-chip__dot"></span> Not Started
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Oct 15, 2026</td>
                    <td class="grid__td grid__td--num">1</td>
                  </tr>
                  <tr class="grid__row" data-permit-id="shoreline-ssd" tabindex="0">
                    <td class="grid__td grid__td--name">Shoreline Substantial Development / CUP</td>
                    <td class="grid__td">Walla Walla County</td>
                    <td class="grid__td">
                      <span class="esa-badge esa-badge--secondary esa-badge--sm">
                        <span class="esa-badge__text">Local</span>
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Shoreline</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #699cc6">
                        <span class="status-chip__dot"></span> Submitted
                      </span>
                    </td>
                    <td class="grid__td grid__td--muted">Sep 5, 2026</td>
                    <td class="grid__td grid__td--num">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="grid-wrap" id="view-segments" hidden="">
              <table class="grid">
                <thead>
                  <tr>
                    <th class="grid__th">Segment</th>
                    <th class="grid__th">Line</th>
                    <th class="grid__th">Jurisdiction</th>
                    <th class="grid__th grid__th--num">Length</th>
                    <th class="grid__th">Derived Status</th>
                    <th class="grid__th">Clear-to-Build</th>
                    <th class="grid__th grid__th--num">Permits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="grid__row grid__row--static">
                    <td class="grid__td grid__td--name">Barnes RD to SR-12</td>
                    <td class="grid__td grid__td--muted">Raul 2 — West Reach</td>
                    <td class="grid__td grid__td--muted">Walla Walla County</td>
                    <td class="grid__td grid__td--num">4,820 ft</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #22c55e">
                        <span class="status-chip__dot"></span> Cleared to Construct
                      </span>
                    </td>
                    <td class="grid__td">Jun 2, 2026</td>
                    <td class="grid__td grid__td--num">4</td>
                  </tr>
                  <tr class="grid__row grid__row--static">
                    <td class="grid__td grid__td--name">SR-12 / Lowden Junction</td>
                    <td class="grid__td grid__td--muted">Raul 2 — West Reach</td>
                    <td class="grid__td grid__td--muted">WSDOT</td>
                    <td class="grid__td grid__td--num">3,180 ft</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #fab54f">
                        <span class="status-chip__dot"></span> In Preparation
                      </span>
                    </td>
                    <td class="grid__td">Jul 20, 2026</td>
                    <td class="grid__td grid__td--num">4</td>
                  </tr>
                  <tr class="grid__row grid__row--static">
                    <td class="grid__td grid__td--name">Touchet River Crossing</td>
                    <td class="grid__td grid__td--muted">Raul 2 — West Reach</td>
                    <td class="grid__td grid__td--muted">WA Ecology / WDFW</td>
                    <td class="grid__td grid__td--num">2,240 ft</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #f59e0b">
                        <span class="status-chip__dot"></span> Under Review
                      </span>
                    </td>
                    <td class="grid__td">Aug 30, 2026</td>
                    <td class="grid__td grid__td--num">5</td>
                  </tr>
                  <tr class="grid__row grid__row--static">
                    <td class="grid__td grid__td--name">Ash Hollow RD to PDX</td>
                    <td class="grid__td grid__td--muted">Raul 2 — Central Reach</td>
                    <td class="grid__td grid__td--muted">Walla Walla County</td>
                    <td class="grid__td grid__td--num">5,310 ft</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #fab54f">
                        <span class="status-chip__dot"></span> In Preparation
                      </span>
                    </td>
                    <td class="grid__td">Jul 15, 2026</td>
                    <td class="grid__td grid__td--num">4</td>
                  </tr>
                  <tr class="grid__row grid__row--static">
                    <td class="grid__td grid__td--name">US-12 / McNary Refuge</td>
                    <td class="grid__td grid__td--muted">Raul 2 — Central Reach</td>
                    <td class="grid__td grid__td--muted">USFWS Refuge</td>
                    <td class="grid__td grid__td--num">3,940 ft</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #22c55e">
                        <span class="status-chip__dot"></span> Cleared to Construct
                      </span>
                    </td>
                    <td class="grid__td">Jun 1, 2026</td>
                    <td class="grid__td grid__td--num">4</td>
                  </tr>
                  <tr class="grid__row grid__row--static">
                    <td class="grid__td grid__td--name">McNary to Frenchtown</td>
                    <td class="grid__td grid__td--muted">Raul 2 — Central Reach</td>
                    <td class="grid__td grid__td--muted">Walla Walla County</td>
                    <td class="grid__td grid__td--num">2,670 ft</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #22c55e">
                        <span class="status-chip__dot"></span> Cleared to Construct
                      </span>
                    </td>
                    <td class="grid__td">Jun 2, 2026</td>
                    <td class="grid__td grid__td--num">4</td>
                  </tr>
                  <tr class="grid__row grid__row--static">
                    <td class="grid__td grid__td--name">Frenchtown Shoreline Reach</td>
                    <td class="grid__td grid__td--muted">Raul 2 — East Reach</td>
                    <td class="grid__td grid__td--muted">Walla Walla County (Shoreline)</td>
                    <td class="grid__td grid__td--num">3,120 ft</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #699cc6">
                        <span class="status-chip__dot"></span> Submitted
                      </span>
                    </td>
                    <td class="grid__td">Sep 5, 2026</td>
                    <td class="grid__td grid__td--num">5</td>
                  </tr>
                  <tr class="grid__row grid__row--static">
                    <td class="grid__td grid__td--name">Frenchtown to Dixie RD</td>
                    <td class="grid__td grid__td--muted">Raul 2 — East Reach</td>
                    <td class="grid__td grid__td--muted">WSDOT</td>
                    <td class="grid__td grid__td--num">4,480 ft</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #fab54f">
                        <span class="status-chip__dot"></span> In Preparation
                      </span>
                    </td>
                    <td class="grid__td">Jul 20, 2026</td>
                    <td class="grid__td grid__td--num">5</td>
                  </tr>
                  <tr class="grid__row grid__row--static">
                    <td class="grid__td grid__td--name">Dixie RD Tie-In</td>
                    <td class="grid__td grid__td--muted">Raul 2 — East Reach</td>
                    <td class="grid__td grid__td--muted">Walla Walla County</td>
                    <td class="grid__td grid__td--num">2,050 ft</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #bdbdbd">
                        <span class="status-chip__dot"></span> Not Started
                      </span>
                    </td>
                    <td class="grid__td">Oct 15, 2026</td>
                    <td class="grid__td grid__td--num">3</td>
                  </tr>
                  <tr class="grid__row grid__row--static">
                    <td class="grid__td grid__td--name">East Terminus / Mill Creek</td>
                    <td class="grid__td grid__td--muted">Raul 2 — East Reach</td>
                    <td class="grid__td grid__td--muted">WA Ecology / WDFW</td>
                    <td class="grid__td grid__td--num">1,760 ft</td>
                    <td class="grid__td">
                      <span class="status-chip" style="--_chip: #f59e0b">
                        <span class="status-chip__dot"></span> Under Review
                      </span>
                    </td>
                    <td class="grid__td">Aug 30, 2026</td>
                    <td class="grid__td grid__td--num">5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      <div class="drawer-backdrop" id="drawer-backdrop" hidden=""></div>
      <aside
        class="permit-drawer"
        id="permit-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pd-title"
        hidden=""
      >
        <header class="permit-drawer__header">
          <div class="permit-drawer__header-main">
            <span class="permit-drawer__eyebrow" id="pd-agency"></span>
            <h2 class="permit-drawer__title" id="pd-title"></h2>
          </div>
          <button
            type="button"
            class="permit-drawer__close"
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
        <div class="permit-drawer__body">
          <div class="esa-form-field esa-form-field--md">
            <label class="esa-form-field__label"> Status </label>
            <div class="esa-form-field__input">
              <select class="pd-input" id="pd-status">
                <option value="not-started">Not Started</option>
                <option value="in-preparation">In Preparation</option>
                <option value="submitted">Submitted</option>
                <option value="under-review">Under Review</option>
                <option value="issued">Issued</option>
                <option value="not-required">Not Required</option>
              </select>
            </div>
          </div>
          <div class="pd-row">
            <div class="esa-form-field esa-form-field--md">
              <label class="esa-form-field__label"> Submitted date </label>
              <div class="esa-form-field__input">
                <input type="date" class="pd-input" id="pd-submitted" />
              </div>
            </div>
            <div class="esa-form-field esa-form-field--md">
              <label class="esa-form-field__label"> Estimated approval </label>
              <div class="esa-form-field__input">
                <input type="date" class="pd-input" id="pd-estimated" />
              </div>
            </div>
          </div>
          <div class="pd-row">
            <div class="esa-form-field esa-form-field--md">
              <label class="esa-form-field__label"> Actual approval </label>
              <div class="esa-form-field__input">
                <input type="date" class="pd-input" id="pd-actual" />
              </div>
            </div>
            <div class="esa-form-field esa-form-field--md">
              <label class="esa-form-field__label"> Agency </label>
              <div class="esa-form-field__input">
                <input type="text" class="pd-input" id="pd-agency-input" />
              </div>
            </div>
          </div>
          <div class="esa-form-field esa-form-field--md">
            <label class="esa-form-field__label"> Permit type </label>
            <div class="esa-form-field__input">
              <input type="text" class="pd-input" id="pd-type" />
            </div>
          </div>
          <div class="pd-applicability">
            <span class="pd-applicability__label">Segment applicability</span>
            <ul class="pd-checklist" id="pd-segments">
              <li class="pd-check">
                <label class="pd-check__label">
                  <input type="checkbox" class="pd-check__box" value="seg-01" />
                  <span class="pd-check__name">Barnes RD to SR-12</span>
                  <span class="pd-check__line">Raul 2 — West Reach</span>
                </label>
              </li>
              <li class="pd-check">
                <label class="pd-check__label">
                  <input type="checkbox" class="pd-check__box" value="seg-02" />
                  <span class="pd-check__name">SR-12 / Lowden Junction</span>
                  <span class="pd-check__line">Raul 2 — West Reach</span>
                </label>
              </li>
              <li class="pd-check">
                <label class="pd-check__label">
                  <input type="checkbox" class="pd-check__box" value="seg-03" />
                  <span class="pd-check__name">Touchet River Crossing</span>
                  <span class="pd-check__line">Raul 2 — West Reach</span>
                </label>
              </li>
              <li class="pd-check">
                <label class="pd-check__label">
                  <input type="checkbox" class="pd-check__box" value="seg-04" />
                  <span class="pd-check__name">Ash Hollow RD to PDX</span>
                  <span class="pd-check__line">Raul 2 — Central Reach</span>
                </label>
              </li>
              <li class="pd-check">
                <label class="pd-check__label">
                  <input type="checkbox" class="pd-check__box" value="seg-05" />
                  <span class="pd-check__name">US-12 / McNary Refuge</span>
                  <span class="pd-check__line">Raul 2 — Central Reach</span>
                </label>
              </li>
              <li class="pd-check">
                <label class="pd-check__label">
                  <input type="checkbox" class="pd-check__box" value="seg-06" />
                  <span class="pd-check__name">McNary to Frenchtown</span>
                  <span class="pd-check__line">Raul 2 — Central Reach</span>
                </label>
              </li>
              <li class="pd-check">
                <label class="pd-check__label">
                  <input type="checkbox" class="pd-check__box" value="seg-07" />
                  <span class="pd-check__name">Frenchtown Shoreline Reach</span>
                  <span class="pd-check__line">Raul 2 — East Reach</span>
                </label>
              </li>
              <li class="pd-check">
                <label class="pd-check__label">
                  <input type="checkbox" class="pd-check__box" value="seg-08" />
                  <span class="pd-check__name">Frenchtown to Dixie RD</span>
                  <span class="pd-check__line">Raul 2 — East Reach</span>
                </label>
              </li>
              <li class="pd-check">
                <label class="pd-check__label">
                  <input type="checkbox" class="pd-check__box" value="seg-09" />
                  <span class="pd-check__name">Dixie RD Tie-In</span>
                  <span class="pd-check__line">Raul 2 — East Reach</span>
                </label>
              </li>
              <li class="pd-check">
                <label class="pd-check__label">
                  <input type="checkbox" class="pd-check__box" value="seg-10" />
                  <span class="pd-check__name">East Terminus / Mill Creek</span>
                  <span class="pd-check__line">Raul 2 — East Reach</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <footer class="permit-drawer__footer">
          <span id="drawer-cancel" class="pd-action"
            ><span
              class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Cancel </span>
              </button>
            </span>
          </span>
          <span id="drawer-save" class="pd-action"
            ><span
              class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--sm"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Save </span>
              </button>
            </span>
          </span>
        </footer>
      </aside>
      <script type="application/json" id="drawer-data">
        [
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
              "seg-01",
              "seg-02",
              "seg-03",
              "seg-04",
              "seg-05",
              "seg-06",
              "seg-07",
              "seg-08",
              "seg-10"
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
            "segmentIds": ["seg-05"]
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
            "segmentIds": ["seg-02", "seg-08"]
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
            "segmentIds": ["seg-03", "seg-07", "seg-10"]
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
            "segmentIds": ["seg-04", "seg-08"]
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
            "segmentIds": ["seg-03", "seg-10"]
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
            "segmentIds": [
              "seg-01",
              "seg-02",
              "seg-03",
              "seg-04",
              "seg-05",
              "seg-06",
              "seg-07",
              "seg-08",
              "seg-09",
              "seg-10"
            ]
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
              "seg-01",
              "seg-02",
              "seg-03",
              "seg-04",
              "seg-05",
              "seg-06",
              "seg-07",
              "seg-08",
              "seg-09",
              "seg-10"
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
            "segmentIds": ["seg-01", "seg-06"]
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
            "segmentIds": ["seg-09"]
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
            "segmentIds": ["seg-07"]
          }
        ]
      </script>
    </div>
  </div>
</div>
```

## Styles (only what this section uses; tokens resolved for the theme)
```css
.pt-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-400);
  flex-wrap: wrap;
  margin-bottom: var(--spacing-400);
}
.pt-pivot {
  display: inline-flex;
  padding: var(--spacing-050);
  background: var(--bcn-gray-100);
  border-radius: var(--radius-300);
}
.pt-pivot__btn {
  padding: var(--spacing-150) var(--spacing-400);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  border-radius: var(--radius-200);
  transition:
    background 0.15s ease,
    color 0.15s ease;
}
.pt-pivot__btn.is-active {
  background: var(--color-surface);
  color: var(--color-primary);
  box-shadow: var(--shadow-100, 0 1px 2px rgba(0, 0, 0, 0.08));
}
.pt-filters {
  display: flex;
  align-items: center;
  gap: var(--filter-container-gap);
  flex-wrap: wrap;
}
.pt-filter-label {
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
}
.pt-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--filter-pill-padding);
  background: var(--filter-pill-bg);
  color: var(--filter-pill-text);
  border-radius: var(--filter-pill-radius);
  font-size: var(--filter-pill-font-size);
  font-weight: var(--font-weight-medium);
}
.pt-pill__x {
  display: inline-flex;
  align-items: center;
  color: var(--filter-pill-remove-color);
  transition: color 0.15s ease;
}
.pt-filter-clear {
  font-size: var(--type-size-100);
  color: var(--filter-clear-color);
  transition: color 0.15s ease;
}
.grid-wrap {
  border: var(--grid-header-border);
  border-radius: var(--grid-radius);
  overflow: hidden;
  background: var(--grid-row-bg);
}
.grid {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--grid-row-font-size);
}
.grid__th {
  text-align: left;
  padding: var(--grid-cell-padding);
  background: var(--grid-header-bg);
  color: var(--grid-header-color);
  font-weight: var(--grid-header-weight);
  font-size: var(--grid-header-font-size);
  border-bottom: var(--grid-header-border);
  white-space: nowrap;
}
.grid__th--sortable {
  cursor: pointer;
  user-select: none;
}
.grid__th--sortable .esa-icon {
  display: inline-flex;
  vertical-align: middle;
  margin-left: var(--spacing-100);
  color: var(--color-text-tertiary);
}
.grid__th--num {
  text-align: right;
}
.grid__row {
  cursor: pointer;
  transition: background 0.12s ease;
}
.grid__td {
  padding: var(--grid-cell-padding);
  border-bottom: var(--grid-row-border);
  color: var(--color-text-primary);
  vertical-align: middle;
}
.grid__td--name {
  font-weight: var(--font-weight-semibold);
}
.esa-badge {
  --_badge-bg: var(--color-primary, #005862);
  --_badge-text: var(--color-text-inverse, #fff);
  --_badge-height: 20px;
  --_badge-font-size: 11px;
  --_badge-padding-x: 6px;
  --_badge-min-width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--_badge-height);
  min-width: var(--_badge-min-width);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-full, 9999px);
  background: var(--_badge-bg);
  color: var(--_badge-text);
  font-size: var(--_badge-font-size);
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  box-sizing: border-box;
}
.esa-badge--sm {
  --_badge-height: 16px;
  --_badge-font-size: 10px;
  --_badge-padding-x: 4px;
  --_badge-min-width: 16px;
}
.grid__td--muted {
  color: var(--color-text-secondary);
}
.status-chip {
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
.status-chip__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
}
.grid__td--num {
  text-align: right;
  font-variant-numeric: tabular-nums;
  color: var(--color-text-secondary);
}
.esa-badge--info {
  --_badge-bg: var(--color-info, #3b82f6);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-secondary, #0d9488);
}
.grid__row:last-child .grid__td {
  border-bottom: 0;
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
.permit-drawer {
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
.permit-drawer[hidden] {
  display: none;
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
.page-layout__utilities {
  display: flex;
  gap: var(--spacing-200);
}
.page-layout__content {
  padding: var(--spacing-500) 0;
  min-height: 70vh;
  position: relative;
}
.esa-button {
  --_btn-height: var(--form-height-md, 40px);
  --_btn-padding-x: var(--form-padding-x-md, 16px);
  --_btn-font-size: var(--form-font-size-md, 14px);
  --_btn-radius: var(--form-radius-md, 6px);
  --_accent: var(--color-primary, #005862);
  --_accent-hover: var(--color-primary-hover, #004752);
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
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
.esa-button__label {
  white-space: nowrap;
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
| `--color-info` | `#228be6` | semantic |
| `--color-primary` | `#005862` | semantic |
| `--color-primary-hover` | `#00474f` | semantic |
| `--color-secondary` | `#00918b` | semantic |
| `--color-surface` | `#ffffff` | semantic |
| `--color-text-inverse` | `#ffffff` | semantic |
| `--color-text-primary` | `#3d3d3d` | semantic |
| `--color-text-secondary` | `#525252` | semantic |
| `--color-text-tertiary` | `#656565` | semantic |
| `--filter-clear-color` | `#7c7c7c` | component |
| `--filter-container-gap` | `.5rem` | component |
| `--filter-pill-bg` | `color-mix(in srgb, #005862 8%, transparent)` | component |
| `--filter-pill-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | component |
| `--filter-pill-padding` | `.25rem .625rem` | component |
| `--filter-pill-radius` | `9999px` | component |
| `--filter-pill-remove-color` | `#7c7c7c` | component |
| `--filter-pill-text` | `#005862` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-sans` | `"DM Sans", sans-serif` | primitive |
| `--font-weight-bold` | `650` | primitive |
| `--font-weight-medium` | `450` | primitive |
| `--font-weight-semibold` | `550` | primitive |
| `--form-font-size-md` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | component |
| `--form-font-size-sm` | `clamp(.625rem, .56rem + .32vw, .75rem)` | component |
| `--form-height-md` | `36px` | component |
| `--form-height-sm` | `28px` | component |
| `--form-padding-x-md` | `.75rem` | component |
| `--form-padding-x-sm` | `.625rem` | component |
| `--form-radius-md` | `.25rem` | component |
| `--form-radius-sm` | `.25rem` | component |
| `--grid-cell-padding` | `.5rem .75rem` | component |
| `--grid-header-bg` | `#fafafa` | component |
| `--grid-header-border` | `1px solid #dcdcdc` | component |
| `--grid-header-color` | `#3d3d3d` | component |
| `--grid-header-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | component |
| `--grid-header-weight` | `550` | component |
| `--grid-radius` | `.5rem` | component |
| `--grid-row-bg` | `#ffffff` | component |
| `--grid-row-border` | `1px solid #efefef` | component |
| `--grid-row-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | component |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-400` | `.75rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--shadow-100` | `0 2px 12px 0 rgba(0, 0, 0, .04)` | primitive |
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
| `--transition-fast` | `.15s ease` | primitive |
| `--type-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--type-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
