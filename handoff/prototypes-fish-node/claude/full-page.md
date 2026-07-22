# Full page

Re-implement this UI section faithfully on your stack. Keep the CSS custom-property
names (`var(--…)`) so it stays themeable — the values below are the resolved
`beacon` theme of the **prototypes-fish-node** design system (an ESA Ecology spoke).

- **Source prototype:** http://localhost:4399/beacon-design/prototypes/fish-node/
- **Section element:** `<page>`
- **Components:** esa-badge (hub), esa-button (hub), esa-collapsible (hub), esa-empty-state (hub), esa-icon (hub), esa-icon-button (hub)

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
              <a href="/beacon-design/prototypes/fish-studies" class="nav-sublink">
                Science Plan
              </a>
            </li>
            <li class="nav-item">
              <a href="/beacon-design/prototypes/fish-gantt" class="nav-sublink active">
                Study Planning
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
                <a class="breadcrumb-item" href="/beacon-design/prototypes/fish-gantt">
                  Study Planning </a
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
                <span class="breadcrumb-item" aria-current="page"> Node details </span>
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
                      d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
                    ></path>
                    <path d="M6.453 15h11.094"></path>
                    <path d="M8.5 2h7"></path>
                  </svg>
                </span>
                Node details
              </h1>
              <span class="bcn-node-page__badge" id="bcn-node-badge" hidden="">—</span>
            </div>
            <div class="page-layout__utilities">
              <div class="bcn-node-page__utils">
                <span
                  class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
                >
                  <a
                    class="esa-button__native"
                    href="/beacon-design/prototypes/fish-gantt"
                    role="button"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path>
                      </svg>
                    </span>
                    <span class="esa-button__label"> Back to Study Planning </span>
                  </a>
                </span>
              </div>
            </div>
          </section>
          <section class="page-layout__content">
            <div class="bcn-node-page">
              <section class="bcn-node-page__empty" data-node-empty="">
                <div class="esa-empty-state esa-empty-state--md">
                  <h3 class="esa-empty-state__title">Pick a node</h3>
                  <p class="esa-empty-state__description">
                    Open a node from the Study Planning gantt (View full details in the row drawer),
                    or pass ?id= with a COA / STY / SUB / TSK id.
                  </p>
                  <div class="esa-empty-state__actions">
                    <span
                      class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--sm"
                    >
                      <a
                        class="esa-button__native"
                        href="/beacon-design/prototypes/fish-gantt"
                        role="button"
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
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                          </svg>
                        </span>
                        <span class="esa-button__label"> Open Study Planning </span>
                      </a>
                    </span>
                  </div>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="COA-10.19"
                data-node-name="Fisheries Evaluation Studies"
                data-node-tier="Commitment"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Fisheries Evaluation Studies</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">COA-10.19</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Jul 2026 – Oct 2032</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2026–WY2033</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$8.5M · WY2026–2033</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2026">
                            <th scope="row" class="bcn-funding__year">WY2026</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $90k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $90k
                            </td>
                          </tr>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $770k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $770k
                            </td>
                          </tr>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $1.6M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $1.6M
                            </td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $2.5M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $2.5M
                            </td>
                          </tr>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $1.4M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $1.4M
                            </td>
                          </tr>
                          <tr data-wy="2031">
                            <th scope="row" class="bcn-funding__year">WY2031</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $1.4M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $1.4M
                            </td>
                          </tr>
                          <tr data-wy="2032">
                            <th scope="row" class="bcn-funding__year">WY2032</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $610k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $610k
                            </td>
                          </tr>
                          <tr data-wy="2033">
                            <th scope="row" class="bcn-funding__year">WY2033</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $8.5M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $8.5M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <script
                      type="module"
                      src="/beacon-design/_astro/BcnFundingPlan.astro_astro_type_script_index_0_lang.BpU5iGfi.js"
                    ></script>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 3 studies</span>
                        <span
                          class="bcn-status-chip"
                          data-status="blocked"
                          style="--_chip: var(--st-blocked, #d73027)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Blocked</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="19 tasks: 18 on track, 0 at risk, 1 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 5.263157894736842%; --_c: #d73027"
                          title="1 blocked"
                        ></span
                        ><span
                          class="bcn-rollup__seg"
                          style="width: 94.73684210526315%; --_c: #1a9850"
                          title="18 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">19 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>18 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>1
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <ul class="bcn-detail__constraints">
                            <li>Funding ceiling $12.0M (illustrative)</li>
                            <li>ICF-primed DWR contract — separate from the ESA on-call</li>
                          </ul>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
                <script
                  type="module"
                  src="/beacon-design/_astro/BcnNodeDetail.astro_astro_type_script_index_0_lang.DXn9G0U7.js"
                ></script>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="STY-014"
                data-node-name="Migration &amp; Survival Study"
                data-node-tier="Study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Migration &amp; Survival Study</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">STY-014</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Fisheries Evaluation Studies</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Jul 2026 – Oct 2031</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2026–WY2032</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$5.3M · WY2026–2032</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2026">
                            <th scope="row" class="bcn-funding__year">WY2026</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $90k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $90k
                            </td>
                          </tr>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $530k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $530k
                            </td>
                          </tr>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $1.4M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $1.4M
                            </td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $1.8M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $1.8M
                            </td>
                          </tr>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $630k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $630k
                            </td>
                          </tr>
                          <tr data-wy="2031">
                            <th scope="row" class="bcn-funding__year">WY2031</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $710k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $710k
                            </td>
                          </tr>
                          <tr data-wy="2032">
                            <th scope="row" class="bcn-funding__year">WY2032</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $160k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $160k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $5.3M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $5.3M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 2 sub-studies</span>
                        <span
                          class="bcn-status-chip"
                          data-status="blocked"
                          style="--_chip: var(--st-blocked, #d73027)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Blocked</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="10 tasks: 9 on track, 0 at risk, 1 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 10%; --_c: #d73027"
                          title="1 blocked"
                        ></span
                        ><span
                          class="bcn-rollup__seg"
                          style="width: 90%; --_c: #1a9850"
                          title="9 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">10 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>9 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>1
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="SUB-021"
                data-node-name="Near-field intake behavior &amp; survival"
                data-node-tier="Sub-study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Near-field intake behavior &amp; survival</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">SUB-021</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.1a</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Migration &amp; Survival Study</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Jul 2026 – Dec 2029</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2026–WY2030</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$2.4M · WY2026–2030</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2026">
                            <th scope="row" class="bcn-funding__year">WY2026</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $90k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $90k
                            </td>
                          </tr>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $410k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $410k
                            </td>
                          </tr>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $940k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $940k
                            </td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $830k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $830k
                            </td>
                          </tr>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $80k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $80k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $2.4M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $2.4M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 6 tasks</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="6 tasks: 6 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="6 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">6 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>6 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-029"
                data-node-name="Detailed baseline study plan"
                data-node-tier="Task"
                data-start="2026-07"
                data-end="2027-03"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Detailed baseline study plan</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-029</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.1a.0</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Near-field intake behavior &amp; survival</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Jul 2026 – Mar 2027</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2026–WY2027</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$180k · WY2026–2027</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2026">
                            <th scope="row" class="bcn-funding__year">WY2026</th>
                            <td class="bcn-funding__num" data-cell="own">$90k</td>
                          </tr>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">$90k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $180k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-030"
                data-node-name="Acoustic tag &amp; receiver procurement"
                data-node-tier="Task"
                data-start="2027-04"
                data-end="2028-03"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Acoustic tag &amp; receiver procurement</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-030</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.1a.0b</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Near-field intake behavior &amp; survival</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2027 – Mar 2028</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2027–WY2028</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$640k · WY2027–2028</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">$320k</td>
                          </tr>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">$320k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $640k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note">
                            Tag and receiver lead times are significant; fish must be ordered well
                            in advance of tagging.
                          </p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-001"
                data-node-name="Fabricate &amp; install acoustic receiver array"
                data-node-tier="Task"
                data-start="2028-04"
                data-end="2028-09"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Fabricate &amp; install acoustic receiver array</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-001</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.1a.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Near-field intake behavior &amp; survival</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2028 – Sep 2028</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Dry season (Apr–Sep)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2028</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$620k · WY2028–2028</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">$620k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $620k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-002"
                data-node-name="Winter-freshet acoustic tagging season"
                data-node-tier="Task"
                data-start="2028-10"
                data-end="2029-03"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Winter-freshet acoustic tagging season</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-002</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.1a.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Near-field intake behavior &amp; survival</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Oct 2028 – Mar 2029</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Winter freshet (Oct–Mar)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2029</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$540k · WY2029–2029</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">$540k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $540k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-003"
                data-node-name="Receiver retrieval &amp; detection QA"
                data-node-tier="Task"
                data-start="2029-04"
                data-end="2029-08"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Receiver retrieval &amp; detection QA</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-003</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.1a.3</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Near-field intake behavior &amp; survival</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2029 – Aug 2029</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Dry season (Apr–Sep)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2029</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$210k · WY2029–2029</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">$210k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $210k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-004"
                data-node-name="Draft near-field survival memo"
                data-node-tier="Task"
                data-start="2029-09"
                data-end="2029-12"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Draft near-field survival memo</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-004</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.1a.4</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Near-field intake behavior &amp; survival</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Sep 2029 – Dec 2029</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2029–WY2030</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$160k · WY2029–2030</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">$80k</td>
                          </tr>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">$80k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $160k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="SUB-022"
                data-node-name="Far-field through-Delta survival &amp; routing"
                data-node-tier="Sub-study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Far-field through-Delta survival &amp; routing</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">SUB-022</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.1b</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Migration &amp; Survival Study</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Oct 2026 – Oct 2031</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2027–WY2032</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$3.0M · WY2027–2032</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $120k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $120k
                            </td>
                          </tr>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $440k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $440k
                            </td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $990k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $990k
                            </td>
                          </tr>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $550k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $550k
                            </td>
                          </tr>
                          <tr data-wy="2031">
                            <th scope="row" class="bcn-funding__year">WY2031</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $710k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $710k
                            </td>
                          </tr>
                          <tr data-wy="2032">
                            <th scope="row" class="bcn-funding__year">WY2032</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $160k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $160k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $3.0M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $3.0M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 4 tasks</span>
                        <span
                          class="bcn-status-chip"
                          data-status="blocked"
                          style="--_chip: var(--st-blocked, #d73027)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">Blocked</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="4 tasks: 3 on track, 0 at risk, 1 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 25%; --_c: #d73027"
                          title="1 blocked"
                        ></span
                        ><span
                          class="bcn-rollup__seg"
                          style="width: 75%; --_c: #1a9850"
                          title="3 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">4 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>3 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>1
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <ul class="bcn-detail__constraints">
                            <li>Back-scheduled from in-water construction (WY2034)</li>
                            <li>Requires ≥3 tag-release years before model fit</li>
                          </ul>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-031"
                data-node-name="Receiver-site encroachment permits"
                data-node-tier="Task"
                data-start="2026-10"
                data-end="2027-09"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Receiver-site encroachment permits</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-031</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.1b.0</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Far-field through-Delta survival &amp; routing</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Oct 2026 – Sep 2027</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Winter freshet (Oct–Mar) → Dry season (Apr–Sep)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2027</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$120k · WY2027–2027</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">$120k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $120k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note">
                            Two of eleven planned receiver sites are stalled in reclamation-district
                            encroachment review.
                          </p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-005"
                data-node-name="Regional receiver network build-out"
                data-node-tier="Task"
                data-start="2028-05"
                data-end="2028-10"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Regional receiver network build-out</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-005</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.1b.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Far-field through-Delta survival &amp; routing</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">May 2028 – Oct 2028</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2028–WY2029</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$880k · WY2028–2029</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">$440k</td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">$440k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $880k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note">
                            Two of eleven planned receiver sites still need encroachment permits
                            from the reclamation districts.
                          </p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-006"
                data-node-name="Multi-year tag release &amp; tracking"
                data-node-tier="Task"
                data-start="2028-11"
                data-end="2031-03"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Multi-year tag release &amp; tracking</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-006</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.1b.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Far-field through-Delta survival &amp; routing</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Nov 2028 – Mar 2031</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Winter freshet (Oct–Mar)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2029–WY2031</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$1.6M · WY2029–2031</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">$550k</td>
                          </tr>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">$550k</td>
                          </tr>
                          <tr data-wy="2031">
                            <th scope="row" class="bcn-funding__year">WY2031</th>
                            <td class="bcn-funding__num" data-cell="own">$550k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $1.6M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-007"
                data-node-name="Through-Delta survival model fit"
                data-node-tier="Task"
                data-start="2031-04"
                data-end="2031-10"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Through-Delta survival model fit</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-007</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.1b.3</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Far-field through-Delta survival &amp; routing</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2031 – Oct 2031</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2031–WY2032</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$320k · WY2031–2032</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2031">
                            <th scope="row" class="bcn-funding__year">WY2031</th>
                            <td class="bcn-funding__num" data-cell="own">$160k</td>
                          </tr>
                          <tr data-wy="2032">
                            <th scope="row" class="bcn-funding__year">WY2032</th>
                            <td class="bcn-funding__num" data-cell="own">$160k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $320k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="STY-015"
                data-node-name="Predation Study"
                data-node-tier="Study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Predation Study</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">STY-015</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Fisheries Evaluation Studies</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Jan 2027 – Jun 2031</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2027–WY2031</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$1.3M · WY2027–2031</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $300k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $300k
                            </td>
                          </tr>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $500k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $500k
                            </td>
                          </tr>
                          <tr data-wy="2031">
                            <th scope="row" class="bcn-funding__year">WY2031</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $380k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $380k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $1.3M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $1.3M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 2 sub-studies</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="5 tasks: 5 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="5 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">5 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>5 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="SUB-023"
                data-node-name="Predator density &amp; distribution surveys"
                data-node-tier="Sub-study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Predator density &amp; distribution surveys</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">SUB-023</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.2a</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Predation Study</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Jan 2027 – Mar 2030</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2027–WY2030</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$700k · WY2027–2030</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $300k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $300k
                            </td>
                          </tr>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $260k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $260k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $700k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $700k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 3 tasks</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="3 tasks: 3 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="3 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">3 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>3 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-032"
                data-node-name="Predation study plan &amp; permitting"
                data-node-tier="Task"
                data-start="2027-01"
                data-end="2027-09"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Predation study plan &amp; permitting</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-032</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.2a.0</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Predator density &amp; distribution surveys</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Jan 2027 – Sep 2027</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Winter freshet (Oct–Mar) → Dry season (Apr–Sep)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2027</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$140k · WY2027–2027</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">$140k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $140k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-008"
                data-node-name="Baseline predator hydroacoustic survey"
                data-node-tier="Task"
                data-start="2029-04"
                data-end="2029-09"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Baseline predator hydroacoustic survey</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-008</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.2a.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Predator density &amp; distribution surveys</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2029 – Sep 2029</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Dry season (Apr–Sep)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2029</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$300k · WY2029–2029</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">$300k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $300k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-009"
                data-node-name="Predation hotspot mapping"
                data-node-tier="Task"
                data-start="2029-10"
                data-end="2030-03"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Predation hotspot mapping</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-009</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.2a.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Predator density &amp; distribution surveys</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Oct 2029 – Mar 2030</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Winter freshet (Oct–Mar)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2030</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$260k · WY2030–2030</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">$260k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $260k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <ul class="bcn-detail__constraints">
                            <li>Requires landowner access agreement (DWR ROW)</li>
                          </ul>
                          <p class="bcn-detail__note">
                            Blocked on landowner access agreement for the Georgiana Slough approach;
                            escalated to DWR right-of-way.
                          </p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="SUB-024"
                data-node-name="Predation exposure modeling"
                data-node-tier="Sub-study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Predation exposure modeling</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">SUB-024</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.2b</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Predation Study</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Apr 2030 – Jun 2031</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2030–WY2031</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$620k · WY2030–2031</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $240k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $240k
                            </td>
                          </tr>
                          <tr data-wy="2031">
                            <th scope="row" class="bcn-funding__year">WY2031</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $380k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $380k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $620k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $620k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 2 tasks</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="2 tasks: 2 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="2 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">2 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>2 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-010"
                data-node-name="Diet &amp; eDNA sampling"
                data-node-tier="Task"
                data-start="2030-04"
                data-end="2030-09"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Diet &amp; eDNA sampling</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-010</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.2b.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Predation exposure modeling</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2030 – Sep 2030</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Dry season (Apr–Sep)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2030</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$240k · WY2030–2030</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">$240k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $240k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-011"
                data-node-name="Predation exposure model build"
                data-node-tier="Task"
                data-start="2030-10"
                data-end="2031-06"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Predation exposure model build</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-011</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.2b.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Predation exposure modeling</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Oct 2030 – Jun 2031</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Winter freshet (Oct–Mar) → Dry season (Apr–Sep)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2031</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$380k · WY2031–2031</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2031">
                            <th scope="row" class="bcn-funding__year">WY2031</th>
                            <td class="bcn-funding__num" data-cell="own">$380k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $380k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="STY-016"
                data-node-name="Abundance &amp; Distribution Study"
                data-node-tier="Study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Abundance &amp; Distribution Study</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">STY-016</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.3</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Fisheries Evaluation Studies</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Apr 2027 – Oct 2032</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2027–WY2033</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$1.9M · WY2027–2033</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $100k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $100k
                            </td>
                          </tr>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $190k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $190k
                            </td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $400k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $400k
                            </td>
                          </tr>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $310k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $310k
                            </td>
                          </tr>
                          <tr data-wy="2031">
                            <th scope="row" class="bcn-funding__year">WY2031</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $310k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $310k
                            </td>
                          </tr>
                          <tr data-wy="2032">
                            <th scope="row" class="bcn-funding__year">WY2032</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $450k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $450k
                            </td>
                          </tr>
                          <tr data-wy="2033">
                            <th scope="row" class="bcn-funding__year">WY2033</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $1.9M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $1.9M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 1 sub-studies</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="4 tasks: 4 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="4 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">4 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>4 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="SUB-025"
                data-node-name="Juvenile abundance &amp; distribution monitoring"
                data-node-tier="Sub-study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Juvenile abundance &amp; distribution monitoring</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">SUB-025</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.3a</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Abundance &amp; Distribution Study</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Apr 2027 – Oct 2032</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2027–WY2033</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$1.9M · WY2027–2033</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $100k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $100k
                            </td>
                          </tr>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $190k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $190k
                            </td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $400k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $400k
                            </td>
                          </tr>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $310k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $310k
                            </td>
                          </tr>
                          <tr data-wy="2031">
                            <th scope="row" class="bcn-funding__year">WY2031</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $310k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $310k
                            </td>
                          </tr>
                          <tr data-wy="2032">
                            <th scope="row" class="bcn-funding__year">WY2032</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $450k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $450k
                            </td>
                          </tr>
                          <tr data-wy="2033">
                            <th scope="row" class="bcn-funding__year">WY2033</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $1.9M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $1.9M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 4 tasks</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="4 tasks: 4 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="4 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">4 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>4 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-033"
                data-node-name="Abundance-methods pilot design"
                data-node-tier="Task"
                data-start="2027-04"
                data-end="2028-03"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Abundance-methods pilot design</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-033</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.3a.0</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Juvenile abundance &amp; distribution monitoring</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2027 – Mar 2028</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2027–WY2028</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$200k · WY2027–2028</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">$100k</td>
                          </tr>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">$100k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $200k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-012"
                data-node-name="Monitoring-array installation &amp; calibration"
                data-node-tier="Task"
                data-start="2028-08"
                data-end="2028-11"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Monitoring-array installation &amp; calibration</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-012</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.3a.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Juvenile abundance &amp; distribution monitoring</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Aug 2028 – Nov 2028</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2028–WY2029</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$180k · WY2028–2029</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">$90k</td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">$90k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $180k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-013"
                data-node-name="Abundance &amp; distribution field seasons"
                data-node-tier="Task"
                data-start="2028-12"
                data-end="2032-03"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Abundance &amp; distribution field seasons</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-013</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.3a.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Juvenile abundance &amp; distribution monitoring</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Dec 2028 – Mar 2032</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Winter freshet (Oct–Mar)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2029–WY2032</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$1.2M · WY2029–2032</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">$310k</td>
                          </tr>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">$310k</td>
                          </tr>
                          <tr data-wy="2031">
                            <th scope="row" class="bcn-funding__year">WY2031</th>
                            <td class="bcn-funding__num" data-cell="own">$310k</td>
                          </tr>
                          <tr data-wy="2032">
                            <th scope="row" class="bcn-funding__year">WY2032</th>
                            <td class="bcn-funding__num" data-cell="own">$310k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $1.2M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-014"
                data-node-name="Abundance &amp; distribution analysis"
                data-node-tier="Task"
                data-start="2032-04"
                data-end="2032-10"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Abundance &amp; distribution analysis</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-014</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.19.3a.3</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Juvenile abundance &amp; distribution monitoring</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2032 – Oct 2032</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2032–WY2033</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$280k · WY2032–2033</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2032">
                            <th scope="row" class="bcn-funding__year">WY2032</th>
                            <td class="bcn-funding__num" data-cell="own">$140k</td>
                          </tr>
                          <tr data-wy="2033">
                            <th scope="row" class="bcn-funding__year">WY2033</th>
                            <td class="bcn-funding__num" data-cell="own">$140k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $280k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="COA-10.20"
                data-node-name="Water Quality Evaluation Studies"
                data-node-tier="Commitment"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Water Quality Evaluation Studies</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">COA-10.20</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.20</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Aug 2026 – Sep 2030</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2026–WY2030</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$2.1M · WY2026–2030</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2026">
                            <th scope="row" class="bcn-funding__year">WY2026</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $40k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $40k
                            </td>
                          </tr>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $160k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $160k
                            </td>
                          </tr>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $1.1M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $1.1M
                            </td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $480k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $480k
                            </td>
                          </tr>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $350k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $350k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $2.1M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $2.1M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 2 studies</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="9 tasks: 9 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="9 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">9 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>9 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <ul class="bcn-detail__constraints">
                            <li>Funding ceiling $6.0M (illustrative)</li>
                            <li>Infrastructure back-scheduled from 30% design (WY2031)</li>
                          </ul>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="STY-017"
                data-node-name="Installation of New Real-time Monitoring Station"
                data-node-tier="Study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Installation of New Real-time Monitoring Station</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">STY-017</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.20.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Water Quality Evaluation Studies</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Aug 2026 – Mar 2029</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2026–WY2029</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$1.4M · WY2026–2029</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2026">
                            <th scope="row" class="bcn-funding__year">WY2026</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $40k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $40k
                            </td>
                          </tr>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $160k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $160k
                            </td>
                          </tr>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $1.1M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $1.1M
                            </td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $190k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $190k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $1.4M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $1.4M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 2 sub-studies</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="6 tasks: 6 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="6 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">6 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>6 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="SUB-026"
                data-node-name="Real-time station build-out"
                data-node-tier="Sub-study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Real-time station build-out</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">SUB-026</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.20.1a</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Installation of New Real-time Monitoring Station</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Aug 2026 – Jan 2029</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2026–WY2029</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$1.1M · WY2026–2029</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2026">
                            <th scope="row" class="bcn-funding__year">WY2026</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $40k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $40k
                            </td>
                          </tr>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $160k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $160k
                            </td>
                          </tr>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $840k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $840k
                            </td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $90k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $90k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $1.1M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $1.1M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 4 tasks</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="4 tasks: 4 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="4 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">4 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>4 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-034"
                data-node-name="Station design &amp; permitting scoping"
                data-node-tier="Task"
                data-start="2026-08"
                data-end="2027-03"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Station design &amp; permitting scoping</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-034</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.20.1a.0</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Real-time station build-out</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Aug 2026 – Mar 2027</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2026–WY2027</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$90k · WY2026–2027</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2026">
                            <th scope="row" class="bcn-funding__year">WY2026</th>
                            <td class="bcn-funding__num" data-cell="own">$40k</td>
                          </tr>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">$50k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $90k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-015"
                data-node-name="Station siting &amp; regulatory clearance"
                data-node-tier="Task"
                data-start="2027-04"
                data-end="2027-12"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Station siting &amp; regulatory clearance</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-015</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.20.1a.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Real-time station build-out</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2027 – Dec 2027</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2027–WY2028</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$220k · WY2027–2028</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">$110k</td>
                          </tr>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">$110k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $220k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note">
                            Two candidate sites overlap CDFW-designated sensitive habitat; siting
                            under review.
                          </p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-016"
                data-node-name="Sensor procurement &amp; installation"
                data-node-tier="Task"
                data-start="2028-01"
                data-end="2028-08"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Sensor procurement &amp; installation</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-016</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.20.1a.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Real-time station build-out</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Jan 2028 – Aug 2028</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Winter freshet (Oct–Mar) → Dry season (Apr–Sep)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2028</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$640k · WY2028–2028</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">$640k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $640k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-017"
                data-node-name="Telemetry commissioning"
                data-node-tier="Task"
                data-start="2028-09"
                data-end="2029-01"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Telemetry commissioning</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-017</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.20.1a.3</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Real-time station build-out</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Sep 2028 – Jan 2029</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2028–WY2029</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$180k · WY2028–2029</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">$90k</td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">$90k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $180k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="SUB-027"
                data-node-name="Data QA/QC &amp; pipeline"
                data-node-tier="Sub-study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Data QA/QC &amp; pipeline</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">SUB-027</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.20.1b</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Installation of New Real-time Monitoring Station</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Apr 2028 – Mar 2029</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2028–WY2029</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$320k · WY2028–2029</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $220k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $220k
                            </td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $100k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $100k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $320k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $320k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 2 tasks</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="2 tasks: 2 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="2 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">2 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>2 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-018"
                data-node-name="QA/QC protocol authoring"
                data-node-tier="Task"
                data-start="2028-04"
                data-end="2028-08"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">QA/QC protocol authoring</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-018</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.20.1b.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Data QA/QC &amp; pipeline</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2028 – Aug 2028</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Dry season (Apr–Sep)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2028</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$120k · WY2028–2028</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">$120k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $120k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-019"
                data-node-name="CDEC / Beacon data-pipeline integration"
                data-node-tier="Task"
                data-start="2028-09"
                data-end="2029-03"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >CDEC / Beacon data-pipeline integration</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-019</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.20.1b.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Data QA/QC &amp; pipeline</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Sep 2028 – Mar 2029</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2028–WY2029</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$200k · WY2028–2029</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">$100k</td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">$100k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $200k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="STY-018"
                data-node-name="Sediment &amp; Turbidity Monitoring"
                data-node-tier="Study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Sediment &amp; Turbidity Monitoring</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">STY-018</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.20.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Water Quality Evaluation Studies</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Apr 2029 – Sep 2030</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2029–WY2030</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$640k · WY2029–2030</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $290k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $290k
                            </td>
                          </tr>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $350k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $350k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $640k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $640k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 1 sub-studies</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="3 tasks: 3 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="3 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">3 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>3 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="SUB-028"
                data-node-name="Sediment &amp; turbidity sampling program"
                data-node-tier="Sub-study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Sediment &amp; turbidity sampling program</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">SUB-028</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.20.2a</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Sediment &amp; Turbidity Monitoring</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Apr 2029 – Sep 2030</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2029–WY2030</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$640k · WY2029–2030</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $290k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $290k
                            </td>
                          </tr>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $350k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $350k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $640k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $640k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 3 tasks</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="3 tasks: 3 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="3 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">3 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>3 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-020"
                data-node-name="Sampling design &amp; QAPP"
                data-node-tier="Task"
                data-start="2029-04"
                data-end="2029-08"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Sampling design &amp; QAPP</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-020</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.20.2a.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Sediment &amp; turbidity sampling program</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2029 – Aug 2029</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Dry season (Apr–Sep)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2029</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$140k · WY2029–2029</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">$140k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $140k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-021"
                data-node-name="Turbidity &amp; SSC field season 1"
                data-node-tier="Task"
                data-start="2029-09"
                data-end="2030-03"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Turbidity &amp; SSC field season 1</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-021</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.20.2a.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Sediment &amp; turbidity sampling program</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Sep 2029 – Mar 2030</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2029–WY2030</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$310k · WY2029–2030</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">$150k</td>
                          </tr>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">$160k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $310k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-022"
                data-node-name="Sediment-flux lab analysis &amp; reporting"
                data-node-tier="Task"
                data-start="2030-04"
                data-end="2030-09"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Sediment-flux lab analysis &amp; reporting</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-022</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.20.2a.3</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Sediment &amp; turbidity sampling program</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2030 – Sep 2030</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Dry season (Apr–Sep)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2030</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$190k · WY2030–2030</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2030">
                            <th scope="row" class="bcn-funding__year">WY2030</th>
                            <td class="bcn-funding__num" data-cell="own">$190k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $190k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="COA-10.21"
                data-node-name="Ecological Response Evaluation Studies"
                data-node-tier="Commitment"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Ecological Response Evaluation Studies</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">COA-10.21</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.21</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Apr 2033 – Sep 2042</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2033–WY2042</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$5.0M · WY2033–2042</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2033">
                            <th scope="row" class="bcn-funding__year">WY2033</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $130k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $130k
                            </td>
                          </tr>
                          <tr data-wy="2034">
                            <th scope="row" class="bcn-funding__year">WY2034</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $270k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $270k
                            </td>
                          </tr>
                          <tr data-wy="2035">
                            <th scope="row" class="bcn-funding__year">WY2035</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $740k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $740k
                            </td>
                          </tr>
                          <tr data-wy="2036">
                            <th scope="row" class="bcn-funding__year">WY2036</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $740k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $740k
                            </td>
                          </tr>
                          <tr data-wy="2037">
                            <th scope="row" class="bcn-funding__year">WY2037</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $740k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $740k
                            </td>
                          </tr>
                          <tr data-wy="2038">
                            <th scope="row" class="bcn-funding__year">WY2038</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $1.3M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $1.3M
                            </td>
                          </tr>
                          <tr data-wy="2039">
                            <th scope="row" class="bcn-funding__year">WY2039</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $350k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $350k
                            </td>
                          </tr>
                          <tr data-wy="2040">
                            <th scope="row" class="bcn-funding__year">WY2040</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                          <tr data-wy="2041">
                            <th scope="row" class="bcn-funding__year">WY2041</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                          <tr data-wy="2042">
                            <th scope="row" class="bcn-funding__year">WY2042</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $460k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $460k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $5.0M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $5.0M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 2 studies</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="6 tasks: 6 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="6 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">6 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>6 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <ul class="bcn-detail__constraints">
                            <li>Funding ceiling $8.0M (illustrative)</li>
                            <li>
                              Runs Phase 1 operations (WY2034) through the decadal review (WY2042)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="STY-019"
                data-node-name="Hydrodynamics at Georgiana Slough Monitoring"
                data-node-tier="Study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Hydrodynamics at Georgiana Slough Monitoring</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">STY-019</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.21.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Ecological Response Evaluation Studies</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Apr 2033 – Sep 2041</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2033–WY2041</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$4.2M · WY2033–2041</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2033">
                            <th scope="row" class="bcn-funding__year">WY2033</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $130k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $130k
                            </td>
                          </tr>
                          <tr data-wy="2034">
                            <th scope="row" class="bcn-funding__year">WY2034</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $270k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $270k
                            </td>
                          </tr>
                          <tr data-wy="2035">
                            <th scope="row" class="bcn-funding__year">WY2035</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $740k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $740k
                            </td>
                          </tr>
                          <tr data-wy="2036">
                            <th scope="row" class="bcn-funding__year">WY2036</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $740k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $740k
                            </td>
                          </tr>
                          <tr data-wy="2037">
                            <th scope="row" class="bcn-funding__year">WY2037</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $740k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $740k
                            </td>
                          </tr>
                          <tr data-wy="2038">
                            <th scope="row" class="bcn-funding__year">WY2038</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $950k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $950k
                            </td>
                          </tr>
                          <tr data-wy="2039">
                            <th scope="row" class="bcn-funding__year">WY2039</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $350k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $350k
                            </td>
                          </tr>
                          <tr data-wy="2040">
                            <th scope="row" class="bcn-funding__year">WY2040</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                          <tr data-wy="2041">
                            <th scope="row" class="bcn-funding__year">WY2041</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $4.2M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $4.2M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 2 sub-studies</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="4 tasks: 4 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="4 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">4 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>4 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="SUB-029"
                data-node-name="Continuous hydrodynamic monitoring"
                data-node-tier="Sub-study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Continuous hydrodynamic monitoring</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">SUB-029</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.21.1a</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Hydrodynamics at Georgiana Slough Monitoring</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Oct 2034 – Mar 2039</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2035–WY2039</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$2.8M · WY2035–2039</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2035">
                            <th scope="row" class="bcn-funding__year">WY2035</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $600k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $600k
                            </td>
                          </tr>
                          <tr data-wy="2036">
                            <th scope="row" class="bcn-funding__year">WY2036</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $600k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $600k
                            </td>
                          </tr>
                          <tr data-wy="2037">
                            <th scope="row" class="bcn-funding__year">WY2037</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $600k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $600k
                            </td>
                          </tr>
                          <tr data-wy="2038">
                            <th scope="row" class="bcn-funding__year">WY2038</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $810k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $810k
                            </td>
                          </tr>
                          <tr data-wy="2039">
                            <th scope="row" class="bcn-funding__year">WY2039</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $210k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $210k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $2.8M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $2.8M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 2 tasks</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="2 tasks: 2 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="2 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">2 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>2 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-023"
                data-node-name="ADCP array deployment &amp; data collection"
                data-node-tier="Task"
                data-start="2034-10"
                data-end="2038-03"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >ADCP array deployment &amp; data collection</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-023</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.21.1a.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Continuous hydrodynamic monitoring</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Oct 2034 – Mar 2038</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Winter freshet (Oct–Mar)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2035–WY2038</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$2.4M · WY2035–2038</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2035">
                            <th scope="row" class="bcn-funding__year">WY2035</th>
                            <td class="bcn-funding__num" data-cell="own">$600k</td>
                          </tr>
                          <tr data-wy="2036">
                            <th scope="row" class="bcn-funding__year">WY2036</th>
                            <td class="bcn-funding__num" data-cell="own">$600k</td>
                          </tr>
                          <tr data-wy="2037">
                            <th scope="row" class="bcn-funding__year">WY2037</th>
                            <td class="bcn-funding__num" data-cell="own">$600k</td>
                          </tr>
                          <tr data-wy="2038">
                            <th scope="row" class="bcn-funding__year">WY2038</th>
                            <td class="bcn-funding__num" data-cell="own">$600k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $2.4M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-024"
                data-node-name="Multi-year flow-split synthesis"
                data-node-tier="Task"
                data-start="2038-04"
                data-end="2039-03"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Multi-year flow-split synthesis</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-024</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.21.1a.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Continuous hydrodynamic monitoring</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2038 – Mar 2039</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2038–WY2039</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$420k · WY2038–2039</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2038">
                            <th scope="row" class="bcn-funding__year">WY2038</th>
                            <td class="bcn-funding__num" data-cell="own">$210k</td>
                          </tr>
                          <tr data-wy="2039">
                            <th scope="row" class="bcn-funding__year">WY2039</th>
                            <td class="bcn-funding__num" data-cell="own">$210k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $420k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="SUB-030"
                data-node-name="Routing &amp; flow-reversal analysis"
                data-node-tier="Sub-study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Routing &amp; flow-reversal analysis</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">SUB-030</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.21.1b</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Hydrodynamics at Georgiana Slough Monitoring</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Apr 2033 – Sep 2041</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2033–WY2041</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$1.4M · WY2033–2041</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2033">
                            <th scope="row" class="bcn-funding__year">WY2033</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $130k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $130k
                            </td>
                          </tr>
                          <tr data-wy="2034">
                            <th scope="row" class="bcn-funding__year">WY2034</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $270k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $270k
                            </td>
                          </tr>
                          <tr data-wy="2035">
                            <th scope="row" class="bcn-funding__year">WY2035</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                          <tr data-wy="2036">
                            <th scope="row" class="bcn-funding__year">WY2036</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                          <tr data-wy="2037">
                            <th scope="row" class="bcn-funding__year">WY2037</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                          <tr data-wy="2038">
                            <th scope="row" class="bcn-funding__year">WY2038</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                          <tr data-wy="2039">
                            <th scope="row" class="bcn-funding__year">WY2039</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                          <tr data-wy="2040">
                            <th scope="row" class="bcn-funding__year">WY2040</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                          <tr data-wy="2041">
                            <th scope="row" class="bcn-funding__year">WY2041</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $140k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $140k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $1.4M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $1.4M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 2 tasks</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="2 tasks: 2 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="2 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">2 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>2 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <ul class="bcn-detail__constraints">
                            <li>Continuous through operations (WY2034+)</li>
                          </ul>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-025"
                data-node-name="Hydrodynamic model calibration"
                data-node-tier="Task"
                data-start="2033-04"
                data-end="2033-12"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Hydrodynamic model calibration</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-025</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.21.1b.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Routing &amp; flow-reversal analysis</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2033 – Dec 2033</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2033–WY2034</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$260k · WY2033–2034</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2033">
                            <th scope="row" class="bcn-funding__year">WY2033</th>
                            <td class="bcn-funding__num" data-cell="own">$130k</td>
                          </tr>
                          <tr data-wy="2034">
                            <th scope="row" class="bcn-funding__year">WY2034</th>
                            <td class="bcn-funding__num" data-cell="own">$130k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $260k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-026"
                data-node-name="Annual hydrodynamic monitoring"
                data-node-tier="Task"
                data-start="2034-04"
                data-end="2041-09"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Annual hydrodynamic monitoring</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-026</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.21.1b.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Routing &amp; flow-reversal analysis</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2034 – Sep 2041</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Dry season (Apr–Sep)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2034–WY2041</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$1.1M · WY2034–2041</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2034">
                            <th scope="row" class="bcn-funding__year">WY2034</th>
                            <td class="bcn-funding__num" data-cell="own">$140k</td>
                          </tr>
                          <tr data-wy="2035">
                            <th scope="row" class="bcn-funding__year">WY2035</th>
                            <td class="bcn-funding__num" data-cell="own">$140k</td>
                          </tr>
                          <tr data-wy="2036">
                            <th scope="row" class="bcn-funding__year">WY2036</th>
                            <td class="bcn-funding__num" data-cell="own">$140k</td>
                          </tr>
                          <tr data-wy="2037">
                            <th scope="row" class="bcn-funding__year">WY2037</th>
                            <td class="bcn-funding__num" data-cell="own">$140k</td>
                          </tr>
                          <tr data-wy="2038">
                            <th scope="row" class="bcn-funding__year">WY2038</th>
                            <td class="bcn-funding__num" data-cell="own">$140k</td>
                          </tr>
                          <tr data-wy="2039">
                            <th scope="row" class="bcn-funding__year">WY2039</th>
                            <td class="bcn-funding__num" data-cell="own">$140k</td>
                          </tr>
                          <tr data-wy="2040">
                            <th scope="row" class="bcn-funding__year">WY2040</th>
                            <td class="bcn-funding__num" data-cell="own">$140k</td>
                          </tr>
                          <tr data-wy="2041">
                            <th scope="row" class="bcn-funding__year">WY2041</th>
                            <td class="bcn-funding__num" data-cell="own">$140k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $1.1M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="STY-020"
                data-node-name="Covered Fish Species Life Cycle Models"
                data-node-tier="Study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Covered Fish Species Life Cycle Models</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">STY-020</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.21.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Ecological Response Evaluation Studies</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Oct 2037 – Sep 2042</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2038–WY2042</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$840k · WY2038–2042</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2038">
                            <th scope="row" class="bcn-funding__year">WY2038</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $380k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $380k
                            </td>
                          </tr>
                          <tr data-wy="2042">
                            <th scope="row" class="bcn-funding__year">WY2042</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $460k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $460k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $840k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $840k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 1 sub-studies</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="2 tasks: 2 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="2 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">2 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>2 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="SUB-033"
                data-node-name="Life-cycle model refinement"
                data-node-tier="Sub-study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Life-cycle model refinement</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">SUB-033</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.21.2a</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Covered Fish Species Life Cycle Models</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Oct 2037 – Sep 2042</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2038–WY2042</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$840k · WY2038–2042</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2038">
                            <th scope="row" class="bcn-funding__year">WY2038</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $380k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $380k
                            </td>
                          </tr>
                          <tr data-wy="2042">
                            <th scope="row" class="bcn-funding__year">WY2042</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $460k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $460k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $840k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $840k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 2 tasks</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="2 tasks: 2 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="2 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">2 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>2 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-027"
                data-node-name="Model refinement with monitoring data"
                data-node-tier="Task"
                data-start="2037-10"
                data-end="2038-09"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Model refinement with monitoring data</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-027</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.21.2a.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Life-cycle model refinement</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Oct 2037 – Sep 2038</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Winter freshet (Oct–Mar) → Dry season (Apr–Sep)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2038</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$380k · WY2038–2038</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2038">
                            <th scope="row" class="bcn-funding__year">WY2038</th>
                            <td class="bcn-funding__num" data-cell="own">$380k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $380k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-028"
                data-node-name="Decadal model validation &amp; CDFW report-out"
                data-node-tier="Task"
                data-start="2041-10"
                data-end="2042-09"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Decadal model validation &amp; CDFW report-out</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-028</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.21.2a.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Life-cycle model refinement</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Oct 2041 – Sep 2042</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Winter freshet (Oct–Mar) → Dry season (Apr–Sep)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2042</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$460k · WY2042–2042</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2042">
                            <th scope="row" class="bcn-funding__year">WY2042</th>
                            <td class="bcn-funding__num" data-cell="own">$460k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $460k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="COA-10.26"
                data-node-name="Incorporation of Fish Guidance System into the North Delta Intake Structures"
                data-node-tier="Commitment"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Incorporation of Fish Guidance System into the North Delta Intake
                            Structures</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">COA-10.26</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.26</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Apr 2026 – Dec 2028</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2026–WY2029</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$3.0M · WY2026–2029</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2026">
                            <th scope="row" class="bcn-funding__year">WY2026</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $450k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $450k
                            </td>
                          </tr>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $1.4M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $1.4M
                            </td>
                          </tr>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $950k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $950k
                            </td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $180k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $180k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $3.0M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $3.0M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 1 studies</span>
                        <span
                          class="bcn-status-chip"
                          data-status="at-risk"
                          style="--_chip: var(--st-at-risk, #fc8d59)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">At risk</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="7 tasks: 5 on track, 1 at risk, 0 blocked, 1 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 14.285714285714285%; --_c: #e8973a"
                          title="1 at risk"
                        ></span
                        ><span
                          class="bcn-rollup__seg"
                          style="width: 71.42857142857143%; --_c: #1a9850"
                          title="5 on track"
                        ></span
                        ><span
                          class="bcn-rollup__seg"
                          style="width: 14.285714285714285%; --_c: #1a9850"
                          title="1 complete"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">7 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>5 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>1 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>1
                          complete</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="STY-021"
                data-node-name="Fish Guidance System Study"
                data-node-tier="Study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Fish Guidance System Study</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">STY-021</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.26</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val"
                            >Incorporation of Fish Guidance System into the North Delta Intake
                            Structures</span
                          >
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Apr 2026 – Dec 2028</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2026–WY2029</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$3.0M · WY2026–2029</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2026">
                            <th scope="row" class="bcn-funding__year">WY2026</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $450k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $450k
                            </td>
                          </tr>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $1.4M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $1.4M
                            </td>
                          </tr>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $950k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $950k
                            </td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $180k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $180k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $3.0M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $3.0M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 2 sub-studies</span>
                        <span
                          class="bcn-status-chip"
                          data-status="at-risk"
                          style="--_chip: var(--st-at-risk, #fc8d59)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">At risk</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="7 tasks: 5 on track, 1 at risk, 0 blocked, 1 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 14.285714285714285%; --_c: #e8973a"
                          title="1 at risk"
                        ></span
                        ><span
                          class="bcn-rollup__seg"
                          style="width: 71.42857142857143%; --_c: #1a9850"
                          title="5 on track"
                        ></span
                        ><span
                          class="bcn-rollup__seg"
                          style="width: 14.285714285714285%; --_c: #1a9850"
                          title="1 complete"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">7 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>5 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>1 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>1
                          complete</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <ul class="bcn-detail__constraints">
                            <li>
                              Recommended fish-guidance plan due to CDFW by January 2030 — one year
                              before 30% design finalization
                            </li>
                            <li>
                              Tightest timelines in the science plan: field work must land winters
                              26/27 and 27/28
                            </li>
                          </ul>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="SUB-031"
                data-node-name="Study design &amp; procurement"
                data-node-tier="Sub-study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Study design &amp; procurement</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">SUB-031</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.26a</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Fish Guidance System Study</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Apr 2026 – Dec 2026</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2026–WY2027</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$750k · WY2026–2027</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2026">
                            <th scope="row" class="bcn-funding__year">WY2026</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $450k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $450k
                            </td>
                          </tr>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $300k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $300k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $750k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $750k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 3 tasks</span>
                        <span
                          class="bcn-status-chip"
                          data-status="at-risk"
                          style="--_chip: var(--st-at-risk, #fc8d59)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">At risk</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="3 tasks: 1 on track, 1 at risk, 0 blocked, 1 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 33.33333333333333%; --_c: #e8973a"
                          title="1 at risk"
                        ></span
                        ><span
                          class="bcn-rollup__seg"
                          style="width: 33.33333333333333%; --_c: #1a9850"
                          title="1 on track"
                        ></span
                        ><span
                          class="bcn-rollup__seg"
                          style="width: 33.33333333333333%; --_c: #1a9850"
                          title="1 complete"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">3 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>1 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>1 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>1
                          complete</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-035"
                data-node-name="Detailed study plan &amp; tracking-array design"
                data-node-tier="Task"
                data-start="2026-04"
                data-end="2026-09"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Detailed study plan &amp; tracking-array design</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-035</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.26a.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Study design &amp; procurement</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2026 – Sep 2026</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Dry season (Apr–Sep)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2026</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$160k · WY2026–2026</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2026">
                            <th scope="row" class="bcn-funding__year">WY2026</th>
                            <td class="bcn-funding__num" data-cell="own">$160k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $160k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-036"
                data-node-name="Telemetry equipment &amp; tagged-fish orders"
                data-node-tier="Task"
                data-start="2026-06"
                data-end="2026-12"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Telemetry equipment &amp; tagged-fish orders</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-036</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.26a.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Study design &amp; procurement</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Jun 2026 – Dec 2026</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2026–WY2027</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$480k · WY2026–2027</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2026">
                            <th scope="row" class="bcn-funding__year">WY2026</th>
                            <td class="bcn-funding__num" data-cell="own">$240k</td>
                          </tr>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">$240k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $480k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note">
                            Tag and receiver lead times put winter 26/27 deployment at risk;
                            hatchery fish must be ordered by September.
                          </p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-037"
                data-node-name="Pile &amp; science-deployment permitting"
                data-node-tier="Task"
                data-start="2026-07"
                data-end="2026-12"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Pile &amp; science-deployment permitting</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-037</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.26a.3</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Study design &amp; procurement</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Jul 2026 – Dec 2026</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2026–WY2027</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$110k · WY2026–2027</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2026">
                            <th scope="row" class="bcn-funding__year">WY2026</th>
                            <td class="bcn-funding__num" data-cell="own">$50k</td>
                          </tr>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">$60k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $110k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="SUB-032"
                data-node-name="Field seasons &amp; analysis"
                data-node-tier="Sub-study"
                data-start=""
                data-end=""
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Field seasons &amp; analysis</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">SUB-032</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.26b</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Fish Guidance System Study</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="span">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Rolled-up span</span>
                          <span class="bcn-key-value__val">Oct 2026 – Dec 2028</span>
                          <span class="bcn-key-value__hint"
                            >min start → max end across all tasks in this branch</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2027–WY2029</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$2.3M · WY2027–2029</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Own</th>
                            <th scope="col" class="bcn-funding__num">Rolled up</th>
                            <th scope="col" class="bcn-funding__num">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $1.1M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $1.1M
                            </td>
                          </tr>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $950k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $950k
                            </td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">—</td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">
                              $180k
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="total">
                              $180k
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $0
                            </td>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                              $2.3M
                            </td>
                            <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                              $2.3M
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Status roll-up</h3>
                    <div class="bcn-rollup">
                      <div class="bcn-rollup__head">
                        <span class="bcn-rollup__from">Rolled up from 4 tasks</span>
                        <span
                          class="bcn-status-chip"
                          data-status="on-track"
                          style="--_chip: var(--st-on-track, #91cf60)"
                        >
                          <span class="bcn-status-chip__dot"></span>
                          <span class="bcn-status-chip__label">On track</span>
                        </span>
                      </div>
                      <div
                        class="bcn-rollup__bar"
                        role="img"
                        aria-label="4 tasks: 4 on track, 0 at risk, 0 blocked, 0 complete"
                      >
                        <span
                          class="bcn-rollup__seg"
                          style="width: 100%; --_c: #1a9850"
                          title="4 on track"
                        ></span>
                      </div>
                      <div class="bcn-rollup__counts">
                        <span class="bcn-rollup__total">4 tasks</span>
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #1a9850"></span>4 on
                          track</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #e8973a"></span>0 at
                          risk</span
                        >
                        <span class="bcn-rollup__count"
                          ><span class="bcn-rollup__dot" style="--_c: #d73027"></span>0
                          blocked</span
                        >
                      </div>
                    </div>
                  </section>
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-038"
                data-node-name="Winter 26/27 tracking field season"
                data-node-tier="Task"
                data-start="2026-10"
                data-end="2027-03"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Winter 26/27 tracking field season</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-038</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.26b.1</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Field seasons &amp; analysis</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Oct 2026 – Mar 2027</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Winter freshet (Oct–Mar)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2027</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$820k · WY2027–2027</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">$820k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $820k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-039"
                data-node-name="Season-1 analysis &amp; STAIRS calibration"
                data-node-tier="Task"
                data-start="2027-04"
                data-end="2027-09"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >Season-1 analysis &amp; STAIRS calibration</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-039</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.26b.2</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Field seasons &amp; analysis</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2027 – Sep 2027</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Dry season (Apr–Sep)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2027</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$310k · WY2027–2027</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2027">
                            <th scope="row" class="bcn-funding__year">WY2027</th>
                            <td class="bcn-funding__num" data-cell="own">$310k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $310k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-040"
                data-node-name="Winter 27/28 tracking field season"
                data-node-tier="Task"
                data-start="2027-10"
                data-end="2028-03"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val">Winter 27/28 tracking field season</span>
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-040</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.26b.3</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Field seasons &amp; analysis</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Oct 2027 – Mar 2028</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val">Winter freshet (Oct–Mar)</span>
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2028</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$780k · WY2028–2028</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">$780k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $780k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
              <section
                class="bcn-node-page__panel"
                data-node-panel="TSK-041"
                data-node-name="FGS modeling, analysis &amp; reporting"
                data-node-tier="Task"
                data-start="2028-04"
                data-end="2028-12"
                hidden=""
              >
                <div class="bcn-detail">
                  <!-- ── 1 · Identity ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Identity</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="name">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Name</span>
                          <span class="bcn-key-value__val"
                            >FGS modeling, analysis &amp; reporting</span
                          >
                        </div>
                      </div>
                      <div data-live="idrow">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">ID</span>
                          <span class="bcn-key-value__val">TSK-041</span>
                        </div>
                      </div>
                      <div data-live="coa">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">COA reference</span>
                          <span class="bcn-key-value__val">10.26b.4</span>
                        </div>
                      </div>
                      <div data-live="parent">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Parent</span>
                          <span class="bcn-key-value__val">Field seasons &amp; analysis</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Timing</h3>
                    <div class="bcn-detail__rows">
                      <div data-live="sched">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Schedule</span>
                          <span class="bcn-key-value__val">Apr 2028 – Dec 2028</span>
                        </div>
                      </div>
                      <div data-live="season">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Field seasons</span>
                          <span class="bcn-key-value__val"
                            >Dry season (Apr–Sep) → Winter freshet (Oct–Mar)</span
                          >
                        </div>
                      </div>
                      <div data-live="wy">
                        <div class="bcn-key-value">
                          <span class="bcn-key-value__key">Water years</span>
                          <span class="bcn-key-value__val">WY2028–WY2029</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── -->
                  <section class="bcn-detail__section">
                    <h3 class="bcn-detail__title">Funding plan</h3>
                    <div data-live="funding">
                      <div class="bcn-key-value">
                        <span class="bcn-key-value__key">Planned</span>
                        <span class="bcn-key-value__val">$350k · WY2028–2029</span>
                      </div>
                    </div>
                    <div class="bcn-funding" data-readonly="">
                      <table class="bcn-funding__table">
                        <thead>
                          <tr>
                            <th scope="col">Water year</th>
                            <th scope="col" class="bcn-funding__num">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-wy="2028">
                            <th scope="row" class="bcn-funding__year">WY2028</th>
                            <td class="bcn-funding__num" data-cell="own">$170k</td>
                          </tr>
                          <tr data-wy="2029">
                            <th scope="row" class="bcn-funding__year">WY2029</th>
                            <td class="bcn-funding__num" data-cell="own">$180k</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th scope="row">Total</th>
                            <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">
                              $350k
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </section>
                  <!-- ── 4 · Roll-up (PARENT nodes only) ── -->
                  <!-- ── 5 · Constraints / notes (collapsed by default) ── -->
                  <section class="bcn-detail__section bcn-detail__section--flush">
                    <details class="esa-collapsible esa-collapsible--flush">
                      <summary class="esa-collapsible__summary">
                        <span class="esa-collapsible__title">Constraints &amp; notes</span>
                      </summary>
                      <div class="esa-collapsible__body">
                        <div class="bcn-detail__notes" data-live="notes">
                          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
                        </div>
                      </div>
                    </details>
                  </section>
                </div>
              </section>
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
  --color-accent: #f76b15;
  --color-border: #dcdcdc;
  --color-commitment: #58508d;
  --color-primary: #005862;
  --color-primary-hover: #00474f;
  --color-primary-strong: #2a7e3b;
  --color-surface: #fcfcfc;
  --color-surface-sunken: #efefef;
  --color-text-inverse: #fcfcfc;
  --color-text-link: #005862;
  --color-text-primary: #3d3d3d;
  --color-text-secondary: #525252;
  --color-text-tertiary: #656565;
  --empty-state-description-color: #525252;
  --empty-state-gap: 0.5rem;
  --empty-state-icon-size-md: 48px;
  --empty-state-title-color: #3d3d3d;
  --font-decorative: "Besley", serif;
  --font-mono: "Roboto Mono", ui-monospace, monospace;
  --font-sans: "DM Sans", sans-serif;
  --font-weight-bold: 650;
  --font-weight-medium: 450;
  --font-weight-regular: 350;
  --font-weight-semibold: 550;
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
  --popover-bg: #fcfcfc;
  --popover-border-color: #dcdcdc;
  --popover-color: #3d3d3d;
  --popover-radius: 0.5rem;
  --radius-100: 0.25rem;
  --radius-200: 0.5rem;
  --radius-300: 0.5rem;
  --radius-400: 0.75rem;
  --radius-full: 9999px;
  --shadow-300: 0 6px 24px -6px rgba(0, 0, 0, 0.07);
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
  --transition-fast: 0.15s ease;
  --type-size-100: clamp(0.625rem, 0.56rem + 0.32vw, 0.75rem);
  --type-size-150: clamp(0.6875rem, 0.61rem + 0.38vw, 0.875rem);
  --type-size-200: clamp(0.75rem, 0.66rem + 0.44vw, 0.9375rem);
  --type-size-250: clamp(0.8125rem, 0.71rem + 0.5vw, 1.0625rem);
  --type-size-300: clamp(0.875rem, 0.77rem + 0.52vw, 1.125rem);
  --type-size-400: clamp(1rem, 0.88rem + 0.6vw, 1.25rem);
  --type-size-500: clamp(1.125rem, 0.98rem + 0.72vw, 1.5rem);
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
:host {
  --_width: var(--side-dialog-width, 400px);
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
.esa-empty-state {
  --_empty-icon-size: var(--empty-state-icon-size-md, 48px);
  --_empty-title-size: 16px;
  --_empty-desc-size: 14px;
  --_empty-gap: var(--empty-state-gap, var(--spacing-200, 0.5rem));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-600, 2rem) var(--spacing-400, 1rem);
  gap: var(--_empty-gap);
}
.esa-empty-state__title {
  margin: 0;
  font-size: var(--_empty-title-size);
  font-weight: 600;
  color: var(--empty-state-title-color, var(--color-text-primary, #171717));
}
.esa-empty-state__description {
  margin: 0;
  font-size: var(--_empty-desc-size);
  color: var(--empty-state-description-color, var(--color-text-secondary, #525252));
  max-width: 360px;
}
.esa-empty-state__actions {
  margin-top: var(--spacing-200, 0.5rem);
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
:host {
  display: inline-block;
}
.esa-tooltip-anchor {
  position: relative;
  display: inline-flex;
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
.nav-item + .nav-item {
  margin-top: var(--spacing-050);
}
.nav-sublink.active {
  background: #0000000a;
  color: var(--color-primary);
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
.bcn-node-page__badge {
  font-family: var(--font-mono);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-100);
  white-space: nowrap;
}
.bcn-node-page__utils a {
  text-decoration: none;
}
.bcn-node-page {
  max-width: 720px;
}
.bcn-node-page [data-node-panel][hidden],
.bcn-node-page__empty[hidden] {
  display: none;
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
| `--color-accent` | `#f76b15` | semantic |
| `--color-border` | `#dcdcdc` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-primary` | `#005862` | semantic |
| `--color-primary-hover` | `#00474f` | semantic |
| `--color-primary-strong` | `#2a7e3b` | semantic |
| `--color-surface` | `#fcfcfc` | semantic |
| `--color-surface-sunken` | `#efefef` | semantic |
| `--color-text-inverse` | `#fcfcfc` | semantic |
| `--color-text-link` | `#005862` | semantic |
| `--color-text-primary` | `#3d3d3d` | semantic |
| `--color-text-secondary` | `#525252` | semantic |
| `--color-text-tertiary` | `#656565` | semantic |
| `--empty-state-description-color` | `#525252` | component |
| `--empty-state-gap` | `.5rem` | component |
| `--empty-state-icon-size-md` | `48px` | component |
| `--empty-state-title-color` | `#3d3d3d` | component |
| `--font-decorative` | `"Besley", serif` | component |
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
| `--icon-button-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-medium` | `20px` | component |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-small` | `16px` | component |
| `--icon-size-xs` | `14px` | primitive |
| `--popover-bg` | `#fcfcfc` | component |
| `--popover-border-color` | `#dcdcdc` | component |
| `--popover-color` | `#3d3d3d` | component |
| `--popover-radius` | `.5rem` | component |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-400` | `.75rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--shadow-300` | `0 6px 24px -6px rgba(0, 0, 0, .07)` | primitive |
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
