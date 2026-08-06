# Compliance Dashboard

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-monitoring-compliance-dashboard** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/monitoring/compliance-dashboard/
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
        <span>Solterra Energy Partners</span>
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
          <span class="project-switcher__name">Cottonwood Solar + Storage Project</span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
              width="16"
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
          <a href="#project" class="nav-section__header nav-section__header--link">
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
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
              <a
                href="/beacon-design/prototypes/monitoring/compliance-dashboard"
                class="nav-sublink active"
              >
                Compliance Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a
                href="/beacon-design/prototypes/monitoring/compliance-observations"
                class="nav-sublink"
              >
                Observations
              </a>
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
            <span class="nav-section__title">Admin</span>
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
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
              <a href="#dashboard-widgets" class="nav-sublink"> Dashboard Widgets </a>
            </li>
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
                <a class="breadcrumb-item" href="#project"> Cottonwood Solar + Storage Project </a
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
                <span class="breadcrumb-item"> Monitoring Portal </span
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
                <span class="breadcrumb-item" aria-current="page"> Compliance Dashboard </span>
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
                Compliance Dashboard
              </h1>
            </div>
          </section>
          <section class="page-layout__content">
            <div class="stack" data-gap="xl">
              <div class="esa-card">
                <div class="esa-card__header">
                  <div class="esa-card__header-content">
                    <div class="esa-card__titles">
                      <h3 class="esa-card__title">Severity Overview</h3>
                      <p class="esa-card__subtitle">
                        Active observations by compliance severity — select a segment to open that
                        filtered list
                      </p>
                    </div>
                  </div>
                </div>
                <div class="esa-card__body">
                  <div
                    class="bcn-ohero cluster"
                    data-gap="xl"
                    data-align="start"
                    data-justify="between"
                  >
                    <!-- ── Clickable severity donut + legend ── -->
                    <section class="stack" data-gap="xs">
                      <h4 class="bcn-ohero__section-title type-card-title">
                        Yesterday's Observations
                      </h4>
                      <div class="cluster" data-gap="lg" data-align="center">
                        <div class="bcn-ohero__donut">
                          <svg
                            class="bcn-ohero__ring"
                            viewBox="0 0 42 42"
                            role="group"
                            aria-label="Active observations by severity"
                          >
                            <circle
                              class="bcn-ohero__track"
                              cx="21"
                              cy="21"
                              r="15.915"
                              fill="transparent"
                              stroke-width="6"
                            ></circle>
                            <a
                              class="bcn-ohero__seg"
                              href="/beacon-design/prototypes/monitoring/compliance-observations?severity=in-compliance"
                              aria-label="In Compliance: 6 (38%) — open the filtered list"
                            >
                              <circle
                                cx="21"
                                cy="21"
                                r="15.915"
                                fill="transparent"
                                stroke-width="6"
                                stroke-dasharray="37.500 62.500"
                                stroke-dashoffset="0.000"
                                style="stroke: var(--color-success)"
                              >
                                <title>In Compliance: 6 (38%)</title>
                              </circle>
                            </a>
                            <a
                              class="bcn-ohero__seg"
                              href="/beacon-design/prototypes/monitoring/compliance-observations?severity=needs-attention"
                              aria-label="Needs Attention: 7 (44%) — open the filtered list"
                            >
                              <circle
                                cx="21"
                                cy="21"
                                r="15.915"
                                fill="transparent"
                                stroke-width="6"
                                stroke-dasharray="43.750 56.250"
                                stroke-dashoffset="-37.500"
                                style="stroke: var(--color-warning)"
                              >
                                <title>Needs Attention: 7 (44%)</title>
                              </circle>
                            </a>
                            <a
                              class="bcn-ohero__seg"
                              href="/beacon-design/prototypes/monitoring/compliance-observations?severity=non-compliance"
                              aria-label="Non-Compliance: 3 (19%) — open the filtered list"
                            >
                              <circle
                                cx="21"
                                cy="21"
                                r="15.915"
                                fill="transparent"
                                stroke-width="6"
                                stroke-dasharray="18.750 81.250"
                                stroke-dashoffset="-81.250"
                                style="stroke: var(--color-danger)"
                              >
                                <title>Non-Compliance: 3 (19%)</title>
                              </circle>
                            </a>
                          </svg>
                          <a
                            class="bcn-ohero__hole"
                            href="/beacon-design/prototypes/monitoring/compliance-observations"
                          >
                            <span class="bcn-ohero__hole-value">16</span>
                            <span class="bcn-ohero__hole-cap type-caption">active</span>
                          </a>
                        </div>
                        <ul class="bcn-ohero__legend stack" data-gap="2xs">
                          <li>
                            <a
                              class="bcn-ohero__legend-row"
                              href="/beacon-design/prototypes/monitoring/compliance-observations?severity=in-compliance"
                            >
                              <span
                                class="bcn-ohero__dot"
                                style="--_c: var(--color-success)"
                              ></span>
                              <span class="bcn-ohero__legend-label type-body-small"
                                >In Compliance</span
                              >
                              <span class="bcn-ohero__legend-value type-label">6</span>
                            </a>
                          </li>
                          <li>
                            <a
                              class="bcn-ohero__legend-row"
                              href="/beacon-design/prototypes/monitoring/compliance-observations?severity=needs-attention"
                            >
                              <span
                                class="bcn-ohero__dot"
                                style="--_c: var(--color-warning)"
                              ></span>
                              <span class="bcn-ohero__legend-label type-body-small"
                                >Needs Attention</span
                              >
                              <span class="bcn-ohero__legend-value type-label">7</span>
                            </a>
                          </li>
                          <li>
                            <a
                              class="bcn-ohero__legend-row"
                              href="/beacon-design/prototypes/monitoring/compliance-observations?severity=non-compliance"
                            >
                              <span class="bcn-ohero__dot" style="--_c: var(--color-danger)"></span>
                              <span class="bcn-ohero__legend-label type-body-small"
                                >Non-Compliance</span
                              >
                              <span class="bcn-ohero__legend-value type-label">3</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </section>
                    <!-- ── Two category count lists, by severity ── -->
                    <div class="bcn-ohero__breakdowns cluster" data-gap="xl" data-align="start">
                      <section class="stack" data-gap="xs">
                        <h4 class="bcn-ohero__section-title type-card-title">
                          Needs Attention by Category
                        </h4>
                        <ul class="bcn-ohero__counts stack" data-gap="2xs">
                          <li class="bcn-ohero__count-row">
                            <span class="bcn-ohero__count-label type-body-small"
                              >Access &amp; Traffic Control</span
                            >
                            <span class="bcn-ohero__count-value type-label">2</span>
                          </li>
                          <li class="bcn-ohero__count-row">
                            <span class="bcn-ohero__count-label type-body-small"
                              >Erosion &amp; Sediment Control</span
                            >
                            <span class="bcn-ohero__count-value type-label">1</span>
                          </li>
                          <li class="bcn-ohero__count-row">
                            <span class="bcn-ohero__count-label type-body-small"
                              >Waste Management</span
                            >
                            <span class="bcn-ohero__count-value type-label">1</span>
                          </li>
                          <li class="bcn-ohero__count-row">
                            <span class="bcn-ohero__count-label type-body-small"
                              >Vegetation &amp; Habitat Protection</span
                            >
                            <span class="bcn-ohero__count-value type-label">1</span>
                          </li>
                          <li class="bcn-ohero__count-row">
                            <span class="bcn-ohero__count-label type-body-small"
                              >Noise Management</span
                            >
                            <span class="bcn-ohero__count-value type-label">1</span>
                          </li>
                          <li class="bcn-ohero__count-row">
                            <span class="bcn-ohero__count-label type-body-small"
                              >Stormwater / BMP Maintenance</span
                            >
                            <span class="bcn-ohero__count-value type-label">1</span>
                          </li>
                        </ul>
                      </section>
                      <section class="stack" data-gap="xs">
                        <h4 class="bcn-ohero__section-title type-card-title">
                          Non-Compliance by Category
                        </h4>
                        <ul class="bcn-ohero__counts stack" data-gap="2xs">
                          <li class="bcn-ohero__count-row">
                            <span class="bcn-ohero__count-label type-body-small"
                              >Stormwater / BMP Maintenance</span
                            >
                            <span class="bcn-ohero__count-value type-label">1</span>
                          </li>
                          <li class="bcn-ohero__count-row">
                            <span class="bcn-ohero__count-label type-body-small"
                              >Spill Prevention &amp; Response</span
                            >
                            <span class="bcn-ohero__count-value type-label">1</span>
                          </li>
                          <li class="bcn-ohero__count-row">
                            <span class="bcn-ohero__count-label type-body-small"
                              >Cultural Resources Protection</span
                            >
                            <span class="bcn-ohero__count-value type-label">1</span>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              <div class="esa-card">
                <div class="esa-card__header">
                  <div class="esa-card__header-content">
                    <div class="esa-card__titles">
                      <h3 class="esa-card__title">Needs Attention &amp; Non-Compliance</h3>
                    </div>
                  </div>
                  <div class="esa-card__actions">
                    <span
                      class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
                    >
                      <button class="esa-button__native" type="button" id="ap-export-csv">
                        <span class="esa-icon esa-icon--sm" aria-hidden="true">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="M12 5v14"></path>
                            <path d="m19 12-7 7-7-7"></path>
                          </svg>
                        </span>
                        <span class="esa-button__label"> Export spreadsheet </span>
                      </button>
                    </span>
                    <span
                      class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
                    >
                      <button class="esa-button__native" type="button" id="ap-export-kml">
                        <span class="esa-icon esa-icon--sm" aria-hidden="true">
                          <svg
                            width="16"
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
                        <span class="esa-button__label"> Export KMZ </span>
                      </button>
                    </span>
                  </div>
                </div>
                <div class="esa-card__body">
                  <div class="bcn-apanel__body sidebar" data-gap="lg" data-side="end">
                    <div class="bcn-apanel__inset stack" data-gap="xs">
                      <h4 class="bcn-apanel__heading type-label">Active issue locations</h4>
                      <div
                        class="bcn-obsmap leaflet-container leaflet-touch leaflet-fade-anim"
                        id="bcn-obsmap-attention-panel"
                        data-bcn-obsmap=""
                        data-map-id="attention-panel"
                        data-interactive="false"
                        style="height: 260px; position: relative"
                        role="img"
                        aria-label="Observation map — 10 observations plotted by severity"
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
                                style="z-index: 19; transform: translate3d(0px, 0px, 0px) scale(1)"
                              >
                                <img
                                  alt=""
                                  src="https://b.basemaps.cartocdn.com/light_all/13/1379/3234.png"
                                  class="leaflet-tile leaflet-tile-loaded"
                                  style="
                                    width: 256px;
                                    height: 256px;
                                    transform: translate3d(-126px, -137px, 0px);
                                    opacity: 1;
                                  "
                                /><img
                                  alt=""
                                  src="https://c.basemaps.cartocdn.com/light_all/13/1380/3234.png"
                                  class="leaflet-tile leaflet-tile-loaded"
                                  style="
                                    width: 256px;
                                    height: 256px;
                                    transform: translate3d(130px, -137px, 0px);
                                    opacity: 1;
                                  "
                                /><img
                                  alt=""
                                  src="https://c.basemaps.cartocdn.com/light_all/13/1379/3235.png"
                                  class="leaflet-tile leaflet-tile-loaded"
                                  style="
                                    width: 256px;
                                    height: 256px;
                                    transform: translate3d(-126px, 119px, 0px);
                                    opacity: 1;
                                  "
                                /><img
                                  alt=""
                                  src="https://d.basemaps.cartocdn.com/light_all/13/1380/3235.png"
                                  class="leaflet-tile leaflet-tile-loaded"
                                  style="
                                    width: 256px;
                                    height: 256px;
                                    transform: translate3d(130px, 119px, 0px);
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
                              width="364"
                              height="310"
                              viewBox="-30 -26 364 310"
                              style="transform: translate3d(-30.1367px, -25.6938px, 0px) scale(1)"
                            >
                              <g>
                                <path
                                  class="leaflet-interactive"
                                  stroke="#fcfcfc"
                                  stroke-opacity="1"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  fill="#e5484d"
                                  fill-opacity="0.9"
                                  fill-rule="evenodd"
                                  d="M51,91a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                                ></path>
                                <path
                                  class="leaflet-interactive"
                                  stroke="#fcfcfc"
                                  stroke-opacity="1"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  fill="#e5484d"
                                  fill-opacity="0.9"
                                  fill-rule="evenodd"
                                  d="M126,181a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                                ></path>
                                <path
                                  class="leaflet-interactive"
                                  stroke="#fcfcfc"
                                  stroke-opacity="1"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  fill="#e5484d"
                                  fill-opacity="0.9"
                                  fill-rule="evenodd"
                                  d="M162,226a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
                                  d="M90,70a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
                                  d="M238,201a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
                                  d="M192,143a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
                                  d="M212,134a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
                                  d="M175,123a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
                                  d="M90,70a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
                                  d="M143,32a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
                            style="transform: translate3d(353302px, 828170px, 0px) scale(4096)"
                          ></div>
                        </div>
                        <div class="leaflet-control-container">
                          <div class="leaflet-top leaflet-left"></div>
                          <div class="leaflet-top leaflet-right"></div>
                          <div class="leaflet-bottom leaflet-left"></div>
                          <div class="leaflet-bottom leaflet-right"></div>
                        </div>
                      </div>
                      <script type="application/json" data-bcn-obsmap-data="attention-panel">
                        [
                          {
                            "id": "obs-0121",
                            "lat": 35.3572,
                            "lng": -119.3678,
                            "label": "obs-0121 — Cultural Resources Protection",
                            "hex": "var(--color-danger)"
                          },
                          {
                            "id": "obs-0139",
                            "lat": 35.3445,
                            "lng": -119.3549,
                            "label": "obs-0139 — Spill Prevention & Response",
                            "hex": "var(--color-danger)"
                          },
                          {
                            "id": "obs-0142",
                            "lat": 35.3382,
                            "lng": -119.3488,
                            "label": "obs-0142 — Stormwater / BMP Maintenance",
                            "hex": "var(--color-danger)"
                          },
                          {
                            "id": "obs-0113",
                            "lat": 35.3601,
                            "lng": -119.3612,
                            "label": "obs-0113 — Access & Traffic Control",
                            "hex": "var(--color-warning)"
                          },
                          {
                            "id": "obs-0118",
                            "lat": 35.3418,
                            "lng": -119.3357,
                            "label": "obs-0118 — Stormwater / BMP Maintenance",
                            "hex": "var(--color-warning)"
                          },
                          {
                            "id": "obs-0126",
                            "lat": 35.3499,
                            "lng": -119.3437,
                            "label": "obs-0126 — Noise Management",
                            "hex": "var(--color-warning)"
                          },
                          {
                            "id": "obs-0130",
                            "lat": 35.3511,
                            "lng": -119.3402,
                            "label": "obs-0130 — Vegetation & Habitat Protection",
                            "hex": "var(--color-warning)"
                          },
                          {
                            "id": "obs-0136",
                            "lat": 35.3527,
                            "lng": -119.3465,
                            "label": "obs-0136 — Waste Management",
                            "hex": "var(--color-warning)"
                          },
                          {
                            "id": "obs-0140",
                            "lat": 35.3601,
                            "lng": -119.3612,
                            "label": "obs-0140 — Access & Traffic Control",
                            "hex": "var(--color-warning)"
                          },
                          {
                            "id": "obs-0144",
                            "lat": 35.3654,
                            "lng": -119.3521,
                            "label": "obs-0144 — Erosion & Sediment Control",
                            "hex": "var(--color-warning)"
                          }
                        ]
                      </script>
                      <script
                        type="module"
                        src="/beacon-design/_astro/BcnObservationMap.astro_astro_type_script_index_0_lang.CaGBcxyZ.js"
                      ></script>
                    </div>
                    <section class="bcn-apanel__outstanding stack" data-gap="sm">
                      <h4 class="bcn-apanel__heading type-label">Outstanding items (10)</h4>
                      <ul class="bcn-apanel__list stack" data-gap="2xs">
                        <li class="bcn-apanel__row">
                          <a
                            class="bcn-apanel__id"
                            href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0121"
                            >obs-0121</a
                          >
                          <span
                            class="bcn-status-chip"
                            data-status="non-compliance"
                            style="--_chip: var(--st-non-compliance, var(--color-danger))"
                          >
                            <span class="bcn-status-chip__dot"></span>
                            <span class="bcn-status-chip__label">Non-Compliance</span>
                          </span>
                          <span class="bcn-apanel__category type-body-small"
                            >Cultural Resources Protection</span
                          >
                          <span class="bcn-apanel__area type-body-small"
                            >Perimeter Fence Line — West</span
                          >
                          <span class="esa-badge esa-badge--danger esa-badge--sm">
                            <span class="esa-badge__text">25d active</span>
                          </span>
                        </li>
                        <li class="bcn-apanel__row">
                          <a
                            class="bcn-apanel__id"
                            href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0139"
                            >obs-0139</a
                          >
                          <span
                            class="bcn-status-chip"
                            data-status="non-compliance"
                            style="--_chip: var(--st-non-compliance, var(--color-danger))"
                          >
                            <span class="bcn-status-chip__dot"></span>
                            <span class="bcn-status-chip__label">Non-Compliance</span>
                          </span>
                          <span class="bcn-apanel__category type-body-small"
                            >Spill Prevention &amp; Response</span
                          >
                          <span class="bcn-apanel__area type-body-small"
                            >Laydown / Staging Yard</span
                          >
                          <span class="esa-badge esa-badge--danger esa-badge--sm">
                            <span class="esa-badge__text">12d active</span>
                          </span>
                        </li>
                        <li class="bcn-apanel__row">
                          <a
                            class="bcn-apanel__id"
                            href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0142"
                            >obs-0142</a
                          >
                          <span
                            class="bcn-status-chip"
                            data-status="non-compliance"
                            style="--_chip: var(--st-non-compliance, var(--color-danger))"
                          >
                            <span class="bcn-status-chip__dot"></span>
                            <span class="bcn-status-chip__label">Non-Compliance</span>
                          </span>
                          <span class="bcn-apanel__category type-body-small"
                            >Stormwater / BMP Maintenance</span
                          >
                          <span class="bcn-apanel__area type-body-small"
                            >South Array — Block B</span
                          >
                          <span class="esa-badge esa-badge--danger esa-badge--sm">
                            <span class="esa-badge__text">7d active</span>
                          </span>
                        </li>
                        <li class="bcn-apanel__row">
                          <a
                            class="bcn-apanel__id"
                            href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0113"
                            >obs-0113</a
                          >
                          <span
                            class="bcn-status-chip"
                            data-status="needs-attention"
                            style="--_chip: var(--st-needs-attention, var(--color-warning))"
                          >
                            <span class="bcn-status-chip__dot"></span>
                            <span class="bcn-status-chip__label">Needs Attention</span>
                          </span>
                          <span class="bcn-apanel__category type-body-small"
                            >Access &amp; Traffic Control</span
                          >
                          <span class="bcn-apanel__area type-body-small"
                            >Main Access Road (Hwy 58 Spur)</span
                          >
                          <span class="esa-badge esa-badge--warning esa-badge--sm">
                            <span class="esa-badge__text">33d active</span>
                          </span>
                        </li>
                        <li class="bcn-apanel__row">
                          <a
                            class="bcn-apanel__id"
                            href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0118"
                            >obs-0118</a
                          >
                          <span
                            class="bcn-status-chip"
                            data-status="needs-attention"
                            style="--_chip: var(--st-needs-attention, var(--color-warning))"
                          >
                            <span class="bcn-status-chip__dot"></span>
                            <span class="bcn-status-chip__label">Needs Attention</span>
                          </span>
                          <span class="bcn-apanel__category type-body-small"
                            >Stormwater / BMP Maintenance</span
                          >
                          <span class="bcn-apanel__area type-body-small"
                            >Cottonwood Wash Crossing</span
                          >
                          <span class="esa-badge esa-badge--warning esa-badge--sm">
                            <span class="esa-badge__text">28d active</span>
                          </span>
                        </li>
                        <li class="bcn-apanel__row">
                          <a
                            class="bcn-apanel__id"
                            href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0126"
                            >obs-0126</a
                          >
                          <span
                            class="bcn-status-chip"
                            data-status="needs-attention"
                            style="--_chip: var(--st-needs-attention, var(--color-warning))"
                          >
                            <span class="bcn-status-chip__dot"></span>
                            <span class="bcn-status-chip__label">Needs Attention</span>
                          </span>
                          <span class="bcn-apanel__category type-body-small">Noise Management</span>
                          <span class="bcn-apanel__area type-body-small">BESS Pad</span>
                          <span class="esa-badge esa-badge--warning esa-badge--sm">
                            <span class="esa-badge__text">22d active</span>
                          </span>
                        </li>
                        <li class="bcn-apanel__row">
                          <a
                            class="bcn-apanel__id"
                            href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0130"
                            >obs-0130</a
                          >
                          <span
                            class="bcn-status-chip"
                            data-status="needs-attention"
                            style="--_chip: var(--st-needs-attention, var(--color-warning))"
                          >
                            <span class="bcn-status-chip__dot"></span>
                            <span class="bcn-status-chip__label">Needs Attention</span>
                          </span>
                          <span class="bcn-apanel__category type-body-small"
                            >Vegetation &amp; Habitat Protection</span
                          >
                          <span class="bcn-apanel__area type-body-small">Substation Yard</span>
                          <span class="esa-badge esa-badge--warning esa-badge--sm">
                            <span class="esa-badge__text">20d active</span>
                          </span>
                        </li>
                        <li class="bcn-apanel__row">
                          <a
                            class="bcn-apanel__id"
                            href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0136"
                            >obs-0136</a
                          >
                          <span
                            class="bcn-status-chip"
                            data-status="needs-attention"
                            style="--_chip: var(--st-needs-attention, var(--color-warning))"
                          >
                            <span class="bcn-status-chip__dot"></span>
                            <span class="bcn-status-chip__label">Needs Attention</span>
                          </span>
                          <span class="bcn-apanel__category type-body-small">Waste Management</span>
                          <span class="bcn-apanel__area type-body-small"
                            >O&amp;M Building Area</span
                          >
                          <span class="esa-badge esa-badge--warning esa-badge--sm">
                            <span class="esa-badge__text">16d active</span>
                          </span>
                        </li>
                        <li class="bcn-apanel__row">
                          <a
                            class="bcn-apanel__id"
                            href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0140"
                            >obs-0140</a
                          >
                          <span
                            class="bcn-status-chip"
                            data-status="needs-attention"
                            style="--_chip: var(--st-needs-attention, var(--color-warning))"
                          >
                            <span class="bcn-status-chip__dot"></span>
                            <span class="bcn-status-chip__label">Needs Attention</span>
                          </span>
                          <span class="bcn-apanel__category type-body-small"
                            >Access &amp; Traffic Control</span
                          >
                          <span class="bcn-apanel__area type-body-small"
                            >Main Access Road (Hwy 58 Spur)</span
                          >
                          <span class="esa-badge esa-badge--warning esa-badge--sm">
                            <span class="esa-badge__text">9d active</span>
                          </span>
                        </li>
                        <li class="bcn-apanel__row">
                          <a
                            class="bcn-apanel__id"
                            href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0144"
                            >obs-0144</a
                          >
                          <span
                            class="bcn-status-chip"
                            data-status="needs-attention"
                            style="--_chip: var(--st-needs-attention, var(--color-warning))"
                          >
                            <span class="bcn-status-chip__dot"></span>
                            <span class="bcn-status-chip__label">Needs Attention</span>
                          </span>
                          <span class="bcn-apanel__category type-body-small"
                            >Erosion &amp; Sediment Control</span
                          >
                          <span class="bcn-apanel__area type-body-small"
                            >North Array — Block A</span
                          >
                          <span class="esa-badge esa-badge--warning esa-badge--sm">
                            <span class="esa-badge__text">4d active</span>
                          </span>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
                <div class="esa-card__footer">
                  <div class="cluster" data-gap="sm">
                    <span
                      class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
                    >
                      <a
                        class="esa-button__native"
                        href="/beacon-design/prototypes/monitoring/compliance-observations?severity=needs-attention"
                        role="button"
                      >
                        <span class="esa-button__label"> All needs attention (7) </span>
                      </a>
                    </span>
                    <span
                      class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
                    >
                      <a
                        class="esa-button__native"
                        href="/beacon-design/prototypes/monitoring/compliance-observations?severity=non-compliance"
                        role="button"
                      >
                        <span class="esa-button__label"> All non-compliance (3) </span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <script type="application/json" id="ap-data">
                {
                  "outstanding": [
                    {
                      "id": "obs-0121",
                      "category": "Cultural Resources Protection",
                      "severity": "non-compliance",
                      "severityLabel": "Non-Compliance",
                      "severityHex": "var(--color-danger)",
                      "daysActive": 25,
                      "area": "Perimeter Fence Line — West",
                      "lat": 35.3572,
                      "lng": -119.3678
                    },
                    {
                      "id": "obs-0139",
                      "category": "Spill Prevention & Response",
                      "severity": "non-compliance",
                      "severityLabel": "Non-Compliance",
                      "severityHex": "var(--color-danger)",
                      "daysActive": 12,
                      "area": "Laydown / Staging Yard",
                      "lat": 35.3445,
                      "lng": -119.3549
                    },
                    {
                      "id": "obs-0142",
                      "category": "Stormwater / BMP Maintenance",
                      "severity": "non-compliance",
                      "severityLabel": "Non-Compliance",
                      "severityHex": "var(--color-danger)",
                      "daysActive": 7,
                      "area": "South Array — Block B",
                      "lat": 35.3382,
                      "lng": -119.3488
                    },
                    {
                      "id": "obs-0113",
                      "category": "Access & Traffic Control",
                      "severity": "needs-attention",
                      "severityLabel": "Needs Attention",
                      "severityHex": "var(--color-warning)",
                      "daysActive": 33,
                      "area": "Main Access Road (Hwy 58 Spur)",
                      "lat": 35.3601,
                      "lng": -119.3612
                    },
                    {
                      "id": "obs-0118",
                      "category": "Stormwater / BMP Maintenance",
                      "severity": "needs-attention",
                      "severityLabel": "Needs Attention",
                      "severityHex": "var(--color-warning)",
                      "daysActive": 28,
                      "area": "Cottonwood Wash Crossing",
                      "lat": 35.3418,
                      "lng": -119.3357
                    },
                    {
                      "id": "obs-0126",
                      "category": "Noise Management",
                      "severity": "needs-attention",
                      "severityLabel": "Needs Attention",
                      "severityHex": "var(--color-warning)",
                      "daysActive": 22,
                      "area": "BESS Pad",
                      "lat": 35.3499,
                      "lng": -119.3437
                    },
                    {
                      "id": "obs-0130",
                      "category": "Vegetation & Habitat Protection",
                      "severity": "needs-attention",
                      "severityLabel": "Needs Attention",
                      "severityHex": "var(--color-warning)",
                      "daysActive": 20,
                      "area": "Substation Yard",
                      "lat": 35.3511,
                      "lng": -119.3402
                    },
                    {
                      "id": "obs-0136",
                      "category": "Waste Management",
                      "severity": "needs-attention",
                      "severityLabel": "Needs Attention",
                      "severityHex": "var(--color-warning)",
                      "daysActive": 16,
                      "area": "O&M Building Area",
                      "lat": 35.3527,
                      "lng": -119.3465
                    },
                    {
                      "id": "obs-0140",
                      "category": "Access & Traffic Control",
                      "severity": "needs-attention",
                      "severityLabel": "Needs Attention",
                      "severityHex": "var(--color-warning)",
                      "daysActive": 9,
                      "area": "Main Access Road (Hwy 58 Spur)",
                      "lat": 35.3601,
                      "lng": -119.3612
                    },
                    {
                      "id": "obs-0144",
                      "category": "Erosion & Sediment Control",
                      "severity": "needs-attention",
                      "severityLabel": "Needs Attention",
                      "severityHex": "var(--color-warning)",
                      "daysActive": 4,
                      "area": "North Array — Block A",
                      "lat": 35.3654,
                      "lng": -119.3521
                    }
                  ],
                  "fileBase": "cottonwood-oversight-observations"
                }
              </script>
              <script type="module">
                const d = document.getElementById("ap-data"),
                  i = JSON.parse(d?.textContent || "{}"),
                  s = i.outstanding ?? [],
                  r = i.fileBase ?? "oversight-observations";
                function l(t, o, e) {
                  const n = URL.createObjectURL(new Blob([t], { type: e })),
                    c = document.createElement("a");
                  ((c.href = n),
                    (c.download = o),
                    document.body.appendChild(c),
                    c.click(),
                    c.remove(),
                    URL.revokeObjectURL(n));
                }
                function m(t) {
                  const o = String(t);
                  return /[",\r\n]/.test(o) ? `"${o.replace(/"/g, '""')}"` : o;
                }
                function p(t) {
                  const e = [["ID", "Category", "Severity", "Area", "Days Active"].join(",")];
                  for (const n of t)
                    e.push(
                      [n.id, n.category, n.severityLabel || n.severity, n.area, n.daysActive]
                        .map(m)
                        .join(","),
                    );
                  return e.join(`\r
`);
                }
                function a(t) {
                  return String(t)
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&apos;");
                }
                function g(t) {
                  const o = t.map(
                    (e) => `  <Placemark>
    <name>${a(e.id)}</name>
    <description>Category: ${a(e.category)}
Severity: ${a(e.severityLabel || e.severity)}
Days active: ${a(e.daysActive)}
Work area: ${a(e.area)}</description>
    <Point><coordinates>${e.lng},${e.lat},0</coordinates></Point>
  </Placemark>`,
                  ).join(`
`);
                  return `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
  <name>${a(r)}</name>
${o}
</Document>
</kml>`;
                }
                document.getElementById("ap-export-csv")?.addEventListener("click", () => {
                  l(p(s), `${r}.csv`, "text/csv;charset=utf-8");
                });
                document.getElementById("ap-export-kml")?.addEventListener("click", () => {
                  l(g(s), `${r}.kml`, "application/vnd.google-earth.kml+xml");
                });
              </script>
              <div class="esa-card">
                <div class="esa-card__header">
                  <div class="esa-card__header-content">
                    <div class="esa-card__titles">
                      <h3 class="esa-card__title">90-Day Trend</h3>
                    </div>
                  </div>
                </div>
                <div class="esa-card__body">
                  <div class="bcn-trend stack" data-gap="lg">
                    <!-- ── summary band ── -->
                    <div class="bcn-trend__stats cluster" data-gap="xl" data-align="start">
                      <div class="esa-stat">
                        <div class="esa-stat__value">10</div>
                        <div class="esa-stat__label">Still Active (90d)</div>
                        <div class="esa-stat__sub">0.8/wk average</div>
                      </div>
                      <div class="esa-stat">
                        <div class="esa-stat__value">7</div>
                        <div class="esa-stat__label">Resolved (90d)</div>
                        <div class="esa-stat__sub">0.5/wk average</div>
                      </div>
                      <div class="esa-stat">
                        <div class="esa-stat__value">+3</div>
                        <div class="esa-stat__label">Net change</div>
                        <div class="esa-stat__sub">Backlog growing</div>
                      </div>
                    </div>
                    <!-- ── weekly grouped bar chart ── -->
                    <div class="stack" data-gap="sm">
                      <ul class="bcn-trend__legend cluster" data-gap="md">
                        <li class="bcn-trend__legend-item">
                          <span class="bcn-trend__dot" style="--_c: var(--_c-active)"></span>
                          <span class="type-label">Active</span>
                        </li>
                        <li class="bcn-trend__legend-item">
                          <span class="bcn-trend__dot" style="--_c: var(--_c-resolved)"></span>
                          <span class="type-label">Resolved</span>
                        </li>
                      </ul>
                      <div class="bcn-trend__chart" style="--_cols: 13">
                        <div class="bcn-trend__yaxis type-caption" aria-hidden="true">
                          <span>3</span> <span>0</span>
                        </div>
                        <div class="bcn-trend__plot" aria-hidden="true">
                          <div class="bcn-trend__col" title="May 8 — 0 still active, 1 resolved">
                            <div class="bcn-trend__bars">
                              <span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-active); --_h: 0%"
                                data-zero=""
                              ></span
                              ><span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-resolved); --_h: 33.3%"
                              ></span>
                            </div>
                          </div>
                          <div class="bcn-trend__col" title="May 15 — 0 still active, 1 resolved">
                            <div class="bcn-trend__bars">
                              <span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-active); --_h: 0%"
                                data-zero=""
                              ></span
                              ><span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-resolved); --_h: 33.3%"
                              ></span>
                            </div>
                          </div>
                          <div class="bcn-trend__col" title="May 22 — 0 still active, 1 resolved">
                            <div class="bcn-trend__bars">
                              <span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-active); --_h: 0%"
                                data-zero=""
                              ></span
                              ><span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-resolved); --_h: 33.3%"
                              ></span>
                            </div>
                          </div>
                          <div class="bcn-trend__col" title="May 29 — 0 still active, 0 resolved">
                            <div class="bcn-trend__bars">
                              <span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-active); --_h: 0%"
                                data-zero=""
                              ></span
                              ><span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-resolved); --_h: 0%"
                                data-zero=""
                              ></span>
                            </div>
                          </div>
                          <div class="bcn-trend__col" title="Jun 5 — 0 still active, 2 resolved">
                            <div class="bcn-trend__bars">
                              <span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-active); --_h: 0%"
                                data-zero=""
                              ></span
                              ><span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-resolved); --_h: 66.7%"
                              ></span>
                            </div>
                          </div>
                          <div class="bcn-trend__col" title="Jun 12 — 0 still active, 1 resolved">
                            <div class="bcn-trend__bars">
                              <span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-active); --_h: 0%"
                                data-zero=""
                              ></span
                              ><span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-resolved); --_h: 33.3%"
                              ></span>
                            </div>
                          </div>
                          <div class="bcn-trend__col" title="Jun 19 — 0 still active, 1 resolved">
                            <div class="bcn-trend__bars">
                              <span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-active); --_h: 0%"
                                data-zero=""
                              ></span
                              ><span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-resolved); --_h: 33.3%"
                              ></span>
                            </div>
                          </div>
                          <div class="bcn-trend__col" title="Jun 26 — 0 still active, 0 resolved">
                            <div class="bcn-trend__bars">
                              <span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-active); --_h: 0%"
                                data-zero=""
                              ></span
                              ><span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-resolved); --_h: 0%"
                                data-zero=""
                              ></span>
                            </div>
                          </div>
                          <div class="bcn-trend__col" title="Jul 3 — 2 still active, 0 resolved">
                            <div class="bcn-trend__bars">
                              <span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-active); --_h: 66.7%"
                              ></span
                              ><span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-resolved); --_h: 0%"
                                data-zero=""
                              ></span>
                            </div>
                          </div>
                          <div class="bcn-trend__col" title="Jul 10 — 3 still active, 0 resolved">
                            <div class="bcn-trend__bars">
                              <span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-active); --_h: 100%"
                              ></span
                              ><span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-resolved); --_h: 0%"
                                data-zero=""
                              ></span>
                            </div>
                          </div>
                          <div class="bcn-trend__col" title="Jul 17 — 1 still active, 0 resolved">
                            <div class="bcn-trend__bars">
                              <span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-active); --_h: 33.3%"
                              ></span
                              ><span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-resolved); --_h: 0%"
                                data-zero=""
                              ></span>
                            </div>
                          </div>
                          <div class="bcn-trend__col" title="Jul 24 — 3 still active, 0 resolved">
                            <div class="bcn-trend__bars">
                              <span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-active); --_h: 100%"
                              ></span
                              ><span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-resolved); --_h: 0%"
                                data-zero=""
                              ></span>
                            </div>
                          </div>
                          <div class="bcn-trend__col" title="Jul 31 — 1 still active, 0 resolved">
                            <div class="bcn-trend__bars">
                              <span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-active); --_h: 33.3%"
                              ></span
                              ><span
                                class="bcn-trend__bar"
                                style="--_c: var(--_c-resolved); --_h: 0%"
                                data-zero=""
                              ></span>
                            </div>
                          </div>
                        </div>
                        <div class="bcn-trend__ticks" aria-hidden="true">
                          <span class="bcn-trend__tick type-caption">May 8</span
                          ><span class="bcn-trend__tick type-caption"></span
                          ><span class="bcn-trend__tick type-caption">May 22</span
                          ><span class="bcn-trend__tick type-caption"></span
                          ><span class="bcn-trend__tick type-caption">Jun 5</span
                          ><span class="bcn-trend__tick type-caption"></span
                          ><span class="bcn-trend__tick type-caption">Jun 19</span
                          ><span class="bcn-trend__tick type-caption"></span
                          ><span class="bcn-trend__tick type-caption">Jul 3</span
                          ><span class="bcn-trend__tick type-caption"></span
                          ><span class="bcn-trend__tick type-caption">Jul 17</span
                          ><span class="bcn-trend__tick type-caption"></span
                          ><span class="bcn-trend__tick type-caption">Jul 31</span>
                        </div>
                      </div>
                      <!-- The plot is aria-hidden; this table is the accessible reading of the
           same data (and the visible-values relief the low-contrast amber
           series owes against a near-white surface). -->
                      <table class="bcn-trend__table">
                        <caption>
                          Needs-attention/non-compliance observations by week first reported,
                          trailing 90 days
                        </caption>
                        <thead>
                          <tr>
                            <th scope="col">Week of</th>
                            <th scope="col">Still Active</th>
                            <th scope="col">Resolved</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">May 8</th>
                            <td>0</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <th scope="row">May 15</th>
                            <td>0</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <th scope="row">May 22</th>
                            <td>0</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <th scope="row">May 29</th>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <th scope="row">Jun 5</th>
                            <td>0</td>
                            <td>2</td>
                          </tr>
                          <tr>
                            <th scope="row">Jun 12</th>
                            <td>0</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <th scope="row">Jun 19</th>
                            <td>0</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <th scope="row">Jun 26</th>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <th scope="row">Jul 3</th>
                            <td>2</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <th scope="row">Jul 10</th>
                            <td>3</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <th scope="row">Jul 17</th>
                            <td>1</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <th scope="row">Jul 24</th>
                            <td>3</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <th scope="row">Jul 31</th>
                            <td>1</td>
                            <td>0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <span class="bcn-gd__here-page" data-gd-page="">Monitoring</span>
              <span class="bcn-gd__here-purpose" data-gd-purpose=""
                >What is happening in the field — daily reports, observations, surveys, and the
                compliance concerns they raise.</span
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
                data-article-id="qc-field-surveys"
                data-kind="howto"
                data-title="Reviewing field surveys before they count"
                data-summary="Surveys sync from field apps, but only QC-approved records drive compliance."
              >
                <span class="bcn-gd-row__text">
                  <span class="bcn-gd-row__title">Reviewing field surveys before they count</span>
                  <span class="bcn-gd-row__sub"
                    >Surveys sync from field apps, but only QC-approved records drive
                    compliance.</span
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
          data-article-id="what-is-a-component"
          data-kind="glossary"
          data-title="Component"
          data-summary="A distinct place or package of work within a project, tracked independently."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Component</span>
            <span class="bcn-gd-row__sub"
              >A distinct place or package of work within a project, tracked independently.</span
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
          data-title="How the dashboard decides what needs attention"
          data-summary="Urgency comes from action due dates, shown in the zone that owns the work."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">How the dashboard decides what needs attention</span>
            <span class="bcn-gd-row__sub"
              >Urgency comes from action due dates, shown in the zone that owns the work.</span
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
          data-article-id="reading-project-timeline"
          data-kind="howto"
          data-title="Reading the project timeline"
          data-summary="The next 30, 60, or 90 days of due dates, seasons, and milestones."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">Reading the project timeline</span>
            <span class="bcn-gd-row__sub"
              >The next 30, 60, or 90 days of due dates, seasons, and milestones.</span
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
        <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-zp3mhfgs="">
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
            data-astro-cid-zp3mhfgs=""
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
                Star a component from the all-components list, or from the star in its own header.
              </li>
              <li class="bcn-help-article__step type-body">
                Starred components appear on the project dashboard in the Components section, below
                the project-wide row.
              </li>
              <li class="bcn-help-article__step type-body">
                Un-star from either place; the component itself is unaffected.
              </li>
            </ol>
            <p class="bcn-help-article__p type-body">
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
            <p class="bcn-help-article__p type-body">
              Everything urgent on the dashboard is an action with a due date. Each action belongs
              to one of the three zones by its type — tracking, monitoring, or reporting — so a
              lapsed survey is a monitoring action and an agency submittal is a reporting action.
              There is no separate list of critical items to maintain.
            </p>
            <p class="bcn-help-article__p type-body">
              The Tracking, Monitoring, and Reporting modules each count their own overdue actions
              and the ones due within the next fourteen days, then list the most urgent of them. Red
              means past due; amber means due soon. Clicking any of them opens the action itself.
            </p>
            <p class="bcn-help-article__p type-body">
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
            <p class="bcn-help-article__p type-body">
              The timeline across the top of the dashboard plots three things on one date axis:
              action due dates, season windows, and project milestones. It opens a week before today
              so anything already overdue stays in view.
            </p>
            <ol class="bcn-help-article__steps">
              <li class="bcn-help-article__step type-body">
                Switch the window between 30, 60, and 90 days to look further ahead.
              </li>
              <li class="bcn-help-article__step type-body">
                Click any mark — a dot, a season bar, or a milestone — to pin its details open.
              </li>
              <li class="bcn-help-article__step type-body">
                Seasons show the ones starting or ending inside the window first; use “Show all”
                when a project carries many.
              </li>
            </ol>
            <p class="bcn-help-article__p type-body">
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
    src="/beacon-design/_astro/BcnGuidanceDrawer.astro_astro_type_script_index_0_lang.CSA-_RD7.js"
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
.type-card-title {
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
.type-caption {
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
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
.sidebar[data-side="end"] > :first-child {
  order: 2;
}
.sidebar > :last-child {
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: var(--sidebar-content-min);
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
html,
.modern-layout__content {
  scroll-behavior: smooth;
}
.bcn-ohero {
  --_donut-size: 168px;
}
.bcn-ohero__section-title {
  margin: 0;
  color: var(--color-text-primary);
}
.bcn-ohero__donut {
  position: relative;
  inline-size: var(--_donut-size);
  block-size: var(--_donut-size);
  flex-shrink: 0;
}
.bcn-ohero__ring {
  inline-size: 100%;
  block-size: 100%;
  transform: rotate(-90deg);
  overflow: visible;
}
.bcn-ohero__track {
  stroke: var(--color-surface-sunken);
}
.bcn-ohero__seg circle {
  transition:
    stroke-width 0.12s ease-out,
    opacity 0.12s ease-out;
}
.bcn-ohero__hole {
  position: absolute;
  inset: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  border-radius: var(--radius-full);
  background: var(--color-surface);
  text-decoration: none;
  color: var(--color-text-primary);
}
.bcn-ohero__hole-value {
  font-family: var(--font-display, var(--font-sans));
  font-size: var(--type-size-600);
  font-weight: var(--font-weight-bold);
  line-height: 1;
}
.bcn-ohero__hole-cap {
  color: var(--color-text-tertiary);
}
.bcn-ohero__legend {
  list-style: none;
  padding: 0;
  min-inline-size: 0;
}
.bcn-ohero__legend-row {
  display: grid;
  grid-template-columns: 10px minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-100) var(--spacing-200);
  border-radius: var(--radius-200);
  text-decoration: none;
  color: var(--color-text-secondary);
}
.bcn-ohero__dot {
  inline-size: 10px;
  block-size: 10px;
  border-radius: var(--radius-full);
  background: var(--_c);
}
.bcn-ohero__legend-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-ohero__legend-value {
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
.bcn-ohero__breakdowns {
  flex: 1 1 26rem;
  min-inline-size: 0;
}
.bcn-ohero__counts {
  list-style: none;
  padding: 0;
  margin: 0;
}
.bcn-ohero__count-row {
  display: grid;
  grid-template-columns: minmax(6rem, 1fr) auto;
  align-items: baseline;
  gap: var(--spacing-300);
  padding-block: var(--spacing-100);
}
.bcn-ohero__count-label {
  color: var(--color-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-ohero__count-value {
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
.bcn-ohero__count-row + .bcn-ohero__count-row {
  border-top: 1px solid var(--color-border-light);
}
.bcn-apanel__body {
  --sidebar-width: 19rem;
  --sidebar-content-min: 52%;
  align-items: stretch;
}
.bcn-apanel__heading {
  margin: 0;
  color: var(--color-text-secondary);
}
.bcn-apanel__list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.bcn-apanel__row {
  display: grid;
  grid-template-columns: 7.5rem auto minmax(8rem, 1fr) minmax(9rem, 1fr) auto;
  align-items: center;
  gap: var(--spacing-400);
  padding-block: var(--spacing-150);
  padding-inline: var(--spacing-200);
}
.bcn-apanel__id {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
  white-space: nowrap;
}
.bcn-apanel__category,
.bcn-apanel__area {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bcn-apanel__category {
  color: var(--color-text-primary);
}
.bcn-apanel__area {
  color: var(--color-text-secondary);
}
.bcn-apanel__list > li + li {
  border-top: 1px solid var(--color-border-light);
}
.bcn-trend {
  --_c-active: var(--bcn-trend-active-color, var(--color-warning));
  --_c-resolved: var(--bcn-trend-resolved-color, var(--color-text-tertiary));
  --_plot-h: var(--bcn-trend-plot-height, 132px);
  --_bar-w: var(--bcn-trend-bar-width, 9px);
}
.bcn-trend .esa-stat__value {
  font-variant-numeric: tabular-nums;
}
.bcn-trend__legend {
  list-style: none;
  padding: 0;
}
.bcn-trend__legend-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-text-secondary);
}
.bcn-trend__dot {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full);
  background: var(--_c);
  flex-shrink: 0;
}
.bcn-trend__chart {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  column-gap: var(--spacing-200);
  row-gap: var(--spacing-100);
}
.bcn-trend__yaxis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: var(--_plot-h);
  text-align: right;
  color: var(--color-text-secondary);
  font-variant-numeric: tabular-nums;
}
.bcn-trend__plot,
.bcn-trend__ticks {
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(var(--_cols), minmax(0, 1fr));
  gap: var(--spacing-150);
}
.bcn-trend__plot {
  height: var(--_plot-h);
  border-bottom: 1px solid var(--color-border);
}
.bcn-trend__col {
  display: flex;
  align-items: flex-end;
  border-radius: var(--radius-100) var(--radius-100) 0 0;
}
.bcn-trend__bars {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2px;
  width: 100%;
  height: 100%;
}
.bcn-trend__bar {
  flex: 0 1 var(--_bar-w);
  height: var(--_h);
  background: var(--_c);
  border-radius: var(--radius-100) var(--radius-100) 0 0;
}
.bcn-trend__bar:not([data-zero]) {
  min-height: 2px;
}
.bcn-trend__tick {
  color: var(--color-text-secondary);
  text-align: center;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}
.bcn-trend__table {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
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
.bcn-obsmap {
  width: 100%;
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border);
  overflow: hidden;
  background: var(--color-surface-sunken);
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
.esa-badge--danger {
  --_badge-bg: var(--color-danger, #e5484d);
}
.esa-badge--warning {
  --_badge-bg: var(--color-warning, #ffc53d);
  --_badge-text: var(--color-warning-on-fill, #4f3422);
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
.esa-stat__sub {
  font-size: var(--_stat-sub-size);
  font-weight: var(--font-weight-regular, 350);
  line-height: var(--line-height-normal, 1.6);
  color: var(--_stat-sub-color);
}
.bcn-obsmap .leaflet-interactive {
  cursor: pointer;
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
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.nav-section--collapsed .nav-section__items {
  max-height: 0;
  opacity: 0;
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
.esa-card__subtitle {
  font-size: var(--type-size-150, 0.8125rem);
  color: var(--color-text-secondary, #525252);
  margin: 0;
}
.esa-card__body {
  padding: var(--_card-padding);
}
.esa-card__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
}
.esa-card__footer {
  padding: var(--spacing-300, 0.75rem) var(--_card-padding);
  border-top: 1px solid var(--_card-header-border);
  background: var(--card-footer-bg, var(--color-surface-sunken, #efefef));
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
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-footer-bg` | `#efefef` | component |
| `--card-header-bg` | `transparent` | component |
| `--card-header-border-color` | `#efefef` | component |
| `--card-header-color` | `#3d3d3d` | component |
| `--card-padding` | `1.5rem` | component |
| `--card-radius` | `.5rem` | component |
| `--color-accent` | `#f76b15` | semantic |
| `--color-border` | `#dcdcdc` | semantic |
| `--color-border-light` | `#efefef` | semantic |
| `--color-danger` | `#e5484d` | semantic |
| `--color-primary` | `#005862` | semantic |
| `--color-primary-hover` | `#00474f` | semantic |
| `--color-secondary-strong` | `#2a7e3b` | semantic |
| `--color-surface` | `#fcfcfc` | semantic |
| `--color-surface-sunken` | `#efefef` | semantic |
| `--color-text-inverse` | `#fcfcfc` | semantic |
| `--color-text-link` | `#005862` | semantic |
| `--color-text-muted` | `#7c7c7c` | semantic |
| `--color-text-primary` | `#3d3d3d` | semantic |
| `--color-text-secondary` | `#525252` | semantic |
| `--color-text-tertiary` | `#656565` | semantic |
| `--color-warning` | `#f59e0b` | semantic |
| `--color-warning-on-fill` | `#4f3422` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-display` | `"DM Sans", sans-serif` | primitive |
| `--font-sans` | `"DM Sans", sans-serif` | primitive |
| `--font-weight-bold` | `650` | primitive |
| `--font-weight-medium` | `500` | primitive |
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
| `--icon-button-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
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
| `--radius-400` | `.75rem` | primitive |
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
| `--type-size-600` | `clamp(1.375rem, 1.2rem + .88vw, 1.875rem)` | primitive |
| `--type-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | primitive |

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
