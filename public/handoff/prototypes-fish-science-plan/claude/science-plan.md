# Science Plan

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-fish-science-plan** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/fish-science-plan/
- **Section element:** `<div>`
- **Components:** esa-avatar (hub), esa-badge (hub), esa-filter-clear-button (hub), esa-icon (hub), esa-icon-button (hub), esa-pill (hub)

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
                  d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
                ></path>
                <path d="M6.453 15h11.094"></path>
                <path d="M8.5 2h7"></path>
              </svg>
            </span>
            <span class="nav-section__title">Studies</span>
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
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
              <a href="#science-plan" class="nav-sublink active"> Science Plan </a>
            </li>
            <li class="nav-item">
              <a href="/beacon-design/prototypes/fish-gantt" class="nav-sublink">
                Study Planning
              </a>
            </li>
            <li class="nav-item">
              <a href="/beacon-design/prototypes/fish-model-map" class="nav-sublink">
                Data Model
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
              <a href="#project-tracking" class="nav-sublink"> Project Tracking </a>
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
                <a class="breadcrumb-item" href="#studies"> Studies </a
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
                <span class="breadcrumb-item" aria-current="page"> Science Plan </span>
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
                Science Plan
              </h1>
            </div>
          </section>
          <section class="page-layout__content">
            <div class="bcn-planr">
              <div
                class="bcn-planr__filterbar"
                data-intents='[{"value":"rephrase-rq","label":"Rephrase research question"},{"value":"add-metric","label":"Add / adjust metric"},{"value":"fix-coa-link","label":"Fix COA cross-reference"},{"value":"scope-dispute","label":"Scope dispute"},{"value":"model-peer-review","label":"Model peer-review / documentation"},{"value":"governance","label":"Governance / approval"}]'
                data-coas='[{"value":"10.18","label":"10.18"},{"value":"10.19","label":"10.19"},{"value":"10.19.1","label":"10.19.1 — Migration and Survival Study"},{"value":"10.19.2","label":"10.19.2 — Predation Study"},{"value":"10.19.3","label":"10.19.3 — Abundance and Distribution Study"},{"value":"10.20","label":"10.20"},{"value":"10.20.1","label":"10.20.1 — Installation of New Real-time Monitoring Station"},{"value":"10.20.2","label":"10.20.2 — Sediment and Turbidity Monitoring"},{"value":"10.21","label":"10.21"},{"value":"10.21.1","label":"10.21.1 — Hydrodynamics at Georgiana Slough Monitoring"},{"value":"10.21.2","label":"10.21.2 — Covered Fish Species Life Cycle Models"},{"value":"10.26","label":"10.26 — Incorporation of Fish Guidance System into the North Delta Intake Structures"}]'
              >
                <div class="bcn-planr__fb-top">
                  <div class="bcn-planr__fb-group">
                    <span class="bcn-planr__fb-label">Search</span>
                    <esa-text-field
                      id="bcn-planr-search"
                      placeholder="Search sections or comments"
                      size="sm"
                    ></esa-text-field>
                  </div>
                  <span class="bcn-planr__fb-divider"></span>
                  <div class="bcn-planr__fb-group">
                    <span class="bcn-planr__fb-label">Status</span>
                    <div class="bcn-status-select" id="bcn-planr-status" data-value="all">
                      <div class="bcn-status-select__dd">
                        <button
                          type="button"
                          class="bcn-status-select__trigger"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span
                            class="bcn-status-select__dot bcn-status-select__dot--trigger"
                            style="background: #d4d4d4"
                          ></span>
                          <span class="bcn-status-select__value">All statuses</span>
                          <svg
                            class="bcn-status-select__chev"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </button>
                        <ul class="bcn-status-select__menu" role="listbox" hidden="">
                          <li
                            class="bcn-status-select__opt"
                            role="option"
                            data-value="all"
                            data-label="All statuses"
                            data-color="#d4d4d4"
                            aria-selected="true"
                          >
                            <span class="bcn-status-select__dot" style="background: #d4d4d4"></span
                            >All statuses
                          </li>
                          <li
                            class="bcn-status-select__opt"
                            role="option"
                            data-value="open"
                            data-label="Open"
                            data-color="#f2770e"
                            aria-selected="false"
                          >
                            <span class="bcn-status-select__dot" style="background: #f2770e"></span
                            >Open
                          </li>
                          <li
                            class="bcn-status-select__opt"
                            role="option"
                            data-value="addressed"
                            data-label="Addressed"
                            data-color="#228be6"
                            aria-selected="false"
                          >
                            <span class="bcn-status-select__dot" style="background: #228be6"></span
                            >Addressed
                          </li>
                          <li
                            class="bcn-status-select__opt"
                            role="option"
                            data-value="resolved"
                            data-label="Resolved"
                            data-color="#2e7571"
                            aria-selected="false"
                          >
                            <span class="bcn-status-select__dot" style="background: #2e7571"></span
                            >Resolved
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="bcn-planr__fb-group">
                    <span class="bcn-planr__fb-label">Intent</span>
                    <esa-select id="bcn-planr-intent" size="sm"></esa-select>
                  </div>
                  <div class="bcn-planr__fb-group">
                    <span class="bcn-planr__fb-label">COA</span>
                    <esa-select id="bcn-planr-coa" size="sm"></esa-select>
                  </div>
                  <span class="bcn-planr__fb-right">
                    <span class="bcn-planr__counts">
                      <span class="bcn-planr__count" data-s="open">13 open</span>
                      <span class="bcn-planr__count" data-s="addressed">6 addressed</span>
                      <span class="bcn-planr__count" data-s="resolved">2 resolved</span>
                    </span>
                    <button
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
                      ><span class="esa-filter-clear-button__label">Clear</span>
                    </button>
                    <script type="module">
                      document.querySelectorAll("[data-esa-filter-clear]").forEach((e) => {
                        e.addEventListener("click", () => {
                          e.dispatchEvent(
                            new CustomEvent("esa-filter-clear", { bubbles: !0, composed: !0 }),
                          );
                        });
                      });
                    </script>
                  </span>
                </div>
              </div>
              <div class="bcn-planr__grid">
                <!-- ── Section outline ── -->
                <nav class="bcn-planr__outline" aria-label="Plan sections">
                  <ul class="bcn-planr__toc">
                    <li class="bcn-planr__toc-item" data-level="1" data-for="sec-1">
                      <a class="bcn-planr__toc-link" href="#sec-1">
                        <span class="bcn-planr__toc-num">1</span>
                        <span class="bcn-planr__toc-title"
                          >Introduction, Background, and Purpose</span
                        >
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="2" data-for="sec-1-1">
                      <a class="bcn-planr__toc-link" href="#sec-1-1">
                        <span class="bcn-planr__toc-num">1.1</span>
                        <span class="bcn-planr__toc-title">Introduction and Background</span>
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="2" data-for="sec-1-2">
                      <a class="bcn-planr__toc-link" href="#sec-1-2">
                        <span class="bcn-planr__toc-num">1.2</span>
                        <span class="bcn-planr__toc-title">Purpose</span>
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="1" data-for="sec-2">
                      <a class="bcn-planr__toc-link" href="#sec-2">
                        <span class="bcn-planr__toc-num">2</span>
                        <span class="bcn-planr__toc-title">Scope of the Science Plan</span>
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="2" data-for="sec-2-1">
                      <a class="bcn-planr__toc-link" href="#sec-2-1">
                        <span class="bcn-planr__toc-num">2.1</span>
                        <span class="bcn-planr__toc-title">Scope</span>
                        <span class="bcn-planr__toc-count">1</span>
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="2" data-for="sec-2-2">
                      <a class="bcn-planr__toc-link" href="#sec-2-2">
                        <span class="bcn-planr__toc-num">2.2</span>
                        <span class="bcn-planr__toc-title"
                          >Relationship to State Water Project Operations</span
                        >
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="1" data-for="sec-3">
                      <a class="bcn-planr__toc-link" href="#sec-3">
                        <span class="bcn-planr__toc-num">3</span>
                        <span class="bcn-planr__toc-title">Studies</span>
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="2" data-for="sec-3-1">
                      <a class="bcn-planr__toc-link" href="#sec-3-1">
                        <span class="bcn-planr__toc-num">3.1</span>
                        <span class="bcn-planr__toc-title">Studies Overview</span>
                        <span class="bcn-planr__toc-count">1</span>
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="2" data-for="sec-3-2">
                      <a class="bcn-planr__toc-link" href="#sec-3-2">
                        <span class="bcn-planr__toc-num">3.2</span>
                        <span class="bcn-planr__toc-title">Study Development</span>
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="2" data-for="sec-3-3">
                      <a class="bcn-planr__toc-link" href="#sec-3-3">
                        <span class="bcn-planr__toc-num">3.3</span>
                        <span class="bcn-planr__toc-title">Study Plan Requirements</span>
                        <span class="bcn-planr__toc-count">1</span>
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="2" data-for="sec-3-4">
                      <a class="bcn-planr__toc-link" href="#sec-3-4">
                        <span class="bcn-planr__toc-num">3.4</span>
                        <span class="bcn-planr__toc-title">Data Management Considerations</span>
                        <span class="bcn-planr__toc-count">1</span>
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="2" data-for="sec-3-5">
                      <a class="bcn-planr__toc-link" href="#sec-3-5">
                        <span class="bcn-planr__toc-num">3.5</span>
                        <span class="bcn-planr__toc-title">Study Sketches</span>
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="3" data-for="sec-3-5-1">
                      <a class="bcn-planr__toc-link" href="#sec-3-5-1">
                        <span class="bcn-planr__toc-num">3.5.1</span>
                        <span class="bcn-planr__toc-title"
                          >Condition of Approval 10.19.1 (Migration &amp; Survival Study)</span
                        >
                        <span class="bcn-planr__toc-count">6</span>
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="3" data-for="sec-3-5-2">
                      <a class="bcn-planr__toc-link" href="#sec-3-5-2">
                        <span class="bcn-planr__toc-num">3.5.2</span>
                        <span class="bcn-planr__toc-title"
                          >Condition of Approval 10.19.2 (Predation Study)</span
                        >
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="3" data-for="sec-3-5-3">
                      <a class="bcn-planr__toc-link" href="#sec-3-5-3">
                        <span class="bcn-planr__toc-num">3.5.3</span>
                        <span class="bcn-planr__toc-title"
                          >Condition of Approval 10.19.3 (Abundance &amp; Distribution Study)</span
                        >
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="3" data-for="sec-3-5-4">
                      <a class="bcn-planr__toc-link" href="#sec-3-5-4">
                        <span class="bcn-planr__toc-num">3.5.4</span>
                        <span class="bcn-planr__toc-title"
                          >Condition of Approval 10.20.1 (Installation of New Real-time Monitoring
                          Station)</span
                        >
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="3" data-for="sec-3-5-5">
                      <a class="bcn-planr__toc-link" href="#sec-3-5-5">
                        <span class="bcn-planr__toc-num">3.5.5</span>
                        <span class="bcn-planr__toc-title"
                          >Condition of Approval 10.20.2 (Sediment &amp; Turbidity Monitoring)</span
                        >
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="3" data-for="sec-3-5-6">
                      <a class="bcn-planr__toc-link" href="#sec-3-5-6">
                        <span class="bcn-planr__toc-num">3.5.6</span>
                        <span class="bcn-planr__toc-title"
                          >Condition of Approval 10.21.1 (Hydrodynamics at Georgiana Slough
                          Monitoring)</span
                        >
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="3" data-for="sec-3-5-7">
                      <a class="bcn-planr__toc-link" href="#sec-3-5-7">
                        <span class="bcn-planr__toc-num">3.5.7</span>
                        <span class="bcn-planr__toc-title"
                          >Condition of Approval 10.21.2 (Covered Fish Species Life Cycle
                          Models)</span
                        >
                      </a>
                    </li>
                    <li class="bcn-planr__toc-item" data-level="3" data-for="sec-3-5-8">
                      <a class="bcn-planr__toc-link" href="#sec-3-5-8">
                        <span class="bcn-planr__toc-num">3.5.8</span>
                        <span class="bcn-planr__toc-title"
                          >Condition of Approval 10.26 (Fish Guidance System)</span
                        >
                        <span class="bcn-planr__toc-count">11</span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <!-- ── Document sections ── -->
                <div class="bcn-planr__doc">
                  <section
                    class="bcn-planr__section"
                    id="sec-1"
                    data-level="1"
                    data-search="1 introduction, background, and purpose "
                    data-coas=""
                  >
                    <header class="bcn-planr__sec-head">
                      <h2 class="bcn-planr__h1">
                        <span class="bcn-planr__num">1</span>Introduction, Background, and Purpose
                      </h2>
                    </header>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-1-1"
                    data-level="2"
                    data-search="1.1 introduction and background the proposed delta conveyance project will construct and operate new conveyance facilities in the north delta along the sacramento river. on february 14, 2025, cdfw issued incidental take permit no. 2081-2024-018-00 under cesa for construction and operation of the dcp."
                    data-coas=""
                  >
                    <header class="bcn-planr__sec-head">
                      <h3 class="bcn-planr__h2">
                        <span class="bcn-planr__num">1.1</span>Introduction and Background
                      </h3>
                    </header>
                    <p class="bcn-planr__excerpt">
                      The proposed Delta Conveyance Project will construct and operate new
                      conveyance facilities in the North Delta along the Sacramento River. On
                      February 14, 2025, CDFW issued Incidental Take Permit No. 2081-2024-018-00
                      under CESA for construction and operation of the DCP.
                    </p>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-1-2"
                    data-level="2"
                    data-search="1.2 purpose the purpose of the science plan is to create a pathway for dwr to fulfill its requirements under coa 10.18, and the procedures to facilitate the review, revision, and finalization of the cdfw-approved plan and all plans and reports required in its conditions."
                    data-coas="10.18"
                  >
                    <header class="bcn-planr__sec-head">
                      <h3 class="bcn-planr__h2"><span class="bcn-planr__num">1.2</span>Purpose</h3>
                      <span class="bcn-planr__coas">
                        <span class="bcn-planr__coa" title="10.18">10.18</span>
                      </span>
                    </header>
                    <p class="bcn-planr__excerpt">
                      The purpose of the Science Plan is to create a pathway for DWR to fulfill its
                      requirements under COA 10.18, and the procedures to facilitate the review,
                      revision, and finalization of the CDFW-approved plan and all plans and reports
                      required in its conditions.
                    </p>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-2"
                    data-level="1"
                    data-search="2 scope of the science plan "
                    data-coas=""
                  >
                    <header class="bcn-planr__sec-head">
                      <h2 class="bcn-planr__h1">
                        <span class="bcn-planr__num">2</span>Scope of the Science Plan
                      </h2>
                    </header>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-2-1"
                    data-level="2"
                    data-search="2.1 scope the plan focuses on study elements related to itp coa 10.18 and the procedures for review, revision, and finalization of all plans and reports required in the covered conditions of approval."
                    data-coas="10.19 10.20 10.21 10.26"
                    data-has-comments=""
                  >
                    <header class="bcn-planr__sec-head">
                      <h3 class="bcn-planr__h2"><span class="bcn-planr__num">2.1</span>Scope</h3>
                      <span class="bcn-planr__coas">
                        <a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/CMT-011"
                          title="10.19"
                          >10.19</a
                        ><a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/CMT-012"
                          title="10.20"
                          >10.20</a
                        ><a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/CMT-013"
                          title="10.21"
                          >10.21</a
                        ><a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/STY-021"
                          title="Incorporation of Fish Guidance System into the North Delta Intake Structures"
                          >10.26</a
                        >
                      </span>
                    </header>
                    <p class="bcn-planr__excerpt">
                      The plan focuses on study elements related to ITP COA 10.18 and the procedures
                      for review, revision, and finalization of all plans and reports required in
                      the covered conditions of approval.
                    </p>
                    <ul class="bcn-planr__thread">
                      <li
                        class="bcn-planr__comment"
                        data-status="resolved"
                        data-intent="fix-coa-link"
                        data-search="scope text cites coa 10.21.9 modeling as within this plan; 10.21.9 is implemented under the real-time operations program, not the science plan. cdfw removed the 10.21.9 reference from section 2.1; the real-time operations program is now cited as a related effort only."
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-02-26</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Fix COA cross-reference</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="resolved"
                                style="--_chip: var(--st-resolved, #2e7571)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Resolved</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            Scope text cites COA 10.21.9 modeling as within this plan; 10.21.9 is
                            implemented under the real-time operations program, not the Science
                            Plan.
                          </p>
                          <ul class="bcn-planr__replies">
                            <li class="bcn-planr__reply">
                              <span class="bcn-planr__avatar"
                                ><span
                                  class="esa-avatar esa-avatar--sm esa-avatar--circle"
                                  style="--_avatar-hue: 233"
                                >
                                  <span class="esa-avatar__initials">GM</span>
                                </span>
                              </span>
                              <div class="bcn-planr__c-body">
                                <div class="bcn-planr__c-meta">
                                  <span class="bcn-planr__c-author">Greenwood, Marin</span>
                                  <span class="bcn-planr__c-time">2026-03-05</span>
                                </div>
                                <p class="bcn-planr__c-text">
                                  Removed the 10.21.9 reference from Section 2.1; the real-time
                                  operations program is now cited as a related effort only.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-2-2"
                    data-level="2"
                    data-search="2.2 relationship to state water project operations dcp facilities will be operated in coordination with existing swp south delta pumping facilities, in compliance with state and federal regulatory requirements."
                    data-coas=""
                  >
                    <header class="bcn-planr__sec-head">
                      <h3 class="bcn-planr__h2">
                        <span class="bcn-planr__num">2.2</span>Relationship to State Water Project
                        Operations
                      </h3>
                    </header>
                    <p class="bcn-planr__excerpt">
                      DCP facilities will be operated in coordination with existing SWP South Delta
                      pumping facilities, in compliance with State and federal regulatory
                      requirements.
                    </p>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-3"
                    data-level="1"
                    data-search="3 studies "
                    data-coas=""
                  >
                    <header class="bcn-planr__sec-head">
                      <h2 class="bcn-planr__h1"><span class="bcn-planr__num">3</span>Studies</h2>
                    </header>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-3-1"
                    data-level="2"
                    data-search="3.1 studies overview dwr will initiate monitoring studies to establish baseline aquatic conditions and conduct a minimum of five years of monitoring before initiating dcp in-water construction activities."
                    data-coas="10.19 10.20 10.21 10.26"
                    data-has-comments=""
                  >
                    <header class="bcn-planr__sec-head">
                      <h3 class="bcn-planr__h2">
                        <span class="bcn-planr__num">3.1</span>Studies Overview
                      </h3>
                      <span class="bcn-planr__coas">
                        <a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/CMT-011"
                          title="10.19"
                          >10.19</a
                        ><a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/CMT-012"
                          title="10.20"
                          >10.20</a
                        ><a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/CMT-013"
                          title="10.21"
                          >10.21</a
                        ><a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/STY-021"
                          title="Incorporation of Fish Guidance System into the North Delta Intake Structures"
                          >10.26</a
                        >
                      </span>
                    </header>
                    <p class="bcn-planr__excerpt">
                      DWR will initiate monitoring studies to establish baseline aquatic conditions
                      and conduct a minimum of five years of monitoring before initiating DCP
                      in-water construction activities.
                    </p>
                    <ul class="bcn-planr__thread">
                      <li
                        class="bcn-planr__comment"
                        data-status="open"
                        data-intent="scope-dispute"
                        data-search="the overview should state explicitly which studies must be complete before phase 1 versus phase 2 authorization; the current framing defers all sequencing to appendix a. cdfw "
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-03-12</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Scope dispute</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="open"
                                style="--_chip: var(--st-open, #f2770e)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Open</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            The overview should state explicitly which studies must be complete
                            before Phase 1 versus Phase 2 authorization; the current framing defers
                            all sequencing to Appendix A.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-3-2"
                    data-level="2"
                    data-search="3.2 study development study sketches describe the overall intent and direction of the science program rather than finalized study designs; each will be progressively developed into a full study plan through continued coordination with cdfw."
                    data-coas=""
                  >
                    <header class="bcn-planr__sec-head">
                      <h3 class="bcn-planr__h2">
                        <span class="bcn-planr__num">3.2</span>Study Development
                      </h3>
                    </header>
                    <p class="bcn-planr__excerpt">
                      Study sketches describe the overall intent and direction of the Science
                      Program rather than finalized study designs; each will be progressively
                      developed into a full study plan through continued coordination with CDFW.
                    </p>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-3-3"
                    data-level="2"
                    data-search="3.3 study plan requirements table 1 details the general requirements and key considerations for each study plan; these requirements are treated as individual sections of each plan."
                    data-coas=""
                    data-has-comments=""
                  >
                    <header class="bcn-planr__sec-head">
                      <h3 class="bcn-planr__h2">
                        <span class="bcn-planr__num">3.3</span>Study Plan Requirements
                      </h3>
                    </header>
                    <p class="bcn-planr__excerpt">
                      Table 1 details the general requirements and key considerations for each study
                      plan; these requirements are treated as individual sections of each plan.
                    </p>
                    <ul class="bcn-planr__thread">
                      <li
                        class="bcn-planr__comment"
                        data-status="open"
                        data-intent="governance"
                        data-search="table 1 requirements should include a data-sharing timeline for each study plan; cdfw review cannot proceed on rolling data deliveries otherwise. cdfw "
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-03-12</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Governance / approval</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="open"
                                style="--_chip: var(--st-open, #f2770e)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Open</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            Table 1 requirements should include a data-sharing timeline for each
                            study plan; CDFW review cannot proceed on rolling data deliveries
                            otherwise.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-3-4"
                    data-level="2"
                    data-search="3.4 data management considerations each study plan will define methods for data collection, quality assurance, documentation, storage, and sharing, following common data standards that enable interoperability among dwr, cdfw, and partner agencies."
                    data-coas=""
                    data-has-comments=""
                  >
                    <header class="bcn-planr__sec-head">
                      <h3 class="bcn-planr__h2">
                        <span class="bcn-planr__num">3.4</span>Data Management Considerations
                      </h3>
                    </header>
                    <p class="bcn-planr__excerpt">
                      Each study plan will define methods for data collection, quality assurance,
                      documentation, storage, and sharing, following common data standards that
                      enable interoperability among DWR, CDFW, and partner agencies.
                    </p>
                    <ul class="bcn-planr__thread">
                      <li
                        class="bcn-planr__comment"
                        data-status="addressed"
                        data-intent="governance"
                        data-search="qa procedures for continuous telemetry data should follow the interagency standard, and versioning must be specified for derived datasets. cdfw section 3.4 now cites the interagency qa standard and commits each study plan to a versioned derived-dataset register."
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-04-02</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Governance / approval</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="addressed"
                                style="--_chip: var(--st-addressed, #228be6)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Addressed</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            QA procedures for continuous telemetry data should follow the
                            interagency standard, and versioning must be specified for derived
                            datasets.
                          </p>
                          <ul class="bcn-planr__replies">
                            <li class="bcn-planr__reply">
                              <span class="bcn-planr__avatar"
                                ><span
                                  class="esa-avatar esa-avatar--sm esa-avatar--circle"
                                  style="--_avatar-hue: 233"
                                >
                                  <span class="esa-avatar__initials">GM</span>
                                </span>
                              </span>
                              <div class="bcn-planr__c-body">
                                <div class="bcn-planr__c-meta">
                                  <span class="bcn-planr__c-author">Greenwood, Marin</span>
                                  <span class="bcn-planr__c-time">2026-04-18</span>
                                </div>
                                <p class="bcn-planr__c-text">
                                  Section 3.4 now cites the interagency QA standard and commits each
                                  study plan to a versioned derived-dataset register.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-3-5"
                    data-level="2"
                    data-search="3.5 study sketches one sketch per condition of approval: the core hypotheses, methods, study components, and relevance to dcp effects of the work proposed for each coa."
                    data-coas=""
                  >
                    <header class="bcn-planr__sec-head">
                      <h3 class="bcn-planr__h2">
                        <span class="bcn-planr__num">3.5</span>Study Sketches
                      </h3>
                    </header>
                    <p class="bcn-planr__excerpt">
                      One sketch per condition of approval: the core hypotheses, methods, study
                      components, and relevance to DCP effects of the work proposed for each COA.
                    </p>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-3-5-1"
                    data-level="3"
                    data-search="3.5.1 condition of approval 10.19.1 (migration &amp; survival study) acoustic-telemetry evaluation of juvenile salmonid survival and routing in the near-field intake reach and through-delta, establishing the preconstruction baseline required before in-water work."
                    data-coas="10.19.1"
                    data-has-comments=""
                  >
                    <header class="bcn-planr__sec-head">
                      <h4 class="bcn-planr__h3">
                        <span class="bcn-planr__num">3.5.1</span>Condition of Approval 10.19.1
                        (Migration &amp; Survival Study)
                      </h4>
                      <span class="bcn-planr__coas">
                        <a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/STY-014"
                          title="Migration and Survival Study"
                          >10.19.1</a
                        >
                      </span>
                    </header>
                    <p class="bcn-planr__excerpt">
                      Acoustic-telemetry evaluation of juvenile salmonid survival and routing in the
                      near-field intake reach and through-Delta, establishing the preconstruction
                      baseline required before in-water work.
                    </p>
                    <ul class="bcn-planr__thread">
                      <li
                        class="bcn-planr__comment"
                        data-status="addressed"
                        data-intent="rephrase-rq"
                        data-search="rq1 should separate the baseline objective from the with-project objective so the preconstruction baseline can be approved and started independent of the construction-phase design. cdfw split into a baseline clause and a with-project clause within rq1; the baseline component can proceed on the 2027 field season while the construction-phase design is finalized."
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-02-10</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Rephrase research question</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="addressed"
                                style="--_chip: var(--st-addressed, #228be6)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Addressed</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            RQ1 should separate the baseline objective from the with-project
                            objective so the preconstruction baseline can be approved and started
                            independent of the construction-phase design.
                          </p>
                          <ul class="bcn-planr__replies">
                            <li class="bcn-planr__reply">
                              <span class="bcn-planr__avatar"
                                ><span
                                  class="esa-avatar esa-avatar--sm esa-avatar--circle"
                                  style="--_avatar-hue: 233"
                                >
                                  <span class="esa-avatar__initials">GM</span>
                                </span>
                              </span>
                              <div class="bcn-planr__c-body">
                                <div class="bcn-planr__c-meta">
                                  <span class="bcn-planr__c-author">Greenwood, Marin</span>
                                  <span class="bcn-planr__c-time">2026-02-24</span>
                                </div>
                                <p class="bcn-planr__c-text">
                                  Split into a baseline clause and a with-project clause within RQ1;
                                  the baseline component can proceed on the 2027 field season while
                                  the construction-phase design is finalized.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li
                        class="bcn-planr__comment"
                        data-status="open"
                        data-intent="add-metric"
                        data-search="the far-field metric set must include reverse-flow frequency, magnitude, and duration as a routing covariate. flow reversal at the junctions is a primary driver of interior-delta entrainment and cannot be omitted. cdfw "
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-02-10</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Add / adjust metric</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="open"
                                style="--_chip: var(--st-open, #f2770e)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Open</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            The far-field metric set must include reverse-flow frequency, magnitude,
                            and duration as a routing covariate. Flow reversal at the junctions is a
                            primary driver of interior-Delta entrainment and cannot be omitted.
                          </p>
                        </div>
                      </li>
                      <li
                        class="bcn-planr__comment"
                        data-status="addressed"
                        data-intent="scope-dispute"
                        data-search="the near-field and far-field components appear to double-count survival in the immediate intake reach. define the spatial boundary between components so reach-level survival is not attributed twice. cdfw added an explicit near-field/far-field boundary at the downstream extent of the intake array; near-field survival is reported as a conditional term and excluded from the far-field reach estimate."
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-03-05</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Scope dispute</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="addressed"
                                style="--_chip: var(--st-addressed, #228be6)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Addressed</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            The near-field and far-field components appear to double-count survival
                            in the immediate intake reach. Define the spatial boundary between
                            components so reach-level survival is not attributed twice.
                          </p>
                          <ul class="bcn-planr__replies">
                            <li class="bcn-planr__reply">
                              <span class="bcn-planr__avatar"
                                ><span
                                  class="esa-avatar esa-avatar--sm esa-avatar--circle"
                                  style="--_avatar-hue: 233"
                                >
                                  <span class="esa-avatar__initials">GM</span>
                                </span>
                              </span>
                              <div class="bcn-planr__c-body">
                                <div class="bcn-planr__c-meta">
                                  <span class="bcn-planr__c-author">Greenwood, Marin</span>
                                  <span class="bcn-planr__c-time">2026-03-21</span>
                                </div>
                                <p class="bcn-planr__c-text">
                                  Added an explicit near-field/far-field boundary at the downstream
                                  extent of the intake array; near-field survival is reported as a
                                  conditional term and excluded from the far-field reach estimate.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li
                        class="bcn-planr__comment"
                        data-status="open"
                        data-intent="governance"
                        data-search="cdfw approval of the final study plan is required before any tagging or array deployment begins. please state the approval gate explicitly in the reporting requirements. cdfw "
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-04-02</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Governance / approval</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="open"
                                style="--_chip: var(--st-open, #f2770e)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Open</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            CDFW approval of the Final Study Plan is required before any tagging or
                            array deployment begins. Please state the approval gate explicitly in
                            the reporting requirements.
                          </p>
                        </div>
                      </li>
                      <li
                        class="bcn-planr__comment"
                        data-status="open"
                        data-intent="model-peer-review"
                        data-search="the survival-estimation and routing models must be independently peer-reviewed before the 2030 baseline reporting, including documentation of detection-efficiency assumptions and model structure. cdfw "
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-04-02</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label"
                                  >Model peer-review / documentation</span
                                >
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="open"
                                style="--_chip: var(--st-open, #f2770e)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Open</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            The survival-estimation and routing models must be independently
                            peer-reviewed before the 2030 baseline reporting, including
                            documentation of detection-efficiency assumptions and model structure.
                          </p>
                        </div>
                      </li>
                      <li
                        class="bcn-planr__comment"
                        data-status="resolved"
                        data-intent="fix-coa-link"
                        data-search="background references coa 10.20.2 where the abundance and distribution study (10.19.2/10.19.3) is meant — please correct the coordinating-study cross-reference. cdfw corrected to 10.19.2 (predation) and 10.19.3 (abundance and distribution); 10.20.2 reference removed."
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-05-06</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Fix COA cross-reference</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="resolved"
                                style="--_chip: var(--st-resolved, #2e7571)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Resolved</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            Background references COA 10.20.2 where the Abundance and Distribution
                            Study (10.19.2/10.19.3) is meant — please correct the coordinating-study
                            cross-reference.
                          </p>
                          <ul class="bcn-planr__replies">
                            <li class="bcn-planr__reply">
                              <span class="bcn-planr__avatar"
                                ><span
                                  class="esa-avatar esa-avatar--sm esa-avatar--circle"
                                  style="--_avatar-hue: 233"
                                >
                                  <span class="esa-avatar__initials">GM</span>
                                </span>
                              </span>
                              <div class="bcn-planr__c-body">
                                <div class="bcn-planr__c-meta">
                                  <span class="bcn-planr__c-author">Greenwood, Marin</span>
                                  <span class="bcn-planr__c-time">2026-05-12</span>
                                </div>
                                <p class="bcn-planr__c-text">
                                  Corrected to 10.19.2 (Predation) and 10.19.3 (Abundance and
                                  Distribution); 10.20.2 reference removed.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-3-5-2"
                    data-level="3"
                    data-search="3.5.2 condition of approval 10.19.2 (predation study) hydroacoustic surveys, diet and edna sampling, and exposure modeling to characterize predation risk and identify hotspots near the north delta intakes."
                    data-coas="10.19.2"
                  >
                    <header class="bcn-planr__sec-head">
                      <h4 class="bcn-planr__h3">
                        <span class="bcn-planr__num">3.5.2</span>Condition of Approval 10.19.2
                        (Predation Study)
                      </h4>
                      <span class="bcn-planr__coas">
                        <a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/STY-015"
                          title="Predation Study"
                          >10.19.2</a
                        >
                      </span>
                    </header>
                    <p class="bcn-planr__excerpt">
                      Hydroacoustic surveys, diet and eDNA sampling, and exposure modeling to
                      characterize predation risk and identify hotspots near the North Delta
                      intakes.
                    </p>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-3-5-3"
                    data-level="3"
                    data-search="3.5.3 condition of approval 10.19.3 (abundance &amp; distribution study) near-field and far-field surveys of covered-species abundance and distribution at the north delta intakes, including a technology pilot to select the best abundance-measurement methods before baseline monitoring begins."
                    data-coas="10.19.3"
                  >
                    <header class="bcn-planr__sec-head">
                      <h4 class="bcn-planr__h3">
                        <span class="bcn-planr__num">3.5.3</span>Condition of Approval 10.19.3
                        (Abundance &amp; Distribution Study)
                      </h4>
                      <span class="bcn-planr__coas">
                        <a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/STY-016"
                          title="Abundance and Distribution Study"
                          >10.19.3</a
                        >
                      </span>
                    </header>
                    <p class="bcn-planr__excerpt">
                      Near-field and far-field surveys of covered-species abundance and distribution
                      at the North Delta intakes, including a technology pilot to select the best
                      abundance-measurement methods before baseline monitoring begins.
                    </p>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-3-5-4"
                    data-level="3"
                    data-search="3.5.4 condition of approval 10.20.1 (installation of new real-time monitoring station) installation and rating of a new real-time monitoring station downstream of intake c before initiation of preconstruction baseline monitoring."
                    data-coas="10.20.1"
                  >
                    <header class="bcn-planr__sec-head">
                      <h4 class="bcn-planr__h3">
                        <span class="bcn-planr__num">3.5.4</span>Condition of Approval 10.20.1
                        (Installation of New Real-time Monitoring Station)
                      </h4>
                      <span class="bcn-planr__coas">
                        <a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/STY-017"
                          title="Installation of New Real-time Monitoring Station"
                          >10.20.1</a
                        >
                      </span>
                    </header>
                    <p class="bcn-planr__excerpt">
                      Installation and rating of a new real-time monitoring station downstream of
                      Intake C before initiation of preconstruction baseline monitoring.
                    </p>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-3-5-5"
                    data-level="3"
                    data-search="3.5.5 condition of approval 10.20.2 (sediment &amp; turbidity monitoring) continuous sediment and turbidity monitoring at the north delta diversions, coordinated with the real-time monitoring station, to characterize suspended-sediment and turbidity conditions."
                    data-coas="10.20.2"
                  >
                    <header class="bcn-planr__sec-head">
                      <h4 class="bcn-planr__h3">
                        <span class="bcn-planr__num">3.5.5</span>Condition of Approval 10.20.2
                        (Sediment &amp; Turbidity Monitoring)
                      </h4>
                      <span class="bcn-planr__coas">
                        <a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/STY-018"
                          title="Sediment and Turbidity Monitoring"
                          >10.20.2</a
                        >
                      </span>
                    </header>
                    <p class="bcn-planr__excerpt">
                      Continuous sediment and turbidity monitoring at the North Delta diversions,
                      coordinated with the real-time monitoring station, to characterize
                      suspended-sediment and turbidity conditions.
                    </p>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-3-5-6"
                    data-level="3"
                    data-search="3.5.6 condition of approval 10.21.1 (hydrodynamics at georgiana slough monitoring) hydrodynamic monitoring at georgiana slough to characterize flow split and routing, informing the flow-reversal and routing-minimization analyses under coa 10.21.7."
                    data-coas="10.21.1"
                  >
                    <header class="bcn-planr__sec-head">
                      <h4 class="bcn-planr__h3">
                        <span class="bcn-planr__num">3.5.6</span>Condition of Approval 10.21.1
                        (Hydrodynamics at Georgiana Slough Monitoring)
                      </h4>
                      <span class="bcn-planr__coas">
                        <a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/STY-019"
                          title="Hydrodynamics at Georgiana Slough Monitoring"
                          >10.21.1</a
                        >
                      </span>
                    </header>
                    <p class="bcn-planr__excerpt">
                      Hydrodynamic monitoring at Georgiana Slough to characterize flow split and
                      routing, informing the flow-reversal and routing-minimization analyses under
                      COA 10.21.7.
                    </p>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-3-5-7"
                    data-level="3"
                    data-search="3.5.7 condition of approval 10.21.2 (covered fish species life cycle models) refinement and evaluation of covered-species life-cycle models to incorporate dcp operations, drawing on the fish and water-quality monitoring studies to identify and address data gaps."
                    data-coas="10.21.2"
                  >
                    <header class="bcn-planr__sec-head">
                      <h4 class="bcn-planr__h3">
                        <span class="bcn-planr__num">3.5.7</span>Condition of Approval 10.21.2
                        (Covered Fish Species Life Cycle Models)
                      </h4>
                      <span class="bcn-planr__coas">
                        <a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/STY-020"
                          title="Covered Fish Species Life Cycle Models"
                          >10.21.2</a
                        >
                      </span>
                    </header>
                    <p class="bcn-planr__excerpt">
                      Refinement and evaluation of covered-species life-cycle models to incorporate
                      DCP operations, drawing on the fish and water-quality monitoring studies to
                      identify and address data gaps.
                    </p>
                  </section>
                  <section
                    class="bcn-planr__section"
                    id="sec-3-5-8"
                    data-level="3"
                    data-search="3.5.8 condition of approval 10.26 (fish guidance system) field evaluation across winters 26/27 and 27/28 of whether, and how, a fish guidance system should be incorporated into the north delta intake structures, with a recommendation due one year before 30% design finalization."
                    data-coas="10.26"
                    data-has-comments=""
                  >
                    <header class="bcn-planr__sec-head">
                      <h4 class="bcn-planr__h3">
                        <span class="bcn-planr__num">3.5.8</span>Condition of Approval 10.26 (Fish
                        Guidance System)
                      </h4>
                      <span class="bcn-planr__coas">
                        <a
                          class="bcn-planr__coa"
                          href="/beacon-design/prototypes/fish-detail/STY-021"
                          title="Incorporation of Fish Guidance System into the North Delta Intake Structures"
                          >10.26</a
                        >
                      </span>
                    </header>
                    <p class="bcn-planr__excerpt">
                      Field evaluation across winters 26/27 and 27/28 of whether, and how, a fish
                      guidance system should be incorporated into the North Delta intake structures,
                      with a recommendation due one year before 30% design finalization.
                    </p>
                    <ul class="bcn-planr__thread">
                      <li
                        class="bcn-planr__comment"
                        data-status="open"
                        data-intent="scope-dispute"
                        data-search="the sketch is premature. it presupposes that a floating fish-guidance structure is the answer. the objective must first establish whether any engineered guidance measure is warranted before evaluating ffgs configurations. do not presuppose the technology. cdfw "
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-02-05</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Scope dispute</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="open"
                                style="--_chip: var(--st-open, #f2770e)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Open</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            The sketch is premature. It presupposes that a floating fish-guidance
                            structure is the answer. The objective must first establish whether ANY
                            engineered guidance measure is warranted before evaluating FFGS
                            configurations. Do not presuppose the technology.
                          </p>
                        </div>
                      </li>
                      <li
                        class="bcn-planr__comment"
                        data-status="open"
                        data-intent="scope-dispute"
                        data-search='the "ffgs design evaluation" step cannot be the terminal output of a study whose first question is whether a structure is needed. restructure the component so design evaluation is contingent on a positive need finding. cdfw '
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-02-05</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Scope dispute</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="open"
                                style="--_chip: var(--st-open, #f2770e)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Open</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            The "FFGS Design Evaluation" step cannot be the terminal output of a
                            study whose first question is whether a structure is needed. Restructure
                            the component so design evaluation is contingent on a positive need
                            finding.
                          </p>
                        </div>
                      </li>
                      <li
                        class="bcn-planr__comment"
                        data-status="open"
                        data-intent="model-peer-review"
                        data-search="the stairs individual-based model has not been independently reviewed and is being used as the basis for design decisions. provide full model documentation before it is relied upon. cdfw "
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-02-12</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label"
                                  >Model peer-review / documentation</span
                                >
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="open"
                                style="--_chip: var(--st-open, #f2770e)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Open</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            The STAIRS individual-based model has not been independently reviewed
                            and is being used as the basis for design decisions. Provide full model
                            documentation before it is relied upon.
                          </p>
                        </div>
                      </li>
                      <li
                        class="bcn-planr__comment"
                        data-status="open"
                        data-intent="model-peer-review"
                        data-search="provide the stairs calibration dataset and the calibration procedure. without the calibration data we cannot assess whether the model is fit for predicting fish response at the intakes. cdfw "
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-02-12</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label"
                                  >Model peer-review / documentation</span
                                >
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="open"
                                style="--_chip: var(--st-open, #f2770e)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Open</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            Provide the STAIRS calibration dataset and the calibration procedure.
                            Without the calibration data we cannot assess whether the model is fit
                            for predicting fish response at the intakes.
                          </p>
                        </div>
                      </li>
                      <li
                        class="bcn-planr__comment"
                        data-status="addressed"
                        data-intent="model-peer-review"
                        data-search="a formal validation step — out-of-sample comparison against observed fish tracks — must be added before stairs output informs any design recommendation. cdfw added an out-of-sample validation step to the stairs calibration method; validation must pass before the behavioral-response evaluation proceeds."
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-02-26</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label"
                                  >Model peer-review / documentation</span
                                >
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="addressed"
                                style="--_chip: var(--st-addressed, #228be6)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Addressed</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            A formal validation step — out-of-sample comparison against observed
                            fish tracks — must be added before STAIRS output informs any design
                            recommendation.
                          </p>
                          <ul class="bcn-planr__replies">
                            <li class="bcn-planr__reply">
                              <span class="bcn-planr__avatar"
                                ><span
                                  class="esa-avatar esa-avatar--sm esa-avatar--circle"
                                  style="--_avatar-hue: 233"
                                >
                                  <span class="esa-avatar__initials">GM</span>
                                </span>
                              </span>
                              <div class="bcn-planr__c-body">
                                <div class="bcn-planr__c-meta">
                                  <span class="bcn-planr__c-author">Greenwood, Marin</span>
                                  <span class="bcn-planr__c-time">2026-03-12</span>
                                </div>
                                <p class="bcn-planr__c-text">
                                  Added an out-of-sample validation step to the STAIRS calibration
                                  method; validation must pass before the behavioral-response
                                  evaluation proceeds.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li
                        class="bcn-planr__comment"
                        data-status="open"
                        data-intent="add-metric"
                        data-search="add a predator-exposure metric for each candidate configuration. guidance structures can concentrate predators; a guidance-efficiency gain that increases predation is not a net benefit. cdfw "
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-02-26</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Add / adjust metric</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="open"
                                style="--_chip: var(--st-open, #f2770e)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Open</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            Add a predator-exposure metric for each candidate configuration.
                            Guidance structures can concentrate predators; a guidance-efficiency
                            gain that increases predation is not a net benefit.
                          </p>
                        </div>
                      </li>
                      <li
                        class="bcn-planr__comment"
                        data-status="open"
                        data-intent="governance"
                        data-search="the fish-guidance working group must reach documented concurrence before the study advances from need-evaluation to design-evaluation. state this gate in the reporting requirements. cdfw "
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-03-09</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Governance / approval</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="open"
                                style="--_chip: var(--st-open, #f2770e)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Open</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            The fish-guidance working group must reach documented concurrence before
                            the study advances from need-evaluation to design-evaluation. State this
                            gate in the reporting requirements.
                          </p>
                        </div>
                      </li>
                      <li
                        class="bcn-planr__comment"
                        data-status="addressed"
                        data-intent="governance"
                        data-search="the recommended approach delivered to cdfw one year prior to 30% design requires written cdfw approval, not merely transmittal. clarify the approval requirement. cdfw reporting requirements now state the recommended approach requires written cdfw approval prior to finalizing 30% design."
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-03-09</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Governance / approval</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="addressed"
                                style="--_chip: var(--st-addressed, #228be6)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Addressed</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            The recommended approach delivered to CDFW one year prior to 30% design
                            requires written CDFW approval, not merely transmittal. Clarify the
                            approval requirement.
                          </p>
                          <ul class="bcn-planr__replies">
                            <li class="bcn-planr__reply">
                              <span class="bcn-planr__avatar"
                                ><span
                                  class="esa-avatar esa-avatar--sm esa-avatar--circle"
                                  style="--_avatar-hue: 233"
                                >
                                  <span class="esa-avatar__initials">GM</span>
                                </span>
                              </span>
                              <div class="bcn-planr__c-body">
                                <div class="bcn-planr__c-meta">
                                  <span class="bcn-planr__c-author">Greenwood, Marin</span>
                                  <span class="bcn-planr__c-time">2026-03-24</span>
                                </div>
                                <p class="bcn-planr__c-text">
                                  Reporting requirements now state the recommended approach requires
                                  written CDFW approval prior to finalizing 30% design.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li
                        class="bcn-planr__comment"
                        data-status="open"
                        data-intent="add-metric"
                        data-search="baseline velocity mapping must report approach and sweeping velocity across the full operating range, including the high-diversion condition where guidance matters most. cdfw "
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-03-23</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Add / adjust metric</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="open"
                                style="--_chip: var(--st-open, #f2770e)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Open</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            Baseline velocity mapping must report approach AND sweeping velocity
                            across the full operating range, including the high-diversion condition
                            where guidance matters most.
                          </p>
                        </div>
                      </li>
                      <li
                        class="bcn-planr__comment"
                        data-status="open"
                        data-intent="fix-coa-link"
                        data-search="background cites the intake hydraulic models as 10.25 generically; cite the specific contributing coas (10.25.1–10.25.4) so the dependency is traceable. cdfw "
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-04-06</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Fix COA cross-reference</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="open"
                                style="--_chip: var(--st-open, #f2770e)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Open</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            Background cites the intake hydraulic models as 10.25 generically; cite
                            the specific contributing COAs (10.25.1–10.25.4) so the dependency is
                            traceable.
                          </p>
                        </div>
                      </li>
                      <li
                        class="bcn-planr__comment"
                        data-status="addressed"
                        data-intent="fix-coa-link"
                        data-search="the cross-reference to the velocity-criteria coa is wrong — this study informs design, not the 10.27 velocity-testing compliance series. correct the linkage. cdfw removed the erroneous 10.27 linkage; background now references only the design-feeding coas (10.25.1–10.25.4) and 10.18.2."
                      >
                        <span class="bcn-planr__avatar"
                          ><span
                            class="esa-avatar esa-avatar--sm esa-avatar--circle"
                            style="--_avatar-hue: 82"
                          >
                            <span class="esa-avatar__initials">C</span>
                          </span>
                        </span>
                        <div class="bcn-planr__c-body">
                          <div class="bcn-planr__c-meta">
                            <span class="bcn-planr__c-author">CDFW</span>
                            <span class="esa-badge esa-badge--warning esa-badge--sm">
                              <span class="esa-badge__text">CDFW</span>
                            </span>
                            <span class="bcn-planr__c-time">2026-04-20</span>
                            <span class="bcn-planr__c-tags">
                              <span class="esa-pill esa-pill--default esa-pill--sm">
                                <span class="esa-pill__label">Fix COA cross-reference</span>
                              </span>
                              <span
                                class="bcn-status-chip"
                                data-status="addressed"
                                style="--_chip: var(--st-addressed, #228be6)"
                              >
                                <span class="bcn-status-chip__dot"></span>
                                <span class="bcn-status-chip__label">Addressed</span>
                              </span>
                            </span>
                          </div>
                          <p class="bcn-planr__c-text">
                            The cross-reference to the velocity-criteria COA is wrong — this study
                            informs design, not the 10.27 velocity-testing compliance series.
                            Correct the linkage.
                          </p>
                          <ul class="bcn-planr__replies">
                            <li class="bcn-planr__reply">
                              <span class="bcn-planr__avatar"
                                ><span
                                  class="esa-avatar esa-avatar--sm esa-avatar--circle"
                                  style="--_avatar-hue: 233"
                                >
                                  <span class="esa-avatar__initials">GM</span>
                                </span>
                              </span>
                              <div class="bcn-planr__c-body">
                                <div class="bcn-planr__c-meta">
                                  <span class="bcn-planr__c-author">Greenwood, Marin</span>
                                  <span class="bcn-planr__c-time">2026-05-01</span>
                                </div>
                                <p class="bcn-planr__c-text">
                                  Removed the erroneous 10.27 linkage; background now references
                                  only the design-feeding COAs (10.25.1–10.25.4) and 10.18.2.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </section>
                  <p class="bcn-planr__noresults" hidden="">No sections match the filters.</p>
                </div>
              </div>
            </div>
            <script
              type="module"
              src="/beacon-design/_astro/BcnPlanReader.astro_astro_type_script_index_0_lang.BbGEkB84.js"
            ></script>
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
              <span class="bcn-gd__here-page" data-gd-page="">Beacon</span>
              <span class="bcn-gd__here-purpose" data-gd-purpose=""
                >Beacon turns a shelf of regulatory documents into a working compliance program —
                cataloged, planned, executed, and proven.</span
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
                    >Press / anywhere to search commitments, requirements, actions, and
                    documents.</span
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
          data-article-id="what-is-an-observation"
          data-kind="glossary"
          data-title="What is an Observation?"
          data-summary="One recorded field event — a species sighting, habitat condition, weather event, or BMP check."
        >
          <span class="bcn-gd-row__text">
            <span class="bcn-gd-row__title">What is an Observation?</span>
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
.bcn-planr {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  font-size: var(--type-size-200);
  color: var(--color-text-primary);
}
.bcn-planr__filterbar {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  background: var(--color-surface);
}
.bcn-planr__fb-top {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  padding: var(--spacing-250) var(--spacing-400);
}
.bcn-planr__fb-group {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-300);
}
.bcn-planr__fb-label {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.bcn-planr__fb-group esa-text-field {
  width: 240px;
}
.bcn-planr__fb-divider {
  width: 1px;
  align-self: stretch;
  background: var(--color-border);
  margin: 0 var(--spacing-100);
}
.bcn-planr__fb-group .bcn-status-select__trigger {
  height: 32px;
  padding: 0 var(--spacing-200);
  font-size: var(--form-font-size-sm, 12px);
  font-weight: var(--font-weight-regular);
}
.bcn-planr__fb-group esa-select {
  display: inline-block;
  width: 12em;
}
.bcn-planr__fb-right {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-400);
}
.bcn-planr__counts {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-300);
  font-size: var(--type-size-100);
}
.bcn-planr__count {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  color: var(--color-text-secondary);
  white-space: nowrap;
}
.bcn-planr__count:before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
}
.bcn-planr__count[data-s="open"]:before {
  background: var(--color-warning);
}
.bcn-planr__count[data-s="addressed"]:before {
  background: var(--color-info);
}
.bcn-planr__count[data-s="resolved"]:before {
  background: var(--color-success);
}
.bcn-planr__grid {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: var(--spacing-600);
  align-items: start;
}
.bcn-planr__outline {
  position: sticky;
  top: var(--spacing-400);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  background: var(--color-surface);
  padding: var(--spacing-300);
  max-height: calc(100vh - 140px);
  overflow-y: auto;
}
.bcn-planr__toc {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.bcn-planr__toc-link {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-200);
  border-radius: var(--radius-100);
  text-decoration: none;
  color: var(--color-text-secondary);
  font-size: var(--type-size-150);
  line-height: 1.35;
}
.bcn-planr__toc-item[data-level="1"] .bcn-planr__toc-link {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-top: var(--spacing-150);
}
.bcn-planr__toc-num {
  flex: none;
  font-family: var(--font-mono);
  font-size: var(--type-size-100);
  color: var(--color-text-tertiary);
  min-width: 34px;
}
.bcn-planr__toc-title {
  min-width: 0;
}
.bcn-planr__toc-count {
  margin-left: auto;
  flex: none;
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  padding: 0 6px;
  border-radius: var(--radius-full);
  line-height: 1.6;
}
.bcn-planr__toc-item[data-level="3"] .bcn-planr__toc-link {
  padding-left: var(--spacing-500);
}
.bcn-planr__doc {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
  min-width: 0;
  max-width: 84ch;
}
.bcn-planr__section {
  scroll-margin-top: var(--spacing-400);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-250);
}
.bcn-planr__sec-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--spacing-200) var(--spacing-400);
}
.bcn-planr__h1 {
  margin: var(--spacing-400) 0 0;
  padding-bottom: var(--spacing-200);
  border-bottom: 2px solid var(--color-border-strong);
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
  flex: 1 1 100%;
}
.bcn-planr__num {
  font-family: var(--font-mono);
  font-size: 0.85em;
  color: var(--color-text-tertiary);
  margin-right: var(--spacing-250);
}
.bcn-planr__h2 {
  margin: 0;
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
}
.bcn-planr__excerpt {
  margin: 0;
  font-size: var(--type-size-200);
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 72ch;
}
.bcn-planr__coas {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-150);
}
.bcn-planr__coa {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  padding: 1px 5px;
  border-radius: var(--radius-100);
  line-height: 1.5;
  text-decoration: none;
  white-space: nowrap;
}
.bcn-planr__thread {
  list-style: none;
  margin: var(--spacing-100) 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-planr__comment,
.bcn-planr__reply {
  display: flex;
  gap: var(--spacing-250);
}
.bcn-planr__comment {
  padding: var(--spacing-300);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-200);
  background: var(--color-surface);
}
.bcn-planr__avatar {
  flex: none;
}
.bcn-planr__c-body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
  min-width: 0;
  flex: 1;
}
.bcn-planr__c-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-200);
  font-size: var(--type-size-150);
}
.bcn-planr__c-author {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-planr__c-time {
  color: var(--color-text-tertiary);
  font-size: var(--type-size-100);
}
.bcn-planr__c-tags {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  margin-left: auto;
}
.bcn-planr__c-text {
  margin: 0;
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
  line-height: 1.55;
}
.bcn-planr__replies {
  list-style: none;
  margin: var(--spacing-100) 0 0;
  padding: var(--spacing-250) 0 0 var(--spacing-400);
  border-top: 1px solid var(--color-border-light);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-250);
}
.bcn-planr__h3 {
  margin: 0;
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  line-height: 1.35;
}
.bcn-planr__noresults {
  margin: 0;
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
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
.esa-badge--warning {
  --_badge-bg: var(--color-warning, #ffc53d);
  --_badge-text: var(--color-warning-on-fill, #4f3422);
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
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
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
.bcn-status-select {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100);
}
.bcn-status-select__dd {
  position: relative;
}
.bcn-status-select__trigger {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  height: 40px;
  padding: 0 var(--spacing-300);
  font-size: 0.875rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  background: var(--color-surface);
  border: 1px solid var(--form-border-color);
  border-radius: var(--form-radius-md);
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}
.bcn-status-select__dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex-shrink: 0;
}
.bcn-status-select__value {
  flex: 1;
  text-align: left;
}
.bcn-status-select__chev {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
  transition: transform 0.15s ease;
}
.bcn-status-select__menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  min-width: 100%;
  width: max-content;
  z-index: 20;
  margin: 0;
  padding: var(--spacing-100);
  list-style: none;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--form-radius-md);
  box-shadow: var(--shadow-300);
}
.bcn-status-select__menu[hidden] {
  display: none;
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
.esa-avatar {
  --_avatar-size: var(--avatar-size-md, 40px);
  --_avatar-font-size: 16px;
  --_avatar-radius: var(--avatar-radius, var(--radius-full, 9999px));
  --_avatar-bg: var(--avatar-bg, hsl(var(--_avatar-hue, 200) 45% 65%));
  --_avatar-text: var(--avatar-text-color, var(--color-text-inverse, #fff));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_avatar-size);
  height: var(--_avatar-size);
  border-radius: var(--_avatar-radius);
  background: var(--_avatar-bg);
  color: var(--_avatar-text);
  font-size: var(--_avatar-font-size);
  font-weight: 600;
  overflow: hidden;
  flex-shrink: 0;
  user-select: none;
  box-sizing: border-box;
}
.esa-avatar--sm {
  --_avatar-size: var(--avatar-size-sm, 28px);
  --_avatar-font-size: 11px;
}
.esa-avatar__initials {
  line-height: 1;
  letter-spacing: 0.02em;
}
.esa-pill {
  --_pill-bg: var(--pill-bg, var(--color-surface-sunken, #efefef));
  --_pill-text: var(--pill-text-color, var(--color-text-primary, #171717));
  --_pill-border: var(--pill-border-color, var(--color-border-light, #efefef));
  --_pill-height: var(--pill-height-md, 28px);
  --_pill-font-size: 13px;
  --_pill-padding-x: var(--spacing-200, 0.5rem);
  --_pill-gap: var(--spacing-100, 0.25rem);
  display: inline-flex;
  align-items: center;
  gap: var(--_pill-gap);
  height: var(--_pill-height);
  padding-inline: var(--_pill-padding-x);
  border: 1px solid var(--_pill-border);
  border-radius: var(--pill-radius, var(--radius-full, 9999px));
  background: var(--_pill-bg);
  color: var(--_pill-text);
  font-size: var(--_pill-font-size);
  line-height: 1;
  white-space: nowrap;
  box-sizing: border-box;
}
.esa-pill--sm {
  --_pill-height: var(--pill-height-sm, 22px);
  --_pill-font-size: 11px;
  --_pill-padding-x: var(--spacing-150, 0.375rem);
}
.esa-pill__label {
  font-weight: 500;
}
```

## Tokens
| Token | Value | Tier |
|---|---|---|
| `--avatar-bg` | `hsl(200 45% 65%)` | component |
| `--avatar-radius` | `9999px` | component |
| `--avatar-size-md` | `40px` | component |
| `--avatar-size-sm` | `28px` | component |
| `--avatar-text-color` | `#fcfcfc` | component |
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
| `--color-accent` | `#f76b15` | semantic |
| `--color-border` | `#dcdcdc` | semantic |
| `--color-border-light` | `#efefef` | semantic |
| `--color-border-strong` | `#bdbdbd` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-info` | `#228be6` | semantic |
| `--color-primary` | `#005862` | semantic |
| `--color-primary-strong` | `#2a7e3b` | semantic |
| `--color-success` | `#2e7571` | semantic |
| `--color-surface` | `#fcfcfc` | semantic |
| `--color-surface-sunken` | `#efefef` | semantic |
| `--color-text-inverse` | `#fcfcfc` | semantic |
| `--color-text-primary` | `#3d3d3d` | semantic |
| `--color-text-secondary` | `#525252` | semantic |
| `--color-text-tertiary` | `#656565` | semantic |
| `--color-warning` | `#f2770e` | semantic |
| `--color-warning-on-fill` | `#4f3422` | semantic |
| `--filter-clear-color` | `#7c7c7c` | component |
| `--filter-clear-color-hover` | `#ce2c31` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-mono` | `"Roboto Mono", ui-monospace, monospace` | primitive |
| `--font-sans` | `"DM Sans", sans-serif` | primitive |
| `--font-weight-bold` | `650` | primitive |
| `--font-weight-medium` | `450` | primitive |
| `--font-weight-regular` | `350` | primitive |
| `--font-weight-semibold` | `550` | primitive |
| `--form-border-color` | `#dcdcdc` | component |
| `--form-font-size-sm` | `clamp(.625rem, .56rem + .32vw, .75rem)` | component |
| `--form-height-md` | `36px` | component |
| `--form-radius-md` | `.25rem` | component |
| `--icon-button-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-medium` | `20px` | component |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-small` | `16px` | component |
| `--icon-size-xs` | `14px` | primitive |
| `--pill-bg` | `#efefef` | component |
| `--pill-border-color` | `#efefef` | component |
| `--pill-height-md` | `28px` | component |
| `--pill-height-sm` | `22px` | component |
| `--pill-radius` | `.25rem` | component |
| `--pill-text-color` | `#3d3d3d` | component |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-400` | `.75rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--shadow-300` | `0 6px 24px -6px rgba(0, 0, 0, .07)` | primitive |
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

---
_Full page, complete stylesheet, and all tokens: `./full-page.md`, `../styles.css`, `../index.html`._
